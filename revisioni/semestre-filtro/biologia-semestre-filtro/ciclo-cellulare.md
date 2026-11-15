# Ciclo cellulare — revisione editoriale e scientifica

Data: 15 novembre 2026. Autore: coordinatore `/root`. Verificatore indipendente: `/root/bio_segnalazione`, diverso dall’autore. La verifica riguarda integralmente il capitolo italiano e inglese; non costituisce una pubblicazione.

## Copertura e consistenza

L’unità 7 del programma MUR 2026/27 è coperta: ciclo e checkpoint, cicline/CDK, Rb–E2F e restrizione, p53/p21 e oncogenesi, HPV, mitosi e NDC80, microtubuli e meccanoenzimi, APC/C/securina/separasi, citodieresi, meiosi e aneuploidie, gametogenesi, staminali, apoptosi e necrosi, MOMP/BCL2, apoptosoma, Fas/FADD e caspasi.

Per ciascuna lingua sono presenti e sono stati letti 115 file: teoria, 10 schede con 20 esercizi, 14 tracce con soluzione e tutti i 90 quiz. La teoria contiene 8 sezioni e 7 figure; gli SVG sono 14, con testi localizzati. Le 11 ancore originali sono tutte preservate e identiche in IT/EN. Identificatori, collegamenti, accesso gratuito alle sole schede 1–3 e quantità sono invariati.

## Interventi del verificatore

Sono stati migliorati 72 quiz in entrambe le lingue, mantenendo gli indici corretti e il relativo ordine delle opzioni. I distrattori implausibili sono stati sostituiti con confusioni pertinenti fra fasi, strutture, regolatori, ordine degli eventi e conteggi. Le spiegazioni sono state rilette rispetto alle nuove opzioni. Sono stati resi applicativi alcuni quesiti troppo astratti, fra cui confronto fra arresto/senescenza/apoptosi, limiti del checkpoint con attacchi merotelici e verifica della sopravvivenza dopo inibizione delle caspasi.

Chiarite le ipotesi del quiz 50: entrambe le cellule dopo meiosi I completano la seconda divisione. Precisata la metafase I nel confronto fra spermatociti del quiz 64. Rappresentate in LaTeX le frazioni e uniformate tutte le formule IT/EN. Nella figura del ciclo, il valore 2n/4C della fase M è ora esplicitamente riferito allo stadio precedente all’anafase. Il testo delle vie apoptotiche precisa l’amplificazione tramite BID. Sostituiti i testi alternativi generici delle sette figure negli svolti con descrizioni specifiche in entrambe le lingue.

## Controlli effettivamente eseguiti

- Lettura scientifica e confronto bilingue di tutti i materiali, comprese tutte le opzioni e spiegazioni dei quiz; esame dell’unicità della risposta corretta e delle sovrapposizioni tematiche.
- Ricalcolo indipendente di rapporti di fluorescenza e percentuali, cromosomi/cromatidi/DNA, assortimento, prodotti della spermatogenesi e frazioni nella non disgiunzione. Esplicitata la distinzione fra intera cellula, nucleo e prodotto meiotico.
- Parsing YAML di tutti i 230 file; confronto ordinato delle formule in tutte le 115 coppie IT/EN; confronto delle ancore con la versione originale in Git.
- Rendering e ispezione visiva di tutti i 14 SVG a 390 e 780 px. Testi leggibili e assenza di collisioni; ricontrollata la figura del ciclo dopo la modifica.
- Eseguito `node strumenti/verifica-semestre-filtro-bilingue.mjs biologia-semestre-filtro ciclo-cellulare` con salvataggio HTML: 230 file resi, 116 formule valide, zero errori. Distribuzione delle risposte corretta in entrambe le lingue: 23/23/22/22. Il controllo conferma direttive, immagini, ancore, collegamenti, quantità, accesso e assenza di enunciati identici.

L’unico avviso automatico riguarda la mediana di 34 parole delle spiegazioni inglesi, contro la soglia indicativa di 35. Le spiegazioni sono state lette tutte: non sono state allungate artificialmente. Non restano errori scientifici o strutturali individuati nella revisione. La build Astro e il controllo delle pagine nell’applicazione completa spettano al coordinatore e non sono dichiarati eseguiti qui.

## Fonti di verifica

Programma ufficiale MUR 2026/27, unità 7, nella copia testuale condivisa `qa/biologia-syllabus.txt`. L’autore ha utilizzato NCBI Bookshelf [NBK26824](https://www.ncbi.nlm.nih.gov/books/NBK26824/), [NBK26856](https://www.ncbi.nlm.nih.gov/books/NBK26856/), [NBK26873](https://www.ncbi.nlm.nih.gov/books/NBK26873/) e le raccomandazioni NCCD 2018/2023 per la morte cellulare.

Il verificatore ha controllato inoltre due fonti primarie per i punti che richiedono particolare cautela: [Cimini et al., 2001, J Cell Biol, doi:10.1083/jcb.153.3.517](https://pmc.ncbi.nlm.nih.gov/articles/PMC2190575/) sugli attacchi merotelici non rilevati dal checkpoint; [Yin et al., 1999, Nature, doi:10.1038/23730](https://www.nature.com/articles/23730) sulla dipendenza dal collegamento BID–mitocondri in specifici contesti di segnalazione da recettori di morte. I contenuti didattici sono originali e non riproducono i testi delle fonti.
