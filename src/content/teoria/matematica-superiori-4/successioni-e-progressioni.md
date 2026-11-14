---
titolo: Successioni e progressioni
sommario: Che cos'è una successione numerica e come si assegna con il termine generale o per ricorrenza, quando è monotona o limitata, come funziona il principio di induzione, quali sono le formule del termine generale, della somma e del prodotto per le progressioni aritmetiche e geometriche, e come si usano nei problemi di interesse, di rate e di geometria, fino alla somma di una progressione geometrica di ragione minore di 1 in valore assoluto.
---

## Successioni numeriche

:::definizione{#successione titolo="Successione numerica"}
Una **successione** numerica è una legge che associa a ogni numero naturale $n$, a partire da un indice iniziale, un numero reale $a_n$. Il numero $n$ si chiama *indice* e indica la posizione; il numero $a_n$ si chiama **termine** di posto $n$, o termine $n$-esimo, ed è il valore che occupa quella posizione. La successione si indica con $(a_n)$ oppure elencando i termini in ordine, $a_1, a_2, a_3, \ldots$ In questo argomento l'indice parte da $1$, salvo quando un problema dice diversamente.

Una successione è quindi una funzione che ha per dominio i numeri naturali. Per esempio la successione dei numeri dispari associa a $1$ il numero $1$, a $2$ il numero $3$, a $3$ il numero $5$, e così via. Il termine di posto $10$ è $19$.
:::

:::definizione{#termine-generale titolo="Termine generale"}
Una successione è assegnata con il **termine generale** quando si conosce una formula che dà $a_n$ in funzione di $n$. Con questa formula ogni termine si calcola direttamente, sostituendo a $n$ il numero della posizione, senza conoscere i termini precedenti.

Per la successione dei dispari il termine generale è $a_n = 2n - 1$, e il termine di posto $50$ è $a_{50} = 2 \cdot 50 - 1 = 99$. Per $a_n = \dfrac{n}{n + 1}$ i primi termini sono
$$
a_1 = \frac{1}{2}, \qquad a_2 = \frac{2}{3}, \qquad a_3 = \frac{3}{4}, \qquad a_4 = \frac{4}{5} ,
$$
e il termine di posto $99$ è $a_{99} = \dfrac{99}{100}$.
:::

:::definizione{#successione-ricorsiva titolo="Successione definita per ricorrenza"}
Una successione è definita **per ricorrenza**, o in modo ricorsivo, quando si assegnano il primo termine, o i primi termini, e una regola che calcola ogni termine a partire da quelli che lo precedono. Per conoscere $a_{10}$ si devono calcolare, uno dopo l'altro, tutti i termini da $a_1$ a $a_9$.

Per esempio la successione
$$
\begin{cases}
a_1 = 3 \\[4pt]
a_{n+1} = 2a_n - 1
\end{cases}
$$
ha i termini $a_2 = 2 \cdot 3 - 1 = 5$, $a_3 = 2 \cdot 5 - 1 = 9$, $a_4 = 2 \cdot 9 - 1 = 17$. Le due condizioni del sistema servono insieme, perché la regola da sola non dice da quale numero partire. In questo caso si riconosce che ogni termine supera di $1$ una potenza di $2$, e si ottiene il termine generale $a_n = 2^n + 1$; la sua verifica per ogni $n$ si fa con il principio di induzione.
:::

:::esempio{titolo="La successione di Fibonacci"}
La successione di **Fibonacci** è definita assegnando i primi due termini e una regola che usa i due termini precedenti:
$$
\begin{cases}
F_1 = 1 \\[4pt]
F_2 = 1 \\[4pt]
F_{n+2} = F_{n+1} + F_n
\end{cases}
$$
Ogni termine è quindi la somma dei due che lo precedono. I primi termini sono $1, 1, 2, 3, 5, 8, 13, 21, 34$; per esempio $F_7 = F_6 + F_5 = 8 + 5 = 13$. Per questa successione esiste una formula del termine generale, che contiene $\sqrt{5}$ e si studia nei corsi universitari; i termini si calcolano più rapidamente con la ricorrenza.
:::

:::definizione{#grafico-successione titolo="Rappresentazione grafica di una successione"}
Il **grafico** di una successione è l'insieme dei punti del piano cartesiano di coordinate $(n, a_n)$. Gli indici sono numeri naturali, perciò il grafico è formato da punti isolati, uno sopra ogni ascissa intera, e i punti *non* si collegano con una linea. Il grafico permette di vedere subito se i termini aumentano, diminuiscono o oscillano, e se si avvicinano a un valore.

Per $a_n = \dfrac{n}{n + 1}$ i punti sono $\left( 1, \dfrac{1}{2} \right)$, $\left( 2, \dfrac{2}{3} \right)$, $\left( 3, \dfrac{3}{4} \right)$, e così via. I termini aumentano e restano minori di $1$, perché il numeratore è sempre minore del denominatore.

::grafico{punti="1,0.5,pieno;2,0.6667,pieno;3,0.75,pieno;4,0.8,pieno;5,0.8333,pieno;6,0.8571,pieno;7,0.875,pieno;8,0.8889,pieno;9,0.9,pieno" asintoti="y=1" xmin=0 xmax=10 ymin=0 ymax=1.3 nomi="n,a" titolo="I primi nove termini di $a_n = \dfrac{n}{n + 1}$: i punti sono isolati, salgono e restano sotto la retta $y = 1$"}

:::

## Successioni monotone e limitate

:::definizione{#successione-monotona titolo="Successione monotona"}
Una successione $(a_n)$ si dice

- **crescente** se $a_{n+1} \geq a_n$ per ogni $n$, *strettamente* crescente se $a_{n+1} > a_n$ per ogni $n$;
- **decrescente** se $a_{n+1} \leq a_n$ per ogni $n$, *strettamente* decrescente se $a_{n+1} < a_n$ per ogni $n$;
- **costante** se $a_{n+1} = a_n$ per ogni $n$.

Una successione crescente o decrescente si dice **monotona**. Per stabilire se una successione è monotona si studia il segno della differenza $a_{n+1} - a_n$ tra un termine e il precedente. Per $a_n = \dfrac{n}{n + 1}$ si ha
$$
a_{n+1} - a_n = \frac{n + 1}{n + 2} - \frac{n}{n + 1} = \frac{(n + 1)^2 - n(n + 2)}{(n + 1)(n + 2)} = \frac{1}{(n + 1)(n + 2)} .
$$
Il numeratore è $1$ e il denominatore è positivo, quindi la differenza è positiva per ogni $n$ e la successione è **strettamente crescente**.
:::

:::definizione{#successione-limitata titolo="Successione limitata"}
Una successione $(a_n)$ si dice **limitata superiormente** se esiste un numero $M$ tale che $a_n \leq M$ per ogni $n$, e **limitata inferiormente** se esiste un numero $m$ tale che $a_n \geq m$ per ogni $n$. Si dice **limitata** se è limitata sia superiormente sia inferiormente, cioè se tutti i suoi termini stanno in un intervallo $[m, M]$.

Per esempio la successione $a_n = \dfrac{2n + 3}{n + 1}$ si scrive $a_n = 2 + \dfrac{1}{n + 1}$, dividendo il numeratore per il denominatore. La frazione $\dfrac{1}{n + 1}$ è positiva e vale al massimo $\dfrac{1}{2}$, che si ottiene per $n = 1$. Perciò $2 < a_n \leq \dfrac{5}{2}$ per ogni $n$, e la successione è limitata. La successione $a_n = n^2$ è limitata inferiormente da $1$ e non è limitata superiormente, perché supera qualunque numero assegnato; per esempio $a_n > 10^6$ per ogni $n > 1000$.
:::

:::esempio{titolo="Una successione limitata e non monotona"}
La successione $a_n = \dfrac{(-1)^n}{n}$ ha i termini
$$
-1, \quad \frac{1}{2}, \quad -\frac{1}{3}, \quad \frac{1}{4}, \quad -\frac{1}{5}, \quad \ldots
$$
I termini di posto dispari sono negativi e quelli di posto pari sono positivi, quindi la differenza $a_{n+1} - a_n$ cambia segno a ogni passo e la successione *non* è monotona. Il valore assoluto di ogni termine è $\dfrac{1}{n} \leq 1$; inoltre il termine positivo più grande è $a_2 = \dfrac{1}{2}$ e il termine negativo più piccolo è $a_1 = -1$. Perciò $-1 \leq a_n \leq \dfrac{1}{2}$ per ogni $n$, e la successione è **limitata**.

::grafico{punti="1,-1,pieno;2,0.5,pieno;3,-0.3333,pieno;4,0.25,pieno;5,-0.2,pieno;6,0.1667,pieno;7,-0.1429,pieno;8,0.125,pieno;9,-0.1111,pieno" segmenti="0,0.5,10,0.5;0,-1,10,-1" xmin=0 xmax=10 ymin=-1.3 ymax=1 nomi="n,a" titolo="I termini di $a_n = \dfrac{(-1)^n}{n}$ cambiano segno a ogni passo e restano tra $-1$ e $\dfrac{1}{2}$"}

:::

:::osservazione{#monotonia-definitiva titolo="Successioni monotone da un certo indice in poi"}
Il segno di $a_{n+1} - a_n$ può cambiare per i primi indici e poi restare costante. Si dice allora che la successione è monotona *da un certo indice in poi*, oppure **definitivamente** monotona. Per $a_n = n^2 - 6n$ si ha
$$
a_{n+1} - a_n = (n + 1)^2 - 6(n + 1) - n^2 + 6n = 2n - 5 ,
$$
che è negativa per $n = 1$ e $n = 2$ e positiva per $n \geq 3$. I termini sono infatti $-5, -8, -9, -8, -5, 0, 7, \ldots$, quindi la successione decresce fino a $a_3 = -9$ e poi cresce. Il termine $a_3 = -9$ è il **minimo** della successione, quindi la successione è limitata inferiormente da $-9$. Quando si studia che cosa accade per $n$ grande, come nell'argomento sui limiti del quinto anno, i valori dei primi termini non contano.
:::

## Principio di induzione

:::teorema{#principio-induzione titolo="Principio di induzione"}
Sia $P(n)$ un'affermazione che dipende dal numero naturale $n$. Se valgono le due condizioni

- **passo base**: $P(1)$ è vera;
- **passo induttivo**: per ogni $n \geq 1$, se $P(n)$ è vera, allora anche $P(n + 1)$ è vera;

allora $P(n)$ è vera per *ogni* $n \geq 1$. Se il passo base riguarda un altro indice $n_0$, la conclusione vale per ogni $n \geq n_0$.

L'idea è quella di una fila di tessere del domino. La prima cade, per il passo base; ogni tessera che cade fa cadere la successiva, per il passo induttivo; perciò cadono tutte. Il principio è una proprietà dei numeri naturali che si assume come assioma, e serve per dimostrare formule che contengono $n$ senza verificarle infinite volte. Nel passo induttivo l'affermazione $P(n)$ si chiama **ipotesi induttiva** e si usa per ricavare $P(n + 1)$.
:::

::::teorema{#somma-primi-naturali titolo="Somma dei primi n numeri naturali"}
Per ogni $n \geq 1$ vale
$$
1 + 2 + 3 + \dots + n = \frac{n(n + 1)}{2} .
$$
Per esempio la somma dei numeri da $1$ a $100$ è $\dfrac{100 \cdot 101}{2} = 5050$, e la somma dei numeri da $1$ a $10$ è $\dfrac{10 \cdot 11}{2} = 55$.

:::dimostrazione
Si dimostra la formula per induzione su $n$.

*Passo base.* Per $n = 1$ il primo membro è $1$ e il secondo membro è $\dfrac{1 \cdot 2}{2} = 1$, quindi la formula vale.

*Passo induttivo.* Si suppone che la formula valga per un certo $n$, cioè che $1 + 2 + \dots + n = \dfrac{n(n + 1)}{2}$. La somma fino a $n + 1$ si ottiene aggiungendo $n + 1$ alla somma fino a $n$, perciò, per l'ipotesi induttiva,
$$
\begin{aligned}
1 + 2 + \dots + n + (n + 1) &= \frac{n(n + 1)}{2} + (n + 1) \\[6pt]
&= \frac{n(n + 1) + 2(n + 1)}{2} \\[6pt]
&= \frac{(n + 1)(n + 2)}{2} .
\end{aligned}
$$
L'ultima espressione è la formula scritta con $n + 1$ al posto di $n$, quindi la formula vale anche per $n + 1$. Per il principio di induzione la formula vale per ogni $n \geq 1$.
:::
::::

::::teorema{#somma-quadrati titolo="Somma dei quadrati dei primi n numeri naturali"}
Per ogni $n \geq 1$ vale
$$
1^2 + 2^2 + 3^2 + \dots + n^2 = \frac{n(n + 1)(2n + 1)}{6} .
$$
Per esempio $1 + 4 + 9 + 16 = 30$, e la formula con $n = 4$ dà $\dfrac{4 \cdot 5 \cdot 9}{6} = 30$. La somma dei quadrati da $1$ a $10$ è $\dfrac{10 \cdot 11 \cdot 21}{6} = 385$.

:::dimostrazione
Si procede per induzione su $n$. Per $n = 1$ il primo membro è $1$ e il secondo è $\dfrac{1 \cdot 2 \cdot 3}{6} = 1$, quindi il passo base è verificato.

Si suppone che la formula valga per $n$. Si aggiunge $(n + 1)^2$ ai due membri dell'ipotesi induttiva e si raccoglie il fattore $n + 1$, ottenendo
$$
\begin{aligned}
1^2 + \dots + n^2 + (n + 1)^2 &= \frac{n(n + 1)(2n + 1)}{6} + (n + 1)^2 \\[6pt]
&= \frac{(n + 1)\big( n(2n + 1) + 6(n + 1) \big)}{6} \\[6pt]
&= \frac{(n + 1)\left( 2n^2 + 7n + 6 \right)}{6} .
\end{aligned}
$$
Il trinomio $2n^2 + 7n + 6$ si scompone in $(n + 2)(2n + 3)$, come si controlla moltiplicando. Quindi la somma vale $\dfrac{(n + 1)(n + 2)(2n + 3)}{6}$, che è la formula con $n + 1$ al posto di $n$, perché $2(n + 1) + 1 = 2n + 3$. Per il principio di induzione la formula vale per ogni $n \geq 1$.
:::
::::

::::teorema{#disuguaglianza-bernoulli titolo="Disuguaglianza di Bernoulli"}
Sia $x$ un numero reale con $x \geq -1$. Per ogni $n \geq 1$ vale
$$
(1 + x)^n \geq 1 + nx .
$$
La disuguaglianza dà una stima dal basso delle potenze. Per esempio con $x = 0{,}1$ e $n = 10$ si ottiene $1{,}1^{10} \geq 1 + 10 \cdot 0{,}1 = 2$; il valore esatto è circa $2{,}59$. Questa stima servirà per studiare le potenze $q^n$ quando $n$ diventa grande.

:::dimostrazione
Si procede per induzione su $n$. Per $n = 1$ i due membri sono entrambi $1 + x$, quindi la disuguaglianza vale.

Si suppone $(1 + x)^n \geq 1 + nx$. L'idea è moltiplicare i due membri per $1 + x$. Poiché $x \geq -1$, il numero $1 + x$ è maggiore o uguale a $0$, quindi la moltiplicazione conserva il verso della disuguaglianza:
$$
\begin{aligned}
(1 + x)^{n+1} &\geq (1 + nx)(1 + x) \\[6pt]
&= 1 + x + nx + nx^2 \\[6pt]
&= 1 + (n + 1)x + nx^2 .
\end{aligned}
$$
Il termine $nx^2$ è maggiore o uguale a $0$, perciò l'ultima espressione è maggiore o uguale a $1 + (n + 1)x$. Quindi $(1 + x)^{n+1} \geq 1 + (n + 1)x$, che è la disuguaglianza per $n + 1$. Per il principio di induzione la disuguaglianza vale per ogni $n \geq 1$.
:::
::::

:::attenzione
Il passo induttivo da solo *non* basta. L'affermazione "$n^2 + n + 1$ è un numero pari" soddisfa il passo induttivo, perché
$$
(n + 1)^2 + (n + 1) + 1 = \left( n^2 + n + 1 \right) + 2(n + 1) ,
$$
e la somma di un numero pari con $2(n + 1)$ è pari. Il passo base invece non è verificato, perché per $n = 1$ si ottiene $3$, che è dispari. Infatti $n^2 + n + 1 = n(n + 1) + 1$ è sempre dispari, dato che $n(n + 1)$ è il prodotto di due numeri consecutivi ed è quindi pari.
:::

## Progressioni aritmetiche

:::definizione{#progressione-aritmetica titolo="Progressione aritmetica"}
Una **progressione aritmetica** è una successione in cui la differenza tra ogni termine e il precedente è sempre la stessa. Questa differenza costante si chiama **ragione** e si indica con $d$:
$$
a_{n+1} - a_n = d \qquad \text{per ogni } n \geq 1 .
$$
Ogni termine si ottiene quindi dal precedente aggiungendo $d$. Per esempio $2, 5, 8, 11, 14, \ldots$ è una progressione aritmetica di ragione $d = 3$, e $20, 15, 10, 5, 0, -5, \ldots$ è una progressione aritmetica di ragione $d = -5$. La successione $1, 4, 9, 16$ dei quadrati non è una progressione aritmetica, perché le differenze $3, 5, 7$ non sono uguali.

Dalla definizione segue che una progressione aritmetica è strettamente crescente se $d > 0$, strettamente decrescente se $d < 0$ e costante se $d = 0$, perché $a_{n+1} - a_n = d$ ha il segno di $d$.
:::

::::teorema{#termine-generale-aritmetica titolo="Termine generale di una progressione aritmetica"}
In una progressione aritmetica di primo termine $a_1$ e ragione $d$ vale, per ogni $n \geq 1$,
$$
a_n = a_1 + (n - 1)\,d .
$$
Più in generale, per due indici qualsiasi $n$ e $k$ vale $a_n = a_k + (n - k)\,d$. La formula dice che per passare dal primo termine al termine di posto $n$ si aggiunge $d$ per $n - 1$ volte. Nella progressione $2, 5, 8, \ldots$ si ha $a_{20} = 2 + 19 \cdot 3 = 59$, e il termine generale è $a_n = 2 + 3(n - 1) = 3n - 1$.

:::dimostrazione
Si dimostra la prima formula per induzione su $n$. Per $n = 1$ il secondo membro è $a_1 + 0 \cdot d = a_1$, quindi la formula vale.

Si suppone $a_n = a_1 + (n - 1)\,d$. Per la definizione di progressione aritmetica $a_{n+1} = a_n + d$, quindi, per l'ipotesi induttiva,
$$
a_{n+1} = a_1 + (n - 1)\,d + d = a_1 + n\,d ,
$$
che è la formula per $n + 1$. Per il principio di induzione la formula vale per ogni $n$.

Per la seconda formula si scrivono $a_n = a_1 + (n - 1)\,d$ e $a_k = a_1 + (k - 1)\,d$ e si sottrae. Si ottiene $a_n - a_k = (n - k)\,d$, cioè $a_n = a_k + (n - k)\,d$.
:::
::::

:::esempio{titolo="Grafico di una progressione aritmetica"}
Nella progressione $a_n = 3n - 1$ i punti del grafico $(n, a_n)$ stanno sulla retta $y = 3x - 1$, che ha coefficiente angolare uguale alla ragione $d = 3$. Questo accade per ogni progressione aritmetica, perché $a_n = a_1 + (n - 1)\,d = d\,n + (a_1 - d)$ è un'espressione di primo grado in $n$. Il grafico è quindi formato da punti allineati, e a ogni passo verso destra l'ordinata aumenta di $d$.

::grafico{f="3*x-1" punti="1,2,pieno;2,5,pieno;3,8,pieno;4,11,pieno;5,14,pieno;6,17,pieno" segmenti="1,2,2,2;2,2,2,5" etichette="2.25,3.3,d = 3" xmin=0 xmax=7 ymin=-2 ymax=20 nomi="n,a" legenda="y = 3x - 1" titolo="I termini della progressione aritmetica $a_n = 3n - 1$ stanno sulla retta $y = 3x - 1$; a ogni passo l'ordinata aumenta della ragione $d = 3$"}

:::

:::esempio{titolo="Progressione assegnata con due termini"}
In una progressione aritmetica $a_5 = 17$ e $a_{12} = 38$. Per la formula $a_n = a_k + (n - k)\,d$ con $n = 12$ e $k = 5$ si ha
$$
38 = 17 + 7d ,
\qquad
\text{quindi}
\qquad
d = \frac{38 - 17}{7} = 3 .
$$
Il primo termine si ricava da $a_5 = a_1 + 4d$, cioè $17 = a_1 + 12$, quindi $a_1 = 5$ e il termine generale è $a_n = 5 + 3(n - 1) = 3n + 2$. Il denominatore $7$ è il numero di passi che separano il quinto termine dal dodicesimo.
:::

:::teorema{#termini-equidistanti-aritmetica titolo="Termini equidistanti dagli estremi"}
Nei primi $n$ termini di una progressione aritmetica, la somma di due termini equidistanti dagli estremi è uguale alla somma degli estremi:
$$
a_k + a_{n-k+1} = a_1 + a_n \qquad \text{per } 1 \leq k \leq n .
$$
I termini $a_k$ e $a_{n-k+1}$ si dicono equidistanti dagli estremi perché il primo ha $k - 1$ termini prima di sé e il secondo ha $k - 1$ termini dopo di sé. La proprietà segue dal termine generale, perché $a_k + a_{n-k+1} = a_1 + (k - 1)\,d + a_1 + (n - k)\,d = 2a_1 + (n - 1)\,d = a_1 + a_n$. Per esempio nei termini $2, 5, 8, 11, 14, 17$ si ha $2 + 17 = 5 + 14 = 8 + 11 = 19$.
:::

::::teorema{#somma-aritmetica titolo="Somma dei primi n termini di una progressione aritmetica"}
La somma $S_n = a_1 + a_2 + \dots + a_n$ dei primi $n$ termini di una progressione aritmetica è
$$
S_n = \frac{n\,(a_1 + a_n)}{2} = \frac{n\,\big( 2a_1 + (n - 1)\,d \big)}{2} .
$$
La prima forma si usa quando si conoscono il primo e l'ultimo termine, la seconda quando si conoscono il primo termine e la ragione. Per la progressione $2, 5, 8, \ldots, 59$, che ha $20$ termini, la somma è $S_{20} = \dfrac{20 \cdot (2 + 59)}{2} = 610$.

:::dimostrazione
L'idea è scrivere la somma due volte, la seconda in ordine inverso, e sommare in colonna:
$$
\begin{aligned}
S_n &= a_1 + a_2 + \dots + a_{n-1} + a_n \\[6pt]
S_n &= a_n + a_{n-1} + \dots + a_2 + a_1 .
\end{aligned}
$$
In ogni colonna compaiono due termini equidistanti dagli estremi, e per il teorema precedente la loro somma è $a_1 + a_n$. Le colonne sono $n$, quindi sommando le due righe si ottiene
$$
2S_n = n\,(a_1 + a_n) ,
\qquad
\text{cioè}
\qquad
S_n = \frac{n\,(a_1 + a_n)}{2} .
$$
La seconda forma si ottiene sostituendo $a_n = a_1 + (n - 1)\,d$.
:::

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1;1,0 2,0 2,2 1,2;2,0 3,0 3,3 2,3;3,0 4,0 4,4 3,4;4,0 5,0 5,5 4,5" linee="0,0 5,0 5,6 0,6 0,0;0,1 1,1 1,2 2,2 2,3 3,3 3,4 4,4 4,5 5,5" etichette="2.5,-0.5,n = 5;5.7,3,a₁ + aₙ = 6" xmin=-1 xmax=7 ymin=-1 ymax=7 titolo="Due copie della somma $1 + 2 + 3 + 4 + 5$, una delle quali capovolta, formano un rettangolo $5 \times 6$; quindi $2S_5 = 30$ e $S_5 = 15$"}

::::

:::teorema{#media-aritmetica titolo="Media aritmetica e inserimento di termini"}
Tre numeri $a$, $b$, $c$ sono termini consecutivi di una progressione aritmetica se e *solo se* il termine centrale è la media aritmetica degli altri due:
$$
b = \frac{a + c}{2} .
$$
Infatti le due differenze $b - a$ e $c - b$ sono uguali se e solo se $2b = a + c$. Per esempio tra $4$ e $10$ si inserisce il numero $\dfrac{4 + 10}{2} = 7$, e $4, 7, 10$ è una progressione aritmetica di ragione $3$.

Più in generale, per inserire $k$ numeri tra $A$ e $B$ in modo che $A$, i $k$ numeri e $B$ formino una progressione aritmetica, si considera che $B$ è il termine di posto $k + 2$. Dalla formula del termine generale $B = A + (k + 1)\,d$, quindi
$$
d = \frac{B - A}{k + 1} .
$$
Per inserire tre numeri tra $2$ e $18$ si ha $d = \dfrac{18 - 2}{4} = 4$, e la progressione è $2, 6, 10, 14, 18$. I numeri inseriti si chiamano **medi aritmetici** tra $A$ e $B$.
:::

## Progressioni geometriche

:::definizione{#progressione-geometrica titolo="Progressione geometrica"}
Una **progressione geometrica** è una successione di numeri diversi da $0$ in cui il quoziente tra ogni termine e il precedente è sempre lo stesso. Questo quoziente costante si chiama **ragione** e si indica con $q$:
$$
\frac{a_{n+1}}{a_n} = q \qquad \text{per ogni } n \geq 1 .
$$
Ogni termine si ottiene quindi dal precedente moltiplicando per $q$, e la ragione $q$ è diversa da $0$. Per esempio $3, 6, 12, 24, \ldots$ è una progressione geometrica di ragione $q = 2$, e $81, 27, 9, 3, 1, \ldots$ è una progressione geometrica di ragione $q = \dfrac{1}{3}$. La successione $1, 2, 4, 7$ non è una progressione geometrica, perché i quozienti $2$, $2$ e $\dfrac{7}{4}$ non sono tutti uguali.
:::

::::teorema{#termine-generale-geometrica titolo="Termine generale di una progressione geometrica"}
In una progressione geometrica di primo termine $a_1$ e ragione $q$ vale, per ogni $n \geq 1$,
$$
a_n = a_1 \cdot q^{n-1} .
$$
Più in generale, per due indici qualsiasi $n$ e $k$ vale $a_n = a_k \cdot q^{n-k}$. Per passare dal primo termine al termine di posto $n$ si moltiplica per $q$ per $n - 1$ volte. Nella progressione $3, 6, 12, \ldots$ si ha $a_8 = 3 \cdot 2^7 = 384$.

:::dimostrazione
Si procede per induzione su $n$. Per $n = 1$ il secondo membro è $a_1 \cdot q^0 = a_1$, quindi la formula vale. Si suppone $a_n = a_1 q^{n-1}$. Per la definizione di progressione geometrica $a_{n+1} = a_n \cdot q$, quindi, per l'ipotesi induttiva, $a_{n+1} = a_1 q^{n-1} \cdot q = a_1 q^n$, che è la formula per $n + 1$. Per il principio di induzione la formula vale per ogni $n$.

Per la seconda formula si divide $a_n = a_1 q^{n-1}$ per $a_k = a_1 q^{k-1}$, che è diverso da $0$. Si ottiene $\dfrac{a_n}{a_k} = q^{n-k}$, cioè $a_n = a_k\,q^{n-k}$.
:::
::::

:::attenzione
L'esponente nella formula del termine generale è $n - 1$, uguale al numero di moltiplicazioni per $q$. Nella progressione con $a_1 = 3$ e $q = 2$ il quarto termine è $a_4 = 3 \cdot 2^3 = 24$, come si controlla elencando $3, 6, 12, 24$. Con l'esponente $n$ si otterrebbe $3 \cdot 2^4 = 48$, che è il quinto termine.
:::

:::esempio{titolo="Progressione assegnata con due termini"}
In una progressione geometrica $a_2 = 6$ e $a_5 = 48$. Per la formula $a_n = a_k\,q^{n-k}$ con $n = 5$ e $k = 2$ si ha
$$
48 = 6\,q^3 ,
\qquad
\text{quindi}
\qquad
q^3 = 8
\qquad
\text{e}
\qquad
q = 2 .
$$
L'equazione $q^3 = 8$ ha una sola soluzione reale, perché l'esponente è dispari. Il primo termine è $a_1 = \dfrac{a_2}{q} = 3$. Se invece l'esponente è pari, per esempio $q^2 = 9$, si trovano due ragioni, $q = 3$ e $q = -3$, e quindi due progressioni diverse.
:::

:::osservazione{#andamento-geometrica titolo="Segno e monotonia di una progressione geometrica"}
Il comportamento di una progressione geometrica dipende dalla ragione $q$. Si considera il caso $a_1 > 0$; se $a_1 < 0$, i termini cambiano tutti di segno e la crescenza diventa decrescenza.

- Se $q > 1$, ogni termine è maggiore del precedente, e la progressione è **strettamente crescente**, come $3, 6, 12, 24, \ldots$
- Se $q = 1$, la progressione è costante.
- Se $0 < q < 1$, ogni termine è una frazione del precedente, e la progressione è **strettamente decrescente** con termini positivi, come $8, 4, 2, 1, \dfrac{1}{2}, \ldots$
- Se $q < 0$, i termini hanno segni alterni e la progressione non è monotona; per esempio con $a_1 = 4$ e $q = -\dfrac{1}{2}$ si ottiene $4, -2, 1, -\dfrac{1}{2}, \dfrac{1}{4}, \ldots$

Per esempio, nel caso $0 < q < 1$ si ha $a_{n+1} - a_n = a_n\,(q - 1)$, che è negativo perché $a_n > 0$ e $q - 1 < 0$. Gli altri casi si giustificano allo stesso modo.

::grafico{punti="1,8,pieno;2,4,pieno;3,2,pieno;4,1,pieno;5,0.5,pieno;6,0.25,pieno;7,0.125,pieno" xmin=0 xmax=8 ymin=-1 ymax=9 nomi="n,a" titolo="La progressione geometrica con $a_1 = 8$ e $q = \dfrac{1}{2}$: i termini restano positivi e ciascuno è la metà del precedente"}

::grafico{punti="1,4,pieno;2,-2,pieno;3,1,pieno;4,-0.5,pieno;5,0.25,pieno;6,-0.125,pieno;7,0.0625,pieno" xmin=0 xmax=8 ymin=-3 ymax=5 nomi="n,a" titolo="La progressione geometrica con $a_1 = 4$ e $q = -\dfrac{1}{2}$: i termini cambiano segno a ogni passo e si avvicinano a $0$"}

:::

:::teorema{#media-geometrica titolo="Media geometrica e inserimento di termini"}
Tre numeri positivi $a$, $b$, $c$ sono termini consecutivi di una progressione geometrica se e *solo se* il termine centrale è la media geometrica degli altri due:
$$
b = \sqrt{ac} .
$$
Infatti i quozienti $\dfrac{b}{a}$ e $\dfrac{c}{b}$ sono uguali se e solo se $b^2 = ac$, e per numeri positivi questa uguaglianza equivale a $b = \sqrt{ac}$. Per esempio la media geometrica di $4$ e $9$ è $\sqrt{36} = 6$, e $4, 6, 9$ è una progressione geometrica di ragione $\dfrac{3}{2}$.

Per inserire $k$ numeri positivi tra due numeri positivi $A$ e $B$ in modo da formare una progressione geometrica, si considera che $B$ è il termine di posto $k + 2$. Dalla formula del termine generale $B = A\,q^{k+1}$, quindi
$$
q = \sqrt[k+1]{\frac{B}{A}} .
$$
Per inserire tre numeri positivi tra $3$ e $48$ si ha $q^4 = 16$, quindi $q = 2$ e la progressione è $3, 6, 12, 24, 48$. I numeri inseriti si chiamano **medi geometrici**. Se non si richiede che i termini siano positivi e l'esponente $k + 1$ è pari, è accettabile anche la ragione negativa $q = -2$, che dà $3, -6, 12, -24, 48$.
:::

## Somma e prodotto dei termini di una progressione geometrica

::::teorema{#somma-geometrica titolo="Somma dei primi n termini di una progressione geometrica"}
La somma dei primi $n$ termini di una progressione geometrica di primo termine $a_1$ e ragione $q \neq 1$ è
$$
S_n = a_1 \cdot \frac{1 - q^n}{1 - q} .
$$
Se $q = 1$ tutti i termini sono uguali ad $a_1$, e $S_n = n\,a_1$. Per esempio $2 + 6 + 18 + 54 + 162$ è la somma dei primi $5$ termini della progressione con $a_1 = 2$ e $q = 3$, quindi
$$
S_5 = 2 \cdot \frac{1 - 3^5}{1 - 3} = 2 \cdot \frac{-242}{-2} = 242 .
$$
Allo stesso modo $1 + 2 + 4 + \dots + 2^9 = \dfrac{1 - 2^{10}}{1 - 2} = 1023$.

:::dimostrazione
L'idea è moltiplicare la somma per $q$ e sottrarre, così che quasi tutti i termini si eliminino. Si scrivono
$$
\begin{aligned}
S_n &= a_1 + a_1 q + a_1 q^2 + \dots + a_1 q^{n-1} \\[6pt]
q\,S_n &= a_1 q + a_1 q^2 + \dots + a_1 q^{n-1} + a_1 q^n .
\end{aligned}
$$
I termini da $a_1 q$ a $a_1 q^{n-1}$ compaiono in entrambe le righe. Sottraendo la seconda riga dalla prima restano soltanto il primo termine della prima riga e l'ultimo della seconda:
$$
S_n - q\,S_n = a_1 - a_1 q^n ,
\qquad
\text{cioè}
\qquad
S_n\,(1 - q) = a_1\,(1 - q^n) .
$$
Poiché $q \neq 1$, il numero $1 - q$ è diverso da $0$, e dividendo per $1 - q$ si ottiene la formula.
:::
::::

::::teorema{#prodotto-geometrica titolo="Prodotto dei primi n termini di una progressione geometrica"}
Sia $P_n = a_1 \cdot a_2 \cdots a_n$ il prodotto dei primi $n$ termini di una progressione geometrica. Allora
$$
P_n^2 = (a_1 \cdot a_n)^n ,
$$
e, se i termini sono positivi,
$$
P_n = \sqrt{(a_1 \cdot a_n)^n} .
$$
Per esempio i termini $3, 6, 12, 24$ hanno prodotto $5184$; con la formula si ottiene $\sqrt{(3 \cdot 24)^4} = 72^2 = 5184$. La formula è utile quando i termini sono molti e si conoscono soltanto il primo e l'ultimo.

:::dimostrazione
L'idea è la stessa della somma aritmetica, con il prodotto al posto della somma. Due termini equidistanti dagli estremi hanno lo stesso prodotto degli estremi, perché
$$
a_k \cdot a_{n-k+1} = a_1 q^{k-1} \cdot a_1 q^{n-k} = a_1^2\,q^{n-1} = a_1 \cdot a_1 q^{n-1} = a_1 \cdot a_n .
$$
Si scrive il prodotto due volte, la seconda in ordine inverso, e si moltiplicano i fattori in colonna:
$$
P_n \cdot P_n = (a_1 a_n)(a_2 a_{n-1}) \cdots (a_n a_1) .
$$
I fattori a secondo membro sono $n$, e ciascuno vale $a_1 a_n$, quindi $P_n^2 = (a_1 a_n)^n$. Se i termini sono positivi anche $P_n$ è positivo, e $P_n$ è la radice quadrata positiva di $(a_1 a_n)^n$.
:::
::::

## Interesse, capitalizzazione e rate

:::definizione{#interesse-semplice titolo="Interesse semplice"}
Un capitale $C$ viene depositato a un **tasso di interesse** annuo $i$, scritto come numero decimale, così che un tasso del $5\%$ corrisponde a $i = 0{,}05$. In regime di **interesse semplice** l'interesse si calcola ogni anno sul solo capitale iniziale, e vale sempre $C\,i$. Il **montante**, cioè il capitale più gli interessi, dopo $n$ anni è
$$
M_n = C + n\,C\,i = C\,(1 + n\,i) .
$$
I montanti $M_0, M_1, M_2, \ldots$ formano quindi una progressione aritmetica di primo termine $C$ e ragione $C\,i$. Per esempio con $C = 1000$ euro e $i = 0{,}05$ l'interesse annuo è $50$ euro, e dopo $4$ anni il montante è $M_4 = 1000 \cdot (1 + 4 \cdot 0{,}05) = 1200$ euro.
:::

:::definizione{#interesse-composto titolo="Interesse composto"}
In regime di **interesse composto** l'interesse di ogni anno si aggiunge al capitale, e l'anno seguente produce a sua volta interesse. Alla fine di ogni anno il montante viene moltiplicato per $1 + i$, quindi i montanti formano una progressione geometrica di primo termine $C$ e ragione $1 + i$:
$$
M_n = C\,(1 + i)^n .
$$
Gli indici partono da $0$, perché $M_0 = C$ è il capitale iniziale. Con $C = 1000$ euro e $i = 0{,}05$, dopo $4$ anni il montante è
$$
M_4 = 1000 \cdot 1{,}05^4 = 1215{,}51 \text{ euro} ,
$$
arrotondato al centesimo, cioè $15{,}51$ euro più che con l'interesse semplice. La differenza nasce dagli interessi prodotti dagli interessi, e aumenta con gli anni.

::grafico{punti="0,10,pieno;1,11,pieno;2,12,pieno;3,13,pieno;4,14,pieno;5,15,pieno;6,16,pieno;7,17,pieno;8,18,pieno;1,11,vuoto;2,12.1,vuoto;3,13.31,vuoto;4,14.641,vuoto;5,16.1051,vuoto;6,17.7156,vuoto;7,19.4872,vuoto;8,21.4359,vuoto" etichette="8.4,17.4,semplice;8.4,22.2,composto" xmin=0 xmax=10 ymin=0 ymax=24 nomi="n,M" titolo="Montanti, in centinaia di euro, di $1000$ euro al $10\%$ annuo: con l'interesse semplice (punti pieni) crescono in progressione aritmetica, con l'interesse composto (punti vuoti) in progressione geometrica"}

:::

:::esempio{titolo="Tempo di raddoppio di un capitale"}
Si cerca dopo quanti anni un capitale investito al $5\%$ annuo in regime di interesse composto raddoppia. Si deve avere $C \cdot 1{,}05^n \geq 2C$, cioè, dividendo per $C > 0$,
$$
1{,}05^n \geq 2 .
$$
Si risolve la disequazione esponenziale con i logaritmi, come si vede nell'argomento sui logaritmi. Il logaritmo naturale è crescente, quindi la disequazione equivale a $n \ln 1{,}05 \geq \ln 2$, e poiché $\ln 1{,}05 > 0$,
$$
n \geq \frac{\ln 2}{\ln 1{,}05} \approx 14{,}2 .
$$
Gli anni sono numeri interi, perciò il capitale raddoppia dopo $15$ anni. Infatti $1{,}05^{14} \approx 1{,}98$ è ancora minore di $2$, mentre $1{,}05^{15} \approx 2{,}08$.
:::

:::esempio{#rate-costanti titolo="Versamenti costanti"}
Alla fine di ogni anno, per $n$ anni, si versa la stessa somma $R$ su un conto che rende il tasso annuo $i$ in regime di interesse composto. Alla fine dell'ultimo anno il versamento appena fatto vale $R$, quello dell'anno prima vale $R\,(1 + i)$, e il primo versamento, rimasto sul conto per $n - 1$ anni, vale $R\,(1 + i)^{n-1}$. Il valore totale è quindi la somma di una progressione geometrica di primo termine $R$ e ragione $1 + i$:
$$
V = R + R\,(1 + i) + \dots + R\,(1 + i)^{n-1} = R \cdot \frac{(1 + i)^n - 1}{i} ,
$$
dove il denominatore è $(1 + i) - 1 = i$. Con $R = 1000$ euro, $i = 0{,}02$ e $n = 5$ si ottiene
$$
V = 1000 \cdot \frac{1{,}02^5 - 1}{0{,}02} = 5204{,}04 \text{ euro} ,
$$
arrotondato al centesimo. I versamenti sono $5000$ euro e gli interessi maturati sono $204{,}04$ euro. Lo stesso ragionamento si applica alle rate di un mutuo e ai piani di accumulo.
:::

## Problemi geometrici con le progressioni

:::esempio{titolo="Triangolo rettangolo con i lati in progressione aritmetica"}
Si cercano i triangoli rettangoli con i lati in progressione aritmetica. I tre lati si scrivono $a - d$, $a$, $a + d$, con $0 < d < a$, così che il termine centrale sia $a$ e la ragione sia $d$. L'ipotenusa è il lato maggiore $a + d$, perciò il teorema di Pitagora dà
$$
(a - d)^2 + a^2 = (a + d)^2 .
$$
Sviluppando i quadrati si ottiene $a^2 - 2ad + d^2 + a^2 = a^2 + 2ad + d^2$, cioè $a^2 = 4ad$. Poiché $a > 0$, si divide per $a$ e si ottiene $a = 4d$. I lati sono quindi $3d$, $4d$, $5d$, perciò ogni triangolo rettangolo con i lati in progressione aritmetica è simile al triangolo di lati $3$, $4$, $5$. Se per esempio il perimetro è $24$, si ha $12d = 24$, quindi $d = 2$ e i lati sono $6$, $8$, $10$.
:::

:::esempio{#quadrati-inscritti titolo="Quadrati inscritti uno nell'altro"}
Si parte da un quadrato di lato $4$ e si costruisce un secondo quadrato congiungendo i punti medi dei suoi lati; poi si ripete la costruzione sul secondo quadrato, e così via. Il lato del nuovo quadrato è l'ipotenusa di un triangolo rettangolo isoscele con i cateti uguali a metà del lato precedente. Se il lato precedente è $\ell$, il nuovo lato è quindi
$$
\sqrt{\left( \frac{\ell}{2} \right)^2 + \left( \frac{\ell}{2} \right)^2} = \frac{\ell}{\sqrt{2}} .
$$
I lati formano perciò una progressione geometrica di ragione $\dfrac{1}{\sqrt{2}}$, e le aree, che sono i quadrati dei lati, formano una progressione geometrica di ragione $\dfrac{1}{2}$, cioè $16, 8, 4, 2, \ldots$ La somma delle aree dei primi $5$ quadrati è
$$
S_5 = 16 \cdot \frac{1 - \left( \frac{1}{2} \right)^5}{1 - \frac{1}{2}} = 16 \cdot \frac{31}{32} \cdot 2 = 31 .
$$

::grafico{assi=0 uguale=1 poligoni="-2,-2 2,-2 2,2 -2,2" linee="-2,-2 2,-2 2,2 -2,2 -2,-2;0,-2 2,0 0,2 -2,0 0,-2;-1,-1 1,-1 1,1 -1,1 -1,-1;0,-1 1,0 0,1 -1,0 0,-1" etichette="0,-2.5,ℓ = 4" xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="Ogni quadrato ha i vertici nei punti medi dei lati del precedente; le aree $16$, $8$, $4$, $2$ formano una progressione geometrica di ragione $\dfrac{1}{2}$"}

:::

## Progressioni per n grande e somma infinita

::::teorema{#potenze-qn titolo="Comportamento di q elevato alla n per n grande"}
Sia $q$ un numero reale.

- Se $q > 1$, le potenze $q^n$ superano qualunque numero positivo $M$ assegnato, per $n$ abbastanza grande.
- Se $|q| < 1$, le potenze $q^n$ si avvicinano a $0$, cioè per ogni distanza $\varepsilon > 0$ assegnata si ha $|q^n| < \varepsilon$ per $n$ abbastanza grande.
- Se $q = 1$ le potenze valgono sempre $1$; se $q \leq -1$ le potenze cambiano segno a ogni passo e il loro valore assoluto non diminuisce.

Nel linguaggio dei limiti, che si studia nel quinto anno, il primo caso si scrive $\displaystyle\lim_{n \to +\infty} q^n = +\infty$ e il secondo $\displaystyle\lim_{n \to +\infty} q^n = 0$. Dal teorema segue che una progressione geometrica $a_n = a_1 q^{n-1}$ con $|q| < 1$ ha i termini che si avvicinano a $0$, mentre con $|q| > 1$ i termini crescono in valore assoluto senza limiti; una progressione aritmetica con $d \neq 0$ invece supera in valore assoluto ogni numero assegnato, perché il termine $(n - 1)\,d$ cresce in valore assoluto senza limiti. Per esempio $0{,}9^n < 0{,}01$ per ogni $n \geq 44$, come si ricava con i logaritmi da $n > \dfrac{\ln 0{,}01}{\ln 0{,}9} \approx 43{,}7$.

:::dimostrazione
Si considera prima $q > 1$ e si scrive $q = 1 + x$ con $x > 0$. Per la disuguaglianza di Bernoulli $q^n \geq 1 + nx$. Il secondo membro supera $M$ quando $n > \dfrac{M - 1}{x}$, quindi per questi $n$ si ha anche $q^n > M$.

Se $0 < |q| < 1$, il numero $p = \dfrac{1}{|q|}$ è maggiore di $1$. Per il caso precedente, applicato con $M = \dfrac{1}{\varepsilon}$, si ha $p^n > \dfrac{1}{\varepsilon}$ per $n$ abbastanza grande. Passando ai reciproci, che sono positivi, si ottiene $|q|^n < \varepsilon$, e $|q^n| = |q|^n$. Se $q = 0$ tutte le potenze sono nulle. L'ultimo punto segue da $|q^n| = |q|^n \geq 1$ per $|q| \geq 1$.
:::
::::

:::teorema{#somma-geometrica-infinita titolo="Somma di una progressione geometrica di ragione minore di 1 in valore assoluto"}
Sia $(a_n)$ una progressione geometrica di primo termine $a_1$ e ragione $q$ con $|q| < 1$. Quando $n$ diventa grande, la somma $S_n$ dei primi $n$ termini si avvicina al numero
$$
S = \frac{a_1}{1 - q} ,
$$
che si chiama **somma** della progressione geometrica e si scrive $S = a_1 + a_1 q + a_1 q^2 + \dots$ Infatti $S_n = \dfrac{a_1}{1 - q} - \dfrac{a_1}{1 - q}\,q^n$, e il secondo termine si avvicina a $0$ perché $q^n$ si avvicina a $0$. La definizione precisa di questa somma infinita si dà con i limiti nell'argomento del quinto anno.

Per esempio con $a_1 = \dfrac{1}{2}$ e $q = \dfrac{1}{2}$ si ha $S_n = 1 - \left( \dfrac{1}{2} \right)^n$, quindi le somme parziali sono $\dfrac{1}{2}, \dfrac{3}{4}, \dfrac{7}{8}, \dfrac{15}{16}, \ldots$ e
$$
\frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \frac{1}{16} + \dots = \frac{\frac{1}{2}}{1 - \frac{1}{2}} = 1 .
$$

::grafico{punti="1,0.5,pieno;2,0.75,pieno;3,0.875,pieno;4,0.9375,pieno;5,0.96875,pieno;6,0.984375,pieno;7,0.9921875,pieno;8,0.99609375,pieno" asintoti="y=1" xmin=0 xmax=9 ymin=0 ymax=1.3 nomi="n,S" titolo="Le somme parziali $S_n = 1 - \left( \dfrac{1}{2} \right)^n$ di $\dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \ldots$ si avvicinano a $1$ senza superarlo"}

:::

:::esempio{titolo="Numeri periodici come somme geometriche"}
Il numero $0{,}\overline{3} = 0{,}333\ldots$ è la somma $\dfrac{3}{10} + \dfrac{3}{100} + \dfrac{3}{1000} + \dots$, cioè di una progressione geometrica con $a_1 = \dfrac{3}{10}$ e $q = \dfrac{1}{10}$. Poiché $|q| < 1$,
$$
0{,}\overline{3} = \frac{\frac{3}{10}}{1 - \frac{1}{10}} = \frac{\frac{3}{10}}{\frac{9}{10}} = \frac{1}{3} .
$$
Allo stesso modo $0{,}\overline{12} = \dfrac{12}{100} + \dfrac{12}{10000} + \dots$ ha $a_1 = \dfrac{12}{100}$ e $q = \dfrac{1}{100}$, quindi vale $\dfrac{12}{100} \cdot \dfrac{100}{99} = \dfrac{12}{99} = \dfrac{4}{33}$. Questo giustifica la regola della frazione generatrice dei numeri periodici.
:::

:::attenzione
La formula $\dfrac{a_1}{1 - q}$ vale soltanto per $|q| < 1$. Con $a_1 = 1$ e $q = -1$ la formula darebbe $\dfrac{1}{2}$, ma le somme parziali di $1 - 1 + 1 - 1 + \dots$ valgono alternativamente $1$ e $0$ e non si avvicinano a nessun numero. Con $a_1 = 1$ e $q = 2$ la formula darebbe $-1$, mentre le somme parziali $1, 3, 7, 15, \ldots$ sono positive e crescono senza limiti.
:::
