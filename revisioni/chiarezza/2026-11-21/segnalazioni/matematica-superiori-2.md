# Matematica 2° anno: segnalazioni su schede, esercizi e domande, grafia inglese

Data: 21/11/2026. Fonte: i 24 rapporti di `revisioni/chiarezza/2026-11-21/matematica-superiori-2__*.md` (autore e verifica).
File toccati fuori dalla teoria: 372 (italiano e inglese), più 7 file di teoria inglese per la sola grafia. Nessun esercizio da fare è cambiato, quindi la chiave `src/data/chiavi/matematica-superiori-2.json` non è stata toccata.

## Correzioni per capitolo

Quando non è detto altro, la stessa correzione è stata fatta anche nel file inglese.

### Disequazioni di secondo grado
- Domande 13, 30, 33: il link alla teoria puntava a `#prodotti`; ora punta a `#buco` (semplificazione di un fattore comune).

### Equazioni e sistemi non lineari
- Scheda 3, esercizio 2: l’ultima frase «Questo distingue l’annullamento del radicando da una divisione per zero» non aveva un riferimento. Ora: «In quel punto il radicando vale zero e la radice è definita, con valore $\sqrt0=0$».
- Domanda 12: «oltre al suo dominio» (ambiguo) → «oltre al dominio della radice». In inglese tolto anche l’imperativo «check».

### Equazioni di secondo grado
- Scheda 2, esercizio 3: «Se si indica la parentesi con $u=x-1$» → «Se si indica l’espressione $x-1$ con $u$»; «il gruppo vale 3», «Dividere per la parentesi avrebbe perso…» → «l’espressione $x-1$ vale 3», «Dividendo entrambi i membri per $x-1$ si sarebbe persa…».
- Scheda 4, esercizio 3: «bisogna dividere per $2a=8$, non per due soltanto» → «il denominatore è $2a=8$».
- Scheda 5, esercizio 1: la frase sul vertice ora dice perché: il valore minimo è 4, quindi il vertice $(-1;4)$ è quattro unità sopra l’asse.
- Scheda 5, esercizio 3: «A somma fissata, il prodotto è massimo quando i due numeri coincidono» era detto senza giustificazione; ora c’è $4uv=(u+v)^2-(u-v)^2\le16$ (verificato con sympy).
- Domanda 48: «la parentesi comune» → «il fattore comune $x+2$».
- Domande 30 e 39: link da `#problemi` a `#discriminante` (il blocco che tratta zeri e asse di simmetria).

### Equivalenza e aree
- Domande 81/82 (stesso testo, 5 cm e 7 cm): riscritta la 82 su un triangolo ottusangolo con il piede dell’altezza sul prolungamento della base (area 15 cm², distrattori 20, 30, 5), sempre `#triangolo`, `corretta: 1`.
- Domande 86/87 (piastrelle da 0,25 m²): riscritta la 87 come problema inverso, rettangolo di area 48 m² e lato 6 m, perimetro 28 m (distrattori 14 = semiperimetro, 48, 16), sempre `#problemi`, `corretta: 4`.

### Piano cartesiano e retta
- Scheda 3, esercizio 2: «Quelli quelli» → «Quelli».
- Domande 34, 46, 51, 76, 77, 81, 82, 86, 87: coordinate con la virgola → punto e virgola, come nella teoria (anche in inglese, dove la teoria usa lo stesso segno).
- Domanda 8: «lunghezza del vettore dei coefficienti» → formula $\dfrac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$ con $\sqrt{3^2+4^2}=5$, come in `#distanza-retta`.

### Pitagora e teoremi di Euclide
- Scheda 2, esercizio 3: pedici $d_{\mathrm{hyp}}$, $d_{\mathrm{leg}}$ → $d_{\mathrm{ipotenusa}}$, $d_{\mathrm{cateto}}$ (solo italiano).
- Scheda 3, esercizio 1: unità «in» → «pollici» (solo italiano).
- Domanda 11: la semidifferenza dei lati si chiamava $d$, lettera della diagonale; ora è $s$, definita nel testo ($200+2s^2$ verificato).

### Probabilità
- Domanda 59: coppie $(1;2)$, $(2;1)$ → $(1,2)$, $(2,1)$, come in teoria e schede.
- Imperativi e «tu» nelle spiegazioni, riscritti in forma impersonale: domande 15, 31, 32, 33, 36, 53, 62, 64, 74, 80; schede 1, 2, 3, 4, 5, 6, 7, 8 (12 frasi). In inglese sono stati sistemati gli stessi file (anche le frasi imperative che in italiano non c’erano) e la domanda 59 («each time you go»).
- Scheda 6: la lettera del verde era $G$ (iniziale inglese) nel file italiano; ora $V$ anche nelle formule e nell’etichetta della figura. L’inglese resta $G$.

