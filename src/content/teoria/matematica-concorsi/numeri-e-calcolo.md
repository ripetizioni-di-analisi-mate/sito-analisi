---
titolo: Numeri, frazioni e calcolo
sommario: Come si calcolano le espressioni con numeri interi, frazioni e decimali, come si trovano MCD e mcm e come si usano potenze, radici, notazione scientifica e arrotondamenti nei quiz a risposta multipla.
---

## Insiemi numerici

:::definizione{#numeri-naturali-e-interi titolo="Numeri naturali e numeri interi"}
I **numeri naturali** sono i numeri che servono a contare, cioè $0, 1, 2, 3, \ldots$, e il loro insieme si indica con $\mathbb{N}$. La somma e il prodotto di due numeri naturali sono ancora numeri naturali, mentre la differenza può non esserlo: per esempio $3 - 5$ non è un numero naturale. Per questo si introducono i **numeri interi** $\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots$, il cui insieme si indica con $\mathbb{Z}$. Un numero intero ha un segno e un **valore assoluto**, che è il numero senza il segno; il valore assoluto di $-7$ è $7$ e si scrive $|-7| = 7$. I numeri interi descrivono le grandezze che hanno due versi, come un saldo bancario. Un conto con $120$ euro sul quale si addebitano $150$ euro ha saldo $120 - 150 = -30$ euro.
:::

:::definizione{#numeri-razionali titolo="Numeri razionali"}
Un **numero razionale** è un numero che si può scrivere come frazione $\dfrac{a}{b}$, con $a$ e $b$ interi e $b \neq 0$. Il loro insieme si indica con $\mathbb{Q}$. Ogni intero è razionale, perché per esempio $5 = \dfrac{5}{1}$, e ogni numero con un numero finito di cifre dopo la virgola è razionale, perché per esempio $0{,}75 = \dfrac{75}{100} = \dfrac{3}{4}$. Su una retta orientata ogni numero razionale occupa un punto, e tra due numeri è maggiore quello che si trova più a destra.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0;3.3,0.1 3.5,0 3.3,-0.1;-3,-0.08 -3,0.08;-2,-0.08 -2,0.08;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;3,-0.08 3,0.08" punti="-2,0,pieno;-0.5,0,pieno;0.75,0,pieno;2,0,pieno" etichette="-3.12,-0.4,−3;-2.12,-0.4,−2;-1.12,-0.4,−1;-0.05,-0.4,0;0.95,-0.4,1;1.95,-0.4,2;2.95,-0.4,3;-0.82,0.25,−0,5;0.5,0.25,0,75" xmin=-3.8 xmax=3.8 ymin=-0.7 ymax=0.6 titolo="Sulla retta orientata il numero più a destra è il maggiore, quindi $-2 < -0{,}5 < 0{,}75 < 2$"}

:::

:::attenzione
Tra due numeri negativi è maggiore quello con il valore assoluto minore. Per esempio $-2 > -5$, anche se $2 < 5$, perché sulla retta $-2$ si trova a destra di $-5$. Una temperatura che passa da $-2$ °C a $-5$ °C è quindi diminuita.
:::

## Operazioni, segni ed espressioni

:::teorema{#regole-dei-segni titolo="Regole dei segni"}
Nel prodotto e nel quoziente di due numeri interi il segno del risultato dipende soltanto dai segni dei due numeri.

- Se i due numeri hanno lo stesso segno, il risultato è positivo: $(-3) \cdot (-4) = 12$ e $\dfrac{-12}{-4} = 3$.
- Se i due numeri hanno segni diversi, il risultato è negativo: $(-3) \cdot 4 = -12$ e $\dfrac{12}{-4} = -3$.

Moltiplicare per $-1$ porta ogni numero nel suo simmetrico rispetto allo zero, e ripetere due volte l'operazione riporta al numero di partenza; per questo $(-1) \cdot (-1) = 1$ e il prodotto di due numeri negativi è positivo. In un prodotto di più fattori il risultato è negativo se i fattori negativi sono in numero dispari, perciò $(-1) \cdot (-2) \cdot (-3) = -6$. Nella somma di due numeri di segno diverso si sottraggono i valori assoluti, e il risultato ha il segno del numero con valore assoluto maggiore, come in $-7 + 3 = -4$. Il segno meno davanti a un'espressione cambia il segno di tutti i suoi termini, quindi $10 - (3 - 8) = 10 - 3 + 8 = 15$.
:::

:::teorema{#ordine-operazioni titolo="Ordine delle operazioni"}
In un'espressione si calcolano prima le potenze, poi le moltiplicazioni e le divisioni nell'ordine in cui compaiono da sinistra a destra, infine le addizioni e le sottrazioni, anch'esse da sinistra a destra. Se ci sono parentesi, si calcolano prima le espressioni contenute nelle parentesi tonde, poi quelle nelle quadre, infine quelle nelle graffe. La regola è una convenzione, adottata perché ogni espressione abbia un solo valore. Per esempio
$$
20 - 4 \cdot 3 = 20 - 12 = 8 ,
$$
mentre $(20 - 4) \cdot 3 = 48$.
:::

:::esempio{#espressioni-numeriche titolo="Espressione con le parentesi"}
Si calcola il valore di un'espressione con parentesi tonde e quadre:
$$
\begin{aligned}
30 - 2 \cdot [\,4 + 3 \cdot (5 - 7)\,] &= 30 - 2 \cdot [\,4 + 3 \cdot (-2)\,] \\[6pt]
&= 30 - 2 \cdot [\,4 - 6\,] \\[6pt]
&= 30 - 2 \cdot (-2) \\[6pt]
&= 30 + 4 = 34 .
\end{aligned}
$$
Nell'espressione $4 + 3 \cdot (-2)$ la moltiplicazione precede l'addizione, e il prodotto $-2 \cdot (-2)$ è positivo per la regola dei segni. Chi calcola per prima la sottrazione $30 - 2$ ottiene il risultato sbagliato $28 \cdot (-2) = -56$.
:::

## Divisibilità, MCD e mcm

:::definizione{#multipli-e-divisori titolo="Multipli e divisori"}
Un numero naturale $a$ è **divisibile** per un numero naturale $b \neq 0$ se la divisione di $a$ per $b$ ha resto zero. In questo caso $b$ si dice **divisore** di $a$ e $a$ si dice **multiplo** di $b$. Il numero $36$ è divisibile per $4$, perché $36 = 4 \cdot 9$, mentre non è divisibile per $5$, perché $36 = 5 \cdot 7 + 1$ e il resto è $1$. I divisori di $36$ sono $1, 2, 3, 4, 6, 9, 12, 18, 36$, mentre i multipli di $4$ sono infiniti.
:::

:::teorema{#criteri-divisibilita titolo="Criteri di divisibilità"}
Un numero naturale è divisibile:

- per $2$ se l'ultima cifra è pari, cioè $0$, $2$, $4$, $6$ oppure $8$;
- per $3$ se la somma delle sue cifre è divisibile per $3$;
- per $4$ se il numero formato dalle ultime due cifre è divisibile per $4$;
- per $5$ se l'ultima cifra è $0$ oppure $5$;
- per $9$ se la somma delle sue cifre è divisibile per $9$;
- per $10$, $100$, $1000$ se termina rispettivamente con almeno uno, due, tre zeri;
- per $11$ se la differenza tra la somma delle cifre di posto dispari e la somma delle cifre di posto pari è un multiplo di $11$, zero compreso.

I criteri dicono se una divisione ha resto zero senza eseguirla. Quelli del $3$ e del $9$ valgono perché $10$, $100$, $1000$, … superano di $1$ un multiplo di $9$, perciò un numero e la somma delle sue cifre hanno lo stesso resto nella divisione per $9$ e per $3$. Il numero $5\,742$ ha somma delle cifre $18$, quindi è divisibile per $9$ e per $3$. Le sue ultime due cifre formano $42$, che non è multiplo di $4$, perciò $5\,742$ non è divisibile per $4$.
:::

:::definizione{#numeri-primi titolo="Numeri primi"}
Un numero naturale maggiore di $1$ è **primo** se i suoi soli divisori sono $1$ e il numero stesso; altrimenti si dice **composto**. I numeri primi minori di $50$ sono
$$
2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ 41,\ 43,\ 47 .
$$
Per stabilire se un numero $n$ è primo si prova a dividerlo per i numeri primi il cui quadrato non supera $n$. La prova si ferma lì perché, se $n = a \cdot b$ con $a \leq b$, allora $a \cdot a \leq n$. Per $97$ si provano $2$, $3$, $5$ e $7$, dato che $11^2 = 121 > 97$; nessuna di queste divisioni ha resto zero, quindi $97$ è primo. Il numero $91$ è invece composto, perché $91 = 7 \cdot 13$.
:::

:::teorema{#scomposizione titolo="Scomposizione in fattori primi"}
Ogni numero naturale maggiore di $1$ si scrive in un solo modo, a meno dell'ordine, come prodotto di numeri primi. Per trovare la scomposizione si divide il numero per il più piccolo primo che lo divide, e si ripete con il quoziente fino ad arrivare a $1$. I fattori ripetuti si scrivono come potenze, per esempio $2 \cdot 2 \cdot 2 = 2^3$:
$$
360 = 2 \cdot 180 = 2^2 \cdot 90 = 2^3 \cdot 45 = 2^3 \cdot 3 \cdot 15 = 2^3 \cdot 3^2 \cdot 5 .
$$
La scomposizione serve a calcolare MCD e mcm, a semplificare le frazioni e a contare i divisori di un numero.
:::

:::osservazione{#numero-divisori titolo="Numero dei divisori"}
Se la scomposizione di un numero è $p^a \cdot q^b \cdot r^c$, con $p$, $q$, $r$ primi diversi, il numero ha $(a + 1) \cdot (b + 1) \cdot (c + 1)$ divisori. Infatti ogni divisore si ottiene scegliendo quante volte compare il fattore $p$, da nessuna fino ad $a$ volte, cioè in $a + 1$ modi, e allo stesso modo per $q$ e per $r$. Poiché $360 = 2^3 \cdot 3^2 \cdot 5$, i divisori di $360$ sono $4 \cdot 3 \cdot 2 = 24$.
:::

:::definizione{#mcd titolo="Massimo comune divisore"}
Il **massimo comune divisore** di due o più numeri, indicato con $\operatorname{MCD}$, è il più grande numero che li divide tutti. Si calcola scomponendo i numeri in fattori primi e moltiplicando i fattori *comuni*, ciascuno con l'esponente *minore*. Per $90 = 2 \cdot 3^2 \cdot 5$ e $126 = 2 \cdot 3^2 \cdot 7$ i fattori comuni sono $2$ e $3^2$, quindi
$$
\operatorname{MCD}(90, 126) = 2 \cdot 3^2 = 18 .
$$
Due numeri che hanno MCD uguale a $1$ si dicono **primi tra loro**, come $8$ e $15$.
:::

:::definizione{#mcm titolo="Minimo comune multiplo"}
Il **minimo comune multiplo** di due o più numeri, indicato con $\operatorname{mcm}$, è il più piccolo numero diverso da zero che è multiplo di tutti. Si calcola moltiplicando i fattori primi *comuni e non comuni*, ciascuno con l'esponente *maggiore*. Con gli stessi numeri si ha
$$
\operatorname{mcm}(90, 126) = 2 \cdot 3^2 \cdot 5 \cdot 7 = 630 .
$$
Per due numeri vale la relazione $\operatorname{MCD}(a, b) \cdot \operatorname{mcm}(a, b) = a \cdot b$, che offre un controllo del calcolo: $18 \cdot 630 = 11\,340$ e anche $90 \cdot 126 = 11\,340$. Il mcm dei denominatori è anche il denominatore comune che si usa per sommare le frazioni.
:::

:::osservazione{#problemi-mcd-mcm titolo="Problemi con MCD e mcm"}
Nei problemi con il testo la domanda indica quale dei due numeri si cerca.

- Il **mcm** si usa per eventi che si ripetono a intervalli regolari, quando si chiede dopo quanto tempo coincidono di nuovo. Due corrieri passano oggi entrambi da un ufficio, uno ogni $6$ giorni e l'altro ogni $8$ giorni, quindi ripassano insieme dopo $\operatorname{mcm}(6, 8) = 24$ giorni.
- Il **MCD** si usa quando quantità diverse si dividono in parti uguali, le più grandi possibili, senza resti. Due nastri di $90$ cm e $126$ cm si tagliano in pezzi uguali lunghi $\operatorname{MCD}(90, 126) = 18$ cm, e i pezzi sono $5 + 7 = 12$.

Il mcm è maggiore o uguale a ciascuno dei numeri e il MCD è minore o uguale, perciò con questo controllo si escludono le opzioni nate dallo scambio dei due.

::grafico{assi=0 uguale=1 linee="0,0 26,0;25.4,0.3 26,0 25.4,-0.3;0,2.5 26,2.5;25.4,2.8 26,2.5 25.4,2.2" punti="0,2.5,pieno;6,2.5,pieno;12,2.5,pieno;18,2.5,pieno;24,2.5,pieno;0,0,pieno;8,0,pieno;16,0,pieno;24,0,pieno" segmenti="24,0,24,2.5;0,0,0,2.5" etichette="-0.3,1.6,0;5.6,1.6,6;11.4,1.6,12;17.4,1.6,18;23.4,1.6,24;-0.3,-0.9,0;7.6,-0.9,8;15.4,-0.9,16;23.4,-0.9,24;-7.5,2.3,ogni 6 giorni;-7.5,-0.2,ogni 8 giorni" xmin=-8 xmax=27 ymin=-1.6 ymax=3.4 titolo="Passaggi dei due corrieri: coincidono il giorno $0$ e poi il giorno $24 = \operatorname{mcm}(6, 8)$"}

:::

## Frazioni

:::definizione{#frazione titolo="Frazione"}
Una **frazione** $\dfrac{a}{b}$, con $b \neq 0$, indica che un intero è stato diviso in $b$ parti uguali e che se ne prendono $a$. Il numero $a$ si chiama numeratore e il numero $b$ denominatore. La frazione è *propria* se $a < b$, e allora vale meno di $1$, come $\dfrac{3}{5}$; è *impropria* se $a > b$, come $\dfrac{7}{4} = 1 + \dfrac{3}{4}$; è *apparente* se $a$ è un multiplo di $b$, come $\dfrac{12}{4} = 3$, e allora rappresenta un numero intero. Una frazione è anche il risultato della divisione di $a$ per $b$, quindi $\dfrac{3}{4} = 0{,}75$.
:::

:::teorema{#frazioni-equivalenti titolo="Proprietà invariantiva"}
Moltiplicando o dividendo numeratore e denominatore di una frazione per lo stesso numero diverso da zero si ottiene una frazione **equivalente**, cioè con lo stesso valore: per esempio $\dfrac{3}{4} = \dfrac{6}{8} = \dfrac{75}{100}$. La proprietà vale perché, se si raddoppia il numero delle parti, ogni parte si dimezza, e per avere la stessa quantità se ne prende il doppio. Dividendo numeratore e denominatore per il loro MCD si **semplifica** la frazione, cioè la si riduce ai minimi termini. Poiché $\operatorname{MCD}(36, 48) = 12$, si ha
$$
\frac{36}{48} = \frac{3 \cdot 12}{4 \cdot 12} = \frac{3}{4} .
$$

::grafico{assi=0 uguale=1 poligoni="0,1.6 3,1.6 3,2.6 0,2.6;0,0 3,0 3,1 0,1" linee="0,1.6 4,1.6 4,2.6 0,2.6 0,1.6;1,1.6 1,2.6;2,1.6 2,2.6;3,1.6 3,2.6;0,0 4,0 4,1 0,1 0,0;0.5,0 0.5,1;1,0 1,1;1.5,0 1.5,1;2,0 2,1;2.5,0 2.5,1;3,0 3,1;3.5,0 3.5,1" etichette="4.3,2.0,3 parti su 4;4.3,0.4,6 parti su 8" xmin=-0.4 xmax=7 ymin=-0.4 ymax=3 titolo="La stessa parte del rettangolo è $\dfrac{3}{4}$ e anche $\dfrac{6}{8}$: le due frazioni sono equivalenti"}

:::

:::teorema{#confronto-frazioni titolo="Confronto tra frazioni"}
Tra due frazioni con lo stesso denominatore è maggiore quella con il numeratore maggiore, per esempio $\dfrac{5}{7} > \dfrac{3}{7}$. Se i denominatori sono diversi, si riducono le frazioni allo stesso denominatore, che è il mcm dei denominatori, e si confrontano i numeratori. Per confrontare $\dfrac{5}{6}$ e $\dfrac{7}{9}$ si usa il denominatore $\operatorname{mcm}(6, 9) = 18$:
$$
\frac{5}{6} = \frac{15}{18},
\qquad
\frac{7}{9} = \frac{14}{18},
$$
quindi $\dfrac{5}{6} > \dfrac{7}{9}$. Con denominatori positivi vale anche il confronto dei **prodotti in croce**, cioè $\dfrac{a}{b} > \dfrac{c}{d}$ se e solo se $a \cdot d > b \cdot c$, che si ottiene moltiplicando i due membri per $b \cdot d$. Nell'esempio $5 \cdot 9 = 45$ è maggiore di $6 \cdot 7 = 42$.
:::

:::teorema{#operazioni-frazioni titolo="Operazioni con le frazioni"}
- Nell'addizione e nella sottrazione si riducono le frazioni al minimo comune denominatore e si sommano o si sottraggono i numeratori: $\dfrac{3}{4} + \dfrac{5}{6} = \dfrac{9}{12} + \dfrac{10}{12} = \dfrac{19}{12}$.
- Nella moltiplicazione si moltiplicano i numeratori tra loro e i denominatori tra loro, dopo aver semplificato un numeratore con un denominatore dove possibile: $\dfrac{4}{9} \cdot \dfrac{15}{8} = \dfrac{1 \cdot 5}{3 \cdot 2} = \dfrac{5}{6}$.
- Nella divisione si moltiplica la prima frazione per il **reciproco** della seconda, che si ottiene scambiando numeratore e denominatore. Il quoziente di $\dfrac{2}{3}$ diviso $\dfrac{4}{9}$ è quindi $\dfrac{2}{3} \cdot \dfrac{9}{4} = \dfrac{3}{2}$.

Nella somma serve lo stesso denominatore perché si possono sommare soltanto parti della stessa grandezza. La regola della divisione si controlla con la moltiplicazione, perché $\dfrac{3}{2} \cdot \dfrac{4}{9} = \dfrac{2}{3}$.
:::

:::attenzione
La somma di due frazioni *non* si ottiene sommando separatamente i numeratori e i denominatori. Per esempio $\dfrac{1}{2} + \dfrac{1}{2} = 1$, mentre sommando numeratori e denominatori si otterrebbe $\dfrac{2}{4} = \dfrac{1}{2}$.
:::

## Frazione di un numero

:::definizione{#frazione-di-un-numero titolo="Frazione di un numero"}
La frazione $\dfrac{a}{b}$ di un numero $N$ è il prodotto $\dfrac{a}{b} \cdot N$. In pratica si divide $N$ per il denominatore, ottenendo il valore di una parte, e si moltiplica il risultato per il numeratore. I $\dfrac{3}{5}$ di $350$ euro sono
$$
\frac{350}{5} \cdot 3 = 70 \cdot 3 = 210 \text{ euro} .
$$
Una frazione propria di un numero positivo è minore del numero, perciò nei quiz le opzioni maggiori del numero di partenza si possono scartare.
:::

:::teorema{#problemi-inversi titolo="Problema inverso"}
Se è nota la parte e si cerca l'intero, il calcolo si esegue al contrario: si divide la parte per il numeratore, ottenendo il valore di una parte, e si moltiplica per il denominatore. Se i $\dfrac{3}{8}$ di un numero valgono $45$, una parte vale $\dfrac{45}{3} = 15$, quindi il numero è
$$
15 \cdot 8 = 120 .
$$
Lo stesso risultato si ottiene dividendo la parte per la frazione, cioè $45 \cdot \dfrac{8}{3} = 120$.
:::

:::esempio{#frazione-del-resto titolo="Frazioni successive"}
Quando una frazione si applica a ciò che resta dopo una prima spesa, le due frazioni si riferiscono a interi diversi, e si moltiplicano le parti che restano. Un dipendente spende $\dfrac{1}{4}$ dello stipendio per l'affitto e $\dfrac{2}{3}$ di ciò che resta per le altre spese, e gli avanzano $400$ euro. Dopo l'affitto resta $\dfrac{3}{4}$ dello stipendio, e le altre spese ne lasciano $\dfrac{1}{3}$, quindi avanza
$$
\frac{1}{3} \cdot \frac{3}{4} = \frac{1}{4}
$$
dello stipendio. Poiché $\dfrac{1}{4}$ dello stipendio vale $400$ euro, lo stipendio è $1\,600$ euro. Sommando invece $\dfrac{1}{4} + \dfrac{2}{3} = \dfrac{11}{12}$ si otterrebbe un avanzo di $\dfrac{1}{12}$ e uno stipendio di $4\,800$ euro, che è sbagliato.
:::

## Numeri decimali e arrotondamenti

:::definizione{#numeri-decimali titolo="Numeri decimali limitati e periodici"}
In un numero decimale le cifre dopo la virgola indicano decimi, centesimi, millesimi e così via. Dividendo il numeratore di una frazione per il denominatore si ottiene un numero decimale di uno di due tipi.

- Un decimale **limitato** ha un numero finito di cifre dopo la virgola, come $\dfrac{3}{8} = 0{,}375$. Questo succede quando il denominatore della frazione ridotta ai minimi termini ha come fattori primi soltanto $2$ e $5$.
- Un decimale **periodico** ha un gruppo di cifre che si ripete all'infinito, come $\dfrac{1}{3} = 0{,}333\ldots$, che si scrive $0{,}\overline{3}$, oppure $\dfrac{7}{6} = 1{,}1666\ldots = 1{,}1\overline{6}$.

Per confrontare due decimali si confrontano le parti intere e poi le cifre decimali una alla volta, da sinistra. Per esempio $0{,}7 > 0{,}69$, perché i decimi sono $7$ contro $6$, anche se $0{,}69$ ha più cifre.
:::

:::teorema{#frazione-generatrice titolo="Frazione generatrice"}
In un decimale periodico il gruppo di cifre che si ripete si chiama **periodo**, e le cifre tra la virgola e il periodo formano l'antiperiodo: in $1{,}1\overline{6}$ il periodo è $6$ e l'antiperiodo è $1$. Ogni decimale periodico è uguale a una frazione, detta **frazione generatrice**, che si scrive così.

- Al numeratore va il numero scritto senza virgola fino alla fine del primo periodo, meno il numero formato dalle cifre che precedono il periodo.
- Al denominatore vanno tanti $9$ quante sono le cifre del periodo, seguiti da tanti $0$ quante sono le cifre dell'antiperiodo.

$$
0{,}\overline{45} = \frac{45}{99} = \frac{5}{11},
\qquad
2{,}1\overline{6} = \frac{216 - 21}{90} = \frac{195}{90} = \frac{13}{6} .
$$
La regola vale perché, se $x = 0{,}\overline{45}$, allora $100\,x = 45{,}\overline{45}$; sottraendo $x$ le cifre decimali si eliminano, quindi $99\,x = 45$.
:::

:::osservazione{#arrotondamento titolo="Arrotondamento e troncamento"}
Per **arrotondare** un numero a una certa cifra si considera la cifra successiva. Se questa è $0$, $1$, $2$, $3$ o $4$, la cifra conservata resta uguale; se è $5$, $6$, $7$, $8$ o $9$, la cifra conservata aumenta di $1$. Le cifre successive si eliminano. Arrotondato ai decimi, $3{,}47$ diventa $3{,}5$, perché la cifra dei centesimi è $7$; arrotondato ai centesimi, $12{,}834$ diventa $12{,}83$. Il **troncamento** elimina le cifre successive senza modificare l'ultima cifra conservata, quindi $3{,}47$ troncato ai decimi diventa $3{,}4$. L'arrotondamento dà il valore più vicino tra quelli con il numero di cifre richiesto.

::grafico{assi=0 uguale=1 linee="-0.6,0 10.8,0;10.4,0.2 10.8,0 10.4,-0.2;0,-0.25 0,0.25;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.2 5,0.2;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.25 10,0.25" punti="7,0,pieno" segmenti="7,0.6,10,0.6;0,1.2,7,1.2" etichette="-0.6,-0.8,3,40;4.4,-0.8,3,45;9.4,-0.8,3,50;6.5,-0.8,3,47;7.9,0.8,0,03;2.9,1.4,0,07" xmin=-1 xmax=11 ymin=-1.3 ymax=2 titolo="Il numero $3{,}47$ dista $0{,}03$ da $3{,}5$ e $0{,}07$ da $3{,}4$, quindi arrotondato ai decimi diventa $3{,}5$"}

:::

## Potenze e notazione scientifica

:::definizione{#potenze titolo="Potenza"}
La **potenza** $a^n$, con $n$ numero naturale maggiore di $1$, è il prodotto di $n$ fattori uguali ad $a$. Il numero $a$ si chiama **base** e il numero $n$ esponente; si pone inoltre $a^1 = a$. Per esempio $2^5 = 2 \cdot 2 \cdot 2 \cdot 2 \cdot 2 = 32$ e $\left(\dfrac{2}{3}\right)^2 = \dfrac{4}{9}$. Per la regola dei segni, una potenza di base negativa è positiva se l'esponente è pari e negativa se è dispari, quindi $(-2)^4 = 16$ e $(-2)^3 = -8$. La potenza $10^n$ si scrive con la cifra $1$ seguita da $n$ zeri, per esempio $10^6 = 1\,000\,000$.
:::

:::teorema{#proprieta-potenze titolo="Proprietà delle potenze"}
Per $a$ e $b$ diversi da zero e per esponenti $m$ e $n$ valgono le uguaglianze
$$
a^m \cdot a^n = a^{m+n},
\qquad
\frac{a^m}{a^n} = a^{m-n},
\qquad
(a^m)^n = a^{m \cdot n},
\qquad
a^n \cdot b^n = (a \cdot b)^n .
$$
Le proprietà seguono dalla definizione contando i fattori; per esempio $2^3 \cdot 2^2$ è il prodotto di $3 + 2 = 5$ fattori uguali a $2$. Esse permettono di calcolare un'espressione senza svolgere i prodotti, dopo aver scritto le basi come potenze dello stesso numero:
$$
\frac{4^3 \cdot 2^5}{8^3} = \frac{2^6 \cdot 2^5}{2^9} = 2^{6 + 5 - 9} = 2^2 = 4 .
$$
:::

:::definizione{#esponente-negativo titolo="Esponente zero ed esponente negativo"}
Per $a \neq 0$ e $n$ naturale si pone
$$
a^0 = 1,
\qquad
a^{-n} = \frac{1}{a^n} .
$$
Le due definizioni sono scelte in modo che la proprietà del quoziente valga per ogni coppia di esponenti. Per esempio $\dfrac{a^3}{a^3} = 1$ e, per la proprietà, $\dfrac{a^3}{a^3} = a^0$, perciò $a^0 = 1$. Una potenza con esponente negativo si calcola con il reciproco della base, quindi $2^{-3} = \dfrac{1}{8}$ e $\left(\dfrac{3}{5}\right)^{-2} = \left(\dfrac{5}{3}\right)^2 = \dfrac{25}{9}$. Con le potenze di $10$ a esponente negativo si scrivono i numeri piccoli, come $10^{-3} = \dfrac{1}{1000} = 0{,}001$.
:::

:::attenzione
- Nell'espressione $-3^2$ l'esponente si applica solo a $3$, quindi $-3^2 = -9$, mentre $(-3)^2 = 9$.
- La potenza di una somma *non* è la somma delle potenze: $(2 + 3)^2 = 25$, mentre $2^2 + 3^2 = 13$.
- La somma di due potenze con la stessa base *non* si calcola sommando gli esponenti: $2^3 + 2^3 = 2 \cdot 2^3 = 2^4 = 16$, mentre $2^6 = 64$.
- Un esponente negativo *non* rende negativo il risultato: $2^{-3} = \dfrac{1}{8}$ è positivo.
:::

:::definizione{#notazione-scientifica titolo="Notazione scientifica"}
Un numero positivo è scritto in **notazione scientifica** quando ha la forma $a \cdot 10^n$, con $1 \leq a < 10$ e $n$ intero. La notazione serve a scrivere e a confrontare numeri molto grandi o molto piccoli:
$$
45\,000\,000 = 4{,}5 \cdot 10^7,
\qquad
0{,}000\,32 = 3{,}2 \cdot 10^{-4} .
$$
L'esponente è il numero di posti di cui si sposta la virgola per ottenere $a$; è positivo se la virgola si sposta verso sinistra, come per i numeri grandi, e negativo se si sposta verso destra, come per i numeri minori di $1$. Nei prodotti e nei quozienti si calcolano separatamente i numeri $a$ e le potenze di $10$, poi si riporta il risultato nella forma con $1 \leq a < 10$:
$$
(3 \cdot 10^5) \cdot (4 \cdot 10^{-2}) = 12 \cdot 10^3 = 1{,}2 \cdot 10^4 .
$$
:::

:::osservazione{#ordine-di-grandezza titolo="Ordine di grandezza"}
L'**ordine di grandezza** di un numero è la potenza di $10$ che lo approssima. Scritto il numero come $a \cdot 10^n$, una convenzione diffusa nei testi scolastici assegna l'ordine di grandezza $10^n$ se $a < 5$ e $10^{n+1}$ se $a \geq 5$. Per esempio $2{,}5 \cdot 10^{-4}$ ha ordine di grandezza $10^{-4}$, mentre $7{,}8 \cdot 10^5$ ha ordine di grandezza $10^6$. Alcuni testi usano come soglia $\sqrt{10} \approx 3{,}16$ al posto di $5$, perciò per $a$ compreso tra $3{,}16$ e $5$ le due convenzioni danno risultati diversi. L'ordine di grandezza serve a stimare un risultato e a scartare le opzioni che differiscono da esso per un fattore $10$ o $100$.
:::

## Radici quadrate e cubiche

:::definizione{#radici titolo="Radice quadrata e radice cubica"}
La **radice quadrata** di un numero $a \geq 0$ è il numero $\sqrt{a} \geq 0$ che elevato al quadrato dà $a$; per esempio $\sqrt{49} = 7$ perché $7^2 = 49$. Il numero $a$ sotto il segno di radice si chiama radicando. La radice quadrata di un numero negativo non è definita, perché ogni quadrato è maggiore o uguale a zero. La **radice cubica** $\sqrt[3]{a}$ è il numero che elevato al cubo dà $a$, ed è definita per ogni $a$: $\sqrt[3]{64} = 4$ e $\sqrt[3]{-8} = -2$, perché $(-2)^3 = -8$. I quadrati $1, 4, 9, \ldots, 196, 225$ dei numeri da $1$ a $15$ e i cubi $1, 8, 27, 64, 125, 216, 343, 512, 729, 1000$ dei numeri da $1$ a $10$ permettono di calcolare a mente molte radici. Il numero $\sqrt{2} = 1{,}4142\ldots$ ha infinite cifre decimali non periodiche, quindi non è razionale.
:::

:::teorema{#proprieta-radici titolo="Proprietà delle radici"}
Per $a \geq 0$ e $b > 0$ valgono le uguaglianze
$$
\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b},
\qquad
\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}} .
$$
Esse valgono perché i due membri sono numeri non negativi con lo stesso quadrato. Servono a **semplificare** una radice portando fuori i quadrati perfetti:
$$
\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2},
\qquad
\sqrt{0{,}0009} = \sqrt{\frac{9}{10\,000}} = \frac{3}{100} = 0{,}03 .
$$
Radici con lo stesso radicando si sommano sommando i numeri che le moltiplicano, quindi $\sqrt{8} + \sqrt{18} = 2\sqrt{2} + 3\sqrt{2} = 5\sqrt{2}$. Per togliere una radice dal denominatore si moltiplicano numeratore e denominatore per quella radice, per esempio $\dfrac{6}{\sqrt{3}} = \dfrac{6\sqrt{3}}{3} = 2\sqrt{3}$.
:::

:::attenzione
La radice di una somma *non* è la somma delle radici. Per esempio $\sqrt{9 + 16} = \sqrt{25} = 5$, mentre $\sqrt{9} + \sqrt{16} = 3 + 4 = 7$.
:::

:::esempio{#stima-radici titolo="Stima di una radice quadrata"}
Se il radicando non è un quadrato perfetto, la radice si colloca tra due interi consecutivi con i quadrati perfetti vicini. Poiché $9 < 12 < 16$, si ha $3 < \sqrt{12} < 4$. Poiché inoltre $3{,}5^2 = 12{,}25$ è maggiore di $12$, si ha anche $\sqrt{12} < 3{,}5$; il valore è $\sqrt{12} \approx 3{,}46$.

::grafico{f="sqrt(x)" punti="4,2,pieno;9,3,pieno;16,4,pieno;12,3.4641,pieno" segmenti="12,0,12,3.4641;0,3.4641,12,3.4641;9,0,9,3;16,0,16,4" xmin=-2 xmax=18 ymin=-1 ymax=5 titolo="Poiché $\sqrt{9} = 3$ e $\sqrt{16} = 4$, il valore $\sqrt{12} \approx 3{,}46$ è compreso tra $3$ e $4$"}

:::

## Metodi rapidi per i quiz

:::osservazione{#metodi-rapidi titolo="Controlli rapidi sul risultato"}
Nei quiz di calcolo le opzioni sbagliate nascono di solito da errori tipici, e alcuni controlli permettono di riconoscerle senza svolgere tutto il conto.

- **Stima**: si arrotondano i numeri e si calcola a mente. Per esempio $\dfrac{4{,}02 \cdot 59{,}7}{0{,}298}$ vale circa $\dfrac{4 \cdot 60}{0{,}3} = 800$, quindi le opzioni che differiscono da $800$ per un fattore $10$ si scartano.
- **Ultima cifra**: l'ultima cifra di un prodotto dipende solo dalle ultime cifre dei fattori. Il prodotto $37 \cdot 48$ termina con $6$, perché $7 \cdot 8 = 56$; tra le opzioni $1\,774$, $1\,776$ e $1\,778$ è quindi corretta $1\,776$.
- **Segno e ordine**: un prodotto con tre fattori negativi è negativo, una frazione propria di un numero positivo è minore del numero, il mcm non è minore dei numeri dati e il MCD non è maggiore.

I criteri di divisibilità offrono un ultimo controllo. Il prodotto $27 \cdot 43$ è multiplo di $9$, perciò anche la somma delle cifre del risultato $1\,161$ deve esserlo, e infatti vale $9$.
:::

:::osservazione{#frazioni-e-decimali-noti titolo="Frazioni e decimali da riconoscere"}
Alcune frazioni compaiono di continuo nei quiz, e riconoscere il loro valore decimale permette di confrontarle e di sommarle a mente:
$$
\frac{1}{2} = 0{,}5,
\qquad
\frac{1}{4} = 0{,}25,
\qquad
\frac{1}{5} = 0{,}2,
\qquad
\frac{1}{8} = 0{,}125,
\qquad
\frac{1}{3} = 0{,}\overline{3},
\qquad
\frac{1}{6} = 0{,}1\overline{6},
\qquad
\frac{1}{9} = 0{,}\overline{1} .
$$
Per confrontare $\dfrac{5}{8}$ e $\dfrac{2}{3}$ basta osservare che $\dfrac{5}{8} = 0{,}625$ e $\dfrac{2}{3} = 0{,}\overline{6}$, quindi $\dfrac{2}{3}$ è maggiore.
:::
