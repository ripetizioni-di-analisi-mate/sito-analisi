---
titolo: "Genoma, cromatina ed epigenetica"
sommario: "Dal conteggio dei cromosomi ai nucleosomi: organizzazione del genoma, accessibilità, memoria epigenetica e sequenze mobili."
---

## Cromosomi, cromatidi e quantità di DNA

:::definizione{#cromosomi titolo="Un cromosoma prima e dopo la replicazione"}
Un **cromosoma** eucariotico è una lunga molecola di DNA a doppia elica, lineare, avvolta intorno a proteine. Il numero dei cromosomi è fisso per ogni specie, e una cellula umana ne ha 46. L'aspetto di un cromosoma cambia con la replicazione del DNA.

- **Prima** della replicazione il cromosoma contiene una sola molecola di DNA.
- **Dopo** la replicazione contiene due molecole di DNA identiche, dette **cromatidi fratelli**, unite fra loro in una regione detta centromero. È la forma a X delle fotografie. Si conta ancora come un solo cromosoma, finché i due cromatidi restano uniti.

I due filamenti della doppia elica non sono i due cromatidi. Ogni cromatidio è una doppia elica completa.

Le cellule del corpo sono **diploidi**, cioè hanno due copie di ogni cromosoma, una ricevuta dalla madre e una dal padre. Le due copie si chiamano **cromosomi omologhi**. Due omologhi portano gli stessi geni nelle stesse posizioni, dette **loci** (al singolare locus). Le versioni di un gene, dette **alleli**, sono però spesso diverse nei due omologhi. Due cromatidi fratelli, invece, sono copie identiche l'uno dell'altro.

Per contare si usano due simboli. Il simbolo $n$ indica il numero di cromosomi di un corredo, cioè di una serie completa con una copia per tipo. Nell'uomo $n=23$, e una cellula diploide ha $2n=46$ cromosomi. Il simbolo $C$ indica la quantità di DNA di un corredo non replicato. Nel corso della vita di una cellula i conti sono i seguenti.

| Momento | Cromosomi | Molecole di DNA | Quantità di DNA |
|---|---|---|---|
| Prima della replicazione (fase G1) | 46 | 46 | $2C$ |
| Dopo la replicazione (fase G2) | 46 | 92 | $4C$ |

La replicazione raddoppia quindi le molecole di DNA e lascia invariato il numero di cromosomi. La cellula resta diploide, perché le coppie di omologhi sono sempre 23. Durante la divisione i cromatidi fratelli si separano, e da quel momento ciascuno si conta come un cromosoma.

![Un cromosoma non replicato e lo stesso cromosoma duplicato](/figure/biologia-semestre-filtro/genoma-cromatina/cromosoma-it.svg)
:::

:::esempio{titolo="Leggere una misura di DNA"}
Una specie ha $2n=8$. Prima della replicazione una sua cellula ha 8 cromosomi, ciascuno con una molecola di DNA, quindi 8 molecole. Dopo la replicazione ha ancora 8 cromosomi, ciascuno con due cromatidi, quindi $8\cdot 2=16$ molecole. Un colorante che si lega al DNA dà un segnale proporzionale alla quantità di DNA. Se il segnale prima della replicazione è 100, dopo è 200. Il raddoppio del segnale indica che il DNA è raddoppiato e non che i cromosomi sono diventati 16. Per conoscere il numero di cromosomi si devono contare i cromosomi al microscopio.
:::

## Centromeri e telomeri

:::definizione{#centromeri-telomeri titolo="Regioni che permettono la conservazione dei cromosomi"}
Un cromosoma si conserva da una divisione all'altra grazie a tre tipi di regioni, ciascuno con un compito.

- Le **origini di replicazione** sono i punti da cui comincia la copia del DNA. Ogni cromosoma eucariotico ne ha molte.
- Il **centromero** è la regione su cui si monta il **cinetocore**, un complesso di proteine a cui si attaccano i microtubuli del fuso. Durante la divisione i microtubuli tirano i cromosomi verso le due cellule figlie. Un frammento di cromosoma senza centromero viene copiato, ma non è distribuito correttamente e in genere si perde.
- I **telomeri** sono le due estremità del cromosoma.

Nei centromeri umani il DNA è formato da brevi sequenze ripetute moltissime volte, dette alfa-satellite. Ciò che identifica il centromero è però una proteina. Nei nucleosomi del centromero l'istone H3 è sostituito da una sua variante, **CENP-A**, e il cinetocore si monta dove c'è CENP-A. Esistono infatti centromeri funzionanti, detti neocentromeri, in regioni prive di sequenze alfa-satellite.

Nei **telomeri** il DNA è una sequenza breve ripetuta migliaia di volte, che nell'uomo è TTAGGG. Su queste ripetizioni si lega un gruppo di proteine detto **shelterin**. La cellula ripara le rotture del DNA saldando fra loro le estremità libere. Shelterin copre l'estremità naturale del cromosoma e impedisce che venga trattata come una rottura. Senza questa protezione due cromosomi si saldano l'uno all'altro per le estremità.

A ogni replicazione i telomeri si accorciano un poco, per un motivo spiegato nell'unità sulla replicazione. La **telomerasi** è l'enzima che li riallunga. Contiene una molecola di RNA che usa come stampo per aggiungere nuove ripetizioni TTAGGG, quindi è una trascrittasi inversa. È attiva nelle cellule germinali e nelle cellule staminali, e poco o per nulla nella maggior parte delle altre cellule. Shelterin e telomerasi hanno dunque compiti diversi: la prima protegge l'estremità, la seconda la allunga.
:::

:::esempio{titolo="Due alterazioni, due conseguenze"}
Si confrontano due cromosomi difettosi. Il primo ha telomeri normali e un cinetocore che non funziona. I microtubuli non riescono ad attaccarsi, quindi durante la divisione il cromosoma non viene distribuito correttamente e una cellula figlia resta senza. Il secondo ha un cinetocore normale e telomeri senza shelterin. Viene distribuito correttamente, ma le sue estremità sono trattate come rotture, quindi la cellula si ferma oppure salda il cromosoma a un altro. In entrambi i casi il genoma si altera, per due motivi diversi. Il centromero serve alla distribuzione e il telomero alla protezione delle estremità.
:::

## DNA associato agli istoni

:::definizione{#nucleosomi titolo="Nucleosoma, ottamero e DNA di collegamento"}
Il DNA di una cellula umana, disteso, è lungo circa due metri, e il nucleo ha un diametro di pochi millesimi di millimetro. Il DNA sta nel nucleo perché è avvolto intorno a proteine dette **istoni**. L'insieme di DNA e proteine si chiama **cromatina**.

L'unità della cromatina è il **nucleosoma**. È formato da un nucleo di otto istoni, detto **ottamero**, intorno al quale il DNA compie quasi due giri, per una lunghezza di circa 147 coppie di basi. L'ottamero contiene due copie di ciascuno dei quattro istoni H2A, H2B, H3 e H4. Il DNA ha carica negativa, per i suoi gruppi fosfato, e gli istoni sono ricchi di amminoacidi con carica positiva (lisina e arginina), quindi le due molecole si attraggono.

Il tratto di DNA che unisce un nucleosoma al successivo si chiama **linker**. Al microscopio elettronico la cromatina distesa somiglia a una collana di perle, in cui le perle sono i nucleosomi e il filo è il linker. Un quinto istone, **H1**, non fa parte dell'ottamero. Si lega nel punto in cui il DNA entra ed esce dal nucleosoma e avvicina i nucleosomi fra loro. Da ogni istone dell'ottamero sporge un'estremità flessibile, detta **coda**, su cui la cellula aggiunge gruppi chimici.

Con questi numeri si stima quanti nucleosomi ci sono in un tratto di DNA. Se il DNA avvolto misura 147 coppie di basi e il linker ne misura in media 53, ogni nucleosoma con il suo linker occupa $147+53=200$ coppie di basi. In un tratto di 2000 coppie di basi ci sono quindi $\dfrac{2000}{200}=10$ nucleosomi. Il valore di 200 è una media, perché la lunghezza del linker cambia da una regione all'altra.

![Ottamero istonico, DNA avvolto e linker con H1](/figure/biologia-semestre-filtro/genoma-cromatina/nucleosoma-it.svg)
:::

:::esempio{titolo="Perché la nucleasi produce una scala"}
Una **nucleasi** è un enzima che taglia il DNA. Nella cromatina taglia facilmente il linker, che è esposto, e con difficoltà il DNA avvolto sull'ottamero, che è protetto. Si tratta la cromatina con una nucleasi per poco tempo, in modo che solo alcuni linker siano tagliati. I frammenti ottenuti contengono uno, due o tre nucleosomi, quindi misurano circa 200, 400 e 600 coppie di basi. Separati per lunghezza su un gel formano bande a distanze regolari, come i pioli di una scala. La distanza fra due bande, 200 coppie di basi, è la lunghezza di un nucleosoma con il suo linker. Se il trattamento dura a lungo la nucleasi consuma tutti i linker e resta solo il DNA protetto, di circa 147 coppie di basi.
:::

:::osservazione{titolo="Una misura media conserva variabilità locale"}
Il valore di 200 coppie di basi è la media su tutti i nucleosomi del campione. In alcune regioni il linker è più corto di 53 coppie di basi, in altre è più lungo, e alcuni tratti sono privi di nucleosomi. La scala di bande descrive quindi la distanza media e non la posizione di ogni nucleosoma. Per sapere se un nucleosoma copre un punto preciso del DNA, per esempio l'inizio di un gene, serve una misura eseguita su quel punto.
:::

## Organizzazione tridimensionale e accessibilità

:::osservazione{#compattazione titolo="Anse e organizzazioni dinamiche"}
I nucleosomi sono il primo livello di ripiegamento del DNA. Al di sopra di questo livello la cromatina forma **anse**, cioè tratti ripiegati che portano a contatto due punti lontani lungo la sequenza. Un'ansa, per esempio, avvicina a un gene una sequenza regolatrice che dista migliaia di coppie di basi. Nel nucleo di una cellula che non si sta dividendo ogni cromosoma occupa una propria regione, detta territorio cromosomico.

Due complessi proteici a forma di anello, della famiglia **SMC**, organizzano le anse.

- Le **coesine** formano le anse nella cellula che non si divide. Dopo la replicazione tengono inoltre uniti i due cromatidi fratelli.
- Le **condensine** compattano i cromosomi all'inizio della divisione e danno loro la forma visibile al microscopio.

Durante la divisione il cromosoma è molto più compatto e contiene esattamente lo stesso DNA. Molti libri mostrano uno stadio intermedio, la **fibra di 30 nm**, in cui i nucleosomi sono impilati in modo regolare. Questa fibra si osserva in provetta. Nelle cellule la cromatina ha per lo più un ripiegamento irregolare, quindi lo schema a livelli successivi è un modello semplificato.
:::

:::definizione{#eucromatina-eterocromatina titolo="Stati locali della cromatina"}
La cromatina di un nucleo si trova in due stati.

- L'**eucromatina** è poco compatta. Il suo DNA è accessibile alle proteine, e qui si trova la maggior parte dei geni attivi.
- L'**eterocromatina** è molto compatta. Il suo DNA è poco accessibile e i geni che contiene sono in genere spenti.

Lo stato della cromatina è una condizione che rende possibile la trascrizione e da solo non la avvia. Un gene in eucromatina viene trascritto solo se sono presenti le proteine che lo attivano, cioè i fattori di trascrizione.

L'eterocromatina è di due tipi. Quella **costitutiva** è compatta in tutte le cellule e in ogni momento. Si trova nelle regioni ricche di sequenze ripetute, come quelle intorno ai centromeri. Quella **facoltativa** è compatta solo in alcuni tipi di cellule o in alcune fasi dello sviluppo. L'esempio principale è il cromosoma X inattivo. Le femmine dei mammiferi hanno due cromosomi X, e in ogni cellula uno dei due è compattato e quasi del tutto spento. Alcuni geni di questo cromosoma restano comunque attivi.

![Stessa sequenza con diversa disposizione dei nucleosomi e accessibilità del promotore](/figure/biologia-semestre-filtro/genoma-cromatina/accessibilita-it.svg)
:::

:::definizione{#rimodellamento titolo="Spostare un nucleosoma consumando ATP"}
Un nucleosoma che copre una sequenza impedisce alle altre proteine di legarsi a essa. La cellula sposta i nucleosomi con i **complessi di rimodellamento della cromatina**, enzimi che consumano ATP. Un complesso di rimodellamento fa scorrere il nucleosoma lungo il DNA, lo rimuove oppure sostituisce uno dei suoi istoni. Secondo il caso, una sequenza regolatrice viene scoperta oppure coperta.

Un fattore di trascrizione, per esempio, deve legarsi a una sequenza coperta da un nucleosoma. Il complesso di rimodellamento sposta il nucleosoma di qualche decina di coppie di basi, la sequenza resta scoperta e il fattore si lega. In questo processo la sequenza del DNA non cambia. Cambia solo la posizione del nucleosoma. Per dimostrare che lo spostamento dipende dal complesso, in laboratorio si usa una versione del complesso incapace di idrolizzare ATP. Con questa versione il nucleosoma resta al suo posto.
:::

## Modificazioni e memoria epigenetica

:::definizione{#epigenetica titolo="Stati regolativi senza cambiamento di sequenza"}
Tutte le cellule di una persona hanno lo stesso DNA, eppure una cellula del fegato e un neurone usano geni diversi. Quando una cellula del fegato si divide, inoltre, le cellule figlie sono ancora cellule del fegato. L'**epigenetica** studia le informazioni che stabiliscono quali geni sono attivi e che passano alle cellule figlie senza che la sequenza del DNA cambi. Queste informazioni sono gruppi chimici aggiunti al DNA o agli istoni, detti **modificazioni epigenetiche**.

La prima modificazione è la **metilazione del DNA**, cioè l'aggiunta di un gruppo metile ($\mathrm{CH_3}$) alla base citosina. Nell'uomo riguarda le citosine seguite da una guanina, nelle coppie dette **CpG**. La sequenza resta la stessa, perché una citosina metilata si appaia ancora con la guanina. Quando le CpG del **promotore** di un gene, cioè della regione da cui parte la trascrizione, sono metilate, il gene è in genere spento. Proteine specifiche riconoscono le citosine metilate e compattano la cromatina.

La metilazione passa alle cellule figlie con il seguente meccanismo. In una CpG i due filamenti portano entrambi una C metilata, perché di fronte a CG c'è GC. Con la replicazione ogni nuova doppia elica riceve un filamento vecchio, metilato, e uno nuovo, non metilato. L'enzima **DNMT1** riconosce i siti metilati su un solo filamento e aggiunge il metile sul filamento nuovo. Le due cellule figlie hanno quindi le stesse CpG metilate della cellula madre.

![Mantenimento della metilazione dopo replicazione: sito parentale, emimetilazione e ripristino](/figure/biologia-semestre-filtro/genoma-cromatina/metilazione-it.svg)

La seconda classe di modificazioni riguarda le code degli istoni. Le due principali sono l'acetilazione e la metilazione.

L'**acetilazione** è l'aggiunta di un gruppo acetile all'amminoacido lisina. La lisina ha carica positiva e l'acetile la annulla, quindi l'istone acetilato attrae meno il DNA e la cromatina è più aperta. L'acetilazione è associata ai geni attivi. Gli enzimi **HAT** (istone acetiltransferasi) aggiungono l'acetile e gli enzimi **HDAC** (istone deacetilasi) lo tolgono. Un farmaco che inibisce le HDAC fa quindi aumentare l'acetilazione.

La **metilazione degli istoni** ha effetti diversi secondo la lisina che viene metilata. Si indica con una sigla che si legge da sinistra a destra: istone, amminoacido, posizione e numero di metili. **H3K4me3** è l'istone H3 con tre metili sulla lisina (K) in posizione 4, e si trova sui promotori dei geni attivi. **H3K9me3** è l'istone H3 con tre metili sulla lisina in posizione 9, e si trova nell'eterocromatina. La parola «metilazione» da sola non dice quindi se un gene è attivo o spento.
:::

:::esempio{titolo="Separare associazione e causa"}
Si studia lo stesso gene in due colture di cellule. Nella coltura A il promotore non è metilato e il gene produce molto RNA. Nella coltura B il promotore è metilato e il gene produce poco RNA. I due dati mostrano che metilazione e bassa espressione compaiono insieme. Non mostrano quale delle due è la causa. È possibile che la metilazione spenga il gene, ed è possibile che il gene si spenga per un altro motivo e venga metilato in seguito. Per distinguere i due casi si interviene sulla causa ipotizzata. Si toglie la metilazione dal promotore nella coltura B, senza cambiare altro, e si misura l'RNA. Se l'RNA aumenta, la metilazione era la causa della bassa espressione.
:::


:::esempio{titolo="Dati di accessibilità e quantità di istone"}
In due campioni si misura l'acetilazione degli istoni. Il segnale è 120 nel primo campione e 60 nel secondo. Il secondo campione contiene però la metà degli istoni del primo. Si divide allora il segnale per la quantità di istoni. Posta uguale a 2 la quantità del primo campione e a 1 quella del secondo, si ottiene $\dfrac{120}{2}=60$ e $\dfrac{60}{1}=60$. Ogni istone è quindi acetilato nella stessa misura nei due campioni, e il segnale più basso dipende solo dal minor numero di istoni. Un segnale va sempre riferito alla quantità di materiale su cui è misurato. Questa operazione si chiama normalizzazione.

Lo stesso vale per l'accessibilità misurata con una nucleasi. Un campione che viene tagliato di più ha in genere cromatina più aperta. Prima di concluderlo si controlla che i due campioni contengano la stessa quantità di DNA.
:::

## Geni, famiglie e DNA non codificante

:::definizione{#sequenze-genoma titolo="Composizione del genoma"}
Il **genoma** è tutto il DNA di un organismo. Nell'uomo comprende il genoma nucleare, circa 3 miliardi di coppie di basi distribuite in 23 cromosomi, e il piccolo genoma dei mitocondri. Un **gene** è un tratto di DNA che contiene le istruzioni per un prodotto, cioè una proteina oppure un RNA. I geni che codificano proteine sono circa 20 000. Le parti di questi geni che vengono effettivamente tradotte in proteina sono solo l'1–2% del genoma. Il resto comprende quattro tipi di sequenze.

- Gli **introni**, tratti interni ai geni che vengono trascritti e poi eliminati dall'RNA.
- Le **sequenze regolatrici**, come i promotori, che stabiliscono quando un gene è attivo.
- I geni per **RNA non codificanti**, come rRNA e tRNA.
- Le **sequenze ripetute**, che occupano circa metà del genoma.

Una sequenza che non codifica proteine ha quindi spesso una funzione. Un promotore e un gene per rRNA, per esempio, non codificano proteine e sono indispensabili.

Una **sequenza a copia singola** compare in un solo locus del genoma. Una cellula diploide ne possiede comunque due copie, una per ciascun cromosoma omologo.

Una **famiglia genica** è un gruppo di geni simili fra loro, che derivano da un unico gene antenato. Nel corso dell'evoluzione il gene è stato copiato più volte (duplicazione), e le copie hanno poi accumulato differenze. I geni di una stessa specie che derivano da una duplicazione si chiamano **paraloghi**. L'esempio classico sono i geni delle globine, le proteine dell'emoglobina. L'uomo ne ha diversi, attivi in momenti diversi: alcuni nell'embrione, altri nel feto, altri nell'adulto. Due paraloghi occupano due loci diversi. Due alleli, invece, sono varianti dello stesso locus.

I geni per gli rRNA sono presenti in centinaia di copie uguali, disposte una dopo l'altra, perché la cellula ha bisogno di grandi quantità di ribosomi. Uno **pseudogene** è una copia di un gene che ha accumulato mutazioni e non produce più la proteina originale. Alcuni pseudogeni vengono comunque trascritti in RNA.
:::

:::esempio{titolo="Una duplicazione seguita da divergenza"}
Un gene attivo nel fegato viene duplicato, e il genoma contiene ora due copie uguali in due loci diversi. La prima copia continua a svolgere la funzione originale. La seconda non è più indispensabile, quindi le mutazioni che vi si accumulano non danneggiano l'organismo. Una mutazione nella sua regione regolatrice la rende attiva nel rene e non più nel fegato. Dopo molte generazioni la specie ha due geni simili, uno attivo nel fegato e uno nel rene, con proteine leggermente diverse. Per questa via compaiono geni nuovi a partire da geni esistenti. La parentela fra due geni si riconosce dalla somiglianza delle loro sequenze.
:::

## Ripetizioni ed elementi mobili

:::definizione{#ripetizioni titolo="Tandem e dispersione nel genoma"}
Le sequenze ripetute si dividono in due gruppi secondo la disposizione delle copie.

Nelle ripetizioni **in tandem** le copie sono una di seguito all'altra. La sequenza CACACACA, per esempio, contiene quattro copie consecutive dell'unità CA. Se l'unità è molto corta, da 1 a 6 basi, la ripetizione si chiama **microsatellite**. Se è più lunga, di alcune decine di basi, si chiama **minisatellite**. Il numero di copie in un dato locus cambia da persona a persona. Una persona ha, per esempio, 12 copie su un cromosoma e 15 sull'omologo. Misurando la lunghezza di molti microsatelliti si ottiene un profilo diverso per ogni individuo, ed è il principio dei test del DNA usati per identificare le persone.

Nelle ripetizioni **intersperse** le copie sono sparse in punti lontani del genoma. Quasi tutte derivano da **elementi mobili**, cioè sequenze capaci di inserire una propria copia in un altro punto del genoma. Le classi principali sono le **LINE**, le **SINE** e i retrovirus endogeni. La maggior parte delle copie presenti oggi nel genoma umano ha accumulato mutazioni e non è più in grado di spostarsi.

![Ripetizioni adiacenti e copie separate da DNA diverso](/figure/biologia-semestre-filtro/genoma-cromatina/ripetizioni-it.svg)
:::

:::definizione{#elementi-mobili titolo="Intermedi di DNA e intermedi di RNA"}
Un **elemento trasponibile** (o trasposone) è una sequenza di DNA che si sposta o si copia in un altro punto del genoma. I meccanismi sono due.

- I **trasposoni a DNA** si spostano con il meccanismo detto «taglia e incolla». Un enzima taglia l'elemento dalla sua posizione e lo inserisce altrove. Il numero di copie resta uguale.
- I **retrotrasposoni** si moltiplicano con il meccanismo detto «copia e incolla», in tre passaggi. L'elemento viene trascritto in RNA, una trascrittasi inversa copia l'RNA in DNA, e il nuovo DNA si inserisce in un altro punto. L'elemento originale resta al suo posto, quindi a ogni ciclo le copie aumentano. Per questo motivo i retrotrasposoni occupano oggi una parte così grande del genoma.

Un elemento è **autonomo** se codifica gli enzimi necessari al proprio spostamento. Le **LINE-1** complete sono autonome, perché codificano la propria trascrittasi inversa. Nel genoma umano ce ne sono circa 500 000 copie, quasi tutte incomplete e inattive. Le SINE, fra cui le sequenze **Alu**, sono corte e non codificano enzimi, quindi sono **non autonome**. Si moltiplicano usando gli enzimi prodotti dalle LINE-1.

I **retrovirus endogeni** sono resti di retrovirus che in passato hanno infettato le cellule germinali di un antenato e sono stati poi trasmessi ai discendenti come parte del genoma. Quasi tutti hanno perso la capacità di produrre virus.

L'effetto di una nuova inserzione dipende dal punto in cui cade. Se cade in un esone, cioè in una parte codificante di un gene, interrompe la sequenza della proteina. Se cade in una regione regolatrice cambia la quantità di proteina prodotta. Se cade in una regione senza funzione non ha effetti, ed è il caso più frequente.

![Retrotrasposizione con copia di DNA originaria mantenuta e nuova inserzione](/figure/biologia-semestre-filtro/genoma-cromatina/retrotrasposizione-it.svg)
:::

:::esempio{titolo="Espressione di un elemento e nuova inserzione"}
In un campione di cellule l'RNA di LINE-1 è aumentato. Il dato indica che l'elemento viene trascritto di più. Non indica che nel genoma sono comparse nuove copie, perché la trascrizione è solo il primo dei tre passaggi. Servono ancora la copia dell'RNA in DNA e l'inserzione. Per dimostrare una nuova inserzione si cerca nel DNA il punto di giunzione fra l'elemento e la sequenza che gli sta accanto. Se quella giunzione non esisteva nelle cellule di partenza, la copia è nuova.

Una nuova inserzione avvenuta in una cellula del corpo (cellula somatica) passa solo alle cellule che derivano da quella cellula. L'organismo contiene allora cellule con genomi leggermente diversi, e questa condizione si chiama **mosaicismo**. L'inserzione passa ai figli solo se è avvenuta in una cellula germinale, cioè in una cellula che dà origine ai gameti.
:::
