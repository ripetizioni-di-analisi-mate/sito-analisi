---
titolo: Disequazioni di secondo grado e fratte
sommario: Segno di trinomi e rapporti, intervalli con punti esclusi, sistemi e domini con radicali.
---

Una disequazione di secondo grado contiene l’incognita al quadrato, come $x^2-5x+6>0$. Nel capitolo si trova per quali valori di $x$ una disequazione di questo tipo è vera. Si cercano i valori in cui l’espressione vale zero e si studia il suo segno fra un valore e l’altro. Lo stesso metodo vale per le frazioni, dove si escludono anche i valori che annullano il denominatore.

## Dominio, segno e rappresentazione

:::definizione{#intervalli titolo="Il confronto con zero nel dominio assegnato"}
Una **disequazione** è un confronto fra due espressioni con uno dei simboli $<$ (minore), $\le$ (minore o uguale), $>$ (maggiore), $\ge$ (maggiore o uguale). Per esempio $x^2\le3x+4$ è una disequazione. L’espressione a sinistra del simbolo è il **primo membro**, quella a destra è il **secondo membro**. I simboli $<$ e $>$ danno un confronto **stretto**, che esclude l’uguaglianza; i simboli $\le$ e $\ge$ danno un confronto **non stretto**, che la ammette. Il **verso** della disequazione è il verso del simbolo.

Il **dominio** è l’insieme dei valori di $x$ per cui entrambe le espressioni sono definite. Per esempio $\dfrac1x$ non è definita in $x=0$, perché non si divide per zero. Risolvere una disequazione significa trovare tutti i valori del dominio per cui il confronto è vero. Questi valori formano l’**insieme soluzione**, indicato con $S$.

Per confrontare $A(x)$ e $B(x)$, si studia il segno della differenza $A(x)-B(x)$, nei punti in cui entrambe le espressioni sono definite. La disuguaglianza $A(x)\le B(x)$ è vera quando quella differenza è minore o uguale a zero. Un’uguaglianza è ammessa solo se il simbolo la comprende e il punto appartiene al dominio.

Gli insiemi soluzione si scrivono con gli **intervalli**. I due numeri che delimitano un intervallo sono i suoi **estremi**; le parentesi quadre indicano un estremo incluso, le parentesi tonde un estremo escluso.

- $[2,5]$ è l’insieme dei numeri $x$ con $2\le x\le5$.
- $(2,5)$ è l’insieme dei numeri $x$ con $2<x<5$.
- $[2,5)$ contiene $2$ ed esclude $5$.
- $(-\infty,3]$ contiene tutti i numeri minori o uguali a $3$; $(5,+\infty)$ contiene tutti i numeri maggiori di $5$. Il simbolo $\infty$ si legge «infinito» e ha sempre accanto una parentesi tonda, perché non è un numero.

Gli altri simboli usati nel capitolo sono questi.

- $x\in[2,5]$ si legge «$x$ appartiene a $[2,5]$».
- $\mathbb R$ è l’insieme di tutti i numeri reali.
- $\{3\}$ è l’insieme formato dal solo numero $3$.
- $\varnothing$ è l’**insieme vuoto**, che non contiene numeri; è l’insieme soluzione di una disequazione che non è mai vera.
- $A\cup B$ è l’**unione** di $A$ e $B$, cioè l’insieme dei numeri che stanno in almeno uno dei due. Per esempio $(-\infty,1]\cup[3,+\infty)$ contiene $0$ e $4$ ma non $2$.
- $A\cap B$ è l’**intersezione** di $A$ e $B$, cioè l’insieme dei numeri che stanno in entrambi.
- $\mathbb R\setminus\{3\}$ è l’insieme dei numeri reali tolto $3$.
- $\forall x$ si legge «per ogni $x$».
- $\lor$ si legge «oppure».
:::

:::esempio{titolo="Leggere dove una curva sta sotto l’altra"}
Il grafico di $y=x^2$ è una curva chiamata **parabola**; il grafico di $y=3x+4$ è una retta. Un punto del piano ha come prima coordinata l’**ascissa** $x$ e come seconda l’**ordinata** $y$. La disequazione $x^2\le3x+4$ chiede in quali punti la parabola sta sotto la retta o la incontra.

Portando tutto a primo membro si ottiene la differenza
$$
x^2-3x-4=(x+1)(x-4).
$$
La scomposizione si controlla sviluppando il prodotto: $(x+1)(x-4)=x^2-4x+x-4=x^2-3x-4$. Il prodotto vale zero per $x=-1$ e per $x=4$, quindi i due grafici si incontrano nei punti di ascissa $-1$ e $4$. Per $x=0$ la parabola vale $0$ e la retta vale $4$. Poiché $0\le4$, l’origine appartiene alla soluzione. Fra $-1$ e $4$ il fattore $x+1$ è positivo e $x-4$ è negativo, quindi il prodotto è negativo; fuori da quel tratto i due fattori hanno lo stesso segno e il prodotto è positivo. La soluzione è perciò $[-1,4]$, come mostra la figura.

::grafico{f="x^2;3*x+4" xmin=-2.2 xmax=5.3 ymin=-2.3 ymax=26.6 nomi="x,y" legenda="y=x^2;y=3x+4" punti="-1,1,pieno;4,16,pieno;0,0,pieno;0,4,pieno" segmenti="-1,0,-1,1;4,0,4,16" titolo="Le ascisse dei punti d’intersezione sono le soglie della disequazione"}
:::

## Due radici reali distinte

::::teorema{#segno titolo="Come il segno cambia ai due zeri"}
Un **trinomio di secondo grado** è un’espressione $P(x)=ax^2+bx+c$, dove i **coefficienti** $a$, $b$, $c$ sono numeri e $a\ne0$; $a$ è il **coefficiente principale**. Il grafico di $y=P(x)$ è una parabola rivolta verso l’alto se $a>0$, verso il basso se $a<0$. Una **radice**, o **zero**, del trinomio è un valore di $x$ in cui il trinomio vale zero. Se il trinomio ha due radici reali distinte $r_1<r_2$ (si legge «erre uno» ed «erre due»), allora ha il segno di $a$ fuori dall’intervallo fra le radici e il segno opposto al suo interno. In $r_1$ e $r_2$ vale zero.

:::dimostrazione
Un trinomio con radici $r_1$ e $r_2$ si scompone come $P(x)=a(x-r_1)(x-r_2)$. Il fattore $x-r_1$ è negativo quando $x<r_1$ e positivo quando $x>r_1$; lo stesso vale per $x-r_2$ rispetto a $r_2$.

- Se $x<r_1$, il numero $x$ è minore di entrambe le radici, quindi i due fattori sono negativi.
- Se $r_1<x<r_2$, il primo fattore è positivo e il secondo negativo.
- Se $x>r_2$, entrambi i fattori sono positivi.

Il prodotto di due numeri con lo stesso segno è positivo, quello di due numeri con segni opposti è negativo. Prima di moltiplicare per $a$, quindi, il prodotto è positivo nei due intervalli esterni e negativo in quello centrale. Se $a>0$ i segni restano questi. Se $a<0$, l’ultimo fattore inverte i tre segni.
:::

| Intervallo | $x<r_1$ | $r_1<x<r_2$ | $x>r_2$ |
| --- | --- | --- | --- |
| $x-r_1$ | $-$ | $+$ | $+$ |
| $x-r_2$ | $-$ | $-$ | $+$ |
| $(x-r_1)(x-r_2)$ | $+$ | $-$ | $+$ |
::::

:::esempio{titolo="Lo stesso paio di radici con coefficienti opposti"}
Il trinomio $P(x)=(x-2)(x-3)$ ha $a=1>0$, quindi è negativo tra le radici. Perciò $P(x)\le0$ ha soluzione $[2,3]$, estremi compresi perché in $2$ e in $3$ il trinomio vale zero.

La disequazione $-P(x)<0$ equivale a $P(x)>0$, perché moltiplicando entrambi i membri per $-1$ il verso si inverte. Si ottiene $(-\infty,2)\cup(3,+\infty)$. I confini si escludono in quest’ultimo confronto perché il valore zero non è strettamente negativo.

Nella figura le due parabole hanno gli stessi zeri $2$ e $3$; nel punto $x=2{,}5$ la prima vale $-0{,}25$ e la seconda $0{,}25$.

::grafico{f="(x-2)*(x-3);-(x-2)*(x-3)" xmin=0.2 xmax=4.8 ymin=-5.2 ymax=5.2 nomi="x,y" legenda="P(x);-P(x)" punti="2,0,pieno;3,0,pieno;2.5,-0.25,pieno;2.5,0.25,pieno" titolo="Le due parabole hanno zeri comuni e segni opposti nei tre intervalli"}
:::

:::esempio{titolo="Una superficie minima tra due valori di confine"}
Un rettangolo ha lati $x$ e $12-x$, in metri, con $0<x<12$ perché entrambi i lati sono lunghezze positive. L’area è il prodotto dei lati. Per raggiungere almeno $35\,\mathrm{m}^2$ si richiede $x(12-x)\ge35$. Portando $35$ a primo membro si ottiene
$$
x(12-x)-35=-x^2+12x-35=-(x^2-12x+35)=-(x-5)(x-7).
$$
Fra le radici $5$ e $7$ il prodotto $(x-5)(x-7)$ è negativo e il segno meno lo rende positivo. L’area raggiunge la soglia esatta ai due estremi, quindi sono ammessi i valori $[5,7]$, già compresi fra $0$ e $12$. Per $x=6$ l’area vale $6\cdot6=36\,\mathrm{m}^2$. Per $x=8$ vale $8\cdot4=32\,\mathrm{m}^2$, inferiore al minimo.
:::

## Radice doppia e assenza di radici

::::teorema{#discriminante titolo="Il segno nei casi di discriminante nullo o negativo"}
Per il trinomio $ax^2+bx+c$, con $a\ne0$, il **discriminante** è il numero $\Delta=b^2-4ac$ (la lettera greca $\Delta$ si legge «delta»). Dal segno del discriminante dipende il numero di radici reali del trinomio: due se $\Delta>0$, una se $\Delta=0$, nessuna se $\Delta<0$.

Se $\Delta=0$, esiste una **radice doppia** $r=-\dfrac{b}{2a}$, così detta perché il trinomio si scrive $a(x-r)^2$ e il fattore $x-r$ compare due volte. Il trinomio si annulla solo in $r$. Altrove ha il segno di $a$. Se $\Delta<0$, il trinomio ha il segno di $a$ per ogni $x$ reale.

:::dimostrazione
Si raccoglie $a$ e si **completa il quadrato**, cioè si aggiunge e si toglie lo stesso numero in modo da ottenere il quadrato di un binomio:
$$
\begin{aligned}
ax^2+bx+c&=a\left[x^2+\frac ba x+\frac ca\right]\\[4pt]
&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{b^2}{4a^2}+\frac ca\right]\\[4pt]
&=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].
\end{aligned}
$$

L’uguaglianza vale per ogni $x$ e si verifica sviluppando il quadrato, perché la parte costante dentro la quadra è $\dfrac{b^2-\Delta}{4a^2}=\dfrac{4ac}{4a^2}=\dfrac ca$. Se $\Delta=0$, dentro la quadra rimane un quadrato, che si annulla solo quando $x=-\dfrac b{2a}$ ed è positivo altrove. Se $\Delta<0$, il numero $-\Delta$ è positivo e $4a^2$ è positivo, quindi al quadrato si aggiunge $\dfrac{-\Delta}{4a^2}>0$. L’espressione fra quadre risulta sempre positiva, quindi il segno del trinomio è quello di $a$.
:::
::::

:::esempio{titolo="Lo zero isolato nel confronto con un quadrato"}
Un quadrato di un numero reale è sempre maggiore o uguale a zero. Per $(x-2)^2>0$ ogni reale diverso da $2$ è soluzione, cioè $S=\mathbb R\setminus\{2\}$. In $2$ il quadrato vale zero e va escluso. Se il confronto è $(x-2)^2\le0$, il solo valore ammesso è $2$, cioè $S=\{2\}$. Nella figura la radice doppia è un **punto di tangenza**: la parabola tocca l’asse $x$ in $2$ senza attraversarlo. Il segno resta positivo sia a sinistra sia a destra.

::grafico{f="(x-2)^2" xmin=-0.7 xmax=4.7 ymin=-0.8 ymax=7 nomi="x,y" punti="2,0,pieno" titolo="La parabola tocca l’asse in $2$ e rimane sopra l’asse negli altri punti"}
:::

:::esempio{titolo="Un estremo che non coincide con lo zero"}
Il trinomio $-x^2+4x-5$ vale $-(x-2)^2-1$, come si vede sviluppando: $-(x^2-4x+4)-1=-x^2+4x-5$. Poiché un quadrato è sempre maggiore o uguale a zero, $-(x-2)^2$ è al massimo $0$. Il trinomio ha quindi massimo $-1$, raggiunto in $x=2$. Perciò la disequazione $-x^2+4x-5\ge0$ ha insieme soluzione vuoto, mentre il confronto stretto $-x^2+4x-5<0$ vale per ogni reale. Anche il discriminante dà lo stesso esito: con $a=-1$, $b=4$, $c=-5$ si ha $\Delta=4^2-4(-1)(-5)=16-20=-4<0$, e $a<0$, quindi il trinomio è sempre negativo.

::grafico{f="-(x-2)^2-1" xmin=-0.5 xmax=4.5 ymin=-7.6 ymax=1.2 nomi="x,y" punti="2,-1,pieno" segmenti="2,0,2,-1" titolo="Il punto più alto è $(2;-1)$ e resta sotto l’asse delle ascisse"}
:::

## Dalla forma iniziale alla soluzione

:::esempio{#procedimento titolo="Portare i termini a zero e controllare gli estremi"}
Si risolve $4-2x^2\ge0$.

1. Si aggiunge $2x^2$ a entrambi i membri: $4\ge2x^2$, cioè $2x^2\le4$.
2. Si dividono entrambi i membri per $2$, che è positivo, quindi il verso resta: $x^2\le2$, cioè $2-x^2\ge0$.
3. L’espressione $2-x^2$ è una differenza di quadrati, perché $2=(\sqrt2)^2$; quindi si scompone come $(\sqrt2-x)(\sqrt2+x)$.
4. Fra $-\sqrt2$ e $\sqrt2$ entrambi i fattori sono non negativi, cioè positivi o nulli. Fuori dall’intervallo un fattore è negativo e l’altro positivo.

Si ottiene quindi $[-\sqrt2,\sqrt2]$.

Per controllare la soluzione si usa l’espressione iniziale $4-2x^2$. Nell’origine vale $4$, ammesso. Nei due estremi vale $4-2\cdot2=0$, ammesso da $\ge$. Per $x=2$ vale $4-8=-4$, escluso. Un **punto di prova** è un valore scelto dentro un intervallo per leggere il segno dell’espressione. È utile per verificare il segno assegnato a un intervallo dopo aver individuato tutti gli zeri e accertato che il segno resti costante tra due zeri consecutivi.
:::

:::osservazione
Il **grado** di una disequazione è il più alto esponente dell’incognita che resta dopo aver portato tutto a primo membro e sommato i termini simili. Per esempio $2x^2+3x\ge 2x^2+5$ contiene due termini quadratici uguali. Sottraendo $2x^2$ a entrambi i membri, resta $3x\ge5$ e si trova la sola soglia $\dfrac53$. Se anche i termini lineari, cioè di primo grado, fossero uguali, resterebbe un confronto fra numeri, valido per tutto il dominio (come $0\ge-1$) oppure impossibile (come $0\ge5$). La riduzione iniziale decide se occorre cercare due radici o risolvere un confronto di grado inferiore.
:::

## Frazioni e punti esclusi

::::teorema{#fratte titolo="Studiare il segno del quoziente nel suo dominio"}
Una **disequazione fratta** contiene l’incognita al denominatore. Per un quoziente $\dfrac{P(x)}{Q(x)}$, cioè una frazione fra due espressioni, si impone prima $Q(x)\ne0$, perché non si divide per zero. Il quoziente è positivo quando numeratore e denominatore hanno lo stesso segno e negativo quando hanno segni opposti, come per $\dfrac{-6}{-2}=3$ e $\dfrac{6}{-2}=-3$. Il quoziente vale zero soltanto negli zeri del numeratore che appartengono al dominio.

:::dimostrazione
Nel dominio $Q(x)\ne0$, quindi $Q(x)^2$ è il quadrato di un numero diverso da zero ed è strettamente positivo. Moltiplicando entrambi i membri del confronto con zero per un numero positivo, il verso si conserva. Poiché $\dfrac{P(x)}{Q(x)}\cdot Q(x)^2=P(x)\,Q(x)$, il confronto di $\dfrac{P(x)}{Q(x)}$ con zero diventa il confronto di $P(x)Q(x)$ con zero. Il prodotto mostra come si combinano i segni. Anche se si usa direttamente il prodotto, la condizione $Q(x)\ne0$ resta necessaria, perché il prodotto è definito anche dove la frazione non lo è.
:::
::::

:::esempio{titolo="Distinguere uno zero da un denominatore nullo"}
Per $\dfrac{x+2}{x-1}\le0$ i **punti critici**, cioè i valori in cui si annulla il numeratore o il denominatore, sono $-2$ e $1$. In $-2$ il rapporto vale zero; in $1$ il rapporto non è definito. Il primo è candidato all’inclusione perché il confronto ammette l’uguaglianza. Il secondo è escluso qualunque sia il simbolo del confronto. La tabella riporta il segno di ciascun fattore nei tre intervalli.

| Intervallo | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
| --- | --- | --- | --- |
| Numeratore | $-$ | $+$ | $+$ |
| Denominatore | $-$ | $-$ | $+$ |
| Rapporto | $+$ | $-$ | $+$ |

Il rapporto è negativo solo in $(-2,1)$; si aggiunge $-2$, dove vale zero. Si ottiene $[-2,1)$. Il segno del quoziente cambia in $1$, ma il grafico non ha un punto con quell’ascissa. Nella figura le rette tratteggiate $x=1$ e $y=1$ sono **asintoti**, cioè rette a cui la curva si avvicina senza toccarle. Un valore di prova nell’intervallo è $0$, per il quale il rapporto vale $\dfrac{2}{-1}=-2$.

::grafico{f="(x+2)/(x-1)" asintoti="x=1;y=1" xmin=-5 xmax=5 ymin=-7 ymax=7 punti="-2,0,pieno" titolo="Il rapporto è non positivo tra $-2$ incluso e $1$ escluso"}
:::

:::attenzione{#buco titolo="Una semplificazione conserva il dominio iniziale"}
Nella frazione $\dfrac{(x-1)(x+3)}{x-1}$ si esclude $x=1$. Nei punti ammessi il fattore $x-1$ è diverso da zero, quindi si semplifica fra numeratore e denominatore e rimane $x+3$. Il confronto con zero, con il simbolo $\ge$, dà $x\ge-3$ e $x\ne1$. La soluzione è $[-3,1)\cup(1,+\infty)$. In $1$ la retta semplificata avrebbe ordinata $4$, ma il valore della frazione resta indefinito; la figura lo segna con un punto vuoto.

::grafico{f="x+3" xmin=-4.6 xmax=3.1 ymin=-1.75 ymax=6.6 punti="-3,0,pieno;1,4,vuoto" titolo="Il punto vuoto in $(1;4)$ indica il valore escluso dopo la semplificazione"}

Se il confronto iniziale ha un secondo membro diverso da zero, si porta tutto a sinistra e si usa un denominatore comune. Per esempio, con $x\ne1$,
$$
\frac{2}{x-1}\le1
\quad\Longleftrightarrow\quad
\frac{2}{x-1}-\frac{x-1}{x-1}\le0
\quad\Longleftrightarrow\quad
\frac{3-x}{x-1}\le0.
$$
Il simbolo $\Longleftrightarrow$ indica che le due disequazioni hanno le stesse soluzioni. Il numeratore $3-x$ è positivo per $x<3$; il denominatore è positivo per $x>1$.

- Per $x<1$ il rapporto è negativo.
- Per $1<x<3$ è positivo.
- Per $x>3$ è negativo.

Lo studio dei segni dà quindi $(-\infty,1)\cup[3,+\infty)$. In $3$ il rapporto iniziale è $\dfrac22=1$, come richiesto dal confronto non stretto.
:::

:::esempio{titolo="Un denominatore positivo con un punto escluso"}
Nella disequazione $\dfrac{x+1}{(x-2)^2}\ge0$ il dominio è $x\ne2$. Il denominatore è un quadrato di un numero diverso da zero, quindi è strettamente positivo per tutti gli $x$ ammessi. Si moltiplicano allora entrambi i membri per quel denominatore e si ottiene $x+1\ge0$ conservando il verso. La condizione dà $x\ge-1$, da cui si toglie $2$. Il risultato è $[-1,2)\cup(2,+\infty)$. Il fattore quadratico al denominatore ha lo stesso segno sui due lati dello zero. Il punto $2$ separa comunque due intervalli, perché la frazione non è definita in quel punto.
:::

## Prodotti e molteplicità

:::teorema{#prodotti titolo="La parità dell’esponente indica se il segno cambia"}
La **molteplicità** di una radice $r$ è il numero di volte che il fattore $x-r$ compare nella scomposizione. In $(x-1)^2(x+2)$ la radice $1$ ha molteplicità $2$ e la radice $-2$ ha molteplicità $1$.

Se il fattore $x-r$ compare esattamente $m$ volte, il polinomio si scrive $(x-r)^mG(x)$ con $G(r)\ne0$. Il valore $G(r)$ è diverso da zero e, per continuità del polinomio, il segno di $G$ resta costante vicino a $r$, cioè i valori di $G$ nei punti vicini a $r$ sono vicini a $G(r)$ e quindi hanno il suo stesso segno. Quando $m$ è dispari, $x-r$ e $(x-r)^m$ hanno lo stesso segno, come per $(-2)^3=-8$. Quando $m$ è pari, $(x-r)^m$ è positivo su entrambi i lati di $r$, come per $(-2)^2=4$ e $2^2=4$. Una radice di molteplicità dispari fa quindi cambiare il segno del polinomio, una di molteplicità pari no. Per questo una radice di molteplicità pari spezza l’insieme soluzione di un confronto stretto senza cambiare il segno.
:::

:::esempio{titolo="Uno zero semplice e uno doppio nello stesso prodotto"}
In $(x-1)^2(x+2)>0$ il fattore quadratico è positivo per $x\ne1$. Il segno dipende dunque da $x+2$, che è positivo per $x>-2$. Nei punti a destra di $-2$ il prodotto è positivo, tranne che in $1$ dove si annulla. La soluzione è $(-2,1)\cup(1,+\infty)$. Con il confronto $\ge0$, anche i due zeri sarebbero ammessi e si avrebbe $[-2,+\infty)$.
:::

## Sistemi e intersezione

:::definizione{#sistemi titolo="Ogni valore deve verificare tutte le condizioni"}
Un **sistema di disequazioni** è un insieme di disequazioni che devono essere vere contemporaneamente; si scrive con la graffa. Le sue soluzioni sono le soluzioni comuni, cioè l’intersezione degli insiemi soluzione. Un estremo si include solo se soddisfa ciascuna disequazione del sistema. Per esempio
$$
\begin{cases}
x>1\\
x\le4
\end{cases}
$$
ha soluzione $(1,+\infty)\cap(-\infty,4]=(1,4]$. Per condizioni alternative, collegate da «oppure», si usa invece l’unione, perché è sufficiente appartenere ad almeno uno degli insiemi.
:::

:::esempio{titolo="Un intervallo e un punto isolato"}
Si risolve il sistema
$$
\begin{cases}
x^2-4x+3\ge0\\
0\le x\le3
\end{cases}
$$
Poiché il trinomio vale $(x-1)(x-3)$, il primo insieme è $(-\infty,1]\cup[3,+\infty)$. Intersecando con $[0,3]$ si ottengono $[0,1]$ e il solo punto $3$, cioè $S=[0,1]\cup\{3\}$. Il valore $3$ soddisfa entrambe le condizioni come uguaglianza e va incluso. Nella figura la prima riga mostra la soluzione della disequazione, la seconda il vincolo $[0,3]$ e la terza la loro intersezione.

::grafico{assi=0 xmin=-1.8 xmax=4.9 ymin=-0.25 ymax=3.28 vettori="-1.47,2.66,4.53,2.66;-1.47,1.64,4.53,1.64;-1.47,0.59,4.53,0.59" area="2.74;2.58;-1.4;1|2.74;2.58;3;4.38|1.72;1.56;0;3|0.67;0.51;0;1" punti="1,2.66,pieno;3,2.66,pieno;0,1.64,pieno;3,1.64,pieno;0,0.59,pieno;1,0.59,pieno;3,0.59,pieno" etichette="0,0.15,0;1,0.15,1;3,0.15,3" titolo="Il sistema conserva l’intervallo $[0,1]$ e il punto isolato $3$"}
:::

:::esempio{titolo="Intersecare una frazione con un limite lineare"}
Le due condizioni $\dfrac{x-1}{x+1}>0$ e $x\le0$ vanno risolte insieme. La prima dà $(-\infty,-1)\cup(1,+\infty)$, perché il numeratore e il denominatore sono entrambi negativi prima di $-1$ ed entrambi positivi dopo $1$; fra $-1$ e $1$ hanno segni opposti. Intersecando con $(-\infty,0]$ resta solo $(-\infty,-1)$. L’estremo $-1$ rimane escluso, dato che il nuovo vincolo riguarda soltanto il valore di $x$ e la frazione continua a non esistere in quel punto. Anche lo zero soddisfa il vincolo $x\le0$, ma il rapporto in zero vale $\dfrac{-1}{1}=-1$, quindi lo zero non soddisfa la prima condizione.
:::

## Radici quadrate e vincoli del problema

:::osservazione{#domini titolo="Intersecare le condizioni di esistenza"}
Il **radicando** è l’espressione sotto il segno di radice. Nei numeri reali la radice quadrata di un numero negativo non esiste, perché nessun quadrato è negativo. Perciò per la radice quadrata $\sqrt{A(x)}$ serve $A(x)\ge0$. Se la radice è l’intero denominatore o un suo fattore, il denominatore è diverso da zero solo quando anche la radice lo è, quindi serve $A(x)>0$. Per esempio $\sqrt{x^2-4}$ è definita anche negli zeri $-2$ e $2$ del radicando. Per $\dfrac{1}{\sqrt{x^2-4}}$ quei due valori sono esclusi, e si ottiene $(-\infty,-2)\cup(2,+\infty)$.

Se la radice è un **addendo** del denominatore, cioè uno dei termini di una somma, si controlla il valore dell’intera somma. Per $\dfrac{1}{\sqrt{x}+1}$ basta $x\ge0$, perché nel dominio della radice $\sqrt x\ge0$ e quindi il denominatore è sempre almeno uno. Il valore $x=0$ è ammesso e la frazione vale $1$.

Per $\dfrac{\sqrt{(x-1)(4-x)}}{x-2}$ il radicando non negativo ammette $[1,4]$, perché il prodotto $(x-1)(4-x)$ vale $-(x-1)(x-4)$ ed è quindi non negativo fra le radici $1$ e $4$. Il denominatore esclude $2$. Quindi il dominio è $D=[1,2)\cup(2,4]$. In $1$ e in $4$ la radice al numeratore vale zero e il denominatore resta diverso da zero. Nella figura i punti pieni $1$ e $4$ sono inclusi e il punto vuoto $2$ è escluso.

::grafico{assi=0 xmin=-0.5 xmax=5.5 ymin=-0.85 ymax=0.9 vettori="-0.15,0,5.18,0" area="0.075;-0.075;1;2|0.075;-0.075;2;4" punti="1,0,pieno;2,0,vuoto;4,0,pieno" etichette="1,-0.35,1;2,-0.35,2;4,-0.35,4;5.01,-0.35,x" titolo="Gli zeri del radicando ai bordi sono ammessi. Il denominatore toglie il punto interno $2$"}
:::

:::esempio{titolo="Valore assoluto e condizione di esistenza"}
Il **valore assoluto** $|a|$ di un numero è il numero stesso se $a\ge0$ e il suo opposto se $a<0$: $|3|=3$ e $|-3|=3$. La radice $\sqrt{(x-1)^2}$ è definita per ogni reale e vale $|x-1|$, perché restituisce la quantità non negativa che, al quadrato, dà il radicando. Per esempio con $x=-2$ si ha $\sqrt{(-3)^2}=\sqrt9=3=|-3|$. Nella frazione $\dfrac{\sqrt{(x-1)^2}}{x-1}$ occorre però escludere $1$. Per $x>1$ il numeratore vale $x-1$, quindi il rapporto vale $1$. Per $x<1$ il numeratore vale $1-x$, quindi il rapporto vale $-1$. Il punto dove cambiano le due formule è proprio quello escluso.
:::

:::esempio{titolo="Un confine algebrico e una lunghezza positiva"}
Un rettangolo ha lati $x$ e $x+3$ metri e area al massimo $40\,\mathrm{m}^2$. Occorre $x>0$, perché $x$ è una lunghezza, e $x(x+3)\le40$. Portando tutto a sinistra si ottiene $x^2+3x-40\le0$. Due numeri con prodotto $-40$ e somma $3$ sono $8$ e $-5$, quindi $x^2+3x-40=(x+8)(x-5)$. Il trinomio ha $a=1>0$ ed è non positivo fra le radici, con soluzione $[-8,5]$. Intersecando con $x>0$ rimane $(0,5]$. Cinque metri sono ammessi perché l’area è $5\cdot8=40\,\mathrm{m}^2$. Se il lato minore deve misurare un numero intero di metri, sono possibili soltanto le misure da uno a cinque.
:::

## Una famiglia di parabole con parametro

:::esempio{#parametri titolo="Controllare il valore massimo prima di calcolare gli zeri"}
Un **parametro** è una lettera, qui $k$, che indica un numero fissato ma non dato; la soluzione si scrive per ciascun valore possibile di $k$. Si considera $k-(x-1)^2\ge0$, con $k$ reale fissato. Per ogni $x$ il quadrato è non negativo, quindi il valore più alto del membro a sinistra è $k$, raggiunto a $x=1$. Il punto più alto della parabola, $(1;k)$, è il suo **vertice**.

- Per $k<0$, neppure il massimo soddisfa il confronto e l’insieme soluzione è vuoto.
- Per $k=0$, il solo valore ammesso è $x=1$, che rende il quadrato nullo.
- Per $k>0$, la condizione $(x-1)^2\le k$ dà $-\sqrt k\le x-1\le\sqrt k$, cioè $[1-\sqrt{k},1+\sqrt{k}]$.

Nell’ultimo caso i due estremi sono entrambi inclusi. Per esempio con $k=1$ si ottiene $[0,2]$. Se si adotta il simbolo $>$, si escludono quei due punti e con $k=0$ non resta alcuna soluzione. Il parametro separa quindi tre configurazioni e il simbolo stabilisce come leggere le intersezioni con l’asse. Nella figura le tre parabole corrispondono a $k=-1$, $k=0$ e $k=1$.

::grafico{f="-1-(x-1)^2;-(x-1)^2;1-(x-1)^2" xmin=-1.34 xmax=3.34 ymin=-4.8 ymax=1.55 nomi="x,y" legenda="k=-1;k=0;k=1" punti="1,-1,pieno;1,0,pieno;1,1,pieno;0,0,pieno;2,0,pieno" titolo="Il vertice sale con $k$. Le tre parabole hanno rispettivamente zero, uno o due punti sull’asse"}
:::

:::esempio{titolo="Quando il parametro rende il trinomio sempre non negativo"}
Si cercano i valori di $k$ per cui $(k-1)x^2-2x+1\ge0$ vale per tutti i reali. In $x=1$ il primo membro vale $(k-1)-2+1=k-2$. Se $k<2$ questo valore è negativo, quindi la condizione $k\ge2$ è **necessaria**: senza di essa la disequazione non vale per tutti i reali. Con questa condizione si riscrive il trinomio come
$$
(k-1)x^2-2x+1=(x^2-2x+1)+(k-2)x^2=(x-1)^2+(k-2)x^2.
$$
I due addendi sono non negativi per ogni $x$, perciò la condizione è anche **sufficiente**: basta a garantire che la disequazione valga per tutti i reali. Per $k=2$ rimane un quadrato che si annulla in $1$. Per $k=1$ il coefficiente quadratico è zero e si ha la disequazione lineare $-2x+1\ge0$, che è vera solo per $x\le\dfrac12$.
:::
