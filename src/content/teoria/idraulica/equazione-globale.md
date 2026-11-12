---
titolo: Equazione globale dell'equilibrio dinamico e spinte delle correnti
sommario: Il volume di controllo e il flusso di quantità di moto, l'equazione globale in moto permanente con le spinte sulle sezioni, il peso e la reazione delle pareti, e il calcolo delle spinte su gomiti, riduzioni, ugelli, diffusori, pale, piastre e paratoie.
---

## Il volume di controllo

Il teorema di Bernoulli lega fra loro i carichi di due sezioni e risponde a domande sull'energia della corrente. Per sapere con quale forza l'acqua preme su un gomito, su un ugello o su una paratoia serve un bilancio di forze, e il bilancio si scrive su una porzione di fluido scelta da chi risolve il problema.

:::definizione{#volume-di-controllo titolo="Volume di controllo e superficie di controllo"}
Si chiama **volume di controllo** una regione fissa dello spazio, occupata dal fluido, scelta per scrivere un bilancio; la sua frontiera è la **superficie di controllo**. La superficie di controllo si compone di due parti: le **sezioni di passaggio**, attraverso le quali il fluido entra ed esce, e la **superficie di contorno**, costituita dalle pareti solide e dalle eventuali superfici libere, attraverso la quale non passa portata.

Le particelle di fluido attraversano il volume di controllo, mentre la regione resta ferma nello spazio. Per una condotta che compie un gomito, il volume di controllo è il tronco di condotta compreso fra una sezione a monte del gomito e una sezione a valle, e la superficie di contorno è la parete del gomito.

::schema{nodi="A,0,1.2,-;B,6,1.2,-" condotte="A-B,1.6" tratteggi="0.9,0.25 0.9,2.15;5.1,0.25 5.1,2.15" frecce="1.5,1.2,2.5,1.2,v_1;3.5,1.2,4.5,1.2,v_2" etichette="0.9,2.45,1;5.1,2.45,2" riferimento=0 titolo="Volume di controllo in un tronco di condotta: le sezioni $1$ e $2$ sono le sezioni di passaggio, la parete è la superficie di contorno"}
:::

:::osservazione{#scelta-del-volume titolo="Scelta delle sezioni di passaggio"}
Le sezioni di passaggio si scelgono dove la corrente è *lineare*, cioè dove le traiettorie sono rettilinee e parallele fra loro. In una sezione di corrente lineare la pressione segue la distribuzione idrostatica, quindi la spinta del fluido esterno sulla sezione si calcola con le formule della statica dei fluidi; dove le traiettorie sono curve, come dentro un gomito o sopra la soglia di uno stramazzo, la distribuzione della pressione non è idrostatica e la sezione non si presta al calcolo.

Per il gomito di una condotta le due sezioni si prendono quindi nei tratti rettilinei che lo precedono e lo seguono, e non nella curva. Il volume di controllo si disegna sempre, con il contorno tratteggiato e le sezioni numerate, perché ogni termine dell'equazione dipende dal volume scelto.
:::

## Il flusso di quantità di moto

Il bilancio di forze su un volume attraversato dal fluido si ottiene dal teorema della quantità di moto della meccanica, applicato alla massa che in un dato istante occupa il volume di controllo.

:::richiamo{titolo="Teorema della quantità di moto"}
Per un sistema materiale di quantità di moto $\vec{P} = \displaystyle\sum_i m_i \vec{v}_i$ soggetto a forze esterne di risultante $\vec{R}^{(e)}$ vale
$$
\frac{d\vec{P}}{dt} = \vec{R}^{(e)} ,
$$
cioè la derivata rispetto al tempo della quantità di moto del sistema è uguale al risultante delle sole forze esterne. Si rimanda all'argomento sulla quantità di moto e gli urti di Fisica 1.
:::

:::definizione{#flusso-di-quantita-di-moto titolo="Flusso di quantità di moto attraverso una sezione"}
Si chiama **flusso di quantità di moto** attraverso una sezione la quantità di moto che il fluido trasporta nell'unità di tempo attraverso quella sezione. Attraverso l'areola $dA$ passa nell'unità di tempo la massa $\rho\,v\,dA$, che trasporta la quantità di moto $\rho\,v^2\,dA$ diretta come la velocità; integrando su tutta la sezione e assumendo la velocità normale alla sezione si ottiene
$$
\vec{M} = \rho \int_A v^2\,dA\;\hat{t} = \beta\,\rho\,Q\,v\;\hat{t} ,
$$
dove $v = \dfrac{Q}{A}$ è la velocità media, $\hat{t}$ il versore della velocità e $\beta$ il coefficiente di ragguaglio della quantità di moto. Con $\beta = 1$ il flusso di quantità di moto vale $\rho Q v$ e si misura in newton, come una forza.

In una condotta di diametro $D = 200\,\mathrm{mm}$ che porta $Q = 50\,\mathrm{L/s}$ la velocità media è $v = 1{,}59\,\mathrm{m/s}$ e il flusso di quantità di moto vale $\rho Q v = 1000 \cdot 0{,}050 \cdot 1{,}59 = 79{,}6\,\mathrm{N}$.
:::

:::definizione{#coefficiente-beta titolo="Coefficiente di ragguaglio della quantità di moto"}
Il **coefficiente di ragguaglio della quantità di moto** è il numero
$$
\beta = \frac{1}{v^2 A}\int_A u^2\,dA ,
$$
dove $u$ è la velocità locale e $v$ la velocità media; esso corregge il flusso di quantità di moto calcolato con la sola velocità media. Risulta $\beta \ge 1$, con l'uguaglianza quando la velocità è uniforme sulla sezione. Nel moto turbolento in condotta il profilo di velocità è appiattito e $\beta$ vale da $1{,}02$ a $1{,}05$; nel moto laminare, con profilo parabolico, $\beta = \dfrac{4}{3}$.

Nelle applicazioni correnti si pone $\beta = 1$, come per il coefficiente $\alpha$ del teorema di Bernoulli, perché l'errore che ne segue sul flusso di quantità di moto è di pochi punti percentuali e risulta minore dell'incertezza sui dati. In tutto l'argomento si assume quindi $\beta = 1$, salvo indicazione diversa.
:::

## L'equazione globale dell'equilibrio dinamico

Nel bilancio compaiono le spinte che il fluido esterno esercita sulle sezioni di passaggio, perciò si comincia dal calcolo di queste.

:::definizione{#spinta-sulle-sezioni titolo="Spinta sulle sezioni di passaggio"}
Si chiama **spinta sulla sezione** la forza che il fluido posto al di fuori del volume di controllo esercita sulla sezione di passaggio attraverso le pressioni:
$$
\vec{\Pi} = p_G\,A\;\hat{n} ,
$$
dove $A$ è l'area della sezione, $p_G$ la pressione nel suo baricentro e $\hat{n}$ il versore normale alla sezione **diretto verso l'interno** del volume di controllo. Nella sezione di ingresso $\hat{n}$ ha il verso della velocità, in quella di uscita il verso opposto.

L'espressione vale perché la sezione è di corrente lineare, quindi su di essa la pressione ha distribuzione idrostatica e la risultante delle pressioni su una superficie piana è il prodotto della pressione nel baricentro per l'area. Per una condotta di diametro $D = 200\,\mathrm{mm}$ con pressione relativa $p = 300\,\mathrm{kPa}$ sull'asse, la spinta vale $\Pi = 300 \cdot 0{,}0314 = 9{,}42\,\mathrm{kN}$, cioè un valore molto maggiore del flusso di quantità di moto della stessa condotta, che vale $79{,}6\,\mathrm{N}$. Si rimanda all'argomento sulle spinte su superfici piane e curve.
:::

::::teorema{#equazione-globale titolo="Equazione globale dell'equilibrio dinamico"}
Sia un fluido incomprimibile in moto permanente, e sia dato un volume di controllo delimitato da una sezione di ingresso $1$ e da una sezione di uscita $2$, entrambe di corrente lineare, e dalle pareti. Siano $\vec{v}_1$ e $\vec{v}_2$ le velocità medie nelle due sezioni, $Q$ la portata, $\vec{\Pi}_1$ e $\vec{\Pi}_2$ le spinte sulle sezioni, $\vec{G}$ il peso del fluido contenuto nel volume di controllo e $\vec{R}$ il risultante delle forze che le pareti esercitano sul fluido. Allora
$$
\rho\,Q\,(\vec{v}_2 - \vec{v}_1) = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{G} + \vec{R} .
$$
A sinistra compare la variazione del flusso di quantità di moto fra uscita e ingresso, a destra il risultante delle forze esterne applicate al fluido contenuto nel volume.

L'equazione serve a calcolare la forza scambiata fra la corrente e le pareti. Risolta rispetto a $\vec{R}$, essa dà la forza con cui le pareti trattengono il fluido, e per il principio di azione e reazione la forza che il fluido esercita sulle pareti è $-\vec{R}$. È questa la forza che sollecita gli ancoraggi di un gomito, i bulloni di un ugello e il meccanismo di sollevamento di una paratoia.

:::dimostrazione
L'idea è applicare il teorema della quantità di moto alla massa fluida che a un certo istante occupa il volume di controllo, e osservare che in moto permanente la quantità di moto contenuta nel volume non varia nel tempo.

Sia $W$ il volume di controllo e sia $\mathcal{M}$ la massa fluida che all'istante $t$ occupa $W$. La quantità di moto di $\mathcal{M}$ varia nel tempo per due motivi: perché cambia la quantità di moto contenuta in $W$, e perché $\mathcal{M}$ esce da $W$ attraverso la sezione $2$ mentre altro fluido entra attraverso la sezione $1$. Risulta quindi
$$
\frac{d\vec{P}}{dt} = \frac{\partial}{\partial t}\int_W \rho\,\vec{v}\,dW + \vec{M}_{\text{uscente}} - \vec{M}_{\text{entrante}} .
$$
Il moto è permanente, perciò in ogni punto di $W$ la velocità non dipende dal tempo e il primo termine è nullo. Attraverso le pareti non passa portata, dunque il flusso di quantità di moto attraverso la superficie di controllo si riduce ai contributi delle due sezioni di passaggio, che con $\beta = 1$ valgono $\rho Q \vec{v}_2$ in uscita e $\rho Q \vec{v}_1$ in ingresso. Ne segue
$$
\frac{d\vec{P}}{dt} = \rho\,Q\,(\vec{v}_2 - \vec{v}_1) .
$$
Le forze esterne applicate a $\mathcal{M}$ sono le pressioni esercitate dal fluido esterno sulle due sezioni, cioè $\vec{\Pi}_1$ e $\vec{\Pi}_2$, il peso $\vec{G}$ del fluido contenuto nel volume e le azioni che le pareti esercitano sul fluido, di risultante $\vec{R}$. Il teorema della quantità di moto dà allora l'uguaglianza fra il primo membro e la somma di queste forze, che è la tesi.
:::
::::

:::osservazione{#reazione-delle-pareti titolo="Che cosa contiene la reazione delle pareti"}
Il vettore $\vec{R}$ raccoglie tutte le azioni che il contorno solido esercita sul fluido, cioè le pressioni normali alla parete e gli sforzi tangenziali dovuti alla viscosità. L'equazione globale fornisce il loro risultante senza che occorra conoscere come le pressioni si distribuiscono sulla parete, e questo è il motivo per cui si usa, poiché la distribuzione delle pressioni dentro un gomito non è nota mentre il risultante si ottiene da un bilancio.

La forza che il fluido esercita sulle pareti è $-\vec{R}$. Nei problemi si calcola prima $\vec{R}$ dall'equazione, poi si cambia il segno a entrambe le componenti e si dichiara il verso a parole.
:::

:::osservazione{#peso-del-volume titolo="Quando il peso conta"}
Il peso $\vec{G} = -\gamma\,W\,\hat{k}$ è verticale e verso il basso, con $W$ il volume d'acqua contenuto nel volume di controllo. Nei problemi piani con asse orizzontale il peso è perpendicolare al piano del disegno e non compare nelle due proiezioni; conta invece nei gomiti disposti in un piano verticale, nei pezzi speciali di grande volume e nelle correnti a pelo libero, dove le sezioni sono verticali e il peso entra nell'equazione proiettata sulla verticale.

Per un gomito che contiene $0{,}020\,\mathrm{m^3}$ d'acqua il peso vale $G = 9{,}81 \cdot 0{,}020 = 0{,}196\,\mathrm{kN}$, dello stesso ordine del flusso di quantità di moto e molto minore delle spinte sulle sezioni.
:::

:::attenzione
Le pressioni usate nelle spinte $\vec{\Pi}$ sono relative, quindi la pressione atmosferica non compare. L'omissione è lecita perché l'atmosfera preme anche sulla faccia esterna delle pareti, e le due azioni si elidono quando si calcola la forza che il pezzo trasmette agli ancoraggi.

Con pressioni assolute il bilancio resta valido, ma occorre aggiungere la spinta dell'atmosfera su tutta la superficie esterna del pezzo. In un ugello che scarica all'aperto, la sezione di sbocco ha pressione relativa nulla e la spinta $\vec{\Pi}_2$ è nulla; usando la pressione assoluta $p_2 = 101\,\mathrm{kPa}$ e dimenticando l'atmosfera esterna si otterrebbe una spinta inesistente di alcuni kilonewton.
:::

## Proiezione sugli assi e procedimento di calcolo

L'equazione globale è vettoriale, perciò nei problemi piani si scrive come due equazioni scalari.

:::osservazione{#proiezione-sugli-assi titolo="Le due equazioni scalari"}
Scelti due assi $x$ e $y$ nel piano del moto, l'equazione globale si proietta su ciascuno di essi:
$$
\begin{cases}
\rho\,Q\,(v_{2x} - v_{1x}) = \Pi_{1x} + \Pi_{2x} + G_x + R_x \\[4pt]
\rho\,Q\,(v_{2y} - v_{1y}) = \Pi_{1y} + \Pi_{2y} + G_y + R_y
\end{cases}
$$
Le due equazioni valgono insieme e contengono le due incognite $R_x$ e $R_y$.

Il calcolo procede in quest'ordine: si disegna il volume di controllo con le sezioni numerate e si fissano gli assi; si ricavano le velocità dalla continuità, $v_i = \dfrac{Q}{A_i}$, e le pressioni dal teorema di Bernoulli scritto fra le due sezioni; si scrivono le componenti di $\vec{\Pi}_1$ e $\vec{\Pi}_2$ ricordando che i versori sono diretti verso l'interno; si somma il peso quando le sezioni non stanno in un piano orizzontale; si risolve rispetto a $R_x$ e $R_y$ e si cambia il segno per ottenere la forza sulle pareti. Il modulo è $\sqrt{R_x^2 + R_y^2}$ e la direzione si dà con l'angolo rispetto a un asse.
:::

:::richiamo{titolo="Teorema di Bernoulli per una corrente reale"}
Per una corrente in moto permanente fra due sezioni di corrente lineare $1$ e $2$, con $\alpha = 1$,
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} + \Delta H ,
$$
dove $\Delta H \ge 0$ è la perdita di carico fra le due sezioni. Si rimanda all'argomento sul teorema di Bernoulli e il carico totale.
:::

## Spinta su un gomito di condotta

Nel gomito le spinte sulle due sezioni hanno direzioni diverse, quindi il loro risultante non è nullo e la corrente esercita sul pezzo una forza che gli ancoraggi devono equilibrare.

::::teorema{#spinta-su-un-gomito titolo="Spinta su un gomito di condotta"}
Sia un gomito di una condotta di diametro costante $D$, disposto in un piano orizzontale, che devia la corrente dell'angolo $\theta$. Siano $Q$ la portata, $A$ l'area della sezione, $v = \dfrac{Q}{A}$ la velocità e $p$ la pressione, uguale nelle due sezioni perché le perdite nel gomito sono trascurate. Allora la forza che la corrente esercita sul gomito ha modulo
$$
F = 2\,(\rho\,Q\,v + p\,A)\,\sin\frac{\theta}{2}
$$
ed è diretta secondo la bisettrice dell'angolo formato dalle due sezioni, verso l'esterno della curva.

La formula dà direttamente la forza che gli ancoraggi del gomito devono equilibrare. Per un gomito a $90^\circ$ di diametro $D = 200\,\mathrm{mm}$ con $Q = 50\,\mathrm{L/s}$ e $p = 300\,\mathrm{kPa}$ risulta $\rho Q v = 79{,}6\,\mathrm{N}$, $pA = 9{,}42\,\mathrm{kN}$ e $F = 2 \cdot 9{,}50 \cdot \sin 45^\circ = 13{,}4\,\mathrm{kN}$, inclinata di $45^\circ$ sull'asse di ingresso.

::schema{nodi="A,0,0,-;B,3.2,0,-;C,3.2,3.2,-" condotte="A-B-C,0.6" tratteggi="0.9,-0.6 0.9,0.6;2.6,2.2 3.8,2.2" forze="0.9 0,1.1,0,Π_1;3.2 2.2,0,-1.1,Π_2;2.4 1,1.2,-1.2,F" etichette="0.72,0.95,1;3.98,2.2,2" riferimento=0 titolo="Gomito a $90^\circ$: le spinte sulle sezioni sono dirette verso l'interno del volume di controllo, la forza $F$ sul gomito è diretta verso l'esterno della curva"}

:::dimostrazione
Si prenda l'asse $x$ nella direzione della velocità in ingresso e l'asse $y$ in modo che la velocità in uscita abbia componenti $(v\cos\theta,\;v\sin\theta)$. Il diametro è costante, quindi per la continuità le due velocità hanno lo stesso modulo $v$.

Le spinte sulle sezioni sono dirette verso l'interno del volume, perciò $\vec{\Pi}_1 = pA\,(1,\,0)$ e $\vec{\Pi}_2 = -pA\,(\cos\theta,\;\sin\theta)$. Il gomito sta in un piano orizzontale, dunque il peso non compare nelle proiezioni. L'equazione globale proiettata dà
$$
\begin{cases}
\rho Q\,(v\cos\theta - v) = pA - pA\cos\theta + R_x \\[4pt]
\rho Q\,v\sin\theta = -pA\sin\theta + R_y
\end{cases}
$$
Posto $K = \rho Q v + pA$, dalla prima equazione segue $R_x = -K\,(1 - \cos\theta)$ e dalla seconda $R_y = K\sin\theta$. La forza sulle pareti è $-\vec{R}$, quindi ha componenti $\big(K(1-\cos\theta),\;-K\sin\theta\big)$ e modulo
$$
F = K\sqrt{(1-\cos\theta)^2 + \sin^2\theta} = K\sqrt{2 - 2\cos\theta} = 2K\sin\frac{\theta}{2} ,
$$
dove l'ultimo passaggio usa l'identità $1 - \cos\theta = 2\sin^2\dfrac{\theta}{2}$. Il rapporto fra le due componenti vale $\dfrac{-\sin\theta}{1-\cos\theta} = -\dfrac{1}{\tan\frac{\theta}{2}}$, perciò la forza forma con l'asse $x$ l'angolo $-\left(90^\circ - \dfrac{\theta}{2}\right)$, che è la direzione della bisettrice dell'angolo fra le due sezioni, rivolta verso l'esterno della curva.
:::
::::

:::osservazione{#peso-relativo-dei-termini titolo="Quale termine comanda"}
Nelle condotte in pressione il termine $pA$ supera di uno o due ordini di grandezza il termine $\rho Q v$, come mostrano i valori $9{,}42\,\mathrm{kN}$ e $79{,}6\,\mathrm{N}$ dell'esempio. La spinta su un gomito dipende perciò soprattutto dalla pressione di esercizio, e un blocco di ancoraggio dimensionato per la sola quantità di moto risulterebbe insufficiente.

Nei getti liberi la pressione relativa è nulla su tutto il contorno del getto, quindi resta il solo termine $\rho Q v$.
:::

:::osservazione{#curva-a-180 titolo="Curva a 180°"}
Con $\theta = 180^\circ$ le due sezioni sono parallele e opposte, e le spinte $\vec{\Pi}_1$ e $\vec{\Pi}_2$ hanno lo stesso verso. Se la perdita di carico nella curva non si trascura, le pressioni nelle due sezioni sono diverse e la forza sulla curva vale
$$
F = 2\,\rho\,Q\,v + (p_1 + p_2)\,A ,
$$
diretta come la velocità in ingresso. La perdita si calcola con il coefficiente $\xi$ della curva, $\Delta H = \xi\,\dfrac{v^2}{2g}$, e dal teorema di Bernoulli segue $p_2 = p_1 - \gamma\,\Delta H$, perché il diametro è costante e le due sezioni stanno alla stessa quota.
:::

## Riduzioni, ugelli e diffusori

Nei pezzi che cambiano il diametro le due sezioni hanno la stessa direzione, quindi l'equazione globale si proietta su un solo asse.

::::teorema{#spinta-su-una-riduzione titolo="Spinta su una riduzione"}
Sia un tronco di condotta rettilineo e orizzontale che passa dall'area $A_1$ all'area $A_2 < A_1$, percorso dalla portata $Q$, con pressioni $p_1$ e $p_2$ nelle due sezioni e velocità $v_1 = \dfrac{Q}{A_1}$ e $v_2 = \dfrac{Q}{A_2}$. Allora la forza che la corrente esercita sulla riduzione è diretta come la velocità e ha modulo
$$
F = p_1 A_1 - p_2 A_2 - \rho\,Q\,(v_2 - v_1) .
$$

La formula dà la forza che tende a staccare la riduzione dalla condotta e che i giunti devono trasmettere. Per una riduzione da $300\,\mathrm{mm}$ a $200\,\mathrm{mm}$ con $Q = 150\,\mathrm{L/s}$ e $p_1 = 300\,\mathrm{kPa}$ si ottiene $p_2 = 291\,\mathrm{kPa}$ dal teorema di Bernoulli e $F = 11{,}7\,\mathrm{kN}$ diretta verso valle.

::schema{acqua="0,0.75 2.6,0.75 3.6,1.05 7,1.05 7,1.55 3.6,1.55 2.6,1.85 0,1.85" linee="0,0.75 2.6,0.75 3.6,1.05 7,1.05;0,1.85 2.6,1.85 3.6,1.55 7,1.55" frecce="0.9,1.3,2.1,1.3,v_1;5.1,1.3,6.5,1.3,v_2" tratteggi="1.6,0.5 1.6,2.1;5.8,0.8 5.8,1.8" etichette="1.6,2.4,1;5.8,2.1,2" riferimento=0 titolo="Riduzione: il volume di controllo è compreso fra la sezione $1$ di monte e la sezione $2$ di valle"}

:::dimostrazione
Si prenda l'asse $x$ nel verso del moto. Le spinte sulle sezioni sono dirette verso l'interno del volume di controllo, perciò $\Pi_{1x} = p_1 A_1$ e $\Pi_{2x} = -p_2 A_2$. Il tronco è orizzontale, quindi il peso non compare nella proiezione su $x$. L'equazione globale dà
$$
\rho\,Q\,(v_2 - v_1) = p_1 A_1 - p_2 A_2 + R_x ,
$$
da cui $R_x = \rho Q (v_2 - v_1) - p_1 A_1 + p_2 A_2$. La forza sulle pareti è $-R_x$, cioè l'espressione della tesi. Poiché $A_1 > A_2$ e le pressioni sono dello stesso ordine, il termine $p_1 A_1 - p_2 A_2$ è positivo e supera il termine di quantità di moto, perciò la forza risulta diretta verso valle.
:::
::::

:::osservazione{#ugello titolo="Ugello che scarica in atmosfera"}
In un ugello la sezione di uscita è a contatto con l'aria, dunque la pressione relativa è nulla e la spinta $\vec{\Pi}_2$ si annulla. La forza sull'ugello vale allora
$$
F = p_1 A_1 - \rho\,Q\,(v_2 - v_1) ,
$$
diretta verso valle, ed è la forza che i bulloni della flangia devono equilibrare. La portata si ricava prima dal teorema di Bernoulli fra la sezione della condotta e la sezione di sbocco, dove il carico si riduce alla sola altezza cinetica.
:::

:::osservazione{#diffusore titolo="Diffusore"}
Un diffusore è un tronco che allarga gradualmente la sezione per trasformare altezza cinetica in altezza piezometrica. La velocità diminuisce, quindi per il teorema di Bernoulli la pressione cresce da monte a valle, e la perdita localizzata si valuta con $\Delta H = \xi\,\dfrac{(v_1 - v_2)^2}{2g}$, dove $\xi$ dipende dall'angolo di apertura ed è dato da misure di laboratorio (per angoli di apertura da $7^\circ$ a $10^\circ$ risulta $\xi$ compreso fra $0{,}15$ e $0{,}30$).

Nel diffusore crescono sia l'area sia la pressione, quindi il termine $p_2 A_2$ supera il termine $p_1 A_1$ e la forza sul diffusore risulta diretta **verso monte**, in verso opposto a quella che si trova su una riduzione.
:::

:::osservazione{#brusco-allargamento titolo="Brusco allargamento"}
Quando la sezione passa bruscamente da $A_1$ ad $A_2$, la corrente si distacca dallo spigolo e si forma una zona di fluido in ricircolo che occupa la corona di area $A_2 - A_1$. Le misure mostrano che su questa corona la pressione è prossima a $p_1$. Assunta questa condizione, la spinta complessiva sulla sezione di monte del volume di controllo vale $p_1 A_2$ e l'equazione globale proiettata sull'asse della condotta diventa
$$
\rho\,Q\,(v_2 - v_1) = (p_1 - p_2)\,A_2 .
$$
La spinta assiale sulla corona vale quindi $p_1\,(A_2 - A_1)$ ed è diretta verso monte. Combinando questa equazione con il teorema di Bernoulli si ottiene la perdita di Borda, che è trattata nell'argomento sulle perdite di carico distribuite e localizzate.
:::

:::osservazione{#biforcazioni titolo="Nodi e biforcazioni"}
In un nodo che divide la portata $Q_1$ nei due rami $Q_2$ e $Q_3$ il flusso di quantità di moto uscente è la somma dei contributi dei due rami, quindi l'equazione globale si scrive
$$
\rho\,(Q_2\vec{v}_2 + Q_3\vec{v}_3) - \rho\,Q_1\vec{v}_1 = \vec{\Pi}_1 + \vec{\Pi}_2 + \vec{\Pi}_3 + \vec{G} + \vec{R} ,
$$
con una spinta per ogni sezione di passaggio, sempre diretta verso l'interno del volume. La forma vale per un numero qualsiasi di sezioni, e la continuità al nodo impone $Q_1 = Q_2 + Q_3$.
:::

## Getti liberi

In un getto che si muove nell'aria la pressione relativa è nulla su tutto il contorno e in tutte le sezioni, perciò le spinte $\vec{\Pi}$ scompaiono e resta il solo flusso di quantità di moto.

::::teorema{#getto-su-piastra-normale titolo="Spinta di un getto su una piastra piana normale"}
Sia un getto libero di area $A$ e velocità $v$, con portata $Q = A\,v$, che urta una piastra piana fissa disposta normalmente al suo asse e si divide in lamine che scorrono lungo la piastra. Trascurando il peso del fluido contenuto nel volume di controllo, la forza che il getto esercita sulla piastra è diretta come la velocità del getto e vale
$$
S = \rho\,Q\,v = \rho\,A\,v^2 .
$$

La formula dà la spinta su un deflettore o su una paletta investita da un getto, e la forza necessaria a tenere ferma la piastra. Per un getto di diametro $40\,\mathrm{mm}$ e velocità $10\,\mathrm{m/s}$ si ha $Q = 12{,}6\,\mathrm{L/s}$ e $S = 126\,\mathrm{N}$.

::schema{acqua="0,1.1 4.3,1.1 4.3,1.5 0,1.5;4.1,1.5 4.3,1.5 4.3,3 4.1,3;4.1,1.1 4.3,1.1 4.3,-0.4 4.1,-0.4" solidi="4.3,-0.6 4.7,-0.6 4.7,3.2 4.3,3.2" frecce="0.5,1.3,1.7,1.3,v" forze="6 1.3,1.3,0,S" riferimento=0 titolo="Getto che urta una piastra piana normale al suo asse: la spinta $S$ vale $\rho Q v$"}

:::dimostrazione
Si prenda come volume di controllo la regione che contiene il tratto terminale del getto e le due lamine, con la sezione di ingresso $1$ normale al getto e le sezioni di uscita sul contorno delle lamine. Si prenda l'asse $x$ nella direzione del getto.

Tutto il contorno del volume è a contatto con l'aria oppure con la piastra, perciò su ogni sezione di passaggio la pressione relativa è nulla e le spinte $\vec{\Pi}$ sono nulle. Le lamine escono parallelamente alla piastra, cioè in direzione normale a $x$, quindi la loro quantità di moto ha componente nulla lungo $x$. Il peso è trascurato per ipotesi. L'equazione globale proiettata su $x$ dà
$$
0 - \rho\,Q\,v = R_x ,
$$
cioè $R_x = -\rho Q v$. La forza che il getto esercita sulla piastra è $-R_x = \rho Q v$, diretta come la velocità del getto.
:::
::::

::::teorema{#getto-su-piastra-inclinata titolo="Getto su una piastra piana inclinata"}
Sia un getto libero di portata $Q$ e velocità $v$ che urta una piastra piana fissa e liscia, il cui piano forma l'angolo $\alpha$ con l'asse del getto, e si divide in due lamine che scorrono lungo la piastra nei due versi. Trascurando l'attrito sulla piastra e il peso, le due lamine hanno la stessa velocità $v$ del getto, la forza sulla piastra è normale alla piastra e vale
$$
F = \rho\,Q\,v\,\sin\alpha ,
$$
e le portate delle due lamine sono
$$
Q_1 = \frac{Q}{2}\,(1 + \cos\alpha) ,
\qquad
Q_2 = \frac{Q}{2}\,(1 - \cos\alpha) .
$$

Le due portate dicono come il getto si ripartisce, e si misurano facilmente in laboratorio, perciò il confronto con la formula è la verifica sperimentale del bilancio di quantità di moto. Per $\alpha = 90^\circ$ si ritrova $F = \rho Q v$ e $Q_1 = Q_2 = \dfrac{Q}{2}$.

::schema{acqua="0,1 3.65,1 4.35,1.4 0,1.4;4.35,1.40 5.65,2.15 5.51,2.38 4.21,1.63;3.65,1.00 2.92,0.58 2.86,0.68 3.59,1.10" solidi="2.98,0.27 5.75,1.87 5.60,2.12 2.83,0.53" frecce="0.6,1.2,1.8,1.2,v" forze="5.65 0.08,0.75,-1.30,F" riferimento=0 titolo="Getto su una piastra inclinata di $\alpha$ sull'asse del getto: la forza è normale alla piastra"}

:::dimostrazione
Si prendano l'asse $\xi$ parallelo alla piastra, nel verso della lamina maggiore, e l'asse $\eta$ normale alla piastra. Il volume di controllo contiene il tratto terminale del getto e le due lamine, e tutto il suo contorno è a pressione relativa nulla, perciò le spinte sulle sezioni sono nulle.

La piastra è liscia, quindi la forza che essa esercita sul fluido è normale alla piastra e la sua componente lungo $\xi$ è nulla. La proiezione dell'equazione globale su $\xi$ dà allora
$$
\rho\,Q_1\,v - \rho\,Q_2\,v = \rho\,Q\,v\cos\alpha ,
$$
perché la velocità in ingresso forma con la piastra l'angolo $\alpha$. Semplificando $\rho v$ si ottiene $Q_1 - Q_2 = Q\cos\alpha$, che insieme alla continuità $Q_1 + Q_2 = Q$ forma il sistema
$$
\begin{cases}
Q_1 + Q_2 = Q \\[4pt]
Q_1 - Q_2 = Q\cos\alpha
\end{cases}
$$
la cui soluzione è quella della tesi. La proiezione su $\eta$ dà invece
$$
0 - \big(-\rho\,Q\,v\sin\alpha\big) = R_\eta ,
$$
perché le lamine escono parallelamente alla piastra e hanno componente nulla lungo $\eta$, mentre la velocità in ingresso ha componente $-v\sin\alpha$. Perciò $R_\eta = \rho Q v \sin\alpha$ e la forza sulla piastra vale $\rho Q v \sin\alpha$, diretta secondo la normale alla piastra.
:::
::::

::::teorema{#getto-su-una-pala titolo="Getto deviato da una pala fissa"}
Sia un getto libero di portata $Q$ e velocità $v$ che imbocca una pala fissa e ne esce deviato dell'angolo $\theta$ rispetto alla direzione di ingresso. Trascurando l'attrito sulla pala, cosicché la velocità in uscita ha lo stesso modulo $v$, la forza che il getto esercita sulla pala ha componenti
$$
F_x = \rho\,Q\,v\,(1 - \cos\theta) ,
\qquad
F_y = \rho\,Q\,v\,\sin\theta ,
$$
e modulo $F = 2\,\rho\,Q\,v\,\sin\dfrac{\theta}{2}$.

La deviazione massima si ha per $\theta = 180^\circ$, che dà $F = 2\rho Q v$, cioè il doppio della spinta su una piastra piana normale; è questo il motivo per cui le pale delle turbine Pelton hanno forma di doppio cucchiaio. Quando l'attrito non si trascura si pone $v_2 = k\,v$ con $k$ poco minore di $1$ e si ottiene $F_x = \rho Q v\,(1 - k\cos\theta)$.

::schema{acqua="0,1 3.6,1 3.6,1.4 0,1.4;3.60,1.00 3.88,1.03 4.14,1.13 4.37,1.28 4.56,1.48 4.70,1.72 4.78,1.99 4.80,2.27 4.75,2.54 4.64,2.80 4.29,2.60 4.37,2.43 4.40,2.25 4.39,2.06 4.33,1.88 4.24,1.72 4.11,1.59 3.96,1.49 3.78,1.42 3.60,1.40" solidi="3.54,1.00 3.84,1.02 4.12,1.12 4.37,1.28 4.57,1.50 4.72,1.76 4.79,2.05 4.79,2.35 4.72,2.64 4.57,2.91 4.80,3.07 4.98,2.75 5.07,2.39 5.07,2.02 4.98,1.66 4.80,1.34 4.55,1.07 4.24,0.87 3.89,0.75 3.52,0.72" frecce="0.6,1.2,1.8,1.2,v_1;4.52,2.61,3.97,3.57,v_2" forze="5.5 0.1,1.3,-0.75,F" riferimento=0 titolo="Pala fissa che devia il getto dell'angolo $\theta$: la forza è il risultante della variazione di quantità di moto"}

:::dimostrazione
Si prenda l'asse $x$ nella direzione del getto in ingresso. Il contorno del volume di controllo è a pressione relativa nulla, perché il getto è libero, e il peso si trascura, quindi l'equazione globale si riduce a $\rho Q (\vec{v}_2 - \vec{v}_1) = \vec{R}$.

La velocità in ingresso è $\vec{v}_1 = v\,(1,\,0)$ e quella in uscita $\vec{v}_2 = v\,(\cos\theta,\;\sin\theta)$, dunque
$$
\begin{cases}
R_x = \rho\,Q\,v\,(\cos\theta - 1) \\[4pt]
R_y = \rho\,Q\,v\,\sin\theta
\end{cases}
$$
La forza sulla pala è $-\vec{R}$ e ha quindi le componenti della tesi. Il modulo vale $\rho Q v \sqrt{(1-\cos\theta)^2 + \sin^2\theta} = 2\rho Q v \sin\dfrac{\theta}{2}$, con lo stesso calcolo svolto per il gomito.
:::
::::

## Spinta su una paratoia in una corrente a pelo libero

Nelle correnti a pelo libero le sezioni di passaggio sono verticali e la pressione su di esse è idrostatica, quindi le spinte $\vec{\Pi}$ sono le spinte idrostatiche sulle due sezioni.

::::teorema{#spinta-su-una-paratoia titolo="Spinta su una paratoia piana in un canale rettangolare"}
Sia un canale rettangolare di larghezza $b$ e fondo orizzontale, percorso dalla portata $Q$, con una paratoia piana verticale che fa passare la corrente da un'altezza $h_1$ a monte a un'altezza $h_2 < h_1$ a valle. Siano $v_1 = \dfrac{Q}{b\,h_1}$ e $v_2 = \dfrac{Q}{b\,h_2}$ le velocità medie. Trascurando la resistenza del fondo nel tratto considerato, la forza che la corrente esercita sulla paratoia è diretta verso valle e vale
$$
S = \frac{\gamma\,b\,h_1^2}{2} - \frac{\gamma\,b\,h_2^2}{2} - \rho\,Q\,(v_2 - v_1) .
$$

La formula dà la forza che il meccanismo di manovra deve equilibrare, e mostra che la spinta è minore della sola spinta idrostatica di monte, perché parte di essa è spesa per accelerare la corrente. La portata, quando non è assegnata, si ricava dal teorema di Bernoulli fra le due sezioni, perché la perdita di carico sotto la paratoia è piccola.

::schema{acqua="0,0 3,0 3,2.4 0,2.4;3,0 3.3,0 3.3,0.5 3,0.5;3.3,0 8,0 8,0.5 3.3,0.5" solidi="0,-0.5 8,-0.5 8,0 0,0;3,0.5 3.3,0.5 3.3,3.4 3,3.4" pelo="0,3,2.4,p_a;3.3,8,0.5" quote="0 0,0 2.4,h_1,-0.9" frecce="0.6,1.1,1.8,1.1,v_1;4.4,0.25,5.6,0.25,v_2" etichette="2,2.8,1;5.2,1.3,2;7.4,0.95,h_2" riferimento=0 titolo="Paratoia piana in un canale rettangolare: il volume di controllo è compreso fra la sezione $1$ di monte e la sezione $2$ di valle"}

:::dimostrazione
Si prenda come volume di controllo il tratto di corrente compreso fra la sezione $1$, a monte della paratoia, e la sezione $2$, a valle, entrambe di corrente lineare, e si prenda l'asse $x$ nel verso del moto.

Sulla sezione $1$ la pressione è idrostatica, quindi la spinta è quella su una superficie piana verticale di larghezza $b$ e altezza $h_1$, cioè $\Pi_1 = \gamma\,\dfrac{h_1}{2}\,b\,h_1 = \dfrac{\gamma b h_1^2}{2}$, diretta verso valle perché il versore entrante ha il verso del moto. Allo stesso modo $\Pi_2 = \dfrac{\gamma b h_2^2}{2}$, diretta verso monte.

Il fondo è orizzontale, quindi il peso è verticale e non compare nella proiezione su $x$; la resistenza del fondo è trascurata per ipotesi, perciò l'unica azione di contorno con componente lungo $x$ è la forza $R_x$ che la paratoia esercita sul fluido. L'equazione globale proiettata su $x$ dà
$$
\rho\,Q\,(v_2 - v_1) = \frac{\gamma b h_1^2}{2} - \frac{\gamma b h_2^2}{2} + R_x ,
$$
da cui $R_x$ risulta negativa, cioè diretta verso monte, e la forza sulla paratoia $S = -R_x$ è l'espressione della tesi.
:::
::::

:::osservazione{#paratoia-e-spinta-idrostatica titolo="Confronto con la spinta idrostatica"}
Se l'acqua fosse ferma su entrambi i lati della paratoia, la spinta sarebbe la differenza delle due spinte idrostatiche, $\dfrac{\gamma b (h_1^2 - h_2^2)}{2}$. Con la corrente in moto si sottrae il termine $\rho Q (v_2 - v_1)$, che è positivo perché la corrente accelera, quindi la spinta risulta minore.

In un canale largo $3\,\mathrm{m}$ con $h_1 = 2{,}40\,\mathrm{m}$ e $h_2 = 0{,}50\,\mathrm{m}$ il teorema di Bernoulli dà la portata $Q = 9{,}36\,\mathrm{m^3/s}$. La differenza delle spinte idrostatiche vale allora $81{,}1\,\mathrm{kN}$ e il termine di quantità di moto $46{,}3\,\mathrm{kN}$, perciò la spinta sulla paratoia è $34{,}8\,\mathrm{kN}$, cioè meno della metà della sola spinta idrostatica di monte, che vale $84{,}8\,\mathrm{kN}$.
:::

## Energia e quantità di moto

I due bilanci che reggono l'idraulica delle correnti rispondono a domande diverse e si usano insieme sullo stesso problema.

:::osservazione{#energia-e-quantita-di-moto titolo="Due bilanci sullo stesso volume"}
Il teorema di Bernoulli è un bilancio di energia, scritto come equazione scalare, che contiene le quote, le pressioni e le velocità e che, per essere applicato fra due sezioni, richiede di conoscere la perdita di carico $\Delta H$. L'equazione globale è un bilancio di forze, scritto come equazione vettoriale, che contiene in più la reazione delle pareti e il peso e che vale anche quando la dissipazione è forte, poiché la quantità di moto si conserva mentre l'energia meccanica si degrada.

Nei problemi i due bilanci si usano in sequenza, perché il teorema di Bernoulli fornisce le velocità e le pressioni nelle sezioni e l'equazione globale fornisce poi la forza. In un ugello, per esempio, Bernoulli dà la portata a partire dalla pressione in condotta e l'equazione globale dà la forza sui bulloni della flangia.
:::

:::attenzione
L'equazione globale non fornisce da sola la perdita di carico, e il teorema di Bernoulli non fornisce da solo la forza sulle pareti, poiché ciascuno dei due contiene incognite che l'altro non ha.

Nel brusco allargamento le due equazioni, scritte fra le stesse sezioni, danno risultati diversi. L'equazione globale con l'ipotesi sulla pressione nella corona dà $\dfrac{p_2 - p_1}{\gamma} = \dfrac{v_2\,(v_1 - v_2)}{g}$, mentre il teorema di Bernoulli scritto senza perdita darebbe $\dfrac{p_2 - p_1}{\gamma} = \dfrac{v_1^2 - v_2^2}{2g}$. La differenza fra i due valori è proprio la perdita di Borda $\dfrac{(v_1 - v_2)^2}{2g}$, che in un allargamento da $200\,\mathrm{mm}$ a $300\,\mathrm{mm}$ con $Q = 90\,\mathrm{L/s}$ vale $0{,}129\,\mathrm{m}$.
:::
