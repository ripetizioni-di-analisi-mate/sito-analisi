---
titolo: "Strutture iperstatiche e lavori virtuali"
sommario: "Il metodo delle forze per travi elastiche con uno o due vincoli ridondanti, cedimenti e deformazioni termiche."
---

## Equilibrio e compatibilità

:::definizione{#schema-primario titolo="Schema isostatico principale"}
Una struttura è **iperstatica** se è stabile e le equazioni di equilibrio ammettono più sistemi di reazioni vincolari. Il numero di reazioni indipendenti che restano indeterminate con l’equilibrio è il grado di iperstaticità. Nel **metodo delle forze** si scelgono altrettante incognite, dette ridondanti, e si rimuovono le corrispondenti condizioni cinematiche. Lo schema che rimane deve essere isostatico e stabile. Prende il nome di schema principale.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.72,0.72,q" quote="A,B,L" titolo="Trave incastrata in A e appoggiata in B"}

La trave in figura ha un incastro in $A$ e un appoggio verticale in $B$. L’incastro impedisce due traslazioni e una rotazione. Il vincolo in $B$ aggiunge una reazione verticale. Poiché le equazioni indipendenti di equilibrio nel piano sono tre, le quattro reazioni lasciano una sola incognita. Una scelta è la reazione $X=R_B$, positiva verso l’alto. Rimosso l’appoggio, la mensola incastrata in $A$ costituisce uno schema principale stabile.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180" carichi="A,B,0.72,0.72,q" reazioni="B,0,1.05,X" quote="A,B,L" titolo="Schema principale con la forza ridondante X"}

Si può scegliere anche il momento reattivo dell’incastro. In tal caso si libera la rotazione di $A$, lasciando impedite le sue traslazioni. Lo schema principale è una trave appoggiata alle due estremità. Alla sezione $A$ si applica la coppia incognita e si impone che la rotazione risulti nulla. Le due scelte portano allo stesso stato elastico, poiché in entrambi i casi si ripristinano le condizioni originarie.
:::

:::attenzione{titolo="Stabilità dello schema rilasciato"}
Il conteggio delle reazioni aiuta a scegliere i rilasci. La loro disposizione va controllata a parte. Se, nello stesso esempio, si libera la sola traslazione orizzontale dell’incastro, tutti i vincoli residui consentono una traslazione orizzontale rigida. Lo schema ha ancora tre reazioni, ma è labile e non fornisce un problema principale risolvibile per carichi orizzontali generici.
:::

:::osservazione{titolo="Rilasci interni e coordinate relative"}
Un rilascio può essere interno. Per esempio, una cerniera inserita in un nodo continuo consente alle due sezioni adiacenti di ruotare l’una rispetto all’altra. Se lo schema con cerniera è stabile, le azioni che ripristinano la continuità sono due coppie uguali e opposte. La loro coordinata coniugata è la differenza fra le due rotazioni. Infatti, se le coppie sono $X$ e $-X$ e le rotazioni antiorarie sono $\varphi_1$ e $\varphi_2$, il lavoro delle coppie vale $X(\varphi_1-\varphi_2)$. Nel nodo continuo si impone quindi $\varphi_1-\varphi_2=0$.

La stessa idea vale quando si libera una traslazione relativa in un collegamento interno. La forza incognita agisce su entrambe le parti con verso opposto, mentre l’equazione di compatibilità riguarda la differenza degli spostamenti nella direzione della forza. In questo modo si separa la scelta delle incognite dalla scelta dei versi senza perdere la corrispondenza fra azione e spostamento.
:::

:::esempio{titolo="Appoggi intermedi di un ponte a più campate"}
Il ponte storico di Tacoma ha travi in calcestruzzo armato continue su più campate. Nel modello di una trave continua, l’equilibrio globale fornisce meno equazioni delle reazioni verticali incognite. Si aggiunge una condizione di spostamento in corrispondenza di ciascun appoggio rimosso nello schema principale.

<figure class="grafico foto-tecnica"><img src="/immagini/scienza-delle-costruzioni/ponte-continuo.webp" alt="Fotografia d’archivio del pilastro e del sottoponte del North Twenty-First Street Bridge" width="828" height="1024" loading="lazy" decoding="async"><figcaption>Appoggi intermedi di un ponte a più campate. Foto ridimensionata di <a href="https://commons.wikimedia.org/wiki/File:DETAIL_VIEW_OF_SOUTHEAST_COLUMN%2C_LOOKING_NORTHEAST_-_North_Twenty-First_Street_Bridge%2C_North_Twenty-first_Street_spanning_Buckley_Gulch%2C_Tacoma%2C_Pierce_County%2C_WA_HAER_WASH%2C27-TACO%2C10-11.tif">Historic American Engineering Record</a>, <a href="https://creativecommons.org/publicdomain/mark/1.0/">pubblico dominio</a>.</figcaption></figure>
:::

## Lavori virtuali e carico unitario

::::teorema{#lavori-virtuali titolo="Metodo della forza e della coppia unitaria"}
Si consideri una struttura di travi elastiche lineari, con spostamenti piccoli e vincoli fissi, e si assuma che si deformi per flessione e azione assiale. Si cercano uno spostamento o una rotazione nella direzione scelta. Le azioni interne effettive sono il momento $M$ e lo sforzo normale $N$. Si costruisce un secondo sistema, in equilibrio sulla stessa struttura, applicando nella direzione cercata una forza unitaria per la traslazione oppure una coppia unitaria per la rotazione. Si indicano con $m$ e $n$ le azioni interne virtuali per unità di azione applicata. Il valore algebrico della coordinata cercata è

$$
\delta=\sum_{\text{aste}}\int
\left(\frac{Mm}{EI}+\frac{Nn}{EA}\right)\mathrm dx.
$$

:::dimostrazione
L’identità dei lavori virtuali eguaglia il lavoro esterno del sistema virtuale sugli spostamenti reali al suo lavoro interno sulle deformazioni reali. Le reazioni virtuali non compiono lavoro perché i vincoli reali sono fissi. Il lavoro esterno per unità di carico virtuale è quindi la sola coordinata cercata. Nel lavoro interno il momento virtuale moltiplica la curvatura elastica $\dfrac{M}{EI}$ con segno coerente e lo sforzo normale virtuale moltiplica la deformazione elastica $\dfrac{N}{EA}$. Sommando su tutte le aste si ottiene l’identità.
:::

Nel sistema virtuale i carichi reali sono assenti. Le deformazioni che compaiono nel prodotto restano quelle del sistema effettivo. La rigidezza a flessione $EI$ può cambiare da un tratto al successivo. In questo caso ogni tratto usa il proprio valore. Se il modello include deformabilità a taglio o a torsione, il lavoro interno comprende anche i corrispondenti prodotti fra azioni virtuali e deformazioni effettive.
::::

:::esempio{titolo="Forza interna alla luce e freccia in punta"}
Una mensola di luce $L$ porta una forza $P$ verso il basso a distanza $a$ dall’incastro. Il sistema virtuale ha una forza unitaria in punta verso il basso, perché si vuole la freccia $v_B$ positiva in quel verso.

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="C,0,-1.0,P" quote="A,C,a;C,B,L − a" titolo="Sistema effettivo con forza P nel punto C"}

::struttura{nodi="A,0,0;C,2,0;B,5,0" aste="A-B" vincoli="A,incastro,180" forze="B,0,-1.0,1" quote="A,C,a;C,B,L − a" titolo="Sistema virtuale con forza unitaria verso il basso in B"}

Il momento reale vale $-P(a-x)$ dall’incastro al carico e si annulla fra il carico e la punta. Il momento virtuale vale $-(L-x)$ su tutta la mensola. Il tratto oltre il carico dà contributo nullo al lavoro interno perché lì $M=0$. Con $EI$ costante,

$$
v_B=\frac{P}{EI}\int_0^a(a-x)(L-x)\,\mathrm dx
=\frac{Pa^2(3L-a)}{6EI}.
$$

Il prodotto dei momenti è positivo sul tratto che contribuisce. Il risultato è quindi positivo nella direzione del carico virtuale. Per $P=18\,\mathrm{kN}$, $a=2\,\mathrm m$, $L=5\,\mathrm m$ ed $EI=12\,000\,\mathrm{kN\,m^2}$ si ottengono $13\,\mathrm{mm}$. Se l’azione virtuale fosse una coppia antioraria in punta, il calcolo darebbe invece una rotazione con segno antiorario.
:::

:::esempio{titolo="Rotazione cercata con una coppia unitaria"}
Se una mensola di luce $L$ è caricata da $q$ uniforme verso il basso, si cerchi la rotazione della punta con verso positivo antiorario. Una coppia unitaria antioraria in punta produce il diagramma virtuale costante $m=1$. Il momento reale vale $-\dfrac q2(L-x)^2$. Pertanto

$$
\varphi_B=\int_0^L\frac{M}{EI}\,\mathrm dx=-\frac{qL^3}{6EI}
$$

per rigidezza costante. Il segno negativo indica una rotazione oraria. Per $q=9\,\mathrm{kN/m}$, $L=4\,\mathrm m$ ed $EI=8\,000\,\mathrm{kN\,m^2}$ si ottiene $-0{,}012\,\mathrm{rad}$. Lo stesso segno si ricava dalla linea elastica, poiché la freccia verso il basso cresce procedendo dall’incastro verso la punta. Nella convenzione del corso la rotazione antioraria è $-v'$.

Per una barra tesa con due tratti in serie si può applicare una forza unitaria assiale in punta. Lo sforzo normale virtuale è unitario in ciascun tratto e il prodotto di flessione è nullo. La formula restituisce la somma degli allungamenti assiali, usando la rigidezza di ciascun tratto.
:::

## Una sola incognita ridondante

::::teorema{#metodo-forze titolo="Equazione di compatibilità con una ridondante"}
Si consideri una struttura elastica lineare con grado di iperstaticità uno. Sullo schema principale si assume un verso positivo per la forza o coppia ridondante $X$. Si misura nello stesso verso la coordinata cinematica che il vincolo rimosso impone. Si indichino con $\delta_0$ il valore della coordinata sotto i carichi esterni e con $f_{11}$ il valore sotto l’azione unitaria concorde con $X$. Se $\Delta$ è il valore imposto dal vincolo originario, la compatibilità è

$$
\delta_0+f_{11}X=\Delta,
\qquad
X=\frac{\Delta-\delta_0}{f_{11}}.
$$

:::dimostrazione
Per linearità lo spostamento dovuto a $X$ è $X$ volte quello dovuto al carico unitario. Lo spostamento totale è quindi $\delta_0+Xf_{11}$. Il vincolo originario ammette il solo valore $\Delta$, che si impone con l’equazione di compatibilità. Per una trave deformabile a flessione e azione assiale, l’applicazione dei lavori virtuali allo stesso sistema unitario fornisce $f_{11}=\int\bigl(\dfrac{m^2}{EI}+\dfrac{n^2}{EA}\bigr)\,\mathrm dx$, con somma su tutte le aste. Il coefficiente è positivo se l’azione unitaria produce una deformazione nel modello.
:::

La flessibilità di una traslazione rispetto a una forza si misura in $\mathrm{m/kN}$. Una flessibilità maggiore significa che basta una forza minore per correggere lo stesso spostamento. Una volta trovata $X$, si ricostruiscono tutte le reazioni e le azioni interne sommando gli effetti di $X$ a quelli dei carichi.
::::

:::esempio{titolo="Reazione del puntello sotto carico uniforme"}
Si rimuova l’appoggio di punta e si prenda $X$ verso l’alto. Il diagramma reale della mensola vale $M_0(x)=-\dfrac q2(L-x)^2$, dove $q$ è il carico uniforme verso il basso. Il diagramma da forza unitaria verso l’alto vale $m_1(x)=L-x$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180" diagramma="0,0,6,0,-(6-s)^2/2" verso=-1 numeri=0 segni=1 titolo="Momento reale della mensola sotto carico uniforme, con fibre superiori tese"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,incastro,180" reazioni="B,0,1.05,1" diagramma="0,0,6,0,6-s" verso=-1 numeri=0 segni=1 titolo="Momento della mensola sotto la forza unitaria verso l’alto"}

Il diagramma reale e quello unitario hanno segni opposti. Pertanto $\delta_0$ è negativa, cioè la punta scende. Per $EI$ costante si ricavano

$$
\begin{aligned}
\delta_0&=-\frac{q}{2EI}\int_0^L (L-x)^3\,\mathrm dx
=-\frac{qL^4}{8EI},\\[5pt]
f_{11}&=\frac1{EI}\int_0^L (L-x)^2\,\mathrm dx
=\frac{L^3}{3EI}.
\end{aligned}
$$

Per un puntello fisso $\Delta=0$, quindi $R_B=\dfrac{3qL}{8}$. Se $L=6\,\mathrm m$ e $q=8\,\mathrm{kN/m}$, si trova $R_B=18\,\mathrm{kN}$. La rigidezza si semplifica perché è la stessa in ogni tratto e in entrambi i sistemi. Con rigidezze diverse lungo la trave si integrano separatamente i singoli tratti.
:::

:::esempio{titolo="Mensola con rigidezza diversa nei due tratti"}
Si rimuova il puntello della mensola e si consideri un carico uniforme di intensità $q$. Nella metà vicina all’incastro la rigidezza è $K$, mentre nella metà vicina alla punta vale $\dfrac K2$. I diagrammi dei momenti sullo schema principale dipendono dall’equilibrio e restano quelli della mensola uniforme. Nelle due integrazioni compare però il doppio del peso nella metà più deformabile. Indicando con $w=L-x$ la distanza dalla punta si trova

$$
\begin{aligned}
f_{11}
&=\frac1K\left(2\int_0^{\frac L2}w^2\,\mathrm dw+\int_{\frac L2}^L w^2\,\mathrm dw\right)
=\frac{3L^3}{8K},\\[4pt]
\delta_0
&=-\frac{q}{2K}\left(2\int_0^{\frac L2}w^3\,\mathrm dw+\int_{\frac L2}^L w^3\,\mathrm dw\right)
=-\frac{17qL^4}{128K}.
\end{aligned}
$$

La reazione con puntello fisso vale quindi $\dfrac{17qL}{48}$, mentre con rigidezza uniforme vale $\dfrac{3qL}{8}=\dfrac{18qL}{48}$. La differenza si può leggere dai due integrali. Il termine del carico è pesato da $w^3$ e quello della flessibilità da $w^2$. La metà meno rigida, vicina alla punta, incide relativamente di più sul denominatore. Di conseguenza la reazione richiesta per annullare la freccia diminuisce.
:::

## Due ridondanze e matrice di flessibilità

:::teorema{#due-ridondanze titolo="Compatibilità con due ridondanti"}
Sul sistema principale siano $X_1$ e $X_2$ le azioni che ripristinano i due vincoli rilasciati. Si indica con $f_{ij}$ la coordinata cinematica $i$ prodotta dall’azione unitaria $j$. Si scrive una condizione di compatibilità per ciascun rilascio:

$$
\begin{cases}
f_{11}X_1+f_{12}X_2=\Delta_1-\delta_{01},\\
f_{21}X_1+f_{22}X_2=\Delta_2-\delta_{02}.
\end{cases}
$$

Per la sola flessione, $f_{ij}$ è l’integrale di $\dfrac{m_i m_j}{EI}$, sommato su tutte le aste. Poiché si scambiano soltanto i due fattori del prodotto, $f_{12}=f_{21}$. Il termine fuori diagonale rappresenta l’effetto di una forza sulla coordinata coniugata all’altra. Per questo le due equazioni si risolvono insieme.

Per una coppia di valori reali $a_1,a_2$, la forma quadratica della matrice coincide con l’integrale di $\dfrac{(a_1m_1+a_2m_2)^2}{EI}$. Il valore è positivo per ogni coppia non nulla se i diagrammi unitari sono linearmente indipendenti nel modello deformativo. La matrice è allora invertibile. Se un contributo necessario è stato trascurato, per esempio l’allungamento assiale di un tirante che costituisce un vincolo, conviene riesaminare il modello prima di risolvere il sistema.
:::

:::esempio{titolo="Due appoggi verticali sulla stessa mensola"}
Una trave lunga $6\,\mathrm m$ è incastrata in $A$ e appoggiata in $B$ e $C$, a $3\,\mathrm m$ e $6\,\mathrm m$ da $A$. Le due reazioni verticali, prese positive verso l’alto, sono le incognite. Dopo i rilasci rimane la mensola. Il diagramma unitario di $B$ vale $3-x$ sul tratto $AB$ e si annulla in $BC$. Il diagramma unitario di $C$ vale $6-x$ su tutta la luce.

::struttura{nodi="A,0,0;B,3,0;C,6,0" aste="A-B;B-C" vincoli="A,incastro,180;B,carrello;C,carrello" carichi="A,C,0.7,0.7,q" quote="A,B,3 m;B,C,3 m" titolo="Trave con due appoggi verticali ridondanti"}

Con coordinate in metri e $EI$ costante, i coefficienti moltiplicati per $EI$ si ricavano integrando i prodotti dei diagrammi. Per esempio, $EI f_{BC}=\int_0^3(3-x)(6-x)\,\mathrm dx=\dfrac{45}{2}\,\mathrm{m^3}$. Il carico uniforme di $14\,\mathrm{kN/m}$ dà $\delta_{0B}$ e $\delta_{0C}$ entrambe negative. Con reazioni espresse in kilonewton il sistema numerico è

$$
\begin{cases}
9R_B+22{,}5R_C=803{,}25,\\
22{,}5R_B+72R_C=2\,268.
\end{cases}
$$

Si ottiene $R_B=48\,\mathrm{kN}$ e $R_C=16{,}5\,\mathrm{kN}$. Per equilibrio verticale la reazione di $A$ vale $84-48-16{,}5=19{,}5\,\mathrm{kN}$. La reazione centrale è maggiore della reazione di punta anche se la punta ha una flessibilità diretta maggiore. Il valore di ciascuna reazione dipende infatti anche dall’interazione fra le due coordinate.
:::

:::esempio{titolo="Rilasciare le rotazioni dei due incastri"}
Una trave prismatica sotto carico uniforme è incastrata alle due estremità. Nel modello flessionale si liberano le rotazioni lasciando ferme le traslazioni verticali. Sullo schema appoggiato il momento del carico vale $\dfrac q2 x(L-x)$. Per simmetria i due momenti interni alle estremità sono uguali. Si chiami $M_e$ il loro valore comune. Le due coppie esterne, opposte, aggiungono allora al diagramma un contributo costante $M_e$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.7,0.7,q" coppie="A,1,X_A;B,-1,X_B" quote="A,B,L" titolo="Schema flessionale con le rotazioni liberate alle due estremità"}

Poiché entrambe le rotazioni finali devono essere nulle, anche la loro differenza è nulla. Essa è l’integrale di $\dfrac{M}{EI}$ lungo la trave. Con rigidezza costante si ha $\dfrac{qL^3}{12}+M_eL=0$, da cui $M_e=-\dfrac{qL^2}{12}$. La condizione sulla differenza è sufficiente qui perché per simmetria le due rotazioni sono opposte. Con carico asimmetrico si impongono separatamente le due condizioni.
:::

## Cedimenti assegnati

:::osservazione{#cedimenti titolo="Valore imposto dal vincolo"}
Un cedimento assegnato è uno spostamento noto del punto vincolato. Quando si rilascia quel vincolo, la coordinata della struttura deve coincidere con tale spostamento. Se la reazione è positiva verso l’alto e l’appoggio si abbassa di un modulo $s$, allora $\Delta=-s$. Per un vincolo rotazionale si procede allo stesso modo, confrontando il verso positivo della coppia con quello della rotazione imposta.

::struttura{nodi="A,0,0;B,4,0" aste="A-B" vincoli="A,incastro,180;B,carrello" carichi="A,B,0.58,0.58,q" tratteggi="0,0 1,-0.02 2,-0.08 3,-0.17 4,-0.25" frecce="4.65,0.03,4.65,-0.32,s" quote="A,B,L" titolo="Abbassamento assegnato al vincolo di punta, amplificato nello schema"}

Per la mensola puntellata sotto carico uniforme si ottiene $R_B=\dfrac{3qL}{8}-\dfrac{3EI}{L^3}s$. Il termine dovuto al cedimento è negativo. L’abbassamento infatti avvicina l’appoggio alla posizione che la punta avrebbe sulla mensola libera. Se la reazione calcolata cambia verso, un appoggio unilaterale perde contatto e il problema va impostato sullo schema coerente con il distacco. Un vincolo bilaterale può invece esercitare una forza nei due versi.
:::

:::esempio{titolo="Cedimento relativo rispetto alla corda"}
Si consideri una trave continua su tre appoggi semplici. Rimosso l’appoggio centrale, i due estremi possono abbassarsi di quantità diverse. In assenza di carichi, la trave appoggiata si dispone sulla corda fra le nuove posizioni dei due estremi, per una piccola rotazione rigida. Il cedimento che genera flessione nel sistema originario è quindi quello dell’appoggio centrale rispetto alla corda.

Per esempio, se gli estremi scendono di $2\,\mathrm{mm}$ e $6\,\mathrm{mm}$ e le campate sono uguali, la mezzeria della corda scende di $4\,\mathrm{mm}$. Con lo stesso abbassamento all’appoggio centrale si ottiene una configurazione compatibile senza reazioni da cedimento. Se l’appoggio centrale scende di $5\,\mathrm{mm}$, la trave deve deformarsi di un ulteriore millimetro in mezzeria rispetto alla corda.
:::

:::osservazione{titolo="Cedimenti nel lavoro delle reazioni virtuali"}
Quando si sceglie un sistema virtuale che mantiene i vincoli soggetti a cedimento, le sue reazioni possono compiere lavoro sugli spostamenti reali. Una reazione virtuale verticale $R^\ast$ in un appoggio che scende di $s$ aggiunge al lavoro esterno il termine $-R^\ast s$ se il verso positivo è verso l’alto. Il contributo è noto, perché sia la reazione del sistema virtuale sia il cedimento sono noti.

Nel metodo delle forze il vincolo ridondante è rilasciato e quindi la sua reazione virtuale di vincolo è assente. Il cedimento di quel punto compare a destra come valore imposto $\Delta$. Gli eventuali cedimenti dei vincoli rimasti nello schema principale contribuiscono invece allo spostamento iniziale $\delta_0$. Si ottiene così la stessa relazione cinematica attraverso due sistemi virtuali diversi.
:::

## Temperatura e allungamento impedito

:::esempio{#temperatura titolo="Asta vincolata assialmente alle estremità"}
Un aumento uniforme di temperatura $\Delta T$ produce nella barra libera una deformazione assiale $\varepsilon_T=\alpha\Delta T$, dove $\alpha$ è il coefficiente di dilatazione. Se la distanza fra le estremità resta fissa, la deformazione elastica deve compensare quella termica. Per un’asta uniforme con sezione $A$ e modulo di Young $E$, l’allungamento totale è

$$
\Delta L=\frac{NL}{EA}+\alpha\Delta T L.
$$

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,incastro,180;B,incastro,0" quote="A,B,L" etichette="2.5,0.55,ΔT uniforme" titolo="Barra bloccata assialmente alle estremità e riscaldata in modo uniforme"}

Imponendo $\Delta L=0$ si ottiene $N=-EA\alpha\Delta T$. Per un riscaldamento il segno indica compressione. Per un raffreddamento indica trazione. La lunghezza si semplifica perché entrambi gli allungamenti sono proporzionali a $L$. Il risultato descrive lo stato rettilineo. Per un’asta snella compressa può diventare necessario studiarne la stabilità.

Se due tratti consecutivi hanno rigidezze e dilatazioni diverse, in assenza di forze applicate al giunto lo sforzo normale $N$ ha lo stesso valore nei due tratti. Si sommano i loro allungamenti, usando per ciascuno la propria rigidezza e la propria temperatura:

$$
N\left(\frac{L_1}{EA_1}+\frac{L_2}{EA_2}\right)
+\alpha_1\Delta T_1 L_1+\alpha_2\Delta T_2 L_2=0.
$$

La barra può avere un giunto che si sposta anche con estremità fisse. Infatti la condizione impone che la somma degli allungamenti si annulli, mentre i singoli tratti possono allungarsi e accorciarsi di quantità opposte.
:::

## Curvatura termica e controllo dei risultati

:::definizione{#curvatura-termica titolo="Curvatura libera da gradiente termico"}
Se la temperatura varia con la quota, le fibre della trave hanno dilatazioni libere diverse. Per un materiale omogeneo e una variazione lineare della temperatura attraverso l’altezza, la deformazione termica è affine in quota. Una sezione libera può quindi dilatarsi al baricentro e ruotare lungo la trave. Si chiami $\kappa_T$ la curvatura libera, definita come $v_T''$ con $v_T$ positiva verso il basso. Alla presenza di un momento flettente si ha

$$
v''=-\frac{M}{EI}+\kappa_T.
$$

Sulla mensola con incastro fisso e $\kappa_T$ costante, la soluzione libera ha $v_T(0)=v_T'(0)=0$. Integrando due volte si ottiene $v_T(L)=\dfrac{\kappa_T L^2}{2}$. Se si aggiunge un appoggio fisso di punta, una reazione verso l’alto deve annullare la freccia termica positiva. Con $L=5\,\mathrm m$, $EI=10\,000\,\mathrm{kN\,m^2}$ e $\kappa_T=2\cdot10^{-3}\,\mathrm{m^{-1}}$, la punta libera scenderebbe di $25\,\mathrm{mm}$ e la reazione vale $6\,\mathrm{kN}$.

In un calcolo con lavori virtuali si aggiunge il contributo delle deformazioni iniziali. Con i segni di questo capitolo, il termine termico è $\int(n\varepsilon_T-m\kappa_T)\,\mathrm dx$. Il segno meno segue dalla definizione $v_T''=\kappa_T$, perché il momento positivo è coniugato alla curvatura $-v''$. In alternativa si può determinare lo spostamento termico sullo schema principale integrando direttamente le deformazioni libere.
:::

:::osservazione{titolo="Dalla differenza di temperatura alla curvatura"}
Con asse $y$ rivolto verso l’alto, la deformazione longitudinale libera a una quota $y$ è $\alpha\Delta T(y)$. La differenza di deformazione fra il lembo superiore e quello inferiore è $\alpha(\Delta T_{\mathrm{sup}}-\Delta T_{\mathrm{inf}})$. Nel modello della trave piana tale differenza vale $h v_T''$, dove $h$ è la distanza fra i due lembi. Perciò

$$
\kappa_T=\frac{\alpha(\Delta T_{\mathrm{sup}}-\Delta T_{\mathrm{inf}})}{h}.
$$

Per esempio, con $\alpha=10^{-5}\,\mathrm{K^{-1}}$, $h=0{,}20\,\mathrm m$ e una differenza di $20\,\mathrm K$ fra lembo superiore e inferiore, si ottiene $\kappa_T=10^{-3}\,\mathrm{m^{-1}}$. Se i due lembi si scaldano nello stesso modo, la differenza si annulla e la curvatura libera è zero. Può restare una deformazione assiale termica uniforme. I due contributi sono indipendenti nel modello lineare.
:::

:::teorema{#castigliano titolo="Teorema di Castigliano"}
Per una struttura elastica lineare con vincoli fissi e senza deformazioni imposte, la derivata dell’energia elastica rispetto a una forza applicata dà lo spostamento nella direzione di quella forza. La derivata rispetto a una coppia dà la rotazione nel suo verso. La dimostrazione e l’uso di azioni fittizie sono sviluppati nel capitolo sui metodi energetici e sul metodo degli spostamenti.
:::

:::osservazione{titolo="Equilibrio e compatibilità come controlli distinti"}
Una soluzione del metodo delle forze deve soddisfare sia l’equilibrio sia la compatibilità. L’equilibrio si può ricontrollare prendendo i momenti attorno a un punto diverso da quello usato nel calcolo delle reazioni. La compatibilità si può ricontrollare ricostruendo la deformata o ricalcolando uno spostamento con un sistema virtuale alternativo. Nel caso di un cedimento occorre verificare il valore imposto, mentre nel caso di un vincolo fisso si deve ottenere zero. Per una barra bloccata e riscaldata, la somma dell’allungamento termico e di quello elastico costituisce il residuo da controllare.
:::
