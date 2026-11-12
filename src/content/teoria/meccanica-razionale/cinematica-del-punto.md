---
titolo: Cinematica del punto e moti relativi
sommario: Come si descrivono traiettoria, velocità e accelerazione di un punto materiale, come l'accelerazione si scompone lungo la tangente e la normale alla traiettoria e come velocità e accelerazione cambiano passando da un riferimento fisso a uno in moto.
---

## Moto, traiettoria e legge oraria

:::definizione{#moto-di-un-punto titolo="Moto di un punto, traiettoria ed equazioni del moto"}
Si fissa il riferimento $(O; x, y, z)$, con i versori $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ costanti nel tempo. Il **moto** di un punto materiale $P$ in un intervallo di tempo $I$ è l'applicazione che a ogni istante $t \in I$ associa la posizione di $P$, scritta come differenza fra il punto e l'origine:
$$
P - O = x(t)\,\hat{\imath} + y(t)\,\hat{\jmath} + z(t)\,\hat{k} ,
$$
con $x$, $y$, $z$ derivabili due volte in $I$. Le tre funzioni sono le **equazioni del moto** e l'insieme delle posizioni occupate da $P$ è la **traiettoria**.

Le equazioni del moto contengono due informazioni diverse: la traiettoria dice per quali punti dello spazio passa $P$, la legge con cui le coordinate dipendono dal tempo dice in quale istante $P$ passa per ciascuno di essi. Un punto che descrive la stessa circonferenza a velocità costante e un punto che la descrive rallentando hanno la medesima traiettoria e due moti distinti.
:::

:::richiamo{titolo="Lunghezza di una curva regolare"}
Sia $\gamma : [a, b] \to \mathbb{R}^3$ di classe $C^1$ con $\gamma'(\tau) \neq \vec{0}$ per ogni $\tau \in [a, b]$. Allora la lunghezza di $\gamma$ vale
$$
L = \int_a^b \big| \gamma'(\tau) \big|\,d\tau .
$$
Si rimanda all'argomento sulle curve e sugli integrali di linea di Analisi 2.
:::

:::definizione{#ascissa-curvilinea titolo="Ascissa curvilinea e legge oraria"}
Si supponga che la traiettoria sia una curva regolare e si scelga su di essa un verso di percorrenza e un punto $P_0$ come origine degli archi. L'**ascissa curvilinea** $s$ di un punto della traiettoria è la lunghezza dell'arco che va da $P_0$ a quel punto, presa con il segno positivo nel verso scelto e negativo nel verso opposto. Durante il moto l'ascissa curvilinea diventa una funzione del tempo $s(t)$, detta **legge oraria**, e la posizione si ottiene componendo la curva con la legge oraria.

La derivata $\dot{s}$ è la **velocità scalare** del punto, ed è positiva quando $P$ avanza nel verso scelto sulla traiettoria e negativa quando torna indietro. Per un punto che percorre una circonferenza di raggio $R$, con $\vartheta$ angolo al centro misurato in verso antiorario, l'arco vale $s = R\,\vartheta$, quindi $\dot{s} = R\,\dot{\vartheta}$.
:::

:::definizione{#velocita-e-accelerazione titolo="Velocità e accelerazione"}
La **velocità** e l'**accelerazione** di $P$ nel riferimento $(O; x, y, z)$ sono le derivate prima e seconda del vettore posizione:
$$
\vec{v}_P = \frac{d}{dt}(P - O) = \dot{x}\,\hat{\imath} + \dot{y}\,\hat{\jmath} + \dot{z}\,\hat{k} ,
\qquad
\vec{a}_P = \frac{d\vec{v}_P}{dt} = \ddot{x}\,\hat{\imath} + \ddot{y}\,\hat{\jmath} + \ddot{z}\,\hat{k} .
$$
I versori del riferimento sono costanti, perciò la derivata del vettore posizione si calcola derivando le singole componenti. La velocità si misura in $\mathrm{m/s}$ e l'accelerazione in $\mathrm{m/s^2}$.

Le due grandezze servono a tutta la meccanica che segue: la quantità di moto e l'energia cinetica si scrivono con $\vec{v}_P$, le equazioni di Newton e le equazioni cardinali con $\vec{a}_P$. Per il moto piano con $x = \ell\,\omega t$ e $y = \dfrac{1}{2}\,\ell\,\omega^2 t^2$ si ottiene $\vec{v}_P = \ell\omega\,\hat{\imath} + \ell\omega^2 t\,\hat{\jmath}$ e $\vec{a}_P = \ell\omega^2\,\hat{\jmath}$, quindi l'accelerazione è costante; eliminando il tempo fra le due equazioni la traiettoria risulta la parabola $y = \dfrac{x^2}{2\ell}$.

::grafico{curve="0.7*t,0.9+sin(0.9*t),0,4.5" vettori="0.7,1.68,1.56,2.37,vₚ;0,0,0.7,1.68,P − O" punti="0.7,1.68,pieno,P;2.24,1.16,pieno,Q" etichette="1.9,1.3,s" uguale=1 xmin=-0.4 xmax=3.6 ymin=-0.4 ymax=2.9 legenda=0 titolo="Il vettore $P - O$ individua la posizione, la velocità $\vec{v}_P$ è tangente alla traiettoria e $s$ è l'arco percorso da $P$ a $Q$"}
:::

## Terna intrinseca e componenti dell'accelerazione

Le componenti cartesiane della velocità e dell'accelerazione dipendono dal riferimento scelto. Lungo la traiettoria esiste invece una terna di versori che dipende solo dalla curva, e rispetto a essa l'accelerazione si scompone in due termini di significato diverso.

:::definizione{#terna-intrinseca titolo="Versori tangente, normale e binormale"}
Sia la traiettoria una curva regolare parametrizzata con l'ascissa curvilinea $s$. Il **versore tangente** è
$$
\hat{t} = \frac{d}{ds}(P - O) ,
$$
e ha modulo uno perché la derivata rispetto all'ascissa curvilinea di una curva parametrizzata con l'arco è un versore. Poiché $\hat{t} \cdot \hat{t} = 1$, derivando rispetto a $s$ si ottiene $\hat{t} \cdot \dfrac{d\hat{t}}{ds} = 0$, quindi $\dfrac{d\hat{t}}{ds}$ è ortogonale a $\hat{t}$. Nei punti in cui questo vettore non è nullo si pone
$$
\frac{d\hat{t}}{ds} = \frac{1}{\rho}\,\hat{n} ,
$$
dove $\hat{n}$ è il **versore normale**, di modulo uno, e $\rho > 0$ è il **raggio di curvatura** della traiettoria nel punto considerato; il suo reciproco $\dfrac{1}{\rho}$ è la **curvatura**. Il **versore binormale** è $\hat{b} = \hat{t} \wedge \hat{n}$, e la terna $(\hat{t}, \hat{n}, \hat{b})$ è la **terna intrinseca**.

Il raggio di curvatura misura quanto la traiettoria si discosta dalla retta. Il versore normale punta verso la parte concava della curva, e la circonferenza di centro $C = P + \rho\,\hat{n}$ e raggio $\rho$, detta circonferenza osculatrice, è la circonferenza che approssima meglio la traiettoria vicino a $P$. Per una retta $\hat{t}$ è costante, perciò $\dfrac{d\hat{t}}{ds} = \vec{0}$ e la curvatura è nulla; per una circonferenza di raggio $R$ il raggio di curvatura vale $R$ in ogni punto.

::grafico{curve="t,0.8*t*t,-1.5,1.5;-0.32+1.31*cos(t),1.23+1.31*sin(t),0,6.29" vettori="0.5,0.2,1.2,0.76;0.5,0.2,0.16,0.63" segmenti="0.5,0.2,-0.32,1.23" punti="0.5,0.2,pieno,P;-0.32,1.23,pieno,C" etichette="1.16,0.5,t;0.05,0.52,n;-0.62,0.92,ρ" uguale=1 xmin=-1.9 xmax=1.9 ymin=-0.35 ymax=2.75 legenda=0 titolo="Versore tangente $\hat{t}$, versore normale $\hat{n}$ e circonferenza osculatrice di centro $C$ e raggio $\rho$"}
:::

::::teorema{#componenti-intrinseche titolo="Componenti tangenziale e normale dell'accelerazione"}
Sia il moto di $P$ di classe $C^2$, con $\vec{v}_P \neq \vec{0}$ e con raggio di curvatura $\rho$ nel punto occupato all'istante considerato. Allora
$$
\vec{v}_P = \dot{s}\,\hat{t} ,
\qquad
\vec{a}_P = \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} .
$$
Le due componenti si chiamano **accelerazione tangenziale** $a_t = \ddot{s}$ e **accelerazione normale** o centripeta $a_n = \dfrac{\dot{s}^2}{\rho}$; la componente lungo $\hat{b}$ è nulla, quindi l'accelerazione appartiene sempre al piano di $\hat{t}$ e $\hat{n}$.

La scomposizione separa due effetti: $a_t$ misura la variazione del modulo della velocità, $a_n$ misura la variazione della sua direzione. Poiché $a_n \ge 0$, l'accelerazione punta sempre verso la parte concava della traiettoria. In un moto rettilineo si ha $\dfrac{1}{\rho} = 0$, perciò $\vec{a}_P = \ddot{s}\,\hat{t}$ ed è parallela alla velocità; in un moto con $|\vec{v}_P|$ costante si ha $\ddot{s} = 0$, perciò $\vec{a}_P = \dfrac{\dot{s}^2}{\rho}\,\hat{n}$ ed è ortogonale alla velocità.

::grafico{curve="t,0.35*t*t,-1,2.4" vettori="1,0.35,1.07,2.35;1,0.35,1.98,1.04;1,0.35,0.08,1.66" segmenti="1.98,1.04,1.07,2.35;0.08,1.66,1.07,2.35" punti="1,0.35,pieno,P" etichette="1.18,1.85,a;1.62,0.55,aₜ;0.08,1.28,aₙ" uguale=1 xmin=-1.3 xmax=2.7 ymin=-0.4 ymax=2.8 legenda=0 titolo="L'accelerazione si scompone in $a_t\,\hat{t}$, che cambia il modulo della velocità, e $a_n\,\hat{n}$, che ne cambia la direzione"}

:::dimostrazione
Si scrive la posizione come funzione dell'ascissa curvilinea e l'ascissa curvilinea come funzione del tempo. Per la regola di derivazione della funzione composta
$$
\vec{v}_P = \frac{d}{dt}(P - O) = \frac{d}{ds}(P - O)\,\dot{s} = \dot{s}\,\hat{t} ,
$$
e questa è la prima uguaglianza. Derivando ancora rispetto al tempo si ottiene
$$
\vec{a}_P = \frac{d}{dt}\big( \dot{s}\,\hat{t} \big) = \ddot{s}\,\hat{t} + \dot{s}\,\frac{d\hat{t}}{dt} .
$$
Il versore tangente dipende dal tempo attraverso $s$, quindi $\dfrac{d\hat{t}}{dt} = \dfrac{d\hat{t}}{ds}\,\dot{s}$, e per la definizione di versore normale $\dfrac{d\hat{t}}{ds} = \dfrac{1}{\rho}\,\hat{n}$. Sostituendo si ha
$$
\vec{a}_P = \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} ,
$$
che è la seconda uguaglianza.
:::
::::

::::teorema{#formula-raggio-curvatura titolo="Raggio di curvatura dalla velocità e dall'accelerazione"}
Sia il moto di $P$ tale che $\vec{v}_P \wedge \vec{a}_P \neq \vec{0}$ all'istante considerato. Allora
$$
a_t = \frac{\vec{v}_P \cdot \vec{a}_P}{|\vec{v}_P|} ,
\qquad
a_n = \frac{|\vec{v}_P \wedge \vec{a}_P|}{|\vec{v}_P|} ,
\qquad
\rho = \frac{|\vec{v}_P|^3}{|\vec{v}_P \wedge \vec{a}_P|} .
$$
Le tre formule permettono di calcolare le componenti intrinseche e il raggio di curvatura partendo dalle sole componenti cartesiane del moto, senza determinare prima l'ascissa curvilinea. Per il moto piano con $x = v_0 t$ e $y = -\dfrac{1}{2}\,g t^2$ si ha $\vec{v}_P \wedge \vec{a}_P = -v_0 g\,\hat{k}$ e $|\vec{v}_P| = \sqrt{v_0^2 + g^2t^2}$, quindi
$$
\rho = \frac{\big( v_0^2 + g^2t^2 \big)^{\frac{3}{2}}}{v_0\,g} ,
$$
che all'istante $t = 0$ vale $\dfrac{v_0^2}{g}$.

:::dimostrazione
Per il teorema sulle componenti intrinseche dell'accelerazione si ha $\vec{v}_P = \dot{s}\,\hat{t}$, quindi $|\vec{v}_P| = |\dot{s}|$. Il prodotto scalare fra velocità e accelerazione vale
$$
\vec{v}_P \cdot \vec{a}_P = \dot{s}\,\hat{t} \cdot \left( \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} \right) = \dot{s}\,\ddot{s} ,
$$
poiché $\hat{t} \cdot \hat{t} = 1$ e $\hat{t} \cdot \hat{n} = 0$; dividendo per $|\vec{v}_P| = |\dot{s}|$ si ottiene $\ddot{s}$ a meno del segno di $\dot{s}$, e con il verso di percorrenza scelto in modo che $\dot{s} > 0$ si ha la prima formula. Il prodotto vettoriale vale
$$
\vec{v}_P \wedge \vec{a}_P = \dot{s}\,\hat{t} \wedge \left( \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\rho}\,\hat{n} \right) = \frac{\dot{s}^3}{\rho}\,\hat{b} ,
$$
perché $\hat{t} \wedge \hat{t} = \vec{0}$ e $\hat{t} \wedge \hat{n} = \hat{b}$. Prendendo i moduli si ottiene $|\vec{v}_P \wedge \vec{a}_P| = \dfrac{|\dot{s}|^3}{\rho}$, da cui seguono la terza formula, dividendo per $|\vec{v}_P|^3 = |\dot{s}|^3$, e la seconda, dividendo per $|\vec{v}_P| = |\dot{s}|$.
:::
::::

:::attenzione
Un moto con modulo della velocità costante ha accelerazione nulla solo se la traiettoria è rettilinea. Nel moto circolare uniforme di raggio $R$ e velocità angolare $\omega$ si ha $|\vec{v}_P| = R\,\omega$ costante, quindi $a_t = 0$; il raggio di curvatura vale $R$, perciò
$$
|\vec{a}_P| = a_n = \frac{(R\omega)^2}{R} = R\,\omega^2 \neq 0 .
$$
L'accelerazione è diretta verso il centro e cambia la direzione della velocità senza cambiarne il modulo.
:::

## Moti piani in coordinate polari

Quando la traiettoria è piana e il problema ha una simmetria rispetto a un punto, come nei moti centrali o nei punti vincolati a una guida rotante, conviene scomporre velocità e accelerazione lungo la direzione del raggio e lungo la direzione ortogonale.

:::definizione{#coordinate-polari titolo="Coordinate polari, versore radiale e versore trasverso"}
Sia il moto contenuto nel piano $Oxy$ e sia $P \neq O$. Si pongono $r = |P - O| > 0$ e $\vartheta$ l'angolo che $P - O$ forma con l'asse $x$, misurato in verso antiorario, cosicché $P - O = r\,\hat{u}_r$ con
$$
\hat{u}_r = \cos\vartheta\,\hat{\imath} + \sin\vartheta\,\hat{\jmath} ,
\qquad
\hat{u}_\vartheta = -\sin\vartheta\,\hat{\imath} + \cos\vartheta\,\hat{\jmath} .
$$
Il **versore radiale** $\hat{u}_r$ ha la direzione e il verso di $P - O$; il **versore trasverso** $\hat{u}_\vartheta$ si ottiene ruotando $\hat{u}_r$ di $\dfrac{\pi}{2}$ in verso antiorario, quindi la coppia $(\hat{u}_r, \hat{u}_\vartheta)$ è ortonormale. Lungo il moto l'angolo dipende dal tempo, perciò i due versori cambiano direzione e le loro derivate valgono
$$
\dot{\hat{u}}_r = \dot{\vartheta}\,\hat{u}_\vartheta ,
\qquad
\dot{\hat{u}}_\vartheta = -\,\dot{\vartheta}\,\hat{u}_r ,
$$
come si verifica derivando rispetto al tempo le due espressioni scritte sopra. Queste derivate sono il motivo per cui le formule di velocità e accelerazione in coordinate polari contengono termini che in coordinate cartesiane non compaiono.

::struttura{nodi="O,0,0;P,2.01,1.41" punti="0,0;2.01,1.41" linee="0,0 2.01,1.41;0.7,0.0 0.7,0.05 0.69,0.11 0.68,0.16 0.67,0.21 0.65,0.26 0.63,0.31 0.6,0.36 0.57,0.4" frecce="0,0,3.2,0,x;0,0,0,2.6,y;2.01,1.41,2.83,1.98,u_r;2.01,1.41,1.44,2.23,u_ϑ" etichette="1.0,0.85,r;0.82,0.14,ϑ" riferimento=0 titolo="Coordinate polari nel piano: il versore radiale $\hat{u}_r$ ha la direzione di $P - O$, il versore trasverso $\hat{u}_\vartheta$ è ruotato di $\dfrac{\pi}{2}$ in verso antiorario"}
:::

::::teorema{#velocita-accelerazione-polari titolo="Velocità e accelerazione in coordinate polari"}
Sia il moto di $P$ piano, di classe $C^2$, con $r(t) > 0$. Allora
$$
\vec{v}_P = \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta ,
\qquad
\vec{a}_P = \big( \ddot{r} - r\,\dot{\vartheta}^2 \big)\,\hat{u}_r + \big( r\,\ddot{\vartheta} + 2\,\dot{r}\,\dot{\vartheta} \big)\,\hat{u}_\vartheta .
$$
Le componenti si chiamano velocità radiale $\dot{r}$ e velocità trasversa $r\dot{\vartheta}$, accelerazione radiale $\ddot{r} - r\dot{\vartheta}^2$ e accelerazione trasversa $r\ddot{\vartheta} + 2\dot{r}\dot{\vartheta}$. Il termine $-r\dot{\vartheta}^2$ è l'accelerazione centripeta del moto circolare e il termine $2\dot{r}\dot{\vartheta}$ è il termine di Coriolis, che compare ogni volta che il punto si allontana dal centro mentre il raggio ruota.

Per un punto che si muove su una guida rettilinea rotante, con $r = u t$ e $\vartheta = \omega t$, si ottiene $\vec{v}_P = u\,\hat{u}_r + u\omega t\,\hat{u}_\vartheta$ e $\vec{a}_P = -u\omega^2 t\,\hat{u}_r + 2u\omega\,\hat{u}_\vartheta$, quindi l'accelerazione ha una componente trasversa costante anche se il punto si muove di moto uniforme lungo la guida.

:::dimostrazione
Si parte da $P - O = r\,\hat{u}_r$ e si deriva rispetto al tempo il prodotto fra la funzione $r$ e il versore $\hat{u}_r$:
$$
\vec{v}_P = \dot{r}\,\hat{u}_r + r\,\dot{\hat{u}}_r = \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta ,
$$
dove si è usata la derivata $\dot{\hat{u}}_r = \dot{\vartheta}\,\hat{u}_\vartheta$. Derivando una seconda volta si ottiene
$$
\begin{aligned}
\vec{a}_P &= \ddot{r}\,\hat{u}_r + \dot{r}\,\dot{\hat{u}}_r + \dot{r}\,\dot{\vartheta}\,\hat{u}_\vartheta + r\,\ddot{\vartheta}\,\hat{u}_\vartheta + r\,\dot{\vartheta}\,\dot{\hat{u}}_\vartheta \\[6pt]
&= \ddot{r}\,\hat{u}_r + \dot{r}\,\dot{\vartheta}\,\hat{u}_\vartheta + \dot{r}\,\dot{\vartheta}\,\hat{u}_\vartheta + r\,\ddot{\vartheta}\,\hat{u}_\vartheta - r\,\dot{\vartheta}^2\,\hat{u}_r \\[6pt]
&= \big( \ddot{r} - r\,\dot{\vartheta}^2 \big)\,\hat{u}_r + \big( r\,\ddot{\vartheta} + 2\,\dot{r}\,\dot{\vartheta} \big)\,\hat{u}_\vartheta ,
\end{aligned}
$$
dove nella seconda riga si sono sostituite le derivate dei due versori e nella terza si sono raccolti i termini lungo $\hat{u}_r$ e lungo $\hat{u}_\vartheta$.
:::
::::

:::definizione{#velocita-areolare titolo="Velocità areolare"}
Sia il moto di $P$ piano e sia $A(t)$ l'area spazzata dal segmento $OP$ fra l'istante iniziale e l'istante $t$. La **velocità areolare** rispetto al polo $O$ è
$$
\frac{dA}{dt} = \frac{1}{2}\,\big| (P - O) \wedge \vec{v}_P \big| = \frac{1}{2}\,r^2\,\big| \dot{\vartheta} \big| ,
$$
dove la seconda uguaglianza segue sostituendo $P - O = r\,\hat{u}_r$ e l'espressione polare della velocità, poiché $\hat{u}_r \wedge \hat{u}_r = \vec{0}$ e $\hat{u}_r \wedge \hat{u}_\vartheta = \hat{k}$. L'area spazzata in un intervallo breve è quella del triangolo di vertici $O$, $P(t)$ e $P(t + \Delta t)$, che vale $\dfrac{1}{2}\,|(P - O) \wedge \Delta P|$ a meno di infinitesimi di ordine superiore.

La velocità areolare misura la rapidità con cui il raggio vettore spazza area, perciò è grande dove il punto è lontano dal polo e ruota in fretta. Per il moto circolare uniforme di raggio $R$ e velocità angolare $\omega$ vale $\dfrac{1}{2}\,R^2\omega$, costante.

::struttura{nodi="O,0,0;P,2.01,1.41;Q,2.27,0.92" punti="0,0;2.01,1.41;2.27,0.92" poligoni="0,0 2.01,1.41 2.27,0.92" linee="1.73,1.73 1.83,1.63 1.93,1.51 2.02,1.39 2.11,1.25 2.18,1.11 2.25,0.96 2.3,0.81 2.35,0.65 2.39,0.49 2.42,0.33" frecce="0,0,3.2,0,x;0,0,0,2.6,y" etichette="1.3,0.72,ΔA" riferimento=0 titolo="Area spazzata dal segmento $OP$ fra due istanti vicini: la velocità areolare vale $\dfrac{1}{2}\,r^2\,\dot{\vartheta}$"}
:::

:::osservazione{#accelerazione-trasversa titolo="Accelerazione trasversa e velocità areolare"}
Dall'espressione polare dell'accelerazione segue l'identità
$$
r\,\ddot{\vartheta} + 2\,\dot{r}\,\dot{\vartheta} = \frac{1}{r}\,\frac{d}{dt}\big( r^2\,\dot{\vartheta} \big) ,
$$
che si verifica derivando il prodotto a destra. Poiché $r > 0$, l'accelerazione trasversa è nulla in ogni istante se e solo se $r^2\dot{\vartheta}$ è costante, cioè se e solo se la velocità areolare è costante. Questa equivalenza è il contenuto cinematico della seconda legge di Keplero e si userà nello studio dei moti centrali, nell'argomento sulla dinamica del punto materiale.
:::

## Moti notevoli

:::esempio{#moto-rettilineo-uniformemente-accelerato titolo="Moto rettilineo uniformemente accelerato"}
La traiettoria è una retta, che si prende come asse $x$, e l'accelerazione è costante, $\ddot{x} = a_0$. Integrando due volte con i dati iniziali $x(0) = x_0$ e $\dot{x}(0) = v_0$ si ottiene
$$
\dot{x}(t) = v_0 + a_0 t ,
\qquad
x(t) = x_0 + v_0 t + \frac{1}{2}\,a_0 t^2 ,
$$
e, eliminando il tempo fra le due, la relazione $\dot{x}^2 = v_0^2 + 2\,a_0\,(x - x_0)$. Il raggio di curvatura è infinito, perciò $a_n = 0$ e l'accelerazione è tutta tangenziale.
:::

:::definizione{#moto-armonico titolo="Moto armonico"}
Un punto si muove di **moto armonico** di pulsazione $\omega > 0$ lungo l'asse $x$ quando
$$
\ddot{x} = -\,\omega^2 x .
$$
L'integrale generale di questa equazione differenziale lineare del secondo ordine è $x(t) = A\cos(\omega t + \varphi)$, con $A \ge 0$ **ampiezza** e $\varphi$ **fase iniziale**; il moto è periodico di **periodo** $T = \dfrac{2\pi}{\omega}$ e di frequenza $\nu = \dfrac{1}{T}$. Dai dati iniziali $x(0) = x_0$ e $\dot{x}(0) = v_0$ si ricava
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega^2}} ,
$$
e i valori massimi del modulo della velocità e dell'accelerazione sono $A\omega$ e $A\omega^2$.

Il moto armonico descrive le oscillazioni di un punto attaccato a una molla e, più in generale, le piccole oscillazioni di un sistema attorno a una configurazione di equilibrio stabile, come si vede nell'argomento sull'equilibrio, la stabilità e le piccole oscillazioni.

::grafico{f="2*cos(1.5*x-0.6)" segmenti="0,2,9,2;0,-2,9,-2;0.4,0,0.4,2;4.59,0,4.59,2" etichette="2.2,0.3,T;8.2,2.25,A;7.9,-2.5,−A" xmin=0 xmax=9 ymin=-2.7 ymax=2.7 nomi="t,x" legenda=0 titolo="Moto armonico di ampiezza $A$ e periodo $T = \dfrac{2\pi}{\omega}$"}
:::

:::esempio{#moto-circolare titolo="Moto circolare"}
Il punto percorre la circonferenza di centro $O$ e raggio $R$ nel piano $Oxy$, quindi in coordinate polari $r = R$ costante e l'unica coordinata che varia è $\vartheta(t)$. Dalle formule in coordinate polari, con $\dot{r} = \ddot{r} = 0$,
$$
\vec{v}_P = R\,\dot{\vartheta}\,\hat{u}_\vartheta ,
\qquad
\vec{a}_P = -R\,\dot{\vartheta}^2\,\hat{u}_r + R\,\ddot{\vartheta}\,\hat{u}_\vartheta .
$$
La velocità è tangente alla circonferenza, perciò $\hat{u}_\vartheta = \hat{t}$ se $\dot{\vartheta} > 0$, e $-\hat{u}_r = \hat{n}$; il confronto con le componenti intrinseche dà $a_t = R\ddot{\vartheta}$ e $a_n = R\dot{\vartheta}^2$, in accordo con $\rho = R$ e $\dot{s} = R\dot{\vartheta}$. Il moto è uniforme quando $\dot{\vartheta} = \omega$ è costante, e in tal caso l'accelerazione vale $-R\omega^2\,\hat{u}_r$.
:::

:::esempio{#moto-elicoidale titolo="Moto elicoidale"}
Il punto percorre l'elica cilindrica di raggio $R$ e passo $2\pi h$:
$$
P - O = R\cos(\omega t)\,\hat{\imath} + R\sin(\omega t)\,\hat{\jmath} + h\,\omega t\,\hat{k} .
$$
Derivando si ottiene $\vec{v}_P = \omega\big( -R\sin(\omega t)\,\hat{\imath} + R\cos(\omega t)\,\hat{\jmath} + h\,\hat{k} \big)$ e $\vec{a}_P = -R\omega^2 \big( \cos(\omega t)\,\hat{\imath} + \sin(\omega t)\,\hat{\jmath} \big)$, quindi
$$
|\vec{v}_P| = \omega\sqrt{R^2 + h^2} ,
\qquad
s(t) = \omega t \sqrt{R^2 + h^2} ,
\qquad
\rho = \frac{R^2 + h^2}{R} .
$$
Il modulo della velocità è costante, perciò $a_t = 0$ e l'accelerazione è tutta normale, diretta verso l'asse dell'elica e di modulo $R\omega^2$. Il raggio di curvatura è maggiore di $R$ e dipende solo dalla geometria dell'elica, non dalla legge oraria con cui la si percorre.
:::

## Riferimento mobile e derivata di un vettore

Un punto vincolato a una guida che ruota, o osservato da una piattaforma in moto, si descrive più facilmente nel riferimento che si muove con il vincolo. Per confrontare le due descrizioni serve sapere come cambia la derivata di un vettore quando si cambia riferimento.

:::definizione{#riferimento-mobile titolo="Riferimento fisso e riferimento mobile"}
Si chiama **riferimento fisso** la terna $(O; x, y, z)$ di versori costanti $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$, e **riferimento mobile** una terna $(\Omega; \xi, \eta, \zeta)$ la cui origine $\Omega$ e i cui versori $\hat{e}_1(t)$, $\hat{e}_2(t)$, $\hat{e}_3(t)$ dipendono dal tempo, restando ortonormali in ogni istante. La posizione di un punto $P$ si decompone come
$$
P - O = (\Omega - O) + (P - \Omega) ,
$$
dove $\Omega - O$ descrive il moto dell'origine mobile e $P - \Omega = \xi\,\hat{e}_1 + \eta\,\hat{e}_2 + \zeta\,\hat{e}_3$ la posizione di $P$ vista dal riferimento mobile.

Le coordinate $\xi$, $\eta$, $\zeta$ sono quelle che misura un osservatore solidale con il riferimento mobile. Le derivate di $\xi$, $\eta$, $\zeta$ danno quindi il moto di $P$ per quell'osservatore, mentre le derivate di $x$, $y$, $z$ danno il moto per l'osservatore fisso; i due moti sono diversi e il legame fra loro è l'oggetto dei teoremi che seguono.

::struttura{nodi="O,0,0;Ω,2.6,1.1;P,4.3,2.5" punti="0,0;2.6,1.1;4.3,2.5" frecce="0,0,1.5,0,x;0,0,0,1.5,y;2.6,1.1,3.8,1.5,ξ;2.6,1.1,2.2,2.3,η;0,0,2.6,1.1;2.6,1.1,4.3,2.5;0,0,4.3,2.5" etichette="1.25,0.28,Ω − O;3.05,2.05,P − Ω;1.75,1.2,P − O" riferimento=0 titolo="Riferimento fisso di origine $O$ e riferimento mobile di origine $\Omega$: la posizione di $P$ si decompone in $(\Omega - O) + (P - \Omega)$"}
:::

::::teorema{#formule-di-poisson titolo="Velocità angolare di un riferimento mobile"}
Siano $\hat{e}_1(t)$, $\hat{e}_2(t)$, $\hat{e}_3(t)$ i versori di un riferimento mobile, derivabili e ortonormali in ogni istante. Allora esiste uno e un solo vettore $\vec{\omega}(t)$, detto **velocità angolare** del riferimento mobile, tale che
$$
\dot{\hat{e}}_h = \vec{\omega} \wedge \hat{e}_h ,
\qquad h = 1, 2, 3 ,
$$
uguaglianze note come **formule di Poisson**.

Il teorema riduce a tre numeri, le componenti di $\vec{\omega}$, le nove derivate dei versori mobili. Nei problemi piani il riferimento mobile ruota attorno all'asse $z$ di un angolo $\vartheta(t)$, e allora $\vec{\omega} = \dot{\vartheta}\,\hat{k}$. Lo stesso vettore $\vec{\omega}$ è la velocità angolare del corpo rigido solidale con la terna mobile, come si vede nell'argomento sulla cinematica del corpo rigido.

:::dimostrazione
Si scrive ciascuna derivata nella base mobile, $\dot{\hat{e}}_h = \displaystyle\sum_{k=1}^{3} a_{kh}\,\hat{e}_k$ con $a_{kh} = \dot{\hat{e}}_h \cdot \hat{e}_k$. Dalle condizioni di ortonormalità $\hat{e}_h \cdot \hat{e}_k = \delta_{hk}$, derivando rispetto al tempo, si ottiene
$$
\dot{\hat{e}}_h \cdot \hat{e}_k + \hat{e}_h \cdot \dot{\hat{e}}_k = 0 ,
\qquad \text{cioè} \qquad
a_{kh} + a_{hk} = 0 ,
$$
perciò la matrice dei coefficienti è antisimmetrica e i suoi elementi diagonali sono nulli. Restano tre coefficienti indipendenti, che si chiamano
$$
\omega_1 = a_{32} , \qquad \omega_2 = a_{13} , \qquad \omega_3 = a_{21} ,
$$
e si pone $\vec{\omega} = \omega_1\,\hat{e}_1 + \omega_2\,\hat{e}_2 + \omega_3\,\hat{e}_3$. Con questa scelta si calcola
$$
\vec{\omega} \wedge \hat{e}_1 = \omega_2\,(\hat{e}_2 \wedge \hat{e}_1) + \omega_3\,(\hat{e}_3 \wedge \hat{e}_1) = \omega_3\,\hat{e}_2 - \omega_2\,\hat{e}_3 ,
$$
mentre dall'antisimmetria $\dot{\hat{e}}_1 = a_{21}\,\hat{e}_2 + a_{31}\,\hat{e}_3 = \omega_3\,\hat{e}_2 - \omega_2\,\hat{e}_3$; i due vettori coincidono. Nello stesso modo si verificano le uguaglianze per $\hat{e}_2$ e per $\hat{e}_3$. Infine, se anche $\vec{\omega}\,'$ soddisfa le tre uguaglianze, allora $(\vec{\omega} - \vec{\omega}\,') \wedge \hat{e}_h = \vec{0}$ per $h = 1, 2, 3$, quindi il vettore $\vec{\omega} - \vec{\omega}\,'$ è parallelo a tre direzioni linearmente indipendenti; perciò è nullo e la velocità angolare è unica.
:::
::::

::::teorema{#derivata-relativa titolo="Derivata di un vettore nei due riferimenti"}
Sia $\vec{u}(t)$ un vettore e siano $u_1$, $u_2$, $u_3$ le sue componenti nella base mobile, cosicché $\vec{u} = u_1\hat{e}_1 + u_2\hat{e}_2 + u_3\hat{e}_3$. Si chiama **derivata relativa** di $\vec{u}$ il vettore
$$
\frac{d^{*}\vec{u}}{dt} = \dot{u}_1\,\hat{e}_1 + \dot{u}_2\,\hat{e}_2 + \dot{u}_3\,\hat{e}_3 ,
$$
cioè la derivata che calcola l'osservatore mobile, per il quale i versori $\hat{e}_h$ sono costanti. Allora
$$
\frac{d\vec{u}}{dt} = \frac{d^{*}\vec{u}}{dt} + \vec{\omega} \wedge \vec{u} .
$$
La formula è lo strumento con cui si passa da un riferimento all'altro: la derivata assoluta differisce da quella relativa per il termine $\vec{\omega} \wedge \vec{u}$, dovuto alla rotazione della base mobile. Applicata a $\vec{u} = \vec{\omega}$ dà $\dot{\vec{\omega}} = \dfrac{d^{*}\vec{\omega}}{dt}$, poiché $\vec{\omega} \wedge \vec{\omega} = \vec{0}$, cioè la derivata della velocità angolare è la stessa nei due riferimenti.

:::dimostrazione
Si deriva rispetto al tempo la scrittura di $\vec{u}$ nella base mobile, ricordando che i versori dipendono dal tempo:
$$
\frac{d\vec{u}}{dt} = \sum_{h=1}^{3} \dot{u}_h\,\hat{e}_h + \sum_{h=1}^{3} u_h\,\dot{\hat{e}}_h .
$$
La prima somma è la derivata relativa. Nella seconda si sostituiscono le formule di Poisson $\dot{\hat{e}}_h = \vec{\omega} \wedge \hat{e}_h$ e si porta $\vec{\omega}$ fuori dalla somma, lecito perché il prodotto vettoriale è lineare nel secondo fattore:
$$
\sum_{h=1}^{3} u_h\,\big( \vec{\omega} \wedge \hat{e}_h \big) = \vec{\omega} \wedge \sum_{h=1}^{3} u_h\,\hat{e}_h = \vec{\omega} \wedge \vec{u} .
$$
Sommando i due contributi si ottiene la formula.
:::
::::

## Composizione delle velocità

:::definizione{#moti-assoluto-relativo-trascinamento titolo="Moto assoluto, moto relativo e moto di trascinamento"}
Sia $P$ un punto in moto e sia $(\Omega; \xi, \eta, \zeta)$ un riferimento mobile di velocità angolare $\vec{\omega}$. Si chiamano
$$
\vec{v}_a = \frac{d}{dt}(P - O) ,
\qquad
\vec{v}_r = \frac{d^{*}}{dt}(P - \Omega) ,
\qquad
\vec{v}_\tau = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega)
$$
rispettivamente **velocità assoluta**, **velocità relativa** e **velocità di trascinamento** di $P$. La velocità relativa è quella misurata dall'osservatore mobile e si calcola derivando le coordinate $\xi$, $\eta$, $\zeta$. La velocità di trascinamento è la velocità che $P$ avrebbe se fosse fissato rigidamente al riferimento mobile nella posizione occupata all'istante considerato.

Il punto che all'istante $t$ occupa la posizione di $P$ ed è solidale con la terna mobile si chiama punto di trascinamento, e la sua velocità si ottiene dalla formula fondamentale della cinematica rigida applicata alla terna mobile, trattata nell'argomento sulla cinematica del corpo rigido.
:::

::::teorema{#composizione-velocita titolo="Teorema di composizione delle velocità"}
Per ogni punto $P$ in moto e per ogni riferimento mobile vale
$$
\vec{v}_a = \vec{v}_\tau + \vec{v}_r = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) + \vec{v}_r .
$$
Il teorema si usa nei due versi: per ricavare la velocità assoluta di un punto il cui moto relativo è semplice, come un cursore che scorre su una guida rotante, e per ricavare la velocità relativa quando è noto il moto assoluto. Se il riferimento mobile si muove di moto traslatorio allora $\vec{\omega} = \vec{0}$, quindi $\vec{v}_a = \vec{v}_\Omega + \vec{v}_r$ e le velocità si sommano come nella composizione galileiana.

:::dimostrazione
Si deriva rispetto al tempo, nel riferimento fisso, la decomposizione $P - O = (\Omega - O) + (P - \Omega)$:
$$
\vec{v}_a = \frac{d}{dt}(\Omega - O) + \frac{d}{dt}(P - \Omega) = \vec{v}_\Omega + \frac{d}{dt}(P - \Omega) .
$$
Al vettore $P - \Omega$ si applica il teorema sulla derivata di un vettore nei due riferimenti, che dà
$$
\frac{d}{dt}(P - \Omega) = \frac{d^{*}}{dt}(P - \Omega) + \vec{\omega} \wedge (P - \Omega) = \vec{v}_r + \vec{\omega} \wedge (P - \Omega) .
$$
Sostituendo nell'uguaglianza precedente e raccogliendo i termini che formano $\vec{v}_\tau$ si ottiene la tesi.
:::
::::

:::esempio{titolo="Cursore su una guida rotante"}
Una guida rettilinea ruota nel piano $Oxy$ attorno a $O$ con l'angolo $\vartheta = \omega t$, e un cursore $P$ scorre su di essa con $|P - O| = s_0 + u t$. Si prende il riferimento mobile con origine in $O$ e primo versore $\hat{e}_1$ lungo la guida, cosicché $\vec{\omega} = \omega\,\hat{k}$ e $P - O = (s_0 + ut)\,\hat{e}_1$. Poiché $\vec{v}_\Omega = \vec{0}$ e $\hat{k} \wedge \hat{e}_1 = \hat{e}_2$,
$$
\vec{v}_r = u\,\hat{e}_1 ,
\qquad
\vec{v}_\tau = \omega\,(s_0 + ut)\,\hat{e}_2 ,
\qquad
\vec{v}_a = u\,\hat{e}_1 + \omega\,(s_0 + ut)\,\hat{e}_2 .
$$
Le due componenti coincidono con la velocità radiale e la velocità trasversa del teorema in coordinate polari, con $r = s_0 + ut$ e $\dot{\vartheta} = \omega$, perché $\hat{e}_1 = \hat{u}_r$ e $\hat{e}_2 = \hat{u}_\vartheta$.
:::

## Composizione delle accelerazioni e accelerazione di Coriolis

::::teorema{#composizione-accelerazioni titolo="Teorema di composizione delle accelerazioni"}
Per ogni punto $P$ in moto e per ogni riferimento mobile vale
$$
\vec{a}_a = \vec{a}_\tau + \vec{a}_r + \vec{a}_c ,
$$
dove
$$
\vec{a}_\tau = \vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) ,
\qquad
\vec{a}_r = \frac{d^{*2}}{dt^2}(P - \Omega) ,
\qquad
\vec{a}_c = 2\,\vec{\omega} \wedge \vec{v}_r
$$
sono l'**accelerazione di trascinamento**, l'**accelerazione relativa** e l'**accelerazione di Coriolis** o complementare.

Rispetto alla composizione delle velocità compare un termine in più, $\vec{a}_c$, che dipende insieme dalla rotazione del riferimento e dalla velocità relativa del punto. Nei problemi piani con $\vec{\omega} = \omega\,\hat{k}$ costante l'accelerazione di trascinamento si riduce a $-\omega^2\,(P - \Omega)$ se $\Omega$ è fermo, cioè alla sola accelerazione centripeta.

:::dimostrazione
Si deriva rispetto al tempo, nel riferimento fisso, l'uguaglianza $\vec{v}_a = \vec{v}_\Omega + \vec{\omega} \wedge (P - \Omega) + \vec{v}_r$, trattando separatamente i tre addendi. Il primo dà $\vec{a}_\Omega$. Il secondo, per la regola di derivazione del prodotto vettoriale e per il teorema sulla derivata di un vettore nei due riferimenti, dà
$$
\frac{d}{dt}\Big[ \vec{\omega} \wedge (P - \Omega) \Big] = \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \Big[ \vec{v}_r + \vec{\omega} \wedge (P - \Omega) \Big] .
$$
Il terzo, applicando lo stesso teorema al vettore $\vec{v}_r$, dà
$$
\frac{d\vec{v}_r}{dt} = \frac{d^{*}\vec{v}_r}{dt} + \vec{\omega} \wedge \vec{v}_r = \vec{a}_r + \vec{\omega} \wedge \vec{v}_r .
$$
Sommando i tre contributi, i due termini $\vec{\omega} \wedge \vec{v}_r$ si sommano fra loro e danno $2\,\vec{\omega} \wedge \vec{v}_r$; gli altri si raggruppano in $\vec{a}_\tau$ e in $\vec{a}_r$, perciò
$$
\vec{a}_a = \underbrace{\vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big)}_{\vec{a}_\tau} + \vec{a}_r + \underbrace{2\,\vec{\omega} \wedge \vec{v}_r}_{\vec{a}_c} .
$$
:::
::::

:::osservazione{#annullamento-coriolis titolo="Quando l'accelerazione di Coriolis è nulla"}
Il prodotto vettoriale $2\,\vec{\omega} \wedge \vec{v}_r$ è nullo in tre casi:
- il riferimento mobile si muove di moto traslatorio, quindi $\vec{\omega} = \vec{0}$;
- il punto è in quiete relativa, quindi $\vec{v}_r = \vec{0}$, e allora $\vec{a}_a = \vec{a}_\tau$;
- la velocità relativa è parallela alla velocità angolare, come per un punto che si muove lungo l'asse di rotazione del riferimento mobile.

Fuori da questi casi l'accelerazione di Coriolis è diversa da zero, ed è ortogonale sia a $\vec{\omega}$ sia a $\vec{v}_r$. Per un punto che si muove su una guida radiale di una piattaforma rotante in un piano ortogonale a $\vec{\omega}$ il suo modulo vale $2\,\omega\,|\vec{v}_r|$ e il suo verso è quello di $\hat{u}_\vartheta$ se il punto si allontana dal centro.
:::

:::esempio{titolo="Punto su una guida radiale di una piattaforma rotante"}
Una piattaforma ruota attorno all'asse $z$ con velocità angolare costante $\vec{\omega} = \omega\,\hat{k}$ e un punto $P$ si muove su una guida radiale con $|P - O| = u t$, dove $u$ è costante. Nel riferimento solidale con la piattaforma il moto è rettilineo uniforme, quindi $\vec{v}_r = u\,\hat{e}_1$ e $\vec{a}_r = \vec{0}$. Risulta allora
$$
\vec{a}_\tau = -\,\omega^2\,u t\,\hat{e}_1 ,
\qquad
\vec{a}_c = 2\,\omega u\,\hat{e}_2 ,
\qquad
\vec{a}_a = -\,\omega^2 u t\,\hat{e}_1 + 2\,\omega u\,\hat{e}_2 .
$$
Lo stesso risultato si ottiene dalle formule in coordinate polari con $r = ut$ e $\vartheta = \omega t$, poiché $\ddot{r} - r\dot{\vartheta}^2 = -\omega^2 u t$ e $r\ddot{\vartheta} + 2\dot{r}\dot{\vartheta} = 2\omega u$. L'osservatore solidale con la piattaforma vede un moto senza accelerazione, mentre l'osservatore fisso vede un'accelerazione non nulla.

::struttura{cerchi="0,0,2.4" punti="0,0,O,centro;1.23,1.03,P" linee="0,0 1.84,1.54" frecce="1.23,1.03,1.84,1.54,v_r;1.23,1.03,0.62,1.76,a_c" coppie="-1.2 -1.1,1,ω" titolo="Guida radiale su una piattaforma che ruota con velocità angolare $\omega$: la velocità relativa è radiale, l'accelerazione di Coriolis è trasversa"}
:::

## Casi notevoli dei moti relativi

:::osservazione{#riferimento-traslante titolo="Riferimento mobile in moto traslatorio"}
Se i versori $\hat{e}_1$, $\hat{e}_2$, $\hat{e}_3$ sono costanti, allora $\vec{\omega} = \vec{0}$ e i due teoremi di composizione si riducono a
$$
\vec{v}_a = \vec{v}_\Omega + \vec{v}_r ,
\qquad
\vec{a}_a = \vec{a}_\Omega + \vec{a}_r .
$$
In particolare, se $\Omega$ si muove di moto rettilineo uniforme, allora $\vec{a}_\Omega = \vec{0}$ e le accelerazioni misurate nei due riferimenti coincidono. Questa è la proprietà che rende equivalenti i riferimenti inerziali nella dinamica del punto.
:::

:::osservazione{#traiettoria-relativa titolo="Traiettoria relativa e traiettoria assoluta"}
La **traiettoria relativa** è l'insieme delle posizioni che $P$ occupa nel riferimento mobile, cioè l'immagine delle funzioni $\xi(t)$, $\eta(t)$, $\zeta(t)$; è una curva diversa dalla traiettoria assoluta. Un punto fermo nel riferimento fisso, a distanza $d$ dall'asse di rotazione di una terna mobile che ruota con velocità angolare costante $\omega$, ha $\vec{v}_a = \vec{0}$, quindi
$$
\vec{v}_r = -\,\vec{v}_\tau = -\,\vec{\omega} \wedge (P - \Omega) ,
$$
e la sua traiettoria relativa è la circonferenza di raggio $d$ percorsa con velocità angolare $-\omega$. Un punto in moto rettilineo uniforme che passa per l'origine ha invece traiettoria relativa a spirale, con $r = u t$ e angolo relativo $-\omega t$.
:::
