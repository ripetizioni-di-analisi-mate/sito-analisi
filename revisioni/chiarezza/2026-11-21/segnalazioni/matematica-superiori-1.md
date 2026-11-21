# Matematica 1° anno: segnalazioni su schede, esercizi e domande, grafia inglese

Fonte: i 24 rapporti in `revisioni/chiarezza/2026-11-21/matematica-superiori-1__*.md`. Le segnalazioni su file fuori dalla teoria erano poche. Ho aggiunto i difetti dello stesso tipo trovati con un controllo automatico su tutte le schede, tracce e domande (frazioni in linea, «la parentesi», decimali troncati, «≃», ancore dei rimandi).
Esercizi da fare di Prodotti notevoli: già sistemati in precedenza, non toccati.

## 1. Correzioni (IT ed EN)

| Capitolo | File | Com'era | Com'è ora |
|---|---|---|---|
| Disequazioni | svolti/5 (es. 3) | `u=11\implies x=-2`, `u=2\implies x=1`: il simbolo $\implies$ non è definito in teoria | `\iff`, definito in teoria. L'equivalenza è corretta perché $x=\dfrac{5-u}{3}$ è una corrispondenza biunivoca |
| Insiemi e logica | svolti/7 (es. 1) | $|x|\ge2$ senza spiegazione; nel capitolo $|A|$ indica la numerosità | Frase in apertura della spiegazione: $|x|$ è il valore assoluto, e $|x|\ge2$ equivale a $x\le-2$ oppure $x\ge2$ |
| Insiemi e logica | domande/79 | «$f(x)=|x|$.» | «$f(x)=|x|$, valore assoluto di $x$.» |
| Equazioni | svolti/2 (es. 1) | «la parentesi» quattro volte per l'espressione $x-8$ | «l'espressione $x-8$», «il binomio $x-8$», «il prodotto $2(x-8)$». EN: «expression in parentheses» → «$x-8$» |
| Numeri e operazioni | svolti/8 | «Risolvendo prima la parentesi» | «Calcolando prima $-24+3=-21$» (EN uguale) |
| Prodotti notevoli | svolti/3 | «tre parentesi», «una sola parentesi», «tutte le parentesi» | «tre fattori $x+2$», «un solo fattore», «tutti i fattori» (EN: brackets → factors) |
| Prodotti notevoli | svolti/6 | «differenza di quadrati alle parentesi» | «ai binomi $x+4$ e $x-4$» (EN uguale) |
| Scomposizioni | svolti/7 | «quelli delle parentesi» | «quelli dei fattori $x+2$ e $x-5$» (l'inglese diceva già «binomials») |
| Scomposizioni | svolti/4 (traccia es. 2) | «quando uniformi le parentesi» | «quando si rendono uguali i due binomi» |
| Scomposizioni | svolti/1, 2, 3, 5, 7, 8 | frazioni in linea $2/x$, $3/5$, $(3/5,0)$, $-2/3$, $1/2$, $5/6$, $-5/6$, $-b/a$, $3/2$, $2/3$, $8/3+22/3-10=0$ | frazioni in colonna `\dfrac` (IT ed EN). Valori ricontrollati: zeri di $(3x+2)(2x-1)$, $\dfrac83+\dfrac{22}{3}=10$ |
| Parallele e quadrilateri | svolti/8 | $11/2\,\mathrm{cm}^2$ | $\dfrac{11}{2}\,\mathrm{cm}^2$ ($\dfrac{55}{2}-22=\dfrac{11}{2}$, ricontrollato) |
| Prodotti notevoli (EN) | svolti/6 | `\text{ oppure }` in un file inglese | `\text{ or }` |
| Potenze (EN) | domande/45 | opzioni `\text{euros per kilometer}` (dentro le formule, quindi non prese dallo script) | `kilometre` |

In tutto 30 correzioni puntuali, in 15 file italiani e nei corrispondenti inglesi.

Controlli senza esito: tutti i campi `teoria:` e i link `[Teoria](…#ancora)` di schede, tracce e domande (IT ed EN) puntano ad ancore esistenti; nessun «≃» e nessun decimale troncato nelle opzioni (l'unico decimale lungo, $0{,}0000038$ in domande/27 di Potenze, è un valore esatto).

## 2. Segnalazioni non confermate

- **Pedici $n_{\max}$, $n_{\min}$, $x_{\min}$** (Disequazioni, verificatore): abbreviazioni di «massimo» e «minimo», d'uso comune anche in italiano. Non sono pedici inglesi.
- **Domanda 18 e domande 36, 37, 40, 81-85 di Scomposizioni verso `#completa`**: il verificatore della teoria ha già legato l'osservazione sottostante al blocco. Il rimando è giusto.
- **«Le parentesi richiedono di unire $B$ e $C$»** (Insiemi, svolti/2): qui la parola indica i simboli di raggruppamento della scrittura $A\cap(B\cup C)$, non un'espressione. Lasciato.
- **$\iff$ e «impossibile» nelle schede di Equazioni**: già definiti in teoria dalla revisione.

## 3. Per il titolare

- **trapezoid** (61 occorrenze) e **percent** (16) restano: sono scelte di lessico, non di grafia. In inglese britannico si usano *trapezium* e *per cent*, ma *trapezium* in inglese americano indica un'altra figura e compare in titoli, `parole` e titoli di sezione. Decidere se cambiarli.
- I titoli `##` inglesi cambiati per la grafia (Brackets and signs; Recognising equivalent fractions; Recognising a parallelogram; Recognising and completing a square; Multi-step factorisations; Checking a factorisation) cambiano l'ancora automatica del titolo. Nel sito non ci sono link verso quelle ancore.
- In alcune tracce e spiegazioni restano imperativi («Risolvi», «Sviluppa», «Divide that total…»). Non erano segnalati e non li ho toccati.

## 4. Grafia inglese britannica

Script con confini di parola. Lo script lascia intatti le formule (`$…$`, `$$…$$`), le ancore `{#…}`, gli indirizzi dei link, il codice e i nomi e valori tecnici delle direttive. Cambia invece il testo inglese di `titolo=`/`etichette=` nelle righe delle figure e dei blocchi, e nel frontmatter `titolo`, `sommario` e `parole`.

Sostituzioni fatte (conteggio dal diff): factorization(s) → factorisation(s) 33, parentheses → brackets 32, centimeter(s) → centimetre(s) 34, canceled/canceling → cancelled/cancelling 21, recognize/-ing/-ed → recognise… 18, kilometer(s) → kilometre(s) 18, meter(s) → metre(s) 11, liter(s) → litre(s) 7, labeled → labelled 3, theater → theatre 3, color(s)/favorite → colour(s)/favourite 4, normalize/-d/-ing → normalise… 3, center → centre, toward → towards, traveled → travelled, neighboring → neighbouring, realization → realisation.
Parole intatte (controllate): perimeter, semiperimeter, parameter, thermometer, size, prize.

File inglesi toccati: 95, di cui 9 di teoria. Totale file modificati della materia: 110 (15 IT, 95 EN).

**Forme americane rimaste (grep)**: 0 per center, meter, liter, color, favorite, neighbor, behavior, gray, theater, toward, traveled, labeled, modeling, canceled, counterclockwise, math, parenthes*, -ize/-ization/-yze. Restano soltanto *trapezoid* (61) e *percent* (16), vedi punto 3.

`controlla_capitolo.py` sui 12 capitoli: nessun errore in 6. Negli altri 6 (equazioni, frazioni-algebriche, parallele, potenze, prodotti-notevoli, scomposizioni) gli errori riguardano solo l'inglese: titoli `##` cambiati per la grafia, frontmatter (`sommario` con *recognising*/*factorisations*) e una riga di figura per capitolo, il cui `titolo=` è cambiato (*cancelled*, *centimetre*). Nessun errore di resa.

## 5. Controlli finali

- `yamlcheck.py` sui 110 file: errori 0.
- `_rendi-tmp.mjs` sui 101 file di svolti, dafare e domande: tutti «ok» (KaTeX e direttive).
- Nessuna formula `$$` seguita da `?` nelle domande toccate.
- Nessun esercizio da fare con la soluzione modificata, quindi nessuna chiave di correzione da allineare.

## 6. Tre esempi

**Equazioni, svolti/2**
Com'era: «La parentesi è moltiplicata per $2$ nel suo insieme. […] come deve essere perché il valore della parentesi è positivo.»
Com'è ora: «Il binomio $x-8$ è moltiplicato per $2$ nel suo insieme. […] come deve essere perché il valore di $x-8$ è positivo.»

**Scomposizioni, svolti/8**
Com'era: «In $x=2/3$ il fattore $3x-2$ vale zero, e sostituendo lo stesso valore nello sviluppo si ottiene $8/3+22/3-10=0$.»
Com'è ora: «In $x=\dfrac{2}{3}$ il fattore $3x-2$ vale zero, e sostituendo lo stesso valore nello sviluppo si ottiene $\dfrac{8}{3}+\dfrac{22}{3}-10=0$.»

**Insiemi e logica, svolti/7**
Com'era: «Calcolando i quadrati si trovano quattro elementi che soddisfano la proprietà.»
Com'è ora: «Nella prima riga $|x|$ indica il valore assoluto di $x$, non la numerosità di un insieme, e la disuguaglianza $|x|\ge2$ equivale a $x\le-2$ oppure $x\ge2$. Calcolando i quadrati si trovano quattro elementi che soddisfano la proprietà.»
