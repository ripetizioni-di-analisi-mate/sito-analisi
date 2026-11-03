---
titolo: Moto delle cariche nei campi elettrico e magnetico
sommario: Come si muove una particella carica in un campo elettrico uniforme e in un campo magnetico uniforme (accelerazione, deflessione parabolica, moto circolare ed elicoidale) e come questi moti si usano nel selettore di velocità, nell'esperimento di Thomson, nello spettrometro di massa, nel ciclotrone e nell'effetto Hall.
---

## Moto in un campo elettrico uniforme

:::richiamo{titolo="Campo elettrico tra due armature"}
Tra due armature piane e parallele, alla distanza $d$ e con differenza di potenziale $\Delta V$, il campo elettrico è uniforme, perpendicolare alle armature, diretto dall'armatura positiva a quella negativa, di modulo $E = \dfrac{\Delta V}{d}$. Una carica $q$ nel campo subisce la forza $\vec{F} = q\,\vec{E}$, e quando passa da un'armatura all'altra il campo compie su di essa il lavoro $W = q\,\Delta V$. Il lavoro si indica con $W$, perché la lettera $L$ indica l'induttanza.
:::

:::richiamo{titolo="Teorema dell'energia cinetica"}
Il lavoro totale delle forze che agiscono su un corpo di massa $m$ è uguale alla variazione della sua energia cinetica $K = \dfrac{1}{2} m v^2$.
:::

