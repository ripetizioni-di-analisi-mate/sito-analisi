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

:::esempio{titolo="Frange scure con sorgenti di intensità diversa"}
Con $I_1=I_2=I_s$ i contributi in fase hanno ampiezza doppia e intensità $4I_s$. In opposizione i campi si annullano. Con $I_1=9\,\mathrm{W/m^2}$ e $I_2=4\,\mathrm{W/m^2}$ le ampiezze sono invece diverse. Il massimo vale $(3+2)^2\,\mathrm{W/m^2}=25\,\mathrm{W/m^2}$ e il minimo $(3-2)^2\,\mathrm{W/m^2}=1\,\mathrm{W/m^2}$. Il minimo è ancora una zona meno luminosa, ma ha intensità positiva. L'interferenza ridistribuisce l'intensità fra zone chiare e scure.
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

:::osservazione{#cammino-ottico titolo="Cammino ottico"}
In tratti di lunghezza $\ell_j$ e indice $n_j$, il numero totale di cicli è la somma di $\dfrac{n_j\ell_j}{\lambda_0}$. Il **cammino ottico** è la somma dei prodotti $n_j\ell_j$. Si confrontano quindi i due cammini ottici e si converte la loro differenza in fase usando la lunghezza d'onda nel vuoto $\lambda_0$. Se esiste già uno sfasamento iniziale, si somma a quello dovuto alla propagazione.

Una lamina attraversata normalmente, di indice $1{,}50$ e spessore $600\,\mathrm{nm}$, sostituisce lo stesso spessore di aria. L'aumento di cammino ottico è $(1{,}50-1)\cdot600\,\mathrm{nm}=300\,\mathrm{nm}$. Per luce con $\lambda_0=600\,\mathrm{nm}$ ciò corrisponde a uno sfasamento di $\pi$.
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

## Diffrazione da fenditura singola

:::teorema{#diffrazione titolo="Posizione dei minimi"}
Una fenditura di larghezza $a$ è illuminata uniformemente a incidenza normale. Nel campo lontano i minimi di diffrazione soddisfano
$$
a\sin\theta_m=m\lambda,\qquad m=\pm1,\pm2,\ldots
$$
Al centro tutti i contributi arrivano in fase e si osserva il massimo principale. Per capire il primo minimo, si dividono i punti della fenditura in due metà. Ogni punto della prima metà si accoppia con un punto della seconda a distanza $\dfrac a2$. Nella direzione $\theta_1$, le due onde hanno differenza di cammino $\dfrac a2\sin\theta_1=\dfrac{\lambda}{2}$ e si annullano. Per un ordine positivo $m$ si possono accoppiare intervalli adiacenti fra i $2m$ intervalli uguali della fenditura. La separazione è allora $\dfrac{a}{2m}$, che dà ancora differenza di cammino $\dfrac{\lambda}{2}$.

::grafico{assi=0 uguale=1 linee="0,-3 0,-2;0,2 0,3" segmenti="0,-2,0,2;0,1,0.8,-0.6;-0.82,-2,-0.82,2" vettori="0,-1,4.6,1.3;0,1,4.6,3.3" punti="0,-1,pieno,A;0,1,pieno,B;0.8,-0.6,pieno,H" etichette="-1.18,0,a;1.2,-0.65,Δs;2.35,3.45,primo minimo" xmin=-1.55 xmax=5.35 ymin=-3.15 ymax=3.8 titolo="Le onde emesse da A e B, distanti $\dfrac a2$, viaggiano quasi parallele. La proiezione AH rappresenta la differenza di cammino $\Delta s=\dfrac a2\sin\theta_1$."}
:::

:::teorema{#massimo-centrale titolo="Larghezza del massimo centrale"}
Per una geometria di campo lontano e piccoli angoli, il primo minimo positivo è a $y_1\simeq\dfrac{\lambda L}{a}$. Il massimo centrale occupa l'intervallo fra $-y_1$ e $+y_1$. Quindi la sua larghezza è
$$
w\simeq\frac{2\lambda L}{a}.
$$
Con $a=0{,}20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$ e $L=2{,}0\,\mathrm m$ si trova $y_1=6{,}0\,\mathrm{mm}$ e $w=12\,\mathrm{mm}$. A parità di distanza e lunghezza d'onda, dimezzare l'apertura raddoppia la larghezza della figura centrale. Per angoli grandi ma con un primo minimo a distanza finita, si usa $y_1=L\tan\left(\arcsin\left(\dfrac{\lambda}{a}\right)\right)$. Se $\dfrac{\lambda}{a}\geq1$, il primo minimo è radente oppure manca, quindi lo schermo piano davanti alla fenditura non lo mostra.

::grafico{f="(sin(pi*x)/(pi*x))^2" punti="-1,0,pieno;0,1,pieno;1,0,pieno" xmin=-3 xmax=3 ymin=0 ymax=1.25 nomi="u,I/Imax" legenda="I/I_{\max}" titolo="$u=\dfrac{y}{y_1}$ è la coordinata in unità della distanza dal primo minimo. Il massimo centrale si estende fra il primo minimo negativo e il primo minimo positivo. Il punto in $y=0$ è il limite della formula."}
:::

## Reticolo di diffrazione

:::teorema{#reticolo titolo="Massimi di un reticolo"}
Un reticolo ha molte fenditure parallele con passo $d$. Il passo è la distanza fra fenditure adiacenti. Con luce incidente normalmente, si ha un massimo principale quando le onde provenienti dalle fenditure adiacenti arrivano separate da un numero intero di cicli. Perciò
$$
d\sin\theta_m=m\lambda.
$$
Aumentando il numero di fenditure illuminate a parità di passo, più contributi si sommano in fase al massimo. Appena ci si sposta dalla direzione del massimo, lo sfasamento accumulato fra fenditure lontane riduce la somma. I massimi principali risultano più stretti che nel caso di due fenditure.

Un reticolo da $500$ righe per millimetro ha $d=\dfrac{1}{500}\,\mathrm{mm}=2{,}0\,\mathrm{\mu m}$. Con $\lambda=500\,\mathrm{nm}=0{,}50\,\mathrm{\mu m}$ si ha $\sin\theta_1=0{,}25$, quindi $\theta_1\simeq14{,}5^\circ$. L'ordine $m=4$ è radente, poiché $4\lambda=d$. Sullo schermo piano davanti al reticolo arrivano solo $m=0,\pm1,\pm2,\pm3$. Per $|m|\lambda>d$ il seno richiesto sarebbe maggiore di uno in modulo.
:::

:::esempio{titolo="Coincidenza di due ordini"}
Sul medesimo reticolo, due colori possono dare un massimo alla stessa inclinazione se i prodotti $m\lambda$ coincidono. Il terzo ordine di $\lambda=400\,\mathrm{nm}$ e il secondo ordine di $\lambda=600\,\mathrm{nm}$ hanno entrambi $m\lambda=1200\,\mathrm{nm}$. Con $d=2{,}0\,\mathrm{\mu m}$ danno $\sin\theta=0{,}60$ e occupano gli stessi punti del piano di osservazione.
:::

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
