---
titolo: "Indirizzamento IPv4, subnetting e gateway"
sommario: "Prefissi CIDR, intervalli di indirizzi, scelta del gateway e instradamento."
---

## Scomporre un indirizzo

:::definizione{#ipv4 titolo="Indirizzo IPv4"}
Un indirizzo **IPv4** ha $32$ bit e si scrive con quattro ottetti decimali. Ogni ottetto può assumere valori da $0$ a $255$. In `192.168.4.18`, `18` è l’ultimo ottetto.
:::

## Leggere un prefisso

:::definizione{#cidr titolo="Prefisso CIDR"}
La scrittura `/p` indica che i primi $p$ bit appartengono al **prefisso** della rete. La maschera ha $p$ bit a uno seguiti da zeri. `/26` corrisponde a `255.255.255.192` perché `11000000` vale $192$.
:::

## Trovare rete e broadcast

:::definizione{#rete-broadcast titolo="Rete e broadcast"}
Azzerando i bit host si ottiene l’indirizzo di rete. Ponendoli tutti a uno si ottiene il broadcast. Per `192.168.4.70/26` il blocco va da `192.168.4.64` a `192.168.4.127`. Gli indirizzi host vanno da `.65` a `.126`.
:::

## Contare gli indirizzi

:::definizione{#host titolo="Capacità di una sottorete"}
Un blocco con prefisso `/p` contiene $2^{32-p}$ indirizzi. Per le sottoreti ordinarie fino a `/30` si sottraggono rete e broadcast. Un `/27` contiene $32$ indirizzi e offre $30$ host utilizzabili. `/31` e `/32` hanno impieghi specifici.
:::

## Inviare fuori dalla sottorete

:::definizione{#gateway titolo="Gateway predefinito"}
Se il destinatario è nella rete locale, il mittente può consegnare il frame direttamente dopo averne risolto il MAC. Per un destinatario esterno senza una rotta più specifica invia il frame al MAC del **gateway predefinito**. L’IP di destinazione rimane quello finale.
:::

## Scegliere una rotta

:::definizione{#prefisso-piu-lungo titolo="Prefisso più lungo"}
Se più rotte corrispondono allo stesso indirizzo, prevale quella con il prefisso più lungo. `10.4.2.9` appartiene sia a `10.4.0.0/16` sia a `10.4.2.0/24`. La rotta `/24` è più specifica. La rotta predefinita `/0` corrisponde a qualsiasi indirizzo.
:::
