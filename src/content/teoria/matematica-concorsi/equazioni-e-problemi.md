---
titolo: Equazioni e problemi
sommario: Come si calcola con le espressioni letterali, come si risolvono le equazioni di primo e di secondo grado, i sistemi di due equazioni e le disequazioni di primo grado, e come si traduce in equazione il testo di un problema su numeri, età, eredità, monete e prezzi.
---

## Espressioni letterali

:::definizione{#espressione-letterale titolo="Espressione letterale"}
Un'**espressione letterale** è un'espressione in cui alcuni numeri sono indicati con lettere. Ogni lettera rappresenta un numero qualsiasi, e sostituendo alle lettere dei numeri si ottiene il **valore dell'espressione**. Per $a = 4$ e $b = -1$ l'espressione $3a + 2b$ vale
$$
3 \cdot 4 + 2 \cdot (-1) = 12 - 2 = 10 .
$$
Le espressioni letterali servono a scrivere in una sola formula un calcolo che si ripete con numeri diversi. Il costo di $n$ biglietti da $8$ euro con $2$ euro di commissione fissa è $8n + 2$ euro, e per $n = 5$ vale $42$ euro.
:::

:::definizione{#monomi titolo="Monomi e monomi simili"}
Un **monomio** è il prodotto di un numero, detto coefficiente, e di lettere con esponente naturale. In $-5a^2b$ il coefficiente è $-5$ e la parte letterale è $a^2b$. Due monomi sono **simili** se hanno la stessa parte letterale.

- La somma di monomi simili è il monomio simile che ha per coefficiente la somma dei coefficienti, per esempio $3x^2 + 5x^2 = 8x^2$. I monomi $3x^2$ e $5x$ non sono simili, quindi la loro somma resta $3x^2 + 5x$.
- Il prodotto di due monomi ha per coefficiente il prodotto dei coefficienti, e ogni lettera ha per esponente la somma dei suoi esponenti: $(2a^2b) \cdot (3ab^3) = 6a^3b^4$.

La regola sugli esponenti segue dal significato di potenza, perché $a^2 \cdot a = a \cdot a \cdot a = a^3$.
:::

:::definizione{#polinomi titolo="Polinomi e loro prodotto"}
Un **polinomio** è una somma di monomi, come $2x^2 - 3x + 1$. Per semplificarlo si sommano tra loro i monomi simili, e l'operazione si chiama riduzione dei termini simili. Il prodotto di due polinomi si calcola con la **proprietà distributiva**, moltiplicando ogni termine del primo per ogni termine del secondo:
$$
\begin{aligned}
(x + 3)(2x - 1) &= 2x^2 - x + 6x - 3 \\[6pt]
&= 2x^2 + 5x - 3 .
\end{aligned}
$$
Un segno meno davanti a un'espressione cambia il segno di tutti i suoi termini, quindi $5x - (2x - 4) = 5x - 2x + 4 = 3x + 4$. Questi calcoli servono a ridurre un'equazione alla forma più semplice prima di risolverla.
:::

:::attenzione
Il segno meno davanti all'espressione $x - 3$ cambia il segno di *entrambi* i termini, quindi $7 - (x - 3) = 10 - x$. Cambiando il segno solo al primo termine si scrive $7 - x - 3 = 4 - x$, che è un'altra espressione. Per $x = 1$, infatti, la prima vale $9$ e la seconda vale $3$.
:::

## Prodotti notevoli

:::teorema{#prodotti-notevoli titolo="Prodotti notevoli"}
Per ogni coppia di numeri $a$ e $b$ valgono le uguaglianze
$$
\begin{aligned}
(a + b)^2 &= a^2 + 2ab + b^2 , \\[6pt]
(a - b)^2 &= a^2 - 2ab + b^2 , \\[6pt]
(a + b)(a - b) &= a^2 - b^2 .
\end{aligned}
$$
Si ottengono sviluppando il prodotto con la proprietà distributiva. Per esempio $(a + b)(a + b) = a^2 + ab + ba + b^2$, e i due termini $ab$ e $ba$ formano il **doppio prodotto** $2ab$. Le formule accorciano i calcoli con le lettere e anche alcuni calcoli a mente:
$$
103^2 = (100 + 3)^2 = 10\,000 + 600 + 9 = 10\,609 ,
$$
$$
51 \cdot 49 = (50 + 1)(50 - 1) = 2500 - 1 = 2499 .
$$

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5" linee="0,0 5,0 5,5 0,5 0,0;3,0 3,5;0,3 5,3" etichette="1.25,1.35,a²;3.75,3.85,b²;3.7,1.35,ab;1.2,3.85,ab;1.4,-0.55,a;3.9,-0.55,b;-0.6,1.35,a;-0.6,3.85,b" xmin=-1 xmax=6 ymin=-1 ymax=6 titolo="Il quadrato di lato $a + b$ è formato dai quadrati $a^2$ e $b^2$ e da due rettangoli di area $ab$, quindi $(a + b)^2 = a^2 + 2ab + b^2$. Con $a = 3$ e $b = 2$ le parti valgono $9$, $4$, $6$ e $6$, e la loro somma è $25 = 5^2$"}

:::

:::attenzione
Il quadrato di una somma *non* è la somma dei quadrati. Con $a = 3$ e $b = 2$ si ha $(3 + 2)^2 = 25$, mentre $3^2 + 2^2 = 13$; la differenza $12$ è il doppio prodotto $2 \cdot 3 \cdot 2$. Nei quiz l'opzione $a^2 + b^2$ compare spesso proprio per questo errore.
:::

:::osservazione{#scomposizione titolo="Raccoglimento e scomposizione"}
Lette da destra verso sinistra, le formule permettono di scrivere un polinomio come prodotto, cioè di **scomporlo**.

- Il **raccoglimento a fattore comune** porta fuori il fattore presente in tutti i termini: $4x^2 + 6x = 2x\,(2x + 3)$.
- La differenza di due quadrati è il prodotto della loro somma per la loro differenza: $x^2 - 9 = (x + 3)(x - 3)$.
- Un trinomio formato da due quadrati e dal loro doppio prodotto è il quadrato di un binomio: $x^2 - 10x + 25 = (x - 5)^2$.

La scomposizione serve a risolvere le equazioni di secondo grado incomplete e a semplificare le frazioni con le lettere. Per esempio, per $x \neq 3$ si ha $\dfrac{x^2 - 9}{x - 3} = x + 3$.
:::

## Equazioni di primo grado

:::definizione{#equazione titolo="Equazione e soluzione"}
Un'**equazione** è un'uguaglianza tra due espressioni che contengono un numero sconosciuto, detto **incognita** e indicato di solito con $x$. Una **soluzione** è un valore dell'incognita che rende vera l'uguaglianza, e risolvere l'equazione significa trovare tutte le soluzioni. Il numero $4$ è soluzione di $2x + 3 = 11$, perché $2 \cdot 4 + 3 = 11$, mentre $3$ non lo è, perché $2 \cdot 3 + 3 = 9$. Sostituire un valore e controllare l'uguaglianza si chiama verifica, ed è anche un modo per scegliere tra le opzioni di un quiz.
:::

:::teorema{#principi-di-equivalenza titolo="Principi di equivalenza"}
Due equazioni sono **equivalenti** se hanno le stesse soluzioni. Le due operazioni seguenti trasformano un'equazione in una equivalente.

- Primo principio: si somma o si sottrae ai due membri lo stesso numero o la stessa espressione. Ne segue che un termine si può **trasportare** da un membro all'altro cambiandogli il segno.
- Secondo principio: si moltiplicano o si dividono i due membri per lo stesso numero diverso da zero.

I principi valgono perché due quantità uguali restano uguali se su entrambe si esegue la stessa operazione. Per risolvere $5x - 7 = 2x + 8$ si trasportano i termini con la $x$ al primo membro e i numeri al secondo, si ottiene $3x = 15$ e, dividendo per $3$, si trova $x = 5$.

::grafico{f="5*x-7;2*x+8" punti="5,18,pieno" segmenti="5,0,5,18" xmin=-1 xmax=8 ymin=-10 ymax=40 legenda="y = 5x - 7;y = 2x + 8" titolo="I due membri di $5x - 7 = 2x + 8$ sono uguali nel punto in cui le due rette si incontrano, cioè per $x = 5$, dove entrambi valgono $18$"}

:::

:::teorema{#equazione-primo-grado titolo="Risoluzione di un'equazione di primo grado"}
Un'equazione di primo grado contiene l'incognita solo con esponente $1$. Per risolverla si eliminano i denominatori moltiplicando ogni termine per il loro minimo comune multiplo, si sviluppano i prodotti, si trasportano i termini con la $x$ in un membro e i numeri nell'altro, e infine si riducono i termini simili. Si arriva così alla forma $a\,x = b$, e i casi sono tre.

- Se $a \neq 0$ l'equazione è **determinata** e ha l'unica soluzione $x = \dfrac{b}{a}$.
- Se $a = 0$ e $b \neq 0$ l'equazione è **impossibile**, perché $0 \cdot x = b$ non è vera per nessun valore di $x$. Per esempio $2x + 1 = 2x + 5$ si riduce a $0 \cdot x = 4$.
- Se $a = 0$ e $b = 0$ l'equazione è **indeterminata** e ogni numero è soluzione. Per esempio $2\,(x + 1) = 2x + 2$ si riduce a $0 \cdot x = 0$.
:::

:::esempio{titolo="Equazione con i denominatori"}
Per risolvere
$$
\frac{x}{2} + \frac{x + 1}{3} = 7
$$
si moltiplicano tutti i termini per $6$, che è il minimo comune multiplo di $2$ e $3$, e si ottiene
$$
\begin{aligned}
3x + 2\,(x + 1) &= 42 \\[6pt]
5x + 2 &= 42 \\[6pt]
5x &= 40 \\[6pt]
x &= 8 .
\end{aligned}
$$
La verifica dà $\dfrac{8}{2} + \dfrac{9}{3} = 4 + 3 = 7$, quindi la soluzione è corretta. Nella moltiplicazione anche il secondo membro $7$ diventa $42$, perché ogni termine si moltiplica per $6$, compresi quelli senza denominatore.
:::

## Dal testo all'equazione

:::osservazione{#impostare-un-problema titolo="Impostazione di un problema"}
Un problema con un'incognita si risolve in quattro passaggi.

1. Si indica con $x$ la quantità richiesta, oppure una quantità da cui la richiesta si ricava subito.
2. Si scrivono le altre quantità del testo in funzione di $x$.
3. Si traduce in un'equazione la frase che lega le quantità.
4. Si risolve l'equazione e si controlla che il risultato sia accettabile nel contesto; per esempio, un numero di persone o di monete è intero e positivo, e un'età è positiva.

Per esempio, se la somma di un numero e del suo triplo è $48$, si scrive $x + 3x = 48$, quindi $4x = 48$ e $x = 12$.
:::

:::esempio{#traduzione-del-testo titolo="Traduzione delle frasi più comuni"}
Le espressioni che ricorrono nei testi dei quesiti si traducono nel modo seguente.

- Il doppio, il triplo e la metà di un numero sono $2x$, $3x$ e $\dfrac{x}{2}$; un numero aumentato di $5$ è $x + 5$.
- La frase "$a$ supera $b$ di $7$" si scrive $a = b + 7$, e la frase "$a$ è il triplo di $b$" si scrive $a = 3b$.
- Tre numeri naturali consecutivi sono $x$, $x + 1$ e $x + 2$; due numeri pari consecutivi sono $2n$ e $2n + 2$, due dispari consecutivi sono $2n + 1$ e $2n + 3$.

Se la somma di tre numeri consecutivi è $72$, si ha $x + (x + 1) + (x + 2) = 72$, cioè $3x + 3 = 72$, quindi $x = 23$ e i numeri sono $23$, $24$ e $25$.
:::

:::esempio{#problemi-sulle-eta titolo="Problemi sulle età"}
Dopo $n$ anni l'età di ogni persona è aumentata di $n$, quindi la differenza tra due età resta sempre la stessa. Un padre ha $40$ anni e il figlio $10$. Per sapere fra quanti anni il padre avrà il doppio dell'età del figlio si indica con $x$ il numero di anni e si scrive
$$
40 + x = 2\,(10 + x)
\iff
40 + x = 20 + 2x
\iff
x = 20 .
$$
Fra $20$ anni il padre avrà $60$ anni e il figlio $30$, e la differenza è ancora di $30$ anni. Per un tempo passato, cioè "quanti anni fa", si sottrae $x$ da entrambe le età.
:::

:::esempio{#problemi-di-ripartizione titolo="Eredità e ripartizioni"}
Un'eredità di $72\,000$ euro è divisa tra tre fratelli. Il primo riceve il doppio del secondo e il terzo riceve $8000$ euro più del secondo. Si indica con $x$ la quota del secondo, perché le altre si esprimono a partire da essa, e l'equazione è
$$
2x + x + (x + 8000) = 72\,000
\iff
4x = 64\,000
\iff
x = 16\,000 .
$$
Le quote sono $32\,000$, $16\,000$ e $24\,000$ euro, e la loro somma è $72\,000$. Quando le quote sono frazioni del totale, l'incognita è il totale. Se il primo riceve $\dfrac{1}{3}$ dell'eredità, il secondo $\dfrac{1}{4}$ e il terzo i restanti $25\,000$ euro, al terzo spetta la frazione $1 - \dfrac{1}{3} - \dfrac{1}{4} = \dfrac{5}{12}$ del totale, quindi il totale è $25\,000 \cdot \dfrac{12}{5} = 60\,000$ euro.
:::

:::esempio{#problemi-con-le-monete titolo="Monete e prezzi unitari"}
In un salvadanaio ci sono $30$ monete, alcune da $1$ euro e le altre da $2$ euro, per un totale di $42$ euro. Se $x$ è il numero delle monete da $2$ euro, le monete da $1$ euro sono $30 - x$. Il valore di ogni gruppo di monete è il numero delle monete per il valore di una moneta, quindi
$$
2x + 1 \cdot (30 - x) = 42
\iff
x + 30 = 42
\iff
x = 12 .
$$
Le monete da $2$ euro sono $12$ e quelle da $1$ euro sono $18$; infatti $24 + 18 = 42$. Lo stesso schema vale per i biglietti a prezzi diversi e per le merci vendute a prezzi unitari diversi.
:::

## Sistemi di due equazioni lineari

:::definizione{#sistema-lineare titolo="Sistema di due equazioni in due incognite"}
Quando un problema ha due quantità incognite e fornisce due informazioni, si scrive un **sistema**, cioè una coppia di equazioni da soddisfare insieme:
$$
\begin{cases}
x + y = 10 \\
x - y = 2
\end{cases}
$$
Una **soluzione** del sistema è una coppia di numeri $(x, y)$ che soddisfa *entrambe* le equazioni. Qui la soluzione è $x = 6$, $y = 4$, perché $6 + 4 = 10$ e $6 - 4 = 2$. La coppia $x = 7$, $y = 3$ soddisfa la prima equazione e non la seconda, quindi non è una soluzione. Nel piano cartesiano ogni equazione di primo grado in $x$ e $y$ è rappresentata da una retta, e la soluzione del sistema è il punto in cui le due rette si incontrano.

::grafico{f="10-x;x-2" punti="6,4,pieno" segmenti="6,0,6,4;0,4,6,4" xmin=-2 xmax=12 ymin=-4 ymax=12 legenda="x + y = 10;x - y = 2" titolo="Le rette $x + y = 10$ e $x - y = 2$ si incontrano nel punto $(6, 4)$, che è la soluzione del sistema"}

:::

:::teorema{#metodo-di-sostituzione titolo="Metodo di sostituzione"}
Si ricava un'incognita da una delle due equazioni e si sostituisce l'espressione ottenuta nell'altra, che diventa un'equazione con una sola incognita. Nel sistema
$$
\begin{cases}
y = 2x - 1 \\
3x + y = 14
\end{cases}
$$
la prima equazione dà già $y$. Sostituendo nella seconda si ottiene $3x + 2x - 1 = 14$, cioè $5x = 15$, quindi $x = 3$ e $y = 2 \cdot 3 - 1 = 5$. Il metodo funziona perché la prima equazione afferma che $y$ e $2x - 1$ sono lo stesso numero, e quindi l'uno si può scrivere al posto dell'altro. È il metodo più rapido quando un'incognita ha coefficiente $1$.
:::

:::teorema{#metodo-di-riduzione titolo="Metodo di riduzione"}
Si sommano o si sottraggono membro a membro le due equazioni, dopo averle eventualmente moltiplicate per numeri scelti in modo che un'incognita abbia coefficienti uguali oppure opposti. Nel sistema
$$
\begin{cases}
2x + 3y = 13 \\
2x - y = 1
\end{cases}
$$
la $x$ ha lo stesso coefficiente nelle due equazioni, quindi sottraendo la seconda dalla prima si ottiene $4y = 12$, cioè $y = 3$. Sostituendo in $2x - y = 1$ si trova $2x = 4$, cioè $x = 2$. Il metodo funziona perché sommando quantità uguali a quantità uguali si ottengono quantità uguali.
:::

:::osservazione{#sistemi-impossibili titolo="Sistemi impossibili e indeterminati"}
Quando nel metodo di riduzione si eliminano entrambe le incognite, i casi sono due.

- Si arriva a un'uguaglianza falsa, come $0 = 2$, e il sistema è **impossibile**. Nel sistema formato da $x + y = 3$ e $2x + 2y = 10$ la seconda equazione, divisa per $2$, diventa $x + y = 5$, che contraddice la prima. Le due rette sono parallele e non hanno punti comuni.
- Si arriva a un'uguaglianza sempre vera, come $0 = 0$, e il sistema è **indeterminato**, con infinite soluzioni. Nel sistema formato da $x + y = 3$ e $2x + 2y = 6$ la seconda equazione è la prima moltiplicata per $2$, e le due rette coincidono.

::grafico{f="3-x;5-x" xmin=-1 xmax=7 ymin=-3 ymax=7 legenda="x + y = 3;x + y = 5" titolo="Le rette $x + y = 3$ e $x + y = 5$ sono parallele, quindi il sistema formato dalle due equazioni è impossibile"}

:::

:::esempio{#problemi-con-due-incognite titolo="Problemi con due incognite"}
In una sera un teatro vende $40$ biglietti, in parte interi da $12$ euro e in parte ridotti da $8$ euro, e incassa $412$ euro. Con $x$ biglietti interi e $y$ ridotti, il numero dei biglietti e l'incasso danno il sistema
$$
\begin{cases}
x + y = 40 \\
12x + 8y = 412
\end{cases}
$$
Moltiplicando la prima equazione per $8$ si ottiene $8x + 8y = 320$, e sottraendola dalla seconda si trova $4x = 92$, cioè $x = 23$. I biglietti interi sono quindi $23$ e i ridotti $17$; infatti $12 \cdot 23 + 8 \cdot 17 = 276 + 136 = 412$. Lo stesso problema si risolve anche con una sola incognita, scrivendo $40 - x$ al posto di $y$, come nel problema delle monete.
:::

## Equazioni di secondo grado

:::definizione{#equazione-secondo-grado titolo="Equazione di secondo grado"}
Un'equazione di **secondo grado** si può scrivere nella forma
$$
a x^2 + b x + c = 0 , \qquad a \neq 0 .
$$
Il numero $\Delta = b^2 - 4ac$ si chiama **discriminante**, e dal suo segno dipende il numero delle soluzioni. Per $x^2 - 5x + 6 = 0$ si ha $a = 1$, $b = -5$, $c = 6$ e $\Delta = 25 - 24 = 1$. Per leggere i coefficienti si portano prima tutti i termini al primo membro; per esempio $x^2 = 3x + 4$ diventa $x^2 - 3x - 4 = 0$, con $b = -3$ e $c = -4$.
:::

:::teorema{#formula-risolutiva titolo="Formula risolutiva"}
Le soluzioni di $a x^2 + b x + c = 0$, quando esistono, sono
$$
x = \frac{-b \pm \sqrt{\Delta}}{2a} .
$$

- Se $\Delta > 0$ le soluzioni sono due e distinte.
- Se $\Delta = 0$ le due soluzioni coincidono, e valgono $x = -\dfrac{b}{2a}$.
- Se $\Delta < 0$ l'equazione non ha soluzioni reali, perché un numero negativo non ha radice quadrata reale.

La formula si ottiene trasformando il primo membro nel quadrato di un binomio, come nei prodotti notevoli. Per $x^2 - 5x + 6 = 0$ si ha $\Delta = 1$, quindi $x = \dfrac{5 \pm 1}{2}$, cioè $x_1 = 2$ e $x_2 = 3$. Le soluzioni sono le ascisse dei punti in cui la parabola $y = ax^2 + bx + c$ incontra l'asse $x$.

::grafico{f="x^2-5*x+6" punti="2,0,pieno;3,0,pieno" xmin=-1 xmax=6 ymin=-2 ymax=12 legenda="y = x^2 - 5x + 6" titolo="La parabola $y = x^2 - 5x + 6$ incontra l'asse $x$ in $x = 2$ e in $x = 3$, che sono le soluzioni dell'equazione, perché $\Delta = 1 > 0$"}

::grafico{f="x^2-4*x+4;x^2-4*x+5" punti="2,0,pieno" xmin=-1 xmax=5 ymin=-2 ymax=10 legenda="y = x^2 - 4x + 4;y = x^2 - 4x + 5" titolo="Per $x^2 - 4x + 4 = 0$ si ha $\Delta = 0$ e la parabola tocca l'asse $x$ solo in $x = 2$; per $x^2 - 4x + 5 = 0$ si ha $\Delta = -4 < 0$ e la parabola non incontra l'asse $x$"}

:::

:::teorema{#equazioni-incomplete titolo="Equazioni incomplete"}
Quando $b = 0$ oppure $c = 0$ l'equazione si risolve senza la formula.

- Se $b = 0$ l'equazione è $a x^2 + c = 0$, quindi $x^2 = -\dfrac{c}{a}$. Da $x^2 - 49 = 0$ segue $x^2 = 49$, cioè $x = 7$ oppure $x = -7$. L'equazione $x^2 + 4 = 0$ invece non ha soluzioni reali, perché un quadrato non è mai negativo.
- Se $c = 0$ si raccoglie $x$ e si ottiene $x\,(ax + b) = 0$. Un prodotto è zero se e solo se almeno un fattore è zero, quindi $x = 0$ oppure $x = -\dfrac{b}{a}$. Da $3x^2 - 12x = 0$ segue $3x\,(x - 4) = 0$, cioè $x = 0$ oppure $x = 4$.

La proprietà usata nel secondo caso si chiama **legge di annullamento del prodotto**, e vale per ogni equazione scritta come prodotto di fattori uguagliato a zero. Per esempio l'equazione $(x - 2)(x + 5) = 0$ ha le soluzioni $x = 2$ e $x = -5$.
:::

:::attenzione
Dividendo i due membri di $3x^2 = 12x$ per $x$ si ottiene $x = 4$ e si perde la soluzione $x = 0$, perché la divisione per $x$ richiede $x \neq 0$.
:::

:::teorema{#somma-e-prodotto titolo="Somma e prodotto delle soluzioni"}
Se $\Delta \geq 0$, le soluzioni $x_1$ e $x_2$ di $a x^2 + b x + c = 0$ soddisfano
$$
x_1 + x_2 = -\frac{b}{a} ,
\qquad
x_1 \cdot x_2 = \frac{c}{a} .
$$
Le uguaglianze seguono dalla formula risolutiva. Nella somma i due termini con $\sqrt{\Delta}$ hanno segni opposti e si cancellano; nel prodotto si usa il prodotto notevole della somma per la differenza e si ottiene $\dfrac{b^2 - \Delta}{4a^2} = \dfrac{4ac}{4a^2} = \dfrac{c}{a}$. Le relazioni servono in due modi.

- Danno la somma o il prodotto delle soluzioni senza risolvere l'equazione. Per $2x^2 - 6x + 1 = 0$, che ha $\Delta = 28 > 0$, la somma delle soluzioni è $3$ e il prodotto è $\dfrac{1}{2}$.
- Con $a = 1$ permettono di trovare le soluzioni a mente. Per $x^2 - 7x + 12 = 0$ si cercano due numeri con somma $7$ e prodotto $12$, cioè $3$ e $4$.

Viceversa, due numeri con somma $s$ e prodotto $p$ sono le soluzioni dell'equazione $x^2 - s\,x + p = 0$.
:::

:::esempio{#problemi-di-secondo-grado titolo="Problemi che portano a un'equazione di secondo grado"}
Un rettangolo ha perimetro $34\ \text{m}$ e area $60\ \text{m}^2$. La somma di due lati consecutivi è metà del perimetro, quindi se un lato misura $x$ l'altro misura $17 - x$, e l'area dà l'equazione
$$
\begin{aligned}
x\,(17 - x) &= 60 \\[6pt]
x^2 - 17x + 60 &= 0 .
\end{aligned}
$$
Il discriminante è $\Delta = 289 - 240 = 49$, quindi $x = \dfrac{17 \pm 7}{2}$, cioè $x = 12$ oppure $x = 5$. Le due soluzioni descrivono lo stesso rettangolo, con lati di $12\ \text{m}$ e $5\ \text{m}$. Quando l'incognita è una lunghezza, un'età o un numero di oggetti, le soluzioni negative si scartano. Se il prodotto di due numeri naturali consecutivi è $132$, si ha $x\,(x + 1) = 132$, cioè $x^2 + x - 132 = 0$, con soluzioni $11$ e $-12$; il valore accettabile è $11$, e i numeri sono $11$ e $12$.
:::

## Disequazioni di primo grado

:::definizione{#disequazione titolo="Disequazione"}
Una **disequazione** è una disuguaglianza tra due espressioni che contengono un'incognita, con uno dei simboli $<$, $>$, $\leq$, $\geq$. Le soluzioni di una disequazione di primo grado sono di solito tutti i numeri maggiori, oppure tutti i numeri minori, di un valore fissato. Per esempio $2x - 6 > 0$ è soddisfatta dai numeri maggiori di $3$. Infatti $x = 4$ dà $2 > 0$, che è vero, mentre $x = 1$ dà $-4 > 0$, che è falso. Con le disequazioni si risolvono i problemi del tipo "da quanti pezzi in poi" e "fino a quale valore".

::grafico{f="2*x-6" area="2*x-6;0;3;8" punti="3,0,vuoto" xmin=-2 xmax=8 ymin=-9 ymax=12 legenda="y = 2x - 6" titolo="La retta $y = 2x - 6$ sta sopra l'asse $x$ per $x > 3$, quindi le soluzioni di $2x - 6 > 0$ sono i numeri maggiori di $3$"}

:::

:::teorema{#principi-disequazioni titolo="Principi per le disequazioni"}
Le disequazioni si risolvono come le equazioni, con una differenza nel secondo principio.

- Sommando o sottraendo ai due membri lo stesso numero, il verso della disuguaglianza resta lo stesso.
- Moltiplicando o dividendo i due membri per un numero *positivo*, il verso resta lo stesso.
- Moltiplicando o dividendo i due membri per un numero *negativo*, il verso si **inverte**, cioè $<$ diventa $>$ e $\leq$ diventa $\geq$.

La terza regola vale perché il cambio di segno scambia l'ordine dei numeri. Per esempio $2 < 5$, mentre $-2 > -5$. Per risolvere $5 - 2x \geq 11$ si trasporta $5$ e si ottiene $-2x \geq 6$; dividendo per $-2$ il verso si inverte, quindi $x \leq -3$.
:::

:::esempio{#problemi-con-disequazioni titolo="Problemi di convenienza"}
Una palestra fa pagare ogni ingresso singolo $8$ euro. In alternativa si può fare un abbonamento da $50$ euro, con il quale ogni ingresso costa $3$ euro. Con $n$ ingressi l'abbonamento costa meno degli ingressi singoli se
$$
50 + 3n < 8n
\iff
50 < 5n
\iff
n > 10 .
$$
Con $10$ ingressi le due soluzioni costano entrambe $80$ euro, quindi l'abbonamento costa meno a partire da $11$ ingressi. Quando l'incognita è un numero intero, la risposta è il primo intero che soddisfa la disequazione, e il valore di confine si controlla a parte.
:::

## Metodi rapidi per i quiz

:::osservazione{#verifica-delle-opzioni titolo="Verifica delle opzioni"}
Nei quiz a risposta multipla la soluzione è una delle cinque opzioni, quindi spesso si trova sostituendo le opzioni nel testo, senza risolvere l'equazione. Un padre ha $36$ anni e il figlio $8$. Se si chiede fra quanti anni il padre avrà il triplo dell'età del figlio e le opzioni sono $3$, $4$, $5$, $6$ e $8$, si provano i valori.

- Fra $4$ anni il padre ha $40$ anni e il figlio $12$, e $3 \cdot 12 = 36$ è diverso da $40$, quindi $4$ si scarta.
- Fra $6$ anni il padre ha $42$ anni e il figlio $14$, e $3 \cdot 14 = 42$, quindi $6$ è la risposta.

In un sistema l'opzione corretta soddisfa *tutte* le equazioni. Una coppia che ne soddisfa una sola compare spesso tra le opzioni sbagliate, perciò la verifica riguarda ogni condizione del testo. Quando le opzioni sono numeri in ordine crescente, si comincia dal valore centrale, perché il confronto dice se la risposta è più grande o più piccola e permette di scartare due opzioni insieme.
:::

:::osservazione{#controlli-rapidi titolo="Scorciatoie e controlli"}
Alcuni fatti accorciano i calcoli e permettono di eliminare opzioni senza svolgere tutti i conti.

- La somma di un numero dispari di interi consecutivi è il numero centrale moltiplicato per quanti sono i numeri. Se tre consecutivi hanno somma $72$, il centrale è $\dfrac{72}{3} = 24$.
- Se $x + y = s$ e $x - y = d$, sommando e sottraendo le due equazioni si ottiene $x = \dfrac{s + d}{2}$ e $y = \dfrac{s - d}{2}$. Due numeri con somma $40$ e differenza $12$ sono quindi $26$ e $14$.
- Nel contesto del problema un numero di persone o di monete è intero e positivo, l'età di un figlio è minore di quella del genitore, una quota di eredità è minore del totale. Le opzioni che non rispettano questi vincoli si scartano subito.

Tra le opzioni sbagliate compaiono di solito il risultato di un passaggio intermedio, come $3x = 15$ letto come $x = 15$, e il valore dell'altra incognita del problema.
:::
