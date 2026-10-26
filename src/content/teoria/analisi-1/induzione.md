---
titolo: Induzione e binomio di Newton
sommario: Il principio di induzione con le prime dimostrazioni per somme e disuguaglianze, il fattoriale, i coefficienti binomiali e la formula del binomio di Newton.
---

## Il principio di induzione

:::teorema{#induzione titolo="Principio di induzione"}
Sia $P(n)$ una proposizione che dipende da un numero naturale $n$ e sia $n_0 \in \mathbb{N}$. Se
$$
\begin{cases}
P(n_0) \ \text{è vera} \\[4pt]
\text{per ogni } n \geq n_0, \ \text{se } P(n) \ \text{è vera allora } P(n+1) \ \text{è vera}
\end{cases}
$$
allora $P(n)$ è vera per ogni $n \geq n_0$. La prima condizione si chiama base dell'induzione, la seconda passo induttivo; nel passo, la proposizione $P(n)$ che si suppone vera si chiama ipotesi induttiva. Il principio si assume come proprietà dell'insieme $\mathbb{N}$. Serve per dimostrare identità, disuguaglianze e proprietà di divisibilità che dipendono da un indice naturale, e ogni dimostrazione per induzione si organizza negli stessi due punti: verifica della base e verifica del passo. Le prime applicazioni sono la formula della somma dei primi $n$ naturali e la disuguaglianza di Bernoulli.
:::

:::attenzione
Il passo induttivo da solo non basta: senza la base non si conclude nulla. Per la proposizione $P(n)$: "$n \geq n + 1$" il passo è verificato, perché sommando $1$ ai due membri da $n \geq n + 1$ segue $n + 1 \geq n + 2$; la base è falsa per ogni scelta di $n_0$, e infatti nessuna $P(n)$ è vera.
:::

## La somma dei primi n naturali

::::teorema{#somma-dei-primi-n titolo="Somma dei primi n naturali"}
Per ogni $n \geq 1$:
$$
1 + 2 + \cdots + n = \sum_{k=1}^{n} k = \frac{n(n+1)}{2} .
$$
È il primo esempio di dimostrazione per induzione e la formula ricompare nel calcolo di somme e nel capitolo sulle serie. Per esempio, la somma dei primi $100$ naturali vale $\dfrac{100 \cdot 101}{2} = 5050$.

:::dimostrazione
Base ($n = 1$): il primo membro vale $1$ e il secondo $\dfrac{1 \cdot 2}{2} = 1$, quindi $P(1)$ è vera. Passo: sia vera $P(n)$, cioè $\displaystyle\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$. Allora
$$
\sum_{k=1}^{n+1} k
= \sum_{k=1}^{n} k + (n+1)
= \frac{n(n+1)}{2} + (n+1)
= (n+1)\left( \frac{n}{2} + 1 \right)
= \frac{(n+1)(n+2)}{2} ,
$$
che è la formula con $n + 1$ al posto di $n$. Quindi $P(n)$ implica $P(n+1)$ e, per il principio di induzione, la formula vale per ogni $n \geq 1$.
:::
::::

## La disuguaglianza di Bernoulli

::::teorema{#bernoulli titolo="Disuguaglianza di Bernoulli"}
Per ogni numero reale $x \geq -1$ e ogni $n \in \mathbb{N}$:
$$
(1 + x)^n \geq 1 + nx .
$$
La disuguaglianza stima dal basso una potenza con un'espressione di primo grado in $n$, molto più semplice da controllare. Con $x = 1$ dà $2^n \geq 1 + n$ per ogni $n$. Si usa nello studio della successione geometrica e nella costruzione del numero $e$; si rimanda al capitolo sulle successioni.

:::dimostrazione
Si procede per induzione su $n$, con $x \geq -1$ fissato. Base ($n = 0$): $(1 + x)^0 = 1$ e $1 + 0 \cdot x = 1$, quindi la disuguaglianza vale con l'uguale. Passo: sia $(1 + x)^n \geq 1 + nx$. Poiché $x \geq -1$, il fattore $1 + x$ è non negativo, quindi moltiplicando i due membri dell'ipotesi induttiva per $1 + x$ il verso non cambia:
$$
(1 + x)^{n+1}
= (1 + x)^n (1 + x)
\geq (1 + nx)(1 + x)
= 1 + (n+1)x + nx^2
\geq 1 + (n+1)x ,
$$
dato che $nx^2 \geq 0$. Per il principio di induzione la disuguaglianza vale per ogni $n$. L'ipotesi $x \geq -1$ è usata nel passo: garantisce che la moltiplicazione per $1 + x$ conservi il verso della disuguaglianza.
:::
::::

## Il fattoriale

:::definizione{#fattoriale titolo="Fattoriale"}
Per $n \geq 1$ il fattoriale di $n$ è il prodotto dei naturali da $1$ a $n$:
$$
n! = n \cdot (n-1) \cdots 2 \cdot 1, \qquad 0! = 1 .
$$
Vale la formula ricorsiva $(n+1)! = (n+1) \cdot n!$, e la scelta $0! = 1$ la rende valida anche per $n = 0$, oltre a dare senso alle formule dei coefficienti binomiali. I primi valori sono $1! = 1$, $2! = 2$, $3! = 6$, $4! = 24$, $5! = 120$. Il fattoriale conta i modi di ordinare $n$ oggetti distinti e cresce molto rapidamente: $10! = 3628800$. Nei calcoli i fattoriali si semplificano con la formula ricorsiva, per esempio $\dfrac{10!}{8!} = 10 \cdot 9 = 90$.
:::

## I coefficienti binomiali

:::definizione{#coefficiente-binomiale titolo="Coefficiente binomiale"}
Per $n, k \in \mathbb{N}$ con $0 \leq k \leq n$:
$$
\binom{n}{k} = \frac{n!}{k!\,(n-k)!} .
$$
Il coefficiente binomiale conta i sottoinsiemi di $k$ elementi di un insieme di $n$ elementi, perciò è sempre un numero naturale. Nei calcoli conviene semplificare i fattoriali prima di moltiplicare:
$$
\binom{5}{2} = \frac{5!}{2!\,3!} = \frac{5 \cdot 4}{2} = 10 .
$$
:::

:::teorema{#proprieta-binomiali titolo="Proprietà dei coefficienti binomiali"}
Per $0 \leq k \leq n$:
$$
\binom{n}{0} = \binom{n}{n} = 1, \qquad
\binom{n}{k} = \binom{n}{n-k}, \qquad
\binom{n}{k} + \binom{n}{k+1} = \binom{n+1}{k+1} \quad (k \leq n - 1).
$$
Le prime due proprietà seguono dalla definizione, poiché scambiare $k$ con $n - k$ lascia invariato il denominatore $k!\,(n-k)!$. La terza è la formula di Stifel e si verifica riducendo le due frazioni allo stesso denominatore $(k+1)!\,(n-k)!$. La formula di Stifel genera il triangolo di Tartaglia, nel quale ogni coefficiente è la somma dei due coefficienti sopra di esso, e interviene nel passo induttivo della dimostrazione del binomio di Newton. Per esempio $\dbinom{4}{1} + \dbinom{4}{2} = 4 + 6 = 10 = \dbinom{5}{2}$.
:::

## Il binomio di Newton

:::teorema{#binomio-di-newton titolo="Formula del binomio di Newton"}
Per ogni coppia di numeri reali $a$ e $b$ e ogni $n \in \mathbb{N}$:
$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{\,n-k}\, b^{\,k}
= a^n + n\,a^{n-1}b + \binom{n}{2} a^{n-2}b^2 + \cdots + n\,a\,b^{n-1} + b^n .
$$
Per $n = 2$ e $n = 3$ la formula restituisce il quadrato e il cubo del binomio. La dimostrazione procede per induzione su $n$: nel passo si moltiplica lo sviluppo di $(a+b)^n$ per $a + b$ e si raggruppano i termini simili con la formula di Stifel. La formula permette di sviluppare una potenza qualunque di un binomio e di determinare un singolo termine dello sviluppo senza calcolare gli altri: il termine che contiene $b^k$ è $\dbinom{n}{k} a^{\,n-k} b^{\,k}$.
:::

:::esempio{titolo="Sviluppo di una potenza"}
$$
(x + 2)^4
= \sum_{k=0}^{4} \binom{4}{k} x^{\,4-k}\, 2^{\,k}
= x^4 + 4 \cdot 2\,x^3 + 6 \cdot 4\,x^2 + 4 \cdot 8\,x + 16
= x^4 + 8x^3 + 24x^2 + 32x + 16 .
$$
I coefficienti binomiali $1, 4, 6, 4, 1$ sono la riga $n = 4$ del triangolo di Tartaglia; ciascuno va moltiplicato per la corrispondente potenza di $2$.
:::

:::osservazione
Dalla formula con $a = b = 1$ segue
$$
\sum_{k=0}^{n} \binom{n}{k} = 2^n ,
$$
quindi un insieme di $n$ elementi ha in tutto $2^n$ sottoinsiemi, dato che $\dbinom{n}{k}$ conta quelli di $k$ elementi. Con $a = 1$ e $b = -1$ si ottiene invece $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ per ogni $n \geq 1$.
:::
