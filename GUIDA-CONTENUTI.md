# Guida per scrivere un argomento del sito

Il modello da seguire è `src/content/teoria/analisi-1/limiti.md` con i relativi esercizi in
`src/content/svolti/analisi-1/limiti/` e `src/content/dafare/analisi-1/limiti/`. Leggerli prima di scrivere.

## File da produrre per l'argomento `<slug>` della materia `<materia>`

- `src/content/teoria/<materia>/<slug>.md` — frontmatter `titolo`, `sommario` (una frase).
- `src/content/svolti/<materia>/<slug>/<n>.md` con n = 1…10 — frontmatter `titolo`, `gratis` (true per 1-3, false oltre), `teoria` (elenco di ancore della teoria usate), `parole` (parole chiave per la ricerca).
- `src/content/dafare/<materia>/<slug>/<n>.md` con n = 1…14 — frontmatter `titolo`, `teoria`, `parole`; corpo = traccia, poi blocco `:::soluzione … :::` con la sola risposta finale (una formula o una o due frasi).

## Stile della teoria (serie "Manuali")

- Tutto il contenuto sta dentro i blocchi. Tra un blocco e l'altro non c'è prosa; al massimo una riga sotto un titolo di sezione `##`.
- Blocchi disponibili (direttive remark):
  - `:::definizione{#ancora titolo="Nome del concetto"}`
  - `:::teorema{#ancora titolo="Nome del teorema"}` (anche per proposizioni e criteri)
  - `:::dimostrazione` (apribile; va DENTRO il blocco teorema, e allora il teorema usa quattro due punti: `::::teorema{…}` … `:::dimostrazione` … `:::` … `::::`)
  - `:::esempio{titolo="…"}` (titolo facoltativo)
  - `:::osservazione`
  - `:::attenzione` (le rare negazioni: un avviso con un controesempio concreto)
  - `:::richiamo{titolo="Nome del teorema"}` (solo ipotesi e tesi di un teorema visto prima, quando una dimostrazione lo usa)
  - `::grafico{f="sin(x)/x" xmin=-12 xmax=12 ymin=-0.5 ymax=1.3 punti="0,1,vuoto" asintoti="x=0;y=1" titolo="…"}` (direttiva a riga singola; f in sintassi JS/Math: sin, cos, exp, log, sqrt, abs, ^ per le potenze)
- L'etichetta del blocco è il nome del concetto, non "Definizione"/"Teorema": il tipo lo dà il colore.
- Ogni blocco è compatto: enunciato con ipotesi esplicite, poi una o due righe su a cosa serve e come si usa, con un piccolo esempio nel blocco stesso o in un blocco esempio subito sotto. I casi vanno in elenco puntato; le condizioni da soddisfare insieme in sistema (`\begin{cases}`), mai elencate a parole.
- Le ancore (`#ancora`) sono in kebab-case e stabili: gli esercizi le citano nel campo `teoria`.
- Dimostrazioni dove servono (teoremi centrali dell'esame); per le altre, una riga che dice da dove segue o dove si rimanda.
- Rimandi espliciti ad altri argomenti ("si rimanda al capitolo sulle derivate") sì; riferimenti alla struttura della pagina ("più avanti in questa pagina", "vedi sopra") no.
- Sezioni `##` per orientarsi: da 6 a 10 per argomento.

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
