"""Prima raccolta TOLC-S: basi comuni ai test, biologia, Terra e approfondimenti."""
from pathlib import Path
import runpy, json
base=runpy.run_path(str(Path(__file__).with_name('genera-tolc-i.py')))
THEORY=base['THEORY']; QUESTIONS=base['QUESTIONS']; chapter=base['chapter']
for slug,(title,summary,body) in list(THEORY.items()):
    THEORY[slug]=(title.replace('TOLC-I','TOLC-S'),summary,body.replace('TOLC-I','TOLC-S').replace('quattro sezioni principali','sei sezioni principali').replace('quattro sezioni precedenti','sei sezioni precedenti').replace('su cinquanta','su cinquantacinque'))

chapter('probabilita-e-dati','Probabilità e dati per il TOLC-S',
'Conteggi, eventi indipendenti, probabilità condizionata, mediana e lettura delle tabelle.',r'''
Il modello viene prima del calcolo. Elenca gli esiti possibili, chiarisci se sono equiprobabili e controlla se l'ordine o il reinserimento cambiano il problema. La probabilità è compresa fra zero e uno: un risultato esterno a questo intervallo indica un errore.

## Insiemi ed esiti

In un esperimento con un numero finito di esiti equiprobabili, la probabilità di un evento è il rapporto tra esiti favorevoli ed esiti possibili. Nel lancio di un dado regolare i sei risultati hanno la stessa probabilità; in un dado truccato questo modello non vale.

Per due lanci di una moneta regolare gli esiti ordinati sono TT, TC, CT, CC. Ottenere una sola testa comprende due esiti e ha probabilità $2/4$. «Almeno una testa» comprende tutti gli esiti tranne CC e ha probabilità $3/4$.

## Unione e complemento

Per il complemento vale $P(A^c)=1-P(A)$. Per due eventi $P(A\cup B)=P(A)+P(B)-P(A\cap B)$. Se sono disgiunti, la probabilità dell'intersezione è zero e le probabilità si sommano direttamente.

«Ottenere uno» e «ottenere due» in un unico lancio sono disgiunti. «Ottenere un numero pari» e «ottenere un numero maggiore di tre» non lo sono: quattro e sei appartengono a entrambi.

## Indipendenza e condizionamento

Se gli eventi sono indipendenti, $P(A\cap B)=P(A)P(B)$. Il risultato di un lancio non modifica le probabilità del successivo quando i lanci sono indipendenti. Disgiunto e indipendente sono concetti diversi.

La probabilità condizionata è $P(A\mid B)=P(A\cap B)/P(B)$, se $P(B)>0$. Sapere che il risultato di un dado è pari riduce lo spazio dei risultati a 2, 4 e 6. In questo nuovo spazio la probabilità di sei è un terzo.

## Estrazioni e diagrammi ad albero

Senza reinserimento la composizione dell'urna cambia dopo la prima estrazione. Con tre palline rosse e due blu, la probabilità di due rosse consecutive è $\frac35\frac24=\frac3{10}$. Con reinserimento sarebbe $\frac35\frac35=\frac9{25}$.

In un albero delle possibilità moltiplica le probabilità lungo un percorso e somma quelle di percorsi alternativi disgiunti. Controlla a ogni nodo che le probabilità dei rami possibili sommino a uno.

## Media, mediana e variabili

Una variabile qualitativa indica una categoria; una quantitativa una misura o un conteggio. La mediana è il valore centrale dei dati ordinati; con un numero pari di dati si fa la media dei due valori centrali. È meno sensibile di una media a un singolo valore estremo.

Per i dati 1, 2, 3, 4 e 100, la mediana è 3 e la media è 22. La media non descrive sempre un valore tipico: va interpretata nel contesto, soprattutto in presenza di dati molto asimmetrici.

## Tabelle e percentuali

Per leggere una tabella individua prima la popolazione di riferimento. Il 20% degli iscritti non coincide necessariamente con il 20% dei partecipanti effettivi. In una tabella a doppia entrata, il totale di riga o di colonna può cambiare il denominatore di una probabilità condizionata.

Trasforma un testo in dati, completa i totali e solo dopo calcola la proporzione. Senza calcolatrice usa frazioni semplici e stime per confrontare le cinque alternative.
''',r'''
Un dado regolare viene lanciato una volta. Qual è la probabilità di un numero pari?|$\frac12$|$\frac13$|$\frac16$|$\frac23$|$1$|Gli esiti pari sono 2, 4 e 6: tre esiti su sei equiprobabili. La probabilità è quindi $3/6=1/2$.
Due monete regolari indipendenti vengono lanciate. Qual è la probabilità di ottenere almeno una testa?|$\frac34$|$\frac14$|$\frac12$|$1$|$0$|L'unico esito senza teste è croce-croce, con probabilità un quarto. L'evento richiesto è il suo complemento e vale tre quarti.
Un'urna contiene 3 palline rosse e 2 blu. Estrai due palline senza reinserimento. Qual è la probabilità di due rosse?|$\frac3{10}$|$\frac9{25}$|$\frac35$|$\frac25$|$\frac12$|La prima rossa ha probabilità $3/5$. Dopo averla estratta restano due rosse su quattro palline: si moltiplica $3/5$ per $2/4$, ottenendo $3/10$.
Un'urna contiene 3 palline rosse e 2 blu. Estrai due palline reinserendo la prima. Qual è la probabilità di due rosse?|$\frac9{25}$|$\frac3{10}$|$\frac65$|$\frac15$|$\frac12$|Il reinserimento ripristina la composizione iniziale. Ogni estrazione ha probabilità $3/5$ di dare una rossa; le estrazioni indipendenti danno $(3/5)^2=9/25$.
Sapendo che il risultato di un dado regolare è pari, qual è la probabilità che sia 6?|$\frac13$|$\frac16$|$\frac12$|$\frac23$|$1$|La condizione restringe gli esiti ammissibili a 2, 4 e 6, ancora equiprobabili. Solo uno dei tre è favorevole, quindi la probabilità condizionata è un terzo.
Qual è la mediana dei dati $1,2,3,4,100$?|$3$|$22$|$4$|$2$|$100$|I dati sono già ordinati e sono cinque. La mediana è il terzo dato, cioè tre. Il valore ventidue corrisponde invece alla media aritmetica.
In una classe di 30 persone, 12 seguono un laboratorio. Quale percentuale della classe lo segue?|$40\%$|$12\%$|$30\%$|$25\%$|$60\%$|Il rapporto è $12/30=2/5=0{,}4$. Moltiplicando per cento si ottiene il quaranta per cento della classe.
Su un dado regolare, A è «esce 1» e B è «esce 2». Quanto vale $P(A\cup B)$?|$\frac13$|$\frac1{36}$|$\frac16$|$\frac23$|$1$|I due eventi sono disgiunti in un singolo lancio. Si sommano le probabilità: $1/6+1/6=2/6=1/3$.
Un evento ha probabilità $0{,}15$. Qual è la probabilità del suo complemento?|$0{,}85$|$0{,}15$|$1{,}15$|$0{,}75$|$0{,}015$|L'evento e il suo complemento esauriscono gli esiti e sono disgiunti. Le probabilità sommano a uno: $1-0{,}15=0{,}85$.
Quante sequenze ordinate di tre lettere diverse puoi formare scegliendo tra A, B, C e D senza ripetizioni?|$24$|$4$|$12$|$64$|$6$|Per la prima posizione ci sono quattro scelte, poi tre, infine due. Il prodotto $4\cdot3\cdot2=24$ tiene conto dell'ordine e dell'assenza di ripetizioni.
''')

