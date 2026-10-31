# Domande a tempo: risposta multipla e spiegazione per le tracce di una materia

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi solo nella cartella `src/content/domande/<materia>/<argomento>/` del tuo argomento.

## A che cosa servono
Il sito ha una funzione "Domande a tempo": lo studente vede una domanda alla volta, ha due minuti, sceglie tra quattro risposte, conferma, e subito dopo legge la spiegazione. Le domande nascono dalle tracce degli esercizi da fare: `src/content/dafare/<materia>/<argomento>/<n>.md`. Per ogni traccia adatta scrivi un file `src/content/domande/<materia>/<argomento>/<n>.md` con **lo stesso numero n**.

## Prima di scrivere
1. Leggi per intero `GUIDA-CONTENUTI.md` (norma di stile) e carica la skill **scrittura-umana-carmine** con lo strumento Skill: le spiegazioni seguono quelle regole di voce.
2. Leggi la teoria dell'argomento `src/content/teoria/<materia>/<argomento>.md` per usare le stesse notazioni e gli stessi nomi dei teoremi.
3. Leggi tutte le tracce dell'argomento e le relative `:::soluzione`.

## Formato del file
```
---
corretta: 2
---

- $0$
- $4$
- $1$
- Il limite non esiste

## Spiegazione

Per $x = 2$ il numeratore e il denominatore valgono $0$, quindi il limite si presenta nella forma indeterminata $\dfrac{0}{0}$.

Poiché $x^2 - 4 = (x - 2)(x + 2)$ e $x^2 - 3x + 2 = (x - 2)(x - 1)$, per $x \neq 2$ si ha
$$
\frac{x^2 - 4}{x^2 - 3x + 2} = \frac{x + 2}{x - 1} .
$$
Perciò il limite vale $\dfrac{2 + 2}{2 - 1} = 4$.
```
- `corretta`: posizione (da 1 a 4) della risposta corretta nell'elenco.
- Esattamente **quattro** risposte, elenco puntato `- …`, senza lettere (le lettere A-D le aggiunge il sito).
- Prima dell'elenco **non scrivere nulla** quando la domanda coincide con la traccia: il sito mostra il testo della traccia. Se la traccia chiede più cose o uno studio completo, scrivi prima dell'elenco **la domanda riformulata**, completa e autosufficiente (con la funzione o i dati scritti per intero), che chiede **un solo risultato** della traccia. Esempio per "Studiare la funzione $f(x) = x^2 e^{x}$…": "Per la funzione $f(x) = x^2 e^{x}$, quale punto è di massimo relativo?". Per una traccia che chiede di dimostrare, scegli una domanda sul risultato verificabile (per esempio l'intervallo in cui cade la radice), oppure salta la traccia.
- Dopo l'elenco, il titolo `## Spiegazione` e da 3 a 6 frasi (più formule in display se servono): il ragionamento completo che porta alla risposta, come lo scriverebbe Carmine alla lavagna. Niente blocchi `:::`, niente immagini, niente riferimenti alla struttura ("vedi la soluzione", "come nell'esercizio 3").
- Il file non ha altri campi nel frontmatter.

## Regole per le risposte
- La risposta corretta coincide con il risultato della `:::soluzione` della traccia (o con la parte richiesta dalla domanda riformulata).
- Le tre risposte sbagliate sono **errori tipici e plausibili** di uno studente: segno sbagliato, fattore dimenticato, limite notevole applicato male, derivata della funzione composta senza la derivata interna, intervallo con l'estremo sbagliato, carattere della serie opposto. Niente risposte assurde o scelte a caso.
- Una sola risposta corretta. Nessuna risposta sbagliata può essere uguale alla corretta scritta in un'altra forma ($\dfrac{1}{2}$ e $0{,}5$; $\ln 4$ e $2\ln 2$).
- Risposte brevi e della stessa forma (tutti numeri, tutti intervalli, tutte frasi brevi). Al massimo una risposta del tipo "Il limite non esiste" / "Nessuna delle precedenti" per argomento ogni tre domande.
- **Posizione della corretta distribuita**: nell'argomento ogni posizione 1, 2, 3, 4 è corretta circa lo stesso numero di volte (differenza massima di 2 tra la più e la meno usata). Conta prima di consegnare.
- Risolvibile in due minuti con carta e penna. Se la traccia richiede molto più tempo, riformula la domanda su un passaggio o un risultato parziale.

## Regole di scrittura (le stesse del sito)
- Frazioni sempre in colonna (`\dfrac` nel testo, `\frac` in display), anche negli esponenti; virgola decimale `{,}`.
- Deduzioni complete: premessa, connettivo esplicito (quindi, poiché, perciò, allora), conclusione. I due punti non sostituiscono un connettivo. Una frase, un passaggio.
- Lessico tecnico corretto: ipotesi *soddisfatta* o *verificata*, il teorema *si applica*. Nome del teorema o del limite notevole usato, come nella teoria.
- Esposizione di fatti, niente consigli, niente frasi a effetto o "da IA" (Ricorda, Attenzione!, fondamentale, cruciale, "non è X ma Y", domande retoriche, lineette lunghe).
- Mai "la parentesi": si nomina l'espressione. Sistemi con graffa solo per condizioni da soddisfare insieme.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta **e** verifica che ciascuna delle tre sbagliate sia davvero diversa dalla corretta (anche numericamente). Lavora in `/tmp/lavoro-domande/<argomento>/`, non nel repository (`pip install --break-system-packages sympy` se manca).
- Controlla il frontmatter con `python3 strumenti/yamlcheck.py <file…>` dalla radice del repository.
- Conta le posizioni delle risposte corrette.

## Rapporto (breve, in italiano)
Numero di tracce, file creati, tracce saltate (numero e motivo), domande riformulate (numero), conteggio delle posizioni corrette 1-2-3-4, conferma del controllo con sympy e di yamlcheck senza errori.
