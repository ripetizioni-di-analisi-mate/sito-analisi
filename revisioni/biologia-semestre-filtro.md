# Biologia per il semestre filtro

Programma di riferimento: [Syllabus MUR Biologia 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_BIOLOGIA_%20finale%202026.pdf), consultato il 7 novembre 2026.

| Unità MUR | Capitolo | Contenuti |
| --- | --- | --- |
| 1 · 0,5 CFU | organizzazione-biologica | Teoria cellulare, filogenesi, virus, procarioti, trasferimento orizzontale, endosimbiosi, biomolecole, modificazioni e metabolismo |
| 2 · 0,5 CFU | genoma-cromatina | Cromosomi, centromeri, telomeri, nucleosomi, H1, compattazione, rimodellamento, epigenetica, famiglie geniche ed elementi mobili |
| 3 · 1 CFU | flusso-informazione | Replicazione e telomerasi, geni e operone lac, polimerasi, maturazione e stabilità degli RNA, codice, traduzione e proteostasi |
| 4 · 0,75 CFU | genetica-mutazioni | Varianti e riparazione, alleli, Mendel, AB0, epistasi, associazione e mappe, penetranza, imprinting, cariotipo e pedigree |
| 5 · 1,75 CFU | strutture-cellulari | Membrane e trasporti, nucleo e Ran, metabolismo e importazione mitocondriale, perossisomi, via secretoria, traffico, endocitosi, autofagia e citoscheletro |
| 6 · 0,75 CFU | segnalazione-cellulare | Matrice, adesioni, giunzioni, comunicazione, recettori, proteine G, messaggeri, visione, Ras-MAPK e PI3K-Akt |
| 7 · 0,75 CFU | ciclo-cellulare | Cicline e CDK, Rb/E2F, p53, mitosi, APC/C, meiosi, gametogenesi, staminali e vie apoptotiche |

Ogni capitolo contiene teoria, dieci schede con due quesiti ragionati, quattordici esercizi autonomi con risposta finale e quarantacinque domande a tempo con spiegazione. Le domande di allenamento riprendono le tipologie delle schede; i conteggi non rappresentano 553 problemi tutti distinti. Le prime tre schede per capitolo e l'inizio della teoria seguono l'anteprima ordinaria del sito.

I quiz sono originali di allenamento a quattro opzioni nel formato delle domande a tempo già usato sul sito. Prima dell’acquisto, il server restringe tutte le sessioni a un insieme fisso di dieci quesiti complessivi; cambiare capitolo o richiedere un ID fuori anteprima non espone altri quiz. L’acquisto apre tutti i 315 quesiti. L'allenamento con esercizi segue il formato del sito e non viene presentato come riproduzione della prova nazionale. I testi didattici sono in italiano; i metadati inglesi indicano la lingua effettiva dei materiali.

Riferimenti di controllo per i meccanismi cellulari: [trasporto nucleare, NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK26932/), [compartimentalizzazione, NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK26907/), [smistamento delle proteine, NCBI Bookshelf](https://www.ncbi.nlm.nih.gov/books/NBK9897/), [codice genetico, OpenStax Biology 2e](https://openstax.org/books/biology-2e/pages/15-1-the-genetic-code). I contenuti sono redatti con formulazione propria e non riproducono pagine dei testi.

Precisazioni didattiche: fibra di 30 nm presentata come modello non universale in vivo; codice genetico quasi universale; CFTR distinto dalle pompe ABC; esportazione NXF1 degli mRNA distinta dal modello Ran; rendimento energetico 30–32 ATP espresso come stima; ploidia distinta dal contenuto C; pedigree risolti con ipotesi esplicite.

Integrazione: sezione Semestre filtro dopo Chimica, prezzo 49 EUR una tantum, listino e pacchetti a scelta, configurazione Paddle e sblocco per slug. Biologia esclusa dalle lezioni individuali prenotabili, come Chimica; l'aggiunta del materiale non implica disponibilità di nuove lezioni dal vivo.

Rigenerazione delle schede: `python strumenti/genera-biologia.py`. I banchi revisionabili sono in `strumenti/biologia/*.psv`; la teoria resta nei file Markdown. Validazione: `node strumenti/verifica-semestre-filtro.mjs biologia-semestre-filtro`.

Controlli locali: 490 file resi con lo stesso processore del sito, 85 formule, tutte le ancore e le opzioni; compilazione delle quattro materie del semestre filtro (1.493 pagine più anteprime), controllo delle vetrine senza soluzioni, otto prove sul Worker reale per accessi e limite dei quiz. La compilazione locale dell’intero catalogo ha raggiunto il limite di memoria (exit 137); la verifica completa di pubblicazione avviene sul server Cloudflare.
