---
titolo: "Carbonio, idrocarburi e stereochimica"
sommario: "Strutture e nomi dei composti organici, stereoisomeria, reattività di sostituzione e addizione e proprietà degli idrocarburi aromatici."
---


## Carbonio, ibridazione e rappresentazioni

:::definizione{#ibridazione titolo="Geometrie del carbonio"}
Un atomo di carbonio neutro forma ordinariamente quattro legami. Nel modello dell'**ibridazione**, quattro direzioni di legame equivalenti corrispondono a orbitali $sp^3$, tre direzioni a orbitali $sp^2$ e due direzioni a orbitali $sp$. Le geometrie locali sono rispettivamente tetraedrica, trigonale planare e lineare, con angoli ideali di $109{,}5^\circ$, $120^\circ$ e $180^\circ$.

Un legame semplice carbonio-carbonio è un legame $\sigma$. Un doppio legame comprende un legame $\sigma$ e uno $\pi$; un triplo legame comprende un legame $\sigma$ e due $\pi$. Perciò nell'etene i due carboni sono $sp^2$, mentre nell'etino sono $sp$. Questa descrizione permette di ricavare la geometria a partire dalla formula di struttura.
:::

:::osservazione{#rappresentazioni titolo="Formule condensate e scheletriche"}
La **formula molecolare** conta gli atomi, mentre la formula di struttura indica i collegamenti. La formula condensata $\mathrm{CH_3CH_2CH_3}$ descrive il propano. In una formula scheletrica ogni estremità e ogni vertice privo di simbolo rappresentano un carbonio; gli idrogeni legati al carbonio sono sottintesi fino alla valenza quattro. Gli eteroatomi, come ossigeno, azoto e zolfo, si scrivono esplicitamente.

Un cuneo pieno indica un legame diretto verso l'osservatore; un cuneo tratteggiato indica un legame diretto dietro il piano. Questa informazione serve per distinguere configurazioni che una formula condensata ordinaria lascia indeterminate.
:::

## Classi di composti e nomenclatura

:::definizione{#nomenclatura titolo="Idrocarburi e nomi IUPAC"}
Gli **idrocarburi** contengono carbonio e idrogeno. Gli alcani aciclici saturi hanno formula $\mathrm{C_nH_{2n+2}}$, i cicloalcani monociclici saturi $\mathrm{C_nH_{2n}}$. Un alchene con un doppio legame e senza anelli ha la stessa formula generale dei cicloalcani, quindi la formula molecolare da sola non distingue le due classi. Un eterociclo contiene nell'anello almeno un atomo diverso dal carbonio.

Per nominare un alcano ramificato si individua la catena più lunga, si numera in modo da ottenere la sequenza di locanti più bassa al primo punto di differenza e si indicano i sostituenti. $\mathrm{CH_3CH(CH_3)CH_2CH_3}$ è il 2-metilbutano. Per gli alcheni si include il doppio legame nella catena principale e se ne specifica la posizione, come in but-1-ene.
:::

:::esempio{titolo="Isomeria di costituzione"}
Butano e 2-metilpropano hanno entrambi formula $\mathrm{C_4H_{10}}$. Il primo ha una catena di quattro carboni; il secondo ha un carbonio legato a tre gruppi metile. Poiché cambia la connettività, sono **isomeri costituzionali**. La rotazione intorno a un legame semplice produce invece conformazioni della stessa molecola.
:::

## Stereoisomeri e chiralità

:::definizione{#stereoisomeri titolo="Enantiomeri, diastereoisomeri ed epimeri"}
Gli **stereoisomeri** hanno la stessa connettività e differente disposizione spaziale. Due enantiomeri sono immagini speculari non sovrapponibili. Un carbonio tetraedrico legato a quattro sostituenti differenti è un centro stereogenico; il butan-2-olo ne contiene uno, mentre il propan-2-olo ha due gruppi metile uguali e ne è privo.

I diastereoisomeri sono stereoisomeri che non sono enantiomeri. Gli **epimeri** differiscono nella configurazione di un solo centro stereogenico fra più centri presenti, come D-glucosio e D-mannosio al carbonio 2. Una molecola con più centri stereogenici può risultare achirale se possiede un'opportuna simmetria interna; si parla allora di forma meso. Il massimo di $2^n$ configurazioni per $n$ centri si riduce quando alcune strutture coincidono per simmetria.
:::

:::definizione{#isomeria-ez titolo="Configurazione dei doppi legami"}
La rotazione intorno al doppio legame richiede la perdita della sovrapposizione $\pi$. Perciò un alchene presenta isomeria geometrica quando ciascun carbonio del doppio legame porta due sostituenti differenti. In ciascuna coppia si individua il sostituente con priorità maggiore secondo le regole CIP. I due sostituenti prioritari dalla stessa parte determinano la configurazione $Z$; da parti opposte determinano $E$.

Il but-2-ene ammette le forme $E$ e $Z$. Il propene, $\mathrm{CH_2{=}CHCH_3}$, ha due idrogeni sul primo carbonio e quindi non ammette questa distinzione.
:::

## Priorità, Fischer e attività ottica

:::osservazione{#cip-fischer titolo="Assegnazione della configurazione"}
Le **regole CIP** confrontano prima il numero atomico degli atomi direttamente legati al centro stereogenico. A parità si confrontano, in ordine decrescente, gli atomi dello strato successivo fino alla prima differenza. Gli isotopi con massa maggiore hanno priorità maggiore; i legami multipli sono trattati mediante duplicazione formale degli atomi connessi.

Con il gruppo di priorità 4 rivolto dietro il piano, il percorso $1\to2\to3$ orario corrisponde a $R$, quello antiorario a $S$. In una proiezione di **Fischer** i legami orizzontali sono diretti verso l'osservatore e quelli verticali dietro il piano. Se il gruppo 4 è su un legame orizzontale, si inverte il risultato del percorso letto sul foglio. Una rotazione di $180^\circ$ della Fischer nel piano conserva la configurazione; una rotazione di $90^\circ$ la modifica.
:::

:::definizione{#rotazione-ottica titolo="Rotazione specifica e miscele racemiche"}
Un campione otticamente attivo ruota il piano della luce polarizzata. La rotazione osservata $\alpha$ dipende dalla lunghezza del percorso $\ell$, dalla concentrazione $c$, dalla temperatura e dalla lunghezza d'onda. Con $\ell$ in decimetri e $c$ in grammi per millilitro si definisce
$$
[\alpha]_{\lambda}^{T}=\frac{\alpha}{\ell c}.
$$
Il segno positivo indica una rotazione destrogira, il segno negativo una levogira. Le configurazioni $R$ e $S$ descrivono la struttura e **non determinano il segno** della rotazione. Anche le convenzioni D e L delle biomolecole sono distinte dal segno ottico.

Una miscela equimolare dei due enantiomeri è un **racemo** e ha rotazione netta nulla in un mezzo achirale, nelle condizioni in cui i contributi si compensano. Per una miscela dei soli due enantiomeri, l'eccesso enantiomerico è $ee=\left|x_R-x_S\right|\cdot100\%$, dove $x_R$ e $x_S$ sono le frazioni molari. Una miscela $75\%$ e $25\%$ ha $ee=50\%$.
:::

## Rottura dei legami e specie reattive

:::definizione{#intermedi titolo="Radicali e intermedi ionici"}
Nella rottura **omolitica** ogni frammento conserva un elettrone del legame e si formano radicali. Nella rottura eterolitica la coppia elettronica resta su un solo frammento e possono formarsi ioni. Un carbocatione ha un carbonio elettron-deficiente e carica positiva; un carbanione ha un carbonio con coppia elettronica e carica negativa.

Nei semplici carbocationi alchilici l'iperconiugazione e la donazione induttiva stabilizzano in genere le strutture più sostituite, perciò si osserva l'ordine terziario, secondario, primario. Un carbocatione benzilico o allilico può essere stabilizzato dalla delocalizzazione della carica. Per i carbanioni la stabilità dipende anche da gruppi elettron-attrattori, risonanza e carattere $s$ dell'orbitale che ospita la coppia; l'ordine dei carbocationi non si trasferisce automaticamente ai carbanioni.
:::

:::esempio{titolo="Clorurazione radicalica del metano"}
La luce può avviare una reazione a catena tra metano e cloro. Nell’**iniziazione**, l’omolisi forma due radicali:
$$
\mathrm{Cl_2}\xrightarrow{h\nu}2\mathrm{Cl}^{\boldsymbol{\cdot}}.
$$
La **propagazione** comprende due stadi che rigenerano un radicale cloro:
$$
\begin{aligned}
\mathrm{Cl}^{\boldsymbol{\cdot}}+\mathrm{CH_4}&\longrightarrow\mathrm{HCl}+\mathrm{CH_3}^{\boldsymbol{\cdot}},\\
\mathrm{CH_3}^{\boldsymbol{\cdot}}+\mathrm{Cl_2}&\longrightarrow\mathrm{CH_3Cl}+\mathrm{Cl}^{\boldsymbol{\cdot}}.
\end{aligned}
$$
Uno stadio di terminazione consuma due radicali, per esempio $2\mathrm{Cl}^{\boldsymbol{\cdot}}\longrightarrow\mathrm{Cl_2}$. La somma degli stadi di propagazione è $\mathrm{CH_4+Cl_2\longrightarrow CH_3Cl+HCl}$; ulteriori sostituzioni possono produrre miscele più clorurate.
:::


:::osservazione{#effetti-elettronici titolo="Effetto induttivo, risonanza e reagenti"}
L'**effetto induttivo** trasmette una polarizzazione attraverso i legami $\sigma$ e diminuisce con la distanza. Un alogeno esercita un effetto elettron-attrattore. La risonanza descrive una distribuzione elettronica mediante più forme limite con gli stessi nuclei; per esempio il carbossilato distribuisce la carica negativa sui due ossigeni.

Un nucleofilo dona una coppia elettronica a un centro elettrofilo. $\mathrm{HO^-}$, $\mathrm{HS^-}$ e le ammine sono nucleofili; il carbonio del carbonile è elettrofilo. La basicità riguarda l'equilibrio di acquisto di un protone, mentre la nucleofilicità riguarda la velocità di attacco a un elettrofilo; solvente e ingombro possono quindi modificare diversamente le due proprietà.
:::

## Alogenuri, sostituzioni ed eliminazioni

:::osservazione{#sostituzioni titolo="Meccanismi SN2 e SN1"}
In un **alogenuro alchilico** un alogeno è legato a un carbonio saturo. Nella sostituzione SN2 il nucleofilo attacca dal lato opposto al gruppo uscente in un unico stadio; la velocità è $v=k[\mathrm{RX}][\mathrm{Nu^-}]$. Un centro stereogenico coinvolto subisce inversione della disposizione spaziale. L'assegnazione finale $R$ o $S$ va ricalcolata, perché le priorità possono cambiare con il sostituente.

La SN1 procede attraverso la ionizzazione e la formazione di un carbocatione; nel modello elementare la velocità è $v=k[\mathrm{RX}]$. Substrati terziari, gruppi uscenti adatti e solventi ionizzanti favoriscono questo percorso. L'attacco ai due lati del carbocatione planare può dare entrambe le configurazioni; coppie ioniche e solvente possono impedire una racemizzazione esattamente equimolare. Sono possibili riarrangiamenti del carbocatione.
:::

:::osservazione{#eliminazioni titolo="Meccanismi E2 ed E1"}
Un'eliminazione rimuove un gruppo uscente e un idrogeno da carboni adiacenti, formando un doppio legame. La E2 è concertata e ha velocità $v=k[\mathrm{RX}][\mathrm{B}]$; la disposizione antiperiplanare del legame C-H rispetto al legame C-X permette la sovrapposizione degli orbitali. Una base forte e il riscaldamento possono favorirla rispetto alla sostituzione.

La E1 comprende la formazione di un carbocatione seguita dalla perdita di un protone ed è spesso in competizione con la SN1. La distribuzione dei prodotti dipende da struttura, base, solvente e temperatura. Per esempio il 2-bromobutano può dare but-1-ene e but-2-ene; con basi poco ingombrate il but-2-ene è spesso prevalente perché è più sostituito. Perciò il solo nome del substrato non basta per scegliere un unico meccanismo.
:::

## Alcani, cicloalcani e alcheni

:::osservazione{#alcani-cicloalcani titolo="Struttura, proprietà e ossidazione"}
Gli alcani hanno legami C-C e C-H poco polari e sono scarsamente solubili in acqua. L'aumento della superficie molecolare intensifica le interazioni dispersive e tende ad aumentare la temperatura di ebollizione nelle serie lineari. La ramificazione riduce in genere l'area di contatto e abbassa l'ebollizione tra isomeri confrontabili.

Nei cicloalcani la **tensione d'anello** comprende contributi angolari, torsionali e sterici. Il ciclopropano ha angoli molto lontani da quelli tetraedrici; il cicloesano a sedia riduce tensione angolare e torsionale. Le conformazioni a sedia si interconvertono e scambiano posizioni assiali ed equatoriali. Catene idrocarburiche poco polari ricorrono nei lipidi; l'ossidazione biologica delle catene è un processo catalizzato a più stadi.

Nella combustione completa con ossigeno in eccesso carbonio e idrogeno producono rispettivamente $\mathrm{CO_2}$ e $\mathrm{H_2O}$, come in
$$
\mathrm{C_3H_8}+5\,\mathrm{O_2}\longrightarrow3\,\mathrm{CO_2}+4\,\mathrm{H_2O}.
$$
:::

:::osservazione{#alcheni-dieni titolo="Addizioni e coniugazione"}
Il legame $\pi$ degli **alcheni** può reagire con un elettrofilo; il successivo attacco di un nucleofilo porta a un prodotto di addizione. Nell'addizione ionica di HBr al propene, in assenza di perossidi, il percorso che forma il carbocatione secondario conduce prevalentemente al 2-bromopropano. La stabilità dell'intermedio spiega l'orientamento di Markovnikov; condizioni radicaliche con perossidi possono cambiare il risultato per HBr.

Un diene coniugato presenta doppi legami separati da un legame semplice, come $\mathrm{CH_2{=}CH{-}CH{=}CH_2}$. Gli orbitali $p$ contigui consentono la delocalizzazione elettronica, che stabilizza il sistema e permette addizioni 1,2 e 1,4. Un doppio legame cis in una catena lipidica introduce una variazione nella disposizione della catena e modifica le interazioni fra molecole.
:::

## Aromaticità e derivati del benzene

:::definizione{#aromaticita titolo="Sistemi aromatici"}
Un sistema **aromatico** semplice è ciclico, planare, coniugato lungo l'intero anello e possiede $4n+2$ elettroni $\pi$, con $n$ intero non negativo. Il benzene ha sei elettroni $\pi$ delocalizzati e legami equivalenti. La sola presenza di doppi legami in un anello non basta; il cicloottatetraene assume una geometria non planare ed evita l'antiaromaticità che avrebbe un anello planare coniugato a otto elettroni $\pi$.

La pirimidina è un eterociclo aromatico a sei termini con due atomi di azoto. Le purine comprendono due anelli condensati e un sistema aromatico con dieci elettroni $\pi$. Queste strutture ricorrono nelle basi degli acidi nucleici.
:::

:::osservazione{#sostituzione-aromatica titolo="Sostituzione elettrofila e sostituenti"}
Rispetto a un sostituente al carbonio 1 del benzene, le posizioni **orto**, **meta** e **para** corrispondono rispettivamente ai rapporti 1,2; 1,3 e 1,4.

Nella **sostituzione elettrofila aromatica** un elettrofilo si lega all'anello formando un intermedio che perde poi un protone e recupera l'aromaticità. I sostituenti influenzano velocità e posizione dell'attacco. Il gruppo metile è attivante e orienta prevalentemente in orto e para; il nitrogruppo è disattivante e orienta prevalentemente in meta. Gli alogeni sono disattivanti ma orto-para orientanti, perché effetto induttivo e donazione per risonanza agiscono diversamente sui vari intermedi.

La tossicità dipende dalla specifica struttura e dal metabolismo. Il benzene può formare metaboliti reattivi con effetti sul midollo osseo; alcuni idrocarburi policiclici, come il benzo[a]pirene, possono essere trasformati in intermedi capaci di reagire con il DNA. L'aromaticità da sola non determina il profilo tossicologico di una sostanza.
:::
