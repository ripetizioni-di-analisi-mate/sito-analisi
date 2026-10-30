# Verifica di argomenti di "Matematica per concorsi"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento (materia `matematica-concorsi`):
- teoria: `src/content/teoria/matematica-concorsi/<slug>.md`
- quiz svolti: `src/content/svolti/matematica-concorsi/<slug>/*.md`
- quiz da fare: `src/content/dafare/matematica-concorsi/<slug>/*.md` (risposta nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a candidati dei concorsi pubblici: un risultato sbagliato, una risposta indicata con la lettera sbagliata o due opzioni entrambe corrette sono gli errori più gravi possibili. Controlla in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-matematica-concorsi.md` (le regole con cui sono stati scritti) e la skill di voce indicata lì.

## Cosa fare
1. Per OGNI quiz svolto e OGNI traccia: risolvi il problema da zero con Python (sympy, `itertools`, `fractions.Fraction`; script in `/tmp/verifica-mc/<slug>/`, non nel repository). Controlla che il valore corretto compaia **una sola volta** tra le cinque opzioni, che la lettera indicata (in "La risposta corretta è la **X**." o in "Risposta X:") sia quella giusta, che il valore scritto dopo "Risposta X:" coincida con l'opzione X, e che le opzioni sbagliate non siano equivalenti al risultato in un'altra forma. Controlla anche i passaggi intermedi degli svolti, le unità di misura, gli arrotondamenti.
2. Testo dei quesiti: deve contenere tutte le ipotesi necessarie (equiprobabilità, reimmissione, ritmo costante, numero di lettere dell'alfabeto, tipo di mazzo, valore di $\pi$ usato). Un quesito ambiguo, che ammette due letture con risposte diverse, va riscritto.
3. Teoria: regole enunciate con le ipotesi complete, esempi numerici che tornano, terminologia standard dei manuali italiani.
4. Stile: niente blocco `:::percorso`, niente prosa tra i blocchi; due punti mai al posto di un connettivo; nessuna personificazione o frase a effetto; frazioni in colonna; grassetto e corsivo come da guida (mai attorno a formule); mai "la parentesi". Correggi in modo puntuale, una frase alla volta, senza allungare il testo. Il tono deve essere quello del capitolo modello `proporzioni-e-percentuali`.
5. Lettere corrette: conta le lettere corrette negli svolti e nelle tracce. Se una lettera compare meno di 3 o più di 7 volte sui quiz svolti, oppure meno di 2 o più di 4 volte sulle tracce, riordina le opzioni di qualche quiz finché la distribuzione rientra, aggiornando **ogni** riferimento alle lettere (la frase finale, "Risposta X:", e i rimandi alle opzioni sbagliate nelle spiegazioni, come "L'opzione B, cioè …").
6. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; schede 1–2 `gratis: true`, le altre senza; cinque opzioni A–E per ogni quiz; `python3 strumenti/yamlcheck.py <file…>` con 0 errori.
7. Figure: `node strumenti/anteprima_figure.mjs /tmp/verifica-mc/<slug>/figure.png <file…>` dalla radice del repository, poi guarda il PNG: numeri coerenti col testo e con le opzioni, figure dentro il riquadro, etichette leggibili. Correggi quelle sbagliate e ridisegna.
8. Gli altri argomenti della materia sono già scritti: controlla che i richiami per nome siano coerenti con quei file e segnala ripetizioni vistose.
9. Correggi direttamente ogni errore con modifiche minime. Se un quiz è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo con Python.

## Rapporto (breve, in italiano)
Numero di quiz svolti e tracce verificati, distribuzione finale delle lettere, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), frasi corrette, eventuali dubbi.
