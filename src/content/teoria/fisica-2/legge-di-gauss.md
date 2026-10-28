---
titolo: Flusso del campo elettrico e legge di Gauss
sommario: Che cosa misura il flusso del campo elettrico attraverso una superficie, perché il flusso uscente da una superficie chiusa dipende solo dalla carica racchiusa, come la legge di Gauss dà il campo delle distribuzioni con simmetria sferica, cilindrica e piana, e qual è la sua forma locale.
---

## Flusso del campo elettrico

In tutto l'argomento le cariche sono ferme in un sistema di riferimento inerziale e si trovano nel vuoto.

:::richiamo{titolo="Flusso di un campo vettoriale"}
Sia $S$ una superficie regolare orientata, con versore normale $\hat{n}$ che varia con continuità sulla superficie, e sia $\vec{F}$ un campo vettoriale continuo su $S$. Il flusso di $\vec{F}$ attraverso $S$ è l'integrale di superficie $\displaystyle\iint_S \vec{F} \cdot \hat{n}\, dA$, dove $dA$ è l'elemento d'area. Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::definizione{#flusso-campo-elettrico titolo="Flusso del campo elettrico"}
Sia $S$ una superficie orientata, con versore normale $\hat{n}$. Il **flusso del campo elettrico** attraverso $S$ è
$$
\Phi_E = \iint_S \vec{E} \cdot \hat{n}\, dA = \iint_S E \cos\theta \, dA ,
$$
dove $\theta$ è l'angolo tra $\vec{E}$ e $\hat{n}$ nel punto della superficie. Il flusso è uno scalare e si misura in $\mathrm{N \cdot m^2/C}$. Il prodotto $\hat{n}\,dA$ si indica anche con $d\vec{A}$ e si chiama vettore elemento di superficie.

Se la superficie è piana, di area $A$, e il campo è uniforme, l'integrando è costante e
$$
\Phi_E = E A \cos\theta .
$$
Il flusso è massimo quando il campo è perpendicolare alla superficie, cioè parallelo a $\hat{n}$, ed è nullo quando il campo è parallelo alla superficie. Un quadrato di lato $0{,}10\,\mathrm{m}$ in un campo uniforme di $2{,}0 \cdot 10^3\,\mathrm{N/C}$ che forma l'angolo $\theta = 30^\circ$ con la normale è attraversato dal flusso $2{,}0 \cdot 10^3 \cdot 0{,}010 \cdot \cos 30^\circ\,\mathrm{N \cdot m^2/C} \approx 17\,\mathrm{N \cdot m^2/C}$.

::grafico{assi=0 uguale=1 linee="1.972,2.726 4.028,0.274" segmenti="0,0.4,5.8,0.4;0,0.95,5.8,0.95;0,1.5,5.8,1.5;0,2.05,5.8,2.05;0,2.6,5.8,2.6" vettori="0.1,2.6,1.5,2.6,E;3,1.5,3.996,2.336,n̂" punti="3,1.5,pieno" etichette="3.908,1.728,θ;1.622,2.826,S" xmin=-0.2 xmax=6 ymin=-0.1 ymax=3.1 titolo="Superficie piana $S$ in un campo uniforme; il flusso $\Phi_E = E A \cos\theta$ dipende dall'angolo $\theta$ tra $\vec{E}$ e la normale $\hat{n}$"}

:::

