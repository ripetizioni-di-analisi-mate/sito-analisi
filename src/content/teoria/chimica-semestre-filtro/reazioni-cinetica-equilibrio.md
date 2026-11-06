---
titolo: "Reazioni chimiche, cinetica ed equilibrio"
sommario: "Bilanciamento e stechiometria, velocità delle reazioni, catalisi, equilibri chimici e precipitazione nelle soluzioni."
---

## Reazioni chimiche e quantità di sostanza

:::definizione{#bilanciamento titolo="Equazioni chimiche e conservazioni"}
Una **reazione chimica** trasforma i reagenti in prodotti mediante una diversa distribuzione degli atomi e degli elettroni. Nell'equazione chimica le formule indicano le specie e i coefficienti stechiometrici indicano i rapporti tra le loro quantità di sostanza. Il bilanciamento conserva il numero di atomi di ciascun elemento e la carica elettrica totale.
$$
2\mathrm{H_2}+\mathrm{O_2}\longrightarrow2\mathrm{H_2O}.
$$
Per ogni $2\,\mathrm{mol}$ di idrogeno che reagiscono si consuma $1\,\mathrm{mol}$ di ossigeno e si formano $2\,\mathrm{mol}$ di acqua. Gli indici delle formule restano quelli delle sostanze; modificare $\mathrm{H_2O}$ in $\mathrm{H_2O_2}$ descriverebbe una sostanza diversa.

Per un'equazione ionica anche la somma delle cariche deve coincidere nei due membri. Per esempio $\mathrm{Ag^+}+\mathrm{Cl^-}\longrightarrow\mathrm{AgCl(s)}$ ha carica totale zero in entrambi. La massa si conserva nella descrizione chimica ordinaria; l'energia totale del sistema e dell'ambiente si conserva anche quando la reazione scambia calore o compie lavoro.
:::

:::definizione{#stechiometria titolo="Avanzamento e reagente limitante"}
Per una reazione $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, un avanzamento $\xi$, espresso in moli, produce le variazioni
$$
\Delta n_A=-a\xi,\qquad \Delta n_B=-b\xi,\qquad\Delta n_C=c\xi.
$$
Se la reazione procede fino a consumare uno dei reagenti, l'avanzamento massimo è
$$
\xi_{\max}=\min\left\{\frac{n_{A,0}}{a},\frac{n_{B,0}}{b}\right\}.
$$
Il reagente che determina questo minimo è il **reagente limitante**. Il rapporto tra le moli disponibili e il proprio coefficiente permette quindi di confrontare reagenti con coefficienti diversi. Prima del confronto, una massa $m$ si converte in moli con $n=\dfrac{m}{M}$, dove $M$ è la massa molare. La quantità teorica così calcolata presuppone che la trasformazione considerata sia completa e priva di reazioni secondarie.
:::

:::esempio{titolo="Un reagente in eccesso"}
Si fanno reagire $3{,}0\,\mathrm{mol}$ di $\mathrm{H_2}$ con $1{,}0\,\mathrm{mol}$ di $\mathrm{O_2}$. I rapporti stechiometrici valgono $\dfrac{3{,}0}{2}=1{,}5\,\mathrm{mol}$ e $\dfrac{1{,}0}{1}=1{,}0\,\mathrm{mol}$, quindi l'ossigeno è limitante. Per $\xi=1{,}0\,\mathrm{mol}$ si formano $2{,}0\,\mathrm{mol}$ di acqua e rimane $1{,}0\,\mathrm{mol}$ di idrogeno.
:::

## Velocità di reazione

:::definizione{#velocita titolo="Velocità media e istantanea"}
In una miscela omogenea a volume costante, la **velocità di reazione** si ricava dalla variazione di concentrazione divisa per il coefficiente stechiometrico. Per $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$ si definisce
$$
v=-\frac{1}{a}\frac{d[A]}{dt}
=-\frac{1}{b}\frac{d[B]}{dt}
=\frac{1}{c}\frac{d[C]}{dt}.
$$
I segni rendono positiva la velocità per il processo nel verso scritto. L'unità usuale è $\mathrm{mol\,L^{-1}\,s^{-1}}$. Per una velocità media su un intervallo si sostituisce la derivata con il rapporto tra la variazione di concentrazione e l'intervallo di tempo.

Nella decomposizione $2\mathrm{H_2O_2}\longrightarrow2\mathrm{H_2O}+\mathrm{O_2}$, la formazione di ossigeno a $0{,}010\,\mathrm{mol\,L^{-1}\,s^{-1}}$ corrisponde a una scomparsa di perossido di idrogeno a $0{,}020\,\mathrm{mol\,L^{-1}\,s^{-1}}$. Il consumo di un reagente e la velocità normalizzata della reazione sono dunque quantità diverse quando il coefficiente è diverso da uno.
:::

## Leggi cinetiche, ordini e molecolarità

:::definizione{#ordine titolo="Legge di velocità e ordine di reazione"}
Una legge cinetica sperimentale può avere la forma
$$
v=k[A]^\alpha[B]^\beta.
$$
$k$ è la costante cinetica alla temperatura considerata; $\alpha$ e $\beta$ sono gli ordini parziali e la loro somma è l'**ordine complessivo**. Gli esponenti si determinano dai dati. Se, lasciando invariata $[B]$, il raddoppio di $[A]$ quadruplica $v$, allora $2^\alpha=4$, quindi $\alpha=2$. Le unità di $k$ dipendono dall'ordine complessivo; per un ordine due sono $\mathrm{L\,mol^{-1}\,s^{-1}}$.

Per un singolo **stadio elementare**, la molecolarità conta le entità reagenti coinvolte in quell'evento ed è un intero positivo. Per uno stadio elementare bimolecolare $\mathrm A+\mathrm B\longrightarrow\mathrm P$ vale $v=k[A][B]$. Una reazione globale può procedere in più stadi, perciò i suoi coefficienti stechiometrici, da soli, non determinano gli ordini sperimentali. Lo stadio lento e gli eventuali preequilibri concorrono alla legge osservata.
:::

:::osservazione{#leggi-integrate titolo="Evoluzione della concentrazione"}
Per una scomparsa di primo ordine, con legge $-\dfrac{d[A]}{dt}=k[A]$ e $k$ costante, l'integrazione dà
$$
[A](t)=[A]_0e^{-kt},\qquad
\ln\frac{[A](t)}{[A]_0}=-kt,\qquad
 t_{1/2}=\frac{\ln2}{k}.
$$
Il tempo di dimezzamento è indipendente dalla concentrazione iniziale. Se invece $-\dfrac{d[A]}{dt}=k$, l'ordine è zero e $[A](t)=[A]_0-kt$ nell'intervallo in cui la legge è valida; il tempo di dimezzamento vale $\dfrac{[A]_0}{2k}$. Queste formule riguardano la velocità di scomparsa della specie scritta; un coefficiente stechiometrico diverso da uno richiede di distinguere tale velocità da $v$.
:::

## Temperatura ed energia di attivazione

:::definizione{#arrhenius titolo="Urti efficaci e legge di Arrhenius"}
Un urto conduce alla trasformazione quando l'orientazione e l'energia delle entità coinvolte consentono il processo. L'**energia di attivazione** $E_a$ caratterizza la dipendenza della costante cinetica dalla temperatura secondo la legge di Arrhenius
$$
k=Ae^{-\frac{E_a}{RT}},\qquad
\ln\frac{k_2}{k_1}=-\frac{E_a}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right).
$$
$A$ è il fattore preesponenziale, $R=8{,}314\,\mathrm{J\,mol^{-1}\,K^{-1}}$ e $T$ è la temperatura assoluta. La seconda relazione vale assumendo $A$ ed $E_a$ circa costanti nell'intervallo. Per $E_a>0$, un aumento di temperatura aumenta $k$.

Nella teoria dello stato di transizione, reagenti e prodotti sono collegati da configurazioni di massima energia libera lungo un percorso di reazione. La barriera di energia libera di attivazione $\Delta G^\ddagger$ descrive il costo di accesso a queste configurazioni. $E_a$ e $\Delta G^\ddagger$ sono grandezze collegate ma definite in modo diverso. La variazione di energia libera tra reagenti e prodotti determina invece la direzione termodinamica, quindi una trasformazione favorevole può procedere lentamente se la barriera è elevata.
:::

## Catalizzatori ed enzimi

:::definizione{#catalisi titolo="Catalisi e meccanismo di reazione"}
Un **catalizzatore** partecipa al meccanismo e viene rigenerato nel bilancio complessivo. Offre un percorso con barriera cinetica minore e aumenta la velocità con cui si raggiunge l'equilibrio. Agisce sulle velocità dei due versi in modo coerente con lo stesso equilibrio; a temperatura invariata lascia invariati $\Delta G^\circ$ e la costante di equilibrio.

Gli **enzimi** sono catalizzatori biologici, in prevalenza proteine. Il legame del substrato e la stabilizzazione dello stato di transizione possono favorire un percorso specifico. Quando i siti attivi sono quasi tutti occupati, l'aumento di substrato produce incrementi di velocità sempre minori. Temperatura e pH possono modificare attività e struttura dell'enzima. L'accoppiamento con un'altra reazione, come l'idrolisi dell'ATP, può rendere favorevole un processo complessivo; il solo catalizzatore non cambia il bilancio di energia libera di una reazione.
:::

:::esempio{titolo="Barriera ed energia della trasformazione"}
Due percorsi hanno gli stessi reagenti e prodotti. Nel primo la barriera dal lato dei reagenti è $80\,\mathrm{kJ\,mol^{-1}}$; nel secondo è $45\,\mathrm{kJ\,mol^{-1}}$. Se la differenza di energia tra prodotti e reagenti è $-20\,\mathrm{kJ\,mol^{-1}}$, essa resta uguale nei due percorsi. Le barriere del verso inverso sono rispettivamente $100$ e $65\,\mathrm{kJ\,mol^{-1}}$, perché entrambe si misurano a partire dal livello energetico dei prodotti.
:::

## Equilibrio chimico e costanti

:::definizione{#equilibrio titolo="Equilibrio dinamico e stato stazionario"}
Per una reazione reversibile in un sistema chiuso all'equilibrio, le velocità dei due versi coincidono e la composizione macroscopica rimane costante. L'equilibrio è **dinamico**, perché continuano i processi microscopici in entrambi i versi. Una trasformazione detta irreversibile nelle condizioni sperimentali ha invece una conversione inversa trascurabile nei tempi e nelle condizioni considerati.

In uno **stato stazionario** le concentrazioni restano costanti perché produzione, consumo ed eventuali flussi si compensano. Un sistema biologico alimentato continuamente può trovarsi in stato stazionario e mantenere flussi netti di materia ed energia. La costanza della concentrazione, da sola, non implica equilibrio chimico.
:::

:::definizione{#costante-equilibrio titolo="Legge di azione di massa e attività"}
Per $a\mathrm A+b\mathrm B\rightleftharpoons c\mathrm C+d\mathrm D$, la costante termodinamica di equilibrio è
$$
K=\frac{a_C^c a_D^d}{a_A^a a_B^b}\quad\text{all'equilibrio}.
$$
Le $a_i$ sono **attività**, quantità adimensionali riferite a uno stato standard. In una soluzione sufficientemente diluita e ideale si approssima $a_i\simeq\dfrac{[i]}{c^\circ}$, con $c^\circ=1\,\mathrm{mol\,L^{-1}}$. Per gas ideali si usa $a_i\simeq\dfrac{p_i}{p^\circ}$, con $p^\circ=1\,\mathrm{bar}$. Per un solido puro o un liquido puro presente nella fase considerata, l'attività è approssimata a uno. Perciò un solido puro non compare nell'espressione operativa di $K$.

Nei calcoli introduttivi si scrive spesso $K_c$ inserendo direttamente le concentrazioni in $\mathrm{mol\,L^{-1}}$. Se le concentrazioni non sono normalizzate, tale espressione può avere unità formali; nelle relazioni con $\ln K$ si usa sempre la costante termodinamica adimensionale. Negli esempi di questo capitolo i rapporti con $c^\circ$ sono sottintesi quando si usano i valori numerici delle concentrazioni nel modello ideale.
:::

:::esempio{titolo="Un equilibrio omogeneo"}
Per $\mathrm A\rightleftharpoons\mathrm B$, all'equilibrio si misurano $[A]=0{,}20\,\mathrm{mol\,L^{-1}}$ e $[B]=0{,}80\,\mathrm{mol\,L^{-1}}$. Nel modello ideale
$$
K=\frac{[B]}{[A]}=4.
$$
Il rapporto quattro descrive la composizione di equilibrio a quella temperatura. Una miscela preparata inizialmente con lo stesso rapporto è già all'equilibrio rispetto a questa reazione.
:::

## Quoziente di reazione ed energia libera

:::definizione{#quoziente-gibbs titolo="Confronto tra Q e K"}
Il **quoziente di reazione** $Q$ ha la stessa espressione di $K$, ma contiene le attività nella composizione attuale, che può essere lontana dall'equilibrio. A temperatura e pressione fissate,
$$
\Delta_rG=\Delta_rG^\circ+RT\ln Q,\qquad
\Delta_rG^\circ=-RT\ln K,\qquad
\Delta_rG=RT\ln\frac{Q}{K}.
$$
$\Delta_rG$ è la variazione di energia libera per mole di avanzamento. Se $Q<K$, essa è negativa e il processo è favorito nel verso scritto. Se $Q>K$, è favorito il verso inverso. Se $Q=K$, $\Delta_rG=0$ e la composizione soddisfa la condizione di equilibrio per la reazione.

$K>1$ implica $\Delta_rG^\circ<0$, quindi favorisce i prodotti rispetto ai reagenti nello specifico riferimento standard. La direzione di evoluzione di una miscela reale si determina però dal confronto di $Q$ con $K$. Il valore di $K$ non determina il tempo necessario per raggiungere l'equilibrio.
:::

## Perturbazioni ed equilibri collegati

:::osservazione{#le-chatelier titolo="Concentrazione, pressione e temperatura"}
Il **principio di Le Chatelier** descrive la variazione della composizione verso un nuovo equilibrio dopo una perturbazione. A temperatura costante, aggiungere un reagente o sottrarre un prodotto modifica $Q$; il confronto con $K$ stabilisce il verso iniziale di evoluzione. Una compressione di una miscela di gas ideali, a temperatura costante, favorisce il verso con meno moli gassose se i due membri ne contengono quantità diverse. Per $\mathrm{N_2}+3\mathrm{H_2}\rightleftharpoons2\mathrm{NH_3}$ favorisce quindi la formazione di ammoniaca.

A temperatura invariata, variazioni di concentrazione o pressione non modificano $K$. La temperatura può modificarlo. Nell'approssimazione in cui l'entalpia standard di reazione $\Delta_rH^\circ$ varia poco,
$$
\frac{d\ln K}{dT}=\frac{\Delta_rH^\circ}{RT^2}.
$$
Per una reazione endotermica nel verso scritto, $K$ aumenta all'aumentare di $T$; per una esotermica diminuisce. Aggiungere un gas inerte a volume e temperatura costanti lascia invariate le pressioni parziali dei reagenti ideali, quindi lascia invariato il loro equilibrio. A pressione totale costante, l'aggiunta di gas inerte aumenta invece il volume e può modificare l'equilibrio.
:::

:::osservazione{#equilibri-multipli titolo="Somma e inversione di reazioni"}
Invertire una reazione cambia il segno di $\Delta_rG^\circ$, quindi sostituisce $K$ con $\dfrac{1}{K}$. Moltiplicare tutti i coefficienti per un numero $n$ moltiplica $\Delta_rG^\circ$ per $n$, quindi porta a $K^n$. Sommando reazioni, le energie libere standard si sommano e le costanti si moltiplicano.

Per $\mathrm A\rightleftharpoons\mathrm B$ con $K_1=3$ e $\mathrm B\rightleftharpoons\mathrm C$ con $K_2=5$, l'equilibrio complessivo $\mathrm A\rightleftharpoons\mathrm C$ ha $K=K_1K_2=15$. Tutte le costanti devono riferirsi alla stessa temperatura e a stati standard coerenti. Negli equilibri multipli le concentrazioni si determinano soddisfacendo anche i bilanci di materia e di carica; una specie che partecipa a più equilibri compare contemporaneamente nelle rispettive espressioni.
:::

## Solubilità e precipitazione

:::definizione{#prodotto-solubilita titolo="Prodotto di solubilità"}
Per il sale poco solubile $\mathrm{MX(s)}\rightleftharpoons\mathrm{M^+(aq)}+\mathrm{X^-(aq)}$, il **prodotto di solubilità** è
$$
K_{\mathrm{ps}}=a_{M^+}a_{X^-}.
$$
In acqua pura, trascurando reazioni collaterali e non idealità, la solubilità molare $s$ dà $[M^+]=[X^-]=s$, quindi numericamente $K_{\mathrm{ps}}\simeq s^2$ quando $s$ è espresso in $\mathrm{mol\,L^{-1}}$ con riferimento $c^\circ$. Per $\mathrm{MX_2(s)}\rightleftharpoons\mathrm{M^{2+}}+2\mathrm{X^-}$ si ha invece $[M^{2+}]=s$ e $[X^-]=2s$, perciò $K_{\mathrm{ps}}\simeq4s^3$.

Il prodotto ionico $Q_{\mathrm{ps}}$ si calcola con le attività attuali. Se $Q_{\mathrm{ps}}>K_{\mathrm{ps}}$, la soluzione è sovrasatura e la precipitazione è termodinamicamente favorita; la formazione effettiva del solido può richiedere la nucleazione. Se $Q_{\mathrm{ps}}<K_{\mathrm{ps}}$, ulteriore solido può dissolversi se presente. Se $Q_{\mathrm{ps}}=K_{\mathrm{ps}}$, la soluzione è satura.
:::

:::osservazione{#ione-comune titolo="Ione comune ed equilibri biologici"}
Aggiungere uno ione già prodotto dalla dissoluzione aumenta il prodotto ionico e riduce la quantità di sale che può sciogliersi prima della saturazione. Se per $\mathrm{MX}$ la concentrazione iniziale di $X^-$ è $c_0$, nel modello ideale si impone $K_{\mathrm{ps}}\simeq s(c_0+s)$; quando $s\ll c_0$, si ottiene $s\simeq\dfrac{K_{\mathrm{ps}}}{c_0}$ usando valori numerici riferiti a $c^\circ$.

Negli equilibri di sali contenenti specie acide o basiche, il pH modifica la frazione presente nella forma ionica che compare in $K_{\mathrm{ps}}$. La protonazione dell'ossalato, per esempio, riduce l'ossalato libero e può favorire la dissoluzione dell'ossalato di calcio. Anche complessazione e forza ionica possono modificare la solubilità osservata.

La formazione di precipitati di ossalato di calcio o di urati nei liquidi biologici si studia considerando attività ioniche, pH e più equilibri simultanei. La concentrazione totale di un elemento comprende tutte le sue forme chimiche e può quindi differire dalla concentrazione dello ione libero richiesta nell'espressione del prodotto di solubilità.
:::
