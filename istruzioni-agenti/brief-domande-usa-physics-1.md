# Domande a tempo di "University Physics I · Mechanics"

Repository: `/home/claude/sito-analisi`. Scrivi le domande a tempo di **un** argomento del corso americano. Sono quiz a 4 risposte con due minuti ciascuno, in inglese, sul programma statunitense.

Non usare git, non lanciare la build, non toccare file fuori dalla cartella del tuo argomento. Altri autori lavorano in parallelo sugli altri argomenti.

## Prima di scrivere
1. Leggi la teoria del tuo argomento: `src/content-us/teoria/physics-1-mechanics/<slug>.md`. Le domande coprono quella, e solo quella.
2. Guarda le schede svolte e le tracce dello stesso argomento (`src/content-us/svolti/...` e `src/content-us/dafare/...`) per sapere che cosa è già chiesto lì: le domande non ne sono la copia.
3. Leggi un file italiano come modello di formato: `src/content-en/domande/fisica-1/lavoro-ed-energia/3.md`.

## Che cosa produrre
`src/content-us/domande/physics-1-mechanics/<slug>/1.md … 90.md`

Ogni file:

```
---
corretta: 2
---

Testo della domanda, una o due frasi.

- prima risposta
- seconda risposta
- terza risposta
- quarta risposta

## Explanation

Perché la risposta giusta è giusta, in due o tre frasi, con il conto se serve.
```

- `corretta` è il numero (1-4) della risposta giusta nell'elenco scritto. **Distribuisci le posizioni**: circa 22 domande per ciascuna delle quattro posizioni, senza schemi regolari.
- Il testo della domanda è sempre presente e si capisce da solo, senza aver letto altro.
- Le quattro risposte sono brevi e omogenee fra loro (stesse unità, stesso numero di cifre, stessa forma).

## Contenuto delle 90 domande
Copri tutto il capitolo, in proporzione al peso delle sue sezioni. Mescola:
- domande di concetto (che cosa afferma una legge, quale ipotesi serve, che cosa cambia se un dato cambia);
- domande di lettura (un grafico, un diagramma di corpo libero, una situazione descritta a parole);
- domande di calcolo rapido, risolvibili in meno di due minuti a mente o con pochi passaggi;
- domande sui casi limite e sui segni.

Nessuna domanda deve richiedere più di due minuti né più di tre passaggi di calcolo.

## Le risposte sbagliate
Ogni risposta sbagliata nasce da un errore che uno studente fa davvero: unità non convertite, segno invertito, seno al posto del coseno, massa dimenticata, fattore $\dfrac{1}{2}$ perso, raggio al posto del diametro.

**Nessuna risposta sbagliata deve essere difendibile.** Rileggi ogni domanda chiedendoti se una delle altre tre possa essere giusta sotto una lettura ragionevole del testo; se può esserlo, cambia il testo o la risposta. Attenzione ai casi tipici: intervalli in cui una funzione cresce (chiedi «il più ampio intervallo»), domande che ammettono più di una risposta corretta per imprecisione del testo.

Le risposte numeriche sbagliate distano almeno il 10% da quella giusta, così un arrotondamento non fa sbagliare chi ha ragionato bene.

Nella spiegazione non si nomina mai la posizione di una risposta («la prima», «la terza»): l'ordine viene mescolato quando la domanda arriva allo studente.

## Convenzioni (le stesse del resto del corso)
- Inglese da manuale, frasi complete, connettivi espliciti.
- **Punto decimale**; **frazioni in colonna** con `\dfrac`; unità in `\mathrm` con spazio sottile; $g = 9.81\,\mathrm{m/s^2}$ salvo dichiarazione diversa.
- Vettori con la freccia; 2-3 cifre significative coerenti con i dati.
- Niente frasi di riempimento, niente domande retoriche, niente etichette di difficoltà.

## Verifica prima di consegnare
- Ricalcola ogni domanda di calcolo con `python3` e sympy da una cartella tua nello scratchpad.
- `python3 strumenti/yamlcheck.py <file…>` deve dare 0 errori.
- Controlla che non ci siano doppioni fra le 90 domande né con le tracce dell'argomento.
- Controlla la distribuzione di `corretta` sulle quattro posizioni.

## Consegna
Rapporto breve in italiano: quante domande per sezione del capitolo, la distribuzione delle risposte corrette, che cosa hai verificato e con che cosa, e gli errori che hai corretto strada facendo.
