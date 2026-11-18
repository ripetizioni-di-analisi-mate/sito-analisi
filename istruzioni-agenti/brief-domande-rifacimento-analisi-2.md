# Domande a tempo ripetitive di Analisi 2: rifacimento (un capitolo)

Brief del 18/11/2026. Richiesta di Carmine: «aggiusta le domande di Analisi 2», dopo il controllo delle materie che ha trovato in Analisi 2 il 31% di domande ripetute (in ogni capitolo circa 30 domande su 90 hanno lo stesso testo di un'altra con altri numeri). Misura prima del lavoro (`strumenti/domande-ripetitive.py analisi-2`): 69% di situazioni diverse fra le 1–45 e 29% fra le 46–90.

**Segui per intero `istruzioni-agenti/brief-domande-rifacimento-analisi1-fisica1.md`**, con MATERIA = `analisi-2`. Differenze:

- **Domande a testo vuoto**: in Analisi 2 non sono le 1–14. L'elenco esatto del capitolo è in `domande_a_testo_vuoto` di `/home/claude/lavoro-af/analisi-2__<CAPITOLO>-sg.json`. Solo quelle non si toccano; ogni altra domanda con il proprio testo, anche fra le 1–14, è candidata se è un doppione.
- **Errori tipici**: Analisi 2 non ha il catalogo degli errori tipici. In `esito.json` niente campo `errori`; i distrattori si costruiscono comunque su errori plausibili (segno, fattore, estremi d'integrazione, ipotesi non verificata), controllati con sympy.
- **Livello**: 1 = un passaggio (una derivata parziale, un gradiente, un dominio semplice, una parametrizzazione nota); 2 = l'esercizio tipico del capitolo (punti critici e Hessiana, integrale doppio su un dominio normale, flusso di un campo semplice, raggio di convergenza); 3 = casi da distinguere, Hessiana degenere, cambi di variabile, ipotesi di un teorema da verificare, distrattori sottili. Sempre risolvibili in due minuti con carta e penna.
- **Capitoli condivisi**: Successioni e serie di funzioni, Serie di potenze e Serie di Fourier sono ripresi tali e quali da Analisi 3; non serve fare nulla di diverso, la classificazione viene copiata dopo.
- Notazioni: quelle della teoria del capitolo (`src/content/teoria/analisi-2/<CAPITOLO>.md`) e delle domande esistenti; frazioni sempre in colonna (`\dfrac`), virgola decimale `{,}`.

Cartella di lavoro, file `piano.md`, `verifiche.md`, `esito.json` e rapporto finale: come nel brief di Analisi 1 e Fisica 1, in `/home/claude/lavoro-af/analisi-2__<CAPITOLO>/`.
