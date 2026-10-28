# Guida per scrivere un argomento del sito

Il modello da seguire è `src/content/teoria/analisi-1/limiti.md` con i relativi esercizi in
`src/content/svolti/analisi-1/limiti/` e `src/content/dafare/analisi-1/limiti/`. Leggerli prima di scrivere.

## File da produrre per l'argomento `<slug>` della materia `<materia>`

- `src/content/teoria/<materia>/<slug>.md` — frontmatter `titolo`, `sommario` (una frase).
- `src/content/svolti/<materia>/<slug>/<n>.md` con n = 1…10 — frontmatter `titolo`, `gratis` (true per 1-3, false oltre), `teoria` (elenco di ancore della teoria usate), `parole` (parole chiave per la ricerca).
- `src/content/dafare/<materia>/<slug>/<n>.md` con n = 1…14 — frontmatter `titolo`, `teoria`, `parole`; corpo = traccia, poi blocco `:::soluzione … :::` con la sola risposta finale (una formula o una o due frasi).

## Stile della teoria (serie "Manuali")

- Tutto il contenuto sta dentro i blocchi. Tra un blocco e l'altro non c'è prosa; al massimo una o due righe sotto un titolo di sezione `##`, che fanno da ponte con la sezione precedente.
- Blocchi disponibili (direttive remark):
  - `:::definizione{#ancora titolo="Nome del concetto"}`
  - `:::teorema{#ancora titolo="Nome del teorema"}` (anche per proposizioni e criteri)
  - `:::dimostrazione` (apribile; va DENTRO il blocco teorema, e allora il teorema usa quattro due punti: `::::teorema{…}` … `:::dimostrazione` … `:::` … `::::`)
  - `:::esempio{titolo="…"}` (titolo facoltativo)
  - `:::osservazione`
  - `:::attenzione` (le rare negazioni: un avviso con un controesempio concreto)
  - `:::richiamo{titolo="Nome del teorema"}` (solo ipotesi e tesi di un teorema visto prima, quando una dimostrazione lo usa)
  - `:::percorso` (apertura dell'argomento, subito dopo il frontmatter: vedi "Chiarezza e percorso")
  - `::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.5 ymax=1.3 punti="0,1,vuoto" asintoti="x=0;y=1" titolo="…"}` (direttiva a riga singola; f in sintassi JS/Math: sin, cos, exp, log, sqrt, abs, ^ per le potenze)
- L'etichetta del blocco è il nome del concetto, non "Definizione"/"Teorema": il tipo lo dà il colore.
- Ogni blocco è compatto: enunciato con ipotesi esplicite, poi una o due righe su a cosa serve e come si usa, con un piccolo esempio nel blocco stesso o in un blocco esempio subito sotto. I casi vanno in elenco puntato; le condizioni da soddisfare insieme in sistema (`\begin{cases}`), mai elencate a parole.
- Le ancore (`#ancora`) sono in kebab-case e stabili: gli esercizi le citano nel campo `teoria`.
- Dimostrazioni dove servono (teoremi centrali dell'esame); per le altre, una riga che dice da dove segue o dove si rimanda.
- Rimandi espliciti ad altri argomenti ("si rimanda al capitolo sulle derivate") sì; riferimenti alla struttura della pagina ("più avanti in questa pagina", "vedi sopra") no.
- Sezioni `##` per orientarsi: da 6 a 10 per argomento.

## Chiarezza e percorso (lo studente deve capire leggendo)

Le correzioni di chiarezza sono puntuali: una o due frasi nel punto in cui si inciampa, scritte come le direbbe un docente a lezione, mai paragrafi aggiunti. Esempio approvato da Carmine: "Sia $P_0$ un punto con $x^2 + y^2 < 1$. La sua distanza dall'origine è $\|P_0\| < 1$, quindi la sua distanza dalla circonferenza è $1 - \|P_0\|$. Il disco di centro $P_0$ e raggio $r = 1 - \|P_0\|$ è perciò contenuto in $A$, e $P_0$ è interno." (prima: "è interno, perché il disco $B(P_0, r)$ con $r = 1 - \|P_0\|$ è contenuto in $A$"). Una prima revisione estesa di Limiti è stata scartata perché le frasi aggiunte erano poco naturali e appesantivano il testo.

Il lettore è uno studente al primo anno che incontra l'argomento per la prima volta. Il rigore resta intero (definizioni e teoremi con tutte le ipotesi); cambia il modo di arrivarci. Niente banalità: si spiega ciò che serve per capire, non l'ovvio.

**Dentro l'argomento**
- Prima l'idea, poi la formula. Prima di una definizione o di un conto, una o due frasi dicono a parole che cosa si sta cercando di esprimere e perché; poi arriva la scrittura formale.
- Ogni simbolo nuovo viene detto a parole la prima volta che compare: $\|P_0\|$ è "la distanza di $P_0$ dall'origine", $\delta$ è "quanto ci si può allontanare da $x_0$". Una formula che compare all'improvviso ("con $r = 1 - \|P_0\|$") va motivata: da dove viene quel valore e perché funziona.
- Dopo una definizione formale, la sua lettura in parole semplici ("in altre parole: …"), quando la definizione non è già trasparente.
- Una figura quando il ragionamento è geometrico (intorni, distanze, aree, grafici): la figura mostra le grandezze che il testo nomina.
- Un passaggio per frase. Se un passaggio richiede un conto, il conto si scrive. Niente salti che uno studente non saprebbe colmare da solo.
- Esempi scelti per far vedere l'idea, prima quelli semplici; il caso patologico o il controesempio viene dopo.
- Le dimostrazioni dicono all'inizio, in una frase, qual è l'idea ("si costruisce un intorno che…"), poi la eseguono.

**Tra gli argomenti**
- Ogni argomento si apre con un blocco `:::percorso` di 3-6 righe: da quale argomento precedente si parte (che cosa si usa), che cosa si fa qui, a che cosa servirà dopo (gli argomenti successivi che lo useranno, nominati). Il collegamento deve essere vero e concreto: si scrive solo ciò che la mappa della materia (`revisioni/percorso/<materia>.md`) giustifica.
- Dentro l'argomento, la riga sotto un titolo `##` può fare da ponte con la sezione precedente ("Le definizioni di limite sono scomode per calcolare: i teoremi che seguono permettono di farlo senza tornare a $\varepsilon$ e $\delta$"), quando il passaggio da una sezione all'altra non è ovvio.
- Quando un risultato tornerà utile in un argomento successivo, una frase lo dice nel blocco stesso ("questo limite servirà per calcolare la derivata di $\sin x$"). Senza forzare: solo dove il legame c'è.
- Quando si usa un risultato di un argomento precedente, lo si nomina e, se serve, si mette un `:::richiamo`.

## Esercizi svolti (schede per tipologia)

- Ogni file in svolti/ è una SCHEDA dedicata a una tipologia, non un singolo esercizio. Il `titolo` del frontmatter è il nome della tipologia al plurale ("Equazioni trigonometriche di secondo grado", "Limiti con razionalizzazione"), mai il testo di un esercizio.
- La scheda contiene da 2 a 4 esercizi dello stesso tipo, in ordine di difficoltà crescente. Ogni esercizio inizia con un titolo `## Esercizio k` (k = 1, 2, …) seguito dalla traccia ("Calcolare …", "Studiare …"), dal calcolo in formule display, un passaggio per riga o per blocco, e in fondo dal risultato.
- Sotto il calcolo di ogni esercizio, dentro `<div class="spiegazione">` (con righe vuote prima e dopo il contenuto), la spiegazione a parole, a tutta larghezza: ogni passaggio spiegato con premessa, connettivo e conclusione.
- Passaggi espliciti: lo studente deve capire anche solo leggendo. Niente "si vede che", "è facile verificare".
- Catene di uguaglianze lunghe spezzate con `\begin{aligned} … &= … \\[6pt] &= … \end{aligned}`, una uguaglianza per riga, perché il sito si legge da telefono.
- Esercizi originali: non copiati da libri o siti. Difficoltà crescente, tipologie diverse che coprono l'argomento; gli studi di funzione con tutti i passaggi (dominio, simmetrie, segno, limiti, asintoti, continuità, derivabilità, monotonia, concavità, grafico).

## Lingua e matematica

- Italiano matematico da manuale universitario. Ogni deduzione ha premessa, connettivo esplicito (quindi, poiché, allora, perciò, dato che) e conclusione; i due punti non sostituiscono mai un connettivo.
- Verbi tecnici: un'ipotesi è soddisfatta/verificata, un teorema si applica, una condizione è necessaria/sufficiente, una proprietà vale. Nessuna personificazione (ipotesi che cadono, teoremi che salvano, funzioni che si comportano).
- Vietati: aperture di riempimento ("Immagina…", "Parliamo di…"), chiusure-morale ("In sintesi", "Ricorda"), costruzioni "non X ma Y", parole gonfie (fondamentale, cruciale, essenziale), domande retoriche, lineette lunghe (—), virgolette ironiche, frasi a effetto, tono prescrittivo ("si fa così, non così"), etichette di difficoltà (facile, difficile), statistiche inventate.
- Frazioni sempre in colonna: `\frac` in display, `\dfrac` nel testo. Mai `3/5`.
- Nominare le espressioni, non dire "la parentesi".
- Frasi di lunghezza variabile; ogni frase dice qualcosa di nuovo.

## Grassetto e corsivo (per rendere la lettura scorrevole)

- **Grassetto** (`**…**`): il termine che si sta definendo, nel punto in cui viene definito; il nome di un teorema, di un criterio o di un metodo quando la frase lo applica; la conclusione di un ragionamento o di un esercizio detta a parole ("la serie **converge**", "il sistema **non ha soluzioni**"). Al massimo due o tre grassetti per blocco o per spiegazione: servono a far trovare all'occhio i punti di appoggio scorrendo la pagina.
- *Corsivo* (`*…*`): la parola su cui cade l'accento logico della frase (*necessaria*, *sufficiente*, *ogni*, *almeno uno*, *solo se*, *non*), un termine citato come parola o un'espressione in un'altra lingua, il nome di una tipologia di esercizio quando la si richiama nel testo.
- Mai dentro le formule `$…$`, mai attorno a una formula, mai nei titoli `##`, nel frontmatter o negli attributi delle direttive. Mai intere frasi in grassetto.

## Controllo prima di consegnare

Rileggere ogni frase: un docente la direbbe così a lezione? c'è un verbo figurato? un passaggio logico affidato ai due punti? uno studente che legge solo quella frase capisce cosa si afferma e perché? Ricalcolare ogni esercizio da capo, compresi i risultati finali delle tracce.
