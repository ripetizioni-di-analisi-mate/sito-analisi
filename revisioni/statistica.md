# Statistica e probabilità

Corso universitario introduttivo pubblicato nel gruppo Università, slug stabile `statistica`. Dodici capitoli, dalla descrizione dei dati alla regressione lineare; metadati inglesi con indicazione dei materiali in italiano. Le lezioni individuali restano quelle già prenotabili: Statistica è esclusa in `src/data/lezioni.ts`.

| Capitolo | Contenuti |
| --- | --- |
| Dati e frequenze | Popolazione, campione, scale, frequenze, istogrammi, tabelle e selezione |
| Indici descrittivi | Media, quantili, varianza descrittiva e corretta, dispersione, box plot |
| Probabilità e combinatoria | Eventi, assiomi, equiprobabilità, permutazioni, disposizioni, combinazioni |
| Condizionata e Bayes | Alberi, prodotto, indipendenza, probabilità totale, classificatori |
| Variabili discrete | Massa, momenti, Bernoulli, binomiale, geometrica, Poisson, ipergeometrica |
| Variabili continue | Densità, ripartizione, quantili, uniforme, esponenziale, normale, trasformazioni |
| Leggi congiunte | Marginali, condizionate, covarianza, correlazione, somme, estremi e attesa totale |
| Campionamento e TCL | Errori standard, Markov, Chebyshev, legge dei grandi numeri, TCL, correzione finita |
| Stima puntuale | Distorsione, MSE, momenti, massima verosimiglianza, consistenza |
| Confidenza | Media nota e ignota, proporzioni, Wilson, varianza, Welch, campioni appaiati e numerosità |
| Test | Ipotesi, errori, potenza, valore p, z e t, proporzioni, chi quadrato e confronti multipli |
| Regressione | Minimi quadrati, residui, Pearson, R², pendenza, previsione e diagnostica |

Ogni capitolo contiene dieci schede per tipologia con due esercizi svolti ciascuna, quattordici tracce autonome con risultato finale e quarantacinque quiz con spiegazione. Totali: 120 schede, 240 esempi svolti, 168 tracce, 540 quiz (480 numerici e 60 concettuali). Gli esercizi numerici includono varianti parametriche della stessa tipologia; questi conteggi non rappresentano altrettanti metodi distinti. Esempi, tracce e quiz usano varianti separate.

Convenzioni dichiarate: mediana pari come media dei valori centrali; altri quantili empirici col rango superiore; geometrica sul numero della prova del primo successo; gamma/esponenziale parametrizzate tramite tasso; normale con varianza come secondo parametro; varianza di popolazione finita con divisore N; quantili inferenziali espressi come probabilità di coda inferiore. Le approssimazioni normali sono segnalate e le ipotesi dei risultati esatti sono esplicite. Gli esercizi numerici chiedono quattro cifre decimali quando necessario.

Il listino è 49 EUR una tantum, imposte incluse nel prezzo Paddle; quantità minima e massima 1. Prodotto `pro_01m6v5e3g6tgk6xtvfa8wpa7ks`, prezzo `pri_01m6v5mj0byq1a6tm6tt6e2xqg`. Home, indice, ricerca, pacchetti a scelta, Pi, simulazione, progressi e compatibilità usano il catalogo condiviso. Le prime tre schede per capitolo seguono l'anteprima ordinaria del sito. Prima dell'acquisto i quiz sono limitati dal server a dieci ID fissi complessivi, anche cambiando sessione, capitolo, lingua o ID richiesto.

Rigenerazione: `python strumenti/genera-statistica.py` (richiede scipy). Testi e banchi sono in `strumenti/statistica/`; i contenuti generati sono versionati. I risultati numerici sono conservati anche nel banco revisionabile `risultati.json`. Nessuna dipendenza Python è necessaria per compilare il sito.

Controlli eseguiti il 7 novembre 2026:

- 840 file Markdown resi con gli stessi plugin del sito; 5.518 formule, ancore, opzioni e soluzioni validate.
- 200 ricalcoli indipendenti tramite enumerazione combinatoria, integrazione numerica, matrici e distribuzioni scipy; controllo di finitezza/supporto per 960 casi del banco.
- Venti test runtime su Worker e pacchetti; anteprime, prezzo, isolamento degli acquisti, dieci ID dimostrativi e accesso completo ai 540 quiz.
- Compilazione locale mirata con `SOLO_MATERIE=statistica npm run build`: 726 pagine più vetrine; verificati catalogo compatibilità, ricerca e acquisto. La compilazione locale dell'intero catalogo ha raggiunto il limite di memoria; la compilazione integrale di produzione è affidata al normale processo Cloudflare.

Riferimento di controllo per intervalli e test sulla media: [NIST, Confidence limits for the mean](https://www.itl.nist.gov/div898/handbook/eda/section3/eda352.htm), consultato il 7 novembre 2026. Le spiegazioni sono originali e non riproducono il testo della fonte. Il corso copre i temi introduttivi dichiarati; la compatibilità con un particolare programma dipende dagli argomenti richiesti dal docente.
