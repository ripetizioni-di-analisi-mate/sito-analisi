# Translate study content from Italian to English

Repository: /home/claude/sito-analisi1 (an Astro site of university math study material: theory, worked examples, exercises). Do NOT run git, do NOT build, do NOT touch any file outside the output folders listed below.

For each topic slug T assigned to you, in the subject M given in your assignment (for example analisi-1), translate:
- src/content/teoria/M/T.md            -> src/content-en/teoria/M/T.md
- every file src/content/svolti/M/T/*.md -> src/content-en/svolti/M/T/<same name>.md
- every file src/content/dafare/M/T/*.md -> src/content-en/dafare/M/T/<same name>.md
(some of these folders may not exist for a topic; skip what is missing). Read each source file in full, write the English file with the Write tool (create folders with mkdir -p). One output file per input file, same file name.

## What must stay byte-identical
- Frontmatter KEYS (titolo, sommario, gratis, teoria, parole) — keys stay in Italian. `gratis` value unchanged. The `teoria:` list contains anchor ids: copy it unchanged.
- Directive syntax and names: `:::definizione`, `:::teorema`, `:::proposizione`, `:::dimostrazione`, `:::esempio`, `:::osservazione`, `:::attenzione`, `:::richiamo`, `:::soluzione`, closing `:::`, and leaf `::grafico{...}`. Keep the directive name in Italian. Keep every `#id` exactly as it is (other files link to it).
- All LaTeX ($...$, $$...$$), except words inside \text{...}, \mbox{...}, \operatorname{...}-style prose, which you translate (e.g. truth tables `\text{V}` -> `\text{T}`, `\text{F}` stays `\text{F}`; `\text{per}` -> `\text{for}`, `\text{se}` -> `\text{if}`). Do not change notation otherwise (keep decimal style, interval notation, function names like \operatorname{sen} -> use \sin if the source writes sen as the sine function, since English uses sin; same for tg -> \tan, cotg -> \cot, arctg -> \arctan).
- In `::grafico{...}` and `::venn{...}` keep every attribute unchanged except `titolo="..."` and `legenda="..."` (translate only words inside \text{}), and the words inside `etichette="x,y,text;..."` (translate the text part only, e.g. `muro` -> `wall`, `max` stays, keep coordinates). `nomi=` (axis names) stays unchanged.
- Markdown structure: headings levels, lists, tables, blank lines, ordering of paragraphs. Do not add, drop, merge or reorder content.

## What to translate
- Frontmatter values of `titolo`, `sommario`, and each entry of `parole` (search keywords).
- The `titolo="..."` attribute of directives.
- All prose, headings, list items, table text, captions.

## Decimal point and labels
In English write decimals with a point: `9{,}81` becomes `9.81` (also inside graph titles). Translate the word part of labels in `punti=` and `vettori=` too when it is an Italian word (e.g. `massimo` -> `maximum`); math symbols stay.
Physics notation: keep all symbols as in the source; units stay SI symbols; `\\text{giri al minuto}` becomes `\\text{rpm}`.

## Bold and italic
Keep the emphasis of the source: a word or phrase in **bold** or *italic* in Italian is in **bold** or *italic* in English, on the corresponding English words. Do not add or remove emphasis.

## Style
Natural, precise English as in a good university textbook (British/American neutral; use American spelling). Use standard English mathematical terminology (e.g. "campo di esistenza"/"dominio" -> "domain", "disequazione" -> "inequality", "insieme delle soluzioni" -> "solution set", "scomposizione" -> "factorization", "valore assoluto" -> "absolute value", "parte reale" -> "real part"). Every deduction keeps its explicit connective (therefore, since, so, hence). Factual, expository tone: no filler, no added advice, no exclamation marks. Keep explanations exactly as complete as the source — this is a faithful translation, not a rewrite.

## Finish
After writing all files, list the output folders and confirm the number of output files equals the number of source files for each of your topics. Report back only: the topics done, file counts (source vs output), and any passage where you were unsure about the meaning or a term (quote the Italian). Keep the report short.
