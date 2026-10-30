# Consulenza su ripetizionidianalisi.com: comunicazione, vendite e grafica

Rapporto per Carmine, 30 ottobre 2026.

**Come è stato fatto.** Il sito pubblicato non è raggiungibile da qui, quindi l'ho costruito in locale dal repository (4640 pagine) e ho imitato il Worker con un piccolo server che riproduce le tre situazioni: ospite, iscritto senza acquisti, acquirente (`_lavoro/server_finto.py`, scritto seguendo `worker/index.mjs`). Ho fotografato ogni pagina chiave al telefono (390×844) e al computer (1440×900) e ho guardato tutte le schermate. Il pagamento Paddle e Pi non si possono provare dal vivo da qui: li ho ricostruiti dal codice.

**Parole usate nel rapporto.**
- *Conversione*: la parte dei visitatori che compie un passo (iscriversi, pagare). "Aumentare la conversione" vuol dire che, a parità di visitatori, più persone comprano.
- *Pagina d'ingresso* (in inglese *landing page*): la pagina su cui arriva chi tocca un link preciso, per esempio il link di un carosello.
- *Percorso d'acquisto* (in inglese *funnel*): la sequenza di pagine e gesti che porta da Instagram o da Google fino al pagamento.
- *Vetrina*: la versione ridotta di una pagina a pagamento che il sito mostra a chi non ha comprato (`scripts/vetrine.mjs`).

**Come leggere i riferimenti.** I file sono indicati a partire dal repository (`src/…`, `worker/…`); le schermate sono in `schermate/`, le bozze in `bozze/`. Dove scrivo "suppongo" o "da verificare" si tratta di un'ipotesi, non di una cosa osservata.

---

## 1. Le 10 mosse con più effetto sulle vendite

In ordine di priorità. Impegno: piccolo (meno di un giorno di lavoro), medio (alcuni giorni), grande (più di una settimana). L'effetto atteso è motivato senza numeri, perché non esistono ancora dati sul percorso d'acquisto.

| # | Problema | Alternativa consigliata | Impegno | Effetto | Che cosa serve da te |
|---|---|---|---|---|---|
| 1 | La pagina del videocorso da 499 € non fa vedere né sentire nessuna lezione: niente anteprima, niente programma, niente volto. La prova si chiede su WhatsApp. | Una lezione (o 10 minuti) visibile a tutti in pagina, l'elenco delle 51 lezioni con i titoli, la tua foto accanto al prezzo (bozza 3). | medio | alto: è il prodotto che incassa di più ed è l'unico che oggi si compra "a scatola chiusa" | il video di prova, l'elenco delle lezioni |
| 2 | Dopo il pagamento del videocorso l'account mostra "Il link alla cartella dei video sta per comparire qui", perché la variabile `VIDEOCORSI_DRIVE` in `wrangler.jsonc` (riga 35) è vuota (`"{}"`). | Inserire i link delle cartelle e scrivere in pagina entro quanto tempo confermi l'accesso su Drive. | piccolo | alto: protegge le vendite già fatte e il passaparola | i 5 link Drive; un tempo di conferma che puoi garantire |
| 3 | Il riquadro "Sblocca ora" alla fine della teoria gratuita non dice il prezzo, scrive i titoli dei paragrafi in minuscolo e senza accenti ("teorema di lagrange"), e promette "il PDF" anche nelle sei materie che il PDF non lo hanno. | Riquadro con l'elenco vero dei paragrafi che mancano, il prezzo, il collegamento alle schede gratuite (bozza 2). | piccolo | alto: è il punto in cui lo studente decide | approvare il testo |
| 4 | Chi tocca la scheda svolta n. 4 o successiva finisce senza preavviso sulla pagina di pagamento. Google, sulle stesse 694 pagine, trova la pagina di pagamento al posto della scheda. | Una vetrina per ogni scheda bloccata: titolo, tracce degli esercizi visibili, svolgimento riservato, come già accade per gli esercizi da fare. | medio | alto: più fiducia al momento del blocco e più pagine utili su Google | approvare l'idea |
| 5 | La home al telefono non dice chi c'è dietro il sito, apre con "Scegli la materia" e mette in fila materie "in preparazione". Il fumetto di Pi copre la seconda materia. | Home con titolo che dice che cosa si trova, la tua foto e i numeri veri, l'elenco compatto delle materie con i conteggi reali, il fumetto di Pi più in basso (bozza 1). | piccolo | medio-alto: chi arriva da Instagram decide in pochi secondi | approvare titolo e numeri |
| 6 | Per pagare 49 € servono: pagina Sblocca, poi una pagina "Il tuo account" con cinque campi e un riquadro facoltativo, poi il ritorno alla pagina Sblocca, poi il tasto, poi Paddle. Chi entra dal browser interno di Instagram e poi apre Safari occupa già due dei due dispositivi ammessi. | Modulo di iscrizione dentro la pagina Sblocca (nome, email, password), niente "ripeti la password", spiegazione dei due dispositivi prima del pagamento, avviso per chi è nel browser di Instagram (bozza 4). | medio | alto: ogni passaggio tolto riduce gli abbandoni | decidere se tenere il nome obbligatorio |
| 7 | Non esiste nessun pacchetto fra le materie del sito, e chi ha comprato una materia paga di nuovo lo stesso materiale se poi compra il videocorso. | Pacchetto "Analisi completa" (Analisi 1, Analisi 2, Precorso) con il risparmio reale; credito della materia già pagata sul videocorso; completamento Analisi 1 → Analisi 1 e 2 al prezzo della differenza. | piccolo (prodotti Paddle) | medio-alto: alza la spesa media senza toccare i prezzi | scegliere i prezzi dei pacchetti |
| 8 | Il sito non manda nessuna email: niente benvenuto, niente conferma con i primi passi, niente invito alla materia successiva o a lasciare un parere. | Tre email essenziali: benvenuto all'iscrizione, conferma dopo l'acquisto con i primi passi, richiesta di un parere dopo la sessione. | medio | medio: recupera chi si iscrive e non compra, prepara le recensioni | attivare Resend (già previsto) |
| 9 | La dashboard sa quanti visitano, quanti si iscrivono e quanti pagano, ma non sa dove si fermano gli altri: quante volte si apre Sblocca, quante si apre e si chiude Paddle, da quale carosello arrivano. | Pochi contatori in più: pagina Sblocca vista, pagamento aperto, chiuso senza pagare, completato; campagna Instagram (`utm_campaign`); videocorsi separati per corso. | piccolo-medio | indiretto ma alto: dice quali delle altre mosse funzionano | niente |
| 10 | La pagina "Chi sono" usa emoji, frasi generiche ("Risultati eccellenti", "Metodo collaudato") e numeri diversi da quelli che usi altrove; i 15 messaggi degli studenti e i 16 loghi delle università sono nel repository ma non compaiono. | Pagina asciutta con la tua formazione, i numeri che confermi, come è fatto il materiale, i messaggi degli studenti con il loro consenso (bozza 5). | piccolo | medio: è la pagina che si apre quando si è indecisi | confermare i numeri, il consenso degli studenti |

---

## 2. Le 12 aree

### 2.1 Posizionamento e messaggio

**Osservato.**
- Il titolo della home è "Scegli la materia" con sopra "Teoria ed esercizi" (`src/i18n.ts`, `homeTitolo`, `homeSopra`; `schermate/home-telefono.png`). Nei primi cinque secondi si capisce che è un sito di materie; non si capisce chi lo scrive né perché preferirlo a YouMath, che è gratuito.
- Il nome Carmine compare solo nel piè di pagina, nella pagina "Chi sono" e nel titolo "I videocorsi di Carmine". Il volto compare solo in "Chi sono".
- Gli elementi che distinguono il sito ci sono tutti, ma sono sparsi: il docente reale, lo stile da manuale con le ipotesi complete, gli esercizi svolti divisi per tipologia (per esempio 8 tipologie di studio di funzione in Analisi 1), Pi che risponde sulla pagina che si sta leggendo, le materie comprese nei videocorsi.
- I numeri su di te non sono coerenti fra le pagine: il brief indica "oltre mille studenti, più di diecimila ore"; "Chi sono" dice "Oltre 1500 studenti" e "78 province" (`src/viste/ChiSono.astro`, righe 13-27); Pi dice "più di 1500 studenti" e "oltre 10 anni di esperienza" (`worker/assistente.mjs`, riga 86).
- L'immagine di anteprima dei link (`public/og.png`), il testo per gli assistenti (`src/pages/llms.txt.ts`) e il titolo per Google della home (`src/lib/seo-testi.ts`) parlano ancora solo di Analisi 1, Analisi 2 e Precorso.

