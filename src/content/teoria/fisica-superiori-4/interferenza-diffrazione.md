---
titolo: Interferenza e diffrazione della luce
sommario: Le differenze di fase determinano le frange di Young, i minimi di diffrazione
  e gli ordini di un reticolo.
---

## Luce come onda

:::definizione{#luce-onda titolo="Frequenza e lunghezza d'onda"}
La **lunghezza d'onda** è la distanza fra due punti consecutivi con la stessa fase lungo la propagazione. La frequenza $f$ è il numero di oscillazioni al secondo. In un mezzo in cui la luce ha velocità di fase $u$ vale $u=f\lambda$. Nel vuoto $u=c$ e la lunghezza d'onda si indica con $\lambda_0$.
$$
c=f\lambda_0,\qquad c=3{,}00\cdot10^8\,\mathrm{m/s}.
$$
Una radiazione con $\lambda_0=600\,\mathrm{nm}=6{,}00\cdot10^{-7}\,\mathrm m$ ha $f=5{,}00\cdot10^{14}\,\mathrm{Hz}$. A un'interfaccia ferma la frequenza si conserva. In un mezzo di indice $n$ vale $u=\dfrac cn$, quindi $\lambda=\dfrac{\lambda_0}{n}$. Per $n=1{,}50$ la radiazione dell'esempio ha $\lambda=400\,\mathrm{nm}$.
:::

:::esempio{titolo="Frequenze del visibile"}
Nel vuoto il visibile va da circa $380\,\mathrm{nm}$ (violetto) a circa $750\,\mathrm{nm}$ (rosso). Per $\lambda_0=750\,\mathrm{nm}$ si ha $f=\dfrac{3{,}00\cdot10^8}{7{,}50\cdot10^{-7}}\,\mathrm{Hz}=4{,}00\cdot10^{14}\,\mathrm{Hz}$ e per $\lambda_0=380\,\mathrm{nm}$ si ha $f=7{,}89\cdot10^{14}\,\mathrm{Hz}$. La frequenza del violetto è quindi quasi doppia di quella del rosso.
:::

:::attenzione
Il colore di una luce è associato alla frequenza, che non cambia all'interfaccia. Una radiazione rossa con $\lambda_0=700\,\mathrm{nm}$ che entra in un vetro con $n=1{,}50$ ha $\lambda=\dfrac{700}{1{,}50}\,\mathrm{nm}=467\,\mathrm{nm}$, un valore che nel vuoto corrisponde al blu. La luce nel vetro resta rossa, perché la sua frequenza $f=4{,}29\cdot10^{14}\,\mathrm{Hz}$ è la stessa.
:::

:::osservazione
Nel modello geometrico un'apertura produce una regione illuminata individuata dal percorso dei raggi. La luce può arrivare anche al di fuori di questa regione. La larghezza dell'apertura rispetto a $\lambda$ determina quanto questo allargamento è osservabile. Per calcolare la distribuzione di intensità servono la sovrapposizione delle onde e la loro fase.
:::

## Sovrapposizione e coerenza

:::definizione{#coerenza titolo="Sorgenti coerenti"}
Due onde sono **coerenti** se mantengono una differenza di fase stabile durante il tempo di osservazione. Due lampade indipendenti con lo stesso colore nominale hanno in genere fasi che variano indipendentemente. Nell'esperimento di Young la stessa sorgente illumina entrambe le fenditure, quindi si può ottenere una relazione di fase stabile.

Nel regime lineare si sommano i campi elettrici. Per onde della stessa frequenza e polarizzazione, l'intensità media è proporzionale al quadrato dell'ampiezza del campo risultante. Indicando con $I_1$ e $I_2$ le intensità singole e con $\Delta\varphi$ la differenza di fase, si trova
$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi.
$$
Il prodotto incrociato viene dal quadrato della somma dei campi. Se la fase varia rapidamente in modo casuale, la media del coseno è nulla e rimane $I_1+I_2$.
:::

::::teorema{#intensita-sovrapposizione titolo="Intensità della sovrapposizione di due onde"}
In un punto arrivano due onde della stessa frequenza angolare $\omega$ e della stessa polarizzazione, con campi $E_1=E_{01}\cos\omega t$ e $E_2=E_{02}\cos(\omega t+\Delta\varphi)$. L'intensità media è proporzionale alla media temporale di $(E_1+E_2)^2$. Indicando con $I_1=k\dfrac{E_{01}^2}{2}$ e $I_2=k\dfrac{E_{02}^2}{2}$ le intensità singole, con $k$ costante di proporzionalità, risulta
$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi.
$$
Con $I_1=I_2$ l'intensità varia fra $0$ e $4I_1$, perché in fase l'ampiezza raddoppia e l'intensità, proporzionale al suo quadrato, diventa quadrupla.

:::dimostrazione
Si sviluppa il quadrato della somma:
$$
(E_1+E_2)^2=E_{01}^2\cos^2\omega t+E_{02}^2\cos^2(\omega t+\Delta\varphi)+2E_{01}E_{02}\cos\omega t\cos(\omega t+\Delta\varphi).
$$
Su un periodo la media di ciascun $\cos^2$ vale $\dfrac12$. Per il terzo termine si usa $\cos\alpha\cos\beta=\dfrac12\left[\cos(\alpha-\beta)+\cos(\alpha+\beta)\right]$, quindi
$$
\cos\omega t\cos(\omega t+\Delta\varphi)=\frac12\left[\cos\Delta\varphi+\cos(2\omega t+\Delta\varphi)\right].
$$
Il termine $\cos(2\omega t+\Delta\varphi)$ ha media nulla su un periodo, perciò la media del prodotto è $\dfrac12\cos\Delta\varphi$. La media del quadrato è
$$
\left\langle(E_1+E_2)^2\right\rangle=\frac{E_{01}^2}{2}+\frac{E_{02}^2}{2}+E_{01}E_{02}\cos\Delta\varphi.
$$
Moltiplicando per $k$ i primi due addendi diventano $I_1$ e $I_2$. Dalle definizioni di $I_1$ e $I_2$ si ha $E_{01}E_{02}=\dfrac{2}{k}\sqrt{I_1I_2}$, quindi il terzo addendo moltiplicato per $k$ vale $2\sqrt{I_1I_2}\cos\Delta\varphi$.
:::
::::

:::esempio{titolo="Frange scure con sorgenti di intensità diversa"}
Con $I_1=I_2=I_s$ i contributi in fase hanno ampiezza doppia e intensità $4I_s$. In opposizione i campi si annullano. Con $I_1=9\,\mathrm{W/m^2}$ e $I_2=4\,\mathrm{W/m^2}$ le ampiezze sono invece diverse. Il massimo vale $(3+2)^2\,\mathrm{W/m^2}=25\,\mathrm{W/m^2}$ e il minimo $(3-2)^2\,\mathrm{W/m^2}=1\,\mathrm{W/m^2}$. Il minimo è ancora una zona meno luminosa, ma ha intensità positiva. L'interferenza ridistribuisce l'intensità fra zone chiare e scure.
:::

:::osservazione
Con $I_1=I_2=I_s$ vale $I=2I_s(1+\cos\Delta\varphi)=4I_s\cos^2\dfrac{\Delta\varphi}{2}$. Su un intervallo di $\Delta\varphi$ pari a $2\pi$ la media di $\cos\Delta\varphi$ è nulla, quindi l'intensità media è $2I_s$, cioè $I_1+I_2$. I massimi valgono il doppio dell'intensità media e i minimi zero, perciò l'energia si ridistribuisce fra zone chiare e scure e il totale si conserva.
:::

## Differenza di cammino e fase

:::teorema{#cammino-fase titolo="Condizioni di interferenza"}
Se le sorgenti sono in fase e le onde attraversano lo stesso mezzo, un cammino più lungo di $\lambda$ aggiunge un ciclo completo. Una differenza di cammino $\delta$ corrisponde quindi a
$$
\Delta\varphi=\frac{2\pi\delta}{\lambda}.
$$
Il massimo si ottiene quando $\delta=m\lambda$, con $m$ intero. Il minimo si ottiene quando $\delta=\left(m+\dfrac12\right)\lambda$. Perché il minimo abbia intensità nulla, devono coincidere anche le ampiezze dei campi. Con $\lambda=600\,\mathrm{nm}$ e $\delta=1{,}20\,\mathrm{\mu m}=1200\,\mathrm{nm}$, lo sfasamento è $4\pi$ e le onde sono in fase. A $\delta=300\,\mathrm{nm}$ si ottiene $\Delta\varphi=\pi$ e le onde sono in opposizione.

::grafico{f="cos(x);cos(x+pi)" xmin=0 xmax=7 ymin=-1.5 ymax=1.5 nomi="φ,E" legenda="E=\cos\varphi;E=\cos(\varphi+\pi)" titolo="In opposizione di fase, a ogni valore di una delle due onde corrisponde il valore opposto per l'altra."}
:::

:::esempio{titolo="Ordine di un punto dello schermo"}
Due onde coerenti in fase con $\lambda=500\,\mathrm{nm}$ arrivano in un punto con cammini che differiscono di $\delta=1{,}50\,\mathrm{\mu m}$. Poiché $\dfrac{\delta}{\lambda}=\dfrac{1500}{500}=3$, il punto è un massimo di ordine $m=3$. Con $\lambda=600\,\mathrm{nm}$ si ha $\dfrac{\delta}{\lambda}=2{,}5$, quindi lo stesso punto è un minimo. Il tipo di punto dipende dal rapporto $\dfrac{\delta}{\lambda}$ e quindi dal colore della luce.
:::

:::osservazione{#cammino-ottico titolo="Cammino ottico"}
In tratti di lunghezza $\ell_j$ e indice $n_j$, il numero totale di cicli è la somma di $\dfrac{n_j\ell_j}{\lambda_0}$. Il **cammino ottico** è la somma dei prodotti $n_j\ell_j$. Si confrontano quindi i due cammini ottici e si converte la loro differenza in fase usando la lunghezza d'onda nel vuoto $\lambda_0$. Se esiste già uno sfasamento iniziale, si somma a quello dovuto alla propagazione.

Una lamina attraversata normalmente, di indice $1{,}50$ e spessore $600\,\mathrm{nm}$, sostituisce lo stesso spessore di aria. L'aumento di cammino ottico è $(1{,}50-1)\cdot600\,\mathrm{nm}=300\,\mathrm{nm}$. Per luce con $\lambda_0=600\,\mathrm{nm}$ ciò corrisponde a uno sfasamento di $\pi$.
:::

:::esempio{titolo="Lamina davanti a una fenditura"}
Nel dispositivo di Young con $\lambda=500\,\mathrm{nm}$, $L=2{,}0\,\mathrm m$ e $d=0{,}25\,\mathrm{mm}$ una fenditura è coperta da una lamina di indice $1{,}50$ e spessore $2{,}0\,\mathrm{\mu m}$. Il cammino ottico di quel ramo aumenta di $(1{,}50-1)\cdot2{,}0\,\mathrm{\mu m}=1{,}0\,\mathrm{\mu m}$, cioè di $\dfrac{1{,}0\,\mathrm{\mu m}}{0{,}50\,\mathrm{\mu m}}=2$ lunghezze d'onda. Il massimo centrale si trova ora dove la differenza di cammino geometrico compensa questo aumento, cioè dove $d\dfrac{y}{L}=1{,}0\,\mathrm{\mu m}$. Si ricava
$$
y=\frac{1{,}0\cdot10^{-6}\cdot2{,}0}{0{,}25\cdot10^{-3}}\,\mathrm m=8{,}0\,\mathrm{mm},
$$
dalla parte della fenditura coperta. L'interfrangia è $\dfrac{\lambda L}{d}=4{,}0\,\mathrm{mm}$, quindi la figura si è spostata di due frange.
:::

## Doppia fenditura di Young

::::teorema{#young titolo="Posizione dei massimi e interfrangia"}
Due fenditure strette distano $d$ e sono illuminate in fase. In campo lontano i massimi dell'interferenza soddisfano $d\sin\theta_m=m\lambda$. L'angolo $\theta_m$ si misura dalla normale al piano delle fenditure. Lo schermo parallelo al piano delle fenditure è a distanza $L$, e la coordinata $y$ si misura dal punto dove arriva la normale passante per il centro. La geometria dello schermo dà $y=L\tan\theta$. Per $\theta$ piccolo, $\tan\theta\simeq\sin\theta$. Ne seguono la posizione del massimo di ordine $m$ e l'**interfrangia** $\Delta y$ tra massimi consecutivi.
$$
y_m\simeq\frac{m\lambda L}{d},\qquad
\Delta y\simeq\frac{\lambda L}{d}.
$$
I minimi di due fenditure di uguale ampiezza soddisfano $d\sin\theta=\left(m+\dfrac{1}{2}\right)\lambda$. Il primo minimo positivo è quindi a metà fra il centro e il primo massimo laterale nel modello di piccoli angoli.

:::dimostrazione
Siano $r_-$ e $r_+$ le distanze dal punto dello schermo alle fenditure di coordinate verticali $-\dfrac d2$ e $+\dfrac d2$. Per Pitagora $r_-^2=L^2+\left(y+\dfrac d2\right)^2$ e $r_+^2=L^2+\left(y-\dfrac d2\right)^2$. Sottraendo i quadrati si ottiene
$$
r_- - r_+=\frac{r_-^2-r_+^2}{r_-+r_+}=\frac{2dy}{r_-+r_+}.
$$
In campo lontano entrambe le distanze sono vicine a $\sqrt{L^2+y^2}$. Si ricava $r_--r_+\simeq\dfrac{dy}{\sqrt{L^2+y^2}}=d\sin\theta$. Si impone $r_--r_+=m\lambda$. Per piccoli angoli si ottiene $y_m\simeq\dfrac{m\lambda L}{d}$, e dalla differenza fra due ordini consecutivi segue $\Delta y$.
:::
::::

:::esempio{titolo="Frange sullo schermo"}
::grafico{assi=0 linee="0,-2.7 0,-1.45;0,-1.2 0,1.2;0,1.45 0,2.7;6,-2.7 6,3.25" segmenti="-0.6,0,6.2,0;0,0,6,2.25" vettori="0,1.325,6,2.25;0,-1.325,6,2.25" punti="6,0,pieno,O;6,2.25,pieno,P" etichette="-0.9,1.47,S₊;-0.9,-1.18,S₋;2.85,-0.48,L;6.2,0.9,y;4.45,2.95,schermo" xmin=-1.15 xmax=7.35 ymin=-3 ymax=3.5 titolo="I cammini dalle due fenditure a P hanno lunghezze diverse. Il disegno accentua la separazione fra le fenditure."}

Con $\lambda=600\,\mathrm{nm}$, $L=2{,}0\,\mathrm m$ e $d=0{,}30\,\mathrm{mm}$ si ottiene $\Delta y=4{,}0\,\mathrm{mm}$. I primi massimi laterali sono a $y=\pm4{,}0\,\mathrm{mm}$ e i primi minimi a $y\simeq\pm2{,}0\,\mathrm{mm}$. Il valore $\dfrac{|y|}{L}$ è dell'ordine di $10^{-3}$, perciò l'approssimazione dei piccoli angoli è coerente con il risultato.

::grafico{f="cos(pi*x)^2" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}=\cos^2\left(\pi\dfrac{y}{\Delta y}\right)" punti="-1.5,0;-0.5,0;0.5,0;1.5,0" titolo="$u=\dfrac{y}{\Delta y}$ è la coordinata sullo schermo in unità di interfrangia. Nel modello delle due fenditure strette, i massimi sono separati da un'interfrangia. I primi punti scuri sono a metà fra i massimi."}
:::

:::esempio{titolo="Luce bianca"}
Con $d=0{,}30\,\mathrm{mm}$ e $L=2{,}0\,\mathrm m$ il primo massimo laterale cade a $y=\dfrac{\lambda L}{d}$. Per il violetto ($400\,\mathrm{nm}$) si ha $y=2{,}7\,\mathrm{mm}$ e per il rosso ($700\,\mathrm{nm}$) $y=4{,}7\,\mathrm{mm}$. Il massimo centrale ha $\delta=0$ per ogni colore, quindi al centro la luce è bianca, mentre ai lati i massimi dei vari colori sono in posizioni diverse.

::grafico{f="cos(pi*x/2.667)^2;cos(pi*x/4.667)^2" xmin=-6 xmax=6 ymin=0 ymax=1.25 nomi="y,I/Imax" legenda="\lambda_0=400\,\mathrm{nm};\lambda_0=700\,\mathrm{nm}" titolo="La coordinata $y$ è in millimetri. Le due curve hanno il massimo in comune nell'origine e periodi $\dfrac{\lambda L}{d}$ diversi."}
:::

:::attenzione
La relazione $y_m\simeq\dfrac{m\lambda L}{d}$ vale per $\theta$ piccolo. Con $d=2{,}0\,\mathrm{\mu m}$ e $\lambda=500\,\mathrm{nm}$ il terzo ordine ha $\sin\theta_3=0{,}75$, quindi $\theta_3=48{,}6^\circ$ e $y_3=L\tan\theta_3=1{,}13\,L$, mentre la formula darebbe $y_3=0{,}75\,L$.
:::

:::esempio{titolo="Misura di una lunghezza d'onda"}
Con $d=0{,}30\,\mathrm{mm}$ e $L=1{,}50\,\mathrm m$, dieci interfrange consecutivi occupano $24\,\mathrm{mm}$ sullo schermo. Quindi $\Delta y=2{,}4\,\mathrm{mm}$ e da $\Delta y=\dfrac{\lambda L}{d}$ si ricava
$$
\lambda=\frac{\Delta y\,d}{L}=\frac{2{,}4\cdot10^{-3}\cdot0{,}30\cdot10^{-3}}{1{,}50}\,\mathrm m=4{,}8\cdot10^{-7}\,\mathrm m=480\,\mathrm{nm}.
$$
Un errore di lettura di $1\,\mathrm{mm}$ sulla lunghezza misurata incide per circa il $4\%$ sul tratto di dieci interfrange e per circa il $42\%$ su un solo interfrangia.
:::

## Diffrazione da fenditura singola

:::teorema{#diffrazione titolo="Posizione dei minimi"}
Una fenditura di larghezza $a$ è illuminata uniformemente a incidenza normale. Nel campo lontano i minimi di diffrazione soddisfano
$$
a\sin\theta_m=m\lambda,\qquad m=\pm1,\pm2,\ldots
$$
Al centro tutti i contributi arrivano in fase e si osserva il massimo principale. Per capire il primo minimo, si dividono i punti della fenditura in due metà. Ogni punto della prima metà si accoppia con un punto della seconda a distanza $\dfrac a2$. Nella direzione $\theta_1$, le due onde hanno differenza di cammino $\dfrac a2\sin\theta_1=\dfrac{\lambda}{2}$ e si annullano. Per un ordine positivo $m$ si possono accoppiare intervalli adiacenti fra i $2m$ intervalli uguali della fenditura. La separazione è allora $\dfrac{a}{2m}$, che dà ancora differenza di cammino $\dfrac{\lambda}{2}$.

::grafico{assi=0 uguale=1 linee="0,-3 0,-2;0,2 0,3" segmenti="0,-2,0,2;0,1,0.8,-0.6;-0.82,-2,-0.82,2" vettori="0,-1,4.6,1.3;0,1,4.6,3.3" punti="0,-1,pieno,A;0,1,pieno,B;0.8,-0.6,pieno,H" etichette="-1.18,0,a;1.2,-0.65,Δs;2.35,3.45,primo minimo" xmin=-1.55 xmax=5.35 ymin=-3.15 ymax=3.8 titolo="Le onde emesse da A e B, distanti $\dfrac a2$, viaggiano quasi parallele. La proiezione AH rappresenta la differenza di cammino $\Delta s=\dfrac a2\sin\theta_1$."}
:::

:::esempio{titolo="Minimo di ordine due"}
Una fenditura larga $a=0{,}10\,\mathrm{mm}$ è illuminata con $\lambda=500\,\mathrm{nm}$. Per $m=2$ si ha
$$
\sin\theta_2=\frac{2\lambda}{a}=\frac{2\cdot5{,}0\cdot10^{-7}}{1{,}0\cdot10^{-4}}=0{,}010.
$$
L'angolo è piccolo, quindi su uno schermo a $L=2{,}0\,\mathrm m$ il minimo è a $y_2\simeq L\sin\theta_2=20\,\mathrm{mm}$ dal centro, il doppio di $y_1=10\,\mathrm{mm}$.
:::

:::teorema{#massimo-centrale titolo="Larghezza del massimo centrale"}
Per una geometria di campo lontano e piccoli angoli, il primo minimo positivo è a $y_1\simeq\dfrac{\lambda L}{a}$. Il massimo centrale occupa l'intervallo fra $-y_1$ e $+y_1$. Quindi la sua larghezza è
$$
w\simeq\frac{2\lambda L}{a}.
$$
Con $a=0{,}20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$ e $L=2{,}0\,\mathrm m$ si trova $y_1=6{,}0\,\mathrm{mm}$ e $w=12\,\mathrm{mm}$. A parità di distanza e lunghezza d'onda, dimezzare l'apertura raddoppia la larghezza della figura centrale. Per angoli grandi ma con un primo minimo a distanza finita, si usa $y_1=L\tan\left(\arcsin\left(\dfrac{\lambda}{a}\right)\right)$. Se $\dfrac{\lambda}{a}\geq1$, il primo minimo è radente oppure manca, quindi lo schermo piano davanti alla fenditura non lo mostra.

::grafico{f="(sin(pi*x)/(pi*x))^2" punti="-1,0,pieno;0,1,pieno;1,0,pieno" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}" titolo="$u=\dfrac{y}{y_1}$ è la coordinata in unità della distanza dal primo minimo. Il massimo centrale si estende fra il primo minimo negativo e il primo minimo positivo. Il punto in $y=0$ è il limite della formula."}
:::

:::osservazione
Fra due minimi consecutivi c'è un massimo laterale largo $\dfrac{\lambda L}{a}$, cioè metà del massimo centrale. L'intensità dei massimi laterali è molto minore: il primo vale circa il $4{,}7\%$ di quella del massimo centrale e il secondo circa l'$1{,}6\%$. Circa il $90\%$ della luce che attraversa la fenditura arriva nel massimo centrale.
:::

:::attenzione
Il valore $y_1=\dfrac{\lambda L}{a}$ è la distanza di un minimo dal centro. Per $a=0{,}20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$ e $L=2{,}0\,\mathrm m$ si ha $y_1=6{,}0\,\mathrm{mm}$, mentre la larghezza del massimo centrale è $w=12\,\mathrm{mm}$. Se la larghezza $w$ misurata sullo schermo viene inserita al posto di $y_1$, la larghezza $a$ calcolata risulta dimezzata.
:::

:::esempio{titolo="Primo minimo ad angolo grande"}
Con $a=1{,}0\,\mathrm{\mu m}$ e $\lambda=500\,\mathrm{nm}$ si ha $\sin\theta_1=\dfrac{\lambda}{a}=0{,}50$, quindi $\theta_1=30^\circ$. Su uno schermo a $L=2{,}0\,\mathrm m$ il primo minimo è a $y_1=L\tan30^\circ=1{,}15\,\mathrm m$, mentre la formula dei piccoli angoli darebbe $\dfrac{\lambda L}{a}=1{,}00\,\mathrm m$. Il secondo minimo richiederebbe $\sin\theta_2=1$, quindi non compare su uno schermo piano.
:::

## Reticolo di diffrazione

:::teorema{#reticolo titolo="Massimi di un reticolo"}
Un reticolo ha molte fenditure parallele con passo $d$. Il passo è la distanza fra fenditure adiacenti. Con luce incidente normalmente, si ha un massimo principale quando le onde provenienti dalle fenditure adiacenti arrivano separate da un numero intero di cicli. Perciò
$$
d\sin\theta_m=m\lambda.
$$

::grafico{assi=0 uguale=1 segmenti="0,0,4,0;0,1,0.433,0.25" vettori="0,0,3.6,2.078;0,1,3.6,3.078;0,2,3.6,4.078" punti="0,0,pieno,F₁;0,1,pieno,F₂;0,2,pieno,F₃;0.433,0.25,pieno,H" etichette="-0.45,0.5,d;1.7,0.15,θ;0.75,0.75,Δs" xmin=-1 xmax=4.2 ymin=-0.5 ymax=4.5 titolo="Le onde uscenti da due fenditure adiacenti nella direzione $\theta$ hanno differenza di cammino $\Delta s=d\sin\theta$, uguale alla lunghezza di $F_1H$."}

Aumentando il numero di fenditure illuminate a parità di passo, più contributi si sommano in fase al massimo. Appena ci si sposta dalla direzione del massimo, lo sfasamento accumulato fra fenditure lontane riduce la somma. I massimi principali risultano più stretti che nel caso di due fenditure.

Un reticolo da $500$ righe per millimetro ha $d=\dfrac{1}{500}\,\mathrm{mm}=2{,}0\,\mathrm{\mu m}$. Con $\lambda=500\,\mathrm{nm}=0{,}50\,\mathrm{\mu m}$ si ha $\sin\theta_1=0{,}25$, quindi $\theta_1\simeq14{,}5^\circ$. L'ordine $m=4$ è radente, poiché $4\lambda=d$. Sullo schermo piano davanti al reticolo arrivano solo $m=0,\pm1,\pm2,\pm3$. Per $|m|\lambda>d$ il seno richiesto sarebbe maggiore di uno in modulo.

::grafico{f="cos(pi*x)^2;pow(sin(6*pi*(x+0.0000001))/(6*sin(pi*(x+0.0000001))),2)" xmin=-2 xmax=2 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="N=2;N=6" titolo="$u=\dfrac{d\sin\theta}{\lambda}$. I massimi principali sono agli interi per ogni $N$. Con $N=6$ sono più stretti e fra due massimi consecutivi compaiono cinque minimi."}
:::

:::attenzione
Gli angoli dei massimi principali dipendono da $d$ e da $\lambda$ e restano gli stessi se si illuminano più righe. Con $d=2{,}0\,\mathrm{\mu m}$ e $\lambda=500\,\mathrm{nm}$ il primo massimo è a $14{,}5^\circ$ sia con $N=100$ sia con $N=10\,000$ righe illuminate. Con $N$ maggiore i massimi diventano più stretti.
:::

:::esempio{titolo="Coincidenza di due ordini"}
Sul medesimo reticolo, due colori possono dare un massimo alla stessa inclinazione se i prodotti $m\lambda$ coincidono. Il terzo ordine di $\lambda=400\,\mathrm{nm}$ e il secondo ordine di $\lambda=600\,\mathrm{nm}$ hanno entrambi $m\lambda=1200\,\mathrm{nm}$. Con $d=2{,}0\,\mathrm{\mu m}$ danno $\sin\theta=0{,}60$ e occupano gli stessi punti del piano di osservazione.
:::

:::esempio{titolo="Luce bianca su un reticolo"}
Con $d=2{,}0\,\mathrm{\mu m}$ e luce da $400\,\mathrm{nm}$ a $700\,\mathrm{nm}$, nel primo ordine $\sin\theta$ va da $0{,}20$ a $0{,}35$, cioè da $11{,}5^\circ$ a $20{,}5^\circ$. Nel secondo ordine va da $0{,}40$ a $0{,}70$, cioè da $23{,}6^\circ$ a $44{,}4^\circ$. Primo e secondo ordine non si sovrappongono, perché $20{,}5^\circ<23{,}6^\circ$. Il terzo ordine comincia a $\sin\theta=0{,}60$, cioè a $36{,}9^\circ$, dove cade anche la luce da $600\,\mathrm{nm}$ del secondo ordine, poiché $3\cdot400\,\mathrm{nm}=2\cdot600\,\mathrm{nm}$.
:::

::::teorema{#larghezza-massimi-reticolo titolo="Larghezza dei massimi di un reticolo"}
Un reticolo di $N$ righe uguali, con $N$ pari e passo $d$, è illuminato normalmente con $\lambda$. Vicino al massimo di ordine $m$, alla direzione $\theta_m$ con $\cos\theta_m\neq0$, il primo minimo si trova alla distanza angolare
$$
\Delta\theta\simeq\frac{\lambda}{Nd\cos\theta_m}.
$$
Con $d=2{,}0\,\mathrm{\mu m}$ e $N=10\,000$ righe illuminate, cioè $2{,}0\,\mathrm{cm}$ di reticolo, nel primo ordine per $\lambda=500\,\mathrm{nm}$ si ha $\theta_1=14{,}5^\circ$ e $\Delta\theta=\dfrac{5{,}0\cdot10^{-7}}{10^4\cdot2{,}0\cdot10^{-6}\cdot0{,}968}\,\mathrm{rad}=2{,}6\cdot10^{-5}\,\mathrm{rad}$.

:::dimostrazione
Le ampiezze delle onde sono uguali. In una direzione $\theta$ vicina a $\theta_m$ lo sfasamento fra due righe adiacenti è
$$
\frac{2\pi d\sin\theta}{\lambda}=2\pi m+\varepsilon,
$$
con $\varepsilon$ piccolo. Il termine $2\pi m$ non cambia la fase, quindi conta solo $\varepsilon$. Si divide il reticolo in due metà di $\dfrac{N}{2}$ righe. La riga $j$ della prima metà e la riga $j+\dfrac{N}{2}$ della seconda hanno sfasamento $\dfrac{N}{2}\varepsilon$. Se $\dfrac{N}{2}\varepsilon=\pi$, le onde di ogni coppia sono in opposizione e la somma è nulla. Per $\varepsilon$ minore le coppie non sono ancora in opposizione, perciò il primo minimo si ha per $\varepsilon=\dfrac{2\pi}{N}$. Dalla definizione di $\varepsilon$ segue
$$
\frac{2\pi d}{\lambda}\left(\sin\theta-\sin\theta_m\right)=\frac{2\pi}{N},
\qquad
\sin\theta-\sin\theta_m=\frac{\lambda}{Nd}.
$$
Per $\Delta\theta=\theta-\theta_m$ piccolo si ha $\sin\theta-\sin\theta_m\simeq\Delta\theta\cos\theta_m$. Quindi $\Delta\theta\simeq\dfrac{\lambda}{Nd\cos\theta_m}$.
:::
::::

:::richiamo{titolo="Larghezza dei massimi di un reticolo"}
Un reticolo di $N$ righe con passo $d$, illuminato normalmente con luce di lunghezza d'onda $\lambda$, ha attorno al massimo di ordine $m$ il primo minimo alla distanza angolare $\Delta\theta\simeq\dfrac{\lambda}{Nd\cos\theta_m}$.
:::

::::teorema{#potere-risolutivo titolo="Potere risolutivo di un reticolo"}
Due righe spettrali di lunghezze d'onda $\lambda$ e $\lambda+\Delta\lambda$ si distinguono nell'ordine $m$ di un reticolo di $N$ righe illuminate, secondo il criterio di Rayleigh, se
$$
mN\ge\frac{\lambda}{\Delta\lambda}.
$$
Il doppietto del sodio ($589{,}0\,\mathrm{nm}$ e $589{,}6\,\mathrm{nm}$) ha $\dfrac{\lambda}{\Delta\lambda}=\dfrac{589{,}0}{0{,}6}\simeq982$. Nel primo ordine servono almeno $982$ righe illuminate, nel secondo ne bastano $491$.

:::dimostrazione
I massimi di ordine $m$ delle due lunghezze d'onda sono dati da $d\sin\theta_m=m\lambda$ e $d\sin\theta_m'=m(\lambda+\Delta\lambda)$. Sottraendo si ottiene $d\left(\sin\theta_m'-\sin\theta_m\right)=m\Delta\lambda$. Con la stessa approssimazione della dimostrazione precedente, la distanza angolare $\delta\theta=\theta_m'-\theta_m$ soddisfa $\sin\theta_m'-\sin\theta_m\simeq\delta\theta\cos\theta_m$, quindi $\delta\theta=\dfrac{m\Delta\lambda}{d\cos\theta_m}$. Secondo il criterio di Rayleigh i due massimi si distinguono quando il massimo di una riga cade almeno sul primo minimo dell'altra, cioè se $\delta\theta\ge\Delta\theta$, con $\Delta\theta$ dato dal richiamo. Allora
$$
\frac{m\Delta\lambda}{d\cos\theta_m}\ge\frac{\lambda}{Nd\cos\theta_m},
$$
da cui $mN\Delta\lambda\ge\lambda$ e quindi $mN\ge\dfrac{\lambda}{\Delta\lambda}$.
:::
::::

## Confronto delle figure e risoluzione

:::osservazione{titolo="Distanza fra fenditure e larghezza di una fenditura"}
Il passo $d$ della doppia fenditura determina la distanza fra le frange di interferenza. La larghezza $a$ di ciascuna fenditura determina l'inviluppo di diffrazione. Se si aumenta solo $d$, le frange si avvicinano e l'inviluppo resta uguale. Se si aumenta solo $a$, l'inviluppo si restringe e la formula dell'interfrangia resta la stessa.

Per $d=3a$, il massimo di interferenza previsto per $m=3$ coincide con il primo minimo di diffrazione, poiché $\dfrac{3\lambda}{d}=\dfrac{\lambda}{a}$. Risulta quindi un ordine mancante. Nel grafico la curva tratteggiata mostra l'intensità massima consentita dall'inviluppo.

::grafico{f="(sin(pi*x/3)/(pi*x/3))^2*cos(pi*x)^2;(sin(pi*x/3)/(pi*x/3))^2" punti="-3,0;0,1;3,0" xmin=-4 xmax=4 ymin=0 ymax=1.15 nomi="u,I/Imax" legenda="I/I_{\max};\text{inviluppo}" titolo="$u=\dfrac{y}{\Delta y}$ è la coordinata sullo schermo in unità di interfrangia. Con $d=3a$, il massimo previsto all'ordine $m=\pm3$ scompare nel primo minimo dell'inviluppo."}
:::

:::osservazione{#risoluzione titolo="Criterio di Rayleigh"}
Un'apertura circolare di diametro $D$ forma un'immagine di diffrazione anche per una sorgente puntiforme. Per due sorgenti incoerenti con immagini comparabili, il criterio di Rayleigh identifica una separazione limite quando il massimo di una figura cade sul primo minimo dell'altra. Per un'apertura circolare ideale, in radianti, si usa
$$
\theta_{\min}\simeq1{,}22\frac{\lambda}{D}.
$$
Con $\lambda=500\,\mathrm{nm}$ e $D=50\,\mathrm{mm}$ il valore è circa $1{,}22\cdot10^{-5}\,\mathrm{rad}$. Raddoppiare il diametro dimezza la separazione limite prevista, se la diffrazione è l'effetto dominante. La formula usa il diametro dell'apertura circolare e il coefficiente $1{,}22$. La condizione $a\sin\theta=\lambda$ riguarda invece il primo minimo di una fenditura rettilinea.
:::

:::esempio{titolo="Separazione minima a occhio nudo"}
Con $D=4{,}0\,\mathrm{mm}$ e $\lambda=550\,\mathrm{nm}$ si ha
$$
\theta_{\min}=1{,}22\,\frac{550\cdot10^{-9}}{4{,}0\cdot10^{-3}}\,\mathrm{rad}=1{,}7\cdot10^{-4}\,\mathrm{rad}.
$$
Se la diffrazione è l'unico limite, due punti luminosi a $10\,\mathrm m$ si distinguono quando distano almeno $10\,\mathrm m\cdot1{,}7\cdot10^{-4}=1{,}7\,\mathrm{mm}$.

::grafico{f="pow(sin(pi*(x+0.0000001))/(pi*(x+0.0000001)),2);pow(sin(pi*(x-1+0.0000001))/(pi*(x-1+0.0000001)),2)" xmin=-3 xmax=4 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="\text{sorgente 1};\text{sorgente 2}" titolo="Due figure di diffrazione uguali con il massimo della seconda sul primo minimo della prima, come nel criterio di Rayleigh. Il profilo è quello della fenditura rettilinea, usato come illustrazione."}
:::
