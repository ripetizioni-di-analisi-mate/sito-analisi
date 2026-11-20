---
titolo: "Ciclo cellulare, meiosi e morte cellulare"
sommario: "Punti di controllo, cicline e CDK, Rb e p53, mitosi, meiosi, cellule staminali e vie dell'apoptosi, spiegati attraverso esperimenti e conteggi cromosomici."
---

## Fasi e controlli del ciclo

:::definizione{#ciclo titolo="G1, S, G2 e fase M"}
Il **ciclo cellulare** è la serie di eventi che va dalla nascita di una cellula alla sua divisione in due cellule figlie. Ha quattro fasi, sempre nello stesso ordine.

1. **G1**. La cellula cresce e, in base ai segnali che riceve, stabilisce se dividersi.
2. **S** (sintesi). La cellula replica il DNA (acido desossiribonucleico).
3. **G2**. La cellula controlla che il DNA sia stato copiato tutto e si prepara alla divisione.
4. **M**. La cellula si divide. Questa fase comprende la **mitosi**, cioè la divisione del nucleo, e la **citodieresi**, cioè la divisione del citoplasma.

Le prime tre fasi insieme si chiamano **interfase**. Una cellula che non si divide esce dal ciclo ed entra in uno stato detto **G0**. Alcune cellule vi restano per sempre, come i neuroni. Altre rientrano nel ciclo quando ricevono uno stimolo, come le cellule del fegato dopo una lesione.

Il passaggio da una fase alla successiva è sorvegliato da **punti di controllo** (checkpoint). In ciascuno la cellula verifica una condizione e, se non è soddisfatta, si ferma finché il problema è risolto. I tre principali sono i seguenti.

- Al passaggio **G1/S** la cellula verifica che il DNA sia integro e che siano presenti i segnali di crescita.
- Al passaggio **G2/M** verifica che la replicazione sia completa e che il DNA non sia danneggiato.
- Durante la **mitosi** verifica che tutti i cromosomi siano attaccati al fuso.

Se un punto di controllo non funziona, gli errori passano alle cellule figlie e si accumulano.

Crescita, replicazione e divisione sono tre processi distinti. Una cellula aumenta di volume senza replicare il DNA, oppure replica il DNA senza dividersi. Per sapere in quale fase si trova una cellula si misura quindi il processo che interessa.

Durante il ciclo cambia la quantità di DNA, mentre il numero di cromosomi resta lo stesso. Si usano i simboli $n$, numero di cromosomi di un corredo, e $C$, quantità di DNA di un corredo non replicato. Una cellula umana in G1 ha 46 cromosomi, ciascuno con una molecola di DNA, e si indica con $2n,2C$. Dopo la fase S ha ancora 46 cromosomi, ciascuno formato da due cromatidi fratelli, quindi 92 molecole di DNA, e si indica con $2n,4C$. La replicazione raddoppia il DNA e lascia la cellula diploide.

![Fasi del ciclo e quantità di DNA](/figure/biologia-semestre-filtro/ciclo-cellulare/ciclo-it.svg)

**Leggere un esperimento.** Si colorano le cellule di una coltura con una sostanza fluorescente che si lega al DNA, e si misura la fluorescenza di ogni cellula. Le cellule si dividono in tre gruppi. Quelle con fluorescenza $2C$ sono in G1 o in G0. Quelle con fluorescenza $4C$ sono in G2 o in mitosi. Quelle con valori intermedi sono in fase S, perché hanno copiato solo una parte del DNA. La misura del DNA non distingue G1 da G0, né G2 da M. Per farlo servono altre osservazioni, per esempio la presenza di cromosomi condensati, che indica la mitosi.
:::

:::definizione{#cicline-cdk titolo="Attivazione delle chinasi del ciclo"}
Il ciclo cellulare avanza grazie a una famiglia di enzimi, le **CDK** (chinasi dipendenti da cicline). Una chinasi è un enzima che aggiunge un gruppo fosfato ad altre proteine. Una CDK da sola è inattiva. Diventa attiva quando si lega a una proteina detta **ciclina**. Le CDK sono presenti in quantità costante per tutto il ciclo. Le cicline, invece, vengono prodotte e poi distrutte a ogni ciclo, ciascuna in una fase precisa, e da questo prendono il nome. Ogni fase ha quindi il proprio complesso ciclina-CDK attivo.

| Complesso | Momento in cui agisce |
|---|---|
| Ciclina D con CDK4 o CDK6 | avanzamento in G1 |
| Ciclina E con CDK2 | passaggio da G1 a S |
| Ciclina A con CDK2 | fase S |
| Ciclina B con CDK1 | ingresso in mitosi |

Il complesso attivo fosforila le proteine che eseguono gli eventi di quella fase. Quando la ciclina viene degradata la CDK torna inattiva e la fase si conclude.

Il legame con la ciclina è necessario, ma l'attività della CDK è regolata anche in altri due modi.

- **Fosforilazione della CDK stessa.** La chinasi Wee1 aggiunge alla CDK1 un fosfato che la inibisce. La fosfatasi Cdc25 lo toglie, e solo allora il complesso ciclina B-CDK1 si attiva e la cellula entra in mitosi.
- **Inibitori.** Proteine come **p21** si legano al complesso ciclina-CDK e lo bloccano.

La quantità di ciclina e l'attività della CDK sono quindi due cose diverse. Due cellule con la stessa quantità di ciclina B, per esempio, differiscono nell'attività di CDK1 se in una la CDK1 porta ancora il fosfato inibitorio. La prima entra in mitosi e la seconda resta in G2.
:::

## Punto di restrizione e danno al DNA

:::definizione{#rb-e2f titolo="Fattori di crescita e ingresso in S"}
Una cellula animale si divide solo se riceve dall'esterno segnali detti **fattori di crescita** (o mitogeni). Il loro effetto passa attraverso due proteine, Rb ed E2F.

- **E2F** è un fattore di trascrizione. Attiva i geni necessari alla fase S, per esempio quelli degli enzimi della replicazione.
- **Rb** (proteina del retinoblastoma) si lega a E2F e la tiene inattiva. È quindi un freno all'ingresso in fase S.

Il freno viene tolto con la seguente sequenza.

1. I fattori di crescita fanno aumentare la ciclina D.
2. La ciclina D attiva CDK4 e CDK6, che fosforilano Rb.
3. Rb fosforilata si stacca da E2F.
4. E2F libera attiva i geni della fase S, e la cellula comincia a replicare il DNA.

La fosforilazione in questo caso inattiva una proteina, Rb. La cellula avanza nel ciclo perché viene tolto un freno.

Il **punto di restrizione** è il momento di G1 dopo il quale la cellula completa il ciclo anche se i fattori di crescita vengono a mancare. Prima di quel punto, se i fattori di crescita mancano, la cellula si ferma ed entra in G0. Il punto di restrizione riguarda i segnali esterni. Il controllo dei danni al DNA è un sistema separato e resta attivo anche dopo.

![Segnali mitogeni e freno Rb](/figure/biologia-semestre-filtro/ciclo-cellulare/rb-it.svg)

**Esempio ragionato.** Si tolgono i fattori di crescita a due gruppi di cellule in G1. Il primo gruppo è all'inizio di G1 e non ha ancora superato il punto di restrizione. Rb non è stata ancora fosforilata, quindi E2F resta bloccata e le cellule si fermano. Il secondo gruppo è alla fine di G1 e ha già superato il punto di restrizione. Rb è già fosforilata ed E2F è libera, quindi le cellule entrano in fase S e completano il ciclo. I fattori di crescita servono dunque fino al punto di restrizione e non oltre. Se in queste cellule il DNA viene danneggiato, il ciclo si ferma comunque, per opera del controllo descritto nel prossimo riquadro.
:::

:::definizione{#p53-tumori titolo="Arresto, riparazione e trasformazione"}
Quando il DNA è danneggiato la cellula ferma il ciclo, in modo da non copiare e non trasmettere l'errore. La proteina centrale di questa risposta è **p53**, un fattore di trascrizione. In una cellula sana p53 viene degradata di continuo e la sua quantità è bassa. La risposta al danno ha quattro passaggi.

1. Il danno blocca la degradazione di p53, che si accumula.
2. p53 attiva il gene di **p21**.
3. p21 si lega ai complessi ciclina-CDK e li blocca, quindi il ciclo si ferma.
4. Durante l'arresto gli enzimi di riparazione riparano il DNA.

p53 non ripara il DNA: attiva i geni che fermano il ciclo. Secondo la gravità del danno gli esiti sono tre. Se il danno viene riparato, la cellula riprende il ciclo. Se il danno persiste, la cellula smette definitivamente di dividersi (senescenza). Se il danno è molto grave, p53 attiva i geni dell'**apoptosi** e la cellula muore.

Un tumore nasce quando le cellule si dividono senza controllo. I geni coinvolti sono di due classi.

- Un **oncogene** deriva da un gene normale, detto proto-oncogene, che stimola la divisione. La mutazione rende la proteina troppo attiva (guadagno di funzione). Basta la mutazione di una sola delle due copie del gene. Un esempio è Ras.
- Un **oncosoppressore** è un gene che frena la divisione o fa morire le cellule danneggiate. Contribuisce al tumore quando smette di funzionare (perdita di funzione). In genere devono essere inattivate entrambe le copie, perché una sola copia funzionante basta a frenare. Ne sono esempi *RB1*, il gene di Rb, e *TP53*, il gene di p53.

Il gene *TP53* è mutato in circa metà dei tumori umani. Alcuni virus causano tumori inattivando queste stesse proteine. Il papillomavirus (HPV) ad alto rischio, responsabile del tumore del collo dell'utero, produce due proteine: E6 fa degradare p53 ed E7 blocca Rb.

Una sola mutazione non basta a formare un tumore. Un tumore si sviluppa quando nella stessa cellula e nelle sue discendenti si accumulano più alterazioni, di solito in oncogeni e in oncosoppressori insieme.
:::

## Ingresso in mitosi e fuso

:::definizione{#mitosi-fuso titolo="Condensazione e collegamento ai cromosomi"}
La **mitosi** è la divisione del nucleo. Distribuisce i cromosomi replicati in modo che ciascuna cellula figlia riceva una copia di ogni cromosoma. All'inizio della mitosi ogni cromosoma è formato da due cromatidi fratelli. Due complessi proteici li preparano.

- Le **coesine** tengono uniti i due cromatidi fratelli.
- Le **condensine** compattano ogni cromosoma, che diventa corto, spesso e visibile al microscopio.

I cromosomi sono spostati dal **fuso mitotico**, una struttura di microtubuli che parte dai due poli della cellula. A ciascun polo c'è un centrosoma. I microtubuli del fuso sono di tre tipi.

- I microtubuli del **cinetocore** si attaccano ai cromosomi.
- I microtubuli **interpolari** partono dai due poli e si sovrappongono al centro della cellula. Spingono i poli lontano l'uno dall'altro.
- I microtubuli **astrali** vanno dai poli verso la membrana e tengono il fuso nella posizione corretta.

I microtubuli si attaccano al cromosoma nel **cinetocore**, un complesso di proteine montato sul centromero. Ogni cromatidio ha il proprio cinetocore, quindi un cromosoma replicato ne ha due, rivolti in versi opposti. Il centromero è la regione di DNA, il cinetocore è la struttura proteica costruita su di essa. Una proteina del cinetocore, NDC80, forma il legame diretto con il microtubulo.

La mitosi è divisa in cinque fasi.

1. **Profase**. I cromosomi si condensano e il fuso comincia a formarsi.
2. **Prometafase**. L'involucro nucleare si disgrega, perché le lamine che lo sostengono vengono fosforilate. I microtubuli raggiungono i cromosomi e si attaccano ai cinetocori.
3. **Metafase**. Tutti i cromosomi sono allineati al centro della cellula, sulla piastra metafasica. I due cinetocori di ogni cromosoma sono attaccati a poli opposti.
4. **Anafase**. I cromatidi fratelli si separano e si spostano verso i due poli.
5. **Telofase**. Intorno a ciascun gruppo di cromosomi si riforma un involucro nucleare e i cromosomi si decondensano.

![Fuso mitotico e tre classi di microtubuli](/figure/biologia-semestre-filtro/ciclo-cellulare/fuso-it.svg)

La separazione corretta richiede che i due cinetocori di ogni cromosoma siano attaccati a poli opposti. Questa disposizione si chiama **biorientamento**. Il **punto di controllo del fuso** la verifica. Finché anche un solo cinetocore è privo di microtubuli, quel cinetocore produce un segnale che blocca l'inizio dell'anafase. Quando tutti i cinetocori sono attaccati il segnale cessa e l'anafase comincia.

Un cromosoma che si trova al centro della cellula non è necessariamente attaccato in modo corretto. Può avere, per esempio, entrambi i cinetocori attaccati allo stesso polo. La cellula corregge molti di questi attacchi, ma non tutti. Un attacco sbagliato che sfugge al controllo fa andare due cromatidi nella stessa cellula figlia, e le due cellule figlie hanno un cromosoma in più e uno in meno.
:::

## Anafase e citodieresi

:::definizione{#apc-citodieresi titolo="APC/C, separasi e anello contrattile"}
All'inizio dell'anafase i cromatidi fratelli, tenuti insieme dalle coesine, si separano tutti nello stesso momento. Il comando viene da un complesso proteico detto **APC/C** (complesso che promuove l'anafase). APC/C è una ubiquitina-ligasi, cioè un enzima che attacca ubiquitina ad altre proteine e le destina così alla degradazione nel proteasoma. Quando il punto di controllo del fuso è soddisfatto, APC/C diventa attivo e la separazione avviene in quattro passaggi.

1. APC/C attacca ubiquitina alla **securina**.
2. Il proteasoma degrada la securina. La securina era legata a un enzima, la **separasi**, e lo teneva inattivo.
3. La separasi, ora libera, taglia le coesine.
4. I cromatidi fratelli non sono più uniti e i microtubuli li tirano verso i poli opposti.

In questa sequenza ogni proteina ha un solo compito. APC/C marca, il proteasoma degrada e la separasi taglia. APC/C non taglia le coesine e non agisce sul DNA.

APC/C ha un secondo bersaglio, la **ciclina B**. Degradata la ciclina B, la CDK1 torna inattiva e la cellula esce dalla mitosi. I cromosomi si decondensano e l'involucro nucleare si riforma.

La **citodieresi** è la divisione del citoplasma e comincia alla fine dell'anafase. Nelle cellule animali, sotto la membrana e a metà della cellula, si forma un **anello contrattile** di actina e miosina. L'anello si stringe e forma un solco sempre più profondo, finché la cellula si divide in due. Mitosi e citodieresi sono processi distinti e di solito coordinati.

![Sequenza APC/C, securina, separasi e coesina](/figure/biologia-semestre-filtro/ciclo-cellulare/apc-it.svg)

**Esperimento di blocco.** Due esperimenti mostrano che la separazione dei cromosomi e la divisione del citoplasma sono indipendenti. Nel primo si usa una securina modificata, che il proteasoma non riesce a degradare. La separasi resta bloccata e le coesine non vengono tagliate. Il fuso si forma e i cromosomi si allineano, ma i cromatidi fratelli non si separano. Nel secondo si blocca l'anello contrattile con un farmaco che agisce sull'actina. I cromosomi si separano normalmente e si formano due nuclei, ma il citoplasma non si divide. Si ottiene una sola cellula con due nuclei.

Nei conteggi l'anafase richiede attenzione. Appena i cromatidi fratelli si separano, ciascuno si conta come un cromosoma. Una cellula umana in anafase contiene quindi 92 cromosomi, 46 diretti a ciascun polo, fino a quando la citodieresi la divide.
:::

## Meiosi e variabilità

:::definizione{#meiosi titolo="Una replicazione e due divisioni"}
La **meiosi** è la divisione che produce i gameti. Parte da una cellula diploide e dà quattro cellule aploidi, ciascuna con un solo cromosoma di ogni coppia. Alla fecondazione due gameti aploidi si uniscono e il numero diploide si ricostituisce. La meiosi comprende una sola replicazione del DNA seguita da due divisioni.

- Nella **meiosi I** si separano i cromosomi omologhi. Ogni cellula figlia riceve un cromosoma di ogni coppia, ancora formato da due cromatidi fratelli. Il numero di cromosomi si dimezza, e per questo la divisione si dice riduzionale.
- Nella **meiosi II** si separano i cromatidi fratelli, come in una mitosi. Il numero di cromosomi resta lo stesso, e la divisione si dice equazionale. Fra le due divisioni il DNA non viene replicato.

Il conto dei cromosomi e del DNA, per una cellula umana, è il seguente.

| Momento | Cromosomi e DNA | Nell'uomo |
|---|---|---|
| Prima della replicazione | $2n,2C$ | 46 cromosomi, 46 molecole |
| Dopo la replicazione | $2n,4C$ | 46 cromosomi, 92 molecole |
| Dopo la meiosi I, in ogni cellula | $n,2C$ | 23 cromosomi, 46 molecole |
| Dopo la meiosi II, in ogni cellula | $n,1C$ | 23 cromosomi, 23 molecole |

La parte più lunga della meiosi è la **profase I**, in cui avvengono due eventi che non esistono nella mitosi.

- L'**appaiamento**. I due omologhi di ogni coppia si affiancano per tutta la lunghezza, tenuti insieme da una struttura proteica detta **complesso sinaptonemale**. La coppia di omologhi appaiati si chiama **bivalente** o tetrade. Contiene due cromosomi e quindi quattro cromatidi.
- Il **crossing over**. Un cromatidio di un omologo e un cromatidio dell'altro si spezzano nello stesso punto e si scambiano i tratti corrispondenti. I punti di scambio restano visibili come incroci fra i due omologhi, detti **chiasmi**. I chiasmi tengono uniti gli omologhi fino all'anafase I, e questo permette di separarli correttamente.

La profase I è suddivisa in cinque stadi, che in ordine sono leptotene, zigotene, pachitene, diplotene e diacinesi. L'appaiamento si completa nello zigotene, il crossing over avviene nel pachitene e i chiasmi diventano visibili nel diplotene.

![Numero dei corredi e quantità di DNA nella meiosi](/figure/biologia-semestre-filtro/ciclo-cellulare/meiosi-it.svg)

Le due divisioni differiscono per il modo in cui i cromosomi si attaccano al fuso. In meiosi I i due cinetocori fratelli di un cromosoma si attaccano allo stesso polo, e i due omologhi di un bivalente si attaccano a poli opposti. All'anafase I la separasi taglia le coesine lungo i bracci dei cromosomi, quindi gli omologhi si separano. Le coesine del centromero sono protette da una proteina detta **shugoshin**, e i cromatidi fratelli restano uniti. In meiosi II la protezione viene tolta. I cinetocori fratelli si attaccano a poli opposti, la separasi taglia le coesine del centromero e i cromatidi si separano.

La meiosi produce gameti tutti diversi fra loro per due motivi.

- L'**assortimento indipendente**. In metafase I ogni bivalente si orienta a caso, e l'orientamento di una coppia non dipende da quello delle altre. Ogni gamete riceve quindi una combinazione casuale di cromosomi di origine materna e paterna. Con $n$ coppie le combinazioni possibili sono $2^n$. Con 3 coppie sono $2^3=8$, e nell'uomo, con 23 coppie, sono $2^{23}$, cioè più di 8 milioni.
- Il **crossing over**. Ogni cromosoma che arriva al gamete è un mosaico di tratti materni e paterni.

Il numero $2^n$ conta le combinazioni possibili nell'insieme di molte meiosi. Una singola meiosi produce quattro cellule. In una specie con $2n=6$, per esempio, dopo la meiosi I ogni cellula ha 3 cromosomi formati da due cromatidi, e dopo la meiosi II ogni cellula ha 3 cromosomi formati da un solo cromatidio.

Se in una delle due divisioni due cromosomi non si separano (non-disgiunzione), si formano gameti con un cromosoma in più o in meno. Un errore in meiosi I dà quattro gameti anomali. Un errore in una sola delle due cellule in meiosi II dà due gameti normali e due anomali.
:::

## Gametogenesi e cellule staminali

:::definizione{#gametogenesi titolo="Spermatogenesi e ovogenesi umane"}
La **gametogenesi** è la formazione dei gameti. Nei due sessi usa la stessa meiosi, con tempi e risultati diversi.

La **spermatogenesi** avviene nei testicoli, in modo continuo dalla pubertà in poi. Le tappe sono quattro.

1. Gli **spermatogoni** sono cellule diploidi che si dividono per mitosi e mantengono la riserva.
2. Uno spermatogonio diventa **spermatocita primario** ed entra in meiosi I.
3. Dalla meiosi I si ottengono due **spermatociti secondari**, aploidi, con cromosomi ancora formati da due cromatidi.
4. Dalla meiosi II si ottengono quattro **spermatidi**, aploidi.

Gli spermatidi si trasformano poi in spermatozoi con un processo di maturazione detto spermiogenesi, in cui la cellula cambia forma e non si divide. Da uno spermatocita primario si ottengono quindi quattro spermatozoi.

L'**ovogenesi** avviene nelle ovaie e differisce in due aspetti.

- Le divisioni sono **asimmetriche**. A ogni divisione quasi tutto il citoplasma resta in una sola cellula, e l'altra è una cellula piccolissima, detta **globulo polare**, che degenera. Da un ovocita primario si ottiene quindi una sola cellula uovo.
- La meiosi si **ferma due volte**. Gli ovociti primari cominciano la meiosi nel feto, prima della nascita, e si fermano in profase I. Restano così per anni. Dalla pubertà, a ogni ciclo, un ovocita completa la meiosi I e diventa **ovocita secondario**, che si ferma di nuovo in metafase II. La cellula rilasciata all'ovulazione è questo ovocita secondario. La meiosi II si completa solo se avviene la fecondazione.

L'ovocita secondario è aploide ($n$) e i suoi cromosomi hanno ancora due cromatidi, quindi il suo DNA è $2C$ e non $1C$. Una cellula aploide non ha necessariamente la quantità minima di DNA.

Un ovocita resta fermo in profase I anche per quarant'anni, con gli omologhi tenuti insieme dalle coesine. Con il passare del tempo le coesine si deteriorano e gli errori di separazione diventano più frequenti. Questo è uno dei motivi per cui il rischio di trisomie, come la sindrome di Down, aumenta con l'età della madre.
:::

:::definizione{#staminali titolo="Autorinnovamento e potenza differenziativa"}
Una **cellula staminale** è una cellula non specializzata che possiede due capacità insieme.

- L'**autorinnovamento**. Dividendosi produce altre cellule staminali, quindi la riserva non si esaurisce.
- Il **differenziamento**. Produce cellule che si specializzano in uno o più tipi cellulari.

Le cellule staminali del midollo osseo, per esempio, producono ogni giorno miliardi di cellule del sangue e restano presenti per tutta la vita.

La **potenza** di una cellula staminale è il numero di tipi cellulari che è capace di produrre.

- Una cellula **totipotente** produce tutti i tipi cellulari dell'organismo e anche gli annessi embrionali, come la placenta. Lo zigote è totipotente.
- Una cellula **pluripotente** produce tutti i tipi cellulari dell'organismo. Le cellule staminali embrionali sono pluripotenti.
- Una cellula **multipotente** produce solo i tipi cellulari di un tessuto. Le staminali del midollo osseo producono le cellule del sangue.

Una **cellula progenitrice** è una discendente della staminale. Si divide rapidamente, ma solo per un numero limitato di volte, poi le sue discendenti si differenziano tutte. Non ha quindi un autorinnovamento duraturo.

Una staminale si divide in due modi. In una divisione **asimmetrica** produce una staminale e una cellula che si differenzia. In una divisione **simmetrica** produce due staminali oppure due cellule che si differenziano. La riserva resta costante se, nell'insieme della popolazione, i due tipi di divisione simmetrica si compensano. Per dimostrare che una cellula è staminale si seguono le sue discendenti nel tempo, e si verifica che fra esse restino cellule staminali e compaiano cellule differenziate.

![Divisioni simmetriche e asimmetriche](/figure/biologia-semestre-filtro/ciclo-cellulare/staminali-it.svg)

Le cellule staminali vivono in un ambiente particolare del tessuto, detto **nicchia**. Le cellule vicine e la matrice della nicchia forniscono i segnali che mantengono la cellula allo stato staminale. Dopo una divisione, la cellula figlia che resta nella nicchia rimane staminale e quella che ne esce si differenzia, anche se le due cellule hanno lo stesso DNA.

Potenza e velocità di divisione sono proprietà distinte. Molte cellule staminali si dividono raramente e passano lunghi periodi a riposo. Le cellule progenitrici si dividono rapidamente.
:::

## Apoptosi e necrosi

:::definizione{#apoptosi-necrosi titolo="Aspetti morfologici e caspasi"}
Una cellula muore in due modi principali, con conseguenze diverse per il tessuto.

L'**apoptosi** è una morte programmata, che la cellula stessa esegue in modo ordinato. La cellula si rimpicciolisce, la cromatina si condensa, il DNA viene tagliato in frammenti e la cellula si divide in piccole vescicole chiuse da membrana, i **corpi apoptotici**. La membrana resta integra per tutto il processo, quindi il contenuto della cellula non si disperde. I macrofagi inglobano i corpi apoptotici e non c'è infiammazione. L'apoptosi elimina le cellule non più necessarie o danneggiate. Nell'embrione, per esempio, elimina le cellule fra le dita della mano.

La **necrosi** è una morte accidentale, causata da un danno grave come la mancanza di ossigeno. La cellula si gonfia, la membrana si rompe e il contenuto si riversa nel tessuto, dove provoca **infiammazione**.

L'apoptosi è eseguita da enzimi detti **caspasi**. Sono proteasi, cioè enzimi che tagliano altre proteine. Nella cellula sana sono presenti in forma inattiva, dette procaspasi, e vengono attivate a cascata.

- Le caspasi **iniziatrici** (caspasi 8 e caspasi 9) sono attivate per prime, dal segnale di morte.
- Le caspasi **esecutrici** (caspasi 3 e caspasi 7) sono attivate dalle iniziatrici. Tagliano centinaia di proteine della cellula, fra cui quelle del citoscheletro e le lamine del nucleo.

Le caspasi tagliano proteine e non DNA. Il DNA viene frammentato da una nucleasi, che le caspasi attivano.

In laboratorio una cellula in apoptosi si riconosce da un cambiamento della membrana. La fosfatidilserina, un fosfolipide che di norma sta sul foglietto interno della membrana, passa sul foglietto esterno. È anche il segnale che i macrofagi riconoscono. Si usano insieme due coloranti.

- L'**annessina V** si lega alla fosfatidilserina esposta all'esterno.
- Lo **ioduro di propidio** entra solo nelle cellule con la membrana rotta.

Una cellula positiva all'annessina V e negativa allo ioduro di propidio è nella fase iniziale dell'apoptosi, perché espone la fosfatidilserina e ha la membrana ancora integra. Una cellula positiva a entrambi ha la membrana rotta. È in apoptosi avanzata oppure in necrosi, e i due coloranti da soli non distinguono i due casi.
:::

## Vie apoptotiche

:::definizione{#vie-apoptotiche titolo="Via intrinseca ed estrinseca"}
L'apoptosi viene avviata per due vie, secondo l'origine del segnale.

La **via intrinseca** (mitocondriale) parte dall'interno della cellula, in risposta a un danno al DNA o a un altro stress. È controllata dalle proteine della **famiglia BCL2**, che si dividono in tre gruppi.

- Le proteine **pro-apoptotiche** BAX e BAK formano pori nella membrana esterna del mitocondrio.
- Le proteine **anti-apoptotiche** BCL2 e BCL-XL si legano a BAX e BAK e le tengono inattive.
- Le proteine **BH3-only** sono i sensori del danno. Quando sono attivate bloccano le anti-apoptotiche e liberano BAX e BAK.

La via prosegue in quattro passaggi.

1. BAX e BAK formano pori nella membrana esterna del mitocondrio. Questo evento si indica con la sigla **MOMP** (permeabilizzazione della membrana esterna del mitocondrio).
2. Attraverso i pori esce nel citosol il **citocromo c**, una proteina che di norma sta nello spazio intermembrana e partecipa alla catena respiratoria.
3. Nel citosol il citocromo c si lega alla proteina APAF1. Più copie di questo complesso si uniscono in una struttura a ruota, l'**apoptosoma**.
4. L'apoptosoma attiva la caspasi 9, che attiva le caspasi esecutrici.

Il citocromo c ha quindi due funzioni, secondo il luogo in cui si trova: nel mitocondrio serve alla respirazione, nel citosol avvia l'apoptosi. I pori riguardano la membrana esterna del mitocondrio. La membrana interna, dove si produce l'ATP (adenosina trifosfato, la molecola che fornisce energia alle reazioni cellulari), non viene forata.

La **via estrinseca** parte dall'esterno della cellula. Un'altra cellula, per esempio un linfocita, espone un segnale di morte che si lega a un **recettore di morte** sulla cellula bersaglio. La coppia più nota è formata dal recettore Fas e dal suo ligando.

![Due vie dell'apoptosi e punto di convergenza](/figure/biologia-semestre-filtro/ciclo-cellulare/apoptosi-it.svg)

La via estrinseca ha tre passaggi.

1. Il ligando si lega al recettore Fas.
2. La parte interna del recettore richiama una proteina adattatrice, FADD, che a sua volta richiama la procaspasi 8.
3. La caspasi 8 si attiva e attiva le caspasi esecutrici.

Le due vie arrivano quindi alle stesse caspasi esecutrici, la 3 e la 7. Sono anche collegate fra loro. La caspasi 8 taglia una proteina BH3-only detta **BID**, e BID tagliata attiva BAX e BAK. In questo modo un segnale arrivato dall'esterno avvia anche la via mitocondriale, che lo rinforza. In alcuni tipi di cellule questo rinforzo è indispensabile perché la cellula muoia, in altri la sola caspasi 8 è sufficiente.

Un farmaco che inibisce le caspasi blocca i segni dell'apoptosi. La cellula trattata non è però necessariamente salva, perché il danno che aveva avviato il processo è ancora presente.
:::
