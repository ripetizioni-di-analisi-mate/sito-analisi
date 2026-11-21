# Revisione di chiarezza della teoria · Fisica 1° anno e Matematica 1° anno (21 novembre 2026)

## Incarico (approvato da Carmine, titolare del sito; decide Claude «in chiave chiarezza»)

Gli studenti dicono che la teoria del sito è poco comprensibile per chi è alle prime armi. Va rivisto **un capitolo di teoria** in modo che ogni frase sia capibile da chi lo legge per la prima volta. Si lavora su italiano e inglese. Repository: `/home/claude/sito-analisi`.

Materie: `fisica-superiori-1` (Fisica 1° anno) e `matematica-superiori-1` (Matematica 1° anno). Il tuo capitolo è `src/content/teoria/<materia>/<capitolo>.md` con la traduzione `src/content-en/teoria/<materia>/<capitolo>.md`.

**Non toccare altro**: niente schede svolte, esercizi, domande, codice, dati. **Nessun comando git che modifichi** (niente add, commit, push, checkout, stash, restore). Per leggere il testo di partenza: `git -C /home/claude/sito-analisi show HEAD:<percorso>`. Altri agenti lavorano in parallelo su altri capitoli: non aprire in scrittura file che non sono i tuoi due.

## Chi legge

Uno studente di **14-15 anni**, al primo anno delle superiori, che spesso arriva dalle medie con lacune (frazioni, proporzioni, uso delle lettere) e che apre il sito perché a lezione non ha capito. Non conosce il lessico universitario. Il testo attuale è corretto, ha già molti esempi e molte figure, ma è scritto con la voce di un manuale universitario o di un laboratorio: enunciati in forma generale («Siano $M,Q_1,\ldots,Q_n$ polinomi…»), frasi astratte («Il rapporto permette di confrontare campioni di dimensioni diverse»), termini mai spiegati («omogeneo», «addendo», «a temperatura e pressione fissate», «identità»). Il lavoro è **abbassare il registro senza togliere contenuto**: stessa matematica e stessa fisica, dette in modo che un quattordicenne le segua.

## Che cosa leggere prima di scrivere

