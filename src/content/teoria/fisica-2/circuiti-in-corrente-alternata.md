---
titolo: Oscillazioni elettriche e circuiti in corrente alternata
sommario: Come oscilla la carica in un circuito LC e come le oscillazioni si smorzano in un circuito RLC, come resistori, condensatori e induttori rispondono a una tensione sinusoidale, come fasori e impedenza danno corrente e sfasamento, che cosa sono la risonanza e il fattore di potenza, e come un trasformatore cambia la tensione alternata.
---

## Circuito LC e oscillazioni elettriche

Si assume che i circuiti siano in regime quasi stazionario, cioè che in ogni istante la corrente abbia lo stesso valore in tutti i punti di un ramo; l'ipotesi è soddisfatta quando il tempo impiegato da un segnale elettromagnetico per attraversare il circuito è trascurabile rispetto al periodo delle grandezze che variano. I fili hanno resistenza trascurabile, salvo dove è indicato un resistore.

:::richiamo{titolo="Condensatore e induttore"}
Un condensatore di capacità $C$ con carica $q$ sull'armatura positiva ha ai capi la tensione $\dfrac{q}{C}$ e immagazzina l'energia $\dfrac{q^2}{2C}$. In un induttore di induttanza $L$ percorso dalla corrente $i(t)$ la f.e.m. autoindotta è $-L\,\dfrac{di}{dt}$, quindi la caduta di potenziale ai capi dell'induttore, nel verso della corrente, è $L\,\dfrac{di}{dt}$; l'energia immagazzinata è $\dfrac{1}{2} L i^2$. Si rimanda agli argomenti su conduttori, condensatori e dielettrici e sull'induzione elettromagnetica.
:::

:::richiamo{titolo="Equazione del moto armonico"}
L'equazione differenziale lineare del secondo ordine $\ddot{x} + \omega^2 x = 0$, con $\omega > 0$, ha integrale generale $x(t) = A\cos(\omega t + \varphi)$, con $A$ e $\varphi$ costanti fissate dalle condizioni iniziali. Si rimanda all'argomento sulle equazioni differenziali di Analisi 1 e all'argomento sulle oscillazioni e il moto armonico di Fisica 1.
:::

