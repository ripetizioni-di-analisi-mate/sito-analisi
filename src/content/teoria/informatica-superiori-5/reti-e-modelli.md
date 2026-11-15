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

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=9.1 ymin=-1 ymax=1.7 linee="0,0 3,0;0.5,0 0.5,0.7;1.5,0 1.5,0.7;2.5,0 2.5,0.7;4.5,0 5.5,0 5.5,1 4.5,1 4.5,0;7.5,0 8.5,0 8.5,1 7.5,1 7.5,0;7.5,0 8.5,1" punti="0.5,0.7;1.5,0.7;2.5,0.7;4.5,0;5.5,0;5.5,1;4.5,1;7.5,0;8.5,0;8.5,1;7.5,1" etichette="1.31,-0.6,Bus;4.62,-0.6,Anello;7.62,-0.6,Maglia" titolo="Bus con un mezzo comune, anello chiuso e maglia parziale con un collegamento ridondante."}
:::

:::esempio{titolo="Il collegamento condiviso tra due aule"}
Ogni aula ha uno switch e le due aule condividono un cavo di dorsale. Il guasto della dorsale interrompe gli scambi tra aule, mentre ciascuna stella può ancora sostenere gli scambi tra i propri terminali. La dorsale è il solo percorso fra le due aule. Se un secondo collegamento viene predisposto come riserva, il recupero dipende sia dalla presenza del cavo sia dal funzionamento del protocollo che abilita il percorso alternativo.

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=7.3 ymin=-0.9 ymax=2.6 linee="1.5,1.5 5.5,1.5;1.5,1.5 0.5,0.3;1.5,1.5 1.5,0.3;1.5,1.5 2.5,0.3;5.5,1.5 4.5,0.3;5.5,1.5 5.5,0.3;5.5,1.5 6.5,0.3" punti="1.5,1.5;5.5,1.5;0.5,0.3;1.5,0.3;2.5,0.3;4.5,0.3;5.5,0.3;6.5,0.3" etichette="1.4,2.05,S1;5.4,2.05,S2;3.15,1.8,dorsale;1.2,-0.4,Aula 1;5.2,-0.4,Aula 2" titolo="Due stelle unite dalla dorsale fra S1 e S2, unico percorso fra le aule."}
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

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=8.1 ymin=-0.3 ymax=5.6 linee="0,0 3.4,0 3.4,4.9 0,4.9 0,0;0,0.7 3.4,0.7;0,1.4 3.4,1.4;0,2.1 3.4,2.1;0,2.8 3.4,2.8;0,3.5 3.4,3.5;0,4.2 3.4,4.2;4.4,0 7.8,0 7.8,4.9 4.4,4.9 4.4,0;4.4,1.4 7.8,1.4;4.4,2.1 7.8,2.1;4.4,2.8 7.8,2.8" etichette="1.35,0.25,Fisico;1.01,0.95,Collegamento;1.47,1.65,Rete;1.18,2.35,Trasporto;1.24,3.05,Sessione;0.95,3.75,Presentazione;1.01,4.45,Applicazione;5.12,0.6,Accesso alla rete;5.64,1.65,Internet;5.58,2.35,Trasporto;5.41,3.75,Applicazione;1.53,5.2,OSI;5.75,5.2,TCP/IP" titolo="Corrispondenza per funzioni fra i sette livelli OSI e i quattro livelli TCP/IP."}
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

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=10.9 ymin=-0.9 ymax=1.7 linee="0,0 10.6,0 10.6,1.4 0,1.4 0,0;2,0 2,1.4;4,0 4,1.4;5.3,0 5.3,1.4;9.3,0 9.3,1.4" etichette="0.33,0.85,MAC dest.;0.93,0.3,6;2.33,0.85,MAC sorg.;2.92,0.3,6;4.35,0.85,Tipo;4.58,0.3,2;5.95,0.85,Dati e riempimento;6.4,0.3,da 46 a 1500;9.72,0.85,FCS;9.88,0.3,4;4.03,-0.5,lunghezze in byte" titolo="Campi del frame Ethernet II senza tag. Il campo Tipo è l’EtherType; il frame va da $64$ a $1518$ byte."}
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

::grafico{assi=0 uguale=1 xmin=-0.3 xmax=6.3 ymin=-0.7 ymax=3.4 poligoni="0.5,2 5.5,2 5.5,3 0.5,3" linee="1,2 1,0.3;2.33,2 2.33,0.3;3.67,2 3.67,0.3;5,2 5,0.3" punti="1,0.3;2.33,0.3;3.67,0.3;5,0.3" vettori="0.75,0.5,0.75,1.85;2.58,1.85,2.58,0.5;3.92,1.85,3.92,0.5;5.25,1.85,5.25,0.5" unicolore=1 etichette="2.74,2.75,Switch;0.96,2.25,1;2.29,2.25,2;3.63,2.25,3;4.96,2.25,4;0.96,-0.25,A;2.24,-0.25,PC;3.63,-0.25,B;4.91,-0.25,PC" titolo="Il frame da A per B entra dalla porta $1$. Con la tabella vuota lo switch lo replica sulle porte $2$, $3$ e $4$."}
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

::grafico{xmin=-0.2 xmax=0.95 ymin=-0.12 ymax=0.68 nomi="t,d" poligoni="0,0 0.4,0 0.65,0.5 0.25,0.5" linee="0,0 0.25,0.5;0.4,0 0.65,0.5" segmenti="0.25,0.5,0.25,0;0.65,0.5,0.65,0;0,0.5,0.25,0.5" punti="0.25,0.5;0.65,0.5" etichette="0.22,-0.06,0,25;0.38,-0.06,0,4;0.62,-0.06,0,65;-0.17,0.5,50 km;0.03,0.42,primo bit;0.7,0.15,ultimo bit" titolo="Tempo e distanza percorsa dal frame da $1\,200\,\mathrm{byte}$ sul tratto di $50\,\mathrm{km}$, con il tempo $t$ in millisecondi."}
:::

