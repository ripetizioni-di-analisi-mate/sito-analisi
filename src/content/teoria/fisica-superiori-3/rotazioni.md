---
titolo: Rotazioni, momento angolare e rotolamento
sommario: Cinematica e dinamica angolare, lavoro, conservazione del momento angolare e rotolamento puro.
---

## Cinematica angolare

:::definizione{#cinematica-angolare titolo="Velocità e accelerazione angolari"}
Un corpo ruota attorno a una retta fissa, l’**asse di rotazione**, come una ruota attorno al suo perno. Guardando l’asse da una sua estremità, si sceglie quale dei due sensi di rotazione è positivo, di solito l’antiorario. Un angolo percorso nel verso positivo ha segno $+$ e un angolo percorso nel verso opposto ha segno $-$.

L’angolo $\theta$ (si legge «theta») si misura in **radianti**. Un angolo di $1\,\mathrm{rad}$ sottende un arco lungo quanto il raggio, e un giro completo vale $2\pi\simeq6{,}28\,\mathrm{rad}$. Su una circonferenza di raggio $R$, l’angolo $\Delta\theta$ sottende un arco di lunghezza $R\Delta\theta$ (la lettera $\Delta$, delta, indica una variazione). L’arco ha lo stesso segno dell’angolo e per questo si chiama lunghezza orientata. Per tenere il conto di più giri si lascia che $\theta$ cresca oltre $2\pi$, quindi dopo tre giri $\theta$ vale $6\pi$. Una velocità in giri al minuto si porta in radianti al secondo moltiplicando per $2\pi$ e dividendo per $60$: per esempio $120$ giri al minuto sono $2$ giri al secondo, cioè $4\pi\,\mathrm{rad/s}$.

La **velocità angolare** $\omega$ (omega) è l’angolo percorso diviso per il tempo impiegato, $\omega=\dfrac{\Delta\theta}{\Delta t}$, e si misura in $\mathrm{rad/s}$. L’**accelerazione angolare** $\alpha$ (alfa) è la variazione di velocità angolare divisa per il tempo, $\alpha=\dfrac{\Delta\omega}{\Delta t}$, e si misura in $\mathrm{rad/s^2}$. Entrambe hanno segno, e $\omega>0$ indica una rotazione nel verso positivo. Se $\alpha$ è costante in un intervallo di durata $t$, con velocità angolare iniziale $\omega_0$ e angolo iniziale $\theta_0$,
$$
\omega=\omega_0+\alpha t,\qquad
\theta-\theta_0=\omega_0t+\frac12\alpha t^2.
$$
Sono le leggi del moto rettilineo uniformemente accelerato, con $\theta$ al posto della posizione, $\omega$ al posto della velocità e $\alpha$ al posto dell’accelerazione.

Nella seconda formula il termine $\omega_0t$ è l’angolo che il corpo percorrerebbe girando sempre a $\omega_0$, e il termine $\dfrac12\alpha t^2$ è l’angolo in più dovuto all’accelerazione. Lo stesso risultato è l’area sotto il grafico $\omega$-$t$. Il grafico è un segmento, perciò la figura sotto di esso è un trapezio di basi $\omega_0$ e $\omega$ e altezza $t$, con area $\dfrac{\omega_0+\omega}{2}\,t$. L’area è orientata, cioè le parti sopra l’asse dei tempi si contano con il segno $+$ e quelle sotto con il segno $-$. Quando $\omega$ attraversa zero, la somma delle due parti con i loro segni dà l’angolo netto, cioè la posizione finale rispetto a quella iniziale. Per calcolare l’angolo totale percorso, invece, si sommano i moduli delle aree, cioè i loro valori senza segno.

Un **corpo rigido** è un corpo che non si deforma, quindi tutti i suoi punti girano dello stesso angolo nello stesso tempo e hanno gli stessi $\omega$ e $\alpha$. Un punto a distanza $R$ dall’asse percorre però una circonferenza di raggio $R$, perciò punti a distanze diverse dall’asse hanno velocità di modulo diverso. La velocità del punto è tangente alla circonferenza (velocità tangenziale) e ha modulo $v=|\omega|R$. L’accelerazione del punto ha due componenti.

- La componente tangenziale ha modulo $a_t=|\alpha|R$ e cambia il modulo della velocità.
- La componente radiale è diretta verso il centro, ha modulo $\omega^2R$ e cambia la direzione della velocità. È l’accelerazione centripeta del moto circolare.

Anche quando $\omega$ è costante, e quindi $a_t=0$, il punto possiede l’accelerazione radiale, perché la direzione della sua velocità cambia di continuo.
:::

:::esempio{titolo="Accelerazioni in un punto del disco"}
Guardando il disco da un’estremità dell’asse, si sceglie positivo il senso antiorario. Si considera il punto sul bordo destro, a $R=0{,}35\,\mathrm m$ dal centro, nell’istante in cui $\omega=-6\,\mathrm{rad/s}$. Il segno meno indica una rotazione oraria, perciò il punto sul bordo destro scende con velocità di modulo
$$
v=|\omega|R=6\cdot0{,}35=2{,}1\,\mathrm{m/s}.
$$
Nello stesso istante $\alpha=+4\,\mathrm{rad/s^2}$. L’accelerazione tangenziale vale $a_t=4\cdot0{,}35=1{,}4\,\mathrm{m/s^2}$ e, poiché $\alpha$ è antioraria, sul bordo destro è diretta verso l’alto. In quell’istante il modulo della velocità diminuisce perché la componente tangenziale è opposta alla velocità. L’accelerazione radiale vale $\omega^2R=36\cdot0{,}35=12{,}6\,\mathrm{m/s^2}$ ed è diretta verso il centro $O$.

::grafico{assi=0 uguale=1 curve="2*cos(t),2*sin(t),0,6.283185" linee="0,0 2,0" vettori="2,0,2,-1.45,v;2,0,2,1.05,a_t;2,0,.48,0,a_r" punti="0,0,pieno,O;2,0,pieno" xmin=-2.35 xmax=2.85 ymin=-2.35 ymax=2.35 titolo="Sul bordo destro, velocità e accelerazione tangenziale sono opposte. Le frecce mostrano le direzioni."}
:::

:::esempio{titolo="Arresto e inversione"}
Un disco ha $\omega_0=4\,\mathrm{rad/s}$ e $\alpha=-2\,\mathrm{rad/s^2}$. Dopo $3\,\mathrm s$ la velocità angolare è
$$
\omega=4+(-2)\cdot3=-2\,\mathrm{rad/s}.
$$
Il disco si arresta quando $4-2t=0$, cioè a $t=2\,\mathrm s$, e poi gira nel verso opposto. Il grafico taglia l’asse dei tempi a $2\,\mathrm s$ e forma due triangoli.

- Da $0$ a $2\,\mathrm s$ il triangolo sta sopra l’asse e vale $\dfrac12\cdot2\cdot4=4\,\mathrm{rad}$.
- Da $2$ a $3\,\mathrm s$ il triangolo sta sotto l’asse e vale $-\dfrac12\cdot1\cdot2=-1\,\mathrm{rad}$.

L’angolo netto è $4-1=3\,\mathrm{rad}$, mentre l’angolo percorso vale $4+1=5\,\mathrm{rad}$ in modulo.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|4-2*x;0;2;3" punti="2,0,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),ω (rad/s)" titolo="Le aree sopra e sotto l’asse hanno segni opposti"}
:::

