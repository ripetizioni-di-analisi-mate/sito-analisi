---
titolo: "Pressione nei fluidi in quiete"
sommario: "Pressione, legge di Stevino, pressa idraulica, vasi comunicanti e manometri."
---

## Definizione di pressione

:::definizione{#pressione titolo="Forza normale per unità di area"}
Se una forza normale di modulo $F_\perp$ è distribuita uniformemente su una superficie di area $A$, la **pressione** è $p=\dfrac{F_\perp}{A}$. Una forza inclinata contribuisce alla pressione con la sola componente perpendicolare. Dividendo una stessa forza su un'area doppia si ottiene metà pressione. Per questo fissare il carico totale e fissare la pressione descrivono due prove diverse.

In un fluido fermo la pressione in un punto è **scalare**. La forza che il fluido esercita su un piccolo elemento di parete è perpendicolare alla parete. Il suo orientamento dipende quindi dalla superficie considerata. Per una parete piana sulla quale la pressione è uniforme, il modulo totale è $pA$. Se la pressione varia sulla parete, $\dfrac{F_\perp}{A}$ rappresenta la pressione media.
:::

:::esempio{titolo="Stessa forza, due superfici"}
Con $60\,\mathrm N$ distribuiti su $0{,}02\,\mathrm m^2$ si ottengono $3000\,\mathrm{Pa}$. Distribuendo lo stesso carico su $0{,}04\,\mathrm m^2$ si ottengono $1500\,\mathrm{Pa}$. La forza resta sessanta newton. Per ritrovarla da ciascuna pressione si moltiplica per la relativa area, quindi $3000\cdot0{,}02=1500\cdot0{,}04=60$ nelle unità SI.
:::

:::esempio{#pressione-media titolo="Una superficie con due pressioni"}
Su una piastra ci sono due zone adiacenti. L'area della prima è $0{,}030\,\mathrm m^2$ e la pressione è $2{,}0\,\mathrm{kPa}$. L'area della seconda è $0{,}020\,\mathrm m^2$ e la pressione è $5{,}0\,\mathrm{kPa}$. Le forze premono dalla stessa parte. La prima zona contribuisce con $60\,\mathrm N$ e la seconda con $100\,\mathrm N$, ottenuti moltiplicando ciascuna pressione per la propria area.

La forza totale vale $160\,\mathrm N$, quindi sull'area totale la pressione media è

$$
\bar p=\frac{160\,\mathrm N}{0{,}050\,\mathrm m^2}=3{,}2\,\mathrm{kPa}.
$$

La media semplice delle letture darebbe $3{,}5\,\mathrm{kPa}$ e, moltiplicata per l'area, produrrebbe $175\,\mathrm N$. Con zone di area diversa, ogni valore è pesato dall'area su cui agisce. La pressione media consente di ritrovare la stessa forza complessiva, mentre le pressioni locali servono per descrivere come quella forza è distribuita.

::grafico{linee="0,2 3,2;3,5 5,5" asintoti="x=3;y=3.2" nomi="A (dm²),p (kPa)" xmin=0 xmax=5.5 ymin=0 ymax=6 titolo="L'ascissa indica l'area accumulata a partire da un bordo, in decimetri quadrati. Il tratto più largo pesa di più nella media tratteggiata."}
:::

## Unità della pressione

:::osservazione{#unita titolo="Pascal e conversioni delle aree"}
Il pascal è un newton per metro quadrato. Vale $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$. Poiché un centimetro vale $10^{-2}\,\mathrm m$, un centimetro quadrato vale $10^{-4}\,\mathrm m^2$. L'esponente raddoppia perché l'area contiene due fattori di lunghezza. Ne segue $1\,\mathrm{N/cm^2}=10^4\,\mathrm{Pa}$.

Esempio. Su un pistone di $25\,\mathrm{cm^2}$ una depressione di modulo $8\,\mathrm{kPa}$ rispetto all'altro lato corrisponde a un contributo netto di forza di $8000\cdot25\cdot10^{-4}\,\mathrm N=20\,\mathrm N$. Il verso è dal lato a pressione maggiore verso quello a pressione minore.
:::

:::esempio{#taratura-pistone titolo="Tarare un sensore con una forza nota"}
Un pistone di area $20\,\mathrm{cm^2}$ comunica con un sensore. La lettura è azzerata prima di aggiungere un carico e misura soltanto l'aumento di pressione. Un carico di $8\,\mathrm N$ produce $4000\,\mathrm{Pa}$, perché $20\,\mathrm{cm^2}=0{,}0020\,\mathrm m^2$. Se un secondo strumento legge in $\mathrm{N/cm^2}$, deve mostrare $0{,}40$, pari a $\dfrac{8}{20}$. Le due letture descrivono il medesimo carico distribuito sulla stessa area.

Con il pistone invariato, il grafico dell'aumento di pressione contro il carico aggiunto passa per l'origine. In queste unità la pendenza è $500\,\mathrm{Pa/N}$. Un'intercetta non nulla, in condizioni di taratura ideali e con un carico iniziale escluso, indica che lo zero può essere spostato. In quel caso la differenza fra due letture permette ancora di trovare la pendenza.

::grafico{f="0.5*x" punti="0,0,pieno;8,4,pieno" nomi="F (N),Δp (kPa)" xmin=0 xmax=10 ymin=0 ymax=6 titolo="A 8 N corrispondono 4 kPa. La pendenza letta in kPa/N equivale a 500 Pa/N."}
:::

## Legge di Stevino

::::teorema{#stevino titolo="Pressione e profondità"}
In un liquido in quiete di densità costante $\rho$, con campo gravitazionale uniforme $g$, la pressione a profondità verticale $h$ sotto una superficie a pressione $p_0$ vale
$$
p=p_0+\rho gh.
$$
Per confrontare due punti nello stesso liquido con profondità $h_1$ e $h_2$, si ottiene $p_2-p_1=\rho g(h_2-h_1)$.

:::dimostrazione
Si consideri una colonna verticale immaginaria di liquido di area $A$ e altezza $h$. Alla base, il fluido sottostante esercita verso l'alto la forza $pA$. In alto la pressione esterna esercita verso il basso $p_0A$. Anche il peso della colonna agisce verso il basso e vale $\rho Ahg$. Le forze laterali non hanno componente verticale. La somma verticale nulla dà $pA-p_0A-\rho Ahg=0$. Si divide per $A>0$, che si cancella.
:::
::::

:::esempio{titolo="Pressioni a due quote"}
In acqua con $\rho=1000\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, la pressione aumenta di $10\,\mathrm{kPa}$ per metro. Due punti a $2$ e $5\,\mathrm m$ dalla medesima superficie differiscono di $30\,\mathrm{kPa}$. Una distanza orizzontale fra i due punti non cambia la differenza perché la legge usa soltanto il dislivello verticale.
:::

::grafico{f="10*x" nomi="h (m),Δp (kPa)" punti="2,20,pieno,A;5,50,pieno,B" xmin=0 xmax=6 ymin=0 ymax=65 titolo="In acqua la pendenza è 10 kPa per metro. Da A a B il dislivello è 3 m e la pressione cresce di 30 kPa"}

:::esempio{#densita-da-pressioni titolo="Dedurre densità e pressione superficiale"}
In un recipiente chiuso la densità del liquido e la pressione alla superficie sono ignote. Due sensori assoluti leggono $104\,\mathrm{kPa}$ a $0{,}50\,\mathrm m$ e $120\,\mathrm{kPa}$ a $2{,}50\,\mathrm m$. Il liquido è uniforme e $g=10\,\mathrm{N/kg}$. La differenza dei dati elimina la pressione superficiale.

$$
\rho g=\frac{(120-104)\,\mathrm{kPa}}{(2{,}50-0{,}50)\,\mathrm m}
       =8{,}0\,\mathrm{kPa/m}.
$$

Dividendo $8000\,\mathrm{Pa/m}$ per il campo gravitazionale si trova $\rho=800\,\mathrm{kg/m^3}$. Si risale quindi da uno dei punti alla superficie. Dal primo si sottrae $8{,}0\cdot0{,}50=4{,}0\,\mathrm{kPa}$ e si ottiene $p_0=100\,\mathrm{kPa}$. Dal secondo si sottraggono $20\,\mathrm{kPa}$ e si ritrova la stessa intercetta. Con una sola misura esistono più coppie di densità e pressione superficiale compatibili. Se ne trova una precisa quando si conosce una delle due grandezze oppure si aggiunge una seconda pressione a profondità diversa.

::grafico{f="100+8*x" punti="0,100,pieno;0.5,104,pieno,A;2.5,120,pieno,B" nomi="h (m),p (kPa)" xmin=0 xmax=3 ymin=94 ymax=127 titolo="L'intercetta è la pressione alla superficie. Tra A e B la pressione aumenta di 16 kPa su 2 m."}
:::

:::esempio{#spinta-su-parete titolo="Spinta su una parete verticale"}
Una piastra rettangolare larga $0{,}30\,\mathrm m$ si estende fra $0{,}20$ e $0{,}80\,\mathrm m$ sotto la superficie dell'acqua. Sull'altra faccia agisce la stessa atmosfera che preme sulla superficie. Con gradiente $10\,\mathrm{kPa/m}$ le differenze di pressione ai bordi valgono $2$ e $8\,\mathrm{kPa}$.

La differenza di pressione cresce linearmente e tutte le strisce orizzontali di uguale altezza hanno la stessa area. Accoppiando strisce simmetriche rispetto alla quota centrale, la media di ogni coppia è $5\,\mathrm{kPa}$. La media di tutta la piastra è dunque $5\,\mathrm{kPa}$. La forza vale $5000\,\mathrm{Pa}\cdot0{,}30\cdot0{,}60\,\mathrm m^2=900\,\mathrm N$. Questo calcolo determina il modulo totale. Distribuire la stessa forza uniformemente sulla piastra conserva il modulo, mentre cambia i singoli contributi.

::grafico{poligoni="0.2,0 0.8,0 0.8,8 0.2,2" linee="0.2,2 0.8,8" segmenti="0.2,5,0.8,5" punti="0.2,2,pieno;0.5,5,pieno;0.8,8,pieno" xmin=0 xmax=1 ymin=0 ymax=9 nomi="h (m),Δp (kPa)" titolo="Dalla sommità al bordo inferiore la pressione cresce da 2 a 8 kPa. Il tratteggio indica la media di 5 kPa."}
:::

## Pressione assoluta e relativa

:::definizione{#assoluta titolo="Scegliere il riferimento"}
La **pressione assoluta** è riferita al vuoto. La pressione **relativa** a un riferimento di pressione $p_{\mathrm{rif}}$ è $p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{rif}}$. Per un recipiente aperto si usa spesso la pressione atmosferica come riferimento. Un recipiente chiuso può avere alla superficie del liquido una pressione diversa dall'atmosferica.

Con atmosfera a $100\,\mathrm{kPa}$ e un gradiente di $10\,\mathrm{kPa/m}$, in acqua alla profondità di $1{,}5\,\mathrm m$ la pressione assoluta è $115\,\mathrm{kPa}$ e la relativa all'atmosfera è $15\,\mathrm{kPa}$. Se un gas a $90\,\mathrm{kPa}$ assoluti è separato dall'atmosfera da una membrana piana, la sua pressione relativa è $-10\,\mathrm{kPa}$. Il segno indica pressione più bassa del riferimento. Le forze sulle due facce della membrana hanno versi opposti, quindi la forza netta dipende dalla differenza di pressione.
:::

:::esempio{#tre-riferimenti titolo="Tre letture per lo stesso punto"}
Un recipiente contiene acqua. Il gas sulla superficie del liquido è a $103\,\mathrm{kPa}$ assoluti e l'ambiente esterno è a $98\,\mathrm{kPa}$ assoluti. Con gradiente $10\,\mathrm{kPa/m}$, a $1{,}5\,\mathrm m$ sotto la superficie la pressione assoluta è $118\,\mathrm{kPa}$. Un sensore tarato rispetto all'esterno indica quindi $20\,\mathrm{kPa}$. Un sensore che prenda a riferimento il gas nel recipiente indica $15\,\mathrm{kPa}$.

| Posizione | Assoluta | Relativa all'esterno | Relativa al gas |
| --- | ---: | ---: | ---: |
| Ambiente esterno | 98 kPa | 0 kPa | −5 kPa |
| Superficie interna | 103 kPa | 5 kPa | 0 kPa |
| A 1,5 m di profondità | 118 kPa | 20 kPa | 15 kPa |

La stessa differenza compare sottraendo due valori riferiti al medesimo zero. Per esempio, tra superficie interna e sensore profondo l'incremento è $15\,\mathrm{kPa}$ sia in assoluto sia rispetto all'esterno. Nella forza su una parete conta la differenza fra le pressioni fisiche delle due facce. Per confrontarne le letture si esprimono prima entrambe nella stessa scala di riferimento.

::grafico{f="5+10*x;10*x" legenda="\text{Riferimento esterno};\text{Riferimento al gas}" punti="1.5,20,pieno;1.5,15,pieno" nomi="h (m),p_rel (kPa)" xmin=0 xmax=2 ymin=0 ymax=28 titolo="La retta più alta usa l'esterno come riferimento, l'altra il gas interno. In entrambi i casi il gradiente è lo stesso."}
:::

## Principio di Pascal

:::teorema{#pascal titolo="Trasmettere una variazione di pressione"}
In un fluido incomprimibile in quiete e confinato, una variazione imposta di pressione si trasmette a tutto il fluido. A geometria invariata, il contributo $\rho gh$ non cambia e a ogni punto si aggiunge la stessa variazione superficiale. In una pressa ideale con pistoni alla stessa quota, le forze aggiuntive soddisfano $\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}$ se valgono le stesse condizioni esterne e si trascurano le perdite.

Con $A_1=5\,\mathrm{cm^2}$, $A_2=25\,\mathrm{cm^2}$ e $F_1=16\,\mathrm N$, il pistone grande sviluppa $80\,\mathrm N$. Se quello piccolo avanza di $5\,\mathrm{cm}$ e il liquido è incomprimibile, il volume spostato è $25\,\mathrm{cm^3}$. Il pistone grande si sposta verso l'esterno di $1\,\mathrm{cm}$ per fare posto allo stesso volume. Il rapporto di aree aumenta la forza e riduce lo spostamento.
:::

:::esempio{#corsa-e-lavoro titolo="La forza aumenta e la corsa si riduce"}
In una pressa ideale il carico aggiuntivo di $16\,\mathrm N$ agisce su $4\,\mathrm{cm^2}$. Un secondo pistone ha area $12\,\mathrm{cm^2}$. Le forze qui considerate sono quelle dovute alla sola variazione di pressione. Dato che l'area d'uscita è tripla, la forza aggiuntiva all'uscita vale $48\,\mathrm N$. Per un piccolo movimento in cui l'aumento di pressione è costante, l'avanzamento di $6\,\mathrm{cm}$ del primo pistone sposta $24\,\mathrm{cm^3}$ di liquido. Il secondo deve arretrare di $2\,\mathrm{cm}$ per accogliere quel volume.

Per una forza costante che agisce nel verso dello spostamento, il lavoro è il prodotto del modulo della forza per la distanza percorsa. I prodotti della forza aggiuntiva per la rispettiva corsa, in modulo, sono $16\cdot0{,}06\,\mathrm J$ e $48\cdot0{,}02\,\mathrm J$. Entrambi valgono $0{,}96\,\mathrm J$. In generale il loro valore comune è l'incremento di pressione moltiplicato per il volume spostato. L'uguaglianza si riferisce al contributo aggiuntivo nel modello ideale. Misurando carichi totali a quote differenti, occorre tener conto anche delle pressioni di partenza.

::grafico{assi=0 uguale=1 linee="0,3 0,0 6,0 6,3;1,3 1,0.5 3,0.5 3,3;0,2.5 1,2.5;3,2.1 6,2.1" segmenti="0,1.3,1,1.3;3,1.7,6,1.7" vettori="0.5,2.35,0.5,1.4;4.5,1.76,4.5,2.06" etichette="0.1,2.9,4 cm²;3.8,2.6,12 cm²;-0.8,1.9,6 cm;4.9,1.95,2 cm" xmin=-1 xmax=6.4 ymin=-0.3 ymax=3.45 titolo="Il pistone più piccolo avanza di 6 cm. Quello di area tripla arretra di 2 cm."}
:::

## Vasi comunicanti

:::teorema{#vasi titolo="Uguaglianza delle pressioni allo stesso livello"}
Due punti alla stessa quota in un liquido fermo, omogeneo e collegato hanno la stessa pressione. Se due rami aperti alla stessa atmosfera contengono lo stesso liquido, le superfici libere sono quindi alla stessa quota. Un ramo più largo contiene più volume per unità di altezza e può avere lo stesso livello libero.

Per liquidi immiscibili si confrontano le pressioni alla stessa quota nel liquido comune. Se una colonna d'olio di densità $800\,\mathrm{kg/m^3}$ ha altezza $25\,\mathrm{cm}$ sopra l'interfaccia e dall'altro lato c'è acqua di densità $1000\,\mathrm{kg/m^3}$, l'acqua sale di $20\,\mathrm{cm}$ sopra quella quota. La pressione dell'aria è comune e il fattore $g$ si semplifica.
:::

:::esempio{#vasi-con-gas titolo="Due superfici a pressioni differenti"}
Due rami comunicanti contengono la stessa acqua. Alla superficie di A la pressione è $106\,\mathrm{kPa}$ e alla superficie di B è $101\,\mathrm{kPa}$. Con $\rho g=10\,\mathrm{kPa/m}$, scegliamo la quota di A come livello di confronto nel liquido. Nel ramo A la pressione lì è direttamente $106\,\mathrm{kPa}$. Nel ramo B occorre scendere dalla superficie di B fino alla quota di A. Serve un incremento idrostatico di $5\,\mathrm{kPa}$, quindi la superficie di B è più alta di $0{,}50\,\mathrm m$.

Per trovare di quanto ciascun ramo si sia spostato rispetto a un livello iniziale comune serve anche il bilancio dei volumi. Se la sezione di A è doppia di quella di B, a volume di liquido costante B sale del doppio di quanto A scende. La somma di salita e discesa vale il dislivello finale. Posta $x$ la discesa di A, vale $x+2x=0{,}50\,\mathrm m$. A scende quindi di circa $0{,}17\,\mathrm m$ e B sale di circa $0{,}33\,\mathrm m$.

::grafico{assi=0 uguale=1 poligoni="0,0.7 1.4,0.7 1.4,0.35 2.5,0.35 2.5,1.2 3.2,1.2 3.2,0 0,0" linee="0,1.8 0,0 3.2,0 3.2,1.8;1.4,1.8 1.4,0.35 2.5,0.35 2.5,1.8;0,0.7 1.4,0.7;2.5,1.2 3.2,1.2" segmenti="1.4,0.7,2.85,0.7;2.2,1.2,2.5,1.2;2.2,0.7,2.2,1.2" etichette="0.08,1.5,A 106 kPa;2.1,1.95,B 101 kPa;1.49,0.97,0.50 m" xmin=-0.35 xmax=3.8 ymin=-0.24 ymax=2.25 titolo="La pressione maggiore abbassa la superficie A. Nel ramo B si confrontano le pressioni 0,50 m sotto la superficie."}
:::

## Strati sovrapposti

:::osservazione{#strati titolo="Somma dei contributi idrostatici"}
Ogni strato uniforme contribuisce con $\rho_i g h_i$. Partendo dalla superficie e scendendo, si sommano gli incrementi fino al punto cercato. In un recipiente con $0{,}5\,\mathrm m$ di olio di densità $800\,\mathrm{kg/m^3}$ sopra $1\,\mathrm m$ d'acqua, con $g=10\,\mathrm{N/kg}$, l'olio aggiunge $4\,\mathrm{kPa}$ e l'acqua $10\,\mathrm{kPa}$. Il fondo è quindi a $14\,\mathrm{kPa}$ sopra il riferimento della superficie.

All'interfaccia piana in quiete, trascurando la tensione superficiale, la pressione è continua. La sua pendenza rispetto alla profondità invece cambia: nello strato più denso cresce più rapidamente. Nel grafico il tratto più ripido corrisponde all'acqua.
:::

::grafico{linee="0,0 0.5,4 1.5,14" punti="0.5,4,pieno,I;1.5,14,pieno,F" nomi="h (m),Δp (kPa)" xmin=0 xmax=1.65 ymin=0 ymax=16 titolo="Il punto I è l'interfaccia fra olio e acqua. La pressione resta continua e la pendenza aumenta nell'acqua"}

:::esempio{#spessori-da-pressione titolo="Trovare due spessori da una misura"}
Un recipiente contiene olio e acqua sovrapposti, per uno spessore complessivo di $1{,}50\,\mathrm m$. Il fondo ha un aumento di pressione di $13{,}2\,\mathrm{kPa}$ rispetto alla superficie. Il gradiente nell'olio vale $8\,\mathrm{kPa/m}$ e quello nell'acqua $10\,\mathrm{kPa/m}$. Sia $x$ lo spessore dell'olio in metri. Lo spessore d'acqua è espresso dallo stesso dato, $1{,}50-x$.

$$
\begin{aligned}
8x+10(1{,}50-x)&=13{,}2\\
15{,}0-2x&=13{,}2 \\
x&=0{,}90.
\end{aligned}
$$

L'olio è spesso $0{,}90\,\mathrm m$ e l'acqua $0{,}60\,\mathrm m$. I due contributi sono $7{,}2\,\mathrm{kPa}$ e $6{,}0\,\mathrm{kPa}$. Un recipiente pieno solo d'olio darebbe $12{,}0\,\mathrm{kPa}$, mentre uno pieno solo d'acqua darebbe $15{,}0\,\mathrm{kPa}$. Questo confronto controlla la compatibilità della lettura prima di risolvere. Un valore esterno all'intervallo sarebbe incompatibile con spessori entrambi positivi. I due estremi corrispondono alla scomparsa di uno strato.

::grafico{linee="0,0 0.9,7.2 1.5,13.2" f="8*x;10*x" legenda="\text{Solo olio};\text{Solo acqua}" xmin=0 xmax=1.6 ymin=0 ymax=16.5 nomi="h (m),Δp (kPa)" punti="0.9,7.2,pieno,I;1.5,12,vuoto;1.5,13.2,pieno;1.5,15,vuoto" titolo="La spezzata segue prima la retta dell'olio e piega in I. Al fondo il risultato è fra i valori dei liquidi puri."}
:::

## Manometri e barometri

:::osservazione{#manometri titolo="Colonne che misurano una pressione"}
In un manometro a tubo a U con liquido uniforme e gas di densità trascurabile, il dislivello fra le superfici dà il modulo $\rho g\Delta h$ della differenza di pressione. Il lato su cui la superficie è più bassa è a pressione maggiore, perché richiede più pressione esterna per sostenere la colonna comunicante. Con acqua, $g=10\,\mathrm{N/kg}$ e dislivello $12\,\mathrm{cm}$, il modulo è $1200\,\mathrm{Pa}$.

In un barometro ideale la pressione sopra la colonna è trascurabile rispetto a quella atmosferica. L'altezza $h$ soddisfa allora $p_{\mathrm{atm}}=\rho gh$. A parità di pressione, un liquido più denso richiede una colonna più corta. Un fluido meno denso aumenta il dislivello per la stessa differenza di pressione, con un diverso campo utile di misura.
:::

:::esempio{#barometro-pressione-residua titolo="Una pressione residua nel barometro"}
Un barometro contiene un liquido di densità $12500\,\mathrm{kg/m^3}$ e si usa $g=10\,\mathrm{N/kg}$. In cima alla colonna c'è un gas con pressione assoluta $3\,\mathrm{kPa}$. La colonna è alta $0{,}80\,\mathrm m$. Partendo da quella pressione e scendendo fino alla vaschetta, l'incremento idrostatico vale $100\,\mathrm{kPa}$. Alla quota della superficie della vaschetta il liquido è anche a contatto con l'atmosfera. La pressione esterna risulta quindi $103\,\mathrm{kPa}$.

Un algoritmo calibrato per il vuoto attribuirebbe l'intera lettura alla colonna, sottostimando l'atmosfera di $3\,\mathrm{kPa}$. Per la medesima atmosfera il gas riduce infatti il peso della colonna che può essere sostenuto. L'equazione vale per l'altezza verticale anche se il tubo è obliquo. In misure molto precise, la pressione sulla sommità deve essere nota alla temperatura di misura, poiché anche il vapore del liquido può contribuire.

::grafico{f="125*x;3+125*x" legenda="\text{Vuoto in cima};\text{Gas residuo}" xmin=0 xmax=1 ymin=0 ymax=132 nomi="h (m),p (kPa)" punti="0.8,100,vuoto;0.8,103,pieno" segmenti="0.8,0,0.8,100;0.65,100,0.8,100;0.8,103,0.82,122" etichette="0.52,101,100 kPa;0.83,125,103 kPa" titolo="A 0,80 m l'atmosfera vale 103 kPa con gas residuo. La retta che parte dal vuoto darebbe 100 kPa."}
:::
