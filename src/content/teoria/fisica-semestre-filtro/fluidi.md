---
titolo: Meccanica dei fluidi e modelli della circolazione
sommario: Pressioni misurate e assolute, equilibrio e galleggiamento, conservazione della massa e dell'energia, viscosità e reti idrauliche, interfacce e capillarità.
---
:::osservazione{titolo="Tre bilanci per i fluidi"}
Un liquido in un manometro, un getto che attraversa un restringimento e una goccia quasi sferica richiedono bilanci diversi. Nel primo caso si equilibrano forze; nel secondo si seguono massa ed energia; nel terzo conta anche il costo energetico dell'interfaccia. La prima decisione consiste quindi nell'identificare il sistema e il regime, prima di scegliere una formula.
:::

## Stati della materia, densità e pressione

:::osservazione{titolo="Solidi, liquidi e gas"}
Una gomma solida può deformarsi sotto una forza tangenziale e raggiungere un equilibrio; un fluido ordinario continua a scorrere finché quello sforzo agisce. Liquidi e gas sono entrambi fluidi, ma un liquido conserva approssimativamente il proprio volume, mentre un gas riempie lo spazio disponibile. L'incomprimibilità è un'approssimazione sulla variazione della densità: non significa assenza di moto o di viscosità.
:::

:::definizione{#pressione-densita titolo="Densità e pressione"}
La densità media di un corpo omogeneo e la pressione uniforme su una superficie sono
$$
\rho=\dfrac{m}{V},\qquad p=\dfrac{F_\perp}{A}.
$$
Localmente la pressione descrive la forza normale per unità di area. In un fluido in quiete è una grandezza scalare: la direzione della forza dipende dalla normale alla superficie su cui agisce. Le unità SI sono $\mathrm{kg/m^3}$ per la densità e $\mathrm{Pa}=\mathrm{N/m^2}$ per la pressione.
:::

:::osservazione{titolo="Forza, riferimento e conversioni"}
Una pressione non è una forza. Raddoppiare l'area a pressione uniforme raddoppia la forza; se invece è fissata la forza, raddoppiare l'area dimezza la pressione. Quando la pressione varia sulla superficie, la forza si ricava sommando i contributi delle piccole aree, non moltiplicando tutta l'area per un valore scelto arbitrariamente.

La **pressione assoluta** ha come riferimento il vuoto; quella **relativa** ha come riferimento una pressione esterna dichiarata, spesso quella atmosferica:
$$
p_{\mathrm{rel}}=p_{\mathrm{ass}}-p_{\mathrm{atm}}.
$$
Un manometro può indicare una pressione relativa negativa senza indicare una pressione assoluta negativa. Per esempio, $p_{\mathrm{atm}}=101\,\mathrm{kPa}$ e $p_{\mathrm{rel}}=-20\,\mathrm{kPa}$ corrispondono a $p_{\mathrm{ass}}=81\,\mathrm{kPa}$. Nelle differenze fra due pressioni lo stesso riferimento si cancella.

Per le conversioni, $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$, $1\,\mathrm{mL}=10^{-6}\,\mathrm{m^3}$ e $1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2}$. Il millimetro di mercurio convenzionale vale circa $133{,}3\,\mathrm{Pa}$; l'atmosfera standard vale esattamente $101325\,\mathrm{Pa}$ e non coincide necessariamente con la pressione atmosferica locale.

![Scala con pressione assoluta di 81 kPa, pressione atmosferica di 101 kPa e differenza relativa di meno 20 kPa.](/figure/fisica-semestre-filtro/fluidi/pressure-it.svg)
:::

## Equilibrio idrostatico e manometri

:::osservazione{titolo="Bilancio di una colonna in quiete"}
Consideriamo una colonna verticale di liquido in quiete, di area $A$ e altezza $h$. La forza verso l'alto sulla base deve equilibrare il peso della colonna e la forza verso il basso sulla faccia superiore. Quindi $(p-p_0)A=\rho Ahg$: l'area si semplifica. La pressione dipende dalla profondità, non dalla larghezza o dalla forma del recipiente.
:::

