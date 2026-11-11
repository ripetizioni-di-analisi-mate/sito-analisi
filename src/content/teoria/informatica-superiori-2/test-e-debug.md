---
titolo: "Test, casi limite e correzione degli errori"
sommario: "Progettare casi di prova e interpretare risultati inattesi."
---

## Separare gli errori

:::definizione{#errori titolo="Sintassi, esecuzione e logica"}
Una sintassi invalida impedisce di interpretare il programma. Una divisione per zero può produrre un errore durante l’esecuzione. Un risultato sbagliato ottenuto da un programma che termina può essere un errore logico.
:::

## Specificare i casi

:::definizione{#casi titolo="Dati di prova"}
Un caso di prova associa input e risultato atteso. Per una soglia a 18 anni sono utili i valori 17, 18 e 19. Il valore 18 distingue i confronti stretto e inclusivo.
:::

## Individuare il primo scarto

:::definizione{#debug titolo="Traccia di esecuzione"}
Per localizzare un errore si osservano i valori intermedi e si cerca il primo punto in cui divergono da quelli attesi. Un valore sbagliato alla fine può dipendere da un errore avvenuto molto prima.
:::
