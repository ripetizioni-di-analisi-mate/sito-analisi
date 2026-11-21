# Revisione di chiarezza della teoria · TOLC-S e TOLC-I (21 novembre 2026)

## Incarico (già approvato da Carmine, titolare del sito)

Gli studenti si lamentano che la teoria è poco comprensibile per chi è alle prime armi. Va riscritto **un capitolo di teoria** dei TOLC in modo che ogni frase sia contestualizzata e capibile da uno studente che parte da zero. Si lavora su italiano e inglese. Repository: `/home/claude/sito-analisi`.

Ti viene assegnato un capitolo: `src/content/teoria/tolc-s/<capitolo>.md` e la traduzione `src/content-en/teoria/tolc-s/<capitolo>.md`; se il capitolo esiste anche in `tolc-i`, anche i due file corrispondenti (vedi «Capitoli comuni»).

**Non toccare altro**: niente schede svolte, esercizi, domande, codice, dati. **Nessun comando git che modifichi** (niente add, commit, push, checkout, stash, restore). Per leggere il testo di partenza: `git -C /home/claude/sito-analisi show HEAD:<percorso>`.

## Che cosa leggere prima di scrivere

1. `GUIDA-CONTENUTI.md` (regole editoriali del sito).
2. I due capitoli già riscritti e approvati, **che sono il modello di stile e di misura**:
   - `src/content/teoria/tolc-s/comprensione-verbale.md` (com'era: `git show 366fa31d2:src/content/teoria/tolc-s/comprensione-verbale.md`)
   - `src/content/teoria/tolc-s/scienze-della-terra.md` (com'era: `git show 366fa31d2:src/content/teoria/tolc-s/scienze-della-terra.md`). Attenzione: questo è venuto troppo lungo (più del doppio). Prendine lo stile, non la lunghezza.
3. Il tuo capitolo, per intero, in italiano e in inglese.

## Come si controlla ogni paragrafo (metodo di Carmine)

- La prima frase dice **che cos'è** la cosa, non che cosa «mantiene», «descrive» o «riguarda».
- **Ogni termine tecnico è definito alla prima comparsa**, oppure ha un richiamo di una riga. Vale anche per i simboli ($\in$, $\Rightarrow$, $\Delta$, $\sum$…): alla prima comparsa si dice come si leggono e che cosa indicano.
- **Ogni sigla ha il nome per esteso alla prima comparsa** (DNA, RNA, ATP, pH, SI, CISIA, VSEPR, MCD…) e una riga su che cos'è. Carmine ha dovuto correggere a mano un «RNA» non spiegato: non deve più succedere.
- C'è un **esempio concreto** (un numero, una sostanza, un caso noto allo studente) prima o subito dopo la regola.
- Il principio viene prima del conto, in forma affermativa.
- Ogni «quindi» e «perciò» segue da qualcosa di scritto. **I passaggi intermedi di un calcolo ci sono tutti.**
- Una frase, una cosa. Più oggetti quasi uguali nella stessa frase vanno su righe diverse (elenco).
- Segnali di testo che non insegna, da eliminare: molti «può/possono», «spesso», «in generale», «contribuisce a»; frasi scritte solo per escludere un errore che il lettore non ha ancora («X non coincide con Y», «ciò non implica che…»); punto di vista da laboratorio o da norma tecnica («valore osservato», «condizioni pertinenti», «compatibile con», «ammissibile», «il modello adottato»); verbi figurati; un argomento in più buttato in fondo al blocco.

## Come si trasforma

- Prima la situazione o l'esempio, poi la formula o la definizione formale.
- Definizione → a che cosa serve → caso concreto. L'esempio si chiude con la risposta, verificata sugli stessi numeri.
- Negli schemi e negli algoritmi la tabella viene prima dei conti e ogni numero ha il suo posto dichiarato.
- **Le frasi aggiunte sono solo definizioni, motivi o calcoli.** Mai spiegazioni generiche, mai frasi di raccordo («vediamo ora», «come abbiamo visto»).
- La misura dipende dal testo: dove è già chiaro si lascia o si ritocca; dove elenca fatti senza spiegare si riscrive.
- Le negazioni sono rare. Quando un errore tipico va segnalato, si usa un blocco `:::attenzione` con un controesempio numerico, non una frase «non…» in mezzo al paragrafo.

## Voce (regole «scrittura umana» di Carmine)

Italiano da docente universitario che scrive un manuale: frasi complete con soggetto e verbo, lessico tecnico canonico, deduzioni complete (premessa, connettivo esplicito, conclusione). **I due punti non sostituiscono un connettivo logico** (vanno bene per introdurre un elenco o un esempio). Niente personificazioni («la formula ci dice», «il teorema garantisce che siamo salvi»), niente metafore, niente frasi a effetto, niente domande retoriche, niente lineette lunghe (—), niente «Immagina», «In sintesi», «Ricorda», «fondamentale», «cruciale», «non è X ma Y». **Esposizione di fatti, non consigli**: niente tono prescrittivo («devi», «bisogna sempre», «mai fare»), niente «si fa così, non così». Mai «la parentesi» per indicare un'espressione. Niente statistiche inventate: i dati degli esempi sono dati d'esercizio dichiarati («Si supponga…»), i dati reali devono essere veri.

Formule: frazioni **sempre in colonna** (`\dfrac` nel testo, `\frac` nelle formule in evidenza), anche negli esponenti (`^{\frac{t}{T}}`); mai `a/b` dentro una formula. Virgola decimale `{,}` in italiano. Unità con `\,\mathrm{…}`. Graffa di sistema solo per condizioni da soddisfare insieme, mai per elencare. Assi orientati nei grafici.

## Vincoli tecnici (verificati da uno script)

- **Frontmatter identico** (titolo, sommario).
- **Titoli `##` identici e nello stesso ordine.**
- **Ancore `{#…}` identiche**, nello stesso ordine, sullo stesso tipo di blocco e **con lo stesso `titolo="…"`** (le pagine dei singoli teoremi, la ricerca e le schede svolte puntano lì).
- **Righe delle figure** (`::grafico{…}`, `::struttura{…}`, `::venn{…}`, `::schema{…}`, `::figura{…}`) **copiate identiche**, tutte, senza aggiungerne e senza toglierne. Si può spostare una figura dentro il capitolo se il testo attorno la spiega meglio; il testo deve restare coerente con ciò che la figura mostra. **Nessuna immagine esterna, nessun link, nessun `<img>`.**
- Blocchi ammessi: `:::definizione`, `:::teorema` (o `::::teorema` con dentro `:::dimostrazione`), `:::proposizione`, `:::esempio{titolo="…"}`, `:::osservazione`, `:::attenzione`, `:::richiamo`. Niente `:::percorso`. Ogni blocco aperto va chiuso con lo stesso numero di due punti. Blocchi nuovi (esempi, attenzione) **senza ancora**.
- Tabelle Markdown ed elenchi sono ammessi dentro i blocchi. I brani di lettura vanno in citazione (`> …`).
- Nei file `tolc-s` non deve comparire la stringa «TOLC-I», nei file `tolc-i` non deve comparire «TOLC-S».
- **Lunghezza**: il capitolo riscritto deve stare fra **1,3 e 1,8 volte** l'originale (conteggio `wc -w`). Esempi brevi: tre-sei righe ciascuno.
- **Nessun contenuto dell'originale va tolto per stare nella lunghezza**: regole, casi, eccezioni e precisazioni dell'originale servono alle schede svolte e ai quesiti del capitolo. Si accorciano gli esempi aggiunti, non i contenuti. Se, con tutti i contenuti dell'originale e le definizioni necessarie, il capitolo supera 1,8, può arrivare fino a 2,0: in quel caso lo si scrive nel rapporto.

## Correttezza

Ogni affermazione scientifica deve essere vera e ogni conto giusto. **Ricalcola tutti i numeri** (Python o sympy) prima di scriverli, anche quelli che copi dall'originale: se trovi un errore nell'originale, correggilo e segnalalo nel rapporto. Per fisica: unità, cifre e versi coerenti. Se un punto dell'originale è dubbio e non riesci a verificarlo, tienilo com'è e scrivilo nel rapporto.

## Inglese

Traduzione **integrale** del nuovo testo italiano, senza riassumere: stessa struttura, stessi blocchi nello stesso ordine, stesse ancore, stesse formule (punto decimale al posto di `{,}`), stessi elenchi e tabelle. Le chiavi restano in italiano (`titolo=`). Frontmatter, titoli `##`, titoli dei blocchi con ancora e righe delle figure si prendono **identici dal file inglese esistente**. Inglese britannico, come nei file esistenti. Nomi di materie nei rimandi come nei file esistenti.

Capitolo «inglese»: le frasi e le alternative in inglese restano in inglese in entrambe le versioni; in italiano le spiegazioni sono in italiano.

## Capitoli comuni ai due TOLC

- Solo in `tolc-s`: `biologia`, `probabilita-e-dati`.
- Identici nei due TOLC (stesso file): `funzioni-e-grafici`, `trigonometria-e-statistica`. Si scrive in `tolc-s` e si copia in `tolc-i` (italiano e inglese).
- Uguali tranne il frontmatter: `aritmetica-e-algebra`, `inglese`, `logica`. Il corpo riscritto va in entrambi; **ogni file conserva il proprio frontmatter**; se nel corpo compare il nome del test, in `tolc-s` è «TOLC-S» e in `tolc-i` è «TOLC-I».
- Con parti diverse: `chimica` e `fisica` (in `tolc-s` ci sono blocchi o una sezione in più), `geometria` (una sezione diversa in ciascuno: coniche in `tolc-i`, trasformazioni in `tolc-s`). Guarda le differenze con `diff <(git show HEAD:src/content/teoria/tolc-i/<cap>.md) <(git show HEAD:src/content/teoria/tolc-s/<cap>.md)`. Le parti comuni devono avere lo stesso testo riscritto nei due file; le parti proprie di ciascun file vanno riscritte nel file in cui stanno. Ogni file conserva titoli, ancore e figure che aveva.

## Controllo obbligatorio prima di consegnare

Per ogni file-materia su cui hai lavorato:

```
python3 /home/claude/lavoro/controlla_capitolo.py tolc-s <capitolo>
python3 /home/claude/lavoro/controlla_capitolo.py tolc-i <capitolo>     # se il capitolo esiste in tolc-i
```

L'esito deve essere senza `ERRORE`. Gli `AVVISO` vanno letti uno per uno: quelli sulle sigle elencano anche simboli e formule chimiche che non sono sigle (ignorali), ma ogni sigla vera deve avere il nome per esteso. Rileggi poi l'intero capitolo italiano dall'inizio alla fine mettendoti nei panni di uno studente che non sa nulla: a ogni termine tecnico chiediti «è stato definito prima?».

## Rapporto

Scrivi `/home/claude/lavoro/rapporti/<capitolo>.md` (in italiano, breve): parole prima e dopo; 5-8 punti su che cosa è cambiato; un esempio «Com'era / Com'è ora» con testo vero (scegli un punto in cui lo studente si perdeva davvero); errori trovati nell'originale e corretti; dubbi rimasti. La tua risposta finale deve essere di poche righe: esito del controllo e percorso del rapporto.
