# Genoma, cromatina ed epigenetica

Revisione d'autore e successiva verifica indipendente del 15 novembre 2026. Autore: agente `bio_genoma`. Verificatore distinto dall'autore: agente `bio_flusso`. Nessuna pubblicazione effettuata.

## Materiale

Per ciascuna lingua: una teoria in sette sezioni, dieci schede con venti esercizi svolti, quattordici tracce con soluzione ragionata e novanta domande a quattro opzioni. Totale 230 file Markdown tra italiano e inglese. Teoria: circa 2.702 parole italiane e 2.553 inglesi nel corpo dopo la verifica indipendente. Conservate tutte le dieci ancore originali e gli ID dei file. Schede 1–3 gratuite, le altre a pagamento come prima.

Sette diagrammi originali con versione italiana e inglese, quattordici SVG in `public/figure/biologia-semestre-filtro/genoma-cromatina/`. Sei figure sono inserite nella teoria e sette nelle schede, incluse tutte e tre le gratuite. Rappresentano cromosomi replicati, nucleosomi, accessibilità, mantenimento della metilazione, organizzazione minima del cromosoma, retrotrasposizione e ripetizioni. Sono schemi didattici, non ricostruzioni in scala.

La riscrittura sostituisce i quiz ripetitivi con conteggi, interpretazione di digestione nucleasica, confronti sperimentali, limiti delle inferenze causali, distinzioni tra geni e alleli, ripetizioni e mobilità. Ogni spiegazione ricostruisce il criterio o il calcolo. Posizioni corrette: 23, 23, 22, 22. Le prime quattordici domande corrispondono alle quattordici tracce. Una revisione dei distrattori ha sostituito numerose alternative estranee al programma con errori di interpretazione pertinenti.

## Copertura e fonti consultate

Copertura confrontata con l'unità 2 del [syllabus MUR di Biologia 2026/27](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf): organizzazione minima dei cromosomi eucariotici, centromeri e telomeri, nucleosomi e H1, modelli di compattazione e condensine, accessibilità, metilazione e acetilazione, famiglie globiniche e rRNA, tandem, LINE, SINE, retrovirus endogeni ed elementi mobili.

Fonti di controllo per i punti scientifici:

