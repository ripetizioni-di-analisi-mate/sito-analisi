# Verifica di argomenti di "Fisica 5° anno" (liceo scientifico)

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento (materia `fisica-superiori-5`):
- teoria: `src/content/teoria/fisica-superiori-5/<slug>.md`
- esercizi svolti: `src/content/svolti/fisica-superiori-5/<slug>/*.md`
- esercizi da fare: `src/content/dafare/fisica-superiori-5/<slug>/*.md` (risultato nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti del quinto anno del liceo scientifico: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-fisica-superiori-5.md` (le regole con cui sono stati scritti) e la skill di voce indicata lì.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia: risolvi il problema da zero, prima in forma simbolica con sympy e poi numericamente (script in `/tmp/verifica-fs5/<slug>/`, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, le unità di misura, le cifre significative, le costanti (devono essere quelle del brief) e la coerenza fisica (ordini di grandezza, casi limite, velocità minori di $c$).
2. Fisica, non solo conti: ogni legge è applicata con le ipotesi giuste? I versi sono giusti? Controlla in particolare: verso della forza di Lorentz e segno della carica (elettrone e protone), verso della corrente indotta con la legge di Lenz, segno meno della legge di Faraday-Neumann, verso delle linee di campo attorno al filo, sfasamenti nei circuiti in corrente alternata (corrente in ritardo nell'induttore, in anticipo nel condensatore), uso del tempo proprio e della lunghezza propria, energia cinetica relativistica al posto di quella classica quando $v$ non è piccola rispetto a $c$, conversioni tra joule ed elettronvolt.
3. Teoria: enunciati con ipotesi complete, dimostrazioni corrette e senza salti, esempi numerici che tornano, leggi sperimentali e postulati presentati come tali, terminologia dei manuali italiani del liceo.
4. Stile: niente blocco `:::percorso`, niente prosa tra i blocchi; due punti mai al posto di un connettivo; nessuna personificazione o frase a effetto; frazioni in colonna (l'unica barra ammessa è nei simboli delle unità come `\mathrm{T\cdot m/A}`); grassetto e corsivo come da guida (mai attorno a formule); mai "la parentesi". Correggi in modo puntuale, una frase alla volta, senza allungare il testo.
5. Livello: il tono deve essere quello del capitolo approvato `derivate` di Matematica 5° anno (più semplice delle materie universitarie, esempi numerici dopo ogni definizione e legge, nessun passaggio lasciato al lettore negli svolti). Gli argomenti degli altri autori della materia sono già scritti: controlla che i richiami per nome siano coerenti con quei file e che le notazioni siano quelle del brief.
6. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; schede 1–3 `gratis: true`, le altre senza `gratis: true`; `python3 strumenti/yamlcheck.py <file…>` con 0 errori.
7. Figure: `node strumenti/anteprima_figure.mjs /tmp/verifica-fs5/<slug>/figure.png <file…>` dalla radice del repository, poi guarda il PNG: numeri e versi coerenti col testo, curve dentro il riquadro, etichette leggibili, tacche degli assi pulite. Correggi quelle sbagliate e ridisegna.
8. Correggi direttamente ogni errore con modifiche minime. Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo con sympy.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), frasi corrette, eventuali dubbi.
