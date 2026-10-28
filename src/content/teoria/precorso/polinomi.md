---
titolo: Fattorizzazione, Ruffini e divisione tra polinomi
sommario: Che cos'è un polinomio, come si sviluppano e si riconoscono i prodotti notevoli, come si esegue la divisione tra polinomi e come si scompone un polinomio in fattori con la regola di Ruffini.
---

## Polinomi e grado

:::definizione{#polinomi titolo="Polinomio e grado"}
Un **polinomio** nella variabile $x$ è una somma di monomi,
$$
P(x) = a_n x^n + a_{n-1} x^{n-1} + \dots + a_1 x + a_0 ,
$$
con $a_n \neq 0$. I numeri $a_n, \dots, a_0$ sono i coefficienti, $a_n$ è il **coefficiente direttore**, $a_0$ è il termine noto e $n$ è il **grado**, indicato con $\deg P$. Un numero $c$ è una **radice** di $P$ se $P(c) = 0$. Il polinomio $P(x) = 2x^3 - 5x + 1$ ha grado $3$, coefficiente direttore $2$, termine noto $1$; il coefficiente di $x^2$ è $0$.
:::

:::teorema{#principio-di-identita titolo="Principio di identità dei polinomi"}
Due polinomi assumono lo stesso valore per ogni $x$ reale *se e solo se* hanno lo **stesso grado** e gli **stessi coefficienti**, termine per termine. Il principio permette di determinare coefficienti incogniti uguagliando i coefficienti dei termini dello stesso grado, e con esso si verificano divisioni e scomposizioni. Dall'uguaglianza $x^2 + bx + c = (x - 1)(x - 3) = x^2 - 4x + 3$ segue $b = -4$ e $c = 3$.
:::

:::osservazione
Nel prodotto di due polinomi i gradi **si sommano**, quindi $\deg (PQ) = \deg P + \deg Q$. Per questo un polinomio di grado $4$ scomposto in due fattori di grado positivo ha fattori di gradi $1$ e $3$ oppure $2$ e $2$.
:::

## Prodotti notevoli

Le identità seguenti valgono per ogni valore di $A$ e $B$ e si usano in *entrambi* i versi, per sviluppare e per scomporre.

:::teorema{#prodotti-notevoli titolo="Quadrato e cubo di binomio"}
$$
\begin{gathered}
(A + B)^2 = A^2 + 2AB + B^2, \qquad (A - B)^2 = A^2 - 2AB + B^2, \\[6pt]
(A + B)^3 = A^3 + 3A^2 B + 3A B^2 + B^3, \\[4pt]
(A - B)^3 = A^3 - 3A^2 B + 3A B^2 - B^3 .
\end{gathered}
$$
Letti da destra verso sinistra **scompongono**: un trinomio è un **quadrato di binomio** quando due termini sono quadrati e il terzo è il **doppio prodotto** delle due basi, con il segno del doppio prodotto che decide il segno nel binomio.
:::

:::esempio
$(2x + 3)^2 = 4x^2 + 12x + 9$. Nel verso opposto, $x^2 - 10x + 25 = (x - 5)^2$, poiché $x^2$ e $25$ sono i quadrati di $x$ e $5$ e $-10x$ è il doppio prodotto $-2 \cdot x \cdot 5$. Per il cubo, $(x + 2)^3 = x^3 + 6x^2 + 12x + 8$.
:::

:::teorema{#differenza-di-quadrati titolo="Differenza di quadrati"}
$$
A^2 - B^2 = (A - B)(A + B)
$$
È la scomposizione più rapida da riconoscere: due quadrati separati da un **segno meno**. Si applica anche *più volte* di seguito, quando uno dei fattori ottenuti è a sua volta una differenza di quadrati.
:::

:::esempio
$9x^2 - 16 = (3x - 4)(3x + 4)$. Con due applicazioni successive, $x^4 - 1 = (x^2 - 1)(x^2 + 1) = (x - 1)(x + 1)(x^2 + 1)$.
:::

:::attenzione
La somma di due quadrati $x^2 + k^2$, con $k \neq 0$, *non* si scompone in fattori di primo grado con coefficienti reali. Per esempio $x^2 + 4 \geq 4 > 0$ per ogni $x$, quindi $x^2 + 4$ **non ha radici reali** e nessun fattore della forma $x - c$ lo divide.

::grafico{f="x^2+4;4" xmin=-3 xmax=3 ymin=-1 ymax=10 punti="0,4,pieno" titolo="$y = x^2 + 4$ non scende mai sotto la retta $y = 4$ (tratteggiata), che tocca nel punto $(0, 4)$, quindi non incontra l'asse $x$: $x^2 + 4$ non ha radici reali"}

:::

:::teorema{#somma-e-differenza-di-cubi titolo="Somma e differenza di cubi"}
$$
A^3 + B^3 = (A + B)(A^2 - AB + B^2), \qquad
A^3 - B^3 = (A - B)(A^2 + AB + B^2)
$$
Il secondo fattore, detto **falso quadrato**, ha discriminante negativo e **non ha radici reali**, perciò la scomposizione non prosegue; il criterio con il discriminante si trova nel capitolo sulle equazioni e disequazioni polinomiali.
:::

:::esempio
$x^3 + 8 = (x + 2)(x^2 - 2x + 4)$, con $A = x$ e $B = 2$. Analogamente $27x^3 - 1 = (3x - 1)(9x^2 + 3x + 1)$, con $A = 3x$ e $B = 1$.
:::

## Divisione tra polinomi

:::teorema{#divisione-tra-polinomi titolo="Divisione con resto"}
Dati un dividendo $A(x)$ e un divisore $B(x)$ non nullo, esistono e sono *unici* un **quoziente** $Q(x)$ e un **resto** $R(x)$ tali che
$$
\begin{cases}
A(x) = B(x)\, Q(x) + R(x) \\[4pt]
R(x) = 0 \ \text{ oppure } \ \deg R < \deg B
\end{cases}
$$
La struttura è la stessa della divisione con resto tra numeri interi. Quando $R(x) = 0$ la divisione è **esatta** e $B(x)$ divide $A(x)$, cioè $B$ è un **fattore** di $A$; per questo la divisione è uno strumento di fattorizzazione.
:::

:::esempio{titolo="L'algoritmo di divisione, passo per passo"}
Divisione di $A(x) = 2x^3 - 3x^2 + 4x - 5$ per $B(x) = x^2 - x + 1$. Il primo termine del quoziente è il rapporto tra i termini di **grado massimo**, $\dfrac{2x^3}{x^2} = 2x$; si moltiplica il divisore per $2x$ e si sottrae il prodotto dal dividendo:
$$
2x^3 - 3x^2 + 4x - 5 - 2x\,(x^2 - x + 1) = -x^2 + 2x - 5 .
$$
Il resto parziale $-x^2 + 2x - 5$ ha grado $2$, uguale al grado del divisore, quindi l'algoritmo **prosegue** sul resto parziale. Il termine successivo del quoziente è $\dfrac{-x^2}{x^2} = -1$:
$$
-x^2 + 2x - 5 - (-1)(x^2 - x + 1) = x - 4 .
$$
Il nuovo resto parziale $x - 4$ ha grado $1$, minore del grado del divisore, perciò l'algoritmo **termina**. Quoziente e resto sono $Q(x) = 2x - 1$ e $R(x) = x - 4$, cioè
$$
2x^3 - 3x^2 + 4x - 5 = (x^2 - x + 1)(2x - 1) + x - 4 .
$$
:::

:::osservazione
Il dividendo si scrive con i gradi in ordine decrescente e i **gradi mancanti** si contano con coefficiente $0$. La verifica usa il **principio di identità**: sviluppando $B(x)\,Q(x) + R(x)$ si deve ritrovare $A(x)$, coefficiente per coefficiente.
:::

## Teorema del resto e teorema di Ruffini

::::teorema{#teorema-del-resto titolo="Teorema del resto"}
Il resto della divisione di $P(x)$ per $x - c$ è $P(c)$. Il resto si ottiene quindi con una *sola* valutazione del polinomio, **senza eseguire la divisione**. Il resto di $x^3 - 2x + 1$ diviso $x - 2$ è $P(2) = 8 - 4 + 1 = 5$.

::grafico{f="x^3-2*x+1" xmin=-2.5 xmax=2.6 ymin=-4 ymax=8 punti="2,5,pieno,P(2) = 5" segmenti="2,0,2,5" titolo="$y = x^3 - 2x + 1$: il resto della divisione per $x - 2$ è l'ordinata $P(2) = 5$ del punto del grafico di ascissa $2$"}

:::dimostrazione
Per il **teorema sulla divisione con resto** esistono $Q(x)$ e $R(x)$ tali che $P(x) = (x - c)\,Q(x) + R(x)$, con $R(x) = 0$ oppure $\deg R < \deg(x - c) = 1$. In entrambi i casi $R(x)$ è una **costante** $R$. Valutando l'uguaglianza in $x = c$ si ottiene
$$
P(c) = (c - c)\,Q(c) + R = 0 + R = R ,
$$
perciò il resto **coincide con** $P(c)$.
:::
::::

:::teorema{#teorema-di-ruffini titolo="Teorema di Ruffini"}
Il binomio $x - c$ divide $P(x)$ *se e solo se* $P(c) = 0$, cioè se e solo se $c$ è una radice di $P$. L'enunciato segue dal **teorema del resto**, poiché la divisione è esatta se e solo se il resto $P(c)$ è nullo. Il teorema collega le radici alla fattorizzazione: ogni radice trovata produce un **fattore di primo grado**. Per $P(x) = x^2 - 5x + 6$ si ha $P(2) = 4 - 10 + 6 = 0$, quindi $x - 2$ divide $P$; infatti $P(x) = (x - 2)(x - 3)$.

::grafico{f="x^2-5*x+6" xmin=-0.5 xmax=5 ymin=-1 ymax=6 punti="2,0,pieno;3,0,pieno" titolo="Le radici $2$ e $3$ di $P(x) = x^2 - 5x + 6$ sono le ascisse dei punti in cui il grafico incontra l'asse $x$"}

:::

:::definizione{#molteplicita-di-una-radice titolo="Molteplicità di una radice"}
Sia $c$ una radice del polinomio $P$ e sia $m \geq 1$ un intero. La radice $c$ ha **molteplicità** $m$ se
$$
P(x) = (x - c)^m\, Q(x) \qquad \text{con } Q(c) \neq 0 ,
$$
cioè se $(x - c)^m$ divide $P$ e $(x - c)^{m + 1}$ non lo divide. Una radice di molteplicità $1$ si dice **semplice**, di molteplicità $2$ **doppia**, di molteplicità $3$ tripla. La molteplicità si determina dividendo per $x - c$ finché il quoziente ottenuto non ha più $c$ come radice: il numero di divisioni esatte è $m$.

La molteplicità stabilisce il segno di $P$ vicino a $c$. Per $x \neq c$ il fattore $(x - c)^m$ è positivo se $m$ è *pari*, mentre se $m$ è *dispari* ha il segno di $x - c$, che cambia in $c$. Il fattore $Q$ non si annulla in $c$, quindi vicino a $c$ ha il segno di $Q(c)$ (è la **permanenza del segno**, che si trova nel capitolo sui limiti di Analisi 1). Perciò il grafico di $P$ **attraversa** l'asse $x$ nelle radici di molteplicità dispari e lo **tocca senza attraversarlo** in quelle di molteplicità pari; nello studio del segno questa proprietà decide se una riga della tabella dei segni cambia segno, come si vede nel capitolo sulle equazioni e disequazioni polinomiali.
:::

:::esempio
$P(x) = x^3 - 3x^2 + 4 = (x - 2)^2 (x + 1)$. La radice $2$ è **doppia**, poiché $P(x) = (x - 2)^2\, Q(x)$ con $Q(x) = x + 1$ e $Q(2) = 3 \neq 0$; la radice $-1$ è **semplice**, poiché $P(x) = (x + 1)\,(x - 2)^2$ e $(-1 - 2)^2 = 9 \neq 0$. Vicino a $2$ il polinomio ha il segno di $3\,(x - 2)^2$, positivo da entrambe le parti, mentre vicino a $-1$ ha il segno di $9\,(x + 1)$, che cambia in $-1$.

::grafico{f="x^3-3*x^2+4" xmin=-1.8 xmax=3.3 ymin=-4 ymax=7 punti="-1,0,pieno;2,0,pieno" titolo="$y = x^3 - 3x^2 + 4 = (x - 2)^2 (x + 1)$ attraversa l'asse $x$ nella radice semplice $-1$ e lo tocca senza attraversarlo nella radice doppia $2$"}

:::

## La regola di Ruffini

:::definizione{#ruffini titolo="Regola di Ruffini"}
La **regola di Ruffini** è lo schema che esegue la divisione di $P(x)$ per $x - c$ usando *solo* i coefficienti.

1. Nella prima riga si scrivono i coefficienti di $P$ in ordine di grado decrescente, con $0$ al posto dei gradi mancanti; il numero $c$ si scrive a sinistra.
2. Il primo coefficiente si riporta invariato nella riga dei risultati.
3. L'ultimo numero scritto nella riga dei risultati si moltiplica per $c$, il prodotto si scrive nella seconda riga sotto il coefficiente successivo e si somma in colonna; la somma scende nella riga dei risultati. Il passo si ripete fino all'ultima colonna.
4. L'ultimo numero della riga dei risultati è il **resto**, cioè $P(c)$; i numeri che lo precedono sono i **coefficienti del quoziente**, che ha grado $\deg P - 1$.
:::

:::esempio{titolo="Lo schema passo per passo"}
Divisione di $P(x) = x^3 - 2x^2 - 5x + 6$ per $x - 1$, quindi $c = 1$. Si riporta il primo coefficiente $1$; poi $1 \cdot 1 = 1$ e $-2 + 1 = -1$; poi $-1 \cdot 1 = -1$ e $-5 + (-1) = -6$; infine $-6 \cdot 1 = -6$ e $6 + (-6) = 0$.
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
1 &  & 1 & -1 & -6 \\ \hline
 & 1 & -1 & -6 & 0
\end{array}
$$
Il quoziente è $x^2 - x - 6$ e il resto è $0$, quindi $x - 1$ **divide** $P$ e
$$
x^3 - 2x^2 - 5x + 6 = (x - 1)(x^2 - x - 6) = (x - 1)(x - 3)(x + 2) ,
$$
dove l'ultima uguaglianza si verifica sviluppando il prodotto $(x - 3)(x + 2) = x^2 - x - 6$.

::grafico{f="x^3-2*x^2-5*x+6" xmin=-2.6 xmax=3.6 ymin=-6 ymax=10 punti="-2,0,pieno;1,0,pieno;3,0,pieno" titolo="$y = x^3 - 2x^2 - 5x + 6$ incontra l'asse $x$ nelle tre radici $-2$, $1$, $3$, una per ciascun fattore di primo grado"}

:::

## Radici razionali

:::teorema{#radici-razionali titolo="Ricerca delle radici razionali"}
Sia $P(x) = a_n x^n + \dots + a_0$ a coefficienti interi, con $a_0 \neq 0$. Se la frazione $\dfrac{p}{q}$, ridotta ai minimi termini, è una radice di $P$, allora $p$ **divide il termine noto** $a_0$ e $q$ **divide il coefficiente direttore** $a_n$. Il teorema fornisce un elenco *finito* di candidati; ogni candidato $c$ si prova calcolando $P(c)$, e per il **teorema di Ruffini** ogni candidato con $P(c) = 0$ produce il fattore $x - c$. Quando il coefficiente direttore è $1$, le eventuali radici razionali sono numeri interi che dividono il termine noto.
:::

:::esempio
$P(x) = 2x^3 + x^2 - 5x + 2$. I divisori del termine noto $2$ sono $\pm 1, \pm 2$; i divisori positivi del coefficiente direttore $2$ sono $1, 2$. I candidati sono quindi $\pm 1$, $\pm 2$, $\pm\dfrac{1}{2}$. Poiché $P(1) = 2 + 1 - 5 + 2 = 0$, il numero $1$ è una **radice** e $x - 1$ divide $P$. *Non* ogni candidato è una radice: $P(-1) = -2 + 1 + 5 + 2 = 6 \neq 0$.

::grafico{f="2*x^3+x^2-5*x+2" xmin=-2.6 xmax=1.8 ymin=-3 ymax=8 punti="1,0,pieno;-1,6,pieno,P(−1) = 6" etichette="1.15,-0.9,P(1) = 0" segmenti="-1,0,-1,6" titolo="$y = 2x^3 + x^2 - 5x + 2$: il candidato $1$ è una radice, il candidato $-1$ no, poiché $P(-1) = 6$; il grafico incontra l'asse $x$ anche nei candidati $-2$ e $\dfrac{1}{2}$"}

:::

## Strategia di fattorizzazione

:::definizione{#raccoglimenti titolo="Raccoglimento totale e parziale"}
Il **raccoglimento totale** estrae un fattore comune a *tutti* i termini:
$$
6x^3 - 4x^2 + 2x = 2x\,(3x^2 - 2x + 1) .
$$
Il **raccoglimento parziale** raggruppa i termini e raccoglie un fattore da ciascun gruppo; il metodo si conclude quando i gruppi lasciano lo stesso fattore comune, che si raccoglie a sua volta:
$$
x^3 + 2x^2 + 3x + 6 = x^2 (x + 2) + 3\,(x + 2) = (x + 2)(x^2 + 3) .
$$
:::

:::teorema{#trinomio-speciale titolo="Trinomio speciale"}
$$
x^2 + (a + b)\,x + ab = (x + a)(x + b)
$$
Il trinomio $x^2 + sx + p$ si scompone con due numeri $a$ e $b$ che soddisfano
$$
\begin{cases}
a + b = s \\[2pt]
a \cdot b = p
\end{cases}
$$
Per esempio $x^2 + 5x + 6 = (x + 2)(x + 3)$, poiché $2 + 3 = 5$ e $2 \cdot 3 = 6$; analogamente $x^2 - x - 12 = (x + 3)(x - 4)$, poiché $3 + (-4) = -1$ e $3 \cdot (-4) = -12$.
:::

:::definizione{#strategia-di-fattorizzazione titolo="Strategia di fattorizzazione"}
La scomposizione di un polinomio procede nell'ordine seguente, e dopo *ogni* passo **riparte dal primo** sui fattori ottenuti.

1. Raccoglimento totale del fattore comune.
2. Riconoscimento dei prodotti notevoli: quadrato e cubo di binomio, differenza di quadrati, somma e differenza di cubi.
3. Per i trinomi della forma $x^2 + sx + p$, trinomio speciale.
4. Con quattro o più termini, raccoglimento parziale.
5. Ricerca delle radici razionali e regola di Ruffini: ogni radice $c$ trovata produce il fattore $x - c$ e abbassa di uno il grado del quoziente. Il passo si applica anche ai trinomi di secondo grado $ax^2 + bx + c$ con $a \neq 1$ e radici razionali, che non sono trinomi speciali.

La scomposizione **termina** quando ogni fattore ha grado $1$ oppure è un fattore di secondo grado **privo di radici reali**; il riconoscimento di questi ultimi con il discriminante si trova nel capitolo sulle equazioni e disequazioni polinomiali.
:::

:::esempio{titolo="Una fattorizzazione completa"}
$$
2x^4 + 2x^3 - 12x^2 = 2x^2\,(x^2 + x - 6) = 2x^2\,(x + 3)(x - 2)
$$
Il primo passaggio è il **raccoglimento totale** di $2x^2$. Il fattore $x^2 + x - 6$ è un **trinomio speciale**, poiché $3 + (-2) = 1$ e $3 \cdot (-2) = -6$, quindi si scompone in $(x + 3)(x - 2)$. I fattori non costanti, cioè $x$ (che compare due volte), $x + 3$ e $x - 2$, hanno tutti grado $1$, perciò la scomposizione è **completa**.

::grafico{f="2*x^4+2*x^3-12*x^2" xmin=-3.6 xmax=2.5 ymin=-35 ymax=15 punti="-3,0,pieno;0,0,pieno;2,0,pieno" titolo="$y = 2x^4 + 2x^3 - 12x^2$: nelle radici semplici $-3$ e $2$ il grafico attraversa l'asse $x$; nella radice $0$, doppia per il fattore $x^2$, lo tocca senza attraversarlo"}

:::
