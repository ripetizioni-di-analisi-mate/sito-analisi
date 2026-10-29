---
titolo: Funzioni e loro proprietà
sommario: Che cos'è una funzione e come si classifica, come se ne trovano il dominio, il segno e le intersezioni con gli assi, che cosa significa che una funzione è pari, dispari, periodica, crescente, iniettiva o suriettiva, come si costruiscono la funzione inversa e la funzione composta, e come si disegnano i grafici delle funzioni elementari e quelli ottenuti con traslazioni, simmetrie, dilatazioni e valore assoluto.
---

## Funzione, dominio e codominio

:::definizione{#funzione titolo="Funzione"}
Siano $A$ e $B$ due insiemi non vuoti. Una **funzione** $f$ da $A$ in $B$ è una legge che associa a *ogni* elemento $x$ di $A$ *uno e un solo* elemento $y$ di $B$. Si scrive $f : A \to B$ e $y = f(x)$. L'insieme $A$ si chiama **dominio** della funzione e l'insieme $B$ si chiama **codominio**. In questo argomento $A$ e $B$ sono insiemi di numeri reali, e si parla di funzioni reali di variabile reale; $x$ è la variabile indipendente e $y$ la variabile dipendente.

Per esempio la legge $f(x) = 2x - 1$, da $\mathbb{R}$ in $\mathbb{R}$, associa al numero $3$ il numero $f(3) = 2 \cdot 3 - 1 = 5$ e al numero $-2$ il numero $f(-2) = -5$. La legge che associa a ogni numero reale $x$ i numeri $y$ tali che $y^2 = x$ *non* è una funzione, perché a $x = 4$ associa due numeri, $2$ e $-2$.
:::

:::definizione{#immagine titolo="Immagine e insieme immagine"}
Sia $f : A \to B$. Il numero $f(x)$ si chiama **immagine** di $x$. Se $y = f(x)$, il numero $x$ si chiama *controimmagine* di $y$. L'insieme di tutte le immagini
$$
f(A) = \{ f(x) \mid x \in A \}
$$
si chiama **insieme immagine** di $f$, ed è contenuto nel codominio.

Per $f : \mathbb{R} \to \mathbb{R}$ con $f(x) = x^2$, l'immagine di $-3$ è $9$, e il numero $9$ ha due controimmagini, $3$ e $-3$. L'insieme immagine è $[0, +\infty)$, perché un quadrato è sempre maggiore o uguale a $0$ e ogni numero $y \geq 0$ è il quadrato di $\sqrt{y}$. Il numero $-1$ appartiene al codominio $\mathbb{R}$ e non ha controimmagini, quindi in questo caso l'insieme immagine è più piccolo del codominio.
:::

:::definizione{#grafico-funzione titolo="Grafico di una funzione"}
Il **grafico** di una funzione $f$ con dominio $A$ è l'insieme dei punti del piano cartesiano di coordinate $\big( x, f(x) \big)$, con $x$ in $A$. Un punto $P(x_0, y_0)$ appartiene al grafico se e *solo se* $x_0$ appartiene al dominio e $y_0 = f(x_0)$. Per $f(x) = x^2 - 3$ il punto $(2, 1)$ appartiene al grafico, perché $2^2 - 3 = 1$, mentre il punto $(1, 1)$ non vi appartiene, perché $1^2 - 3 = -2$.

A ogni $x$ del dominio corrisponde un solo valore $f(x)$, quindi una retta verticale incontra il grafico di una funzione in *al più* un punto. Questa proprietà permette di riconoscere dal disegno se una curva è il grafico di una funzione. La parabola $x = y^2$ è incontrata dalla retta $x = 4$ nei due punti $(4, 2)$ e $(4, -2)$, perciò non è il grafico di una funzione $y = f(x)$. La sua parte con $y \geq 0$, di equazione $y = \sqrt{x}$, è invece il grafico di una funzione.

::grafico{f="sqrt(x)" curve="t^2,t,-3,3" segmenti="4,-3,4,3" punti="4,2,pieno;4,-2,pieno" xmin=-2 xmax=8 ymin=-3 ymax=3 uguale=1 legenda="y = \sqrt{x};x = y^2" titolo="La retta $x = 4$ incontra la parabola $x = y^2$ in due punti, quindi la parabola non è il grafico di una funzione; incontra il grafico di $y = \sqrt{x}$ in un solo punto"}

:::

:::definizione{#classificazione titolo="Funzioni algebriche e funzioni trascendenti"}
Una funzione data con una formula si dice **algebrica** se nella formula la variabile $x$ compare soltanto in addizioni, sottrazioni, moltiplicazioni, divisioni, potenze con esponente intero ed estrazioni di radice. Le funzioni algebriche si distinguono in tre tipi.

- Razionali intere, o polinomiali, se $x$ non compare al denominatore né sotto il segno di radice, come $y = x^3 - 2x + 1$.
- Razionali fratte, se $x$ compare al denominatore e non sotto il segno di radice, come $y = \dfrac{x + 1}{x^2 - 4}$.
- Irrazionali, se $x$ compare sotto il segno di radice, come $y = \sqrt{x - 1}$ oppure $y = \sqrt[3]{x^2 + x}$.

Una funzione che non è algebrica si dice **trascendente**. Sono trascendenti le funzioni esponenziali come $y = 2^{x}$, le logaritmiche come $y = \ln(x + 1)$, le goniometriche come $y = \sin x$, e le funzioni che le contengono, come $y = x\,e^{x}$. Il tipo di funzione indica quali condizioni si devono imporre per trovarne il dominio.
:::

## Ricerca del dominio

:::definizione{#dominio titolo="Dominio naturale"}
Quando una funzione è data soltanto con la sua formula $y = f(x)$, il suo dominio è l'insieme dei numeri reali $x$ per i quali la formula dà come risultato un numero reale. Questo insieme si chiama **dominio naturale**, o campo di esistenza, e si indica con $D$. Le condizioni da imporre sono le seguenti.

- Ogni denominatore è diverso da $0$.
- Il radicando di una radice di indice pari è maggiore o uguale a $0$. Le radici di indice dispari non pongono condizioni.
- L'argomento di un logaritmo è maggiore di $0$.
- In una potenza $\big( f(x) \big)^{g(x)}$ con l'esponente che dipende da $x$, la base è maggiore di $0$.
- L'argomento di $\tan x$ è diverso da $\dfrac{\pi}{2} + k\pi$, con $k$ intero; l'argomento di $\arcsin x$ e di $\arccos x$ è compreso tra $-1$ e $1$.

I polinomi, gli esponenziali con base costante positiva, il seno, il coseno e l'arcotangente sono definiti per ogni $x$ reale. Quando le condizioni sono più di una, devono essere soddisfatte tutte insieme, quindi si risolve un sistema e il dominio è l'intersezione delle soluzioni. Per esempio $y = \dfrac{1}{x - 2}$ ha dominio $D = \mathbb{R} \setminus \{2\}$, e $y = \sqrt{6 - 2x}$ ha dominio $D = (-\infty, 3]$, perché $6 - 2x \geq 0$ equivale a $x \leq 3$.
:::

:::esempio{titolo="Dominio di una funzione irrazionale fratta"}
Per $f(x) = \dfrac{\sqrt{x + 3}}{x^2 - 1}$ la radice quadrata richiede $x + 3 \geq 0$ e il denominatore richiede $x^2 - 1 \neq 0$. Le due condizioni devono valere insieme, perciò si risolve il sistema
$$
\begin{cases}
x + 3 \geq 0 \\[4pt]
x^2 - 1 \neq 0
\end{cases}
\iff
\begin{cases}
x \geq -3 \\[4pt]
x \neq -1, \quad x \neq 1 .
\end{cases}
$$
Il dominio è quindi $D = [-3, -1) \cup (-1, 1) \cup (1, +\infty)$. Il numero $-3$ appartiene al dominio, perché $f(-3) = \dfrac{\sqrt{0}}{8} = 0$.
:::

:::esempio{titolo="Dominio di una funzione logaritmica"}
Per $f(x) = \ln \dfrac{x - 1}{x + 2}$ l'argomento del logaritmo deve essere positivo, quindi si risolve la disequazione fratta $\dfrac{x - 1}{x + 2} > 0$. Il numeratore è positivo per $x > 1$ e il denominatore è positivo per $x > -2$. Una frazione è positiva quando numeratore e denominatore hanno lo stesso segno, e questo accade per $x < -2$ e per $x > 1$. Il dominio è perciò $D = (-\infty, -2) \cup (1, +\infty)$. Il numero $-2$ è escluso anche perché annulla il denominatore.
:::

:::attenzione
Le proprietà dei logaritmi valgono soltanto quando gli argomenti sono positivi, perciò una formula trasformata con queste proprietà può avere un dominio diverso da quello della formula data. La funzione $f(x) = \ln \left( x^2 \right)$ ha dominio $\mathbb{R} \setminus \{0\}$, perché $x^2 > 0$ per ogni $x \neq 0$, mentre la funzione $g(x) = 2 \ln x$ ha dominio $(0, +\infty)$. Per esempio $f(-1) = \ln 1 = 0$, mentre $g(-1)$ *non* esiste. Le due funzioni sono quindi diverse, anche se $\ln \left( x^2 \right) = 2 \ln x$ per ogni $x > 0$.
:::

## Segno e intersezioni con gli assi

:::definizione{#segno-intersezioni titolo="Zeri, segno e intersezioni con gli assi"}
Sia $f$ una funzione con dominio $D$. Un numero $x_0$ di $D$ si chiama **zero** di $f$ se $f(x_0) = 0$. Gli zeri sono le ascisse dei punti in cui il grafico interseca l'asse $x$, e si trovano risolvendo l'equazione $f(x) = 0$. Se $0$ appartiene a $D$, il grafico interseca l'asse $y$ nel punto $\big( 0, f(0) \big)$, e solo in quello, perché a $x = 0$ corrisponde un solo valore.

Studiare il **segno** di $f$ significa trovare per quali $x$ di $D$ si ha $f(x) > 0$, cioè il grafico sta sopra l'asse $x$, e per quali si ha $f(x) < 0$, cioè il grafico sta sotto l'asse $x$. Per $f(x) = x^2 - 4$ gli zeri sono $-2$ e $2$ e l'intersezione con l'asse $y$ è il punto $(0, -4)$. La parabola ha la concavità verso l'alto, quindi la funzione è positiva per $x < -2$ e per $x > 2$, ed è negativa per $-2 < x < 2$.
:::

:::esempio{titolo="Segno di una funzione razionale fratta"}
Si studia la funzione $f(x) = \dfrac{x^2 - x - 2}{x - 3}$, che ha dominio $D = \mathbb{R} \setminus \{3\}$. Il numeratore si scompone in $(x + 1)(x - 2)$, quindi gli zeri sono $-1$ e $2$, e il grafico interseca l'asse $x$ nei punti $(-1, 0)$ e $(2, 0)$. Poiché $f(0) = \dfrac{-2}{-3} = \dfrac{2}{3}$, il grafico interseca l'asse $y$ nel punto $\left( 0, \dfrac{2}{3} \right)$.

Il segno della frazione si ricava dal segno dei tre fattori, riportato nella tabella. In ogni intervallo il segno di $f$ è il prodotto dei segni della colonna.

| | $x < -1$ | $-1 < x < 2$ | $2 < x < 3$ | $x > 3$ |
| --- | --- | --- | --- | --- |
| $x + 1$ | $-$ | $+$ | $+$ | $+$ |
| $x - 2$ | $-$ | $-$ | $+$ | $+$ |
| $x - 3$ | $-$ | $-$ | $-$ | $+$ |
| $f(x)$ | $-$ | $+$ | $-$ | $+$ |

La funzione è quindi positiva per $-1 < x < 2$ e per $x > 3$, ed è negativa per $x < -1$ e per $2 < x < 3$. Nel grafico la retta $x = 3$ separa due parti della curva, perché il numero $3$ non appartiene al dominio.

::grafico{f="(x^2-x-2)/(x-3)" punti="-1,0,pieno;2,0,pieno;0,0.667,pieno" asintoti="x=3" xmin=-4 xmax=8 ymin=-12 ymax=18 titolo="Il grafico di $f(x) = \dfrac{x^2 - x - 2}{x - 3}$ sta sopra l'asse $x$ per $-1 < x < 2$ e per $x > 3$, e sotto l'asse $x$ negli altri intervalli del dominio"}

:::

## Funzioni pari, dispari e periodiche

:::definizione{#funzioni-pari-dispari titolo="Funzioni pari e funzioni dispari"}
Sia $f$ una funzione il cui dominio $D$ è simmetrico rispetto a $0$, cioè tale che $-x$ appartiene a $D$ per ogni $x$ di $D$. La funzione si dice

- **pari** se $f(-x) = f(x)$ per ogni $x$ di $D$;
- **dispari** se $f(-x) = -f(x)$ per ogni $x$ di $D$.

Il grafico di una funzione pari è simmetrico rispetto all'asse $y$, perché insieme al punto $(x, y)$ contiene il punto $(-x, y)$. Il grafico di una funzione dispari è simmetrico rispetto all'origine, perché insieme al punto $(x, y)$ contiene il punto $(-x, -y)$. Sono pari $x^2$, $x^4$, $|x|$ e $\cos x$; sono dispari $x$, $x^3$, $\dfrac{1}{x}$ e $\sin x$. Una funzione dispari definita in $0$ vale $0$ in $0$, perché $f(0) = -f(0)$. Quando una funzione è pari o dispari, basta studiarla per $x \geq 0$ e ottenere il resto del grafico per simmetria.
:::

:::esempio{titolo="Riconoscere una funzione pari o dispari"}
- La funzione $f(x) = x^3 - 4x$ è definita su $\mathbb{R}$, e $f(-x) = (-x)^3 - 4\,(-x) = -x^3 + 4x = -f(x)$. Quindi $f$ è **dispari**.
- La funzione $g(x) = \dfrac{x^2}{x^2 + 1}$ è definita su $\mathbb{R}$, e $g(-x) = \dfrac{(-x)^2}{(-x)^2 + 1} = \dfrac{x^2}{x^2 + 1} = g(x)$. Quindi $g$ è pari.
- Per la funzione $h(x) = x^2 + x$ si ha $h(1) = 2$ e $h(-1) = 0$. Poiché $h(-1) \neq h(1)$, la funzione non è pari, e poiché $h(-1) \neq -h(1)$, non è nemmeno dispari.
:::

:::attenzione
Una funzione che vale $0$ in $0$ può non essere dispari. Per $f(x) = x^2 - 2x$ si ha $f(0) = 0$, ma $f(1) = -1$ e $f(-1) = 3$. Poiché $f(-1) \neq -f(1)$, la funzione *non* è dispari.
:::

:::definizione{#funzioni-periodiche titolo="Funzioni periodiche"}
Una funzione $f$ con dominio $D$ si dice **periodica** se esiste un numero $T > 0$ tale che, per ogni $x$ di $D$, anche $x + T$ appartiene a $D$ e
$$
f(x + T) = f(x) .
$$
Il più piccolo numero $T > 0$ con questa proprietà si chiama **periodo** della funzione. Il grafico di una funzione periodica si ripete uguale in ogni intervallo di ampiezza $T$, quindi basta disegnarlo in un intervallo come $[0, T]$ e poi ripeterlo. Le funzioni $\sin x$ e $\cos x$ hanno periodo $2\pi$, e la funzione $\tan x$ ha periodo $\pi$.

Un altro esempio è la funzione *mantissa* $y = x - [x]$, dove $[x]$ è la parte intera di $x$, cioè il più grande numero intero minore o uguale a $x$. Per esempio $[2{,}7] = 2$ e $[-0{,}5] = -1$, quindi la mantissa vale $0{,}7$ in $2{,}7$ e vale $0{,}5$ in $-0{,}5$. Questa funzione ha periodo $1$.

::grafico{linee="-3,0 -2,1;-2,0 -1,1;-1,0 0,1;0,0 1,1;1,0 2,1;2,0 3,1" punti="-3,0,pieno;-2,0,pieno;-1,0,pieno;0,0,pieno;1,0,pieno;2,0,pieno;-2,1,vuoto;-1,1,vuoto;0,1,vuoto;1,1,vuoto;2,1,vuoto;3,1,vuoto" xmin=-3 xmax=3 ymin=-1 ymax=2 uguale=1 titolo="La mantissa $y = x - [x]$ è periodica di periodo $1$, quindi il grafico tra $0$ e $1$ si ripete uguale in ogni intervallo tra due interi consecutivi"}

:::

:::teorema{#periodo-sin-kx titolo="Periodo delle funzioni goniometriche con argomento kx"}
Sia $k > 0$. Le funzioni $\sin (kx)$ e $\cos (kx)$ hanno periodo $\dfrac{2\pi}{k}$, e la funzione $\tan (kx)$ ha periodo $\dfrac{\pi}{k}$. Per il seno questo segue dal calcolo
$$
\sin \left( k \left( x + \frac{2\pi}{k} \right) \right) = \sin (kx + 2\pi) = \sin (kx) ,
$$
e allo stesso modo si ragiona per il coseno e la tangente. Per esempio $\sin (3x)$ ha periodo $\dfrac{2\pi}{3}$, e $\tan \dfrac{x}{2}$ ha periodo $\dfrac{\pi}{\frac{1}{2}} = 2\pi$.

Se due funzioni periodiche hanno periodi $T_1$ e $T_2$ e un numero $T$ è multiplo sia di $T_1$ sia di $T_2$, allora anche la loro somma soddisfa l'uguaglianza $f(x + T) = f(x)$. La funzione $y = \sin (2x) + \cos (3x)$ è somma di due funzioni di periodi $\pi$ e $\dfrac{2\pi}{3}$. Il numero $2\pi$ è uguale a $2 \cdot \pi$ e a $3 \cdot \dfrac{2\pi}{3}$, ed è il più piccolo multiplo comune dei due periodi; in questo caso $2\pi$ è proprio il periodo della somma.
:::

## Funzioni crescenti e decrescenti

:::definizione{#funzioni-monotone titolo="Funzioni crescenti e decrescenti"}
Sia $f$ definita in un intervallo $I$. La funzione si dice

- **crescente** in $I$ se, per ogni $x_1$ e $x_2$ di $I$ con $x_1 < x_2$, si ha $f(x_1) < f(x_2)$;
- **decrescente** in $I$ se, per ogni $x_1$ e $x_2$ di $I$ con $x_1 < x_2$, si ha $f(x_1) > f(x_2)$.

Una funzione crescente conserva quindi l'ordine dei numeri, e una funzione decrescente lo inverte. Nel grafico, percorso da sinistra verso destra, una funzione crescente sale e una funzione decrescente scende. Quando le disuguaglianze tra i valori sono larghe, $f(x_1) \leq f(x_2)$ oppure $f(x_1) \geq f(x_2)$, la funzione si dice crescente o decrescente *in senso lato*; per distinguerla, la funzione della definizione si dice anche strettamente crescente o strettamente decrescente. Una funzione crescente oppure decrescente in $I$ si dice **monotona** in $I$.

Per esempio $f(x) = 3x - 2$ è crescente in $\mathbb{R}$. Infatti, se $x_1 < x_2$, moltiplicando per $3$ si ottiene $3x_1 < 3x_2$, e sottraendo $2$ si ottiene $f(x_1) < f(x_2)$. Nell'argomento sui teoremi del calcolo differenziale gli intervalli in cui una funzione è crescente o decrescente si ricavano dal segno della derivata.
:::

:::esempio{titolo="Monotonia della funzione reciproco"}
La funzione $f(x) = \dfrac{1}{x}$ è decrescente nell'intervallo $(0, +\infty)$. Siano $0 < x_1 < x_2$. Allora
$$
f(x_1) - f(x_2) = \frac{1}{x_1} - \frac{1}{x_2} = \frac{x_2 - x_1}{x_1\,x_2} > 0 ,
$$
perché il numeratore e il denominatore sono positivi. Quindi $f(x_1) > f(x_2)$. Con lo stesso calcolo si verifica che $f$ è decrescente anche in $(-\infty, 0)$, perché per $x_1 < x_2 < 0$ il prodotto $x_1\,x_2$ è ancora positivo.
:::

:::attenzione
Una funzione decrescente in due intervalli separati può non essere decrescente nella loro unione. La funzione $\dfrac{1}{x}$ è decrescente in $(-\infty, 0)$ e in $(0, +\infty)$, ma $-1 < 1$ e $f(-1) = -1 < 1 = f(1)$. Perciò $\dfrac{1}{x}$ *non* è decrescente nel suo dominio $\mathbb{R} \setminus \{0\}$.
:::

## Funzioni iniettive, suriettive e biiettive

:::definizione{#iniettiva-suriettiva titolo="Funzioni iniettive, suriettive e biiettive"}
Sia $f : A \to B$.

- $f$ è **iniettiva** se a elementi diversi di $A$ corrispondono immagini diverse, cioè se $x_1 \neq x_2$ implica $f(x_1) \neq f(x_2)$. In modo equivalente, ogni elemento di $B$ ha *al più* una controimmagine.
- $f$ è **suriettiva** se ogni elemento di $B$ ha *almeno* una controimmagine, cioè se l'insieme immagine coincide con il codominio.
- $f$ è **biiettiva**, o biunivoca, se è iniettiva e suriettiva, cioè se ogni elemento di $B$ ha *una e una sola* controimmagine.

Nel grafico, $f$ è iniettiva se ogni retta orizzontale $y = k$, con $k$ in $B$, incontra il grafico in al più un punto, ed è suriettiva se ogni retta di questo tipo lo incontra in almeno un punto. La funzione $f : \mathbb{R} \to \mathbb{R}$ con $f(x) = x^2$ non è iniettiva, perché $f(-2) = f(2) = 4$, e non è suriettiva, perché il numero $-1$ non è il quadrato di alcun numero reale. La stessa formula, con dominio e codominio $[0, +\infty)$, definisce una funzione biiettiva. Le tre proprietà dipendono quindi dal dominio e dal codominio scelti, e servono per stabilire se una funzione ha l'inversa.

::grafico{f="x^2;4" punti="-2,4,pieno;2,4,pieno" xmin=-4 xmax=4 ymin=-2 ymax=8 legenda="y = x^2;y = 4" titolo="La retta $y = 4$ incontra il grafico di $y = x^2$ in due punti, quindi la funzione $x^2$ non è iniettiva su $\mathbb{R}$; le rette $y = k$ con $k < 0$ non lo incontrano"}

:::

:::teorema{#monotona-iniettiva titolo="Le funzioni monotone sono iniettive"}
Se $f$ è crescente oppure decrescente in un intervallo $I$, allora $f$ è iniettiva in $I$. Infatti, se $x_1 \neq x_2$, uno dei due numeri è minore dell'altro, per esempio $x_1 < x_2$. Se $f$ è crescente si ha allora $f(x_1) < f(x_2)$, e se è decrescente si ha $f(x_1) > f(x_2)$; in entrambi i casi $f(x_1) \neq f(x_2)$.

Il teorema permette di stabilire l'iniettività senza risolvere equazioni. Per esempio $y = x^3$ e $y = 2^{x}$ sono crescenti in $\mathbb{R}$, quindi sono iniettive in $\mathbb{R}$.
:::

:::attenzione
Una funzione iniettiva può non essere monotona. La funzione $\dfrac{1}{x}$ è iniettiva nel suo dominio, perché $\dfrac{1}{x_1} = \dfrac{1}{x_2}$ implica $x_1 = x_2$, ma *non* è monotona in $\mathbb{R} \setminus \{0\}$. Non è decrescente, perché $-1 < 1$ e $f(-1) = -1 < 1 = f(1)$, e non è crescente, perché $1 < 2$ e $f(1) = 1 > \dfrac{1}{2} = f(2)$.
:::

## Funzione inversa e funzione composta

:::definizione{#funzione-inversa titolo="Funzione inversa"}
Sia $f : A \to B$ biiettiva. Allora ogni $y$ di $B$ ha una e una sola controimmagine $x$ in $A$. La **funzione inversa** di $f$ è la funzione $f^{-1} : B \to A$ che associa a ogni $y$ di $B$ questa controimmagine:
$$
f^{-1}(y) = x \iff f(x) = y .
$$
Per trovare l'espressione di $f^{-1}$ si risolve l'equazione $y = f(x)$ rispetto a $x$; poi si scambiano i nomi delle due lettere, così che la variabile indipendente si chiami di nuovo $x$. Per $f(x) = 2x + 6$, da $\mathbb{R}$ in $\mathbb{R}$, dall'equazione $y = 2x + 6$ si ricava $x = \dfrac{y - 6}{2}$, quindi
$$
f^{-1}(x) = \frac{x - 6}{2} .
$$
Come controllo, $f(1) = 8$ e $f^{-1}(8) = \dfrac{8 - 6}{2} = 1$. Applicando prima $f$ e poi $f^{-1}$ si ritorna sempre al numero di partenza.
:::

:::attenzione
Il simbolo $f^{-1}$ indica la funzione inversa, che è diversa dal reciproco $\dfrac{1}{f(x)}$. Per $f(x) = 2x + 6$ si ha $f^{-1}(8) = 1$, mentre $\dfrac{1}{f(8)} = \dfrac{1}{22}$.
:::

:::teorema{#grafico-inversa titolo="Grafico della funzione inversa"}
Il grafico di $f^{-1}$ è il simmetrico del grafico di $f$ rispetto alla bisettrice del primo e del terzo quadrante, cioè la retta $y = x$. Infatti il punto $(a, b)$ appartiene al grafico di $f$ se e solo se $f(a) = b$, cioè se e solo se $f^{-1}(b) = a$, e questo significa che il punto $(b, a)$ appartiene al grafico di $f^{-1}$. I punti $(a, b)$ e $(b, a)$ sono simmetrici rispetto alla retta $y = x$.

La funzione $f(x) = x^2$, con dominio e codominio $[0, +\infty)$, è biiettiva, e dall'equazione $y = x^2$ con $x \geq 0$ si ricava $x = \sqrt{y}$. Quindi $f^{-1}(x) = \sqrt{x}$. Il punto $(2, 4)$ appartiene al grafico di $x^2$ e il punto $(4, 2)$ appartiene al grafico di $\sqrt{x}$.

::grafico{f="x^2+0*sqrt(x);sqrt(x)" punti="2,4,pieno;4,2,pieno" segmenti="-1,-1,5,5;2,4,4,2" xmin=-1 xmax=5 ymin=-1 ymax=5 uguale=1 legenda="y = x^2 \text{ con } x \geq 0;y = \sqrt{x}" titolo="I grafici di $y = x^2$ con $x \geq 0$ e della sua inversa $y = \sqrt{x}$ sono simmetrici rispetto alla retta $y = x$; i punti $(2, 4)$ e $(4, 2)$ si corrispondono nella simmetria"}

:::

:::osservazione{#restrizione titolo="Inversa di una restrizione"}
Una funzione non iniettiva non ha inversa, ma la sua restrizione a un intervallo in cui è monotona è iniettiva, per il teorema sulle funzioni monotone. Restringendo anche il codominio all'insieme immagine si ottiene una funzione biiettiva, che ha l'inversa.

- $y = x^2$ ristretta a $[0, +\infty)$ ha per inversa $y = \sqrt{x}$.
- $y = \sin x$ ristretta a $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, con codominio $[-1, 1]$, ha per inversa $y = \arcsin x$. Per esempio $\arcsin \dfrac{1}{2} = \dfrac{\pi}{6}$, perché $\sin \dfrac{\pi}{6} = \dfrac{1}{2}$ e $\dfrac{\pi}{6}$ appartiene all'intervallo.
- $y = \tan x$ ristretta a $\left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$ ha per inversa $y = \arctan x$, definita su $\mathbb{R}$.
:::

:::definizione{#funzione-composta titolo="Funzione composta"}
Siano $f$ e $g$ due funzioni. La **funzione composta** $f \circ g$, che si legge «$f$ composto $g$», si ottiene applicando prima $g$ e poi $f$:
$$
(f \circ g)(x) = f\big( g(x) \big) .
$$
La funzione $g$ si chiama funzione interna e $f$ funzione esterna. Il dominio di $f \circ g$ è formato dai numeri $x$ del dominio di $g$ per i quali $g(x)$ appartiene al dominio di $f$.

Per $f(x) = \sqrt{x}$ e $g(x) = x - 1$ si ha $(f \circ g)(x) = \sqrt{x - 1}$, con dominio $[1, +\infty)$, e $(g \circ f)(x) = \sqrt{x} - 1$, con dominio $[0, +\infty)$. Le due composte sono diverse, quindi l'ordine in cui si compongono le funzioni cambia il risultato. Una funzione come $y = \ln \left( x^2 + 1 \right)$ si scrive come composta di $g(x) = x^2 + 1$ e $f(x) = \ln x$; questa scomposizione serve per calcolarne la derivata, come si vede nell'argomento sulle derivate.
:::

## Grafici delle funzioni elementari

:::definizione{#potenze-radici titolo="Potenze e radici"}
Sia $n$ un numero naturale con $n \geq 2$. La funzione potenza $y = x^n$ è definita su $\mathbb{R}$ e il suo grafico passa per $(0, 0)$ e per $(1, 1)$.

- Se $n$ è pari, la funzione è pari, è decrescente in $(-\infty, 0]$ e crescente in $[0, +\infty)$, e ha insieme immagine $[0, +\infty)$. Il grafico passa per $(-1, 1)$.
- Se $n$ è dispari, la funzione è dispari, è crescente in $\mathbb{R}$ e ha insieme immagine $\mathbb{R}$. Il grafico passa per $(-1, -1)$.

Per $0 < x < 1$ le potenze diminuiscono al crescere dell'esponente, e per $x > 1$ aumentano. Per esempio $0{,}5^2 = 0{,}25$ e $0{,}5^3 = 0{,}125$, mentre $2^2 = 4$ e $2^3 = 8$.

La funzione **radice** $y = \sqrt[n]{x}$ è l'inversa della potenza $x^n$. Se $n$ è pari, la radice è definita in $[0, +\infty)$ ed è l'inversa di $x^n$ ristretta a $[0, +\infty)$; se $n$ è dispari, la radice è definita su $\mathbb{R}$. Per esempio $\sqrt[3]{-8} = -2$, perché $(-2)^3 = -8$. La funzione $y = \dfrac{1}{x}$ ha dominio $\mathbb{R} \setminus \{0\}$ e il suo grafico è un'iperbole equilatera con centro nell'origine.

::grafico{f="x^2;x^3" punti="1,1,pieno;-1,1,pieno;-1,-1,pieno;0,0,pieno" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda="y = x^2;y = x^3" titolo="I grafici di $y = x^2$, pari, e di $y = x^3$, dispari; tra $0$ e $1$ il cubo è minore del quadrato, oltre $1$ è maggiore"}

:::

:::definizione{#esponenziali-logaritmi titolo="Funzioni esponenziali e logaritmiche"}
Sia $a > 0$ con $a \neq 1$. La funzione **esponenziale** $y = a^{x}$ è definita su $\mathbb{R}$, ha insieme immagine $(0, +\infty)$ e il suo grafico passa per $(0, 1)$ e per $(1, a)$. È crescente se $a > 1$ ed è decrescente se $0 < a < 1$.

La funzione **logaritmica** $y = \log_a x$ è l'inversa dell'esponenziale di base $a$. È definita in $(0, +\infty)$, ha insieme immagine $\mathbb{R}$ e il suo grafico passa per $(1, 0)$ e per $(a, 1)$. È crescente se $a > 1$ ed è decrescente se $0 < a < 1$. Per il teorema sul grafico della funzione inversa, i grafici di $a^{x}$ e di $\log_a x$ sono simmetrici rispetto alla retta $y = x$. La base più usata è il numero $e \approx 2{,}718$, e il logaritmo in base $e$ si indica con $\ln x$.

Per esempio $2^{3} = 8$ e $2^{-1} = \dfrac{1}{2}$; quindi $\log_2 8 = 3$ e $\log_2 \dfrac{1}{2} = -1$.

::grafico{f="2^x;log(x)/log(2)" punti="0,1,pieno;1,2,pieno;1,0,pieno;2,1,pieno" segmenti="-3,-3,5,5" xmin=-3 xmax=5 ymin=-3 ymax=5 uguale=1 legenda="y = 2^{x};y = \log_2 x" titolo="I grafici di $y = 2^{x}$ e di $y = \log_2 x$ sono simmetrici rispetto alla retta $y = x$, e al punto $(1, 2)$ del primo corrisponde il punto $(2, 1)$ del secondo"}

:::

:::definizione{#funzioni-goniometriche titolo="Funzioni goniometriche"}
Con $x$ misurato in radianti, le funzioni $y = \sin x$ e $y = \cos x$ sono definite su $\mathbb{R}$, hanno insieme immagine $[-1, 1]$ e periodo $2\pi$. Il seno è dispari e si annulla nei punti $x = k\pi$; il coseno è pari e si annulla nei punti $x = \dfrac{\pi}{2} + k\pi$, con $k$ intero.

La funzione $y = \tan x$ è definita per $x \neq \dfrac{\pi}{2} + k\pi$, ha insieme immagine $\mathbb{R}$ e periodo $\pi$; è dispari e si annulla nei punti $x = k\pi$. Per esempio $\sin \dfrac{\pi}{6} = \dfrac{1}{2}$, $\cos \pi = -1$ e $\tan \dfrac{\pi}{4} = 1$.

Per ogni $x$ vale $\cos x = \sin \left( x + \dfrac{\pi}{2} \right)$, quindi il grafico del coseno si ottiene da quello del seno con una traslazione di $\dfrac{\pi}{2}$ verso sinistra.

::grafico{f="sin(x);cos(x)" punti="0,0,pieno;1.571,1,pieno;0,1,pieno" xmin=-8 xmax=8 ymin=-2 ymax=2 legenda="y = \sin x;y = \cos x" titolo="I grafici di $y = \sin x$ e $y = \cos x$ hanno periodo $2\pi$; il massimo del seno in $x = \dfrac{\pi}{2}$ corrisponde al massimo del coseno in $x = 0$"}

:::

## Trasformazioni geometriche dei grafici

:::teorema{#traslazioni titolo="Traslazioni"}
Sia $y = f(x)$ una funzione e siano $a$ e $b$ due numeri reali.

- Il grafico di $y = f(x - a)$ si ottiene traslando il grafico di $f$ in orizzontale di $a$, verso destra se $a > 0$ e verso sinistra se $a < 0$.
- Il grafico di $y = f(x) + b$ si ottiene traslando il grafico di $f$ in verticale di $b$, verso l'alto se $b > 0$ e verso il basso se $b < 0$.

Per la prima regola, se il punto $(x_0, y_0)$ appartiene al grafico di $f$, allora il punto $(x_0 + a, y_0)$ appartiene al grafico di $f(x - a)$, perché $f\big( (x_0 + a) - a \big) = f(x_0) = y_0$. Per la seconda regola basta aggiungere $b$ a ogni ordinata.

Per esempio, completando il quadrato, $y = x^2 - 4x + 5 = (x - 2)^2 + 1$. Il grafico è quindi la parabola $y = x^2$ traslata di $2$ verso destra e di $1$ verso l'alto, e il vertice è il punto $(2, 1)$.

::grafico{f="x^2;(x-2)^2+1" punti="0,0,pieno;2,1,pieno,V" vettori="0,0,2,1" xmin=-3 xmax=5 ymin=-1 ymax=7 legenda="y = x^2;y = (x - 2)^2 + 1" titolo="La parabola $y = (x - 2)^2 + 1$ si ottiene da $y = x^2$ con la traslazione che porta l'origine nel vertice $V(2, 1)$"}

:::

:::attenzione
Nella traslazione orizzontale il segno dentro l'argomento è opposto al verso dello spostamento. Il grafico di $y = \sqrt{x + 3}$ è quello di $\sqrt{x}$ traslato di $3$ verso *sinistra*, perché $x + 3 = x - (-3)$; infatti il suo dominio è $[-3, +\infty)$ e il grafico parte dal punto $(-3, 0)$.
:::

:::teorema{#simmetrie titolo="Simmetrie rispetto agli assi e all'origine"}
Sia $y = f(x)$ una funzione.

- Il grafico di $y = f(-x)$ è il simmetrico del grafico di $f$ rispetto all'asse $y$.
- Il grafico di $y = -f(x)$ è il simmetrico del grafico di $f$ rispetto all'asse $x$.
- Il grafico di $y = -f(-x)$ è il simmetrico del grafico di $f$ rispetto all'origine.

Infatti, se $(x_0, y_0)$ appartiene al grafico di $f$, i punti $(-x_0, y_0)$, $(x_0, -y_0)$ e $(-x_0, -y_0)$ appartengono rispettivamente ai tre grafici. Per esempio $y = 2^{-x} = \left( \dfrac{1}{2} \right)^{x}$ ha per grafico il simmetrico di quello di $2^{x}$ rispetto all'asse $y$; il punto $(1, 2)$ del grafico di $2^{x}$ corrisponde al punto $(-1, 2)$, perché $2^{-(-1)} = 2$. Il grafico di $y = -\ln x$ è il simmetrico di quello di $\ln x$ rispetto all'asse $x$.
:::

:::teorema{#dilatazioni titolo="Dilatazioni"}
Sia $y = f(x)$ una funzione e sia $k > 0$.

- Il grafico di $y = k\,f(x)$ si ottiene moltiplicando per $k$ le ordinate dei punti del grafico di $f$. Per $k > 1$ si ha una dilatazione verticale, per $0 < k < 1$ una contrazione verticale.
- Il grafico di $y = f(kx)$ si ottiene dividendo per $k$ le ascisse dei punti del grafico di $f$. Per $k > 1$ si ha una contrazione orizzontale, per $0 < k < 1$ una dilatazione orizzontale.

La seconda regola segue dal fatto che, se $(x_0, y_0)$ appartiene al grafico di $f$, allora $f\left( k \cdot \dfrac{x_0}{k} \right) = f(x_0) = y_0$, quindi il punto $\left( \dfrac{x_0}{k}, y_0 \right)$ appartiene al grafico di $f(kx)$. Per esempio $y = 3 \sin x$ ha insieme immagine $[-3, 3]$ e periodo $2\pi$, mentre $y = \sin (2x)$ ha insieme immagine $[-1, 1]$ e periodo $\pi$. Il massimo di $\sin x$ in $x = \dfrac{\pi}{2}$ diventa per $\sin (2x)$ il massimo in $x = \dfrac{\pi}{4}$.

::grafico{f="sin(x);sin(2*x)" punti="1.571,1,pieno;0.785,1,pieno" xmin=-1 xmax=7 ymin=-2 ymax=2 legenda="y = \sin x;y = \sin (2x)" titolo="Il grafico di $y = \sin (2x)$ si ottiene da quello di $y = \sin x$ dimezzando le ascisse, quindi il periodo passa da $2\pi$ a $\pi$"}

:::

:::teorema{#valore-assoluto titolo="Grafici con il valore assoluto"}
Sia $y = f(x)$ una funzione.

- Il grafico di $y = |f(x)|$ coincide con quello di $f$ dove $f(x) \geq 0$; dove $f(x) < 0$ è il simmetrico del grafico di $f$ rispetto all'asse $x$. La ragione è la definizione di valore assoluto, perché $|f(x)| = f(x)$ se $f(x) \geq 0$ e $|f(x)| = -f(x)$ se $f(x) < 0$.
- Il grafico di $y = f(|x|)$ coincide con quello di $f$ per $x \geq 0$. La funzione $f(|x|)$ è pari, perché $|-x| = |x|$, quindi per $x < 0$ il grafico è il simmetrico rispetto all'asse $y$ della parte con $x \geq 0$.

Per esempio $f(x) = x^2 - 4x + 3 = (x - 1)(x - 3)$ è negativa per $1 < x < 3$, con il minimo $-1$ nel vertice $(2, -1)$. Nel grafico di $y = \left| x^2 - 4x + 3 \right|$ l'arco tra $1$ e $3$ è sostituito dal suo simmetrico rispetto all'asse $x$, e il vertice diventa il punto $(2, 1)$. Il grafico di $y = x^2 - 4|x| + 3$ coincide invece con la parabola per $x \geq 0$ e, per simmetria, interseca l'asse $x$ nei quattro punti di ascissa $-3$, $-1$, $1$ e $3$.

::grafico{f="abs(x^2-4*x+3);x^2-4*x+3" punti="2,1,pieno;2,-1,vuoto;1,0,pieno;3,0,pieno" xmin=-2 xmax=6 ymin=-2 ymax=6 legenda="y = \left| x^2 - 4x + 3 \right|;y = x^2 - 4x + 3" titolo="Il grafico di $y = \left| x^2 - 4x + 3 \right|$ si ottiene da quello della parabola sostituendo l'arco tra $x = 1$ e $x = 3$, che sta sotto l'asse $x$, con il suo simmetrico"}

:::

:::esempio{titolo="Una successione di trasformazioni"}
Si disegna il grafico di $y = \left| \ln (x - 1) \right|$ partendo dal grafico di $\ln x$.

- Il grafico di $y = \ln (x - 1)$ è quello di $\ln x$ traslato di $1$ verso destra. Il dominio diventa $(1, +\infty)$ e lo zero passa da $x = 1$ a $x = 2$.
- La funzione $\ln (x - 1)$ è negativa per $1 < x < 2$, perché in quell'intervallo l'argomento $x - 1$ è compreso tra $0$ e $1$. Nel grafico di $\left| \ln (x - 1) \right|$ l'arco con $1 < x < 2$ è quindi sostituito dal suo simmetrico rispetto all'asse $x$.

La funzione ottenuta è maggiore o uguale a $0$ in tutto il dominio, si annulla solo in $x = 2$ e, per esempio, vale $\left| \ln \dfrac{1}{2} \right| = \ln 2$ in $x = \dfrac{3}{2}$ e $\ln 2$ anche in $x = 3$.

::grafico{f="abs(log(x-1));log(x-1)" punti="2,0,pieno;1.5,0.693,pieno;3,0.693,pieno" asintoti="x=1" xmin=-1 xmax=7 ymin=-3 ymax=3 legenda="y = \left| \ln (x - 1) \right|;y = \ln (x - 1)" titolo="Il grafico di $y = \left| \ln (x - 1) \right|$ si ottiene con la traslazione di $\ln x$ di $1$ verso destra e poi con la simmetria rispetto all'asse $x$ dell'arco con $1 < x < 2$"}

:::