chapter('biologia','Biologia per il TOLC-S',
'Biomolecole, cellula, genetica, divisione cellulare, organismi, evoluzione ed ecologia.',r'''
La prima raccolta di biologia collega strutture e funzioni, dal livello molecolare agli ecosistemi. Nei quesiti chiediti sempre quale scala è coinvolta: una molecola, una cellula, un organismo o una popolazione.

## Molecole della vita

L'acqua è polare e forma legami a idrogeno: questa caratteristica contribuisce alle sue proprietà e alla capacità di sciogliere molte sostanze ioniche o polari. I carboidrati svolgono ruoli energetici e strutturali: amido e glicogeno sono riserve, la cellulosa è un costituente delle pareti vegetali.

Le proteine sono catene di amminoacidi legati da legami peptidici. La sequenza è la struttura primaria; il ripiegamento determina molte funzioni. I fosfolipidi hanno una regione idrofila e una idrofoba e si organizzano nel doppio strato delle membrane. DNA e RNA sono polimeri di nucleotidi.

## Cellula e organelli

Le cellule procariotiche non possiedono un nucleo delimitato da membrana. Le eucariotiche hanno un nucleo e compartimenti specializzati. I ribosomi sintetizzano proteine; i mitocondri partecipano alla respirazione cellulare; reticolo endoplasmatico e apparato di Golgi collaborano alla produzione e distribuzione di molte molecole.

Le cellule vegetali possiedono parete cellulare e, nei tessuti fotosintetici, cloroplasti. La membrana plasmatica controlla gli scambi con l'ambiente. L'osmosi è il movimento netto dell'acqua attraverso una membrana selettivamente permeabile, legato alle differenze di concentrazione e pressione.

## DNA, geni ed espressione

Il DNA contiene adenina, timina, citosina e guanina; nell'RNA l'uracile sostituisce la timina. La replicazione copia il DNA, la trascrizione produce RNA da uno stampo di DNA, la traduzione usa l'informazione dell'RNA messaggero per costruire una catena polipeptidica.

Un codone è una tripletta di nucleotidi nell'RNA messaggero. Più codoni possono specificare lo stesso amminoacido. Un allele è una variante di un gene: nell'incrocio tra due eterozigoti Aa, con segregazione mendeliana, i genotipi attesi sono AA, Aa e aa nei rapporti 1:2:1.

## Mitosi, meiosi e ciclo cellulare

La mitosi ripartisce i cromosomi duplicati in due nuclei figli, mantenendo normalmente il numero di cromosomi della cellula madre. La duplicazione del DNA avviene prima, nella fase S dell'interfase. La citodieresi divide il citoplasma.

La meiosi comprende due divisioni dopo una sola duplicazione del DNA e riduce la ploidia. Crossing-over e assortimento dei cromosomi contribuiscono alla variabilità. La fecondazione unisce due gameti aploidi e ripristina la condizione diploide.

## Tessuti e apparati

I quattro tipi fondamentali di tessuto animale sono epiteliale, connettivo, muscolare e nervoso. Le superfici di scambio hanno caratteristiche adatte alla funzione: gli alveoli polmonari offrono una grande superficie e una barriera sottile per lo scambio dei gas con il sangue.

L'apparato digerente rende disponibili nutrienti; il circolatorio trasporta sostanze; i reni contribuiscono all'escrezione e alla regolazione dell'ambiente interno. Il sistema nervoso coordina risposte mediante segnali elettrici e chimici. Distingui una funzione di trasporto da una di scambio o controllo.

## Piante e fotosintesi

Le radici assorbono acqua e sali; lo xilema contribuisce al loro trasporto verso le parti aeree. Gli stomi regolano gli scambi gassosi e la perdita d'acqua per traspirazione. Il floema distribuisce composti organici tra organi sorgente e organi destinatari.

La fotosintesi trasforma energia luminosa in energia chimica e, nelle piante, usa anidride carbonica e acqua per produrre sostanze organiche. L'ossigeno liberato deriva dall'acqua. Anche le piante svolgono respirazione cellulare: fotosintesi e respirazione sono processi distinti.

## Classificazione ed evoluzione

Bacteria, Archaea ed Eukarya sono i tre domini della classificazione corrente. I virus non sono cellule e dipendono da cellule ospiti per la riproduzione. La nomenclatura binomia indica genere e specie, per esempio Homo sapiens.

La selezione naturale agisce su variazioni ereditarie già presenti: in un dato ambiente alcune caratteristiche possono aumentare il successo riproduttivo. Non è una scelta volontaria dell'organismo. Una mutazione può essere vantaggiosa, svantaggiosa o neutra a seconda del contesto.

## Ecologia

Una popolazione comprende individui della stessa specie in una certa area; una comunità riunisce popolazioni di specie diverse. Un ecosistema comprende anche le componenti non viventi e le loro interazioni. I produttori autotrofi rendono disponibile materia organica agli altri livelli trofici.

La materia viene riciclata nei cicli biogeochimici, mentre l'energia attraversa i livelli trofici e si disperde in parte come calore. Nel mutualismo entrambi i partner traggono beneficio; nel parassitismo il parassita beneficia a spese dell'ospite. Competizione e predazione sono interazioni diverse.
''',r'''
Quale struttura svolge direttamente la sintesi delle proteine?|Ribosoma|Lisosoma|Centriolo|Parete cellulare|Vacuolo|Il ribosoma legge l'RNA messaggero e permette l'assemblaggio degli amminoacidi nella catena polipeptidica. Le altre strutture hanno funzioni differenti.
Quale caratteristica distingue una cellula eucariotica da una procariotica?|Un nucleo delimitato da membrana|La presenza di DNA|La presenza di ribosomi|Una membrana plasmatica|La capacità di usare energia|Entrambi i tipi cellulari hanno DNA, ribosomi e membrana. Il nucleo delimitato da un involucro è invece caratteristico dell'organizzazione eucariotica.
Da quali monomeri sono costituite le proteine?|Amminoacidi|Nucleotidi|Monosaccaridi|Acidi grassi soltanto|Basi azotate soltanto|Le proteine sono polimeri di amminoacidi uniti da legami peptidici. I nucleotidi sono invece le unità costitutive degli acidi nucleici.
Quale base è presente nell'RNA al posto della timina?|Uracile|Adenina|Citosina|Guanina|Desossiribosio|L'RNA usa uracile, adenina, citosina e guanina. Il desossiribosio è uno zucchero del DNA, non una base azotata.
La trascrizione consiste nella sintesi di:|RNA usando DNA come stampo|DNA usando proteine come stampo|Proteine usando DNA direttamente|Lipidi usando RNA come stampo|Amminoacidi dal glucosio|La trascrizione produce una molecola di RNA complementare al filamento stampo di DNA. La sintesi proteica a partire dall'RNA messaggero è invece traduzione.
In un incrocio mendeliano Aa × Aa, qual è la probabilità del genotipo aa?|$\frac14$|$\frac12$|$\frac34$|$1$|$0$|Ciascun genitore trasmette l'allele a con probabilità un mezzo. Il prodotto delle due probabilità è un quarto, corrispondente alla combinazione aa.
In quale fase del ciclo cellulare avviene normalmente la duplicazione del DNA?|Fase S dell'interfase|Anafase mitotica|Citodieresi|Metafase mitotica|Telofase soltanto|Il DNA si duplica nella fase S, prima dell'inizio della divisione. La mitosi distribuisce alle cellule figlie materiale genetico già duplicato.
Quale processo riduce la ploidia per formare cellule aploidi da una cellula diploide?|Meiosi|Mitosi|Replicazione del DNA|Trascrizione|Traduzione|La meiosi comprende due divisioni successive dopo una duplicazione del DNA. La separazione dei cromosomi omologhi riduce la ploidia.
Il crossing-over meiotico favorisce:|Ricombinazione tra cromosomi omologhi|Duplicazione dell'intero organismo|Produzione diretta di ATP|Traduzione dell'RNA|Eliminazione di tutti gli alleli recessivi|Lo scambio di segmenti tra cromatidi non fratelli dei cromosomi omologhi genera nuove combinazioni di alleli e contribuisce alla variabilità genetica.
Dove avvengono principalmente gli scambi di ossigeno e anidride carbonica nei polmoni?|Alveoli|Trachea|Bronchi principali|Pleura|Diaframma|Gli alveoli offrono una vasta superficie a contatto con i capillari e una barriera sottile. Trachea e bronchi conducono l'aria ma non sono la sede principale degli scambi.
Quale tessuto è specializzato nella contrazione?|Muscolare|Epiteliale|Nervoso soltanto|Osseo soltanto|Cartilagineo|Il tessuto muscolare contiene strutture contrattili che generano forza e movimento. Gli altri tessuti hanno funzioni di rivestimento, sostegno o comunicazione.
Nelle piante, quale tessuto trasporta principalmente acqua e sali minerali dalle radici alle parti aeree?|Xilema|Floema|Epidermide soltanto|Meristema apicale soltanto|Tessuto nervoso|Lo xilema conduce acqua e sali minerali. Il floema distribuisce soprattutto sostanze organiche prodotte o mobilizzate in altre parti della pianta.
Quale organello è sede della fotosintesi nelle cellule vegetali fotosintetiche?|Cloroplasto|Mitocondrio|Lisosoma|Ribosoma|Nucleo|I cloroplasti contengono i sistemi che assorbono la luce e partecipano alla fotosintesi. I mitocondri sono coinvolti nella respirazione cellulare.
L'ossigeno liberato durante la fotosintesi ossigenica deriva principalmente da:|Acqua|Anidride carbonica|Glucosio già presente|Azoto atmosferico|Sali minerali|Nelle reazioni luminose l'acqua viene ossidata e si libera ossigeno molecolare. Il carbonio dell'anidride carbonica viene invece incorporato nelle sostanze organiche.
Una popolazione biologica è costituita da:|Individui della stessa specie che vivono in una certa area|Tutte le specie di un continente|Soli fattori non viventi|Organismi di qualsiasi specie senza riferimento all'area|Tutte le molecole di una cellula|Il termine popolazione unisce l'appartenenza alla stessa specie a un riferimento spaziale e temporale. Le popolazioni di specie diverse formano una comunità.
In una catena alimentare, i produttori sono generalmente:|Organismi autotrofi|Solo carnivori|Solo decompositori|Sempre parassiti|Esclusivamente animali|I produttori sintetizzano materia organica a partire da fonti inorganiche usando energia luminosa o chimica. Questa materia sostiene i livelli trofici successivi.
Il mutualismo è un'interazione in cui:|Entrambi i partner traggono beneficio|Un partner beneficia e l'altro è danneggiato|Entrambi sono sempre danneggiati|Nessuno dei partner è coinvolto|Un organismo mangia necessariamente l'altro|Nel mutualismo entrambi ricevono un beneficio. Il vantaggio di un organismo a spese dell'altro caratterizza invece il parassitismo o altre interazioni antagoniste.
Quale affermazione sulla selezione naturale è corretta?|Può favorire varianti ereditarie che aumentano il successo riproduttivo in un ambiente|Produce sempre organismi perfetti|È una scelta volontaria dell'individuo|Elimina sempre ogni variabilità|Agisce solo su caratteri acquisiti durante la vita|La selezione naturale modifica le frequenze delle varianti ereditarie attraverso differenze di sopravvivenza e riproduzione. Il vantaggio dipende dall'ambiente e non implica perfezione.
Quali sono i tre domini della classificazione dei viventi?|Bacteria, Archaea, Eukarya|Animali, piante, funghi|Procarioti, virus, animali|Batteri, piante, minerali|DNA, RNA, proteine|La classificazione in tre domini distingue Bacteria, Archaea ed Eukarya. Animali, piante e funghi sono gruppi interni al dominio Eukarya.
Qual è la funzione strutturale principale dei fosfolipidi nelle cellule?|Formare il doppio strato delle membrane|Conservare direttamente il codice genetico|Costituire tutti i cromosomi|Sostituire i ribosomi|Duplicare il DNA|La struttura anfipatica dei fosfolipidi favorisce la formazione di doppi strati in acqua. Questa organizzazione è alla base delle membrane cellulari.
''')

