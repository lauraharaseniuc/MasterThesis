import { createHash } from 'node:crypto';
import { get, put } from '@vercel/blob';
import type { VercelRequest, VercelResponse } from '@vercel/node';

import allowedActivityHashes from './_activities.json';

const buildPromptInformatica = (activityText: string) => `Ești profesor de informatică la liceu în România (clasa a IX-a sau a X-a).
Generează o fișă de lucru completă și detaliată bazată pe această activitate de învățare:

"${activityText}"

Structurează fișa astfel:

# [Titlu scurt al fișei]

## Noțiuni teoretice
(Explicații clare cu exemple de cod funcționale în Python sau C++ după context. Explică fiecare concept pas cu pas.)

## Exerciții rezolvate

### Exercițiul 1 — [titlu]
**Enunț:** ...
**Rezolvare:**
\`\`\`python
# cod complet cu comentarii explicative
\`\`\`
**Explicație:** (de ce funcționează astfel)

### Exercițiul 2 — [titlu]
(la fel ca mai sus)

## Exerciții propuse
1. **[Titlu]** — [enunț] (Dificultate: ușor)
2. **[Titlu]** — [enunț] (Dificultate: mediu)
3. **[Titlu]** — [enunț] (Dificultate: mediu)
4. **[Titlu]** — [enunț] (Dificultate: dificil)

## Exercițiu bonus
(Un exercițiu mai complex pentru elevii avansați, cu enunț complet)

Folosește un ton didactic și prietenos. Include cod complet care poate fi rulat direct.`;

const buildPromptTic = (activityText: string) => `Ești profesor de TIC (Tehnologia Informației și Comunicațiilor) la liceu în România (clasa a IX-a).
TIC nu este o materie de programare — nu include cod sursă, algoritmi sau exerciții de programare.
Generează o fișă de lucru completă și detaliată bazată pe această activitate de învățare:

"${activityText}"

Fișa trebuie să conțină activități practice realizabile la clasă sau acasă: tehnoredactare, lucru cu aplicații Office/Google Workspace, navigare web, colaborare digitală, analiză critică, crearea de documente/prezentări/formulare etc.

Structurează fișa astfel:

# [Titlu scurt al fișei]

## Context și obiective
(Explică pe scurt ce vor exersa elevii și de ce este util în viața reală.)

## Sarcini de lucru

### Sarcina 1 — [titlu]
**Ce ai de făcut:** (descriere clară, pas cu pas)
**Rezultat așteptat:** (ce trebuie să livreze elevul)

### Sarcina 2 — [titlu]
(la fel ca mai sus)

### Sarcina 3 — [titlu]
(la fel ca mai sus)

## Reflecție
(1–2 întrebări de gândire critică legate de activitate, fără răspuns dat)

## Provocare suplimentară
(O sarcină opțională mai complexă pentru elevii care termină repede)

Folosește un ton didactic și prietenos. Nu include niciun cod sursă sau pseudocod.`;

const buildPrompt = (activityText: string, subject: string) =>
  subject === 'tic' ? buildPromptTic(activityText) : buildPromptInformatica(activityText);

const MAX_ACTIVITY_LENGTH = 750;

const ALLOWED_HASHES = new Set<string>(allowedActivityHashes);

const hashActivity = (text: string): string =>
  createHash('sha256').update(text.normalize('NFC').trim(), 'utf8').digest('hex');

/**
 * Fisele generate se salveaza in Vercel Blob si se servesc de acolo la
 * urmatoarele click-uri pe aceeasi activitate, timp de 24 de ore. Primul click
 * de dupa expirare regenereaza fisa si o suprascrie, deci continutul se
 * improspateaza zilnic, iar modelul e apelat cel mult o data pe zi per
 * activitate in loc de o data la fiecare click.
 *
 * Incrementeaza CACHE_VERSION ori de cate ori modifici buildPromptInformatica
 * sau buildPromptTic — cheia include versiunea, deci fisele vechi sunt ignorate
 * si regenerate la primul click de dupa deploy.
 */
const CACHE_VERSION = 'v1';

/**
 * Cat timp ramane valabila o fisa salvata. Peste acest prag, urmatorul click o
 * regenereaza; pana atunci toti utilizatorii primesc aceeasi varianta salvata.
 */
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;

/** Fara store configurat (dev local, prima rulare) mergem direct la model. */
const cacheEnabled = (): boolean =>
  Boolean(process.env['BLOB_READ_WRITE_TOKEN'] ?? process.env['BLOB_STORE_ID']);