**Perché frena.** Chi arriva da un tuo carosello ti conosce, ma sul sito non ti ritrova; chi arriva da Google non sa che dietro c'è un docente con migliaia di ore di lezione. In entrambi i casi il sito sembra un archivio di materiale come tanti.

**Alternative.**
- **A. Il docente in apertura.** Titolo "Teoria ed esercizi svolti per l'esame di matematica", subito sotto la tua foto piccola con "Scritto da Carmine Tornincasa · oltre mille studenti seguiti, più di diecimila ore di lezione" (bozza 1). Pro: si ritrova la persona di Instagram. Contro: la home diventa un po' più lunga. Impegno piccolo. Rischio basso.
- **B. Il metodo in apertura.** Titolo sul metodo ("Ogni esercizio svolto ha il calcolo sopra e la spiegazione sotto, passaggio per passaggio") con un piccolo estratto vero di una scheda gratuita. Pro: mostra subito la qualità. Contro: parla meno a chi ti segue già. Impegno piccolo. Rischio basso.
- **C. Due aperture diverse.** La A per chi arriva da Instagram (riconosciuto dal Worker, che già distingue la provenienza) e la B per gli altri. Pro: ognuno vede la cosa più convincente per lui. Contro: due versioni da mantenere. Impegno medio. Rischio basso.

In ogni caso: un'unica serie di numeri su di te, uguale in home, "Chi sono", Pi e pagine dei videocorsi; `og.png`, `llms.txt` e titolo della home aggiornati con tutte le materie.

### 2.2 Home e prima impressione al telefono; navigazione fra macro aree

**Osservato** (`schermate/home-telefono.png`, `home-telefono-intera.png`, `home-materie-aperte-telefono-intera.png`, `indice-cassetto-telefono.png`).
- Nella prima schermata del telefono si vedono titolo, sommario, ricerca e una sola materia intera (Precorso). Alla prima visita il fumetto di Pi copre la scheda di Analisi 1.
- Nella macro area Università l'ultima scheda è Statistica "in preparazione". Aprendo Superiori compaiono 10 materie, di cui 9 "in preparazione"; in Concorsi, Logica è "in preparazione". Al telefono questo occupa più spazio delle materie in vendita.
- Superiori e Concorsi sono chiusi all'apertura: uno studente di quinta superiore o un candidato a un concorso deve sapere che deve toccare la riga in grigio piccolo.
- I videocorsi, il prodotto che incassa di più, al telefono sono raggiungibili solo dal tasto ☰ (riquadro in cima al cassetto) o dal link "Prezzi" in fondo. Al computer il riquadro "Videocorsi" è sempre visibile nell'indice laterale. Nota: la vetrina dei videocorsi in home è stata tolta su tua richiesta (`CLAUDE.md`, riga 101).
- In testata il nome del sito è troncato ("Ripetizioni di …") e il tasto "EN" è in primo piano, anche se il pubblico è quasi tutto italiano.
- I due pulsanti fissi (Pi e WhatsApp) coprono il margine destro del testo in quasi tutte le schermate al telefono (`analisi-1-limiti-scheda-1-gratis-telefono.png`, `prezzi-telefono.png`).

**Alternative.**
- **A. Home compatta** (bozza 1): tre pulsanti Università / Superiori / Concorsi al posto delle tre righe apribili; materie in una lista con pallino, nome e conteggi reali ("9 argomenti · 82 schede svolte · 146 esercizi"); le materie in preparazione in una riga di testo. Pro: al telefono si vedono tutte le materie in vendita senza scorrere molto. Contro: si perde la descrizione di ogni materia (resta nella pagina della materia). Impegno piccolo. Rischio basso.
- **B. Home attuale con ritocchi**: Statistica e le materie in preparazione in fondo e più piccole, fumetto di Pi spostato sopra il pulsante senza coprire le schede, "EN" spostato nel piè di pagina e nell'indice. Pro: cambia poco. Contro: resta lunga. Impegno piccolo. Rischio basso.
- **C. Riga dei videocorsi in home**: una sola riga sobria "Videocorsi di Carmine" sotto le materie (inclusa nella bozza 1). Pro: il prodotto principale diventa raggiungibile da Instagram in un tocco. Contro: va contro la scelta che hai fatto di togliere la vetrina; per questo è un'opzione separata, che puoi togliere dalla bozza. Impegno piccolo. Rischio: nessuno, se la riga resta discreta.

Per i pulsanti fissi: un solo pulsante (Pi), con WhatsApp dentro la finestra di Pi e nella pagina Contatti; oppure WhatsApp visibile solo sulle pagine commerciali (home, prezzi, Sblocca, videocorsi) e non su quelle di studio.

### 2.3 Pagine materia e argomento: gratis e a pagamento; il blocco e la pagina "Sblocca"

**Osservato.**
- La pagina della materia spiega bene che cosa è gratis ("Di ogni argomento puoi leggere gratis l'inizio della teoria e le prime 3 schede di esercizi svolti, senza account") e invita all'anteprima (`schermate/analisi-1-telefono.png`). Il prezzo è un link piccolo "Sblocca tutto · 49 €": è coerente con la tua scelta di invitare prima all'anteprima.
- Quanto è gratis davvero, contato dai file in `src/content/`:

| Materia | Prezzo | Argomenti | Paragrafi di teoria (liberi) | Schede svolte (libere) | Esercizi svolti (liberi) | Esercizi da fare |
|---|---|---|---|---|---|---|
| Precorso | 29 € | 10 | 72 (20) | 50 (30) | 151 (90) | 120 |
| Analisi matematica 1 | 49 € | 9 | 90 (18) | 82 (27) | 237 (78) | 146 |
| Analisi matematica 2 | 55 € | 11 | 87 (22) | 77 (33) | 233 (101) | 147 |
| Algebra lineare e geometria analitica | 39 € | 10 | 92 (20) | 70 (30) | 249 (106) | 130 |
| Fisica 1 | 49 € | 12 | 108 (24) | 84 (36) | 302 (133) | 156 |
| Fisica 2 | 55 € | 12 | 104 (24) | 84 (36) | 289 (116) | 156 |
| Matematica generale | 59 € | 10 | 84 (20) | 78 (30) | 244 (93) | 140 |
| Matematica 5° anno | 29 € | 11 | 97 (22) | 88 (33) | 320 (125) | 154 |
| Matematica per concorsi | 29 € | 9 | 78 (18) | 72 (27) | 216 (81) | 126 |

  Nel Precorso le schede gratuite sono 30 su 50, perché ogni argomento ha solo 5 schede e le prime 3 sono libere.
- **Fine della teoria gratuita** (`schermate/analisi-1-limiti-teoria-ospite-telefono-intera.png`, ritaglio in `bozze/2-blocco-teoria-prima-telefono.png`): il riquadro dice "La teoria continua con 7 altri paragrafi (primi teoremi sui limiti, operazioni con i limiti e forme indeterminate, limiti notevoli…), oltre a tutte le schede svolte, le soluzioni e il PDF." e un tasto "Sblocca ora". Tre problemi:
  1. i nomi dei paragrafi sono ricavati dagli indirizzi delle sezioni (`scripts/vetrine.mjs`, riga 63: `m2[1].replace(/-/g, ' ')`), quindi perdono maiuscole e accenti: in Analisi 1, Derivate, si legge "conseguenze del teorema di lagrange";
  2. "il PDF" è promesso in tutte le materie, ma i PDF esistono solo per Precorso, Analisi 1 e Analisi 2 (`public/pdf/`); in Fisica, Algebra, Matematica generale, Matematica 5° anno e Concorsi la promessa non corrisponde a ciò che si compra;
  3. il riquadro non dice il prezzo né che le prime schede svolte sono gratuite.
