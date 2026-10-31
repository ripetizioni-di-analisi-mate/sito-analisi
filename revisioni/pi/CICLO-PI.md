# Ciclo di miglioramento di Pi (assistente del sito)

Istruzioni per l'attività programmata che ogni mattina migliora Pi e alle 8:30 manda a Carmine il diagramma dei miglioramenti. Voluto da Carmine il 31/10/2026: «anche se è una versione gratuita deve migliorare a tal punto da diventare decente, in tutti i campi, in maniera ciclica».

## Che cosa è Pi
- Finestra di chat su tutte le pagine (`src/components/Assistente.astro`), risposte dal Worker (`worker/assistente.mjs`, `/api/assistente`).
- Modelli gratuiti di Cloudflare Workers AI: testo `@cf/google/gemma-4-26b-a4b-it` (riserva `@cf/openai/gpt-oss-120b`), foto `@cf/meta/llama-4-scout-17b-16e-instruct` (riserva mistral-small-3.1).
- Quota gratuita dell'account Cloudflare: 10.000 neuroni al giorno in tutto (circa 100-150 domande). È il vincolo più forte: ogni miglioramento che allunga le istruzioni o le risposte consuma quota.
- Dettagli e storia in `CLAUDE.md`, sezione «Assistente "Pi"».

## Regole fisse (decise da Carmine, non si cambiano)
- Solo modelli gratuiti di Workers AI. Niente piano a pagamento di Cloudflare, niente Claude o altri servizi a pagamento.
- Pi non parla di prezzi o acquisti di sua iniziativa; nel fumetto e nei suggerimenti niente prezzi.
- Niente asterischi visibili nelle risposte; niente domande suggerite.
- Ambito: solo matematica, fisica e informazioni sul sito; niente programmazione o lavori lunghi.
- Pi dice di essere un'intelligenza artificiale e non si presenta come Carmine.
- Non inventa prezzi, sconti, rimborsi o funzioni del sito. Rimborsi: li valuta Carmine caso per caso (WhatsApp).
- Chi ha seguito un corso di Carmine o comprato un suo videocorso riceve le materie collegate gratis: lo indica nel riquadro facoltativo «Sei già uno studente di Carmine?» all'iscrizione e Carmine le attiva a mano.
- Stile delle risposte: le regole di `GUIDA-CONTENUTI.md` e della skill «scrittura-umana-carmine» (frasi complete, connettivi espliciti, frazioni in colonna con `\dfrac`, virgola decimale `{,}`, lessico tecnico corretto, niente frasi da IA, niente lineette lunghe, niente «non è X ma Y», niente domande retoriche, niente tono prescrittivo, graffa solo per condizioni da soddisfare insieme, mai «la parentesi»).
- Privacy: si salvano solo contatori anonimi per giorno (`pi_eventi`) e le risposte alle domande di prova. **Il testo delle domande vere degli studenti non si salva** senza il sì di Carmine e l'aggiornamento dell'informativa (`src/pages/privacy.astro`, da far verificare a un professionista).
- Limiti giornalieri (messaggi e token per studente, ospite, sito): non si alzano senza il sì di Carmine.
- Interfaccia: piccoli ritocchi sì; cambi grafici evidenti o di funzionamento della finestra solo con il suo sì (proporli nel rapporto).
- Non toccare pagamenti, prezzi, webhook, pagine legali, contenuti didattici. Non pubblicare nulla su Instagram o altri canali.

## Strumenti del ciclo
- **Banco di prova** (`worker/pi-banco.json`, `worker/pi-prove.mjs`): ogni mattina alle 5:30 UTC il cron di Cloudflare pone a Pi i casi `fissi` più `perGiorno` casi a rotazione e salva le risposte. Se c'è `modelloCandidato`, gli stessi casi vanno anche a quel modello (id con `~candidato`).
  - Riassunto: https://ripetizionidianalisi.com/pi/prove (eventuale `?giorno=AAAA-MM-GG`).
  - Risposta completa di un caso: https://ripetizionidianalisi.com/pi/prove/<id>?giorno=AAAA-MM-GG (mostra domanda, «atteso» e risposta).
  - Da questo ambiente il sito non si raggiunge con curl: si legge con WebFetch (chiedendo di riportare il testo alla lettera). Se WebFetch non riesce, dillo nel rapporto e lavora con le prove locali.
  - Quota: banco al massimo 8 chiamate al giorno in tutto (con il candidato, `perGiorno` al massimo 3).
