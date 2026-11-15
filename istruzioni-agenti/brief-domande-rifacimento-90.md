# Rifacimento delle domande a tempo ripetitive (Algebra lineare, Matematica generale, Fisica 2, Statica, Scienza delle costruzioni)

Repository: /home/claude/ripetizioni-di-analisi-mate/sito-analisi. Non usare git, non lanciare la build. Lavori su **un solo capitolo**: `src/content/domande/<materia>/<argomento>/`.

## Perché
Carmine ha visto che in queste materie le domande 46–90 «cambiano solo il numero»: sono famiglie di 4-5 varianti della stessa situazione (altri numeri, formula inversa, rapporto o variazione fra due configurazioni dello stesso sistema). Le vuole **serie**: 90 domande per capitolo, ognuna chiede qualcosa che lo studente non ha già fatto nelle altre 89. Queste domande servono anche allo Studio guidato, che individua le lacune dello studente: abilità diverse valgono più di numeri diversi.

## Che cosa riscrivere
- **Algebra lineare, Matematica generale, Fisica 2, Statica**: riscrivi da zero (sovrascrivendo) i file `46.md` … `90.md`. Le 1–45 non si toccano.
- **Scienza delle costruzioni**: riscrivi da zero `46.md` … `90.md` **e** sostituisci fra le `15.md` … `45.md` quelle che sono doppioni di un'altra domanda del capitolo (stessa abilità sulla stessa situazione con altri numeri, dato e incognita invertiti, stesso testo a stampo). Le `1.md` … `14.md` derivano dalle tracce e non si toccano. Dei doppioni ne tieni uno (il migliore) e riscrivi gli altri sul loro numero.
- **Inglese** (solo Algebra lineare, Matematica generale, Fisica 2, che hanno la versione inglese completa): per ogni file italiano riscritto, riscrivi il file con lo stesso numero in `src/content-en/domande/<materia>/<argomento>/` secondo `istruzioni-agenti/brief-traduzione-domande.md` (stessa `corretta`, stesse risposte nello stesso ordine, `## Explanation`, etichette delle figure tradotte come dice `istruzioni-agenti/brief-traduzione.md`), con i termini della teoria inglese `src/content-en/teoria/<materia>/<argomento>.md`. Statica e Scienza delle costruzioni: niente inglese.

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-domande-aggiuntive.md` e, se esiste, il brief delle domande della materia (`istruzioni-agenti/brief-domande-statica.md` per Statica; per Scienza delle costruzioni valgono le stesse figure `::struttura` di Statica): formato, regole delle risposte, errori tipici da usare come risposte sbagliate, figure, controlli.
2. Leggi `GUIDA-CONTENUTI.md`, il brief della materia per le notazioni (`brief-algebra.md`, `brief-matematica-generale.md`, `brief-fisica2.md`, `brief-statica.md`, `brief-scienza-delle-costruzioni.md`) e carica la skill **scrittura-umana-carmine** con lo strumento Skill. I brief possono contenere il vecchio percorso `/home/claude/sito-analisi1` o `/home/claude/sito-analisi`: usa quello scritto qui sopra.
3. Leggi la teoria dell'argomento (`src/content/teoria/<materia>/<argomento>.md`, tutte le sezioni `##`), le schede svolte (`src/content/svolti/<materia>/<argomento>/`), le tracce con le soluzioni (`src/content/dafare/<materia>/<argomento>/`) e **tutte le 90 domande esistenti**.

