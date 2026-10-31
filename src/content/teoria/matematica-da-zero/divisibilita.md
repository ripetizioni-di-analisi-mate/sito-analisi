---
titolo: Multipli, divisori, numeri primi, MCD e mcm
sommario: Che cosa sono multipli e divisori, come si riconosce senza fare la divisione se un numero è divisibile per 2, 3, 4, 5, 9, 10, 11 e 25, che cosa sono i numeri primi, come si scompone un numero in fattori primi e come si calcolano massimo comune divisore e minimo comune multiplo, anche nei problemi con piastrelle, turni e confezioni.
---

## Multipli e divisori

:::definizione{#multipli-e-divisori titolo="Multipli e divisori"}
Siano $a$ e $b$ due numeri naturali, con $b$ diverso da $0$. Il numero $a$ è **multiplo** di $b$ se si ottiene moltiplicando $b$ per un numero naturale, cioè se $a = b \cdot k$ per un opportuno numero naturale $k$. In questo caso si dice anche che $b$ è un **divisore** di $a$, oppure che $a$ è **divisibile** per $b$.

In altre parole, $b$ è un divisore di $a$ quando la divisione $a : b$ ha resto $0$. Per esempio $35 = 7 \cdot 5$, quindi $35$ è multiplo di $7$, e $7$ è un divisore di $35$. Invece $35$ non è multiplo di $4$, perché $35 : 4$ dà quoziente $8$ e resto $3$, dato che $4 \cdot 8 + 3 = 35$.
:::

:::esempio{titolo="I multipli di 3"}
I multipli di $3$ si ottengono moltiplicando $3$ per $0$, $1$, $2$, $3$ e così via:
$$
0, \quad 3, \quad 6, \quad 9, \quad 12, \quad 15, \quad 18, \quad \dots
$$
L'elenco continua senza fine, perché si può sempre moltiplicare per un numero più grande. Sulla retta dei numeri i multipli di $3$ si trovano partendo da $0$ e avanzando ogni volta di $3$ unità.

::grafico{assi=0 uguale=1 linee="0,0 21.5,0;21,0.3 21.5,0 21,-0.3;0,-0.15 0,0.15;1,-0.15 1,0.15;2,-0.15 2,0.15;3,-0.15 3,0.15;4,-0.15 4,0.15;5,-0.15 5,0.15;6,-0.15 6,0.15;7,-0.15 7,0.15;8,-0.15 8,0.15;9,-0.15 9,0.15;10,-0.15 10,0.15;11,-0.15 11,0.15;12,-0.15 12,0.15;13,-0.15 13,0.15;14,-0.15 14,0.15;15,-0.15 15,0.15;16,-0.15 16,0.15;17,-0.15 17,0.15;18,-0.15 18,0.15;19,-0.15 19,0.15;20,-0.15 20,0.15" punti="0,0,pieno;3,0,pieno;6,0,pieno;9,0,pieno;12,0,pieno;15,0,pieno;18,0,pieno" etichette="-0.25,-0.9,0;2.75,-0.9,3;5.75,-0.9,6;8.75,-0.9,9;11.5,-0.9,12;14.5,-0.9,15;17.5,-0.9,18" xmin=-1 xmax=22 ymin=-1.6 ymax=1 titolo="I multipli di $3$ fino a $18$ sulla retta dei numeri: due multipli vicini distano $3$ unità"}

:::

:::esempio{#divisori-di-un-numero titolo="I divisori di 12"}
I divisori di un numero sono invece in numero finito, perché nessun divisore supera il numero stesso. Per trovare i divisori di $12$ si cercano le coppie di numeri che moltiplicati danno $12$:
$$
12 = 1 \cdot 12, \qquad 12 = 2 \cdot 6, \qquad 12 = 3 \cdot 4 .
$$
Quindi i divisori di $12$ sono $1, 2, 3, 4, 6, 12$. Le stesse coppie sono i lati dei rettangoli che si possono costruire con $12$ quadratini uguali.

::grafico{assi=0 uguale=1 poligoni="0,0 12,0 12,1 0,1;0,2.5 6,2.5 6,4.5 0,4.5;8,2.5 12,2.5 12,5.5 8,5.5" linee="0,0 12,0 12,1 0,1 0,0;0,2.5 6,2.5 6,4.5 0,4.5 0,2.5;8,2.5 12,2.5 12,5.5 8,5.5 8,2.5" segmenti="1,0,1,1;2,0,2,1;3,0,3,1;4,0,4,1;5,0,5,1;6,0,6,1;7,0,7,1;8,0,8,1;9,0,9,1;10,0,10,1;11,0,11,1;1,2.5,1,4.5;2,2.5,2,4.5;3,2.5,3,4.5;4,2.5,4,4.5;5,2.5,5,4.5;0,3.5,6,3.5;9,2.5,9,5.5;10,2.5,10,5.5;11,2.5,11,5.5;8,3.5,12,3.5;8,4.5,12,4.5" etichette="0,1.35,12 · 1;0,4.85,6 · 2;8,5.85,4 · 3" xmin=-0.5 xmax=12.5 ymin=-0.5 ymax=6.6 titolo="Con $12$ quadratini uguali si costruiscono tre rettangoli, con lati $12$ e $1$, $6$ e $2$, $4$ e $3$: i lati sono i divisori di $12$"}

:::

:::osservazione{#casi-particolari titolo="I numeri 0 e 1"}
Il numero $1$ è un divisore di ogni numero naturale $a$, perché $a = 1 \cdot a$. Ogni numero $a$ diverso da $0$ è divisore di sé stesso, per lo stesso motivo. Il numero $0$ è multiplo di ogni numero $b$, perché $0 = b \cdot 0$. Lo zero invece non è divisore di alcun numero, perché la divisione per $0$ non ha significato, come si è visto nell'argomento sui numeri naturali.
:::

:::richiamo{titolo="Proprietà distributiva"}
Per tutti i numeri naturali $a$, $b$, $c$ vale $a \cdot (b + c) = a \cdot b + a \cdot c$.
:::

:::teorema{#somma-di-multipli titolo="Somma e differenza di multipli"}
Se due numeri sono multipli di $b$, allora anche la loro somma è multipla di $b$, e lo stesso vale per la loro differenza (il numero maggiore meno il minore).

Per esempio $12 = 3 \cdot 4$ e $18 = 3 \cdot 6$ sono multipli di $3$. Per la proprietà distributiva si ha $12 + 18 = 3 \cdot 4 + 3 \cdot 6 = 3 \cdot (4 + 6) = 3 \cdot 10$, quindi anche $30$ è multiplo di $3$. Allo stesso modo $18 - 12 = 3 \cdot (6 - 4) = 3 \cdot 2 = 6$. Questa proprietà è la ragione per cui valgono i criteri di divisibilità.
:::

## Criteri di divisibilità

:::teorema{#criteri-2-5-10 titolo="Divisibilità per 2, 5 e 10"}
Un numero naturale è divisibile:

- per $2$ se la sua ultima cifra è $0$, $2$, $4$, $6$ oppure $8$;
- per $5$ se la sua ultima cifra è $0$ oppure $5$;
- per $10$ se la sua ultima cifra è $0$.

Un **criterio di divisibilità** è una regola che dice se una divisione ha resto $0$ senza eseguirla. I numeri divisibili per $2$ si chiamano **pari**, gli altri **dispari**. Per esempio $4\,358$ è pari, perché termina con $8$, mentre non è divisibile per $5$ né per $10$. Il numero $1\,275$ è divisibile per $5$, perché termina con $5$, e non per $2$.

La regola vale perché un numero è formato dalle sue decine più la cifra delle unità. Per esempio $4\,358 = 435 \cdot 10 + 8$, e $435 \cdot 10$ è multiplo di $10$, quindi anche di $2$ e di $5$. Perciò la divisibilità dipende soltanto dall'ultima cifra.
:::

:::teorema{#criteri-4-25 titolo="Divisibilità per 4 e per 25"}
Un numero naturale con almeno tre cifre è divisibile:

- per $4$ se il numero formato dalle sue ultime due cifre è divisibile per $4$;
- per $25$ se termina con $00$, $25$, $50$ oppure $75$.

Il motivo è lo stesso del criterio precedente, con le centinaia al posto delle decine. Il numero $7\,316$ si scrive $73 \cdot 100 + 16$, e $100 = 4 \cdot 25$ è multiplo di $4$ e di $25$. Poiché $16 = 4 \cdot 4$, il numero $7\,316$ è **divisibile per $4$**. Invece $16$ non è multiplo di $25$, perciò $7\,316$ non è divisibile per $25$. Il numero $3\,450$ è divisibile per $25$, perché termina con $50$.
:::

:::attenzione
Per il $4$ si guardano le ultime *due* cifre. Il numero $34$ termina con $4$, ma non è divisibile per $4$, perché $34 : 4$ dà quoziente $8$ e resto $2$.
:::

::::teorema{#criteri-3-9 titolo="Divisibilità per 3 e per 9"}
Un numero naturale è divisibile per $3$ se la somma delle sue cifre è divisibile per $3$, ed è divisibile per $9$ se la somma delle sue cifre è divisibile per $9$.

Per esempio $5\,742$ ha somma delle cifre $5 + 7 + 4 + 2 = 18$. Poiché $18$ è multiplo di $9$, il numero $5\,742$ è **divisibile per $9$**, e quindi anche per $3$. Il numero $1\,204$ ha somma delle cifre $7$, che non è multiplo di $3$, perciò $1\,204$ non è divisibile per $3$.

:::dimostrazione
L'idea è scrivere il numero separando le sue cifre. Per $5\,742$ si ha
$$
\begin{aligned}
5\,742 &= 5 \cdot 1000 + 7 \cdot 100 + 4 \cdot 10 + 2 \\[6pt]
&= 5 \cdot (999 + 1) + 7 \cdot (99 + 1) + 4 \cdot (9 + 1) + 2 \\[6pt]
&= (5 \cdot 999 + 7 \cdot 99 + 4 \cdot 9) + (5 + 7 + 4 + 2) .
\end{aligned}
$$
I numeri $9$, $99$ e $999$ sono multipli di $9$, quindi il primo gruppo di addendi è multiplo di $9$ e anche di $3$. Il secondo gruppo è la somma delle cifre, cioè $18$. Per la proprietà della somma di multipli, se anche $18$ è multiplo di $9$ allora tutto il numero è multiplo di $9$. Se invece la somma delle cifre non è multipla di $9$, il numero non lo è, perché altrimenti la somma delle cifre, che è la differenza tra il numero e il primo gruppo, sarebbe multipla di $9$. Lo stesso ragionamento vale con $3$ al posto di $9$.
:::
::::

:::teorema{#criterio-11 titolo="Divisibilità per 11"}
Si numerano le cifre di un numero da destra, partendo dalle unità, che occupano il posto $1$. Il numero è divisibile per $11$ se la differenza tra la somma delle cifre di posto dispari e la somma delle cifre di posto pari (la maggiore meno la minore) è $0$ oppure un multiplo di $11$.

Per esempio, in $8\,294$ le cifre di posto dispari sono $4$ e $2$, con somma $6$, e quelle di posto pari sono $9$ e $8$, con somma $17$. La differenza è $17 - 6 = 11$, quindi $8\,294$ è **divisibile per $11$**; infatti $8\,294 = 11 \cdot 754$. Nel numero $5\,203$ le due somme sono $3 + 2 = 5$ e $0 + 5 = 5$, con differenza $0$, perciò anche $5\,203$ è divisibile per $11$, e infatti $5\,203 = 11 \cdot 473$. La regola si giustifica come quella del $9$, usando il fatto che $10 = 11 - 1$, $100 = 99 + 1$ e $1000 = 1001 - 1$, dove $99$ e $1001 = 11 \cdot 91$ sono multipli di $11$.
:::

## Numeri primi e composti

:::definizione{#numeri-primi titolo="Numeri primi e numeri composti"}
Un numero naturale maggiore di $1$ si dice **primo** se ha esattamente due divisori, cioè $1$ e sé stesso. Un numero maggiore di $1$ che ha altri divisori si dice **composto**.

Per esempio $7$ è primo, perché i suoi unici divisori sono $1$ e $7$. Il numero $15$ è composto, perché è divisibile anche per $3$ e per $5$. Il numero $1$ non è primo né composto, perché ha un solo divisore. I numeri primi servono a costruire tutti gli altri numeri con la moltiplicazione, come si vede nella scomposizione in fattori primi.
:::

:::teorema{#crivello-di-eratostene titolo="Crivello di Eratostene"}
Il **crivello di Eratostene** è un metodo per trovare tutti i numeri primi fino a un numero fissato. Si scrivono i numeri da $2$ in poi e si ripetono due passi:

- si prende il primo numero dell'elenco che non è cancellato, e quel numero è primo;
- si cancellano tutti i suoi multipli successivi.

Fino a $50$ si cancellano i multipli di $2$ (cioè $4$, $6$, $8$, …), poi i multipli di $3$ ($9$, $15$, $21$, …, perché quelli pari sono già cancellati), poi quelli di $5$ e di $7$. Dopo il $7$ non resta nulla da cancellare, perché il primo multiplo di $11$ non ancora cancellato sarebbe $11 \cdot 11 = 121$, che supera $50$. I numeri rimasti sono i primi minori di $50$:
$$
2,\ 3,\ 5,\ 7,\ 11,\ 13,\ 17,\ 19,\ 23,\ 29,\ 31,\ 37,\ 41,\ 43,\ 47 .
$$

::grafico{assi=0 uguale=1 poligoni="1,4 2,4 2,5 1,5;2,4 3,4 3,5 2,5;4,4 5,4 5,5 4,5;6,4 7,4 7,5 6,5;0,3 1,3 1,4 0,4;2,3 3,3 3,4 2,4;6,3 7,3 7,4 6,4;8,3 9,3 9,4 8,4;2,2 3,2 3,3 2,3;8,2 9,2 9,3 8,3;0,1 1,1 1,2 0,2;6,1 7,1 7,2 6,2;0,0 1,0 1,1 0,1;2,0 3,0 3,1 2,1;6,0 7,0 7,1 6,1" linee="0,0 10,0;0,1 10,1;0,2 10,2;0,3 10,3;0,4 10,4;0,5 10,5;0,0 0,5;1,0 1,5;2,0 2,5;3,0 3,5;4,0 4,5;5,0 5,5;6,0 6,5;7,0 7,5;8,0 8,5;9,0 9,5;10,0 10,5" etichette="0.33,4.32,1;1.33,4.32,2;2.33,4.32,3;3.33,4.32,4;4.33,4.32,5;5.33,4.32,6;6.33,4.32,7;7.33,4.32,8;8.33,4.32,9;9.18,4.32,10;0.18,3.32,11;1.18,3.32,12;2.18,3.32,13;3.18,3.32,14;4.18,3.32,15;5.18,3.32,16;6.18,3.32,17;7.18,3.32,18;8.18,3.32,19;9.18,3.32,20;0.18,2.32,21;1.18,2.32,22;2.18,2.32,23;3.18,2.32,24;4.18,2.32,25;5.18,2.32,26;6.18,2.32,27;7.18,2.32,28;8.18,2.32,29;9.18,2.32,30;0.18,1.32,31;1.18,1.32,32;2.18,1.32,33;3.18,1.32,34;4.18,1.32,35;5.18,1.32,36;6.18,1.32,37;7.18,1.32,38;8.18,1.32,39;9.18,1.32,40;0.18,0.32,41;1.18,0.32,42;2.18,0.32,43;3.18,0.32,44;4.18,0.32,45;5.18,0.32,46;6.18,0.32,47;7.18,0.32,48;8.18,0.32,49;9.18,0.32,50" xmin=-0.3 xmax=10.3 ymin=-0.3 ymax=5.3 titolo="Il crivello di Eratostene fino a $50$: le caselle colorate sono i numeri primi"}

:::

:::teorema{#riconoscere-un-primo titolo="Come si riconosce un numero primo"}
Per stabilire se un numero $n$ è primo si divide $n$ per i numeri primi $2$, $3$, $5$, $7$, $11$, … in ordine. Ci si ferma quando si arriva a un numero primo che, moltiplicato per sé stesso, supera $n$, e quel numero non si prova. Se nessuna delle divisioni eseguite ha resto $0$, il numero $n$ è primo.

La prova si ferma lì per questo motivo. Se $n$ è composto, si scrive come prodotto di due fattori, $n = a \cdot b$ con $a$ minore o uguale a $b$. Allora $a \cdot a$ non supera $a \cdot b = n$, quindi $a$ e i suoi fattori primi si trovano *tra* i numeri provati, e una delle divisioni ha resto $0$. Per esempio, per $89$ si provano $2$, $3$, $5$ e $7$, dato che $11 \cdot 11 = 121$ supera $89$. Nessuna di queste divisioni ha resto $0$, quindi $89$ è **primo**. Per $91$ la prova con $7$ dà $91 = 7 \cdot 13$, perciò $91$ è composto.
:::

## Scomposizione in fattori primi

:::teorema{#scomposizione-in-fattori-primi titolo="Scomposizione in fattori primi"}
Ogni numero naturale maggiore di $1$ si scrive come prodotto di numeri primi, e questo prodotto è unico, a meno dell'ordine dei fattori. I fattori uguali si raccolgono in una potenza: per esempio $2 \cdot 2 \cdot 2 = 2^3$.

Scomporre un numero in fattori primi significa scriverlo in questa forma. Per esempio $60 = 2 \cdot 2 \cdot 3 \cdot 5 = 2^2 \cdot 3 \cdot 5$. Se si parte da $60 = 6 \cdot 10$ oppure da $60 = 4 \cdot 15$ si ottengono sempre gli stessi fattori, perché $6 \cdot 10 = 2 \cdot 3 \cdot 2 \cdot 5$ e $4 \cdot 15 = 2 \cdot 2 \cdot 3 \cdot 5$. La scomposizione serve per calcolare il massimo comune divisore e il minimo comune multiplo, e per semplificare le frazioni, come si vede nell'argomento sulle frazioni.
:::

:::definizione{#schema-in-colonna titolo="Schema in colonna"}
La scomposizione si esegue con uno **schema in colonna**. Si scrive il numero a sinistra di una linea verticale. A destra si scrive il più piccolo numero primo che lo divide, e sotto il numero si scrive il quoziente. Si ripete con il quoziente finché si arriva a $1$. Per $360$:
$$
\begin{array}{r|l}
360 & 2 \\
180 & 2 \\
90 & 2 \\
45 & 3 \\
15 & 3 \\
5 & 5 \\
1 &
\end{array}
$$
I fattori primi sono i numeri della colonna di destra, quindi $360 = 2 \cdot 2 \cdot 2 \cdot 3 \cdot 3 \cdot 5 = 2^3 \cdot 3^2 \cdot 5$. Per scegliere il divisore a ogni riga si usano i criteri di divisibilità: $360$ termina con $0$, quindi è pari; $45$ è dispari e ha somma delle cifre $9$, quindi è divisibile per $3$.
:::

:::esempio{titolo="Scomposizione di 1 386"}
$$
\begin{array}{r|l}
1386 & 2 \\
693 & 3 \\
231 & 3 \\
77 & 7 \\
11 & 11 \\
1 &
\end{array}
$$
Il numero $1\,386$ è pari, quindi si divide per $2$ e si ottiene $693$. La somma delle cifre di $693$ è $18$, quindi $693$ è divisibile per $3$ e $693 : 3 = 231$. Anche $231$ ha somma delle cifre multipla di $3$, cioè $6$, e $231 : 3 = 77$. Infine $77 = 7 \cdot 11$, perciò $1\,386 = 2 \cdot 3^2 \cdot 7 \cdot 11$.
:::

## Massimo comune divisore

:::definizione{#massimo-comune-divisore titolo="Massimo comune divisore"}
Un **divisore comune** di due o più numeri è un numero che li divide tutti. Il **massimo comune divisore** di due o più numeri è il più grande dei loro divisori comuni. Il massimo comune divisore di $a$ e $b$ si indica con $\operatorname{MCD}(a, b)$.

Per esempio i divisori di $12$ sono $1, 2, 3, 4, 6, 12$ e i divisori di $18$ sono $1, 2, 3, 6, 9, 18$. I divisori comuni sono $1, 2, 3, 6$, quindi $\operatorname{MCD}(12, 18) = 6$. Il massimo comune divisore serve quando si dividono quantità diverse in parti uguali, le più grandi possibili.
:::

::::teorema{#regola-mcd titolo="Calcolo del MCD con la scomposizione"}
Il massimo comune divisore di due o più numeri è il prodotto dei soli fattori primi *comuni* a tutte le scomposizioni, ciascuno preso con l'esponente *minore*.

Per esempio $60 = 2^2 \cdot 3 \cdot 5$ e $84 = 2^2 \cdot 3 \cdot 7$. I fattori comuni sono $2$ e $3$; il $2$ compare con esponente $2$ in entrambi e il $3$ con esponente $1$. Quindi
$$
\operatorname{MCD}(60, 84) = 2^2 \cdot 3 = 12 .
$$
Con i numeri grandi questo metodo evita di scrivere gli elenchi completi dei divisori.

:::dimostrazione
Un divisore di $60$ si ottiene moltiplicando *alcuni* dei fattori primi di $60$. Per esempio $10 = 2 \cdot 5$ e $12 = 2^2 \cdot 3$ sono divisori di $60$. Un divisore di $60$ quindi contiene solo i fattori $2$, $3$ e $5$, con il $2$ al più due volte. Un divisore comune di $60$ e di $84$ può contenere soltanto i fattori presenti in entrambe le scomposizioni, cioè $2$ e $3$, e ciascuno non più volte di quante compare nel numero che ne ha meno. Il più grande si ottiene prendendo tutti questi fattori, cioè $2^2 \cdot 3 = 12$.
:::
::::

:::esempio{titolo="MCD di tre numeri"}
Si calcola $\operatorname{MCD}(90, 150, 210)$. Le scomposizioni sono
$$
90 = 2 \cdot 3^2 \cdot 5, \qquad 150 = 2 \cdot 3 \cdot 5^2, \qquad 210 = 2 \cdot 3 \cdot 5 \cdot 7 .
$$
I fattori comuni a tutti e tre sono $2$, $3$ e $5$. Il $7$ compare solo in $210$, quindi non entra nel MCD. L'esponente minore del $3$ è $1$, perché $3$ compare con esponente $1$ in $150$ e in $210$; per lo stesso motivo anche il $5$ si prende con esponente $1$. Perciò $\operatorname{MCD}(90, 150, 210) = 2 \cdot 3 \cdot 5 = 30$.
:::

## Minimo comune multiplo

:::definizione{#minimo-comune-multiplo titolo="Minimo comune multiplo"}
Un **multiplo comune** di due o più numeri è un numero che è multiplo di tutti. Il **minimo comune multiplo** di due o più numeri diversi da $0$ è il più piccolo dei loro multipli comuni diversi da $0$. Il minimo comune multiplo di $a$ e $b$ si indica con $\operatorname{mcm}(a, b)$.

Per esempio i multipli di $4$ sono $0, 4, 8, 12, 16, 20, 24, \dots$ e i multipli di $6$ sono $0, 6, 12, 18, 24, \dots$. I multipli comuni diversi da $0$ sono $12, 24, 36, \dots$, quindi $\operatorname{mcm}(4, 6) = 12$. Si esclude lo $0$ perché è multiplo di ogni numero. Il minimo comune multiplo serve per gli eventi che si ripetono a intervalli regolari e per sommare le frazioni, come si vede nell'argomento sulle frazioni.

::grafico{assi=0 uguale=1 linee="0,2 25.5,2;25,2.3 25.5,2 25,1.7;0,0 25.5,0;25,0.3 25.5,0 25,-0.3" punti="0,2,pieno;4,2,pieno;8,2,pieno;12,2,pieno;16,2,pieno;20,2,pieno;24,2,pieno;0,0,pieno;6,0,pieno;12,0,pieno;18,0,pieno;24,0,pieno" segmenti="0,0,0,2;12,0,12,2;24,0,24,2" etichette="-0.3,2.6,0;3.7,2.6,4;7.7,2.6,8;11.4,2.6,12;15.4,2.6,16;19.4,2.6,20;23.4,2.6,24;-0.3,-0.9,0;5.7,-0.9,6;11.4,-0.9,12;17.4,-0.9,18;23.4,-0.9,24;-8,1.8,multipli di 4;-8,-0.2,multipli di 6" xmin=-8.5 xmax=26 ymin=-1.8 ymax=3.4 titolo="I multipli di $4$ (sopra) e i multipli di $6$ (sotto): i primi multipli comuni diversi da $0$ sono $12$ e $24$, e il più piccolo è $\operatorname{mcm}(4, 6) = 12$"}

:::

::::teorema{#regola-mcm titolo="Calcolo del mcm con la scomposizione"}
Il minimo comune multiplo di due o più numeri è il prodotto di tutti i fattori primi delle scomposizioni, *comuni e non comuni*, ciascuno preso una sola volta con l'esponente *maggiore*.

Con $60 = 2^2 \cdot 3 \cdot 5$ e $84 = 2^2 \cdot 3 \cdot 7$ i fattori che compaiono sono $2$, $3$, $5$ e $7$. Il $2$ ha esponente massimo $2$ e gli altri hanno esponente $1$. Quindi
$$
\operatorname{mcm}(60, 84) = 2^2 \cdot 3 \cdot 5 \cdot 7 = 420 .
$$

:::dimostrazione
Un multiplo di $60$ deve contenere nella sua scomposizione tutti i fattori di $60$, cioè $2^2$, $3$ e $5$. Un multiplo di $84$ deve contenere $2^2$, $3$ e $7$. Un multiplo comune deve quindi contenere $2^2$, $3$, $5$ e $7$, e il più piccolo è quello che non contiene altri fattori, cioè $2^2 \cdot 3 \cdot 5 \cdot 7 = 420$. Infatti $420 = 60 \cdot 7$ e $420 = 84 \cdot 5$.
:::
::::

:::teorema{#prodotto-mcd-mcm titolo="Prodotto di MCD e mcm"}
Per due numeri naturali $a$ e $b$ diversi da $0$ vale
$$
\operatorname{MCD}(a, b) \cdot \operatorname{mcm}(a, b) = a \cdot b .
$$
Per $60$ e $84$ si ha $12 \cdot 420 = 5\,040$ e anche $60 \cdot 84 = 5\,040$. La regola vale perché ogni fattore primo compare nel MCD con l'esponente minore e nel mcm con l'esponente maggiore, quindi nel prodotto compare con la somma dei due esponenti, come nel prodotto $a \cdot b$. Il fattore $5$, per esempio, compare in $60$ e non in $84$; nel MCD non c'è e nel mcm compare una volta, come in $60 \cdot 84$. La regola permette di controllare i calcoli, oppure di trovare il mcm dal MCD: $\operatorname{mcm}(12, 18) = \dfrac{12 \cdot 18}{6} = 36$.
:::

:::attenzione
La regola vale per *due* numeri. Per tre numeri il prodotto di MCD e mcm in generale è diverso dal prodotto dei numeri. Con $2$, $4$ e $8$ si ha $\operatorname{MCD} = 2$ e $\operatorname{mcm} = 8$, quindi $2 \cdot 8 = 16$, mentre $2 \cdot 4 \cdot 8 = 64$.
:::

## Numeri primi tra loro

:::definizione{#numeri-primi-tra-loro titolo="Numeri primi tra loro"}
Due numeri naturali si dicono **primi tra loro** se il loro massimo comune divisore è $1$, cioè se l'unico divisore comune è $1$.

Per esempio $8 = 2^3$ e $15 = 3 \cdot 5$ sono primi tra loro, perché le loro scomposizioni non hanno fattori comuni. Invece $14 = 2 \cdot 7$ e $21 = 3 \cdot 7$ non sono primi tra loro, perché $\operatorname{MCD}(14, 21) = 7$. Per due numeri primi tra loro il MCD vale $1$, quindi per la regola del prodotto di MCD e mcm si ha $\operatorname{mcm}(a, b) = a \cdot b$. Per esempio $\operatorname{mcm}(8, 15) = 120$.
:::

:::attenzione
Due numeri primi tra loro possono essere entrambi composti. Il numero $8$ e il numero $15$ sono composti, eppure sono primi tra loro. Due numeri primi diversi, come $5$ e $13$, sono invece sempre primi tra loro, perché ciascuno ha come divisori solo $1$ e sé stesso.
:::

:::osservazione{#consecutivi-primi-tra-loro titolo="Numeri consecutivi"}
Due numeri consecutivi, come $27$ e $28$, sono sempre primi tra loro. Un divisore comune di $27$ e $28$ divide anche la loro differenza, per la proprietà della differenza di multipli, e la differenza è $28 - 27 = 1$. Poiché l'unico divisore di $1$ è $1$, il MCD vale $1$. Infatti $27 = 3^3$ e $28 = 2^2 \cdot 7$ non hanno fattori comuni.
:::

## Problemi con MCD e mcm

:::osservazione{#problemi-con-il-mcd titolo="Problemi con il MCD"}
Il massimo comune divisore risponde ai problemi in cui quantità diverse si dividono in parti *uguali*, le più grandi possibili, senza avanzi.

Un pavimento rettangolare misura $480$ cm per $360$ cm e si vuole coprire con piastrelle quadrate uguali, le più grandi possibili, senza tagliarle. Il lato della piastrella deve essere un divisore di $480$, così che le piastrelle stiano in un numero intero lungo il lato lungo, e anche un divisore di $360$, per il lato corto. Il lato massimo è quindi $\operatorname{MCD}(480, 360)$. Poiché $480 = 2^5 \cdot 3 \cdot 5$ e $360 = 2^3 \cdot 3^2 \cdot 5$, si ha
$$
\operatorname{MCD}(480, 360) = 2^3 \cdot 3 \cdot 5 = 120 .
$$
Le piastrelle hanno lato $120$ cm. Ne stanno $480 : 120 = 4$ lungo il lato lungo e $360 : 120 = 3$ lungo il lato corto, quindi servono $4 \cdot 3 = 12$ piastrelle.

::grafico{assi=0 uguale=1 poligoni="0,0 8,0 8,6 0,6" linee="0,0 8,0 8,6 0,6 0,0" segmenti="2,0,2,6;4,0,4,6;6,0,6,6;0,2,8,2;0,4,8,4" etichette="3.3,-0.8,480 cm;-2.3,2.9,360 cm;0.15,6.35,120 cm" xmin=-2.6 xmax=8.5 ymin=-1.4 ymax=7 titolo="Il pavimento di $480$ cm per $360$ cm coperto da $4 \cdot 3 = 12$ piastrelle quadrate di lato $\operatorname{MCD}(480, 360) = 120$ cm"}

Allo stesso modo, con $36$ penne e $48$ matite si preparano al massimo $\operatorname{MCD}(36, 48) = 12$ astucci uguali, ciascuno con $36 : 12 = 3$ penne e $48 : 12 = 4$ matite.
:::

:::osservazione{#problemi-con-il-mcm titolo="Problemi con il mcm"}
Il minimo comune multiplo risponde ai problemi in cui due o più eventi si ripetono a intervalli regolari e si chiede quando si ripresentano *insieme*, oppure quando si cerca la quantità più piccola che si può formare con confezioni di misure diverse.

Luca fa il turno di notte ogni $6$ giorni e Sara ogni $10$ giorni, e stanotte lavorano entrambi. I turni di Luca cadono dopo $6, 12, 18, 24, 30, \dots$ giorni, cioè nei multipli di $6$; quelli di Sara nei multipli di $10$. Il primo giorno in cui lavorano di nuovo insieme è quindi il più piccolo multiplo comune. Poiché $6 = 2 \cdot 3$ e $10 = 2 \cdot 5$, si ha $\operatorname{mcm}(6, 10) = 2 \cdot 3 \cdot 5 = 30$, e il prossimo turno comune è fra $30$ giorni.

::grafico{assi=0 uguale=1 linee="0,2 31.5,2;31,2.3 31.5,2 31,1.7;0,0 31.5,0;31,0.3 31.5,0 31,-0.3" punti="0,2,pieno;6,2,pieno;12,2,pieno;18,2,pieno;24,2,pieno;30,2,pieno;0,0,pieno;10,0,pieno;20,0,pieno;30,0,pieno" segmenti="0,0,0,2;30,0,30,2" etichette="-0.3,2.6,0;5.7,2.6,6;11.4,2.6,12;17.4,2.6,18;23.4,2.6,24;29.4,2.6,30;-0.3,-0.9,0;9.4,-0.9,10;19.4,-0.9,20;29.4,-0.9,30;-6,1.8,Luca;-6,-0.2,Sara" xmin=-6.5 xmax=32 ymin=-1.8 ymax=3.4 titolo="Giorni dei turni di notte di Luca (ogni $6$ giorni) e di Sara (ogni $10$ giorni): tornano a coincidere dopo $\operatorname{mcm}(6, 10) = 30$ giorni"}

Il mcm è maggiore o uguale a ciascuno dei numeri dati e il MCD è minore o uguale. Questo fatto permette di controllare se il risultato di un problema ha senso.
:::
