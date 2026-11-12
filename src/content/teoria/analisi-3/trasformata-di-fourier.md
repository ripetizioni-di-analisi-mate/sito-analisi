---
titolo: "Trasformata di Fourier e convoluzione"
sommario: "Convenzione della trasformata, proprietà, convoluzione, inversione, Plancherel, distribuzioni e applicazioni alle equazioni."
---

## Convenzione e trasformabilità

Per una funzione periodica le frequenze di Fourier sono discrete. Per una funzione sulla retta la frequenza può assumere ogni valore reale.

:::definizione{#fourier titolo="Trasformata di Fourier"}
Per $f\in L^1(\mathbb R)$ si adotta la convenzione
$$
\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-i\xi x}\,dx.
$$
La frequenza $\xi$ è angolare. La trasformata è limitata e continua, con $\|\widehat f\|_\infty\le\|f\|_1$, e tende a zero per $|\xi|\to\infty$ (lemma di Riemann-Lebesgue). La continuità segue dalla convergenza dominata. Il limite a zero all’infinito si prova prima sulle funzioni a gradini di supporto compatto e poi per densità in $L^1$.

La convenzione determina i fattori $2\pi$ di inversione e Plancherel. Negli esercizi del capitolo si usa sempre questa definizione.
:::

:::osservazione
Il valore $\widehat f(0)=\int_{\mathbb R} f$ misura l'integrale con segno del dato. Se il dato è reale, per $\xi\ne0$ la parte reale si calcola pesando $f$ con $\cos(\xi x)$ e la parte immaginaria con $-\sin(\xi x)$. Se $f$ è reale e pari, il secondo integrando è dispari e dà zero, mentre il primo si può integrare sulla semiretta positiva e raddoppiare. Questo controllo permette di riconoscere un termine immaginario spurio prima di finire il calcolo.

Per la continuità, se $\xi_n\to\xi$ il fattore $e^{-i\xi_nx}$ converge per ogni $x$ ed è di modulo uno. Il maggiorante comune è $|f|$, quindi la convergenza dominata dà $\widehat f(\xi_n)\to\widehat f(\xi)$. Per il limite a infinito, sull'indicatore di $[a,b]$ l'integrale è una differenza di due esponenziali divisa per $i\xi$ e ha modulo al più $\dfrac2{|\xi|}$. Per un dato generico, si approssima $f$ in $L^1$ con una funzione a gradini $g$. La stima $\|\widehat f-\widehat g\|_\infty\le\|f-g\|_1$ controlla l'errore per tutte le frequenze, anche quando si fanno tendere a infinito.
:::

:::osservazione
La continuità è uniforme su tutta la retta. Per confrontare due frequenze a distanza $|h|$, si raccoglie il fattore $e^{-i\xi x}$, di modulo uno, e si stima
$$
\left|\widehat f(\xi+h)-\widehat f(\xi)\right|
\le \int_{\mathbb R}|f(x)|\left|e^{-ihx}-1\right|\,dx .
$$
Il secondo fattore a destra tende a zero per ogni $x$ ed è al più due. La convergenza dominata dà quindi un limite indipendente da $\xi$. Se $f$ è nulla fuori da $[-A,A]$, con $A>0$, si può ottenere anche una stima esplicita. Infatti $\left|e^{-ihx}-1\right|=2\left|\sin\left(\dfrac{hx}{2}\right)\right|\le |hx|$, perciò la differenza fra le trasformate è al più $A|h|\|f\|_1$. La stima riguarda la variazione della trasformata quando si sposta la frequenza, mentre il lemma di Riemann-Lebesgue riguarda il valore della trasformata a grandi frequenze.
:::

## Trasformate elementari

