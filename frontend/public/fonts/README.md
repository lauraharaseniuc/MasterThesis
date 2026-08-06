# Fonturi găzduite local

| Font | Autor | Licență |
|---|---|---|
| Inter | Rasmus Andersson / The Inter Project Authors | SIL Open Font License 1.1 |
| Poppins | Indian Type Foundry (Jonny Pinhorn) | SIL Open Font License 1.1 |

Ambele licențe permit folosirea gratuită, inclusiv comercială, precum și găzduirea
pe server propriu. Textele integrale sunt în `Inter-LICENSE.txt` și
`Poppins-LICENSE.txt` — trebuie păstrate alături de fișierele `.woff2`, pentru că
OFL cere ca notificarea de copyright să însoțească fontul oriunde e redistribuit.
Găzduirea pe site înseamnă redistribuire.

Ce nu permite OFL: vânzarea fonturilor ca produs de sine stătător și folosirea
numelui original pentru o versiune modificată.

## De ce sunt aici și nu pe CDN-ul Google

Încărcarea de pe CDN-ul de fonturi Google trimite adresa IP a fiecărui vizitator
către Google, la fiecare vizită, fără consimțământ. Fișierele sunt subseturile
`latin` și `latin-ext` descărcate de la sursă; `latin-ext` este obligatoriu,
conține ă, ș și ț.

Inter este font variabil — un singur fișier per subset acoperă toate greutățile.
Poppins are fișiere separate pentru 500, 600 și 700, greutățile folosite în
aplicație. Regulile `@font-face` sunt în `src/styles.scss`.
