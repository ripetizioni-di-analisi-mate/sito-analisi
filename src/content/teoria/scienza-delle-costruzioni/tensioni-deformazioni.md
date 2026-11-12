---
titolo: "Tensioni, deformazioni e legge di Hooke"
sommario: "Dalla trazione su una superficie al tensore delle tensioni, al cerchio di Mohr e alle deformazioni di un solido elastico isotropo."
---

## Trazione e tensore di Cauchy

:::definizione{#vettore-tensione titolo="Trazione su una superficie interna"}
Una sezione della trave trasmette una forza distribuita. Per descrivere che cosa avviene in un singolo punto, si considera una porzione della superficie di taglio attorno a quel punto. Si orienta la superficie con il versore normale $\mathbf n$, diretto verso l’esterno della parte isolata. Se $\Delta\mathbf F$ è la forza di contatto esercitata dalla parte rimossa sulla porzione di area $\Delta A$, il **vettore di trazione** è
$$
\mathbf t(\mathbf n)=\lim_{\Delta A\to0}\frac{\Delta\mathbf F}{\Delta A}.
$$
Il limite si intende in un punto regolare del materiale. La proiezione $\sigma_n=\mathbf n\cdot\mathbf t(\mathbf n)$ è la tensione normale. La componente residua $\mathbf t(\mathbf n)-\sigma_n\mathbf n$ giace sulla superficie ed è la trazione tangenziale. Un valore positivo di $\sigma_n$ indica trazione, poiché il vettore normale punta all’esterno. Un valore negativo indica compressione.

::struttura{poligoni="0,0 2.4,0 0,1.8" frecce="1.2,0.9,1.74,1.62,n;1.2,0.9,0.48,1.44,t;1.2,0.9,2.05,1.42,trazione" titolo="Normale, tangente e trazione su un taglio inclinato"}

La stessa forza può avere componenti normali e tangenziali in proporzioni diverse a seconda della faccia. Per esempio, se una trazione su una superficie ha componenti $30\,\mathrm{MPa}$ lungo la normale e $40\,\mathrm{MPa}$ lungo la tangente, il suo modulo è $50\,\mathrm{MPa}$. Il megapascal equivale a un newton per millimetro quadrato.
:::

::::teorema{#relazione-cauchy titolo="Relazione di Cauchy"}
In un continuo classico con trazioni di contatto, ogni trazione in un punto regolare si ricava da un unico tensore $\boldsymbol{\sigma}$ mediante
$$
\mathbf t(\mathbf n)=\boldsymbol{\sigma}\mathbf n,\qquad
\boldsymbol{\sigma}=
\begin{pmatrix}
\sigma_x & \tau_{xy} & \tau_{xz}\\
\tau_{xy} & \sigma_y & \tau_{yz}\\
\tau_{xz} & \tau_{yz} & \sigma_z
\end{pmatrix}.
$$
Le tre colonne sono le trazioni sulle facce con normali positive parallele agli assi. Il tensore è simmetrico se il bilancio del momento angolare si applica in assenza di coppie distribuite. In particolare, la componente lungo $y$ della trazione sulla faccia di normale $\mathbf e_x$ coincide con la componente lungo $x$ sulla faccia di normale $\mathbf e_y$.

:::dimostrazione
Si isola un tetraedro con una faccia obliqua di area $A$ e tre facce coordinate. Quando i coseni direttori $n_i$ sono positivi, le aree delle facce coordinate sono $An_i$ e le loro normali sono $-\mathbf e_i$. Le forze sulle facce sono dell’ordine del quadrato della dimensione del tetraedro, mentre la forza di volume è dell’ordine del cubo. Dividendo l’equilibrio per $A$ e passando al limite si ottiene $\mathbf t(\mathbf n)+\sum_i n_i\mathbf t(-\mathbf e_i)=0$. Le trazioni su facce opposte hanno verso opposto, perciò $\mathbf t(\mathbf n)=\sum_i n_i\mathbf t(\mathbf e_i)$. Lo stesso argomento vale negli altri ottanti con i segni delle normali invertiti. Il bilancio del momento di un elemento cubico dà l’uguaglianza delle coppie di componenti tangenziali.
:::

La relazione permette di passare dalle componenti cartesiane alle tensioni su un piano di normale assegnata, anche se il piano è obliquo rispetto a tutti e tre gli assi.
::::

:::definizione{#tensione-piana titolo="Stato piano di tensione"}
Nello **stato piano di tensione** rispetto a $xy$ si ha $\sigma_z=\tau_{xz}=\tau_{yz}=0$. La terza colonna del tensore è nulla, quindi sulle facce ortogonali a $z$ la trazione è nulla. È il modello di una lamina sottile caricata nel suo piano, con facce maggiori libere e in regioni lontane dall’introduzione locale dei carichi. Nel piano restano due tensioni normali e una tangenziale.

::struttura{poligoni="-1,-1 1,-1 1,1 -1,1" frecce="1,0,1.7,0,σ_x;-1,0,-1.7,0;0,1,0,1.7,σ_y;0,-1,0,-1.7;1.15,-0.6,1.15,0.6,τ_xy;-1.15,0.6,-1.15,-0.6;-0.6,1.15,0.6,1.15;0.6,-1.15,-0.6,-1.15" titolo="Facce dell’elemento piano con componenti positive"}

Sulla faccia con normale $+\mathbf e_x$ una $\tau_{xy}$ positiva è diretta verso $+y$. Sulla faccia con normale $-\mathbf e_x$ la stessa componente si rappresenta verso $-y$. Nel problema di De Saint Venant questa lettura consente di risalire dalle azioni interne della trave alle trazioni sulla sezione.
:::

:::esempio{titolo="Dalla tensione uniforme al risultante sulla sezione"}
Una barra prismatica di area $A=300\,\mathrm{mm^2}$ è tirata da una forza assiale. In una sezione in cui la tensione normale è uniforme e vale $\sigma_x=40\,\mathrm{MPa}$, il vettore di trazione sulla faccia di normale $+\mathbf e_x$ vale $40\,\mathrm{MPa}$ lungo $+x$. L’integrale su quella faccia si riduce al prodotto $N=\sigma_x A=12\,000\,\mathrm N$. Il valore $40\,\mathrm{MPa}$ è una grandezza locale e resta lo stesso per ogni punto di quella sezione. Il valore $12\,\mathrm{kN}$ riguarda l’intera sezione. Se la tensione varia sulla faccia, il risultante si ottiene integrando il valore locale e l’eventuale momento si ricava integrando i contributi con il rispettivo braccio.
:::

:::esempio{titolo="Provini per prove di trazione"}
Nei provini la zona centrale ha una sezione ridotta rispetto alle estremità di presa. Nel tratto utile, lontano dai raccordi, il modello monoassiale permette di collegare forza, tensione media e deformazione assiale. La forma del provino aiuta a individuare dove applicare quel modello.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/provini-trazione.webp" alt="Provini metallici allungati con estremità più larghe e tratto centrale ristretto" width="806" height="1024" loading="lazy" decoding="async"><figcaption>Provini per prove di trazione. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:Proba_rozciagania_probki_1.jpg">Andrzej Otrębski</a>, <a href="https://creativecommons.org/licenses/by-sa/3.0/">CC BY-SA 3.0</a>.</figcaption></figure>
:::

## Equilibrio nel continuo

::::teorema{#equilibrio-locale titolo="Equazioni locali di equilibrio"}
Si consideri un materiale in quiete con tensore di Cauchy derivabile e forza di volume $\mathbf b$, cioè forza per unità di volume. Il bilancio delle forze si scrive $\operatorname{div}\boldsymbol{\sigma}+\mathbf b=\mathbf0$. Nel piano, per campi indipendenti da $z$, le due equazioni sono
$$
\begin{cases}
\frac{\partial\sigma_x}{\partial x}+\frac{\partial\tau_{xy}}{\partial y}+b_x=0,\\[4pt]
\frac{\partial\tau_{xy}}{\partial x}+\frac{\partial\sigma_y}{\partial y}+b_y=0.
\end{cases}
$$
Sul contorno dove si assegna la trazione esterna $\overline{\mathbf t}$ si impone $\boldsymbol{\sigma}\mathbf n=\overline{\mathbf t}$. Si ottengono così due verifiche distinte. L’equilibrio locale riguarda i punti interni, mentre la condizione al contorno confronta le forze sulla superficie.

::struttura{poligoni="0,0 3,0 3,2 0,2" frecce="0,0,3.9,0,x;0,0,0,2.7,y;1.45,1,2.1,1.5,b;3,0.72,3.8,1.12,t(n)" punti="1.45,1,P,pieno" riferimento=0 titolo="Forza di volume in un punto e trazione al bordo"}

:::dimostrazione
Si consideri un parallelepipedo infinitesimo. Lungo $x$, il contributo delle due facce perpendicolari a $x$ è la differenza delle rispettive $\sigma_x$ per l’area della faccia. Quello delle facce perpendicolari a $y$ è la differenza delle $\tau_{xy}$. Si aggiunge la forza di volume lungo $x$, si divide per il volume e si passa al limite. Le differenze divise per le lunghezze diventano le derivate della prima equazione. La proiezione lungo $y$ fornisce la seconda.
:::
::::

:::esempio{titolo="Una tensione che varia da un punto all’altro"}
Siano $\sigma_x=kx$, $\tau_{xy}=0$ e $\sigma_y$ costante. La prima equazione dà $b_x=-k$, mentre la seconda dà $b_y=0$. Se $k=3\,\mathrm{MPa/m}$, la forza di volume lungo $x$ vale $-3\,\mathrm{MN/m^3}$. Il segno negativo bilancia la forza netta prodotta dalle trazioni sulle due facce normali a $x$. Un campo uniforme, a parità di ipotesi, richiede invece una forza di volume nulla, perché le trazioni opposte hanno lo stesso modulo.
:::

:::osservazione{titolo="Traccia libera e bordo caricato"}
Su un tratto libero del bordo, il vettore di trazione assegnato è nullo. Se la normale del tratto è $+\mathbf e_x$, ciò impone $\sigma_x=\tau_{xy}=0$ sul tratto stesso. Il valore $\sigma_y$ può restare diverso da zero, poiché è una componente della trazione su una faccia con normale diversa. Per esempio, nel campo uniforme $\sigma_x=\tau_{xy}=0$, $\sigma_y=20\,\mathrm{MPa}$, il bordo verticale è libero mentre quello orizzontale è caricato. Le equazioni locali di equilibrio sono soddisfatte da quel campo in assenza di forze di volume. Il dato al contorno individua quali facce possono realizzare concretamente l’esempio.
:::

## Spostamenti, deformazioni e compatibilità

:::definizione{#deformazioni titolo="Tensore delle piccole deformazioni"}
Sia $\mathbf u$ il campo di spostamenti. Il suo gradiente $\nabla\mathbf u$ descrive come cambia lo spostamento passando da un punto al vicino. La parte simmetrica è il tensore di deformazione infinitesima $\boldsymbol{\varepsilon}=\dfrac12(\nabla\mathbf u+(\nabla\mathbf u)^{\mathsf T})$. La parte antisimmetrica descrive la rotazione infinitesima. Per esempio, nel piano si ha
$$
\varepsilon_x=\frac{\partial u_x}{\partial x},\qquad
\varepsilon_y=\frac{\partial u_y}{\partial y},\qquad
\gamma_{xy}=\frac{\partial u_x}{\partial y}+\frac{\partial u_y}{\partial x}
=2\varepsilon_{xy}.
$$
La deformazione normale $\varepsilon_x$ misura la variazione relativa di lunghezza di un segmento inizialmente parallelo a $x$. La deformazione angolare ingegneristica $\gamma_{xy}$ misura, con segno, la diminuzione dell’angolo inizialmente retto fra segmenti diretti come $+x$ e $+y$. Per piccoli gradienti il quadrato dei gradienti viene trascurato. La variazione relativa di volume al primo ordine è la traccia $\varepsilon_x+\varepsilon_y+\varepsilon_z$.

::struttura{poligoni="0,0 2,0 2,1.7 0,1.7" tratteggi="0,0 2.5,0 3.1,1.7 0.6,1.7 0,0" frecce="0,1.7,0.6,1.7,u_x;2,0,2.5,0" etichette="1.2,1.25,iniziale;2.95,1.98,deformato" titolo="Allungamento orizzontale e distorsione di un elemento"}

Se $u_x=ay$ e $u_y=-ax$, le due derivate trasversali sono opposte. Si ottiene $\gamma_{xy}=0$ e tutte le deformazioni normali sono nulle. Il campo rappresenta una rotazione infinitesima rigida, quindi modifica l’orientazione dei segmenti senza cambiarne lunghezze o angolo reciproco.
:::

::::teorema{#compatibilita-piana titolo="Compatibilità delle deformazioni piane"}
Se un campo sufficientemente regolare di deformazioni deriva da spostamenti piani monodromi, allora vale
$$
\frac{\partial^2\varepsilon_x}{\partial y^2}
+\frac{\partial^2\varepsilon_y}{\partial x^2}
=\frac{\partial^2\gamma_{xy}}{\partial x\partial y}.
$$
In un dominio piano semplicemente connesso, con campi sufficientemente regolari, l’identità è anche sufficiente per l’esistenza di uno spostamento piano. Lo spostamento è determinato a meno dei moti rigidi piani. Si usa questa equazione per controllare che deformazioni assegnate separatamente lungo $x$, lungo $y$ e a taglio descrivano un’unica configurazione.

:::dimostrazione
Per dimostrare la necessità si sostituiscono le derivate di $u_x,u_y$ nella relazione. Il primo termine a sinistra è $\partial_x\partial_y^2u_x$ e il secondo è $\partial_y\partial_x^2u_y$. Derivando $\gamma_{xy}$ si ricavano gli stessi termini, perché le derivate miste commutano. Per la sufficienza si introduce $\omega=\dfrac12(\partial_xu_y-\partial_yu_x)$. Le equazioni $\partial_x\omega=\dfrac12\partial_x\gamma_{xy}-\partial_y\varepsilon_x$ e $\partial_y\omega=\partial_x\varepsilon_y-\dfrac12\partial_y\gamma_{xy}$ formano un campo gradiente proprio quando vale l’identità. Su un dominio semplicemente connesso esiste quindi $\omega$. Le relazioni $\partial_xu_x=\varepsilon_x$, $\partial_yu_x=\dfrac12\gamma_{xy}-\omega$, $\partial_xu_y=\dfrac12\gamma_{xy}+\omega$ e $\partial_yu_y=\varepsilon_y$ danno due ulteriori campi gradienti. Integrandoli si ricavano $u_x,u_y$.
:::

Per $\varepsilon_x=ay^2$, $\varepsilon_y=bx^2$ e $\gamma_{xy}=cxy$ la condizione diventa $2a+2b=c$. Se i coefficienti non soddisfano questa uguaglianza, le deformazioni assegnate sono incompatibili.
::::

:::esempio{titolo="Distorsione positiva a partire da uno spostamento"}
Sia $u_x=ay$ con $a=3\cdot10^{-4}$ e sia $u_y=0$. Un segmento inizialmente parallelo a $x$ rimane orizzontale, mentre un segmento parallelo a $y$ acquista una componente verso destra. Perciò l’angolo fra i segmenti diminuisce. Il calcolo dà $\varepsilon_x=\varepsilon_y=0$ e $\gamma_{xy}=3\cdot10^{-4}$. Le due diagonali di un quadrato iniziale danno letture diverse. Il segmento diretto come $(1,1)$ si allunga, mentre quello diretto come $(-1,1)$ si accorcia. Questa configurazione è un esempio di distorsione a volume invariato al primo ordine. Una misura nella sola direzione $x$ sarebbe nulla, benché l’elemento abbia cambiato forma.
:::

## Tensioni su un piano inclinato

::::teorema{#trasformazione titolo="Trasformazione delle tensioni nel piano"}
Sia $\theta$ l’angolo antiorario dall’asse $x$ alla normale $\mathbf n=(\cos\theta,\sin\theta)$. La tangente positiva $\mathbf m=(-\sin\theta,\cos\theta)$ si ottiene ruotando la normale di $90^\circ$ in senso antiorario. Posti $p=\dfrac{\sigma_x+\sigma_y}{2}$ e $d=\dfrac{\sigma_x-\sigma_y}{2}$, le proiezioni della trazione sono
$$
\begin{aligned}
\sigma_n&=p+d\cos2\theta+\tau_{xy}\sin2\theta,\\[6pt]
\tau_{nt}&=-d\sin2\theta+\tau_{xy}\cos2\theta.
\end{aligned}
$$
L’angolo è misurato rispetto alla normale della faccia. In particolare, una faccia orizzontale ha normale verticale e corrisponde a $\theta=90^\circ$ se si sceglie la faccia rivolta verso l’alto.

::struttura{poligoni="0,0 2.4,0 0,1.8" frecce="0,0,3,0,x;0,0,0,2.3,y;1.2,0.9,1.74,1.62,n;1.2,0.9,0.48,1.44,m" riferimento=0 titolo="Assi globali e base orientata della faccia inclinata"}

:::dimostrazione
Dalla relazione di Cauchy la trazione nel piano è il prodotto della matrice piana per $(\cos\theta,\sin\theta)^{\mathsf T}$. Il prodotto scalare con $\mathbf n$ dà $\sigma_x\cos^2\theta+\sigma_y\sin^2\theta+2\tau_{xy}\sin\theta\cos\theta$. Il prodotto scalare con $\mathbf m$ dà $(\sigma_y-\sigma_x)\sin\theta\cos\theta+\tau_{xy}(\cos^2\theta-\sin^2\theta)$. Sostituendo le identità trigonometriche del doppio angolo si ricavano le due formule.
:::
::::

:::esempio{titolo="La faccia a quarantacinque gradi"}
In una prova monoassiale con $\sigma_x=80\,\mathrm{MPa}$, $\sigma_y=0$ e $\tau_{xy}=0$, si ha $p=d=40\,\mathrm{MPa}$. Per $\theta=45^\circ$ il coseno del doppio angolo è nullo e il seno vale uno, quindi $\sigma_n=40\,\mathrm{MPa}$ e $\tau_{nt}=-40\,\mathrm{MPa}$. Il segno della seconda componente indica che la trazione tangenziale è opposta alla tangente $\mathbf m$. Anche un carico monoassiale produce dunque taglio sulle facce inclinate.
:::

## Cerchio di Mohr e direzioni principali

::::teorema{#mohr titolo="Cerchio di Mohr e tensioni principali"}
Nel piano $(\sigma_n,\tau_{nt})$ il punto rappresentativo della faccia descrive una circonferenza di centro $(p,0)$ e raggio $R=\sqrt{d^2+\tau_{xy}^2}$. Le intersezioni con l’asse orizzontale sono le **tensioni principali nel piano**
$$
\sigma_1=p+R,\qquad \sigma_2=p-R.
$$
Se $R>0$, la direzione della normale associata a $\sigma_1$ si ricava da $\cos 2\theta_1=\dfrac dR$ e $\sin 2\theta_1=\dfrac{\tau_{xy}}R$. Le due informazioni determinano il quadrante del doppio angolo. L’altra normale principale è ortogonale alla prima. Quando $R=0$, ogni normale nel piano è principale e la trazione tangenziale è nulla per ogni $\theta$.

::grafico{curve="50+25*cos(t),25*sin(t),0,6.283185307" xmin=-10 xmax=90 ymin=-35 ymax=35 uguale=1 nomi="σ,τ" punti="50,0,pieno,C;65,20,pieno,X;35,-20,pieno,Y;75,0,pieno,σ₁;25,0,pieno,σ₂" segmenti="50,0,65,20;35,-20,50,0" legenda="(\sigma_n-50)^2+\tau_{nt}^2=25^2" titolo="Cerchio di Mohr per 65 MPa, 35 MPa e 20 MPa"}

:::dimostrazione
Sottraendo $p$ dalla tensione normale, la coppia $(\sigma_n-p,\tau_{nt})$ si ottiene da $(d,\tau_{xy})$ mediante una rotazione di $-2\theta$. Il suo quadrato della norma è quindi $d^2+\tau_{xy}^2$. Per raggiungere la tensione maggiore si impone che la coppia sia $(R,0)$. La proiezione normale vale $p+R$ e la tangenziale si annulla. Per la tensione minore si ottiene analogamente $(-R,0)$.
:::

Le normali principali sono anche autovettori del tensore. Infatti $\tau_{nt}=0$ implica $\boldsymbol{\sigma}\mathbf n=\sigma_n\mathbf n$ nel problema piano.
::::

:::osservazione{titolo="Taglio massimo nel piano e nello spazio"}
Il massimo modulo del taglio nel piano $xy$ è $R$, perché l’ordinata massima in valore assoluto sulla circonferenza vale $R$. Il massimo spaziale usa invece le tensioni principali estrema maggiore e minore in tre dimensioni. In stato piano di tensione si include lo zero, associato alla normale fuori piano.

::grafico{curve="50+25*cos(t),25*sin(t),0,6.283185307;37.5+37.5*cos(t),37.5*sin(t),0,6.283185307" xmin=-10 xmax=90 ymin=-50 ymax=50 uguale=1 nomi="σ,τ" punti="0,0,pieno;25,0,pieno;75,0,pieno" legenda="\text{piani tra gli assi }1,2;\text{piani tra gli assi }1,3" titolo="In questo stato piano il taglio massimo spaziale è maggiore di quello nel piano"}

Se le tensioni principali sono $75\,\mathrm{MPa}$ e $25\,\mathrm{MPa}$ nel piano, il massimo taglio nel piano vale $25\,\mathrm{MPa}$. Nello spazio gli estremi sono $75\,\mathrm{MPa}$ e zero, perciò il massimo taglio è $37{,}5\,\mathrm{MPa}$. Si realizza su facce con normale bisettrice fra le direzioni principali corrispondenti ai due estremi. La distinzione è utile quando un criterio di resistenza considera tutte le direzioni.
:::

:::osservazione{titolo="Invarianti sotto rotazione"}
La somma delle tensioni normali sulle due facce ortogonali coincide con la traccia della matrice piana. In una base ruotata, una faccia ha normale $\mathbf n$ e l’altra ha normale $\mathbf m$. Sostituendo nella formula di trasformazione gli angoli $\theta$ e $\theta+90^\circ$, i termini con seno e coseno si cancellano e resta $\sigma_x+\sigma_y=2p$. Anche il determinante $\sigma_x\sigma_y-\tau_{xy}^2$ è invariante e coincide con $\sigma_1\sigma_2$. Per esempio, con $\sigma_x=65\,\mathrm{MPa}$, $\sigma_y=35\,\mathrm{MPa}$ e $\tau_{xy}=20\,\mathrm{MPa}$, la traccia vale $100\,\mathrm{MPa}$ e il determinante vale $1\,875\,\mathrm{MPa^2}$. La coppia principale $(75,25)\,\mathrm{MPa}$ soddisfa entrambi i controlli.
:::

## Elasticità lineare e stato piano di tensione

:::definizione{#hooke-tridimensionale titolo="Legge di Hooke tridimensionale"}
Per un materiale omogeneo e isotropo in campo elastico lineare, il **modulo di Young** $E$ lega tensione e deformazione assiale nella prova monoassiale. Il coefficiente di Poisson $\nu$ è l’opposto del rapporto fra deformazione trasversale e longitudinale nella stessa prova. Il modulo di taglio è $G=\dfrac{E}{2(1+\nu)}$. Per una risposta elastica stabile si assumono $E>0$ e $-1<\nu<\dfrac12$. La sovrapposizione dei contributi normali e la legge a taglio danno, lungo $x$,
$$
\varepsilon_x=\frac{\sigma_x-\nu(\sigma_y+\sigma_z)}{E},
\qquad
\gamma_{xy}=\frac{\tau_{xy}}{G}.
$$
Le relazioni lungo $y,z$ si ottengono permutando gli indici. In una prova monoassiale di trazione con $\nu>0$, il termine trasversale è negativo, quindi il provino si restringe. La sovrapposizione vale finché la risposta rimane lineare e si impiegano le piccole deformazioni.

::struttura{poligoni="-2,-0.8 2,-0.8 2,0.8 -2,0.8" tratteggi="-2.4,-0.5 2.4,-0.5 2.4,0.5 -2.4,0.5 -2.4,-0.5" frecce="2.45,0,3.1,0,σ_x;-2.45,0,-3.1,0;0,0.8,0,0.52;0,-0.8,0,-0.52" titolo="Allungamento e contrazione trasversale di un provino in trazione"}
:::

::::teorema{#hooke-tensione-piana titolo="Legge di Hooke in stato piano di tensione"}
Se $\sigma_z=\tau_{xz}=\tau_{yz}=0$ e valgono le ipotesi di elasticità lineare isotropa, allora
$$
\begin{aligned}
\varepsilon_x&=\frac{\sigma_x-\nu\sigma_y}{E},\\[6pt]
\varepsilon_y&=\frac{\sigma_y-\nu\sigma_x}{E},\\[6pt]
\gamma_{xy}&=\frac{\tau_{xy}}{G},\\[6pt]
\varepsilon_z&=-\frac{\nu(\sigma_x+\sigma_y)}{E}.
\end{aligned}
$$
La condizione di facce libere permette una variazione dello spessore. Dalle deformazioni nel piano si ottengono le tensioni risolvendo le due equazioni normali accoppiate.

:::dimostrazione
Per il legame diretto si annulla $\sigma_z$ nelle tre equazioni normali della legge di Hooke. Per il legame inverso si somma alla prima equazione la seconda moltiplicata per $\nu$. Il termine in $\sigma_y$ si cancella, quindi $\sigma_x=\dfrac{E}{1-\nu^2}(\varepsilon_x+\nu\varepsilon_y)$. Scambiando $x$ con $y$ si ottiene $\sigma_y=\dfrac{E}{1-\nu^2}(\varepsilon_y+\nu\varepsilon_x)$.
:::
::::

:::esempio{titolo="Una lamina tirata in due direzioni"}
Con $E=200\,000\,\mathrm{MPa}$, $\nu=0{,}25$, $\sigma_x=120\,\mathrm{MPa}$ e $\sigma_y=60\,\mathrm{MPa}$, la deformazione lungo $x$ vale $\dfrac{120-0{,}25\cdot60}{200\,000}=525\cdot10^{-6}$. Lungo $y$ vale $150\cdot10^{-6}$. Poiché le tensioni normali nel piano sono entrambe di trazione, lo spessore diminuisce e $\varepsilon_z=-225\cdot10^{-6}$. Il numero $525$ rappresenta microdeformazioni. Ciascuna microdeformazione corrisponde a una deformazione adimensionale pari a $10^{-6}$.
:::

:::osservazione{titolo="Deformazione volumetrica ed energia elastica"}
La somma delle tre equazioni normali di Hooke dà $\operatorname{tr}\boldsymbol{\varepsilon}=\dfrac{1-2\nu}{E}\operatorname{tr}\boldsymbol{\sigma}$. Se si applica una pressione uniforme di intensità $p_{\mathrm h}$, le tre tensioni normali valgono $-p_{\mathrm h}$, perciò la variazione relativa di volume vale $-\dfrac{p_{\mathrm h}}K$, dove $K=\dfrac{E}{3(1-2\nu)}$ è il modulo volumetrico. Per un caricamento elastico lineare da uno stato inizialmente scarico, la densità di energia immagazzinata è $w=\dfrac12\boldsymbol{\sigma}:\boldsymbol{\varepsilon}$. Il simbolo di doppia contrazione indica la somma dei prodotti delle componenti corrispondenti. Per la coppia di componenti tangenziali $xy$ il contributo alla contrazione è $2\tau_{xy}\varepsilon_{xy}=\tau_{xy}\gamma_{xy}$. La pressione uniforme dà $w=\dfrac{p_{\mathrm h}^2}{2K}$. Queste espressioni servono nel capitolo sui metodi energetici, dove la densità si integra sul volume della struttura.
:::

## Stato piano di deformazione

::::teorema{#hooke-deformazione-piana titolo="Legge di Hooke in stato piano di deformazione"}
Se $\varepsilon_z=\gamma_{xz}=\gamma_{yz}=0$ e il materiale è elastico lineare isotropo, allora
$$
\sigma_z=\nu(\sigma_x+\sigma_y),\qquad
\varepsilon_x=\frac{(1-\nu^2)\sigma_x-\nu(1+\nu)\sigma_y}{E}.
$$
La formula lungo $y$ si ottiene scambiando gli indici. Questo modello può rappresentare la regione interna di un corpo prismatico lungo, con geometria e carico uniformi lungo $z$ e vincoli che impediscono la deformazione normale fuori piano. La tensione $\sigma_z$ è la reazione locale all’allungamento o all’accorciamento impedito.

::struttura{poligoni="0,0 2.8,0 2.8,1.8 0,1.8" linee="2.8,0 3.6,0.65 3.6,2.45 0.8,2.45 0,1.8;2.8,1.8 3.6,2.45" frecce="2.8,1.8,4.1,2.86,z" etichette="1.25,0.95,ε_z = 0" titolo="Elementi consecutivi di un solido con deformazione lungo z impedita"}

:::dimostrazione
L’equazione di Hooke per $\varepsilon_z$ contiene $\sigma_z-\nu(\sigma_x+\sigma_y)$ al numeratore. Poiché $\varepsilon_z=0$, quel numeratore si annulla. Sostituendo il valore di $\sigma_z$ nell’equazione per $\varepsilon_x$ si ottengono i due coefficienti indicati. Se sono note le deformazioni, la forma inversa tridimensionale è $\boldsymbol{\sigma}=2G\boldsymbol{\varepsilon}+\lambda\operatorname{tr}(\boldsymbol{\varepsilon})\mathbf I$, dove $\mathbf I$ è l’identità e $\lambda=\dfrac{E\nu}{(1+\nu)(1-2\nu)}$. Con $\varepsilon_z=0$ il termine volumetrico dà $\sigma_z=\lambda(\varepsilon_x+\varepsilon_y)$.
:::
::::

:::attenzione{titolo="La condizione fuori piano cambia il risultato"}
Supponiamo $\sigma_x=100\,\mathrm{MPa}$, $\sigma_y=0$, $E=200\,000\,\mathrm{MPa}$ e $\nu=0{,}25$. In stato piano di tensione si ha $\varepsilon_x=500\cdot10^{-6}$ e lo spessore si contrae. In stato piano di deformazione si ha $\sigma_z=25\,\mathrm{MPa}$ e $\varepsilon_x=468{,}75\cdot10^{-6}$. Le stesse tensioni nel piano portano a deformazioni diverse, perché è diverso il vincolo lungo $z$.
:::

## Deformazioni principali e rosetta estensimetrica

:::definizione{#deformazioni-principali titolo="Deformazione normale in una direzione"}
Per un versore $\mathbf n=(\cos\theta,\sin\theta)$ nel piano, la deformazione normale è $\varepsilon_n=\mathbf n^{\mathsf T}\boldsymbol{\varepsilon}\mathbf n$. Sviluppando il prodotto si trova
$$
\varepsilon_n=
\frac{\varepsilon_x+\varepsilon_y}{2}
+\frac{\varepsilon_x-\varepsilon_y}{2}\cos2\theta
+\frac{\gamma_{xy}}{2}\sin2\theta.
$$
La coppia dei valori principali nel piano si ricava quindi con la costruzione di Mohr applicata al tensore di deformazione. La coordinata tangenziale corrisponde a metà della deformazione angolare ingegneristica. Le deformazioni principali sono gli estremi della variazione relativa di lunghezza al variare della direzione del segmento.
:::

::::teorema{#rosetta titolo="Rosetta rettangolare a 0°, 45° e 90°"}
Una griglia estensimetrica misura una deformazione normale nella direzione della propria griglia. Siano $\varepsilon_0$, $\varepsilon_{45}$ ed $\varepsilon_{90}$ le letture di tre griglie a $0^\circ$, $45^\circ$ e $90^\circ$ in senso antiorario da $x$, riferite allo stesso punto e a un campo di deformazione localmente uniforme. Si ha
$$
\varepsilon_x=\varepsilon_0,\qquad
\varepsilon_y=\varepsilon_{90},\qquad
\gamma_{xy}=2\varepsilon_{45}-\varepsilon_0-\varepsilon_{90}.
$$

::struttura{poligoni="-0.2,-0.2 3.2,-0.2 3.2,2.8 -0.2,2.8" frecce="0,0,2.6,0,0°;0,0,1.75,1.75,45°;0,0,0,2.35,90°" titolo="Orientazioni delle griglie della rosetta rettangolare"}

:::dimostrazione
La proiezione della deformazione a $0^\circ$ coincide con $\varepsilon_x$, mentre quella a $90^\circ$ coincide con $\varepsilon_y$. A $45^\circ$ il coseno del doppio angolo si annulla e il seno vale uno, quindi $\varepsilon_{45}=\dfrac{\varepsilon_x+\varepsilon_y+\gamma_{xy}}2$. Isolando $\gamma_{xy}$ si ricava la terza relazione.
:::
::::

:::esempio{titolo="Dalle tre letture alla tensione tangenziale"}
Per letture $420\cdot10^{-6}$, $300\cdot10^{-6}$ e $-180\cdot10^{-6}$ in ordine crescente di angolo, si ottiene $\gamma_{xy}=(600-420+180)\cdot10^{-6}=360\cdot10^{-6}$. Se il materiale è elastico lineare isotropo e $G=80\,000\,\mathrm{MPa}$, la tensione tangenziale vale $G\gamma_{xy}=28{,}8\,\mathrm{MPa}$. Per ricavare invece le tensioni normali, occorre conoscere anche la condizione fuori piano. Una griglia superficiale misura la variazione di lunghezza lungo la propria direzione e da sola lascia indeterminato il campo completo.
:::

:::attenzione{titolo="Orientazione delle griglie e segno della distorsione"}
Se la griglia obliqua forma $-45^\circ$ invece di $+45^\circ$, il seno del doppio angolo è $-1$. La lettura vale quindi $\varepsilon_{-45}=\dfrac{\varepsilon_x+\varepsilon_y-\gamma_{xy}}2$. Per $\varepsilon_x=200\cdot10^{-6}$, $\varepsilon_y=0$ e $\gamma_{xy}=100\cdot10^{-6}$, le letture a $+45^\circ$ e $-45^\circ$ valgono rispettivamente $150\cdot10^{-6}$ e $50\cdot10^{-6}$. La posizione fisica della griglia determina quale delle due relazioni si applica. Se si usa una convenzione di misura diversa, occorre esprimere gli angoli nello stesso riferimento con cui si è scritto il tensore.
:::

## Dalle tensioni alla verifica di resistenza

:::richiamo{#von-mises titolo="Criterio di von Mises"}
Per un materiale duttile che segue il criterio di von Mises, la verifica di inizio snervamento confronta una tensione equivalente con il limite ricavato dalla prova di trazione monoassiale. In stato piano di tensione l’equivalente è
$$
\sigma_{\mathrm{eq}}=\sqrt{\sigma_x^2-\sigma_x\sigma_y+\sigma_y^2+3\tau_{xy}^2}.
$$
Nel caso di taglio puro con $|\tau_{xy}|=40\,\mathrm{MPa}$ risulta $\sigma_{\mathrm{eq}}=40\sqrt3\,\mathrm{MPa}$. Il capitolo [Criteri di resistenza](/scienza-delle-costruzioni/criteri-resistenza/teoria) sviluppa la formula tridimensionale e il confronto con Tresca e con i criteri per materiali fragili.
:::

:::osservazione{titolo="Una stessa lamina, tre domande diverse"}
Se si conoscono le trazioni e si vuole capire se un campo è in equilibrio, si applicano le equazioni locali e le condizioni al contorno. Se si cerca la tensione su una faccia inclinata, si proietta il tensore con la normale della faccia. Se si parte da una misura di deformazione, si ricostruisce prima il tensore delle deformazioni e si usa il legame costitutivo con le condizioni fuori piano. Le tre operazioni si incontrano nel calcolo delle tensioni di una trave, dove il risultato globale delle sollecitazioni, le tensioni locali nella sezione e la risposta elastica del materiale hanno ruoli distinti.
:::

:::esempio{titolo="Trazione calcolata sulla sezione e su una saldatura"}
Si consideri una lamina con $\sigma_x=60\,\mathrm{MPa}$ e le altre componenti nulle. Un taglio ortogonale a $x$ ha tensione normale di $60\,\mathrm{MPa}$ e tensione tangenziale nulla. Una saldatura inclinata a $45^\circ$ rispetto a $x$ ha una normale che forma un angolo di $-45^\circ$ con lo stesso asse. Con la tangente positiva definita nel capitolo, le proiezioni valgono entrambe $30\,\mathrm{MPa}$. Il tensore nel materiale è lo stesso nei due calcoli. Cambia la superficie sulla quale il tensore determina la trazione. Se il problema chiede la verifica della saldatura, i valori da usare come dati sulla superficie sono le due proiezioni sulla faccia inclinata. Il capitolo sui criteri di resistenza tratta invece la verifica del materiale attraverso le componenti del tensore e le tensioni principali.
:::
