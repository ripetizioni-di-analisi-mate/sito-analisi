---
titolo: Numeri naturali e ordine delle operazioni
sommario: Che cosa sono i numeri naturali e come si scrivono con le cifre, come si chiamano i termini delle quattro operazioni, come si esegue la divisione con resto, quali proprietà hanno le operazioni, che cos'è una potenza e in quale ordine si calcola un'espressione con le parentesi.
---

## I numeri naturali e il loro ordine

:::definizione{#numeri-naturali titolo="Numeri naturali"}
I numeri che si usano per contare gli oggetti si chiamano **numeri naturali**. Il primo è lo zero, che indica l'assenza di oggetti, e poi si prosegue aggiungendo ogni volta un'unità:
$$
0, \ 1, \ 2, \ 3, \ 4, \ 5, \ \ldots
$$
I puntini indicano che l'elenco continua senza fine. La raccolta di tutti i numeri naturali si chiama **insieme dei numeri naturali** e si indica con il simbolo $\mathbb{N}$.

Ogni numero naturale ha un **successivo**, che si ottiene aggiungendo $1$. Il successivo di $7$ è $8$ e il successivo di $99$ è $100$. Poiché si può sempre aggiungere $1$, non esiste un numero naturale più grande di tutti gli altri. Ogni numero naturale diverso da $0$ ha anche un **precedente**, che si ottiene togliendo $1$. Il precedente di $40$ è $39$, mentre lo zero non ha un precedente tra i numeri naturali.
:::

:::definizione{#ordine-numeri-naturali titolo="Ordine tra numeri naturali"}
Dati due numeri naturali diversi, il **minore** è quello che si incontra prima contando a partire da $0$, e l'altro è il **maggiore**. Si scrive $a < b$, che si legge "$a$ è minore di $b$", oppure $b > a$, che si legge "$b$ è maggiore di $a$". La punta del simbolo è sempre rivolta verso il numero minore. Per esempio $3 < 8$ e $15 > 11$.

I simboli $\leq$ e $\geq$ si leggono "minore o uguale" e "maggiore o uguale". La scrittura $a \leq 5$ indica che $a$ è minore di $5$ oppure è uguale a $5$, quindi $a$ è uno dei numeri $0$, $1$, $2$, $3$, $4$, $5$.

L'ordine permette di disporre una lista di numeri dal più piccolo al più grande, come si fa con i prezzi o con i punteggi. I numeri $12$, $5$, $30$ e $9$, messi in ordine crescente, diventano $5 < 9 < 12 < 30$.
:::

:::definizione{#retta-dei-numeri titolo="Retta dei numeri"}
I numeri naturali si rappresentano su una retta. Si sceglie un punto per lo $0$ e un segmento come **unità di misura**; poi, partendo da $0$, si riporta l'unità verso destra tante volte quante servono. Al primo passo si trova il punto del numero $1$, al secondo passo quello del numero $2$, e così via. La freccia indica il verso in cui i numeri crescono.

Su questa **retta dei numeri** il numero minore si trova sempre a sinistra del maggiore. La distanza tra i punti di due numeri, contata in passi, è la differenza tra il maggiore e il minore.

::grafico{assi=0 uguale=1 linee="-0.4,0 10.8,0;10.5,0.18 10.8,0 10.5,-0.18;0,-0.12 0,0.12;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12" punti="2,0,pieno;7,0,pieno" segmenti="2,0.45,7,0.45" etichette="-0.13,-0.55,0;0.87,-0.55,1;1.87,-0.55,2;2.87,-0.55,3;3.87,-0.55,4;4.87,-0.55,5;5.87,-0.55,6;6.87,-0.55,7;7.87,-0.55,8;8.87,-0.55,9;9.74,-0.55,10;3.7,0.65,5 passi" xmin=-0.8 xmax=11.2 ymin=-1 ymax=1.1 titolo="Sulla retta dei numeri $2$ si trova a sinistra di $7$, quindi $2 < 7$; da $2$ a $7$ ci sono $5$ passi"}

:::

## Il sistema decimale posizionale

:::definizione{#sistema-decimale titolo="Sistema decimale posizionale"}
Per scrivere i numeri si usano dieci simboli, detti **cifre**:
$$
0, \ 1, \ 2, \ 3, \ 4, \ 5, \ 6, \ 7, \ 8, \ 9 .
$$
Dieci unità formano una **decina**, dieci decine formano un **centinaio** e dieci centinaia formano un **migliaio**. In un numero scritto con più cifre, la cifra più a destra conta le unità, quella alla sua sinistra conta le decine, poi vengono le centinaia e le migliaia. Il valore di una cifra dipende quindi dal posto che occupa, e per questo il sistema si chiama **posizionale**. Si chiama **decimale** perché si raggruppa a dieci a dieci.

Nel numero $234$ la cifra $2$ vale $2$ centinaia, la cifra $3$ vale $3$ decine e la cifra $4$ vale $4$ unità, perciò
$$
234 = 200 + 30 + 4 .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 5,0 5,5 0,5;6,0 11,0 11,5 6,5;12,0 12.5,0 12.5,5 12,5;13,0 13.5,0 13.5,5 13,5;14,0 14.5,0 14.5,5 14,5;15.5,0 16,0 16,0.5 15.5,0.5;15.5,0.8 16,0.8 16,1.3 15.5,1.3;15.5,1.6 16,1.6 16,2.1 15.5,2.1;15.5,2.4 16,2.4 16,2.9 15.5,2.9" linee="0,0 5,0 5,5 0,5 0,0;0.5,0 0.5,5;1,0 1,5;1.5,0 1.5,5;2,0 2,5;2.5,0 2.5,5;3,0 3,5;3.5,0 3.5,5;4,0 4,5;4.5,0 4.5,5;0,0.5 5,0.5;0,1 5,1;0,1.5 5,1.5;0,2 5,2;0,2.5 5,2.5;0,3 5,3;0,3.5 5,3.5;0,4 5,4;0,4.5 5,4.5;6,0 11,0 11,5 6,5 6,0;6.5,0 6.5,5;7,0 7,5;7.5,0 7.5,5;8,0 8,5;8.5,0 8.5,5;9,0 9,5;9.5,0 9.5,5;10,0 10,5;10.5,0 10.5,5;6,0.5 11,0.5;6,1 11,1;6,1.5 11,1.5;6,2 11,2;6,2.5 11,2.5;6,3 11,3;6,3.5 11,3.5;6,4 11,4;6,4.5 11,4.5;12,0 12.5,0 12.5,5 12,5 12,0;12,0.5 12.5,0.5;12,1 12.5,1;12,1.5 12.5,1.5;12,2 12.5,2;12,2.5 12.5,2.5;12,3 12.5,3;12,3.5 12.5,3.5;12,4 12.5,4;12,4.5 12.5,4.5;13,0 13.5,0 13.5,5 13,5 13,0;13,0.5 13.5,0.5;13,1 13.5,1;13,1.5 13.5,1.5;13,2 13.5,2;13,2.5 13.5,2.5;13,3 13.5,3;13,3.5 13.5,3.5;13,4 13.5,4;13,4.5 13.5,4.5;14,0 14.5,0 14.5,5 14,5 14,0;14,0.5 14.5,0.5;14,1 14.5,1;14,1.5 14.5,1.5;14,2 14.5,2;14,2.5 14.5,2.5;14,3 14.5,3;14,3.5 14.5,3.5;14,4 14.5,4;14,4.5 14.5,4.5;15.5,0 16,0 16,0.5 15.5,0.5 15.5,0;15.5,0.8 16,0.8 16,1.3 15.5,1.3 15.5,0.8;15.5,1.6 16,1.6 16,2.1 15.5,2.1 15.5,1.6;15.5,2.4 16,2.4 16,2.9 15.5,2.9 15.5,2.4" etichette="1.2,-0.8,2 centinaia;12.1,-0.8,3 decine;15.1,-0.8,4 unità" xmin=-0.5 xmax=17.5 ymin=-1.5 ymax=5.5 titolo="Il numero $234$ è formato da $2$ centinaia, $3$ decine e $4$ unità, cioè $234 = 200 + 30 + 4$"}

Con sole dieci cifre si scrive così qualsiasi numero naturale, per quanto grande.
:::

:::esempio{titolo="Lettura delle cifre di un numero"}
Nel numero $4\,256$ ci sono $4$ migliaia, $2$ centinaia, $5$ decine e $6$ unità:
$$
4\,256 = 4\,000 + 200 + 50 + 6 .
$$
I numeri con più di quattro cifre si scrivono separando le cifre a gruppi di tre da destra, con un piccolo spazio, come in $4\,256$ e in $1\,250\,000$. Lo spazio rende il numero più facile da leggere e non cambia il suo valore.
:::

:::attenzione
Lo zero dentro un numero indica che in quella posizione non ci sono unità, decine o centinaia, e non si può togliere. Il numero $305$ ha $3$ centinaia, $0$ decine e $5$ unità, quindi vale $300 + 5$. Il numero $35$ ha invece $3$ decine e $5$ unità e vale $30 + 5$, che è molto meno.
:::

:::osservazione{#confronto-numeri titolo="Confronto tra numeri scritti con le cifre"}
Il sistema posizionale permette di confrontare due numeri senza contare. Tra due numeri con un diverso numero di cifre è maggiore quello che ha più cifre, perché per esempio ogni numero di quattro cifre vale almeno $1\,000$, mentre ogni numero di tre cifre vale al più $999$. Se le cifre sono tante quante, si confrontano le cifre partendo da sinistra, e decide la prima cifra diversa. Per esempio $3\,482 > 3\,429$, perché le migliaia e le centinaia sono uguali e nelle decine $8$ è maggiore di $2$.
:::

## Addizione e sottrazione

:::definizione{#addizione titolo="Addizione"}
L'**addizione** riunisce due quantità in una sola. I numeri che si sommano si chiamano **addendi** e il risultato si chiama **somma**:
$$
\underbrace{3}_{\text{addendo}} + \underbrace{4}_{\text{addendo}} = \underbrace{7}_{\text{somma}} .
$$
Sulla retta dei numeri sommare $4$ vuol dire fare $4$ passi verso destra. La somma di due numeri naturali è sempre un numero naturale. Per esempio, se in un cesto ci sono $3$ mele e se ne aggiungono $4$, nel cesto ci sono $3 + 4 = 7$ mele.
:::

:::definizione{#sottrazione titolo="Sottrazione"}
La **sottrazione** è l'operazione inversa dell'addizione. Dati due numeri $a$ e $b$, con $a \geq b$, la differenza $a - b$ è il numero che, sommato a $b$, dà $a$. Il primo numero si chiama **minuendo**, il secondo **sottraendo** e il risultato **differenza**:
$$
\underbrace{7}_{\text{minuendo}} - \underbrace{4}_{\text{sottraendo}} = \underbrace{3}_{\text{differenza}} ,
\qquad
\text{perché} \quad 4 + 3 = 7 .
$$
Sulla retta dei numeri sottrarre $4$ vuol dire fare $4$ passi verso sinistra. La sottrazione serve a togliere una quantità da un'altra e a trovare quanto manca. Se un libro ha $100$ pagine e se ne sono lette $38$, restano da leggere $100 - 38 = 62$ pagine, perché $38 + 62 = 100$.

::grafico{assi=0 uguale=1 linee="-0.4,0 10.8,0;10.5,0.18 10.8,0 10.5,-0.18;0,-0.12 0,0.12;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12" punti="3,0,pieno;7,0,pieno" vettori="3,0.5,7,0.5,+4;7,1.2,3,1.2,−4" etichette="-0.13,-0.55,0;0.87,-0.55,1;1.87,-0.55,2;2.87,-0.55,3;3.87,-0.55,4;4.87,-0.55,5;5.87,-0.55,6;6.87,-0.55,7;7.87,-0.55,8;8.87,-0.55,9;9.74,-0.55,10" xmin=-0.8 xmax=11.2 ymin=-1 ymax=1.8 titolo="Da $3$ si arriva a $7$ con $4$ passi verso destra, quindi $3 + 4 = 7$; da $7$ si torna a $3$ con $4$ passi verso sinistra, quindi $7 - 4 = 3$"}

:::

:::esempio{titolo="La prova della sottrazione"}
La definizione dà anche un modo di controllare il risultato, detto **prova**. Si calcola $52 - 17 = 35$. La prova consiste nel sommare la differenza al sottraendo, e infatti $17 + 35 = 52$, che è il minuendo. Se la somma non avesse dato $52$, la sottrazione sarebbe stata sbagliata.
:::

:::attenzione
Tra i numeri naturali la sottrazione $a - b$ si può eseguire *solo se* $a \geq b$. Per esempio $3 - 5$ non è un numero naturale, perché nessun numero naturale sommato a $5$ dà $3$. Per eseguire anche queste sottrazioni servono i numeri negativi, che si studiano nell'argomento sui numeri relativi.
:::

## Moltiplicazione e divisione

:::definizione{#moltiplicazione titolo="Moltiplicazione"}
La **moltiplicazione** è un'addizione ripetuta di addendi uguali. Il prodotto $3 \cdot 4$ indica la somma di $3$ addendi uguali a $4$:
$$
3 \cdot 4 = 4 + 4 + 4 = 12 .
$$
I numeri che si moltiplicano si chiamano **fattori** e il risultato si chiama **prodotto**. Il segno della moltiplicazione è il punto $\cdot$, che si legge "per". La moltiplicazione serve a contare oggetti disposti a gruppi uguali, per esempio $3$ file da $4$ quadretti, oppure $5$ confezioni da $6$ bottiglie, che sono $5 \cdot 6 = 30$ bottiglie.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" linee="0,0 4,0 4,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;0,1 4,1;0,2 4,2" etichette="4.4,1.3,3 file;1.1,-0.7,4 quadretti per fila" xmin=-0.5 xmax=6.5 ymin=-1.2 ymax=3.4 titolo="Tre file da $4$ quadretti contengono $4 + 4 + 4 = 12$ quadretti, quindi $3 \cdot 4 = 12$"}

:::

:::definizione{#divisione titolo="Divisione"}
La **divisione** è l'operazione inversa della moltiplicazione. Dati due numeri $a$ e $b$, con $b \neq 0$, il quoziente $a : b$ è il numero che, moltiplicato per $b$, dà $a$. Il primo numero si chiama **dividendo**, il secondo **divisore** e il risultato **quoziente**:
$$
\underbrace{12}_{\text{dividendo}} : \underbrace{3}_{\text{divisore}} = \underbrace{4}_{\text{quoziente}} ,
\qquad
\text{perché} \quad 4 \cdot 3 = 12 .
$$
Il segno $:$ si legge "diviso". La divisione serve a ripartire una quantità in parti uguali. Se $12$ caramelle si dividono tra $3$ bambini, ciascuno ne riceve $12 : 3 = 4$. Quando il quoziente è un numero naturale, come in questo caso, la divisione si dice **esatta**.
:::

:::teorema{#divisione-con-resto titolo="Divisione con resto"}
Una divisione tra numeri naturali non è sempre esatta. Per esempio $17$ caramelle non si dividono in parti uguali tra $5$ bambini, perché nessun numero naturale moltiplicato per $5$ dà $17$. In questo caso si cerca quante volte il divisore sta nel dividendo e quanto avanza.

Dati due numeri naturali $a$ e $b$, con $b \neq 0$, esistono e sono unici due numeri naturali $q$ e $r$ tali che
$$
a = b \cdot q + r ,
\qquad
\text{con } r < b .
$$
Il numero $q$ si chiama **quoziente** e il numero $r$ si chiama **resto**. Il resto è minore del divisore perché, se fosse uguale o maggiore, il divisore starebbe nel dividendo ancora una volta. La divisione è esatta quando il resto è $0$.

Per $17 : 5$ si ha $5 \cdot 3 = 15$ e $5 \cdot 4 = 20$. Il numero $20$ supera $17$, quindi il $5$ sta $3$ volte nel $17$ e il quoziente è $3$. Il resto è $17 - 15 = 2$, che è minore di $5$. Perciò
$$
17 = 5 \cdot 3 + 2 ,
$$
e ogni bambino riceve $3$ caramelle, mentre ne avanzano $2$.

::grafico{assi=0 uguale=1 linee="-0.4,0 18.8,0;18.5,0.18 18.8,0 18.5,-0.18;0,-0.12 0,0.12;1,-0.12 1,0.12;2,-0.12 2,0.12;3,-0.12 3,0.12;4,-0.12 4,0.12;5,-0.12 5,0.12;6,-0.12 6,0.12;7,-0.12 7,0.12;8,-0.12 8,0.12;9,-0.12 9,0.12;10,-0.12 10,0.12;11,-0.12 11,0.12;12,-0.12 12,0.12;13,-0.12 13,0.12;14,-0.12 14,0.12;15,-0.12 15,0.12;16,-0.12 16,0.12;17,-0.12 17,0.12;18,-0.12 18,0.12" punti="17,0,pieno" vettori="0,0.6,5,0.6,5;5,0.6,10,0.6,5;10,0.6,15,0.6,5" unicolore=1 segmenti="15,0.6,17,0.6" etichette="-0.17,-0.55,0;4.83,-0.55,5;9.66,-0.55,10;14.66,-0.55,15;16.66,-0.55,17;15.2,1.25,resto 2" xmin=-1 xmax=19.5 ymin=-1.1 ymax=1.8 titolo="Nel $17$ il $5$ sta $3$ volte e avanzano $2$ unità, quindi $17 = 5 \cdot 3 + 2$"}

:::

:::esempio{titolo="Una divisione con resto nella vita quotidiana"}
Un gruppo di $58$ persone deve salire su alcuni pulmini da $8$ posti. Si esegue la divisione $58 : 8$. Poiché $8 \cdot 7 = 56$ e $8 \cdot 8 = 64$, il quoziente è $7$ e il resto è $58 - 56 = 2$, quindi
$$
58 = 8 \cdot 7 + 2 .
$$
Sette pulmini si riempiono e restano $2$ persone. Per portare anche queste due persone serve un altro pulmino, perciò i pulmini necessari sono $8$. La domanda del problema dice se il risultato è il quoziente oppure il quoziente aumentato di $1$.
:::

## Proprietà delle operazioni

:::teorema{#proprieta-commutativa titolo="Proprietà commutativa"}
In un'addizione e in una moltiplicazione si può cambiare l'ordine dei termini senza cambiare il risultato. Per tutti i numeri naturali $a$ e $b$ valgono
$$
a + b = b + a ,
\qquad
a \cdot b = b \cdot a .
$$
Per esempio $3 + 4 = 4 + 3 = 7$ e $3 \cdot 4 = 4 \cdot 3 = 12$. Per la moltiplicazione basta guardare il rettangolo di quadretti per righe oppure per colonne. Visto per righe è formato da $3$ file da $4$ quadretti, e visto per colonne è formato da $4$ colonne da $3$ quadretti, quindi $3 \cdot 4$ e $4 \cdot 3$ contano gli stessi quadretti. La proprietà permette di scegliere l'ordine più comodo. Il prodotto $2 \cdot 37$ si calcola come $37 \cdot 2$, cioè $37 + 37 = 74$.
:::

:::attenzione
La sottrazione e la divisione non hanno la proprietà commutativa. Per esempio $8 - 2 = 6$, mentre $2 - 8$ non è nemmeno un numero naturale; allo stesso modo $8 : 2 = 4$, mentre $2 : 8$ non è un numero naturale.
:::

:::teorema{#proprieta-associativa titolo="Proprietà associativa"}
In un'addizione di tre o più addendi si possono sommare due addendi vicini e sostituirli con la loro somma, senza cambiare il risultato. Lo stesso vale per i fattori di una moltiplicazione. Per tutti i numeri naturali $a$, $b$, $c$ valgono
$$
(a + b) + c = a + (b + c) ,
\qquad
(a \cdot b) \cdot c = a \cdot (b \cdot c) .
$$
Insieme alla proprietà commutativa, questa proprietà permette di raggruppare i termini nel modo più comodo per il calcolo a mente. Per esempio
$$
25 \cdot 7 \cdot 4 = 7 \cdot (25 \cdot 4) = 7 \cdot 100 = 700 ,
$$
dove si è scambiato $25$ con $7$ e poi si è calcolato per primo il prodotto $25 \cdot 4 = 100$.
:::

::::teorema{#proprieta-distributiva titolo="Proprietà distributiva"}
Per moltiplicare un numero per una somma si può moltiplicare il numero per ciascun addendo e poi sommare i prodotti. Per tutti i numeri naturali $a$, $b$, $c$ vale
$$
a \cdot (b + c) = a \cdot b + a \cdot c ,
$$
e, quando $b \geq c$, vale anche $a \cdot (b - c) = a \cdot b - a \cdot c$. La moltiplicazione si dice distributiva rispetto all'addizione e alla sottrazione.

La proprietà serve a fare a mente le moltiplicazioni, scomponendo un fattore in una somma o in una differenza. Per esempio
$$
7 \cdot 23 = 7 \cdot (20 + 3) = 140 + 21 = 161 ,
\qquad
6 \cdot 98 = 6 \cdot (100 - 2) = 600 - 12 = 588 .
$$
Letta da destra a sinistra, la stessa uguaglianza permette di **raccogliere** un fattore comune, come in $17 \cdot 6 + 17 \cdot 4 = 17 \cdot (6 + 4) = 17 \cdot 10 = 170$. Nel calcolo letterale questo passaggio si chiama raccoglimento e si usa nell'argomento sulla scomposizione in fattori.

:::dimostrazione
Si giustifica la proprietà con un rettangolo di quadretti, nel caso $3 \cdot (4 + 2)$. Il rettangolo ha $3$ file, e ogni fila contiene $4 + 2 = 6$ quadretti, quindi contiene $3 \cdot 6 = 18$ quadretti.

Si divide poi il rettangolo con una linea verticale, dopo le prime $4$ colonne. La parte di sinistra ha $3$ file da $4$ quadretti, cioè $3 \cdot 4 = 12$ quadretti, e la parte di destra ha $3$ file da $2$ quadretti, cioè $3 \cdot 2 = 6$ quadretti. Le due parti insieme formano tutto il rettangolo, perciò i quadretti sono anche $12 + 6 = 18$.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,3 0,3" linee="0,0 6,0 6,3 0,3 0,0;1,0 1,3;2,0 2,3;3,0 3,3;4,0 4,3;5,0 5,3;0,1 6,1;0,2 6,2;4,-0.3 4,3.3" etichette="1.2,3.4,3 · 4;4.5,3.4,3 · 2" xmin=-0.5 xmax=6.5 ymin=-0.6 ymax=4.1 titolo="Il rettangolo di $3$ file da $4 + 2$ quadretti contiene $3 \cdot 4 + 3 \cdot 2 = 12 + 6 = 18$ quadretti, quindi $3 \cdot (4 + 2) = 3 \cdot 4 + 3 \cdot 2$"}

I due conteggi riguardano gli stessi quadretti, quindi $3 \cdot (4 + 2) = 3 \cdot 4 + 3 \cdot 2$. Lo stesso ragionamento vale per un rettangolo di $a$ file da $b + c$ quadretti, con qualsiasi numero di file e di colonne.
:::
::::

:::teorema{#elemento-neutro titolo="Elemento neutro"}
Il numero $0$ è l'**elemento neutro** dell'addizione e il numero $1$ è l'elemento neutro della moltiplicazione. Questo vuol dire che, per ogni numero naturale $a$,
$$
a + 0 = a ,
\qquad
a \cdot 1 = a .
$$
Aggiungere zero oggetti non cambia la quantità, e prendere un solo gruppo di $a$ oggetti dà $a$ oggetti. Per esempio $45 + 0 = 45$ e $45 \cdot 1 = 45$. Valgono anche $a - 0 = a$ e $a : 1 = a$, come in $45 - 0 = 45$ e $45 : 1 = 45$.
:::

:::teorema{#zero-moltiplicazione-divisione titolo="Lo zero nella moltiplicazione e nella divisione"}
- Per ogni numero naturale $a$ vale $a \cdot 0 = 0$, perché $a$ gruppi da zero oggetti non contengono alcun oggetto. Per esempio $8 \cdot 0 = 0$.
- Per ogni numero naturale $a \neq 0$ vale $0 : a = 0$, perché $0 \cdot a = 0$. Se $0$ caramelle si dividono tra $5$ bambini, ognuno riceve $0$ caramelle.
- La divisione $a : 0$ non si può eseguire. Se $a \neq 0$, nessun numero moltiplicato per $0$ dà $a$, perché ogni numero moltiplicato per $0$ dà $0$; per esempio $5 : 0$ non ha risultato. Se $a = 0$, ogni numero moltiplicato per $0$ dà $0$, quindi il quoziente $0 : 0$ non è un numero determinato.

Dalla prima regola segue la **legge di annullamento del prodotto**. Un prodotto vale $0$ se uno dei fattori è $0$, e un prodotto di fattori tutti diversi da $0$ è diverso da $0$. Per esempio $37 \cdot 0 \cdot 12 = 0$, senza bisogno di altri calcoli. Questa legge si usa nell'argomento sulle equazioni.
:::

## Potenze

:::definizione{#potenza titolo="Potenza"}
Una **potenza** è una moltiplicazione di fattori tutti uguali, scritta in forma breve. Se $a$ e $n$ sono numeri naturali, con $n \geq 2$, la potenza $a^n$ è il prodotto di $n$ fattori uguali ad $a$:
$$
a^n = \underbrace{a \cdot a \cdot \ldots \cdot a}_{n \text{ fattori}} .
$$
Il numero $a$ si chiama **base** e il numero $n$, scritto in alto e più piccolo, si chiama **esponente**. L'esponente indica quante volte la base compare come fattore. Si pone inoltre $a^1 = a$. Per esempio
$$
2^3 = 2 \cdot 2 \cdot 2 = 8 ,
\qquad
5^2 = 5 \cdot 5 = 25 ,
\qquad
3^4 = 3 \cdot 3 \cdot 3 \cdot 3 = 81 .
$$
La potenza $2^3$ si legge "due alla terza". Una potenza con esponente $2$ si chiama anche **quadrato** e una potenza con esponente $3$ si chiama **cubo**, perché $a^2$ conta i quadretti di un quadrato con $a$ quadretti per lato e $a^3$ conta i cubetti di un cubo con $a$ cubetti per spigolo.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;5,0 9,0 9,4 5,4" linee="0,0 3,0 3,3 0,3 0,0;1,0 1,3;2,0 2,3;0,1 3,1;0,2 3,2;5,0 9,0 9,4 5,4 5,0;6,0 6,4;7,0 7,4;8,0 8,4;5,1 9,1;5,2 9,2;5,3 9,3" etichette="0.6,-0.7,3² = 9;6.1,-0.7,4² = 16" xmin=-0.5 xmax=9.5 ymin=-1.3 ymax=4.4 titolo="Un quadrato con $3$ quadretti per lato ne contiene $3^2 = 9$, uno con $4$ quadretti per lato ne contiene $4^2 = 16$"}

Le proprietà delle potenze, l'esponente $0$ e gli esponenti negativi si studiano nell'argomento sulle potenze e radici.
:::

:::esempio{titolo="Potenze di 10, di 1 e di 0"}
- Una potenza di $10$ si scrive con la cifra $1$ seguita da tanti zeri quanti indica l'esponente. Per esempio $10^2 = 10 \cdot 10 = 100$ e $10^4 = 10 \cdot 10 \cdot 10 \cdot 10 = 10\,000$.
- Ogni potenza di base $1$ vale $1$, perché $1 \cdot 1 = 1$; per esempio $1^7 = 1$.
- Ogni potenza di base $0$ e con esponente almeno $1$ vale $0$, perché un prodotto con un fattore $0$ vale $0$; per esempio $0^3 = 0$.

Con le potenze di $10$ si scrive in modo compatto il valore delle cifre di un numero. Per esempio $4\,256 = 4 \cdot 10^3 + 2 \cdot 10^2 + 5 \cdot 10 + 6$.
:::

:::attenzione
L'esponente non è un fattore. La potenza $2^3$ vale $2 \cdot 2 \cdot 2 = 8$, mentre $2 \cdot 3 = 6$. Allo stesso modo $5^2 = 25$ è diverso da $5 \cdot 2 = 10$.
:::

## Ordine delle operazioni

:::definizione{#espressione titolo="Espressione numerica"}
Un'**espressione numerica** è una sequenza di numeri legati dai segni delle operazioni, come $20 - 2 \cdot 3^2 + 8 : 4$. **Calcolare** l'espressione, oppure trovarne il **valore**, vuol dire eseguire tutte le operazioni fino a ottenere un solo numero. Per esempio l'espressione $3 + 5$ ha valore $8$.
:::

:::teorema{#ordine-delle-operazioni titolo="Ordine delle operazioni"}
In un'espressione senza parentesi le operazioni si eseguono in questo ordine:

1. le potenze;
2. le moltiplicazioni e le divisioni, nell'ordine in cui compaiono da sinistra a destra;
3. le addizioni e le sottrazioni, nell'ordine in cui compaiono da sinistra a destra.

La regola è una convenzione. Tutti la usano, e quindi ogni espressione ha un solo valore, lo stesso per chiunque la calcoli. Per esempio, nell'espressione $3 + 5 \cdot 2$ si esegue prima la moltiplicazione $5 \cdot 2 = 10$ e poi l'addizione, perciò il valore è $3 + 10 = 13$. Nell'espressione che segue si calcola prima la potenza $3^2 = 9$, poi la moltiplicazione $2 \cdot 9 = 18$ e la divisione $8 : 4 = 2$, e infine la sottrazione e l'addizione da sinistra a destra:
$$
\begin{aligned}
20 - 2 \cdot 3^2 + 8 : 4
&= 20 - 2 \cdot 9 + 8 : 4 \\[6pt]
&= 20 - 18 + 2 \\[6pt]
&= 2 + 2 = 4 .
\end{aligned}
$$
:::

:::attenzione
Le operazioni dello stesso livello si eseguono da sinistra a destra, anche quando la seconda sembra più comoda. Per esempio $24 : 4 \cdot 2 = 6 \cdot 2 = 12$; eseguendo per prima la moltiplicazione $4 \cdot 2 = 8$ si otterrebbe $24 : 8 = 3$, che è un valore sbagliato. Allo stesso modo $10 - 4 + 3 = 6 + 3 = 9$, mentre eseguendo prima l'addizione si otterrebbe $10 - 7 = 3$.
:::

## Espressioni con le parentesi

:::teorema{#espressioni-con-parentesi titolo="Espressioni con le parentesi"}
Le **parentesi** indicano le operazioni da eseguire per prime. Si usano tre tipi di parentesi: le tonde $(\ )$, le quadre $[\ ]$ e le graffe $\{\ \}$. Le tonde stanno all'interno delle quadre, e le quadre all'interno delle graffe. Un'espressione con le parentesi si calcola così:

1. si calcolano le espressioni contenute nelle parentesi tonde;
2. si calcolano le espressioni contenute nelle parentesi quadre, che a quel punto non contengono più parentesi tonde;
3. si calcolano le espressioni contenute nelle parentesi graffe;
4. si calcola l'espressione rimasta.

Dentro ogni parentesi si segue l'ordine delle operazioni. Quando un'espressione tra parentesi si riduce a un solo numero, le parentesi si tolgono. Per esempio $(3 + 5) \cdot 2 = 8 \cdot 2 = 16$, mentre senza parentesi $3 + 5 \cdot 2 = 13$; le parentesi cambiano quindi il valore dell'espressione.
:::

:::esempio{titolo="Un'espressione con tonde, quadre e graffe"}
Si calcola
$$
\{ 30 - [ 2 \cdot (7 - 3) + 6 ] : 7 \} \cdot 2 .
$$
Si parte dall'espressione tonda $7 - 3 = 4$. Nell'espressione quadra si esegue prima la moltiplicazione $2 \cdot 4 = 8$ e poi l'addizione $8 + 6 = 14$. Nell'espressione graffa si esegue prima la divisione $14 : 7 = 2$ e poi la sottrazione $30 - 2 = 28$. Infine si moltiplica per $2$:
$$
\begin{aligned}
\{ 30 - [ 2 \cdot (7 - 3) + 6 ] : 7 \} \cdot 2
&= \{ 30 - [ 2 \cdot 4 + 6 ] : 7 \} \cdot 2 \\[6pt]
&= \{ 30 - 14 : 7 \} \cdot 2 \\[6pt]
&= \{ 30 - 2 \} \cdot 2 \\[6pt]
&= 28 \cdot 2 = 56 .
\end{aligned}
$$
:::

:::esempio{titolo="Un'espressione che descrive una spesa"}
Al supermercato si comprano $3$ quaderni da $2$ euro e $2$ penne da $1$ euro, e si paga con una banconota da $20$ euro. La spesa è $3 \cdot 2 + 2 \cdot 1$ euro, e il resto è la differenza tra $20$ euro e la spesa. Poiché la spesa va sottratta tutta insieme, la si scrive tra parentesi:
$$
20 - (3 \cdot 2 + 2 \cdot 1) = 20 - (6 + 2) = 20 - 8 = 12 .
$$
Il resto è quindi di $12$ euro. Senza parentesi l'espressione $20 - 3 \cdot 2 + 2 \cdot 1$ vale $20 - 6 + 2 = 16$, perché le penne verrebbero sommate al resto invece di essere sottratte.
:::

:::osservazione{#proprieta-ed-espressioni titolo="Le proprietà nel calcolo delle espressioni"}
Le proprietà delle operazioni permettono a volte di calcolare un'espressione con meno fatica, e il risultato è lo stesso che si ottiene con l'ordine delle operazioni. Per esempio, nell'espressione $4 \cdot (25 + 3)$ si può calcolare prima l'espressione tonda, $4 \cdot 28 = 112$, oppure si può applicare la proprietà distributiva, $4 \cdot 25 + 4 \cdot 3 = 100 + 12 = 112$. Nell'espressione $36 + 58 + 64$ la proprietà commutativa e la proprietà associativa permettono di sommare per primi $36$ e $64$, che danno $100$, e poi $100 + 58 = 158$.
:::
