---
titolo: Interferenza e diffrazione della luce
sommario: Modello ondulatorio della luce, coerenza, doppia fenditura di Young, diffrazione da fenditura singola e reticoli.
---

## Luce come onda

:::definizione{#luce-onda titolo="Frequenza e lunghezza d'onda della luce"}
La luce presenta fenomeni di interferenza e diffrazione descritti dal modello ondulatorio. Nel vuoto la frequenza $f$ e la lunghezza d'onda $\lambda_0$ sono legate da
$$
c=\lambda_0f,\qquad c=3{,}00\cdot10^8\,\mathrm{m/s}.
$$
Una radiazione con $\lambda_0=600\,\mathrm{nm}=6{,}00\cdot10^{-7}\,\mathrm m$ ha $f=5{,}00\cdot10^{14}\,\mathrm{Hz}$. In un mezzo con indice $n$ la frequenza resta quella della sorgente e la lunghezza d'onda diventa $\lambda=\dfrac{\lambda_0}{n}$.

L'ottica geometrica descrive molti fenomeni quando ostacoli e aperture sono grandi rispetto alla lunghezza d'onda. Quando le dimensioni diventano confrontabili con essa, oppure si osservano con precisione le frange prodotte da aperture sottili, occorre tenere conto della fase dell'onda. I raggi individuano direzioni di propagazione, mentre la fase consente di stabilire come le perturbazioni si sommano.
:::

## Sovrapposizione e coerenza

:::definizione{#coerenza titolo="Sorgenti coerenti"}
Due onde sono **coerenti** quando mantengono una differenza di fase stabile durante l'osservazione. Per produrre frange stabili non basta che abbiano frequenze nominalmente uguali: la relazione di fase deve restare determinata. Nell'esperimento di Young si illuminano due fenditure con la stessa sorgente, così da ottenere due onde con una relazione di fase controllata.

Nel regime lineare si sommano i campi. Per due onde di uguale frequenza e polarizzazione, con intensità singole $I_1$ e $I_2$, l'intensità risultante è
$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\varphi.
$$
Per $I_1=I_2=I_s$, in fase si ha $I=4I_s$; in opposizione $I=0$. Se la differenza di fase varia rapidamente in modo casuale, il termine di interferenza si annulla nella media e si ottiene $I_1+I_2$. L'energia totale resta conservata: l'interferenza modifica la distribuzione dell'intensità fra zone luminose e zone scure.
:::

## Differenza di cammino e fase

:::teorema{#cammino-fase titolo="Condizioni di interferenza"}
Per due sorgenti inizialmente in fase, che emettono onde monocromatiche nel medesimo mezzo, una differenza di cammino geometrico $\delta$ produce una differenza di fase
$$
\Delta\varphi=\frac{2\pi\delta}{\lambda}.
$$
Si ha interferenza costruttiva per $\delta=m\lambda$, con $m$ intero. Per onde di uguale ampiezza, i minimi nulli si hanno per $\delta=\left(m+\dfrac12\right)\lambda$. Se le ampiezze differiscono, i minimi non raggiungono necessariamente zero.

Con $\lambda=600\,\mathrm{nm}$ e $\delta=1{,}20\,\mathrm{\mu m}$, lo sfasamento è $4\pi$ e le onde arrivano in fase. Con $\delta=300\,\mathrm{nm}$ arrivano in opposizione. Se i percorsi attraversano mezzi diversi, si confrontano i cammini ottici, cioè le somme dei prodotti indice-lunghezza nei vari tratti. Un eventuale sfasamento iniziale o introdotto da una riflessione va aggiunto separatamente.
:::

::grafico{f="cos(x);cos(x+pi)" xmin=0 xmax=7 ymin=-2 ymax=2 nomi="φ,y" legenda="prima onda;opposizione" titolo="Due onde di uguale ampiezza sfasate di $\pi$: gli spostamenti hanno valori opposti e si annullano nella somma"}

## Doppia fenditura di Young

::::teorema{#young titolo="Posizione dei massimi e interfrangia"}
Due fenditure strette distanti $d$, illuminate in fase, producono nel campo lontano massimi nelle direzioni
$$
d\sin\theta_m=m\lambda.
$$
Su uno schermo a distanza $L$ molto maggiore di $d$, per piccoli angoli si ha $y\simeq L\sin\theta$. Quindi
$$
y_m\simeq\frac{m\lambda L}{d},\qquad
\Delta y\simeq\frac{\lambda L}{d}.
$$
$\Delta y$ è l'interfrangia, cioè la distanza fra massimi adiacenti. Con $\lambda=600\,\mathrm{nm}$, $L=2{,}0\,\mathrm m$ e $d=0{,}30\,\mathrm{mm}$ si ottiene $\Delta y=4{,}0\,\mathrm{mm}$. I primi massimi laterali sono a $y=\pm4{,}0\,\mathrm{mm}$; i primi minimi sono a circa $\pm2{,}0\,\mathrm{mm}$.

:::dimostrazione
Nel campo lontano i due percorsi verso lo stesso punto dello schermo sono quasi paralleli. La proiezione della distanza tra le fenditure sulla direzione dei raggi fornisce la differenza di cammino $\delta\simeq d\sin\theta$. Imponendo $\delta=m\lambda$ si ottiene la condizione angolare dei massimi. Per piccoli angoli $\sin\theta\simeq\tan\theta=\dfrac yL$, da cui $y_m\simeq\dfrac{m\lambda L}{d}$. Sottraendo due valori consecutivi si ricava l'interfrangia.
:::
::::

::grafico{f="4*cos(pi*x)^2" xmin=-3 xmax=3 ymin=0 ymax=5 nomi="y/Δy,I" titolo="Interferenza ideale di Young con fenditure di uguale intensità: i massimi consecutivi sono separati da un'interfrangia"}

## Diffrazione da fenditura singola

:::definizione{#diffrazione titolo="Allargamento della perturbazione"}
La **diffrazione** è la distribuzione dell'onda oltre la previsione dei soli raggi rettilinei quando attraversa un'apertura o incontra un ostacolo. Le diverse parti del fronte d'onda contribuiscono al campo osservato e interferiscono fra loro. Una fenditura più stretta produce, a parità di lunghezza d'onda, una figura più larga.

Per una fenditura di larghezza $a$, illuminata uniformemente da luce monocromatica, nel campo lontano i minimi soddisfano
$$
a\sin\theta_m=m\lambda,\qquad m=\pm1,\pm2,\ldots
$$
Il valore $m=0$ è escluso perché nella direzione centrale i contributi arrivano in fase e producono il massimo principale. Il primo minimo può essere interpretato dividendo la fenditura in due metà: le coppie di punti corrispondenti hanno differenza di cammino $\dfrac{\lambda}{2}$ e i loro contributi si cancellano.
:::

:::teorema{#massimo-centrale titolo="Larghezza del massimo centrale"}
Per uno schermo lontano e piccoli angoli, il primo minimo si trova a $y_1\simeq\dfrac{\lambda L}{a}$. Il massimo centrale si estende fra i due primi minimi, quindi ha larghezza
$$
w\simeq\frac{2\lambda L}{a}.
$$
Con $a=0{,}20\,\mathrm{mm}$, $\lambda=600\,\mathrm{nm}$ e $L=2{,}0\,\mathrm m$, si trova $y_1=6{,}0\,\mathrm{mm}$ e $w=12\,\mathrm{mm}$. Il fattore due riguarda l'intera larghezza e non la distanza dal centro a un primo minimo. La formula semplificata richiede $\dfrac{\lambda}{a}\ll1$; per angoli grandi si usa prima la condizione con il seno e poi $y=L\tan\theta$.
:::

::grafico{f="(sin(pi*x)/(pi*x))^2" punti="0,1,pieno" xmin=-4 xmax=4 ymin=0 ymax=2 nomi="y/y₁,I" titolo="Diffrazione da fenditura singola: il massimo centrale si estende dal primo minimo negativo al primo minimo positivo; il valore al centro è il limite della formula"}

## Reticolo di diffrazione

:::teorema{#reticolo titolo="Massimi di un reticolo"}
Un reticolo contiene molte fenditure parallele a distanza regolare $d$. Con luce incidente normalmente, i massimi principali soddisfano
$$
d\sin\theta_m=m\lambda.
$$
La condizione assomiglia a quella di Young, ma il maggior numero di fenditure rende i massimi principali più stretti e consente di separare meglio lunghezze d'onda vicine. Un reticolo da $500$ righe per millimetro ha passo $d=\dfrac{1}{500}\,\mathrm{mm}=2{,}0\,\mathrm{\mu m}$. Con $\lambda=500\,\mathrm{nm}$, il massimo di primo ordine soddisfa $\sin\theta_1=0{,}25$, quindi $\theta_1\simeq14{,}5^\circ$.

Un ordine è possibile solo se $|m|\lambda\leq d$. Nell'esempio il quarto ordine è al limite radente $90^\circ$ e non arriva su uno schermo piano posto a distanza finita davanti al reticolo. Per gli ordini visibili sullo schermo si richiede un angolo minore di $90^\circ$. Se il reticolo è descritto con righe per millimetro, il passo si ricava facendo il reciproco e convertendo poi in metri.
:::

## Risoluzione e confronto delle figure

:::osservazione{#risoluzione titolo="Diffrazione e capacità di distinguere due punti"}
Un'apertura finita produce una figura di diffrazione anche quando la sorgente è puntiforme. Due sorgenti vicine possono quindi generare figure sovrapposte. Per un'apertura circolare ideale di diametro $D$, il criterio di Rayleigh indica una separazione angolare di circa $\theta_{\min}=1{,}22\dfrac{\lambda}{D}$, in radianti, per sorgenti incoerenti nelle condizioni del modello. Un diametro maggiore riduce il limite angolare.

Nel confronto dei problemi, $d$ è la distanza fra fenditure o righe, mentre $a$ è la larghezza della singola apertura. Young determina l'interfrangia attraverso $d$. La diffrazione della singola fenditura determina l'inviluppo e la larghezza centrale attraverso $a$. Due fenditure reali hanno entrambe le dimensioni, quindi le frange di interferenza possono essere modulate da un inviluppo di diffrazione.

La variazione del colore cambia la lunghezza d'onda e quindi le posizioni dei massimi. Il massimo centrale resta nella direzione di cammino uguale, mentre gli ordini laterali si separano secondo la lunghezza d'onda. Questo comportamento permette l'analisi spettrale della luce.
:::
