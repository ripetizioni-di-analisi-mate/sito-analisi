# Verifica della pulizia delle domande (28/11/2026)

Repository: `/home/claude/sito-analisi`. Non usare git, non lanciare la build. Lancia Python sempre con `python3 -I` (in `/tmp` c'è un `glob.py` estraneo che rompe gli import).

Altri agenti hanno riscritto alcune domande a tempo seguendo `istruzioni-agenti/brief-pulizia-domande.md` (leggilo per intero: contiene le regole). Motivi: imperativo nel testo, doppione di un'altra domanda del capitolo, simbolo «≃» solo nella risposta corretta, situazione artificiosa (sensori, programmi, archivi, contatori usati come pretesto). Tu non hai visto il loro lavoro: lo controlli da zero. Il tuo gruppo è in `/home/claude/rev2/verifica/<gruppo>.json` (elenco dei file italiani riscritti). La nota di chi ha riscritto è negli esiti `/home/claude/rev2/esiti/*.json` (cerca il percorso del file). La versione precedente di ogni file è in `/home/claude/rev2/prima/<percorso>` (copia fatta prima della pulizia).

Usa i punti 1-7 di `istruzioni-agenti/brief-verifica-correzione-revisione-quiz.md` (correttezza con sympy e nessuna risposta sbagliata difendibile, spiegazione, regole di scrittura con la skill **scrittura-umana-carmine**, testo naturale e nel tema senza pretesti, doppioni nel capitolo, inglese con stessa `corretta` e stesse risposte nello stesso ordine, ancora della teoria). In più: la domanda riscritta deve chiedere la stessa abilità della precedente e restare al livello del capitolo.

Se trovi un problema correggilo tu, in italiano e in inglese, con una modifica il più possibile piccola; senza cambiare `corretta` se non è indispensabile. Se la materia ha la classificazione dello Studio guidato (`abilita["<materia>/<capitolo>"]` in `src/data/studio-guidato-livelli.json`) e cambi che cosa chiede la domanda, indica il livello `[l, i]`. Dopo ogni modifica `python3 -I strumenti/yamlcheck.py <file>`; con una figura `node strumenti/anteprima_figure.mjs /tmp/ver-<gruppo>.png <file>` con 0 problemi.

## Esito
Scrivi `/home/claude/rev2/verifiche/<gruppo>.json`: lista con una voce per file, `{"it": "<percorso>", "esito": "ok" | "corretto", "problemi": ["…"], "livello": [l, i] | null}`. Poi, come ultima risposta, un rapporto breve in italiano: file controllati, errori veri trovati, altre correzioni, problemi rimasti.
