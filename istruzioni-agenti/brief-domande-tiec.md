# Domande a tempo della materia "TIEC Cattolica": 90 per capitolo, nessuna ripetizione

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Scrivi **solo** i file `1.md` … `90.md` in `src/content/domande/tiec/<capitolo>/`. Non toccare teoria, schede e tracce.

## A che cosa servono
Le domande a tempo del sito: una domanda alla volta, due minuti, quattro risposte, conferma, poi la spiegazione. Nel TIEC sono anche la banca della **simulazione** (48 quesiti in 60 minuti, 12 per area): devono avere la forma, la lunghezza e la difficoltà dei quesiti del test della Cattolica, che dà circa un minuto e un quarto a quesito. Le domande 1–10 dei capitoli compaiono anche nell'anteprima gratuita (la prima di ogni capitolo, le prime due di Logica e Inglese): falle rappresentative e curate.

## Prima di scrivere
1. Leggi `istruzioni-agenti/brief-tiec.md` (che cos'è il TIEC, pubblico, programma del tuo capitolo, notazioni) e `istruzioni-agenti/brief-domande.md` (formato del file, regole delle risposte, scrittura). Valgono entrambi, con le differenze scritte qui.
2. Leggi `GUIDA-CONTENUTI.md` e carica la skill **scrittura-umana-carmine** con lo strumento Skill.
3. Leggi la teoria del capitolo `src/content/teoria/tiec/<capitolo>.md` (tutte le sezioni), le 8 schede svolte e le 14 tracce: usa le stesse notazioni e gli stessi nomi delle regole.

## Differenze rispetto a `brief-domande.md`
- **Ogni file ha il testo completo della domanda** prima dell'elenco, autosufficiente: nessuna domanda prende il testo da una traccia. Le domande possono riprendere il tipo di una traccia, mai copiarne testo e numeri.
- Quattro risposte, elenco puntato `- …` senza lettere; `corretta: 1..4` nel frontmatter; poi `## Spiegazione` con 3–6 frasi.
- **Comprensione del testo**: ogni domanda contiene un brano originale breve (100–180 parole) e una domanda su quel brano. Al massimo 3 domande sullo stesso brano (ripeti il brano per intero in ciascun file); quindi almeno 30 brani diversi, su temi vari (lavoro, consumi, tecnologia, ambiente, demografia, scuola, impresa, città, salute pubblica, cultura). Niente enti, aziende o ricerche reali a cui attribuire dati. Tipi di domanda vari: informazione esplicita, inferenza, significato di una parola nel contesto, funzione di un connettivo, tesi dell'autore, titolo adatto, affermazione *non* deducibile, dato numerico del brano.
- **Inglese**: testo e risposte in inglese, spiegazione in italiano. Tipi vari come nel TIEC: completamento di frasi (tempi, condizionali, modali, passivo, discorso indiretto, relativi, comparativi, quantificatori, preposizioni, phrasal verbs), sinonimi e lessico in contesto, falsi amici, avvisi e messaggi brevi (che cosa significa il cartello, scopo dell'email), brevi brani di 80–140 parole con una domanda. Livello B1–B2. Una sola risposta grammaticalmente corretta e naturale.
- **Logica**: tutti i tipi del programma di `brief-tiec.md`. I diagrammi di Venn come risposte si possono descrivere a parole quando la figura non è indispensabile; se servono figure usa `::venn` o `::grafico` come nella teoria.
- **Matematica**: domande nello stile del TIEC (divisibilità di un polinomio, confronto di numeri, disequazione con l'insieme delle soluzioni, equazione di una retta con una certa proprietà, punto che appartiene a una parabola, valore di un logaritmo…). Risposte della stessa forma.

## Piano anti-ripetizione (obbligatorio, prima di scrivere)
Lavora in `/tmp/lavoro-domande-tiec/<capitolo>/`. Scrivi `piano.md` con una riga per ciascuna delle 90 domande: «n · sezione della teoria · abilità richiesta · situazione/tipo di testo · che cosa si chiede». Regole:
- nessuna coppia (abilità, situazione) ripetuta;
- **vietato** fare famiglie di varianti: stessa domanda con numeri cambiati, dato e incognita invertiti sullo stesso oggetto, «la variazione» o «il rapporto» fra due versioni dello stesso caso, testi a stampo con parole diverse;
- copri **tutte** le sezioni della teoria, in proporzione al loro peso nel test;
- difficoltà mista: circa 30 semplici (un passaggio), 40 medie, 20 più impegnative ma risolvibili in due minuti;
- almeno 10 domande su casi che nelle tracce e nelle schede non compaiono.
Prima di consegnare rileggi le 90 una accanto all'altra: se due si somigliano, riscrivine una. Puoi aiutarti con `python3 strumenti/domande-simili.py src/content/domande/tiec/<capitolo> 0.7`, ma il controllo vero è la lettura.

## Posizioni
Ogni posizione 1, 2, 3, 4 è corretta fra 20 e 25 volte sulle 90. Conta prima di consegnare.

## Controllo (obbligatorio)
- Matematica e logica numerica: ricalcola ogni risposta corretta con Python (sympy, `fractions.Fraction`) e verifica che le tre sbagliate siano diverse anche numericamente e non difendibili.
- Logica verbale, comprensione e inglese: nel file di lavoro, per ogni domanda, una riga che dice perché la corretta è l'unica difendibile (in comprensione: la frase del brano che la giustifica) e perché le altre sono sbagliate.
- Figure (se ci sono): `node strumenti/anteprima_figure.mjs /tmp/lavoro-domande-tiec/<capitolo>/figure.png <file…>` dalla radice del repository, 0 problemi, guarda il PNG.
- `python3 strumenti/yamlcheck.py src/content/domande/tiec/<capitolo>/*.md` senza errori.
- Nelle domande una formula `$$` di chiusura seguita da `?` sulla stessa riga fa fallire la build: chiudi la formula e scrivi il punto interrogativo nel testo.

## Rapporto (breve, in italiano)
File scritti, divisione fra le sezioni della teoria, quante semplici/medie/impegnative, situazioni nuove introdotte (elenco breve), posizioni 1-2-3-4, conferma di Python o del ragionamento scritto, figure e yamlcheck.
