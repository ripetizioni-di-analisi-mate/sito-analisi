# Meccanica — rapporto di autore e verifica indipendente

Autore: `bio_organizzazione`. Data: 15 novembre 2026. Materiale completo in italiano e inglese; la verifica indipendente è affidata al coordinatore `root`, distinto dall’autore. La produzione e la revisione indipendente sono entrambe concluse; i rispettivi controlli sono distinti nelle sezioni seguenti.

## Materiale e copertura

Sono presenti 115 Markdown per lingua: una teoria, dieci schede con 25 esercizi svolti, quattordici tracce autonome con soluzione ragionata e novanta quiz. La teoria ha dieci sezioni e conserva tutte le dieci ancore precedenti: `cinematica`, `moti-rettilinei`, `moti-nel-piano`, `newton`, `forze`, `lavoro-energia`, `energia-meccanica`, `quantita-di-moto`, `centro-di-massa`, `leve`.

La copertura segue tutti i punti dell’unità 2 MUR. Cinematica: riferimenti, posizione, traiettoria, spostamento e distanza, velocità vettoriale e rapidità, grafici e loro aree, moti uniformi e uniformemente accelerati, caduta, proiettili e moto circolare. Dinamica: riferimenti inerziali, tre principi, diagramma di corpo libero, gravità, normale, attrito statico e dinamico, fili e molle. Energia: lavoro costante e variabile, potenza e rendimento, teorema dell’energia cinetica, potenziali, conservazione e dissipazione. Sistemi: impulso e quantità di moto, urti elastici e anelastici, pendolo balistico, centro di massa, corpo rigido, momenti, equilibri e leva dell’avambraccio.

La teoria spiega i domini dei modelli: arresto durante una frenata, quote uguali per la gittata canonica, piano fermo per la normale, contatto possibile, distinzione fra regime statico e scorrimento, sistema chiuso a massa costante, conservazioni separate durante urto e salita. La leva biologica è un modello meccanico idealizzato, non una valutazione clinica.

## Esercizi e domande

Sono stati conservati e approfonditi i procedimenti validi delle prime sette schede, uniformandone ipotesi, unità, approssimazioni e spiegazioni. La distribuzione degli esercizi nelle dieci schede è 2/2/2/3/2/2/2/4/4/2. Le nuove applicazioni includono forza dipendente dalla posizione, rampa dissipativa, rendimento di un sollevatore, urto con velocità opposte, pendolo balistico, forza media di contatto distinta dalla risultante, persona su carrello e reazioni di una trave.

Le quattordici tracce richiedono decisioni diverse: area con segno, incontro, lancio orizzontale, limite di resistenza di un filo, attrito su un piano, lettura di una bilancia, tensione interna, molla ricavata da due misure, lavoro a tratti, compressione con attrito, massa da impulso, frammentazione e trave con cavo inclinato. Le soluzioni motivano la legge scelta e controllano segni, unità o un bilancio alternativo.

Tutti i novanta quiz sono stati riscritti con quattro opzioni nello stesso ambito concettuale, una sola corretta e spiegazione. La banca alterna calcolo, interpretazione, dati insufficienti, ipotesi e limiti del modello. La domanda 22 è un problema inverso sulla frazione di caduta nell’ultimo secondo, con una radice da scartare per il dominio temporale. La domanda 75 chiede il nuovo massimo di un impulso triangolare a durata dimezzata: la risposta non è già scritta nel diagramma del primo impulso. Le chiavi, con seed 2026111502, sono bilanciate 23/23/22/22; non formano un ciclo da uno a dodici elementi. Le permutazioni e gli indici corretti coincidono nelle due lingue.

## Traduzione e figure

I 115 file inglesi comprendono tutti i passaggi, titoli, parole chiave, didascalie, opzioni e spiegazioni. Le quantità restano uguali; l’inglese usa il punto decimale, l’italiano la virgola. I rimandi inglesi usano `/en/`; ID, ancore, accesso gratuito delle sole schede 1–3 e struttura dei blocchi sono conservati. Tutta la prosa estesa della teoria è dentro blocchi etichettati. Le frazioni matematiche sono in colonna, anche inline.

Sono stati creati 24 SVG originali, dodici coppie IT/EN: grafico velocità-tempo, parabola di un proiettile, moto circolare, corpo libero, piano inclinato, lavoro come area, bilancio energetico, impulso, centro di massa, leva, incontro di due auto e lancio verticale. Dieci coppie sono nella teoria; le altre due illustrano le schede gratuite. Altre schede e due quiz riusano le figure pertinenti.

Tutti i 24 SVG sono stati renderizzati e guardati sia a 390 sia a 780 pixel: 48 rese finali. Verificati assi, quote, valori, direzioni e leggibilità. Parabola, incontro e lancio verticale usano le equazioni e i dati effettivi; la figura della leva mette in scala le posizioni e dichiara il carattere schematico delle frecce. Il centro di massa mostra la posizione risultante senza una frazione lineare nell’etichetta. I calcoli completi rimangono nel Markdown.

## Fonti consultate

