# Missione: Chiarezza totale

Questa versione applica il piano del 5 novembre 2026: un sito serio, ordinato e coinvolgente, con lo studio personale in primo piano.

## Scelte realizzate

- Home pubblica più essenziale, ricerca unica, descrizioni sintetiche e distinzione fra teoria/esercizi, videocorsi e lezioni.
- Spazio personale costruito sui dati già esistenti: ripresa, obiettivo, attività di oggi, ripasso, EXP, livelli e premi ottenuti.
- Materiali acquistati immediatamente raggiungibili, con catalogo e servizi sempre disponibili.
- Percorso teoria, svolti, esercizi autonomi e domande quando presenti; scorciatoia all’argomento successivo.
- Modalità Concentrazione facoltativa e reversibile, con Pi e indice disponibili.
- Ricerca con filtri, suggerimenti per refusi, formule leggibili, URL riutilizzabili e gestione degli errori.
- Messaggio di verifica errata con invito a riprovare o chiedere un indizio.

La testata, gli stemmi, le regole EXP, prezzi, acquisti, account, testi didattici e prenotazioni restano compatibili con il codice esistente. Il lavoro SEO e l’inserimento di nuove materie possono continuare separatamente.

## Anteprime

`node strumenti/anteprima-chiarezza.mjs /percorso/assoluto/anteprima`

Il generatore usa solo pagine campione e vetrine pubbliche. Gli account e le chiamate API delle anteprime sono dimostrativi e non raggiungono i servizi reali.

- **A, percorso guidato (proposta consigliata):** ripresa, obiettivo e ripasso ben visibili; premi raccolti in una sezione apribile.
- **B, compatto:** primo piano a ripresa e materiali, con i dettagli raggiungibili dall’account.
- **C, materie in primo piano:** materiali acquistati sopra il riepilogo del percorso personale.

Le varianti B e C sono confronti visivi locali. Il codice del prodotto implementa A. Prima della pubblicazione della grafica delle pagine principali si applica la preferenza registrata in `CLAUDE.md`: mostrare le alternative e pubblicare quella scelta.

## Verifica

```sh
node strumenti/test-ricerca.mjs
node strumenti/test-percorso-studio.mjs
node strumenti/test-spazio-studente.mjs
SOLO_MATERIE="analisi-1,precorso,fisica-zero" npm run build
node strumenti/verifica-chiarezza.mjs
```

La build per materie campione è prevista nelle note del repository per i limiti di memoria locali; non sostituisce la build completa di pubblicazione. L’anteprima visiva comprende ospite e profilo dimostrativo, oltre a ricerca e pagina di studio.

Risultato della verifica del 5 novembre: 31 controlli dei moduli e 11 controlli sulle pagine superati; 1.532 pagine compilate nella build campione. Verificati in browser il suggerimento «limti → limiti», la pertinenza dei risultati, i filtri, le tre disposizioni personali, l’apertura dei premi, l’indice durante Concentrazione e il percorso compatto a 390 px. La revisione indipendente del diff non ha rilevato blocchi.

Non sono stati eseguiti accessi o acquisti reali con questa versione. I profili dimostrativi non verificano l’intero flusso autenticato; la build completa e la prova con un account effettivo restano controlli da completare prima della pubblicazione.
