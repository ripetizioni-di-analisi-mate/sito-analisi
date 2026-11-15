---
titolo: Riflessione, rifrazione, specchi e lenti
sommario: Il modello dei raggi descrive il passaggio della luce fra due mezzi e permette
  di costruire e calcolare le immagini di specchi e lenti.
---

## Raggi e indice di rifrazione

:::definizione{#indice titolo="Modello dei raggi luminosi"}
L'**ottica geometrica** descrive la propagazione mediante raggi orientati nel verso in cui viaggia la luce. In un mezzo omogeneo e isotropo i raggi sono rettilinei. Il modello funziona quando ostacoli e aperture sono molto più grandi della lunghezza d'onda. Una fenditura di larghezza paragonabile alla lunghezza d'onda richiede invece il modello ondulatorio per descrivere la diffrazione.

L'**indice di rifrazione** $n$ confronta la velocità della luce nel vuoto $c$ con la velocità di fase $u$ nel mezzo.
$$
n=\frac{c}{u},\qquad c=3{,}00\cdot10^8\,\mathrm{m/s}.
$$
L'indice è un rapporto tra due velocità, perciò è adimensionale. Un vetro con $n=1{,}50$ ha velocità di fase $u=\dfrac{c}{1{,}50}=2{,}00\cdot10^8\,\mathrm{m/s}$. Indici diversi a frequenze diverse spiegano perché un prisma separa i colori.
:::

:::esempio{titolo="Frequenza e lunghezza d'onda"}
A un'interfaccia ferma le oscillazioni ai due lati della superficie hanno la stessa frequenza $\nu$. Poiché $u=\lambda\nu$ e nel vuoto $c=\lambda_0\nu$, la lunghezza d'onda nel mezzo vale $\lambda=\dfrac{\lambda_0}{n}$.

Una luce di lunghezza d'onda $600\,\mathrm{nm}$ nel vuoto ha lunghezza d'onda $400\,\mathrm{nm}$ nel vetro di indice $1{,}50$. La frequenza vale $5{,}00\cdot10^{14}\,\mathrm{Hz}$ in entrambi i mezzi. I valori di $\lambda$ e $u$ cambiano nello stesso rapporto, quindi il loro quoziente rimane costante.
:::

## Riflessione

:::teorema{#riflessione titolo="Legge della riflessione"}
La **normale** è la retta perpendicolare alla superficie nel punto di incidenza. Il raggio incidente, il riflesso e la normale giacciono nello stesso piano. Misurati rispetto alla normale, l'angolo di riflessione $\theta_r$ e l'angolo di incidenza $\theta_i$ coincidono.
$$
\theta_r=\theta_i.
$$
Un raggio che forma $30^\circ$ con lo specchio forma $60^\circ$ con la normale. Il raggio riflesso forma quindi a sua volta $60^\circ$ con la normale, dalla parte opposta. L'angolo tra i due tratti di raggio sopra la superficie è $120^\circ$.

::grafico{assi=0 uguale=1 linee="-3.7,0 3.7,0" segmenti="0,-0.4,0,3.1" vettori="-2.6,1.5,0,0;0,0,2.6,1.5" etichette="-2.45,2.05,incidente;2.35,2.05,riflesso;0.55,2.7,normale;-2.65,-0.5,specchio;-0.95,0.9,60°;0.95,0.9,60°" xmin=-4 xmax=4 ymin=-0.9 ymax=3.25 titolo="Gli angoli di incidenza e riflessione sono entrambi di $60^\circ$. Si misurano dalla normale tratteggiata."}
:::

:::esempio{titolo="Immagine in uno specchio piano"}
I prolungamenti dei raggi riflessi da uno specchio piano si incontrano nel punto simmetrico dell'oggetto rispetto al piano dello specchio. L'immagine di un oggetto a $0{,}80\,\mathrm m$ davanti allo specchio appare quindi $0{,}80\,\mathrm m$ dietro. È virtuale, diritta e ha la stessa altezza dell'oggetto.

Se l'oggetto ha coordinata $x_O$ lungo un asse perpendicolare a uno specchio posto in $x_S$, allora $x_I-x_S=x_S-x_O$. Quindi $x_I=2x_S-x_O$. A oggetto fermo, uno spostamento dello specchio di $10\,\mathrm{cm}$ sposta l'immagine di $20\,\mathrm{cm}$ nello stesso verso nel riferimento del laboratorio.
:::

## Rifrazione e legge di Snell

:::teorema{#snell titolo="Passaggio fra due mezzi trasparenti"}
Quando esiste un raggio trasmesso tra due mezzi omogenei e isotropi, il raggio incidente, quello rifratto e la normale giacciono nello stesso piano. La **legge di Snell** lega gli angoli $\theta_1$ e $\theta_2$ misurati entrambi dalla normale.
$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$
Poiché il seno cresce tra $0^\circ$ e $90^\circ$, se a incidenza obliqua si entra in un mezzo con indice maggiore vale $\theta_2<\theta_1$. In un mezzo di indice minore il raggio trasmesso si allontana dalla normale, quando la trasmissione è possibile. All'incidenza normale si ha $\theta_1=\theta_2=0^\circ$ anche se gli indici sono diversi.
:::

:::esempio{titolo="Dall'aria al vetro"}
Un raggio passa dall'aria di indice $n_1=1{,}00$ al vetro di indice $n_2=1{,}50$, con $\theta_1=30^\circ$. Si isola prima $\sin\theta_2$ e si applica poi l'arcoseno usando i gradi.
$$
\begin{aligned}
\sin\theta_2 &= \frac{1{,}00}{1{,}50}\sin30^\circ
             =\frac{1}{3}\\[6pt]
\theta_2 &= \arcsin\left(\frac{1}{3}\right)\simeq19{,}5^\circ.
\end{aligned}
$$
Il risultato è minore di $30^\circ$, come richiesto dal passaggio a un indice più alto. Il raggio rifratto forma con la superficie un angolo di circa $70{,}5^\circ$.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-3.2,0,3.2" vettori="-1.6,2.77,0,0;0,0,1.025,-2.9" etichette="-2.4,2.85,aria;2.55,-2.6,vetro;0.55,2.7,normale;-0.78,1.88,30°;0.22,-1.75,θ₂" xmin=-4 xmax=4 ymin=-3.5 ymax=3.5 titolo="Nel vetro l'angolo con la normale scende da $30^\circ$ a circa $19{,}5^\circ$."}
:::

:::osservazione{#lastra titolo="Lastra a facce parallele"}
Se l'ambiente prima e dopo una lastra ha lo stesso indice $n_1$, lo stesso angolo interno $\theta_2$ compare alle due interfacce, perché le normali sono parallele. La prima rifrazione dà $n_1\sin\theta_1=n_2\sin\theta_2$ e la seconda dà $n_2\sin\theta_2=n_1\sin\theta_3$. Quindi $\theta_3=\theta_1$. Per incidenza obliqua, spessore non nullo e indici diversi, il raggio emergente è parallelo al raggio incidente ed è spostato lateralmente.
:::

## Riflessione totale

::::teorema{#angolo-limite titolo="Condizione per la riflessione totale interna"}
Nel passaggio da un mezzo con indice $n_1$ verso uno con indice $n_2<n_1$, l'**angolo limite** $\theta_c$ soddisfa
$$
\theta_c=\arcsin\left(\frac{n_2}{n_1}\right).
$$
Per $\theta_1<\theta_c$ esiste un raggio trasmesso, per $\theta_1=\theta_c$ la direzione limite è radente e per $\theta_1>\theta_c$ si ha riflessione totale interna nel modello senza assorbimento.

:::dimostrazione
La legge di Snell richiede $\sin\theta_2=\dfrac{n_1}{n_2}\sin\theta_1$. Per $n_1>n_2$ il membro destro cresce fino a superare $1$. Il limite si raggiunge quando $\theta_2=90^\circ$, da cui $n_1\sin\theta_c=n_2$. Il seno di un angolo reale non supera $1$, quindi oltre $\theta_c$ manca un raggio trasmesso propagante.
:::
::::

:::esempio{titolo="Vetro, aria e fibre ottiche"}
Per vetro di indice $1{,}50$ e aria di indice $1{,}00$, si ottiene $\theta_c=\arcsin\left(\dfrac{1}{1{,}50}\right)\simeq41{,}8^\circ$. Una volta fissato il mezzo di partenza, il confronto con $41{,}8^\circ$ decide quale modello usare. Per un'incidenza di $45^\circ$ la riflessione è totale. Per un'incidenza di $30^\circ$ il raggio trasmesso esiste e forma circa $48{,}6^\circ$ con la normale.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-1.2,0,3" vettori="-2.4,2.4,0,0;0,0,2.4,2.4" etichette="-2.55,2.85,vetro;-2.55,-0.55,aria;0.45,2.66,normale;-0.9,1.4,45°;0.9,1.4,45°" xmin=-4 xmax=4 ymin=-1.4 ymax=3.4 titolo="Dal vetro all'aria a $45^\circ$: i raggi incidente e riflesso restano nel vetro."}

In una fibra il nucleo ha indice maggiore del rivestimento. Un raggio si mantiene nel nucleo finché le incidenze sul confine superano l'angolo limite, sempre misurato dalla normale al confine.
:::

## Immagini e costruzione dei raggi

:::definizione{#immagini titolo="Immagine reale e virtuale"}
Un'immagine è **reale** quando i raggi emergenti provenienti dallo stesso punto dell'oggetto si incontrano. Uno schermo posto all'incontro intercetta la luce proprio lì. L'immagine è **virtuale** quando si incontrano i prolungamenti all'indietro dei raggi. La luce può raggiungere l'occhio, che attribuisce al fascio divergente un'origine apparente.

In una lente sottile convergente, un raggio incidente parallelo all'asse viene deviato verso il fuoco sul lato di uscita. Un raggio che attraversa il centro ottico prosegue in prima approssimazione diritto. Tracciando questi due raggi dalla cima dell'oggetto si determina la cima dell'immagine. In una lente divergente il raggio entrato parallelo all'asse esce come se provenisse dal fuoco sul lato di entrata.

Queste costruzioni adottano l'approssimazione **parassiale**, valida per raggi vicini all'asse e poco inclinati. Disegni e formule descrivono lo stesso modello ottico.
:::

:::esempio{#profondita-apparente titolo="Profondità apparente"}
Un oggetto sotto una superficie piana può apparire meno profondo a un osservatore in aria. Siano $d$ la profondità reale e $x$ la distanza orizzontale percorsa dal raggio prima di attraversare la superficie. Il raggio nel liquido soddisfa $x=d\tan\theta_1$. Il prolungamento del raggio in aria incontra la verticale dell'oggetto a profondità $d'$ e soddisfa $x=d'\tan\theta_2$.

Per piccoli angoli $\tan\theta$ è circa uguale a $\sin\theta$. La legge di Snell permette quindi di scrivere
$$
d'=d\frac{\tan\theta_1}{\tan\theta_2}\simeq d\frac{n_2}{n_1}.
$$
Una moneta a $12\,\mathrm{cm}$ in un liquido di indice $1{,}50$, osservata dall'aria quasi lungo la normale, appare quindi a circa $8\,\mathrm{cm}$. L'approssimazione vale per osservazione quasi perpendicolare alla superficie.
:::

## Lenti sottili

::::teorema{#lenti titolo="Equazione delle lenti e ingrandimento"}
Per una lente sottile in aria con oggetto reale si adotta $p>0$. La distanza immagine $q$ è positiva per un'immagine reale sul lato di uscita e negativa per una virtuale sul lato dell'oggetto. La focale $f$ è positiva per una lente convergente e negativa per una divergente. Se $p\ne f$ valgono
$$
\begin{aligned}
\frac{1}{f}&=\frac{1}{p}+\frac{1}{q}\\[6pt]
q&=\frac{fp}{p-f}\\[6pt]
M&=\frac{h'}{h}=-\frac{q}{p}.
\end{aligned}
$$
Le altezze dell'oggetto e dell'immagine sono $h$ e $h'$, misurate dallo stesso asse. L'ingrandimento trasversale $M$ positivo indica un'immagine diritta, quello negativo un'immagine capovolta. Il modulo $|M|$ è il rapporto tra le dimensioni.

:::dimostrazione
Per una lente convergente e un'immagine reale, il raggio che passa per il centro ottico forma due triangoli simili con basi $p$ e $q$. Il rapporto tra le altezze orientate è quindi $M=-\dfrac{q}{p}$. Il raggio che entra parallelo all'asse parte dalla quota $h$ sulla lente e passa per il fuoco a distanza $f$. Alla distanza $q$ la sua quota è $h'=h\left(1-\dfrac{q}{f}\right)$. Uguagliando i due valori di $M$ e dividendo per $q$ si ricava
$$
-\frac{1}{p}=\frac{1}{q}-\frac{1}{f}.
$$
La scrittura con distanze orientate vale anche quando l'incontro è ottenuto dai prolungamenti.
:::
::::

:::esempio{titolo="Un'immagine raccolta sullo schermo"}
Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ si trova
$$
q=\frac{10\cdot30}{30-10}\,\mathrm{cm}=15\,\mathrm{cm},
\qquad
M=-\frac{15}{30}=-0{,}50.
$$
Lo schermo va a $15\,\mathrm{cm}$ sul lato di uscita. L'immagine è capovolta e la sua altezza in valore assoluto è la metà di quella dell'oggetto.

::grafico{assi=0 uguale=1 linee="-6.8,0 4.3,0;0,-2 0,2.1" unicolore=1 vettori="-6,0,-6,1.5;3,0,3,-0.75;-6,1.5,0,1.5;0,1.5,3,-0.75;-6,1.5,0,0;0,0,3,-0.75" punti="-2,0,pieno,F₁;2,0,pieno,F₂" etichette="-5.6,2,oggetto;3.15,0.5,schermo" xmin=-7.3 xmax=4.6 ymin=-2.2 ymax=2.6 titolo="I due raggi partono dalla cima dell'oggetto e si incontrano sotto l'asse. L'oggetto è a $3f$ e l'immagine è a $\dfrac{3}{2}f$."}
:::

:::osservazione{titolo="Scelta del segno prima del calcolo"}
In una lente convergente, per $p>f$ vale $q>0$. Quando $p=2f$ si ottengono $q=2f$ e $M=-1$. Per $f<p<2f$ l'immagine reale è ingrandita e per $p>2f$ è ridotta. All'avvicinarsi dell'oggetto al fuoco dall'esterno, il denominatore $p-f$ diminuisce fino a zero e $q$ aumenta. A $p=f$ i raggi emergono paralleli e l'immagine è all'infinito.

Per $0<p<f$, la formula dà $q<0$ e $M>1$. Con $p=5{,}0\,\mathrm{cm}$ e $f=10\,\mathrm{cm}$ si ottengono $q=-10\,\mathrm{cm}$ e $M=+2{,}0$. In una lente divergente si può scrivere $f=-|f|$, quindi $q=-\dfrac{|f|p}{p+|f|}$ e $M=\dfrac{|f|}{p+|f|}$. L'immagine di un oggetto reale è sempre virtuale, diritta e ridotta, con $|q|<|f|$.
:::

## Specchi sferici

:::teorema{#specchi titolo="Specchi concavi e convessi"}
Per uno specchio sferico parassiale il modulo della focale è metà del raggio di curvatura $R$. Nella convenzione adottata $f>0$ per uno specchio concavo e $f<0$ per uno convesso. Per un oggetto reale davanti allo specchio, $p>0$. La distanza $q$ è positiva se l'immagine è reale davanti allo specchio e negativa se è virtuale dietro.
$$
|f|=\frac{R}{2},\qquad
\frac{1}{f}=\frac{1}{p}+\frac{1}{q},\qquad
M=-\frac{q}{p}.
$$
La positività di $q$ indica il lato sul quale escono i raggi. Nello specchio è il lato davanti alla superficie, perché la luce viene riflessa. Nella lente è il lato oltre la lente, perché la luce viene trasmessa.
:::

:::esempio{titolo="Dalla superficie all'immagine"}
Uno specchio concavo con $R=40\,\mathrm{cm}$ ha focale $f=20\,\mathrm{cm}$. Con $p=60\,\mathrm{cm}$ si ottengono $q=30\,\mathrm{cm}$ e $M=-0{,}50$. Perciò l'immagine è davanti allo specchio, capovolta e ridotta. Con uno specchio convesso di uguale raggio vale $f=-20\,\mathrm{cm}$. Per lo stesso oggetto si ottengono $q=-15\,\mathrm{cm}$ e $M=+0{,}25$, quindi l'immagine è dietro lo specchio, diritta e ridotta.
:::

## Potere diottrico e strumenti

:::definizione{#diottrie titolo="Potere di una lente"}
Il **potere diottrico** è il reciproco della focale espressa in metri. Si misura in diottrie, con simbolo $\mathrm D$ e valore unitario pari a $1\,\mathrm{m^{-1}}$.
$$
D=\frac{1}{f}.
$$
Una lente convergente da $f=25\,\mathrm{cm}=0{,}25\,\mathrm m$ ha potere $D=+4{,}0\,\mathrm D$. Una lente divergente da $f=-0{,}50\,\mathrm m$ ha potere $D=-2{,}0\,\mathrm D$. Per due lenti sottili a contatto nello stesso mezzo, i poteri si sommano. L'associazione di queste due lenti ha potere $+2{,}0\,\mathrm D$ e focale $0{,}50\,\mathrm m$. Se la somma è zero il sistema è afocale nel modello sottile.
:::

:::osservazione
In una macchina fotografica l'obiettivo forma sul sensore un'immagine reale. A distanza grande dall'oggetto, $\dfrac{1}{p}$ è piccolo e la distanza immagine è prossima a $f$. Per mettere a fuoco un soggetto più vicino, una lente a focale fissa richiede una distanza immagine maggiore. Nell'occhio la posizione della retina è fissa, quindi l'accomodazione cambia il potere del sistema ottico. In una lente d'ingrandimento l'oggetto è entro la focale e l'immagine è virtuale. L'ingrandimento angolare percepito dall'occhio dipende anche dalla posizione di osservazione.
:::
