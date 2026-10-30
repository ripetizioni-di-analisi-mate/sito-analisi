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

## Stile di scrittura (vale per ogni testo del sito)
- Norma completa: **`GUIDA-CONTENUTI.md`**; regole di voce: skill **"scrittura-umana-carmine"** (caricarla prima di scrivere).
- Tono: docente universitario italiano che scrive un manuale o spiega a lezione. Frasi complete, lessico tecnico canonico (ipotesi *soddisfatta*, teorema che *si applica*), nessuna personificazione o metafora, nessuna frase a effetto o "da IA" (Immagina…, In sintesi, Ricorda, fondamentale/cruciale, "non è X ma Y", domande retoriche, lineette —).
- Deduzioni complete: premessa, connettivo (quindi, poiché, perciò, allora), conclusione. I due punti non sostituiscono un connettivo. Una frase, un passaggio.
- Esposizione di fatti, non consigli; niente tono prescrittivo. Negazioni rare, in un blocco `:::attenzione` con un controesempio.
- Teoria in stile "Manuali": tutto dentro blocchi etichettati (`:::definizione`, `::::teorema` con `:::dimostrazione`, `:::esempio`, `:::osservazione`, `:::attenzione`, `:::richiamo` con sole ipotesi e tesi), niente prosa tra i blocchi. Riquadro colorato solo per teoremi e dimostrazioni. Dopo ogni definizione o teorema: a cosa serve, con un piccolo esempio.
- Grassetto: termine definito, nome del teorema applicato, conclusione; massimo 2-3 per blocco. Corsivo: parola su cui cade l'accento logico (*necessaria*, *ogni*, *solo se*).
- Formule: frazioni sempre in colonna (anche negli esponenti, `^{\frac{3}{2}}`); virgola decimale `{,}`; sistemi con graffa solo per condizioni da soddisfare insieme; mai "la parentesi".
- Figure `::grafico` con assi orientati, numeri coerenti con il testo, legenda delle curve.

