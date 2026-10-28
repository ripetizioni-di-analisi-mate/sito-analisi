---
titolo: Sorgenti del campo magnetico
sommario: Come le correnti producono il campo magnetico, dalla legge di Biot-Savart ai campi di fili, spire e archi, alla forza tra fili paralleli e alla definizione dell'ampere, fino alla legge di Ampère con le sue applicazioni a filo, cavo coassiale, solenoide e toroide, al flusso del campo magnetico e a un cenno ai materiali magnetici.
---

## Legge di Biot-Savart

In tutto l'argomento le correnti sono stazionarie, i conduttori si trovano nel vuoto, salvo dove si trattano i materiali magnetici, e i fili sono filiformi, cioè di sezione trascurabile rispetto alle distanze in gioco.

:::richiamo{titolo="Prodotto vettoriale"}
Il prodotto vettoriale $\vec{a} \times \vec{b}$ è il vettore di modulo $a\,b\sin\varphi$, dove $\varphi \in [0, \pi]$ è l'angolo tra i due vettori, perpendicolare sia ad $\vec{a}$ sia a $\vec{b}$ e orientato con la regola della mano destra; in particolare $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$. Si rimanda all'argomento sui vettori di Algebra lineare.
:::

:::teorema{#legge-di-biot-savart titolo="Legge di Biot-Savart"}
Si consideri un circuito filiforme percorso dalla corrente stazionaria $I$. Un tratto infinitesimo del filo, rappresentato dal vettore $d\vec{l}$ tangente al filo e orientato nel verso della corrente, produce nel punto $P$ il campo magnetico
$$
d\vec{B} = \frac{\mu_0}{4\pi}\,\frac{I\,d\vec{l} \times \hat{r}}{r^2} ,
$$
dove $\vec{r}$ è il vettore che va dal tratto al punto $P$, $r$ è il suo modulo e $\hat{r}$ il suo versore. Il campo dell'intero circuito è la somma di tutti i contributi:
$$
\vec{B}(P) = \frac{\mu_0 I}{4\pi} \oint \frac{d\vec{l} \times \hat{r}}{r^2} .
$$
La costante $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ è la **permeabilità magnetica del vuoto**. La legge di Biot-Savart è una legge sperimentale, ricavata nel 1820 dalle misure del campo prodotto da fili di varie forme, e ha per il campo magnetico lo stesso ruolo che la legge di Coulomb ha per il campo elettrico: dalla distribuzione delle correnti dà il campo in ogni punto.

Il modulo del contributo è $dB = \dfrac{\mu_0}{4\pi}\,\dfrac{I\,dl\,\sin\varphi}{r^2}$, con $\varphi$ angolo tra $d\vec{l}$ e $\vec{r}$; quindi decresce con il quadrato della distanza ed è nullo nei punti allineati con il tratto. Per esempio, un tratto lungo $1{,}0\,\mathrm{mm}$ di un filo percorso da $10\,\mathrm{A}$ produce, in un punto a $5{,}0\,\mathrm{cm}$ in direzione perpendicolare al filo, il contributo $dB = 10^{-7} \cdot \dfrac{10 \cdot 1{,}0 \cdot 10^{-3}}{(5{,}0 \cdot 10^{-2})^2}\,\mathrm{T} = 4{,}0 \cdot 10^{-7}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 linee="4.200,3.000 4.192,3.038 4.170,3.070 4.138,3.092 4.100,3.100 4.062,3.092 4.030,3.070 4.008,3.038 4.000,3.000 4.008,2.962 4.030,2.930 4.062,2.908 4.100,2.900 4.138,2.908 4.170,2.930 4.192,2.962 4.200,3.000;4.030,2.930 4.170,3.070;4.030,3.070 4.170,2.930;0,-0.6 0,4.6" vettori="0,1.4,0,2.3;0,1.85,3.4,3.6,r" punti="3.4,3.6,pieno,P" etichette="-0.85,1.75,I dl;0.25,2.55,φ;4.35,2.85,dB" xmin=-1 xmax=5.2 ymin=-0.8 ymax=4.6 titolo="Il tratto $d\vec{l}$ del filo produce in $P$ il contributo $d\vec{B}$, perpendicolare sia a $d\vec{l}$ sia a $\vec{r}$: qui entra nel foglio"}

:::