- **Schede svolte dalla quarta in poi** (`schermate/analisi-1-limiti-scheda-5-ospite-telefono.png`): nell'elenco le 10 schede sono tutte uguali; toccando la n. 4 si apre direttamente la pagina "Sblocca Analisi matematica 1", senza una riga che spieghi perché. Il Worker fa così per scelta (`worker/index.mjs`, righe 552-553).
- **Esercizi da fare**: nell'elenco ogni soluzione è sostituita da "Soluzione riservata a chi ha sbloccato la materia." in testo semplice, senza link (`schermate/analisi-1-limiti-esercizi-ospite-telefono-intera.png`); nella pagina del singolo esercizio c'è invece il riquadro con il tasto.
- **Pagina Sblocca** (`schermate/analisi-1-sblocca-telefono-intera.png`): elenco di ciò che si compra con i numeri veri (82 schede, 146 soluzioni), rimando ai videocorsi, prezzo, tasto "Crea un account e sblocca". Mancano: il confronto fra gratis e completo, un esempio di ciò che si trova dietro il blocco, il PDF (la frase `includePdf` esiste in `src/i18n.ts` ma la pagina non la usa), i metodi di pagamento, la durata dell'accesso, la spiegazione dei due dispositivi.

**Alternative per il blocco della teoria.**
- **A. Riquadro informativo** (bozza 2): "Fine dell'anteprima gratuita", elenco numerato dei paragrafi che mancano con i titoli corretti, che cosa c'è ancora (schede, soluzioni, PDF solo dove esiste), prezzo, tasto "Accesso completo ad Analisi 1", link alle schede gratuite dello stesso argomento. Pro: lo studente vede esattamente che cosa compra. Contro: riquadro più alto. Impegno piccolo (i titoli veri si leggono dagli `<h2>` già presenti nella pagina). Rischio basso.
- **B. Riquadro attuale corretto**: stessa frase, ma con i titoli veri, la frase sul PDF solo dove il PDF esiste e il prezzo nel tasto ("Accesso completo · 49 €"). Pro: minimo cambiamento. Contro: resta poco concreto. Impegno piccolo. Rischio nullo.

**Alternative per le schede bloccate.**
- **A. Vetrina della scheda**: la pagina della scheda resta, con titolo, "Teoria usata", le tracce di tutti gli esercizi e, al posto degli svolgimenti, il riquadro di accesso. È lo stesso trattamento già usato per gli esercizi da fare. Pro: chi tocca la scheda vede gli esercizi che sta per comprare; Google trova 694 pagine con contenuto proprio (oggi trova la pagina Sblocca ripetuta). Contro: le tracce diventano visibili a tutti. Impegno medio (estensione di `scripts/vetrine.mjs` e una riga nel Worker). Rischio basso.
- **B. Avviso sulla pagina Sblocca**: se si arriva da una scheda, in cima "La scheda 5 · Limiti con funzioni asintotiche fa parte dell'accesso completo" con il primo esercizio (bozza 4, riquadro "Una delle schede comprese"). Pro: semplice. Contro: per Google non cambia nulla. Impegno piccolo. Rischio nullo.
- Nell'elenco delle schede una piccola scritta "anteprima" sulle prime tre, senza lucchetti (la tua scelta di non mostrare lucchetti resta rispettata).

**Alternative per la pagina Sblocca** (bozza 4).
- **A. Pagina di acquisto completa**: tabella "Gratis / Accesso completo" con i numeri veri della materia, una scheda di esempio con la sua formula, modulo di iscrizione dentro la pagina, metodi di pagamento, nota sui due dispositivi, riquadro per chi è già tuo studente, rimando ai videocorsi. Pro: tutto ciò che serve per decidere in una pagina. Contro: pagina più lunga. Impegno medio. Rischio basso.
- **B. Pagina attuale con tre aggiunte**: tabella gratis/completo, metodi di pagamento, nota sui dispositivi. Impegno piccolo. Rischio nullo.

**Sulla quantità di gratis.** Le proporzioni vanno bene in tutte le materie tranne il Precorso, dove sei schede gratuite su dieci sono molte. Alternative: **A.** lasciare tutto com'è (il Precorso costa poco e porta iscritti); **B.** nel Precorso, prime 2 schede libere invece di 3. Il rischio di B è di rendere meno utile la porta d'ingresso per gli studenti più deboli: va deciso guardando i dati della mossa 9.

### 2.4 Pagina prezzi e pagine dei videocorsi

**Osservato.**
- `/prezzi` (`schermate/prezzi-telefono-intera.png`): nove schede delle materie, poi i videocorsi, poi "Che cosa comprende l'accesso completo". Al telefono i videocorsi iniziano dopo quattro schermate. I titoli usano la lineetta lunga ("Precorso — 29 €"). La pagina non dice che cosa è gratis né quanto dura l'accesso, e non ha pacchetti.
- `/videocorsi` (`schermate/videocorsi-telefono-intera.png`): schede chiare con lezioni, ore, materie comprese, prezzo. Sotto, "Come funziona" e la prova gratuita da chiedere su WhatsApp. In fondo la scheda dei corsi di gruppo "in preparazione", senza prezzo (corretto).
- `/videocorsi/analisi-1-e-2` (`schermate/videocorso-analisi-1-e-2-telefono-intera.png`):
  - nessuna lezione da vedere, nessun elenco delle 51 lezioni, nessuna foto del docente;
  - il riquadro di acquisto mostra due righe verdi una sotto l'altra: "Risparmi 53 € rispetto ai corsi comprati separatamente (552 €)" e "Incluso il materiale didattico del sito: risparmi 133 €". Il primo è un risparmio reale di pacchetto. Il secondo è il valore delle materie comprese, che lo studente avrebbe potuto anche non comprare. Messe insieme, le due righe possono far pensare a 186 € di sconto. Con la regola che ti sei dato sulla direttiva Omnibus conviene chiamare il secondo dato "valore delle materie comprese";
  - la frase "51 lezioni chiare e progressive, spiegate in modo semplice ma rigoroso" è generica;
  - per Analisi 2 non si sa se le 16 lezioni coprono tutti gli 11 argomenti della materia del sito (per esempio le serie di Fourier): è una domanda per te.
- Prezzo per lezione, calcolato da `src/data/videocorsi.ts`: Analisi 1 e 2 circa 9,80 €, Analisi 1 circa 10,30 €, Analisi 2, Matematica generale e Algebra 12 €.

**Alternative per la pagina del videocorso** (bozza 3).
- **A. Pagina con prova vera**: video di una lezione in alto (anche solo 10 minuti), quattro numeri in riga (lezioni, ore, PDF, materie del sito), riquadro di acquisto con il conto trasparente del pacchetto (360 € + 192 €, risparmio 53 €) e la frase "Sono comprese le materie del sito, che vendute da sole costano 133 € in tutto", la tua foto, il programma lezione per lezione, i passi per ricevere le lezioni con il tempo di conferma, poche domande frequenti. Pro: chi spende 499 € vede e sente prima di comprare. Contro: serve il materiale. Impegno medio. Rischio basso.
- **B. Prova gratuita in automatico**: un tasto "Ricevi la prima lezione" che, dopo l'iscrizione gratuita, mostra nell'account il link a una cartella Drive pubblica con una lezione. Pro: raccoglie iscritti che poi puoi ricontattare (con le email della mossa 8). Contro: un passaggio in più. Impegno medio. Rischio basso.
- **C. Lasciare la prova su WhatsApp**: come oggi, ma con un messaggio precompilato più preciso ("Vorrei la lezione di prova del videocorso di Analisi 1 e 2; il mio esame è a …"). Pro: ti fa parlare con lo studente, cosa che con i corsi di gruppo funziona. Contro: dipende dai tuoi tempi di risposta e di sera non vende. Impegno piccolo. Rischio basso.

**Alternative per la pagina prezzi.**
- **A. Prima i videocorsi, poi le materie, poi i pacchetti** (se approvi la mossa 7), con una tabella breve di ciò che è gratis e una sezione di domande (pagamento, ricevuta, dispositivi, durata). Impegno piccolo. Rischio basso.
- **B. Prezzi per percorso di studi**: "Ingegneria, primo anno", "Economia", "Superiori", "Concorsi", ciascuno con le materie e i videocorsi adatti. Pro: lo studente trova subito che cosa gli serve. Contro: va mantenuta quando aggiungi materie. Impegno medio. Rischio basso.

