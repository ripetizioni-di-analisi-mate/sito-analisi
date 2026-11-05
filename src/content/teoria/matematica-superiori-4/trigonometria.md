---
titolo: Trigonometria e risoluzione dei triangoli
sommario: Triangoli rettangoli e qualunque, teoremi dei seni e del coseno, aree, caso ambiguo e problemi di distanze e altezze.
---

## Lati e angoli di un triangolo

:::definizione{#notazione titolo="Risoluzione di un triangolo"}
**Risolvere un triangolo** significa determinare tutti i lati e gli angoli a partire da dati sufficienti. Si indicano con $A,B,C$ i vertici, con $\alpha,\beta,\gamma$ gli angoli in quei vertici e con $a,b,c$ i lati opposti. Si ha sempre $\alpha+\beta+\gamma=\pi$.

Le lunghezze sono positive e soddisfano la disuguaglianza triangolare $|b-c|<a<b+c$. Per esempio $3,4,5$ sono lati di un triangolo, mentre $2,3,6$ non lo sono perché $2+3<6$. Quando gli angoli sono dati in gradi, la somma è $180^\circ$; tutti gli angoli di uno stesso calcolo devono usare la medesima unità.
:::

## Triangoli rettangoli

:::teorema{#rettangoli titolo="Rapporti tra lati e funzioni goniometriche"}
In un triangolo rettangolo con ipotenusa $c$ e angolo acuto $\alpha$, siano $a$ il cateto opposto e $b$ quello adiacente. Per similitudine con il triangolo sulla circonferenza goniometrica
$$
\sin\alpha=\frac ac,\qquad\cos\alpha=\frac bc,\qquad\tan\alpha=\frac ab.
$$
Ne seguono $a=c\sin\alpha$, $b=c\cos\alpha$ e $a=b\tan\alpha$. Se $c=10$ e $\alpha=30^\circ$, i cateti sono $a=5$ e $b=5\sqrt3$. Il teorema di Pitagora conferma $25+75=100$.

::grafico{assi=0 linee="0,0 6,0 6,4 0,0" segmenti="5.5,0,5.5,0.5;5.5,0.5,6,0.5" etichette="3,-0.5,b;6.5,2,a;2.5,2.5,c;1,0.4,α" xmin=-1 xmax=8 ymin=-1 ymax=6 uguale=1 titolo="Cateto opposto $a$, cateto adiacente $b$ e ipotenusa $c$ rispetto ad $\alpha$"}
:::

:::esempio
Una scala lunga $8\,\mathrm m$ forma un angolo di $60^\circ$ con il terreno orizzontale. L'altezza raggiunta è il cateto opposto, quindi $h=8\sin60^\circ=4\sqrt3\,\mathrm m$. La distanza del piede dalla parete è $8\cos60^\circ=4\,\mathrm m$. Il modello richiede una parete verticale e un terreno orizzontale.
:::

## Teorema dei seni

::::teorema{#seni titolo="Teorema dei seni"}
In ogni triangolo non degenere, con raggio $R$ della circonferenza circoscritta, vale
$$
\frac a{\sin\alpha}=\frac b{\sin\beta}=\frac c{\sin\gamma}=2R.
$$
Il teorema collega un lato con l'angolo opposto ed è utilizzabile quando è nota almeno una coppia lato-angolo opposto.

:::dimostrazione
Un lato $a$ è una corda della circonferenza circoscritta. Dividendo a metà la corda e considerando il triangolo rettangolo formato dal raggio, si ottiene $a=2R\sin\alpha$ se $\alpha$ è acuto. Se è ottuso, l'angolo acuto usato nella costruzione è il suo supplementare, che ha lo stesso seno. Se è retto, $a=2R$. Ripetendo il ragionamento per gli altri lati si ottiene l'enunciato.
:::
::::

:::esempio
Se $a=6$, $\alpha=30^\circ$ e $\beta=45^\circ$, allora $\gamma=105^\circ$ e
$$
b=a\frac{\sin\beta}{\sin\alpha}=6\sqrt2,
\qquad R=\frac a{2\sin\alpha}=6.
$$
Il rapporto usa $a$ insieme a $\alpha$, perché sono opposti.
:::

## Teorema del coseno

::::teorema{#coseno titolo="Teorema del coseno o di Carnot"}
In ogni triangolo valgono
$$
a^2=b^2+c^2-2bc\cos\alpha,
\qquad
\cos\alpha=\frac{b^2+c^2-a^2}{2bc}.
$$
Le formule per gli altri lati si ottengono cambiando le lettere in modo ciclico. Se $\alpha=90^\circ$, il coseno è nullo e si ritrova il teorema di Pitagora.

:::dimostrazione
Si pongono $A=(0,0)$, $B=(c,0)$ e $C=(b\cos\alpha,b\sin\alpha)$. La distanza $BC$ soddisfa
$$
a^2=(b\cos\alpha-c)^2+b^2\sin^2\alpha
=b^2+c^2-2bc\cos\alpha,
$$
poiché $\sin^2\alpha+\cos^2\alpha=1$.
:::
::::

:::esempio
Con $b=5$, $c=7$ e angolo compreso $\alpha=60^\circ$ si ottiene $a^2=25+49-35=39$, dunque $a=\sqrt{39}$. Il teorema si applica direttamente perché l'angolo è compreso tra i due lati noti.
:::

## Area e raggi

:::teorema{#area titolo="Area di un triangolo"}
L'area $S$ di un triangolo è
$$
S=\frac12bc\sin\alpha
=\frac12ac\sin\beta
=\frac12ab\sin\gamma.
$$
Infatti l'altezza relativa al lato $c$ misura $b\sin\alpha$. Per esempio con $b=8$, $c=5$ e $\alpha=30^\circ$ si ha $S=10$. L'angolo da usare è quello compreso tra i due lati scelti.

Con il semiperimetro $p=\dfrac{a+b+c}{2}$, la **formula di Erone** dà $S=\sqrt{p(p-a)(p-b)(p-c)}$. Per il triangolo $3,4,5$, $p=6$ e $S=\sqrt{6\cdot3\cdot2\cdot1}=6$. Il raggio della circonferenza inscritta vale $r=\dfrac Sp$, perché il triangolo si divide in tre triangoli di altezza $r$. Inoltre $R=\dfrac{abc}{4S}$ per il teorema dei seni.
:::

## Il caso ambiguo

:::osservazione{#ambiguo titolo="Due lati e un angolo opposto"}
Conoscere due lati e un angolo opposto a uno di essi può dare zero, uno o due triangoli. Il teorema dei seni determina un valore di $\sin\beta$, ma in $(0,\pi)$ due angoli supplementari possono avere lo stesso seno. Ogni candidato deve soddisfare $\alpha+\beta<\pi$.

Se $a=5$, $b=8$ e $\alpha=30^\circ$, si ricava $\sin\beta=\dfrac45$. L'angolo $\beta_1=\arcsin\dfrac45$ è circa $53{,}13^\circ$ e il suo supplementare $\beta_2$ è circa $126{,}87^\circ$. Entrambe le somme con $30^\circ$ sono minori di $180^\circ$, quindi esistono due triangoli. Se il rapporto calcolato fosse maggiore di $1$, non ne esisterebbe nessuno.
:::

## Distanze e altezze

:::esempio{#applicazioni titolo="Due osservazioni di una torre"}
Due punti $A$ e $B$ sono allineati con il piede $O$ di una torre su terreno orizzontale. Il punto $B$ è più vicino a $O$ di $20\,\mathrm m$. Da $A$ l'angolo di elevazione è $30^\circ$, da $B$ è $60^\circ$. Posto $BO=d$ e indicata con $h$ l'altezza,
$$
\begin{cases}h=d\sqrt3,\\h=\dfrac{d+20}{\sqrt3},\end{cases}
\quad\Longrightarrow\quad 3d=d+20
\quad\Longrightarrow\quad d=10,\ h=10\sqrt3.
$$
Le due espressioni indicano la stessa altezza, quindi si uguagliano. Il modello assume che le osservazioni siano fatte dal livello del terreno; un'altezza dello strumento si aggiungerebbe al risultato.
:::

## Problemi con un angolo variabile

:::esempio{#parametro titolo="Area al variare dell'angolo compreso"}
Due lati di un triangolo misurano $6$ e $10$. Se $x\in(0,\pi)$ è l'angolo compreso, l'area è $S(x)=30\sin x$. Poiché $\sin x\leq1$, l'area massima è $30$ e si raggiunge per $x=\dfrac\pi2$.

Per richiedere area $15$ si risolve $30\sin x=15$, ottenendo $x=\dfrac\pi6$ oppure $x=\dfrac{5\pi}{6}$. Le due soluzioni danno un triangolo acutangolo rispetto all'angolo scelto e uno ottusangolo, entrambi con gli stessi due lati e la stessa area. Gli estremi $0$ e $\pi$ sono esclusi perché darebbero figure degeneri.

::grafico{f="30*sin(x)" punti="1.570796327,30,pieno" xmin=0 xmax=4 ymin=0 ymax=36 titolo="L'area $S(x)=30\sin x$ per $0<x<\pi$"}
:::
