---
titolo: "Logica per il TOL del Politecnico"
sommario: "Insiemi, quantificatori, ipotesi e tesi, condizioni necessarie e sufficienti, deduzioni e dimostrazioni per assurdo."
---

## Insiemi e appartenenza

:::definizione{#insiemi titolo="Elementi, sottoinsiemi e operazioni"}
L'espressione $x\in A$ significa che $x$ è un elemento di $A$. L'inclusione $A\subseteq B$ significa che ogni elemento di $A$ appartiene a $B$. Gli insiemi sono uguali quando valgono entrambe le inclusioni.

L'unione $A\cup B$ comprende gli elementi in almeno uno dei due insiemi. L'intersezione $A\cap B$ comprende quelli in entrambi. La differenza $A\setminus B$ comprende gli elementi che sono in $A$ e fuori da $B$. Il complementare dipende dall'universo $U$ in cui si lavora e si scrive $U\setminus A$.
:::

:::esempio
Siano $A=\{1,2,3\}$ e $B=\{3,4\}$. L'intersezione è $\{3\}$, l'unione è $\{1,2,3,4\}$ e $A\setminus B=\{1,2\}$.

::venn{zone="ab" elementi="a:1,2;ab:3;b:4" titolo="L’intersezione contiene il solo elemento 3"}
:::

## Conteggio con insiemi

:::proposizione{#conteggio-insiemi titolo="Numero di elementi nell'unione"}
Se $A$ e $B$ sono finiti, $|A\cup B|=|A|+|B|-|A\cap B|$. La somma delle cardinalità conta due volte gli elementi comuni, quindi una copia va sottratta. Per contare gli elementi in un solo insieme si sottrae una seconda volta l'intersezione.
:::

:::esempio
Su $30$ elaborati, $16$ hanno una tabella, $15$ un grafico e $5$ hanno entrambi. Gli elaborati con almeno uno dei due elementi sono $16+15-5=26$. Quelli con uno soltanto sono $26-5=21$. Quelli senza entrambi sono $30-26=4$.
:::

## Proposizioni e connettivi

:::definizione{#connettivi titolo="Congiunzione, disgiunzione e negazione"}
Una proposizione è un enunciato a cui si attribuisce il valore vero o falso. La negazione $\neg P$ scambia i due valori. La congiunzione $P\land Q$ è vera quando sono vere entrambe le proposizioni. La disgiunzione inclusiva $P\lor Q$ è vera quando almeno una delle due è vera.

Negare «entrambe» significa affermare che almeno una manca. Negare «almeno una» significa affermare che mancano entrambe. Per esempio, la negazione di «la relazione è firmata oppure archiviata» è «la relazione non è firmata e non è archiviata».
:::

:::esempio
«Esattamente una fra $P$ e $Q$» impone $P\lor Q$ e contemporaneamente esclude $P\land Q$. Con $P$ e $Q$ entrambe vere, la disgiunzione inclusiva vale, mentre la condizione «esattamente una» è falsa.
:::

## Ipotesi, tesi e implicazione

:::definizione{#implicazione titolo="Da una premessa a una conclusione"}
Nell'enunciato $P\Rightarrow Q$, $P$ è l'ipotesi e $Q$ la tesi. L'implicazione è falsa soltanto quando l'ipotesi è vera e la tesi falsa. Di conseguenza basta un controesempio con queste due proprietà per confutarla.

L'inversa è $Q\Rightarrow P$. La contrapposta è $\neg Q\Rightarrow\neg P$ ed è equivalente all'implicazione iniziale. L'inversa va invece verificata a parte.
:::

:::esempio
Se $n$ è multiplo di $10$, allora $n$ è multiplo di $5$. L'ipotesi richiede la divisibilità per $10$. La tesi riguarda la divisibilità per $5$. Il numero $15$ soddisfa la tesi e non l'ipotesi, quindi smentisce l'inversa senza toccare l'enunciato di partenza.
:::

## Condizioni necessarie e sufficienti

:::definizione{#condizioni titolo="Il verso dell'implicazione"}
Da $P\Rightarrow Q$ si legge che $P$ è **sufficiente** per $Q$ e che $Q$ è **necessaria** per $P$. La frase «$P$ solo se $Q$» si traduce con $P\Rightarrow Q$. Per avere una condizione necessaria e sufficiente servono entrambi i versi, che si indicano con $P\Leftrightarrow Q$.
:::

:::esempio
Nell'insieme dei rettangoli, avere tutti i lati congruenti equivale a essere un quadrato. Avere diagonali congruenti è invece una condizione necessaria per essere un quadrato. Un rettangolo di lati $3$ e $5$ soddisfa questa proprietà senza essere un quadrato, quindi la proprietà non è sufficiente.
:::

## Quantificatori e controesempi

:::definizione{#quantificatori titolo="Ogni, almeno uno e nessuno"}
Il simbolo $\forall$ significa «per ogni» e $\exists$ significa «esiste almeno un». Per negare un'affermazione universale si cerca un elemento che non soddisfi la proprietà. Per negare un'affermazione esistenziale si dice che nessun elemento la soddisfa. Se i quantificatori sono più di uno, si scambiano tutti mantenendo il loro ordine e si nega la proprietà finale.
:::

:::esempio
Per negare «ogni candidato ha risolto almeno un esercizio» si afferma che esiste un candidato che non ha risolto alcun esercizio. Dire che ogni candidato ha lasciato in bianco qualche esercizio descrive una situazione diversa. Un candidato può infatti averne risolto uno e lasciati in bianco altri.
:::

## Deduzioni e controllo della validità

:::osservazione{#deduzioni titolo="Conclusioni garantite ed errori di inversione"}
Da $P\Rightarrow Q$ e $P$ si conclude $Q$. Da $P\Rightarrow Q$ e $\neg Q$ si conclude $\neg P$. Se si sa solo $Q$, resta da stabilire se la tesi possa verificarsi anche quando l'ipotesi è falsa. Analogamente, da $\neg P$ da sola non si deduce $\neg Q$.
:::

:::esempio
Se l'aula è aperta, la spia è accesa. Osservare la spia spenta esclude l'apertura, perché l'apertura avrebbe reso vera la tesi. Osservarla accesa non basta. Potrebbe esserci un test della spia a porta chiusa e la regola resterebbe rispettata.
:::

## Dimostrazioni per assurdo

:::osservazione{#assurdo titolo="Negare la conclusione sotto le ipotesi"}
Per dimostrare $P\Rightarrow Q$ per assurdo si assume $P$ e si aggiunge $\neg Q$. Si ricava una contraddizione, cioè una conseguenza incompatibile con le ipotesi o con un fatto già dimostrato. Poiché mantenere $P$ esclude $\neg Q$, sotto l'ipotesi $P$ deve valere $Q$.
:::

:::esempio
Si vuole dimostrare che se $n^2$ è dispari allora $n$ è dispari. Si assume $n^2$ dispari e si suppone che $n$ sia pari. Da $n=2k$ segue $n^2=4k^2=2(2k^2)$, che è pari. Questo contraddice l'ipotesi su $n^2$ e conclude la dimostrazione.
:::
