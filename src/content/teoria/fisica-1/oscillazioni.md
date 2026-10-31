---
titolo: Oscillazioni e moto armonico
sommario: Che cos'è il moto armonico semplice, come lo si riconosce dall'equazione $\ddot{x} = -\omega^2 x$, come si calcolano periodo ed energia della molla e dei pendoli, e come smorzamento e forzante portano alla risonanza.
---

## Moto periodico e moto armonico semplice

:::definizione{#moto-periodico titolo="Moto periodico, periodo e frequenza"}
Un moto si dice **periodico** se esiste un intervallo di tempo $T > 0$ tale che, per ogni istante $t$, la posizione e la velocità all'istante $t + T$ coincidono con quelle all'istante $t$. Il più piccolo $T$ con questa proprietà è il **periodo**, e il numero di cicli completi compiuti nell'unità di tempo è la **frequenza**
$$
f = \frac{1}{T} ,
$$
che si misura in hertz ($1\,\mathrm{Hz} = 1\,\mathrm{s^{-1}}$). Periodo e frequenza si ricavano contando le oscillazioni; per esempio, un pendolo che compie $30$ oscillazioni complete in $45\,\mathrm{s}$ ha $T = 1{,}5\,\mathrm{s}$ e $f = 0{,}67\,\mathrm{Hz}$.
:::

:::definizione{#moto-armonico-semplice titolo="Moto armonico semplice"}
Un punto che si muove lungo l'asse $x$ compie un **moto armonico semplice** se la sua legge oraria è
$$
x(t) = A\cos(\omega t + \varphi) ,
$$
con $A > 0$, $\omega > 0$ e $\varphi \in \mathbb{R}$ costanti. Il numero $A$ è l'**ampiezza**, cioè la massima distanza del punto dalla posizione di equilibrio $x = 0$; $\omega$ è la **pulsazione**, in $\mathrm{rad/s}$; l'argomento $\omega t + \varphi$ è la fase e $\varphi$ è la fase iniziale. Poiché il coseno ha periodo $2\pi$, il moto è periodico con
$$
T = \frac{2\pi}{\omega}, \qquad f = \frac{\omega}{2\pi} .
$$
Il punto oscilla tra $x = -A$ e $x = A$. Una legge scritta con il seno descrive lo stesso moto con un'altra fase iniziale, perché $\sin\alpha = \cos\left(\alpha - \dfrac{\pi}{2}\right)$. Per $x(t) = 0{,}20\cos(5t)\,\mathrm{m}$ si legge $A = 0{,}20\,\mathrm{m}$ e $\omega = 5\,\mathrm{rad/s}$, quindi $T = \dfrac{2\pi}{5}\,\mathrm{s} = 1{,}26\,\mathrm{s}$.

::grafico{f="2*cos(pi*x/2)" asintoti="y=2;y=-2" punti="0,2,pieno;4,2,pieno;8,2,pieno" segmenti="0,2.5,4,2.5;8.4,0,8.4,2" etichette="1.8,2.75,T;8.5,0.9,A" xmin=-0.6 xmax=9 ymin=-2.8 ymax=3.2 nomi="t,x" titolo="Legge oraria $x(t) = A\cos(\omega t)$ con $A = 2$ e $T = 4$: il grafico è compreso tra $-A$ e $A$ e si ripete uguale dopo ogni periodo"}

:::

:::teorema{#velocita-e-accelerazione titolo="Velocità e accelerazione nel moto armonico"}
Nel moto armonico $x(t) = A\cos(\omega t + \varphi)$ la velocità e l'accelerazione sono
$$
v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \varphi),
\qquad
a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \varphi) = -\omega^2 x(t) .
$$
Le formule seguono derivando due volte la legge oraria con la regola della catena. I valori massimi dei moduli sono $v_{\max} = A\omega$, raggiunto nel passaggio per l'equilibrio, e $a_{\max} = A\omega^2$, raggiunto agli estremi $x = \pm A$, dove la velocità è nulla. La relazione $a = -\omega^2 x$ dice che l'accelerazione è proporzionale allo spostamento e ha verso opposto, quindi è sempre diretta verso la posizione di equilibrio. Per $x(t) = 0{,}20\cos(5t)\,\mathrm{m}$ si ha $v_{\max} = 1{,}0\,\mathrm{m/s}$ e $a_{\max} = 5{,}0\,\mathrm{m/s^2}$.

::grafico{f="cos(pi*x/2);-(pi/2)*sin(pi*x/2);-(pi/2)^2*cos(pi*x/2)" xmin=-0.4 xmax=8.6 ymin=-2.8 ymax=2.8 nomi="t,x  v  a" titolo="Con $A = 1$ e $T = 4$: posizione $x(t)$ (in colore), velocità $v(t)$ (tratteggiata) e accelerazione $a(t)$ (in rosso); la velocità si annulla dove $|x|$ è massimo e l'accelerazione ha sempre segno opposto a $x$"}

:::

:::osservazione{#velocita-e-posizione titolo="Velocità in funzione della posizione"}
Dalle leggi di $x$ e di $v$ si elimina il tempo. Posto $\alpha = \omega t + \varphi$, si ha $\cos\alpha = \dfrac{x}{A}$ e $\sin\alpha = -\dfrac{v}{A\omega}$; poiché $\cos^2\alpha + \sin^2\alpha = 1$, risulta
$$
\frac{x^2}{A^2} + \frac{v^2}{A^2\omega^2} = 1,
\qquad\text{quindi}\qquad
|v| = \omega\sqrt{A^2 - x^2} .
$$
La formula dà il modulo della velocità in ogni posizione senza conoscere l'istante; il verso dipende dal tratto di oscillazione che il punto sta percorrendo. Per $A = 0{,}10\,\mathrm{m}$ e $\omega = 4\,\mathrm{rad/s}$, nella posizione $x = 0{,}06\,\mathrm{m}$ si ha $|v| = 4 \cdot 0{,}08\,\mathrm{m/s} = 0{,}32\,\mathrm{m/s}$.
:::

:::osservazione{#moto-circolare-e-armonico titolo="Moto armonico e moto circolare uniforme"}
Sia $P$ un punto che percorre di moto circolare uniforme, con velocità angolare $\omega$, la circonferenza di centro $O$ e raggio $A$, e sia $\omega t + \varphi$ l'angolo che $\overrightarrow{OP}$ forma con l'asse $x$ all'istante $t$. La proiezione $Q$ di $P$ sull'asse $x$ ha ascissa $A\cos(\omega t + \varphi)$, quindi si muove di moto armonico semplice. La pulsazione del moto armonico è la velocità angolare del moto circolare, e la fase è l'angolo che individua $P$ sulla circonferenza. Si ritrova anche l'accelerazione, poiché l'accelerazione centripeta di $P$ ha modulo $\omega^2 A$ ed è diretta verso $O$, e perciò la sua componente lungo $x$ è $-\omega^2 A\cos(\omega t + \varphi) = -\omega^2 x$. Per il moto circolare uniforme si rimanda all'argomento sul moto nel piano.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="0,0,1.414,1.414,A" segmenti="1.414,1.414,1.414,0" punti="1.414,1.414,pieno,P;1.414,0,pieno,Q" etichette="0.45,0.18,ωt + φ" xmin=-2.8 xmax=2.8 ymin=-2.6 ymax=2.6 uguale=1 titolo="Il punto $P$ percorre la circonferenza di raggio $A$ con velocità angolare $\omega$; la sua proiezione $Q$ sull'asse $x$ ha ascissa $A\cos(\omega t + \varphi)$"}

:::

## Equazione del moto armonico

:::richiamo{titolo="Equazioni lineari del secondo ordine a coefficienti costanti"}
L'equazione $y'' + a\,y' + b\,y = 0$, con $a, b \in \mathbb{R}$, ha equazione caratteristica $r^2 + ar + b = 0$, e l'integrale generale dipende dalle radici:

- radici reali distinte $r_1, r_2$: $y = C_1 e^{r_1 t} + C_2 e^{r_2 t}$;
- radice reale doppia $r$: $y = (C_1 + C_2 t)\,e^{r t}$;
- radici complesse $\lambda \pm i\mu$: $y = e^{\lambda t}\bigl(C_1\cos(\mu t) + C_2\sin(\mu t)\bigr)$.

Assegnati $y(t_0)$ e $y'(t_0)$, il problema di Cauchy ha una e una sola soluzione. Si rimanda all'argomento di Analisi 1 sulle equazioni differenziali.
:::

::::teorema{#equazione-del-moto-armonico titolo="Equazione del moto armonico"}
Sia $\omega > 0$ e si indichino con $\dot{x} = \dfrac{dx}{dt}$ e $\ddot{x} = \dfrac{d^2 x}{dt^2}$ le derivate prima e seconda rispetto al tempo. Le soluzioni dell'equazione differenziale
$$
\ddot{x} = -\omega^2 x
$$
sono *tutte e sole* le funzioni $x(t) = A\cos(\omega t + \varphi)$ con $A \geq 0$ e $\varphi \in \mathbb{R}$. Il teorema si usa nel modo seguente. Se il secondo principio della dinamica, applicato a un sistema, porta a un'equazione della forma $\ddot{x} = -\omega^2 x$, allora il sistema compie un **moto armonico** con pulsazione uguale alla radice quadrata del coefficiente di $x$ e periodo $T = \dfrac{2\pi}{\omega}$. Per esempio $\ddot{x} = -25\,x$ descrive un moto armonico con $\omega = 5\,\mathrm{rad/s}$ e $T = 1{,}26\,\mathrm{s}$. La stessa conclusione vale per qualunque grandezza, come un angolo, che soddisfi un'equazione di questa forma.

:::dimostrazione
L'equazione si scrive $\ddot{x} + \omega^2 x = 0$ ed è lineare del secondo ordine a coefficienti costanti. L'equazione caratteristica $r^2 + \omega^2 = 0$ ha le radici complesse coniugate $\pm i\omega$, quindi l'integrale generale è $x(t) = C_1\cos(\omega t) + C_2\sin(\omega t)$ con $C_1, C_2 \in \mathbb{R}$. Si pone $A = \sqrt{C_1^2 + C_2^2}$. Se $A > 0$, il punto $\left(\dfrac{C_1}{A}, -\dfrac{C_2}{A}\right)$ sta sulla circonferenza di raggio $1$, perciò esiste $\varphi$ tale che $\cos\varphi = \dfrac{C_1}{A}$ e $\sin\varphi = -\dfrac{C_2}{A}$. Per la formula di addizione del coseno
$$
\begin{aligned}
A\cos(\omega t + \varphi) &= A\cos\varphi\cos(\omega t) - A\sin\varphi\sin(\omega t) \\[6pt]
&= C_1\cos(\omega t) + C_2\sin(\omega t) ,
\end{aligned}
$$
quindi ogni soluzione ha la forma dell'enunciato; se $A = 0$ la soluzione è quella nulla. Viceversa, per il teorema su **velocità e accelerazione nel moto armonico**, ogni funzione $A\cos(\omega t + \varphi)$ ha derivata seconda $-\omega^2 A\cos(\omega t + \varphi)$, e perciò soddisfa l'equazione.
:::
::::

:::teorema{#condizioni-iniziali titolo="Ampiezza e fase dalle condizioni iniziali"}
Se all'istante $t = 0$ il punto si trova in $x_0$ con velocità $v_0$, l'ampiezza e la fase iniziale del moto armonico di pulsazione $\omega$ sono determinate da
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}},
\qquad
\begin{cases}
\cos\varphi = \dfrac{x_0}{A} \\[10pt]
\sin\varphi = -\dfrac{v_0}{A\omega}
\end{cases}
$$
Le formule seguono imponendo $x(0) = A\cos\varphi = x_0$ e $v(0) = -A\omega\sin\varphi = v_0$, e sommando i quadrati delle due uguaglianze. Le due condizioni su $\varphi$ vanno soddisfatte *insieme*; infatti la sola tangente $\tan\varphi = -\dfrac{v_0}{\omega x_0}$ individua $\varphi$ a meno di $\pi$, e il segno di $\cos\varphi$ sceglie il valore corretto. Un corpo lasciato fermo nella posizione $x_0 > 0$ ha $A = x_0$ e $\varphi = 0$; un corpo lanciato dalla posizione di equilibrio con velocità $v_0 > 0$ ha $A = \dfrac{v_0}{\omega}$ e $\varphi = -\dfrac{\pi}{2}$.
:::

## Oscillatore massa-molla

::::teorema{#massa-molla titolo="Oscillatore massa-molla"}
Un corpo di massa $m$, collegato a una molla ideale (di massa trascurabile) di costante elastica $k$, si muove su un piano orizzontale liscio; l'asse $x$ è diretto lungo la molla, con origine nella posizione in cui la molla ha la lunghezza a riposo. Allora il corpo compie un moto armonico semplice con
$$
\omega = \sqrt{\frac{k}{m}},
\qquad
T = 2\pi\sqrt{\frac{m}{k}} .
$$
Il periodo dipende solo dalla massa e dalla costante elastica e *non* dipende dall'ampiezza, quindi oscillazioni ampie e oscillazioni piccole durano lo stesso tempo (**isocronismo**). Ampiezza e fase dipendono invece dalle condizioni iniziali. Un corpo di $0{,}25\,\mathrm{kg}$ attaccato a una molla con $k = 100\,\mathrm{N/m}$ oscilla con $\omega = 20\,\mathrm{rad/s}$ e $T = 0{,}314\,\mathrm{s}$, sia che lo si sposti di $1\,\mathrm{cm}$ sia che lo si sposti di $5\,\mathrm{cm}$.

:::dimostrazione
Sul corpo agiscono il peso, la reazione normale del piano e la forza elastica. Il piano è liscio, quindi non c'è attrito; il moto avviene in orizzontale, quindi il peso e la normale si equilibrano. Lungo $x$ resta la forza elastica, che per la legge di Hooke vale $F_x = -kx$ (si rimanda all'argomento sulle leggi di Newton). Il secondo principio della dinamica lungo $x$ dà
$$
m\ddot{x} = -kx,
\qquad\text{cioè}\qquad
\ddot{x} = -\frac{k}{m}\,x .
$$
L'equazione ha la forma $\ddot{x} = -\omega^2 x$ con $\omega^2 = \dfrac{k}{m}$, perciò per l'**equazione del moto armonico** il moto è armonico con $\omega = \sqrt{\dfrac{k}{m}}$ e periodo $T = \dfrac{2\pi}{\omega} = 2\pi\sqrt{\dfrac{m}{k}}$.
:::
::::

::::teorema{#molla-verticale titolo="Molla verticale"}
Un corpo di massa $m$ è appeso a una molla ideale verticale di costante elastica $k$. Nella posizione di equilibrio la molla è allungata di
$$
\Delta\ell = \frac{mg}{k} ,
$$
e attorno a quella posizione il corpo compie un moto armonico con la stessa pulsazione $\omega = \sqrt{\dfrac{k}{m}}$ della molla orizzontale. Il peso sposta il centro dell'oscillazione e lascia invariato il periodo. Poiché $\dfrac{k}{m} = \dfrac{g}{\Delta\ell}$, il periodo si ricava anche dal solo allungamento statico, $T = 2\pi\sqrt{\dfrac{\Delta\ell}{g}}$; una molla che sotto il peso del corpo si allunga di $10\,\mathrm{cm}$ dà $T = 0{,}634\,\mathrm{s}$.

:::dimostrazione
Si orienta l'asse $x$ verticalmente verso il basso, con origine nella posizione dell'estremo libero della molla a riposo. Sul corpo agiscono il peso $mg$, diretto verso il basso, e la forza elastica $-kx$, quindi il secondo principio dà $m\ddot{x} = mg - kx$. All'equilibrio l'accelerazione è nulla, perciò $k\,\Delta\ell = mg$. Con la variabile $s = x - \Delta\ell$, che misura lo spostamento dalla posizione di equilibrio, si ha $\ddot{s} = \ddot{x}$ e
$$
m\ddot{s} = mg - k\,(s + \Delta\ell) = -ks ,
$$
perché $mg - k\,\Delta\ell = 0$. L'equazione per $s$ coincide con quella della molla orizzontale, quindi $s$ varia di moto armonico con $\omega = \sqrt{\dfrac{k}{m}}$.
:::
::::

:::teorema{#molle-in-serie-e-in-parallelo titolo="Molle in parallelo e in serie"}
Due molle ideali di costanti $k_1$ e $k_2$ equivalgono a una sola molla di costante

- $k_p = k_1 + k_2$ se sono in parallelo, cioè hanno lo stesso allungamento;
- $k_s = \dfrac{k_1 k_2}{k_1 + k_2}$, cioè $\dfrac{1}{k_s} = \dfrac{1}{k_1} + \dfrac{1}{k_2}$, se sono in serie, cioè collegate una di seguito all'altra.

In parallelo, a parità di allungamento $x$, le forze delle due molle si sommano, quindi $F = k_1 x + k_2 x$. In serie la forza $F$ è la stessa nelle due molle e sono gli allungamenti a sommarsi, quindi $x = \dfrac{F}{k_1} + \dfrac{F}{k_2}$. Il periodo dell'oscillatore si calcola poi con la costante equivalente. Due molle uguali di costante $k$ danno $2k$ in parallelo e $\dfrac{k}{2}$ in serie, e con lo stesso corpo i due periodi stanno nel rapporto $1 : 2$.
:::

## Energia del moto armonico

::::teorema{#energia-oscillatore titolo="Energia dell'oscillatore armonico"}
Nell'oscillatore massa-molla, con $x(t) = A\cos(\omega t + \varphi)$ e $\omega^2 = \dfrac{k}{m}$, l'energia cinetica $K = \dfrac{1}{2}mv^2$ e l'energia potenziale elastica $U = \dfrac{1}{2}kx^2$ valgono
$$
K = \frac{1}{2}kA^2\sin^2(\omega t + \varphi),
\qquad
U = \frac{1}{2}kA^2\cos^2(\omega t + \varphi),
$$
e la loro somma è costante:
$$
E = K + U = \frac{1}{2}kA^2 = \frac{1}{2}m\omega^2 A^2 .
$$
L'**energia meccanica** è proporzionale al quadrato dell'ampiezza. Durante il moto l'energia passa dalla forma potenziale, che è tutta l'energia agli estremi $x = \pm A$, alla forma cinetica, che è tutta l'energia nel passaggio per l'equilibrio, dove $\dfrac{1}{2}mv_{\max}^2 = \dfrac{1}{2}kA^2$. Con $k = 200\,\mathrm{N/m}$ e $A = 0{,}050\,\mathrm{m}$ l'energia è $0{,}25\,\mathrm{J}$.

::grafico{f="x^2;4" punti="-2,4,pieno,−A;2,4,pieno,A;1,1,pieno" segmenti="1,0,1,1" vettori="1,1,1,4" etichette="1.15,2.4,K;1.15,0.35,U;-2.9,4.35,E" xmin=-3 xmax=3 ymin=-0.6 ymax=5.6 nomi="x,E" titolo="L'energia potenziale $U = \dfrac{1}{2}kx^2$ è una parabola; la retta $E = \dfrac{1}{2}kA^2$ la incontra in $x = \pm A$, e in ogni posizione l'energia cinetica è la distanza $K = E - U$ tra la retta e la parabola"}

Nel tempo $K$ e $U$ oscillano con periodo $\dfrac{T}{2}$, metà del periodo del moto, e in un periodo hanno lo stesso valore medio $\dfrac{E}{2}$, come mostra il grafico.

::grafico{f="4*cos(pi*x/2)^2;4*sin(pi*x/2)^2;4" xmin=-0.4 xmax=8.6 ymin=-0.6 ymax=5 nomi="t,E" titolo="Con $T = 4$: energia potenziale $U(t)$ (in colore), energia cinetica $K(t)$ (tratteggiata) e la loro somma $E$ costante (in rosso)"}

:::dimostrazione
Per il teorema su velocità e accelerazione nel moto armonico $v = -A\omega\sin(\omega t + \varphi)$, quindi
$$
K = \frac{1}{2}mA^2\omega^2\sin^2(\omega t + \varphi) = \frac{1}{2}kA^2\sin^2(\omega t + \varphi) ,
$$
dove si è usato $m\omega^2 = k$. Sostituendo $x(t)$ in $U = \dfrac{1}{2}kx^2$ si ottiene la seconda formula, e sommando, poiché $\sin^2\alpha + \cos^2\alpha = 1$, si ottiene $E = \dfrac{1}{2}kA^2$. Il risultato è un caso della **conservazione dell'energia meccanica**, poiché l'unica forza che compie lavoro è la forza elastica, che è conservativa, mentre peso e normale sono perpendicolari allo spostamento; si rimanda all'argomento sul lavoro e l'energia.
:::
::::

::::teorema{#piccole-oscillazioni titolo="Piccole oscillazioni attorno a un minimo dell'energia potenziale"}
Un punto materiale di massa $m$ si muove lungo l'asse $x$ soggetto a una forza conservativa con energia potenziale $U(x)$ derivabile due volte con continuità. Se $x_e$ è un punto di minimo di $U$ con $U''(x_e) > 0$, per piccoli spostamenti da $x_e$ il moto è approssimativamente armonico con
$$
\omega = \sqrt{\frac{U''(x_e)}{m}} .
$$
Il teorema estende l'oscillatore massa-molla a ogni posizione di equilibrio stabile, e il numero $U''(x_e)$ ha il ruolo della costante elastica. Per una massa di $2{,}0\,\mathrm{kg}$ con energia potenziale $U(x) = x^4 - 2x^2$ ($x$ in metri, $U$ in joule) i minimi sono in $x_e = \pm 1\,\mathrm{m}$, dove $U''(x_e) = 12 - 4 = 8\,\mathrm{N/m}$, quindi $\omega = 2{,}0\,\mathrm{rad/s}$.

:::dimostrazione
Poiché $x_e$ è un punto di minimo interno, $U'(x_e) = 0$; quindi la forza $F(x) = -U'(x)$ è nulla in $x_e$, che è una posizione di equilibrio. La formula di Taylor al primo ordine per la funzione $U'$ attorno a $x_e$ (si rimanda all'argomento di Analisi 1 sulle derivate) dà
$$
\begin{aligned}
F(x) &= -U'(x_e) - U''(x_e)\,(x - x_e) + o(x - x_e) \\[6pt]
&= -U''(x_e)\,(x - x_e) + o(x - x_e) .
\end{aligned}
$$
Per piccoli spostamenti si trascura il resto. Con la variabile $s = x - x_e$ il secondo principio diventa allora $m\ddot{s} = -U''(x_e)\,s$, che è l'**equazione del moto armonico** con $\omega^2 = \dfrac{U''(x_e)}{m}$. Per le curve di energia potenziale si rimanda all'argomento sul lavoro e l'energia.
:::
::::

## Pendolo semplice

:::definizione{#pendolo-semplice titolo="Pendolo semplice"}
Il **pendolo semplice** è un punto materiale di massa $m$ appeso a un filo inestensibile, di massa trascurabile e lunghezza $\ell$, il cui altro estremo è fissato in un punto $O$; il punto si muove in un piano verticale e l'attrito dell'aria è trascurabile. La posizione è descritta dall'angolo $\theta$ che il filo forma con la verticale per $O$, con segno positivo in un verso fissato. Il punto percorre un arco di circonferenza di raggio $\ell$, e la sua ascissa curvilinea, misurata dal punto più basso, è $s = \ell\theta$ con $\theta$ in radianti. Il modello descrive un corpo piccolo e pesante appeso a un filo leggero, come una sfera di metallo appesa a un filo sottile. Nel pendolo il periodo si indica con $T_0$, perché la lettera $T$ indica il modulo della tensione del filo.
:::

::::teorema{#periodo-del-pendolo titolo="Periodo del pendolo per piccole oscillazioni"}
Per un pendolo semplice di lunghezza $\ell$ l'angolo soddisfa l'equazione
$$
\ddot{\theta} = -\frac{g}{\ell}\sin\theta .
$$
Per piccole oscillazioni, cioè per ampiezze angolari tali che $\sin\theta \approx \theta$, il moto è armonico con
$$
\omega = \sqrt{\frac{g}{\ell}},
\qquad
T_0 = 2\pi\sqrt{\frac{\ell}{g}} .
$$
Il periodo *non* dipende dalla massa e, nel limite delle piccole oscillazioni, nemmeno dall'ampiezza. La formula serve sia a calcolare il periodo sia, misurando $T_0$ e $\ell$, a ricavare l'accelerazione di gravità $g = \dfrac{4\pi^2 \ell}{T_0^2}$. Un pendolo lungo $1{,}00\,\mathrm{m}$ ha $T_0 = 2{,}01\,\mathrm{s}$.

::grafico{assi=0 curve="3.5*sin(t),-3.5*cos(t),-0.6,0.6" linee="-1,0 1.2,0;0,0 1.75,-3.031" segmenti="0,0,0,-3.9" vettori="1.75,-3.031,0.75,-1.299,T;1.75,-3.031,1.75,-5.431,mg;1.75,-3.031,0.711,-3.631;1.75,-3.031,2.789,-4.831,mg cosθ" punti="0,0,pieno,O;1.75,-3.031,pieno" etichette="0.12,-1.5,θ;-0.15,-3.95,mg sinθ" xmin=-1.6 xmax=4 ymin=-5.9 ymax=0.6 uguale=1 titolo="Forze sul pendolo: la tensione $\vec{T}$ lungo il filo e il peso $m\vec{g}$, che si scompone in $mg\cos\theta$ lungo il filo e $mg\sin\theta$ lungo la tangente alla traiettoria, verso la posizione di equilibrio"}

:::dimostrazione
Sul punto agiscono il peso $m\vec{g}$ e la tensione del filo $\vec{T}$. La tensione è diretta lungo il filo, quindi è perpendicolare alla traiettoria e non ha componente tangente. La componente del peso lungo la tangente, nel verso in cui $\theta$ cresce, è $-mg\sin\theta$. L'accelerazione tangenziale di un moto lungo una circonferenza di raggio $\ell$ è $\ddot{s} = \ell\ddot{\theta}$, perciò il secondo principio lungo la tangente dà
$$
m\ell\ddot{\theta} = -mg\sin\theta,
\qquad\text{cioè}\qquad
\ddot{\theta} = -\frac{g}{\ell}\sin\theta .
$$
La massa si semplifica perché compare sia nel peso sia nel prodotto massa per accelerazione. Per angoli piccoli si sostituisce $\sin\theta$ con $\theta$, poiché $\sin\theta = \theta + o(\theta)$ per $\theta \to 0$, e si ottiene $\ddot{\theta} = -\dfrac{g}{\ell}\,\theta$. Per l'**equazione del moto armonico** l'angolo oscilla con $\omega = \sqrt{\dfrac{g}{\ell}}$, quindi $T_0 = 2\pi\sqrt{\dfrac{\ell}{g}}$.
:::
::::

:::osservazione{#approssimazione-piccoli-angoli titolo="Validità dell'approssimazione"}
L'approssimazione $\sin\theta \approx \theta$ richiede l'angolo in radianti. A $10^\circ$, cioè $0{,}1745\,\mathrm{rad}$, si ha $\sin\theta = 0{,}1736$, con uno scarto relativo dello $0{,}5\%$; perciò la formula del periodo è accurata per ampiezze fino a una decina di gradi. Per ampiezze maggiori il moto resta periodico ma non è più armonico, e il periodo cresce con l'ampiezza $\theta_0$; il primo termine della correzione dà
$$
T_0 \approx 2\pi\sqrt{\frac{\ell}{g}}\left(1 + \frac{\theta_0^2}{16}\right) .
$$
:::

:::osservazione{#tensione-del-filo titolo="Tensione del filo"}
Lungo il filo la componente del peso è $mg\cos\theta$, diretta verso l'esterno, e l'accelerazione è quella centripeta $\dfrac{v^2}{\ell}$, diretta verso $O$. Il secondo principio lungo il filo dà
$$
T - mg\cos\theta = m\,\frac{v^2}{\ell},
\qquad\text{quindi}\qquad
T = mg\cos\theta + m\,\frac{v^2}{\ell} .
$$
La tensione è massima nel punto più basso, dove $\cos\theta = 1$ e la velocità è massima, e minima agli estremi, dove $v = 0$. Per un pendolo che parte da fermo dall'angolo $\theta_0$, la conservazione dell'energia meccanica dà la velocità nel punto più basso, $v^2 = 2g\ell\,(1 - \cos\theta_0)$. Per la forza centripeta si rimanda all'argomento sulle leggi di Newton.
:::

:::osservazione{#pendolo-in-un-sistema-accelerato titolo="Pendolo in un sistema accelerato"}
In un ascensore che sale con accelerazione costante $a$, nel riferimento dell'ascensore sul punto agisce anche la forza apparente $-m\vec{a}$, diretta verso il basso, che si somma al peso. Il pendolo si comporta quindi come in un campo di gravità di intensità $g + a$, e il periodo per piccole oscillazioni diventa
$$
T_0 = 2\pi\sqrt{\frac{\ell}{g + a}} ,
$$
più breve che con l'ascensore fermo. Se l'ascensore ha accelerazione $a < g$ diretta verso il basso, al posto di $g + a$ si scrive $g - a$. Per le forze apparenti si rimanda all'argomento sulle leggi di Newton.
:::

## Pendolo fisico e pendolo di torsione

:::richiamo{titolo="Seconda equazione cardinale e teorema di Steiner"}
Per un corpo rigido che ruota attorno a un asse fisso vale $I\ddot{\theta} = M$, dove $I$ è il momento d'inerzia rispetto all'asse e $M$ è il momento delle forze esterne rispetto all'asse. Il momento d'inerzia rispetto a un asse a distanza $d$ dal centro di massa è $I = I_{\mathrm{cm}} + md^2$, dove $I_{\mathrm{cm}}$ è quello rispetto all'asse parallelo passante per il centro di massa. Si rimanda all'argomento sulla dinamica del corpo rigido.
:::

::::teorema{#pendolo-fisico titolo="Pendolo fisico"}
Un **pendolo fisico** è un corpo rigido di massa $m$ libero di ruotare senza attrito attorno a un asse orizzontale fisso che non passa per il suo centro di massa $G$. Siano $I$ il momento d'inerzia rispetto all'asse e $d$ la distanza di $G$ dall'asse. Per piccole oscillazioni il moto è armonico con
$$
\omega = \sqrt{\frac{mgd}{I}},
\qquad
T = 2\pi\sqrt{\frac{I}{mgd}} .
$$
Il pendolo fisico oscilla con lo stesso periodo di un pendolo semplice di lunghezza $\ell_r = \dfrac{I}{md}$, detta **lunghezza ridotta**. Per un pendolo semplice di lunghezza $\ell$ si ha $I = m\ell^2$ e $d = \ell$, e la formula restituisce il periodo $2\pi\sqrt{\dfrac{\ell}{g}}$ del pendolo semplice. Per un'asta omogenea di lunghezza $L$ sospesa a un estremo si ha $I = \dfrac{1}{3}mL^2$ e $d = \dfrac{L}{2}$, quindi $T = 2\pi\sqrt{\dfrac{2L}{3g}}$; con $L = 1{,}00\,\mathrm{m}$ si ottiene $T = 1{,}64\,\mathrm{s}$, contro i $2{,}01\,\mathrm{s}$ del pendolo semplice della stessa lunghezza.

:::dimostrazione
Sia $\theta$ l'angolo tra la verticale per l'asse e il segmento che congiunge l'asse con $G$. Le forze esterne sono il peso, applicato in $G$, e la reazione dell'asse, che ha momento nullo perché è applicata sull'asse. Il peso ha braccio $d\sin\theta$ e tende a riportare il corpo nella posizione $\theta = 0$, quindi il suo momento è $M = -mgd\sin\theta$. La **seconda equazione cardinale** dà
$$
I\ddot{\theta} = -mgd\sin\theta .
$$
Per piccole oscillazioni $\sin\theta \approx \theta$, perciò $\ddot{\theta} = -\dfrac{mgd}{I}\,\theta$, che è l'equazione del moto armonico con $\omega^2 = \dfrac{mgd}{I}$.
:::
::::

:::osservazione{#pendolo-di-torsione titolo="Pendolo di torsione"}
Un corpo rigido appeso a un filo verticale e libero di ruotare attorno all'asse del filo è soggetto a un momento di richiamo proporzionale all'angolo di torsione, $M = -\kappa\theta$, dove $\kappa$ è la costante di torsione del filo, in $\mathrm{N\cdot m/rad}$. La seconda equazione cardinale dà $I\ddot{\theta} = -\kappa\,\theta$, quindi il moto è armonico con
$$
T = 2\pi\sqrt{\frac{I}{\kappa}} .
$$
Qui non serve l'approssimazione $\sin\theta \approx \theta$, e la formula vale finché il momento resta proporzionale all'angolo. Misurando il periodo con un corpo di momento d'inerzia noto si ricava $\kappa$; con lo stesso filo si misurano poi momenti d'inerzia incogniti.
:::

## Oscillazioni smorzate

:::definizione{#oscillatore-smorzato titolo="Oscillatore smorzato"}
Un oscillatore massa-molla che si muove in un fluido a bassa velocità è soggetto anche a una forza viscosa $\vec{F}_v = -b\,\vec{v}$, opposta alla velocità, con $b > 0$ coefficiente di smorzamento in $\mathrm{kg/s}$. Il secondo principio lungo $x$ dà l'equazione dell'**oscillatore smorzato**
$$
m\ddot{x} + b\dot{x} + kx = 0,
\qquad\text{cioè}\qquad
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0,
$$
dove $\omega_0 = \sqrt{\dfrac{k}{m}}$ è la **pulsazione propria**, quella che il sistema avrebbe senza smorzamento, e $\gamma = \dfrac{b}{2m}$ è la costante di smorzamento, in $\mathrm{s^{-1}}$. Il fattore $2$ davanti a $\gamma$ semplifica le radici dell'equazione caratteristica. Per $m = 0{,}50\,\mathrm{kg}$, $k = 50\,\mathrm{N/m}$ e $b = 1{,}0\,\mathrm{kg/s}$ si ha $\omega_0 = 10\,\mathrm{rad/s}$ e $\gamma = 1{,}0\,\mathrm{s^{-1}}$.
:::

::::teorema{#regimi-di-smorzamento titolo="Regimi dell'oscillatore smorzato"}
Le soluzioni di $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$ dipendono dal confronto tra $\gamma$ e $\omega_0$:

- smorzamento debole, $\gamma < \omega_0$: $x(t) = A_0\,e^{-\gamma t}\cos(\omega_s t + \varphi)$, con $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$;
- smorzamento critico, $\gamma = \omega_0$: $x(t) = (C_1 + C_2 t)\,e^{-\gamma t}$;
- smorzamento forte, $\gamma > \omega_0$: $x(t) = C_1 e^{r_1 t} + C_2 e^{r_2 t}$, con $r_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$ entrambe negative.

Nel primo caso il corpo oscilla con pulsazione $\omega_s$, minore di $\omega_0$, e con ampiezza $A_0 e^{-\gamma t}$ che decresce esponenzialmente; in ogni intervallo di durata $\dfrac{1}{\gamma}$ l'ampiezza si riduce di un fattore $e$. Negli altri due casi il corpo torna all'equilibrio **senza oscillare**, e tra questi moti il ritorno più rapido è quello con smorzamento critico.

::grafico{f="exp(-0.25*x)*cos(2*x);exp(-0.25*x);-exp(-0.25*x)" xmin=-0.4 xmax=14 ymin=-1.2 ymax=1.2 nomi="t,x" titolo="Smorzamento debole: $x(t) = e^{-\gamma t}\cos(\omega_s t)$ oscilla tra le curve $\pm e^{-\gamma t}$ (tratteggiata e in rosso), con ampiezza che si riduce di un fattore $e$ ogni $\dfrac{1}{\gamma}$"}

::grafico{f="exp(-0.5*x)*(cos(1.9365*x)+0.2582*sin(1.9365*x));(1+2*x)*exp(-2*x);1.0774*exp(-0.5359*x)-0.0774*exp(-7.4641*x)" xmin=-0.3 xmax=8 ymin=-0.8 ymax=1.3 nomi="t,x" titolo="Con $\omega_0 = 2$, partendo da fermo in $x = 1$: smorzamento debole con $\gamma = \dfrac{1}{2}$ (in colore), critico con $\gamma = 2$ (tratteggiato), forte con $\gamma = 4$ (in rosso)"}

:::dimostrazione
L'equazione caratteristica $r^2 + 2\gamma r + \omega_0^2 = 0$ ha le radici $r = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$. Se $\gamma > \omega_0$ le radici sono reali distinte e, poiché $\sqrt{\gamma^2 - \omega_0^2} < \gamma$, sono entrambe negative. Se $\gamma = \omega_0$ c'è la radice doppia $-\gamma$. Se $\gamma < \omega_0$ le radici sono $-\gamma \pm i\omega_s$, quindi l'integrale generale è $e^{-\gamma t}\bigl(C_1\cos(\omega_s t) + C_2\sin(\omega_s t)\bigr)$, che si scrive $A_0 e^{-\gamma t}\cos(\omega_s t + \varphi)$ con lo stesso passaggio della dimostrazione dell'**equazione del moto armonico**.
:::
::::

:::osservazione{#energia-oscillatore-smorzato titolo="Energia dissipata e fattore di qualità"}
Derivando $E = \dfrac{1}{2}mv^2 + \dfrac{1}{2}kx^2$ e usando l'equazione del moto si ottiene $\dfrac{dE}{dt} = v\,(m\ddot{x} + kx) = -b\,v^2 \leq 0$, quindi l'energia meccanica diminuisce per il lavoro della forza viscosa. Con smorzamento debole e $\gamma$ molto minore di $\omega_0$ l'energia è quella di un oscillatore armonico di ampiezza $A_0 e^{-\gamma t}$, cioè
$$
E(t) \approx \frac{1}{2}kA_0^2\,e^{-2\gamma t} ,
$$
e decresce con costante $2\gamma$, doppia di quella dell'ampiezza. Il **fattore di qualità** $Q = \dfrac{\omega_0}{2\gamma}$ misura quanto è debole lo smorzamento; è il numero di radianti percorsi dalla fase mentre l'energia si riduce di un fattore $e$. Se l'ampiezza passa da $A_1$ a $A_2$ in un intervallo $\Delta t$, allora
$$
\gamma = \frac{1}{\Delta t}\ln\frac{A_1}{A_2} ,
$$
e così si misura $\gamma$ dalle oscillazioni registrate.
:::

## Oscillazioni forzate e risonanza

:::definizione{#oscillatore-forzato titolo="Oscillatore forzato"}
Un oscillatore smorzato soggetto anche a una forza esterna sinusoidale $F(t) = F_0\cos(\Omega t)$ è un **oscillatore forzato**; la pulsazione $\Omega$ della forzante è in generale diversa dalla pulsazione propria $\omega_0$. L'equazione del moto è
$$
m\ddot{x} + b\dot{x} + kx = F_0\cos(\Omega t),
\qquad\text{cioè}\qquad
\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = \frac{F_0}{m}\cos(\Omega t) .
$$
È un'equazione lineare non omogenea, quindi il suo integrale generale è la somma dell'integrale generale dell'omogenea associata, che descrive il moto smorzato, e di una soluzione particolare.
:::

:::teorema{#regime-stazionario titolo="Regime stazionario"}
Per $\gamma > 0$ ogni soluzione dell'equazione dell'oscillatore forzato, dopo un transitorio, coincide con il moto
$$
x(t) = A(\Omega)\cos(\Omega t - \delta),
\qquad
A(\Omega) = \frac{F_0}{m\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}},
$$
dove lo sfasamento $\delta \in (0, \pi)$ soddisfa $\tan\delta = \dfrac{2\gamma\Omega}{\omega_0^2 - \Omega^2}$. Il corpo oscilla alla pulsazione della forzante, con un'ampiezza che dipende da $\Omega$ e in ritardo rispetto alla forza. Il transitorio è la soluzione dell'omogenea, che tende a zero esponenzialmente (come $e^{-\gamma t}$ nel caso di smorzamento debole); per questo il **regime stazionario** non dipende dalle condizioni iniziali. La soluzione particolare si trova con il metodo di somiglianza, nella forma $a\cos(\Omega t) + c\sin(\Omega t)$ (si rimanda all'argomento di Analisi 1 sulle equazioni differenziali). Per $\Omega \to 0$ l'ampiezza tende a $\dfrac{F_0}{m\omega_0^2} = \dfrac{F_0}{k}$, l'allungamento statico prodotto dalla forza $F_0$, e per $\Omega \to +\infty$ tende a $0$. Se lo smorzamento è trascurabile si pone $\gamma = 0$, e per $\Omega \neq \omega_0$ la soluzione particolare ha ampiezza $\dfrac{F_0}{m\,|\omega_0^2 - \Omega^2|}$.
:::

::::teorema{#risonanza titolo="Risonanza"}
Se $\gamma < \dfrac{\omega_0}{\sqrt{2}}$, l'ampiezza del regime stazionario è massima per
$$
\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2},
\qquad
A_{\max} = \frac{F_0}{2m\gamma\sqrt{\omega_0^2 - \gamma^2}} .
$$
Il fenomeno si chiama **risonanza**. Con smorzamento piccolo $\Omega_r$ è molto vicina a $\omega_0$ e $A_{\max} \approx \dfrac{F_0}{2m\gamma\omega_0} = Q\,\dfrac{F_0}{k}$, quindi alla risonanza la forzante produce un'ampiezza circa $Q$ volte maggiore dello spostamento statico. Al diminuire di $\gamma$ il picco diventa più alto e più stretto. Se $\gamma \geq \dfrac{\omega_0}{\sqrt{2}}$ l'ampiezza decresce al crescere di $\Omega$ e non c'è picco.

::grafico{f="16/sqrt((16-x^2)^2+0.64*x^2);16/sqrt((16-x^2)^2+4*x^2);16/sqrt((16-x^2)^2+16*x^2)" asintoti="x=4" xmin=-0.3 xmax=8 ymin=-0.4 ymax=5.8 nomi="Ω,A" titolo="Ampiezza $A(\Omega)$ per $\omega_0 = 4$ e $\dfrac{F_0}{k} = 1$, con $\gamma = 0{,}4$ (in colore), $\gamma = 1$ (tratteggiata), $\gamma = 2$ (in rosso): il picco si alza e si avvicina a $\omega_0$ al diminuire di $\gamma$"}

:::dimostrazione
L'ampiezza è massima dove è minimo il radicando del denominatore. Posto $u = \Omega^2 \geq 0$, si studia $h(u) = (\omega_0^2 - u)^2 + 4\gamma^2 u$, che ha derivata $h'(u) = 2u - 2\omega_0^2 + 4\gamma^2$. La derivata è crescente e si annulla in $u = \omega_0^2 - 2\gamma^2$, che è quindi il punto di minimo di $h$; il punto è accettabile, cioè positivo, se e solo se $\gamma^2 < \dfrac{\omega_0^2}{2}$. Sostituendo,
$$
h(\omega_0^2 - 2\gamma^2) = 4\gamma^4 + 4\gamma^2(\omega_0^2 - 2\gamma^2) = 4\gamma^2(\omega_0^2 - \gamma^2) ,
$$
da cui la formula di $A_{\max}$. Se invece $\gamma^2 \geq \dfrac{\omega_0^2}{2}$, si ha $h'(u) > 0$ per ogni $u > 0$, quindi $h$ è crescente e l'ampiezza è decrescente.
:::
::::

:::osservazione{#risonanza-senza-smorzamento titolo="Risonanza senza smorzamento"}
Se $\gamma = 0$ e la forzante ha esattamente la pulsazione propria, $\Omega = \omega_0$, l'equazione $\ddot{x} + \omega_0^2 x = \dfrac{F_0}{m}\cos(\omega_0 t)$ ha la soluzione particolare
$$
x_p(t) = \frac{F_0}{2m\omega_0}\,t\sin(\omega_0 t) ,
$$
che si ottiene con la regola della risonanza del metodo di somiglianza. L'ampiezza cresce *linearmente* nel tempo, perché la forzante cede energia al sistema a ogni ciclo e nessuna forza la dissipa. Nei sistemi reali un piccolo smorzamento limita la crescita al valore $A_{\max}$ del teorema sulla risonanza.
:::
