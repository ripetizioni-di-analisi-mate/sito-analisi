---
titolo: Serie di Fourier
sommario: Come una funzione periodica si sviluppa in serie di seni e coseni, come si calcolano i coefficienti, in quali punti e in che senso la serie converge, e come l'uguaglianza di Parseval lega la funzione ai suoi coefficienti.
---

## Funzioni periodiche e polinomi trigonometrici

:::definizione{#funzione-periodica titolo="Funzione periodica"}
$f : \mathbb{R} \to \mathbb{R}$ è **periodica** di periodo $T > 0$ se $f(x + T) = f(x)$ per ogni $x \in \mathbb{R}$. Una funzione definita soltanto su $[-\pi, \pi)$ si estende in modo unico a una funzione $2\pi$-periodica su $\mathbb{R}$, il **prolungamento periodico**, ripetendo i valori su ogni intervallo $[\pi, 3\pi)$, $[-3\pi, -\pi)$ e così via. Per una funzione $T$-periodica integrabile l'integrale su un periodo *non* dipende dal punto di partenza:
$$
\int_{a}^{a + T} f(x)\, dx = \int_{0}^{T} f(x)\, dx
\qquad \text{per ogni } a \in \mathbb{R} .
$$
Le funzioni periodiche descrivono fenomeni che si ripetono, come oscillazioni, onde e segnali. La teoria si sviluppa per il periodo $2\pi$, il periodo comune di $\sin x$ e $\cos x$, e si trasporta a un periodo qualsiasi con un cambio di variabile.

::grafico{f="(x-2*pi*floor((x+pi)/(2*pi)))" xmin=-10 xmax=10 ymin=-4.5 ymax=4.5 punti="-9.4248,-3.1416,pieno;-9.4248,3.1416,vuoto;-3.1416,-3.1416,pieno;-3.1416,3.1416,vuoto;3.1416,-3.1416,pieno;3.1416,3.1416,vuoto;9.4248,-3.1416,pieno;9.4248,3.1416,vuoto" titolo="Prolungamento $2\pi$-periodico di $f(x) = x$, $x \in [-\pi, \pi)$: il tratto su $[-\pi, \pi)$ si ripete in ogni periodo, con un salto nei punti $\pi + 2k\pi$"}
:::

:::definizione{#polinomio-trigonometrico titolo="Polinomio trigonometrico"}
Un **polinomio trigonometrico** di grado $N$ è una funzione della forma
$$
s_N(x) = \frac{a_0}{2} + \sum_{n=1}^{N} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr),
$$
con $a_0, a_1, \dots, a_N, b_1, \dots, b_N \in \mathbb{R}$. Ogni polinomio trigonometrico è $2\pi$-periodico e **derivabile infinite volte**, perché somma finita di seni e coseni. I polinomi trigonometrici sono i mattoni della teoria: la serie di Fourier rappresenta una funzione periodica come limite di polinomi trigonometrici, così come la serie di Taylor rappresenta una funzione regolare come limite di polinomi algebrici.
:::

## Ortogonalità del sistema trigonometrico

::::teorema{#ortogonalita titolo="Ortogonalità del sistema trigonometrico"}
Per ogni coppia di interi $n, m \geq 1$ valgono le relazioni
$$
\begin{gathered}
\int_{-\pi}^{\pi} \cos(nx) \cos(mx)\, dx =
\begin{cases}
0 & \text{se } n \neq m \\
\pi & \text{se } n = m
\end{cases}
\\[8pt]
\int_{-\pi}^{\pi} \sin(nx) \sin(mx)\, dx =
\begin{cases}
0 & \text{se } n \neq m \\
\pi & \text{se } n = m
\end{cases}
\\[8pt]
\int_{-\pi}^{\pi} \sin(nx) \cos(mx)\, dx = 0,
\qquad
\int_{-\pi}^{\pi} \cos(nx)\, dx = \int_{-\pi}^{\pi} \sin(nx)\, dx = 0 .
\end{gathered}
$$
Su $[-\pi, \pi]$ il prodotto di due funzioni diverse del sistema $1, \cos x, \sin x, \cos(2x), \sin(2x), \dots$ ha **integrale nullo**. Questa proprietà permette di isolare *un* coefficiente alla volta nello sviluppo di una funzione, ed è il fondamento delle formule per i coefficienti di Fourier.

::grafico{f="sin(x)*sin(2*x)" area="sin(x)*sin(2*x);0;-3.1416;3.1416" xmin=-3.8 xmax=3.8 ymin=-1.1 ymax=1.1 asintoti="x=-3.1416;x=3.1416" titolo="$y = \sin x \sin(2x)$ su $[-\pi, \pi]$: le regioni sopra e sotto l'asse $x$ hanno la stessa area, quindi l'integrale è nullo"}

:::dimostrazione
Per ogni intero $k \neq 0$ si ha $\displaystyle\int_{-\pi}^{\pi} \cos(kx)\, dx = \left[ \frac{\sin(kx)}{k} \right]_{-\pi}^{\pi} = 0$, poiché $\sin(k\pi) = 0$; l'integrale di $\sin(kx)$ è nullo perché la funzione è dispari sull'intervallo simmetrico. Per i prodotti si applicano le **formule di Werner**:
$$
\cos(nx)\cos(mx) = \frac{\cos\bigl((n-m)x\bigr) + \cos\bigl((n+m)x\bigr)}{2} .
$$
Se $n \neq m$ entrambi gli addendi sono coseni di multipli interi non nulli di $x$, quindi i loro integrali sono nulli. Se $n = m$ il primo addendo è $\cos 0 = 1$, perciò
$$
\int_{-\pi}^{\pi} \cos^2(nx)\, dx = \int_{-\pi}^{\pi} \frac{1 + \cos(2nx)}{2}\, dx = \pi .
$$
Per i seni si usa $\sin(nx)\sin(mx) = \dfrac{\cos\bigl((n-m)x\bigr) - \cos\bigl((n+m)x\bigr)}{2}$ e si ragiona allo stesso modo. Infine $\sin(nx)\cos(mx)$ è una funzione dispari, prodotto di una dispari e di una pari, quindi il suo integrale su $[-\pi, \pi]$ è **nullo**.
:::
::::

## Coefficienti e serie di Fourier

::::proposizione{#coefficienti-di-un-polinomio titolo="Coefficienti di un polinomio trigonometrico"}
Se $f$ è il polinomio trigonometrico $\dfrac{a_0}{2} + \displaystyle\sum_{n=1}^{N} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr)$, allora per ogni $n = 0, 1, \dots, N$ e $m = 1, \dots, N$
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx,
\qquad
b_m = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(mx)\, dx .
$$
I coefficienti di un polinomio trigonometrico si recuperano dalla funzione con un integrale. Le stesse formule hanno senso per *qualunque* funzione integrabile, e questo suggerisce di adottarle come definizione dei coefficienti per una funzione periodica qualsiasi.

:::dimostrazione
Si moltiplica $f$ per $\cos(mx)$ e si integra su $[-\pi, \pi]$; poiché la somma è finita, l'integrale si distribuisce sugli addendi. Per l'**ortogonalità del sistema trigonometrico** ogni addendo ha integrale nullo, *tranne* quello con $\cos(mx) \cos(mx)$, che vale $a_m \pi$. Quindi $\displaystyle\int_{-\pi}^{\pi} f(x)\cos(mx)\, dx = a_m \pi$, cioè la formula per $a_m$. Per $m = 0$ si integra $f$ direttamente: ogni seno e coseno ha integrale nullo e resta $\dfrac{a_0}{2} \cdot 2\pi = a_0 \pi$. Moltiplicando per $\sin(mx)$ si ottiene allo stesso modo la formula per $b_m$.
:::
::::

:::richiamo{titolo="Ortogonalità del sistema trigonometrico"}
Per $n, m \geq 1$ interi: $\displaystyle\int_{-\pi}^{\pi} \cos(nx)\cos(mx)\, dx$ e $\displaystyle\int_{-\pi}^{\pi} \sin(nx)\sin(mx)\, dx$ valgono $0$ per $n \neq m$ e $\pi$ per $n = m$; $\displaystyle\int_{-\pi}^{\pi} \sin(nx)\cos(mx)\, dx = 0$ sempre.
:::

:::definizione{#coefficienti-di-fourier titolo="Coefficienti di Fourier"}
Sia $f$ una funzione $2\pi$-periodica integrabile su $[-\pi, \pi]$. I **coefficienti di Fourier** di $f$ sono
$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \cos(nx)\, dx \quad (n \geq 0),
\qquad
b_n = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx)\, dx \quad (n \geq 1).
$$
Il termine costante dello sviluppo è $\dfrac{a_0}{2}$, e la divisione per $2$ fa sì che la formula di $a_n$ valga anche per $n = 0$ senza eccezioni. Il valore $\dfrac{a_0}{2} = \dfrac{1}{2\pi} \displaystyle\int_{-\pi}^{\pi} f(x)\, dx$ è la **media** di $f$ su un periodo.
:::

:::definizione{#serie-di-fourier titolo="Serie di Fourier"}
La **serie di Fourier** di $f$ è la serie di funzioni
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr),
$$
dove $a_n$ e $b_n$ sono i coefficienti di Fourier di $f$. Il simbolo $\sim$ indica che la serie è *associata* a $f$, *non* che la somma coincide con $f(x)$: la convergenza della serie e il valore della somma sono questioni separate, risolte dai teoremi di convergenza puntuale e uniforme.
:::

:::esempio{titolo="Serie di Fourier del dente di sega"}
Sia $f$ il prolungamento $2\pi$-periodico di $f(x) = x$, $x \in [-\pi, \pi)$. La funzione $x \cos(nx)$ è **dispari**, quindi $a_n = 0$ per ogni $n \geq 0$. Per i $b_n$ si **integra per parti**:
$$
\begin{aligned}
b_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx)\, dx \\[6pt]
&= \frac{1}{\pi} \left[ -\frac{x \cos(nx)}{n} \right]_{-\pi}^{\pi} + \frac{1}{\pi} \int_{-\pi}^{\pi} \frac{\cos(nx)}{n}\, dx \\[6pt]
&= \frac{1}{\pi} \cdot \left( -\frac{2\pi \cos(n\pi)}{n} \right) + 0
= \frac{2\,(-1)^{n+1}}{n} ,
\end{aligned}
$$
poiché $\cos(n\pi) = (-1)^n$. La serie di Fourier è
$$
x \sim \sum_{n=1}^{\infty} \frac{2\,(-1)^{n+1}}{n} \sin(nx)
= 2 \sin x - \sin(2x) + \frac{2}{3} \sin(3x) - \cdots
$$

::grafico{f="(x-2*pi*floor((x+pi)/(2*pi)));2*sin(x)-sin(2*x)+2*sin(3*x)/3;2*(sin(x)-sin(2*x)/2+sin(3*x)/3-sin(4*x)/4+sin(5*x)/5-sin(6*x)/6+sin(7*x)/7-sin(8*x)/8+sin(9*x)/9-sin(10*x)/10)" xmin=-7 xmax=7.3 ymin=-4.5 ymax=4.5 punti="-3.1416,0,pieno;3.1416,0,pieno" titolo="Dente di sega con le somme parziali $s_3$ (tratteggiata) e $s_{10}$ (rossa): nei punti di salto $\pm\pi$ ogni somma parziale vale $0$"}
:::

## Funzioni pari e funzioni dispari

:::proposizione{#serie-di-coseni-e-di-seni titolo="Serie di soli coseni e di soli seni"}
Sia $f$ una funzione $2\pi$-periodica integrabile su $[-\pi, \pi]$.

- Se $f$ è pari, allora $b_n = 0$ per ogni $n \geq 1$ e $a_n = \dfrac{2}{\pi} \displaystyle\int_{0}^{\pi} f(x) \cos(nx)\, dx$: la serie è di **soli coseni**.
- Se $f$ è dispari, allora $a_n = 0$ per ogni $n \geq 0$ e $b_n = \dfrac{2}{\pi} \displaystyle\int_{0}^{\pi} f(x) \sin(nx)\, dx$: la serie è di **soli seni**.

La proposizione segue dalla parità dei prodotti: se $f$ è pari, $f(x)\sin(nx)$ è dispari e il suo integrale sull'intervallo simmetrico $[-\pi, \pi]$ è nullo, mentre $f(x)\cos(nx)$ è pari e il suo integrale è il doppio dell'integrale su $[0, \pi]$; per $f$ dispari i ruoli si scambiano. Riconoscere la simmetria prima di calcolare dimezza il lavoro, perciò il **controllo di parità** è il primo passo di *ogni* sviluppo in serie di Fourier.
:::

:::esempio{titolo="Serie di Fourier di x²"}
Sia $f$ il prolungamento $2\pi$-periodico di $f(x) = x^2$, $x \in [-\pi, \pi]$. La funzione è **pari**, quindi $b_n = 0$ e bastano gli $a_n$. Il coefficiente $a_0$ vale
$$
a_0 = \frac{2}{\pi} \int_{0}^{\pi} x^2\, dx = \frac{2}{\pi} \cdot \frac{\pi^3}{3} = \frac{2\pi^2}{3} .
$$
Per $n \geq 1$ si **integra per parti** due volte; i termini con $\sin(n\pi)$ sono nulli, quindi
$$
\begin{aligned}
a_n &= \frac{2}{\pi} \int_{0}^{\pi} x^2 \cos(nx)\, dx
= \frac{2}{\pi} \left( \left[ \frac{x^2 \sin(nx)}{n} \right]_0^{\pi} - \frac{2}{n} \int_0^{\pi} x \sin(nx)\, dx \right) \\[6pt]
&= -\frac{4}{n\pi} \left( \left[ -\frac{x \cos(nx)}{n} \right]_0^{\pi} + \frac{1}{n} \int_0^{\pi} \cos(nx)\, dx \right)
= \frac{4 \cos(n\pi)}{n^2}
= \frac{4\,(-1)^{n}}{n^2} .
\end{aligned}
$$
La serie di Fourier è
$$
x^2 \sim \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n}}{n^2} \cos(nx) .
$$

