# Studio guidato · Analisi 2: classificazione delle domande e rimandi di un capitolo

Lavori su UN capitolo di Analisi matematica 2 (indicato nel messaggio). Repository: /home/claude/sito-analisi (SOLO LETTURA: non modificare nessun file del repository). Scrivi soltanto il file di uscita indicato sotto.

## Che cosa è lo Studio guidato
Uno studente in difficoltà sceglie il capitolo su cui è bloccato. Il test propone una domanda di livello medio per ogni abilità del capitolo; se sbaglia, una domanda più semplice sulla stessa abilità; se sbaglia anche quella, una domanda sulla **base** di quell'abilità (un'abilità di Analisi 1, del Precorso o di un capitolo precedente di Analisi 2). Alla fine indica, per ogni lacuna, il **paragrafo della teoria** e la **scheda svolta** da cui ripartire. Perciò servono tre cose, fatte con cura: livello e abilità di ogni domanda, e i rimandi di ogni abilità.

## Materiale
- Domande: `src/content/domande/analisi-2/<capitolo>/<n>.md` (90 file: frontmatter `corretta`, testo, quattro risposte, `## Spiegazione`). Alcune domande hanno il testo vuoto: in quel caso il testo è la traccia dell'esercizio con lo stesso numero in `src/content/dafare/analisi-2/<capitolo>/<n>.md` (se esiste).
- Teoria: `src/content/teoria/analisi-2/<capitolo>.md`. Le ancore dei paragrafi `##` (da usare ESATTAMENTE come scritte) sono in `/home/claude/sg-rif/ancore-analisi-2.txt`.
- Schede svolte: `src/content/svolti/analisi-2/<capitolo>/<n>.md` (titolo nel frontmatter, poi gli esercizi). Elenco con i titoli in `/home/claude/sg-rif/schede-analisi-2.txt`.
- Basi disponibili (abilità già classificate di Analisi 1 e del Precorso, con la loro chiave): `/home/claude/sg-rif/basi-disponibili.txt`.
- Ordine dei capitoli di Analisi 2: funzioni-di-piu-variabili, calcolo-differenziale, funzioni-implicite, massimi-e-minimi, curve-e-integrali-di-linea, campi-vettoriali, integrali-doppi-e-tripli, superfici-e-flussi, successioni-e-serie-di-funzioni, serie-di-potenze, serie-di-fourier.

## 1. Le abilità del capitolo
Definisci PRIMA l'elenco delle abilità del capitolo: da 6 a 8, nomi brevi in italiano (2-6 parole) comprensibili da uno studente (es. «Derivate parziali e gradiente», «Differenziabilità», «Derivata direzionale», «Piano tangente»). Ogni abilità è un procedimento o un concetto che si può sbagliare in modo riconoscibile e che ha un posto preciso nella teoria. Ordine: quello del programma (della teoria). Ogni abilità deve avere almeno 8 domande, di cui almeno una di livello 1, una di livello 2 e una di livello 3 se possibile (il test chiede prima il livello medio, poi uno più semplice).

## 2. Livello e abilità di ogni domanda
Leggi testo, risposte e spiegazione di OGNI domanda (non indovinare dal numero: le domande 46-90 sono spesso varianti delle prime).
- 1 = base: applicazione diretta di una definizione o di una formula, uno o due passaggi immediati.
- 2 = medio: il procedimento tipico del capitolo in più passaggi.
- 3 = avanzato: più tecniche combinate, parametri o casi da distinguere, ipotesi di teoremi da verificare, risposte sbagliate costruite su errori sottili.
Giudica per uno studente che prepara l'esame. Non forzare tre fasce uguali, ma in tutto il capitolo almeno 15 domande per livello.

## 3. I rimandi di ogni abilità
Per ogni abilità:
- `teoria`: 1-2 ancore del file delle ancore (paragrafi `##` del capitolo) dove l'abilità è spiegata. Almeno una.
- `schede`: 0-2 numeri di schede svolte del capitolo che esercitano proprio quell'abilità (leggi le schede, non solo i titoli). Meglio nessuna che una scheda non pertinente.
- `basi`: 0-2 basi, cioè le abilità che servono PRIMA e la cui mancanza spiega l'errore più comune (es. per «Derivate parziali e gradiente» la base è «analisi-1/derivate#1  Regole di derivazione»). Puoi usare:
  - le chiavi di `/home/claude/sg-rif/basi-disponibili.txt` (Analisi 1 e Precorso), scritte esattamente;
  - un capitolo PRECEDENTE di Analisi 2, scritto come `analisi-2/<capitolo>: <descrizione breve dell'abilità>` (sarà convertito dopo).
  Metti la base più importante per prima. Nessuna base è meglio di una base forzata.

## Uscita
Un file `/home/claude/sg-classi/analisi-2__<capitolo>.json` con questa forma esatta:
```
{"materia":"analisi-2","argomento":"<capitolo>",
 "abilita":["Nome 1","Nome 2", "..."],
 "domande":{"<capitolo>/1":{"livello":2,"abilita":"Nome 1"}, "...": {}},
 "rimandi":{"Nome 1":{"teoria":["ancora"],"schede":[1],"basi":["analisi-1/derivate#1"]}, "...": {}}}
```
Le chiavi di "domande" sono "<capitolo>/<n>" per TUTTI i 90 file. Alla fine controlla con un piccolo script: ogni file ha una voce, livelli 1-3, ogni abilità usata è nell'elenco, ogni abilità ha almeno 8 domande, almeno 15 domande per livello, ogni ancora è nel file delle ancore del capitolo, ogni scheda esiste, ogni base di Analisi 1 o Precorso è nel file delle basi.

Rispondi solo con un riepilogo breve: elenco delle abilità con il numero di domande per livello, e i casi dubbi.
