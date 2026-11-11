---
titolo: "Internet, TCP e UDP, DNS e Web"
sommario: "Dal nome del sito alla risposta HTTP, attraverso i servizi di rete e il trasporto."
---

## Organizzare i livelli

:::definizione{#modelli titolo="Modello TCP/IP e modello OSI"}
Nel modello TCP/IP si distinguono applicazione, trasporto, Internet e accesso alla rete. Il modello OSI descrive sette livelli con una suddivisione diversa. In ordine dal più vicino all’utente al più vicino al mezzo fisico, i livelli OSI sono i seguenti.

| Livello OSI | Compito |
| --- | --- |
| 7. Applicazione | Fornisce servizi di comunicazione alle applicazioni, per esempio HTTP. |
| 6. Presentazione | Riguarda il formato e la rappresentazione dei dati. |
| 5. Sessione | Riguarda l’apertura, la gestione e la chiusura del dialogo. |
| 4. Trasporto | Gestisce lo scambio fra processi. TCP e UDP operano a questo livello. |
| 3. Rete | Indirizza e instrada i pacchetti. IP opera a questo livello. |
| 2. Collegamento | Gestisce i frame sul singolo collegamento. |
| 1. Fisico | Trasmette i bit sotto forma di segnali. |

TCP/IP raccoglie nell’applicazione le funzioni dei livelli superiori OSI. Ethernet comprende funzioni di collegamento e specifiche fisiche.
:::

## Identificare il servizio

:::definizione{#porte titolo="Porte di trasporto"}
Una **porta** è un numero nell’intestazione TCP o UDP. Permette al sistema di consegnare i dati al servizio giusto. Due connessioni a un server sulla stessa porta possono avere indirizzi o porte sorgenti diversi.
:::

## Confrontare i trasporti

:::definizione{#tcp-udp titolo="TCP e UDP"}
TCP consegna all’applicazione un flusso ordinato di byte e ritrasmette i dati persi finché la connessione funziona. UDP trasporta datagrammi senza garantire consegna, ordine o assenza di duplicati. Un’applicazione basata su UDP può aggiungere le garanzie che le servono.
:::

## Risolvere un nome

:::definizione{#dns titolo="Sistema DNS"}
Il **DNS** associa nomi e dati. Un record A contiene un indirizzo IPv4 e un record AAAA un IPv6. Un resolver può usare una risposta in cache per la sua durata residua, il TTL. DNS e Web sono due servizi distinti.
:::

## Interpretare la risposta Web

:::definizione{#http-https titolo="HTTP e HTTPS"}
In **HTTP** il client invia richieste e il server restituisce risposte. `200` indica successo, `404` una risorsa non trovata. **HTTPS** protegge il traffico HTTP con TLS. L’identità del server viene verificata attraverso il certificato e il nome richiesto. Un sito servito via HTTPS può comunque pubblicare informazioni false.
:::

## Ottenere i parametri di rete

:::definizione{#dhcp titolo="Configurazione DHCP"}
**DHCP** può assegnare in automatico indirizzo, maschera, gateway e resolver DNS. Il dispositivo mantiene l’indirizzo per la durata del lease e può rinnovarlo. DHCP configura il dispositivo. Il DNS risponde alle richieste sui nomi.
:::