:::osservazione{#regola-mano-destra titolo="Direzione e verso del campo"}
Il contributo $d\vec{B}$ è perpendicolare al piano che contiene $d\vec{l}$ e $\vec{r}$, e il suo verso si trova con la **regola della mano destra**: con il pollice nel verso della corrente, le dita piegate indicano il verso in cui il campo gira attorno al filo. Nelle figure il simbolo $\odot$ indica un vettore uscente dal foglio e il simbolo $\otimes$ un vettore entrante.

Un tratto $d\vec{l}$ isolato non esiste: una corrente stazionaria scorre in un circuito chiuso, e ha significato misurabile solo l'integrale esteso a tutto il circuito. Quando si calcola il contributo di una parte del circuito, per esempio di un tratto rettilineo, si sottintende che il resto del circuito sia lontano oppure che il suo contributo si sommi a parte.
:::

:::osservazione{#campo-carica-in-moto titolo="Campo di una carica in moto"}
Un tratto di filo di sezione $A$ e lunghezza $dl$ contiene $n A\,dl$ portatori di carica $q$, dove $n$ è il numero di portatori per unità di volume, che si muovono con la velocità di deriva $\vec{v}$; poiché $I = n q v A$, si ha $I\,d\vec{l} = (n A\,dl)\,q\vec{v}$. Dividendo il contributo di Biot-Savart per il numero di portatori si ottiene il campo di una singola carica $q$ con velocità $\vec{v}$, valido per $v$ molto minore di $c$:
$$
\vec{B} = \frac{\mu_0}{4\pi}\,\frac{q\,\vec{v} \times \hat{r}}{r^2} .
$$
Il campo magnetico ha quindi come sorgenti le cariche in moto. Per la velocità di deriva si rimanda all'argomento sulla corrente elettrica e i circuiti in corrente continua.
:::

## Campo di un filo rettilineo

::::teorema{#campo-segmento-rettilineo titolo="Campo di un tratto rettilineo"}
Si consideri un tratto rettilineo di un circuito, percorso dalla corrente $I$, e un punto $P$ a distanza $d$ dalla retta del tratto. Sia $H$ il piede della perpendicolare condotta da $P$ alla retta, e sia $s$ la coordinata lungo la retta con origine in $H$, orientata nel verso della corrente; il tratto va da $s_1$ a $s_2$, con $s_1 < s_2$. Il contributo del tratto al campo in $P$ è perpendicolare al piano che contiene il filo e $P$, e ha modulo
$$
B = \frac{\mu_0 I}{4\pi d} \left( \frac{s_2}{\sqrt{s_2^2 + d^2}} - \frac{s_1}{\sqrt{s_1^2 + d^2}} \right) = \frac{\mu_0 I}{4\pi d}\,(\sin\theta_2 - \sin\theta_1) ,
$$
dove $\theta_1$ e $\theta_2$ sono gli angoli tra $PH$ e le congiungenti di $P$ con gli estremi, presi positivi dalla parte verso cui scorre la corrente e negativi dalla parte opposta.

La formula serve per i circuiti formati da tratti rettilinei, come una spira quadrata o rettangolare: il campo in un punto è la somma vettoriale dei contributi dei lati. Per un tratto lungo $30\,\mathrm{cm}$ percorso da $5{,}0\,\mathrm{A}$, in un punto a $d = 10\,\mathrm{cm}$ dal suo punto medio si ha $s_2 = -s_1 = 0{,}15\,\mathrm{m}$, quindi $B = \dfrac{10^{-7} \cdot 5{,}0}{0{,}10} \cdot 2 \cdot \dfrac{0{,}15}{\sqrt{0{,}15^2 + 0{,}10^2}}\,\mathrm{T} \approx 8{,}3 \cdot 10^{-6}\,\mathrm{T}$.

::grafico{assi=0 uguale=1 linee="0.853,2.200 0.845,2.239 0.823,2.273 0.789,2.295 0.750,2.303 0.711,2.295 0.677,2.273 0.655,2.239 0.647,2.200 0.655,2.161 0.677,2.127 0.711,2.105 0.750,2.097 0.789,2.105 0.823,2.127 0.845,2.161 0.853,2.200;-1.5,0 3.5,0" vettori="1.1,0,2.3,0,I" segmenti="0,2.2,-1.5,0;0,2.2,3.5,0;0,2.2,0,0" punti="0.750,2.200,pieno;0,2.2,pieno,P;0,0,pieno,H;-1.5,0,pieno;3.5,0,pieno" etichette="-0.62,1.3,θ₁;0.32,1.45,θ₂;-0.38,0.75,d;-1.75,-0.5,s₁;3.35,-0.5,s₂;0.95,2.05,B" xmin=-2.2 xmax=4.2 ymin=-0.9 ymax=2.8 titolo="Tratto rettilineo da $s_1$ a $s_2$ e punto $P$ a distanza $d$; con la corrente verso destra il campo in $P$ esce dal foglio"}

:::dimostrazione
Si scelgono l'asse $x$ lungo il filo, con origine in $H$ e orientato come la corrente, e l'asse $y$ verso $P$, così che $P = (0, d)$. Il tratto infinitesimo in posizione $s$ è $d\vec{l} = ds\,\hat{\imath}$, e il vettore che va dal tratto a $P$ è $\vec{r} = -s\,\hat{\imath} + d\,\hat{\jmath}$, di modulo $\sqrt{s^2 + d^2}$. Poiché $\hat{\imath} \times \hat{\imath} = \vec{0}$ e $\hat{\imath} \times \hat{\jmath} = \hat{k}$,
$$
d\vec{l} \times \vec{r} = d\,ds\,\hat{k} ,
\qquad
d\vec{B} = \frac{\mu_0 I}{4\pi}\,\frac{d\vec{l} \times \vec{r}}{r^3} = \frac{\mu_0 I}{4\pi}\,\frac{d\,ds}{(s^2 + d^2)^{\frac{3}{2}}}\,\hat{k} .
$$
Tutti i contributi hanno quindi la direzione e il verso di $\hat{k}$, e i moduli si sommano. Con la sostituzione $s = d\tan u$ si ha $ds = \dfrac{d}{\cos^2 u}\,du$ e $(s^2 + d^2)^{\frac{3}{2}} = \dfrac{d^3}{\cos^3 u}$, perciò
$$
\int \frac{d\,ds}{(s^2 + d^2)^{\frac{3}{2}}} = \frac{1}{d} \int \cos u\,du = \frac{\sin u}{d} = \frac{s}{d\sqrt{s^2 + d^2}} + c .
$$
Calcolando la primitiva tra $s_1$ e $s_2$ si ottiene la tesi; infine $\dfrac{s_i}{\sqrt{s_i^2 + d^2}} = \sin\theta_i$, perché $s_i$ è il cateto opposto a $\theta_i$ nel triangolo rettangolo di cateto $PH = d$.
:::
::::

::::teorema{#campo-filo-rettilineo titolo="Campo di un filo rettilineo infinito"}
Un filo rettilineo infinito percorso dalla corrente $I$ produce, a distanza $d$ dal filo, un campo di modulo
$$
B = \frac{\mu_0 I}{2\pi d} .
$$
Le linee di campo sono circonferenze centrate sul filo, in piani perpendicolari al filo, percorse nel verso dato dalla regola della mano destra. Un filo **semi-infinito** che termina nel piede $H$ della perpendicolare condotta da $P$ produce in $P$ un campo di modulo $\dfrac{\mu_0 I}{4\pi d}$, metà del precedente.

Il filo infinito è il modello di un filo rettilineo lungo, nei punti la cui distanza dal filo è piccola rispetto alla distanza dagli estremi e dal resto del circuito. Un filo percorso da $10\,\mathrm{A}$ produce a $2{,}0\,\mathrm{cm}$ il campo $B = \dfrac{4\pi \cdot 10^{-7} \cdot 10}{2\pi \cdot 0{,}020}\,\mathrm{T} = 1{,}0 \cdot 10^{-4}\,\mathrm{T}$, dello stesso ordine di grandezza del campo magnetico terrestre, che vale alcune volte $10^{-5}\,\mathrm{T}$. Il campo è inversamente proporzionale alla distanza: a $4{,}0\,\mathrm{cm}$ dallo stesso filo vale la metà.

::grafico{punti="0.000,0.000,pieno" assi=0 uguale=1 linee="0.116,0.000 0.107,0.044 0.082,0.082 0.044,0.107 0.000,0.116 -0.044,0.107 -0.082,0.082 -0.107,0.044 -0.116,0.000 -0.107,-0.044 -0.082,-0.082 -0.044,-0.107 -0.000,-0.116 0.044,-0.107 0.082,-0.082 0.107,-0.044 0.116,-0.000;1.00,0.00 0.98,0.17 0.94,0.34 0.87,0.50 0.77,0.64 0.64,0.77 0.50,0.87 0.34,0.94 0.17,0.98 0.00,1.00 -0.17,0.98 -0.34,0.94 -0.50,0.87 -0.64,0.77 -0.77,0.64 -0.87,0.50 -0.94,0.34 -0.98,0.17 -1.00,0.00 -0.98,-0.17 -0.94,-0.34 -0.87,-0.50 -0.77,-0.64 -0.64,-0.77 -0.50,-0.87 -0.34,-0.94 -0.17,-0.98 -0.00,-1.00 0.17,-0.98 0.34,-0.94 0.50,-0.87 0.64,-0.77 0.77,-0.64 0.87,-0.50 0.94,-0.34 0.98,-0.17 1.00,-0.00;2.00,0.00 1.97,0.35 1.88,0.68 1.73,1.00 1.53,1.29 1.29,1.53 1.00,1.73 0.68,1.88 0.35,1.97 0.00,2.00 -0.35,1.97 -0.68,1.88 -1.00,1.73 -1.29,1.53 -1.53,1.29 -1.73,1.00 -1.88,0.68 -1.97,0.35 -2.00,0.00 -1.97,-0.35 -1.88,-0.68 -1.73,-1.00 -1.53,-1.29 -1.29,-1.53 -1.00,-1.73 -0.68,-1.88 -0.35,-1.97 -0.00,-2.00 0.35,-1.97 0.68,-1.88 1.00,-1.73 1.29,-1.53 1.53,-1.29 1.73,-1.00 1.88,-0.68 1.97,-0.35 2.00,-0.00;3.00,0.00 2.95,0.52 2.82,1.03 2.60,1.50 2.30,1.93 1.93,2.30 1.50,2.60 1.03,2.82 0.52,2.95 0.00,3.00 -0.52,2.95 -1.03,2.82 -1.50,2.60 -1.93,2.30 -2.30,1.93 -2.60,1.50 -2.82,1.03 -2.95,0.52 -3.00,0.00 -2.95,-0.52 -2.82,-1.03 -2.60,-1.50 -2.30,-1.93 -1.93,-2.30 -1.50,-2.60 -1.03,-2.82 -0.52,-2.95 -0.00,-3.00 0.52,-2.95 1.03,-2.82 1.50,-2.60 1.93,-2.30 2.30,-1.93 2.60,-1.50 2.82,-1.03 2.95,-0.52 3.00,-0.00" vettori="2,0,2,1.15,B;0,3,-1.15,3;-1,0,-1,-0.75;0,-2,1.15,-2" segmenti="0,0,2,0" etichette="0.22,0.3,I;0.95,-0.42,d" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Linee di campo di un filo infinito percorso dalla corrente $I$ uscente dal foglio: circonferenze concentriche percorse in verso antiorario, con $B = \dfrac{\mu_0 I}{2\pi d}$"}

:::dimostrazione
Si applica il teorema sul campo di un tratto rettilineo. Per il filo infinito $s_1 \to -\infty$ e $s_2 \to +\infty$, quindi $\sin\theta_1 \to -1$ e $\sin\theta_2 \to 1$, e
$$
B = \frac{\mu_0 I}{4\pi d}\,\bigl(1 - (-1)\bigr) = \frac{\mu_0 I}{2\pi d} .
$$
Per il filo semi-infinito che termina in $H$ si ha $s_1 = 0$ e $s_2 \to +\infty$, oppure $s_1 \to -\infty$ e $s_2 = 0$; in entrambi i casi la differenza dei seni vale $1$ e $B = \dfrac{\mu_0 I}{4\pi d}$. Il campo è perpendicolare al piano che contiene il filo e il punto, quindi è tangente alla circonferenza di raggio $d$ centrata sul filo che passa per il punto.
:::
::::

## Campo di una spira e di un arco

::::teorema{#campo-spira-asse titolo="Campo di una spira circolare sul suo asse"}
Si consideri una spira circolare di raggio $R$ percorsa dalla corrente $I$, e un punto $P$ del suo asse a distanza $z$ dal centro. Il campo in $P$ è diretto lungo l'asse e ha modulo
$$
B = \frac{\mu_0 I R^2}{2\,(R^2 + z^2)^{\frac{3}{2}}} ,
$$
con il verso dato dalla regola della mano destra: con le dita piegate nel verso della corrente, il pollice indica il verso del campo. Al centro della spira, cioè per $z = 0$, il campo vale
$$
B = \frac{\mu_0 I}{2R} .
$$
Una bobina piatta di $N$ spire sovrapposte produce un campo $N$ volte maggiore. Per una spira di raggio $10\,\mathrm{cm}$ percorsa da $5{,}0\,\mathrm{A}$ il campo al centro è $\dfrac{4\pi \cdot 10^{-7} \cdot 5{,}0}{2 \cdot 0{,}10}\,\mathrm{T} \approx 3{,}1 \cdot 10^{-5}\,\mathrm{T}$; nel punto dell'asse con $z = R$ il denominatore aumenta del fattore $2^{\frac{3}{2}} \approx 2{,}83$, e il campo scende a circa $1{,}1 \cdot 10^{-5}\,\mathrm{T}$.

::grafico{linee="0.129,2.300 0.119,2.349 0.091,2.391 0.049,2.419 0.000,2.429 -0.049,2.419 -0.091,2.391 -0.119,2.349 -0.129,2.300 -0.119,2.251 -0.091,2.209 -0.049,2.181 -0.000,2.171 0.049,2.181 0.091,2.209 0.119,2.251 0.129,2.300;0.129,-2.300 0.119,-2.251 0.091,-2.209 0.049,-2.181 0.000,-2.171 -0.049,-2.181 -0.091,-2.209 -0.119,-2.251 -0.129,-2.300 -0.119,-2.349 -0.091,-2.391 -0.049,-2.419 -0.000,-2.429 0.049,-2.419 0.091,-2.391 0.119,-2.349 0.129,-2.300;-0.091,-2.391 0.091,-2.209;-0.091,-2.209 0.091,-2.391" assi=0 uguale=1 curve="0.45*cos(t),2*sin(t),0,6.29" segmenti="-1.2,0,5.9,0;0,0,0,2" vettori="0,2,4,0,r;4,0,4.6,1.2,dB;4,0,5.2,0,B;4,0,4.6,-1.2,dB" punti="0.000,2.300,pieno;4,0,pieno,P;0,0,pieno" etichette="-0.45,1.0,R;1.9,-0.45,z;5.95,-0.4,asse" xmin=-1.4 xmax=6.6 ymin=-2.7 ymax=2.7 titolo="Spira vista di taglio: i contributi $d\vec{B}$ di due tratti opposti hanno componenti perpendicolari all'asse opposte, e resta la componente lungo l'asse"}

:::dimostrazione
Si prende l'asse $z$ lungo l'asse della spira. Ogni tratto $d\vec{l}$ della spira è tangente alla circonferenza, quindi perpendicolare al vettore $\vec{r}$ che va dal tratto a $P$, che ha modulo $r = \sqrt{R^2 + z^2}$. Il contributo ha perciò modulo
$$
dB = \frac{\mu_0}{4\pi}\,\frac{I\,dl}{R^2 + z^2}
$$
ed è perpendicolare a $\vec{r}$, nel piano che contiene l'asse e il tratto. Il tratto diametralmente opposto dà un contributo dello stesso modulo, con la componente perpendicolare all'asse opposta; quindi le componenti perpendicolari all'asse si annullano a coppie, e resta la componente lungo l'asse. Poiché $d\vec{B}$ è perpendicolare a $\vec{r}$, l'angolo tra $d\vec{B}$ e l'asse è uguale all'angolo tra $\vec{r}$ e il raggio della spira, il cui coseno è $\dfrac{R}{r}$. Sommando su tutta la circonferenza, di lunghezza $2\pi R$,
$$
B = \oint \frac{\mu_0 I\,dl}{4\pi\,r^2}\,\frac{R}{r} = \frac{\mu_0 I R}{4\pi\,(R^2 + z^2)^{\frac{3}{2}}}\,2\pi R = \frac{\mu_0 I R^2}{2\,(R^2 + z^2)^{\frac{3}{2}}} .
$$
:::
::::

::::teorema{#campo-arco titolo="Campo al centro di un arco di circonferenza"}
Un arco di circonferenza di raggio $R$ e ampiezza $\varphi$, misurata in radianti, percorso dalla corrente $I$, produce nel centro $C$ della circonferenza un campo perpendicolare al piano dell'arco, di modulo
$$
B = \frac{\mu_0 I \varphi}{4\pi R} .
$$
Per $\varphi = 2\pi$ si ritrova il campo al centro della spira. I tratti rettilinei radiali, cioè allineati con il centro, non contribuiscono al campo in $C$, perché per essi $d\vec{l}$ è parallelo a $\vec{r}$ e il prodotto vettoriale è nullo. Il teorema dà quindi il campo al centro di circuiti formati da archi e raggi: un circuito a forma di quarto di cerchio, di raggio $4{,}0\,\mathrm{cm}$ e percorso da $6{,}0\,\mathrm{A}$, produce nel centro il campo dell'arco, $B = \dfrac{\mu_0 I}{8R} = \dfrac{4\pi \cdot 10^{-7} \cdot 6{,}0}{8 \cdot 0{,}040}\,\mathrm{T} \approx 2{,}4 \cdot 10^{-5}\,\mathrm{T}$.

:::dimostrazione
Per ogni tratto dell'arco il vettore $\vec{r}$ che va dal tratto a $C$ è diretto lungo il raggio e ha modulo $R$, mentre $d\vec{l}$ è tangente; quindi $|d\vec{l} \times \hat{r}| = dl$, e tutti i contributi sono perpendicolari al piano dell'arco con lo stesso verso. Sommando i moduli lungo l'arco, di lunghezza $R\varphi$,
$$
B = \frac{\mu_0 I}{4\pi R^2} \int_{\text{arco}} dl = \frac{\mu_0 I}{4\pi R^2}\,R\varphi = \frac{\mu_0 I \varphi}{4\pi R} .
$$
:::
::::

:::osservazione{#spira-dipolo-magnetico titolo="La spira come dipolo magnetico"}
A grande distanza dalla spira, cioè per $z \gg R$, si ha $(R^2 + z^2)^{\frac{3}{2}} \approx z^3$, e il campo sull'asse diventa
$$
B \approx \frac{\mu_0 I R^2}{2 z^3} = \frac{\mu_0\,m}{2\pi z^3} ,
$$
dove $m = I\pi R^2$ è il modulo del **momento magnetico** $\vec{m} = I A\,\hat{n}$ della spira, introdotto nell'argomento sul campo magnetico e la forza di Lorentz. L'espressione ha la stessa forma del campo elettrico sull'asse di un dipolo, $E = \dfrac{p}{2\pi\varepsilon_0 z^3}$; per questo una piccola spira si dice **dipolo magnetico**, e le sue linee di campo lontane hanno la stessa forma di quelle di un dipolo elettrico e di un piccolo magnete. Per una spira di raggio $2{,}0\,\mathrm{cm}$ con $I = 3{,}0\,\mathrm{A}$, a $z = 20\,\mathrm{cm}$ l'approssimazione dà $9{,}4 \cdot 10^{-8}\,\mathrm{T}$ e la formula esatta $9{,}3 \cdot 10^{-8}\,\mathrm{T}$.
:::

## Forza tra fili paralleli e definizione dell'ampere

:::richiamo{titolo="Forza magnetica su un filo rettilineo"}
Un tratto rettilineo di filo di lunghezza $\ell$, percorso dalla corrente $I$ e immerso in un campo magnetico uniforme $\vec{B}$, subisce la forza $\vec{F} = I\,\vec{\ell} \times \vec{B}$, dove $\vec{\ell}$ ha il modulo $\ell$ e il verso della corrente. Si rimanda all'argomento sul campo magnetico e la forza di Lorentz.
:::

::::teorema{#forza-tra-fili-paralleli titolo="Forza tra due fili paralleli"}
Si considerino due fili rettilinei infiniti e paralleli, a distanza $d$ nel vuoto, percorsi dalle correnti $I_1$ e $I_2$. Su ogni tratto di lunghezza $\ell$ di ciascun filo agisce una forza perpendicolare ai fili, nel piano che li contiene, di modulo
$$
F = \frac{\mu_0 I_1 I_2\,\ell}{2\pi d} .
$$
La forza è **attrattiva** se le correnti sono concordi e **repulsiva** se sono discordi. Le forze sui due fili sono opposte, in accordo con il terzo principio della dinamica. La forza per unità di lunghezza $\dfrac{F}{\ell}$ non dipende dalla lunghezza del tratto: due fili a $1\,\mathrm{m}$ di distanza, percorsi entrambi da $1\,\mathrm{A}$, si attraggono con $2 \cdot 10^{-7}\,\mathrm{N}$ per ogni metro di lunghezza.

::grafico{assi=0 uguale=1 linee="3.537,3.000 3.530,3.033 3.511,3.061 3.483,3.080 3.450,3.087 3.417,3.080 3.389,3.061 3.370,3.033 3.363,3.000 3.370,2.967 3.389,2.939 3.417,2.920 3.450,2.913 3.483,2.920 3.511,2.939 3.530,2.967 3.537,3.000;3.389,2.939 3.511,3.061;3.389,3.061 3.511,2.939;0,0 0,4;3,0 3,4" vettori="0,0.4,0,1.4,I₁;3,0.4,3,1.4,I₂;0,2.4,0.95,2.4,F;3,2.4,2.05,2.4,F" segmenti="0,3.6,3,3.6" punti="0,2.4,pieno;3,2.4,pieno" etichette="1.42,3.75,d;3.65,2.85,B₁" xmin=-1 xmax=4.4 ymin=-0.3 ymax=4.2 titolo="Due fili paralleli con correnti concordi: il campo $\vec{B}_1$ del primo filo entra nel foglio nella posizione del secondo, e le forze sono attrattive"}

:::dimostrazione
Si mette il filo $1$ lungo l'asse $z$, con la corrente $I_1$ verso $+\hat{k}$, e il filo $2$ nel piano $xz$ alla distanza $d$, nel punto di ascissa $x = d$. Per il teorema sul campo di un filo rettilineo infinito, nei punti del filo $2$ il campo del filo $1$ ha modulo $B_1 = \dfrac{\mu_0 I_1}{2\pi d}$; il suo verso, per la regola della mano destra, è quello di $+\hat{\jmath}$, ed è lo stesso lungo tutto il filo $2$. Il campo è quindi uniforme lungo il filo $2$, e per la forza magnetica su un filo rettilineo, se $I_2$ è concorde con $I_1$,
$$
\vec{F}_2 = I_2\,\ell\,\hat{k} \times B_1\,\hat{\jmath} = -\frac{\mu_0 I_1 I_2\,\ell}{2\pi d}\,\hat{\imath} .
$$
La forza è rivolta verso il filo $1$, cioè attrattiva. Se $I_2$ è discorde, $\vec{\ell}$ cambia verso e con esso la forza, che diventa repulsiva. Lo stesso calcolo, con i ruoli dei fili scambiati, dà la forza sul filo $1$, opposta a $\vec{F}_2$.
:::
::::

:::definizione{#definizione-ampere titolo="Definizione dell'ampere"}
Fino al 2019 l'**ampere** era definito per mezzo della forza tra fili paralleli: è l'intensità della corrente costante che, mantenuta in due conduttori rettilinei paralleli, di lunghezza infinita e di sezione trascurabile, posti alla distanza di $1\,\mathrm{m}$ nel vuoto, produce tra di essi una forza di $2 \cdot 10^{-7}\,\mathrm{N}$ per metro di lunghezza. Con questa definizione il valore $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ era esatto.

Dal 2019 il Sistema Internazionale fissa invece il valore esatto della carica elementare, $e = 1{,}602176634 \cdot 10^{-19}\,\mathrm{C}$, e l'ampere corrisponde al passaggio di $\dfrac{1}{1{,}602176634 \cdot 10^{-19}}$ cariche elementari al secondo. Da allora $\mu_0$ è una grandezza misurata, che differisce da $4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$ per meno di una parte su un miliardo; nei calcoli si continua perciò a usare il valore $4\pi \cdot 10^{-7}\,\mathrm{T\cdot m/A}$.
:::

## Legge di Ampère

:::richiamo{titolo="Circuitazione di un campo vettoriale"}
La **circuitazione** di un campo vettoriale $\vec{F}$ lungo una curva chiusa orientata $\gamma$ è l'integrale di linea $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{l}$, dove $d\vec{l}$ è lo spostamento infinitesimo lungo la curva nel verso scelto. Se $\vec{F}$ è tangente alla curva e ha modulo costante $F$ lungo di essa, la circuitazione vale $F$ per la lunghezza della curva. Si rimanda all'argomento sulle curve e gli integrali di linea di Analisi 2.
:::

:::teorema{#legge-di-ampere titolo="Legge di Ampère"}
Si consideri un sistema di correnti stazionarie nel vuoto e una curva chiusa orientata $\gamma$. La circuitazione del campo magnetico lungo $\gamma$ è
$$
\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, I_{\text{conc}} ,
$$
dove $I_{\text{conc}}$ è la **corrente concatenata** con $\gamma$, cioè la somma algebrica delle correnti che attraversano una superficie che ha $\gamma$ come bordo. La legge si ricava dalla legge di Biot-Savart per correnti stazionarie; la dimostrazione generale richiede il calcolo vettoriale e si omette, mentre nel caso di un filo rettilineo infinito la legge si controlla con il calcolo diretto della circuitazione.

La legge di Ampère ha due usi. Il primo è qualitativo: la circuitazione di $\vec{B}$ lungo una curva che abbraccia una corrente è diversa da zero, quindi il campo magnetico **non è conservativo** e non ammette un potenziale come il campo elettrostatico. Il secondo è il calcolo del campo nelle distribuzioni con simmetria elevata: se si trova una curva lungo la quale $\vec{B}$ è tangente e di modulo costante, la circuitazione è $B$ per la lunghezza della curva, e la legge dà direttamente $B$. Per esempio, lungo la circonferenza di raggio $d$ centrata su un filo infinito il campo è tangente e di modulo costante, quindi $B \cdot 2\pi d = \mu_0 I$, e si ritrova $B = \dfrac{\mu_0 I}{2\pi d}$.
:::

:::osservazione{#corrente-concatenata titolo="Segno delle correnti concatenate"}
Il verso di percorrenza di $\gamma$ fissa l'orientazione della superficie che ha $\gamma$ come bordo con la regola della mano destra: con le dita piegate nel verso di percorrenza, il pollice indica il verso della normale. Le correnti che attraversano la superficie nel verso della normale si contano positive, quelle nel verso opposto negative; le correnti che non attraversano la superficie non contribuiscono, anche se il loro campo agisce lungo $\gamma$.

::grafico{punti="-1.200,0.400,pieno;4.400,1.600,pieno" linee="-1.055,0.400 -1.066,0.455 -1.098,0.502 -1.145,0.534 -1.200,0.545 -1.255,0.534 -1.302,0.502 -1.334,0.455 -1.345,0.400 -1.334,0.345 -1.302,0.298 -1.255,0.266 -1.200,0.255 -1.145,0.266 -1.098,0.298 -1.066,0.345 -1.055,0.400;1.145,-0.500 1.134,-0.445 1.102,-0.398 1.055,-0.366 1.000,-0.355 0.945,-0.366 0.898,-0.398 0.866,-0.445 0.855,-0.500 0.866,-0.555 0.898,-0.602 0.945,-0.634 1.000,-0.645 1.055,-0.634 1.102,-0.602 1.134,-0.555 1.145,-0.500;0.898,-0.602 1.102,-0.398;0.898,-0.398 1.102,-0.602;4.545,1.600 4.534,1.655 4.502,1.702 4.455,1.734 4.400,1.745 4.345,1.734 4.298,1.702 4.266,1.655 4.255,1.600 4.266,1.545 4.298,1.498 4.345,1.466 4.400,1.455 4.455,1.466 4.502,1.498 4.534,1.545 4.545,1.600" assi=0 uguale=1 curve="3*cos(t)+0.4*cos(2*t),2*sin(t)+0.3*sin(3*t),0,6.29" vettori="-0.1,1.7,-0.95,1.7" etichette="-0.95,0.55,I₁;1.25,-0.35,I₂;4.65,1.75,I₃;2.55,1.95,γ" xmin=-3.6 xmax=5.4 ymin=-2.5 ymax=2.5 titolo="La curva $\gamma$, percorsa in verso antiorario, ha la normale uscente dal foglio: la corrente concatenata è $I_1 - I_2$, e $I_3$ non contribuisce"}

:::

:::esempio{titolo="Circuitazione attorno a un filo rettilineo"}
Si consideri un filo rettilineo infinito percorso dalla corrente $I$ e una curva chiusa $\gamma$ qualsiasi in un piano perpendicolare al filo, descritta in coordinate polari $(r, \phi)$ con il polo sul filo. Il campo è tangente alle circonferenze centrate sul filo e ha modulo $\dfrac{\mu_0 I}{2\pi r}$; lo spostamento $d\vec{l}$ ha componente $r\,d\phi$ lungo quella direzione, perciò
$$
\vec{B} \cdot d\vec{l} = \frac{\mu_0 I}{2\pi r}\,r\,d\phi = \frac{\mu_0 I}{2\pi}\,d\phi .
$$
Se $\gamma$ gira una volta attorno al filo, l'angolo $\phi$ aumenta di $2\pi$ e la circuitazione vale $\mu_0 I$, qualunque sia la forma della curva. Se $\gamma$ non gira attorno al filo, l'angolo $\phi$ torna al valore iniziale senza compiere il giro, e la circuitazione è nulla. In entrambi i casi la legge di Ampère è soddisfatta.
:::

:::osservazione{#ampere-forma-locale titolo="Forma locale e limiti di validità"}
Applicando il teorema di Stokes alla circuitazione, e scrivendo la corrente concatenata come flusso della densità di corrente $\vec{J}$, la legge di Ampère assume la forma locale
$$
\nabla \times \vec{B} = \mu_0 \vec{J} .
$$
Per il teorema di Stokes si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2. La legge vale per correnti stazionarie; quando le correnti e i campi variano nel tempo va completata con la corrente di spostamento, e si rimanda all'argomento sulle equazioni di Maxwell e le onde elettromagnetiche.
:::

## Applicazioni della legge di Ampère

::::teorema{#campo-filo-spesso titolo="Campo di un filo cilindrico"}
Un filo rettilineo infinito a sezione circolare di raggio $R$, percorso dalla corrente $I$ distribuita uniformemente sulla sezione, produce a distanza $r$ dall'asse un campo tangente alle circonferenze coassiali, di modulo
$$
B(r) =
\begin{cases}
\dfrac{\mu_0 I\, r}{2\pi R^2} & 0 \leq r \leq R \\[10pt]
\dfrac{\mu_0 I}{2\pi r} & r \geq R
\end{cases}
$$
All'esterno il filo produce lo stesso campo di un filo filiforme lungo l'asse; all'interno il campo cresce linearmente con $r$, è nullo sull'asse e massimo sulla superficie. Un filo di raggio $1{,}0\,\mathrm{mm}$ percorso da $20\,\mathrm{A}$ ha sulla superficie il campo $B = \dfrac{2 \cdot 10^{-7} \cdot 20}{1{,}0 \cdot 10^{-3}}\,\mathrm{T} = 4{,}0 \cdot 10^{-3}\,\mathrm{T}$.

::grafico{f="min(x,1/x)" segmenti="1,0,1,1" legenda="B(r)" nomi="r,B" xmin=0 xmax=4.3 ymin=0 ymax=1.3 titolo="Campo di un filo cilindrico in funzione della distanza dall'asse, con $r$ in unità di $R$ e $B$ in unità di $\dfrac{\mu_0 I}{2\pi R}$: retta all'interno, iperbole all'esterno"}

:::dimostrazione
Per la legge di Biot-Savart ogni contributo $d\vec{B}$ è perpendicolare a $d\vec{l}$, che è parallelo all'asse, quindi il campo non ha componente lungo l'asse. La componente radiale è nulla per la legge di Gauss per il campo magnetico, applicata a un cilindro coassiale: le basi non contribuiscono al flusso, perché il campo non ha componente assiale, mentre per simmetria la componente radiale avrebbe lo stesso valore e lo stesso segno su tutta la superficie laterale, e il flusso uscente sarebbe diverso da zero. Il campo è quindi tangente alle circonferenze coassiali, e per la simmetria di rotazione il suo modulo dipende solo da $r$.

Si applica la legge di Ampère alla circonferenza coassiale di raggio $r$, percorsa nel verso concorde con la corrente secondo la regola della mano destra; la circuitazione vale $B(r)\,2\pi r$. Se $r \geq R$, la circonferenza concatena tutta la corrente $I$, perciò $B\,2\pi r = \mu_0 I$. Se $r < R$, la corrente è uniforme sulla sezione, quindi la corrente concatenata è la frazione $\dfrac{\pi r^2}{\pi R^2}$ della corrente totale, e
$$
B\,2\pi r = \mu_0 I\,\frac{r^2}{R^2}
\quad\Longrightarrow\quad
B = \frac{\mu_0 I\, r}{2\pi R^2} .
$$
:::
::::

::::teorema{#campo-cavo-coassiale titolo="Campo di un cavo coassiale"}
Un cavo coassiale infinito è formato da un conduttore cilindrico interno di raggio $a$ e da un conduttore esterno a forma di guscio cilindrico coassiale, con raggi $b$ e $c$, dove $a < b < c$. I due conduttori sono percorsi dalla stessa corrente $I$ in versi opposti, distribuita uniformemente sulle rispettive sezioni. Il campo è tangente alle circonferenze coassiali e il suo modulo vale
$$
B(r) =
\begin{cases}
\dfrac{\mu_0 I\, r}{2\pi a^2} & 0 \leq r \leq a \\[10pt]
\dfrac{\mu_0 I}{2\pi r} & a \leq r \leq b \\[10pt]
\dfrac{\mu_0 I}{2\pi r}\,\dfrac{c^2 - r^2}{c^2 - b^2} & b \leq r \leq c \\[10pt]
0 & r \geq c
\end{cases}
$$
All'esterno del cavo il campo è nullo, perché le due correnti si compensano; per questo il cavo coassiale trasporta corrente senza produrre campo magnetico all'esterno.

:::dimostrazione
La distribuzione ha la stessa simmetria del filo cilindrico, quindi il campo è tangente alle circonferenze coassiali e dipende solo da $r$; per la legge di Ampère applicata alla circonferenza di raggio $r$ si ha $B\,2\pi r = \mu_0 I_{\text{conc}}(r)$, e resta da calcolare la corrente concatenata, contando positiva la corrente del conduttore interno.

- Per $r \leq a$ la circonferenza concatena la frazione $\dfrac{r^2}{a^2}$ della corrente interna, come nel filo cilindrico.
- Per $a \leq r \leq b$ concatena tutta la corrente interna, $I_{\text{conc}} = I$.
- Per $b \leq r \leq c$ concatena la corrente interna e la parte di corrente esterna che attraversa la corona circolare tra $b$ e $r$; poiché la corrente esterna è uniforme, quella parte vale $I\,\dfrac{r^2 - b^2}{c^2 - b^2}$, e $I_{\text{conc}} = I - I\,\dfrac{r^2 - b^2}{c^2 - b^2} = I\,\dfrac{c^2 - r^2}{c^2 - b^2}$.
- Per $r \geq c$ si ha $I_{\text{conc}} = I - I = 0$.

Dividendo per $2\pi r$ si ottengono le quattro espressioni.
:::
::::

## Solenoide e toroide

::::teorema{#campo-solenoide titolo="Campo di un solenoide ideale"}
Un **solenoide** è un filo avvolto a elica su un cilindro, con spire fitte. Si consideri un solenoide ideale, cioè infinitamente lungo e con spire così fitte da essere equivalenti a una corrente distribuita sulla superficie laterale, con $n$ spire per unità di lunghezza percorse dalla corrente $I$. All'interno il campo è **uniforme**, parallelo all'asse, di modulo
$$
B = \mu_0\, n I ,
$$
e all'esterno è nullo. Il verso si trova con la regola della mano destra, con le dita piegate nel verso della corrente nelle spire. Il modello descrive bene un solenoide reale di lunghezza molto maggiore del raggio, lontano dagli estremi. Un solenoide con $1000$ spire per metro percorso da $2{,}0\,\mathrm{A}$ ha all'interno $B = 4\pi \cdot 10^{-7} \cdot 1000 \cdot 2{,}0\,\mathrm{T} \approx 2{,}5 \cdot 10^{-3}\,\mathrm{T}$. Per un solenoide di lunghezza $\ell$ con $N$ spire si ha $n = \dfrac{N}{\ell}$.

::grafico{punti="0.250,1.000,pieno;0.750,1.000,pieno;1.250,1.000,pieno;1.750,1.000,pieno;2.250,1.000,pieno;2.750,1.000,pieno;3.250,1.000,pieno;3.750,1.000,pieno;4.250,1.000,pieno;4.750,1.000,pieno;5.250,1.000,pieno;5.750,1.000,pieno;6.250,1.000,pieno;6.750,1.000,pieno;7.250,1.000,pieno;7.750,1.000,pieno" linee="0.388,1.000 0.378,1.053 0.348,1.098 0.303,1.128 0.250,1.138 0.197,1.128 0.152,1.098 0.122,1.053 0.112,1.000 0.122,0.947 0.152,0.902 0.197,0.872 0.250,0.862 0.303,0.872 0.348,0.902 0.378,0.947 0.388,1.000;0.888,1.000 0.878,1.053 0.848,1.098 0.803,1.128 0.750,1.138 0.697,1.128 0.652,1.098 0.622,1.053 0.612,1.000 0.622,0.947 0.652,0.902 0.697,0.872 0.750,0.862 0.803,0.872 0.848,0.902 0.878,0.947 0.888,1.000;1.388,1.000 1.378,1.053 1.348,1.098 1.303,1.128 1.250,1.138 1.197,1.128 1.152,1.098 1.122,1.053 1.112,1.000 1.122,0.947 1.152,0.902 1.197,0.872 1.250,0.862 1.303,0.872 1.348,0.902 1.378,0.947 1.388,1.000;1.888,1.000 1.878,1.053 1.848,1.098 1.803,1.128 1.750,1.138 1.697,1.128 1.652,1.098 1.622,1.053 1.612,1.000 1.622,0.947 1.652,0.902 1.697,0.872 1.750,0.862 1.803,0.872 1.848,0.902 1.878,0.947 1.888,1.000;2.388,1.000 2.378,1.053 2.348,1.098 2.303,1.128 2.250,1.138 2.197,1.128 2.152,1.098 2.122,1.053 2.112,1.000 2.122,0.947 2.152,0.902 2.197,0.872 2.250,0.862 2.303,0.872 2.348,0.902 2.378,0.947 2.388,1.000;2.888,1.000 2.878,1.053 2.848,1.098 2.803,1.128 2.750,1.138 2.697,1.128 2.652,1.098 2.622,1.053 2.612,1.000 2.622,0.947 2.652,0.902 2.697,0.872 2.750,0.862 2.803,0.872 2.848,0.902 2.878,0.947 2.888,1.000;3.388,1.000 3.378,1.053 3.348,1.098 3.303,1.128 3.250,1.138 3.197,1.128 3.152,1.098 3.122,1.053 3.112,1.000 3.122,0.947 3.152,0.902 3.197,0.872 3.250,0.862 3.303,0.872 3.348,0.902 3.378,0.947 3.388,1.000;3.888,1.000 3.878,1.053 3.848,1.098 3.803,1.128 3.750,1.138 3.697,1.128 3.652,1.098 3.622,1.053 3.612,1.000 3.622,0.947 3.652,0.902 3.697,0.872 3.750,0.862 3.803,0.872 3.848,0.902 3.878,0.947 3.888,1.000;4.388,1.000 4.378,1.053 4.348,1.098 4.303,1.128 4.250,1.138 4.197,1.128 4.152,1.098 4.122,1.053 4.112,1.000 4.122,0.947 4.152,0.902 4.197,0.872 4.250,0.862 4.303,0.872 4.348,0.902 4.378,0.947 4.388,1.000;4.888,1.000 4.878,1.053 4.848,1.098 4.803,1.128 4.750,1.138 4.697,1.128 4.652,1.098 4.622,1.053 4.612,1.000 4.622,0.947 4.652,0.902 4.697,0.872 4.750,0.862 4.803,0.872 4.848,0.902 4.878,0.947 4.888,1.000;5.388,1.000 5.378,1.053 5.348,1.098 5.303,1.128 5.250,1.138 5.197,1.128 5.152,1.098 5.122,1.053 5.112,1.000 5.122,0.947 5.152,0.902 5.197,0.872 5.250,0.862 5.303,0.872 5.348,0.902 5.378,0.947 5.388,1.000;5.888,1.000 5.878,1.053 5.848,1.098 5.803,1.128 5.750,1.138 5.697,1.128 5.652,1.098 5.622,1.053 5.612,1.000 5.622,0.947 5.652,0.902 5.697,0.872 5.750,0.862 5.803,0.872 5.848,0.902 5.878,0.947 5.888,1.000;6.388,1.000 6.378,1.053 6.348,1.098 6.303,1.128 6.250,1.138 6.197,1.128 6.152,1.098 6.122,1.053 6.112,1.000 6.122,0.947 6.152,0.902 6.197,0.872 6.250,0.862 6.303,0.872 6.348,0.902 6.378,0.947 6.388,1.000;6.888,1.000 6.878,1.053 6.848,1.098 6.803,1.128 6.750,1.138 6.697,1.128 6.652,1.098 6.622,1.053 6.612,1.000 6.622,0.947 6.652,0.902 6.697,0.872 6.750,0.862 6.803,0.872 6.848,0.902 6.878,0.947 6.888,1.000;7.388,1.000 7.378,1.053 7.348,1.098 7.303,1.128 7.250,1.138 7.197,1.128 7.152,1.098 7.122,1.053 7.112,1.000 7.122,0.947 7.152,0.902 7.197,0.872 7.250,0.862 7.303,0.872 7.348,0.902 7.378,0.947 7.388,1.000;7.888,1.000 7.878,1.053 7.848,1.098 7.803,1.128 7.750,1.138 7.697,1.128 7.652,1.098 7.622,1.053 7.612,1.000 7.622,0.947 7.652,0.902 7.697,0.872 7.750,0.862 7.803,0.872 7.848,0.902 7.878,0.947 7.888,1.000;0.388,-1.000 0.378,-0.947 0.348,-0.902 0.303,-0.872 0.250,-0.862 0.197,-0.872 0.152,-0.902 0.122,-0.947 0.112,-1.000 0.122,-1.053 0.152,-1.098 0.197,-1.128 0.250,-1.138 0.303,-1.128 0.348,-1.098 0.378,-1.053 0.388,-1.000;0.152,-1.098 0.348,-0.902;0.152,-0.902 0.348,-1.098;0.888,-1.000 0.878,-0.947 0.848,-0.902 0.803,-0.872 0.750,-0.862 0.697,-0.872 0.652,-0.902 0.622,-0.947 0.612,-1.000 0.622,-1.053 0.652,-1.098 0.697,-1.128 0.750,-1.138 0.803,-1.128 0.848,-1.098 0.878,-1.053 0.888,-1.000;0.652,-1.098 0.848,-0.902;0.652,-0.902 0.848,-1.098;1.388,-1.000 1.378,-0.947 1.348,-0.902 1.303,-0.872 1.250,-0.862 1.197,-0.872 1.152,-0.902 1.122,-0.947 1.112,-1.000 1.122,-1.053 1.152,-1.098 1.197,-1.128 1.250,-1.138 1.303,-1.128 1.348,-1.098 1.378,-1.053 1.388,-1.000;1.152,-1.098 1.348,-0.902;1.152,-0.902 1.348,-1.098;1.888,-1.000 1.878,-0.947 1.848,-0.902 1.803,-0.872 1.750,-0.862 1.697,-0.872 1.652,-0.902 1.622,-0.947 1.612,-1.000 1.622,-1.053 1.652,-1.098 1.697,-1.128 1.750,-1.138 1.803,-1.128 1.848,-1.098 1.878,-1.053 1.888,-1.000;1.652,-1.098 1.848,-0.902;1.652,-0.902 1.848,-1.098;2.388,-1.000 2.378,-0.947 2.348,-0.902 2.303,-0.872 2.250,-0.862 2.197,-0.872 2.152,-0.902 2.122,-0.947 2.112,-1.000 2.122,-1.053 2.152,-1.098 2.197,-1.128 2.250,-1.138 2.303,-1.128 2.348,-1.098 2.378,-1.053 2.388,-1.000;2.152,-1.098 2.348,-0.902;2.152,-0.902 2.348,-1.098;2.888,-1.000 2.878,-0.947 2.848,-0.902 2.803,-0.872 2.750,-0.862 2.697,-0.872 2.652,-0.902 2.622,-0.947 2.612,-1.000 2.622,-1.053 2.652,-1.098 2.697,-1.128 2.750,-1.138 2.803,-1.128 2.848,-1.098 2.878,-1.053 2.888,-1.000;2.652,-1.098 2.848,-0.902;2.652,-0.902 2.848,-1.098;3.388,-1.000 3.378,-0.947 3.348,-0.902 3.303,-0.872 3.250,-0.862 3.197,-0.872 3.152,-0.902 3.122,-0.947 3.112,-1.000 3.122,-1.053 3.152,-1.098 3.197,-1.128 3.250,-1.138 3.303,-1.128 3.348,-1.098 3.378,-1.053 3.388,-1.000;3.152,-1.098 3.348,-0.902;3.152,-0.902 3.348,-1.098;3.888,-1.000 3.878,-0.947 3.848,-0.902 3.803,-0.872 3.750,-0.862 3.697,-0.872 3.652,-0.902 3.622,-0.947 3.612,-1.000 3.622,-1.053 3.652,-1.098 3.697,-1.128 3.750,-1.138 3.803,-1.128 3.848,-1.098 3.878,-1.053 3.888,-1.000;3.652,-1.098 3.848,-0.902;3.652,-0.902 3.848,-1.098;4.388,-1.000 4.378,-0.947 4.348,-0.902 4.303,-0.872 4.250,-0.862 4.197,-0.872 4.152,-0.902 4.122,-0.947 4.112,-1.000 4.122,-1.053 4.152,-1.098 4.197,-1.128 4.250,-1.138 4.303,-1.128 4.348,-1.098 4.378,-1.053 4.388,-1.000;4.152,-1.098 4.348,-0.902;4.152,-0.902 4.348,-1.098;4.888,-1.000 4.878,-0.947 4.848,-0.902 4.803,-0.872 4.750,-0.862 4.697,-0.872 4.652,-0.902 4.622,-0.947 4.612,-1.000 4.622,-1.053 4.652,-1.098 4.697,-1.128 4.750,-1.138 4.803,-1.128 4.848,-1.098 4.878,-1.053 4.888,-1.000;4.652,-1.098 4.848,-0.902;4.652,-0.902 4.848,-1.098;5.388,-1.000 5.378,-0.947 5.348,-0.902 5.303,-0.872 5.250,-0.862 5.197,-0.872 5.152,-0.902 5.122,-0.947 5.112,-1.000 5.122,-1.053 5.152,-1.098 5.197,-1.128 5.250,-1.138 5.303,-1.128 5.348,-1.098 5.378,-1.053 5.388,-1.000;5.152,-1.098 5.348,-0.902;5.152,-0.902 5.348,-1.098;5.888,-1.000 5.878,-0.947 5.848,-0.902 5.803,-0.872 5.750,-0.862 5.697,-0.872 5.652,-0.902 5.622,-0.947 5.612,-1.000 5.622,-1.053 5.652,-1.098 5.697,-1.128 5.750,-1.138 5.803,-1.128 5.848,-1.098 5.878,-1.053 5.888,-1.000;5.652,-1.098 5.848,-0.902;5.652,-0.902 5.848,-1.098;6.388,-1.000 6.378,-0.947 6.348,-0.902 6.303,-0.872 6.250,-0.862 6.197,-0.872 6.152,-0.902 6.122,-0.947 6.112,-1.000 6.122,-1.053 6.152,-1.098 6.197,-1.128 6.250,-1.138 6.303,-1.128 6.348,-1.098 6.378,-1.053 6.388,-1.000;6.152,-1.098 6.348,-0.902;6.152,-0.902 6.348,-1.098;6.888,-1.000 6.878,-0.947 6.848,-0.902 6.803,-0.872 6.750,-0.862 6.697,-0.872 6.652,-0.902 6.622,-0.947 6.612,-1.000 6.622,-1.053 6.652,-1.098 6.697,-1.128 6.750,-1.138 6.803,-1.128 6.848,-1.098 6.878,-1.053 6.888,-1.000;6.652,-1.098 6.848,-0.902;6.652,-0.902 6.848,-1.098;7.388,-1.000 7.378,-0.947 7.348,-0.902 7.303,-0.872 7.250,-0.862 7.197,-0.872 7.152,-0.902 7.122,-0.947 7.112,-1.000 7.122,-1.053 7.152,-1.098 7.197,-1.128 7.250,-1.138 7.303,-1.128 7.348,-1.098 7.378,-1.053 7.388,-1.000;7.152,-1.098 7.348,-0.902;7.152,-0.902 7.348,-1.098;7.888,-1.000 7.878,-0.947 7.848,-0.902 7.803,-0.872 7.750,-0.862 7.697,-0.872 7.652,-0.902 7.622,-0.947 7.612,-1.000 7.622,-1.053 7.652,-1.098 7.697,-1.128 7.750,-1.138 7.803,-1.128 7.848,-1.098 7.878,-1.053 7.888,-1.000;7.652,-1.098 7.848,-0.902;7.652,-0.902 7.848,-1.098" assi=0 uguale=1 etichette="2.75,0.12,a;5.08,0.12,b;5.08,2.3,c;2.75,2.3,d;3.9,0.5,h" segmenti="3,0.35,5,0.35;5,0.35,5,2.2;5,2.2,3,2.2;3,2.2,3,0.35" vettori="2.6,-0.45,5.4,-0.45,B" xmin=-0.3 xmax=8.3 ymin=-1.5 ymax=2.7 titolo="Sezione di un solenoide con il percorso rettangolare $abcd$: solo il lato $ab$, interno, contribuisce alla circuitazione, che vale $B h = \mu_0 n h I$"}

:::dimostrazione
Per la simmetria del solenoide infinito, il campo all'interno è parallelo all'asse e non dipende dalla posizione lungo l'asse. Si considera un percorso rettangolare con due lati paralleli all'asse, entrambi interni, a distanze diverse dall'asse: i lati perpendicolari all'asse non contribuiscono alla circuitazione, perché lì $\vec{B}$ è perpendicolare a $d\vec{l}$, e il percorso non concatena corrente; per la legge di Ampère la circuitazione è nulla, quindi il campo ha lo stesso valore sui due lati paralleli. Il campo interno è perciò uniforme. Lo stesso ragionamento, con due lati esterni, mostra che il campo esterno è uniforme, e poiché a grande distanza dal solenoide il campo tende a zero, il campo esterno è **nullo**.

Si applica infine la legge di Ampère al rettangolo $abcd$ della figura, con il lato $ab$ di lunghezza $h$ interno e il lato $cd$ esterno. I lati $bc$ e $da$ sono perpendicolari a $\vec{B}$ nel tratto interno e si trovano dove $\vec{B} = \vec{0}$ nel tratto esterno, e su $cd$ il campo è nullo; quindi la circuitazione vale $B h$. Il rettangolo è attraversato da $n h$ spire, ciascuna percorsa da $I$, perciò
$$
B h = \mu_0\, n h I
\quad\Longrightarrow\quad
B = \mu_0\, n I .
$$
:::
::::

::::teorema{#campo-toroide titolo="Campo di un toroide"}
Un **toroide** è un solenoide richiuso ad anello: $N$ spire, percorse dalla corrente $I$, sono avvolte su un anello di raggio interno $a$ e raggio esterno $b$. Il campo è nullo fuori dall'anello, mentre all'interno dell'anello le linee di campo sono circonferenze coassiali con il toroide e il modulo del campo a distanza $r$ dall'asse è
$$
B = \frac{\mu_0 N I}{2\pi r} , \qquad a < r < b .
$$
Il campo non è uniforme: è massimo sul bordo interno e minimo sul bordo esterno. Un toroide con $N = 600$ spire, $I = 2{,}0\,\mathrm{A}$, $a = 8{,}0\,\mathrm{cm}$ e $b = 12\,\mathrm{cm}$ ha $B = 3{,}0 \cdot 10^{-3}\,\mathrm{T}$ sul bordo interno e $2{,}0 \cdot 10^{-3}\,\mathrm{T}$ su quello esterno. Se lo spessore $b - a$ è piccolo rispetto al raggio medio, il campo è quasi uniforme e vale circa $\mu_0 n I$, con $n$ numero di spire per unità di lunghezza della circonferenza media, come nel solenoide.

::grafico{punti="1.850,0.770,pieno;0.770,1.850,pieno;-0.770,1.850,pieno;-1.850,0.770,pieno;-1.850,-0.770,pieno;-0.770,-1.850,pieno;0.770,-1.850,pieno;1.850,-0.770,pieno" assi=0 uguale=1 linee="1.966,0.770 1.957,0.814 1.932,0.852 1.894,0.877 1.850,0.886 1.806,0.877 1.768,0.852 1.743,0.814 1.734,0.770 1.743,0.726 1.768,0.688 1.806,0.663 1.850,0.654 1.894,0.663 1.932,0.688 1.957,0.726 1.966,0.770;0.886,1.850 0.877,1.894 0.852,1.932 0.814,1.957 0.770,1.966 0.726,1.957 0.688,1.932 0.663,1.894 0.654,1.850 0.663,1.806 0.688,1.768 0.726,1.743 0.770,1.734 0.814,1.743 0.852,1.768 0.877,1.806 0.886,1.850;-0.654,1.850 -0.663,1.894 -0.688,1.932 -0.726,1.957 -0.770,1.966 -0.814,1.957 -0.852,1.932 -0.877,1.894 -0.886,1.850 -0.877,1.806 -0.852,1.768 -0.814,1.743 -0.770,1.734 -0.726,1.743 -0.688,1.768 -0.663,1.806 -0.654,1.850;-1.734,0.770 -1.743,0.814 -1.768,0.852 -1.806,0.877 -1.850,0.886 -1.894,0.877 -1.932,0.852 -1.957,0.814 -1.966,0.770 -1.957,0.726 -1.932,0.688 -1.894,0.663 -1.850,0.654 -1.806,0.663 -1.768,0.688 -1.743,0.726 -1.734,0.770;-1.734,-0.770 -1.743,-0.726 -1.768,-0.688 -1.806,-0.663 -1.850,-0.654 -1.894,-0.663 -1.932,-0.688 -1.957,-0.726 -1.966,-0.770 -1.957,-0.814 -1.932,-0.852 -1.894,-0.877 -1.850,-0.886 -1.806,-0.877 -1.768,-0.852 -1.743,-0.814 -1.734,-0.770;-0.654,-1.850 -0.663,-1.806 -0.688,-1.768 -0.726,-1.743 -0.770,-1.734 -0.814,-1.743 -0.852,-1.768 -0.877,-1.806 -0.886,-1.850 -0.877,-1.894 -0.852,-1.932 -0.814,-1.957 -0.770,-1.966 -0.726,-1.957 -0.688,-1.932 -0.663,-1.894 -0.654,-1.850;0.886,-1.850 0.877,-1.806 0.852,-1.768 0.814,-1.743 0.770,-1.734 0.726,-1.743 0.688,-1.768 0.663,-1.806 0.654,-1.850 0.663,-1.894 0.688,-1.932 0.726,-1.957 0.770,-1.966 0.814,-1.957 0.852,-1.932 0.877,-1.894 0.886,-1.850;1.966,-0.770 1.957,-0.726 1.932,-0.688 1.894,-0.663 1.850,-0.654 1.806,-0.663 1.768,-0.688 1.743,-0.726 1.734,-0.770 1.743,-0.814 1.768,-0.852 1.806,-0.877 1.850,-0.886 1.894,-0.877 1.932,-0.852 1.957,-0.814 1.966,-0.770;3.016,0.780 3.007,0.824 2.982,0.862 2.944,0.887 2.900,0.896 2.856,0.887 2.818,0.862 2.793,0.824 2.784,0.780 2.793,0.736 2.818,0.698 2.856,0.673 2.900,0.664 2.944,0.673 2.982,0.698 3.007,0.736 3.016,0.780;2.818,0.698 2.982,0.862;2.818,0.862 2.982,0.698;2.236,2.120 2.227,2.164 2.202,2.202 2.164,2.227 2.120,2.236 2.076,2.227 2.038,2.202 2.013,2.164 2.004,2.120 2.013,2.076 2.038,2.038 2.076,2.013 2.120,2.004 2.164,2.013 2.202,2.038 2.227,2.076 2.236,2.120;2.038,2.038 2.202,2.202;2.038,2.202 2.202,2.038;0.896,2.900 0.887,2.944 0.862,2.982 0.824,3.007 0.780,3.016 0.736,3.007 0.698,2.982 0.673,2.944 0.664,2.900 0.673,2.856 0.698,2.818 0.736,2.793 0.780,2.784 0.824,2.793 0.862,2.818 0.887,2.856 0.896,2.900;0.698,2.818 0.862,2.982;0.698,2.982 0.862,2.818;-0.664,2.900 -0.673,2.944 -0.698,2.982 -0.736,3.007 -0.780,3.016 -0.824,3.007 -0.862,2.982 -0.887,2.944 -0.896,2.900 -0.887,2.856 -0.862,2.818 -0.824,2.793 -0.780,2.784 -0.736,2.793 -0.698,2.818 -0.673,2.856 -0.664,2.900;-0.862,2.818 -0.698,2.982;-0.862,2.982 -0.698,2.818;-2.004,2.120 -2.013,2.164 -2.038,2.202 -2.076,2.227 -2.120,2.236 -2.164,2.227 -2.202,2.202 -2.227,2.164 -2.236,2.120 -2.227,2.076 -2.202,2.038 -2.164,2.013 -2.120,2.004 -2.076,2.013 -2.038,2.038 -2.013,2.076 -2.004,2.120;-2.202,2.038 -2.038,2.202;-2.202,2.202 -2.038,2.038;-2.784,0.780 -2.793,0.824 -2.818,0.862 -2.856,0.887 -2.900,0.896 -2.944,0.887 -2.982,0.862 -3.007,0.824 -3.016,0.780 -3.007,0.736 -2.982,0.698 -2.944,0.673 -2.900,0.664 -2.856,0.673 -2.818,0.698 -2.793,0.736 -2.784,0.780;-2.982,0.698 -2.818,0.862;-2.982,0.862 -2.818,0.698;-2.784,-0.780 -2.793,-0.736 -2.818,-0.698 -2.856,-0.673 -2.900,-0.664 -2.944,-0.673 -2.982,-0.698 -3.007,-0.736 -3.016,-0.780 -3.007,-0.824 -2.982,-0.862 -2.944,-0.887 -2.900,-0.896 -2.856,-0.887 -2.818,-0.862 -2.793,-0.824 -2.784,-0.780;-2.982,-0.862 -2.818,-0.698;-2.982,-0.698 -2.818,-0.862;-2.004,-2.120 -2.013,-2.076 -2.038,-2.038 -2.076,-2.013 -2.120,-2.004 -2.164,-2.013 -2.202,-2.038 -2.227,-2.076 -2.236,-2.120 -2.227,-2.164 -2.202,-2.202 -2.164,-2.227 -2.120,-2.236 -2.076,-2.227 -2.038,-2.202 -2.013,-2.164 -2.004,-2.120;-2.202,-2.202 -2.038,-2.038;-2.202,-2.038 -2.038,-2.202;-0.664,-2.900 -0.673,-2.856 -0.698,-2.818 -0.736,-2.793 -0.780,-2.784 -0.824,-2.793 -0.862,-2.818 -0.887,-2.856 -0.896,-2.900 -0.887,-2.944 -0.862,-2.982 -0.824,-3.007 -0.780,-3.016 -0.736,-3.007 -0.698,-2.982 -0.673,-2.944 -0.664,-2.900;-0.862,-2.982 -0.698,-2.818;-0.862,-2.818 -0.698,-2.982;0.896,-2.900 0.887,-2.856 0.862,-2.818 0.824,-2.793 0.780,-2.784 0.736,-2.793 0.698,-2.818 0.673,-2.856 0.664,-2.900 0.673,-2.944 0.698,-2.982 0.736,-3.007 0.780,-3.016 0.824,-3.007 0.862,-2.982 0.887,-2.944 0.896,-2.900;0.698,-2.982 0.862,-2.818;0.698,-2.818 0.862,-2.982;2.236,-2.120 2.227,-2.076 2.202,-2.038 2.164,-2.013 2.120,-2.004 2.076,-2.013 2.038,-2.038 2.013,-2.076 2.004,-2.120 2.013,-2.164 2.038,-2.202 2.076,-2.227 2.120,-2.236 2.164,-2.227 2.202,-2.202 2.227,-2.164 2.236,-2.120;2.038,-2.202 2.202,-2.038;2.038,-2.038 2.202,-2.202;3.016,-0.780 3.007,-0.736 2.982,-0.698 2.944,-0.673 2.900,-0.664 2.856,-0.673 2.818,-0.698 2.793,-0.736 2.784,-0.780 2.793,-0.824 2.818,-0.862 2.856,-0.887 2.900,-0.896 2.944,-0.887 2.982,-0.862 3.007,-0.824 3.016,-0.780;2.818,-0.862 2.982,-0.698;2.818,-0.698 2.982,-0.862;2.00,0.00 1.97,0.35 1.88,0.68 1.73,1.00 1.53,1.29 1.29,1.53 1.00,1.73 0.68,1.88 0.35,1.97 0.00,2.00 -0.35,1.97 -0.68,1.88 -1.00,1.73 -1.29,1.53 -1.53,1.29 -1.73,1.00 -1.88,0.68 -1.97,0.35 -2.00,0.00 -1.97,-0.35 -1.88,-0.68 -1.73,-1.00 -1.53,-1.29 -1.29,-1.53 -1.00,-1.73 -0.68,-1.88 -0.35,-1.97 -0.00,-2.00 0.35,-1.97 0.68,-1.88 1.00,-1.73 1.29,-1.53 1.53,-1.29 1.73,-1.00 1.88,-0.68 1.97,-0.35 2.00,-0.00;3.00,0.00 2.95,0.52 2.82,1.03 2.60,1.50 2.30,1.93 1.93,2.30 1.50,2.60 1.03,2.82 0.52,2.95 0.00,3.00 -0.52,2.95 -1.03,2.82 -1.50,2.60 -1.93,2.30 -2.30,1.93 -2.60,1.50 -2.82,1.03 -2.95,0.52 -3.00,0.00 -2.95,-0.52 -2.82,-1.03 -2.60,-1.50 -2.30,-1.93 -1.93,-2.30 -1.50,-2.60 -1.03,-2.82 -0.52,-2.95 -0.00,-3.00 0.52,-2.95 1.03,-2.82 1.50,-2.60 1.93,-2.30 2.30,-1.93 2.60,-1.50 2.82,-1.03 2.95,-0.52 3.00,-0.00" curve="2.5*cos(t),2.5*sin(t),0,6.29" vettori="-2.5,0,-2.5,-1.1,B" segmenti="0,0,1.77,1.77" etichette="0.75,1.15,r" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3.5 titolo="Toroide visto dall'alto: le spire escono dal foglio sul bordo interno e vi entrano sul bordo esterno; la circonferenza di raggio $r$ concatena $N$ volte la corrente $I$"}

:::dimostrazione
Per la simmetria di rotazione attorno all'asse del toroide, le linee di campo sono circonferenze coassiali e il modulo del campo dipende solo dalla distanza $r$ dall'asse. Si applica la legge di Ampère alla circonferenza coassiale di raggio $r$, nel piano equatoriale dell'anello, e la circuitazione vale $B\,2\pi r$.

- Se $a < r < b$, la circonferenza è attraversata una volta da ciascuna delle $N$ spire, dove queste passano per il bordo interno, quindi $I_{\text{conc}} = N I$ e $B = \dfrac{\mu_0 N I}{2\pi r}$.
- Se $r < a$, la circonferenza non è attraversata da alcuna spira, quindi $I_{\text{conc}} = 0$.
- Se $r > b$, ogni spira attraversa la superficie due volte, verso l'alto sul bordo interno e verso il basso sul bordo esterno, quindi $I_{\text{conc}} = N I - N I = 0$.

Nei punti fuori dal piano equatoriale ma esterni all'anello vale lo stesso ragionamento con circonferenze coassiali che non attraversano l'anello, e il campo è nullo.
:::
::::

## Flusso del campo magnetico e legge di Gauss

:::richiamo{titolo="Flusso di un campo vettoriale"}
Il **flusso** di un campo vettoriale $\vec{F}$ attraverso una superficie orientata $S$, con versore normale $\hat{n}$, è l'integrale di superficie $\displaystyle\iint_S \vec{F} \cdot \hat{n}\,dA$. Se $S$ è piana, di area $A$, e $\vec{F}$ è uniforme, il flusso vale $F A\cos\theta$, con $\theta$ angolo tra $\vec{F}$ e $\hat{n}$. Il teorema della divergenza trasforma il flusso uscente da una superficie chiusa nell'integrale della divergenza sul volume racchiuso. Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::definizione{#flusso-campo-magnetico titolo="Flusso del campo magnetico"}
Il **flusso del campo magnetico** attraverso una superficie orientata $S$ è
$$
\Phi_B = \iint_S \vec{B} \cdot \hat{n}\,dA .
$$
Si misura in **weber**, $1\,\mathrm{Wb} = 1\,\mathrm{T\cdot m^2}$. Per una superficie piana di area $A$ in un campo uniforme si ha $\Phi_B = B A\cos\theta$, con $\theta$ angolo tra $\vec{B}$ e la normale: il flusso è massimo quando il campo è perpendicolare alla superficie e nullo quando è parallelo. Una spira di raggio $5{,}0\,\mathrm{cm}$ perpendicolare a un campo uniforme di $0{,}25\,\mathrm{T}$ è attraversata dal flusso $\Phi_B = 0{,}25 \cdot \pi \cdot 0{,}050^2\,\mathrm{Wb} \approx 2{,}0 \cdot 10^{-3}\,\mathrm{Wb}$. Il flusso del campo magnetico è la grandezza le cui variazioni producono le correnti indotte, e si rimanda all'argomento sull'induzione elettromagnetica.
:::

:::teorema{#legge-gauss-magnetismo titolo="Legge di Gauss per il campo magnetico"}
Il flusso del campo magnetico uscente da *ogni* superficie chiusa $S$ è nullo:
$$
\oint_S \vec{B} \cdot \hat{n}\,dA = 0 .
$$
È una legge sperimentale, uno dei postulati dell'elettromagnetismo: esprime il fatto che non sono mai state osservate cariche magnetiche isolate, i cosiddetti monopoli magnetici. Spezzando un magnete si ottengono sempre due magneti, ciascuno con un polo nord e un polo sud. Per i campi prodotti dalle correnti la legge si ricava anche dalla legge di Biot-Savart.

La legge ha due conseguenze utili. Le linee del campo magnetico non hanno né inizio né fine: sono linee chiuse oppure si estendono all'infinito, come si osserva nei campi del filo, della spira e del solenoide. Inoltre, per il teorema della divergenza, la legge equivale alla forma locale $\nabla \cdot \vec{B} = 0$, da confrontare con la legge di Gauss per il campo elettrico, il cui flusso uscente è proporzionale alla carica racchiusa; si rimanda all'argomento sul flusso del campo elettrico e la legge di Gauss.
:::

:::osservazione{#flusso-concatenato titolo="Flusso concatenato con una linea chiusa"}
Siano $S_1$ e $S_2$ due superfici che hanno lo stesso bordo $\gamma$, orientate in modo coerente con il verso di percorrenza di $\gamma$. Le due superfici insieme formano una superficie chiusa, sulla quale la normale uscente coincide con quella di $S_1$ e con l'opposta di quella di $S_2$, o viceversa. Per la legge di Gauss per il campo magnetico il flusso uscente totale è nullo, quindi
$$
\Phi_B(S_1) - \Phi_B(S_2) = 0 .
$$
Il flusso dipende perciò solo dalla linea chiusa $\gamma$, e si parla di **flusso concatenato** con $\gamma$: per calcolarlo si sceglie la superficie più comoda, di solito quella piana. Per una bobina di $N$ spire uguali attraversate dallo stesso campo il flusso concatenato è $N$ volte il flusso attraverso una spira; per esempio, in un solenoide lungo di sezione $A$ con $N$ spire il flusso concatenato è $N \mu_0 n I A$.
:::

:::esempio{titolo="Flusso del campo di un filo attraverso una spira rettangolare"}
Un filo rettilineo infinito, percorso dalla corrente $I$, giace nel piano di una spira rettangolare con due lati di lunghezza $\ell$ paralleli al filo, a distanza $a$ e $b$ dal filo, con $a < b$. Il campo del filo è perpendicolare al piano della spira ma non è uniforme, perciò si divide la spira in strisce parallele al filo, di larghezza $dr$ e area $\ell\,dr$, su ciascuna delle quali il campo è costante:
$$
\Phi_B = \int_a^b \frac{\mu_0 I}{2\pi r}\,\ell\,dr = \frac{\mu_0 I \ell}{2\pi}\,\ln\frac{b}{a} .
$$
Con $I = 10\,\mathrm{A}$, $\ell = 20\,\mathrm{cm}$, $a = 2{,}0\,\mathrm{cm}$ e $b = 8{,}0\,\mathrm{cm}$ si ottiene $\Phi_B = 2 \cdot 10^{-7} \cdot 10 \cdot 0{,}20 \cdot \ln 4\,\mathrm{Wb} \approx 5{,}5 \cdot 10^{-7}\,\mathrm{Wb}$.

::grafico{assi=0 uguale=1 linee="1.590,1.500 1.583,1.534 1.564,1.564 1.534,1.583 1.500,1.590 1.466,1.583 1.436,1.564 1.417,1.534 1.410,1.500 1.417,1.466 1.436,1.436 1.466,1.417 1.500,1.410 1.534,1.417 1.564,1.436 1.583,1.466 1.590,1.500;1.436,1.436 1.564,1.564;1.436,1.564 1.564,1.436;3.390,1.500 3.383,1.534 3.364,1.564 3.334,1.583 3.300,1.590 3.266,1.583 3.236,1.564 3.217,1.534 3.210,1.500 3.217,1.466 3.236,1.436 3.266,1.417 3.300,1.410 3.334,1.417 3.364,1.436 3.383,1.466 3.390,1.500;3.236,1.436 3.364,1.564;3.236,1.564 3.364,1.436;1.590,2.700 1.583,2.734 1.564,2.764 1.534,2.783 1.500,2.790 1.466,2.783 1.436,2.764 1.417,2.734 1.410,2.700 1.417,2.666 1.436,2.636 1.466,2.617 1.500,2.610 1.534,2.617 1.564,2.636 1.583,2.666 1.590,2.700;1.436,2.636 1.564,2.764;1.436,2.764 1.564,2.636;3.390,2.700 3.383,2.734 3.364,2.764 3.334,2.783 3.300,2.790 3.266,2.783 3.236,2.764 3.217,2.734 3.210,2.700 3.217,2.666 3.236,2.636 3.266,2.617 3.300,2.610 3.334,2.617 3.364,2.636 3.383,2.666 3.390,2.700;3.236,2.636 3.364,2.764;3.236,2.764 3.364,2.636;0,-0.2 0,4.3;1,0.8 4,0.8 4,3.4 1,3.4 1,0.8" poligoni="2.2,0.8 2.5,0.8 2.5,3.4 2.2,3.4" vettori="0,1.6,0,2.6,I" segmenti="0,0.45,1,0.45;0,0.05,4,0.05" etichette="0.4,0.58,a;1.9,0.18,b;4.15,2.0,ℓ;2.1,3.62,dr" xmin=-0.6 xmax=5 ymin=-0.3 ymax=4.4 titolo="Spira rettangolare nel piano di un filo: il campo entra nel foglio e diminuisce con la distanza, e la striscia di larghezza $dr$ è attraversata dal flusso $\dfrac{\mu_0 I}{2\pi r}\,\ell\,dr$"}

:::

## Materiali magnetici

:::definizione{#permeabilita-relativa titolo="Magnetizzazione e permeabilità relativa"}
Gli atomi di un materiale possiedono momenti magnetici, dovuti al moto orbitale e allo spin degli elettroni. In presenza di un campo esterno questi momenti si orientano almeno in parte, e il materiale acquista una **magnetizzazione** $\vec{M}$, cioè un momento magnetico per unità di volume, che si misura in $\mathrm{A/m}$. Un cilindro magnetizzato uniformemente lungo l'asse produce lo stesso campo di una corrente superficiale di $M$ ampere per metro di lunghezza, cioè di un solenoide con $n I = M$.

Si consideri un solenoide lungo riempito di un materiale omogeneo. Il campo interno è la somma del campo delle spire e di quello del materiale, $B = \mu_0\,(n I + M)$. Nei materiali **lineari** la magnetizzazione è proporzionale a $nI$, $M = \chi_m\, n I$, dove la costante adimensionale $\chi_m$ è la **suscettività magnetica**; quindi
$$
B = \mu_r\, \mu_0\, n I , \qquad \mu_r = 1 + \chi_m .
$$
La costante $\mu_r$ è la **permeabilità magnetica relativa** del materiale, e ha per il campo magnetico un ruolo analogo a quello della costante dielettrica relativa $\varepsilon_r$, con una differenza: nei materiali con $\mu_r > 1$ il campo aumenta, mentre un dielettrico riduce il campo elettrico. Per esempio, in un solenoide vuoto con $500$ spire per metro e $I = 0{,}40\,\mathrm{A}$ il campo vale $2{,}5 \cdot 10^{-4}\,\mathrm{T}$; un nucleo di ferro che in queste condizioni ha $\mu_r \approx 2000$ lo porta a circa $0{,}50\,\mathrm{T}$.
:::

:::osservazione{#classi-materiali-magnetici titolo="Diamagneti, paramagneti e ferromagneti"}
I materiali si dividono in tre classi secondo il comportamento in un campo esterno.

- Nei **diamagneti**, come il rame, l'acqua e il bismuto, la suscettività è negativa e molto piccola in valore assoluto, dell'ordine di $10^{-5}$: la magnetizzazione è opposta al campo applicato e il materiale è debolmente respinto dalle zone di campo intenso.
- Nei **paramagneti**, come l'alluminio e l'ossigeno, la suscettività è positiva e piccola: i momenti magnetici atomici si orientano parzialmente nel verso del campo, contrastati dall'agitazione termica, e il materiale è debolmente attratto.
- Nei **ferromagneti**, come il ferro, il nichel e il cobalto, i momenti atomici sono allineati in regioni estese, i domini magnetici, e la permeabilità relativa raggiunge valori da centinaia a decine di migliaia. La relazione tra $M$ e $nI$ *non* è lineare e dipende dalla storia del materiale (isteresi), e una magnetizzazione può restare anche quando la corrente si annulla: così funzionano i magneti permanenti.

Al di sopra di una temperatura caratteristica, la **temperatura di Curie**, un ferromagnete diventa paramagnete; per il ferro vale circa $770\,^\circ\mathrm{C}$. Nei diamagneti e nei paramagneti $\mu_r$ è molto vicina a $1$, e nei calcoli si usa di solito $\mu_0$ come nel vuoto.
:::
