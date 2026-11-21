# Revisione di chiarezza · Statistica e probabilità · teoria e domande a tempo (21/11/2026)

## Incarico (approvato da Carmine, titolare del sito)

Carmine ha letto il capitolo 1 riscritto (`src/content/teoria/statistica/dati-e-frequenze.md`) e ha detto: «adesso è chiaro». Quel capitolo è il **modello**: va riletto per intero prima di cominciare, e il tuo capitolo deve uscire allo stesso modo. Si lavora sulla **teoria** del capitolo (italiano e inglese) e sulle sue **90 domande a tempo** (italiano e inglese). Repository: `/home/claude/sito-analisi`.

Il tuo capitolo: `src/content/teoria/statistica/<capitolo>.md`, traduzione `src/content-en/teoria/statistica/<capitolo>.md`, domande `src/content/domande/statistica/<capitolo>/` e `src/content-en/domande/statistica/<capitolo>/`.

**Non toccare altro**: niente schede svolte, esercizi da fare, codice, dati, altri capitoli. **Nessun comando git che modifica** (niente add, commit, push, checkout, stash, restore). Testo di partenza: `git -C /home/claude/sito-analisi show HEAD:<percorso>`. Altri agenti lavorano in parallelo su altri capitoli. Non lanciare `strumenti/genera-statistica.py` (sovrascriverebbe la materia).

## Che cosa ha insegnato il capitolo 1 (le tre richieste di Carmine)

