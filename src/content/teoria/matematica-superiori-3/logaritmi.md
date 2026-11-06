---
titolo: Logaritmi, equazioni e disequazioni
sommario: 'Logaritmi: definizioni, metodi, esempi e condizioni da usare negli esercizi del terzo anno.'
---

## Definizione

:::definizione{#definizione titolo="L'esponente richiesto"}
Per $a>0$, $a\neq1$ e $b>0$, il **logaritmo** $\log_a b$ è l'unico numero $x$ per cui $a^x=b$. Per esempio $\log_2 8=3$ e $\log_3\dfrac19=-2$. L'argomento è positivo, mentre il valore del logaritmo può avere qualunque segno. Si scrive $\ln$ per la base $e$ e $\log_{10}$ per la base dieci.
:::

## Proprietà

:::teorema{#proprieta titolo="Prodotti, rapporti e potenze"}
Per $u,v>0$ e base ammissibile, $\log_a(uv)=\log_a u+\log_a v$, $\log_a\dfrac uv=\log_a u-\log_a v$ e $\log_a(u^r)=r\log_a u$. Le proprietà seguono da quelle delle potenze. Per esempio $\log_2 24-\log_2 3=3$. La somma $\log_a(u+v)$ non ha una scomposizione analoga. Per esempio $\log_2(2+6)=3$, mentre $\log_2 2+\log_2 6=\log_2 12$, che è diverso da $3$.
:::

## Cambio di base

:::teorema{#base titolo="Rapporto di due logaritmi"}
Per basi $a,c>0$ diverse da $1$ e $b>0$, $\log_a b=\dfrac{\log_c b}{\log_c a}$. Infatti $a^x=b$ implica $x\log_c a=\log_c b$ e $\log_c a\neq0$. Per esempio $\log_4 8=\dfrac32$. La formula permette di calcolare logaritmi in una base qualsiasi con il tasto $\ln$ della calcolatrice.
:::

## Dominio

:::teorema{#dominio titolo="Argomento strettamente positivo"}
Per $\log_a f(x)$ si impone $f(x)>0$. Se anche la base dipende da $x$, deve essere positiva e diversa da $1$. Per $\ln\dfrac{x-1}{x+2}$ si studia $\dfrac{x-1}{x+2}>0$, ottenendo $(-\infty,-2)\cup(1,+\infty)$. Gli estremi sono entrambi esclusi, perché in uno manca il denominatore e nell'altro l'argomento è zero.
:::

## Grafico e inversa

:::definizione{#funzione titolo="Inversa dell'esponenziale"}
La funzione $y=\log_a x$ ha dominio $(0,+\infty)$, immagine $\mathbb R$ e passa per $(1,0)$. È crescente per $a>1$, decrescente per $0<a<1$. Il grafico è simmetrico a quello di $y=a^x$ rispetto a $y=x$. L'asse $y$ è un asintoto verticale.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" xmin=0 xmax=6 ymin=-4 ymax=4 legenda="\log_2 x;\log_{\frac12}x" titolo="Il logaritmo può assumere valori negativi con argomento positivo"}
:::

## Equazioni

:::teorema{#equazioni titolo="Iniettività nel dominio"}
Per base ammissibile, $\log_a f(x)=\log_a g(x)$ equivale a $f(x)=g(x)$ nel dominio comune. Per $\log_2(x-1)=3$ si richiede $x>1$, quindi $x-1=8$ e $x=9$. In $\ln(x-1)+\ln(x+1)=\ln8$, il dominio è $x>1$. Il prodotto dà $x^2-1=8$, ma delle radici $\pm3$ si conserva solo $3$.
:::

## Disequazioni

:::teorema{#disequazioni titolo="Monotonia e dominio insieme"}
Per $a>1$ il confronto tra logaritmi conserva il verso; per $0<a<1$ lo inverte. In $\log_2(x-1)\leq3$ le condizioni sono $\begin{cases}x>1,\\x-1\leq8,\end{cases}$ quindi $1<x\leq9$. In $\log_{\frac12}(x+1)\geq-2$ si ottiene $-1<x\leq3$. L'estremo in cui l'argomento è zero resta escluso.
:::

## Ricavare un tempo

:::esempio{#modelli titolo="Soglia in una crescita esponenziale"}
Se $N(t)=100\cdot2^t$, la soglia $500$ si raggiunge quando $2^t=5$, cioè $t=\log_2 5=\dfrac{\ln5}{\ln2}\approx2{,}322$. Se il modello viene osservato solo a tempi interi, il primo tempo con $N(t)\geq500$ è $t=3$. La soluzione reale dell'equazione e il primo istante intero rispondono a due richieste diverse.
:::