:::esempio{#esempi-fourier titolo="Intervalli, esponenziali e gaussiane"}
Per $a>0$,
$$
\widehat{\mathbf1_{[-a,a]}}(\xi)=\frac{2\sin(a\xi)}{\xi},\qquad
\widehat{\mathbf1_{[-a,a]}}(0)=2a.
$$
Si integra l'esponenziale tra $-a$ e $a$. Il valore in zero è il limite continuo. Separando le due semirette si ottiene
$$
\widehat{e^{-a|x|}}(\xi)=\frac1{a+i\xi}+\frac1{a-i\xi}
=\frac{2a}{a^2+\xi^2}.
$$
Per la gaussiana vale
$$
\widehat{e^{-ax^2}}(\xi)=\sqrt{\frac\pi a}\,e^{-\frac{\xi^2}{4a}}.
$$
Una dimostrazione deriva la trasformata in $\xi$, integra per parti e ricava l'equazione $F'=-\dfrac{\xi}{2a}F$. Il dato iniziale è l'integrale gaussiano $F(0)=\sqrt{\dfrac\pi a}$.
:::

:::osservazione
Nella dimostrazione della formula gaussiana, si ponga $g(x)=e^{-ax^2}$ e $F=\widehat g$. Si può derivare in frequenza perché $xg$ è integrabile. Poiché $g'=-2axg$, si ottiene
$$
F'(\xi)=\frac{i}{2a}\int_{\mathbb R}g'(x)e^{-i\xi x}\,dx.
$$
Per integrazione per parti l'integrale a destra vale $i\xi F(\xi)$. Il segno negativo dell'equazione $F'=-\dfrac{\xi}{2a}F$ viene quindi da $i^2=-1$. Moltiplicando per $e^{\frac{\xi^2}{4a}}$ si vede che $F(\xi)e^{\frac{\xi^2}{4a}}$ è costante. Il valore della costante si determina in zero. Il calcolo evita di spostare il cammino d'integrazione nel piano complesso e usa soltanto le due operazioni consentite dalle stime di integrabilità.
:::

:::esempio{titolo="Dalla durata di un impulso alla distanza fra gli zeri"}
Per l'impulso su $[-a,a]$ la trasformata al centro vale $2a$. Gli zeri diversi da zero sono $\xi=\dfrac{k\pi}{a}$ per $k\in\mathbb Z\setminus\{0\}$. Raddoppiando $a$, raddoppia il valore in zero e si dimezza la distanza fra gli zeri consecutivi diversi da zero sullo stesso semiasse. Il picco centrale è quindi più alto e più stretto. La trasformata alterna segno fra zeri successivi perché il denominatore mantiene lo stesso segno su ciascuna semiretta, mentre il seno lo cambia.

::grafico{f="2*sin(x)/x;2*sin(2*x)/x" punti="0,2,pieno;0,4,pieno;1.570796,0,pieno;3.141593,0,pieno" nomi="ξ,F" xmin=-10 xmax=10 ymin=-1.25 ymax=4.65 legenda="\frac{2\sin(\xi)}{\xi};\frac{2\sin(2\xi)}{\xi}" titolo="Gli impulsi su $[-1,1]$ e $[-2,2]$ hanno primi zeri positivi in $\pi$ e $\dfrac{\pi}{2}$ nelle rispettive trasformate"}
:::

:::esempio{titolo="Due decadimenti diversi per grandi frequenze"}
Con $a=1$, l'esponenziale bilaterale e la gaussiana hanno trasformate positive. La trasformata del primo ha una coda dell'ordine di $\xi^{-2}$, perché il prodotto per $\xi^2$ tende a $2$. La gaussiana in frequenza decresce più rapidamente di qualsiasi potenza: per ogni $m>0$, $|\xi|^m e^{-\dfrac{\xi^2}{4}}\to0$. La differenza si può ricondurre anche alla regolarità del dato. La gaussiana ammette derivate integrabili di ogni ordine, mentre il dato $e^{-|x|}$ ha una derivata prima con un salto in zero.

::grafico{f="2/(1+x^2);sqrt(pi)*exp(-x^2/4)" nomi="ξ,F" xmin=-7 xmax=7 ymin=-0.2 ymax=2.3 legenda="\frac{2}{1+\xi^2};\sqrt{\pi}e^{-\frac{\xi^2}{4}}" titolo="La gaussiana in frequenza decade più rapidamente della trasformata dell'esponenziale bilaterale"}
:::

:::esempio{titolo="Due impulsi di segno opposto"}
Sia $p$ la differenza fra l'indicatrice di $[0,1]$ e quella di $[1,2]$. I due intervalli hanno la stessa lunghezza, quindi l'integrale di $p$ è zero e $\widehat p(0)=0$. Per $\xi\ne0$, l'integrazione sui due intervalli dà
$$
\begin{aligned}
\widehat p(\xi)
&=\frac{1-e^{-i\xi}}{i\xi}
  -\frac{e^{-i\xi}-e^{-2i\xi}}{i\xi}\\[6pt]
&=\frac{(1-e^{-i\xi})^2}{i\xi}.
\end{aligned}
$$
Il primo fattore $1-e^{-i\xi}$ viene dall'integrazione su un intervallo di lunghezza uno. Il secondo compare perché si sottrae il contributo del secondo intervallo, traslato di uno. Per $\xi$ vicino a zero, il rapporto $\dfrac{1-e^{-i\xi}}{\xi}$ tende a $i$, perciò $\widehat p(\xi)=i\xi+o(\xi)$. La cancellazione degli integrali dei due impulsi spiega lo zero all'origine, mentre il termine lineare misura come la trasformata varia vicino a quello zero.
:::

## Traslazioni, modulazioni e dilatazioni

:::teorema{#proprieta-fourier titolo="Proprietà algebriche"}
Per $f\in L^1$, $a,b\in\mathbb R$ e $c\ne0$,
$$
\begin{aligned}
\mathcal F[f(x-a)](\xi)&=e^{-ia\xi}\widehat f(\xi),\\
\mathcal F[e^{ibx}f(x)](\xi)&=\widehat f(\xi-b),\\
\mathcal F[f(cx)](\xi)&=\frac1{|c|}\widehat f\left(\frac\xi c\right).
\end{aligned}
$$
Le formule seguono da cambi di variabile nell'integrale. La trasformata è lineare. Se $f$ è reale e pari, la trasformata è reale e pari. Se è reale e dispari, è immaginaria pura e dispari. Una traslazione nello spazio introduce quindi una fase, mentre una modulazione trasla le frequenze.
:::

:::esempio{titolo="Spostare una banda di frequenze"}
Si prenda $g(x)=e^{-x^2}$ e si ponga $f(x)=e^{3ix}g(x)$. Nel prodotto con $e^{-i\xi x}$ si combinano gli esponenti, ottenendo $e^{-i(\xi-3)x}g(x)$. La trasformata di $f$ è dunque la gaussiana $\widehat g(\xi-3)$, con massimo in $\xi=3$. Un fattore reale $\cos(3x)$ contiene metà di ciascuna delle due modulazioni $e^{3ix}$ ed $e^{-3ix}$. Per $g(x)\cos(3x)$ si ottengono quindi due copie traslate, centrate in $3$ e $-3$, ciascuna con coefficiente $\dfrac12$. La simmetria del risultato è coerente con un dato reale e pari.

::grafico{f="sqrt(pi)*exp(-x^2/4);sqrt(pi)*exp(-(x-3)^2/4);sqrt(pi)/2*(exp(-(x-3)^2/4)+exp(-(x+3)^2/4))" nomi="ξ,F" xmin=-8 xmax=8 ymin=-0.15 ymax=2.2 legenda="\widehat g(\xi);\widehat g(\xi-3);\mathcal F[g\cos(3x)]" titolo="La modulazione complessa sposta la gaussiana in frequenza. Il coseno produce una somma di due copie simmetriche"}
:::

:::osservazione
Per la dilatazione occorre considerare anche $c<0$. Con $u=cx$, il verso di percorrenza si inverte e il contributo del cambio di variabile diventa $\dfrac1{|c|}$. Il segno di $c$ resta nell'argomento $\dfrac{\xi}{c}$, quindi riflette la frequenza. Con $c>1$ il dato si restringe sulla retta, mentre la trasformata si allarga e il suo valore in zero si riduce di un fattore $c$. Il valore in zero si può controllare direttamente con l'integrale del dato dilatato.
:::

:::osservazione
Per una funzione reale integrabile, anche priva di parità, la coniugazione dell'integrale dà $\overline{\widehat f(\xi)}=\widehat f(-\xi)$. Le frequenze opposte hanno quindi lo stesso modulo, parti reali uguali e parti immaginarie opposte. Per esempio, se $g$ è reale e pari e si pone $f(x)=g(x-1)$, allora
$$
\widehat f(\xi)=(\cos\xi-i\sin\xi)\widehat g(\xi).
$$
La traslazione produce in generale una parte immaginaria. Poiché $\widehat g$ è reale e pari, il prodotto con il coseno dà la parte reale pari e il prodotto con il seno dà la parte immaginaria dispari. In particolare, l'esponenziale bilaterale traslato ha modulo pari anche se il dato è centrato in un punto diverso dall'origine.
:::

## Derivate e moltiplicazioni

::::teorema{#derivate-fourier titolo="Derivazione e frequenza"}
Se $f$ è assolutamente continua su ogni compatto e $f,f'\in L^1(\mathbb R)$, allora
$$
\widehat{f'}(\xi)=i\xi\widehat f(\xi).
$$
Se $f$ e $xf$ appartengono a $L^1$, allora
$$
\frac d{d\xi}\widehat f(\xi)=-i\,\widehat{xf}(\xi),\qquad
\widehat{xf}(\xi)=i\,\widehat f'(\xi).
$$
Per funzioni di Schwartz si possono ripetere le operazioni a ogni ordine. In particolare $\widehat{f''}=-\xi^2\widehat f$.

:::dimostrazione
Per la prima identità si integra per parti rispetto a $x$. Su $[-R,R]$, con $R>0$, si trova
$$
\int_{-R}^{R}f'(x)e^{-i\xi x}\,dx
=\big[f(x)e^{-i\xi x}\big]_{-R}^{R}
+i\xi\int_{-R}^{R}f(x)e^{-i\xi x}\,dx .
$$
I limiti di $f$ alle estremità esistono perché la variazione tra due punti della stessa coda è al più l'integrale del modulo di $f'$ fra quei punti. I limiti sono nulli per l'integrabilità di $f$. Dunque il termine al bordo tende a zero, mentre gli integrali convergono assolutamente. Per la seconda identità si deriva rispetto a $\xi$. Il quoziente incrementale del fattore esponenziale ha modulo al più $|x|$, perciò il prodotto con $f$ è dominato da $|xf(x)|$. Il limite sotto l'integrale dà il fattore $-ix$ e quindi la formula.
:::
::::

:::esempio{titolo="La derivata di una gaussiana"}
Per $g(x)=e^{-x^2}$ si ha $g'(x)=-2xe^{-x^2}$. Poiché sia $g$ sia $g'$ sono integrabili e $g$ tende a zero alle due estremità, si può integrare per parti su un intervallo finito e poi passare al limite. Si trova $\widehat{g'}(\xi)=i\xi\sqrt{\pi}e^{-\dfrac{\xi^2}{4}}$. La trasformata è immaginaria pura, come si prevede per una derivata reale dispari. Inoltre è nulla in zero: l'integrale di $g'$ è la differenza fra due limiti entrambi nulli. Per la derivata della trasformata si può invece derivare sotto l'integrale. Il quoziente incrementale dell'esponenziale è dominato in modulo da $|x|$, quindi il maggiorante richiesto è $|xg(x)|$.

::grafico{f="sqrt(pi)*exp(-x^2/4);sqrt(pi)*x*exp(-x^2/4)" nomi="ξ,F" xmin=-6 xmax=6 ymin=-1.9 ymax=2.05 legenda="\widehat g(\xi);\operatorname{Im}\widehat{g'}(\xi)" titolo="La derivazione moltiplica per $i\xi$. Nel grafico è rappresentata la parte immaginaria di $\widehat{g'}$"}
:::

:::esempio{titolo="Curvatura della trasformata in frequenza zero"}
Per $f=\mathbf1_{[-2,2]}$ il dato, il suo prodotto per $x$ e il suo prodotto per $x^2$ sono integrabili. Si può quindi derivare due volte rispetto a $\xi$. Ogni derivata del fattore esponenziale introduce un fattore $-ix$. Ponendo $\xi=0$ dopo le derivazioni si ottiene
$$
\begin{aligned}
\widehat f'(0)&=-i\int_{-2}^{2}x\,dx=0,\\[6pt]
\widehat f''(0)&=-\int_{-2}^{2}x^2\,dx=-\frac{16}{3}.
\end{aligned}
$$
Il primo integrale è nullo perché l'integrando è dispari. Nel secondo compare il segno meno perché $(-i)^2=-1$. Poiché $\widehat f(0)=4$, lo sviluppo di Taylor in zero dà $\widehat f(\xi)=4-\dfrac83\xi^2+o(\xi^2)$. Lo stesso coefficiente si ottiene sviluppando il seno nella formula $\dfrac{2\sin(2\xi)}{\xi}$. Il calcolo dai momenti resta disponibile anche quando l'integrale di Fourier non dà una formula elementare.
:::

## Convoluzione

:::definizione{#convoluzione titolo="Convoluzione e trasformata"}
Per $f,g\in L^1(\mathbb R)$, la **convoluzione** è
$$
(f*g)(x)=\int_{\mathbb R}f(x-y)g(y)\,dy.
$$
Esiste quasi ovunque, appartiene a $L^1$ e $\|f*g\|_1\le\|f\|_1\|g\|_1$. Fubini e il cambio $u=x-y$ danno
$$
\widehat{f*g}=\widehat f\,\widehat g.
$$
Per funzioni di Schwartz vale anche $\widehat{fg}=\dfrac1{2\pi}\widehat f*\widehat g$. La convoluzione di due indicatori di intervalli è la lunghezza della loro sovrapposizione traslata: per $\mathbf1_{[0,a]}*\mathbf1_{[0,a]}$ si ottiene la funzione triangolare $x$ su $[0,a]$, $2a-x$ su $[a,2a]$ e zero altrove.
:::

:::esempio{titolo="Sovrapposizione di due intervalli di ampiezza diversa"}
Per $f=\mathbf1_{[0,2]}$ e $g=\mathbf1_{[0,1]}$, a $x$ fissato la condizione $f(x-y)=1$ equivale a $x-2\le y\le x$. L'integrando è quindi uno sull'intersezione di $[x-2,x]$ con $[0,1]$ e zero fuori. All'aumentare di $x$ la lunghezza dell'intersezione cresce da zero a uno su $[0,1]$, resta uno su $[1,2]$ e scende da uno a zero su $[2,3]$. Si ottiene un trapezio. L'area sotto il trapezio è $2$, che coincide con il prodotto delle masse $\int f=2$ e $\int g=1$.

::grafico{linee="0,0 1,1 2,1 3,0" poligoni="0,0 1,1 2,1 3,0" punti="1,1,pieno;2,1,pieno" xmin=-0.4 xmax=3.55 ymin=-0.2 ymax=1.4 titolo="La convoluzione di $\mathbf1_{[0,2]}$ e $\mathbf1_{[0,1]}$ è costante dove l'intervallo più corto è interamente sovrapposto"}
:::

:::osservazione
Per giustificare lo scambio degli integrali nella formula della trasformata di $f*g$, si considera prima l'integrale doppio del modulo. Con $u=x-y$ si ottiene $\int |g(y)|\int|f(u)|\,du\,dy=\|f\|_1\|g\|_1$. La finitezza di questo prodotto permette di usare Fubini anche con il fattore $e^{-i\xi x}$. Dopo il cambio di variabile, $e^{-i\xi x}=e^{-i\xi u}e^{-i\xi y}$: ciascun fattore dipende da una sola variabile e i due integrali si separano.
:::

:::esempio{titolo="Media di un esponenziale su un intervallo mobile"}
Siano $f(x)=e^{-|x|}$ e $g=\mathbf1_{[0,1]}$. Nella convoluzione si integra dapprima rispetto alla variabile dell'indicatrice, quindi si pone $u=x-y$. Si ottiene
$$
(f*g)(x)=\int_0^1 e^{-|x-y|}\,dy
=\int_{x-1}^{x} e^{-|u|}\,du.
$$
L'intervallo ha lunghezza uno, quindi questo integrale è la media di $f$ sull'intervallo che termina in $x$. Se $x\le0$, tutta la parte integrata è nella semiretta negativa e l'integranda vale $e^u$. Se $x\ge1$, è nella semiretta positiva e vale $e^{-u}$. Per $0<x<1$ l'intervallo attraversa zero, quindi si calcolano separatamente i due contributi. Ne risulta
$$
(f*g)(x)=\begin{cases}
e^x-e^{x-1},&x\le 0,\\
2-e^{x-1}-e^{-x},&0<x<1,\\
e^{1-x}-e^{-x},&x\ge1.
\end{cases}
$$
La funzione è positiva anche fuori da $[0,1]$, perché l'esponenziale è positivo su tutta la retta. Inoltre la derivata della media è $f(x)-f(x-1)$ per il teorema fondamentale del calcolo. Poiché $f$ è continua anche in zero, la convoluzione ha derivata continua in corrispondenza dei due passaggi di regime.
:::

## Inversione e Plancherel

::::teorema{#inversione-fourier titolo="Inversione e identità di Plancherel"}
Se $f,\widehat f\in L^1$, allora
$$
f(x)=\frac1{2\pi}\int_{\mathbb R}\widehat f(\xi)e^{i\xi x}\,d\xi
$$
quasi ovunque, e in ogni punto in cui $f$ è continua. La trasformata si estende per densità da $L^1\cap L^2$ a tutto $L^2$. Indicando con $\langle f,g\rangle=\int_{\mathbb R}f(x)\overline{g(x)}\,dx$ il prodotto scalare, si ha
$$
\|\widehat f\|_2^2=2\pi\|f\|_2^2,\qquad
\langle\widehat f,\widehat g\rangle=2\pi\langle f,g\rangle.
$$
È il teorema di Plancherel. Per una funzione soltanto in $L^2$, la trasformata si definisce mediante limite in norma, senza supporre convergente l'integrale ordinario. Con fattore $\dfrac1{\sqrt{2\pi}}$ la trasformata è un operatore unitario.

:::dimostrazione
**Inversione.** Si moltiplica $\widehat f(\xi)$ per $e^{-\varepsilon \xi^2}$, con $\varepsilon>0$, per ricondurre l'integrale inverso a una convoluzione. Sostituendo la definizione di $\widehat f$ e scambiando gli integrali si ottiene
$$
\frac1{2\pi}\int_{\mathbb R} e^{-\varepsilon\xi^2}\widehat f(\xi)e^{i\xi x}\,d\xi
=\int_{\mathbb R}\frac{e^{-\frac{(x-y)^2}{4\varepsilon}}}{\sqrt{4\pi\varepsilon}}f(y)\,dy.
$$
Lo scambio si giustifica con $\|f\|_1\int e^{-\varepsilon\xi^2}\,d\xi<\infty$ e l'integrale interno si valuta con la formula gaussiana. Quando $\varepsilon\downarrow0$, a sinistra si usa $\widehat f\in L^1$ per far passare il limite sotto il segno di integrale. A destra il nucleo ha massa uno e si concentra attorno a $y=x$. In un punto di continuità, l'integrale della differenza $f(y)-f(x)$ è piccolo nell'intorno di $x$. Fuori dall'intorno, il termine con $f(y)$ è dominato da $\|f\|_1$ per il massimo del nucleo in quella regione, che tende a zero. Anche la massa della coda moltiplicata per $|f(x)|$ tende a zero. Si ricava così l'inversione puntuale in ogni punto di continuità.

Lo stesso calcolo dà l'uguaglianza quasi ovunque anche per un dato generico in $L^1$ con trasformata integrabile. Indichiamo con $K_\varepsilon$ il nucleo gaussiano dell'identità e con $F$ l'integrale inverso senza il fattore $e^{-\varepsilon \xi^2}$. La convergenza verso $F$ è uniforme, perché l'errore è dominato per ogni $x$ da
$$
\frac{1}{2\pi}\int_{\mathbb R}|\widehat f(\xi)|\big|e^{-\varepsilon\xi^2}-1\big|\,d\xi,
$$
che tende a zero. D'altra parte, poiché il nucleo ha integrale uno, la disuguaglianza triangolare e Tonelli danno
$$
\|K_\varepsilon*f-f\|_1
\le\int_{\mathbb R}K_\varepsilon(y)\|f(\cdot-y)-f\|_1\,dy.
$$
Le traslazioni sono continue in norma $L^1$. Lo si verifica prima per le funzioni continue a supporto compatto e poi si usa la loro densità, dato che traslare una funzione conserva la sua norma. Vicino a zero la differenza a destra è quindi piccola, mentre lontano da zero è al più $2\|f\|_1$ e la massa del nucleo tende a zero. Ne segue la convergenza in norma $L^1$ verso $f$. Su ogni intervallo limitato la convergenza uniforme implica anche la convergenza in norma $L^1$ verso $F$ su quell'intervallo. Per unicità del limite, $F=f$ quasi ovunque.

**Plancherel.** Si dimostra dapprima l'identità del prodotto scalare per funzioni di Schwartz, cioè lisce e a decrescenza rapida con tutte le loro derivate. Si scrive l'inversione di $g$, si coniuga e si sostituisce in $\int f(x)\overline{g(x)}\,dx$. Il fattore $e^{-i\xi x}$ che compare dopo la coniugazione è quello della definizione di $\widehat f$. Si può invertire l'ordine perché $f$ e $\widehat g$ sono entrambe in $L^1$, quindi
$$
\int_{\mathbb R} f(x)\overline{g(x)}\,dx
=\frac1{2\pi}\int_{\mathbb R}\widehat f(\xi)\overline{\widehat g(\xi)}\,d\xi.
$$
Con $g=f$ si ottiene la stima necessaria per passare a dati in $L^2$. Infatti, se $(f_n)$ è una successione di Schwartz che converge in $L^2$ a $f$, l'identità applicata a $f_n-f_m$ mostra che le trasformate sono di Cauchy in $L^2$. Se si sceglie un'altra successione approssimante, l'identità applicata alla differenza fra le due approssimazioni mostra che i due limiti coincidono. È in questo senso che la trasformata in $L^2$ dipende soltanto dalla classe di $f$.

Se $f$ appartiene a $L^1\cap L^2$, le due definizioni della trasformata coincidono quasi ovunque. Per verificarlo si approssima $f$ con funzioni lisce a supporto compatto, prima troncando il dato e poi regolarizzando ciascun troncamento. Le approssimazioni si scelgono convergenti in entrambe le norme. La disuguaglianza $\|\widehat f_n-\widehat f\|_\infty\le\|f_n-f\|_1$ dà la convergenza uniforme verso la trasformata integrale. L'identità di Plancherel dà la convergenza in $L^2$ verso la trasformata estesa. Su ogni intervallo limitato entrambi i limiti si ottengono anche in norma $L^2$, quindi coincidono quasi ovunque. Si può pertanto usare il calcolo per integrazione quando il dato soddisfa entrambe le ipotesi e applicare poi l'identità delle norme al risultato.

La trasformata normalizzata conserva la norma e ha immagine chiusa, perché $L^2$ è completo. Sulle funzioni di Schwartz anche l'inversa data dalla formula di inversione è di Schwartz. Infatti le identità di derivazione e moltiplicazione si possono iterare, perché ogni derivata di una funzione di Schwartz moltiplicata per una potenza della variabile è integrabile. La trasformata normalizzata ha quindi un'immagine che contiene le funzioni di Schwartz. Poiché queste sono dense in $L^2$, l'immagine coincide con tutto $L^2$.
:::
::::

:::esempio{titolo="Calcolare un integrale con Plancherel"}
Con $f(x)=e^{-|x|}$ si ha $\int|f|^2=2\int_0^\infty e^{-2x}\,dx=1$. La trasformata è $\dfrac2{1+\xi^2}$. Dall'identità delle norme segue
$$
4\int_{\mathbb R}\frac{d\xi}{(1+\xi^2)^2}=2\pi,
\qquad
\int_{\mathbb R}\frac{d\xi}{(1+\xi^2)^2}=\frac{\pi}{2}.
$$
Il fattore $4$ nasce dal quadrato del numeratore della trasformata. Il fattore $2\pi$ dipende dalla convenzione scelta. Con il medesimo dato si può verificare la costante dell'inversione in $x=0$: $\dfrac1{2\pi}\int_{\mathbb R}\dfrac2{1+\xi^2}\,d\xi=1=f(0)$, poiché l'integrale di $\dfrac1{1+\xi^2}$ si calcola con l'arcotangente.

::grafico{f="4/(1+x^2)^2" area="4/(1+x^2)^2;0;-4;4" nomi="ξ,E" xmin=-5 xmax=5 ymin=-0.25 ymax=4.55 titolo="La densità di energia in frequenza è $|\widehat f(\xi)|^2$. L'integrale sull'intera retta vale $2\pi$"}
:::

:::attenzione
Per $f=\mathbf1_{[-1,1]}$, la trasformata $\dfrac{2\sin \xi}{\xi}$ appartiene a $L^2$ ma non a $L^1$. Infatti, su intervalli di lunghezza fissa attorno ai punti in cui $|\sin\xi|=1$ si ha $|\sin\xi|\ge\dfrac12$. Il contributo all'integrale del modulo su questi intervalli domina una costante positiva moltiplicata per la serie armonica. Plancherel si applica comunque, perché $f$ è quadrato-integrabile. L'ipotesi di integrabilità assoluta richiesta dalla formula di inversione enunciata qui va verificata separatamente.
:::

## Distribuzioni temperate

:::definizione{#distribuzioni titolo="Distribuzioni e delta di Dirac"}
Lo spazio di Schwartz $\mathcal S$ contiene funzioni lisce le cui derivate decrescono più rapidamente di ogni potenza. Una distribuzione temperata è un funzionale lineare continuo su $\mathcal S$. La delta di Dirac è $\langle\delta_a,\varphi\rangle=\varphi(a)$, e la derivata distribuzionale si definisce con
$$
\langle T',\varphi\rangle=-\langle T,\varphi'\rangle.
$$
La trasformata si estende per dualità, $\langle\widehat T,\varphi\rangle=\langle T,\widehat\varphi\rangle$, usando la convenzione bilineare delle distribuzioni. Si ottiene $\widehat{\delta_a}(\xi)=e^{-ia\xi}$, $\widehat1=2\pi\delta_0$ e $\widehat{T'}=i\xi\widehat T$. La funzione di Heaviside ha derivata distribuzionale $\delta_0$: il salto diventa una massa concentrata.
:::

:::esempio{titolo="Il salto di Heaviside come derivata distribuzionale"}
Per una funzione test $\varphi$, la distribuzione associata a $H=\mathbf1_{(0,+\infty)}$ agisce integrando $\varphi$ sulla semiretta positiva. Dunque
$$
\langle H',\varphi\rangle=-\int_0^\infty\varphi'(x)\,dx=\varphi(0),
$$
perché $\varphi(x)\to0$ all'infinito. La derivata classica di $H$ vale zero fuori dall'origine. La derivata distribuzionale registra in più il salto. Nel disegno, il segmento con punta indica il punto in cui agisce la delta, di massa uno.

::grafico{linee="-2,0 0,0;0,1 2,1" punti="0,0,pieno;0,1,vuoto" vettori="0,0,0,1.6,δ₀" xmin=-2.2 xmax=2.25 ymin=-0.25 ymax=1.9 titolo="Il salto unitario di Heaviside in zero produce la massa $\delta_0$ nella derivata distribuzionale"}
:::

:::esempio{titolo="Il salto nella derivata di un esponenziale bilaterale"}
Sia $g(x)=e^{-a|x|}$, con $a>0$. La funzione è continua e assolutamente continua su ogni compatto. La sua derivata prima in senso distribuzionale coincide quindi con la derivata ordinaria quasi ovunque. A sinistra dell'origine la derivata vale $ae^{ax}$ e ha limite $a$. A destra vale $-ae^{-ax}$ e ha limite $-a$. Si applica ora la definizione di derivata distribuzionale a $g'$ e si integra per parti sulle due semirette. Per una funzione test $\varphi$ si ottiene
$$
\begin{aligned}
\langle g'',\varphi\rangle
&=a^2\int_{\mathbb R}g(x)\varphi(x)\,dx
+(-a-a)\varphi(0),\\[6pt]
g''&=a^2g-2a\delta_0.
\end{aligned}
$$
La massa ha coefficiente $-2a$ perché il salto si calcola sottraendo il limite sinistro dal limite destro. Il termine $a^2g$ rappresenta invece la derivata seconda ordinaria sulle due semirette. Trasformando si trova $-\xi^2\widehat g=a^2\widehat g-2a$. Poiché $a^2+\xi^2$ è positivo, ne segue $\widehat g(\xi)=\dfrac{2a}{a^2+\xi^2}$. Si recupera così il risultato ottenuto integrando direttamente. In questo calcolo, il termine concentrato nell'origine determina il numeratore della trasformata.
:::

## Applicazione all'equazione del calore

:::esempio{#calore-fourier titolo="Trasformazione di un problema di Cauchy"}
Per $u_t=\kappa u_{xx}$ sulla retta, con $\kappa>0$ e dato iniziale $u_0$ di Schwartz, si trasforma nella variabile $x$:
$$
\partial_t\widehat u=-\kappa\xi^2\widehat u,\qquad
\widehat u(t,\xi)=e^{-\kappa t\xi^2}\widehat u_0(\xi).
$$
L'inversione e il teorema di convoluzione danno
$$
u(t,x)=G_t*u_0(x),\qquad
G_t(x)=\frac1{\sqrt{4\pi\kappa t}}e^{-\frac{x^2}{4\kappa t}}.
$$
Il nucleo ha integrale $1$ e si concentra in zero quando $t\downarrow0$. La soluzione è liscia per $t>0$ e converge al dato iniziale nel limite.
:::


:::esempio{titolo="Evoluzione di un dato gaussiano"}
Per $u_0(x)=e^{-x^2}$ e $\kappa=1$ si parte da $\widehat u_0(\xi)=\sqrt{\pi}e^{-\dfrac{\xi^2}{4}}$. La moltiplicazione per $e^{-t\xi^2}$ porta l'esponente a $-(t+\dfrac14)\xi^2$. Per invertire si riconosce una gaussiana con parametro spaziale $a=\dfrac1{1+4t}$. Il fattore richiesto davanti alla trasformata di quella gaussiana è $\dfrac1{\sqrt{1+4t}}$, quindi
$$
u(t,x)=\frac1{\sqrt{1+4t}}e^{-\frac{x^2}{1+4t}}.
$$
Quando $t$ cresce, il valore in zero diminuisce e la larghezza aumenta. L'integrale in $x$ resta $\sqrt{\pi}$, poiché il fattore di ampiezza cancella il fattore che compare nell'integrale gaussiano. In frequenza la stessa conservazione si legge valutando in $\xi=0$: il moltiplicatore $e^{-t\xi^2}$ vale uno in quel punto.

::grafico{f="exp(-x^2);exp(-x^2/2)/sqrt(2);exp(-x^2/5)/sqrt(5)" xmin=-4 xmax=4 ymin=-0.1 ymax=1.18 legenda="t=0;t=\frac14;t=1" titolo="Il calore allarga il profilo iniziale. Le tre curve hanno la stessa massa $\sqrt{\pi}$"}
:::

:::osservazione
Per vedere il recupero del dato iniziale tramite il nucleo $G_t$, si scrive $(G_t*u_0)(x)-u_0(x)$ come integrale di $G_t(y)[u_0(x-y)-u_0(x)]$. Per $|y|<\delta$ la differenza è piccola per uniforme continuità di $u_0$. Per $|y|\ge\delta$ è al più $2\|u_0\|_\infty$, mentre la massa del nucleo fuori da $(-\delta,\delta)$ tende a zero. Lo si vede con $y=\sqrt{4\kappa t}\,z$, che manda gli estremi esterni a infinito nella variabile $z$. Le due stime danno convergenza uniforme per un dato di Schwartz.

::grafico{f="exp(-x^2);exp(-x^2/4)" nomi="ξ,m" xmin=-5 xmax=5 ymin=-0.12 ymax=1.18 legenda="t=1;t=\frac14" titolo="Il moltiplicatore $e^{-t\xi^2}$ vale sempre uno in zero e attenua maggiormente le alte frequenze"}
:::

:::osservazione
La diffusione conserva anche il primo momento, cioè l'integrale del prodotto del profilo per $x$. Per un dato di Schwartz, anche il profilo a ogni tempo positivo è di Schwartz e la derivazione della trasformata è lecita. La derivata del fattore $e^{-\kappa t\xi^2}$ in frequenza zero vale zero, mentre il fattore stesso vale uno. La regola del prodotto dà pertanto
$$
\partial_\xi\widehat u(t,0)=\widehat u_0'(0),\qquad
\int_{\mathbb R}x\,u(t,x)\,dx=\int_{\mathbb R}x\,u_0(x)\,dx .
$$
Per esempio, il dato $u_0(x)=(x+1)e^{-(x+1)^2}$ ha integrale nullo per disparità rispetto a $-1$. Nel calcolo del primo momento, il cambio $y=x+1$ porta all'integrale di $(y^2-y)e^{-y^2}$. Il termine dispari si annulla e il termine quadratico dà $\dfrac{\sqrt\pi}{2}$ per integrazione per parti. La soluzione ha dunque massa zero e primo momento $\dfrac{\sqrt\pi}{2}$ a ogni tempo. I due integrali esprimono proprietà diverse del dato e corrispondono rispettivamente al valore e alla derivata della trasformata in zero.
:::