### 2.5 Percorso d'acquisto

**Osservato, passo per passo, per una materia** (codice di `src/viste/Sblocca.astro` e `src/viste/Accedi.astro`):
1. Pagina Sblocca, tasto "Crea un account e sblocca".
2. Pagina "Il tuo account", scheda "Crea un account": Nome, Email, Password, Ripeti la password, riquadro "Sei già uno studente di Carmine?" (`schermate/accedi-iscrizione-telefono-intera.png`). Il contesto si perde: la pagina non ricorda quale materia si sta comprando né il prezzo.
3. Ritorno alla pagina Sblocca, tasto "Sblocca ora" (`schermate/analisi-1-sblocca-iscritto-telefono-intera.png`).
4. Finestra Paddle: paese, dati della carta o altro metodo.
5. A pagamento concluso il sito attende lo sblocco e porta alla pagina della materia. Non c'è un messaggio di benvenuto né un'indicazione su da dove cominciare.

Per il videocorso i passi sono gli stessi, più: account con "I tuoi videocorsi", link alla cartella Drive (oggi assente, mossa 2), richiesta di accesso su Drive, attesa della tua conferma.

**Due dispositivi.** Il limite è spiegato solo dentro "Impostazioni account" e nel messaggio di errore al terzo dispositivo (`worker/index.mjs`, righe 283-288). Il dispositivo è riconosciuto da un cookie del browser (righe 272-276). Chi arriva da Instagram usa il browser interno dell'app, che ha cookie separati da Safari o Chrome: se poi apre il sito anche da Safari sullo stesso telefono, il Worker conta due dispositivi, e al computer viene respinto. Questo segue dal codice; quanto spesso accada nella realtà va verificato. I posti si liberano da soli dopo 60 giorni di inattività o uscendo dall'account.

**Pagamento.** Paddle mostra carte, PayPal, Apple Pay, Google Pay e metodi locali (`CLAUDE.md`, riga 104). Nessuna pagina del sito, prima del pagamento, elenca questi metodi. Suppongo che Apple Pay non compaia dentro il browser di Instagram: da verificare con un acquisto di prova dal telefono.

**Alternative.**
- **A. Iscrizione dentro la pagina Sblocca** (bozza 4): nome, email, password e tasto "Crea l'account e vai al pagamento", che apre subito Paddle. "Ripeti la password" si toglie (c'è già l'occhio per vederla). Il riquadro "Sei già uno studente di Carmine?" diventa un link sotto il modulo. Pro: un passaggio e una pagina in meno. Contro: modifica a due pagine. Impegno medio. Rischio basso.
- **B. Pagamento prima, account dopo**: Paddle raccoglie l'email; dopo il pagamento il sito crea l'account e chiede solo la password. Pro: il percorso più corto possibile. Contro: va gestito il caso di chi paga e non completa l'account (servono le email). Impegno grande. Rischio medio.
- **C. Pagina Accedi che ricorda il contesto**: se si arriva da Sblocca, in alto "Stai acquistando Analisi matematica 1 · 49 €". Pro: minimo intervento. Impegno piccolo. Rischio nullo.

Per i dispositivi: una frase prima del pagamento ("La materia si usa su due dispositivi, per esempio il telefono e il computer"); un avviso nel browser di Instagram ("Per usare il sito sempre dallo stesso browser, apri il link con Safari o Chrome dal menu ⋯"); in alternativa, il Worker potrebbe contare telefono con Instagram e telefono con Safari come un solo dispositivo quando hanno lo stesso sistema e lo stesso modello (impegno medio, rischio di aprire una scappatoia alla condivisione).

Dopo l'acquisto: un riquadro "Benvenuto in Analisi matematica 1" nella pagina della materia, con tre collegamenti (primo argomento, PDF dove c'è, Pi) e la ricevuta di Paddle ricordata.

### 2.6 Fiducia

**Osservato.**
- "Chi sono" (`schermate/chi-sono-telefono-intera.png`): bella foto, mappa delle province. Però:
  - sette emoji decorative (📈 🏆 🎓 🧠 📍 🎯 🌐), contro lo stile che hai scelto per il sito;
  - frasi generiche ("Risultati eccellenti e miglioramenti concreti fin dalle prime lezioni", "Metodo collaudato e personalizzato") e una domanda retorica ("Dove ho insegnato solo nel 2025?");
  - numeri non coerenti con quelli del brief (2.1);
  - il tasto finale "Prenota la tua lezione" porta a WhatsApp e non ai prodotti del sito;
  - 15 immagini di messaggi degli studenti (`public/chi-sono/risultato-01.jpg` … `-15.jpg`) e 16 loghi di università (`universita-01.png` … `-16.png`) sono nel repository (ultimo commit) ma la pagina non li usa. I loghi sono bianchi su fondo trasparente: sul fondo chiaro del sito non si vedrebbero. Nei messaggi si leggono frammenti di conversazioni WhatsApp.
- Contatti: email, WhatsApp, Instagram. La partita IVA, che sul vecchio sito ripetizioni-di-analisi-matematica.it compare in fondo alla pagina, qui non c'è.
- I metodi di pagamento e il nome di Paddle compaiono solo nei termini e nei passi dei videocorsi.
- Nessuna recensione: corretto, perché non vanno inventate.
- Garanzie: nessuna politica di rimborso scritta (tua scelta); la frase sui rimborsi caso per caso la dice solo Pi, rimandando a WhatsApp.

**Alternative.**
- **A. "Chi sono" asciutta** (bozza 5): formazione (laurea in Ingegneria civile, master in matematica), da quando insegni, i numeri confermati, come è fatto il materiale del sito, due o più messaggi degli studenti con il loro consenso e con nomi e foto coperti, due tasti (provare il materiale gratis, scriverti). Impegno piccolo. Rischio: pubblicare messaggi senza consenso; va chiesto agli studenti.
- **B. Fiducia sparsa nelle pagine di vendita**: una riga con la tua foto accanto a ogni prezzo ("Le lezioni sono di Carmine Tornincasa…"), i metodi di pagamento sotto ogni tasto di acquisto, la partita IVA nel piè di pagina se ce l'hai. Impegno piccolo. Rischio nullo.
- **C. Loghi delle università**: versione grigia scura dei loghi, in una fascia "Studenti da queste università". Pro: riconoscimento immediato. Contro: l'uso dei loghi di enti pubblici va verificato (sono marchi). Impegno piccolo. Rischio medio.

Sulle garanzie, senza scrivere una politica di rimborso: "Prima di comprare puoi scrivermi per controllare che il corso copra il programma del tuo esame" (già presente) e una lezione di prova visibile (mossa 1) danno sicurezza senza impegni scritti.

### 2.7 Identità visiva

**Osservato.**
- Base coerente e delicata: carta `#faf8f2`, inchiostro `#22302f`, verde `#2f6f68`, Source Serif 4 per testi e titoli, Source Sans 3 per l'interfaccia (`src/styles/global.css`, righe 4-27). Rispetta lo stile chiaro e con pochi colori che hai chiesto.
- I colori aumentano dove si vende: nove colori delle materie, il verde di "sbloccata", il verde di WhatsApp, il verde di Pi. Nell'account di un iscritto senza acquisti ci sono nove tasti pieni di nove colori diversi ("Sblocca · 29 €", "Sblocca · 49 €"…; `schermate/account-iscritto-telefono-intera.png`).
- Il logo (π bianco e corallo su blu scuro, `public/logo.svg`) usa colori che nel resto del sito non compaiono.
- Nei caroselli Instagram usi da tempo uno stile scuro (blu notte, oro); stai iniziando una serie di caroselli che riprende lo stile del sito. Questa informazione viene dalle conversazioni precedenti con te; nel repository non c'è.
- Formule al telefono: le formule in evidenza si riducono bene. Le formule dentro il testo invece vanno a capo a metà, per esempio "x³ −" a fine riga e "1 = (x − 1)(x² + x + 1)" a inizio della riga dopo (`schermate/analisi-1-limiti-scheda-1-gratis-telefono-intera.png`, ultima spiegazione). È un comportamento di KaTeX, si corregge con una regola di stile senza toccare i contenuti.
- Nei quiz di Matematica per concorsi le risposte hanno sia il pallino dell'elenco sia la lettera ("• A) 3"; `schermate/matematica-concorsi-scheda-1-telefono.png`).
- Sopratitolo "Gli argomenti dell'esame" anche su Matematica 5° anno e Matematica per concorsi, dove l'esame è la maturità o il concorso.

