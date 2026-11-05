---
titolo: Probabilità e probabilità condizionata
sommario: Eventi e spazi campionari, probabilità classica, unione e complemento, estrazioni, indipendenza, probabilità condizionata, probabilità totale e Bayes.
---

## Esperimenti ed eventi

:::definizione{#eventi titolo="Spazio campionario ed evento"}
Un **esperimento aleatorio** ha esito non noto prima dell'esecuzione. Lo **spazio campionario** $\Omega$ raccoglie tutti gli esiti possibili; un **evento** è un suo sottoinsieme. Nel lancio di un dado $\Omega=\{1,2,3,4,5,6\}$ e l'evento «esce un numero pari» è $A=\{2,4,6\}$.

L'unione $A\cup B$ significa che si verifica almeno uno dei due eventi; l'intersezione $A\cap B$ che si verificano entrambi; il complemento $\overline A$ che $A$ non si verifica. Due eventi sono **incompatibili** se $A\cap B=\varnothing$. L'evento certo è $\Omega$, quello impossibile è $\varnothing$.

::venn{zone="ab" titolo="L'intersezione $A\cap B$ raccoglie gli esiti comuni"}
:::

## Probabilità classica

:::definizione{#classica titolo="Esiti equiprobabili"}
Se lo spazio campionario è finito e tutti gli esiti hanno la stessa probabilità, allora
$$
P(A)=\frac{\text{numero di esiti favorevoli}}{\text{numero di esiti possibili}}.
$$
La condizione di equiprobabilità riguarda gli esiti elementari scelti nel modello. Per due dadi regolari le $36$ coppie ordinate sono equiprobabili; le somme da $2$ a $12$ non lo sono, perché si ottengono con numeri diversi di coppie.

Per avere somma $7$ ci sono $6$ coppie favorevoli, quindi $P=\dfrac6{36}=\dfrac16$. Per avere somma $2$ c'è solo $(1,1)$, quindi $P=\dfrac1{36}$.
:::

## Assiomi, complemento e unione

:::teorema{#operazioni titolo="Regole della probabilità"}
Una probabilità soddisfa $P(A)\geq0$, $P(\Omega)=1$ e, per eventi incompatibili, $P(A\cup B)=P(A)+P(B)$. Da queste proprietà seguono
$$
P(\overline A)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Nella seconda formula l'intersezione viene sottratta perché nella somma dei primi due termini è contata due volte. Se $P(A)=\dfrac12$, $P(B)=\dfrac13$ e $P(A\cap B)=\dfrac16$, l'unione ha probabilità $\dfrac23$.

::venn{zone="a,ab,b" titolo="L'unione comprende anche l'intersezione, contata una sola volta"}
:::

:::esempio
Per trovare la probabilità di almeno un $6$ in tre lanci indipendenti di un dado si considera l'evento complementare «nessun $6$». La sua probabilità è $\left(\dfrac56\right)^3$, quindi il risultato è $1-\dfrac{125}{216}=\dfrac{91}{216}$.
:::

## Probabilità condizionata

:::definizione{#condizionata titolo="Probabilità di A sapendo B"}
Se $P(B)>0$, la **probabilità condizionata** è
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Sapere che $B$ è avvenuto riduce lo spazio degli esiti possibili a $B$. Nel lancio di un dado, se si sa che il risultato è pari, gli esiti possibili sono $\{2,4,6\}$. La probabilità che sia maggiore di $3$ è allora $\dfrac23$, perché gli esiti favorevoli sono $4$ e $6$.

La formula dà la regola del prodotto $P(A\cap B)=P(B)P(A\mid B)$. Si può anche scrivere $P(A)P(B\mid A)$ quando $P(A)>0$.
:::

## Indipendenza

:::definizione{#indipendenza titolo="Eventi indipendenti"}
Due eventi sono **indipendenti** se $P(A\cap B)=P(A)P(B)$. Se $P(B)>0$, ciò equivale a $P(A\mid B)=P(A)$. Per lanci indipendenti di una moneta regolare, la probabilità di due teste è $\dfrac12\cdot\dfrac12=\dfrac14$.

Indipendenza e incompatibilità descrivono proprietà diverse. Se $A$ e $B$ sono incompatibili e hanno probabilità positiva, l'intersezione ha probabilità $0$, mentre $P(A)P(B)>0$, quindi sono dipendenti. Sullo stesso dado, «esce $1$» e «esce $2$» sono incompatibili e dipendenti.
:::

## Estrazioni con e senza reinserimento

:::esempio{#estrazioni titolo="Due estrazioni da un'urna"}
Un'urna contiene $4$ palline rosse e $3$ blu, tutte ugualmente estraibili. Con reinserimento la composizione torna quella iniziale, quindi la probabilità di due rosse è $\dfrac47\cdot\dfrac47=\dfrac{16}{49}$.

Senza reinserimento, dopo una rossa restano $3$ rosse tra $6$ palline, quindi la probabilità di due rosse è $\dfrac47\cdot\dfrac36=\dfrac27$. Il conteggio combinatorio conferma
$$
P(\text{due rosse})=\frac{\binom42}{\binom72}=\frac6{21}=\frac27.
$$
Per avere una rossa e una blu, senza considerarne l'ordine, il risultato è $\dfrac{\binom41\binom31}{\binom72}=\dfrac47$. Considerando l'ordine si sommano i due casi disgiunti RB e BR.
:::

## Probabilità totale e Bayes

::::teorema{#bayes titolo="Partizione, probabilità totale e teorema di Bayes"}
Siano $B_1,\ldots,B_n$ eventi incompatibili a due a due, di probabilità positiva, la cui unione è $\Omega$. Essi formano una **partizione**. Allora
$$
P(A)=\sum_{j=1}^nP(B_j)P(A\mid B_j).
$$
Se $P(A)>0$, il **teorema di Bayes** dà
$$
P(B_i\mid A)=\frac{P(B_i)P(A\mid B_i)}{\sum_{j=1}^nP(B_j)P(A\mid B_j)}.
$$
:::dimostrazione
L'evento $A$ è l'unione disgiunta degli eventi $A\cap B_j$. Si sommano quindi le loro probabilità e si applica la regola del prodotto. La formula di Bayes segue da $P(B_i\mid A)=\dfrac{P(B_i\cap A)}{P(A)}$ e dalla probabilità totale al denominatore.
:::
::::

:::esempio
Si sceglie con uguale probabilità una delle urne U e V. L'urna U contiene $3$ rosse e $1$ blu; V contiene $1$ rossa e $3$ blu. La probabilità di estrarre una rossa è $\dfrac12\cdot\dfrac34+\dfrac12\cdot\dfrac14=\dfrac12$. Sapendo che è rossa, la probabilità che provenga da U è $\dfrac{\frac12\cdot\frac34}{\frac12}=\dfrac34$. La probabilità di provenienza viene aggiornata usando l'esito osservato.
:::

## Ripetizioni di un esperimento

:::teorema{#ripetizioni titolo="Numero fissato di successi"}
In $n$ prove indipendenti, ciascuna con due esiti e probabilità di successo costante $p$, la probabilità di esattamente $k$ successi è
$$
\binom nk p^k(1-p)^{n-k},\qquad k=0,1,\ldots,n.
$$
Una sequenza fissata con $k$ successi ha probabilità $p^k(1-p)^{n-k}$. Le posizioni dei successi possono essere scelte in $\binom nk$ modi, che corrispondono a eventi disgiunti.

Per tre lanci di una moneta regolare, la probabilità di esattamente due teste è $\binom32\left(\dfrac12\right)^3=\dfrac38$. La probabilità di almeno due teste aggiunge il caso di tre teste e vale $\dfrac38+\dfrac18=\dfrac12$. Lo studio sistematico delle variabili aleatorie e delle distribuzioni viene sviluppato nel quinto anno.
:::
