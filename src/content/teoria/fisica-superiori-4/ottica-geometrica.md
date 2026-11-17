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
L'indice è un rapporto tra due velocità, perciò è adimensionale. Un vetro con $n=1{,}50$ ha velocità di fase $u=\dfrac{c}{1{,}50}=2{,}00\cdot10^8\,\mathrm{m/s}$. Indici diversi a frequenze diverse spiegano perché un prisma separa i colori. In aria $n=1{,}0003$, valore che nei problemi si pone uguale a $1{,}00$.
:::

:::esempio{titolo="Frequenza e lunghezza d'onda"}
A un'interfaccia ferma le oscillazioni ai due lati della superficie hanno la stessa frequenza $\nu$. Poiché $u=\lambda\nu$ e nel vuoto $c=\lambda_0\nu$, la lunghezza d'onda nel mezzo vale $\lambda=\dfrac{\lambda_0}{n}$.

Una luce di lunghezza d'onda $600\,\mathrm{nm}$ nel vuoto ha lunghezza d'onda $400\,\mathrm{nm}$ nel vetro di indice $1{,}50$. La frequenza vale $5{,}00\cdot10^{14}\,\mathrm{Hz}$ in entrambi i mezzi.
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

:::esempio{titolo="Due specchi perpendicolari"}
Due specchi piani formano un angolo di $90^\circ$ e il raggio giace in un piano perpendicolare alla retta in cui si incontrano. Il raggio incide sul primo specchio con angolo $\theta$ dalla normale e viene riflesso con lo stesso angolo. Le normali ai due specchi sono perpendicolari, quindi sul secondo specchio l'angolo di incidenza vale $90^\circ-\theta$. Dopo la seconda riflessione il raggio ha la direzione del raggio iniziale e verso opposto, qualunque sia $\theta$.

Con $\theta=30^\circ$ i due angoli di riflessione sono $30^\circ$ e $60^\circ$, e la deviazione complessiva è $180^\circ$. Per questa proprietà tre specchi perpendicolari a due a due, disposti ad angolo di cubo, rimandano la luce nella direzione di provenienza, come fa un catarifrangente.
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

:::esempio{titolo="Dall'acqua al vetro"}
La legge di Snell vale per due mezzi qualsiasi. Un raggio passa dall'acqua ($n_1=1{,}33$) al vetro ($n_2=1{,}50$) con $\theta_1=40^\circ$.
$$
\begin{aligned}
\sin\theta_2&=\frac{1{,}33}{1{,}50}\sin40^\circ\simeq0{,}570\\[6pt]
\theta_2&\simeq34{,}7^\circ.
\end{aligned}
$$
Il vetro ha indice maggiore dell'acqua, quindi $\theta_2<\theta_1$. Il raggio si avvicina alla normale meno di quanto farebbe passando dall'aria, perché il rapporto $\dfrac{n_1}{n_2}\simeq0{,}887$ è più vicino a $1$ di $\dfrac{1}{1{,}50}$.
:::

:::attenzione
Nella legge di Snell compaiono gli angoli misurati dalla normale. Un raggio che forma $30^\circ$ con la superficie di un vetro di indice $1{,}50$ ha incidenza $\theta_1=60^\circ$, quindi $\sin\theta_2=\dfrac{\sin60^\circ}{1{,}50}\simeq0{,}577$ e $\theta_2\simeq35{,}3^\circ$. Inserendo $30^\circ$ al posto di $60^\circ$ si ottiene $\theta_2\simeq19{,}5^\circ$, un valore sbagliato di quasi $16^\circ$.
:::

:::esempio{titolo="Due colori nello stesso vetro"}
L'indice di un vetro crown vale circa $1{,}51$ per la luce rossa e $1{,}53$ per la luce violetta. Un raggio di luce bianca incide dall'aria con $\theta_1=40^\circ$.
$$
\begin{aligned}
\theta_{2,\text{rosso}}&=\arcsin\left(\frac{\sin40^\circ}{1{,}51}\right)\simeq25{,}2^\circ\\[6pt]
\theta_{2,\text{violetto}}&=\arcsin\left(\frac{\sin40^\circ}{1{,}53}\right)\simeq24{,}8^\circ.
\end{aligned}
$$
Il violetto si avvicina alla normale più del rosso e i due raggi si separano di circa $0{,}35^\circ$. Questa separazione angolare è all'origine dei colori che si vedono con un prisma.
:::

