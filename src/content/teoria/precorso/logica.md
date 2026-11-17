---
titolo: Logica elementare
sommario: Che cosa è una proposizione, come si combinano le proposizioni con i connettivi, come si negano le frasi con i quantificatori e come sono costruite le dimostrazioni.
---

## Proposizioni

:::definizione{#proposizioni titolo="Proposizione"}
Una **proposizione** è un enunciato per il quale ha senso chiedersi se è vero o falso, e che ha *uno solo* dei due valori di verità. Le proposizioni si indicano con lettere come $p$, $q$, $r$. Un'uguaglianza tra numeri e un teorema sono esempi di proposizioni.

- "$7$ è un numero primo": proposizione vera.
- "$2 + 2 = 5$": proposizione falsa.
- "$x + 1 = 3$": enunciato con una variabile, che diventa una proposizione quando si assegna un valore a $x$. Un enunciato di questo tipo si chiama **predicato** e si indica con $p(x)$; i predicati si trasformano in proposizioni anche con i quantificatori.
:::

:::attenzione
Un predicato in cui la variabile non ha un valore assegnato *non* è una proposizione. L'enunciato "$x^2 > 4$" è vero per $x = 3$, perché $9 > 4$, ed è falso per $x = 1$, perché $1 < 4$; quindi ha un valore di verità soltanto dopo che si è scelto $x$ oppure dopo che si è quantificata la variabile. Anche "$100$ è un numero grande" non è una proposizione, perché l'aggettivo *grande* non ha un significato matematico preciso.
:::

## Connettivi logici

I connettivi costruiscono proposizioni nuove a partire da proposizioni date; il valore di verità del risultato dipende soltanto dai valori di verità delle parti, secondo le tavole di verità.

:::definizione{#negazione titolo="Negazione"}
La **negazione** di $p$, indicata con $\lnot p$ ("non $p$"), è la proposizione vera quando $p$ è falsa e falsa quando $p$ è vera.
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
La **congiunzione** $p \land q$ ("$p$ e $q$") è vera quando $p$ e $q$ sono *entrambe* vere. La **disgiunzione** $p \lor q$ ("$p$ o $q$") è vera quando *almeno una* tra $p$ e $q$ è vera, comprese le volte in cui lo sono entrambe.
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

::venn{zone="ab" nomi="P,Q" universo=1 titolo="$P$ e $Q$ sono gli insiemi di verità di $p(x)$ e $q(x)$: $p \land q$ è vera nell'intersezione $P \cap Q$"}

::venn{zone="a,ab,b" nomi="P,Q" universo=1 titolo="$p \lor q$ è vera nell'unione $P \cup Q$, compresa la parte comune ai due insiemi"}

:::

:::osservazione
In matematica la "o" è **inclusiva**: $p \lor q$ è vera anche quando $p$ e $q$ sono vere insieme. L'enunciato "$6$ è pari o $6$ è divisibile per $3$" è vero, e le due parti sono vere entrambe.
:::

:::esempio{titolo="Tavola di verità di una proposizione composta"}
La tavola di verità di $(p \lor q) \land \lnot p$ si costruisce colonna per colonna: prima si calcolano $p \lor q$ e $\lnot p$, poi la loro congiunzione.
$$
\begin{array}{c|c|c|c|c}
p & q & p \lor q & \lnot p & (p \lor q) \land \lnot p \\
\hline
\text{V} & \text{V} & \text{V} & \text{F} & \text{F} \\
\text{V} & \text{F} & \text{V} & \text{F} & \text{F} \\
\text{F} & \text{V} & \text{V} & \text{V} & \text{V} \\
\text{F} & \text{F} & \text{F} & \text{V} & \text{F}
\end{array}
$$
La proposizione è vera soltanto nella terza riga, cioè quando $p$ è falsa e $q$ è vera, quindi ha la stessa tavola di verità di $\lnot p \land q$. Su questa equivalenza si basa il ragionamento per esclusione: se "$p$ o $q$" è vera e $p$ è falsa, allora $q$ è vera. Per esempio, da "$x = 1$ oppure $x = 4$" e da $x \neq 1$ segue $x = 4$.
:::

::::teorema{#leggi-di-de-morgan titolo="Leggi di De Morgan"}
$$
\lnot (p \land q) \equiv \lnot p \lor \lnot q,
\qquad
\lnot (p \lor q) \equiv \lnot p \land \lnot q .
$$
Il simbolo $\equiv$ indica che le due proposizioni hanno la **stessa tavola di verità**. La negazione scambia "e" con "o" e nega le singole parti. Queste leggi si usano ogni volta che si nega una condizione composta, per esempio una coppia di disuguaglianze; la verifica si fa confrontando le tavole di verità riga per riga.

::venn{zone="a,b,u" nomi="P,Q" titolo="$\lnot(p \land q)$ è vera nel complementare di $P \cap Q$, cioè fuori da $P$ oppure fuori da $Q$: è l'insieme di verità di $\lnot p \lor \lnot q$"}

::venn{zone="u" nomi="P,Q" titolo="$\lnot(p \lor q)$ è vera nel complementare di $P \cup Q$, cioè fuori da $P$ e fuori da $Q$: è l'insieme di verità di $\lnot p \land \lnot q$"}

:::dimostrazione
Si confrontano le tavole di verità riga per riga. Per la prima legge:
$$
\begin{array}{c|c|c|c|c|c|c}
p & q & p \land q & \lnot (p \land q) & \lnot p & \lnot q & \lnot p \lor \lnot q \\
\hline
\text{V} & \text{V} & \text{V} & \text{F} & \text{F} & \text{F} & \text{F} \\
\text{V} & \text{F} & \text{F} & \text{V} & \text{F} & \text{V} & \text{V} \\
\text{F} & \text{V} & \text{F} & \text{V} & \text{V} & \text{F} & \text{V} \\
\text{F} & \text{F} & \text{F} & \text{V} & \text{V} & \text{V} & \text{V}
\end{array}
$$
La colonna di $\lnot (p \land q)$ e quella di $\lnot p \lor \lnot q$ coincidono in tutte e quattro le righe, quindi le due proposizioni sono equivalenti.

La seconda legge segue dalla prima applicata alle proposizioni $\lnot p$ e $\lnot q$. Si ottiene $\lnot (\lnot p \land \lnot q) \equiv \lnot \lnot p \lor \lnot \lnot q$, e poiché la doppia negazione riporta alla proposizione di partenza si ha $\lnot (\lnot p \land \lnot q) \equiv p \lor q$. Negando entrambi i membri si ricava $\lnot p \land \lnot q \equiv \lnot (p \lor q)$.
:::

::::

:::esempio{titolo="Negare una congiunzione"}
La negazione di "$x > 0$ e $x < 5$" è "$x \leq 0$ oppure $x \geq 5$". Per le **leggi di De Morgan** la negazione di una congiunzione è la disgiunzione delle due negazioni; poiché negare $x > 0$ significa affermare $x \leq 0$ e negare $x < 5$ significa affermare $x \geq 5$, si ottiene $x \leq 0 \lor x \geq 5$.
:::

:::esempio{titolo="Negare una disgiunzione"}
La negazione di "$x < -1$ oppure $x > 1$" è "$x \geq -1$ e $x \leq 1$", cioè $-1 \leq x \leq 1$. Per la seconda **legge di De Morgan** la negazione di una disgiunzione è la congiunzione delle due negazioni. La disgiunzione $x < -1 \lor x > 1$ descrive le soluzioni della disequazione $x^2 > 1$, perciò la sua negazione descrive le soluzioni di $x^2 \leq 1$.

::grafico{f="x^2;1" xmin=-3 xmax=3 ymin=-1 ymax=6 area="1;x^2;-1;1" punti="-1,1,pieno;1,1,pieno" legenda="y = x^2;y = 1" titolo="Per $-1 \leq x \leq 1$ il grafico di $y = x^2$ sta sotto la retta $y = 1$ o la tocca, e questi valori formano l'insieme di verità della negazione di $x < -1 \lor x > 1$"}

:::

:::attenzione
La negazione di "$x > 0$ e $x < 5$" *non* è "$x \leq 0$ e $x \geq 5$". Per $x = 7$ la proposizione "$x > 0$ e $x < 5$" è falsa, perché $7 < 5$ è falsa, e anche "$x \leq 0$ e $x \geq 5$" è falsa, perché $7 \leq 0$ è falsa. Due proposizioni false per lo stesso valore di $x$ non sono una la negazione dell'altra. La congiunzione $x \leq 0 \land x \geq 5$ è anzi falsa per ogni $x$ reale, perché nessun numero è insieme minore o uguale a $0$ e maggiore o uguale a $5$.
:::

## Implicazione

:::definizione{#implicazione titolo="Implicazione"}
L'**implicazione** $p \Rightarrow q$ ("se $p$ allora $q$") ha $p$ come **ipotesi** e $q$ come **tesi**, ed è falsa in *un solo* caso: $p$ vera e $q$ falsa.
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
Quando $p$ è falsa l'implicazione è **vera** qualunque sia $q$: l'implicazione impegna *soltanto* nei casi in cui l'ipotesi è vera. Per esempio "se $x > 3$ allora $x > 1$" è vera per ogni $x$ reale; per $x = 0$ l'ipotesi è falsa e l'implicazione resta vera. Ogni teorema ha questa forma, quindi la tavola di verità dell'implicazione regola l'uso dei teoremi.

::venn{tipo="incluso" zone="ab" nomi="Q,P" universo=1 titolo="$p(x) \Rightarrow q(x)$ vera per ogni $x$: l'insieme di verità $P$ dell'ipotesi è contenuto nell'insieme di verità $Q$ della tesi"}

:::

::::teorema{#negazione-dell-implicazione titolo="Negazione dell'implicazione"}
$$
\lnot (p \Rightarrow q) \equiv p \land \lnot q .
$$
L'implicazione è falsa soltanto quando l'ipotesi è vera e la tesi è falsa, quindi negarla significa affermare proprio questo caso: la negazione di un'implicazione è una **congiunzione**. Per mostrare che "se $x > 1$ allora $x^2 > 4$" è falsa si esibisce un valore con $x > 1$ e $x^2 \leq 4$, per esempio $x = \dfrac{3}{2}$, per il quale $x^2 = \dfrac{9}{4} \leq 4$.

:::dimostrazione
Si confrontano le tavole di verità delle due proposizioni.
$$
\begin{array}{c|c|c|c|c|c}
p & q & p \Rightarrow q & \lnot (p \Rightarrow q) & \lnot q & p \land \lnot q \\
\hline
\text{V} & \text{V} & \text{V} & \text{F} & \text{F} & \text{F} \\
\text{V} & \text{F} & \text{F} & \text{V} & \text{V} & \text{V} \\
\text{F} & \text{V} & \text{V} & \text{F} & \text{F} & \text{F} \\
\text{F} & \text{F} & \text{V} & \text{F} & \text{V} & \text{F}
\end{array}
$$
La colonna di $\lnot (p \Rightarrow q)$ si ottiene invertendo quella dell'implicazione, ed è vera soltanto nella seconda riga. Anche $p \land \lnot q$ è vera soltanto nella seconda riga, perché è l'unica in cui $p$ è vera e $q$ è falsa. Le due colonne coincidono, quindi le due proposizioni sono equivalenti.
:::

::::

:::osservazione
Dalla stessa tavola segue $p \Rightarrow q \equiv \lnot p \lor q$, perché entrambe le proposizioni sono false soltanto quando $p$ è vera e $q$ è falsa. Applicando la seconda legge di De Morgan a $\lnot p \lor q$ si ritrova la negazione dell'implicazione: $\lnot (\lnot p \lor q) \equiv \lnot \lnot p \land \lnot q \equiv p \land \lnot q$. Per esempio "se $x > 3$ allora $x > 1$" equivale a "$x \leq 3$ oppure $x > 1$", che è vera per ogni $x$ reale.
:::

:::definizione{#inversa-contronominale titolo="Inversa e contronominale"}
Data l'implicazione $p \Rightarrow q$:

- l'**inversa** è $q \Rightarrow p$ (si scambiano ipotesi e tesi);
- la **contronominale** è $\lnot q \Rightarrow \lnot p$ (si scambiano ipotesi e tesi e si negano entrambe).

La contronominale è **equivalente** all'implicazione di partenza: $p \Rightarrow q \equiv \lnot q \Rightarrow \lnot p$, perché le due tavole di verità coincidono. L'inversa ha invece una tavola di verità *diversa*, quindi può essere falsa anche quando l'implicazione è vera. Sull'equivalenza con la contronominale si fonda la dimostrazione per contronominale.
:::

:::esempio
Implicazione: "se $n$ è multiplo di $4$, allora $n$ è pari", vera. Contronominale: "se $n$ è dispari, allora $n$ non è multiplo di $4$", vera, come garantisce l'equivalenza. Inversa: "se $n$ è pari, allora $n$ è multiplo di $4$", **falsa**, perché $n = 6$ è pari e $6 = 4 \cdot 1 + 2$ ha resto $2$ nella divisione per $4$.

::venn{tipo="incluso" nomi="Pari,M" zone="ab" elementi="a:2,6,10;ab:4,8,12;u:1,3,5" titolo="L'insieme $M$ dei multipli di $4$ è contenuto nell'insieme dei pari: un dispari sta fuori dai pari e quindi fuori dai multipli di $4$, mentre $2$, $6$, $10$ sono pari e non multipli di $4$"}

:::

:::attenzione
Da $p \Rightarrow q$ vera e $q$ vera *non* segue che $p$ sia vera. L'implicazione "se $x > 2$ allora $x^2 > 4$" è vera; per $x = -3$ la tesi $x^2 > 4$ è vera e l'ipotesi $x > 2$ è falsa.
:::

:::attenzione
La proposizione $\lnot p \Rightarrow \lnot q$, che nega ipotesi e tesi *senza* scambiarle, *non* è equivalente a $p \Rightarrow q$. L'implicazione "se $n$ è multiplo di $4$, allora $n$ è pari" è vera, mentre "se $n$ non è multiplo di $4$, allora $n$ è dispari" è falsa, perché $n = 6$ non è multiplo di $4$ ed è pari. La proposizione $\lnot p \Rightarrow \lnot q$ è la contronominale dell'inversa $q \Rightarrow p$, quindi ha la stessa tavola di verità dell'inversa.
:::

## Condizione necessaria e sufficiente

:::definizione{#necessaria-sufficiente titolo="Condizione necessaria e condizione sufficiente"}
Se l'implicazione $p \Rightarrow q$ è vera:

- $p$ è **condizione sufficiente** per $q$: *basta* la verità di $p$ per garantire la verità di $q$;
- $q$ è **condizione necessaria** per $p$: se $q$ è falsa, anche $p$ è falsa, per la contronominale $\lnot q \Rightarrow \lnot p$; quindi $p$ può essere vera *solo se* è vera $q$.

Se valgono sia $p \Rightarrow q$ sia $q \Rightarrow p$, si scrive $p \Leftrightarrow q$ ("$p$ se e solo se $q$") e ciascuna delle due è **condizione necessaria e sufficiente** per l'altra. Nei teoremi l'ipotesi è una condizione sufficiente per la tesi; riconoscere quale verso dell'implicazione è stato dimostrato permette di usare il teorema nel verso corretto.
:::

:::esempio
Per un numero naturale $n$, "essere multiplo di $4$" è condizione *sufficiente* per "essere pari", perché ogni multiplo di $4$ è pari; di conseguenza "essere pari" è condizione *necessaria* per "essere multiplo di $4$". La condizione "essere pari" non è invece sufficiente per "essere multiplo di $4$", perché $n = 6$ è pari e ha resto $2$ nella divisione per $4$. Nei numeri reali vale $x = 2 \Leftrightarrow x^3 = 8$, perché il cubo assume ogni valore una sola volta, quindi ciascuna uguaglianza è condizione necessaria e sufficiente per l'altra.
:::

:::esempio{titolo="Condizioni con una disequazione"}
Per $x$ reale si confrontano "$x^2 < 4$" e "$x < 2$". La disequazione $x^2 < 4$ ha per soluzioni $-2 < x < 2$, e ognuno di questi valori verifica $x < 2$, quindi l'implicazione $x^2 < 4 \Rightarrow x < 2$ è vera. L'implicazione opposta è falsa, perché $x = -3$ verifica $x < 2$ e per questo valore $x^2 = 9 \geq 4$. Perciò "$x^2 < 4$" è condizione **sufficiente e non necessaria** per "$x < 2$", e "$x < 2$" è condizione **necessaria e non sufficiente** per "$x^2 < 4$".

::grafico{f="x^2;4" xmin=-4 xmax=4 ymin=-1 ymax=10 area="4;x^2;-2;2" punti="-2,4,pieno;2,4,pieno;-3,9,pieno" segmenti="-3,0,-3,9" legenda="y = x^2;y = 4" titolo="Per $-2 < x < 2$ il grafico di $y = x^2$ sta sotto la retta $y = 4$; il valore $x = -3$ verifica $x < 2$ e ha $x^2 = 9$"}

:::

:::osservazione
La locuzione "$p$ solo se $q$" significa $p \Rightarrow q$, cioè afferma che $q$ è condizione necessaria per $p$. La frase "un intero è multiplo di $6$ solo se è pari" è vera, perché $6k = 2 \cdot 3k$; la frase "un intero è pari solo se è multiplo di $6$" è falsa, perché $4$ è pari e non è multiplo di $6$. In "$p$ se e solo se $q$" la parte "se $q$" esprime l'implicazione $q \Rightarrow p$ e la parte "solo se $q$" esprime l'implicazione $p \Rightarrow q$.
:::

## Quantificatori

:::definizione{#quantificatori titolo="Quantificatore universale ed esistenziale"}
Un predicato $p(x)$ diventa una proposizione quando si quantifica la variabile:

- $\forall x \in A : p(x)$ ("per ogni $x$ in $A$ vale $p(x)$") è vera quando $p(x)$ è vera per *tutti* gli elementi di $A$;
- $\exists x \in A : p(x)$ ("esiste almeno un $x$ in $A$ per cui vale $p(x)$") è vera quando $p(x)$ è vera per *almeno un* elemento di $A$.

Per dimostrare una proposizione universale serve un argomento valido per ogni elemento, e un solo **controesempio** basta a confutarla; per dimostrare una proposizione esistenziale basta esibire un elemento che soddisfa il predicato.
:::

:::esempio
"$\forall x \in \mathbb{R} : x^2 \geq 0$" è **vera**, perché il quadrato di ogni numero reale è maggiore o uguale a zero. "$\forall x \in \mathbb{R} : x^2 > 0$" è **falsa**, perché per $x = 0$ si ha $x^2 = 0$, quindi $x = 0$ è un controesempio. "$\exists x \in \mathbb{R} : x^2 = 2$" è vera, perché $x = \sqrt{2}$ soddisfa l'uguaglianza.

::grafico{f="x^2;2" xmin=-3 xmax=3 ymin=-1 ymax=5 punti="0,0,pieno;1.4142,2,pieno;-1.4142,2,pieno" etichette="0.2,-0.6,x = 0;1.6,1.5,x = √2;-2.35,1.5,x = −√2" titolo="$y = x^2$ sta sopra l'asse $x$ in ogni punto diverso da $x = 0$, che è il controesempio per $x^2 > 0$; la retta $y = 2$ incontra il grafico in $x = \sqrt{2}$ e in $x = -\sqrt{2}$"}

:::

:::esempio{titolo="Il ruolo dell'insieme"}
Con $A = \{1, 2, 3, 4\}$ la proposizione "$\forall x \in A : x^2 \leq 16$" è vera, perché i quadrati degli elementi di $A$ sono $1$, $4$, $9$, $16$ e sono tutti minori o uguali a $16$. La proposizione "$\exists x \in A : x^2 = 8$" è falsa, perché nessuno dei quattro quadrati vale $8$; invece "$\exists x \in \mathbb{R} : x^2 = 8$" è vera, perché $x = 2\sqrt{2}$ verifica $x^2 = 4 \cdot 2 = 8$. L'insieme in cui varia la variabile fa quindi parte della proposizione, e cambiando l'insieme può cambiare il valore di verità.
:::

:::teorema{#negazione-dei-quantificatori titolo="Negazione dei quantificatori"}
$$
\lnot \bigl( \forall x \in A : p(x) \bigr) \equiv \exists x \in A : \lnot p(x),
\qquad
\lnot \bigl( \exists x \in A : p(x) \bigr) \equiv \forall x \in A : \lnot p(x) .
$$
La negazione **scambia** $\forall$ con $\exists$ e **nega il predicato**. Con più quantificatori si procede dall'esterno verso l'interno, scambiandoli uno per uno, e alla fine si nega il predicato. Questa regola serve in tutta l'Analisi, perché le definizioni di limite contengono catene di quantificatori e la loro negazione è il primo passo di molte verifiche e dimostrazioni.
:::

:::attenzione
La negazione di una proposizione universale cambia anche il quantificatore, oltre al predicato. La negazione di "$\forall x \in \mathbb{R} : x^2 > 0$" è "$\exists x \in \mathbb{R} : x^2 \leq 0$", vera per $x = 0$. La proposizione "$\forall x \in \mathbb{R} : x^2 \leq 0$", ottenuta negando soltanto il predicato, è falsa, perché per $x = 1$ si ha $x^2 = 1 > 0$; poiché anche la proposizione di partenza è falsa, le due *non* sono una la negazione dell'altra.
:::

:::esempio{titolo="Negazione con due quantificatori"}
La proposizione "$\forall x \in \mathbb{R} \ \exists y \in \mathbb{R} : y > x$" è vera, perché per ogni $x$ il numero $y = x + 1$ soddisfa $y > x$. La sua negazione è "$\exists x \in \mathbb{R} \ \forall y \in \mathbb{R} : y \leq x$", che afferma l'esistenza di un numero reale maggiore o uguale a ogni numero reale; poiché è la negazione di una proposizione vera, è **falsa**.
:::

:::osservazione
L'*ordine* dei quantificatori **cambia il significato**. "$\forall x \ \exists y : y > x$" è vera nei reali, perché $y$ può dipendere da $x$; "$\exists y \ \forall x : y > x$" è falsa, perché richiede un unico $y$ maggiore di tutti gli $x$, compreso $y$ stesso.
:::

## Tecniche di dimostrazione

Le tre tecniche seguenti dimostrano un'implicazione $p \Rightarrow q$ per strade diverse.

:::definizione{#dimostrazione-diretta titolo="Dimostrazione diretta"}
Si assume vera l'ipotesi $p$ e, con una **catena di deduzioni**, si arriva alla tesi $q$. È la struttura della maggior parte delle dimostrazioni e di ogni esercizio svolto: ciascun passaggio è una piccola deduzione da quanto già stabilito.
:::

:::esempio{titolo="La somma di due numeri pari è pari"}
Per ipotesi $m$ e $n$ sono pari, quindi $m = 2a$ e $n = 2b$ con $a$ e $b$ interi. Allora
$$
m + n = 2a + 2b = 2(a + b) .
$$
La somma è il doppio dell'intero $a + b$, perciò è **pari**.
:::

:::attenzione
Una proposizione universale *non* si dimostra controllando un numero finito di casi. Il numero $n^2 + n + 41$ è primo per ogni $n$ naturale da $0$ a $39$; per $n = 40$ invece si ha
$$
40^2 + 40 + 41 = 40 \cdot (40 + 1) + 41 = 41 \cdot 40 + 41 = 41^2 = 1681 ,
$$
che non è primo. Quindi la proposizione "$\forall n \in \mathbb{N} : n^2 + n + 41$ è primo" è falsa e $n = 40$ ne è un **controesempio**.
:::

:::definizione{#dimostrazione-per-contronominale titolo="Dimostrazione per contronominale"}
Per dimostrare $p \Rightarrow q$ si dimostra la **contronominale** $\lnot q \Rightarrow \lnot p$, che è una proposizione **equivalente**. Conviene quando la negazione della tesi è più maneggevole dell'ipotesi, come negli enunciati su pari e dispari.
:::

:::esempio{titolo="Se n² è pari, allora n è pari"}
La contronominale è: se $n$ è dispari, allora $n^2$ è dispari. Per ipotesi $n = 2a + 1$ con $a$ intero, quindi
$$
n^2 = 4a^2 + 4a + 1 = 2(2a^2 + 2a) + 1 ,
$$
che è un numero dispari. La contronominale è vera, perciò è **vera** anche l'implicazione di partenza.
:::

:::definizione{#dimostrazione-per-assurdo titolo="Dimostrazione per assurdo"}
Si assume che la tesi sia *falsa* e, deducendo correttamente, si arriva a una **contraddizione**, cioè a una proposizione falsa oppure alla negazione dell'ipotesi. Poiché da premesse vere seguono soltanto conclusioni vere, l'assunzione era falsa, quindi la tesi è **vera**. Per dimostrare $p \Rightarrow q$ per assurdo si assume $p \land \lnot q$, che è la negazione dell'implicazione.
:::

:::esempio{titolo="La radice quadrata di 2 è irrazionale"}
**Per assurdo** si suppone $\sqrt{2}$ razionale, cioè $\sqrt{2} = \dfrac{m}{n}$ con $m$ e $n$ interi positivi senza fattori comuni. Elevando al quadrato si ottiene $m^2 = 2n^2$, quindi $m^2$ è pari; poiché il quadrato di un numero dispari è dispari, $m$ è pari, cioè $m = 2k$ con $k$ intero. Sostituendo si ricava $4k^2 = 2n^2$, cioè $n^2 = 2k^2$, quindi per lo stesso argomento anche $n$ è pari. Allora $m$ e $n$ hanno il fattore comune $2$, contro la scelta fatta all'inizio. L'assunzione porta a una contraddizione, perciò $\sqrt{2}$ è **irrazionale**.
:::
