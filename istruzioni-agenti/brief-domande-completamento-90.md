# Completamento a 90 domande a tempo per capitolo (Analisi 1 · Successioni, Test Bocconi, Fisica zero)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Lavori su **un solo capitolo**: `src/content/domande/<MATERIA>/<CAPITOLO>/` e la cartella inglese con lo stesso nome `src/content-en/domande/<MATERIA>/<CAPITOLO>/`. Non toccare nient'altro.

## Perché
Richiesta di Carmine (27/11/2026): ogni capitolo di ogni materia deve avere **90 domande a tempo, non inutilmente ripetitive**. Servono anche allo Studio guidato, che individua le lacune dello studente: abilità diverse valgono più di numeri diversi. Questi tre gruppi sono gli unici sotto le 90:
- **analisi-1/successioni**: capitolo nuovo, 0 domande. Scrivi da zero i file `1.md` … `90.md` (italiano e inglese).
- **test-bocconi/<capitolo>**: 45 domande buone e tutte diverse. **Le `1.md` … `45.md` non si toccano**; scrivi `46.md` … `90.md` (italiano e inglese).
- **fisica-zero/<capitolo>**: 45 domande quasi tutte varianti numeriche della stessa domanda (7-9 situazioni diverse su 45). Riscrivi il capitolo intero: **90 domande**, `1.md` … `90.md`, sovrascrivendo i file esistenti (italiano e inglese). Delle domande esistenti puoi tenere, sul suo numero, **una sola per famiglia** di varianti (la migliore), e solo se rispetta tutte le regole qui sotto; tutte le altre si riscrivono.

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md` (formato del file, regole delle risposte, regole di scrittura), `istruzioni-agenti/brief-domande-aggiuntive.md` e `istruzioni-agenti/brief-traduzione-domande.md`. Valgono tutti, con le eccezioni scritte qui.
2. Leggi `GUIDA-CONTENUTI.md` e carica la skill **scrittura-umana-carmine** con lo strumento Skill.
3. Leggi la teoria del capitolo (`src/content/teoria/<MATERIA>/<CAPITOLO>.md`, tutte le sezioni `##`, e la versione inglese in `src/content-en/teoria/…`), le schede svolte (`src/content/svolti/<MATERIA>/<CAPITOLO>/`), le tracce con le soluzioni (`src/content/dafare/<MATERIA>/<CAPITOLO>/`) e **tutte le domande già presenti** nel capitolo (italiane e inglesi), più due o tre domande di un altro capitolo della stessa materia per prendere tono, livello e grafia inglese.