::::teorema{#circuito-lc titolo="Oscillazioni del circuito LC"}
Si consideri un condensatore di capacità $C$ con carica iniziale $Q_0$, collegato all'istante $t = 0$ a un induttore ideale di induttanza $L$, in un circuito di resistenza trascurabile. Sia $q(t)$ la carica dell'armatura inizialmente positiva e sia $i = \dfrac{dq}{dt}$ la corrente, con il verso positivo che porta carica su quell'armatura. Allora
$$
q(t) = Q_0 \cos(\omega_0 t) , \qquad i(t) = -\omega_0 Q_0 \sin(\omega_0 t) , \qquad \omega_0 = \frac{1}{\sqrt{LC}} .
$$
La carica oscilla di moto armonico con **pulsazione propria** $\omega_0$, periodo $T = 2\pi\sqrt{LC}$ e frequenza $f_0 = \dfrac{1}{2\pi\sqrt{LC}}$, e la corrente ha ampiezza $I_0 = \omega_0 Q_0$. Il circuito $LC$ è l'oscillatore elettrico più semplice e si usa per generare segnali di frequenza fissata. Con $L = 10\,\mathrm{mH}$ e $C = 1{,}0\,\mu\mathrm{F}$ si ha $\omega_0 = \dfrac{1}{\sqrt{10^{-2} \cdot 10^{-6}}}\,\mathrm{rad/s} = 1{,}0 \cdot 10^4\,\mathrm{rad/s}$ e $f_0 \approx 1{,}6\,\mathrm{kHz}$.

::grafico{assi=0 uguale=1 linee="-0.42,1.63 0.42,1.63;-0.42,1.37 0.42,1.37;0,1.63 0,3 4,3 4,2.1;4,0.9 4.05,0.91 4.09,0.93 4.12,0.96 4.14,1 4.15,1.05 4.14,1.1 4.12,1.14 4.09,1.17 4.05,1.19 4,1.2 4,1.2 4.05,1.21 4.09,1.23 4.12,1.26 4.14,1.3 4.15,1.35 4.14,1.4 4.12,1.44 4.09,1.47 4.05,1.49 4,1.5 4,1.5 4.05,1.51 4.09,1.53 4.12,1.56 4.14,1.6 4.15,1.65 4.14,1.7 4.12,1.74 4.09,1.77 4.05,1.79 4,1.8 4,1.8 4.05,1.81 4.09,1.83 4.12,1.86 4.14,1.9 4.15,1.95 4.14,2 4.12,2.04 4.09,2.07 4.05,2.09 4,2.1;4,0.9 4,0 0,0 0,1.37" vettori="2.4,3,1.6,3,i" etichette="-0.95,1.38,C;0.6,1.75,+q;0.6,1.0,−q;4.6,1.38,L" xmin=-1.4 xmax=5.4 ymin=-0.5 ymax=3.6 titolo="Circuito $LC$: il verso positivo di $i$ è quello in cui la corrente porta carica sull'armatura che ha carica $q$, quindi $i = \dfrac{dq}{dt}$"}

:::dimostrazione
Si percorre la maglia nel verso positivo della corrente. Ai capi dell'induttore la caduta di potenziale è $L\,\dfrac{di}{dt}$, e ai capi del condensatore, dall'armatura con carica $q$ all'altra, è $\dfrac{q}{C}$. Nella maglia non ci sono generatori, quindi per la **legge delle maglie** la somma delle due cadute è nulla; con $i = \dfrac{dq}{dt}$ si ottiene
$$
L\,\frac{d^2 q}{dt^2} + \frac{q}{C} = 0
\quad\Longrightarrow\quad
\frac{d^2 q}{dt^2} + \omega_0^2\, q = 0 , \qquad \omega_0^2 = \frac{1}{LC} .
$$
È l'equazione del moto armonico, perciò $q(t) = A\cos(\omega_0 t + \varphi)$. All'istante iniziale la carica è $Q_0$ e la corrente è nulla, perché prima della chiusura del circuito l'induttore non è percorso da corrente e la corrente in un induttore varia con continuità. Le condizioni iniziali formano il sistema
$$
\begin{cases}
A\cos\varphi = Q_0 \\[4pt]
-\omega_0 A \sin\varphi = 0
\end{cases}
$$
che con $A > 0$ dà $\varphi = 0$ e $A = Q_0$. Derivando $q(t)$ si ottiene $i(t)$.
:::
::::

::::teorema{#energia-circuito-lc titolo="Conservazione dell'energia nel circuito LC"}
Nel circuito $LC$ la somma dell'energia elettrica del condensatore e dell'energia magnetica dell'induttore è costante:
$$
U = \frac{q^2}{2C} + \frac{1}{2} L i^2 = \frac{Q_0^2}{2C} .
$$
L'energia passa dal campo elettrico del condensatore al campo magnetico dell'induttore e viceversa, due volte per periodo. Quando il condensatore è scarico tutta l'energia è nell'induttore, e la corrente è massima in modulo; uguagliando le due espressioni dell'energia si ottiene $\dfrac{Q_0^2}{2C} = \dfrac{1}{2} L I_0^2$, cioè $I_0 = \dfrac{Q_0}{\sqrt{LC}} = \omega_0 Q_0$. Nel circuito con $L = 10\,\mathrm{mH}$ e $C = 1{,}0\,\mu\mathrm{F}$, se il condensatore è caricato a $10\,\mathrm{V}$, si ha $Q_0 = 10\,\mu\mathrm{C}$, $U = 50\,\mu\mathrm{J}$ e $I_0 = 0{,}10\,\mathrm{A}$.

::grafico{f="cos(x);-sin(x)" xmin=-0.5 xmax=13 ymin=-1.5 ymax=1.6 nomi="t," legenda="q(t);i(t)" titolo="Carica $q(t) = Q_0 \cos(\omega_0 t)$ e corrente $i(t) = -\omega_0 Q_0 \sin(\omega_0 t)$, misurate in unità di $Q_0$ e di $\omega_0 Q_0$, con il tempo in unità di $\dfrac{1}{\omega_0}$: la corrente è massima in modulo quando il condensatore è scarico"}

:::dimostrazione
Derivando $U$ rispetto al tempo e usando $i = \dfrac{dq}{dt}$ si ottiene
$$
\frac{dU}{dt} = \frac{q}{C}\,\frac{dq}{dt} + L\,i\,\frac{di}{dt} = i \left( \frac{q}{C} + L\,\frac{di}{dt} \right) = 0 ,
$$
perché l'espressione $\dfrac{q}{C} + L\,\dfrac{di}{dt}$ è nulla per la legge delle maglie. Quindi $U$ è costante e uguale al valore iniziale $\dfrac{Q_0^2}{2C}$, calcolato quando la corrente è nulla.
:::
::::

:::osservazione{#analogia-meccanica titolo="Analogia con l'oscillatore massa-molla"}
L'equazione $L\ddot{q} + \dfrac{q}{C} = 0$ ha la stessa forma dell'equazione $m\ddot{x} + kx = 0$ dell'oscillatore massa-molla, quindi ogni risultato sull'uno si traduce nell'altro con la corrispondenza seguente.

| Oscillatore massa-molla | Circuito $LC$ |
|---|---|
| posizione $x$ | carica $q$ |
| velocità $v = \dot{x}$ | corrente $i = \dot{q}$ |
| massa $m$ | induttanza $L$ |
| costante elastica $k$ | inverso della capacità $\dfrac{1}{C}$ |
| energia cinetica $\dfrac{1}{2} m v^2$ | energia magnetica $\dfrac{1}{2} L i^2$ |
| energia potenziale $\dfrac{1}{2} k x^2$ | energia elettrica $\dfrac{q^2}{2C}$ |
| coefficiente di smorzamento $b$ | resistenza $R$ |

Per esempio, la pulsazione $\sqrt{\dfrac{k}{m}}$ dell'oscillatore diventa $\sqrt{\dfrac{1}{LC}}$. L'induttanza ha il ruolo dell'inerzia, perché si oppone alle variazioni della corrente come la massa si oppone alle variazioni della velocità. Si rimanda all'argomento sulle oscillazioni e il moto armonico di Fisica 1.
:::

## Circuito RLC in serie e oscillazioni smorzate

:::richiamo{titolo="Equazioni lineari del secondo ordine a coefficienti costanti"}
L'equazione $\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0$, con $\gamma > 0$ e $\omega_0 > 0$, ha equazione caratteristica $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$, con radici $\lambda = -\gamma \pm \sqrt{\gamma^2 - \omega_0^2}$. Se $\gamma < \omega_0$ le radici sono complesse coniugate, con parte reale $-\gamma$ e parte immaginaria $\pm\omega_s$, dove $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$, e l'integrale generale è $A\,e^{-\gamma t}\cos(\omega_s t + \varphi)$; se $\gamma > \omega_0$ è una combinazione di due esponenziali reali; se $\gamma = \omega_0$ è $(c_1 + c_2 t)\,e^{-\gamma t}$. Si rimanda all'argomento sulle equazioni differenziali di Analisi 1.
:::

::::teorema{#circuito-rlc-libero titolo="Oscillazioni smorzate del circuito RLC"}
Si consideri un condensatore di capacità $C$ con carica iniziale $Q_0$ che si scarica attraverso un induttore di induttanza $L$ e un resistore di resistenza $R$, collegati in serie. La carica soddisfa l'equazione
$$
L\,\frac{d^2 q}{dt^2} + R\,\frac{dq}{dt} + \frac{q}{C} = 0 ,
\qquad\text{cioè}\qquad
\ddot{q} + 2\gamma\,\dot{q} + \omega_0^2\, q = 0 ,
\qquad
\gamma = \frac{R}{2L} , \quad \omega_0 = \frac{1}{\sqrt{LC}} .
$$
Il comportamento dipende dal confronto tra $R$ e la **resistenza critica** $R_c = 2\sqrt{\dfrac{L}{C}}$, che corrisponde a $\gamma = \omega_0$.

- Se $R < R_c$ (smorzamento debole), la carica oscilla con ampiezza decrescente, $q(t) = A\,e^{-\gamma t}\cos(\omega_s t + \varphi)$, con pulsazione $\omega_s = \sqrt{\omega_0^2 - \gamma^2}$ minore di $\omega_0$.
- Se $R = R_c$ (smorzamento critico), la carica tende a zero senza oscillare; tra i regimi senza oscillazioni è quello in cui la carica si annulla più rapidamente.
- Se $R > R_c$ (smorzamento forte), la carica tende a zero senza oscillare, più lentamente che nel caso critico.

Il resistore ha nel circuito il ruolo dell'attrito viscoso nell'oscillatore meccanico. Con $L = 10\,\mathrm{mH}$, $C = 1{,}0\,\mu\mathrm{F}$ e $R = 2{,}0\,\Omega$ si ha $R_c = 200\,\Omega$, quindi lo smorzamento è debole, con $\gamma = 100\,\mathrm{s^{-1}}$ e $\omega_s \approx \omega_0 = 1{,}0 \cdot 10^4\,\mathrm{rad/s}$.

::grafico{f="exp(-0.12*x)*cos(2*x)" curve="t-21*floor(t/21),(1-2*floor(t/21))*exp(-0.12*(t-21*floor(t/21))),0,41.9" xmin=-0.5 xmax=20 ymin=-1.3 ymax=1.4 nomi="t,q" legenda="q(t);\pm Q_0 e^{-\gamma t}" titolo="Scarica di un circuito $RLC$ con smorzamento debole: la carica oscilla con pulsazione $\omega_s$ e la sua ampiezza decresce come $Q_0 e^{-\gamma t}$, con $\gamma = \dfrac{R}{2L}$"}

:::dimostrazione
Si percorre la maglia nel verso positivo della corrente, con $i = \dfrac{dq}{dt}$. Ai capi del resistore la caduta di potenziale è $Ri$ per la legge di Ohm, e le cadute ai capi del condensatore e dell'induttore sono quelle del circuito $LC$. Per la legge delle maglie la somma delle tre cadute è nulla, quindi $L\ddot{q} + R\dot{q} + \dfrac{q}{C} = 0$, e dividendo per $L$ si ottiene la seconda forma. L'equazione caratteristica $\lambda^2 + 2\gamma\lambda + \omega_0^2 = 0$ ha discriminante $4\left( \gamma^2 - \omega_0^2 \right)$. Se $\gamma < \omega_0$ le radici sono complesse coniugate con parte reale $-\gamma$, perciò la carica è un'oscillazione di pulsazione $\omega_s$ moltiplicata per $e^{-\gamma t}$. Se $\gamma \geq \omega_0$ le radici sono reali e negative, poiché $\sqrt{\gamma^2 - \omega_0^2} < \gamma$, quindi le soluzioni sono combinazioni di esponenziali decrescenti, eventualmente moltiplicati per $t$, che non oscillano. Infine $\gamma < \omega_0$ equivale a $\dfrac{R}{2L} < \dfrac{1}{\sqrt{LC}}$, cioè a $R < 2\sqrt{\dfrac{L}{C}}$.
:::
::::

:::osservazione{#energia-rlc titolo="Energia dissipata nel resistore"}
Derivando l'energia $U = \dfrac{q^2}{2C} + \dfrac{1}{2} L i^2$ e usando l'equazione del circuito si ottiene
$$
\frac{dU}{dt} = i \left( \frac{q}{C} + L\,\frac{di}{dt} \right) = -R\,i^2 ,
$$
quindi l'energia diminuisce con la rapidità $R i^2$, che è la potenza dissipata per **effetto Joule** nel resistore. Con smorzamento debole e $\gamma$ molto minore di $\omega_0$, l'energia è quella di un circuito $LC$ con carica massima $Q_0 e^{-\gamma t}$, cioè
$$
U(t) \approx \frac{Q_0^2}{2C}\,e^{-2\gamma t} = U_0\, e^{-\frac{R}{L} t} .
$$
L'energia si dimezza dopo il tempo $\dfrac{L \ln 2}{R}$; nel circuito con $R = 2{,}0\,\Omega$ e $L = 10\,\mathrm{mH}$ questo tempo vale circa $3{,}5\,\mathrm{ms}$, pari a circa cinque periodi e mezzo.
:::

## Tensioni e correnti alternate

:::definizione{#grandezza-alternata titolo="Tensione e corrente alternata"}
Una tensione si dice **alternata sinusoidale** se ha la forma
$$
v(t) = V_0 \sin(\omega t + \alpha) ,
$$
dove $V_0 > 0$ è l'ampiezza, o valore di picco, $\omega$ è la pulsazione, in $\mathrm{rad/s}$, e $\alpha$ è la fase iniziale. La frequenza è $f = \dfrac{\omega}{2\pi}$, in hertz, e il periodo è $T = \dfrac{1}{f}$. Analogamente una corrente alternata ha la forma $i(t) = I_0 \sin(\omega t + \beta)$. Una tensione alternata si ottiene da un alternatore, in cui una bobina ruota con velocità angolare costante in un campo magnetico uniforme, e si rimanda all'argomento sull'induzione elettromagnetica. La rete elettrica domestica europea ha frequenza $f = 50\,\mathrm{Hz}$, quindi pulsazione $\omega = 2\pi \cdot 50\,\mathrm{rad/s} \approx 314\,\mathrm{rad/s}$.
:::

:::definizione{#valore-efficace titolo="Valore efficace"}
Il **valore efficace** di una corrente periodica $i(t)$ di periodo $T$ è la radice quadrata del valor medio di $i^2$ su un periodo:
$$
I_{\text{eff}} = \sqrt{\frac{1}{T}\int_0^T i^2(t)\,dt} .
$$
Il valore efficace $V_{\text{eff}}$ di una tensione si definisce allo stesso modo. Il significato fisico segue dall'effetto Joule. Un resistore $R$ percorso dalla corrente $i(t)$ dissipa la potenza istantanea $R\,i^2$, quindi la potenza media su un periodo è $R\,I_{\text{eff}}^2$; il valore efficace è perciò l'intensità della corrente continua che dissipa in un resistore la stessa potenza media della corrente alternata.
:::

::::teorema{#efficace-sinusoidale titolo="Valore efficace di una grandezza sinusoidale"}
Per una corrente sinusoidale $i(t) = I_0 \sin(\omega t + \beta)$ e per una tensione sinusoidale $v(t) = V_0 \sin(\omega t + \alpha)$ si ha
$$
I_{\text{eff}} = \frac{I_0}{\sqrt{2}} , \qquad V_{\text{eff}} = \frac{V_0}{\sqrt{2}} .
$$
I valori di tensione e di corrente alternata dichiarati per la rete e per gli apparecchi sono valori efficaci, e su questi sono tarati voltmetri e amperometri per corrente alternata. La tensione di rete di $230\,\mathrm{V}$ ha quindi ampiezza $V_0 = 230\sqrt{2}\,\mathrm{V} \approx 325\,\mathrm{V}$.

:::dimostrazione
Per la formula di duplicazione $\sin^2\theta = \dfrac{1 - \cos(2\theta)}{2}$, quindi
$$
\frac{1}{T}\int_0^T I_0^2 \sin^2(\omega t + \beta)\,dt = \frac{I_0^2}{2} - \frac{I_0^2}{2T}\int_0^T \cos(2\omega t + 2\beta)\,dt = \frac{I_0^2}{2} ,
$$
perché il coseno compie due periodi completi nell'intervallo $[0, T]$ e il suo integrale è nullo. Estraendo la radice quadrata si ottiene la tesi; per la tensione il calcolo è identico.
:::
::::

## Resistore, condensatore e induttore in alternata

In questa sezione un generatore impone ai capi di un solo componente la tensione $v(t) = V_0 \sin(\omega t)$, e si determina la corrente a regime.

:::teorema{#resistore-in-alternata titolo="Resistore in alternata"}
Se ai capi di un resistore di resistenza $R$ c'è la tensione $v(t) = V_0 \sin(\omega t)$, la corrente è
$$
i(t) = \frac{V_0}{R}\,\sin(\omega t) ,
$$
quindi ha ampiezza $I_0 = \dfrac{V_0}{R}$ ed è **in fase** con la tensione. Il risultato segue dalla legge di Ohm, che vale istante per istante, e anche il rapporto tra i valori efficaci è $\dfrac{V_{\text{eff}}}{I_{\text{eff}}} = R$. Per la definizione di valore efficace la potenza media dissipata è $R\,I_{\text{eff}}^2 = \dfrac{V_{\text{eff}}^2}{R}$; una lampada a incandescenza da $60\,\mathrm{W}$ alimentata a $230\,\mathrm{V}$ ha quindi $R = \dfrac{230^2}{60}\,\Omega \approx 8{,}8 \cdot 10^2\,\Omega$ ed è percorsa dalla corrente efficace $\dfrac{60}{230}\,\mathrm{A} \approx 0{,}26\,\mathrm{A}$.
:::

::::teorema{#condensatore-in-alternata titolo="Condensatore in alternata"}
Se ai capi di un condensatore di capacità $C$ c'è la tensione $v(t) = V_0 \sin(\omega t)$, la corrente è
$$
i(t) = \omega C V_0 \cos(\omega t) = \frac{V_0}{X_C}\,\sin\left( \omega t + \frac{\pi}{2} \right) ,
\qquad
X_C = \frac{1}{\omega C} .
$$
La corrente è **in anticipo** di $\dfrac{\pi}{2}$ sulla tensione, cioè raggiunge il massimo un quarto di periodo prima, e le ampiezze sono legate da $V_0 = X_C I_0$. La grandezza $X_C$ si chiama **reattanza capacitiva** e si misura in ohm; nel rapporto tra le ampiezze ha il ruolo della resistenza, ma il condensatore non dissipa energia. Un condensatore da $10\,\mu\mathrm{F}$ alla frequenza di $50\,\mathrm{Hz}$ ha $X_C = \dfrac{1}{314 \cdot 10^{-5}}\,\Omega \approx 318\,\Omega$, e sotto la tensione di rete è percorso dalla corrente efficace $\dfrac{230}{318}\,\mathrm{A} \approx 0{,}72\,\mathrm{A}$.

::grafico{f="1.5*sin(x);cos(x)" segmenti="6.283,0,6.283,1;7.854,0,7.854,1.5" xmin=-0.5 xmax=13 ymin=-1.9 ymax=2.1 nomi="t," legenda="v(t);i(t)" titolo="Tensione e corrente ai capi di un condensatore: la corrente raggiunge il massimo un quarto di periodo prima della tensione, cioè è in anticipo di $\dfrac{\pi}{2}$"}

:::dimostrazione
In ogni istante la carica del condensatore è $q = Cv = CV_0\sin(\omega t)$, quindi
$$
i = \frac{dq}{dt} = \omega C V_0 \cos(\omega t) .
$$
Poiché $\cos(\omega t) = \sin\left( \omega t + \dfrac{\pi}{2} \right)$, la corrente ha ampiezza $\omega C V_0 = \dfrac{V_0}{X_C}$ e fase $\dfrac{\pi}{2}$.
:::
::::

::::teorema{#induttore-in-alternata titolo="Induttore in alternata"}
Se ai capi di un induttore ideale di induttanza $L$ c'è la tensione $v(t) = V_0 \sin(\omega t)$, la corrente a regime è
$$
i(t) = -\frac{V_0}{\omega L}\cos(\omega t) = \frac{V_0}{X_L}\,\sin\left( \omega t - \frac{\pi}{2} \right) ,
\qquad
X_L = \omega L .
$$
La corrente è **in ritardo** di $\dfrac{\pi}{2}$ sulla tensione, e le ampiezze sono legate da $V_0 = X_L I_0$. La grandezza $X_L$ si chiama **reattanza induttiva** e si misura in ohm, poiché $1\,\mathrm{H} \cdot 1\,\mathrm{s^{-1}} = 1\,\Omega$. Un induttore da $0{,}50\,\mathrm{H}$ alla frequenza di $50\,\mathrm{Hz}$ ha $X_L = 314 \cdot 0{,}50\,\Omega \approx 157\,\Omega$.

:::dimostrazione
La caduta di potenziale ai capi dell'induttore è $L\,\dfrac{di}{dt}$, quindi $\dfrac{di}{dt} = \dfrac{V_0}{L}\sin(\omega t)$ e, integrando,
$$
i(t) = -\frac{V_0}{\omega L}\cos(\omega t) + c .
$$
La costante $c$ è una corrente continua sovrapposta a quella alternata; per effetto della resistenza, anche piccola, di un induttore reale questa componente si annulla dopo un transitorio, quindi a regime $c = 0$. Poiché $-\cos(\omega t) = \sin\left( \omega t - \dfrac{\pi}{2} \right)$, la corrente ha ampiezza $\dfrac{V_0}{\omega L}$ e fase $-\dfrac{\pi}{2}$.
:::
::::

:::osservazione{#reattanze-e-frequenza titolo="Reattanze e frequenza"}
La reattanza induttiva $X_L = \omega L$ cresce con la pulsazione, mentre la reattanza capacitiva $X_C = \dfrac{1}{\omega C}$ decresce. Alle basse frequenze la reattanza capacitiva è grande e quella induttiva è piccola, quindi il condensatore lascia passare poca corrente e l'induttore ha ai capi una tensione piccola; alle alte frequenze accade il contrario. Nel limite $\omega \to 0$, cioè in corrente continua a regime, il condensatore interrompe il circuito e l'induttore ideale ha tensione nulla ai capi. Su questa dipendenza si basano i filtri, che separano le componenti di un segnale di frequenze diverse.
:::

## Fasori

:::definizione{#fasore titolo="Fasore"}
A una grandezza sinusoidale $a(t) = A_0 \sin(\omega t + \alpha)$ si associa il suo **fasore**, il vettore del piano di lunghezza $A_0$ che forma con l'asse orizzontale l'angolo $\omega t + \alpha$ e quindi ruota in verso antiorario con velocità angolare $\omega$. La componente verticale del fasore è, in ogni istante, $a(t)$.

Il fasore rende geometriche le operazioni sulle grandezze sinusoidali con la stessa pulsazione. I loro fasori ruotano insieme, quindi lo sfasamento tra due grandezze è l'angolo fisso tra i fasori. Inoltre la componente verticale di una somma di vettori è la somma delle componenti, perciò il fasore di $a(t) + b(t)$ è la somma vettoriale dei fasori. Per esempio, $3\sin(\omega t) + 4\sin\left( \omega t + \dfrac{\pi}{2} \right)$ ha per fasore la somma di due vettori perpendicolari di lunghezza $3$ e $4$, quindi è una sinusoide di ampiezza $5$ e fase $\arctan\dfrac{4}{3} \approx 0{,}93\,\mathrm{rad}$. Nei diagrammi i fasori si disegnano all'istante $t = 0$; spesso le lunghezze sono i valori efficaci al posto delle ampiezze, poiché le une differiscono dalle altre per il fattore comune $\sqrt{2}$ e gli angoli restano gli stessi.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" uguale=1 vettori="0,0,1.286,1.532,A₀" segmenti="1.286,1.532,0,1.532" punti="0,1.532,pieno" etichette="0.5,0.22,ωt + α;-0.45,1.68,a(t)" xmin=-2.7 xmax=2.9 ymin=-2.5 ymax=2.8 legenda=0 titolo="Il fasore di $a(t) = A_0 \sin(\omega t + \alpha)$ è un vettore di lunghezza $A_0$ che ruota in verso antiorario con velocità angolare $\omega$: la sua proiezione sull'asse verticale è $a(t)$"}

:::

:::richiamo{titolo="Forma esponenziale dei numeri complessi"}
Per ogni $\theta$ reale vale la formula di Eulero $e^{j\theta} = \cos\theta + j\sin\theta$, e ogni numero complesso non nullo si scrive $z = |z|\,e^{j\theta}$. Il prodotto di due numeri complessi ha per modulo il prodotto dei moduli e per argomento la somma degli argomenti; in particolare, moltiplicare per $j = e^{j\frac{\pi}{2}}$ ruota un numero di $\dfrac{\pi}{2}$ in verso antiorario nel piano di Gauss. In elettrotecnica l'unità immaginaria si indica con $j$, perché la lettera $i$ indica la corrente. Si rimanda all'argomento sui numeri complessi di Analisi 1.
:::

:::definizione{#impedenza-complessa titolo="Impedenza complessa"}
Identificando il piano dei fasori con il piano di Gauss, il fasore di $a(t) = A_0 \sin(\omega t + \alpha)$ all'istante $t = 0$ è il numero complesso $\tilde{A} = A_0\, e^{j\alpha}$, e $a(t)$ è la parte immaginaria di $\tilde{A}\,e^{j\omega t}$. L'**impedenza complessa** di un componente è il rapporto $Z = \dfrac{\tilde{V}}{\tilde{I}}$ tra il fasore della tensione ai suoi capi e il fasore della corrente che lo attraversa. Dai teoremi sul resistore, sul condensatore e sull'induttore in alternata seguono
$$
Z_R = R , \qquad Z_L = j\omega L , \qquad Z_C = \frac{1}{j\omega C} = -\frac{j}{\omega C} .
$$
Il modulo dell'impedenza è il rapporto tra le ampiezze, e l'argomento è l'anticipo della tensione sulla corrente; per l'induttore $|Z_L| = X_L$ e la tensione è in anticipo di $\dfrac{\pi}{2}$, per il condensatore $|Z_C| = X_C$ e la tensione è in ritardo di $\dfrac{\pi}{2}$.

Le leggi di Kirchhoff valgono istante per istante e il fasore di una somma è la somma dei fasori, quindi le leggi di Kirchhoff valgono anche per i fasori. Ne segue che componenti in serie hanno impedenza $Z = Z_1 + Z_2 + \dots$ e componenti in parallelo hanno $\dfrac{1}{Z} = \dfrac{1}{Z_1} + \dfrac{1}{Z_2} + \dots$, con le stesse regole delle resistenze in corrente continua. Per esempio, un resistore da $30\,\Omega$ in serie con un induttore di reattanza $40\,\Omega$ ha impedenza $Z = (30 + 40j)\,\Omega$, di modulo $50\,\Omega$.
:::

## Circuito RLC in serie in regime sinusoidale

::::teorema{#impedenza-rlc titolo="Impedenza del circuito RLC in serie"}
Un generatore di tensione alternata $v(t) = V_0 \sin(\omega t)$ alimenta un resistore $R$, un induttore $L$ e un condensatore $C$ collegati in serie. A regime la corrente è
$$
i(t) = I_0 \sin(\omega t - \varphi) ,
\qquad
I_0 = \frac{V_0}{Z} ,
$$
dove l'**impedenza** $Z$ e lo **sfasamento** $\varphi$ sono
$$
Z = \sqrt{R^2 + (X_L - X_C)^2} = \sqrt{R^2 + \left( \omega L - \frac{1}{\omega C} \right)^2} ,
\qquad
\tan\varphi = \frac{X_L - X_C}{R} , \quad -\frac{\pi}{2} < \varphi < \frac{\pi}{2} .
$$
La stessa relazione vale tra i valori efficaci, $I_{\text{eff}} = \dfrac{V_{\text{eff}}}{Z}$. Il teorema si applica anche ai circuiti con due soli componenti, ponendo $X_L = 0$ per un circuito $RC$ e $X_C = 0$ per un circuito $RL$. Al regime si arriva dopo un transitorio, che è una soluzione del circuito $RLC$ libero e si smorza come $e^{-\gamma t}$.

::grafico{assi=0 uguale=1 linee="0.42,1.5 0.41,1.57 0.4,1.63 0.37,1.69 0.34,1.75 0.3,1.8 0.25,1.84 0.19,1.87 0.13,1.9 0.07,1.91 0,1.92 -0.07,1.91 -0.13,1.9 -0.19,1.87 -0.25,1.84 -0.3,1.8 -0.34,1.75 -0.37,1.69 -0.4,1.63 -0.41,1.57 -0.42,1.5 -0.41,1.43 -0.4,1.37 -0.37,1.31 -0.34,1.25 -0.3,1.2 -0.25,1.16 -0.19,1.13 -0.13,1.1 -0.07,1.09 0,1.08 0.07,1.09 0.13,1.1 0.19,1.13 0.25,1.16 0.3,1.2 0.34,1.25 0.37,1.31 0.4,1.37 0.41,1.43 0.42,1.5;-0.25,1.5 -0.23,1.54 -0.2,1.57 -0.18,1.6 -0.15,1.62 -0.13,1.63 -0.1,1.62 -0.08,1.6 -0.05,1.57 -0.03,1.54 0,1.5 0.03,1.46 0.05,1.43 0.08,1.4 0.1,1.38 0.13,1.37 0.15,1.38 0.18,1.4 0.2,1.43 0.23,1.46 0.25,1.5;0,1.92 0,3 1,3;1,3 1.06,3.18 1.18,2.82 1.29,3.18 1.41,2.82 1.52,3.18 1.64,2.82 1.76,3.18 1.88,2.82 1.99,3.18 2.11,2.82 2.22,3.18 2.34,2.82 2.4,3;2.4,3 3.4,3;3.4,3 3.41,3.05 3.43,3.1 3.47,3.14 3.52,3.17 3.57,3.17 3.63,3.17 3.68,3.14 3.72,3.1 3.74,3.05 3.75,3 3.75,3 3.76,3.05 3.78,3.1 3.82,3.14 3.87,3.17 3.92,3.17 3.98,3.17 4.03,3.14 4.07,3.1 4.09,3.05 4.1,3 4.1,3 4.11,3.05 4.13,3.1 4.17,3.14 4.22,3.17 4.28,3.17 4.33,3.17 4.38,3.14 4.42,3.1 4.44,3.05 4.45,3 4.45,3 4.46,3.05 4.48,3.1 4.52,3.14 4.57,3.17 4.62,3.17 4.68,3.17 4.73,3.14 4.77,3.1 4.79,3.05 4.8,3;4.8,3 6,3 6,1.63;5.58,1.63 6.42,1.63;5.58,1.37 6.42,1.37;6,1.37 6,0 0,0 0,1.08" vettori="3.4,0,2.6,0,i" etichette="1.55,3.5,R;3.95,3.65,L;6.6,1.38,C;-1.5,1.38,v(t)" xmin=-1.7 xmax=7.2 ymin=-0.6 ymax=4.0 titolo="Circuito $RLC$ in serie alimentato dal generatore di tensione alternata $v(t) = V_0 \sin(\omega t)$"}

:::dimostrazione
Nei tre componenti in serie passa la stessa corrente, e il suo fasore è $\tilde{I} = I_0\,e^{-j\varphi}$. Per la definizione di impedenza complessa i fasori delle tensioni ai capi dei componenti sono $R\,\tilde{I}$, $jX_L\,\tilde{I}$ e $-jX_C\,\tilde{I}$, e per la legge delle maglie la loro somma è il fasore $\tilde{V} = V_0$ della tensione del generatore:
$$
V_0 = \left( R + j(X_L - X_C) \right) I_0\, e^{-j\varphi} .
$$
Il numero complesso $R + j(X_L - X_C)$ ha modulo $Z$ e argomento $\varphi$, con $\tan\varphi = \dfrac{X_L - X_C}{R}$ e $\varphi \in \left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$ perché la parte reale $R$ è positiva. Quindi $V_0 = Z\,e^{j\varphi} \cdot I_0\,e^{-j\varphi} = Z I_0$, cioè $I_0 = \dfrac{V_0}{Z}$. In termini geometrici, il fasore della tensione sul resistore ha la direzione della corrente, i fasori delle tensioni sull'induttore e sul condensatore sono perpendicolari a essa e opposti tra loro, e la tensione del generatore è l'ipotenusa del triangolo rettangolo di cateti $R I_0$ e $(X_L - X_C)\, I_0$.
:::
::::

:::osservazione{#carattere-induttivo-capacitivo titolo="Circuito induttivo e circuito capacitivo"}
Il segno dello sfasamento dipende da quale reattanza prevale.

- Se $X_L > X_C$, allora $\varphi > 0$ e la corrente è in ritardo sulla tensione; il circuito si dice **induttivo**.
- Se $X_L < X_C$, allora $\varphi < 0$ e la corrente è in anticipo sulla tensione; il circuito si dice **capacitivo**.
- Se $X_L = X_C$, allora $\varphi = 0$ e $Z = R$, quindi corrente e tensione sono in fase come in un resistore; è la condizione di risonanza.
:::

:::esempio{titolo="Circuito RLC alimentato dalla rete"}
Un resistore da $40\,\Omega$, un induttore da $0{,}20\,\mathrm{H}$ e un condensatore da $100\,\mu\mathrm{F}$ in serie sono alimentati dalla rete, con $V_{\text{eff}} = 230\,\mathrm{V}$ e $f = 50\,\mathrm{Hz}$. Le reattanze sono $X_L = 314 \cdot 0{,}20\,\Omega \approx 62{,}8\,\Omega$ e $X_C = \dfrac{1}{314 \cdot 10^{-4}}\,\Omega \approx 31{,}8\,\Omega$, quindi
$$
Z = \sqrt{40^2 + 31{,}0^2}\,\Omega \approx 50{,}6\,\Omega ,
\qquad
I_{\text{eff}} = \frac{230}{50{,}6}\,\mathrm{A} \approx 4{,}5\,\mathrm{A} ,
\qquad
\varphi = \arctan\frac{31{,}0}{40} \approx 38^\circ .
$$
Il circuito è induttivo e la corrente è in ritardo di circa $38^\circ$ sulla tensione. Le tensioni efficaci ai capi dei componenti sono $V_R = R I_{\text{eff}} \approx 182\,\mathrm{V}$, $V_L = X_L I_{\text{eff}} \approx 286\,\mathrm{V}$ e $V_C = X_C I_{\text{eff}} \approx 145\,\mathrm{V}$.

::grafico{assi=0 uguale=1 vettori="0,0,3.03,2.35,V;0,0,0,4.76,VL;0,0,0,-2.41,VC;0,0,3.03,0" segmenti="3.03,0,3.03,2.35;0,2.35,3.03,2.35" etichette="0.42,0.12,φ;1.31,-0.45,VR" xmin=-4 xmax=7.4 ymin=-2.9 ymax=5.4 titolo="Fasori delle tensioni efficaci nell'esempio: $V_R$ ha la direzione della corrente, $V_L$ è in anticipo di $\dfrac{\pi}{2}$, $V_C$ in ritardo di $\dfrac{\pi}{2}$, e la somma $V$ forma con la corrente l'angolo $\varphi$"}

:::

:::attenzione{#tensioni-sfasate}
Le tensioni efficaci ai capi di componenti in serie *non* si sommano come numeri, perché sono sfasate. Nel circuito $RLC$ alimentato dalla rete si ha $V_R + V_L + V_C \approx 612\,\mathrm{V}$, mentre il generatore fornisce $230\,\mathrm{V}$; la relazione corretta è quella tra i fasori, $V_{\text{eff}} = \sqrt{V_R^2 + (V_L - V_C)^2} = \sqrt{182^2 + 141^2}\,\mathrm{V} \approx 230\,\mathrm{V}$. In particolare la tensione ai capi dell'induttore, $286\,\mathrm{V}$, supera quella del generatore.
:::

## Risonanza

::::teorema{#risonanza-rlc titolo="Risonanza del circuito RLC in serie"}
Nel circuito $RLC$ in serie alimentato con una tensione di ampiezza $V_0$ fissata e pulsazione $\omega$ variabile, l'ampiezza della corrente
$$
I_0(\omega) = \frac{V_0}{\sqrt{R^2 + \left( \omega L - \frac{1}{\omega C} \right)^2}}
$$
è massima per $\omega = \omega_0 = \dfrac{1}{\sqrt{LC}}$, la pulsazione propria del circuito $LC$. Alla **risonanza** si ha $X_L = X_C$, $Z = R$, $\varphi = 0$ e $I_0 = \dfrac{V_0}{R}$. La risonanza permette di selezionare una frequenza; per esempio, un ricevitore radio sceglie una stazione regolando la capacità di un circuito oscillante finché $f_0$ coincide con la frequenza della stazione. Con $L = 0{,}25\,\mathrm{mH}$, una stazione a $1{,}0\,\mathrm{MHz}$ richiede $C = \dfrac{1}{(2\pi f_0)^2 L} \approx 1{,}0 \cdot 10^{-10}\,\mathrm{F} = 100\,\mathrm{pF}$.

::grafico{f="500/sqrt(50^2+(20*x-2000/x)^2)+0*sqrt(x);500/sqrt(100^2+(20*x-2000/x)^2)+0*sqrt(x)" asintoti="x=10" xmin=-0.4 xmax=19.5 ymin=-0.5 ymax=12 nomi="ω,I" legenda="R = 50\,\Omega;R = 100\,\Omega" titolo="Corrente efficace in funzione della pulsazione ($\omega$ in $10^3\,\mathrm{rad/s}$, $I_{\text{eff}}$ in $\mathrm{mA}$) per $L = 20\,\mathrm{mH}$, $C = 0{,}50\,\mu\mathrm{F}$ e $V_{\text{eff}} = 0{,}50\,\mathrm{V}$: il massimo è in $\omega_0 = 10^4\,\mathrm{rad/s}$, e con la resistenza minore il picco è più alto e più stretto"}

:::dimostrazione
Il numeratore $V_0$ non dipende da $\omega$, quindi $I_0$ è massima dove il denominatore è minimo. Il radicando è la somma della costante $R^2$ e del quadrato $\left( \omega L - \dfrac{1}{\omega C} \right)^2 \geq 0$, che si annulla se e solo se $\omega L = \dfrac{1}{\omega C}$, cioè per $\omega^2 = \dfrac{1}{LC}$. In quel punto il denominatore assume il valore minimo $R$, e $\tan\varphi = 0$.
:::
::::

:::definizione{#fattore-di-qualita titolo="Fattore di qualità e banda passante"}
Il **fattore di qualità** del circuito $RLC$ in serie è il numero puro
$$
Q = \frac{\omega_0 L}{R} = \frac{1}{R}\sqrt{\frac{L}{C}} .
$$
La **banda passante** è l'intervallo delle pulsazioni in cui $I_0 \geq \dfrac{I_{0,\max}}{\sqrt{2}}$, cioè in cui la potenza dissipata nel resistore è almeno la metà di quella alla risonanza. Agli estremi si ha $Z = \sqrt{2}\,R$, cioè $\omega L - \dfrac{1}{\omega C} = \pm R$; le soluzioni positive di queste due equazioni di secondo grado in $\omega$ sono $\omega_\pm = \sqrt{\omega_0^2 + \dfrac{R^2}{4L^2}} \pm \dfrac{R}{2L}$, quindi l'ampiezza della banda è
$$
\Delta\omega = \omega_+ - \omega_- = \frac{R}{L} = \frac{\omega_0}{Q} .
$$
Un fattore di qualità grande corrisponde a una risonanza stretta, cioè a un circuito molto selettivo. Il circuito del ricevitore radio con $L = 0{,}25\,\mathrm{mH}$ e $f_0 = 1{,}0\,\mathrm{MHz}$, se ha $R = 10\,\Omega$, ha $Q = \dfrac{2\pi \cdot 10^6 \cdot 2{,}5 \cdot 10^{-4}}{10} \approx 157$ e $\Delta\omega = 4{,}0 \cdot 10^4\,\mathrm{rad/s}$, cioè una banda larga circa $6{,}4\,\mathrm{kHz}$ in frequenza.
:::

:::osservazione{#tensioni-alla-risonanza titolo="Tensioni sull'induttore e sul condensatore alla risonanza"}
Alla risonanza le tensioni ai capi dell'induttore e del condensatore hanno la stessa ampiezza $X_L I_0 = \omega_0 L\,\dfrac{V_0}{R} = Q\,V_0$ e sono in opposizione di fase, quindi la loro somma è nulla in ogni istante e la tensione del generatore è uguale alla tensione ai capi del resistore. Se $Q$ è grande, ciascuna delle due tensioni è molto maggiore di quella del generatore; per esempio, con $V_{\text{eff}} = 5{,}0\,\mathrm{V}$ e $Q = 20$ il condensatore è sottoposto a una tensione efficace di $100\,\mathrm{V}$, e di questo si tiene conto nella scelta dei componenti.
:::

## Potenza in corrente alternata

::::teorema{#potenza-media titolo="Potenza media"}
Un circuito alimentato dalla tensione $v(t) = V_0 \sin(\omega t)$ e percorso dalla corrente $i(t) = I_0 \sin(\omega t - \varphi)$ assorbe la potenza istantanea $p(t) = v(t)\,i(t)$, il cui valor medio su un periodo è
$$
P = \frac{1}{2} V_0 I_0 \cos\varphi = V_{\text{eff}}\, I_{\text{eff}} \cos\varphi .
$$
La potenza media dipende quindi dallo sfasamento, oltre che dai valori efficaci. Per un resistore $\varphi = 0$ e $P = V_{\text{eff}} I_{\text{eff}}$. Per un induttore o un condensatore ideali $\varphi = \pm\dfrac{\pi}{2}$ e $P = 0$, perché l'energia immagazzinata in un quarto di periodo viene restituita al generatore nel quarto successivo.

::grafico{f="3*sin(x)*sin(x-pi/3);0.75" xmin=-0.5 xmax=13 ymin=-1 ymax=2.6 nomi="t,p" legenda="p(t);P" titolo="Potenza istantanea $p(t) = v(t)\,i(t)$ con sfasamento $\varphi = \dfrac{\pi}{3}$: oscilla con frequenza doppia attorno al valore medio $P = \dfrac{1}{2} V_0 I_0 \cos\varphi$ ed è negativa negli intervalli in cui il circuito restituisce energia al generatore"}

:::dimostrazione
Per la formula di Werner $\sin a \sin b = \dfrac{1}{2}\left( \cos(a - b) - \cos(a + b) \right)$ si ha
$$
p(t) = V_0 I_0 \sin(\omega t)\sin(\omega t - \varphi) = \frac{1}{2} V_0 I_0 \cos\varphi - \frac{1}{2} V_0 I_0 \cos(2\omega t - \varphi) .
$$
Il primo termine è costante; il secondo oscilla con pulsazione $2\omega$, compie due periodi completi in un periodo $T$ e ha quindi media nulla. Perciò $P = \dfrac{1}{2} V_0 I_0 \cos\varphi$, e per il valore efficace di una grandezza sinusoidale $\dfrac{1}{2} V_0 I_0 = \dfrac{V_0}{\sqrt{2}} \cdot \dfrac{I_0}{\sqrt{2}} = V_{\text{eff}} I_{\text{eff}}$.
:::
::::

:::definizione{#fattore-di-potenza titolo="Fattore di potenza"}
Il **fattore di potenza** di un circuito è $\cos\varphi$, dove $\varphi$ è lo sfasamento tra tensione e corrente; per un circuito passivo è compreso tra $0$ e $1$. Nel circuito $RLC$ in serie il triangolo dei fasori dà $\cos\varphi = \dfrac{R}{Z}$, e poiché $V_{\text{eff}} = Z I_{\text{eff}}$ si ottiene
$$
P = V_{\text{eff}}\, I_{\text{eff}}\,\frac{R}{Z} = R\, I_{\text{eff}}^2 .
$$
Tutta la potenza media è dissipata nel resistore, mentre l'induttore e il condensatore scambiano energia con il generatore senza assorbirne in media. Nel circuito $RLC$ alimentato dalla rete si ha $\cos\varphi = \dfrac{40}{50{,}6} \approx 0{,}79$ e $P = 40 \cdot 4{,}54^2\,\mathrm{W} \approx 8{,}3 \cdot 10^2\,\mathrm{W}$.
:::

:::osservazione{#rifasamento titolo="Rifasamento"}
Un utilizzatore che assorbe la potenza media $P$ alla tensione $V_{\text{eff}}$ richiede dalla linea la corrente $I_{\text{eff}} = \dfrac{P}{V_{\text{eff}} \cos\varphi}$, tanto maggiore quanto minore è il fattore di potenza. Un motore da $2{,}0\,\mathrm{kW}$ alimentato a $230\,\mathrm{V}$ assorbe circa $12\,\mathrm{A}$ con $\cos\varphi = 0{,}70$ e circa $9{,}2\,\mathrm{A}$ con $\cos\varphi = 0{,}95$. La potenza dissipata nei fili della linea è proporzionale a $I_{\text{eff}}^2$, perciò le perdite sono minori quando il fattore di potenza è vicino a $1$. I motori sono carichi induttivi, e il loro fattore di potenza si aumenta collegando in parallelo un condensatore, la cui corrente in anticipo compensa la componente in ritardo della corrente del motore; l'operazione si chiama **rifasamento**.
:::

## Trasformatore

:::richiamo{titolo="Legge di Faraday-Neumann-Lenz"}
In una bobina di $N$ spire, ciascuna attraversata dal flusso magnetico $\Phi_B(t)$, si induce la f.e.m. $\mathcal{E} = -N\,\dfrac{d\Phi_B}{dt}$. Si rimanda all'argomento sull'induzione elettromagnetica.
:::

::::teorema{#trasformatore titolo="Trasformatore ideale"}
Un trasformatore è formato da due avvolgimenti, il **primario** con $N_1$ spire e il **secondario** con $N_2$ spire, avvolti su uno stesso nucleo di ferro. Si supponga che tutto il flusso magnetico attraversi entrambi gli avvolgimenti, che le loro resistenze siano trascurabili e che nel nucleo non ci siano perdite di energia. Se al primario è applicata una tensione alternata, al secondario compare una tensione alternata della stessa frequenza, e i valori efficaci soddisfano
$$
\frac{V_{2,\text{eff}}}{V_{1,\text{eff}}} = \frac{N_2}{N_1} ,
\qquad
\frac{I_{2,\text{eff}}}{I_{1,\text{eff}}} = \frac{N_1}{N_2} ,
$$
dove la seconda relazione riguarda il caso in cui al secondario è collegato un carico. Con $N_2 > N_1$ il trasformatore eleva la tensione e riduce la corrente, con $N_2 < N_1$ abbassa la tensione e aumenta la corrente, e il prodotto $V_{\text{eff}} I_{\text{eff}}$ è lo stesso nei due avvolgimenti. Un alimentatore che porta la tensione di rete da $230\,\mathrm{V}$ a $6{,}0\,\mathrm{V}$ con $N_1 = 920$ spire ha $N_2 = 920 \cdot \dfrac{6{,}0}{230} = 24$ spire. Il trasformatore richiede una tensione variabile, perché una tensione continua al primario produce a regime un flusso costante, che non induce alcuna f.e.m. nel secondario.

::grafico{assi=0 uguale=1 poligoni="1,0 2,0 2,4 1,4;4,0 5,0 5,4 4,4;2,3 4,3 4,4 2,4;2,0 4,0 4,1 2,1" linee="-0.5,0.8 0.8,0.8 2.2,1 0.8,1.2 2.2,1.4 0.8,1.6 2.2,1.8 0.8,2 2.2,2.2 0.8,2.4 2.2,2.6 0.8,2.8 2.2,3 0.8,3.2 -0.5,3.2;6.5,1.3 5.2,1.3 3.8,1.53 5.2,1.77 3.8,2 5.2,2.23 3.8,2.47 5.2,2.7 6.5,2.7" punti="-0.5,0.8,vuoto;-0.5,3.2,vuoto;6.5,1.3,vuoto;6.5,2.7,vuoto" etichette="-1.25,1.9,V₁;6.75,1.9,V₂;1.15,4.35,N₁;4.15,4.35,N₂" xmin=-1.5 xmax=7.5 ymin=-0.4 ymax=4.8 titolo="Trasformatore: il primario con $N_1$ spire e il secondario con $N_2$ spire sono avvolti sullo stesso nucleo di ferro, che convoglia il flusso magnetico dall'uno all'altro"}

:::dimostrazione
Sia $\Phi_B(t)$ il flusso del campo magnetico attraverso una spira, uguale per ipotesi in tutte le spire dei due avvolgimenti. Per la **legge di Faraday-Neumann-Lenz** la f.e.m. indotta nel primario è $-N_1\,\dfrac{d\Phi_B}{dt}$ e quella indotta nel secondario è $-N_2\,\dfrac{d\Phi_B}{dt}$. La resistenza del primario è trascurabile, quindi per la legge delle maglie la tensione applicata $v_1$ è uguale in modulo alla f.e.m. indotta nel primario; anche il secondario ha resistenza trascurabile, quindi la tensione $v_2$ ai suoi capi è uguale in modulo alla f.e.m. indotta in esso. Perciò in ogni istante
$$
v_2(t) = \pm \frac{N_2}{N_1}\, v_1(t) ,
$$
con il segno fissato dal verso degli avvolgimenti, e lo stesso rapporto vale tra i valori efficaci. Nel trasformatore ideale non ci sono perdite e le due correnti hanno lo stesso sfasamento rispetto alle rispettive tensioni, quindi la potenza media assorbita dal primario è uguale a quella ceduta al carico, $V_{1,\text{eff}} I_{1,\text{eff}} = V_{2,\text{eff}} I_{2,\text{eff}}$. Ne segue $\dfrac{I_{2,\text{eff}}}{I_{1,\text{eff}}} = \dfrac{V_{1,\text{eff}}}{V_{2,\text{eff}}} = \dfrac{N_1}{N_2}$.
:::
::::

:::osservazione{#trasporto-energia titolo="Trasporto dell'energia elettrica ad alta tensione"}
Una centrale che invia la potenza $P$ lungo una linea di resistenza $R_\ell$, con tensione efficace $V$ e fattore di potenza $1$, fa circolare nella linea la corrente efficace $I = \dfrac{P}{V}$ e vi perde la potenza
$$
P_{\text{persa}} = R_\ell\, I^2 = \frac{R_\ell\, P^2}{V^2} .
$$
A parità di potenza trasmessa, le perdite sono inversamente proporzionali al quadrato della tensione. Per $P = 1{,}0\,\mathrm{MW}$ e $R_\ell = 5{,}0\,\Omega$ si perdono $50\,\mathrm{kW}$ a $10\,\mathrm{kV}$ e solo $500\,\mathrm{W}$ a $100\,\mathrm{kV}$. Per questo l'energia elettrica si trasporta ad alta tensione; i trasformatori elevano la tensione all'uscita della centrale e la abbassano vicino agli utilizzatori, e la possibilità di farlo è uno dei motivi per cui la rete di distribuzione funziona in corrente alternata.
:::
