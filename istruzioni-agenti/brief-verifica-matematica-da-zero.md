# Verifica di argomenti di "Matematica da zero" (gratuita)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento (materia `matematica-da-zero`):
- teoria: `src/content/teoria/matematica-da-zero/<slug>.md`
- esercizi svolti: `src/content/svolti/matematica-da-zero/<slug>/*.md`
- esercizi da fare: `src/content/dafare/matematica-da-zero/<slug>/*.md` (risultato nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno letti gratuitamente da chi impara la matematica dalle basi (adulti che non la studiano da anni, studenti con lacune): un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-matematica-da-zero.md` (le regole con cui sono stati scritti) e la skill di voce indicata lì.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia: risolvi il problema da zero con sympy (script in `/tmp/verifica-mdz/<slug>/`, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, i segni, gli arrotondamenti, le unità di misura.
2. Teoria: enunciati con ipotesi complete, dimostrazioni corrette e senza salti, esempi numerici che tornano, terminologia standard dei manuali italiani.
3. Stile: niente blocco `:::percorso`, niente prosa tra i blocchi; due punti mai al posto di un connettivo; nessuna personificazione o frase a effetto; frazioni in colonna; grassetto e corsivo come da guida (mai attorno a formule). Correggi in modo puntuale, una frase alla volta, senza allungare il testo.
4. Livello: il tono deve essere quello descritto nel brief di scrittura (frasi brevi, lessico comune, ogni termine definito prima di usarlo, esempi numerici dopo ogni definizione e regola, nessun calcolo lasciato al lettore negli svolti, nessun riferimento a esami, nessuna frase rassicurante o etichetta di difficoltà). Mai "la parentesi" o "tra parentesi". Gli argomenti degli altri autori sono già scritti: controlla che i richiami per nome siano coerenti con quei file (stessi nomi dei teoremi, nessuna contraddizione) e segnala ripetizioni vistose.
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; tutte le 8 schede con `gratis: true`; `python3 strumenti/yamlcheck.py <file…>` con 0 errori.
6. Figure: `node strumenti/anteprima_figure.mjs /tmp/verifica-mdz/<slug>/figure.png <file…>` dalla radice del repository, poi guarda il PNG: numeri coerenti col testo, curve dentro il riquadro, etichette leggibili, tacche degli assi pulite. Correggi quelle sbagliate e ridisegna.
7. Correggi direttamente ogni errore con modifiche minime. Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo con sympy.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), frasi corrette, eventuali dubbi.
