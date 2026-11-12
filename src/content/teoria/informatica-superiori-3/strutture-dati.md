---
titolo: "Array, matrici e strutture dati"
sommario: "Organizzare misure in righe, colonne e record."
---

## Organizzare una griglia

:::definizione{#matrici titolo="Righe, colonne e indici"}
Una matrice rappresenta dati su due dimensioni. Una lista di liste in Python consente di leggere prima la riga, poi la colonna con `m[r][c]`. Per elaborare tutte le celle si possono annidare due cicli.
:::

## Organizzare dati eterogenei

:::definizione{#record titolo="Record e campi"}
Un record raggruppa campi relativi a un’entità. Una rilevazione può contenere data, temperatura e identificativo del sensore. Una collezione di record consente di filtrare per uno dei campi.
:::

## Scegliere un’aggregazione

:::definizione{#aggregazione titolo="Totali per riga e per colonna"}
Per ottenere un totale per riga si azzera l’accumulatore a ogni nuova riga. Per il totale di una colonna si mantiene fisso l’indice di colonna e si scorre quello di riga.
:::
