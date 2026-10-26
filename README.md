# Sito Analisi 1

Sito statico generato con Astro. Contenuti in Markdown con formule LaTeX.

- `src/content/teoria/<argomento>.md` — teoria di un argomento
- `src/content/svolti/<argomento>/<n>.md` — esercizio svolto n (frontmatter: titolo, gratis, teoria, parole)
- `src/content/dafare/<argomento>/<n>.md` — traccia n con blocco `:::soluzione`
- Blocchi: `:::definizione{#ancora titolo="..."}`, `:::teorema`, `:::dimostrazione`, `:::esempio`, `:::osservazione`, `:::attenzione`, `:::richiamo`
- Grafico: `::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.5 ymax=1.3 punti="0,1,vuoto" asintoti="x=1;y=0"}`

Comandi: `npm install`, `npx astro dev` (sviluppo), `npx astro build` (sito pubblico),
`ANTEPRIMA=1 npx astro build && node scripts/anteprima.mjs` (anteprima con link .html).