## Scrivere una materia nuova (metodo usato per Algebra lineare, Fisica 1 e 2)
1. Concordare con Carmine elenco e ordine degli argomenti (di solito 9-12); aggiungere la materia in `src/data/materie.ts` (colore, gruppo, argomenti, `attiva: false` finché è in scrittura), in `src/data/materie-en.ts`, in `prezzi.json` (prezzo deciso da lui) e nei nomi di `worker/admin.mjs`.
2. Scrivere un brief per gli agenti partendo da **`istruzioni-agenti/brief-fisica.md`** (modello più completo: file da produrre, blocchi, struttura degli esercizi, notazioni comuni a tutta la materia). Per ogni argomento: teoria (6-10 sezioni `##`), 7-10 schede svolte per tipologia (2-4 esercizi ciascuna, `gratis: true` solo 1-3), 13-14 tracce con soluzione finale.
3. Un agente per argomento in parallelo (massimo 20 agenti alla volta). Poi un agente di **verifica** per argomento (`istruzioni-agenti/brief-verifica-fisica.md`): risolve tutto da zero con sympy, controlla ipotesi, notazioni, ancore, frontmatter, figure.
4. Figure: `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository, poi guardare il PNG (regole in `istruzioni-agenti/brief-figure.md`).
5. Controllo frontmatter: `python3 strumenti/yamlcheck.py <file…>`; build completa; poi `attiva: true` e pubblicazione.
6. Inglese: `istruzioni-agenti/brief-traduzione.md` (un agente per argomento, file in `src/content-en/`).
7. Paddle: creare prodotto e prezzo (una tantum, EUR, quantità massima 1) e aggiungere il codice `pri_…` in `wrangler.jsonc` come `PADDLE_PREZZO_<MATERIA>`; aggiungere la materia anche in `worker/index.mjs` (elenco prezzi in `/api/config`).
I brief contengono il percorso `/home/claude/sito-analisi1`: sostituirlo con quello del clone usato.

## Materie online (tutte attive, con versione inglese)
Prezzi dal 29/10 pomeriggio (sito e Paddle allineati): Precorso 29 €, Analisi matematica 1 49 €, Analisi matematica 2 55 €, Algebra lineare e geometria analitica 39 €, Fisica 1 49 €, Fisica 2 55 €, Matematica generale 59 €, Matematica 5° anno 29 € (senza inglese). Il ramo `prezzi-nuovi` è superato: i prezzi sono su `main`. Pagina "Chi sono" (bio dal suo altro sito ripetizioni-di-analisi-matematica.it).

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

## Matematica generale (29/10/2026)
- Online dal 29/10, 10 argomenti con inglese, prezzo mostrato 59 €. Brief: `istruzioni-agenti/brief-matematica-generale.md` e `brief-verifica-matematica-generale.md`.
- Richieste di Carmine: niente `:::percorso` né prosa tra i blocchi; parte economica presente ma non invadente (esempi matematici nelle definizioni, economia in 1-2 sezioni finali, 2-3 schede su 8, ~4 tracce su 14).
- Prodotto e prezzo Paddle (59 €, quantità massima 1) creati il 29/10; codice in `wrangler.jsonc` come `PADDLE_PREZZO_MATEMATICA_GENERALE`.
- Ramo `prezzi-nuovi` (non ancora su main): Precorso 29, Analisi 1 e Fisica 1 49, Analisi 2 e Fisica 2 55, Algebra 39, Matematica generale 59, Matematica 5° anno 29. Va pubblicato solo dopo aver cambiato i prezzi in Paddle. Niente prezzi barrati (Omnibus).
- In stampa/PDF il riquadro colorato resta solo su teoremi e dimostrazioni, come a schermo.

## Materie in preparazione e macro aree
- In home e indice, aprendo Superiori si vedono solo le voci Matematica e Fisica, chiuse (richiesta di Carmine del 30/10).
- Gruppi (macro aree apribili in home e indice): Università (con Statistica in preparazione), Superiori (Matematica e Fisica dal 1° al 5° anno), Concorsi (Matematica per concorsi). Tutte con `attiva: false` e `argomenti: []` finché non si concorda il programma.

## Concorsi (29/10/2026)
- Due materie in preparazione (`attiva: false`): Matematica per concorsi (9 argomenti) e Logica per concorsi (6). Previsto anche una pagina gratuita "Che cosa studiare per il tuo concorso".
- Matematica per concorsi: **tutti i 9 capitoli scritti e verificati il 30/10** (teoria, 8 schede da 3 quiz A-E, 14 quiz da fare; lettere corrette distribuite). Brief: `istruzioni-agenti/brief-matematica-concorsi.md` e `brief-verifica-matematica-concorsi.md`. Build con la materia attiva provata in locale: nessun errore. **Online dal 30/10 a 59 €** (prodotto Paddle creato, quantità massima 1, `PADDLE_PREZZO_MATEMATICA_CONCORSI` in `wrangler.jsonc` e `worker/index.mjs`). Inglese non ancora fatto. **Prezzo portato a 29 € il 30/10 sera** (stesso prezzo Paddle modificato).
- Logica per concorsi: **online dal 30/10 a 29 €**, 6 argomenti scritti e verificati (stesso formato di Matematica per concorsi). Brief: `istruzioni-agenti/brief-logica-concorsi.md` e `brief-verifica-logica-concorsi.md`. Prodotto Paddle creato (29 €, quantità massima 1), `PADDLE_PREZZO_LOGICA_CONCORSI` in `wrangler.jsonc` e `worker/index.mjs`. Inglese non ancora fatto.
- Iscrizione (30/10): riquadro facoltativo "Sei già uno studente di Carmine?" con due voci: corso dal vivo (Analisi 1, Analisi 2, Algebra lineare e geometria, Matematica generale, note libere) e corso preregistrato acquistato (stesse quattro materie); testo salvato come "Corso dal vivo: …; Preregistrato: …", salvato nella colonna `corso` di `utenti`; in dashboard filtro "Dai miei corsi", etichetta viola e riquadro nella scheda dello studente. Lo sblocco gratuito lo fa Carmine a mano.

## Assistente "Pi" (online dal 29/10/2026)
- Su tutte le pagine (tranne stampa). Pulsante: cerchio con π e pallino verde; alla prima visita un fumetto di benvenuto che sparisce dopo ~10 s (localStorage `pi-benvenuto`); al passaggio del mouse il cerchio si allunga in una barra "Chiedi a Pi: limiti, esercizi, dubbi…". Scelte di Carmine: niente prezzi nei suggerimenti e nel fumetto (Pi ne parla solo se glielo chiedono), niente asterischi nelle risposte.
- Codice: `src/components/Assistente.astro`, `worker/assistente.mjs` (`/api/assistente`). Sulle pagine di studio manda il riquadro/esercizio in vista (si cambia toccando un altro riquadro) e il paragrafo; sulle altre pagine l'inizio del testo. Le informazioni su materie, prezzi, acquisto (Paddle, una tantum, 2 dispositivi, anteprima gratuita) sono costruite dai dati del sito; per rimborsi e casi non previsti rimanda a WhatsApp.
- Limiti al giorno: ospiti 5 (impronta di indirizzo e browser), con account 20, sito 200 (`ASSISTENTE_MAX_OSPITE`, `ASSISTENTE_MAX_STUDENTE`, `ASSISTENTE_MAX_GIORNO`). Conteggio nella tabella `assistente` del Durable Object; uso giornaliero nei dati della dashboard (`assistente`), non ancora mostrato in pagina.
- Modello gratuito Workers AI (`@cf/openai/gpt-oss-120b`, riserva `@cf/google/gemma-4-26b-a4b-it`, `ASSISTENTE_MODELLO`), binding `"ai"`. Quota gratuita Cloudflare 10.000 neuroni/giorno per l'account. Formule della pagina con LaTeX in `data-tex` (plugin `src/plugins/rehype-katex-tex.mjs`).
- Dal 30/10 (scelta di Carmine: solo modelli gratuiti di Cloudflare): testo con `@cf/google/gemma-4-26b-a4b-it` (riserva gpt-oss-120b), foto con `@cf/meta/llama-4-scout-17b-16e-instruct` (riserva mistral-small-3.1; due formati: `image_url` nei messaggi e campo `image`). Risposte in streaming (testo a pezzi, `<think>` filtrato), pulsante fotocamera (foto ridotta nel browser a 1280 px JPEG), niente domande suggerite, conversazione salvata nel browser per 24 h (`localStorage pi-conversazione`), pulsante Copia, copia e incolla libera nella finestra. Informazioni complete sul sito nel prompt solo se la domanda ne parla (risparmio token). Regole: solo matematica, fisica e informazioni sul sito; niente programmazione o lavori lunghi. Tetti al giorno: studente 20 messaggi e 120.000 token, ospite 5 e 30.000, sito 2000 messaggi e 20 milioni di token; token stimati (caratteri/4) nelle colonne `tin`/`tout` della tabella `assistente`. Attenzione: la quota gratuita di Workers AI è di 10.000 neuroni al giorno per l'account (circa 100-150 domande); oltre serve il piano Workers Paid (5 $/mese più consumo). Il ramo con Claude Haiku 5.5 è stato provato e tolto (commit aa84dd6).
- Privacy: pagina "Informativa sulla privacy" riscritta il 30/10 (IT e EN) con riquadro "In breve": dati non venduti né ceduti a terzi, solo Cloudflare e Paddle come fornitori tecnici; elenca nome, email, corso, provenienza, dispositivi, impronte non reversibili, Pi (foto comprese). Nota con link sotto il modulo di iscrizione. Da far verificare a un professionista. Da qui il sito non è raggiungibile (proxy): la prova dal vivo l'ha fatta/la fa Carmine.

## Matematica 5° anno (online dal 29/10/2026, 29 €)
- Liceo scientifico, tono più semplice (approvato da Carmine sul capitolo Derivate). 11 argomenti scritti e verificati. Brief: `istruzioni-agenti/brief-matematica-superiori-5.md` e `brief-verifica-matematica-superiori-5.md`.
- Prodotto e prezzo Paddle (29 €, quantità massima 1) creati il 29/10; codice in `wrangler.jsonc` come `PADDLE_PREZZO_MATEMATICA_SUPERIORI_5`. **Da fare**: traduzione inglese.
- Build locale: con 4170 pagine il container a volte uccide il processo (exit 137); `NODE_OPTIONS=--max-old-space-size=5500 npx astro build` passa.

## Videocorsi (dal 30/10/2026)
- Videocorsi preregistrati di Carmine (prima sul vecchio sito ripetizioni-di-analisi-matematica.it, Hostinger): dati in `src/data/videocorsi.ts` (Analisi 1 e 2 51 lezioni 499 €, Analisi 1 35 lez. 360 €, Analisi 2 16 lez. 192 €, Matematica generale 38 lez. 456 €, Algebra 8 lez. 96 €; lezioni da circa 50 min, video e PDF su Google Drive).
- Pagine `/videocorsi` e `/videocorsi/<slug>` (solo italiano), voce in cima all'indice (vetrina in home tolta su richiesta di Carmine), sezione nei prezzi, rimando nelle pagine Sblocca, informazioni a Pi.
- Acquisto: Paddle con `customData.videocorso`; codici `PADDLE_PREZZO_VIDEO_<SLUG>` in `wrangler.jsonc`. Il webhook registra l'abilitazione `video-<slug>` e sblocca le materie in `sblocca` (Analisi 1 → analisi-1 + precorso; Analisi 1 e 2 → analisi-1, analisi-2, precorso; Algebra → algebra-lineare). La dashboard può attivare anche i videocorsi (sblocca le materie collegate).
- Link delle cartelle Drive: variabile `VIDEOCORSI_DRIVE` (JSON slug → link) in `wrangler.jsonc`, restituiti da `/api/videocorsi` solo a chi ha comprato; l'account mostra "I tuoi videocorsi". Lo studente chiede l'accesso su Drive e Carmine approva a mano (in futuro: condivisione automatica con l'API di Drive).
- Risparmio sul materiale (30/10, approvato da Carmine): su schede e pagine dei videocorsi "Risparmi X € di materiale didattico" = somma dei prezzi delle materie sbloccate (`valoreMateriale` in `videocorsi.ts`; Analisi 1 = 78 € perché include il Precorso).
- Prezzi barrati: non mostrati (Omnibus), solo il risparmio reale del pacchetto (552 € separati). Klarna non disponibile su Paddle (metodi: carte, PayPal, Apple Pay, Google Pay e altri locali).
- Corsi di gruppo dal vivo: scheda "in preparazione" nella pagina videocorsi; prezzo per lezione da non mostrare (prima si parla con Carmine). Proposto codice di sblocco per i corsi di gruppo, in attesa di risposta.

## Guida concorsi
- Pagina gratuita `/concorsi` ("Che cosa studiare per il tuo concorso", `src/pages/concorsi.astro`), scheda nel gruppo Concorsi in home e voce nell'indice.

## In sospeso
- Acquisto di prova + rimborso (vedi Pagamenti).
- Scelta delle proposte del primo giro dello studente puntiglioso.
- Correzioni di chiarezza puntuali man mano che Carmine segnala i passaggi.
- Già rimandati: email automatiche (Resend), pagina termini da rifare, eventuale importazione in Bing Webmaster (solo con il suo ok).
