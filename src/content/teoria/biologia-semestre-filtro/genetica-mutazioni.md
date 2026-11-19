---
titolo: "Mutazioni, ereditarietà e caratteri"
sommario: "Dal cambiamento del DNA al fenotipo: riparazione, incroci, probabilità, mappe genetiche, anomalie cromosomiche e pedigree ragionati."
---

## Cambiamenti del DNA e loro conseguenze

:::definizione{#mutazioni titolo="Sequenza, prodotto e linea cellulare"}
Una **mutazione** è un cambiamento permanente della sequenza del DNA. Una volta avvenuta, viene copiata a ogni replicazione e passa a tutte le cellule figlie. Secondo ciò che accade alla sequenza si distinguono tre tipi.

- Una **sostituzione** cambia una base con un'altra.
- Un'**inserzione** aggiunge uno o più nucleotidi.
- Una **delezione** toglie uno o più nucleotidi.

L'effetto di una mutazione si valuta su tre livelli: la sequenza del DNA, la proteina prodotta e la caratteristica dell'organismo.

Una sostituzione nella parte codificante di un gene cambia un codone. Secondo il nuovo codone si hanno tre casi. Si parte, per esempio, dal codone GAA, che indica l'amminoacido glutammato.

- Mutazione **sinonima** (silente). Il nuovo codone indica lo stesso amminoacido, e la proteina non cambia. GAA diventa GAG, che indica ancora glutammato. Ciò è possibile perché il codice è degenerato.
- Mutazione **missenso**. Il nuovo codone indica un amminoacido diverso. GAA diventa GUA, che indica valina. La proteina ha un amminoacido cambiato.
- Mutazione **nonsenso**. Il nuovo codone è un codone di stop. GAA diventa UAA. La traduzione si ferma in quel punto e la proteina è più corta.

Una mutazione sinonima lascia invariata la proteina, ma in alcuni casi altera lo splicing o la durata dell'mRNA. Per questo motivo la classificazione descrive la sequenza e non garantisce l'assenza di effetti.

Inserzioni e delezioni hanno un effetto che dipende dal numero di nucleotidi. Il ribosoma legge l'mRNA a gruppi di tre, a partire dal codone d'inizio. Se si aggiunge o si toglie un numero di nucleotidi che non è multiplo di 3, tutti i gruppi successivi risultano spostati. Questa mutazione si chiama **frameshift** (slittamento della cornice di lettura). Tutti gli amminoacidi dopo quel punto cambiano, e di solito compare presto un codone di stop. Nella sequenza AUG GCA UUC, per esempio, la delezione della G del secondo codone dà AUG CAU UC…, quindi il secondo codone diventa CAU e i successivi cambiano tutti. Una delezione di tre nucleotidi toglie invece un solo amminoacido e lascia invariati i codoni successivi.

![Cornice di lettura prima e dopo la delezione di una base](/figure/biologia-semestre-filtro/genetica-mutazioni/cornice-it.svg)

Una mutazione fuori dalla parte codificante ha altri effetti. Nel promotore cambia la quantità di mRNA prodotto, e quindi la quantità di proteina. Nelle sequenze che segnano i confini fra esoni e introni altera lo splicing, e un esone viene saltato oppure un introne resta nell'mRNA.

Alcune malattie sono causate da **espansioni di triplette**. In un punto del gene una tripletta è ripetuta più volte di seguito, e il numero di ripetizioni aumenta oltre una soglia. Nella malattia di Huntington, per esempio, la tripletta CAG è ripetuta più di 36 volte. Il numero di ripetizioni tende ad aumentare da una generazione all'altra, e con più ripetizioni la malattia compare prima ed è più grave. Questo fenomeno si chiama **anticipazione**.

Conta infine la cellula in cui la mutazione avviene.

- Una mutazione **somatica** avviene in una cellula del corpo. Passa solo alle cellule che derivano da quella e non ai figli. L'organismo contiene allora cellule con DNA diverso, e questa condizione si chiama mosaicismo.
- Una mutazione **germinale** avviene in una cellula che produce gameti. Può essere trasmessa ai figli, che la portano in tutte le cellule.
:::

## Danno, riparazione e stabilità del genoma

:::definizione{#riparazione titolo="Riconoscere il problema prima della via"}
Il DNA di ogni cellula subisce ogni giorno migliaia di alterazioni chimiche, dette **danni**. Un danno non è ancora una mutazione. Diventa una mutazione se non viene riparato prima della replicazione, perché in quel caso la polimerasi copia l'errore nel filamento nuovo. La cellula possiede diversi sistemi di riparazione, ciascuno adatto a un tipo di danno. Tre di essi agiscono su un solo filamento e usano l'altro filamento, intatto, come stampo per ricostruire la sequenza.

- La **riparazione degli appaiamenti errati** (mismatch repair) corregge gli errori della replicazione sfuggiti alla correzione di bozze della polimerasi, cioè le coppie di basi sbagliate e i brevi tratti in più o in meno.
- La **riparazione per escissione di basi** (BER) ripara una singola base alterata, per esempio ossidata. Un enzima detto glicosilasi stacca la base danneggiata dallo zucchero. Altri enzimi tagliano il filamento in quel punto, una polimerasi inserisce il nucleotide corretto e la ligasi richiude.
- La **riparazione per escissione di nucleotidi** (NER) ripara i danni che deformano la doppia elica. L'esempio principale sono i dimeri di timina, cioè due timine vicine saldate fra loro dai raggi ultravioletti. Viene tagliato e rimosso un tratto di circa 30 nucleotidi che contiene il danno. Una polimerasi riempie lo spazio e la ligasi richiude.

![Tipi di lesione e vie di riparazione](/figure/biologia-semestre-filtro/genetica-mutazioni/riparazione-it.svg)

Il danno più grave è la **rottura a doppio filamento**, in cui si spezzano entrambi i filamenti e il cromosoma si divide in due pezzi. Non c'è un filamento intatto da usare come stampo. La cellula ha due vie di riparazione.

- La **ricombinazione omologa** usa come stampo la copia identica presente sul cromatidio fratello, e ricostruisce la sequenza senza errori. Il cromatidio fratello esiste solo dopo la replicazione, quindi questa via funziona nelle fasi S e G2.
- La **giunzione delle estremità non omologhe** (NHEJ) riunisce direttamente i due capi, senza stampo. Funziona in ogni fase del ciclo. Spesso, prima di essere uniti, i capi vengono accorciati o completati di qualche nucleotide, quindi nel punto di giunzione restano piccole delezioni o inserzioni.

Un difetto in una via di riparazione fa accumulare il tipo di danno corrispondente. Nelle persone con xeroderma pigmentoso manca la riparazione per escissione di nucleotidi, quindi i dimeri di timina prodotti dal sole non vengono rimossi e la frequenza dei tumori della pelle è molto alta. Nelle persone con sindrome di Lynch manca il mismatch repair, quindi gli errori della replicazione si accumulano e aumenta il rischio di tumore del colon.
:::

## Alleli e segregazione

:::definizione{#alleli titolo="Locus, genotipo e fenotipo"}
La genetica studia come le caratteristiche passano dai genitori ai figli. Usa cinque termini di base.

- Un **locus** è la posizione di un gene su un cromosoma.
- Un **allele** è una delle versioni di quel gene. Gli alleli di un gene differiscono per la sequenza del DNA.
- Il **genotipo** è la coppia di alleli che un individuo possiede in un locus. Un organismo diploide ha due copie di ogni cromosoma, quindi due alleli per ogni gene.
- Il **fenotipo** è la caratteristica che si osserva, come il colore di un fiore o la presenza di una malattia.
- Un individuo è **omozigote** se i due alleli sono uguali ed è **eterozigote** se sono diversi.

Un gene del pisello, per esempio, controlla il colore del fiore e ha due alleli, indicati con A (fiore viola) e a (fiore bianco). I genotipi possibili sono tre: AA e aa, omozigoti, e Aa, eterozigote.

Un allele è **dominante** se determina il fenotipo anche quando è presente in una sola copia, cioè nell'eterozigote. Un allele è **recessivo** se determina il fenotipo solo quando è presente in due copie. Nel pisello la pianta Aa ha fiori viola, quindi A è dominante e a è recessivo. Per convenzione l'allele dominante si scrive con la lettera maiuscola. Dominante non significa più frequente né più vantaggioso. Molte malattie rare sono dovute ad alleli dominanti.

La dominanza si spiega con la quantità e il tipo di proteina prodotta.

- Un allele che non produce proteina funzionante è in genere recessivo. Nell'eterozigote l'altro allele produce metà della quantità normale, che di solito basta.
- Un allele è dominante se la proteina alterata danneggia anche quella normale. Accade nelle proteine formate da più catene unite, quando una catena difettosa rende inattivo l'intero complesso. Questo effetto si chiama **dominante negativo**.
- Un allele è dominante anche se la proteina acquista un'attività nuova o è sempre attiva. Questo effetto si chiama **guadagno di funzione**.

Quando un individuo porta due mutazioni diverse nello stesso gene, conta la loro disposizione. Se stanno una su ciascun cromosoma omologo (in trans), entrambe le copie del gene sono alterate. Questa condizione si chiama **eterozigosi composta** e, per una malattia recessiva, causa la malattia. Se stanno entrambe sullo stesso cromosoma (in cis), l'altra copia del gene è normale.
:::

:::definizione{#mendel titolo="Dai gameti alle probabilità"}
I gameti (spermatozoi e cellule uovo) si formano con la meiosi e sono aploidi, cioè contengono un solo allele per ogni gene. La **legge della segregazione** di Mendel afferma che i due alleli di un individuo si separano nei gameti, e ciascun gamete ne riceve uno con la stessa probabilità. Un individuo Aa produce quindi metà dei gameti con A e metà con a, cioè ciascun tipo con probabilità $\dfrac12$.

Nella fecondazione un gamete del padre si unisce a un gamete della madre, e i due incontri sono indipendenti. Le probabilità si calcolano con due regole.

- Si **moltiplicano** le probabilità di due eventi indipendenti che devono avvenire entrambi.
- Si **sommano** le probabilità di due modi alternativi di ottenere lo stesso risultato.

Nell'incrocio Aa × Aa il figlio AA riceve A dal padre e A dalla madre, quindi $P(\mathrm{AA})=\dfrac12\cdot\dfrac12=\dfrac14$. Allo stesso modo $P(\mathrm{aa})=\dfrac14$. Il figlio Aa si ottiene in due modi, A dal padre e a dalla madre oppure a dal padre e A dalla madre, quindi $P(\mathrm{Aa})=\dfrac14+\dfrac14=\dfrac12$. Il **quadrato di Punnett** della figura riassume lo stesso conto: sui lati stanno i gameti dei due genitori e nelle caselle i genotipi dei figli.

![Quadrato di Punnett per due eterozigoti](/figure/biologia-semestre-filtro/genetica-mutazioni/punnett-it.svg)

Se A è dominante, i figli AA e Aa hanno lo stesso fenotipo, quello dominante. La sua probabilità è $\dfrac14+\dfrac12=\dfrac34$, e quella del fenotipo recessivo (aa) è $\dfrac14$. È il rapporto 3 a 1 di Mendel.

Un problema frequente chiede la probabilità che un figlio con fenotipo dominante sia eterozigote. Sapere che il figlio ha fenotipo dominante esclude il genotipo aa. Restano AA, con probabilità $\dfrac14$, e Aa, con probabilità $\dfrac12$. Su un totale di $\dfrac34$, la parte che spetta ad Aa è, indicando con D il fenotipo dominante:

$$
P(\mathrm{Aa}\mid D)=\frac{P(\mathrm{Aa})}{P(D)}
=\frac{\frac12}{\frac34}=\frac23.
$$

Il figlio con fenotipo dominante è quindi eterozigote in 2 casi su 3.

La **legge dell'assortimento indipendente** riguarda due geni insieme. Se i due geni stanno su cromosomi diversi, gli alleli dell'uno si distribuiscono nei gameti indipendentemente da quelli dell'altro. Si calcola allora la probabilità per ciascun gene e si moltiplicano i risultati. Nell'incrocio AaBb × AaBb, per esempio, la probabilità di un figlio aaBb è $P(\mathrm{aa})\cdot P(\mathrm{Bb})=\dfrac14\cdot\dfrac12=\dfrac18$.

Queste probabilità valgono per ogni singolo figlio e non dipendono dai figli già nati. Una coppia Aa × Aa con tre figli di fenotipo dominante ha ancora probabilità $\dfrac14$ di avere un quarto figlio aa. I rapporti come 3 a 1 si osservano solo su un numero grande di figli.
:::

## Dominanza e interazioni tra geni

:::definizione{#dominanza-ab0 titolo="Alleli multipli e sistema AB0"}
Nella dominanza descritta finora, detta completa, l'eterozigote ha lo stesso fenotipo di un omozigote. Esistono altri due casi.

- Nella **dominanza incompleta** l'eterozigote ha un fenotipo intermedio. Nella bocca di leone l'incrocio fra una pianta a fiori rossi e una a fiori bianchi dà piante a fiori rosa.
- Nella **codominanza** l'eterozigote mostra entrambi i fenotipi insieme.

In questi due casi, nell'incrocio fra due eterozigoti i genotipi hanno sempre le probabilità $\dfrac14$, $\dfrac12$ e $\dfrac14$. Poiché l'eterozigote si distingue, i fenotipi sono tre e stanno nel rapporto 1 a 2 a 1.

Il sistema dei **gruppi sanguigni AB0** riunisce dominanza, codominanza e **alleli multipli**, cioè un gene con più di due alleli nella popolazione. Il gene ha tre alleli, $I^A$, $I^B$ e $i$. L'allele $I^A$ fa comparire sui globuli rossi una molecola detta antigene A, l'allele $I^B$ l'antigene B, e l'allele $i$ nessuno dei due. $I^A$ e $I^B$ sono codominanti fra loro ed entrambi dominanti su $i$. Ogni persona possiede due dei tre alleli.

| Genotipo | Gruppo sanguigno |
|---|---|
| $I^AI^A$ oppure $I^Ai$ | A |
| $I^BI^B$ oppure $I^Bi$ | B |
| $I^AI^B$ | AB |
| $ii$ | 0 |

Un genitore di gruppo A e uno di gruppo B, per esempio, hanno un figlio di gruppo 0. Il figlio è $ii$, quindi ha ricevuto un allele $i$ da ciascun genitore. I genitori sono perciò $I^Ai$ e $I^Bi$. I loro figli hanno i quattro gruppi AB, A, B e 0 con probabilità $\dfrac14$ ciascuno. Un genitore di gruppo AB, invece, non possiede l'allele $i$ e non ha figli di gruppo 0.
:::

:::definizione{#epistasi-pleiotropia titolo="Una via, più loci"}
Finora ogni gene controllava una sola caratteristica. Esistono due situazioni più complesse.

Nella **pleiotropia** un solo gene influenza più caratteristiche. Nella fibrosi cistica, per esempio, la mutazione di un solo gene altera i polmoni, il pancreas e le ghiandole del sudore.

Nell'**epistasi** due geni influenzano la stessa caratteristica, e il genotipo di un gene nasconde l'effetto dell'altro. L'esempio classico è il colore del mantello in alcuni animali. Il gene A serve a produrre il pigmento: con almeno un allele A il pigmento c'è, con aa manca. Il gene B stabilisce il colore del pigmento: con almeno un allele B è nero, con bb è marrone. Un animale aa è bianco qualunque sia il suo genotipo per B, perché senza pigmento non c'è un colore da stabilire.

Nell'incrocio AaBb × AaBb, con i due geni su cromosomi diversi, le probabilità si calcolano moltiplicando.

- Nero (almeno un A e almeno un B): $\dfrac34\cdot\dfrac34=\dfrac9{16}$.
- Marrone (almeno un A e bb): $\dfrac34\cdot\dfrac14=\dfrac3{16}$.
- Bianco (aa, con qualunque B): $\dfrac14\cdot 1=\dfrac4{16}$.

Il rapporto fra i fenotipi è 9 a 3 a 4, al posto del 9 a 3 a 3 a 1 che si ottiene con due geni che controllano caratteristiche diverse. La somma è $\dfrac{9+3+4}{16}=1$.

![Raggruppamento delle classi nell'epistasi recessiva](/figure/biologia-semestre-filtro/genetica-mutazioni/epistasi-it.svg)

Nella figura il trattino basso indica un allele qualunque. La scrittura A_B_ comprende quindi AABB, AaBB, AABb e AaBb, e la scrittura aa__ comprende aaBB, aaBb e aabb. L'epistasi cambia il modo in cui i genotipi si raggruppano in fenotipi. Gli alleli dei due geni si distribuiscono comunque nei gameti in modo indipendente.
:::

## Associazione, crossing over e mappe

:::definizione{#associazione titolo="Dalla fase cromosomica ai ricombinanti"}
L'assortimento indipendente vale per geni che stanno su cromosomi diversi. Due geni che stanno sullo stesso cromosoma si dicono **associati** (in linkage), e i loro alleli tendono a passare insieme nello stesso gamete, perché viaggiano sulla stessa molecola di DNA.

Per due geni associati non basta scrivere il genotipo AaBb. Bisogna indicare quali alleli stanno sullo stesso cromosoma, e questa informazione si chiama **fase**. Si scrive con una barra che separa i due cromosomi omologhi.

- In AB/ab un cromosoma porta A e B, e l'omologo porta a e b.
- In Ab/aB un cromosoma porta A e b, e l'omologo porta a e B.

I gameti che ricevono un cromosoma invariato si dicono **parentali**. Per AB/ab sono AB e ab.

Gli alleli di due geni associati si separano grazie al **crossing over**. All'inizio della meiosi i due cromosomi omologhi si appaiano e si scambiano tratti corrispondenti. Se lo scambio avviene nel tratto compreso fra i due geni, si formano cromosomi con combinazioni nuove di alleli. I gameti che li ricevono si dicono **ricombinanti**. Per AB/ab sono Ab e aB.

![Fase in associazione e classi gametiche con ricombinazione del 20 per cento](/figure/biologia-semestre-filtro/genetica-mutazioni/linkage-it.svg)

La **frequenza di ricombinazione**, indicata con $r$, è la frazione di gameti ricombinanti sul totale. Si misura con un incrocio di prova (testcross), in cui l'individuo AB/ab viene incrociato con un individuo ab/ab. Quest'ultimo produce solo gameti ab, quindi il fenotipo di ogni figlio rivela direttamente quale gamete ha ricevuto dall'altro genitore. Si contano i figli ricombinanti e si divide per il totale dei figli:

$$
r=\frac{R}{N}.
$$

Nella formula $R$ è il numero dei figli ricombinanti e $N$ il numero totale dei figli. Se su 1000 figli 200 sono ricombinanti, $r=\dfrac{200}{1000}=0{,}20$, cioè il 20%. I due tipi di ricombinanti sono ugualmente frequenti, e lo stesso vale per i due tipi parentali. Le quattro classi di gameti hanno quindi le seguenti frequenze.

- Ab e aB (ricombinanti): $\dfrac{r}{2}=0{,}10$ ciascuna.
- AB e ab (parentali): $\dfrac{1-r}{2}=0{,}40$ ciascuna.

Più due geni sono lontani sul cromosoma, più è probabile che un crossing over cada fra loro, quindi $r$ è maggiore. La frequenza di ricombinazione misura perciò la distanza fra i geni. L'unità è il **centimorgan** (cM), e 1 cM corrisponde all'1% di ricombinazione. Due geni con $r=0{,}20$ distano circa 20 cM. Una mappa costruita con queste distanze si chiama mappa genetica.

La frequenza di ricombinazione non supera il 50%. Con $r=0{,}50$ le quattro classi di gameti hanno tutte frequenza $0{,}25$, come per due geni su cromosomi diversi. Due geni molto lontani sullo stesso cromosoma si comportano quindi come geni indipendenti. Per distanze grandi, inoltre, $r$ sottostima la distanza, perché due crossing over nello stesso tratto riportano gli alleli nella combinazione parentale e non vengono contati.
:::

## Penetranza, ambiente e origine parentale

:::definizione{#penetranza-imprinting titolo="Genotipo presente e carattere osservato"}
Lo stesso genotipo non produce sempre lo stesso fenotipo. Due misure descrivono questa variabilità.

- La **penetranza** è la frazione degli individui con un dato genotipo che manifestano il fenotipo corrispondente. Se 80 persone su 100 che portano un allele di malattia sono malate, la penetranza è $\dfrac{80}{100}=80\%$. La penetranza è completa se è il 100% e incompleta se è minore.
- L'**espressività** è il grado con cui il fenotipo si manifesta in chi lo manifesta. Due persone con lo stesso allele hanno, per esempio, una forma lieve e una forma grave della stessa malattia.

La penetranza entra nei calcoli come un fattore in più. Un genitore è eterozigote per un allele dominante di malattia con penetranza dell'80%, e l'altro genitore non lo possiede. Il figlio riceve l'allele con probabilità $\dfrac12$. Se lo riceve, si ammala con probabilità $0{,}80$. La probabilità che il figlio sia malato è quindi $\dfrac12\cdot 0{,}80=0{,}40$.

Molte caratteristiche, come la statura o la pressione del sangue, sono **poligeniche**, cioè dipendono da molti geni insieme e anche dall'ambiente. Variano in modo continuo nella popolazione e non seguono i rapporti di Mendel.

L'**imprinting genomico** è un'eccezione alla regola per cui i due alleli di un gene funzionano allo stesso modo. Per circa un centinaio di geni umani è attivo solo l'allele ricevuto da un genitore, e l'altro è spento da una marcatura epigenetica (metilazione del DNA). In alcuni di questi geni è spento l'allele di origine materna, in altri quello di origine paterna. La marcatura viene cancellata e riscritta a ogni generazione, durante la formazione dei gameti, secondo il sesso di chi li produce. Un allele che una donna ha ricevuto dal padre, per esempio, portava la marcatura paterna. Quando la donna lo trasmette a un figlio, l'allele porta la marcatura materna.

![Origine parentale e allele espresso in un modello di imprinting](/figure/biologia-semestre-filtro/genetica-mutazioni/imprinting-it.svg)

In un gene con imprinting l'effetto di una mutazione dipende dal genitore che la trasmette. Si consideri un gene in cui l'allele materno è spento e solo quello paterno è attivo. Una mutazione che inattiva il gene, se arriva dal padre, colpisce la sola copia attiva, e il figlio resta senza proteina. La stessa mutazione, se arriva dalla madre, colpisce la copia già spenta e non ha effetto. L'imprinting riguarda geni del nucleo ed è un fenomeno diverso dall'eredità dei mitocondri, descritta più avanti.
:::

## Numero e struttura dei cromosomi

:::definizione{#cariotipo titolo="Cariotipo e risoluzione dell'osservazione"}
Il **cariotipo** è l'insieme dei cromosomi di una cellula, ordinati per dimensione e forma. Si ottiene fotografando al microscopio i cromosomi di una cellula in divisione. Il cariotipo umano normale ha 46 cromosomi: 22 coppie di **autosomi**, uguali nei due sessi, e una coppia di **cromosomi sessuali**, XX nella femmina e XY nel maschio. Nella cellula in divisione ogni cromosoma è formato da due cromatidi fratelli, quindi i cromosomi sono 46 e le molecole di DNA sono 92.

Le alterazioni del **numero** dei cromosomi sono di due tipi.

- Nella **poliploidia** la cellula ha più di due corredi completi, per esempio tre ($3n$, triploidia).
- Nell'**aneuploidia** c'è un singolo cromosoma in più o in meno. Con un cromosoma in più si parla di **trisomia**, con uno in meno di **monosomia**. La sindrome di Down è la trisomia del cromosoma 21, e la persona ha 47 cromosomi.

L'aneuploidia nasce da un errore della meiosi detto **non-disgiunzione**, in cui due cromosomi che dovevano separarsi vanno nella stessa cellula. Le conseguenze dipendono dalla divisione in cui avviene.

- In **meiosi I** non si separano i due omologhi. Tutti e quattro i gameti sono anomali: due hanno un cromosoma in più e due ne hanno uno in meno.
- In **meiosi II** non si separano i due cromatidi fratelli in una delle due cellule. Due gameti sono normali, uno ha un cromosoma in più e uno ne ha uno in meno.

Le alterazioni della **struttura** riguardano un tratto di cromosoma.

- Una **delezione** è la perdita di un tratto. I geni di quel tratto restano in una sola copia.
- Una **duplicazione** è la ripetizione di un tratto. I geni di quel tratto sono in tre copie.
- Un'**inversione** è un tratto ruotato di 180 gradi. Si dice pericentrica se il tratto comprende il centromero e paracentrica se non lo comprende.
- Una **traslocazione** è lo spostamento di un tratto su un altro cromosoma. Se i due cromosomi si scambiano tratti senza perdita di materiale, la traslocazione è **bilanciata**.

Chi porta un'inversione o una traslocazione bilanciata ha tutti i geni nel numero normale e di solito è sano. Durante la meiosi produce però anche gameti con tratti in più o in meno, quindi ha un rischio maggiore di aborti e di figli con anomalie. Un danno diretto si ha solo se il punto di rottura cade dentro un gene.

Il cariotipo mostra le alterazioni grandi, cioè quelle che riguardano almeno alcuni milioni di coppie di basi. Una mutazione di una singola base non cambia l'aspetto del cromosoma e si individua solo leggendo la sequenza del DNA. Un cariotipo normale esclude quindi le grandi anomalie cromosomiche e non le mutazioni dei singoli geni.
:::

## Deduzioni dagli alberi genealogici

:::definizione{#pedigree titolo="Trasmissione e ipotesi del modello"}
Un **albero genealogico** (pedigree) è lo schema di una famiglia in cui si segna chi manifesta una caratteristica, di solito una malattia. I quadrati sono i maschi e i cerchi le femmine. Un simbolo pieno indica una persona affetta e un simbolo vuoto una persona non affetta. Una linea orizzontale unisce due genitori e da essa scendono i figli. Dall'albero si ricava il **modo di trasmissione** della malattia, confrontando ciò che si osserva con ciò che ciascun modello prevede.

![Pedigree compatibile con trasmissione autosomica recessiva](/figure/biologia-semestre-filtro/genetica-mutazioni/pedigree-it.svg)

I modelli principali si riconoscono dai seguenti segni.

**Autosomica recessiva.** La malattia compare solo in chi ha due alleli alterati (aa). Il segno tipico è un figlio affetto con due genitori sani. I due genitori sono entrambi eterozigoti (Aa) e si dicono **portatori sani**. Ogni loro figlio ha probabilità $\dfrac14$ di essere affetto. Un fratello sano di una persona affetta è portatore con probabilità $\dfrac23$, come calcolato sopra. La malattia colpisce maschi e femmine in ugual misura e spesso salta le generazioni.

**Autosomica dominante.** Basta un allele alterato. Ogni persona affetta ha in genere un genitore affetto, e la malattia compare in tutte le generazioni. Una persona affetta eterozigote (Aa) con un partner sano (aa) ha ogni figlio affetto con probabilità $\dfrac12$. Se la penetranza è incompleta, una persona con l'allele risulta sana e la malattia sembra saltare una generazione.

**Recessiva legata all'X.** Il gene sta sul cromosoma X. Un maschio ha un solo X, quindi un solo allele alterato basta a renderlo affetto. Una femmina ha due X ed è affetta solo con due alleli alterati. Con un allele alterato è portatrice sana. I segni sono tre.

- Gli affetti sono quasi tutti maschi.
- Un padre affetto non trasmette la malattia ai figli maschi, perché ai maschi dà il cromosoma Y. Trasmette l'X alterato a tutte le figlie, che sono portatrici.
- Una madre portatrice ha ogni figlio maschio affetto con probabilità $\dfrac12$ e ogni figlia femmina portatrice con probabilità $\dfrac12$.

Se il sesso del nascituro non è noto, la probabilità che una madre portatrice e un padre sano abbiano un figlio maschio e affetto è $\dfrac12\cdot\dfrac12=\dfrac14$.

**Dominante legata all'X.** Un padre affetto ha tutte le figlie affette e nessun figlio maschio affetto. Una madre affetta eterozigote ha ogni figlio, maschio o femmina, affetto con probabilità $\dfrac12$.

**Legata all'Y.** La caratteristica passa da padre a tutti i figli maschi e non compare mai nelle femmine.

**Mitocondriale.** Il gene sta nel DNA dei mitocondri, che un embrione riceve solo dalla cellula uovo. Una madre affetta trasmette la malattia a tutti i figli, maschi e femmine. Un padre affetto non la trasmette a nessuno. Ogni cellula contiene centinaia di mitocondri, e spesso solo una parte di essi porta la mutazione. Questa mescolanza si chiama **eteroplasmia**. La proporzione di mitocondri mutati cambia da un figlio all'altro e da un tessuto all'altro, quindi la gravità della malattia è molto variabile.

Un albero con poche persone è spesso compatibile con più di un modello. In quel caso l'albero permette di escludere alcuni modelli, e per scegliere fra i restanti servono altri dati, per esempio l'analisi del DNA.
:::
