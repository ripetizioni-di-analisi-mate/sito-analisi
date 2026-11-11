---
titolo: "Reti di computer, Ethernet e modelli a livelli"
sommario: "Come viaggiano i dati tra computer e come distinguere frame, pacchetti e collegamenti."
---

## Classificare una rete

:::definizione{#lan-wan titolo="LAN e WAN"}
Una **LAN** collega dispositivi in un’area circoscritta, come un laboratorio. Una **WAN** collega reti su distanze maggiori. Un istituto può avere più LAN e collegarle attraverso una WAN.
:::

## Leggere la topologia

:::definizione{#topologia titolo="Topologia a stella"}
In una **topologia a stella** ogni terminale ha un collegamento con un nodo centrale. Se si scollega un terminale, gli altri mantengono il proprio collegamento. Se si spegne il nodo centrale, tutti perdono il collegamento che passava da quel nodo.
:::

## Distinguere le unità di dati

:::definizione{#incapsulamento titolo="Incapsulamento"}
Ogni livello aggiunge le informazioni che servono al proprio compito. Su Ethernet un segmento TCP è contenuto in un pacchetto IP, che a sua volta è contenuto in un **frame**. Sul mezzo fisico si trasmette una sequenza di bit.
:::

## Seguire un frame

:::definizione{#switch-mac titolo="Switch e indirizzi MAC"}
Uno **switch Ethernet** apprende la porta di un dispositivo leggendo il MAC sorgente dei frame ricevuti. Usa il MAC destinazione per scegliere l’uscita. Se la destinazione unicast è sconosciuta, inoltra il frame sulle altre porte della stessa rete locale virtuale.
:::

## Collegare reti diverse

:::definizione{#router-ip titolo="Router e livello di rete"}
Un **router** inoltra un pacchetto verso un’altra rete basandosi sulla destinazione IP. Su un nuovo tratto Ethernet usa un nuovo frame. In assenza di NAT, gli indirizzi IP sorgente e destinazione restano gli stessi.
:::

## Stimare il tempo di invio

:::definizione{#tempo-trasmissione titolo="Trasmissione e propagazione"}
Il tempo di trasmissione è la dimensione in bit divisa per il tasso in bit al secondo. Il tempo di propagazione è la distanza divisa per la velocità del segnale. Un messaggio di $12\,000$ bit richiede $2$ ms per essere immesso su un collegamento a $6$ Mbit/s.
:::
