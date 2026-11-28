# Verifica della correzione dei quiz del 28/11/2026

Repository: `/home/claude/sito-analisi`. Non usare git, non lanciare la build. Lancia Python sempre con `python3 -I` (in `/tmp` c'è un `glob.py` estraneo che rompe gli import).

Un altro agente ha corretto le domande a tempo riscritte il 28/11, seguendo `istruzioni-agenti/brief-correzione-revisione-quiz.md` (leggilo per intero: contiene le regole). Tu non hai visto il suo lavoro: lo controlli da zero. Il tuo gruppo è in `/home/claude/rev-fix/gruppi/<gruppo>.json` (lotto → file italiani da controllare). Per ogni file trovi i dati del lotto in `/home/claude/rev-fix/lotti/<lotto>.json` (file inglese, versione vecchia) e la scelta fatta in `/home/claude/rev-fix/esiti/<lotto>.json` (strada A, B o C, nota).

## Che cosa controllare in ogni file (italiano e, se esiste, inglese)
1. **Correttezza**: rifai il calcolo con Python e sympy (o ragiona per esteso per le domande a parole) e controlla che la risposta segnata da `corretta` sia giusta e che nessuna risposta sbagliata sia difendibile (sottointervalli, forme equivalenti, letture diverse del testo). Valori numerici sbagliati distanti almeno il 10% dalla corretta.
2. **Spiegazione**: 3-6 frasi, deduzioni complete con connettivo, arriva al risultato nella forma della risposta corretta, nessun passaggio falso, nessun rimando alla posizione delle risposte.
3. **Regole di scrittura** di `GUIDA-CONTENUTI.md` e della skill **scrittura-umana-carmine** (caricala con lo strumento Skill): frazioni in colonna, virgola decimale `{,}` in italiano e punto in inglese, nessuna lineetta «—», niente frasi da IA, niente «la parentesi», graffa solo per condizioni da soddisfare insieme, niente imperativi nel testo della domanda.
4. **Testo naturale e nel tema**: niente sensori, fogli di calcolo, laboratori che «riferiscono»; domanda al livello e nel tema del capitolo (leggi la teoria del capitolo); convenzioni della materia (sezione della materia in `CLAUDE.md` e brief della materia).
5. **Doppioni**: la domanda non deve ripetere un'altra domanda del capitolo con altri numeri, con dato e incognita invertiti o con lo stesso testo a stampo. `python3 -I strumenti/domande-simili.py src/content/domande/<materia>/<capitolo> 0.7` e poi lettura.
6. **Inglese**: stessa `corretta`, stesse risposte nello stesso ordine, traduzione fedele.
7. **Rimando alla teoria**: se c'è, l'ancora `#id` esiste nella teoria (italiana e inglese).
8. Strada A: la scelta è giusta (la vecchia non è un doppione di una domanda attuale).

## Se trovi un problema
Correggilo tu nel file, in italiano e in inglese, con una modifica il più possibile piccola. Se cambi davvero che cosa chiede la domanda (o l'ordine delle risposte), scrivilo nell'esito, con `livello` aggiornato `[l, i]` se la materia ha la classificazione dello Studio guidato (`abilita["<materia>/<capitolo>"]` in `src/data/studio-guidato-livelli.json`). Dopo ogni modifica: `python3 -I strumenti/yamlcheck.py <file>` e, se c'è una figura, `node strumenti/anteprima_figure.mjs /tmp/ver-<gruppo>.png <file>` con 0 problemi.

## Esito
Scrivi `/home/claude/rev-fix/verifiche/<gruppo>.json`: lista con una voce per file controllato, `{"it": "<percorso>", "esito": "ok" | "corretto", "problemi": ["…"], "livello": [l, i] | null}` (`livello` solo se l'hai cambiato). Poi, come ultima risposta, un rapporto breve in italiano: file controllati, errori veri trovati (risposte sbagliate o difendibili, passaggi falsi), altre correzioni, problemi rimasti.