**Alternative.**
- **A. Un solo colore per le azioni**: i tasti di acquisto sempre nel verde del sito; il colore della materia resta nel pallino e nella striscia. Pro: pagine più calme, coerenti con la tua richiesta di pochi colori. Contro: si perde un po' il legame visivo con la materia. Impegno piccolo. Rischio nullo.
- **B. Colore del logo come secondo colore**: il blu scuro del logo per i titoli delle pagine commerciali (prezzi, videocorsi). Pro: lega sito, logo e caroselli. Contro: un colore in più. Impegno piccolo. Rischio basso.
- Correzioni puntuali in ogni caso: formule nel testo che non si spezzano, quiz senza pallino doppio, sopratitolo per tipo di materia ("Programma del quinto anno", "Argomenti del concorso"), `og.png` aggiornata con la tua foto e tutte le materie.

### 2.8 Acquisizione: Instagram, Google, passaparola

**Instagram → sito. Osservato.** Il Worker riconosce chi arriva da Instagram (dal browser dell'app o da `utm_source=ig`) e ricorda la prima provenienza in un cookie di 90 giorni (`worker/index.mjs`, righe 60-73 e 609-612). Non registra `utm_campaign`, quindi non sa da quale post o storia arriva lo studente. Non esistono pagine d'ingresso dedicate: chi tocca il link in bio finisce sulla home.

**Alternative.**
- **A. Link in bio verso una pagina breve** "/inizia": la tua foto, tre ingressi (Analisi 1, Analisi 2, videocorsi), i caroselli recenti con il link all'argomento del sito. Impegno piccolo. Rischio nullo.
- **B. Pagina d'ingresso per carosello**: per ogni carosello che rimanda al sito, un indirizzo preciso (l'argomento o la scheda gratuita corrispondente) con `?utm_source=ig&utm_campaign=<nome>`. Pro: lo studente atterra esattamente sull'argomento del post e la dashboard dice quale post vende. Impegno piccolo per ogni post. Rischio nullo.
- **C. Sezione gratuita "Compiti d'esame svolti"**: i compiti che pubblichi come caroselli (quelli di Analisi 1 sono i tuoi post con più visualizzazioni, informazione dalle conversazioni precedenti) anche sul sito, una pagina per compito, con il rimando alle schede per tipologia. Pro: porta su Google e da Instagram lo stesso contenuto che già funziona. Contro: contenuto nuovo da preparare. Impegno medio. Rischio basso.

**Google. Osservato.** Ho seguito la ricerca "teorema di Rolle esercizi svolti":
- In Analisi 1 il teorema di Rolle è nel quarto paragrafo di "Calcolo differenziale e Taylor" (`src/content/teoria/analisi-1/derivate.md`, riga 174). Il Worker mostra a tutti, Google compreso, solo i primi due paragrafi, quindi Google non lo vede.
- Nessuna scheda di Analisi 1 ha Rolle nel titolo; la più vicina ("Applicazioni del teorema di Lagrange e monotonia") è la n. 5, bloccata.
- La pagina del sito che Google può mostrare è la scheda 1 di Matematica 5° anno, "Verifiche del teorema di Rolle" (`schermate/cerca-rolle-telefono-intera.png`): uno studente universitario arriva su materiale per il liceo.
- La mappa del sito per Google (`sitemap.xml`) elenca anche le 694 schede bloccate, che a Google restituiscono la pagina Sblocca con indirizzo canonico `/analisi-1/sblocca`.

**Alternative.**
- **A. Vetrine delle schede** (mossa 4): ogni scheda bloccata diventa una pagina con contenuto proprio.
- **B. Dati strutturati per i contenuti a pagamento**: Google accetta che una pagina mostri tutto il testo ai suoi robot e solo una parte ai visitatori, se la parte riservata è indicata con `isAccessibleForFree: false` e `hasPart`. Pro: tutta la teoria diventa cercabile. Contro: chi sa usare gli strumenti dei robot può leggere il testo intero; va valutato insieme alla protezione dei contenuti che hai voluto. Impegno medio. Rischio medio.
- **C. Paragrafi gratuiti scelti a mano**: per ogni argomento, i due paragrafi liberi diventano quelli più cercati, per esempio i teoremi del valore medio in Derivate. Pro: nessun rischio sulla protezione. Contro: serve una scelta per argomento. Impegno medio. Rischio basso.

**Passaparola. Osservato.** Le pagine degli esercizi da fare dicono "ogni esercizio ha anche una pagina propria, da condividere con il link"; non c'è altro. Alternative: **A.** un tasto "Condividi" sulle schede gratuite (WhatsApp, copia link); **B.** un codice personale per chi ha comprato, che dà un piccolo sconto reale a un amico e un credito a chi lo ha condiviso (Paddle gestisce codici sconto; impegno medio). Va scritto con chiarezza che il materiale comprato resta personale (i termini vietano la condivisione dell'account, non del link alla pagina gratuita).

### 2.9 Offerta: pacchetti, credito, periodi d'esame, corsi di laurea

**Osservato.** Ogni materia si compra da sola (`src/data/prezzi.json`). Gli unici pacchetti sono i videocorsi, che comprendono le materie collegate (`src/data/videocorsi.ts`). Chi ha già comprato Analisi 1 a 49 € e poi compra il videocorso di Analisi 1 a 360 € paga di nuovo la materia. Chi ha il videocorso di Analisi 1 (360 €) e poi vuole Analisi 2 paga 192 €, cioè 552 € in tutto invece dei 499 € del pacchetto. Klarna non è disponibile con Paddle.

**Alternative.**
- **A. Pacchetto "Analisi completa"** (materie del sito): Analisi 1, Analisi 2 e Precorso, che separati costano 133 €, per esempio a 99 €, con la scritta "Comprate separatamente costano 133 €". Pro: risparmio reale, semplice da capire. Contro: qualche studente che avrebbe comprato tutte e tre separatamente spende meno. Impegno piccolo (un prodotto Paddle e una riga nel Worker). Rischio basso.
- **B. Pacchetti per corso di laurea**: "Primo anno di Ingegneria" (Precorso, Analisi 1, Algebra lineare, Fisica 1: 166 € separati), "Economia" (Precorso e Matematica generale: 88 € separati). Pro: parla la lingua dello studente. Contro: più prodotti da gestire. Impegno piccolo-medio. Rischio basso.
- **C. Credito e completamento**: chi ha comprato una materia compresa in un videocorso riceve il prezzo pagato come sconto sul videocorso (codice Paddle personale e monouso); chi ha il videocorso di Analisi 1 completa con Analisi 2 a 139 €, così il totale torna a 499 €. Pro: elimina il timore "se compro la materia adesso, poi butto i soldi" e rende la materia un primo passo verso il videocorso. Contro: codici da creare a mano finché non si automatizza. Impegno piccolo all'inizio. Rischio basso.

**Periodi d'esame senza urgenza finta.** Alternativa consigliata: nessuno sconto a tempo; nelle settimane prima delle sessioni si mettono in evidenza i pacchetti e le schede gratuite più utili per l'esame. Uno sconto vero in un periodo resta possibile, ma la direttiva Omnibus chiede di indicare il prezzo più basso dei 30 giorni precedenti e il risultato somiglia molto a un prezzo barrato: con le regole che ti sei dato lo sconsiglio.

**Pagamento a rate.** Suppongo che Paddle non offra il pagamento in tre rate di PayPal: da verificare con Paddle prima di prometterlo. Per i 499 € del videocorso le rate aiuterebbero.

**Prodotto intermedio** (domanda per te): fra la materia a 49 € e il videocorso a 360 € c'è un salto ampio. Se le lezioni sono divise per argomento, un pacchetto di lezioni su un solo argomento (per esempio "Studio di funzione") colmerebbe il salto. Impegno grande, dipende da come sono registrate le lezioni.