- [Ou et al., ChromEMT, Science 2017, PMID 28751582](https://pubmed.ncbi.nlm.nih.gov/28751582/): organizzazione eterogenea della cromatina e limiti dell'obbligatorietà della fibra di 30 nm.
- [NICHD, Chromatin Remodeling and Gene Activation](https://annualreport.nichd.nih.gov/clark.html): composizione nucleosomica, accessibilità e rimodellamento. Il modello regolare della fibra non è presentato come universale.
- [NCBI Bookshelf, Chromosomes and Chromatin](https://www.ncbi.nlm.nih.gov/books/NBK9863/): ottamero, H1 e distinzione tra particella protetta e lunghezza di ripetizione.
- [NCBI Bookshelf, DNA Rearrangements](https://www.ncbi.nlm.nih.gov/books/NBK9937/): intermedi della retrotrasposizione e dipendenza dei SINE da attività codificate altrove.

Contenuti ed esercizi sono originali. Sono mantenute le cautele su CENP-A e neocentromeri, DNA e ploidia, effetti della metilazione dipendenti dal contesto, copie LINE-1 inattive e differenza tra trascrizione di un elemento e nuova inserzione.

## Controlli d'autore completati

- Rendering di tutti i 230 Markdown con il processore del sito; 174 formule KaTeX rese senza errori.
- YAML, ancore, numerazione, gratis, quattro opzioni distinte, indice corretto, bilanciamento e assenza del precedente modello ripetitivo.
- Corrispondenza completa di formule e metadati funzionali tra italiano e inglese; lettura parallela dei testi durante la scrittura.
- Immagini referenziate esistenti. Tutti i quattordici SVG resi in PNG a 390 e 640 px; ispezione visiva delle due tavole mobili con tutte le figure IT/EN, senza tagli o sovrapposizioni rilevate.
- Conti numerici di nucleosomi, diluizione dei metili, tandem e percentuali ricontrollati con Python; calcoli delle domande controllati durante la composizione.
- `yamlcheck.py` sui due file di teoria: zero errori; validazione YAML di tutti i file inclusa nel controllo completo.

## Verifica indipendente completata

Il verificatore `bio_flusso` ha letto integralmente teoria, tutti i venti esercizi svolti, tutte le quattordici tracce e tutte le novanta domande in entrambe le lingue, confrontando contenuto, ipotesi, soluzioni, singola risposta corretta e spiegazioni. Il confronto con l'unità 2 MUR comprende anche sequenze a copia singola, famiglie geniche, ripetizioni tandem e intersperse, LINE/SINE/ERV, condensine, H1, fibra di 30 nm, centromeri e telomeri.

Correzioni effettive applicate nelle due lingue:

- Migliorati i distrattori di 64 domande, sostituendo alternative estranee o troppo palesemente assurde con errori pertinenti alla distinzione verificata. Per esempio, CENP-A è ora confrontata con altri istoni, telomerasi con possibili componenti nucleiche e retrocopie con meccanismi che possono essere confusi con la retrotrasposizione.
- Riscritte nove spiegazioni per eliminare riferimenti ad alternative non più presenti e precisare inferenze biologiche. Nel neocentromero, l'assenza di alfa-satellite mostra che quel blocco non è necessario in ogni caso: la formulazione precedente confondeva questa conclusione con la sufficienza.
- Negli esperimenti sul rimodellatore, i risultati sostengono il ruolo dell'ATPasi senza attribuire automaticamente ogni difetto alla catalisi; sono esplicitati i controlli su ripiegamento, legame al substrato e legame dell'analogo. Nel quiz sulla nucleasi è aggiunto il controllo su DNA nudo per escludere differenze intrinseche di taglio.
- Per dedurre un aumento del numero di copie, alle nuove giunzioni di inserzione è associata la conservazione delle copie precedenti. Distinte mobilizzazione, aumento netto delle copie e semplice aumento dell'RNA.
- Resi espliciti il carattere somatico diploide nei conteggi umani, il contesto diploide del confronto geni/alleli e la non sovrapposizione delle categorie nel calcolo percentuale. La scheda sulla metilazione precisa che il conteggio si ferma prima del mantenimento raffigurato nell'ultimo pannello.
- Aggiunta la definizione di sequenza a copia singola, riferita al corredo aploide e distinta dal numero di molecole nella cellula diploide.
- Eliminato il ciclo prevedibile delle chiavi 1–2–3–4: opzioni rimescolate con seed fisso `2026111502`, permutazione identica IT/EN e distribuzione finale 23/23/22/22. Verificata l'assenza di rimandi a lettere o posizioni nelle spiegazioni. Conservate le opzioni numeriche delimitate come formule, per impedirne l'interpretazione come elenchi ordinati annidati. Normalizzate le righe finali degli svolti.

Controlli finali indipendenti:

- `node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro genoma-cromatina`: 230 file, 222 formule, zero avvisi e zero errori.
- Secondo controllo con il processore Markdown del sito: 115 file e 111 formule per lingua; corrispondenza esatta di formule, chiavi, ancore, gratuità e riferimenti; quattro opzioni distinte per domanda. Restano dieci ancore, sette sezioni, venti esercizi svolti e quattordici tracce per lingua.
- Ricalcoli indipendenti con Python: 34 verifiche numeriche su cromosomi/cromatidi, quantità di DNA, nucleosomi, linker, ottameri, diluizione della metilazione, tandem, copie e percentuali; esito positivo. Le risposte numeriche sono state ricontrollate nelle posizioni successive al rimescolamento.
- Tutti i quattordici SVG sono stati nuovamente resi a 390 e 1040 px e ispezionati nelle due lingue. Etichette leggibili, nessun testo tagliato o sovrapposizione; gli schemi sono coerenti con il contenuto e distinguono H1 dall'ottamero. XML valido per tutte le figure.
- `git diff --check` sul perimetro del capitolo: nessun errore.

Il controllo scientifico ha confermato che la fibra regolare di 30 nm è presentata come modello dipendente dalle condizioni, non come passaggio universale; CENP-A sostituisce H3 nei nucleosomi che la contengono; shelterin e telomerasi hanno ruoli distinti; la metilazione è interpretata secondo il contesto; autonomia degli elementi e capacità di mobilizzarsi non sono sinonimi. Oltre alle fonti sopra, verificati gli studi su [CENP-A e neocentromeri, PMID 9382805](https://pubmed.ncbi.nlm.nih.gov/9382805/) e sulla [regione neocentromerica arricchita in CENP-A e ridotta in H3, PMID 11296241](https://pubmed.ncbi.nlm.nih.gov/11296241/).

Esito del verificatore: contenuti scientifici e parità IT/EN approvati dopo le correzioni descritte; nessuna criticità contenutistica irrisolta.

## Da completare dal coordinatore

Restano la build Astro del perimetro e il controllo delle pagine complete impaginate. Il rendering Markdown e degli SVG non sostituisce il controllo della pagina finale. Il verificatore non ha eseguito build, commit o pubblicazione e non ha modificato prezzi, codice condiviso o altri capitoli.
