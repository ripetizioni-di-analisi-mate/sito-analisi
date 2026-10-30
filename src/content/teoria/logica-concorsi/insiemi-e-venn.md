---
titolo: Insiemi e diagrammi di Venn
sommario: Che cosa sono un insieme e i suoi elementi, come si rappresentano unione, intersezione, differenza e complementare con i diagrammi di Venn, come si sceglie il diagramma che descrive tre categorie e come si contano gli elementi nei problemi con due e con tre insiemi.
---

## Insiemi ed elementi

:::definizione{#insieme titolo="Insieme ed elemento"}
Un **insieme** è una collezione di oggetti per la quale, dato un oggetto qualsiasi, si può stabilire senza ambiguità se ne fa parte oppure no. Gli oggetti che ne fanno parte si chiamano **elementi** dell'insieme. Gli insiemi si indicano con lettere maiuscole come $A$, $B$, $C$. Per dire che $x$ è un elemento di $A$ si scrive $x \in A$ e si legge "$x$ appartiene ad $A$"; per dire che non lo è si scrive $x \notin A$.

I giorni della settimana formano un insieme $G$, quindi martedì $\in G$ e gennaio $\notin G$. Le "città più belle d'Italia" non formano un insieme, perché non esiste un criterio condiviso per decidere se una città ne fa parte.
:::

:::definizione{#rappresentazione-insiemi titolo="Elencazione e proprietà caratteristica"}
Un insieme si può descrivere in due modi.

- Per **elencazione** si scrivono i suoi elementi fra parentesi graffe, separati da virgole. L'insieme delle vocali è $V = \{a, e, i, o, u\}$.
- Per **proprietà caratteristica** si indica la proprietà che hanno tutti e soli i suoi elementi. L'insieme $P = \{x \mid x \text{ è un numero pari compreso fra } 1 \text{ e } 9\}$ si legge "l'insieme degli $x$ tali che $x$ è un numero pari compreso fra $1$ e $9$".

Lo stesso insieme ammette le due descrizioni, poiché $P = \{2, 4, 6, 8\}$. L'elencazione si usa quando gli elementi sono pochi, la proprietà quando sono molti, come per i multipli di $3$ minori di $1000$. In un elenco l'ordine non conta e un elemento ripetuto si conta una volta sola, perciò $\{1, 2, 3\}$ e $\{3, 1, 2, 1\}$ sono lo stesso insieme.
:::

:::definizione{#numero-di-elementi titolo="Numero di elementi"}
Il **numero di elementi** di un insieme finito $A$ si indica con $|A|$. Per l'insieme delle vocali si ha $|V| = 5$, e per l'insieme dei numeri pari fra $1$ e $9$ si ha $|P| = 4$. I problemi di conteggio dei concorsi chiedono il numero di elementi di un insieme costruito a partire da altri, come il numero di dipendenti che parlano due lingue o il numero di studenti che non praticano nessuno sport.
:::

## Sottoinsiemi, insieme vuoto e insieme universo

:::definizione{#sottoinsieme titolo="Sottoinsieme"}
Un insieme $B$ è un **sottoinsieme** di $A$, e si scrive $B \subseteq A$, se *ogni* elemento di $B$ appartiene anche ad $A$. Si dice anche che $B$ è **contenuto** in $A$. L'insieme dei cani è contenuto nell'insieme dei mammiferi, perché ogni cane è un mammifero. L'insieme $\{2, 4\}$ è contenuto in $\{1, 2, 3, 4\}$; l'insieme $\{2, 5\}$ invece non è contenuto in $\{1, 2, 3, 4\}$, perché $5$ non vi appartiene.

::venn{tipo="incluso" nomi="Mammiferi,Cani" zone="ab" titolo="L'insieme dei cani è contenuto nell'insieme dei mammiferi, quindi il cerchio dei cani sta tutto dentro il cerchio dei mammiferi"}

L'inclusione traduce le frasi del tipo "tutti i … sono …". La frase "tutti i cani sono mammiferi" afferma che l'insieme dei cani è contenuto in quello dei mammiferi; le frasi con "tutti", "alcuni" e "nessuno" si studiano nell'argomento sui sillogismi.
:::

:::definizione{#insieme-vuoto titolo="Insieme vuoto"}
L'**insieme vuoto** è l'insieme che non ha elementi. Si indica con $\emptyset$, e $|\emptyset| = 0$. È vuoto, per esempio, l'insieme dei mesi con $32$ giorni. L'insieme vuoto serve a esprimere che una zona di un diagramma non contiene nessun elemento, come la zona dei cani che non sono mammiferi.
:::

:::definizione{#insieme-universo titolo="Insieme universo"}
L'**insieme universo**, indicato con $U$, è l'insieme di tutti gli elementi di cui parla un problema; gli altri insiemi del problema sono suoi sottoinsiemi. In un quesito sui $40$ dipendenti di un ufficio l'insieme universo è formato dai $40$ dipendenti, e l'insieme dei dipendenti che parlano inglese è un suo sottoinsieme. Nei diagrammi l'insieme universo si disegna come un rettangolo, che contiene anche gli elementi che non appartengono a nessuno degli altri insiemi, come i dipendenti che non parlano nessuna lingua straniera.
:::

:::definizione{#diagramma-di-venn titolo="Diagramma di Venn"}
Un **diagramma di Venn** rappresenta gli insiemi con linee chiuse, di solito cerchi, disegnate dentro il rettangolo dell'insieme universo. Ogni elemento si scrive nella zona che corrisponde agli insiemi a cui appartiene. Due cerchi che si sovrappongono dividono il rettangolo in quattro zone: gli elementi che stanno solo nel primo insieme, quelli che stanno in entrambi, quelli che stanno solo nel secondo e quelli che non stanno in nessuno dei due.

Si considerano $U = \{1, 2, \ldots, 10\}$, l'insieme $A$ dei numeri pari e l'insieme $B$ dei multipli di $3$. Il numero $6$ è pari ed è multiplo di $3$, quindi si scrive nella zona comune ai due cerchi. I numeri $1$, $5$ e $7$ non sono pari e non sono multipli di $3$, perciò si scrivono nel rettangolo, fuori da entrambi i cerchi.

::venn{nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="Numeri da $1$ a $10$: $A$ è l'insieme dei numeri pari, $B$ l'insieme dei multipli di $3$"}

:::

## Operazioni tra insiemi

:::definizione{#unione titolo="Unione"}
L'**unione** di $A$ e $B$, indicata con $A \cup B$, è l'insieme degli elementi che appartengono ad $A$ *oppure* a $B$, compresi quelli che appartengono a entrambi. La "o" dell'unione è quindi inclusiva. Con i numeri da $1$ a $10$, i pari e i multipli di $3$, si ha
$$
A \cup B = \{2, 3, 4, 6, 8, 9, 10\},
$$
e il numero $6$ si scrive una volta sola. Se $A$ è l'insieme dei dipendenti che parlano inglese e $B$ quello dei dipendenti che parlano francese, $A \cup B$ è l'insieme dei dipendenti che parlano *almeno una* delle due lingue.

::venn{zone="a,ab,b" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="L'unione $A \cup B$ comprende le tre zone dei due cerchi"}

:::

:::definizione{#intersezione titolo="Intersezione"}
L'**intersezione** di $A$ e $B$, indicata con $A \cap B$, è l'insieme degli elementi che appartengono *sia* ad $A$ *sia* a $B$. Con i pari e i multipli di $3$ fra $1$ e $10$ si ha $A \cap B = \{6\}$. Nell'ufficio, $A \cap B$ è l'insieme dei dipendenti che parlano inglese e francese. Due insiemi si dicono **disgiunti** se non hanno elementi in comune, cioè se $A \cap B = \emptyset$; i numeri pari e i numeri dispari formano due insiemi disgiunti.

::venn{zone="ab" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="L'intersezione $A \cap B$ è la zona comune ai due cerchi"}

:::

:::definizione{#differenza titolo="Differenza"}
La **differenza** tra $A$ e $B$, indicata con $A \setminus B$, è l'insieme degli elementi che appartengono ad $A$ e *non* appartengono a $B$. Con i pari e i multipli di $3$ fra $1$ e $10$ si ha $A \setminus B = \{2, 4, 8, 10\}$. Nell'ufficio, $A \setminus B$ è l'insieme dei dipendenti che parlano inglese e non parlano francese, cioè di quelli che fra le due lingue parlano *solo* l'inglese. L'ordine dei due insiemi conta, perché $B \setminus A = \{3, 9\}$ è un insieme diverso da $A \setminus B$.

::venn{zone="a" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="La differenza $A \setminus B$ è la parte del cerchio $A$ esterna al cerchio $B$"}

:::

:::definizione{#complementare titolo="Complementare"}
Il **complementare** di $A$, indicato con $\overline{A}$, è l'insieme degli elementi dell'insieme universo che non appartengono ad $A$. Con $U = \{1, 2, \ldots, 10\}$ e $A$ l'insieme dei pari si ha $\overline{A} = \{1, 3, 5, 7, 9\}$. Il complementare dipende dall'insieme universo; poiché ogni elemento di $U$ sta in $A$ oppure in $\overline{A}$, vale
$$
|\overline{A}| = |U| - |A| .
$$
In un ufficio di $40$ dipendenti, di cui $26$ parlano inglese, i dipendenti che non parlano inglese sono $40 - 26 = 14$.

::venn{zone="b,u" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="Il complementare $\overline{A}$ comprende tutto ciò che sta nel rettangolo e fuori dal cerchio $A$"}

:::

:::teorema{#complementare-unione titolo="Complementare dell'unione e dell'intersezione"}
Per due insiemi $A$ e $B$ valgono le **leggi di De Morgan**
$$
\overline{A \cup B} = \overline{A} \cap \overline{B},
\qquad
\overline{A \cap B} = \overline{A} \cup \overline{B} .
$$
Un elemento è fuori dall'unione quando non sta in $A$ e non sta in $B$, quindi sta in $\overline{A}$ e in $\overline{B}$. Un elemento è fuori dall'intersezione quando non appartiene ad almeno uno dei due insiemi, quindi sta in $\overline{A}$ oppure in $\overline{B}$. La prima legge si usa nei quesiti "quanti non praticano *né* il calcio *né* il tennis", perché le persone cercate formano il complementare dell'unione. Con i numeri da $1$ a $10$, gli elementi né pari né multipli di $3$ sono $1$, $5$ e $7$. Le leggi corrispondenti per le frasi si trovano nell'argomento sui connettivi e sulle negazioni.

::venn{zone="u" nomi="A,B" elementi="a:2,4,8,10;ab:6;b:3,9;u:1,5,7" titolo="Il complementare dell'unione $\overline{A \cup B} = \overline{A} \cap \overline{B}$ è la zona esterna a entrambi i cerchi"}

:::

## Relazioni tra categorie

:::definizione{#relazioni-tra-due-categorie titolo="Inclusione, intersezione, disgiunzione"}
Due categorie di persone o di oggetti, viste come insiemi, si trovano in una di queste relazioni.

- Una categoria è **inclusa** nell'altra se ogni suo elemento appartiene all'altra, come gli italiani e gli europei. Nel diagramma un cerchio sta dentro l'altro.
- Le due categorie si **intersecano** se hanno elementi in comune e ciascuna ha anche elementi che non appartengono all'altra, come i medici e le donne. Nel diagramma i due cerchi si sovrappongono in parte.
- Le due categorie sono **disgiunte** se non hanno elementi in comune, come i pesci e gli uccelli. Nel diagramma i due cerchi sono separati.

Nei quesiti di questo tipo la relazione si stabilisce in base al significato comune delle parole.

::venn{tipo="incluso" nomi="Europei,Italiani" titolo="Inclusione: ogni italiano è un europeo"}

::venn{nomi="Medici,Donne" zone="ab" titolo="Intersezione: esistono donne medico, medici uomini e donne che non sono medici"}

::venn{tipo="disgiunti" nomi="Pesci,Uccelli" titolo="Disgiunzione: nessun pesce è un uccello"}

:::

:::osservazione{#come-si-stabilisce-la-relazione titolo="Come si stabilisce la relazione"}
Per stabilire la relazione fra due categorie si cerca un esempio concreto per ciascuna zona del diagramma. Per i cani e i mammiferi non esiste un cane che non sia un mammifero, perciò la zona dei cani esterna ai mammiferi è vuota e il cerchio dei cani si disegna dentro quello dei mammiferi.
:::

:::definizione{#tre-categorie titolo="Diagrammi con tre categorie"}
Con tre categorie si studiano le tre coppie una alla volta e si combinano le tre relazioni in un solo disegno. Un diagramma descrive correttamente le tre categorie se contiene una zona per ogni combinazione che esiste davvero e nessuna zona per le combinazioni impossibili. I casi più frequenti nei quesiti sono sei.

- Animali, mammiferi, cani: ogni cane è un mammifero e ogni mammifero è un animale, quindi i tre cerchi sono uno dentro l'altro.
- Mammiferi, cani, gatti: cani e gatti sono disgiunti e sono entrambi mammiferi, quindi due cerchi separati stanno dentro un terzo.
- Musicisti, pianisti, violinisti: pianisti e violinisti sono musicisti e qualcuno suona entrambi gli strumenti, quindi due cerchi che si sovrappongono stanno dentro un terzo.
- Medici, uomini, italiani: ogni coppia si interseca ed esistono medici italiani uomini, quindi i tre cerchi si sovrappongono e formano sette zone.
- Cani, gatti, animali bianchi: cani e gatti sono disgiunti, ed esistono cani bianchi, gatti bianchi e animali bianchi che non sono né cani né gatti, quindi il cerchio degli animali bianchi si sovrappone agli altri due, che restano separati.
- Pesci, uccelli, rettili: le tre categorie sono disgiunte a due a due, quindi i tre cerchi sono separati.

::grafico{assi=0 uguale=1 legenda=0 curve="5.0+4.3*cos(t),16+4.3*sin(t),0,6.29;5.5+2.9*cos(t),15.6+2.9*sin(t),0,6.29;6.0+1.5*cos(t),15.3+1.5*sin(t),0,6.29;16.0+4.3*cos(t),16+4.3*sin(t),0,6.29;14.4+1.4*cos(t),16+1.4*sin(t),0,6.29;17.6+1.4*cos(t),16+1.4*sin(t),0,6.29;27.0+4.3*cos(t),16+4.3*sin(t),0,6.29;26.0+1.9*cos(t),16+1.9*sin(t),0,6.29;28.0+1.9*cos(t),16+1.9*sin(t),0,6.29;3.9+2.4*cos(t),5.9+2.4*sin(t),0,6.29;6.1+2.4*cos(t),5.9+2.4*sin(t),0,6.29;5.0+2.4*cos(t),4+2.4*sin(t),0,6.29;13.6+2.2*cos(t),5+2.2*sin(t),0,6.29;18.4+2.2*cos(t),5+2.2*sin(t),0,6.29;16.0+1.6*cos(t),5+1.6*sin(t),0,6.29;24.6+1.7*cos(t),6.7+1.7*sin(t),0,6.29;29.4+1.7*cos(t),6.7+1.7*sin(t),0,6.29;27.0+1.7*cos(t),2.9+1.7*sin(t),0,6.29" etichette="0.1,20.4,1;11.1,20.4,2;22.1,20.4,3;0.1,9.4,4;11.1,9.4,5;22.1,9.4,6" xmin=-0.5 xmax=32.5 ymin=-0.5 ymax=21.5 titolo="I sei schemi nell'ordine dell'elenco: 1 animali, mammiferi, cani; 2 mammiferi, cani, gatti; 3 musicisti, pianisti, violinisti; 4 medici, uomini, italiani; 5 cani, gatti, animali bianchi; 6 pesci, uccelli, rettili"}

:::

:::esempio{#scelta-del-diagramma titolo="Frutti, mele, oggetti rossi"}
Si cerca il diagramma che descrive le categorie "frutti", "mele" e "oggetti rossi". Ogni mela è un frutto, quindi il cerchio delle mele sta dentro quello dei frutti. Esistono mele rosse e mele verdi, perciò il cerchio degli oggetti rossi si sovrappone in parte a quello delle mele. Le fragole sono frutti rossi che non sono mele, quindi il cerchio degli oggetti rossi entra anche nella parte dei frutti esterna alle mele. Infine una penna rossa non è un frutto, perciò il cerchio degli oggetti rossi esce dal cerchio dei frutti. Il diagramma corretto ha quindi un cerchio dentro un altro e un terzo cerchio che si sovrappone a entrambi e ne esce.
:::

:::attenzione
Due categorie collegate nella vita quotidiana possono essere disgiunte. Fra "medici, ospedali, pazienti", i medici e i pazienti si intersecano, perché un medico può essere ricoverato; gli ospedali invece sono edifici e non persone, quindi il loro cerchio è separato dagli altri due.
:::

## Contare gli elementi di due insiemi

::::teorema{#principio-inclusione-esclusione titolo="Numero di elementi dell'unione"}
Per due insiemi finiti $A$ e $B$ vale
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
In un ufficio $18$ dipendenti parlano inglese, $12$ parlano francese e $5$ parlano entrambe le lingue. I dipendenti che parlano almeno una delle due lingue sono
$$
18 + 12 - 5 = 25 .
$$
Se $A$ e $B$ sono disgiunti, $|A \cap B| = 0$ e il numero di elementi dell'unione è la somma $|A| + |B|$.

::venn{zone="a,ab,b" nomi="I,F" elementi="a:13;ab:5;b:7" titolo="Dipendenti che parlano inglese ($I$) e francese ($F$): $13$ solo inglese, $5$ entrambe, $7$ solo francese, in tutto $25$"}

:::dimostrazione
Nella somma $|A| + |B|$ gli elementi di $A \cap B$ sono contati due volte, una come elementi di $A$ e una come elementi di $B$. Sottraendo $|A \cap B|$ ogni elemento dell'unione risulta contato una volta sola.
:::
::::

:::esempio{#nessuno-dei-due titolo="Quanti non praticano nessuno dei due sport"}
In una classe di $30$ studenti, $17$ giocano a calcio, $14$ giocano a tennis e $6$ praticano entrambi gli sport. Gli studenti che praticano almeno uno dei due sport sono
$$
17 + 14 - 6 = 25,
$$
quindi gli studenti che non praticano nessuno dei due sport sono $30 - 25 = 5$. Questi studenti formano il complementare dell'unione. I $17$ calciatori comprendono anche i $6$ che giocano a tennis, perciò quelli che giocano solo a calcio sono $17 - 6 = 11$, e quelli che giocano solo a tennis sono $14 - 6 = 8$.

::venn{zone="u" nomi="C,T" elementi="a:11;ab:6;b:8;u:5" titolo="Studenti che giocano a calcio ($C$) e a tennis ($T$): la zona colorata contiene i $5$ studenti che non praticano nessuno dei due sport"}

:::

:::osservazione{#zone-due-insiemi titolo="Le quattro zone e il dato mancante"}
Con due insiemi gli elementi si dividono in quattro zone: solo $A$, entrambi, solo $B$, nessuno dei due. La somma delle quattro zone è $|U|$. Un quesito fornisce alcuni numeri e chiede quello mancante; di solito si scrive per primo il numero della zona comune e poi si ricavano le altre per differenza. In un ufficio di $50$ dipendenti, $32$ vanno al lavoro in auto, $25$ con i mezzi pubblici e $4$ con nessuno dei due mezzi. I dipendenti che usano almeno un mezzo sono $50 - 4 = 46$, quindi dalla formula dell'unione
$$
|A \cap B| = 32 + 25 - 46 = 11
$$
dipendenti usano sia l'auto sia i mezzi pubblici.
:::

:::osservazione{#tabella-doppia-entrata titolo="Tabella a doppia entrata"}
Le quattro zone di due insiemi si possono scrivere in una **tabella a doppia entrata**. Le righe indicano se un elemento appartiene ad $A$, le colonne se appartiene a $B$, e l'ultima riga e l'ultima colonna contengono i totali. Per la classe di $30$ studenti la tabella è la seguente.

| | tennis | non tennis | totale |
| --- | --- | --- | --- |
| calcio | $6$ | $11$ | $17$ |
| non calcio | $8$ | $5$ | $13$ |
| totale | $14$ | $16$ | $30$ |

Ogni riga e ogni colonna hanno come somma il totale scritto in fondo, quindi una casella mancante si ricava per differenza. La tabella si usa quando i due insiemi sono caratteristiche che ogni persona ha oppure non ha, come uomo e donna, tempo pieno e part-time.
:::

:::attenzione
Il dato "$17$ giocano a calcio" comprende anche chi gioca a tennis, a meno che il testo dica "*solo* a calcio". Sommando $17$ e $14$ senza togliere i $6$ studenti comuni si ottiene $31$, un numero maggiore degli studenti della classe, perché i $6$ studenti comuni sono contati due volte. Questo errore si chiama **doppio conteggio**.
:::

## Contare gli elementi di tre insiemi

:::teorema{#unione-di-tre-insiemi titolo="Numero di elementi dell'unione di tre insiemi"}
Per tre insiemi finiti $A$, $B$, $C$ vale
$$
|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C| .
$$
Un elemento che appartiene a tutti e tre gli insiemi è contato tre volte nella somma $|A| + |B| + |C|$ e viene sottratto tre volte con le tre intersezioni a due a due, quindi va aggiunto una volta con l'ultimo termine. La formula dà il numero di elementi dell'unione senza disegnare il diagramma, e serve quando il quesito chiede quanti non appartengono a nessuno dei tre insiemi oppure quanti appartengono a tutti e tre.
:::

:::osservazione{#dal-centro-verso-esterno titolo="Riempimento dal centro verso l'esterno"}
Tre cerchi che si sovrappongono formano sette zone dentro i cerchi, più la zona esterna. Il diagramma si riempie dal centro verso l'esterno.

- Al centro si scrive $|A \cap B \cap C|$.
- Nella zona di $A$ e $B$ senza $C$ si scrive $|A \cap B| - |A \cap B \cap C|$, e allo stesso modo nelle altre due zone comuni a due soli insiemi.
- Nella zona "solo $A$" si scrive $|A|$ meno i tre numeri già scritti dentro il cerchio $A$, e allo stesso modo per $B$ e per $C$.
- Fuori dai cerchi si scrive $|U|$ meno la somma delle sette zone.

Il centro si scrive per primo, perché i dati "$A$ e $B$" del testo comprendono anche gli elementi di tutti e tre gli insiemi.
:::

:::esempio{titolo="Tre lingue in un ufficio"}
In un ufficio di $60$ dipendenti, $30$ parlano inglese, $20$ francese e $15$ tedesco; $10$ parlano inglese e francese, $6$ inglese e tedesco, $5$ francese e tedesco, e $3$ parlano tutte e tre le lingue. Il centro contiene $3$ dipendenti. Le zone di due sole lingue contengono
$$
10 - 3 = 7,
\qquad
6 - 3 = 3,
\qquad
5 - 3 = 2
$$
dipendenti. Le zone di una sola lingua contengono
$$
30 - 7 - 3 - 3 = 17,
\qquad
20 - 7 - 2 - 3 = 8,
\qquad
15 - 3 - 2 - 3 = 7
$$
dipendenti, per inglese, francese e tedesco. La somma delle sette zone è $47$, quindi $60 - 47 = 13$ dipendenti non parlano nessuna delle tre lingue. La formula dell'unione dà lo stesso numero, perché $30 + 20 + 15 - 10 - 6 - 5 + 3 = 47$.

::venn{tipo="tre" nomi="I,F,T" elementi="a:17;b:8;c:7;ab:7;ac:3;bc:2;abc:3;u:13" titolo="Dipendenti che parlano inglese ($I$), francese ($F$) e tedesco ($T$), con le zone riempite dal centro verso l'esterno"}

:::

:::definizione{#esattamente-uno-esattamente-due titolo="Almeno uno, esattamente uno, esattamente due"}
Nei quesiti con tre insiemi le espressioni seguenti indicano gruppi di zone diversi.

- **Almeno uno** dei tre insiemi indica l'unione, cioè tutte e sette le zone dentro i cerchi. Nell'ufficio sono $47$ dipendenti.
- **Esattamente uno** indica le tre zone "solo $A$", "solo $B$", "solo $C$". Nell'ufficio sono $17 + 8 + 7 = 32$ dipendenti.
- **Esattamente due** indica le tre zone comuni a due soli insiemi, senza il centro. Nell'ufficio sono $7 + 3 + 2 = 12$ dipendenti.

Le tre quantità "esattamente uno", "esattamente due" e "tutti e tre" sommate danno l'unione, poiché $32 + 12 + 3 = 47$. Nella somma $|A| + |B| + |C|$ ogni elemento di "esattamente due" è contato due volte e ogni elemento di "tutti e tre" è contato tre volte, quindi
$$
|A| + |B| + |C| = (\text{esattamente uno}) + 2 \cdot (\text{esattamente due}) + 3 \cdot (\text{tutti e tre}) .
$$
Nell'ufficio si ha infatti $30 + 20 + 15 = 65$ e $32 + 2 \cdot 12 + 3 \cdot 3 = 65$. La relazione serve nei quesiti che danno i totali dei tre insiemi e chiedono quanti appartengono a esattamente due di essi.
:::

:::attenzione
La frase "$10$ parlano inglese e francese" indica $|I \cap F|$, che comprende anche chi parla il tedesco. La frase "$10$ parlano *soltanto* inglese e francese" indica invece la zona senza il centro. Nel primo caso nella zona si scrive $10 - 3 = 7$, nel secondo si scrive $10$.
:::

## Valori minimi e massimi dell'intersezione

::::teorema{#intersezione-minima-massima titolo="Elementi in comune, al minimo e al massimo"}
Siano $A$ e $B$ sottoinsiemi di un insieme universo $U$ finito. Il numero di elementi comuni soddisfa
$$
|A| + |B| - |U| \leq |A \cap B| \leq \min\big(|A|, |B|\big),
$$
dove $\min$ indica il minore dei due numeri; se $|A| + |B| - |U|$ è negativo, il minimo è $0$. In una classe di $30$ studenti, $20$ preferiscono la matematica e $18$ la storia, potendo indicarne più di una. Gli studenti che preferiscono entrambe le materie sono almeno $20 + 18 - 30 = 8$ e al massimo $18$.

:::dimostrazione
L'unione è contenuta in $U$, quindi $|A| + |B| - |A \cap B| \leq |U|$, che equivale alla disuguaglianza di sinistra. L'intersezione è contenuta sia in $A$ sia in $B$, perciò non ha più elementi del più piccolo dei due.
:::
::::

:::esempio{titolo="Minimo con le percentuali"}
Il $75\%$ dei dipendenti di un'azienda usa il computer e il $45\%$ usa la stampante. Prendendo $U$ come il $100\%$, la percentuale di dipendenti che usano entrambi è almeno
$$
75\% + 45\% - 100\% = 20\% .
$$
Il valore minimo si ha quando nessun dipendente è privo di entrambi gli strumenti; il valore massimo, $45\%$, si ha quando chi usa la stampante usa anche il computer.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Schema a margine per i problemi di conteggio"}
I problemi di conteggio si risolvono in pochi passaggi con un diagramma disegnato a margine.

- Si disegnano due o tre cerchi in un rettangolo e si scrive per primo il numero della zona centrale.
- Si riempiono le altre zone per differenza, dal centro verso l'esterno.
- Si controlla che la somma di tutte le zone, compresa quella esterna, sia il numero totale di elementi.

Le opzioni sbagliate dei quesiti nascono di solito da errori riconoscibili. Un'opzione uguale a $|U| - |A| - |B|$ nasce dall'aver tolto due volte l'intersezione; un'opzione uguale a $|A|$ al posto di $|A| - |A \cap B|$ nasce dal confondere "giocano a calcio" con "giocano solo a calcio". Un risultato negativo, oppure maggiore del totale, indica un doppio conteggio.
:::

:::osservazione{#metodi-rapidi-diagrammi titolo="Eliminazione delle opzioni per la scelta del diagramma"}
Per scegliere il diagramma che descrive tre categorie si esaminano le tre coppie una alla volta.

- Se una categoria è contenuta in un'altra, si eliminano i diagrammi in cui il suo cerchio esce dall'altro.
- Se due categorie sono disgiunte, si eliminano i diagrammi in cui i loro cerchi si sovrappongono.
- Se esiste un elemento che appartiene a tutte e tre le categorie, si eliminano i diagrammi senza una zona comune ai tre cerchi.

Un solo esempio concreto basta a eliminare un diagramma. L'esistenza di un medico italiano uomo, per esempio, esclude ogni diagramma senza la zona comune a medici, uomini e italiani. Dopo due o tre controlli resta di solito una sola opzione.
:::
