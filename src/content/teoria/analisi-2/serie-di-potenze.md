---
titolo: Serie di potenze e serie di Taylor
sommario: Dove converge una serie di potenze, come si calcolano il raggio e l'insieme di convergenza, come si deriva e si integra termine a termine, e come gli sviluppi di Taylor rappresentano le funzioni elementari.
---

## Serie di potenze e raggio di convergenza

:::definizione{#serie-di-potenze titolo="Serie di potenze"}
Una **serie di potenze** centrata in $x_0 \in \mathbb{R}$ è una serie della forma
$$
\sum_{n=0}^{\infty} a_n (x - x_0)^n = a_0 + a_1 (x - x_0) + a_2 (x - x_0)^2 + \cdots
$$
dove i numeri $a_n$ sono i **coefficienti** e $x_0$ è il **centro**; per convenzione $(x - x_0)^0 = 1$ anche in $x = x_0$. Per ogni valore fissato di $x$ la serie è una serie numerica, quindi lo studio di una serie di potenze è lo studio dell'insieme dei punti $x$ in cui quella serie numerica converge. In $x = x_0$ tutti i termini con $n \geq 1$ sono nulli, perciò *ogni* serie di potenze converge *almeno* nel proprio centro, con somma $a_0$. I criteri di convergenza per le serie numeriche sono nel capitolo sulle serie di Analisi 1.
:::

:::esempio{titolo="La serie geometrica come serie di potenze"}
La serie $\displaystyle\sum_{n=0}^{\infty} x^n$ è una serie di potenze centrata in $0$ con tutti i coefficienti uguali a $1$. Per $|x| < 1$ è una serie geometrica convergente con somma $\dfrac{1}{1 - x}$; per $|x| \geq 1$ il termine generale $x^n$ non tende a $0$, quindi la serie **non converge**. L'insieme di convergenza è l'intervallo $(-1, 1)$, simmetrico rispetto al centro. Il **teorema del raggio di convergenza** mostra che questa forma dell'insieme di convergenza è generale.

::grafico{f="1/(1-x);1+x+x^2;(1-x^7)/(1-x)" xmin=-1.6 xmax=1.6 ymin=-3 ymax=8 asintoti="x=1" segmenti="-1,-3,-1,8" titolo="$y = \dfrac{1}{1 - x}$ con le somme parziali $1 + x + x^2$ (tratteggiata) e $1 + x + \dots + x^6$ (rossa): dentro $(-1, 1)$ si avvicinano alla somma, fuori se ne allontanano"}
:::

::::teorema{#teorema-del-raggio titolo="Teorema del raggio di convergenza"}
Per ogni serie di potenze $\sum a_n (x - x_0)^n$ esiste un unico $R \in [0, +\infty]$, detto **raggio di convergenza**, tale che

- se $|x - x_0| < R$ la serie converge assolutamente;
- se $|x - x_0| > R$ la serie non converge.

Nei casi estremi: se $R = 0$ la serie converge solo in $x_0$; se $R = +\infty$ la serie converge assolutamente per ogni $x \in \mathbb{R}$. Il teorema riduce lo studio della convergenza al calcolo del numero $R$; nei punti con $|x - x_0| = R$ *non* afferma nulla, quindi gli estremi richiedono uno studio a parte.

:::dimostrazione
Si dimostra prima il fatto seguente: se la serie converge in un punto $x_1 \neq x_0$, allora converge assolutamente in ogni $x$ con $|x - x_0| < |x_1 - x_0|$. Poiché la serie numerica $\sum a_n (x_1 - x_0)^n$ converge, per la **condizione necessaria di convergenza** il termine generale tende a $0$, quindi è limitato: esiste $M > 0$ tale che $|a_n (x_1 - x_0)^n| \leq M$ per ogni $n$. Fissato $x$ con $|x - x_0| < |x_1 - x_0|$, si pone $q = \dfrac{|x - x_0|}{|x_1 - x_0|} < 1$ e si maggiora:
$$
|a_n (x - x_0)^n|
= |a_n (x_1 - x_0)^n| \cdot q^n
\leq M q^n .
$$
La serie geometrica $\sum M q^n$ converge perché $0 \leq q < 1$, quindi per il **criterio del confronto** la serie $\sum |a_n (x - x_0)^n|$ converge.

Si pone ora
$$
R = \sup \{ |x - x_0| : \text{la serie converge in } x \} ,
$$
estremo superiore di un insieme non vuoto, perché contiene $0$. Se $|x - x_0| < R$, per definizione di estremo superiore esiste un punto di convergenza $x_1$ con $|x - x_0| < |x_1 - x_0|$, quindi per il fatto iniziale la serie converge assolutamente in $x$. Se $|x - x_0| > R$, la serie **non converge** in $x$, perché in caso contrario il numero $|x - x_0|$ apparterrebbe all'insieme e sarebbe maggiore del suo estremo superiore, il che è assurdo.
:::
::::

:::richiamo{titolo="Condizione necessaria di convergenza"}
Se la serie numerica $\sum a_n$ converge, allora $a_n \to 0$; in particolare la successione $a_n$ è **limitata**.
:::

:::richiamo{titolo="Criterio del confronto"}
Se $0 \leq a_n \leq b_n$ definitivamente e $\sum b_n$ converge, allora $\sum a_n$ **converge**.
:::

:::definizione{#insieme-di-convergenza titolo="Insieme di convergenza"}
L'**insieme di convergenza** $E$ di una serie di potenze è l'insieme dei punti $x$ in cui la serie converge. Per $0 < R < +\infty$, dal teorema del raggio segue
$$
(x_0 - R,\; x_0 + R) \subseteq E \subseteq [x_0 - R,\; x_0 + R] ,
$$
quindi $E$ è un intervallo centrato in $x_0$ che contiene l'intervallo aperto e può includere o escludere *ciascuno* dei due estremi. Lo studio completo di una serie di potenze consiste perciò in due passi: il calcolo di $R$ e lo studio della serie numerica in ciascuno dei punti $x_0 - R$ e $x_0 + R$.
:::

## Calcolo del raggio

:::teorema{#calcolo-raggio-rapporto titolo="Criterio del rapporto per il raggio"}
Se $a_n \neq 0$ definitivamente ed esiste
$$
\lim_{n \to \infty} \frac{|a_{n+1}|}{|a_n|} = \ell \in [0, +\infty] ,
$$
allora $R = \dfrac{1}{\ell}$, con le convenzioni $R = +\infty$ per $\ell = 0$ e $R = 0$ per $\ell = +\infty$. L'enunciato segue applicando il **criterio del rapporto** alla serie dei moduli: per $x \neq x_0$ il rapporto tra due termini consecutivi tende a $\ell \, |x - x_0|$, che è minore di $1$ *se e solo se* $|x - x_0| < \dfrac{1}{\ell}$, e maggiore di $1$ (con termine generale che non tende a $0$) se $|x - x_0| > \dfrac{1}{\ell}$. Per la serie $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$ il rapporto è $\dfrac{n!}{(n+1)!} = \dfrac{1}{n+1} \to 0$, quindi $R = +\infty$.
:::

:::richiamo{titolo="Criterio del rapporto per le serie numeriche"}
Sia $\sum b_n$ a termini positivi con $\dfrac{b_{n+1}}{b_n} \to L$. Se $L < 1$ la serie **converge**; se $L > 1$ la serie **diverge** e $b_n \to +\infty$.
:::

:::teorema{#calcolo-raggio-radice titolo="Criterio della radice per il raggio"}
Se esiste
$$
\lim_{n \to \infty} \sqrt[n]{|a_n|} = \ell \in [0, +\infty] ,
$$
allora $R = \dfrac{1}{\ell}$, con le stesse convenzioni del criterio del rapporto. La giustificazione è identica, con il **criterio della radice** al posto del criterio del rapporto. Questo criterio è adatto quando il coefficiente $a_n$ è una potenza $n$-esima: per $\displaystyle\sum_{n=1}^{\infty} \left( \frac{n}{2n+1} \right)^{\! n} x^n$ si ha $\sqrt[n]{|a_n|} = \dfrac{n}{2n+1} \to \dfrac{1}{2}$, quindi $R = 2$.
:::

:::osservazione{#serie-lacunari titolo="Serie lacunari"}
Una serie di potenze è **lacunare** se contiene *solo* alcune potenze, per esempio solo quelle pari ($x^{2n}$), solo quelle dispari ($x^{2n+1}$) o solo i multipli di tre ($x^{3n}$). Nella successione dei coefficienti compaiono infiniti zeri, quindi le formule sul rapporto e sulla radice dei coefficienti **non si applicano**. In questi casi si studia la serie con una sostituzione: per $\displaystyle\sum_{n=0}^{\infty} \frac{x^{2n}}{4^n}$ si pone $t = x^2$ e si ottiene la serie geometrica $\sum \left( \dfrac{t}{4} \right)^{\! n}$, che converge se e solo se $|t| < 4$, cioè $x^2 < 4$, cioè $|x| < 2$. Il raggio è quindi $R = 2$ e *non* $4$. In alternativa si applica il criterio del rapporto o della radice direttamente ai termini della serie, con $x$ come parametro.
:::

## Comportamento agli estremi

:::osservazione{#comportamento-agli-estremi titolo="Studio degli estremi"}
Nei punti $x = x_0 - R$ e $x = x_0 + R$ il teorema del raggio non dà informazioni, e *non* esiste un criterio generale. Si sostituisce ciascuno dei due valori nella serie e si studia la serie numerica ottenuta con i criteri delle serie: confronto e confronto asintotico, criterio di Leibniz per le serie a segni alterni, criterio dell'integrale. I due estremi possono comportarsi in modo diverso tra loro, e tutti i comportamenti si realizzano.
:::

:::esempio{titolo="Tre serie con lo stesso raggio e insiemi di convergenza diversi"}
Le serie $\displaystyle\sum_{n=1}^{\infty} x^n$, $\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n}$, $\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n^2}$ hanno tutte raggio $R = 1$.

- $\displaystyle\sum x^n$: in $x = \pm 1$ il termine generale non tende a $0$, quindi la serie **non converge** in nessuno dei due estremi e $E = (-1, 1)$.
- $\displaystyle\sum \frac{x^n}{n}$: in $x = 1$ è la serie armonica, che diverge; in $x = -1$ è la serie $\sum \dfrac{(-1)^n}{n}$, che converge per il **criterio di Leibniz**. Quindi $E = [-1, 1)$.
- $\displaystyle\sum \frac{x^n}{n^2}$: in $x = \pm 1$ il modulo del termine generale è $\dfrac{1}{n^2}$, termine di una serie convergente, quindi la serie **converge assolutamente** in entrambi gli estremi e $E = [-1, 1]$.
:::

## Convergenza totale e continuità della somma

:::richiamo{titolo="Convergenza totale"}
La serie di funzioni $\sum f_n$ converge totalmente sull'insieme $I$ se la serie numerica $\displaystyle\sum_{n} \, \sup_{x \in I} |f_n(x)|$ converge. La convergenza totale implica la **convergenza uniforme** su $I$. (Capitolo sulle successioni e serie di funzioni.)
:::

::::teorema{#convergenza-totale-compatti titolo="Convergenza totale sui compatti interni"}
Sia $R > 0$ il raggio di convergenza della serie $\sum a_n (x - x_0)^n$. Per *ogni* $r$ con $0 < r < R$ la serie **converge totalmente** sull'intervallo $[x_0 - r,\; x_0 + r]$. Da questo teorema seguono le proprietà della somma: continuità, derivabilità e integrabilità termine a termine.

:::dimostrazione
Per $x \in [x_0 - r, x_0 + r]$ si ha $|a_n (x - x_0)^n| \leq |a_n| \, r^n$, e il valore $|a_n| \, r^n$ è raggiunto in $x = x_0 + r$, quindi
$$
\sup_{x \in [x_0 - r,\, x_0 + r]} |a_n (x - x_0)^n| = |a_n| \, r^n .
$$
Poiché $r < R$, il punto $x_0 + r$ è interno all'intervallo di convergenza, quindi per il **teorema del raggio** la serie converge assolutamente in quel punto, cioè la serie $\sum |a_n| \, r^n$ converge. Perciò la serie degli estremi superiori converge e la convergenza è **totale**.
:::
::::

:::teorema{#continuita-della-somma titolo="Continuità della somma"}
Sia $R > 0$. La funzione somma
$$
f(x) = \sum_{n=0}^{\infty} a_n (x - x_0)^n
$$
è **continua** sull'intervallo aperto $(x_0 - R,\; x_0 + R)$. Ogni punto dell'intervallo aperto appartiene a un compatto $[x_0 - r, x_0 + r]$ con $r < R$; su quel compatto la convergenza è **totale**, quindi **uniforme**, e la somma di una serie uniformemente convergente di funzioni continue è continua, per il teorema di continuità della somma del capitolo sulle successioni e serie di funzioni.
:::

:::richiamo{titolo="Continuità della somma di una serie uniformemente convergente"}
Se le funzioni $f_n$ sono continue su $I$ e la serie $\sum f_n$ converge uniformemente su $I$, allora la somma è **continua** su $I$. (Capitolo sulle successioni e serie di funzioni.)
:::

:::teorema{#teorema-di-abel titolo="Teorema di Abel"}
Sia $0 < R < +\infty$. Se la serie converge nell'estremo $x_0 + R$, allora la somma $f$ è **continua** *anche* in quel punto da sinistra:
$$
\lim_{x \to (x_0 + R)^-} f(x) = \sum_{n=0}^{\infty} a_n R^n .
$$
L'enunciato analogo vale nell'estremo $x_0 - R$. La dimostrazione si omette. Il teorema permette di estendere un'uguaglianza tra una funzione e una serie di potenze fino a un estremo in cui la serie converge: con questo argomento si giustifica, per esempio, la validità dello sviluppo di $\ln(1 + x)$ in $x = 1$.
:::

## Derivazione e integrazione termine a termine

:::teorema{#derivazione-termine-a-termine titolo="Derivazione termine a termine"}
Sia $f(x) = \displaystyle\sum_{n=0}^{\infty} a_n (x - x_0)^n$ con raggio $R > 0$. La serie delle derivate
$$
\sum_{n=1}^{\infty} n \, a_n (x - x_0)^{n-1}
$$
ha lo *stesso* raggio di convergenza $R$; la funzione $f$ è **derivabile** su $(x_0 - R, x_0 + R)$ e la sua derivata è la somma della serie delle derivate. Iterando, $f$ è di classe $C^{\infty}$ sull'intervallo aperto e ogni derivata si ottiene derivando la serie termine a termine. La dimostrazione usa la convergenza totale sui compatti interni e il **teorema di derivazione per le serie di funzioni**, e si rimanda al capitolo sulle successioni e serie di funzioni.
:::

:::teorema{#integrazione-termine-a-termine titolo="Integrazione termine a termine"}
Con le stesse ipotesi, per ogni $x \in (x_0 - R, x_0 + R)$ vale
$$
\int_{x_0}^{x} f(t) \, dt = \sum_{n=0}^{\infty} \frac{a_n}{n+1} (x - x_0)^{n+1} ,
$$
e la serie integrata ha lo *stesso* raggio $R$. Lo scambio tra integrale e serie è lecito perché sul compatto di estremi $x_0$ e $x$ la convergenza è **totale**, quindi **uniforme**; il teorema di integrazione per le serie di funzioni è nel capitolo corrispondente. Derivazione e integrazione termine a termine producono sviluppi nuovi a partire da sviluppi noti, come gli sviluppi di $\ln(1 + x)$ e di $\arctan x$.
:::

:::esempio{titolo="Derivata della serie geometrica"}
Per $|x| < 1$ vale $\dfrac{1}{1 - x} = \displaystyle\sum_{n=0}^{\infty} x^n$. **Derivando termine a termine**, per $|x| < 1$:
$$
\frac{1}{(1 - x)^2} = \sum_{n=1}^{\infty} n \, x^{n-1} ,
\qquad
\sum_{n=1}^{\infty} n \, x^{n} = \frac{x}{(1 - x)^2} .
$$
La seconda uguaglianza si ottiene moltiplicando la prima per $x$ e viene usata per sommare serie numeriche come $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$.
:::

## Serie di Taylor

:::definizione{#serie-di-taylor titolo="Serie di Taylor e di MacLaurin"}
Sia $f$ di classe $C^{\infty}$ in un intorno di $x_0$. La **serie di Taylor** di $f$ centrata in $x_0$ è la serie di potenze
$$
\sum_{n=0}^{\infty} \frac{f^{(n)}(x_0)}{n!} (x - x_0)^n ,
$$
le cui somme parziali sono i polinomi di Taylor di $f$ in $x_0$. Per $x_0 = 0$ la serie si chiama **serie di MacLaurin**. La serie è definita per ogni funzione $C^{\infty}$; se e dove la sua somma coincida con $f$ va verificato caso per caso, per esempio con il criterio di sviluppabilità.
:::

::::teorema{#unicita-dello-sviluppo titolo="Unicità dello sviluppo in serie di potenze"}
Se $f(x) = \displaystyle\sum_{n=0}^{\infty} a_n (x - x_0)^n$ per ogni $x$ in un intervallo $(x_0 - \delta, x_0 + \delta)$ con $\delta > 0$, allora
$$
a_n = \frac{f^{(n)}(x_0)}{n!} \qquad \text{per ogni } n .
$$
L'*unica* serie di potenze centrata in $x_0$ che può rappresentare $f$ è quindi la sua **serie di Taylor**. Per questo uno sviluppo ottenuto con un procedimento qualsiasi tra quelli leciti (sostituzione in uno sviluppo noto, somma, prodotto per una potenza, derivazione, integrazione) è automaticamente la serie di Taylor della funzione, senza calcolare le derivate.

:::dimostrazione
Per il **teorema di derivazione termine a termine**, $f$ è di classe $C^{\infty}$ sull'intervallo e, derivando $k$ volte,
$$
f^{(k)}(x) = \sum_{n=k}^{\infty} n (n-1) \cdots (n-k+1) \, a_n (x - x_0)^{n-k} .
$$
In $x = x_0$ tutti i termini con $n > k$ si annullano, perché contengono una potenza positiva di $x - x_0$, quindi resta *solo* il termine con $n = k$, che vale $k! \, a_k$. Perciò $f^{(k)}(x_0) = k! \, a_k$, cioè $a_k = \dfrac{f^{(k)}(x_0)}{k!}$.
:::
::::

:::richiamo{titolo="Derivazione termine a termine"}
Se $f$ è somma di una serie di potenze con raggio $R > 0$, allora $f$ è **derivabile** su $(x_0 - R, x_0 + R)$ e $f'$ è la somma della serie delle derivate, che ha lo stesso raggio.
:::

:::definizione{#funzione-analitica titolo="Funzione analitica"}
$f$ è **analitica** in $x_0$ (o **sviluppabile in serie di Taylor** in $x_0$) se esiste un intorno di $x_0$ in cui $f$ coincide con la somma della sua serie di Taylor centrata in $x_0$; è analitica su un aperto se lo è in ogni suo punto. Le funzioni elementari (esponenziali, logaritmi, potenze, funzioni trigonometriche e loro inverse) sono analitiche in ogni punto interno al dominio, quindi per queste funzioni gli sviluppi notevoli rappresentano davvero la funzione nelle regioni indicate.
:::

:::attenzione
Essere di classe $C^{\infty}$ *non basta* per essere analitica. La funzione $f(x) = e^{-1/x^2}$ per $x \neq 0$, prolungata con $f(0) = 0$, è $C^{\infty}$ su $\mathbb{R}$ e tutte le sue derivate in $0$ sono nulle, quindi la sua serie di MacLaurin è la serie identicamente nulla, che converge per ogni $x$ con somma $0$. La somma coincide con $f$ solo in $x = 0$, perciò $f$ **non è analitica** in $0$.

::grafico{f="exp(-1/(x*x))" legenda="y = e^{-1/x^2}" xmin=-2.5 xmax=2.5 ymin=-0.2 ymax=1.1 punti="0,0,pieno" titolo="$y = e^{-1/x^2}$ prolungata con $0$ nell'origine: tutte le derivate in $0$ sono nulle"}
:::

:::teorema{#criterio-di-sviluppabilita titolo="Criterio di sviluppabilità"}
Sia $f$ di classe $C^{\infty}$ sull'intervallo $I$ centrato in $x_0$ e sia $T_n$ il suo polinomio di Taylor di grado $n$. Allora $f$ coincide con la somma della sua serie di Taylor in $x \in I$ *se e solo se* il resto $R_n(x) = f(x) - T_n(x)$ tende a $0$ per $n \to \infty$. Una condizione sufficiente: se esistono costanti $M, L > 0$ tali che $|f^{(n)}(x)| \leq M L^n$ per ogni $n$ e ogni $x \in I$, allora $f$ è **sviluppabile** su $I$, poiché con il **resto di Lagrange**
$$
|R_n(x)| \leq \frac{M L^{n+1} |x - x_0|^{n+1}}{(n+1)!} \xrightarrow[n \to \infty]{} 0 ,
$$
dato che $\dfrac{c^{\,n}}{n!} \to 0$ per ogni $c$ fissato. Le derivate di $\sin x$ e $\cos x$ sono limitate da $1$ su tutto $\mathbb{R}$, e quelle di $e^x$ sono limitate da $e^K$ su ogni intervallo $[-K, K]$, quindi la condizione è soddisfatta e gli sviluppi notevoli di $e^x$, $\sin x$ e $\cos x$ valgono su tutto $\mathbb{R}$.

::grafico{f="sin(x);x-x^3/6;x-x^3/6+x^5/120-x^7/5040+x^9/362880" xmin=-7 xmax=7 ymin=-2.5 ymax=2.5 titolo="$y = \sin x$ con i polinomi di Taylor $T_3$ (tratteggiato) e $T_9$ (rosso) centrati in $0$: al crescere del grado l'approssimazione è buona su intervalli sempre più ampi"}
:::

:::richiamo{titolo="Formula di Taylor con resto di Lagrange"}
Se $f$ è di classe $C^{n+1}$ su un intervallo contenente $x_0$ e $x$, esiste $c$ compreso tra $x_0$ e $x$ tale che $f(x) - T_n(x) = \dfrac{f^{(n+1)}(c)}{(n+1)!} (x - x_0)^{n+1}$. (Capitolo sulle derivate di Analisi 1.)
:::

## Sviluppi di MacLaurin notevoli

:::teorema{#sviluppi-notevoli titolo="Sviluppi notevoli"}
$$
\begin{aligned}
e^x &= \sum_{n=0}^{\infty} \frac{x^n}{n!} && x \in \mathbb{R} \\[8pt]
\sin x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{(2n+1)!} && x \in \mathbb{R} \\[8pt]
\cos x &= \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n}}{(2n)!} && x \in \mathbb{R} \\[8pt]
\frac{1}{1 - x} &= \sum_{n=0}^{\infty} x^n && -1 < x < 1 \\[8pt]
\ln(1 + x) &= \sum_{n=1}^{\infty} \frac{(-1)^{n+1} \, x^n}{n} && -1 < x \leq 1 \\[8pt]
(1 + x)^{\alpha} &= \sum_{n=0}^{\infty} \binom{\alpha}{n} x^n && -1 < x < 1
\end{aligned}
$$
I primi tre valgono su tutto $\mathbb{R}$ per il **criterio di sviluppabilità**. Il quarto è la somma della serie geometrica. Il quinto si ottiene integrando termine a termine la serie geometrica di ragione $-x$ e vale *anche* in $x = 1$ per il **teorema di Abel**, perché in quel punto la serie converge per il criterio di Leibniz; in particolare $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$. Nel sesto, detto **serie binomiale**, $\alpha \in \mathbb{R}$ e
$$
\binom{\alpha}{n} = \frac{\alpha (\alpha - 1) \cdots (\alpha - n + 1)}{n!} , \qquad \binom{\alpha}{0} = 1 ;
$$
per $\alpha \in \mathbb{N}$ i coefficienti con $n > \alpha$ sono nulli, la somma è finita e lo sviluppo si riduce al binomio di Newton, valido per ogni $x$.
:::

:::esempio{titolo="Serie binomiale con esponente un mezzo"}
Per $\alpha = \dfrac{1}{2}$ e $|x| < 1$:
$$
\sqrt{1 + x}
= 1 + \frac{x}{2} - \frac{x^2}{8} + \frac{x^3}{16} + \cdots
$$
I coefficienti sono $\dbinom{1/2}{1} = \dfrac{1}{2}$, $\dbinom{1/2}{2} = \dfrac{\frac{1}{2} \left( \frac{1}{2} - 1 \right)}{2} = -\dfrac{1}{8}$, e così via. I primi termini della **serie binomiale** forniscono le approssimazioni delle radici usate nei limiti e negli integrali.
:::

## Nuovi sviluppi da quelli noti

:::osservazione{#sviluppi-per-composizione titolo="Sviluppi per sostituzione e combinazione"}
Sostituendo in uno sviluppo noto $x$ con $c x$ oppure con una potenza $x^k$, moltiplicando per una potenza di $x$, sommando sviluppi o scomponendo la funzione, si ottengono serie di potenze che, per l'**unicità dello sviluppo**, sono le serie di Taylor delle funzioni ottenute. La regione di validità si trasforma di conseguenza: la condizione su $x$ si ricava imponendo che l'espressione sostituita appartenga alla regione dello sviluppo di partenza. Per esempio, dalla serie esponenziale con la sostituzione di $x$ con $-x^2$:
$$
e^{-x^2} = \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n}}{n!} , \qquad x \in \mathbb{R} ,
$$
sviluppo che calcolato con la definizione richiederebbe tutte le derivate di $e^{-x^2}$.
:::

:::osservazione{#sviluppi-per-derivazione-integrazione titolo="Sviluppi per derivazione e integrazione"}
Derivando o integrando termine a termine uno sviluppo noto si ottengono gli sviluppi della derivata e delle primitive, con lo *stesso* raggio. L'esempio principale è l'arcotangente: per $|t| < 1$, dalla serie geometrica di ragione $-t^2$,
$$
\frac{1}{1 + t^2} = \sum_{n=0}^{\infty} (-1)^n \, t^{2n} ,
$$
e integrando da $0$ a $x$, per $|x| < 1$,
$$
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n \, x^{2n+1}}{2n+1} .
$$
In $x = \pm 1$ la serie converge per il **criterio di Leibniz**, quindi per il **teorema di Abel** l'uguaglianza si estende a $[-1, 1]$; in particolare, con $x = 1$,
$$
\frac{\pi}{4} = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots
$$
Con lo stesso procedimento, integrando la serie geometrica di ragione $-t$, si ottiene lo sviluppo di $\ln(1 + x)$ dell'elenco degli sviluppi notevoli.

::grafico{f="atan(x);x-x^3/3+x^5/5;x-x^3/3+x^5/5-x^7/7+x^9/9-x^11/11+x^13/13" xmin=-1.8 xmax=1.8 ymin=-2.2 ymax=2.2 asintoti="x=-1;x=1" titolo="$y = \arctan x$ con le somme parziali di grado $5$ (tratteggiata) e $13$ (rossa): seguono la funzione tra le rette $x = -1$ e $x = 1$ e se ne staccano fuori"}
:::

## Applicazioni

:::osservazione{#somma-di-serie-numeriche titolo="Somma di serie numeriche"}
Una serie numerica i cui termini ricalcano i coefficienti di uno sviluppo noto è il valore di quello sviluppo in un punto. Il procedimento ha tre passi: si riconosce lo sviluppo, si individua il punto $x$ da sostituire, si controlla che il punto appartenga alla **regione di validità**. Per esempio, per $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$ lo sviluppo adatto è $\displaystyle\sum_{n=1}^{\infty} n \, x^n = \frac{x}{(1-x)^2}$, ottenuto derivando la serie geometrica, e il punto è $x = \dfrac{1}{2}$, interno a $(-1, 1)$; quindi
$$
\sum_{n=1}^{\infty} \frac{n}{2^n}
= \frac{\dfrac{1}{2}}{\left( 1 - \dfrac{1}{2} \right)^{\! 2}}
= 2 .
$$
:::

:::osservazione{#limiti-con-taylor titolo="Calcolo di limiti"}
Per un limite in forma indeterminata per $x \to 0$, a ogni funzione si sostituisce il suo sviluppo di MacLaurin troncato all'ordine utile, con il resto scritto come o-piccolo. La serie di Taylor fornisce i termini di *ogni* ordine, quindi lo sviluppo si può spingere quanto serve. Per esempio, poiché $\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} + o(x^4)$,
$$
\lim_{x \to 0} \frac{\cos x - 1 + \dfrac{x^2}{2}}{x^4}
= \lim_{x \to 0} \frac{\dfrac{x^4}{24} + o(x^4)}{x^4}
= \frac{1}{24} .
$$
I primi due termini si cancellano con quelli del numeratore, perciò l'ordine utile dello sviluppo è il **quarto**, lo stesso del denominatore.
:::
