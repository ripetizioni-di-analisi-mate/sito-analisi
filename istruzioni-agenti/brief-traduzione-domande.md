# Translate timed questions ("domande a tempo") from Italian to English

Repository: /home/claude/sito-analisi. Do NOT run git, do NOT build, do NOT touch any file outside the output folder of your topic.

For the subject M and topic T in your assignment, translate every file
`src/content/domande/M/T/<n>.md` -> `src/content-en/domande/M/T/<n>.md` (same file name; create the folder with mkdir -p).

Each source file has this shape:
```
---
corretta: 2
---

(optional) reworded question text

- answer 1
- answer 2
- answer 3
- answer 4

## Spiegazione

Explanation paragraphs and display formulas.
```

## Rules
- Frontmatter: copy `corretta: N` unchanged. No other keys.
- Keep exactly four list items, in the same order (the correct answer is identified by its position).
- The heading `## Spiegazione` becomes `## Explanation`. No other headings.
- If the file has text before the list (a reworded question), translate it; if it has none, write none.
- All LaTeX stays as it is, except words inside `\text{...}` (translate them) and Italian function names: `\operatorname{sen}` -> `\sin`, `tg` -> `\tan`, `arctg` -> `\arctan`, `cotg` -> `\cot`. Decimals: `9{,}81` -> `9.81`.
- Answers that are words ("Il limite non esiste", "Converge", "Diverge a $+\infty$", "L'equazione non ha soluzioni") become natural English ("The limit does not exist", "Converges", "Diverges to $+\infty$", "The equation has no solutions").
- Keep **bold** and *italic* on the corresponding English words.
- Natural, precise English as in a good university textbook (American spelling), standard terminology (domain, inequality, solution set, factorization, absolute value, real part, l'Hôpital's rule, integration by parts, ratio test, comparison test). Every deduction keeps its explicit connective (therefore, since, so, hence). Factual tone, no additions, no omissions: a faithful translation.
- To check the English mathematical terms used on the site, read `src/content-en/teoria/M/T.md` (the English theory of the same topic) if it exists.

## Finish
Report only: number of source files and output files, and any passage where you were unsure (quote the Italian).