chapter('scienze-della-terra','Scienze della Terra per il TOLC-S',
'Terra nello spazio, rocce, placche, acqua e atmosfera, tempo geologico, risorse e rischi.',r'''
Le scienze della Terra collegano fenomeni che si svolgono su scale molto diverse: un terremoto dura pochi secondi, la costruzione di una catena montuosa richiede milioni di anni. Per ogni fenomeno individua la sorgente di energia, i materiali coinvolti e la scala temporale.

## Terra nello spazio

La rotazione terrestre intorno al proprio asse determina l'alternanza tra dì e notte. La rivoluzione intorno al Sole, insieme all'inclinazione dell'asse terrestre rispetto al piano orbitale, determina il ciclo delle stagioni. Le stagioni non dipendono principalmente dalla distanza Terra-Sole.

Un anno luce è una distanza: quella percorsa dalla luce nel vuoto in un anno. Il Sistema Solare comprende il Sole e i corpi legati gravitazionalmente a esso. Le stelle producono energia al proprio interno; i pianeti brillano soprattutto per luce riflessa.

## Struttura e sfere terrestri

La suddivisione composizionale distingue crosta, mantello e nucleo. La litosfera comprende la crosta e la parte più esterna e rigida del mantello. Il nucleo esterno è liquido, quello interno è solido alle condizioni presenti al centro del pianeta.

Atmosfera, idrosfera, biosfera e parte solida della Terra interagiscono. Il ciclo dell'acqua comprende evaporazione, condensazione, precipitazione, infiltrazione e deflusso. Le falde immagazzinano acqua negli spazi interconnessi delle rocce e dei sedimenti.

## Placche e margini

Le placche litosferiche si muovono rispetto le une alle altre. Ai margini divergenti si forma nuova crosta oceanica; ai margini convergenti possono avvenire subduzione e collisione; ai margini trasformi il movimento relativo è principalmente laterale.

Terremoti e vulcani sono frequenti lungo molti margini di placca, ma non hanno distribuzioni identiche. La distribuzione dei sismi, le anomalie magnetiche oceaniche e l'età dei fondali sono evidenze importanti per comprendere la dinamica delle placche.

## Minerali e ciclo delle rocce

Un minerale ha struttura interna ordinata e composizione entro limiti definiti. Una roccia è un aggregato naturale di minerali o altri materiali. Le rocce magmatiche derivano dal raffreddamento di un fuso; quelle sedimentarie da deposizione e successiva trasformazione di sedimenti o da precipitazione; quelle metamorfiche da trasformazioni allo stato solido.

Una stessa roccia può attraversare percorsi diversi nel ciclo litogenetico. Se fonde e poi cristallizza, il prodotto è magmatico; pressione e temperatura senza fusione completa possono invece indurre metamorfismo.

## Superficie, atmosfera e acqua

La degradazione altera o frammenta le rocce; l'erosione rimuove materiale; il trasporto lo sposta e la sedimentazione lo deposita. Acqua, vento, ghiaccio e gravità sono agenti fondamentali. Il ciclo superficiale riceve energia principalmente dal Sole e dalla gravità.

La troposfera ospita la maggior parte dei fenomeni meteorologici. Tempo meteorologico e clima si riferiscono a scale diverse: il clima descrive statisticamente condizioni e variabilità su periodi lunghi. L'effetto serra naturale contribuisce alla temperatura del pianeta; modificarne l'intensità cambia il bilancio energetico.

## Calore interno, terremoti e vulcani

Il calore interno deriva da più sorgenti, fra cui calore residuo della formazione e decadimenti radioattivi. Il mantello può fluire su tempi geologici pur essendo prevalentemente solido. Il trasporto del calore avviene tramite diversi processi, inclusi conduzione e convezione.

L'ipocentro è il punto d'origine del terremoto in profondità; l'epicentro è la sua proiezione in superficie. La magnitudo descrive una misura collegata all'energia o al momento sismico, mentre l'intensità riguarda gli effetti in un luogo. Non sono sinonimi.

## Tempo geologico e datazioni

In una successione sedimentaria non rovesciata, gli strati inferiori sono generalmente più antichi di quelli superiori. Una struttura che taglia altre rocce è più recente delle rocce che attraversa. Sono relazioni di datazione relativa, che non forniscono da sole un'età in anni.

Le datazioni radiometriche usano il decadimento di isotopi e richiedono ipotesi sul sistema misurato. Dopo un tempo di dimezzamento resta metà dell'isotopo iniziale, dopo due tempi un quarto. L'attualismo usa processi osservabili oggi per interpretare il passato, senza affermare che ogni velocità sia rimasta costante.

## Risorse e rischi

Una risorsa può diventare riserva quando le condizioni tecniche ed economiche ne consentono lo sfruttamento secondo i criteri adottati. Rinnovabile non significa illimitata: anche un acquifero può essere sfruttato più velocemente della ricarica.

La pericolosità riguarda la possibilità di un evento potenzialmente dannoso; il rischio dipende anche dall'esposizione e dalla vulnerabilità. A parità di pericolosità, edifici più vulnerabili o una maggiore esposizione possono aumentare il rischio. Prevenzione e pianificazione agiscono su queste componenti.
''',r'''
Qual è la causa principale dell'alternanza fra dì e notte?|Rotazione terrestre|Rivoluzione terrestre soltanto|Precessione degli equinozi soltanto|Variazione annuale della distanza dal Sole|Moto della Luna soltanto|La Terra ruota intorno al proprio asse: un luogo passa dalla parte illuminata a quella in ombra. La rivoluzione annuale ha un ruolo differente.
Le stagioni dipendono principalmente da:|Inclinazione dell'asse terrestre e rivoluzione intorno al Sole|Solo variazioni della distanza Terra-Sole|Rotazione della Luna intorno alla Terra|Variazioni giornaliere della massa solare|Movimento delle placche|L'inclinazione dell'asse e la rivoluzione modificano durata del dì e inclinazione dei raggi nei diversi emisferi. La variazione della distanza non spiega le stagioni opposte tra emisferi.
Un anno luce è un'unità di:|Distanza|Tempo|Massa|Temperatura|Velocità angolare|Indica la distanza percorsa dalla luce nel vuoto in un anno. Il nome contiene un riferimento al tempo, ma la grandezza misurata è una lunghezza.
La litosfera comprende:|Crosta e parte più esterna rigida del mantello|Solo il nucleo esterno|Solo acqua oceanica|Tutto il mantello e tutto il nucleo|La sola atmosfera|La litosfera è definita dal comportamento meccanico rigido e comprende crosta e mantello superiore più esterno. Non coincide quindi con la sola crosta.
Ai margini divergenti delle placche oceaniche avviene tipicamente:|Formazione di nuova crosta oceanica|Scomparsa di ogni terremoto|Collisione continentale in tutti i casi|Arresto permanente delle placche|Distruzione del nucleo|L'allontanamento delle placche alle dorsali favorisce la risalita e il raffreddamento di materiale magmatico, con produzione di nuova crosta oceanica.
La subduzione consiste in:|Discesa di una placca sotto un'altra|Evaporazione dell'acqua marina|Formazione di ghiaccio atmosferico|Rotazione terrestre giornaliera|Dissoluzione di tutte le rocce|In un margine convergente una placca può piegarsi e sprofondare sotto l'altra nel mantello. Il processo è legato a intensa attività geologica.
Una roccia derivata dalla solidificazione di un magma è:|Magmatica|Sedimentaria in ogni caso|Metamorfica in ogni caso|Sempre organica|Sempre carbonatica|Le rocce magmatiche si formano dal raffreddamento e dalla cristallizzazione di un fuso. Le altre classi sono definite da processi di origine differenti.
Il metamorfismo avviene tipicamente:|Con trasformazioni allo stato solido per variazioni di pressione e temperatura|Solo dopo fusione completa|Solo per evaporazione dell'acqua|Solo negli organismi viventi|Esclusivamente nello spazio|Le trasformazioni metamorfiche avvengono senza fusione completa della roccia. Se il materiale fonde e poi solidifica, il prodotto rientra nel percorso magmatico.
Quale sequenza descrive una parte del ciclo dell'acqua?|Evaporazione, condensazione, precipitazione|Fusione nucleare, subduzione, mitosi|Ossidazione, traduzione, trascrizione|Cristallizzazione, fotosintesi, meiosi|Combustione, clonazione, sedimentazione|L'acqua evapora, il vapore può condensare e ritornare alla superficie con le precipitazioni. Il ciclo include anche infiltrazione, deflusso e altri processi.
In quale strato atmosferico avviene la maggior parte dei fenomeni meteorologici?|Troposfera|Esosfera|Termosfera|Nucleo esterno|Mantello inferiore|La troposfera è lo strato più basso dell'atmosfera e contiene gran parte del vapore acqueo. È la sede principale di nubi e fenomeni meteorologici.
L'epicentro di un terremoto è:|La proiezione in superficie dell'ipocentro|Il punto più profondo del nucleo|Sempre il luogo con danni massimi|La distanza tra due vulcani|L'intera faglia|L'epicentro è definito geometricamente rispetto all'ipocentro. I danni dipendono anche dalle condizioni locali e non devono necessariamente essere massimi esattamente lì.
In una successione sedimentaria non rovesciata, gli strati inferiori sono generalmente:|Più antichi degli strati superiori|Sempre più recenti|Della stessa età in ogni caso|Privi di minerali|Sempre magmatici|Il principio di sovrapposizione indica che gli strati deposti prima sono sotto quelli successivi, se la successione non è stata rovesciata o alterata in modo incompatibile con l'ipotesi.
Dopo due tempi di dimezzamento, quale frazione di un isotopo radioattivo iniziale resta non decaduta?|$\frac14$|$\frac12$|$\frac18$|$\frac34$|$0$|Ogni tempo di dimezzamento riduce alla metà la quantità residua. Dopo due intervalli resta $(1/2)^2=1/4$ della quantità iniziale.
A parità di pericolosità sismica, quale cambiamento può ridurre il rischio?|Ridurre la vulnerabilità degli edifici|Aumentare la fragilità degli edifici|Aumentare sempre l'esposizione|Ignorare la pianificazione|Confondere magnitudo e intensità|Il rischio dipende anche da vulnerabilità ed esposizione. Migliorare la resistenza degli edifici può ridurre le conseguenze attese pur senza modificare la pericolosità naturale.
Quale affermazione distingue correttamente una riserva da una risorsa geologica?|La riserva è la parte sfruttabile secondo condizioni tecniche ed economiche definite|Una riserva è sempre infinita|Le risorse sono tutte rinnovabili|La riserva non dipende mai dalla tecnologia|Le risorse esistono solo negli oceani|Il concetto di riserva include criteri di sfruttabilità. Tecnologia, prezzi e conoscenze possono cambiare quanta parte di una risorsa è classificabile come riserva.
''')

