---
titolo: Calcolo combinatorio
sommario: Come si contano scelte e ordinamenti senza elencarli, con il principio di moltiplicazione, le permutazioni, le disposizioni e le combinazioni, e come si riconosce nel testo di un quiz quale modello si applica.
---

## Il principio fondamentale del conteggio

:::teorema{#principio-moltiplicazione titolo="Principio di moltiplicazione"}
Il calcolo combinatorio studia i metodi per contare in quanti modi si possono scegliere o ordinare degli oggetti, senza elencarli uno per uno. Il metodo di base è il **principio di moltiplicazione**, detto anche principio fondamentale del conteggio. Se una scelta si compie in due fasi successive, la prima fase si può compiere in $m$ modi e, per ciascuno di questi, la seconda si può compiere in $n$ modi, allora la scelta completa si può compiere in
$$
m \cdot n
$$
modi. Il principio vale perché a ciascuna delle $m$ scelte della prima fase si possono affiancare $n$ scelte della seconda, quindi le scelte complete formano $m$ gruppi di $n$ scelte ciascuno. Lo stesso vale con più fasi. Un ristorante propone $3$ primi, $4$ secondi e $2$ dolci, perciò un pasto composto da un primo, un secondo e un dolce si può scegliere in $3 \cdot 4 \cdot 2 = 24$ modi.
:::

:::esempio{#diagramma-ad-albero titolo="Diagramma ad albero"}
Un **diagramma ad albero** rappresenta le scelte fase per fase. Da un punto iniziale partono tanti rami quanti sono i modi della prima fase; dalla fine di ciascun ramo partono tanti rami quanti sono i modi della seconda fase, e così via. Ogni percorso dal punto iniziale a un'estremità finale è una scelta completa, quindi il numero delle scelte è il numero delle estremità finali. Con $2$ primi, pasta e riso, e $3$ secondi, carne, pesce e verdure, l'albero ha $2$ rami nella prima fase e $3$ rami da ciascuno di essi, perciò le scelte complete sono $2 \cdot 3 = 6$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=12 ymin=-0.8 ymax=5.8 linee="0,2.5 3,4;0,2.5 3,1;3,4 6,5;3,4 6,4;3,4 6,3;3,1 6,2;3,1 6,1;3,1 6,0" punti="0,2.5,pieno;3,4,pieno;3,1,pieno;6,5,pieno;6,4,pieno;6,3,pieno;6,2,pieno;6,1,pieno;6,0,pieno" etichette="1.9,4.3,pasta;2.1,0.35,riso;6.4,4.85,pasta e carne;6.4,3.85,pasta e pesce;6.4,2.85,pasta e verdure;6.4,1.85,riso e carne;6.4,0.85,riso e pesce;6.4,-0.15,riso e verdure" titolo="Diagramma ad albero per $2$ primi e $3$ secondi: $2 \cdot 3 = 6$ percorsi, uno per ogni pasto"}

Il diagramma ad albero è utile anche quando il numero di scelte di una fase dipende dalla scelta fatta nella fase precedente. In quel caso il principio di moltiplicazione non si applica direttamente, e si contano le estremità finali dell'albero.
:::

:::teorema{#principio-somma titolo="Principio della somma"}
Se le scelte possibili si dividono in due gruppi senza elementi in comune, il primo con $m$ scelte e il secondo con $n$, allora le scelte in tutto sono
$$
m + n .
$$
Il principio della somma si applica quando si compie *una sola* scelta tra alternative diverse; il principio di moltiplicazione si applica quando si compiono più scelte una dopo l'altra. Per andare da Roma a Milano una persona può prendere uno dei $5$ treni del mattino oppure uno dei $3$ voli, quindi ha $5 + 3 = 8$ possibilità. Se invece va in treno da Roma a Milano e poi in pullman da Milano a Como, con $4$ pullman disponibili, le possibilità sono $5 \cdot 4 = 20$.
:::

## Fattoriale e permutazioni

:::definizione{#fattoriale titolo="Fattoriale"}
Il **fattoriale** di un numero naturale $n \geq 1$ è il prodotto di tutti i numeri naturali da $1$ a $n$, e si indica con $n!$:
$$
n! = n \cdot (n - 1) \cdot (n - 2) \cdots 2 \cdot 1 .
$$
Si pone inoltre $0! = 1$. I primi valori sono $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$, $6! = 720$ e $7! = 5040$. Il fattoriale cresce molto in fretta, ma nei quozienti si semplifica senza calcolarlo per intero, perché $n! = n \cdot (n - 1)!$. Per esempio
$$
\frac{8!}{6!} = \frac{8 \cdot 7 \cdot 6!}{6!} = 8 \cdot 7 = 56 .
$$
:::

:::definizione{#permutazioni-semplici titolo="Permutazioni semplici"}
Una **permutazione** di $n$ oggetti distinti è un modo di disporli in fila, cioè un loro ordinamento. Il numero delle permutazioni di $n$ oggetti è
$$
P_n = n! .
$$
La formula segue dal principio di moltiplicazione. Il primo posto della fila si occupa in $n$ modi, il secondo con uno degli $n - 1$ oggetti rimasti, il terzo con uno degli $n - 2$, e così via fino all'ultimo posto, per il quale resta un solo oggetto. Con le permutazioni si contano gli ordinamenti di persone in fila, di libri su uno scaffale, di prove in un calendario. Cinque persone si mettono in fila davanti a uno sportello in $P_5 = 5! = 120$ modi diversi.
:::

:::esempio{titolo="Le permutazioni di tre lettere"}
Le permutazioni delle lettere $A$, $B$, $C$ sono $3! = 6$:
$$
ABC, \quad ACB, \quad BAC, \quad BCA, \quad CAB, \quad CBA .
$$
Le prime due iniziano con $A$, le due successive con $B$, le ultime due con $C$. Fissata la prima lettera, le altre due si ordinano in $2! = 2$ modi, quindi le permutazioni sono $3 \cdot 2 = 6$.
:::

:::osservazione{#vincoli-di-posizione titolo="Permutazioni con vincoli"}
Quando alcuni oggetti devono stare vicini, si considerano come un unico blocco. Se in una fila di $5$ persone Anna e Bruno devono stare uno accanto all'altro, il blocco formato da Anna e Bruno e le altre $3$ persone sono $4$ elementi, che si ordinano in $4!$ modi. Dentro il blocco Anna e Bruno si ordinano in $2!$ modi, quindi per il principio di moltiplicazione le file sono
$$
4! \cdot 2! = 24 \cdot 2 = 48 .
$$
Quando invece un oggetto ha un posto fisso, si ordinano soltanto gli altri. Se Anna deve essere la prima della fila, le file sono $4! = 24$.
:::

:::osservazione{#tavolo-rotondo titolo="Persone attorno a un tavolo rotondo"}
Attorno a un tavolo rotondo si possono considerare uguali due disposizioni che si ottengono l'una dall'altra con una rotazione, perché in entrambe ciascuno ha gli stessi vicini a destra e a sinistra. Con questa convenzione si fissa il posto di una persona e si ordinano le altre $n - 1$, quindi le disposizioni sono $(n - 1)!$. Sei amici si siedono attorno a un tavolo rotondo in $5! = 120$ modi. Se le rotazioni si considerano diverse, per esempio perché i posti sono numerati, le disposizioni sono $6! = 720$.
:::

## Permutazioni con ripetizione

:::teorema{#permutazioni-con-ripetizione titolo="Permutazioni con ripetizione"}
Si mettono in fila $n$ oggetti, tra i quali $k_1$ sono uguali tra loro, altri $k_2$ sono uguali tra loro, e così via fino a un ultimo gruppo di $k_r$ oggetti uguali, con $k_1 + k_2 + \dots + k_r = n$. Le file distinte sono
$$
P_n^{(k_1, k_2, \dots, k_r)} = \frac{n!}{k_1! \cdot k_2! \cdots k_r!} .
$$
Se gli oggetti fossero tutti distinti, le file sarebbero $n!$. Scambiando tra loro i $k_1$ oggetti uguali del primo gruppo la fila resta la stessa, e questi scambi sono $k_1!$; lo stesso vale per gli altri gruppi. Perciò in $n!$ ogni fila distinta è contata $k_1! \cdot k_2! \cdots k_r!$ volte, e il numero delle file distinte si ottiene dividendo per questo prodotto. Con $3$ bandierine rosse e $2$ blu, uguali tra loro se dello stesso colore, si compongono
$$
\frac{5!}{3! \cdot 2!} = \frac{120}{12} = 10
$$
file distinte.
:::

:::esempio{#anagrammi titolo="Anagrammi"}
Un **anagramma** di una parola è una qualsiasi fila delle sue lettere, anche priva di significato. Se le lettere sono tutte diverse, gli anagrammi sono le permutazioni semplici delle lettere; se alcune lettere si ripetono, sono permutazioni con ripetizione.

- La parola ROMA ha $4$ lettere diverse, quindi ha $4! = 24$ anagrammi.
- La parola CAMERA ha $6$ lettere con la A ripetuta $2$ volte, quindi ha $\dfrac{6!}{2!} = 360$ anagrammi.
- La parola BANANA ha $6$ lettere, con la A ripetuta $3$ volte e la N $2$ volte, quindi ha $\dfrac{6!}{3! \cdot 2!} = \dfrac{720}{12} = 60$ anagrammi.

Le lettere che compaiono una volta sola darebbero al denominatore il fattore $1! = 1$, perciò si omettono.
:::

## Disposizioni semplici

:::definizione{#disposizioni-semplici titolo="Disposizioni semplici"}
Una **disposizione semplice** di $n$ oggetti distinti presi a $k$ a $k$, con $k \leq n$, è una fila di $k$ oggetti diversi scelti tra gli $n$. Due disposizioni sono diverse se contengono oggetti diversi oppure gli stessi oggetti in ordine diverso. Il numero delle disposizioni semplici è
$$
D_{n,k} = n \cdot (n - 1) \cdot (n - 2) \cdots (n - k + 1) = \frac{n!}{(n - k)!} ,
$$
cioè il prodotto di $k$ numeri consecutivi decrescenti a partire da $n$. Anche questa formula segue dal principio di moltiplicazione, perché il primo posto si occupa in $n$ modi, il secondo in $n - 1$ modi e così via per $k$ posti. Con le disposizioni si contano le classifiche, i podi e le cariche diverse assegnate a persone diverse. Con $8$ atleti in gara i podi possibili sono $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$.

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=10.5 ymin=-0.6 ymax=2.8 poligoni="0,0 2,0 2,1.5 0,1.5;3.5,0 5.5,0 5.5,1.5 3.5,1.5;7,0 9,0 9,1.5 7,1.5" etichette="0.75,0.55,8;4.25,0.55,7;7.75,0.55,6;2.6,0.55,·;6.1,0.55,·;0.45,1.95,1° posto;3.95,1.95,2° posto;7.45,1.95,3° posto" titolo="Le scelte per i tre gradini del podio con $8$ atleti: $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$"}

:::

:::osservazione{#permutazioni-come-disposizioni titolo="Permutazioni e disposizioni"}
Quando $k = n$ ogni disposizione usa tutti gli oggetti, quindi è una permutazione, e infatti $D_{n,n} = n! = P_n$. La formula con i fattoriali dà lo stesso risultato grazie alla convenzione $0! = 1$, perché $\dfrac{n!}{0!} = n!$.
:::

:::esempio{#cifre-diverse titolo="Numeri con cifre tutte diverse"}
Con le cifre $1$, $2$, $3$, $4$, $5$ si scrivono $D_{5,3} = 5 \cdot 4 \cdot 3 = 60$ numeri di $3$ cifre tutte diverse, perché l'ordine delle cifre conta ($123$ e $321$ sono numeri diversi) e nessuna cifra si ripete. Se tra le cifre disponibili c'è lo $0$, il primo posto ha una scelta in meno, perché un numero di tre cifre non comincia con $0$. Con le cifre da $0$ a $9$ la prima cifra si sceglie tra le $9$ cifre da $1$ a $9$, la seconda tra le $9$ cifre rimaste, compreso lo $0$, e la terza tra le $8$ rimaste. I numeri di $3$ cifre tutte diverse sono quindi $9 \cdot 9 \cdot 8 = 648$.
:::

## Disposizioni con ripetizione

:::definizione{#disposizioni-con-ripetizione titolo="Disposizioni con ripetizione"}
Una **disposizione con ripetizione** di $n$ oggetti presi a $k$ a $k$ è una fila di $k$ posti, ciascuno occupato da uno degli $n$ oggetti, nella quale lo stesso oggetto può comparire più volte. In questo caso $k$ può anche essere maggiore di $n$. Il numero delle disposizioni con ripetizione è
$$
D'_{n,k} = n^k ,
$$
perché ciascuno dei $k$ posti si occupa in $n$ modi, indipendentemente dagli altri, e per il principio di moltiplicazione si moltiplicano $k$ fattori uguali a $n$. Con le disposizioni con ripetizione si contano codici, PIN e password, nei quali un simbolo può ripetersi. I PIN di $4$ cifre, ciascuna da $0$ a $9$, sono $10^4 = 10\,000$.
:::

:::esempio{#codici-e-totocalcio titolo="Codici e colonne del totocalcio"}
Quando i posti non hanno tutti lo stesso numero di scelte, si applica direttamente il principio di moltiplicazione. Un codice formato da $2$ lettere, scelte tra le $21$ dell'alfabeto italiano, seguite da $3$ cifre, con lettere e cifre che possono ripetersi, si compone in
$$
21^2 \cdot 10^3 = 441 \cdot 1000 = 441\,000
$$
modi. Una colonna del totocalcio assegna a ciascuna partita uno dei tre segni $1$, $X$, $2$. Con $14$ partite le colonne possibili sono $3^{14} = 4\,782\,969$.
:::

:::attenzione
Nelle disposizioni con ripetizione la base della potenza è il numero dei simboli disponibili e l'esponente è il numero dei posti. Le sequenze di $3$ lanci di una moneta, con testa (T) e croce (C), sono $2^3 = 8$, e *non* $3^2 = 9$:
$$
TTT, \quad TTC, \quad TCT, \quad TCC, \quad CTT, \quad CTC, \quad CCT, \quad CCC .
$$

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=10.5 ymin=-0.8 ymax=7.8 linee="0,3.5 3,5.5;0,3.5 3,1.5;3,5.5 6,6.5;3,5.5 6,4.5;3,1.5 6,2.5;3,1.5 6,0.5;6,6.5 9,7;6,6.5 9,6;6,4.5 9,5;6,4.5 9,4;6,2.5 9,3;6,2.5 9,2;6,0.5 9,1;6,0.5 9,0" punti="0,3.5,pieno;3,5.5,pieno;3,1.5,pieno;6,6.5,pieno;6,4.5,pieno;6,2.5,pieno;6,0.5,pieno;9,7,pieno;9,6,pieno;9,5,pieno;9,4,pieno;9,3,pieno;9,2,pieno;9,1,pieno;9,0,pieno" etichette="2.6,5.85,T;2.6,0.75,C;5.6,6.85,T;5.6,4.85,C;5.6,2.85,T;5.6,0.85,C;9.3,6.85,TTT;9.3,5.85,TTC;9.3,4.85,TCT;9.3,3.85,TCC;9.3,2.85,CTT;9.3,1.85,CTC;9.3,0.85,CCT;9.3,-0.15,CCC" titolo="Tre lanci di una moneta: $2$ scelte per ciascuno dei $3$ lanci, quindi $2^3 = 8$ sequenze"}

:::

## Combinazioni e coefficiente binomiale

:::definizione{#combinazioni-semplici titolo="Combinazioni semplici"}
Una **combinazione semplice** di $n$ oggetti distinti presi a $k$ a $k$, con $k \leq n$, è un gruppo di $k$ oggetti diversi scelti tra gli $n$, senza tener conto dell'ordine. Due combinazioni sono diverse soltanto se contengono oggetti diversi. Il numero delle combinazioni semplici è
$$
C_{n,k} = \frac{D_{n,k}}{k!} = \frac{n!}{k! \, (n - k)!} .
$$
Si divide per $k!$ perché ogni gruppo di $k$ oggetti compare tra le disposizioni in tutti i suoi $k!$ ordinamenti, mentre tra le combinazioni compare una volta sola. Con le combinazioni si contano comitati, squadre, mani di carte e gruppi di domande scelte da un elenco. Da $6$ persone si sceglie una delegazione di $2$ persone in
$$
C_{6,2} = \frac{6 \cdot 5}{2 \cdot 1} = 15
$$
modi.
:::

:::definizione{#coefficiente-binomiale titolo="Coefficiente binomiale"}
Il numero $C_{n,k}$ si indica anche con il simbolo $\dbinom{n}{k}$, che si legge "$n$ su $k$" e si chiama **coefficiente binomiale**:
$$
\binom{n}{k} = \frac{n!}{k! \, (n - k)!} = \frac{n \cdot (n - 1) \cdots (n - k + 1)}{k!} .
$$
Nel calcolo a mano la seconda forma è la più rapida, con $k$ fattori decrescenti a partire da $n$ al numeratore e $k!$ al denominatore. Per esempio
$$
\binom{10}{3} = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = \frac{720}{6} = 120 .
$$
:::

:::teorema{#proprieta-binomiale titolo="Proprietà del coefficiente binomiale"}
Per ogni numero naturale $n \geq 1$ e per ogni $k$ con $0 \leq k \leq n$ valgono le tre uguaglianze seguenti.

- $\dbinom{n}{0} = \dbinom{n}{n} = 1$, perché c'è un solo modo di non scegliere nessun oggetto e un solo modo di sceglierli tutti.
- $\dbinom{n}{1} = n$, perché scegliere un oggetto equivale a indicare quale.
- $\dbinom{n}{k} = \dbinom{n}{n - k}$, perché scegliere i $k$ oggetti da prendere equivale a scegliere gli $n - k$ oggetti da lasciare.

La terza proprietà si chiama **simmetria** e permette di sostituire $k$ con $n - k$ quando $n - k$ è più piccolo. Per esempio $\dbinom{20}{18} = \dbinom{20}{2} = \dfrac{20 \cdot 19}{2} = 190$.
:::

:::esempio{#strette-di-mano titolo="Strette di mano e partite di un girone"}
Se $n$ persone si stringono la mano una volta ciascuna con ogni altra, ogni stretta di mano corrisponde a una coppia di persone, e nella coppia l'ordine non conta. Le strette di mano sono quindi
$$
\binom{n}{2} = \frac{n \, (n - 1)}{2} .
$$
Con $4$ persone sono $\dbinom{4}{2} = 6$, con $10$ persone sono $\dfrac{10 \cdot 9}{2} = 45$. Lo stesso conto dà il numero delle partite di un girone all'italiana di sola andata, nel quale ogni squadra incontra una volta ciascuna delle altre. Con andata e ritorno ogni coppia di squadre gioca due partite, una in casa di ciascuna squadra, quindi l'ordine conta e le partite sono $D_{n,2} = n \, (n - 1)$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=4 ymin=-0.8 ymax=3.8 linee="0,0 3,0 3,3 0,3 0,0;0,0 3,3;3,0 0,3" punti="0,0,pieno;3,0,pieno;3,3,pieno;0,3,pieno" etichette="-0.45,-0.45,A;3.15,-0.45,B;3.15,3.2,C;-0.45,3.2,D" titolo="Quattro persone $A$, $B$, $C$, $D$: ogni segmento è una stretta di mano, e i segmenti sono $\dbinom{4}{2} = 6$"}

:::

:::esempio{#diagonali-di-un-poligono titolo="Diagonali di un poligono"}
Una **diagonale** di un poligono è un segmento che congiunge due vertici non consecutivi. Un poligono con $n$ vertici ha $\dbinom{n}{2}$ segmenti che congiungono due vertici, e $n$ di questi sono i lati. Le diagonali sono quindi
$$
\binom{n}{2} - n = \frac{n \, (n - 1)}{2} - n = \frac{n \, (n - 3)}{2} .
$$
Lo stesso risultato si ottiene osservando che da ogni vertice partono $n - 3$ diagonali, una verso ciascun vertice che non è il vertice stesso né uno dei due adiacenti; nel prodotto $n \, (n - 3)$ ogni diagonale è contata due volte, una per ciascun estremo, perciò si divide per $2$. Il pentagono ha $\dfrac{5 \cdot 2}{2} = 5$ diagonali, l'esagono $\dfrac{6 \cdot 3}{2} = 9$, il decagono $\dfrac{10 \cdot 7}{2} = 35$.

::grafico{assi=0 uguale=1 xmin=-3 xmax=3 ymin=-2.4 ymax=2.6 poligoni="0,2 -1.902,0.618 -1.176,-1.618 1.176,-1.618 1.902,0.618" linee="0,2 -1.176,-1.618;0,2 1.176,-1.618;-1.902,0.618 1.902,0.618;-1.902,0.618 1.176,-1.618;1.902,0.618 -1.176,-1.618" punti="0,2,pieno;-1.902,0.618,pieno;-1.176,-1.618,pieno;1.176,-1.618,pieno;1.902,0.618,pieno" titolo="Il pentagono ha $\dfrac{5 \cdot (5 - 3)}{2} = 5$ diagonali, perché da ogni vertice ne partono $2$ e ogni diagonale ha due estremi"}

:::

## Come si riconosce il modello

:::osservazione{#scelta-del-modello titolo="Conta l'ordine? Sono ammesse ripetizioni?"}
Il modello da usare si riconosce rispondendo a due domande sul testo del quesito.

- La prima domanda è se *conta l'ordine*, cioè se scambiando due oggetti scelti si ottiene una situazione diversa. In un podio l'ordine conta, perché arrivare primo o secondo non è lo stesso; in un comitato i cui membri hanno tutti lo stesso ruolo l'ordine non conta.
- La seconda domanda è se *sono ammesse ripetizioni*, cioè se lo stesso oggetto si può scegliere più volte. In un PIN una cifra si può ripetere; in un podio un atleta occupa un solo gradino.

Se l'ordine conta e le ripetizioni non sono ammesse, si contano le disposizioni semplici $D_{n,k}$, che diventano le permutazioni $P_n$ quando si usano tutti gli oggetti. Se l'ordine conta e le ripetizioni sono ammesse, si contano le disposizioni con ripetizione $D'_{n,k} = n^k$. Se l'ordine non conta e le ripetizioni non sono ammesse, si contano le combinazioni $C_{n,k}$.
:::

:::esempio{titolo="Due persone su cinque, tre conteggi diversi"}
Da un gruppo di $5$ persone si scelgono due persone in tre situazioni diverse.

- Se si eleggono un presidente e un segretario, che sono cariche diverse, l'ordine conta e i modi sono $D_{5,2} = 5 \cdot 4 = 20$.
- Se si scelgono $2$ rappresentanti con lo stesso ruolo, l'ordine non conta e i modi sono $C_{5,2} = \dfrac{5 \cdot 4}{2} = 10$.
- Se si assegnano il premio di gennaio e quello di febbraio, che possono andare alla stessa persona, l'ordine conta e le ripetizioni sono ammesse, quindi i modi sono $D'_{5,2} = 5^2 = 25$.
:::

:::osservazione{#scelte-composte titolo="Scelte composte e casi alternativi"}
Quando una scelta si compone di più scelte indipendenti, ciascuna si conta con il suo modello e i risultati si moltiplicano, per il principio di moltiplicazione. Un comitato di $2$ uomini scelti tra $5$ e di $3$ donne scelte tra $6$ si forma in
$$
\binom{5}{2} \cdot \binom{6}{3} = 10 \cdot 20 = 200
$$
modi. Quando invece il quesito ammette più casi alternativi, come "esattamente $2$ uomini oppure esattamente $3$ uomini", si conta ogni caso separatamente e si sommano i risultati, per il principio della somma.
:::

## Il conteggio per complementare

:::teorema{#conteggio-per-complementare titolo="Conteggio per complementare"}
Se tra $N$ casi possibili quelli che *non* hanno una certa proprietà sono $M$, allora i casi che hanno la proprietà sono
$$
N - M .
$$
La regola vale perché ogni caso ha la proprietà oppure non la ha, e le due possibilità si escludono, quindi per il principio della somma $N$ è la somma dei due conteggi. Il metodo è il più rapido nei quesiti con le parole "almeno uno": i casi con *almeno un* elemento di un certo tipo sono tutti i casi meno quelli con *nessun* elemento di quel tipo. I codici di $3$ cifre da $0$ a $9$, anche ripetute, sono $10^3 = 1000$; quelli che non contengono la cifra $7$ sono $9^3 = 729$, perché per ogni posto restano $9$ cifre. I codici con almeno una cifra $7$ sono perciò
$$
1000 - 729 = 271 .
$$
:::

:::esempio{#almeno-una-donna titolo="Comitati con almeno una donna"}
Da un gruppo di $4$ uomini e $3$ donne si sceglie un comitato di $3$ persone. I comitati in tutto sono $\dbinom{7}{3} = 35$, e quelli formati da soli uomini sono $\dbinom{4}{3} = 4$. I comitati con almeno una donna sono perciò $35 - 4 = 31$. Il conteggio diretto richiede tre casi, con una, due o tre donne, e dà lo stesso risultato:
$$
\binom{3}{1} \binom{4}{2} + \binom{3}{2} \binom{4}{1} + \binom{3}{3} \binom{4}{0} = 18 + 12 + 1 = 31 .
$$
:::

:::attenzione
Scegliere prima una donna e poi le altre due persone fra tutte le rimanenti conta più volte lo stesso comitato. Con i dati dell'esempio questo conteggio dà $3 \cdot \dbinom{6}{2} = 3 \cdot 15 = 45$, che è maggiore di $31$. Il comitato formato da due donne e un uomo, per esempio, compare due volte, una per ciascuna delle due donne scelte per prima.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Controlli rapidi sul risultato"}
Nelle prove a tempo i conteggi si controllano con alcune osservazioni.

- **Riconoscere il modello** prima di calcolare, con le due domande sull'ordine e sulle ripetizioni. Tra le opzioni di un quiz compaiono spesso i risultati degli altri modelli: se la risposta corretta è $C_{8,3} = 56$, tra le opzioni si trovano facilmente anche $D_{8,3} = 336$ e $8^3 = 512$.
- **Confrontare gli ordini di grandezza**. A parità di $n$ e $k$ vale $C_{n,k} \leq D_{n,k} \leq n^k$, perché le combinazioni non distinguono l'ordine e le disposizioni con ripetizione ammettono più file. Un'opzione che non rispetta queste disuguaglianze corrisponde a un modello sbagliato.
- **Semplificare i fattoriali** prima di moltiplicare: $\dfrac{10!}{7! \cdot 3!} = \dfrac{10 \cdot 9 \cdot 8}{6} = 120$, senza calcolare $10!$.
- **Provare con numeri piccoli**. Quando non è chiaro quale formula si applica, si risolve lo stesso problema con $3$ o $4$ oggetti elencando i casi a mano, e si confronta il risultato con le formule.
- **Verificare le opzioni**. Nei quesiti inversi, come "un poligono ha $20$ diagonali: quanti lati ha?", si sostituiscono le opzioni nella formula, e con $n = 8$ si ottiene $\dfrac{8 \cdot 5}{2} = 20$.

Il verso del risultato offre un ulteriore controllo, perché aggiungere un vincolo (due persone vicine, una cifra vietata) riduce il numero dei casi, mentre ammettere le ripetizioni lo aumenta.
:::
