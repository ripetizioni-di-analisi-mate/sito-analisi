---
titolo: "Internet, TCP e UDP, DNS e Web"
sommario: "Dal nome del sito alla risposta HTTP, attraverso configurazione, risoluzione DNS, trasporto e TLS."
---

## Livelli e unità di trasmissione

:::definizione{#modelli titolo="Modello TCP/IP e modello OSI"}
Per chiedere una pagina, il browser deve specificare la risorsa, individuare l'applicazione remota e inviare i dati su una rete. Il modello **TCP/IP** distingue quattro livelli a cui affidare questi compiti.

- L'**applicazione** definisce il significato dei dati. Per esempio, HTTP stabilisce come il browser chiede una risorsa e come il server comunica l'esito.
- Il trasporto consegna i dati tra processi. TCP e UDP usano porte numeriche per riconoscere gli estremi dello scambio.
- Il livello Internet usa gli indirizzi IP per inoltrare pacchetti tra reti. Un router sceglie il prossimo salto in base all'indirizzo di destinazione.
- L'accesso alla rete riguarda la consegna sul collegamento. In Ethernet si usano frame con indirizzi MAC e si trasmettono i bit sul mezzo fisico.
:::

:::osservazione
Il modello **OSI** distingue sette livelli. Partendo dai dati usati dall'applicazione si incontrano applicazione, presentazione, sessione, trasporto, rete, collegamento dati e fisico. Il livello rete OSI corrisponde, per funzione generale, al livello Internet di TCP/IP. I livelli collegamento dati e fisico rientrano nell'accesso alla rete del modello TCP/IP. Le funzioni dei tre livelli superiori OSI sono trattate, in questo confronto, nell'applicazione TCP/IP. La corrispondenza descrive il ruolo dei livelli. Per classificare un protocollo si osserva il compito che svolge nello scambio.
:::

:::esempio{#incapsulamento-web titolo="Incapsulamento durante una richiesta"}
Supponiamo di usare HTTP su TCP senza TLS in una rete didattica. Il browser produce il messaggio HTTP. TCP ne trasporta i byte in uno o più segmenti, dotati di intestazione TCP. Un pacchetto IP contiene il segmento e un'intestazione IP. Sul collegamento Ethernet il pacchetto viene inserito in un frame con gli indirizzi MAC del collegamento. Sul server i livelli elaborano le intestazioni in ordine inverso. L'applicazione può quindi leggere la richiesta HTTP.

::grafico{assi=0 uguale=1 xmin=-1 xmax=11 ymin=-1 ymax=8 linee="0,0 10,0 10,7 0,7 0,0;1,1 9,1 9,5.8 1,5.8 1,1;2,2 8,2 8,4.6 2,4.6 2,2;3,2.5 7,2.5 7,3.5 3,3.5 3,2.5" etichette="5,6.45,Frame Ethernet;5,5.25,Pacchetto IP;5,4.05,Segmento TCP;5,3,Byte HTTP" titolo="Un segmento TCP in un pacchetto IP, dentro un frame del collegamento Ethernet."}

Il router riceve un frame e valuta l'indirizzo IP di destinazione per scegliere dove inoltrare il pacchetto. Quindi prepara un nuovo frame adatto al collegamento di uscita. In un percorso ordinario senza traduzione di indirizzi, l'IP di destinazione identifica ancora il destinatario finale. Gli indirizzi MAC si riferiscono agli estremi del singolo collegamento Ethernet. La distinzione fra i due tipi di indirizzi si applica anche quando il primo frame è diretto al gateway.
:::

## Porte e connessioni

:::definizione{#porte titolo="Porte di trasporto"}
Su un computer possono essere in esecuzione un browser, un client di posta e un servizio di stampa. L'indirizzo IP permette di raggiungere il computer, mentre la **porta** aiuta il sistema a consegnare i dati al processo interessato. Sia TCP sia UDP hanno una porta sorgente e una porta di destinazione nell'intestazione. Ciascun protocollo usa il proprio spazio di porte. Per esempio, un servizio può usare TCP sulla porta `5300` e un altro UDP sulla porta `5300` sullo stesso indirizzo.
:::

:::esempio{#estremi-tcp titolo="Due browser e la stessa porta del server"}
Un client con IP `192.0.2.18` apre due connessioni TCP al server `198.51.100.8` sulla porta `443`. Il sistema assegna al primo collegamento la porta locale `51000` e al secondo la `51001`. TCP distingue le connessioni con quattro valori. Si tratta dell'IP e della porta locali e dell'IP e della porta remoti. Per il secondo collegamento, un segmento del server usa come sorgente `198.51.100.8:443` e come destinazione `192.0.2.18:51001`. La porta di destinazione corrisponde quindi a quella locale della seconda connessione.

Anche due client con indirizzi IP diversi possono scegliere lo stesso numero di porta sorgente. Le loro connessioni con il server si distinguono già grazie all'IP sorgente. Se il numero di porta del server è noto, indica quale estremo contattare. Il protocollo applicativo si riconosce osservando lo scambio, poiché un servizio può essere configurato su una porta diversa da quella convenzionale.
:::

## TCP, numeri di sequenza e conferme

:::definizione{#tcp-udp titolo="TCP e UDP"}
Un programma che scarica un file deve ricostruire i byte nel loro ordine. **TCP** offre un flusso ordinato, con numerazione dei byte, conferme di ricezione e ritrasmissioni. Se mancano dati intermedi, TCP può conservare i byte successivi già ricevuti e consegnarli in ordine quando ha ricostruito il tratto mancante. Un errore persistente può interrompere la connessione. L'applicazione controlla quindi l'esito dello scambio.

**UDP** consegna datagrammi, ognuno con il proprio confine. Il trasporto può perdere, riordinare o duplicare datagrammi. Un'applicazione può assegnare loro un numero e stabilire come comportarsi quando ne riceve uno vecchio oppure quando rileva un salto.
:::

:::esempio{#apertura-tcp titolo="Apertura di una connessione TCP"}
Prima di trasferire i dati, un client e un server concordano i numeri iniziali di sequenza. Il client invia `SYN` con sequenza $1000$. Il server risponde con `SYN, ACK`, sequenza propria $4000$ e conferma $1001$. Il client conclude con `ACK` pari a $4001$. Il segnale `SYN` occupa una posizione nella numerazione. Perciò, in questo esempio senza dati nei segmenti di apertura, i primi byte possono iniziare con i numeri $1001$ e $4001$ nelle due direzioni.

::grafico{assi=0 uguale=1 xmin=-1 xmax=11 ymin=-1 ymax=8 linee="1,0.5 1,6.8;9,0.5 9,6.8" vettori="1,5.6,9,5.6;9,3.6,1,3.6;1,1.6,9,1.6" etichette="1,7.4,Client;9,7.4,Server;5,6.15,SYN 1000;5,4.15,SYN 4000 · ACK 1001;5,2.15,ACK 4001" titolo="I tre passaggi di apertura TCP dall'alto verso il basso."}
:::

:::definizione{#ack-cumulativo titolo="Numero di sequenza e ACK cumulativo"}
In una connessione già aperta, il numero di sequenza di un segmento di dati identifica il primo byte trasportato. Se il numero iniziale è $s$ e il segmento contiene $n$ byte, l'ultimo byte ha numero $s+n-1$. Il campo **ACK** indica il prossimo numero atteso in quella direzione. La conferma è cumulativa perché attesta la ricezione dei byte precedenti senza buchi nella sequenza. Nei calcoli si assumono numeri abbastanza piccoli da evitare il ritorno a zero del contatore TCP.
:::

:::esempio{titolo="Il secondo segmento arriva per primo"}
Il server attende il byte $1001$. Il client invia $300$ byte a partire da $1001$ e poi $200$ byte a partire da $1301$. Il secondo segmento arriva per primo. Poiché manca il tratto da $1001$ a $1300$, l'ACK cumulativo rimane $1001$. Supponiamo che il server conservi i byte da $1301$ a $1500$. Dopo la ricezione del primo segmento, i due tratti formano una sequenza continua. Il prossimo byte atteso si calcola allora con

$$
1001+300+200=1501.
$$

La conferma può quindi passare direttamente a $1501$. Se il secondo segmento fosse stato scartato, il server dopo aver ricevuto il primo attenderebbe ancora il byte $1301$.

::grafico{assi=0 uguale=1 xmin=-1 xmax=11 ymin=-1 ymax=8 linee="0,2 10,2 10,4 0,4 0,2;6,2 6,4" poligoni="6,2 10,2 10,4 6,4" etichette="3,3,Tratto mancante;8,3,Conservato;0,1.35,1001;6,1.35,1301;10,1.35,1501" vettori="0,0.05,0,0.75" titolo="Prima che arrivi il tratto mancante, il prossimo byte atteso ha numero $1001$."}
:::

## Scegliere il trasporto

:::esempio{#scelta-trasporto titolo="File di misure e valori in diretta"}
Una stazione invia sia un archivio giornaliero sia la misura più recente a un indicatore. Nell'archivio ogni misura deve comparire una volta e nella posizione prevista. Per questo compito si può usare TCP e verificare nell'applicazione che il file sia completo. Se il programma trasferisce più file nella stessa connessione, una lunghezza iniziale per ciascun file permette al ricevente di individuare il confine. TCP consegna un flusso di byte, perciò una lettura può restituire solo una parte del file oppure anche l'inizio del successivo.

Per l'indicatore, una misura passata perde utilità quando ne arriva una più recente. L'applicazione può usare UDP con un progressivo. Se riceve i campioni $5$, $7$ e $6$ in quest'ordine, visualizza il $5$ e poi il $7$. Quando arriva il $6$, lo scarta perché il progressivo è minore dell'ultimo mostrato. Il salto da $5$ a $7$ segnala che il campione $6$ manca in quel momento. L'arrivo successivo del $6$ indica un riordinamento, quindi da quel solo salto iniziale non si poteva dedurre una perdita definitiva.
:::

:::attenzione
La scelta di UDP lascia all'applicazione la gestione dei ritardi e delle eventuali conferme. La rete e le code sui dispositivi possono comunque ritardare i datagrammi. Se un'applicazione attende la conferma di ogni datagramma prima di inviare il successivo, introduce anch'essa un'attesa in caso di perdita.
:::

## Configurazione con DHCP

:::definizione{#dhcp titolo="Configurazione DHCP"}
Quando un portatile entra in una LAN, ha bisogno di un indirizzo locale e di un prefisso per riconoscere le destinazioni sullo stesso collegamento. Per comunicare con altre reti gli occorre una rotta appropriata. **DHCP** può fornire automaticamente indirizzo, maschera, gateway e indirizzo del resolver DNS. Un server può assegnare i parametri per un periodo chiamato *lease*. Se il lease è rinnovato, la configurazione rimane valida fino alla nuova scadenza.
:::

:::esempio{titolo="I parametri assegnati a un portatile"}
In una rete didattica DHCP assegna al portatile `192.0.2.20/24`, indica il gateway `192.0.2.1` e il resolver `192.0.2.53`. Quando l'applicazione apre `scuola.example`, interroga il resolver per conoscere l'indirizzo del server. Se il resolver restituisce `198.51.100.12`, l'indirizzo del server appartiene a una rete diversa da quella del portatile. In assenza di rotte più specifiche, il portatile usa quindi il gateway come prossimo salto. La configurazione DHCP indica come usare la rete locale. La risposta DNS fornisce i dati associati al nome remoto.
:::

:::osservazione
In uno scambio iniziale IPv4 tipico, il client cerca un server DHCP con `Discover`. Un server propone una configurazione con `Offer`. Il client seleziona la proposta con `Request` e il server conferma con `ACK`. La conferma DHCP riguarda l'assegnazione. La conferma TCP, pur usando la stessa abbreviazione, riguarda invece numeri di sequenza.
:::

## Nomi e ruoli del DNS

:::definizione{#dns titolo="Sistema DNS"}
Un indirizzo può cambiare mentre il nome di un servizio rimane lo stesso. Il **DNS** permette di richiedere informazioni associate a un nome. Il nome richiesto e il tipo del record determinano quale informazione cerca il resolver.

- Un record `A` contiene un indirizzo IPv4.
- Un record `AAAA` contiene un indirizzo IPv6.
- Un record `CNAME` associa un alias a un altro nome.
- Un record `MX` indica un nome di server di posta e una preferenza numerica.
:::

:::definizione{#resolver-autoritativo titolo="Resolver e server autoritativo"}
Il **resolver** riceve la richiesta del client e cerca la risposta. Può rispondere da una cache valida oppure interrogare altri server. Un server **autoritativo** pubblica i dati per le zone DNS di cui è responsabile. Se la cache è vuota, un resolver ricorsivo può seguire indicazioni dalla radice verso i server dei domini di primo livello e fino al server autoritativo della zona. Le risposte intermedie aiutano a individuare il server da interrogare.
:::

:::esempio{titolo="Risoluzione di un alias"}
Per il nome `www.scuola.example` è pubblicato un record `CNAME` con valore `aule.scuola.example`. Quest'ultimo nome ha un record `A` con valore `198.51.100.24`. Il primo record indica quale nome consultare, quindi il resolver segue l'alias e ricava l'IPv4 dal record `A`. Il browser può collegarsi a quell'IP per raggiungere il servizio di `www.scuola.example`. Il nome usato per la richiesta e per verificare l'identità TLS resta quello dell'URL originario.
:::

## Cache DNS e tempo di validità

:::definizione{#ttl-dns titolo="TTL e scadenza della cache"}
Il **TTL** (*Time To Live*) indica per quanto tempo un dato DNS può essere riutilizzato da una cache, in secondi. Se il resolver memorizza il record all'istante $t_0$ con TTL pari a $T$, la scadenza è $t_0+T$. Prima di quel momento, all'istante $t$, il TTL residuo è $t_0+T-t$. La lettura dalla cache può restituire il dato con il tempo residuo. Per cambiare la scadenza occorre ottenere un nuovo dato secondo le regole di risoluzione.
:::

:::esempio{titolo="Un indirizzo aggiornato e due cache"}
Alle 10:00 un resolver memorizza l'indirizzo `192.0.2.60` con TTL di $300\,\mathrm{s}$. Il dato scade alle 10:05. Alle 10:01 il server autoritativo aggiorna il record a `192.0.2.61`. Supponiamo che il resolver mantenga il record fino a scadenza. Alle 10:03 sono passati $180\,\mathrm{s}$, quindi può rispondere con il vecchio indirizzo e un TTL residuo di $120\,\mathrm{s}$. Un secondo resolver che non possiede il record può invece ottenere il nuovo indirizzo nello stesso istante. Dopo la scadenza, una richiesta al primo resolver richiede un nuovo dato. La differenza tra le due risposte dipende dagli istanti di memorizzazione.
:::

:::attenzione
Il TTL di un record DNS misura un tempo. Il campo TTL dell'intestazione IPv4 viene ridotto durante l'inoltro da parte dei router. Le due quantità appartengono a protocolli diversi. Durante una diagnosi si identifica prima quale delle due compare nell'osservazione.
:::

## URL, richieste e risposte HTTP

:::definizione{#http-https titolo="HTTP e HTTPS"}
**HTTP** definisce richieste e risposte. Una richiesta specifica un metodo e una risorsa. Una risposta ha un codice di stato e può contenere dati. **HTTPS** protegge lo scambio HTTP con TLS. Nel caso didattico di HTTPS su TCP, dopo l'apertura di TCP il client e il server stabiliscono il canale TLS. Il browser usa il canale protetto per inviare la richiesta.
:::

:::esempio{#url-web titolo="Componenti di un URL"}
Consideriamo un URL con porta, percorso, query e frammento.

```text
https://scuola.example:8443/registro?classe=5A#voti
```

Lo schema è `https`, il nome è `scuola.example` e la porta esplicita è `8443`. Il percorso è `/registro` e la query è `classe=5A`. Il browser usa il nome per la ricerca DNS e apre il collegamento alla porta esplicita. Senza porta esplicita, il valore predefinito dello schema HTTPS è `443`. Per una richiesta HTTP ordinaria, il server riceve il percorso e la query. Il frammento `#voti` viene interpretato dal browser, per esempio per raggiungere una sezione del documento già ricevuto.
:::

:::esempio{#metodi-stati-http titolo="Metodo, stato e azione successiva"}
Con `GET` il browser chiede una rappresentazione della risorsa. Con `HEAD` chiede le informazioni della risposta corrispondente senza ricevere il corpo. `POST` invia dati perché la risorsa destinataria li elabori, per esempio per registrare una consegna. Se il server ha creato una nuova risorsa, può rispondere `201 Created`. Quando elabora una richiesta correttamente senza restituire contenuto, un codice adatto è `204 No Content`.

La prima cifra del codice identifica la classe. `200 OK` indica una richiesta riuscita. Una risposta `302 Found` con intestazione `Location` indica al client un altro indirizzo per un reindirizzamento temporaneo. `403 Forbidden` indica che il server ha compreso la richiesta e rifiuta di soddisfarla. `404 Not Found` comunica che il server non ha trovato una rappresentazione attuale della risorsa o non intende dichiararne l'esistenza. `500 Internal Server Error` indica una condizione inattesa durante l'elaborazione. In ciascun caso lo stato appartiene alla risposta HTTP, quindi il client ha già raggiunto un interlocutore capace di rispondere a livello applicativo.
:::

## TLS e diagnosi di una richiesta

:::definizione{#tls-identita titolo="Protezione e identità con TLS"}
TLS protegge confidenzialità e integrità dei dati in transito. Il browser verifica l'identità del server, in particolare la corrispondenza del nome richiesto con il certificato, la validità temporale e la catena fino a un'autorità considerata attendibile. Quando la connessione è stabilita correttamente, il browser può scambiare dati protetti con il server autenticato. La correttezza delle informazioni pubblicate dipende dalle fonti e dai contenuti. Il certificato serve a verificare l'identità nella comunicazione.
:::

:::esempio{#diagnosi-web titolo="Dove si interrompe la richiesta"}
Supponiamo che il portatile abbia già i parametri di rete, che usi HTTPS su TCP e che non abbia una connessione aperta. Per aprire `https://scuola.example/registro`, il browser ottiene l'indirizzo tramite il resolver, apre TCP, negozia TLS per il nome richiesto e invia la richiesta HTTP. Ogni passaggio produce un esito osservabile.

- Se il resolver comunica che il nome non esiste, il client si ferma prima del collegamento all'indirizzo del sito.
- Se il nome si risolve e il collegamento TCP va in timeout, si sa che l'indirizzo è stato ottenuto. Servono altri dati per distinguere un problema di percorso da un servizio indisponibile.
- Se TCP funziona e il certificato è valido per un nome diverso, il problema riguarda la verifica dell'identità TLS. Il browser può interrompere il collegamento prima della richiesta HTTP.
- Se il browser riceve `404` dal server richiesto, ha già ricevuto una risposta HTTP. L'osservazione riguarda il percorso della risorsa e il comportamento del server.

::grafico{assi=0 uguale=1 xmin=-1 xmax=11 ymin=-1 ymax=8 linee="2,6 8,6 8,7.2 2,7.2 2,6;2,4 8,4 8,5.2 2,5.2 2,4;2,2 8,2 8,3.2 2,3.2 2,2;2,0 8,0 8,1.2 2,1.2 2,0" vettori="5,6,5,5.2;5,4,5,3.2;5,2,5,1.2" etichette="4,6.6,DNS · indirizzo;3.6,4.6,TCP · collegamento;4.2,2.6,TLS · identità;4.1,0.6,HTTP · risposta" titolo="Fasi della richiesta HTTPS su TCP quando il browser apre una nuova connessione."}

Il resolver può già avere una risposta valida. In quel caso restituisce il dato dalla cache, poi il browser apre la connessione come nell'esempio. Le fasi descritte usano HTTPS su TCP. Con HTTP/3 si usa QUIC su UDP, quindi il trasporto concreto dipende dalla versione di HTTP concordata.
:::