### Radicali
- Domanda 5: $(8)-7$ → $8-7$.
- Domanda 18: tolto il dato «$u=2$», che non compariva nelle opzioni; la spiegazione ora dice perché $\sqrt5$ è irrazionale e gli altri numeri no.
- Domanda 66: risposte $-\sqrt2+\sqrt3$ e $-\sqrt3+\sqrt2$ → $\sqrt3-\sqrt2$ e $\sqrt2-\sqrt3$ (posizione della giusta invariata, verificata con sympy).
- Scheda 7, esercizio 1: la frase ambigua su $-5$ ora dice che $-5$ risolve $u^2=25$ ma non è il valore di $\sqrt{25}$.

### Similitudine e Talete
- Domanda 84: `2000,\mathrm{cm}` → `2000\,\mathrm{cm}`; «rapporto pianta/realtà» → «rapporto fra pianta e realtà».
- Scheda 2, esercizio 1: «Alla gamba $AC$» → «Al cateto $AC$» (solo italiano).
- Domanda 72: «usa il raggio $DA$ e il parallelo $DE$» → «ha per lati la semiretta $DA$ e la semiretta $DE$, parallela a $BC$».
- Imperativi: domande 12, 80, 83 e scheda 5, esercizio 2 (in scheda 5 anche «cateto quadrato» → «il quadrato di ogni cateto»).
- Frazioni in linea: tutte quelle dentro le formule di schede e domande del capitolo (circa 150 per lingua, in 47 file per lingua) sono ora `\dfrac` nel testo e `\frac` nelle formule in display; $(2/5)20$ → $\dfrac25\cdot20$, $(2/5)^2$ → $\left(\dfrac25\right)^2$.

### Sistemi lineari
- Scheda 3, esercizio 1: tolto il paragrafo finale con «Le frazioni hanno lo stesso valore assoluto del coefficiente di $y$» e il controllo ripetuto.
- Scheda 2, esercizio 3: «Il prodotto incrociato dei coefficienti di $y$ porta al modulo sei» → minimo comune multiplo di 2 e 3, quindi coefficienti 6 e −6; tolto il controllo ripetuto.
- Paragrafi ripetuti dopo «Il risultato è…» tolti o ridotti alla parte nuova: schede 1 (es. 3), 2 (es. 1), 4 (es. 1 e 3), 5 (es. 1), 6 (es. 1), 7 (es. 1), 8 (es. 1 e 3). La scheda 1, es. 1, conserva la lettura del grafico.
- Scheda 3, esercizio 3: il paragrafo con «dentro le parentesi» e «occorre» → «il termine costante $-3$ passa al secondo membro come $+3$, quindi il termine noto diventa $-7+3=-4$».
- Scheda 8, esercizio 1 e domanda 8: «hanno determinante diverso da zero, quindi sono compatibili» → il sistema delle ultime due equazioni ha determinante non nullo, quindi una sola coppia $(x;y)$, che con $z$ forma la soluzione.
- Scheda 1, es. 2, e domanda 15: «la parentesi» → «l’espressione».
- Imperativi e «tu»: schede 2, 7, 8; domande 6, 11, 14, 17, 18, 21, 23, 27, 39, 57, 59, 63, 64, 66, 68, 71, 80, 82, 83, 86, 87, 88 (in inglese anche i file 8, 15 con le frasi imperative proprie). Domanda 14: «La forza della scelta è che evita» → «Questa scelta evita».
- Domande 18, 30, 46, 51: coppie con la virgola → punto e virgola.
- Domanda 52: «La riduzione con Cramer dà» → «Nel calcolo dei determinanti di Cramer si trovano».

### Statistica
- Domande 86/87 (deviazione standard 2 o 3 triplicata): riscritta la 87, deviazione standard descrittiva di $2,4,6,8$ = $\sqrt5$ (distrattori 5 = varianza, $\sqrt{\frac{20}{3}}$ = divisore 3, 2 = scarto medio), `corretta: 4`, `#deviazione`.
- Domanda 5: «Il valore centrale del testo non è rilevante…» → «Il valore $8$ compare tre volte, più di ogni altro, quindi la moda è $8$».

### Circonferenza e poligoni
Nessuna segnalazione nei rapporti.

## Segnalazioni non confermate
- Radicali, domanda 23: la spiegazione non si interrompe a metà nel file attuale; l’ultima frase ($\dfrac32\cdot\sqrt8=3\sqrt2$) è completa e corretta.
- Equivalenza, scheda 1, esercizio 1: $\dfrac85\cdot\dfrac34=\dfrac65$ e la spiegazione in metri sono coerenti; l’autore stesso la dava per corretta.
- Probabilità, scheda 6: $B$ per il blu e per un evento generico in teoria; nella scheda non c’è ambiguità, lasciato com’era.

