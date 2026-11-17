---
titolo: Rotazioni, momento angolare e rotolamento
sommario: Cinematica e dinamica angolare, lavoro, conservazione del momento angolare e rotolamento puro.
---

## Cinematica angolare

:::definizione{#cinematica-angolare titolo="Velocità e accelerazione angolari"}
Si fissi un asse di rotazione e si scelga un verso positivo. L’angolo $\theta$ si misura in radianti; un giro corrisponde a $2\pi$ radianti, e l’arco di raggio $R$ e angolo $\Delta\theta$ ha lunghezza orientata $R\Delta\theta$. Si può tenere il conto di più giri lasciando che $\theta$ cresca oltre $2\pi$. La **velocità angolare** $\omega$ è la variazione di angolo per tempo e l’**accelerazione angolare** $\alpha$ è la variazione di velocità angolare per tempo. Con $\alpha$ costante nell’intervallo di durata $t$,
$$
\omega=\omega_0+\alpha t,\qquad
\theta-\theta_0=\omega_0t+\frac12\alpha t^2.
$$
La seconda formula somma il contributo della velocità angolare iniziale e quello dell’accelerazione. Si ottiene anche come area orientata del trapezio sotto il grafico $\omega$-$t$. Quando $\omega$ attraversa zero, le due parti del grafico vanno contate con segni opposti per l’angolo netto. Per calcolare l’angolo totale percorso in modulo, invece, si sommano i moduli delle aree.

Due punti di uno stesso corpo rigido hanno gli stessi $\omega$ e $\alpha$ ma, a distanze diverse dall’asse, le loro velocità tangenziali hanno moduli diversi. A distanza $R$ valgono $v=|\omega|R$ e $a_t=|\alpha|R$ per i moduli tangenziali; l’accelerazione radiale di modulo $\omega^2R$ cambia la direzione della velocità. Anche quando $\omega$ è costante e $a_t=0$, il punto possiede accelerazione radiale.
:::

:::esempio{titolo="Arresto e inversione"}
Con $\omega_0=4\,\mathrm{rad/s}$ e $\alpha=-2\,\mathrm{rad/s^2}$, dopo $3\,\mathrm s$ si ottiene $\omega=-2\,\mathrm{rad/s}$. Il disco si arresta a $2\,\mathrm s$ e poi inverte. Il primo triangolo del grafico vale $4\,\mathrm{rad}$ e il secondo $-1\,\mathrm{rad}$. L’angolo netto è $3\,\mathrm{rad}$, mentre l’angolo percorso vale $5\,\mathrm{rad}$ in modulo.

::grafico{linee="0,4 3,-2" area="4-2*x;0;0;2|4-2*x;0;2;3" punti="2,0,pieno" xmin=0 xmax=3.6 ymin=-3 ymax=5 nomi="t (s),ω (rad/s)" titolo="Le aree sopra e sotto l’asse hanno segni opposti"}
:::

## Momento d’inerzia

:::definizione{#inerzia-rotazione titolo="Distanza della massa dall’asse"}
Il **momento d’inerzia** rispetto a un asse è $I=\sum_i m_ir_i^2$ per masse puntiformi, dove $r_i$ è la distanza perpendicolare dall’asse. Si misura in $\mathrm{kg\cdot m^2}$. Una massa sull’asse dà contributo nullo, e spostare una massa al doppio della distanza quadruplica il suo contributo. Per corpi estesi si applica la stessa somma a porzioni di massa via via più piccole.

Rispetto all’asse centrale perpendicolare al piano, un anello sottile ha $I=mR^2$ e un disco pieno omogeneo $I=\dfrac12mR^2$. Rispetto a un diametro, una sfera piena omogenea ha $I=\dfrac25mR^2$. Le formule descrivono distribuzioni diverse. Per una macchina composta si sommano i momenti dei componenti riferiti tutti allo stesso asse; per un asse parallelo a quello del centro di massa e distante $d$ si usa il **teorema degli assi paralleli** $I=I_{CM}+md^2$.
:::

:::esempio{titolo="Un disco rispetto a due assi"}
Un disco da $4\,\mathrm{kg}$ e raggio $0{,}50\,\mathrm m$ ha momento centrale $0{,}50\,\mathrm{kg\cdot m^2}$. Spostando l’asse parallelamente fino al bordo, si aggiunge $4\cdot0{,}50^2\,\mathrm{kg\cdot m^2}=1\,\mathrm{kg\cdot m^2}$. Il totale vale $1{,}50\,\mathrm{kg\cdot m^2}$. Il termine aggiunto è positivo perché in media aumenta il quadrato delle distanze dall’asse.

::grafico{uguale=1 assi=0 curve=".5*cos(t),.5*sin(t),0,6.283185" linee="0,0 .5,0" punti="0,0,pieno,C;.5,0,pieno,B" xmin=-.7 xmax=.8 ymin=-.7 ymax=.7 titolo="Gli assi sono perpendicolari al disegno e passano per C e B"}
:::

## Equazione della rotazione

:::teorema{#dinamica-rotazione titolo="Momento risultante e accelerazione angolare"}
Per un corpo rigido che ruota attorno a un asse fisso e ha $I$ costante, la somma algebrica dei momenti delle forze rispetto all’asse è
$$
\sum_jM_j=I\alpha.
$$
Il momento di una forza applicata nel piano ortogonale all’asse ha modulo $M=rF\sin\phi$, con $\phi$ angolo tra raggio e forza. Equivale a $rF_t$, con $F_t$ componente tangenziale, o a $Fb$, con $b$ distanza perpendicolare dall’asse alla retta d’azione. Si assegna poi il segno secondo il verso di rotazione indotto. Una forza lungo la retta passante per l’asse ha braccio nullo, anche se applicata lontano dall’asse.

Due momenti opposti si sottraggono. Un momento risultante nullo implica $\alpha=0$, ma il corpo può già ruotare con velocità angolare non nulla. Per una carrucola con inerzia e due tensioni tangenziali, il momento delle tensioni è $(T_1-T_2)R$ scegliendo positivo il verso di $T_1$. Se l’accelerazione è non nulla, le tensioni possono differire per fornire il momento necessario.
:::

:::esempio{titolo="Momenti di segno opposto"}
Una ruota con $I=2\,\mathrm{kg\cdot m^2}$ riceve due momenti, $+6\,\mathrm{N\cdot m}$ e $-2\,\mathrm{N\cdot m}$. La somma vale $+4\,\mathrm{N\cdot m}$ e l’accelerazione $+2\,\mathrm{rad/s^2}$. Se la ruota ruota inizialmente in senso negativo, questa accelerazione la rallenta fino all’arresto; dopo l’arresto, la velocità angolare cresce in senso positivo finché agiscono gli stessi momenti.
:::

## Energia e lavoro nella rotazione

:::teorema{#energia-rotazione titolo="Energia cinetica rotazionale"}
Per rotazione attorno a un asse fisso, ogni massa ha velocità di modulo $|\omega|r_i$. Sommando $\dfrac12m_i\omega^2r_i^2$ e raccogliendo il fattore comune si ottiene $K_{\mathrm{rot}}=\dfrac12I\omega^2$. Allo stesso $I$, raddoppiare la velocità angolare quadruplica l’energia, e cambiare verso di rotazione lascia invariata l’energia.

Un momento costante rispetto all’asse compie lavoro $W=M\Delta\theta$, con angolo in radianti e con segno. Un momento variabile richiede invece l’area orientata nel grafico momento-angolo. La potenza meccanica istantanea vale $P=M\omega$. Il momento si misura in newton metri, ma è il prodotto con l’angolo percorso a rappresentare il lavoro in joule.

Nel moto piano di un corpo rigido, si separa la traslazione del centro di massa dalla rotazione attorno al centro di massa. L’energia complessiva è $\dfrac12mv_{CM}^2+\dfrac12I_{CM}\omega^2$. I termini misti si cancellano perché, rispetto al centro di massa, la somma pesata delle posizioni dei punti è zero.
:::

:::esempio{titolo="Lavoro per variare il modulo di rotazione"}
Un volano con $I=0{,}50\,\mathrm{kg\cdot m^2}$ passa da $4$ a $8\,\mathrm{rad/s}$. L’energia passa da $4$ a $16\,\mathrm J$, perciò il lavoro risultante è $12\,\mathrm J$. Se il momento lungo l’asse è costante e pari a $3\,\mathrm{N\cdot m}$, serve uno spostamento angolare di $4\,\mathrm{rad}$.
:::

## Momento angolare

:::teorema{#momento-angolare titolo="Bilancio rispetto a un asse"}
Per una particella il momento angolare relativo a un punto è $\vec L=\vec r\times\vec p$. Per rotazione attorno a un asse fisso si usa la componente lungo quell’asse, $L=I\omega$. Il **bilancio del momento angolare** lega la sua variazione all’impulso del momento esterno rispetto allo stesso asse. Con momento esterno risultante nullo, si ha $I_i\omega_i=I_f\omega_f$. In questa relazione $I$ può cambiare perché cambiano le posizioni delle masse, anche se la massa totale resta la stessa.

Un pattinatore che avvicina le braccia all’asse riduce $I$. Per mantenere lo stesso $L$, aumenta il modulo di $\omega$. Scrivendo $K_{\mathrm{rot}}=\dfrac{L^2}{2I}$ si vede che, a momento angolare fissato, l’energia cresce quando $I$ diminuisce. Il lavoro muscolare permette l’aumento di energia cinetica senza fornire un momento esterno al sistema.
:::

:::esempio{titolo="Controllo separato delle due grandezze"}
Per $I_i=3\,\mathrm{kg\cdot m^2}$, $\omega_i=2\,\mathrm{rad/s}$ e $I_f=1{,}5\,\mathrm{kg\cdot m^2}$, il momento angolare vale $6\,\mathrm{kg\cdot m^2/s}$. Segue $\omega_f=4\,\mathrm{rad/s}$. L’energia passa da $6$ a $12\,\mathrm J$. Il momento angolare resta costante mentre l’energia aumenta di $6\,\mathrm J$.

::grafico{f="6/x" punti="3,2,pieno,A;1.5,4,pieno,B" xmin=1 xmax=4 ymin=0 ymax=7 nomi="I,ω" titolo="Riducendo I si sale lungo la curva a momento angolare costante"}
:::

## Rotolamento senza slittamento

:::teorema{#rotolamento titolo="Vincolo fra traslazione e rotazione"}
Una ruota di raggio $R$ rotola senza slittare su un piano fermo quando il suo punto di contatto ha velocità istantanea nulla rispetto al piano. La traslazione del centro e la rotazione forniscono in quel punto velocità opposte e di uguale modulo. Per i moduli segue $v_{CM}=|\omega|R$. Nel punto superiore i due contributi hanno lo stesso verso, e il modulo vale $2v_{CM}$. La condizione riguarda la velocità del punto di contatto, che cambia di istante in istante; un punto materiale del bordo si allontana poi dal terreno.

Quando il rotolamento è puro e senza dissipazioni su un piano fisso, l’attrito statico può indurre un momento senza compiere lavoro al punto di contatto. Se il corpo parte da fermo e scende attraverso un dislivello $h$,
$$
mgh=\frac12 m v_{CM}^2+\frac12 I_{CM}\frac{v_{CM}^2}{R^2}.
$$
Ponendo $b=I_{CM}/(mR^2)$, risulta $v_{CM}=\sqrt{2gh/(1+b)}$. Per il disco pieno omogeneo $b=\dfrac12$, per l’anello $b=1$. Il disco arriva con velocità maggiore perché, a parità di massa, raggio e velocità, immagazzinerebbe meno energia nella rotazione. Il criterio vale quando l’attrito statico è sufficiente a mantenere il contatto senza slittamento lungo tutto il percorso.
:::

:::esempio{titolo="Velocità dei punti di una ruota"}
Con $R=0{,}40\,\mathrm m$ e $|\omega|=5\,\mathrm{rad/s}$, il centro avanza a $2\,\mathrm{m/s}$. Nel punto superiore la rotazione aggiunge altri $2\,\mathrm{m/s}$ nello stesso verso. Il punto inferiore ha invece contributo rotazionale di $2\,\mathrm{m/s}$ all’indietro e risulta istantaneamente fermo.

::grafico{uguale=1 assi=0 curve="0.4*cos(t),0.4+0.4*sin(t),0,6.283185" linee="-.6,0 1.05,0" vettori="0,.4,.3,.4,v_CM;0,.8,.6,.8,v" punti="0,0,pieno,C" xmin=-.65 xmax=1.1 ymin=-.2 ymax=1.05 titolo="Il vettore di velocità in alto è lungo il doppio di quello al centro"}
:::