:::osservazione{#flusso-e-linee-di-campo titolo="Flusso e linee di campo"}
Le linee di campo si disegnano con densità proporzionale al modulo del campo, cioè in modo che il numero di linee che attraversano una piccola superficie perpendicolare al campo sia proporzionale a $E\,dA$. Con questa convenzione il flusso attraverso una superficie è proporzionale al numero di linee che la attraversano, contate con il segno più se passano nel verso di $\hat{n}$ e con il segno meno se passano nel verso opposto. Inclinando una superficie piana rispetto a un campo uniforme, le linee che la attraversano diminuiscono in proporzione a $\cos\theta$, in accordo con la formula $E A \cos\theta$. Per la costruzione delle linee di campo si rimanda all'argomento sul campo elettrico.
:::

## Flusso attraverso una superficie chiusa

:::definizione{#flusso-superficie-chiusa titolo="Flusso uscente da una superficie chiusa"}
Una superficie chiusa $S$, come una sfera o la superficie di un cubo, divide lo spazio in una regione interna limitata e in una regione esterna. Su una superficie chiusa si sceglie per convenzione in ogni punto il versore normale **uscente** dalla regione interna, e il flusso
$$
\Phi_E = \oint_S \vec{E} \cdot \hat{n}\, dA
$$
si chiama flusso uscente da $S$; il cerchio sul simbolo d'integrale indica che la superficie è chiusa. Dove il campo esce dalla superficie il contributo al flusso è positivo, dove entra è negativo. Un flusso uscente positivo indica quindi che le linee di campo che escono da $S$ sono più numerose di quelle che entrano, e un flusso nullo che sono tante quante.
:::

:::esempio{titolo="Cubo in un campo uniforme"}
Un cubo di spigolo $\ell$ si trova in un campo uniforme $\vec{E} = E\,\hat{\imath}$, con le facce parallele ai piani coordinati. Sulla faccia da cui il campo entra il versore uscente è $-\hat{\imath}$, quindi il flusso è $-E\ell^2$; sulla faccia opposta il versore uscente è $\hat{\imath}$ e il flusso è $+E\ell^2$. Sulle altre quattro facce il campo è parallelo alla superficie, perciò il flusso è nullo. Il flusso uscente totale è
$$
\Phi_E = -E\ell^2 + E\ell^2 + 0 = 0 .
$$
Ogni linea di campo che entra nel cubo ne esce, e i due contributi si compensano. Con $E = 2{,}0 \cdot 10^3\,\mathrm{N/C}$ e $\ell = 0{,}10\,\mathrm{m}$ ciascuna delle due facce perpendicolari al campo è attraversata da un flusso di modulo $20\,\mathrm{N \cdot m^2/C}$, e il flusso totale è zero.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="2,0.5 4,0.5 4,2.5 2,2.5" segmenti="0,0.9,6,0.9;0,1.5,6,1.5;0,2.1,6,2.1" vettori="0.1,2.1,1.4,2.1,E;2,1.5,1,1.5,n̂₁;4,1.5,5,1.5,n̂₂" etichette="2.1,2.75,faccia 1;3.35,2.75,faccia 2" xmin=-0.1 xmax=6.1 ymin=0.1 ymax=3.1 titolo="Cubo in un campo uniforme, visto di lato; il flusso è $-E\ell^2$ attraverso la faccia 1, $+E\ell^2$ attraverso la faccia 2 e nullo attraverso le facce parallele al campo, quindi il flusso totale è zero"}

:::

## Legge di Gauss

:::richiamo{titolo="Campo di una carica puntiforme"}
Una carica puntiforme $q$ ferma nel punto $O$ genera, nel punto a distanza $r$ da $O$, il campo $\vec{E} = \dfrac{1}{4\pi\varepsilon_0} \dfrac{q}{r^2}\,\hat{r}$, dove $\hat{r}$ è il versore della direzione che va da $O$ al punto. Si rimanda all'argomento sul campo elettrico.
:::

::::teorema{#flusso-carica-puntiforme titolo="Flusso del campo di una carica puntiforme attraverso una sfera"}
Il flusso del campo di una carica puntiforme $q$ uscente da una sfera di raggio $R$ centrata nella carica è
$$
\Phi_E = \frac{q}{\varepsilon_0} ,
$$
qualunque sia il raggio $R$. Il risultato dipende dalla legge $\dfrac{1}{r^2}$ del campo, perché l'area della sfera cresce come $R^2$ e i due fattori si compensano. Per una carica di $1{,}0\,\mathrm{nC}$ il flusso vale $\dfrac{1{,}0 \cdot 10^{-9}}{8{,}85 \cdot 10^{-12}}\,\mathrm{N \cdot m^2/C} \approx 113\,\mathrm{N \cdot m^2/C}$.

:::dimostrazione
Sulla sfera il versore normale uscente è $\hat{n} = \hat{r}$ e il campo ha in ogni punto lo stesso modulo, quindi $\vec{E} \cdot \hat{n} = \dfrac{q}{4\pi\varepsilon_0 R^2}$ è costante su tutta la superficie. Perciò
$$
\Phi_E = \frac{q}{4\pi\varepsilon_0 R^2} \oint_S dA = \frac{q}{4\pi\varepsilon_0 R^2} \cdot 4\pi R^2 = \frac{q}{\varepsilon_0} .
$$
:::
::::

:::definizione{#angolo-solido titolo="Angolo solido"}
Sia $dA$ un elemento di superficie a distanza $r$ da un punto $O$, con versore normale $\hat{n}$ che forma l'angolo $\alpha$ con il versore $\hat{r}$ della direzione che va da $O$ all'elemento. L'**angolo solido** sotto cui l'elemento è visto da $O$ è
$$
d\Omega = \frac{\hat{r} \cdot \hat{n}\, dA}{r^2} = \frac{dA \cos\alpha}{r^2} .
$$
Il prodotto $dA\cos\alpha$ è la proiezione dell'elemento sulla sfera di centro $O$ e raggio $r$; dividendo per $r^2$ si ottiene l'area che il cono di vertice $O$ appoggiato all'elemento stacca sulla sfera di raggio unitario. L'angolo solido si misura in steradianti ($\mathrm{sr}$), è adimensionale e ha il segno di $\cos\alpha$. Una sfera di raggio $R$ è vista dal suo centro sotto l'angolo solido $\dfrac{4\pi R^2}{R^2} = 4\pi$, che è il valore massimo, corrispondente a tutte le direzioni dello spazio.

::grafico{unicolore=1 assi=0 uguale=1 curve="4*cos(t),4*sin(t),0.176,0.543;cos(t),sin(t),0.236,0.483" linee="3.267,1.712 4.25,1.024" segmenti="0,0,3.659,1.918;0,0,4.76,1.147;3.759,1.368,4.98,1.813" vettori="0,0,3.759,1.368;3.759,1.368,4.447,2.351,n̂" punti="0,0,pieno,q" etichette="4.483,1.736,α;4.2,0.574,dA;1.15,0.3,dΩ;1.9,0.95,r" xmin=-0.5 xmax=5.6 ymin=-0.6 ymax=2.9 titolo="L'elemento $dA$, con normale $\hat{n}$ inclinata di $\alpha$ sulla direzione radiale, è visto dalla carica $q$ sotto l'angolo solido $d\Omega = \dfrac{dA \cos\alpha}{r^2}$, che sulla sfera di raggio unitario stacca l'area $d\Omega$"}

:::

::::teorema{#legge-di-gauss titolo="Legge di Gauss"}
Sia $S$ una superficie chiusa, senza cariche puntiformi su di essa, e sia $q_{\text{int}}$ la carica totale contenuta nella regione racchiusa da $S$. Il flusso del campo elettrico uscente da $S$ è
$$
\oint_S \vec{E} \cdot \hat{n}\, dA = \frac{q_{\text{int}}}{\varepsilon_0} .
$$
Il campo $\vec{E}$ è quello generato da *tutte* le cariche, interne ed esterne, mentre il flusso dipende *solo* dalle cariche interne. Se la carica è distribuita con densità volumica $\rho$, la carica interna è $q_{\text{int}} = \displaystyle\iiint_V \rho\, dV$, dove $V$ è la regione racchiusa da $S$. La legge lega il campo alle cariche che lo generano e, per le distribuzioni con simmetria elevata, permette di calcolare il campo senza sommare i contributi delle singole cariche. Una superficie chiusa che racchiude le cariche $+3{,}0\,\mathrm{nC}$ e $-1{,}0\,\mathrm{nC}$ è attraversata dal flusso uscente $\dfrac{2{,}0 \cdot 10^{-9}}{8{,}85 \cdot 10^{-12}}\,\mathrm{N \cdot m^2/C} \approx 226\,\mathrm{N \cdot m^2/C}$, qualunque sia la sua forma.

::grafico{assi=0 uguale=1 curve="2.6*cos(t)+0.3*cos(2*t),1.6*sin(t)+0.25*sin(3*t),0,6.29" punti="-1,0.35,pieno,+q₁;0.9,-0.45,pieno,−q₂;3.7,1.3,pieno,+q₃" etichette="-2.1,1.45,S" xmin=-3.2 xmax=4.6 ymin=-2 ymax=2 titolo="Il flusso del campo attraverso la superficie chiusa $S$ è $\dfrac{q_1 - q_2}{\varepsilon_0}$; la carica esterna $q_3$ modifica il campo su $S$ senza contribuire al flusso totale"}

:::dimostrazione
Si considera prima una carica puntiforme $q$ nel punto $O$. Per la definizione di angolo solido, il contributo al flusso dell'elemento $dA$ della superficie è
$$
\vec{E} \cdot \hat{n}\, dA = \frac{q}{4\pi\varepsilon_0}\,\frac{\hat{r} \cdot \hat{n}\, dA}{r^2} = \frac{q}{4\pi\varepsilon_0}\, d\Omega ,
$$
quindi il flusso è $\dfrac{q}{4\pi\varepsilon_0}$ moltiplicato per l'angolo solido totale, con segno, sotto cui $S$ è vista da $O$. Un cono elementare di vertice $O$ e angolo solido $d\Omega$ stacca su $S$ un elemento a ogni attraversamento, e ciascuno di questi elementi dà il contributo $+d\Omega$ se il cono esce da $S$ e $-d\Omega$ se entra.

- Se $O$ è interno a $S$, ogni semiretta uscente da $O$ attraversa la superficie un numero dispari di volte, alternativamente uscendo ed entrando. I contributi si annullano a coppie, e per ogni direzione resta il contributo $+d\Omega$ di un'uscita. L'angolo solido totale è quindi $4\pi$, e $\Phi_E = \dfrac{q}{4\pi\varepsilon_0} \cdot 4\pi = \dfrac{q}{\varepsilon_0}$.
- Se $O$ è esterno a $S$, ogni semiretta uscente da $O$ che incontra la superficie la attraversa un numero pari di volte, alternativamente entrando e uscendo. I contributi si annullano a coppie, quindi l'angolo solido totale è nullo e $\Phi_E = 0$.

Per una distribuzione qualsiasi di cariche puntiformi il campo è la somma dei campi delle singole cariche, per il **principio di sovrapposizione**, e il flusso dipende linearmente dal campo. Il flusso totale è quindi la somma dei flussi dei campi delle singole cariche, cioè $\dfrac{q_i}{\varepsilon_0}$ per ogni carica $q_i$ interna e zero per ogni carica esterna, e la somma vale $\dfrac{q_{\text{int}}}{\varepsilon_0}$. Per una distribuzione continua il ragionamento si ripete sugli elementi di carica $\rho\,dV$.
:::
::::

:::osservazione{#cariche-esterne titolo="Ruolo delle cariche esterne"}
Una carica esterna a $S$ modifica il campo in ogni punto della superficie, e quindi il flusso attraverso ciascuna porzione di $S$; i contributi positivi e negativi che produce si compensano, e il flusso totale resta lo stesso. Una carica puntiforme positiva posta fuori da una sfera, per esempio, dà flusso entrante attraverso la parte della sfera rivolta verso la carica e flusso uscente attraverso la parte opposta, con somma nulla. Analogamente, se le cariche interne hanno somma zero, il flusso uscente è nullo anche quando il campo sulla superficie è diverso da zero.
:::

:::attenzione{#gauss-e-simmetria}
La legge di Gauss vale per *ogni* superficie chiusa e fissa il valore di un integrale del campo; il valore del campo nei singoli punti resta in generale indeterminato. Un dipolo elettrico, formato dalle cariche $+q$ e $-q$, racchiuso in una sfera centrata nel suo punto medio, ha carica interna nulla, quindi il flusso uscente dalla sfera è zero. Il campo sulla sfera è però diverso da zero quasi ovunque, uscente dalla parte di $+q$ ed entrante dalla parte di $-q$. La legge di Gauss dà il modulo del campo solo quando la simmetria della distribuzione permette di portarlo fuori dall'integrale.
:::

## Calcolo del campo con la legge di Gauss

:::osservazione{#superficie-gaussiana titolo="Metodo della superficie gaussiana"}
Il campo di una distribuzione di carica con simmetria elevata si ricava dalla legge di Gauss in quattro passi.

1. Dalla simmetria della distribuzione si deducono la direzione del campo e le variabili da cui dipende il suo modulo; per una distribuzione con simmetria sferica, per esempio, il campo è radiale e il suo modulo dipende solo dalla distanza dal centro.
2. Si sceglie una superficie chiusa, detta **superficie gaussiana**, che passa per il punto in cui si cerca il campo ed è formata da parti su cui il campo è perpendicolare alla superficie e ha modulo costante, e da parti su cui il campo è parallelo alla superficie.
3. Si calcola il flusso, che risulta il prodotto della componente del campo per un'area, e si calcola la carica interna alla superficie.
4. Si uguaglia il flusso a $\dfrac{q_{\text{int}}}{\varepsilon_0}$ e si ricava la componente del campo.

Le superfici gaussiane usate più spesso sono la sfera concentrica alla distribuzione per la simmetria sferica, il cilindro coassiale per la simmetria cilindrica e il cilindro con le basi parallele al piano carico per la simmetria piana. La superficie gaussiana è una superficie immaginaria, e può attraversare la distribuzione di carica.
:::

## Distribuzioni con simmetria sferica

::::teorema{#campo-guscio-sferico titolo="Campo di un guscio sferico carico"}
Si consideri un guscio sferico sottile di raggio $R$ con carica $Q$ distribuita uniformemente sulla superficie, con densità superficiale $\sigma = \dfrac{Q}{4\pi R^2}$. Il campo nel punto a distanza $r$ dal centro è
$$
\vec{E} =
\begin{cases}
\vec{0} & \text{se } r < R \\[8pt]
\dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q}{r^2}\,\hat{r} & \text{se } r > R
\end{cases}
$$
dove $\hat{r}$ è il versore radiale uscente dal centro. All'esterno il guscio genera lo stesso campo di una carica puntiforme $Q$ posta nel centro, e all'interno il campo è nullo. Con $Q = 5{,}0\,\mathrm{nC}$ e $R = 0{,}20\,\mathrm{m}$, a $0{,}40\,\mathrm{m}$ dal centro il campo vale $\dfrac{8{,}99 \cdot 10^9 \cdot 5{,}0 \cdot 10^{-9}}{0{,}40^2}\,\mathrm{N/C} \approx 281\,\mathrm{N/C}$, e in ogni punto interno vale zero. Lo stesso risultato vale per la forza di gravità di un guscio di massa, e si rimanda all'argomento sulla gravitazione di Fisica 1.

:::dimostrazione
La distribuzione resta la stessa per ogni rotazione attorno a un asse passante per il centro, quindi anche il campo deve restare lo stesso. Ne segue che il modulo del campo dipende solo dalla distanza $r$ dal centro, e che il campo è radiale, $\vec{E} = E(r)\,\hat{r}$, perché una componente perpendicolare a $\hat{r}$ cambierebbe direzione con una rotazione attorno alla retta che congiunge il centro con il punto, mentre la distribuzione resterebbe la stessa.

Si sceglie come superficie gaussiana la sfera di raggio $r$ concentrica al guscio. Su di essa $\hat{n} = \hat{r}$ e $E(r)$ è costante, quindi il flusso uscente è
$$
\Phi_E = E(r) \cdot 4\pi r^2 .
$$
Se $r < R$, la sfera gaussiana non contiene cariche, perciò $E(r) \cdot 4\pi r^2 = 0$ ed $E(r) = 0$. Se $r > R$, la sfera gaussiana contiene tutta la carica $Q$, perciò $E(r) \cdot 4\pi r^2 = \dfrac{Q}{\varepsilon_0}$ ed $E(r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}$.
:::
::::

::::teorema{#campo-sfera-piena titolo="Campo di una sfera uniformemente carica"}
Si consideri una sfera di raggio $R$ con carica $Q$ distribuita uniformemente nel volume, con densità $\rho = \dfrac{3Q}{4\pi R^3}$, per esempio una sfera di materiale isolante. Il campo è $\vec{E} = E(r)\,\hat{r}$, con
$$
E(r) =
\begin{cases}
\dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q\,r}{R^3} = \dfrac{\rho\, r}{3\varepsilon_0} & \text{se } r \leq R \\[12pt]
\dfrac{1}{4\pi\varepsilon_0}\,\dfrac{Q}{r^2} & \text{se } r \geq R
\end{cases}
$$
Il modulo del campo cresce linearmente dal centro alla superficie, dove raggiunge il valore massimo $\dfrac{kQ}{R^2}$, e all'esterno coincide con quello di una carica puntiforme $Q$ posta nel centro. Per una sfera con $Q = 10\,\mathrm{nC}$ e $R = 10\,\mathrm{cm}$ il campo vale circa $8{,}99 \cdot 10^3\,\mathrm{N/C}$ sulla superficie e la metà, circa $4{,}5 \cdot 10^3\,\mathrm{N/C}$, a $5{,}0\,\mathrm{cm}$ dal centro.

::grafico{f="x<0 ? NaN : (x<=1 ? x : 1/x^2);x<0 ? NaN : (x<1 ? 0 : 1/x^2)" xmin=-0.3 xmax=4.2 ymin=-0.2 ymax=1.35 nomi="r,E" segmenti="1,0,1,1" etichette="1.05,-0.12,R" legenda="\text{sfera piena};\text{guscio sferico}" titolo="Modulo del campo in funzione della distanza dal centro, con $r$ in unità di $R$ ed $E$ in unità di $\dfrac{kQ}{R^2}$; per $r > R$ i due campi coincidono con quello di una carica puntiforme"}

:::dimostrazione
La simmetria è la stessa del guscio sferico, quindi $\vec{E} = E(r)\,\hat{r}$ e il flusso uscente dalla sfera gaussiana di raggio $r$ concentrica alla distribuzione è $E(r) \cdot 4\pi r^2$. Se $r \leq R$, la sfera gaussiana racchiude la frazione $\dfrac{r^3}{R^3}$ del volume carico, quindi $q_{\text{int}} = Q\,\dfrac{r^3}{R^3}$, e la **legge di Gauss** dà
$$
E(r) \cdot 4\pi r^2 = \frac{Q\,r^3}{\varepsilon_0 R^3}
\quad\Longrightarrow\quad
E(r) = \frac{Q\,r}{4\pi\varepsilon_0 R^3} .
$$
Sostituendo $Q = \dfrac{4}{3}\pi R^3 \rho$ si ottiene $E(r) = \dfrac{\rho\, r}{3\varepsilon_0}$. Se $r \geq R$, la carica interna è $Q$, e si ottiene $E(r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}$.
:::
::::

:::osservazione{#distribuzioni-sferiche-non-uniformi titolo="Distribuzioni sferiche non uniformi e a strati"}
Il metodo si applica a ogni densità che dipende solo dalla distanza dal centro, $\rho = \rho(r)$, perché la distribuzione ha ancora simmetria sferica. La carica contenuta nella sfera di raggio $r$ si calcola sommando i gusci sferici di raggio $s$ e spessore $ds$, che hanno volume $4\pi s^2\,ds$:
$$
q_{\text{int}}(r) = \int_0^r \rho(s)\, 4\pi s^2\, ds ,
\qquad
E(r) = \frac{q_{\text{int}}(r)}{4\pi\varepsilon_0 r^2} .
$$
Con $\rho = \rho_0\,\dfrac{r}{R}$ per $r \leq R$, per esempio, si ha $q_{\text{int}}(r) = \dfrac{\pi\rho_0 r^4}{R}$, quindi all'interno $E(r) = \dfrac{\rho_0\, r^2}{4\varepsilon_0 R}$, che cresce come il quadrato della distanza. Per una sfera cava con raggio interno $a$ e raggio esterno $b$, uniformemente carica fra i due raggi, il campo è nullo nella cavità e per $a \leq r \leq b$ la carica interna è $\dfrac{4}{3}\pi\rho\,(r^3 - a^3)$. Per le distribuzioni a strati concentrici, come una sfera piena circondata da un guscio, il campo in ogni regione si ottiene allo stesso modo, sommando le cariche degli strati contenuti nella sfera gaussiana.
:::

## Distribuzioni con simmetria cilindrica

::::teorema{#campo-filo-infinito titolo="Campo di un filo rettilineo infinito"}
Si consideri un filo rettilineo infinito con carica distribuita uniformemente, con densità lineare $\lambda$. Il campo nel punto a distanza $r$ dal filo è perpendicolare al filo, giace sulla retta che congiunge il punto al filo e ha componente radiale
$$
E(r) = \frac{\lambda}{2\pi\varepsilon_0 r} = \frac{2k\lambda}{r} .
$$
Il campo decresce come $\dfrac{1}{r}$, più lentamente del campo di una carica puntiforme. Il modello del filo infinito descrive un filo carico di lunghezza finita nei punti la cui distanza dal filo è piccola rispetto alla distanza dagli estremi. Per $\lambda = 2{,}0\,\mathrm{nC/m}$, a $10\,\mathrm{cm}$ dal filo il campo vale $\dfrac{2 \cdot 8{,}99 \cdot 10^9 \cdot 2{,}0 \cdot 10^{-9}}{0{,}10}\,\mathrm{N/C} \approx 360\,\mathrm{N/C}$. Lo stesso risultato si ottiene integrando i contributi degli elementi del filo, e si rimanda all'argomento sul campo elettrico.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="-1.5,-1 1.5,-1 1.5,1 -1.5,1" curve="1.5*cos(t),1+0.25*sin(t),0,6.29;1.5*cos(t),-1+0.25*sin(t),0,6.29" linee="0,-2.3 0,2.3" segmenti="0,-1.6,1.5,-1.6;1.75,-1,1.75,1" vettori="0.05,0.45,2.5,0.45,E;-0.05,0.45,-2.5,0.45;0.05,-0.45,2.5,-0.45;-0.05,-0.45,-2.5,-0.45;0.8,1,0.8,1.8,n̂" etichette="0.65,-1.95,r;1.9,0.05,h;-0.45,2.1,λ;0.12,-1.9,+;0.12,-1.3,+;0.12,1.3,+;0.12,1.9,+" xmin=-2.8 xmax=2.8 ymin=-2.4 ymax=2.4 titolo="Superficie gaussiana per il filo infinito, un cilindro coassiale di raggio $r$ e altezza $h$; il campo è radiale, perpendicolare alla superficie laterale e parallelo alle basi"}

:::dimostrazione
La distribuzione resta la stessa per le traslazioni lungo il filo, per le rotazioni attorno al filo e per le riflessioni rispetto a un piano perpendicolare al filo o a un piano che lo contiene. La riflessione rispetto al piano perpendicolare al filo che passa per il punto cambierebbe il verso di una componente del campo parallela al filo, e la riflessione rispetto al piano che contiene il filo e il punto cambierebbe il verso di una componente tangente alle circonferenze attorno al filo; quindi entrambe le componenti sono nulle. Il campo è perciò radiale e, per le traslazioni e le rotazioni, il suo modulo dipende solo dalla distanza $r$.

Si sceglie come superficie gaussiana un cilindro coassiale al filo, di raggio $r$ e altezza $h$. Sulle due basi il campo è parallelo alla superficie, quindi il loro flusso è nullo; sulla superficie laterale il campo è perpendicolare alla superficie e ha componente costante $E(r)$, quindi il flusso è $E(r) \cdot 2\pi r h$. Il cilindro racchiude il tratto di filo di lunghezza $h$, con carica $\lambda h$, e la **legge di Gauss** dà
$$
E(r) \cdot 2\pi r h = \frac{\lambda h}{\varepsilon_0}
\quad\Longrightarrow\quad
E(r) = \frac{\lambda}{2\pi\varepsilon_0 r} .
$$
L'altezza $h$ si semplifica, perché è una scelta arbitraria della superficie gaussiana.
:::
::::

::::teorema{#campo-cilindro-carico titolo="Campo di un cilindro uniformemente carico"}
Si consideri un cilindro infinito di raggio $R$ con carica distribuita uniformemente nel volume con densità $\rho$, e sia $\lambda = \rho\,\pi R^2$ la carica per unità di lunghezza. Il campo è radiale e la sua componente radiale a distanza $r$ dall'asse è
$$
E(r) =
\begin{cases}
\dfrac{\rho\, r}{2\varepsilon_0} & \text{se } r \leq R \\[12pt]
\dfrac{\lambda}{2\pi\varepsilon_0 r} = \dfrac{\rho R^2}{2\varepsilon_0 r} & \text{se } r \geq R
\end{cases}
$$
All'esterno il cilindro genera lo stesso campo di un filo posto sull'asse con la stessa carica per unità di lunghezza; all'interno il campo cresce linearmente dall'asse alla superficie. Per $\rho = 1{,}0\,\mathrm{\mu C/m^3}$ e $R = 1{,}0\,\mathrm{cm}$ il campo sulla superficie vale $\dfrac{1{,}0 \cdot 10^{-6} \cdot 0{,}010}{2 \cdot 8{,}85 \cdot 10^{-12}}\,\mathrm{N/C} \approx 565\,\mathrm{N/C}$.

::grafico{f="x<0 ? NaN : (x<=1 ? x : 1/x)" xmin=-0.3 xmax=5.2 ymin=-0.2 ymax=1.35 nomi="r,E" segmenti="1,0,1,1" etichette="1.05,-0.12,R" legenda="E(r)" titolo="Campo di un cilindro uniformemente carico, con $r$ in unità di $R$ ed $E$ in unità di $\dfrac{\rho R}{2\varepsilon_0}$; il campo cresce linearmente all'interno e decresce come $\dfrac{1}{r}$ all'esterno"}

:::dimostrazione
La simmetria è la stessa del filo infinito, quindi il campo è radiale e il flusso uscente dal cilindro gaussiano coassiale di raggio $r$ e altezza $h$ è $E(r) \cdot 2\pi r h$. Se $r \leq R$, il cilindro gaussiano racchiude il volume $\pi r^2 h$ di materiale carico e la carica $\rho\,\pi r^2 h$, perciò
$$
E(r) \cdot 2\pi r h = \frac{\rho\,\pi r^2 h}{\varepsilon_0}
\quad\Longrightarrow\quad
E(r) = \frac{\rho\, r}{2\varepsilon_0} .
$$
Se $r \geq R$, la carica racchiusa è $\rho\,\pi R^2 h = \lambda h$, e si ritrova il campo del filo infinito.
:::
::::

:::osservazione{#guscio-cilindrico titolo="Superfici cilindriche cariche e cavo coassiale"}
Una superficie cilindrica infinita di raggio $R$, con carica $\lambda$ per unità di lunghezza distribuita uniformemente, genera un campo nullo per $r < R$, perché il cilindro gaussiano di raggio $r < R$ non racchiude cariche, e il campo del filo infinito per $r > R$. Per due superfici cilindriche coassiali di raggi $a < b$, con cariche per unità di lunghezza $\lambda_1$ e $\lambda_2$, come nel *cavo coassiale*, il cilindro gaussiano di raggio $r$ racchiude zero, una o due superfici cariche, e la legge di Gauss dà
$$
E(r) =
\begin{cases}
0 & \text{se } r < a \\[8pt]
\dfrac{\lambda_1}{2\pi\varepsilon_0 r} & \text{se } a < r < b \\[12pt]
\dfrac{\lambda_1 + \lambda_2}{2\pi\varepsilon_0 r} & \text{se } r > b
\end{cases}
$$
Quando $\lambda_2 = -\lambda_1$ il campo è diverso da zero solo fra le due superfici. Per il cavo coassiale come condensatore si rimanda all'argomento su conduttori, condensatori e dielettrici.
:::

## Distribuzioni con simmetria piana

::::teorema{#campo-piano-infinito titolo="Campo di un piano infinito carico"}
Si consideri un piano infinito con carica distribuita uniformemente, con densità superficiale $\sigma$. Il campo è perpendicolare al piano, ha in ogni punto il modulo
$$
E = \frac{\sigma}{2\varepsilon_0}
$$
e, per $\sigma > 0$, è diretto in verso uscente dal piano da entrambe le parti. In ciascuno dei due semispazi il campo è uniforme e non dipende dalla distanza dal piano. Il modello descrive una lastra carica sottile di dimensioni finite nei punti la cui distanza dalla lastra è piccola rispetto alla distanza dai bordi. Per $\sigma = 1{,}0\,\mathrm{nC/m^2}$ si ha $E = \dfrac{1{,}0 \cdot 10^{-9}}{2 \cdot 8{,}85 \cdot 10^{-12}}\,\mathrm{N/C} \approx 56\,\mathrm{N/C}$. Lo stesso risultato si ottiene come limite del campo di un disco carico quando il raggio tende all'infinito, e si rimanda all'argomento sul campo elettrico.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="-1.2,-0.7 1.2,-0.7 1.2,0.7 -1.2,0.7" curve="1.2+0.22*cos(t),0.7*sin(t),0,6.29;-1.2+0.22*cos(t),0.7*sin(t),0,6.29" linee="0,-2.2 0,2.2" vettori="1.2,0,2.5,0,E;-1.2,0,-2.5,0;0.1,1.15,2.5,1.15;-0.1,1.15,-2.5,1.15;0.1,-1.15,2.5,-1.15;-0.1,-1.15,-2.5,-1.15" etichette="0.95,-1,A;-1.45,-1,A;-0.4,2.05,σ;0.1,-1.9,+;0.1,-1.35,+;0.1,1.35,+;0.1,1.9,+" xmin=-2.8 xmax=2.8 ymin=-2.3 ymax=2.3 titolo="Piano infinito carico visto di taglio e cilindro gaussiano che lo attraversa; il flusso esce solo dalle due basi di area $A$"}

:::dimostrazione
La distribuzione resta la stessa per le traslazioni parallele al piano, per le rotazioni attorno a una retta perpendicolare al piano e per la riflessione rispetto al piano stesso. Quindi il campo è perpendicolare al piano, il suo modulo dipende solo dalla distanza dal piano, e in due punti simmetrici rispetto al piano il campo ha lo stesso modulo e verso opposto. Si sceglie come superficie gaussiana un cilindro con l'asse perpendicolare al piano e con le basi di area $A$ alla stessa distanza dal piano, da parti opposte. Sulla superficie laterale il campo è parallelo alla superficie e il flusso è nullo; su ciascuna base il campo è perpendicolare e uscente, con modulo $E$. Il cilindro racchiude la porzione di piano di area $A$, con carica $\sigma A$, perciò
$$
2 E A = \frac{\sigma A}{\varepsilon_0}
\quad\Longrightarrow\quad
E = \frac{\sigma}{2\varepsilon_0} .
$$
:::
::::

::::teorema{#campo-due-piani titolo="Campo di due piani paralleli con cariche opposte"}
Si considerino due piani infiniti paralleli con densità superficiali uniformi $+\sigma$ e $-\sigma$. Il campo è nullo nelle due regioni esterne ai piani, mentre nella regione fra i piani è uniforme, perpendicolare ai piani, diretto dal piano positivo al piano negativo e di modulo
$$
E = \frac{\sigma}{\varepsilon_0} .
$$
È la disposizione delle armature del condensatore piano, per il quale si rimanda all'argomento su conduttori, condensatori e dielettrici. Per $\sigma = 2{,}0\,\mathrm{nC/m^2}$ il campo fra i piani vale circa $226\,\mathrm{N/C}$.

::grafico{unicolore=1 assi=0 uguale=1 linee="0,-2 0,2;3,-2 3,2" vettori="0.25,1.2,2.75,1.2,E;0.25,0,2.75,0;0.25,-1.2,2.75,-1.2" etichette="-0.38,-1.6,+;-0.38,-0.8,+;-0.38,0,+;-0.38,0.8,+;-0.38,1.6,+;3.12,-1.6,−;3.12,-0.8,−;3.12,0,−;3.12,0.8,−;3.12,1.6,−;-1.7,0.1,E = 0;3.8,0.1,E = 0;-0.25,2.25,+σ;2.8,2.25,−σ" xmin=-2 xmax=5 ymin=-2.2 ymax=2.5 titolo="Due piani paralleli con densità $+\sigma$ e $-\sigma$; i campi dei due piani si sommano fra le armature e si annullano all'esterno"}

:::dimostrazione
Per il **principio di sovrapposizione** il campo è la somma dei campi dei due piani, ciascuno di modulo $\dfrac{\sigma}{2\varepsilon_0}$; il campo del piano positivo è uscente dal piano, quello del piano negativo è entrante. Fra i piani i due campi sono diretti entrambi dal piano positivo verso il piano negativo, quindi i moduli si sommano ed $E = \dfrac{\sigma}{\varepsilon_0}$. In ciascuna delle due regioni esterne i due campi hanno lo stesso modulo e versi opposti, perciò la loro somma è nulla.
:::
::::

::::teorema{#campo-lastra-carica titolo="Campo di una lastra uniformemente carica"}
Si consideri una lastra infinita di spessore $d$ con carica distribuita uniformemente nel volume con densità $\rho$, e sia $x$ l'asse perpendicolare alla lastra con l'origine sul piano medio. Il campo è parallelo all'asse $x$ e la sua componente è
$$
E_x(x) =
\begin{cases}
-\dfrac{\rho\, d}{2\varepsilon_0} & \text{se } x \leq -\dfrac{d}{2} \\[12pt]
\dfrac{\rho\, x}{\varepsilon_0} & \text{se } -\dfrac{d}{2} \leq x \leq \dfrac{d}{2} \\[12pt]
\dfrac{\rho\, d}{2\varepsilon_0} & \text{se } x \geq \dfrac{d}{2}
\end{cases}
$$
All'esterno la lastra genera lo stesso campo di un piano con densità superficiale $\sigma = \rho d$, uguale alla carica per unità di area della lastra; all'interno il campo varia linearmente ed è nullo sul piano medio. Per $\rho = 1{,}0 \cdot 10^{-5}\,\mathrm{C/m^3}$ e $d = 1{,}0\,\mathrm{cm}$ il campo esterno vale circa $5{,}6 \cdot 10^3\,\mathrm{N/C}$.

::grafico{f="x<-1 ? -1 : (x>1 ? 1 : x)" xmin=-3.2 xmax=3.2 ymin=-1.5 ymax=1.5 nomi="x,Eₓ" segmenti="-1,-1.5,-1,1.5;1,-1.5,1,1.5" etichette="1.08,-0.3,d/2;-1.75,0.3,−d/2" legenda="E_x(x)" titolo="Componente $E_x$ del campo di una lastra uniformemente carica di spessore $d$, in unità di $\dfrac{\rho d}{2 \varepsilon_0}$; il campo è lineare all'interno, costante all'esterno"}

:::dimostrazione
La simmetria è quella del piano infinito, e la distribuzione resta la stessa anche per la riflessione rispetto al piano medio; quindi il campo è parallelo all'asse $x$, dipende solo da $x$ e soddisfa $E_x(-x) = -E_x(x)$. Si sceglie come superficie gaussiana un cilindro con l'asse parallelo all'asse $x$ e con le basi di area $A$ nelle posizioni $-x$ e $x$, con $x > 0$. Il flusso attraverso la superficie laterale è nullo, e su ciascuna base il flusso uscente è $E_x(x)\,A$, quindi il flusso totale è $2E_x(x)\,A$. Se $x \leq \dfrac{d}{2}$, il cilindro racchiude la carica $\rho \cdot 2xA$, perciò
$$
2E_x(x)\,A = \frac{2\rho\, x A}{\varepsilon_0}
\quad\Longrightarrow\quad
E_x(x) = \frac{\rho\, x}{\varepsilon_0} .
$$
Se $x \geq \dfrac{d}{2}$, la carica racchiusa è $\rho\, d A$, e si ottiene $E_x(x) = \dfrac{\rho\, d}{2\varepsilon_0}$. I valori per $x < 0$ seguono dalla relazione $E_x(-x) = -E_x(x)$.
:::
::::

:::osservazione{#discontinuita-campo titolo="Discontinuità del campo attraverso una superficie carica"}
Attraversando un piano con densità $\sigma$, la componente del campo perpendicolare al piano passa da $-\dfrac{\sigma}{2\varepsilon_0}$ a $+\dfrac{\sigma}{2\varepsilon_0}$, cioè ha un salto di $\dfrac{\sigma}{\varepsilon_0}$. Lo stesso salto si ha attraversando una qualunque superficie carica. Infatti, applicando la legge di Gauss a un piccolo cilindro con le basi parallele alla superficie e vicinissime a essa, da parti opposte, il flusso attraverso la superficie laterale diventa trascurabile, e si ottiene
$$
E_{n,2} - E_{n,1} = \frac{\sigma}{\varepsilon_0} ,
$$
dove $\sigma$ è la densità superficiale nel punto considerato ed $E_{n,1}$, $E_{n,2}$ sono le componenti del campo lungo la normale orientata dalla parte 1 alla parte 2. Per il guscio sferico, per esempio, il campo passa da $0$ a $\dfrac{Q}{4\pi\varepsilon_0 R^2} = \dfrac{\sigma}{\varepsilon_0}$. Una distribuzione volumica con densità limitata, come la lastra, genera un campo continuo. Il salto si usa per il campo vicino alla superficie di un conduttore, e si rimanda all'argomento su conduttori, condensatori e dielettrici.
:::

## Forma locale della legge di Gauss

:::richiamo{titolo="Teorema della divergenza"}
Sia $V$ un dominio regolare dello spazio con frontiera $S$ orientata con il versore normale uscente $\hat{n}$, e sia $\vec{F}$ un campo vettoriale di classe $C^1$ su un aperto che contiene $V$. Allora
$$
\oint_S \vec{F} \cdot \hat{n}\, dA = \iiint_V \nabla \cdot \vec{F}\, dV ,
\qquad
\nabla \cdot \vec{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} .
$$
Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

::::teorema{#forma-locale-gauss titolo="Forma locale della legge di Gauss"}
Se la carica è distribuita con densità volumica $\rho$ continua e il campo elettrico è di classe $C^1$, in ogni punto vale
$$
\nabla \cdot \vec{E} = \frac{\rho}{\varepsilon_0} .
$$
La forma integrale della legge di Gauss riguarda una superficie e la carica che essa racchiude; la forma locale lega le derivate del campo in un punto alla densità di carica nello stesso punto, e permette di ricavare la densità di carica da un campo noto. Dove non ci sono cariche la divergenza del campo è nulla; dove $\rho > 0$ le linee di campo nascono e dove $\rho < 0$ terminano. Il campo $\vec{E} = a\,x\,\hat{\imath}$, con $a$ costante, ha per esempio divergenza $a$, quindi è generato dalla densità uniforme $\rho = \varepsilon_0 a$. Questa relazione è la prima delle equazioni di Maxwell, per le quali si rimanda all'argomento su equazioni di Maxwell e onde elettromagnetiche.

:::dimostrazione
Sia $V$ un qualunque dominio regolare con frontiera $S$. Per il **teorema della divergenza** e per la legge di Gauss,
$$
\iiint_V \nabla \cdot \vec{E}\, dV = \oint_S \vec{E} \cdot \hat{n}\, dA = \frac{1}{\varepsilon_0} \iiint_V \rho\, dV ,
$$
quindi la funzione $g = \nabla \cdot \vec{E} - \dfrac{\rho}{\varepsilon_0}$, che è continua, ha integrale nullo su ogni dominio regolare. Se in un punto $P_0$ fosse $g(P_0) > 0$, per il teorema della permanenza del segno sarebbe $g > 0$ in una sfera di centro $P_0$, e l'integrale di $g$ su quella sfera sarebbe positivo; allo stesso modo si esclude $g(P_0) < 0$. Perciò $g = 0$ in ogni punto, cioè $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$.
:::
::::

:::esempio{titolo="Divergenza del campo di una sfera uniformemente carica"}
All'interno di una sfera uniformemente carica il campo è $\vec{E} = \dfrac{\rho}{3\varepsilon_0}\, r\,\hat{r}$, e $r\,\hat{r} = x\,\hat{\imath} + y\,\hat{\jmath} + z\,\hat{k}$ è il vettore posizione $\vec{r}$. Quindi
$$
\nabla \cdot \vec{E} = \frac{\rho}{3\varepsilon_0}\left( \frac{\partial x}{\partial x} + \frac{\partial y}{\partial y} + \frac{\partial z}{\partial z} \right) = \frac{\rho}{3\varepsilon_0} \cdot 3 = \frac{\rho}{\varepsilon_0} ,
$$
in accordo con la forma locale. All'esterno il campo è $\vec{E} = \dfrac{Q}{4\pi\varepsilon_0}\,\dfrac{\vec{r}}{r^3}$. Poiché $\dfrac{\partial}{\partial x}\left( \dfrac{x}{r^3} \right) = \dfrac{1}{r^3} - \dfrac{3x^2}{r^5}$, e analogamente per $y$ e $z$, la somma delle tre derivate è
$$
\frac{3}{r^3} - \frac{3\,(x^2 + y^2 + z^2)}{r^5} = \frac{3}{r^3} - \frac{3}{r^3} = 0 ,
$$
quindi la divergenza è nulla, in accordo con $\rho = 0$ fuori dalla sfera.
:::
