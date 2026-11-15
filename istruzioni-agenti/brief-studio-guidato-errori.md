# Studio guidato · errori tipici delle risposte sbagliate (un capitolo)

Brief del 15/11/2026 (proposta P3 approvata da Carmine: «diagnosi dell'errore»). Un agente per capitolo.

Lavori su UN capitolo (indicati nel messaggio: MATERIA e CAPITOLO). Repository: /home/claude/sito-analisi, **in sola lettura**: non modificare nessun file del repository. Scrivi soltanto i due file di uscita indicati sotto.

## A che cosa serve
Lo Studio guidato è un test di circa 12 domande a scelta multipla (quattro risposte, una corretta) che trova le lacune di uno studente in difficoltà e gli indica da dove ripartire. Oggi il test sa soltanto se la risposta è giusta o sbagliata. Con il tuo lavoro saprà **quale errore** ha prodotto la risposta sbagliata scelta: nel risultato lo studente leggerà, per esempio, «Errore ricorrente: applicare il teorema di De l'Hôpital a un limite che non si presenta in forma indeterminata». Il risultato viene poi raccontato allo studente da un'IA, che userà solo quello che scrivi tu. Una diagnosi sbagliata fa più danno di nessuna diagnosi: in caso di dubbio, **nessuna diagnosi**.

## Materiale
- `/home/claude/sito-analisi/.sg/errori-input/<MATERIA>__<CAPITOLO>.json`: le 90 domande del capitolo con `id`, `testo` (Markdown con LaTeX), `scelte` (le quattro risposte, nell'ordine 1-4), `corretta` (numero da 1 a 4), `spiegazione`, `abilita` (indice) e `nomeAbilita`. In cima l'elenco `abilita` del capitolo.
- La teoria del capitolo, se ti serve: `src/content/teoria/<MATERIA>/<CAPITOLO>.md`.

## 1. Il catalogo degli errori del capitolo
Leggi tutte le domande e costruisci un catalogo di **errori tipici** del capitolo: di solito da 10 a 25. Un errore tipico è un errore di procedimento o di concetto che uno studente commette davvero e che si riconosce dal risultato, per esempio:
- «Applicare il teorema di De l'Hôpital a un limite che non si presenta in forma indeterminata»
- «Semplificare un fattore che si annulla nel punto senza escludere quel punto»
- «Dimenticare il fattore della derivata interna nella derivata di una funzione composta»
- «Scambiare la condizione necessaria con quella sufficiente»
- «Calcolare il determinante senza alternare i segni dei complementi algebrici»

Lo stesso errore deve servire per più domande: è così che il test riconosce un errore *ricorrente*. Non creare un errore diverso per ogni domanda. Ogni errore appartiene a un'abilità del capitolo (indice nell'elenco `abilita`).

Per ogni errore:
- `id`: identificativo breve in minuscolo con trattini (es. `lhopital-senza-forma-indeterminata`), unico nel capitolo.
- `nome`: l'errore descritto con un verbo all'infinito, 6-16 parole, in italiano matematico corretto. Lessico tecnico canonico (ipotesi *soddisfatta*, teorema che *si applica*). Niente «la parentesi» (nomina l'espressione), niente lineette lunghe, niente frasi a effetto. Formule solo se indispensabili, in `$…$`, frazioni sempre `\dfrac`.
- `fatto`: una frase che enuncia il fatto corretto che l'errore viola, in tono espositivo (non prescrittivo: niente «bisogna», «non si deve», «ricorda»), per esempio «Il teorema di De l'Hôpital si applica soltanto ai limiti nella forma $\dfrac{0}{0}$ o $\dfrac{\infty}{\infty}$.»
- `abilita`: indice dell'abilità.

Sono ammessi errori generici solo se riconoscibili e utili (per esempio «Sbagliare il segno di un termine nello sviluppo del quadrato di un binomio»). Non usare voci vaghe come «Errore di calcolo» o «Distrazione».

## 2. La diagnosi di ogni risposta sbagliata
Per ogni domanda e per ognuna delle tre risposte sbagliate, stabilisci quale errore del catalogo porta **esattamente** a quella risposta, ripercorrendo il procedimento sbagliato fino al risultato. Per le domande con un risultato calcolabile verifica con **sympy** che il procedimento sbagliato dia proprio quella risposta (installalo con `pip install sympy --break-system-packages` se manca). Per le domande concettuali (vero/falso, definizioni, enunciati) individua la confusione concettuale precisa che rende plausibile quella risposta.

Se una risposta sbagliata non deriva in modo chiaro da un errore riconoscibile (numero inventato, distrattore casuale, più errori diversi combinati, oppure non sei sicuro), metti `null`. Ci si aspetta una buona quota di `null`: è normale. Una diagnosi va data solo se un docente, guardando la risposta, direbbe con sicurezza «hai fatto questo errore».

Controlla anche la risposta indicata come corretta: se secondo te è sbagliata, o se una risposta sbagliata è difendibile, segnalalo in `problemi` (non correggere i file del sito).

## Uscita
1. `/home/claude/sg-errori/<MATERIA>__<CAPITOLO>.json` con questa forma esatta:
```
{"materia":"<MATERIA>","argomento":"<CAPITOLO>",
 "errori":[{"id":"…","nome":"…","fatto":"…","abilita":0}, …],
 "domande":{"<CAPITOLO>/1":{"1":"id-errore","2":null,"4":"altro-id"}, …},
 "problemi":["<CAPITOLO>/37: la risposta 2 è anch'essa corretta perché …"]}
```
In `domande` metti tutte le 90 domande; per ciascuna solo i numeri (come stringhe "1"-"4") delle tre risposte sbagliate, con l'`id` di un errore del catalogo oppure `null`. Ogni `id` usato deve esistere nel catalogo, e ogni errore del catalogo deve essere usato almeno una volta.
2. `/home/claude/sg-errori/verifiche/<MATERIA>__<CAPITOLO>.py`: lo script sympy con cui hai verificato le diagnosi numeriche (deve girare con `python3` senza errori e stampare, per ogni diagnosi verificata, `id domanda, risposta, OK`).

Prima di finire controlla con un piccolo script che il JSON sia valido e rispetti le regole sopra. Nel messaggio finale riporta in tre righe: numero di errori nel catalogo, quante risposte sbagliate hanno una diagnosi su 270, eventuali problemi trovati.
