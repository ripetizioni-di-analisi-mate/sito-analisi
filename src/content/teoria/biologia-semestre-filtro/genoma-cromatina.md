---
titolo: "Genoma, cromatina ed epigenetica"
sommario: "Dal conteggio dei cromosomi ai nucleosomi: organizzazione del genoma, accessibilità, memoria epigenetica e sequenze mobili."
---

## Cromosomi, cromatidi e quantità di DNA

:::definizione{#cromosomi titolo="Un cromosoma prima e dopo la replicazione"}
Una cellula deve conservare il DNA, renderne disponibili alcune regioni e distribuirne una copia alle cellule figlie. Un **cromosoma eucariotico** è un'unità di organizzazione del DNA associato a proteine. Prima della replicazione comprende una molecola lineare di DNA a doppio filamento; dopo la replicazione comprende due cromatidi fratelli, ciascuno con una propria molecola di DNA. I due filamenti complementari di una doppia elica appartengono quindi allo stesso cromatidio.

I cromosomi omologhi materno e paterno portano gli stessi tipi di geni in loci corrispondenti, ma possono possedere alleli diversi. I cromatidi fratelli derivano invece dalla replicazione dello stesso cromosoma. Un organismo diploide possiede due corredi di omologhi. Indichiamo con $n$ il numero di cromosomi di un corredo e con $C$ la quantità di DNA nucleare di un corredo aploide non replicato.

In una cellula somatica umana normale in G1 si contano 46 cromosomi, 46 molecole di DNA e una quantità $2C$. Dopo la fase S e prima della separazione dei fratelli si contano ancora 46 cromosomi, ciascuno duplicato, e 92 molecole di DNA; la quantità è $4C$. La ploidia resta $2n$, perché la replicazione copia le molecole senza aggiungere un nuovo insieme di omologhi. Quando i fratelli si separano in anafase, ciascuno diventa un cromosoma indipendente. Il conteggio deve perciò precisare se riguarda l'intera cellula o un futuro nucleo figlio.

![Un cromosoma non replicato e lo stesso cromosoma duplicato](/figure/biologia-semestre-filtro/genoma-cromatina/cromosoma-it.svg)
:::

:::esempio{titolo="Leggere una misura di DNA"}
In una specie con $2n=8$, una cellula in G1 ha 8 cromosomi e 8 molecole di DNA. Dopo una replicazione completa ha 8 cromosomi e 16 molecole. Se un colorante lega il DNA in modo proporzionale alla sua quantità, il segnale passa, idealmente, da 100 a 200 unità. Da questo raddoppio si deduce l'aumento di DNA, mentre per dedurre una variazione di ploidia occorrono informazioni sui corredi cromosomici. La stessa misura può infatti essere compatibile con stati cellulari diversi.
:::

## Centromeri e telomeri

:::definizione{#centromeri-telomeri titolo="Regioni che permettono la conservazione dei cromosomi"}
Per essere mantenuto attraverso le divisioni, un cromosoma lineare deve essere replicato, segregato e protetto alle estremità. Le **origini di replicazione** sono regioni da cui inizia la sintesi del DNA; nei cromosomi eucariotici sono numerose. Il **centromero** è la regione su cui si assembla il cinetocore, il complesso proteico che interagisce con i microtubuli del fuso. Un frammento privo di centromero funzionale può replicarsi ma essere distribuito in modo irregolare, perché manca il normale punto di collegamento al fuso.

Nei centromeri umani sono frequenti ripetizioni alfa-satellite. La variante istonica CENP-A sostituisce H3 in una parte dei nucleosomi centromerici e contribuisce all'identità del sito. Sequenza ripetuta e funzione centromerica vanno distinte: esistono regioni centromeriche funzionali, dette neocentromeri, che si formano in posizioni prive del consueto blocco alfa-satellite. L'organizzazione della cromatina contribuisce quindi alla funzione oltre alla sequenza.

I **telomeri** contengono sequenze ripetute e proteine che proteggono le estremità dei cromosomi. Nell'uomo la ripetizione caratteristica è TTAGGG; il complesso shelterin contribuisce a evitare che l'estremità naturale sia trattata come una rottura da saldare a un'altra estremità. La perdita della protezione può provocare risposte al danno e fusioni cromosomiche anche quando una sequenza telomerica è ancora presente.

La telomerasi comprende una componente proteica con attività di trascrittasi inversa e un RNA usato come stampo. Estende il DNA telomerico, contribuendo alla sua manutenzione nelle cellule in cui è attiva. Protezione e allungamento sono funzioni collegate ma distinguibili: shelterin protegge l'estremità, mentre la telomerasi aggiunge sequenza. Il problema della replicazione delle estremità è sviluppato nel capitolo sul flusso dell'informazione.
:::

:::esempio{titolo="Due alterazioni, due conseguenze"}
Un cromosoma con telomeri protetti ma cinetocore difettoso presenta soprattutto un problema di segregazione. Un cromosoma con cinetocore funzionante ma telomeri deprotetti può invece attivare una risposta al danno o fondersi con un altro cromosoma. Il fatto che entrambe le alterazioni destabilizzino il genoma non rende intercambiabili le due strutture.
:::

## DNA associato agli istoni

:::definizione{#nucleosomi titolo="Nucleosoma, ottamero e DNA di collegamento"}
Il DNA nucleare è associato a proteine formando la **cromatina**. Nel nucleosoma circa 147 coppie di basi di DNA sono avvolte attorno a un ottamero, cioè un complesso di otto proteine istoniche. Vi sono due copie di ciascuno degli istoni H2A, H2B, H3 e H4. I gruppi fosfato del DNA hanno carica negativa; numerose lisine e arginine degli istoni hanno carica positiva, contribuendo alle interazioni che stabilizzano l'associazione.

Il DNA che collega due particelle nucleosomiche è detto *linker*. L'istone H1 si associa vicino all'entrata e all'uscita del DNA dal nucleosoma e al linker. H1 contribuisce alla stabilizzazione e alla compattazione, ma non appartiene all'ottamero. Le code istoniche sono regioni proteiche che sporgono dal nucleosoma e possono subire modificazioni covalenti.

La **lunghezza di ripetizione nucleosomica** comprende il DNA avvolto e il linker medio. Se un modello usa 147 coppie di basi avvolte e 53 di linker, una ripetizione contiene $147+53=200$ coppie di basi. In 2.000 coppie di basi idealmente organizzate in ripetizioni complete si stimano $\dfrac{2000}{200}=10$ nucleosomi. L'ipotesi di ripetizioni complete evita ambiguità sulle estremità del tratto. Nella cromatina reale linker e occupazione variano lungo il genoma.

![Ottamero istonico, DNA avvolto e linker con H1](/figure/biologia-semestre-filtro/genoma-cromatina/nucleosoma-it.svg)
:::

:::esempio{titolo="Perché la nucleasi produce una scala"}
Una nucleasi taglia più facilmente il DNA accessibile tra particelle. Una digestione parziale può perciò produrre frammenti corrispondenti a una, due o tre ripetizioni nucleosomiche. Se le bande sono circa 200, 400 e 600 coppie di basi, la spaziatura media è circa 200. Una digestione più estesa può lasciare il nucleo protetto di circa 147 coppie di basi. I due valori descrivono quindi misure differenti, entrambe compatibili con lo stesso modello.
:::

:::osservazione{titolo="Una misura media conserva variabilità locale"}
Un valore medio di 200 bp per ripetizione non significa che ogni linker del campione misuri 53 bp. Si possono trovare particelle con linker più corti e altre con linker più lunghi; la media riassume il campione senza descriverne ogni punto. Anche regioni temporaneamente prive di nucleosomi contribuiscono alla distribuzione dell'accessibilità. Per conoscere la posizione di una particella vicino a un promotore serve quindi una misura locale, mentre una scala di frammenti fornisce soprattutto informazioni sull'organizzazione periodica media. Questa distinzione permette di usare i modelli numerici senza attribuire uniformità assoluta alla cromatina reale.
:::

## Organizzazione tridimensionale e accessibilità

:::osservazione{#compattazione titolo="Anse e organizzazioni dinamiche"}
L'avvolgimento sui nucleosomi è un primo livello di organizzazione. La cromatina forma anche contatti e anse, che avvicinano regioni distanti lungo la sequenza. I cromosomi in interfase occupano territori nucleari parzialmente distinti e presentano organizzazioni variabili nel tempo. Una distanza breve nello spazio può quindi corrispondere a una distanza molto maggiore lungo il DNA.

Le **coesine** partecipano alla coesione dei cromatidi fratelli e all'organizzazione di contatti della cromatina in interfase. Le **condensine** contribuiscono alla formazione e all'organizzazione dei cromosomi mitotici. Si tratta di complessi della famiglia SMC con funzioni in parte differenti. L'aumento di compattazione in mitosi facilita la distribuzione del materiale replicato e non richiede l'eliminazione di tratti di DNA.

La fibra regolare di 30 nm appartiene a modelli classici di ripiegamento dei nucleosomi ed è osservabile in determinate condizioni. Studi della cromatina nelle cellule mostrano anche strutture irregolari ed eterogenee. Perciò una successione obbligatoria di fibre sempre più spesse non descrive universalmente ogni regione genomica. Un diagramma di compattazione è utile se distingue il modello semplificato dalle strutture osservate.
:::

:::definizione{#eucromatina-eterocromatina titolo="Stati locali della cromatina"}
L'**eucromatina** è generalmente più accessibile e meno condensata; l'**eterocromatina** è più compatta ed è spesso associata a ridotta trascrizione. Queste proprietà esprimono tendenze. Un promotore accessibile richiede comunque fattori di trascrizione e segnali appropriati per produrre RNA.

L'eterocromatina costitutiva interessa regioni stabilmente compatte, spesso ricche di ripetizioni, come molte regioni pericentromeriche. L'eterocromatina facoltativa cambia secondo il tipo cellulare o lo sviluppo; gran parte del cromosoma X inattivo ne è un esempio. Alcuni geni dell'X inattivo sfuggono al silenziamento, quindi la sua condensazione non implica che ogni gene sia inattivo.

![Stessa sequenza con diversa disposizione dei nucleosomi e accessibilità del promotore](/figure/biologia-semestre-filtro/genoma-cromatina/accessibilita-it.svg)
:::

:::definizione{#rimodellamento titolo="Spostare un nucleosoma consumando ATP"}
I complessi di **rimodellamento ATP-dipendente** sfruttano l'idrolisi dell'ATP per cambiare le interazioni tra DNA e istoni. Possono spostare nucleosomi, rimuoverli o favorire scambi di componenti istoniche. Il risultato dipende dal sito e dal complesso: un sito regolativo può diventare più accessibile oppure essere coperto.

Se un nucleosoma occupa un sito riconosciuto da un fattore, lo spostamento può permetterne il legame. Per attribuire l'effetto al rimodellamento si confrontano, per esempio, una proteina attiva e una variante priva di attività ATPasica. Un cambiamento di posizione con DNA di sequenza identica mostra una riorganizzazione della cromatina. La sequenza da sola non descrive dunque tutte le condizioni che determinano l'accesso.
:::

## Modificazioni e memoria epigenetica

:::definizione{#epigenetica titolo="Stati regolativi senza cambiamento di sequenza"}
L'**epigenetica** studia stati regolativi del genoma che possono essere mantenuti durante le divisioni senza dipendere da una variazione della sequenza del DNA. La presenza di una modificazione chimica in un istante, da sola, non dimostra una memoria ereditabile. Per studiare la stabilità si segue lo stato nelle cellule discendenti, distinguendo il mantenimento da una continua induzione esterna.

Nell'uomo la metilazione del DNA interessa soprattutto citosine in dinucleotidi CpG. La metilazione di molti promotori ricchi di CpG è associata a repressione, anche attraverso proteine che riconoscono le citosine metilate. Il significato dipende dal contesto: metilazione in altre regioni, come il corpo di un gene, non si interpreta automaticamente allo stesso modo.

Dopo la replicazione, un sito prima metilato su entrambi i filamenti presenta inizialmente un filamento parentale metilato e uno nuovo privo della modificazione. I sistemi di mantenimento, che coinvolgono DNMT1 e proteine associate, permettono di ricostituire il pattern. Questa relazione tra filamento vecchio e nuovo spiega come un'informazione regolativa possa persistere pur essendo copiata la sequenza di basi.

![Mantenimento della metilazione dopo replicazione: sito parentale, emimetilazione e ripristino](/figure/biologia-semestre-filtro/genoma-cromatina/metilazione-it.svg)

L'acetilazione delle lisine istoniche riduce la loro carica positiva e crea siti riconosciuti da proteine con domini specifici. È spesso associata a cromatina accessibile. Le acetiltransferasi aggiungono gruppi acetile e le deacetilasi li rimuovono. Un inibitore delle deacetilasi può aumentare l'acetilazione senza garantire l'attivazione di ogni gene, perché l'espressione richiede ulteriori condizioni.

La metilazione degli istoni può essere associata ad attivazione o repressione secondo il residuo e lo stato di metilazione. H3K4me3 indica la trimetilazione della lisina 4 dell'istone H3 ed è spesso presente presso promotori attivi. H3K9me3 è frequentemente associata a eterocromatina. Le sigle specificano una posizione: la sola parola «metilazione» non identifica né il substrato né l'effetto.
:::

:::esempio{titolo="Separare associazione e causa"}
In due colture con lo stesso gene, la coltura A mostra promotore accessibile e molto RNA; B mostra promotore metilato e poco RNA. I dati sostengono un'associazione, ma non stabiliscono da soli quale evento sia avvenuto per primo. Un intervento mirato che modifica la metilazione, con controlli della sequenza e degli effetti indiretti, può rafforzare l'ipotesi causale. Misurare anche l'RNA nascente aiuta a distinguere trascrizione e diversa stabilità dell'RNA già prodotto.
:::


:::esempio{titolo="Dati di accessibilità e quantità di istone"}
In due campioni si misura un segnale di acetilazione istonica pari a 120 e 60 unità. Il secondo campione contiene però anche metà degli istoni del primo. Prima di concludere che ogni nucleosoma sia meno acetilato, si rapporta il segnale alla quantità di substrato. Se entrambi i segnali si dimezzano, il rapporto può restare costante. Una misura globale mescola quindi abbondanza delle particelle e frequenza della modificazione. La normalizzazione richiede un riferimento appropriato e condizioni di misura confrontabili.

Un ragionamento analogo vale per l'accessibilità. Una maggiore sensibilità alla nucleasi può dipendere dall'esposizione del DNA, ma le differenze di sequenza riconosciute dall'enzima o di quantità del campione devono essere controllate. L'esperimento collega così una misura osservabile a una proprietà della cromatina attraverso ipotesi dichiarate.
:::

## Geni, famiglie e DNA non codificante

:::definizione{#sequenze-genoma titolo="Composizione del genoma"}
Il **genoma** comprende il patrimonio di DNA; nell'uomo si distinguono genoma nucleare e mitocondriale. All'interno del genoma nucleare, sequenze che codificano proteine convivono con introni, regioni regolative, geni per RNA non codificanti e diverse classi di ripetizioni. La frazione che codifica direttamente la sequenza delle proteine è piccola rispetto al totale. Da «non codificante proteine» non segue «privo di funzione»: un promotore o un gene per rRNA fornisce un controesempio preciso.

Una **sequenza a copia singola** occupa un solo locus per corredo aploide di riferimento, a differenza delle sequenze ripetute. In una cellula diploide può quindi avere due copie alleliche sui cromosomi omologhi: «singola» non significa una sola molecola nell'intera cellula e non implica necessariamente che codifichi una proteina.

Una **famiglia genica** comprende geni imparentati evolutivamente, spesso prodotti da duplicazioni seguite da divergenza. Le copie possono conservare attività simili o acquisire espressione e funzioni differenti. I geni delle globine mostrano regolazioni diverse durante lo sviluppo. Geni imparentati attraverso una duplicazione si chiamano **paraloghi**. Due geni della stessa famiglia occupano loci distinti; due alleli sono invece varianti del medesimo locus.

I geni degli rRNA maggiori si trovano in unità ripetute che sostengono un'elevata produzione di RNA ribosomiale. Uno pseudogene deriva da una sequenza simile a un gene ma ha perso la capacità di produrre il prodotto funzionale originario; alcuni pseudogeni possono tuttavia essere trascritti o avere ruoli regolativi. Classificazione evolutiva e funzione attuale richiedono quindi criteri distinti.
:::

:::esempio{titolo="Una duplicazione seguita da divergenza"}
Una duplicazione produce due loci inizialmente simili. Se una copia mantiene il profilo di espressione originario mentre l'altra accumula variazioni regolative, i prodotti possono essere presenti in tessuti diversi. Questo risultato spiega come aumenti la varietà funzionale senza richiedere che ogni nuovo gene compaia da una sequenza completamente indipendente. La somiglianza suggerisce una parentela, da verificare con confronti delle sequenze e della storia evolutiva.
:::

## Ripetizioni ed elementi mobili

:::definizione{#ripetizioni titolo="Tandem e dispersione nel genoma"}
Nelle ripetizioni **in tandem** le unità sono adiacenti. La sequenza CACACACA contiene quattro unità CA consecutive. Microsatelliti e minisatelliti si distinguono soprattutto per la lunghezza dell'unità ripetuta, con soglie che possono variare nelle classificazioni. Il numero di unità può differire tra alleli; nel genotipo di un individuo si possono quindi misurare frammenti di lunghezze diverse.

Le ripetizioni **intersperse** sono distribuite in loci distanti. Molte derivano da elementi mobili, tra cui LINE, SINE e retrovirus endogeni. «In tandem» descrive la posizione relativa delle copie; «mobile» descrive la capacità o l'origine di un meccanismo di inserzione. Una sequenza ripetuta non è per questo necessariamente capace di muoversi oggi.

![Ripetizioni adiacenti e copie separate da DNA diverso](/figure/biologia-semestre-filtro/genoma-cromatina/ripetizioni-it.svg)
:::

:::definizione{#elementi-mobili titolo="Intermedi di DNA e intermedi di RNA"}
Gli **elementi trasponibili** possono produrre nuove inserzioni. I trasposoni a DNA utilizzano un intermedio di DNA; alcune famiglie operano mediante escissione e inserzione. I retrotrasposoni vengono invece trascritti in RNA, che viene retrotrascritto in DNA. Una nuova copia può inserirsi mentre la sequenza di partenza resta nel sito originario. Il numero di copie può così aumentare.

Un elemento è autonomo se codifica le attività necessarie alla propria mobilizzazione nel contesto cellulare appropriato. Alcune copie complete di LINE-1 sono autonome; moltissime copie genomiche sono invece troncate o inattive. I SINE, come Alu, non codificano un apparato completo e possono utilizzare proteine prodotte da altri elementi, in particolare LINE-1. Un elemento non autonomo può quindi essere mobile quando riceve le attività mancanti.

I retrovirus endogeni derivano da integrazioni nella linea germinale trasmesse ai discendenti; molte copie hanno perso la capacità di produrre particelle infettive. Un'inserzione in un esone può interrompere una sequenza codificante, mentre una inserzione regolativa può cambiare l'espressione. L'effetto dipende dal sito, dall'orientamento e dal contesto; la presenza di una nuova inserzione non prova automaticamente una malattia.

![Retrotrasposizione con copia di DNA originaria mantenuta e nuova inserzione](/figure/biologia-semestre-filtro/genoma-cromatina/retrotrasposizione-it.svg)
:::

:::esempio{titolo="Espressione di un elemento e nuova inserzione"}
Un aumento dell'RNA di LINE-1 indica che nel campione sono presenti più trascritti, ma non dimostra il completamento della retrotrasposizione. Il percorso richiede anche produzione di proteine funzionali, formazione della copia di DNA e inserzione. Per documentare una nuova inserzione si cercano giunzioni tra l'elemento e sequenze del nuovo locus assenti nel campione iniziale. Questa misura distingue il semplice aumento dell'espressione da un cambiamento stabile della sequenza genomica.

Se l'evento riguarda una cellula somatica, i suoi discendenti possono costituire un clone diverso dalle altre cellule dell'organismo. La trasmissione attraverso i gameti richiede invece un coinvolgimento della linea germinale. Mobilità, mosaicismo ed ereditabilità tra generazioni descrivono quindi aspetti collegati ma separabili.
:::
