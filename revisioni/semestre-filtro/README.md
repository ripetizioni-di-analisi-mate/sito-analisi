# Revisione delle materie del Semestre Filtro

Incarico del 15 novembre 2026: rifare Biologia, Chimica e propedeutica biochimica e Fisica. Matematica è approvata e resta invariata. Il lavoro è separato dalla produzione: questo ramo non pubblica il sito.

## Biologia: materiale revisionato e verificato

Le sette unità sono state riscritte e tradotte integralmente. Per ciascuna lingua: 7 teorie, 70 schede con 140 esercizi svolti, 98 tracce con soluzione ragionata e 630 domande a tempo. Sono presenti 54 figure scientifiche, ciascuna localizzata in italiano e inglese (108 SVG). Le figure sono utilizzate nella teoria e negli esercizi pertinenti.

Ogni capitolo è stato letto integralmente da un verificatore distinto dall'autore, comprese tutte le alternative e tutte le spiegazioni dei quiz. I rapporti nella cartella `biologia-semestre-filtro` documentano fonti, calcoli indipendenti, correzioni e controlli visivi effettivamente eseguiti.

| Capitolo | Autore | Verificatore indipendente |
| --- | --- | --- |
| Organizzazione biologica | bio_organizzazione | bio_segnalazione |
| Genoma e cromatina | bio_genoma | bio_flusso |
| Flusso dell'informazione | bio_flusso | bio_organizzazione |
| Genetica e mutazioni | bio_genetica | bio_strutture |
| Strutture cellulari | bio_strutture | bio_genetica |
| Segnalazione cellulare | bio_segnalazione | bio_genoma |
| Ciclo cellulare | coordinatore | bio_segnalazione |

Le revisioni hanno corretto ipotesi mancanti negli esperimenti, inferenze troppo forti, distinzioni fra DNA e cromosomi, permeabilità nei modelli osmotici e numerosi distrattori poco plausibili. Eliminati quesiti che ripetevano lo stesso algoritmo cambiando soltanto contesto. In ogni capitolo la distribuzione delle risposte corrette è 23/23/22/22, in ordine non ciclico e identico fra le lingue. Le permutazioni conservano il testo della risposta corretta.

## Controlli coordinati eseguiti

- Renderer del sito su tutti i 1.610 Markdown: 1.444 formule valide, zero errori di struttura, direttive, immagini, ancore, collegamenti e metadati funzionali bilingui. L'unico avviso è la mediana di 34 parole nelle spiegazioni inglesi del ciclo cellulare: le spiegazioni sono state verificate senza aggiungere testo superfluo.
- Build Astro del perimetro italiano e inglese: 556 pagine costruite correttamente. È stata usata la configurazione reale con filtro delle rotte, perché il semplice `SOLO_MATERIE` include anche rotte estranee con dipendenze da altre materie. Nessuna modifica al codice produttivo per aggirare questa limitazione.
- Verifica degli HTML finali: lingua, canonical e alternate IT/EN; tutti i 119 asset locali referenziati presenti; 572 collegamenti alle ancore della teoria verificati.
- Verifica dei JSON realmente utilizzati dai quiz: 630 domande per lingua, quattro alternative non vuote, indici allineati ai sorgenti e nessun elenco numerato annidato nelle risposte.
- Conservate tutte le ancore originali e gli identificatori. Accessi, prezzi e quantità non modificati. Hash dei 904 file di Matematica del Semestre Filtro identici alla base.
- Tutti gli SVG sono stati renderizzati e ispezionati a larghezza mobile e desktop, con correzione delle etichette individuate dai verificatori.

Il controllo interattivo delle pagine complete nel browser non è stato completato: il browser locale non si avvia nell'ambiente disponibile e la superficie browser collegata ha rifiutato l'anteprima locale in formato data URL. La validazione HTML, la build e l'ispezione degli SVG non vengono presentate come un test interattivo. La build dell'intero sito, oltre al perimetro della materia, rimane da eseguire nella pipeline completa prima della pubblicazione.

## Chimica e propedeutica biochimica: materiale revisionato e verificato

Le sette unità sono complete in italiano e inglese: per lingua 7 teorie, 70 schede con 140 esercizi svolti, 98 tracce aperte con soluzione e 630 domande spiegate. Le 69 figure scientifiche sono localizzate nelle due lingue (138 SVG). Sono conservate tutte le 126 ancore originali; i decimali inglesi usano il punto con valori invariati.

| Capitolo | Autore | Verificatore indipendente |
| --- | --- | --- |
| Atomo, legami e termodinamica | bio_organizzazione | bio_genetica |
| Soluzioni e proprietà colligative | bio_flusso | bio_strutture |
| Reazioni, cinetica ed equilibrio | bio_genoma | bio_flusso |
| Acidi, basi e redox | coordinatore | bio_flusso |
| Carbonio e stereochimica | bio_genetica | bio_segnalazione |
| Gruppi funzionali | bio_strutture | bio_organizzazione |
| Biomolecole | bio_segnalazione | bio_genoma |

La revisione ha precisato ipotesi di idealità, attività e concentrazione, condizioni dei tamponi, differenza fra cinetica e termodinamica, valenze e stereochimica, selettività dei meccanismi e casi biochimici. Le tracce sono richieste aperte autonome. Tutti i quiz sono stati letti nelle due lingue, con controllo di ciascuna alternativa e spiegazione; le chiavi 23/23/22/22 sono identiche fra lingue e non cicliche. Il confronto trasversale non ha segnalato coppie di enunciati quasi duplicati dopo normalizzazione numerica.

Controlli coordinati conclusi:

- Renderer reale su 1.610 Markdown e **8.518 formule**: zero errori e zero avvisi.
- Build Astro del perimetro completo della materia: **566 pagine** costruite correttamente.
- HTML finali: lingua, canonical e alternate corretti; **149 asset locali** e **792 collegamenti ad ancore** verificati.
- JSON dei quiz: **630 domande IT e 630 EN**, quattro alternative non vuote, indici corrispondenti ai sorgenti e nessun elenco numerato annidato.
- Confronto numerico delle 805 coppie di file: nessuna discrepanza irrisolta; controllate anche le differenze di notazione dei locanti chimici e dei numeri scritti in lettere.
- Tutti i 138 SVG renderizzati e ispezionati a larghezza mobile e desktop; i rapporti di capitolo documentano le correzioni.
- I 904 file di Matematica del Semestre Filtro conservano gli hash della base. Prezzi, accessi e struttura del catalogo non modificati.

I risultati sintetici riproducibili del renderer e del controllo delle pagine sono conservati nei file verifiche-biologia.json e verifiche-chimica.json. Per entrambe le materie resta il limite del collaudo interattivo nel browser descritto sopra; la verifica completa della pipeline del sito sarà eseguita sul risultato finale delle tre materie, senza pubblicazione.

## Fisica: in lavorazione

È in corso il rifacimento delle sette unità, con teoria approfondita, svolgimenti ragionati, figure quantitative, quiz distinti, inglese completo e verificatore diverso dall'autore. Non è ancora dichiarato concluso da questo rapporto.

Riferimenti del programma: [Biologia MUR 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf), [Chimica e propedeutica biochimica](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus%20Chim.Prop_.Bioch_.%20-%20finale-%202026.pdf) e [Fisica](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf). Le fonti scientifiche specifiche sono riportate nei rapporti dei capitoli.
