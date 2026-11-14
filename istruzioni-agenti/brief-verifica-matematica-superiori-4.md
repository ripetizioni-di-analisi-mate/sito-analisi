# Verifica di un argomento riscritto di "Matematica 4° anno" (liceo scientifico)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento (materia `matematica-superiori-4`):
- teoria: `src/content/teoria/matematica-superiori-4/<slug>.md`
- esercizi svolti: `src/content/svolti/matematica-superiori-4/<slug>/*.md`
- esercizi da fare: `src/content/dafare/matematica-superiori-4/<slug>/*.md` (risultato nel blocco `:::soluzione`)

Questi file sono appena stati riscritti da un altro autore e sono venduti a studenti del quarto anno del liceo scientifico: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-matematica-superiori-4.md` (le regole con cui sono stati scritti) e carica la skill **scrittura-umana-carmine** con lo strumento Skill.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia: risolvi il problema da zero con sympy (script in `/tmp/verifica-ms4/<slug>/`, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, i segni, i periodi delle soluzioni goniometriche (controllo numerico su un periodo), le condizioni di esistenza, gli arrotondamenti, le unità di misura.
2. Teoria: enunciati con ipotesi complete, dimostrazioni corrette e senza salti, esempi numerici che tornano, terminologia standard dei manuali italiani del liceo.
3. Stile: niente blocco `:::percorso`, niente prosa tra i blocchi; due punti mai al posto di un connettivo; nessuna personificazione o frase a effetto; niente tono prescrittivo; frazioni in colonna; mai "la parentesi"; graffa solo per condizioni da soddisfare insieme; grassetto e corsivo come da guida (mai attorno a formule). Correggi in modo puntuale, una frase alla volta.
4. Livello: il tono è quello dei capitoli approvati del 5° anno (`src/content/teoria/matematica-superiori-5/derivate.md`): esempi numerici dopo ogni definizione e teorema, nessun passaggio lasciato al lettore negli svolti, ogni passaggio spiegato sotto il calcolo dentro `<div class="spiegazione">`.
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; schede 1–3 `gratis: true`, le altre senza `gratis`; 8 schede e 14 tracce; `python3 strumenti/yamlcheck.py <file…>` con 0 errori.
6. Figure: `node strumenti/anteprima_figure.mjs /tmp/verifica-ms4/<slug>/figure.png <file…>` dalla radice del repository, poi guarda il PNG: numeri coerenti col testo, curve dentro il riquadro, etichette leggibili, assi orientati, angoli veri dove serve `uguale=1`. Correggi quelle sbagliate e ridisegna.
7. Correggi direttamente ogni errore con modifiche minime. Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo con sympy.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), frasi corrette, eventuali dubbi.