## Da decidere con il titolare (non toccato)
- Piano cartesiano: le domande 81/82 (distanza da una retta orizzontale) e 86/87 (retta verticale per un punto) sono quasi doppie, ma non erano nei rapporti.
- Disequazioni, domanda 16: «la parentesi contiene…»; sistemi, traccia dell’esercizio da fare 3: «tutti i termini delle parentesi». Non segnalati.
- Probabilità, traccia della scheda 8, esercizio 2: «hai osservato» (seconda persona in una traccia).
- Equivalenza, domanda 78: frazione in linea $4\sqrt3/3$. Le frazioni in linea sono state cercate e corrette solo nel capitolo dove erano segnalate (Similitudine).
- Inglese: gli imperativi nelle spiegazioni sono molto più diffusi che in italiano anche nei capitoli senza segnalazioni (per esempio Probabilità, domande 2, 3, 4, 5, 6, 17, 18, 19). Sono stati corretti solo nei file dove era stato corretto l’italiano.

## Grafia britannica (inglese di tutta la materia)
Script con confini di parola (`/home/claude/lavoro/ms2/grafia.py`), che salta comandi LaTeX, ancore `{#…}` e indirizzi dei link; diff riletto. File modificati dallo script: 125 (teoria, schede, tracce, domande), più due correzioni a mano di «parentheses» → «round brackets».
Sostituzioni: centimeters → centimetres (64), color/colors → colour/colours (41), favorable → favourable (21), rationaliz… → rationalis… (34), liters → litres (17), meter/meters → metre/metres (19), center → centre (16), factorization/factorizing (6), labeling/labeled (6), kilometers (2), counterclockwise → anticlockwise (2), recognize/recognizing (2), canceled/canceling, analyzed, characterize, minimized/minimizing, parametrization, neighboring, traveled (1 ciascuno).
Restano come sono: perimeter, diameter, parameter, thermometer, size/sized/sizes, check.
Forme americane rimaste dopo il conteggio con grep: 0.
Da sapere: nella domanda 43 di Circonferenza e poligoni il testo inglese dentro `\text{…}` («from the centre to one side») è stato uniformato; nessun comando LaTeX è cambiato.
`controlla_capitolo.py` su tutti i 12 capitoli: nessun errore in 10. In Probabilità segnala una riga di figura cambiata (titolo «single-colour»); in Radicali il frontmatter (sommario «rationalising») e il titolo `## Rationalising a single radical`. Sono gli errori ammessi, dovuti solo alla grafia. Nessun link del sito usa l’ancora di quel titolo inglese.

## Controlli fatti
- `python3 strumenti/yamlcheck.py` su tutti i 379 file toccati: errori 0.
- `node strumenti/_rendi-tmp.mjs` su tutti i 372 file di schede, tracce e domande toccati (accetta anche le domande): tutti «ok», nessun errore KaTeX.
- Nessuna formula `$$` seguita da `?` nelle domande toccate.
- Numeri nuovi o cambiati ricalcolati con Python/sympy (domande riscritte, $200+2s^2$, razionalizzazioni, $4uv\le16$, deviazione standard).

## Tre esempi

**Sistemi lineari, scheda 3, esercizio 1**
Com’era: «Il risultato è $\left(6;\,12\right)$. Le frazioni hanno lo stesso valore assoluto del coefficiente di $y$, quindi si possono sommare direttamente. Con $(6;12)$ i due addendi sono $3$ e $4$ in valore assoluto e la seconda riga usa la loro differenza.»
Com’è ora: «Il risultato è $\left(6;\,12\right)$.» (il controllo con $3+4=7$ e $3-4=-1$ resta nel paragrafo precedente).

**Equazioni di secondo grado, scheda 5, esercizio 3**
Com’era: «A somma fissata, il prodotto è massimo quando i due numeri coincidono. Qui il massimo sarebbe $2\cdot2=4$.»
Com’è ora: «Poiché $4uv=(u+v)^2-(u-v)^2\le(u+v)^2=16$, il prodotto di due reali con somma $4$ è al massimo $4$, valore raggiunto per $u=v=2$. Il prodotto $6$ supera questo massimo.»

**Radicali, domanda 18**
Com’era: «Quale dei seguenti numeri è irrazionale per il dato $u=2$?» con spiegazione «Il quadrato di $u$ è un quadrato perfetto, mentre il successivo non lo è.»
Com’è ora: «Quale dei seguenti numeri è irrazionale?» con spiegazione «Il numero $5$ è compreso fra i quadrati perfetti consecutivi $4$ e $9$, quindi non è un quadrato perfetto e $\sqrt5$ è irrazionale. Gli altri numeri sono razionali, perché $\sqrt4=2$ e $2+\sqrt9=5$.»
