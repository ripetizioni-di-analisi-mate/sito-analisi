---
titolo: Oscillazioni e onde meccaniche
sommario: Moto armonico, oscillatori elastici, pendolo, propagazione, sovrapposizione e modi stazionari su una corda.
---

## Periodo, frequenza e fase

:::definizione{#periodo-frequenza titolo="Grandezze di un'oscillazione"}
Un moto è **periodico** quando si ripete a intervalli di tempo regolari. Il **periodo** $T$ è il più piccolo intervallo dopo il quale ricomincia il ciclo. Per un corpo lungo una retta, la stessa posizione può essere attraversata due volte in un ciclo. Il ciclo è completo quando si ritrovano sia la posizione sia la velocità iniziale. Un corpo che attraversa l'equilibrio prima verso destra e poi verso sinistra ha percorso mezzo ciclo.

Se in un intervallo $\Delta t$ si contano $N$ oscillazioni complete, la **frequenza** $f$ è
$$
f=\frac{N}{\Delta t}=\frac{1}{T},
\qquad
\omega=2\pi f=\frac{2\pi}{T}.
$$
La frequenza si misura in hertz, con $1\,\mathrm{Hz}=1\,\mathrm{s^{-1}}$. La pulsazione $\omega$ si misura in radianti al secondo, perché la **fase** avanza di $2\pi$ radianti in un ciclo.
:::

:::esempio{titolo="Lettura delle misure e degli intervalli"}
Se il cronometro misura $20\,\mathrm{s}$ per $40$ oscillazioni complete, si trova $f=2{,}0\,\mathrm{Hz}$ e ciascuna oscillazione dura $T=0{,}50\,\mathrm{s}$. Un sensore può registrare il primo massimo a $t=0$ e il quinto a $t=2\,\mathrm{s}$. Fra cinque massimi ci sono quattro intervalli completi, quindi anche in questa misura $T=\dfrac{2}{4}\,\mathrm{s}=0{,}50\,\mathrm{s}$.

Per confrontare due oscillazioni della stessa frequenza si possono confrontare gli istanti dei massimi. Un ritardo di $\dfrac{T}{4}$ corrisponde a uno sfasamento di modulo $\dfrac{\pi}{2}$. A mezzo periodo di distanza, una sinusoide assume il valore opposto. Per questo uno sfasamento di $\pi$ radianti si chiama **opposizione di fase**.
:::

:::attenzione
La pulsazione e la frequenza descrivono la stessa oscillazione con numeri diversi. Un oscillatore con $\omega=20\,\mathrm{rad/s}$ compie $f=\dfrac{20}{2\pi}\,\mathrm{Hz}\simeq3{,}18\,\mathrm{Hz}$ e ogni ciclo dura $T=\dfrac{2\pi}{20}\,\mathrm{s}\simeq0{,}314\,\mathrm{s}$. Se si leggesse $20$ come frequenza si troverebbe $T=\dfrac{1}{20}\,\mathrm{s}=0{,}050\,\mathrm{s}$, un periodo $2\pi$ volte più breve di quello vero.
:::

## Moto armonico

:::definizione{#moto-armonico titolo="Legge oraria armonica"}
Sia $x=0$ la posizione di equilibrio. Nel moto armonico lo spostamento è
$$
x(t)=A\cos(\omega t+\varphi),
\qquad A>0.
$$
L'ampiezza $A$ è il massimo valore di $|x|$. La fase iniziale $\varphi$ individua lo stato al tempo $t=0$. Per $\varphi=0$ il corpo parte da $x=A$. Per $\varphi=\dfrac{\pi}{2}$ parte da $x=0$ e, per piccoli tempi positivi, entra nella regione $x<0$.

La proiezione di un moto circolare uniforme di raggio $A$ e pulsazione $\omega$ dà la stessa legge oraria. Proiettando la velocità tangenziale e l'accelerazione centripeta sullo stesso asse si ottiene
$$
v(t)=-\omega A\sin(\omega t+\varphi),
\qquad
a(t)=-\omega^2x(t).
$$
In ogni posizione diversa dall'equilibrio, $a$ ha segno opposto a $x$. Al passaggio per l'equilibrio $|v|=\omega A$ e $a=0$. Agli estremi $v=0$ e $|a|=\omega^2 A$, quindi il corpo cambia verso.
:::

:::osservazione{titolo="Proiezione del moto circolare uniforme"}
Il punto $P$ percorre la circonferenza di raggio $A$ con velocità angolare $\omega$ e il suo raggio forma con l'asse $x$ l'angolo $\omega t+\varphi$. La proiezione $Q$ di $P$ sull'asse ha ascissa $A\cos(\omega t+\varphi)$, cioè la legge oraria armonica. Un giro completo di $P$ corrisponde a un'oscillazione completa di $Q$, quindi il tempo di un giro è il periodo $T$ e l'angolo descritto in un secondo è la pulsazione $\omega$. L'ampiezza è il raggio della circonferenza e la fase iniziale è l'angolo di $P$ a $t=0$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.29" vettori="-2.6,0,2.9,0;0,0,1.414,1.414,A" segmenti="1.414,1.414,1.414,0" punti="1.414,1.414,pieno,P;1.414,0,pieno,Q" etichette="2.95,0.3,x" xmin=-3 xmax=3.2 ymin=-2.5 ymax=2.5 titolo="Il punto $Q$ proietta $P$ sull'asse $x$ e si muove di moto armonico con ampiezza $A$"}

:::

:::esempio{titolo="Posizione, velocità e verso del moto"}
Con $A=0{,}050\,\mathrm{m}$, $T=0{,}50\,\mathrm{s}$ e $\varphi=0$ si ha $\omega=4\pi\,\mathrm{rad/s}$. A $t=\dfrac{T}{4}=0{,}125\,\mathrm{s}$ la fase è $\dfrac{\pi}{2}$, quindi $x=0$ e $v=-4\pi\cdot 0{,}050\,\mathrm{m/s}\simeq -0{,}628\,\mathrm{m/s}$. A $t=\dfrac{3T}{4}$ la posizione è ancora $x=0$, ma il seno vale $-1$ e la velocità è positiva. Lo stesso punto del percorso corrisponde così a due stati distinti.

::grafico{f="cos(pi*x/250);-sin(pi*x/250)" xmin=0 xmax=500 ymin=-1.3 ymax=1.3 nomi="t,rapporto" legenda="\dfrac{x}{A};\dfrac{v}{\omega A}" punti="125,0,pieno;125,-1,pieno;375,0,pieno;375,1,pieno" titolo="In un periodo di 0,50 s il corpo attraversa l'equilibrio prima con velocità negativa, poi con velocità positiva. Tempi in millisecondi."}

:::

:::esempio{titolo="Fase iniziale dalle condizioni iniziali"}
Un oscillatore con $A=0{,}050\,\mathrm{m}$ e $\omega=4\pi\,\mathrm{rad/s}$ si trova a $t=0$ in $x=0{,}025\,\mathrm{m}$ e si muove verso l'equilibrio. Da $x(0)=A\cos\varphi$ si ottiene $\cos\varphi=\dfrac{1}{2}$, quindi $\varphi=\dfrac{\pi}{3}$ oppure $\varphi=-\dfrac{\pi}{3}$. La velocità iniziale $v(0)=-\omega A\sin\varphi$ deve essere negativa, perché $x$ diminuisce, quindi $\sin\varphi>0$ e la fase è $\varphi=\dfrac{\pi}{3}$. Si ha allora $v(0)=-4\pi\cdot0{,}050\cdot\dfrac{\sqrt{3}}{2}\,\mathrm{m/s}\simeq-0{,}544\,\mathrm{m/s}$. La sola posizione iniziale lascia due fasi possibili, che differiscono per il verso del moto.
:::

::::teorema{#velocita-posizione titolo="Velocità in funzione della posizione"}
Nel moto armonico di ampiezza $A$ e pulsazione $\omega$, il modulo della velocità in una posizione $x$ è
$$
|v|=\omega\sqrt{A^2-x^2}.
$$
La relazione dà il modulo della velocità a partire da una sola misura di posizione, senza conoscere l'istante. Con $A=0{,}040\,\mathrm{m}$, $T=0{,}50\,\mathrm{s}$ e $x=0{,}024\,\mathrm{m}$ si ha $\omega=4\pi\,\mathrm{rad/s}$ e $|v|=4\pi\sqrt{0{,}040^2-0{,}024^2}\,\mathrm{m/s}=4\pi\cdot0{,}032\,\mathrm{m/s}\simeq0{,}402\,\mathrm{m/s}$, minore del massimo $\omega A\simeq0{,}503\,\mathrm{m/s}$.

:::dimostrazione
Dalla legge oraria si ha $x=A\cos(\omega t+\varphi)$ e $v=-\omega A\sin(\omega t+\varphi)$. Elevando al quadrato si ottiene $x^2=A^2\cos^2(\omega t+\varphi)$ e $v^2=\omega^2A^2\sin^2(\omega t+\varphi)$. Poiché $\sin^2\alpha=1-\cos^2\alpha$, vale $v^2=\omega^2A^2\left(1-\cos^2(\omega t+\varphi)\right)=\omega^2\left(A^2-x^2\right)$. La radice quadrata di entrambi i membri dà il modulo $|v|$.
:::
::::

## Massa, molla ed energia

::::teorema{#massa-molla titolo="Periodo dell'oscillatore elastico"}
Una massa $m$ soggetta alla sola forza di richiamo di una molla ideale di costante $k$, lungo l'asse della molla, oscilla con pulsazione e periodo
$$
\omega=\sqrt{\frac{k}{m}},
\qquad
T=2\pi\sqrt{\frac{m}{k}}.
$$
Una massa maggiore risponde con minore accelerazione allo stesso spostamento, quindi il periodo cresce. Per $m=0{,}50\,\mathrm{kg}$ e $k=200\,\mathrm{N/m}$ si ha $\omega=20\,\mathrm{rad/s}$ e $T=\dfrac{\pi}{10}\,\mathrm{s}$. Se la massa quadruplica a $k$ fissato, il periodo raddoppia.

:::dimostrazione
Si misura $x$ dall'equilibrio. La legge di Hooke dà $F=-kx$. Poiché $ma=F$, si ha $a=-\dfrac{k}{m}x$. L'accelerazione è proporzionale allo spostamento con segno opposto, dunque il moto è armonico e $\omega^2=\dfrac{k}{m}$. Da $T=\dfrac{2\pi}{\omega}$ segue il periodo. Lo stesso ragionamento vale per una molla verticale se $x$ si misura dall'equilibrio statico, dove la forza elastica bilancia il peso.
:::
::::

:::esempio{titolo="Molla verticale e allungamento statico"}
Una massa $m=0{,}20\,\mathrm{kg}$ appesa a una molla verticale la allunga di $\Delta\ell=9{,}81\,\mathrm{cm}$ all'equilibrio. In quella posizione la forza elastica bilancia il peso, $k\Delta\ell=mg$, quindi $k=\dfrac{mg}{\Delta\ell}=\dfrac{0{,}20\cdot9{,}81}{0{,}0981}\,\mathrm{N/m}=20\,\mathrm{N/m}$. Il periodo è $T=2\pi\sqrt{\dfrac{m}{k}}=2\pi\sqrt{\dfrac{0{,}20}{20}}\,\mathrm{s}\simeq0{,}628\,\mathrm{s}$. Poiché $\dfrac{m}{k}=\dfrac{\Delta\ell}{g}$, si può scrivere anche $T=2\pi\sqrt{\dfrac{\Delta\ell}{g}}$, che dà lo stesso valore a partire dal solo allungamento statico.
:::

:::attenzione
Il periodo di un oscillatore armonico non dipende dall'ampiezza. Con $m=0{,}50\,\mathrm{kg}$ e $k=200\,\mathrm{N/m}$ si ha $T=\dfrac{\pi}{10}\,\mathrm{s}\simeq0{,}314\,\mathrm{s}$ sia per $A=0{,}050\,\mathrm{m}$ sia per $A=0{,}100\,\mathrm{m}$. Raddoppiando l'ampiezza l'energia $\dfrac{1}{2}kA^2$ quadruplica, da $0{,}25\,\mathrm{J}$ a $1{,}00\,\mathrm{J}$, e il modulo massimo della velocità $\omega A$ raddoppia, da $1{,}0\,\mathrm{m/s}$ a $2{,}0\,\mathrm{m/s}$.
:::

::::teorema{#molle-parallelo-serie titolo="Molle in parallelo e in serie"}
Due molle ideali di costanti $k_1$ e $k_2$, collegate alla stessa massa in modo da subire lo stesso allungamento (parallelo), equivalgono a una molla di costante
$$
k=k_1+k_2.
$$
Due molle collegate una di seguito all'altra, che trasmettono la stessa forza (serie), equivalgono a una molla di costante
$$
\frac{1}{k}=\frac{1}{k_1}+\frac{1}{k_2}.
$$
La costante equivalente permette di usare $T=2\pi\sqrt{\dfrac{m}{k}}$ per il sistema completo. Con $k_1=100\,\mathrm{N/m}$, $k_2=300\,\mathrm{N/m}$ e $m=0{,}30\,\mathrm{kg}$ il parallelo ha $k=400\,\mathrm{N/m}$ e $T=2\pi\sqrt{\dfrac{0{,}30}{400}}\,\mathrm{s}\simeq0{,}172\,\mathrm{s}$. La serie ha $\dfrac{1}{k}=\dfrac{1}{100}+\dfrac{1}{300}=\dfrac{4}{300}$, cioè $k=75\,\mathrm{N/m}$ e $T=2\pi\sqrt{\dfrac{0{,}30}{75}}\,\mathrm{s}\simeq0{,}397\,\mathrm{s}$.

:::dimostrazione
Nel parallelo, per un allungamento $x$ le due molle esercitano forze $k_1x$ e $k_2x$ con lo stesso verso. La forza totale ha modulo $(k_1+k_2)x$, che è la forza di una molla di costante $k_1+k_2$.

Nella serie, il punto di giunzione ha massa trascurabile, quindi le due molle trasmettono la stessa forza $F$. Gli allungamenti sono $\dfrac{F}{k_1}$ e $\dfrac{F}{k_2}$ e l'allungamento totale è $x=F\left(\dfrac{1}{k_1}+\dfrac{1}{k_2}\right)$. Una molla equivalente di costante $k$ ha, con la stessa forza, allungamento $x=\dfrac{F}{k}$. Il confronto dei due allungamenti dà la formula.
:::
::::

:::richiamo{titolo="Legge oraria dell'oscillatore elastico"}
Una massa $m$ attaccata a una molla ideale di costante $k$ si muove con $x(t)=A\cos(\omega t+\varphi)$ e $v(t)=-\omega A\sin(\omega t+\varphi)$, dove $\omega=\sqrt{\dfrac{k}{m}}$, quindi $m\omega^2=k$.
:::

::::teorema{#energia-armonica titolo="Energia dell'oscillatore elastico"}
Per un oscillatore elastico ideale senza dissipazioni, scegliendo energia potenziale nulla all'equilibrio, l'energia meccanica è
$$
E=\frac{1}{2}mv^2+\frac{1}{2}kx^2
=\frac{1}{2}kA^2.
$$
L'ultima uguaglianza si ottiene valutando l'energia in uno dei due estremi. Lì $|x|=A$ e la velocità è nulla. A metà dello spostamento estremo, $x=\dfrac{A}{2}$, la parte elastica è $\dfrac{E}{4}$, quindi la parte cinetica è $\dfrac{3E}{4}$. Dalla conservazione dell'energia segue
$$
|v|=\sqrt{\frac{k}{m}(A^2-x^2)}.
$$
Questa relazione dà il modulo della velocità in una posizione nota. Il segno dipende dal verso del moto in quell'istante.

:::dimostrazione
L'energia cinetica in funzione del tempo è $\dfrac{1}{2}mv^2=\dfrac{1}{2}m\omega^2A^2\sin^2(\omega t+\varphi)$. Poiché $m\omega^2=k$, diventa $\dfrac{1}{2}kA^2\sin^2(\omega t+\varphi)$. L'energia elastica è $\dfrac{1}{2}kx^2=\dfrac{1}{2}kA^2\cos^2(\omega t+\varphi)$. Nella somma compare $\sin^2(\omega t+\varphi)+\cos^2(\omega t+\varphi)=1$, quindi $E=\dfrac{1}{2}kA^2$ a ogni istante. Il risultato non dipende dal tempo, perciò l'energia meccanica si conserva. Da $\dfrac{1}{2}mv^2=E-\dfrac{1}{2}kx^2=\dfrac{1}{2}k\left(A^2-x^2\right)$ si ottiene poi $v^2=\dfrac{k}{m}\left(A^2-x^2\right)$.
:::
::::

:::esempio{titolo="Bilancio in una posizione intermedia"}
Con $k=200\,\mathrm{N/m}$, $m=0{,}50\,\mathrm{kg}$ e $A=0{,}050\,\mathrm{m}$ si ha $E=0{,}25\,\mathrm{J}$. In $x=0{,}030\,\mathrm{m}$ l'energia potenziale vale $0{,}090\,\mathrm{J}$, quindi $K=0{,}160\,\mathrm{J}$. Da $K=\dfrac{1}{2}mv^2$ segue $|v|=0{,}80\,\mathrm{m/s}$. La velocità è negativa se in quel momento il corpo si avvicina a $x=0$, perché il corpo si trova a destra dell'equilibrio.

::grafico{f="10*x^2;250-10*x^2" xmin=-5 xmax=5 ymin=0 ymax=300 nomi="x,E (mJ)" legenda="\text{energia elastica};\text{energia cinetica}" punti="3,90,pieno;3,160,pieno" titolo="Energie in funzione di $x$, con $x$ in centimetri ed energie in millijoule. In $x=3\,\mathrm{cm}$ l'energia elastica è $90\,\mathrm{mJ}$ e quella cinetica $160\,\mathrm{mJ}$, per un totale di $250\,\mathrm{mJ}$"}

:::

## Pendolo semplice e risonanza

::::teorema{#pendolo titolo="Piccole oscillazioni del pendolo"}
Un pendolo semplice è costituito da una massa puntiforme sospesa a un filo inestensibile di lunghezza $\ell$, di massa trascurabile. Con attriti trascurabili e angoli piccoli intorno alla verticale, il periodo vale
$$
T=2\pi\sqrt{\frac{\ell}{g}}.
$$
Con $\ell=1{,}0\,\mathrm{m}$ e $g=9{,}81\,\mathrm{m/s^2}$ il periodo è circa $2{,}01\,\mathrm{s}$. La massa si semplifica nel calcolo dell'accelerazione. Per un pendolo lungo un quarto, il periodo si dimezza alla stessa $g$.

:::dimostrazione
Misuriamo l'angolo $\theta$ dalla verticale verso il basso e lo spostamento lungo l'arco con segno $s=\ell\theta$. La tensione del filo è radiale, quindi la forza tangenziale è la componente del peso $-mg\sin\theta$. Dividendo per $m$ si ottiene $a_{\mathrm{tan}}=-g\sin\theta$. Per $\theta$ piccolo, espresso in radianti, $\sin\theta\simeq\theta$. Segue $a_{\mathrm{tan}}\simeq-\dfrac{g}{\ell}s$, quindi il moto lungo l'arco è approssimativamente armonico con $\omega=\sqrt{\dfrac{g}{\ell}}$ e il periodo risulta quello indicato.
:::
::::

:::osservazione{titolo="Forze sulla massa del pendolo"}
Sulla massa agiscono il peso $m\vec{g}$ e la tensione del filo. Il peso si scompone in una componente $mg\cos\theta$ lungo il filo, che insieme alla tensione determina l'accelerazione centripeta e non produce accelerazione lungo l'arco, e in una componente $mg\sin\theta$ tangente all'arco, diretta verso la posizione di equilibrio. Solo quest'ultima accelera la massa lungo la traiettoria.

::grafico{assi=0 uguale=1 linee="-1.2,4 1.2,4;0,4 2.571,0.936" segmenti="0,4,0,-0.4;2.571,0.936,1.832,0.316;2.571,0.936,3.31,0.056" curve="4*sin(t),4-4*cos(t),-0.8,0.8" vettori="2.571,0.936,2.571,-0.564,mg;2.571,0.936,1.832,0.316,;2.571,0.936,3.31,0.056," punti="0,4,pieno,O;2.571,0.936,pieno" etichette="1.3,2.9,ℓ;0.18,3.1,θ;1.6,0.05,mg sinθ;3.45,-0.1,mg cosθ" xmin=-1.5 xmax=4.5 ymin=-1 ymax=4.6 titolo="Il peso si scompone nella componente lungo il filo e in quella tangente all'arco, diretta verso la posizione di equilibrio"}

:::

:::esempio{titolo="Lunghezza per un periodo assegnato"}
Un pendolo ha periodo $T=2{,}00\,\mathrm{s}$, cioè compie una semioscillazione in $1{,}00\,\mathrm{s}$. Da $T=2\pi\sqrt{\dfrac{\ell}{g}}$ si ricava $\ell=\dfrac{gT^2}{4\pi^2}=\dfrac{9{,}81\cdot4{,}00}{4\pi^2}\,\mathrm{m}\simeq0{,}994\,\mathrm{m}$. Per un periodo triplo la lunghezza deve essere nove volte maggiore, cioè circa $8{,}95\,\mathrm{m}$.
:::

:::attenzione
La formula del periodo si fonda sull'approssimazione $\sin\theta\simeq\theta$. Per un'ampiezza di $60^\circ$ si ha $\theta=\dfrac{\pi}{3}\,\mathrm{rad}$ e $\sin\theta=\dfrac{\sqrt{3}}{2}$, circa il $17\%$ in meno di $\theta$. A grandi angoli la forza di richiamo si discosta dalla legge lineare e il periodo dipende anche dall'ampiezza.
:::

:::osservazione{titolo="Periodo esatto e ampiezza"}
Il calcolo numerico del periodo senza l'approssimazione $\sin\theta\simeq\theta$ dà, rispetto al valore $2\pi\sqrt{\dfrac{\ell}{g}}$, un aumento di circa $0{,}2\%$ per un'ampiezza di $10^\circ$, di circa $1{,}7\%$ per $30^\circ$ e di circa $7{,}3\%$ per $60^\circ$. Per $10^\circ$ e un periodo di $2{,}0\,\mathrm{s}$ la differenza è quindi di circa $4\,\mathrm{ms}$.
:::

:::osservazione
L'attrito sottrae energia a un oscillatore e ne riduce l'ampiezza nel tempo. Una forza periodica esterna può compensare la dissipazione. In presenza di smorzamento debole, l'ampiezza stazionaria ha un massimo per una frequenza della forza prossima a quella propria del sistema. Questo è il fenomeno della **risonanza**. Per esempio una spinta data una volta ogni ciclo a un'altalena, nel verso in cui il sedile sta passando, aumenta l'energia a ogni spinta. La dissipazione limita l'ampiezza raggiunta.
:::

:::esempio{titolo="Frequenza propria e curva di risonanza"}
Un pendolo lungo $\ell=2{,}50\,\mathrm{m}$ ha periodo $T=2\pi\sqrt{\dfrac{2{,}50}{9{,}81}}\,\mathrm{s}\simeq3{,}17\,\mathrm{s}$, quindi frequenza propria $f_0=\dfrac{1}{T}\simeq0{,}315\,\mathrm{Hz}$. Una spinta ripetuta a questa frequenza trasferisce energia a ogni ciclo. Se la spinta ha frequenza $\dfrac{f_0}{2}$ oppure $2f_0$, l'ampiezza raggiunta è molto minore, come mostra la curva.

::grafico{f="1/sqrt((1-x^2)^2+0.04*x^2)" xmin=0 xmax=2 ymin=0 ymax=6 nomi="f/f₀,A" titolo="Andamento qualitativo dell'ampiezza stazionaria, in unità arbitrarie, in funzione di $\dfrac{f}{f_0}$ per uno smorzamento debole"}

:::

## Propagazione e lettura dei grafici

:::definizione{#onda titolo="Onda meccanica e velocità di propagazione"}
Un'**onda meccanica** è una perturbazione che si propaga attraverso un mezzo. Su una corda fissiamo l'asse $x$ lungo la corda a riposo. Il valore $y(x,t)$ è lo spostamento trasversale del punto della corda con posizione di equilibrio $x$. Durante il passaggio dell'onda, il punto si sposta lungo la direzione trasversale. Una cresta avanza lungo la corda perché punti successivi raggiungono il massimo in istanti successivi. La cresta e un punto materiale hanno quindi velocità diverse. In un'onda longitudinale, come un'onda sonora in un fluido, gli spostamenti locali sono paralleli alla direzione di propagazione.

La **lunghezza d'onda** $\lambda$ è la distanza fra due creste consecutive osservate nello stesso istante. Il **periodo** $T$ è il tempo fra il passaggio di due creste consecutive nello stesso punto. Poiché una cresta percorre $\lambda$ durante $T$, il modulo della velocità di propagazione è
$$
u=\frac{\lambda}{T}=\lambda f.
$$
:::

:::osservazione{titolo="Fronti d'onda"}
Su una superficie d'acqua una sorgente puntiforme produce creste circolari che si allontanano dalla sorgente. Un **fronte d'onda** è l'insieme dei punti raggiunti dalla perturbazione con la stessa fase, e due fronti consecutivi della stessa fase distano $\lambda$. La direzione di propagazione è perpendicolare ai fronti. Con $f=4{,}0\,\mathrm{Hz}$ e $\lambda=0{,}050\,\mathrm{m}$ si ha $u=\lambda f=0{,}20\,\mathrm{m/s}$. Dopo $5{,}0\,\mathrm{s}$ dall'accensione della sorgente il primo fronte ha raggio $r=ut=1{,}0\,\mathrm{m}$, e fra la sorgente e quel fronte si contano $\dfrac{1{,}0}{0{,}050}=20$ lunghezze d'onda.

::grafico{assi=0 uguale=1 curve="cos(t),sin(t),0,6.29;2*cos(t),2*sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29;4*cos(t),4*sin(t),0,6.29" vettori="0,0,2.12,2.12," segmenti="1,0,2,0" punti="0,0,pieno,S" etichette="1.5,0.3,λ" xmin=-4.6 xmax=4.6 ymin=-4.4 ymax=4.4 titolo="Fronti d'onda circolari di una sorgente puntiforme $S$, distanziati di $\lambda$. La freccia indica la direzione di propagazione"}

:::

:::esempio{titolo="Una fotografia e una registrazione della stessa onda"}
Nel primo grafico $t=0$ è fissato e l'asse orizzontale rappresenta la posizione $x$. Le creste distano $2\,\mathrm{m}$, quindi $\lambda=2\,\mathrm{m}$. Il secondo grafico segue il solo punto $x=0$. L'asse orizzontale rappresenta il tempo $t$ e i massimi distano $0{,}20\,\mathrm{s}$, quindi $T=0{,}20\,\mathrm{s}$. L'onda si propaga a $u=\dfrac{2}{0{,}20}\,\mathrm{m/s}=10\,\mathrm{m/s}$.

::grafico{f="3*cos(pi*x)" xmin=0 xmax=4.2 ymin=-4 ymax=4 nomi="x,y (cm)" punti="0,3,pieno;2,3,pieno;4,3,pieno" titolo="Profilo a t = 0, con creste in x = 0 m, 2 m e 4 m. Ascisse in metri."}

::grafico{f="3*cos(pi*x/100)" xmin=0 xmax=400 ymin=-4 ymax=4 nomi="t,y (cm)" punti="0,3,pieno;200,3,pieno;400,3,pieno" titolo="Spostamento del punto x = 0, con massimi a t = 0 ms, 200 ms e 400 ms. Tempi in millisecondi."}

La distanza fra una cresta e il minimo adiacente è $\dfrac{\lambda}{2}=1\,\mathrm{m}$. La differenza verticale fra gli stessi punti è $6\,\mathrm{cm}$, il doppio dell'ampiezza, perché le ordinate sono $+3\,\mathrm{cm}$ e $-3\,\mathrm{cm}$. La lunghezza d'onda si legge sull'asse $x$, l'ampiezza sull'asse $y$.
:::

:::attenzione
La velocità di propagazione $u$ e la velocità di un punto della corda sono grandezze diverse. Per un'onda con $A=3{,}0\,\mathrm{cm}$ e $T=0{,}20\,\mathrm{s}$ che si propaga a $u=10\,\mathrm{m/s}$, un punto della corda ha velocità trasversale massima $\omega A=\dfrac{2\pi}{0{,}20}\cdot0{,}030\,\mathrm{m/s}\simeq0{,}94\,\mathrm{m/s}$, circa undici volte minore di $u$. Il punto si muove in direzione trasversale, mentre la perturbazione avanza lungo la corda.
:::

## Equazione di un'onda armonica

:::definizione{#equazione-onda titolo="Numero d'onda e verso di propagazione"}
Per un'onda armonica che viaggia verso $x$ crescente si scrive
$$
y(x,t)=A\cos(kx-\omega t+\varphi),
\qquad
k=\frac{2\pi}{\lambda},
\qquad
u=\frac{\omega}{k}.
$$
Il numero d'onda $k$ esprime la variazione di fase per unità di lunghezza e si misura in $\mathrm{rad/m}$. In questa sezione il simbolo $k$ indica il numero d'onda, perché moltiplica una lunghezza. Per trovare il verso di propagazione si segue una cresta, che mantiene la stessa fase. Tra due istanti vale $k\Delta x-\omega\Delta t=0$, quindi $\Delta x=\dfrac{\omega}{k}\Delta t>0$ per $\Delta t>0$. Se la fase è $kx+\omega t+\varphi$, la stessa condizione dà $\Delta x=-\dfrac{\omega}{k}\Delta t<0$.

A tempo fissato la differenza di fase tra due posizioni è $k\Delta x$. Due punti distanti $\dfrac{\lambda}{2}$ hanno quindi spostamenti opposti nello stesso istante. A posizione fissata, nell'onda diretta verso $x$ crescente, la fase varia di $-\omega\Delta t$. Un'intera lunghezza d'onda nello spazio o un intero periodo nel tempo riportano il coseno allo stesso valore.
:::

:::esempio{titolo="La cresta avanza mentre il punto in cresta è fermo"}
Per $y(x,t)=0{,}03\cos(2\pi x-8\pi t)$, con distanze in metri e tempi in secondi, troviamo $\lambda=1\,\mathrm{m}$ e $u=4\,\mathrm{m/s}$. La cresta che passa dall'origine a $t=0$ soddisfa $2\pi x-8\pi t=0$, quindi a $t=0{,}10\,\mathrm{s}$ si trova in $x=0{,}40\,\mathrm{m}$. In quell'istante quel punto materiale è al massimo della sua oscillazione, quindi la sua velocità trasversale istantanea è zero. Il suo modulo massimo, raggiunto al passaggio per l'equilibrio, è $\omega A=0{,}24\pi\,\mathrm{m/s}$.
:::

:::esempio{titolo="Onda diretta verso x negativo"}
Per $y(x,t)=0{,}040\cos(\pi x+6\pi t)$, con distanze in metri e tempi in secondi, la fase contiene $+\omega t$, quindi la propagazione avviene verso $x$ decrescente. Dal confronto con la forma generale si ha $k=\pi\,\mathrm{rad/m}$ e $\omega=6\pi\,\mathrm{rad/s}$. Ne seguono $\lambda=\dfrac{2\pi}{k}=2\,\mathrm{m}$, $f=\dfrac{\omega}{2\pi}=3\,\mathrm{Hz}$ e $u=\dfrac{\omega}{k}=6\,\mathrm{m/s}$, che coincide con $\lambda f$.
:::

:::esempio{titolo="Differenza di fase fra due punti"}
In un'onda con $\lambda=1{,}0\,\mathrm{m}$, due punti in $x_1=0{,}10\,\mathrm{m}$ e $x_2=0{,}35\,\mathrm{m}$ hanno nello stesso istante differenza di fase $k\Delta x=\dfrac{2\pi}{1{,}0}\cdot0{,}25=\dfrac{\pi}{2}$. Per $\Delta x=0{,}50\,\mathrm{m}$ la differenza è $\pi$ e i punti sono in opposizione di fase, per $\Delta x=1{,}0\,\mathrm{m}$ è $2\pi$ e i punti sono in fase.
:::

:::teorema{#velocita-su-corda titolo="Velocità su una corda tesa"}
Per piccole perturbazioni trasversali su una corda uniforme ideale, tesa da una forza $F_T$ e con massa per unità di lunghezza $\mu$, vale
$$
u=\sqrt{\frac{F_T}{\mu}}.
$$
Tendendo la stessa corda con una forza quattro volte maggiore, la velocità raddoppia. Se un tratto di corda lungo $2{,}0\,\mathrm{m}$ ha massa $20\,\mathrm{g}$, si ha $\mu=0{,}010\,\mathrm{kg/m}$. Con $F_T=100\,\mathrm{N}$ si ottiene $u=100\,\mathrm{m/s}$. La frequenza è imposta dalla sorgente. Al passaggio a una corda con diversa velocità di propagazione, i due tratti devono oscillare alla stessa frequenza nel punto di raccordo, perciò cambia $\lambda=\dfrac{u}{f}$.
:::

:::osservazione{titolo="Dipendenza da tensione e densità lineare"}
Il rapporto $\dfrac{F_T}{\mu}$ ha unità $\dfrac{\mathrm{kg\cdot m/s^2}}{\mathrm{kg/m}}=\mathrm{m^2/s^2}$, quindi la sua radice è una velocità. Una corda più tesa trasmette la perturbazione più rapidamente, perché la forza che riporta un tratto verso l'equilibrio è maggiore. Una corda con più massa per unità di lunghezza risponde più lentamente, perché ogni tratto ha più massa da accelerare. A parità di tensione, una densità $\mu$ quattro volte maggiore dimezza la velocità.
:::

## Sovrapposizione e riflessione

:::teorema{#sovrapposizione titolo="Somma delle perturbazioni"}
Nel regime lineare, lo spostamento risultante è la somma algebrica degli spostamenti che le stesse onde produrrebbero separatamente. Per due onde uguali in fase, la somma ha ampiezza $2A$. Per due onde uguali in opposizione di fase, lo spostamento risultante si annulla. Se sono in opposizione ma hanno ampiezze $5\,\mathrm{cm}$ e $2\,\mathrm{cm}$, nel punto di sovrapposizione l'ampiezza risultante è $3\,\mathrm{cm}$. Quando la prima perturbazione è a $+5\,\mathrm{cm}$, la seconda è a $-2\,\mathrm{cm}$ e lo spostamento totale è $+3\,\mathrm{cm}$.

La somma si applica agli **spostamenti**. Le grandezze energetiche sono quadratiche in ampiezza a parità delle altre condizioni, quindi la distribuzione dell'energia dipende anche dalla fase relativa.
:::

:::esempio{titolo="Impulso riflesso ai due tipi di estremo"}
Supponiamo che arrivi un impulso con spostamento positivo. All'estremo fisso lo spostamento totale deve essere nullo a ogni istante. L'impulso riflesso deve quindi fornire uno spostamento opposto a quello incidente all'estremo e torna invertito. Un estremo libero ideale può spostarsi. La condizione al bordo è di pendenza nulla e gli impulsi incidente e riflesso hanno lo stesso segno. In entrambi i casi l'impulso riflesso si propaga in verso opposto a quello incidente.
:::

:::osservazione{titolo="Tempo di andata e ritorno"}
Su una corda lunga $L=12\,\mathrm{m}$ con $u=40\,\mathrm{m/s}$, un impulso riflesso all'estremo lontano torna al punto di partenza dopo $\Delta t=\dfrac{2L}{u}=\dfrac{24}{40}\,\mathrm{s}=0{,}60\,\mathrm{s}$, qualunque sia il tipo di estremo, perché cambia soltanto il segno dell'impulso. Lo stesso tempo è il periodo della fondamentale di una corda fissata agli estremi, perché $\dfrac{2L}{u}=\dfrac{1}{f_1}$.
:::

:::attenzione
Due onde che si sovrappongono non si cancellano in modo definitivo. Due impulsi con spostamenti $+5\,\mathrm{cm}$ e $-5\,\mathrm{cm}$ che si incontrano su una corda danno, nell'istante in cui coincidono, spostamento nullo in ogni punto. Gli impulsi proseguono poi invariati, ciascuno nel proprio verso, perché la sovrapposizione è una somma di spostamenti. Nell'istante della coincidenza la corda è rettilinea, ma i suoi punti hanno velocità trasversale non nulla e l'energia è tutta cinetica.
:::

:::richiamo{titolo="Formula di prostaferesi del coseno"}
Per ogni coppia di angoli $\alpha$ e $\beta$ vale $\cos\alpha+\cos\beta=2\cos\!\left(\dfrac{\alpha+\beta}{2}\right)\cos\!\left(\dfrac{\alpha-\beta}{2}\right)$.
:::

::::teorema{#interferenza-armonica titolo="Somma di due onde armoniche sfasate"}
Due onde con la stessa frequenza e la stessa ampiezza $A$, che si propagano nello stesso verso con differenza di fase $\delta$, hanno come somma
$$
A\cos(kx-\omega t)+A\cos(kx-\omega t+\delta)=2A\cos\!\left(\dfrac{\delta}{2}\right)\cos\!\left(kx-\omega t+\dfrac{\delta}{2}\right).
$$
L'ampiezza risultante è $2A\left|\cos\dfrac{\delta}{2}\right|$. Vale $2A$ per $\delta=2m\pi$ e si annulla per $\delta=(2m+1)\pi$, con $m$ intero. Se le due onde partono in fase da sorgenti diverse e arrivano in un punto dopo percorsi che differiscono di $\Delta r$, si ha $\delta=k\,\Delta r=\dfrac{2\pi\,\Delta r}{\lambda}$. Le onde si rinforzano per $\Delta r=m\lambda$ e si annullano per $\Delta r=\left(m+\dfrac{1}{2}\right)\lambda$.

Con $\lambda=0{,}50\,\mathrm{m}$, in un punto a $2{,}00\,\mathrm{m}$ e a $2{,}75\,\mathrm{m}$ dalle due sorgenti si ha $\Delta r=0{,}75\,\mathrm{m}=\dfrac{3}{2}\lambda$, quindi $\delta=3\pi$ e l'ampiezza è nulla. In un punto con $\Delta r=1{,}00\,\mathrm{m}=2\lambda$ si ha $\delta=4\pi$ e l'ampiezza è $2A$. Per $\delta=\dfrac{\pi}{2}$ l'ampiezza risultante è $2A\cos\dfrac{\pi}{4}=\sqrt{2}A\simeq1{,}41\,A$, come mostra il grafico.

::grafico{f="cos(pi*x);cos(pi*x+pi/2);sqrt(2)*cos(pi*x+pi/4)" xmin=0 xmax=4 ymin=-2 ymax=2 nomi="x,y/A" legenda="\text{onda 1};\text{onda 2};\text{somma}" titolo="Profili a $t=0$ di due onde sfasate di $\dfrac{\pi}{2}$ e della loro somma, di ampiezza $\sqrt{2}A$. Ascisse in metri, con $\lambda=2\,\mathrm{m}$"}

:::dimostrazione
Si pone $\alpha=kx-\omega t$ e $\beta=kx-\omega t+\delta$. La semisomma è $\dfrac{\alpha+\beta}{2}=kx-\omega t+\dfrac{\delta}{2}$ e la semidifferenza è $\dfrac{\alpha-\beta}{2}=-\dfrac{\delta}{2}$. Il coseno è pari, quindi $\cos\!\left(-\dfrac{\delta}{2}\right)=\cos\dfrac{\delta}{2}$ e la formula di prostaferesi dà l'uguaglianza enunciata. Il fattore $2A\cos\dfrac{\delta}{2}$ non dipende da $x$ e $t$, mentre il secondo coseno oscilla fra $-1$ e $1$, perciò l'ampiezza è $2A\left|\cos\dfrac{\delta}{2}\right|$. Il coseno di $\dfrac{\delta}{2}$ vale $\pm1$ se $\dfrac{\delta}{2}=m\pi$, cioè $\delta=2m\pi$, e vale $0$ se $\dfrac{\delta}{2}=\dfrac{\pi}{2}+m\pi$, cioè $\delta=(2m+1)\pi$. Infine una differenza di cammino $\Delta r$ equivale a una differenza di fase $k\,\Delta r$, perché la fase varia di $k$ per ogni metro.
:::
::::

## Onde stazionarie su una corda

::::teorema{#onde-stazionarie titolo="Nodi, ventri e armoniche"}
Su una corda ideale lunga $L$ e fissata ai due estremi, un singolo modo stazionario ha lunghezza d'onda e frequenza
$$
\lambda_n=\frac{2L}{n},
\qquad
f_n=\frac{nu}{2L},
\qquad n=1,2,3,\ldots
$$
I **nodi** sono punti in cui lo spostamento resta nullo in ogni istante. Fra due nodi consecutivi si trova un **ventre**, cioè un punto dove l'ampiezza dell'oscillazione è massima. I nodi consecutivi distano $\dfrac{\lambda_n}{2}$ e fra un nodo e il ventre adiacente la distanza è $\dfrac{\lambda_n}{4}$. Il modo $n=1$ è la fondamentale.

:::dimostrazione
Due onde sinusoidali uguali che viaggiano in versi opposti possono essere rappresentate da $A\sin(kx-\omega t)$ e $A\sin(kx+\omega t)$. Sommando con la formula di addizione del seno si ottiene
$$
y(x,t)=2A\sin(kx)\cos(\omega t).
$$
L'ampiezza locale è $2A|\sin(kx)|$, quindi i suoi zeri sono fissi nello spazio. Per avere un nodo in $x=L$, oltre a quello in $x=0$, deve valere $kL=n\pi$. Usando $k=\dfrac{2\pi}{\lambda_n}$ si trova $L=n\dfrac{\lambda_n}{2}$ e da $u=\lambda_n f_n$ segue la frequenza ammessa.
:::
::::

:::esempio{titolo="Terza armonica di una corda"}
Su una corda di $3\,\mathrm{m}$ con $u=60\,\mathrm{m/s}$, la fondamentale è $f_1=10\,\mathrm{Hz}$. La terza armonica ha frequenza $f_3=30\,\mathrm{Hz}$ e lunghezza d'onda $\lambda_3=2\,\mathrm{m}$, perché tre intervalli di un metro occupano tutta la corda. I nodi interni cadono quindi in $x=1\,\mathrm{m}$ e $x=2\,\mathrm{m}$. I tre ventri sono a metà degli intervalli fra i nodi. In alcuni istanti la corda è tutta sulla linea di equilibrio, ma i ventri la attraversano con velocità di modulo massimo. Solo i nodi restano fermi.

::grafico{f="sin(pi*x/3);sin(pi*x)" xmin=0 xmax=3 ymin=-1.3 ymax=1.3 nomi="x,profilo" legenda="\text{fondamentale};\text{terza armonica}" punti="0,0,pieno;1,0,pieno;2,0,pieno;3,0,pieno" titolo="Profili della fondamentale e della terza armonica. I punti evidenziati sono nodi della terza armonica. Ascisse in metri."}

:::

:::attenzione
I nodi di un modo non sono nodi degli altri modi. Su una corda di lunghezza $L=1{,}0\,\mathrm{m}$ fissata agli estremi, il punto di mezzo $x=0{,}50\,\mathrm{m}$ è un ventre della fondamentale, perché $\sin\dfrac{\pi\cdot0{,}50}{1{,}0}=1$, ed è un nodo della seconda armonica, perché $\sin\dfrac{2\pi\cdot0{,}50}{1{,}0}=\sin\pi=0$.
:::

:::esempio{titolo="Corda di chitarra"}
Una corda con $L=0{,}65\,\mathrm{m}$, $\mu=4{,}0\cdot10^{-3}\,\mathrm{kg/m}$ e tensione $F_T=80\,\mathrm{N}$ ha velocità $u=\sqrt{\dfrac{80}{4{,}0\cdot10^{-3}}}\,\mathrm{m/s}=\sqrt{20000}\,\mathrm{m/s}\simeq141\,\mathrm{m/s}$ e fondamentale $f_1=\dfrac{u}{2L}\simeq109\,\mathrm{Hz}$. Premendo la corda a metà della sua lunghezza, la parte vibrante diventa $L'=0{,}325\,\mathrm{m}$ e la frequenza raddoppia, a circa $218\,\mathrm{Hz}$, perché $f_1$ è inversamente proporzionale a $L$.
:::
