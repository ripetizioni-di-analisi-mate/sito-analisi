# Studio guidato · classificazione delle domande e rimandi di un capitolo (qualsiasi materia)

Brief comune per aprire lo Studio guidato a una materia nuova (14/11/2026, dopo Analisi 2 e Fisica 1). Un agente per capitolo.

Lavori su UN capitolo di una materia (indicati nel messaggio: MATERIA, CAPITOLO, nome della materia, ordine dei capitoli, basi consigliate). Repository: /home/claude/sito-analisi (SOLO LETTURA: non modificare nessun file del repository). Scrivi soltanto il file di uscita indicato sotto.

## Che cosa è lo Studio guidato
Uno studente in difficoltà, spesso confuso o in ansia per l'esame, sceglie il capitolo su cui è bloccato. Il test propone una domanda di livello medio per ogni abilità del capitolo; se sbaglia, una domanda più semplice sulla stessa abilità; se sbaglia anche quella, una domanda sulla **base** di quell'abilità, cioè su ciò che serve sapere prima. Alla fine indica, per ogni lacuna, il **paragrafo della teoria** e la **scheda svolta** da cui ripartire, in ordine di studio. Lo scopo è che lo studente, dopo il test, sappia esattamente da dove ricominciare. Le basi possono stare anche in un'altra materia del sito, anche se lo studente non l'ha acquistata (scelta di Carmine): se la causa vera dell'errore è lì, il test deve portarlo lì.

## Materiale
- Domande: `src/content/domande/<MATERIA>/<CAPITOLO>/<n>.md` (frontmatter `corretta`, testo, quattro risposte, `## Spiegazione`). Alcune domande hanno il testo vuoto: in quel caso il testo è la traccia dell'esercizio con lo stesso numero in `src/content/dafare/<MATERIA>/<CAPITOLO>/<n>.md` (se esiste).
- Teoria: `src/content/teoria/<MATERIA>/<CAPITOLO>.md`. (I file in `.sg/rif/` si preparano prima di lanciare gli agenti con `strumenti/sg-ancore.mjs` e `strumenti/sg-rif.py`; l'unione si fa con `strumenti/sg-unisci.py`.) Le ancore dei paragrafi `##` (da usare ESATTAMENTE come scritte, prima colonna) sono in `/home/claude/sito-analisi/.sg/rif/ancore-<MATERIA>.txt`, sotto la riga `## <CAPITOLO>`.
- Schede svolte: `src/content/svolti/<MATERIA>/<CAPITOLO>/<n>.md`. Elenco con i titoli in `/home/claude/sito-analisi/.sg/rif/schede-<MATERIA>.txt`.
- Basi già classificate (Analisi 1, Analisi 2, Precorso, Fisica 1 e le altre materie già pronte), una per riga con chiave, nome e capitolo: `/home/claude/sito-analisi/.sg/rif/basi-disponibili.txt`.

## 1. Le abilità del capitolo
Definisci PRIMA l'elenco delle abilità del capitolo: da 6 a 8, nomi brevi in italiano (2-6 parole) comprensibili da uno studente (es. «Derivate parziali e gradiente», «Reazioni di un incastro», «Legge di Gauss con simmetria sferica»). Ogni abilità è un procedimento o un concetto che si può sbagliare in modo riconoscibile e che ha un posto preciso nella teoria. Ordine: quello del programma (della teoria). Ogni abilità deve avere almeno 8 domande (mai meno di 6), di cui almeno 2 di livello 2 e almeno 1 di livello 1 (il test chiede prima il livello medio, poi uno più semplice). Se un'abilità resta con troppe poche domande, accorpala a quella vicina.

## 2. Livello e abilità di ogni domanda
Leggi testo, risposte e spiegazione di OGNI domanda (non indovinare dal numero: le domande 46-90 sono spesso varianti delle prime, con dati diversi).
- 1 = base: applicazione diretta di una definizione o di una formula, uno o due passaggi immediati.
- 2 = medio: il procedimento tipico del capitolo in più passaggi.
- 3 = avanzato: più tecniche combinate, parametri o casi da distinguere, ipotesi di teoremi da verificare, risposte sbagliate costruite su errori sottili.
Giudica per uno studente che prepara l'esame. Non forzare tre fasce uguali, ma in tutto il capitolo almeno 12 domande per livello se le domande lo permettono. Una domanda fuori tema rispetto al capitolo va nell'abilità più vicina con livello 3, così il test la propone solo in mancanza d'altro.

## 3. I rimandi di ogni abilità
Per ogni abilità:
- `teoria`: 1-2 ancore del capitolo (file delle ancore) dove l'abilità è spiegata. Almeno una.
- `schede`: 0-2 numeri di schede svolte del capitolo che esercitano proprio quell'abilità (leggi le schede, non solo i titoli). Meglio nessuna che una scheda non pertinente.
- `basi`: 0-2 basi, cioè le abilità che servono PRIMA e la cui mancanza spiega l'errore più comune. Puoi usare:
  - le chiavi di `basi-disponibili.txt` (prima colonna), scritte esattamente, per esempio `fisica-1/leggi-di-newton#2`;
  - un capitolo PRECEDENTE della stessa materia, oppure un capitolo di una materia indicata nel messaggio come «da descrivere», scritto come `<materia>/<capitolo>: <descrizione breve dell'abilità>` (sarà convertito dopo in una chiave).
  Metti la base più importante per prima. Nessuna base è meglio di una base forzata: la base deve essere una conoscenza *precedente* e diversa dall'abilità stessa, non la stessa abilità in un'altra materia.

## Uscita
Un file `/home/claude/sg-classi/<MATERIA>__<CAPITOLO>.json` con questa forma esatta:
```
{"materia":"<MATERIA>","argomento":"<CAPITOLO>",
 "abilita":["Nome 1","Nome 2", "..."],
 "domande":{"<CAPITOLO>/1":{"livello":2,"abilita":"Nome 1"}, "...": {}},
 "rimandi":{"Nome 1":{"teoria":["ancora"],"schede":[1],"basi":["analisi-1/derivate#1"]}, "...": {}}}
```
Le chiavi di "domande" sono "<CAPITOLO>/<n>" per TUTTI i file della cartella delle domande. Alla fine controlla con un piccolo script Python: ogni file ha una voce, livelli 1-3, ogni abilità usata è nell'elenco, ogni abilità ha almeno 6 domande con almeno 2 di livello 2 e 1 di livello 1, ogni ancora è nel file delle ancore sotto il capitolo giusto, ogni scheda esiste, ogni base con «#» è nel file delle basi.

Rispondi solo con un riepilogo breve: elenco delle abilità con il numero di domande per livello, e i casi dubbi.
