---
titolo: Valore assoluto ed equazioni irrazionali
sommario: Come leggere il valore assoluto come distanza e risolvere equazioni e disequazioni con moduli e radici reali.
---

## Il valore assoluto come distanza

:::definizione{#assoluto titolo="Valore assoluto"}
Il **valore assoluto** di un numero reale $u$ è la sua distanza da zero. Se $u\geq0$, la distanza è $u$. Se $u<0$, la distanza è $-u$, che in questo caso è positivo. Quindi $|-5|=5$ e $|5|=5$. In generale $|u|$ è non negativo e vale zero solo quando $u=0$.

La differenza $x-a$ è lo spostamento con segno da $a$ a $x$. Perciò $|x-a|$ è la distanza fra questi due punti. Per esempio $|1-4|=3$ e $|7-4|=3$, quindi $1$ e $7$ si trovano ai lati di $4$ alla stessa distanza.
:::

:::esempio{titolo="Il grafico dei due tratti"}
Per $y=|x-2|$, l'argomento $x-2$ è negativo a sinistra di $2$ e non negativo a destra. Il grafico è quindi la semiretta $y=2-x$ per $x<2$ e la semiretta $y=x-2$ per $x\geq2$. Le due rette si incontrano in $(2,0)$. Allontanarsi da $2$ di un'unità in entrambi i versi fa crescere l'ordinata di un'unità.

::grafico{f="abs(x-2)" xmin=-2 xmax=6 ymin=-1 ymax=5 punti="1,1,pieno;2,0,pieno;3,1,pieno" titolo="I punti di ascissa $1$ e $3$ distano entrambi $1$ da $2$"}

:::

## Equazioni con valore assoluto

:::teorema{#equazioni titolo="Due possibilità per la distanza"}
Sia $f$ definita per i valori di $x$ in esame. Per $r>0$, l'equazione $|f(x)|=r$ equivale a $f(x)=r$ oppure $f(x)=-r$. Se $r=0$ rimane la sola condizione $f(x)=0$. Se $r<0$, non ci sono soluzioni perché il valore assoluto è sempre non negativo.

Se il secondo membro è un'espressione $g(x)$, il suo segno dipende da $x$. Si lavora perciò nel dominio comune con il vincolo $g(x)\geq0$, poi si risolvono le due equazioni $f(x)=g(x)$ e $f(x)=-g(x)$. Si conservano solo le radici appartenenti al dominio che rispettano il vincolo.
:::

:::esempio{titolo="Un secondo membro che cambia segno"}
In $|2x-3|=x$, il membro di destra è non negativo per $x\geq0$. Nel primo caso $2x-3=x$, quindi $x=3$. Nel secondo caso $2x-3=-x$, quindi $3x=3$ e $x=1$. I due candidati soddisfano $x\geq0$ e in effetti $|6-3|=3$ e $|2-3|=1$.

::grafico{f="abs(2*x-3);x" xmin=-1 xmax=4.5 ymin=-1 ymax=6 punti="1,1,pieno;3,3,pieno" titolo="Le due intersezioni risolvono $|2x-3|=x$"}

:::

:::esempio{titolo="Quante intersezioni produce il parametro?"}
Consideriamo $|x-1|=k+2$ con $k$ reale. Nel grafico si interseca la curva $y=|x-1|$ con la retta orizzontale $y=k+2$. La quota più bassa della curva è $0$ e si raggiunge in $x=1$. Il valore del parametro che porta la retta a quella quota è $k=-2$.

- Per $k<-2$ la retta è sotto il vertice, quindi non ci sono intersezioni.
- Per $k=-2$ si incontra solo il vertice e la soluzione è $x=1$.
- Per $k>-2$ la retta taglia entrambi i rami. Risolvendo $x-1=k+2$ oppure $x-1=-(k+2)$ si ottengono $x=k+3$ e $x=-k-1$.

Per esempio, $k=0$ dà quota $2$ e soluzioni $-1$ e $3$. Il grafico mostra perché il numero di soluzioni dipende dalla quota e perché nel caso limite le due ascisse coincidono.

::grafico{f="abs(x-1);2;-1" xmin=-3 xmax=5 ymin=-2 ymax=5 punti="-1,2,pieno;1,0,pieno;3,2,pieno" titolo="Con quota $2$ ci sono due intersezioni, a quota $0$ si ha solo il vertice e a quota $-1$ nessuna"}

:::

## Distanze inferiori a una soglia

:::teorema{#interne titolo="Distanza minore di un raggio"}
Per $r>0$ la condizione $|f(x)|<r$ equivale a $-r<f(x)<r$. Il numero $f(x)$ deve essere contemporaneamente a destra di $-r$ e a sinistra di $r$. Con $|f(x)|\leq r$ le due disuguaglianze diventano non strette e si ammettono gli estremi. Per $r=0$ il confronto stretto è impossibile, mentre quello non stretto ammette solo gli zeri di $f$. Per $r<0$ entrambi i confronti sono impossibili.
:::

:::esempio{titolo="Segno del coefficiente dell'incognita"}
In $|5-2x|<3$ la doppia disuguaglianza è $-3<5-2x<3$. Sottraendo $5$ si ottiene $-8<-2x<-2$. Dividendo per $-2$, entrambi i versi si invertono e si ha $4>x>1$. L'insieme delle soluzioni è $(1,4)$. Il punto $x=4$ dà $|5-8|=3$, quindi resta escluso. Il punto $x=2$ è interno e dà $|5-4|=1<3$.
:::

## Distanze superiori a una soglia

:::teorema{#esterne titolo="Distanza maggiore di un raggio"}
Per $r>0$ la condizione $|f(x)|>r$ equivale a $f(x)<-r$ oppure $f(x)>r$. Sulla retta sono ammesse due semirette distinte, quindi si usa un'unione. Per $|f(x)|\geq r$ si aggiungono i valori in cui $f(x)=-r$ o $f(x)=r$. Se $r=0$, il confronto $|f(x)|>0$ esclude gli zeri di $f$, mentre $|f(x)|\geq0$ vale in tutto il dominio. Se $r<0$, entrambi i confronti valgono in tutto il dominio.
:::

:::esempio{titolo="Una soglia con due intervalli"}
La disequazione $|x+1|\geq2$ chiede i punti a distanza almeno $2$ da $-1$. Il primo ramo è $x+1\leq-2$, quindi $x\leq-3$. Il secondo è $x+1\geq2$, quindi $x\geq1$. Il grafico della distanza e la retta $y=2$ si incontrano in $x=-3$ e $x=1$. La soluzione è l'unione $(-\infty,-3]\cup[1,+\infty)$.

::grafico{f="abs(x+1);2" xmin=-5 xmax=3 ymin=-1 ymax=5 punti="-3,2,pieno;1,2,pieno" titolo="La distanza raggiunge o supera $2$ a sinistra di $-3$ o a destra di $1$, estremi inclusi"}

:::

## Radicali e dominio

:::definizione{#radicali titolo="Radice quadrata reale"}
Per $u\geq0$, $\sqrt u$ è l'unico numero reale non negativo il cui quadrato vale $u$. Il numero $u$ si chiama **radicando**. Per esempio $\sqrt9=3$, perché $3\geq0$ e $3^2=9$. Per la stessa definizione $\sqrt{x^2}=|x|$. In particolare, se $x=-4$ allora $\sqrt{x^2}=4$.

Una radice di indice pari impone un radicando maggiore o uguale a zero. Una radice di indice dispari, come $\sqrt[3]{x}$, è definita anche per $x<0$. Se compare un denominatore, bisogna richiedere inoltre che il denominatore sia diverso da zero. In $\dfrac1{\sqrt{x-2}}$ questo significa $x-2>0$.
:::

:::esempio{titolo="Due condizioni di esistenza"}
Nell'espressione $\dfrac{\sqrt{x+2}}{\sqrt{5-x}}$, il numeratore esiste per $x+2\geq0$. Il denominatore deve esistere e avere valore positivo, quindi $5-x>0$. Le due condizioni impongono rispettivamente $x\geq-2$ e $x<5$. Il dominio è $[-2,5)$. In $-2$ il numeratore vale zero e il rapporto è definito. In $5$ si annulla il denominatore, quindi il rapporto è indefinito.
:::

## Equazioni con una radice

::::teorema{#irrazionali titolo="Elevamento al quadrato equivalente"}
Siano $f$ e $g$ espressioni reali definite nel dominio comune in esame. L'equazione $\sqrt{f(x)}=g(x)$ equivale a

$$
\begin{cases}
g(x)\geq0,\\
f(x)=g(x)^2.
\end{cases}
$$

:::dimostrazione
Se vale l'uguaglianza, il secondo membro è non negativo perché è uguale a una radice quadrata. Elevando al quadrato si ottiene $f(x)=g(x)^2$. Nel verso opposto, se $f(x)=g(x)^2$ allora $f(x)\geq0$ e la radice esiste. Poiché $g(x)\geq0$, $g(x)$ è il numero non negativo il cui quadrato vale $f(x)$. Quindi è proprio $\sqrt{f(x)}$.
:::
::::

:::esempio{titolo="Un candidato estraneo dopo il quadrato"}
Nell'equazione $\sqrt{x+2}=x$ serve $x\geq0$. Elevando al quadrato si ottiene $x^2-x-2=(x-2)(x+1)=0$. I candidati sono $2$ e $-1$. In $-1$ il radicando è positivo, ma i membri dell'equazione iniziale valgono $1$ e $-1$. Per $x=2$ valgono entrambi $2$, quindi la soluzione è $\{2\}$.

::grafico{f="sqrt(x+2);x" xmin=-3 xmax=4 ymin=-2 ymax=4 punti="2,2,pieno;-1,1,pieno;-1,-1,pieno" segmenti="-1,-1,-1,1" titolo="In $x=-1$ i quadrati coincidono, mentre le ordinate sono opposte"}

:::

:::esempio{titolo="Due radicali e il segno prima del quadrato"}
Risolviamo $\sqrt{x+4}=2-\sqrt x$. Le due radici esistono per $x\geq0$. In più il membro di destra deve essere non negativo, quindi $\sqrt x\leq2$ e il vincolo diventa $0\leq x\leq4$. Su questo intervallo si può elevare al quadrato.

$$
\begin{aligned}
x+4&=(2-\sqrt x)^2\\[4pt]
&=4-4\sqrt x+x,\\[4pt]
4\sqrt x&=0,\\[4pt]
x&=0.
\end{aligned}
$$

Per $x=0$ entrambi i membri iniziali valgono $2$. Per ogni $x>0$ del dominio, $\sqrt{x+4}>2$ e $2-\sqrt x<2$. Le due curve si allontanano dunque dalla quota comune appena ci si sposta a destra di $0$. Il punto $(0,2)$ è l'unica intersezione.

::grafico{f="sqrt(x+4)+0*sqrt(x);2-sqrt(x)" legenda="y=\sqrt{x+4};y=2-\sqrt{x}" xmin=-0.8 xmax=6 ymin=-1 ymax=4 punti="0,2,pieno" titolo="Le due curve hanno ordinata comune solo al confine $x=0$"}

:::

## Disequazioni con una radice

:::teorema{#confronti titolo="Confrontare quantità non negative"}
La funzione quadrato è strettamente crescente sui numeri non negativi. Infatti, per $v>u\geq0$ si ha $v^2-u^2=(v-u)(v+u)>0$. Se entrambi i membri di una disequazione sono non negativi, elevarli al quadrato conserva il verso del confronto.

Sia $c\geq0$. Allora $\sqrt{f(x)}\leq c$ equivale a $0\leq f(x)\leq c^2$. La prima disuguaglianza serve per il dominio, la seconda impone il confronto. Se $c$ è sostituito da $g(x)$, quando $g(x)<0$ il confronto $\sqrt{f(x)}\leq g(x)$ è impossibile. Nello stesso caso il confronto $\sqrt{f(x)}>g(x)$ è automaticamente vero in tutto il dominio della radice. Per $g(x)\geq0$ si confrontano i quadrati mantenendo la condizione di esistenza.
:::

:::esempio{titolo="La retta attraversa l'asse"}
Per $\sqrt{x+2}>x$, il dominio è $x\geq-2$. Su $[-2,0)$ il membro di sinistra è non negativo e quello di destra è negativo, quindi la disuguaglianza è vera. Per $x\geq0$ si può elevare al quadrato e si ottiene

$$
\begin{aligned}
x+2>x^2&\iff (x-2)(x+1)<0 \\[4pt]
&\iff -1<x<2.
\end{aligned}
$$

Intersecando il secondo caso con $x\geq0$ si ottiene $[0,2)$. Unendo i due casi, la soluzione è $[-2,2)$. Si include $-2$ perché $0>-2$, mentre $2$ è escluso perché le ordinate sono uguali.
:::

## Espressioni definite a tratti

:::esempio{#tratti titolo="Una somma di distanze"}
In $|x-1|+|x-4|$ si sommano le distanze di $x$ da $1$ e da $4$. Sul tratto $1\leq x\leq4$, quelle due distanze ricoprono il segmento da $1$ a $4$, quindi la somma vale sempre $3$. A sinistra di $1$ i due argomenti sono negativi e la somma vale $5-2x$. A destra di $4$ gli argomenti sono positivi e la somma vale $2x-5$.

Per risolvere $|x-1|+|x-4|=5$, nel primo tratto si ottiene $5-2x=5$, quindi $x=0$. Il tratto centrale ha quota $3$ e non contiene soluzioni. Nel terzo si ottiene $2x-5=5$, quindi $x=5$. I candidati $0$ e $5$ appartengono ai tratti in cui sono stati calcolati. Con la soglia $3$, invece, ogni punto dell'intervallo $[1,4]$ sarebbe una soluzione.

::grafico{f="abs(x-1)+abs(x-4);5" xmin=-2 xmax=7 ymin=-1 ymax=9 punti="0,5,pieno;1,3,pieno;4,3,pieno;5,5,pieno" titolo="La somma delle distanze è costante tra $1$ e $4$"}

:::

:::osservazione
Se due valori assoluti cambiano formula in punti diversi, si divide la retta in corrispondenza degli zeri di tutti gli argomenti. Ogni tratto fornisce una formula valida su quel tratto. Dopo avere risolto l'equazione o la disequazione del tratto, si interseca la soluzione con il tratto stesso prima di unire i risultati. Il controllo impedisce a una formula usata fuori dal proprio intervallo di produrre soluzioni estranee.
:::
