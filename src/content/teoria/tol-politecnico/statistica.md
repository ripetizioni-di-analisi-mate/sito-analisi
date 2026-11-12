---
titolo: "Statistica, conteggio e probabilità per il TOL del Politecnico"
sommario: "Frequenze e grafici, media, mediana, moda, varianza, deviazione standard e probabilità mediante conteggi."
---

## Frequenze e percentuali

:::definizione{#frequenze titolo="Dalle osservazioni alla tabella"}
La **frequenza assoluta** di una modalità è il suo numero di occorrenze. La **frequenza relativa** è il rapporto fra la frequenza assoluta e il numero totale di osservazioni. La percentuale è la frequenza relativa moltiplicata per $100$ ed espressa con il simbolo $\%$.

Per dati ordinabili, la frequenza cumulata fino a un valore conta tutte le osservazioni minori o uguali a quel valore. Sottraendo due frequenze cumulate si isolano i dati fra le due soglie.
:::

:::esempio
Su $80$ osservazioni, $18$ appartengono a una modalità. La sua frequenza relativa è $\dfrac{18}{80}=0{,}225$ e la percentuale è $22{,}5\%$. Se il totale aumenta, la frequenza relativa può diminuire anche con più occorrenze della modalità.
:::

## Diagrammi e istogrammi

:::osservazione{#grafici-statistici titolo="Barre, settori e aree"}
In un diagramma a barre per modalità distinte, l'altezza può essere direttamente la frequenza. In un diagramma a torta, una categoria con frequenza relativa $f$ corrisponde a un settore di angolo $360^\circ f$.

In un istogramma per classi, è l'area del rettangolo a rappresentare la frequenza. Se una classe ha ampiezza $w$ e frequenza assoluta $n_i$, l'altezza vale $\dfrac{n_i}{w}$ quando l'area coincide con la frequenza assoluta. Per classi di diversa larghezza, guardare soltanto l'altezza può invertire il confronto fra frequenze.
:::

:::esempio
La classe $[0,2)$ ha altezza $4$ e la classe $[2,6)$ altezza $3$. Con aree pari alle frequenze, le osservazioni nelle due classi sono rispettivamente $2\cdot4=8$ e $4\cdot3=12$.

::grafico{poligoni="0,0 2,0 2,4 0,4;2,0 6,0 6,3 2,3" xmin=-1 xmax=7 ymin=-1 ymax=5 legenda=0 titolo="Classi di ampiezze diverse in un istogramma"}
:::

## Media, mediana e moda

:::definizione{#indici-centrali titolo="Tre indici diversi"}
La media aritmetica di $n$ dati è la loro somma divisa per $n$. In una tabella di frequenze, si moltiplica ciascun valore per la sua frequenza assoluta e si divide la somma dei prodotti per il totale.

La mediana è il valore centrale dei dati ordinati quando il loro numero è dispari. Quando è pari, è la media dei due valori centrali. La moda è una modalità di frequenza massima. Più modalità possono condividere la stessa frequenza massima.
:::

:::esempio
I dati $1,2,2,5,15$ hanno somma $25$ e media $5$. La mediana è $2$ perché è il terzo dato ordinato. La moda è $2$ perché compare due volte. Se l'ultimo dato diventa $25$, la media cresce di $\dfrac{10}{5}=2$, mentre le posizioni centrali e le frequenze massime restano le stesse.
:::

## Varianza e deviazione standard

:::definizione{#dispersione titolo="Scarti dalla media"}
Per dati $x_1,\ldots,x_n$ con media $\bar{x}$, la **varianza descrittiva** è
$$
\sigma^2=\frac1n\sum_{i=1}^{n}(x_i-\bar{x})^2.
$$
La deviazione standard è $\sigma=\sqrt{\sigma^2}$. La varianza si esprime nell'unità delle osservazioni al quadrato. La deviazione standard usa l'unità dei dati. Con frequenze raggruppate per valori esatti, ogni scarto al quadrato è pesato dalla sua frequenza relativa.
:::

:::esempio
I dati $2,2,6,6$ hanno media $4$. Tutti gli scarti al quadrato valgono $4$, quindi la varianza è $4$ e la deviazione standard è $2$. Sommando $5$ a ogni dato, la media aumenta della stessa quantità e gli scarti restano invariati. Moltiplicando invece tutti i valori per $-3$, la varianza è moltiplicata per $9$ e la deviazione standard per $3$.
:::

## Conteggi ordinati

:::osservazione{#conteggi-ordinati titolo="Principio di moltiplicazione e permutazioni"}
Quando una scelta avviene in più passaggi, si moltiplicano i numeri di opzioni disponibili nei passaggi, a condizione che il loro numero sia lo stesso per ciascuna scelta precedente. Le permutazioni di $n$ oggetti distinti sono $n!$. Se alcuni oggetti sono indistinguibili, si divide per i fattoriali delle molteplicità.
:::

:::esempio
Un codice è formato da due lettere distinte scelte da quattro e da una cifra scelta da cinque. L'ordine delle lettere distingue i codici, quindi se ne ottengono $4\cdot3\cdot5=60$. Usando tutte le lettere di ANNA, le disposizioni distinte sono $\dfrac{4!}{2!\,2!}=6$.
:::

## Scelte senza ordine

:::definizione{#combinazioni titolo="Combinazioni e vincoli"}
Le scelte di $k$ oggetti distinti fra $n$ senza considerare l'ordine sono $\binom nk$. Si ottiene il numero dividendo le scelte ordinate per $k!$, poiché ogni gruppo di $k$ elementi viene contato in tutti i suoi ordinamenti.
:::

:::esempio
Una squadra di tre persone si forma da quattro persone del gruppo A e tre del gruppo B. Se deve contenere due persone di A e una di B, il numero di squadre è $\binom42\binom31=18$. Un vincolo «almeno una di B» si può trattare sottraendo dal totale le squadre formate solo da A.
:::

## Probabilità mediante conteggi

:::definizione{#probabilita titolo="Esiti equiprobabili e complementari"}
Con esiti elementari equiprobabili, la probabilità di un evento è il numero di esiti favorevoli diviso per il numero di esiti possibili. Il complemento di un evento $A$ comprende tutti gli esiti in cui $A$ non avviene e ha probabilità $1-P(A)$.

In due lanci indipendenti di un dado regolare gli esiti ordinati sono $36$. La somma $5$ si ottiene con $(1,4)$, $(2,3)$, $(3,2)$ e $(4,1)$, perciò la probabilità è $\dfrac4{36}=\dfrac19$.
:::

:::esempio
Da una scatola con $4$ gettoni bianchi e $3$ neri si estraggono due gettoni senza reinserimento. L'evento «almeno un nero» ha come complemento «due bianchi». Le coppie di bianchi sono $\binom42=6$ e le coppie totali $\binom72=21$. Si ottiene quindi $1-\dfrac6{21}=\dfrac57$.
:::

## Probabilità condizionata

:::definizione{#condizionamento titolo="Quali esiti restano possibili"}
Se si conosce il verificarsi di $B$ con $P(B)>0$, si considerano soltanto gli esiti compatibili con $B$. La probabilità di $A$ in tali condizioni è $P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$. Due eventi sono indipendenti quando $P(A\cap B)=P(A)P(B)$.
:::

:::esempio
Si sceglie con uguale probabilità una carta numerata da $1$ a $12$. Sapendo che è multipla di $3$, gli esiti rimasti sono $3,6,9,12$. Due sono pari, quindi la probabilità condizionata vale $\dfrac24=\dfrac12$. Il denominatore è il numero di esiti compatibili con l'informazione, cioè quattro.
:::
