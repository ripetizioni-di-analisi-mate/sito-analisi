# Matematica 3° anno

Corso completato il 6 novembre 2026 per ripetizionidianalisi.com. Caricamento nel repository pubblico del sito e pubblicazione autorizzati esplicitamente dall'utente il 6 novembre 2026.

## Contenuti pronti

- 12 capitoli di teoria, ciascuno articolato in 8 sezioni.
- 96 schede svolte per tipologia, contenenti 204 esercizi spiegati; prime 3 schede di ogni capitolo gratuite.
- 168 esercizi autonomi con risposta finale.
- 540 domande a tempo, 45 per capitolo, con quattro alternative distinte e spiegazione.
- 28 grafici generati con i componenti già presenti nel sito e controllati visivamente.
- Simulazioni di verifiche, ripasso, progressi ed EXP tramite i flussi già usati dalle altre materie.

## Programma

1. Equazioni, disequazioni e sistemi.
2. Valore assoluto ed equazioni irrazionali.
3. Funzioni, dominio e trasformazioni dei grafici.
4. Piano cartesiano e retta.
5. Parabola e problemi di secondo grado.
6. Circonferenza, rette e tangenti.
7. Ellisse.
8. Iperbole e funzione omografica.
9. Trasformazioni e problemi sulle coniche.
10. Potenze e funzioni esponenziali.
11. Logaritmi, equazioni e disequazioni.
12. Statistica descrittiva e dati a due variabili.

Il percorso è organizzato per il terzo anno del liceo scientifico; la pagina precisa che la distribuzione dei temi tra terzo e quarto anno varia secondo la classe. Riferimento di organizzazione consultato: [Indicazioni nazionali, secondo biennio](https://www.indire.it/lucabas/lkmw_file/licei2010/indicazioni_nuovo_impaginato/_Liceo%20scientifico.pdf). Testi ed esercizi sono originali.

## Integrazione

La materia è attiva nei dati del sito, nel gruppo Superiori / Matematica. Prezzo 29 EUR, coerente con quarto e quinto anno. Le pagine usano gli stessi componenti per teoria, schede, esercizi, quiz, account e acquisto. Il prodotto Paddle dedicato e il prezzo sono stati creati: pagamento unico, EUR 29, imposte incluse, quantità minima e massima 1. Nessun acquisto è stato eseguito durante la verifica.

- Prodotto: `pro_01m6r4srgfr3820w39k7kr4gg6`.
- Prezzo: `pri_01m6r50b23gx2dk93jcwz6cybz`.
- Variabile: `PADDLE_PREZZO_MATEMATICA_SUPERIORI_3`.
- Destinazione di pubblicazione: repository pubblico `ripetizioni-di-analisi-mate/sito-analisi`, ramo `main`, collegato al Worker Cloudflare `sito-analisi`.

## Controlli completati

- Generazione riproducibile con controlli SymPy sulle equazioni, disequazioni, proprietà geometriche e problemi aggiuntivi; candidati estranei e condizioni di esistenza espliciti.
- Alternative dei quiz confrontate per equivalenza matematica; risposte corrette distribuite nelle quattro posizioni con scarto massimo di una per capitolo.
- Tutti gli 816 file di contenuto controllati: frontmatter YAML, ancore della teoria, schede gratuite, blocchi soluzione e numero di esercizi per scheda.
- 5.837 formule inline e display accettate da KaTeX con errori di sintassi bloccanti.
- 28 figure rese con il plugin del sito: nessuna curva vuota e controllo visivo delle quattro tavole.
- Build finale mirata alla materia riuscita: 678 pagine, vetrine gratuite, archivio quiz e immagini delle anteprime.
- Pagine di teoria, schede, esercizi e quiz presenti per tutti i 12 capitoli; nessun `katex-error` nelle pagine della materia.
- 12 test esistenti dei pacchetti e pagamenti superati.
- `git diff --check` superato.

La build locale dell'intero sito è stata terminata dall'ambiente per memoria insufficiente. La pubblicazione usa la compilazione del servizio di produzione collegato al repository, seguita dai controlli online della materia, delle anteprime e dei quiz.

## Riprodurre i controlli

```sh
python revisioni/matematica-superiori-3/genera.py
node revisioni/matematica-superiori-3/verifica.mjs
node strumenti/verifica-domande.mjs matematica-superiori-3
SOLO_MATERIE=matematica-superiori-3 npm run build
npm run test:pacchetti
```