::grafico{f="(x-2*pi*floor((x+pi)/(2*pi)))*(x-2*pi*floor((x+pi)/(2*pi)));pi^2/3-4*cos(x);pi^2/3-4*cos(x)+cos(2*x)" xmin=-10 xmax=10 ymin=-1.5 ymax=11 titolo="Prolungamento periodico di $x^2$ con le somme parziali $s_1 = \dfrac{\pi^2}{3} - 4\cos x$ (tratteggiata) e $s_2 = \dfrac{\pi^2}{3} - 4\cos x + \cos(2x)$ (rossa)"}
:::

## Convergenza puntuale

Le nozioni di convergenza puntuale, uniforme e totale per le serie di funzioni sono trattate nel capitolo sulle successioni e serie di funzioni.

:::richiamo{titolo="Convergenza puntuale di una serie di funzioni"}
La serie di funzioni $\sum f_n$ **converge puntualmente** in $x$ se la serie numerica $\sum f_n(x)$ converge; converge puntualmente su un insieme $I$ se converge in ogni punto di $I$.
:::

:::definizione{#regolare-a-tratti titolo="Funzione regolare a tratti"}
$f : \mathbb{R} \to \mathbb{R}$, $2\pi$-periodica, è **regolare a tratti** se esiste una suddivisione $-\pi = x_0 < x_1 < \dots < x_k = \pi$ tale che $f$ è derivabile con derivata continua su ciascun intervallo aperto $(x_{i-1}, x_i)$, e in ogni punto $x_i$ esistono finiti i limiti laterali di $f$ e di $f'$. Una funzione regolare a tratti può avere un numero *finito* di salti in un periodo; nei punti di salto si indicano con $f(x^+)$ e $f(x^-)$ i limiti destro e sinistro. La classe comprende le funzioni incontrate negli esercizi, come le funzioni a gradino, il dente di sega e i prolungamenti periodici dei polinomi, e in questa classe i teoremi di convergenza hanno un enunciato semplice.
:::

:::teorema{#convergenza-puntuale titolo="Teorema di convergenza puntuale"}
Sia $f$ una funzione $2\pi$-periodica e regolare a tratti. Allora la serie di Fourier di $f$ **converge** in *ogni* punto $x \in \mathbb{R}$ e la somma vale
$$
\frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl( a_n \cos(nx) + b_n \sin(nx) \bigr)
= \frac{f(x^+) + f(x^-)}{2} .
$$
Nei punti in cui $f$ è continua i due limiti laterali coincidono con $f(x)$, quindi la somma della serie è $f(x)$; nei punti di salto la somma è la **media dei due valori laterali**, qualunque sia il valore assegnato a $f$ nel punto. La dimostrazione richiede lo studio del nucleo di Dirichlet e si rimanda ai testi di riferimento. Il teorema trasforma il simbolo $\sim$ in un'uguaglianza vera punto per punto, e valutare l'uguaglianza in punti scelti è il metodo con cui dalle serie di Fourier si ricavano le somme di serie numeriche.

::grafico{f="sign(sin(x));4/pi*(sin(x)+sin(3*x)/3);4/pi*(sin(x)+sin(3*x)/3+sin(5*x)/5+sin(7*x)/7+sin(9*x)/9+sin(11*x)/11+sin(13*x)/13+sin(15*x)/15)" xmin=-7 xmax=7.3 ymin=-1.6 ymax=1.6 punti="-3.1416,0,pieno;0,0,pieno;3.1416,0,pieno" titolo="Onda quadra ($-1$ su $(-\pi, 0)$, $1$ su $(0, \pi)$) con le somme parziali fino a $\sin(3x)$ (tratteggiata) e fino a $\sin(15x)$ (rossa): nei salti ogni somma parziale vale $0$, la media dei limiti laterali"}
:::

:::esempio{titolo="Somma della serie di Σ 1/n²"}
Il prolungamento $2\pi$-periodico di $x^2$ da $[-\pi, \pi]$ è continuo *anche* nei punti $\pm\pi$, perché i valori agli estremi coincidono: $(-\pi)^2 = \pi^2$. La funzione è regolare a tratti, quindi il **teorema di convergenza puntuale** si applica e in $x = \pi$ la serie converge a $f(\pi) = \pi^2$. Poiché $\cos(n\pi) = (-1)^n$, l'uguaglianza diventa
$$
\pi^2 = \frac{\pi^2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n}}{n^2} \, (-1)^n
= \frac{\pi^2}{3} + 4 \sum_{n=1}^{\infty} \frac{1}{n^2} ,
$$
e risolvendo rispetto alla serie si ottiene
$$
\sum_{n=1}^{\infty} \frac{1}{n^2} = \frac{1}{4} \left( \pi^2 - \frac{\pi^2}{3} \right) = \frac{\pi^2}{6} .
$$
:::

:::esempio{titolo="Valore medio in un punto di salto"}
Il prolungamento periodico del dente di sega $f(x) = x$, $x \in [-\pi, \pi)$, ha un salto in $x = \pi$: il limite sinistro è $\pi$ e il limite destro, per periodicità, è $-\pi$. Per il **teorema di convergenza puntuale** la serie converge in $\pi$ alla **media** $\dfrac{\pi + (-\pi)}{2} = 0$. Il risultato è coerente con il calcolo diretto, poiché ogni addendo $\dfrac{2(-1)^{n+1}}{n} \sin(n\pi)$ è nullo.
:::

## Convergenza uniforme

:::richiamo{titolo="Convergenza totale (criterio di Weierstrass)"}
Se $|f_n(x)| \leq M_n$ per ogni $x \in I$ e la serie numerica $\sum M_n$ converge, allora la serie di funzioni $\sum f_n$ converge **totalmente**, quindi **uniformemente**, su $I$.
:::

:::teorema{#convergenza-uniforme titolo="Convergenza uniforme per funzioni continue e regolari a tratti"}
Sia $f$ una funzione $2\pi$-periodica, continua su $\mathbb{R}$ e regolare a tratti. Allora la serie dei moduli dei coefficienti $\displaystyle\sum_{n=1}^{\infty} \bigl( |a_n| + |b_n| \bigr)$ converge, quindi la serie di Fourier converge **totalmente**, e perciò **uniformemente**, a $f$ su tutto $\mathbb{R}$. La convergenza totale segue dal **criterio di Weierstrass**, poiché $|a_n \cos(nx) + b_n \sin(nx)| \leq |a_n| + |b_n|$; la convergenza della serie dei coefficienti si dimostra con l'uguaglianza di Parseval applicata alla derivata e si rimanda ai testi di riferimento. Per verificare l'ipotesi di continuità su una funzione assegnata su $[-\pi, \pi]$ occorre controllare *anche* i punti di raccordo $\pm\pi$, cioè che i valori agli estremi coincidano: il prolungamento di $x^2$ è continuo, quello di $x$ non lo è.
:::

:::richiamo{titolo="Continuità del limite uniforme"}
Se una successione di funzioni continue converge uniformemente su $I$, allora la funzione limite è **continua** su $I$.
:::

:::attenzione
Se $f$ ha *almeno un* punto di salto, la convergenza uniforme su $\mathbb{R}$ è **impossibile**: le somme parziali sono polinomi trigonometrici, quindi funzioni continue, e un limite uniforme di funzioni continue è continuo. Per il dente di sega $f(x) = x$, $x \in [-\pi, \pi)$, la serie di Fourier converge **puntualmente** ovunque ma **non uniformemente** su $\mathbb{R}$.
:::

## L'uguaglianza di Parseval

:::teorema{#uguaglianza-di-parseval titolo="Uguaglianza di Parseval"}
Sia $f$ una funzione $2\pi$-periodica con quadrato integrabile su $[-\pi, \pi]$, e siano $a_n$, $b_n$ i suoi coefficienti di Fourier. Allora
$$
\frac{1}{\pi} \int_{-\pi}^{\pi} f(x)^2\, dx
= \frac{a_0^2}{2} + \sum_{n=1}^{\infty} \bigl( a_n^2 + b_n^2 \bigr) .
$$
L'integrale del quadrato della funzione, che in fisica rappresenta l'energia del segnale, uguaglia la **somma dei quadrati dei coefficienti**: l'energia si distribuisce sulle armoniche. La dimostrazione usa la completezza del sistema trigonometrico e si rimanda ai testi di riferimento. Nell'uso pratico l'uguaglianza fornisce somme di serie numeriche con i *quadrati* dei coefficienti, dove la convergenza puntuale fornisce le somme con i coefficienti alla prima potenza.
:::

:::esempio{titolo="Somma della serie di Σ 1/n⁴"}
Per il prolungamento periodico di $f(x) = x^2$ su $[-\pi, \pi]$ i coefficienti sono $a_0 = \dfrac{2\pi^2}{3}$, $a_n = \dfrac{4(-1)^n}{n^2}$, $b_n = 0$. Il membro sinistro dell'**uguaglianza di Parseval** vale
$$
\frac{1}{\pi} \int_{-\pi}^{\pi} x^4\, dx = \frac{1}{\pi} \cdot \frac{2\pi^5}{5} = \frac{2\pi^4}{5} ,
$$
quindi l'uguaglianza diventa
$$
\frac{2\pi^4}{5} = \frac{1}{2} \cdot \frac{4\pi^4}{9} + \sum_{n=1}^{\infty} \frac{16}{n^4}
= \frac{2\pi^4}{9} + 16 \sum_{n=1}^{\infty} \frac{1}{n^4} .
$$
Risolvendo rispetto alla serie si ottiene
$$
\sum_{n=1}^{\infty} \frac{1}{n^4}
= \frac{1}{16} \left( \frac{2\pi^4}{5} - \frac{2\pi^4}{9} \right)
= \frac{1}{16} \cdot \frac{8\pi^4}{45}
= \frac{\pi^4}{90} .
$$
:::

## Periodo generico

:::definizione{#periodo-generico titolo="Serie di Fourier con periodo 2L"}
Sia $f$ una funzione $2L$-periodica integrabile su $[-L, L]$, con $L > 0$. I coefficienti di Fourier sono
$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\!\left( \frac{n\pi x}{L} \right) dx,
\qquad
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\!\left( \frac{n\pi x}{L} \right) dx,
$$
e la serie di Fourier è
$$
f(x) \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \left( a_n \cos\!\left( \frac{n\pi x}{L} \right) + b_n \sin\!\left( \frac{n\pi x}{L} \right) \right).
$$
Le formule si ottengono da quelle sul periodo $2\pi$ con la **sostituzione** $t = \dfrac{\pi x}{L}$, che trasforma una funzione $2L$-periodica di $x$ in una funzione $2\pi$-periodica di $t$. Per questo i teoremi di convergenza puntuale e uniforme, le semplificazioni per funzioni pari e dispari e l'uguaglianza di Parseval, con $\dfrac{1}{L} \displaystyle\int_{-L}^{L} f(x)^2 dx$ a sinistra, restano **validi senza modifiche**.
:::

:::esempio{titolo="Una funzione di periodo 2"}
Sia $f$ il prolungamento $2$-periodico di $f(x) = 1 - x^2$, $x \in [-1, 1]$, quindi $L = 1$. La funzione è **pari**, perciò $b_n = 0$. I coefficienti valgono
$$
a_0 = \int_{-1}^{1} (1 - x^2)\, dx = \frac{4}{3},
\qquad
a_n = \int_{-1}^{1} (1 - x^2) \cos(n\pi x)\, dx = \frac{4\,(-1)^{n+1}}{n^2 \pi^2} ,
$$
dove $a_n$ si calcola con due integrazioni per parti come per $x^2$. Poiché $f(-1) = f(1) = 0$, il prolungamento periodico è continuo e regolare a tratti, quindi la serie **converge uniformemente** e per ogni $x \in \mathbb{R}$
$$
f(x) = \frac{2}{3} + \sum_{n=1}^{\infty} \frac{4\,(-1)^{n+1}}{n^2 \pi^2} \cos(n\pi x) .
$$

::grafico{f="1-(x-2*floor((x+1)/2))*(x-2*floor((x+1)/2));2/3+4/(pi*pi)*cos(pi*x)" xmin=-4.3 xmax=4.3 ymin=-0.4 ymax=1.4 titolo="Prolungamento $2$-periodico di $1 - x^2$ e la somma parziale $s_1 = \dfrac{2}{3} + \dfrac{4}{\pi^2}\cos(\pi x)$ (tratteggiata), già vicina alla funzione su tutto $\mathbb{R}$"}
:::