### 2.10 Dopo la vendita e fidelizzazione

**Osservato.** Il sito non manda email: le email automatiche con Resend sono rimandate (`CLAUDE.md`, riga 114; `wrangler.jsonc`, ultime righe). Dopo l'acquisto c'è solo la ricevuta di Paddle. L'account di chi ha comprato mostra le altre materie con il tasto colorato "Sblocca · prezzo" (`schermate/account-acquirente-telefono-intera.png`), ma nessun suggerimento legato a ciò che ha comprato (per esempio Analisi 2 dopo Analisi 1). L'informativa sulla privacy dice che i dati "non sono usati per pubblicità, newsletter o profilazione" (`src/pages/privacy.astro`).

**Alternative.**
- **A. Tre email di servizio**: benvenuto all'iscrizione (con il link all'anteprima della materia da cui si è partiti); conferma dell'acquisto con i primi passi (e per i videocorsi il link Drive e i tempi); una sola email dopo la sessione d'esame per chiedere com'è andata e un parere. Pro: sono comunicazioni di servizio, compatibili con l'informativa attuale. Contro: serve configurare Resend. Impegno medio. Rischio basso.
- **B. Inviti alla materia successiva**: un'email quando finisce la sessione di Analisi 1 con il rimando ad Analisi 2. Questo è un invito commerciale: per chi ha già comprato è ammesso con la possibilità di disiscriversi, ma va aggiornata l'informativa (da far verificare a un professionista, come già previsto). Impegno piccolo dopo A. Rischio medio.
- **C. Senza email**: un riquadro nell'account ("Dopo Analisi 1: Analisi matematica 2 e il videocorso di Analisi 2") e un messaggio nella pagina della materia quando lo studente ha letto tutti gli argomenti. Impegno piccolo. Rischio nullo.

**Recensioni vere, da raccogliere.** Tre modi: **A.** un modulo nell'account dopo qualche settimana dall'acquisto ("Com'è andato l'esame? Possiamo pubblicare il tuo commento con il nome di battesimo?"), salvato nell'archivio del Worker con il consenso; **B.** la scheda Google della tua attività, se esiste, dove chiedere le recensioni; **C.** i messaggi che già ricevi su WhatsApp e Instagram, pubblicati solo con il consenso scritto dello studente.

### 2.11 Pi come aiuto alla vendita

**Osservato** (`worker/assistente.mjs`).
- Pi riceve le informazioni sul sito (materie, prezzi, videocorsi, valore delle materie comprese) solo quando la domanda le riguarda (riga 79) e ha l'istruzione di non insistere per vendere (riga 36). Rispetta le tue scelte.
- Pi non sa che chi ha seguito un tuo corso o comprato un videocorso riceve le materie gratis: lo studente che glielo chiede viene rimandato a WhatsApp.
- Descrive l'anteprima come "una parte della teoria … e una parte degli esercizi da fare" (riga 87), meno precisa del sito.
- I numeri su di te sono diversi da quelli del brief (2.1).
- Gli ospiti hanno 5 messaggi al giorno; al limite il messaggio invita a creare un account gratuito per averne 20 (righe 135-141). È già un buon invito all'iscrizione.
- La quota gratuita di Cloudflare basta per circa 100-150 domande al giorno per tutto il sito (`CLAUDE.md`, riga 91). Se i caroselli portano molte visite in un giorno, Pi risponde "Pi ha raggiunto il limite di oggi" a tutti.

**Alternative** (sempre senza che Pi proponga prezzi di sua iniziativa).
- **A. Informazioni complete e coerenti**: aggiungere a Pi lo sblocco gratuito per gli ex studenti, i numeri esatti dell'anteprima per materia, i tuoi numeri confermati, la materia giusta per corso di laurea ("Ingegneria → Precorso, Analisi 1, Algebra lineare, Fisica 1"). Impegno piccolo. Rischio nullo.
- **B. Pi sulla pagina Sblocca**: un collegamento discreto "Hai una domanda su che cosa comprende? Chiedi a Pi". Pro: risponde ai dubbi nel momento della decisione. Contro: Pi parla di acquisti in un punto commerciale, ma solo se lo studente apre la finestra. Impegno piccolo. Rischio basso.
- **C. Piano a pagamento di Cloudflare** (5 $ al mese più consumo) nei periodi di esame, per non lasciare Pi muto nei giorni di maggior traffico. Impegno piccolo. Rischio: costo da controllare.

### 2.12 Misurazione

**Che cosa raccoglie già la dashboard** (`worker/admin.mjs`, `worker/index.mjs` righe 227-250): visitatori unici al giorno (con la parte da telefono), pagine viste per sezione, ingressi per provenienza (Instagram, Google, diretto…), iscritti e paganti per provenienza, la sequenza "visitatori → iscritti → paganti", vendite e incassi per materia, studenti con le materie attivate e il corso dichiarato, uso giornaliero di Pi (salvato ma non ancora mostrato).

