# Domande a tempo ripetitive di Analisi 1 e Fisica 1: rifacimento (un capitolo)

Brief del 15/11/2026. Richiesta di Carmine: «tutte le domande ripetitive devono sparire e lasciare il posto a domande diverse, così non capitano sempre le stesse domande». Stesso metodo di `brief-domande-rifacimento-90.md` (Algebra lineare, Fisica 2, Statica…), con due differenze: si eliminano i doppioni anche fra le prime 45, e ogni domanda nuova va classificata per lo Studio guidato.

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Lavori su **un solo capitolo** (MATERIA e CAPITOLO nel messaggio). Cartella di lavoro: `/home/claude/lavoro-af/<MATERIA>__<CAPITOLO>/`.

## Perché
Oggi le domande 46–90 sono famiglie di 4–5 varianti della stessa situazione (altri numeri, formula inversa, rapporto o variazione fra due configurazioni dello stesso sistema): in Analisi 1 solo il 25% sono situazioni diverse, in Fisica 1 il 28%. Anche fra le 1–45 di Analisi 1 ci sono doppioni (73% di situazioni diverse). Ogni sessione pesca 15 domande a caso e lo Studio guidato ne usa circa 12 per trovare le lacune: con le varianti lo studente rivede sempre gli stessi esercizi. Alla fine le 90 domande del capitolo devono chiedere 90 cose diverse.

## Che cosa riscrivere
- **Riscrivi da zero (sovrascrivendo) `46.md` … `90.md`.**
- **Fra le domande 1–45**: trova i doppioni (stessa abilità sulla stessa situazione con altri numeri, dato e incognita invertiti, stesso testo a stampo, stessa domanda di teoria riformulata). Di ogni gruppo tieni la migliore e riscrivi le altre sul loro numero.
  - **Analisi 1**: le `1.md` … `14.md` hanno il testo vuoto perché prendono il testo dalla traccia dell'esercizio da fare con lo stesso numero (`src/content/dafare/analisi-1/<CAPITOLO>/<n>.md`). **Non si toccano.** Se una delle 15–45 è un doppione di una delle 1–14, riscrivi quella fra le 15–45.
  - **Fisica 1**: tutte le 1–45 hanno il proprio testo e sono tutte candidate.
- **Inglese**: per ogni file italiano riscritto, riscrivi il file con lo stesso numero in `src/content-en/domande/<MATERIA>/<CAPITOLO>/` secondo `istruzioni-agenti/brief-traduzione-domande.md` (stessa `corretta`, stesse risposte nello stesso ordine, `## Explanation`, etichette delle figure tradotte come dice `istruzioni-agenti/brief-traduzione.md`), con i termini della teoria inglese `src/content-en/teoria/<MATERIA>/<CAPITOLO>.md`. Punto decimale in inglese.
- Le versioni in spagnolo (`src/content-es/…`) non si toccano.

## Prima di scrivere
1. Leggi per intero `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-domande-aggiuntive.md`, `GUIDA-CONTENUTI.md`; per Fisica 1 anche `istruzioni-agenti/brief-fisica.md` (notazioni, unità, cifre significative, $g = 9{,}81\,\mathrm{m/s^2}$). Carica la skill **scrittura-umana-carmine** con lo strumento Skill. Se un brief cita un altro percorso del repository, usa /home/claude/sito-analisi.
2. Leggi la teoria (`src/content/teoria/<MATERIA>/<CAPITOLO>.md`, tutte le sezioni `##`), le schede svolte, le tracce con le soluzioni e **tutte le 90 domande esistenti**.
3. Leggi `/home/claude/lavoro-af/<MATERIA>__<CAPITOLO>-sg.json`: le abilità del capitolo per lo Studio guidato (`abilita`, indici da 0), la classificazione attuale di ogni domanda e, solo per Analisi 1, il catalogo degli errori tipici (`catalogo_errori`) e le diagnosi attuali.

## Piano anti-ripetizione (obbligatorio, prima di scrivere)
Scrivi `piano.md` nella cartella di lavoro con:
1. **Catalogo delle domande che restano**: una riga per domanda «n · sezione della teoria · abilità · situazione/oggetto · che cosa si chiede». Segna i gruppi di doppioni trovati fra le 1–45 e quale domanda tieni.
2. **Piano delle domande nuove**, una riga ciascuna con lo stesso schema più l'abilità dello Studio guidato (indice) e il livello. Regole:
   - nessuna coppia (abilità, situazione) già presente nel catalogo né ripetuta nel piano;
   - **vietato** riprendere una domanda esistente cambiandone i numeri, invertirne la formula (dato ↔ incognita sullo stesso oggetto), chiedere «la variazione», «il rapporto» o «di quanto cambia» fra due configurazioni di un oggetto già usato. Una domanda su un rapporto o una proporzionalità è ammessa solo se è l'unica di quel tipo nel capitolo e su un oggetto nuovo;
   - vietati gli schemi a stampo: due domande non possono avere lo stesso testo con parole o numeri diversi (anche fra le nuove);
   - varia gli oggetti (funzioni di famiglie diverse, successioni e serie di tipi diversi, corpi, vincoli, sistemi fisici e situazioni concrete diversi), le grandezze richieste e il tipo di risposta (valore, espressione, segno o verso, affermazione vera, confronto qualitativo, scelta del grafico o della configurazione giusta, ipotesi soddisfatta o no);
   - copri **tutte** le sezioni della teoria, privilegiando quelle con meno domande; circa due terzi di calcolo e un terzo di teoria applicata a un caso preciso (mai definizioni da recitare);
   - almeno 8 domande su situazioni che nelle domande rimaste e nelle tracce **non compaiono affatto** (un caso classico d'esame mancante, un caso limite, un'applicazione concreta);
   - difficoltà mista: circa un terzo semplici (un passaggio), metà medie, il resto più impegnative ma sempre risolvibili in due minuti con carta e penna.
