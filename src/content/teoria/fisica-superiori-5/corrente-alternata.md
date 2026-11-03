---
titolo: Corrente alternata e trasformatore
sommario: Come un alternatore produce una forza elettromotrice sinusoidale, che cosa sono i valori efficaci, come si comportano resistori, induttori e condensatori in corrente alternata, come si calcolano impedenza, sfasamento, risonanza e potenza media di un circuito RLC in serie, come funziona il trasformatore e come oscilla la carica in un circuito LC.
---

## Alternatore e forza elettromotrice sinusoidale

:::richiamo{titolo="Flusso del campo magnetico attraverso una spira"}
Sia $\vec{B}$ un campo magnetico uniforme e sia $S$ l'area di una spira piana, con versore normale $\hat{n}$ che forma l'angolo $\theta$ con $\vec{B}$. Allora il flusso di $\vec{B}$ attraverso la spira è $\Phi_B = B S \cos\theta$.
:::

:::richiamo{titolo="Derivata della funzione composta"}
Se $g$ è derivabile in $t$ e $f$ è derivabile in $g(t)$, allora $f\big( g(t) \big)$ è derivabile in $t$ e la sua derivata è $f'\big( g(t) \big) \cdot g'(t)$.
:::

:::richiamo{titolo="Legge di Faraday-Neumann"}
Se il flusso del campo magnetico concatenato con un circuito è una funzione derivabile $\Phi_B(t)$, nel circuito si induce la f.e.m. $\mathcal{E}(t) = -\dfrac{d\Phi_B}{dt}$.
:::