:::esempio{titolo="Dai dati di un sensore all’accelerazione"}
Un sensore rileva gli angoli $0{,}20$, $0{,}68$ e $1{,}28\,\mathrm{rad}$ ai tempi $0$, $0{,}20$ e $0{,}40\,\mathrm s$. Nei due intervalli l’angolo cresce di $0{,}68-0{,}20=0{,}48\,\mathrm{rad}$ e di $1{,}28-0{,}68=0{,}60\,\mathrm{rad}$. Le velocità medie sono quindi
$$
\frac{0{,}48}{0{,}20}=2{,}40\,\mathrm{rad/s},\qquad \frac{0{,}60}{0{,}20}=3{,}00\,\mathrm{rad/s}.
$$
Con accelerazione angolare costante $\omega$ cresce in modo uniforme, perciò ciascuna media è la velocità all’istante centrale del proprio intervallo, cioè a $0{,}10\,\mathrm s$ e a $0{,}30\,\mathrm s$.

I due istanti centrali sono separati da $0{,}20\,\mathrm s$, perciò $\alpha=\dfrac{3{,}00-2{,}40}{0{,}20}=3{,}0\,\mathrm{rad/s^2}$. Riportando la prima media indietro di $0{,}10\,\mathrm s$, fino all’istante $0$, si ottiene $\omega_0=2{,}40-3{,}0\cdot0{,}10=2{,}10\,\mathrm{rad/s}$. Con una quarta lettura si potrebbe controllare se l’accelerazione è davvero costante. Alcuni sensori riportano l’angolo sempre entro un giro, cioè ripartono da zero dopo $2\pi$. In quel caso, prima delle differenze, si aggiungono $2\pi$ per ogni giro completato.
:::

## Momento d’inerzia

