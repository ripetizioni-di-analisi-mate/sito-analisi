# Domande a tempo ripetitive del Precorso: rifacimento (un capitolo)

Brief del 16/11/2026. Carmine ha approvato di togliere le domande ripetitive anche dal Precorso (che ricevono gratis tutti gli studenti dei corsi di gruppo). Misura prima del lavoro (`strumenti/domande-ripetitive.py`): 59% di situazioni diverse fra le 1–45 e 15% fra le 46–90, il valore più basso fra le materie con lo Studio guidato.

**Segui per intero `istruzioni-agenti/brief-domande-rifacimento-analisi1-fisica1.md`**, con MATERIA = `precorso`. Tutto ciò che quel brief dice «solo per Analisi 1» (catalogo degli errori tipici, diagnosi in `errori`) vale anche per il Precorso. Differenze:

- **Domande a testo vuoto**: nel Precorso non sono le 1–14. L'elenco esatto del capitolo è in `domande_a_testo_vuoto` di `/home/claude/lavoro-af/precorso__<CAPITOLO>-sg.json`. Solo quelle non si toccano; ogni altra domanda con il proprio testo, anche fra le 1–14, è candidata se è un doppione.
- **Livello**: il Precorso è la matematica delle superiori che serve prima di Analisi 1. Livello 1 = un passaggio di calcolo o una proprietà diretta; 2 = l'esercizio tipico del capitolo (equazione o disequazione completa, con condizioni di esistenza); 3 = parametri, casi da distinguere, più tecniche combinate. Le domande restano risolvibili in due minuti.
- **Irrazionali**: le domande 50, 53, 57, 66 e 68 sono equazioni con il solo valore assoluto (fuori capitolo). Riscrivendo le 46–90 tutto il capitolo resta su equazioni e disequazioni irrazionali (radici quadrate e cubiche, condizioni di esistenza e di concordanza dei segni).
- Notazioni: quelle della teoria del capitolo (`src/content/teoria/precorso/<CAPITOLO>.md`) e delle domande esistenti; soluzioni scritte come negli altri file del capitolo (insiemi, intervalli, «$x = \dots$ oppure $x = \dots$»), frazioni sempre in colonna (`\dfrac`).

Cartella di lavoro, file `piano.md`, `verifiche.md`, `esito.json` e rapporto finale: come nel brief di Analisi 1 e Fisica 1, in `/home/claude/lavoro-af/precorso__<CAPITOLO>/`.
