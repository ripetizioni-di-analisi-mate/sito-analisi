---
titolo: Calcolo combinatorio
sommario: Principi di conteggio, disposizioni, permutazioni, combinazioni, ripetizioni, vincoli e binomio di Newton.
---

## Principi di conteggio

:::teorema{#principi titolo="Principio del prodotto e della somma"}
Se una scelta avviene in più fasi, e per ogni scelta precedente la fase successiva ha lo stesso numero di possibilità, il numero totale è il prodotto delle possibilità di ciascuna fase. Per esempio $4$ maglie e $3$ pantaloni permettono $4\cdot3=12$ abbinamenti.

Se invece si sceglie tra casi alternativi disgiunti, i conteggi si sommano. Per scegliere una sola bevanda tra $3$ succhi e $2$ acque si hanno $3+2=5$ possibilità. La somma richiede che nessun risultato venga contato in due casi.
:::

:::definizione{#fattoriale titolo="Fattoriale"}
Per $n\geq1$ intero, il **fattoriale** è $n!=n(n-1)\cdots2\cdot1$. Si pone $0!=1$, coerentemente con il fatto che esiste un solo ordinamento dell'insieme vuoto. Per esempio $5!=120$ e $\dfrac{7!}{5!}=7\cdot6=42$. Nei rapporti si cancellano i fattori comuni prima di eseguire i prodotti.
:::

## Disposizioni semplici

:::definizione{#disposizioni titolo="Scelte ordinate senza ripetizione"}
Una **disposizione semplice** di $n$ elementi distinti in gruppi di $k$ è una scelta ordinata di $k$ elementi diversi, con $0\leq k\leq n$. Le possibilità sono
$$
D_{n,k}=n(n-1)\cdots(n-k+1)=\frac{n!}{(n-k)!}.
$$
L'ordine conta perché scambiare due posizioni cambia il risultato. Per assegnare oro, argento e bronzo a $8$ atleti si hanno $D_{8,3}=8\cdot7\cdot6=336$ podi. La formula deriva dal principio del prodotto, perché dopo ogni scelta rimane un elemento in meno.
:::

## Disposizioni con ripetizione

:::definizione{#ripetizione titolo="Scelte ordinate con ripetizione"}
Se ogni posizione può contenere uno qualsiasi di $n$ simboli e le ripetizioni sono ammesse, il numero di sequenze di lunghezza $k$ è $n^k$. Per esempio i codici di $4$ cifre, con zero iniziale ammesso, sono $10^4=10000$.

Se si chiedono numeri di $4$ cifre, il primo simbolo non può essere zero, quindi le possibilità sono $9\cdot10^3=9000$. Se le cifre devono essere distinte, il conteggio diventa $9\cdot9\cdot8\cdot7=4536$, perché dopo la prima cifra rimangono $9$ cifre, compreso lo zero.
:::

## Permutazioni

:::definizione{#permutazioni titolo="Ordinamenti di tutti gli elementi"}
Le **permutazioni semplici** di $n$ elementi distinti sono tutti i loro ordinamenti, quindi $P_n=n!$. Se alcuni elementi sono indistinguibili, con molteplicità $n_1,\ldots,n_r$ e $n_1+\cdots+n_r=n$, il numero di ordinamenti distinti è
$$
\frac{n!}{n_1!\cdots n_r!}.
$$
Per esempio gli anagrammi distinti di CASA sono $\dfrac{4!}{2!}=12$, perché le due A sono indistinguibili. Si divide per $2!$ in quanto scambiare le A non produce una nuova parola.
:::

:::osservazione
Per disporre $n\geq2$ persone distinte attorno a un tavolo circolare, identificando le configurazioni ottenute mediante rotazioni e distinguendo le riflessioni, si hanno $(n-1)!$ disposizioni. Si fissa una persona e si ordinano le altre. Per $5$ persone il risultato è $4!=24$. I posti numerati renderebbero invece distinguibili le rotazioni e darebbero $5!$.
:::

## Combinazioni semplici

::::teorema{#combinazioni titolo="Scelte senza ordine e senza ripetizione"}
Il numero di sottoinsiemi di $k$ elementi scelti tra $n$ elementi distinti è
$$
C_{n,k}=\binom nk=\frac{n!}{k!(n-k)!},\qquad0\leq k\leq n.
$$
Si ha $\binom nk=\binom n{n-k}$, perché scegliere gli elementi da includere equivale a scegliere quelli da escludere.

:::dimostrazione
Le disposizioni ordinate sono $\dfrac{n!}{(n-k)!}$. Ogni gruppo di $k$ elementi compare in $k!$ ordini diversi. Dividendo il numero delle disposizioni per $k!$ si ottiene la formula.
:::
::::

:::esempio
Una commissione di $3$ persone scelta tra $8$ candidati può essere formata in $\binom83=56$ modi. Se si assegnassero tre ruoli distinti, l'ordine tornerebbe a contare e i modi sarebbero $56\cdot3!=336$.
:::

## Combinazioni con ripetizione

:::teorema{#combinazioni-ripetute titolo="Scelte con ripetizione e senza ordine"}
Il numero di scelte di $k$ oggetti tra $n\geq1$ tipi, con ripetizioni ammesse e senza considerare l'ordine, è
$$
\binom{n+k-1}{k}.
$$
Per dimostrarlo si rappresentano i $k$ oggetti con simboli uguali e si usano $n-1$ separatori per distinguere i tipi. Scegliere le posizioni dei $k$ simboli tra $n+k-1$ posizioni determina la scelta.

Per acquistare $5$ pasticcini tra $3$ gusti, con disponibilità illimitata, si hanno $\binom75=21$ possibilità. La formula conta anche le scelte in cui un gusto è assente, perché due separatori possono essere consecutivi.
:::

## Vincoli e conteggio per casi

:::esempio{#vincoli titolo="Commissioni con un vincolo"}
Tra $6$ studenti del gruppo A e $4$ del gruppo B si scelgono $3$ rappresentanti con almeno uno del gruppo B. Tutte le commissioni sono $\binom{10}3=120$. Quelle prive di B sono $\binom63=20$, quindi il risultato è $120-20=100$.

Lo stesso risultato si ottiene sommando i casi disgiunti con uno, due o tre membri di B,
$$
\binom41\binom62+\binom42\binom61+\binom43\binom60
=60+36+4=100.
$$
Il conteggio del complementare è utile perché il caso escluso ha una descrizione più breve.
:::

:::esempio
Per ordinare $5$ libri distinti mantenendo vicini due libri fissati, si considera la coppia come un unico oggetto. Gli oggetti da ordinare sono $4$, quindi ci sono $4!$ possibilità; dentro la coppia i libri hanno $2!$ ordini. Il totale è $4!\cdot2!=48$. Se i due libri dovessero stare separati, i modi sarebbero $5!-48=72$.
:::

## Binomio di Newton

:::teorema{#newton titolo="Sviluppo della potenza di un binomio"}
Per ogni intero $n\geq0$ vale
$$
(a+b)^n=\sum_{k=0}^n\binom nk a^{n-k}b^k.
$$
Il simbolo $\sum$ indica la somma dei termini ottenuti facendo variare $k$ da $0$ a $n$. Il coefficiente $\binom nk$ conta in quanti modi si sceglie il termine $b$ in $k$ dei $n$ fattori.

Per esempio $(a+b)^4=a^4+4a^3b+6a^2b^2+4ab^3+b^4$. Nello sviluppo di $(x+2)^5$, il coefficiente di $x^3$ si ottiene con $k=2$ ed è $\binom52\,2^2=40$. Ponendo $a=b=1$ si ricava $\sum_{k=0}^n\binom nk=2^n$, il numero di tutti i sottoinsiemi di un insieme di $n$ elementi.
:::
