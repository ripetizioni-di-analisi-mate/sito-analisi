# Verifica di un argomento di "Meccanica razionale"

Repository: /home/claude/sito-analisi. Non usare git, non lanciare la build. Modifica solo i file del tuo argomento.

Per l'argomento assegnato (materia `meccanica-razionale`):
- teoria: `src/content/teoria/meccanica-razionale/<slug>.md`
- esercizi svolti: `src/content/svolti/meccanica-razionale/<slug>/*.md`
- esercizi da fare: `src/content/dafare/meccanica-razionale/<slug>/*.md` (risultati nel blocco `:::soluzione`)

Questi file sono stati scritti da un altro autore e saranno venduti a studenti di Ingegneria, Matematica e Fisica: un risultato sbagliato è l'errore più grave possibile. Controllali in modo indipendente, senza fidarti dei conti scritti. Leggi prima `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-meccanica-razionale.md` (le regole con cui sono stati scritti, con le notazioni e le convenzioni comuni) e l'intestazione di `src/plugins/struttura.mjs`. Carica la skill **scrittura-umana-carmine** con lo strumento Skill prima di correggere qualsiasi frase.

## Cosa fare
1. Per OGNI esercizio svolto e OGNI traccia da fare: ricava i dati **dalla figura e dal testo** (devono coincidere: vincoli, posizione delle forze, angoli, quote), poi risolvi il problema da zero in forma simbolica con sympy (script in `/tmp/lavoro/verifica-mecraz-<slug>/`, non nel repository). Controlla anche i passaggi intermedi, le unità, i segni e le verifiche finali.
2. Meccanica, non solo conti:
   - i gradi di libertà sono contati bene e le coordinate lagrangiane descrivono davvero tutte le configurazioni compatibili con i vincoli;
   - le reazioni vincolari sono quelle che il vincolo può esplicare (appoggio liscio: forza normale; carrello o manicotto: forza normale alla guida; cerniera: due componenti; incastro: due componenti e un momento; filo: tensione lungo il filo, solo di trazione; puro rotolamento: componente di attrito statico oltre alla normale);
   - l'energia cinetica di un corpo rigido è calcolata con il polo giusto ($G$ o il punto fisso) e con il momento d'inerzia giusto; i momenti d'inerzia tornano con l'integrale e con Huygens-Steiner;
   - il potenziale rispetta la convenzione del brief ($\vec{F} = \operatorname{grad} U$, $V = -U$, peso $U = -mg\,y_G$, molla $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$) e i segni sono coerenti in tutta la scheda;
   - le equazioni cardinali hanno il termine $\vec{v}_O \wedge \vec{Q}$ quando il polo è mobile, oppure il polo è scelto in modo che si annulli e questo è detto;
   - le equazioni di Lagrange danno lo stesso risultato delle equazioni cardinali nei casi a un grado di libertà, e gli integrali primi dichiarati si conservano davvero (verificalo derivando);
   - la condizione di puro rotolamento è usata dove è dichiarata (velocità nulla del punto di contatto) e il legame fra le coordinate è coerente;
   - le configurazioni di equilibrio sono tutte quelle che annullano le derivate del potenziale (nessuna persa, nessuna spuria), e la stabilità segue dal segno della derivata seconda o dalla matrice hessiana, con i casi degeneri discussi;
   - le pulsazioni proprie risolvono $\det(\mathbb{V} - \omega^2\,\mathbb{A}) = 0$ e sono reali e positive attorno a una configurazione stabile.
3. Teoria: enunciati con ipotesi complete, dimostrazioni corrette e chiuse, esempi numerici che tornano, definizioni coerenti con il resto della materia (nomi dei vincoli, convenzione del potenziale, convenzione del tensore d'inerzia).
4. Notazioni comuni (correggi se il tuo argomento se ne discosta, senza cambiare i risultati): $P - O$ per la posizione, $\wedge$ per il prodotto vettoriale, $\vec{R}$, $\vec{M}_O$, $\vec{\Phi}_A$, $\vec{Q}$, $\vec{K}_O$, $T$, $U$, $V$, $\mathcal{L} = T + U$, $\mathbb{I}_O$ con $I_{xy} = \int xy\,dm$, $\vec{\omega}$, $q_h$, $\delta L$, $Q_h$; momenti e rotazioni antiorari positivi; unità SI.
5. Formato: ogni ancora citata nei campi `teoria:` esiste come `#id` nel file di teoria; blocchi `:::`/`::::` bilanciati; nessun blocco `:::percorso`; schede 1–3 `gratis: true`, le altre `gratis: false`; frontmatter YAML valido (`python3 strumenti/yamlcheck.py <file…>`); frazioni in colonna (l'unica barra ammessa è nei simboli delle unità); le equazioni da soddisfare insieme in sistema con la graffa; nelle schede ogni traccia dice "in figura" e la figura dei dati segue subito il testo.
6. Figure: rendi tutte le figure con `node strumenti/anteprima_figure.mjs /tmp/lavoro/verifica-mecraz-<slug>/figure.png <file…>` dalla radice del repository e guarda il PNG (se è molto lungo, dividi i file in più chiamate): vincoli del tipo giusto e orientati verso il terreno giusto, forze applicate nei punti giusti e con il verso del testo, angoli misurati da dove dice il testo e con il verso dichiarato, molle e fili riconoscibili, quote coerenti con i dati, nessuna etichetta sovrapposta in modo illeggibile, grafici del potenziale con gli assi orientati e i punti stazionari nelle posizioni calcolate. Correggi quelle sbagliate.
7. Correggi direttamente ogni errore con modifiche minime, mantenendo lo stile (italiano da manuale, connettivi espliciti, grassetto e corsivo come da guida). Se un esercizio è irrimediabilmente sbagliato, cambia i dati e rifallo tutto, ricontrollandolo. Le correzioni di forma sono puntuali: niente riscritture estese.

## Rapporto (breve, in italiano)
Numero di esercizi e tracce verificati, elenco degli errori trovati e corretti (file, cosa era sbagliato, correzione), figure corrette, notazioni uniformate, eventuali dubbi non risolti.
