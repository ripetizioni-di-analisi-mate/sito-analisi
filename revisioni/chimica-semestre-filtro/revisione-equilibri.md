# Revisione scientifica indipendente: reazioni, cinetica ed equilibrio

Sono stati letti integralmente tutti i 39 contenuti dell'unità `reazioni-cinetica-equilibrio`: teoria, 10 schede svolte con 20 esercizi, 14 tracce con soluzione e 14 domande con quattro alternative. I contenuti sono stati confrontati con le richieste del BRIEF.

Non sono emersi errori scientifici, risultati numerici errati o quiz con più risposte corrette. I 14 indici `corretta` individuano le risposte attese; le altre tre alternative di ciascun quiz sono false nelle ipotesi dichiarate.

## Controlli eseguiti

- Ricalcolo indipendente in Python di 42 valori intermedi e finali: reagenti limitanti, masse residue, velocità normalizzate, ordini e costanti cinetiche, leggi integrate di ordine zero e primo, tempi di dimezzamento, rapporti di Arrhenius e attivazione, barriere dirette/inverse, costanti termodinamiche, energie libere, composizione di costanti, solubilità e prodotti ionici.
- Verifica indipendente dei coefficienti di sei reazioni, controllando tutti gli atomi e, ove presente, la carica: neutralizzazione del fosforico, precipitazione di idrossido ferrico, combustione dell'etanolo, zinco/acido cloridrico, ossidazione del magnesio e sintesi dell'ammoniaca.
- Confronto delle approssimazioni dello ione comune con le radici positive esatte delle rispettive equazioni quadratiche. Per svolti 10, esercizio 1, la soluzione esatta è circa 1,5999744×10⁻⁷ mol/L contro l'approssimazione 1,6×10⁻⁷; l'errore relativo è circa 1,60×10⁻⁵. Per traccia/quiz 14 la soluzione esatta è circa 9,9999950×10⁻⁹ mol/L contro 1,0×10⁻⁸; l'errore relativo è circa 5,00×10⁻⁷. Entrambe le approssimazioni sono ampiamente giustificate.
- Verifica delle ipotesi: volume costante per le velocità da concentrazione, temperatura/parametri costanti per le leggi integrate, temperature assolute e unità coerenti di R ed energia in Arrhenius, attività e costanti adimensionali per i logaritmi, modello ideale e assenza di reazioni collaterali per la solubilità. La distinzione tra velocità di scomparsa e velocità normalizzata è espressa correttamente.
- Verifica qualitativa di catalisi ed equilibrio, equilibrio/stato stazionario, Q/K e direzione termodinamica, effetto della temperatura sulle reazioni eso/endotermiche, compressione e gas inerte, inversione/somma/moltiplicazione delle reazioni.
- Copertura del BRIEF presente, inclusi teoria degli urti/stato di transizione, enzimi, equilibri multipli, precipitazione/ione comune ed esempi biologici di ossalato e urati. È correttamente distinto il criterio termodinamico di sovrasaturazione dall'effettiva nucleazione.
- Controllo strutturale dei 39 file: conteggi completi, due esercizi per scheda, prime tre schede gratuite, riferimenti alle ancore esistenti e quattro alternative distinte per quiz.

## Un rilievo editoriale puntuale

File: `src/content/svolti/chimica-semestre-filtro/reazioni-cinetica-equilibrio/2.md`, traccia dell'Esercizio 2.

La frase «Si ossidano completamente 4,8 g di magnesio con 2,4 g di ossigeno» può suggerire il consumo di tutto il magnesio. L'ossigeno è invece limitante e i risultati corretti riportano 1,2 g di magnesio residuo. Non è un errore nei calcoli; conviene eliminare l'ambiguità nella traccia.

Sostituzione proposta: «Si fanno reagire 4,8 g di magnesio con 2,4 g di ossigeno fino al consumo del reagente limitante, secondo ...». Il resto della traccia e dello svolgimento resta valido.

Non sono stati modificati i contenuti revisionati; l'eventuale correzione è lasciata all'integrazione.
