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

:::esempio{titolo="Posizione, velocità e verso del moto"}
Con $A=0{,}050\,\mathrm{m}$, $T=0{,}50\,\mathrm{s}$ e $\varphi=0$ si ha $\omega=4\pi\,\mathrm{rad/s}$. A $t=\dfrac{T}{4}=0{,}125\,\mathrm{s}$ la fase è $\dfrac{\pi}{2}$, quindi $x=0$ e $v=-4\pi\cdot 0{,}050\,\mathrm{m/s}\simeq -0{,}628\,\mathrm{m/s}$. A $t=\dfrac{3T}{4}$ la posizione è ancora $x=0$, ma il seno vale $-1$ e la velocità è positiva. Lo stesso punto del percorso corrisponde così a due stati distinti.

::grafico{f="cos(pi*x/250);-sin(pi*x/250)" xmin=0 xmax=500 ymin=-1.3 ymax=1.3 nomi="t,rapporto" legenda="\dfrac{x}{A};\dfrac{v}{\omega A}" punti="125,0,pieno;125,-1,pieno;375,0,pieno;375,1,pieno" titolo="In un periodo di 0,50 s il corpo attraversa l'equilibrio prima con velocità negativa, poi con velocità positiva. Tempi in millisecondi."}

:::

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

:::teorema{#energia-armonica titolo="Energia dell'oscillatore elastico"}
Per un oscillatore elastico ideale senza dissipazioni, scegliendo energia potenziale nulla all'equilibrio, l'energia meccanica è
$$
E=\frac{1}{2}mv^2+\frac{1}{2}kx^2
=\frac{1}{2}kA^2.
$$
L'ultima uguaglianza si ottiene valutando l'energia in uno dei due estremi. Lì $|x|=A$ e la velocità è nulla. A metà dello spostamento estremo, $x=\dfrac{A}{2}$, la parte elastica è $\dfrac{E}{4}$, quindi la parte cinetica è $\dfrac{3E}{4}$. Dalla conservazione dell'energia segue
$$
|v|=\sqrt{\frac{k}{m}(A^2-x^2)}.
$$
Questa relazione permette di ricavare il modulo della velocità da una posizione nota. Per il segno occorre il verso del moto in quell'istante.
:::

:::esempio{titolo="Bilancio in una posizione intermedia"}
Con $k=200\,\mathrm{N/m}$, $m=0{,}50\,\mathrm{kg}$ e $A=0{,}050\,\mathrm{m}$ si ha $E=0{,}25\,\mathrm{J}$. In $x=0{,}030\,\mathrm{m}$ l'energia potenziale vale $0{,}090\,\mathrm{J}$, quindi $K=0{,}160\,\mathrm{J}$. Da $K=\dfrac{1}{2}mv^2$ segue $|v|=0{,}80\,\mathrm{m/s}$. La velocità è negativa se in quel momento il corpo si avvicina a $x=0$, perché il corpo si trova a destra dell'equilibrio.
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

:::attenzione
La formula del periodo si fonda sull'approssimazione $\sin\theta\simeq\theta$. Per un'ampiezza di $60^\circ$ si ha $\theta=\dfrac{\pi}{3}\,\mathrm{rad}$ e $\sin\theta=\dfrac{\sqrt{3}}{2}$, circa il $17\%$ in meno di $\theta$. A grandi angoli la forza di richiamo si discosta dalla legge lineare e il periodo dipende anche dall'ampiezza.
:::

:::osservazione
L'attrito sottrae energia a un oscillatore e ne riduce l'ampiezza nel tempo. Una forza periodica esterna può compensare la dissipazione. In presenza di smorzamento debole, l'ampiezza stazionaria ha un massimo per una frequenza della forza prossima a quella propria del sistema. Questo è il fenomeno della **risonanza**. Per esempio una spinta data una volta ogni ciclo a un'altalena, nel verso in cui il sedile sta passando, aumenta l'energia a ogni spinta. La dissipazione limita l'ampiezza raggiunta.
:::

## Propagazione e lettura dei grafici

:::definizione{#onda titolo="Onda meccanica e velocità di propagazione"}
Un'**onda meccanica** è una perturbazione che si propaga attraverso un mezzo. Su una corda fissiamo l'asse $x$ lungo la corda a riposo. Il valore $y(x,t)$ è lo spostamento trasversale del punto della corda con posizione di equilibrio $x$. Durante il passaggio dell'onda, il punto si sposta lungo la direzione trasversale. Una cresta avanza lungo la corda perché punti successivi raggiungono il massimo in istanti successivi. La cresta e un punto materiale hanno quindi velocità diverse. In un'onda longitudinale, come un'onda sonora in un fluido, gli spostamenti locali sono paralleli alla direzione di propagazione.

La **lunghezza d'onda** $\lambda$ è la distanza fra due creste consecutive osservate nello stesso istante. Il **periodo** $T$ è il tempo fra il passaggio di due creste consecutive nello stesso punto. Poiché una cresta percorre $\lambda$ durante $T$, il modulo della velocità di propagazione è
$$
u=\frac{\lambda}{T}=\lambda f.
$$
:::

:::esempio{titolo="Una fotografia e una registrazione della stessa onda"}
Nel primo grafico $t=0$ è fissato e l'asse orizzontale rappresenta la posizione $x$. Le creste distano $2\,\mathrm{m}$, quindi $\lambda=2\,\mathrm{m}$. Il secondo grafico segue il solo punto $x=0$. L'asse orizzontale rappresenta il tempo $t$ e i massimi distano $0{,}20\,\mathrm{s}$, quindi $T=0{,}20\,\mathrm{s}$. L'onda si propaga a $u=\dfrac{2}{0{,}20}\,\mathrm{m/s}=10\,\mathrm{m/s}$.

::grafico{f="3*cos(pi*x)" xmin=0 xmax=4.2 ymin=-4 ymax=4 nomi="x,y (cm)" punti="0,3,pieno;2,3,pieno;4,3,pieno" titolo="Profilo a t = 0, con creste in x = 0 m, 2 m e 4 m. Ascisse in metri."}

::grafico{f="3*cos(pi*x/100)" xmin=0 xmax=400 ymin=-4 ymax=4 nomi="t,y (cm)" punti="0,3,pieno;200,3,pieno;400,3,pieno" titolo="Spostamento del punto x = 0, con massimi a t = 0 ms, 200 ms e 400 ms. Tempi in millisecondi."}

La distanza fra una cresta e il minimo adiacente è $\dfrac{\lambda}{2}=1\,\mathrm{m}$. La differenza verticale fra gli stessi punti è $6\,\mathrm{cm}$, il doppio dell'ampiezza, perché le ordinate sono $+3\,\mathrm{cm}$ e $-3\,\mathrm{cm}$. Le due misure appartengono ad assi differenti.
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

:::teorema{#velocita-su-corda titolo="Velocità su una corda tesa"}
Per piccole perturbazioni trasversali su una corda uniforme ideale, tesa da una forza $F_T$ e con massa per unità di lunghezza $\mu$, vale
$$
u=\sqrt{\frac{F_T}{\mu}}.
$$
Tendendo la stessa corda con una forza quattro volte maggiore, la velocità raddoppia. Se un tratto di corda lungo $2{,}0\,\mathrm{m}$ ha massa $20\,\mathrm{g}$, si ha $\mu=0{,}010\,\mathrm{kg/m}$. Con $F_T=100\,\mathrm{N}$ si ottiene $u=100\,\mathrm{m/s}$. La frequenza è imposta dalla sorgente. Al passaggio a una corda con diversa velocità di propagazione, i due tratti devono oscillare alla stessa frequenza nel punto di raccordo, perciò cambia $\lambda=\dfrac{u}{f}$.
:::

## Sovrapposizione e riflessione

:::teorema{#sovrapposizione titolo="Somma delle perturbazioni"}
Nel regime lineare, lo spostamento risultante è la somma algebrica degli spostamenti che le stesse onde produrrebbero separatamente. Per due onde uguali in fase, la somma ha ampiezza $2A$. Per due onde uguali in opposizione di fase, lo spostamento risultante si annulla. Se sono in opposizione ma hanno ampiezze $5\,\mathrm{cm}$ e $2\,\mathrm{cm}$, nel punto di sovrapposizione l'ampiezza risultante è $3\,\mathrm{cm}$. Quando la prima perturbazione è a $+5\,\mathrm{cm}$, la seconda è a $-2\,\mathrm{cm}$ e lo spostamento totale è $+3\,\mathrm{cm}$.

La somma si applica agli **spostamenti**. Le grandezze energetiche sono quadratiche in ampiezza a parità delle altre condizioni, quindi la distribuzione dell'energia dipende anche dalla fase relativa.
:::

:::esempio{titolo="Impulso riflesso ai due tipi di estremo"}
Supponiamo che arrivi un impulso con spostamento positivo. All'estremo fisso lo spostamento totale deve essere nullo a ogni istante. L'impulso riflesso deve quindi fornire uno spostamento opposto a quello incidente all'estremo e torna invertito. Un estremo libero ideale può spostarsi. La condizione al bordo è di pendenza nulla e gli impulsi incidente e riflesso hanno lo stesso segno. In entrambi i casi l'impulso riflesso si propaga in verso opposto a quello incidente.
:::

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

::grafico{f="sin(pi*x/3);sin(pi*x)" xmin=0 xmax=3 ymin=-1.3 ymax=1.3 nomi="x,profilo" legenda="fondamentale;terza armonica" punti="0,0,pieno;1,0,pieno;2,0,pieno;3,0,pieno" titolo="Profili della fondamentale e della terza armonica. I punti evidenziati sono nodi della terza armonica. Ascisse in metri."}

:::
