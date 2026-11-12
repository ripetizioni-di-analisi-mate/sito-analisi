---
titolo: "SQL, aggregazioni e modifiche"
sommario: "Calcolare riepiloghi e modificare righe in modo controllato."
---

## Raggruppare le righe

:::definizione{#gruppi titolo="GROUP BY e funzioni di aggregazione"}
`GROUP BY` riunisce righe con gli stessi valori delle colonne di raggruppamento. `COUNT(*)` conta le righe e `AVG` calcola la media dei valori non nulli nella colonna scelta.
:::

## Distinguere i filtri

:::definizione{#having titolo="WHERE e HAVING"}
`WHERE` filtra le righe prima dell’aggregazione. `HAVING` filtra i gruppi formati, ad esempio con `HAVING COUNT(*) >= 3`.
:::

## Aggiornare la tabella

:::definizione{#modifiche titolo="INSERT, UPDATE e DELETE"}
`INSERT` aggiunge righe. `UPDATE` modifica le righe selezionate. `DELETE` le rimuove. Una clausola `WHERE` in `UPDATE` limita le righe interessate al criterio indicato.
:::
