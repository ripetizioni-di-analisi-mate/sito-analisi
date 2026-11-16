---
titolo: Calcolo letterale e frazioni algebriche
sommario: Come si opera con monomi e polinomi, come si usano i prodotti notevoli, la divisione e la regola di Ruffini, come si scompone un polinomio in fattori e come si semplificano e si sommano le frazioni algebriche nei quiz del TIEC.
---

## Monomi

:::definizione{#monomio titolo="Monomio"}
Un **monomio** è un'espressione formata dal prodotto di un numero e di potenze di lettere con esponente naturale, come $-5a^2b$ oppure $\dfrac{3}{4}x^3$. Il numero si chiama **coefficiente**; le lettere con i loro esponenti formano la **parte letterale**. Il **grado** di un monomio è la somma degli esponenti delle lettere: $-5a^2b$ ha grado $2 + 1 = 3$, mentre il suo grado rispetto alla sola lettera $a$ è $2$. Un numero diverso da zero è un monomio di grado $0$.

Le espressioni $\dfrac{2}{x}$ e $\sqrt{x}$ non sono monomi, perché la lettera compare al denominatore o sotto radice. Il grado serve a ordinare i termini di un polinomio e a controllare i risultati dei calcoli, come si vede nelle regole che seguono.
:::

:::definizione{#monomi-simili titolo="Monomi simili e loro somma"}
Due monomi sono **simili** se hanno la stessa parte letterale, come $3x^2y$ e $-7x^2y$. La somma algebrica di monomi simili è un monomio simile a essi, che ha per coefficiente la somma algebrica dei coefficienti:
$$
3x^2y - 7x^2y + x^2y = (3 - 7 + 1)\,x^2y = -3x^2y .
$$
La regola segue dalla proprietà distributiva letta da destra a sinistra, perché si raccoglie la parte letterale comune. Due monomi che non sono simili, come $x^2$ e $x^3$, non si possono riunire in un solo monomio, e la loro somma resta $x^2 + x^3$.
:::

:::teorema{#operazioni-monomi titolo="Prodotto, quoziente e potenza di monomi"}
Le tre operazioni si eseguono separatamente sui coefficienti e sulle lettere, con le proprietà delle potenze $a^m \cdot a^n = a^{m+n}$, $a^m : a^n = a^{m-n}$ e $(a^m)^n = a^{m \cdot n}$, che si ripassano nel capitolo su potenze, esponenziali e logaritmi.

- **Prodotto**: si moltiplicano i coefficienti e si sommano gli esponenti di ciascuna lettera: $(3a^2b) \cdot (-2ab^3) = -6a^3b^4$.
- **Quoziente**: si dividono i coefficienti e si sottraggono gli esponenti, con il divisore diverso da zero: $\dfrac{12x^5y^2}{4x^2y} = 3x^3y$. Il risultato è un monomio solo se ogni lettera del divisore compare nel dividendo con esponente maggiore o uguale.
- **Potenza**: si eleva il coefficiente e si moltiplica ogni esponente per l'esponente della potenza: $(-2a^2b)^3 = (-2)^3a^6b^3 = -8a^6b^3$.

Il grado del prodotto è la somma dei gradi dei fattori: $3a^2b$ ha grado $3$, $-2ab^3$ ha grado $4$, e il prodotto $-6a^3b^4$ ha grado $7$.
:::

:::attenzione
Nella potenza di un monomio l'esponente si applica *anche* al coefficiente e al suo segno. Per esempio $(2x)^3 = 8x^3$, e il risultato $2x^3$ è sbagliato; con $x = 1$ si ottiene infatti $2^3 = 8$ e non $2$. Allo stesso modo $(-3x^2)^2 = 9x^4$, perché il quadrato di un numero negativo è positivo, mentre $-(3x^2)^2 = -9x^4$.
:::

## Polinomi

:::definizione{#polinomio titolo="Polinomio e grado"}
Un **polinomio** è una somma algebrica di monomi; ciascun monomio è un **termine** del polinomio. Si scrive in forma ridotta sommando i termini simili. Il **grado** di un polinomio ridotto è il massimo dei gradi dei suoi termini; il termine senza lettere si chiama **termine noto**. In un polinomio in una sola lettera, come
$$
P(x) = 2x^3 - x + 5 ,
$$
il grado è $3$, il **coefficiente direttivo** (quello del termine di grado massimo) è $2$ e il termine noto è $5$. Il polinomio è **ordinato** secondo le potenze decrescenti di $x$ ed è **incompleto**, perché manca il termine di secondo grado.

Il **valore** di $P(x)$ per $x = a$ si indica con $P(a)$ e si ottiene sostituendo $a$ al posto di $x$: $P(-1) = -2 + 1 + 5 = 4$. I valori $P(0)$ e $P(1)$ sono il termine noto e la somma dei coefficienti, e servono per controlli rapidi. Il valore $P(a)$ tornerà nel teorema del resto.
:::

:::teorema{#operazioni-polinomi titolo="Somma algebrica e prodotto di polinomi"}
- **Somma algebrica**: si scrivono tutti i termini e si sommano i termini simili. Un segno meno davanti a un polinomio cambia il segno di *ogni* suo termine: $(3x^2 - x + 2) - (x^2 - 4x + 7) = 3x^2 - x + 2 - x^2 + 4x - 7 = 2x^2 + 3x - 5$.
- **Prodotto**: si moltiplica ogni termine del primo polinomio per ogni termine del secondo, poi si riduce. Per esempio
$$
\begin{aligned}
(2x - 3)(x^2 + x - 1) &= 2x^3 + 2x^2 - 2x - 3x^2 - 3x + 3 \\[6pt]
&= 2x^3 - x^2 - 5x + 3 .
\end{aligned}
$$

Il prodotto vale per la proprietà distributiva. Il numero di prodotti parziali è il prodotto dei numeri di termini, qui $2 \cdot 3 = 6$, e il grado del prodotto è la somma dei gradi, qui $1 + 2 = 3$.
:::

:::osservazione{#grado-somma titolo="Grado di una somma"}
Il grado di una somma di polinomi è al più il maggiore dei gradi degli addendi, e può essere minore quando i termini di grado massimo si eliminano. Per esempio $(x^2 + 3x) - (x^2 - 1) = 3x + 1$ ha grado $1$, anche se i due polinomi hanno grado $2$. I quiz sul grado di un'espressione richiedono quindi di sviluppare e ridurre prima di rispondere.
:::

## Prodotti notevoli

::::teorema{#quadrato-binomio titolo="Quadrato di un binomio"}
Per ogni coppia di numeri $a$ e $b$ vale
$$
(a + b)^2 = a^2 + 2ab + b^2 ,
\qquad
(a - b)^2 = a^2 - 2ab + b^2 .
$$
Il quadrato di un binomio è il quadrato del primo termine, più il **doppio prodotto** dei due termini, più il quadrato del secondo. Per esempio $(3x - 2y)^2 = 9x^2 - 12xy + 4y^2$, dove $-12xy = 2 \cdot 3x \cdot (-2y)$. La formula permette di sviluppare senza moltiplicare termine per termine e, letta al contrario, di riconoscere un quadrato nelle scomposizioni.

::grafico{assi=0 uguale=1 poligoni="0,0 3,0 3,3 0,3;3,3 5,3 5,5 3,5" linee="0,0 5,0 5,5 0,5 0,0;3,0 3,5;0,3 5,3" etichette="1.5,1.5,a²;4,4,b²;4,1.5,ab;1.5,4,ab;1.5,-0.5,a;4,-0.5,b;-0.5,1.5,a;-0.5,4,b" xmin=-1.2 xmax=6 ymin=-1.2 ymax=5.8 titolo="Il quadrato di lato $a + b$ è formato dal quadrato di area $a^2$, dal quadrato di area $b^2$ e da due rettangoli di area $ab$"}

:::dimostrazione
Si moltiplica $(a + b)(a + b)$ termine per termine e si ottiene $a^2 + ab + ba + b^2 = a^2 + 2ab + b^2$. Sostituendo $-b$ al posto di $b$ si ottiene la seconda formula.
:::
::::

:::teorema{#somma-per-differenza titolo="Somma per differenza"}
Per ogni coppia di numeri $a$ e $b$ vale
$$
(a + b)(a - b) = a^2 - b^2 .
$$
Moltiplicando termine per termine, i due prodotti $-ab$ e $+ba$ sono opposti e si eliminano. Per esempio $(2x + 5)(2x - 5) = 4x^2 - 25$. La formula è utile anche nel calcolo a mente: $41 \cdot 39 = (40 + 1)(40 - 1) = 1600 - 1 = 1599$.
:::

:::teorema{#quadrato-trinomio titolo="Quadrato di un trinomio"}
Per ogni terna di numeri $a$, $b$, $c$ vale
$$
(a + b + c)^2 = a^2 + b^2 + c^2 + 2ab + 2ac + 2bc .
$$
Il quadrato di un trinomio è la somma dei quadrati dei tre termini e dei loro doppi prodotti a due a due, ciascuno con il proprio segno. Per esempio
$$
(x - y + 2)^2 = x^2 + y^2 + 4 - 2xy + 4x - 4y .
$$
Il segno di ogni doppio prodotto è il prodotto dei segni dei due termini: $2 \cdot x \cdot (-y) = -2xy$ e $2 \cdot (-y) \cdot 2 = -4y$.
:::

:::teorema{#cubo-binomio titolo="Cubo di un binomio"}
Per ogni coppia di numeri $a$ e $b$ vale
$$
(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 ,
\qquad
(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 .
$$
La formula si ottiene moltiplicando $(a + b)^2 = a^2 + 2ab + b^2$ per $a + b$ e riducendo i termini simili. I coefficienti $1$, $3$, $3$, $1$ sono gli stessi in entrambe le formule; nel cubo di una differenza i segni si alternano. Per esempio $(x - 2)^3 = x^3 - 6x^2 + 12x - 8$.
:::

:::esempio{titolo="Crescite successive"}
Un prezzo che cresce del $10\%$ per due anni di seguito viene moltiplicato per $(1 + 0{,}1)^2$. Con il quadrato di un binomio
$$
(1 + 0{,}1)^2 = 1 + 2 \cdot 0{,}1 + 0{,}01 = 1{,}21 ,
$$
quindi l'aumento complessivo è del $21\%$. Il termine $0{,}01$ è l'interesse sull'interesse, e spiega perché due aumenti del $10\%$ danno più del $20\%$. Le percentuali successive sono trattate nel capitolo su insiemi, numeri e percentuali.
:::

:::attenzione
Il quadrato di una somma *non* è la somma dei quadrati. Con $a = 3$ e $b = 2$ si ha $(3 + 2)^2 = 25$, mentre $3^2 + 2^2 = 13$; la differenza è il doppio prodotto $2 \cdot 3 \cdot 2 = 12$. Allo stesso modo $(a + b)^3$ è diverso da $a^3 + b^3$, perché $(1 + 1)^3 = 8$ e $1^3 + 1^3 = 2$.
:::

## Divisione tra polinomi e regola di Ruffini

:::teorema{#divisione-polinomi titolo="Divisione tra polinomi"}
Dati due polinomi $A(x)$ e $B(x)$, con $B(x)$ diverso dal polinomio nullo, esistono e sono unici due polinomi $Q(x)$, il **quoziente**, e $R(x)$, il **resto**, tali che
$$
A(x) = B(x) \cdot Q(x) + R(x)
$$
e il grado di $R(x)$ è minore del grado di $B(x)$. Si dice che $A(x)$ è **divisibile** per $B(x)$ se il resto è il polinomio nullo. La divisione si esegue come quella tra numeri, con i polinomi ordinati secondo le potenze decrescenti:

- si divide il termine di grado massimo del dividendo per quello del divisore, e si ottiene un termine del quoziente;
- si moltiplica questo termine per il divisore e si sottrae il risultato dal dividendo;
- si ripete con il polinomio ottenuto, finché il suo grado è minore del grado del divisore.

Per esempio, nella divisione di $x^3 - 2x^2 + 4x - 5$ per $x^2 + 1$ il primo termine del quoziente è $\dfrac{x^3}{x^2} = x$ e il secondo è $\dfrac{-2x^2}{x^2} = -2$. Poiché $(x^2 + 1)(x - 2) = x^3 - 2x^2 + x - 2$, si ottiene
$$
x^3 - 2x^2 + 4x - 5 = (x^2 + 1)(x - 2) + 3x - 3 ,
$$
quindi il quoziente è $x - 2$ e il resto è $3x - 3$, di grado minore di $2$.
:::

:::teorema{#regola-ruffini titolo="Regola di Ruffini"}
Quando il divisore è un binomio $x - a$, quoziente e resto si ottengono con la **regola di Ruffini**, che usa solo i coefficienti. Si scrivono in riga i coefficienti del dividendo, mettendo $0$ al posto dei termini che mancano, e $a$ a sinistra. Si abbassa il primo coefficiente; poi ogni numero della riga in basso si moltiplica per $a$, il prodotto si scrive sotto il coefficiente successivo e i due numeri si sommano. Per dividere $2x^3 - 3x^2 + 5$ per $x - 2$:
$$
\begin{array}{c|ccc|c}
 & 2 & -3 & 0 & 5 \\
2 & & 4 & 2 & 4 \\ \hline
 & 2 & 1 & 2 & 9
\end{array}
$$
L'ultimo numero è il resto, $R = 9$; gli altri sono i coefficienti del quoziente, che ha grado uno in meno del dividendo: $Q(x) = 2x^2 + x + 2$. Se il divisore è $x + a$, si scrive a sinistra $-a$, perché $x + a = x - (-a)$.
:::

:::attenzione
Lo $0$ al posto dei termini mancanti è indispensabile. Nella divisione di $2x^3 - 3x^2 + 5$ per $x - 2$, scrivendo solo i coefficienti $2$, $-3$, $5$ si eseguirebbe in realtà la divisione di $2x^2 - 3x + 5$, e si otterrebbe il resto $7$ al posto di $9$.
:::

::::teorema{#teorema-resto titolo="Teorema del resto"}
Il resto della divisione di un polinomio $P(x)$ per $x - a$ è il numero $P(a)$. Il teorema permette di trovare il resto senza eseguire la divisione. Per esempio il resto della divisione di $2x^3 - 3x^2 + 5$ per $x - 2$ è
$$
P(2) = 16 - 12 + 5 = 9 ,
$$
in accordo con la regola di Ruffini. Per il divisore $x + 3$ si calcola invece $P(-3)$.

:::dimostrazione
Il divisore $x - a$ ha grado $1$, quindi il resto ha grado $0$ ed è un numero $R$. Allora $P(x) = (x - a)\,Q(x) + R$ per ogni $x$. Sostituendo $x = a$, il primo addendo si annulla e resta $P(a) = R$.
:::
::::

:::teorema{#teorema-ruffini titolo="Divisibilità per x − a"}
Un polinomio $P(x)$ è divisibile per $x - a$ se e solo se $P(a) = 0$. La proprietà segue dal teorema del resto, perché il resto della divisione per $x - a$ è proprio $P(a)$. Un numero $a$ con $P(a) = 0$ si chiama **zero** (o **radice**) del polinomio. Per esempio $P(x) = x^3 - 2x^2 - 5x + 6$ si annulla in $1$, perché $1 - 2 - 5 + 6 = 0$, quindi è divisibile per $x - 1$. Ogni zero del polinomio è un punto in cui il suo grafico incontra l'asse $x$.

::grafico{f="x^3-2*x^2-5*x+6" punti="-2,0,pieno;1,0,pieno;3,0,pieno" xmin=-3.5 xmax=4.5 ymin=-10 ymax=10 nomi="x,y" legenda="y = x^3 - 2x^2 - 5x + 6" titolo="Il grafico di $P(x) = x^3 - 2x^2 - 5x + 6$ incontra l'asse $x$ in $-2$, $1$ e $3$, quindi $P(x)$ è divisibile per $x + 2$, per $x - 1$ e per $x - 3$"}

:::

:::osservazione{#zeri-razionali titolo="Ricerca degli zeri"}
Se un polinomio ha coefficienti interi, i suoi zeri interi si cercano tra i divisori del termine noto, positivi e negativi. Per $x^3 - 2x^2 - 5x + 6$ i candidati sono $\pm 1$, $\pm 2$, $\pm 3$, $\pm 6$. Se il coefficiente direttivo è diverso da $1$, gli zeri razionali sono frazioni $\dfrac{p}{q}$ con $p$ divisore del termine noto e $q$ divisore del coefficiente direttivo: $2x^2 + x - 1$ si annulla in $\dfrac{1}{2}$, perché $\dfrac{2}{4} + \dfrac{1}{2} - 1 = 0$.
:::

## Scomposizione in fattori

:::definizione{#scomposizione titolo="Scomposizione in fattori"}
**Scomporre in fattori** un polinomio significa scriverlo come prodotto di polinomi di grado minore. Un polinomio che non si può scomporre si dice **irriducibile**; la scomposizione è completa quando tutti i fattori sono irriducibili. Per esempio $x^3 - 4x = x(x - 2)(x + 2)$. La scomposizione serve a semplificare le frazioni algebriche e a risolvere equazioni e disequazioni, come si vede nel capitolo su equazioni, disequazioni e sistemi.
:::

:::teorema{#raccoglimento titolo="Raccoglimento totale e parziale"}
- **Raccoglimento totale**: se tutti i termini hanno un fattore comune, lo si mette in evidenza con la proprietà distributiva, $ab + ac = a(b + c)$. Il fattore da raccogliere è il MCD dei coefficienti per le lettere comuni con l'esponente minore: $6x^3y - 9x^2y^2 = 3x^2y\,(2x - 3y)$.
- **Raccoglimento parziale**: si raggruppano i termini in modo che ogni gruppo abbia un fattore comune, e poi si raccoglie il polinomio che si ripete:
$$
\begin{aligned}
ax + ay + 2x + 2y &= a(x + y) + 2(x + y) \\[6pt]
&= (x + y)(a + 2) .
\end{aligned}
$$

Per controllare il risultato si moltiplicano i fattori e si verifica di ottenere il polinomio di partenza.
:::

:::teorema{#scomposizione-prodotti-notevoli titolo="Scomposizione con i prodotti notevoli"}
I prodotti notevoli letti da destra a sinistra danno le scomposizioni:

- **differenza di quadrati**: $a^2 - b^2 = (a - b)(a + b)$, per esempio $9x^2 - 25 = (3x - 5)(3x + 5)$;
- **quadrato di un binomio**: $a^2 \pm 2ab + b^2 = (a \pm b)^2$, per esempio $4x^2 - 12x + 9 = (2x - 3)^2$;
- **cubo di un binomio**: $a^3 \pm 3a^2b + 3ab^2 \pm b^3 = (a \pm b)^3$.

Un trinomio è il quadrato di un binomio solo se due termini sono quadrati e il terzo è il loro doppio prodotto: in $4x^2 - 12x + 9$ si ha $4x^2 = (2x)^2$, $9 = 3^2$ e $12x = 2 \cdot 2x \cdot 3$. Una differenza di quadrati può ripetersi, come in $x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)$.
:::

:::attenzione
La somma di due quadrati $a^2 + b^2$ non si scompone nei numeri reali. Per esempio $x^2 + 4$ è sempre maggiore o uguale a $4$, quindi non si annulla mai e non ha fattori di primo grado; la scrittura $(x + 2)^2$ è sbagliata, perché vale $x^2 + 4x + 4$.
:::

:::teorema{#somma-differenza-cubi titolo="Somma e differenza di cubi"}
Per ogni coppia di numeri $a$ e $b$ vale
$$
a^3 - b^3 = (a - b)(a^2 + ab + b^2) ,
\qquad
a^3 + b^3 = (a + b)(a^2 - ab + b^2) .
$$
Le formule si verificano moltiplicando i fattori a secondo membro. Il secondo fattore si chiama **falso quadrato**, perché al posto del doppio prodotto ha il prodotto semplice $ab$, ed è irriducibile. Per esempio $x^3 - 8 = (x - 2)(x^2 + 2x + 4)$ e $27a^3 + 1 = (3a + 1)(9a^2 - 3a + 1)$.
:::

:::teorema{#trinomio-somma-prodotto titolo="Trinomio di secondo grado con coefficiente direttivo 1"}
Se esistono due numeri $m$ e $n$ con somma $s$ e prodotto $p$, allora
$$
x^2 + sx + p = (x + m)(x + n) .
$$
La regola vale perché $(x + m)(x + n) = x^2 + (m + n)x + mn$. Per scomporre $x^2 - 7x + 10$ si cercano due numeri con somma $-7$ e prodotto $10$; sono $-2$ e $-5$, quindi $x^2 - 7x + 10 = (x - 2)(x - 5)$. Conviene partire dal prodotto. Se è positivo i due numeri hanno lo stesso segno, che è quello della somma; se è negativo hanno segni opposti.
:::

:::teorema{#trinomio-secondo-grado titolo="Trinomio di secondo grado"}
Sia $ax^2 + bx + c$ un trinomio con $a \neq 0$ e sia $\Delta = b^2 - 4ac$ il suo discriminante.

- Se $\Delta > 0$, l'equazione $ax^2 + bx + c = 0$ ha due soluzioni $x_1$ e $x_2$ e $ax^2 + bx + c = a(x - x_1)(x - x_2)$.
- Se $\Delta = 0$, le due soluzioni coincidono e $ax^2 + bx + c = a(x - x_1)^2$.
- Se $\Delta < 0$, il trinomio è irriducibile.

Le soluzioni si trovano con la formula risolutiva, che si ripassa nel capitolo su equazioni, disequazioni e sistemi. Per $3x^2 - 5x - 2$ si ha $\Delta = 25 + 24 = 49$, quindi $x = \dfrac{5 \pm 7}{6}$, cioè $x_1 = 2$ e $x_2 = -\dfrac{1}{3}$. Perciò
$$
3x^2 - 5x - 2 = 3(x - 2)\left(x + \frac{1}{3}\right) = (x - 2)(3x + 1) ,
$$
dove il coefficiente $3$ è stato moltiplicato per il secondo fattore per togliere la frazione.

::grafico{f="3*x^2-5*x-2" punti="2,0,pieno;-0.3333,0,pieno" xmin=-2 xmax=3.5 ymin=-5 ymax=8 nomi="x,y" legenda="y = 3x^2 - 5x - 2" titolo="La parabola $y = 3x^2 - 5x - 2$ taglia l'asse $x$ in $-\dfrac{1}{3}$ e in $2$, gli zeri dei fattori $3x + 1$ e $x - 2$"}

:::

:::teorema{#scomposizione-ruffini titolo="Scomposizione con la regola di Ruffini"}
Se $a$ è uno zero di $P(x)$, allora $P(x) = (x - a)\,Q(x)$, dove $Q(x)$ è il quoziente della divisione per $x - a$, calcolato con la regola di Ruffini. Il metodo si usa quando gli altri non si applicano. Per $P(x) = x^3 - 2x^2 - 5x + 6$ lo zero $1$ dà
$$
\begin{array}{c|ccc|c}
 & 1 & -2 & -5 & 6 \\
1 & & 1 & -1 & -6 \\ \hline
 & 1 & -1 & -6 & 0
\end{array}
$$
quindi $P(x) = (x - 1)(x^2 - x - 6)$. Il trinomio $x^2 - x - 6$ ha somma $-1$ e prodotto $-6$, quindi si scompone con i numeri $-3$ e $2$, e la scomposizione completa è $P(x) = (x - 1)(x - 3)(x + 2)$.
:::

:::osservazione{#ordine-scomposizione titolo="Ordine dei tentativi"}
Davanti a un polinomio da scomporre si prova per primo il raccoglimento totale, poi si guarda il numero dei termini:

- con due termini, una differenza di quadrati, una somma o una differenza di cubi;
- con tre termini, il quadrato di un binomio oppure un trinomio di secondo grado;
- con quattro termini, il raccoglimento parziale oppure il cubo di un binomio;
- negli altri casi, la regola di Ruffini.

Ogni fattore trovato si esamina di nuovo, perché può essere ancora scomponibile: $2x^3 - 18x = 2x(x^2 - 9) = 2x(x - 3)(x + 3)$.
:::

## MCD e mcm di monomi e polinomi

:::definizione{#mcd-mcm titolo="Massimo comun divisore e minimo comune multiplo"}
Si scompongono in fattori tutti i monomi o polinomi dati.

- Il **massimo comun divisore** (MCD) è il prodotto dei fattori *comuni a tutti*, ciascuno preso con l'esponente minore.
- Il **minimo comune multiplo** (mcm) è il prodotto dei fattori comuni e non comuni, ciascuno preso *una sola volta* con l'esponente maggiore.

Per i coefficienti numerici si prendono il MCD e il mcm dei coefficienti. Per i monomi $12a^3b$ e $18a^2b^2$ si ottiene MCD $= 6a^2b$ e mcm $= 36a^3b^2$. Per i polinomi
$$
x^2 - x = x(x - 1),
\qquad
x^2 - 1 = (x - 1)(x + 1),
\qquad
2x - 2 = 2(x - 1)
$$
il MCD è $x - 1$ e il mcm è $2x(x - 1)(x + 1)$. Il mcm dei denominatori è il denominatore comune nella somma di frazioni algebriche.
:::

## Frazioni algebriche

:::definizione{#frazione-algebrica titolo="Frazione algebrica e condizioni di esistenza"}
Una **frazione algebrica** è un quoziente $\dfrac{A(x)}{B(x)}$ di due polinomi, con $B(x)$ diverso dal polinomio nullo. La frazione ha significato solo per i valori di $x$ che non annullano il denominatore; queste richieste si chiamano **condizioni di esistenza** (C.E.). Per scriverle si scompone il denominatore e si pone diverso da zero ogni suo fattore. Per esempio la frazione $\dfrac{x + 1}{x^2 - 3x}$ ha denominatore $x(x - 3)$, quindi esiste per
$$
\begin{cases}
x \neq 0 \\
x \neq 3
\end{cases}
$$
Il numeratore non interviene nelle condizioni di esistenza, e per $x = -1$ la frazione esiste e vale $0$.
:::

:::teorema{#semplificazione-frazioni titolo="Semplificazione"}
Una frazione algebrica non cambia valore, nei punti in cui esiste, se si dividono numeratore e denominatore per uno stesso fattore non nullo. Per semplificare si scompongono numeratore e denominatore e si eliminano i fattori comuni. Le condizioni di esistenza si scrivono *prima* di semplificare e restano valide anche dopo:
$$
\frac{x^2 - 1}{x - 1} = \frac{(x - 1)(x + 1)}{x - 1} = x + 1 ,
\qquad
x \neq 1 .
$$
Le due espressioni coincidono per ogni $x \neq 1$; in $x = 1$ la frazione non esiste, mentre $x + 1$ vale $2$.

::grafico{f="x+1" punti="1,2,vuoto" xmin=-3 xmax=3.5 ymin=-2 ymax=4.5 nomi="x,y" legenda="y = \dfrac{x^2 - 1}{x - 1}" titolo="Il grafico di $y = \dfrac{x^2 - 1}{x - 1}$ è la retta $y = x + 1$ privata del punto $(1;2)$, dove la frazione non esiste"}

:::

:::attenzione
Si semplificano solo i *fattori*, mai i singoli termini di una somma. Per esempio $\dfrac{x + 3}{x}$ è diverso da $3$, perché con $x = 1$ la frazione vale $4$. Allo stesso modo $\dfrac{x^2 + 4}{x + 2}$ non si semplifica, perché $x^2 + 4$ è irriducibile e non contiene il fattore $x + 2$.
:::

:::teorema{#operazioni-frazioni titolo="Operazioni con le frazioni algebriche"}
Le frazioni algebriche si sommano, si moltiplicano e si dividono con le regole delle frazioni numeriche, dopo aver scritto le condizioni di esistenza.

- **Somma algebrica**: si scompongono i denominatori, si prende il loro mcm come denominatore comune e si moltiplica ogni numeratore per il quoziente tra il mcm e il proprio denominatore. Per $x \neq \pm 1$:
$$
\frac{1}{x - 1} - \frac{2}{x^2 - 1} = \frac{(x + 1) - 2}{(x - 1)(x + 1)} = \frac{x - 1}{(x - 1)(x + 1)} = \frac{1}{x + 1} .
$$
- **Prodotto**: si moltiplicano i numeratori tra loro e i denominatori tra loro, semplificando prima i fattori comuni, anche in croce: $\dfrac{x^2 - 4}{3x} \cdot \dfrac{6}{x + 2} = \dfrac{2(x - 2)}{x}$ per $x \neq 0$ e $x \neq -2$.
- **Quoziente**: si moltiplica la prima frazione per il reciproco della seconda. Si aggiunge la condizione che il numeratore della seconda frazione sia diverso da zero, perché diventa un denominatore.

Il risultato di una somma va semplificato, come nell'esempio, dove il numeratore $x - 1$ si elimina con il fattore uguale del denominatore.
:::

## Metodi rapidi per i quiz

:::osservazione{#sostituzione-valori titolo="Sostituzione di un valore"}
Un'uguaglianza tra espressioni letterali, come un prodotto notevole o una scomposizione, vale per *ogni* valore delle lettere. Si può quindi sostituire un numero comodo nel testo e in ciascuna opzione, ed eliminare le opzioni che danno un valore diverso. Per sapere quale opzione è uguale a $x^3 - 8$:

- con $x = 3$ il testo vale $27 - 8 = 19$;
- l'opzione $(x - 2)(x^2 + 2x + 4)$ vale $1 \cdot 19 = 19$, mentre $(x - 2)^3$ vale $1$ e $(x - 2)(x^2 + 4x + 4)$ vale $25$.

Conviene scegliere valori come $2$ o $3$, perché $0$ e $1$ rendono uguali molte espressioni diverse; nelle frazioni il valore deve rispettare le condizioni di esistenza. Un valore che dà lo stesso risultato per due opzioni non decide, e se ne prova un secondo.
:::

:::osservazione{#controlli-rapidi titolo="Controlli su grado, coefficienti e segni"}
Molte opzioni sbagliate si eliminano senza sviluppare tutto il calcolo.

- **Termine di grado massimo e termine noto**: in un prodotto il coefficiente direttivo è il prodotto dei coefficienti direttivi dei fattori e il termine noto è il prodotto dei termini noti. Lo sviluppo di $(2x - 3)(x^2 + x - 1)$ inizia con $2x^3$ e finisce con $+3$.
- **Somma dei coefficienti**: il valore $P(1)$ è la somma dei coefficienti, e deve coincidere per il testo e per l'opzione corretta.
- **Resto**: il resto della divisione per $x - a$ si calcola come $P(a)$, senza la regola di Ruffini; un polinomio è divisibile per $x - a$ se $P(a) = 0$.
- **Condizioni di esistenza**: quando le opzioni differiscono solo per le condizioni, si scompone il denominatore della frazione di partenza, prima di ogni semplificazione.

Le opzioni che differiscono solo per un segno nascono di solito da un doppio prodotto o da un segno meno davanti a un polinomio; basta controllare quel coefficiente.
:::