# Approfondimenti richiesti dal programma scientifico, oltre alle basi comuni.
def extra(slug,rows):
    old=QUESTIONS[slug].copy()
    t,s,b=THEORY[slug]
    chapter(slug,t,s,b,rows)
    QUESTIONS[slug]=old+QUESTIONS[slug]
extra('chimica',r'''
Quale fenomeno è una trasformazione fisica dell'acqua?|Fusione del ghiaccio|Elettrolisi dell'acqua|Reazione con sodio metallico|Decomposizione in idrogeno e ossigeno|Formazione di acqua da idrogeno e ossigeno|Nella fusione cambia lo stato di aggregazione ma la sostanza resta acqua. Le altre alternative descrivono trasformazioni che cambiano la composizione chimica.
Quale procedura separa sabbia insolubile da acqua?|Filtrazione|Neutralizzazione|Combustione|Elettrolisi|Traduzione|La sabbia insolubile può essere trattenuta da un filtro mentre l'acqua lo attraversa. La procedura sfrutta una differenza fisica e non richiede una reazione chimica.
Una specie che acquista elettroni durante una reazione è:|L'ossidante, che si riduce|Il riducente, che si ossida|Sempre un gas nobile|Sempre un metallo puro|Una specie che non cambia numero di ossidazione|L'ossidante sottrae elettroni all'altra specie e li acquista: per questo si riduce. Il suo numero di ossidazione diminuisce.
Un catalizzatore accelera una reazione principalmente perché:|Fornisce un percorso con minore energia di attivazione|Aumenta necessariamente la costante di equilibrio|Rende sempre esotermica la reazione|Viene consumato completamente come reagente|Crea materia dal nulla|Un catalizzatore facilita un percorso cinetico alternativo. Non modifica la differenza di energia libera tra reagenti e prodotti e non cambia la costante di equilibrio a temperatura fissata.
All'equilibrio chimico dinamico:|Le velocità delle reazioni diretta e inversa sono uguali|Tutte le molecole smettono di reagire|Le concentrazioni di tutte le specie sono uguali|I reagenti sono sempre esauriti|La temperatura è necessariamente zero|All'equilibrio le trasformazioni continuano in entrambi i versi con uguale velocità. Le concentrazioni macroscopiche restano costanti, ma non devono essere uguali tra specie diverse.
Una reazione esotermica a pressione costante ha:|Variazione di entalpia negativa|Variazione di entalpia sempre positiva|Velocità necessariamente infinita|Assenza di scambio termico in ogni caso|Prodotti identici ai reagenti|Una reazione esotermica rilascia calore all'ambiente nelle condizioni indicate. La variazione di entalpia del sistema è negativa e non determina da sola la velocità.
Una soluzione tampone tende a:|Limitare la variazione di pH per piccole aggiunte di acido o base|Mantenere sempre pH esattamente 7|Impedire qualunque reazione|Eliminare ogni soluto|Avere concentrazione nulla|Un tampone contiene componenti capaci di reagire con piccole quantità aggiunte di acido o base. La sua capacità è limitata e il pH non deve essere neutro.
Quale composto contiene il gruppo funzionale tipico degli alcoli?|Etanolo|Etano|Etene|Etino|Metano|L'etanolo contiene il gruppo ossidrile legato a un carbonio saturo. Le altre alternative sono idrocarburi privi di ossigeno.
Quale proprietà dipende principalmente dal numero di particelle di soluto in una soluzione ideale diluita?|Abbassamento crioscopico|Colore del soluto|Nome dell'elemento|Numero di protoni del solvente|Forma del recipiente|L'abbassamento del punto di congelamento è una proprietà colligativa. Nel modello ideale diluito dipende dal numero di particelle disciolte rispetto alla quantità di solvente.
In una soluzione acquosa, un elettrolita conduce corrente perché:|Produce ioni mobili|Contiene solo molecole sempre neutre|Blocca ogni moto delle cariche|Trasforma protoni in neutroni|Non contiene alcuna particella|Gli ioni in soluzione possono muoversi sotto l'azione di un campo elettrico e trasportare carica. La conduzione non richiede la trasformazione del nucleo atomico.
''')
extra('fisica',r'''
Un'onda ha frequenza 5 Hz e lunghezza d'onda 2 m. Qual è la velocità di propagazione?|$10\,\mathrm{m/s}$|$2{,}5\,\mathrm{m/s}$|$0{,}4\,\mathrm{m/s}$|$7\,\mathrm{m/s}$|$5\,\mathrm{m/s}$|Per un'onda periodica vale $v=\lambda f$. Moltiplicando due metri per cinque oscillazioni al secondo si ottengono dieci metri al secondo.
Un moto periodico ha frequenza 4 Hz. Quanto vale il periodo?|$0{,}25\,\mathrm s$|$4\,\mathrm s$|$2\,\mathrm s$|$0{,}5\,\mathrm s$|$16\,\mathrm s$|Periodo e frequenza sono reciproci: $T=1/f=1/4$ di secondo. Quattro oscillazioni vengono completate in un secondo.
Se la frequenza di un fotone raddoppia, la sua energia:|Raddoppia|Si dimezza|Resta costante|Quadruplica sempre|Diventa nulla|La relazione è $E=hf$, dove la costante di Planck è fissa. L'energia è direttamente proporzionale alla frequenza.
Una carica si muove parallelamente a un campo magnetico uniforme. La forza magnetica sulla carica è:|Nulla|Massima in ogni caso|Sempre parallela alla velocità|Uguale al peso|Indipendente dall'angolo ma non nulla|La forza magnetica ha modulo $\lvert q\rvert vB\sin\theta$. Se velocità e campo sono paralleli, l'angolo è zero o pi greco e il seno è nullo.
Una sostanza radioattiva ha tempo di dimezzamento 2 ore. Dopo 6 ore quale frazione iniziale resta?|$\frac18$|$\frac12$|$\frac14$|$\frac16$|$\frac13$|Sei ore corrispondono a tre tempi di dimezzamento. La frazione residua è $(1/2)^3=1/8$, assumendo un unico decadimento con quella legge.
''')

