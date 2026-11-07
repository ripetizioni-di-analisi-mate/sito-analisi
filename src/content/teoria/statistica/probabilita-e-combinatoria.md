---
titolo: "Probabilità e calcolo combinatorio"
sommario: "Eventi e assiomi, conteggi ordinati e non ordinati, complementari ed estrazioni."
---

## Spazio campionario ed eventi

:::definizione{#eventi titolo="Esperimento aleatorio"}
Lo **spazio campionario** $\Omega$ contiene tutti gli esiti del modello. Un evento è un insieme di esiti. $A\cap B$ significa che accadono entrambi, $A\cup B$ che accade almeno uno, $A^c$ che non accade $A$. Due eventi sono incompatibili se $A\cap B=\varnothing$.

Nel lancio di un dado, $\Omega=\{1,2,3,4,5,6\}$. Se $A=\{2,4,6\}$ e $B=\{4,5,6\}$, allora $A\cap B=\{4,6\}$. Il diagramma evidenzia l'intersezione.

::venn{zone="ab" titolo="Esiti comuni ad A e B"}
:::

## Assiomi e conseguenze

:::teorema{#assiomi titolo="Probabilità e additività"}
Una probabilità assegna agli eventi numeri non negativi, con $P(\Omega)=1$ e additività numerabile su eventi a due a due incompatibili. Ne seguono
$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Inoltre $A\subseteq B$ implica $P(A)\le P(B)$. Se $P(A)=0{,}4$, $P(B)=0{,}5$ e $P(A\cap B)=0{,}2$, la probabilità dell'unione è $0{,}7$. L'intersezione viene sottratta perché è stata contata due volte.
:::

## Modello equiprobabile

:::definizione{#equiprobabilita titolo="Probabilità classica"}
Se $\Omega$ è finito e ogni esito ha la stessa probabilità,
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
Il conteggio richiede esiti elementari equiprobabili. Con due dadi regolari le 36 coppie ordinate sono equiprobabili, mentre le somme da 2 a 12 non lo sono: la somma 7 si realizza con 6 coppie e ha probabilità $1/6$.
:::

## Principio del prodotto e permutazioni

:::definizione{#permutazioni titolo="Conteggi ordinati"}
Se una scelta si svolge in stadi con $a_1,\dots,a_k$ possibilità per ciascuno stadio, indipendentemente dalle scelte precedenti in termini di numero di opzioni, il numero totale è $a_1\cdots a_k$. Le permutazioni di $n$ oggetti distinti sono $n!$.

Se tra $n$ oggetti vi sono gruppi indistinguibili di numerosità $n_1,\dots,n_r$, con somma $n$, gli ordinamenti distinti sono $n!/(n_1!\cdots n_r!)$. Le lettere di ANNA si ordinano in $4!/(2!2!)=6$ modi.
:::

## Disposizioni e combinazioni

:::definizione{#combinazioni titolo="Ordine e ripetizione"}
Le disposizioni senza ripetizione di $k$ oggetti tra $n$ sono $n!/(n-k)!$, con $0\le k\le n$. Con ripetizione si hanno $n^k$ sequenze. Se l'ordine non conta e non si ammettono ripetizioni, il numero di scelte è
$$
\binom nk=\frac{n!}{k!(n-k)!}.
$$
Scegliere una commissione di 3 persone tra 8 dà $\binom83=56$ possibilità. Assegnare presidente, segretario e relatore agli stessi candidati dà $8\cdot7\cdot6=336$ possibilità, perché i ruoli rendono significativo l'ordine.
:::

## Estrazioni senza reinserimento

:::esempio{#estrazioni titolo="Conteggio dei campioni"}
Un'urna contiene $R$ oggetti rossi e $N-R$ di altro colore. Estraendo $n$ oggetti senza reinserimento, ogni sottoinsieme di $n$ oggetti è equiprobabile se l'estrazione è uniforme. La probabilità di esattamente $k$ rossi è
$$
\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn},
$$
per $\max(0,n-N+R)\le k\le\min(n,R)$. Nel denominatore si contano tutti i campioni; nel numeratore si scelgono separatamente i rossi e gli altri oggetti. Le probabilità dei colori cambiano dopo ciascuna estrazione.
:::

## Complementare e almeno un successo

:::osservazione{#complementare titolo="Eventi complementari nei conteggi"}
Per calcolare la probabilità di almeno un successo può essere più breve contare l'assenza di successi. In $n$ prove indipendenti con probabilità di successo $p$,
$$
P(\text{almeno un successo})=1-(1-p)^n.
$$
Con quattro lanci indipendenti di una moneta regolare la probabilità di almeno una testa è $15/16$. La potenza $(1-p)^n$ richiede l'indipendenza e la stessa probabilità di successo nelle prove.
:::
