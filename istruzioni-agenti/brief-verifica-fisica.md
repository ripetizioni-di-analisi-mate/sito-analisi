# Verifica di argomenti di "Fisica 1"

Repository: /home/claude/sito-analisi1. Non usare git, non lanciare la build. Modifica solo i file dei tuoi argomenti.

Per ciascun argomento assegnato (materia `fisica-1`):
- teoria: `src/content/teoria/fisica-1/<slug>.md`
- esercizi svolti: `src/content/svolti/fisica-1/<slug>/*.md`
- esercizi da fare: `src/content/dafare/fisica-1/<slug>/*.md` (risultato nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti universitari: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md` e istruzioni-agenti/brief-fisica.md (le regole con cui sono stati scritti).

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia da fare: risolvi il problema da zero, prima in forma simbolica con sympy e poi numericamente (script in /tmp/lavoro/<cartella indicata>, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, le unità di misura, le cifre significative e la coerenza fisica (segni, versi, ordini di grandezza, casi limite).
2. Fisica, non solo conti: ogni legge è applicata con le ipotesi giuste? (per esempio conservazione dell'energia meccanica solo senza lavoro di forze non conservative; conservazione della quantità di moto solo con risultante esterna nulla o impulsiva trascurabile; adiabatica reversibile per $pV^\gamma$ costante). I diagrammi delle forze contengono tutte e sole le forze presenti, con i versi giusti?
3. Teoria: enunciati con ipotesi complete, dimostrazioni corrette, esempi numerici che tornano, principi e leggi sperimentali presentati come tali.
4. Notazioni comuni a tutta la materia (correggi se il tuo argomento se ne discosta, senza cambiare i risultati):
   - lavoro $L$, energia cinetica $K$, energia potenziale $U$, energia meccanica $E$, lavoro delle forze non conservative $L_{\text{nc}}$;
   - tensione di un filo $\vec{T}$ (modulo $T$); momento di una forza $\vec{\tau}$; momento angolare $\vec{L}$ solo dove non si confonde col lavoro (nel corpo rigido il lavoro si indica $W$ solo se serve distinguerli, dichiarandolo);
   - periodo $T$: dove nella stessa pagina servono sia la tensione sia il periodo (pendolo), la tensione si indica $\vec{T}$ e il periodo $T_0$ oppure si dichiara esplicitamente il simbolo scelto la prima volta;
   - lunghezza del pendolo $\ell$; angolo del piano inclinato $\alpha$; $\theta$ angolo tra forza e spostamento;
   - termodinamica: $Q$ assorbito dal sistema, $L$ fatto dal sistema, $\Delta U = Q - L$, $R = 8{,}314\,\mathrm{J/(mol\cdot K)}$.
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; schede 1–3 `gratis: true`, le altre `gratis: false`; frontmatter YAML valido (un elemento di lista che contiene `{`, `}`, `:` o `[` va fra virgolette); frazioni in colonna (l'unica barra ammessa è nei simboli delle unità come `\mathrm{m/s}`).
6. Figure: rendi tutte le figure dei tuoi file con `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository e guarda il PNG: numeri coerenti col testo, etichette leggibili, assi orientati. Correggi quelle sbagliate.
7. Correggi direttamente ogni errore con modifiche minime, mantenendo lo stile (italiano da manuale, connettivi espliciti, grassetto e corsivo come da guida). Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo.

## Rapporto (breve, in italiano)
Per ogni argomento: numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), notazioni uniformate, eventuali dubbi non risolti.
