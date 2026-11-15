---
titolo: "Replicazione, espressione genica e proteine"
sommario: "Come il DNA viene copiato e usato per produrre RNA e proteine, con controllo degli errori e regolazione dell’espressione."
---

## Copiare il DNA conservando l'informazione

:::definizione{#replicazione titolo="Complementarità e replicazione semiconservativa"}
Prima della divisione, una cellula deve fornire a ciascuna cellula figlia una copia del patrimonio genetico. I due filamenti del DNA contengono informazioni complementari: una adenina determina una timina sul filamento opposto, una guanina determina una citosina. La separazione dei filamenti rende quindi disponibili due stampi. La **replicazione semiconservativa** produce due doppie eliche, ciascuna formata da un filamento parentale e uno nuovo. Il termine descrive la composizione delle molecole figlie, mentre *bidirezionale* descrive il movimento delle forcelle.

La DNA polimerasi aggiunge un nucleotide al gruppo 3′-OH dell'ultimo zucchero della catena in crescita. Il filamento nuovo si allunga perciò in direzione **5′ → 3′**, mentre lo stampo viene percorso in direzione 3′ → 5′. Occorrono uno stampo, deossiribonucleotidi trifosfato e un'estremità da allungare. L'incorporazione libera pirofosfato; la sua successiva idrolisi favorisce la reazione. La sequenza dello stampo determina quale nucleotide viene incorporato, attraverso l'appaiamento delle basi.

La polimerasi replicativa richiede un innesco. La primasi può iniziare una breve catena di RNA; negli eucarioti il complesso primasi-polimerasi alfa aggiunge anche un breve tratto di DNA. Una volta disponibile l'estremità 3′-OH, le polimerasi replicative proseguono l'allungamento. Nel modello di *Escherichia coli* il cromosoma circolare possiede una principale origine di replicazione. I lunghi cromosomi nucleari eucariotici impiegano molte origini, attivate in modo regolato durante la fase S. Questo consente di copiare regioni diverse in parallelo.

Negli eucarioti il complesso ORC e altre proteine permettono il caricamento delle elicasi MCM sulle origini durante la preparazione alla replicazione. La successiva attivazione in fase S avvia le forcelle. Separare il caricamento dall’attivazione, e impedire un nuovo caricamento nello stesso ciclo, contribuisce a fare in modo che una regione venga copiata una volta per ciclo cellulare. L’origine è quindi una sede di assemblaggio regolato di un complesso d’inizio.
:::

:::esempio{titolo="Seguire i filamenti parentali"}
Una doppia elica contiene due filamenti marcati. Dopo un ciclo in un mezzo privo di marcatore, entrambe le molecole figlie hanno un filamento marcato e uno nuovo. Dopo un secondo ciclo si ottengono quattro molecole: due conservano ciascuna uno dei filamenti iniziali, due contengono soltanto filamenti sintetizzati nel mezzo nuovo. La frazione di molecole ibride è quindi $\dfrac{2}{4}=\dfrac{1}{2}$. La marcatura segue i filamenti; il numero totale di doppie eliche raddoppia a ogni ciclo completo.

![Due cicli di replicazione semiconservativa](/figure/biologia-semestre-filtro/flusso-informazione/semiconservativa-it.svg)
:::

:::definizione{#forcella titolo="Forcella, frammenti di Okazaki e fedeltà"}
L'**elicasi** apre la doppia elica, mentre proteine leganti il DNA a singolo filamento limitano il riappaiamento delle regioni esposte. L'apertura genera tensioni torsionali nel DNA ancora avvolto. Le topoisomerasi le riducono mediante tagli transitori controllati, seguiti dalla richiusura; alcune intervengono anche nella separazione delle molecole intrecciate. La pinza scorrevole mantiene la polimerasi associata allo stampo e aumenta la processività, cioè il numero di nucleotidi incorporati prima del distacco.

I due stampi sono antiparalleli, ma tutte le catene nuove crescono 5′ → 3′. Alla stessa forcella, il filamento **leading** può essere sintetizzato nella direzione di avanzamento dell'apertura. Il filamento **lagging** viene costruito in frammenti di Okazaki, ciascuno iniziato vicino alla forcella e allungato in direzione opposta al suo avanzamento. Ogni frammento richiede un nuovo innesco. Leading e lagging indicano il comportamento di un filamento *rispetto a una specifica forcella*: alla forcella opposta cambia quale stampo permette la sintesi continua.

![Direzioni dei filamenti alla forcella](/figure/biologia-semestre-filtro/flusso-informazione/forcella-it.svg)

Gli inneschi vengono rimossi e sostituiti con DNA. Nel batterio interviene anche la DNA polimerasi I; negli eucarioti partecipano, tra gli altri, RNasi H e FEN1. Dopo il riempimento resta una discontinuità nello scheletro zucchero-fosfato. La ligasi forma il legame fosfodiestere mancante tra estremità adiacenti. Un tratto privo di nucleotidi richiede prima il riempimento da parte di una polimerasi.

Molte polimerasi replicative possiedono **proofreading** esonucleasico 3′ → 5′. Quando viene incorporata una base errata, l'estremità può essere trasferita al sito di correzione, il nucleotide rimosso e la sintesi ripresa. La direzione della rimozione è opposta a quella della sintesi. I sistemi di riparazione degli appaiamenti errati intervengono successivamente e aumentano ulteriormente la fedeltà. Questi controlli riducono la probabilità di errore senza renderla nulla.
:::

## Completare le estremità dei cromosomi

:::definizione{#telomerasi titolo="Telomeri, telomerasi e proliferazione"}
Un cromosoma lineare presenta un problema alle estremità. Dopo la rimozione dell'ultimo innesco del filamento discontinuo può mancare un'estremità 3′-OH adatta da cui riempire il tratto terminale. Le normali polimerasi replicative, quindi, possono lasciare una copia più corta. I telomeri comprendono sequenze ripetute e proteine che proteggono le estremità e ne distinguono la struttura da una rottura interna del DNA.

La **telomerasi** contiene una componente proteica con attività di trascrittasi inversa e un RNA che fornisce lo stampo. Allunga l'estremità 3′ del filamento telomerico ricco in guanine, aggiungendo ripetizioni di DNA. Primasi e polimerasi convenzionali possono poi sintetizzare il filamento complementare. L'enzima risolve quindi parte del problema fornendo ulteriore stampo; l'estremità telomerica matura mantiene comunque una sporgenza a singolo filamento.

In molte cellule somatiche umane l'attività telomerasica è bassa. Telomeri criticamente corti o privi di protezione possono attivare una risposta al danno e contribuire alla **senescenza replicativa**. La senescenza può essere indotta anche da altre forme di stress. Molte cellule tumorali mantengono i telomeri attraverso la telomerasi; altre usano meccanismi alternativi basati su ricombinazione. L'attivazione della telomerasi, da sola, non descrive tutte le alterazioni necessarie alla trasformazione tumorale.
:::

## Organizzazione di un gene

:::definizione{#gene titolo="Prodotto funzionale, esoni e regioni regolative"}
Per **gene** si intende una regione di DNA la cui espressione contribuisce a un prodotto funzionale, RNA o proteina. Un gene che produce un tRNA, per esempio, termina il proprio percorso funzionale a livello di RNA. Nei geni codificanti proteine, la trascrizione produce un RNA che può essere maturato e poi tradotto. Il promotore contribuisce a stabilire dove e con quale orientamento inizia la trascrizione; altri elementi regolativi ne modificano l'efficienza.

Un elemento che agisce **in cis** è una sequenza di DNA che regola una regione fisicamente collegata. Un fattore **in trans** è una molecola diffusibile, spesso una proteina, capace di riconoscere elementi bersaglio. Una mutazione di un operatore interessa direttamente la copia di DNA che lo contiene; una proteina repressore funzionale può invece raggiungere più copie compatibili. Questa distinzione permette di interpretare esperimenti con due copie di un sistema regolativo.

Molti mRNA batterici sono policistronici: contengono più regioni codificanti tradotte in proteine distinte. Gli mRNA nucleari eucariotici sono generalmente monocistronici. Un gene eucariotico può comprendere **esoni**, presenti nell'RNA maturo, e introni, rimossi dallo splicing. Le regioni 5′ UTR e 3′ UTR sono trascritte e conservate nel messaggero maturo, ma si trovano rispettivamente prima del codone d'inizio e dopo il codone di arresto della regione codificante. Perciò un esone può contenere sequenze non tradotte. Il conteggio degli esoni, da solo, non determina la lunghezza della proteina.
:::

## Trascrizione e controllo dell'inizio

:::definizione{#trascrizione-lac titolo="Filamento stampo e operone lac"}
Durante la **trascrizione** la RNA polimerasi sintetizza RNA 5′ → 3′ usando un filamento di DNA letto 3′ → 5′. Può iniziare senza un innesco. Per uno stesso tratto trascritto, il filamento codificante possiede la stessa sequenza del trascritto primario, sostituendo T con U, quando entrambi sono scritti 5′ → 3′. Il filamento stampo è complementare. Geni diversi possono usare filamenti opposti della stessa molecola di DNA.

Nei batteri un fattore sigma contribuisce al riconoscimento del promotore. Dopo l'inizio seguono allungamento e terminazione. La mancanza di un involucro nucleare consente alla traduzione di alcuni mRNA batterici di iniziare mentre la trascrizione è ancora in corso.

Nell'**operone lac**, i geni necessari all'utilizzo del lattosio sono regolati da due segnali. In assenza di induttore il repressore LacI si lega all'operatore e ostacola la trascrizione. L'allolattosio, derivato dal lattosio, lega LacI e ne riduce l'affinità per l'operatore. Quando il glucosio è scarso, il segnale cAMP aumenta e il complesso CAP-cAMP favorisce il reclutamento della RNA polimerasi. Nel modello classico, l'espressione è elevata quando il lattosio è disponibile e il glucosio è scarso; con entrambi presenti è bassa, perché la rimozione della repressione non fornisce la stessa attivazione positiva.

![Due controlli sull’operone lac](/figure/biologia-semestre-filtro/flusso-informazione/lac-it.svg)

L'operatore è DNA, LacI è una proteina e l'allolattosio è una piccola molecola. Una mutazione che impedisce a LacI di legare l'induttore può mantenere la repressione anche in presenza di lattosio. Una mutazione dell'operatore che impedisce il legame di LacI elimina invece quel controllo soltanto dalla copia collegata. Sono meccanismi diversi, distinguibili considerando quale interazione viene alterata.
:::

:::definizione{#trascrizione-eucariotica titolo="Polimerasi nucleari e fattori di trascrizione"}
Negli eucarioti le RNA polimerasi nucleari svolgono compiti differenti. La **polimerasi I** produce il precursore dei maggiori rRNA, escluso il 5S. La **polimerasi II** produce i precursori degli mRNA e diversi RNA non codificanti. La polimerasi III produce, tra gli altri, tRNA e rRNA 5S. Queste differenze consentono di collegare una perturbazione selettiva alle classi di RNA direttamente coinvolte.

I fattori generali di trascrizione organizzano il complesso di preinizio della polimerasi II. TBP riconosce la TATA box nei promotori che la contengono; molti promotori funzionano con un'organizzazione differente. I fattori specifici riconoscono elementi prossimali, enhancer o silencer e reclutano cofattori. Il ripiegamento del DNA può avvicinare un enhancer al promotore bersaglio. L'accessibilità della cromatina influenza questi incontri e collega la trascrizione ai meccanismi descritti nel capitolo su genoma e cromatina.

Dopo l’assemblaggio del complesso di preinizio, l’apertura locale del DNA e la sintesi dei primi nucleotidi permettono l’avvio. Durante l’allungamento, modificazioni della coda CTD della polimerasi II coordinano il reclutamento di fattori di maturazione dell’RNA. Per molti geni, il taglio dell’RNA al sito di poliadenilazione precede la terminazione della polimerasi più a valle; la degradazione del trascritto residuo, anche tramite XRN2, contribuisce al distacco. Il punto in cui termina il messaggero maturo può quindi essere distinto dal punto in cui la polimerasi abbandona il DNA.

I recettori degli ormoni steroidei possono regolare la trascrizione in risposta al ligando. Una variazione nella quantità di proteina, tuttavia, può dipendere anche dalla stabilità dell'mRNA, dall'efficienza della traduzione o dalla degradazione proteica. Per attribuire un effetto alla trascrizione servono misure adatte, per esempio la produzione di RNA nascente, oltre alla sola quantità di proteina finale.
:::

## Maturazione e durata degli RNA

:::definizione{#maturazione-rna titolo="Cap, splicing e poliadenilazione"}
Il pre-mRNA eucariotico viene modificato mentre è prodotto e dopo la trascrizione. Il **cap 5′** contiene una guanosina modificata unita con un legame 5′–5′; partecipa alla protezione dell'estremità, al processamento e al riconoscimento del messaggero durante l'inizio della traduzione. Al lato 3′, un taglio specifico precede l'aggiunta della coda poli-A da parte della poli-A polimerasi. La coda viene quindi aggiunta enzimaticamente: la sua lunghezza non deriva dalla trascrizione di una lunga sequenza di T nello stampo. Esistono eccezioni, come diversi mRNA degli istoni dipendenti dalla replicazione, che hanno un diverso processamento 3′.

Lo **splicing** unisce gli esoni eliminando gli introni. Lo spliceosoma contiene snRNA e proteine; il riconoscimento dei siti di splicing e del punto di ramificazione porta a due reazioni di transesterificazione. L'introne viene rilasciato inizialmente in una struttura a cappio, o lariat, mentre gli esoni adiacenti vengono uniti. Gli snRNA contribuiscono all'organizzazione del centro catalitico. Questo illustra come un RNA possa avere una funzione catalitica: un RNA catalitico è detto ribozima.

![Esclusione di un esone e formazione delle isoforme](/figure/biologia-semestre-filtro/flusso-informazione/splicing-it.svg)

Nello **splicing alternativo** una stessa unità di trascrizione può produrre RNA maturi con combinazioni differenti di esoni o siti di splicing. Il risultato dipende da segnali nelle sequenze e da fattori regolativi, spesso specifici di un tessuto. Se un esone codificante viene escluso, la cornice di lettura è conservata soltanto quando la giunzione mantiene il raggruppamento in triplette. L'editing modifica invece nucleotidi dell'RNA; può cambiare un codone senza modificare il DNA corrispondente. Splicing ed editing agiscono quindi in modo diverso sulla sequenza del prodotto maturo.
:::

:::definizione{#regolazione-rna titolo="Turnover, piccoli RNA e RNA strutturali"}
La quantità di mRNA dipende sia dalla sintesi sia dalla rimozione. Se la sintesi si arresta e ogni intervallo uguale elimina la stessa frazione di molecole, il decadimento può essere descritto da una **emivita**, cioè il tempo necessario per dimezzare la quantità. Con un'emivita di 20 minuti, dopo 40 minuti resta $\dfrac{1}{4}$ della quantità iniziale. Questa conclusione richiede assenza di nuova sintesi e condizioni di degradazione costanti.

Deadenilazione e decapping possono favorire l'accesso delle esonucleasi. Nei complessi di silenziamento, i **miRNA** guidano il riconoscimento di RNA bersaglio. Nei metazoi molti appaiamenti sono parziali e favoriscono repressione della traduzione e destabilizzazione del messaggero. Una complementarità estesa può permettere il taglio da parte di un'Argonaute cataliticamente competente. La presenza di un miRNA, quindi, non implica automaticamente il taglio immediato di ogni suo bersaglio.

Nell’**RNA interference**, piccoli RNA possono derivare dal processamento di precursori a doppio filamento, spesso mediante Dicer, ed essere caricati in complessi contenenti Argonaute. Un filamento guida indirizza il riconoscimento. Gli siRNA con complementarità estesa possono favorire il taglio del bersaglio nei sistemi con Argonaute cataliticamente attiva. Siti nelle UTR possono inoltre reclutare proteine che controllano localizzazione, durata e traduzione del messaggero: una sequenza non tradotta può dunque avere una funzione regolativa precisa.

Anche rRNA e tRNA richiedono maturazione. Nel nucleolo i precursori degli rRNA vengono tagliati e modificati e partecipano all'assemblaggio delle subunità ribosomiali. I tRNA subiscono processamento delle estremità, modificazioni delle basi e, in alcuni casi, rimozione di introni. La sequenza CCA all'estremità 3′ accoglie l'amminoacido; può essere codificata oppure aggiunta da un enzima, secondo il sistema. Il nucleolo produce e assembla componenti dei ribosomi, mentre la traduzione delle proteine nucleari e citosoliche avviene sui ribosomi citoplasmatici.
:::

## Dal codone all'amminoacido

:::definizione{#codice-genetico titolo="Codice, cornice di lettura e tRNA"}
Il ribosoma legge l'mRNA in gruppi di tre nucleotidi chiamati **codoni**. Nel codice standard 61 triplette specificano amminoacidi e tre sono segnali di arresto. Il codice è degenerato perché codoni differenti possono indicare lo stesso amminoacido; nel contesto standard una tripletta ha comunque un significato definito. Il codice è quasi universale: alcuni sistemi, tra cui i mitocondri, utilizzano varianti. Negli esercizi il codice adottato e l'eventuale inizio della lettura devono perciò essere specificati.

L'anticodone di un tRNA si appaia al codone con orientamento antiparallelo. Il codone 5′-AUG-3′ riconosce l'anticodone 3′-UAC-5′, che scritto nel verso 5′ → 3′ diventa 5′-CAU-3′. Il *wobble* permette alcuni appaiamenti meno restrittivi alla terza posizione del codone, per cui un tRNA può riconoscere più codoni sinonimi. Questo non autorizza appaiamenti arbitrari nelle tre posizioni.

Le **aminoacil-tRNA sintetasi** riconoscono l'amminoacido e i tRNA appropriati, quindi collegano l'amminoacido all'estremità 3′ del tRNA consumando ATP, convertito in AMP e pirofosfato. Molte possiedono controlli che eliminano prodotti caricati in modo scorretto. Il ribosoma verifica soprattutto l'appaiamento codone-anticodone: se un tRNA viene caricato artificialmente con l'amminoacido sbagliato, può incorporarlo al codone riconosciuto dal proprio anticodone. La precisione dipende quindi sia dal caricamento sia dalla lettura del messaggero.
:::

## Costruire la catena polipeptidica

:::definizione{#traduzione titolo="Inizio, allungamento e arresto"}
L'inizio riunisce mRNA, subunità ribosomiali, fattori e tRNA iniziatore. Nel modello eucariotico cap-dipendente la subunità minore scansiona il messaggero fino a un AUG in un contesto favorevole. Il tRNA iniziatore occupa il sito P. Nei batteri, in molti mRNA, una sequenza di riconoscimento ribosomiale contribuisce a posizionare il codone d'inizio. I due meccanismi richiedono quindi segnali differenti.

Durante l'allungamento un aminoacil-tRNA entra nel **sito A**. La catena presente sul tRNA nel **sito P** viene trasferita all'amminoacido nel sito A, formando un legame peptidico. La traslocazione sposta il ribosoma di un codone: il tRNA con la catena passa da A a P e quello scarico procede verso il sito E, da cui esce. Fattori di allungamento e GTP partecipano alla selezione e alla traslocazione. Il centro peptidil-transferasico della subunità maggiore è costituito principalmente da rRNA.

![Siti E, P e A durante l’allungamento](/figure/biologia-semestre-filtro/flusso-informazione/ribosoma-it.svg)

L'mRNA viene percorso 5′ → 3′ e la proteina cresce dall'estremità amminica N-terminale verso quella carbossilica C-terminale. Al codone stop un fattore di rilascio promuove l'idrolisi del legame tra polipeptide e tRNA. Il codone stop, quindi, occupa tre nucleotidi senza aggiungere un amminoacido. Una regione che contiene 300 nucleotidi dal primo nucleotide del codone d'inizio all'ultimo dello stop comprende 100 codoni e produce, nel modello standard senza ricodifica, 99 amminoacidi. Più ribosomi possono tradurre contemporaneamente lo stesso mRNA formando un polisoma; ciascuno sintetizza una propria catena.
:::

## Conservare le proteine funzionanti

:::definizione{#proteostasi titolo="Ripiegamento, modificazioni e degradazione"}
La sequenza amminoacidica permette interazioni che favoriscono il ripiegamento, ma l'ambiente cellulare è affollato e può favorire aggregazioni inappropriate. Le **chaperon** assistono il ripiegamento, limitando queste interazioni e offrendo ulteriori tentativi; molte usano ATP. Le proteine possono inoltre subire tagli, fosforilazione, acetilazione, glicosilazione o altre modificazioni che ne regolano attività e localizzazione. Una proteina prodotta in quantità normale può dunque avere attività ridotta per un difetto di maturazione.

La **proteostasi** comprende il bilancio tra sintesi, ripiegamento, trasporto e degradazione. Nella via ubiquitina-proteasoma, E1 attiva l'ubiquitina, E2 la trasporta e una ligasi E3 contribuisce al riconoscimento del substrato e al trasferimento. Alcune catene di poliubiquitina, come quelle con legami K48, possono favorire il riconoscimento da parte del proteasoma. Il substrato viene svolto e degradato in peptidi; l'ubiquitina viene recuperata. L'attività ATPasica aiuta il processamento del substrato.

![Destini di una proteina e controllo della qualità](/figure/biologia-semestre-filtro/flusso-informazione/proteostasi-it.svg)

Il significato dell'ubiquitinazione dipende dalla struttura del segnale: altre forme partecipano a traffico, segnalazione e riparazione del DNA. La SUMOilazione usa una proteina simile all'ubiquitina e modifica interazioni o localizzazione senza equivalere automaticamente a degradazione proteasomica. Aggregati voluminosi e organelli possono essere eliminati attraverso l'autofagia e i lisosomi, descritti nel capitolo sulle strutture cellulari. Un aumento della quantità di proteina dopo blocco del proteasoma indica un cambiamento del suo smaltimento; per concludere che è aumentata la trascrizione occorre misurare anche la produzione di RNA.
:::
