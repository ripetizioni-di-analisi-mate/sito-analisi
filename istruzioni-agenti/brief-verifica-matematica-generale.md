# Verifica di argomenti di "Matematica generale"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento (materia `matematica-generale`):
- teoria: `src/content/teoria/matematica-generale/<slug>.md`
- esercizi svolti: `src/content/svolti/matematica-generale/<slug>/*.md`
- esercizi da fare: `src/content/dafare/matematica-generale/<slug>/*.md` (risultato nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti universitari: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-matematica-generale.md` (le regole con cui sono stati scritti) e la skill di voce indicata lì.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia: risolvi il problema da zero con sympy (script in `/tmp/verifica-mg/<slug>/`, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, i segni, gli arrotondamenti, le unità (euro, percentuali, anni).
2. Teoria: enunciati con ipotesi complete, dimostrazioni corrette e senza salti, esempi numerici che tornano, terminologia standard dei manuali italiani.
3. Stile: niente blocco `:::percorso`, niente prosa tra i blocchi; due punti mai al posto di un connettivo; nessuna personificazione o frase a effetto; frazioni in colonna; grassetto e corsivo come da guida (mai attorno a formule). Correggi in modo puntuale, una frase alla volta, senza allungare il testo.
4. Parte economica: deve rispettare il paragrafo "Peso della parte economica" del brief. Se è troppo presente, segnalalo nel rapporto (non riscrivere sezioni intere).
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; schede 1–3 `gratis: true`, le altre `gratis: false`; `python3 strumenti/yamlcheck.py <file…>` con 0 errori.
6. Figure: `node strumenti/anteprima_figure.mjs /tmp/verifica-mg/<slug>/figure.png <file…>` dalla radice del repository, poi guarda il PNG: numeri coerenti col testo, curve dentro il riquadro, etichette leggibili, tacche degli assi pulite. Correggi quelle sbagliate e ridisegna.
7. Correggi direttamente ogni errore con modifiche minime. Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo con sympy.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), frasi corrette, eventuali dubbi.
