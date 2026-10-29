# Passaggio di consegne — sito ripetizionidianalisi.com

Note per una nuova chat di Claude che riprende il lavoro con Carmine (aggiornate al 29/10/2026). Leggere tutto prima di fare qualsiasi cosa.

## Con chi lavori e come
- Carmine, docente di Analisi (Ripetizioni di Analisi, Instagram @ripetizioni_di_analisi_mate). Scrivergli sempre in **italiano**, frasi semplici, niente gergo tecnico; spiegare ogni passaggio pratico passo per passo.
- Vuole che i passaggi operativi li faccia Claude (codice, commit, Paddle, Cloudflare via Chrome), chiedendo conferma solo per cose irreversibili, pagamenti e pubblicazioni.
- **Mai pubblicare o inviare nulla su Instagram** senza la sua conferma esplicita.
- Segreti (password, chiavi, IBAN, carte) **non** passano dalla chat e non si scrivono nei form: li inserisce lui. Non si salvano coordinate bancarie in memoria.
- Testi legali (privacy, termini): vanno verificati da un professionista.

## Tecnica
- Codice: GitHub `ripetizioni-di-analisi-mate/sito-analisi` (clone locale usato finora: `/home/claude/sito-analisi1`). Ogni push su `main` viene pubblicato da Cloudflare (Worker `sito-analisi`, build 5-10 minuti).
- Astro (sito statico) + Worker Cloudflare (`worker/index.mjs`: account studenti, sessioni, oscuramento dei contenuti a pagamento, webhook Paddle, conteggio visite; Durable Object `Archivio` con SQLite).
- Build: `npm run build` (usa già `NODE_OPTIONS=--max-old-space-size=4096`; 3094 pagine, ~3 minuti). Se il processo viene ucciso (exit 137) basta rilanciarlo.
- Contenuti: `src/content/{teoria,svolti,dafare}/<materia>/…` (italiano) e `src/content-en/…` (inglese, tutte le materie tradotte). Materie e argomenti in `src/data/materie.ts`, prezzi in `src/data/prezzi.json`.
- Blocchi Markdown e figure: `src/plugins/remark-blocchi.mjs`, `grafico.mjs` (::grafico con legenda automatica), `venn.mjs`. Se cambiano i plugin, la cache dei contenuti si svuota da sola.
- Regole editoriali complete: **`GUIDA-CONTENUTI.md`** (leggerla prima di toccare un contenuto).
- Prima di ogni commit di contenuti controllare il frontmatter YAML (elementi di lista con `{ } : [` vanno fra virgolette).

## Materie online (tutte attive, con versione inglese)
Precorso 19 €, Analisi matematica 1 29 €, Analisi matematica 2 29 €, Algebra lineare e geometria analitica 29 €, Fisica 1 32 €, Fisica 2 36 €. Pagina "Chi sono" (bio dal suo altro sito ripetizioni-di-analisi-matematica.it).

## Pagamenti (Paddle, account approvato il 28/10/2026)
- Prodotti e prezzi creati per tutte e sei le materie; codici `pri_…` in `wrangler.jsonc` (vars), token del checkout `PADDLE_CLIENT_TOKEN` (pubblico) idem.
- Impostato il "Default payment link" = https://ripetizionidianalisi.com/ (senza, il checkout dava "Something went wrong").
- Quantità massima 1 su tutti i prezzi.
- Webhook attivo su `/api/paddle/webhook` (segreto `PADDLE_WEBHOOK_SECRET` su Cloudflare): il pagamento sblocca la materia nell'account.
- Carmine ha inserito i dati per il bonifico (Wire transfer). **Da fare**: un acquisto di prova vero del Precorso con un secondo account, controllo nella dashboard, poi rimborso da Paddle.

