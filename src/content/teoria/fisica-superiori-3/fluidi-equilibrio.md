---
titolo: Fluidi in equilibrio
sommario: Pressione idrostatica, manometri, torchio idraulico e galleggiamento.
---

## Pressione e densità

:::definizione{#pressione titolo="Forza distribuita su una superficie"}
Un **fluido** è un liquido o un gas, cioè una sostanza che scorre e prende la forma del recipiente. Un fluido a riposo spinge le superfici che tocca con forze perpendicolari a esse. La **pressione** su una piccola faccia è la forza perpendicolare che agisce su ogni metro quadrato della faccia. Se la pressione è uniforme, cioè uguale in tutti i punti di una superficie piana, si ha
$$
p=\frac{F_\perp}{A},
$$
dove $A$ è l'area e $F_\perp$ (si legge «effe perpendicolare») è la componente della forza perpendicolare alla superficie. Se la forza $F$ forma un angolo $\theta$ con la perpendicolare, si ha $F_\perp=F\cos\theta$. L’unità di misura è il **pascal**, $1\,\mathrm{Pa}=1\,\mathrm{N/m^2}$; inoltre $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$.

Se la pressione varia da punto a punto, il rapporto $\dfrac{F_\perp}{A}$ è la **pressione media**, cioè la pressione uniforme che darebbe la stessa forza totale. In tal caso la forza totale si trova dividendo la superficie in piccole porzioni, moltiplicando l'area di ciascuna per la pressione che c'è lì e sommando i risultati. Un liquido è **omogeneo** se ogni metro cubo del liquido ha la stessa massa, cioè la stessa densità, in ogni punto. Su una superficie piana verticale immersa in un liquido omogeneo, la pressione varia linearmente con la quota, cioè cresce della stessa quantità per ogni centimetro di discesa. La pressione media è allora la pressione alla quota del baricentro geometrico dell’area, cioè del centro della figura. Il punto di applicazione della risultante, cioè della forza totale, può invece trovarsi più in basso (esempio della paratoia).

La pressione è uno **scalare**, cioè una grandezza descritta da un numero con la sua unità, senza direzione né verso. In un punto del fluido fermo ha lo stesso valore qualunque sia l’orientamento della piccola faccia che la misura, mentre la forza su quella faccia è perpendicolare a essa. La **densità** è la massa contenuta in ogni metro cubo:
$$
\rho=\frac{m}{V},
$$
dove $\rho$ è la lettera greca *rho*; si misura in $\mathrm{kg/m^3}$. L'acqua ha densità circa $1000\,\mathrm{kg/m^3}$. Un litro vale $1\,\mathrm L=10^{-3}\,\mathrm{m^3}$. Il **gradiente idrostatico** è l'aumento di pressione per ogni metro di discesa; la legge di Stevino mostra che vale $\rho g$. Due fluidi con la stessa pressione in un punto possono avere densità diverse e quindi gradienti idrostatici diversi.
:::

:::esempio{titolo="Conversione di una superficie"}
Una forza di $120\,\mathrm N$ agisce perpendicolarmente e uniformemente su $30\,\mathrm{cm^2}$. Poiché $1\,\mathrm{cm}=10^{-2}\,\mathrm m$, un centimetro quadrato vale $10^{-2}\cdot10^{-2}\,\mathrm{m^2}=10^{-4}\,\mathrm{m^2}$. L’area è quindi $30\cdot10^{-4}\,\mathrm{m^2}=0{,}003\,\mathrm{m^2}$ e la pressione è
$$
p=\frac{120}{0{,}003}\,\mathrm{Pa}=4\cdot10^4\,\mathrm{Pa}.
$$
A parità di forza, un’area metà di questa dà pressione doppia. Nella conversione delle aree il fattore da centimetri a metri va quindi elevato al quadrato.
:::

:::esempio{#risultante-parete titolo="Risultante e momento su una paratoia"}
Una **paratoia** è una parete piana, spesso mobile, che chiude una vasca o un canale. Una paratoia rettangolare verticale, larga $b$, va dal pelo libero, cioè dalla superficie dell'acqua a contatto con l'aria, fino alla profondità $H$. Dall’altra parte c’è aria alla stessa pressione atmosferica che agisce sulla superficie dell'acqua. La pressione atmosferica preme quindi su entrambi i lati e le due forze si annullano. Resta la differenza di pressione dovuta all'acqua, che per la legge di Stevino (sezione seguente) vale $\rho gh$ alla profondità $h$. Questa differenza vale $0$ al bordo alto e $\rho gH$ al bordo basso e cresce in modo lineare, perciò il suo grafico lungo la paratoia è un triangolo. Per questo la media è la semisomma dei due estremi:
$$
\overline{\Delta p}=\frac{0+\rho gH}{2}=\frac{\rho gH}{2}.
$$
La risultante si ottiene moltiplicando la pressione media per l'area $bH$:
$$
F=\frac{\rho gH}{2}\cdot bH=\frac{\rho gbH^2}{2}.
$$

Il **momento** di una forza rispetto a un punto è il prodotto della forza per il braccio, cioè la distanza fra il punto e la retta lungo cui agisce la forza. Per calcolare il momento rispetto al bordo alto serve anche la profondità del punto di applicazione della risultante. Le strisce orizzontali più basse ricevono forze maggiori, quindi questo punto sta sotto la metà della paratoia. Il punto di applicazione è alla quota del baricentro del triangolo delle pressioni, che si trova a $\dfrac{2H}{3}$ dal bordo alto. Il momento rispetto al bordo alto vale perciò
$$
M=F\cdot\frac{2H}{3}=\frac{\rho gbH^3}{3}.
$$
I due risultati hanno usi diversi: $\dfrac{H}{2}$ è la profondità a cui la pressione è uguale alla media, mentre $\dfrac{2H}{3}$ è il braccio della risultante rispetto al bordo alto.

::grafico{assi=0 linee="0,0 0,-3;0,0 1.8,0" poligoni="0,0 1.8,-3 0,-3" vettori=".36,-.6,0,-.6;.72,-1.2,0,-1.2;1.08,-1.8,0,-1.8;1.44,-2.4,0,-2.4" segmenti="-.57,-1.5,.9,-1.5;-.57,-2,1.2,-2" punti="0,-2,pieno" etichette="-1.05,-1.38,H/2;-1.05,-1.94,2H/3;.54,-3.22,ρgH" xmin=-1.65 xmax=2.1 ymin=-3.55 ymax=.45 titolo="La distribuzione triangolare delle pressioni cresce con la profondità. Il punto indica la quota di applicazione della risultante."}
:::

## La legge di Stevino

:::teorema{#stevino titolo="Pressione e profondità"}
Un liquido fermo ha densità costante $\rho$ e si trova in **gravità uniforme**, cioè con la stessa accelerazione di gravità $g$ in ogni punto. La **quota** $z$ è l'altezza di un punto misurata verso l'alto a partire da un livello scelto. Si considera una colonna di liquido, cioè un cilindro verticale immaginario con basi orizzontali di area $A$, fra le quote $z_1$ e $z_2>z_1$. Sulla colonna agiscono tre forze verticali:
- la forza di pressione sulla base, $p_1A$, diretta verso l'alto;
- la forza di pressione sulla sommità, $p_2A$, diretta verso il basso;
- il peso del liquido, diretto verso il basso, che vale $mg=\rho Vg=\rho A(z_2-z_1)g$.

La colonna è ferma, quindi la forza verso l'alto è uguale alla somma delle due forze verso il basso:
$$
p_1A=p_2A+\rho A(z_2-z_1)g.
$$
Sottraendo $p_2A$ e poi dividendo per $A$ si ottiene
$$
(p_1-p_2)A=\rho A(z_2-z_1)g,
\qquad p_1-p_2=\rho g(z_2-z_1).
$$
Si indica con $p_0$ la pressione sulla superficie del liquido e con $h$ la **profondità**, cioè la distanza di un punto sotto la superficie, positiva verso il basso. Allora vale la **legge di Stevino**
$$
p=p_0+\rho gh.
$$
La **sovrapressione** $\Delta p=p-p_0=\rho gh$ è la pressione in più rispetto alla superficie (la lettera greca $\Delta$, *delta*, indica una differenza). L’aumento per ogni metro di discesa è $\rho g$, con unità $\mathrm{Pa/m}$; per l'acqua con $g=10\,\mathrm{m/s^2}$ vale $1000\cdot10\,\mathrm{Pa/m}=10000\,\mathrm{Pa/m}$. Un liquido è **connesso** se da un punto all'altro si passa senza uscire dal liquido. Due punti alla stessa quota nello stesso liquido fermo e connesso hanno la stessa pressione. La forma del recipiente cambia la quantità di liquido, mentre per il bilancio della colonna la differenza di pressione fra due quote dipende solo da $\rho$, $g$ e dal dislivello. Perciò due recipienti di forma diversa, pieni dello stesso liquido fino alla stessa altezza e aperti sulla stessa aria, hanno la stessa pressione sul fondo.

Due liquidi sono **immiscibili** se non si mescolano, come olio e acqua, e in un recipiente formano strati sovrapposti. Si numerano gli strati con un indice $j$ e si scende in verticale. Per ogni strato attraversato verso il basso si somma $\rho_j g h_j$, dove $\rho_j$ e $h_j$ sono la densità e lo spessore dello strato $j$. All'**interfaccia**, cioè alla superficie di separazione fra due liquidi fermi, la pressione è la stessa da una parte e dall'altra. Questo vale se si trascura la **tensione superficiale**, l'effetto che rende la superficie di un liquido simile a una pellicola tesa. Il grafico della pressione in funzione della profondità è allora formato da tratti rettilinei; la **pendenza** di ciascun tratto, cioè l'aumento di pressione per metro, vale $\rho_j g$ ed è diversa da uno strato all'altro.
:::

:::esempio{titolo="Sovrapressione in due strati"}
Uno strato d’olio spesso $0{,}50\,\mathrm m$, di densità $800\,\mathrm{kg/m^3}$, sta sopra uno strato d’acqua spesso $1\,\mathrm m$, di densità $1000\,\mathrm{kg/m^3}$. Si usa $g=10\,\mathrm{m/s^2}$. In fondo all’olio la sovrapressione vale
$$
800\cdot10\cdot0{,}50\,\mathrm{Pa}=4000\,\mathrm{Pa}.
$$
L'acqua aggiunge $1000\cdot10\cdot1\,\mathrm{Pa}=10000\,\mathrm{Pa}$, quindi sul fondo si arriva a $4000\,\mathrm{Pa}+10000\,\mathrm{Pa}=14000\,\mathrm{Pa}$. L’acqua dà un aumento maggiore per ogni metro di profondità, perché ha densità maggiore.

::grafico{linee="0,0 .5,4 1.5,14" punti="0,0,pieno;.5,4,pieno;1.5,14,pieno" xmin=0 xmax=1.8 ymin=0 ymax=16 nomi="h (m),Δp (kPa)" titolo="La pendenza aumenta al passaggio dall’olio all’acqua"}
:::

:::osservazione{#quota-colonna titolo="Leggere la pressione lungo un percorso"}
Per confrontare le pressioni di due punti si segue un percorso che li collega dentro i liquidi, con $h$ crescente verso il basso. Lungo il percorso:
- in un tratto in discesa di $\Delta h$ si somma $\rho g\Delta h$;
- in un tratto in salita di $\Delta h$ si sottrae $\rho g\Delta h$;
- un tratto orizzontale dentro lo stesso liquido dà zero.

Nella figura il ramo sinistro contiene acqua e il ramo destro olio sopra l'acqua; i due rami sono collegati in basso. Il percorso fra i punti A e B, entrambi nell'acqua, scende di un certo tratto, passa nel tubo orizzontale e risale della stessa altezza. I contributi della discesa e della salita sono uguali e opposti, quindi si cancellano e A e B hanno la stessa pressione. I punti C e D sono invece alla stessa altezza ma in liquidi diversi, C nell'olio e D nell'acqua. Per confrontarli si parte dall'interfaccia acqua–olio del ramo destro; alla sua quota l'acqua del ramo sinistro ha la stessa pressione, perché l'acqua è connessa. Da quella quota si sale della stessa distanza in acqua, fino a D, e in olio, fino a C. Il calo di pressione è maggiore in acqua, perché l'acqua è più densa, perciò C nell’olio ha pressione maggiore di D nell’acqua.

::grafico{assi=0 linee="0,2.8 0,0 3.8,0 3.8,2.8;1.3,2.8 1.3,.6 2.5,.6 2.5,2.8;0,2.4 1.3,2.4;2.5,2.67 3.8,2.67;2.5,1.32 3.8,1.32" segmenti=".62,1.06,.62,.32;.62,.32,3.12,.32;3.12,.32,3.12,1.06" punti=".62,1.06,pieno,A;3.12,1.06,pieno,B;.62,1.69,pieno,D;3.12,1.69,pieno,C" etichette=".3,2.09,acqua;2.78,1.91,olio" xmin=-.3 xmax=4.09 ymin=-.13 ymax=2.92 titolo="A e B sono alla stessa quota nell’acqua. Per confrontare C con D occorre attraversare l’interfaccia acqua–olio."}
:::

## Pressione assoluta e manometri

:::osservazione{#manometri titolo="Confrontare pressioni"}
La **pressione assoluta** $p_{\mathrm{ass}}$ è misurata a partire dal vuoto, dove la pressione è zero; per questo è sempre positiva. La **pressione relativa**, detta anche **manometrica**, è la differenza fra la pressione assoluta e la pressione atmosferica locale $p_{\mathrm{atm}}$:
$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}.
$$
Una lettura relativa nulla significa che dentro e fuori c'è la stessa pressione. Una lettura negativa significa che la pressione interna è minore di quella atmosferica. Una parete con fluido su entrambi i lati riceve due forze opposte, ciascuna perpendicolare alla parete; la forza risultante si calcola moltiplicando l'area per la differenza fra le due pressioni.

Un **manometro a U** è un tubo piegato a U che contiene un liquido, con ciascun ramo collegato a un gas. Se il liquido è omogeneo, due punti alla stessa quota nello stesso liquido connesso hanno la stessa pressione. Si trascura il peso del gas sopra le due superfici. Scendendo di $\Delta h$ dalla superficie più alta fino alla quota della superficie più bassa, la pressione aumenta di $\rho g\Delta h$. A quella quota il liquido dei due rami ha la stessa pressione, che nel ramo basso è la pressione del gas che preme sulla sua superficie. Quindi la pressione sulla superficie più bassa supera quella sulla superficie più alta di $\rho g\Delta h$. Il ramo con il livello più basso è dunque collegato alla pressione maggiore. Con la stessa pressione sui due rami le superfici sono alla stessa quota.
:::

:::esempio{titolo="Un manometro di acqua"}
Nel manometro della figura i pedici $L$ e $R$ indicano il ramo sinistro e il ramo destro (dalle iniziali inglesi *left* e *right*). Il livello del ramo destro è $0{,}20\,\mathrm m$ più alto di quello del ramo sinistro. Il manometro contiene acqua di densità $1000\,\mathrm{kg/m^3}$ e si usa $g=10\,\mathrm{m/s^2}$. La differenza di pressione è
$$
p_L-p_R=\rho g\Delta h=1000\cdot10\cdot0{,}20\,\mathrm{Pa}=2000\,\mathrm{Pa},
$$
quindi la pressione del gas a sinistra supera quella di destra di $2000\,\mathrm{Pa}$. Se il ramo destro è aperto all’atmosfera, la pressione relativa a sinistra è $+2\,\mathrm{kPa}$.

::grafico{assi=0 linee="0,.7 0,0 1,0 1,.7;.2,.7 .2,.2 .8,.2 .8,.7;0,.3 .2,.3;.8,.5 1,.5" segmenti=".2,.3,.8,.3" vettori=".1,.65,.1,.34,p_L;.9,.65,.9,.52,p_R" xmin=-.3 xmax=1.4 ymin=-.1 ymax=.85 titolo="Il livello più basso è quello del ramo sinistro"}
:::

:::esempio{#riferimento-pressione titolo="Cambiare riferimento e calcolare la forza"}
L’atmosfera è a $100\,\mathrm{kPa}$. Sommando $100\,\mathrm{kPa}$ a ogni lettura relativa si ottiene la pressione assoluta corrispondente.

| Ambiente | Relativa (kPa) | Assoluta (kPa) |
| --- | ---: | ---: |
| Atmosfera | $0$ | $100$ |
| Camera in pressione | $+12$ | $112$ |
| Camera in depressione | $-18$ | $82$ |

Una camera è **in depressione** quando la sua pressione è minore di quella atmosferica. Sul coperchio di questa camera premono l'aria esterna a $100\,\mathrm{kPa}$ e il gas interno a $82\,\mathrm{kPa}$. Si prende come positivo il verso dall'interno verso l'esterno. La differenza fra pressione interna ed esterna è
$$
p_{\mathrm{int}}-p_{\mathrm{est}}=(82-100)\,\mathrm{kPa}=-18\,\mathrm{kPa},
$$
cioè la lettura relativa. Su un coperchio di $0{,}20\,\mathrm{m^2}$ la risultante vale $-18000\cdot0{,}20\,\mathrm N=-3600\,\mathrm N$; il segno meno indica che la forza di $3600\,\mathrm N$ è diretta verso l’interno. Entrambe le pressioni assolute sono positive; il segno negativo viene dalla loro differenza.

::grafico{assi=0 linee="-.55,-1.2 0,-1.2 0,1.2 -.55,1.2" poligoni="0,-1.2 .21,-1.2 .21,1.2 0,1.2" vettori="-1.21,.38,0,.38;1.68561,.38,.21,.38" etichette="-1.19,.7,82 kPa;.78,.7,100 kPa;-1.15,-.86,interno;.71,-.86,esterno" xmin=-1.71 xmax=2.08 ymin=-1.49 ymax=1.42 titolo="La pressione esterna esercita la forza maggiore. La risultante delle due pressioni è diretta verso l’interno."}
:::

:::esempio{#manometro-due-liquidi titolo="Un manometro con due liquidi"}
Nel ramo sinistro di un tubo a U una colonna d’olio alta $0{,}30\,\mathrm m$, di densità $800\,\mathrm{kg/m^3}$, sta sopra l’acqua. Il ramo destro contiene solo acqua. Le due superfici libere sono all’atmosfera e si usa $g=10\,\mathrm{m/s^2}$. Si parte dalla superficie dell’olio e si scende fino all’interfaccia I fra olio e acqua; la pressione aumenta di
$$
800\cdot10\cdot0{,}30\,\mathrm{Pa}=2400\,\mathrm{Pa}=2{,}4\,\mathrm{kPa}.
$$
Alla quota di I, l’acqua del ramo destro ha la stessa pressione di I, perché l'acqua è connessa. Sopra quel punto deve quindi esserci una colonna d'acqua che produce gli stessi $2400\,\mathrm{Pa}$, cioè alta
$$
\frac{2400}{1000\cdot10}\,\mathrm m=0{,}24\,\mathrm m.
$$
La superficie D dell'acqua è quindi $0{,}24\,\mathrm m$ più in alto di I, cioè $0{,}30\,\mathrm m-0{,}24\,\mathrm m=0{,}06\,\mathrm m$ più in basso della superficie libera dell’olio. Le due superfici libere sono alla stessa pressione e a quote diverse, perché i due liquidi hanno densità diverse.

::grafico{assi=0 linee="0,.76 0,0 1,0 1,.76;.22,.76 .22,.23 .78,.23 .78,.76;0,.40 .22,.40;0,.70 .22,.70;.78,.64 1,.64" segmenti=".11,.40,.89,.40;.89,.4,.89,.64" punti=".11,.40,pieno,I;.89,.64,pieno,D" etichette=".03,.58,olio;.49,.29,acqua" xmin=-.26 xmax=1.25 ymin=-.045 ymax=.87 titolo="La linea tratteggiata parte dall’interfaccia I e resta alla stessa quota. Le due superfici libere sono all’atmosfera."}
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmissione di una variazione di pressione"}
Un liquido è **confinato** se è chiuso in un recipiente. Il **principio di Pascal** afferma che una variazione di pressione applicata al bordo di un liquido confinato e fermo si trasmette uguale a tutti i punti del liquido, se densità e quote restano le stesse. La pressione assoluta nei diversi punti può comunque essere diversa, per l’effetto della profondità descritto dalla legge di Stevino.

Un **torchio idraulico** è formato da due cilindri di sezione diversa, collegati e pieni di liquido, chiusi da due **pistoni**, cioè dischi che scorrono a tenuta nei cilindri. Il torchio è ideale se valgono tre condizioni:
- i pistoni sono alla stessa quota;
- masse dei pistoni e attriti sono trascurabili;
- l'aria esterna preme con la stessa pressione su entrambi i pistoni.

In queste condizioni la pressione in più rispetto all'aria esterna, detta **eccesso di pressione**, è la stessa sotto i due pistoni:
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2}.
$$
Qui $F_j$, con $j=1$ o $2$, è la forza esterna efficace che equilibra la spinta del liquido sul pistone $j$ e $A_j$ è l'area di quel pistone. Ne segue $F_2=F_1\dfrac{A_2}{A_1}$, quindi il rapporto $\dfrac{F_2}{F_1}$, detto **guadagno di forza**, è uguale al rapporto fra le aree. Per pistoni circolari l'area è $\pi r^2$, quindi con un raggio triplo l'area e la forza diventano $3^2=9$ volte maggiori.

L’aumento di forza sul pistone di sezione maggiore è accompagnato da una **corsa**, cioè uno spostamento del pistone, più breve. Un liquido è **incomprimibile** se il suo volume non cambia quando lo si preme. Per piccoli spostamenti $s_1$ e $s_2$ il volume che esce da un cilindro entra nell'altro, quindi $A_1s_1=A_2s_2$; i pistoni si muovono in versi opposti. Il **lavoro** di una forza parallela allo spostamento è il prodotto della forza per lo spostamento. Indicando con $p$ l'eccesso di pressione comune, si ha
$$
F_1s_1=pA_1s_1=pA_2s_2=F_2s_2.
$$
Quindi i lavori in entrata e in uscita hanno lo stesso modulo, se si trascurano le perdite (per esempio l'attrito dei pistoni) e le variazioni di quota. Con l'attrito il lavoro in uscita è minore di quello in entrata.

Se le quote dei pistoni sono diverse, alla relazione fra le pressioni del liquido si aggiunge il termine $\rho g\Delta z$ della legge di Stevino, dove $\Delta z$ è il dislivello fra i pistoni. Se le pressioni esterne sono diverse, per ciascun pistone si calcola la differenza fra la pressione interna $p_{\mathrm{int},j}$ (nel liquido, sotto il pistone) e la pressione esterna $p_{\mathrm{ext},j}$ (sopra il pistone). Moltiplicando per l'area si ottiene il carico efficace
$$
F_j=A_j(p_{\mathrm{int},j}-p_{\mathrm{ext},j}),
$$
con segno positivo quando la forza è diretta verso il liquido. Il rapporto fra le aree moltiplica la forza e non l'energia.

:::

:::esempio{titolo="Forza disponibile e spostamento"}
L’area grande vale cinque volte l’area piccola. Una spinta di $80\,\mathrm N$ sul pistone piccolo equilibra $80\cdot5\,\mathrm N=400\,\mathrm N$ sul grande. Una corsa di $10\,\mathrm{cm}$ sul piccolo produce $\dfrac{10}{5}\,\mathrm{cm}=2\,\mathrm{cm}$ sul grande. Convertendo le corse in metri, i due prodotti forza per corsa valgono
$$
80\cdot0{,}10\,\mathrm J=8\,\mathrm J,
\qquad 400\cdot0{,}020\,\mathrm J=8\,\mathrm J.
$$
:::

:::esempio{#pistoni-quote-diverse titolo="Premere e sostenere a quote diverse"}
Nel liquido di un torchio il pistone grande è più alto di $\Delta z$. Per la legge di Stevino, sotto il pistone alto la pressione interna è più bassa di una quantità $\rho g\Delta z$ rispetto a quella sotto il pistone basso. Per esempio, con olio di densità $800\,\mathrm{kg/m^3}$, $g=10\,\mathrm{m/s^2}$ e $\Delta z=1{,}0\,\mathrm m$, si ha
$$
\rho g\Delta z=800\cdot10\cdot1{,}0\,\mathrm{Pa}=8000\,\mathrm{Pa}=8\,\mathrm{kPa}.
$$
Una pressione relativa di $26\,\mathrm{kPa}$ sotto il pistone basso diventa quindi $26\,\mathrm{kPa}-8\,\mathrm{kPa}=18\,\mathrm{kPa}$ sotto quello alto. Sopra i due pistoni c'è aria alla stessa pressione, perciò il carico sul pistone alto, di area $0{,}030\,\mathrm{m^2}$, vale
$$
F_2=18000\cdot0{,}030\,\mathrm N=540\,\mathrm N.
$$
Il liquido che passa da un ramo all'altro cambia altezza e quindi energia potenziale; perciò il confronto fra i lavori dei due pistoni comprende anche questa variazione.

::grafico{assi=0 linee="0,1.1 0,-.65 4,-.65 4,2.05;.7,1.1 .7,-.18 2.12,-.18 2.12,2.05;0,.58 .7,.58;2.12,1.58 4,1.58" segmenti=".7,.58,2.12,.58;1.73,.58,1.73,1.58;1.73,1.58,2.12,1.58" vettori=".35,1.27,.35,.66,F₁;3.06,2.42,3.06,1.66,F₂" etichette="1.22,1.16,Δz;.03,.1,A₁;2.26,.96,A₂" xmin=-.35 xmax=4.3 ymin=-.78 ymax=2.62 titolo="La quota del pistone alto introduce una diminuzione idrostatica di pressione fra A₁ e A₂."}
:::

## Principio di Archimede

:::teorema{#archimede titolo="Spinta del fluido"}
Il **principio di Archimede** afferma che un corpo immerso in un fluido fermo riceve una forza verso l'alto, detta **spinta idrostatica** o spinta di Archimede, uguale al peso del fluido spostato. Il fluido spostato è quello che occuperebbe lo spazio della parte immersa del corpo. Se la densità del fluido è costante,
$$
F_A=\rho_f gV_{\mathrm{imm}},
$$
dove $\rho_f$ è la densità del fluido e $V_{\mathrm{imm}}$ il volume immerso del corpo.

Si sostituisce per un momento il corpo con il fluido che occuperebbe lo stesso spazio. Questo volume di fluido resta fermo, quindi le pressioni del fluido attorno a esso bilanciano il suo peso. Rimettendo il corpo al suo posto, le pressioni attorno restano le stesse, perciò esercitano sul corpo la stessa forza risultante, uguale al peso del fluido spostato e diretta verso l'alto.

Lo stesso risultato si ottiene con un prisma immerso, con due facce orizzontali di area $A$ e altezza $h$. Le pressioni sulle facce laterali danno forze orizzontali che si annullano a coppie. Per la legge di Stevino la pressione sulla faccia inferiore supera quella sulla faccia superiore di $\rho_f gh$. La forza verso l'alto sulla faccia inferiore supera quindi la forza verso il basso sulla faccia superiore di $\rho_f gh\cdot A=\rho_f gAh$. Poiché $Ah$ è il volume del prisma, $\rho_f gAh$ è il peso del liquido spostato.

Un **dinamometro** è uno strumento a molla che misura una forza. Se il corpo è appeso a un filo teso dall’alto, è fermo e su di esso agiscono solo il peso, la spinta e la tensione $T$ del filo, l'equilibrio verticale dà $T+F_A-mg=0$, cioè
$$
T=mg-F_A.
$$
La tensione letta dal dinamometro si chiama **peso apparente**. Un filo può solo tirare, quindi una tensione negativa indica che un filo appeso dall’alto non può tenere il corpo nella posizione supposta. Quando la spinta supera il peso, per tenere il corpo tutto immerso serve una forza verso il basso, per esempio un filo fissato sotto di esso. Se il corpo accelera, per la seconda legge di Newton la somma delle forze verticali, ciascuna con il suo segno, è uguale a $ma$.
:::

:::esempio{titolo="Peso apparente di un blocco"}
Un blocco da $4\,\mathrm{kg}$ di volume $10^{-3}\,\mathrm{m^3}$ è immerso interamente in acqua e appeso fermo a un dinamometro. Con $g=10\,\mathrm{m/s^2}$ il suo peso vale $4\cdot10\,\mathrm N=40\,\mathrm N$ e la spinta $1000\cdot10\cdot10^{-3}\,\mathrm N=10\,\mathrm N$. La tensione letta dal dinamometro è $40\,\mathrm N-10\,\mathrm N=30\,\mathrm N$. Il volume e il peso del blocco sono uguali prima e dopo l’immersione.

::grafico{assi=0 poligoni="-.75,-.6 .75,-.6 .75,.6 -.75,.6" linee="-2,1 2,1;0,.6 0,2.6" vettori="-.35,0,-.35,.5,F_A;0,0,0,-2,P;.37,0,.37,1.5,T" xmin=-2 xmax=2 ymin=-2.5 ymax=2.8 titolo="Spinta e tensione verso l’alto bilanciano il peso verso il basso"}
:::

:::osservazione{#spinta-stratificata titolo="Quale fluido viene spostato"}
Un corpo a cavallo dell'interfaccia fra due liquidi sposta un volume di ciascuno. Si indica con $V_o$ il volume immerso nell'olio e con $V_a$ quello immerso nell'acqua. La spinta è la somma dei pesi dei due liquidi spostati:
$$
F_A=g(\rho_oV_o+\rho_aV_a).
$$
La **densità efficace** del fluido spostato è la densità media dei due liquidi, in cui ciascuno conta in proporzione al volume spostato:
$$
\rho_{\mathrm{eff}}=\frac{\rho_oV_o+\rho_aV_a}{V_o+V_a}.
$$
Questo calcolo vale se il liquido preme su tutte le facce immerse del corpo. Un corpo **fa tenuta** sul fondo quando vi aderisce senza lasciar passare il liquido. In quel caso il liquido non arriva sotto la faccia di appoggio, perciò manca la forza verso l'alto su quella faccia.

::grafico{assi=0 poligoni="-.63,-1.2 .63,-1.2 .63,.82 -.63,.82" linee="-2,1.25 2,1.25;-2,0 -.63,0;.63,0 2,0" segmenti="-.63,0,.63,0" etichette="-1.65,.69,olio;-1.65,-.67,acqua;-.14,.43,Vₒ;-.14,-.62,Vₐ" xmin=-2.22 xmax=2.22 ymin=-1.46 ymax=1.62 titolo="Il corpo sposta olio sopra l’interfaccia e acqua sotto. La spinta è il peso dei due volumi spostati."}
:::

:::osservazione{#recipiente-sulla-bilancia titolo="Che cosa rileva la bilancia sotto la vasca"}
Una vasca d'acqua è appoggiata su una bilancia e un corpo, appeso a un dinamometro con un supporto esterno, viene immerso nell'acqua. Il liquido spinge il corpo verso l’alto con la forza $F_A$. Per il terzo principio della dinamica (a ogni azione corrisponde una reazione uguale e opposta), il corpo preme sul liquido verso il basso con la stessa forza. Se non trabocca acqua e il corpo non tocca la vasca, la lettura della bilancia aumenta perciò di $F_A$. Il dinamometro sopra il corpo segna invece $F_A$ in meno rispetto alla lettura in aria, se si trascura la spinta dell’aria.

::grafico{assi=0 linee="-1.7,1.32 -1.7,-1.06 1.7,-1.06 1.7,1.32;-1.7,.83 1.7,.83;0,.38 0,1.72;-.79,1.72 .79,1.72" poligoni="-.43,-.46 .43,-.46 .43,.38 -.43,.38;-1.32,-1.4 1.32,-1.4 1.32,-1.06 -1.32,-1.06" vettori="-.25,-.27,-.25,.46,F_A;.83,-.2,.83,-.93,F_A" etichette="-1.13,-1.23,bilancia" xmin=-1.9 xmax=1.93 ymin=-1.62 ymax=1.89 titolo="Il filo ha un sostegno separato. La freccia verso il basso rappresenta la forza esercitata dal corpo sull’acqua."}
:::

## Galleggiamento

:::teorema{#galleggiamento titolo="Frazione immersa"}
Un corpo libero galleggia in equilibrio e su di esso agiscono soltanto il peso e la spinta. Le due forze sono uguali:
$$
\rho_f gV_{\mathrm{imm}}=mg.
$$
La **densità media** del corpo è $\rho_c=\dfrac{m}{V_{\mathrm{tot}}}$, dove $V_{\mathrm{tot}}$ è il volume esterno del corpo; quindi $m=\rho_cV_{\mathrm{tot}}$. Sostituendo si ha $\rho_f gV_{\mathrm{imm}}=\rho_cV_{\mathrm{tot}}g$ e, dividendo per $\rho_f gV_{\mathrm{tot}}$,
$$
\frac{V_{\mathrm{imm}}}{V_{\mathrm{tot}}}=\frac{\rho_c}{\rho_f}.
$$
In un liquido più denso lo stesso corpo ha una frazione immersa minore. Il valore del rapporto distingue tre casi:
- se è minore di uno, una parte del corpo resta fuori dal liquido;
- se è uguale a uno, il corpo è in equilibrio completamente immerso, nel modello ideale;
- se è maggiore di uno, anche immergendo tutto il corpo il liquido spostato non basta a sostenerlo, e il corpo va a fondo.

Per un corpo cavo, come una scatola o una nave, si usano la massa complessiva (pareti, aria e ciò che contiene) e il volume esterno che tiene fuori il liquido. Se si aggiunge un carico, aumenta il volume immerso necessario per galleggiare. Il bilancio delle forze verticali dà la profondità di immersione all'equilibrio. Per sapere se il corpo torna dritto dopo una piccola inclinazione si studiano invece come cambiano il punto di applicazione della spinta e i momenti delle forze (osservazione seguente).
:::

:::esempio{titolo="Immersione aggiuntiva sotto carico"}
Una piattaforma galleggia in acqua; la sua sezione orizzontale ha area costante di $0{,}50\,\mathrm{m^2}$. Si aggiunge un carico di $25\,\mathrm{kg}$. Per sostenerlo serve spostare in più $25\,\mathrm{kg}$ d'acqua, cioè un volume di $\dfrac{25}{1000}\,\mathrm{m^3}=0{,}025\,\mathrm{m^3}$. Dividendo per l’area si trova un abbassamento di
$$
\frac{0{,}025}{0{,}50}\,\mathrm m=0{,}050\,\mathrm m.
$$
Il calcolo vale se il bordo superiore della piattaforma resta sopra il livello dell’acqua. Se l'area della sezione cambia con la profondità, il volume aggiuntivo si calcola strato per strato, sommando area per spessore di ogni strato.
:::

:::osservazione{#momento-raddrizzante titolo="Spinta e peso dopo una piccola inclinazione"}
Il peso agisce lungo la verticale che passa per il centro di massa G dell'imbarcazione. In un liquido omogeneo, la spinta agisce lungo la verticale che passa per il baricentro geometrico B del volume immerso, detto **centro di spinta**. Quando l’imbarcazione si inclina, la parte immersa cambia forma e B si sposta. Peso e spinta hanno lo stesso modulo e versi opposti ma agiscono su rette diverse; formano quindi una **coppia**, che fa ruotare il corpo. Nel disegno l'imbarcazione è inclinata in verso orario e la spinta agisce a destra di G. La coppia fa quindi ruotare l'imbarcazione in verso antiorario, cioè in verso opposto all’inclinazione, e la riporta dritta. I casi sono due:
- se la coppia si oppone all'inclinazione, l'equilibrio è stabile;
- se una modifica del carico sposta G in modo che la coppia aumenti l'inclinazione, l’equilibrio è instabile.

::grafico{assi=0 uguale=1 poligoni="-1.4,.60 1.36,.03 1.09,-.62 -.54,-.29" linee="-2.03,-.14 -.684944,-.14;1.289385,-.14 1.98,-.14" vettori=".05,.19,.05,-.88,P;.46,-.308593,.46,.761407,F_A" punti=".05,.19,pieno,G;.46,-.308593,pieno,B" xmin=-2.08 xmax=2.13 ymin=-1.02 ymax=1.03 titolo="Peso e spinta di pari modulo agiscono su verticali diverse. Le loro posizioni determinano il verso della coppia."}
:::
