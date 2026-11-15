# Rifacimento dei doppioni fra le domande 15–45 (Algebra lineare, Matematica generale, Statica)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Lavori su **un solo capitolo**: `src/content/domande/<materia>/<argomento>/`.

Le domande 46–90 di questo capitolo sono già state rifatte il 15/11/2026 con `istruzioni-agenti/brief-domande-rifacimento-90.md` e verificate: **non toccarle**. Le domande 1–14 derivano dalle tracce (alcune hanno il testo vuoto e lo prendono da `src/content/dafare/<materia>/<argomento>/<n>.md`): **non toccarle**. Il lavoro riguarda solo le **15–45**, che in queste materie sono ancora in parte ripetitive (`strumenti/domande-ripetitive.py`: Statica 67%, Matematica generale 78%, Algebra 79% di situazioni diverse).

Leggi per intero `istruzioni-agenti/brief-domande-rifacimento-90.md`: formato, stile, regole anti-ripetizione, controlli e figure valgono tutti, con queste differenze.

## Che cosa fare
1. In `/tmp/lavoro-domande/<materia>-<argomento>-15-45/piano.md` cataloga **tutte le 90 domande** (una riga «n · sezione della teoria · abilità · situazione/oggetto · che cosa si chiede»).
2. Segna fra le 15–45 i doppioni: domande che chiedono la stessa abilità sullo stesso oggetto di un'altra delle 90 (o di una traccia) con altri numeri, che invertono dato e incognita di un'altra, che chiedono la variazione o il rapporto fra due configurazioni di un oggetto già usato, o che hanno lo stesso testo a stampo. Per ogni famiglia di doppioni tieni la domanda migliore (se una delle due è fra 1–14 o 46–90, tieni quella) e riscrivi le altre **sul loro numero**.
3. Ogni domanda nuova sta su una coppia (abilità, situazione) che non compare in nessuna delle altre 89, preferibilmente nelle sezioni della teoria meno coperte. Stessa difficoltà mista, stessa proporzione calcolo/teoria del brief.
4. Tieni in ogni file riscritto la **stessa posizione `corretta`** del file che sostituisci (così l'equilibrio delle posizioni sulle 90 non cambia).
5. **Inglese** (Algebra lineare e Matematica generale): per ogni file italiano riscritto, riscrivi quello con lo stesso numero in `src/content-en/domande/<materia>/<argomento>/` secondo `istruzioni-agenti/brief-traduzione-domande.md` (stessa `corretta`, stesse risposte nello stesso ordine, `## Explanation`). Statica: niente inglese.
6. Controlli del brief: sympy su ogni domanda nuova (risposte sbagliate distanti almeno il 10%, non difendibili), figure con `anteprima_figure.mjs`, `yamlcheck.py`, `domande-simili.py src/content/domande/<materia>/<argomento> 0.7` con lettura a mano.

Se le 15–45 di un capitolo non hanno doppioni veri, non riscrivere nulla per forza: dillo nel rapporto.

## Rapporto (breve, in italiano, ultima risposta)
Doppioni trovati (numero riscritto → domanda tenuta), domande nuove con la sezione della teoria, situazioni nuove introdotte, conferma di sympy, figure, yamlcheck e domande-simili, casi dubbi.