- **Contatori anonimi** (sulla stessa pagina): `testo-primo:<modello>`, `testo-riserva:<modello>`, `foto-…`, `errore-quota`, `errore-modello`, `errore-foto`, `risposta-vuota`, `limite-ospite`, `limite-studente`, `limite-sito`; più l'uso giornaliero (messaggi, persone, token).
- **Prova locale** senza Cloudflare: `npx esbuild worker/pi-prove.mjs --bundle --format=esm --platform=neutral --outfile=<scratch>/pi-prove.mjs --log-level=error` e `node strumenti/pi-prova-locale.mjs <scratch>/pi-prove.mjs` (con `RISPOSTA_FINTA="…"` per provare un testo). Controlla streaming, riserva, pagina /pi/prove e lunghezza delle istruzioni.
- **Controllo del Worker**: `mkdir -p dist && npx wrangler deploy --dry-run --outdir <scratch>/bundle` (poi `rmdir dist` se era vuota). Deve finire con «--dry-run: exiting now».
- **Finestra della chat**: se tocchi `Assistente.astro`, build (`NODE_OPTIONS=--max-old-space-size=5500 npx astro build`, rilancia se exit 137; mai `pkill -f astro`), servi `dist` in locale, intercetta `/api/assistente` con Playwright restituendo una risposta finta con formule, elenchi e grassetti, e fotografa la finestra al telefono (390×844). Guarda la schermata con Read.

## Valutazione del banco
Per ogni risposta del giorno, voto 0-2 su quattro criteri (0 = sbagliato, 1 = accettabile con difetti, 2 = buono):
1. **Correttezza**: risultato e passaggi giusti rispetto ad «atteso»; ipotesi dichiarate.
2. **Pertinenza**: risponde a quello che è chiesto, usa la pagina e le sue notazioni, rispetta l'ambito e le regole sul sito (niente prezzi non richiesti, niente informazioni inventate).
3. **Stile**: voce di Carmine (regole sopra).
4. **Formato**: LaTeX corretto con `$…$`, frazioni `\dfrac`, niente asterischi, titoli o tabelle, lunghezza adeguata.
Punteggio del caso = somma / 8. Punteggio del giorno = media in percentuale. Un errore (stato diverso da 200 o risposta vuota) vale 0. Calcola anche il punteggio per area del banco. Ricalcola i risultati numerici con Python (sympy, installalo con pip se manca) prima di giudicare la correttezza.

## Aree (a rotazione, con priorità ai punti deboli)
1. correttezza — calcoli e teoremi (istruzioni, temperatura, controllo dei passaggi, scelta del modello)
2. pagina — uso del riquadro e del paragrafo in vista, notazioni, esercizi da fare (indizio prima della soluzione)
3. stile — voce di Carmine
4. formato — LaTeX, resa delle formule nella finestra, asterischi, elenchi
5. foto — lettura degli esercizi fotografati
6. sito — informazioni corrette su materie, videocorsi, accesso, ex studenti; nessuna vendita insistente
7. ambito — fuori tema e istruzioni nascoste nel testo
8. affidabilità — errori, riserve, risposte vuote, tempi
9. quota — token per domanda (istruzioni più corte, contesto mirato), così bastano per più studenti
10. finestra — piccoli ritocchi dell'interfaccia e dei messaggi di errore o di limite
11. lingua — risposte in inglese sulle pagine `/en/`
12. banco — più casi e casi migliori dove Pi sbaglia (per misurare bene)

Scelta dell'area del giorno: quella con il punteggio più basso negli ultimi 3 giorni di banco; se c'è un errore frequente nei contatori (`errore-*`, `risposta-vuota`, molte riserve), prima l'affidabilità; a parità, quella toccata meno di recente in `storico.json`. Ogni area va toccata almeno una volta ogni 12 giorni.

