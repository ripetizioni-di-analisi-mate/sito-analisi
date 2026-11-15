# Organizzazione biologica — autore e verifica indipendente

Revisione del 15 novembre 2026. Autore: `/root/bio_organizzazione`. Verificatore indipendente: `/root/bio_segnalazione`. Stato: scrittura e verifica indipendente completate; build generale demandata al coordinatore. Le sezioni iniziali registrano il lavoro dell’autore; la verifica indipendente è documentata separatamente in fondo.

## Materiale

- 115 Markdown italiani e 115 inglesi: una teoria, 10 schede con 20 esercizi svolti, 14 tracce e 90 quiz per lingua.
- 22 SVG originali: 8 figure di teoria e 3 figure aggiuntive per svolti in ogni lingua. Le figure sono presenti in 7 schede su 10, comprese tutte le tre gratuite. Alcune figure di teoria sono riutilizzate quando pertinenti allo svolgimento.
- Teoria organizzata in 8 sezioni, circa 3.000 parole per lingua, tutte le ancore precedenti conservate. Svolti: mediana 199 parole per esercizio IT e 196 EN, secondo il contatore comune.
- I quiz 1–14 corrispondono alle tracce. I restanti coprono gli altri concetti e applicazioni. Posizioni corrette 23/23/22/22 in entrambe le lingue. Eliminati gli enunciati seriali sul «ruolo di…»; revisionate anche 74 serie di distrattori per sostituire alternative estranee con errori sullo stesso concetto.

## Contenuti coperti

Unità 1 del syllabus MUR 2026/27: teoria cellulare e proprietà dei viventi; alberi, selezione e omeostasi; struttura, classificazione e cicli virali; ingresso e uscita dei virus animali; retrotrascrizione e integrazione; involucri procariotici, Gram, archei e strutture accessorie; tre vie di trasferimento orizzontale; endomembrane, ipotesi sull’origine del nucleo, endosimbiosi e pluricellularità; carboidrati, lipidi, amminoacidi e livelli delle proteine; domini e siti attivi; enzimi, fosforilazione, ubiquitinazione, acetilazione, glicosilazione e lipidazione; nucleotidi, modello di Watson e Crick, RNA codificanti e non codificanti; anabolismo, catabolismo, idrolisi, condensazione e accoppiamento.

Casi applicativi originali: bilanci di flussi, selezione con frequenze e numerosità assolute, localizzazione di blocchi virali, confronto dei veicoli del DNA, dipendenza mitocondriale dal nucleo, dati di espressione, struttura dei lipidi, denaturazione e dissociazione di subunità, profili energetici, percentuali di attività, complementarità e composizione del DNA, reti metaboliche.

## Fonti consultate

- MUR, syllabus Biologia 2026/27, unità 1: https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf
- OpenStax, Biology 2e, classificazione e struttura dei virus: https://openstax.org/books/biology-2e/pages/21-1-viral-evolution-morphology-and-classification
- OpenStax, Biology 2e, procarioti, batteri e archei: https://openstax.org/books/biology-2e/pages/22-2-structure-of-prokaryotes-bacteria-and-archaea
- OpenStax, Biology 2e, catalisi e regolazione enzimatica: https://openstax.org/books/biology-2e/pages/6-5-enzymes

Le spiegazioni e i casi sono stati scritti ex novo. Le ricostruzioni dell’origine del nucleo sono presentate come modelli; l’endosimbiosi non viene estesa automaticamente a tutti gli organelli. Un inibitore che riduce l’integrazione non viene identificato automaticamente con un bersaglio unico. La fosforilazione non implica sempre attivazione e l’ubiquitinazione non implica sempre degradazione.

## Autocontrolli eseguiti

- `node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro organizzazione-biologica`: 230 file resi, 136 formule, zero errori e zero avvisi. YAML, ancore, collegamenti, figure, conteggi, quattro opzioni, risposte, gratuità e parità IT/EN controllati dal validatore.
- 90 enunciati esattamente distinti per lingua. Rilettura dei distrattori e corrispondenza delle opzioni fra lingue; resta richiesta la successiva revisione indipendente.
- 19 ricalcoli dell’autore con aritmetica esatta/Fraction e verifica delle sequenze complementari: bilanci, frequenze, energia, legami peptidici, percentuali delle basi, numero di legami a idrogeno e variazioni di attività.
- Tutti i 22 SVG resi in PNG con Sharp a larghezze 350 e 760 px e ispezionati. Corrette sovrapposizioni delle etichette nelle strutture proteiche e nel profilo energetico; migliorato il collegamento di induzione nel ciclo fagico. Controllo delle larghezze delle etichette con il font effettivo Liberation Sans: nessun testo oltre il riquadro.

## Controlli demandati

Il tentativo di screenshot tramite Chromium locale è impedito dall’ambiente (`socket() failed: Operation not permitted`); il rendering SVG tramite Sharp è riuscito. Restano al coordinatore la verifica nella pagina Astro completa e la build. La revisione indipendente scientifica e linguistica è stata successivamente eseguita come documentato di seguito. Nessuna pubblicazione effettuata dall’autore o dal verificatore.