**Che cosa manca per capire dove si perdono gli studenti.**
- Quante volte si apre la pagina Sblocca di ogni materia e la pagina di ogni videocorso: oggi tutti i videocorsi finiscono nella sezione "videocorsi" (la sezione è il primo pezzo dell'indirizzo, `worker/index.mjs`, riga 602).
- Quante volte si arriva alla fine della teoria gratuita (il riquadro "Sblocca ora").
- Quante volte si preme il tasto di acquisto, quante si apre la finestra Paddle, quante si chiude senza pagare. Paddle avvisa la pagina di questi momenti (`checkout.loaded`, `checkout.closed`); il sito oggi ascolta solo `checkout.completed` (`src/viste/Sblocca.astro`, riga 66).
- Da quale post arriva lo studente (`utm_campaign`).
- Quanti iscritti senza acquisti tornano entro una settimana.

**Alternative.**
- **A. Contatori aggregati**: una tabella "eventi" nell'archivio (giorno, evento, materia, numero), senza dati personali, mostrata in dashboard come sequenza per materia: pagina vista → Sblocca vista → tasto → Paddle aperto → pagato. Pro: compatibile con l'informativa attuale. Impegno piccolo-medio. Rischio nullo.
- **B. Strumento esterno di statistiche rispettoso della privacy** (per esempio Cloudflare Web Analytics, già nel tuo fornitore). Pro: nessun codice da scrivere per le pagine. Contro: non vede i passaggi dentro Paddle. Impegno piccolo. Rischio basso.

---

## 3. Percorsi simulati e punti di attrito

### 3.1 Studente di Analisi 1 da un post Instagram, al telefono
1. Tocca il link in bio e apre il sito nel browser di Instagram: arriva sulla home (`home-telefono.png`). Attrito: il link non porta all'argomento del post; la home non lo riconosce come tuo studente; il fumetto di Pi copre Analisi 1.
2. Tocca Analisi matematica 1, poi "Inizia dall'anteprima": legge "Insiemi, induzione e funzioni elementari", il primo argomento. Attrito: se il post era sui limiti, deve tornare indietro e cercare "Limiti e continuità".
3. Legge i due paragrafi gratuiti di "Limiti e continuità" e trova il riquadro "Sblocca ora" (`bozze/2-blocco-teoria-prima-telefono.png`). Attrito: nessun prezzo, titoli in minuscolo, nessun rimando alle schede gratuite dello stesso argomento.
4. Va alle schede svolte, apre la 1 (gratuita, ben fatta), poi la 5: si trova sulla pagina Sblocca senza spiegazione.
5. Tocca "Crea un account e sblocca": modulo con cinque campi e il riquadro facoltativo, in una pagina che non ricorda che cosa sta comprando.
6. Torna su Sblocca, preme "Sblocca ora", paga con Paddle. Attrito supposto: Apple Pay forse assente nel browser di Instagram.
7. Viene portato alla pagina della materia, ora con la spunta verde. Nessun messaggio di benvenuto, nessuna email. Se più tardi apre il sito da Safari, ha già usato i due dispositivi.

### 3.2 Studente che vuole il videocorso di Analisi 1 e 2
1. Dalla home al telefono non vede i videocorsi. Li trova solo aprendo ☰ (riquadro in cima) o scorrendo fino al link "Prezzi". Da una pagina Sblocca li trova nel riquadro "Questa materia è inclusa anche nei videocorsi…".
2. Pagina `/videocorsi`: capisce lezioni, ore, materie comprese e prezzo.
3. Pagina del corso: capisce il risparmio di pacchetto; le due righe verdi "Risparmi 53 €" e "risparmi 133 €" possono confondere. Non vede nessuna lezione, nessun programma, nessun volto. Per una prova deve scriverti su WhatsApp e aspettare.
4. "Crea un account e acquista" → modulo → ritorno → "Acquista il videocorso" → Paddle.
5. Dopo il pagamento: account con "Il link alla cartella dei video sta per comparire qui" (link Drive non configurato), richiesta di accesso su Drive, attesa della tua conferma.
Passaggi fino al pagamento: circa 8 tocchi e due moduli, più un'attesa di durata non indicata dopo il pagamento.

### 3.3 Studente delle superiori (Matematica 5° anno) e candidato a un concorso
- Superiori: in home la macro area è chiusa; aperta, mostra "Matematica" e "Fisica"; dentro Matematica, quattro anni su cinque sono "in preparazione" (`home-materie-aperte-telefono-intera.png`). La pagina della materia è chiara, con il tono più semplice che hai approvato (`matematica-5-derivate-teoria-ospite-telefono.png`); il sopratitolo dice "Gli argomenti dell'esame" invece di maturità. Il nome del sito, "Ripetizioni di Analisi", e l'immagine di anteprima parlano a universitari: uno studente di quinta può pensare che il sito non sia per lui.
- Concorsi: la guida gratuita `/concorsi` è il miglior ingresso (`concorsi-guida-telefono-intera.png`), ordinata e prudente. Attriti: dice "Per sapere quando le materie saranno pronte…" anche se Matematica per concorsi è pronta; il link alla materia è un piccolo "Apri la materia" in fondo alla scheda; in home la macro area Concorsi è chiusa. La pagina della materia dice "Gli argomenti dell'esame". I quiz sono chiari, con il doppio segno "• A)". Suppongo che chi prepara un concorso arrivi soprattutto da Google, non dal tuo Instagram: la guida va curata come pagina d'ingresso (titolo, descrizione, collegamenti diretti agli argomenti gratuiti).

### 3.4 Ex studente che deve ricevere lo sblocco gratuito
1. Si iscrive e spunta "Ho seguito o sto seguendo un corso con Carmine", sceglie il corso; legge "Carmine controlla l'iscrizione e ti attiva gratis le materie collegate al corso."
2. Arriva nell'account, dove vede tutte le materie con il tasto "Sblocca · prezzo", senza traccia della sua richiesta e senza un tempo indicato.
3. Se si era iscritto partendo da una pagina Sblocca, torna lì e vede "Sblocca ora · 49 €": può pagare per errore ciò che gli spetta gratis.
4. Tu vedi la richiesta solo aprendo la dashboard (filtro "Dai miei corsi"); non ricevi un avviso.
Alternative: un riquadro "Richiesta inviata" nell'account e nella pagina Sblocca al posto del tasto di pagamento finché non decidi; un avviso a te (email o messaggio) a ogni nuova richiesta; per i corsi di gruppo, un codice personale da inserire all'iscrizione che attiva subito le materie (già proposto in passato, `CLAUDE.md`, riga 105).

### 3.5 Visitatore da Google su un argomento preciso
Ricerca "teorema di Rolle esercizi svolti": i dettagli sono in 2.8. L'unica pagina del sito su Rolle visibile a Google è una scheda di Matematica 5° anno; la teoria di Analisi 1 su Rolle è oltre i due paragrafi liberi e le schede vicine sono bloccate. Chi arriva su una scheda gratuita trova un contenuto ottimo, ma a fine pagina solo "Successivo · Scheda 2": nessun invito alla materia completa né all'argomento collegato in Analisi 1.

### 3.6 Visitatore che chiede a Pi prezzi o che cosa comprare
Pi riceve l'elenco delle materie con i prezzi, i videocorsi con le materie comprese e il loro valore, le regole sull'acquisto e sui due dispositivi, e risponde senza insistere. Attriti: non conosce lo sblocco gratuito per gli ex studenti; i numeri su di te non coincidono con quelli del brief; da ospite ha 5 domande al giorno; nei giorni di molto traffico può esaurire la quota gratuita. Non ho potuto provare risposte reali da qui (serve Cloudflare): la valutazione è sul testo delle istruzioni.

---

## 4. Confronto con i concorrenti

| Sito | Che cosa promette | Prezzo e come lo mostra | Che cosa lascia gratis | Fiducia | Pagina d'acquisto |
|---|---|---|---|---|---|
| YouMath | Esercizi svolti per tipologia e lezioni | Nessun prezzo nella pagina vista | Tutto il materiale consultato | Struttura e quantità, nessun autore in evidenza | Assente nella pagina vista |
| Skuola.net | Appunti di studenti per ogni esame | Abbonamento Premium: 3,99 €/mese annuale (47,88 €), 7,99 €/mese trimestrale, 12,79 € mensile | Consultazione, parte degli appunti | Voto medio degli appunti, numero di esami | Piani affiancati, "disdici quando vuoi" |
| Docsity | Documenti caricati dagli studenti | Punti di download; abbonamento con punti | 20 punti di benvenuto, documenti condivisi | Quantità di documenti | Negozio di punti |
| Studocu | Appunti e documenti | Abbonamento da 2,99 €/mese dopo 30 giorni | Scambio con un proprio caricamento | Quantità | Prova di 30 giorni |
| EduRocket (Analisi 1) | "Qui si passa l'esame", oltre 200 video, assistente IA | 44,97 € per un anno, codice sconto a scadenza, PayPal in 3 rate | Una lezione aperta, prova di 48 ore con rimborso | Trustpilot, "costa meno di 2 ore di ripetizioni" | Pagina lunga con elenco dei video e domande frequenti |
| ADC Math, "Esame di Analisi 1" | Videocorso per superare Analisi 1 | 140 €, accesso a vita | Nessuna anteprima nella pagina | 120 lezioni, 32 ore, recesso di 30 giorni | Due tasti "Acquista subito" |
| Dispense Universitarie | Appunti PDF di un corso preciso | 3,99 € | 5 pagine di anteprima | Nessuna recensione | Carrello con anteprima |
| Superprof | Docenti privati | In media 18 €/ora per Analisi | Prima lezione offerta dalla maggior parte dei docenti | Foto, stelle, numero di recensioni | Contatto con il docente |
| Concorsando Academy | Tutti i corsi per i concorsi | 39,99 €/mese, 59,99 € a trimestre, nessun rinnovo automatico | Non indicato nella pagina vista | "3M candidati", aggiornamenti normativi | Piani con e senza simulatore |
| UniD Formazione (logica per concorsi) | Videolezioni e test illimitati | Prezzo di listino accanto a quello scontato, conto alla rovescia | Nessuna prova | Pagamenti sicuri, rate fino a 36 | Offerte a scadenza |
| Il tuo vecchio sito | Lezioni, corsi dal vivo, videolezioni | Nessun prezzo | Nessun materiale | Messaggi degli studenti in immagine, partita IVA | Link al negozio e a WhatsApp |

**Che cosa se ne ricava, senza copiare.**
- EduRocket mostra una lezione aperta e l'elenco dei video; ADC Math mostra almeno il numero di lezioni e di ore e il programma per argomenti. Nessuno dei due chiede di scrivere per avere la prova: è la differenza più grande con le tue pagine.
- Molti usano sconti a scadenza e prezzi di listino affiancati (EduRocket, UniD): è proprio ciò che hai deciso di non fare. Il tuo vantaggio di fiducia è il prezzo chiaro, una volta sola, senza trucchi: va detto in pagina.
- Il confronto con il costo delle ripetizioni ("costa meno di 2 ore di ripetizioni") è usato da EduRocket. Per te sarebbe un confronto con il tuo stesso lavoro: lo sconsiglio, perché svaluta le lezioni private e i corsi di gruppo.
- Nessuno dei concorrenti ha insieme un docente riconoscibile, materiale scritto in stile manuale con gli esercizi per tipologia, un assistente sulla pagina e videocorsi che comprendono il materiale scritto. È il posizionamento da mettere in apertura (2.1).

---

## 5. Bozze grafiche prima / dopo

Le bozze sono pagine HTML statiche in `bozze/`, con i caratteri (Source Serif 4, Source Sans 3) e i colori di `src/styles/global.css`. Non toccano il repository. I testi seguono le regole della skill "scrittura-umana-carmine". I riquadri tratteggiati color sabbia indicano materiale che devi fornire tu. Ogni immagine affianca la schermata reale del sito (prima) e la bozza (dopo), al telefono.

### Bozza 1. Home al telefono
![Home prima e dopo](bozze/1-home-prima-dopo.png)
File: `bozze/1-home-dopo.html`. Cambia: titolo che dice che cosa si trova, tua foto con i numeri del brief, che cosa è gratis, tre ingressi Università/Superiori/Concorsi, lista compatta delle materie con i conteggi reali, materie in preparazione in una riga, riga facoltativa dei videocorsi (vedi 2.2, alternativa C), fumetto di Pi assente.

### Bozza 2. Fine della teoria gratuita
![Blocco della teoria prima e dopo](bozze/2-blocco-teoria-prima-dopo.png)
File: `bozze/2-blocco-teoria-dopo.html`. Cambia: elenco numerato dei 7 paragrafi che mancano con i titoli veri di "Limiti e continuità", ciò che c'è ancora nella versione completa (7 schede, 14 soluzioni, PDF), prezzo, tasto, rimando alle 3 schede gratuite, rimando ai videocorsi.

### Bozza 3. Pagina del videocorso di Analisi 1 e 2
![Videocorso prima e dopo](bozze/3-videocorso-prima-dopo.png)
File: `bozze/3-videocorso-dopo.html`. Cambia: lezione di prova in alto, quattro numeri, conto trasparente del pacchetto (360 € + 192 €, risparmio reale 53 €), le materie comprese indicate come valore compreso, tua foto, programma lezione per lezione (da fornire), tempi di conferma su Drive, domande frequenti.

### Bozza 4. Pagina di accesso completo (oggi "Sblocca")
![Sblocca prima e dopo](bozze/4-sblocca-prima-dopo.png)
File: `bozze/4-sblocca-dopo.html`. Cambia: tabella "Gratis / Accesso completo" con i numeri di Analisi 1 (18 di 90 paragrafi liberi sono "i primi 2 paragrafi di ogni argomento"), una scheda di esempio, modulo di iscrizione nella pagina, metodi di pagamento, nota sui due dispositivi, riquadro per chi è già tuo studente.

### Bozza 5. Chi sono
![Chi sono prima e dopo](bozze/5-chi-sono-prima-dopo.png)
File: `bozze/5-chi-sono-dopo.html`. Cambia: niente emoji né frasi generiche, formazione, numeri del brief con l'avvertenza che sono approssimati per difetto, come è fatto il materiale, due messaggi degli studenti già presenti nel repository (da pubblicare solo con il loro consenso e con nomi e foto coperti), due tasti finali.

---

## 6. Domande per Carmine

1. **Numeri su di te.** Quali usiamo ovunque: "oltre mille studenti, più di diecimila ore di lezione" (brief), oppure "oltre 1500 studenti, 78 province, oltre 10 anni" (Chi sono e Pi)? Le cifre per città (400+ Roma ecc.) sono confermate?
2. **Lezione di prova.** Quale lezione (o quali 10 minuti) del videocorso possiamo mostrare a tutti? Hai l'elenco delle 51 lezioni con i titoli?
3. **Link Drive.** Puoi fornire i link delle cinque cartelle? Entro quanto tempo puoi promettere di confermare l'accesso su Drive?
4. **Durata dell'accesso.** Possiamo scrivere che le materie restano nell'account senza scadenza? E le cartelle Drive?
5. **Videocorsi in home.** Dopo aver tolto la vetrina, accetti una sola riga discreta "Videocorsi di Carmine" in home (bozza 1)?
6. **Schede bloccate.** Va bene rendere visibili a tutti le tracce delle schede svolte dalla quarta in poi, con lo svolgimento riservato (mossa 4)?
7. **Pacchetti.** Ti interessa il pacchetto "Analisi completa" (Analisi 1, Analisi 2, Precorso)? A quale prezzo? E i pacchetti per corso di laurea?
8. **Credito.** Vuoi che chi ha comprato una materia la veda scalata dal prezzo del videocorso? Che chi ha il videocorso di Analisi 1 possa completare con Analisi 2 al prezzo della differenza (139 €)?
9. **Copertura di Analisi 2.** Le 16 lezioni del videocorso coprono tutti gli 11 argomenti della materia del sito (compresi serie di Fourier, superfici e flussi)?
10. **Email.** Possiamo attivare Resend per tre email di servizio? Vuoi anche gli inviti alla materia successiva, con l'aggiornamento dell'informativa?
11. **Messaggi degli studenti.** Puoi chiedere il consenso agli studenti dei 15 messaggi in `public/chi-sono/`? Preferisci mostrarli con il nome coperto?
12. **Loghi delle università.** Vuoi davvero mostrarli? Servono in versione scura e va verificato se si possono usare.
13. **PDF.** Generiamo i PDF anche per le altre sei materie, oppure togliamo la promessa del PDF dove non c'è?
14. **Precorso.** Restano libere 3 schede su 5 per argomento, oppure 2?
15. **Partita IVA.** Vuoi indicarla nel piè di pagina, come sul vecchio sito?
16. **Pi nei periodi d'esame.** Accetti il piano a pagamento di Cloudflare (5 $ al mese più consumo) quando il traffico cresce?
17. **Pagamento a rate.** Chiediamo a Paddle se è possibile il pagamento in più rate per i videocorsi?
18. **Codice per i corsi di gruppo.** Vuoi il codice personale che attiva subito le materie a chi ha seguito un corso, al posto dell'attivazione a mano?

---

## 7. Fonti

Repository (tutto in `/home/claude/ripetizioni-di-analisi-mate/sito-analisi`): `CLAUDE.md`, `GUIDA-CONTENUTI.md`, `src/data/*`, `src/i18n.ts`, `src/layouts/Base.astro`, `src/styles/global.css`, `src/components/*`, `src/viste/*`, `src/pages/*`, `src/lib/seo*.ts`, `scripts/vetrine.mjs`, `worker/index.mjs`, `worker/assistente.mjs`, `worker/admin.mjs`, `wrangler.jsonc`, `src/content/` (un argomento completo per ogni materia, conteggi su tutti i file), `public/`.

Ricerca esterna (consultata il 30/10/2026):
- [YouMath, esercizi svolti sui limiti notevoli](https://www.youmath.it/esercizi/es-analisi-matematica/es-su-limiti-continuita-e-asintoti/2736-esercizi-svolti-limiti-notevoli.html)
- [Skuola.net, appunti e riassunti universitari](https://www.skuola.net/universita/appunti-riassunti)
- [Aranzulla, siti per appunti (Skuola.net, Docsity, Studocu)](https://www.aranzulla.it/siti-per-appunti-1481786.html)
- [EduRocket, pagina di vendita di Analisi 1](https://edurocket.it/landing-analisi-1/)
- [EduRocket, articolo "Come preparare Analisi 1"](https://edurocket.it/come-preparare-analisi1-differenze-facolta/)
- [ADC Math, "Esame di Analisi 1"](https://www.alessandrodeconcini.shop/products/esame-di-analisi-1)
- [Dispense Universitarie, Analisi 1](https://www.dispenseuniversitarie.com/prodotto/analisi-1/)
- [Superprof, ripetizioni di Analisi in Italia](https://www.superprof.it/lezione/analisi/italia/)
- [Superprof, costo delle ripetizioni](https://www.superprof.it/blog/costo-ripetizioni-a-domicilio/)
- [Concorsando, corsi online per concorsi pubblici](https://www.concorsando.it/blog/corsi-online-per-concorsi-pubblici)
- [UniD Formazione, logica per concorsi](https://www.unidformazione.com/corsi/corsi-online/logica-per-concorsi/)
- [Brighterly, Udemy e Khan Academy a confronto](https://brighterly.com/blog/udemy-vs-khan-academy)
- [Il tuo vecchio sito, ripetizioni-di-analisi-matematica.it](https://ripetizioni-di-analisi-matematica.it/)