:::definizione{#inerzia-rotazione titolo="Distanza della massa dall’asse"}
Il **momento d’inerzia** di un insieme di masse puntiformi rispetto a un asse è la somma dei prodotti di ciascuna massa per il quadrato della sua distanza dall’asse,
$$
I=\sum_i m_ir_i^2=m_1r_1^2+m_2r_2^2+\ldots
$$
Il simbolo $\sum$ (sigma maiuscola) indica la somma su tutte le masse, numerate con l’indice $i$. La distanza $r_i$ si misura sulla perpendicolare dal punto all’asse. Il momento d’inerzia si misura in $\mathrm{kg\cdot m^2}$. Una massa sull’asse ha $r_i=0$ e dà contributo nullo. Poiché la distanza compare al quadrato, spostare una massa al doppio della distanza quadruplica il suo contributo. Un corpo esteso si divide in porzioni di massa via via più piccole, ciascuna quasi puntiforme, e si applica a esse la stessa somma.

Un corpo **omogeneo** ha la massa distribuita in modo uniforme. Per corpi di massa $m$ e raggio $R$ il calcolo dà i valori seguenti.

- Un anello sottile, rispetto all’asse centrale perpendicolare al suo piano, ha $I=mR^2$.
- Un disco pieno omogeneo, rispetto allo stesso asse, ha $I=\dfrac12mR^2$.
- Una sfera piena omogenea, rispetto a un diametro, ha $I=\dfrac25mR^2$.

Le formule descrivono distribuzioni diverse. Nell’anello tutta la massa sta a distanza $R$, nel disco e nella sfera una parte della massa è più vicina all’asse. Per una macchina composta da più parti si sommano i momenti d’inerzia delle parti, riferiti tutti allo stesso asse.

Il **centro di massa** (CM) è il punto che ha per coordinate la media delle coordinate delle masse, ciascuna pesata con la propria massa; in un corpo omogeneo e simmetrico coincide con il centro geometrico. Se $I_{CM}$ è il momento d’inerzia rispetto a un asse passante per il centro di massa, rispetto a un asse parallelo a quello e distante $d$ vale il **teorema degli assi paralleli** $I=I_{CM}+md^2$.
:::

:::osservazione{titolo="Scelta dell’asse e distribuzione della massa"}
Il rapporto $b=\dfrac{I_{CM}}{mR^2}$ è adimensionale, cioè un numero puro, perché numeratore e denominatore si misurano entrambi in $\mathrm{kg\cdot m^2}$. Per i corpi della tabella, $R$ è il raggio esterno e $I_{CM}$ si riferisce all’asse indicato. Il coefficiente $b$ indica quale frazione di $mR^2$ vale il momento d’inerzia, quindi confronta corpi di massa e raggio uguali in base alla distribuzione della massa. Un $b$ maggiore corrisponde a massa più lontana dall’asse.

| Corpo | Asse | $b$ |
| --- | --- | ---: |
| Anello sottile | Centrale, perpendicolare al piano | $1$ |
| Disco pieno omogeneo | Centrale, perpendicolare al piano | $\dfrac{1}{2}$ |
| Sfera piena omogenea | Diametro | $\dfrac{2}{5}$ |

Il teorema degli assi paralleli si ricava così. Si mette l’origine degli assi $x$ e $y$ nel centro di massa; la massa $m_i$ ha coordinate $(x_i,y_i)$ e il quadrato della sua distanza dall’asse centrale è $x_i^2+y_i^2$. Si trasporta l’asse di $d$ lungo la direzione $x$, e il quadrato della distanza diventa
$$
(x_i-d)^2+y_i^2=x_i^2+y_i^2-2dx_i+d^2.
$$
Moltiplicando per $m_i$ e sommando su tutte le masse si ottengono tre termini.

- Il termine $\sum_i m_i\left(x_i^2+y_i^2\right)$ è $I_{CM}$.
- La somma dei termini misti è $-2d\sum_i m_ix_i=0$, perché l’origine è il centro di massa e quindi la media pesata delle $x_i$ è zero.
- Il termine rimasto è $d^2\sum_i m_i=md^2$.

Il passaggio richiede assi paralleli.

::grafico{f="x^2/100" punti="20,4,pieno;40,16,pieno" etichette="21.2,3.4,4;40.8,15.1,16" xmin=0 xmax=50 ymin=0 ymax=25 nomi="r (cm),I (10⁻² kg·m²)" titolo="Per una massa puntiforme da 1 kg, passando da 0,20 a 0,40 m il contributo quadruplica"}
:::

:::esempio{titolo="Un disco rispetto a due assi"}
Un disco omogeneo da $4\,\mathrm{kg}$ e raggio $0{,}50\,\mathrm m$, rispetto all’asse che passa per il centro $C$, ha momento
$$
I_{CM}=\frac12\cdot4\cdot0{,}50^2=0{,}50\,\mathrm{kg\cdot m^2}.
$$
Spostando l’asse parallelamente fino al punto $B$ del bordo, la distanza fra i due assi è $d=R=0{,}50\,\mathrm m$, quindi si aggiunge $4\cdot0{,}50^2\,\mathrm{kg\cdot m^2}=1\,\mathrm{kg\cdot m^2}$. Il totale vale $1{,}50\,\mathrm{kg\cdot m^2}$. Il termine aggiunto è positivo perché, rispetto al nuovo asse, il quadrato delle distanze delle masse aumenta in media.

::grafico{uguale=1 assi=0 curve=".5*cos(t),.5*sin(t),0,6.283185" linee="0,0.5,0" punti="0,0,pieno,C;.5,0,pieno,B" xmin=-.7 xmax=.8 ymin=-.7 ymax=.7 titolo="Gli assi sono perpendicolari al disegno e passano per C e B"}
:::

## Equazione della rotazione

:::teorema{#dinamica-rotazione titolo="Momento risultante e accelerazione angolare"}
Il **momento** $M$ di una forza rispetto a un asse è il prodotto della forza per la distanza fra l’asse e la retta su cui agisce la forza, con un segno che indica il verso di rotazione prodotto. Per una forza $F$ applicata a distanza $r$ dall’asse, nel piano ortogonale all’asse, il modulo del momento si calcola in tre modi equivalenti.

- $M=rF\sin\phi$, dove $\phi$ (fi) è l’angolo fra il raggio, cioè il segmento dall’asse al punto di applicazione, e la forza.
- $M=rF_t$, dove $F_t=F\sin\phi$ è la componente tangenziale della forza, perpendicolare al raggio.
- $M=F d_\perp$, dove il **braccio** $d_\perp=r\sin\phi$ è la distanza perpendicolare dall’asse alla retta d’azione, cioè alla retta che contiene la forza.

Il momento si misura in $\mathrm{N\cdot m}$. Si assegna poi il segno $+$ se la forza tende a far girare il corpo nel verso positivo e il segno $-$ nel caso opposto. Una forza lungo la retta passante per l’asse, per esempio una forza radiale, ha braccio nullo e quindi momento nullo, anche se è applicata lontano dall’asse.

Per un corpo rigido che ruota attorno a un asse fisso e ha $I$ costante, la somma algebrica dei momenti delle forze rispetto all’asse, cioè la somma con i loro segni, è
$$
\sum_jM_j=I\alpha.
$$
È l’analogo del secondo principio della dinamica $F=ma$, con il momento al posto della forza e il momento d’inerzia al posto della massa.

Due momenti opposti si sottraggono. Un momento risultante nullo implica $\alpha=0$, quindi la velocità angolare resta costante e un corpo che già ruota continua a ruotare. In una carrucola con inerzia, i due fili tirano con tensioni $T_1$ e $T_2$ tangenti al bordo, perciò entrambe hanno braccio $R$. Scegliendo positivo il verso di $T_1$, il momento delle tensioni è $(T_1-T_2)R$. Se l’accelerazione è non nulla, $(T_1-T_2)R=I\alpha$ è diverso da zero, perciò le due tensioni sono diverse e la loro differenza fornisce il momento necessario. Se invece l’inerzia della carrucola è trascurabile, anche $I\alpha$ è trascurabile e le due tensioni sono quasi uguali.
:::

:::esempio{titolo="Momento con segno e braccio perpendicolare"}
Si prendono l’asse $x$ verso destra, l’asse $y$ verso l’alto e l’asse $z$ verso chi osserva, così il momento antiorario è positivo. Per una forza di componenti $(F_x,F_y)$ applicata nel punto $(x,y)$, la componente lungo $z$ del prodotto vettoriale $\vec r\times\vec F$ è
$$
M_z=xF_y-yF_x.
$$
La forza $\vec F=(3,-4)\,\mathrm N$, cioè $3\,\mathrm N$ verso destra e $4\,\mathrm N$ verso il basso, è applicata in $A=(0{,}40,0)\,\mathrm m$. La componente orizzontale ha retta d’azione lungo l’asse $x$, che passa per $O$, quindi ha momento nullo, mentre quella verticale dà
$$
M_z=0{,}40\cdot(-4)-0\cdot3=-1{,}6\,\mathrm{N\cdot m}.
$$
Il segno meno indica un momento orario. Il modulo della forza è $\sqrt{3^2+4^2}=5\,\mathrm N$ e la retta d’azione dista $d_\perp=r\sin\phi=0{,}40\cdot\dfrac45=0{,}32\,\mathrm m$ da $O$, con $\sin\phi=\dfrac45$ perché la componente perpendicolare al raggio vale $4\,\mathrm N$ su $5\,\mathrm N$, perciò il prodotto $F d_\perp$ restituisce il modulo $5\cdot0{,}32=1{,}6\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 linee="0,0.4,0" segmenti=".12,.373333,.64,-.32;0,0,.256,.192" vettori=".4,0,.58,-.24,F" punti="0,0,pieno,O;.4,0,pieno,A;.256,.192,pieno" etichette=".092,.14,d_⊥" xmin=-.07 xmax=.73 ymin=-.36 ymax=.45 titolo="Il braccio indicato è perpendicolare alla retta d’azione. Il momento della forza è orario."}
:::

:::esempio{titolo="Momenti di segno opposto"}
Una ruota con $I=2\,\mathrm{kg\cdot m^2}$ riceve due momenti, $+6\,\mathrm{N\cdot m}$ e $-2\,\mathrm{N\cdot m}$. La somma e l’accelerazione valgono
$$
\sum M=6-2=+4\,\mathrm{N\cdot m},\qquad \alpha=\frac{4}{2}=+2\,\mathrm{rad/s^2}.
$$
Se la ruota ruota inizialmente in senso negativo, $\alpha$ ha segno opposto a $\omega$, quindi questa accelerazione la rallenta fino all’arresto. Dopo l’arresto la velocità angolare cresce in senso positivo, finché agiscono gli stessi momenti.
:::

:::osservazione{titolo="Le due tensioni di una carrucola"}
Una carrucola di raggio $0{,}20\,\mathrm m$ riceve una trazione di $30\,\mathrm N$ verso il basso sul lato sinistro e di $10\,\mathrm N$ verso il basso sul lato destro. Le tensioni sono tangenti al bordo, quindi il loro braccio è il raggio. Con il verso antiorario positivo, il filo di sinistra fa girare la carrucola in senso antiorario e quello di destra in senso orario, perciò rispetto al perno $O$ le tensioni danno i momenti
$$
+30\cdot0{,}20=+6\,\mathrm{N\cdot m},\qquad -10\cdot0{,}20=-2\,\mathrm{N\cdot m}.
$$
Il perno esercita una reazione con retta d’azione passante per l’asse, quindi di momento nullo. Se anche l’attrito del perno è trascurabile, il momento risultante è $+4\,\mathrm{N\cdot m}$, come nell’esempio della ruota.

::grafico{assi=0 uguale=1 curve=".2*cos(t),.2*sin(t),0,6.283185" linee="-.2,0.2,0" vettori="-.2,0,-.2,-.3,T_1;.2,0,.2,-.1,T_2" punti="0,0,pieno,O" xmin=-.36 xmax=.43 ymin=-.37 ymax=.27 titolo="T1 e T2 sono entrambe dirette verso il basso e producono momenti opposti rispetto a O"}
:::

## Energia e lavoro nella rotazione

:::teorema{#energia-rotazione titolo="Energia cinetica rotazionale"}
Nella rotazione attorno a un asse fisso, la massa $m_i$ a distanza $r_i$ dall’asse ha velocità di modulo $|\omega|r_i$ e quindi energia cinetica $\dfrac12m_i\omega^2r_i^2$. Sommando su tutte le masse e raccogliendo il fattore comune $\dfrac12\omega^2$ si ottiene l’**energia cinetica rotazionale**
$$
K_{\mathrm{rot}}=\frac12\omega^2\sum_i m_ir_i^2=\frac12I\omega^2.
$$
Allo stesso $I$, raddoppiare la velocità angolare quadruplica l’energia. Poiché $\omega$ compare al quadrato, cambiare verso di rotazione lascia invariata l’energia.

Un momento costante rispetto all’asse, mentre il corpo ruota dell’angolo $\Delta\theta$, compie lavoro $W=M\Delta\theta$, con angolo in radianti e con segno. È l’analogo del lavoro $Fs$ di una forza costante. Il lavoro è positivo se momento e rotazione hanno lo stesso verso e negativo se hanno versi opposti, come per un freno. Un momento variabile richiede invece l’area orientata nel grafico momento-angolo. Il lavoro di tutti i momenti che agiscono è uguale alla variazione dell’energia cinetica rotazionale. La potenza meccanica istantanea, cioè il lavoro compiuto per unità di tempo, vale $P=M\omega$ e si misura in watt ($1\,\mathrm W=1\,\mathrm{J/s}$); con potenza costante il lavoro in un tempo $t$ è $Pt$. Il momento si misura in newton metri, come il joule ($1\,\mathrm J=1\,\mathrm{N\cdot m}$), ma è il prodotto del momento per l’angolo percorso a rappresentare il lavoro in joule.

Il moto piano di un corpo rigido, come una ruota che rotola, si separa in due parti: la traslazione del centro di massa, con velocità $v_{CM}$, e la rotazione attorno al centro di massa, con velocità angolare $\omega$. L’energia complessiva è
$$
K=\frac12mv_{CM}^2+\frac12I_{CM}\omega^2.
$$
Nel calcolo compaiono anche termini misti, che contengono il prodotto delle due velocità. Questi termini si cancellano perché, rispetto al centro di massa, la somma pesata delle posizioni dei punti è zero.
:::

:::esempio{titolo="Lavoro per variare il modulo di rotazione"}
Un volano con $I=0{,}50\,\mathrm{kg\cdot m^2}$ passa da $4$ a $8\,\mathrm{rad/s}$. L’energia passa da
$$
K_i=\frac12\cdot0{,}50\cdot4^2=4\,\mathrm J\qquad\text{a}\qquad K_f=\frac12\cdot0{,}50\cdot8^2=16\,\mathrm J,
$$
perciò il lavoro risultante è $16-4=12\,\mathrm J$. Se il momento lungo l’asse è costante e pari a $3\,\mathrm{N\cdot m}$, serve uno spostamento angolare $\Delta\theta=\dfrac{12}{3}=4\,\mathrm{rad}$.
:::

:::esempio{titolo="Lavoro da un grafico momento-angolo"}
Un motore imprime un momento risultante di $4\,\mathrm{N\cdot m}$ mentre un albero percorre i primi $3\,\mathrm{rad}$ nel verso positivo. Nei successivi $2\,\mathrm{rad}$ il momento passa a $-2\,\mathrm{N\cdot m}$. Il lavoro è la somma delle aree dei due rettangoli,
$$
W=4\cdot3+(-2)\cdot2=12-4=8\,\mathrm J.
$$
Con energia cinetica iniziale di $10\,\mathrm J$ l’energia sale a $10+12=22\,\mathrm J$ e poi scende a $22-4=18\,\mathrm J$. Durante il secondo tratto la potenza $P=M\omega$ del momento è negativa, perché il momento è negativo e la velocità positiva. La velocità rimane comunque positiva, perché l’energia scende soltanto fino a $18\,\mathrm J$ e non si annulla.

::grafico{linee="0,4 3,4;3,-2 5,-2" segmenti="3,4,3,-2" area="4;0;0;3|-2;0;3;5" xmin=0 xmax=5.65 ymin=-3 ymax=5 nomi="θ (rad),M (N·m)" titolo="Il primo rettangolo rappresenta 12 J, il secondo −4 J"}
:::

:::esempio{titolo="Due modi di calcolare la stessa energia"}
Il disco di massa $4\,\mathrm{kg}$ e raggio $0{,}50\,\mathrm m$ ruota attorno a un perno fisso al bordo con $\omega=4\,\mathrm{rad/s}$. Descrivendo tutto il moto come rotazione attorno al perno, l’inerzia riferita al bordo vale $1{,}50\,\mathrm{kg\cdot m^2}$, quindi
$$
K=\frac12\cdot1{,}50\cdot4^2=12\,\mathrm J.
$$
Separando invece traslazione e rotazione, il centro percorre una circonferenza di raggio $0{,}50\,\mathrm m$ attorno al perno, con velocità di modulo $4\cdot0{,}50=2\,\mathrm{m/s}$. La sua traslazione contribuisce con $\dfrac12\cdot4\cdot2^2=8\,\mathrm J$ e la rotazione rispetto al centro con $\dfrac12\cdot0{,}50\cdot4^2=4\,\mathrm J$, per un totale di $12\,\mathrm J$. Nel teorema degli assi paralleli il termine $mR^2=1\,\mathrm{kg\cdot m^2}$, moltiplicato per $\dfrac12\omega^2=8\,\mathrm{rad^2/s^2}$, produce proprio gli $8\,\mathrm J$ della traslazione. Aggiungerli all’energia già calcolata rispetto al perno li conterebbe due volte.
:::

## Momento angolare

:::teorema{#momento-angolare titolo="Bilancio rispetto a un asse"}
Il **momento angolare** di una particella rispetto a un punto $O$ è $\vec L=\vec r\times\vec p$, il prodotto vettoriale fra il vettore posizione $\vec r$, che va da $O$ alla particella, e la quantità di moto $\vec p=m\vec v$. Il suo modulo è $L=rp\sin\phi$, con $\phi$ angolo fra $\vec r$ e $\vec p$; vale $rp$ se la quantità di moto è perpendicolare al raggio e zero se è diretta lungo la retta che passa per $O$. Si misura in $\mathrm{kg\cdot m^2/s}$. Per rotazione attorno a un asse fisso si usa la componente lungo quell’asse, $L=I\omega$, che ha il segno di $\omega$.

Un momento esterno è il momento di una forza esercitata da un corpo che non fa parte del sistema. Il **bilancio del momento angolare** dice che la variazione di $L$ è uguale all’impulso del momento esterno rispetto allo stesso asse. L’impulso di un momento costante $M$ che agisce per un tempo $\Delta t$ è $M\Delta t$, quindi $\Delta L=M\Delta t$; per un momento variabile l’impulso è l’area orientata del grafico $M$-$t$. Con momento esterno risultante nullo $L$ non cambia, quindi
$$
I_i\omega_i=I_f\omega_f.
$$
In questa relazione $I$ può cambiare perché cambiano le posizioni delle masse rispetto all’asse, anche se la massa totale resta la stessa. Durante lo spostamento si può usare $L=I\omega$ se tutte le masse condividono la stessa velocità angolare. In quel caso la variazione di $L$ dipende sia dal cambiamento di $\omega$ sia dal cambiamento di $I$. Quando l’inerzia è costante, $\Delta L=I\Delta\omega$; dividendo per $\Delta t$ il bilancio diventa $\sum M=I\alpha$, e si recupera l’equazione della rotazione.

Un pattinatore che gira su sé stesso e avvicina le braccia all’asse riduce $I$. Il momento esterno lungo l’asse è trascurabile, quindi $L$ resta lo stesso e il modulo di $\omega$ aumenta. Sostituendo $\omega=\dfrac LI$ in $K_{\mathrm{rot}}=\dfrac12I\omega^2$ si ottiene
$$
K_{\mathrm{rot}}=\frac{L^2}{2I}.
$$
A momento angolare fissato, quindi, l’energia cresce quando $I$ diminuisce. L’energia in più viene dal lavoro dei muscoli del pattinatore, che tirano le braccia verso l’asse. Queste forze sono interne al sistema, perciò il loro lavoro aumenta l’energia cinetica senza fornire un momento esterno.
:::

:::esempio{titolo="Controllo separato delle due grandezze"}
Per $I_i=3\,\mathrm{kg\cdot m^2}$, $\omega_i=2\,\mathrm{rad/s}$ e $I_f=1{,}5\,\mathrm{kg\cdot m^2}$, il momento angolare vale $L=3\cdot2=6\,\mathrm{kg\cdot m^2/s}$. Poiché $L$ si conserva, segue
$$
\omega_f=\frac{6}{1{,}5}=4\,\mathrm{rad/s}.
$$
L’energia passa da $\dfrac12\cdot3\cdot2^2=6\,\mathrm J$ a $\dfrac12\cdot1{,}5\cdot4^2=12\,\mathrm J$. Il momento angolare resta costante mentre l’energia aumenta di $6\,\mathrm J$. Nel grafico la curva $\omega=\dfrac6I$ contiene tutti gli stati con $L=6\,\mathrm{kg\cdot m^2/s}$, e il sistema passa da $A$ a $B$.

::grafico{f="6/x" punti="3,2,pieno,A;1.5,4,pieno,B" xmin=1 xmax=4 ymin=0 ymax=7 nomi="I (kg·m²),ω (rad/s)" titolo="Riducendo I si sale lungo la curva a momento angolare costante"}
:::

:::esempio{titolo="Variazione del momento angolare in due intervalli"}
L’area orientata del grafico $M$–$t$ è l’impulso angolare. Un rotore ha $L_i=-2\,\mathrm{kg\cdot m^2/s}$. Un momento di $+3\,\mathrm{N\cdot m}$ per $2\,\mathrm s$ e poi uno di $-1\,\mathrm{N\cdot m}$ per i successivi $3\,\mathrm s$ cambiano $L$ così:
$$
\begin{aligned}
L_1&=-2+3\cdot2=+4\,\mathrm{kg\cdot m^2/s},\\[6pt]
L_f&=4+(-1)\cdot3=+1\,\mathrm{kg\cdot m^2/s}.
\end{aligned}
$$
Nell’intero intervallo l’impulso è $6-3=+3\,\mathrm{N\cdot m\cdot s}$, un’unità equivalente a $\mathrm{kg\cdot m^2/s}$ perché $1\,\mathrm N=1\,\mathrm{kg\cdot m/s^2}$. Se due impulsi si compensano, il valore finale coincide con quello iniziale anche in presenza di variazioni intermedie.

::grafico{linee="0,3 2,3;2,-1 5,-1" segmenti="2,3,2,-1" area="3;0;0;2|-1;0;2;5" xmin=0 xmax=5.65 ymin=-2 ymax=4 nomi="t (s),M (N·m)" titolo="Le due aree danno impulsi di +6 e −3 N·m·s"}
:::

:::esempio{titolo="Due volani accoppiati da una frizione"}
Due volani coassiali, cioè montati sullo stesso asse, hanno inerzia $0{,}80\,\mathrm{kg\cdot m^2}$ ciascuno; il primo gira a $10\,\mathrm{rad/s}$ e il secondo è a riposo. Una frizione interna, un dispositivo che li collega per attrito, li accoppia, e l’impulso dei momenti esterni lungo l’asse è trascurabile. Il momento angolare è inizialmente $0{,}80\cdot10=8\,\mathrm{kg\cdot m^2/s}$. Quando i volani girano insieme, si divide questo valore per l’inerzia complessiva e si ottiene
$$
\omega_f=\frac{8}{0{,}80+0{,}80}=5\,\mathrm{rad/s}.
$$
La cinetica iniziale è $\dfrac12\cdot0{,}80\cdot10^2=40\,\mathrm J$ e quella finale $\dfrac12\cdot1{,}60\cdot5^2=20\,\mathrm J$. Durante lo slittamento la frizione esercita sui due volani momenti opposti, ma i volani hanno velocità diverse. Il momento sul volano veloce è opposto alla sua rotazione e il suo lavoro negativo supera in modulo quello positivo sul volano lento, quindi il lavoro complessivo della frizione è negativo. L’energia cinetica persa si trasforma in energia interna della frizione e dei volani, mentre il momento angolare totale resta costante.
:::

## Rotolamento senza slittamento

:::teorema{#rotolamento titolo="Vincolo fra traslazione e rotazione"}
Una ruota di raggio $R$ rotola senza slittare su un piano fermo quando il suo punto di contatto ha velocità istantanea nulla rispetto al piano. La velocità di ogni punto della ruota è la somma della velocità del centro, uguale per tutti i punti, e della velocità dovuta alla rotazione attorno al centro, tangente al bordo e di modulo $|\omega|R$. Nel punto di contatto i due contributi sono opposti e, poiché la loro somma è nulla, hanno uguale modulo. Per i moduli segue
$$
v_{CM}=|\omega|R.
$$
Nel punto superiore i due contributi hanno lo stesso verso, e il modulo vale $v_{CM}+|\omega|R=2v_{CM}$. Mentre la ruota gira dell’angolo $\Delta\theta$ il centro avanza di $R|\Delta\theta|$, quindi in un giro avanza di una circonferenza, $2\pi R$. La condizione riguarda la velocità del punto di contatto, che cambia di istante in istante. Un punto materiale del bordo si allontana poi dal terreno. Se la superficie si muove, come un nastro trasportatore, il rotolamento senza slittamento richiede che il punto di contatto abbia la stessa velocità della superficie.

L’**attrito statico** è la forza d’attrito fra due superfici che non scivolano l’una sull’altra. Quando il rotolamento è puro e senza dissipazioni (nessuna energia trasformata in calore) su un piano fisso, l’attrito statico può indurre un momento rispetto al centro senza compiere lavoro, perché agisce sul punto di contatto, che è fermo. Se il corpo parte da fermo e scende attraverso un dislivello $h$, l’energia potenziale $mgh$ diventa energia cinetica di traslazione e di rotazione; con $\omega=\dfrac{v_{CM}}{R}$,
$$
mgh=\frac12 m v_{CM}^2+\frac12 I_{CM}\frac{v_{CM}^2}{R^2}.
$$
Ponendo $b=\dfrac{I_{CM}}{mR^2}$, cioè $I_{CM}=bmR^2$, il secondo termine diventa $\dfrac12bmv_{CM}^2$. Dividendo per $m$ si ha $gh=\dfrac12(1+b)v_{CM}^2$, quindi
$$
v_{CM}=\sqrt{\frac{2gh}{1+b}}.
$$
Per il disco pieno omogeneo $b=\dfrac12$, per l’anello $b=1$. Il disco arriva con velocità maggiore perché, a parità di massa, raggio e velocità, immagazzinerebbe meno energia nella rotazione, e gliene resta di più per la traslazione. Il criterio vale quando l’attrito statico è sufficiente a mantenere il contatto senza slittamento lungo tutto il percorso.
:::

:::esempio{titolo="Velocità dei punti di una ruota"}
Con $R=0{,}40\,\mathrm m$ e $|\omega|=5\,\mathrm{rad/s}$, il centro avanza a $v_{CM}=5\cdot0{,}40=2\,\mathrm{m/s}$. Nel punto superiore la rotazione aggiunge altri $2\,\mathrm{m/s}$ nello stesso verso, per un totale di $4\,\mathrm{m/s}$. Il punto inferiore $C$ ha invece contributo rotazionale di $2\,\mathrm{m/s}$ all’indietro e risulta istantaneamente fermo, perché $2-2=0$.

::grafico{uguale=1 assi=0 curve="0.4*cos(t),0.4+0.4*sin(t),0,6.283185" linee="-.6,0 1.05,0" vettori="0,.4,.3,.4,v_CM;0,.8,.6,.8,v" punti="0,0,pieno,C" xmin=-.65 xmax=1.1 ymin=-.2 ymax=1.05 titolo="Il vettore di velocità in alto è lungo il doppio di quello al centro"}
:::

:::esempio{titolo="Quanto attrito serve su una rampa"}
Un corpo scende su un piano fisso d’inclinazione $\beta$ (beta) con il centro di massa sull’asse geometrico. Il peso e la **normale**, cioè la forza che il piano esercita perpendicolarmente a sé stesso, hanno rette d’azione che passano per il centro, perciò l’unica forza con momento rispetto al centro è l’attrito statico $F_s$, diretto in salita e applicato a distanza $R$. Quando il vincolo di rotolamento è soddisfatto, $v_{CM}=\omega R$ vale in ogni istante, quindi l’accelerazione del centro è $a=\alpha R$ e
$$
F_sR=I_{CM}\frac aR.
$$
Con $I_{CM}=bmR^2$ questa equazione dà $F_s=bma$. Lungo il piano vale $ma=mg\sin\beta-F_s$. Sostituendo $F_s=bma$ si ha $(1+b)ma=mg\sin\beta$, e si ottengono
$$
a=\frac{g\sin\beta}{1+b},\qquad
F_s=\frac{bmg\sin\beta}{1+b}.
$$
La normale vale $mg\cos\beta$. L’attrito statico non supera $\mu_s mg\cos\beta$, dove $\mu_s$ è il coefficiente di attrito statico delle due superfici. L’attrito disponibile è quindi sufficiente se $F_s\leq\mu_s mg\cos\beta$; dividendo per $mg\cos\beta$ e usando $\tan\beta=\dfrac{\sin\beta}{\cos\beta}$ la condizione diventa $\mu_s\geq\dfrac{b}{1+b}\tan\beta$. Per $\beta=30^\circ$, con $\tan30^\circ\simeq0{,}577$, il limite è circa $\dfrac13\cdot0{,}577\simeq0{,}192$ per il disco e $\dfrac12\cdot0{,}577\simeq0{,}289$ per l’anello. Se $\mu_s=0{,}22$, il disco può mantenere il rotolamento puro perché $0{,}22>0{,}192$, e l’anello inizia a slittare perché $0{,}22<0{,}289$. Il bilancio senza dissipazioni si applica quindi al disco per questa rampa. La figura riporta l’attrito richiesto in percentuale del peso, $\dfrac{100F_s}{mg}=\dfrac{50b}{1+b}$ a $30^\circ$, che cresce con $b$.

::grafico{f="50*x/(1+x)" punti=".5,16.66667,pieno,D;1,25,pieno,A" xmin=0 xmax=1.2 ymin=0 ymax=31 nomi="b,100 F_s/(mg)" titolo="A 30°, l’attrito richiesto in percentuale del peso cresce con b. D indica il disco e A l’anello."}
:::
