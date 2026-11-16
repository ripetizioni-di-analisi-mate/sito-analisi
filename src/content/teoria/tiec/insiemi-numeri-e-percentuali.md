---
titolo: Insiemi, numeri e percentuali
sommario: Operazioni tra insiemi e conteggi con i diagrammi di Venn, insiemi numerici, numeri decimali e periodici, confronto di numeri reali, disuguaglianze, valore assoluto, MCD e mcm e percentuali, con i metodi per rispondere in fretta ai quesiti del TIEC.
---

## Insiemi e operazioni

:::definizione{#insieme titolo="Insieme, appartenenza, insieme vuoto"}
Un **insieme** è una collezione di oggetti, detti elementi, per la quale si può stabilire senza ambiguità se un oggetto ne fa parte oppure no. Se $x$ è un elemento dell'insieme $A$ si scrive $x \in A$ e si legge "$x$ appartiene ad $A$"; se non lo è si scrive $x \notin A$. Un insieme si descrive in due modi:

- elencando gli elementi fra graffe, come $A = \{1, 2, 3, 6\}$;
- indicando la proprietà che li caratterizza, come $A = \{x \in \mathbb{N} : x \text{ è un divisore di } 6\}$.

Le due scritture indicano lo stesso insieme. L'insieme che non ha elementi si chiama **insieme vuoto** e si indica con $\varnothing$: per esempio l'insieme dei numeri naturali minori di $0$ è vuoto. Il numero di elementi di un insieme finito $A$ si indica con $|A|$; per l'insieme dei divisori di $6$ si ha $|A| = 4$.
:::

:::definizione{#sottoinsieme titolo="Sottoinsieme"}
Un insieme $B$ è un **sottoinsieme** di $A$, e si scrive $B \subseteq A$, se ogni elemento di $B$ appartiene anche ad $A$. Per esempio $\{2, 6\} \subseteq \{1, 2, 3, 6\}$, mentre $\{2, 4\}$ non è un sottoinsieme di $\{1, 2, 3, 6\}$, perché $4$ non è un divisore di $6$. L'insieme vuoto e l'insieme $A$ stesso sono sottoinsiemi di $A$. La relazione serve a confrontare insiemi descritti in modi diversi: l'insieme dei multipli di $4$ è un sottoinsieme dell'insieme dei numeri pari, perché ogni multiplo di $4$ è pari.
:::

:::definizione{#unione-intersezione titolo="Unione e intersezione"}
Dati due insiemi $A$ e $B$:

- l'**unione** $A \cup B$ è l'insieme degli elementi che appartengono ad $A$ oppure a $B$ (o a entrambi);
- l'**intersezione** $A \cap B$ è l'insieme degli elementi che appartengono sia ad $A$ sia a $B$.

Con $A = \{1, 2, 3, 6\}$ e $B = \{2, 4, 6, 8\}$ si ha $A \cup B = \{1, 2, 3, 4, 6, 8\}$ e $A \cap B = \{2, 6\}$. Nell'unione ogni elemento si scrive una volta sola, anche se appartiene a tutti e due gli insiemi. Se $A \cap B = \varnothing$, gli insiemi si dicono **disgiunti**.

::venn{zone="a,ab,b" nomi="A,B" elementi="a:1,3;ab:2,6;b:4,8" titolo="L'unione $A \cup B$ è tutta la parte colorata; i numeri $2$ e $6$, nella parte comune, formano l'intersezione $A \cap B$"}

:::

:::definizione{#differenza-complementare titolo="Differenza e complementare"}
La **differenza** $A \setminus B$ è l'insieme degli elementi di $A$ che *non* appartengono a $B$. Con gli insiemi dell'esempio precedente $A \setminus B = \{1, 3\}$ e $B \setminus A = \{4, 8\}$, quindi in generale $A \setminus B$ e $B \setminus A$ sono insiemi diversi.

Quando tutti gli insiemi considerati sono sottoinsiemi di un insieme fissato $U$, detto **insieme universo**, il complementare di $A$ è l'insieme $\overline{A} = U \setminus A$ degli elementi di $U$ che non stanno in $A$. Con $U = \{1, 2, \dots, 8\}$ e $A = \{1, 2, 3, 6\}$ il complementare è $\overline{A} = \{4, 5, 7, 8\}$. Il complementare di un'unione si ottiene intersecando i complementari:
$$
\overline{A \cup B} = \overline{A} \cap \overline{B},
\qquad
\overline{A \cap B} = \overline{A} \cup \overline{B} .
$$
La prima uguaglianza vale perché un elemento sta fuori dall'unione esattamente quando non sta in $A$ e non sta in $B$; la seconda si legge allo stesso modo.

::venn{zone="b,u" nomi="A,B" universo=1 titolo="Il complementare $\overline{A}$ è la parte dell'universo $U$ esterna ad $A$, colorata nella figura"}

:::

## Conteggi con i diagrammi di Venn

::::teorema{#cardinalita-unione titolo="Numero di elementi dell'unione"}
Se $A$ e $B$ sono insiemi finiti, allora
$$
|A \cup B| = |A| + |B| - |A \cap B| .
$$
La formula serve nei problemi su gruppi di persone che hanno due caratteristiche. In una classe di $28$ studenti, $16$ giocano a calcio, $10$ a pallavolo e $5$ praticano entrambi gli sport. Gli studenti che praticano almeno uno dei due sport sono $16 + 10 - 5 = 21$, quindi quelli che non ne praticano nessuno sono $28 - 21 = 7$.

:::dimostrazione
Nella somma $|A| + |B|$ gli elementi di $A \cap B$ sono contati due volte, una come elementi di $A$ e una come elementi di $B$, mentre gli altri sono contati una volta sola. Togliendo $|A \cap B|$ ogni elemento dell'unione risulta contato una volta.
:::
::::

:::esempio{titolo="Le quattro zone del diagramma"}
Un diagramma di Venn con due insiemi dentro l'universo $U$ ha quattro zone: solo $A$, cioè $A \setminus B$; la parte comune $A \cap B$; solo $B$, cioè $B \setminus A$; la parte esterna $\overline{A \cup B}$. Nei quesiti conviene riempire le zone partendo dall'intersezione. Con i dati della classe di $28$ studenti:

- nella parte comune ci sono $5$ studenti;
- solo calcio: $16 - 5 = 11$ studenti;
- solo pallavolo: $10 - 5 = 5$ studenti;
- nessuno dei due sport: $28 - 11 - 5 - 5 = 7$ studenti.

Come controllo, la somma delle quattro zone deve dare il totale $28$.

::venn{zone="a,ab,b" nomi="C,P" universo=1 elementi="a:11;ab:5;b:5;u:7" titolo="Classe di $28$ studenti, con $C$ insieme di chi gioca a calcio e $P$ insieme di chi gioca a pallavolo: $11$ solo calcio, $5$ entrambi gli sport, $5$ solo pallavolo, $7$ nessuno dei due"}

:::

:::attenzione
Il numero di elementi dell'unione *non* è la somma $|A| + |B|$, salvo quando gli insiemi sono disgiunti. Con $16$ studenti che giocano a calcio e $10$ a pallavolo si ottiene $26$ solo se nessuno pratica entrambi gli sport; con $5$ studenti in comune gli studenti sportivi sono $21$.
:::

## Insiemi numerici e retta reale

:::definizione{#insiemi-numerici titolo="Insiemi numerici"}
Gli insiemi numerici usati nel test sono quattro, ciascuno contenuto nel successivo:
$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} .
$$

- $\mathbb{N} = \{0, 1, 2, 3, \dots\}$ è l'insieme dei **numeri naturali**.
- $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ è l'insieme dei **numeri interi**, positivi, negativi e lo zero.
- $\mathbb{Q}$ è l'insieme dei **numeri razionali**, cioè dei numeri che si scrivono come frazione $\dfrac{m}{n}$ con $m \in \mathbb{Z}$ e $n \in \mathbb{Z}$, $n \neq 0$.
- $\mathbb{R}$ è l'insieme dei **numeri reali**, che comprende i razionali e gli irrazionali, come $\sqrt{2}$ e $\pi$, che non si scrivono come frazione.

Ogni insieme serve a eseguire un'operazione che nel precedente non sempre si esegue: in $\mathbb{N}$ la sottrazione $3 - 5$ non ha risultato, in $\mathbb{Z}$ sì; in $\mathbb{Z}$ la divisione $3 : 5$ non ha risultato, in $\mathbb{Q}$ sì, ed è $\dfrac{3}{5}$.
:::

:::definizione{#retta-reale-intervalli titolo="Retta reale e intervalli"}
Su una retta si fissano un punto, che rappresenta $0$, un verso, e un segmento che rappresenta l'unità. Ogni numero reale corrisponde allora a un punto della retta e ogni punto a un numero reale; per questo la retta orientata si chiama **retta reale**. Di due numeri è minore quello che sta più a sinistra.

Gli insiemi di numeri reali compresi fra due estremi si chiamano **intervalli**. La parentesi quadra indica che l'estremo è compreso, la tonda che è escluso:
$$
[2, 5] = \{x \in \mathbb{R} : 2 \leq x \leq 5\},
\qquad
(2, 5] = \{x \in \mathbb{R} : 2 < x \leq 5\},
\qquad
[0, +\infty) = \{x \in \mathbb{R} : x \geq 0\} .
$$
Gli intervalli sono il modo abituale di scrivere le soluzioni di una disequazione: le soluzioni di $x - 1 > 2$ sono i numeri dell'intervallo $(3, +\infty)$.

::grafico{assi=0 uguale=1 linee="-3.5,0 4.6,0;4.35,0.15 4.6,0 4.35,-0.15;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1" punti="-2,0,pieno;0.5,0,pieno;1.414,0,pieno;3.1416,0,pieno" etichette="-3.12,-0.5,−3;-2.12,-0.5,−2;-1.12,-0.5,−1;-0.07,-0.5,0;0.93,-0.5,1;1.93,-0.5,2;2.93,-0.5,3;3.93,-0.5,4;-2.2,0.35,−2;0.3,0.35,½;1.25,0.35,√2;3,0.35,π" xmin=-3.8 xmax=4.9 ymin=-0.9 ymax=0.8 titolo="Sulla retta reale l'intero $-2$, il razionale $\dfrac{1}{2}$ e gli irrazionali $\sqrt{2} \approx 1{,}41$ e $\pi \approx 3{,}14$"}

:::

## Numeri decimali e periodici

:::definizione{#numeri-decimali titolo="Numeri decimali finiti e periodici"}
Dividendo il numeratore di una frazione per il denominatore si ottiene un numero decimale, che può essere di due tipi.

- **Decimale finito**: la divisione termina, come $\dfrac{3}{8} = 0{,}375$.
- **Decimale periodico**: da un certo punto in poi un gruppo di cifre, detto **periodo**, si ripete all'infinito, come $\dfrac{4}{11} = 0{,}363636\ldots = 0{,}\overline{36}$. Le cifre decimali che precedono il periodo formano l'antiperiodo: in $\dfrac{1}{6} = 0{,}1\overline{6}$ l'antiperiodo è $1$ e il periodo è $6$.

Una frazione ridotta ai minimi termini dà un decimale finito se e solo se il suo denominatore non ha fattori primi diversi da $2$ e da $5$. La regola vale perché un decimale finito è una frazione con denominatore $10$, $100$, $1000$, …, e queste potenze di $10$ contengono solo i fattori $2$ e $5$. Per esempio $\dfrac{7}{40}$ è un decimale finito, perché $40 = 2^3 \cdot 5$, mentre $\dfrac{7}{30}$ è periodico, perché $30$ contiene il fattore $3$.
:::

::::teorema{#frazione-generatrice titolo="Frazione generatrice"}
Ogni numero decimale periodico è razionale. La frazione che lo genera ha:

- al numeratore il numero scritto senza virgola e senza la lineetta del periodo, meno il numero formato dalle cifre che precedono il periodo;
- al denominatore tante cifre $9$ quante sono le cifre del periodo, seguite da tante cifre $0$ quante sono le cifre dell'antiperiodo.

Per esempio
$$
0{,}\overline{36} = \frac{36}{99} = \frac{4}{11},
\qquad
1{,}2\overline{3} = \frac{123 - 12}{90} = \frac{111}{90} = \frac{37}{30} .
$$
La regola serve a eseguire calcoli con i periodici e a confrontarli con le frazioni. Un caso particolare è $0{,}\overline{9} = \dfrac{9}{9} = 1$.

:::dimostrazione
Si pone $x = 0{,}\overline{36} = 0{,}3636\ldots$. Moltiplicando per $100$ si sposta la virgola di due posti e si ottiene $100x = 36{,}3636\ldots$. Sottraendo membro a membro le due uguaglianze le parti decimali si cancellano, quindi $99x = 36$ e $x = \dfrac{36}{99}$. Con l'antiperiodo si moltiplica prima per $10$ tante volte quante sono le sue cifre, e da qui vengono gli zeri al denominatore.
:::
::::

:::attenzione
Un numero periodico *non* coincide con il decimale finito che si ottiene troncando il periodo. Per esempio $0{,}\overline{3} = \dfrac{1}{3}$, mentre $0{,}33 = \dfrac{33}{100}$; la differenza è piccola, ma nei quesiti con le opzioni scritte come frazioni le due scritture portano a risposte diverse.
:::

## Ordinamento e disuguaglianze

:::teorema{#confronto-frazioni titolo="Confronto di frazioni"}
Se $b > 0$ e $d > 0$, allora
$$
\frac{a}{b} < \frac{c}{d} \iff a \cdot d < b \cdot c .
$$
La regola si ottiene riducendo le due frazioni al denominatore comune $b \cdot d$: le frazioni diventano $\dfrac{a \cdot d}{b \cdot d}$ e $\dfrac{b \cdot c}{b \cdot d}$, e tra due frazioni con lo stesso denominatore positivo è minore quella con il numeratore minore. Per confrontare $\dfrac{5}{7}$ e $\dfrac{3}{4}$ si calcolano $5 \cdot 4 = 20$ e $7 \cdot 3 = 21$; poiché $20 < 21$, si ha $\dfrac{5}{7} < \dfrac{3}{4}$. In alternativa si può scrivere ogni frazione come decimale con due o tre cifre: $\dfrac{5}{7} \approx 0{,}714$ e $\dfrac{3}{4} = 0{,}75$.
:::

:::teorema{#confronto-radici-potenze titolo="Confronto di radici e di potenze"}
Fra numeri positivi valgono due regole.

- Le radici quadrate mantengono l'ordine: se $0 \leq a < b$, allora $\sqrt{a} < \sqrt{b}$. Per confrontare $2\sqrt{3}$ e $3\sqrt{2}$ si portano i fattori dentro la radice, $2\sqrt{3} = \sqrt{4 \cdot 3} = \sqrt{12}$ e $3\sqrt{2} = \sqrt{18}$, quindi $2\sqrt{3} < 3\sqrt{2}$.
- Le potenze con lo stesso esponente positivo mantengono l'ordine delle basi: se $0 < a < b$ e $n$ è un intero positivo, allora $a^n < b^n$. Per confrontare $2^{30}$ e $3^{20}$ si scrivono con lo stesso esponente, $2^{30} = (2^3)^{10} = 8^{10}$ e $3^{20} = (3^2)^{10} = 9^{10}$; poiché $8 < 9$, si ha $2^{30} < 3^{20}$.

Le due regole valgono perché, fra numeri positivi, se una base è maggiore lo sono anche tutti i prodotti che la ripetono. Il confronto delle potenze è ripreso nel capitolo su potenze, esponenziali e logaritmi.
:::

:::teorema{#proprieta-disuguaglianze titolo="Proprietà delle disuguaglianze"}
Siano $a$, $b$, $c$ numeri reali con $a < b$.

- Sommando lo stesso numero ai due membri il verso non cambia: $a + c < b + c$.
- Moltiplicando per un numero positivo il verso non cambia: se $c > 0$, allora $a c < b c$.
- Moltiplicando per un numero negativo il verso si inverte: se $c < 0$, allora $a c > b c$.
- Se $a$ e $b$ sono positivi, i reciproci hanno verso opposto, $\dfrac{1}{a} > \dfrac{1}{b}$, e i quadrati lo stesso verso, $a^2 < b^2$.

La terza proprietà vale perché moltiplicare per un numero negativo scambia la posizione dei numeri rispetto allo zero sulla retta: da $2 < 5$ si ottiene $-2 > -5$. Le stesse regole valgono per la divisione, che è la moltiplicazione per il reciproco. Sono le proprietà che si usano per risolvere le disequazioni, trattate nel capitolo su equazioni, disequazioni e sistemi.
:::

:::attenzione
Senza l'ipotesi che i numeri siano positivi, l'ultima proprietà *non* vale. Per esempio $-3 < 2$, ma $(-3)^2 = 9 > 4 = 2^2$; e $-2 < 1$, ma $\dfrac{1}{-2} < 1$, perché i due reciproci hanno segni diversi.
:::

## Valore assoluto

:::definizione{#valore-assoluto titolo="Valore assoluto"}
Il **valore assoluto** di un numero reale $x$ è
$$
|x| =
\begin{cases}
x & \text{se } x \geq 0 \\
-x & \text{se } x < 0
\end{cases}
$$
e rappresenta la distanza di $x$ da $0$ sulla retta reale. Per esempio $|5| = 5$ e $|-5| = -(-5) = 5$: i due numeri hanno la stessa distanza da $0$. Il valore assoluto non è mai negativo e vale $0$ solo per $x = 0$. Valgono inoltre $|a \cdot b| = |a| \cdot |b|$ e $\sqrt{x^2} = |x|$.

Più in generale $|x - a|$ è la **distanza** fra i numeri $x$ e $a$. Da qui vengono due regole, valide per $r > 0$:
$$
|x - a| < r \iff a - r < x < a + r,
\qquad
|x - a| > r \iff x < a - r \;\vee\; x > a + r .
$$
La prima dice che i numeri con distanza da $a$ minore di $r$ formano l'intervallo di centro $a$ e semiampiezza $r$; la seconda descrive i numeri esterni a quell'intervallo. Per esempio $|x - 3| < 2$ equivale a $1 < x < 5$.

::grafico{assi=0 uguale=1 poligoni="1,-0.07 5,-0.07 5,0.07 1,0.07" linee="-0.5,0 7.6,0;7.35,0.15 7.6,0 7.35,-0.15;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1" punti="1,0,vuoto;5,0,vuoto;3,0,pieno" etichette="-0.07,-0.5,0;0.93,-0.5,1;1.93,-0.5,2;2.93,-0.5,3;3.93,-0.5,4;4.93,-0.5,5;5.93,-0.5,6;6.93,-0.5,7;1.75,0.4,2;3.85,0.4,2" xmin=-0.8 xmax=7.9 ymin=-0.9 ymax=0.8 titolo="I numeri con $|x - 3| < 2$ hanno distanza da $3$ minore di $2$: formano l'intervallo $(1, 5)$, con gli estremi esclusi"}

:::

:::esempio{titolo="Una tolleranza sul prezzo"}
Un'impresa considera regolare il prezzo $p$ di una materia prima se si discosta da $50$ euro di non più di $3$ euro, cioè se $|p - 50| \leq 3$. La distanza fra $p$ e $50$ è al massimo $3$, quindi i prezzi regolari sono quelli con $47 \leq p \leq 53$. Un prezzo di $46{,}50$ euro non è regolare, perché $|46{,}50 - 50| = 3{,}50 > 3$.
:::

## Scomposizione in fattori primi, MCD e mcm

:::teorema{#fattori-primi titolo="Scomposizione in fattori primi"}
Un numero naturale maggiore di $1$ si dice **primo** se ha come divisori solo $1$ e sé stesso: $2$, $3$, $5$, $7$, $11$, $13$, … Ogni numero naturale maggiore di $1$ si scrive in un solo modo, a meno dell'ordine dei fattori, come prodotto di numeri primi. Per trovare la scomposizione si divide il numero per i primi in ordine crescente finché il quoziente è $1$:
$$
360 = 2 \cdot 180 = 2^2 \cdot 90 = 2^3 \cdot 45 = 2^3 \cdot 3^2 \cdot 5 .
$$
I criteri di divisibilità accorciano le prove: un numero è divisibile per $2$ se l'ultima cifra è pari, per $3$ se la somma delle cifre è divisibile per $3$, per $5$ se l'ultima cifra è $0$ o $5$. La scomposizione serve a calcolare MCD e mcm e a semplificare le frazioni.
:::

:::definizione{#mcd-mcm titolo="Massimo comune divisore e minimo comune multiplo"}
Il **massimo comune divisore** $\mathrm{MCD}(a, b)$ è il più grande numero che divide sia $a$ sia $b$; il **minimo comune multiplo** $\mathrm{mcm}(a, b)$ è il più piccolo numero positivo che è multiplo sia di $a$ sia di $b$. Dalle scomposizioni in fattori primi:

- il MCD è il prodotto dei fattori primi *comuni*, ciascuno con l'esponente minore;
- il mcm è il prodotto di *tutti* i fattori primi che compaiono, ciascuno con l'esponente maggiore.

Con $84 = 2^2 \cdot 3 \cdot 7$ e $120 = 2^3 \cdot 3 \cdot 5$ si ottiene
$$
\mathrm{MCD}(84, 120) = 2^2 \cdot 3 = 12,
\qquad
\mathrm{mcm}(84, 120) = 2^3 \cdot 3 \cdot 5 \cdot 7 = 840 .
$$
Vale sempre $\mathrm{MCD}(a, b) \cdot \mathrm{mcm}(a, b) = a \cdot b$, e infatti $12 \cdot 840 = 10\,080 = 84 \cdot 120$. Questa uguaglianza serve da controllo rapido.
:::

:::osservazione{#problemi-mcd-mcm titolo="Quando si usa il MCD e quando il mcm"}
Nei problemi il tipo di domanda indica quale dei due numeri si cerca.

- Il **mcm** risponde alle domande su eventi che si ripetono: due prodotti riforniti ogni $12$ e ogni $18$ giorni, riforniti insieme oggi, tornano a essere riforniti insieme dopo $\mathrm{mcm}(12, 18) = 36$ giorni.
- Il **MCD** risponde alle domande su divisioni in parti uguali le più grandi possibile: $48$ penne e $36$ matite si distribuiscono in confezioni tutte uguali, senza avanzi, al massimo in $\mathrm{MCD}(48, 36) = 12$ confezioni, ciascuna con $4$ penne e $3$ matite.

Il mcm dei denominatori è anche il denominatore comune più piccolo per sommare due frazioni.
:::

## Percentuali

:::definizione{#percentuale titolo="Percentuale"}
Una **percentuale** è una frazione con denominatore $100$: $p\%$ significa $\dfrac{p}{100}$. Il $p\%$ di un numero $N$ è quindi
$$
\frac{p}{100} \cdot N .
$$
I quesiti chiedono una delle tre quantità $p$, $N$ e la parte $P = \dfrac{p}{100} \cdot N$, conoscendo le altre due.

- Il $15\%$ di $240$ è $\dfrac{15}{100} \cdot 240 = 36$.
- $18$ è il $p\%$ di $72$ con $p = \dfrac{18}{72} \cdot 100 = 25$.
- $30$ è il $12\%$ di $N = \dfrac{30 \cdot 100}{12} = 250$.

Alcune percentuali corrispondono a frazioni semplici: $50\% = \dfrac{1}{2}$, $25\% = \dfrac{1}{4}$, $20\% = \dfrac{1}{5}$, $10\% = \dfrac{1}{10}$. Riconoscerle permette di fare i conti a mente: il $25\%$ di $360$ è un quarto di $360$, cioè $90$.
:::

:::teorema{#aumenti-e-sconti titolo="Aumenti e sconti con il fattore moltiplicativo"}
Aumentare un valore $V$ del $p\%$ equivale a moltiplicarlo per $1 + \dfrac{p}{100}$; diminuirlo del $p\%$ equivale a moltiplicarlo per $1 - \dfrac{p}{100}$. Il numero per cui si moltiplica si chiama **fattore moltiplicativo**. La regola vale perché al valore $V$ si aggiunge, o si toglie, la parte $\dfrac{p}{100} \cdot V$, e raccogliendo $V$ si ottiene $V \cdot \left(1 \pm \dfrac{p}{100}\right)$.

Un prezzo di $160$ euro scontato del $35\%$ diventa $160 \cdot 0{,}65 = 104$ euro; un costo di $250$ euro aumentato dell'$8\%$ diventa $250 \cdot 1{,}08 = 270$ euro. Il fattore moltiplicativo fa ottenere il valore finale con un solo prodotto.
:::

:::definizione{#variazione-percentuale titolo="Variazione percentuale"}
Quando una grandezza passa dal valore $V_1 > 0$ al valore $V_2$, la sua **variazione percentuale** è
$$
\frac{V_2 - V_1}{V_1} \cdot 100 .
$$
Si divide sempre per il valore *iniziale*. La variazione è positiva per un aumento e negativa per una diminuzione. Un fatturato che passa da $80\,000$ a $92\,000$ euro aumenta del $\dfrac{12\,000}{80\,000} \cdot 100 = 15\%$; un prezzo che scende da $64$ a $48$ euro diminuisce del $\dfrac{16}{64} \cdot 100 = 25\%$.
:::

:::teorema{#variazioni-successive titolo="Variazioni percentuali successive"}
Se un valore subisce una dopo l'altra due variazioni percentuali, il valore finale si ottiene moltiplicando per i due fattori moltiplicativi. La seconda variazione si calcola sul valore già modificato dalla prima, perciò i fattori si moltiplicano e le percentuali non si sommano. Due sconti successivi del $20\%$ e del $10\%$ danno il fattore $0{,}8 \cdot 0{,}9 = 0{,}72$, cioè uno sconto complessivo del $28\%$ e non del $30\%$.

::grafico{assi=0 uguale=1 poligoni="0,4 100,4 100,5.4 0,5.4;0,2 80,2 80,3.4 0,3.4;0,0 72,0 72,1.4 0,1.4" etichette="30,4.5,100 euro (prezzo iniziale);25,2.5,80 euro (dopo −20%);22,0.5,72 euro (dopo −10%)" xmin=-5 xmax=110 ymin=-1 ymax=6.5 titolo="Un prezzo di $100$ euro scontato del $20\%$ e poi del $10\%$: $100 \cdot 0{,}8 \cdot 0{,}9 = 72$ euro, cioè uno sconto complessivo del $28\%$"}

:::

:::attenzione
Un aumento e una diminuzione della stessa percentuale *non* si compensano. Un prezzo di $100$ euro aumentato del $20\%$ diventa $120$ euro; diminuito poi del $20\%$ diventa $120 \cdot 0{,}8 = 96$ euro, perché il secondo $20\%$ è calcolato su $120$. Si compensano invece un aumento del $25\%$ e una diminuzione del $20\%$, perché $1{,}25 \cdot 0{,}8 = 1$.
:::

:::teorema{#valore-iniziale titolo="Ritrovare il valore iniziale"}
Se il valore finale $V_f$ è stato ottenuto da un valore iniziale $V$ con il fattore moltiplicativo $k$, cioè $V_f = V \cdot k$, allora
$$
V = \frac{V_f}{k} .
$$
Si divide per il fattore moltiplicativo, perché la divisione è l'operazione inversa della moltiplicazione. Se dopo uno sconto del $20\%$ si pagano $72$ euro, il prezzo iniziale è $\dfrac{72}{0{,}8} = 90$ euro. Aggiungere il $20\%$ a $72$ euro darebbe $86{,}40$ euro, che è sbagliato, perché lo sconto era stato calcolato su $90$ euro e non su $72$.
:::

:::osservazione{#punti-percentuali titolo="Punti percentuali"}
Quando la grandezza che varia è già una percentuale, come un tasso di interesse o una quota di mercato, si distingue la differenza in **punti percentuali** dalla variazione percentuale. Se un tasso di interesse passa dal $2{,}5\%$ al $3\%$, la differenza è di $0{,}5$ punti percentuali, mentre la variazione percentuale è $\dfrac{3 - 2{,}5}{2{,}5} \cdot 100 = 20\%$. Nei quesiti le due risposte compaiono spesso entrambe tra le opzioni.
:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Metodi rapidi"}
Nel TIEC ogni quesito ha quattro opzioni e il tempo medio è di circa un minuto. Molti quesiti di questo capitolo si risolvono senza il calcolo completo.

- **Stima**: il $19{,}8\%$ di $4012$ è circa il $20\%$ di $4000$, cioè $800$; tra le opzioni di solito una sola è vicina alla stima.
- **Eliminazione delle opzioni**: un prezzo scontato è minore del prezzo iniziale, il numero di elementi di $A \cap B$ non supera né $|A|$ né $|B|$, il MCD divide entrambi i numeri e il mcm è un multiplo di entrambi. Le opzioni che violano questi vincoli si scartano subito.
- **Sostituzione dei valori**: per una domanda sul valore assoluto o su una disuguaglianza si prova un numero comodo nelle opzioni. Per $|x + 1| \geq 3$ il valore $x = 0$ non è una soluzione, perché $|0 + 1| = 1 < 3$, quindi si scartano le opzioni che contengono $x = 0$.
- **Controllo con il decimale**: una frazione generatrice si controlla dividendo a mente, perché $\dfrac{4}{11} = 0{,}3636\ldots$ conferma $0{,}\overline{36}$.
- **Controllo dell'ordine di grandezza**: nei confronti fra potenze si usa $2^{10} = 1024 \approx 10^3$, quindi $2^{30} \approx 10^9$.

Per le percentuali il **fattore moltiplicativo** riduce aumenti, sconti e variazioni successive a un solo prodotto, e la divisione per lo stesso fattore riporta al valore iniziale.
:::
