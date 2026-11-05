---
titolo: Logaritmi, equazioni e disequazioni logaritmiche
sommario: Definizione e proprietà dei logaritmi, grafici e domini, cambio di base, equazioni, disequazioni e modelli con scale logaritmiche.
---

## Definizione di logaritmo

:::definizione{#definizione titolo="Logaritmo di un numero positivo"}
Siano $a>0$, $a\neq1$ e $b>0$. Il **logaritmo in base $a$ di $b$** è l'unico esponente $x$ per cui $a^x=b$. Si scrive
$$
\log_a b=x\iff a^x=b.
$$
Per esempio $\log_2 8=3$, perché $2^3=8$, e $\log_3\dfrac19=-2$, perché $3^{-2}=\dfrac19$. L'argomento del logaritmo è positivo; il valore del logaritmo può essere positivo, nullo o negativo.

Il logaritmo naturale ha base $e$ e si indica con $\ln$. Il logaritmo decimale ha base $10$ e in questo corso si scrive $\log_{10}$ per evitare ambiguità. Dalla definizione seguono $\log_a1=0$, $\log_a a=1$, $a^{\log_a b}=b$ e $\log_a(a^x)=x$.
:::

## Proprietà e condizioni

::::teorema{#proprieta titolo="Prodotto, rapporto e potenza"}
Per $u,v>0$, $a>0$, $a\neq1$ e $r$ reale valgono
$$
\log_a(uv)=\log_a u+\log_a v,\qquad
\log_a\frac uv=\log_a u-\log_a v,\qquad
\log_a(u^r)=r\log_a u.
$$
:::dimostrazione
Se $s=\log_a u$ e $t=\log_a v$, allora $u=a^s$ e $v=a^t$. Poiché $uv=a^{s+t}$, il logaritmo del prodotto è $s+t$. Analogamente $\dfrac uv=a^{s-t}$ e $u^r=a^{rs}$, da cui seguono le altre formule.
:::
::::

:::esempio
Si ha $\log_2 12-\log_2 3=\log_2 4=2$. Inoltre, per $x\neq0$, $\ln(x^2)=2\ln|x|$, perché $|x|>0$ e $x^2=|x|^2$. La scrittura $2\ln x$ sarebbe definita soltanto per $x>0$.
:::

:::attenzione
Il logaritmo di una somma non si scompone come il logaritmo di un prodotto. Per esempio $\log_2(2+6)=\log_2 8=3$, mentre $\log_2 2+\log_2 6=\log_2 12$. I due risultati sono diversi perché $8\neq12$ e il logaritmo è iniettivo. Le proprietà valgono nelle condizioni sugli argomenti dichiarate nell'enunciato.
:::

## Cambio di base

:::teorema{#base titolo="Formula del cambio di base"}
Se $a,c>0$, $a,c\neq1$ e $b>0$, allora
$$
\log_a b=\frac{\log_c b}{\log_c a}.
$$
Infatti, posto $x=\log_a b$, dall'uguaglianza $a^x=b$ si ottiene $x\log_c a=\log_c b$. Il denominatore è diverso da zero perché $a\neq1$. Per esempio $\log_4 8=\dfrac{\log_2 8}{\log_2 4}=\dfrac32$.

Con $c=e$ si ha $\log_a b=\dfrac{\ln b}{\ln a}$. Inoltre $\log_a b=\dfrac1{\log_b a}$ se anche $b\neq1$.
:::

## Grafico e monotonia

:::definizione{#funzione titolo="Funzione logaritmica"}
La funzione $y=\log_a x$ ha dominio $(0,+\infty)$, immagine $\mathbb R$ e passa per $(1,0)$. È crescente per $a>1$ e decrescente per $0<a<1$. È l'inversa di $y=a^x$, quindi i due grafici sono simmetrici rispetto alla retta $y=x$. L'asse $y$ è un asintoto verticale.

Per $a>1$ il logaritmo è negativo tra $0$ e $1$ e positivo per $x>1$. Per $0<a<1$ i segni sono invertiti. Per esempio $\log_{\frac12}4=-2$.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=0 xmax=6 ymin=-4 ymax=4 legenda="\log_2 x;\log_{\frac12}x" titolo="Logaritmi con base maggiore o minore di $1$"}
:::

## Domini delle espressioni logaritmiche

:::teorema{#dominio titolo="Condizioni di esistenza"}
Per ogni logaritmo si richiede l'argomento strettamente positivo. Se la base dipende da $x$, deve anche essere positiva e diversa da $1$. Eventuali denominatori restano diversi da zero.

Per $f(x)=\dfrac{\ln(x+2)}{\ln(x-1)}$ si impongono insieme
$$
\begin{cases}x+2>0,\\x-1>0,\\\ln(x-1)\neq0.\end{cases}
$$
L'ultima condizione equivale a $x-1\neq1$, quindi il dominio è $(1,2)\cup(2,+\infty)$. Per $g(x)=\log_x(x+1)$ il dominio è invece $(0,1)\cup(1,+\infty)$, perché la base impone $x>0$, $x\neq1$ e queste condizioni rendono positivo anche $x+1$.
:::

## Equazioni logaritmiche

:::teorema{#equazioni titolo="Uguaglianza dei logaritmi"}
Se la base è positiva e diversa da $1$, la funzione logaritmica è iniettiva. Nel dominio comune,
$$
\log_a f(x)=\log_a g(x)\iff f(x)=g(x).
$$
Per $\log_2(x-1)=3$ il dominio è $x>1$ e l'equazione equivale a $x-1=8$, quindi $x=9$. Per $\ln(x-1)+\ln(x+1)=\ln8$ il dominio è $x>1$. La proprietà del prodotto porta a $x^2-1=8$, quindi i candidati sono $\pm3$, ma soltanto $3$ appartiene al dominio iniziale.
:::

:::esempio
Per $(\log_2x)^2-3\log_2x+2=0$ si pone $t=\log_2x$, con $x>0$. Si ottiene $(t-1)(t-2)=0$, dunque $\log_2x=1$ oppure $\log_2x=2$. Le soluzioni sono $x=2$ e $x=4$, entrambe positive.
:::

## Disequazioni logaritmiche

:::teorema{#disequazioni titolo="Confronto degli argomenti"}
Per $a>1$ i logaritmi conservano il verso, quindi $\log_a f(x)>\log_a g(x)$ equivale a $f(x)>g(x)$ nel dominio comune. Per $0<a<1$ il verso si inverte.

Per esempio $\log_2(x-1)\leq3$ richiede $x>1$ e dà $x-1\leq8$, quindi $1<x\leq9$. Per $\log_{\frac12}(x+1)\geq-2$ si ha $x>-1$ e $x+1\leq4$, quindi $-1<x\leq3$. Il valore $x=-1$ resta escluso perché annullerebbe l'argomento.

Un prodotto di logaritmi si studia con una tabella dei segni. Per $\ln x\,\ln(x-1)\geq0$, il dominio è $x>1$, quindi $\ln x>0$. Resta $\ln(x-1)\geq0$, da cui $x\geq2$.
:::

## Scale logaritmiche e modelli

:::esempio{#modelli titolo="Ricavare un tempo da un modello esponenziale"}
Una quantità segue $N(t)=200\cdot3^t$. Per trovare quando raggiunge $1000$ si risolve $3^t=5$, dunque
$$
t=\log_3 5=\frac{\ln5}{\ln3}\approx1{,}465.
$$
Il tempo ha l'unità scelta per il modello. Se sono ammessi solo tempi interi, il primo istante con quantità almeno $1000$ è $t=2$.
:::

:::definizione{#scale titolo="Rapporti e differenze su una scala logaritmica"}
Una scala $L=\log_a\dfrac Q{Q_0}$, con $Q,Q_0>0$, trasforma rapporti moltiplicativi in differenze. La quantità $\dfrac Q{Q_0}$ è priva di unità. Con $a=10$, moltiplicare $Q$ per $100$ aumenta $L$ di $2$, perché $\log_{10}100=2$.

Per esempio, se $Q=1000Q_0$, si ha $L=3$. Se il modello usa $L=10\log_{10}\dfrac Q{Q_0}$, lo stesso rapporto dà $L=30$. Il coefficiente davanti al logaritmo fa parte della definizione della scala e va mantenuto nel calcolo.
:::
