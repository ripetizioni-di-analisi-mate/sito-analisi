---
titolo: Equazioni cardinali della statica e reazioni vincolari
sommario: Le equazioni cardinali come condizione di equilibrio del corpo rigido piano, la scelta delle equazioni e dei poli, il diagramma di corpo libero e il calcolo delle reazioni di travi appoggiate, mensole, travi con sbalzi, appoggi inclinati e travi ad asse spezzato.
---

## Equazioni cardinali della statica

Su una struttura agiscono due tipi di forze: i carichi, che sono assegnati, e le reazioni dei vincoli, che sono incognite. Le equazioni cardinali della statica legano i carichi alle reazioni e permettono di calcolare queste ultime.

:::richiamo{titolo="Cambiamento di polo"}
Sia dato un sistema di forze $\vec{F}_i$ applicate nei punti $P_i$, con risultante $\vec{R} = \sum_i \vec{F}_i$. Allora i momenti risultanti rispetto a due poli $O$ e $O'$ sono legati da
$$
\vec{M}_{O'} = \vec{M}_O + (O - O') \times \vec{R} .
$$
Si rimanda all'argomento sui vettori applicati, i momenti e i sistemi di forze equivalenti.
:::

:::richiamo{titolo="Equazioni cardinali della dinamica"}
Per un sistema di punti materiali di massa totale $m$ e baricentro $G$, con forze interne scambiate a coppie lungo la congiungente dei punti,
$$
m\,\vec{a}_G = \vec{R}^{(e)} ,
\qquad
\frac{d\vec{L}_G}{dt} = \vec{M}_G^{(e)} ,
$$
dove $\vec{L}_G$ è il momento angolare rispetto a $G$ e l'apice $(e)$ indica le sole forze esterne. Per un corpo rigido in moto piano $\vec{L}_G = I_G\,\vec{\omega}$, con $I_G > 0$ momento d'inerzia rispetto all'asse per $G$ perpendicolare al piano. Si rimanda all'argomento sulla dinamica del corpo rigido di Fisica 1.
:::

