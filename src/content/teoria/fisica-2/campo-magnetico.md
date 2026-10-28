---
titolo: Campo magnetico e forza di Lorentz
sommario: Come un campo magnetico agisce su cariche in moto e su correnti, dalla forza di Lorentz al moto circolare ed elicoidale delle particelle, al selettore di velocità, allo spettrometro di massa e all'effetto Hall, fino alla forza su un filo e al momento delle forze su una spira, descritto dal momento magnetico.
---

## Campo magnetico e linee di campo

In tutto l'argomento il campo magnetico è assegnato e costante nel tempo, il sistema di riferimento è inerziale e le velocità delle particelle sono piccole rispetto alla velocità della luce. Le correnti che producono il campo sono trattate nell'argomento sulle sorgenti del campo magnetico.

:::definizione{#campo-magnetico titolo="Campo magnetico"}
In una regione di spazio c'è un **campo magnetico** se una carica in moto vi subisce, oltre all'eventuale forza elettrica, una forza che dipende dalla sua velocità. Sperimentalmente in ogni punto esiste una direzione lungo la quale una carica in moto non subisce questa forza; per una velocità perpendicolare a quella direzione la forza ha il modulo massimo $F_{\max}$, proporzionale alla carica $q$ e al modulo $v$ della velocità. Il campo magnetico $\vec{B}$ è il vettore che ha quella direzione e modulo
$$
B = \frac{F_{\max}}{|q|\,v} ,
$$
mentre il verso è fissato dalla legge della forza di Lorentz. Nel Sistema Internazionale il campo magnetico si misura in **tesla**, $1\,\mathrm{T} = 1\,\mathrm{N \cdot s/(C \cdot m)} = 1\,\mathrm{N/(A \cdot m)}$; si usa anche il gauss, $1\,\mathrm{G} = 10^{-4}\,\mathrm{T}$. Il campo magnetico terrestre ha modulo dell'ordine di $5 \cdot 10^{-5}\,\mathrm{T}$, una calamita da laboratorio produce vicino ai poli campi dell'ordine di $0{,}1\,\mathrm{T}$, e i magneti per la risonanza magnetica arrivano a qualche tesla.
:::

:::definizione{#linee-di-campo-magnetico titolo="Linee del campo magnetico"}
Le **linee del campo magnetico** sono curve orientate tangenti in ogni punto a $\vec{B}$ e con lo stesso verso; dove le linee sono più fitte il campo è più intenso. Un piccolo ago magnetico libero di ruotare si dispone lungo la linea di campo, e il suo polo nord ne indica il verso. Fuori da una calamita le linee escono dal polo nord ed entrano nel polo sud, e all'interno proseguono dal polo sud al polo nord; le linee del campo magnetico sono quindi **chiuse**.

Il campo elettrostatico ha linee che partono dalle cariche positive e terminano sulle negative. Le linee chiuse del campo magnetico corrispondono invece all'assenza di cariche magnetiche isolate; infatti spezzando una calamita si ottengono due calamite, ciascuna con un polo nord e un polo sud. La forma quantitativa di questa proprietà, la legge di Gauss per il campo magnetico, è trattata nell'argomento sulle sorgenti del campo magnetico.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="-0.45,-1.3 0.45,-1.3 0.45,1.3 -0.45,1.3" linee="0.461,0.625 0.586,0.697 0.724,0.758 0.871,0.805 1.026,0.835 1.185,0.847 1.344,0.838 1.5,0.809 1.648,0.76 1.785,0.69 1.907,0.603 2.011,0.5 2.094,0.382 2.155,0.255 2.19,0.121 2.2,-0.017 2.184,-0.155 2.142,-0.288 2.076,-0.413 1.987,-0.527 1.878,-0.627 1.752,-0.71 1.612,-0.774 1.461,-0.818 1.304,-0.842 1.145,-0.846 0.987,-0.829 0.833,-0.795 0.688,-0.744 0.554,-0.68 0.461,-0.625;-0.461,0.625 -0.586,0.697 -0.724,0.758 -0.871,0.805 -1.026,0.835 -1.185,0.847 -1.344,0.838 -1.5,0.809 -1.648,0.76 -1.785,0.69 -1.907,0.603 -2.011,0.5 -2.094,0.382 -2.155,0.255 -2.19,0.121 -2.2,-0.017 -2.184,-0.155 -2.142,-0.288 -2.076,-0.413 -1.987,-0.527 -1.878,-0.627 -1.752,-0.71 -1.612,-0.774 -1.461,-0.818 -1.304,-0.842 -1.145,-0.846 -0.987,-0.829 -0.833,-0.795 -0.688,-0.744 -0.554,-0.68 -0.461,-0.625;0.467,0.775 0.625,0.904 0.807,1.023 1.01,1.127 1.231,1.211 1.465,1.271 1.708,1.304 1.954,1.306 2.198,1.277 2.434,1.216 2.655,1.124 2.856,1.003 3.031,0.855 3.177,0.684 3.288,0.494 3.362,0.291 3.397,0.08 3.392,-0.133 3.347,-0.343 3.263,-0.543 3.143,-0.729 2.99,-0.894 2.808,-1.036 2.601,-1.15 2.376,-1.234 2.138,-1.287 1.893,-1.308 1.647,-1.298 1.405,-1.259 1.174,-1.192 0.957,-1.103 0.759,-0.995 0.583,-0.873 0.467,-0.775;-0.467,0.775 -0.625,0.904 -0.807,1.023 -1.01,1.127 -1.231,1.211 -1.465,1.271 -1.708,1.304 -1.954,1.306 -2.198,1.277 -2.434,1.216 -2.655,1.124 -2.856,1.003 -3.031,0.855 -3.177,0.684 -3.288,0.494 -3.362,0.291 -3.397,0.08 -3.392,-0.133 -3.347,-0.343 -3.263,-0.543 -3.143,-0.729 -2.99,-0.894 -2.808,-1.036 -2.601,-1.15 -2.376,-1.234 -2.138,-1.287 -1.893,-1.308 -1.647,-1.298 -1.405,-1.259 -1.174,-1.192 -0.957,-1.103 -0.759,-0.995 -0.583,-0.873 -0.467,-0.775;0.468,0.918 0.66,1.115 0.888,1.307 1.151,1.484 1.446,1.64 1.768,1.768 2.11,1.86 2.467,1.913 2.829,1.923 3.189,1.886 3.537,1.802 3.865,1.673 4.165,1.499 4.428,1.286 4.647,1.039 4.818,0.763 4.934,0.466 4.993,0.157 4.993,-0.157 4.934,-0.466 4.818,-0.763 4.647,-1.039 4.428,-1.286 4.165,-1.499 3.865,-1.673 3.537,-1.802 3.189,-1.886 2.829,-1.923 2.467,-1.913 2.11,-1.86 1.768,-1.768 1.446,-1.64 1.151,-1.484 0.888,-1.307 0.66,-1.115 0.468,-0.918 0.468,-0.918;-0.468,0.918 -0.66,1.115 -0.888,1.307 -1.151,1.484 -1.446,1.64 -1.768,1.768 -2.11,1.86 -2.467,1.913 -2.829,1.923 -3.189,1.886 -3.537,1.802 -3.865,1.673 -4.165,1.499 -4.428,1.286 -4.647,1.039 -4.818,0.763 -4.934,0.466 -4.993,0.157 -4.993,-0.157 -4.934,-0.466 -4.818,-0.763 -4.647,-1.039 -4.428,-1.286 -4.165,-1.499 -3.865,-1.673 -3.537,-1.802 -3.189,-1.886 -2.829,-1.923 -2.467,-1.913 -2.11,-1.86 -1.768,-1.768 -1.446,-1.64 -1.151,-1.484 -0.888,-1.307 -0.66,-1.115 -0.468,-0.918 -0.468,-0.918;0,1.3 0,3;0,-3 0,-1.3" vettori="2.2,0.35,2.2,-0.35;-2.2,0.35,-2.2,-0.35;3.4,0.35,3.4,-0.35;-3.4,0.35,-3.4,-0.35;5,0.35,5,-0.35;-5,0.35,-5,-0.35;0,2.0,0,2.6;0,-2.6,0,-2.0" etichette="-0.17,0.55,N;-0.15,-0.85,S" xmin=-5.6 xmax=5.6 ymin=-3.1 ymax=3.1 titolo="Linee del campo magnetico di una calamita a barra: escono dal polo nord, entrano nel polo sud e si chiudono all'interno della calamita"}

:::

:::osservazione{#campo-perpendicolare-al-foglio titolo="Campo perpendicolare al foglio"}
Nei disegni piani un vettore perpendicolare al foglio si rappresenta con un simbolo: $\otimes$ indica un vettore **entrante** nel foglio, come la coda di una freccia che si allontana, e $\odot$ un vettore **uscente**, come la punta di una freccia che si avvicina. Un campo uniforme entrante si disegna quindi come una griglia regolare di simboli $\otimes$. Con il foglio nel piano $xy$ e l'asse $z$ rivolto verso chi legge, un campo entrante è $\vec{B} = -B\,\hat{k}$ e un campo uscente è $\vec{B} = B\,\hat{k}$.
:::

## Forza di Lorentz

:::richiamo{titolo="Prodotto vettoriale"}
Per due vettori $\vec{a}$ e $\vec{b}$ che formano l'angolo $\varphi \in [0, \pi]$, il prodotto vettoriale $\vec{a} \times \vec{b}$ è perpendicolare a entrambi, ha modulo $a\,b\sin\varphi$ e verso dato dalla regola della mano destra: con il pollice lungo $\vec{a}$ e l'indice lungo $\vec{b}$, il medio indica $\vec{a} \times \vec{b}$. Valgono $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$ e $\vec{b} \times \vec{a} = -\,\vec{a} \times \vec{b}$. Si rimanda all'argomento sulle grandezze fisiche e i vettori di Fisica 1 e all'argomento sui vettori di Algebra lineare.
:::

:::teorema{#forza-di-lorentz titolo="Forza di Lorentz"}
Una carica puntiforme $q$ che si muove con velocità $\vec{v}$ in un campo magnetico $\vec{B}$ subisce la forza
$$
\vec{F} = q\,\vec{v} \times \vec{B} ,
\qquad
F = |q|\,v B \sin\varphi ,
$$
dove $\varphi$ è l'angolo tra $\vec{v}$ e $\vec{B}$. È una legge sperimentale, che completa la definizione di campo magnetico fissando il verso di $\vec{B}$. La forza è perpendicolare sia alla velocità sia al campo; è nulla per una carica ferma o in moto parallelamente a $\vec{B}$, ed è massima, $|q|\,vB$, per una velocità perpendicolare al campo. Il verso si trova con la regola della mano destra applicata a $\vec{v} \times \vec{B}$, e si inverte per una carica negativa.

Per esempio, un protone con velocità $\vec{v} = 2{,}0 \cdot 10^6\,\hat{\imath}\,\mathrm{m/s}$ in un campo $\vec{B} = 0{,}50\,\hat{\jmath}\,\mathrm{T}$ subisce la forza $\vec{F} = e v B\,(\hat{\imath} \times \hat{\jmath}) = 1{,}6 \cdot 10^{-13}\,\hat{k}\,\mathrm{N}$, mentre un elettrone con la stessa velocità subisce la forza opposta.

::grafico{assi=0 uguale=1 poligoni="0,0 2.6,0 3.986,0.8 1.386,0.8" vettori="0,0,2.6,0,v;0,0,1.386,0.8,B;0,0,0,2.4,F" punti="0,0,pieno" etichette="0.6,0.13,φ;-0.5,0.12,+q" xmin=-0.8 xmax=4.4 ymin=-0.6 ymax=2.8 titolo="La forza $\vec{F} = q\,\vec{v} \times \vec{B}$ su una carica positiva è perpendicolare al piano di $\vec{v}$ e $\vec{B}$, con il verso dato dalla regola della mano destra"}

:::

:::osservazione{#forza-elettrica-e-magnetica titolo="Forza elettrica e forza magnetica insieme"}
Se nella regione ci sono un campo elettrico $\vec{E}$ e un campo magnetico $\vec{B}$, la forza su una carica puntiforme è la somma della forza elettrica e della forza magnetica,
$$
\vec{F} = q\,\left( \vec{E} + \vec{v} \times \vec{B} \right) ,
$$
e in molti testi è questa somma a chiamarsi forza di Lorentz. La parte elettrica agisce anche su una carica ferma, mentre la parte magnetica agisce solo su cariche in moto e dipende dalla velocità. Il confronto tra i due termini permette di separare le particelle in base alla velocità, come nel *selettore di velocità*.
:::

:::richiamo{titolo="Teorema dell'energia cinetica"}
Per un punto materiale di massa $m$ che si muove da $A$ a $B$ in un riferimento inerziale, il lavoro totale delle forze che agiscono su di esso è uguale alla variazione dell'energia cinetica $K = \dfrac{1}{2} m v^2$. Si rimanda all'argomento sul lavoro e l'energia di Fisica 1.
:::

::::teorema{#lavoro-forza-magnetica titolo="Lavoro della forza magnetica"}
La forza magnetica $q\,\vec{v} \times \vec{B}$ su una carica in moto compie lavoro nullo lungo qualunque traiettoria. Di conseguenza, se sulla carica agisce solo la forza magnetica, l'energia cinetica e il modulo della velocità restano costanti, e varia solo la direzione della velocità. Per cambiare l'energia di una particella carica serve un campo elettrico, come nell'acceleratore che precede uno spettrometro di massa. In questa materia il lavoro si indica con $W$, perché la lettera $L$ indica l'induttanza.

:::dimostrazione
La potenza della forza magnetica è
$$
P = \vec{F} \cdot \vec{v} = q\,(\vec{v} \times \vec{B}) \cdot \vec{v} = 0 ,
$$
perché il prodotto vettoriale $\vec{v} \times \vec{B}$ è perpendicolare a $\vec{v}$. Quindi il lavoro in un intervallo di tempo $[t_1, t_2]$ è $W = \displaystyle\int_{t_1}^{t_2} P\,dt = 0$. Se la forza magnetica è l'unica forza, per il **teorema dell'energia cinetica** si ha $K_2 - K_1 = W = 0$, perciò $\dfrac{1}{2} m v^2$ è costante, e con essa il modulo $v$.
:::
::::

## Moto di una carica in un campo magnetico uniforme

:::richiamo{titolo="Moto circolare uniforme"}
Un punto materiale che percorre una circonferenza di raggio $r$ con velocità di modulo costante $v$ ha accelerazione diretta verso il centro, di modulo $\dfrac{v^2}{r}$, e periodo $T = \dfrac{2\pi r}{v}$. Un punto materiale di massa $m$ che si muove in un piano, soggetto a una forza contenuta nel piano, di modulo costante $F$ e sempre perpendicolare alla velocità, percorre con velocità di modulo costante una circonferenza di raggio $r = \dfrac{m v^2}{F}$. Si rimanda all'argomento sul moto nel piano di Fisica 1.
:::

::::teorema{#moto-circolare-campo-magnetico titolo="Moto circolare in un campo magnetico uniforme"}
Si consideri una particella di massa $m$ e carica $q$ in un campo magnetico uniforme $\vec{B}$, soggetta alla sola forza magnetica, con velocità iniziale $\vec{v}$ perpendicolare a $\vec{B}$. Allora la particella percorre con velocità di modulo costante una circonferenza, in un piano perpendicolare a $\vec{B}$, di raggio e periodo
$$
r = \frac{m v}{|q|\,B} ,
\qquad
T = \frac{2\pi m}{|q|\,B} .
$$
La pulsazione $\omega = \dfrac{|q|\,B}{m}$ si dice **pulsazione di ciclotrone**, e $f = \dfrac{1}{T}$ frequenza di ciclotrone. Il raggio è proporzionale alla quantità di moto $mv$, mentre il periodo *non* dipende dalla velocità; particelle uguali più veloci descrivono circonferenze più grandi nello stesso tempo. In un campo entrante nel foglio una carica positiva gira in verso antiorario e una carica negativa in verso orario, come si verifica applicando la regola della mano destra in un punto della traiettoria.

Per un elettrone con $v = 1{,}0 \cdot 10^7\,\mathrm{m/s}$ in un campo di $1{,}0 \cdot 10^{-3}\,\mathrm{T}$ si ha $r = \dfrac{9{,}11 \cdot 10^{-31} \cdot 1{,}0 \cdot 10^7}{1{,}60 \cdot 10^{-19} \cdot 1{,}0 \cdot 10^{-3}}\,\mathrm{m} \approx 5{,}7\,\mathrm{cm}$ e $T \approx 3{,}6 \cdot 10^{-8}\,\mathrm{s}$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="0,-2,1.6,-2,v;0,-2,0,-0.8,F;1.73,1,1.23,1.87" segmenti="0,0,-1.414,1.414" punti="0,-2,pieno;0,0,pieno,C" etichette="-0.6,-2.35,+q;-0.95,0.45,r;-3.17,-2.67,⊗;-3.17,-1.17,⊗;-3.17,0.33,⊗;-3.17,1.83,⊗;-1.67,-2.67,⊗;-1.67,-1.17,⊗;-1.67,0.33,⊗;-1.67,1.83,⊗;1.33,-2.67,⊗;1.33,-1.17,⊗;1.33,0.33,⊗;1.33,1.83,⊗;2.83,-2.67,⊗;2.83,-1.17,⊗;2.83,0.33,⊗;2.83,1.83,⊗;-0.17,2.43,⊗;-0.17,-3.27,⊗;-0.17,0.73,⊗" xmin=-3.6 xmax=3.6 ymin=-3.4 ymax=3 titolo="Una carica positiva in un campo uniforme entrante nel foglio percorre una circonferenza di raggio $r = \dfrac{mv}{|q|\,B}$ in verso antiorario; la forza è sempre diretta verso il centro $C$"}

:::dimostrazione
Per il **lavoro della forza magnetica**, il modulo $v$ della velocità resta costante. La forza $q\,\vec{v} \times \vec{B}$ è perpendicolare a $\vec{B}$, quindi la componente della velocità parallela al campo, inizialmente nulla, resta nulla; perciò il moto avviene nel piano perpendicolare a $\vec{B}$ che contiene la posizione iniziale. In quel piano $\vec{v}$ è perpendicolare a $\vec{B}$, quindi la forza ha modulo costante $|q|\,vB$, giace nel piano ed è sempre perpendicolare alla velocità. Per il moto circolare uniforme la traiettoria è una circonferenza, e uguagliando la forza al prodotto della massa per l'accelerazione centripeta si ottiene
$$
|q|\,v B = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
r = \frac{m v}{|q|\,B} .
$$
Il periodo è il tempo impiegato a percorrere la circonferenza, $T = \dfrac{2\pi r}{v} = \dfrac{2\pi m}{|q|\,B}$.
:::
::::

:::osservazione{#raggio-ed-energia titolo="Raggio, quantità di moto ed energia"}
Poiché $r = \dfrac{m v}{|q|\,B}$, misurando il raggio della traiettoria in un campo noto si ricava la quantità di moto della particella; i rivelatori di particelle usano questo principio. Se la particella ha energia cinetica $K = \dfrac{1}{2} m v^2$, allora $m v = \sqrt{2 m K}$ e
$$
r = \frac{\sqrt{2 m K}}{|q|\,B} .
$$
Per una particella accelerata da ferma attraverso la differenza di potenziale $\Delta V$ si ha $K = |q|\,\Delta V$, e si rimanda all'argomento sul potenziale elettrico e l'energia elettrostatica. Le energie delle particelle si esprimono spesso in elettronvolt, $1\,\mathrm{eV} = 1{,}60 \cdot 10^{-19}\,\mathrm{J}$.
:::

::::teorema{#moto-elicoidale titolo="Moto elicoidale"}
Si consideri una particella di massa $m$ e carica $q$ soggetta alla sola forza magnetica in un campo uniforme $\vec{B}$, con velocità iniziale $\vec{v}$ che forma con $\vec{B}$ un angolo $\varphi$ diverso da $0$ e da $\pi$, e siano
$$
v_\parallel = v\cos\varphi ,
\qquad
v_\perp = v\sin\varphi
$$
le componenti della velocità parallela e perpendicolare al campo. Allora la particella descrive un'**elica** con l'asse parallelo a $\vec{B}$, con periodo $T = \dfrac{2\pi m}{|q|\,B}$, raggio e passo
$$
r = \frac{m v_\perp}{|q|\,B} ,
\qquad
p = v_\parallel\,T = \frac{2\pi m\, v_\parallel}{|q|\,B} ,
$$
dove il **passo** $p$ è lo spostamento lungo l'asse durante un giro. Le particelle cariche provenienti dallo spazio che arrivano nel campo magnetico terrestre si avvolgono in questo modo attorno alle linee di campo, e vicino ai poli producono le aurore. Un protone, di massa $m_p = 1{,}67 \cdot 10^{-27}\,\mathrm{kg}$, con $v = 1{,}0 \cdot 10^6\,\mathrm{m/s}$ a $30^\circ$ da un campo di $0{,}20\,\mathrm{T}$ descrive un'elica con $r \approx 2{,}6\,\mathrm{cm}$, $T \approx 3{,}3 \cdot 10^{-7}\,\mathrm{s}$ e $p \approx 28\,\mathrm{cm}$.

::grafico{assi=0 uguale=1 linee="0,1 0.126,0.986 0.249,0.944 0.369,0.876 0.482,0.784 0.588,0.669 0.684,0.536 0.77,0.388 0.843,0.228 0.905,0.063 0.954,-0.105 0.991,-0.269 1.015,-0.426 1.028,-0.571 1.031,-0.7 1.025,-0.809 1.011,-0.896 0.991,-0.957 0.968,-0.992 0.944,-0.999 0.92,-0.978 0.898,-0.93 0.882,-0.855 0.871,-0.757 0.869,-0.637 0.877,-0.5 0.896,-0.349 0.926,-0.187 0.969,-0.021 1.024,0.146 1.092,0.309 1.172,0.463 1.263,0.605 1.364,0.729 1.474,0.833 1.59,0.914 1.712,0.969 1.837,0.996 1.963,0.996 2.088,0.969 2.21,0.914 2.326,0.833 2.436,0.729 2.537,0.605 2.628,0.463 2.708,0.309 2.776,0.146 2.831,-0.021 2.874,-0.187 2.904,-0.349 2.923,-0.5 2.931,-0.637 2.929,-0.757 2.918,-0.855 2.902,-0.93 2.88,-0.978 2.856,-0.999 2.832,-0.992 2.809,-0.957 2.789,-0.896 2.775,-0.809 2.769,-0.7 2.772,-0.571 2.785,-0.426 2.809,-0.269 2.846,-0.105 2.895,0.063 2.957,0.228 3.03,0.388 3.116,0.536 3.212,0.669 3.318,0.784 3.431,0.876 3.551,0.944 3.674,0.986 3.8,1 3.926,0.986 4.049,0.944 4.169,0.876 4.282,0.784 4.388,0.669 4.484,0.536 4.57,0.388 4.643,0.228 4.705,0.063 4.754,-0.105 4.791,-0.269 4.815,-0.426 4.828,-0.571 4.831,-0.7 4.825,-0.809 4.811,-0.896 4.791,-0.957 4.768,-0.992 4.744,-0.999 4.72,-0.978 4.698,-0.93 4.682,-0.855 4.671,-0.757 4.669,-0.637 4.677,-0.5 4.696,-0.349 4.726,-0.187 4.769,-0.021 4.824,0.146 4.892,0.309 4.972,0.463 5.063,0.605 5.164,0.729 5.274,0.833 5.39,0.914 5.512,0.969 5.637,0.996 5.763,0.996 5.888,0.969 6.01,0.914 6.126,0.833 6.236,0.729 6.337,0.605 6.428,0.463 6.508,0.309 6.508,0.309" segmenti="-0.4,0,6.8,0;0,1.25,1.9,1.25;0.95,0,0.95,-1" vettori="4.4,2.3,6.4,2.3,B" etichette="0.8,1.45,p;1.07,-0.6,r" xmin=-0.8 xmax=7 ymin=-1.6 ymax=2.8 titolo="Con velocità obliqua rispetto a $\vec{B}$ la carica descrive un'elica di raggio $r = \dfrac{m v_\perp}{|q|\,B}$ e passo $p = v_\parallel T$, con l'asse parallelo al campo"}

:::dimostrazione
Si sceglie l'asse $z$ parallelo al campo, $\vec{B} = B\,\hat{k}$. La forza $q\,\vec{v} \times \vec{B}$ è perpendicolare a $\hat{k}$, quindi l'accelerazione lungo $z$ è nulla e $v_z = v_\parallel$ resta costante, quindi il moto lungo l'asse è rettilineo uniforme. Nel prodotto vettoriale la componente $v_z\,\hat{k}$ dà contributo nullo, perché $\hat{k} \times \hat{k} = \vec{0}$; perciò la forza dipende solo dalla componente della velocità nel piano $xy$, che ha modulo costante $v_\perp$, poiché sono costanti sia $v$ sia $v_z$. Il moto proiettato sul piano $xy$ è quindi quello di una particella con velocità $v_\perp$ perpendicolare al campo, e per il **moto circolare in un campo magnetico uniforme** è un moto circolare uniforme di raggio $\dfrac{m v_\perp}{|q|\,B}$ e periodo $T$. La composizione di un moto circolare uniforme nel piano $xy$ e di un moto rettilineo uniforme lungo $z$ è un'elica, e in un periodo la particella avanza lungo l'asse di $v_\parallel\,T$.
:::
::::

## Selettore di velocità e spettrometro di massa

::::teorema{#selettore-di-velocita titolo="Selettore di velocità"}
In una regione ci sono un campo elettrico uniforme $\vec{E}$ e un campo magnetico uniforme $\vec{B}$ perpendicolari tra loro. Vi entra una particella carica con velocità $\vec{v}$ perpendicolare a entrambi i campi, nel verso per cui la forza elettrica e la forza magnetica sono opposte, e il peso della particella è trascurabile. Allora la particella attraversa la regione in linea retta se e solo se
$$
v = \frac{E}{B} .
$$
Le particelle più veloci sono deviate nel verso della forza magnetica, quelle più lente nel verso della forza elettrica, e una fenditura all'uscita lascia passare solo le particelle con velocità $\dfrac{E}{B}$, qualunque siano la loro massa e la loro carica. Il campo elettrico si ottiene di solito con due armature piane parallele alla distanza $d$ tra le quali c'è la differenza di potenziale $\Delta V$, per cui $E = \dfrac{\Delta V}{d}$. Con $E = 2{,}0 \cdot 10^4\,\mathrm{V/m}$ e $B = 0{,}10\,\mathrm{T}$ passano le particelle con $v = 2{,}0 \cdot 10^5\,\mathrm{m/s}$.

::grafico{assi=0 uguale=1 linee="0,1.2 6,1.2;0,-1.2 6,-1.2" segmenti="-1.4,0,7.4,0" vettori="2.6,0,4.1,0,v;2.6,0,2.6,0.95,qvB;2.6,0,2.6,-0.95,qE" punti="2.6,0,pieno" etichette="0.6,1.45,+;1.8,1.45,+;3,1.45,+;4.2,1.45,+;5.4,1.45,+;0.6,-1.75,−;1.8,-1.75,−;3,-1.75,−;4.2,-1.75,−;5.4,-1.75,−;0.63,0.38,⊗;0.63,-0.77,⊗;3.43,0.38,⊗;3.43,-0.77,⊗;4.83,0.38,⊗;4.83,-0.77,⊗" xmin=-1.5 xmax=7.5 ymin=-2.1 ymax=1.9 titolo="Nel selettore di velocità la forza elettrica $q\vec{E}$ e la forza magnetica $q\vec{v} \times \vec{B}$ sono opposte: prosegue in linea retta solo la particella con $v = \dfrac{E}{B}$"}

:::dimostrazione
Sulla particella agisce la forza $\vec{F} = q\,(\vec{E} + \vec{v} \times \vec{B})$. I vettori $\vec{v}$, $\vec{E}$ e $\vec{B}$ sono perpendicolari a due a due, quindi $\vec{v} \times \vec{B}$, perpendicolare a $\vec{v}$ e a $\vec{B}$, è parallelo a $\vec{E}$, e la forza magnetica ha modulo $|q|\,vB$; per la scelta del verso di $\vec{v}$ essa è opposta alla forza elettrica, di modulo $|q|\,E$. La particella prosegue in linea retta con velocità costante se e solo se la forza totale è nulla, cioè
$$
|q|\,E = |q|\,v B
\quad\Longleftrightarrow\quad
v = \frac{E}{B} .
$$
Se $v > \dfrac{E}{B}$ prevale la forza magnetica, se $v < \dfrac{E}{B}$ prevale la forza elettrica, e in entrambi i casi la traiettoria si incurva.
:::
::::

::::teorema{#spettrometro-di-massa titolo="Spettrometro di massa"}
Ioni di carica $q$ e massa $m$, partiti con velocità trascurabile, sono accelerati dalla differenza di potenziale $\Delta V$ ed entrano attraverso una fenditura in una regione di campo magnetico uniforme $\vec{B}$ perpendicolare alla loro velocità. Dopo mezzo giro colpiscono una lastra rivelatrice posta nel piano della fenditura, alla distanza $2r$ dalla fenditura, con
$$
r = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} ,
\qquad
m = \frac{|q|\,B^2 r^2}{2\,\Delta V} .
$$
A parità di carica, gli ioni più pesanti descrivono semicirconferenze più grandi; lo spettrometro separa così gli **isotopi** di un elemento, che hanno la stessa carica e masse diverse. Le masse atomiche si esprimono in unità di massa atomica, $1\,\mathrm{u} = 1{,}66 \cdot 10^{-27}\,\mathrm{kg}$. Ioni $^{12}\mathrm{C}^+$ e $^{14}\mathrm{C}^+$ accelerati da $\Delta V = 2{,}0\,\mathrm{kV}$ in un campo di $0{,}50\,\mathrm{T}$ descrivono semicirconferenze di raggi $4{,}46\,\mathrm{cm}$ e $4{,}82\,\mathrm{cm}$, e i loro punti di impatto distano circa $7{,}2\,\mathrm{mm}$.

::grafico{assi=0 uguale=1 curve="-2.0+2.0*cos(t),2.0*sin(t),0,3.1416;-2.3+2.3*cos(t),2.3*sin(t),0,3.1416" linee="-5.6,0 -0.15,0;0.15,0 1.2,0" vettori="0,-1.6,0,-0.2,v" punti="-4.0,0,pieno,m₁;-4.6,0,pieno,m₂;0,0,vuoto,O" segmenti="-2.0,0,-2.0,2.0" etichette="-1.85,0.9,r₁;-5.57,0.53,⊗;-5.57,2.43,⊗;-3.57,0.53,⊗;-3.57,2.43,⊗;-1.37,0.53,⊗;-1.37,2.43,⊗;0.63,0.53,⊗;0.63,2.43,⊗;-2.47,0.93,⊗;0.3,-1.0,ioni" xmin=-5.8 xmax=1.6 ymin=-1.8 ymax=3.0 titolo="Spettrometro di massa: gli ioni entrano dalla fenditura in $O$ e, dopo mezzo giro, colpiscono la lastra a distanza $2r$; lo ione più pesante, $m_2 > m_1$, descrive la semicirconferenza più grande"}

:::dimostrazione
Durante l'accelerazione il campo elettrico compie sullo ione il lavoro $|q|\,\Delta V$, quindi per il **teorema dell'energia cinetica**, con velocità iniziale nulla,
$$
|q|\,\Delta V = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v = \sqrt{\frac{2\,|q|\,\Delta V}{m}} .
$$
Nel campo magnetico la velocità è perpendicolare a $\vec{B}$, perciò per il **moto circolare in un campo magnetico uniforme** lo ione percorre una circonferenza di raggio $r = \dfrac{m v}{|q|\,B}$. Sostituendo la velocità si ottiene
$$
r = \frac{m}{|q|\,B}\sqrt{\frac{2\,|q|\,\Delta V}{m}} = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} .
$$
Dopo mezzo giro lo ione torna nel piano della fenditura nel punto diametralmente opposto, alla distanza $2r$. Elevando al quadrato e ricavando $m$ si ottiene la seconda formula.
:::
::::

## Effetto Hall

:::richiamo{titolo="Corrente e velocità di deriva"}
In un conduttore con $n$ portatori di carica $q$ per unità di volume, che si muovono con velocità di deriva $\vec{v}_d$, la densità di corrente è $\vec{J} = n q\,\vec{v}_d$, e la corrente attraverso una sezione di area $A$ perpendicolare al moto è $I = n\,|q|\,v_d A$. Si rimanda all'argomento sulla corrente elettrica e i circuiti in corrente continua.
:::

::::teorema{#effetto-hall titolo="Effetto Hall"}
Si consideri una lamina conduttrice di larghezza $w$ e spessore $s$, con $n$ portatori di carica $q$ per unità di volume, percorsa dalla corrente $I$ lungo la sua lunghezza e immersa in un campo magnetico uniforme $\vec{B}$ perpendicolare alle facce larghe. In regime stazionario tra i due bordi della lamina c'è la **tensione di Hall**
$$
\Delta V_H = \frac{I B}{n\,|q|\,s} .
$$
La tensione è tanto maggiore quanto minore è la densità dei portatori, perciò è piccola nei metalli e molto maggiore nei semiconduttori. L'effetto si usa in due modi: con un materiale noto, la misura di $\Delta V_H$ dà il campo $B$, ed è il principio delle *sonde di Hall*; con un campo noto, la misura dà la densità e il segno dei portatori. Una lamina di rame, con $n = 8{,}5 \cdot 10^{28}\,\mathrm{m^{-3}}$ e $s = 0{,}10\,\mathrm{mm}$, percorsa da $5{,}0\,\mathrm{A}$ in un campo di $1{,}0\,\mathrm{T}$, ha $\Delta V_H \approx 3{,}7\,\mu\mathrm{V}$.

::grafico{assi=0 uguale=1 poligoni="0,-1.1 6.4,-1.1 6.4,1.1 0,1.1" linee="-1.4,0 0,0;6.4,0 7.6,0" vettori="-1.3,0.25,-0.2,0.25,I;3,0,4.2,0,v;3,0,3,-0.75,F;5,-0.55,5,0.4,E" punti="3,0,pieno" etichette="0.6,-0.95,+;1.6,-0.95,+;2.6,-0.95,+;3.6,-0.95,+;4.6,-0.95,+;5.6,-0.95,+;0.6,0.65,−;1.6,0.65,−;2.6,0.65,−;3.6,0.65,−;4.6,0.65,−;5.6,0.65,−;0.33,1.53,⊙;0.33,-1.87,⊙;1.83,1.53,⊙;1.83,-1.87,⊙;3.33,1.53,⊙;3.33,-1.87,⊙;4.83,1.53,⊙;4.83,-1.87,⊙;6.7,-1.0,w" xmin=-1.6 xmax=7.8 ymin=-2.1 ymax=2.1 titolo="Effetto Hall con portatori positivi in un campo uscente dal foglio: la forza magnetica spinge i portatori verso il bordo inferiore e si forma il campo di Hall $\vec{E}_H$"}

:::dimostrazione
I portatori si muovono lungo la lamina con velocità di deriva $\vec{v}_d$ perpendicolare a $\vec{B}$, quindi subiscono la forza magnetica $q\,\vec{v}_d \times \vec{B}$, di modulo $|q|\,v_d B$ e diretta lungo la larghezza della lamina. I portatori si accumulano su un bordo e lasciano sul bordo opposto una carica di segno contrario; queste cariche producono un campo elettrico $\vec{E}_H$ lungo la larghezza, la cui forza è opposta alla forza magnetica. L'accumulo prosegue finché le due forze si equilibrano, perciò in regime stazionario
$$
|q|\,E_H = |q|\,v_d B
\quad\Longrightarrow\quad
E_H = v_d B .
$$
Considerando uniforme il campo $E_H$ sulla larghezza $w$, si ha $\Delta V_H = E_H\, w = v_d B w$. La sezione della lamina è $A = w s$, quindi per la relazione tra corrente e velocità di deriva $v_d = \dfrac{I}{n\,|q|\,w s}$, e sostituendo
$$
\Delta V_H = \frac{I}{n\,|q|\,w s}\, B\, w = \frac{I B}{n\,|q|\,s} .
$$
:::
::::

:::osservazione{#segno-dei-portatori titolo="Segno dei portatori di carica"}
A corrente fissata, i portatori positivi si muovono nel verso della corrente e quelli negativi nel verso opposto. In entrambi i casi la forza magnetica $q\,\vec{v}_d \times \vec{B}$ ha lo *stesso* verso, perché cambiano segno sia $q$ sia $\vec{v}_d$, quindi i portatori si accumulano sullo stesso bordo. Il segno della carica accumulata su quel bordo coincide con il segno dei portatori, e da esso dipende quale bordo è a potenziale maggiore. Nella maggior parte dei metalli la misura indica portatori negativi, gli elettroni; nei semiconduttori di tipo $p$ indica portatori positivi, le lacune.
:::

## Forza magnetica su un filo percorso da corrente

::::teorema{#forza-su-un-filo titolo="Forza su un filo rettilineo"}
Un filo rettilineo di lunghezza $\ell$, percorso dalla corrente $I$ e immerso in un campo magnetico uniforme $\vec{B}$, subisce la forza
$$
\vec{F} = I\,\vec{\ell} \times \vec{B} ,
\qquad
F = I \ell B \sin\varphi ,
$$
dove $\vec{\ell}$ è il vettore di modulo $\ell$ diretto lungo il filo nel verso della corrente e $\varphi$ è l'angolo tra il filo e il campo. La forza è perpendicolare al filo e al campo, è nulla per un filo parallelo a $\vec{B}$ ed è massima, $I \ell B$, per un filo perpendicolare. Su questa forza si basano i motori elettrici e gli altoparlanti; la forza tra due fili percorsi da corrente, che serve a definire l'ampere, è trattata nell'argomento sulle sorgenti del campo magnetico. Un filo lungo $0{,}50\,\mathrm{m}$, percorso da $3{,}0\,\mathrm{A}$ e perpendicolare a un campo di $0{,}40\,\mathrm{T}$, subisce la forza $F = 3{,}0 \cdot 0{,}50 \cdot 0{,}40\,\mathrm{N} = 0{,}60\,\mathrm{N}$.

:::dimostrazione
Siano $A$ la sezione del filo, $n$ la densità dei portatori, $q$ la loro carica e $\vec{v}_d$ la velocità di deriva. Ogni portatore subisce la forza $q\,\vec{v}_d \times \vec{B}$, e nel filo ci sono $n A \ell$ portatori; la forza che essi ricevono si trasmette al reticolo del conduttore, quindi al filo. La forza totale è perciò
$$
\vec{F} = n A \ell\; q\,\vec{v}_d \times \vec{B} .
$$
Il vettore $q\,\vec{v}_d$ ha il verso della corrente, sia per portatori positivi sia per portatori negativi, e modulo $|q|\,v_d$, quindi $n A \ell\, q\,\vec{v}_d = n\,|q|\,v_d A\;\vec{\ell} = I\,\vec{\ell}$, dove l'ultima uguaglianza segue dalla relazione tra corrente e velocità di deriva. Sostituendo si ottiene $\vec{F} = I\,\vec{\ell} \times \vec{B}$.
:::
::::

:::richiamo{titolo="Integrale di linea di uno spostamento"}
Se una curva regolare $\gamma$ è parametrizzata da $\vec{r}(t)$, con $t \in [t_1, t_2]$, l'integrale degli spostamenti infinitesimi $d\vec{\ell} = \vec{r}\,'(t)\,dt$ si calcola componente per componente, e per il teorema fondamentale del calcolo integrale $\displaystyle\int_\gamma d\vec{\ell} = \vec{r}(t_2) - \vec{r}(t_1)$. Per gli integrali di linea si rimanda all'argomento sulle curve e gli integrali di linea di Analisi 2.
:::

::::teorema{#forza-su-un-filo-curvo titolo="Forza su un filo di forma qualunque"}
Un filo percorso dalla corrente $I$ in un campo magnetico $\vec{B}$ subisce, in ogni suo tratto infinitesimo $d\vec{\ell}$ orientato nel verso della corrente, la forza $d\vec{F} = I\,d\vec{\ell} \times \vec{B}$, e la forza totale è l'integrale lungo il filo $\gamma$,
$$
\vec{F} = I \int_\gamma d\vec{\ell} \times \vec{B} .
$$
Se il campo è **uniforme** e il filo va dal punto $P$ al punto $Q$, allora
$$
\vec{F} = I\,\overrightarrow{PQ} \times \vec{B} ,
$$
cioè la forza coincide con quella su un filo rettilineo da $P$ a $Q$ percorso dalla stessa corrente. In particolare, una spira chiusa in un campo uniforme subisce forza totale **nulla**, perché $P = Q$. Una semicirconferenza di raggio $R$, perpendicolare al campo, riceve la forza di modulo $2 I R B$, la stessa del diametro che ne congiunge gli estremi.

::grafico{assi=0 uguale=1 curve="4*t,-1.4*sin(pi*t)+0.4*sin(3*pi*t),0,1" segmenti="0,0,4,0" vettori="1.6,-1.8,2.4,-1.8,I;2,0.15,2,1.6,F" punti="0,0,pieno,P;4,0,pieno,Q" etichette="-0.97,-2.77,⊗;-0.97,-1.17,⊗;-0.97,0.73,⊗;-0.97,2.03,⊗;0.43,-2.77,⊗;0.43,-1.17,⊗;0.43,0.73,⊗;0.43,2.03,⊗;1.23,-2.77,⊗;1.23,-1.17,⊗;1.23,0.73,⊗;1.23,2.03,⊗;2.43,-2.77,⊗;2.43,-1.17,⊗;2.43,0.73,⊗;2.43,2.03,⊗;3.23,-2.77,⊗;3.23,-1.17,⊗;3.23,0.73,⊗;3.23,2.03,⊗;4.63,-2.77,⊗;4.63,-1.17,⊗;4.63,0.73,⊗;4.63,2.03,⊗" xmin=-1.2 xmax=5.2 ymin=-2.8 ymax=2.6 titolo="In un campo uniforme il filo curvo da $P$ a $Q$ subisce la stessa forza $\vec{F} = I\,\overrightarrow{PQ} \times \vec{B}$ del segmento tratteggiato"}

:::dimostrazione
Il tratto $d\vec{\ell}$ è approssimativamente rettilineo, quindi per la forza su un filo rettilineo riceve $d\vec{F} = I\,d\vec{\ell} \times \vec{B}$, e la somma dei contributi è l'integrale. Se $\vec{B}$ è costante, si porta fuori dall'integrale per la linearità del prodotto vettoriale:
$$
\vec{F} = I \left( \int_\gamma d\vec{\ell} \right) \times \vec{B} = I\,\overrightarrow{PQ} \times \vec{B} ,
$$
perché l'integrale degli spostamenti infinitesimi lungo una curva da $P$ a $Q$ è lo spostamento complessivo $\overrightarrow{PQ}$. Per una curva chiusa lo spostamento complessivo è nullo, quindi è nulla anche la forza.
:::
::::

## Momento delle forze su una spira

::::teorema{#momento-su-una-spira titolo="Momento delle forze su una spira rettangolare"}
Si consideri una spira rettangolare rigida di lati $a$ e $b$ e area $A = ab$, percorsa dalla corrente $I$ e immersa in un campo magnetico uniforme $\vec{B}$ perpendicolare ai lati di lunghezza $a$. Sia $\hat{n}$ il versore normale al piano della spira orientato con la regola della mano destra, cioè con le dita piegate nel verso della corrente e il pollice lungo $\hat{n}$, e sia $\theta$ l'angolo tra $\hat{n}$ e $\vec{B}$. Allora la forza totale sulla spira è nulla e il momento delle forze è
$$
\vec{\tau} = I A\,\hat{n} \times \vec{B} ,
\qquad
\tau = I A B \sin\theta .
$$
Il momento tende a far ruotare la spira verso la posizione in cui $\hat{n}$ è parallelo e concorde a $\vec{B}$; è massimo quando il campo giace nel piano della spira ed è nullo quando il campo è perpendicolare alla spira. Una spira quadrata di lato $10\,\mathrm{cm}$, percorsa da $2{,}0\,\mathrm{A}$ in un campo di $0{,}50\,\mathrm{T}$ parallelo al suo piano, subisce il momento $\tau = 2{,}0 \cdot 0{,}010 \cdot 0{,}50\,\mathrm{N\cdot m} = 1{,}0 \cdot 10^{-2}\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 unicolore=1 linee="1.149,-0.964 -1.149,0.964;-3.2,-2.6 3.2,-2.6;-3.2,2.6 3.2,2.6" vettori="-1.149,0.964,-1.149,2.264,F;1.149,-0.964,1.149,-2.264,−F;0,0,0.9,1.072,n̂;1.4,-2.6,3.1,-2.6,B;1.4,2.6,3.1,2.6" segmenti="0,0,2,0" punti="0,0,pieno" etichette="-1.769,0.814,⊙;1.399,-1.114,⊗;0.55,0.18,θ;-0.6,-0.45,O" xmin=-3.4 xmax=3.4 ymin=-2.9 ymax=2.9 titolo="Spira rettangolare vista lungo i lati di lunghezza $a$: le forze $\vec{F}$ e $-\vec{F}$ formano una coppia di braccio $b\sin\theta$, che fa ruotare $\hat{n}$ verso $\vec{B}$"}

:::dimostrazione
Si sceglie il riferimento con $\vec{B} = B\,\hat{\imath}$ e l'asse $z$ parallelo ai lati di lunghezza $a$, con l'origine $O$ nel centro della spira; il versore $\hat{n}$ sta allora nel piano $xy$ e forma l'angolo $\theta$ con l'asse $x$. Per la forza su un filo di forma qualunque la forza totale sulla spira chiusa è nulla, quindi il momento delle forze non dipende dal polo, e si calcola rispetto a $O$.

- I lati di lunghezza $b$ sono perpendicolari all'asse $z$ e percorsi da correnti opposte. Le forze su di essi sono parallele all'asse $z$, opposte, e applicate nei punti medi dei due lati, che stanno entrambi sull'asse $z$; quindi agiscono lungo la stessa retta e il loro momento complessivo è nullo.
- I lati di lunghezza $a$ sono paralleli all'asse $z$ e percorsi da correnti opposte, quindi per la forza su un filo rettilineo ricevono le forze $I a B\,\hat{\jmath}$ e $-I a B\,\hat{\jmath}$, che formano una coppia. Il braccio della coppia è la distanza tra le due rette d'azione, cioè la proiezione sull'asse $x$ del lato di lunghezza $b$; questo lato è perpendicolare a $\hat{n}$, perciò la proiezione vale $b\sin\theta$.

Il momento della coppia ha quindi modulo $I a B \cdot b\sin\theta = I A B \sin\theta$ ed è diretto lungo l'asse $z$. Applicando la regola della mano destra alla coppia si verifica che essa fa ruotare $\hat{n}$ verso $\vec{B}$, cioè che $\vec{\tau}$ ha il verso di $\hat{n} \times \vec{B}$.
:::
::::

## Momento magnetico ed energia di una spira

:::definizione{#momento-magnetico titolo="Momento magnetico"}
Una spira piana di area $A$ percorsa dalla corrente $I$ ha **momento magnetico**
$$
\vec{\mu} = I A\,\hat{n} ,
$$
dove $\hat{n}$ è il versore normale alla spira orientato con la regola della mano destra rispetto al verso della corrente; una bobina di $N$ spire uguali avvolte strettamente ha $\vec{\mu} = N I A\,\hat{n}$. Il momento magnetico si misura in $\mathrm{A \cdot m^2}$. Con questa grandezza il momento delle forze in un campo uniforme si scrive
$$
\vec{\tau} = \vec{\mu} \times \vec{B} ,
\qquad
\tau = \mu B \sin\theta ,
$$
e la formula vale per spire piane di forma qualunque, perché una spira si approssima con tante spire rettangolari sottili accostate, le cui correnti sui lati in comune si annullano. Una bobina di $50$ spire di $10\,\mathrm{cm} \times 5{,}0\,\mathrm{cm}$ percorsa da $2{,}0\,\mathrm{A}$ ha $\mu = 50 \cdot 2{,}0 \cdot 5{,}0 \cdot 10^{-3}\,\mathrm{A\cdot m^2} = 0{,}50\,\mathrm{A\cdot m^2}$, e in un campo di $0{,}30\,\mathrm{T}$ subisce al massimo il momento $0{,}15\,\mathrm{N\cdot m}$. Anche un ago magnetico ha un momento magnetico, diretto dal polo sud al polo nord, e in un campo esterno si orienta con $\vec{\mu}$ parallelo e concorde a $\vec{B}$.
:::

::::teorema{#energia-momento-magnetico titolo="Energia di un momento magnetico in un campo uniforme"}
Una spira rigida con momento magnetico $\vec{\mu}$, libera di ruotare in un campo magnetico uniforme $\vec{B}$, ha l'energia potenziale
$$
U = -\vec{\mu} \cdot \vec{B} = -\mu B \cos\theta ,
$$
con lo zero nella posizione $\theta = \dfrac{\pi}{2}$. L'energia è minima, $-\mu B$, per $\theta = 0$, che è una posizione di **equilibrio stabile**, ed è massima, $\mu B$, per $\theta = \pi$, che è una posizione di equilibrio instabile. Il lavoro che un agente esterno compie per ruotare lentamente la spira da $\theta_1$ a $\theta_2$ è $W = U(\theta_2) - U(\theta_1)$. Per capovolgere la bobina con $\mu = 0{,}50\,\mathrm{A\cdot m^2}$ da $\theta = 0$ a $\theta = \pi$ in un campo di $0{,}30\,\mathrm{T}$ serve il lavoro $W = 2\mu B = 0{,}30\,\mathrm{J}$.

::grafico{f="-cos(x)" xmin=-0.4 xmax=6.8 ymin=-1.6 ymax=1.6 nomi="θ,U" legenda="U = -\mu B \cos\theta" punti="0,-1,pieno;3.1416,1,pieno;6.2832,-1,pieno" etichette="3.0,1.25,π;5.4,-1.4,stabile;3.5,1.2,instabile;6.1,-0.75,2π" titolo="Energia $U = -\mu B\cos\theta$ della spira, in unità $\mu B$: minimo in $\theta = 0$ (equilibrio stabile), massimo in $\theta = \pi$ (equilibrio instabile)"}

:::dimostrazione
Il momento delle forze magnetiche è perpendicolare al piano di $\hat{n}$ e $\vec{B}$, quindi diretto lungo l'asse di rotazione, e la sua componente lungo l'asse, presa positiva nel verso in cui $\theta$ cresce, è $\tau_\theta = -\mu B \sin\theta$, perché il momento fa ruotare $\hat{n}$ verso $\vec{B}$. In una rotazione infinitesima $d\theta$ il momento compie il lavoro $\tau_\theta\,d\theta$, come mostra l'argomento sulla dinamica del corpo rigido, quindi da $\theta_1$ a $\theta_2$
$$
W_{\text{mag}} = \int_{\theta_1}^{\theta_2} (-\mu B \sin\theta)\,d\theta = \mu B \cos\theta_2 - \mu B \cos\theta_1 .
$$
Il lavoro dipende solo dagli angoli iniziale e finale, perciò al momento magnetico si associa un'energia potenziale $U$ con $W_{\text{mag}} = U(\theta_1) - U(\theta_2)$; la funzione $U(\theta) = -\mu B\cos\theta$ soddisfa questa uguaglianza e si annulla in $\theta = \dfrac{\pi}{2}$. Si ha $U'(\theta) = \mu B \sin\theta$, nulla per $\theta = 0$ e $\theta = \pi$, e $U''(\theta) = \mu B\cos\theta$, positiva in $0$ e negativa in $\pi$; per il criterio di stabilità dell'equilibrio, visto nell'argomento sul lavoro e l'energia di Fisica 1, la prima posizione è stabile e la seconda instabile. Infine, in una rotazione lenta l'energia cinetica non varia, quindi il lavoro dell'agente esterno è l'opposto di quello magnetico, $W = -W_{\text{mag}} = U(\theta_2) - U(\theta_1)$.
:::
::::

:::esempio{titolo="Momento magnetico orbitale dell'elettrone"}
Nel modello di Bohr dell'atomo di idrogeno l'elettrone percorre una circonferenza di raggio $r = 5{,}29 \cdot 10^{-11}\,\mathrm{m}$ con velocità $v = 2{,}19 \cdot 10^6\,\mathrm{m/s}$. Il moto equivale a una spira percorsa dalla corrente $I = \dfrac{e}{T} = \dfrac{e v}{2\pi r}$, perché in ogni periodo la carica $e$ passa una volta per ciascun punto dell'orbita. L'area della spira è $\pi r^2$, quindi
$$
\mu = I\,\pi r^2 = \frac{e v r}{2} = \frac{1{,}60 \cdot 10^{-19} \cdot 2{,}19 \cdot 10^6 \cdot 5{,}29 \cdot 10^{-11}}{2}\,\mathrm{A\cdot m^2} \approx 9{,}27 \cdot 10^{-24}\,\mathrm{A\cdot m^2} .
$$
Questo valore è il **magnetone di Bohr**, l'unità naturale dei momenti magnetici atomici. Poiché la carica dell'elettrone è negativa, la corrente circola in verso opposto al moto, e il momento magnetico è opposto al momento angolare orbitale. I momenti magnetici atomici sono all'origine delle proprietà magnetiche dei materiali, per le quali si rimanda all'argomento sulle sorgenti del campo magnetico.
:::

:::osservazione{#motore-e-galvanometro titolo="Motore elettrico e galvanometro"}
In un motore elettrico a corrente continua una bobina ruota in un campo magnetico per effetto del momento $\vec{\mu} \times \vec{B}$. Con la corrente sempre nello stesso verso la bobina oscillerebbe attorno alla posizione di equilibrio stabile; un commutatore inverte la corrente ogni mezzo giro, quando $\vec{\mu}$ passa per la direzione di $\vec{B}$, e così il momento mantiene lo stesso verso di rotazione.

Nel **galvanometro** a bobina mobile il campo è radiale, quindi il piano della bobina contiene sempre la direzione del campo e il momento delle forze magnetiche vale $N I A B$ in ogni posizione. Una molla a spirale esercita un momento di richiamo $\kappa\,\phi$, proporzionale all'angolo di rotazione $\phi$; all'equilibrio $N I A B = \kappa\,\phi$, perciò l'angolo $\phi = \dfrac{N A B}{\kappa}\, I$ è proporzionale alla corrente.
:::
