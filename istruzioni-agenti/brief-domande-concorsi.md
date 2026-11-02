# Domande a tempo per le materie dei concorsi (45 per argomento, solo italiano)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi **solo** file nuovi in `src/content/domande/<materia>/<argomento>/` del tuo argomento (materia `matematica-concorsi` oppure `logica-concorsi`). Le materie dei concorsi non hanno la versione inglese: niente file in `src/content-en/`.

## A che cosa servono
Le domande a tempo compaiono in tre posti: la pagina «Domande a tempo» dell'argomento (15 domande a caso per sessione), il capitolo finale «Prove d'esame» della materia (domande di tutti gli argomenti mescolate) e la **simulazione della prova preselettiva**, che pesca domande di matematica e di logica e le corregge in automatico. Il candidato vede una domanda alla volta, ha due minuti, sceglie tra **quattro** risposte e subito dopo legge la spiegazione. L'ordine delle risposte viene mescolato dal sito.

## Prima di scrivere
1. Leggi per intero `GUIDA-CONTENUTI.md` (norma di stile) e le regole di voce in `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`: le spiegazioni seguono quelle regole.
2. Leggi il brief con cui è stata scritta la materia: `istruzioni-agenti/brief-matematica-concorsi.md` oppure `istruzioni-agenti/brief-logica-concorsi.md` (pubblico, notazioni, errori tipici, metodi di controllo).
3. Leggi per intero la teoria dell'argomento `src/content/teoria/<materia>/<argomento>.md`, almeno 4 schede svolte e tutte le 14 tracce di `src/content/dafare/<materia>/<argomento>/`, per usare le stesse notazioni e lo stesso tono e per non copiarle.
4. Guarda un esempio di formato già online: `src/content/domande/precorso/logica/30.md`.