::::teorema{#equazioni-cardinali titolo="Equazioni cardinali della statica"}
Sia un corpo rigido inizialmente in quiete, soggetto a forze esterne (carichi e reazioni dei vincoli) di risultante $\vec{R}$ e momento risultante $\vec{M}_O$ rispetto a un polo $O$. Il corpo resta in equilibrio se e solo se
$$
\begin{cases}
\vec{R} = \vec{0} \\[4pt]
\vec{M}_O = \vec{0}
\end{cases}
$$
Per un corpo piano caricato nel proprio piano $xy$, la risultante ha le sole componenti $R_x$ e $R_y$ e il momento ha la sola componente lungo $z$, positiva in verso antiorario. Il sistema si riduce quindi a tre **equazioni scalari di equilibrio**:
$$
\begin{cases}
\sum F_x = 0 \\[4pt]
\sum F_y = 0 \\[4pt]
\sum M_O = 0
\end{cases}
$$
cioè traslazione orizzontale, traslazione verticale e rotazione attorno a $O$. Le equazioni sono lineari nelle forze, perciò con tre reazioni incognite formano un sistema lineare di tre equazioni in tre incognite. Per una trave lunga $L$, appoggiata agli estremi $A$ e $B$ e caricata in mezzeria da una forza verticale $F$, la rotazione attorno ad $A$ dà $V_B\,L - F\,\dfrac{L}{2} = 0$, quindi $V_B = \dfrac{F}{2}$, e la traslazione verticale dà $V_A = F - V_B = \dfrac{F}{2}$.

:::dimostrazione
L'idea è che le forze interne si elidono a coppie, quindi l'equilibrio dipende soltanto dalle forze esterne.

Sia il corpo in quiete. Allora $\vec{a}_G = \vec{0}$ e $\vec{L}_G = \vec{0}$ in ogni istante, quindi anche $\dfrac{d\vec{L}_G}{dt} = \vec{0}$, e per le equazioni cardinali della dinamica $\vec{R} = \vec{0}$ e $\vec{M}_G = \vec{0}$. Per il cambiamento di polo $\vec{M}_O = \vec{M}_G + (G - O) \times \vec{R} = \vec{0}$.

Viceversa, siano $\vec{R} = \vec{0}$ e $\vec{M}_O = \vec{0}$. Per il cambiamento di polo $\vec{M}_G = \vec{M}_O + (O - G) \times \vec{R} = \vec{0}$. Dalla prima equazione cardinale $\vec{a}_G = \vec{0}$; poiché $G$ è inizialmente fermo, resta fermo. Dalla seconda $\vec{L}_G$ è costante, e all'istante iniziale è nullo perché il corpo è in quiete; quindi $I_G\,\vec{\omega} = \vec{0}$ in ogni istante e, poiché $I_G > 0$, $\vec{\omega} = \vec{0}$. La velocità di un punto $P$ del corpo rigido è $\vec{v}_P = \vec{v}_G + \vec{\omega} \times (P - G)$, perciò tutti i punti hanno velocità nulla e il corpo resta in quiete.
:::
::::

:::osservazione{#indipendenza-dal-polo titolo="Scelta libera del polo"}
Se $\vec{R} = \vec{0}$, il cambiamento di polo dà $\vec{M}_{O'} = \vec{M}_O$ per ogni punto $O'$. Perciò l'equazione di rotazione si può scrivere rispetto a un punto qualsiasi del piano, anche esterno al corpo. La soluzione resta la stessa, mentre cambia il numero di incognite che compaiono nell'equazione. Per la trave appoggiata le reazioni $H_A$ e $V_A$ passano per $A$, quindi nella rotazione attorno ad $A$ non compaiono.
:::

## Forme equivalenti delle equazioni di equilibrio

Le due equazioni di traslazione si possono sostituire con altre equazioni di rotazione, scritte rispetto a poli diversi.

::::teorema{#forme-equivalenti titolo="Forme equivalenti delle equazioni di equilibrio"}
Un sistema piano di forze ha risultante e momento risultante nulli se e solo se è soddisfatto uno dei tre sistemi seguenti:

- due equazioni di traslazione lungo due direzioni non parallele e un'equazione di rotazione attorno a un punto qualsiasi;
- un'equazione di traslazione lungo una direzione $r$ e due equazioni di rotazione attorno a due punti $A$ e $B$, con la retta $AB$ non perpendicolare a $r$;
- tre equazioni di rotazione attorno a tre punti $A$, $B$, $C$ non allineati:
$$
\begin{cases}
\sum M_A = 0 \\[4pt]
\sum M_B = 0 \\[4pt]
\sum M_C = 0
\end{cases}
$$

Le forme con più equazioni di rotazione servono a scegliere i poli in modo che ogni equazione contenga una sola incognita. Per la trave appoggiata con un carico verticale $F$ in mezzeria, la rotazione attorno ad $A$ contiene solo $V_B$ e la rotazione attorno a $B$ contiene solo $V_A$.

:::dimostrazione
L'idea è che due equazioni di rotazione, insieme al cambiamento di polo, obbligano la risultante a essere parallela alla retta che unisce i due poli.

Le condizioni sono necessarie, perché con $\vec{R} = \vec{0}$ e $\vec{M}_O = \vec{0}$ sono nulle tutte le componenti di $\vec{R}$ e, per la scelta libera del polo, i momenti rispetto a ogni punto.

Nel primo caso le componenti di $\vec{R}$ lungo due direzioni non parallele sono nulle, quindi $\vec{R} = \vec{0}$, e il momento è nullo rispetto al polo scelto.

Nel secondo caso il cambiamento di polo dà $\vec{M}_B = \vec{M}_A + (A - B) \times \vec{R}$. Poiché $\vec{M}_A = \vec{M}_B = \vec{0}$, risulta $(A - B) \times \vec{R} = \vec{0}$, quindi $\vec{R}$ è nulla oppure parallela alla retta $AB$. La componente di $\vec{R}$ lungo $r$ è nulla, cioè $\vec{R}$ è nulla oppure perpendicolare a $r$. Una risultante non nulla sarebbe allora parallela ad $AB$ e perpendicolare a $r$, contro l'ipotesi; perciò $\vec{R} = \vec{0}$, e $\vec{M}_A = \vec{0}$.

Nel terzo caso, come nel secondo, da $\vec{M}_A = \vec{M}_B = \vec{0}$ segue che $\vec{R}$ è nulla oppure parallela ad $AB$, e da $\vec{M}_A = \vec{M}_C = \vec{0}$ segue che è nulla oppure parallela ad $AC$. I punti non sono allineati, quindi le rette $AB$ e $AC$ non sono parallele, e perciò $\vec{R} = \vec{0}$.
:::
::::

## Reazioni vincolari e diagramma di corpo libero

:::definizione{#reazione-vincolare titolo="Reazione vincolare"}
Un vincolo impedisce alcuni spostamenti del corpo a cui è applicato; per impedirli esercita sul corpo una forza o una coppia, detta **reazione vincolare**. Si assume che i vincoli siano *lisci*, cioè privi di attrito, e *bilaterali*, cioè capaci di impedire lo spostamento in entrambi i versi; i corpi sono rigidi e gli spostamenti infinitesimi. Con queste ipotesi un vincolo esercita una componente di forza lungo ogni direzione di traslazione che impedisce e una coppia se impedisce la rotazione. Il numero di componenti incognite è la *molteplicità* del vincolo. Un carrello su un piano orizzontale impedisce solo lo spostamento verticale del punto vincolato, quindi esercita solo una forza verticale.
:::

:::richiamo{#reazioni-dei-vincoli titolo="Reazioni dei vincoli esterni"}
- **Carrello** (appoggio scorrevole): forza normale al piano di scorrimento, passante per il punto vincolato; una incognita, $R_B$ oppure $V_B$ se il piano è orizzontale.
- **Pendolo** (biella incernierata agli estremi): forza diretta lungo l'asse della biella; una incognita.
- **Cerniera**: forza passante per il punto vincolato, di direzione qualsiasi; due incognite, $H_A$ e $V_A$.
- **Doppio pendolo** (due bielle parallele): forza parallela alle bielle, con retta d'azione qualsiasi, equivalente a una forza nel punto vincolato più una coppia; due incognite.
- **Incastro**: forza di direzione e retta d'azione qualsiasi, equivalente a una forza nel punto vincolato più una coppia; tre incognite, $H_A$, $V_A$ e $M_A$.

La classificazione dei vincoli è trattata nell'argomento sui vincoli e l'analisi cinematica.

:::

:::definizione{#diagramma-di-corpo-libero titolo="Diagramma di corpo libero"}
Il **diagramma di corpo libero** è il disegno del corpo in cui ogni vincolo è sostituito dalle sue reazioni e compaiono tutti i carichi. Le reazioni si disegnano nel verso positivo degli assi: $H$ verso destra, $V$ verso l'alto, $M_A$ antiorario, $R_B$ nel verso scelto lungo la sua retta d'azione. Il corpo così disegnato non ha più vincoli, quindi le equazioni cardinali si applicano alle forze che compaiono nel disegno. I carichi distribuiti si possono sostituire con le loro risultanti.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" reazioni="A,1.3,0,H_A;A,0,1.3,V_A;B,0,1.3,V_B" forze="3 0,0,-1.5,qL" quote="A,3 0,3 m;3 0,B,3 m" titolo="Diagramma di corpo libero di una trave appoggiata lunga $6\,\mathrm{m}$ con carico uniforme $q$: il carico è sostituito dalla risultante $qL$ in mezzeria"}
:::

## Scelta delle equazioni e dei poli

:::osservazione{#scelta-dei-poli titolo="Un'incognita per equazione"}
Le tre equazioni si possono risolvere come un sistema qualsiasi, ma con una scelta opportuna delle equazioni e dei poli ciascuna contiene una sola incognita.

- Nella rotazione attorno al punto in cui si incontrano le rette d'azione di due reazioni incognite compare solo la terza. Le due reazioni di una cerniera passano per la cerniera, perciò il polo si mette lì.
- Nella traslazione perpendicolare a due reazioni incognite parallele compare solo la terza. Con due reazioni verticali si scrive la traslazione orizzontale.

Si risolve per prima l'equazione con una sola incognita e si sostituisce il risultato nelle altre.
:::

:::esempio{titolo="Trave appoggiata con una forza inclinata"}
La trave $AB$, lunga $5\,\mathrm{m}$, ha una cerniera in $A$ e un carrello su piano orizzontale in $B$. A $2\,\mathrm{m}$ da $A$ agisce una forza $F = 20\,\mathrm{kN}$ diretta verso il basso e verso destra, con componenti $12\,\mathrm{kN}$ orizzontale e $16\,\mathrm{kN}$ verticale.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2 0,0.9,-1.2,F" quote="A,2 0,2 m;2 0,B,3 m" titolo="Trave appoggiata con la forza $F = 20\,\mathrm{kN}$ inclinata"}

::struttura{nodi="A,0,0;B,5,0" aste="A-B" reazioni="A,1.1,0,H_A;A,0,1.1,V_A;B,0,1.1,V_B" forze="2 0,1.2,0,12 kN;2 0,0,-1.6,16 kN" quote="A,2 0,2 m;2 0,B,3 m" titolo="Diagramma di corpo libero con la forza scomposta nelle sue componenti"}

Il carrello in $B$ esercita solo la reazione verticale $V_B$, quindi la traslazione orizzontale contiene solo $H_A$; la rotazione attorno ad $A$ contiene solo $V_B$:
$$
\begin{cases}
H_A + 12 = 0 \\[4pt]
V_A + V_B - 16 = 0 \\[4pt]
5\,V_B - 16 \cdot 2 = 0
\end{cases}
$$
Dalla terza equazione $V_B = \dfrac{32}{5} = 6{,}4\,\mathrm{kN}$, dalla seconda $V_A = 16 - 6{,}4 = 9{,}6\,\mathrm{kN}$, dalla prima $H_A = -12\,\mathrm{kN}$. Le reazioni verticali sono dirette verso l'alto; $H_A$ vale $12\,\mathrm{kN}$ ed è diretta verso sinistra, opposta alla componente orizzontale del carico.
:::

## Carichi distribuiti e coppie concentrate

:::richiamo{#risultante-carico-distribuito titolo="Risultante di un carico distribuito"}
Un carico $q(x)$ distribuito sul tratto $a \leq x \leq b$ ha risultante uguale all'area del diagramma del carico, con retta d'azione per il baricentro del diagramma:
$$
Q = \int_a^b q(x)\,dx ,
\qquad
x_Q = \frac{1}{Q}\int_a^b x\,q(x)\,dx .
$$
Il carico uniforme $q$ su una lunghezza $\ell$ ha risultante $q\ell$ nel punto medio; il carico triangolare con valore massimo $q_0$ ha risultante $\dfrac{q_0\ell}{2}$ a $\dfrac{\ell}{3}$ dall'estremo in cui il carico vale $q_0$; il carico trapezoidale si scompone in un rettangolo e un triangolo. Il carico e la sua risultante sono sistemi equivalenti, quindi nelle equazioni di equilibrio del corpo su cui agisce il carico si può sostituire con la risultante. Si rimanda all'argomento sui vettori applicati, i momenti e i sistemi di forze equivalenti.
:::

:::attenzione
La risultante si applica nel baricentro del *tratto caricato*. Per una trave appoggiata lunga $6\,\mathrm{m}$ con $q = 3\,\mathrm{kN/m}$ sui primi $4\,\mathrm{m}$, la risultante è $Q = 12\,\mathrm{kN}$ a $2\,\mathrm{m}$ da $A$. La rotazione attorno ad $A$ dà $6\,V_B - 12 \cdot 2 = 0$, quindi $V_B = 4\,\mathrm{kN}$ e $V_A = 8\,\mathrm{kN}$. Con la risultante in mezzeria si otterrebbe $V_A = V_B = 6\,\mathrm{kN}$, che è il risultato di un carico diverso.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,4 0,0.6,0.6,q" forze="2 0,0,-1.5,Q" quote="A,2 0,2 m;2 0,4 0,2 m;4 0,B,2 m" titolo="La risultante $Q = 12\,\mathrm{kN}$ del carico sui primi $4\,\mathrm{m}$ passa per il punto medio del tratto caricato"}
:::

:::osservazione{#coppie-concentrate titolo="Coppie concentrate"}
Una coppia concentrata $\mathcal{M}$ ha risultante nulla, quindi non compare nelle equazioni di traslazione. Il suo momento è lo stesso rispetto a ogni polo, perciò entra in ogni equazione di rotazione con il valore $\mathcal{M}$, positivo se antiorario, qualunque sia il punto in cui è applicata. Per una trave appoggiata lunga $6\,\mathrm{m}$ con una coppia oraria $\mathcal{M} = 12\,\mathrm{kN\,m}$, la rotazione attorno ad $A$ dà $6\,V_B - 12 = 0$, quindi $V_B = 2\,\mathrm{kN}$ verso l'alto, e la traslazione verticale dà $V_A = -2\,\mathrm{kN}$, cioè $2\,\mathrm{kN}$ verso il basso. Le due reazioni formano una coppia antioraria di braccio $6\,\mathrm{m}$ e momento $12\,\mathrm{kN\,m}$, che equilibra la coppia applicata; i loro valori non dipendono dalla posizione di $\mathcal{M}$ sulla trave.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" coppie="2 0,-1,ℳ" reazioni="A,0,-1.2,V_A;B,0,1.2,V_B" quote="A,2 0,2 m;2 0,B,4 m" titolo="La coppia oraria $\mathcal{M}$ è equilibrata dalla coppia delle reazioni $V_A$ e $V_B$, disegnate nel verso effettivo"}
:::

## Mensole e travi con sbalzi

:::esempio{titolo="Mensola con carico uniforme e coppia"}
La mensola $AB$, lunga $3\,\mathrm{m}$, è incastrata in $A$, porta un carico uniforme $q = 4\,\mathrm{kN/m}$ e una coppia antioraria $\mathcal{M} = 6\,\mathrm{kN\,m}$ nell'estremo libero $B$.

::struttura{nodi="A,0,0;B,3,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.3,0.3,q" coppie="B,1,ℳ" quote="A,B,3 m" titolo="Mensola con carico uniforme $q$ e coppia $\mathcal{M}$ nell'estremo libero"}

L'incastro esercita $H_A$, $V_A$ e $M_A$; la risultante del carico è $q \cdot 3 = 12\,\mathrm{kN}$ a $1{,}5\,\mathrm{m}$ da $A$. Tutte le reazioni sono applicate in $A$, quindi la rotazione attorno ad $A$ contiene solo $M_A$:
$$
\begin{cases}
H_A = 0 \\[4pt]
V_A - 12 = 0 \\[4pt]
M_A - 12 \cdot 1{,}5 + 6 = 0
\end{cases}
$$
Risulta $V_A = 12\,\mathrm{kN}$ verso l'alto e $M_A = 12\,\mathrm{kN\,m}$ antiorario. La coppia applicata riduce il momento che l'incastro deve fornire per equilibrare il carico.
:::

:::osservazione{#segno-delle-reazioni titolo="Segno delle reazioni"}
Nelle equazioni le reazioni si assumono positive secondo gli assi, quindi il loro verso effettivo si legge dal segno del risultato. Un valore negativo indica il verso opposto a quello assunto, e le equazioni non si riscrivono. Nella conclusione il verso si dice a parole. Un risultato negativo è frequente nelle **travi con sbalzi**, nelle quali un carico applicato oltre un appoggio tende a sollevare l'appoggio opposto; con vincoli bilaterali la reazione verso il basso è possibile e trattiene la trave.
:::

:::esempio{titolo="Trave con sbalzo"}
La trave $AC$ ha una cerniera in $A$, un carrello in $B$ a $4\,\mathrm{m}$ da $A$ e uno sbalzo $BC$ lungo $2\,\mathrm{m}$, con una forza verticale $F = 12\,\mathrm{kN}$ in $C$.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="C,0,-1.5,F" quote="A,B,4 m;B,C,2 m" titolo="Trave con sbalzo caricata all'estremo libero $C$"}

La rotazione attorno ad $A$ dà $4\,V_B - 12 \cdot 6 = 0$, quindi $V_B = 18\,\mathrm{kN}$ verso l'alto; la traslazione verticale dà $V_A = 12 - 18 = -6\,\mathrm{kN}$, cioè $6\,\mathrm{kN}$ verso il basso. Il carico sullo sbalzo fa ruotare la trave attorno a $B$ e tende a sollevarla in $A$, perciò la cerniera la trattiene con una forza diretta verso il basso. La reazione in $B$ supera il carico, perché equilibra anche $V_A$.
:::

## Appoggi inclinati e travi ad asse spezzato

:::osservazione{#appoggio-inclinato titolo="Carrello su un piano inclinato"}
Un carrello che scorre su un piano inclinato dell'angolo $\alpha$ sull'orizzontale esercita una reazione $R_B$ normale al piano, quindi inclinata di $\alpha$ sulla verticale, con componenti $R_B\sin\alpha$ orizzontale e $R_B\cos\alpha$ verticale. L'incognita resta una sola. Con una cerniera nell'altro estremo la rotazione attorno alla cerniera contiene solo $R_B$, e la componente orizzontale di $R_B$ produce una reazione orizzontale nella cerniera anche quando i carichi sono tutti verticali.
:::

:::esempio{titolo="Trave con carrello inclinato"}
La trave $AB$, lunga $4\,\mathrm{m}$, ha una cerniera in $A$ e in $B$ un carrello su un piano inclinato con $\tan\alpha = \dfrac{3}{4}$, cioè $\sin\alpha = 0{,}6$ e $\cos\alpha = 0{,}8$; in mezzeria agisce una forza verticale $F = 10\,\mathrm{kN}$. La reazione $R_B$ è normale al piano e diretta verso l'alto e verso sinistra.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,cerniera;B,carrello,306.87" forze="2 0,0,-1,F" reazioni="B,-0.6,0.8,R_B" quote="A,2 0,2 m;2 0,B,2 m" titolo="Carrello su piano inclinato: $R_B$ è inclinata di $\alpha$ sulla verticale"}

$$
\begin{cases}
H_A - 0{,}6\,R_B = 0 \\[4pt]
V_A + 0{,}8\,R_B - 10 = 0 \\[4pt]
0{,}8\,R_B \cdot 4 - 10 \cdot 2 = 0
\end{cases}
$$
La terza equazione dà $R_B = \dfrac{20}{3{,}2} = 6{,}25\,\mathrm{kN}$; poi $H_A = 3{,}75\,\mathrm{kN}$ verso destra e $V_A = 10 - 5 = 5\,\mathrm{kN}$ verso l'alto. Nella rotazione attorno ad $A$ la componente orizzontale di $R_B$ non compare, perché la sua retta d'azione passa per $A$.
:::

:::osservazione{#trave-ad-asse-spezzato titolo="Travi a ginocchio e ad asse spezzato"}
Una trave ad asse spezzato, per esempio a L (trave a ginocchio) o a portale, formata da tratti saldati fra loro, è un solo corpo rigido, perciò le equazioni di equilibrio sono le stesse della trave rettilinea. Il momento di ciascuna forza si calcola con il braccio, cioè la distanza del polo dalla retta d'azione. Per una forza orizzontale il braccio è la differenza di quota tra il polo e il punto di applicazione.
:::

:::esempio{titolo="Trave a ginocchio con una forza orizzontale"}
La trave $ACB$ è formata dal ritto $AC$, alto $3\,\mathrm{m}$, e dal traverso $CB$, lungo $4\,\mathrm{m}$; ha una cerniera al piede $A$ e un carrello su piano orizzontale in $B$. In $C$ agisce una forza orizzontale $F = 6\,\mathrm{kN}$ verso destra.

::struttura{nodi="A,0,0;C,0,3;B,4,3" aste="A-C;C-B" vincoli="A,cerniera;B,carrello" forze="C,1.2,0,F" quote="A,C,3 m,-0.8;C,B,4 m,-0.8" titolo="Trave a ginocchio con la forza orizzontale $F$ nel nodo $C$"}

La forza $F$ ha retta d'azione orizzontale alla quota $3\,\mathrm{m}$, quindi il suo braccio rispetto ad $A$ è $3\,\mathrm{m}$ e il suo momento è orario:
$$
\begin{cases}
H_A + 6 = 0 \\[4pt]
V_A + V_B = 0 \\[4pt]
4\,V_B - 6 \cdot 3 = 0
\end{cases}
$$
Risulta $V_B = 4{,}5\,\mathrm{kN}$ verso l'alto, $V_A = -4{,}5\,\mathrm{kN}$, cioè $4{,}5\,\mathrm{kN}$ verso il basso, e $H_A = -6\,\mathrm{kN}$, cioè $6\,\mathrm{kN}$ verso sinistra. Un carico orizzontale produce quindi reazioni verticali, che formano la coppia necessaria a equilibrare il momento di $F$.
:::

:::osservazione{#carichi-su-aste-inclinate titolo="Carichi distribuiti su un'asta inclinata"}
Per un'asta di lunghezza $\ell$ inclinata dell'angolo $\alpha$ sull'orizzontale si distinguono tre carichi uniformi.

- Il peso proprio $g$, per unità di lunghezza dell'asta: è verticale e ha risultante $g\,\ell$.
- Un carico $q$ per unità di proiezione orizzontale, come la neve su una falda: è verticale e ha risultante $q\,\ell\cos\alpha$, perché la proiezione orizzontale dell'asta è lunga $\ell\cos\alpha$.
- Un carico $p$ perpendicolare all'asta, per unità di lunghezza, come il vento: ha risultante $p\,\ell$ perpendicolare all'asta.

In tutti e tre i casi la risultante passa per il punto medio dell'asta. Per un'asta da $(0, 0)$ a $(4, 3)$, lunga $5\,\mathrm{m}$ con $\cos\alpha = 0{,}8$, un peso proprio di $2\,\mathrm{kN/m}$ dà $10\,\mathrm{kN}$ e un carico di $2\,\mathrm{kN/m}$ sulla proiezione orizzontale dà $8\,\mathrm{kN}$.
:::

## Verifica dell'equilibrio

:::osservazione{#verifica-equilibrio titolo="Equazione di verifica"}
Trovate le reazioni con tre equazioni indipendenti, una quarta equazione di equilibrio, per esempio la rotazione attorno a un altro punto, è conseguenza delle prime tre, per le forme equivalenti delle equazioni di equilibrio. Con i valori corretti dà quindi $0$, mentre un risultato diverso da zero indica un errore di calcolo, di braccio o di segno. Per la trave appoggiata con la forza inclinata la rotazione attorno a $B$ dà
$$
-5\,V_A + 16 \cdot 3 = -5 \cdot 9{,}6 + 48 = 0 ,
$$
dove $H_A$ e la componente orizzontale del carico non compaiono, perché le loro rette d'azione coincidono con l'asse della trave, che passa per $B$. Per la trave con sbalzo la rotazione attorno a $C$ dà $-6\,V_A - 2\,V_B = -6 \cdot (-6) - 2 \cdot 18 = 0$.
:::

## Strutture labili e iperstatiche

Le strutture viste finora hanno tre vincoli semplici disposti in modo che le tre equazioni determinino le reazioni. Con vincoli insufficienti, mal disposti o sovrabbondanti la situazione cambia.

:::richiamo{titolo="Teorema di Rouché-Capelli"}
Il sistema lineare $A\,\mathbf{r} = \mathbf{b}$, con $A$ matrice $3 \times s$, ha soluzioni se e solo se $\operatorname{rango} A = \operatorname{rango}\,(A \mid \mathbf{b})$; in questo caso le soluzioni dipendono da $s - \operatorname{rango} A$ parametri. Si rimanda all'argomento sui sistemi lineari e il rango di Algebra lineare.
:::

::::teorema{#reazioni-determinate titolo="Determinazione delle reazioni"}
Sia un corpo rigido piano con $s$ reazioni vincolari semplici $r_1, \dots, r_s$. Le tre equazioni di equilibrio formano il sistema lineare $A\,\mathbf{r} = \mathbf{b}$, in cui la matrice $A$, di tipo $3 \times s$, dipende solo dalla posizione e dalla direzione dei vincoli e il vettore $\mathbf{b}$ dipende solo dai carichi.

- Se $s = 3$ e $\det A \neq 0$, per ogni carico le reazioni esistono e sono uniche, e la struttura si dice **isostatica**.
- Se $\operatorname{rango} A < 3$, esistono carichi per cui il sistema non ha soluzione; la struttura si dice **labile** ed è in equilibrio solo per carichi particolari.
- Se $s > 3$ e $\operatorname{rango} A = 3$, per ogni carico le reazioni esistono e dipendono da $s - 3$ parametri; la struttura si dice *iperstatica*, e le equazioni della statica non bastano a determinarle.

:::dimostrazione
Si applica il teorema di Rouché-Capelli. Se $s = 3$ e $\det A \neq 0$, risulta $\operatorname{rango} A = 3 = \operatorname{rango}\,(A \mid \mathbf{b})$ per ogni $\mathbf{b}$, quindi c'è una sola soluzione, dato che dipende da $3 - 3 = 0$ parametri. Se $\operatorname{rango} A < 3$, le colonne di $A$ generano un sottospazio proprio di $\mathbb{R}^3$; per un carico con $\mathbf{b}$ fuori da questo sottospazio si ha $\operatorname{rango}\,(A \mid \mathbf{b}) > \operatorname{rango} A$, e il sistema non ha soluzioni. Se $\operatorname{rango} A = 3$, anche la matrice completa, che ha tre righe, ha rango $3$; perciò il sistema ha soluzioni per ogni $\mathbf{b}$, dipendenti da $s - 3$ parametri.
:::
::::

:::osservazione{#caso-labile titolo="Struttura labile"}
La trave $AB$ appoggiata su due carrelli con piano orizzontale ha due reazioni verticali, $V_A$ e $V_B$. La traslazione orizzontale non contiene incognite e si riduce alla condizione $\sum F_x = 0$ sui soli carichi, quindi l'equilibrio esiste solo se la risultante dei carichi è verticale. Una forza orizzontale $H$ applicata alla trave non è equilibrata da nessuna reazione, e la trave trasla. Nel sistema $A\,\mathbf{r} = \mathbf{b}$ la riga della traslazione orizzontale di $A$ è nulla, quindi $\operatorname{rango} A < 3$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,carrello;B,carrello" forze="2 0,0,-1.5,F;B,1.5,0,H" quote="A,2 0,2 m;2 0,B,4 m" titolo="Trave su due carrelli: la forza orizzontale $H$ non è equilibrata da nessuna reazione"}
:::

:::osservazione{#caso-iperstatico titolo="Struttura iperstatica"}
La trave $AB$, lunga $4\,\mathrm{m}$, incastrata in $A$ e appoggiata su un carrello in $B$, con una forza verticale $F = 10\,\mathrm{kN}$ in mezzeria, ha quattro reazioni incognite. Le equazioni di equilibrio sono
$$
\begin{cases}
H_A = 0 \\[4pt]
V_A + V_B - 10 = 0 \\[4pt]
M_A + 4\,V_B - 10 \cdot 2 = 0
\end{cases}
$$
e per ogni valore di $V_B$ danno $V_A = 10 - V_B$ e $M_A = 20 - 4\,V_B$. Il valore effettivo di $V_B$ dipende dalla deformabilità della trave e si calcola nella Scienza delle costruzioni. Il legame tra il numero e la disposizione dei vincoli e la labilità della struttura è trattato nell'argomento sui vincoli e l'analisi cinematica.
:::