:::teorema{#stevino titolo="Legge di Stevino"}
Con densità e accelerazione di gravità costanti, alla profondità $h$ sotto un livello alla pressione $p_0$,
$$
p=p_0+\rho gh.
$$
Usando invece una coordinata $z$ crescente verso l'alto, $\dfrac{dp}{dz}=-\rho g$. Due punti alla stessa quota nello stesso liquido connesso in quiete hanno la stessa pressione.
:::

:::osservazione{titolo="Recipienti e colonne manometriche"}
Quest'ultima conclusione richiede le condizioni indicate: non si applica automaticamente a liquidi diversi separati da una parete, né a un condotto in moto. In un recipiente che si allarga verso l'alto la forza sulla base può differire dal peso del liquido: anche le pareti inclinate esercitano componenti verticali di forza.

Nel manometro a U si parte da una pressione nota e si percorrono le colonne: scendendo si aggiunge $\rho g\Delta h$, salendo si sottrae. Attraversando un'interfaccia piana all'equilibrio la pressione è continua, trascurando effetti capillari. Se sono presenti liquidi diversi si cambia densità al passaggio. Per un gas di densità trascurabile collegato a un ramo, l'altro aperto all'aria, un livello più basso dal lato del gas indica pressione del gas maggiore di quella atmosferica.

Nel **barometro di Torricelli** la pressione atmosferica sostiene la colonna rispetto alla pressione sopra di essa:
$$
p_{\mathrm{atm}}-p_{\mathrm{top}}=\rho_{\mathrm{Hg}}gh.
$$
Trascurare $p_{\mathrm{top}}$ dà la formula consueta; se vapore o gas residuo non sono trascurabili, occorre conservarlo. Il dislivello è verticale, anche quando il tubo è inclinato.
:::

:::esempio{titolo="Una differenza di quota"}
Un liquido di densità $1060\,\mathrm{kg/m^3}$ presenta fra due punti separati verticalmente di $0{,}40\,\mathrm{m}$, in quiete,
$$
\Delta p=1060\cdot9{,}81\cdot0{,}40\,\mathrm{Pa}
\simeq4{,}16\cdot10^3\,\mathrm{Pa}\simeq31{,}2\,\mathrm{mmHg}.
$$
Il punto più basso ha pressione maggiore. Questo contributo idrostatico può essere significativo nei modelli della circolazione, ma non determina da solo il flusso nel circuito.
:::

:::osservazione{titolo="Leggere il grafico idrostatico"}
![Pressione relativa in acqua in quiete: retta da zero a 19,62 kPa fra zero e due metri di profondità.](/figure/fisica-semestre-filtro/fluidi/hydrostatic-it.svg)
:::

## Pascal e Archimede

:::osservazione{titolo="Incrementi di pressione nel torchio"}
Una pressione aggiuntiva applicata al liquido confinato modifica le pressioni anche lontano dal punto di applicazione. Non elimina però la differenza idrostatica fra quote diverse. Nel torchio le forze considerate sono quelle aggiuntive rispetto alla pressione esterna comune, e si trascurano attrito e peso dei pistoni.
:::

:::teorema{#pascal-archimede titolo="Trasmissione della pressione e spinta"}
Per il **principio di Pascal**, una variazione di pressione applicata a un fluido incomprimibile confinato si trasmette al fluido in equilibrio. Con pistoni alla stessa quota,
$$
\dfrac{F_1}{A_1}=\dfrac{F_2}{A_2}.
$$
Per il **principio di Archimede**, la risultante delle pressioni su un corpo immerso in un fluido in quiete è diretta verso l'alto e vale il peso del fluido spostato:
$$
F_A=\rho_f gV_{\mathrm{sub}}.
$$
La formula con una sola densità presuppone un fluido omogeneo e un volume immerso $V_{\mathrm{sub}}$ interamente circondato dal fluido, salvo la superficie libera.
:::

:::osservazione{titolo="Galleggiamento e forze di vincolo"}
La spinta nasce perché la pressione cresce verso il basso: le forze sulla parte inferiore prevalgono su quelle sulla parte superiore. Il corpo può anche affondare pur ricevendo una spinta verso l'alto, se il suo peso è maggiore. Un corpo a contatto ermetico con il fondo richiede un bilancio specifico: l'acqua non agisce sulla faccia sigillata.

Per un corpo omogeneo galleggiante, senza sostegni, trascurando aria e tensione superficiale, l'equilibrio $mg=F_A$ fornisce
$$
\dfrac{V_{\mathrm{sub}}}{V}=\dfrac{\rho_c}{\rho_f}.
$$
La frazione emersa è il complemento a uno. Per un corpo rigido completamente immerso in un liquido incomprimibile la spinta non aumenta ulteriormente con la profondità: aumentano le pressioni, ma la loro risultante resta la stessa. Un sostegno dall'alto misura la tensione $T=mg-F_A$ soltanto quando questa è non negativa; se la spinta supera il peso, serve una forza verso il basso per tenerlo fermo.

Il torchio conserva anche il volume trasferito: $A_1s_1=A_2s_2$. Nel modello ideale con differenze di quota trascurabili, $F_1s_1=F_2s_2$: guadagnare forza richiede maggiore corsa. Una macchina idraulica non produce energia gratuitamente.

![Forze su un cubo galleggiante: peso e spinta uguali, con il 60 per cento del volume immerso.](/figure/fisica-semestre-filtro/fluidi/buoyancy-it.svg)
:::

## Portata ed equazione di continuità

:::osservazione{titolo="Velocità e portata"}
La velocità riguarda il moto locale; la portata quantifica quanto fluido attraversa una sezione. Un grande insieme di piccoli vasi può avere area totale elevata e velocità media bassa pur trasportando la stessa portata di un vaso più grande.
:::

:::teorema{#continuita titolo="Conservazione della massa"}
La portata volumetrica media in un intervallo è $Q=\dfrac{\Delta V}{\Delta t}$. Per una sezione attraversata normalmente dal moto,
$$
Q=A\bar v,\qquad \dot m=\rho Q.
$$
$\bar v$ è la media sulla sezione, non necessariamente la velocità sull'asse. In un condotto percorso in regime stazionario, senza perdite né diramazioni,
$$
\rho_1A_1\bar v_1=\rho_2A_2\bar v_2.
$$
Se la densità è costante, $A_1\bar v_1=A_2\bar v_2$.
:::

:::osservazione{titolo="Conservazione, accumulo e aree"}
La conservazione della massa resta valida anche per un fluido viscoso: non è una proprietà esclusiva del modello ideale. Un gas che cambia densità può invece avere portate volumetriche diverse alle due sezioni, pur conservando la portata massica. Se il condotto accumula fluido perché si dilata, ingresso e uscita possono differire durante il transitorio.

Per sezioni circolari $A=\pi r^2$. Dimezzare il raggio lungo un condotto incomprimibile stazionario dimezza una lunghezza, ma riduce l'area a un quarto: la velocità media quadruplica. A un nodo privo di accumulo si sommano le portate con il loro verso; due uscite non ricevono necessariamente metà portata ciascuna, perché ciò dipende dalle resistenze dei rami.

![Due sezioni circolari di diametri nel rapporto due a uno: aree nel rapporto quattro a uno e velocità nel rapporto uno a quattro.](/figure/fisica-semestre-filtro/fluidi/continuity-it.svg)
:::

## Bernoulli e variazioni di sezione

:::osservazione{titolo="Il lavoro delle pressioni"}
La pressione a monte compie lavoro per spingere un volume di fluido; a valle il fluido compie lavoro sull'ambiente. La differenza può diventare energia cinetica o potenziale gravitazionale. Dividere il bilancio energetico per il volume porta a termini con unità di pressione.
:::

:::teorema{#bernoulli titolo="Bilancio energetico di un fluido ideale"}
Lungo una stessa linea di corrente, per moto stazionario incomprimibile con viscosità trascurabile, senza pompe o turbine fra i punti,
$$
p+\dfrac12\rho v^2+\rho gz=\text{costante}.
$$
Qui $p$ è la pressione statica, $v$ la velocità locale e $z$ la quota crescente verso l'alto. Nei semplici modelli di condotto si assume velocità uniforme su ciascuna sezione. La sostituzione automatica con la media di un profilo viscoso non uniforme richiederebbe correzioni energetiche.
:::

:::osservazione{titolo="Applicazioni e limiti di Bernoulli"}
In orizzontale, nello stesso flusso ideale, un aumento di velocità corrisponde a una diminuzione di pressione statica. Non segue che qualsiasi punto più veloce abbia sempre pressione minore: possono cambiare quota, linea di corrente o condizioni energetiche. Anche in un moto stazionario una particella può accelerare attraversando un restringimento; sono le grandezze in ciascun punto fisso a non cambiare nel tempo.

Per un grande serbatoio aperto, con foro molto più piccolo della superficie libera, la velocità di abbassamento della superficie è trascurabile. Se superficie e getto sono alla stessa pressione esterna, Bernoulli dà la legge di efflusso di Torricelli
$$
v=\sqrt{2g\Delta h}.
$$
È una valutazione ideale e quasi stazionaria; contrazione del getto e dissipazione possono modificare la portata reale. Non va confusa con l'esperimento barometrico di Torricelli.
:::

:::osservazione{#circolazione titolo="Stenosi, aneurisma e pressione recuperata"}
A portata fissata un restringimento aumenta la velocità; nel modello ideale orizzontale riduce la pressione statica. Un allargamento la rallenta. Se dopo il restringimento si recuperano quota e sezione iniziali, il modello ideale recupera la pressione iniziale. In un vaso reale parte dell'energia meccanica si dissipa: il recupero non è completo e il cuore fornisce lavoro al circuito. Elasticità, pulsazioni, geometria complessa e comportamento del sangue limitano il modello.
:::

:::osservazione{titolo="Confrontare i termini energetici"}
![Bilancio orizzontale ideale: aumentando la velocità da 1 a 3 metri al secondo, la pressione statica diminuisce di 4 kPa e la somma energetica resta costante.](/figure/fisica-semestre-filtro/fluidi/bernoulli-it.svg)
:::

## Viscosità e regimi di moto

:::osservazione{titolo="Origine dello sforzo viscoso"}
Fra due piastre, una ferma e una in moto, gli strati di fluido si trascinano. Per mantenere il moto occorre una forza tangenziale: l'energia meccanica fornita viene dissipata. La viscosità riguarda il gradiente di velocità, non semplicemente la presenza di una velocità elevata.
:::

:::definizione{#viscosita titolo="Fluidi newtoniani e regimi"}
Per un fluido newtoniano in moto piano, il modulo dello sforzo tangenziale è
$$
\tau=\eta\left|\dfrac{dv}{dy}\right|,
$$
dove $\eta$ è la viscosità dinamica, misurata in $\mathrm{Pa\,s}$. Il gradiente ha unità $\mathrm{s^{-1}}$. Se la relazione fra sforzo e gradiente non è lineare con viscosità costante, il modello newtoniano non basta.
:::

:::osservazione{titolo="Regimi di moto e numero di Reynolds"}
**Stazionario** significa che le grandezze in ogni punto fisso non variano nel tempo. **Laminare** significa moto ordinato senza le fluttuazioni irregolari e i vortici del moto turbolento. Le due classificazioni non sono opposte: un flusso laminare può essere pulsante e quindi non stazionario; un flusso turbolento può avere una portata media costante pur fluttuando istantaneamente. La diffusione molecolare può comunque mescolare sostanze anche in moto laminare.

Per un tubo di diametro $D$,
$$
\mathrm{Re}=\dfrac{\rho\bar vD}{\eta}
$$
è un numero adimensionale che confronta effetti inerziali e viscosi. Valori piccoli favoriscono il regime laminare. La transizione dipende da geometria, ingresso e perturbazioni: una soglia sperimentale per un tubo rettilineo non è una legge universale per la circolazione. Il sangue contiene cellule e può avere viscosità apparente dipendente dal flusso e dal calibro del vaso.

![Profilo laminare parabolico normalizzato: velocità nulla alle pareti, massima sull'asse, velocità media pari alla metà del massimo.](/figure/fisica-semestre-filtro/fluidi/profile-it.svg)

Nel grafico $x$ è la coordinata con segno lungo un diametro, con origine sull’asse; la distanza radiale è $s=|x|$.
:::

## Poiseuille e resistenze idrauliche
:::teorema{#poiseuille titolo="Flusso laminare in un tubo cilindrico"}
Per un fluido newtoniano incomprimibile in moto laminare stazionario completamente sviluppato, entro un tubo cilindrico rigido orizzontale di raggio $r$ e lunghezza $L$, con aderenza alla parete,
$$
Q=\dfrac{\pi r^4}{8\eta L}\Delta p,\qquad
R_h=\dfrac{8\eta L}{\pi r^4},\qquad \Delta p=R_hQ.
$$
Si pone $\Delta p=p_{\mathrm{in}}-p_{\mathrm{out}}>0$ nel verso del flusso. Se le quote differiscono, la differenza motrice comprende anche il contributo gravitazionale: non si usa automaticamente la sola differenza di pressione statica.
:::

:::osservazione{titolo="Profilo sviluppato e perdite di pressione"}
Il profilo sviluppato non cambia forma lungo il tubo; vicino all'ingresso questa ipotesi può fallire. Con distanza $s$ dall'asse,
$$
v(s)=\dfrac{\Delta p}{4\eta L}(r^2-s^2),\qquad
v_{\max}=2\bar v.
$$
La velocità si annulla sulla parete fissa per l'aderenza. Il gradiente è nullo sull'asse e massimo in modulo alla parete: velocità massima non significa sforzo tangenziale massimo. L'integrazione del profilo sulla sezione dà la portata di Poiseuille.

La resistenza si misura in $\mathrm{Pa\,s/m^3}$ e dipende dal sistema, mentre la viscosità è una proprietà del fluido nelle condizioni considerate. Dimezzare il raggio moltiplica la resistenza per $16$. A differenza di pressione fissata la portata diventa un sedicesimo; a portata fissata occorre una differenza di pressione sedici volte maggiore. Non si possono imporre contemporaneamente entrambe le condizioni senza cambiare altro.
:::

:::teorema{#resistenze-idrauliche titolo="Serie e parallelo"}
In una rete stazionaria di elementi lineari, senza accumulo e con contributi gravitazionali assenti o già inclusi, in serie passa la stessa portata e le cadute si sommano:
$$
R_{\mathrm{eq}}=\sum_iR_i.
$$
In parallelo i rami condividono i due nodi estremi, dunque la stessa differenza di pressione; le portate si sommano:
$$
\dfrac1{R_{\mathrm{eq}}}=\sum_i\dfrac1{R_i}.
$$
:::

:::osservazione{titolo="Reti e vincoli della pompa"}
Due rami identici in parallelo dimezzano la resistenza equivalente. Chiuderne uno aumenta la resistenza: la portata totale diminuisce se la differenza di pressione resta fissata, mentre richiede maggiore pressione se una pompa mantiene la portata. Per un elemento orizzontale dissipativo la potenza meccanica persa è $\mathcal P=\Delta p\,Q=R_hQ^2$, positiva nel verso del flusso. Queste relazioni permettono confronti con i circuiti elettrici, senza identificare il sistema biologico con un insieme di tubi rigidi perfetti.

![Rete in serie con la stessa portata e rete in parallelo con la stessa differenza di pressione; le leggi di combinazione sono indicate separatamente.](/figure/fisica-semestre-filtro/fluidi/network-it.svg)
:::

## Tensione superficiale e legge di Laplace

:::osservazione{titolo="Energia delle interfacce"}
Creare nuova superficie richiede energia. La tensione superficiale favorisce perciò, a volume fissato e quando la gravità è poco importante, una forma con area piccola: una goccia libera tende alla sfera. Su una linea che delimita un'interfaccia la forza è tangente alla superficie e perpendicolare alla linea. Il numero di superfici conta anche nel bilancio del lavoro.
:::

:::definizione{#laplace titolo="Interfacce piane e curve"}
La tensione superficiale $\gamma$ è forza per unità di lunghezza, equivalentemente energia per unità di area:
$$
[\gamma]=\mathrm{N/m}=\mathrm{J/m^2}.
$$
Per una singola interfaccia all'equilibrio, con tensione uniforme, la legge di Young-Laplace dà
$$
\Delta p=\gamma\left(\dfrac1{R_1}+\dfrac1{R_2}\right).
$$
I raggi principali sono orientati secondo una convenzione coerente. Per una superficie convessa vista dall'esterno, scegliamo positiva la pressione interna meno quella esterna e positivi i raggi.
:::

:::osservazione{titolo="Curvature e numero di interfacce"}
Per una sfera entrambi i raggi valgono $r$: $\Delta p=\dfrac{2\gamma}{r}$. Per un'interfaccia cilindrica uno vale $r$ e l'altro è infinito: $\Delta p=\dfrac\gamma r$. Per un'interfaccia piana entrambi sono infiniti e il salto dovuto alla curvatura è nullo. Ciò non impedisce alla pressione di variare con la quota all'interno delle fasi.

Una bolla di gas dentro un liquido ha una sola interfaccia. Una bolla di sapone sottile, invece, separa gas e film liquido su due superfici quasi dello stesso raggio; i salti si sommano e la differenza fra gas interno ed esterno è circa $\dfrac{4\gamma}{r}$. Lo spessore deve essere trascurabile rispetto al raggio per questa forma semplice.

Nel modello sferico di un alveolo, a tensione fissata un raggio minore richiede maggiore sovrapressione. Il surfattante modifica la tensione e il suo rapporto con l'area; pareti e interazioni fra alveoli contano. Il confronto fra due sfere isolate con identica tensione non descrive da solo la stabilità del polmone.

![Confronto delle curvature: piano, cilindro, sfera con una interfaccia e bolla di sapone con due interfacce.](/figure/fisica-semestre-filtro/fluidi/laplace-it.svg)
:::

## Capillarità

:::osservazione{titolo="Geometria del menisco"}
In un capillare collegato a un grande serbatoio, il menisco può sollevare o deprimere il livello rispetto alla superficie esterna. L'angolo di contatto $\theta$ si misura **attraverso il liquido**. La componente verticale della tensione lungo la circonferenza di contatto dipende da $\cos\theta$, quindi può cambiare segno.
:::

:::teorema{#capillarita titolo="Risalita e depressione capillare"}
Per un tubo verticale circolare di raggio interno $r$, in equilibrio, con densità del gas trascurabile, stessa pressione del gas sopra le superfici e contributo del volume del menisco trascurabile,
$$
2\pi r\gamma\cos\theta=\rho g\pi r^2h,
\qquad h=\dfrac{2\gamma\cos\theta}{\rho gr}.
$$
$h$ è positivo sopra il livello del serbatoio. L'approssimazione usuale tratta il liquido sollevato come una colonna cilindrica; richiede un menisco piccolo rispetto all'altezza considerata.
:::

:::osservazione{titolo="Risalita, depressione e limiti del modello"}
Un liquido bagnante con $\theta<90^\circ$ risale; per $\theta>90^\circ$ si ha depressione, mentre per $\theta=90^\circ$ il contributo capillare verticale è nullo. Raddoppiare il raggio dimezza il modulo dell'altezza soltanto se tensione, densità e angolo restano uguali. Se cambia anche la superficie della parete, non è lecito attribuire tutto al raggio.

La stessa legge si legge come equilibrio fra salto di pressione del menisco e pressione idrostatica della colonna. Nel menisco concavo bagnante la pressione del liquido appena sotto l'interfaccia è minore di quella del gas. La risalita si arresta all'equilibrio: un capillare passivo non mantiene indefinitamente un flusso senza una sorgente di energia o un processo che modifichi le condizioni, come l'evaporazione.

![Altezza capillare in funzione del raggio per acqua con angolo nullo: 5,87 cm a 0,25 mm, 2,94 cm a 0,50 mm e 1,47 cm a 1,00 mm.](/figure/fisica-semestre-filtro/fluidi/capillary-it.svg)
:::