## Piano anti-ripetizione (obbligatorio, prima di scrivere)
Lavora in `/tmp/lavoro-domande/<materia>-<argomento>-90/`. Scrivi `piano.md` con:
1. **Catalogo delle domande che restano** (1–45; per Scienza delle costruzioni le 1–45 meno i doppioni): una riga per domanda «n · sezione della teoria · abilità richiesta · situazione/oggetto · che cosa si chiede». Per Scienza delle costruzioni segna i doppioni trovati fra le 15–45 e quale tieni.
2. **Piano delle domande nuove**, una riga ciascuna con lo stesso schema. Regole:
   - nessuna coppia (abilità, situazione) già presente nel catalogo né ripetuta nel piano;
   - **vietato** riprendere una domanda esistente cambiandone i numeri, invertirne la formula (dato ↔ incognita sullo stesso oggetto), chiedere «la variazione», «il rapporto» o «di quanto cambia» fra due configurazioni di un oggetto già usato. Una domanda su un rapporto o una proporzionalità è ammessa solo se è l'unica di quel tipo nel capitolo e su un oggetto nuovo;
   - vietati gli schemi a stampo: due domande non possono avere lo stesso testo con parole o numeri diversi (anche fra le nuove);
   - varia gli oggetti (matrici di forme diverse, spazi e sottospazi diversi, funzioni di famiglie diverse, circuiti con topologie diverse, travi con vincoli e carichi diversi, sezioni diverse…), le grandezze richieste e il tipo di risposta (valore, espressione simbolica, verso o segno, affermazione vera, confronto qualitativo, scelta della figura o della configurazione giusta, proprietà che si conserva o no);
   - coprire **tutte** le sezioni della teoria, privilegiando quelle con meno domande nel catalogo; circa due terzi di calcolo e un terzo di teoria applicata a un caso preciso (mai definizioni da recitare);
   - almeno 8 domande su situazioni che nelle domande rimaste e nelle tracce **non compaiono affatto** (un caso classico d'esame mancante, un caso limite, un'applicazione concreta);
   - difficoltà mista: circa un terzo semplici (un passaggio), metà medie, il resto più impegnative ma sempre risolvibili in due minuti con carta e penna.
Solo dopo il piano scrivi i file.

## Che cosa scrivere
- Ogni file nuovo ha il testo completo della domanda prima dell'elenco delle 4 risposte, autosufficiente, senza rimandi ad altre domande, alla pagina o alle tracce. Figure (`::grafico`, `::struttura` o quelle già usate nel capitolo) dove aiutano, con solo i dati; assi orientati.
- Spiegazione nello stile del sito: deduzioni complete con connettivi (quindi, poiché, perciò, allora), una frase per passaggio, frazioni in colonna anche negli esponenti, virgola decimale `{,}`, graffa solo per condizioni da soddisfare insieme, mai «la parentesi», nessun rimando alla posizione delle risposte (l'ordine viene mescolato).
- **Posizioni della risposta corretta su tutte le 90**: alla fine ogni posizione 1, 2, 3, 4 è corretta fra 20 e 25 volte. Scegli la posizione nelle domande riscritte per riequilibrare.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta e verifica che le tre sbagliate siano diverse (valori numerici distanti almeno il 10%) e non difendibili (nessun sottointervallo, nessuna forma equivalente della corretta, nessuna risposta vera per un'altra lettura del testo). Per le domande di teoria scrivi il ragionamento nel file di lavoro. `pip install --break-system-packages sympy` se manca.
- Figure: `node strumenti/anteprima_figure.mjs /tmp/lavoro-domande/<materia>-<argomento>-90/figure.png <file con figura…>` dalla radice del repository, 0 problemi, e guarda il PNG.
- `python3 strumenti/yamlcheck.py <file scritti…>` senza errori.
- `python3 strumenti/domande-simili.py src/content/domande/<materia>/<argomento> 0.7`: controlla a mano ogni coppia segnalata che coinvolge un file riscritto e riscrivi i doppioni. Rileggi poi il piano e i file nuovi uno accanto all'altro: il controllo testuale non basta.

## Rapporto (breve, in italiano, ultima risposta)
File riscritti (italiano e, se c'è, inglese), per Scienza delle costruzioni i doppioni sostituiti fra le 15–45, divisione delle domande nuove fra le sezioni della teoria, quante di calcolo e quante di teoria, quante con figura, situazioni nuove introdotte (elenco breve), conteggio finale delle posizioni 1-2-3-4 sulle 90, conferma di sympy, figure, yamlcheck e domande-simili.