## Verifica indipendente completa

Il verificatore, distinto dall’autore, ha letto integralmente entrambe le teorie, tutti i 20 esercizi, le 14 tracce e tutti i 90 quiz nelle due lingue: 230 Markdown. Il confronto con l’unità 1 MUR conferma la copertura dichiarata. La verifica comprende significato delle traduzioni, dati, formule, ipotesi, risposta corretta, plausibilità delle alternative e coerenza delle spiegazioni. Le 11 ancore della versione originale Git risultano tutte preservate, identiche e valide in IT/EN.

### Correzioni e miglioramenti

- Migliorati i contenuti di 34 quiz in ciascuna lingua: alternative più pertinenti, rimozione di suggerimenti che rendevano riconoscibile la risposta per la forma, distinzione fra domini/subunità/livelli strutturali, continuità delle endomembrane, DNA e nucleotidi, modificazioni proteiche e prove di trasformazione ereditabile. Riallineate le spiegazioni alle opzioni effettive, fra cui i quesiti 41, 70 e 90.
- Permutate tutte le 90 serie di opzioni mediante ordine fisso non ciclico, identico in IT/EN. Verificata la conservazione dell’identità della risposta corretta prima e dopo ogni permutazione. Le posizioni mantengono il bilancio 23/23/22/22.
- Corretto il controllo sul DNA protetto dal capside: il confronto usa un saggio diretto dell’integrità del DNA in capsidi integri o permeabilizzati, con e senza DNasi. La sola perdita di trasferimento potrebbe dipendere dalla perdita d’infettività del vettore. Esplicitati i controlli sull’effetto della permeabilizzazione e sull’attività della DNasi.
- Precisati polarità informativa dell’RNA e direzione di lettura; circoscritto il caso del virus negativo dipendente dalla propria polimerasi anche nella traccia e nel quiz 3. Aggiunti i colori tipici del Gram, esplicitato il fosfato nella testa del fosfolipide dello svolto 6, chiarita la denaturazione senza necessità di scissione dei legami peptidici.
- Nello svolto 3 erano presenti quattro tabulazioni al posto dell’inizio del comando `\text`, due per lingua. Sono state rimosse e le catene di reazione riformattate per evitare espressioni orizzontali troppo lunghe.
- Quattro SVG corretti: il ribosoma legge uno stampo mRNA, senza suggerire che non utilizzi altri RNA; il diagramma endosimbiotico distingue la cellula attuale dalla successione sull’origine mitocondriale, evitando una freccia interpretabile come origine del nucleo dal mitocondrio.

### Controlli del verificatore

Il validatore con il renderer del sito ha reso tutti i 230 file e 136 formule senza errori né avvisi. Sono confermati 115 file, 20 esercizi, 14 tracce e 90 quiz per lingua; 8 figure nella teoria; accesso gratuito limitato alle schede 1–3; riferimenti e direttive correttamente risolti. I testi delle teorie contano 3.131 parole IT e 3.080 EN secondo il contatore comune. La mediana delle spiegazioni dei quiz è 53 parole IT e 50 EN; quella degli esercizi è 205 IT e 197 EN.

Un controllo distinto ha riletto YAML, dati numerici e formule delle 115 coppie IT/EN e verificato l’assenza di caratteri di controllo indesiderati. Sono stati eseguiti 29 ricalcoli indipendenti con aritmetica esatta e due verifiche di complementari inversi: bilanci, frequenze, sopravvivenza relativa, legami peptidici, barriere dirette/inverse, variazioni percentuali, basi, legami a idrogeno e accoppiamento energetico.

Tutti i 22 SVG sono stati renderizzati e ispezionati dal verificatore a 350 e 760 px, comprese nuove rese delle quattro figure modificate. Non sono state riscontrate collisioni o etichette illeggibili. È stato eseguito anche il controllo del diff sugli spazi. Non restano errori scientifici, numerici o strutturali individuati nella revisione. Il verificatore non ha eseguito build Astro, commit o pubblicazione.

### Fonti aggiuntive del verificatore

Per i passaggi di espressione virale sono stati controllati la fonte originale della [classificazione di Baltimore](https://pmc.ncbi.nlm.nih.gov/articles/PMC378387/) e la [lezione Nobel di David Baltimore](https://www.nobelprize.org/uploads/2018/06/baltimore-lecture.pdf), che ricostruisce l’evidenza della polimerasi nei virioni a RNA negativo studiati. Per distinguere integrità del capside, accessibilità alla nucleasi e infettività è stato consultato il lavoro sperimentale [Epifluorescent Microscopy to Evaluate Bacteriophage Capsid Integrity](https://www.tandfonline.com/doi/full/10.2144/000112584). Le spiegazioni didattiche e i casi restano originali.