- [MUR, Syllabus Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf), unità 2; testo integrale fornito in `qa/fisica-syllabus.txt`.
- [OpenStax, condizioni di equilibrio statico](https://openstax.org/books/university-physics-volume-1/pages/12-1-conditions-for-static-equilibrium) e [esempi di equilibrio e avambraccio](https://openstax.org/books/university-physics-volume-1/pages/12-2-examples-of-static-equilibrium).
- [OpenStax, centro di massa](https://openstax.org/books/university-physics-volume-1/pages/9-6-center-of-mass), [impulso e urti](https://openstax.org/books/university-physics-volume-1/pages/9-2-impulse-and-collisions), [attrito](https://openstax.org/books/university-physics-volume-1/pages/6-2-friction).
- [NIST, valori CODATA 2022](https://physics.nist.gov/cuu/pdf/wall_2022.pdf): controllo della costante gravitazionale, riportata nel capitolo con l’approssimazione dichiarata.

Testi, domande e diagrammi sono originali; le fonti sono state usate per verificare leggi, condizioni e costanti.

## Controlli d’autore

- Renderer effettivo del sito: `node strumenti/verifica-semestre-filtro-bilingue.mjs fisica-semestre-filtro meccanica`; 230 file renderizzati, nessun errore o avviso. Il conteggio delle formule e le mediane sono registrati in `qa/fisica-semestre-filtro/meccanica/validation-final.json`.
- 232 ricalcoli con Python/SymPy, separati dagli script di scrittura: integrazioni dei grafici, radici ammissibili, tutti i 25 svolti, tutte le 14 tracce, risultati numerici dei quiz e invarianti delle figure. Tutti superati. Sono controlli dell’autore; il ricalcolo del revisore resta distinto.
- 1.287 controlli strutturali: 115 coppie IT/EN, sequenza dei numeri normalizzata per la lingua, direttive, ancore originarie, accessi, quantità, spiegazioni per esercizio, opzioni e chiavi, assenza di caratteri nascosti, frazioni lineari e riferimenti alla posizione dell’opzione nelle spiegazioni.
- Controllo `git diff --check` sul solo capitolo: superato. Nessuna build Astro, modifica del catalogo, commit o pubblicazione eseguita dall’autore.

Evidenze in `qa/fisica-semestre-filtro/meccanica/`: `numerical-checks.py`, `numerical-checks.json`, `content-checks.json`, `validation-final.json`, `final-hashes.json` e cartella `render/`. Le copie originali permettono il confronto con la base. Le osservazioni della prelettura del coordinatore sono state applicate; la verifica finale delle differenze e delle figure è documentata sotto. Non sono noti dubbi scientifici irrisolti dell’autore.

## Verifica indipendente conclusa

Il coordinatore `root`, distinto dall’autore, ha letto integralmente i 230 Markdown: entrambe le teorie, tutti i 25 svolti per lingua, tutte le 14 tracce, tutti i 90 quiz per lingua con ogni alternativa e spiegazione. Ha poi confrontato tutte le modifiche finali dell’autore con le copie già lette, inclusi 100 gruppi distinti di differenze nelle formule, le condizioni aggiunte e le nuove domande 22 e 75. La domanda 22 verifica un problema inverso con controllo del dominio temporale; la 75 richiede di ricavare un nuovo picco di forza, senza dare la risposta nella figura. Corretta anche la grammatica della domanda inglese 84.

I ricalcoli indipendenti comprendono 25 casi degli svolti, 14 delle tracce, 54 casi numerici o di formula dei quiz, oltre ai bilanci della teoria. Sono stati controllati segni, radici ammissibili, unità, ipotesi di contatto, regime dell’attrito, forze medie e risultanti, conservazioni negli urti, sistema e centro di massa. I risultati coincidono con le soluzioni; nessun dubbio scientifico rimane aperto.

Tutti i 24 SVG sono stati visti a 390 e 780 pixel, per 48 rese. Il revisore ha inoltre eseguito 634 controlli quantitativi direttamente sui dati SVG: curve dei lanci, intersezione dei moti, aree di velocità e impulso, lavoro, energie, forze, centro di massa, bracci delle leve e direzioni del piano inclinato. Geometria identica fra le 12 coppie localizzate. Etichette leggibili, assi e unità corretti, nessuna sovrapposizione rilevata nelle figure ispezionate.

Il renderer finale ha elaborato tutti i 230 Markdown e 2.360 formule senza errori né avvisi. Le dieci ancore sono conservate in entrambe le lingue. Il confronto trasversale delle 115 coppie non rileva differenze nei numeri matematici, caratteri nascosti o enunciati quasi duplicati dopo normalizzazione numerica. Le chiavi sono bilanciate 23/23/22/22. La teoria contiene dieci vere immagini per lingua; gli SVG interni prodotti da KaTeX per radicali e simboli non sono conteggiati come figure didattiche. Nessuna build o pubblicazione è stata eseguita per il solo capitolo; il collaudo di integrazione è documentato nel rapporto generale.

Evidenze indipendenti: `qa/fisica-semestre-filtro/meccanica/root-review/`, con copie preliminari, differenze finali, tre registri di ricalcoli, controllo quantitativo e rese delle figure, validazione e hash dei file congelati. La verifica delle rese SVG non equivale al collaudo interattivo delle pagine complete nel browser.
