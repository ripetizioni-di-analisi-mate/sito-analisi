# Correzione della revisione dei quiz del 28/11/2026 (commit 2df105c0f)

Repository: `/home/claude/sito-analisi`. Non usare git, non lanciare la build. Lavori **solo** sui file del tuo lotto: `/home/claude/rev-fix/lotti/<lotto>.json`.

## Perché
Il 28/11 un'altra sessione ha riscritto 860 domande a tempo (italiano e inglese) per togliere le varianti numeriche. Nessuna risposta è sbagliata, ma il lavoro non rispetta le regole di Carmine. Un controllo su 80 domande ha trovato:
- spiegazioni dimezzate (da circa 370 a 190 caratteri), spesso di una o due frasi, a volte ferme prima del risultato («√7500» invece di $50\sqrt3$);
- link alla teoria senza l'ancora `#…` (in Matematica 3° anno il link al blocco della teoria è obbligatorio);
- frazioni in linea con la barra, lineette «—», deduzioni senza connettivo;
- risposte sbagliate con un commento che rivela l'errore («$0$, derivando soltanto il termine crescente»);
- situazioni artificiose (sensori, «il laboratorio riferisce», «un foglio di calcolo divide…»), distrattori non plausibili («Il colore della miscela»), domande fuori tema o di livello diverso dal capitolo, convenzioni della materia non rispettate (Idraulica con $g=10$ invece di $\gamma=9{,}81\,\mathrm{kN/m^3}$);
- domande buone sostituite senza bisogno: circa 360 delle vecchie non erano varianti di nessun'altra, e le nuove sono spesso più povere (un calcolo con l'equazione globale diventato una domanda sul controllo di un sensore);
- ragionamento figurale: cambiata solo la frase della domanda, che ora suggerisce le regole;
- classificazione dello Studio guidato non aggiornata: le domande riscritte hanno ancora livello e abilità della domanda vecchia.

## Prima di cominciare
1. Leggi `GUIDA-CONTENUTI.md`, `istruzioni-agenti/brief-domande.md`, `istruzioni-agenti/brief-domande-aggiuntive.md` e il brief delle domande della tua materia se esiste (`ls istruzioni-agenti | grep <materia>`; per Statica e Scienza delle costruzioni `brief-domande-statica.md`, per Idraulica `brief-domande-idraulica.md`, per Meccanica razionale `brief-domande-meccanica-razionale.md`, per il TIEC `brief-domande-tiec.md`, per i concorsi `brief-domande-concorsi.md`). Carica la skill **scrittura-umana-carmine** con lo strumento Skill. Leggi in `CLAUDE.md` la sezione della tua materia (notazioni e convenzioni).
2. Per ogni capitolo del lotto leggi la teoria (`src/content/teoria/<materia>/<capitolo>.md`, con gli `{#id}` dei blocchi) e **tutte le 90 domande attuali**, così sai che cosa è già chiesto.