Solo dopo il piano scrivi i file.

## Che cosa scrivere
- Ogni file riscritto ha il testo completo della domanda prima dell'elenco delle 4 risposte, autosufficiente, senza rimandi ad altre domande, alla pagina o alle tracce. Figure (`::grafico` o quelle già usate nel capitolo) dove aiutano, con solo i dati; assi orientati.
- Spiegazione nello stile del sito: deduzioni complete con connettivi (quindi, poiché, perciò, allora), una frase per passaggio, frazioni in colonna anche negli esponenti, virgola decimale `{,}`, graffa solo per condizioni da soddisfare insieme, mai «la parentesi», nessun rimando alla posizione delle risposte (l'ordine viene mescolato). Negli integrali si applica la formula senza verificare la primitiva; un integrale che si riporta a uno noto è «riconducibile all'integrale immediato …».
- Una formula `$$` di chiusura non va seguita da `?` sulla stessa riga (fa fallire la build): il `?` va nella frase prima della formula o dopo, su una riga sua.
- **Posizioni della risposta corretta su tutte le 90**: alla fine ogni posizione 1, 2, 3, 4 è corretta fra 20 e 25 volte.

## Studio guidato (obbligatorio)
Le abilità del capitolo **non cambiano** (i rimandi a teoria, schede e basi sono legati a loro). Per ogni domanda riscritta stabilisci:
- `abilita`: indice dell'abilità in `abilita` a cui appartiene (quella che uno studente sbaglia se sbaglia la domanda);
- `livello`: 1 base (applicazione diretta, uno o due passaggi), 2 medio (procedimento tipico del capitolo in più passaggi), 3 avanzato (tecniche combinate, parametri o casi da distinguere, ipotesi da verificare, distrattori sottili).
Alla fine, contando tutte le 90 domande (quelle che restano con la classificazione attuale, le nuove con la tua): ogni abilità ha almeno 8 domande, di cui almeno 3 di livello 1 e almeno 3 di livello 2; ogni livello ha almeno 15 domande nel capitolo. Pianifica le domande nuove anche per riempire le abilità e i livelli scarsi.

**Solo Analisi 1 · errori tipici**: per ogni risposta sbagliata di ogni domanda riscritta indica l'`id` dell'errore del `catalogo_errori` che porta *esattamente* a quella risposta, oppure `null`. Costruisci i distrattori proprio sugli errori del catalogo quando è naturale (verifica con sympy che il procedimento sbagliato dia quella risposta). Non inventare errori nuovi. In caso di dubbio `null`.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta e verifica che le tre sbagliate siano diverse (valori distanti almeno il 10%) e non difendibili (nessun sottointervallo, nessuna forma equivalente della corretta, nessuna risposta vera per un'altra lettura del testo). Per le domande di teoria scrivi il ragionamento in `verifiche.md`. `pip install --break-system-packages sympy` se manca.
- Figure: `node strumenti/anteprima_figure.mjs /home/claude/lavoro-af/<MATERIA>__<CAPITOLO>/figure.png <file con figura…>` dalla radice del repository, 0 problemi, e guarda il PNG.
- `python3 strumenti/yamlcheck.py <file scritti…>` senza errori.
- `python3 strumenti/domande-simili.py src/content/domande/<MATERIA>/<CAPITOLO> 0.7`: controlla a mano ogni coppia segnalata e riscrivi i doppioni. Poi `python3 strumenti/domande-ripetitive.py <MATERIA>` dalla radice (guarda la riga del tuo capitolo fra i «più ripetitivi»: deve avvicinarsi a 90/90). Rileggi infine il piano e i file nuovi uno accanto all'altro: il controllo testuale non basta.

## Uscita
Oltre ai file delle domande, scrivi `/home/claude/lavoro-af/<MATERIA>__<CAPITOLO>/esito.json`:
```
{"materia":"<MATERIA>","capitolo":"<CAPITOLO>",
 "riscritte":[15,22,46,47,...],
 "classificazione":{"15":{"livello":2,"abilita":3}, "46":{...}},
 "errori":{"46":{"1":"id-errore","3":null,"4":"altro-id"}}}
```
`classificazione` per **ogni** file riscritto; `errori` solo per Analisi 1, con una voce per ciascuna risposta sbagliata (numero della risposta 1–4 come stringa). Controlla con un piccolo script Python i vincoli dello Studio guidato e che ogni `id` sia nel catalogo.

## Rapporto (breve, in italiano, ultima risposta)
File riscritti (italiano e inglese), doppioni trovati fra le 1–45, divisione delle domande nuove fra le sezioni della teoria, quante di calcolo e quante di teoria, quante con figura, situazioni nuove introdotte (elenco breve), conteggio finale delle posizioni 1-2-3-4, conteggio per abilità e livello, conferma di sympy, figure, yamlcheck e domande-simili.
