---
titolo: "Scomposizione dei polinomi"
sommario: "Raccoglimenti, prodotti notevoli letti in senso inverso, trinomi, zeri e verifica delle scomposizioni."
---

## Raccoglimento totale

::::teorema{#comune titolo="Raccogliere il fattore comune"}
Un **monomio** è un prodotto di numeri e lettere, come $6x^2$. Il numero $6$ è il suo **coefficiente** e $2$ è l'esponente della lettera $x$. Un **polinomio** è una somma di monomi, che si chiamano **addendi** o **termini** del polinomio. **Scomporre** un polinomio significa scriverlo come prodotto. Le espressioni che si moltiplicano sono i **fattori**.

Con i numeri, $5\cdot2+5\cdot7=45$ e anche $5\cdot(2+7)=5\cdot9=45$. Il numero $5$ moltiplica entrambi gli addendi, quindi si scrive una sola volta davanti alla somma. Questa regola è la **proprietà distributiva** e vale anche per i polinomi. Se ogni addendo di un polinomio $P$ è il prodotto di uno stesso polinomio $M$ per un altro polinomio, allora $M$ è un **fattore comune** e si raccoglie davanti alla somma. Con tre addendi $MA$, $MB$ e $MC$ si ottiene

$$
P=MA+MB+MC=M(A+B+C).
$$

La scrittura è la stessa con due addendi o con più di tre. Questa uguaglianza è un'**identità**, cioè è vera per qualunque valore dato alle lettere. Il raccoglimento si dice *totale* perché il fattore è comune a tutti gli addendi.

In un polinomio diverso da zero con coefficienti interi, il fattore comune più grande è un monomio che si costruisce in due passi.

- Come numero si prende il **massimo comune divisore (MCD)** dei coefficienti, cioè il più grande intero che li divide tutti. I coefficienti si considerano in **valore assoluto**, cioè senza il segno: il valore assoluto di $-8$ è $8$.
- Per ogni lettera si prende l'esponente più piccolo fra quelli con cui la lettera compare negli addendi. Una lettera che manca in un addendo conta con esponente zero, perché $x^0=1$, e quindi resta fuori dal fattore comune.

:::dimostrazione
Per la proprietà distributiva, moltiplicando $M$ per ogni addendo di $A+B+C$ si ottengono $MA$, $MB$ e $MC$, cioè gli addendi di $P$ nello stesso ordine.

Un monomio *divide* un altro monomio quando il quoziente, cioè il risultato della divisione, è ancora un monomio con coefficiente intero. Per esempio $3x$ divide $6x^2$, perché $6x^2=3x\cdot2x$. Un monomio divide tutti gli addendi quando il suo coefficiente divide tutti i coefficienti e l'esponente di ogni sua lettera è minore o uguale a quello che la lettera ha in ciascun addendo. Il MCD dei coefficienti e gli esponenti più piccoli soddisfano entrambe le condizioni.

Ogni altro monomio che divide tutti gli addendi ha per coefficiente un divisore comune dei coefficienti, che quindi divide il loro MCD, e ha esponenti minori o uguali a quelli più piccoli. Perciò divide il monomio costruito con i due passi.
:::
::::

:::esempio{titolo="Un'altezza comune a due rettangoli"}
Nell'espressione $6x^2+9x$ il MCD dei coefficienti $6$ e $9$ è $3$ e l'esponente più piccolo di $x$ è $1$. Il fattore comune è quindi $3x$. Dal primo termine resta $2x$, perché $3x\cdot2x=6x^2$, e dal secondo resta $3$, perché $3x\cdot3=9x$. Quindi

$$
6x^2+9x=3x\cdot 2x+3x\cdot 3=3x(2x+3).
$$

Se $x>0$, i due addendi sono le aree di due rettangoli alti $3x$, con basi $2x$ e $3$. Affiancandoli si ottiene un rettangolo con la stessa altezza e con base $2x+3$. Nel disegno si è scelto $x=2$, così i due pezzi hanno basi $4$ e $3$ e altezza $6$.

::struttura{linee="0,0 4,0 4,6 0,6 0,0" poligoni="4,0 7,0 7,6 4,6" riferimento=0 etichette="2,-0.55,2x;5.5,-0.55,3;-0.65,3,3x" titolo="Due rettangoli con la stessa altezza"}
:::

:::attenzione
In un'uguaglianza il **primo membro** è l'espressione a sinistra del segno di uguale e il **secondo membro** è quella a destra. L'identità $-4x^2-8x=-4x(x+2)$ si ottiene riconoscendo i prodotti $-4x^2=-4x\cdot x$ e $-8x=-4x\cdot2$. Compaiono solo moltiplicazioni, quindi l'identità vale per tutti i valori di $x$. Per $x=0$ entrambi i membri valgono $0$.

La frazione $\dfrac{-4x^2-8x}{-4x}$ richiede invece $x\ne0$, perché per $x=0$ il denominatore vale zero e la divisione per zero non è definita.

Un **binomio** è un polinomio con due termini. Raccogliendo $-4x$, con il segno meno, il binomio rimasto $x+2$ ha i coefficienti positivi. Raccogliendo $4x$ si ottiene $4x(-x-2)$, che è lo stesso polinomio.
:::

:::esempio{titolo="Una lettera presente in un solo addendo"}
In $12x^3y+18x^2+6x^2z$ il MCD dei coefficienti $12$, $18$ e $6$ è $6$. La lettera $x$ compare con gli esponenti $3$, $2$ e $2$, quindi la sua potenza più piccola è $x^2$. La $y$ compare soltanto nel primo addendo e la $z$ soltanto nel terzo, quindi nessuna delle due entra nel fattore comune. Il fattore comune è $6x^2$ e le parti che restano sono

$$
\frac{12x^3y}{6x^2}=2xy,\qquad \frac{18x^2}{6x^2}=3,\qquad \frac{6x^2z}{6x^2}=z.
$$

Si ottiene

$$
12x^3y+18x^2+6x^2z=6x^2(2xy+3+z).
$$

Il termine $3$ del fattore rimasto è un **termine costante**, cioè senza lettere. Esso viene dall'addendo $18x^2$, che contiene $x$ esattamente al quadrato. Se si raccogliesse $x^3$, da $18x^2$ resterebbe $\dfrac{18x^2}{x^3}=\dfrac{18}{x}$, che ha la lettera $x$ al denominatore e perciò non è un polinomio. Con il fattore $6x^2$ ogni parte che resta è un monomio.
:::

## Raccoglimento parziale

::::teorema{#parziale titolo="Lo stesso fattore in gruppi diversi"}
Nel **raccoglimento parziale** gli addendi di un polinomio si dividono in gruppi e in ogni gruppo si raccoglie un fattore comune ai soli addendi di quel gruppo. Se dopo questo passaggio i gruppi si scrivono come $UQ$ e $VQ$, cioè contengono lo stesso fattore $Q$, la loro somma è

$$
UQ+VQ=Q(U+V).
$$

Il fattore $Q$ è un polinomio qualunque, anche con più termini, come $y+3$.

:::dimostrazione
Per la **proprietà commutativa** del prodotto, cambiando l'ordine dei fattori il risultato resta lo stesso. Quindi $UQ=QU$ e $VQ=QV$. Per la proprietà distributiva il fattore $Q$ si raccoglie davanti alla somma.

$$
UQ+VQ=QU+QV=Q(U+V).
$$

In questi passaggi compaiono solo moltiplicazioni e nessuna divisione per $Q$. Perciò l'uguaglianza vale anche per i valori delle lettere che rendono $Q$ uguale a zero.
:::
::::

:::esempio{titolo="Quattro prodotti in una tavola"}
In $xy+3x+2y+6$ nessun fattore è comune a tutti e quattro i termini. Nel gruppo dei due termini che contengono $x$ si raccoglie $x$ e si ottiene $xy+3x=x(y+3)$. Nel gruppo dei due termini rimanenti si raccoglie $2$ e si ottiene $2y+6=2(y+3)$. I due gruppi contengono lo stesso binomio $y+3$, che si raccoglie a sua volta.

$$
\begin{aligned}
xy+3x+2y+6
&=x(y+3)+2(y+3)\\[6pt]
&=(x+2)(y+3).
\end{aligned}
$$

Il disegno mostra, per $x=4$ e $y=5$, un rettangolo diviso in quattro pezzi. La base è divisa in due tratti lunghi $y$ e $3$, l'altezza in due tratti lunghi $x$ e $2$. I quattro pezzi hanno aree $xy$, $3x$, $2y$ e $6$, cioè i quattro termini del polinomio.

I due pezzi della stessa riga hanno la stessa altezza, e i due pezzi della stessa colonna hanno la stessa base. I gruppi del calcolo sono le due righe. Raggruppando per colonna si ha $xy+2y=y(x+2)$ e $3x+6=3(x+2)$, quindi si arriva allo stesso prodotto con i fattori in ordine invertito, $(y+3)(x+2)$.

::struttura{linee="0,0 5,0 5,4 0,4 0,0;0,4 5,4 5,6 0,6 0,4" poligoni="5,0 8,0 8,4 5,4;5,4 8,4 8,6 5,6" riferimento=0 etichette="2.5,-0.55,y;6.5,-0.55,3;-0.65,2,x;-0.65,5,2" titolo="Il prodotto delle dimensioni è la somma delle quattro aree"}
:::

:::esempio{titolo="Binomi opposti"}
Due polinomi sono **opposti** quando hanno gli stessi termini con tutti i segni cambiati. In $3x(x-2)+4(2-x)$ i binomi $x-2$ e $2-x$ sono opposti, cioè $2-x=-(x-2)$. Il secondo gruppo si riscrive quindi come $4(2-x)=-4(x-2)$. Ora il primo gruppo contiene $3x$ volte $x-2$ e il secondo contiene $-4$ volte lo stesso fattore.

$$
\begin{aligned}
3x(x-2)+4(2-x)&=3x(x-2)-4(x-2)\\[6pt]
&=(x-2)(3x-4).
\end{aligned}
$$

Quando la prima scelta dei gruppi lascia fattori diversi, si cambia l'ordine degli addendi. In $xy+3x+2y+6$ i gruppi $xy+6$ e $3x+2y$ non hanno alcun fattore da raccogliere, mentre i gruppi $xy+3x$ e $2y+6$ danno entrambi il binomio $y+3$.
:::

## Differenze di quadrati e trinomi quadrati

::::teorema{#quadrati titolo="Prodotti notevoli in senso inverso"}
Un **prodotto notevole** è un prodotto fra polinomi il cui risultato ha una forma fissa. Con i numeri, $7^2-3^2=49-9=40$ e anche $(7-3)(7+3)=4\cdot10=40$.

Per ogni coppia di polinomi $A$ e $B$ (in particolare numeri o monomi) valgono le identità

$$
\begin{aligned}
A^2-B^2&=(A-B)(A+B),\\[4pt]
A^2+2AB+B^2&=(A+B)^2,\\[4pt]
A^2-2AB+B^2&=(A-B)^2.
\end{aligned}
$$

Lette da sinistra a destra, queste identità scompongono il primo membro. Le espressioni $A$ e $B$ elevate al quadrato sono le **basi** dei quadrati.

- Nella prima identità il polinomio è una **differenza di quadrati**. Le basi determinano i due fattori $A-B$ e $A+B$, detti **coniugati** perché differiscono solo per il segno fra i due termini.
- Nelle altre due identità il polinomio è un **trinomio**, cioè ha tre termini. Due termini sono i quadrati $A^2$ e $B^2$. Il trinomio è il quadrato di un binomio quando il termine centrale è il **doppio prodotto** delle basi: con $2AB$ è il quadrato di $A+B$, con $-2AB$ è il quadrato di $A-B$.

In $x^2+6x+9$ le basi sono $x$ e $3$ e il doppio prodotto è $2\cdot x\cdot3=6x$, quindi $x^2+6x+9=(x+3)^2$. Allo stesso modo $x^2-6x+9=(x-3)^2$.

:::dimostrazione
Ogni prodotto si sviluppa moltiplicando ciascun termine del primo fattore per ciascun termine del secondo. I **prodotti misti** sono quelli fra $A$ e $B$. Nella prima identità i prodotti misti sono $AB$ e $-AB$, quindi la loro somma è zero.

$$
(A-B)(A+B)=A^2+AB-AB-B^2=A^2-B^2.
$$

Sviluppando $(A+B)(A+B)$ si ottengono i quadrati $A^2$ e $B^2$ e due prodotti misti uguali ad $AB$.

$$
(A+B)(A+B)=A^2+AB+AB+B^2=A^2+2AB+B^2.
$$

Nel prodotto $(A-B)(A-B)$ i due prodotti misti sono entrambi $-AB$, mentre $(-B)(-B)=B^2$.

$$
(A-B)(A-B)=A^2-AB-AB+B^2=A^2-2AB+B^2.
$$
:::
::::

:::esempio{titolo="La differenza di due aree"}
Per $A\ge B\ge0$, il numero $A^2-B^2$ è l'area che rimane togliendo un quadrato di lato $B$ da un quadrato di lato $A$. Nel disegno $A=6$ e $B=2$, e il quadrato piccolo è tolto dall'angolo in alto a destra. L'area rimasta è $36-4=32$.

La regione rimasta si divide in due rettangoli. Quello inferiore ha base $6$ e altezza $4$, quello superiore ha base $4$ e altezza $2$. Ruotando il pezzo superiore di un quarto di giro, la sua altezza diventa $4$ e la sua base diventa $2$. Affiancando i due pezzi, che ora hanno la stessa altezza, si ottiene un rettangolo alto $6-2=4$ e largo $6+2=8$. La sua area è $4\cdot8=32$, cioè $(A-B)(A+B)$.

::struttura{linee="0,0 6,0 6,6 0,6 0,0;6,4 4,4 4,6" poligoni="0,0 6,0 6,4 0,4;0,4 4,4 4,6 0,6" riferimento=0 etichette="3,-0.56,6;-0.65,2,4;5,5,2" titolo="Il quadrato piccolo occupa l'angolo superiore destro"}

La stessa relazione si applica al calcolo con le lettere. In $9x^2-16y^2$ il primo termine è il quadrato di $3x$, perché $(3x)^2=9x^2$, e il secondo è il quadrato di $4y$, perché $(4y)^2=16y^2$. Le basi sono $3x$ e $4y$, perciò

$$
9x^2-16y^2=(3x-4y)(3x+4y).
$$
:::

:::attenzione
Un trinomio con due termini quadrati è il quadrato di un binomio soltanto se anche il termine centrale è quello richiesto. In $x^2-4x+9$ le basi sono $x$ e $3$, perché $9=3^2$. Il doppio prodotto delle basi è $2\cdot x\cdot3=6x$, quindi $(x-3)^2=x^2-6x+9$, con termine centrale $-6x$. Il trinomio dato ha invece $-4x$, perciò è diverso da $(x-3)^2$.

Per $x=3$ il trinomio vale $9-12+9=6$, mentre il quadrato vale $(3-3)^2=0$. Nel grafico le curve delle due espressioni sono distinte, e sopra $x=3$ sono segnati i punti di altezza $0$ e $6$.

::grafico{f="(x-3)^2;x^2-4*x+9" xmin=0 xmax=5 ymin=-1 ymax=11 punti="3,0,pieno;3,6,pieno" titolo="Il termine centrale diverso cambia il valore in x = 3"}
:::

## Trinomi con coefficiente principale uno

::::teorema{#trinomio titolo="Somma e prodotto nei fattori lineari"}
In $x^2+5x+6$ il **grado** di un termine è l'esponente di $x$. Il **coefficiente principale** è il coefficiente del termine di grado più alto, qui $1$. Il termine di primo grado $5x$ si dice anche **lineare**. Il numero $6$, senza la $x$, è il **termine noto**. Un **fattore lineare** è un binomio di primo grado, come $x+2$. Un polinomio con coefficiente principale $1$ si dice **monico**.

Moltiplicando due fattori lineari monici si ottiene

$$
(x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6.
$$

Il coefficiente $5$ è la somma $2+3$ e il termine noto $6$ è il prodotto $2\cdot3$.

Siano $b$, $c$, $r$, $s$ **numeri reali**, cioè interi, frazioni o numeri come $\sqrt2$. Il trinomio $x^2+bx+c$ è uguale a $(x+r)(x+s)$ esattamente quando

$$
\begin{cases}
r+s=b\\
rs=c
\end{cases}
$$

Per scomporre il trinomio si cercano quindi due numeri con somma $b$ e prodotto $c$. Quando si cercano fattori con coefficienti interi e $c\ne0$, i due numeri sono divisori interi di $c$, positivi o negativi. Si esaminano allora le coppie di divisori con prodotto $c$ e si calcola la somma di ciascuna.

:::dimostrazione
Sviluppando i due binomi si trova

$$
(x+r)(x+s)=x^2+sx+rx+rs=x^2+(r+s)x+rs.
$$

Il coefficiente di $x$ viene dai due prodotti misti $sx$ e $rx$. Il termine noto è il solo prodotto $rs$. Due polinomi sono uguali per ogni valore di $x$ soltanto se hanno gli stessi coefficienti. Se $x^2+bx+c$ è uguale a $(x+r)(x+s)$, allora $b=r+s$ e $c=rs$. Viceversa, se $r+s=b$ e $rs=c$, lo sviluppo scritto sopra è proprio $x^2+bx+c$.
:::
::::

:::osservazione
I segni di $b$ e di $c$ indicano i segni dei due numeri cercati.

- Se $c>0$, i due numeri hanno lo stesso segno, perché il loro prodotto è positivo. Per $b>0$ sono entrambi positivi: in $x^2+5x+6$ sono $2$ e $3$. Per $b<0$ sono entrambi negativi: in $x^2-12x+11$ sono $-1$ e $-11$.
- Se $c<0$, i due numeri hanno segni opposti. La somma $b$ ha allora il segno del numero con valore assoluto maggiore: in $x^2-5x-14$ i numeri sono $2$ e $-7$, e la somma $-5$ è negativa come $-7$.
- Se $c=0$, uno dei due numeri è zero e l'altro è $b$. Il trinomio si riduce a $x^2+bx$ e il raccoglimento totale dà $x(x+b)$. Per esempio $x^2+5x=x(x+5)$.
:::

:::esempio{titolo="Coppie di divisori e scelta del segno"}
In $x^2-5x-14$ si cercano due interi con prodotto $-14$ e somma $-5$. Il prodotto è negativo, quindi i due numeri hanno segni opposti. La somma è negativa, quindi il numero con valore assoluto maggiore è quello negativo. I divisori positivi di $14$ sono $1$, $2$, $7$ e $14$, e le coppie da esaminare sono due.

| Coppia | Somma | Prodotto |
|---|---:|---:|
| $1,-14$ | $-13$ | $-14$ |
| $2,-7$ | $-5$ | $-14$ |

La coppia con somma $-5$ è $2,-7$, quindi

$$
x^2-5x-14=(x+2)(x-7).
$$

Uno **zero** di un polinomio è un valore di $x$ per cui il polinomio vale zero. La forma sviluppata $x^2-5x-14$ mostra il coefficiente $-5$ del termine lineare. La forma scomposta mostra gli zeri: il fattore $x+2$ vale zero per $x=-2$ e il fattore $x-7$ per $x=7$.

Il grafico di un polinomio di secondo grado è una curva chiamata **parabola**. Nel disegno la parabola incontra l'asse $x$ nei due zeri.

::grafico{f="(x+2)*(x-7)" xmin=-4 xmax=9 ymin=-24 ymax=24 punti="-2,0,pieno;7,0,pieno" titolo="I due fattori prevedono dove la parabola incontra l'asse x"}
:::

:::attenzione
Le coppie di divisori sono in numero finito, quindi si esaminano tutte. Quando nessuna ha la somma richiesta, il trinomio è privo di fattori lineari a coefficienti interi. In $x^2+x+6$ il prodotto $6$ e la somma $1$ sono positivi, quindi i due numeri sarebbero entrambi positivi. Le sole coppie sono $1,6$ e $2,3$, con somme $7$ e $5$. Nessuna delle due somme è $1$, quindi $x^2+x+6$ non si scompone in fattori a coefficienti interi.
:::

:::osservazione
Nel trinomio $x^2+bx+c$ con $b=0$ il termine lineare manca.

- Per $b=0$ e $c>0$ nessuna coppia di interi soddisfa le due condizioni, perché due interi con prodotto positivo sono diversi da zero e hanno lo stesso segno, quindi la loro somma è diversa da zero. Un esempio è $x^2+4$.
- Per $b=0$ e $c<0$ i due numeri hanno somma zero, quindi sono opposti, cioè della forma $k$ e $-k$. Il loro prodotto è $-k^2=c$, quindi occorre che $-c$ sia il quadrato di un intero. In $x^2-49$ si ha $-c=49=7^2$, le basi sono $x$ e $7$, e $x^2-49=(x-7)(x+7)$.

Il numero $\sqrt2$ è il numero reale positivo che ha per quadrato $2$, e non è né un intero né una frazione. In $x^2-2$ il numero $2$ non è il quadrato di un intero, ma ammettendo coefficienti reali si ottiene $x^2-2=(x-\sqrt2)(x+\sqrt2)$. Per questo il testo di un esercizio indica in quale insieme si cercano i coefficienti dei fattori, cioè fra gli interi oppure fra i reali.
:::

## Trinomi con coefficiente principale diverso da uno

::::teorema{#trinomio-generale titolo="Spezzare il termine di primo grado"}
Siano $a$, $b$, $c$ interi con $a\ne0$. Per scomporre $ax^2+bx+c$ in due fattori lineari a coefficienti interi si cercano due interi $m$ e $n$ tali che

$$
\begin{cases}
m+n=b\\
mn=ac
\end{cases}
$$

Il prodotto richiesto è $ac$, cioè il coefficiente principale per il termine noto. Trovata una coppia, si scrive il termine di primo grado come somma di due termini, $bx=mx+nx$, e sui quattro termini ottenuti si esegue un raccoglimento parziale.

:::dimostrazione
Una scomposizione fornisce sempre una coppia $m$, $n$. Infatti, sviluppando un prodotto di due fattori lineari a coefficienti interi si ottiene

$$
(ux+v)(wx+z)=uw\,x^2+(uz+vw)x+vz.
$$

Confrontando i coefficienti con quelli di $ax^2+bx+c$ si ricavano $a=uw$, $b=uz+vw$ e $c=vz$. I numeri $m=uz$ e $n=vw$ hanno somma $b$ e prodotto $uz\cdot vw=uw\cdot vz=ac$.

Viceversa, da una coppia $m$, $n$ con $m+n=b$ e $mn=ac$ si ottiene una scomposizione. Ogni passo è seguito sul caso $2x^2+7x+3$, con $m=6$ e $n=1$.

1. Sia $d$ il MCD di $|a|$ e $|m|$, dove le barre indicano il valore assoluto. Si scrive $a=d\,a_1$ e $m=d\,m_1$. Gli interi $a_1$ e $m_1$ sono **coprimi**, cioè il loro MCD è $1$, perché i divisori comuni sono già contenuti in $d$. Nel caso numerico $d=2$, $a_1=1$ e $m_1=3$.
2. Da $mn=ac$ segue $d\,m_1n=d\,a_1c$. Dividendo entrambi i membri per $d$ si ottiene $m_1n=a_1c$.
3. L'intero $a_1$ divide il prodotto $m_1n$ ed è coprimo con $m_1$. Un intero che divide un prodotto ed è coprimo con uno dei due fattori divide l'altro fattore, quindi $a_1$ divide $n$. Si scrive $n=a_1e$, con $e$ intero. Nel caso numerico $1=1\cdot e$, quindi $e=1$.
4. Sostituendo $n=a_1e$ nel passo 2 si ha $m_1a_1e=a_1c$. Dividendo per $a_1$ si ottiene $c=m_1e$.
5. Il trinomio con il termine di primo grado spezzato si scrive allora

$$
\begin{aligned}
ax^2+mx+nx+c&=d\,a_1x^2+d\,m_1x+a_1e\,x+m_1e\\[6pt]
&=dx(a_1x+m_1)+e(a_1x+m_1)\\[6pt]
&=(dx+e)(a_1x+m_1).
\end{aligned}
$$

Nel caso numerico i due gruppi sono $2x(x+3)$ e $1\cdot(x+3)$.
:::
::::

:::esempio{titolo="La coppia che ricostruisce il coefficiente lineare"}
Per $2x^2+7x+3$ il prodotto $ac$ è $2\cdot3=6$ e la somma richiesta è $7$. Le coppie di interi positivi con prodotto $6$ sono $1,6$ e $2,3$, con somme $7$ e $5$. Si scrive quindi $7x$ come $6x+x$ e si raccoglie $2x$ nei primi due termini.

$$
\begin{aligned}
2x^2+7x+3&=2x^2+6x+x+3\\[6pt]
&=2x(x+3)+(x+3)\\[6pt]
&=(2x+1)(x+3).
\end{aligned}
$$

Nel secondo gruppo il fattore raccolto è $1$, perché $x+3=1\cdot(x+3)$. Come verifica, i prodotti misti di $(2x+1)(x+3)$ sono $2x\cdot3=6x$ e $1\cdot x=x$, con somma $7x$.

Il fattore $x+3$ vale zero per $x=-3$. Il fattore $2x+1$ vale zero quando $2x=-1$, cioè per $x=-\dfrac12$. Questo zero è una frazione perché il coefficiente di $x$ nel fattore è $2$. Il grafico incontra l'asse $x$ in questi due punti.

::grafico{f="(2*x+1)*(x+3)" xmin=-4 xmax=1 ymin=-4 ymax=12 punti="-3,0,pieno;-0.5,0,pieno" titolo="Uno zero intero e uno frazionario nello stesso trinomio"}
:::

:::esempio{titolo="Una scelta preliminare quando il coefficiente principale è negativo"}
In $-4x^2+5x+6$ il coefficiente principale è negativo. Si raccoglie $-1$, cioè si cambia il segno di ogni termine e si scrive un segno meno davanti: $-4x^2+5x+6=-(4x^2-5x-6)$. Nel trinomio $4x^2-5x-6$ il prodotto del coefficiente principale per il termine noto è $4\cdot(-6)=-24$ e la somma richiesta è $-5$. I numeri $-8$ e $3$ hanno prodotto $-24$ e somma $-5$, quindi $-5x=-8x+3x$.

$$
\begin{aligned}
-4x^2+5x+6&=-(4x^2-8x+3x-6)\\[6pt]
&=-\bigl(4x(x-2)+3(x-2)\bigr)\\[6pt]
&=-(4x+3)(x-2).
\end{aligned}
$$

Il segno meno raccolto all'inizio moltiplica l'intero prodotto, quindi resta scritto nel risultato. Per $x=0$ il risultato vale $-(0+3)(0-2)=-3\cdot(-2)=6$, che coincide con il termine noto del trinomio di partenza. Il termine di grado più alto del risultato è $-(4x\cdot x)=-4x^2$, con il segno negativo del trinomio di partenza.
:::

## Scomposizioni a più passaggi

:::esempio{#completa titolo="Togliere il monomio e studiare il fattore residuo"}
Scomporre *completamente* un polinomio significa proseguire finché nessun fattore si scompone ancora. In $3x^3-3x$ si raccoglie prima il monomio comune $3x$. Il fattore rimasto, $x^2-1$, ha due termini separati da un segno meno e il numero $1$ è un quadrato, perché $1=1^2$. È quindi una differenza di quadrati con basi $x$ e $1$.

$$
\begin{aligned}
3x^3-3x&=3x(x^2-1)\\[6pt]
&=3x(x-1)(x+1).
\end{aligned}
$$

Il fattore $3x$ raccolto al primo passaggio resta scritto anche nel secondo, mentre si scompone $x^2-1$. I tre zeri vengono da tre fattori diversi: il fattore $3x$ vale zero per $x=0$, il fattore $x-1$ per $x=1$ e il fattore $x+1$ per $x=-1$. Il grafico incontra l'asse $x$ in questi tre punti.

::grafico{f="3*x^3-3*x" xmin=-1.7 xmax=1.7 ymin=-10 ymax=10 punti="-1,0,pieno;0,0,pieno;1,0,pieno" titolo="Il fattore raccolto dà lo zero all'origine"}
:::

:::osservazione
In $x^4-16$ il primo termine è il quadrato di $x^2$, perché $(x^2)^2=x^4$, e il secondo è il quadrato di $4$. Dopo il primo passaggio il fattore $x^2-4$ è ancora una differenza di quadrati, con basi $x$ e $2$.

$$
\begin{aligned}
x^4-16&=(x^2-4)(x^2+4)\\[6pt]
&=(x-2)(x+2)(x^2+4).
\end{aligned}
$$

Il quadrato di un numero reale è maggiore o uguale a zero, quindi $x^2+4\ge4$ per ogni $x$ reale. Un fattore lineare a coefficienti reali, come $x-k$, vale zero per $x=k$ e darebbe quindi uno zero reale. Poiché $x^2+4$ è privo di zeri reali, è privo anche di fattori lineari a coefficienti reali.

Lo stesso controllo si applica a un trinomio con il termine di primo grado dopo averlo scritto come quadrato di un binomio più un numero. Questa operazione si chiama **completare il quadrato**. In $x^2-8x+20$ il termine $-8x$ è il doppio prodotto di $x$ e $-4$, e $(x-4)^2=x^2-8x+16$. Poiché $20=16+4$, si ha $x^2-8x+20=(x-4)^2+4$. Il trinomio vale quindi almeno $4$, perciò è privo di zeri reali e di fattori lineari a coefficienti reali.

Anche $x^4-5x^2+4$ contiene il quadrato di $x^2$. Ponendo $u=x^2$ si ottiene il trinomio $u^2-5u+4=(u-1)(u-4)$. Tornando a $x$, si ha $x^4-5x^2+4=(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$.

Il punto in cui una scomposizione termina dipende dunque dall'insieme in cui si cercano i coefficienti e dal grado dei fattori rimasti.
:::

## Zeri e segno dei prodotti

::::teorema{#zeri titolo="Annullamento del prodotto e fattori ripetuti"}
Un polinomio *si annulla* in un numero quando in quel numero vale zero. Si considera un prodotto di polinomi a coefficienti reali, calcolato per valori reali di $x$. Per la **legge di annullamento del prodotto**, uno zero del prodotto è uno zero di almeno un fattore, e ogni zero di un fattore è uno zero del prodotto. Gli zeri di $(x+11)(x-1)$ sono quindi $-11$ e $1$.

Un **intervallo** è un tratto della retta dei numeri, come quello fra due zeri. Il segno del prodotto in un intervallo si ricava dai segni di tutti i fattori con la **regola dei segni**: il prodotto è negativo quando i fattori negativi sono in numero dispari, altrimenti è positivo.

Un fattore è *ripetuto* quando compare più volte, come $x-1$ in $(x-1)^2$. Un fattore elevato a un esponente pari è positivo sia a sinistra sia a destra del proprio zero, quindi in quello zero il prodotto mantiene il segno. Uno zero che proviene da un fattore presente una sola volta si dice **zero semplice**.

:::dimostrazione
Se un fattore vale zero, il prodotto vale zero, come in $3\cdot0=0$. Se tutti i fattori sono diversi da zero, anche il loro prodotto è diverso da zero.

Un fattore lineare $x-k$ è negativo per $x<k$ e positivo per $x>k$, quindi cambia segno soltanto nel proprio zero $k$. Fra due zeri consecutivi del prodotto ogni fattore lineare mantiene lo stesso segno e, per la regola dei segni, lo mantiene anche il prodotto.

Un fattore elevato a un esponente pari è il prodotto di un numero pari di fattori uguali, quindi fuori dal proprio zero è positivo per la regola dei segni.
:::
::::

:::esempio{titolo="Una radice con e una senza cambio di segno"}
Uno zero di un polinomio si chiama anche **radice**. Per $P(x)=(x-1)^2(x+2)$ gli zeri sono $1$, dal fattore $(x-1)^2$, e $-2$, dal fattore $x+2$. I due zeri dividono la retta in tre intervalli. La tabella riporta in ogni intervallo il segno dei due fattori e del prodotto.

| Intervallo | $(x-1)^2$ | $x+2$ | $P(x)$ |
|---|---:|---:|---:|
| $x<-2$ | $+$ | $-$ | $-$ |
| $-2<x<1$ | $+$ | $+$ | $+$ |
| $x>1$ | $+$ | $+$ | $+$ |

A sinistra di $-2$ il fattore lineare $x+2$ è negativo e a destra è positivo, quindi il prodotto cambia segno in $-2$. A sinistra e a destra di $1$ entrambi i fattori sono positivi, quindi il prodotto resta positivo. Nel grafico, perciò, la curva attraversa l'asse $x$ in $-2$ e in $1$ tocca l'asse restando sopra di esso.

::grafico{f="(x-1)^2*(x+2)" xmin=-3 xmax=2.4 ymin=-17 ymax=12 punti="-2,0,pieno;1,0,pieno" titolo="Il prodotto cambia segno soltanto in corrispondenza dello zero semplice"}
:::

## MCD e mcm di monomi

::::teorema{#mcd-mcm titolo="Confrontare coefficienti ed esponenti"}
Con i numeri, il massimo comune divisore (MCD) di $12$ e $18$ è $6$, il più grande intero che divide entrambi. Il **minimo comune multiplo (mcm)** di $12$ e $18$ è $36$, il più piccolo intero positivo che è multiplo di entrambi.

Le stesse nozioni si applicano a due monomi con coefficienti interi positivi.

- Il **MCD dei due monomi** ha come coefficiente il MCD dei coefficienti e, per ogni lettera, l'esponente più piccolo fra i due.
- Il **mcm dei due monomi** ha come coefficiente il mcm dei coefficienti e, per ogni lettera, l'esponente più grande fra i due.

Una lettera che manca in un monomio conta con esponente zero. Per $4x$ e $6xz$ il MCD è $2x$ e il mcm è $12xz$.

:::dimostrazione
Un divisore comune ha un coefficiente che divide entrambi i coefficienti e, per ogni lettera, un esponente minore o uguale a entrambi gli esponenti dati. Il MCD dei coefficienti e gli esponenti più piccoli sono i valori più grandi che soddisfano queste condizioni.

Un multiplo comune ha invece un coefficiente multiplo di entrambi i coefficienti e, per ogni lettera, un esponente maggiore o uguale a entrambi gli esponenti dati. Il mcm dei coefficienti e gli esponenti più grandi sono i valori più piccoli che soddisfano queste condizioni.
:::
::::

:::esempio{titolo="Perché si usano il minimo e il massimo"}
Si considerano $12x^3y^2$ e $18x^2y^4$. In un divisore comune la lettera $x$ compare al più alla seconda potenza, perché il secondo monomio contiene soltanto $x^2$. In un multiplo comune la lettera $y$ compare almeno alla quarta potenza, perché il secondo monomio contiene $y^4$. Il confronto completo è

$$
\begin{aligned}
\operatorname{MCD}(12x^3y^2,18x^2y^4)&=6x^2y^2,\\[4pt]
\operatorname{mcm}(12x^3y^2,18x^2y^4)&=36x^3y^4.
\end{aligned}
$$

Dividendo i due monomi per il MCD si ottengono i quozienti $2x$ e $3y^2$, perché $12x^3y^2=6x^2y^2\cdot2x$ e $18x^2y^4=6x^2y^2\cdot3y^2$. Il MCD trovato è quindi un fattore di entrambi i monomi. Il mcm si ottiene moltiplicando il primo monomio per $3y^2$ oppure il secondo per $2x$, perché $12x^3y^2\cdot3y^2=36x^3y^4$ e $18x^2y^4\cdot2x=36x^3y^4$.

Lo stesso confronto serve per scegliere il denominatore comune di due frazioni algebriche, cioè frazioni con polinomi al numeratore e al denominatore.
:::

:::osservazione{titolo="Ricavare il mcm dal prodotto e dal MCD"}
Un numero primo è un intero maggiore di $1$ divisibile soltanto per $1$ e per sé stesso. I **fattori primi** di un intero sono i numeri primi che lo dividono, come $2$ e $3$ in $12=2^2\cdot3$ e in $18=2\cdot3^2$. Per ogni fattore primo dei coefficienti e per ogni lettera, l'esponente più piccolo sommato al più grande dà la somma dei due esponenti di partenza. Nel prodotto di due potenze della stessa base gli esponenti si sommano. Dunque, per due monomi $M$ e $N$ a coefficienti interi positivi,

$$
\operatorname{MCD}(M,N)\cdot\operatorname{mcm}(M,N)=MN.
$$

Da questa identità si ricava il mcm quando sono noti il prodotto e il MCD. Se il prodotto è $60x^5y^3$ e il MCD è $2x^2y$, si dividono i coefficienti e si sottraggono gli esponenti di ogni lettera:

$$
\operatorname{mcm}(M,N)=\frac{60x^5y^3}{2x^2y}=30x^{5-2}y^{3-1}=30x^3y^2.
$$

L'identità vale anche quando una lettera compare soltanto in uno dei due monomi. In quel caso il suo esponente più piccolo è zero e il più grande è l'esponente con cui la lettera compare, quindi tutta la potenza passa al mcm.
:::

## Controllo di una scomposizione

:::osservazione{#controlli titolo="Verificare tutti i coefficienti"}
**Sviluppare** un prodotto significa eseguire le moltiplicazioni e sommare i termini con la stessa potenza di $x$. Una scomposizione è corretta quando lo sviluppo del prodotto ha gli stessi coefficienti del polinomio dato. Si confrontano il coefficiente principale, i termini intermedi e il termine noto. Per esempio,

$$
(2x-1)(x+4)=2x^2+8x-x-4=2x^2+7x-4.
$$

Il coefficiente principale è $2$, il termine lineare è $8x-x=7x$ e il termine noto è $-4$. Il prodotto $(2x-1)(x+4)$ è quindi una scomposizione di $2x^2+7x-4$.
:::

:::attenzione
Sostituire un numero al posto di $x$ è un controllo parziale. Se le due espressioni danno valori diversi, la scomposizione contiene un errore. Se danno lo stesso valore per uno o due numeri, resta da confrontare lo sviluppo.

Le espressioni $x^2-1$ e $x-1$ valgono entrambe $-1$ in $x=0$ ed entrambe zero in $x=1$. In $x=2$ valgono invece $3$ e $1$. I primi due controlli erano quindi insufficienti per concludere che le due espressioni fossero uguali per ogni $x$. Nel grafico le due curve hanno in comune i punti sopra $x=0$ e $x=1$ e altezze diverse sopra $x=2$.

::grafico{f="x^2-1;x-1" xmin=-1.5 xmax=3 ymin=-3 ymax=8 punti="0,-1,pieno;1,0,pieno;2,3,pieno;2,1,pieno" titolo="Due punti comuni e valori distinti per x = 2"}
:::
