---
titolo: Logica elementare
sommario: Che cosa è una proposizione, come si combinano le proposizioni con i connettivi, come si negano le frasi con i quantificatori e come sono costruite le dimostrazioni.
---

## Proposizioni

:::definizione{#proposizioni titolo="Proposizione"}
Una proposizione è un enunciato per il quale ha senso chiedersi se è vero o falso, e che ha uno solo dei due valori di verità. Le proposizioni si indicano con lettere come $p$, $q$, $r$. Ogni enunciato matematico, come un'uguaglianza o un teorema, è una proposizione.

- "$7$ è un numero primo": proposizione vera.
- "$2 + 2 = 5$": proposizione falsa.
- "$x + 1 = 3$": enunciato con una variabile, che diventa una proposizione quando si assegna un valore a $x$. Un enunciato di questo tipo si chiama predicato e si indica con $p(x)$; i predicati si trasformano in proposizioni anche con i quantificatori.
:::

## Connettivi logici

I connettivi costruiscono proposizioni nuove a partire da proposizioni date; il valore di verità del risultato dipende soltanto dai valori di verità delle parti, secondo le tavole di verità.

:::definizione{#negazione titolo="Negazione"}
La negazione di $p$, indicata con $\lnot p$ ("non $p$"), è la proposizione vera quando $p$ è falsa e falsa quando $p$ è vera.
$$
\begin{array}{c|c}
p & \lnot p \\
\hline
\text{V} & \text{F} \\
\text{F} & \text{V}
\end{array}
$$
La negazione di "$7$ è primo" è "$7$ non è primo". La doppia negazione riporta alla proposizione di partenza: $\lnot(\lnot p)$ ha la stessa tavola di verità di $p$. La negazione compare nei controesempi e nelle dimostrazioni per assurdo.
:::

:::definizione{#congiunzione-disgiunzione titolo="Congiunzione e disgiunzione"}
La congiunzione $p \land q$ ("$p$ e $q$") è vera quando $p$ e $q$ sono entrambe vere. La disgiunzione $p \lor q$ ("$p$ o $q$") è vera quando almeno una tra $p$ e $q$ è vera, comprese le volte in cui lo sono entrambe.
$$
\begin{array}{c|c|c|c}
p & q & p \land q & p \lor q \\
\hline
\text{V} & \text{V} & \text{V} & \text{V} \\
\text{V} & \text{F} & \text{F} & \text{V} \\
\text{F} & \text{V} & \text{F} & \text{V} \\
\text{F} & \text{F} & \text{F} & \text{F}
\end{array}
$$
Per $x = 2$: la proposizione "$x > 0 \land x > 3$" è falsa, perché la seconda parte è falsa; la proposizione "$x > 0 \lor x > 3$" è vera, perché la prima parte è vera.
:::

:::osservazione
In matematica la "o" è inclusiva: $p \lor q$ è vera anche quando $p$ e $q$ sono vere insieme. L'enunciato "$6$ è pari o $6$ è divisibile per $3$" è vero, e le due parti sono vere entrambe.
:::

:::teorema{#leggi-di-de-morgan titolo="Leggi di De Morgan"}
$$
\lnot (p \land q) \equiv \lnot p \lor \lnot q,
\qquad
\lnot (p \lor q) \equiv \lnot p \land \lnot q .
$$
Il simbolo $\equiv$ indica che le due proposizioni hanno la stessa tavola di verità. La negazione scambia "e" con "o" e nega le singole parti. Queste leggi si usano ogni volta che si nega una condizione composta, per esempio una coppia di disuguaglianze; la verifica si fa confrontando le tavole di verità riga per riga.
:::

:::esempio{titolo="Negare una congiunzione"}
La negazione di "$x > 0$ e $x < 5$" è "$x \leq 0$ oppure $x \geq 5$". Poiché negare $x > 0$ significa affermare $x \leq 0$, per le leggi di De Morgan la congiunzione si trasforma nella disgiunzione delle due negazioni.
:::

## Implicazione

:::definizione{#implicazione titolo="Implicazione"}
L'implicazione $p \Rightarrow q$ ("se $p$ allora $q$") ha $p$ come ipotesi e $q$ come tesi, ed è falsa in un solo caso: $p$ vera e $q$ falsa.
$$
\begin{array}{c|c|c}
p & q & p \Rightarrow q \\
\hline
\text{V} & \text{V} & \text{V} \\
\text{V} & \text{F} & \text{F} \\
\text{F} & \text{V} & \text{V} \\
\text{F} & \text{F} & \text{V}
\end{array}
$$
Quando $p$ è falsa l'implicazione è vera qualunque sia $q$: l'implicazione impegna soltanto nei casi in cui l'ipotesi è vera. Per esempio "se $x > 3$ allora $x > 1$" è vera per ogni $x$ reale; per $x = 0$ l'ipotesi è falsa e l'implicazione resta vera. Ogni teorema ha questa forma, quindi la tavola di verità dell'implicazione regola l'uso dei teoremi.
:::

:::teorema{#negazione-dell-implicazione titolo="Negazione dell'implicazione"}
$$
\lnot (p \Rightarrow q) \equiv p \land \lnot q .
$$
L'implicazione è falsa soltanto quando l'ipotesi è vera e la tesi è falsa, quindi negarla significa affermare proprio questo caso: la negazione di un'implicazione è una congiunzione. Per mostrare che "se $x > 1$ allora $x^2 > 4$" è falsa si esibisce un valore con $x > 1$ e $x^2 \leq 4$, per esempio $x = \dfrac{3}{2}$, per il quale $x^2 = \dfrac{9}{4} \leq 4$.
:::

:::definizione{#inversa-contronominale titolo="Inversa e contronominale"}
Data l'implicazione $p \Rightarrow q$:

- l'inversa è $q \Rightarrow p$ (si scambiano ipotesi e tesi);
- la contronominale è $\lnot q \Rightarrow \lnot p$ (si scambiano ipotesi e tesi e si negano entrambe).

La contronominale è equivalente all'implicazione di partenza: $p \Rightarrow q \equiv \lnot q \Rightarrow \lnot p$, perché le due tavole di verità coincidono. L'inversa ha invece una tavola di verità diversa, quindi può essere falsa anche quando l'implicazione è vera. Sull'equivalenza con la contronominale si fonda la dimostrazione per contronominale.
:::

:::esempio
Implicazione: "se $n$ è multiplo di $4$, allora $n$ è pari", vera. Contronominale: "se $n$ è dispari, allora $n$ non è multiplo di $4$", vera, come garantisce l'equivalenza. Inversa: "se $n$ è pari, allora $n$ è multiplo di $4$", falsa, perché $n = 6$ è pari e $6 = 4 \cdot 1 + 2$ ha resto $2$ nella divisione per $4$.
:::

:::attenzione
Da $p \Rightarrow q$ vera e $q$ vera non segue che $p$ sia vera. L'implicazione "se $x > 2$ allora $x^2 > 4$" è vera; per $x = -3$ la tesi $x^2 > 4$ è vera e l'ipotesi $x > 2$ è falsa.
:::

## Condizione necessaria e sufficiente

:::definizione{#necessaria-sufficiente titolo="Condizione necessaria e condizione sufficiente"}
Se l'implicazione $p \Rightarrow q$ è vera:

- $p$ è condizione sufficiente per $q$: basta la verità di $p$ per garantire la verità di $q$;
- $q$ è condizione necessaria per $p$: ogni volta che $p$ è vera, anche $q$ è vera.

Se valgono sia $p \Rightarrow q$ sia $q \Rightarrow p$, si scrive $p \Leftrightarrow q$ ("$p$ se e solo se $q$") e ciascuna delle due è condizione necessaria e sufficiente per l'altra. Nei teoremi l'ipotesi è una condizione sufficiente per la tesi; riconoscere quale verso dell'implicazione è stato dimostrato permette di usare il teorema nel verso corretto.
:::

:::esempio
Per un numero naturale $n$, "essere multiplo di $4$" è condizione sufficiente per "essere pari", perché ogni multiplo di $4$ è pari; di conseguenza "essere pari" è condizione necessaria per "essere multiplo di $4$". La condizione "essere pari" non è invece sufficiente per "essere multiplo di $4$", perché $n = 6$ è pari e ha resto $2$ nella divisione per $4$. Nei numeri reali vale $x = 2 \Leftrightarrow x^3 = 8$, perché il cubo assume ogni valore una sola volta, quindi ciascuna uguaglianza è condizione necessaria e sufficiente per l'altra.
:::

## Quantificatori

:::definizione{#quantificatori titolo="Quantificatore universale ed esistenziale"}
Un predicato $p(x)$ diventa una proposizione quando si quantifica la variabile:

- $\forall x \in A : p(x)$ ("per ogni $x$ in $A$ vale $p(x)$") è vera quando $p(x)$ è vera per tutti gli elementi di $A$;
- $\exists x \in A : p(x)$ ("esiste almeno un $x$ in $A$ per cui vale $p(x)$") è vera quando $p(x)$ è vera per almeno un elemento di $A$.

Per dimostrare una proposizione universale serve un argomento valido per ogni elemento, e un solo controesempio basta a confutarla; per dimostrare una proposizione esistenziale basta esibire un elemento che soddisfa il predicato.
:::

:::esempio
"$\forall x \in \mathbb{R} : x^2 \geq 0$" è vera, perché il quadrato di ogni numero reale è maggiore o uguale a zero. "$\forall x \in \mathbb{R} : x^2 > 0$" è falsa, perché per $x = 0$ si ha $x^2 = 0$, quindi $x = 0$ è un controesempio. "$\exists x \in \mathbb{R} : x^2 = 2$" è vera, perché $x = \sqrt{2}$ soddisfa l'uguaglianza.
:::

:::teorema{#negazione-dei-quantificatori titolo="Negazione dei quantificatori"}
$$
\lnot \bigl( \forall x \in A : p(x) \bigr) \equiv \exists x \in A : \lnot p(x),
\qquad
\lnot \bigl( \exists x \in A : p(x) \bigr) \equiv \forall x \in A : \lnot p(x) .
$$
La negazione scambia $\forall$ con $\exists$ e nega il predicato. Con più quantificatori si procede dall'esterno verso l'interno, scambiandoli uno per uno, e alla fine si nega il predicato. Questa regola serve in tutta l'Analisi, perché le definizioni di limite contengono catene di quantificatori e la loro negazione è il primo passo di molte verifiche e dimostrazioni.
:::

:::esempio{titolo="Negazione con due quantificatori"}
La proposizione "$\forall x \in \mathbb{R} \ \exists y \in \mathbb{R} : y > x$" è vera, perché per ogni $x$ il numero $y = x + 1$ soddisfa $y > x$. La sua negazione è "$\exists x \in \mathbb{R} \ \forall y \in \mathbb{R} : y \leq x$", che afferma l'esistenza di un numero reale maggiore o uguale a ogni numero reale ed è falsa.
:::

:::osservazione
L'ordine dei quantificatori cambia il significato. "$\forall x \ \exists y : y > x$" è vera nei reali, perché $y$ può dipendere da $x$; "$\exists y \ \forall x : y > x$" è falsa, perché richiede un unico $y$ maggiore di tutti gli $x$, compreso $y$ stesso.
:::

## Tecniche di dimostrazione

Le tre tecniche seguenti dimostrano un'implicazione $p \Rightarrow q$ per strade diverse.

:::definizione{#dimostrazione-diretta titolo="Dimostrazione diretta"}
Si assume vera l'ipotesi $p$ e, con una catena di deduzioni, si arriva alla tesi $q$. È la struttura della maggior parte delle dimostrazioni e di ogni esercizio svolto: ciascun passaggio è una piccola deduzione da quanto già stabilito.
:::

:::esempio{titolo="La somma di due numeri pari è pari"}
Per ipotesi $m$ e $n$ sono pari, quindi $m = 2a$ e $n = 2b$ con $a$ e $b$ interi. Allora
$$
m + n = 2a + 2b = 2(a + b) .
$$
La somma è il doppio dell'intero $a + b$, perciò è pari.
:::

:::definizione{#dimostrazione-per-contronominale titolo="Dimostrazione per contronominale"}
Per dimostrare $p \Rightarrow q$ si dimostra la contronominale $\lnot q \Rightarrow \lnot p$, che è una proposizione equivalente. Conviene quando la negazione della tesi è più maneggevole dell'ipotesi, come negli enunciati su pari e dispari.
:::

:::esempio{titolo="Se n² è pari, allora n è pari"}
La contronominale è: se $n$ è dispari, allora $n^2$ è dispari. Per ipotesi $n = 2a + 1$ con $a$ intero, quindi
$$
n^2 = 4a^2 + 4a + 1 = 2(2a^2 + 2a) + 1 ,
$$
che è un numero dispari. La contronominale è vera, perciò è vera anche l'implicazione di partenza.
:::

:::definizione{#dimostrazione-per-assurdo titolo="Dimostrazione per assurdo"}
Si assume che la tesi sia falsa e, deducendo correttamente, si arriva a una contraddizione, cioè a una proposizione falsa oppure alla negazione dell'ipotesi. Poiché da premesse vere seguono soltanto conclusioni vere, l'assunzione era falsa, quindi la tesi è vera. Per dimostrare $p \Rightarrow q$ per assurdo si assume $p \land \lnot q$, che è la negazione dell'implicazione.
:::

:::esempio{titolo="La radice quadrata di 2 è irrazionale"}
Per assurdo si suppone $\sqrt{2}$ razionale, cioè $\sqrt{2} = \dfrac{m}{n}$ con $m$ e $n$ interi positivi senza fattori comuni. Elevando al quadrato si ottiene $m^2 = 2n^2$, quindi $m^2$ è pari; poiché il quadrato di un numero dispari è dispari, $m$ è pari, cioè $m = 2k$ con $k$ intero. Sostituendo si ricava $4k^2 = 2n^2$, cioè $n^2 = 2k^2$, quindi per lo stesso argomento anche $n$ è pari. Allora $m$ e $n$ hanno il fattore comune $2$, contro la scelta fatta all'inizio. L'assunzione porta a una contraddizione, perciò $\sqrt{2}$ è irrazionale.
:::