## Formato del file `src/content/domande/<materia>/<argomento>/<n>.md`, con n da 1 a 45
```
---
corretta: 3
---

Un capo d'abbigliamento costa $80$ euro. Il prezzo viene aumentato del $20\%$ e poi scontato del $20\%$. Qual è il prezzo finale?

- $80$ euro
- $76$ euro
- $76{,}80$ euro
- $64$ euro

## Spiegazione

Dopo l'aumento del $20\%$ il prezzo è $80 \cdot 1{,}2 = 96$ euro. Lo sconto del $20\%$ si calcola sul nuovo prezzo, quindi il prezzo finale è $96 \cdot 0{,}8 = 76{,}80$ euro. Il risultato $80$ euro è quello di chi somma le due variazioni come se si annullassero, mentre si applicano una dopo l'altra a prezzi diversi.
```
- Frontmatter con il solo campo `corretta`: posizione (da 1 a 4) della risposta corretta nell'elenco.
- **Ogni file ha il testo della domanda prima dell'elenco**, completo e autosufficiente (tutti i dati, tutte le premesse, l'anno se conta). Il file non è collegato a una traccia: non lasciare mai vuoto lo spazio prima dell'elenco.
- Esattamente **quattro** risposte, elenco puntato `- …`, senza lettere.
- Dopo l'elenco il titolo `## Spiegazione` e da 2 a 6 frasi (più formule in display se servono): il ragionamento completo che porta alla risposta e, quando è utile, l'errore da cui nasce una delle risposte sbagliate, nominata per esteso.
- La spiegazione non chiama mai le risposte per posizione o per lettera ("la prima", "la risposta B", "l'opzione C"): l'ordine viene mescolato.
- Niente blocchi `:::`, niente immagini, niente rimandi ad altre domande, agli esercizi o alla pagina. Ammessi nel testo: tabelle Markdown (dati, griglie di deduzione), diagrammi `::venn` (sintassi nell'intestazione di `src/plugins/venn.mjs`), formule.

## Che cosa scrivere
- **45 domande nuove** nello stile dei quiz dei bandi ("Quale delle seguenti …", "Se è vera l'affermazione …, quale è necessariamente vera?", "Quanti …?", "Che giorno della settimana …?"). Puoi riprendere l'idea di al massimo 8 tracce dell'argomento, cambiando dati e contesto; le altre sono nuove.
- **Copri tutto l'argomento**: distribuisci le domande su tutte le sezioni `##` della teoria, in proporzione al peso che hanno nei concorsi. Scrivi nel rapporto quante domande hai dedicato a ogni sezione.
- Difficoltà: circa 15 di base, 20 medie, 10 impegnative; tutte risolvibili a mano in **due minuti**, senza calcolatrice (numeri scelti perché i conti tornino).
- **Varietà**: nessuna domanda uguale o quasi uguale a un'altra dell'argomento, né a uno degli esercizi svolti o delle tracce (stesso schema con un numero cambiato non basta). Varia i contesti (uffici, turni, negozi, viaggi, regolamenti, classi, squadre) e le forme della risposta.
- Ogni domanda si legge da sola: verrà proposta in ordine casuale, mescolata con domande di altri argomenti.

## Regole per le risposte
- Una sola risposta corretta. Nessuna risposta sbagliata uguale alla corretta scritta in un'altra forma ($\dfrac{1}{2}$ e $0{,}5$; "Se non B allora non A" e "Se A allora B"; "Almeno uno non è" e "Non tutti sono").
- **Nessuna risposta sbagliata difendibile**: per ciascuna chiediti se un candidato potrebbe sostenere che è corretta anche lei (una conseguenza della risposta corretta, un caso particolare, un sottoinsieme, un arrotondamento). Se sì, cambiala o precisa la domanda.
- Le tre sbagliate nascono da **errori tipici** del candidato (quelli elencati nel brief della materia e nei "Metodi rapidi per i quiz" della teoria). Niente risposte assurde o scelte a caso.
- Risposte brevi e della stessa forma (tutti numeri con la stessa unità, tutte frasi brevi, tutti giorni della settimana). Al massimo 3 domande nell'argomento con una risposta del tipo "Nessuna delle precedenti" o "Non si può stabilire", e in quelle la risposta deve essere davvero vera o davvero falsa senza ambiguità.
- **Posizione della corretta distribuita**: sulle 45 domande ogni posizione 1, 2, 3, 4 è corretta da 10 a 13 volte. Conta prima di consegnare.

## Regole di scrittura (le stesse del sito)
- Frazioni sempre in colonna (`\dfrac` nel testo, `\frac` in display), anche negli esponenti; virgola decimale `{,}`; euro scritti "euro" dopo il numero; orari "le 15:40"; giorni della settimana in minuscolo.
- Deduzioni complete: premessa, connettivo esplicito (quindi, poiché, perciò, allora), conclusione. I due punti non sostituiscono un connettivo. Una frase, un passaggio.
- Nome della regola usata in **grassetto** quando ne ha uno (modus tollens, legge di De Morgan, principio dei cassetti, regola del complementare), come nella teoria.
- Esposizione di fatti, niente consigli, niente frasi a effetto o "da IA" (Ricorda, Attenzione!, fondamentale, cruciale, "non è X ma Y", domande retoriche, lineette lunghe). Mai "la parentesi": si nomina l'espressione.
- Ipotesi sempre esplicite nel testo ("o" inclusiva o esclusiva, chi dice sempre il vero o mente sempre, anno bisestile o no, "alcuni" nel senso di "almeno uno", estrazioni con o senza reimmissione, prezzi IVA inclusa o esclusa).

## Controllo (obbligatorio)
- Risolvi da zero OGNI domanda con Python in `/tmp/lavoro-domande-concorsi/<materia>-<argomento>/` (non nel repository; `pip install --break-system-packages sympy` se manca), con i metodi del brief della materia: sympy e `fractions` per i conti; tavole di verità con `itertools.product`; enumerazione dei modelli per i sillogismi; enumerazione completa delle assegnazioni (soluzione **unica**) per deduzioni e veri/bugiardi; `datetime` per i calendari; enumerazione per il calcolo combinatorio e la probabilità quando i casi sono pochi. Controlla che il valore in posizione `corretta` sia quello giusto e che ciascuna delle tre sbagliate sia falsa.
- `python3 strumenti/yamlcheck.py <file…>` dalla radice del repository su tutti i file.
- Conta le posizioni delle risposte corrette.

## Rapporto (breve, in italiano)
File scritti, divisione delle domande tra le sezioni della teoria, numero di domande di base, medie e impegnative, tracce di cui hai ripreso l'idea, conteggio finale delle posizioni 1-2-3-4, conferma del controllo con Python e di yamlcheck senza errori.