def append_theory(slug, text):
    t,s,b=THEORY[slug];THEORY[slug]=(t,s,b+'\n\n'+text.strip())
append_theory('chimica',r'''
## Materia, legami e proprietà periodiche

Una miscela omogenea presenta un'unica fase; una eterogenea ne presenta più di una. Filtrazione e distillazione separano componenti sfruttando proprietà fisiche. La massa si conserva nelle reazioni chimiche in un sistema chiuso.

Nel modello di Lewis gli elettroni di valenza sono rappresentati con punti e coppie. La geometria molecolare dipende dalla disposizione delle regioni elettroniche intorno agli atomi; molecole con legami polari possono risultare apolari per simmetria. I legami a idrogeno sono interazioni importanti tra molecole d'acqua. Nella tavola periodica, configurazione elettronica e posizione sono collegate; l'energia di ionizzazione tende a crescere lungo un periodo, con eccezioni.

## Reazioni, equilibrio e velocità

In una reazione con più reagenti quello limitante determina la quantità massima di prodotto. La resa percentuale confronta il prodotto ottenuto con quello teorico. L'entalpia diminuisce nelle reazioni esotermiche a pressione costante; spontaneità e velocità sono proprietà distinte.

All'equilibrio le velocità diretta e inversa sono uguali. Un catalizzatore riduce la barriera cinetica tramite un percorso alternativo e non modifica la costante di equilibrio alla stessa temperatura. Le soluzioni tampone limitano le variazioni di pH entro una capacità finita. Gli elettroliti formano ioni mobili in soluzione; proprietà come pressione osmotica e abbassamento crioscopico dipendono dal numero di particelle nel modello ideale diluito.

## Chimica organica e contesto ambientale

Alcoli, aldeidi, chetoni e acidi carbossilici si riconoscono dai gruppi funzionali. Gli isomeri hanno la stessa formula molecolare ma diversa struttura o disposizione spaziale. Combustioni, trasformazioni dell'azoto e gas serra sono esempi di collegamenti tra chimica e ambiente.

Per interpretare un'etichetta distingui composizione, concentrazione e indicazioni di pericolo. I pittogrammi e le istruzioni d'uso descrivono caratteristiche diverse. Una concentrazione percentuale deve essere letta insieme alla base di riferimento, per esempio massa su massa o volume su volume.
''')
append_theory('fisica',r'''
## Onde, oscillazioni e fisica moderna

Per un moto periodico $T=1/f$ e $\omega=2\pi f$. In un'onda $v=\lambda f$: la lunghezza d'onda è una periodicità spaziale, il periodo una periodicità temporale. Una perturbazione può trasportare energia senza trasportare complessivamente la materia del mezzo lungo tutto il percorso.

Un fotone ha energia $E=hf=hc/\lambda$. Nel modello a livelli un atomo assorbe o emette energia nelle transizioni tra stati consentiti. Nel decadimento radioattivo esponenziale la frazione di nuclei iniziali rimasta dopo $n$ tempi di dimezzamento è $(1/2)^n$. Una particella alfa contiene due protoni e due neutroni; un decadimento beta modifica la composizione del nucleo secondo il tipo di processo.

## Fluidi in moto e misure

La portata volumetrica è il volume che attraversa una sezione nell'unità di tempo. Per un fluido incomprimibile in regime stazionario, senza ramificazioni, $A_1v_1=A_2v_2$: in una sezione più stretta la velocità media è maggiore.

Le incertezze casuali producono dispersione nelle misure ripetute; un errore sistematico può spostarle nello stesso verso. Scrivi cifre significative coerenti con l'incertezza e controlla sempre dimensioni e ordini di grandezza prima di confrontare le risposte.
''')
append_theory('aritmetica-e-algebra',r'''
## Divisibilità e stime

Il massimo comune divisore è il più grande divisore positivo comune; il minimo comune multiplo è il più piccolo multiplo positivo comune. Per 12 e 18 si ottengono MCD 6 e mcm 36. La divisione con resto scrive un intero come $a=bq+r$, con $0\leq r<b$ se $b>0$.

Per stimare un risultato arrotonda in modo controllato e verifica se l'errore può cambiare la scelta. Un numero razionale ammette una rappresentazione come rapporto di due interi con denominatore non nullo. Sul test allena calcoli senza calcolatrice, scegliendo frazioni e fattorizzazioni semplici.
''')

if __name__=='__main__':
    base['scrivi_materiali']('tolc-s',THEORY,QUESTIONS)
    print(json.dumps({'capitoli':len(THEORY),'quiz':sum(map(len,QUESTIONS.values())),'schede':sum(6 if len(q)==30 else 4 for q in QUESTIONS.values())}))
