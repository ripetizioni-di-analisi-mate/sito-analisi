---
titolo: Fluidi in equilibrio
sommario: Pressione idrostatica, manometri, torchio idraulico e galleggiamento.
---

## Pressione e densità

:::definizione{#pressione titolo="Forza distribuita su una superficie"}
In un fluido a riposo, le forze di contatto sono perpendicolari alle superfici. La **pressione** è il modulo della forza normale per unità di area. Per pressione uniforme sulla superficie piana si ha $p=\dfrac{F_\perp}{A}$ e l’unità è il pascal, $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$. Se la pressione varia fra punti della superficie, $F_\perp/A$ è una media. In tal caso la forza totale si trova sommando i contributi di piccole porzioni, ognuno con la pressione locale. Su un’area piana verticale in un liquido omogeneo, la pressione varia linearmente con la quota. La media è allora la pressione alla quota del baricentro geometrico dell’area, mentre il punto di applicazione della risultante può trovarsi più in basso.

La pressione è uno scalare. In un punto del fluido fermo ha lo stesso valore qualunque sia l’orientamento della piccola faccia che la misura, mentre la forza risultante su quella faccia è normale ad essa. La **densità** $\rho=m/V$ misura la massa per unità di volume. Due fluidi con la stessa pressione locale possono avere densità diverse e quindi gradienti idrostatici diversi.
:::

:::esempio{titolo="Conversione di una superficie"}
Una forza di $120\,\mathrm N$ agisce normalmente e uniformemente su $30\,\mathrm{cm^2}$. Poiché $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$, l’area equivale a $0{,}003\,\mathrm{m^2}$ e la pressione è $4\cdot10^4\,\mathrm{Pa}$. A parità di forza, un’area metà di questa dà pressione doppia. Nella conversione va elevato al quadrato il fattore da centimetri a metri.
:::

## La legge di Stevino

:::teorema{#stevino titolo="Pressione e profondità"}
In un liquido fermo e di densità costante $\rho$, in gravità uniforme, si prenda la quota $z$ crescente verso l’alto. L’equilibrio di una colonna di area $A$ fra $z_1$ e $z_2>z_1$ richiede che la pressione sulla base, rivolta verso l’alto, compensi la pressione sulla sommità e il peso. Si ha
$$
(p_1-p_2)A=\rho A(z_2-z_1)g,
\qquad p_1-p_2=\rho g(z_2-z_1).
$$
Rispetto a una superficie di pressione $p_0$, a profondità $h$ positiva verso il basso vale $p=p_0+\rho gh$. L’aumento per metro è $\rho g$, con unità $\mathrm{Pa/m}$. Due punti alla stessa quota nello stesso liquido fermo e connesso hanno la stessa pressione. La forma del recipiente può cambiare la quantità di liquido, mentre la differenza di pressione a quota data segue dal bilancio locale.

In un recipiente con strati diversi, si percorre verticalmente lo spazio e si accumula $\rho_j g h_j$ per ogni spessore attraversato verso il basso. Alla frontiera fra due liquidi fermi immiscibili si prende la continuità della pressione, trascurando gli effetti della tensione superficiale. Un grafico della pressione rispetto alla profondità ha allora tratti rettilinei con pendenze diverse.
:::

:::esempio{titolo="Sovrapressione in due strati"}
Uno strato d’olio spesso $0{,}50\,\mathrm m$, di densità $800\,\mathrm{kg/m^3}$, sovrasta uno strato d’acqua spesso $1\,\mathrm m$, di densità $1000\,\mathrm{kg/m^3}$. Con $g=10\,\mathrm{m/s^2}$ la sovrapressione dopo l’olio vale $4000\,\mathrm{Pa}$. Dopo l’acqua si aggiungono $10000\,\mathrm{Pa}$ e si arriva a $14000\,\mathrm{Pa}$. L’acqua dà un aumento maggiore per unità di profondità, perché ha densità maggiore.

::grafico{linee="0,0 .5,4 1.5,14" punti="0,0,pieno;.5,4,pieno;1.5,14,pieno" xmin=0 xmax=1.8 ymin=0 ymax=16 nomi="h (m),p_rel (kPa)" titolo="La pendenza aumenta al passaggio dall’olio all’acqua"}
:::

## Pressione assoluta e manometri

:::osservazione{#manometri titolo="Confrontare pressioni"}
La **pressione assoluta** è riferita al vuoto. La pressione manometrica o relativa è $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}$, dove $p_{\mathrm{atm}}$ è la pressione atmosferica locale. Una lettura relativa nulla significa che interno ed esterno hanno la stessa pressione. Una lettura negativa è possibile quando la pressione interna è minore dell’atmosferica. Per il calcolo della forza risultante su una parete con fluido su entrambi i lati si usa la differenza fra le due pressioni con le rispettive normali.

In un manometro a U riempito con liquido omogeneo, due punti alla stessa quota nello stesso liquido connesso sono alla stessa pressione. Nel caso in cui il peso del gas sopra le due superfici sia trascurabile, scendere di $\Delta h$ dalla superficie più alta fa aumentare la pressione di $\rho g\Delta h$. Questa pressione raggiunge quella imposta sulla superficie più bassa. Il ramo con il livello più basso è dunque collegato alla pressione maggiore.
:::

:::esempio{titolo="Un manometro di acqua"}
Il livello del ramo destro è $0{,}20\,\mathrm m$ più alto di quello del ramo sinistro. Con acqua di densità $1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{m/s^2}$, la pressione del gas a sinistra supera quella di destra di $2000\,\mathrm{Pa}$. Se il gas a destra è all’atmosfera, a sinistra la pressione relativa è $+2\,\mathrm{kPa}$.

::grafico{assi=0 linee="0,.7 0,0 1,0 1,.7;.2,.7 .2,.2 .8,.2 .8,.7;0,.3 .2,.3;.8,.5 1,.5;.2,.3 .8,.3" vettori=".1,.65,.1,.34,p_L;.9,.65,.9,.52,p_R" xmin=-.3 xmax=1.4 ymin=-.1 ymax=.85 titolo="Il livello più basso è quello del ramo sinistro"}
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmissione di una variazione di pressione"}
Una variazione di pressione imposta al contorno di un liquido confinato si trasmette a tutto il fluido in equilibrio quando densità e quote restano fissate. La pressione assoluta nei diversi punti può comunque differire per l’effetto idrostatico. Per un torchio ideale con pistoni alla stessa quota, masse dei pistoni e attriti trascurabili e uguali pressioni atmosferiche esterne, gli eccessi di pressione sono uguali:
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Qui $F_j$ è la forza esterna efficace che equilibra la spinta in eccesso sul pistone $j$. L’aumento di forza sul pistone di sezione maggiore è compensato dalla minore corsa. Conservando il volume di un liquido incomprimibile si ha $A_1s_1=A_2s_2$, con spostamenti $s_1$ e $s_2$ in versi fisicamente opposti. Ne segue $F_1s_1=F_2s_2$ per i moduli del lavoro, in assenza di perdite.

Se le quote differiscono, si aggiunge il termine idrostatico alla relazione fra pressioni del liquido. Se la pressione atmosferica esterna è diversa sui due lati, va sottratta separatamente a ciascuna pressione interna per trovare la forza efficace. In particolare si evita di trattare un rapporto fra aree come una moltiplicazione dell’energia.
:::

:::esempio{titolo="Forza disponibile e spostamento"}
L’area grande vale cinque volte l’area piccola. Una spinta di $80\,\mathrm N$ sul piccolo equilibra $400\,\mathrm N$ sul grande. Una corsa di $10\,\mathrm{cm}$ sul piccolo produce $2\,\mathrm{cm}$ sul grande. Convertendo le corse in metri, entrambi i prodotti forza per corsa valgono $8\,\mathrm J$.
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
