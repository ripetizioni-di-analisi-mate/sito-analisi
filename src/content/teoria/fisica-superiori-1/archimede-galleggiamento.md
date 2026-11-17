---
titolo: "Spinta di Archimede e galleggiamento"
sommario: "Volume immerso, peso apparente, densità, carichi sostenibili e corpi vincolati."
---

## Il principio di Archimede

::::teorema{#archimede titolo="Peso del fluido spostato"}
Un corpo immerso in un fluido in quiete, esposto alla pressione del fluido sulla parte di superficie immersa, riceve una risultante verso l'alto detta **spinta di Archimede**. Il suo modulo è il peso del fluido che occuperebbe il volume sostituito dalla parte immersa. Per densità del fluido $\rho_f$ e campo gravitazionale $g$ uniformi,
$$
F_A=\rho_f gV_i,
$$
dove $V_i$ è il volume immerso che esclude il fluido. Si trascura la spinta dell'aria sulla parte emersa quando è piccola rispetto a quella del liquido.

:::dimostrazione
Si consideri il volume di fluido presente prima che si inserisca il corpo. Quel fluido è fermo, quindi le forze di pressione sulla sua superficie ne equilibrano il peso. Se il volume arriva alla superficie libera, si usa la pressione relativa a quella atmosferica. La pressione relativa sulla superficie libera vale zero. Lo si sostituisce idealmente con un corpo di uguale forma immersa. Poiché le pressioni sulla superficie bagnata sono le stesse, la risultante di pressione resta quella che sosteneva il fluido sostituito. Questo mostra perché nel calcolo entra la densità del fluido.
:::
::::

:::esempio{titolo="La differenza di pressione su un prisma"}
Un prisma verticale interamente in acqua di densità $1000\,\mathrm{kg/m^3}$ ha area orizzontale $A=0{,}02\,\mathrm m^2$ e altezza $h=0{,}3\,\mathrm m$. Con $g=10\,\mathrm{N/kg}$ la base inferiore ha pressione superiore a quella della faccia alta di $3000\,\mathrm{Pa}$. Le forze laterali sono orizzontali e si compensano. Il risultato verticale è
$$
F_A=(3000\,\mathrm{Pa})(0{,}02\,\mathrm m^2)=60\,\mathrm N.
$$
Il volume $Ah$ è $0{,}006\,\mathrm m^3$, cioè $6\,\mathrm L$. Il peso di sei litri d'acqua è infatti sessanta newton.
:::

::grafico{assi=0 uguale=1 linee="-2,2 4,2" poligoni="0,0 2,0 2,1.5 0,1.5" vettori="1,1.9,1,1.5,;1,-1.35,1,0,p₂ A" etichette="2.8,0.75,h;1.25,1.7,p₁ A" xmin=-3 xmax=5 ymin=-2 ymax=3 titolo="Prisma immerso. La forza sulla faccia inferiore è maggiore. Le frecce rappresentano solo le componenti verticali"}

:::esempio{titolo="Traslare un prisma senza ruotarlo"}
Nel caso del prisma, le due facce orizzontali possono trovarsi a profondità di $0{,}15\,\mathrm m$ e $0{,}45\,\mathrm m$. Rispetto alla pressione superficiale, gli aumenti sono rispettivamente $1500\,\mathrm{Pa}$ e $4500\,\mathrm{Pa}$. Abbassare il prisma di $0{,}20\,\mathrm m$ aggiunge $2000\,\mathrm{Pa}$ a entrambe le letture.
$$
\begin{aligned}
\Delta p_1&=4500\,\mathrm{Pa}-1500\,\mathrm{Pa}=3000\,\mathrm{Pa},\\
\Delta p_2&=6500\,\mathrm{Pa}-3500\,\mathrm{Pa}=3000\,\mathrm{Pa}.
\end{aligned}
$$
La pressione cresce con la stessa pendenza in tutto il liquido. Perciò, finché l'oggetto rimane interamente bagnato, alta e bassa pressione aumentano della stessa quantità e la risultante verticale sui due lati conserva il suo modulo. Questo ragionamento dipende dalla densità uniforme e dalla rigidità del prisma. Su un corpo che si comprime, la distanza tra le facce e il volume immerso possono cambiare.

::grafico{f="10*x" punti="0.15,1.5,pieno,A;0.45,4.5,pieno,B;0.35,3.5,pieno,C;0.65,6.5,pieno,D" xmin=0 xmax=0.78 ymin=0 ymax=8 nomi="profondità (m),p_rel (kPa)" titolo="Prima dell'abbassamento le facce sono in A e B. Dopo l'abbassamento sono in C e D. Il salto di pressione è sempre di 3 kPa."}
:::

## Volume immerso e problemi inversi

:::osservazione{#inverse titolo="Identificare il volume che sposta fluido"}
Per un corpo rigido, impermeabile e interamente sommerso, la parte immersa occupa il volume esterno $V$. Un corpo parzialmente immerso dà $V_i<V$. Per una scatola cava e stagna si considera il volume esterno immerso. Se un'apertura consente all'acqua di riempire parte della cavità, il liquido che entra non è più escluso da quel volume.

Con una spinta di $72\,\mathrm N$ in un olio di densità $800\,\mathrm{kg/m^3}$ e $g=10\,\mathrm{N/kg}$, il volume spostato è $\dfrac{72}{800\cdot10}\,\mathrm m^3=0{,}009\,\mathrm m^3$. Sono $9\,\mathrm L$, perché $1\,\mathrm L=10^{-3}\,\mathrm m^3$. Se il corpo emerge in parte, dal solo dato della spinta non si ricava il volume totale.

In una prova con recipiente a trabocco, il volume raccolto coincide con il volume spostato se il liquido arriva già al foro di scarico prima dell'immersione. Se il livello iniziale è più basso, parte del volume spostato serve a colmare lo spazio fino al foro. Per risalire al volume immerso si sommano il volume necessario a raggiungere il foro e l'acqua raccolta.
:::

:::esempio{titolo="Cavità stagna e cavità allagata"}
Due involucri dello stesso tipo hanno volume esterno $5\,\mathrm L$ e cavità di $3\,\mathrm L$. Si immergono completamente in acqua, con $\rho_f=1\,\mathrm{kg/L}$ e $g=10\,\mathrm{N/kg}$. L'involucro stagno esclude tutti i $5\,\mathrm L$. Il secondo ha aperture e, a equilibrio raggiunto, la cavità è piena d'acqua collegata all'esterno. La spinta sull'involucro è allora quella per i $2\,\mathrm L$ occupati dal guscio. Le due spinte sono rispettivamente $50\,\mathrm N$ e $20\,\mathrm N$.

Il risultato per l'involucro aperto presuppone che l'acqua interna rimanga parte del liquido circostante. Se si isola un sistema che include involucro e acqua interna, cambia il contorno su cui si calcolano le forze e al peso del sistema si aggiunge quello dell'acqua interna. Si può ancora usare un bilancio coerente, purché peso e superficie di contatto siano riferiti allo stesso sistema.

::grafico{assi=0 uguale=1 linee="-0.5,3 7.5,3;0,0 3,0 3,2 0,2 0,0;5.32,2 4,2 4,0 7,0 7,2 5.68,2;5.32,2 5.32,1.58 4.4,1.58 4.4,0.42 6.6,0.42 6.6,1.58 5.68,1.58 5.68,2" poligoni="0.4,0.42 2.6,0.42 2.6,1.58 0.4,1.58" etichette="1.5,1,aria;5.5,1,acqua;5.5,2.35,apertura" xmin=-0.65 xmax=7.63 ymin=-0.55 ymax=3.3 titolo="Le cavità hanno lo stesso volume. La cavità aperta comunica con il liquido esterno."}
:::

## Peso apparente

:::teorema{#apparente titolo="La tensione del dinamometro"}
Un corpo sospeso a un dinamometro dall'alto, fermo e immerso senza altri contatti, soddisfa $T+F_A=P$. La lettura è $T=P-F_A$, purché il filo rimanga teso. Si chiama **peso apparente** la lettura nelle condizioni descritte. Il peso gravitazionale non cambia perché la massa e il campo sono gli stessi.

Se un solido pesa $90\,\mathrm N$ trascurando la spinta dell'aria e il dinamometro indica $60\,\mathrm N$ in acqua a immersione completa, la spinta è $30\,\mathrm N$. Il peso del solido e la perdita apparente sono rispettivamente $\rho_c Vg$ e $\rho_f Vg$. Dividendo si ottiene $\dfrac{\rho_c}{\rho_f}=\dfrac{P}{P-T}=3$. Lo stesso volume si semplifica perché l'immersione è completa.
:::

:::osservazione{#reazione-bilancia titolo="La forza trasmessa al recipiente"}
Un recipiente d'acqua poggia su una bilancia. Un corpo tenuto fermo da un sostegno indipendente viene immerso senza toccare il recipiente e senza far uscire acqua. L'acqua spinge il corpo verso l'alto. Per il principio di azione e reazione, il corpo esercita sull'acqua una forza di uguale modulo diretta verso il basso. La bilancia registra quindi una forza maggiore di $F_A$ rispetto alla lettura con il corpo fuori dal liquido.

Quando la bilancia indica una massa, l'aumento della lettura è $\Delta m=\dfrac{F_A}{g}$. Il peso del recipiente e dell'acqua è rimasto lo stesso. La parte del peso del corpo non equilibrata dalla spinta resta a carico del sostegno esterno.
:::

:::esempio{titolo="Lettura di un dinamometro fino all'allentamento"}
Un corpo pesa $45\,\mathrm N$ e ha volume esterno $5\,\mathrm L$. Viene immerso via via in acqua, con $\rho_f=1\,\mathrm{kg/L}$ e $g=10\,\mathrm{N/kg}$. La lettura del dinamometro diminuisce di $10\,\mathrm N$ per ogni litro in più che entra in acqua. Giunge a zero quando la spinta raggiunge i $45\,\mathrm N$, cioè quando $V_i=4{,}5\,\mathrm L$.

Se si applicasse la stessa formula a $5\,\mathrm L$, si otterrebbero $-5\,\mathrm N$. Il segno dice che a completa immersione servirebbe una forza di $5\,\mathrm N$ verso il basso per mantenere l'equilibrio. Un dinamometro sospeso sopra il corpo può tirare solo verso l'alto e si allenta. Da quel punto, per imporre immersioni maggiori occorre un vincolo diverso.

::grafico{linee="0,45 4.5,0" punti="0,45,pieno,A;4.5,0,pieno,B" xmin=0 xmax=6 ymin=0 ymax=52 nomi="Vᵢ (L),tensione (N)" titolo="Il tratto termina a 4,5 L, dove il filo si allenta. A immersioni maggiori non può mantenere l’equilibrio."}
:::

:::osservazione{titolo="Quando conta anche la spinta dell'aria"}
La pesata in aria di un corpo statico dà $T_\mathrm{aria}=P-\rho_\mathrm{aria} Vg$. In acqua, a immersione completa e senza contatti, si ha invece $T_\mathrm{acqua}=P-\rho_\mathrm{acqua}Vg$. La differenza tra le letture è dunque
$$
T_\mathrm{aria}-T_\mathrm{acqua}=(\rho_\mathrm{acqua}-\rho_\mathrm{aria})Vg.
$$
Per un corpo di $0{,}005\,\mathrm m^3$, con $g=10\,\mathrm{N/kg}$ e densità di acqua e aria pari a $1000$ e $1{,}2\,\mathrm{kg/m^3}$, la differenza vale $49{,}94\,\mathrm N$. La spinta dell'acqua da sola vale $50\,\mathrm N$. Uno strumento con risoluzione di $1\,\mathrm N$ non distingue lo scarto di $0{,}06\,\mathrm N$. In una misura che distingue i centesimi di newton, attribuire tutta la differenza alla spinta dell'acqua introduce invece uno scarto visibile.
:::

## Galleggiamento libero

:::teorema{#galleggiamento titolo="Spinta uguale al peso"}
Un corpo che galleggia in quiete sotto la sola azione di peso e spinta soddisfa $F_A=P$. Perché esista una configurazione con volume emerso, il peso deve essere minore della spinta corrispondente all'immersione completa. Se il peso la supera, non si trova un volume immerso ammissibile che equilibri il corpo. Se le due forze si eguagliano proprio a immersione completa, il corpo può restare sospeso nel fluido ideale uniforme.

Una barca che pesa $5000\,\mathrm N$ riceve $5000\,\mathrm N$ di spinta quando galleggia. In acqua più densa la stessa forza è prodotta da un volume spostato minore. In questo confronto è fissato il peso, mentre il volume immerso si adatta.
:::

:::esempio{titolo="Tre blocchi dello stesso volume"}
Tre blocchi rigidi di volume $3\,\mathrm L$ vengono lasciati andare da fermi, completamente immersi in acqua, lontano dal fondo e senza corde. L'aria sopra la superficie è trascurabile. Con $g=10\,\mathrm{N/kg}$ la spinta iniziale è $30\,\mathrm N$ per tutti. Le differenze emergono confrontando i loro pesi con quei $30\,\mathrm N$.

| Massa | Peso | Esito nel modello ideale |
| --- | --- | --- |
| $2{,}1\,\mathrm{kg}$ | $21\,\mathrm N$ | Sale e può galleggiare in superficie. |
| $3{,}0\,\mathrm{kg}$ | $30\,\mathrm N$ | Resta in equilibrio immerso. |
| $3{,}6\,\mathrm{kg}$ | $36\,\mathrm N$ | Scende. |

Per il primo blocco la spinta è inizialmente maggiore del peso. Quando arriva in superficie, può escludere meno acqua. La spinta vale esattamente $21\,\mathrm N$ quando l'immersione scende a $2{,}1\,\mathrm L$. Il secondo blocco non richiede un contatto per restare immerso. Nel terzo caso la spinta massima è già stata raggiunta e mancano ancora $6\,\mathrm N$ verso l'alto per equilibrare il peso.

::grafico{linee="0,0 3,30;0,21 3,21;0,30 3,30;0,36 3,36" punti="2.1,21,pieno,A;3,30,pieno,B" etichette="0.7,38,P = 36 N" xmin=0 xmax=3.3 ymin=0 ymax=41 nomi="volume immerso (L),forza (N)" titolo="Le rette orizzontali sono i tre pesi. I soli incroci col tratto crescente sono A e B."}
:::

:::osservazione{titolo="Piccoli spostamenti verticali dalla quota d'equilibrio"}
A livello libero fissato si abbassi di $\Delta h$ un galleggiante a pareti verticali di sezione orizzontale $A$. Il galleggiante rimane parzialmente immerso. Il peso resta costante, mentre la spinta aumenta di $\rho_f g A\Delta h$. Al rilascio la risultante iniziale è diretta verso l'alto perché prima dello spostamento le due forze si compensavano. Un sollevamento riduce la spinta e dà una risultante verso il basso.

Per $A=0{,}04\,\mathrm m^2$ e un abbassamento di $2\,\mathrm{cm}$ in acqua, si spostano $0{,}0008\,\mathrm m^3$ in più e la risultante al rilascio vale $8\,\mathrm N$ verso l'alto con $g=10\,\mathrm{N/kg}$. In questo modello l'equilibrio è stabile rispetto a piccole variazioni verticali. La stabilità rispetto a rotazioni richiede invece di esaminare anche dove agiscono peso e spinta.
:::

## Frazione immersa

::::teorema{#frazione titolo="Rapporto tra densità"}
Per un corpo che galleggia liberamente in un liquido uniforme la frazione immersa è
$$
\frac{V_i}{V}=\frac{\rho_c}{\rho_f},
$$
dove $\rho_c=\dfrac{m}{V}$ è la densità media del corpo, calcolata sul volume esterno che escluderebbe il liquido a immersione completa.

:::dimostrazione
L'equilibrio uguaglia la spinta $\rho_f gV_i$ al peso $mg=\rho_c Vg$. Si divide per il prodotto positivo $\rho_f gV$. La frazione emersa è il complemento a uno della frazione immersa.
:::
::::

:::esempio{titolo="Volume immerso e volume emerso"}
In acqua di densità $1000\,\mathrm{kg/m^3}$ un blocco di densità $600\,\mathrm{kg/m^3}$ immerge sei decimi del suo volume. Se ha volume totale $20\,\mathrm L$, ne immerge $12\,\mathrm L$ e ne lascia emergere $8\,\mathrm L$. Per un prisma verticale di sezione costante la stessa frazione vale per le altezze. Con sezioni variabili si usano direttamente i volumi.
:::

::grafico{f="x" nomi="ρc / ρf,Vᵢ / V" punti="0.6,0.6,pieno,A;1,1,pieno,B" xmin=0 xmax=1 ymin=0 ymax=1.1 titolo="La frazione immersa cresce con la densità relativa. B è il limite dell'immersione completa"}

:::esempio{titolo="Sezione variabile e frazione immersa"}
Un galleggiante verticale è formato da due tratti sovrapposti. I $10\,\mathrm{cm}$ inferiori hanno area orizzontale $100\,\mathrm{cm^2}$ e i $10\,\mathrm{cm}$ superiori hanno area $200\,\mathrm{cm^2}$. I due volumi sono quindi $1\,\mathrm L$ e $2\,\mathrm L$. Se in acqua il galleggiante ha massa $2\,\mathrm{kg}$, per sostenersi sposta $2\,\mathrm L$.

Per arrivare a tale volume si immerge tutto il tratto inferiore, ottenendo il primo litro. Resta da immergere un litro del tratto superiore. Ogni centimetro in quel tratto vale $200\,\mathrm{cm^3}=0{,}2\,\mathrm L$, quindi occorrono altri $5\,\mathrm{cm}$. L'altezza immersa è $15\,\mathrm{cm}$ su $20\,\mathrm{cm}$, cioè tre quarti. Il volume immerso è invece due terzi del totale. Sul grafico il cambio di sezione corrisponde al punto in cui la pendenza raddoppia.

::grafico{linee="0,0 10,1 20,3" punti="10,1,pieno;15,2,pieno,A;20,3,pieno" xmin=0 xmax=22 ymin=0 ymax=3.6 nomi="altezza immersa (cm),volume immerso (L)" titolo="Ogni centimetro immerso vale 0,1 L nel tratto inferiore e 0,2 L in quello superiore."}
:::

## Carichi sui galleggianti

:::teorema{#carichi titolo="Massa totale e volume disponibile"}
Per un galleggiante rigido di massa $m_0$ con un carico di massa $m_c$ tenuto fuori dall'acqua, l'equilibrio dà $\rho_f V_i=m_0+m_c$. L'ulteriore volume necessario per un aumento di massa $\Delta m$ è $\Delta V_i=\dfrac{\Delta m}{\rho_f}$. Se il massimo volume spostabile è $V_{\max}$, la portata limite nel modello vale $\rho_f V_{\max}-m_0$.

Con $V_{\max}=80\,\mathrm L$ in acqua di densità $1\,\mathrm{kg/L}$ e massa del galleggiante $24\,\mathrm{kg}$, la capacità limite è $56\,\mathrm{kg}$. Se si richiede che restino fuori $10\,\mathrm L$ di volume, il massimo volume immerso diventa $70\,\mathrm L$ e la portata scende a $46\,\mathrm{kg}$.
:::

:::esempio{titolo="Peso del carico e sua stessa spinta"}
Una piattaforma impermeabile di volume esterno $24\,\mathrm L$ ha massa $12\,\mathrm{kg}$ e porta un carico di $8\,\mathrm{kg}$. In acqua il sistema sposta $20\,\mathrm L$ in totale. Se il carico è tenuto asciutto, tutti i $20\,\mathrm L$ appartengono alla piattaforma e ne emergono $4\,\mathrm L$. Per rispettare una riserva emersa di $5\,\mathrm L$, il carico deve scendere a $7\,\mathrm{kg}$.

Se il carico originario di $8\,\mathrm{kg}$ viene invece appeso alla piattaforma e, completamente immerso, esclude $1\,\mathrm L$ d'acqua, il sistema ha ancora la stessa massa totale. Un litro è fornito dal carico. La piattaforma ne sposta allora $19\,\mathrm L$ e ne lascia emergere $5\,\mathrm L$. Il peso del carico è lo stesso. È diversa la parte della spinta complessiva che il carico riceve direttamente.

::grafico{linee="0,12 12,0" punti="7,5,pieno,A;8,4,pieno,B" xmin=0 xmax=15.5 ymin=0 ymax=13.5 nomi="carico asciutto (kg),riserva emersa (L)" titolo="Con carico asciutto A soddisfa la riserva di 5 L. Al carico di B resta un litro in meno."}

::grafico{assi=0 linee="-0.4,0 7,0;5.4,-1.3 5.4,-2" poligoni="0,-1.4 2.25,-1.4 2.25,0.5 0,0.5;1,0.5 1.8,0.5 1.8,1.1 1,1.1;4.3,-1.3 6.55,-1.3 6.55,0.6 4.3,0.6;5,-2.48 5.8,-2.48 5.8,-2 5,-2" etichette="1.13,0.25,4 L;5.42,0.3,5 L" xmin=-0.65 xmax=7.2 ymin=-2.85 ymax=1.45 titolo="A sinistra tutto il volume spostato appartiene alla piattaforma. A destra il carico contribuisce con 1 L."}
:::

## Corpi vincolati

:::osservazione{#vincoli titolo="La corda può tirare verso l'alto o verso il basso"}
Per un corpo che tenderebbe ad affondare, una corda ancorata sopra aggiunge una tensione verso l'alto. Se tende a salire quando è completamente immerso, una corda ancorata sotto può aggiungere una tensione verso il basso. Si scrive il bilancio nel verso effettivo del vincolo. Con $F_A=28\,\mathrm N$ e $P=19\,\mathrm N$ occorre una tensione verso il basso di $9\,\mathrm N$. Una corda dall'alto non potrebbe applicare quella forza.
:::

:::esempio{titolo="Osservare la risultante prima di scegliere il vincolo"}
Un blocco completamente immerso riceve una spinta di $32\,\mathrm N$ e pesa $22\,\mathrm N$. Si prenda positivo verso l'alto. Prima di fissare il blocco, i due contributi incidono sulla risultante con segno opposto e danno $+10\,\mathrm N$. Il vincolo deve dare una forza di $-10\,\mathrm N$, perché la somma torni a zero.

Un filo fissato al fondo fornisce esattamente il verso richiesto. Se il blocco fosse tenuto da un sistema di due fili, uno sopra e uno sotto, le equazioni indicherebbero soltanto che quello inferiore deve tirare con $10\,\mathrm N$ in più. Per ricavare le singole tensioni servirebbe un dato ulteriore, per esempio la lettura di un dinamometro su uno dei fili.

::grafico{assi=0 uguale=1 linee="-2,-2.8 4,-2.8;2,-2.8 2,0" poligoni="-0.7,-0.45 2.4,-0.45 2.4,0.45 -0.7,0.45" vettori="0,0,0,3.2,F_A;0.8,0,0.8,-2.2,P;2,0,2,-1,T" xmin=-2.2 xmax=4.3 ymin=-3 ymax=3.7 titolo="La spinta vale 32 N verso l'alto. Peso e tensione inferiore valgono 22 N e 10 N verso il basso."}
:::

## Confronti fra situazioni

:::osservazione{#confronti titolo="Quali fattori cambiano"}
Su un corpo rigido interamente immerso in un liquido uniforme, lontano dalle pareti e dal fondo, due profondità diverse danno lo stesso $V_i$ e quindi la stessa spinta. Le pressioni assolute possono cambiare senza che cambi la loro differenza fra le parti alte e basse del corpo. Se la densità del fluido o il volume immerso cambiano, la conclusione va riesaminata.

A parità di volume immerso e fluido, due corpi di massa diversa ricevono uguale spinta. A parità di peso nel galleggiamento libero, due fluidi di densità diversa danno uguale spinta con volumi immersi differenti. Prima di confrontare le spinte si stabilisce quale grandezza viene mantenuta fissa dall'esperimento.
:::

:::esempio{titolo="Passaggio fra due liquidi in quiete"}
Un corpo impermeabile è interamente immerso a cavallo della separazione fra olio di densità $0{,}8\,\mathrm{kg/L}$ e acqua di densità $1\,\mathrm{kg/L}$. Il suo volume esterno è $5\,\mathrm L$. Se esclude $2\,\mathrm L$ d'acqua, ne esclude $3\,\mathrm L$ d'olio. Trascurando la tensione superficiale, il peso del liquido sostituito è la somma dei pesi delle due porzioni. Con $g=10\,\mathrm{N/kg}$ vale
$$
F_A=(2\cdot1+3\cdot0{,}8)\cdot10\,\mathrm N=44\,\mathrm N.
$$
Un litro che passa dall'olio all'acqua aumenta la spinta di $2\,\mathrm N$. La spinta totale può quindi variare mentre si sposta verticalmente il corpo attraverso la separazione, anche a volume immerso totale costante. Se si usa una sola densità, deve essere la media pesata con i volumi occupati nei due liquidi.

::grafico{linee="0,40 5,50" punti="0,40,pieno;2,44,pieno,A;5,50,pieno" xmin=0 xmax=5.5 ymin=36 ymax=53 nomi="volume in acqua (L),spinta (N)" titolo="Il corpo esclude sempre 5 L. Sostituire un litro d'olio con un litro d'acqua aumenta la spinta."}
:::
