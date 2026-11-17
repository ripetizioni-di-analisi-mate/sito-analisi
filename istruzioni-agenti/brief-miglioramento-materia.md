# Migliorare un capitolo di una materia «da sistemare di poco» (15/11/2026)

Repository: /home/claude/sito-analisi (sito Astro di teoria ed esercizi, in italiano).
Non usare git, non lanciare la build. Lavori su **un solo capitolo** (materia e slug nel messaggio che ricevi) e tocchi solo:
`src/content/teoria/<materia>/<slug>.md`, `src/content/svolti/<materia>/<slug>/`, `src/content/dafare/<materia>/<slug>/`.
Non toccare `src/content/domande/` (ci lavora un altro agente), `src/content-en/` né altri capitoli. Altri autori lavorano in parallelo sugli altri capitoli.

## Perché
Carmine misura ogni materia rispetto ad Analisi 1 su 15 aspetti (teoria, blocchi, dimostrazioni, figure, schede, esercizi svolti, tracce, domande). La tua materia è fra il 68% e l'83%: buona nel complesso, con difetti precisi. Il tuo compito è **colmare solo quei difetti** (elenco per materia in fondo), senza stravolgere il resto.

## Regola più importante: niente riscritture a tappeto
Carmine ha bocciato in passato le riscritture estese fatte per «rendere più chiaro» un testo (frasi gonfiate, paragrafi aggiunti di spiegazione generica). Quindi:
- il testo esistente corretto **resta**: aggiungi ciò che manca (figure, passaggi di calcolo mancanti, la spiegazione di un passaggio saltato, blocchi nuovi, schede nuove), correggi ciò che è sbagliato;
- ogni frase aggiunta porta un contenuto (un passaggio, un'ipotesi, un dato, un perché preciso); niente frasi di raccordo, riassunti, «come visto», «in sintesi»;
- **non cambiare** i titoli `##` esistenti, gli `#id` dei blocchi, i titoli delle schede, la numerazione e il campo `gratis` delle schede e delle tracce: sono collegati a indirizzi, indice dei teoremi, Studio guidato e motori di ricerca. Puoi aggiungere blocchi dentro le sezioni e, se serve, sezioni `##` nuove in fondo.

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` (norma di stile e formato). Niente blocco `:::percorso` e niente prosa tra i blocchi della teoria.
2. Leggi la skill di scrittura: `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`. Ogni frase nuova supera il suo controllo finale: connettivi espliciti (quindi, poiché, perciò, allora), i due punti non sostituiscono un connettivo, nessuna personificazione, niente frasi a effetto, niente tono prescrittivo («conviene», «è importante», «ricorda»), niente lineette lunghe, niente «non X ma Y», mai «la parentesi».
3. Leggi `istruzioni-agenti/brief-figure.md` (sintassi delle figure e controllo obbligatorio; il percorso del repository scritto lì è vecchio: usa quello sopra). Guarda come sono fatte le figure in un capitolo modello, per esempio `src/content/teoria/matematica-superiori-4/esponenziali.md` e `src/content/svolti/matematica-superiori-4/esponenziali/`.
4. Se esiste il brief della tua materia in `istruzioni-agenti/` (per esempio `brief-matematica-da-zero.md`, `brief-matematica-concorsi.md`), leggilo per notazioni e convenzioni.
5. Leggi per intero il tuo capitolo: teoria, tutte le schede, tutte le tracce.
6. Modello di esercizio svolto ben spiegato: `src/content/svolti/matematica-superiori-4/logaritmi/2.md` e `src/content/svolti/analisi-1/limiti/3.md`.

## Esercizi svolti: come si allunga un esercizio corto
Struttura (invariata): traccia; calcolo in formule display, un passaggio per riga (`\begin{aligned}` per le catene); sotto, `<div class="spiegazione">` (righe vuote prima e dopo il contenuto) con la spiegazione a parole.
Un esercizio è da completare se salta passaggi: un risultato scritto senza il conto che lo produce, una formula applicata senza dire quale e perché le sue ipotesi sono soddisfatte, una spiegazione che ripete il calcolo invece di giustificarlo. Allora:
- scrivi nel calcolo i passaggi intermedi mancanti (sostituzioni, semplificazioni, conversioni di unità, valori intermedi);
- nella spiegazione, una frase per passaggio: premessa, connettivo, conclusione; il nome della formula o del teorema e la condizione che lo rende applicabile;
- il risultato finale detto a parole, con le unità; niente riga finale ridondante «Il risultato è …» dopo la spiegazione.
Obiettivo indicativo: 180–260 parole per esercizio fra calcolo e spiegazione. Un esercizio già completo resta com'è.

## Figure
- Ogni figura serve all'esercizio o al concetto (grafico della funzione studiata, diagramma dei flussi nel tempo, schema, istogramma, densità con l'area evidenziata, retta di regressione sui punti, schema di rete o automa…). Solo i dati del testo, numeri coerenti con il testo, assi orientati con nome, al massimo due o tre curve, didascalia con le formule fra dollari e frazioni in colonna.
- Ogni figura nuova va disegnata con `node strumenti/anteprima_figure.mjs /tmp/lavoro-miglioramento/<materia>-<slug>/fig.png <file…>` dalla radice del repository e guardata con Read: lo script deve dare 0 problemi e la figura deve essere leggibile.

## Teoria: che cosa si aggiunge
Blocchi etichettati come nel resto del sito (`:::definizione`, `:::teorema` / `::::teorema` con `:::dimostrazione`, `:::esempio`, `:::osservazione`, `:::attenzione`, `:::richiamo`). Ogni blocco nuovo: un esempio numerico concreto, un caso tipico d'esame, un errore tipico con controesempio, una dimostrazione breve di una formula usata, una figura. Dopo ogni definizione o teorema nuovo, a che cosa serve con un piccolo esempio.

## Qualità (l'errore più grave è un risultato sbagliato)
- Ricalcola con Python e sympy (`pip install --break-system-packages sympy` se manca) ogni numero che scrivi o tocchi, da una cartella tua in `/tmp/lavoro-miglioramento/<materia>-<slug>/`. Se trovi un errore in un esercizio esistente, correggilo e segnalalo nel rapporto.
- Frazioni sempre in colonna (anche negli esponenti), virgola decimale `{,}`, graffa solo per condizioni da soddisfare insieme.
- Frontmatter YAML valido (`python3 strumenti/yamlcheck.py <file…>` dalla radice); il campo `teoria:` cita solo ancore che esistono nel file di teoria; blocchi `:::`/`::::` bilanciati.
- Esercizi e schede nuovi originali, non copiati da libri o prove d'esame.

## Consegna
Rapporto breve in italiano: che cosa hai aggiunto (figure in teoria e schede, blocchi, esercizi completati, schede o tracce nuove), errori trovati e corretti, mediana delle parole per esercizio svolto prima e dopo, conferma di sympy, figure (0 problemi, PNG guardato) e yamlcheck.

---

## Obiettivi per materia (fai solo quelli della tua)

### informatica-superiori-5 (Informatica 5° anno, liceo scienze applicate)
- Teoria: portala ad **almeno 7 figure** (oggi circa 3): grafi di automi e macchine di Turing, schemi di rete e incapsulamento, divisione in sottoreti, grafici dei tempi di esecuzione, metodo di bisezione e tangenti, regole dei trapezi e di Simpson con le aree, traiettorie di una simulazione. Per gli schemi `::grafico` con `assi=0`, `poligoni=`, `segmenti=`, `vettori=`, `etichette=`.
- Esercizi svolti: completa quelli corti (mediana oggi 109 parole) seguendo la sezione sopra; **almeno 5 schede su 8 con una figura**.
- Dove il capitolo è matematico (errori e zeri, integrazione numerica, complessità) aggiungi 1-2 dimostrazioni brevi di risultati usati (per esempio l'errore della bisezione dopo $n$ passi).

### matematica-finanziaria (Matematica finanziaria, università)
- Teoria: portala ad **almeno 7 figure** (oggi circa 1): asse dei tempi con i flussi (frecce verso l'alto per le entrate e verso il basso per le uscite) fatto con `::grafico` `assi=0` + `vettori=` + `etichette=`, montante in capitalizzazione semplice e composta, VAN in funzione del tasso con il TIR, prezzo di un titolo in funzione del rendimento, struttura per scadenza, piano di ammortamento.
- Esercizi svolti: completa quelli corti (mediana oggi 118 parole); **almeno 5 schede su 8 con una figura** (di solito il diagramma dei flussi).

### matematica-semestre-filtro (Matematica per il semestre filtro di Medicina)
- Esercizi svolti: è il difetto principale (mediana oggi 65 parole). Completa **ogni** esercizio corto con i passaggi e la spiegazione (obiettivo 160–220 parole); **almeno 5 schede su 8 con una figura** (triangolo con i lati nominati, grafico della funzione, vettori con le componenti, retta delle proporzioni…).
- Teoria: aggiungi 1-2 dimostrazioni brevi dove un risultato si ricava in poche righe (per esempio le proprietà dei logaritmi dalle potenze, la relazione fondamentale della goniometria).

### precorso (Precorso di Analisi 1, università)
- Schede svolte: oggi sono 5 per capitolo; scrivine **3 nuove, `6.md`, `7.md`, `8.md`** (senza campo `gratis`), su tipologie che le schede 1-5 non coprono e che all'esame o all'università si incontrano (per esempio con parametro, casi con condizioni di esistenza delicate, problemi che uniscono due argomenti del precorso). Ogni scheda: titolo al plurale, 3 esercizi, 200–300 parole ciascuno, almeno una con figura; frontmatter come le schede esistenti (`titolo`, `teoria`, `parole`).
- Tracce: oggi 12; aggiungi **`13.md` e `14.md`**, complete e con `:::soluzione` contenente il solo risultato finale, come le esistenti.
- Teoria: aggiungi **circa 10 blocchi nuovi** (esempi numerici, osservazioni su casi particolari, errori tipici in `:::attenzione` con controesempio) e **2 dimostrazioni brevi** di proprietà usate nel capitolo (per esempio le proprietà delle potenze o dei logaritmi, la formula della distanza, il segno del trinomio), senza cambiare titoli `##` e ancore esistenti: lo Studio guidato rimanda a quei paragrafi.
- Il Precorso ha anche la versione inglese: non toccarla. Nel rapporto elenca i file nuovi (andranno tradotti dopo).

### matematica-da-zero (Matematica zero, percorso per principianti, gratuita)
- Esercizi svolti: **almeno 5 schede su 8 con una figura** (oggi poche): retta dei numeri, rappresentazione delle frazioni come parti di un intero, grafico della retta, figure geometriche con le misure, soluzioni di una disequazione sulla retta.
- Teoria: aggiungi 2-3 figure dove aiutano e completa gli esercizi svolti che saltano passaggi. Tutte le schede hanno `gratis: true` (materia gratuita): lascialo, e le schede nuove, se ne scrivi, lo hanno anche loro.

### matematica-concorsi (Matematica per concorsi)
- Esercizi svolti: **almeno 5 schede su 8 con una figura** (oggi circa 2 per capitolo): grafici e tabelle dei dati, figure geometriche con le misure, diagrammi di Venn e ad albero, grafico delle proporzionalità. Le schede hanno quiz A-E: la figura non cambia il quiz né la lettera corretta.
- Teoria: portala ad almeno 8 figure.

### statistica (Statistica, università)
- Teoria: portala ad **almeno 8 figure** (oggi circa 4): istogrammi, box plot, funzione di ripartizione a gradini, densità con l'area della probabilità evidenziata, densità normale e della t con le code del test, intervallo di confidenza, nuvola di punti con la retta di regressione, densità congiunta o tabella a doppia entrata.
- Esercizi svolti: completa quelli corti (mediana oggi 110 parole); **almeno 6 schede su 10 con una figura**.

### fisica-superiori-4 (Fisica 4° anno, liceo scientifico; 16/11/2026, Carmine: «migliorala, manca poco, non farla da zero»)
Oggi 77% rispetto ad Analisi 1. Domande a tempo già buone (90 per capitolo, 99% di situazioni diverse): **non toccarle**. La versione inglese (`src/content-en/…`) non si tocca: la aggiorna un traduttore dopo la verifica.
Tono e notazioni: liceo scientifico, quarto anno, come `istruzioni-agenti/brief-fisica-superiori-5.md` (leggi le sezioni «Pubblico e tono», «Blocchi nella fisica», «Struttura degli esercizi», «Notazioni comuni»: valgono anche qui; lavoro $W$, regola della mano destra con pollice, altre dita e palmo). Le figure dei circuiti e degli schemi usano `::schema` come già fanno i capitoli della materia (guarda `src/content/teoria/fisica-superiori-4/circuiti-elettrici.md`); i grafici `::grafico`.
Obiettivi per capitolo (misurati sul capitolo, i numeri sono minimi indicativi, non riempitivi):
- **Teoria**: da circa 1.300–1.900 parole ad **almeno 2.300**; da 14–23 blocchi ad **almeno 30** (esempi numerici dopo ogni legge, osservazioni su casi particolari, `:::attenzione` con controesempio sugli errori tipici, `:::richiamo` dove una dimostrazione usa un risultato precedente); **almeno 3 dimostrazioni** `::::teorema` + `:::dimostrazione` di risultati che al liceo si ricavano davvero (per esempio: equazione di stato e trasformazioni del gas ideale, lavoro in un'isoterma, rendimento di Carnot, energia del moto armonico, effetto Doppler, legge dei punti coniugati dello specchio sferico, condizione dei massimi della doppia fenditura, campo di una distribuzione con Gauss, capacità del condensatore piano, resistenze in serie e parallelo, carica e scarica del condensatore) scritte passo per passo; **almeno 8 figure** (oggi 3–6): grafici p-V dei cicli, onde e fronti d'onda, raggi negli specchi e nelle lenti, figure di interferenza, linee di campo, schemi dei circuiti, grafici di $V(r)$, $E(r)$, $q(t)$.
- **Esercizi svolti**: mediana oggi circa 107 parole per esercizio (in Corrente e leggi di Ohm 71). Completa ogni esercizio corto come descritto sopra (obiettivo 180–260 parole fra calcolo e spiegazione): leggi in forma simbolica, risoluzione simbolica, sostituzione con le unità, spiegazione di ogni passaggio e dei versi. Dove una scheda ha 2 esercizi, puoi aggiungerne un terzo della stessa tipologia, un po' più difficile (non obbligatorio). Le schede che hanno già una figura la tengono; almeno 6 schede su 8 con una figura.
- **Tracce**: 14, restano. Correggi solo errori.
- Titoli `##` esistenti, `#id`, titoli e numerazione delle schede e campo `gratis` restano identici (lo Studio guidato e le domande rimandano lì).
