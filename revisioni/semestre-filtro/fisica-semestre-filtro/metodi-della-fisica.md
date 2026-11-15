# Metodi della fisica — rapporto di autore

Autore: `bio_genoma`. Data: 15 novembre 2026. Ambito: `fisica-semestre-filtro/metodi-della-fisica`, italiano e inglese. La revisione indipendente è assegnata a `bio_strutture`; questo rapporto distingue i controlli dell’autore dal suo giudizio finale.

## Materiale consegnato

| Materiale | Italiano | Inglese |
| --- | ---: | ---: |
| Teoria | 1 | 1 |
| Sezioni della teoria | 8 | 8 |
| Parole della teoria, conteggio del validatore | 3.390 | 3.230 |
| Schede svolte | 10 | 10 |
| Esercizi svolti | 20 | 20 |
| Tracce autonome con soluzione | 14 | 14 |
| Quiz con quattro opzioni | 90 | 90 |
| Figure SVG originali | 15 | 15 |
| Figure nella teoria | 8 | 8 |

Totale: 230 Markdown e 30 SVG. Sono mantenuti gli ID numerici e tutte le 11 ancore originali: `programma`, `grandezze`, `conversioni`, `notazione`, `dimensioni`, `estensive-intensive`, `grafici`, `trigonometria`, `componenti`, `operazioni-vettori`, `prodotti-vettori`. Le sole schede gratuite sono 1–3. Nessun catalogo, prezzo, codice condiviso o capitolo diverso è stato modificato dall’autore in questo incarico.

## Copertura e interventi didattici

La teoria sviluppa l’intera unità 1 MUR: significato di grandezza, valore numerico e unità; SI e conversioni con prefissi elevati a potenza; notazione scientifica, ordini di grandezza e cifre significative; controllo dimensionale; grandezze estensive e intensive; formule inverse, pendenze e aree; trigonometria, gradi e radianti; componenti, somma, differenza e prodotti dei vettori. Tutta la prosa estesa è contenuta nei blocchi previsti dalla guida.

Sono esplicitati alcuni passaggi che il materiale iniziale lasciava impliciti: definizione e realizzazione delle unità; conversione simultanea di valore e incertezza; differenza fra condizione dimensionale necessaria e legge fisica dimostrata; modello additivo e stato fissato per le grandezze estensive; equazioni fra grandezze ed equazioni fra valori numerici; proporzionalità diretta rispetto a relazione affine; area con segno rispetto a distanza; quadrante rispetto al solo valore dell’arcotangente; ordine del prodotto vettoriale e significato del braccio della forza.

Le prime sei schede conservano i casi validi iniziali, ampliando ragionamento, sostituzioni, interpretazione e controlli. Le schede 7–10 sviluppano divisione e unione di campioni, componenti rispetto all’asse scelto, versori, lettura di grafici e angoli. Ogni esercizio ha un solo blocco `spiegazione`, dopo lo svolgimento. Le 14 tracce sono autosufficienti e contengono una soluzione ragionata.

I primi 14 quiz conservano il nucleo scientifico valido, con spiegazioni e ordine delle alternative rivisti; i restanti 76 sono stati riscritti. Il repertorio comprende conversioni con parentesi e potenze, cancellazione diretta delle unità, qualità di una misura, dati insufficienti, ricostruzione del quadrante, cambiamento degli assi, proprietà generali dei prodotti, condizioni di massimo, bracci, segni delle aree, media temporale e inversione di una potenza. I distrattori sono costruiti sul medesimo problema: fattore inverso, segno, potenza, quadrante, ipotesi o quantità fisica confusa. Non sono serie ottenute sostituendo soltanto i numeri.

Le chiavi sono distribuite 23/23/22/22, con seed `2026111501`, stessa permutazione IT/EN e al massimo tre risposte uguali consecutive. Non vi sono alternative testualmente duplicate. Le spiegazioni ricostruiscono il ragionamento e indicano un errore pertinente.

## Figure

Le 15 coppie rappresentano: volume di un cubo e prefissi; scala logaritmica; retta massa-volume; due grafici posizione-tempo; due grafici velocità-tempo con aree; circonferenza unitaria; somma punta-coda; quadrante di uno spostamento; percorso a due tratti; risultante di tre forze; proiezione e parallelogramma; lavoro di una forza inclinata; braccio perpendicolare.

Le scale cartesiane dei diagrammi vettoriali sono uniformi. Il disegno di lavoro dichiara scale separate per frecce di grandezze diverse. I grafici degli svolti impiegano i dati dei rispettivi esercizi. Sono state corrette tre interferenze di impaginazione segnalate dal revisore preliminare: spigolo superiore del cubo, etichette nella figura del momento e unità nella didascalia della somma. Nella scala logaritmica la didascalia precisa che distanze uguali corrispondono a rapporti uguali.