::::teorema{#alternatore titolo="Forza elettromotrice dell'alternatore"}
Una bobina di $N$ spire piane, ciascuna di area $S$, ruota con velocità angolare costante $\omega$ in un campo magnetico uniforme $\vec{B}$. L'asse di rotazione è perpendicolare a $\vec{B}$, e all'istante $t = 0$ la normale $\hat{n}$ alle spire ha la direzione e il verso di $\vec{B}$. Allora la f.e.m. indotta nella bobina è
$$
\mathcal{E}(t) = N B S \omega \sin(\omega t) .
$$
Un dispositivo di questo tipo si chiama **alternatore**. La f.e.m. cambia segno due volte a ogni giro e ha valore massimo $\mathcal{E}_0 = N B S \omega$; la sua frequenza è uguale alla frequenza di rotazione della bobina. Per esempio, una bobina di $50$ spire di area $0{,}040\,\mathrm{m^2}$ che compie $50$ giri al secondo in un campo di $0{,}25\,\mathrm{T}$ ha $\omega = 2\pi \cdot 50\,\mathrm{rad/s} \approx 314\,\mathrm{rad/s}$, quindi
$$
\mathcal{E}_0 = 50 \cdot 0{,}25 \cdot 0{,}040 \cdot 314\,\mathrm{V} \approx 157\,\mathrm{V} .
$$

::grafico{assi=0 uguale=1 vettori="-3,1.7,3,1.7,B;-3,-1.7,3,-1.7;0,0,1.149,0.964,n̂" unicolore=1 linee="0.836,-0.996 -0.836,0.996" segmenti="0,0,1.7,0" curve="0.6*cos(t),0.6*sin(t),0,0.698" punti="0,0,pieno" etichette="0.72,0.22,θ;-0.6,-0.35,⊙" legenda=0 xmin=-3.2 xmax=3.4 ymin=-2.2 ymax=2.3 titolo="La bobina vista lungo l'asse di rotazione, perpendicolare al foglio ($\odot$): il segmento è una spira vista di taglio, e la normale $\hat{n}$ forma con $\vec{B}$ l'angolo $\theta = \omega t$"}

:::dimostrazione
La bobina ruota di moto circolare uniforme, quindi all'istante $t$ la normale $\hat{n}$ ha ruotato dell'angolo $\theta = \omega t$ a partire dalla direzione di $\vec{B}$.

Il campo è uniforme e ogni spira è piana, perciò il flusso attraverso una spira è $B S \cos(\omega t)$. Le $N$ spire sono attraversate dallo stesso flusso, quindi il flusso concatenato con la bobina è
$$
\Phi_B(t) = N B S \cos(\omega t) .
$$
Per la regola della funzione composta la derivata di $\cos(\omega t)$ è $-\omega \sin(\omega t)$. Per la **legge di Faraday-Neumann** si ottiene allora
$$
\mathcal{E}(t) = -\frac{d\Phi_B}{dt} = -N B S \cdot \big( -\omega \sin(\omega t) \big) = N B S \omega \sin(\omega t) .
$$
:::
::::

:::osservazione{#flusso-e-fem titolo="Flusso massimo e f.e.m. nulla"}
Il flusso è massimo quando il piano delle spire è perpendicolare a $\vec{B}$, cioè per $\omega t = 0$, e in quell'istante la f.e.m. è nulla. La f.e.m. è massima in modulo quando il piano delle spire è parallelo a $\vec{B}$, cioè quando il flusso è nullo e varia con la rapidità massima. La f.e.m. è infatti legata alla rapidità con cui varia il flusso.

::grafico{f="cos(0.314*x);sin(0.314*x)" xmin=0 xmax=42 ymin=-1.5 ymax=1.6 nomi="t," legenda="\dfrac{\Phi_B}{NBS};\dfrac{\mathcal{E}}{\mathcal{E}_0}" titolo="Flusso concatenato e f.e.m. di un alternatore a $50\,\mathrm{Hz}$, divisi per i valori massimi, con $t$ in millisecondi: il periodo è $20\,\mathrm{ms}$ e la f.e.m. si annulla dove il flusso è massimo in modulo"}

Nelle centrali la bobina è fatta ruotare da una turbina. Quando la bobina è collegata a un circuito, è percorsa da corrente, e per la legge di Lenz le forze magnetiche su di essa si oppongono alla rotazione. La turbina compie quindi un lavoro, che si trasforma in energia elettrica.
:::

:::definizione{#grandezze-alternate titolo="Tensione e corrente alternata"}
Una tensione si dice **alternata sinusoidale** se ha la forma
$$
v(t) = V_0 \sin(\omega t + \alpha) ,
$$
dove $V_0 > 0$ è l'**ampiezza**, o valore di picco, $\omega$ è la **pulsazione**, misurata in $\mathrm{rad/s}$, e $\alpha$ è la fase iniziale. La frequenza è $f = \dfrac{\omega}{2\pi}$ e il periodo è $T = \dfrac{1}{f}$. Allo stesso modo una corrente alternata ha la forma $i(t) = I_0 \sin(\omega t + \beta)$. La rete elettrica italiana ha frequenza $f = 50\,\mathrm{Hz}$, quindi periodo $T = \dfrac{1}{50}\,\mathrm{s} = 20\,\mathrm{ms}$ e pulsazione $\omega = 2\pi \cdot 50\,\mathrm{rad/s} \approx 314\,\mathrm{rad/s}$.
:::

## Valori efficaci

:::definizione{#valore-efficace titolo="Valore efficace"}
Il **valore efficace** $I_{\text{eff}}$ di una corrente alternata è l'intensità della corrente continua che, attraversando lo stesso resistore, dissipa la stessa potenza media.

Un resistore di resistenza $R$ percorso dalla corrente $i(t)$ dissipa in ogni istante la potenza $R\,i^2$, per l'effetto Joule. Perciò $R\,I_{\text{eff}}^2$ è uguale al valor medio di $R\,i^2$ su un periodo, e $I_{\text{eff}}$ è la radice quadrata del valor medio di $i^2$. Il valore efficace $V_{\text{eff}}$ di una tensione alternata si definisce allo stesso modo. Il valore efficace serve a calcolare la potenza media con le stesse formule della corrente continua, $P = R\,I_{\text{eff}}^2$.
:::

:::richiamo{titolo="Valore medio di una funzione"}
Sia $f$ continua nell'intervallo $[a, b]$. Il valore medio di $f$ in $[a, b]$ è il numero $\dfrac{1}{b - a} \displaystyle\int_a^b f(x)\,dx$.
:::

::::teorema{#efficace-sinusoidale titolo="Valore efficace di una grandezza sinusoidale"}
Per una corrente $i(t) = I_0 \sin(\omega t)$ e per una tensione $v(t) = V_0 \sin(\omega t)$ valgono
$$
I_{\text{eff}} = \frac{I_0}{\sqrt{2}} ,
\qquad
V_{\text{eff}} = \frac{V_0}{\sqrt{2}} .
$$
I valori dichiarati per la rete elettrica e per gli elettrodomestici sono valori efficaci, e gli strumenti per corrente alternata misurano valori efficaci. La tensione di rete di $230\,\mathrm{V}$ ha quindi ampiezza $V_0 = 230\sqrt{2}\,\mathrm{V} \approx 325\,\mathrm{V}$.

::grafico{f="2*sin(0.314*x);4*sin(0.314*x)^2" asintoti="y=2" xmin=0 xmax=42 ymin=-3 ymax=4.6 nomi="t," legenda="i(t);i^2(t)" titolo="Corrente di ampiezza $I_0 = 2\,\mathrm{A}$ e frequenza $50\,\mathrm{Hz}$, con $t$ in millisecondi, e il suo quadrato: il valor medio di $i^2$ è $2\,\mathrm{A^2}$, metà del massimo $4\,\mathrm{A^2}$, quindi $I_{\text{eff}} = \sqrt{2}\,\mathrm{A}$"}

:::dimostrazione
L'idea è calcolare il valor medio di $\sin^2(\omega t)$ su un periodo $T$, con $\omega T = 2\pi$. Per la formula di duplicazione $\cos(2x) = 1 - 2\sin^2 x$ si ha $\sin^2(\omega t) = \dfrac{1 - \cos(2\omega t)}{2}$, quindi
$$
\begin{aligned}
\frac{1}{T} \int_0^T \sin^2(\omega t)\,dt
&= \frac{1}{T} \int_0^T \frac{1}{2}\,dt - \frac{1}{2T} \int_0^T \cos(2\omega t)\,dt \\[6pt]
&= \frac{1}{2} - \frac{1}{2T} \left[ \frac{\sin(2\omega t)}{2\omega} \right]_0^T \\[6pt]
&= \frac{1}{2} - \frac{1}{2T} \cdot \frac{\sin(4\pi) - \sin 0}{2\omega} = \frac{1}{2} .
\end{aligned}
$$
La potenza istantanea dissipata in un resistore $R$ è $R\,i^2 = R\,I_0^2 \sin^2(\omega t)$, perciò la sua media su un periodo è $\dfrac{1}{2} R\,I_0^2$. Per la definizione di valore efficace questa media è uguale a $R\,I_{\text{eff}}^2$, quindi $I_{\text{eff}}^2 = \dfrac{I_0^2}{2}$ e $I_{\text{eff}} = \dfrac{I_0}{\sqrt{2}}$. Per la tensione il calcolo è lo stesso, con $V_0$ al posto di $I_0$.
:::
::::

:::esempio{titolo="Un bollitore collegato alla rete"}
Un bollitore da $2000\,\mathrm{W}$ funziona alla tensione efficace di $230\,\mathrm{V}$. La potenza media è $P = V_{\text{eff}}\,I_{\text{eff}}$, come in corrente continua, quindi
$$
I_{\text{eff}} = \frac{P}{V_{\text{eff}}} = \frac{2000}{230}\,\mathrm{A} \approx 8{,}70\,\mathrm{A} ,
\qquad
R = \frac{V_{\text{eff}}^2}{P} = \frac{230^2}{2000}\,\Omega \approx 26{,}5\,\Omega .
$$
L'ampiezza della corrente è $I_0 = \sqrt{2}\,I_{\text{eff}} \approx 12{,}3\,\mathrm{A}$, cioè la corrente oscilla tra $-12{,}3\,\mathrm{A}$ e $12{,}3\,\mathrm{A}$.
:::

## Circuiti puramente resistivo, induttivo e capacitivo

:::teorema{#circuito-resistivo titolo="Circuito puramente resistivo"}
Se ai capi di un resistore di resistenza $R$ c'è la tensione $v(t) = V_0 \sin(\omega t)$, la corrente è
$$
i(t) = \frac{V_0}{R} \sin(\omega t) .
$$
La corrente ha ampiezza $I_0 = \dfrac{V_0}{R}$ ed è **in fase** con la tensione, cioè le due grandezze si annullano e raggiungono il massimo negli stessi istanti. Il risultato segue dalla prima legge di Ohm, che vale in ogni istante. Dividendo le ampiezze per $\sqrt{2}$ si ottiene $V_{\text{eff}} = R\,I_{\text{eff}}$. Per esempio, un resistore da $46\,\Omega$ collegato alla rete è percorso dalla corrente efficace $I_{\text{eff}} = \dfrac{230}{46}\,\mathrm{A} = 5{,}0\,\mathrm{A}$ e dissipa la potenza media $P = 230 \cdot 5{,}0\,\mathrm{W} = 1{,}15\,\mathrm{kW}$.
:::

:::richiamo{titolo="F.e.m. autoindotta"}
In un induttore di induttanza $L$ percorso dalla corrente $i(t)$ si induce la f.e.m. $\mathcal{E} = -L\,\dfrac{di}{dt}$.
:::

:::teorema{#circuito-induttivo titolo="Circuito puramente induttivo"}
Un generatore di tensione alternata è collegato a un induttore ideale, cioè di resistenza trascurabile, di induttanza $L$. Se la corrente è $i(t) = I_0 \sin(\omega t)$, la tensione ai capi dell'induttore è
$$
v(t) = \omega L I_0 \cos(\omega t) = X_L I_0 \sin\left( \omega t + \frac{\pi}{2} \right) ,
\qquad
X_L = \omega L .
$$
La tensione è **in anticipo** di $\dfrac{\pi}{2}$ sulla corrente, cioè raggiunge il massimo un quarto di periodo prima; in modo equivalente, la corrente è in ritardo di $\dfrac{\pi}{2}$ sulla tensione. La grandezza $X_L$ si chiama **reattanza induttiva** e si misura in ohm, perché $1\,\mathrm{H} = 1\,\mathrm{V \cdot s/A}$. Le ampiezze e i valori efficaci sono legati da $V_0 = X_L I_0$ e $V_{\text{eff}} = X_L I_{\text{eff}}$, come nella legge di Ohm.

Il risultato segue dalla legge delle maglie. La resistenza del circuito è nulla, quindi la tensione del generatore e la f.e.m. autoindotta hanno somma nulla, cioè $v = L\,\dfrac{di}{dt}$; derivando $i(t)$ si ottiene la formula. Per esempio, un induttore da $0{,}30\,\mathrm{H}$ collegato alla rete ha $X_L = 314 \cdot 0{,}30\,\Omega \approx 94{,}2\,\Omega$ ed è percorso dalla corrente efficace $I_{\text{eff}} = \dfrac{230}{94{,}2}\,\mathrm{A} \approx 2{,}44\,\mathrm{A}$.

::grafico{f="1.5*cos(x);sin(x)" segmenti="6.283,0,6.283,1.5;7.854,0,7.854,1" xmin=0 xmax=13 ymin=-2 ymax=2.2 nomi="ωt," legenda="v(t);i(t)" titolo="Circuito puramente induttivo: la tensione raggiunge il massimo in $\omega t = 2\pi$, la corrente un quarto di periodo dopo, in $\omega t = \dfrac{5\pi}{2}$; la corrente è in ritardo di $\dfrac{\pi}{2}$"}

:::

:::teorema{#circuito-capacitivo titolo="Circuito puramente capacitivo"}
Se ai capi di un condensatore di capacità $C$ c'è la tensione $v(t) = V_0 \sin(\omega t)$, la corrente nel circuito è
$$
i(t) = \omega C V_0 \cos(\omega t) = \frac{V_0}{X_C} \sin\left( \omega t + \frac{\pi}{2} \right) ,
\qquad
X_C = \frac{1}{\omega C} .
$$
La corrente è **in anticipo** di $\dfrac{\pi}{2}$ sulla tensione. La grandezza $X_C$ si chiama **reattanza capacitiva**, si misura in ohm, e vale $V_{\text{eff}} = X_C I_{\text{eff}}$.

Il risultato segue dalla relazione tra carica e tensione del condensatore. In ogni istante la carica sulle armature è $q = C v = C V_0 \sin(\omega t)$, e la corrente nei fili è la sua derivata, $i = \dfrac{dq}{dt}$. Le cariche non attraversano il dielettrico; la corrente nei fili è dovuta al fatto che le armature si caricano e si scaricano due volte per periodo. Per esempio, un condensatore da $20\,\mu\mathrm{F}$ collegato alla rete ha $X_C = \dfrac{1}{314 \cdot 20 \cdot 10^{-6}}\,\Omega \approx 159\,\Omega$, e la corrente efficace è $I_{\text{eff}} = \dfrac{230}{159}\,\mathrm{A} \approx 1{,}45\,\mathrm{A}$.

::grafico{f="1.5*sin(x);cos(x)" segmenti="7.854,0,7.854,1.5;6.283,0,6.283,1" xmin=0 xmax=13 ymin=-2 ymax=2.2 nomi="ωt," legenda="v(t);i(t)" titolo="Circuito puramente capacitivo: la corrente raggiunge il massimo in $\omega t = 2\pi$, la tensione un quarto di periodo dopo; la corrente è in anticipo di $\dfrac{\pi}{2}$"}

:::

:::osservazione{#reattanze-frequenza titolo="Reattanze e frequenza"}
La reattanza induttiva $X_L = 2\pi f L$ è proporzionale alla frequenza, mentre la reattanza capacitiva $X_C = \dfrac{1}{2\pi f C}$ è inversamente proporzionale alla frequenza. A $5\,\mathrm{kHz}$, cento volte la frequenza di rete, l'induttore da $0{,}30\,\mathrm{H}$ ha $X_L \approx 9{,}42\,\mathrm{k\Omega}$ e il condensatore da $20\,\mu\mathrm{F}$ ha $X_C \approx 1{,}59\,\Omega$. In corrente continua, cioè per $f$ che tende a $0$, la reattanza capacitiva tende a infinito e il condensatore interrompe il circuito, mentre la reattanza induttiva tende a $0$ e l'induttore ideale si comporta come un filo.
:::

## Fasori

:::definizione{#fasori titolo="Fasore"}
A una grandezza sinusoidale $a(t) = A_0 \sin(\omega t + \alpha)$ si associa un vettore, detto **fasore**, di lunghezza $A_0$, che forma con l'asse $x$ l'angolo $\omega t + \alpha$. Il fasore ruota in verso antiorario con velocità angolare $\omega$, e la sua componente lungo l'asse $y$ è $A_0 \sin(\omega t + \alpha) = a(t)$, cioè il valore istantaneo della grandezza.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" uguale=1 vettori="0,0,1.638,1.147,A₀" segmenti="1.638,1.147,0,1.147;0,0,1.9,0" punti="0,1.147,pieno" etichette="0.55,0.12,ωt + α;-0.75,1.25,a(t)" legenda=0 xmin=-3 xmax=3 ymin=-3 ymax=3 titolo="Il fasore di $a(t) = A_0 \sin(\omega t + \alpha)$ ruota in verso antiorario; la sua componente sull'asse $y$ è il valore istantaneo $a(t)$"}

I fasori servono a confrontare e a sommare grandezze sinusoidali con la stessa pulsazione. Due fasori con la stessa $\omega$ ruotano insieme, quindi l'angolo tra di essi resta costante ed è lo **sfasamento** tra le due grandezze. Inoltre la componente $y$ di una somma di vettori è la somma delle componenti, perciò il fasore della somma di due grandezze è la somma vettoriale dei loro fasori. Per esempio, $5 \sin(\omega t) + 12 \sin\left( \omega t + \dfrac{\pi}{2} \right)$ ha per fasore la somma di due vettori perpendicolari di lunghezza $5$ e $12$, quindi è una sinusoide di ampiezza $\sqrt{5^2 + 12^2} = 13$ e fase iniziale $\arctan \dfrac{12}{5} \approx 67^\circ$.
:::

:::osservazione{#fasori-componenti titolo="Fasori di tensione e corrente nei tre circuiti"}
I fasori si disegnano all'istante $t = 0$. Spesso le loro lunghezze sono i valori efficaci al posto delle ampiezze, perché le due lunghezze differiscono per il fattore $\sqrt{2}$ e gli angoli restano gli stessi. Dai teoremi sui circuiti con un solo componente si ottiene la posizione del fasore della tensione rispetto a quello della corrente.

- Nel resistore i due fasori hanno la stessa direzione e lo stesso verso.
- Nell'induttore il fasore della tensione è ruotato di $90^\circ$ in verso antiorario rispetto a quello della corrente.
- Nel condensatore il fasore della tensione è ruotato di $90^\circ$ in verso orario rispetto a quello della corrente.
:::

## Circuito RLC in serie

:::teorema{#impedenza-rlc titolo="Impedenza del circuito RLC in serie"}
Un generatore di tensione alternata alimenta un resistore $R$, un induttore $L$ e un condensatore $C$ collegati in serie. A regime la corrente è $i(t) = I_0 \sin(\omega t)$ e la tensione del generatore è $v(t) = V_0 \sin(\omega t + \varphi)$, con
$$
V_0 = Z\,I_0 ,
\qquad
Z = \sqrt{R^2 + (X_L - X_C)^2} ,
\qquad
\tan\varphi = \frac{X_L - X_C}{R} ,
$$
dove $X_L = \omega L$, $X_C = \dfrac{1}{\omega C}$ e $\varphi$ è compreso tra $-\dfrac{\pi}{2}$ e $\dfrac{\pi}{2}$. La grandezza $Z$ si chiama **impedenza** del circuito e si misura in ohm; lo stesso rapporto vale tra i valori efficaci, $V_{\text{eff}} = Z\,I_{\text{eff}}$. L'angolo $\varphi$ è lo **sfasamento** tra tensione e corrente. Il teorema vale anche per un circuito $RL$, con $X_C = 0$, e per un circuito $RC$, con $X_L = 0$.

Il risultato si ottiene con i fasori. I tre componenti sono in serie, quindi sono percorsi dalla stessa corrente, e il fasore della corrente si disegna lungo l'asse $x$. Il fasore della tensione sul resistore, di lunghezza $R\,I_0$, ha la stessa direzione; quelli delle tensioni sull'induttore e sul condensatore, di lunghezze $X_L I_0$ e $X_C I_0$, sono perpendicolari alla corrente e hanno versi opposti. La tensione del generatore è la somma delle tre tensioni, quindi il suo fasore è l'ipotenusa di un triangolo rettangolo di cateti $R\,I_0$ e $(X_L - X_C)\,I_0$. Per il teorema di Pitagora $V_0^2 = R^2 I_0^2 + (X_L - X_C)^2 I_0^2 = Z^2 I_0^2$, e la tangente dell'angolo tra ipotenusa e asse $x$ è $\dfrac{X_L - X_C}{R}$.
:::

:::esempio{titolo="Un circuito RLC collegato alla rete"}
Un resistore da $60\,\Omega$, un induttore da $0{,}40\,\mathrm{H}$ e un condensatore da $50\,\mu\mathrm{F}$ in serie sono collegati alla rete, con $V_{\text{eff}} = 230\,\mathrm{V}$ e $f = 50\,\mathrm{Hz}$. Le reattanze sono
$$
X_L = 314 \cdot 0{,}40\,\Omega \approx 126\,\Omega ,
\qquad
X_C = \frac{1}{314 \cdot 50 \cdot 10^{-6}}\,\Omega \approx 63{,}7\,\Omega ,
$$
quindi $X_L - X_C \approx 62{,}0\,\Omega$ e
$$
Z = \sqrt{60^2 + 62{,}0^2}\,\Omega \approx 86{,}3\,\Omega ,
\qquad
I_{\text{eff}} = \frac{230}{86{,}3}\,\mathrm{A} \approx 2{,}67\,\mathrm{A} ,
\qquad
\varphi = \arctan \frac{62{,}0}{60} \approx 46^\circ .
$$
Le tensioni efficaci sui componenti sono $V_R = R\,I_{\text{eff}} \approx 160\,\mathrm{V}$, $V_L = X_L I_{\text{eff}} \approx 335\,\mathrm{V}$ e $V_C = X_C I_{\text{eff}} \approx 170\,\mathrm{V}$.

::grafico{assi=0 uguale=1 vettori="0,0,1.6,0,VR;0,0,0,3.35,VL;0,0,0,-1.7,VC;0,0,1.6,1.65,V" segmenti="1.6,0,1.6,1.65;0,1.65,1.6,1.65" etichette="0.42,0.18,φ" xmin=-1.6 xmax=3.6 ymin=-2.2 ymax=3.8 titolo="Fasori delle tensioni efficaci, in centinaia di volt: $V_R$ ha la direzione della corrente, $V_L$ e $V_C$ sono perpendicolari a essa e opposti, e la loro somma $V$ forma con la corrente l'angolo $\varphi \approx 46^\circ$"}

:::

:::attenzione{#tensioni-sfasate}
Le tensioni efficaci su componenti in serie non si sommano come numeri, perché sono sfasate tra loro. Nell'esempio precedente $V_R + V_L + V_C \approx 665\,\mathrm{V}$, mentre il generatore fornisce $230\,\mathrm{V}$. La relazione corretta è quella tra i fasori, $V_{\text{eff}} = \sqrt{V_R^2 + (V_L - V_C)^2} = \sqrt{160^2 + 165^2}\,\mathrm{V} \approx 230\,\mathrm{V}$. La tensione sull'induttore, $335\,\mathrm{V}$, è maggiore di quella del generatore.
:::

:::osservazione{#carattere-circuito titolo="Circuito induttivo e circuito capacitivo"}
Il segno dello sfasamento dipende da quale reattanza è maggiore.

- Se $X_L > X_C$, allora $\varphi > 0$ e la corrente è in ritardo sulla tensione; il circuito si dice **induttivo**.
- Se $X_L < X_C$, allora $\varphi < 0$ e la corrente è in anticipo sulla tensione; il circuito si dice **capacitivo**.
- Se $X_L = X_C$, allora $\varphi = 0$ e $Z = R$, quindi corrente e tensione sono in fase come in un resistore.

Il circuito dell'esempio, con $X_L \approx 126\,\Omega$ e $X_C \approx 63{,}7\,\Omega$, è induttivo.
:::

## Risonanza

:::teorema{#risonanza titolo="Risonanza del circuito RLC in serie"}
In un circuito $RLC$ in serie alimentato con tensione efficace fissata e frequenza variabile, la corrente efficace è massima quando $X_L = X_C$, cioè alla pulsazione e alla frequenza
$$
\omega_0 = \frac{1}{\sqrt{LC}} ,
\qquad
f_0 = \frac{1}{2\pi\sqrt{LC}} .
$$
Questa condizione si chiama **risonanza**. Alla risonanza $Z = R$, $\varphi = 0$ e $I_{\text{eff}} = \dfrac{V_{\text{eff}}}{R}$. Il risultato segue dalla formula dell'impedenza. Il termine $R^2$ non dipende dalla frequenza e il termine $(X_L - X_C)^2$ è positivo o nullo, quindi $Z$ è minima, e la corrente è massima, quando $X_L - X_C = 0$. L'uguaglianza $\omega L = \dfrac{1}{\omega C}$ equivale a $\omega^2 = \dfrac{1}{LC}$.

La risonanza serve a selezionare una frequenza. Un ricevitore radio sceglie una stazione regolando la capacità di un circuito finché $f_0$ è uguale alla frequenza della stazione; con $L = 0{,}20\,\mathrm{mH}$, una stazione a $900\,\mathrm{kHz}$ richiede
$$
C = \frac{1}{4\pi^2 f_0^2 L} = \frac{1}{4\pi^2 \cdot \left( 9{,}0 \cdot 10^5 \right)^2 \cdot 2{,}0 \cdot 10^{-4}}\,\mathrm{F} \approx 1{,}6 \cdot 10^{-10}\,\mathrm{F} .
$$
:::

:::esempio{titolo="Curva di risonanza"}
Un circuito con $L = 0{,}050\,\mathrm{H}$ e $C = 20\,\mu\mathrm{F}$ è alimentato con $V_{\text{eff}} = 20\,\mathrm{V}$. La pulsazione di risonanza è
$$
\omega_0 = \frac{1}{\sqrt{0{,}050 \cdot 20 \cdot 10^{-6}}}\,\mathrm{rad/s} = \frac{1}{\sqrt{1{,}0 \cdot 10^{-6}}}\,\mathrm{rad/s} = 1{,}0 \cdot 10^3\,\mathrm{rad/s} ,
$$
cioè $f_0 \approx 159\,\mathrm{Hz}$. Con $R = 10\,\Omega$ la corrente efficace alla risonanza è $\dfrac{20}{10}\,\mathrm{A} = 2{,}0\,\mathrm{A}$; con $R = 20\,\Omega$ è $1{,}0\,\mathrm{A}$. Lontano dalla risonanza la reattanza $|X_L - X_C|$ è molto maggiore di $R$, e le due correnti sono quasi uguali.

::grafico{f="20/sqrt(100+(50*x-50/x)^2)+0*sqrt(x);20/sqrt(400+(50*x-50/x)^2)+0*sqrt(x)" asintoti="x=1" xmin=0 xmax=3.2 ymin=-0.5 ymax=2.6 nomi="ω,I" legenda="R = 10\,\Omega;R = 20\,\Omega" titolo="Corrente efficace in ampere in funzione della pulsazione, con $\omega$ in $10^3\,\mathrm{rad/s}$, per $L = 0{,}050\,\mathrm{H}$, $C = 20\,\mu\mathrm{F}$ e $V_{\text{eff}} = 20\,\mathrm{V}$: il massimo è in $\omega_0 = 1{,}0 \cdot 10^3\,\mathrm{rad/s}$, e con la resistenza minore il picco è più alto e più stretto"}

:::

:::osservazione{#tensioni-risonanza titolo="Tensioni sull'induttore e sul condensatore alla risonanza"}
Alla risonanza le tensioni sull'induttore e sul condensatore hanno lo stesso valore efficace $X_L I_{\text{eff}} = X_C I_{\text{eff}}$ e sono in opposizione di fase, perciò la loro somma è nulla in ogni istante e la tensione del generatore è tutta ai capi del resistore. Ciascuna delle due tensioni può essere molto maggiore di quella del generatore. Nel circuito della curva di risonanza, con $R = 10\,\Omega$, si ha $X_L = 1{,}0 \cdot 10^3 \cdot 0{,}050\,\Omega = 50\,\Omega$ e quindi $V_L = V_C = 50 \cdot 2{,}0\,\mathrm{V} = 100\,\mathrm{V}$, cinque volte la tensione del generatore.
:::

## Potenza media e fattore di potenza

:::teorema{#potenza-media titolo="Potenza media in corrente alternata"}
Un circuito con tensione efficace $V_{\text{eff}}$, corrente efficace $I_{\text{eff}}$ e sfasamento $\varphi$ tra tensione e corrente assorbe la potenza media
$$
P = V_{\text{eff}}\, I_{\text{eff}} \cos\varphi .
$$
La formula si ottiene calcolando il valor medio su un periodo della potenza istantanea $v(t)\,i(t)$, con lo stesso procedimento usato per il valor medio di $\sin^2(\omega t)$. Per un resistore $\varphi = 0$ e $P = V_{\text{eff}} I_{\text{eff}}$. Per un induttore o un condensatore ideali $\varphi = \pm\dfrac{\pi}{2}$, quindi $\cos\varphi = 0$ e $P = 0$, perché l'energia immagazzinata in un quarto di periodo viene restituita al generatore nel quarto successivo. Per esempio, un motore alimentato a $230\,\mathrm{V}$ con corrente efficace $4{,}0\,\mathrm{A}$ e sfasamento $\varphi = 30^\circ$ assorbe $P = 230 \cdot 4{,}0 \cdot \cos 30^\circ\,\mathrm{W} \approx 797\,\mathrm{W}$.
:::

:::definizione{#fattore-di-potenza titolo="Fattore di potenza"}
Il numero $\cos\varphi$ si chiama **fattore di potenza** del circuito ed è compreso tra $0$ e $1$. Nel circuito $RLC$ in serie il triangolo dei fasori dà $\cos\varphi = \dfrac{R}{Z}$, e poiché $V_{\text{eff}} = Z\,I_{\text{eff}}$ si ottiene
$$
P = Z\,I_{\text{eff}} \cdot I_{\text{eff}} \cdot \frac{R}{Z} = R\,I_{\text{eff}}^2 .
$$
Quindi tutta la potenza media è dissipata nel resistore. Nel circuito $RLC$ collegato alla rete si ha $\cos\varphi = \dfrac{60}{86{,}3} \approx 0{,}70$ e $P = 60 \cdot 2{,}67^2\,\mathrm{W} \approx 4{,}3 \cdot 10^2\,\mathrm{W}$.

Il fattore di potenza interessa anche chi distribuisce l'energia. Un apparecchio che assorbe la potenza $P$ alla tensione $V_{\text{eff}}$ richiede la corrente $I_{\text{eff}} = \dfrac{P}{V_{\text{eff}} \cos\varphi}$, che è tanto maggiore quanto minore è $\cos\varphi$. Una corrente maggiore dissipa più energia nei fili della linea, perciò i gestori della rete chiedono agli utenti industriali un fattore di potenza vicino a $1$.
:::

## Trasformatore

:::teorema{#trasformatore titolo="Trasformatore ideale"}
Un **trasformatore** è formato da due bobine avvolte sullo stesso nucleo di ferro. Il **primario**, con $N_1$ spire, è collegato al generatore, e il **secondario**, con $N_2$ spire, è collegato all'utilizzatore. Il trasformatore si dice ideale se tutto il flusso magnetico attraversa entrambe le bobine, se le bobine hanno resistenza trascurabile e se nel nucleo non si perde energia. In un trasformatore ideale le tensioni e le correnti efficaci soddisfano
$$
\frac{V_2}{V_1} = \frac{N_2}{N_1} ,
\qquad
\frac{I_2}{I_1} = \frac{N_1}{N_2} .
$$
La prima relazione segue dalla legge di Faraday-Neumann. Ogni spira dei due avvolgimenti è attraversata dallo stesso flusso $\Phi_B(t)$, quindi le f.e.m. indotte sono $-N_1 \dfrac{d\Phi_B}{dt}$ e $-N_2 \dfrac{d\Phi_B}{dt}$, e il loro rapporto è $\dfrac{N_2}{N_1}$. La seconda relazione segue dalla conservazione dell'energia, perché la potenza $V_1 I_1$ fornita al primario è uguale alla potenza $V_2 I_2$ ceduta all'utilizzatore.

::grafico{assi=0 uguale=1 poligoni="0,0 0.8,0 0.8,4 0,4;5.2,0 6,0 6,4 5.2,4;0.8,3.2 5.2,3.2 5.2,4 0.8,4;0.8,0 5.2,0 5.2,0.8 0.8,0.8" linee="-1.2,1 -0.3,1 1.1,1.33 -0.3,1.67 1.1,2 -0.3,2.33 1.1,2.67 -0.3,3 -1.2,3;7.2,1.4 6.3,1.4 4.9,1.7 6.3,2 4.9,2.3 6.3,2.6 7.2,2.6" punti="-1.2,1,vuoto;-1.2,3,vuoto;7.2,1.4,vuoto;7.2,2.6,vuoto" vettori="2.5,3.6,3.5,3.6,Φ" etichette="-1.9,1.9,V₁;7.4,1.9,V₂;0.1,4.4,N₁;5.3,4.4,N₂" legenda=0 xmin=-2.2 xmax=8 ymin=-0.4 ymax=4.9 titolo="Trasformatore: il primario con $N_1$ spire e il secondario con $N_2$ spire sono avvolti sullo stesso nucleo di ferro, che porta il flusso magnetico $\Phi_B$ da una bobina all'altra"}

Un trasformatore con $N_2 > N_1$ eleva la tensione e riduce la corrente; con $N_2 < N_1$ abbassa la tensione e aumenta la corrente. Per esempio, un alimentatore che porta la tensione da $230\,\mathrm{V}$ a $12\,\mathrm{V}$, con $N_1 = 1150$, ha $N_2 = 1150 \cdot \dfrac{12}{230} = 60$ spire. Se l'utilizzatore assorbe $2{,}0\,\mathrm{A}$, il primario è percorso da $I_1 = 2{,}0 \cdot \dfrac{60}{1150}\,\mathrm{A} \approx 0{,}10\,\mathrm{A}$.
:::

:::attenzione
Un trasformatore alimentato con una tensione continua non produce tensione al secondario. A regime la corrente nel primario è costante, quindi il flusso nel nucleo è costante e non induce alcuna f.e.m. nel secondario. Una pila da $9\,\mathrm{V}$ collegata al primario di un trasformatore con $N_2 = 10\,N_1$ dà al secondario una tensione nulla, e non $90\,\mathrm{V}$.
:::

:::osservazione{#trasporto-energia titolo="Trasporto dell'energia elettrica ad alta tensione"}
Una centrale invia la potenza $P$ lungo una linea di resistenza $R_\ell$, alla tensione efficace $V$ e con fattore di potenza $1$. Nella linea passa la corrente $I = \dfrac{P}{V}$, e per l'effetto Joule la potenza dissipata nei fili è
$$
P_{\text{persa}} = R_\ell\, I^2 = \frac{R_\ell\, P^2}{V^2} .
$$
A parità di potenza trasmessa, la potenza persa è inversamente proporzionale al quadrato della tensione. Con $P = 2{,}0\,\mathrm{MW}$ e $R_\ell = 4{,}0\,\Omega$, a $20\,\mathrm{kV}$ la corrente è $100\,\mathrm{A}$ e si perdono $40\,\mathrm{kW}$; a $200\,\mathrm{kV}$ la corrente è $10\,\mathrm{A}$ e si perdono $400\,\mathrm{W}$. Per questo motivo l'energia elettrica si trasporta ad alta tensione. I trasformatori elevano la tensione all'uscita della centrale e la abbassano vicino agli utilizzatori, e la possibilità di farlo è uno dei motivi per cui la rete elettrica funziona in corrente alternata.
:::

## Circuito LC e oscillazioni elettriche

:::richiamo{titolo="Teorema di esistenza e unicità per le equazioni del secondo ordine"}
Siano $a$, $b$, $c$ numeri reali con $a \neq 0$, e siano $y_0$, $y_1$ numeri reali. Allora l'equazione $a\,y'' + b\,y' + c\,y = 0$ ha una e una sola soluzione che soddisfa le condizioni $y(0) = y_0$ e $y'(0) = y_1$.
:::

::::teorema{#circuito-lc titolo="Oscillazioni del circuito LC"}
Un condensatore di capacità $C$, con carica iniziale $Q_0$, è collegato all'istante $t = 0$ a un induttore ideale di induttanza $L$, in un circuito di resistenza trascurabile. Sia $q(t)$ la carica dell'armatura inizialmente positiva e sia $i = \dfrac{dq}{dt}$ la corrente. Allora
$$
q(t) = Q_0 \cos(\omega_0 t) ,
\qquad
i(t) = -\omega_0 Q_0 \sin(\omega_0 t) ,
\qquad
\omega_0 = \frac{1}{\sqrt{LC}} .
$$
La carica e la corrente oscillano con la **pulsazione propria** $\omega_0$, uguale alla pulsazione di risonanza del circuito $RLC$, con periodo $T = 2\pi\sqrt{LC}$ e frequenza $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$. La corrente ha ampiezza $I_0 = \omega_0 Q_0$ ed è sfasata di un quarto di periodo rispetto alla carica. Per esempio, con $L = 0{,}25\,\mathrm{H}$ e $C = 4{,}0\,\mu\mathrm{F}$ si ha $\omega_0 = \dfrac{1}{\sqrt{1{,}0 \cdot 10^{-6}}}\,\mathrm{rad/s} = 1{,}0 \cdot 10^3\,\mathrm{rad/s}$, $f_0 \approx 159\,\mathrm{Hz}$ e $T \approx 6{,}28\,\mathrm{ms}$. Se il condensatore è stato caricato a $5{,}0\,\mathrm{V}$, si ha $Q_0 = C V_0 = 20\,\mu\mathrm{C}$ e $I_0 = 1{,}0 \cdot 10^3 \cdot 20 \cdot 10^{-6}\,\mathrm{A} = 20\,\mathrm{mA}$.

::grafico{f="20*cos(x);-20*sin(x)" xmin=0 xmax=13 ymin=-24 ymax=30 nomi="t," legenda="q(t);i(t)" titolo="Carica in $\mu\mathrm{C}$ e corrente in $\mathrm{mA}$ nel circuito LC con $\omega_0 = 1{,}0 \cdot 10^3\,\mathrm{rad/s}$ e $Q_0 = 20\,\mu\mathrm{C}$, con $t$ in millisecondi: la corrente è massima in modulo quando il condensatore è scarico"}

:::dimostrazione
Nel circuito non ci sono generatori né resistenze, perciò per la legge delle maglie la tensione $\dfrac{q}{C}$ ai capi del condensatore e la tensione $L\,\dfrac{di}{dt}$ ai capi dell'induttore hanno somma nulla. Poiché $i = \dfrac{dq}{dt}$, si ha $\dfrac{di}{dt} = q''(t)$, e la carica soddisfa l'equazione differenziale
$$
L\,q''(t) + \frac{q(t)}{C} = 0 .
$$
Si verifica per sostituzione che $q(t) = Q_0 \cos(\omega_0 t)$ è una soluzione. Le derivate sono $q'(t) = -\omega_0 Q_0 \sin(\omega_0 t)$ e $q''(t) = -\omega_0^2 Q_0 \cos(\omega_0 t)$, quindi
$$
L\,q'' + \frac{q}{C} = \left( -L\,\omega_0^2 + \frac{1}{C} \right) Q_0 \cos(\omega_0 t) = \left( -\frac{L}{LC} + \frac{1}{C} \right) Q_0 \cos(\omega_0 t) = 0 .
$$
Inoltre $q(0) = Q_0$ e $i(0) = q'(0) = 0$, quindi la soluzione soddisfa le condizioni iniziali, perché all'istante iniziale il condensatore ha carica $Q_0$ e la corrente è nulla. Per il teorema di esistenza e unicità visto nell'argomento sulle equazioni differenziali di Matematica 5° anno, questa è l'unica soluzione. La corrente è la derivata $q'(t)$.
:::
::::

:::osservazione{#energia-lc titolo="Energia nel circuito LC"}
Nel circuito LC l'energia passa dal campo elettrico del condensatore al campo magnetico dell'induttore e viceversa, e la loro somma resta costante. Infatti, con le leggi del teorema e con $L\,\omega_0^2 = \dfrac{1}{C}$,
$$
\frac{q^2}{2C} + \frac{1}{2} L i^2 = \frac{Q_0^2}{2C} \cos^2(\omega_0 t) + \frac{1}{2} L\,\omega_0^2 Q_0^2 \sin^2(\omega_0 t) = \frac{Q_0^2}{2C} \left( \cos^2(\omega_0 t) + \sin^2(\omega_0 t) \right) = \frac{Q_0^2}{2C} .
$$
Quando il condensatore è scarico tutta l'energia è nell'induttore, quindi $\dfrac{1}{2} L I_0^2 = \dfrac{Q_0^2}{2C}$. Nel circuito con $L = 0{,}25\,\mathrm{H}$ e $C = 4{,}0\,\mu\mathrm{F}$ caricato a $5{,}0\,\mathrm{V}$ l'energia è $\dfrac{1}{2} C V_0^2 = 50\,\mu\mathrm{J}$, e infatti $\dfrac{1}{2} \cdot 0{,}25 \cdot \left( 0{,}020 \right)^2\,\mathrm{J} = 50\,\mu\mathrm{J}$. In un circuito reale la resistenza dei fili dissipa energia per effetto Joule, e le oscillazioni si smorzano.
:::

:::osservazione{#analogia-massa-molla titolo="Analogia con la massa e la molla"}
L'equazione $L\,q'' + \dfrac{q}{C} = 0$ ha la stessa forma dell'equazione $m\,x'' + k\,x = 0$ di una massa $m$ attaccata a una molla di costante elastica $k$, quindi le due situazioni si corrispondono termine a termine.

| Massa e molla | Circuito LC |
| --- | --- |
| posizione $x$ | carica $q$ |
| velocità $v = x'$ | corrente $i = q'$ |
| massa $m$ | induttanza $L$ |
| costante elastica $k$ | inverso della capacità $\dfrac{1}{C}$ |
| energia cinetica $\dfrac{1}{2} m v^2$ | energia magnetica $\dfrac{1}{2} L i^2$ |
| energia elastica $\dfrac{1}{2} k x^2$ | energia elettrica $\dfrac{q^2}{2C}$ |

Per esempio, la pulsazione $\sqrt{\dfrac{k}{m}}$ della molla corrisponde a $\sqrt{\dfrac{1}{LC}}$. L'induttanza ha il ruolo della massa, perché si oppone alle variazioni della corrente come la massa si oppone alle variazioni della velocità.
:::
