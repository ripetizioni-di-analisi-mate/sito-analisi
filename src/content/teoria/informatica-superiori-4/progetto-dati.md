---
titolo: "Progetto di laboratorio con basi di dati"
sommario: "Dal modello al controllo del risultato con un archivio di misure."
---

## Definire il significato delle righe

:::definizione{#schema titolo="Schema di un archivio di laboratorio"}
La tabella Sensori descrive gli strumenti. La tabella Misure registra sensore, istante e valore. Separare queste tabelle consente di aggiornare le informazioni del sensore in un solo punto.
:::

## Ridurre dati ripetuti

:::definizione{#duplicati titolo="Vincoli sulle misure"}
Se ogni sensore può registrare una sola misura per istante, la coppia sensore e istante deve essere univoca. Il vincolo permette al sistema di segnalare una seconda riga per la stessa misurazione.
:::

## Controllare il risultato

:::definizione{#controllo titolo="Confronto con un calcolo manuale"}
Un insieme piccolo di dati consente di verificare a mano filtri, conteggi e medie. Se una query su due sensori produce un solo gruppo, si controlla prima quali righe sopravvivono alle condizioni di selezione.
:::
