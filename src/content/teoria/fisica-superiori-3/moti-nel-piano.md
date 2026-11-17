---
titolo: "Moti nel piano"
sommario: "Componenti e velocità, lanci nel vuoto, traiettorie e accelerazione nel moto circolare."
---

## Descrivere il moto in due dimensioni

:::definizione{#componenti-moto titolo="Posizione, velocità e accelerazione nel piano"}
La posizione ha due coordinate che dipendono dallo stesso tempo. Nel piano, $(x(t),y(t))$ determina il punto materiale. Eliminando $t$ si può ricavare la **traiettoria**, ossia la curva dei punti attraversati. La traiettoria da sola non dice quando il corpo passa per ciascun punto o in quale verso lo percorre.

La **velocità** ha componenti $v_x$ e $v_y$, stimate con le pendenze delle due leggi orarie in intervalli sempre più brevi. È tangente alla traiettoria nei punti regolari con velocità non nulla e punta nel verso del moto. Da $v_x=6\,\mathrm{m/s}$ e $v_y=-8\,\mathrm{m/s}$ si trova un modulo di $10\,\mathrm{m/s}$ e un verso verso destra e in basso. Sommare $6$ e $-8$ mescolerebbe contributi lungo assi perpendicolari.

L'accelerazione è la variazione vettoriale della velocità nel tempo. Una velocità può cambiare sia di modulo sia di direzione. Perciò un moto a rapidità costante può avere accelerazione diversa da zero, come accade quando un punto descrive una circonferenza. In un lancio senza resistenza dell'aria, invece, l'accelerazione è verticale e costante in prossimità del suolo.
:::

:::osservazione{titolo="Leggere un angolo e una proiezione"}
Per la velocità $(6\,;-8)\,\mathrm{m/s}$ l'angolo misurato dal semiasse $x$ positivo è $\theta=-\arctan\left(\dfrac{8}{6}\right)\simeq-53^\circ$. L'angolo negativo si misura in senso orario, in accordo con la componente orizzontale positiva e quella verticale negativa. Una telecamera orientata lungo il versore $\hat e=\left(\dfrac35\,;\dfrac45\right)$ rileva la componente della velocità in quella direzione. Si moltiplicano le componenti della velocità per le componenti corrispondenti del versore e si somma. Si ottiene $\vec v\cdot\hat e=\left(6\cdot\dfrac35-8\cdot\dfrac45\right)\,\mathrm{m/s}=-2{,}8\,\mathrm{m/s}$. Il segno indica che la proiezione si muove in verso opposto a $\hat e$.
:::

:::esempio{titolo="Una traiettoria percorsa con due ritmi"}
Due carrelli idealizzati seguono $A(t)=(2t\,;t^2)$ e $B(t)=(4t\,;4t^2)$ in unità SI per $t\geq0$. Per A si sostituisce $t=\dfrac{x}{2}$ nella legge di $y$. Per B si sostituisce $t=\dfrac{x}{4}$. Entrambi i calcoli danno $y=\dfrac{x^2}{4}$ per $x\geq0$. Il punto $P=(2\,;1)\,\mathrm m$ appartiene alla stessa curva e viene raggiunto da A dopo un secondo e da B dopo mezzo secondo.

Le componenti della velocità sono le pendenze istantanee di $x(t)$ e $y(t)$. In P valgono $(2\,;2)\,\mathrm{m/s}$ per A e $(4\,;4)\,\mathrm{m/s}$ per B. Le due frecce hanno quindi la stessa direzione tangente e B ha modulo doppio. Poiché la componente verticale cresce come $2t$ per A e come $8t$ per B, le accelerazioni sono verticali con moduli rispettivamente $2$ e $8\,\mathrm{m/s^2}$. La stessa curva è compatibile con velocità e accelerazioni diverse.

::grafico{curve="t,t^2/4,0,3.7" punti="2,1,pieno" vettori="2,1,3,2;2,1,2.5,1.5" segmenti="2,0,2,1;0,1,2,1" etichette="1.73,1.24,P;2.46,1.81,v A;3.03,2.12,v B" xmin=-0.2 xmax=4.05 ymin=-0.3 ymax=3.8 uguale=1 nomi="x (m),y (m)" titolo="I due carrelli percorrono la stessa parabola. In P, le lunghezze delle frecce stanno come le rapidità."}
:::

## Il lancio orizzontale

:::teorema{#lancio-orizzontale titolo="Moti indipendenti lungo gli assi"}
Supponiamo che la resistenza dell'aria sia trascurabile, che il suolo sia orizzontale e che $g$ sia uniforme. Si prende $x$ orizzontale e $y$ verso l'alto. Se il corpo parte da $(0,h)$ con velocità orizzontale $v_0>0$, le leggi sono
$$
x(t)=v_0t,\qquad y(t)=h-\tfrac12gt^2.
$$
Il moto verticale parte da fermo e determina il tempo di arrivo $t_f=\sqrt{\dfrac{2h}{g}}$. Il moto orizzontale procede senza accelerazione durante lo stesso tempo. La distanza di arrivo è $R=v_0t_f$, quindi dipende linearmente da $v_0$ e come radice quadrata da $h$. Quadruplicare $h$ raddoppia il tempo e, a $v_0$ fissata, anche la distanza.

Con $h=5\,\mathrm m$, $v_0=6\,\mathrm{m/s}$ e $g=10\,\mathrm{m/s^2}$ si ha $t_f=1\,\mathrm s$ e $R=6\,\mathrm m$. La velocità poco prima dell'impatto ha componenti $(6,-10)\,\mathrm{m/s}$. La sua direzione è obliqua perché la componente orizzontale rimane quella iniziale e quella verticale aumenta in modulo. Scrivendo $t=x/v_0$ nella legge verticale si ricava $y=h-\dfrac{g}{2v_0^2}x^2$. Si usa il tratto da $x=0$ a $x=R$, fino al contatto.
:::

::grafico{curve="6*t,5-5*t^2,0,1" punti="0,5,pieno;6,0,pieno" vettori="0,5,2,5,v_0" xmin=-0.6 xmax=7 ymin=-0.5 ymax=6.5 nomi="x (m),y (m)" titolo="Il lancio orizzontale produce una parabola fino al suolo"}

:::esempio{titolo="Stimare l'accelerazione dai fotogrammi"}
Una telecamera misura la posizione di una sfera lanciata orizzontalmente. L'incertezza sulle quote è circa $0{,}02\,\mathrm m$. Si prende come riferimento la prima lettura, con $x=0$ e $h=4{,}90\,\mathrm m$. Le ascisse aumentano di un metro ogni quinto di secondo, in accordo con una rapidità orizzontale di $5\,\mathrm{m/s}$. Per le quote previste si usa $g=9{,}80\,\mathrm{m/s^2}$.

| $t$ (s) | $x$ (m) | $y$ letta (m) | $y$ prevista (m) |
| ---: | ---: | ---: | ---: |
| 0,00 | 0,00 | 4,90 | 4,900 |
| 0,20 | 1,00 | 4,70 | 4,704 |
| 0,40 | 2,00 | 4,10 | 4,116 |

Da $h-y=\tfrac12gt^2$ segue che il grafico della discesa in funzione di $t^2$ è una retta con pendenza $\dfrac g2$. L'ultima lettura dà $h-y=0{,}80\,\mathrm m$ a $t^2=0{,}16\,\mathrm{s^2}$, da cui $g\simeq10\,\mathrm{m/s^2}$. Con $9{,}80\,\mathrm{m/s^2}$ la differenza fra quota letta e prevista è di $0{,}016\,\mathrm m$ in modulo. Entrambi i valori di $g$ sono compatibili con queste letture. Per distinguerli servirebbero quote più precise oppure fotogrammi più distanti nel tempo, sempre prima del contatto.

La stima si può ottenere anche dagli ultimi due fotogrammi. Sottraendo le equazioni delle quote si elimina $h$. Questo è utile se il lancio non compare tra i fotogrammi ma si conosce il tempo trascorso dalla partenza. La differenza delle quote è $0{,}60\,\mathrm m$ e quella dei quadrati dei tempi è $0{,}12\,\mathrm{s^2}$. Anche in questo caso $g\simeq10\,\mathrm{m/s^2}$, poiché il rapporto misura metà di $g$.

::grafico{f="4.9*x" punti="0,0,pieno;0.04,0.2,pieno;0.16,0.8,pieno" segmenti="0.04,0,0.04,0.2;0.16,0,0.16,0.8" etichette="0.032,-0.069,0,04;0.152,-0.069,0,16;0.043,0.268,0,20;0.146,0.873,0,80" xmin=0 xmax=0.188 ymin=0 ymax=1 nomi="t² (s²),h − y (m)" legenda="g=9{,}80\,\mathrm{m/s^2}" titolo="Le misure della caduta in funzione del tempo al quadrato risultano vicine alla retta prevista."}
:::

## Il lancio obliquo

:::teorema{#lancio-obliquo titolo="Tempo di volo, quota massima e gittata"}
Sia $\theta$ l'angolo del lancio dal semiasse positivo $x$. Con partenza da $(0,h)$ e assenza di resistenza, le componenti iniziali sono $v_{0x}=v_0\cos\theta$ e $v_{0y}=v_0\sin\theta$. Pertanto $x=v_{0x}t$ e $y=h+v_{0y}t-\frac12gt^2$. Se $v_{0y}>0$, all'apice si ha $v_y=v_{0y}-gt=0$. L'aumento di quota è $H=\dfrac{v_{0y}^2}{2g}$. A quell'istante la velocità è ancora orizzontale se $v_{0x}$ non è nullo.

Se partenza e arrivo sono alla stessa quota, la prima soluzione di $y(t)=h$ è il lancio, $t=0$. La seconda dà $t_f=2v_{0y}/g$. Si ricava la gittata
$$
R=\frac{2v_{0x}v_{0y}}g=\frac{v_0^2\sin(2\theta)}g .
$$
Per $0<\theta<90^\circ$ e $v_0$ fissata, il seno raggiunge il massimo a $2\theta=90^\circ$. Angoli complementari hanno la stessa gittata in queste condizioni, perché $\sin\alpha=\sin(180^\circ-\alpha)$. I tempi di volo e le altezze massime sono invece diversi, perché dipendono dalla componente verticale.

Se la quota di arrivo è diversa, si deve risolvere la legge verticale con la nuova quota. Nel caso $x=8t$, $y=15+5t-5t^2$ si raggiunge il suolo a $t=(1+\sqrt{13})/2\,\mathrm s\simeq2{,}30\,\mathrm s$. Usare la formula della stessa quota darebbe $1\,\mathrm s$, che corrisponde invece al ritorno all'altezza iniziale di quindici metri.
:::

::grafico{curve="8*t,15+5*t-5*t^2,0,2.302775638" punti="0,15,pieno,L;4,16.25,pieno,A;8,15,pieno,P;18.4222051,0,pieno" etichette="17.85,1.2,I" segmenti="0,15,8,15" xmin=-0.5 xmax=21 ymin=-0.5 ymax=18.5 nomi="x (m),y (m)" titolo="Il ritorno alla quota iniziale precede l'impatto al suolo"}

:::esempio{titolo="Due passaggi alla stessa quota"}
Una pallina parte da quota $1{,}5\,\mathrm m$ a rapidità orizzontale $4\,\mathrm{m/s}$. A quota $5{,}25\,\mathrm m$ si osservano due passaggi, dopo $0{,}5\,\mathrm s$ e $1{,}5\,\mathrm s$. Si trascura l'aria e si usa $g=10\,\mathrm{m/s^2}$. Dato che $v_y$ diminuisce linearmente, i due passaggi alla stessa quota sono simmetrici rispetto all'apice. Infatti, sottraendo le due equazioni della quota si ottiene
$$
v_{0y}=\frac{g(t_1+t_2)}{2}=10\,\mathrm{m/s}.
$$
L'apice è a $t=1\,\mathrm s$, perciò la quota massima è $(1{,}5+10-5)\,\mathrm m=6{,}5\,\mathrm m$. Alla prima osservazione $x=2\,\mathrm m$ e la pallina sale a $v_y=5\,\mathrm{m/s}$. Alla seconda $x=6\,\mathrm m$ e la pallina scende a $v_y=-5\,\mathrm{m/s}$. Due letture della stessa quota possono dunque identificare luoghi e versi diversi.

::grafico{curve="4*t,1.5+10*t-5*t^2,0,2.140175425" punti="0,1.5,pieno;2,5.25,pieno;4,6.5,pieno;6,5.25,pieno" segmenti="2,5.25,6,5.25;2,0,2,5.25;6,0,6,5.25" etichette="0.14,1.23,L;1.76,5.61,P;4.02,6.95,A;6.1,5.56,Q" xmin=-0.2 xmax=9.2 ymin=-0.5 ymax=8 nomi="x (m),y (m)" titolo="La stessa quota corrisponde a P in salita e Q in discesa. A è il punto più alto."}
:::

:::osservazione{titolo="Verificare entrambe le coordinate di un punto"}
Nel lancio precedente, entrambi gli istanti osservati danno la quota $5{,}25\,\mathrm m$. Per verificare se la pallina attraversa a quella quota un'apertura a $x=5\,\mathrm m$, la legge orizzontale dà $t=\dfrac54\,\mathrm s$. In quell'istante la pallina è a $y=1{,}5+10\cdot1{,}25-5\cdot1{,}25^2\simeq6{,}19$, in metri, quindi passa sopra l'apertura. Per raggiungere un punto assegnato occorre che le due coordinate coincidano nello stesso istante.
:::

:::esempio{titolo="Stessa gittata, apici diversi"}
Due lanci partono e terminano entrambi a quota zero. Le componenti iniziali sono $(8\,;6)\,\mathrm{m/s}$ e $(6\,;8)\,\mathrm{m/s}$. Entrambi partono a $10\,\mathrm{m/s}$ e gli angoli sono complementari perché si scambiano le componenti positive. Con $g=10\,\mathrm{m/s^2}$ il primo volo dura $1{,}2\,\mathrm s$ e il secondo $1{,}6\,\mathrm s$. La distanza è $9{,}6\,\mathrm m$ in entrambi i casi. Il lancio più inclinato sale di $3{,}2\,\mathrm m$, mentre il primo sale di $1{,}8\,\mathrm m$. Per valutare il passaggio sopra un ostacolo occorre conoscere anche la forma della traiettoria. A metà gittata ciascun corpo si trova al proprio apice, quindi un bordo a quota $2{,}5\,\mathrm m$ in quella posizione viene superato dal secondo corpo.

::grafico{curve="8*t,6*t-5*t^2,0,1.2;6*t,8*t-5*t^2,0,1.6" punti="4.8,1.8,pieno;4.8,3.2,pieno;9.6,0,pieno" segmenti="4.8,0,4.8,3.2" etichette="4.98,1.98,A;4.98,3.38,B;9.65,0.27,I" xmin=0 xmax=10.55 ymin=-0.15 ymax=4 nomi="x (m),y (m)" legenda="A;B" titolo="Le due traiettorie arrivano in I. Gli apici si trovano alla stessa ascissa e a quote diverse."}
:::

## Angoli e velocità angolare

:::definizione{#radianti titolo="Il radiante"}
Un angolo in radianti è il rapporto tra l'arco orientato $s$ e il raggio $r$: $\theta=\dfrac{s}{r}$. Un giro è $2\pi$ radianti, quindi $180^\circ=\pi\,\mathrm{rad}$. La velocità angolare misura la variazione di angolo per unità di tempo. Nel moto circolare uniforme la rapidità angolare è $\omega=\dfrac{2\pi}{T}=2\pi f$, dove $T$ è il periodo e $f$ la frequenza. Se un rotore compie trenta giri al minuto, la frequenza è mezzo giro al secondo, quindi $\omega=\pi\,\mathrm{rad/s}$.

Da $s=r\theta$ segue $v_t=r\omega$ quando $\theta$ si misura in radianti. A raggio doppio, con la stessa velocità angolare, il punto percorre un arco doppio nello stesso tempo. Tutti i punti di un disco rigido compiono un giro in uno stesso periodo, ma quelli più lontani dall'asse hanno velocità tangenziale maggiore. L'angolo esprime quanto il corpo ruota e il raggio trasforma quella rotazione in una distanza.
:::

:::esempio{titolo="Ricostruire una rotazione da due foto"}
Due foto distanti $0{,}20\,\mathrm s$ mostrano una tacca prima a destra del centro e poi direttamente sopra. Il disco gira uniformemente in senso antiorario. Fra le due immagini la tacca compie almeno un quarto di giro e può aver percorso anche giri completi. La rotazione è quindi $\Delta\theta=\dfrac{\pi}{2}+2k\pi$, con $k$ intero non negativo.

Se un'osservazione continua conferma che fra le due foto è trascorso meno di un giro, si ha $k=0$. Dividendo l'angolo per la durata si ottiene $\omega=\dfrac{5\pi}{2}\,\mathrm{rad/s}$. Una velocità angolare superiore di $10\pi\,\mathrm{rad/s}$ produrrebbe le stesse due immagini dopo un giro supplementare. Contare i passaggi intermedi oppure infittire le foto consente di risolvere questa ambiguità.

Se si conoscono soltanto le posizioni e si esclude un giro intero, resta comunque da determinare il verso. Una rotazione oraria di tre quarti di giro collega gli stessi due punti. Con angoli positivi in senso antiorario si avrebbe $\omega=-\dfrac{15\pi}{2}\,\mathrm{rad/s}$. Entrambi i calcoli si riferiscono allo stesso intervallo.

::grafico{curve="cos(t),sin(t),0,6.283185307;0.4*cos(t),0.4*sin(t),0,1.570796327" punti="1,0,pieno;0,1,pieno" segmenti="0,0,1,0;0,0,0,1" etichette="1.05,0.13,A;0.1,1.08,B;0.36,0.34,90°" xmin=-1.35 xmax=1.5 ymin=-1.35 ymax=1.48 uguale=1 nomi="x,y" titolo="Le due foto fissano A e B. L'arco interno indica il quarto di giro e la tacca può avere compiuto altri giri."}
:::

## Accelerazione centripeta

:::teorema{#centripeta titolo="Variazione della direzione della velocità"}
Su una circonferenza, la velocità è tangente e perpendicolare al raggio. Nel moto circolare uniforme le frecce velocità hanno tutte la stessa lunghezza, ma a istanti diversi hanno orientamenti diversi. La differenza fra due velocità vicine ha modulo circa $v\,|\Delta\theta|$ per un angolo molto piccolo $\Delta\theta$, misurato in radianti. Dividendo per il tempo e usando $\omega=\dfrac vr$ si ottiene
$$
a_c=v\omega=\frac{v^2}r=\omega^2r .
$$
Nel limite la direzione della variazione punta verso il centro. Per effetto dell'accelerazione, la velocità segue il passaggio alla nuova tangente e la traiettoria si piega.

La forma più conveniente dipende dai dati. A velocità lineare fissata, una curva di raggio dimezzato richiede accelerazione doppia. A velocità angolare fissata, invece, il punto su un disco a raggio doppio ha accelerazione doppia. L'apparente differenza è dovuta al fatto che nel secondo confronto anche il modulo della velocità raddoppia.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.2832" vettori="2,0,2,1.4,v;2,0,0.9,0,a_c" xmin=-2.5 xmax=2.8 ymin=-2.5 ymax=2.5 uguale=1 nomi="x (m),y (m)" titolo="Nel punto a destra l'accelerazione è rivolta verso il centro"}

:::osservazione{titolo="Approssimare l'accelerazione con due misure"}
Un punto gira su raggio $3\,\mathrm m$ a $6\,\mathrm{m/s}$. Dopo un quarto di giro antiorario da destra, la velocità cambia da $(0\,;6)\,\mathrm{m/s}$ a $(-6\,;0)\,\mathrm{m/s}$. Il modulo della differenza è $6\sqrt2\,\mathrm{m/s}$. La durata è $\dfrac{\pi}{4}\,\mathrm s$, dato che $\omega=2\,\mathrm{rad/s}$. Si trova un'accelerazione media di modulo $\dfrac{24\sqrt2}{\pi}\,\mathrm{m/s^2}\simeq10{,}8\,\mathrm{m/s^2}$, mentre il modulo istantaneo vale $12\,\mathrm{m/s^2}$.

Se tra le due letture passa meno di un giro, la differenza fra le due velocità è una corda lunga $2v\sin\left(\dfrac{|\Delta\theta|}{2}\right)$. Poiché la durata è proporzionale all'angolo, il rapporto fra il modulo dell'accelerazione media e quello istantaneo vale
$$
\frac{|\vec a_m|}{a_c}
=\frac{2\sin\left(\dfrac{|\Delta\theta|}{2}\right)}{|\Delta\theta|}.
$$
Per un quarto di giro questo rapporto è circa $0{,}900$. Su un arco di $10^\circ$ è circa $0{,}999$. L'approssimazione della corda con l'arco migliora quando si riduce la separazione fra le misure.

::grafico{vettori="0,0,0,6;0,0,-6,0;0,6,-6,0" punti="0,6,pieno;-6,0,pieno" etichette="0.35,3.4,v₁;-4.55,-0.66,v₂;-3.88,3.2,Δv" xmin=-7 xmax=1.6 ymin=-1.15 ymax=7 uguale=1 nomi="vₓ (m/s),vᵧ (m/s)" titolo="Con le due velocità applicate nell'origine, la variazione è il vettore dalla prima punta alla seconda."}
:::

## Moto circolare non uniforme

:::osservazione{#tangenziale titolo="Due componenti dell'accelerazione"}
Nel moto circolare non uniforme cambia anche il modulo della velocità. La componente tangenziale vale $a_t=\dfrac{\Delta v}{\Delta t}$ come media della variazione di rapidità lungo il tratto. Istante per istante si considera il limite su intervalli piccoli. Un segno negativo, prendendo positiva la tangente lungo il moto, indica che il corpo rallenta. La componente radiale resta $a_c=\dfrac{v^2}{r}$ verso il centro.

Le due direzioni sono perpendicolari, dunque $a=\sqrt{a_c^2+a_t^2}$. Con $v=4\,\mathrm{m/s}$, $r=4\,\mathrm m$ e $a_t=3\,\mathrm{m/s^2}$, l'accelerazione radiale vale $4\,\mathrm{m/s^2}$ e il modulo totale è $5\,\mathrm{m/s^2}$. Se il corpo rallenta con $a_t=-3\,\mathrm{m/s^2}$, il modulo rimane cinque ma si inclina all'indietro rispetto al moto. Il segno conta quando si disegna la direzione.

Se la curva è sempre la stessa circonferenza, nel momento in cui il corpo passa da velocità nulla la componente radiale è nulla. Può comunque esserci accelerazione tangenziale, come per una ruota che parte aumentando la velocità angolare. A velocità non nulla, annullare l'accelerazione tangenziale lascia una componente centripeta positiva in modulo.
:::

::grafico{curve="4*cos(t),4*sin(t),0,6.2832" vettori="4,0,0.8,0,a_c;4,0,4,2.4,a_t;4,0,0.8,2.4,a" segmenti="0.8,0,0.8,2.4;0.8,2.4,4,2.4" xmin=-5 xmax=5.4 ymin=-5 ymax=5 uguale=1 nomi="x (m),y (m)" titolo="La risultante è la diagonale del parallelogramma delle componenti"}

:::osservazione{titolo="Accelerazione angolare fra immagini successive"}
Se la velocità angolare varia a ritmo costante, l'accelerazione angolare è $\alpha=\dfrac{\Delta\omega}{\Delta t}$. Si possono confrontare le velocità angolari medie in due intervalli successivi di $0{,}20\,\mathrm s$. Per avanzamenti di $0{,}30\,\mathrm{rad}$ e $0{,}70\,\mathrm{rad}$, le due medie sono $1{,}5$ e $3{,}5\,\mathrm{rad/s}$. Poiché la velocità angolare varia linearmente, ciascuna media coincide con il valore istantaneo al centro del proprio intervallo. I due centri sono distanti $0{,}20\,\mathrm s$, perciò $\alpha=\dfrac{3{,}5-1{,}5}{0{,}20}\,\mathrm{rad/s^2}=10\,\mathrm{rad/s^2}$. A raggio $0{,}40\,\mathrm m$ l'accelerazione tangenziale è $r\alpha=4\,\mathrm{m/s^2}$ nel verso degli angoli crescenti. Nello stesso tempo la componente radiale cambia perché dipende dal quadrato della velocità angolare istantanea.
:::

:::esempio{titolo="Ricavare rapidità e frenata da un sensore"}
Sul bordo di un disco di raggio $4\,\mathrm m$, un punto passa per l'estremo destro della circonferenza muovendosi verso l'alto. Un sensore ricostruisce $\vec a=(-4\,;-3)\,\mathrm{m/s^2}$ con $x$ verso destra e $y$ verso l'alto. Al passaggio la direzione verso il centro è a sinistra e la tangente positiva è verso l'alto, quindi $a_c=4\,\mathrm{m/s^2}$ e $a_t=-3\,\mathrm{m/s^2}$. Risolvendo $a_c=\dfrac{v^2}{r}$ si ricava $v=\sqrt{4\cdot4}\,\mathrm{m/s}=4\,\mathrm{m/s}$.

Se la frenata tangenziale resta costante, con $t$ contato dal passaggio la rapidità in unità SI è $v(t)=4-3t$ fino all'arresto a $t=\dfrac43\,\mathrm s$. La componente centripeta decresce come $a_c(t)=\dfrac{(4-3t)^2}{4}$ e si annulla all'arresto. Il modulo dell'accelerazione tende a $3\,\mathrm{m/s^2}$ appena prima che il punto si fermi. Il modello di frenata descrive l'intervallo in cui si conserva il verso iniziale del moto.

::grafico{curve="t,(4-3*t)^2/4,0,1.333333333;t,-3,0,1.333333333" punti="0,4,pieno;1.333333333,0,pieno;1.333333333,-3,pieno" segmenti="1.333333333,0,1.333333333,-3" etichette="1.28,0.57,4/3" xmin=0 xmax=1.58 ymin=-4 ymax=5 nomi="t (s),a (m/s²)" legenda="a_c;a_t" titolo="Durante la frenata la componente tangenziale resta costante e quella centripeta scende a zero."}
:::
