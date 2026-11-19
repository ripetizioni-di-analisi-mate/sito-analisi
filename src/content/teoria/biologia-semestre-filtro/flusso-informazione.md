---
titolo: "Replicazione, espressione genica e proteine"
sommario: "Come il DNA viene copiato e usato per produrre RNA e proteine, con controllo degli errori e regolazione dell’espressione."
---

## Copiare il DNA conservando l'informazione

:::definizione{#replicazione titolo="Complementarità e replicazione semiconservativa"}
La **replicazione** è la copia del DNA. Avviene prima di ogni divisione cellulare, in modo che ciascuna delle due cellule figlie riceva un genoma completo. Si basa sulla complementarità delle basi. Di fronte a una A c'è sempre una T e di fronte a una G c'è sempre una C, quindi la sequenza di un filamento stabilisce quella dell'altro. I due filamenti della doppia elica si separano, e ciascuno fa da **stampo** per costruire un filamento nuovo. Si ottengono due doppie eliche, ciascuna formata da un filamento vecchio e da uno nuovo. Per questo motivo la replicazione si dice **semiconservativa**: di ogni molecola figlia si conserva una metà.

L'enzima che costruisce il filamento nuovo è la **DNA polimerasi**. Il suo funzionamento segue tre regole.

- Aggiunge un nucleotide alla volta, scegliendo quello complementare alla base dello stampo.
- Attacca ogni nucleotide all'estremità 3′ della catena che cresce. Il filamento nuovo si allunga quindi sempre nel verso **5′ → 3′**, mentre lo stampo viene letto nel verso 3′ → 5′.
- Allunga soltanto una catena già iniziata. Non è capace di unire i primi due nucleotidi.

I nucleotidi entrano nella reazione con tre gruppi fosfato (dATP, dGTP, dCTP, dTTP). Quando un nucleotide si lega alla catena perde due fosfati, e questa reazione fornisce l'energia per formare il legame.

Poiché la DNA polimerasi non sa iniziare una catena, serve un **innesco** (primer). È un breve tratto di RNA complementare allo stampo, costruito da un enzima detto **primasi**. La polimerasi parte dall'estremità 3′ dell'innesco e prosegue con il DNA.

La replicazione comincia in punti precisi del DNA, le **origini di replicazione**. In ogni origine la doppia elica si apre e si formano due **forcelle di replicazione**, che avanzano in versi opposti. Per questo la replicazione si dice bidirezionale. Il cromosoma circolare del batterio *Escherichia coli* ha una sola origine. I cromosomi eucariotici sono molto più lunghi e ne hanno migliaia, quindi molte regioni vengono copiate nello stesso momento.

Nelle cellule eucariotiche ogni tratto di DNA viene copiato una sola volta per ciclo. Il controllo si basa su due momenti separati. Prima della fase S un complesso proteico, **ORC**, riconosce le origini e vi carica le elicasi **MCM**, gli enzimi che apriranno la doppia elica. Le elicasi restano inattive. In fase S vengono attivate e la replicazione parte. Durante la fase S non si possono caricare nuove elicasi, quindi un'origine che ha già funzionato non riparte.
:::

:::esempio{titolo="Seguire i filamenti parentali"}
Una doppia elica ha entrambi i filamenti marcati, per esempio con un isotopo pesante dell'azoto. La cellula viene trasferita in un mezzo senza marcatore, quindi tutti i filamenti costruiti da quel momento sono non marcati. Dopo la prima replicazione le molecole sono 2, e ciascuna ha un filamento marcato e uno nuovo. Dopo la seconda replicazione le molecole sono 4. I filamenti marcati sono sempre i due iniziali, quindi 2 molecole ne contengono uno ciascuna e le altre 2 sono formate solo da filamenti nuovi. La frazione di molecole con un filamento marcato è $\dfrac{2}{4}=\dfrac{1}{2}$. A ogni replicazione il numero di molecole raddoppia, mentre i filamenti marcati restano due. Dopo la terza replicazione la frazione è quindi $\dfrac{2}{8}=\dfrac{1}{4}$.

![Due cicli di replicazione semiconservativa](/figure/biologia-semestre-filtro/flusso-informazione/semiconservativa-it.svg)
:::

:::definizione{#forcella titolo="Forcella, frammenti di Okazaki e fedeltà"}
La **forcella di replicazione** è il punto in cui la doppia elica si apre e i due filamenti vengono copiati. Vi lavorano insieme diverse proteine.

- L'**elicasi** separa i due filamenti, rompendo i legami a idrogeno fra le basi.
- Le **proteine SSB** si legano ai filamenti singoli e impediscono che si riappaino.
- La **topoisomerasi** agisce davanti alla forcella. L'apertura dell'elica fa attorcigliare troppo il DNA che sta più avanti. La topoisomerasi taglia il DNA, lo lascia ruotare e lo richiude, eliminando la tensione.
- La **pinza scorrevole** è un anello che circonda il DNA e tiene la polimerasi attaccata allo stampo, così che la polimerasi aggiunga migliaia di nucleotidi senza staccarsi.

I due filamenti stampo sono antiparalleli e la polimerasi lavora solo nel verso 5′ → 3′. Alla forcella i due filamenti nuovi vengono quindi costruiti in modi diversi.

- Il filamento **guida** (leading) cresce nello stesso verso in cui avanza la forcella. Viene costruito in modo continuo, a partire da un solo innesco.
- Il filamento **in ritardo** (lagging) dovrebbe crescere nel verso opposto all'avanzamento della forcella. Viene costruito a pezzi, detti **frammenti di Okazaki**. Ogni volta che la forcella apre un nuovo tratto di stampo, la primasi costruisce un innesco e la polimerasi sintetizza un frammento che si allontana dalla forcella, fino a raggiungere il frammento precedente.

Quale dei due filamenti sia guida e quale in ritardo dipende dalla forcella. Nell'altra forcella della stessa origine, che avanza nel verso opposto, i ruoli dei due stampi sono scambiati.

![Direzioni dei filamenti alla forcella](/figure/biologia-semestre-filtro/flusso-informazione/forcella-it.svg)

Alla fine il filamento in ritardo è formato da frammenti di DNA separati, ciascuno con un innesco di RNA all'inizio. Tre operazioni li trasformano in un filamento continuo.

1. Gli inneschi di RNA vengono rimossi. Nei batteri lo fa la DNA polimerasi I, negli eucarioti gli enzimi RNasi H e FEN1.
2. Una DNA polimerasi riempie con DNA lo spazio lasciato dall'innesco.
3. La **DNA ligasi** forma l'ultimo legame fosfodiestere fra un frammento e il successivo.

La ligasi unisce soltanto due nucleotidi adiacenti. Se fra due frammenti mancano dei nucleotidi, prima deve intervenire una polimerasi.

La replicazione è molto precisa, con circa un errore ogni miliardo di nucleotidi copiati. Due controlli successivi producono questa precisione.

- La **correzione di bozze** (proofreading) è eseguita dalla polimerasi stessa. Quando la polimerasi aggiunge un nucleotide sbagliato, la sua attività di esonucleasi 3′ → 5′ lo toglie dall'estremità appena costruita, e la sintesi riprende. Questa attività procede all'indietro, cioè nel verso opposto a quello della sintesi.
- La **riparazione degli appaiamenti errati** (mismatch repair) agisce dopo il passaggio della forcella. Riconosce le coppie di basi sbagliate sfuggite al primo controllo e sostituisce il tratto di filamento nuovo che le contiene.
:::

## Completare le estremità dei cromosomi

:::definizione{#telomerasi titolo="Telomeri, telomerasi e proliferazione"}
In un cromosoma lineare le estremità non vengono copiate per intero. Il motivo sta nel filamento in ritardo. Quando viene rimosso l'ultimo innesco, quello più vicino all'estremità, resta uno spazio vuoto. Nessuna polimerasi lo riempie, perché oltre quello spazio non c'è un'estremità 3′ da allungare. A ogni replicazione il cromosoma perde quindi un breve tratto a ciascuna estremità. Questo fatto si chiama **problema della replicazione delle estremità**.

Le estremità dei cromosomi, i **telomeri**, sono fatte di una breve sequenza ripetuta migliaia di volte, che nell'uomo è TTAGGG, e non contengono geni. A ogni divisione si perde una parte di queste ripetizioni e i geni restano intatti.

La **telomerasi** è l'enzima che riallunga i telomeri. Contiene un piccolo RNA con la sequenza complementare alla ripetizione, e lo usa come stampo per aggiungere nuove ripetizioni all'estremità 3′ del cromosoma. Poiché sintetizza DNA a partire da uno stampo di RNA, è una trascrittasi inversa. Una volta allungato questo filamento, primasi e DNA polimerasi costruiscono il filamento complementare. All'estremità resta comunque un breve tratto a filamento singolo.

La telomerasi è attiva nelle cellule germinali e nelle cellule staminali. Nella maggior parte delle cellule del corpo è quasi assente, quindi i telomeri si accorciano a ogni divisione. Quando diventano troppo corti la cellula li tratta come DNA danneggiato e smette definitivamente di dividersi. Questo stato si chiama **senescenza replicativa** e limita il numero di divisioni di una cellula normale. Circa il 90% dei tumori riattiva la telomerasi, e in questo modo le cellule tumorali si dividono senza limite. La telomerasi da sola non basta a formare un tumore, perché servono anche altre alterazioni.
:::

## Organizzazione di un gene

:::definizione{#gene titolo="Prodotto funzionale, esoni e regioni regolative"}
Un **gene** è un tratto di DNA che contiene le istruzioni per costruire un prodotto. Il prodotto è una proteina oppure un RNA che funziona come tale, per esempio un tRNA. L'informazione di un gene per una proteina viene usata in due tappe. Nella **trascrizione** il gene viene copiato in una molecola di RNA messaggero (mRNA). Nella **traduzione** i ribosomi leggono l'mRNA e costruiscono la proteina. L'insieme delle due tappe si chiama **espressione genica**.

Un gene non comprende solo la parte che viene copiata. Davanti a essa si trova il **promotore**, la sequenza a cui si lega l'enzima della trascrizione. Il promotore stabilisce dove comincia la trascrizione e in quale verso procede. Altre sequenze regolatrici, vicine o lontane, stabiliscono quanto spesso il gene viene trascritto.

Nella regolazione si distinguono due tipi di componenti.

- Un elemento **in cis** è una sequenza di DNA, come un promotore. Regola soltanto il gene che si trova sulla sua stessa molecola di DNA.
- Un fattore **in trans** è una molecola, in genere una proteina, prodotta da un altro gene. Si sposta nella cellula e regola tutti i geni che portano la sequenza a cui si lega.

Questa distinzione serve negli esperimenti con due copie dello stesso gene. Una mutazione in una sequenza in cis altera solo la copia che la contiene. Una mutazione in un fattore in trans è compensata dalla proteina normale prodotta dall'altra copia.

Nei batteri un solo mRNA contiene spesso le istruzioni per più proteine, una di seguito all'altra, e si dice **policistronico**. Negli eucarioti ogni mRNA contiene in genere le istruzioni per una sola proteina.

I geni eucariotici sono interrotti. Lungo il gene si alternano gli **esoni**, tratti che restano nell'mRNA finale, e gli **introni**, tratti che vengono trascritti e poi eliminati. L'mRNA finale ha tre parti.

- La **5′ UTR** (regione non tradotta) va dall'inizio dell'mRNA al codone d'inizio.
- La **regione codificante** va dal codone d'inizio al codone di arresto. È la sola parte tradotta in proteina.
- La **3′ UTR** va dal codone di arresto alla fine dell'mRNA.

Le due UTR fanno parte degli esoni e non vengono tradotte. Un esone non coincide quindi con una parte codificante, e il numero di esoni non indica la lunghezza della proteina.
:::

## Trascrizione e controllo dell'inizio

:::definizione{#trascrizione-lac titolo="Filamento stampo e operone lac"}
Nella **trascrizione** un enzima, la **RNA polimerasi**, costruisce una molecola di RNA copiando un tratto di DNA. In quel tratto la doppia elica si apre e uno solo dei due filamenti viene usato come stampo. La RNA polimerasi segue le stesse regole di verso della DNA polimerasi: legge lo stampo 3′ → 5′ e allunga l'RNA 5′ → 3′. A differenza della DNA polimerasi comincia una catena senza bisogno di innesco. I due filamenti del DNA hanno nomi diversi.

- Il **filamento stampo** è quello che la polimerasi legge. L'RNA è complementare a esso.
- Il **filamento codificante** è l'altro. Ha la stessa sequenza dell'RNA, con T al posto di U.

Se il filamento codificante è 5′-ATGGCA-3′, per esempio, l'RNA è 5′-AUGGCA-3′. Lungo lo stesso cromosoma alcuni geni usano come stampo un filamento e altri geni usano l'altro.

Nei batteri la RNA polimerasi riconosce il promotore con l'aiuto di una proteina, il **fattore sigma**. I batteri non hanno il nucleo, quindi i ribosomi cominciano a tradurre un mRNA mentre la polimerasi lo sta ancora costruendo.

L'**operone lac** di *Escherichia coli* è l'esempio classico di regolazione della trascrizione. Un **operone** è un gruppo di geni vicini, trascritti insieme in un solo mRNA a partire da un unico promotore. L'operone lac contiene i geni degli enzimi che servono a utilizzare lo zucchero lattosio. Produrli costa energia, quindi il batterio li produce solo quando il lattosio c'è e il glucosio, lo zucchero che preferisce, manca. Due proteine controllano l'operone.

- Il **repressore LacI** risponde al lattosio. Senza lattosio si lega a una sequenza accanto al promotore, l'**operatore**, e blocca la RNA polimerasi. Quando il lattosio è presente, una molecola che ne deriva, l'allolattosio, si lega al repressore e lo stacca dall'operatore. L'allolattosio si chiama **induttore**.
- L'**attivatore CAP** risponde al glucosio. Quando il glucosio è scarso nella cellula aumenta il cAMP, che si lega a CAP. Il complesso CAP-cAMP si lega vicino al promotore e aiuta la RNA polimerasi ad attaccarsi.

La trascrizione è elevata solo se il repressore è staccato e l'attivatore è legato. I quattro casi sono i seguenti.

| Lattosio | Glucosio | Repressore | CAP-cAMP | Trascrizione |
|---|---|---|---|---|
| assente | presente | legato | assente | spenta |
| assente | assente | legato | legato | spenta |
| presente | presente | staccato | assente | bassa |
| presente | assente | staccato | legato | elevata |

![Due controlli sull’operone lac](/figure/biologia-semestre-filtro/flusso-informazione/lac-it.svg)

Le mutazioni dell'operone si interpretano individuando quale legame viene alterato. I tre componenti sono di natura diversa: l'operatore è una sequenza di DNA, LacI è una proteina e l'allolattosio è una piccola molecola. Si considerano due mutazioni.

- Una mutazione di LacI che gli impedisce di legare l'allolattosio lascia il repressore sempre attaccato all'operatore. L'operone resta spento anche con il lattosio. LacI è un fattore in trans, quindi il repressore mutato spegne tutte le copie dell'operone presenti nella cellula.
- Una mutazione dell'operatore che impedisce a LacI di legarsi lascia l'operone sempre libero dal repressore. L'operatore è un elemento in cis, quindi l'effetto riguarda solo la copia dell'operone che porta la mutazione.
:::

:::definizione{#trascrizione-eucariotica titolo="Polimerasi nucleari e fattori di trascrizione"}
Gli eucarioti hanno tre RNA polimerasi nel nucleo, ciascuna per una classe di RNA.

- La **RNA polimerasi I** trascrive i geni degli rRNA maggiori.
- La **RNA polimerasi II** trascrive tutti i geni che codificano proteine, quindi produce gli mRNA.
- La **RNA polimerasi III** trascrive i geni dei tRNA e dell'rRNA più piccolo, il 5S.

La RNA polimerasi II non riconosce il promotore da sola. Ha bisogno di proteine dette **fattori di trascrizione**, che sono di due tipi.

- I **fattori generali** servono per tutti i geni. Si montano sul promotore insieme alla polimerasi e formano il complesso d'inizio. Uno di essi, **TBP**, riconosce una sequenza presente in molti promotori, la **TATA box**.
- I **fattori specifici** si legano a sequenze regolatrici proprie di alcuni geni e stabiliscono in quali cellule e in quali momenti il gene è attivo. Una sequenza regolatrice che aumenta la trascrizione si chiama **enhancer**, una che la riduce si chiama **silencer**.

Un enhancer si trova spesso a migliaia di coppie di basi dal gene che regola. Agisce perché il DNA si ripiega ad ansa e porta l'enhancer, con le proteine legate, a contatto con il promotore. Tutto questo richiede che la cromatina sia aperta in quei punti, come descritto nell'unità su genoma e cromatina.

Dopo l'inizio la polimerasi II percorre il gene e allunga l'RNA. La polimerasi ha una lunga coda, detta **CTD**, che durante il percorso viene fosforilata. Alla coda fosforilata si legano gli enzimi che modificano l'RNA mentre viene prodotto. Alla fine del gene l'RNA viene tagliato in un punto preciso, il sito di poliadenilazione. La polimerasi prosegue ancora per un tratto e poi si stacca dal DNA. La fine dell'mRNA è quindi stabilita dal taglio e non dal punto in cui la polimerasi si ferma.

La quantità di una proteina in una cellula non dipende solo dalla trascrizione del suo gene. Dipende anche da quanto dura l'mRNA, da quante volte viene tradotto e dalla velocità con cui la proteina viene degradata. Se la quantità di una proteina aumenta, per attribuire l'aumento alla trascrizione si misura l'RNA appena prodotto, e non solo la proteina.
:::

## Maturazione e durata degli RNA

:::definizione{#maturazione-rna titolo="Cap, splicing e poliadenilazione"}
Negli eucarioti l'RNA appena trascritto, detto **pre-mRNA**, non è pronto per essere tradotto. Nel nucleo subisce tre modificazioni, che insieme si chiamano **maturazione**. Solo l'mRNA maturo esce dal nucleo.

1. **Cap 5′**. All'estremità 5′ viene aggiunto un nucleotide di guanina modificato, legato al contrario rispetto agli altri. Il cap protegge l'mRNA dalla degradazione ed è il punto in cui il ribosoma si attacca all'inizio della traduzione.
2. **Coda poli-A**. L'RNA viene tagliato all'estremità 3′ e un enzima, la poli-A polimerasi, aggiunge circa 200 nucleotidi di adenina. La coda non è scritta nel DNA: è aggiunta dall'enzima senza uno stampo. Anch'essa protegge l'mRNA dalla degradazione.
3. **Splicing**. Gli introni vengono tagliati via e gli esoni vengono uniti fra loro.

Lo splicing è eseguito dallo **spliceosoma**, un complesso formato da proteine e da piccoli RNA detti **snRNA**. Gli snRNA riconoscono, per appaiamento di basi, le sequenze che segnano l'inizio e la fine di ogni introne. L'introne viene tagliato a un'estremità e ripiegato su sé stesso a formare un cappio (lariat), poi viene tagliato all'altra estremità e i due esoni vengono uniti. Le reazioni di taglio sono catalizzate dagli snRNA e non dalle proteine. Lo spliceosoma è quindi un esempio di **ribozima**, cioè di RNA con attività di enzima.

![Esclusione di un esone e formazione delle isoforme](/figure/biologia-semestre-filtro/flusso-informazione/splicing-it.svg)

Nello **splicing alternativo** lo stesso pre-mRNA viene maturato in modi diversi, e da un solo gene si ottengono mRNA diversi e quindi proteine diverse. Un gene con gli esoni 1, 2, 3 e 4, per esempio, in un tessuto dà un mRNA con tutti e quattro gli esoni e in un altro tessuto dà un mRNA con gli esoni 1, 2 e 4. La scelta dipende da proteine regolatrici presenti in quel tessuto. Grazie allo splicing alternativo i circa 20 000 geni umani producono molte più di 20 000 proteine.

Quando un esone viene saltato conta la sua lunghezza. L'mRNA viene letto a gruppi di tre nucleotidi. Se l'esone saltato ha un numero di nucleotidi multiplo di 3, alla proteina mancano alcuni amminoacidi e il resto è invariato. Se il numero non è multiplo di 3, tutti i gruppi successivi risultano spostati e la proteina cambia completamente da quel punto in poi.

L'**editing dell'RNA** è un processo diverso. Un enzima cambia chimicamente una singola base dell'RNA dopo la trascrizione, per esempio una C in U. Un codone dell'mRNA risulta così diverso da quello scritto nel DNA.
:::

:::definizione{#regolazione-rna titolo="Turnover, piccoli RNA e RNA strutturali"}
La quantità di un mRNA nella cellula dipende da due velocità, quella con cui viene prodotto e quella con cui viene degradato. La durata di un mRNA si misura con l'**emivita**, cioè il tempo in cui la sua quantità si dimezza quando la produzione è ferma. Un mRNA ha, per esempio, un'emivita di 20 minuti. Si blocca la trascrizione. Dopo 20 minuti ne resta $\dfrac{1}{2}$. Dopo altri 20 minuti si dimezza di nuovo, quindi dopo 40 minuti ne resta $\dfrac{1}{2}\cdot\dfrac{1}{2}=\dfrac{1}{4}$.

La degradazione di un mRNA comincia dalle sue due protezioni. La coda poli-A viene accorciata (deadenilazione) e il cap viene rimosso (decapping). A quel punto le esonucleasi, enzimi che demoliscono un acido nucleico a partire da un'estremità, consumano l'mRNA.

I **miRNA** (microRNA) regolano la durata e la traduzione degli mRNA. Sono RNA di circa 22 nucleotidi, prodotti dalla cellula. Un miRNA si associa a una proteina, **Argonaute**, e guida il complesso verso gli mRNA che contengono una sequenza complementare alla sua, di solito nella 3′ UTR. Negli animali l'appaiamento è in genere parziale. L'mRNA bersaglio viene tradotto di meno e degradato più in fretta, quindi la proteina corrispondente diminuisce. Un solo miRNA regola molti mRNA diversi.

L'**RNA interference** (RNAi) usa lo stesso meccanismo. Un RNA a doppio filamento viene tagliato dall'enzima **Dicer** in corti frammenti, detti **siRNA**. Un filamento del siRNA si lega ad Argonaute e la guida verso l'mRNA con sequenza perfettamente complementare. In questo caso Argonaute taglia l'mRNA, che viene poi distrutto. In laboratorio si introduce nella cellula un siRNA per spegnere un gene a scelta.

Anche gli altri RNA vengono maturati. I precursori degli rRNA sono tagliati e modificati nel nucleolo, dove vengono anche uniti alle proteine per formare le due subunità del ribosoma. I precursori dei tRNA vengono accorciati alle estremità e alcune loro basi vengono modificate. Ogni tRNA termina all'estremità 3′ con la sequenza **CCA**, a cui si attacca l'amminoacido. Le subunità dei ribosomi sono costruite nel nucleolo, mentre la traduzione avviene nel citoplasma.
:::

## Dal codone all'amminoacido

:::definizione{#codice-genetico titolo="Codice, cornice di lettura e tRNA"}
Una proteina è una sequenza di amminoacidi e un mRNA è una sequenza di nucleotidi. Il **codice genetico** è la regola che fa corrispondere le due sequenze. L'mRNA viene letto a gruppi di tre nucleotidi, detti **codoni**, e ogni codone indica un amminoacido. Con quattro basi i codoni possibili sono $4\cdot 4\cdot 4=64$. Di questi, 61 indicano un amminoacido e 3 sono **codoni di stop** (UAA, UAG, UGA), che segnano la fine della proteina. Il codone AUG indica l'amminoacido metionina ed è anche il **codone d'inizio**. Il codice ha tre proprietà.

- È **degenerato**. Gli amminoacidi sono 20 e i codoni che li indicano sono 61, quindi quasi ogni amminoacido corrisponde a più codoni. La leucina, per esempio, ne ha sei.
- È **non ambiguo**. Ogni codone indica un solo amminoacido.
- È **quasi universale**. È lo stesso in quasi tutti gli organismi. Fanno eccezione pochi casi, fra cui i mitocondri, in cui alcuni codoni hanno un significato diverso.

La lettura parte dal codone d'inizio e prosegue a tre a tre. Il modo in cui la sequenza viene divisa in codoni si chiama **cornice di lettura**. La sequenza AUGGCAUAA, letta dal primo nucleotide, dà i codoni AUG, GCA e UAA.

La corrispondenza fra codone e amminoacido è realizzata dai **tRNA**. Un tRNA porta un amminoacido a un'estremità e ha, in un'altra regione, tre basi dette **anticodone**. L'anticodone si appaia al codone complementare dell'mRNA, con orientamento antiparallelo. Al codone 5′-AUG-3′ si appaia l'anticodone 3′-UAC-5′. I tRNA sono meno di 61, perché la terza base del codone ammette un appaiamento meno rigido, detto **vacillamento** (wobble). Uno stesso tRNA riconosce quindi più codoni che differiscono solo nella terza base e indicano lo stesso amminoacido.

Ogni tRNA riceve il proprio amminoacido da un enzima, l'**amminoacil-tRNA sintetasi**. Ne esiste una per ogni amminoacido. Riconosce sia l'amminoacido sia i tRNA che gli corrispondono e li unisce consumando ATP. La precisione della traduzione dipende da questo passaggio, perché il ribosoma controlla solo l'appaiamento fra codone e anticodone e non l'amminoacido trasportato. Se in laboratorio si attacca a un tRNA l'amminoacido sbagliato, il ribosoma lo inserisce comunque nella proteina.
:::

## Costruire la catena polipeptidica

:::definizione{#traduzione titolo="Inizio, allungamento e arresto"}
La **traduzione** è la costruzione di una proteina secondo la sequenza di un mRNA. La esegue il **ribosoma**, formato da due subunità, una minore e una maggiore, fatte di rRNA e proteine. Il ribosoma ha tre siti in cui si alloggiano i tRNA.

- Il **sito A** accoglie il tRNA che arriva con un nuovo amminoacido.
- Il **sito P** contiene il tRNA a cui è attaccata la catena in crescita.
- Il **sito E** è l'uscita, da cui il tRNA ormai scarico lascia il ribosoma.

La traduzione ha tre fasi. Nell'**inizio** il ribosoma trova il codone d'inizio. Negli eucarioti la subunità minore si lega al cap e scorre lungo l'mRNA fino al primo AUG adatto. Nei batteri si lega a una sequenza dell'mRNA posta poco prima dell'AUG. Un tRNA speciale, il tRNA iniziatore, porta la metionina e si colloca sull'AUG nel sito P. Poi si aggiunge la subunità maggiore.

Nell'**allungamento** si ripete un ciclo di tre passaggi, uno per ogni amminoacido.

1. Un tRNA con il suo amminoacido entra nel sito A, se il suo anticodone è complementare al codone che si trova lì.
2. La catena attaccata al tRNA del sito P viene trasferita sull'amminoacido del sito A, con la formazione di un **legame peptidico**. Questa reazione è catalizzata dall'rRNA della subunità maggiore.
3. Il ribosoma avanza di un codone (traslocazione). Il tRNA con la catena passa dal sito A al sito P, e il tRNA scarico passa dal sito P al sito E ed esce. Il sito A è di nuovo libero.

L'ingresso del tRNA e la traslocazione richiedono proteine dette fattori di allungamento e consumano GTP.

![Siti E, P e A durante l’allungamento](/figure/biologia-semestre-filtro/flusso-informazione/ribosoma-it.svg)

La **terminazione** avviene quando nel sito A arriva un codone di stop. Nessun tRNA lo riconosce. Al suo posto entra una proteina, il **fattore di rilascio**, che stacca la catena dall'ultimo tRNA. La proteina è libera e il ribosoma si separa dall'mRNA.

Il ribosoma legge l'mRNA nel verso 5′ → 3′. La proteina cresce dall'estremità amminoterminale (N-terminale) verso l'estremità carbossiterminale (C-terminale), quindi il primo amminoacido inserito è quello N-terminale.

Il numero di amminoacidi si ricava dalla lunghezza della regione codificante. Il codone di stop occupa tre nucleotidi e non corrisponde ad alcun amminoacido. Una regione codificante di 300 nucleotidi, contati dal primo nucleotide dell'AUG all'ultimo del codone di stop, contiene $\dfrac{300}{3}=100$ codoni. Uno è lo stop, quindi la proteina ha $100-1=99$ amminoacidi.

Uno stesso mRNA è tradotto da molti ribosomi contemporaneamente, uno dietro l'altro. L'insieme si chiama **polisoma**. Ogni ribosoma costruisce una copia della proteina.
:::

## Conservare le proteine funzionanti

:::definizione{#proteostasi titolo="Ripiegamento, modificazioni e degradazione"}
Una catena di amminoacidi appena costruita non è ancora una proteina funzionante. Deve ripiegarsi nella forma corretta. Nel citoplasma, che è affollato di altre molecole, una catena non ancora ripiegata tende ad attaccarsi ad altre catene e a formare ammassi inutili, detti aggregati. I **chaperon** sono proteine che lo impediscono. Si legano alla catena, la tengono isolata mentre si ripiega e, se il ripiegamento non riesce, le permettono di riprovare. Molti consumano ATP. Dopo il ripiegamento molte proteine ricevono modificazioni, come la fosforilazione o l'aggiunta di zuccheri, oppure vengono tagliate in un punto preciso. Una proteina presente in quantità normale è quindi inattiva se una di queste tappe non è avvenuta.

La **proteostasi** è l'equilibrio fra le proteine che la cellula produce e quelle che elimina. Le proteine danneggiate, mal ripiegate o non più necessarie sono eliminate dal sistema **ubiquitina-proteasoma**, in due tempi.

1. La proteina da eliminare viene marcata con una catena di molecole di **ubiquitina**, una piccola proteina. La marcatura richiede tre enzimi in successione. E1 attiva l'ubiquitina, E2 la trasporta ed E3 riconosce la proteina bersaglio e vi fa attaccare l'ubiquitina.
2. Il **proteasoma**, un grande complesso a forma di cilindro, riconosce la catena di ubiquitine, distende la proteina consumando ATP e la taglia in brevi frammenti (peptidi). Le ubiquitine vengono staccate e riusate.

![Destini di una proteina e controllo della qualità](/figure/biologia-semestre-filtro/flusso-informazione/proteostasi-it.svg)

L'ubiquitina non segnala sempre la degradazione. Il significato dipende dal modo in cui le ubiquitine sono unite fra loro. Una catena in cui ogni ubiquitina è legata alla lisina 48 della precedente (catena K48) invia la proteina al proteasoma. Una sola ubiquitina, o catene di altro tipo, regolano il trasporto della proteina, la segnalazione o la riparazione del DNA. Una proteina simile all'ubiquitina, **SUMO**, cambia la posizione o i legami di una proteina e non ne provoca la degradazione. Gli aggregati e gli organelli, che sono troppo grandi per il proteasoma, vengono eliminati con l'autofagia nei lisosomi.

Un esperimento mostra come si usano queste nozioni. Si tratta una coltura con un farmaco che blocca il proteasoma, e la quantità di una proteina aumenta. La proteina veniva quindi degradata dal proteasoma, e ora si accumula. Il dato riguarda l'eliminazione della proteina. Per sapere se è cambiata anche la sua produzione si misura l'RNA del gene.
:::