## Indicazioni per gruppo
- **Analisi 1 · Successioni** (livello universitario, esame di Analisi 1). Ogni file ha **il proprio testo** prima dell'elenco, autosufficiente (niente file a testo vuoto). Copri tutte le dieci sezioni della teoria del capitolo (successioni e limite; unicità del limite e successioni limitate; operazioni con i limiti e forme indeterminate; teoremi di confronto; successioni monotone; il numero $e$; limiti notevoli; criterio del rapporto e gerarchia degli infiniti; successioni estratte e Bolzano-Weierstrass; limiti di successioni e limiti di funzioni), con un peso proporzionato allo spazio che ciascuna ha nella teoria. Solo ciò che la teoria contiene: niente argomenti che il capitolo non tratta. Notazioni e nomi dei teoremi **come nella teoria del capitolo**. Domande di teoria sempre su una successione precisa (quale ipotesi è soddisfatta, quale affermazione è vera, un controesempio), mai definizioni da recitare.
- **Test Bocconi** (test di ammissione: quesiti brevi, livello liceo, due minuti). Stesso tono e stessa forma delle 1-45 del capitolo. In **Comprensione del testo** ogni file nuovo ha il **proprio brano originale** in citazione Markdown (`>`, 3-6 periodi, inventato da te, su temi vari: economia, società, scienza, storia, arte, lavoro), seguito dalla domanda: niente brani ripresi da domande esistenti o da testi pubblicati, e varia il tipo di domanda (idea principale, funzione di un periodo, inferenza, significato di una parola nel contesto, tono, struttura dell'argomento, affermazione compatibile o no con il testo). In **Pensiero critico** varia il tipo di ragionamento (assunzione implicita, rafforzare e indebolire, conclusione che segue, errore di ragionamento, analogia, dati che mancano). Matematica: calcolo a mano, niente calcolatrice.
- **Fisica zero** (Percorso per principianti: chi ripassa la fisica dalle basi, senza un esame da preparare). Livello e lessico della teoria del capitolo, un solo concetto per domanda, numeri semplici, contesti quotidiani concreti e diversi fra loro (cucina, sport, casa, trasporti, meteo, corpo umano, attrezzi). Circa metà calcolo semplice (uno o due passaggi) e metà comprensione su un caso preciso (quale grandezza cambia, che cosa succede se…, quale unità è corretta, quale grafico corrisponde, verso di una forza, confronto qualitativo). Unità sempre scritte, $g = 9{,}8\,\mathrm{m/s^2}$ salvo che la teoria del capitolo usi un altro valore (in quel caso, quello della teoria). Risposte sbagliate distanti almeno il 10% dalla corretta.

## Piano anti-ripetizione (obbligatorio, prima di scrivere)
Lavora in `/home/claude/lavoro-90/<MATERIA>__<CAPITOLO>/`. Scrivi `piano.md` con:
1. **Catalogo delle domande che restano** (Bocconi: le 1-45; Fisica zero: quelle che tieni, una per famiglia; Successioni: nessuna): una riga per domanda «n · sezione della teoria · abilità richiesta · situazione/oggetto · che cosa si chiede».
2. **Piano delle domande nuove**, una riga ciascuna con lo stesso schema. Regole:
   - nessuna coppia (abilità, situazione) già presente nel catalogo né ripetuta nel piano;
   - **vietato** riprendere una domanda cambiandone i numeri, invertirne la formula (dato ↔ incognita sullo stesso oggetto), chiedere «la variazione», «il rapporto» o «di quanto cambia» fra due configurazioni di un oggetto già usato. Una domanda su un rapporto o una proporzionalità è ammessa solo se è l'unica di quel tipo nel capitolo e su un oggetto nuovo;
   - vietati gli schemi a stampo: due domande non possono avere lo stesso testo con parole o numeri diversi, né la stessa frase d'apertura (lo strumento di controllo confronta i primi 160 caratteri senza numeri: aperture uguali risultano ripetizioni);
   - varia gli oggetti, le grandezze richieste e il tipo di risposta (valore, espressione, verso o segno, affermazione vera, confronto qualitativo, scelta della configurazione giusta);
   - copri **tutte** le sezioni della teoria; circa due terzi di calcolo e un terzo di teoria applicata a un caso preciso (Fisica zero: metà e metà);
   - difficoltà mista: circa un terzo semplici (un passaggio), metà medie, il resto più impegnative ma sempre risolvibili in due minuti con carta e penna.
Solo dopo il piano scrivi i file.

## Che cosa scrivere
- Ogni file nuovo ha il testo completo della domanda prima dell'elenco delle 4 risposte, autosufficiente, senza rimandi ad altre domande, alla pagina o alle tracce. Figure (`::grafico` o quelle già usate nel capitolo) solo dove aiutano, con i soli dati e gli assi orientati.
- Spiegazione nello stile del sito: deduzioni complete con connettivi (quindi, poiché, perciò, allora), una frase per passaggio, frazioni in colonna anche negli esponenti, virgola decimale `{,}` in italiano, graffa solo per condizioni da soddisfare insieme, mai «la parentesi», nessun rimando alla posizione delle risposte (l'ordine viene mescolato). Nessuna formula `$$` di chiusura seguita da `?` sulla stessa riga (fa fallire la build).
- **Posizione della risposta corretta su tutte le 90**: alla fine ogni posizione 1, 2, 3, 4 è corretta fra 20 e 25 volte.
- **Inglese**: per ogni file italiano scritto, il file con lo stesso numero in `src/content-en/domande/<MATERIA>/<CAPITOLO>/` secondo `brief-traduzione-domande.md` (stessa `corretta`, stesse risposte nello stesso ordine, `## Explanation`, punto decimale), con i termini della teoria inglese del capitolo e la grafia già usata nelle domande inglesi della stessa materia. Alla fine le due cartelle hanno gli stessi 90 numeri.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta e verifica che le tre sbagliate siano diverse (valori numerici distanti almeno il 10%) e non difendibili (nessun sottointervallo, nessuna forma equivalente della corretta, nessuna risposta vera per un'altra lettura del testo). Per le domande di teoria, di comprensione e di pensiero critico scrivi il ragionamento nel file di lavoro e verifica che una sola risposta regga. `pip install --break-system-packages sympy` se manca.
- Figure: `node strumenti/anteprima_figure.mjs /home/claude/lavoro-90/<MATERIA>__<CAPITOLO>/figure.png <file con figura…>` dalla radice del repository, 0 problemi, e guarda il PNG.
- `python3 strumenti/yamlcheck.py <file scritti…>` senza errori (italiano e inglese).
- `python3 strumenti/domande-simili.py src/content/domande/<MATERIA>/<CAPITOLO> 0.7`: controlla a mano ogni coppia segnalata e riscrivi i doppioni.
- Situazioni diverse: copia `strumenti/domande-ripetitive.py` in `/home/claude/lavoro-90/<MATERIA>__<CAPITOLO>/` e adattalo perché misuri solo il tuo capitolo (il programma originale misura la materia intera e impiega minuti). Obiettivo: **almeno 86 situazioni diverse su 90**. Rileggi poi il piano e i file uno accanto all'altro: il controllo testuale non basta.
- Conta i file: 90 italiani e 90 inglesi, numerati da 1 a 90 senza buchi, stessa `corretta` per numero.

## Rapporto (breve, in italiano, ultima risposta)
File scritti (italiano e inglese; per Fisica zero quali numeri hai tenuto), divisione delle domande nuove fra le sezioni della teoria, quante di calcolo e quante di teoria, quante con figura, conteggio finale delle posizioni 1-2-3-4 sulle 90, situazioni diverse su 90, conferma di sympy, figure, yamlcheck e domande-simili, dubbi.
