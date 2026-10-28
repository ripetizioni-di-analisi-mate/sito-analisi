---
titolo: Successioni e serie di funzioni
sommario: La convergenza puntuale e la convergenza uniforme di una successione di funzioni, i teoremi di passaggio per continuità, integrale e derivata, e la convergenza totale per le serie di funzioni.
---

## Successioni di funzioni e convergenza puntuale

:::definizione{#successione-di-funzioni titolo="Successione di funzioni"}
Una **successione di funzioni** è una famiglia $(f_n)_{n \in \mathbb{N}}$ di funzioni $f_n : A \to \mathbb{R}$, tutte definite sullo stesso insieme $A \subseteq \mathbb{R}$. Per ogni $x \in A$ fissato, i valori $f_1(x), f_2(x), f_3(x), \dots$ formano una successione numerica. Esempi: $f_n(x) = x^n$ su $[0, 1]$, $f_n(x) = \dfrac{\sin(n x)}{n}$ su $\mathbb{R}$. Il capitolo risponde a due domande: in quale senso $f_n$ può tendere a una funzione limite $f$, e quali proprietà di $f_n$ (continuità, integrale, derivata) passano alla funzione $f$.
:::

:::definizione{#convergenza-puntuale titolo="Convergenza puntuale"}
La successione $(f_n)$ **converge puntualmente** a $f$ su $A$ se per ogni $x \in A$ la successione numerica $f_n(x)$ converge a $f(x)$, cioè se
$$
\lim_{n \to +\infty} f_n(x) = f(x) \qquad \text{per ogni } x \in A .
$$
Nella definizione con $\varepsilon$: per ogni $x \in A$ e per ogni $\varepsilon > 0$ esiste $N$ tale che $|f_n(x) - f(x)| < \varepsilon$ per ogni $n \geq N$; l'indice $N$ dipende da $\varepsilon$ e *anche* dal punto $x$. La convergenza puntuale si studia con i metodi dei limiti di successioni di Analisi 1, un punto alla volta, e determina il candidato limite $f$: ogni altra nozione di convergenza del capitolo confronta $f_n$ con questa funzione.
:::

:::esempio{titolo="La successione xⁿ su [0, 1]"}
$f_n(x) = x^n$ su $[0, 1]$. Per $0 \leq x < 1$ la successione geometrica $x^n$ tende a $0$; per $x = 1$ si ha $f_n(1) = 1$ per ogni $n$. Il limite puntuale è quindi
$$
f(x) =
\begin{cases}
0 & \text{se } 0 \leq x < 1 \\[4pt]
1 & \text{se } x = 1
\end{cases}
$$
Al crescere di $n$ il grafico si abbassa verso l'asse $x$ su tutto l'intervallo $[0, 1)$, ma *ogni* curva risale fino al punto $(1, 1)$.

::grafico{f="x^3" xmin=0 xmax=1.15 ymin=0 ymax=1.15 punti="1,1" titolo="y = x³: la curva è già vicina a 0 su metà intervallo, ma arriva comunque in (1, 1)"}

::grafico{f="x^15" xmin=0 xmax=1.15 ymin=0 ymax=1.15 punti="1,1" titolo="y = x¹⁵: quasi tutto il grafico è schiacciato sull'asse x, poi risale di colpo verso (1, 1)"}
:::

:::attenzione
Il limite puntuale di funzioni continue può non essere continuo. Ogni $f_n(x) = x^n$ è continua su $[0, 1]$, ma il limite puntuale vale $0$ su $[0, 1)$ e $1$ nel punto $1$, quindi è discontinuo. La convergenza puntuale **non conserva la continuità**; per conservarla serve una nozione più forte, la convergenza uniforme.

::grafico{f="0*sqrt(1-x);x^2;x^12" xmin=0 xmax=1.2 ymin=-0.15 ymax=1.2 punti="1,0,vuoto;1,1,pieno" etichette="0.62,0.5,y = x²;0.86,0.12,y = x¹²" titolo="$y = x^2$ e $y = x^{12}$ con il limite puntuale (in colore): vale $0$ su $[0, 1)$, sull'asse $x$, e $1$ nel punto $x = 1$"}
:::

## Convergenza uniforme

:::definizione{#convergenza-uniforme titolo="Convergenza uniforme"}
La successione $(f_n)$ **converge uniformemente** a $f$ su $A$ se per ogni $\varepsilon > 0$ esiste $N$ tale che
$$
|f_n(x) - f(x)| < \varepsilon \qquad \text{per ogni } n \geq N \text{ e per ogni } x \in A .
$$
La differenza rispetto alla convergenza puntuale sta nell'ordine delle richieste: lo *stesso* indice $N$ funziona per *tutti* i punti $x \in A$ contemporaneamente. Dal punto di vista geometrico, per $n \geq N$ il grafico di $f_n$ è contenuto nel tubo di raggio $\varepsilon$ attorno al grafico di $f$, cioè nella striscia compresa tra $f - \varepsilon$ e $f + \varepsilon$. La convergenza uniforme implica quella puntuale; il viceversa non vale, come mostra la successione $x^n$ su $[0, 1)$.

::grafico{f="sin(x)+0.2*sin(5*x);sin(x)" area="sin(x)+0.3;sin(x)-0.3;0;6.6" xmin=0 xmax=6.6 ymin=-1.6 ymax=1.6 titolo="Striscia tra $f - \varepsilon$ e $f + \varepsilon$ con $f(x) = \sin x$ (tratteggiata) ed $\varepsilon = \dfrac{3}{10}$: il grafico di $f_5(x) = \sin x + \dfrac{\sin(5x)}{5}$ è tutto dentro la striscia, perché $|f_5(x) - f(x)| \leq \dfrac{1}{5}$ per ogni $x$"}
:::

:::teorema{#criterio-del-sup titolo="Criterio del sup"}
$(f_n)$ converge uniformemente a $f$ su $A$ *se e solo se*
$$
M_n = \sup_{x \in A} \, |f_n(x) - f(x)| \xrightarrow[n \to +\infty]{} 0 .
$$
L'equivalenza segue dalla definizione, poiché la condizione $|f_n(x) - f(x)| < \varepsilon$ per ogni $x \in A$ implica $M_n \leq \varepsilon$ e, viceversa, la condizione $M_n < \varepsilon$ implica $|f_n(x) - f(x)| < \varepsilon$ per ogni $x \in A$. Il criterio trasforma lo studio della convergenza uniforme in un problema di Analisi 1: per ogni $n$ si cerca il massimo di $|f_n - f|$ su $A$, di solito con lo studio della derivata, e poi si calcola il limite della successione numerica $M_n$.
:::

:::esempio{titolo="Criterio del sup con lo studio della derivata"}
$f_n(x) = x\,e^{-n x}$ su $[0, +\infty)$. Per ogni $x \geq 0$ fissato, $e^{-n x} \to 0$ se $x > 0$ e $f_n(0) = 0$, quindi il limite puntuale è $f = 0$. Poiché $f_n \geq 0$, si studia $f_n$ stessa:
$$
f_n'(x) = e^{-n x} (1 - n x),
$$
quindi $f_n$ cresce su $\left[0, \dfrac{1}{n}\right]$ e decresce dopo, e il massimo è
$$
M_n = f_n\!\left(\frac{1}{n}\right) = \frac{1}{n e} \xrightarrow[n \to +\infty]{} 0 .
$$
Perciò la convergenza è **uniforme** su $[0, +\infty)$.

::grafico{f="x*exp(-x);x*exp(-3*x);x*exp(-8*x)" xmin=0 xmax=4 ymin=-0.04 ymax=0.45 punti="1,0.3679,pieno;0.3333,0.1226,pieno;0.125,0.046,pieno" etichette="1.1,0.39,n = 1;0.42,0.15,n = 3;0.2,0.075,n = 8" titolo="$y = x\,e^{-nx}$ per $n = 1, 3, 8$: il massimo si trova in $x = \dfrac{1}{n}$, vale $\dfrac{1}{ne}$ e tende a $0$"}
:::

:::attenzione
La stessa successione può convergere uniformemente su un insieme e non su un altro. $f_n(x) = x^n$ converge puntualmente a $0$ su $[0, 1)$, ma $\sup_{x \in [0,1)} x^n = 1$ per ogni $n$, quindi la convergenza **non è uniforme** su $[0, 1)$. Su $[0, a]$ con $0 < a < 1$ risulta $M_n = a^n \to 0$, quindi la convergenza è **uniforme** su *ogni* intervallo $[0, a]$. L'insieme su cui si lavora fa parte della risposta.

::grafico{f="x^8" xmin=0 xmax=1.2 ymin=-0.1 ymax=1.2 punti="0.8,0.1678,pieno;1,1,vuoto" segmenti="0.8,0,0.8,0.1678;0,0.1678,0.8,0.1678" etichette="0.78,-0.08,a" titolo="$y = x^8$ con $a = \dfrac{4}{5}$: su $[0, a]$ il massimo è $a^8 \approx 0{,}17$, mentre su $[0, 1)$ i valori si avvicinano a $1$ per $x \to 1^-$"}
:::

:::osservazione
Lo studio di una successione di funzioni segue uno schema in due tempi. Prima si calcola il limite puntuale $f$, punto per punto, distinguendo i casi quando l'espressione lo richiede. Poi si studia $M_n = \sup |f_n - f|$ sull'insieme assegnato e sugli eventuali sottoinsiemi su cui la convergenza migliora, come negli esempi $[0, a] \subset [0, 1)$ oppure $[\delta, +\infty) \subset (0, +\infty)$.
:::

## Continuità del limite uniforme

::::teorema{#continuita-del-limite-uniforme titolo="Continuità del limite uniforme"}
Se le $f_n$ sono continue su $A$ e $f_n \to f$ uniformemente su $A$, allora $f$ è **continua** su $A$. Il teorema si usa anche *al contrario*: se il limite puntuale di funzioni continue è discontinuo, come per $x^n$ su $[0, 1]$, la convergenza **non può essere uniforme**.

:::dimostrazione
Siano $x_0 \in A$ ed $\varepsilon > 0$ fissati. Per la convergenza uniforme esiste un indice $n$ tale che
$$
|f_n(x) - f(x)| < \frac{\varepsilon}{3} \qquad \text{per ogni } x \in A .
$$
Poiché $f_n$ è continua in $x_0$, esiste $\delta > 0$ tale che $|f_n(x) - f_n(x_0)| < \dfrac{\varepsilon}{3}$ per ogni $x \in A$ con $|x - x_0| < \delta$. Per tali $x$, dalla **disuguaglianza triangolare** segue
$$
\begin{aligned}
|f(x) - f(x_0)|
&\leq |f(x) - f_n(x)| + |f_n(x) - f_n(x_0)| + |f_n(x_0) - f(x_0)| \\[4pt]
&< \frac{\varepsilon}{3} + \frac{\varepsilon}{3} + \frac{\varepsilon}{3} = \varepsilon ,
\end{aligned}
$$
quindi $f$ è continua in $x_0$. Poiché $x_0$ è un punto qualunque di $A$, $f$ è **continua** su $A$.
:::
::::

:::attenzione
Il teorema *non* si inverte: il limite puntuale può essere continuo anche quando la convergenza non è uniforme. $f_n(x) = n x (1 - x)^n$ su $[0, 1]$ converge puntualmente a $0$, che è una funzione continua; il massimo si trova in $x = \dfrac{1}{n+1}$ e vale $\left(\dfrac{n}{n+1}\right)^{n+1} \to \dfrac{1}{e} \neq 0$, quindi la convergenza **non è uniforme**.

::grafico{f="3*x*(1-x)^3;10*x*(1-x)^10;40*x*(1-x)^40" xmin=0 xmax=1.05 ymin=-0.04 ymax=0.45 asintoti="y=0.3679" etichette="0.42,0.3,n = 3;0.17,0.39,n = 10;0.04,0.41,n = 40" titolo="$y = nx(1 - x)^n$ per $n = 3, 10, 40$: il picco si sposta verso $0$, ma la sua altezza tende a $\dfrac{1}{e}$ (retta tratteggiata)"}
:::

## Passaggio al limite sotto il segno di integrale

:::teorema{#scambio-limite-integrale titolo="Passaggio al limite sotto il segno di integrale"}
Se le $f_n$ sono continue su $[a, b]$ e $f_n \to f$ uniformemente su $[a, b]$, allora $f$ è continua, quindi integrabile, e
$$
\lim_{n \to +\infty} \int_a^b f_n(x)\,dx = \int_a^b f(x)\,dx .
$$
La tesi segue dalla maggiorazione
$$
\left| \int_a^b f_n(x)\,dx - \int_a^b f(x)\,dx \right|
\leq \int_a^b |f_n(x) - f(x)|\,dx
\leq (b - a) \, M_n ,
$$
poiché $M_n = \sup_{[a,b]} |f_n - f| \to 0$ per la convergenza uniforme. Il teorema permette di calcolare il limite di una successione di integrali senza calcolare i *singoli* integrali: si integra direttamente la funzione limite.
:::

:::attenzione
Con la *sola* convergenza puntuale lo scambio di limite e integrale **può non valere**. $f_n(x) = 2 n^2 x \, e^{-n^2 x^2}$ su $[0, 1]$ converge puntualmente a $0$, ma
$$
\int_0^1 2 n^2 x \, e^{-n^2 x^2} dx
= \Bigl[ -e^{-n^2 x^2} \Bigr]_0^1
= 1 - e^{-n^2} \xrightarrow[n \to +\infty]{} 1 \neq 0 .
$$
L'area sotto il grafico si concentra in un picco sempre più alto e stretto vicino a $0$, che la convergenza puntuale non controlla.

::grafico{f="2*x*exp(-x*x);8*x*exp(-4*x*x);32*x*exp(-16*x*x)" area="32*x*exp(-16*x*x);0;0;1" xmin=0 xmax=1.15 ymin=-0.2 ymax=3.8 etichette="0.75,1,n = 1;0.42,1.85,n = 2;0.22,3.55,n = 4" titolo="$y = 2n^2 x\,e^{-n^2 x^2}$ per $n = 1, 2, 4$: il picco cresce e si stringe vicino a $0$, mentre l'area su $[0, 1]$, colorata per $n = 4$, vale $1 - e^{-n^2}$"}
:::

## Derivazione per successioni

:::teorema{#derivazione-per-successioni titolo="Teorema di derivazione per successioni"}
Siano $f_n \in C^1([a, b])$ tali che
$$
\begin{cases}
f_n(x_0) \text{ converge per almeno un punto } x_0 \in [a, b] \\[4pt]
f_n' \to g \text{ uniformemente su } [a, b]
\end{cases}
$$
Allora $f_n$ converge uniformemente su $[a, b]$ a una funzione $f \in C^1([a, b])$ e risulta $f' = g$, cioè
$$
\left( \lim_{n \to +\infty} f_n \right)' = \lim_{n \to +\infty} f_n' .
$$
L'ipotesi di convergenza uniforme riguarda le derivate $f_n'$, *non* le $f_n$: la convergenza uniforme delle $f_n$ da sola non dà alcuna informazione sulle derivate, come mostra il controesempio sotto. La dimostrazione scrive $f_n(x) = f_n(x_0) + \displaystyle\int_{x_0}^{x} f_n'(t)\,dt$ e applica alle derivate il **passaggio al limite sotto il segno di integrale**.
:::

:::attenzione
$f_n(x) = \dfrac{\sin(n^2 x)}{n}$ converge uniformemente a $0$ su $\mathbb{R}$, perché $\sup_{\mathbb{R}} |f_n| = \dfrac{1}{n} \to 0$. Le derivate sono $f_n'(x) = n \cos(n^2 x)$, e in $x = 0$ si ha $f_n'(0) = n \to +\infty$, mentre la derivata del limite è $0$. Quindi dalla convergenza uniforme delle $f_n$ **non segue** la convergenza delle derivate.

::grafico{f="sin(9*x)/3;3*x" xmin=-1.5 xmax=1.5 ymin=-1.1 ymax=1.1 uguale=1 titolo="$y = \dfrac{\sin(9x)}{3}$, cioè $n = 3$: i valori restano tra $-\dfrac{1}{3}$ e $\dfrac{1}{3}$, ma la retta tangente nell'origine (tratteggiata) ha pendenza $3 = n$"}
:::

## Serie di funzioni

:::definizione{#serie-di-funzioni titolo="Serie di funzioni e convergenza puntuale"}
Data una successione di funzioni $f_n : A \to \mathbb{R}$, la **serie di funzioni** $\displaystyle\sum_{n=1}^{\infty} f_n$ è la successione delle **somme parziali**
$$
s_N(x) = \sum_{n=1}^{N} f_n(x) .
$$
La serie **converge puntualmente** in $x \in A$ se la serie numerica $\displaystyle\sum_{n=1}^{\infty} f_n(x)$ converge; la somma è la funzione $f(x) = \displaystyle\lim_{N \to +\infty} s_N(x)$, definita sull'insieme di convergenza. Per ogni $x$ fissato si applicano i criteri delle serie numeriche (confronto, rapporto, radice, Leibniz), per i quali si rimanda al capitolo sulle serie di Analisi 1.
:::

:::definizione{#convergenza-uniforme-serie titolo="Convergenza uniforme di una serie"}
La serie $\sum f_n$ **converge uniformemente** su $A$ se la successione delle somme parziali $s_N$ converge uniformemente su $A$ alla somma $f$, cioè se
$$
\sup_{x \in A} \, \bigl| f(x) - s_N(x) \bigr|
= \sup_{x \in A} \, \left| \sum_{n = N+1}^{\infty} f_n(x) \right|
\xrightarrow[N \to +\infty]{} 0 .
$$
La quantità da controllare è il **resto** $N$-esimo della serie. Poiché la somma $f$ in genere non è nota in forma esplicita, questa condizione si verifica di rado in modo diretto; il criterio di convergenza totale la sostituisce con una condizione sui soli termini $f_n$.
:::

:::definizione{#convergenza-totale titolo="Convergenza totale"}
La serie $\sum f_n$ **converge totalmente** su $A$ se esiste una successione numerica $(M_n)$ tale che
$$
\begin{cases}
|f_n(x)| \leq M_n \ \text{ per ogni } x \in A \\[4pt]
\displaystyle\sum_{n=1}^{\infty} M_n \ \text{ converge}
\end{cases}
$$
La scelta più precisa è $M_n = \sup_{A} |f_n|$: la convergenza totale equivale alla convergenza della serie numerica $\sum_n \sup_A |f_n|$. La condizione si verifica maggiorando ciascun termine, *senza* conoscere la somma della serie, e per questo è lo strumento di lavoro standard sugli esercizi.
:::

::::teorema{#totale-implica-uniforme titolo="Criterio di Weierstrass: totale implica uniforme"}
Se $\sum f_n$ converge totalmente su $A$, allora converge **assolutamente** in ogni punto di $A$ e **uniformemente** su $A$. La catena tra le nozioni di convergenza è
$$
\text{totale} \implies \text{uniforme} \implies \text{puntuale},
$$
e *nessuna* delle due implicazioni si inverte.

:::dimostrazione
Sia $(M_n)$ come nella definizione di convergenza totale. Per ogni $x \in A$ fissato si ha $0 \leq |f_n(x)| \leq M_n$ e la serie $\sum M_n$ converge, quindi per il **criterio del confronto** la serie $\sum |f_n(x)|$ converge. Perciò la serie converge assolutamente, dunque puntualmente, e ha una somma $f(x)$ in ogni punto di $A$. Per il resto $N$-esimo, per ogni $x \in A$ risulta
$$
\bigl| f(x) - s_N(x) \bigr|
= \left| \sum_{n=N+1}^{\infty} f_n(x) \right|
\leq \sum_{n=N+1}^{\infty} |f_n(x)|
\leq \sum_{n=N+1}^{\infty} M_n ,
$$
quindi $\sup_{A} |f - s_N| \leq \displaystyle\sum_{n=N+1}^{\infty} M_n$. Poiché la serie $\sum M_n$ converge, la sua coda tende a $0$ per $N \to +\infty$, perciò la convergenza è **uniforme** su $A$.
:::
::::

:::richiamo{titolo="Criterio del confronto"}
Se $0 \leq a_n \leq b_n$ definitivamente e $\sum b_n$ converge, allora $\sum a_n$ **converge**.
:::

:::esempio{titolo="Convergenza totale su ℝ"}
$\displaystyle\sum_{n=1}^{\infty} \frac{\cos(n x)}{2^n}$ su $\mathbb{R}$. Poiché $|\cos(n x)| \leq 1$ per ogni $x$, si ha
$$
\left| \frac{\cos(n x)}{2^n} \right| \leq \frac{1}{2^n} = M_n ,
$$
e la serie geometrica $\sum \dfrac{1}{2^n}$ converge. Quindi la serie **converge totalmente** su $\mathbb{R}$, perciò anche uniformemente e puntualmente in ogni punto.

::grafico{f="(0.5*cos(x)-0.25)/(1.25-cos(x));cos(x)/2;cos(x)/2+cos(2*x)/4" xmin=-3.5 xmax=3.5 ymin=-0.8 ymax=1.2 titolo="Somma della serie (in colore) e somme parziali $s_1$ (tratteggiata) e $s_2$ (rossa): su tutto $\mathbb{R}$ lo scarto tra $s_N$ e la somma è al più $\dfrac{1}{2^N}$"}
:::

:::attenzione
La convergenza totale è una condizione *sufficiente* ma *non necessaria* per la convergenza uniforme. La serie $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n + x^2}$ converge puntualmente su $\mathbb{R}$ per il **criterio di Leibniz** e il resto soddisfa $|f(x) - s_N(x)| \leq \dfrac{1}{N + 1 + x^2} \leq \dfrac{1}{N+1} \to 0$, quindi la convergenza è **uniforme** su $\mathbb{R}$. Però $\sup_{\mathbb{R}} \left| \dfrac{(-1)^n}{n + x^2} \right| = \dfrac{1}{n}$ e la serie armonica diverge, quindi la convergenza **non è totale**.
:::

:::richiamo{titolo="Criterio di Leibniz"}
Se $(a_n)$ è decrescente e $a_n \to 0$, la serie $\sum (-1)^n a_n$ **converge** e il resto soddisfa $|s - s_N| \leq a_{N+1}$.
:::

## Continuità, integrazione e derivazione termine a termine

I teoremi di passaggio per le successioni, applicati alle somme parziali $s_N$, danno i tre risultati seguenti.

:::teorema{#continuita-della-somma titolo="Continuità della somma"}
Se le $f_n$ sono continue su $A$ e la serie $\sum f_n$ converge uniformemente su $A$ (in particolare se converge totalmente), la somma $f$ è **continua** su $A$. L'enunciato segue dalla **continuità del limite uniforme**, poiché le somme parziali $s_N$ sono continue come somme finite di funzioni continue. La continuità è una proprietà locale, quindi per concludere che $f$ è continua su $A$ basta la convergenza totale su *ogni* intervallo chiuso e limitato contenuto in $A$; questa osservazione si usa quando la convergenza totale su tutto $A$ non sussiste.
:::

:::teorema{#integrazione-termine-a-termine titolo="Integrazione termine a termine"}
Se le $f_n$ sono continue su $[a, b]$ e la serie $\sum f_n$ converge uniformemente su $[a, b]$ con somma $f$, allora
$$
\int_a^b f(x)\,dx = \sum_{n=1}^{\infty} \int_a^b f_n(x)\,dx .
$$
L'enunciato segue dal **passaggio al limite sotto il segno di integrale** applicato alle $s_N$, poiché l'integrale di $s_N$ è la somma parziale della serie degli integrali. Il teorema trasforma l'integrale di una somma infinita, in genere non calcolabile direttamente, nella serie numerica degli integrali dei singoli termini.
:::

:::teorema{#derivazione-termine-a-termine titolo="Derivazione termine a termine"}
Siano $f_n \in C^1([a, b])$ tali che
$$
\begin{cases}
\displaystyle\sum f_n(x_0) \ \text{ converge per almeno un punto } x_0 \in [a, b] \\[4pt]
\displaystyle\sum f_n' \ \text{ converge uniformemente su } [a, b]
\end{cases}
$$
Allora la serie $\sum f_n$ converge uniformemente su $[a, b]$, la somma $f$ è di classe $C^1$ e
$$
f'(x) = \sum_{n=1}^{\infty} f_n'(x) .
$$
L'enunciato è il **teorema di derivazione per successioni** applicato alle somme parziali. Negli esercizi l'ipotesi sulla serie delle derivate si verifica quasi sempre con la **convergenza totale** di $\sum f_n'$.
:::

:::esempio{titolo="Derivazione termine a termine"}
$f(x) = \displaystyle\sum_{n=1}^{\infty} \frac{\sin(n x)}{n^3}$ su $\mathbb{R}$. La serie **converge totalmente** su $\mathbb{R}$ perché $\left| \dfrac{\sin(n x)}{n^3} \right| \leq \dfrac{1}{n^3}$ e $\sum \dfrac{1}{n^3}$ converge, quindi $f$ è definita e **continua** su $\mathbb{R}$. La serie delle derivate è
$$
\sum_{n=1}^{\infty} \frac{\cos(n x)}{n^2},
$$
che converge totalmente su $\mathbb{R}$ con $M_n = \dfrac{1}{n^2}$. *Entrambe* le ipotesi del teorema sono verificate su ogni intervallo $[-a, a]$, quindi $f \in C^1(\mathbb{R})$ e $f'(x) = \displaystyle\sum_{n=1}^{\infty} \frac{\cos(n x)}{n^2}$.
:::
