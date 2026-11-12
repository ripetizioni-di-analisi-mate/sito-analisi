---
titolo: Lastre piane e flessione delle piastre
sommario: Il piano medio di una lastra permette di distinguere le azioni di membrana dalla flessione e di calcolare spostamenti, momenti e tagli con il modello di Kirchhoff–Love.
---

## Piano medio e azioni di membrana

:::definizione{#piano-medio titolo="Piano medio e spessore"}
Un elemento piano ha due dimensioni nel proprio piano, indicate con $a$ e $b$, e uno spessore $h$. Si descrive il piano medio con le coordinate $x$ e $y$ e si misura la quota $z$ a partire da quel piano. Per la piastra orizzontale si sceglie $z$ positivo verso il basso. Le due facce occupano quindi le quote $-\dfrac h2$ e $\dfrac h2$. Il piano medio permette di riferire alla stessa superficie le azioni trasmesse da tutte le fibre di una sezione.

::struttura{poligoni="0,0 6,0 6,3.6 0,3.6" frecce="0,0,2.1,0,x;0,0,0,1.8,y" quote="0 0,6 0,a;6 3.6,6 0,b" riferimento=0 titolo="Vista in pianta del piano medio e dimensioni a e b"}

::struttura{poligoni="0,-0.55 6,-0.55 6,0.55 0,0.55" tratteggi="0,0 6,0" quote="6 -0.55,6 0.55,h" frecce="0,0,2.4,0,x;0,0,0,-1.25,z" riferimento=0 titolo="Sezione lungo x con piano medio tratteggiato e z positivo verso il basso"}
:::

:::definizione{#risultanti-membranali titolo="Risultanti membranali"}
Quando i carichi agiscono nel piano medio, una descrizione bidimensionale può usare le **risultanti membranali**. Si indicano con $N_x$ e $N_y$ le risultanti normali e con $N_{xy}$ quella tangenziale per unità di lunghezza del taglio. Per esempio, $\sigma_x$ è la tensione normale nella direzione $x$ e $\tau_{xy}$ è la tensione tangenziale sulle facce normali a $x$ e a $y$. Le risultanti si ottengono integrando nello spessore.
$$
N_x=\int_{-\frac{h}{2}}^{\frac{h}{2}}\sigma_x\,\mathrm dz,
\qquad
N_{xy}=\int_{-\frac{h}{2}}^{\frac{h}{2}}\tau_{xy}\,\mathrm dz.
$$
Lo stesso integrale di $\sigma_y$ dà $N_y$. Le unità sono quelle di una forza divisa per una lunghezza. Una tensione costante di $25\,\mathrm{MPa}$ in una lastra spessa $8\,\mathrm{mm}$ dà $N_x=200\,\mathrm{N/mm}$, cioè $200\,\mathrm{kN/m}$. Un taglio lungo mezzo metro trasmette quindi una forza normale complessiva di $100\,\mathrm{kN}$, se la tensione mantiene quel valore per tutta la lunghezza del taglio.

::struttura{poligoni="0,0 6,0 6,3.4 0,3.4" frecce="0,0,2,0,x;0,0,0,1.7,y;0,1.7,-1.1,1.7,N_x;6,1.7,7.1,1.7,N_x" riferimento=0 titolo="Trazione nel piano medio con risultante normale per unità di lunghezza"}
:::

:::osservazione{titolo="Distinzione fra forza di membrana e momento"}
Una tensione normale uniforme nello spessore produce una forza di membrana. Il suo momento rispetto al piano medio vale zero perché l’integrando $z\sigma_x$ è dispari in $z$. Una distribuzione di tensione proporzionale a $z$ ha invece risultante nulla perché $\sigma_x$ è dispari. Produce però un momento, dato che $z\sigma_x$ è proporzionale a $z^2$. In elasticità lineare e per un materiale omogeneo con spessore simmetrico, le due distribuzioni si possono sommare. La prima descrive la risposta nel piano e la seconda la risposta flessionale.
:::

:::osservazione{titolo="Equilibrio nel piano della lastra"}
Per una lastra soggetta a sole azioni nel piano, un elemento rettangolare trasmette sia forze normali sia forze tangenziali lungo i bordi. Si indichino con $f_x$ e $f_y$ le forze applicate lungo $x$ e $y$ per unità di area del piano medio. Facendo il bilancio lungo ciascuna direzione si ottiene
$$
\begin{aligned}
\partial_xN_x+\partial_yN_{xy}+f_x&=0,\\[6pt]
\partial_xN_{xy}+\partial_yN_y+f_y&=0.
\end{aligned}
$$
Il primo bilancio include la variazione di $N_{xy}$ in direzione $y$ perché le sezioni normali a $y$ possono trasmettere una forza lungo $x$. Se il pannello è soggetto a trazione uniforme, $N_x$ è costante e le altre risultanti possono essere nulle. In assenza di forze distribuite le derivate si annullano e l’equilibrio locale è soddisfatto. Rimane da imporre l’azione sui bordi caricati. Su quelli paralleli a $x$, una risultante $N_x$ da sola non produce trazione normale. Quel campo può quindi rappresentare un pannello con i lati longitudinali liberi. L’equilibrio del piano medio non determina da solo le deformazioni. Per trovarle si usa il legame elastico del materiale e si rispettano i vincoli sugli spostamenti nel piano.
:::

:::esempio{titolo="Superficie inferiore di un impalcato in calcestruzzo"}
La vista dal basso mostra una superficie che si estende in due direzioni nel piano. Se entrambe partecipano alla flessione, il modello di piastra usa uno spostamento trasversale che dipende da due coordinate. Le condizioni al contorno si ricavano dallo schema degli appoggi.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/sottoponte-tolosa.webp" alt="Sottoponte del Pont Saint-Pierre a Tolosa con vista del piano inferiore dell’impalcato" width="1280" height="988" loading="lazy" decoding="async"><figcaption>Superficie inferiore di un impalcato in calcestruzzo. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Pont-Saint-Pierre_-_Toulouse_-Sous-face_du_tablier_en_b%C3%A9ton.jpg">Archaeodontosaurus</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>.</figcaption></figure>
:::

## Ipotesi di Kirchhoff–Love

:::definizione{#kirchhoff-love titolo="Cinematica della piastra sottile"}
La teoria di **Kirchhoff–Love** descrive la flessione di una piastra sottile con piccole pendenze. Le rette inizialmente normali al piano medio rimangono rettilinee e ortogonali alla superficie media deformata. Lo spostamento trasversale $w(x,y)$ è positivo verso il basso e si assume uguale lungo ciascuna di quelle rette. Si indicano con $u_0(x,y)$ e $v_0(x,y)$ gli spostamenti del piano medio nelle direzioni $x$ e $y$. Nel modello linearizzato si ottiene
$$
u(x,y,z)=u_0(x,y)-z\,w_{,x}(x,y),
\qquad
v(x,y,z)=v_0(x,y)-z\,w_{,y}(x,y).
$$
La notazione $w_{,x}$ indica la derivata rispetto a $x$. A quota $z$ la rotazione della normale produce dunque uno spostamento nel piano proporzionale alla distanza dal piano medio. Un tratto a pendenza costante ruota senza sviluppare deformazione flessionale. Una pendenza che cambia da un punto al successivo allunga invece alcune fibre e ne accorcia altre.

::struttura{tratteggi="1.5,-0.4 1.5,0.4;4.5,-0.4 4.5,0.4" frecce="0,0,2,0,x;0,0,0,-1.2,z" linee="0,0 6,0;0,-0.7 1,-0.76 2,-0.93 3,-1.05 4,-0.93 5,-0.76 6,-0.7;1.42,-1.29 1.58,-0.39;4.58,-1.29 4.42,-0.39" etichette="3,0.15,piano medio;3,-1.45,superficie deformata" riferimento=0 titolo="Normali alla superficie media prima e dopo la rotazione in una sezione"}
:::

:::osservazione{titolo="Deformazioni proporzionali alla quota"}
Si consideri la sola flessione, con $u_0=v_0=0$. La deformazione normale lungo $x$ vale $\varepsilon_x=\partial_x u=-z\,w_{,xx}$. Analogamente $\varepsilon_y=-z\,w_{,yy}$. La deformazione angolare ingegneristica nel piano è la somma di due derivate, quindi vale $\gamma_{xy}=\partial_y u+\partial_x v=-2z\,w_{,xy}$. La derivata mista misura la variazione della pendenza lungo $x$ quando ci si sposta in direzione $y$. Compare perciò due volte nella deformazione angolare, una volta per ciascuna direzione.

L’ipotesi sulle normali implica deformazioni di taglio trasversale nulle nella cinematica adottata. Le risultanti trasversali $Q_x$ e $Q_y$ si determinano comunque dall’equilibrio dei momenti. Il modello trascura il loro contributo alla deformata. Una piastra relativamente spessa, o una zona molto vicina a un carico concentrato, può richiedere una descrizione che rappresenti anche quella deformazione.
:::

## Rigidezza e momenti di piastra

::::teorema{#rigidezza-flessionale titolo="Rigidezza flessionale della piastra isotropa"}
Sia la piastra omogenea, isotropa, in regime elastico lineare e di spessore costante. Siano $E$ il modulo di Young e $\nu$ il coefficiente di Poisson. Con la legge costitutiva in stato piano di tensione, la **rigidezza flessionale** è
$$
D=\frac{Eh^3}{12(1-\nu^2)}.
$$
Poiché $E$ si esprime in pascal e $h^3$ in metri cubi, $D$ si esprime in newton metro. A parità di materiale, raddoppiare $h$ moltiplica $D$ per otto. Un errore nella conversione dello spessore entra quindi al cubo nel calcolo.

:::dimostrazione
In stato piano di tensione vale $\sigma_x=\dfrac{E}{1-\nu^2}(\varepsilon_x+\nu\varepsilon_y)$. Sostituendo le deformazioni della pura flessione si ottiene una tensione lineare in $z$. Il momento della tensione rispetto al piano medio si ricava moltiplicando per $z$ e integrando.
$$
\begin{aligned}
\int_{-\frac{h}{2}}^{\frac{h}{2}} z\sigma_x\,\mathrm dz
&=-\frac{E}{1-\nu^2}
   \bigl(w_{,xx}+\nu w_{,yy}\bigr)
   \int_{-\frac{h}{2}}^{\frac{h}{2}}z^2\,\mathrm dz\\[6pt]
&=-\frac{Eh^3}{12(1-\nu^2)}
   \bigl(w_{,xx}+\nu w_{,yy}\bigr).
\end{aligned}
$$
Il fattore comune che moltiplica le curvature è $D$. Il termine in $\nu w_{,yy}$ rimane perché una deformazione normale lungo $y$ contribuisce anche alla tensione lungo $x$.
:::
::::

:::definizione{#momenti-piastra titolo="Momenti per unità di lunghezza"}
Si indicano con $M_x$ e $M_y$ i momenti ottenuti integrando $z\sigma_x$ e $z\sigma_y$ nello spessore. Si indica con $M_{xy}$ il momento ottenuto integrando $z\tau_{xy}$. Con la convenzione della quota $z$ positiva verso il basso, la legge di momento è
$$
\begin{aligned}
M_x&=-D(w_{,xx}+\nu w_{,yy}),\\[6pt]
M_y&=-D(w_{,yy}+\nu w_{,xx}),\\[6pt]
M_{xy}&=-D(1-\nu)w_{,xy}.
\end{aligned}
$$
Nella terza relazione si usa il modulo di taglio $G=\dfrac{E}{2(1+\nu)}$ e la deformazione angolare $-2z\,w_{,xy}$. Il fattore due viene assorbito dal prodotto con $G$. I momenti di piastra si esprimono in newton, cioè in newton metro per metro di bordo. Se un taglio lungo $2\,\mathrm{m}$ ha $M_x=6\,\mathrm{kN}$ uniforme, il momento totale trasmesso dal taglio vale $12\,\mathrm{kN\,m}$.

::struttura{poligoni="0,0 6,0 6,3.4 0,3.4" tratteggi="3,0 3,3.4" frecce="0,0,1.8,0,x;0,0,0,1.6,y;3,1.7,4.2,1.7,n" etichette="3,3.75,taglio normale a x" riferimento=0 titolo="Taglio del piano medio normale a x su cui si definiscono M_x e M_xy"}
:::

:::esempio{titolo="Momento anche nella direzione senza curvatura"}
Una piastra vincolata a deformarsi cilindricamente ha $w_{,yy}=w_{,xy}=0$. Se nel punto in esame $w_{,xx}=-0{,}003\,\mathrm{m^{-1}}$, $D=5\,\mathrm{MN\,m}$ e $\nu=0{,}2$, si ottiene $M_x=15\,\mathrm{kN}$. Inoltre $M_y=\nu M_x=3\,\mathrm{kN}$. Il secondo momento corrisponde alla risposta costitutiva necessaria a mantenere nulla la curvatura lungo $y$. Se il bordo longitudinale fosse libero, quella distribuzione cilindrica potrebbe risultare incompatibile con il momento nullo richiesto dal vincolo.
:::

:::esempio{titolo="Flessione con curvatura trasversale di segno opposto"}
Si supponga che la piastra sia libera di incurvarsi lungo $y$ e che in una regione il momento $M_y$ sia nullo. Se il momento normale lungo $x$ produce una curvatura $w_{,xx}=-0{,}004\,\mathrm{m^{-1}}$ e $\nu=\dfrac14$, la condizione $M_y=0$ implica $w_{,yy}=-\nu w_{,xx}=0{,}001\,\mathrm{m^{-1}}$. Le due curvature hanno segno opposto. Per $D=6\,\mathrm{MN\,m}$ si trova $M_x=22{,}5\,\mathrm{kN}$. Se nello stesso punto la curvatura trasversale fosse impedita, si avrebbe $M_x=24\,\mathrm{kN}$, mentre comparirebbe $M_y=6\,\mathrm{kN}$. I due valori si riferiscono a condizioni cinematiche diverse. L’ipotesi di flessione cilindrica è quindi una scelta del modello che deve essere compatibile con i vincoli.
:::

:::osservazione{titolo="Ricostruzione delle tensioni nelle fibre esterne"}
Se lo stato flessionale è puro e la tensione normale varia linearmente nello spessore, si può porre $\sigma_x(z)=k_x z$. Dalla definizione di momento si ricava $k_x=\dfrac{12M_x}{h^3}$. Sulla faccia a quota positiva si ha pertanto $\sigma_x(\dfrac h2)=\dfrac{6M_x}{h^2}$. Sulla faccia opposta il valore ha segno opposto. Per $h=0{,}12\,\mathrm m$ e $M_x=12\,\mathrm{kN}$ la faccia inferiore è in trazione con $\sigma_x=5\,\mathrm{MPa}$. Se è presente anche una risultante membranale uniforme lungo lo stesso taglio, entrambe le tensioni superficiali ricevono il contributo $\dfrac{N_x}{h}$. Un valore medio di trazione può allora ridurre la compressione sulla faccia superiore, oppure trasformarla in trazione. Questa lettura distingue il ruolo dello sforzo medio da quello del gradiente delle tensioni.
:::

## Equilibrio trasversale e tagli

::::teorema{#tagli-equilibrio titolo="Equilibrio dei momenti e delle forze"}
Sia $q(x,y)$ il carico trasversale per unità di area, positivo verso il basso. Siano $Q_x$ e $Q_y$ le risultanti di taglio per unità di lunghezza, associate alle sezioni di normale $x$ e $y$. In una regione senza coppie distribuite e con campi differenziabili valgono
$$
\begin{aligned}
Q_x&=\partial_x M_x+\partial_y M_{xy},\\[6pt]
Q_y&=\partial_x M_{xy}+\partial_y M_y,\\[6pt]
\partial_x Q_x+\partial_y Q_y+q&=0.
\end{aligned}
$$
Il taglio lungo $x$ dipende quindi sia dalla variazione di $M_x$ in direzione $x$, sia dalla variazione del momento torcente $M_{xy}$ in direzione $y$. In generale la pendenza di un solo diagramma di momento descrive solo una parte dell’equilibrio.

:::dimostrazione
Si isola un rettangolo infinitesimo di lati $\mathrm dx$ e $\mathrm dy$. La differenza dei momenti trasmessi sulle facce normali a $x$, divisa per l’area, tende a $\partial_x M_x$. La variazione dei momenti torcenti sulle facce normali a $y$ dà il secondo contributo. L’equilibrio del momento restituisce la prima espressione di taglio, mentre il bilancio di momento relativo alla direzione ortogonale restituisce la seconda. Il bilancio trasversale somma le differenze dei tagli sulle due coppie di facce e la forza $q\,\mathrm dx\,\mathrm dy$. Dividendo per l’area e passando al limite si ottiene l’ultima equazione.
:::
::::

:::teorema{#equazione-piastra titolo="Equazione biharmonica della piastra"}
Sia $D$ costante e sia $w$ differenziabile quattro volte nella regione considerata. Sostituendo i momenti costitutivi nell’equilibrio si ottiene
$$
D\bigl(w_{,xxxx}+2w_{,xxyy}+w_{,yyyy}\bigr)=q.
$$
Le due derivate miste compaiono sommando i contributi di $M_{xy}$ alle derivate degli altri momenti. Se $\Delta w=w_{,xx}+w_{,yy}$ è il laplaciano, l’equazione si scrive $D\Delta^2 w=q$. Questa scrittura rende esplicito che la flessione lungo le due direzioni è accoppiata anche quando le proprietà del materiale sono uguali in tutte le direzioni.

::struttura{poligoni="0,0 5,0 5,3.5 0,3.5" frecce="0,0,1.6,0,x;0,0,0,1.4,y;0,1.75,-0.95,1.75,n;5,1.75,5.95,1.75,n;2.5,0,2.5,-0.95,n;2.5,3.5,2.5,4.45,n" etichette="2.5,1.75,q" riferimento=0 titolo="Elemento di piano medio con normali uscenti sulle quattro facce e carico trasversale q"}
:::

## Flessione cilindrica

:::definizione{#flessione-cilindrica titolo="Riduzione a una striscia"}
Se geometria, carichi e vincoli permettono una deformata indipendente da $y$, il modello diventa cilindrico e $w=w(x)$. In tal caso $M_x=-D w''$, $M_y=-D\nu w''$ e $M_{xy}=0$. L’equilibrio si riduce a $D w''''=q(x)$. La forma coincide con quella di una trave, ma le azioni sono riferite all’unità di larghezza della piastra. La riduzione vale per uno stato compatibile con la costanza lungo $y$, per esempio per una striscia molto lunga in quella direzione lontano dagli estremi trasversali.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.65,0.65,q" riferimento=0 frecce="-0.45,-0.85,0.05,-0.85,x;-0.45,-0.85,-0.45,-1.25,z" quote="A,B,L" titolo="Sezione di una striscia appoggiata e caricata uniformemente"}
:::

:::esempio{titolo="Striscia appoggiata con carico uniforme"}
Sia $L$ la distanza fra due linee di appoggio e sia $q$ uniforme. L’equilibrio per unità di larghezza dà una reazione $\dfrac{qL}{2}$ su ciascuna linea. Al taglio di ascissa $x$, il carico tra zero e $x$ ha risultante $qx$ con braccio $\dfrac x2$. Si ottiene dunque
$$
M_x(x)=\frac{qLx}{2}-\frac{qx^2}{2}.
$$
Poiché $M_x=-Dw''$, si può integrare due volte e imporre $w(0)=w(L)=0$. La soluzione ha la forma
$$
w(x)=\frac{q}{24D}\bigl(L^3x-2Lx^3+x^4\bigr).
$$
La simmetria dà pendenza nulla in mezzeria. Il momento vale $\dfrac{qL^2}{8}$ in quella sezione e la freccia vale $\dfrac{5qL^4}{384D}$. Il momento cresce con il quadrato della luce e la freccia con la quarta potenza, purché il carico, la rigidezza e il tipo di vincolo restino gli stessi.
:::

## Condizioni ai bordi e agli angoli

:::definizione{#condizioni-bordo titolo="Bordi incastrati, appoggiati e liberi"}
Su un bordo rettilineo, $n$ è la direzione normale uscente e $t$ la direzione tangente. Si indichi con $M_{nn}$ il momento normale al bordo, con $M_{nt}$ il momento torcente di bordo e con $Q_n$ il taglio secondo la normale. Le condizioni omogenee di Kirchhoff–Love assumono forme diverse.

- Su un bordo incastrato sono nulli l’abbassamento $w$ e la derivata normale $\partial_n w$.
- Su un bordo semplicemente appoggiato sono nulli $w$ e $M_{nn}$.
- Su un bordo libero da azioni applicate sono nulli $M_{nn}$ e il **taglio efficace** $V_n=Q_n+\partial_t M_{nt}$, lontano dagli angoli.

Il momento torcente è associato alla variazione di $w$ lungo il bordo. Integrando il suo lavoro lungo quel bordo, una derivata tangenziale passa dal campo di spostamento al campo di momento. Il risultato è il termine $\partial_t M_{nt}$ nella forza efficace. Al termine del bordo compare inoltre un contributo concentrato. In un vertice libero occorre perciò considerare le azioni d’angolo con l’orientazione dei due lati adiacenti. Una reazione d’angolo può essere presente in una piastra sostenuta anche nel vertice.

::struttura{poligoni="0,0 5,0 5,3.4 0,3.4" tratteggi="5,0 5,3.4" frecce="0,0,1.7,0,x;0,0,0,1.6,y;5,1.3,6,1.3,n;5,1.3,5,2.7,t" riferimento=0 titolo="Normale uscente e tangente su un bordo rettilineo"}
:::

:::esempio{titolo="Taglio efficace sul bordo x uguale ad a"}
Sul bordo destro di una piastra rettangolare si assumano $\boldsymbol n$ lungo $+x$ e $\boldsymbol t$ lungo $+y$. Si ha allora $Q_n=Q_x$ e $M_{nt}=M_{xy}$. Se $Q_x=-5\,\mathrm{kN/m}$ e $\partial_y M_{xy}=2\,\mathrm{kN/m}$, il taglio efficace vale $-3\,\mathrm{kN/m}$. Quel valore può rappresentare un’azione prescritta, ma un bordo libero da carichi richiederebbe invece che la somma fosse zero. Nel calcolo, verificare soltanto $Q_x$ lascerebbe fuori il contributo torcente.
:::

:::esempio{titolo="Controllo dei dati di bordo da una deformata"}
Si consideri una deformata $w(x,y)=A x^2$ in prossimità di $x=0$, con $A$ costante e diverso da zero. Sul bordo si ha $w=0$ e si ha anche $\partial_n w=0$, perché $\partial_x w=2Ax$ e la normale uscente a sinistra è diretta lungo $-x$. Il campo soddisfa quindi le condizioni cinematiche di un incastro in quel tratto. Il momento normale vale però $M_{nn}=-2DA$. Se si proponesse lo stesso campo per un appoggio semplice privo di coppie, il momento al bordo darebbe un residuo diverso da zero. Un controllo limitato all’abbassamento non distinguerebbe i due tipi di vincolo.
:::

## Piastra rettangolare e soluzione di Navier

::::teorema{#navier titolo="Risposta a un carico sinusoidale"}
Si consideri una piastra rettangolare di lati $a$ e $b$, con appoggi semplici ideali su tutti e quattro i lati. Siano $m$ e $n$ interi positivi, $\alpha_m=\dfrac{m\pi}{a}$ e $\beta_n=\dfrac{n\pi}{b}$. Per un carico
$$
q(x,y)=q_{mn}\sin(\alpha_m x)\sin(\beta_n y)
$$
la risposta elastica lineare ha la stessa forma con ampiezza
$$
W_{mn}=\frac{q_{mn}}{D(\alpha_m^2+\beta_n^2)^2}.
$$

::struttura{poligoni="0,0 5,0 5,3.4 0,3.4" tratteggi="-0.2,0 -0.2,3.4;5.2,0 5.2,3.4;0,-0.2 5,-0.2;0,3.6 5,3.6" quote="0 0,5 0,a;5 0,5 3.4,b" frecce="0,0,1.7,0,x;0,0,0,1.6,y" punti="2.5,1.7,C" riferimento=0 titolo="Rettangolo appoggiato su tutti i lati e centro C"}

:::dimostrazione
Il prodotto di seni si annulla sui quattro lati. Su un lato normale a $x$, sia $w_{,xx}$ sia $w_{,yy}$ sono multipli dello stesso prodotto, quindi anche $M_x$ si annulla. Sui lati normali a $y$ si annulla analogamente $M_y$. Sono quindi soddisfatte le condizioni di appoggio. Applicando una volta il laplaciano si ottiene il fattore $-(\alpha_m^2+\beta_n^2)$. Applicandolo una seconda volta si ottiene il quadrato del fattore senza il segno meno. L’equazione di equilibrio fornisce così il valore di $W_{mn}$.
:::
::::

:::esempio{titolo="Prima forma e freccia in mezzeria"}
Una piastra quadrata con lato $2\,\mathrm m$ ha $D=4\,\mathrm{MN\,m}$. Per il primo modo $\alpha_1=\beta_1=\dfrac{\pi}{2}\,\mathrm{m^{-1}}$. Se $q_{11}=\pi^4\,\mathrm{kN/m^2}$, nel centro entrambi i seni valgono uno e $w_C=W_{11}=1\,\mathrm{mm}$. Per $\nu=\dfrac14$, le curvature al centro sono uguali a $-\alpha_1^2 W_{11}$. Si ottiene dunque $M_x=M_y=1{,}25\pi^2\,\mathrm{kN}$. Nel centro $M_{xy}=0$ perché la derivata mista contiene i due coseni, che lì sono nulli.

::grafico{f="sin(pi*x/2)" xmin=0 xmax=2 ymin=-0.1 ymax=1.2 titolo="Forma normalizzata lungo la mezzeria, con ordinata $\dfrac{w}{W_{11}}$"}
:::

:::teorema{#coefficienti-navier titolo="Coefficienti della doppia serie di seni"}
Per un carico rappresentabile in doppia serie di seni, l’ortogonalità in ciascuna direzione fornisce
$$
q_{mn}=\frac{4}{ab}\int_0^a\int_0^b
q(x,y)\sin(\alpha_m x)\sin(\beta_n y)\,\mathrm dy\,\mathrm dx.
$$
Per $q$ costante, ciascun integrale di un seno è nullo se il relativo indice è pari. Se $m$ e $n$ sono entrambi dispari, si ricava invece $q_{mn}=\dfrac{16q}{mn\pi^2}$. Il coefficiente $q_{11}$ non coincide con l’intensità uniforme, perché misura la componente del carico lungo una funzione di forma variabile nello spazio. Per ricostruire la deformata si sommano le risposte dei singoli modi. I termini con indice alto sono attenuati dal denominatore di quarto ordine nelle frequenze. Derivare la serie per ottenere momenti o tagli riduce tale attenuazione, quindi un’approssimazione sufficiente per le frecce può richiedere più termini per quelle azioni.
:::

:::esempio{titolo="Contributo del terzo modo sotto carico uniforme"}
Su una piastra quadrata, sotto carico uniforme, i coefficienti $q_{31}$ e $q_{11}$ hanno rapporto $\dfrac13$. Il rapporto fra le somme dei quadrati delle frequenze vale $\dfrac{3^2+1^2}{1^2+1^2}=5$. Il denominatore della risposta modale dipende dal quadrato di quella somma. Quindi l’ampiezza $W_{31}$ è $\dfrac{1}{75}$ dell’ampiezza $W_{11}$. Il contributo alla freccia del centro ha segno opposto, perché il seno di indice tre vale $-1$ nel centro. Per una curvatura lungo $x$, la derivazione moltiplica ciascuna ampiezza per $\alpha_m^2$. Il terzo modo pesa quindi, in modulo, $\dfrac{9}{75}$ rispetto al primo in quella curvatura. Lo stesso termine che modifica di poco l’abbassamento può avere un effetto maggiore su una grandezza derivata. La scelta del numero di termini dipende dunque dalla grandezza che si vuole calcolare.
:::

:::attenzione{titolo="Verifica delle ipotesi prima del calcolo modale"}
La base di seni soddisfa i quattro appoggi semplici, mentre in generale la pendenza normale è diversa da zero sul bordo. In particolare $\partial_x w$ in $x=0$ contiene $\alpha_m\sin(\beta_n y)$ per ogni singolo modo. La soluzione a un modo non soddisfa perciò un incastro sul lato $x=0$. La stessa verifica va ripetuta se cambiano il materiale o lo spessore. Con $D$ variabile, portarlo fuori dalle derivate dell’equilibrio cambierebbe l’equazione.
:::


## Scelta del modello e controlli

:::osservazione{titolo="Rapporti fra spessore e dimensioni del campo"}
Le ipotesi della piastra sottile si valutano sul tratto che governa il problema. Una lastra molto estesa in una direzione può avere una dimensione trasversale piccola rispetto alla lunghezza totale. Per la flessione trasversale il rapporto da considerare è quello fra lo spessore e la dimensione trasversale, perché su quella distanza cambia la pendenza della deformata. Anche il raggio di una zona caricata può essere una scala più piccola della luce. Un modello di Kirchhoff–Love può dare un valore attendibile della freccia globale mentre le tensioni vicino a una forza fortemente localizzata richiedono un modello più dettagliato. La scelta si basa quindi sulla geometria, sulla distribuzione delle azioni e sulla quantità richiesta.
:::

:::osservazione{titolo="Confronto fra deformata lineare e risposta di membrana"}
Nella flessione lineare si suppone che le rotazioni siano piccole e si trascurano i contributi quadratici delle pendenze alle deformazioni del piano medio. Per esempio, una striscia di lunghezza iniziale $\mathrm dx$ che si inclina di una pendenza $\partial_x w$ acquista, per effetto geometrico, un allungamento di ordine $(\partial_x w)^2\mathrm dx$. Se i bordi impediscono gli spostamenti nel piano e l’abbassamento diventa comparabile allo spessore, quell’effetto può indurre trazioni di membrana che modificano la flessione. La somma lineare di una soluzione di membrana e di una soluzione flessionale presuppone che questo accoppiamento sia trascurabile. Per questo motivo la verifica delle ipotesi va ripetuta quando si riduce lo spessore a parità di carico.
:::

:::osservazione{titolo="Controlli sulle unità e sulla simmetria"}
Per controllare un risultato si distinguono sempre la quantità per unità di bordo e la corrispondente quantità totale. Un momento di piastra ha unità di forza, mentre un momento risultante su un taglio di larghezza assegnata ha unità di forza moltiplicata per una lunghezza. Il taglio $Q_x$ ha unità di forza divisa per lunghezza, perché è una derivata di momento. Il carico trasversale $q$ è invece per unità di area, quindi ha le stesse unità di una derivata di $Q_x$. In un rettangolo con carico e vincoli simmetrici rispetto a entrambe le mezzerie, anche la deformata è simmetrica. Nelle mezzerie le rispettive pendenze normali si annullano. Se il calcolo produce una pendenza centrale diversa da zero sotto queste ipotesi, si controllano i dati, la posizione dell’origine e i termini modali impiegati.
:::
