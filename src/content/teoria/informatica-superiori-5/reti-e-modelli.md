---
titolo: "Reti di computer, Ethernet e modelli a livelli"
sommario: "Topologie, modelli a livelli, commutazione Ethernet, inoltro IP e tempi di trasferimento."
---

## Reti locali e collegamenti geografici

:::definizione{#lan-wan titolo="LAN e WAN"}
Una **LAN** è una rete locale che collega dispositivi in un'area circoscritta, per esempio le aule di un edificio. Una **WAN** collega reti o dispositivi su aree geografiche più estese, spesso attraverso l'infrastruttura di un operatore. La classificazione riguarda l'estensione e il ruolo della rete. Un laboratorio può avere una LAN con collegamenti Ethernet e accesso Wi-Fi. La rete con cui l'istituto collega sedi in città diverse svolge invece il ruolo di WAN.
:::

:::esempio{titolo="Lo stesso istituto su due sedi"}
Nella sede nord un PC invia un documento a una stampante collegata alla stessa LAN. Lo scambio resta nella sede, quindi può continuare se la linea che collega la sede all'esterno si interrompe. Quando quel PC accede al server della sede sud, il traffico attraversa anche la rete geografica. Una stessa comunicazione può dunque utilizzare più reti, ognuna per una parte del percorso.

Il progetto di rete distingue i requisiti locali da quelli geografici. Per la stampa contano la raggiungibilità del dispositivo e la capacità dei collegamenti della LAN. Per copiare un archivio nella sede sud contano anche il tasso disponibile e la latenza del collegamento tra le sedi.
:::

:::osservazione
Il **mezzo trasmissivo** può essere un cavo in rame, una fibra ottica o un canale radio. La scelta del mezzo riguarda il collegamento. Una fibra che unisce due armadi nello stesso edificio può far parte di una LAN. Una WAN può invece includere diversi tipi di collegamento lungo lo stesso percorso. Una LAN può funzionare senza accesso a Internet quando i servizi necessari si trovano al suo interno.
:::

## Topologie e conseguenze dei guasti

:::definizione{#topologia titolo="Topologia fisica e topologia a stella"}
La **topologia fisica** descrive quali dispositivi sono collegati e attraverso quali collegamenti. In una **stella** ogni terminale ha un proprio collegamento con un nodo centrale. In una LAN Ethernet moderna il centro è spesso uno switch. Per stabilire l'effetto di un guasto, si segue il percorso tra i dispositivi che devono comunicare e si controlla se include il componente guasto.
:::

:::esempio{titolo="Cavo dedicato e nodo centrale"}
I PC A e B e una stampante sono collegati allo switch S. Se si interrompe il cavo della stampante, il percorso tra A e B passa ancora per S e utilizza i loro due cavi intatti. I PC possono quindi continuare a comunicare. Se S si spegne, tutti e tre i percorsi tra coppie di terminali perdono il nodo in comune.

::grafico{assi=0 xmin=-0.5 xmax=6.5 ymin=-0.5 ymax=4.5 linee="1,1 3,2.7;5,1 3,2.7;3,4 3,2.7" punti="1,1;5,1;3,4;3,2.7" etichette="1,0.45,PC A;5,0.45,PC B;3,4.3,Stampante;4.05,3.1,Switch S" titolo="Nella stella ogni terminale ha un collegamento dedicato con lo switch S."}
:::

:::osservazione
Nel **bus** più stazioni condividono un mezzo comune. In un **anello** ogni stazione è collegata ai suoi due vicini e i collegamenti formano un percorso chiuso. Una **maglia** collega alcuni o tutti i nodi attraverso percorsi ridondanti. Un percorso alternativo è utilizzabile se i dispositivi prevedono un meccanismo che lo selezioni. In una rete di switch, un collegamento fisico aggiuntivo può formare un anello. I protocolli di prevenzione dei cicli possono tenere temporaneamente inattivo un collegamento ridondante e riattivarlo quando serve.
:::

:::esempio{titolo="Il collegamento condiviso tra due aule"}
Ogni aula ha uno switch e le due aule condividono un cavo di dorsale. Il guasto della dorsale interrompe gli scambi tra aule, mentre ciascuna stella può ancora sostenere gli scambi tra i propri terminali. La dorsale è il solo percorso fra le due aule. Se un secondo collegamento viene predisposto come riserva, il recupero dipende sia dalla presenza del cavo sia dal funzionamento del protocollo che abilita il percorso alternativo.
:::

## Modelli OSI e TCP/IP

:::definizione{#modelli-rete titolo="Modello a livelli"}
Un **modello a livelli** assegna a ciascun livello un compito e un servizio per il livello superiore. Un **protocollo** stabilisce regole e formato dei messaggi tra entità che svolgono lo stesso ruolo su nodi diversi. Per esempio Ethernet stabilisce come rappresentare e trasferire i frame su una LAN. IP stabilisce come indirizzare i pacchetti attraverso reti diverse. I due protocolli affrontano problemi diversi e possono operare nello stesso trasferimento.
:::

:::osservazione
Il modello **OSI** distingue sette livelli. Dal mezzo trasmissivo verso il programma si incontrano il livello fisico, quello di collegamento dati, quello di rete, quello di trasporto, la sessione, la presentazione e l'applicazione. Nei primi quattro, il fisico si occupa della rappresentazione dei bit sul mezzo, il collegamento del trasferimento locale dei frame, la rete dell'inoltro tra reti e il trasporto dello scambio fra applicazioni sui terminali. Sessione e presentazione descrivono rispettivamente aspetti del dialogo e della rappresentazione dei dati. Il livello di applicazione comprende i protocolli usati per i servizi applicativi.
:::

:::osservazione
Nel modello **TCP/IP** a quattro livelli si distinguono accesso alla rete, Internet, trasporto e applicazione. L'accesso alla rete comprende i compiti che OSI distingue fra fisico e collegamento. Il livello Internet comprende IP. Il trasporto comprende TCP e UDP. Il livello applicativo comprende protocolli come HTTP e DNS. La corrispondenza è per funzioni, perché i due modelli organizzano alcuni compiti in modo diverso. Nei corsi che adottano cinque livelli, il fisico e il collegamento vengono mostrati separatamente anche nella rappresentazione della pila Internet.
:::

:::esempio{titolo="Tre indirizzi in una richiesta"}
Un PC apre una pagina Web su un server remoto usando una connessione TCP su IP. L'indirizzo IP di destinazione individua il server per l'inoltro. La porta TCP di destinazione individua il servizio sul server. Il MAC di destinazione sul primo tratto Ethernet individua la prossima interfaccia a cui consegnare il frame. In questa situazione la prossima interfaccia può essere quella del router della LAN. I tre campi individuano rispettivamente l’host finale, il servizio e la prossima interfaccia del percorso.
:::

## Incapsulamento e unità di dati

:::definizione{#incapsulamento titolo="Incapsulamento e decapsulamento"}
Nell'**incapsulamento** il livello inferiore tratta l'unità ricevuta dal livello superiore come proprio contenuto e aggiunge le informazioni necessarie al trasferimento. In una comunicazione TCP su IPv4 ed Ethernet, un segmento TCP è contenuto in un pacchetto IP. Quel pacchetto è contenuto in un **frame Ethernet**, che sul mezzo viene rappresentato da una sequenza di bit. Nel **decapsulamento** si segue l'ordine inverso fino a consegnare i dati al livello che li deve elaborare.

::grafico{assi=0 xmin=-0.4 xmax=6.4 ymin=-0.5 ymax=5.4 linee="0,0 6,0 6,5 0,5 0,0;0.8,0.55 5.2,0.55 5.2,3.75 0.8,3.75 0.8,0.55;1.6,1 4.4,1 4.4,2.55 1.6,2.55 1.6,1" etichette="3,4.4,Frame Ethernet;3,3.2,Pacchetto IP;3,1.8,Segmento TCP" titolo="Il frame contiene il pacchetto IP, che contiene il segmento TCP."}
:::

:::esempio{titolo="Somma delle intestazioni"}
Un segmento TCP trasporta $400$ byte applicativi e ha $20$ byte di intestazione. In questo esempio l'intestazione IP è di $20$ byte e il frame Ethernet senza tag aggiunge $18$ byte fra intestazione e FCS. Il contenuto Ethernet è abbastanza lungo da evitare il riempimento. Le dimensioni crescono di livello in livello.
$$
\begin{aligned}
L_{\mathrm{TCP}} &= 400+20=420\,\mathrm{byte} \\[4pt]
L_{\mathrm{IP}} &= 420+20=440\,\mathrm{byte} \\[4pt]
L_{\mathrm{Eth}} &= 440+18=458\,\mathrm{byte}
\end{aligned}
$$
Nella prima somma compaiono i dati applicativi e l'intestazione TCP. Nella seconda, tutto il segmento diventa il contenuto del pacchetto IP. Nella terza, l'intero pacchetto diventa il contenuto del frame. Il conteggio adotta la lunghezza del frame Ethernet dal MAC di destinazione alla FCS. Preambolo e intervallo fra frame vengono contati a parte quando interessa l'occupazione del mezzo.
:::

:::osservazione
Le intestazioni contengono anche informazioni che indicano come interpretare il contenuto. In un frame Ethernet II il campo **EtherType** distingue per esempio IPv4 da ARP. Nell'intestazione IPv4 il campo Protocol identifica il contenuto successivo, come TCP o UDP. Al ricevitore questi campi permettono di scegliere a quale elaborazione passare i dati ricevuti.
:::

## Frame Ethernet e indirizzi MAC

:::definizione{#frame-ethernet titolo="Campi del frame Ethernet"}
In un frame Ethernet II senza tag si incontrano, nell'ordine, il MAC di destinazione, il MAC sorgente, l'EtherType, i dati con eventuale riempimento e la **FCS**, una sequenza usata per il controllo degli errori. Gli indirizzi occupano $6$ byte ciascuno, l'EtherType $2$ byte e la FCS $4$ byte. Il riempimento permette di raggiungere la lunghezza minima quando i dati utili sono corti. Questi campi permettono di consegnare il contenuto sulla LAN e di riconoscere molte alterazioni dei bit ricevuti.
:::

:::esempio{titolo="Un pacchetto corto nel frame"}
Per un frame senza tag la lunghezza minima, dal MAC di destinazione alla FCS, è di $64$ byte. Con un pacchetto di $40$ byte, intestazione e FCS portano il totale a $58$ byte. Servono quindi $6$ byte di riempimento. Il valore di lunghezza nel pacchetto IP continua a descrivere il pacchetto, perciò chi lo elabora può separarlo dai byte aggiunti per esigenze Ethernet.
:::

:::definizione{#destinazioni-mac titolo="Unicast, multicast e broadcast"}
Una destinazione Ethernet **unicast** individua una singola interfaccia. Una destinazione **multicast** individua un gruppo. Il **broadcast** usa il MAC speciale di tutti bit a uno, scritto `ff:ff:ff:ff:ff:ff`, e si rivolge alle interfacce del dominio di broadcast. Per esempio la richiesta ARP iniziale può usare il broadcast perché deve ancora scoprire il MAC associato a un indirizzo IPv4. Il procedimento si studia nel capitolo su IPv4 e sottoreti.
:::

:::osservazione
Un MAC Ethernet ha $48$ bit e si scrive spesso con sei coppie di cifre esadecimali. Ogni coppia rappresenta $8$ bit. L'indirizzo identifica un'interfaccia a livello di collegamento. Un router con due porte Ethernet ha un indirizzo per ogni interfaccia, quindi nelle due reti si usano i MAC delle rispettive porte.
:::

:::attenzione
La **FCS** consente di riconoscere errori. Il ricevitore può scartare un frame quando il controllo fallisce. Per esempio, un bit alterato durante la trasmissione può produrre una FCS calcolata diversa da quella ricevuta. La procedura di controllo segnala la discrepanza. La decisione di recuperare i dati eventualmente persi dipende dai meccanismi di livello superiore utilizzati nella comunicazione.
:::

## Apprendimento, inoltro e domini

:::definizione{#switch-mac titolo="Tabella MAC e scelta della porta"}
Uno **switch Ethernet** apprende l'associazione tra il MAC sorgente di un frame valido e la porta dalla quale il frame è entrato. Memorizza l'associazione nella tabella di commutazione per la **VLAN**, cioè la rete locale virtuale a cui appartiene il frame. Per l'inoltro consulta il MAC di destinazione. Il sorgente fornisce quindi l'informazione di ritorno, mentre la destinazione determina le uscite del frame appena arrivato.
:::

:::osservazione
Per una destinazione **unicast nota** su un'altra porta, il frame esce da quella porta. Se la destinazione è associata alla porta d'ingresso, lo switch lo filtra perché il segmento della destinazione coincide con quello da cui è arrivato. Per una destinazione unicast sconosciuta, lo switch effettua il **flooding**, cioè replica il frame sulle porte idonee della stessa VLAN diverse da quella d'ingresso. Anche il broadcast si diffonde alle porte idonee della VLAN diverse da quella di arrivo. Per idonea si intende, negli esempi, una porta attiva che può inoltrare traffico di quella VLAN.
:::

:::esempio{titolo="La risposta completa la tabella"}
Uno switch ha quattro porte nella stessa VLAN e la sua tabella è vuota. Entra sulla porta $1$ un frame da A per B. Lo switch associa A alla $1$ e, poiché B è ancora sconosciuto, usa le porte $2$, $3$ e $4$. B è sulla porta $3$ e invia una risposta per A. Lo switch apprende B sulla $3$ e trova già A sulla $1$, quindi invia la risposta soltanto sulla $1$.

Nella prima trasmissione le copie hanno ancora il MAC unicast di B. Il flooding descrive la scelta delle uscite e lascia invariata la destinazione scritta nel frame. Il PC collegato alla porta $2$ può ricevere una copia sul collegamento, ma la sua interfaccia riconosce che è indirizzata a B.
:::

:::osservazione
Un'associazione dinamica scade se lo switch non osserva quel sorgente per il tempo previsto. Quando un terminale si sposta e inizia a trasmettere dalla nuova porta, lo switch aggiorna l'associazione leggendo i nuovi frame. Prima del primo frame sorgente dopo lo spostamento, la tabella può ancora indicare la porta precedente se la voce è rimasta valida. Conoscere lo stato della tabella e l'ordine dei frame è quindi necessario per ricostruire il percorso in un esercizio.
:::

:::definizione{#domini-rete titolo="Domini di broadcast e di collisione"}
Il **dominio di broadcast** è l'insieme delle interfacce che possono ricevere un broadcast Ethernet della stessa rete locale. Una VLAN costituisce un dominio di broadcast anche quando si estende su più switch. Porte di VLAN diverse appartengono a domini distinti. Un router che svolge l'inoltro IP separa le reti locali e lascia i broadcast Ethernet nel rispettivo dominio.

Un **dominio di collisione** riguarda invece il mezzo condiviso su cui più trasmissioni in half duplex possono sovrapporsi. Un hub ripete i segnali alle altre porte, quindi le stazioni collegate condividono quel mezzo logico. Con collegamenti punto a punto full duplex su uno switch, le due direzioni possono trasmettere simultaneamente e non si hanno collisioni Ethernet su quei collegamenti.
:::

:::esempio{titolo="Due VLAN sullo stesso switch"}
Le porte $1$ e $2$ appartengono alla VLAN $10$, le porte $3$ e $4$ alla VLAN $20$. Un broadcast che entra sulla porta $1$ esce dalla porta $2$. La topologia fisica è a stella, mentre il dominio di broadcast si ricava dall'appartenenza alla VLAN. Perché un dispositivo della VLAN $10$ comunichi a livello IP con un dispositivo della VLAN $20$, occorre una funzione di inoltro tra le reti, per esempio un router opportunamente collegato.
:::

## Router e percorso del pacchetto

:::definizione{#router-ip titolo="Inoltro IP e prossimo salto"}
Un **router** inoltra un pacchetto usando l'IP di destinazione e la tabella di instradamento. Se inoltra su Ethernet, costruisce un nuovo frame con il MAC sorgente della propria interfaccia di uscita e il MAC di destinazione della prossima interfaccia sul percorso. Questa interfaccia può appartenere al destinatario finale oppure a un altro router. In un percorso ordinario senza NAT gli indirizzi IP sorgente e destinazione restano gli stessi. Il router IPv4 aggiorna campi di transito come il TTL, che diminuisce a ogni passaggio attraverso un router.
:::

:::esempio{titolo="Due reti separate da un router"}
A e B appartengono a reti IP diverse. La prima interfaccia del router R ha MAC R1 e la seconda ha MAC R2. Nel primo tratto, A invia il pacchetto per l'IP di B dentro un frame con sorgente A e destinazione R1. Lo switch locale legge la destinazione R1 e inoltra verso la porta che raggiunge il router. R riceve il pacchetto e sceglie l'altra interfaccia. Il nuovo frame ha sorgente R2 e destinazione B. Gli eventuali switch interposti inoltrano i frame sulle porte opportune conservando i MAC dei loro estremi.

::grafico{assi=0 xmin=-0.7 xmax=8.7 ymin=-0.9 ymax=2.5 linee="0,0.5 2,0.5 4,0.5 6,0.5 8,0.5" punti="0,0.5;2,0.5;4,0.5;6,0.5;8,0.5" etichette="0,-0.05,A;2,-0.05,S1;4,-0.05,R;6,-0.05,S2;8,-0.05,B;2,1.45,Prima LAN;6,1.45,Seconda LAN" titolo="Il router R separa le LAN. R1 è il suo MAC verso A e R2 quello verso B."}
:::

:::attenzione
Contare i **frame distinti di livello di collegamento** e contare le **trasmissioni sui cavi** sono due operazioni diverse. Nel percorso A, S1, R, S2, B dell'esempio, il router divide il trasferimento in due frame logici con coppie di MAC diverse. Le trasmissioni fisiche avvengono su quattro collegamenti, perché ogni switch invia il frame sul cavo successivo. Il quesito deve specificare quale delle due quantità si vuole contare.
:::

## Tempi di trasferimento e confronto di percorsi

:::definizione{#tempo-trasmissione titolo="Tempi di trasmissione e propagazione"}
La **trasmissione** è l'immissione dei bit sul mezzo. Se $L$ è la lunghezza in bit e $R$ il tasso in bit al secondo, il tempo di trasmissione è $t_{\mathrm{tx}}=\dfrac{L}{R}$. La **propagazione** è il viaggio del segnale già immesso. Per distanza $d$ e velocità del segnale $v$ espresse in unità compatibili, vale $t_{\mathrm{prop}}=\dfrac{d}{v}$. Il primo bit impiega circa il solo tempo di propagazione, a partire dall'istante d'inizio dell'invio. La fine dell'ultimo bit arriva dopo la somma dei due tempi.
:::

:::esempio{titolo="Un frame e un tratto in fibra"}
Un frame di $1\,200\,\mathrm{byte}$ attraversa un tratto di $50\,\mathrm{km}$ a $24\,\mathrm{Mbit/s}$. Il segnale viaggia a $200\,000\,\mathrm{km/s}$. Con $1\,\mathrm{Mbit/s}=10^6\,\mathrm{bit/s}$, i due contributi sono
$$
\begin{aligned}
L &= 1\,200\cdot 8=9\,600\,\mathrm{bit} \\[4pt]
t_{\mathrm{tx}} &= \frac{9\,600}{24\cdot 10^6}\,\mathrm{s}
                 =0{,}4\,\mathrm{ms} \\[4pt]
t_{\mathrm{prop}} &= \frac{50}{200\,000}\,\mathrm{s}
                 =0{,}25\,\mathrm{ms} \\[4pt]
t_{\mathrm{tot}} &= 0{,}4\,\mathrm{ms}+0{,}25\,\mathrm{ms}
                 =0{,}65\,\mathrm{ms}.
\end{aligned}
$$
Il primo bit arriva dopo $0{,}25\,\mathrm{ms}$, mentre i successivi bit raggiungono il destinatario al ritmo del collegamento. Dalla prima all'ultima parte del frame in arrivo passano quindi $0{,}4\,\mathrm{ms}$, cioè il tempo di immissione.
:::

:::osservazione
Su più tratti con ricezione completa prima dell'inoltro (*store and forward*), per un solo frame si sommano i contributi di trasmissione e propagazione di ciascun tratto. Se sono noti anche ritardi di elaborazione o di coda, si aggiungono nei nodi in cui si verificano. Per più frame consecutivi su collegamenti separati, il nodo può trasmettere il primo sul secondo collegamento mentre riceve il secondo sul primo. In quel caso si costruisce una sequenza temporale e si rispetta, per ogni uscita, sia il completamento della ricezione sia la disponibilità del collegamento.
:::

:::esempio{titolo="Collegamento più veloce e percorso più lungo"}
Lo stesso frame impiega $0{,}8\,\mathrm{ms}$ a essere immesso sul percorso A e $0{,}3\,\mathrm{ms}$ sul percorso B. Le rispettive propagazioni durano $0{,}2\,\mathrm{ms}$ e $0{,}9\,\mathrm{ms}$. Trascurando code ed elaborazione, il primo percorso completa il trasferimento in $1\,\mathrm{ms}$ e il secondo in $1{,}2\,\mathrm{ms}$. Il tasso più elevato riduce il tempo di trasmissione sul percorso B. L'aumento della propagazione è maggiore di quel risparmio, quindi A consegna prima l'ultimo bit.
:::