::::teorema{#accelerazione-tra-armature titolo="Particella accelerata tra due armature"}
Una particella di massa $m$ e carica $q$ parte da ferma vicino a un'armatura e attraversa la differenza di potenziale $\Delta V$, nel verso in cui il campo elettrico la accelera. Se l'unica forza è quella elettrica, la particella si muove di moto rettilineo uniformemente accelerato, con accelerazione e velocità finale
$$
a = \frac{|q|\,E}{m} = \frac{|q|\,\Delta V}{m\,d} ,
\qquad
v = \sqrt{\frac{2\,|q|\,\Delta V}{m}} .
$$
Le armature con un piccolo foro servono a produrre fasci di particelle con velocità nota, come nel tubo a raggi catodici. Un elettrone accelerato da ferma con $\Delta V = 100\,\mathrm{V}$ raggiunge la velocità
$$
v = \sqrt{\frac{2 \cdot 1{,}60 \cdot 10^{-19} \cdot 100}{9{,}11 \cdot 10^{-31}}}\,\mathrm{m/s} \approx 5{,}9 \cdot 10^6\,\mathrm{m/s} ,
$$
che è circa il $2\,\%$ della velocità della luce.

::grafico{assi=0 uguale=1 linee="0,-1.5 0,1.5;3,-1.5 3,-0.15;3,0.15 3,1.5" vettori="0.6,1.0,2.4,1.0,E;0.6,-1.0,2.4,-1.0,E;0.3,0,1.3,0,F;3.2,0,4.4,0,v" punti="0.3,0,pieno" etichette="-0.45,1.1,+;-0.45,0.1,+;-0.45,-0.9,+;3.2,1.1,−;3.2,-0.9,−;0.15,-0.45,+q" xmin=-0.8 xmax=4.8 ymin=-1.8 ymax=1.8 titolo="Una carica positiva lasciata ferma vicino all'armatura positiva subisce la forza $q\vec{E}$, accelera verso l'armatura negativa ed esce dal foro con velocità $v = \sqrt{\dfrac{2\,|q|\,\Delta V}{m}}$"}

:::dimostrazione
La forza elettrica $q\,\vec{E}$ è costante, perché il campo è uniforme, quindi per il secondo principio della dinamica l'accelerazione è costante e vale $a = \dfrac{|q|\,E}{m}$. La particella parte da ferma e la forza ha la direzione del campo, perciò il moto è rettilineo uniformemente accelerato. Sostituendo $E = \dfrac{\Delta V}{d}$ si ottiene la prima formula.

Per la velocità finale si usa il teorema dell'energia cinetica. Il campo compie il lavoro $W = |q|\,\Delta V$ e l'energia cinetica iniziale è nulla, quindi
$$
|q|\,\Delta V = \frac{1}{2} m v^2
\quad\Longrightarrow\quad
v^2 = \frac{2\,|q|\,\Delta V}{m}
\quad\Longrightarrow\quad
v = \sqrt{\frac{2\,|q|\,\Delta V}{m}} .
$$
:::
::::

:::definizione{#elettronvolt titolo="Elettronvolt"}
L'**elettronvolt** è l'energia che acquista una particella di carica $e$ quando attraversa la differenza di potenziale di $1\,\mathrm{V}$:
$$
1\,\mathrm{eV} = 1{,}60 \cdot 10^{-19}\,\mathrm{C} \cdot 1\,\mathrm{V} = 1{,}60 \cdot 10^{-19}\,\mathrm{J} .
$$
Si usano anche i multipli $1\,\mathrm{keV} = 10^3\,\mathrm{eV}$ e $1\,\mathrm{MeV} = 10^6\,\mathrm{eV}$. Le energie delle particelle sono numeri molto piccoli in joule, e in elettronvolt diventano numeri comodi. Inoltre una particella di carica $e$, accelerata da ferma con $\Delta V$ volt, ha energia cinetica di $\Delta V$ elettronvolt. Per esempio un protone accelerato da $5{,}0\,\mathrm{kV}$ ha $K = 5{,}0\,\mathrm{keV} = 5{,}0 \cdot 10^3 \cdot 1{,}60 \cdot 10^{-19}\,\mathrm{J} = 8{,}0 \cdot 10^{-16}\,\mathrm{J}$, mentre una particella alfa, di carica $2e$, accelerata dalla stessa differenza di potenziale ha $K = 10\,\mathrm{keV}$.
:::

:::osservazione{#peso-trascurabile titolo="Peso trascurabile e velocità piccole rispetto a c"}
In tutto l'argomento il peso delle particelle si trascura. Per un elettrone in un campo di $6{,}0 \cdot 10^3\,\mathrm{V/m}$ la forza elettrica vale $e E = 1{,}60 \cdot 10^{-19} \cdot 6{,}0 \cdot 10^3\,\mathrm{N} = 9{,}6 \cdot 10^{-16}\,\mathrm{N}$, mentre il peso vale $m_e\,g = 9{,}11 \cdot 10^{-31} \cdot 9{,}8\,\mathrm{N} \approx 8{,}9 \cdot 10^{-30}\,\mathrm{N}$, circa $10^{14}$ volte meno. Si suppone anche che le velocità siano piccole rispetto a $c = 3{,}00 \cdot 10^8\,\mathrm{m/s}$, così che valgano le leggi della meccanica classica. Quando $v$ supera qualche decimo di $c$ servono le formule della relatività, per le quali si rimanda all'argomento sulla relatività ristretta: dinamica ed energia.
:::

## Deflessione in un campo elettrico

::::teorema{#deflessione-campo-elettrico titolo="Deflessione in un campo elettrico uniforme"}
Una particella di massa $m$ e carica $q$ entra con velocità $v_0$ tra due armature lunghe $L$, parallelamente alle armature, cioè perpendicolarmente al campo uniforme $\vec{E}$. Si sceglie l'asse $x$ nella direzione di $\vec{v}_0$ e l'asse $y$ nella direzione della forza elettrica. Allora la particella descrive un arco di **parabola**, di equazione
$$
y = \frac{|q|\,E}{2 m v_0^2}\, x^2 ,
$$
e all'uscita dalle armature, per $x = L$, è spostata di $y_L$ e la sua velocità forma con la direzione iniziale un angolo $\theta$, con
$$
y_L = \frac{|q|\,E\,L^2}{2 m v_0^2} ,
\qquad
\tan\theta = \frac{|q|\,E\,L}{m v_0^2} .
$$
È lo stesso moto di un proiettile lanciato orizzontalmente, con la forza elettrica al posto del peso. Un elettrone entra con $v_0 = 2{,}0 \cdot 10^7\,\mathrm{m/s}$ tra armature lunghe $5{,}0\,\mathrm{cm}$, distanti $1{,}5\,\mathrm{cm}$, con $\Delta V = 90\,\mathrm{V}$. Il campo vale $E = \dfrac{90}{0{,}015}\,\mathrm{V/m} = 6{,}0 \cdot 10^3\,\mathrm{V/m}$, e quindi
$$
y_L = \frac{1{,}60 \cdot 10^{-19} \cdot 6{,}0 \cdot 10^3 \cdot (0{,}050)^2}{2 \cdot 9{,}11 \cdot 10^{-31} \cdot (2{,}0 \cdot 10^7)^2}\,\mathrm{m} \approx 3{,}3 \cdot 10^{-3}\,\mathrm{m} ,
\qquad
\tan\theta \approx 0{,}13 ,
$$
cioè $\theta \approx 7{,}5^\circ$. Lo spostamento di $3{,}3\,\mathrm{mm}$ è minore di metà della distanza tra le armature, quindi l'elettrone, entrato a metà strada, esce senza urtarle.

::grafico{assi=0 uguale=1 linee="0,1 4,1;0,-1 4,-1;-1.4,0 0,0;7,-1.4 7,2.2" curve="t,0.0375*t^2,0,4;4+t,0.6+0.3*t,0,3" legenda=0 vettori="0,0,1,0,v₀;1.5,-0.25,1.5,-0.85,E;3,-0.25,3,-0.85;2.2,0.18,2.2,0.85,F" segmenti="0,0,7,0;4,0,4,0.6" punti="0,0,pieno" etichette="0.5,1.15,+;1.5,1.15,+;2.5,1.15,+;3.5,1.15,+;0.5,-1.4,−;1.5,-1.4,−;2.5,-1.4,−;3.5,-1.4,−;4.15,0.25,yₗ;1.9,-1.75,L;7.2,1.6,schermo;-0.6,0.3,e⁻" xmin=-1.6 xmax=8.2 ymin=-2 ymax=2.4 titolo="Un elettrone entra tra le armature con velocità $\vec{v}_0$ perpendicolare a $\vec{E}$: la forza è opposta al campo, la traiettoria è un arco di parabola, e dopo le armature il moto prosegue in linea retta fino allo schermo"}

:::dimostrazione
La forza elettrica ha modulo costante $|q|\,E$ ed è diretta lungo l'asse $y$. Lungo l'asse $x$ non agisce alcuna forza, quindi il moto lungo $x$ è rettilineo uniforme:
$$
x = v_0\, t .
$$
Lungo l'asse $y$ l'accelerazione è costante, $a = \dfrac{|q|\,E}{m}$, e la velocità iniziale è nulla, perciò il moto lungo $y$ è uniformemente accelerato:
$$
y = \frac{1}{2}\, a\, t^2 = \frac{|q|\,E}{2m}\, t^2 ,
\qquad
v_y = a\, t = \frac{|q|\,E}{m}\, t .
$$
Dalla prima equazione si ricava $t = \dfrac{x}{v_0}$. Sostituendo nella seconda si ottiene $y = \dfrac{|q|\,E}{2 m v_0^2}\, x^2$, che è l'equazione di una parabola con vertice nel punto di ingresso.

La particella esce dalle armature all'istante $t_L = \dfrac{L}{v_0}$. Sostituendo $x = L$ nell'equazione della parabola si ottiene $y_L$. In quell'istante la componente della velocità lungo $y$ è $v_y = \dfrac{|q|\,E\,L}{m v_0}$, mentre la componente lungo $x$ è ancora $v_0$, quindi
$$
\tan\theta = \frac{v_y}{v_0} = \frac{|q|\,E\,L}{m v_0^2} .
$$
:::
::::

:::osservazione{#moto-dopo-le-armature titolo="Il moto dopo le armature e lo schermo"}
Fuori dalle armature il campo è nullo, quindi la particella prosegue di moto rettilineo uniforme nella direzione che aveva all'uscita. Su uno schermo posto alla distanza $D$ dalla fine delle armature lo spostamento totale è perciò
$$
Y = y_L + D \tan\theta .
$$
Nell'esempio dell'elettrone, con $D = 20\,\mathrm{cm}$, si ha $Y \approx 3{,}3 \cdot 10^{-3}\,\mathrm{m} + 0{,}20 \cdot 0{,}132\,\mathrm{m} \approx 3{,}0 \cdot 10^{-2}\,\mathrm{m}$. Lo spostamento sullo schermo è proporzionale a $E$, quindi alla tensione tra le armature. Su questo principio funzionavano gli oscilloscopi a raggi catodici, nei quali il punto luminoso sullo schermo seguiva la tensione da misurare.
:::

## Moto in un campo magnetico uniforme

:::richiamo{titolo="Forza di Lorentz"}
Una carica $q$ che si muove con velocità $\vec{v}$ in un campo magnetico $\vec{B}$ subisce la forza $\vec{F} = q\,\vec{v} \times \vec{B}$, di modulo $F = |q|\,v B \sin\varphi$, dove $\varphi$ è l'angolo tra $\vec{v}$ e $\vec{B}$. La forza è perpendicolare a $\vec{v}$ e a $\vec{B}$, con il verso dato dalla regola della mano destra per una carica positiva e il verso opposto per una carica negativa. Il suo lavoro è nullo, quindi se agisce solo la forza di Lorentz il modulo della velocità resta costante. Si rimanda all'argomento sul campo magnetico e la forza di Lorentz.
:::

:::osservazione{#velocita-parallela titolo="Velocità parallela al campo"}
Se la velocità è parallela o antiparallela a $\vec{B}$, l'angolo $\varphi$ vale $0$ oppure $180^\circ$, e $\sin\varphi = 0$. La forza di Lorentz è quindi nulla, e la particella prosegue di moto rettilineo uniforme, come se il campo non ci fosse. Un protone che si muove lungo le linee di un campo uniforme di $0{,}50\,\mathrm{T}$ con $v = 1{,}0 \cdot 10^6\,\mathrm{m/s}$ mantiene questa velocità, in direzione e in modulo.
:::

:::richiamo{titolo="Moto circolare uniforme"}
Un corpo di massa $m$ che percorre una circonferenza di raggio $r$ con velocità di modulo costante $v$ ha accelerazione centripeta di modulo $\dfrac{v^2}{r}$, diretta verso il centro, e periodo $T = \dfrac{2\pi r}{v}$. Se su un corpo agisce una forza di modulo costante, sempre perpendicolare alla velocità e contenuta in un piano, il corpo si muove di moto circolare uniforme in quel piano.
:::

::::teorema{#moto-circolare-campo-magnetico titolo="Moto circolare in un campo magnetico uniforme"}
Una particella di massa $m$ e carica $q$ entra con velocità $\vec{v}$ in un campo magnetico uniforme $\vec{B}$, con $\vec{v}$ perpendicolare a $\vec{B}$, e su di essa agisce solo la forza di Lorentz. Allora la particella si muove di moto circolare uniforme, in un piano perpendicolare a $\vec{B}$, lungo una circonferenza di raggio
$$
r = \frac{m v}{|q|\,B} .
$$
Il raggio è proporzionale alla velocità e alla massa, e inversamente proporzionale alla carica e al campo. Per un elettrone con $v = 1{,}0 \cdot 10^7\,\mathrm{m/s}$ in un campo di $2{,}0 \cdot 10^{-3}\,\mathrm{T}$ si ha
$$
r = \frac{9{,}11 \cdot 10^{-31} \cdot 1{,}0 \cdot 10^7}{1{,}60 \cdot 10^{-19} \cdot 2{,}0 \cdot 10^{-3}}\,\mathrm{m} \approx 2{,}8 \cdot 10^{-2}\,\mathrm{m} .
$$

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" legenda=0 vettori="0,-2,-1.4,-2,v;0,-2,0,-0.9,F;-1.73,1,-1.48,1.43" segmenti="0,0,1.414,1.414" punti="0,-2,pieno;0,0,pieno,C" etichette="0.3,-2.45,+q;0.85,0.5,r;-3.17,-3.17,⊙;-3.17,-1.67,⊙;-3.17,-0.17,⊙;-3.17,1.33,⊙;-3.17,2.53,⊙;-1.67,-0.17,⊙;-1.67,2.53,⊙;-0.17,-3.17,⊙;-0.17,1.33,⊙;-0.17,2.53,⊙;1.33,-3.17,⊙;1.33,-0.17,⊙;1.33,2.53,⊙;2.83,-3.17,⊙;2.83,-1.67,⊙;2.83,-0.17,⊙;2.83,1.33,⊙;2.83,2.53,⊙" xmin=-3.6 xmax=3.6 ymin=-3.5 ymax=3 titolo="Una carica positiva in un campo uniforme uscente dal foglio ($\odot$) percorre una circonferenza di raggio $r = \dfrac{mv}{|q|\,B}$ in verso orario; la forza di Lorentz è sempre diretta verso il centro $C$"}

:::dimostrazione
La forza di Lorentz è perpendicolare a $\vec{B}$, quindi non ha componente lungo la direzione del campo. La velocità iniziale non ha componente lungo $\vec{B}$, perciò questa componente resta nulla e la particella si muove nel piano perpendicolare a $\vec{B}$.

Il lavoro della forza di Lorentz è nullo, quindi il modulo $v$ della velocità resta costante. In ogni istante $\vec{v}$ è perpendicolare a $\vec{B}$, perciò $\sin\varphi = 1$ e la forza ha modulo costante $|q|\,vB$; inoltre la forza è sempre perpendicolare alla velocità. Per il richiamo sul moto circolare uniforme la particella percorre allora una circonferenza, e la forza di Lorentz è la forza centripeta. Per il secondo principio della dinamica
$$
|q|\,v B = m\,\frac{v^2}{r} .
$$
Si dividono entrambi i membri per $v$ e si ricava $r$:
$$
|q|\,B = \frac{m v}{r}
\quad\Longrightarrow\quad
r = \frac{m v}{|q|\,B} .
$$
:::
::::

::::teorema{#periodo-frequenza-ciclotrone titolo="Periodo e frequenza del moto circolare"}
Nelle ipotesi del moto circolare in un campo magnetico uniforme, il periodo e la frequenza del moto sono
$$
T = \frac{2\pi m}{|q|\,B} ,
\qquad
f = \frac{1}{T} = \frac{|q|\,B}{2\pi m} .
$$
La frequenza $f$ si chiama **frequenza di ciclotrone**. Periodo e frequenza dipendono solo dalla particella e dal campo, e *non* dipendono dalla velocità. Una particella più veloce percorre una circonferenza più grande, ma impiega lo stesso tempo a compiere un giro. Su questa proprietà si basa il ciclotrone. Per l'elettrone dell'esempio precedente
$$
T = \frac{2\pi \cdot 9{,}11 \cdot 10^{-31}}{1{,}60 \cdot 10^{-19} \cdot 2{,}0 \cdot 10^{-3}}\,\mathrm{s} \approx 1{,}8 \cdot 10^{-8}\,\mathrm{s} ,
\qquad
f \approx 5{,}6 \cdot 10^7\,\mathrm{Hz} .
$$

:::dimostrazione
Il moto è circolare uniforme, quindi il periodo è il tempo che serve a percorrere la circonferenza, $T = \dfrac{2\pi r}{v}$. Si sostituisce il raggio $r = \dfrac{m v}{|q|\,B}$:
$$
T = \frac{2\pi}{v} \cdot \frac{m v}{|q|\,B} = \frac{2\pi m}{|q|\,B} .
$$
La velocità $v$ compare al numeratore e al denominatore e si semplifica. La frequenza è il reciproco del periodo.
:::
::::

:::osservazione{#verso-di-rotazione titolo="Verso di rotazione"}
Il verso di rotazione si trova applicando la regola della mano destra in un punto della traiettoria, con la condizione che la forza sia diretta verso il centro. Ne segue che, guardando il foglio:

- in un campo **entrante** ($\otimes$) una carica positiva gira in verso antiorario e una carica negativa in verso orario;
- in un campo **uscente** ($\odot$) una carica positiva gira in verso orario e una carica negativa in verso antiorario.

Nella figura del moto circolare la carica positiva, nel punto più basso, si muove verso sinistra. Con il pollice verso sinistra, lungo $\vec{v}$, e l'indice verso chi guarda, lungo $\vec{B}$, il medio punta verso l'alto, cioè verso il centro, quindi la carica percorre la circonferenza in verso orario. Un elettrone nella stessa posizione e con la stessa velocità subirebbe una forza verso il basso, e girerebbe in verso antiorario.
:::

:::esempio{#raggio-ed-energia titolo="Raggio di una particella accelerata"}
Spesso la particella entra nel campo magnetico dopo essere stata accelerata da ferma dalla differenza di potenziale $\Delta V$. La velocità è allora $v = \sqrt{\dfrac{2\,|q|\,\Delta V}{m}}$, e sostituendo nella formula del raggio si ottiene
$$
r = \frac{m}{|q|\,B}\sqrt{\frac{2\,|q|\,\Delta V}{m}} = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} ,
$$
dove nell'ultimo passaggio si sono portati $m$ e $|q|$ sotto la radice come $m^2$ e $q^2$. Un elettrone accelerato da $100\,\mathrm{V}$ in un campo di $1{,}0 \cdot 10^{-3}\,\mathrm{T}$ percorre una circonferenza di raggio
$$
r = \frac{1}{1{,}0 \cdot 10^{-3}}\sqrt{\frac{2 \cdot 9{,}11 \cdot 10^{-31} \cdot 100}{1{,}60 \cdot 10^{-19}}}\,\mathrm{m} \approx 3{,}4 \cdot 10^{-2}\,\mathrm{m} .
$$
:::

## Moto elicoidale

::::teorema{#moto-elicoidale titolo="Moto elicoidale"}
Una particella di massa $m$ e carica $q$ entra in un campo magnetico uniforme $\vec{B}$ con velocità $\vec{v}$ che forma con $\vec{B}$ un angolo $\varphi$ diverso da $0$ e da $180^\circ$, e su di essa agisce solo la forza di Lorentz. Si scompone la velocità nelle componenti parallela e perpendicolare al campo,
$$
v_\parallel = v \cos\varphi ,
\qquad
v_\perp = v \sin\varphi .
$$
Allora la particella descrive un'**elica** con l'asse parallelo a $\vec{B}$, di raggio $r$, con periodo $T$ e passo $p$ dati da
$$
r = \frac{m v_\perp}{|q|\,B} ,
\qquad
T = \frac{2\pi m}{|q|\,B} ,
\qquad
p = v_\parallel\, T = \frac{2\pi m\, v_\parallel}{|q|\,B} .
$$
Il **passo** dell'elica è la distanza percorsa lungo l'asse durante un giro. Per un protone con $v = 2{,}0 \cdot 10^6\,\mathrm{m/s}$ a $60^\circ$ da un campo di $0{,}20\,\mathrm{T}$ si ha $v_\perp = 1{,}73 \cdot 10^6\,\mathrm{m/s}$ e $v_\parallel = 1{,}0 \cdot 10^6\,\mathrm{m/s}$, quindi
$$
r = \frac{1{,}67 \cdot 10^{-27} \cdot 1{,}73 \cdot 10^6}{1{,}60 \cdot 10^{-19} \cdot 0{,}20}\,\mathrm{m} \approx 9{,}0\,\mathrm{cm} ,
\qquad
T \approx 3{,}3 \cdot 10^{-7}\,\mathrm{s} ,
\qquad
p \approx 33\,\mathrm{cm} .
$$

::grafico{assi=0 uguale=1 linee="0.000,1.000 0.129,0.991 0.256,0.966 0.380,0.924 0.500,0.866 0.614,0.793 0.720,0.707 0.818,0.609 0.906,0.500 0.984,0.383 1.051,0.259 1.107,0.131 1.150,0.000 1.182,-0.131 1.201,-0.259 1.209,-0.383 1.206,-0.500 1.193,-0.609 1.170,-0.707 1.139,-0.793 1.100,-0.866 1.055,-0.924 1.006,-0.966 0.954,-0.991 0.900,-1.000 0.846,-0.991 0.794,-0.966 0.745,-0.924 0.700,-0.866 0.661,-0.793 0.630,-0.707 0.607,-0.609 0.594,-0.500 0.591,-0.383 0.599,-0.259 0.618,-0.131 0.650,-0.000 0.693,0.131 0.749,0.259 0.816,0.383 0.894,0.500 0.982,0.609 1.080,0.707 1.186,0.793 1.300,0.866 1.420,0.924 1.544,0.966 1.671,0.991 1.800,1.000 1.929,0.991 2.056,0.966 2.180,0.924 2.300,0.866 2.414,0.793 2.520,0.707 2.618,0.609 2.706,0.500 2.784,0.383 2.851,0.259 2.907,0.131 2.950,0.000 2.982,-0.131 3.001,-0.259 3.009,-0.383 3.006,-0.500 2.993,-0.609 2.970,-0.707 2.939,-0.793 2.900,-0.866 2.855,-0.924 2.806,-0.966 2.754,-0.991 2.700,-1.000 2.646,-0.991 2.594,-0.966 2.545,-0.924 2.500,-0.866 2.461,-0.793 2.430,-0.707 2.407,-0.609 2.394,-0.500 2.391,-0.383 2.399,-0.259 2.418,-0.131 2.450,-0.000 2.493,0.131 2.549,0.259 2.616,0.383 2.694,0.500 2.782,0.609 2.880,0.707 2.986,0.793 3.100,0.866 3.220,0.924 3.344,0.966 3.471,0.991 3.600,1.000 3.729,0.991 3.856,0.966 3.980,0.924 4.100,0.866 4.214,0.793 4.320,0.707 4.418,0.609 4.506,0.500 4.584,0.383 4.651,0.259 4.707,0.131 4.750,0.000 4.782,-0.131 4.801,-0.259 4.809,-0.383 4.806,-0.500 4.793,-0.609 4.770,-0.707 4.739,-0.793 4.700,-0.866 4.655,-0.924 4.606,-0.966 4.554,-0.991 4.500,-1.000 4.446,-0.991 4.394,-0.966 4.345,-0.924 4.300,-0.866 4.261,-0.793 4.230,-0.707 4.207,-0.609 4.194,-0.500 4.191,-0.383 4.199,-0.259 4.218,-0.131 4.250,0.000 4.293,0.131 4.349,0.259 4.416,0.383 4.494,0.500 4.582,0.609 4.680,0.707 4.786,0.793 4.900,0.866 5.020,0.924 5.144,0.966 5.271,0.991 5.400,1.000" segmenti="-0.6,0,6.4,0;0,1.3,1.8,1.3;0.9,0,0.9,-1" vettori="3.4,1.9,5.4,1.9,B" etichette="0.75,1.45,p;1.05,-0.55,r" xmin=-1 xmax=6.6 ymin=-1.6 ymax=2.4 titolo="Con la velocità obliqua rispetto a $\vec{B}$ la particella descrive un'elica con l'asse parallelo al campo, di raggio $r = \dfrac{m v_\perp}{|q|\,B}$ e passo $p = v_\parallel\, T$"}

:::dimostrazione
L'idea è studiare separatamente il moto lungo il campo e il moto nel piano perpendicolare al campo. La velocità è la somma $\vec{v} = \vec{v}_\parallel + \vec{v}_\perp$, quindi la forza di Lorentz è
$$
\vec{F} = q\,\vec{v}_\parallel \times \vec{B} + q\,\vec{v}_\perp \times \vec{B} = q\,\vec{v}_\perp \times \vec{B} ,
$$
perché $\vec{v}_\parallel$ è parallela a $\vec{B}$ e il suo prodotto vettoriale con $\vec{B}$ è nullo.

- La forza è perpendicolare a $\vec{B}$, quindi lungo la direzione del campo l'accelerazione è nulla. Perciò $v_\parallel$ resta costante e il moto lungo l'asse è rettilineo uniforme.
- Il modulo $v$ della velocità resta costante, perché il lavoro della forza di Lorentz è nullo, e anche $v_\parallel$ è costante. Poiché $v_\perp^2 = v^2 - v_\parallel^2$, anche $v_\perp$ è costante. Nel piano perpendicolare al campo il moto è quindi quello di una particella con velocità $v_\perp$ perpendicolare a $\vec{B}$, cioè un moto circolare uniforme di raggio $\dfrac{m v_\perp}{|q|\,B}$ e periodo $\dfrac{2\pi m}{|q|\,B}$.

Un moto circolare uniforme nel piano perpendicolare a $\vec{B}$, unito a un moto rettilineo uniforme lungo $\vec{B}$, è un moto lungo un'elica. In un periodo $T$ la particella avanza lungo l'asse di $v_\parallel\,T$, che è il passo.
:::
::::

:::osservazione{#fasce-van-allen-aurore titolo="Fasce di Van Allen e aurore polari"}
Le particelle cariche che arrivano dal Sole, soprattutto elettroni e protoni, entrano nel campo magnetico terrestre con velocità oblique rispetto alle linee di campo, e quindi si avvolgono a elica attorno a esse. Per un elettrone di $1{,}0\,\mathrm{keV}$, con $v \approx 1{,}9 \cdot 10^7\,\mathrm{m/s}$, in un campo di $5{,}0 \cdot 10^{-5}\,\mathrm{T}$ il raggio è al massimo
$$
r = \frac{m_e v}{e B} = \frac{9{,}11 \cdot 10^{-31} \cdot 1{,}87 \cdot 10^7}{1{,}60 \cdot 10^{-19} \cdot 5{,}0 \cdot 10^{-5}}\,\mathrm{m} \approx 2{,}1\,\mathrm{m} ,
$$
molto piccolo rispetto alle dimensioni della Terra, perciò l'elettrone segue da vicino la linea di campo. Una parte delle particelle resta intrappolata in due regioni a forma di ciambella attorno alla Terra, le **fasce di Van Allen**, dove le particelle si muovono a elica lungo le linee di campo e vengono rimandate indietro vicino ai poli, dove il campo è più intenso. Lungo le linee di campo che scendono verso le regioni polari altre particelle raggiungono l'alta atmosfera, urtano gli atomi di ossigeno e di azoto e li eccitano; gli atomi emettono luce, e si osservano le **aurore polari**.
:::

## Selettore di velocità

::::teorema{#selettore-di-velocita titolo="Selettore di velocità"}
In una regione ci sono un campo elettrico uniforme $\vec{E}$ e un campo magnetico uniforme $\vec{B}$, perpendicolari tra loro (**campi incrociati**). Una particella carica vi entra con velocità $\vec{v}$ perpendicolare a entrambi i campi, nel verso in cui la forza elettrica e la forza di Lorentz sono opposte. Allora la particella attraversa la regione in linea retta, senza essere deviata, se e solo se
$$
v = \frac{E}{B} .
$$
Le particelle più veloci sono deviate nel verso della forza magnetica, quelle più lente nel verso della forza elettrica. Una fenditura all'uscita lascia passare solo le particelle con velocità $\dfrac{E}{B}$, qualunque siano la loro massa e la loro carica. Con armature distanti $1{,}5\,\mathrm{cm}$ e $\Delta V = 300\,\mathrm{V}$ il campo elettrico è $E = \dfrac{300}{0{,}015}\,\mathrm{V/m} = 2{,}0 \cdot 10^4\,\mathrm{V/m}$; con $B = 0{,}050\,\mathrm{T}$ passano le particelle con
$$
v = \frac{2{,}0 \cdot 10^4}{0{,}050}\,\mathrm{m/s} = 4{,}0 \cdot 10^5\,\mathrm{m/s} .
$$

::grafico{assi=0 uguale=1 linee="0,1.2 6,1.2;0,-1.2 6,-1.2;7,-1.5 7,-0.15;7,0.15 7,1.5" curve="t,0.03*t^2,0,6;t,-0.03*t^2,0,6" legenda=0 segmenti="-1.4,0,8,0" vettori="-1.2,0,0,0,v;3,0,3,0.9,qvB;3,0,3,-0.9,qE" punti="3,0,pieno" etichette="0.6,1.4,+;1.8,1.4,+;3,1.4,+;4.2,1.4,+;5.4,1.4,+;0.6,-1.7,−;1.8,-1.7,−;3,-1.7,−;4.2,-1.7,−;5.4,-1.7,−;0.63,0.48,⊗;0.63,-0.82,⊗;1.73,0.48,⊗;1.73,-0.82,⊗;5.23,0.18,⊗;5.23,-0.52,⊗;7.2,1.2,fenditura" xmin=-1.6 xmax=8.4 ymin=-2.1 ymax=1.9 titolo="Nel selettore di velocità la forza elettrica $q\vec{E}$ e la forza di Lorentz $q\vec{v} \times \vec{B}$ sono opposte: prosegue in linea retta fino alla fenditura solo la particella con $v = \dfrac{E}{B}$, mentre le più veloci curvano verso l'alto e le più lente verso il basso"}

:::dimostrazione
I vettori $\vec{v}$, $\vec{E}$ e $\vec{B}$ sono perpendicolari a due a due. Perciò la forza di Lorentz, perpendicolare a $\vec{v}$ e a $\vec{B}$, ha la direzione di $\vec{E}$ e modulo $|q|\,vB$, mentre la forza elettrica ha modulo $|q|\,E$. Per la scelta del verso di $\vec{v}$ le due forze sono opposte. La particella prosegue in linea retta con velocità costante se e solo se la forza totale è nulla, cioè
$$
|q|\,E = |q|\,v B
\quad\Longleftrightarrow\quad
v = \frac{E}{B} .
$$
La carica $|q|$ si semplifica, e la massa non compare, perciò la condizione è la stessa per tutte le particelle. Se $v > \dfrac{E}{B}$, la forza magnetica è maggiore di quella elettrica e la particella curva nel verso della forza magnetica; se $v < \dfrac{E}{B}$ accade il contrario.
:::
::::

:::osservazione{#selettore-segno-carica titolo="Il selettore e il segno della carica"}
Nella figura del selettore, per un protone che si muove verso destra con il campo entrante, la regola della mano destra dà una forza di Lorentz verso l'alto; il campo elettrico è diretto verso il basso, dall'armatura positiva a quella negativa, e quindi la forza elettrica è verso il basso. Per un elettrone con la stessa velocità entrambe le forze cambiano verso, e restano opposte. Perciò anche l'elettrone attraversa il selettore in linea retta se $v = \dfrac{E}{B}$, e il selettore funziona quindi per cariche di entrambi i segni.
:::

## Esperimento di Thomson e rapporto e/m

:::osservazione{#esperimento-thomson titolo="L'esperimento di Thomson"}
Nel 1897 J. J. Thomson studiò i **raggi catodici**, i fasci che escono dal catodo di un tubo di vetro in cui è stato fatto il vuoto quando tra catodo e anodo c'è una differenza di potenziale elevata. Il fascio, accelerato dall'anodo, passava tra due armature e in una regione di campo magnetico perpendicolare al campo elettrico, e colpiva uno schermo fluorescente.

Thomson misurò con questo apparato il rapporto tra la carica e la massa delle particelle del fascio. Trovò lo stesso valore con catodi di metalli diversi e con gas diversi nel tubo, e un valore circa mille volte maggiore del rapporto tra carica e massa dello ione idrogeno. Ne concluse che i raggi catodici sono formati da particelle con carica negativa, molto più leggere degli atomi e presenti in tutti gli atomi. Queste particelle sono gli **elettroni**.
:::

::::teorema{#misura-e-su-m titolo="Misura del rapporto e/m dell'elettrone"}
Un fascio di elettroni attraversa una regione lunga $L$ con campi incrociati $\vec{E}$ e $\vec{B}$. Si regolano i campi in modo che il fascio non sia deviato; poi si spegne il campo magnetico e si misura lo spostamento $y$ del fascio all'uscita dalla regione. Allora
$$
\frac{e}{m_e} = \frac{2\, y\, E}{B^2 L^2} .
$$
Con il selettore si misura la velocità degli elettroni, poi con il solo campo elettrico si misura la deflessione. Con $E = 1{,}0 \cdot 10^4\,\mathrm{V/m}$, $B = 5{,}0 \cdot 10^{-4}\,\mathrm{T}$, $L = 5{,}0\,\mathrm{cm}$ e $y = 5{,}5\,\mathrm{mm}$ si ottiene
$$
\frac{e}{m_e} = \frac{2 \cdot 5{,}5 \cdot 10^{-3} \cdot 1{,}0 \cdot 10^4}{(5{,}0 \cdot 10^{-4})^2 \cdot (0{,}050)^2}\,\mathrm{C/kg} \approx 1{,}76 \cdot 10^{11}\,\mathrm{C/kg} ,
$$
in accordo con il valore $\dfrac{1{,}60 \cdot 10^{-19}}{9{,}11 \cdot 10^{-31}}\,\mathrm{C/kg} \approx 1{,}76 \cdot 10^{11}\,\mathrm{C/kg}$ che si ottiene dalle costanti attuali.

:::dimostrazione
Quando il fascio non è deviato, i campi incrociati funzionano come un selettore di velocità, quindi gli elettroni hanno velocità $v = \dfrac{E}{B}$.

Con il solo campo elettrico gli elettroni entrano perpendicolarmente al campo, e per la deflessione in un campo elettrico uniforme all'uscita sono spostati di
$$
y = \frac{e\,E\,L^2}{2 m_e v^2} .
$$
Si sostituisce $v^2 = \dfrac{E^2}{B^2}$:
$$
y = \frac{e\,E\,L^2}{2 m_e} \cdot \frac{B^2}{E^2} = \frac{e}{m_e} \cdot \frac{B^2 L^2}{2E} .
$$
Si moltiplicano entrambi i membri per $\dfrac{2E}{B^2 L^2}$ e si ottiene la formula di $\dfrac{e}{m_e}$.
:::
::::

:::esempio{#e-su-m-con-il-raggio titolo="Rapporto e/m dal raggio della traiettoria"}
Si può anche spegnere il campo elettrico e lasciare acceso il solo campo magnetico. Gli elettroni, con velocità $v = \dfrac{E}{B}$, percorrono allora una circonferenza di raggio $r = \dfrac{m_e v}{e B}$, e sostituendo la velocità si ha
$$
r = \frac{m_e E}{e B^2}
\quad\Longrightarrow\quad
\frac{e}{m_e} = \frac{E}{B^2 r} .
$$
Con i campi dell'esempio precedente si misura $r \approx 22{,}8\,\mathrm{cm}$, e si ottiene $\dfrac{e}{m_e} = \dfrac{1{,}0 \cdot 10^4}{(5{,}0 \cdot 10^{-4})^2 \cdot 0{,}228}\,\mathrm{C/kg} \approx 1{,}75 \cdot 10^{11}\,\mathrm{C/kg}$. Per il protone il rapporto è $\dfrac{e}{m_p} \approx 9{,}58 \cdot 10^{7}\,\mathrm{C/kg}$, circa $1800$ volte più piccolo, perché $\dfrac{m_p}{m_e} \approx 1833$. La misura della carica $e$, fatta in seguito da Millikan, ha permesso di ricavare dal rapporto la massa dell'elettrone.
:::

## Spettrometro di massa e isotopi

::::teorema{#spettrometro-di-massa titolo="Spettrometro di massa"}
Ioni di massa $m$ e carica $q$, partiti con velocità trascurabile, sono accelerati dalla differenza di potenziale $\Delta V$ ed entrano attraverso una fenditura in un campo magnetico uniforme $\vec{B}$ perpendicolare alla loro velocità. Dopo mezzo giro gli ioni colpiscono una lastra posta nel piano della fenditura, alla distanza $D = 2r$ dalla fenditura, dove
$$
r = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} ,
\qquad
m = \frac{|q|\,B^2 D^2}{8\,\Delta V} .
$$
Lo **spettrometro di massa** misura quindi la massa di uno ione dalla posizione del punto di impatto. A parità di carica gli ioni più pesanti descrivono semicirconferenze più grandi, e ioni di masse diverse colpiscono la lastra in punti diversi.

::grafico{assi=0 uguale=1 curve="1.8-1.8*cos(t),1.8*sin(t),0,3.1416;2.2-2.2*cos(t),2.2*sin(t),0,3.1416" legenda=0 linee="-1.2,0 -0.15,0;0.15,0 5.2,0;-0.8,-1.8 0.8,-1.8;-0.8,-0.9 -0.15,-0.9;0.15,-0.9 0.8,-0.9" vettori="0,-0.75,0,-0.1,v" punti="3.6,0,pieno,m₁;4.4,0,pieno,m₂;0,0,vuoto,O" segmenti="1.8,0,1.8,1.8" etichette="1.9,0.9,r₁;1,-1.45,ΔV;-0.97,0.33,⊙;-0.97,1.63,⊙;0.83,0.43,⊙;2.83,0.43,⊙;1.83,2.53,⊙;4.63,0.43,⊙;4.63,1.63,⊙;3.53,2.53,⊙;4.6,-0.5,lastra" xmin=-1.4 xmax=5.4 ymin=-2.1 ymax=3 titolo="Spettrometro di massa con campo uscente dal foglio ($\odot$): gli ioni positivi, accelerati da $\Delta V$, entrano in $O$ e dopo mezzo giro colpiscono la lastra alla distanza $2r$; lo ione più pesante, $m_2 > m_1$, descrive la semicirconferenza più grande"}

:::dimostrazione
Per la particella accelerata tra due armature, lo ione entra nel campo magnetico con velocità $v = \sqrt{\dfrac{2\,|q|\,\Delta V}{m}}$. Nel campo magnetico la velocità è perpendicolare a $\vec{B}$, quindi per il moto circolare in un campo magnetico uniforme lo ione percorre una circonferenza di raggio $r = \dfrac{m v}{|q|\,B}$. Sostituendo la velocità, come nell'esempio sul raggio di una particella accelerata, si ottiene
$$
r = \frac{1}{B}\sqrt{\frac{2 m\,\Delta V}{|q|}} .
$$
Dopo mezzo giro lo ione si trova nel punto diametralmente opposto alla fenditura, quindi alla distanza $D = 2r$. Per ricavare la massa si eleva al quadrato $r = \dfrac{D}{2}$:
$$
\frac{D^2}{4} = \frac{2 m\,\Delta V}{|q|\,B^2}
\quad\Longrightarrow\quad
m = \frac{|q|\,B^2 D^2}{8\,\Delta V} .
$$
:::
::::

:::definizione{#isotopi titolo="Isotopi"}
Gli **isotopi** di un elemento sono atomi con lo stesso numero di protoni nel nucleo e un numero diverso di neutroni. Hanno le stesse proprietà chimiche, perché hanno lo stesso numero di elettroni, e masse diverse. Il numero di protoni e neutroni si chiama numero di massa $A$, e la massa di un atomo è circa $A$ volte l'**unità di massa atomica**, $1\,\mathrm{u} = 1{,}66 \cdot 10^{-27}\,\mathrm{kg}$. Per esempio il neon in natura contiene soprattutto gli isotopi neon-20 e neon-22, con masse di circa $20\,\mathrm{u}$ e $22\,\mathrm{u}$. Le reazioni chimiche non distinguono gli isotopi, mentre lo spettrometro di massa li separa, perché dipende solo dalla massa e dalla carica.
:::

:::esempio{#separazione-isotopi titolo="Separazione degli isotopi del neon"}
Ioni $^{20}\mathrm{Ne}^+$ e $^{22}\mathrm{Ne}^+$, di carica $e$, sono accelerati da $\Delta V = 1{,}0\,\mathrm{kV}$ ed entrano in un campo di $0{,}20\,\mathrm{T}$. Per il neon-20, con $m = 20 \cdot 1{,}66 \cdot 10^{-27}\,\mathrm{kg} = 3{,}32 \cdot 10^{-26}\,\mathrm{kg}$,
$$
r_{20} = \frac{1}{0{,}20}\sqrt{\frac{2 \cdot 3{,}32 \cdot 10^{-26} \cdot 1{,}0 \cdot 10^3}{1{,}60 \cdot 10^{-19}}}\,\mathrm{m} \approx 10{,}19\,\mathrm{cm} ,
$$
e allo stesso modo $r_{22} \approx 10{,}68\,\mathrm{cm}$. I punti di impatto distano $2\,(r_{22} - r_{20}) \approx 9{,}9\,\mathrm{mm}$, una distanza che sulla lastra si misura senza difficoltà. Il raggio è proporzionale a $\sqrt{m}$, perciò il rapporto dei raggi è $\sqrt{\dfrac{22}{20}} \approx 1{,}05$.
:::

:::osservazione{#spettrometro-con-selettore titolo="Spettrometro con selettore di velocità"}
In molti spettrometri gli ioni attraversano prima un selettore di velocità, e solo quelli con $v = \dfrac{E}{B}$ entrano nella regione con un secondo campo magnetico $B'$. Il raggio $r = \dfrac{m v}{|q|\,B'}$ è allora *direttamente* proporzionale alla massa. Con $v = 2{,}0 \cdot 10^5\,\mathrm{m/s}$ e $B' = 0{,}40\,\mathrm{T}$ gli ioni $^{16}\mathrm{O}^+$ e $^{18}\mathrm{O}^+$ descrivono semicirconferenze di raggi $8{,}30\,\mathrm{cm}$ e $9{,}34\,\mathrm{cm}$, e i punti di impatto distano $2{,}1\,\mathrm{cm}$.
:::

## Ciclotrone

:::definizione{#ciclotrone titolo="Ciclotrone"}
Il **ciclotrone** è un acceleratore di particelle formato da due elettrodi cavi a forma di D, detti *dees*, affacciati lungo il diametro e separati da una stretta fessura, immersi in un campo magnetico uniforme $\vec{B}$ perpendicolare al loro piano. Tra i due elettrodi c'è una differenza di potenziale alternata $\Delta V$. Gli ioni partono da una sorgente vicino al centro.

- Dentro ciascun elettrodo il campo elettrico è nullo, quindi lo ione percorre mezza circonferenza nel solo campo magnetico.
- Ogni volta che attraversa la fessura lo ione è accelerato dal campo elettrico e guadagna l'energia $|q|\,\Delta V$; la mezza circonferenza successiva ha quindi un raggio maggiore.

Per il periodo e la frequenza del moto circolare, il tempo di mezzo giro è lo stesso per ogni raggio. Perciò, se la tensione si inverte con la frequenza di ciclotrone $f = \dfrac{|q|\,B}{2\pi m}$, a ogni passaggio il campo nella fessura ha il verso che accelera lo ione. La traiettoria è una spirale formata da semicirconferenze di raggio crescente. Per protoni in un campo di $1{,}0\,\mathrm{T}$ la tensione deve oscillare con $f = \dfrac{1{,}60 \cdot 10^{-19} \cdot 1{,}0}{2\pi \cdot 1{,}67 \cdot 10^{-27}}\,\mathrm{Hz} \approx 1{,}5 \cdot 10^{7}\,\mathrm{Hz}$, che è una radiofrequenza.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="0.150,2.100 0.315,2.094 0.479,2.074 0.640,2.042 0.799,1.997 0.954,1.940 1.103,1.871 1.247,1.791 1.384,1.699 1.514,1.597 1.635,1.485 1.747,1.364 1.849,1.234 1.941,1.097 2.021,0.953 2.090,0.804 2.147,0.649 2.192,0.490 2.224,0.329 2.244,0.165 2.250,0.000 2.244,-0.165 2.224,-0.329 2.192,-0.490 2.147,-0.649 2.090,-0.804 2.021,-0.953 1.941,-1.097 1.849,-1.234 1.747,-1.364 1.635,-1.485 1.514,-1.597 1.384,-1.699 1.247,-1.791 1.103,-1.871 0.954,-1.940 0.799,-1.997 0.640,-2.042 0.479,-2.074 0.315,-2.094 0.150,-2.100;-0.150,2.100 -0.315,2.094 -0.479,2.074 -0.640,2.042 -0.799,1.997 -0.954,1.940 -1.103,1.871 -1.247,1.791 -1.384,1.699 -1.514,1.597 -1.635,1.485 -1.747,1.364 -1.849,1.234 -1.941,1.097 -2.021,0.953 -2.090,0.804 -2.147,0.649 -2.192,0.490 -2.224,0.329 -2.244,0.165 -2.250,0.000 -2.244,-0.165 -2.224,-0.329 -2.192,-0.490 -2.147,-0.649 -2.090,-0.804 -2.021,-0.953 -1.941,-1.097 -1.849,-1.234 -1.747,-1.364 -1.635,-1.485 -1.514,-1.597 -1.384,-1.699 -1.247,-1.791 -1.103,-1.871 -0.954,-1.940 -0.799,-1.997 -0.640,-2.042 -0.479,-2.074 -0.315,-2.094 -0.150,-2.100" linee="0.150,0.620 0.231,0.615 0.310,0.599 0.387,0.573 0.460,0.537 0.527,0.492 0.588,0.438 0.642,0.377 0.687,0.310 0.723,0.237 0.749,0.160 0.765,0.081 0.770,0.000 0.765,-0.081 0.749,-0.160 0.723,-0.237 0.687,-0.310 0.642,-0.377 0.588,-0.438 0.527,-0.492 0.460,-0.537 0.387,-0.573 0.310,-0.599 0.231,-0.615 0.150,-0.620 -0.150,-0.620 -0.264,-0.612 -0.377,-0.590 -0.486,-0.553 -0.588,-0.503 -0.684,-0.439 -0.770,-0.363 -0.846,-0.277 -0.909,-0.182 -0.960,-0.079 -0.997,0.030 -1.019,0.142 -1.027,0.257 -1.019,0.371 -0.997,0.484 -0.960,0.592 -0.909,0.695 -0.846,0.791 -0.770,0.877 -0.684,0.952 -0.588,1.016 -0.486,1.067 -0.377,1.104 -0.264,1.126 -0.150,1.134 0.150,1.134 0.290,1.124 0.428,1.097 0.561,1.052 0.687,0.990 0.804,0.912 0.909,0.819 1.002,0.713 1.080,0.597 1.142,0.471 1.187,0.338 1.215,0.200 1.224,0.060 1.215,-0.080 1.187,-0.218 1.142,-0.351 1.080,-0.477 1.002,-0.594 0.909,-0.700 0.804,-0.792 0.687,-0.870 0.561,-0.932 0.428,-0.978 0.290,-1.005 0.150,-1.014 -0.150,-1.014 -0.312,-1.004 -0.471,-0.972 -0.625,-0.920 -0.770,-0.848 -0.905,-0.758 -1.027,-0.651 -1.134,-0.529 -1.224,-0.394 -1.296,-0.249 -1.348,-0.095 -1.379,0.064 -1.390,0.226 -1.379,0.388 -1.348,0.547 -1.296,0.700 -1.224,0.846 -1.134,0.981 -1.027,1.103 -0.905,1.210 -0.770,1.300 -0.625,1.371 -0.471,1.424 -0.312,1.455 -0.150,1.466 0.150,1.466 0.331,1.454 0.509,1.419 0.681,1.360 0.843,1.280 0.994,1.179 1.130,1.060 1.250,0.923 1.351,0.773 1.431,0.610 1.489,0.438 1.525,0.260 1.536,0.080 1.525,-0.101 1.489,-0.279 1.431,-0.451 1.351,-0.614 1.250,-0.764 1.130,-0.901 0.994,-1.020 0.843,-1.121 0.681,-1.201 0.509,-1.260 0.331,-1.295 0.150,-1.307 -0.150,-1.307 -0.348,-1.294 -0.543,-1.255 -0.731,-1.191 -0.909,-1.103 -1.075,-0.993 -1.224,-0.862 -1.355,-0.713 -1.465,-0.548 -1.553,-0.369 -1.617,-0.181 -1.656,0.014 -1.669,0.212 -1.656,0.410 -1.617,0.605 -1.553,0.793 -1.465,0.971 -1.355,1.136 -1.224,1.286 -1.075,1.417 -0.909,1.527 -0.731,1.615 -0.543,1.679 -0.348,1.718 -0.150,1.731 0.150,1.731 0.364,1.716 0.575,1.675 0.778,1.606 0.970,1.511 1.149,1.392 1.310,1.250 1.451,1.089 1.571,0.910 1.666,0.718 1.734,0.515 1.776,0.304 1.790,0.090 1.776,-0.124 1.734,-0.334 1.666,-0.538 1.571,-0.730 1.451,-0.908 1.310,-1.070 1.149,-1.211 0.970,-1.330 0.778,-1.425 0.575,-1.494 0.364,-1.536 0.150,-1.550 -0.150,-1.550" vettori="-0.150,-1.550,-1.3,-1.550,v" punti="0,0.62,pieno,S" etichette="1.6,1.8,D₁;-2.0,1.8,D₂;-0.35,2.35,ΔV" xmin=-2.6 xmax=2.6 ymin=-2.4 ymax=2.6 titolo="Ciclotrone visto dall'alto, con $\vec{B}$ perpendicolare al foglio: lo ione parte da $S$, è accelerato ogni volta che attraversa la fessura tra i due elettrodi e percorre semicirconferenze di raggio crescente, tutte nello stesso tempo $\dfrac{T}{2}$"}

:::

::::teorema{#energia-massima-ciclotrone titolo="Energia massima di un ciclotrone"}
In un ciclotrone di raggio $R$, con campo magnetico $B$, uno ione di massa $m$ e carica $q$ esce con velocità ed energia cinetica
$$
v_{\max} = \frac{|q|\,B R}{m} ,
\qquad
K_{\max} = \frac{q^2 B^2 R^2}{2m} ,
$$
che non dipendono dalla tensione $\Delta V$. Se a ogni attraversamento della fessura lo ione guadagna $|q|\,\Delta V$, in un giro guadagna $2\,|q|\,\Delta V$, e il numero di giri necessari per raggiungere $K_{\max}$ è $\dfrac{K_{\max}}{2\,|q|\,\Delta V}$. Per protoni con $B = 1{,}0\,\mathrm{T}$ e $R = 0{,}30\,\mathrm{m}$ si ottiene
$$
v_{\max} = \frac{1{,}60 \cdot 10^{-19} \cdot 1{,}0 \cdot 0{,}30}{1{,}67 \cdot 10^{-27}}\,\mathrm{m/s} \approx 2{,}9 \cdot 10^7\,\mathrm{m/s} ,
\qquad
K_{\max} \approx 6{,}9 \cdot 10^{-13}\,\mathrm{J} \approx 4{,}3\,\mathrm{MeV} .
$$
Con $\Delta V = 20\,\mathrm{kV}$ ogni giro fornisce $40\,\mathrm{keV}$, quindi servono circa $108$ giri.

:::dimostrazione
L'ultima semicirconferenza, prima dell'uscita, ha il raggio $R$ del ciclotrone. Per il moto circolare in un campo magnetico uniforme $R = \dfrac{m v_{\max}}{|q|\,B}$, quindi $v_{\max} = \dfrac{|q|\,B R}{m}$. L'energia cinetica corrispondente è
$$
K_{\max} = \frac{1}{2}\, m\, v_{\max}^2 = \frac{1}{2}\, m \cdot \frac{q^2 B^2 R^2}{m^2} = \frac{q^2 B^2 R^2}{2m} .
$$
In un giro lo ione attraversa la fessura due volte, e per la particella accelerata tra due armature ogni attraversamento gli fornisce l'energia $|q|\,\Delta V$; perciò un giro fornisce $2\,|q|\,\Delta V$.
:::
::::

:::osservazione{#limite-ciclotrone titolo="Limite relativistico del ciclotrone"}
Nell'esempio la velocità finale del protone è circa $0{,}096\,c$, quindi la meccanica classica è adeguata. A energie maggiori la velocità non è più piccola rispetto a $c$, il periodo del moto aumenta con l'energia secondo le leggi della relatività, e lo ione non arriva più alla fessura in fase con la tensione. Per questo un ciclotrone accelera i protoni fino a qualche decina di megaelettronvolt; energie maggiori si ottengono variando la frequenza o il campo durante l'accelerazione. I ciclotroni si usano negli ospedali per produrre isotopi radioattivi e per la terapia dei tumori con fasci di protoni.
:::

## Effetto Hall

:::richiamo{titolo="Corrente e velocità di deriva"}
In un conduttore con $n$ portatori di carica per unità di volume, ciascuno di carica di modulo $e$, che si muovono con velocità di deriva $v_d$, la corrente che attraversa una sezione di area $A$ è $I = n\, e\, v_d\, A$.
:::

::::teorema{#tensione-di-hall titolo="Effetto Hall"}
Una lamina conduttrice di larghezza $w$ e spessore $s$, con $n$ portatori di carica per unità di volume, ciascuno di carica di modulo $e$, è percorsa dalla corrente $I$ lungo la sua lunghezza ed è immersa in un campo magnetico uniforme $\vec{B}$ perpendicolare alla lamina. Allora tra i due bordi della lamina si stabilisce una differenza di potenziale, la **tensione di Hall**,
$$
\Delta V_H = \frac{I B}{n\, e\, s} .
$$
Il fenomeno si chiama **effetto Hall**. La tensione è piccola nei metalli, dove $n$ è molto grande, ed è molto maggiore nei semiconduttori. Una lamina di rame, con $n = 8{,}5 \cdot 10^{28}\,\mathrm{m^{-3}}$ e $s = 0{,}20\,\mathrm{mm}$, percorsa da $10\,\mathrm{A}$ in un campo di $0{,}80\,\mathrm{T}$, ha
$$
\Delta V_H = \frac{10 \cdot 0{,}80}{8{,}5 \cdot 10^{28} \cdot 1{,}60 \cdot 10^{-19} \cdot 2{,}0 \cdot 10^{-4}}\,\mathrm{V} \approx 2{,}9 \cdot 10^{-6}\,\mathrm{V} .
$$
Con un materiale noto, la misura di $\Delta V_H$ dà il valore di $B$. Su questo principio funzionano le **sonde di Hall** per misurare i campi magnetici.

::grafico{assi=0 uguale=1 poligoni="0,-1.1 6.4,-1.1 6.4,1.1 0,1.1" linee="-1.4,0 0,0;6.4,0 7.6,0" vettori="-1.3,0.25,-0.2,0.25,I;3,0,4.2,0,v;3,0,3,0.8,F;5,0.6,5,-0.4,Eₕ" punti="3,0,pieno" etichette="0.6,0.75,+;1.6,0.75,+;2.6,0.75,+;3.6,0.75,+;4.6,0.75,+;5.6,0.75,+;0.6,-0.95,−;1.6,-0.95,−;2.6,-0.95,−;3.6,-0.95,−;4.6,-0.95,−;5.6,-0.95,−;0.33,1.43,⊗;0.33,-1.77,⊗;1.83,1.43,⊗;1.83,-1.77,⊗;3.33,1.43,⊗;3.33,-1.77,⊗;4.83,1.43,⊗;4.83,-1.77,⊗;6.6,-0.6,w" xmin=-1.6 xmax=7.8 ymin=-2.1 ymax=2.1 titolo="Effetto Hall con portatori positivi in un campo entrante nel foglio ($\otimes$): la forza di Lorentz spinge i portatori verso il bordo superiore, che si carica positivamente, e si forma il campo di Hall $\vec{E}_H$ diretto verso il basso"}

:::dimostrazione
I portatori si muovono lungo la lamina con velocità di deriva $v_d$, perpendicolare a $\vec{B}$, quindi subiscono la forza di Lorentz di modulo $e\, v_d B$, diretta lungo la larghezza della lamina. I portatori si accumulano perciò su un bordo, e sul bordo opposto resta una carica di segno contrario. Queste cariche producono tra i bordi un campo elettrico $\vec{E}_H$, il **campo di Hall**, la cui forza sui portatori è opposta alla forza di Lorentz. L'accumulo continua finché le due forze hanno lo stesso modulo, quindi nella situazione di equilibrio
$$
e\, E_H = e\, v_d B
\quad\Longrightarrow\quad
E_H = v_d B .
$$
Il campo di Hall è uniforme sulla larghezza $w$, perciò la tensione tra i bordi è $\Delta V_H = E_H\, w = v_d B w$. La sezione della lamina ha area $A = w s$, quindi dal richiamo sulla velocità di deriva $v_d = \dfrac{I}{n\, e\, w s}$. Sostituendo si ottiene
$$
\Delta V_H = \frac{I}{n\, e\, w s} \cdot B w = \frac{I B}{n\, e\, s} .
$$
:::
::::

:::osservazione{#segno-dei-portatori titolo="Segno dei portatori di carica"}
A parità di corrente, i portatori positivi si muovono nel verso della corrente e quelli negativi nel verso opposto. Nella forza di Lorentz $q\,\vec{v}_d \times \vec{B}$ cambiano segno sia $q$ sia $\vec{v}_d$, quindi la forza ha lo *stesso* verso nei due casi, e i portatori si accumulano sullo stesso bordo. Il segno della carica su quel bordo è il segno dei portatori. Nella figura dell'effetto Hall il bordo superiore è positivo e a potenziale maggiore se i portatori sono positivi; se i portatori sono negativi il bordo superiore è negativo e a potenziale minore. Dal segno della tensione di Hall si ricava quindi il segno dei portatori. Nei metalli come il rame la misura indica portatori negativi, gli elettroni; nei semiconduttori di tipo $p$ indica portatori positivi, detti *lacune*.
:::