## Dashboard (/admin)
- https://ripetizionidianalisi.com/admin — rifatta il 28/10: Panoramica, Studenti (scheda laterale con attivazioni, revoche, dispositivi, password provvisoria), Vendite, Traffico (provenienza: Instagram, Google, ecc.), Strumenti.
- Le visite contano solo persone (robot esclusi) dal 28/10; visitatori unici giornalieri.
- Password: segreto `ADMIN_PASSWORD` su Cloudflare (Settings → Variables and Secrets). Non è leggibile: se Carmine la dimentica, la reimposta lui con la matita su quella riga.
- Nota tecnica: il codice del browser della dashboard è la funzione `cliente` inserita come sorgente; la pagina definisce `__name` perché il bundler di Wrangler lo inserisce.

## Revisione dei contenuti
- Agente programmato "Studente puntiglioso" (ogni notte alle 2:40, 2 argomenti per notte): istruzioni in `revisioni/STUDENTE-PUNTIGLIOSO.md`, registro in `revisioni/registro.json`, proposte in `revisioni/SUGGERIMENTI.md`. Corregge errori; i problemi di chiarezza li **segnala soltanto**.
- Primo giro completo (40 argomenti di Precorso, Analisi 1, Analisi 2, Algebra): appunti in `revisioni/giro-1/`; pagina riassuntiva con 189 proposte numerate pubblicata come artifact. Carmine non ha ancora scelto quali proposte fare.

## ERRORI DA NON RIPETERE (importante)
1. **Riscritture estese per "rendere più chiaro" un argomento: bocciate.** La revisione pilota di Limiti e continuità (+45% di testo, aperture "Il percorso", paragrafi di spiegazione aggiunti da agenti) è stata giudicata peggiore: frasi poco naturali, "non sei umano". È stata annullata. Ora la regola è: **correzioni puntuali di una o due frasi** nei punti che indica Carmine, scritte come le direbbe un docente a lezione (vedi skill "scrittura-umana-carmine"). Esempio approvato (Analisi 2, punti del disco): "Sia $P_0$ un punto con $x^2+y^2<1$. La sua distanza dall'origine è $\|P_0\|<1$, quindi la sua distanza dalla circonferenza è $1-\|P_0\|$. Il disco di centro $P_0$ e raggio $r=1-\|P_0\|$ è perciò contenuto in $A$, e $P_0$ è interno." Non riproporre interventi a tappeto; lavorare sui passaggi che lui segnala (screenshot).
2. Il blocco `:::percorso` e la mappa `revisioni/percorso/analisi-1.md` esistono ma **non vanno usati** senza il suo ok (erano parte del pilota bocciato).
3. Prima di dire che qualcosa è online, aspettare che il build di Cloudflare sia finito (5-10 minuti) e controllare la pagina vera.
4. Non dare per scontato che Carmine capisca termini tecnici o inglesi: spiegare cosa deve premere e dove.
5. Nelle risposte a lui: brevi, concrete, senza riepiloghi dei passaggi fatti.

## Preferenze editoriali principali (dettagli in GUIDA-CONTENUTI.md)
Frazioni sempre in colonna (anche negli esponenti); connettivi espliciti (quindi, poiché, perciò), i due punti non sostituiscono un connettivo; niente frasi di riempimento o "da IA"; niente tono prescrittivo; graffa solo per condizioni da soddisfare insieme; niente "la parentesi"; assi dei grafici orientati; dopo ogni definizione/teorema, a cosa serve; esercizi svolti con il calcolo sopra e la spiegazione sotto, a tutta pagina.

## Lavori in corso in altre chat
- Dal 29/10 un'altra chat sta aggiungendo la materia **Matematica generale** (per Economia): commit "Matematica generale: …" su `main`. Prima di lavorare, `git pull` per non sovrascrivere il suo lavoro.

## In sospeso
- Acquisto di prova + rimborso (vedi Pagamenti).
- Scelta delle proposte del primo giro dello studente puntiglioso.
- Correzioni di chiarezza puntuali man mano che Carmine segnala i passaggi.
- Già rimandati: email automatiche (Resend), pagina termini da rifare, eventuale importazione in Bing Webmaster (solo con il suo ok).