## Che cosa contiene il lotto
Una voce per domanda: `it` e `en` (file attuali, `en` è `null` se la materia non ha l'inglese), `vecchio_it` e `vecchio_en` (copia della versione prima della revisione), `vecchia_era_variante` = [somiglianza massima della vecchia con le altre domande di allora, numero di quella domanda], `vecchia_contro_attuali` = [somiglianza massima della vecchia con le domande attuali, numero], `parole_spiegazione` [prima, dopo], `segnali` automatici (indicativi, non sempre giusti), `livello` [prima, dopo] della classificazione dello Studio guidato, `diagnosi` [prima, dopo] degli errori tipici (solo Analisi 1, Precorso, Algebra lineare).

## Che cosa fare per ogni domanda (scegli una delle tre strade)
**A. Ripristinare la vecchia.** Se la vecchia non era una variante di un'altra domanda (somiglianza sotto 0,6, oppure fra 0,6 e 0,7 e leggendo le due domande chiedono cose diverse), non fa doppione con una domanda attuale (`vecchia_contro_attuali` sotto 0,6, o leggendo la domanda indicata), ed è corretta e conforme alle regole: copia `vecchio_it` su `it` e `vecchio_en` su `en`. Correggi solo le eventuali violazioni puntuali che trovi. Classificazione e diagnosi tornano quelle di prima. È la strada giusta anche per le domande a testo vuoto (testo preso dalla traccia) e per il ragionamento figurale, se la vecchia era a posto.

**B. Tenere la nuova e correggerla.** Se la vecchia era una variante (o farebbe doppione) e la nuova chiede davvero un'altra cosa, è naturale, nel tema e al livello del capitolo: tieni la situazione nuova e porta il file alle regole qui sotto.

**C. Riscrivere.** Se la vecchia era una variante e la nuova è debole (banale, artificiosa, fuori tema, con distrattori non plausibili, con una convenzione sbagliata): scrivi una domanda nuova sulla stessa abilità della vecchia, con una situazione che nel capitolo non c'è ancora. Vietati numeri cambiati di una domanda esistente, dato e incognita invertiti, «rapporto» o «variazione» fra due configurazioni dello stesso oggetto, testi a stampo.

## Regole per ogni file che resta o che scrivi (B e C, e anche A se trovi violazioni)
- **Spiegazione** di 3-6 frasi, una frase per passaggio, deduzioni complete: premessa, connettivo (quindi, poiché, perciò, allora), conclusione. I due punti non sostituiscono il connettivo. La spiegazione **arriva al risultato** scritto nella stessa forma della risposta corretta. Si può dire da quale errore nasce una risposta sbagliata, senza rimandi alla posizione delle risposte.
- **Rimando alla teoria**: `[Teoria](/<materia>/<capitolo>/teoria#<id>).` in fondo, con l'ancora del blocco o del paragrafo che serve (in inglese `[Theory](/en/<materia>/<capitolo>/teoria#<id>).`, stesso `id`). Se la vecchia aveva l'ancora e la domanda tratta la stessa cosa, rimettila. Se la vecchia non aveva nessun rimando e la materia non lo usa, puoi non metterlo. Nessuna lineetta («Teoria —»).
- **Risposte**: solo il valore o l'affermazione, senza commenti sull'errore. Le sbagliate nascono da errori tipici plausibili, sono diverse fra loro e dalla corretta (nei valori numerici almeno il 10%) e nessuna è difendibile.
- **Testo**: situazione naturale da manuale o da compito d'esame; niente sensori, fogli di calcolo, laboratori che «riferiscono», persone che «sostengono». Nel tema e al livello del capitolo.
- **Formule**: frazioni sempre in colonna (`\frac`, anche negli esponenti; le unità come $\mathrm{m/s}$ restano), virgola decimale `{,}` in italiano e punto in inglese, graffa solo per condizioni da soddisfare insieme, mai «la parentesi». Nessuna frase da IA, nessuna lineetta «—».
- **Convenzioni** della materia (notazioni, $\gamma$, versi, cifre significative) come nel brief della materia.
- **Inglese**: se `en` esiste, il file inglese ha la stessa `corretta`, le stesse risposte nello stesso ordine, `## Explanation`, traduzione fedele dell'italiano corretto (`istruzioni-agenti/brief-traduzione-domande.md`).
- `corretta` del file italiano e di quello inglese sempre uguali. Se cambi l'ordine delle risposte, cambia `corretta` in tutti e due.

## Studio guidato (solo materie con classificazione: `livello` non nullo)
Per ogni domanda dai `[livello, indice dell'abilità]`: livello 1 base (un passaggio), 2 medio, 3 avanzato; abilità dall'elenco `abilita["<materia>/<capitolo>"]` di `src/data/studio-guidato-livelli.json` (indice da 0). Strada A: i valori di prima. B e C: classifica la domanda per quello che chiede davvero. Per Analisi 1, Precorso e Algebra lineare dai anche la diagnosi: per ogni risposta sbagliata (numero 1-4 della posizione nel file) l'`id` dell'errore tipico del catalogo `errori["<materia>/<capitolo>"]` di `src/data/studio-guidato-errori.json`, solo se è riconoscibile con sicurezza; altrimenti niente.

## Controllo (obbligatorio)
- Ricalcola con Python e sympy ogni risposta corretta dei file B e C (e dei file A che tocchi) e verifica che le sbagliate non siano difendibili. `pip install --break-system-packages sympy` se manca.
- Figure toccate: `node strumenti/anteprima_figure.mjs /tmp/rev-fix-<lotto>.png <file…>` dalla radice del repository, 0 problemi, e guarda il PNG.
- `python3 strumenti/yamlcheck.py <file scritti…>` senza errori.
- `python3 strumenti/domande-simili.py src/content/domande/<materia>/<capitolo> 0.7`: ogni coppia che coinvolge un tuo file va controllata a mano; i doppioni si riscrivono.

## Esito
Scrivi `/home/claude/rev-fix/esiti/<lotto>.json`: una lista con una voce per domanda del lotto:
`{"it": "<percorso>", "strada": "A"|"B"|"C", "livello": [l, i] | null, "diagnosi": {"2": "<id>", …} | null, "nota": "<una riga>"}`.
Poi, come ultima risposta, un rapporto breve in italiano: quante A, B, C; violazioni più frequenti corrette; problemi che non hai potuto risolvere.
