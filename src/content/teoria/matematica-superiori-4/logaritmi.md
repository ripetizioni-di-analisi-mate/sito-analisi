---
titolo: Logaritmi, equazioni e disequazioni logaritmiche
sommario: Che cos'è il logaritmo di un numero, quali proprietà ha e come si cambia la base, com'è fatto il grafico della funzione logaritmica, come si risolvono le equazioni e le disequazioni logaritmiche e le equazioni esponenziali che richiedono i logaritmi, e come si usano i logaritmi per il pH, i decibel e la magnitudo dei terremoti.
---

## Definizione di logaritmo

:::definizione{#definizione-logaritmo titolo="Logaritmo"}
L'equazione $2^x = 8$ ha la soluzione $x = 3$, perché $8$ è la terza potenza di $2$. Anche l'equazione $2^x = 3$ ha una e una sola soluzione, perché la funzione $y = 2^x$ è crescente e assume ogni valore positivo, come si è visto nell'argomento sulle funzioni esponenziali. Questa soluzione però non è un numero intero e non si trova a mente. Il logaritmo è il nome che si dà a un esponente di questo tipo.

Siano $a$ e $b$ due numeri reali con $a > 0$, $a \neq 1$ e $b > 0$. Il **logaritmo** in base $a$ di $b$ è l'esponente da dare ad $a$ per ottenere $b$:
$$
\log_a b = x \iff a^x = b .
$$
Il numero $a$ si chiama **base** e il numero $b$ si chiama **argomento** del logaritmo. Per esempio $\log_2 8 = 3$ perché $2^3 = 8$, $\log_5 \dfrac{1}{25} = -2$ perché $5^{-2} = \dfrac{1}{25}$, e $\log_9 3 = \dfrac{1}{2}$ perché $9^{\frac{1}{2}} = \sqrt{9} = 3$. La soluzione di $2^x = 3$ si scrive quindi $x = \log_2 3$, e vale circa $1{,}585$.

::grafico{f="2^x;3" punti="1.585,3,pieno" segmenti="1.585,0,1.585,3" xmin=-3 xmax=4 ymin=-1 ymax=9 legenda="y = 2^x;y = 3" titolo="Il grafico di $2^x$ incontra la retta $y = 3$ nel punto di ascissa $\log_2 3 \approx 1{,}585$"}

:::

:::osservazione{#esistenza-logaritmo titolo="Condizioni sulla base e sull'argomento"}
Le tre condizioni della definizione servono a garantire che l'esponente cercato esista e sia uno solo.

- La base è positiva perché le potenze di una base negativa non sono definite per tutti gli esponenti reali. Per esempio $(-4)^{\frac{1}{2}}$ sarebbe $\sqrt{-4}$, che non è un numero reale.
- La base è diversa da $1$ perché $1^x = 1$ per ogni $x$. L'equazione $1^x = 5$ quindi non ha soluzioni, mentre $1^x = 1$ ne ha infinite.
- L'argomento è positivo perché, per $a > 0$, la potenza $a^x$ è positiva per ogni $x$. Per questo motivo $\log_2 0$ e $\log_2 (-4)$ non esistono, perché nessuna potenza di $2$ vale $0$ o $-4$.

Il valore del logaritmo invece può essere positivo, nullo o negativo. Per esempio $\log_{10} 0{,}1 = -1$, perché $10^{-1} = 0{,}1$.
:::

:::definizione{#logaritmo-naturale-decimale titolo="Logaritmo naturale e logaritmo decimale"}
Due basi compaiono più spesso delle altre. Il **logaritmo naturale** ha per base il numero $e \approx 2{,}718$, introdotto nell'argomento sulle funzioni esponenziali, e si indica con $\ln$:
$$
\ln b = \log_e b .
$$
Il **logaritmo decimale** ha base $10$ e si scrive $\log_{10}$. Sulla calcolatrice i due logaritmi corrispondono ai tasti "ln" e "log". Per esempio $\ln e^3 = 3$, $\ln 1 = 0$, $\log_{10} 1000 = 3$ e $\log_{10} 0{,}01 = -2$.

Il logaritmo decimale permette di contare le cifre di un numero. Un numero $N$ con $100 \leq N < 1000$ ha tre cifre, e il suo logaritmo decimale soddisfa $2 \leq \log_{10} N < 3$; per esempio $\log_{10} 350 \approx 2{,}544$.
:::

::::teorema{#identita-logaritmiche titolo="Conseguenze della definizione"}
Sia $a > 0$ con $a \neq 1$. Valgono le uguaglianze
$$
\log_a 1 = 0 ,
\qquad
\log_a a = 1 ,
\qquad
a^{\log_a b} = b \quad \text{per ogni } b > 0 ,
\qquad
\log_a \left( a^x \right) = x \quad \text{per ogni } x \in \mathbb{R} .
$$
Le ultime due uguaglianze servono a semplificare le espressioni in cui compaiono una potenza e un logaritmo con la stessa base. Per esempio $3^{\log_3 7} = 7$, $e^{\ln 5} = 5$ e $\log_2 2^{10} = 10$. Da esse segue anche che le funzioni $a^x$ e $\log_a x$ sono una l'inversa dell'altra, e questo fatto determina il grafico della funzione logaritmica.

:::dimostrazione
Ogni uguaglianza è la definizione di logaritmo letta in una delle due direzioni. Poiché $a^0 = 1$, l'esponente da dare ad $a$ per ottenere $1$ è $0$, quindi $\log_a 1 = 0$. Poiché $a^1 = a$, si ha $\log_a a = 1$.

Per la terza uguaglianza si pone $x = \log_a b$. Per la definizione di logaritmo vale $a^x = b$, e sostituendo $x$ si ottiene $a^{\log_a b} = b$. Per la quarta uguaglianza, l'esponente da dare ad $a$ per ottenere $a^x$ è proprio $x$, quindi $\log_a \left( a^x \right) = x$.
:::
::::

:::esempio{titolo="Calcolo di un logaritmo con la definizione"}
Per calcolare $\log_8 32$ si cerca l'esponente $x$ tale che $8^x = 32$. Le due potenze si scrivono con la stessa base $2$:
$$
8^x = 32
\iff
\left( 2^3 \right)^x = 2^5
\iff
2^{3x} = 2^5
\iff
3x = 5 ,
$$
dove l'ultimo passaggio vale perché due potenze con la stessa base positiva e diversa da $1$ sono uguali solo se hanno lo stesso esponente. Quindi $\log_8 32 = \dfrac{5}{3}$.

Allo stesso modo $\log_{\frac{1}{3}} 27 = -3$, perché $\left( \dfrac{1}{3} \right)^{-3} = 3^3 = 27$, e $\log_{\sqrt{5}} 125 = 6$, perché $\left( \sqrt{5} \right)^6 = 5^3 = 125$.
:::

## Proprietà dei logaritmi

:::richiamo{titolo="Proprietà delle potenze"}
Per $a > 0$ e $s$, $t$, $r$ reali valgono
$$
a^s \cdot a^t = a^{s + t} ,
\qquad
\frac{a^s}{a^t} = a^{s - t} ,
\qquad
\left( a^s \right)^r = a^{r s} .
$$
:::

::::teorema{#logaritmo-prodotto titolo="Logaritmo di un prodotto"}
Sia $a > 0$ con $a \neq 1$, e siano $u > 0$ e $v > 0$. Allora
$$
\log_a (u v) = \log_a u + \log_a v .
$$
Il logaritmo di un prodotto è quindi la somma dei logaritmi dei fattori. Per esempio $\log_2 (4 \cdot 8) = \log_2 32 = 5$, e infatti $\log_2 4 + \log_2 8 = 2 + 3 = 5$. La proprietà permette anche di calcolare una somma di logaritmi che separatamente non si calcolano a mente, come $\log_6 4 + \log_6 9 = \log_6 36 = 2$.

:::dimostrazione
L'idea è che i logaritmi sono esponenti, e nel prodotto di due potenze con la stessa base gli esponenti si sommano. Si pongono $s = \log_a u$ e $t = \log_a v$. Per la definizione di logaritmo si ha $u = a^s$ e $v = a^t$, quindi
$$
u v = a^s \cdot a^t = a^{s + t}
$$
per la proprietà del prodotto di potenze. Perciò $s + t$ è l'esponente da dare ad $a$ per ottenere $u v$, cioè $\log_a (u v) = s + t = \log_a u + \log_a v$.
:::
::::

::::teorema{#logaritmo-quoziente titolo="Logaritmo di un quoziente"}
Sia $a > 0$ con $a \neq 1$, e siano $u > 0$ e $v > 0$. Allora
$$
\log_a \frac{u}{v} = \log_a u - \log_a v .
$$
Per esempio $\log_3 54 - \log_3 2 = \log_3 27 = 3$. Con $u = 1$ si ottiene il caso particolare $\log_a \dfrac{1}{v} = -\log_a v$, perché $\log_a 1 = 0$; per esempio $\log_2 \dfrac{1}{32} = -5$.

:::dimostrazione
Con $s = \log_a u$ e $t = \log_a v$ si ha $u = a^s$ e $v = a^t$. Per la proprietà del quoziente di potenze vale
$$
\frac{u}{v} = \frac{a^s}{a^t} = a^{s - t} ,
$$
quindi $\log_a \dfrac{u}{v} = s - t = \log_a u - \log_a v$.
:::
::::

::::teorema{#logaritmo-potenza titolo="Logaritmo di una potenza"}
Sia $a > 0$ con $a \neq 1$, sia $u > 0$ e sia $r$ un numero reale. Allora
$$
\log_a \left( u^r \right) = r \log_a u .
$$
L'esponente dell'argomento diventa quindi un coefficiente davanti al logaritmo. Per esempio $\log_2 8^5 = 5 \log_2 8 = 15$ e $\log_3 \sqrt{3} = \log_3 3^{\frac{1}{2}} = \dfrac{1}{2}$. Questa proprietà permette di portare un'incognita giù dall'esponente, e per questo serve a risolvere le equazioni esponenziali con basi diverse.

:::dimostrazione
Con $s = \log_a u$ si ha $u = a^s$. Per la proprietà della potenza di una potenza vale
$$
u^r = \left( a^s \right)^r = a^{r s} ,
$$
quindi $\log_a \left( u^r \right) = r s = r \log_a u$.
:::
::::

:::esempio{titolo="Sviluppare e riunire espressioni logaritmiche"}
Per $p > 0$ e $q > 0$ le tre proprietà permettono di sviluppare il logaritmo seguente:
$$
\begin{aligned}
\log_3 \frac{27 p^2}{\sqrt{q}}
&= \log_3 27 + \log_3 p^2 - \log_3 q^{\frac{1}{2}} \\[6pt]
&= 3 + 2 \log_3 p - \frac{1}{2} \log_3 q .
\end{aligned}
$$
Lette da destra a sinistra, le stesse proprietà riuniscono più logaritmi in uno solo:
$$
2 \ln 3 + \ln 5 - \ln 9 = \ln 9 + \ln 5 - \ln 9 = \ln \frac{9 \cdot 5}{9} = \ln 5 .
$$
:::

:::attenzione
Le proprietà riguardano prodotti, quozienti e potenze dell'argomento. Per il logaritmo di una somma non esiste una formula analoga. Per esempio
$$
\log_2 (2 + 6) = \log_2 8 = 3 ,
\qquad
\log_2 2 + \log_2 6 = \log_2 12 \approx 3{,}585 ,
$$
quindi $\log_2 (2 + 6) \neq \log_2 2 + \log_2 6$. Allo stesso modo il quoziente di due logaritmi è diverso dal logaritmo del quoziente, perché $\dfrac{\log_2 8}{\log_2 4} = \dfrac{3}{2}$, mentre $\log_2 \dfrac{8}{4} = 1$.
:::

:::osservazione{#proprieta-e-dominio titolo="Le proprietà e le condizioni sugli argomenti"}
Le proprietà valgono quando *tutti* gli argomenti che compaiono sono positivi. Quando gli argomenti contengono un'incognita, le due espressioni di una proprietà possono avere domini diversi.

- L'espressione $\ln \left( x^2 \right)$ esiste per ogni $x \neq 0$, mentre $2 \ln x$ esiste solo per $x > 0$. Per $x \neq 0$ l'uguaglianza corretta è $\ln \left( x^2 \right) = 2 \ln |x|$, perché $x^2 = |x|^2$ e $|x| > 0$.
- L'espressione $\ln \big( (x - 1)(x - 2) \big)$ esiste per $x < 1$ oppure $x > 2$, mentre $\ln (x - 1) + \ln (x - 2)$ esiste solo per $x > 2$.

Quando in un'equazione si applica una proprietà che allarga il dominio, possono comparire soluzioni che l'equazione di partenza non ha. Per questo motivo nelle equazioni logaritmiche si scrivono per prime le condizioni di esistenza.
:::

## Cambiamento di base

::::teorema{#cambiamento-base titolo="Formula del cambiamento di base"}
Le calcolatrici scientifiche di solito hanno solo i logaritmi in base $e$ e in base $10$. La formula seguente permette di calcolare un logaritmo in una base qualsiasi a partire da logaritmi in un'altra base.

Siano $a$ e $c$ numeri positivi e diversi da $1$, e sia $b > 0$. Allora
$$
\log_a b = \frac{\log_c b}{\log_c a} .
$$
Per esempio
$$
\log_2 3 = \frac{\ln 3}{\ln 2} \approx \frac{1{,}0986}{0{,}6931} \approx 1{,}585 ,
\qquad
\log_8 32 = \frac{\log_2 32}{\log_2 8} = \frac{5}{3} ,
$$
e il secondo risultato coincide con quello ottenuto con la definizione.

:::dimostrazione
L'idea è applicare il logaritmo in base $c$ ai due membri dell'uguaglianza che definisce $\log_a b$. Si pone $x = \log_a b$, quindi $a^x = b$. I due membri sono numeri positivi uguali, perciò hanno lo stesso logaritmo in base $c$:
$$
\log_c \left( a^x \right) = \log_c b .
$$
Per la proprietà del logaritmo di una potenza il primo membro è $x \log_c a$, quindi $x \log_c a = \log_c b$. Poiché $a \neq 1$, si ha $\log_c a \neq 0$, dato che l'unico numero con logaritmo nullo è $1$. Si può allora dividere per $\log_c a$, e si ottiene $x = \dfrac{\log_c b}{\log_c a}$.
:::
::::

:::esempio{titolo="Conseguenze della formula del cambiamento di base"}
- Se anche $b \neq 1$, con $c = b$ si ottiene $\log_a b = \dfrac{\log_b b}{\log_b a} = \dfrac{1}{\log_b a}$. Per esempio $\log_4 2 = \dfrac{1}{\log_2 4} = \dfrac{1}{2}$.
- Con la base reciproca si ha $\log_{\frac{1}{a}} b = \dfrac{\log_a b}{\log_a \frac{1}{a}} = -\log_a b$, perché $\log_a \dfrac{1}{a} = -1$. Per esempio $\log_{\frac{1}{2}} 8 = -3$.
- Con una base che è una potenza si ha $\log_{a^2} b = \dfrac{\log_a b}{\log_a a^2} = \dfrac{1}{2} \log_a b$. Per esempio $\log_9 x = \dfrac{1}{2} \log_3 x$ per $x > 0$.

L'ultima uguaglianza permette di risolvere equazioni con logaritmi in basi diverse. L'equazione $\log_3 x + \log_9 x = 3$, con $x > 0$, diventa
$$
\log_3 x + \frac{1}{2} \log_3 x = 3
\iff
\frac{3}{2} \log_3 x = 3
\iff
\log_3 x = 2 ,
$$
quindi $x = 3^2 = 9$.
:::

## La funzione logaritmica

:::richiamo{titolo="Funzione esponenziale"}
Sia $a > 0$ con $a \neq 1$. La funzione $y = a^x$ ha dominio $\mathbb{R}$ e immagine $(0, +\infty)$, il suo grafico passa per il punto $(0, 1)$, ed è strettamente crescente se $a > 1$, strettamente decrescente se $0 < a < 1$.
:::

:::definizione{#funzione-logaritmica titolo="Funzione logaritmica"}
Poiché $y = a^x$ è strettamente monotona e assume ogni valore positivo, per ogni $x > 0$ esiste uno e un solo esponente $y$ tale che $a^y = x$, ed è $y = \log_a x$. La funzione
$$
y = \log_a x , \qquad x > 0 ,
$$
si chiama **funzione logaritmica** di base $a$, ed è la **funzione inversa** di $y = a^x$. Il punto $(p, q)$ sta sul grafico dell'esponenziale se e solo se il punto $(q, p)$ sta sul grafico del logaritmo. Lo scambio delle coordinate è la simmetria rispetto alla bisettrice $y = x$, quindi i due grafici sono simmetrici rispetto a questa retta.

Per esempio il punto $(3, 8)$ sta sul grafico di $2^x$, quindi il punto $(8, 3)$ sta sul grafico di $\log_2 x$. Scambiando le colonne della tabella di $2^x$ si ottengono i valori
$$
\log_2 \frac{1}{4} = -2 ,
\quad
\log_2 \frac{1}{2} = -1 ,
\quad
\log_2 1 = 0 ,
\quad
\log_2 2 = 1 ,
\quad
\log_2 4 = 2 ,
\quad
\log_2 8 = 3 .
$$

::grafico{f="2^x;log(x)/log(2);x" punti="1,2,pieno;2,1,pieno" segmenti="1,2,2,1" xmin=-4 xmax=6 ymin=-4 ymax=6 uguale=1 legenda="y = 2^x;y = \log_2 x;y = x" titolo="I grafici di $2^x$ e di $\log_2 x$ sono simmetrici rispetto alla retta $y = x$: il punto $(1, 2)$ del primo corrisponde al punto $(2, 1)$ del secondo"}

:::

::::teorema{#proprieta-funzione-logaritmica titolo="Proprietà della funzione logaritmica"}
Sia $a > 0$ con $a \neq 1$. La funzione $y = \log_a x$ ha le proprietà seguenti.

- Il dominio è $(0, +\infty)$ e l'immagine è $\mathbb{R}$.
- Il grafico passa per i punti $(1, 0)$ e $(a, 1)$.
- Se $a > 1$ la funzione è **strettamente crescente**; è negativa per $0 < x < 1$ e positiva per $x > 1$.
- Se $0 < a < 1$ la funzione è **strettamente decrescente**; è positiva per $0 < x < 1$ e negativa per $x > 1$.
- L'asse $y$ è un asintoto verticale. Quando $x$ si avvicina a $0$ da destra, $\log_a x$ tende a $-\infty$ se $a > 1$ e a $+\infty$ se $0 < a < 1$.

Poiché $\log_{\frac{1}{a}} x = -\log_a x$, i grafici di $\log_a x$ e di $\log_{\frac{1}{a}} x$ sono simmetrici rispetto all'asse $x$. Per esempio $\log_2 4 = 2$ e $\log_{\frac{1}{2}} 4 = -2$.

::grafico{f="log(x)/log(2);log(x)/log(0.5)" punti="1,0,pieno;2,1,pieno;2,-1,pieno" asintoti="x=0" xmin=-1 xmax=8 ymin=-4 ymax=4 legenda="y = \log_2 x;y = \log_{\frac{1}{2}} x" titolo="Con base $2$ il logaritmo è crescente, con base $\dfrac{1}{2}$ è decrescente; entrambi i grafici passano per $(1, 0)$ e hanno l'asse $y$ come asintoto"}

:::dimostrazione
Dominio e immagine del logaritmo sono l'immagine e il dominio dell'esponenziale, perché le due funzioni sono una l'inversa dell'altra. I due punti seguono da $\log_a 1 = 0$ e $\log_a a = 1$.

Per la monotonia l'idea è confrontare due argomenti scrivendoli come potenze di $a$. Sia $a > 1$ e siano $0 < x_1 < x_2$. Si pongono $y_1 = \log_a x_1$ e $y_2 = \log_a x_2$, quindi $x_1 = a^{y_1}$ e $x_2 = a^{y_2}$. Se fosse $y_1 \geq y_2$, poiché $a^x$ è crescente si avrebbe $a^{y_1} \geq a^{y_2}$, cioè $x_1 \geq x_2$, contro l'ipotesi. Perciò $y_1 < y_2$, e la funzione è strettamente crescente. Per $0 < a < 1$ il ragionamento è lo stesso con l'esponenziale decrescente.

Il segno segue dalla monotonia. Per $a > 1$ e $x > 1$ si ha $\log_a x > \log_a 1 = 0$, e per $0 < x < 1$ si ha $\log_a x < 0$.
:::
::::

:::osservazione{titolo="Il logaritmo cresce lentamente"}
Per $a > 1$ il logaritmo è crescente, ma i suoi valori aumentano molto lentamente. Per esempio $\log_{10} x$ vale $6$ solo per $x = 1\,000\,000$. Per questo motivo i logaritmi servono a rappresentare grandezze che variano su molti ordini di grandezza.

Un numero naturale $N$ con $k$ cifre soddisfa $10^{k - 1} \leq N < 10^k$, quindi $k - 1 \leq \log_{10} N < k$. Per esempio
$$
\log_{10} 2^{100} = 100 \log_{10} 2 \approx 30{,}1 ,
$$
perciò $2^{100}$ ha $31$ cifre.
:::

## Grafici deducibili

:::teorema{#trasformazioni-grafico titolo="Trasformazioni del grafico del logaritmo"}
Dal grafico di $y = \log_a x$ si ottengono i grafici di altre funzioni con le trasformazioni geometriche viste per le funzioni esponenziali.

- $y = \log_a (x - h)$: traslazione orizzontale di $h$; il dominio diventa $x > h$ e l'asintoto diventa $x = h$.
- $y = \log_a x + k$: traslazione verticale di $k$.
- $y = -\log_a x$: simmetria rispetto all'asse $x$.
- $y = \log_a (-x)$: simmetria rispetto all'asse $y$; il dominio diventa $x < 0$.
- $y = \left| \log_a x \right|$: la parte del grafico che sta sotto l'asse $x$ si ribalta sopra l'asse.
- $y = \log_a |x|$: il dominio è $x \neq 0$ e il grafico è simmetrico rispetto all'asse $y$.

Questi grafici servono a leggere il segno di una funzione e il numero di soluzioni di un'equazione. Per esempio $y = \log_2 (4x)$ si scrive $y = \log_2 4 + \log_2 x = 2 + \log_2 x$, quindi il suo grafico è quello di $\log_2 x$ traslato verso l'alto di $2$.
:::

:::esempio{titolo="Un logaritmo traslato"}
Il grafico di $y = \log_2 (x + 3) - 1$ si ottiene da quello di $\log_2 x$ con una traslazione di $3$ verso sinistra e di $1$ verso il basso. Il dominio è $x > -3$ e l'asintoto è la retta $x = -3$. Il grafico incontra l'asse $x$ dove
$$
\log_2 (x + 3) = 1
\iff
x + 3 = 2
\iff
x = -1 ,
$$
e incontra l'asse $y$ nel punto di ordinata $\log_2 3 - 1 \approx 0{,}585$.

::grafico{f="log(x+3)/log(2)-1;log(x)/log(2)" punti="-1,0,pieno;0,0.585,pieno" asintoti="x=-3" xmin=-4 xmax=6 ymin=-4 ymax=4 legenda="y = \log_2 (x + 3) - 1;y = \log_2 x" titolo="Il grafico di $\log_2 (x + 3) - 1$ è quello di $\log_2 x$ traslato di $3$ verso sinistra e di $1$ verso il basso; l'asintoto è $x = -3$"}

:::

:::esempio{titolo="Logaritmo del valore assoluto e valore assoluto del logaritmo"}
La funzione $y = \ln |x|$ è definita per $x \neq 0$. Per $x > 0$ coincide con $\ln x$; inoltre $\ln |-x| = \ln |x|$, quindi il grafico è simmetrico rispetto all'asse $y$ e passa per $(1, 0)$ e $(-1, 0)$.

::grafico{f="log(x);log(-x)" punti="1,0,pieno;-1,0,pieno" asintoti="x=0" xmin=-5 xmax=5 ymin=-4 ymax=3 legenda="y = \ln x,\ x > 0;y = \ln (-x),\ x < 0" titolo="Il grafico di $\ln |x|$ è formato dal grafico di $\ln x$ per $x > 0$ e dal suo simmetrico rispetto all'asse $y$ per $x < 0$"}

La funzione $y = |\ln x|$ è definita per $x > 0$. Per $x \geq 1$ si ha $\ln x \geq 0$, quindi $|\ln x| = \ln x$; per $0 < x < 1$ si ha $\ln x < 0$, quindi $|\ln x| = -\ln x$ e il grafico è ribaltato sopra l'asse $x$. Il minimo vale $0$ e si raggiunge in $x = 1$.

::grafico{f="abs(log(x))" punti="1,0,pieno" asintoti="x=0" xmin=-1 xmax=6 ymin=-1 ymax=4 titolo="Il grafico di $|\ln x|$: la parte di $\ln x$ con $0 < x < 1$ è ribaltata sopra l'asse $x$"}

:::

## Dominio delle funzioni con logaritmi

:::teorema{#condizioni-esistenza titolo="Condizioni di esistenza di un'espressione logaritmica"}
Un'espressione che contiene logaritmi esiste per i valori di $x$ che soddisfano *insieme* queste condizioni:

- l'argomento di ogni logaritmo è strettamente positivo;
- se la base contiene $x$, la base è positiva e diversa da $1$;
- ogni denominatore è diverso da $0$ e ogni radicando di una radice di indice pari è maggiore o uguale a $0$.

Le condizioni si scrivono a sistema, e il dominio è l'insieme delle soluzioni del sistema. Per esempio $f(x) = \ln \left( 4 - x^2 \right) + \log_3 x$ richiede
$$
\begin{cases}
4 - x^2 > 0 \\[4pt]
x > 0
\end{cases}
\iff
\begin{cases}
-2 < x < 2 \\[4pt]
x > 0
\end{cases}
\iff
0 < x < 2 ,
$$
quindi il dominio è $(0, 2)$.
:::

:::esempio{titolo="Una base che contiene l'incognita"}
La funzione $f(x) = \log_x (6 - x)$ ha la variabile nella base. Le condizioni sono
$$
\begin{cases}
x > 0 \\[4pt]
x \neq 1 \\[4pt]
6 - x > 0
\end{cases}
\iff
\begin{cases}
x > 0 \\[4pt]
x \neq 1 \\[4pt]
x < 6
\end{cases}
$$
quindi il dominio è $(0, 1) \cup (1, 6)$. Per esempio $f(2) = \log_2 4 = 2$.

La funzione $g(x) = \sqrt{\ln x}$ richiede invece $x > 0$ e $\ln x \geq 0$. Poiché il logaritmo naturale è crescente e $\ln 1 = 0$, la seconda condizione equivale a $x \geq 1$, quindi il dominio è $[1, +\infty)$.
:::

## Equazioni logaritmiche

:::teorema{#equazioni-elementari titolo="Equazioni logaritmiche elementari"}
Un'**equazione logaritmica** è un'equazione in cui l'incognita compare nell'argomento, o nella base, di un logaritmo. La più semplice ha la forma $\log_a f(x) = c$, con $a > 0$, $a \neq 1$ e $c$ numero reale. Per la definizione di logaritmo
$$
\log_a f(x) = c
\iff
f(x) = a^c .
$$
In questo caso la condizione di esistenza $f(x) > 0$ è soddisfatta da ogni soluzione, perché $a^c > 0$. Per esempio
$$
\log_3 (2x + 1) = 2
\iff
2x + 1 = 9
\iff
x = 4 .
$$
:::

::::teorema{#equazioni-stessa-base titolo="Uguaglianza di due logaritmi con la stessa base"}
Sia $a > 0$ con $a \neq 1$. Per i valori di $x$ per cui $f(x) > 0$ e $g(x) > 0$ vale
$$
\log_a f(x) = \log_a g(x)
\iff
f(x) = g(x) .
$$
Il teorema dà il metodo per le equazioni logaritmiche.

1. Si scrivono a sistema le condizioni di esistenza e si trova il dominio dell'equazione.
2. Con le proprietà dei logaritmi si scrive l'equazione nella forma $\log_a A(x) = \log_a B(x)$.
3. Si risolve l'equazione $A(x) = B(x)$.
4. Si tengono solo le soluzioni che appartengono al dominio.

:::dimostrazione
L'idea è che una funzione strettamente monotona assume valori diversi in punti diversi. Se $f(x) = g(x)$, i due logaritmi hanno lo stesso argomento e quindi sono uguali. Viceversa, se $f(x) \neq g(x)$, per esempio $f(x) < g(x)$, poiché $\log_a$ è strettamente monotona si ha $\log_a f(x) \neq \log_a g(x)$. Perciò i due logaritmi sono uguali solo se gli argomenti sono uguali.
:::
::::

:::esempio{titolo="Un'equazione con la somma di due logaritmi"}
Si risolve $\log_2 (x + 2) + \log_2 (x - 1) = 2$. Le condizioni di esistenza sono
$$
\begin{cases}
x + 2 > 0 \\[4pt]
x - 1 > 0
\end{cases}
\iff
x > 1 .
$$
Per $x > 1$ i due argomenti sono positivi, quindi si applica la proprietà del prodotto, e si scrive $2 = \log_2 4$:
$$
\log_2 \big( (x + 2)(x - 1) \big) = \log_2 4
\iff
x^2 + x - 2 = 4
\iff
x^2 + x - 6 = 0 .
$$
Le soluzioni di $x^2 + x - 6 = 0$ sono $x = 2$ e $x = -3$. Solo $x = 2$ soddisfa $x > 1$, quindi l'equazione ha la sola soluzione $x = 2$. Infatti $\log_2 4 + \log_2 1 = 2 + 0 = 2$.
:::

:::attenzione
Senza le condizioni di esistenza si accetterebbe anche $x = -3$, che non è soluzione, perché per $x = -3$ compaiono $\log_2 (-1)$ e $\log_2 (-4)$, che non esistono. L'equazione $(x + 2)(x - 1) = 4$ ha più soluzioni dell'equazione di partenza perché l'espressione $\log_2 \big( (x + 2)(x - 1) \big)$ esiste anche per $x < -2$, dove i due logaritmi separati non esistono.
:::

:::esempio{#equazioni-sostituzione titolo="Equazioni risolte con una sostituzione"}
Quando l'incognita compare solo attraverso lo stesso logaritmo, si sostituisce il logaritmo con una nuova incognita. Nell'equazione
$$
\left( \log_2 x \right)^2 - \log_2 x - 2 = 0 ,
\qquad
x > 0 ,
$$
si pone $t = \log_2 x$ e si ottiene $t^2 - t - 2 = 0$, che ha soluzioni $t = 2$ e $t = -1$. Si torna poi all'incognita $x$:
$$
\log_2 x = 2 \iff x = 4 ,
\qquad
\log_2 x = -1 \iff x = \frac{1}{2} .
$$
Entrambi i valori sono positivi, quindi le soluzioni sono $x = 4$ e $x = \dfrac{1}{2}$.
:::

:::osservazione{#metodo-grafico titolo="Equazioni risolte con il grafico"}
L'equazione $\log_2 x = 3 - x$ contiene l'incognita sia nell'argomento di un logaritmo sia fuori, e non si risolve con i metodi precedenti. Le sue soluzioni sono le ascisse dei punti comuni ai grafici di $y = \log_2 x$ e $y = 3 - x$. Il primo grafico è crescente e il secondo è decrescente, quindi si incontrano al più in un punto. Per $x = 2$ si ha $\log_2 2 = 1$ e $3 - 2 = 1$, perciò $x = 2$ è l'unica soluzione.

::grafico{f="log(x)/log(2);3-x" punti="2,1,pieno" segmenti="2,0,2,1" xmin=-1 xmax=6 ymin=-3 ymax=4 legenda="y = \log_2 x;y = 3 - x" titolo="Il grafico crescente di $\log_2 x$ e la retta decrescente $y = 3 - x$ si incontrano nel solo punto $(2, 1)$"}

Quando non si trova la soluzione per tentativi, dal grafico si leggono il numero delle soluzioni e gli intervalli in cui stanno; i valori approssimati si calcolano poi con la calcolatrice.
:::

## Equazioni esponenziali risolte con i logaritmi

:::teorema{#esponenziali-con-logaritmi titolo="Equazioni esponenziali risolte con i logaritmi"}
Sia $a > 0$ con $a \neq 1$. Se $b > 0$, per la definizione di logaritmo
$$
a^{f(x)} = b
\iff
f(x) = \log_a b .
$$
Se $b \leq 0$ l'equazione non ha soluzioni, perché $a^{f(x)} > 0$. Per esempio
$$
3^{x - 1} = 5
\iff
x - 1 = \log_3 5
\iff
x = 1 + \log_3 5 \approx 2{,}465 .
$$
Quando i due membri sono potenze con basi diverse, $a^{f(x)} = c^{g(x)}$, entrambi sono positivi, e si applica il logaritmo naturale a entrambi i membri. Per la proprietà del logaritmo di una potenza si ottiene
$$
f(x) \ln a = g(x) \ln c .
$$
:::

:::esempio{titolo="Due basi diverse"}
Si risolve $2^{x + 1} = 5^x$. Applicando il logaritmo naturale ai due membri si ha
$$
\begin{aligned}
(x + 1) \ln 2 &= x \ln 5 \\[6pt]
x \ln 5 - x \ln 2 &= \ln 2 \\[6pt]
x \left( \ln 5 - \ln 2 \right) &= \ln 2 .
\end{aligned}
$$
Poiché $\ln 5 - \ln 2 = \ln \dfrac{5}{2} > 0$, si può dividere, e si ottiene
$$
x = \frac{\ln 2}{\ln \frac{5}{2}} \approx 0{,}756 .
$$
:::

:::esempio{titolo="Sostituzione con un esponenziale"}
Nell'equazione $e^{2x} - e^x - 6 = 0$ si pone $t = e^x$, con $t > 0$, e si osserva che $e^{2x} = \left( e^x \right)^2 = t^2$. Si ottiene
$$
t^2 - t - 6 = 0
\iff
(t - 3)(t + 2) = 0 ,
$$
con soluzioni $t = 3$ e $t = -2$. Il valore $t = -2$ non soddisfa $t > 0$, perché un esponenziale è sempre positivo. Resta $e^x = 3$, quindi l'equazione ha la sola soluzione $x = \ln 3$.
:::

:::esempio{titolo="Tempo di dimezzamento e tempo di raddoppio"}
Nei modelli di decadimento la quantità presente al tempo $t$ è $N(t) = N_0 e^{-k t}$, con $N_0$ quantità iniziale e $k > 0$ costante del modello. Il **tempo di dimezzamento** $T$ è il tempo dopo il quale $N(T) = \dfrac{N_0}{2}$:
$$
e^{-k T} = \frac{1}{2}
\iff
-k T = \ln \frac{1}{2} = -\ln 2
\iff
T = \frac{\ln 2}{k} .
$$
Con $k = 0{,}05$ all'anno si trova $T = \dfrac{\ln 2}{0{,}05} \approx 13{,}9$ anni. Allo stesso modo la quantità si riduce al $10\%$ del valore iniziale dopo $\dfrac{\ln 10}{0{,}05} \approx 46{,}1$ anni.

Per un capitale investito all'interesse composto del $2\%$ annuo, il capitale dopo $t$ anni è $C_0 \cdot 1{,}02^t$. Il capitale raddoppia quando $1{,}02^t = 2$, cioè dopo $t = \dfrac{\ln 2}{\ln 1{,}02} \approx 35{,}0$ anni.
:::

## Disequazioni logaritmiche ed esponenziali

::::teorema{#disequazioni-logaritmiche titolo="Disequazioni logaritmiche"}
Sia $a > 0$ con $a \neq 1$, e siano $f(x) > 0$ e $g(x) > 0$.

- Se $a > 1$, allora $\log_a f(x) < \log_a g(x) \iff f(x) < g(x)$, quindi il verso della disuguaglianza **si conserva**.
- Se $0 < a < 1$, allora $\log_a f(x) < \log_a g(x) \iff f(x) > g(x)$, quindi il verso della disuguaglianza **si inverte**.

Lo stesso vale con $\leq$, $>$ e $\geq$. Per risolvere una disequazione logaritmica si scrive un sistema che contiene le condizioni di esistenza e la disuguaglianza tra gli argomenti. Per esempio, poiché $3 = \log_2 8$,
$$
\log_2 (x - 1) \leq 3
\iff
\begin{cases}
x - 1 > 0 \\[4pt]
x - 1 \leq 8
\end{cases}
\iff
1 < x \leq 9 .
$$

::grafico{f="log(x-1)/log(2);3" punti="9,3,pieno;9,0,pieno;1,0,vuoto" segmenti="9,0,9,3" asintoti="x=1" xmin=-1 xmax=11 ymin=-3 ymax=5 legenda="y = \log_2 (x - 1);y = 3" titolo="Il grafico di $\log_2 (x - 1)$ sta sotto la retta $y = 3$, o la incontra, per $1 < x \leq 9$"}

:::dimostrazione
Sia $a > 1$. Se $f(x) < g(x)$, poiché $\log_a$ è strettamente crescente si ha $\log_a f(x) < \log_a g(x)$. Se invece $f(x) \geq g(x)$, per lo stesso motivo si ha $\log_a f(x) \geq \log_a g(x)$. Perciò la disuguaglianza tra i logaritmi vale esattamente quando vale quella tra gli argomenti. Per $0 < a < 1$ il logaritmo è strettamente decrescente, e lo stesso ragionamento dà le disuguaglianze con il verso invertito.
:::
::::

:::esempio{titolo="Una base minore di 1"}
Si risolve $\log_{\frac{1}{3}} (x + 2) \geq -1$. Poiché $-1 = \log_{\frac{1}{3}} 3$ e la base è minore di $1$, il verso si inverte:
$$
\begin{cases}
x + 2 > 0 \\[4pt]
x + 2 \leq 3
\end{cases}
\iff
\begin{cases}
x > -2 \\[4pt]
x \leq 1
\end{cases}
\iff
-2 < x \leq 1 .
$$
:::

:::attenzione
La condizione di esistenza fa parte del sistema anche nelle disequazioni. Risolvendo solo $x + 2 \leq 3$ si otterrebbe $x \leq 1$, che comprende per esempio $x = -5$; per questo valore l'argomento $x + 2 = -3$ è negativo e $\log_{\frac{1}{3}} (-3)$ non esiste.
:::

:::teorema{#disequazioni-esponenziali titolo="Disequazioni esponenziali risolte con i logaritmi"}
Sia $a > 0$ con $a \neq 1$ e sia $b > 0$.

- Se $a > 1$, allora $a^{f(x)} > b \iff f(x) > \log_a b$.
- Se $0 < a < 1$, allora $a^{f(x)} > b \iff f(x) < \log_a b$.

La regola segue dalla monotonia della funzione logaritmica di base $a$, applicata ai due membri positivi. Se $b \leq 0$, la disequazione $a^{f(x)} > b$ è verificata per ogni $x$ del dominio di $f$, perché $a^{f(x)} > 0$, e la disequazione $a^{f(x)} < b$ non ha soluzioni. Per esempio
$$
5^x > 2 \iff x > \log_5 2 \approx 0{,}431 ,
\qquad
\left( \frac{1}{2} \right)^x \geq 3 \iff x \leq \log_{\frac{1}{2}} 3 = -\log_2 3 .
$$
:::

:::esempio{titolo="Basi diverse in una disequazione"}
Si risolve $3^x < 2^{x + 1}$. I due membri sono positivi e il logaritmo naturale è crescente, quindi la disequazione equivale a
$$
\begin{aligned}
x \ln 3 &< (x + 1) \ln 2 \\[6pt]
x \left( \ln 3 - \ln 2 \right) &< \ln 2 .
\end{aligned}
$$
Il coefficiente $\ln 3 - \ln 2 = \ln \dfrac{3}{2}$ è positivo, perché $\dfrac{3}{2} > 1$, quindi dividendo il verso si conserva:
$$
x < \frac{\ln 2}{\ln \frac{3}{2}} \approx 1{,}710 .
$$
:::

:::esempio{titolo="Un prodotto di logaritmi"}
Si risolve $\ln x \cdot \log_2 (3 - x) > 0$. Le condizioni di esistenza $x > 0$ e $3 - x > 0$ danno il dominio $0 < x < 3$. Si studia il segno di ciascun fattore nel dominio:

- $\ln x > 0 \iff x > 1$;
- $\log_2 (3 - x) > 0 \iff 3 - x > 1 \iff x < 2$.

| | $0 < x < 1$ | $1 < x < 2$ | $2 < x < 3$ |
| --- | --- | --- | --- |
| $\ln x$ | $-$ | $+$ | $+$ |
| $\log_2 (3 - x)$ | $+$ | $+$ | $-$ |
| prodotto | $-$ | $+$ | $-$ |

Il prodotto è positivo quando i due fattori hanno lo stesso segno, quindi la soluzione è $1 < x < 2$. Nei punti $x = 1$ e $x = 2$ il prodotto vale $0$, e per questo sono esclusi.
:::

## Applicazioni: pH, decibel e scala Richter

:::definizione{#ph titolo="pH di una soluzione"}
In una soluzione acquosa la concentrazione degli ioni idrogeno, indicata con $\left[ \mathrm{H}^+ \right]$ e misurata in moli al litro, varia da circa $1$ a circa $10^{-14}$. Per lavorare con numeri semplici si usa il **pH**:
$$
\mathrm{pH} = -\log_{10} \left[ \mathrm{H}^+ \right] ,
\qquad
\text{e quindi}
\qquad
\left[ \mathrm{H}^+ \right] = 10^{-\mathrm{pH}} .
$$
L'acqua pura a $25\,°\mathrm{C}$ ha $\left[ \mathrm{H}^+ \right] = 10^{-7}$ mol/L, quindi pH $7$. Una soluzione con pH minore di $7$ si dice acida, una con pH maggiore di $7$ si dice basica. Per esempio, con $\left[ \mathrm{H}^+ \right] = 2 \cdot 10^{-5}$ mol/L si ha
$$
\mathrm{pH} = -\left( \log_{10} 2 + \log_{10} 10^{-5} \right) = 5 - \log_{10} 2 \approx 4{,}70 .
$$
Per la proprietà del prodotto, se la concentrazione si moltiplica per $10$ il pH diminuisce di $1$.
:::

:::definizione{#decibel titolo="Livello di intensità sonora"}
L'intensità $I$ di un suono si misura in $\mathrm{W/m^2}$. L'orecchio umano percepisce intensità che vanno da $I_0 = 10^{-12}\ \mathrm{W/m^2}$, la soglia di udibilità, fino a circa $1\ \mathrm{W/m^2}$. Il **livello di intensità sonora** si misura in decibel (dB) ed è
$$
L = 10 \log_{10} \frac{I}{I_0} .
$$
Per esempio $I = 10^{-6}\ \mathrm{W/m^2}$ dà $L = 10 \log_{10} 10^{6} = 60$ dB. Per la proprietà del quoziente, due suoni di intensità $I_1$ e $I_2$ hanno livelli che differiscono di
$$
L_2 - L_1 = 10 \log_{10} \frac{I_2}{I_1} .
$$
Se l'intensità si moltiplica per $10$, il livello aumenta di $10$ dB; se l'intensità raddoppia, il livello aumenta di $10 \log_{10} 2 \approx 3$ dB.
:::

:::definizione{#scala-richter titolo="Magnitudo di un terremoto"}
Nella scala Richter la **magnitudo** di un terremoto è
$$
M = \log_{10} \frac{A}{A_0} ,
$$
dove $A$ è l'ampiezza massima registrata dal sismografo a una distanza di riferimento dall'epicentro e $A_0$ è un'ampiezza di riferimento fissata. Per due terremoti, la proprietà del quoziente dà
$$
M_2 - M_1 = \log_{10} \frac{A_2}{A_1} ,
$$
quindi a ogni aumento di $1$ della magnitudo l'ampiezza si moltiplica per $10$. Un terremoto di magnitudo $5$ ha un'ampiezza $10^2 = 100$ volte quella di un terremoto di magnitudo $3$.

L'energia $E$ liberata, in joule, è legata alla magnitudo dalla relazione di Gutenberg e Richter $\log_{10} E = 4{,}8 + 1{,}5\, M$. A un aumento di $1$ della magnitudo corrisponde quindi un'energia $10^{1{,}5} \approx 31{,}6$ volte maggiore.
:::

:::osservazione{titolo="Che cosa hanno in comune le scale logaritmiche"}
Nelle tre scale il logaritmo trasforma i rapporti tra le grandezze in differenze tra i valori della scala. Moltiplicare la grandezza per $10$ corrisponde a sommare una quantità fissa, che è $-1$ per il pH, $10$ dB per il livello sonoro e $1$ per la magnitudo. Per questo motivo le scale logaritmiche si usano per grandezze che vanno da valori molto piccoli a valori molto grandi.
:::
