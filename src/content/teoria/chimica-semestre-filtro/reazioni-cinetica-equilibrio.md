---
titolo: "Reazioni chimiche, cinetica ed equilibrio"
sommario: "Conservazioni, velocità e direzione delle trasformazioni: bilanci, meccanismi, catalisi, attività, equilibri e precipitazione, con esperimenti e modelli biomedici."
---

## Bilanciare una trasformazione e prevederne le quantità

:::definizione{#bilanciamento titolo="Atomi, carica ed energia"}
Nella combustione dell'etanolo il carbonio passa a diossido di carbonio e l'idrogeno ad acqua. Il numero di atomi di ciascun elemento permette di stabilire quante molecole partecipano. Si conservano prima carbonio e idrogeno, poi si completa il conteggio dell'ossigeno:
$$
\mathrm{C_2H_5OH}+3\mathrm{O_2}\longrightarrow2\mathrm{CO_2}+3\mathrm{H_2O}.
$$
I coefficienti indicano rapporti fra quantità di sostanza; gli indici appartengono alla formula della specie. Cambiare l'indice dell'acqua produrrebbe un'altra sostanza. Il **bilanciamento** conserva atomi e carica totale. Nell'equazione ionica
$$
\mathrm{Ca^{2+}}+\mathrm{CO_3^{2-}}\longrightarrow\mathrm{CaCO_3(s)}
$$
la somma delle cariche è zero in entrambi i membri. Gli ioni spettatori, presenti senza variazioni nei due membri dell'equazione completa, si possono eliminare per ottenere l'equazione ionica netta.

La conservazione della massa riguarda l'insieme delle sostanze coinvolte. Una soluzione in recipiente aperto può perdere massa quando libera un gas che esce dal recipiente. Anche l'energia si conserva considerando sistema e ambiente: una reazione esotermica trasferisce energia all'ambiente e modifica l'energia del sistema. Il bilanciamento della sola materia non determina né il calore scambiato né la velocità della trasformazione.
:::

:::definizione{#stechiometria titolo="Avanzamento, limitante e resa"}
Per $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, l'avanzamento $\xi$ misura in moli quanto è progredita la reazione:
$$
\Delta n_A=-a\xi,\qquad\Delta n_B=-b\xi,\qquad\Delta n_C=c\xi.
$$
Ogni reagente disponibile impone un limite. Se la trasformazione può arrivare a completamento,
$$
\xi_{\max}=\min\left\{\dfrac{n_{A,0}}{a},\dfrac{n_{B,0}}{b}\right\}.
$$
Il **reagente limitante** esaurisce per primo la disponibilità rispetto al rapporto richiesto. Per confrontare masse si calcola prima $n=\dfrac{m}{M}$, con $M$ massa molare. Il reagente di massa minore può essere in eccesso quando massa molare e coefficiente sono diversi.

Con $3\,\mathrm{mol}$ di idrogeno e $1\,\mathrm{mol}$ di ossigeno, la reazione $2\mathrm{H_2}+\mathrm{O_2}\longrightarrow2\mathrm{H_2O}$ ha $\xi_{\max}=1\,\mathrm{mol}$. Si possono formare $2\,\mathrm{mol}$ di acqua e resta $1\,\mathrm{mol}$ di idrogeno. La previsione è una quantità teorica: equilibrio sfavorevole, reazioni secondarie o perdite di recupero possono ridurre il prodotto isolato. La resa percentuale è $\dfrac{n_{\mathrm{isolato}}}{n_{\mathrm{teorico}}}\cdot100\%$ per lo stesso prodotto puro. Una resa apparente superiore al cento per cento suggerisce di controllare purezza, acqua residua e dati iniziali.

![Tre moli di idrogeno e una di ossigeno producono al massimo due moli di acqua, lasciando una mole di idrogeno.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/bilancio-it.svg)
:::

## Misurare la velocità e ricostruire una legge cinetica

:::definizione{#velocita titolo="Variazione di una specie e velocità normalizzata"}
Una misura di concentrazione ripetuta nel tempo descrive la cinetica. In una miscela omogenea a volume costante, con una sola reazione $a\mathrm A+b\mathrm B\longrightarrow c\mathrm C$, la velocità normalizzata è
$$
v=-\dfrac{1}{a}\dfrac{d[A]}{dt}=-\dfrac{1}{b}\dfrac{d[B]}{dt}=\dfrac{1}{c}\dfrac{d[C]}{dt}.
$$
Dividere per i coefficienti produce lo stesso valore qualunque specie si osservi. La velocità media usa variazioni finite di concentrazione e tempo; quella istantanea corrisponde alla pendenza della tangente. L'unità usuale è $\mathrm{mol\,L^{-1}\,s^{-1}}$.

Per $2\mathrm{H_2O_2}\longrightarrow2\mathrm{H_2O}+\mathrm{O_2}$, una formazione di ossigeno di $0{,}010\,\mathrm{mol\,L^{-1}\,s^{-1}}$ corrisponde a un consumo di perossido doppio. Se il volume cambia, anche una semplice diluizione modifica la concentrazione: occorre separare questo contributo da quello chimico, oppure lavorare con l'avanzamento e la velocità $\dfrac{1}{V}\dfrac{d\xi}{dt}$.
:::

:::definizione{#ordine titolo="Ordine sperimentale e stadi elementari"}
Una legge osservata può essere $v=k[A]^\alpha[B]^\beta$. Gli esponenti sono gli **ordini parziali**; la loro somma è l'ordine complessivo. Si ricavano variando una concentrazione alla volta, mantenendo temperatura e altre condizioni. Se raddoppiare $[A]$ quadruplica la velocità, allora $2^\alpha=4$ e $\alpha=2$. Se una specie è in grande eccesso, la sua concentrazione può restare quasi costante: in $v=k[A][B]$, il prodotto $k[B]$ diventa una costante osservata e la cinetica appare di primo ordine rispetto ad A.

Gli ordini possono essere zero, frazionari o negativi nell'intervallo sperimentale studiato. Un ordine negativo esprime una diminuzione della velocità all'aumentare di quella specie, compatibile con un effetto inibitorio. Le unità di $k$ si ricavano dalla legge: per ordine complessivo $n$ sono $\mathrm{(mol\,L^{-1})^{1-n}\,s^{-1}}$.

La **molecolarità** conta le entità reagenti di un singolo evento elementare. È un intero positivo: uno per uno stadio unimolecolare, due per uno bimolecolare. Per lo stadio elementare $\mathrm A+\mathrm B\longrightarrow\mathrm P$ la dipendenza è $k[A][B]$. Una reazione globale comprende invece anche intermedi, stadi successivi e preequilibri; i suoi coefficienti non bastano a ricavare gli ordini. Un intermedio viene prodotto in uno stadio e consumato in un altro, quindi scompare dal bilancio globale. Anche uno stadio rapido può influenzare la velocità osservata se determina la concentrazione dell'intermedio che reagisce nello stadio successivo.
:::

:::osservazione{#leggi-integrate titolo="Come cambia la concentrazione nel tempo"}
Le leggi integrate seguenti descrivono la scomparsa di A con $k$ costante, a volume costante e senza un contributo inverso apprezzabile:

| Legge di scomparsa | Relazione integrata | Tempo di dimezzamento |
| --- | --- | --- |
| $-\dfrac{d[A]}{dt}=k$ | $[A]=[A]_0-kt$ | $\dfrac{[A]_0}{2k}$ |
| $-\dfrac{d[A]}{dt}=k[A]$ | $\ln\dfrac{[A]}{[A]_0}=-kt$ | $\dfrac{\ln2}{k}$ |
| $-\dfrac{d[A]}{dt}=k[A]^2$ | $\dfrac{1}{[A]}=\dfrac{1}{[A]_0}+kt$ | $\dfrac{1}{k[A]_0}$ |

Nel primo ordine si perde la stessa *frazione* in intervalli uguali; nell'ordine zero si perde la stessa *quantità per volume*. La legge di ordine zero cessa di descrivere il sistema prima di prevedere concentrazioni negative. I grafici di $[A]$, $\ln\dfrac{[A]}{[A]_0}$ o $\dfrac{1}{[A]}$ rispetto al tempo permettono di confrontare i modelli, tenendo conto dell'errore di misura. Le formule della tabella usano il coefficiente della legge di scomparsa: per una specie con coefficiente stechiometrico due, esso può differire da quello della velocità normalizzata.

Nel grafico si confrontano modelli con la stessa concentrazione iniziale e la stessa velocità iniziale di scomparsa $v_0$. Il tempo normalizzato è $\tau=\dfrac{v_0t}{[A]_0}$: così le differenze fra le curve mostrano come la velocità cambia durante il consumo.

![Curve di concentrazione normalizzata: diminuzione lineare nell'ordine zero, esponenziale nel primo e iperbolica nel secondo, con uguale pendenza iniziale.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/cinetiche-it.svg)
:::

## Barriere, temperatura e catalisi

:::definizione{#arrhenius titolo="Urti efficaci e stato di transizione"}
Aumentare la concentrazione può aumentare la frequenza degli incontri; la trasformazione richiede anche orientazione e condizioni energetiche appropriate. Nelle reazioni eterogenee conta la superficie accessibile del solido: una polvere e un blocco della stessa massa possono reagire a velocità diverse. La temperatura modifica distribuzione delle energie e costanti cinetiche.

La legge di Arrhenius collega la costante alla temperatura assoluta:
$$
k=Ae^{-\dfrac{E_a}{RT}},\qquad
\ln\dfrac{k_2}{k_1}=-\dfrac{E_a}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
$A$ è il fattore preesponenziale; $R=8{,}314\,\mathrm{J\,mol^{-1}\,K^{-1}}$. La seconda espressione assume $A$ ed $E_a$ circa costanti. Per $E_a>0$, il riscaldamento aumenta $k$. Nel grafico di $\ln k$ contro $\dfrac{1}{T}$ la pendenza è $-\dfrac{E_a}{R}$, quindi una pendenza più negativa corrisponde a maggiore sensibilità alla temperatura. Le energie espresse in kilojoule vanno convertite quando si usa questo valore di $R$. Nei grafici logaritmici di $k$ si intende il suo valore numerico in una unità fissata: cambiare tale unità sposta l’intercetta, non la pendenza.

Lo **stato di transizione** corrisponde alla regione di massima energia libera lungo un passaggio del percorso. Un intermedio occupa invece un minimo locale e può avere una durata misurabile. La barriera $\Delta G^\ddagger$ si misura dal livello di partenza al massimo pertinente. L'energia di attivazione di Arrhenius e la barriera di energia libera hanno definizioni diverse; nessuna delle due coincide in generale con la variazione di Gibbs tra reagenti e prodotti. Una trasformazione favorevole può quindi essere lenta.

La **teoria dello stato di transizione** collega la velocità alla popolazione di configurazioni attivate in un particolare equilibrio statistico con i reagenti e al loro passaggio verso i prodotti. Una barriera libera maggiore riduce questa popolazione. Il complesso attivato non è un intermedio isolabile collocato in un minimo.
:::

:::definizione{#catalisi titolo="Percorsi alternativi ed enzimi"}
Un catalizzatore partecipa agli stadi del meccanismo ed è rigenerato nel bilancio. Il percorso catalizzato presenta barriere cinetiche più favorevoli e permette di raggiungere prima l'equilibrio. A temperatura invariata conserva l'energia libera standard della trasformazione e il valore di $K$. Anche il processo inverso viene accelerato in modo compatibile con lo stesso rapporto di equilibrio.

Gli enzimi sono catalizzatori biologici, in prevalenza proteici; esistono anche RNA catalitici. Il riconoscimento dei substrati e la stabilizzazione dello stato di transizione contribuiscono alla selettività. Quando i siti attivi sono quasi tutti occupati, aumentare il substrato ha effetti progressivamente minori sulla velocità: l'ordine osservato può cambiare con l'intervallo di concentrazione. Aggiungere enzima attivo può aumentare la capacità catalitica. Un aumento di temperatura può invece accelerare passaggi chimici e contemporaneamente ridurre l'enzima funzionante per alterazione strutturale.

L'accoppiamento a un'altra reazione, per esempio l'idrolisi dell'ATP, cambia il bilancio della trasformazione complessiva perché aggiunge reagenti e prodotti. La catalisi, da sola, conserva il bilancio della reazione considerata.

![Due profili di energia libera con gli stessi livelli iniziale e finale e diverse barriere; il percorso catalizzato mantiene invariata la differenza tra reagenti e prodotti.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/barriere-it.svg)
:::

## Riconoscere l'equilibrio e scrivere la costante

:::definizione{#equilibrio titolo="Equilibrio dinamico e stato stazionario"}
In un sistema chiuso, la composizione può diventare costante mentre continuano trasformazioni nei due versi. All'**equilibrio chimico** le velocità diretta e inversa si compensano e manca un avanzamento netto. Le concentrazioni di reagenti e prodotti possono essere diverse. Una marcatura isotopica può rivelare lo scambio microscopico anche quando la composizione macroscopica resta costante.

Una trasformazione si descrive come praticamente irreversibile quando il processo inverso è trascurabile nei tempi e nelle condizioni osservati. Il simbolo a freccia singola non dimostra da solo l'impossibilità fisica del processo inverso.

In uno **stato stazionario**, invece, si compensano produzione, consumo e flussi attraverso i confini. Una cellula alimentata può mantenere costante un metabolita mentre lo produce e lo consuma con un flusso netto continuo. La sola concentrazione stabile non identifica l'equilibrio: servono informazioni sui processi che la mantengono.

![Confronto fra reazione reversibile con velocità opposte uguali e sistema aperto mantenuto costante da ingresso e consumo.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/stazionario-it.svg)
:::

:::definizione{#costante-equilibrio titolo="Attività e stati standard"}
Per $a\mathrm A+b\mathrm B\rightleftharpoons c\mathrm C+d\mathrm D$ il rapporto di equilibrio è
$$
K=\dfrac{a_C^c a_D^d}{a_A^a a_B^b}.
$$
Questa è la **legge d'azione di massa all'equilibrio**: i coefficienti della reazione diventano esponenti delle attività. L'uso dei coefficienti in questa relazione termodinamica non autorizza a usarli come ordini di una legge cinetica globale.

Le attività $a_i$ sono adimensionali. In una soluzione si può scrivere $a_i=\gamma_i\dfrac{[i]}{c^\circ}$, dove $\gamma_i$ corregge la non idealità e $c^\circ=1\,\mathrm{mol\,L^{-1}}$. Nel modello ideale diluito si assume $\gamma_i\simeq1$. Per gas ideali si usa $a_i=\dfrac{p_i}{p^\circ}$ con $p^\circ=1\,\mathrm{bar}$. Solidi e liquidi puri hanno attività unitaria nel consueto modello riferito alla fase pura.

Un solido puro presente non compare quindi come concentrazione variabile in $K$. Aggiungerne altro può cambiare superficie e velocità di raggiungimento dell'equilibrio, mantenendo la stessa composizione satura. Questa conclusione richiede che la fase solida sia effettivamente presente: se tutto il solido si dissolve prima della saturazione, l'uguaglianza di equilibrio di dissoluzione non può essere imposta.

Le forme introduttive $K_c$ e $K_p$ spesso utilizzano concentrazioni o pressioni senza esplicitare la normalizzazione. Per collegarle all'energia libera occorre una costante adimensionale e uno stato standard coerente. Nei calcoli ideali di solubilità si useranno i valori numerici delle concentrazioni in $\mathrm{mol\,L^{-1}}$, sottintendendo la divisione per $c^\circ$.
:::

## Stabilire il verso con Q e l'energia libera

:::definizione{#quoziente-gibbs titolo="Composizione attuale e composizione di equilibrio"}
Il **quoziente di reazione** $Q$ usa la stessa espressione della costante, inserendo le attività attuali. Per una trasformazione a temperatura e pressione fissate,
$$
\Delta_rG=\Delta_rG^\circ+RT\ln Q,
$$
$$
\Delta_rG^\circ=-RT\ln K,\qquad
\Delta_rG=RT\ln\dfrac{Q}{K}.
$$
$\Delta_rG$ è la derivata dell'energia libera rispetto all'avanzamento, nelle condizioni specificate. Il confronto determina il verso inizialmente favorito: con $Q<K$ si ha $\Delta_rG<0$ e avanzamento diretto; con $Q>K$ è favorito quello inverso; con $Q=K$ la variazione è nulla per la reazione considerata.

Per $\mathrm A\rightleftharpoons\mathrm B$ con $K=4$, una miscela ideale con $[A]=0{,}80\,\mathrm{mol\,L^{-1}}$ e $[B]=0{,}20\,\mathrm{mol\,L^{-1}}$ ha $Q=0{,}25$. La conversione verso B aumenta il rapporto fino a quattro. Partendo invece da $Q=20$, si forma A anche se $K>1$. Il valore della costante indica una preferenza relativa nel riferimento standard; la direzione attuale dipende anche dalla composizione.

Per calcolare le concentrazioni finali si scrive un bilancio: per $\mathrm A\rightleftharpoons\mathrm B$, $[A]=[A]_0-x$ e $[B]=[B]_0+x$ a volume costante. Si sostituisce in $K$ e si sceglie una soluzione compatibile con concentrazioni non negative. Per coefficienti diversi, anche le variazioni sono diverse. La sola indicazione del verso non fornisce la quantità trasformata e il valore di $K$ non fornisce il tempo necessario.

![Segno di delta G diviso RT rispetto al logaritmo di Q su K: negativo verso i prodotti, zero all'equilibrio, positivo verso i reagenti.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/quoziente-it.svg)
:::

## Perturbare concentrazione, pressione e temperatura

:::osservazione{#le-chatelier titolo="Equilibrio mobile con condizioni esplicite"}
Il principio di Le Chatelier descrive la variazione verso un nuovo equilibrio dopo una perturbazione. Il confronto tra $Q$ e $K$ rende quantitativo il ragionamento. A temperatura costante, aggiungere un reagente modifica subito $Q$; la composizione cambia successivamente mediante la reazione. Il valore di $K$ resta quello della temperatura considerata.

Per una miscela ideale di gas, moltiplicare tutte le pressioni parziali per $\lambda$ moltiplica $Q$ per $\lambda^{\Delta\nu}$, dove $\Delta\nu$ è il numero stechiometrico di moli gassose dei prodotti meno quello dei reagenti. La compressione favorisce quindi il lato con meno moli gassose. Se $\Delta\nu=0$, questa perturbazione uniforme lascia invariato $Q$.

L'aggiunta di un gas inerte richiede di specificare il vincolo. A volume e temperatura costanti, $p_i=\dfrac{n_iRT}{V}$ resta invariata per ogni specie reagente: aumenta la pressione totale, mentre $Q$ non cambia. A pressione totale e temperatura costanti, il recipiente si espande e le pressioni parziali diminuiscono; se $\Delta\nu\ne0$, l'equilibrio può spostarsi. Queste conclusioni assumono gas ideali e assenza di interazioni o reazioni dell'inerte.

La temperatura modifica invece la costante. Nell'intervallo in cui l'entalpia standard $\Delta_rH^\circ$ è circa costante,
$$
\ln\dfrac{K_2}{K_1}=-\dfrac{\Delta_rH^\circ}{R}\left(\dfrac{1}{T_2}-\dfrac{1}{T_1}\right).
$$
Per il verso endotermico, il riscaldamento aumenta $K$; per quello esotermico lo diminuisce. Una maggiore velocità al caldo può accompagnarsi a una minore resa di equilibrio per una sintesi esotermica. Arrhenius descrive la velocità, mentre questa relazione descrive la composizione di equilibrio.

![Per N2O4 in equilibrio con due NO2, la compressione aumenta Q, il gas inerte a volume costante lascia Q invariato e quello a pressione costante lo riduce.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/gas-inerte-it.svg)
:::

## Collegare più reazioni

:::osservazione{#equilibri-multipli titolo="Costanti e bilanci simultanei"}
Le energie libere standard si sommano quando si sommano equazioni chimiche. Dalla relazione con $\ln K$ seguono tre regole:

| Operazione sull'equazione | Nuova costante |
| --- | --- |
| Inversione | $\dfrac{1}{K}$ |
| Coefficienti moltiplicati per $n$ | $K^n$ |
| Somma di due equazioni | $K_1K_2$ |

Per $\mathrm A\rightleftharpoons\mathrm B$ con $K_1=3$ e $\mathrm B\rightleftharpoons\mathrm C$ con $K_2=5$, la reazione complessiva $\mathrm A\rightleftharpoons\mathrm C$ ha $K=15$. Il rapporto fra C e A dipende da entrambe le trasformazioni. Un catalizzatore della seconda reazione modifica il tempo di rilassamento, conservando questo prodotto di costanti.

Le regole richiedono stessa temperatura, specie chimiche corrispondenti e stati standard coerenti. Nell'accoppiamento biochimico occorre inoltre che un meccanismo colleghi effettivamente le trasformazioni; sommare due equazioni sulla carta non garantisce l'accoppiamento fisico. Per equilibri simultanei si impongono tutte le relazioni insieme ai bilanci di materia e di carica. La quantità totale di un elemento può distribuirsi fra ione libero, complessi e specie protonate: sostituire indiscriminatamente il totale all'attività libera altera il quoziente.

![Le costanti di A in B e di B in C si moltiplicano per ottenere quella di A in C; la reazione inversa ha costante reciproca.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/costanti-it.svg)
:::

## Dissoluzione, precipitazione e sistemi biologici

:::definizione{#prodotto-solubilita titolo="Solubilità, saturazione e nucleazione"}
Un sale poco solubile può lasciare in soluzione una quantità misurabile di ioni. Per una fase solida definita,
$$
\mathrm{MX(s)}\rightleftharpoons\mathrm{M^+(aq)}+\mathrm{X^-(aq)},\qquad
K_{\mathrm{ps}}=a_{M^+}a_{X^-}.
$$
In acqua pura, con idealità e assenza di altri equilibri, la solubilità molare $s$ dà $[M^+]=[X^-]=s$. Usando valori numerici normalizzati a $c^\circ$, si ottiene $K_{\mathrm{ps}}\simeq s^2$. Per $\mathrm{MX_2}$ si ha invece $[M^{2+}]=s$ e $[X^-]=2s$, quindi $K_{\mathrm{ps}}\simeq4s^3$. Costanti di sali con stechiometrie diverse non si possono ordinare automaticamente come solubilità molari.

Il prodotto ionico attuale $Q_{\mathrm{ps}}$ distingue tre situazioni. Sotto $K_{\mathrm{ps}}$, altro solido presente può dissolversi; all'uguaglianza si ha saturazione; sopra $K_{\mathrm{ps}}$, la precipitazione è termodinamicamente favorita. Una soluzione sovrasatura può restare temporaneamente limpida perché la formazione di un nucleo cristallino richiede di superare una barriera. Aggiungere un piccolo cristallo può abbreviare il tempo di comparsa del precipitato senza modificare la costante.

Quando si mescolano soluzioni, il prodotto ionico iniziale si calcola dopo la diluizione nel volume totale, prima di un'apprezzabile precipitazione. L'eventuale quantità precipitata richiede poi un bilancio e le concentrazioni residue di equilibrio.

![Tre rapporti fra prodotto ionico e prodotto di solubilità: dissoluzione possibile, saturazione e precipitazione favorita con possibile ritardo di nucleazione.](/figure/chimica-semestre-filtro/reazioni-cinetica-equilibrio/solubilita-it.svg)
:::

:::osservazione{#ione-comune titolo="Specie libere, ione comune e rilevanza biomedica"}
Se una soluzione contiene già X, la dissoluzione di MX raggiunge la saturazione con meno sale aggiunto. Nel modello ideale, indicando con $c_0$ la concentrazione iniziale dello ione comune,
$$
K_{\mathrm{ps}}\simeq s(c_0+s),\qquad
s\simeq\dfrac{K_{\mathrm{ps}}}{c_0}\quad\text{se }s\ll c_0.
$$
Dopo il calcolo si controlla che $\dfrac{s}{c_0}$ sia piccolo. Il valore di $K_{\mathrm{ps}}$ resta invariato a temperatura costante; cambia la solubilità nelle nuove condizioni. Una forte complessazione o una variazione importante dei coefficienti di attività può richiedere un modello più completo.

Nell'ossalato di calcio compaiono le attività di calcio libero e ossalato libero. Legare calcio in un complesso o protonare ossalato riduce una delle attività e può favorire la dissoluzione della fase considerata. Per prevedere l'esito servono anche gli equilibri che determinano queste frazioni libere. Una misura di calcio totale, da sola, non è una misura del prodotto ionico.

Urato e acido urico richiedono una distinzione delle specie e dei solidi. Un equilibrio semplificato di urato monosodico coinvolge sodio e anione urato; l'acido urico neutro può formare una fase solida diversa. Ridurre il pH aumenta la frazione protonata e può favorire cristalli di acido urico nelle urine, anche mentre diminuisce l'anione urato libero. Non esiste quindi una previsione universale ottenuta usando lo stesso prodotto di solubilità per entrambi i solidi. La formazione dei calcoli renali dipende da composizione, attività, volume, pH e cinetica della cristallizzazione; il modello termodinamico individua la tendenza rispetto a una fase specificata.
:::
