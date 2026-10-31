---
titolo: Disequazioni di primo grado
sommario: Che cosa sono le disuguaglianze e le disequazioni, come si scrivono le soluzioni sulla retta e con gli intervalli, come si risolvono le disequazioni di primo grado, i sistemi, le disequazioni con un prodotto o un quoziente e i problemi del tipo "da quanti in poi".
---

## Disuguaglianze e loro proprietà

:::definizione{#disuguaglianza titolo="Disuguaglianza"}
Una **disuguaglianza** è una scrittura che confronta due numeri diversi e dice quale dei due è il più piccolo. Si usano quattro simboli:

- $a < b$ si legge "$a$ è minore di $b$";
- $a > b$ si legge "$a$ è maggiore di $b$";
- $a \leq b$ si legge "$a$ è minore o uguale a $b$", cioè $a < b$ oppure $a = b$;
- $a \geq b$ si legge "$a$ è maggiore o uguale a $b$", cioè $a > b$ oppure $a = b$.

La punta del simbolo è rivolta verso il numero più piccolo. Per esempio $3 < 7$ e $7 > 3$ dicono la stessa cosa. La scrittura $4 \leq 4$ è vera, perché $4 = 4$, mentre $4 < 4$ è falsa.

Il numero $a$ è minore di $b$ esattamente quando la differenza $b - a$ è un numero positivo. Per esempio $2 < 5$, perché $5 - 2 = 3$ è positivo, e $-5 < -2$, perché $-2 - (-5) = -2 + 5 = 3$ è positivo. Questa lettura con la differenza permette di giustificare le proprietà delle disuguaglianze.
:::

:::osservazione{#retta-orientata-ordine titolo="L'ordine sulla retta"}
Sulla retta orientata dei numeri, vista nell'argomento sui numeri relativi, il verso della freccia va da sinistra a destra. Dati due numeri, il **maggiore** è quello che si trova più a destra. Perciò ogni numero negativo è minore di ogni numero positivo, e tra due numeri negativi il maggiore è quello più vicino a zero. Per esempio $-2 > -5$, come una temperatura di $-2$ gradi è più alta di una temperatura di $-5$ gradi.

::grafico{assi=0 uguale=1 linee="-6.2,0 6.2,0;5.9,0.15 6.2,0 5.9,-0.15;-6,-0.1 -6,0.1;-5,-0.1 -5,0.1;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" punti="-5,0,pieno;-2,0,pieno;2,0,pieno;5,0,pieno" etichette="-6.16,-0.5,−6;-5.16,-0.5,−5;-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-6.6 xmax=6.6 ymin=-0.8 ymax=0.6 titolo="Sulla retta orientata il numero più a destra è il maggiore, quindi $-5 < -2 < 2 < 5$"}

:::

:::richiamo{titolo="Regola dei segni"}
Il prodotto di due numeri diversi da zero è positivo se i due numeri hanno lo stesso segno, ed è negativo se hanno segni diversi. Lo stesso vale per il quoziente.
:::

::::teorema{#proprieta-disuguaglianze titolo="Proprietà delle disuguaglianze"}
Siano $a$ e $b$ due numeri con $a < b$, e sia $c$ un numero qualsiasi.

- Sommando o sottraendo $c$ a entrambi i numeri, il verso resta lo stesso: $a + c < b + c$ e $a - c < b - c$. Per esempio da $2 < 5$ si ottiene $2 + 10 < 5 + 10$, cioè $12 < 15$.
- Se $c$ è *positivo*, moltiplicando o dividendo entrambi i numeri per $c$ il verso resta lo stesso: $a \cdot c < b \cdot c$. Per esempio da $2 < 5$, moltiplicando per $3$, si ottiene $6 < 15$.
- Se $c$ è *negativo*, moltiplicando o dividendo entrambi i numeri per $c$ il verso **si inverte**: $a \cdot c > b \cdot c$. Per esempio da $2 < 5$, moltiplicando per $-3$, si ottiene $-6 > -15$.

Le stesse proprietà valgono per i simboli $>$, $\leq$ e $\geq$. Invertire il verso vuol dire scambiare $<$ con $>$ e $\leq$ con $\geq$. Queste proprietà sono la base di tutti i calcoli con le disequazioni.

:::dimostrazione
L'idea è guardare la differenza tra il numero più grande e il più piccolo. Poiché $a < b$, la differenza $b - a$ è positiva.

Per la somma si calcola $(b + c) - (a + c) = b - a$. Questa differenza è positiva, quindi $a + c < b + c$. Con i numeri, $(5 + 10) - (2 + 10) = 15 - 12 = 3$, che è proprio $5 - 2$.

Per il prodotto si calcola $b \cdot c - a \cdot c = c \cdot (b - a)$, raccogliendo $c$ con la proprietà distributiva. Il fattore $b - a$ è positivo.

- Se $c$ è positivo, il prodotto $c \cdot (b - a)$ ha due fattori positivi ed è positivo per la regola dei segni. Quindi $a \cdot c < b \cdot c$. Con $a = 2$, $b = 5$ e $c = 3$ si ha $15 - 6 = 9 = 3 \cdot 3$, positivo.
- Se $c$ è negativo, il prodotto $c \cdot (b - a)$ ha un fattore negativo e uno positivo, ed è negativo per la regola dei segni. La differenza $b \cdot c - a \cdot c$ è quindi negativa, perciò $b \cdot c < a \cdot c$, cioè $a \cdot c > b \cdot c$. Con $a = 2$, $b = 5$ e $c = -3$ si ha $-15 - (-6) = -9 = -3 \cdot 3$, negativo.

Dividere per $c$ è come moltiplicare per il reciproco $\dfrac{1}{c}$, che ha lo stesso segno di $c$, quindi per la divisione valgono le stesse conclusioni.
:::
::::

:::attenzione
Moltiplicando per un numero negativo, il verso va invertito. Da $2 < 5$, moltiplicando per $-1$ e lasciando il verso com'è, si scriverebbe $-2 < -5$, che è falso. Infatti sulla retta $-2$ sta a destra di $-5$, quindi $-2 > -5$.
:::

## Disequazioni e intervalli

:::definizione{#disequazione titolo="Disequazione e soluzioni"}
Una **disequazione** è una disuguaglianza tra due espressioni che contengono un numero sconosciuto, l'incognita $x$. Come nelle equazioni, l'espressione a sinistra del simbolo si chiama primo membro e quella a destra secondo membro. Una **soluzione** della disequazione è un numero che, messo al posto di $x$, rende vera la disuguaglianza. **Risolvere** una disequazione vuol dire trovare tutte le sue soluzioni.

Per esempio in $2x - 1 > 5$ si provano alcuni valori.

- Con $x = 4$ si ottiene $2 \cdot 4 - 1 = 7$, e $7 > 5$ è vera, quindi $4$ è una soluzione.
- Con $x = 3$ si ottiene $2 \cdot 3 - 1 = 5$, e $5 > 5$ è falsa, quindi $3$ è escluso.
- Con $x = 0$ si ottiene $-1$, e $-1 > 5$ è falsa.

Le soluzioni sono tutti i numeri maggiori di $3$, anche quelli con la virgola come $3{,}1$ o $3{,}001$. Si scrive che le soluzioni sono $x > 3$. A differenza di un'equazione di primo grado, che ha di solito una sola soluzione, una disequazione ha di solito infinite soluzioni.
:::

:::definizione{#intervalli titolo="Intervalli"}
L'insieme delle soluzioni di una disequazione è quasi sempre un **intervallo**, cioè un tratto della retta dei numeri. Un intervallo si indica con i suoi due estremi, scritti tra parentesi.

- La parentesi *quadra* indica che l'estremo fa parte dell'intervallo (estremo incluso); sulla retta si disegna un pallino pieno.
- La parentesi *tonda* indica che l'estremo è escluso; sulla retta si disegna un pallino vuoto.
- Il simbolo $+\infty$, che si legge "più infinito", indica che l'intervallo prosegue verso destra senza fine. Il simbolo $-\infty$, "meno infinito", indica che prosegue verso sinistra. Questi simboli indicano una direzione e non sono numeri, perciò accanto a loro la parentesi è sempre tonda.

| disuguaglianza | intervallo |
| --- | --- |
| $x > a$ | $(a, +\infty)$ |
| $x \geq a$ | $[a, +\infty)$ |
| $x < a$ | $(-\infty, a)$ |
| $x \leq a$ | $(-\infty, a]$ |
| $a < x < b$ | $(a, b)$ |
| $a \leq x \leq b$ | $[a, b]$ |
| $a < x \leq b$ | $(a, b]$ |

Per esempio le soluzioni di $2x - 1 > 5$ sono $x > 3$, cioè l'intervallo $(3, +\infty)$. La scrittura $-1 < x \leq 3$ si chiama doppia disuguaglianza e indica i numeri che sono contemporaneamente maggiori di $-1$ e minori o uguali a $3$.
:::

:::esempio{titolo="Intervalli sulla retta"}
Le soluzioni $x > 2$ formano l'intervallo $(2, +\infty)$. Sulla retta si colora la parte a destra di $2$, e il numero $2$ ha un pallino vuoto perché $2 > 2$ è falsa.

::grafico{assi=0 uguale=1 linee="-4.6,0 6.6,0;6.3,0.15 6.6,0 6.3,-0.15;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" area="0.18;0;2;6.5" punti="2,0,vuoto" etichette="-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-5 xmax=7 ymin=-0.8 ymax=0.6 titolo="Le soluzioni di $x > 2$ formano l'intervallo $(2, +\infty)$; il pallino vuoto indica che $2$ è escluso"}

La doppia disuguaglianza $-1 < x \leq 3$ corrisponde all'intervallo $(-1, 3]$. Il numero $-1$ è escluso e il numero $3$ è incluso. Per esempio $0$ e $2{,}5$ appartengono all'intervallo, mentre $-1$ e $4$ sono fuori.

::grafico{assi=0 uguale=1 linee="-4.6,0 6.6,0;6.3,0.15 6.6,0 6.3,-0.15;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1" area="0.18;0;-1;3" punti="-1,0,vuoto;3,0,pieno" etichette="-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6" xmin=-5 xmax=7 ymin=-0.8 ymax=0.6 titolo="L'intervallo $(-1, 3]$ contiene i numeri compresi tra $-1$, escluso, e $3$, incluso"}

:::

## Principi di equivalenza

:::definizione{#disequazioni-equivalenti titolo="Disequazioni equivalenti"}
Due disequazioni sono **equivalenti** se hanno le stesse soluzioni. Per esempio $2x > 6$ e $x > 3$ sono equivalenti. Per risolvere una disequazione la si trasforma in disequazioni equivalenti sempre più semplici, fino ad arrivare a una scrittura come $x > 3$, in cui le soluzioni si leggono subito.
:::

:::richiamo{titolo="Principi di equivalenza delle equazioni"}
Sommando o sottraendo ai due membri di un'equazione lo stesso numero o la stessa espressione si ottiene un'equazione equivalente. Moltiplicando o dividendo i due membri per lo stesso numero diverso da zero si ottiene un'equazione equivalente.
:::

:::teorema{#principi-equivalenza titolo="Principi di equivalenza delle disequazioni"}
- **Primo principio.** Sommando o sottraendo ai due membri lo stesso numero o la stessa espressione si ottiene una disequazione equivalente, con lo stesso verso. Ne segue che un termine si può *trasportare* da un membro all'altro cambiandogli il segno.
- **Secondo principio.** Moltiplicando o dividendo i due membri per lo stesso numero *positivo* si ottiene una disequazione equivalente con lo stesso verso. Moltiplicando o dividendo per lo stesso numero *negativo* si ottiene una disequazione equivalente con il verso invertito.

I due principi seguono dalle proprietà delle disuguaglianze, perché per ogni valore di $x$ i due membri sono numeri. Rispetto ai principi delle equazioni, la differenza riguarda solo il segno del numero per cui si moltiplica.

Per esempio in $x + 7 < 3$ si trasporta $7$ al secondo membro e si ottiene $x < 3 - 7$, cioè $x < -4$. In $-2x < 8$ si dividono i due membri per $-2$, che è negativo, quindi il verso si inverte e si ottiene $x > -4$.
:::

:::esempio{titolo="Controllo con un numero"}
Le soluzioni di $-2x < 8$ sono $x > -4$, cioè l'intervallo $(-4, +\infty)$. Il numero $0$ appartiene all'intervallo, e infatti $-2 \cdot 0 = 0$ e $0 < 8$ è vera. Il numero $-5$ è fuori dall'intervallo, e infatti $-2 \cdot (-5) = 10$ e $10 < 8$ è falsa. Provare un numero dentro l'intervallo e uno fuori è un controllo rapido del verso.
:::

:::attenzione
Dividendo $-2x < 8$ per $-2$ senza invertire il verso si scriverebbe $x < -4$, che è sbagliato. Il numero $-5$ soddisfa $x < -4$, ma con $x = -5$ la disequazione di partenza diventa $10 < 8$, che è falsa.
:::

## Disequazioni intere di primo grado

:::definizione{#disequazione-primo-grado titolo="Disequazione intera di primo grado"}
Una disequazione è **intera** se l'incognita non compare in nessun denominatore. È **di primo grado** se, dopo aver svolto i calcoli e trasportato i termini, si può scrivere nella forma
$$
a x > b ,
$$
oppure con $<$, $\geq$, $\leq$, dove $a$ e $b$ sono numeri e $a$ è diverso da zero. Il numero $a$ si chiama **coefficiente** di $x$. Per esempio $3x - 5 < x + 1$ diventa $2x < 6$, con $a = 2$ e $b = 6$, e le sue soluzioni sono $x < 3$.
:::

:::osservazione{#metodo-risoluzione titolo="Come si risolve"}
Una disequazione intera di primo grado si risolve con questi passaggi, ciascuno dei quali dà una disequazione equivalente.

1. Si svolgono i prodotti e si eliminano le parentesi.
2. Se ci sono frazioni con numeri al denominatore, si moltiplicano i due membri per il minimo comune multiplo dei denominatori. Questo numero è positivo, quindi il verso resta lo stesso.
3. Si trasportano i termini con la $x$ al primo membro e i numeri al secondo, cambiando loro il segno.
4. Si sommano i termini simili e si arriva a $a x > b$.
5. Si dividono i due membri per $a$. Se $a$ è positivo il verso resta lo stesso; se $a$ è negativo il verso si inverte.

Alla fine si scrivono le soluzioni con la disuguaglianza e con l'intervallo.
:::

:::esempio{titolo="Due disequazioni con le parentesi"}
Si risolve $3(x - 1) > x + 5$. Svolgendo il prodotto si ottiene $3x - 3 > x + 5$. Trasportando $x$ al primo membro e $-3$ al secondo si ottiene $3x - x > 5 + 3$, cioè $2x > 8$. Il coefficiente $2$ è positivo, quindi dividendo per $2$ il verso resta lo stesso, e le soluzioni sono $x > 4$, cioè $(4, +\infty)$.

Si risolve $5 - 3x \geq x - 7$. Trasportando si ottiene $-3x - x \geq -7 - 5$, cioè $-4x \geq -12$. Il coefficiente $-4$ è negativo, quindi dividendo per $-4$ il verso si inverte:
$$
x \leq \frac{-12}{-4} , \qquad \text{cioè} \qquad x \leq 3 .
$$
Le soluzioni sono $x \leq 3$, cioè l'intervallo $(-\infty, 3]$. Per controllo, con $x = 3$ i due membri valgono $5 - 9 = -4$ e $3 - 7 = -4$, e $-4 \geq -4$ è vera.
:::

:::esempio{#disequazioni-con-frazioni titolo="Una disequazione con le frazioni"}
Si risolve
$$
\frac{x}{3} - \frac{x - 1}{2} < \frac{1}{6} .
$$
Il minimo comune multiplo dei denominatori $3$, $2$ e $6$ è $6$. Si moltiplicano i due membri per $6$, che è positivo, e il verso resta lo stesso:
$$
\begin{aligned}
6 \cdot \frac{x}{3} - 6 \cdot \frac{x - 1}{2} &< 6 \cdot \frac{1}{6} \\[6pt]
2x - 3(x - 1) &< 1 \\[6pt]
2x - 3x + 3 &< 1 \\[6pt]
-x &< -2 .
\end{aligned}
$$
Moltiplicando per $-1$ il verso si inverte, quindi le soluzioni sono $x > 2$, cioè $(2, +\infty)$.
:::

:::attenzione
Il segno meno davanti a una frazione cambia il segno di *tutti* i termini del suo numeratore. Nell'esempio, $-3(x - 1)$ è uguale a $-3x + 3$. Scrivendo $-3x - 3$ si arriverebbe a $-x < 4$, cioè $x > -4$, che è sbagliato. Infatti $0$ soddisfa $x > -4$, ma con $x = 0$ il primo membro della disequazione di partenza vale $0 - \dfrac{-1}{2} = \dfrac{1}{2}$, e $\dfrac{1}{2} < \dfrac{1}{6}$ è falsa.
:::

## Disequazioni sempre verificate e mai verificate

:::teorema{#sempre-mai-verificate titolo="Disequazioni con coefficiente nullo"}
A volte i termini con la $x$ si cancellano e la disequazione diventa $0 \cdot x > b$, oppure con $<$, $\geq$, $\leq$. Il primo membro vale $0$ per ogni valore di $x$, quindi resta un confronto tra due numeri.

- Se il confronto è vero, ogni numero è soluzione. La disequazione si dice **sempre verificata** e le sue soluzioni sono tutti i numeri reali, cioè l'insieme $\mathbb{R}$.
- Se il confronto è falso, nessun numero è soluzione. La disequazione si dice **mai verificata** e l'insieme delle soluzioni è l'insieme vuoto, che si indica con $\emptyset$.

Per esempio $0 \cdot x > -5$ è sempre verificata, perché $0 > -5$ è vera; $0 \cdot x < -5$ è mai verificata, perché $0 < -5$ è falsa. Questi casi corrispondono alle equazioni indeterminate e impossibili viste nell'argomento sulle equazioni di primo grado.
:::

:::esempio{titolo="Tre casi a confronto"}
In $2(x + 3) > 2x + 1$ si svolge il prodotto e si ottiene $2x + 6 > 2x + 1$. Trasportando, $2x - 2x > 1 - 6$, cioè $0 \cdot x > -5$. Il confronto $0 > -5$ è vero, quindi la disequazione è **sempre verificata**. In effetti il primo membro supera il secondo di $5$ per ogni $x$.

In $3x - 2(x - 1) \geq x + 2$ il primo membro diventa $3x - 2x + 2 = x + 2$, quindi la disequazione è $x + 2 \geq x + 2$, cioè $0 \cdot x \geq 0$. Il confronto $0 \geq 0$ è vero, quindi la disequazione è sempre verificata.

Con il simbolo $>$ al posto di $\geq$, la disequazione $3x - 2(x - 1) > x + 2$ diventa $0 \cdot x > 0$. Il confronto $0 > 0$ è falso, quindi la disequazione è **mai verificata** e l'insieme delle soluzioni è $\emptyset$.
:::

## Sistemi di disequazioni

:::definizione{#sistema-disequazioni titolo="Sistema di disequazioni"}
Un **sistema di disequazioni** è un gruppo di due o più disequazioni nella stessa incognita che devono essere soddisfatte *insieme*. Si scrive con una graffa:
$$
\begin{cases}
x - 2 > 0 \\
2x \leq 10
\end{cases}
$$
Le soluzioni del sistema sono i numeri che soddisfano *tutte* le disequazioni. Per esempio $3$ è una soluzione, perché $3 - 2 = 1 > 0$ e $2 \cdot 3 = 6 \leq 10$. Il numero $7$ soddisfa la prima disequazione e rende falsa la seconda, perché $14 \leq 10$ è falsa, quindi è escluso. I sistemi servono quando un problema pone più condizioni contemporaneamente, per esempio una spesa che deve superare una soglia e restare entro un budget.
:::

:::osservazione{#schema-sistema titolo="Lo schema del sistema"}
Per risolvere un sistema si risolve ogni disequazione da sola e poi si cercano i numeri comuni. Nel sistema precedente la prima disequazione dà $x > 2$ e la seconda, dividendo per $2$, dà $x \leq 5$. Nello schema si disegna sopra la retta una linea per ogni disequazione, ciascuna nel tratto delle sue soluzioni. Le soluzioni del sistema sono il tratto in cui sono presenti *tutte* le linee, quindi $2 < x \leq 5$, cioè l'intervallo $(2, 5]$.

::grafico{assi=0 uguale=1 linee="-5.6,0 7.6,0;7.3,0.15 7.6,0 7.3,-0.15;2,0.5 7.6,0.5;-3,0.9 5,0.9;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1" area="1.1;0;2;5" segmenti="2,0,2,0.5;5,0,5,0.9" punti="2,0.5,vuoto;5,0.9,pieno;2,0,vuoto;5,0,pieno" etichette="-5.6,0.42,x > 2;-5.6,0.82,x ≤ 5;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6;6.92,-0.5,7" xmin=-6 xmax=8 ymin=-0.8 ymax=1.4 titolo="Nello schema del sistema le soluzioni di $x > 2$ e quelle di $x \leq 5$ hanno in comune l'intervallo $(2, 5]$"}

:::

:::esempio{titolo="Un sistema senza soluzioni"}
Nel sistema
$$
\begin{cases}
x > 4 \\
x < 2
\end{cases}
$$
la prima disequazione chiede i numeri a destra di $4$ e la seconda i numeri a sinistra di $2$. Nello schema le due linee non si sovrappongono in nessun tratto, quindi il sistema non ha soluzioni, e l'insieme delle soluzioni è $\emptyset$.

::grafico{assi=0 uguale=1 linee="-5.6,0 7.6,0;7.3,0.15 7.6,0 7.3,-0.15;4,0.5 7.6,0.5;-3,0.9 2,0.9;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1;6,-0.1 6,0.1;7,-0.1 7,0.1" segmenti="4,0,4,0.5;2,0,2,0.9" punti="4,0.5,vuoto;2,0.9,vuoto" etichette="-5.6,0.42,x > 4;-5.6,0.82,x < 2;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5;5.92,-0.5,6;6.92,-0.5,7" xmin=-6 xmax=8 ymin=-0.8 ymax=1.4 titolo="Le soluzioni di $x > 4$ e quelle di $x < 2$ non hanno numeri in comune, quindi il sistema non ha soluzioni"}

Lo stesso accade quando una delle disequazioni è mai verificata. Se invece una disequazione è sempre verificata, ogni numero la soddisfa, quindi le soluzioni del sistema sono quelle delle altre disequazioni.
:::

## Segno di un prodotto e disequazioni fratte

:::teorema{#segno-primo-grado titolo="Segno di un'espressione di primo grado"}
Un'espressione come $2x - 6$ cambia segno in un solo punto, quello in cui vale zero. Per sapere dove è positiva basta risolvere la disequazione $2x - 6 > 0$, che dà $x > 3$. Quindi $2x - 6$ è:

- positiva per $x > 3$, per esempio con $x = 4$ vale $2$;
- uguale a zero per $x = 3$;
- negativa per $x < 3$, per esempio con $x = 0$ vale $-6$.

Allo stesso modo $4 - 2x > 0$ dà $-2x > -4$, cioè $x < 2$, quindi $4 - 2x$ è positiva per $x < 2$ e negativa per $x > 2$. Quando il coefficiente di $x$ è negativo, la parte positiva sta a sinistra dello zero.
:::

:::teorema{#segno-prodotto titolo="Segno di un prodotto di due fattori"}
Per la regola dei segni, il prodotto di due fattori è:

- positivo quando i due fattori hanno lo stesso segno;
- negativo quando i due fattori hanno segni diversi;
- uguale a zero quando almeno uno dei due fattori vale zero.

Questa regola permette di risolvere disequazioni come $(x - 1)(x + 3) > 0$ senza svolgere il prodotto. Per esempio con $x = 2$ i fattori valgono $1$ e $5$, che sono positivi, e il prodotto $5$ è positivo; con $x = 0$ i fattori valgono $-1$ e $3$, e il prodotto $-3$ è negativo.
:::

:::definizione{#schema-dei-segni titolo="Schema dei segni"}
Lo **schema dei segni** è una tabella che riporta il segno di ogni fattore e del prodotto. Si trovano i numeri in cui ogni fattore vale zero; questi numeri dividono la retta in tratti. Nella tabella c'è una riga per ogni fattore e una colonna per ogni tratto, e nell'ultima riga c'è il segno del prodotto, ottenuto con la regola dei segni.

Per $(x - 1)(x + 3) > 0$ il fattore $x - 1$ è positivo per $x > 1$ e il fattore $x + 3$ è positivo per $x > -3$. I numeri $-3$ e $1$ dividono la retta in tre tratti:
$$
\begin{array}{c|ccc}
 & x < -3 & -3 < x < 1 & x > 1 \\ \hline
x - 1 & - & - & + \\
x + 3 & - & + & + \\ \hline
(x - 1)(x + 3) & + & - & +
\end{array}
$$
Il prodotto è positivo nel primo e nel terzo tratto, quindi le soluzioni sono $x < -3$ oppure $x > 1$. Il simbolo è $>$, perciò i numeri $-3$ e $1$, dove il prodotto vale zero, sono esclusi. Con il simbolo $\geq$ sarebbero stati inclusi.

::grafico{assi=0 uguale=1 linee="-5.6,0 4.6,0;4.3,0.15 4.6,0 4.3,-0.15;-5,-0.1 -5,0.1;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1" area="0.18;0;-5.6;-3|0.18;0;1;4.5" punti="-3,0,vuoto;1,0,vuoto" etichette="-5.16,-0.5,−5;-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4" xmin=-6 xmax=5 ymin=-0.8 ymax=0.6 titolo="Le soluzioni di $(x - 1)(x + 3) > 0$ sono $x < -3$ oppure $x > 1$; i numeri $-3$ e $1$ sono esclusi"}

:::

:::definizione{#disequazioni-fratte titolo="Disequazione fratta"}
Una disequazione è **fratta** se l'incognita compare al denominatore, come in
$$
\frac{x - 2}{x + 1} \geq 0 .
$$
Una frazione ha senso solo se il denominatore è diverso da zero. La **condizione di esistenza** è quindi $x + 1 \neq 0$, cioè $x \neq -1$. Il segno di un quoziente segue la stessa regola dei segni del prodotto, perciò si usa lo schema dei segni con una riga per il numeratore e una per il denominatore.

Il numeratore $x - 2$ è positivo per $x > 2$ e il denominatore $x + 1$ è positivo per $x > -1$:
$$
\begin{array}{c|ccc}
 & x < -1 & -1 < x < 2 & x > 2 \\ \hline
x - 2 & - & - & + \\
x + 1 & - & + & + \\ \hline
\dfrac{x - 2}{x + 1} & + & - & +
\end{array}
$$
Il quoziente è positivo per $x < -1$ e per $x > 2$, ed è uguale a zero per $x = 2$, che è incluso perché il simbolo è $\geq$. Il numero $-1$ è escluso per la condizione di esistenza. Le soluzioni sono quindi $x < -1$ oppure $x \geq 2$.

::grafico{assi=0 uguale=1 linee="-4.6,0 5.6,0;5.3,0.15 5.6,0 5.3,-0.15;-4,-0.1 -4,0.1;-3,-0.1 -3,0.1;-2,-0.1 -2,0.1;-1,-0.1 -1,0.1;0,-0.1 0,0.1;1,-0.1 1,0.1;2,-0.1 2,0.1;3,-0.1 3,0.1;4,-0.1 4,0.1;5,-0.1 5,0.1" area="0.18;0;-4.6;-1|0.18;0;2;5.5" punti="-1,0,vuoto;2,0,pieno" etichette="-4.16,-0.5,−4;-3.16,-0.5,−3;-2.16,-0.5,−2;-1.16,-0.5,−1;-0.08,-0.5,0;0.92,-0.5,1;1.92,-0.5,2;2.92,-0.5,3;3.92,-0.5,4;4.92,-0.5,5" xmin=-5 xmax=6 ymin=-0.8 ymax=0.6 titolo="Le soluzioni di $\dfrac{x - 2}{x + 1} \geq 0$ sono $x < -1$ oppure $x \geq 2$; il numero $-1$ è escluso perché annulla il denominatore"}

:::

:::attenzione
In una disequazione fratta i due membri non si moltiplicano per il denominatore, perché il suo segno cambia con $x$ e quindi non si sa se il verso va invertito. Moltiplicando $\dfrac{x - 2}{x + 1} \geq 0$ per $x + 1$ si otterrebbe $x - 2 \geq 0$, cioè $x \geq 2$, e si perderebbero soluzioni. Per esempio con $x = -3$ il quoziente vale $\dfrac{-5}{-2} = \dfrac{5}{2}$, che è maggiore di zero, quindi $-3$ è una soluzione anche se $-3 \geq 2$ è falsa.
:::

## Problemi con le disequazioni

:::osservazione{#problemi-disequazioni titolo="Dal testo alla disequazione"}
Molti problemi chiedono "da quanti in poi", "fino a quanto", "almeno" o "al massimo". Si sceglie l'incognita, si scrive la disequazione e la si risolve. Le espressioni più comuni si traducono così:

| nel testo | simbolo |
| --- | --- |
| più di, supera | $>$ |
| meno di | $<$ |
| almeno, non meno di | $\geq$ |
| al massimo, non più di | $\leq$ |

Alla fine si controlla che la risposta abbia senso. Se l'incognita conta oggetti o persone, le soluzioni sono solo i numeri interi dell'intervallo trovato.
:::

:::esempio{titolo="Lavatrice a gettone o tessera"}
In una lavanderia ogni lavaggio costa $4{,}50$ euro. In alternativa si compra una tessera da $10$ euro, con la quale ogni lavaggio costa $3$ euro. Si cerca da quanti lavaggi in poi la tessera costa meno.

Si indica con $x$ il numero di lavaggi. Senza tessera si spendono $4{,}5\,x$ euro e con la tessera $10 + 3x$ euro. La tessera costa meno se
$$
10 + 3x < 4{,}5\,x .
$$
Trasportando si ottiene $3x - 4{,}5\,x < -10$, cioè $-1{,}5\,x < -10$. Dividendo per $-1{,}5$ il verso si inverte, e poiché $\dfrac{10}{1{,}5} = \dfrac{100}{15} = \dfrac{20}{3}$ si ottiene
$$
x > \frac{20}{3} .
$$
Il numero $\dfrac{20}{3}$ è compreso tra $6$ e $7$, perché $6 \cdot 3 = 18$ e $7 \cdot 3 = 21$. Il numero di lavaggi è intero, quindi la tessera costa meno **a partire da $7$ lavaggi**. Per controllo, con $7$ lavaggi si spendono $31{,}50$ euro senza tessera e $31$ euro con la tessera; con $6$ lavaggi si spendono $27$ euro senza tessera e $28$ euro con la tessera.
:::

:::esempio{titolo="Un problema con due condizioni"}
Si cercano i numeri il cui triplo diminuito di $4$ supera $11$ e il cui doppio non supera $16$. Le due condizioni valgono insieme, quindi si scrive un sistema:
$$
\begin{cases}
3x - 4 > 11 \\
2x \leq 16
\end{cases}
$$
La prima disequazione dà $3x > 15$, cioè $x > 5$. La seconda dà $x \leq 8$. Le soluzioni sono $5 < x \leq 8$, cioè l'intervallo $(5, 8]$. Se si cercano solo numeri interi, le soluzioni sono $6$, $7$ e $8$.
:::