1. **Prima la situazione con i numeri, poi il nome, poi la formula.** Carmine non capiva questa frase: «In una scala a intervalli le differenze hanno significato, mentre lo zero è una scelta convenzionale». È corretta, ma astratta. Si capisce solo dopo aver visto che $\dfrac{20}{10}=2$ in gradi Celsius diventa $\dfrac{293{,}15}{283{,}15}\approx1{,}04$ in kelvin, mentre la differenza resta 10. Il blocco ora comincia da quel conto, poi dà il nome, poi la formula $y=ax+b$ che spiega il perché. **Ogni definizione e ogni teorema del tuo capitolo va controllato così**: lo studente, arrivato al nome, ha già visto con i numeri di che cosa si parla?
2. **Il capitolo comincia con un'introduzione: «perché sto studiando questo?».** Due o tre paragrafi di testo, fra il frontmatter e il primo titolo `##`, senza blocco. Dicono in concreto **che cosa si calcola** in questo capitolo e **a quale domanda risponde** (con un esempio con i numeri o una situazione reale), e **come si collega** ai capitoli prima e dopo (con il numero del capitolo). Lo schema del corso, da usare per i collegamenti: capitoli 1-2 statistica descrittiva (riassumere i dati raccolti); capitoli 3-7 probabilità (serve a misurare l'errore che si commette passando dal campione alla popolazione); capitoli 8-12 inferenza statistica (dal campione all'intera popolazione: campionamento, stima, intervalli, test, regressione). Leggi l'introduzione del capitolo 1 come modello.
3. **Niente parole vaghe al posto del contenuto.** Carmine ha chiesto «in che senso conoscere?» davanti a «la statistica serve a conoscere un gruppo». Verbi come conoscere, descrivere, studiare, misurare, permettere, rappresentare, caratterizzare, quantificare, se usati da soli, non dicono niente: si scrive **che cosa** si ottiene, con un esempio («la percentuale di studenti che usa l'autobus», «la probabilità che il pezzo sia difettoso, $0{,}03$»).

Inoltre, sempre dal capitolo 1: **dopo ogni definizione o teorema, a che cosa serve**, in una o due frasi concrete o con il rimando al capitolo in cui servirà («Gran parte del corso studia come usare una statistica campionaria per dire qualcosa di affidabile sul parametro»).

## Il rapporto di lettura del tuo capitolo

`/home/claude/qa-statistica/rapporti/<capitolo>.md` elenca, con le righe, le nozioni fuori ordine o mai definite, i punti in cui lo studente si perde (con una proposta), gli altri problemi della teoria e i problemi delle domande. **Ogni punto del rapporto va risolto.** Le proposte «Come lo trasformerei» del rapporto indicano il problema giusto ma a volte ripetono la voce astratta: non copiarle, riscrivile con le tre regole qui sopra.

## Metodo di controllo di ogni paragrafo (Carmine)

- La prima frase dice che cos'è la cosa, con un caso concreto; non che cosa «permette» o «descrive».
- Ogni termine, simbolo, lettera greca e sigla è definito alla prima comparsa (si dice anche come si legge: «$\mu$, si legge mu, indica…»), oppure ha un richiamo di una riga al capitolo in cui è stato definito. Vale anche per le parole comuni usate in senso tecnico e per i nomi delle leggi (normale, gamma, chi quadro, t di Student…).
- C'è un esempio con i numeri prima della regola o subito dopo. L'esempio si chiude con il risultato.
- Ogni «quindi», «perciò» segue da qualcosa di scritto. I passaggi di un calcolo o di una dimostrazione ci sono tutti; se un passo usa una proprietà, la proprietà è nominata (e, se è di un capitolo precedente, con il richiamo).
- Una frase, una cosa. Più oggetti quasi uguali vanno su righe diverse (elenco).
- Da riscrivere: «può/possono», «spesso», «in generale», «permette di», frasi che escludono un errore che il lettore non ha ancora, voce da norma tecnica («quasi certamente», «quasi ovunque», «versione», «modello adottato», «compatibile»: se servono, si spiegano con un esempio), verbi figurati, argomenti in più buttati in fondo al blocco.
- **Misura**: dove un blocco è già chiaro si ritocca una frase; dove è astratto si riscrive. Non si aggiungono esempi doppi.

## Voce e regole editoriali

Leggi `GUIDA-CONTENUTI.md`. Italiano da manuale universitario, frasi complete e brevi, forma impersonale, deduzioni con connettivo esplicito; i due punti non sostituiscono un connettivo. Niente personificazioni, metafore, frasi a effetto, domande retoriche, lineette lunghe, «Immagina», «In sintesi», «Ricorda», «fondamentale», «cruciale», «non è X ma Y». Esposizione di fatti, niente tono prescrittivo. Mai «la parentesi». Frazioni **sempre in colonna** (`\dfrac` nel testo, `\frac` nelle formule in evidenza), anche negli esponenti. Virgola decimale `{,}` in italiano. Graffa solo per condizioni da soddisfare insieme. Grassetto solo sui termini definiti, al massimo tre per blocco. Niente statistiche inventate: i dati degli esempi sono dati d'esercizio.

## Vincoli tecnici della teoria

- Frontmatter identico. Titoli `##` identici e nello stesso ordine.
- Ancore `{#…}` identiche, nello stesso ordine, sullo stesso tipo di blocco, con lo stesso `titolo="…"`. Ogni contenuto resta nel blocco con ancora in cui stava (schede, domande e ricerca puntano lì). Se il rapporto propone di spostare un blocco per l'ordine delle nozioni, **non spostarlo**: anticipa la definizione mancante in una o due frasi nel punto in cui il termine compare per la prima volta.
- Nessun contenuto tolto; i numeri degli esempi originali restano (correggili solo se sbagliati, e segnalalo).
- Righe delle figure (`::grafico{…}` e simili) copiate identiche, nello stesso blocco. Nessuna immagine o link nuovo.
- Blocchi ammessi: `:::definizione`, `::::teorema` con `:::dimostrazione`, `:::proposizione`, `:::esempio{titolo="…"}`, `:::osservazione`, `:::attenzione`, `:::richiamo`. Blocchi nuovi senza ancora. Niente `:::percorso`. Fuori dai blocchi c'è solo l'introduzione iniziale.
- Lunghezza: fra **1,3 e 1,7 volte** l'originale (il capitolo 1 è uscito a 1,7 con l'introduzione). Oltre 1,8 si tolgono ripetizioni, mai definizioni o passaggi.
- Ricalcola con Python ogni numero che scrivi o copi.

## Domande a tempo

Risolvi **ogni** problema delle domande indicato nel rapporto, in italiano e in inglese:

- domande con due risposte difendibili: si riscrive il testo in modo che sia giusta solo la risposta indicata;
- link `[Teoria del procedimento](/statistica/<capitolo>/teoria#ancora)` verso il blocco giusto (solo ancore che esistono);
- termini o procedimenti assenti dalla teoria: o si aggiungono alla teoria (una o due righe, con un caso numerico, nel blocco più vicino per argomento) o si riformula la domanda con termini già spiegati;
- doppioni: la seconda domanda della coppia si riscrive su una situazione diversa (non solo numeri diversi), con quattro opzioni nuove, risposta ricalcolata con Python, spiegazione completa;
- forma: opzioni con decimali troncati o riconoscibili dal numero di cifre, frazioni in linea, `$` mancanti, refusi, spiegazioni confuse.

Regole delle domande: frontmatter `corretta: N` (N fra 1 e 4) coerente con l'elenco; quattro opzioni; sezione `## Spiegazione` con i passaggi; nessun rimando alla posizione delle risposte (l'ordine viene mescolato); una formula `$$` di chiusura non va seguita da altro testo sulla stessa riga. Il file inglese con lo stesso numero ha la stessa domanda tradotta, stessa `corretta`, stesso link.

## Inglese della teoria

Traduzione integrale del nuovo testo italiano, introduzione compresa: stessa struttura, stessi blocchi, stesse formule (punto decimale), stessi elenchi e tabelle. Frontmatter, titoli `##`, titoli dei blocchi con ancora e righe delle figure presi **identici dal file inglese esistente**. Stessa grafia e stessi termini tecnici del file inglese esistente e delle domande inglesi del capitolo.

## Controllo prima di consegnare

```
python3 /home/claude/sito-analisi/strumenti/controlla_capitolo.py statistica <capitolo>
```

Nessun `ERRORE`; gli `AVVISO` letti uno per uno. Poi rileggi l'intero capitolo italiano nei panni di uno studente al primo esame di statistica: a ogni termine «è stato definito prima?», a ogni definizione «ho visto un esempio prima del nome?», a ogni frase «la capirei senza il professore?».

## Rapporto

Scrivi `/home/claude/qa-statistica/correzioni/<capitolo>.md` (breve, in italiano): parole prima e dopo; l'introduzione scritta; 5-8 punti su che cosa è cambiato; un esempio «Com'era / Com'è ora» con testo vero, scelto fra i punti in cui lo studente si perdeva davvero; errori trovati e corretti; domande modificate (numero e motivo); dubbi rimasti. Risposta finale: poche righe con l'esito del controllo e il percorso del rapporto.
