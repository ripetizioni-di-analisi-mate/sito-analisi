---
titolo: Funzioni, dominio e trasformazioni dei grafici
sommario: Dal dominio e dalla lettura del grafico alle composizioni, alle inverse e alle trasformazioni.
---

## Dal dato al valore della funzione

:::definizione{#valori titolo="Dominio, codominio e immagini"}
Una **funzione** $f\colon A\to B$ assegna a ogni elemento $x$ di $A$ esattamente un elemento $f(x)$ di $B$. $A$ è il *dominio*, cioè l'insieme dei dati ammessi. $B$ è il *codominio*, cioè l'insieme in cui si scelgono i risultati. Il valore $f(x)$ è l'**immagine** di $x$. L'insieme di tutte le immagini si indica con $f(A)$ ed è contenuto in $B$.
:::

:::esempio{titolo="Leggere una tabella in due direzioni"}
Siano $A=\{-2,0,2\}$ e $B=\{0,1,4,9\}$. La funzione $f(x)=x^2$ su $A$ è descritta dalla tabella seguente.

| $x$ | $-2$ | $0$ | $2$ |
|---|---|---|---|
| $f(x)$ | $4$ | $0$ | $4$ |

L'immagine di $-2$ è $4$ perché $(-2)^2=4$. Per trovare le *controimmagini* di $4$ si parte invece dalla seconda riga. Il valore $4$ compare sotto due ascisse, quindi l'equazione $f(x)=4$ ha due soluzioni in $A$. Poiché le sole ordinate della tabella sono $0$ e $4$, si ha $f(A)=\{0,4\}$. I numeri $1$ e $9$ appartengono al codominio e restano fuori dall'immagine.
:::

:::esempio{titolo="Sostituire un numero negativo"}
Per valutare $f(x)=x^2-3x+1$ in $x=-2$, ogni $x$ è sostituita con il numero $-2$. Si ottiene
$$
\begin{aligned}
f(-2)&=(-2)^2-3(-2)+1\\[4pt]
&=4+6+1\\[4pt]
&=11 .
\end{aligned}
$$
Il quadrato riguarda tutto il numero sostituito. Anche il fattore $-3$ moltiplica tutto il numero, quindi il termine di primo grado contribuisce con $+6$. Sul grafico il risultato si legge nel punto $(-2,11)$.
:::

:::definizione{#grafico titolo="Grafico e rette verticali"}
Per una funzione reale di variabile reale, il **grafico** è l'insieme delle coppie $(x,f(x))$ con $x\in A$. Fissata un'ascissa $u$, la retta verticale $x=u$ incontra il grafico una sola volta se $u$ appartiene al dominio. Se una verticale incontra una curva in due punti, la stessa ascissa ha due ordinate e la curva può descrivere soltanto una relazione.
:::

:::esempio{titolo="Un'ascissa con due ordinate"}
Nella circonferenza $x^2+y^2=4$, ponendo $x=0$ si ottiene $y^2=4$. La verticale $x=0$ incontra quindi la circonferenza in $(0,2)$ e $(0,-2)$. Se si limita la relazione a $y\geq 0$, per ogni $x\in[-2,2]$ resta la sola ordinata $y=\sqrt{4-x^2}$. La semicirconferenza superiore è perciò il grafico di una funzione.
:::

:::esempio{titolo="Il grafico di una funzione a tratti"}
Sia $f(x)=x+2$ per $-2\leq x<0$ e $f(x)=1-x$ per $0\leq x\leq2$. Il dominio è $[-2,2]$, perché i due intervalli coprono tutti i punti da $-2$ a $2$. La condizione del secondo tratto contiene $x=0$, quindi $f(0)=1$. Il primo tratto, usato soltanto per $x<0$, si avvicina invece al punto $(0,2)$. Nel grafico il punto $(0,2)$ si rappresenta con un cerchio vuoto e il punto $(0,1)$ con un punto pieno. In questo modo la verticale $x=0$ incontra il grafico una volta sola.

Per cercare le controimmagini di $1$ si risolve un'equazione per ciascun tratto. Nel primo si ottiene $x+2=1$, cioè $x=-1$, che appartiene a $[-2,0)$. Nel secondo si ottiene $1-x=1$, cioè $x=0$, che appartiene a $[0,2]$. L'insieme delle controimmagini è quindi $\{-1,0\}$.

::grafico{curve="t,t+2,-2,0;t,1-t,0,2" legenda="y=x+2;y=1-x" xmin=-3 xmax=3 ymin=-2 ymax=3 punti="-2,0;0,2,vuoto;0,1;2,-1;-1,1" segmenti="-2,1,2,1" titolo="Nell'ascissa $0$ vale il tratto che contiene l'estremo."}

:::

## Il dominio reale di una formula

:::teorema{#dominio titolo="Condizioni di esistenza"}
Se si cerca il dominio reale più ampio di una formula, occorre che ogni operazione indicata sia definita. Un denominatore deve essere diverso da zero, un radicando di indice pari deve essere maggiore o uguale a zero e l'argomento di un logaritmo deve essere strettamente positivo. Quando compaiono più condizioni, il dominio è l'**intersezione** dei loro insiemi di soluzioni.

Un dominio assegnato dall'enunciato può essere più piccolo. Per esempio, $s\mapsto 3s+2$ è calcolabile per ogni $s$ reale, ma in un problema in cui $s$ conta i giorni trascorsi dall'inizio di una prova, i valori ammessi potrebbero essere soltanto gli interi da $0$ a $7$.
:::

:::esempio{titolo="Radice al numeratore"}
Per $f(x)=\dfrac{\sqrt{x-1}}{x-3}$, il radicando deve essere non negativo e il denominatore deve essere diverso da zero. Le due richieste valgono insieme.
$$
\begin{cases}
x-1\geq 0\\
x-3\neq 0
\end{cases}
\qquad\Longrightarrow\qquad
D_f=[1,3)\cup(3,+\infty).
$$
In $x=1$ il numeratore è zero e il denominatore vale $-2$, quindi $1$ appartiene al dominio. Il punto $3$ si trova nell'intervallo ammesso dalla radice, ma è escluso perché annulla il denominatore.
:::

:::esempio{titolo="Radice al denominatore"}
Per $g(x)=\dfrac{1}{\sqrt{5-x}}$, la radice deve esistere e assumere un valore diverso da zero. Poiché la radice quadrata di un numero non negativo è zero soltanto quando il numero è zero, le due condizioni equivalgono a $5-x>0$. Si ottiene dunque $D_g=(-\infty,5)$.

Per $h(x)=\sqrt{\dfrac{x-2}{x+1}}$ è invece l'intero quoziente a stare sotto il radicale. È definito per $x\neq-1$ ed è non negativo quando i fattori $x-2$ e $x+1$ hanno lo stesso segno oppure il numeratore è nullo. Perciò $D_h=(-\infty,-1)\cup[2,+\infty)$.
:::

:::attenzione{titolo="Una semplificazione può nascondere un punto escluso"}
Per $x\neq 2$ vale $\dfrac{x^2-4}{x-2}=x+2$. Nella formula iniziale il numero $2$ annulla il denominatore, quindi resta escluso dopo la semplificazione. La formula $x+2$ consente di calcolare i valori nei punti del dominio e di disegnare il grafico. Il punto $(2,4)$ va lasciato vuoto.

::grafico{f="x+2" xmin=-4 xmax=5 ymin=-3 ymax=8 punti="2,4,vuoto" titolo="Il punto $(2,4)$ è escluso dal grafico della frazione."}

:::

## Zeri, intersezioni e segno

:::definizione{#zeri titolo="Intersezioni con gli assi"}
Uno **zero** di $f$ è un numero $x$ del dominio per cui $f(x)=0$. Il grafico incontra l'asse $x$ nel punto $(x,0)$ corrispondente. Se $0\in D_f$, la sua intersezione con l'asse $y$ è $(0,f(0))$. Per studiare il **segno** si cercano le ascisse per cui $f(x)>0$, $f(x)=0$ oppure $f(x)<0$. Sul grafico sono rispettivamente i punti sopra l'asse orizzontale, su di esso e sotto di esso.
:::

:::esempio{titolo="Segno di una funzione razionale"}
Si consideri $f(x)=\dfrac{x-2}{x+1}$. Il denominatore è nullo in $-1$, quindi $D_f=\mathbb R\setminus\{-1\}$. Il numeratore si annulla in $2$, che appartiene al dominio. Si ottiene lo zero $2$. Sostituendo $x=0$ si trova $f(0)=-2$, quindi le intersezioni con gli assi sono $(2,0)$ e $(0,-2)$.

| Intervallo | $x-2$ | $x+1$ | $f(x)$ |
|---|---|---|---|
| $(-\infty,-1)$ | $-$ | $-$ | $+$ |
| $(-1,2)$ | $-$ | $+$ | $-$ |
| $(2,+\infty)$ | $+$ | $+$ | $+$ |

Il quoziente è positivo dove il numeratore e il denominatore hanno lo stesso segno. Per $f(x)\geq 0$ si include $2$, che rende il quoziente nullo. Il numero $-1$ resta escluso. L'insieme delle soluzioni è $(-\infty,-1)\cup[2,+\infty)$.

::grafico{f="(x-2)/(x+1)" xmin=-6 xmax=6 ymin=-6 ymax=6 punti="2,0;0,-2" asintoti="x=-1" titolo="Il quoziente è negativo tra l'ascissa esclusa e lo zero."}

:::

:::osservazione{titolo="Il grafico può toccare l'asse"}
Per $f(x)=(x-2)^2$, l'equazione $f(x)=0$ ha la sola soluzione $2$. Poiché il quadrato è positivo per ogni $x\neq 2$, il grafico raggiunge l'asse orizzontale in $(2,0)$ e rimane sopra l'asse ai due lati del punto. Il passaggio per uno zero comporta un cambio di segno soltanto se i valori hanno segni opposti ai suoi due lati.
:::

## Simmetrie rispetto all'asse e all'origine

:::definizione{#simmetrie titolo="Funzioni pari e funzioni dispari"}
Un insieme $D$ è simmetrico rispetto a $0$ se con ogni $x$ contiene anche $-x$. Su un dominio simmetrico una funzione è **pari** se $f(-x)=f(x)$ per ogni $x\in D$. Il punto $(-x,f(x))$ è il riflesso di $(x,f(x))$ rispetto all'asse $y$.

Una funzione è **dispari** se $f(-x)=-f(x)$ per ogni $x\in D$. Il punto $(-x,-f(x))$ è il simmetrico di $(x,f(x))$ rispetto all'origine. Se $0$ appartiene al dominio di una funzione dispari, allora $f(0)=-f(0)$ e quindi $f(0)=0$.
:::

:::esempio{titolo="La somma cambia la simmetria"}
Per $f(x)=x^3-x$ su $\mathbb R$ si ha
$$
\begin{aligned}
f(-x)&=(-x)^3-(-x)\\[4pt]
&=-x^3+x\\[4pt]
&=-(x^3-x).
\end{aligned}
$$
La funzione è quindi dispari. Per $g(x)=x^3-x+2$, si hanno invece $g(1)=2$, $g(-1)=2$, $g(2)=8$ e $g(-2)=-4$. La prima coppia esclude la disparità e la seconda esclude la parità. Una sola coppia di valori uguali, come quella in $\pm 1$, non basta per dimostrare che tutta la funzione è pari.
:::

:::attenzione{titolo="La simmetria richiede anche il dominio"}
Sia $f(x)=x^2$ con $D=[0,2]$. Per esempio $1\in D$ e $-1\notin D$, quindi $D$ non è simmetrico rispetto a $0$. La funzione assegnata non è pari, anche se la formula $x^2$ soddisfa $(-x)^2=x^2$ quando è considerata su tutto $\mathbb R$.
:::

## Comporre due funzioni

:::definizione{#composizione titolo="L'uscita della prima funzione diventa l'ingresso della seconda"}
Nella **composizione** $g\circ f$ si calcola prima $f(x)$ e poi si usa quel valore come argomento di $g$. Perciò
$$
(g\circ f)(x)=g(f(x)),
\qquad
D_{g\circ f}=\{x\in D_f\mid f(x)\in D_g\}.
$$
L'appartenenza a $D_f$ garantisce che esista il valore intermedio. L'appartenenza di $f(x)$ a $D_g$ garantisce che da quel valore si possa proseguire. Cambiare l'ordine può cambiare sia la formula sia il dominio.
:::

:::esempio{titolo="Una radice prima e dopo la traslazione"}
Siano $f(x)=x-1$ e $g(x)=\sqrt{x}$. Nella composizione $g\circ f$ si pone sotto radice il valore $x-1$, quindi $x-1\geq 0$ e si ottiene $\sqrt{x-1}$ per $x\in[1,+\infty)$. Nella composizione $f\circ g$ si calcola prima $\sqrt{x}$, quindi $x\geq 0$. Si sottrae poi $1$ e si ottiene $\sqrt{x}-1$ per $x\in[0,+\infty)$.
:::

:::esempio{titolo="Composizione con una condizione di secondo grado"}
Siano $f(x)=x^2-4$ e $g(t)=\sqrt{t}$. L'argomento di $g$ è $f(x)$, quindi $x^2-4\geq 0$. Poiché $x^2\geq 4$ equivale a $|x|\geq 2$, si ottiene
$$
(g\circ f)(x)=\sqrt{x^2-4},
\qquad
D_{g\circ f}=(-\infty,-2]\cup[2,+\infty).
$$
I due estremi $\pm 2$ sono ammessi. In ciascuno di essi la funzione interna restituisce $0$ e la funzione esterna restituisce $\sqrt{0}=0$.
:::

:::attenzione{titolo="Il quadrato esterno non estende il dominio"}
Se $f(x)=\sqrt{x}$ e $g(t)=t^2$, allora $(g\circ f)(x)=(\sqrt{x})^2=x$ solo per $x\geq 0$. Per $x=-1$ il valore intermedio $f(-1)$ non esiste nei reali, quindi la composizione in quell'ascissa non è definita.
:::

## Risalire all'argomento con la funzione inversa

:::definizione{#iniettivita titolo="Funzione iniettiva"}
Una funzione $f\colon A\to B$ è **iniettiva** se a ingressi distinti corrispondono immagini distinte. Equivalentemente, da $f(x_1)=f(x_2)$ segue $x_1=x_2$. Sul grafico, ogni retta orizzontale $y=v$ seleziona le controimmagini di $v$. L'iniettività equivale quindi alla condizione che ogni orizzontale incontri il grafico al più una volta.
:::

::::teorema{#inversa titolo="Inversa sul proprio insieme immagine"}
Se $f$ è iniettiva, per ogni $y\in f(A)$ si può definire $f^{-1}(y)$ come l'unico $x\in A$ tale che $f(x)=y$. Il dominio dell'**inversa** è $f(A)$ e la sua immagine è $A$. I grafici di $f$ e $f^{-1}$ si ottengono l'uno dall'altro scambiando ascissa e ordinata, cioè per riflessione rispetto alla retta $y=x$.

:::dimostrazione
Per ogni $y$ dell'immagine esiste un $x\in A$ con $f(x)=y$ per definizione di immagine. L'iniettività rende questo $x$ unico, dunque l'assegnazione $y\mapsto x$ è una funzione. Se $(x,y)$ appartiene al grafico di $f$, allora $x=f^{-1}(y)$ e $(y,x)$ appartiene al grafico dell'inversa.
:::
::::

:::esempio{titolo="Inversa di una funzione affine"}
Per $f(x)=2x+3$ su $\mathbb R$, fissata un'ordinata $y$ si ricava l'ascissa corrispondente.
$$
y=2x+3\quad\Longleftrightarrow\quad
2x=y-3\quad\Longleftrightarrow\quad x=\frac{y-3}{2}.
$$
Si può dividere per $2$ perché è diverso da zero. Ogni $y\in\mathbb R$ dà una sola ascissa, quindi $f^{-1}(y)=\dfrac{y-3}{2}$ su $\mathbb R$. Il controllo $(f\circ f^{-1})(y)=2\cdot\dfrac{y-3}{2}+3=y$ mostra che sostituire l'ascissa trovata restituisce proprio l'ordinata di partenza.
:::

:::esempio{titolo="Come si sceglie il segno della radice"}
Per $f(x)=x^2$ su $\mathbb R$, i valori $-2$ e $2$ danno la stessa ordinata $4$. Sul dominio ristretto $[0,+\infty)$, l'equazione $x^2=y$ richiede $x\geq 0$ e quindi restituisce $x=\sqrt y$. Su $(-\infty,0]$ si richiede invece $x\leq 0$ e l'inversa è $y\mapsto-\sqrt y$. In entrambi i casi il dominio dell'inversa è $[0,+\infty)$, perché le due restrizioni hanno la stessa immagine.

::grafico{curve="t,t^2,0,3;t^2,t,0,3" f="x" legenda="y=x;y=x^2,\ x\geq0;y=\sqrt{x}" xmin=-1 xmax=7 ymin=-1 ymax=7 uguale=1 punti="2,4,pieno,P;4,2,pieno,Q" titolo="La riflessione rispetto a $y=x$ trasforma $(2,4)$ in $(4,2)$."}

:::

## Spostare e riflettere un grafico

::::teorema{#traslazioni titolo="Traslazioni orizzontali e verticali"}
Per $g(x)=f(x-h)+k$, ogni punto $(u,f(u))$ del grafico di $f$ corrisponde al punto $(u+h,f(u)+k)$ del grafico di $g$. Il dominio si sposta orizzontalmente di $h$ e l'immagine verticalmente di $k$.

:::dimostrazione
Affinché $g$ usi il valore $f(u)$, il suo argomento interno deve essere $u$. Dall'equazione $x-h=u$ si ottiene $x=u+h$. In quell'ascissa l'ordinata è $g(u+h)=f(u)+k$. Questo vale per ogni $u$ del dominio iniziale e individua tutti i punti del nuovo grafico.
:::
::::

:::esempio{titolo="Spostare il vertice e un secondo punto"}
Sia $f(x)=x^2$ e sia $g(x)=(x-2)^2+1$. Poiché $g(x)=f(x-2)+1$, si aggiunge $2$ alle ascisse e $1$ alle ordinate. Il vertice $(0,0)$ diventa $(2,1)$ e $(1,1)$ diventa $(3,2)$. Sostituendo si verifica che $g(3)=(3-2)^2+1=2$.

::grafico{f="x^2;(x-2)^2+1" xmin=-2 xmax=5 ymin=-1 ymax=8 punti="0,0,pieno,V;2,1,pieno,V';1,1,pieno,A;3,2,pieno,A'" titolo="Due punti corrispondenti subiscono lo stesso spostamento."}

:::

:::definizione{#riflessioni titolo="Riflessioni e scala verticale"}
Nel passaggio da $f(x)$ a $-f(x)$, ogni punto $(u,v)$ diventa $(u,-v)$, quindi il grafico è riflesso rispetto all'asse $x$. Nel passaggio a $f(-x)$ il punto diventa $(-u,v)$, perché $-(-u)=u$. La riflessione avviene allora rispetto all'asse $y$. Con $g(x)=a f(x)$, dove $a>0$, le ascisse restano uguali e le ordinate sono moltiplicate per $a$.
:::

:::esempio{titolo="Trasformare un grafico senza formula esplicita"}
Se il grafico di $f$ passa per $P(3,-2)$, si può trovare il punto corrispondente su $g(x)=-2f(x+1)+4$. Per riottenere l'ingresso $3$ si risolve $x+1=3$, quindi la nuova ascissa è $2$. L'ordinata vale $-2(-2)+4=8$, quindi il punto è $(2,8)$. La trasformazione richiede solo le coordinate di $P$.
:::

:::esempio{titolo="Una scala orizzontale"}
Per $g(x)=f(2x)$, l'ascissa che restituisce l'ordinata $f(u)$ si trova da $2x=u$, quindi è $x=\dfrac{u}{2}$. Ogni punto $(u,f(u))$ si sposta a $\left(\dfrac{u}{2},f(u)\right)$. Per esempio, se $f$ ha dominio $[-2,4]$, per $g$ si richiede $-2\leq2x\leq4$, quindi $D_g=[-1,2]$. L'insieme immagine resta lo stesso perché ogni ingresso $u$ di $f$ si ottiene da un ingresso $x=\dfrac{u}{2}$ di $g$. Con $2f(x)$ si raddoppierebbero invece le ordinate, lasciando invariato il dominio.
:::

## Immagine, intervalli di monotonia ed estremi

:::definizione{#immagine titolo="Valori assunti e loro ordine"}
L'**immagine** di $f$ su un insieme $D$ è $f(D)=\{f(x)\mid x\in D\}$. Il minimo, quando esiste, è il più piccolo valore dell'immagine. Il massimo, quando esiste, è il più grande. Una funzione è **strettamente crescente** su un intervallo se, per ogni $x_1<x_2$ nell'intervallo, vale $f(x_1)<f(x_2)$. È strettamente decrescente se vale $f(x_1)>f(x_2)$.
:::

:::esempio{titolo="Immagine di una parabola ristretta"}
Si consideri $f(x)=(x-1)^2$ per $x\in[0,3)$. Il valore è il quadrato della distanza di $x$ da $1$. Da $0$ a $1$ tale distanza diminuisce, quindi $f$ è strettamente decrescente su $[0,1]$. Da $1$ a $3$ la distanza cresce, quindi $f$ è strettamente crescente su $[1,3)$. Il minimo è $0$ e si raggiunge in $x=1$.

Per ogni $y\in[0,4)$, il numero $1+\sqrt y$ appartiene a $[1,3)$ e soddisfa $f(1+\sqrt y)=y$. Per tutte le ascisse ammesse la distanza da $1$ è minore di $2$, quindi l'immagine è $[0,4)$. Il valore $4$ è il limite superiore dell'immagine e il massimo non esiste.

::grafico{curve="t,(t-1)^2,0,3" legenda="y=(x-1)^2,\ 0\leq x<3" xmin=-1 xmax=4 ymin=-1 ymax=5 punti="0,1;1,0;3,4,vuoto" titolo="La quota $0$ è raggiunta nel vertice, mentre $4$ resta esclusa."}

:::

:::esempio{titolo="Un massimo su un intervallo di tempo"}
L'altezza $H(t)=9-(t-2)^2$ di un oggetto, in metri, è osservata per $t\in[0,4]$, con $t$ in secondi. Poiché $0\leq(t-2)^2\leq 4$, risulta $5\leq H(t)\leq 9$. In $t=2$ si annulla il quadrato e si raggiunge $9$. Agli estremi $0$ e $4$ il quadrato vale $4$ e si raggiunge $5$. Ogni altezza $y$ tra $5$ e $9$ è ottenuta scegliendo $t=2+\sqrt{9-y}\in[2,4]$. L'immagine è quindi $[5,9]$.
:::

:::osservazione{titolo="La monotonia può garantire l'iniettività"}
Se $f$ è strettamente crescente o strettamente decrescente su un intervallo, per $x_1<x_2$ le immagini sono diverse. Quindi $f$ è iniettiva su quell'intervallo. Per $f(x)=(x-1)^2$ ciò vale separatamente a sinistra e a destra di $1$. I due intervalli danno due inverse diverse, perché la prima restituisce $1-\sqrt y$ e la seconda $1+\sqrt y$.
:::
