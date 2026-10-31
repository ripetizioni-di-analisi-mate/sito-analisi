---
titolo: Numeri relativi e regola dei segni
sommario: Che cosa sono i numeri relativi e dove si usano, come si rappresentano sulla retta orientata e si confrontano, come si eseguono con essi le quattro operazioni e le potenze, con la regola dei segni e le espressioni.
---

## Numeri con il segno

:::definizione{#numeri-relativi titolo="Numeri relativi"}
Con i numeri naturali $0, 1, 2, 3, \ldots$ la sottrazione $3 - 5$ è impossibile, perché da $3$ oggetti non se ne possono togliere $5$. Molte grandezze, però, possono scendere sotto lo zero, come la temperatura. Per descriverle si usano i numeri con il segno.

Un **numero relativo** è un numero naturale diverso da zero preceduto dal segno $+$ oppure dal segno $-$; anche lo zero è un numero relativo. I numeri con il segno $+$ si chiamano **positivi** e i numeri con il segno $-$ si chiamano **negativi**, mentre lo zero è privo di segno. In parole semplici, un numero relativo dice quanto si è lontani da un livello di riferimento e da quale parte.

L'insieme dei numeri interi relativi si indica con $\mathbb{Z}$:
$$
\mathbb{Z} = \{ \ldots, -3, -2, -1, 0, +1, +2, +3, \ldots \} .
$$
Il numero $+5$ si legge "più cinque" e il numero $-5$ si legge "meno cinque". Il segno $+$ dei numeri positivi di solito si omette, quindi $+5$ e $5$ indicano lo stesso numero. Per questo motivo i numeri naturali $\mathbb{N}$ sono una parte dei numeri relativi $\mathbb{Z}$.
:::

:::esempio{titolo="Temperature, saldi, quote e piani"}
- Una temperatura di $4$ gradi sotto lo zero si scrive $-4$ °C, e una temperatura di $12$ gradi sopra lo zero si scrive $+12$ °C.
- Il **saldo** di un conto corrente è la somma di denaro presente sul conto. Con $200$ euro sul conto il saldo è $+200$ euro. Se dal conto si pagano $250$ euro, si resta con un debito di $50$ euro, e il saldo diventa $-50$ euro.
- La **quota** di un punto è la sua altezza rispetto al livello del mare. La cima di una collina alta $300$ m ha quota $+300$ m, e un sub che nuota $15$ m sotto la superficie del mare si trova a quota $-15$ m.
- In un palazzo il piano terra è il piano $0$. I piani sopra sono $+1$, $+2$, $+3$, e i piani interrati, come il garage, sono $-1$, $-2$.

In tutti questi casi lo zero è il livello di riferimento, e il segno indica da quale parte dello zero ci si trova.
:::

## La retta orientata

:::definizione{#retta-orientata titolo="Retta orientata"}
I numeri relativi si rappresentano come punti di una retta. Su una retta si sceglie un punto, che corrisponde a $0$ e si chiama **origine**. Poi si sceglie un verso, indicato con una freccia, e una lunghezza che fa da unità di misura. Una retta con questi tre elementi si chiama **retta orientata**.

A partire dall'origine si segnano delle tacche, ciascuna a un'unità di distanza dalla precedente. Nel verso della freccia, cioè a destra dello zero, si trovano i numeri positivi $+1, +2, +3, \ldots$. Dalla parte opposta, a sinistra dello zero, si trovano i numeri negativi $-1, -2, -3, \ldots$. Per esempio il numero $-4$ corrisponde al punto che si trova $4$ unità a sinistra dello zero.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-4,0,pieno;-1,0,pieno;2,0,pieno" etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="Sulla retta orientata i numeri positivi stanno a destra dello zero e i negativi a sinistra; i punti segnati corrispondono a $-4$, $-1$ e $+2$"}

Sulla retta orientata i numeri relativi diventano posizioni, e su questa rappresentazione si leggono il confronto, l'addizione e la sottrazione. Un termometro è una retta orientata disposta in verticale, con i numeri positivi verso l'alto.
:::

## Valore assoluto e numeri opposti

:::definizione{#valore-assoluto titolo="Valore assoluto"}
Il **valore assoluto** di un numero relativo è il numero scritto senza il segno. Si indica scrivendo il numero tra due barre verticali:
$$
|-7| = 7 ,
\qquad
|+7| = 7 ,
\qquad
|0| = 0 .
$$
Sulla retta orientata il valore assoluto di un numero è la sua **distanza dallo zero**, misurata in unità. Per esempio $-7$ e $+7$ distano entrambi $7$ unità dallo zero, perciò hanno lo stesso valore assoluto. Il valore assoluto serve in tutte le regole di calcolo con i numeri relativi, perché ogni operazione si esegue sui valori assoluti e poi si sceglie il segno del risultato.
:::

:::definizione{#concordi-discordi titolo="Numeri concordi e numeri discordi"}
Due numeri relativi diversi da zero si dicono **concordi** se hanno lo stesso segno e **discordi** se hanno segni diversi. Per esempio $-3$ e $-8$ sono concordi, perché sono entrambi negativi. I numeri $+3$ e $-8$ sono invece discordi. Le regole dell'addizione e della moltiplicazione distinguono proprio questi due casi.
:::

:::definizione{#numeri-opposti titolo="Numeri opposti"}
Due numeri relativi si dicono **opposti** se hanno lo stesso valore assoluto e segni diversi. Per esempio l'opposto di $+4$ è $-4$, e l'opposto di $-9$ è $+9$. L'opposto di $0$ è $0$ stesso. Sulla retta orientata due numeri opposti si trovano alla stessa distanza dallo zero, uno a destra e uno a sinistra.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-4,0,pieno;4,0,pieno" segmenti="-4,0.45,0,0.45;0,0.45,4,0.45" etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-2.45,0.62,4 unità;1.55,0.62,4 unità" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="I numeri $-4$ e $+4$ sono opposti, perché si trovano entrambi a $4$ unità dallo zero, da parti diverse"}

L'opposto di un numero si indica scrivendo il segno $-$ davanti al numero tra parentesi. Perciò $-(+4)$ indica l'opposto di $+4$ e vale $-4$, mentre $-(-9)$ indica l'opposto di $-9$ e vale $+9$. I numeri opposti servono per la sottrazione, che con i numeri relativi diventa un'addizione con l'opposto.
:::

## Confronto tra numeri relativi

:::teorema{#confronto titolo="Confronto tra numeri relativi"}
Tra due numeri relativi è maggiore quello che sulla retta orientata si trova **più a destra**. Da questo fatto seguono tre regole.

- Ogni numero positivo è maggiore di zero, e zero è maggiore di ogni numero negativo. Per esempio $+2 > 0$ e $0 > -6$, quindi anche $+2 > -6$.
- Tra due numeri positivi è maggiore quello con il valore assoluto maggiore. Per esempio $+8 > +3$.
- Tra due numeri negativi è maggiore quello con il valore assoluto *minore*. Per esempio $-2 > -5$, perché $|-2| = 2$ è minore di $|-5| = 5$.

Il simbolo $>$ si legge "è maggiore di" e il simbolo $<$ si legge "è minore di". Con il confronto si mettono in ordine i numeri relativi, come le temperature minime di una settimana o i saldi di più conti.
:::

:::esempio{titolo="Due mattine d'inverno"}
Una mattina il termometro segna $-5$ °C e la mattina dopo segna $-2$ °C. Il numero $-2$ si trova a destra di $-5$ sulla retta orientata, quindi $-2 > -5$, e la seconda mattina è più calda della prima.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-5,0,pieno;-2,0,pieno" vettori="-5,0.5,-2.1,0.5" unicolore=1 etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-4.6,0.7,verso destra" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="Il numero $-2$ si trova a destra di $-5$, quindi $-2 > -5$, anche se $|-2| < |-5|$"}

I numeri $+3$, $-7$, $0$, $-1$, $+5$ si scrivono in **ordine crescente**, cioè dal più piccolo al più grande, partendo dal numero più a sinistra sulla retta:
$$
-7 < -1 < 0 < +3 < +5 .
$$
:::

:::attenzione
Tra due numeri negativi quello con il valore assoluto più grande è il *minore*. Per esempio $-10 < -1$, anche se $10 > 1$. Un saldo di $-10$ euro corrisponde infatti a un debito di $10$ euro, che è più grande del debito di $1$ euro indicato dal saldo $-1$ euro.
:::

## Addizione

:::teorema{#addizione titolo="Addizione di numeri relativi"}
Per sommare due numeri relativi diversi da zero si distinguono due casi.

- Se i due numeri sono **concordi**, la somma ha lo stesso segno dei due numeri, e il suo valore assoluto è la somma dei valori assoluti. Per esempio $(+3) + (+4) = +7$ e $(-3) + (-4) = -7$.
- Se i due numeri sono **discordi**, la somma ha il segno del numero con il valore assoluto maggiore, e il suo valore assoluto è la differenza tra il valore assoluto maggiore e quello minore. Per esempio $(+5) + (-8) = -3$, perché $8 - 5 = 3$ e il numero con il valore assoluto maggiore è $-8$.

Se un addendo è $0$, la somma è uguale all'altro addendo, come in $(-6) + 0 = -6$. La somma di due numeri opposti è $0$, come in $(+9) + (-9) = 0$.

Sulla retta orientata, sommare un numero positivo vuol dire spostarsi verso destra, e sommare un numero negativo vuol dire spostarsi verso sinistra, di tante unità quante ne indica il valore assoluto. Per calcolare $(+5) + (-8)$ si parte da $+5$ e ci si sposta di $8$ unità verso sinistra. Con le prime $5$ unità si arriva a $0$, e con le altre $3$ si arriva a $-3$.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="5,0,pieno;-3,0,pieno" vettori="5,0.45,-2.9,0.45" unicolore=1 etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-0.6,0.65,8 unità verso sinistra" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="Per calcolare $(+5) + (-8)$ si parte da $+5$ e ci si sposta di $8$ unità verso sinistra: si arriva a $-3$"}
:::

:::osservazione{#parentesi-e-segni titolo="Numeri relativi tra parentesi"}
Quando un numero relativo segue il segno di un'operazione, si scrive tra parentesi tonde, così che i due segni restino separati. Si scrive quindi $(+5) + (-8)$ e $3 \cdot (-2)$. Il primo numero di un'espressione si può scrivere anche senza parentesi, perciò $(+5) + (-8)$ si scrive pure $5 + (-8)$.
:::

:::esempio{titolo="La temperatura che scende"}
Alle $6$ del mattino la temperatura è $-3$ °C, e nelle due ore successive scende di altri $4$ gradi. Scendere di $4$ gradi corrisponde a sommare $-4$, quindi la nuova temperatura si ottiene con l'addizione
$$
(-3) + (-4) = -7 .
$$
I due numeri sono concordi, perciò si sommano i valori assoluti, $3 + 4 = 7$, e si mantiene il segno $-$. Alle $8$ la temperatura è quindi $-7$ °C.

::grafico{assi=0 uguale=1 linee="-8.7,0 4.9,0;4.55,0.16 4.9,0 4.55,-0.16;-8,-0.12 -8,0.12;-7,-0.12 -7,0.12;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12" punti="-3,0,pieno;-7,0,pieno" vettori="-3,0.45,-6.9,0.45" unicolore=1 etichette="-8.26,-0.6,−8;-7.26,-0.6,−7;-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;-6.3,0.65,4 unità verso sinistra" xmin=-9 xmax=5.2 ymin=-1 ymax=1.2 titolo="Per calcolare $(-3) + (-4)$ si parte da $-3$ e ci si sposta di $4$ unità verso sinistra: si arriva a $-7$"}
:::

:::teorema{#proprieta-addizione titolo="Proprietà dell'addizione"}
Le proprietà dell'addizione dei numeri naturali valgono anche per i numeri relativi.

- **Proprietà commutativa**: cambiando l'ordine degli addendi la somma resta la stessa. Per esempio $(-7) + (+2) = -5$ e anche $(+2) + (-7) = -5$.
- **Proprietà associativa**: in una somma di tre o più addendi si possono sommare prima due addendi qualsiasi, e la somma resta la stessa.

Grazie a queste proprietà, in una somma con molti addendi si possono sommare prima tutti i numeri positivi e poi tutti i numeri negativi:
$$
(+3) + (-5) + (+4) + (-6) = (+7) + (-11) = -4 .
$$
I numeri positivi danno $3 + 4 = 7$ e i numeri negativi danno $-(5 + 6) = -11$. Poiché $+7$ e $-11$ sono discordi, la somma è $-4$.
:::

## Sottrazione e somma algebrica

::::teorema{#sottrazione titolo="Sottrazione di numeri relativi"}
Per sottrarre due numeri relativi si somma al primo numero l'**opposto** del secondo. Per esempio
$$
(+3) - (-5) = (+3) + (+5) = +8 ,
\qquad
(-2) - (+6) = (-2) + (-6) = -8 .
$$
Con questa regola ogni sottrazione diventa un'addizione. Tra i numeri relativi la sottrazione ha quindi sempre un risultato, anche quando il primo numero è minore del secondo; per esempio $3 - 5 = 3 + (-5) = -2$.

:::dimostrazione
La regola si giustifica con un esempio. Come tra i numeri naturali, la differenza $(+3) - (-5)$ è il numero che sommato a $-5$ dà $+3$; per esempio $9 - 4 = 5$ perché $4 + 5 = 9$.

Sulla retta orientata si parte da $-5$ e si cerca lo spostamento che porta a $+3$. Ci si sposta di $5$ unità verso destra per arrivare a $0$, e di altre $3$ unità per arrivare a $+3$. Lo spostamento è quindi di $8$ unità verso destra, cioè $(-5) + (+8) = +3$, perciò la differenza $(+3) - (-5)$ vale $+8$.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="-5,0,pieno;3,0,pieno" vettori="-5,0.45,2.9,0.45" unicolore=1 etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-2.2,0.65,8 gradi" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="Da $-5$ °C a $+3$ °C la temperatura sale di $(+3) - (-5) = 8$ gradi: $5$ gradi fino a $0$ e altri $3$ fino a $+3$"}

Lo stesso numero si ottiene sommando a $+3$ l'opposto di $-5$, perché $(+3) + (+5) = +8$.
:::
::::

:::esempio{titolo="Un sub che risale"}
Un sub si trova a quota $-12$ m e risale fino a quota $-3$ m. Lo spostamento è la differenza tra la quota finale e la quota iniziale:
$$
(-3) - (-12) = (-3) + (+12) = +9 .
$$
Il risultato è positivo, quindi il sub è salito di $9$ m.
:::

:::definizione{#somma-algebrica titolo="Somma algebrica"}
Poiché ogni sottrazione è un'addizione con l'opposto, una catena di addizioni e sottrazioni di numeri relativi si può scrivere come un elenco di numeri con il segno, senza parentesi. Questa scrittura si chiama **somma algebrica**, e i numeri che la compongono si chiamano **termini**. Per togliere le parentesi si usano quattro uguaglianze:
$$
+(+3) = +3 ,
\qquad
+(-3) = -3 ,
\qquad
-(+3) = -3 ,
\qquad
-(-3) = +3 .
$$
In parole semplici, con il segno $+$ davanti alla parentesi il numero mantiene il suo segno, e con il segno $-$ davanti alla parentesi il numero cambia segno. Per esempio
$$
7 - (-2) + (-5) - (+1) = 7 + 2 - 5 - 1 = 3 .
$$
La somma algebrica si calcola da sinistra a destra, oppure sommando tra loro i termini positivi e tra loro i termini negativi. Nell'esempio i termini positivi danno $7 + 2 = 9$, i termini negativi danno $-5 - 1 = -6$, e $9 - 6 = 3$.
:::

:::teorema{#meno-davanti-alla-parentesi titolo="Segno meno davanti a un'espressione tra parentesi"}
Quando davanti a un'espressione tra parentesi c'è il segno $-$, si tolgono le parentesi cambiando il segno di *tutti* i termini dell'espressione. Quando davanti c'è il segno $+$, si tolgono le parentesi e ogni termine mantiene il suo segno. Per esempio
$$
10 - (4 - 9) = 10 - 4 + 9 = 15 .
$$
Lo stesso risultato si ottiene calcolando prima l'espressione tra parentesi, $4 - 9 = -5$, e poi la differenza $10 - (-5) = 10 + 5 = 15$. La regola permette di togliere le parentesi da una somma algebrica senza calcolarne prima il contenuto.
:::

## Moltiplicazione, divisione e regola dei segni

:::richiamo{titolo="Proprietà distributiva"}
Il prodotto di un numero per una somma è uguale alla somma dei prodotti del numero per ciascun addendo; per esempio $3 \cdot (2 + 5) = 3 \cdot 2 + 3 \cdot 5$.
:::

::::teorema{#regola-dei-segni titolo="Regola dei segni"}
Il prodotto di due numeri relativi diversi da zero ha come valore assoluto il prodotto dei valori assoluti. Il segno del prodotto si sceglie con la **regola dei segni**:

- il prodotto di due numeri **concordi** è positivo;
- il prodotto di due numeri **discordi** è negativo.

La regola si riassume nella tabella seguente, in cui si legge il segno del primo fattore nella colonna di sinistra e il segno del secondo fattore nella riga in alto:
$$
\begin{array}{c|cc}
\cdot & + & - \\ \hline
+ & + & - \\
- & - & +
\end{array}
$$
Per esempio $(+3) \cdot (+4) = +12$ e $(-3) \cdot (-4) = +12$, mentre $(+3) \cdot (-4) = -12$ e $(-3) \cdot (+4) = -12$. Se uno dei fattori è $0$, il prodotto è $0$; per esempio $(-5) \cdot 0 = 0$.

:::dimostrazione
La regola si giustifica con alcuni prodotti, nei casi che contengono un numero negativo.

Il prodotto per un numero positivo è un'addizione ripetuta, come tra i numeri naturali. Perciò
$$
(+3) \cdot (-2) = (-2) + (-2) + (-2) = -6 .
$$
Per la proprietà commutativa anche $(-2) \cdot (+3) = -6$. Quindi il prodotto di due numeri discordi è negativo.

Per il prodotto $(-3) \cdot (-2)$ si sceglie di conservare la proprietà distributiva anche per i numeri relativi. Poiché $(+2) + (-2) = 0$ e ogni numero moltiplicato per $0$ dà $0$, vale
$$
(-3) \cdot [(+2) + (-2)] = (-3) \cdot 0 = 0 .
$$
Per la proprietà distributiva lo stesso prodotto è uguale a
$$
(-3) \cdot (+2) + (-3) \cdot (-2) = -6 + (-3) \cdot (-2) .
$$
Questa somma vale quindi $0$. Perciò $(-3) \cdot (-2)$ è il numero che sommato a $-6$ dà $0$, cioè l'opposto di $-6$, e vale $+6$. Il prodotto di due numeri negativi è dunque positivo.
:::
::::

:::osservazione{#moltiplicare-per-meno-uno titolo="Moltiplicazione per meno uno"}
Moltiplicando un numero per $-1$ si ottiene il suo opposto. Per esempio $(-1) \cdot (+3) = -3$ e $(-1) \cdot (-3) = +3$. Sulla retta orientata il prodotto per $-1$ porta ogni numero nel punto simmetrico rispetto allo zero.

::grafico{assi=0 uguale=1 linee="-6.7,0 6.9,0;6.55,0.16 6.9,0 6.55,-0.16;-6,-0.12 -6,0.12;-5,-0.12 -5,0.12;-4,-0.12 -4,0.12;-3,-0.12 -3,0.12;-2,-0.12 -2,0.12;-1,-0.12 -1,0.12;0,-0.22 0,0.22;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12" punti="3,0,pieno;-3,0,pieno" segmenti="-3,0.45,3,0.45" etichette="-6.26,-0.6,−6;-5.26,-0.6,−5;-4.26,-0.6,−4;-3.26,-0.6,−3;-2.26,-0.6,−2;-1.26,-0.6,−1;-0.1,-0.6,0;0.8,-0.6,+1;1.8,-0.6,+2;2.8,-0.6,+3;3.8,-0.6,+4;4.8,-0.6,+5;5.8,-0.6,+6;-1.9,0.65,(−1) · (+3) = −3" xmin=-7 xmax=7.2 ymin=-1 ymax=1.2 titolo="Moltiplicando $+3$ per $-1$ si ottiene il suo opposto $-3$, che sulla retta è il simmetrico di $+3$ rispetto allo zero"}

Moltiplicando due volte per $-1$ si torna al numero di partenza, e questo è un altro modo di vedere che $(-1) \cdot (-1) = +1$.
:::

:::teorema{#prodotto-di-piu-fattori titolo="Prodotto di più fattori"}
In un prodotto di più fattori diversi da zero il valore assoluto è il prodotto dei valori assoluti, e il segno dipende da quanti sono i fattori negativi:

- se i fattori negativi sono in numero **pari**, il prodotto è positivo;
- se i fattori negativi sono in numero **dispari**, il prodotto è negativo.

Per esempio $(-2) \cdot (+5) \cdot (-3) = +30$, perché i fattori negativi sono due. La regola segue dalla regola dei segni applicata a due fattori alla volta. Nel prodotto $(-1) \cdot (-2) \cdot (-3) \cdot (+4)$ si trova $(-1) \cdot (-2) = +2$, poi $(+2) \cdot (-3) = -6$, infine $(-6) \cdot (+4) = -24$; i fattori negativi sono tre, e il prodotto è negativo.
:::

:::teorema{#divisione titolo="Divisione di numeri relativi"}
Il quoziente di due numeri relativi, con il divisore diverso da zero, è il numero che moltiplicato per il divisore dà il dividendo. Per esempio $(-12) : (+3) = -4$, perché $(-4) \cdot (+3) = -12$. Per questo motivo il segno del quoziente segue la stessa regola dei segni del prodotto:

- il quoziente di due numeri **concordi** è positivo, come in $(-20) : (-5) = +4$;
- il quoziente di due numeri **discordi** è negativo, come in $(+18) : (-6) = -3$.

Il valore assoluto del quoziente è il quoziente dei valori assoluti. In questo argomento si considerano soltanto divisioni con risultato intero. Il risultato di una divisione come $(+7) : (-2)$ è un numero non intero, e numeri di questo tipo si studiano nell'argomento sulle frazioni.
:::

:::attenzione
Anche tra i numeri relativi la divisione per zero è priva di significato. Per esempio $(-6) : 0$ non esiste, perché nessun numero moltiplicato per $0$ dà $-6$. Invece $0 : (-6) = 0$, perché $0 \cdot (-6) = 0$.
:::

## Potenze di numeri relativi

:::teorema{#potenze-di-numeri-relativi titolo="Segno di una potenza"}
La potenza, definita nell'argomento sui numeri naturali, è un prodotto di fattori uguali alla base. Per esempio $(-2)^3 = (-2) \cdot (-2) \cdot (-2)$. Il valore assoluto di una potenza è la potenza del valore assoluto della base. Per il segno, la regola del prodotto di più fattori dà tre casi:

- una potenza con base positiva è positiva;
- una potenza con base negativa ed esponente **pari** è positiva, perché i fattori negativi sono in numero pari;
- una potenza con base negativa ed esponente **dispari** è negativa, perché i fattori negativi sono in numero dispari.

Per esempio
$$
(-2)^1 = -2 ,
\qquad
(-2)^2 = +4 ,
\qquad
(-2)^3 = -8 ,
\qquad
(-2)^4 = +16 .
$$
Con la stessa regola $(-1)^{10} = +1$, perché $10$ è pari, e $(-1)^{7} = -1$, perché $7$ è dispari. Il segno di una potenza dipende quindi soltanto dal segno della base e dalla parità dell'esponente.
:::

:::attenzione{#meno-davanti-alla-potenza}
Le scritture $-2^2$ e $(-2)^2$ indicano numeri diversi. In $(-2)^2$ la base è $-2$, quindi $(-2)^2 = (-2) \cdot (-2) = +4$. In $-2^2$ la base è $2$, e il segno $-$ davanti indica l'opposto della potenza, perciò $-2^2 = -(2 \cdot 2) = -4$. Allo stesso modo $-3^2 = -9$, mentre $(-3)^2 = +9$.

Con esponente dispari, invece, i due numeri coincidono, perché $-2^3 = -8$ e anche $(-2)^3 = -8$.
:::

## Espressioni con i numeri relativi

:::richiamo{titolo="Ordine delle operazioni"}
In un'espressione si calcolano prima le potenze, poi le moltiplicazioni e le divisioni nell'ordine in cui compaiono da sinistra a destra, infine le addizioni e le sottrazioni. Se ci sono parentesi, si calcolano prima le espressioni nelle parentesi tonde, poi quelle nelle quadre, infine quelle nelle graffe.
:::

:::definizione{#espressioni titolo="Espressioni con i numeri relativi"}
Un'**espressione con i numeri relativi** è una sequenza di numeri relativi legati dai segni delle operazioni e dalle parentesi. Si calcola con lo stesso ordine delle operazioni usato per i numeri naturali, e in ogni operazione si applica la regola dei segni corrispondente. Per esempio
$$
\begin{aligned}
(-3) \cdot (+4) - (-10) : (+2)
&= -12 - (-5) \\[6pt]
&= -12 + 5 \\[6pt]
&= -7 .
\end{aligned}
$$
La moltiplicazione e la divisione si eseguono prima della sottrazione. Il prodotto $(-3) \cdot (+4)$ ha fattori discordi e vale $-12$; anche il quoziente $(-10) : (+2)$ ha numeri discordi e vale $-5$. Infine la sottrazione di $-5$ diventa l'addizione di $+5$.
:::

:::esempio{titolo="Un'espressione con tre tipi di parentesi"}
$$
\begin{aligned}
& \{ [ (-2)^3 + 5 ] \cdot (-4) - (-3)^2 \} : (-3) \\[6pt]
={} & \{ [ -8 + 5 ] \cdot (-4) - 9 \} : (-3) \\[6pt]
={} & \{ (-3) \cdot (-4) - 9 \} : (-3) \\[6pt]
={} & \{ 12 - 9 \} : (-3) \\[6pt]
={} & (+3) : (-3) \\[6pt]
={} & -1
\end{aligned}
$$
Per prime si calcolano le potenze. La base $-2$ ha esponente dispari, quindi $(-2)^3 = -8$; la base $-3$ ha esponente pari, quindi $(-3)^2 = +9$, e il segno $-$ davanti a $(-3)^2$ dà $-9$. Nella parentesi quadra $-8 + 5 = -3$, perché i numeri sono discordi e $8 - 5 = 3$. Nella parentesi graffa il prodotto $(-3) \cdot (-4)$ ha fattori concordi e vale $+12$, e poi $12 - 9 = 3$. Infine il quoziente $(+3) : (-3)$ ha numeri discordi, perciò l'espressione vale $-1$.
:::