Tutti i 30 SVG sono stati renderizzati a 390 e 780 px; l’autore ha ispezionato tutte le 60 rese finali. Testi, etichette e separatori decimali sono localizzati. Le geometrie delle due lingue coincidono.

## Fonti primarie e istituzionali consultate

- [MUR, Syllabus Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf), unità 1: perimetro del programma.
- [BIPM, SI Brochure, nona edizione](https://www.bipm.org/en/si-brochure-9), versione 4.01 del giugno 2026: quantità, unità di base e derivate, radiante e tabella delle unità non SI.
- [BIPM, aggiornamento del 4 giugno 2026](https://www.bipm.org/en/-/2026-06-04-updated-si-brochure-clarifies-the-status-of-non-si-units): il litro è descritto come unità non SI equivalente al decimetro cubo, senza riproporre il precedente status speciale di unità “accettata”.
- [NIST, SP 330, sezione 2](https://www.nist.gov/pml/special-publication-330/sp-330-section-2): dimensione uno del radiante, definizione geometrica, simboli e distinzione fra grandezze con le stesse dimensioni, in particolare lavoro e momento.

Testi, esempi, esercizi, quiz e figure sono originali. Le fonti istituzionali sono utilizzate per definizioni, convenzioni e copertura, senza riproduzioni estese.

## Controlli dell’autore

Artefatti di lavoro: `/workspace/scratch/e665c34d8d52/qa/fisica-semestre-filtro/metodi-della-fisica/`.

- `author-check.json`: 187 ricalcoli numerici, dimensionali e geometrici passati. Comprendono i risultati delle 20 soluzioni svolte, delle 14 tracce, dei quiz quantitativi, discriminazioni dei distrattori e coordinate SVG. Il ricalcolo è separato dagli script di composizione.
- Confronto integrale di 115 coppie: 909 espressioni matematiche per lingua, identiche dopo normalizzazione dei separatori decimali e delle tre etichette testuali matematiche tradotte (`auto/car`, `bici/bike`, `orizz/horizontal`). Preservati condizioni, numeri, ancore, ordine delle opzioni e chiavi.
- Verificati quantità, due spiegazioni per scheda, gratuità, esistenza degli asset, collegamenti alle ancore, distribuzione delle chiavi e massimo delle ripetizioni consecutive. Nessun `:::percorso`, nessuna frazione `\frac`, nessun rapporto matematico scritto con barra obliqua fuori dalle unità. Opzioni numeriche isolate in LaTeX.
- `validation.json`: `node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro metodi-della-fisica` ha reso 230 file e 1.818 formule, senza errori o avvisi. HTML prodotti nella cartella `html/`.
- Tutti i file Markdown sono normalizzati a un solo fine riga finale; `git diff --check` sul perimetro è passato.

Durante la lettura preliminare indipendente sono state integrate precisazioni scientifiche e linguistiche effettive: componenti moltiplicate per `c` e modulo per `|c|`; unità dei prodotti scalari con il momento; conversioni con incertezza; rapporto fra estensive e massa al quadrato; proprietà dei prodotti valide per ogni coppia di vettori; caso di posizione nulla nel momento; verso positivo nel calcolo della velocità media. I ricalcoli e il giudizio finale del revisore restano distinti da quelli dell’autore.

Non sono state eseguite build Astro, commit o pubblicazione dall’autore. La validazione globale e la pubblicazione sono coordinate dall’agente principale dopo la revisione indipendente. Gli script iniziali di composizione sono materiale intermedio: non rigenerare i Markdown o gli SVG da essi, perché le correzioni finali sono nei file consegnati.

## Revisione indipendente completa

Revisore: `bio_strutture`, distinto dall’autore. Completata il 15 novembre 2026 sulla versione congelata dall’autore. La lettura preliminare è stata svolta su copie con hash, senza scritture concorrenti: i rilievi sono stati comunicati all’autore, applicati da lui e poi verificati dal revisore. Il confronto conclusivo non rileva alcuna differenza fra i 230 Markdown congelati e le ultime copie lette, né fra i 30 SVG congelati e quelli ispezionati visivamente.

Sono stati letti integralmente tutti i 230 Markdown: teoria, 20 esercizi svolti, 14 tracce e 90 quiz in ciascuna lingua, compresi metadati, alternative, spiegazioni e collegamenti. La copertura è stata confrontata con l’unità 1 del syllabus MUR. Sono state controllate tutte le 30 sorgenti SVG, le geometrie, le scale, i valori e le etichette nelle due lingue; tutte le 60 rese a 390 e 780 px sono state ispezionate, comprese le nuove rese delle figure corrette.

### Correzioni verificate

- Nella teoria italiana le componenti sono moltiplicate per `c`, il modulo per `|c|`; la descrizione del litro è coerente con BIPM 4.01. Il rapporto di due estensive è spiegato nel modello additivo a stato fissato, distinguendolo da espressioni con massa al quadrato.
- Nella scheda 6 sono state aggiunte le unità dei prodotti scalari con il momento. Nelle tracce 3 e 4 anche i membri intermedi delle conversioni contengono unità coerenti; nella traccia 10 il risultato finale rispetta le due cifre significative del raggio. Il titolo della traccia 13 distingue il tipo di angolo dal segno del prodotto scalare.
- Nei quiz 10, 15, 23, 24 e 26 sono state precisate la traduzione dei cateti, la positività della lunghezza, la cancellazione diretta delle unità e la conversione dell’incertezza, sostituendo distrattori troppo facili. Nei quiz 43, 65, 72, 75, 77 e 90 sono stati chiariti il carattere non estensivo di `m²`, la validità generale delle identità vettoriali, la distinzione fra quattro alternative, la doppia ortogonalità, il caso `r=0` e il verso positivo della velocità media. Nessuna chiave corretta è cambiata.
- Nelle figure sono stati eliminati l’incrocio fra spigolo del cubo e didascalia e quello fra etichette e retta d’azione; sono state completate le unità della somma vettoriale. È stata ricontrollata la didascalia della scala logaritmica, che collega distanze uguali a rapporti uguali.
- Sono stati letti e verificati anche gli ultimi tre esempi teorici, i 38 nuovi titoli di blocco e tutti i cambiamenti di prosa. I 44 gruppi distinti di modifiche matematiche, normalizzati soltanto per notazione e lingua, sono stati confrontati prima e dopo: le frazioni `\dfrac` conservano precedenza e significato; le modifiche scientifiche sono quelle sopra descritte. Tutta la prosa teorica estesa è nei blocchi e le 11 ancore originali restano valide.

### Risultati dei controlli indipendenti

Artefatti in `/workspace/scratch/e665c34d8d52/qa/fisica-semestre-filtro/metodi-della-fisica/reviewer-bio_strutture/`:

| Controllo | Esito |
| --- | --- |
| `ricalcoli.py` e `ricalcoli.json` | 250 verifiche numeriche, simboliche, dimensionali e di unicità delle alternative quantitative, tutte passate; dati trascritti dal materiale, senza usare gli script di calcolo dell’autore |
| `figure-checks.py` e `figure-checks.json` | 57 verifiche indipendenti delle geometrie, delle scale e della parità IT/EN, tutte passate |
| `parita.py` e `parita.json` | 4.344 verifiche strutturali, di contenuto matematico, metadati, ancore e formato, tutte passate |
| `independent-quiz-keys.json` e `quiz-coverage.json` | 90 risposte ricavate indipendentemente e 90 obiettivi di ragionamento distinti; corrispondenza con tutti i 180 indici IT/EN |
| `quiz-final-review.json` | Seed riprodotto, distribuzione 23/23/22/22, sequenza non ciclica, massimo tre chiavi uguali consecutive; nessun richiamo a lettere o posizioni nelle spiegazioni |
| `freeze-comparison.json` e `last-difference-review.json` | Nessuna modifica successiva alla lettura e all’ispezione delle figure rimasta da verificare |
| `validator.json` | 230 file e 1.818 formule resi dal validatore condiviso, zero errori e zero avvisi; 8 figure effettive per teoria e 30 SVG complessivi |

Per ogni quiz sono state controllate tutte le alternative e la loro traduzione, non soltanto la chiave. I distrattori rimasti rappresentano errori pertinenti di unità, segno, operazione o ipotesi; non sono emerse seconde risposte corrette o alternative equivalenti. Le somiglianze testuali più alte riguardano operazioni diverse: somma rispetto a differenza, massimo del prodotto scalare rispetto a quello vettoriale, prodotto scalare rispetto a componente del prodotto vettoriale. La risposta corretta è l’unica più lunga in 17 quiz italiani e 16 inglesi su 90, senza un indizio sistematico di lunghezza.

Le 115 coppie conservano lo stesso contenuto matematico, inclusa la molteplicità delle espressioni, dopo normalizzazione dei separatori decimali e delle etichette tradotte. Tre differenze nell’ordine delle formule sono state lette: dipendono soltanto dall’ordine delle parole nella teoria e nelle schede 2 e 6. I blocchi di formule esposte coincidono. L’inglese usa il punto decimale e i collegamenti localizzati.

Il revisore ha consultato direttamente il syllabus MUR fornito e la SI Brochure BIPM 4.01, inclusi i capitoli su unità, prefissi e unità non SI. Non sono stati riscontrati difetti scientifici o editoriali residui nel perimetro verificato. Il capitolo è congelato per il controllo complessivo del coordinatore; la revisione non include build o pubblicazione.
