---
titolo: "Rotazioni, momento angolare e rotolamento"
sommario: "Cinematica angolare, momento d’inerzia, dinamica rotazionale, conservazione del momento angolare e rotolamento puro."
---

## Cinematica angolare

:::definizione{#cinematica-angolare titolo="Velocità e accelerazione angolari"}
Per una rotazione attorno a un asse fisso si usa l'angolo $\theta$ in radianti. La velocità angolare indica la variazione di angolo per unità di tempo e l'accelerazione angolare $\alpha$ indica la variazione di velocità angolare. Con $\alpha$ costante,
$$
\omega=\omega_0+\alpha t,\qquad
\theta-\theta_0=\omega_0t+\frac12\alpha t^2.
$$
Le relazioni sono analoghe a quelle del moto rettilineo uniformemente accelerato. Un disco inizialmente fermo con $\alpha=2\,\mathrm{rad/s^2}$ raggiunge $\omega=6\,\mathrm{rad/s}$ dopo $3\,\mathrm s$ e ruota di $9\,\mathrm{rad}$. Per un punto a distanza $r$ dall'asse, $v=\omega r$ e $a_t=\alpha r$.
:::

::grafico{curve="2*cos(t),2*sin(t),0,6.283185" vettori="2,0,2,1.5,v" xmin=-3 xmax=4 ymin=-3 ymax=3 uguale=1 titolo="Per i punti dello stesso corpo rigido vale $v=\omega r$"}

## Momento d’inerzia

:::definizione{#inerzia-rotazione titolo="Distribuzione della massa rispetto all’asse"}
Il **momento d'inerzia** rispetto a un asse è $I=\sum m_ir_i^2$ per un sistema di punti. Si misura in $\mathrm{kg\cdot m^2}$ e dipende dalla distribuzione della massa e dall'asse scelto. Spostare massa lontano dall'asse aumenta $I$.

Per un anello sottile di massa $m$ e raggio $R$, $I=mR^2$ rispetto all'asse centrale perpendicolare al piano. Per un disco pieno omogeneo rispetto allo stesso asse, $I=\dfrac12mR^2$. Per una sfera piena omogenea rispetto a un diametro, $I=\dfrac25mR^2$. Un disco di $2\,\mathrm{kg}$ e raggio $0{,}50\,\mathrm m$ ha $I=0{,}25\,\mathrm{kg\cdot m^2}$. Per un asse parallelo distante $d$ da quello passante per il centro di massa, il teorema degli assi paralleli dà $I=I_{CM}+md^2$.
:::

## Equazione della rotazione

:::teorema{#dinamica-rotazione titolo="Momento risultante e accelerazione angolare"}
Per un corpo rigido che ruota attorno a un asse fisso con momento d'inerzia costante,
$$
\sum M_{\mathrm{asse}}=I\alpha.
$$
I momenti vanno calcolati rispetto allo stesso asse e con lo stesso verso positivo. Una forza tangenziale $F$ applicata a distanza $R$ produce momento $FR$. Per $I=0{,}50\,\mathrm{kg\cdot m^2}$ e momento risultante $2{,}0\,\mathrm{N\cdot m}$, si ha $\alpha=4{,}0\,\mathrm{rad/s^2}$.

Se una carrucola ha momento d'inerzia apprezzabile, le tensioni nei due rami possono essere diverse, perché la loro differenza produce il momento che accelera la carrucola. L'uguaglianza delle tensioni richiede il modello di carrucola ideale con inerzia trascurabile.
:::

## Energia e lavoro nella rotazione

:::teorema{#energia-rotazione titolo="Energia cinetica rotazionale"}
Sommando le energie cinetiche dei punti di un corpo rigido, con $v_i=\omega r_i$, si ottiene
$$
K_{\mathrm{rot}}=\frac12I\omega^2.
$$
Un momento costante compie lavoro $W=M\Delta\theta$ e la potenza è $P=M\omega$. La misura dell'angolo deve essere in radianti. Un momento di $3\,\mathrm{N\cdot m}$ che agisce per $2\,\mathrm{rad}$ compie lavoro $6\,\mathrm J$.

Per un corpo che trasla e ruota, l'energia cinetica si può scrivere come somma dell'energia di traslazione del centro di massa e dell'energia di rotazione attorno al centro di massa. Questa separazione permette di risolvere problemi di ruote e corpi che rotolano.
:::

## Momento angolare

:::teorema{#momento-angolare titolo="Conservazione rispetto a un asse"}
Per una particella, il momento angolare rispetto a un punto è $\vec L=\vec r\times\vec p$. Per una rotazione attorno a un asse fisso, nei casi simmetrici studiati, la componente lungo l'asse è $L=I\omega$.

Se il momento esterno risultante rispetto all'asse è nullo, il momento angolare si conserva. Quindi $I_i\omega_i=I_f\omega_f$. Una persona su una piattaforma girevole che avvicina le braccia all'asse riduce $I$ e aumenta $\omega$. Se $I$ si dimezza, $\omega$ raddoppia. L'energia cinetica rotazionale può aumentare, perché i muscoli compiono lavoro interno; la conservazione del momento angolare non impone quella dell'energia cinetica.
:::

::grafico{f="6/x" xmin=1 xmax=6 ymin=0 ymax=7 nomi="I,ω" titolo="A momento angolare costante, velocità angolare e momento d’inerzia sono inversamente proporzionali"}

## Rotolamento senza slittamento

:::teorema{#rotolamento titolo="Vincolo fra traslazione e rotazione"}
Per una ruota che rotola senza slittare su un piano fermo,
$$
v_{CM}=\omega R,\qquad
K=\frac12mv_{CM}^2+\frac12I_{CM}\omega^2.
$$
Il punto di contatto è istantaneamente fermo rispetto al piano, mentre il punto superiore ha velocità di modulo $2v_{CM}$. L'attrito statico, quando necessario, assicura il vincolo e resta entro il proprio massimo.

Un corpo che scende da fermo attraverso un dislivello $h$, senza perdite, soddisfa $mgh=\dfrac12mv^2+\dfrac12I_{CM}\dfrac{v^2}{R^2}$. Per un disco omogeneo $v=\sqrt{\dfrac{4gh}{3}}$; per un anello $v=\sqrt{gh}$. A uguale dislivello il disco raggiunge una velocità maggiore, perché ha un momento d'inerzia relativo minore. Queste formule richiedono rotolamento puro e assenza di dissipazioni.
:::

::grafico{assi=0 uguale=1 curve="2*cos(t),2+2*sin(t),0,6.283185" linee="-3,0 4,0" vettori="0,2,2,2,vCM;0,4,4,4,v" punti="0,0,pieno,C" xmin=-4 xmax=5 ymin=-1 ymax=5 titolo="Rotolamento verso destra: il punto superiore ha velocità doppia rispetto al centro"}
