# Chimica e area Semestre filtro

Inserito il corso italiano Chimica e propedeutica biochimica per il semestre filtro, con sette unità organizzate sul syllabus MUR 2026/2027. Contiene 7 teorie, 70 schede con 140 esercizi svolti, 98 esercizi con soluzione e 98 domande a tempo. Prime tre schede per unità gratuite; prezzo 49 euro una tantum, coerente con Fisica. Paddle prodotto `pro_01m6r3mxderjgw0b6ak2e7qc7d`, prezzo `pri_01m6r3stf7qq5b6wwq64pbpx0k`.

Il corso compare nell'area Semestre filtro in home, indice, ricerca e listino, accanto a Fisica e Basi di matematica. Sono conservati i rispettivi contenuti e prezzi. I nuovi materiali didattici sono in italiano; l'interfaccia inglese lo indica. Le note dei programmi sono distinte per materia. Chimica è esclusa dalle lezioni individuali prenotabili.

## Verifiche

- `node strumenti/verifica-semestre-filtro.mjs`: tutti i 273 Markdown, YAML, formule KaTeX, ancore, schede gratuite, opzioni e spiegazioni dei quiz.
- Revisione scientifica indipendente di tutti i sette capitoli: rapporti `revisione-*.md` e verifiche degli autori `verifica-*.md`.
- Corrette dopo la revisione: distinzione numero di ossidazione/carica formale; interazioni ione-dipolo; traccia sul reagente limitante; tracce su dieni e indicatori; spontaneità della reazione complessiva nella cella; legami dell'ialuronato; reazioni radicaliche; tautomeria e condizioni di disidratazione; rimandi teorici delle schede miste.
- `node --test strumenti/pacchetti.test.mjs`: 12 controlli superati.
- Integrazione aggiornata sugli ultimi sorgenti pubblicati, conservando le impostazioni del modulo di matematica a pagamento e le altre modifiche del sito.
- Build locale rappresentativa con `SOLO_MATERIE=chimica-semestre-filtro,matematica-semestre-filtro,fisica-semestre-filtro npm run build`: pagine, vetrine, lingue e immagini social dei tre corsi.
- Controllo delle sette unità e delle pagine di teoria/esercizi/quiz, fonti MUR distinte, ricerca, acquisto e collegamenti. Le pagine di allenamento senza quiz inglesi usano il cambio lingua verso l'area inglese, evitando collegamenti a pagine inesistenti.

Il controllo completo è affidato alla build di produzione di Cloudflare. Il pagamento reale e l'accredito dopo un acquisto non sono stati eseguiti; vengono conservati il checkout e il webhook già presenti.