const cachePath = (activityText: string, subject: string): string =>
  `fise/${CACHE_VERSION}/${subject}/${hashActivity(activityText)}.md`;

/**
 * Fisa salvata la un click anterior, sau null daca nu exista inca. Orice eroare
 * de storage e tratata ca lipsa: mai bine regeneram o fisa in plus decat sa
 * pice generarea.
 */
const readCache = async (path: string): Promise<string | null> => {
  if (!cacheEnabled()) return null;

  try {
    const found = await get(path, { access: 'public' });
    if (!found || found.statusCode !== 200) return null;

    const ageMs = Date.now() - new Date(found.blob.uploadedAt).getTime();
    if (!Number.isFinite(ageMs) || ageMs > CACHE_TTL_MS) {
      // Fisa a expirat. Inchidem stream-ul pe care nu-l mai citim si o regeneram.
      await found.stream.cancel();
      return null;
    }

    const content = await new Response(found.stream).text();
    return content.trim() ? content : null;
  } catch (err) {
    console.error('Citire cache esuata pentru', path, err);
    return null;
  }
};

/** Salveaza fisa pentru click-urile urmatoare. Esecul nu afecteaza raspunsul. */
const writeCache = async (path: string, content: string): Promise<void> => {
  if (!cacheEnabled()) return;

  try {
    await put(path, content, {
      access: 'public',
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: 'text/markdown; charset=utf-8',
      // Implicit CDN-ul ar tine copia o luna, iar dupa suprascriere am citi
      // in continuare varianta veche (cu uploadedAt vechi) si am regenera in
      // bucla. 60s e minimul acceptat si limiteaza fereastra la un minut,
      // pastrand totusi protectia pentru cazul in care o clasa intreaga
      // apasa butonul in acelasi timp.
      cacheControlMaxAge: 60,
    });
  } catch (err) {
    console.error('Scriere cache esuata pentru', path, err);
  }
};

const GROQ_MODEL = process.env['GROQ_MODEL'] ?? 'qwen/qwen3.8-27b';

const ALLOWED_ORIGINS = new Set([
  'https://levelupeduro.org',
  'https://www.levelupeduro.org',
]);

const isAllowedOrigin = (req: VercelRequest): boolean => {
  if (process.env['VERCEL_ENV'] !== 'production') {
    return true;
  }

  const origin = req.headers.origin;
  if (origin) {
    return ALLOWED_ORIGINS.has(origin);
  }

  const referer = req.headers.referer;
  if (referer) {
    try {
      return ALLOWED_ORIGINS.has(new URL(referer).origin);
    } catch {
      return false;
    }
  }

  return false;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  const { activityText, subject } = req.body as { activityText?: string; subject?: string };
  if (typeof activityText !== 'string' || !activityText.trim()) {
    return res.status(400).json({ error: 'activityText is required' });
  }

  if (activityText.length > MAX_ACTIVITY_LENGTH) {
    return res.status(400).json({ error: 'activityText is too long' });
  }

  if (subject !== undefined && subject !== 'informatica' && subject !== 'tic') {
    return res.status(400).json({ error: 'subject is invalid' });
  }

  if (!ALLOWED_HASHES.has(hashActivity(activityText))) {
    return res.status(403).json({ error: 'Unknown activity' });
  }

  const resolvedSubject = subject ?? 'informatica';
  const path = cachePath(activityText, resolvedSubject);

  const cached = await readCache(path);
  if (cached) {
    return res.status(200).json({ content: cached, cached: true });
  }

  const apiKey = process.env['GROQ_API_KEY'];
  if (!apiKey) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: [{ role: 'user', content: buildPrompt(activityText, resolvedSubject) }],
        max_completion_tokens: 6000,
        temperature: 0.7,
        reasoning_effort: 'none',
        reasoning_format: 'hidden',
      }),
    });

    const data = await response.json() as {
      choices?: Array<{ message?: { content?: string }; finish_reason?: string }>;
      error?: { message: string };
    };

    if (!response.ok || data.error) {
      console.error('Groq error:', data.error);
      return res.status(502).json({ error: data.error?.message ?? 'Groq error' });
    }

    const choice = data.choices?.[0];
    const content = choice?.message?.content ?? '';

    if (!content.trim()) {
      console.error('Groq a răspuns fără conținut. finish_reason:', choice?.finish_reason);
      return res.status(502).json({ error: 'Groq returned empty content' });
    }

    await writeCache(path, content);

    return res.status(200).json({ content, cached: false });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
