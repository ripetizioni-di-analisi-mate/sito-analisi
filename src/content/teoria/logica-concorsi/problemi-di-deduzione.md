---
titolo: Problemi di deduzione e tabelle
sommario: Come si risolvono i quesiti in cui da un elenco di indizi si ricava chi fa che cosa, con le griglie di deduzione, le disposizioni in fila e attorno a un tavolo, i turni di lavoro, i problemi di veri e bugiardi e quelli in cui un numero fissato di affermazioni è vero.
---

## Che cos'è un problema di deduzione

:::definizione{#problema-di-deduzione titolo="Problema di deduzione"}
Un **problema di deduzione** presenta alcune persone, alcune caratteristiche da attribuire loro (un lavoro, una città, un posto in fila, un giorno di turno) e un elenco di **indizi**, detti anche vincoli. Risolverlo significa trovare tutte le attribuzioni che rispettano ogni indizio. Quasi sempre il testo dichiara che le caratteristiche sono tutte diverse, cioè che a ogni persona ne corrisponde una e una sola e che nessuna caratteristica è condivisa da due persone.

Se Anna, Bruno e Carla lavorano in tre uffici diversi, che sono anagrafe, protocollo e tributi, ogni ufficio ha esattamente una delle tre persone. L'indizio "Carla non lavora né all'anagrafe né ai tributi" lascia a Carla un solo ufficio possibile, quindi Carla lavora al protocollo.
:::

:::osservazione{#soluzione-unica titolo="Una soluzione o più soluzioni"}
Gli indizi di un quesito ben costruito possono lasciare una sola attribuzione possibile oppure più di una. Nel primo caso la domanda è diretta ("Chi lavora ai tributi?"). Nel secondo la domanda chiede che cosa vale in tutte le soluzioni, oppure quale informazione in più basterebbe a fissarne una. Può anche accadere che gli indizi lascino due soluzioni che differiscono soltanto per dettagli non richiesti: se Luca e Nicola possono scambiarsi il succo e l'acqua, la domanda "chi prende il caffè?" ha comunque una sola risposta.
:::

## Griglie di deduzione

:::definizione{#griglia-di-deduzione titolo="Griglia di deduzione"}
Una **griglia di deduzione** è una tabella a doppia entrata con le persone sulle righe e i valori di una caratteristica sulle colonne. In ogni casella si scrive ✗ quando l'abbinamento è escluso dagli indizi e ✓ quando è certo. La griglia serve a tenere traccia di ciò che si è già dedotto, senza doverlo tenere a mente.

Tre amici, Davide, Elisa e Fabio, hanno ciascuno un animale diverso, cioè un gatto, un cane e un pappagallo. Davide non ha il gatto, e Fabio non ha né il gatto né il cane. Dopo aver letto gli indizi la griglia si presenta così.

| | gatto | cane | pappagallo |
| --- | --- | --- | --- |
| Davide | ✗ | | |
| Elisa | | | |
| Fabio | ✗ | ✗ | |
:::

::::teorema{#caselle-escluse-e-certe titolo="Regola delle righe e delle colonne"}
Se ogni persona ha esattamente un valore e ogni valore appartiene a esattamente una persona, in una griglia di deduzione valgono due regole.

- Se in una riga, o in una colonna, tutte le caselle tranne una sono ✗, nella casella rimasta va ✓.
- Se una casella è ✓, tutte le altre caselle della sua riga e della sua colonna sono ✗.

Nella griglia degli animali la riga di Fabio ha due ✗, quindi Fabio ha il pappagallo. Di conseguenza la colonna del pappagallo riceve ✗ nelle righe di Davide e di Elisa.

:::dimostrazione
Ogni riga contiene esattamente un ✓, perché ogni persona ha un solo valore; se tutti gli altri valori sono esclusi, resta quello. Allo stesso modo ogni colonna contiene un solo ✓, perché ogni valore appartiene a una sola persona, perciò un ✓ esclude gli altri nella sua colonna e nella sua riga.
:::
::::

:::esempio{#propagazione-dei-vincoli titolo="Propagazione dei vincoli"}
Applicare una regola produce un nuovo ✓ o un nuovo ✗, che a sua volta permette di applicarne un'altra. Questo procedimento si chiama **propagazione dei vincoli**. Nel problema degli animali, dopo il ✓ di Fabio sul pappagallo, la riga di Davide ha ✗ sul gatto e sul pappagallo, quindi Davide ha il cane. La colonna del gatto ha ora ✗ nelle righe di Davide e di Fabio, perciò il gatto è di Elisa.

| | gatto | cane | pappagallo |
| --- | --- | --- | --- |
| Davide | ✗ | ✓ | ✗ |
| Elisa | ✓ | ✗ | ✗ |
| Fabio | ✗ | ✗ | ✓ |

Ogni passaggio usa un solo indizio o una sola regola. La griglia è completa quando ogni riga contiene un ✓.
:::

:::definizione{#griglie-con-piu-categorie titolo="Griglie con due caratteristiche"}
Quando le caratteristiche sono due, per esempio la professione e la città, si usa una tabella con una riga per persona e una colonna per caratteristica, e accanto si annotano i valori esclusi. Gli indizi che legano due caratteristiche, come "l'insegnante vive a Roma", si usano in entrambi i versi. Se l'insegnante vive a Roma e Giulia vive a Napoli, allora Giulia non è l'insegnante. Questo passaggio è la **contronominale** dell'indizio: "se una persona è l'insegnante, allora vive a Roma" equivale a "se una persona non vive a Roma, allora non è l'insegnante". Per l'equivalenza tra un'implicazione e la sua contronominale si rimanda all'argomento sui connettivi, le negazioni e le implicazioni.
:::

:::attenzione
L'indizio "l'insegnante vive a Roma" *non* dice che chi vive a Roma è l'insegnante, a meno che il testo dichiari che in ogni città vive una sola persona. Con tre persone e tre città diverse le due frasi sono equivalenti; con quattro persone e due sole città, una delle quali è Roma, a Roma può vivere anche qualcuno che non insegna.
:::

## Disposizioni in fila

:::definizione{#disposizioni-in-fila titolo="Disposizioni in fila"}
In una **disposizione in fila** le persone occupano posizioni numerate $1, 2, 3, \ldots$: in una coda la posizione $1$ è di chi viene servito per primo, in una fila di sedie o di posti auto la posizione $1$ è quella più a sinistra. Ogni indizio diventa una condizione sui numeri delle posizioni.

| indizio | condizione |
| --- | --- |
| "Bea è subito dietro Ciro" | posizione di Bea $=$ posizione di Ciro $+ 1$ |
| "Dina è dietro Ezio" | posizione di Dina maggiore della posizione di Ezio |
| "Ilda è accanto a Gianni" | le due posizioni differiscono di $1$ |
| "Lino è a un'estremità" | Lino è nella prima o nell'ultima posizione |

La tabella permette di scrivere tutti gli indizi nella stessa forma e di confrontarli.
:::

:::esempio{titolo="Quattro persone in coda"}
Gianni, Ilda, Lino e Mia sono in coda allo sportello. Lino è a un'estremità della coda e si trova davanti a Mia; Ilda è subito dietro Gianni; Mia non è accanto a Lino.

Poiché Lino è davanti a Mia, Lino non è l'ultimo, quindi è il primo. Mia non è accanto a Lino, perciò Mia è in posizione $3$ o $4$. Se Mia fosse in posizione $3$, per Gianni e Ilda resterebbero le posizioni $2$ e $4$, che non sono consecutive. Quindi Mia è quarta, Gianni secondo e Ilda terza, e l'ordine è
$$
\text{Lino},\ \text{Gianni},\ \text{Ilda},\ \text{Mia}.
$$
:::

:::attenzione
"Dietro" e "subito dietro" sono indizi diversi. "Dina è dietro Ezio" è vero anche se tra i due ci sono altre persone; "Dina è subito dietro Ezio" richiede posizioni consecutive. Nella coda Ezio, Aldo, Dina la prima frase è vera e la seconda è falsa.
:::

## Disposizioni attorno a un tavolo

:::definizione{#tavolo-rotondo titolo="Disposizioni attorno a un tavolo rotondo"}
Nei quesiti con un tavolo rotondo i posti sono equidistanti e le persone sono rivolte verso il centro. Guardando il tavolo dall'alto, il vicino alla **destra** di una persona è quello che la segue in senso antiorario, e il vicino alla **sinistra** è quello che la segue in senso orario. Se i posti sono in numero pari, la persona *di fronte* è quella che si raggiunge spostandosi di metà dei posti; con sei posti si avanza di tre.

Ruotare tutte le persone dello stesso numero di posti non cambia chi è accanto a chi, quindi si può fissare il posto di una persona e disporre le altre rispetto a lei. Si numerano i posti $0, 1, 2, \ldots$ in senso antiorario a partire da quella persona. Con questa numerazione la destra di chi siede al posto $k$ è il posto $k + 1$, la sinistra è il posto $k - 1$, e quando si supera l'ultimo posto si riparte da $0$.
:::

:::esempio{titolo="Sei persone attorno a un tavolo"}
Carlo, Dafne, Ennio, Fulvia, Gino e Ilda siedono attorno a un tavolo rotondo con sei posti, rivolti verso il centro. Fulvia è di fronte a Carlo; Dafne è alla destra di Carlo; Gino è di fronte a Dafne; Ilda non è accanto a Fulvia.

Si mette Carlo al posto $0$. Allora Fulvia, di fronte, è al posto $3$, e Dafne, alla destra di Carlo, è al posto $1$. Gino è di fronte a Dafne, quindi è al posto $1 + 3 = 4$. Restano i posti $2$ e $5$; il posto $2$ è accanto al posto $3$ di Fulvia, perciò Ilda è al posto $5$ ed Ennio al posto $2$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" punti="0,-2,pieno;1.732,-1,pieno;1.732,1,pieno;0,2,pieno;-1.732,1,pieno;-1.732,-1,pieno" segmenti="0,-2,0,2;1.732,-1,-1.732,1;1.732,1,-1.732,-1" etichette="-0.4,-2.65,Carlo;2.05,-1.3,Dafne;2.05,1.15,Ennio;-0.45,2.4,Fulvia;-2.95,1.15,Gino;-2.75,-1.3,Ilda" xmin=-3.6 xmax=3.6 ymin=-3.1 ymax=2.9 legenda=0 titolo="Il tavolo visto dall'alto: partendo da Carlo e procedendo in senso antiorario si incontrano Dafne, Ennio, Fulvia, Gino e Ilda. I segmenti tratteggiati uniscono le coppie di persone sedute una di fronte all'altra"}

:::

:::attenzione
Nel disegno visto dall'alto la destra di chi siede nella parte alta del tavolo appare a sinistra di chi guarda il foglio. Nella figura del tavolo con sei posti, il vicino alla destra di Fulvia è Gino, che nel disegno sta a sinistra di Fulvia, perché Gino segue Fulvia in senso antiorario. Per questo motivo destra e sinistra si leggono sempre con la regola del verso antiorario, e non con la posizione sul foglio.
:::

## Turni e calendari di lavoro

:::definizione{#turni-e-calendari titolo="Turni e calendari di lavoro"}
In un problema di turni i giorni, o le fasce orarie, hanno un ordine fisso e si trattano come le posizioni di una fila, quindi lunedì è la posizione $1$, martedì la $2$, e così via. "Il giorno dopo" corrisponde a "subito dietro", e "due giorni consecutivi" a "due posizioni accanto". Quando a una persona spettano più turni, si usa una tabella con i giorni sulle colonne e in ogni colonna si scrive chi è di turno.

Se Aldo, Bruno e Ciro coprono sei notti, due ciascuno, e nessuno lavora due notti consecutive, chi è di turno il lunedì non può esserlo il martedì. Un solo indizio di questo tipo esclude quindi una persona dal giorno precedente e da quello successivo.
:::

:::esempio{titolo="Quattro colleghi in quattro giorni"}
Ornella, Piero, Teresa e Ugo sono di turno in ufficio uno al giorno, da lunedì a giovedì. Ornella non lavora né il lunedì né il giovedì; Piero lavora il giorno dopo Ornella; Teresa lavora dopo Ugo; Teresa non lavora il martedì.

Ornella lavora martedì o mercoledì. Se lavorasse mercoledì, Piero lavorerebbe giovedì, e a Ugo e Teresa resterebbero lunedì e martedì, con Teresa al martedì perché lavora dopo Ugo; questo contraddice l'ultimo indizio. Quindi Ornella lavora martedì e Piero mercoledì. Poiché Teresa lavora dopo Ugo, Ugo lavora lunedì e Teresa giovedì.
:::

## Veri e bugiardi

:::definizione{#veri-e-bugiardi titolo="Sinceri e bugiardi"}
Nei quesiti di **veri e bugiardi** ogni persona è di uno di due tipi: un **sincero** dice sempre il vero, un **bugiardo** dice sempre il falso. Ne segue che un'affermazione è vera se e solo se chi la pronuncia è sincero. La regola permette di passare dalle affermazioni ai tipi e viceversa.

Se Lucio è sincero e dice "Mirta è bugiarda", allora Mirta è bugiarda. Se invece Lucio è bugiardo, la sua affermazione è falsa, quindi Mirta è sincera.
:::

::::teorema{#metodo-per-ipotesi titolo="Metodo per ipotesi e contraddizione"}
Per stabilire il tipo di una persona si suppone che sia sincera e si ricavano le conseguenze delle affermazioni. Se si arriva a una contraddizione, cioè a una persona che dovrebbe essere insieme sincera e bugiarda, l'ipotesi è falsa e la persona è bugiarda. Se non si arriva a una contraddizione, si prova anche l'ipotesi opposta, e la soluzione è unica quando una sola delle due ipotesi porta a un'assegnazione coerente.

:::dimostrazione
Ogni persona è sincera oppure bugiarda e non può essere entrambe le cose. Se l'ipotesi "è sincera" produce una contraddizione, quell'ipotesi non può essere vera, quindi resta soltanto l'altra.
:::
::::

:::esempio{titolo="Due affermazioni incrociate"}
Marco dice "Nadia è bugiarda". Nadia dice "Marco e io siamo dello stesso tipo".

Si suppone che Marco sia bugiardo. Allora la sua affermazione è falsa, quindi Nadia è sincera. L'affermazione di Nadia è perciò vera, quindi Marco dovrebbe essere sincero come lei, e questo contraddice l'ipotesi. Quindi Marco è **sincero** e Nadia è **bugiarda**. Come controllo, l'affermazione di Nadia è falsa, perché i due sono di tipo diverso, e questo è coerente con il fatto che Nadia mente.
:::

:::osservazione{#frasi-ricorrenti titolo="Tre frasi ricorrenti"}
Alcune affermazioni compaiono spesso e hanno una conseguenza fissa, che si ricava provando i due tipi di chi parla.

- Nessuno può dire "io sono bugiardo". Un sincero direbbe il falso e un bugiardo direbbe il vero, e nessuno dei due casi è possibile.
- Se $X$ dice "$Y$ è sincero", allora $X$ e $Y$ sono dello stesso tipo; se $X$ dice "$Y$ è bugiardo", sono di tipo diverso. Infatti un sincero descrive $Y$ com'è, mentre un bugiardo gli attribuisce il tipo opposto.
- Se $X$ dice "$Y$ e io siamo dello stesso tipo", allora $Y$ è sincero, qualunque sia il tipo di $X$. Se $X$ è sincero, $Y$ è del suo tipo, cioè sincero; se $X$ è bugiardo, $Y$ è di tipo diverso da $X$, cioè ancora sincero.

Queste conseguenze permettono spesso di fissare il tipo di una persona senza costruire ipotesi.
:::

## Chi è stato: affermazioni contraddittorie

:::definizione{#affermazioni-contraddittorie titolo="Affermazioni contraddittorie"}
Due affermazioni sono **contraddittorie** se una è la negazione dell'altra, quindi una delle due è vera e l'altra è falsa. Sono contraddittorie "È stato Bruno" e "Non è stato Bruno". Sono contraddittorie anche l'affermazione di una persona e la frase di un'altra che dice "quella persona mente", perché la seconda afferma che la prima è falsa. Per la negazione delle frasi composte si rimanda all'argomento sui connettivi, le negazioni e le implicazioni.
:::

:::teorema{#chi-e-stato titolo="Quesiti con un numero fissato di affermazioni vere"}
In molti quesiti una sola persona ha compiuto un'azione, alcune persone fanno un'affermazione ciascuna e il testo dice quante affermazioni sono vere, per esempio "esattamente una è falsa". Se tra le affermazioni c'è una coppia contraddittoria, quella coppia contiene esattamente una affermazione vera e una falsa, quindi il numero di affermazioni vere tra le restanti è determinato. Se non ci sono coppie contraddittorie, si prova ogni possibile colpevole e si contano le affermazioni vere. Il colpevole è quello per cui il conteggio coincide con il numero indicato dal testo.

Il metodo funziona perché ogni affermazione è vera oppure falsa, e una volta fissato il colpevole il suo valore di verità è determinato.
:::

:::esempio{titolo="Una sola affermazione falsa"}
Uno solo tra Aldo, Bruno, Carlo e Dino ha lasciato aperta la finestra dell'ufficio. Aldo dice "È stato Bruno"; Bruno dice "È stato Carlo"; Carlo dice "Bruno mente"; Dino dice "Non sono stato io". Esattamente una delle quattro affermazioni è falsa.

Le affermazioni di Bruno e di Carlo sono contraddittorie, quindi una delle due è la sola falsa. Perciò le affermazioni di Aldo e di Dino sono vere, e dall'affermazione di Aldo segue che è stato **Bruno**. Come controllo, se è stato Bruno l'affermazione di Bruno è falsa e le altre tre sono vere.

| colpevole | Aldo | Bruno | Carlo | Dino | false |
| --- | --- | --- | --- | --- | --- |
| Aldo | F | F | V | V | $2$ |
| Bruno | V | F | V | V | $1$ |
| Carlo | F | V | F | V | $2$ |
| Dino | F | F | V | F | $3$ |
:::

## Domande sulle opzioni

:::definizione{#necessariamente-vera titolo="Necessariamente vera, possibile, impossibile"}
Quando gli indizi lasciano più soluzioni, le domande dei quiz usano tre espressioni con significati precisi.

- Un'affermazione è **necessariamente vera** se è vera in *ogni* soluzione.
- Un'affermazione *può essere vera* se è vera in almeno una soluzione.
- Un'affermazione *non può essere vera* se è falsa in ogni soluzione.

Alfio, Bruna e Cora sono in coda; Alfio non è il primo e Bruna è davanti a Cora. Le soluzioni sono due, cioè Bruna, Alfio, Cora e Bruna, Cora, Alfio. Quindi "Bruna è la prima" è necessariamente vera, "Alfio è l'ultimo" può essere vera e "Cora è la prima" non può essere vera.
:::

:::osservazione{#informazione-aggiuntiva titolo="Informazione aggiuntiva"}
Un'altra domanda frequente è "quale informazione, aggiunta ai dati, permette di stabilire la soluzione?". Si scrivono tutte le soluzioni dei dati e si controlla quante ne restano con ciascuna opzione. La risposta corretta è l'opzione che ne lascia esattamente una. Un'opzione vera in tutte le soluzioni non aggiunge nulla. Nella coda di Alfio, Bruna e Cora l'informazione "Cora è seconda" lascia una sola soluzione, mentre "Bruna è la prima" è già una conseguenza dei dati e le lascia entrambe.
:::

## Metodi rapidi per i quiz

:::osservazione{#vincolo-piu-forte titolo="Partire dal vincolo più forte"}
Gli indizi si leggono tutti, ma si usano in un ordine preciso.

- Prima gli indizi che fissano un valore: "Gina è la terza", "Ugo è al primo piano", "il dirigente è al quarto piano".
- Poi quelli che legano due persone in modo rigido: "subito dietro", "di fronte", "il giorno dopo". Una coppia di posizioni consecutive ha poche collocazioni possibili, che si elencano tutte.
- Infine i divieti ("non è il primo", "non è accanto a"), che eliminano le collocazioni rimaste.

Nei problemi a tavolo rotondo si fissa la persona citata più volte; nei problemi di veri e bugiardi si comincia dalle frasi ricorrenti, che danno un tipo senza ipotesi.
:::

:::osservazione{#provare-le-opzioni titolo="Provare le opzioni una per una"}
Le cinque opzioni riducono i casi da esaminare. In un quesito "chi è stato" ogni opzione è un possibile colpevole, e basta contare le affermazioni vere per ciascuno. In un quesito "chi è terzo" si mette la persona dell'opzione in terza posizione e si controlla se gli indizi si possono rispettare. Per escludere un'opzione del tipo "necessariamente vera" basta una soluzione in cui l'opzione è falsa, cioè un controesempio.

Le opzioni sbagliate nascono spesso da errori ricorrenti: scambiare destra e sinistra al tavolo, leggere "dietro" come "subito dietro", usare un indizio nel verso opposto. Un'opzione del tipo "i dati non bastano" è corretta soltanto quando si sono trovate due soluzioni con risposte diverse.
:::

:::osservazione{#schema-a-margine titolo="Lo schema da disegnare a margine"}
Ogni tipo di problema ha il suo schema, che si disegna a margine in pochi secondi.

- Per abbinare persone e caratteristiche, la griglia con ✗ e ✓.
- Per le file e le classifiche, una riga di caselle numerate.
- Per i tavoli, un cerchio con i posti e una freccia che indica il verso antiorario, cioè la destra.
- Per i turni, una tabella con i giorni in colonna.
- Per i veri e bugiardi e per i quesiti "chi è stato", una tabella con un'ipotesi o un colpevole per riga e il valore V o F di ogni affermazione.

Lo schema permette di controllare la soluzione trovata rileggendo gli indizi uno per uno.
:::
