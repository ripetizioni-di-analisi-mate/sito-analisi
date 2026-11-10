# Verifica di un argomento di "Statica"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento.

Per l'argomento assegnato (materia `statica`):
- teoria: `src/content/teoria/statica/<slug>.md`
- esercizi svolti: `src/content/svolti/statica/<slug>/*.md`
- esercizi da fare: `src/content/dafare/statica/<slug>/*.md` (risultati nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti di Ingegneria: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-statica.md` (le regole con cui sono stati scritti, con le notazioni e la convenzione di segno comuni) e l'intestazione di `src/plugins/struttura.mjs`. Carica la skill **scrittura-umana-carmine** con lo strumento Skill prima di correggere qualsiasi frase.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia da fare: ricava i dati **dalla figura e dal testo** (devono coincidere: vincoli, posizione dei carichi, quote), poi risolvi il problema da zero in forma simbolica con sympy e numericamente (script in `/tmp/lavoro/verifica-statica-<slug>/`, non nel repository). Controlla anche i passaggi intermedi scritti negli svolti, le unità, i versi delle reazioni e le verifiche finali.
2. Statica, non solo conti:
   - i vincoli esplicano le reazioni giuste (carrello: una forza normale al piano di scorrimento; cerniera: due componenti; incastro: due componenti e un momento; pendolo: forza lungo l'asse; doppio pendolo: forza parallela alle bielle e momento);
   - l'analisi cinematica è corretta (conteggio di $3n$ e $s$, vincoli mal disposti riconosciuti, centri allineati come dicono i teoremi delle catene cinematiche);
   - nelle strutture composte le forze nelle cerniere interne rispettano azione e reazione;
   - nelle travature le aste scariche sono davvero scariche e gli sforzi rispettano l'equilibrio di ogni nodo; trazione positiva;
   - le caratteristiche della sollecitazione rispettano la convenzione di segno del brief ($N > 0$ trazione, $T > 0$ orario, $M > 0$ fibre inferiori o tratteggiate), i salti sotto forze e coppie concentrate e le relazioni $\dfrac{dT}{dx} = -q$, $\dfrac{dM}{dx} = T$;
   - nei lavori virtuali gli spostamenti virtuali sono compatibili con i vincoli rimasti e i segni del lavoro sono giusti; il risultato coincide con quello dell'equilibrio;
   - le linee di influenza hanno le ordinate giuste nei punti notevoli e il segno giusto; il valore per i carichi assegnati torna con il calcolo statico.
3. Teoria: enunciati con ipotesi complete, dimostrazioni corrette, esempi numerici che tornano, definizioni coerenti con il resto della materia (nomi dei vincoli, molteplicità, convenzioni).
4. Notazioni comuni (correggi se il tuo argomento se ne discosta, senza cambiare i risultati): $H_A$, $V_A$, $M_A$, $R_B$; coppia applicata $\mathcal{M}$; $q$ carico distribuito positivo verso il basso; momenti antiorari positivi; $N$, $T$, $M$; $C_1$, $C_{12}$, $\varphi$; $S_x$, $I_x$, $I_{xy}$, $G$, $x_G$, $y_G$; $\delta L$; $\eta(\xi)$; unità $\mathrm{kN}$, $\mathrm{m}$, $\mathrm{kN\,m}$, $\mathrm{kN/m}$ (sezioni in $\mathrm{cm}$).
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; nessun blocco `:::percorso`; schede 1–3 `gratis: true`, le altre `gratis: false`; frontmatter YAML valido (`python3 strumenti/yamlcheck.py <file…>`); frazioni in colonna (l'unica barra ammessa è nei simboli delle unità come `\mathrm{kN/m}`); le equazioni da soddisfare insieme in sistema con la graffa; nelle schede ogni traccia dice "in figura" e la figura dei dati segue subito il testo.
6. Figure: rendi tutte le figure con `node strumenti/anteprima_figure.mjs /tmp/lavoro/verifica-statica-<slug>/figure.png <file…>` dalla radice del repository e guarda il PNG (se è molto lungo, dividi i file in più chiamate): vincoli del tipo giusto e orientati verso il terreno giusto, carichi e quote coerenti con il testo, nessuna etichetta sovrapposta in modo illeggibile, **valori scritti sui diagrammi uguali a quelli calcolati nel testo** (i valori li calcola la figura dalle espressioni: se non tornano, è sbagliata l'espressione o il conto), $M$ dalla parte delle fibre tese, segni $+$ e $-$ su $N$ e $T$. Correggi quelle sbagliate.
7. Correggi direttamente ogni errore con modifiche minime, mantenendo lo stile (italiano da manuale, connettivi espliciti, grassetto e corsivo come da guida). Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo. Le correzioni di forma sono puntuali: niente riscritture estese.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), figure corrette, notazioni uniformate, eventuali dubbi non risolti.
