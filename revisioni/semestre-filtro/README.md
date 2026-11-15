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

## Prossime materie

Chimica e Fisica seguono lo stesso processo: copertura del programma ufficiale, svolgimenti ragionati, figure precise, quiz distinti, inglese completo e verifica indipendente. I relativi contenuti sono in lavorazione; non sono dichiarati conclusi da questo rapporto.

Riferimento del programma: [syllabus ufficiale MUR di Biologia 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf). Le fonti scientifiche specifiche sono riportate nei rapporti dei singoli capitoli.