1. `GUIDA-CONTENUTI.md` (regole editoriali del sito).
2. Due capitoli già rivisti con questo metodo, come modello di stile: `src/content/teoria/tolc-s/logica.md` e `src/content/teoria/tolc-s/aritmetica-e-algebra.md` (com'erano: `git show fe4c250e0:<percorso>`).
3. Il tuo capitolo per intero, in italiano e in inglese.
4. **Schede svolte, esercizi e domande del tuo capitolo** (solo lettura): `src/content/svolti/<materia>/<capitolo>/`, `src/content/dafare/<materia>/<capitolo>/`, `src/content/domande/<materia>/<capitolo>/`. Servono per sapere quali parole, notazioni, procedimenti e dati della teoria vengono usati dagli esercizi.

## Come si controlla ogni paragrafo (metodo di Carmine)

- La prima frase dice **che cos'è** la cosa, non che cosa «permette», «descrive» o «riguarda».
- **Ogni termine tecnico è definito alla prima comparsa**, oppure ha un richiamo di una riga, anche se sembra comune (addendo, fattore, coefficiente, membro, omogeneo, grandezza, unità di misura, direttamente proporzionale, perpendicolare, bisettrice…). Vale anche per i simboli e le lettere greche: alla prima comparsa si dice come si leggono e che cosa indicano.
- **Ogni sigla ha il nome per esteso alla prima comparsa** (SI = Sistema Internazionale, MCD, mcm, N per newton…) e una riga su che cos'è.
- C'è un **esempio concreto** con numeri, o un oggetto che lo studente conosce, prima o subito dopo la regola.
- Il principio viene prima del conto, in forma affermativa.
- Ogni «quindi» e «perciò» segue da qualcosa di scritto. **I passaggi intermedi di un calcolo ci sono tutti**, uno per riga, e sotto o accanto è detta a parole l'operazione fatta.
- Una frase, una cosa. Più oggetti quasi uguali nella stessa frase vanno su righe diverse (elenco).
- Segnali di testo che non insegna, da riscrivere: «può/possono», «spesso», «in generale», «permette di»; frasi scritte solo per escludere un errore che il lettore non ha ancora; punto di vista da laboratorio o da norma tecnica («campione», «valore osservato», «condizioni fissate», «il modello adottato», «compatibile con»); verbi figurati; un argomento in più buttato in fondo al blocco.

## Come si trasforma

- Prima la situazione o l'esempio con i numeri, poi la regola con le lettere. Un enunciato generale con indici ($Q_1,\ldots,Q_n$) si riscrive a parole e con il minimo di lettere; la versione con i numeri viene prima.
- Definizione → a che cosa serve → caso concreto. L'esempio si chiude con la risposta, verificata sugli stessi numeri.
- Negli schemi e negli algoritmi la tabella o lo schema viene prima dei conti e ogni numero ha il suo posto dichiarato.
- **Le frasi aggiunte sono solo definizioni, motivi o calcoli.** Mai spiegazioni generiche, mai frasi di raccordo.
- Le **dimostrazioni** restano (stesso blocco), scritte con passi brevi che uno studente del primo anno segue; se un passo usa una proprietà, la proprietà è nominata.
- Le negazioni sono rare. Un errore tipico si segnala in un blocco `:::attenzione` con un controesempio numerico, non con una frase «non…» in mezzo al paragrafo.
- **Misura dell'intervento**: dove un blocco è già chiaro per un quattordicenne si lascia o si ritocca una frase; dove usa la voce da manuale universitario si riscrive. Non si aggiungono esempi dove ce n'è già uno adatto.

## Voce (regole «scrittura umana» di Carmine)

Italiano corretto da libro di testo: frasi complete con soggetto e verbo, brevi, lessico che un ragazzo di 14 anni conosce, deduzioni complete (premessa, connettivo esplicito, conclusione). **I due punti non sostituiscono un connettivo logico** (vanno bene per introdurre un elenco o un esempio). Niente personificazioni («la formula ci dice»), niente metafore, niente frasi a effetto, niente domande retoriche, niente lineette lunghe (—), niente «Immagina», «In sintesi», «Ricorda», «fondamentale», «cruciale», «non è X ma Y». **Esposizione di fatti, non consigli**: niente tono prescrittivo («devi», «bisogna sempre», «conviene»). Mai «la parentesi» per indicare un'espressione. Niente tono infantile e niente «tu»: forma impersonale («si moltiplica», «si ottiene»). Niente statistiche inventate: i dati degli esempi sono dati d'esercizio; i dati reali (densità dei materiali, costanti) devono essere veri.

Formule: frazioni **sempre in colonna** (`\dfrac` nel testo, `\frac` nelle formule in evidenza), anche negli esponenti; mai `a/b` dentro una formula. Virgola decimale `{,}` in italiano. Unità con `\,\mathrm{…}`. Graffa di sistema solo per condizioni da soddisfare insieme, mai per elencare.

## Vincoli tecnici (verificati da uno script)

- **Frontmatter identico** (titolo, sommario).
- **Titoli `##` identici e nello stesso ordine.**
- **Ancore `{#…}` identiche**, nello stesso ordine, sullo stesso tipo di blocco e **con lo stesso `titolo="…"`** (le pagine dei singoli riquadri, la ricerca e le schede svolte puntano lì).
- **Ogni contenuto resta nel blocco con ancora in cui stava**: le schede citano quelle ancore nel campo `teoria:`. Non si spostano regole da un blocco all'altro.
- **Nessun contenuto dell'originale va tolto**: regole, casi, eccezioni e precisazioni servono alle schede e alle domande. Si semplifica il modo di dirli.
- **I dati numerici degli esempi dell'originale restano gli stessi** (schede, domande e figure usano spesso gli stessi numeri). Se un esempio ha un dato sbagliato, lo si corregge e lo si segnala.
- **Righe delle figure** (`::grafico{…}`, `::struttura{…}`, `::venn{…}`, `::schema{…}`, `::figura{…}`) **copiate identiche**, tutte, senza aggiungerne e senza toglierne, nello stesso blocco in cui stavano. Il testo attorno deve descrivere ciò che la figura mostra (leggi gli attributi: funzioni, punti, etichette, titolo). **Nessuna immagine esterna, nessun link nuovo, nessun `<img>`.**
- Blocchi ammessi: `:::definizione`, `:::teorema` (o `::::teorema` con dentro `:::dimostrazione`), `:::proposizione`, `:::esempio{titolo="…"}`, `:::osservazione`, `:::attenzione`, `:::richiamo`. Niente `:::percorso`. Ogni blocco aperto va chiuso con lo stesso numero di due punti. Blocchi nuovi (esempi, attenzione) **senza ancora** e solo dove servono.
- Le righe di testo fra il frontmatter e il primo titolo `##`, se ci sono, si riscrivono in una o due frasi concrete (che cosa si impara nel capitolo, con un esempio); non si tolgono.
- **Lunghezza**: questi capitoli hanno già esempi e figure, quindi l'aumento atteso è fra **1,2 e 1,7 volte** l'originale. Oltre 2,0 lo script dà un avviso: in quel caso si tolgono ripetizioni ed esempi doppi aggiunti, mai contenuti o definizioni.

## Correttezza

Ogni affermazione deve essere vera e ogni conto giusto. **Ricalcola tutti i numeri** con Python o sympy prima di scriverli, anche quelli che copi dall'originale: se trovi un errore nell'originale, correggilo e segnalalo nel rapporto. Per la fisica: unità in ogni passaggio, cifre significative coerenti, versi dichiarati, dati reali veri. Se un punto dell'originale è dubbio e non riesci a verificarlo, tienilo com'è e scrivilo nel rapporto.

## Copertura degli esercizi

Se schede, esercizi o domande del capitolo usano un termine, una notazione o un procedimento che la teoria non spiega, aggiungilo nel blocco più vicino per argomento, in una-tre righe con un caso numerico, e segnalalo nel rapporto.

## Inglese

Traduzione **integrale** del nuovo testo italiano, senza riassumere e senza abbreviazioni per accorciare: stessa struttura, stessi blocchi nello stesso ordine, stesse ancore, stesse formule (punto decimale al posto di `{,}`), stessi elenchi e tabelle. Le chiavi restano in italiano (`titolo=`). Frontmatter, titoli `##`, titoli dei blocchi con ancora e righe delle figure si prendono **identici dal file inglese esistente**. **Stessa grafia del file inglese esistente e delle schede inglesi del capitolo** (in queste due materie è quasi sempre britannica: *centre*, *metre*, *colour*; controlla con una ricerca prima di scrivere). Termini tecnici inglesi come nelle schede e nelle domande inglesi del capitolo.

## Controllo obbligatorio prima di consegnare

```
python3 /home/claude/lavoro/controlla_capitolo.py <materia> <capitolo>
```

L'esito deve essere senza `ERRORE`. Gli `AVVISO` vanno letti uno per uno (quelli sulle sigle elencano anche simboli che non sono sigle). Rileggi poi l'intero capitolo italiano dall'inizio alla fine nei panni di un quattordicenne: a ogni termine tecnico chiediti «è stato definito prima?», a ogni frase «la capirei senza l'insegnante?».

## Rapporto

Scrivi `/home/claude/lavoro/rapporti/<materia>__<capitolo>.md` (in italiano, breve): parole prima e dopo; 5-8 punti su che cosa è cambiato; un esempio «Com'era / Com'è ora» con testo vero (un punto in cui lo studente si perdeva davvero); errori trovati nell'originale e corretti; termini o procedimenti degli esercizi che mancavano in teoria e che hai aggiunto; dubbi rimasti. La tua risposta finale deve essere di poche righe: esito del controllo e percorso del rapporto.
