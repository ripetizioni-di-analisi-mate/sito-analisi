---
titolo: "Ciclo cellulare, meiosi e morte cellulare"
sommario: "Punti di controllo, cicline e CDK, Rb e p53, mitosi, meiosi, cellule staminali e vie dell'apoptosi, spiegati attraverso esperimenti e conteggi cromosomici."
---

## Fasi e controlli del ciclo

:::definizione{#ciclo titolo="G1, S, G2 e fase M"}
Il **ciclo cellulare** coordina crescita, duplicazione del DNA e divisione. In G1 la cellula valuta condizioni e segnali; in S replica il DNA; in G2 completa la preparazione alla divisione; nella fase M avvengono mitosi e citodieresi. G1, S e G2 costituiscono l'interfase. Alcune cellule entrano in G0, uno stato esterno al ciclo proliferativo che può essere reversibile o molto stabile secondo il tipo cellulare.

I punti di controllo coordinano il passaggio tra fasi con integrità del DNA, completamento della replicazione e attacco dei cromosomi al fuso. Se un requisito manca possono ritardare la progressione e permettere riparazione. Il controllo riduce il rischio di trasmissione di errori; la sua alterazione può favorire instabilità genomica.

Una cellula che si divide deve prima copiare l'informazione e poi consegnarne una copia completa a ciascuna figlia. **Crescita, replicazione e divisione non sono sinonimi**: una cellula può aumentare di volume senza duplicare il DNA, oppure replicarlo senza completare la citodieresi. Per riconoscere una fase servono quindi misure adatte al processo che interessa.

In una cellula somatica diploide umana in G1 si contano normalmente 46 cromosomi, ciascuno con una molecola di DNA. Dopo S i cromosomi sono ancora 46, ma ciascuno comprende due cromatidi fratelli: le molecole di DNA sono diventate 92. Il conteggio dei cromosomi segue le unità centromeriche non ancora separate; il conteggio delle molecole segue invece i cromatidi. La lettera $n$ indica il numero di cromosomi di un corredo e $C$ la quantità di DNA di un corredo aploide non replicato. Duplicare il DNA porta da $2n,2C$ a $2n,4C$, senza rendere la cellula tetraploide.

![Fasi del ciclo e quantità di DNA](/figure/biologia-semestre-filtro/ciclo-cellulare/ciclo-it.svg)

**Leggere un esperimento.** Una misura di fluorescenza proporzionale al DNA distingue cellule con $2C$, quantità intermedie e $4C$. Questi tre gruppi sono compatibili rispettivamente con G1 o G0, fase S e G2 o mitosi prima della separazione cellulare. Il solo DNA non distingue G0 da G1 né G2 da M: servono altri marcatori, per esempio un impulso di un analogo della timidina per riconoscere la sintesi del DNA o l'osservazione dei cromosomi condensati.
:::

:::definizione{#cicline-cdk titolo="Attivazione delle chinasi del ciclo"}
Le **CDK** sono chinasi la cui attività dipende da associazione con cicline e da regolazioni aggiuntive. La quantità di diverse cicline varia durante il ciclo mediante sintesi e degradazione. Fosforilazioni attivanti o inibenti e proteine inibitrici, come p21, modificano l'attività dei complessi.

Nel modello delle cellule animali ciclina D-CDK4/6 contribuisce alla progressione in G1; ciclina E-CDK2 alla transizione G1/S; ciclina A associata a CDK sostiene fasi S e G2; ciclina B-CDK1 promuove l'ingresso in mitosi. I complessi agiscono in reti con retroazioni, quindi la sola presenza di una ciclina non prova che tutti i suoi bersagli siano attivi.

Il nome «chinasi» descrive l'azione: trasferire un gruppo fosfato a proteine bersaglio. La ciclina contribuisce ad attivare la CDK e a selezionare quando e su quali bersagli agisce. La fosforilazione può cambiare localizzazione, interazioni o attività del bersaglio; non equivale sempre a un'attivazione. Anche la CDK è regolata da fosforilazioni: Cdc25 rimuove siti inibitori, mentre Wee1 contribuisce a inserirli nel controllo di CDK1.

**Come distinguere quantità e attività.** Due campioni possono contenere la stessa quantità di ciclina B, ma mostrare attività CDK1 diversa se uno conserva la fosforilazione inibitoria. Misurare la sola ciclina non basta per prevedere l'ingresso in mitosi. Analogamente, degradare una ciclina spegne un complesso senza richiedere la distruzione della CDK. Attivazione rapida e degradazione selettiva permettono di ordinare gli eventi: la cellula non deve avviare una seconda replicazione mentre sta separando i cromosomi.
:::

## Punto di restrizione e danno al DNA

:::definizione{#rb-e2f titolo="Fattori di crescita e ingresso in S"}
Nel modello classico la proteina **Rb** limita l'attività dei fattori E2F e l'espressione di geni necessari alla fase S. I fattori di crescita favoriscono l'attività di ciclina D-CDK4/6; la fosforilazione di Rb, con ulteriori regolazioni dei complessi del ciclo, riduce il freno su E2F e favorisce il programma replicativo.

Il **punto di restrizione** descrive un passaggio di G1 dopo il quale una cellula può proseguire verso la replicazione anche se diminuiscono alcuni segnali mitogeni esterni. È distinto dai controlli che verificano il danno al DNA: una cellula impegnata a proliferare deve comunque coordinare il ciclo con l'integrità del genoma.

Il circuito si interpreta seguendo la direzione dei rapporti: Rb attiva sul piano del freno trattiene E2F; l'inattivazione funzionale di quel freno aumenta l'espressione di geni replicativi. L'effetto finale della fosforilazione di Rb è quindi favorire il ciclo perché riduce un'inibizione, non perché Rb diventa una polimerasi. Questa è una descrizione didattica della rete: le modificazioni di Rb sono progressive e dipendono dal contesto cellulare.

![Segnali mitogeni e freno Rb](/figure/biologia-semestre-filtro/ciclo-cellulare/rb-it.svg)

**Esempio ragionato.** Si rimuovono i fattori di crescita da due popolazioni sincronizzate in momenti diversi di G1. Quella che non ha ancora superato il punto di restrizione può arrestarsi; l'altra può continuare il ciclo già intrapreso. Il risultato non dimostra che i fattori di crescita siano inutili, ma che la dipendenza dai segnali cambia nel tempo. Un successivo danno al DNA può comunque attivare un arresto: decisione proliferativa e sorveglianza dell'integrità sono controlli distinti.
:::

:::definizione{#p53-tumori titolo="Arresto, riparazione e trasformazione"}
Il danno al DNA può stabilizzare **p53**, che modifica l'espressione di geni coinvolti in arresto del ciclo, riparazione, senescenza o apoptosi. Tra i bersagli vi è p21, inibitore di complessi ciclina-CDK. La risposta dipende da tipo, durata e gravità del danno e dallo stato della cellula.

Un proto-oncogene può diventare oncogene attraverso alterazioni che ne aumentano o deregolano l'azione. I geni **oncosoppressori**, come RB1 e TP53, limitano proliferazione o sostengono integrità e morte controllata. Per molti oncosoppressori la perdita di entrambe le copie è rilevante, ma esistono dominanza negativa e insufficienza di dose. Alcuni virus oncogeni producono proteine che interferiscono con questi controlli; per esempio le proteine E6 ed E7 di HPV ad alto rischio alterano rispettivamente le vie di p53 e Rb.

Per ricostruire la risposta a un danno si parte dal sensore e si arriva all'effetto: il segnale di danno favorisce l'accumulo di p53, p53 può aumentare p21, p21 limita l'attività di complessi CDK e la progressione rallenta. Il tempo guadagnato permette alla rete di riparazione di intervenire. p53 è un fattore di trascrizione, non l'enzima che ricuce direttamente ogni rottura del DNA. Un arresto temporaneo, la senescenza stabile e l'apoptosi sono esiti diversi.

La distinzione oncogene/oncosoppressore si usa sul **meccanismo**, non sul semplice nome del gene. Un segnale proliferativo continuamente attivo può derivare da un guadagno di funzione; perdere un freno può derivare da una perdita di funzione. Il modello delle «due alterazioni» aiuta a capire molti oncosoppressori, ma non autorizza a classificare ogni variante con un'unica regola. Neppure una singola alterazione dimostra da sola che una cellula sia già tumorale: trasformazione e selezione clonale coinvolgono più proprietà cellulari.
:::

## Ingresso in mitosi e fuso

:::definizione{#mitosi-fuso titolo="Condensazione e collegamento ai cromosomi"}
Durante la **profase** i cromosomi si condensano e si organizza il fuso. In molte cellule animali la rottura dell'involucro nucleare durante la prometafase permette l'accesso ai cromosomi; la fosforilazione delle lamine contribuisce al disassemblaggio della lamina. Reticolo, Golgi e altri organelli si riorganizzano per la distribuzione alle cellule figlie.

I microtubuli del **cinetocore** collegano il fuso ai cromosomi; quelli interpolari si sovrappongono nella regione centrale; quelli astrali interagiscono con la corteccia e contribuiscono a posizione e orientamento. NDC80 è un complesso del cinetocore che partecipa al legame con i microtubuli. Chinesine, dineine e dinamica della tubulina producono e coordinano i movimenti.

In metafase i cromosomi sono allineati e i cinetocori fratelli collegati a poli opposti. Il controllo del fuso ritarda l'anafase in presenza di attacchi mancanti o inappropriati. L'allineamento è un indicatore utile, mentre la corretta biorientazione è il requisito meccanico per la segregazione.

Le condensine favoriscono l'organizzazione compatta dei cromosomi, mentre le coesine mantengono collegati i cromatidi fratelli: i due complessi svolgono compiti diversi. Il cinetocore è un assemblaggio proteico costruito sulla regione centromerica, non coincide con l'intero centromero. NDC80 contribuisce al collegamento con le estremità dei microtubuli; la loro crescita e depolimerizzazione cooperano con i motori nel movimento dei cromosomi.

![Fuso mitotico e tre classi di microtubuli](/figure/biologia-semestre-filtro/ciclo-cellulare/fuso-it.svg)

In una cellula con un cromosoma visivamente sulla piastra metafasica può persistere un attacco scorretto. Per questo **posizione e connessione non sono la stessa osservazione**. Un cinetocore non attaccato mantiene attivo il checkpoint del fuso, che inibisce l'attivazione efficace di APC/C-Cdc20. La correzione degli attacchi instabili e il checkpoint cooperano, ma il sistema non è infallibile: alcuni errori possono sfuggire e produrre una segregazione anomala. La mitosi distribuisce normalmente anche organelli e componenti citoplasmatici, senza richiedere per ciascun organello lo stesso conteggio uno-a-uno applicato ai cromosomi.
:::

## Anafase e citodieresi

:::definizione{#apc-citodieresi titolo="APC/C, separasi e anello contrattile"}
Quando i controlli lo permettono, il complesso **APC/C**, una ubiquitina-ligasi, favorisce la degradazione della securina e di determinate cicline mitotiche. La rimozione della securina permette l'attività della separasi, che taglia una subunità delle coesine e rende possibile la separazione dei cromatidi fratelli. La degradazione della ciclina B favorisce l'uscita dalla mitosi.

Nell'anafase i cromosomi figli si separano; nella telofase si riorganizzano i nuclei. La **citodieresi** delle cellule animali utilizza un anello di actina e miosina per restringere il solco di divisione. La segregazione cromosomica e la separazione del citoplasma sono processi coordinati ma distinti. Una divisione asimmetrica può distribuire determinanti diversi o collocare le figlie in ambienti differenti.

Occorre distinguere tre azioni consecutive. APC/C **aggiunge un segnale di ubiquitina** a substrati selezionati; il proteasoma degrada la securina marcata; la separasi, liberata dal suo inibitore, **taglia una subunità della coesina**. APC/C non taglia direttamente il DNA e non è la proteasi che recide la coesina. La distruzione della securina e quella della ciclina B coordinano due risultati diversi: separazione dei fratelli e riduzione dell'attività mitotica.

![Sequenza APC/C, securina, separasi e coesina](/figure/biologia-semestre-filtro/ciclo-cellulare/apc-it.svg)

**Esperimento di blocco.** Se la securina è resa non degradabile e mantiene il legame con separasi, il fuso può essere formato e i cromosomi allineati, ma la coesione dei fratelli non viene rimossa normalmente. Se invece si blocca l'anello contrattile dopo una segregazione regolare, possono comparire due nuclei in un unico citoplasma. I due risultati separano la funzione del controllo cromosomico da quella della citodieresi. Durante l'anafase il conteggio nell'intera cellula cambia quando i centromeri fratelli si separano; per evitare ambiguità si deve sempre precisare se si conta l'intera cellula o il patrimonio destinato a ciascun polo.
:::

## Meiosi e variabilità

:::definizione{#meiosi titolo="Una replicazione e due divisioni"}
La **meiosi** comprende una fase S seguita da due divisioni. Nella meiosi I si separano gli omologhi; nella meiosi II i cromatidi fratelli. Durante la profase I gli omologhi si appaiano e il crossing over scambia tratti tra cromatidi non fratelli. I chiasmi, insieme alla coesione, contribuiscono alla corretta segregazione degli omologhi.

La separazione degli omologhi riduce la ploidia; la separazione dei fratelli nella seconda divisione non è preceduta da una nuova replicazione. Usando C per la quantità di DNA di un corredo aploide non replicato, una cellula diploide passa da $2n,2C$ in G1 a $2n,4C$ dopo S; dopo la prima divisione ogni cellula è $n,2C$; dopo la seconda $n,1C$.

Assortimento degli omologhi e ricombinazione aumentano la variabilità dei gameti. La non disgiunzione in meiosi I o II può produrre gameti con cromosomi in eccesso o in difetto. Se in meiosi I una coppia non si separa e la meiosi II procede normalmente, tutti i prodotti sono aneuploidi per quel cromosoma; se l'errore interessa una sola divisione II, il modello genera due prodotti normali e due anomali.

Nella profase I si distinguono leptotene, zigotene, pachitene, diplotene e diacinesi. L'appaiamento degli omologhi è sostenuto dal complesso sinaptonemale; la ricombinazione avviata durante la profase produce scambi la cui conseguenza meccanica è visibile nei chiasmi quando gli omologhi iniziano a separarsi. Un bivalente contiene due cromosomi omologhi duplicati, dunque quattro cromatidi: «tetrade» non significa quattro cromosomi indipendenti.

![Numero dei corredi e quantità di DNA nella meiosi](/figure/biologia-semestre-filtro/ciclo-cellulare/meiosi-it.svg)

In meiosi I i cinetocori dei fratelli si orientano verso lo stesso polo, mentre gli omologhi si collegano a poli opposti. La coesione dei bracci viene rimossa per consentire la separazione degli omologhi; quella centromerica è protetta, anche tramite shugoshin, fino alla seconda divisione. In meiosi II i fratelli possono quindi biorientarsi e separarsi. Questo diverso comportamento spiega perché la prima divisione è riduzionale e la seconda equazionale.

Per una specie con $2n=6$, dopo la prima divisione ogni cellula contiene tre cromosomi duplicati, non sei cromosomi semplici. Dopo la seconda ne contiene ancora tre, ora non duplicati. Ignorando il crossing over, l'assortimento di tre coppie produce fino a $2^3=8$ combinazioni di origine materna/paterna nei gameti, nell'insieme di molte meiosi. Una sola meiosi produce al massimo quattro prodotti: non si devono confondere il numero di combinazioni possibili con il numero di gameti formati in un singolo evento.
:::

## Gametogenesi e cellule staminali

:::definizione{#gametogenesi titolo="Spermatogenesi e ovogenesi umane"}
Nella **spermatogenesi** uno spermatocita primario può produrre quattro spermatidi aploidi, che maturano in spermatozoi. Nell'ovogenesi la distribuzione del citoplasma è asimmetrica: si forma una grande cellula uovo e globuli polari. Gli ovociti primari umani iniziano la meiosi prima della nascita e si arrestano in profase I; l'ovocita secondario si arresta in metafase II e normalmente completa la divisione dopo l'attivazione associata alla fecondazione.

Le pause e i tempi differiscono quindi tra gametogenesi maschile e femminile. Il numero di prodotti con capacità di contribuire allo sviluppo non coincide semplicemente con il numero teorico di nuclei generati da due divisioni.

Nell'uomo adulto spermatogoni proliferanti mantengono la linea germinale; gli spermatociti primari entrano in meiosi, gli spermatociti secondari hanno già separato gli omologhi e gli spermatidi hanno completato la seconda divisione. La spermiogenesi rimodella gli spermatidi, ma non è una terza divisione meiotica. La cellula ovulata nella donna è normalmente un ovocita secondario in metafase II, ancora con cromosomi duplicati: aploide non significa necessariamente $1C$.

La lunga permanenza degli ovociti in arresto e la necessità di conservare connessioni cromosomiche aiutano a comprendere la vulnerabilità della segregazione, senza ridurre tutte le aneuploidie a una sola causa. Nei problemi numerici si deve dichiarare se si stanno contando tutti i prodotti meiotici oppure soltanto i gameti funzionali; l'ovogenesi concentra quasi tutto il citoplasma in una sola cellula.
:::

:::definizione{#staminali titolo="Autorinnovamento e potenza differenziativa"}
Una **cellula staminale** possiede capacità di autorinnovamento e di generare progenie differenziata. L'autorinnovamento mantiene il compartimento staminale; il differenziamento produce cellule con funzioni specifiche. Divisioni simmetriche e asimmetriche possono contribuire a questo equilibrio anche in relazione alla nicchia.

La potenza differenziativa descrive l'insieme dei tipi cellulari producibili: cellule pluripotenti possono generare derivati dei tre foglietti embrionali, mentre cellule multipotenti hanno potenzialità più ristrette. Una cellula progenitrice può proliferare e differenziarsi senza mantenere la stessa capacità di autorinnovamento a lungo termine di una staminale.

Per identificare una staminale non basta osservare che si divide una volta. Occorre dimostrare nel tempo sia mantenimento di cellule con la stessa capacità sia produzione di progenie differenziata. Anche una popolazione può autorinnovarsi attraverso un equilibrio di divisioni simmetriche: una singola divisione non deve obbligatoriamente produrre una staminale e una cellula differenziata.

![Divisioni simmetriche e asimmetriche](/figure/biologia-semestre-filtro/ciclo-cellulare/staminali-it.svg)

La nicchia fornisce contatti, segnali e condizioni che influenzano il destino cellulare. Spostare una figlia fuori dalla nicchia può favorirne il differenziamento anche se le due figlie hanno ricevuto lo stesso DNA. Potenza e velocità proliferativa restano proprietà diverse: una staminale può essere quiescente; una progenitrice può dividersi rapidamente ma esaurire la propria capacità nel tempo.
:::

## Apoptosi e necrosi

:::definizione{#apoptosi-necrosi titolo="Aspetti morfologici e caspasi"}
Nell'**apoptosi** la cellula attiva un programma che può comprendere condensazione della cromatina, frammentazione e formazione di corpi apoptotici. La membrana conserva inizialmente la propria integrità e i frammenti possono essere fagocitati. La necrosi presenta tipicamente rigonfiamento, perdita d'integrità e rilascio di contenuto cellulare; può favorire infiammazione. Esistono anche forme regolate di morte con morfologia necrotica, quindi «regolata» non equivale automaticamente ad «apoptotica».

Le **caspasi** sono proteasi attivate da precursori. Le iniziatrici, come caspasi 8 e 9, attivano caspasi esecutrici, come 3 e 7, che tagliano substrati responsabili di molte modificazioni cellulari. La rimozione efficiente delle cellule apoptotiche limita il rilascio del contenuto; se fallisce può comparire necrosi secondaria.

L'esposizione esterna della fosfatidilserina può favorire il riconoscimento da parte dei fagociti. In un esperimento l'annessina V rileva questa esposizione, mentre un colorante che non attraversa una membrana integra aiuta a valutarne la permeabilità. Una cellula positiva per annessina V e negativa per il colorante è compatibile con una fase apoptotica precoce nel contesto appropriato. La doppia positività, da sola, non distingue con certezza apoptosi tardiva e morte con perdita primaria dell'integrità: servono tempi, controlli e altri indicatori.

Le caspasi esecutrici tagliano proteine del citoscheletro, della lamina e altri substrati. La frammentazione del DNA dipende anche dall'attivazione di nucleasi a valle della cascata: le caspasi sono proteasi, non nucleasi. Per attribuire un meccanismo di morte è quindi più solido combinare morfologia, marcatori e perturbazioni che affidarsi a una sola colorazione.
:::

## Vie apoptotiche

:::definizione{#vie-apoptotiche titolo="Via intrinseca ed estrinseca"}
Nella via **intrinseca** stress e danno possono attivare proteine della famiglia BCL2 che favoriscono la permeabilizzazione della membrana mitocondriale esterna, detta MOMP. BAX e BAK partecipano alla permeabilizzazione; BCL2 e BCL-XL possono contrastarla. Proteine BH3-only regolano l'equilibrio attraverso interazioni con membri pro- e anti-apoptotici.

Il citocromo c rilasciato nel citosol favorisce l'assemblaggio dell'**apoptosoma** con APAF1 e nucleotidi appropriati; questo complesso recluta e attiva la procaspasi 9. Seguono attivazione delle esecutrici e smantellamento cellulare.

Nella via **estrinseca**, ligandi di recettori di morte, come Fas, favoriscono assemblaggi con adattatori e procaspasi iniziatrici, tra cui la caspasi 8. In diversi contesti il taglio di BID collega la via estrinseca a quella mitocondriale. Le due vie convergono quindi sulle caspasi esecutrici; il collegamento tramite BID può amplificare la risposta al recettore di morte, con esiti modulati dagli inibitori e dallo stato della cellula.

La localizzazione del citocromo c è decisiva: nello spazio intermembrana partecipa alla catena respiratoria; nel citosol può contribuire alla via apoptotica. MOMP riguarda la membrana **esterna** del mitocondrio e non va confusa con la normale sintesi di ATP attraverso la membrana interna. APAF1 e procaspasi 9 devono essere disponibili affinché il rilascio del citocromo c conduca all'assemblaggio funzionale dell'apoptosoma.

![Due vie dell'apoptosi e punto di convergenza](/figure/biologia-semestre-filtro/ciclo-cellulare/apoptosi-it.svg)

Nel modello di Fas, l'adattatore FADD favorisce l'assemblaggio del complesso di segnalazione che attiva caspasi 8. Una cellula può richiedere anche l'amplificazione mitocondriale attraverso BID: perciò bloccare BAX/BAK non ha necessariamente lo stesso effetto in tutti i tipi cellulari stimolati da un recettore di morte. Negli esercizi si esplicita se il modello include questa dipendenza. Un inibitore delle caspasi può ridurre alcuni segni dell'apoptosi senza dimostrare che ogni cellula danneggiata abbia recuperato una sopravvivenza duratura.
:::
