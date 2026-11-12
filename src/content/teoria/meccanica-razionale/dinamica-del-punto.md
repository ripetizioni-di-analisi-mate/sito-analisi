---
titolo: Dinamica del punto materiale, libero e vincolato
sommario: Come si scrive e si integra l'equazione del moto di un punto materiale, che cosa dicono il teorema dell'energia cinetica e la conservazione dell'energia meccanica, e come si studiano i moti unidimensionali, il punto vincolato a una curva liscia, i moti centrali e il moto in un riferimento non inerziale.
---

## La legge fondamentale e il problema del moto

:::definizione{#punto-materiale titolo="Punto materiale, massa e forza"}
Un **punto materiale** è un corpo le cui dimensioni sono trascurabili rispetto alle distanze che percorre, quindi la sua configurazione è individuata dalla sola posizione $P$. Al punto si associa un numero positivo $m$, la **massa**, che misura la sua inerzia, e si chiama **forza** il vettore $\vec{F}$ che descrive l'azione dell'ambiente su di esso.

In tutto l'argomento il riferimento $(O; x, y, z)$, con versori $\hat{\imath}$, $\hat{\jmath}$ e $\hat{k}$, è **inerziale**, cioè è un riferimento in cui un punto non soggetto a forze si muove di moto rettilineo uniforme. Nei problemi piani il piano del moto è $Oxy$, con $x$ orizzontale verso destra e $y$ verticale verso l'alto, perciò il peso è $-mg\,\hat{\jmath}$, con $g = 9{,}81\,\mathrm{m/s^2}$.
:::

:::definizione{#equazione-fondamentale titolo="Equazione fondamentale della dinamica"}
In un riferimento inerziale il moto di un punto materiale di massa $m$ soggetto alla forza $\vec{F}$ soddisfa
$$
m\,\vec{a}_P = \vec{F} .
$$
La forza si assegna come funzione della posizione, della velocità e del tempo, $\vec{F} = \vec{F}(P, \vec{v}_P, t)$: il peso è costante, la forza elastica dipende dalla posizione, la resistenza di un fluido dipende dalla velocità, la spinta di un motore può dipendere dal tempo. Se il punto è vincolato, alla forza assegnata $\vec{F}$ si somma la **reazione vincolare** $\vec{\Phi}$, che è incognita, e l'equazione diventa
$$
m\,\vec{a}_P = \vec{F} + \vec{\Phi} .
$$
La reazione vincolare si determina insieme al moto, aggiungendo all'equazione le proprietà del vincolo, trattate nell'argomento sui vincoli e le coordinate lagrangiane.
:::

:::richiamo{titolo="Esistenza e unicità per un sistema di equazioni differenziali"}
Sia $\vec{g}(\vec{z}, t)$ continua in un intorno di $(\vec{z}_0, t_0)$ e con derivate parziali continue rispetto a $\vec{z}$. Allora il problema di Cauchy
$$
\begin{cases}
\dot{\vec{z}} = \vec{g}(\vec{z}, t) \\[4pt]
\vec{z}(t_0) = \vec{z}_0
\end{cases}
$$
ammette una soluzione e una sola, definita in un intorno di $t_0$. Si rimanda all'argomento sulle equazioni differenziali di Analisi 1 e di Analisi 2.
:::

:::osservazione{#problema-del-moto titolo="Il problema del moto"}
In componenti l'equazione fondamentale è un sistema di tre equazioni differenziali del secondo ordine nelle incognite $x(t)$, $y(t)$, $z(t)$. Ponendo $\vec{z} = (P - O, \vec{v}_P)$ il sistema si riscrive nella forma del primo ordine
$$
\begin{cases}
\dot{\vec{z}}_1 = \vec{z}_2 \\[4pt]
\dot{\vec{z}}_2 = \dfrac{1}{m}\,\vec{F}(\vec{z}_1, \vec{z}_2, t)
\end{cases}
$$
quindi, se $\vec{F}$ è regolare, il teorema di esistenza e unicità si applica: la posizione e la velocità a un istante $t_0$ determinano il moto. I sei numeri $P(t_0)$ e $\vec{v}_P(t_0)$ sono i **dati iniziali**.

Si incontrano due problemi di segno opposto. Nel problema diretto la forza è assegnata e si cerca il moto, perciò si integra l'equazione; nel problema inverso il moto è assegnato e si cerca la forza, perciò si deriva due volte la legge oraria e si moltiplica per $m$.
:::

## Forze dipendenti dal tempo e dalla velocità

I primi casi integrabili per quadrature sono quelli in cui la forza ha una sola componente non nulla e dipende dal tempo oppure dalla velocità.

::::teorema{#forza-costante titolo="Moto sotto una forza costante"}
Sia $\vec{F}$ costante e siano $P_0$ e $\vec{v}_0$ i dati iniziali in $t = 0$. Allora
$$
\vec{v}_P(t) = \vec{v}_0 + \frac{\vec{F}}{m}\,t ,
\qquad
P(t) - O = (P_0 - O) + \vec{v}_0\,t + \frac{\vec{F}}{2m}\,t^2 .
$$
La traiettoria è una retta se $\vec{v}_0$ è parallelo a $\vec{F}$ oppure è nullo, e in ogni altro caso è una parabola con asse parallelo a $\vec{F}$. Il caso più frequente è il moto di un grave, con $\vec{F} = -mg\,\hat{\jmath}$: la quota è $y(t) = y_0 + v_{0y}t - \dfrac{1}{2}g t^2$ e l'ascissa cresce uniformemente, $x(t) = x_0 + v_{0x}t$.

:::dimostrazione
L'equazione fondamentale dà $\vec{a}_P = \dfrac{\vec{F}}{m}$, che è un vettore costante. Integrando una volta fra $0$ e $t$ si ottiene $\vec{v}_P(t) - \vec{v}_0 = \dfrac{\vec{F}}{m}\,t$, e integrando di nuovo si ottiene la seconda formula. Per ricavare la traiettoria si scelgono gli assi con $\hat{\jmath}$ parallelo a $\vec{F}$ e $\vec{v}_0$ nel piano $Oxy$; allora $x = v_{0x}t$ e $y = v_{0y}t + \dfrac{F}{2m}t^2$, e se $v_{0x} \neq 0$ si elimina $t = \dfrac{x}{v_{0x}}$ fra le due relazioni, ottenendo l'equazione di una parabola. Se $v_{0x} = 0$ il moto si svolge sulla retta $x = 0$.
:::
::::

::::teorema{#resistenza-viscosa titolo="Moto con resistenza viscosa"}
Un punto soggetto alla sola resistenza viscosa $-h\,\vec{v}_P$, con $h > 0$, e lanciato con velocità $\vec{v}_0$ si muove di moto rettilineo con
$$
\vec{v}_P(t) = \vec{v}_0\,e^{-\frac{h}{m}t} ,
\qquad
P(t) - O = (P_0 - O) + \frac{m\,\vec{v}_0}{h}\Big( 1 - e^{-\frac{h}{m}t} \Big) ,
$$
quindi la velocità tende a zero senza annullarsi in alcun istante finito e il punto percorre lo spazio finito $\dfrac{m\,v_0}{h}$. Se oltre alla resistenza agisce una forza costante $\vec{F}$, la velocità tende alla **velocità limite** $\vec{v}_\ell = \dfrac{\vec{F}}{h}$, secondo
$$
\vec{v}_P(t) = \vec{v}_\ell + (\vec{v}_0 - \vec{v}_\ell)\,e^{-\frac{h}{m}t} .
$$
Per un grave in caduta verticale la velocità limite è $v_\ell = \dfrac{mg}{h}$, e il tempo $\dfrac{m}{h}$ misura quanto rapidamente viene raggiunta.

::grafico{f="1-exp(-x)" xmin=0 xmax=5 ymin=-0.1 ymax=1.3 asintoti="y=1" nomi="t,v" titolo="Velocità di un grave con resistenza viscosa, in unità di $v_\ell = \dfrac{mg}{h}$ e di $\dfrac{m}{h}$: la velocità limite è un asintoto orizzontale"}

:::dimostrazione
Con la sola resistenza l'equazione fondamentale è $m\,\dot{\vec{v}}_P = -h\,\vec{v}_P$. Ogni componente soddisfa la stessa equazione lineare $\dot{v} = -\dfrac{h}{m}v$, la cui soluzione con dato iniziale $v_0$ è $v_0\,e^{-\frac{h}{m}t}$; perciò $\vec{v}_P$ resta parallelo a $\vec{v}_0$ e il moto è rettilineo. Integrando la velocità fra $0$ e $t$ si ottiene lo spostamento, e passando al limite per $t \to +\infty$ si ottiene lo spazio percorso $\dfrac{m\,v_0}{h}$.

Con la forza costante l'equazione è $m\,\dot{\vec{v}}_P = \vec{F} - h\,\vec{v}_P$. Si pone $\vec{w} = \vec{v}_P - \dfrac{\vec{F}}{h}$, cosicché $\dot{\vec{w}} = \dot{\vec{v}}_P$ e l'equazione diventa $m\,\dot{\vec{w}} = -h\,\vec{w}$, già risolta. Quindi $\vec{w}(t) = \vec{w}(0)\,e^{-\frac{h}{m}t}$, che è la formula dell'enunciato.
:::
::::

## L'oscillatore armonico

:::richiamo{titolo="Equazioni lineari del secondo ordine a coefficienti costanti"}
L'equazione $\ddot{x} + 2\gamma\,\dot{x} + \omega_0^2\,x = 0$ ha come integrale generale una combinazione lineare di $e^{\lambda_1 t}$ e $e^{\lambda_2 t}$, dove $\lambda_1$ e $\lambda_2$ sono le radici di $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$; se le radici coincidono le due soluzioni sono $e^{\lambda t}$ e $t\,e^{\lambda t}$, e se sono complesse coniugate $-\gamma \pm i\,\mu$ le soluzioni reali sono $e^{-\gamma t}\cos\mu t$ e $e^{-\gamma t}\sin\mu t$. Si rimanda all'argomento sulle equazioni differenziali lineari di Analisi 2.
:::

::::teorema{#oscillatore-armonico titolo="Oscillatore armonico"}
Sia un punto di massa $m$ vincolato all'asse $x$ e soggetto alla forza elastica $-k\,x\,\hat{\imath}$, con $k > 0$. Posto
$$
\omega_0 = \sqrt{\frac{k}{m}} ,
$$
il moto è $x(t) = A\cos(\omega_0 t + \varphi)$, con l'ampiezza $A$ e la fase $\varphi$ determinate dai dati iniziali:
$$
A = \sqrt{x_0^2 + \frac{v_0^2}{\omega_0^2}} ,
\qquad
\tan\varphi = -\frac{v_0}{\omega_0\,x_0} .
$$
Il moto è quindi **periodico** di periodo $T = \dfrac{2\pi}{\omega_0} = 2\pi\sqrt{\dfrac{m}{k}}$, e il periodo non dipende dai dati iniziali. L'oscillatore armonico è il modello di ogni sistema che oscilla di poco attorno a una configurazione di equilibrio stabile, come si vede nell'argomento sull'equilibrio, la stabilità e le piccole oscillazioni. Una massa di $0{,}50\,\mathrm{kg}$ attaccata a una molla di costante $k = 200\,\mathrm{N/m}$ ha $\omega_0 = 20\,\mathrm{rad/s}$ e $T = 0{,}31\,\mathrm{s}$.

:::dimostrazione
L'equazione fondamentale lungo $x$ è $m\,\ddot{x} = -k\,x$, cioè $\ddot{x} + \omega_0^2\,x = 0$. L'equazione caratteristica $\lambda^2 + \omega_0^2 = 0$ ha radici $\pm i\,\omega_0$, perciò l'integrale generale è $x(t) = c_1\cos\omega_0 t + c_2\sin\omega_0 t$. Imponendo $x(0) = x_0$ e $\dot{x}(0) = v_0$ si ottengono $c_1 = x_0$ e $c_2 = \dfrac{v_0}{\omega_0}$. Si pone poi $A = \sqrt{c_1^2 + c_2^2}$ e si scelgono $\cos\varphi = \dfrac{c_1}{A}$ e $\sin\varphi = -\dfrac{c_2}{A}$; allora
$$
A\cos(\omega_0 t + \varphi) = A\cos\varphi\,\cos\omega_0 t - A\sin\varphi\,\sin\omega_0 t = c_1\cos\omega_0 t + c_2\sin\omega_0 t ,
$$
che è la forma dell'enunciato. Infine $x(t + T) = x(t)$ per ogni $t$ se e solo se $\omega_0 T$ è un multiplo di $2\pi$, e il più piccolo valore positivo è $T = \dfrac{2\pi}{\omega_0}$.
:::
::::

::::teorema{#oscillatore-smorzato titolo="Oscillatore armonico smorzato"}
Sia un punto di massa $m$ sull'asse $x$ soggetto alla forza elastica $-k\,x$ e alla resistenza viscosa $-h\,\dot{x}$, con $h > 0$. Posti $\omega_0 = \sqrt{\dfrac{k}{m}}$ e $\gamma = \dfrac{h}{2m}$, l'equazione del moto è
$$
\ddot{x} + 2\gamma\,\dot{x} + \omega_0^2\,x = 0 ,
$$
e il moto dipende dal confronto fra $\gamma$ e $\omega_0$.

- Se $\gamma < \omega_0$ (**smorzamento debole**), $x(t) = A\,e^{-\gamma t}\cos(\omega_s t + \varphi)$ con $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$: il punto oscilla con pseudoperiodo $\dfrac{2\pi}{\omega_s}$ e ampiezza che decresce come $e^{-\gamma t}$.
- Se $\gamma = \omega_0$ (**smorzamento critico**), $x(t) = (c_1 + c_2\,t)\,e^{-\gamma t}$.
- Se $\gamma > \omega_0$ (**smorzamento forte**), $x(t) = c_1\,e^{\lambda_1 t} + c_2\,e^{\lambda_2 t}$ con $\lambda_{1,2} = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$, entrambe negative.

In tutti e tre i casi $x(t) \to 0$ per $t \to +\infty$, perché le esponenziali hanno esponente con parte reale negativa. Negli ultimi due casi il punto passa per l'origine al più una volta, perciò il moto non è oscillatorio. Il valore $h = 2\sqrt{mk}$ separa i due comportamenti ed è quello cercato negli ammortizzatori, perché riporta il punto nell'origine nel tempo più breve senza oscillazioni.

::grafico{f="exp(-0.3*x)*(cos(0.9539*x)+0.3145*sin(0.9539*x));(1+x)*exp(-x);1.0774*exp(-0.2679*x)-0.0774*exp(-3.732*x)" xmin=0 xmax=20 ymin=-0.5 ymax=1.15 nomi="t,x" titolo="Moto smorzato con $x(0) = 1$ e $\dot{x}(0) = 0$, in unità di $\dfrac{1}{\omega_0}$: smorzamento debole $\gamma = 0{,}3\,\omega_0$ (colore pieno), critico $\gamma = \omega_0$ (tratteggio) e forte $\gamma = 2\,\omega_0$ (rosso)"}

:::dimostrazione
L'equazione fondamentale lungo $x$ è $m\,\ddot{x} = -k\,x - h\,\dot{x}$, e dividendo per $m$ si ottiene la forma dell'enunciato. L'equazione caratteristica è $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$, con discriminante $4(\gamma^2 - \omega_0^2)$. Se $\gamma < \omega_0$ le radici sono $-\gamma \pm i\,\omega_s$, quindi l'integrale generale è $e^{-\gamma t}(c_1\cos\omega_s t + c_2\sin\omega_s t)$, che si riscrive nella forma con l'ampiezza e la fase come per l'oscillatore armonico. Se $\gamma = \omega_0$ la radice $-\gamma$ è doppia e le soluzioni sono $e^{-\gamma t}$ e $t\,e^{-\gamma t}$. Se $\gamma > \omega_0$ le radici sono reali e distinte; il loro prodotto è $\omega_0^2 > 0$ e la loro somma è $-2\gamma < 0$, perciò sono entrambe negative.

Negli ultimi due casi $x(t) = 0$ richiede $c_1 + c_2 t = 0$ nel caso critico, cioè un solo valore di $t$, e $c_1\,e^{(\lambda_1 - \lambda_2)t} = -c_2$ nel caso forte, cioè ancora un solo valore di $t$, perché $\lambda_1 \neq \lambda_2$ e l'esponenziale è iniettiva.
:::
::::

::::teorema{#oscillatore-forzato titolo="Oscillatore forzato e risonanza"}
Sia l'oscillatore smorzato con smorzamento debole soggetto anche alla forza $F_0\cos\Omega t$. Allora
$$
\ddot{x} + 2\gamma\,\dot{x} + \omega_0^2\,x = \frac{F_0}{m}\cos\Omega t ,
$$
e per $t \to +\infty$ ogni soluzione tende al **moto di regime**
$$
x_r(t) = A(\Omega)\cos(\Omega t - \delta) ,
\qquad
A(\Omega) = \frac{\dfrac{F_0}{m}}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}} ,
\qquad
\tan\delta = \frac{2\gamma\Omega}{\omega_0^2 - \Omega^2} .
$$
Se $\gamma < \dfrac{\omega_0}{\sqrt{2}}$ l'ampiezza $A(\Omega)$ ha un massimo nella **pulsazione di risonanza**
$$
\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2} ,
\qquad
A(\Omega_r) = \frac{F_0}{2m\,\gamma\sqrt{\omega_0^2 - \gamma^2}} ,
$$
e il massimo cresce oltre ogni limite quando $\gamma \to 0$. La risonanza è il motivo per cui una forzante di piccola intensità produce oscillazioni ampie, purché la sua pulsazione sia vicina a quella propria del sistema.

::grafico{f="1/sqrt((1-x^2)^2+0.04*x^2);1/sqrt((1-x^2)^2+0.25*x^2);1/sqrt((1-x^2)^2+x^2)" xmin=0 xmax=2.5 ymin=0 ymax=5.5 nomi="Ω,A" titolo="Ampiezza di regime in funzione di $\Omega$, in unità di $\omega_0$ e di $\dfrac{F_0}{m\,\omega_0^2}$, per $\gamma = 0{,}1\,\omega_0$ (colore pieno), $\gamma = 0{,}25\,\omega_0$ (tratteggio) e $\gamma = 0{,}5\,\omega_0$ (rosso)"}

:::dimostrazione
L'integrale generale è la somma dell'integrale generale dell'equazione omogenea e di una soluzione particolare. Il primo tende a zero per $t \to +\infty$, perché l'oscillatore smorzato ha $x(t) \to 0$; perciò ogni soluzione tende alla soluzione particolare, che si cerca della forma $x_r = A\cos(\Omega t - \delta)$. Sostituendo e raccogliendo si ottiene
$$
A\big[ (\omega_0^2 - \Omega^2)\cos(\Omega t - \delta) - 2\gamma\Omega\sin(\Omega t - \delta) \big] = \frac{F_0}{m}\cos\Omega t .
$$
Si scrive $\cos\Omega t = \cos\big( (\Omega t - \delta) + \delta \big)$ e si sviluppa; uguagliando i coefficienti di $\cos(\Omega t - \delta)$ e di $\sin(\Omega t - \delta)$ si ottiene
$$
\begin{cases}
A\,(\omega_0^2 - \Omega^2) = \dfrac{F_0}{m}\cos\delta \\[6pt]
2\gamma\Omega\,A = \dfrac{F_0}{m}\sin\delta
\end{cases}
$$
Il quoziente delle due equazioni dà $\tan\delta$, e la somma dei loro quadrati dà $A^2\big[ (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2 \big] = \dfrac{F_0^2}{m^2}$, da cui l'espressione di $A(\Omega)$.

Il massimo di $A$ si ottiene nel punto di minimo della funzione $\Omega \mapsto (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2$. La sua derivata è $4\Omega\,(\Omega^2 - \omega_0^2 + 2\gamma^2)$, che per $\Omega > 0$ si annulla solo in $\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2}$, purché il radicando sia positivo, cioè $\gamma < \dfrac{\omega_0}{\sqrt{2}}$. La derivata è negativa prima di $\Omega_r$ e positiva dopo, perciò $\Omega_r$ è un punto di minimo. Sostituendo $\Omega_r$ si ottiene $(\omega_0^2 - \Omega_r^2)^2 + 4\gamma^2\Omega_r^2 = 4\gamma^4 + 4\gamma^2(\omega_0^2 - 2\gamma^2) = 4\gamma^2(\omega_0^2 - \gamma^2)$, da cui il valore di $A(\Omega_r)$.
:::
::::

## Lavoro, energia cinetica e potenziale

::::teorema{#teorema-energia-cinetica titolo="Teorema dell'energia cinetica"}
Sia $T = \dfrac{1}{2}\,m\,v_P^2$ l'**energia cinetica** del punto e sia $\Pi = \vec{F} \cdot \vec{v}_P$ la **potenza** della forza. Allora in ogni istante
$$
\frac{dT}{dt} = \Pi ,
$$
e integrando fra due istanti $t_1$ e $t_2$
$$
T(t_2) - T(t_1) = L ,
\qquad
L = \int_{t_1}^{t_2} \vec{F} \cdot \vec{v}_P\,dt = \int_{\gamma} \vec{F} \cdot d\vec{r} ,
$$
dove $L$ è il **lavoro** compiuto dalla forza lungo l'arco di traiettoria $\gamma$ percorso fra i due istanti. Il teorema lega la variazione della velocità al lavoro, quindi fornisce la velocità senza integrare l'equazione del moto, ogni volta che il lavoro si calcola a priori. Se sul punto agisce anche una reazione vincolare, nel lavoro va compreso anche il suo.

:::dimostrazione
Si deriva $T = \dfrac{1}{2}\,m\,\vec{v}_P \cdot \vec{v}_P$ rispetto al tempo:
$$
\frac{dT}{dt} = m\,\vec{v}_P \cdot \dot{\vec{v}}_P = \vec{v}_P \cdot m\,\vec{a}_P .
$$
Per l'equazione fondamentale $m\,\vec{a}_P = \vec{F}$, quindi $\dfrac{dT}{dt} = \vec{F} \cdot \vec{v}_P = \Pi$. Integrando fra $t_1$ e $t_2$ si ottiene $T(t_2) - T(t_1) = \displaystyle\int_{t_1}^{t_2}\Pi\,dt$; poiché $\vec{v}_P\,dt = d\vec{r}$ è lo spostamento elementare lungo la traiettoria, l'integrale si scrive come integrale di linea di $\vec{F}$ lungo $\gamma$.
:::
::::

:::definizione{#forze-conservative titolo="Forze conservative, potenziale ed energia potenziale"}
Una forza posizionale $\vec{F} = \vec{F}(P)$ è **conservativa** se esiste una funzione scalare $U(P)$, detta **potenziale**, tale che
$$
\vec{F} = \operatorname{grad} U .
$$
L'**energia potenziale** è $V = -U$, e in tutta la Meccanica razionale si usa questa convenzione: il potenziale è $U$ e l'energia potenziale è il suo opposto. I due casi che compaiono in quasi tutti i problemi sono il peso e la molla:
$$
U_{\text{peso}} = -m g\,y_P ,
\qquad
U_{\text{molla}} = -\frac{1}{2}\,k\,(\ell - \ell_0)^2 ,
$$
dove $y_P$ è la quota del punto, $\ell$ è la lunghezza della molla e $\ell_0$ la sua lunghezza a riposo. Il lavoro di una forza conservativa lungo un arco da $P_1$ a $P_2$ vale $L = U(P_2) - U(P_1)$, quindi dipende solo dagli estremi: si calcola valutando il potenziale due volte, senza eseguire l'integrale di linea. Per una molla di costante $k = 100\,\mathrm{N/m}$ e lunghezza a riposo nulla, allungata da $0$ a $0{,}20\,\mathrm{m}$, il lavoro è $-\dfrac{1}{2} \cdot 100 \cdot 0{,}04 = -2\,\mathrm{J}$.
:::

::::teorema{#conservazione-energia titolo="Conservazione dell'energia meccanica"}
Sia il punto soggetto a forze conservative di potenziale $U$ e, se è vincolato, a una reazione vincolare di potenza nulla. Allora l'**energia meccanica**
$$
E = T + V = \frac{1}{2}\,m\,v_P^2 - U(P)
$$
è costante durante il moto. L'uguaglianza $T + V = E$ è un **integrale primo**: lega la velocità alla posizione, perciò dà la velocità in ogni punto raggiunto dal moto quando si conosce $E$ dai dati iniziali.

:::dimostrazione
Per il teorema dell'energia cinetica $\dfrac{dT}{dt} = \vec{F} \cdot \vec{v}_P + \vec{\Phi} \cdot \vec{v}_P$, e per ipotesi $\vec{\Phi} \cdot \vec{v}_P = 0$. La forza è conservativa, quindi $\vec{F} = \operatorname{grad} U$ e, per la regola di derivazione delle funzioni composte,
$$
\vec{F} \cdot \vec{v}_P = \operatorname{grad} U \cdot \vec{v}_P = \frac{d}{dt}\,U\big( P(t) \big) .
$$
Perciò $\dfrac{d}{dt}(T - U) = 0$, cioè $T - U = T + V$ è costante.
:::
::::

:::osservazione{#reazioni-lisce titolo="Quando la reazione vincolare ha potenza nulla"}
Se il vincolo è **liscio e fisso**, la reazione $\vec{\Phi}$ è ortogonale alla curva o alla superficie vincolare, mentre la velocità è tangente a essa; perciò $\vec{\Phi} \cdot \vec{v}_P = 0$ e l'ipotesi del teorema di conservazione è soddisfatta. Lo stesso vale per un filo inestensibile teso, perché la tensione è diretta lungo il filo e la velocità del punto è ortogonale a esso. Con un vincolo mobile, oppure con attrito, la potenza della reazione in generale non è nulla.
:::

## Moti unidimensionali conservativi

Quando il punto si muove su una retta o su una curva assegnata e le forze sono conservative, la conservazione dell'energia basta a descrivere il moto senza integrare l'equazione differenziale.

::::teorema{#moto-unidimensionale titolo="Discussione del moto unidimensionale conservativo"}
Sia un punto di massa $m$ vincolato all'asse $x$ da un vincolo liscio, fisso e bilaterale, soggetto alla forza $F(x)\,\hat{\imath}$ con energia potenziale $V(x)$, cioè $F = -V'(x)$. Dai dati iniziali $x_0$ e $v_0$ si calcola $E = \dfrac{1}{2}\,m\,v_0^2 + V(x_0)$ e vale
$$
\frac{1}{2}\,m\,\dot{x}^2 = E - V(x) .
$$
Allora valgono i fatti seguenti.

- Il moto si svolge nell'insieme $\{ x : V(x) \leq E \}$, e il punto resta nella componente connessa che contiene $x_0$.
- Le configurazioni di **equilibrio** sono le soluzioni di $V'(x) = 0$: se $x_0$ è una di esse e $v_0 = 0$, il moto è la quiete.
- Un punto $\bar{x}$ con $V(\bar{x}) = E$ e $V'(\bar{x}) \neq 0$ è un **punto di inversione**: il punto vi arriva con velocità nulla e torna indietro.
- Se $x_0$ sta fra due punti di inversione $x_1 < x_2$ e $V(x) < E$ per $x_1 < x < x_2$, il moto è periodico fra $x_1$ e $x_2$.

::grafico{f="x^4/4-x^2/2;-0.1;0.4" punti="-1.332,-0.1;-0.4748,-0.1;0.4748,-0.1;1.332,-0.1;-1.6163,0.4;1.6163,0.4" xmin=-2 xmax=2 ymin=-0.55 ymax=0.85 nomi="x,V" titolo="Energia potenziale con due pozzi: al livello $E = -0{,}1$ il moto è periodico in uno dei due pozzi, al livello $E = 0{,}4$ attraversa l'origine e oscilla fra i due punti di inversione estremi"}

:::dimostrazione
La forza è conservativa con potenziale $U = -V$, e la reazione del vincolo liscio e fisso ha potenza nulla; perciò per la conservazione dell'energia meccanica $\dfrac{1}{2}\,m\,\dot{x}^2 + V(x) = E$, che è la relazione dell'enunciato.

Il primo membro è non negativo, quindi $V(x) \leq E$ in ogni posizione raggiunta dal moto: il moto si svolge nell'insieme indicato. La funzione $t \mapsto x(t)$ è continua, perciò la sua immagine è un intervallo, e tale intervallo contiene $x_0$: il punto resta nella componente connessa di $x_0$.

Se $V'(x_0) = 0$ e $v_0 = 0$, la funzione costante $x(t) = x_0$ soddisfa l'equazione $m\,\ddot{x} = -V'(x)$ e i dati iniziali; per l'unicità della soluzione è il moto cercato.

Sia $\bar{x}$ con $V(\bar{x}) = E$ e $V'(\bar{x}) \neq 0$, e sia $\bar{t}$ un istante in cui $x(\bar{t}) = \bar{x}$. Dalla relazione dell'energia segue $\dot{x}(\bar{t}) = 0$, e dall'equazione del moto $m\,\ddot{x}(\bar{t}) = -V'(\bar{x}) \neq 0$. Quindi $\bar{t}$ è un punto di massimo o di minimo stretto per $x(t)$, perciò il punto inverte il verso del moto.

Nell'ultimo caso, finché $x$ sta fra $x_1$ e $x_2$ si ha $\dot{x} \neq 0$ e il verso del moto non cambia; dunque il punto raggiunge uno dei due estremi in un tempo finito, perché la velocità ha modulo minimo positivo su ogni intervallo chiuso contenuto in $(x_1, x_2)$, vi inverte il moto e per unicità ripercorre simmetricamente il cammino. Il moto è quindi periodico.
:::
::::

:::teorema{#periodo-unidimensionale titolo="Periodo di un moto unidimensionale"}
Nelle ipotesi del punto precedente, con $x_1$ e $x_2$ punti di inversione consecutivi, il periodo vale
$$
T = \sqrt{2m}\,\int_{x_1}^{x_2} \frac{dx}{\sqrt{E - V(x)}} .
$$
La formula segue dalla relazione dell'energia: si ricava $\dot{x} = \sqrt{\dfrac{2}{m}\big( E - V(x) \big)}$ nel tratto in cui il punto va da $x_1$ a $x_2$, si separano le variabili e si integra; il tempo di ritorno è uguale a quello di andata, perciò il periodo è il doppio dell'integrale fra $x_1$ e $x_2$ del reciproco della velocità. Per $V = \dfrac{1}{2}\,k\,x^2$ ed $E = \dfrac{1}{2}\,k\,A^2$ l'integrale si calcola con la sostituzione $x = A\sin\vartheta$ e restituisce $T = 2\pi\sqrt{\dfrac{m}{k}}$, cioè il periodo dell'oscillatore armonico.
:::

:::attenzione
Un punto di inversione in cui anche $V'$ è nullo non viene raggiunto in un tempo finito. Sia per esempio $V(x) = -\dfrac{1}{2}\,k\,x^2$ ed $E = 0$, con dati iniziali $x_0 < 0$ e $v_0 = \sqrt{\dfrac{k}{m}}\,|x_0|$ verso l'origine. L'equazione dell'energia dà $\dot{x} = \sqrt{\dfrac{k}{m}}\,|x|$, la cui soluzione è $x(t) = x_0\,e^{-\sqrt{k/m}\,t}$, che tende a zero senza annullarsi in alcun istante finito. Il massimo dell'energia potenziale viene quindi raggiunto solo asintoticamente, e il moto non è periodico.
:::

## Punto vincolato a una curva o a una superficie liscia

:::richiamo{titolo="Terna intrinseca e componenti dell'accelerazione"}
Sia $s$ l'ascissa curvilinea su una curva regolare e siano $\hat{t}$ il versore tangente, $\hat{n}$ il versore normale principale e $\varrho$ il raggio di curvatura. Allora
$$
\vec{v}_P = \dot{s}\,\hat{t} ,
\qquad
\vec{a}_P = \ddot{s}\,\hat{t} + \frac{\dot{s}^2}{\varrho}\,\hat{n} ,
$$
e il versore binormale è $\hat{b} = \hat{t} \wedge \hat{n}$. Si rimanda all'argomento sulla cinematica del punto e i moti relativi.

::grafico{f="0.18*x^2" legenda=0 uguale=1 vettori="2,0.72,3.22,1.59;2,0.72,0.86,1.59,n" etichette="2.98,1.0,t" punti="2,0.72,pieno,P" xmin=-3.2 xmax=4.0 ymin=-0.6 ymax=2.4 titolo="Versore tangente $\hat{t}$ e versore normale principale $\hat{n}$ nel punto $P$ di una curva piana"}
:::

::::teorema{#equazioni-intrinseche titolo="Equazioni del moto in forma intrinseca"}
Sia un punto di massa $m$ vincolato a una curva liscia e fissa, soggetto alla forza assegnata $\vec{F}$ e alla reazione $\vec{\Phi}$. Poiché il vincolo è liscio, $\vec{\Phi}$ è ortogonale alla curva, quindi $\vec{\Phi} \cdot \hat{t} = 0$, e proiettando l'equazione fondamentale sulla terna intrinseca si ottiene
$$
\begin{cases}
m\,\ddot{s} = \vec{F} \cdot \hat{t} \\[4pt]
m\,\dfrac{\dot{s}^2}{\varrho} = \vec{F} \cdot \hat{n} + \vec{\Phi} \cdot \hat{n} \\[4pt]
0 = \vec{F} \cdot \hat{b} + \vec{\Phi} \cdot \hat{b}
\end{cases}
$$
La prima equazione contiene la sola incognita $s(t)$, perciò determina il moto; le altre due danno poi la reazione vincolare, nota la legge oraria. La prima equazione è quindi l'**equazione pura del moto** e le altre due sono le **equazioni delle reazioni**.

::grafico{f="0.18*x^2" legenda=0 uguale=1 vettori="2,0.72,2,-0.38,mg;2,0.72,0.86,1.59,Φ" punti="2,0.72,pieno,P" xmin=-3.2 xmax=4.0 ymin=-0.9 ymax=2.4 titolo="Punto vincolato a una guida liscia: il peso $m g$ e la reazione $\vec{\Phi}$, ortogonale alla guida"}

:::dimostrazione
L'equazione fondamentale per il punto vincolato è $m\,\vec{a}_P = \vec{F} + \vec{\Phi}$. Si sostituisce l'espressione intrinseca dell'accelerazione e si moltiplica scalarmente per i tre versori della terna, che sono ortonormali. La componente tangenziale dell'accelerazione è $\ddot{s}$, quella normale è $\dfrac{\dot{s}^2}{\varrho}$ e quella binormale è nulla; la componente tangenziale di $\vec{\Phi}$ è nulla per l'ipotesi di vincolo liscio. Si ottengono così le tre equazioni dell'enunciato.
:::
::::

:::osservazione{#distacco titolo="Vincolo unilaterale e distacco"}
Un vincolo **unilaterale**, come un appoggio o una guida che spinge da una sola parte, esercita una reazione con componente normale di segno assegnato: se la superficie può solo spingere il punto, la componente di $\vec{\Phi}$ secondo la normale uscente è non negativa. Si procede allora in due passi: si risolve il problema come se il vincolo fosse bilaterale, poi si impone la condizione di segno sulla reazione trovata. L'istante in cui la reazione si annulla è l'istante di **distacco**, e dopo di esso il moto prosegue come moto libero, con i dati iniziali dati dalla posizione e dalla velocità all'istante del distacco.
:::

## Il pendolo semplice e il piano inclinato

::::teorema{#pendolo-semplice titolo="Pendolo semplice"}
Un punto di massa $m$ è appeso a un filo inestensibile di lunghezza $\ell$, fissato in $O$ e teso, e si muove nel piano verticale $Oxy$. Sia $\vartheta$ l'angolo che il filo forma con la verticale discendente. Allora l'equazione pura del moto è
$$
\ddot{\vartheta} + \frac{g}{\ell}\sin\vartheta = 0 ,
$$
l'energia meccanica $E = \dfrac{1}{2}\,m\,\ell^2\,\dot{\vartheta}^2 - m g \ell\cos\vartheta$ è costante e la tensione del filo vale
$$
\Phi = m g\cos\vartheta + m\,\ell\,\dot{\vartheta}^2 .
$$
Se il punto parte da fermo dall'angolo $\vartheta_0 < \pi$, allora $\ell^2\dot{\vartheta}^2 = 2 g \ell\,(\cos\vartheta - \cos\vartheta_0)$ e la tensione vale $\Phi = m g\,(3\cos\vartheta - 2\cos\vartheta_0)$; nel punto più basso $\Phi = m g\,(3 - 2\cos\vartheta_0)$, che per $\vartheta_0 = \dfrac{\pi}{2}$ vale $3 m g$.

::struttura{nodi="O,0,3;P,1.491,0.869" catene="O-P" vincoli="O,cerniera,90" tratteggi="0,3 0,0.3" forze="P,0,-1,mg" reazioni="P,-0.52,0.74,Φ" etichette="0.33,2.35,ϑ" quote="O,P,ℓ,-0.5" punti="1.491,0.869" titolo="Pendolo semplice: la tensione $\vec{\Phi}$ è diretta lungo il filo verso $O$ e il peso ha componente tangenziale $-m g\sin\vartheta$"}

:::dimostrazione
Il filo è teso e inestensibile, quindi il punto si muove sulla circonferenza di centro $O$ e raggio $\ell$, con ascissa curvilinea $s = \ell\,\vartheta$ e raggio di curvatura $\varrho = \ell$. Il versore tangente, orientato nel verso delle $\vartheta$ crescenti, ha componente $-\sin\vartheta$ sulla verticale discendente, perciò $\vec{F} \cdot \hat{t} = -m g\sin\vartheta$; il versore normale principale è diretto da $P$ verso $O$, e la componente del peso su di esso è $-m g\cos\vartheta$, mentre la tensione è $\Phi$, positiva perché il filo tira verso $O$.

La prima equazione intrinseca dà $m\,\ell\,\ddot{\vartheta} = -m g\sin\vartheta$, cioè l'equazione dell'enunciato. La seconda dà
$$
m\,\frac{\ell^2\dot{\vartheta}^2}{\ell} = \Phi - m g\cos\vartheta ,
$$
da cui l'espressione della tensione. Il peso è conservativo con potenziale $U = -m g\,y_P = m g \ell\cos\vartheta$ e la tensione ha potenza nulla, quindi l'energia meccanica si conserva. Imponendo $\dot{\vartheta} = 0$ in $\vartheta_0$ si ottiene $E = -m g \ell\cos\vartheta_0$, e sostituendo nell'integrale primo si ricava $\ell^2\dot{\vartheta}^2 = 2 g \ell\,(\cos\vartheta - \cos\vartheta_0)$. Sostituendo questa espressione nella tensione si ottiene $\Phi = m g\cos\vartheta + 2 m g\,(\cos\vartheta - \cos\vartheta_0) = m g\,(3\cos\vartheta - 2\cos\vartheta_0)$.
:::
::::

:::osservazione{#piccole-oscillazioni-pendolo titolo="Piccole oscillazioni del pendolo"}
Per $|\vartheta|$ piccolo si sostituisce $\sin\vartheta$ con $\vartheta$, perché lo sviluppo di Taylor dà $\sin\vartheta = \vartheta + o(\vartheta^2)$, e l'equazione del pendolo diventa quella dell'oscillatore armonico
$$
\ddot{\vartheta} + \frac{g}{\ell}\,\vartheta = 0 ,
\qquad
T = 2\pi\sqrt{\frac{\ell}{g}} .
$$
Il periodo delle piccole oscillazioni non dipende dall'ampiezza né dalla massa. Un pendolo lungo $1{,}00\,\mathrm{m}$ ha $T = 2{,}01\,\mathrm{s}$. Per ampiezze non piccole il periodo cresce con l'ampiezza e si calcola con la formula del periodo di un moto unidimensionale, che in questo caso porta a un integrale ellittico.
:::

:::esempio{#piano-inclinato titolo="Punto su un piano inclinato liscio"}
Un punto di massa $m$ scende lungo un piano inclinato liscio e fisso, che forma l'angolo $\alpha$ con l'orizzontale. Si prende l'ascissa $\sigma$ lungo la linea di massima pendenza, crescente verso il basso. Il peso ha componente tangenziale $m g\sin\alpha$ e componente normale $-m g\cos\alpha$, quindi le equazioni intrinseche danno
$$
m\,\ddot{\sigma} = m g\sin\alpha ,
\qquad
\Phi = m g\cos\alpha ,
$$
perché la traiettoria è rettilinea e il termine centripeto è nullo. Il moto è perciò uniformemente accelerato con accelerazione $g\sin\alpha$, e partendo da fermo il punto percorre il tratto $d$ in un tempo $\sqrt{\dfrac{2 d}{g\sin\alpha}}$ raggiungendo la velocità $\sqrt{2 d g\sin\alpha}$. Con $d\sin\alpha = h$, cioè con un dislivello $h$, la velocità è $\sqrt{2 g h}$, lo stesso valore che si ottiene dalla conservazione dell'energia meccanica e che non dipende dall'inclinazione.

::struttura{linee="0,0 4,3 4,0 0,0" punti="2,1.5,P" forze="2 1.5,0,-1,mg" reazioni="2 1.5,-0.6,0.8,Φ" etichette="0.95,0.26,α" quote="0 0,4 3,d,-0.75" riferimento=0 titolo="Punto su un piano inclinato liscio: il peso $m g$ e la reazione $\vec{\Phi}$, normale al piano"}

:::

## Moti centrali

:::definizione{#moto-centrale titolo="Moto centrale"}
Il moto di un punto $P$ è **centrale** di centro $O$ se la forza è in ogni istante parallela a $P - O$, cioè
$$
\vec{F} = f(P)\,\hat{u}_r ,
\qquad
\hat{u}_r = \frac{P - O}{|P - O|} ,
$$
con $f < 0$ se la forza è attrattiva e $f > 0$ se è repulsiva. Sono centrali la forza gravitazionale $f = -\dfrac{G M m}{r^2}$, la forza coulombiana e la forza elastica $f = -k\,r$ di una molla con un estremo in $O$ e lunghezza a riposo nulla. Il moto centrale è il modello dei moti planetari e, più in generale, del moto di due corpi che si attraggono.
:::

::::teorema{#velocita-areolare titolo="Momento angolare e velocità areolare in un moto centrale"}
In un moto centrale di centro $O$ il momento angolare $\vec{K}_O = (P - O) \wedge m\,\vec{v}_P$ è costante. Di conseguenza valgono i fatti seguenti.

- Se $\vec{K}_O \neq \vec{0}$, il moto è piano e si svolge nel piano per $O$ ortogonale a $\vec{K}_O$.
- In coordinate polari $(r, \vartheta)$ di quel piano, la quantità $c = r^2\,\dot{\vartheta}$ è costante e $|\vec{K}_O| = m\,|c|$.
- La **velocità areolare**, cioè la derivata rispetto al tempo dell'area spazzata dal raggio vettore, vale $\dfrac{c}{2}$ ed è costante: è la seconda legge di Kepler.

:::dimostrazione
Si deriva il momento angolare rispetto al tempo:
$$
\frac{d\vec{K}_O}{dt} = \vec{v}_P \wedge m\,\vec{v}_P + (P - O) \wedge m\,\vec{a}_P = (P - O) \wedge \vec{F} .
$$
Il primo addendo è nullo perché è il prodotto vettoriale di due vettori paralleli. Il secondo è nullo perché la forza è parallela a $P - O$, essendo il moto centrale. Perciò $\vec{K}_O$ è costante.

Sia $\vec{K}_O \neq \vec{0}$. Dalla definizione segue $(P - O) \cdot \vec{K}_O = 0$ in ogni istante, quindi $P$ appartiene sempre al piano per $O$ ortogonale al vettore costante $\vec{K}_O$. In coordinate polari di quel piano $\vec{v}_P = \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta$, perciò
$$
\vec{K}_O = r\,\hat{u}_r \wedge m\,( \dot{r}\,\hat{u}_r + r\,\dot{\vartheta}\,\hat{u}_\vartheta ) = m\,r^2\,\dot{\vartheta}\,\hat{k} ,
$$
e la costanza di $\vec{K}_O$ equivale a quella di $c = r^2\dot{\vartheta}$. Infine l'area spazzata fra gli istanti $t$ e $t + dt$ è quella del settore di raggio $r$ e angolo $d\vartheta$, cioè $dA = \dfrac{1}{2}\,r^2\,d\vartheta$ a meno di infinitesimi di ordine superiore; dividendo per $dt$ si ottiene $\dot{A} = \dfrac{1}{2}\,r^2\,\dot{\vartheta} = \dfrac{c}{2}$.
:::
::::

::::teorema{#formula-di-binet titolo="Formula di Binet"}
Sia un moto centrale piano con $c = r^2\dot{\vartheta} \neq 0$ e si ponga $u = \dfrac{1}{r}$, vista come funzione di $\vartheta$. Allora la componente radiale della forza vale
$$
f = -m\,c^2\,u^2\left( \frac{d^2 u}{d\vartheta^2} + u \right) .
$$
La formula serve nel problema inverso: assegnata l'orbita $r = r(\vartheta)$, dà la forza che la produce, senza passare dalla legge oraria. Per un'orbita circolare di raggio $r_0$ si ha $u = \dfrac{1}{r_0}$ costante, quindi $f = -\dfrac{m\,c^2}{r_0^3}$, che con $c = r_0\,v$ si riduce a $f = -\dfrac{m\,v^2}{r_0}$, la nota forza centripeta.

:::dimostrazione
L'accelerazione radiale in coordinate polari è $a_r = \ddot{r} - r\,\dot{\vartheta}^2$, e la forza è radiale, quindi $f = m\,(\ddot{r} - r\,\dot{\vartheta}^2)$. Da $c = r^2\dot{\vartheta}$ segue $\dot{\vartheta} = c\,u^2$. Si deriva $r = \dfrac{1}{u}$ rispetto al tempo usando $\dfrac{d}{dt} = \dot{\vartheta}\,\dfrac{d}{d\vartheta}$:
$$
\dot{r} = -\frac{1}{u^2}\,\frac{du}{d\vartheta}\,\dot{\vartheta} = -c\,\frac{du}{d\vartheta} ,
$$
$$
\ddot{r} = -c\,\frac{d^2u}{d\vartheta^2}\,\dot{\vartheta} = -c^2\,u^2\,\frac{d^2u}{d\vartheta^2} .
$$
Inoltre $r\,\dot{\vartheta}^2 = \dfrac{1}{u}\,c^2u^4 = c^2u^3$. Sostituendo nell'espressione di $f$ si ottiene
$$
f = m\left( -c^2u^2\,\frac{d^2u}{d\vartheta^2} - c^2u^3 \right) = -m\,c^2\,u^2\left( \frac{d^2u}{d\vartheta^2} + u \right) .
$$
:::
::::

:::osservazione{#orbite-kepleriane titolo="Orbite kepleriane"}
Per la forza newtoniana $f = -\dfrac{\mu\,m}{r^2}$ la formula di Binet dà $\dfrac{d^2u}{d\vartheta^2} + u = \dfrac{\mu}{c^2}$, che è l'equazione dell'oscillatore armonico con termine noto costante. Il suo integrale generale è
$$
u = \frac{\mu}{c^2} + C\cos(\vartheta - \vartheta_0) ,
\qquad\text{cioè}\qquad
r = \frac{p}{1 + e\cos(\vartheta - \vartheta_0)} ,
\qquad
p = \frac{c^2}{\mu} ,
\qquad
e = \frac{C\,c^2}{\mu} .
$$
L'orbita è quindi una conica con un fuoco nel centro delle forze, ed è un'ellisse per $e < 1$, una parabola per $e = 1$ e un'iperbole per $e > 1$: è la prima legge di Kepler. Per l'orbita circolare di raggio $r_0$ la velocità è $\sqrt{\dfrac{\mu}{r_0}}$ e il periodo è $2\pi\sqrt{\dfrac{r_0^3}{\mu}}$, perciò $\dfrac{T^2}{r_0^3}$ ha lo stesso valore per tutte le orbite circolari attorno allo stesso centro: è la terza legge di Kepler.

::grafico{curve="cos(t)/(1+0.5*cos(t)),sin(t)/(1+0.5*cos(t)),0,6.283" uguale=1 vettori="0,0,-0.667,1.1547,r" punti="0,0,pieno,O;-0.667,1.1547,pieno,P" xmin=-2.3 xmax=1.3 ymin=-1.5 ymax=1.5 titolo="Orbita ellittica $r = \dfrac{p}{1 + e\cos\vartheta}$ con $e = \dfrac{1}{2}$ e fuoco nel centro delle forze $O$"}

:::

## Dinamica relativa e forze apparenti

:::richiamo{titolo="Teorema di composizione delle accelerazioni"}
Siano $(O; x, y, z)$ un riferimento fisso e $(\Omega; \xi, \eta, \zeta)$ un riferimento mobile con velocità angolare $\vec{\omega}$. Allora l'accelerazione assoluta di un punto $P$ si scompone come
$$
\vec{a}_a = \vec{a}_\tau + \vec{a}_r + \vec{a}_c ,
\qquad
\vec{a}_\tau = \vec{a}_\Omega + \dot{\vec{\omega}} \wedge (P - \Omega) + \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big) ,
\qquad
\vec{a}_c = 2\,\vec{\omega} \wedge \vec{v}_r ,
$$
dove $\vec{a}_\tau$ è l'accelerazione di trascinamento, $\vec{a}_r$ quella relativa e $\vec{a}_c$ quella di Coriolis. Si rimanda all'argomento sulla cinematica del punto e i moti relativi.
:::

::::teorema{#forze-apparenti titolo="Equazione del moto in un riferimento non inerziale"}
Sia $(\Omega; \xi, \eta, \zeta)$ un riferimento in moto rispetto a un riferimento inerziale, con velocità angolare $\vec{\omega}$. Allora il moto relativo di un punto di massa $m$ soggetto alla forza $\vec{F}$ soddisfa
$$
m\,\vec{a}_r = \vec{F} + \vec{F}_\tau + \vec{F}_c ,
\qquad
\vec{F}_\tau = -m\,\vec{a}_\tau ,
\qquad
\vec{F}_c = -m\,\vec{a}_c = -2m\,\vec{\omega} \wedge \vec{v}_r .
$$
I due vettori aggiunti sono la **forza di trascinamento** e la **forza di Coriolis**, dette forze apparenti: non descrivono azioni di altri corpi, e compaiono perché il riferimento non è inerziale. Nel riferimento mobile l'equazione fondamentale vale quindi nella stessa forma, purché alle forze vere si sommino le forze apparenti.

Se $\Omega$ è fisso, $\vec{\omega}$ è costante e parallelo a un asse fisso, la forza di trascinamento si riduce alla **forza centrifuga** $m\,\omega^2\,\vec{d}$, dove $\vec{d}$ è il vettore che va dall'asse di rotazione a $P$, ortogonale all'asse. Tale forza è conservativa con potenziale $U_c = \dfrac{1}{2}\,m\,\omega^2 d^2$, perciò nei problemi su guide rotanti con velocità angolare costante si conserva l'energia meccanica relativa, calcolata con il potenziale totale $U + U_c$. La forza di Coriolis ha potenza nulla nel moto relativo, perché è ortogonale a $\vec{v}_r$.

:::dimostrazione
Nel riferimento inerziale vale $m\,\vec{a}_a = \vec{F}$. Per il teorema di composizione delle accelerazioni $\vec{a}_a = \vec{a}_\tau + \vec{a}_r + \vec{a}_c$, perciò
$$
m\,\vec{a}_r = \vec{F} - m\,\vec{a}_\tau - m\,\vec{a}_c ,
$$
che è l'enunciato. Se $\Omega$ è sull'asse di rotazione e $\vec{\omega}$ è costante, allora $\vec{a}_\Omega = \vec{0}$ e $\dot{\vec{\omega}} = \vec{0}$, dunque $\vec{a}_\tau = \vec{\omega} \wedge \big( \vec{\omega} \wedge (P - \Omega) \big)$. Si scompone $P - \Omega = \vec{d} + \vec{z}$ con $\vec{z}$ parallelo a $\vec{\omega}$ e $\vec{d}$ ortogonale; il doppio prodotto vettoriale dà $\vec{\omega} \wedge (\vec{\omega} \wedge \vec{d}) = -\omega^2\,\vec{d}$, perché $\vec{\omega} \wedge \vec{z} = \vec{0}$. Quindi $-m\,\vec{a}_\tau = m\,\omega^2\,\vec{d}$.

Questa forza ha la direzione di $\vec{d}$ e modulo $m\,\omega^2 d$, e il gradiente di $\dfrac{1}{2}\,m\,\omega^2 d^2$ rispetto alla posizione è $m\,\omega^2\,\vec{d}$; perciò la forza centrifuga è conservativa con quel potenziale. Infine $\vec{F}_c \cdot \vec{v}_r = -2m\,(\vec{\omega} \wedge \vec{v}_r) \cdot \vec{v}_r = 0$, perché il prodotto vettoriale è ortogonale a $\vec{v}_r$.
:::
::::

:::osservazione{#deviazione-verso-oriente titolo="Deviazione verso oriente"}
Il riferimento terrestre ruota con velocità angolare $\omega_T = 7{,}29 \cdot 10^{-5}\,\mathrm{rad/s}$, quindi non è inerziale. La forza centrifuga si somma all'attrazione gravitazionale e dà il peso effettivo, con il valore di $g$ misurato nel luogo. La forza di Coriolis produce invece effetti che dipendono dalla velocità: un punto lasciato cadere da un'altezza $h_0$ all'equatore tocca il suolo spostato verso oriente di
$$
d = \frac{\omega_T\,g\,t_c^3}{3} = \frac{2\sqrt{2}}{3}\,\omega_T\,\sqrt{\frac{h_0^3}{g}} ,
\qquad
t_c = \sqrt{\frac{2 h_0}{g}} ,
$$
che per $h_0 = 100\,\mathrm{m}$ vale $2{,}2\,\mathrm{cm}$. Lo stesso termine spiega la rotazione lenta del piano di oscillazione del pendolo di Foucault.
:::