:::osservazione
Su più tratti con ricezione completa prima dell'inoltro (*store and forward*), per un solo frame si sommano i contributi di trasmissione e propagazione di ciascun tratto. Se sono noti anche ritardi di elaborazione o di coda, si aggiungono nei nodi in cui si verificano. Per più frame consecutivi su collegamenti separati, il nodo può trasmettere il primo sul secondo collegamento mentre riceve il secondo sul primo. In quel caso si costruisce una sequenza temporale e si rispetta, per ogni uscita, sia il completamento della ricezione sia la disponibilità del collegamento.
:::

::::teorema{#ritardo-piu-frame titolo="Più frame su tratti uguali in store and forward"}
Un percorso è formato da $N$ tratti con lo stesso tempo di trasmissione $t_{\mathrm{tx}}$ per frame e lo stesso tempo di propagazione $t_{\mathrm{prop}}$. La sorgente invia $P$ frame uguali uno dopo l'altro, ogni nodo inoltra un frame dopo averlo ricevuto per intero, elaborazione e code sono trascurabili. Allora l'ultimo bit dell'ultimo frame arriva a destinazione all'istante
$$
T=(N+P-1)\,t_{\mathrm{tx}}+N\,t_{\mathrm{prop}},
$$
misurato dall'inizio dell'invio. La formula permette di calcolare il ritardo di un trasferimento diviso in più frame senza costruire la sequenza temporale nodo per nodo.

:::dimostrazione
Si indica con $F_{k,j}$ l'istante in cui termina la trasmissione del frame $k$ sul tratto $j$. Si dimostra per induzione che $F_{k,j}=(j+k-1)\,t_{\mathrm{tx}}+(j-1)\,t_{\mathrm{prop}}$.

Sul primo tratto la sorgente trasmette i frame senza pause, quindi $F_{k,1}=k\,t_{\mathrm{tx}}$, che è la formula con $j=1$.

Il nodo alla fine del tratto $j$ inizia a trasmettere il frame $k$ sul tratto $j+1$ quando ha ricevuto per intero quel frame e ha finito di trasmettere il frame $k-1$. Perciò l'inizio è $\max\left(F_{k,j}+t_{\mathrm{prop}},\,F_{k-1,j+1}\right)$, e per il primo frame conta soltanto il primo termine. Si suppone la formula vera sul tratto $j$ per ogni frame e sul tratto $j+1$ per il frame $k-1$. Allora i due termini valgono
$$
\begin{aligned}
F_{k,j}+t_{\mathrm{prop}} &= (j+k-1)\,t_{\mathrm{tx}}+j\,t_{\mathrm{prop}} \\[4pt]
F_{k-1,j+1} &= (j+k-1)\,t_{\mathrm{tx}}+j\,t_{\mathrm{prop}}.
\end{aligned}
$$
I due istanti coincidono, quindi il frame $k$ parte senza attesa e $F_{k,j+1}=(j+k)\,t_{\mathrm{tx}}+j\,t_{\mathrm{prop}}$, che è la formula sul tratto $j+1$. Per $k=1$ si ottiene lo stesso valore dal solo primo termine.

L'ultimo frame termina la trasmissione sul tratto $N$ all'istante $F_{P,N}=(N+P-1)\,t_{\mathrm{tx}}+(N-1)\,t_{\mathrm{prop}}$. Il suo ultimo bit arriva dopo un'ulteriore propagazione, perciò l'istante di arrivo è $T$.
:::
::::

:::esempio{titolo="Tre frame su due tratti"}
Un file viene diviso in $P=3$ frame. Ciascuno richiede $t_{\mathrm{tx}}=0{,}4\,\mathrm{ms}$ su ognuno degli $N=2$ tratti, e ogni tratto ha $t_{\mathrm{prop}}=0{,}25\,\mathrm{ms}$.
$$
\begin{aligned}
T &= (2+3-1)\cdot 0{,}4\,\mathrm{ms}+2\cdot 0{,}25\,\mathrm{ms} \\[4pt]
&= 1{,}6\,\mathrm{ms}+0{,}5\,\mathrm{ms}=2{,}1\,\mathrm{ms}.
\end{aligned}
$$
Se gli stessi dati viaggiassero in un solo frame, trascurando le intestazioni in più dei frame separati, il tempo di trasmissione per tratto sarebbe $3\cdot 0{,}4=1{,}2\,\mathrm{ms}$. Con $P=1$ la formula dà allora $2\cdot 1{,}2+2\cdot 0{,}25=2{,}9\,\mathrm{ms}$. Il nodo intermedio inoltra il primo frame mentre riceve il secondo, quindi la divisione in frame riduce il ritardo di $0{,}8\,\mathrm{ms}$.
:::

:::esempio{titolo="Collegamento più veloce e percorso più lungo"}
Lo stesso frame impiega $0{,}8\,\mathrm{ms}$ a essere immesso sul percorso A e $0{,}3\,\mathrm{ms}$ sul percorso B. Le rispettive propagazioni durano $0{,}2\,\mathrm{ms}$ e $0{,}9\,\mathrm{ms}$. Trascurando code ed elaborazione, il primo percorso completa il trasferimento in $1\,\mathrm{ms}$ e il secondo in $1{,}2\,\mathrm{ms}$. Il tasso più elevato riduce il tempo di trasmissione sul percorso B. L'aumento della propagazione è maggiore di quel risparmio, quindi A consegna prima l'ultimo bit.
:::
