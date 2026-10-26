---
titolo: Calcolo integrale
sommario: Le primitive e le tecniche di integrazione, l'integrale definito secondo Riemann con il teorema fondamentale del calcolo, e il calcolo delle aree.
---

## Primitive e integrale indefinito

:::definizione{#primitiva titolo="Primitiva e integrale indefinito"}
Sia $f : I \to \mathbb{R}$ con $I$ intervallo. Una funzione $F : I \to \mathbb{R}$ è una primitiva di $f$ su $I$ se $F$ è derivabile e $F'(x) = f(x)$ per ogni $x \in I$. L'integrale indefinito di $f$ è l'insieme di tutte le primitive di $f$ e si indica con $\displaystyle\int f(x)\, dx$. Per esempio $\dfrac{x^3}{3}$ è una primitiva di $x^2$, perché la sua derivata è $x^2$. La ricerca delle primitive è l'operazione inversa della derivazione; con la formula fondamentale del calcolo riduce il calcolo degli integrali definiti alla ricerca di una primitiva.
:::

::::teorema{#due-primitive titolo="Due primitive differiscono per una costante"}
Se $F$ e $G$ sono primitive di $f$ sull'intervallo $I$, esiste $c \in \mathbb{R}$ tale che $G(x) = F(x) + c$ per ogni $x \in I$. Trovata una primitiva $F$, quindi, l'integrale indefinito è descritto dalla scrittura
$$
\int f(x)\, dx = F(x) + c, \qquad c \in \mathbb{R} .
$$

:::dimostrazione
Sia $H = G - F$. La funzione $H$ è derivabile su $I$ e $H'(x) = G'(x) - F'(x) = f(x) - f(x) = 0$ per ogni $x \in I$. Siano $x_1 < x_2$ due punti di $I$. Poiché $I$ è un intervallo, $[x_1, x_2] \subseteq I$, quindi $H$ è continua su $[x_1, x_2]$ e derivabile su $(x_1, x_2)$ e il teorema di Lagrange si applica: esiste $\xi \in (x_1, x_2)$ tale che
$$
H(x_2) - H(x_1) = H'(\xi)\,(x_2 - x_1) = 0 .
$$
Perciò $H$ assume lo stesso valore in ogni coppia di punti di $I$, cioè è costante: $H(x) = c$ per ogni $x \in I$, da cui $G(x) = F(x) + c$.
:::
::::

:::richiamo{titolo="Teorema di Lagrange"}
Se $f$ è continua su $[a, b]$ e derivabile su $(a, b)$, esiste $\xi \in (a, b)$ tale che $f(b) - f(a) = f'(\xi)\,(b - a)$.
:::

:::osservazione
L'ipotesi che il dominio sia un intervallo non si può togliere. La funzione $\dfrac{1}{x}$ ha dominio $(-\infty, 0) \cup (0, +\infty)$ e le sue primitive sono $\ln|x| + c_1$ per $x > 0$ e $\ln|x| + c_2$ per $x < 0$, con due costanti indipendenti. La scrittura $\displaystyle\int \frac{1}{x}\, dx = \ln|x| + c$ sottintende che si lavora su uno dei due intervalli.
:::

## La tabella degli integrali elementari

:::teorema{#integrali-elementari titolo="Integrali elementari"}
Dalla tabella delle derivate, letta al contrario:
$$
\begin{gathered}
\int x^{\alpha}\, dx = \frac{x^{\alpha+1}}{\alpha+1} + c \ \ (\alpha \neq -1), \qquad
\int \frac{1}{x}\, dx = \ln|x| + c, \\[6pt]
\int e^{x}\, dx = e^{x} + c, \qquad
\int a^{x}\, dx = \frac{a^{x}}{\ln a} + c \ \ (a > 0,\ a \neq 1), \\[6pt]
\int \sin x\, dx = -\cos x + c, \qquad
\int \cos x\, dx = \sin x + c, \\[6pt]
\int \frac{1}{\cos^2 x}\, dx = \tan x + c, \qquad
\int \frac{1}{1+x^2}\, dx = \arctan x + c, \\[6pt]
\int \frac{1}{\sqrt{1-x^2}}\, dx = \arcsin x + c .
\end{gathered}
$$
Ogni formula si verifica derivando il secondo membro.
:::

:::teorema{#integrali-quasi-immediati titolo="Integrali elementari in forma composta"}
Se al posto di $x$ compare una funzione $f(x)$ e nell'integranda compare il fattore $f'(x)$, la regola di derivazione della funzione composta, letta al contrario, dà
$$
\begin{gathered}
\int f'(x)\, [f(x)]^{\alpha}\, dx = \frac{[f(x)]^{\alpha+1}}{\alpha+1} + c \ \ (\alpha \neq -1), \qquad
\int \frac{f'(x)}{f(x)}\, dx = \ln|f(x)| + c, \\[6pt]
\int f'(x)\, e^{f(x)}\, dx = e^{f(x)} + c, \qquad
\int f'(x) \cos f(x)\, dx = \sin f(x) + c, \\[6pt]
\int \frac{f'(x)}{1 + [f(x)]^2}\, dx = \arctan f(x) + c .
\end{gathered}
$$
Questi integrali si dicono quasi immediati: si riconosce nell'integranda la derivata $f'(x)$, eventualmente a meno di una costante moltiplicativa.
:::

:::esempio
$$
\int \tan x\, dx = -\int \frac{-\sin x}{\cos x}\, dx = -\ln|\cos x| + c, \qquad
\int \cos x \, \sin^2 x\, dx = \frac{\sin^3 x}{3} + c
$$
Nel primo integrale il numeratore $-\sin x$ è la derivata del denominatore $\cos x$, quindi si applica la formula per $\dfrac{f'}{f}$. Nel secondo il fattore $\cos x$ è la derivata di $\sin x$, quindi si applica la formula per $f' f^{\alpha}$ con $\alpha = 2$.
:::

## Integrazione per parti

::::teorema{#per-parti titolo="Integrazione per parti"}
Siano $f$ e $g$ derivabili con derivata continua su un intervallo. Allora
$$
\int f(x)\, g'(x)\, dx = f(x)\, g(x) - \int f'(x)\, g(x)\, dx ,
$$
e per l'integrale definito
$$
\int_a^b f(x)\, g'(x)\, dx = \bigl[ f(x)\, g(x) \bigr]_a^b - \int_a^b f'(x)\, g(x)\, dx .
$$
La formula scambia l'integrale di $f g'$ con quello di $f' g$: conviene quando il nuovo integrale è più semplice di quello di partenza, cioè quando il fattore scelto per la derivazione si semplifica derivando.

:::dimostrazione
Per la regola di derivazione del prodotto, $(f g)' = f' g + f g'$, quindi $f g$ è una primitiva di $f' g + f g'$. Integrando entrambi i membri si ottiene
$$
\int f'(x)\, g(x)\, dx + \int f(x)\, g'(x)\, dx = f(x)\, g(x) + c ,
$$
e portando il primo integrale a secondo membro si ottiene la formula. La versione per l'integrale definito segue applicando la formula fondamentale del calcolo alla primitiva $f g$.
:::
::::

:::osservazione
Casi tipici, con la scelta del fattore da derivare:

- polinomio per esponenziale, oppure per seno o coseno, come $\displaystyle\int x e^x\, dx$: si deriva il polinomio, perché a ogni passaggio il grado si abbassa; con un polinomio di grado $n$ si integra per parti $n$ volte;
- logaritmo e arcotangente, come $\displaystyle\int \ln x\, dx$ e $\displaystyle\int \arctan x\, dx$: si deriva il logaritmo o l'arcotangente e si prende $g'(x) = 1$;
- esponenziale per seno o coseno, come $\displaystyle\int e^x \sin x\, dx$: si integra per parti due volte e ricompare l'integrale di partenza; l'uguaglianza ottenuta si risolve rispetto all'integrale.
:::

:::esempio{titolo="Il logaritmo con il fattore 1"}
$$
\int \ln x\, dx = \int 1 \cdot \ln x\, dx = x \ln x - \int x \cdot \frac{1}{x}\, dx = x \ln x - x + c
$$
Si pone $f(x) = \ln x$ e $g'(x) = 1$, quindi $f'(x) = \dfrac{1}{x}$ e $g(x) = x$. Il prodotto $x \cdot \dfrac{1}{x}$ vale $1$, perciò il nuovo integrale è immediato.
:::

## Integrazione per sostituzione

:::teorema{#per-sostituzione titolo="Integrazione per sostituzione"}
Siano $f$ continua e $g$ derivabile con derivata continua. Se $F$ è una primitiva di $f$, allora
$$
\int f(g(x))\, g'(x)\, dx = F(g(x)) + c ,
$$
perché per la regola di derivazione della funzione composta la derivata di $F(g(x))$ è $f(g(x))\, g'(x)$. La formula si usa nei due versi:

- sostituzione diretta, $t = g(x)$: si scrive $dt = g'(x)\, dx$ e l'integrale diventa $\displaystyle\int f(t)\, dt$; calcolata una primitiva nella variabile $t$, si torna alla variabile $x$ con $t = g(x)$;
- sostituzione inversa, $x = \varphi(t)$ con $\varphi$ derivabile e invertibile: si scrive $dx = \varphi'(t)\, dt$ e l'integrale $\displaystyle\int f(x)\, dx$ diventa $\displaystyle\int f(\varphi(t))\, \varphi'(t)\, dt$; alla fine si torna alla variabile $x$ con $t = \varphi^{-1}(x)$.

Nell'integrale definito la sostituzione $t = g(x)$ trasforma anche gli estremi:
$$
\int_a^b f(g(x))\, g'(x)\, dx = \int_{g(a)}^{g(b)} f(t)\, dt ,
$$
e il calcolo si conclude nella variabile $t$, senza tornare alla variabile $x$.
:::

:::esempio{titolo="Sostituzioni tipiche"}
- $t = e^x$ quando l'integranda è funzione di $e^x$; da $t = e^x$ segue $dt = e^x\, dx$, cioè $dx = \dfrac{dt}{t}$;
- $t = \ln x$ quando compaiono $\ln x$ e il fattore $\dfrac{1}{x}$;
- $t = \sqrt{x}$, cioè $x = t^2$, per eliminare la radice; più in generale $t = \sqrt[n]{ax+b}$;
- $x = \sin t$ con $t \in \left[ -\dfrac{\pi}{2},\ \dfrac{\pi}{2} \right]$ per integrande contenenti $\sqrt{1 - x^2}$.

Per esempio, con la sostituzione $t = \ln x$,
$$
\int \frac{1}{x \ln x}\, dx = \int \frac{1}{t}\, dt = \ln|t| + c = \ln\bigl|\ln x\bigr| + c .
$$
:::

## Integrali di funzioni razionali

:::teorema{#funzioni-razionali titolo="Metodo dei fratti semplici"}
Per integrare $\dfrac{P(x)}{Q(x)}$ con $P$ e $Q$ polinomi:

- se il grado di $P$ è maggiore o uguale al grado di $Q$, si esegue la divisione con resto, $\dfrac{P(x)}{Q(x)} = S(x) + \dfrac{R(x)}{Q(x)}$ con il grado di $R$ minore del grado di $Q$; il polinomio $S$ si integra con la tabella;
- si fattorizza $Q$ e si decompone $\dfrac{R(x)}{Q(x)}$ in fratti semplici;
- a ogni radice reale semplice $x_0$ corrisponde un addendo $\dfrac{A}{x - x_0}$, il cui integrale è $A \ln|x - x_0|$;
- a ogni radice reale $x_0$ di molteplicità $m$ corrispondono gli addendi $\dfrac{A_1}{x - x_0} + \dots + \dfrac{A_m}{(x - x_0)^m}$; per $k \geq 2$ l'integrale di $\dfrac{A_k}{(x - x_0)^k}$ è $-\dfrac{A_k}{(k-1)\,(x - x_0)^{k-1}}$;
- a ogni fattore di secondo grado con discriminante negativo (radici complesse coniugate) corrisponde un addendo $\dfrac{Ax + B}{x^2 + px + q}$: si isola al numeratore la derivata del denominatore, che dà un logaritmo, e il resto si porta con il completamento del quadrato alla forma $\dfrac{1}{u^2 + k^2}$, il cui integrale è $\dfrac{1}{k} \arctan \dfrac{u}{k}$.

Le costanti della decomposizione si determinano con il principio di identità dei polinomi oppure sostituendo le radici del denominatore.
:::

:::esempio{titolo="Radici reali semplici"}
$$
\frac{3x}{(x-1)(x+2)} = \frac{A}{x-1} + \frac{B}{x+2}, \qquad 3x = A(x+2) + B(x-1)
$$
Per $x = 1$ si ottiene $3 = 3A$, quindi $A = 1$; per $x = -2$ si ottiene $-6 = -3B$, quindi $B = 2$. Perciò
$$
\int \frac{3x}{(x-1)(x+2)}\, dx = \ln|x-1| + 2 \ln|x+2| + c .
$$
:::

:::esempio{titolo="La forma arcotangente"}
$$
\int \frac{1}{x^2 + 2x + 2}\, dx = \int \frac{1}{(x+1)^2 + 1}\, dx = \arctan(x+1) + c
$$
Il trinomio $x^2 + 2x + 2$ ha discriminante negativo, quindi non ha radici reali e si completa il quadrato.
:::

## L'integrale definito secondo Riemann

:::definizione{#integrale-di-riemann titolo="Integrale definito secondo Riemann"}
Sia $f$ limitata su $[a, b]$. Una partizione $P$ di $[a, b]$ è una scelta di punti $a = x_0 < x_1 < \dots < x_n = b$. Posti $m_i = \inf f$ e $M_i = \sup f$ su $[x_{i-1}, x_i]$, le somme inferiore e superiore di $f$ relative a $P$ sono
$$
s(P) = \sum_{i=1}^{n} m_i\, (x_i - x_{i-1}), \qquad
S(P) = \sum_{i=1}^{n} M_i\, (x_i - x_{i-1}) .
$$
La funzione $f$ è integrabile secondo Riemann su $[a, b]$ se
$$
\sup_{P} s(P) = \inf_{P} S(P) ,
$$
e il valore comune si chiama integrale definito di $f$ su $[a, b]$, indicato con $\displaystyle\int_a^b f(x)\, dx$. Per $f \geq 0$ l'integrale è l'area della regione compresa tra il grafico e l'asse $x$; in generale è un'area con segno, perché i tratti in cui $f < 0$ danno contributo negativo.
:::

:::teorema{#funzioni-integrabili titolo="Classi di funzioni integrabili"}
Se $f$ è continua su $[a, b]$, oppure monotona su $[a, b]$, allora $f$ è integrabile su $[a, b]$. La dimostrazione per le funzioni continue usa l'uniforme continuità e si omette. Non ogni funzione limitata è integrabile: la funzione di Dirichlet, che vale $1$ sui razionali e $0$ sugli irrazionali, ha ogni somma inferiore uguale a $0$ e ogni somma superiore uguale a $b - a$, quindi non è integrabile.
:::

## Proprietà dell'integrale e teorema della media

:::teorema{#proprieta-integrale titolo="Proprietà dell'integrale definito"}
Siano $f$ e $g$ integrabili su $[a, b]$ e $\alpha, \beta \in \mathbb{R}$.

- Linearità: $\displaystyle\int_a^b \bigl( \alpha f(x) + \beta g(x) \bigr)\, dx = \alpha \int_a^b f(x)\, dx + \beta \int_a^b g(x)\, dx$.
- Additività rispetto all'intervallo: per ogni $c \in [a, b]$, $\displaystyle\int_a^b f(x)\, dx = \int_a^c f(x)\, dx + \int_c^b f(x)\, dx$; con la convenzione $\displaystyle\int_b^a f(x)\, dx = -\int_a^b f(x)\, dx$ la formula vale comunque siano ordinati i tre punti.
- Monotonia: se $f(x) \leq g(x)$ per ogni $x \in [a, b]$, allora $\displaystyle\int_a^b f(x)\, dx \leq \int_a^b g(x)\, dx$.
- Disuguaglianza del valore assoluto: $\displaystyle\left| \int_a^b f(x)\, dx \right| \leq \int_a^b |f(x)|\, dx$, che segue dalla monotonia applicata a $-|f| \leq f \leq |f|$.

L'additività serve per integrare le funzioni definite a tratti e quelle con il valore assoluto: l'intervallo si spezza nei punti in cui l'espressione cambia.
:::

::::teorema{#teorema-della-media titolo="Teorema della media integrale"}
Se $f$ è continua su $[a, b]$, esiste $c \in [a, b]$ tale che
$$
\int_a^b f(x)\, dx = f(c)\,(b - a) .
$$
Il numero $\dfrac{1}{b-a} \displaystyle\int_a^b f(x)\, dx$ è la media integrale di $f$ su $[a, b]$, quindi il teorema afferma che una funzione continua assume la propria media. Viene usato nella dimostrazione del teorema fondamentale del calcolo.

:::dimostrazione
Per il teorema di Weierstrass $f$ ammette minimo $m$ e massimo $M$ su $[a, b]$. Poiché $m \leq f(x) \leq M$ per ogni $x \in [a, b]$, per la monotonia dell'integrale
$$
m\,(b - a) \leq \int_a^b f(x)\, dx \leq M\,(b - a) ,
$$
quindi il numero $\mu = \dfrac{1}{b-a} \displaystyle\int_a^b f(x)\, dx$ appartiene a $[m, M]$. Per il teorema dei valori intermedi $f$ assume tutti i valori compresi tra $m$ e $M$, perciò esiste $c \in [a, b]$ con $f(c) = \mu$, cioè la tesi.
:::
::::

:::richiamo{titolo="Teorema di Weierstrass"}
Se $f$ è continua su $[a, b]$, ammette massimo e minimo: esistono $x_m, x_M \in [a, b]$ con $f(x_m) \leq f(x) \leq f(x_M)$ per ogni $x \in [a, b]$.
:::

:::richiamo{titolo="Teorema dei valori intermedi"}
Se $f$ è continua su $[a, b]$ con minimo $m$ e massimo $M$, per ogni $y \in [m, M]$ esiste $x \in [a, b]$ con $f(x) = y$.
:::

## Funzione integrale e teorema fondamentale del calcolo

:::definizione{#funzione-integrale titolo="Funzione integrale"}
Sia $f$ integrabile su $[a, b]$. La funzione integrale di punto iniziale $a$ è
$$
F(x) = \int_a^x f(t)\, dt, \qquad x \in [a, b] .
$$
La variabile $x$ è l'estremo superiore di integrazione; la variabile di integrazione $t$ è muta e si indica con una lettera diversa da $x$. La funzione integrale costruisce una nuova funzione a partire da $f$ anche quando le primitive non si scrivono con funzioni elementari, come per $f(t) = e^{-t^2}$.
:::

::::teorema{#teorema-fondamentale titolo="Teorema fondamentale del calcolo"}
Sia $f$ continua su $[a, b]$. Allora la funzione integrale $F(x) = \displaystyle\int_a^x f(t)\, dt$ è derivabile su $[a, b]$ e
$$
F'(x) = f(x) \qquad \text{per ogni } x \in [a, b] .
$$
Quindi ogni funzione continua su un intervallo ammette primitive, e la funzione integrale è una di esse. Il teorema collega la derivazione e l'integrazione, e da esso segue la formula fondamentale del calcolo.

:::dimostrazione
Siano $x \in [a, b]$ e $h \neq 0$ con $x + h \in [a, b]$. Per l'additività dell'integrale rispetto all'intervallo
$$
F(x + h) - F(x) = \int_x^{x+h} f(t)\, dt .
$$
Per il teorema della media applicato all'intervallo di estremi $x$ e $x + h$ esiste $c_h$, compreso tra $x$ e $x + h$, tale che $\displaystyle\int_x^{x+h} f(t)\, dt = f(c_h)\, h$; per $h < 0$ si applica il teorema su $[x + h,\ x]$ e la convenzione sullo scambio degli estremi dà la stessa uguaglianza. Quindi
$$
\frac{F(x + h) - F(x)}{h} = f(c_h) .
$$
Per $h \to 0$ il punto $c_h$, compreso tra $x$ e $x + h$, tende a $x$; poiché $f$ è continua in $x$, si ha $f(c_h) \to f(x)$. Perciò $F$ è derivabile in $x$ e $F'(x) = f(x)$.
:::
::::

:::richiamo{titolo="Teorema della media integrale"}
Se $f$ è continua su $[a, b]$, esiste $c \in [a, b]$ tale che $\displaystyle\int_a^b f(x)\, dx = f(c)\,(b - a)$.
:::

:::teorema{#formula-fondamentale titolo="Formula fondamentale del calcolo"}
Se $f$ è continua su $[a, b]$ e $G$ è una primitiva di $f$, allora
$$
\int_a^b f(x)\, dx = G(b) - G(a) = \bigl[ G(x) \bigr]_a^b .
$$
Segue dal teorema fondamentale: la funzione integrale $F$ e $G$ sono primitive della stessa funzione sull'intervallo $[a, b]$, quindi $G = F + c$, perciò $G(b) - G(a) = F(b) - F(a) = \displaystyle\int_a^b f(x)\, dx$, dato che $F(a) = 0$.
:::

:::esempio
$$
\int_0^{\pi} \sin x\, dx = \bigl[ -\cos x \bigr]_0^{\pi} = -\cos \pi + \cos 0 = 2
$$
Una primitiva di $\sin x$ è $-\cos x$, quindi si valuta la primitiva agli estremi e si sottrae.
:::

:::teorema{#estremi-variabili titolo="Derivata di una funzione integrale con estremi variabili"}
Siano $f$ continua e $\alpha$, $\beta$ derivabili. Allora la funzione
$$
H(x) = \int_{\alpha(x)}^{\beta(x)} f(t)\, dt
$$
è derivabile e
$$
H'(x) = f(\beta(x))\, \beta'(x) - f(\alpha(x))\, \alpha'(x) .
$$
La formula segue scrivendo $H(x) = F(\beta(x)) - F(\alpha(x))$, con $F$ primitiva di $f$, e derivando le funzioni composte, poiché $F' = f$ per il teorema fondamentale. Per esempio
$$
\frac{d}{dx} \int_0^{x^3} \cos(t^2)\, dt = 3x^2 \cos(x^6) .
$$
:::

## Aree tra curve

:::teorema{#aree titolo="Area tra due curve"}
Siano $f$ e $g$ continue su $[a, b]$ con $f(x) \geq g(x)$ per ogni $x \in [a, b]$. L'area della regione compresa tra i due grafici è
$$
\mathcal{A} = \int_a^b \bigl( f(x) - g(x) \bigr)\, dx .
$$
La formula vale anche quando le due funzioni assumono valori negativi, perché nell'integrale compare la differenza $f - g$, che è non negativa. Se i grafici si intersecano, si risolve $f(x) = g(x)$, si spezza l'intervallo nei punti di intersezione con l'additività e in ogni tratto si integra la differenza tra la funzione maggiore e la minore. Per $g = 0$ si ottiene l'area tra il grafico di $f$ e l'asse $x$.
:::

:::attenzione
Quando $f$ cambia segno, l'integrale e l'area sono numeri diversi. Si ha $\displaystyle\int_0^{2\pi} \sin x\, dx = 0$, mentre l'area tra il grafico e l'asse $x$ su $[0, 2\pi]$ vale $\displaystyle\int_0^{\pi} \sin x\, dx - \int_{\pi}^{2\pi} \sin x\, dx = 4$: i due archi hanno aree uguali e contributi opposti nell'integrale.
:::

:::esempio
Area della regione compresa tra la parabola $y = x^2$ e la retta $y = x$. Da $x^2 = x$ si ottengono le intersezioni $x = 0$ e $x = 1$; su $[0, 1]$ la retta sta sopra la parabola, quindi
$$
\mathcal{A} = \int_0^1 (x - x^2)\, dx = \left[ \frac{x^2}{2} - \frac{x^3}{3} \right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6} .
$$

::grafico{f="x-x*x" xmin=-0.5 xmax=1.5 ymin=-0.3 ymax=0.5 titolo="y = x − x²: l'area sottesa su [0, 1] è l'area della regione tra la retta e la parabola"}
:::
