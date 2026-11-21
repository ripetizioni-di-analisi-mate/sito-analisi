---
titolo: "Spinta di Archimede e galleggiamento"
sommario: "Volume immerso, peso apparente, densità, carichi sostenibili e corpi vincolati."
---

## Il principio di Archimede

:::osservazione{titolo="Grandezze e unità usate nel capitolo"}
Un **fluido** è una sostanza che scorre e prende la forma del recipiente che la contiene. Sono fluidi i liquidi, come l'acqua e l'olio, e i gas, come l'aria. Un fluido è *in quiete* quando è fermo. La **superficie libera** di un liquido, detta anche pelo libero, è la superficie a contatto con l'aria.

- Una **forza** è una spinta o una trazione e si misura in newton, simbolo $\mathrm N$. Il **peso** di un corpo è la forza con cui la Terra lo attira verso il basso e si indica con $P$.
- La lettera $g$ indica quanti newton pesa ogni chilogrammo. Vicino alla superficie della Terra vale circa $9{,}8\,\mathrm{N/kg}$ e negli esempi del capitolo si arrotonda a $10\,\mathrm{N/kg}$. Un corpo di massa $m$ ha peso $P=mg$, quindi un corpo di $3\,\mathrm{kg}$ pesa $30\,\mathrm N$.
- Il litro, simbolo $\mathrm L$, è un'unità di volume. Un litro è un decimetro cubo, cioè $1000\,\mathrm{cm^3}$, e $1\,\mathrm L=0{,}001\,\mathrm m^3$.
- La **densità** di una sostanza è la sua massa divisa per il suo volume. Si indica con la lettera greca $\rho$, che si legge «ro». L'acqua ha densità $1000\,\mathrm{kg/m^3}$, cioè $1\,\mathrm{kg/L}$. Un litro d'acqua ha quindi massa $1\,\mathrm{kg}$ e pesa $10\,\mathrm N$.
- La **pressione** è la forza divisa per l'area su cui la forza preme. Si misura in pascal, simbolo $\mathrm{Pa}$, e $1\,\mathrm{Pa}$ è la pressione di $1\,\mathrm N$ su $1\,\mathrm m^2$. Mille pascal sono un chilopascal, $\mathrm{kPa}$. In un liquido fermo di densità $\rho$ la pressione aumenta con la profondità. Scendendo di un tratto $h$ aumenta di $\rho g h$ (capitolo sulla pressione nei fluidi). Nell'acqua ogni metro in più aggiunge $1000\cdot10\cdot1\,\mathrm{Pa}=10000\,\mathrm{Pa}$.
:::