:::osservazione{#lastra titolo="Lastra a facce parallele"}
Se l'ambiente prima e dopo una lastra ha lo stesso indice $n_1$, lo stesso angolo interno $\theta_2$ compare alle due interfacce, perché le normali sono parallele. La prima rifrazione dà $n_1\sin\theta_1=n_2\sin\theta_2$ e la seconda dà $n_2\sin\theta_2=n_1\sin\theta_3$. Quindi $\theta_3=\theta_1$. Per incidenza obliqua, spessore non nullo e indici diversi, il raggio emergente è parallelo al raggio incidente ed è spostato lateralmente.
:::

::::teorema{#spostamento-lastra titolo="Spostamento laterale in una lastra"}
Una lastra a facce parallele di spessore $t$ e indice $n$, circondata da aria, è attraversata da un raggio con angolo di incidenza $\theta_1$ e angolo interno $\theta_2$. Il raggio emergente è parallelo a quello incidente e la distanza fra le due rette è
$$
d=\frac{t\,\sin(\theta_1-\theta_2)}{\cos\theta_2},\qquad \sin\theta_2=\frac{\sin\theta_1}{n}.
$$
La formula permette di calcolare di quanto si sposta un raggio che attraversa un vetro piano, per esempio un vetrino da microscopio.

::grafico{assi=0 uguale=1 poligoni="-3.2,0 3.6,0 3.6,-2 -3.2,-2" segmenti="0,1.7,0,-2.2;1.069,-1,1.069,-3.2;2.6,-2.6,0,0;1.069,-2,1.5345,-1.5345" vettori="-2.2,2.2,0,0;0,0,1.069,-2;1.069,-2,3.069,-4" etichette="-2.9,1.9,aria;-2.9,-1.6,vetro;-0.45,1.3,θ₁;0.2,-0.7,θ₂;1.85,-1.45,d;3,-0.4,t = 2 cm" xmin=-3.4 xmax=3.9 ymin=-4.3 ymax=2.7 titolo="Il raggio emergente è parallelo al raggio incidente. Per $t=2{,}0\,\mathrm{cm}$, $n=1{,}50$ e $\theta_1=45^\circ$ lo spostamento $d$ vale circa $0{,}66\,\mathrm{cm}$."}

:::dimostrazione
Sia $A$ il punto in cui il raggio entra nella lastra e $B$ quello in cui esce. Nella lastra il raggio forma l'angolo $\theta_2$ con la normale, perpendicolare alle facce, e percorre lo spessore $t$, quindi $\overline{AB}=\dfrac{t}{\cos\theta_2}$. Il prolungamento del raggio incidente passa per $A$ e forma l'angolo $\theta_1$ con la normale. Il segmento $AB$ forma invece l'angolo $\theta_2$ con la stessa direzione, perciò l'angolo fra $AB$ e il prolungamento è $\theta_1-\theta_2$.

Alla seconda interfaccia la legge di Snell dà $n\sin\theta_2=\sin\theta_3$ con $\sin\theta_2=\dfrac{\sin\theta_1}{n}$, quindi $\theta_3=\theta_1$ e il raggio emergente è parallelo al prolungamento del raggio incidente. La distanza fra le due rette parallele è la distanza di $B$ dal prolungamento, cioè $d=\overline{AB}\,\sin(\theta_1-\theta_2)$. Sostituendo l'espressione di $\overline{AB}$ si ottiene la formula.
:::
::::

:::esempio{titolo="Raggio che attraversa un vetro piano"}
Una lastra di vetro con $n=1{,}50$ e $t=2{,}0\,\mathrm{cm}$ è colpita con $\theta_1=45^\circ$.
$$
\begin{aligned}
\sin\theta_2&=\frac{\sin45^\circ}{1{,}50}\simeq0{,}471
\quad\Rightarrow\quad\theta_2\simeq28{,}1^\circ\\[6pt]
d&=\frac{2{,}0\,\mathrm{cm}\cdot\sin(45^\circ-28{,}1^\circ)}{\cos28{,}1^\circ}
 \simeq0{,}66\,\mathrm{cm}.
\end{aligned}
$$
A incidenza normale $\theta_1=\theta_2=0^\circ$ e $d=0$. Con $\theta_1=45^\circ$ lo spostamento è circa un terzo dello spessore.
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
Per vetro di indice $1{,}50$ e aria di indice $1{,}00$, si ottiene $\theta_c=\arcsin\left(\dfrac{1}{1{,}50}\right)\simeq41{,}8^\circ$. Per un'incidenza di $45^\circ$ la riflessione è totale. Per un'incidenza di $30^\circ$ il raggio trasmesso esiste e forma circa $48{,}6^\circ$ con la normale.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-1.2,0,3" vettori="-2.4,2.4,0,0;0,0,2.4,2.4" etichette="-2.55,2.85,vetro;-2.55,-0.55,aria;0.45,2.66,normale;-0.9,1.4,45°;0.9,1.4,45°" xmin=-4 xmax=4 ymin=-1.4 ymax=3.4 titolo="Dal vetro all'aria a $45^\circ$: i raggi incidente e riflesso restano nel vetro."}

In una fibra il nucleo ha indice maggiore del rivestimento. Un raggio si mantiene nel nucleo finché le incidenze sul confine superano l'angolo limite, sempre misurato dalla normale al confine.
:::

:::esempio{titolo="Cerchio luminoso sulla superficie dell'acqua"}
Una sorgente puntiforme si trova alla profondità $h=1{,}0\,\mathrm m$ sotto la superficie ferma di una piscina ($n=1{,}33$). Dalla superficie esce la luce dei raggi con $\theta_1\le\theta_c$, dove
$$
\theta_c=\arcsin\left(\frac{1}{1{,}33}\right)\simeq48{,}8^\circ.
$$
Il raggio con incidenza $\theta_c$ incontra la superficie a distanza $r=h\tan\theta_c$ dalla verticale della sorgente, quindi
$$
r=1{,}0\,\mathrm m\cdot\tan48{,}8^\circ\simeq1{,}14\,\mathrm m.
$$
Dall'esterno la sorgente è visibile solo attraverso un cerchio di raggio $1{,}14\,\mathrm m$. I raggi più inclinati sono totalmente riflessi verso il fondo.

::grafico{assi=0 uguale=1 poligoni="-3.2,0 3.8,0 3.8,-2.1 -3.2,-2.1" vettori="0,-1,1.14,0;0,-1,-1.14,0;1.14,0,2.4,0;-1.14,0,-2.4,0;0,-1,1.8,0;1.8,0,3.6,-1" segmenti="0,0,0,-1;0,0.12,1.14,0.12" punti="0,-1,pieno,S" etichette="-2.9,0.45,aria;-2.9,-1.8,acqua;-0.45,-0.5,h;0.5,0.3,r" xmin=-3.4 xmax=4 ymin=-2.3 ymax=0.8 titolo="I raggi limite escono radenti alla superficie. Il raggio più inclinato è riflesso verso il fondo."}
:::

:::attenzione
L'angolo limite esiste solo nel passaggio verso un mezzo con indice minore. Dall'aria al vetro, anche con $\theta_1=89^\circ$ si ha $\sin\theta_2=\dfrac{\sin89^\circ}{1{,}50}\simeq0{,}667$, quindi $\theta_2\simeq41{,}8^\circ$ e il raggio entra sempre nel vetro.
:::

## Immagini e costruzione dei raggi

:::definizione{#immagini titolo="Immagine reale e virtuale"}
Un'immagine è **reale** quando i raggi emergenti provenienti dallo stesso punto dell'oggetto si incontrano. Uno schermo posto all'incontro intercetta la luce proprio lì. L'immagine è **virtuale** quando si incontrano i prolungamenti all'indietro dei raggi. La luce può raggiungere l'occhio, che attribuisce al fascio divergente un'origine apparente.

In una lente sottile convergente, un raggio incidente parallelo all'asse viene deviato verso il fuoco sul lato di uscita. Un raggio che attraversa il centro ottico prosegue in prima approssimazione diritto. Tracciando questi due raggi dalla cima dell'oggetto si determina la cima dell'immagine. In una lente divergente il raggio entrato parallelo all'asse esce come se provenisse dal fuoco sul lato di entrata.

Queste costruzioni adottano l'approssimazione **parassiale**, valida per raggi vicini all'asse e poco inclinati.
:::

:::esempio{#profondita-apparente titolo="Profondità apparente"}
Un oggetto sotto una superficie piana può apparire meno profondo a un osservatore in aria. Il liquido ha indice $n_1$ e l'aria $n_2$. Siano $d$ la profondità reale e $x$ la distanza orizzontale percorsa dal raggio prima di attraversare la superficie. Il raggio nel liquido soddisfa $x=d\tan\theta_1$. Il prolungamento del raggio in aria incontra la verticale dell'oggetto a profondità $d'$ e soddisfa $x=d'\tan\theta_2$.

Per piccoli angoli $\tan\theta$ è circa uguale a $\sin\theta$. La legge di Snell permette quindi di scrivere
$$
d'=d\frac{\tan\theta_1}{\tan\theta_2}\simeq d\frac{n_2}{n_1}.
$$
Una moneta a $12\,\mathrm{cm}$ in un liquido di indice $1{,}50$, osservata dall'aria quasi lungo la normale, appare quindi a circa $8\,\mathrm{cm}$. L'approssimazione vale per osservazione quasi perpendicolare alla superficie.

::grafico{assi=0 uguale=1 poligoni="-2.5,0 3.5,0 3.5,-3.6 -2.5,-3.6" vettori="0,-3,1.092,0;1.092,0,2.133,1.74" segmenti="1.092,0,0,-1.827;0,0.6,0,-3.4;-0.7,0,-0.7,-1.827;-1.3,0,-1.3,-3" punti="0,-3,pieno,O;0,-1.827,vuoto,O′" etichette="-2.2,0.5,aria;-2.2,-3.4,liquido;-0.55,-1,d′;-1.15,-1.5,d;1.5,0.3,θ₂;0.3,-0.9,θ₁" xmin=-2.7 xmax=3.7 ymin=-3.8 ymax=2.3 titolo="Il raggio uscente prolunga all'indietro fino a $O'$, a profondità $d'<d$. Per angoli piccoli $\dfrac{d'}{d}\simeq\dfrac{n_2}{n_1}$."}
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

:::osservazione{titolo="Posizione e dimensioni dell'immagine"}
In una lente convergente, per $p>f$ vale $q>0$. Quando $p=2f$ si ottengono $q=2f$ e $M=-1$. Per $f<p<2f$ l'immagine reale è ingrandita e per $p>2f$ è ridotta. All'avvicinarsi dell'oggetto al fuoco dall'esterno, il denominatore $p-f$ diminuisce fino a zero e $q$ aumenta. A $p=f$ i raggi emergono paralleli e l'immagine è all'infinito.

::grafico{f="10*x/(x-10)" xmin=0 xmax=50 ymin=0 ymax=50 nomi="p,q (cm)" asintoti="x=10;y=10" punti="20,20,pieno;30,15,pieno" titolo="Distanza dell'immagine in funzione della distanza dell'oggetto per $f=10\,\mathrm{cm}$. In $p=20\,\mathrm{cm}$ si ha $q=20\,\mathrm{cm}$. Per $p\to\infty$ la distanza $q$ tende a $f$."}

Per $0<p<f$, la formula dà $q<0$ e $M>1$. Con $p=5{,}0\,\mathrm{cm}$ e $f=10\,\mathrm{cm}$ si ottengono $q=-10\,\mathrm{cm}$ e $M=+2{,}0$. In una lente divergente si può scrivere $f=-|f|$, quindi $q=-\dfrac{|f|p}{p+|f|}$ e $M=\dfrac{|f|}{p+|f|}$. L'immagine di un oggetto reale è sempre virtuale, diritta e ridotta, con $|q|<|f|$.
:::

:::esempio{titolo="Lente divergente"}
Una lente divergente con $f=-3{,}0\,\mathrm{cm}$ e un oggetto alto $1{,}2\,\mathrm{cm}$ a $p=6{,}0\,\mathrm{cm}$ danno
$$
q=\frac{(-3{,}0)\cdot6{,}0}{6{,}0-(-3{,}0)}\,\mathrm{cm}=-2{,}0\,\mathrm{cm},
\qquad
M=-\frac{-2{,}0}{6{,}0}=+\frac{1}{3}.
$$
L'immagine è virtuale, diritta e alta $0{,}40\,\mathrm{cm}$. Si trova sul lato dell'oggetto, fra la lente e il fuoco $F$. Il raggio parallelo all'asse emerge divergendo e il suo prolungamento passa per $F$.

::grafico{assi=0 uguale=1 linee="-6.8,0 4,0;0,-2 0,2" unicolore=1 vettori="-6,0,-6,1.2;-6,1.2,0,1.2;0,1.2,3,2.4;-6,1.2,3,-0.6" segmenti="0,1.2,-3,0;-2,0,-2,0.4" punti="-3,0,pieno,F;3,0,pieno,F′;-2,0.4,vuoto" etichette="-5.6,1.7,oggetto;-3.6,-0.5,immagine virtuale" xmin=-7.2 xmax=4.3 ymin=-1.4 ymax=2.8 titolo="Il raggio parallelo all'asse diverge e il suo prolungamento tratteggiato passa per $F$. Il raggio centrale non è deviato. I prolungamenti si incontrano nell'immagine virtuale."}
:::

:::esempio{titolo="Due posizioni della lente"}
Un oggetto e uno schermo distano $D=80\,\mathrm{cm}$. Una lente convergente con $f=15\,\mathrm{cm}$ forma l'immagine sullo schermo quando $p+q=D$. Si sostituisce $q=\dfrac{fp}{p-f}$ e si moltiplica per $p-f$.
$$
\begin{aligned}
p+\frac{fp}{p-f}&=D\\[6pt]
p^2-Dp+Df&=0\\[6pt]
p&=\frac{D\pm\sqrt{D^2-4Df}}{2}
 =\frac{80\pm\sqrt{6400-4800}}{2}\,\mathrm{cm}
 =\frac{80\pm40}{2}\,\mathrm{cm}.
\end{aligned}
$$
Le soluzioni sono $p=60\,\mathrm{cm}$ con $q=20\,\mathrm{cm}$ e $M=-\dfrac{1}{3}$, oppure $p=20\,\mathrm{cm}$ con $q=60\,\mathrm{cm}$ e $M=-3$. Esistono quindi due posizioni della lente, una con l'immagine ridotta e una con l'immagine ingrandita. Il discriminante $D^2-4Df$ è non negativo solo per $D\ge4f$, perciò la distanza minima fra oggetto e schermo è $4f=60\,\mathrm{cm}$.
:::

:::attenzione
Il segno di $M$ e il suo modulo hanno significati distinti. Il segno dice se l'immagine è diritta o capovolta, il modulo dice di quante volte cambiano le dimensioni. Con $M=-3$ l'immagine è capovolta e tre volte più grande, con $M=+\dfrac{1}{3}$ è diritta e tre volte più piccola. Un valore negativo non indica quindi un'immagine ridotta.
:::

## Specchi sferici

::::teorema{#specchi titolo="Specchi concavi e convessi"}
Per uno specchio sferico parassiale il modulo della focale è metà del raggio di curvatura $R$. Nella convenzione adottata $f>0$ per uno specchio concavo e $f<0$ per uno convesso. Per un oggetto reale davanti allo specchio, $p>0$. La distanza $q$ è positiva se l'immagine è reale davanti allo specchio e negativa se è virtuale dietro.
$$
|f|=\frac{R}{2},\qquad
\frac{1}{f}=\frac{1}{p}+\frac{1}{q},\qquad
M=-\frac{q}{p}.
$$
La positività di $q$ indica il lato sul quale escono i raggi. Nello specchio è il lato davanti alla superficie, perché la luce viene riflessa. Nella lente è il lato oltre la lente, perché la luce viene trasmessa.

:::dimostrazione
Si considera uno specchio concavo con vertice $V$ e centro di curvatura $C$, con $R=\overline{VC}$, e un oggetto $O$ sull'asse con $p>R$. Un raggio uscente da $O$ colpisce lo specchio in $P$, a piccola altezza $y$ dall'asse, e il raggio riflesso incontra l'asse in $I$. Siano $\alpha$, $\beta$, $\gamma$ gli angoli che le rette $PO$, $PC$, $PI$ formano con l'asse e $\theta$ l'angolo di incidenza, uguale a quello di riflessione perché la normale in $P$ è la retta $PC$.

Nel triangolo $OPC$ l'angolo $\beta$ è esterno, quindi $\beta=\alpha+\theta$. Nel triangolo $CPI$ l'angolo $\gamma$ è esterno, quindi $\gamma=\beta+\theta$. Eliminando $\theta$ si ottiene $\alpha+\gamma=2\beta$.

Per raggi vicini all'asse gli angoli sono piccoli, perciò $\alpha\simeq\dfrac{y}{p}$, $\beta\simeq\dfrac{y}{R}$ e $\gamma\simeq\dfrac{y}{q}$. Sostituendo e dividendo per $y$ si ricava
$$
\frac{1}{p}+\frac{1}{q}=\frac{2}{R}.
$$
Per $p$ molto grande i raggi incidenti sono paralleli all'asse e $q=\dfrac{R}{2}$. Questa distanza è la focale, quindi $f=\dfrac{R}{2}$ e $\dfrac{1}{f}=\dfrac{1}{p}+\dfrac{1}{q}$. I casi con $p<R$ si trattano allo stesso modo, con le distanze orientate.

Il raggio che colpisce il vertice trova la normale lungo l'asse, quindi forma lo stesso angolo con l'asse prima e dopo la riflessione. Se l'oggetto è alto $h$ e l'immagine reale ha altezza $h'<0$, i triangoli rettangoli di cateti $p$, $h$ e $q$, $-h'$ sono simili, da cui $\dfrac{h'}{h}=-\dfrac{q}{p}$.
:::
::::

:::esempio{titolo="Dalla superficie all'immagine"}
Uno specchio concavo con $R=40\,\mathrm{cm}$ ha focale $f=20\,\mathrm{cm}$. Con $p=60\,\mathrm{cm}$ si ottengono $q=30\,\mathrm{cm}$ e $M=-0{,}50$. Perciò l'immagine è davanti allo specchio, capovolta e ridotta. Con uno specchio convesso di uguale raggio vale $f=-20\,\mathrm{cm}$. Per lo stesso oggetto si ottengono $q=-15\,\mathrm{cm}$ e $M=+0{,}25$, quindi l'immagine è dietro lo specchio, diritta e ridotta. Per un oggetto reale uno specchio convesso dà sempre un'immagine con queste proprietà e $|q|<|f|$, e l'immagine ridotta permette di vedere una regione più ampia, come avviene in uno specchio retrovisore.

::grafico{assi=0 uguale=1 linee="-1,0 7.4,0" curve="4-4*cos(t),4*sin(t),-0.4,0.4" unicolore=1 vettori="6,0,6,0.8;0,0.8,3,-0.4;6,0.8,0,0;0,0,3,-0.4;3,0,3,-0.4" segmenti="6,0.8,0,0.8" punti="2,0,pieno,F;4,0,pieno,C" etichette="6.2,0.9,oggetto;3.1,-0.75,immagine" xmin=-1 xmax=7.6 ymin=-1.2 ymax=1.5 titolo="Specchio concavo con $R=40\,\mathrm{cm}$ e oggetto a $60\,\mathrm{cm}$: l'immagine reale e capovolta si forma a $30\,\mathrm{cm}$ davanti allo specchio, tra $F$ e $C$. Le altezze sono ingrandite rispetto alle distanze."}
:::

:::esempio{titolo="Specchio da trucco"}
Uno specchio concavo con $R=60\,\mathrm{cm}$ ha $f=30\,\mathrm{cm}$. Un viso a $p=10\,\mathrm{cm}$, cioè entro la focale, produce
$$
q=\frac{30\cdot10}{10-30}\,\mathrm{cm}=-15\,\mathrm{cm},
\qquad
M=-\frac{-15}{10}=+1{,}5.
$$
L'immagine è virtuale, a $15\,\mathrm{cm}$ dietro lo specchio, diritta e ingrandita di una volta e mezza.
:::

## Potere diottrico e strumenti

:::definizione{#diottrie titolo="Potere di una lente"}
Il **potere diottrico** è il reciproco della focale espressa in metri. Si misura in diottrie, con simbolo $\mathrm D$ e valore unitario pari a $1\,\mathrm{m^{-1}}$.
$$
D=\frac{1}{f}.
$$
Una lente convergente da $f=25\,\mathrm{cm}=0{,}25\,\mathrm m$ ha potere $D=+4{,}0\,\mathrm D$. Una lente divergente da $f=-0{,}50\,\mathrm m$ ha potere $D=-2{,}0\,\mathrm D$. Per due lenti sottili a contatto nello stesso mezzo, i poteri si sommano. L'associazione di queste due lenti ha potere $+2{,}0\,\mathrm D$ e focale $0{,}50\,\mathrm m$. Se la somma è zero il sistema è afocale nel modello sottile.
:::

:::richiamo{titolo="Equazione delle lenti"}
Una lente sottile di focale $f$ forma di un oggetto a distanza $p$ un'immagine a distanza $q$ tale che $\dfrac{1}{f}=\dfrac{1}{p}+\dfrac{1}{q}$. Se l'oggetto è virtuale, cioè i raggi incidenti convergono verso un punto oltre la lente, si usa $p<0$.
:::

::::teorema{#lenti-a-contatto titolo="Somma dei poteri di lenti a contatto"}
Due lenti sottili a contatto, di poteri $D_1=\dfrac{1}{f_1}$ e $D_2=\dfrac{1}{f_2}$, equivalgono a una lente sottile di potere
$$
D=D_1+D_2.
$$
Il risultato permette di sostituire una coppia di lenti con una lente sola e di sommare i poteri senza calcolare le immagini intermedie. Due lenti da $+4{,}0\,\mathrm D$ e $+1{,}0\,\mathrm D$ equivalgono a una lente da $+5{,}0\,\mathrm D$, cioè a una focale di $0{,}20\,\mathrm m$.

:::dimostrazione
La prima lente forma dell'oggetto a distanza $p$ un'immagine a distanza $q_1$, con $\dfrac{1}{f_1}=\dfrac{1}{p}+\dfrac{1}{q_1}$. Le lenti sono sottili e a contatto, quindi le distanze dalla prima lente e dalla seconda coincidono. L'immagine della prima lente fa da oggetto per la seconda, con $p_2=-q_1$: se $q_1>0$ i raggi convergono oltre la seconda lente e l'oggetto è virtuale, se $q_1<0$ l'oggetto è reale.

Per la seconda lente vale $\dfrac{1}{f_2}=\dfrac{1}{p_2}+\dfrac{1}{q}=-\dfrac{1}{q_1}+\dfrac{1}{q}$, dove $q$ è la distanza finale dell'immagine. Sommando membro a membro le due equazioni, i termini con $q_1$ si annullano e resta
$$
\frac{1}{f_1}+\frac{1}{f_2}=\frac{1}{p}+\frac{1}{q}.
$$
Questa è l'equazione di una lente sola con $\dfrac{1}{f}=\dfrac{1}{f_1}+\dfrac{1}{f_2}$, cioè $D=D_1+D_2$.
:::
::::

:::esempio{titolo="Lenti correttive"}
Si trascura la distanza fra la lente e l'occhio. Un occhio miope vede nitidamente fino a $0{,}50\,\mathrm m$. Gli oggetti lontani, con $\dfrac{1}{p}\simeq0$, devono avere un'immagine virtuale a $0{,}50\,\mathrm m$, quindi $q=-0{,}50\,\mathrm m$ e
$$
D=\frac{1}{p}+\frac{1}{q}\simeq-\frac{1}{0{,}50\,\mathrm m}=-2{,}0\,\mathrm D.
$$
Un occhio ipermetrope ha il punto prossimo a $1{,}00\,\mathrm m$ e deve leggere a $p=0{,}25\,\mathrm m$, con immagine virtuale a $q=-1{,}00\,\mathrm m$.
$$
D=\frac{1}{0{,}25\,\mathrm m}-\frac{1}{1{,}00\,\mathrm m}=+3{,}0\,\mathrm D.
$$
La lente per il miope è divergente e quella per l'ipermetrope è convergente.
:::

:::osservazione
In una macchina fotografica l'obiettivo forma sul sensore un'immagine reale. A distanza grande dall'oggetto, $\dfrac{1}{p}$ è piccolo e la distanza immagine è prossima a $f$. Per mettere a fuoco un soggetto più vicino, una lente a focale fissa richiede una distanza immagine maggiore. Nell'occhio la posizione della retina è fissa, quindi l'accomodazione cambia il potere del sistema ottico. In una lente d'ingrandimento l'oggetto è entro la focale e l'immagine è virtuale.
:::
