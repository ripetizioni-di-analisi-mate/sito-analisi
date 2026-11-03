---
titolo: Equazioni di Maxwell e onde elettromagnetiche
sommario: Come un campo magnetico variabile genera un campo elettrico e un campo elettrico variabile genera un campo magnetico, quali sono le quattro equazioni di Maxwell, come sono fatte le onde elettromagnetiche e quanta energia, intensità e quantità di moto trasportano, fino alla polarizzazione e allo spettro elettromagnetico.
---

## Campo elettrico indotto

:::richiamo{titolo="Flusso e circuitazione"}
Si divide una superficie in parti piccole di area $\Delta S$ e si associa a ciascuna il vettore $\Delta\vec{S}$, perpendicolare alla parte e di modulo $\Delta S$. Il **flusso** di un campo $\vec{B}$ attraverso la superficie è la somma $\Phi(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{S}$. Si divide poi una linea chiusa orientata in tratti piccoli $\Delta\vec{\ell}$, orientati nel verso di percorrenza. La **circuitazione** di $\vec{B}$ lungo la linea è la somma $\Gamma(\vec{B}) = \sum \vec{B} \cdot \Delta\vec{\ell}$. Le stesse definizioni valgono per il campo elettrico $\vec{E}$. Due casi si incontrano spesso:

- se il campo è uniforme e perpendicolare a una superficie piana di area $S$, il flusso è $B S$;
- se il campo è tangente a una circonferenza di raggio $r$ e ha lo stesso modulo in ogni suo punto, la circuitazione è $2\pi r\,B$.
:::

:::richiamo{titolo="Legge di Faraday-Neumann-Lenz"}
Se il flusso del campo magnetico concatenato con un circuito varia nel tempo, nel circuito si genera la f.e.m. indotta $\mathcal{E} = -\dfrac{d\Phi(\vec{B})}{dt}$. La corrente indotta circola nel verso in cui il campo magnetico da essa prodotto si oppone alla variazione del flusso. Si rimanda all'argomento sull'induzione elettromagnetica.
:::

:::definizione{#campo-elettrico-indotto titolo="Campo elettrico indotto"}
In una spira ferma, posta in un campo magnetico che varia nel tempo, gli elettroni del filo si mettono in moto. La forza di Lorentz $q\,\vec{v} \times \vec{B}$ è nulla su cariche inizialmente ferme, quindi la forza che le mette in moto è una forza elettrica. Il campo elettrico che produce questa forza si chiama **campo elettrico indotto**. Esso esiste in tutto lo spazio in cui il flusso magnetico varia, anche dove non ci sono conduttori, e la spira serve soltanto a rivelarlo con una corrente.

Il lavoro che il campo indotto compie su una carica unitaria lungo un giro completo della spira è la f.e.m. indotta, quindi $\mathcal{E} = \Gamma(\vec{E})$ lungo il filo.
:::

:::teorema{#circuitazione-campo-elettrico titolo="Legge di Faraday-Neumann per il campo elettrico"}
Per ogni linea chiusa orientata $\gamma$, ferma, vale
$$
\Gamma(\vec{E}) = -\frac{d\Phi(\vec{B})}{dt} ,
$$
dove $\Phi(\vec{B})$ è il flusso magnetico attraverso una superficie che ha $\gamma$ come bordo, con il verso di $\Delta\vec{S}$ dato dalla regola della mano destra rispetto al verso di percorrenza di $\gamma$. È una legge sperimentale, che Maxwell estese dalla spira conduttrice a una linea chiusa qualsiasi.

La legge permette di calcolare il campo elettrico indotto quando la situazione è simmetrica. Se un campo magnetico uniforme, perpendicolare a un cerchio di raggio $r = 10\,\mathrm{cm}$, cresce con rapidità $0{,}20\,\mathrm{T/s}$, la circuitazione del campo indotto lungo la circonferenza ha modulo
$$
|\Gamma(\vec{E})| = \pi r^2 \cdot 0{,}20\,\mathrm{T/s} = \pi \cdot (0{,}10\,\mathrm{m})^2 \cdot 0{,}20\,\mathrm{T/s} \approx 6{,}3 \cdot 10^{-3}\,\mathrm{V} .
$$
:::

:::attenzione{#campo-indotto-non-conservativo}
Il campo elettrostatico prodotto da cariche ferme ha circuitazione nulla lungo ogni linea chiusa, e per questo è conservativo e ammette il potenziale elettrico. Il campo elettrico indotto ha invece circuitazione diversa da zero, quindi *non* è conservativo, e per esso il potenziale non è definito. Nel caso precedente un elettrone che percorre una volta la circonferenza riceve dal campo indotto il lavoro $e\,|\Gamma(\vec{E})| = 1{,}60 \cdot 10^{-19}\,\mathrm{C} \cdot 6{,}3 \cdot 10^{-3}\,\mathrm{V} \approx 1{,}0 \cdot 10^{-21}\,\mathrm{J}$, e a ogni giro successivo riceve di nuovo lo stesso lavoro, pur tornando nel punto di partenza.
:::

:::esempio{#campo-indotto-solenoide titolo="Campo elettrico indotto da un solenoide"}
Un solenoide rettilineo molto lungo ha raggio $a$, e al suo interno il campo magnetico è uniforme, parallelo all'asse, e varia con rapidità $\dfrac{dB}{dt}$; all'esterno il campo magnetico è nullo. Per la simmetria del solenoide le linee del campo indotto sono circonferenze coassiali, e su ciascuna di esse $\vec{E}$ è tangente e ha modulo costante. Si applica la legge di Faraday-Neumann a una circonferenza di raggio $r$:

- se $r \leq a$, il flusso è $\pi r^2 B$, quindi $2\pi r\,E = \pi r^2 \left| \dfrac{dB}{dt} \right|$ e $E = \dfrac{r}{2} \left| \dfrac{dB}{dt} \right|$;
- se $r \geq a$, il flusso è $\pi a^2 B$, perché fuori dal solenoide $B = 0$, quindi $E = \dfrac{a^2}{2r} \left| \dfrac{dB}{dt} \right|$.

Con $a = 3{,}0\,\mathrm{cm}$ e $\left| \dfrac{dB}{dt} \right| = 0{,}40\,\mathrm{T/s}$, alla distanza $r = 2{,}0\,\mathrm{cm}$ dall'asse il campo vale $E = 0{,}010\,\mathrm{m} \cdot 0{,}40\,\mathrm{T/s} = 4{,}0 \cdot 10^{-3}\,\mathrm{V/m}$, e alla distanza $r = 6{,}0\,\mathrm{cm}$ vale $E = \dfrac{(0{,}030\,\mathrm{m})^2}{0{,}12\,\mathrm{m}} \cdot 0{,}40\,\mathrm{T/s} = 3{,}0 \cdot 10^{-3}\,\mathrm{V/m}$. Il campo indotto è diverso da zero anche fuori dal solenoide, dove il campo magnetico è nullo. Se $\vec{B}$ esce dal foglio e cresce, per la legge di Lenz le linee di $\vec{E}$ sono percorse in verso orario.

::grafico{assi=0 uguale=1 unicolore=1 poligoni="1.500,0.000 1.449,0.388 1.299,0.750 1.061,1.061 0.750,1.299 0.388,1.449 0.000,1.500 -0.388,1.449 -0.750,1.299 -1.061,1.061 -1.299,0.750 -1.449,0.388 -1.500,0.000 -1.449,-0.388 -1.299,-0.750 -1.061,-1.061 -0.750,-1.299 -0.388,-1.449 0.000,-1.500 0.388,-1.449 0.750,-1.299 1.061,-1.061 1.299,-0.750 1.449,-0.388" curve="cos(t),sin(t),0,6.29;2.5*cos(t),2.5*sin(t),0,6.29" vettori="-0.45,1,0.45,1,E;0.45,-1,-0.45,-1;-0.6,2.5,0.6,2.5,E;0.6,-2.5,-0.6,-2.5;2.5,0.6,2.5,-0.6;-2.5,-0.6,-2.5,0.6" segmenti="0,0,1.061,-1.061" etichette="-0.1,-0.05,⊙;-0.55,0.45,⊙;0.45,0.45,⊙;-0.55,-0.5,⊙;0.45,-0.5,⊙;0.75,-0.45,a" xmin=-3.2 xmax=3.2 ymin=-3 ymax=3 legenda=0 titolo="Sezione del solenoide vista dall'alto: il campo $\vec{B}$ esce dal foglio e cresce, e le linee del campo elettrico indotto sono circonferenze coassiali percorse in verso orario, dentro e fuori dal solenoide"}

:::

## Corrente di spostamento

:::richiamo{titolo="Teorema di Ampère"}
Per correnti costanti, lungo ogni linea chiusa orientata $\gamma$ vale $\Gamma(\vec{B}) = \mu_0\, i_{\text{conc}}$, dove $i_{\text{conc}}$ è la corrente concatenata con $\gamma$, cioè la corrente che attraversa una qualsiasi superficie che ha $\gamma$ come bordo. Si rimanda all'argomento sulle sorgenti del campo magnetico.
:::

:::osservazione{#problema-condensatore titolo="Teorema di Ampère e condensatore che si carica"}
Un condensatore piano si carica attraverso un filo percorso dalla corrente $i$. Si sceglie una circonferenza $\gamma$ attorno al filo e due superfici che hanno $\gamma$ come bordo. La superficie piana $S_1$ è attraversata dal filo, quindi la corrente concatenata è $i$. La superficie $S_2$, a forma di sacchetto, passa invece tra le armature, dove non ci sono cariche in moto, quindi la corrente che la attraversa è nulla. Con le due superfici il teorema di Ampère darebbe due valori diversi della stessa circuitazione $\Gamma(\vec{B})$, perciò nella forma del richiamo esso non si applica a correnti che variano.

Tra le armature c'è però un campo elettrico che cresce mentre il condensatore si carica, e il suo flusso attraverso $S_2$ aumenta. Maxwell completò il teorema di Ampère con un termine che contiene la rapidità di variazione di questo flusso.

::grafico{assi=0 uguale=1 linee="0,0 5,0;6,0 10,0;5,-1.4 5,1.4;6,-1.4 6,1.4" curve="2.5+0.25*cos(t),sin(t),0,6.29" segmenti="2.5,1,3.2,1.7;3.2,1.7,4.2,1.95;4.2,1.95,5.5,1.95;5.5,1.95,5.5,-1.95;5.5,-1.95,4.2,-1.95;4.2,-1.95,3.2,-1.7;3.2,-1.7,2.5,-1" vettori="0.4,0,1.5,0,i;7.6,0,8.7,0,i" etichette="2.0,1.2,γ;1.8,-0.55,S₁;3.6,2.25,S₂;4.4,-1.15,+q;6.2,-1.15,−q" xmin=-0.3 xmax=10.3 ymin=-2.5 ymax=2.6 legenda=0 titolo="Condensatore che si carica: la superficie piana $S_1$ è attraversata dalla corrente $i$, mentre la superficie $S_2$, con lo stesso bordo $\gamma$, passa tra le armature, dove non ci sono cariche in moto"}

:::

:::definizione{#corrente-di-spostamento titolo="Corrente di spostamento"}
La **corrente di spostamento** attraverso una superficie è
$$
i_s = \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} ,
$$
dove $\Phi(\vec{E})$ è il flusso del campo elettrico attraverso la superficie. Si misura in ampere, perché $\varepsilon_0 \Phi(\vec{E})$ si misura in $\mathrm{C^2/(N\cdot m^2)} \cdot \mathrm{N\cdot m^2/C} = \mathrm{C}$, e quindi la sua derivata rispetto al tempo si misura in $\mathrm{C/s} = \mathrm{A}$. A differenza della corrente di conduzione, la corrente di spostamento *non* corrisponde a un moto di cariche, perché è dovuta soltanto al campo elettrico che varia. Se il campo uniforme tra due armature di area $S = 0{,}025\,\mathrm{m^2}$ cresce con rapidità $\dfrac{dE}{dt} = 2{,}0 \cdot 10^{12}\,\mathrm{V/(m\cdot s)}$, il flusso è $E S$ e la corrente di spostamento è
$$
i_s = \varepsilon_0 S \frac{dE}{dt} = 8{,}85 \cdot 10^{-12} \cdot 0{,}025 \cdot 2{,}0 \cdot 10^{12}\,\mathrm{A} \approx 0{,}44\,\mathrm{A} .
$$
:::

:::esempio{#corrente-spostamento-condensatore titolo="Corrente di spostamento in un condensatore piano"}
Un condensatore piano nel vuoto ha armature di area $S$ e si carica con la corrente $i = \dfrac{dq}{dt}$, dove $q$ è la carica dell'armatura positiva. Trascurando gli effetti di bordo, tra le armature il campo è uniforme e vale $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{q}{\varepsilon_0 S}$. Il flusso attraverso una superficie parallela alle armature e compresa tra esse è perciò
$$
\Phi(\vec{E}) = E S = \frac{q}{\varepsilon_0} ,
\qquad \text{quindi} \qquad
i_s = \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} = \frac{dq}{dt} = i .
$$
La corrente di spostamento tra le armature è uguale alla corrente nei fili, e prosegue la corrente di conduzione dove questa si interrompe. Con $i = 0{,}50\,\mathrm{A}$ e $S = 0{,}010\,\mathrm{m^2}$ il campo tra le armature cresce con rapidità $\dfrac{dE}{dt} = \dfrac{i}{\varepsilon_0 S} = \dfrac{0{,}50}{8{,}85 \cdot 10^{-12} \cdot 0{,}010}\,\mathrm{V/(m\cdot s)} \approx 5{,}6 \cdot 10^{12}\,\mathrm{V/(m\cdot s)}$.
:::

:::teorema{#legge-ampere-maxwell titolo="Legge di Ampère-Maxwell"}
Per ogni linea chiusa orientata $\gamma$ e per ogni superficie che ha $\gamma$ come bordo, orientata con la regola della mano destra, vale
$$
\Gamma(\vec{B}) = \mu_0 \left( i_{\text{conc}} + i_s \right) = \mu_0\, i_{\text{conc}} + \mu_0 \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} ,
$$
dove $i_{\text{conc}}$ è la corrente di conduzione che attraversa la superficie e $\Phi(\vec{E})$ è il flusso del campo elettrico attraverso la stessa superficie. È un postulato di Maxwell, confermato dalla scoperta sperimentale delle onde elettromagnetiche.

La legge afferma che il campo magnetico è generato dalle correnti e anche dai campi elettrici che variano nel tempo. Con correnti costanti il flusso $\Phi(\vec{E})$ non varia e si ritrova il teorema di Ampère. Nel condensatore dell'esempio precedente, con $i = 0{,}50\,\mathrm{A}$, la circuitazione lungo $\gamma$ vale $\mu_0 i = 4\pi \cdot 10^{-7} \cdot 0{,}50\,\mathrm{T\cdot m} \approx 6{,}3 \cdot 10^{-7}\,\mathrm{T\cdot m}$ sia con la superficie $S_1$, attraversata dalla corrente di conduzione, sia con la superficie $S_2$, attraversata dalla corrente di spostamento.
:::

:::esempio{#campo-magnetico-condensatore titolo="Campo magnetico tra le armature di un condensatore"}
Un condensatore piano con armature circolari di raggio $R$ si carica con la corrente $i$. Tra le armature il campo elettrico è uniforme, e la rapidità con cui cresce si ricava dall'esempio precedente con $S = \pi R^2$, cioè $\dfrac{dE}{dt} = \dfrac{i}{\varepsilon_0 \pi R^2}$. Per simmetria le linee di $\vec{B}$ sono circonferenze coassiali con le armature. Si applica la legge di Ampère-Maxwell a una circonferenza di raggio $r$ parallela alle armature e compresa tra esse; il cerchio che essa delimita non è attraversato da correnti di conduzione.

- Se $r \leq R$, il flusso è $\Phi(\vec{E}) = E\,\pi r^2$, quindi $2\pi r\,B = \mu_0 \varepsilon_0\,\pi r^2 \dfrac{i}{\varepsilon_0 \pi R^2}$ e $B = \dfrac{\mu_0\, i\, r}{2\pi R^2}$.
- Se $r \geq R$, il campo elettrico fuori dalle armature è nullo, quindi $\Phi(\vec{E}) = E\,\pi R^2$ e $B = \dfrac{\mu_0\, i}{2\pi r}$, come per un filo rettilineo.

Con $R = 4{,}0\,\mathrm{cm}$ e $i = 1{,}0\,\mathrm{A}$ il campo sul bordo delle armature vale $B = \dfrac{4\pi \cdot 10^{-7} \cdot 1{,}0}{2\pi \cdot 0{,}040}\,\mathrm{T} = 5{,}0 \cdot 10^{-6}\,\mathrm{T}$.

::grafico{f="min(1.25*x,20/x)" punti="4,5,pieno" segmenti="4,0,4,5" xmin=0 xmax=12 ymin=0 ymax=6 nomi="r,B" legenda=0 titolo="Campo magnetico in $\mu\mathrm{T}$ in funzione della distanza $r$ dall'asse in $\mathrm{cm}$, per $R = 4{,}0\,\mathrm{cm}$ e $i = 1{,}0\,\mathrm{A}$: cresce in modo lineare fino al bordo delle armature, poi diminuisce come $\dfrac{1}{r}$"}

:::

## Equazioni di Maxwell

:::teorema{#equazioni-di-maxwell titolo="Equazioni di Maxwell"}
Nel vuoto, per ogni superficie chiusa e per ogni linea chiusa orientata, il campo elettrico e il campo magnetico soddisfano le quattro equazioni
$$
\begin{cases}
\Phi(\vec{E}) = \dfrac{Q}{\varepsilon_0} & \text{(superficie chiusa)} \\[10pt]
\Phi(\vec{B}) = 0 & \text{(superficie chiusa)} \\[10pt]
\Gamma(\vec{E}) = -\dfrac{d\Phi(\vec{B})}{dt} & \text{(linea chiusa)} \\[10pt]
\Gamma(\vec{B}) = \mu_0 \left( i_{\text{conc}} + \varepsilon_0 \dfrac{d\Phi(\vec{E})}{dt} \right) & \text{(linea chiusa)}
\end{cases}
$$
dove $Q$ è la carica contenuta nella superficie chiusa; nelle ultime due equazioni i flussi sono calcolati attraverso una superficie che ha la linea come bordo. Sono postulati, e riuniscono il teorema di Gauss per il campo elettrico, il teorema di Gauss per il campo magnetico, la legge di Faraday-Neumann e la legge di Ampère-Maxwell.

Insieme alla forza di Lorentz $\vec{F} = q\vec{E} + q\,\vec{v} \times \vec{B}$, che descrive l'azione dei campi sulle cariche, le equazioni di Maxwell descrivono tutti i fenomeni elettrici e magnetici della fisica classica. Per esempio, per la prima equazione una carica di $2{,}0\,\mathrm{nC}$ racchiusa in una superficie chiusa produce attraverso di essa il flusso $\Phi(\vec{E}) = \dfrac{2{,}0 \cdot 10^{-9}}{8{,}85 \cdot 10^{-12}}\,\mathrm{V\cdot m} \approx 226\,\mathrm{V\cdot m}$, qualunque sia la forma della superficie.
:::

:::osservazione{#significato-equazioni-maxwell titolo="Significato delle quattro equazioni"}
- Il teorema di Gauss per il campo elettrico afferma che le cariche elettriche sono le sorgenti del campo elettrico, quindi le linee di $\vec{E}$ partono dalle cariche positive e arrivano alle cariche negative.
- Il teorema di Gauss per il campo magnetico afferma che il flusso di $\vec{B}$ attraverso una superficie chiusa è sempre nullo, quindi non esistono poli magnetici isolati e le linee di $\vec{B}$ sono chiuse.
- La legge di Faraday-Neumann afferma che un campo magnetico variabile genera un campo elettrico, con linee chiuse e circuitazione diversa da zero.
- La legge di Ampère-Maxwell afferma che il campo magnetico è generato dalle correnti e dai campi elettrici variabili.

Quando i campi non variano nel tempo, le derivate dei flussi sono nulle e le equazioni per $\vec{E}$ si separano da quelle per $\vec{B}$; si ritrovano allora l'elettrostatica e la magnetostatica.
:::

:::osservazione{#campi-che-si-generano titolo="Campi che si generano a vicenda"}
In una regione senza cariche e senza correnti si ha $Q = 0$ e $i_{\text{conc}} = 0$, e le ultime due equazioni diventano
$$
\Gamma(\vec{E}) = -\frac{d\Phi(\vec{B})}{dt} ,
\qquad
\Gamma(\vec{B}) = \mu_0 \varepsilon_0 \frac{d\Phi(\vec{E})}{dt} .
$$
Un campo magnetico variabile genera un campo elettrico variabile, che a sua volta genera un campo magnetico variabile. I due campi possono quindi mantenersi a vicenda anche lontano dalle cariche che li hanno prodotti, e propagarsi nello spazio. Da questa proprietà Maxwell dedusse l'esistenza delle **onde elettromagnetiche**.
:::

## Onde elettromagnetiche

:::osservazione{#produzione-onde titolo="Come si producono le onde elettromagnetiche"}
Una carica ferma produce soltanto un campo elettrostatico, e una carica in moto rettilineo uniforme produce anche un campo magnetico che si sposta con essa. Una carica **accelerata** emette invece un'onda elettromagnetica, che si allontana dalla carica. In un'antenna gli elettroni oscillano lungo un conduttore con la frequenza $f$ della corrente alternata prodotta da un circuito oscillante, e l'antenna emette un'onda della stessa frequenza; per il circuito $LC$ si rimanda all'argomento sulla corrente alternata e il trasformatore.

Le onde previste da Maxwell furono prodotte e rivelate da Hertz tra il 1886 e il 1888. Una scarica oscillante tra due conduttori emetteva l'onda, e a qualche metro di distanza una scintilla scoccava nell'interruzione di un anello metallico, che faceva da ricevitore. Hertz misurò la lunghezza d'onda e la frequenza delle onde prodotte, e ne ricavò una velocità di propagazione vicina alla velocità della luce.
:::

:::definizione{#onda-elettromagnetica titolo="Onda elettromagnetica"}
Un'**onda elettromagnetica** è la propagazione nello spazio di un campo elettrico e di un campo magnetico variabili, collegati dalle equazioni di Maxwell. Lontano dalla sorgente l'onda ha queste proprietà:

- in ogni punto $\vec{E}$ e $\vec{B}$ sono perpendicolari tra loro e perpendicolari alla direzione di propagazione, perciò l'onda è **trasversale**;
- il prodotto vettoriale $\vec{E} \times \vec{B}$ ha il verso in cui l'onda si propaga;
- i due campi oscillano in fase, cioè si annullano e raggiungono il valore massimo negli stessi istanti;
- l'onda si propaga anche nel vuoto, senza un mezzo materiale.

La luce della Luna, che dista dalla Terra circa $3{,}84 \cdot 10^{8}\,\mathrm{m}$, attraversa lo spazio vuoto e arriva dopo $\dfrac{3{,}84 \cdot 10^{8}}{3{,}00 \cdot 10^{8}}\,\mathrm{s} = 1{,}28\,\mathrm{s}$.

::grafico{assi=0 uguale=1 linee="0,0 10.2,0;0,0 0,2.2;0,0 -1.1,-1.1" curve="t,1.5*sin(t),0,9.42;t-0.6*sin(t),-0.6*sin(t),0,9.42" vettori="1.571,0,1.571,1.5,E;1.571,0,0.971,-0.6,B;8.6,-1.5,10.1,-1.5,c" etichette="10.4,-0.05,x;0.15,2.35,y;-1.4,-1.3,z" xmin=-1.7 xmax=10.8 ymin=-2 ymax=2.6 legenda=0 titolo="Onda elettromagnetica che si propaga lungo l'asse $x$: il campo elettrico oscilla lungo $y$, il campo magnetico lungo $z$, in fase, e $\vec{E} \times \vec{B}$ ha il verso di propagazione"}

:::

:::teorema{#velocita-della-luce titolo="Velocità delle onde elettromagnetiche"}
Dalle equazioni di Maxwell segue che nel vuoto le onde elettromagnetiche si propagano con velocità
$$
c = \frac{1}{\sqrt{\varepsilon_0 \mu_0}} .
$$
La deduzione richiede strumenti matematici che vanno oltre il liceo, e qui si riporta solo il risultato. Il prodotto delle due costanti è
$$
\varepsilon_0 \mu_0 = 8{,}85 \cdot 10^{-12} \cdot 4\pi \cdot 10^{-7}\,\mathrm{s^2/m^2} \approx 1{,}112 \cdot 10^{-17}\,\mathrm{s^2/m^2} ,
$$
quindi
$$
c = \frac{1}{\sqrt{1{,}112 \cdot 10^{-17}}}\,\mathrm{m/s} = \frac{1}{3{,}335 \cdot 10^{-9}}\,\mathrm{m/s} \approx 3{,}00 \cdot 10^{8}\,\mathrm{m/s} .
$$
Il valore coincide con la velocità della luce misurata, e da questa coincidenza Maxwell concluse che la luce è un'onda elettromagnetica. La velocità $c$ non dipende dalla frequenza né dall'ampiezza dell'onda.
:::

:::teorema{#relazione-e-cb titolo="Relazione tra i campi di un'onda"}
In un'onda elettromagnetica che si propaga nel vuoto, in ogni punto e in ogni istante i moduli dei due campi soddisfano
$$
E = c B .
$$
Anche questa relazione segue dalle equazioni di Maxwell. Serve a ricavare il campo magnetico di un'onda quando è noto il campo elettrico. A un campo elettrico di $600\,\mathrm{V/m}$ corrisponde il campo magnetico $B = \dfrac{600}{3{,}00 \cdot 10^{8}}\,\mathrm{T} = 2{,}0 \cdot 10^{-6}\,\mathrm{T}$. Perciò su una carica che si muove con velocità $v \ll c$ la forza magnetica dell'onda, di modulo al più $q v B = q E \dfrac{v}{c}$, è molto più piccola della forza elettrica $q E$.
:::

## Onde piane sinusoidali

:::definizione{#onda-piana-sinusoidale titolo="Onda piana sinusoidale"}
Un'onda si dice **piana** se in ogni istante i campi sono uguali in tutti i punti di ciascun piano perpendicolare alla direzione di propagazione. Lontano da una sorgente piccola l'onda è, con buona approssimazione, piana. Un'onda piana che si propaga nel verso positivo dell'asse $x$ è **sinusoidale** se i campi sono
$$
E(x,t) = E_0 \sin(kx - \omega t) ,
\qquad
B(x,t) = B_0 \sin(kx - \omega t) ,
$$
con $B_0 = \dfrac{E_0}{c}$. Le costanti positive che compaiono nelle formule hanno questi nomi:

- $E_0$ e $B_0$ sono le **ampiezze** dei due campi;
- $k = \dfrac{2\pi}{\lambda}$ è il **numero d'onda**, dove la **lunghezza d'onda** $\lambda$ è la distanza tra due creste consecutive in un istante fissato;
- $\omega = \dfrac{2\pi}{T} = 2\pi f$ è la **pulsazione**, dove il **periodo** $T$ è il tempo di un'oscillazione completa in un punto fissato e $f = \dfrac{1}{T}$ è la **frequenza**.

Il numero d'onda si misura in $\mathrm{rad/m}$ e la pulsazione in $\mathrm{rad/s}$. Nell'istante $t = 0$ il campo elettrico è $E_0 \sin(kx)$, che si ripete ogni volta che $x$ aumenta di $\lambda$, perché $k\lambda = 2\pi$.

::grafico{f="2*sin(pi*x/4)" segmenti="2,2.5,10,2.5;2,0,2,2;10,0,10,2" punti="2,2,pieno;10,2,pieno" etichette="5.7,2.75,λ;2.3,1.0,E₀" xmin=0 xmax=18 ymin=-3 ymax=3 nomi="x,E" titolo="Campo elettrico di un'onda sinusoidale nell'istante $t = 0$: due creste consecutive distano una lunghezza d'onda $\lambda$, e l'altezza di una cresta è l'ampiezza $E_0$"}

:::

::::teorema{#relazione-lambda-f titolo="Relazione tra lunghezza d'onda e frequenza"}
In un'onda elettromagnetica sinusoidale nel vuoto valgono
$$
c = \lambda f = \frac{\omega}{k} .
$$
In un periodo l'onda avanza quindi di una lunghezza d'onda. Note la frequenza o la lunghezza d'onda, la relazione dà l'altra grandezza. Le onde del Wi-Fi, con $f = 2{,}4\,\mathrm{GHz}$, hanno lunghezza d'onda $\lambda = \dfrac{c}{f} = \dfrac{3{,}00 \cdot 10^{8}}{2{,}4 \cdot 10^{9}}\,\mathrm{m} = 0{,}125\,\mathrm{m}$.

:::dimostrazione
L'idea è riconoscere nella formula dell'onda un profilo che trasla. Raccogliendo $k$ nell'argomento del seno si ha
$$
E(x,t) = E_0 \sin\left( k \left( x - \frac{\omega}{k}\, t \right) \right) .
$$
Nell'istante $t$ il campo nel punto $x$ è uguale al campo che nell'istante $0$ c'era nel punto $x - \dfrac{\omega}{k}\, t$. Il profilo del campo trasla quindi senza deformarsi, e nel tempo $t$ percorre la distanza $\dfrac{\omega}{k}\, t$; perciò la sua velocità è $\dfrac{\omega}{k}$. Questa velocità è la velocità $c$ dell'onda, quindi $c = \dfrac{\omega}{k}$. Sostituendo $\omega = \dfrac{2\pi}{T}$ e $k = \dfrac{2\pi}{\lambda}$ si ottiene
$$
c = \frac{2\pi}{T} \cdot \frac{\lambda}{2\pi} = \frac{\lambda}{T} = \lambda f .
$$
:::
::::

:::esempio{titolo="Lettura dell'equazione di un'onda"}
Il campo elettrico di un'onda è $E(x,t) = 80 \sin\left( 1{,}0 \cdot 10^{7}\,x - 3{,}0 \cdot 10^{15}\,t \right)$, con $E$ in $\mathrm{V/m}$, $x$ in metri e $t$ in secondi. Dal confronto con la formula dell'onda sinusoidale si legge $E_0 = 80\,\mathrm{V/m}$, $k = 1{,}0 \cdot 10^{7}\,\mathrm{rad/m}$ e $\omega = 3{,}0 \cdot 10^{15}\,\mathrm{rad/s}$. Quindi
$$
\lambda = \frac{2\pi}{k} \approx 6{,}3 \cdot 10^{-7}\,\mathrm{m} ,
\qquad
f = \frac{\omega}{2\pi} \approx 4{,}8 \cdot 10^{14}\,\mathrm{Hz} ,
\qquad
B_0 = \frac{E_0}{c} \approx 2{,}7 \cdot 10^{-7}\,\mathrm{T} .
$$
Il rapporto $\dfrac{\omega}{k} = 3{,}0 \cdot 10^{8}\,\mathrm{m/s}$ è uguale a $c$, come deve essere per un'onda nel vuoto. La lunghezza d'onda di circa $630\,\mathrm{nm}$ appartiene alla luce visibile.
:::

## Energia e intensità

:::richiamo{titolo="Densità di energia dei campi"}
Nel vuoto il campo elettrico ha densità di energia $u_E = \dfrac{1}{2} \varepsilon_0 E^2$, come si ricava per il condensatore piano, e il campo magnetico ha densità di energia $u_B = \dfrac{B^2}{2\mu_0}$, come si ricava per il solenoide nell'argomento su autoinduzione, circuiti RL ed energia magnetica.
:::

::::teorema{#densita-energia-onda titolo="Densità di energia di un'onda"}
In un'onda elettromagnetica nel vuoto la densità di energia elettrica e la densità di energia magnetica sono uguali in ogni punto e in ogni istante, e la densità di energia totale è
$$
u = u_E + u_B = \varepsilon_0 E^2 .
$$
Metà dell'energia dell'onda è quindi associata al campo magnetico. In un'onda sinusoidale $E^2$ oscilla, e il valor medio di $\sin^2$ su un periodo è $\dfrac{1}{2}$, come nelle correnti alternate. Il valor medio della densità di energia è perciò
$$
\bar{u} = \frac{1}{2} \varepsilon_0 E_0^2 = \varepsilon_0 E_{\text{eff}}^2 ,
\qquad \text{con} \qquad
E_{\text{eff}} = \frac{E_0}{\sqrt{2}} ,
$$
dove $E_{\text{eff}}$ è il **valore efficace** del campo elettrico. Con $E_{\text{eff}} = 50\,\mathrm{V/m}$ si ha $\bar{u} = 8{,}85 \cdot 10^{-12} \cdot 50^2\,\mathrm{J/m^3} \approx 2{,}2 \cdot 10^{-8}\,\mathrm{J/m^3}$.

:::dimostrazione
Per la relazione tra i campi di un'onda $B = \dfrac{E}{c}$, e per la velocità delle onde elettromagnetiche $c^2 = \dfrac{1}{\varepsilon_0 \mu_0}$. Sostituendo nella densità di energia magnetica si ottiene
$$
u_B = \frac{B^2}{2\mu_0} = \frac{E^2}{2\mu_0 c^2} = \frac{\varepsilon_0 \mu_0 E^2}{2\mu_0} = \frac{1}{2} \varepsilon_0 E^2 = u_E .
$$
La densità totale è quindi $u = 2 u_E = \varepsilon_0 E^2$.
:::
::::

:::definizione{#intensita-onda titolo="Intensità di un'onda"}
L'**intensità** $I$ di un'onda è l'energia media che in un secondo attraversa una superficie di area $1\,\mathrm{m^2}$ perpendicolare alla direzione di propagazione. Se l'onda trasporta la potenza media $P$ attraverso una superficie perpendicolare di area $S$, distribuita in modo uniforme, l'intensità è
$$
I = \frac{P}{S} ,
$$
e si misura in $\mathrm{W/m^2}$. Poiché la lettera $I$ indica l'intensità, in tutto l'argomento le correnti si indicano con la lettera minuscola $i$. Un puntatore laser che emette $1{,}0\,\mathrm{mW}$ su una sezione di $1{,}0\,\mathrm{mm^2}$ produce l'intensità $I = \dfrac{1{,}0 \cdot 10^{-3}\,\mathrm{W}}{1{,}0 \cdot 10^{-6}\,\mathrm{m^2}} = 1{,}0 \cdot 10^{3}\,\mathrm{W/m^2}$.
:::

::::teorema{#intensita-campo-efficace titolo="Intensità e campo elettrico"}
L'intensità di un'onda elettromagnetica sinusoidale nel vuoto è
$$
I = c\,\bar{u} = c\,\varepsilon_0 E_{\text{eff}}^2 = \frac{1}{2}\, c\,\varepsilon_0 E_0^2 .
$$
L'intensità è proporzionale al quadrato del campo, quindi raddoppiando l'ampiezza l'intensità diventa quattro volte più grande. Nota l'intensità, si ricava il campo efficace $E_{\text{eff}} = \sqrt{\dfrac{I}{c\,\varepsilon_0}}$. Per il laser della definizione precedente
$$
E_{\text{eff}} = \sqrt{\frac{1{,}0 \cdot 10^{3}}{3{,}00 \cdot 10^{8} \cdot 8{,}85 \cdot 10^{-12}}}\,\mathrm{V/m} \approx 6{,}1 \cdot 10^{2}\,\mathrm{V/m} .
$$

::grafico{assi=0 uguale=1 linee="1,0 5,0;1,2 5,2" curve="5+0.35*cos(t),1+sin(t),0,6.29;1+0.35*cos(t),1+sin(t),-1.571,1.571" segmenti="1,-0.4,5,-0.4" vettori="5.5,1,7.3,1,c" etichette="2.7,-0.8,c Δt;5.45,2.2,S" xmin=0.2 xmax=7.8 ymin=-1.2 ymax=2.6 legenda=0 titolo="Nel tempo $\Delta t$ attraversa la superficie $S$ l'energia contenuta nel cilindro di base $S$ e altezza $c\,\Delta t$, cioè $\bar{u}\,S\,c\,\Delta t$"}

:::dimostrazione
L'onda avanza della distanza $c\,\Delta t$ nel tempo $\Delta t$. Perciò in questo tempo attraversa la superficie $S$ tutta l'energia contenuta nel cilindro che ha base $S$ e altezza $c\,\Delta t$, posto davanti alla superficie. Il volume del cilindro è $S\,c\,\Delta t$, quindi l'energia media che attraversa $S$ è $\bar{u}\,S\,c\,\Delta t$. Dividendo per il tempo $\Delta t$ e per l'area $S$ si ottiene l'intensità
$$
I = \frac{\bar{u}\,S\,c\,\Delta t}{S\,\Delta t} = c\,\bar{u} .
$$
Sostituendo $\bar{u} = \varepsilon_0 E_{\text{eff}}^2 = \dfrac{1}{2} \varepsilon_0 E_0^2$ si ottengono le altre due espressioni.
:::
::::

:::teorema{#sorgente-puntiforme titolo="Intensità di una sorgente puntiforme"}
Una sorgente puntiforme che emette la potenza media $P$ in modo uniforme in tutte le direzioni, in un mezzo che non assorbe energia, produce alla distanza $r$ l'intensità
$$
I = \frac{P}{4\pi r^2} .
$$
La formula segue dalla conservazione dell'energia. Infatti la potenza $P$ attraversa ogni sfera centrata nella sorgente e si distribuisce in modo uniforme sulla superficie della sfera, di area $4\pi r^2$. L'intensità diminuisce quindi come $\dfrac{1}{r^2}$, e il campo efficace, proporzionale a $\sqrt{I}$, diminuisce come $\dfrac{1}{r}$. Una lampada che emette $60\,\mathrm{W}$ di radiazione elettromagnetica produce a $r = 3{,}0\,\mathrm{m}$ l'intensità $I = \dfrac{60}{4\pi \cdot 3{,}0^2}\,\mathrm{W/m^2} \approx 0{,}53\,\mathrm{W/m^2}$.
:::

## Quantità di moto e pressione di radiazione

:::teorema{#quantita-di-moto-onda titolo="Quantità di moto della radiazione"}
Un'onda elettromagnetica che trasporta nel vuoto l'energia $U$ trasporta anche una quantità di moto di modulo
$$
p = \frac{U}{c} ,
$$
diretta nel verso di propagazione. Il risultato segue dalle equazioni di Maxwell ed è confermato dalle misure della forza che un fascio di luce esercita su uno specchio sospeso a un filo sottile. Il fattore $\dfrac{1}{c}$ è molto piccolo, quindi la quantità di moto della luce è piccola anche per energie grandi. Un impulso laser di energia $2{,}0\,\mathrm{J}$ trasporta $p = \dfrac{2{,}0}{3{,}00 \cdot 10^{8}}\,\mathrm{kg\cdot m/s} \approx 6{,}7 \cdot 10^{-9}\,\mathrm{kg\cdot m/s}$.
:::

:::richiamo{titolo="Teorema dell'impulso"}
Se nell'intervallo di tempo $\Delta t$ la quantità di moto di un corpo varia di $\Delta p$, la forza media che agisce sul corpo ha modulo $F = \dfrac{\Delta p}{\Delta t}$.
:::

::::teorema{#pressione-di-radiazione titolo="Pressione di radiazione"}
Un'onda di intensità $I$ incide perpendicolarmente su una superficie piana. Allora l'onda esercita sulla superficie una forza perpendicolare a essa, e il rapporto tra il modulo della forza e l'area, detto **pressione di radiazione**, vale

- $p_{\text{rad}} = \dfrac{I}{c}$ se la superficie assorbe tutta la radiazione;
- $p_{\text{rad}} = \dfrac{2I}{c}$ se la superficie riflette tutta la radiazione.

La radiazione solare vicino alla Terra, fuori dall'atmosfera, ha intensità di circa $1360\,\mathrm{W/m^2}$, e su una superficie che la assorbe produce la pressione $p_{\text{rad}} = \dfrac{1360}{3{,}00 \cdot 10^{8}}\,\mathrm{Pa} \approx 4{,}5 \cdot 10^{-6}\,\mathrm{Pa}$, circa $4 \cdot 10^{-11}$ volte la pressione atmosferica. Questa pressione produce effetti visibili solo su corpi molto leggeri con una superficie grande, come le vele solari, e sulle polveri delle comete, che formano una coda rivolta dalla parte opposta al Sole.

:::dimostrazione
Sia $S$ l'area della superficie. Nel tempo $\Delta t$ arriva sulla superficie l'energia $U = I\,S\,\Delta t$, che per la legge della quantità di moto della radiazione trasporta la quantità di moto $\dfrac{U}{c} = \dfrac{I\,S\,\Delta t}{c}$, perpendicolare alla superficie. Se la superficie assorbe la radiazione, riceve tutta questa quantità di moto. Se la riflette, l'onda torna indietro con quantità di moto opposta, quindi la quantità di moto della radiazione varia di $\dfrac{2U}{c}$ e la superficie riceve $\dfrac{2U}{c}$. Per il **teorema dell'impulso** la forza media è la quantità di moto ricevuta divisa per $\Delta t$:
$$
F = \frac{I\,S}{c} \quad \text{(assorbimento)} ,
\qquad
F = \frac{2 I\,S}{c} \quad \text{(riflessione)} .
$$
Dividendo per $S$ si ottengono le due pressioni.
:::
::::

## Polarizzazione

:::definizione{#polarizzazione titolo="Polarizzazione"}
Un'onda elettromagnetica è **polarizzata linearmente** se il suo campo elettrico oscilla sempre lungo la stessa direzione, detta direzione di polarizzazione. L'onda emessa da un'antenna rettilinea è polarizzata lungo l'antenna, perché le cariche oscillano in quella direzione. La luce del Sole o di una lampada a incandescenza è invece **non polarizzata**, perché è la somma delle onde emesse da moltissimi atomi indipendenti, con direzioni del campo elettrico distribuite a caso e variabili molto rapidamente.
:::

:::definizione{#filtro-polarizzatore titolo="Filtro polarizzatore"}
Un **filtro polarizzatore** è una lamina che ha una direzione privilegiata, detta asse di trasmissione. Il filtro lascia passare la componente del campo elettrico parallela all'asse e assorbe la componente perpendicolare. All'uscita la luce è polarizzata lungo l'asse del filtro. Se sul filtro arriva luce non polarizzata di intensità $I_0$, l'intensità trasmessa è
$$
I = \frac{I_0}{2} ,
$$
perché il valor medio di $\cos^2\theta$ su tutte le direzioni del campo è $\dfrac{1}{2}$. Un fascio non polarizzato di $800\,\mathrm{W/m^2}$ esce da un polarizzatore con intensità $400\,\mathrm{W/m^2}$, qualunque sia l'orientazione del filtro.
:::

::::teorema{#legge-di-malus titolo="Legge di Malus"}
Un'onda polarizzata linearmente, di intensità $I_0$, incide su un filtro polarizzatore il cui asse di trasmissione forma l'angolo $\theta$ con la direzione di polarizzazione. Allora l'intensità trasmessa è
$$
I = I_0 \cos^2\theta .
$$
La legge permette di regolare l'intensità della luce ruotando il filtro. Con $\theta = 0^\circ$ passa tutta la luce, mentre con $\theta = 90^\circ$ la luce è completamente bloccata. La luce di $400\,\mathrm{W/m^2}$ uscita dal filtro della definizione precedente attraversa un secondo filtro ruotato di $30^\circ$ con intensità $I = 400 \cdot \cos^2 30^\circ\,\mathrm{W/m^2} = 400 \cdot \dfrac{3}{4}\,\mathrm{W/m^2} = 300\,\mathrm{W/m^2}$.

::grafico{curve="t,cos(t*pi/180)^2,0,180" punti="0,1,pieno;90,0,pieno;180,1,pieno" xmin=0 xmax=200 ymin=0 ymax=1.2 nomi="θ,I" legenda=0 titolo="Intensità trasmessa da un polarizzatore, in unità di $I_0$, in funzione dell'angolo $\theta$ in gradi: è massima per $\theta = 0^\circ$ e $\theta = 180^\circ$ e nulla per $\theta = 90^\circ$"}

:::dimostrazione
Sia $E_0$ l'ampiezza del campo elettrico dell'onda incidente. Il filtro lascia passare solo la componente del campo parallela all'asse, che ha ampiezza $E_0 \cos\theta$. Per la formula dell'intensità e del campo elettrico l'intensità è proporzionale al quadrato dell'ampiezza, quindi
$$
\frac{I}{I_0} = \frac{\left( E_0 \cos\theta \right)^2}{E_0^2} = \cos^2\theta .
$$
:::
::::

## Spettro elettromagnetico

:::definizione{#spettro-elettromagnetico titolo="Spettro elettromagnetico"}
Tutte le onde elettromagnetiche hanno la stessa natura e nel vuoto la stessa velocità $c$; si distinguono per la frequenza o, in modo equivalente, per la lunghezza d'onda $\lambda = \dfrac{c}{f}$. L'insieme di tutte le frequenze si chiama **spettro elettromagnetico**, ed è diviso in bande che prendono nomi diversi per il modo in cui le onde si producono e si rivelano. I confini tra le bande sono indicativi:

- onde radio, con $\lambda$ maggiore di circa $1\,\mathrm{m}$: trasmissioni radio e televisive;
- microonde, con $\lambda$ tra circa $1\,\mathrm{mm}$ e $1\,\mathrm{m}$: radar, telefonia mobile, Wi-Fi, forni a microonde;
- infrarosso, con $\lambda$ tra circa $750\,\mathrm{nm}$ e $1\,\mathrm{mm}$: emesso dai corpi caldi, usato nei telecomandi e nelle termocamere;
- luce visibile, con $\lambda$ tra circa $380\,\mathrm{nm}$ (violetto) e $750\,\mathrm{nm}$ (rosso);
- ultravioletto, con $\lambda$ tra circa $10\,\mathrm{nm}$ e $380\,\mathrm{nm}$: abbronza la pelle e si usa per sterilizzare;
- raggi X, con $\lambda$ tra circa $0{,}01\,\mathrm{nm}$ e $10\,\mathrm{nm}$: radiografie;
- raggi gamma, con $\lambda$ minore di circa $0{,}01\,\mathrm{nm}$: emessi nei decadimenti nucleari, usati in radioterapia.

Ai confini della luce visibile corrispondono le frequenze $\dfrac{3{,}00 \cdot 10^{8}}{750 \cdot 10^{-9}}\,\mathrm{Hz} = 4{,}0 \cdot 10^{14}\,\mathrm{Hz}$ e $\dfrac{3{,}00 \cdot 10^{8}}{380 \cdot 10^{-9}}\,\mathrm{Hz} \approx 7{,}9 \cdot 10^{14}\,\mathrm{Hz}$. Un forno a microonde funziona alla frequenza $f = 2{,}45\,\mathrm{GHz}$, quindi $\lambda = \dfrac{3{,}00 \cdot 10^{8}}{2{,}45 \cdot 10^{9}}\,\mathrm{m} \approx 12\,\mathrm{cm}$.

::grafico{assi=0 uguale=1 poligoni="-14,0 3,0 3,0.8 -14,0.8;-6.42,0 -6.12,0 -6.12,0.8 -6.42,0.8" segmenti="-11,0,-11,0.8;-8,0,-8,0.8;-3,0,-3,0.8;0,0,0,0.8" linee="-12,0 -12,-0.2;-9,0 -9,-0.2;-6,0 -6,-0.2;-3,0 -3,-0.2;0,0 0,-0.2;3,0 3,-0.2" vettori="-6.27,2.0,-6.27,0.95" etichette="-12.8,0.3,γ;-9.8,0.3,X;-7.5,0.3,UV;-4.8,0.3,IR;-2.6,0.3,microonde;1.1,0.3,radio;-7.1,2.25,visibile;-12.6,-0.6,1 pm;-9.6,-0.6,1 nm;-6.6,-0.6,1 μm;-3.7,-0.6,1 mm;-0.4,-0.6,1 m;2.4,-0.6,1 km" xmin=-14.5 xmax=3.5 ymin=-1.1 ymax=2.7 legenda=0 titolo="Spettro elettromagnetico con la lunghezza d'onda in scala logaritmica: verso sinistra $\lambda$ diminuisce e la frequenza $f = \dfrac{c}{\lambda}$ aumenta; la luce visibile occupa la banda stretta tra $380\,\mathrm{nm}$ e $750\,\mathrm{nm}$"}

:::