::::teorema{#archimede titolo="Peso del fluido spostato"}
Un corpo immerso in un fluido in quiete riceve dal fluido una forza diretta verso l'alto, che si chiama **spinta di Archimede** e si indica con $F_A$.

La spinta nasce dalla pressione. Il fluido preme su tutta la parte immersa della superficie del corpo. Poiché la pressione aumenta con la profondità, il fluido preme di più sulle parti basse del corpo che su quelle alte. La somma di tutte queste forze di pressione si chiama **risultante** ed è quindi diretta verso l'alto.

Il **principio di Archimede** afferma che il modulo della spinta, cioè il suo valore senza indicazione del verso, è uguale al peso del fluido spostato. Il fluido spostato è il fluido che occuperebbe lo spazio in cui ora si trova la parte immersa del corpo.

Il volume della parte immersa si chiama **volume immerso** e si indica con $V_i$. È il volume da cui il corpo esclude il fluido. La densità del fluido si indica con $\rho_f$, dove la lettera $f$ in basso sta per «fluido». Il fluido spostato ha massa $\rho_f V_i$ e peso $\rho_f V_i\,g$. Se la densità del fluido e $g$ sono uniformi, cioè hanno lo stesso valore in tutti i punti, la spinta è quindi
$$
F_A=\rho_f gV_i.
$$
Si trascura la spinta dell'aria sulla parte emersa, cioè sulla parte del corpo che sta fuori dal liquido, quando è piccola rispetto a quella del liquido. Un litro d'aria pesa circa $0{,}012\,\mathrm N$, mentre un litro d'acqua pesa $10\,\mathrm N$.

:::dimostrazione
Prima che si inserisca il corpo, lo spazio che sarà occupato dalla parte immersa è pieno di fluido. Su questa porzione di fluido agiscono il suo peso, diretto verso il basso, e le forze di pressione del fluido circostante. Quel fluido è fermo, quindi le forze di pressione sulla sua superficie ne equilibrano il peso. La loro risultante è perciò diretta verso l'alto e ha modulo uguale al peso della porzione.

Se il volume arriva alla superficie libera, si usa la pressione relativa a quella atmosferica, cioè la pressione misurata a partire da quella dell'aria che sta sopra il liquido. La pressione relativa sulla superficie libera vale zero, quindi da quel lato non c'è alcuna forza da contare.

Ora si sostituisce idealmente la porzione di fluido con un corpo la cui parte immersa ha la stessa forma. La pressione in un punto del fluido circostante dipende dalla profondità del punto, che è rimasta la stessa. Poiché le pressioni sulla superficie bagnata sono le stesse, la risultante di pressione resta quella che sosteneva il fluido sostituito. La spinta sul corpo è quindi uguale al peso di quel fluido.

Questo mostra perché nel calcolo entra la densità del fluido. Il materiale di cui è fatto il corpo non compare nella formula.
:::
::::

:::esempio{titolo="La differenza di pressione su un prisma"}
Un prisma è un solido con due facce uguali e parallele, dette basi, come una scatola. Un prisma verticale interamente in acqua di densità $1000\,\mathrm{kg/m^3}$ ha le due basi orizzontali di area $A=0{,}02\,\mathrm m^2$ e altezza $h=0{,}3\,\mathrm m$. Si pone $g=10\,\mathrm{N/kg}$.

La base inferiore si trova $0{,}3\,\mathrm m$ più in profondità di quella superiore. La pressione $p_2$ sulla base inferiore supera quindi la pressione $p_1$ sulla faccia alta di
$$
p_2-p_1=\rho_f g h=1000\cdot10\cdot0{,}3\,\mathrm{Pa}=3000\,\mathrm{Pa}.
$$
L'acqua spinge la base inferiore verso l'alto con la forza $p_2A$ e la base superiore verso il basso con la forza $p_1A$. Le forze sulle facce laterali sono orizzontali e si compensano, perché a ogni profondità l'acqua preme con la stessa pressione da tutti i lati.
$$
F_A=p_2A-p_1A=(p_2-p_1)A=(3000\,\mathrm{Pa})(0{,}02\,\mathrm m^2)=60\,\mathrm N.
$$
Il volume del prisma è $Ah=0{,}02\,\mathrm m^2\cdot0{,}3\,\mathrm m=0{,}006\,\mathrm m^3$, cioè $6\,\mathrm L$. Il peso di sei litri d'acqua è infatti sessanta newton, come afferma il principio di Archimede.

Nella figura la linea orizzontale è la superficie dell'acqua e le due frecce sono le forze $p_1A$ e $p_2A$ sulle basi.
:::

::grafico{assi=0 uguale=1 linee="-2,2 4,2" poligoni="0,0 2,0 2,1.5 0,1.5" vettori="1,1.9,1,1.5,;1,-1.35,1,0,p₂ A" etichette="2.8,0.75,h;1.25,1.7,p₁ A" xmin=-3 xmax=5 ymin=-2 ymax=3 titolo="Prisma immerso. La forza sulla faccia inferiore è maggiore. Le frecce rappresentano solo le componenti verticali"}

:::esempio{titolo="Traslare un prisma senza ruotarlo"}
Traslare un corpo significa spostarlo senza farlo ruotare. Nel caso del prisma alto $0{,}3\,\mathrm m$, le due facce orizzontali si trovano per esempio a profondità di $0{,}15\,\mathrm m$ e $0{,}45\,\mathrm m$. Rispetto alla pressione sulla superficie libera, gli aumenti $\rho_f g h$ sono rispettivamente $1000\cdot10\cdot0{,}15\,\mathrm{Pa}=1500\,\mathrm{Pa}$ e $1000\cdot10\cdot0{,}45\,\mathrm{Pa}=4500\,\mathrm{Pa}$.

Abbassando il prisma di $0{,}20\,\mathrm m$ le facce arrivano a $0{,}35\,\mathrm m$ e $0{,}65\,\mathrm m$ di profondità. L'abbassamento aggiunge $1000\cdot10\cdot0{,}20\,\mathrm{Pa}=2000\,\mathrm{Pa}$ a entrambe le letture, che diventano $3500\,\mathrm{Pa}$ e $6500\,\mathrm{Pa}$. La differenza di pressione fra le due facce prima dell'abbassamento è $\Delta p_1$ e dopo l'abbassamento è $\Delta p_2$. La lettera greca $\Delta$, delta, indica una differenza.
$$
\begin{aligned}
\Delta p_1&=4500\,\mathrm{Pa}-1500\,\mathrm{Pa}=3000\,\mathrm{Pa},\\
\Delta p_2&=6500\,\mathrm{Pa}-3500\,\mathrm{Pa}=3000\,\mathrm{Pa}.
\end{aligned}
$$
La pressione cresce con la stessa pendenza in tutto il liquido, cioè ogni metro di profondità in più aggiunge sempre $10000\,\mathrm{Pa}$. Perciò, finché l'oggetto rimane interamente bagnato, alta e bassa pressione aumentano della stessa quantità e la risultante verticale sui due lati conserva il suo modulo.

Questo ragionamento dipende dalla densità uniforme e dalla rigidità del prisma. Un corpo è rigido quando non cambia forma né volume. Su un corpo che si comprime, la distanza tra le facce e il volume immerso diminuiscono scendendo, e con essi la spinta.

Nel grafico la retta dà la pressione relativa, in chilopascal, a ogni profondità. I punti A, B, C e D sono le quattro facce.

::grafico{f="10*x" punti="0.15,1.5,pieno,A;0.45,4.5,pieno,B;0.35,3.5,pieno,C;0.65,6.5,pieno,D" xmin=0 xmax=0.78 ymin=0 ymax=8 nomi="profondità (m),p_rel (kPa)" titolo="Prima dell'abbassamento le facce sono in A e B. Dopo l'abbassamento sono in C e D. Il salto di pressione è sempre di 3 kPa."}
:::

## Volume immerso e problemi inversi

:::osservazione{#inverse titolo="Identificare il volume che sposta fluido"}
Il volume esterno $V$ di un corpo è lo spazio racchiuso dalla sua superficie esterna, comprese le eventuali cavità. Un corpo è impermeabile quando il liquido non riesce a entrarvi.

- Per un corpo rigido, impermeabile e interamente sommerso, la parte immersa occupa il volume esterno, quindi $V_i=V$.
- Un corpo parzialmente immerso dà $V_i<V$.
- Una scatola cava, cioè vuota all'interno, è stagna quando è chiusa in modo che l'acqua resti fuori. Per una scatola cava e stagna si considera il volume esterno immerso, cavità compresa, perché il liquido è escluso anche dalla cavità.
- Se un'apertura consente all'acqua di riempire parte della cavità, il liquido che entra non è più escluso da quel volume.

Un problema inverso dà la spinta e chiede il volume immerso oppure la densità del fluido. Dalla formula $F_A=\rho_f gV_i$, dividendo entrambi i membri per $\rho_f g$, si ricava
$$
V_i=\frac{F_A}{\rho_f g}.
$$
Con una spinta di $72\,\mathrm N$ in un olio di densità $800\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, il volume spostato è $\dfrac{72}{800\cdot10}\,\mathrm m^3=0{,}009\,\mathrm m^3$. Sono $9\,\mathrm L$, perché $1\,\mathrm L=10^{-3}\,\mathrm m^3$. Se il corpo emerge in parte, dal solo dato della spinta non si ricava il volume totale.

Quando sono noti la spinta e il volume immerso, si divide invece per $gV_i$ e si ottiene la densità del fluido. Con gli stessi dati
$$
\rho_f=\frac{F_A}{gV_i}=\frac{72}{10\cdot0{,}009}\,\mathrm{kg/m^3}=800\,\mathrm{kg/m^3}.
$$

Un recipiente a trabocco ha un foro di scarico sul fianco. Quando si immerge un corpo il livello sale, e il liquido che supera il foro esce e viene raccolto in un secondo recipiente. Il volume raccolto coincide con il volume spostato se il liquido arriva già al foro di scarico prima dell'immersione. Se il livello iniziale è più basso, parte del volume spostato serve a colmare lo spazio fino al foro. Per risalire al volume immerso si sommano il volume necessario a raggiungere il foro e l'acqua raccolta.
:::

:::esempio{titolo="Cavità stagna e cavità allagata"}
Due involucri dello stesso tipo hanno volume esterno $5\,\mathrm L$ e cavità di $3\,\mathrm L$. Il guscio, cioè il materiale di cui è fatto ciascun involucro, occupa quindi $5\,\mathrm L-3\,\mathrm L=2\,\mathrm L$. Si immergono completamente in acqua, con $\rho_f=1\,\mathrm{kg/L}$ e $g=10\,\mathrm{N/kg}$.

L'involucro stagno ha la cavità piena d'aria ed esclude tutti i $5\,\mathrm L$. Il secondo ha aperture e, a equilibrio raggiunto, la cavità è piena d'acqua collegata all'esterno. La spinta sull'involucro è allora quella per i $2\,\mathrm L$ occupati dal guscio. Ogni litro escluso dà $10\,\mathrm N$ di spinta. Le due spinte sono rispettivamente $50\,\mathrm N$ e $20\,\mathrm N$.

Il risultato per l'involucro aperto presuppone che l'acqua interna rimanga parte del liquido circostante. In fisica si chiama sistema l'insieme dei corpi di cui si sommano le forze. Se si isola un sistema che include involucro e acqua interna, cambia la superficie su cui si calcolano le forze di pressione e al peso del sistema si aggiunge quello dell'acqua interna. Il bilancio resta coerente, purché peso e superficie di contatto siano riferiti allo stesso sistema.

::grafico{assi=0 uguale=1 linee="-0.5,3 7.5,3;0,0 3,0 3,2 0,2 0,0;5.32,2 4,2 4,0 7,0 7,2 5.68,2;5.32,2 5.32,1.58 4.4,1.58 4.4,0.42 6.6,0.42 6.6,1.58 5.68,1.58 5.68,2" poligoni="0.4,0.42 2.6,0.42 2.6,1.58 0.4,1.58" etichette="1.5,1,aria;5.5,1,acqua;5.5,2.35,apertura" xmin=-0.65 xmax=7.63 ymin=-0.55 ymax=3.3 titolo="Le cavità hanno lo stesso volume. La cavità aperta comunica con il liquido esterno."}
:::

## Peso apparente

:::teorema{#apparente titolo="La tensione del dinamometro"}
Un dinamometro è uno strumento con una molla che misura una forza in newton. Un corpo appeso a un dinamometro tramite un filo è tirato verso l'alto dal filo con una forza $T$, detta tensione, e il dinamometro indica il valore di $T$.

Si consideri un corpo sospeso a un dinamometro dall'alto, fermo e immerso senza altri contatti. Sul corpo agiscono tre forze.

- Il peso $P$ è diretto verso il basso.
- La tensione $T$ del filo è diretta verso l'alto.
- La spinta $F_A$ è diretta verso l'alto.

Il corpo è fermo, quindi le forze verso l'alto e quella verso il basso si equilibrano e vale $T+F_A=P$. La lettura è $T=P-F_A$, purché il filo rimanga teso. Si chiama **peso apparente** la lettura nelle condizioni descritte. Il peso gravitazionale $P$ non cambia perché la massa del corpo e $g$ sono gli stessi dentro e fuori dal liquido.

Se un solido pesa $90\,\mathrm N$ trascurando la spinta dell'aria e il dinamometro indica $60\,\mathrm N$ in acqua a immersione completa, la spinta è $F_A=P-T=90\,\mathrm N-60\,\mathrm N=30\,\mathrm N$. La differenza $P-T$ si chiama anche perdita apparente di peso.

Dalle due letture si ricava la densità del solido. Si indica con $\rho_c$ la densità del corpo, dove la lettera $c$ sta per «corpo», e con $V$ il suo volume. La massa del solido è $\rho_cV$. Il peso del solido e la perdita apparente sono rispettivamente $\rho_c Vg$ e $\rho_f Vg$. Dividendo il primo per la seconda si ottiene
$$
\frac{P}{P-T}=\frac{\rho_c Vg}{\rho_f Vg}=\frac{\rho_c}{\rho_f},
\qquad
\frac{\rho_c}{\rho_f}=\frac{90}{30}=3.
$$
Il solido ha densità tripla di quella dell'acqua, cioè $3000\,\mathrm{kg/m^3}$. Lo stesso volume $V$ compare nel peso e nella spinta e si semplifica perché l'immersione è completa, e quindi $V_i=V$.
:::

:::osservazione{#reazione-bilancia titolo="La forza trasmessa al recipiente"}
Un recipiente d'acqua poggia su una bilancia. Un corpo tenuto fermo da un sostegno indipendente viene immerso senza toccare il recipiente e senza far uscire acqua. L'acqua spinge il corpo verso l'alto con la forza $F_A$. Il principio di azione e reazione afferma che, se un corpo esercita una forza su un secondo corpo, il secondo esercita sul primo una forza di uguale modulo e verso opposto. Per questo principio, il corpo esercita sull'acqua una forza di uguale modulo diretta verso il basso. La bilancia registra quindi una forza maggiore di $F_A$ rispetto alla lettura con il corpo fuori dal liquido.

Quando la bilancia indica una massa, l'aumento della lettura è $\Delta m=\dfrac{F_A}{g}$. Con una spinta di $3\,\mathrm N$ e $g=10\,\mathrm{N/kg}$ la lettura sale di $\dfrac{3}{10}\,\mathrm{kg}=0{,}3\,\mathrm{kg}$. Il peso del recipiente e dell'acqua è rimasto lo stesso. La parte del peso del corpo non equilibrata dalla spinta, cioè $P-F_A$, resta a carico del sostegno esterno.
:::

:::esempio{titolo="Lettura di un dinamometro fino all'allentamento"}
Un corpo pesa $45\,\mathrm N$ e ha volume esterno $5\,\mathrm L$. Viene immerso via via in acqua, con $\rho_f=1\,\mathrm{kg/L}$ e $g=10\,\mathrm{N/kg}$. Ogni litro immerso sposta $1\,\mathrm{kg}$ d'acqua e aggiunge $10\,\mathrm N$ di spinta. La lettura del dinamometro $T=P-F_A$ diminuisce quindi di $10\,\mathrm N$ per ogni litro in più che entra in acqua.

La lettura giunge a zero quando la spinta raggiunge i $45\,\mathrm N$, cioè quando $V_i=4{,}5\,\mathrm L$. Nel grafico il punto A è il corpo tutto fuori dall'acqua e il punto B è il corpo con $4{,}5\,\mathrm L$ immersi.

Se si applicasse la stessa formula a $5\,\mathrm L$, si otterrebbero $45\,\mathrm N-50\,\mathrm N=-5\,\mathrm N$. Il segno negativo indica che a completa immersione servirebbe una forza di $5\,\mathrm N$ verso il basso per mantenere l'equilibrio. Un dinamometro sospeso sopra il corpo tira solo verso l'alto, quindi il filo si allenta. Da quel punto, per imporre immersioni maggiori occorre un vincolo diverso, per esempio un filo fissato al fondo.

::grafico{linee="0,45 4.5,0" punti="0,45,pieno,A;4.5,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=52 nomi="Vᵢ (L),tensione (N)" titolo="Il tratto termina a 4,5 L, dove il filo si allenta. A immersioni maggiori non può mantenere l’equilibrio."}
:::

:::osservazione{titolo="Quando conta anche la spinta dell'aria"}
La pesata in aria di un corpo fermo di volume $V$ dà $T_\mathrm{aria}=P-\rho_\mathrm{aria} Vg$. In acqua, a immersione completa e senza contatti, si ha invece $T_\mathrm{acqua}=P-\rho_\mathrm{acqua}Vg$. Sottraendo la seconda lettura dalla prima, il peso $P$ si cancella. La differenza tra le letture è dunque
$$
T_\mathrm{aria}-T_\mathrm{acqua}=(\rho_\mathrm{acqua}-\rho_\mathrm{aria})Vg.
$$
Per un corpo di $0{,}005\,\mathrm m^3$, con $g=10\,\mathrm{N/kg}$ e densità di acqua e aria pari a $1000$ e $1{,}2\,\mathrm{kg/m^3}$, la differenza vale
$$
(1000-1{,}2)\cdot0{,}005\cdot10\,\mathrm N=49{,}94\,\mathrm N.
$$
La spinta dell'acqua da sola vale $1000\cdot0{,}005\cdot10\,\mathrm N=50\,\mathrm N$. Lo scarto di $0{,}06\,\mathrm N$ fra i due valori è la spinta dell'aria, $1{,}2\cdot0{,}005\cdot10\,\mathrm N$.

La risoluzione di uno strumento è la più piccola differenza che lo strumento distingue. Uno strumento con risoluzione di $1\,\mathrm N$ non distingue lo scarto di $0{,}06\,\mathrm N$. In una misura che distingue i centesimi di newton, attribuire tutta la differenza alla spinta dell'acqua introduce invece uno scarto visibile.
:::

## Galleggiamento libero

:::teorema{#galleggiamento titolo="Spinta uguale al peso"}
Un corpo galleggia liberamente quando sta fermo nel liquido senza fili e senza appoggi. Un corpo che galleggia in quiete sotto la sola azione del peso, verso il basso, e della spinta, verso l'alto, soddisfa
$$
F_A=P.
$$
La spinta cresce con il volume immerso e raggiunge il valore massimo $\rho_f gV$ quando tutto il volume $V$ del corpo è immerso. Il confronto fra il peso e questa spinta massima distingue tre casi.

- Se il peso è minore della spinta corrispondente all'immersione completa, il corpo galleggia con una parte emersa. Il volume immerso è quello per cui la spinta è uguale al peso.
- Se il peso supera la spinta massima, nessun volume immerso equilibra il corpo, perché $V_i$ è al massimo $V$. Il corpo affonda.
- Se le due forze si eguagliano proprio a immersione completa, il corpo resta sospeso, fermo e tutto immerso, nel fluido ideale uniforme, cioè in un fluido che ha la stessa densità a ogni profondità.

Una barca che pesa $5000\,\mathrm N$ riceve $5000\,\mathrm N$ di spinta quando galleggia. In acqua dolce di densità $1000\,\mathrm{kg/m^3}$ il volume immerso è $\dfrac{5000}{1000\cdot10}\,\mathrm m^3=0{,}5\,\mathrm m^3$. In acqua più densa la stessa forza è prodotta da un volume spostato minore. Nell'acqua di mare, che ha densità di circa $1025\,\mathrm{kg/m^3}$, il volume immerso è $\dfrac{5000}{1025\cdot10}\,\mathrm m^3\approx0{,}49\,\mathrm m^3$. In questo confronto è fissato il peso, mentre il volume immerso si adatta.
:::

:::esempio{titolo="Tre blocchi dello stesso volume"}
Tre blocchi rigidi di volume $3\,\mathrm L$ vengono lasciati andare da fermi, completamente immersi in acqua, lontano dal fondo e senza corde. L'aria sopra la superficie è trascurabile. Ogni blocco sposta $3\,\mathrm L$ d'acqua, cioè $3\,\mathrm{kg}$. Con $g=10\,\mathrm{N/kg}$ la spinta iniziale è $30\,\mathrm N$ per tutti. Le differenze emergono confrontando i loro pesi $P=mg$ con quei $30\,\mathrm N$.

| Massa | Peso | Esito nel modello ideale |
| --- | --- | --- |
| $2{,}1\,\mathrm{kg}$ | $21\,\mathrm N$ | Sale e galleggia in superficie. |
| $3{,}0\,\mathrm{kg}$ | $30\,\mathrm N$ | Resta in equilibrio immerso. |
| $3{,}6\,\mathrm{kg}$ | $36\,\mathrm N$ | Scende. |

Per il primo blocco la spinta è inizialmente maggiore del peso, quindi il blocco sale. Quando arriva in superficie comincia a emergere ed esclude meno acqua, perciò la spinta diminuisce. La spinta vale esattamente $21\,\mathrm N$ quando l'immersione scende a $2{,}1\,\mathrm L$, e lì il blocco galleggia con $0{,}9\,\mathrm L$ fuori dall'acqua.

Il secondo blocco ha peso uguale alla spinta e non richiede un contatto per restare immerso.

Nel terzo caso la spinta massima è già stata raggiunta e mancano ancora $36\,\mathrm N-30\,\mathrm N=6\,\mathrm N$ verso l'alto per equilibrare il peso. Il blocco scende fino al fondo.

Nel grafico il tratto obliquo è la spinta fino a $3\,\mathrm L$ immersi. I punti A e B sono gli equilibri del primo e del secondo blocco.

::grafico{linee="0,0 3,30;0,21 3,21;0,30 3,30;0,36 3,36" punti="2.1,21,pieno,A;3,30,pieno,B" etichette="0.7,38,P = 36 N" xmin=0 xmax=3.3 ymin=0 ymax=41 nomi="volume immerso (L),forza (N)" titolo="Le rette orizzontali sono i tre pesi. I soli incroci col tratto crescente sono A e B."}
:::

:::osservazione{titolo="Piccoli spostamenti verticali dalla quota d'equilibrio"}
La sezione orizzontale di un corpo è la figura che si ottiene tagliandolo con un piano orizzontale. Un galleggiante a pareti verticali ha la stessa sezione, di area $A$, a ogni altezza.

Con il livello del liquido fisso, si abbassi di $\Delta h$ il galleggiante. Il galleggiante rimane parzialmente immerso. Il volume immerso aumenta di $A\,\Delta h$. Il peso resta costante, mentre la spinta aumenta di $\rho_f g A\Delta h$. Al rilascio la risultante iniziale è diretta verso l'alto perché prima dello spostamento le due forze si compensavano e ora la spinta è maggiore del peso. Un sollevamento riduce la spinta e dà una risultante verso il basso.

Per $A=0{,}04\,\mathrm m^2$ e un abbassamento di $2\,\mathrm{cm}=0{,}02\,\mathrm m$ in acqua, si spostano $0{,}04\,\mathrm m^2\cdot0{,}02\,\mathrm m=0{,}0008\,\mathrm m^3$ in più. La risultante al rilascio vale $1000\cdot10\cdot0{,}0008\,\mathrm N=8\,\mathrm N$ verso l'alto con $g=10\,\mathrm{N/kg}$.

Un equilibrio è **stabile** quando, dopo un piccolo spostamento, le forze riportano il corpo verso la posizione di partenza. In questo modello l'equilibrio è stabile rispetto a piccole variazioni verticali. La stabilità rispetto a rotazioni richiede invece di esaminare anche dove agiscono peso e spinta.
:::

## Frazione immersa

::::teorema{#frazione titolo="Rapporto tra densità"}
La **frazione immersa** è il rapporto $\dfrac{V_i}{V}$ fra il volume immerso e il volume totale del corpo. Una frazione immersa di $0{,}9$ significa che è sott'acqua il $90\%$ del volume e che ne emerge il $10\%$.

Per un corpo che galleggia liberamente in un liquido uniforme la frazione immersa è
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f},
$$
dove $\rho_c=\dfrac{m}{V}$ è la densità media del corpo, calcolata sul volume esterno che escluderebbe il liquido a immersione completa.

Un corpo è omogeneo quando è fatto di un solo materiale senza cavità, e allora la densità media è la densità del materiale. Per un corpo cavo il volume esterno comprende la cavità, quindi la densità media è minore di quella del materiale. Una scatola stagna di massa $2\,\mathrm{kg}$ e volume esterno $5\,\mathrm L$ ha densità media $\dfrac{2\,\mathrm{kg}}{5\,\mathrm L}=0{,}4\,\mathrm{kg/L}$, qualunque sia il materiale delle pareti.

Il rapporto $\dfrac{\rho_c}{\rho_f}$ si chiama densità relativa del corpo rispetto al liquido. Le due densità sono nella stessa unità, quindi la densità relativa è un numero senza unità di misura.

:::dimostrazione
L'equilibrio uguaglia la spinta $\rho_f gV_i$ al peso $mg=\rho_c Vg$, dove si è usato $m=\rho_cV$.
$$
\rho_f gV_i=\rho_c Vg
$$
Si divide per il prodotto positivo $\rho_f gV$. A sinistra si semplificano $\rho_f$ e $g$, a destra si semplificano $V$ e $g$.
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f}
$$
La frazione emersa è il complemento a uno della frazione immersa, cioè $1-\dfrac{V_i}{V}$.
:::
::::

:::esempio{titolo="Volume immerso e volume emerso"}
In acqua di densità $1000\,\mathrm{kg/m^3}$ un blocco di densità $600\,\mathrm{kg/m^3}$ ha frazione immersa $\dfrac{600}{1000}=0{,}6$, quindi immerge sei decimi del suo volume, cioè il $60\%$. Se ha volume totale $20\,\mathrm L$, ne immerge $0{,}6\cdot20\,\mathrm L=12\,\mathrm L$ e ne lascia emergere $20\,\mathrm L-12\,\mathrm L=8\,\mathrm L$.

Per un prisma verticale di sezione costante la stessa frazione vale per le altezze, perché il volume immerso è l'area della sezione per l'altezza immersa e il volume totale è la stessa area per l'altezza totale. Con sezioni variabili si usano direttamente i volumi.

Nel grafico la frazione immersa è riportata in funzione della densità relativa. Il punto A è il blocco di questo esempio. Il punto B è un corpo con la stessa densità del liquido, che è immerso per intero.
:::

::grafico{f="x" nomi="ρc / ρf,Vᵢ / V" punti="0.6,0.6,pieno,A;1,1,pieno,B" xmin=0 xmax=1 ymin=0 ymax=1.1 titolo="La frazione immersa cresce con la densità relativa. B è il limite dell'immersione completa"}

:::esempio{titolo="Sezione variabile e frazione immersa"}
Un galleggiante verticale è formato da due tratti sovrapposti. I $10\,\mathrm{cm}$ inferiori hanno area orizzontale $100\,\mathrm{cm^2}$ e i $10\,\mathrm{cm}$ superiori hanno area $200\,\mathrm{cm^2}$. Il volume di ogni tratto è l'area per l'altezza, cioè $100\,\mathrm{cm^2}\cdot10\,\mathrm{cm}=1000\,\mathrm{cm^3}$ per il primo e $2000\,\mathrm{cm^3}$ per il secondo. I due volumi sono quindi $1\,\mathrm L$ e $2\,\mathrm L$, e il volume totale è $3\,\mathrm L$. Se in acqua il galleggiante ha massa $2\,\mathrm{kg}$, per sostenersi sposta $2\,\mathrm{kg}$ d'acqua, cioè $2\,\mathrm L$.

Per arrivare a tale volume si immerge tutto il tratto inferiore, ottenendo il primo litro. Resta da immergere un litro del tratto superiore. Ogni centimetro in quel tratto vale $200\,\mathrm{cm^2}\cdot1\,\mathrm{cm}=200\,\mathrm{cm^3}=0{,}2\,\mathrm L$, quindi occorrono altri $\dfrac{1}{0{,}2}\,\mathrm{cm}=5\,\mathrm{cm}$.

L'altezza immersa è $10\,\mathrm{cm}+5\,\mathrm{cm}=15\,\mathrm{cm}$ su $20\,\mathrm{cm}$, cioè tre quarti. Il volume immerso è invece $2\,\mathrm L$ su $3\,\mathrm L$, cioè due terzi del totale.

Nel grafico il punto A è la posizione di galleggiamento e il cambio di sezione corrisponde al punto in cui la pendenza raddoppia, da $0{,}1\,\mathrm L$ a $0{,}2\,\mathrm L$ per centimetro.

::grafico{linee="0,0 10,1 20,3" punti="10,1,pieno;15,2,pieno,A;20,3,pieno" xmin=0 xmax=22 ymin=0 ymax=3.6 nomi="altezza immersa (cm),volume immerso (L)" titolo="Ogni centimetro immerso vale 0,1 L nel tratto inferiore e 0,2 L in quello superiore."}
:::

## Carichi sui galleggianti

:::teorema{#carichi titolo="Massa totale e volume disponibile"}
Un galleggiante con sopra un carico galleggia come un corpo solo, il cui peso è la somma dei due pesi. Si consideri un galleggiante rigido di massa $m_0$ con un carico di massa $m_c$ tenuto fuori dall'acqua. La spinta $\rho_f gV_i$ è uguale al peso totale $(m_0+m_c)g$. Dividendo entrambi i membri per $g$, l'equilibrio dà
$$
\rho_f V_i=m_0+m_c.
$$
In acqua, con $\rho_f=1\,\mathrm{kg/L}$, i litri spostati sono tanti quanti i chilogrammi totali.

L'ulteriore volume necessario per un aumento di massa $\Delta m$ è $\Delta V_i=\dfrac{\Delta m}{\rho_f}$. In acqua, $3\,\mathrm{kg}$ di carico in più fanno immergere altri $3\,\mathrm L$.

La **portata** è la massa massima del carico. Se il massimo volume spostabile è $V_{\max}$, la portata limite vale $\rho_f V_{\max}-m_0$.

Con $V_{\max}=80\,\mathrm L$ in acqua di densità $1\,\mathrm{kg/L}$ e massa del galleggiante $24\,\mathrm{kg}$, la portata limite è $1\cdot80\,\mathrm{kg}-24\,\mathrm{kg}=56\,\mathrm{kg}$. Il volume che resta fuori dall'acqua si chiama riserva emersa. Se si richiede che restino fuori $10\,\mathrm L$ di volume, il massimo volume immerso diventa $80\,\mathrm L-10\,\mathrm L=70\,\mathrm L$ e la portata scende a $70\,\mathrm{kg}-24\,\mathrm{kg}=46\,\mathrm{kg}$.
:::

:::esempio{titolo="Peso del carico e sua stessa spinta"}
Una piattaforma impermeabile di volume esterno $24\,\mathrm L$ ha massa $12\,\mathrm{kg}$ e porta un carico di $8\,\mathrm{kg}$. La massa totale è $12\,\mathrm{kg}+8\,\mathrm{kg}=20\,\mathrm{kg}$. In acqua, dove ogni litro spostato sostiene un chilogrammo, il sistema sposta $20\,\mathrm L$ in totale.

Se il carico è tenuto asciutto, tutti i $20\,\mathrm L$ appartengono alla piattaforma e ne emergono $24\,\mathrm L-20\,\mathrm L=4\,\mathrm L$. Per rispettare una riserva emersa di $5\,\mathrm L$, la piattaforma immerge al massimo $24\,\mathrm L-5\,\mathrm L=19\,\mathrm L$ e sostiene $19\,\mathrm{kg}$ in tutto. Il carico scende quindi a $19\,\mathrm{kg}-12\,\mathrm{kg}=7\,\mathrm{kg}$.

Nel primo grafico la retta dà la riserva emersa per ogni carico asciutto, che in litri vale $12$ meno i chilogrammi del carico. Il punto A è il carico di $7\,\mathrm{kg}$ e il punto B quello di $8\,\mathrm{kg}$.

Se il carico originario di $8\,\mathrm{kg}$ viene invece appeso sotto la piattaforma e, completamente immerso, esclude $1\,\mathrm L$ d'acqua, il sistema ha ancora la stessa massa totale e sposta ancora $20\,\mathrm L$. Un litro è fornito dal carico. La piattaforma ne sposta allora $20\,\mathrm L-1\,\mathrm L=19\,\mathrm L$ e ne lascia emergere $24\,\mathrm L-19\,\mathrm L=5\,\mathrm L$.

Il peso del carico è lo stesso nei due casi. È diversa la parte della spinta complessiva che il carico riceve direttamente. Nella seconda figura il carico è sopra la piattaforma a sinistra e appeso sotto a destra.

::grafico{linee="0,12 12,0" punti="7,5,pieno,A;8,4,pieno,B" xmin=0 xmax=15.5 ymin=0 ymax=13.5 nomi="carico asciutto (kg),riserva emersa (L)" titolo="Con carico asciutto A soddisfa la riserva di 5 L. Al carico di B resta un litro in meno."}

::grafico{assi=0 linee="-0.4,0 7,0;5.4,-1.3 5.4,-2" poligoni="0,-1.4 2.25,-1.4 2.25,0.5 0,0.5;1,0.5 1.8,0.5 1.8,1.1 1,1.1;4.3,-1.3 6.55,-1.3 6.55,0.6 4.3,0.6;5,-2.48 5.8,-2.48 5.8,-2 5,-2" etichette="1.13,0.25,4 L;5.42,0.3,5 L" xmin=-0.65 xmax=7.2 ymin=-2.85 ymax=1.45 titolo="A sinistra tutto il volume spostato appartiene alla piattaforma. A destra il carico contribuisce con 1 L."}
:::

## Corpi vincolati

:::osservazione{#vincoli titolo="La corda può tirare verso l'alto o verso il basso"}
Un vincolo è un oggetto che impedisce a un corpo di muoversi liberamente, come una corda, un filo o il fondo del recipiente. Una corda tesa tira il corpo verso il punto in cui è ancorata.

- Per un corpo che tenderebbe ad affondare, cioè con $P>F_A$, una corda ancorata sopra aggiunge una tensione verso l'alto. Le forze verso l'alto equilibrano il peso, quindi $T+F_A=P$ e $T=P-F_A$.
- Se tende a salire quando è completamente immerso, cioè se $F_A>P$, una corda ancorata sotto, per esempio al fondo, aggiunge una tensione verso il basso. La spinta equilibra le due forze verso il basso, quindi $F_A=P+T$ e $T=F_A-P$.

Si scrive il bilancio nel verso effettivo del vincolo. Con $F_A=28\,\mathrm N$ e $P=19\,\mathrm N$ la spinta supera il peso, quindi occorre una tensione verso il basso di $28\,\mathrm N-19\,\mathrm N=9\,\mathrm N$. Una corda dall'alto non potrebbe applicare quella forza, perché tira soltanto verso l'alto.
:::

:::esempio{titolo="Osservare la risultante prima di scegliere il vincolo"}
Un blocco completamente immerso riceve una spinta di $32\,\mathrm N$ e pesa $22\,\mathrm N$. Si prenda positivo verso l'alto, cioè si scrivano con il segno più le forze verso l'alto e con il segno meno quelle verso il basso. Prima di fissare il blocco, i due contributi entrano nella risultante con segno opposto e danno
$$
+32\,\mathrm N-22\,\mathrm N=+10\,\mathrm N.
$$
La risultante è positiva, quindi il blocco libero salirebbe. Il vincolo deve dare una forza di $-10\,\mathrm N$, cioè $10\,\mathrm N$ verso il basso, perché la somma torni a zero.

Un filo fissato al fondo fornisce esattamente il verso richiesto, con tensione $T=10\,\mathrm N$. Nella figura il blocco è tenuto da questo filo.

Se il blocco fosse tenuto da un sistema di due fili, uno sopra e uno sotto, le equazioni indicherebbero soltanto che quello inferiore deve tirare con $10\,\mathrm N$ in più. Per ricavare le singole tensioni servirebbe un dato ulteriore, per esempio la lettura di un dinamometro su uno dei fili.

::grafico{assi=0 uguale=1 linee="-2,-2.8 4,-2.8;2,-2.8 2,0" poligoni="-0.7,-0.45 2.4,-0.45 2.4,0.45 -0.7,0.45" vettori="0,0,0,3.2,F_A;0.8,0,0.8,-2.2,P;2,0,2,-1,T" xmin=-2.2 xmax=4.3 ymin=-3 ymax=3.7 titolo="La spinta vale 32 N verso l'alto. Peso e tensione inferiore valgono 22 N e 10 N verso il basso."}
:::

## Confronti fra situazioni

:::osservazione{#confronti titolo="Quali fattori cambiano"}
La spinta $F_A=\rho_f gV_i$ dipende soltanto dalla densità del fluido, da $g$ e dal volume immerso.

Su un corpo rigido interamente immerso in un liquido uniforme, lontano dalle pareti e dal fondo, due profondità diverse danno lo stesso $V_i$ e quindi la stessa spinta. Un corpo di $5\,\mathrm L$ tutto immerso in acqua riceve $50\,\mathrm N$ sia a $1\,\mathrm m$ sia a $3\,\mathrm m$ di profondità. La pressione assoluta, cioè la pressione complessiva che comprende quella dell'aria, è maggiore a $3\,\mathrm m$. Le pressioni assolute cambiano senza che cambi la loro differenza fra le parti alte e basse del corpo. Se la densità del fluido o il volume immerso cambiano con la profondità, come per un corpo che si comprime, cambia anche la spinta.

A parità di volume immerso e fluido, due corpi di massa diversa ricevono uguale spinta. Vale lo stesso per due corpi di forma diversa. Due corpi di $8\,\mathrm L$ tutti immersi in acqua ricevono entrambi $80\,\mathrm N$, qualunque siano la loro massa e la loro forma.

A parità di peso nel galleggiamento libero, due fluidi di densità diversa danno uguale spinta con volumi immersi differenti.

Prima di confrontare le spinte si stabilisce quale grandezza viene mantenuta fissa dall'esperimento. Nei primi due confronti è fisso il volume immerso, nel terzo è fisso il peso.
:::

:::esempio{titolo="Passaggio fra due liquidi in quiete"}
Un corpo impermeabile è interamente immerso a cavallo della separazione fra olio di densità $0{,}8\,\mathrm{kg/L}$ e acqua di densità $1\,\mathrm{kg/L}$. Il suo volume esterno è $5\,\mathrm L$. Se esclude $2\,\mathrm L$ d'acqua, ne esclude $5\,\mathrm L-2\,\mathrm L=3\,\mathrm L$ d'olio.

La tensione superficiale è una forza che agisce lungo la superficie di separazione fra due fluidi, e qui è molto più piccola della spinta. Trascurando la tensione superficiale, il peso del liquido sostituito è la somma dei pesi delle due porzioni. Con $g=10\,\mathrm{N/kg}$ vale
$$
F_A=(2\cdot1+3\cdot0{,}8)\cdot10\,\mathrm N=44\,\mathrm N.
$$
Un litro che passa dall'olio all'acqua sposta $10\,\mathrm N$ d'acqua al posto di $8\,\mathrm N$ d'olio, quindi aumenta la spinta di $2\,\mathrm N$. La spinta totale varia quindi mentre si sposta verticalmente il corpo attraverso la separazione, anche a volume immerso totale costante. Nel grafico la spinta va da $40\,\mathrm N$, con il corpo tutto in olio, a $50\,\mathrm N$, con il corpo tutto in acqua, e il punto A è la posizione dell'esempio.

Se si usa una sola densità, deve essere la media pesata con i volumi occupati nei due liquidi.
$$
\rho_\mathrm{media}=\frac{2\cdot1+3\cdot0{,}8}{5}\,\mathrm{kg/L}=0{,}88\,\mathrm{kg/L}.
$$

::grafico{linee="0,40 5,50" punti="0,40,pieno;2,44,pieno,A;5,50,pieno" xmin=0 xmax=5.5 ymin=36 ymax=53 nomi="volume in acqua (L),spinta (N)" titolo="Il corpo esclude sempre 5 L. Sostituire un litro d'olio con un litro d'acqua aumenta la spinta."}
:::
