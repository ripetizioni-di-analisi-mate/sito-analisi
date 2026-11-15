---
titolo: "Mutazioni, ereditarietà e caratteri"
sommario: "Dal cambiamento del DNA al fenotipo: riparazione, incroci, probabilità, mappe genetiche, anomalie cromosomiche e pedigree ragionati."
---

## Cambiamenti del DNA e loro conseguenze

:::definizione{#mutazioni titolo="Sequenza, prodotto e linea cellulare"}
Una **mutazione** è un cambiamento stabile della sequenza del DNA. Per descriverne l'effetto si confrontano tre livelli: la sequenza modificata, il prodotto del gene e il carattere osservabile. Una sostituzione cambia una base; un'inserzione aggiunge nucleotidi; una delezione li elimina. La posizione della variante determina quali passaggi possono risentirne.

In una sequenza tradotta, una sostituzione può essere sinonima, se conserva l'amminoacido, missenso, se lo cambia, oppure nonsenso, se introduce uno stop anticipato. La degenerazione del codice spiega perché codoni diversi possano specificare lo stesso amminoacido. Il termine *sinonima* descrive questo livello: una variante sinonima può comunque modificare lo splicing o la stabilità dell'RNA. La classificazione della sequenza, da sola, lascia quindi aperta la valutazione funzionale.

Il ribosoma legge triplette consecutive a partire dalla cornice stabilita all'inizio della traduzione. Un'inserzione o delezione interna alla regione tradotta provoca **frameshift** quando la sua lunghezza non è multipla di tre. Da quel punto cambiano i raggruppamenti dei nucleotidi e può comparire uno stop. Una delezione di tre basi conserva la cornice a valle; può comunque rimuovere un amminoacido indispensabile. Se interessa il confine tra due codoni, può anche modificare un amminoacido vicino alla giunzione.

![Cornice di lettura prima e dopo la delezione di una base](/figure/biologia-semestre-filtro/genetica-mutazioni/cornice-it.svg)

Varianti del promotore possono alterare la quantità di trascritto; varianti nei siti di splicing possono cambiare gli esoni presenti nell'RNA maturo. Un'espansione di ripetizioni può modificare la proteina, la regolazione o la tossicità dell'RNA, secondo il locus. In alcune malattie da espansione si osserva anticipazione: nelle generazioni successive il carattere può comparire prima o essere più grave, in relazione all'instabilità della ripetizione.

Una variante somatica si propaga alle cellule discendenti di quella cellula e può produrre mosaicismo. La trasmissione alla generazione successiva richiede invece il coinvolgimento della linea germinale. L'effetto sulla salute dipende da funzione, dose, tessuto e ambiente: il solo numero di basi cambiate non misura la gravità.
:::

## Danno, riparazione e stabilità del genoma

:::definizione{#riparazione titolo="Riconoscere il problema prima della via"}
Il **danno al DNA** è un'alterazione chimica o strutturale, come una base ossidata o una rottura. Può essere rimosso prima che diventi una variazione ereditaria della sequenza. Il proofreading delle polimerasi corregge molti errori durante la sintesi; il mismatch repair riconosce appaiamenti errati e piccoli slittamenti sfuggiti a questa prima correzione.

Nella riparazione per escissione di basi, una glicosilasi riconosce una base alterata e rompe il suo legame con lo zucchero. Altri enzimi trattano il sito privo di base, sintetizzano il tratto mancante usando il filamento opposto e chiudono l'interruzione. Nella riparazione per escissione di nucleotidi viene rimosso un breve tratto attorno a una lesione che distorce l'elica, come molti fotoprodotti da UV. In entrambi i casi la complementarità fornisce l'informazione per riscrivere il tratto.

![Tipi di lesione e vie di riparazione](/figure/biologia-semestre-filtro/genetica-mutazioni/riparazione-it.svg)

Una rottura a doppio filamento interrompe entrambe le catene. La ricombinazione omologa può usare il cromatidio fratello come stampo; la sua disponibilità dopo la replicazione rende questa via particolarmente adatta alle fasi S e G2. La giunzione delle estremità può riunire i capi senza uno stampo omologo esteso. Se i capi richiedono processamento, il prodotto può contenere inserzioni o delezioni. La giunzione di capi compatibili può anche ripristinare esattamente la sequenza.

Per interpretare un esperimento si separano la lesione iniziale e l'esito osservato. Una cellula esposta a UV con ridotta escissione di nucleotidi conserva più fotoprodotti, mentre un difetto di mismatch repair favorisce la persistenza di errori di appaiamento. Nessuna via garantisce che ogni evento sia corretto senza conseguenze; la stabilità del genoma deriva da più controlli coordinati.
:::

## Alleli e segregazione

:::definizione{#alleli titolo="Locus, genotipo e fenotipo"}
Un **locus** è una posizione o regione del genoma; gli alleli sono sue varianti. In un organismo diploide, un locus autosomico è rappresentato normalmente da due copie, una per ciascun cromosoma omologo. Con due alleli uguali il genotipo è omozigote; con alleli diversi è eterozigote. L'insieme degli alleli considerati costituisce il genotipo, mentre il fenotipo è il carattere osservato nelle condizioni specificate.

Due varianti diverse dello stesso gene possono trovarsi sulle due copie omologhe, *in trans*, oppure sulla stessa copia, *in cis*. Nell'eterozigosi composta le due varianti sono in trans. Questa distinzione conta per una funzione recessiva: due copie compromesse e una sola copia compromessa possono produrre esiti diversi. La fase delle varianti richiede dati familiari o molecolari aggiuntivi.

La dominanza riguarda il fenotipo dell'eterozigote. Un allele dominante può essere raro o comune; la lettera maiuscola usata negli esercizi non esprime frequenza, beneficio o gravità. Il rapporto può cambiare secondo il livello osservato, per esempio attività enzimatica e carattere dell'organismo. Una sola copia integra può fornire abbastanza prodotto, rendendo recessiva una perdita di funzione. Un prodotto mutato che interferisce con quello normale può invece esercitare un effetto dominante negativo, per esempio in un complesso di subunità. Una variante con guadagno di funzione può conferire attività in condizioni in cui la proteina ordinaria è inattiva.
:::

:::definizione{#mendel titolo="Dai gameti alle probabilità"}
Durante la meiosi le copie alleliche segregano. Nel modello mendeliano, un individuo Aa produce gameti A e a con probabilità $\dfrac12$ ciascuno. Con fecondazione casuale, i gameti dei due genitori si combinano indipendentemente. Nell'incrocio Aa × Aa, la probabilità di AA è dunque $\dfrac12\cdot\dfrac12=\dfrac14$. Aa si ottiene in due modi disgiunti, A materno con a paterno oppure a materno con A paterno; le probabilità si sommano e danno $\dfrac12$.

![Quadrato di Punnett per due eterozigoti](/figure/biologia-semestre-filtro/genetica-mutazioni/punnett-it.svg)

Con dominanza completa e penetranza completa, AA e Aa condividono il fenotipo dominante, che ha probabilità $\dfrac34$. Se un figlio è già noto come fenotipicamente dominante, si esclude aa e si rinormalizzano gli esiti rimasti. Indicando quel fenotipo con D:

$$
P(\mathrm{Aa}\mid D)=\frac{P(\mathrm{Aa})}{P(D)}
=\frac{\frac12}{\frac34}=\frac23.
$$

Per loci che assortiscono indipendentemente si moltiplicano le probabilità relative ai singoli loci. In AaBb × AaBb si ha $P(\mathrm{aaBb})=\dfrac14\cdot\dfrac12=\dfrac18$. I rapporti descrivono attese su molte osservazioni. In una famiglia con quattro figli possono comparire quattro genotipi uguali; ogni nuova fecondazione conserva le probabilità del modello, indipendentemente dai figli precedenti.
:::

## Dominanza e interazioni tra geni

:::definizione{#dominanza-ab0 titolo="Alleli multipli e sistema AB0"}
Con **dominanza incompleta**, l'eterozigote ha un valore intermedio del carattere considerato. Con codominanza sono riconoscibili entrambi i contributi allelici. Il rapporto genotipico uno a due a uno di un incrocio tra eterozigoti resta valido; cambia il raggruppamento dei genotipi in classi fenotipiche.

Nel modello classico AB0, $I^A$ e $I^B$ producono attività che determinano antigeni differenti, mentre $i$ è recessivo rispetto a entrambi. $I^AI^B$ determina gruppo AB; $I^Ai$ determina gruppo A; $I^Bi$ determina gruppo B; $ii$ determina gruppo 0. I problemi qui assumono espressione ordinaria degli antigeni, senza fenotipi rari come Bombay.

Un genitore A e uno B possono avere un figlio 0 se entrambi trasmettono i. I genotipi parentali sono quindi $I^Ai$ e $I^Bi$; le quattro combinazioni AB, A, B e 0 hanno uguale probabilità. Un genitore AB, invece, produce gameti $I^A$ oppure $I^B$ e nel modello dichiarato non può fornire i. La presenza di tre alleli nella popolazione resta compatibile con due copie per individuo diploide.
:::

:::definizione{#epistasi-pleiotropia titolo="Una via, più loci"}
La **pleiotropia** si ha quando un gene influenza più caratteri. L'epistasi riguarda l'interazione tra loci: il genotipo a un locus modifica l'effetto fenotipico di un altro. Per ricavare un rapporto è necessario conoscere la relazione funzionale.

Si consideri una via in cui A consente la produzione di un precursore colorato e B ne cambia il colore. Il genotipo aa blocca la produzione del precursore, indipendentemente da B. Con loci indipendenti e dominanza completa all'interno di ciascun locus, AaBb × AaBb dà $\dfrac9{16}$ A_B_, $\dfrac3{16}$ A_bb e $\dfrac4{16}$ aa__. La somma vale uno e il rapporto fenotipico è nove a tre a quattro.

![Raggruppamento delle classi nell'epistasi recessiva](/figure/biologia-semestre-filtro/genetica-mutazioni/epistasi-it.svg)

Il trattino basso indica che l'altro allele può assumere qualunque valore compatibile. Il gruppo aa__ riunisce aaBB, aaBb e aabb perché tutti bloccano lo stesso passaggio. L'assortimento indipendente degli alleli resta valido anche quando i prodotti dei geni interagiscono.
:::

## Associazione, crossing over e mappe

:::definizione{#associazione titolo="Dalla fase cromosomica ai ricombinanti"}
Loci sullo stesso cromosoma possono essere **associati**: alcune combinazioni alleliche si trasmettono insieme più spesso di quanto previsto dall'indipendenza. La fase specifica quali alleli stanno sullo stesso omologo. Nell'assetto AB/ab le combinazioni parentali sono AB e ab; nell'assetto Ab/aB sono Ab e aB. La scrittura AaBb da sola omette questa informazione.

Il crossing over avviene tra cromatidi non fratelli di omologhi appaiati durante la profase I. Un singolo scambio nell'intervallo tra i due loci modifica due dei quattro cromatidi. Il prodotto riconosciuto come ricombinante dipende quindi dalla posizione dello scambio e dalla fase iniziale.

![Fase in associazione e classi gametiche con ricombinazione del 20 per cento](/figure/biologia-semestre-filtro/genetica-mutazioni/linkage-it.svg)

Nel testcross AB/ab × ab/ab, il genitore recessivo produce solo gameti ab. Il genotipo dei figli permette perciò di riconoscere il gamete del doppio eterozigote. Con frequenza di ricombinazione $r=0{,}20$, nel modello con classi reciproche ugualmente vitali, ogni classe ricombinante ha probabilità $\dfrac r2=0{,}10$ e ogni parentale $\dfrac{1-r}{2}=0{,}40$.

$$
r=\frac{R}{N}.
$$

Qui R conta i ricombinanti e N tutti i figli osservati. Con associazione completa, nel modello privo di ricombinazione nell’intervallo, AB/ab produce soltanto AB e ab. Con associazione incompleta compaiono anche Ab e aB, con frequenza complessiva inferiore al 50%. La classificazione riguarda il comportamento dei due marcatori nelle meiosi considerate.

Per intervalli brevi, l'1% di ricombinazione corrisponde approssimativamente a un centimorgan. Scambi multipli possono ricostituire la combinazione parentale tra i marcatori esterni, quindi il conteggio a due loci sottostima distanze grandi. La frequenza attesa massima del modello è 50%; un valore vicino a questo limite è compatibile sia con cromosomi diversi sia con loci molto distanti sullo stesso cromosoma. Le distanze fisiche in basi richiedono informazioni differenti dalle mappe di ricombinazione.
:::

## Penetranza, ambiente e origine parentale

:::definizione{#penetranza-imprinting titolo="Genotipo presente e carattere osservato"}
La **penetranza** è la proporzione di individui con un genotipo definito che manifesta un fenotipo definito, all'età e nelle condizioni considerate. Se 80 di 100 portatori presentano il carattere, la penetranza osservata è 80%. L'espressività descrive intensità e modalità del carattere in chi lo manifesta. Una stessa penetranza può accompagnarsi a espressività molto variabile.

Per un eterozigote con variante autosomica dominante, la probabilità di trasmettere la variante a un figlio resta $\dfrac12$ nel modello mendeliano. Se la penetranza del genotipo nel figlio è 80%, il partner è non portatore e il fenotipo è assente nei non portatori, la probabilità di manifestazione è $\dfrac12\cdot0{,}80=0{,}40$. Il fattore di penetranza riguarda l'espressione dopo l'eredità della variante.

Caratteri poligenici dipendono da più loci, spesso insieme a fattori ambientali. Una distribuzione continua, per esempio di un valore misurato, non permette di ricavare un rapporto mendeliano unico. Anche in un carattere monogenico, età, geni modificatori e ambiente possono cambiare l'espressione.

Nell'**imprinting genomico**, l'espressione dipende dall'origine materna o paterna dell'allele. Le marcature epigenetiche vengono cancellate e ristabilite nella linea germinale secondo il sesso dell'individuo che produce i gameti. Una variante trasmessa da una donna assume pertanto l'origine materna nel figlio, anche quando quella donna l'aveva ricevuta dal padre.

![Origine parentale e allele espresso in un modello di imprinting](/figure/biologia-semestre-filtro/genetica-mutazioni/imprinting-it.svg)

In un modello con allele materno silenziato, una variante inattivante sulla copia paterna può compromettere la funzione perché interessa la copia espressa. Lo stesso gene segue il modello opposto se è la copia paterna a essere silenziata. L'ipotesi deve quindi indicare quale copia è attiva. Eredità mitocondriale e imprinting descrivono meccanismi distinti.
:::

## Numero e struttura dei cromosomi

:::definizione{#cariotipo titolo="Cariotipo e risoluzione dell'osservazione"}
Il **cariotipo** descrive numero e morfologia dei cromosomi. In una cellula somatica umana tipica si contano 46 cromosomi. Dopo la fase S ciascuno comprende due cromatidi fratelli uniti; prima della loro separazione il conteggio rimane 46 cromosomi, mentre le molecole di DNA nucleare sono 92. Gli omologhi hanno gli stessi loci; i fratelli derivano dalla replicazione di una copia.

L'euploidia riguarda multipli interi del corredo aploide; la poliploidia comprende più di due corredi completi. L'aneuploidia comporta invece eccesso o difetto di singoli cromosomi. Una trisomia 21 libera contiene tre cromosomi 21 e normalmente 47 cromosomi totali. Il termine trisomia descrive la dose del materiale considerato: forme da traslocazione richiedono una descrizione del riarrangiamento e possono avere un numero totale differente.

La non-disgiunzione è una mancata separazione. In meiosi I riguarda gli omologhi; in meiosi II i cromatidi fratelli. Con un solo evento in meiosi I si formano quattro prodotti aneuploidi per il cromosoma coinvolto. Con un solo evento in una delle due cellule di meiosi II, due prodotti restano normali, uno ha una copia in più e uno una in meno.

Un’inserzione cromosomica introduce un tratto in una nuova posizione; la dose dipende dal fatto che quel tratto sia stato spostato oppure copiato. Un’inversione paracentrica esclude il centromero, mentre una pericentrica lo comprende. Il bandeggio confronta l’ordine delle bande, rendendo riconoscibili molti riarrangiamenti abbastanza estesi.

Una delezione riduce la dose di un tratto, una duplicazione la aumenta, un'inversione ne cambia l'orientamento. Una traslocazione trasferisce materiale tra cromosomi; nel riarrangiamento bilanciato manca uno squilibrio netto rilevabile alla risoluzione considerata. Restano possibili interruzione di geni, effetti di posizione e produzione di gameti sbilanciati.

Il cariotipo con bandeggio rileva anomalie abbastanza grandi. Una sostituzione di una base può lasciare invariata l'immagine cromosomica; il suo studio richiede analisi della sequenza. Un risultato normale va quindi interpretato insieme al tipo di alterazione che la tecnica può osservare.
:::

## Deduzioni dagli alberi genealogici

:::definizione{#pedigree titolo="Trasmissione e ipotesi del modello"}
Un **pedigree** registra relazioni familiari, sesso e fenotipo. Quadrati e cerchi indicano rispettivamente maschi e femmine nella convenzione usata; il riempimento segnala il carattere definito. L'interpretazione confronta i dati con modelli espliciti di penetranza, frequenza allelica ed eventuali nuove mutazioni.

![Pedigree compatibile con trasmissione autosomica recessiva](/figure/biologia-semestre-filtro/genetica-mutazioni/pedigree-it.svg)

Con eredità autosomica recessiva e penetranza completa, due genitori non affetti con un figlio aa sono entrambi Aa, se si escludono nuove mutazioni. Un fratello non affetto ha probabilità $\dfrac23$ di essere portatore. Con eredità autosomica dominante, un genitore Aa e uno aa producono metà figli con la variante; con penetranza incompleta anche un portatore può apparire non affetto.

Nel modello legato all'X, un padre trasmette X alle figlie e Y ai figli. Un padre con una variante dell'X la trasmette quindi a tutte le figlie e a nessun figlio maschio tramite il proprio X. Per una madre portatrice eterozigote di un carattere recessivo legato all'X e un padre non affetto, metà dei figli maschi è attesa affetta. La probabilità riferita a una gravidanza di sesso ancora ignoto richiede anche il fattore $\dfrac12$ per il sesso, se si assume uguale probabilità dei due sessi.

Per un carattere dominante legato all’X con penetranza completa, un padre affetto e una madre non portatrice hanno tutte le figlie affette e tutti i figli maschi non affetti. Una madre eterozigote può invece trasmettere la variante a metà dei figli di ciascun sesso. Sono probabilità condizionate al sesso, ottenute seguendo separatamente il cromosoma di ogni genitore. L’assenza di trasmissione padre-figlio maschio è coerente con l’associazione all’X, ma da sola non dimostra quel modello in una famiglia piccola.

Un carattere legato all'Y segue la linea maschile. Il DNA mitocondriale è trasmesso tipicamente dalla madre; la miscela di molecole normali e varianti, detta eteroplasmia, può differire tra tessuti e figli. Il superamento di soglie funzionali contribuisce alla variabilità della manifestazione. Un piccolo pedigree può essere compatibile con più modelli: una ricorrenza familiare suggerisce ipotesi, mentre la dimostrazione richiede ulteriori dati.
:::
