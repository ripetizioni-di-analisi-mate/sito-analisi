---
titolo: Calcolo combinatorio
sommario: Come si contano i modi di compiere una scelta senza elencarli tutti, con il principio fondamentale del conteggio e i diagrammi ad albero, le disposizioni, le permutazioni e le combinazioni, i coefficienti binomiali con il triangolo di Tartaglia e il binomio di Newton, fino ai problemi su anagrammi, comitati, codici e strette di mano.
---

## Principio fondamentale del conteggio

:::teorema{#principio-fondamentale titolo="Principio fondamentale del conteggio"}
Il calcolo combinatorio serve a contare in quanti modi si può compiere una scelta senza scrivere l'elenco di tutti i casi. Molte scelte si compiono in più fasi successive, per esempio prima la maglia e poi i pantaloni, e il principio fondamentale dice come si combinano i numeri dei modi delle singole fasi.

Una scelta si compie in $k$ fasi successive. La prima fase si può compiere in $n_1$ modi; la seconda in $n_2$ modi, qualunque sia l'esito della prima; e così via, fino alla $k$-esima, che si può compiere in $n_k$ modi qualunque siano gli esiti delle fasi precedenti. Allora la scelta completa si può compiere in
$$
n_1 \cdot n_2 \cdot \ldots \cdot n_k
$$
modi. Per esempio con $3$ maglie e $2$ paia di pantaloni si formano $3 \cdot 2 = 6$ abbinamenti, perché ciascuna delle $3$ maglie si può abbinare a entrambe le paia di pantaloni.
:::

:::definizione{#diagramma-albero titolo="Diagramma ad albero"}
Un **diagramma ad albero** è il disegno di una scelta in più fasi. Da un punto iniziale, detto *radice*, partono tanti rami quanti sono i modi di compiere la prima fase. Dall'estremo di ciascuno di questi rami partono tanti rami quanti sono i modi di compiere la seconda fase, e così via. Ogni percorso dalla radice a un estremo finale, detto *foglia*, corrisponde a una scelta completa, quindi il numero delle scelte è uguale al numero delle foglie.

Con le maglie $M_1$, $M_2$, $M_3$ e i pantaloni $P_1$, $P_2$ dalla radice partono $3$ rami, e da ciascuno partono $2$ rami. Le foglie sono quindi $3 \cdot 2 = 6$, come dice il principio fondamentale.

::grafico{assi=0 uguale=1 legenda=0 linee="0,0 3,2;0,0 3,0;0,0 3,-2;3,2 6,2.6;3,2 6,1.4;3,0 6,0.6;3,0 6,-0.6;3,-2 6,-1.4;3,-2 6,-2.6" punti="0,0,pieno;3,2,pieno;3,0,pieno;3,-2,pieno;6,2.6,pieno;6,1.4,pieno;6,0.6,pieno;6,-0.6,pieno;6,-1.4,pieno;6,-2.6,pieno" etichette="2.8,2.45,M₁;2.8,0.45,M₂;2.8,-1.55,M₃;7,2.6,M₁ P₁;7,1.4,M₁ P₂;7,0.6,M₂ P₁;7,-0.6,M₂ P₂;7,-1.4,M₃ P₁;7,-2.6,M₃ P₂" xmin=-0.5 xmax=8 ymin=-3.2 ymax=3.2 titolo="Diagramma ad albero degli abbinamenti fra $3$ maglie e $2$ paia di pantaloni: da ogni maglia partono $2$ rami, quindi le foglie sono $3 \cdot 2 = 6$"}

L'albero si usa anche quando il numero dei rami cambia da un nodo all'altro. In quel caso le foglie si contano ramo per ramo.
:::

:::esempio{titolo="Un menù in tre fasi"}
Un ristorante propone $4$ primi, $5$ secondi e $3$ dessert, e un menù è formato da un primo, un secondo e un dessert. Ogni fase si compie nello stesso numero di modi qualunque siano le scelte precedenti, quindi per il principio fondamentale i menù sono
$$
4 \cdot 5 \cdot 3 = 60 .
$$
Se il dessert si può anche non prendere, la terza fase ha $4$ esiti, cioè uno dei tre dessert oppure nessun dessert. I menù diventano allora $4 \cdot 5 \cdot 4 = 80$.
:::

:::teorema{#principio-somma titolo="Principio della somma"}
A volte i casi possibili si dividono in gruppi che non hanno casi in comune. Allora il numero totale dei casi è la somma dei numeri dei casi dei singoli gruppi. In simboli, si indica con $|A|$ il numero degli elementi di un insieme finito $A$; se $A$ e $B$ sono insiemi finiti *disgiunti*, cioè con $A \cap B = \varnothing$, vale
$$
|A \cup B| = |A| + |B| .
$$
Per esempio per andare da una città a un'altra ci sono $3$ treni diretti e $2$ autobus. Chi sceglie un solo mezzo ha $3 + 2 = 5$ possibilità, perché un viaggio non può essere insieme in treno e in autobus.
:::

:::esempio{titolo="Somma e prodotto nello stesso problema"}
Si contano le sigle formate da una, due o tre lettere scelte fra $A$, $B$, $C$, con ripetizioni ammesse. Le sigle di lunghezza diversa formano gruppi disgiunti, quindi si contano separatamente e poi si sommano. Per ogni lunghezza ogni posizione si riempie in $3$ modi, quindi per il principio fondamentale le sigle di una lettera sono $3$, quelle di due lettere sono $3 \cdot 3 = 9$ e quelle di tre lettere sono $3 \cdot 3 \cdot 3 = 27$. Per il principio della somma le sigle sono in tutto
$$
3 + 9 + 27 = 39 .
$$
:::

:::attenzione
Il principio fondamentale si applica quando ogni fase ha lo stesso numero di esiti, qualunque sia l'esito delle fasi precedenti. Si lancia una moneta: se esce testa ($T$) si lancia un dado, se esce croce ($C$) si lancia di nuovo la moneta. La seconda fase ha $6$ esiti dopo testa e $2$ esiti dopo croce, quindi il prodotto $2 \cdot 6$ dà un risultato sbagliato. Le foglie dell'albero si contano ramo per ramo, e gli esiti sono $6 + 2 = 8$.

::grafico{assi=0 uguale=1 legenda=0 linee="0,0 3,1.5;0,0 3,-2.2;3,1.5 6,3.5;3,1.5 6,2.7;3,1.5 6,1.9;3,1.5 6,1.1;3,1.5 6,0.3;3,1.5 6,-0.5;3,-2.2 6,-1.7;3,-2.2 6,-2.7" punti="0,0,pieno;3,1.5,pieno;3,-2.2,pieno;6,3.5,pieno;6,2.7,pieno;6,1.9,pieno;6,1.1,pieno;6,0.3,pieno;6,-0.5,pieno;6,-1.7,pieno;6,-2.7,pieno" etichette="2.8,1.95,T;2.8,-1.75,C;6.4,3.5,1;6.4,2.7,2;6.4,1.9,3;6.4,1.1,4;6.4,0.3,5;6.4,-0.5,6;6.4,-1.7,T;6.4,-2.7,C" xmin=-0.5 xmax=7.2 ymin=-3.2 ymax=4 titolo="Dopo testa partono $6$ rami e dopo croce ne partono $2$, quindi gli esiti sono $6 + 2 = 8$"}

:::

:::osservazione{#insiemi-non-disgiunti titolo="Gruppi con casi in comune"}
Se i due gruppi hanno casi in comune, la somma $|A| + |B|$ conta due volte gli elementi di $A \cap B$. Per correggere il conteggio si sottrae una volta il numero di questi elementi:
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
Fra i numeri da $1$ a $30$ quelli divisibili per $2$ sono $15$, quelli divisibili per $3$ sono $10$ e quelli divisibili per entrambi, cioè per $6$, sono $5$. Quindi i numeri divisibili per $2$ oppure per $3$ sono $15 + 10 - 5 = 20$.

::venn{zone="a,ab,b" nomi="A,B" elementi="a:10;ab:5;b:5" titolo="Numeri da $1$ a $30$: $A$ contiene i $15$ multipli di $2$ e $B$ i $10$ multipli di $3$; i $5$ multipli di $6$ stanno in $A \cap B$, quindi $|A \cup B| = 10 + 5 + 5 = 20$"}

:::

## Disposizioni semplici

:::definizione{#disposizioni-semplici titolo="Disposizioni semplici"}
Molti problemi chiedono di scegliere alcuni oggetti e di metterli in un ordine, come i primi tre classificati di una gara. Sono dati $n$ oggetti distinti e un numero naturale $k$ con $1 \leq k \leq n$. Una **disposizione semplice** di $n$ oggetti di classe $k$ è una sequenza ordinata di $k$ oggetti, scelti fra gli $n$ e tutti diversi fra loro. Due disposizioni sono diverse se contengono oggetti diversi, oppure se contengono gli stessi oggetti in un ordine diverso. Il numero delle disposizioni semplici si indica con $D_{n,k}$.

Con le lettere $A$, $B$, $C$ e $k = 2$ le disposizioni semplici sono
$$
AB, \quad AC, \quad BA, \quad BC, \quad CA, \quad CB ,
$$
quindi $D_{3,2} = 6$. Le sequenze $AB$ e $BA$ sono distinte, perché contengono le stesse lettere in ordine diverso.

::grafico{assi=0 uguale=1 legenda=0 linee="0,0 3,2.2;0,0 3,0;0,0 3,-2.2;3,2.2 6,2.7;3,2.2 6,1.7;3,0 6,0.5;3,0 6,-0.5;3,-2.2 6,-1.7;3,-2.2 6,-2.7" punti="0,0,pieno;3,2.2,pieno;3,0,pieno;3,-2.2,pieno;6,2.7,pieno;6,1.7,pieno;6,0.5,pieno;6,-0.5,pieno;6,-1.7,pieno;6,-2.7,pieno" etichette="2.8,2.65,A;2.8,0.45,B;2.8,-1.75,C;6.6,2.7,AB;6.6,1.7,AC;6.6,0.5,BA;6.6,-0.5,BC;6.6,-1.7,CA;6.6,-2.7,CB" xmin=-0.5 xmax=7.5 ymin=-3.2 ymax=3.2 titolo="Albero delle disposizioni semplici di $A$, $B$, $C$ di classe $2$: la prima lettera si sceglie in $3$ modi e la seconda fra le $2$ rimaste, quindi $D_{3,2} = 3 \cdot 2 = 6$"}

:::

::::teorema{#numero-disposizioni-semplici titolo="Numero delle disposizioni semplici"}
Per $1 \leq k \leq n$ il numero delle disposizioni semplici di $n$ oggetti di classe $k$ è il prodotto di $k$ numeri naturali consecutivi decrescenti, a partire da $n$:
$$
D_{n,k} = n \cdot (n - 1) \cdot (n - 2) \cdot \ldots \cdot (n - k + 1) .
$$
Per esempio in una gara con $10$ atleti i podi possibili, cioè le terne ordinate di oro, argento e bronzo, sono $D_{10,3} = 10 \cdot 9 \cdot 8 = 720$. L'ultimo fattore è $n - k + 1 = 10 - 3 + 1 = 8$.

:::dimostrazione
L'idea è riempire le $k$ posizioni della sequenza una alla volta e applicare il principio fondamentale. La prima posizione si riempie con uno qualsiasi degli $n$ oggetti, quindi in $n$ modi. Gli oggetti devono essere diversi, perciò per la seconda posizione restano $n - 1$ oggetti, qualunque sia stato il primo. Per la terza posizione ne restano $n - 2$, e così via. Prima di riempire la $k$-esima posizione sono già stati usati $k - 1$ oggetti, quindi ne restano $n - (k - 1) = n - k + 1$. Ogni fase ha un numero di esiti che non dipende dalle scelte precedenti, quindi per il principio fondamentale le sequenze sono $n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)$.
:::
::::

:::esempio{titolo="Numeri di tre cifre distinte"}
Si contano i numeri naturali di tre cifre con le cifre tutte diverse. La cifra delle centinaia è diversa da $0$, altrimenti il numero avrebbe solo due cifre, quindi si sceglie in $9$ modi. La cifra delle decine è diversa da quella delle centinaia e può essere $0$, quindi si sceglie fra $9$ cifre. La cifra delle unità è diversa dalle due già usate, quindi si sceglie fra $8$ cifre. Per il principio fondamentale i numeri sono
$$
9 \cdot 9 \cdot 8 = 648 .
$$
Il conteggio coincide con $D_{10,3} - D_{9,2} = 720 - 72 = 648$, perché dalle $720$ sequenze di tre cifre distinte si tolgono le $72$ che iniziano con $0$.
:::

## Disposizioni con ripetizione

:::definizione{#disposizioni-ripetizione titolo="Disposizioni con ripetizione"}
In un codice PIN la stessa cifra può comparire più volte. Sono dati $n$ oggetti distinti e un numero naturale $k \geq 1$. Una **disposizione con ripetizione** di $n$ oggetti di classe $k$ è una sequenza ordinata di $k$ oggetti scelti fra gli $n$, in cui ogni oggetto può comparire più volte. Il numero delle disposizioni con ripetizione si indica con $D'_{n,k}$. Poiché gli oggetti si possono ripetere, la classe $k$ può essere anche maggiore di $n$.

Con le lettere $A$, $B$ e $k = 3$ le disposizioni con ripetizione sono
$$
AAA, \quad AAB, \quad ABA, \quad ABB, \quad BAA, \quad BAB, \quad BBA, \quad BBB ,
$$
quindi $D'_{2,3} = 8$.
:::

::::teorema{#numero-disposizioni-ripetizione titolo="Numero delle disposizioni con ripetizione"}
Per ogni $n \geq 1$ e $k \geq 1$ vale
$$
D'_{n,k} = n^k .
$$
Per esempio i codici PIN di $4$ cifre, con lo $0$ ammesso anche in prima posizione, sono $D'_{10,4} = 10^4 = 10\,000$. Le sequenze di risultati di $3$ lanci di un dado sono $D'_{6,3} = 6^3 = 216$.

:::dimostrazione
Si riempiono le $k$ posizioni una alla volta. Ogni oggetto si può ripetere, quindi ogni posizione si riempie in $n$ modi, qualunque siano gli oggetti messi nelle posizioni precedenti. Per il principio fondamentale le sequenze sono $n \cdot n \cdot \ldots \cdot n$, con $k$ fattori, cioè $n^k$.
:::
::::

:::attenzione
Nella formula $n^k$ la base è il numero degli esiti possibili per *ogni* posizione e l'esponente è il numero delle posizioni. Con $4$ lanci di un dado ogni lancio ha $6$ esiti, quindi le sequenze sono $6^4 = 1296$. Il numero $4^6 = 4096$ conta invece le sequenze di $6$ posizioni con $4$ esiti ciascuna.
:::

:::esempio{titolo="Codici con lettere e cifre"}
Una password è formata da $3$ lettere scelte in un alfabeto di $26$ lettere, seguite da $2$ cifre; lettere e cifre si possono ripetere. Le lettere formano una disposizione con ripetizione di $26$ oggetti di classe $3$ e le cifre una disposizione con ripetizione di $10$ oggetti di classe $2$. Per il principio fondamentale le password sono
$$
26^3 \cdot 10^2 = 17\,576 \cdot 100 = 1\,757\,600 .
$$
Se le $3$ lettere devono essere diverse, la parte con le lettere diventa una disposizione semplice, e le password sono $D_{26,3} \cdot 10^2 = 26 \cdot 25 \cdot 24 \cdot 100 = 1\,560\,000$.
:::

:::osservazione{#numero-sottoinsiemi titolo="Numero dei sottoinsiemi di un insieme"}
Sia $S$ un insieme di $n$ elementi. Un sottoinsieme di $S$ è determinato dalla risposta sì o no alla domanda "questo elemento appartiene al sottoinsieme?", ripetuta per ognuno degli $n$ elementi. Le sequenze di $n$ risposte sono disposizioni con ripetizione di $2$ oggetti di classe $n$, quindi i sottoinsiemi di $S$, compresi l'insieme vuoto e $S$ stesso, sono
$$
D'_{2,n} = 2^n .
$$
Per $S = \{a, b, c\}$ si ottengono $2^3 = 8$ sottoinsiemi: $\varnothing$, $\{a\}$, $\{b\}$, $\{c\}$, $\{a, b\}$, $\{a, c\}$, $\{b, c\}$, $\{a, b, c\}$. Lo stesso numero si ritrova con il binomio di Newton.
:::

## Permutazioni semplici e fattoriale

:::definizione{#permutazioni-semplici titolo="Permutazioni semplici"}
Quando si mettono in ordine *tutti* gli oggetti disponibili, per esempio $5$ libri su uno scaffale, la sequenza contiene ogni oggetto una sola volta. Una **permutazione semplice** di $n$ oggetti distinti è una disposizione semplice di $n$ oggetti di classe $n$, cioè un ordinamento di tutti gli $n$ oggetti. Il numero delle permutazioni semplici si indica con $P_n$. Le permutazioni delle lettere $A$, $B$, $C$ sono
$$
ABC, \quad ACB, \quad BAC, \quad BCA, \quad CAB, \quad CBA ,
$$
quindi $P_3 = 6$.
:::

:::definizione{#fattoriale titolo="Fattoriale"}
Per un numero naturale $n \geq 1$ il **fattoriale** di $n$, che si legge "$n$ fattoriale", è il prodotto dei numeri naturali da $1$ a $n$:
$$
n! = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1 .
$$
Si pone inoltre $0! = 1$; il motivo di questa scelta compare nella formula delle disposizioni con i fattoriali. I primi valori sono
$$
1! = 1, \quad 2! = 2, \quad 3! = 6, \quad 4! = 24, \quad 5! = 120, \quad 6! = 720, \quad 7! = 5040 ,
$$
e il fattoriale cresce molto in fretta, per esempio $10! = 3\,628\,800$. Dalla definizione segue la relazione $n! = n \cdot (n - 1)!$ per $n \geq 1$, che permette di semplificare i quozienti. Per esempio
$$
\frac{8!}{6!} = \frac{8 \cdot 7 \cdot 6!}{6!} = 8 \cdot 7 = 56 ,
\qquad
\frac{(n + 1)!}{(n - 1)!} = (n + 1) \cdot n \quad \text{per } n \geq 1 .
$$
:::

::::teorema{#numero-permutazioni titolo="Numero delle permutazioni semplici"}
Per ogni $n \geq 1$ il numero delle permutazioni semplici di $n$ oggetti distinti è
$$
P_n = n! .
$$
Per esempio $5$ libri diversi si dispongono su uno scaffale in $5! = 120$ modi, e $7$ persone si mettono in fila in $7! = 5040$ modi.

:::dimostrazione
Una permutazione è una disposizione semplice di classe $n$. Per il teorema sul numero delle disposizioni semplici con $k = n$, l'ultimo fattore è $n - n + 1 = 1$, quindi
$$
P_n = D_{n,n} = n \cdot (n - 1) \cdot \ldots \cdot 2 \cdot 1 = n! .
$$
:::
::::

::::teorema{#disposizioni-fattoriali titolo="Disposizioni semplici con i fattoriali"}
Per $1 \leq k \leq n$ vale
$$
D_{n,k} = \frac{n!}{(n - k)!} .
$$
Questa scrittura è comoda nelle equazioni con incognita $n$ e nelle dimostrazioni. Per esempio $D_{7,3} = \dfrac{7!}{4!} = 7 \cdot 6 \cdot 5 = 210$. Con $k = n$ la formula dà $D_{n,n} = \dfrac{n!}{0!}$, e questo valore è uguale a $P_n = n!$ proprio perché si è posto $0! = 1$.

:::dimostrazione
L'idea è completare il prodotto $n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)$ fino a $1$. Si moltiplica e si divide per $(n - k)! = (n - k) \cdot (n - k - 1) \cdot \ldots \cdot 1$:
$$
\begin{aligned}
D_{n,k} &= \frac{n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1) \cdot (n - k) \cdot \ldots \cdot 1}{(n - k) \cdot \ldots \cdot 1} \\[6pt]
&= \frac{n!}{(n - k)!} .
\end{aligned}
$$
Il numeratore contiene tutti i numeri naturali da $n$ a $1$, quindi è $n!$.
:::
::::

:::osservazione{#permutazioni-circolari titolo="Permutazioni circolari"}
Si dispongono $n$ persone attorno a un tavolo rotondo, e si considerano uguali due disposizioni che differiscono per una rotazione, perché ciascuno ha gli stessi vicini a destra e a sinistra. Si fissa il posto di una persona; le altre $n - 1$ si dispongono nei posti restanti in $(n - 1)!$ modi, e ogni disposizione attorno al tavolo si ottiene in questo modo una sola volta. Le **permutazioni circolari** di $n$ oggetti sono quindi
$$
(n - 1)! = \frac{n!}{n} .
$$
Per $4$ persone il numero è $3! = 6$. Le $4! = 24$ file si raggruppano a $4$ a $4$, perché le $4$ rotazioni di una disposizione danno la stessa disposizione attorno al tavolo.

::grafico{assi=0 uguale=1 legenda=0 curve="1.5*cos(t),1.5*sin(t),0,6.29;5+1.5*cos(t),1.5*sin(t),0,6.29" punti="0,1.5,pieno;-1.5,0,pieno;0,-1.5,pieno;1.5,0,pieno;5,1.5,pieno;3.5,0,pieno;5,-1.5,pieno;6.5,0,pieno" etichette="0,1.95,A;-1.95,0,B;0,-1.95,C;1.95,0,D;5,1.95,D;3.05,0,A;5,-1.95,B;6.95,0,C" xmin=-2.5 xmax=7.5 ymin=-2.5 ymax=2.5 titolo="Le due disposizioni differiscono per una rotazione: in entrambe, girando in senso antiorario, si incontrano $A$, $B$, $C$, $D$, quindi attorno al tavolo sono la stessa permutazione circolare"}

:::

## Permutazioni con elementi ripetuti

::::teorema{#permutazioni-ripetute titolo="Permutazioni con elementi ripetuti"}
Gli anagrammi di una parola con lettere ripetute sono meno di $n!$, perché scambiare fra loro due lettere uguali non produce una parola nuova. Sono dati $n$ oggetti divisi in $r$ gruppi: gli oggetti di uno stesso gruppo sono uguali fra loro, quelli di gruppi diversi sono diversi. Il primo gruppo ha $n_1$ oggetti, il secondo $n_2$, e così via, con $n_1 + n_2 + \ldots + n_r = n$. Il numero delle **permutazioni con elementi ripetuti** è
$$
P_n^{(n_1, n_2, \ldots, n_r)} = \frac{n!}{n_1! \cdot n_2! \cdot \ldots \cdot n_r!} .
$$
Per esempio la parola $ANNA$ ha $4$ lettere, con $2$ lettere $A$ e $2$ lettere $N$, quindi ha $\dfrac{4!}{2! \cdot 2!} = \dfrac{24}{4} = 6$ anagrammi:
$$
AANN, \quad ANAN, \quad ANNA, \quad NAAN, \quad NANA, \quad NNAA .
$$

:::dimostrazione
L'idea è rendere distinti gli oggetti uguali e poi contare quante volte compare ogni sequenza. Si numerano gli oggetti di ogni gruppo, per esempio $A_1$, $A_2$, $N_1$, $N_2$, così che tutti gli $n$ oggetti diventano distinti; le loro permutazioni sono $n!$. Si fissa ora una permutazione con elementi ripetuti, per esempio $ANNA$. Le permutazioni degli oggetti numerati che danno questa sequenza quando si cancellano i numeri si ottengono permutando fra loro gli $n_1$ oggetti del primo gruppo, in $n_1!$ modi, gli $n_2$ oggetti del secondo gruppo, in $n_2!$ modi, e così via. Per il principio fondamentale ogni permutazione con elementi ripetuti corrisponde quindi a $n_1! \cdot n_2! \cdot \ldots \cdot n_r!$ permutazioni degli oggetti numerati. Perciò il numero cercato $P$ soddisfa
$$
P \cdot n_1! \cdot n_2! \cdot \ldots \cdot n_r! = n! ,
$$
e dividendo si ottiene la formula.
:::
::::

:::esempio{titolo="Anagrammi di MATEMATICA"}
La parola $MATEMATICA$ ha $10$ lettere: $3$ lettere $A$, $2$ lettere $M$, $2$ lettere $T$ e le lettere $E$, $I$, $C$ una volta ciascuna. Le lettere che compaiono una sola volta danno fattori $1! = 1$ al denominatore, quindi gli anagrammi sono
$$
\frac{10!}{3! \cdot 2! \cdot 2!} = \frac{3\,628\,800}{6 \cdot 2 \cdot 2} = \frac{3\,628\,800}{24} = 151\,200 .
$$
:::

:::esempio{titolo="Percorsi su una griglia"}
In una griglia di strade si va dall'incrocio $O$ all'incrocio $P$, che si trova $4$ isolati a destra e $3$ isolati in alto, muovendosi solo verso destra ($D$) e verso l'alto ($A$). Ogni percorso di lunghezza minima è una sequenza di $7$ passi, con $4$ passi $D$ e $3$ passi $A$; per esempio il percorso della figura è $DDADAAD$. Viceversa ogni sequenza con $4$ lettere $D$ e $3$ lettere $A$ descrive un percorso da $O$ a $P$. I percorsi sono quindi le permutazioni con elementi ripetuti di queste $7$ lettere:
$$
\frac{7!}{4! \cdot 3!} = \frac{5040}{24 \cdot 6} = 35 .
$$

::grafico{assi=0 uguale=1 legenda=0 unicolore=1 linee="0,0 0,3;1,0 1,3;2,0 2,3;3,0 3,3;4,0 4,3;0,0 4,0;0,1 4,1;0,2 4,2;0,3 4,3" vettori="0,0,1,0;1,0,2,0;2,0,2,1;2,1,3,1;3,1,3,2;3,2,3,3;3,3,4,3" punti="0,0,pieno,O;4,3,pieno,P" xmin=-0.8 xmax=4.8 ymin=-0.6 ymax=3.6 titolo="Il percorso $DDADAAD$ da $O$ a $P$: ogni percorso minimo ha $4$ passi a destra e $3$ in alto, quindi i percorsi sono $\dfrac{7!}{4! \cdot 3!} = 35$"}

:::

## Combinazioni semplici

:::definizione{#combinazioni-semplici titolo="Combinazioni semplici"}
In una commissione di $3$ persone conta solo chi ne fa parte, e l'ordine in cui le persone sono state scelte non ha importanza. Sono dati $n$ oggetti distinti e un numero naturale $k$ con $1 \leq k \leq n$. Una **combinazione semplice** di $n$ oggetti di classe $k$ è un gruppo di $k$ oggetti scelti fra gli $n$, tutti diversi, senza tenere conto dell'ordine; in altre parole è un sottoinsieme di $k$ elementi dell'insieme degli $n$ oggetti. Due combinazioni sono diverse se differiscono per almeno un oggetto. Il numero delle combinazioni semplici si indica con $C_{n,k}$.

Con le lettere $A$, $B$, $C$ e $k = 2$ le combinazioni semplici sono $\{A, B\}$, $\{A, C\}$, $\{B, C\}$, quindi $C_{3,2} = 3$. Le disposizioni della stessa classe sono $D_{3,2} = 6$, il doppio, perché ogni coppia di lettere si scrive in $2$ ordini.
:::

::::teorema{#numero-combinazioni titolo="Numero delle combinazioni semplici"}
Per $1 \leq k \leq n$ vale
$$
C_{n,k} = \frac{D_{n,k}}{k!} = \frac{n \cdot (n - 1) \cdot \ldots \cdot (n - k + 1)}{k!} = \frac{n!}{k! \, (n - k)!} .
$$
Per esempio le commissioni di $3$ persone scelte fra $8$ sono
$$
C_{8,3} = \frac{8 \cdot 7 \cdot 6}{3!} = \frac{336}{6} = 56 .
$$

:::dimostrazione
L'idea è contare le disposizioni in due modi. Ogni disposizione semplice di classe $k$ si costruisce in due fasi: prima si sceglie il gruppo dei $k$ oggetti, cioè una combinazione, in $C_{n,k}$ modi; poi si mettono in ordine i $k$ oggetti scelti, in $P_k = k!$ modi, qualunque sia il gruppo. Per il principio fondamentale
$$
D_{n,k} = C_{n,k} \cdot k! ,
$$
quindi $C_{n,k} = \dfrac{D_{n,k}}{k!}$. Sostituendo $D_{n,k} = \dfrac{n!}{(n - k)!}$ si ottiene l'ultima forma della formula.
:::
::::

:::attenzione
Il modello cambia se agli oggetti scelti si assegnano ruoli diversi. Fra $8$ persone le commissioni di $3$ membri sono $C_{8,3} = 56$. Se invece si eleggono un presidente, un vicepresidente e un segretario, l'ordine conta, e le scelte sono $D_{8,3} = 8 \cdot 7 \cdot 6 = 336$, cioè $56 \cdot 3!$, perché in ogni commissione i ruoli si assegnano in $3! = 6$ modi.
:::

:::esempio{titolo="Strette di mano e diagonali"}
In un gruppo di $n$ persone ognuno stringe la mano a ciascuno degli altri una sola volta. Una stretta di mano è individuata dalla coppia di persone che la scambiano, e l'ordine delle due persone non conta, quindi le strette di mano sono
$$
C_{n,2} = \frac{n \, (n - 1)}{2} .
$$
Con $5$ persone le strette sono $\dfrac{5 \cdot 4}{2} = 10$. Se le persone sono i vertici di un pentagono, ogni stretta è un segmento che unisce due vertici, cioè un lato oppure una diagonale.

::grafico{assi=0 uguale=1 legenda=0 linee="0,2 -1.902,0.618 -1.176,-1.618 1.176,-1.618 1.902,0.618 0,2;0,2 -1.176,-1.618;0,2 1.176,-1.618;-1.902,0.618 1.176,-1.618;-1.902,0.618 1.902,0.618;-1.176,-1.618 1.902,0.618" punti="0,2,pieno;-1.902,0.618,pieno;-1.176,-1.618,pieno;1.176,-1.618,pieno;1.902,0.618,pieno" etichette="0,2.4,A;-2.3,0.7,B;-1.4,-2,C;1.4,-2,D;2.3,0.7,E" xmin=-3 xmax=3 ymin=-2.5 ymax=2.8 titolo="Le strette di mano fra $5$ persone corrispondono ai segmenti fra i $5$ vertici: $5$ lati e $5$ diagonali, in tutto $\dfrac{5 \cdot 4}{2} = 10$"}

Le diagonali di un poligono di $n$ lati sono i segmenti fra due vertici che non sono lati, quindi sono $\dfrac{n \, (n - 1)}{2} - n = \dfrac{n \, (n - 3)}{2}$. Per un decagono si ottengono $\dfrac{10 \cdot 7}{2} = 35$ diagonali.
:::

:::esempio{titolo="Commissioni formate da due gruppi"}
Una classe ha $5$ ragazzi e $4$ ragazze, e si forma una commissione con $2$ ragazzi e $2$ ragazze. I ragazzi si scelgono in $C_{5,2} = 10$ modi e le ragazze in $C_{4,2} = 6$ modi, qualunque sia la scelta dei ragazzi. Per il principio fondamentale le commissioni sono $10 \cdot 6 = 60$.
:::

:::teorema{#combinazioni-ripetizione titolo="Combinazioni con ripetizione"}
In una **combinazione con ripetizione** di $n$ oggetti di classe $k$ si scelgono $k$ oggetti fra $n$ tipi, ogni tipo si può scegliere più volte e l'ordine non conta. Il loro numero è
$$
C'_{n,k} = \binom{n + k - 1}{k} = \frac{(n + k - 1)!}{k! \, (n - 1)!} ,
$$
dove il simbolo $\dbinom{n + k - 1}{k}$ è il coefficiente binomiale, uguale a $C_{n + k - 1, k}$. Per esempio una coppetta di gelato con $4$ palline, scelte fra $3$ gusti con ripetizione ammessa, si compone in $\dbinom{6}{4} = 15$ modi. La formula si ottiene rappresentando ogni scelta con $k$ pallini e $n - 1$ sbarre che separano i tipi: la scelta di $2$ palline del primo gusto, nessuna del secondo e $2$ del terzo si scrive $\bullet\bullet\,|\,|\,\bullet\bullet$. Una scelta corrisponde quindi a un modo di collocare le $k$ posizioni dei pallini fra $n + k - 1$ posizioni.
:::

## Coefficienti binomiali e loro proprietà

:::definizione{#coefficiente-binomiale titolo="Coefficiente binomiale"}
Il numero delle combinazioni compare in molte formule, e per questo motivo ha un simbolo proprio. Per $n$ e $k$ naturali con $0 \leq k \leq n$ il **coefficiente binomiale** "$n$ su $k$" è
$$
\binom{n}{k} = \frac{n!}{k! \, (n - k)!} .
$$
Per $k \geq 1$ coincide con $C_{n,k}$, quindi conta i sottoinsiemi di $k$ elementi di un insieme di $n$ elementi. Valgono inoltre
$$
\binom{n}{0} = \binom{n}{n} = 1 ,
\qquad
\binom{n}{1} = n ,
$$
e il valore $\dbinom{n}{0} = 1$ conta l'unico sottoinsieme con $0$ elementi, l'insieme vuoto. Nel calcolo il fattore $(n - k)!$ si semplifica prima di eseguire le moltiplicazioni. Per esempio
$$
\binom{6}{2} = \frac{6 \cdot 5}{2 \cdot 1} = 15 ,
\qquad
\binom{9}{4} = \frac{9 \cdot 8 \cdot 7 \cdot 6}{4 \cdot 3 \cdot 2 \cdot 1} = 126 .
$$
:::

::::teorema{#binomiali-complementari titolo="Coefficienti binomiali complementari"}
Per $0 \leq k \leq n$ vale
$$
\binom{n}{k} = \binom{n}{n - k} .
$$
La proprietà riduce i conti quando $k$ è vicino a $n$. Per esempio
$$
\binom{20}{18} = \binom{20}{2} = \frac{20 \cdot 19}{2} = 190 .
$$

:::dimostrazione
Si applica la definizione al secondo membro. Poiché $n - (n - k) = k$, si ha
$$
\binom{n}{n - k} = \frac{n!}{(n - k)! \, \big( n - (n - k) \big)!} = \frac{n!}{(n - k)! \, k!} = \binom{n}{k} .
$$
La proprietà ha anche un significato combinatorio. Scegliere i $k$ elementi che fanno parte di un sottoinsieme equivale a scegliere gli $n - k$ elementi che ne restano fuori, quindi i sottoinsiemi di $k$ elementi sono tanti quanti i sottoinsiemi di $n - k$ elementi.
:::
::::

::::teorema{#legge-stifel titolo="Legge di Stifel"}
Per $1 \leq k \leq n - 1$ vale
$$
\binom{n}{k} = \binom{n - 1}{k - 1} + \binom{n - 1}{k} .
$$
La legge permette di calcolare i coefficienti binomiali con indice $n$ a partire da quelli con indice $n - 1$, solo con addizioni. Per esempio
$$
\binom{5}{2} = \binom{4}{1} + \binom{4}{2} = 4 + 6 = 10 .
$$

:::dimostrazione
L'idea è scrivere i due addendi del secondo membro con lo stesso denominatore. Per la definizione
$$
\binom{n - 1}{k - 1} = \frac{(n - 1)!}{(k - 1)! \, (n - k)!} ,
\qquad
\binom{n - 1}{k} = \frac{(n - 1)!}{k! \, (n - 1 - k)!} .
$$
Poiché $k! = k \cdot (k - 1)!$ e $(n - k)! = (n - k) \cdot (n - k - 1)!$, il denominatore comune è $k! \, (n - k)!$. Si moltiplicano il numeratore e il denominatore della prima frazione per $k$ e quelli della seconda per $n - k$:
$$
\begin{aligned}
\binom{n - 1}{k - 1} + \binom{n - 1}{k} &= \frac{k \cdot (n - 1)!}{k! \, (n - k)!} + \frac{(n - k) \cdot (n - 1)!}{k! \, (n - k)!} \\[6pt]
&= \frac{(k + n - k) \cdot (n - 1)!}{k! \, (n - k)!} \\[6pt]
&= \frac{n \cdot (n - 1)!}{k! \, (n - k)!} = \frac{n!}{k! \, (n - k)!} = \binom{n}{k} .
\end{aligned}
$$
:::
::::

:::osservazione{#stifel-significato titolo="Significato combinatorio della legge di Stifel"}
Si fissa uno degli $n$ elementi, per esempio $a$. I sottoinsiemi di $k$ elementi si dividono in due gruppi disgiunti: quelli che contengono $a$ e quelli che non lo contengono. Un sottoinsieme che contiene $a$ è determinato dagli altri $k - 1$ elementi, scelti fra gli $n - 1$ diversi da $a$, quindi questi sottoinsiemi sono $\dbinom{n - 1}{k - 1}$. Un sottoinsieme che non contiene $a$ ha tutti i $k$ elementi fra gli $n - 1$ diversi da $a$, quindi questi sottoinsiemi sono $\dbinom{n - 1}{k}$. Per il principio della somma si ottiene la legge di Stifel. Con $n = 5$, $k = 2$ e gli elementi $a$, $b$, $c$, $d$, $e$, le coppie che contengono $a$ sono $4$ e quelle che non lo contengono sono $\dbinom{4}{2} = 6$.
:::

## Triangolo di Tartaglia

:::definizione{#triangolo-tartaglia titolo="Triangolo di Tartaglia"}
Il **triangolo di Tartaglia** è la tabella triangolare dei coefficienti binomiali: la riga $n$, a partire da $n = 0$, contiene in ordine i numeri
$$
\binom{n}{0}, \quad \binom{n}{1}, \quad \ldots, \quad \binom{n}{n} .
$$
Ogni riga inizia e finisce con $1$, perché $\dbinom{n}{0} = \dbinom{n}{n} = 1$. Per la legge di Stifel ogni altro numero è la somma dei due numeri della riga precedente che gli stanno sopra, a sinistra e a destra. Per esempio nella riga $5$ il numero $10$ è la somma di $4$ e $6$ della riga $4$.

::grafico{assi=0 uguale=1 legenda=0 etichette="0,0,1;-0.55,-0.9,1;0.55,-0.9,1;-1.1,-1.8,1;0,-1.8,2;1.1,-1.8,1;-1.65,-2.7,1;-0.55,-2.7,3;0.55,-2.7,3;1.65,-2.7,1;-2.2,-3.6,1;-1.1,-3.6,4;0,-3.6,6;1.1,-3.6,4;2.2,-3.6,1;-2.75,-4.5,1;-1.65,-4.5,5;-0.55,-4.5,10;0.55,-4.5,10;1.65,-4.5,5;2.75,-4.5,1;-3.3,-5.4,1;-2.2,-5.4,6;-1.1,-5.4,15;0,-5.4,20;1.1,-5.4,15;2.2,-5.4,6;3.3,-5.4,1;-4.6,0,n = 0;-4.6,-0.9,n = 1;-4.6,-1.8,n = 2;-4.6,-2.7,n = 3;-4.6,-3.6,n = 4;-4.6,-4.5,n = 5;-4.6,-5.4,n = 6" segmenti="-1,-3.85,-0.65,-4.25;-0.1,-3.85,-0.45,-4.25" xmin=-5.5 xmax=4 ymin=-6 ymax=0.5 titolo="Le righe da $n = 0$ a $n = 6$ del triangolo di Tartaglia: ogni numero interno è la somma dei due numeri sopra di lui, come $4 + 6 = 10$, per la legge di Stifel"}

:::

:::esempio{titolo="Costruzione della riga 7"}
La riga $6$ è $1, \ 6, \ 15, \ 20, \ 15, \ 6, \ 1$. Sommando le coppie di numeri vicini si ottengono i numeri interni della riga $7$:
$$
1 + 6 = 7, \quad 6 + 15 = 21, \quad 15 + 20 = 35, \quad 20 + 15 = 35, \quad 15 + 6 = 21, \quad 6 + 1 = 7 .
$$
Aggiungendo $1$ all'inizio e alla fine, la riga $7$ è $1, \ 7, \ 21, \ 35, \ 35, \ 21, \ 7, \ 1$. Si può controllare un valore con la definizione: $\dbinom{7}{3} = \dfrac{7 \cdot 6 \cdot 5}{3 \cdot 2 \cdot 1} = 35$.
:::

:::osservazione{#proprieta-tartaglia titolo="Simmetria e somma delle righe"}
Ogni riga del triangolo è simmetrica rispetto al suo centro, perché $\dbinom{n}{k} = \dbinom{n}{n - k}$ per la proprietà dei coefficienti binomiali complementari. La somma dei numeri della riga $n$ è $2^n$: per esempio $1 + 4 + 6 + 4 + 1 = 16 = 2^4$ e $1 + 6 + 15 + 20 + 15 + 6 + 1 = 64 = 2^6$. Questa proprietà si dimostra con il binomio di Newton.
:::

## Binomio di Newton

::::teorema{#binomio-newton titolo="Binomio di Newton"}
I coefficienti di $(a + b)^2 = a^2 + 2ab + b^2$ e di $(a + b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$ sono le righe $2$ e $3$ del triangolo di Tartaglia. Il binomio di Newton dice che lo stesso accade per ogni esponente. Per ogni numero naturale $n$ e per ogni coppia di numeri reali $a$, $b$ vale
$$
(a + b)^n = \binom{n}{0} a^n + \binom{n}{1} a^{n - 1} b + \binom{n}{2} a^{n - 2} b^2 + \ldots + \binom{n}{n} b^n ,
$$
che con il simbolo di sommatoria $\sum$ si scrive
$$
(a + b)^n = \sum_{k = 0}^{n} \binom{n}{k} a^{n - k} b^k .
$$
Il simbolo $\sum$ indica la somma dei termini che si ottengono dando a $k$ i valori $0, 1, \ldots, n$. In ogni termine la somma degli esponenti di $a$ e di $b$ è $n$. Con la riga $4$ del triangolo si ottiene
$$
(a + b)^4 = a^4 + 4a^3 b + 6a^2 b^2 + 4ab^3 + b^4 .
$$

:::dimostrazione
L'idea è contare in quanti modi si forma ciascun termine quando si moltiplicano gli $n$ fattori. La potenza $(a + b)^n$ è il prodotto di $n$ fattori uguali a $a + b$. Per la proprietà distributiva il prodotto è la somma di tutti i termini che si ottengono scegliendo, in ogni fattore, $a$ oppure $b$, e moltiplicando le lettere scelte. Se si sceglie $b$ in $k$ fattori e $a$ nei restanti $n - k$, il termine vale $a^{n - k} b^k$. Questo termine si ottiene tante volte quanti sono i modi di scegliere i $k$ fattori da cui si prende $b$, cioè $\dbinom{n}{k}$ volte. Sommando su $k = 0, 1, \ldots, n$ si ottiene la formula. Per $n = 3$ il termine $a b^2$ si ottiene scegliendo $b$ nel primo e nel secondo fattore, nel primo e nel terzo, oppure nel secondo e nel terzo, quindi compare $\dbinom{3}{2} = 3$ volte.
:::
::::

:::esempio{titolo="Sviluppo con un termine negativo"}
Si sviluppa $(2x - 1)^4$ con $a = 2x$ e $b = -1$. I coefficienti della riga $4$ sono $1, 4, 6, 4, 1$, quindi
$$
\begin{aligned}
(2x - 1)^4 &= (2x)^4 + 4 \, (2x)^3 (-1) + 6 \, (2x)^2 (-1)^2 + 4 \, (2x) (-1)^3 + (-1)^4 \\[6pt]
&= 16x^4 - 32x^3 + 24x^2 - 8x + 1 .
\end{aligned}
$$
Poiché $b = -1$, il termine con $b^k$ ha il segno di $(-1)^k$, quindi i segni si alternano.
:::

:::attenzione
Nella potenza di $b$ e in quella di $a$ l'esponente si applica anche al segno e al coefficiente. Nello sviluppo di $(2x - 1)^4$ il secondo termine è $4 \, (2x)^3 (-1) = -32x^3$. Scrivendo $4 \cdot 2x^3$ al posto di $4 \, (2x)^3$ si otterrebbe $8x^3$, perché l'esponente $3$ si applicherebbe solo a $x$ e non al coefficiente $2$.
:::

:::teorema{#termine-generale titolo="Termine generale dello sviluppo"}
Un singolo termine dello sviluppo si trova senza scrivere gli altri. Nello sviluppo di $(a + b)^n$, ordinato secondo le potenze decrescenti di $a$, il termine di posto $k + 1$ è
$$
T_{k + 1} = \binom{n}{k} a^{n - k} b^k ,
\qquad
0 \leq k \leq n .
$$
Il valore di $k$ è l'esponente di $b$. Per esempio il coefficiente di $x^3$ nello sviluppo di $(x + 2)^5$ si ottiene quando l'esponente di $x$ è $5 - k = 3$, cioè per $k = 2$, e vale
$$
\binom{5}{2} \cdot 2^2 = 10 \cdot 4 = 40 .
$$
Il termine è quindi $40x^3$, il terzo dello sviluppo.
:::

:::esempio{titolo="Termine indipendente da x"}
Si cerca il termine che non contiene $x$ nello sviluppo di $\left( x^2 + \dfrac{2}{x} \right)^6$, per $x \neq 0$. Con $a = x^2$ e $b = \dfrac{2}{x} = 2x^{-1}$ il termine generale è
$$
T_{k + 1} = \binom{6}{k} \left( x^2 \right)^{6 - k} \left( 2x^{-1} \right)^k = \binom{6}{k} \, 2^k \, x^{12 - 2k - k} = \binom{6}{k} \, 2^k \, x^{12 - 3k} .
$$
Il termine non contiene $x$ quando l'esponente è nullo, cioè $12 - 3k = 0$, quindi $k = 4$. Il termine cercato è
$$
T_5 = \binom{6}{4} \cdot 2^4 = 15 \cdot 16 = 240 .
$$
:::

::::teorema{#somma-binomiali titolo="Somma dei coefficienti binomiali"}
Per ogni numero naturale $n$ vale
$$
\binom{n}{0} + \binom{n}{1} + \ldots + \binom{n}{n} = 2^n ,
$$
e per $n \geq 1$ vale anche
$$
\binom{n}{0} - \binom{n}{1} + \binom{n}{2} - \ldots + (-1)^n \binom{n}{n} = 0 .
$$
La prima uguaglianza dice che la somma della riga $n$ del triangolo di Tartaglia è $2^n$. Poiché $\dbinom{n}{k}$ conta i sottoinsiemi di $k$ elementi, la stessa uguaglianza conta tutti i sottoinsiemi di un insieme di $n$ elementi, in accordo con il numero dei sottoinsiemi trovato con le disposizioni con ripetizione. Per $n = 4$ si ha $1 - 4 + 6 - 4 + 1 = 0$.

:::dimostrazione
Si applica il binomio di Newton con valori particolari di $a$ e $b$. Con $a = b = 1$ ogni potenza di $a$ e di $b$ vale $1$, quindi
$$
2^n = (1 + 1)^n = \sum_{k = 0}^{n} \binom{n}{k} .
$$
Con $a = 1$ e $b = -1$ il termine di posto $k + 1$ vale $\dbinom{n}{k} (-1)^k$, quindi
$$
0 = 0^n = (1 - 1)^n = \sum_{k = 0}^{n} (-1)^k \binom{n}{k} ,
$$
dove $0^n = 0$ perché $n \geq 1$.
:::
::::

## Problemi di conteggio

:::osservazione{#scelta-modello titolo="Come si riconosce il modello"}
Il modello di conteggio dipende dalle risposte a tre domande sul problema: l'ordine degli oggetti scelti conta? Gli oggetti si possono ripetere? Si usano tutti gli oggetti disponibili?

| ordine | ripetizione | modello | numero |
| --- | --- | --- | --- |
| sì | no | disposizioni semplici | $D_{n,k} = \dfrac{n!}{(n - k)!}$ |
| sì | sì | disposizioni con ripetizione | $D'_{n,k} = n^k$ |
| sì, tutti gli oggetti | no | permutazioni | $P_n = n!$ |
| no | no | combinazioni semplici | $C_{n,k} = \dbinom{n}{k}$ |
| no | sì | combinazioni con ripetizione | $C'_{n,k} = \dbinom{n + k - 1}{k}$ |

Per esempio un podio è una scelta ordinata senza ripetizione, un codice PIN una scelta ordinata con ripetizione, una squadra di calcetto una scelta senza ordine e senza ripetizione. Un problema con vincoli si divide spesso in fasi o in casi, e in ciascuna parte si usa il modello adatto.
:::

:::esempio{titolo="Anagrammi con vincoli"}
La parola $LIBRO$ ha $5$ lettere distinte, quindi ha $5! = 120$ anagrammi. Gli anagrammi che iniziano e finiscono con una consonante si contano in tre fasi: la prima lettera si sceglie fra le consonanti $L$, $B$, $R$ in $3$ modi, l'ultima fra le $2$ consonanti rimaste, e le $3$ lettere centrali si ordinano in $3! = 6$ modi. Gli anagrammi sono quindi $3 \cdot 2 \cdot 6 = 36$.

Gli anagrammi con le vocali $I$, $O$ vicine si contano considerando la coppia di vocali come un unico blocco. Gli oggetti da ordinare sono il blocco e le $3$ consonanti, cioè $4$ oggetti, che si ordinano in $4! = 24$ modi; dentro il blocco le vocali si ordinano in $2! = 2$ modi ($IO$ oppure $OI$). Gli anagrammi sono $24 \cdot 2 = 48$, e quelli con le vocali separate sono $120 - 48 = 72$.
:::

:::esempio{titolo="Comitati con almeno un elemento di un gruppo"}
Fra $6$ ragazzi e $4$ ragazze si sceglie un comitato di $3$ persone con almeno una ragazza. Il caso opposto, nessuna ragazza, ha una descrizione più semplice, perciò si contano tutti i comitati e si tolgono quelli formati solo da ragazzi:
$$
\binom{10}{3} - \binom{6}{3} = 120 - 20 = 100 .
$$
Lo stesso numero si ottiene dividendo in casi disgiunti secondo il numero di ragazze, e sommando con il principio della somma:
$$
\binom{4}{1} \binom{6}{2} + \binom{4}{2} \binom{6}{1} + \binom{4}{3} \binom{6}{0} = 4 \cdot 15 + 6 \cdot 6 + 4 \cdot 1 = 100 .
$$
:::

:::esempio{titolo="Strette di mano: dal risultato al numero di persone"}
A una riunione ognuno ha stretto la mano a ciascuno degli altri una volta, e le strette di mano sono state $28$. Il numero $n$ delle persone soddisfa
$$
\binom{n}{2} = \frac{n \, (n - 1)}{2} = 28 ,
\qquad
\text{cioè}
\qquad
n^2 - n - 56 = 0 .
$$
Le soluzioni dell'equazione sono $n = 8$ e $n = -7$. Il numero delle persone è un numero naturale maggiore o uguale a $2$, quindi le persone sono $8$.
:::
