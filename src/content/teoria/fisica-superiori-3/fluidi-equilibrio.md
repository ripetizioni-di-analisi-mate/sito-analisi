---
titolo: Fluidi in equilibrio
sommario: Pressione idrostatica, manometri, torchio idraulico e galleggiamento.
---

## Pressione e densità

:::definizione{#pressione titolo="Forza distribuita su una superficie"}
In un fluido a riposo, le forze di contatto sono perpendicolari alle superfici. Su una piccola faccia, la **pressione** è la forza normale per unità di area. Se è uniforme sulla superficie piana si ha $p=\dfrac{F_\perp}{A}$ e l’unità è il pascal, $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. Se la pressione varia fra punti della superficie, $F_\perp/A$ è una media. In tal caso la forza totale si trova sommando i contributi di piccole porzioni, ognuno con la pressione locale. Su un’area piana verticale in un liquido omogeneo, la pressione varia linearmente con la quota. La media è allora la pressione alla quota del baricentro geometrico dell’area, mentre il punto di applicazione della risultante può trovarsi più in basso.

La pressione è uno scalare. In un punto del fluido fermo ha lo stesso valore qualunque sia l’orientamento della piccola faccia che la misura, mentre la forza risultante su quella faccia è normale ad essa. La **densità** $\rho=m/V$ misura la massa per unità di volume. Due fluidi con la stessa pressione locale possono avere densità diverse e quindi gradienti idrostatici diversi.
:::

:::esempio{titolo="Conversione di una superficie"}
Una forza di $120\,\mathrm N$ agisce normalmente e uniformemente su $30\,\mathrm{cm^2}$. Poiché $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$, l’area equivale a $0{,}003\,\mathrm{m^2}$ e la pressione è $4\cdot10^4\,\mathrm{Pa}$. A parità di forza, un’area metà di questa dà pressione doppia. Nella conversione va elevato al quadrato il fattore da centimetri a metri.
:::

:::esempio{#risultante-parete titolo="Risultante e momento su una paratoia"}
Una paratoia rettangolare larga $b$ va dal pelo libero alla profondità $H$. All’esterno c’è aria alla stessa pressione atmosferica della superficie. La differenza di pressione forma un triangolo fra $0$ e $\rho gH$. La media vale $\dfrac{\rho gH}{2}$, quindi la risultante ha modulo $F=\dfrac{\rho gbH^2}{2}$.

Per calcolare il momento rispetto al bordo alto serve anche la profondità di applicazione. Le strisce più basse ricevono forze maggiori. Il baricentro del triangolo delle pressioni è a $\dfrac{2H}{3}$ dal bordo alto. I due risultati hanno usi diversi: $\dfrac{H}{2}$ dà la pressione media mentre $\dfrac{2H}{3}$ è il braccio della risultante rispetto al bordo.

::grafico{assi=0 linee="0,0 0,-3;0,0 1.8,0" poligoni="0,0 1.8,-3 0,-3" vettori=".36,-.6,0,-.6;.72,-1.2,0,-1.2;1.08,-1.8,0,-1.8;1.44,-2.4,0,-2.4" segmenti="-.57,-1.5,.9,-1.5;-.57,-2,1.2,-2" punti="0,-2,pieno" etichette="-1.05,-1.38,H/2;-1.05,-1.94,2H/3;.54,-3.22,ρgH" xmin=-1.65 xmax=2.1 ymin=-3.55 ymax=.45 titolo="La distribuzione triangolare delle pressioni cresce con la profondità. Il punto indica la quota di applicazione della risultante."}
:::

## La legge di Stevino

:::teorema{#stevino titolo="Pressione e profondità"}
In un liquido fermo e di densità costante $\rho$, in gravità uniforme, si prenda la quota $z$ crescente verso l’alto. L’equilibrio di una colonna di area $A$ fra $z_1$ e $z_2>z_1$ richiede che la forza di pressione sulla base, diretta verso l’alto, bilanci il peso e la forza di pressione sulla sommità, diretti verso il basso. Si ha
$$
(p_1-p_2)A=\rho A(z_2-z_1)g,
\qquad p_1-p_2=\rho g(z_2-z_1).
$$
Rispetto a una superficie di pressione $p_0$, a profondità $h$ positiva verso il basso vale $p=p_0+\rho gh$. L’aumento per metro è $\rho g$, con unità $\mathrm{Pa/m}$. Due punti alla stessa quota nello stesso liquido fermo e connesso hanno la stessa pressione. La forma del recipiente può cambiare la quantità di liquido, mentre la differenza di pressione a quota data segue dal bilancio locale.

In un recipiente con strati diversi, si percorre verticalmente lo spazio e si accumula $\rho_j g h_j$ per ogni spessore attraversato verso il basso nello strato $j$. Alla frontiera fra due liquidi fermi immiscibili si prende la continuità della pressione, trascurando gli effetti della tensione superficiale. Un grafico della pressione rispetto alla profondità ha allora tratti rettilinei con pendenze diverse.
:::

:::esempio{titolo="Sovrapressione in due strati"}
Uno strato d’olio spesso $0{,}50\,\mathrm m$, di densità $800\,\mathrm{kg/m^3}$, sovrasta uno strato d’acqua spesso $1\,\mathrm m$, di densità $1000\,\mathrm{kg/m^3}$. Con $g=10\,\mathrm{m/s^2}$ la sovrapressione dopo l’olio vale $4000\,\mathrm{Pa}$. Dopo l’acqua si aggiungono $10000\,\mathrm{Pa}$ e si arriva a $14000\,\mathrm{Pa}$. L’acqua dà un aumento maggiore per unità di profondità, perché ha densità maggiore.

::grafico{linee="0,0 .5,4 1.5,14" punti="0,0,pieno;.5,4,pieno;1.5,14,pieno" xmin=0 xmax=1.8 ymin=0 ymax=16 nomi="h (m),Δp (kPa)" titolo="La pendenza aumenta al passaggio dall’olio all’acqua"}
:::

:::osservazione{#quota-colonna titolo="Leggere la pressione lungo un percorso"}
Con $h$ crescente verso il basso si somma $\rho g\Delta h$ nei tratti in discesa e lo si sottrae nei tratti in salita. Il tratto orizzontale dà zero quando si resta nello stesso liquido. Il percorso fra i punti A e B dell’acqua può scendere, passare nel tubo e risalire della stessa altezza. I contributi verticali si cancellano. I punti C e D sono invece alla stessa altezza in liquidi diversi. Per confrontarli si parte dalla pressione comune all’interfaccia e si sale della stessa distanza in acqua e in olio. La caduta di pressione è maggiore in acqua, perché più densa, perciò C nell’olio ha pressione maggiore di D nell’acqua.

::grafico{assi=0 linee="0,2.8 0,0 3.8,0 3.8,2.8;1.3,2.8 1.3,.6 2.5,.6 2.5,2.8;0,2.4 1.3,2.4;2.5,2.67 3.8,2.67;2.5,1.32 3.8,1.32" segmenti=".62,1.06,.62,.32;.62,.32,3.12,.32;3.12,.32,3.12,1.06" punti=".62,1.06,pieno,A;3.12,1.06,pieno,B;.62,1.69,pieno,D;3.12,1.69,pieno,C" etichette=".3,2.09,acqua;2.78,1.91,olio" xmin=-.3 xmax=4.09 ymin=-.13 ymax=2.92 titolo="A e B sono alla stessa quota nell’acqua. Per confrontare C con D occorre attraversare l’interfaccia acqua–olio."}
:::

## Pressione assoluta e manometri

:::osservazione{#manometri titolo="Confrontare pressioni"}
La **pressione assoluta** è riferita al vuoto. La pressione manometrica o relativa è $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}$, dove $p_{\mathrm{atm}}$ è la pressione atmosferica locale. Una lettura relativa nulla significa che interno ed esterno hanno la stessa pressione. Una lettura negativa è possibile quando la pressione interna è minore dell’atmosferica. Per il calcolo della forza risultante su una parete con fluido su entrambi i lati si usa la differenza fra le due pressioni con le rispettive normali.

In un manometro a U riempito con liquido omogeneo, due punti alla stessa quota nello stesso liquido connesso sono alla stessa pressione. Nel caso in cui il peso del gas sopra le due superfici sia trascurabile, scendere di $\Delta h$ dalla superficie più alta fa aumentare la pressione di $\rho g\Delta h$. Questa pressione raggiunge quella imposta sulla superficie più bassa. Il ramo con il livello più basso è dunque collegato alla pressione maggiore.
:::

:::esempio{titolo="Un manometro di acqua"}
Il livello del ramo destro è $0{,}20\,\mathrm m$ più alto di quello del ramo sinistro. Con acqua di densità $1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{m/s^2}$, la pressione del gas a sinistra supera quella di destra di $2000\,\mathrm{Pa}$. Se il gas a destra è all’atmosfera, a sinistra la pressione relativa è $+2\,\mathrm{kPa}$.

::grafico{assi=0 linee="0,.7 0,0 1,0 1,.7;.2,.7 .2,.2 .8,.2 .8,.7;0,.3 .2,.3;.8,.5 1,.5" segmenti=".2,.3,.8,.3" vettori=".1,.65,.1,.34,p_L;.9,.65,.9,.52,p_R" xmin=-.3 xmax=1.4 ymin=-.1 ymax=.85 titolo="Il livello più basso è quello del ramo sinistro"}
:::

:::esempio{#riferimento-pressione titolo="Cambiare riferimento e calcolare la forza"}
Con atmosfera a $100\,\mathrm{kPa}$, l’aggiunta dello stesso valore a ogni lettura relativa produce la corrispondente pressione assoluta.

| Ambiente | Relativa (kPa) | Assoluta (kPa) |
| --- | ---: | ---: |
| Atmosfera | $0$ | $100$ |
| Camera in pressione | $+12$ | $112$ |
| Camera in depressione | $-18$ | $82$ |

Sul coperchio della camera in depressione, una pressione esterna di $100\,\mathrm{kPa}$ e una interna di $82\,\mathrm{kPa}$ danno una differenza di $-18\,\mathrm{kPa}$ verso l’esterno. Su $0{,}20\,\mathrm{m^2}$ è una risultante di $3600\,\mathrm N$ verso l’interno. Il segno è quello della differenza fra pressioni, mentre entrambe le pressioni assolute sono positive.

::grafico{assi=0 linee="-.55,-1.2 0,-1.2 0,1.2 -.55,1.2" poligoni="0,-1.2 .21,-1.2 .21,1.2 0,1.2" vettori="-1.21,.38,0,.38;1.68561,.38,.21,.38" etichette="-1.19,.7,82 kPa;.78,.7,100 kPa;-1.15,-.86,interno;.71,-.86,esterno" xmin=-1.71 xmax=2.08 ymin=-1.49 ymax=1.42 titolo="La pressione esterna esercita la forza maggiore. La risultante delle due pressioni è diretta verso l’interno."}
:::

:::esempio{#manometro-due-liquidi titolo="Un manometro con due liquidi"}
Una colonna d’olio alta $0{,}30\,\mathrm m$ e di densità $800\,\mathrm{kg/m^3}$ preme sull’acqua a sinistra. Le due superfici libere sono all’atmosfera. Partendo dalla superficie dell’olio e scendendo all’interfaccia I, si guadagnano $2{,}4\,\mathrm{kPa}$ con $g=10\,\mathrm{m/s^2}$. Alla stessa quota, l’acqua nel ramo destro deve avere la stessa pressione di I. La sua superficie D è quindi $0{,}24\,\mathrm m$ più in alto di I, ma più in basso del livello libero dell’olio di $0{,}06\,\mathrm m$. Pressioni uguali alle superfici possono quindi convivere con un dislivello quando i liquidi differiscono.

::grafico{assi=0 linee="0,.76 0,0 1,0 1,.76;.22,.76 .22,.23 .78,.23 .78,.76;0,.40 .22,.40;0,.70 .22,.70;.78,.64 1,.64" segmenti=".11,.40,.89,.40;.89,.4,.89,.64" punti=".11,.40,pieno,I;.89,.64,pieno,D" etichette=".03,.58,olio;.49,.29,acqua" xmin=-.26 xmax=1.25 ymin=-.045 ymax=.87 titolo="La linea tratteggiata parte dall’interfaccia I e resta alla stessa quota. Le due superfici libere sono all’atmosfera."}
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmissione di una variazione di pressione"}
Una variazione di pressione imposta al contorno di un liquido confinato si trasmette a tutto il fluido in equilibrio quando densità e quote restano fissate. La pressione assoluta nei diversi punti può comunque differire per l’effetto idrostatico. Per un torchio ideale con pistoni alla stessa quota, masse dei pistoni e attriti trascurabili e uguali pressioni atmosferiche esterne, gli eccessi di pressione sono uguali:
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Qui $F_j$ è la forza esterna efficace che equilibra la spinta in eccesso sul pistone $j$. L’aumento di forza sul pistone di sezione maggiore è compensato dalla minore corsa. Per piccoli spostamenti di un liquido incomprimibile si ha $A_1s_1=A_2s_2$, con spostamenti $s_1$ e $s_2$ in versi fisicamente opposti. Ne segue $F_1s_1=F_2s_2$ per i moduli del lavoro, se si trascurano perdite e variazioni di quota.

Se le quote differiscono, si aggiunge il termine idrostatico alla relazione fra pressioni del liquido. Se le pressioni esterne differiscono, si calcola la differenza fra la pressione interna $p_{\mathrm{int},j}$ e la pressione esterna $p_{\mathrm{ext},j}$ di ciascun pistone. Moltiplicando per l'area si ottiene il carico efficace $F_j=A_j(p_{\mathrm{int},j}-p_{\mathrm{ext},j})$, con segno positivo verso il liquido. In particolare si evita di trattare un rapporto fra aree come una moltiplicazione dell’energia.
:::

:::esempio{titolo="Forza disponibile e spostamento"}
L’area grande vale cinque volte l’area piccola. Una spinta di $80\,\mathrm N$ sul piccolo equilibra $400\,\mathrm N$ sul grande. Una corsa di $10\,\mathrm{cm}$ sul piccolo produce $2\,\mathrm{cm}$ sul grande. Convertendo le corse in metri, entrambi i prodotti forza per corsa valgono $8\,\mathrm J$.
:::

:::esempio{#pistoni-quote-diverse titolo="Premere e sostenere a quote diverse"}
Nel liquido di un torchio, se il pistone grande è più alto di $\Delta z$, la pressione interna lì è minore di $\rho g\Delta z$. Per esempio, con olio di densità $800\,\mathrm{kg/m^3}$, $g=10\,\mathrm{m/s^2}$ e $\Delta z=1{,}0\,\mathrm m$, una pressione relativa di $26\,\mathrm{kPa}$ sotto il pistone basso diventa $18\,\mathrm{kPa}$ sotto quello alto. In aria alla stessa pressione, il carico su $0{,}030\,\mathrm{m^2}$ vale quindi $540\,\mathrm N$. Per confrontare i lavori dei pistoni a quote diverse bisogna includere la variazione di energia potenziale del liquido trasferito fra i due rami.

::grafico{assi=0 linee="0,1.1 0,-.65 4,-.65 4,2.05;.7,1.1 .7,-.18 2.12,-.18 2.12,2.05;0,.58 .7,.58;2.12,1.58 4,1.58" segmenti=".7,.58,2.12,.58;1.73,.58,1.73,1.58;1.73,1.58,2.12,1.58" vettori=".35,1.27,.35,.66,F₁;3.06,2.42,3.06,1.66,F₂" etichette="1.22,1.16,Δz;.03,.1,A₁;2.26,.96,A₂" xmin=-.35 xmax=4.3 ymin=-.78 ymax=2.62 titolo="La quota del pistone alto introduce una diminuzione idrostatica di pressione fra A₁ e A₂."}
:::

## Principio di Archimede

:::teorema{#archimede titolo="Spinta del fluido"}
Un corpo immerso in un fluido fermo riceve una **spinta idrostatica** rivolta verso l’alto, di modulo uguale al peso del fluido spostato. Se la densità è costante, $F_A=\rho_f gV_{\mathrm{imm}}$. Si può pensare di sostituire temporaneamente il corpo con il volume di liquido che occuperebbe lo stesso spazio. Le pressioni esterne su quel volume bilancerebbero il suo peso. Rimesse sul corpo, quelle pressioni esercitano la stessa risultante. Per un prisma immerso, la differenza fra le pressioni delle facce orizzontali è $\rho_f gh$ e moltiplicata per l’area dà $\rho_f gAh$, che è il peso del liquido spostato.

Se il corpo è appeso a un filo teso dall’alto, è fermo e spinta e peso sono le sole altre forze verticali, $T=mg-F_A$. Una tensione negativa segnala che il filo dall’alto non può mantenere il corpo nella configurazione ipotizzata. Per trattenerlo completamente immerso quando la spinta supera il peso, può servire una forza verso il basso. Se il corpo accelera, la somma con segno delle forze verticali è $ma$.
:::

:::esempio{titolo="Peso apparente di un blocco"}
Un blocco da $4\,\mathrm{kg}$ di volume $10^{-3}\,\mathrm{m^3}$ è immerso interamente in acqua e appeso fermo. Con $g=10\,\mathrm{m/s^2}$ il suo peso gravitazionale vale $40\,\mathrm N$ e la spinta $10\,\mathrm N$. La tensione letta dal dinamometro è $30\,\mathrm N$. Il volume e il peso gravitazionale rimangono uguali prima e dopo l’immersione.

::grafico{assi=0 poligoni="-.75,-.6 .75,-.6 .75,.6 -.75,.6" linee="-2,1 2,1;0,.6 0,2.6" vettori="-.35,0,-.35,.5,F_A;0,0,0,-2,P;.37,0,.37,1.5,T" xmin=-2 xmax=2 ymin=-2.5 ymax=2.8 titolo="Spinta e tensione verso l’alto bilanciano il peso verso il basso"}
:::

:::osservazione{#spinta-stratificata titolo="Quale fluido viene spostato"}
Un corpo che attraversa un’interfaccia sposta volumi diversi in ciascun liquido. Indicando con $V_o$ il volume in olio e con $V_a$ quello in acqua, si ha $F_A=g(\rho_oV_o+\rho_aV_a)$. La densità efficace peserebbe ciascun liquido in base al suo volume spostato. Questo modello richiede che il liquido eserciti pressione attorno al corpo. Se il corpo fa tenuta sul fondo, il fluido non arriva sotto la faccia di appoggio e manca quella forza verso l’alto.

::grafico{assi=0 poligoni="-.63,-1.2 .63,-1.2 .63,.82 -.63,.82" linee="-2,1.25 2,1.25;-2,0 -.63,0;.63,0 2,0" segmenti="-.63,0,.63,0" etichette="-1.65,.69,olio;-1.65,-.67,acqua;-.14,.43,Vₒ;-.14,-.62,Vₐ" xmin=-2.22 xmax=2.22 ymin=-1.46 ymax=1.62 titolo="Il corpo sposta olio sopra l’interfaccia e acqua sotto. La spinta è il peso dei due volumi spostati."}
:::

:::osservazione{#recipiente-sulla-bilancia titolo="Che cosa rileva la bilancia sotto la vasca"}
Una vasca è su una bilancia e un corpo viene immerso tenendolo sospeso da un supporto esterno. Il fluido spinge il corpo verso l’alto. Per il terzo principio, il corpo preme sul fluido verso il basso con la stessa forza. La bilancia aumenta la propria lettura di $F_A$ se non trabocca liquido e il corpo non tocca la vasca. Il dinamometro sopra il corpo perde invece $F_A$ rispetto alla lettura in aria, se si trascura la spinta dell’aria.

::grafico{assi=0 linee="-1.7,1.32 -1.7,-1.06 1.7,-1.06 1.7,1.32;-1.7,.83 1.7,.83;0,.38 0,1.72;-.79,1.72 .79,1.72" poligoni="-.43,-.46 .43,-.46 .43,.38 -.43,.38;-1.32,-1.4 1.32,-1.4 1.32,-1.06 -1.32,-1.06" vettori="-.25,-.27,-.25,.46,F_A;.83,-.2,.83,-.93,F_A" etichette="-1.13,-1.23,bilancia" xmin=-1.9 xmax=1.93 ymin=-1.62 ymax=1.89 titolo="Il filo ha un sostegno separato. La freccia verso il basso rappresenta la forza esercitata dal corpo sull’acqua."}
:::

## Galleggiamento

:::teorema{#galleggiamento titolo="Frazione immersa"}
Per un corpo libero che galleggia in equilibrio e su cui agiscono soltanto peso e spinta, $\rho_f gV_{\mathrm{imm}}=mg$. Scrivendo la massa come densità media per volume esterno si ottiene
$$
\frac{V_{\mathrm{imm}}}{V_{\mathrm{tot}}}=\frac{\rho_c}{\rho_f}.
$$
Una frazione minore di uno permette che una parte emerga. Una frazione uguale a uno corrisponde a equilibrio a immersione completa nel modello ideale. Se il rapporto supera uno, neanche immergere tutto il corpo sposta abbastanza liquido da sostenerlo.

Per un corpo cavo si usa la massa complessiva e il volume esterno effettivamente capace di escludere il liquido. Aumentare il carico aumenta il volume necessario per galleggiare. Il bilancio verticale può dirci a che immersione il corpo rimane in equilibrio, mentre per sapere se si raddrizza dopo una piccola inclinazione serve studiare come cambiano il centro di spinta e i momenti.
:::

:::esempio{titolo="Immersione aggiuntiva sotto carico"}
Una piattaforma galleggia in acqua con area orizzontale costante di $0{,}50\,\mathrm{m^2}$. Un carico di $25\,\mathrm{kg}$ richiede $0{,}025\,\mathrm{m^3}$ in più di acqua spostata. Dividendo per l’area si trova un abbassamento di $0{,}050\,\mathrm m$. Il calcolo assume che il bordo superiore rimanga sopra il livello dell’acqua.
:::

:::osservazione{#momento-raddrizzante titolo="Spinta e peso dopo una piccola inclinazione"}
Il peso agisce lungo la verticale per il centro di massa G. La spinta, in un liquido uniforme, passa per il baricentro geometrico B del volume spostato. La parte immersa cambia forma se l’imbarcazione inclina e B si sposta. Nel disegno la spinta è a destra di G, quindi la coppia genera una rotazione antioraria che si oppone all’inclinazione mostrata. Se una modifica del carico sposta G e il momento asseconda l’inclinazione, l’equilibrio è instabile.

::grafico{assi=0 uguale=1 poligoni="-1.4,.60 1.36,.03 1.09,-.62 -.54,-.29" linee="-2.03,-.14 -.684944,-.14;1.289385,-.14 1.98,-.14" vettori=".05,.19,.05,-.88,P;.46,-.308593,.46,.761407,F_A" punti=".05,.19,pieno,G;.46,-.308593,pieno,B" xmin=-2.08 xmax=2.13 ymin=-1.02 ymax=1.03 titolo="Peso e spinta di pari modulo agiscono su verticali diverse. Le loro posizioni determinano il verso della coppia."}
:::