## Passi di ogni mattina
1. **Repository.** `git pull --rebase` (o clone). Leggi `CLAUDE.md`, questo file, `revisioni/pi/storico.json` (ultimi 7 giorni) e `git log --since="8 days ago" --format="%h %ad %s" --date=short -- worker/assistente.mjs worker/pi-banco.json worker/pi-prove.mjs src/components/Assistente.astro`.
2. **Dati.** Leggi /pi/prove del giorno e le risposte complete dei casi. Leggi i contatori e l'uso. Se il banco di oggi manca (prima mattina dopo una modifica al cron, Worker non ancora pubblicato, quota esaurita), dillo e lavora sulle prove locali e sul codice.
3. **Valuta** con i criteri sopra. Confronta con i giorni precedenti, in particolare i casi toccati dalle modifiche di ieri: un intervento che ha peggiorato il punteggio o aumentato gli errori si annulla (`git revert`) e si annota.
4. **Scegli l'area** e fino a **3 interventi piccoli e misurabili** (per esempio una regola in più nelle istruzioni con un esempio breve, un'informazione mancante nel contesto del sito, una correzione della resa delle formule, un taglio di token, un caso nuovo nel banco). Per ognuno scrivi l'ipotesi: quale caso del banco dovrebbe migliorare domani. Niente riscritture estese delle istruzioni: ogni giorno modifiche puntuali, così si capisce che cosa ha funzionato. Le istruzioni di sistema non devono crescere oltre 6.000 caratteri senza un motivo misurato.
5. **Banco.** Aggiungi 1-2 casi che misurano l'area del giorno o un difetto visto (id nuovi, mai riusati; «atteso» preciso e verificato). Massimo 2 casi in `fissi`: metti lì i casi degli interventi di oggi, togli quelli che sono stabili da 3 giorni. Per provare un modello gratuito diverso usa `modelloCandidato` per almeno 3 giorni prima di cambiare `MODELLI`; togli il candidato quando hai deciso.
6. **Verifica**: prova locale, controllo del Worker, eventuale schermata della finestra. Solo se tutto è corretto: commit con messaggio che inizia per «pi: », `git pull --rebase`, push su main (se rifiutato, riprova una volta).
7. **Storico.** Aggiungi a `revisioni/pi/storico.json` la voce del giorno (formato sotto) e fai commit e push con il messaggio «pi: storico del <giorno>».
8. **Pagina con il diagramma.** Ripubblica l'artifact https://claude.ai/artifact/NV6ULJtFa2XFh61UVqF7kw: prima leggilo con lo strumento Artifact (action «read»), poi pubblica allo stesso `url` il file `revisioni/pi/pagina/index.html` con `files: {"storico.json": "revisioni/pi/storico.json"}`. La pagina disegna da sola il diagramma del giorno e l'andamento leggendo `storico.json`. Non passare `capabilities`.
9. **Rapporto a Carmine** con SendUserMessage, massimo 10 righe, in italiano semplice: punteggio di oggi e variazione, elenco puntato «Migliorie fatte» (che cosa cambia per lo studente, online tra 5-10 minuti), che cosa misura il banco di domani, eventuale proposta che richiede il suo sì (al massimo una domanda). Poi con SendUserFile manda una schermata PNG del diagramma del giorno (fotografa la pagina locale `revisioni/pi/pagina/index.html` servita con `python3 -m http.server` insieme a `storico.json`, al telefono 390×844, con Playwright). Chiudi ricordando che la pagina «Miglioramenti di Pi» è aggiornata.

## Formato di storico.json
```json
{ "giorni": [ {
  "giorno": "2026-11-01",
  "punteggio": 72,              // percentuale del banco di oggi, null se il banco manca
  "aree": { "correttezza": 80, "sito": 50 },   // punteggio per area del banco di oggi
  "casi": 7, "errori": 0,       // casi provati, risposte in errore o vuote
  "areaDelGiorno": "sito",
  "problemi": ["Pi non sa che gli ex studenti hanno le materie gratis"],
  "interventi": [ { "titolo": "Ex studenti", "area": "sito", "cosa": "una riga nelle informazioni sul sito", "perStudente": "chi ha seguito un corso sa come avere le materie gratis", "verifica": "caso sito-corso-gruppo", "commit": "abc1234", "esito": "in attesa" } ],
  "esitiIeri": [ { "titolo": "…", "esito": "migliorato", "dettaglio": "sito-corso-gruppo da 2/8 a 8/8" } ],
  "annullati": [],
  "proposte": ["…richiede il sì di Carmine…"]
} ] }
```
`esito` di un intervento: «in attesa» il giorno in cui si fa, poi «migliorato», «invariato» o «peggiorato (annullato)» quando il banco lo misura. Aggiorna anche l'esito nella voce del giorno in cui l'intervento è stato fatto.

## Idee già pronte (da fare quando l'area tocca)
- sito: i numeri esatti dell'anteprima (2 paragrafi di teoria per argomento, prime 3 schede). La regola sugli ex studenti è stata aggiunta il 31/10 (caso fisso `sito-corso-gruppo`): verificarla.
- affidabilità: se lo streaming finisce senza testo, provare il modello di riserva invece di lasciare la risposta vuota.
- finestra: pollice su / pollice giù sotto ogni risposta, salvato solo come contatore anonimo in `pi_eventi` (`voto-su`, `voto-giu` per tipo di pagina), senza testo; è un segnale reale degli studenti.
- quota: istruzioni più corte senza perdere regole; contesto della pagina tagliato al riquadro in vista quando basta.
- formato: controllare che `\dfrac`, `\begin{cases}`, `\lim\limits` e le formule su più righe si vedano bene nella finestra al telefono.
- correttezza: chiedere al modello di scrivere il risultato finale in una riga riconoscibile e di ricontrollarlo; provare `gpt-oss-120b` come candidato sui casi di calcolo.
