---
titolo: "Prodotti notevoli"
sommario: "Identità, dimostrazioni e applicazioni di quadrati e cubi per riconoscere e trasformare un'espressione."
---

## Identità e uguaglianze particolari

:::definizione{#identita titolo="Identità fra espressioni"}

Un'**espressione letterale** è una scrittura formata da numeri, lettere e operazioni, come $x(x+2)$ oppure $x^2+2x$. Ogni lettera sta al posto di un **numero reale**, cioè di un numero qualsiasi: positivo, negativo o zero, intero, frazione o con la virgola.

Un'**identità** è un'uguaglianza fra due espressioni che è vera per *ogni* valore dato alle lettere. Per esempio, $x(x+2)=x^2+2x$ è un'identità. Per $x=3$ le due espressioni valgono $3\cdot5=15$ e $9+6=15$. Per $x=-1$ valgono $(-1)\cdot1=-1$ e $1-2=-1$.

Queste prove riguardano due valori soltanto. L'uguaglianza vale per tutti i valori di $x$ per la **proprietà distributiva**: per moltiplicare un numero per una somma si moltiplica il numero per ciascun termine della somma e si sommano i risultati. In formule, $x(x+2)=x\cdot x+x\cdot2=x^2+2x$.

- Gli **addendi** sono i termini di una somma. I **fattori** sono i termini di una moltiplicazione. In $x(x+2)$ i fattori sono $x$ e $x+2$, e gli addendi di $x+2$ sono $x$ e $2$.
- Un **monomio** è un prodotto di un numero e di lettere, come $4x^2$ oppure $-12x$. Il numero è il **coefficiente** del monomio. Un monomio senza lettere, come $9$, si chiama **termine noto**.
- Un **polinomio** è una somma di monomi, come $4x^2-12x+9$. Un polinomio con due monomi è un **binomio**, con tre monomi è un **trinomio**.

In un polinomio le lettere compaiono soltanto in somme e in prodotti, quindi a ogni lettera si può dare qualunque valore reale. I **prodotti notevoli** sono identità fra polinomi che danno il risultato di alcune moltiplicazioni molto frequenti, come il quadrato di un binomio, senza rifare ogni volta il conto.

Due espressioni legate da un'identità si scrivono l'una al posto dell'altra dentro una somma, un prodotto o una formula. Poiché hanno lo stesso valore per ogni valore delle lettere, il risultato del calcolo resta lo stesso.

:::

:::attenzione{titolo="Un valore favorevole e un controesempio"}

Le espressioni $(x+2)^2$ e $x^2+4$ hanno lo stesso valore per $x=0$, perché $(0+2)^2=4$ e $0^2+4=4$. Per $x=1$ valgono invece $(1+2)^2=9$ e $1^2+4=5$.

L'uguaglianza per $x=0$ riguarda un solo valore. Un **controesempio** è un valore delle lettere per cui un'uguaglianza è falsa. Il valore $x=1$ è un controesempio, e un solo controesempio basta per concludere che $(x+2)^2=x^2+4$ non è un'identità.

La differenza fra i due valori trovati per $x=1$ è $9-5=4$, cioè $2\cdot1\cdot2$. È il valore del termine $2\cdot x\cdot2=4x$, che compare in $(x+2)^2=x^2+4x+4$ e manca in $x^2+4$. Questo termine è il doppio prodotto del quadrato di un binomio.

Nel grafico le due curve passano per il punto con $x=0$ e altezza $4$. In $x=1$ un segmento verticale lungo $4$ unisce le altezze $9$ e $5$.

::grafico{f="(x+2)^2;x^2+4" xmin=-1.5 xmax=2.5 ymin=-1 ymax=21 punti="0,4,pieno;1,9,pieno;1,5,pieno" segmenti="1,5,1,9" titolo="Le curve coincidono in $x=0$ e hanno valori diversi in $x=1$"}

:::

## Quadrato di un binomio

::::teorema{#quadrati titolo="Quadrato di una somma e di una differenza"}

Il quadrato di un numero è il numero moltiplicato per sé stesso, per esempio $13^2=13\cdot13=169$. Per tutti i numeri reali $a$ e $b$ valgono le due identità seguenti. In simboli si scrive $a,b\in\mathbb R$, dove $\mathbb R$ è l'insieme dei numeri reali e $\in$ si legge «appartiene a».

$$
\begin{aligned}
(a+b)^2&=a^2+2ab+b^2,\\[6pt]
(a-b)^2&=a^2-2ab+b^2.
\end{aligned}
$$

**Sviluppare** un prodotto o una potenza significa eseguire le moltiplicazioni fino a ottenere una somma di monomi. La somma ottenuta è lo **sviluppo**. Nello sviluppo di $(a+b)^2$ ci sono i quadrati $a^2$ e $b^2$ dei due termini e il **termine misto** $2ab$, cioè il termine che contiene sia $a$ sia $b$. Il termine misto è due volte il prodotto $ab$ e per questo si chiama **doppio prodotto**.

Nel secondo sviluppo il termine misto ha il segno meno, perché contiene il fattore $-b$ una sola volta. Il quadrato $b^2$ ha il segno più in entrambe le formule, perché $(-b)^2=(-b)\cdot(-b)=b^2$.

:::dimostrazione

Per definizione di quadrato, $(a+b)^2=(a+b)(a+b)$. Per la proprietà distributiva si moltiplica ciascun addendo del primo binomio per ciascun addendo del secondo, e si ottengono quattro prodotti.

$$
\begin{aligned}
(a+b)^2&=(a+b)(a+b)\\[6pt]
&=a^2+ab+ba+b^2\\[6pt]
&=a^2+2ab+b^2.
\end{aligned}
$$

L'ultimo passaggio usa la proprietà commutativa della moltiplicazione, $ab=ba$, quindi $ab+ba=2ab$.

Poiché anche $-b$ è un numero reale, la formula appena dimostrata si applica alla somma $a+(-b)$, che è uguale ad $a-b$.

$$
\begin{aligned}
(a-b)^2&=a^2+2\cdot a\cdot(-b)+(-b)^2\\[6pt]
&=a^2-2ab+b^2.
\end{aligned}
$$

:::

::::

:::esempio{titolo="Il quadrato suddiviso in quattro regioni"}

Quando $a$ e $b$ sono positivi (in simboli $a,b>0$), i due numeri si leggono come lunghezze. L'area di un quadrato è il lato moltiplicato per sé stesso, quindi il quadrato di lato $a+b$ ha area $(a+b)^2$.

Ogni lato del quadrato si divide in un tratto lungo $a$ e in un tratto lungo $b$. Una linea verticale e una orizzontale passanti per i punti di divisione formano quattro regioni.

- Due regioni, in angoli opposti, sono quadrati di lati $a$ e $b$. Le loro aree sono $a^2$ e $b^2$.
- Le altre due regioni sono rettangoli con lati $a$ e $b$. Ciascuno ha area $ab$, quindi insieme hanno area $2ab$.

L'area del quadrato grande è la somma delle quattro aree, cioè $a^2+2ab+b^2$. Per esempio, con $a=4$ e $b=2$ il lato è $6$ e l'area è $6^2=36=16+8+8+4$.

La figura richiede lunghezze positive. La dimostrazione con la proprietà distributiva vale anche quando $a$ oppure $b$ è zero o negativo.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;4,0 4,6;0,4 6,4" poligoni="4,0 6,0 6,4 4,4;0,4 4,4 4,6 0,6" etichette="2,2,a²;5,2,ab;2,5,ab;5,5,b²;2,-0.65,a;5,-0.65,b;-0.65,2,a;-0.65,5,b" riferimento=0 titolo="I due rettangoli hanno la stessa area"}

:::

:::esempio{titolo="Due termini con coefficienti"}

Il binomio $2x-3$ è la somma dei termini $2x$ e $-3$, ciascuno preso con il proprio segno. Nella formula $(a+b)^2=a^2+2ab+b^2$ si pone quindi $a=2x$ e $b=-3$.

- Il quadrato del primo termine è $(2x)^2=2x\cdot2x=4x^2$. Si eleva al quadrato anche il coefficiente $2$.
- Il doppio prodotto è $2\cdot2x\cdot(-3)=-12x$. È negativo perché contiene il fattore negativo $-3$ una sola volta.
- Il quadrato del secondo termine è $(-3)^2=(-3)\cdot(-3)=9$. È positivo perché contiene il fattore negativo due volte.

$$
(2x-3)^2=4x^2-12x+9.
$$

Per $x=1$ il binomio vale $2\cdot1-3=-1$ e il suo quadrato vale $(-1)^2=1$. Lo sviluppo dà lo stesso valore, $4-12+9=1$, e questo conferma i segni dei tre termini.

:::

:::attenzione{titolo="Opposto del quadrato e quadrato dell'opposto"}

L'**opposto** di un numero è il numero con il segno cambiato: l'opposto di $5$ è $-5$. Il binomio $3-x$ è l'opposto di $x-3$, perché $-(x-3)=-x+3=3-x$.

Le scritture $-(x-3)^2$ e $(3-x)^2$ indicano due calcoli diversi.

- In $-(x-3)^2$ si calcola prima il quadrato di $x-3$ e poi si cambia segno al risultato. Si ottiene l'opposto di un quadrato, che è negativo oppure zero.
- In $(3-x)^2$ si eleva al quadrato l'opposto di $x-3$. Due numeri opposti hanno lo stesso quadrato, quindi $(3-x)^2=(x-3)^2$. Il risultato è positivo oppure zero.

Un numero negativo o nullo e un numero positivo o nullo sono uguali soltanto se valgono entrambi zero. Le due scritture hanno quindi lo stesso valore solo per $x=3$, dove $x-3=0$, anche se differiscono per il segno di tutto il quadrato. Un valore che lascia il binomio diverso da zero dà invece due risultati diversi. Per $x=0$ la prima scrittura vale $-(0-3)^2=-9$ e la seconda $(3-0)^2=9$, quindi le due scritture non sono legate da un'identità.

:::

## Somma per differenza

::::teorema{#somma-differenza titolo="Differenza di quadrati"}

Per $a,b\in\mathbb R$ vale l'identità

$$
(a+b)(a-b)=a^2-b^2.
$$

I due fattori hanno lo stesso primo addendo $a$, mentre i secondi addendi $b$ e $-b$ sono opposti. Il prodotto è il quadrato del termine uguale meno il quadrato del termine che cambia segno. L'identità vale anche se i fattori sono scritti nell'ordine inverso, perché $(a-b)(a+b)=(a+b)(a-b)$.

Letta da destra a sinistra, l'identità trasforma la differenza fra due quadrati in un prodotto, cioè nella sua **forma fattorizzata**. Per esempio $x^2-9=x^2-3^2=(x+3)(x-3)$.

:::dimostrazione

Per la proprietà distributiva si moltiplica ciascun addendo di $a+b$ per ciascun addendo di $a-b$, e si ottengono quattro prodotti.

$$
\begin{aligned}
(a+b)(a-b)&=a^2-ab+ba-b^2\\[6pt]
&=a^2-b^2.
\end{aligned}
$$

Poiché $ab=ba$, i prodotti misti $-ab$ e $+ba$ sono opposti, quindi la loro somma è zero e restano $a^2$ e $-b^2$.

:::

::::

:::esempio{titolo="Dalla figura a L a un rettangolo"}

Un quadrato di lato $7$ ha area $7^2=49$. Da un suo angolo si toglie un quadrato di lato $2$, che ha area $2^2=4$. Resta una figura a forma di L, di area $49-4=45$.

La figura a L si divide in due rettangoli.

- Il primo ha lati $7$ e $7-2=5$, quindi ha area $35$.
- Il secondo ha lati $5$ e $2$, quindi ha area $10$.

Il secondo rettangolo si ruota e si accosta al primo lungo un lato di lunghezza $5$. I due pezzi formano un unico rettangolo di lati $7+2=9$ e $7-2=5$. La sua area è $9\cdot5=45$, uguale all'area della figura a L. In formule, $7^2-2^2=(7+2)(7-2)$.

Lo stesso taglio si esegue con due lunghezze qualsiasi $a$ e $b$, con $a$ maggiore di $b$ e $b$ positivo (in simboli $a>b>0$). Si ottiene $a^2-b^2=(a+b)(a-b)$.

::struttura{poligoni="0,0 7,0 7,5 0,5;0,5 5,5 5,7 0,7" tratteggi="5,5 7,5 7,7 5,7 5,5" etichette="3.5,2.5,35;2.5,6,10;3.5,-0.65,7;-0.65,2.5,5;6,6,4" riferimento=0 titolo="La zona tratteggiata di area $4$ è il quadrato tolto"}

::struttura{poligoni="0,0 7,0 7,5 0,5;7,0 9,0 9,5 7,5" etichette="3.5,2.5,35;8,2.5,10;3.5,-0.6,7;8,-0.6,2;-0.65,2.5,5" riferimento=0 titolo="I due pezzi formano un rettangolo di area $45$"}

:::

:::esempio{titolo="Termini interi in più lettere"}

Nel prodotto $(3x+2y)(3x-2y)$ il termine uguale nei due fattori è $3x$ e il termine che cambia segno è $2y$. Si pone quindi $a=3x$ e $b=2y$. Ciascun termine si eleva al quadrato per intero, coefficiente compreso: $(3x)^2=9x^2$ e $(2y)^2=4y^2$.

$$
(3x+2y)(3x-2y)=9x^2-4y^2.
$$

Un controllo si ottiene con valori di $x$ e $y$ per cui $3x=2y$, per esempio $x=2$ e $y=3$. Il secondo fattore vale $6-6=0$, quindi il prodotto vale zero. Lo sviluppo dà $9\cdot4-4\cdot9=36-36=0$. Il prodotto è zero perché un fattore è zero, e lo sviluppo è zero perché i due quadrati sono uguali.

:::

## Cubo di un binomio

::::teorema{#cubi titolo="Quattro termini nello sviluppo del cubo"}

Il cubo di un numero è il prodotto di tre fattori uguali al numero, per esempio $4^3=4\cdot4\cdot4=64$. Per $a,b\in\mathbb R$ valgono le identità seguenti.

$$
\begin{aligned}
(a+b)^3&=a^3+3a^2b+3ab^2+b^3,\\[6pt]
(a-b)^3&=a^3-3a^2b+3ab^2-b^3.
\end{aligned}
$$

La seconda formula si ottiene dalla prima scrivendo $-b$ al posto di $b$, perché $a-b=a+(-b)$. I segni dipendono da quante volte il fattore $-b$ compare in ciascun termine.

- In $3a^2b$ il fattore $b$ compare una volta, quindi il termine diventa $-3a^2b$.
- In $3ab^2$ il fattore $b$ compare due volte. Poiché $(-b)^2=b^2$, il termine resta $3ab^2$.
- In $b^3$ il fattore $b$ compare tre volte. Poiché $(-b)\cdot(-b)\cdot(-b)=-b^3$, il termine diventa $-b^3$.

Questo confronto vale qualunque sia il segno di $a$ e di $b$.

:::dimostrazione

Si scrive $(a+b)^3=(a+b)^2(a+b)$ e al posto di $(a+b)^2$ si mette il suo sviluppo. Per la proprietà distributiva si moltiplicano i tre termini dello sviluppo prima per $a$ e poi per $b$. Infine si sommano i termini con le stesse lettere e gli stessi esponenti: $2a^2b+a^2b=3a^2b$ e $ab^2+2ab^2=3ab^2$.

$$
\begin{aligned}
(a+b)^3
&=(a^2+2ab+b^2)(a+b)\\[6pt]
&=a^3+2a^2b+ab^2\\[-1pt]
&\quad{}+a^2b+2ab^2+b^3\\[6pt]
&=a^3+3a^2b+3ab^2+b^3.
\end{aligned}
$$

Scrivendo $-b$ al posto di $b$ si ottiene lo sviluppo di $(a-b)^3$.

:::

::::

:::esempio{titolo="Dalle sezioni del cubo ai volumi"}

Un cubo di lato $4$ ha volume $4^3=64$. Si scrive $4=3+1$ e si divide ogni spigolo in un tratto lungo $3$ e in un tratto lungo $1$.

Una **sezione** del cubo è la figura che si ottiene tagliandolo con un piano parallelo a una faccia, ed è un quadrato di lato $4$. La figura mostra una sezione divisa in quattro regioni di aree $9$, $3$, $3$ e $1$, come nel quadrato di un binomio con $a=3$ e $b=1$.

Il cubo è formato da due strati sovrapposti, uno di spessore $3$ e uno di spessore $1$, e ogni strato è diviso come la sezione. Il volume di ciascun pezzo è l'area della sua regione moltiplicata per lo spessore dello strato.

- Lo strato di spessore $3$ contiene pezzi di volume $9\cdot3=27$, $3\cdot3=9$, $3\cdot3=9$ e $1\cdot3=3$.
- Lo strato di spessore $1$ contiene pezzi di volume $9$, $3$, $3$ e $1$.

Riunendo i volumi uguali, gli otto pezzi danno $27+3\cdot9+3\cdot3+1=64$. Con $a=3$ e $b=1$ questi numeri sono $a^3=27$, $a^2b=9$, $ab^2=3$ e $b^3=1$.

Nel prodotto $(a+b)(a+b)(a+b)$ ogni termine si forma scegliendo $a$ oppure $b$ da ciascuno dei tre fattori. Per $a^2b$ si sceglie $b$ da un solo fattore, che si sceglie in $3$ modi. Per $ab^2$ si sceglie $b$ da due fattori, cioè si lascia fuori un solo fattore, e anche questo si sceglie in $3$ modi. Per questo i due termini centrali hanno lo stesso coefficiente $3$.

::struttura{linee="0,0 4,0 4,4 0,4 0,0;3,0 3,4;0,3 4,3" poligoni="0,0 3,0 3,3 0,3;3,3 4,3 4,4 3,4" etichette="1.5,1.5,9;3.5,1.5,3;1.5,3.5,3;3.5,3.5,1;1.5,-0.46,3;3.5,-0.46,1" riferimento=0 titolo="Aree della sezione da moltiplicare per lo spessore dello strato"}

:::

:::esempio{titolo="Perché il termine lineare del cubo può essere positivo"}

Per sviluppare $(2x-3)^3$ si usa la formula del cubo di una differenza con $a=2x$ e $b=3$.

$$
\begin{aligned}
(2x-3)^3
&=(2x)^3-3\cdot(2x)^2\cdot3+3\cdot2x\cdot3^2-3^3\\[6pt]
&=8x^3-36x^2+54x-27.
\end{aligned}
$$

Il termine $-36x^2$ contiene due fattori $2x$ e un solo fattore $-3$, quindi il suo coefficiente è negativo. Il **termine lineare** è il termine di primo grado, cioè quello in cui $x$ compare senza esponente. Qui è $54x$ e contiene un fattore $2x$ e due fattori $-3$. Il prodotto $(-3)\cdot(-3)=9$ è positivo, quindi il coefficiente $54$ è positivo.

Il coefficiente $54$ è positivo, mentre il valore di $54x$ dipende da $x$. Per $x=-1$, per esempio, il termine vale $54\cdot(-1)=-54$. Il segno del coefficiente e il segno del valore del termine sono quindi due informazioni distinte.

:::

## Quadrato di una somma di tre termini

::::teorema{#trinomio titolo="Tre quadrati e tre doppi prodotti"}

Per $a,b,c\in\mathbb R$ vale l'identità

$$
\begin{aligned}
(a+b+c)^2&=a^2+b^2+c^2\\[6pt]
&\quad{}+2ab+2ac+2bc.
\end{aligned}
$$

Lo sviluppo contiene il quadrato di ciascuno dei tre termini e il doppio prodotto di ciascuna delle tre coppie: $a$ con $b$, $a$ con $c$, $b$ con $c$. Ogni coppia dà due prodotti uguali, per esempio $ab$ e $ba$, la cui somma è $2ab$.

Se un termine è negativo, entra con il suo segno in ciascuna delle due coppie che lo contengono.

:::dimostrazione

Si considera $a+b$ come un unico termine. Il trinomio $a+b+c$ è allora la somma dei due termini $(a+b)$ e $c$, e a questa somma si applica la formula del quadrato di un binomio.

$$
\begin{aligned}
\bigl((a+b)+c\bigr)^2
&=(a+b)^2+2(a+b)c+c^2\\[6pt]
&=a^2+2ab+b^2+2ac+2bc+c^2.
\end{aligned}
$$

Nel secondo passaggio si sviluppa $(a+b)^2=a^2+2ab+b^2$ con la stessa formula. Il prodotto $2(a+b)c$ si calcola con la proprietà distributiva e dà $2ac+2bc$.

:::

::::

:::esempio{titolo="Le nove regioni e le coppie"}

Quando $a$, $b$ e $c$ sono positivi, ogni lato di un quadrato di lato $a+b+c$ si divide in tre tratti lunghi $a$, $b$ e $c$. Le linee tracciate dai punti di divisione formano una griglia di tre righe e tre colonne, cioè nove regioni.

Le tre regioni lungo la diagonale che parte dall'angolo in basso a sinistra sono quadrati di aree $a^2$, $b^2$ e $c^2$. Le altre sei sono rettangoli. Scambiando la riga con la colonna di un rettangolo si trova il rettangolo con gli stessi lati: per esempio, i rettangoli di aree $bc$ e $cb$ sono in posizioni scambiate e insieme danno il doppio prodotto $2bc$.

Con $a=3$, $b=2$ e $c=1$ il lato è $6$ e l'area è $6^2=36$. I tre quadrati hanno aree $9$, $4$ e $1$, con somma $14$. Le coppie di rettangoli hanno aree $6$ e $6$, $3$ e $3$, $2$ e $2$, con somma $22$. Si ritrova $14+22=36$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;3,0 3,6;5,0 5,6;0,3 6,3;0,5 6,5" poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5;5,5 6,5 6,6 5,6" etichette="1.5,1.5,9;4,1.5,6;5.5,1.5,3;1.5,4,6;4,4,4;5.5,4,2;1.5,5.5,3;4,5.5,2;5.5,5.5,1;1.5,-0.46,3;4,-0.46,2;5.5,-0.46,1" riferimento=0 titolo="Le aree nelle posizioni scambiate sono uguali"}

:::

:::esempio{titolo="Doppi prodotti con un termine negativo"}

In $(x-y+2)^2$ i tre termini, presi con il loro segno, sono $x$, $-y$ e $2$.

- I quadrati sono $x^2$, $(-y)^2=y^2$ e $2^2=4$.
- La coppia $x$ e $-y$ dà $2\cdot x\cdot(-y)=-2xy$.
- La coppia $x$ e $2$ dà $2\cdot x\cdot2=4x$.
- La coppia $-y$ e $2$ dà $2\cdot(-y)\cdot2=-4y$.

$$
(x-y+2)^2=x^2+y^2+4-2xy+4x-4y.
$$

Il risultato si controlla ponendo $y=x$. A sinistra si ottiene $(x-x+2)^2=2^2=4$. A destra $4x-4x=0$ e $x^2+x^2-2x^2=0$, quindi resta $4$.

:::

## Riconoscere e completare un quadrato

:::osservazione{#riconoscimento titolo="Controllo del doppio prodotto"}

Un **quadrato perfetto** è un polinomio uguale al quadrato di un altro polinomio.

Per stabilire se un trinomio è il quadrato di un binomio si eseguono due controlli.

1. Si cercano due termini i cui quadrati siano il primo e l'ultimo termine del trinomio.
2. Si calcola il doppio prodotto dei due termini trovati e si confronta con il termine centrale, segno compreso.

In $9x^2-24x+16$ il primo termine è $9x^2=(3x)^2$ e l'ultimo è $16=4^2$. Anche $(-4)^2$ vale $16$, quindi il secondo termine del binomio è $4$ oppure $-4$. Il quadrato $16$ fissa il suo **valore assoluto**, cioè il numero senza il segno. Il segno si ricava dal termine centrale. Con $3x$ come primo termine, il doppio prodotto è $2\cdot3x\cdot4=24x$ se si prende $4$ ed è $2\cdot3x\cdot(-4)=-24x$ se si prende $-4$. Il termine centrale del trinomio è $-24x$, quindi il secondo termine è $-4$ e

$$
9x^2-24x+16=(3x-4)^2.
$$

:::

::::teorema{#coefficienti titolo="Confronto dei coefficienti fino al secondo grado"}

Un polinomio di secondo grado in $x$ ha la forma $Ax^2+Bx+C$, dove i numeri reali $A$, $B$ e $C$ sono il coefficiente di $x^2$, il coefficiente di $x$ e il termine noto.

Due polinomi $Ax^2+Bx+C$ e $A'x^2+B'x+C'$ hanno lo stesso valore per ogni $x$ **se e solo se** hanno gli stessi coefficienti, cioè $A=A'$, $B=B'$ e $C=C'$. L'espressione «se e solo se» riunisce due affermazioni: se i coefficienti sono uguali, i valori sono uguali per ogni $x$; se i valori sono uguali per ogni $x$, i coefficienti sono uguali.

Di conseguenza, se due sviluppi hanno uguali il termine in $x^2$ e il termine noto, per stabilire che sono legati da un'identità basta controllare il coefficiente centrale.

:::dimostrazione

Si sottrae il secondo polinomio dal primo. La differenza è il polinomio $ux^2+vx+w$, dove $u=A-A'$, $v=B-B'$ e $w=C-C'$.

Si suppone che i due polinomi abbiano lo stesso valore per ogni $x$. Allora la differenza vale zero per ogni $x$, in particolare per $x=0$, $x=1$ e $x=-1$.

- Per $x=0$ la differenza vale $w$, quindi $w=0$.
- Per $x=1$ la differenza vale $u+v+w$. Poiché $w=0$, si ha $u+v=0$.
- Per $x=-1$ la differenza vale $u-v+w$. Poiché $w=0$, si ha $u-v=0$.

Sommando le uguaglianze $u+v=0$ e $u-v=0$ si ottiene $2u=0$, quindi $u=0$. Da $u+v=0$ segue allora $v=0$. I tre numeri $u$, $v$ e $w$ sono zero, perciò $A=A'$, $B=B'$ e $C=C'$.

Viceversa, se i coefficienti corrispondenti sono uguali, la differenza è zero per ogni $x$.

:::

::::

:::esempio{titolo="Il termine mancante e il suo segno"}

Si cerca il numero $c$ per cui $4x^2-12x+c$ è il quadrato di un binomio. Il primo termine è $4x^2=(2x)^2$, quindi il binomio ha la forma $2x+b$, con $b$ da determinare. Il suo sviluppo è

$$
(2x+b)^2=4x^2+4bx+b^2.
$$

Il coefficiente di $x$ nello sviluppo è $4b$ e nel trinomio è $-12$. Dall'uguaglianza $4b=-12$ si ricava $b=-3$. Il termine noto è allora $c=b^2=(-3)^2=9$, e $4x^2-12x+9=(2x-3)^2$.

Il trinomio $4x^2-6x+9$ ha lo stesso primo termine e lo stesso termine noto di $(2x-3)^2$, mentre il coefficiente centrale è $-6$ al posto di $-12$. Per il confronto dei coefficienti i due polinomi sono diversi. Per $x=1$ valgono infatti $4-6+9=7$ e $(2-3)^2=1$.

Nel grafico le due curve hanno in comune il punto con $x=0$ e altezza $9$, il termine noto, e in $x=1$ sono alle altezze $1$ e $7$.

::grafico{f="(2*x-3)^2;4*x^2-6*x+9" xmin=-0.5 xmax=2.7 ymin=-1 ymax=23 punti="1,1,pieno;1,7,pieno;0,9,pieno" segmenti="1,1,1,7" titolo="Il valore in $x=0$ coincide e quello in $x=1$ distingue le espressioni"}

:::

:::esempio{titolo="Due possibili segni per il coefficiente"}

Si cercano i valori di $p$ per cui $16x^2+px+25$ è il quadrato di un binomio. Il primo termine è $16x^2=(4x)^2$, quindi come primo termine del binomio si prende $4x$. Il secondo termine ha quadrato $25$, quindi vale $5$ oppure $-5$.

- Con $5$ il doppio prodotto è $2\cdot4x\cdot5=40x$, quindi $p=40$ e il trinomio è $(4x+5)^2$.
- Con $-5$ il doppio prodotto è $2\cdot4x\cdot(-5)=-40x$, quindi $p=-40$ e il trinomio è $(4x-5)^2$.

Se il problema chiede soltanto un quadrato perfetto, entrambi i valori sono soluzioni.

Un'espressione **si annulla** per un valore di $x$ quando per quel valore vale zero. Se il problema chiede anche che il quadrato si annulli per un valore positivo di $x$, resta solo $p=-40$. Il binomio $4x-5$ si annulla quando $4x=5$, cioè per $x=\dfrac54$, che è positivo. Il binomio $4x+5$ si annulla quando $4x=-5$, cioè per $x=-\dfrac54$, che è negativo.

Quando il termine noto del trinomio è zero la scelta è una sola. Il secondo termine del binomio ha quadrato zero, quindi è zero, e anche il doppio prodotto è zero. Per esempio, $16x^2+px$ è un quadrato solo per $p=0$.

:::

## Differenze di aree e prodotti numerici

:::esempio{#applicazioni titolo="Interpretare il doppio prodotto"}

Un quadrato ha lato $x$, con $x$ positivo (in simboli $x>0$), e area $x^2$. Se il lato aumenta di $3$, il nuovo quadrato ha lato $x+3$ e area $(x+3)^2$. Nella figura il nuovo quadrato è formato dal quadrato iniziale e da tre regioni aggiunte:

- due strisce rettangolari di lati $3$ e $x$, ciascuna di area $3x$;
- un quadrato d'angolo di lato $3$, di area $9$.

L'aumento di area è la somma delle tre regioni, cioè $3x+3x+9=6x+9$. Il termine $6x$ è il doppio prodotto $2\cdot x\cdot3$.

::struttura{linee="0,0 5,0 5,5 0,5 0,0" poligoni="5,0 8,0 8,5 5,5;0,5 5,5 5,8 0,8;5,5 8,5 8,8 5,8" etichette="2.5,-0.55,x;6.5,-0.55,3;-0.65,2.5,x;-0.65,6.5,3;6.5,2.5,3x;2.5,6.5,3x;6.5,6.5,9" riferimento=0 titolo="Le tre regioni sommano l’aumento di area $6x+9$"}

Nel calcolo $(x+3)^2-x^2=x^2+6x+9-x^2$ i termini $x^2$ e $-x^2$ hanno somma zero, quindi resta un'espressione di primo grado, cioè senza $x^2$.

Dall'aumento di area si ricava il lato iniziale. Con un aumento di $51$ il lato $x$ soddisfa l'uguaglianza $6x+9=51$. Sottraendo $9$ si ottiene $6x=42$ e dividendo per $6$ si ottiene $x=7$. Nella seconda riga della formula la freccia $\Longrightarrow$ si legge «allora».

$$
\begin{aligned}
(x+3)^2-x^2&=6x+9,\\[6pt]
6x+9=51&\ \Longrightarrow\ x=7.
\end{aligned}
$$

Per $x=7$ la nuova area è $10^2=100$ e la vecchia area è $7^2=49$. La differenza è $100-49=51$, uguale all'aumento assegnato.

:::

:::esempio{titolo="Calcolare con un centro comune"}

La **media** di due numeri è la loro somma divisa per $2$. Per i fattori del prodotto $103\cdot97$ la media è $\dfrac{103+97}{2}=100$. Ciascun fattore dista $3$ dalla media, perché $103=100+3$ e $97=100-3$. Il prodotto si calcola allora con la formula della somma per differenza.

$$
103\cdot97=(100+3)(100-3)=100^2-3^2=10000-9=9991.
$$

Anche i fattori di $105\cdot95$ hanno media $100$, con distanza $5$. Il prodotto vale $100^2-5^2=10000-25=9975$.

Con la stessa media, a una distanza maggiore corrisponde un quadrato maggiore da sottrarre, quindi un prodotto minore. I due prodotti si ordinano perciò senza calcolarli: $105\cdot95$ è minore di $103\cdot97$ perché $5$ è maggiore di $3$.

Il grafico mostra lo stesso fatto con media $10$. I fattori sono $10+d$ e $10-d$, dove $d$ è la distanza dalla media, e il prodotto è $P=100-d^2$. Per $d=3$ si ha $13\cdot7=91$. Per $d=5$ si ha $15\cdot5=75$. La curva scende quando $d$ cresce a partire da zero (in simboli $d\geq0$, che si legge «$d$ maggiore o uguale a zero»).

::grafico{f="100-x^2" xmin=-0.5 xmax=6.4 ymin=60 ymax=104 punti="3,91,pieno;5,75,pieno" nomi="d,P" legenda="P=100-d^2" titolo="Per i fattori $10+d$ e $10-d$ il prodotto cala al crescere di $d\geq0$"}

:::

:::attenzione{titolo="Fattori a distanze diverse"}

La formula $(a+b)(a-b)=a^2-b^2$ richiede che i due fattori abbiano la stessa distanza $b$ dal numero $a$. In $201\cdot198$ i fattori distano $1$ e $2$ da $200$, perché $201=200+1$ e $198=200-2$. Le distanze sono diverse, quindi il prodotto $(200+1)(200-2)$ si calcola con la proprietà distributiva.

I quattro prodotti sono $200\cdot200=40000$, $200\cdot(-2)=-400$, $1\cdot200=200$ e $1\cdot(-2)=-2$. I due prodotti misti $-400$ e $200$ hanno somma $-200$, diversa da zero. Il risultato è quindi $40000-200-2=39798$. I prodotti misti hanno somma zero soltanto quando le due distanze sono uguali.

:::

:::esempio{titolo="Area a perimetro fissato"}

Il **perimetro** di un rettangolo è la somma delle lunghezze dei quattro lati, cioè due volte la somma di due lati consecutivi. Un rettangolo di perimetro $80\,\mathrm{cm}$ ha quindi due lati consecutivi di somma $\dfrac{80}{2}=40\,\mathrm{cm}$. La media dei due lati è $20\,\mathrm{cm}$.

Si indica con $d$ la distanza di ciascun lato dalla media. I lati misurano $20+d$ e $20-d$ centimetri. Entrambe le lunghezze sono positive quando $d$ è compreso fra $0$ e $20$, con $20$ escluso (in simboli $0\le d<20$). L'area del rettangolo è il prodotto dei lati.

$$
(20+d)(20-d)=20^2-d^2=400-d^2.
$$

L'area, in $\mathrm{cm^2}$, è $400$ meno il quadrato $d^2$, che è positivo oppure zero. L'area massima è quindi $400\,\mathrm{cm^2}$ e si ottiene per $d=0$, cioè quando entrambi i lati misurano $20\,\mathrm{cm}$. Ogni altro rettangolo con lo stesso perimetro ha un'area minore, e la differenza da $400\,\mathrm{cm^2}$ è esattamente $d^2$.

Il calcolo si esegue anche al contrario, dall'area ai lati. Se l'area è $384\,\mathrm{cm^2}$, da $400-d^2=384$ si ricava $d^2=400-384=16$. Poiché $d$ è positivo o nullo, $d=4$. I lati misurano $20-4=16\,\mathrm{cm}$ e $20+4=24\,\mathrm{cm}$. La loro somma è $40\,\mathrm{cm}$ e il loro prodotto è $16\cdot24=384\,\mathrm{cm^2}$.

Un'area maggiore di $400\,\mathrm{cm^2}$ richiederebbe un valore negativo di $d^2$, mentre il quadrato di un numero reale è positivo oppure zero.

:::

## Sommare e sottrarre due quadrati collegati

:::osservazione{#confronto-quadrati titolo="Termini che si cancellano"}

I quadrati dei binomi $x+b$ e $x-b$ sono $x^2+2bx+b^2$ e $x^2-2bx+b^2$. I termini $x^2$ e $b^2$ sono uguali nei due sviluppi, mentre i termini misti $2bx$ e $-2bx$ sono opposti. Nella differenza i termini uguali si cancellano e resta $2bx-(-2bx)=4bx$. Nella somma si cancellano i termini misti e resta $2x^2+2b^2$.

$$
\begin{aligned}
(x+b)^2-(x-b)^2&=4bx,\\[6pt]
(x+b)^2+(x-b)^2&=2x^2+2b^2.
\end{aligned}
$$

La prima formula si ottiene anche con una sola identità, la differenza di quadrati, come prodotto della somma dei due binomi per la loro differenza. La somma è $(x+b)+(x-b)=2x$ e la differenza è $(x+b)-(x-b)=2b$, quindi il prodotto è $2x\cdot2b=4bx$.

Due quantità sono **proporzionali** quando una è uguale all'altra moltiplicata per un numero fisso. Con $b$ fissato, la differenza $4bx$ è $x$ moltiplicato per $4b$, quindi è proporzionale a $x$. Per $b=3$ la differenza è $12x$, che vale $12$ per $x=1$ e $24$, il doppio, per $x=2$.

Per $b=3$ la somma è $2x^2+18$. Il suo valore resta lo stesso quando al posto di $x$ si scrive l'opposto $-x$, perché $(-x)^2=x^2$. Per $x=2$ e per $x=-2$ la somma vale $2\cdot4+18=26$.

Nel grafico la curva è la somma, con i due punti di altezza $26$ e il punto di altezza $18$ in $x=0$. La retta è la differenza $12x$, che in $x=2$ vale $24$.

::grafico{f="2*x^2+18;12*x" xmin=-3.5 xmax=3.5 ymin=-26 ymax=48 punti="-2,26,pieno;2,26,pieno;2,24,pieno;0,18,pieno" titolo="La somma per $b=3$ è uguale agli opposti valori di $x$"}

:::

:::esempio{titolo="Recuperare i quadrati da somma e differenza"}

Sono dati i valori della somma e della differenza dei due quadrati: $(x+b)^2+(x-b)^2=50$ e $(x+b)^2-(x-b)^2=30$. Si cercano i valori dei due quadrati.

- Sommando le due uguaglianze, $(x-b)^2$ e $-(x-b)^2$ hanno somma zero. Si ottiene due volte il primo quadrato: $2(x+b)^2=50+30=80$, quindi $(x+b)^2=40$.
- Sottraendo la seconda uguaglianza dalla prima si ottiene due volte il secondo quadrato: $2(x-b)^2=50-30=20$, quindi $(x-b)^2=10$.

I due quadrati valgono $40$ e $10$.

Il calcolo dà i valori dei quadrati e lascia indeterminato il segno dei binomi. Due numeri opposti hanno lo stesso quadrato, quindi $x+b$ è uno dei due numeri opposti che hanno quadrato $40$, e lo stesso vale per $x-b$ con il quadrato $10$.

:::
