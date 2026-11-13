---
titolo: "Indirizzamento IPv4, subnetting e gateway"
sommario: "Dalla conversione delle maschere al progetto delle sottoreti e alla scelta del prossimo salto."
---

## Indirizzi IPv4 e prefissi

:::definizione{#ipv4 titolo="Indirizzo IPv4"}
Un **indirizzo IPv4** identifica un’interfaccia a livello di rete. Un router che collega due LAN ha di solito un indirizzo in ciascuna LAN, perché dispone di un’interfaccia distinta su ogni collegamento.

L’indirizzo contiene $32$ bit, divisi in quattro **ottetti**. In notazione decimale puntata si scrive un numero da $0$ a $255$ per ogni ottetto. Per esempio, nell’indirizzo `192.168.4.18` l’ultimo ottetto è $18$. Poiché $18=16+2$, la sua rappresentazione su otto bit è `00010010`. Gli zeri iniziali conservano le posizioni dei bit quando si confrontano due ottetti.

La lettura di un indirizzo richiede anche il prefisso. Per esempio, `192.168.4.18/24` e `192.168.4.18/28` riportano lo stesso indirizzo di interfaccia, mentre descrivono due blocchi di dimensione diversa. Il prefisso indica quali bit confrontare per stabilire se un secondo indirizzo appartiene al blocco.
:::

:::definizione{#cidr titolo="Prefisso CIDR"}
La scrittura `/p`, con $0\leq p\leq 32$, indica la lunghezza del **prefisso**. I primi $p$ bit individuano il blocco, quindi gli ultimi $32-p$ possono variare al suo interno. La **maschera** scrive la stessa informazione in $32$ bit, con $p$ uno consecutivi seguiti da zeri.

Per `/26` i primi tre ottetti contengono $24$ bit a uno. Ne rimangono due nel quarto ottetto, il cui valore è $128+64=192$. La maschera è quindi `255.255.255.192`.

Per leggere la maschera si contano prima gli ottetti interamente a uno. Se segue un ottetto parziale, si aggiunge il numero di uno iniziali che contiene. I valori ammessi in una maschera contigua sono $255$ per un ottetto pieno, $128$, $192$, $224$, $240$, $248$, $252$ e $254$ per un ottetto parziale e $0$ per un ottetto interamente a zero.
:::

:::attenzione
Il solo numero di bit a uno è insufficiente per riconoscere una maschera valida. Per esempio, `255.255.250.0` ha il terzo ottetto `11111010`. Compare un uno dopo il primo zero, quindi la maschera non rappresenta un prefisso CIDR. In `255.255.248.0` il terzo ottetto è `11111000`, perciò gli uno sono tutti consecutivi e il prefisso è `/21`.
:::

## Rete e broadcast con l’AND

:::definizione{#rete-broadcast titolo="Rete e broadcast"}
L’**indirizzo di rete** è il primo indirizzo del blocco. Si ottiene applicando l’AND bit a bit tra l’indirizzo IPv4 e la maschera. L’AND vale uno quando entrambi i bit valgono uno, quindi conserva il prefisso e azzera i bit host.

L’ultimo indirizzo del blocco si ottiene ponendo tutti i bit host a uno. In una sottorete ordinaria è l’**indirizzo di broadcast diretto**. Per ricavarlo in decimale si somma all’indirizzo di rete il numero di indirizzi del blocco meno uno, propagando il riporto tra gli ottetti se serve. La somma si riferisce all’indirizzo di $32$ bit.
:::

:::esempio{titolo="AND nell’ottetto parziale"}
Per `192.168.4.70/26` la maschera è `255.255.255.192`, quindi i primi tre ottetti restano invariati. Nel quarto ottetto si ha

```text
IP       01000110   70
Maschera 11000000   192
AND      01000000   64
```

La rete è `192.168.4.64/26`. I sei bit host occupano le ultime sei posizioni. Ponendoli a uno si ottiene `01111111`, pari a $127$. Il broadcast è quindi `192.168.4.127` e gli host utilizzabili vanno da `192.168.4.65` a `192.168.4.126`.

::grafico{xmin=56 xmax=135 ymin=-2 ymax=3 assi=0 vettori="60,0,132,0" punti="64,0,pieno;70,0,pieno;127,0,pieno" segmenti="64,0,64,-0.65;70,0,70,0.65;127,0,127,-0.65" etichette="65,-1.05,64 rete;73,1.15,70 IP;123,-1.05,127 broadcast" titolo="Ultimo ottetto nel blocco 192.168.4.64/26"}
:::

:::osservazione
Un metodo equivalente usa l’ampiezza del blocco nell’ottetto parziale. Se l’ottetto della maschera vale $m$, si parte dai multipli di $256-m$. Con $m=192$ i multipli sono $0$, $64$, $128$ e $192$. Il primo multiplo che supera $70$ è $128$, quindi il blocco che contiene $70$ parte dal multiplo precedente, $64$, e finisce a $127$.

Se il prefisso si interrompe prima del quarto ottetto, si applica lo stesso metodo nell’ottetto in cui si interrompe. Gli ottetti successivi si azzerano per la rete e diventano $255$ per il broadcast.
:::

:::esempio{titolo="Confine nel terzo ottetto"}
Per `172.20.35.200/20` la maschera è `255.255.240.0`. Nel terzo ottetto l’ampiezza è $256-240=16$. Il valore $35$ cade tra $32$ e $47$, quindi il terzo ottetto della rete è $32$ e quello del broadcast è $47$. Poiché il quarto ottetto è interamente host, gli estremi del blocco sono `172.20.32.0` e `172.20.47.255`.

L’indirizzo `172.20.36.0` è interno al blocco. È utilizzabile nella sottorete ordinaria anche se termina in `.0`, perché la rete si riconosce dalla combinazione di tutti i bit host, compresi quelli del terzo ottetto.
:::

:::attenzione
Un indirizzo di interfaccia e un prefisso di rete usano entrambi la barra, con significati diversi. In `192.168.7.199/26`, `192.168.7.199` è un indirizzo interno al blocco. Per scrivere il prefisso che identifica quel blocco occorre allineare i bit host a zero, quindi si scrive `192.168.7.192/26`. Il valore che precede la barra in una tabella di instradamento deve identificare la rete allineata.
:::

:::esempio{titolo="Controllo con Python"}
Un programma può ricevere un indirizzo di interfaccia oppure una voce di tabella, quindi deve sapere quale dei due dati sta leggendo. La funzione `ip_interface` di Python conserva l’IP iniziale e permette di ricavare il blocco corrispondente.

```python
from ipaddress import ip_interface

i = ip_interface("172.20.35.200/20")
print(i.ip)
print(i.network)
print(i.network.broadcast_address)
```

```text
172.20.35.200
172.20.32.0/20
172.20.47.255
```

Per controllare una voce di tabella si può usare `ip_network` con la modalità predefinita `strict=True`. In questa modalità `172.20.35.200/20` solleva `ValueError`, perché alcuni bit host sono a uno. Con `strict=False` il programma azzera quei bit e restituisce `172.20.32.0/20`. La modalità rigorosa serve quando una base scritta nel piano deve essere già allineata.
:::

## Capacità di una sottorete

:::definizione{#host titolo="Capacità di una sottorete"}
Con $h=32-p$ bit host si ottengono $2^h$ indirizzi complessivi. In una sottorete ordinaria con $h\geq2$, il primo indirizzo identifica la rete e l’ultimo è il broadcast. Restano quindi

$$
H=2^h-2
$$

indirizzi utilizzabili, dove $H$ è la capacità del blocco. Per esempio, un `/27` ha $h=5$ e $2^5=32$ indirizzi, di cui $30$ utilizzabili. Se il gateway è un’interfaccia nella stessa LAN, conta come un indirizzo utilizzato insieme a quelli degli altri dispositivi.
:::

:::esempio{titolo="Scelta del prefisso per una LAN"}
Un laboratorio usa $30$ indirizzi per i computer e uno per il gateway. Servono quindi $31$ indirizzi utilizzabili. Con cinque bit host se ne ottengono $30$. Con sei bit host se ne ottengono $62$, quindi il prefisso più lungo adatto è `/26`. Questo confronto distingue il numero di indirizzi del blocco dal numero di quelli assegnabili.
:::

:::definizione{#punto-punto-rotte-host titolo="Collegamenti /31 e rotte /32"}
Su un collegamento **punto-punto** IPv4 configurato con `/31` secondo la convenzione che assegna entrambi gli indirizzi ai due estremi, i due indirizzi sono utilizzabili. Il collegamento ha due interfacce e il broadcast diretto di sottorete non è previsto. Per esempio, `10.7.0.4/31` comprende `10.7.0.4` e `10.7.0.5`, assegnabili uno per estremità.

Una rotta `/32` specifica un solo indirizzo di destinazione. Per esempio, `10.7.0.5/32` corrisponde a `10.7.0.5` e a nessun altro indirizzo. Per questi due casi, il conteggio delle assegnazioni si legge dalla funzione del prefisso, poiché la formula $2^h-2$ si applica alle sottoreti ordinarie.
:::

## Progettare sottoreti con VLSM

:::definizione{#vlsm titolo="Blocchi di lunghezza variabile"}
Il **VLSM** permette di dividere un blocco assegnato in sottoreti con prefissi di lunghezza diversa. Per ogni LAN si calcola il numero di indirizzi richiesto, si trova il blocco minimo che lo contiene e si sceglie una base allineata. Due blocchi assegnati a LAN distinte devono essere disgiunti e interamente contenuti nel blocco padre.

In un blocco `/24` l’ultimo ottetto basta per controllare l’allineamento. Per un `/26` la base deve essere un multiplo di $64$. Se il primo indirizzo libero è `.32`, il primo inizio allineato successivo è `.64`. Rispettare il numero di indirizzi richiesto e rispettare i confini sono due verifiche distinte.
:::

:::esempio{titolo="Tre LAN in un solo blocco"}
Il blocco `192.168.40.0/24` deve ospitare LAN con $58$, $25$ e $9$ interfacce, gateway compresi. Per $58$ interfacce serve un blocco da $64$ indirizzi. Per $25$ ne servono $32$ e per $9$ ne servono $16$. Partendo dai blocchi più grandi, si ottiene questa assegnazione.

- LAN da $58$. `192.168.40.0/26`, da `.0` a `.63`.
- LAN da $25$. `192.168.40.64/27`, da `.64` a `.95`.
- LAN da $9$. `192.168.40.96/28`, da `.96` a `.111`.

I primi tre blocchi consumano $64+32+16=112$ indirizzi complessivi. Il resto va da `.112` a `.255`. Il resto è un intervallo contiguo di $144$ indirizzi. Poiché $144$ non è una potenza di due, l’intervallo non corrisponde a un solo prefisso CIDR. Si può scrivere come due blocchi. Il primo va da `.112` a `.127` e ha prefisso `/28`. Il secondo va da `.128` a `.255` e ha prefisso `/25`. Le due basi sono rispettivamente multipli di $16$ e $128$.

::grafico{xmin=-8 xmax=264 ymin=-1 ymax=3 assi=0 poligoni="0,0 63,0 63,1 0,1;64,0 95,0 95,1 64,1;96,0 111,0 111,1 96,1" etichette="31,1.55,/26;77,1.55,/27;107,2.1,/28;188,0.5,Spazio libero" segmenti="111,0.5,255,0.5;107,1.1,107,1.7" titolo="Ripartizione del blocco /24 in ordine decrescente di capacità"}
:::

:::attenzione
Per due LAN distinte, un secondo blocco ricavato all’interno di uno già assegnato produce indirizzi sovrapposti. Per esempio, `192.168.3.64/26` copre da `.64` a `.127`, quindi è contenuto in `192.168.3.0/25`, che copre da `.0` a `.127`. Un blocco da $64$ indirizzi disgiunto dal primo può iniziare in `.128` o in `.192`.
:::

## Consegna locale e prossimo salto

:::definizione{#gateway titolo="Gateway predefinito"}
Il **prossimo salto** è l’interfaccia a cui viene consegnato il pacchetto sul collegamento corrente. Un host con una rotta direttamente connessa verso la LAN consegna lì i pacchetti destinati agli host di quella LAN. Se la destinazione è esterna e la rotta applicabile indica un router, il prossimo salto è l’interfaccia locale di quel router. Il **gateway predefinito** è il router usato dalla rotta predefinita quando manca una corrispondenza più specifica.

Nella configurazione ordinaria con un’unica LAN Ethernet, il gateway deve essere raggiungibile su quel collegamento. Il fatto che il suo indirizzo abbia i primi tre ottetti uguali a quelli del PC è insufficiente quando il prefisso supera $24$ bit. Per esempio, con `192.168.8.21/28` il blocco va da `.16` a `.31`, quindi il gateway può essere `192.168.8.17` se quell’indirizzo appartiene alla porta del router. L’indirizzo `192.168.8.31` è il broadcast e non può identificare quella porta.
:::

:::esempio{titolo="Due destinazioni, due prossimi salti"}
Il PC `192.168.4.20/24` è connesso a una LAN con gateway `192.168.4.1`. Sono presenti la rotta connessa `192.168.4.0/24` e la predefinita attraverso il gateway.

- Per `192.168.4.85` la rotta connessa corrisponde, quindi l’interfaccia da raggiungere sulla LAN è quella di `192.168.4.85`.
- Per `192.168.5.20` corrisponde la predefinita, quindi l’interfaccia da raggiungere sulla LAN è quella di `192.168.4.1`.

In entrambi i casi, il campo di destinazione IP identifica il destinatario finale. Nel secondo caso il router riceve un frame indirizzato al proprio MAC, quindi può estrarne il pacchetto e consultare la propria tabella.
:::

## ARP e indirizzi del frame

:::definizione{#arp titolo="Risoluzione ARP su Ethernet"}
**ARP** risolve un indirizzo IPv4 di prossimo salto nel corrispondente indirizzo MAC sul collegamento locale. L’host cerca la corrispondenza nella cache ARP. Se manca, trasmette una richiesta ARP in broadcast Ethernet nella LAN. Nella situazione ordinaria, l’interfaccia con l’IP richiesto risponde con il proprio MAC. La corrispondenza permette di preparare il frame successivo.

Se il destinatario IP è esterno alla LAN e il prossimo salto è il gateway, l’IP cercato con ARP è quello del gateway. Una richiesta ARP è locale al dominio di broadcast, quindi cercare l’IP finale nella LAN sarebbe inappropriato quando quell’IP appartiene a una rete raggiungibile attraverso un router.
:::

:::esempio{titolo="Dal pacchetto al frame"}
Il PC `192.168.4.20` vuole raggiungere `192.168.5.20` tramite `192.168.4.1`. Per semplicità si assume che il percorso usi l’instradamento ordinario, senza traduzione degli indirizzi. La cache iniziale è vuota.

1. La scelta della rotta dà `192.168.4.1` come prossimo salto.
2. Il PC trasmette la richiesta ARP per `192.168.4.1` con MAC Ethernet di destinazione `ff:ff:ff:ff:ff:ff`.
3. Dopo la risposta ARP, il PC invia il frame dati al MAC del gateway. Nel pacchetto l’IP di destinazione è ancora `192.168.5.20`.
4. Il router costruisce un nuovo frame per il collegamento di uscita. I MAC dipendono dal nuovo collegamento. Nel modello assunto gli indirizzi IPv4 di origine e destinazione restano gli stessi durante l’inoltro.

::grafico{xmin=0 xmax=10 ymin=0 ymax=5 assi=0 linee="0.7,1.5 2.9,1.5 2.9,3.1 0.7,3.1 0.7,1.5;3.9,1.5 6.1,1.5 6.1,3.1 3.9,3.1 3.9,1.5;7.1,1.5 9.3,1.5 9.3,3.1 7.1,3.1 7.1,1.5" vettori="2.9,2.3,3.85,2.3;6.1,2.3,7.05,2.3" etichette="1.55,2.6,PC;4.5,2.6,Router;7.5,2.6,Host finale;2.9,3.6,Frame 1;6.1,3.6,Frame 2;3.75,0.8,Stessa destinazione IP" titolo="Il router ricrea il frame sul collegamento di uscita"}
:::

## Prefisso più lungo

:::definizione{#prefisso-piu-lungo titolo="Scelta della rotta più specifica"}
Un indirizzo di destinazione corrisponde a una rotta se, dopo l’AND con la maschera della rotta, si ottiene la rete indicata dalla rotta. Se più rotte corrispondono, prevale il **prefisso più lungo**, perché identifica l’insieme più ristretto di destinazioni che comprende l’indirizzo cercato.

La rotta `0.0.0.0/0` corrisponde a tutti gli indirizzi, perché l’AND con la maschera nulla produce sempre zero. Ha lunghezza zero e quindi precedenza inferiore rispetto a ogni prefisso più lungo che corrisponde. Se la tabella manca sia di una rotta specifica sia della predefinita, il router non può inoltrare il pacchetto in base a quella tabella.
:::

:::esempio{titolo="Confronto di tre prefissi"}
Si considerino `10.0.0.0/8` via A, `10.6.0.0/16` via B, `10.6.12.0/24` via D e `0.0.0.0/0` via C.

- Per `10.6.12.90` corrispondono tutte le rotte e il prefisso più lungo è `/24`, quindi si usa D.
- Per `10.6.10.7` il terzo ottetto è $10$ anziché $12$. Restano `/8`, `/16` e `/0`, quindi si usa B.
- Per `10.7.10.7` il secondo ottetto è $7$ anziché $6$, quindi restano `/8` e `/0` e si usa A.
- Per `172.16.2.4` corrisponde solo `/0`, quindi si usa C.

L’ordine in cui sono scritte le rotte dell’esempio è irrilevante. La decisione dipende dai bit del prefisso e dalla sua lunghezza.
:::

:::osservazione
La lunghezza del prefisso separa una corrispondenza specifica da una più generale. Due rotte ugualmente specifiche verso lo stesso blocco richiedono invece un criterio aggiuntivo. Negli esercizi il criterio, per esempio la metrica più bassa, deve essere dichiarato. Se manca, la sola lunghezza del prefisso non determina la scelta tra quelle due rotte.
:::

:::osservazione{#aggregazione titolo="Aggregazione di prefissi"}
Consideriamo due rotte adiacenti che usano lo stesso prossimo salto e nessun’altra voce che possa modificare la scelta nella loro unione. Se i blocchi hanno uguale dimensione e insieme formano un blocco CIDR allineato, si possono sostituire con una sola rotta per quel blocco. Per esempio, `10.6.10.0/24` e `10.6.11.0/24` differiscono nell’ultimo bit del terzo ottetto. Poiché il primo blocco parte dal valore pari $10$ e quello successivo termina al valore $11$, la loro unione è esattamente `10.6.10.0/23`.

I blocchi `10.6.11.0/24` e `10.6.12.0/24` sono consecutivi. Il primo inizia con il terzo ottetto dispari $11$. Nessun `/23` comincia in `.11.0`, quindi le due reti non possono essere descritte insieme con un solo `/23`. Un prefisso aggregato che includesse anche reti estranee cambierebbe l’insieme delle destinazioni inoltrate lungo quella rotta. La verifica dell’allineamento serve a mantenere esattamente la copertura originale.
:::

## Controllare una configurazione

:::esempio{titolo="Maschere discordanti nella stessa LAN"}
Due computer sono sullo stesso segmento Ethernet. A usa `192.168.2.10/24` e B usa `192.168.2.130/25`. A ricava la rete `192.168.2.0/24`, che include l’IP di B. Perciò A considera B raggiungibile direttamente. B ricava la propria rete `192.168.2.128/25`, che esclude l’IP di A, quindi considera A esterno e consulta la tabella per trovare un router.

La decisione di invio si calcola dalla configurazione del mittente. La verifica di entrambi i versi mette in evidenza una maschera incoerente anche se i due indirizzi, presi separatamente, sembrano appartenere allo stesso gruppo.
:::

:::osservazione
Per analizzare un problema di configurazione si può seguire l’ordine delle decisioni prese dall’host. Si ricavano rete e broadcast dall’indirizzo e dal prefisso, quindi si verifica che gli indirizzi dell’host e del gateway siano utilizzabili. Si confronta l’indirizzo di destinazione con le rotte disponibili e si determina il prossimo salto. Solo dopo quella scelta si stabilisce per quale indirizzo IPv4 consultare ARP.

Questo ordine distingue tre problemi diversi. Una maschera errata cambia l’insieme di destinazioni considerate locali. Un gateway fuori dalla rete impedisce, nella configurazione ordinaria, di consegnargli direttamente il frame. Una corrispondenza ARP mancante richiede invece una risoluzione sul collegamento dopo che il prossimo salto è già stato individuato.
:::
