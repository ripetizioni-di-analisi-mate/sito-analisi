# Domande a tempo di un capitolo «da sistemare di poco» (15/11/2026)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Lavori su **un solo capitolo**: `src/content/domande/<materia>/<slug>/` (materia e slug nel messaggio che ricevi). Non toccare teoria, svolti, tracce (ci lavora un altro agente), `src/content-en/` né altri capitoli.

## Prima di scrivere
1. Leggi `istruzioni-agenti/brief-domande.md` (formato, regole delle risposte, errori tipici come risposte sbagliate, figure, controlli), `GUIDA-CONTENUTI.md` e la skill di scrittura `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`. I brief possono contenere vecchi percorsi del repository: usa quello sopra.
2. Leggi la teoria del capitolo (`src/content/teoria/<materia>/<slug>.md`), le schede svolte e le tracce, e tutte le domande esistenti del capitolo.

## Caso A: informatica-superiori-5, matematica-finanziaria, matematica-semestre-filtro — spiegazioni più complete
Le 90 domande restano (testo, risposte, `corretta` invariati) salvo errori o doppioni. Il difetto è la spiegazione: oggi circa 20 parole, contro circa 50 di Analisi 1. Uno studente che ha sbagliato deve capire dalla sola spiegazione come si arriva alla risposta.
- Riscrivi la sezione `## Spiegazione` di **ogni** domanda: tutti i passaggi del calcolo con i valori intermedi (formule display se più di una riga), la formula o la regola applicata e perché si applica; quando una risposta sbagliata nasce da un errore tipico riconoscibile, una frase che lo nomina («Il valore $90$ si ottiene dimenticando il fattore…»), senza rimandi alla posizione delle risposte (l'ordine viene mescolato). Obiettivo 40–70 parole, mai frasi di riempimento.
- Se trovi una domanda sbagliata, con due risposte difendibili o banale per un difetto del testo (per esempio un tasso nullo che rende inutile la formula del capitolo), correggila o riscrivila sullo stesso numero e segnalalo.
- **Solo matematica-semestre-filtro**: lancia `python3 strumenti/domande-simili.py src/content/domande/matematica-semestre-filtro/<slug> 0.7` e leggi le domande una accanto all'altra; le domande che sono doppioni di un'altra (stessa abilità sulla stessa situazione con altri numeri, dato e incognita invertiti) vanno riscritte sul loro numero con una situazione nuova del capitolo. Tieni il migliore di ogni gruppo.

## Caso B: matematica-da-zero — capitolo da rifare a 90 domande
Oggi ci sono 45 domande per capitolo e sono quasi tutte varianti numeriche della stessa situazione (lo strumento `strumenti/domande-ripetitive.py` trova 3-6 situazioni diverse su 45). Carmine vuole **90 domande serie**: ognuna chiede qualcosa che lo studente non ha già fatto nelle altre 89.
- Lavora in `/tmp/lavoro-domande/matematica-da-zero-<slug>/`. Prima scrivi `piano.md`: una riga per domanda «n · sezione della teoria · abilità · situazione/oggetto · che cosa si chiede». Regole del piano: nessuna coppia (abilità, situazione) ripetuta; vietato riprendere una domanda cambiando i numeri, invertire dato e incognita sullo stesso oggetto, testi a stampo; coprire **tutte** le sezioni della teoria; circa due terzi di calcolo e un terzo di comprensione su un caso preciso (mai definizioni da recitare); varietà di oggetti e di tipo di risposta (valore, espressione, confronto, affermazione vera, scelta della figura o della rappresentazione giusta); almeno 10 domande su situazioni concrete (spesa, misure, ricette, distanze, mappe); difficoltà da principiante, tutte risolvibili in due minuti a mano.
- Poi riscrivi da zero `1.md … 45.md` e scrivi `46.md … 90.md`. Ogni file: frontmatter `corretta: k`, testo completo e autosufficiente, 4 risposte, `## Spiegazione` di 35–60 parole con i passaggi. Figure (`::grafico` per retta dei numeri e piano cartesiano, figure geometriche) dove aiutano, con solo i dati e assi orientati.
- Le risposte sbagliate nascono da errori tipici dei principianti (precedenza delle operazioni, segni, somma di frazioni con i denominatori, percentuali applicate alla base sbagliata…).
- Posizioni della risposta corretta: ogni posizione 1, 2, 3, 4 corretta fra 20 e 25 volte sulle 90.
- Alla fine `python3 strumenti/domande-ripetitive.py matematica-da-zero` deve dare per il tuo capitolo almeno 85 situazioni diverse su 90; controlla anche con `python3 strumenti/domande-simili.py src/content/domande/matematica-da-zero/<slug> 0.7` e leggendo.

## Regole comuni
- Spiegazioni nello stile del sito: deduzioni complete con connettivi (quindi, poiché, perciò, allora), una frase per passaggio, frazioni in colonna anche negli esponenti, virgola decimale `{,}`, graffa solo per condizioni da soddisfare insieme, mai «la parentesi», niente tono prescrittivo.
- Ricalcola con Python e sympy (`pip install --break-system-packages sympy` se manca) ogni risposta corretta e i valori intermedi che scrivi; le sbagliate distanti almeno il 10% e non difendibili.
- Figure: `node strumenti/anteprima_figure.mjs /tmp/lavoro-domande/<materia>-<slug>/fig.png <file con figura…>` dalla radice, 0 problemi, PNG guardato.
- `python3 strumenti/yamlcheck.py <file scritti…>` senza errori.

## Rapporto (breve, in italiano)
Caso A: domande con spiegazione riscritta, lunghezza media prima e dopo, domande corrette o riscritte e perché. Caso B: divisione delle 90 fra le sezioni della teoria, quante con figura, situazioni diverse misurate dallo strumento, conteggio delle posizioni 1-2-3-4. Sempre: conferma di sympy, figure e yamlcheck.
