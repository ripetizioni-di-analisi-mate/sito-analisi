---
titolo: Funzioni e lettura dei grafici
sommario: Dal calcolo di un'immagine alla lettura del dominio, del segno e delle intersezioni, con rette, parabole, esponenziali e logaritmi.
---

:::percorso
Le equazioni permettono di trovare un valore incognito. Qui una formula collega due variabili e l'equazione torna utile per risalire dall'uscita all'ingresso. Il grafico raccoglie le coppie che soddisfano la formula. In geometria analitica userai le coordinate per descrivere punti, rette e circonferenze.
:::

## Ingresso, immagine e dominio

:::definizione{#funzione-e-dominio titolo="Funzione e dominio"}
Una **funzione** $f$ associa a ciascun ingresso ammesso $x$ esattamente un valore $f(x)$, detto *immagine* di $x$. Il **dominio** è l'insieme degli ingressi ammessi. Il grafico è l'insieme dei punti $(x,f(x))$. Un tratto verticale che incontra un disegno in due punti rivela due immagini per la stessa ascissa, quindi quel disegno non rappresenta il grafico di una funzione di $x$.
:::

:::esempio{titolo="Sostituire un numero"}
Per $f(x)=x^2-3x$, l'immagine di $-2$ è
$$
f(-2)=(-2)^2-3(-2)=4+6=10.
$$
Il punto $(-2,10)$ appartiene al grafico.
:::

:::teorema{#vincoli-di-dominio titolo="Vincoli sul dominio reale"}
Per ricavare il dominio si impongono tutti i vincoli insieme. I vincoli più comuni sono questi.

- Il denominatore di una frazione deve essere diverso da zero.
- Il radicando di una radice di indice pari deve essere maggiore o uguale a zero.
- L'argomento di un logaritmo deve essere strettamente positivo.

Per $f(x)=\dfrac{\sqrt{x+2}}{x-1}$ si richiede $x\geq -2$ e si esclude $x=1$. Il dominio è $[-2,1)\cup(1,+\infty)$. Anche se un fattore al denominatore si semplifica, il valore che lo annullava resta escluso dalla formula iniziale.
:::

## Lettura di punti, segno e variazioni

:::definizione{#lettura-del-grafico titolo="Leggere ascisse e ordinate"}
Per trovare $f(a)$ si parte da $a$ sull'asse orizzontale e si raggiunge il grafico lungo la verticale. L'ordinata del punto trovato è il valore cercato. Per trovare le soluzioni di $f(x)=k$ si interseca il grafico con la retta orizzontale $y=k$ e si leggono le ascisse. Per confrontare due funzioni si fissano le stesse ascisse. Dove il grafico di $f$ è sopra quello di $g$ vale $f(x)>g(x)$. Nei punti di incontro le ordinate coincidono.
:::

:::esempio{titolo="Uno stesso livello in due punti"}
Il grafico è formato dai segmenti fra $(0,1)$, $(2,5)$ e $(6,1)$. Sul primo segmento l'ordinata cresce di $2$ per ogni unità di ascissa, quindi vale $3$ in $x=1$. Sul secondo segmento cala di $1$ per unità e vale $3$ in $x=4$.

::grafico{linee="0,1 2,5 6,1;0,3 6,3" punti="1,3,pieno,A;4,3,pieno,B" xmin=-1 xmax=7 ymin=-1 ymax=6 titolo="Intersezioni del grafico spezzato con il livello di ordinata 3"}

:::

:::definizione{#zeri-segno-monotonia titolo="Zeri, segno e monotonia"}
Gli **zeri** sono gli ingressi per cui l'ordinata è $0$. Il grafico è sopra l'asse orizzontale dove $f(x)>0$ e sotto dove $f(x)<0$. Una funzione è **strettamente crescente** su un intervallo se, per ogni $x_1<x_2$ nell'intervallo, vale $f(x_1)<f(x_2)$. Per una funzione strettamente decrescente vale $f(x_1)>f(x_2)$.
:::

:::attenzione{titolo="Segno e crescita"}
La retta $f(x)=x-4$ sale da sinistra verso destra ed è crescente su tutti i reali. Le sue ordinate sono negative per $x<4$. Crescenza e segno rispondono a due domande diverse.
:::

## Rette e proporzionalità

:::definizione{#retta-e-pendenza titolo="Pendenza e intercetta"}
Nella formula $y=mx+q$, la **pendenza** $m$ è la variazione dell'ordinata divisa per la variazione dell'ascissa. Con due punti $(x_1,y_1)$ e $(x_2,y_2)$, se $x_1\neq x_2$ si ha
$$
m=\frac{y_2-y_1}{x_2-x_1}.
$$
Il valore $q$ è l'ordinata del punto in cui la retta incontra l'asse verticale. In un modello di costo $C(n)=4+2n$, $q=4$ è il costo fisso e $m=2$ è il costo aggiunto da ogni unità.
:::

:::teorema{#proporzionalita titolo="Proporzionalità diretta e inversa"}
Per una **proporzionalità diretta** vale $y=kx$. Il grafico passa per l'origine e il rapporto $\dfrac{y}{x}$ è costante per $x\neq 0$. Per una **proporzionalità inversa** vale $y=\dfrac{k}{x}$, quindi il prodotto $xy$ è costante. Se $x$ e $y$ sono positive e $x$ triplica, nel primo modello $y$ triplica e nel secondo si riduce a un terzo.
:::

:::esempio{titolo="Confronto tra due tariffe"}
Una tariffa costa $3+2n$ euro e l'altra $9+n$ euro, per $n$ utilizzi. I prezzi coincidono quando $3+2n=9+n$, cioè per $n=6$. Dopo il sesto utilizzo la seconda costa meno, perché cresce di un euro a utilizzo contro i due della prima.
:::

## Parabole e valori estremi

:::definizione{#parabola-e-vertice titolo="Il vertice della parabola"}
La funzione $f(x)=a(x-h)^2+k$ con $a\neq 0$ ha vertice $(h,k)$. Il quadrato è sempre maggiore o uguale a zero e si annulla per $x=h$. Perciò il vertice dà il minimo se $a>0$ e il massimo se $a<0$. L'asse di simmetria è la retta $x=h$.
:::

:::esempio{titolo="Segno da una fattorizzazione"}
Per $f(x)=(x+2)(x-3)$ gli zeri sono $-2$ e $3$. A sinistra di $-2$ entrambi i fattori sono negativi, perciò il prodotto è positivo. Tra gli zeri i fattori hanno segno opposto, quindi il prodotto è negativo. A destra di $3$ entrambi i fattori sono positivi.

::grafico{f="(x+2)*(x-3)" xmin=-4 xmax=5 ymin=-8 ymax=12 punti="-2,0;3,0" titolo="Segno di una parabola con due intersezioni sull'asse orizzontale"}

:::

## Trasformazioni e formule a tratti

:::teorema{#trasformazioni titolo="Spostamenti e riflessioni"}
Con $g(x)=f(x)+k$ ogni punto si sposta di $k$ unità in verticale. Con $g(x)=f(x-h)$ il punto $(a,f(a))$ si trova in $(a+h,f(a))$, perché $(a+h)-h=a$. La formula $-f(x)$ riflette il grafico rispetto all'asse orizzontale. La formula $f(-x)$ lo riflette rispetto all'asse verticale.
:::

:::esempio{titolo="Una funzione definita a tratti"}
Un noleggio costa $6$ euro fino a $2$ ore. Per ogni ora oltre le prime $2$ si aggiungono $3$ euro. Indicando con $t\geq 0$ le ore, si può scrivere
$$
C(t)=
\begin{cases}
6 & 0\leq t\leq 2,\\
6+3(t-2) & t>2.
\end{cases}
$$
Per $t=5$ si usa il secondo tratto. Le ore aggiuntive sono $5-2=3$, quindi il costo è $15$ euro.
:::

## Potenze esponenziali

:::definizione{#esponenziale titolo="Crescita e decrescita esponenziale"}
Per $a>0$ con $a\neq 1$, la funzione $a^x$ ha dominio $\mathbb{R}$, assume solo valori positivi e vale $1$ per $x=0$. È crescente se $a>1$ e decrescente se $0<a<1$. Nel modello $Q(t)=Q_0a^t$, aumentare $t$ di un'unità moltiplica $Q(t)$ per $a$.
:::

:::esempio{titolo="Riconoscere la base"}
Per risolvere $3^{x-1}=27$, si scrive $27=3^3$. Poiché due potenze di base $3$ sono uguali soltanto se gli esponenti coincidono, $x-1=3$ e dunque $x=4$.
:::

## Logaritmi elementari

:::definizione{#logaritmo titolo="Logaritmo come esponente"}
Con $a>0$ e $a\neq 1$, $\log_a b$ è l'esponente da dare ad $a$ per ottenere $b$. Si richiede $b>0$ e vale
$$
\log_a b=c\quad\Longleftrightarrow\quad a^c=b.
$$
Ad esempio $\log_2 8=3$ perché $2^3=8$. Il simbolo $\ln$ indica il logaritmo naturale, di base $e>1$. Ogni logaritmo vale zero in $1$. È crescente se $a>1$ e decrescente se $0<a<1$. Per argomenti positivi, la somma dei logaritmi è il logaritmo del prodotto. La differenza è il logaritmo del quoziente.
:::

:::attenzione{titolo="Verificare i singoli argomenti"}
Nell'equazione $\log_2(x-1)+\log_2(x-3)=3$ servono $x-1>0$ e $x-3>0$. La condizione sul prodotto $(x-1)(x-3)>0$ ammetterebbe anche valori con entrambi gli argomenti negativi. Il dominio della formula originale richiede $x>3$.
:::

## Comporre e risalire all'ingresso

:::definizione{#composizione-e-inversa titolo="Composizione e funzione inversa"}
In $(f\circ g)(x)=f(g(x))$ si calcola prima $g(x)$ e si usa il risultato come ingresso di $f$. Se ogni valore assunto da $f$ proviene da un solo ingresso, la **funzione inversa** $f^{-1}$ riporta il valore al suo ingresso. Con $f(x)=2x+3$ si ricava $x=\dfrac{y-3}{2}$ dall'equazione $y=2x+3$, quindi $f^{-1}(y)=\dfrac{y-3}{2}$. Nel simbolo $f^{-1}$, l'esponente $-1$ indica l'inversa. Il reciproco si scrive $\dfrac1{f(x)}$.
:::
