/**
 * Construiește lista albă de activități pentru /api/generate-activity.
 *
 * Endpoint-ul interpolează `activityText` direct în promptul trimis către Groq,
 * deci fără listă albă oricine îl poate folosi ca proxy LLM gratuit, injectându-și
 * propriile instrucțiuni. Lista de mai jos conține hash-urile celor ~417 activități
 * care chiar există în aplicație; handler-ul respinge orice altceva.
 *
 * Extragerea NU se face cu regex, ci cu parserul de template al Angular. E același
 * cod care rulează la build, deci textul obținut aici e identic caracter cu caracter
 * cu cel pe care îl trimite browserul (inclusiv decodarea entităților precum &quot;).
 * Nu înlocui cu regex: un singur caracter diferență înseamnă 403 în producție.
 *
 * Rulează automat la fiecare build (vezi `buildCommand` din vercel.json).
 */
import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseTemplate } from '@angular/compiler';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const OUT = join(ROOT, 'api', '_activities.json');

/** Metoda apelată din template pentru a deschide modalul cu fișa generată. */
const HANDLER_NAME = 'generateActivity';

/**
 * Sub acest prag presupunem că extragerea s-a stricat (selector redenumit,
 * parser schimbat) și oprim build-ul, în loc să publicăm o listă goală care
 * ar respinge toate cererile legitime.
 */
const MIN_EXPECTED = 300;

const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return htmlFiles(full);
    return full.endsWith('.html') ? [full] : [];
  });

/**
 * Parcurge recursiv graful de obiecte produs de parseTemplate și adună argumentele
 * literale ale apelurilor `generateActivity('...')`. Umblatul generic prin obiect
 * e intenționat: formele nodurilor din AST se schimbă între versiuni de Angular,
 * dar `Call { receiver: { name }, args: [{ value }] }` a rămas stabil.
 */
const collectLiterals = (node, found, seen = new WeakSet()) => {
  if (node === null || typeof node !== 'object') return;
  if (seen.has(node)) return;
  seen.add(node);

  if (Array.isArray(node)) {
    for (const item of node) collectLiterals(item, found, seen);
    return;
  }

  const isTargetCall =
    node.receiver?.name === HANDLER_NAME && Array.isArray(node.args);

  if (isTargetCall) {
    const [first] = node.args;
    // `value` există doar pe LiteralPrimitive; un argument dinamic îl lasă undefined.
    if (typeof first?.value === 'string') {
      found.push(first.value);
    } else {
      throw new Error(
        `${HANDLER_NAME}() apelat cu un argument care nu e text literal. ` +
          `Lista albă nu poate acoperi valori calculate la runtime.`
      );
    }
  }

  for (const key of Object.keys(node)) {
    collectLiterals(node[key], found, seen);
  }
};

const texts = [];

for (const file of htmlFiles(SRC)) {
  const source = readFileSync(file, 'utf8');
  if (!source.includes(HANDLER_NAME)) continue;

  const parsed = parseTemplate(source, relative(ROOT, file), {
    preserveWhitespaces: true,
  });

  if (parsed.errors?.length) {
    throw new Error(
      `Template invalid: ${relative(ROOT, file)}\n` +
        parsed.errors.map((e) => `  ${e.msg}`).join('\n')
    );
  }

  try {
    collectLiterals(parsed.nodes, texts);
  } catch (err) {
    throw new Error(`${relative(ROOT, file)}: ${err.message}`);
  }
}

if (texts.length < MIN_EXPECTED) {
  throw new Error(
    `Am găsit doar ${texts.length} activități (minim așteptat: ${MIN_EXPECTED}). ` +
      `Probabil extragerea s-a stricat — build oprit ca să nu public o listă incompletă.`
  );
}

// Aceeași normalizare ca în handler: textul primit e trimis prin trim() și NFC
// înainte de hash, ca diferențele invizibile de spațiere să nu dea 403.
const hashes = [
  ...new Set(
    texts.map((text) =>
      createHash('sha256').update(text.normalize('NFC').trim(), 'utf8').digest('hex')
    )
  ),
].sort();

writeFileSync(OUT, `${JSON.stringify(hashes, null, 0)}\n`, 'utf8');

console.log(
  `Listă albă: ${texts.length} apeluri, ${hashes.length} activități distincte → ` +
    `${relative(ROOT, OUT)}`
);
