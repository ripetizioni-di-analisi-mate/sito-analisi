# Scrivere un argomento della materia "Logica per concorsi"

Repository: /home/claude/sito-analisi1 (sito Astro di teoria ed esercizi, in italiano).
Non usare git, non lanciare la build, non toccare file fuori dalle tre cartelle del tuo argomento. Altri autori scrivono in parallelo gli altri cinque argomenti della materia.

## Pubblico e tono
La materia è per adulti che preparano i **quiz di logica e i test attitudinali** dei concorsi pubblici (enti locali, ministeri, INPS, Agenzia delle Entrate, RIPAM), delle **Forze armate e di polizia** (Esercito, Carabinieri, Polizia, Guardia di Finanza) e dei **test di ammissione** non scientifici. Molti hanno lasciato la scuola da anni:
- si parte da zero, con frasi brevi e lessico comune; ogni termine tecnico si definisce prima di usarlo;
- ogni definizione e ogni regola è seguita subito da un esempio con frasi o numeri concreti (persone, uffici, turni, città, animali);
- niente dimostrazioni formali: al loro posto una riga che spiega *perché* la regola funziona (una tavola di verità, un diagramma di Venn, un controesempio);
- l'obiettivo è rispondere bene e in fretta ai quiz a risposta multipla: ogni argomento ha una sezione finale "Metodi rapidi per i quiz" (eliminazione delle opzioni, ricerca di un controesempio, schema da disegnare a margine).

## Prima di scrivere (obbligatorio)
1. Leggi per intero `GUIDA-CONTENUTI.md` nella radice del repository: è la norma di stile e di formato. Seguila alla lettera, con due eccezioni decise da Carmine: **niente blocco `:::percorso`** e **niente prosa tra i blocchi** (sotto un titolo `##` viene subito il primo blocco).
2. Leggi le regole di voce: `/root/.claude/skills/synced/91e36f28-5687-4a5c-ba2a-91e5fd176dde_d4cbc623-8d44-4740-8b1e-b4778a1d8e85/scrittura-umana-carmine/SKILL.md`. Ogni frase deve superare il controllo finale di quella pagina (connettivi espliciti, niente due punti al posto di un connettivo, nessuna personificazione, niente frasi a effetto, niente tono prescrittivo come "conviene", "è importante", "ricorda").
3. La materia gemella "Matematica per concorsi" è già online e fa da **modello di formato**: leggi per intero `src/content/teoria/matematica-concorsi/proporzioni-e-percentuali.md`, le 8 schede in `src/content/svolti/matematica-concorsi/proporzioni-e-percentuali/` e almeno 4 tracce in `src/content/dafare/matematica-concorsi/proporzioni-e-percentuali/`. Imita struttura, lunghezza, densità, uso di grassetto e corsivo, formato dei quiz e delle spiegazioni. Guarda anche `src/content/teoria/matematica-concorsi/probabilita.md` per l'uso di `::venn` e delle tabelle.
4. Leggi `istruzioni-agenti/brief-figure.md` (sezioni "Strumenti disponibili" e "Controllo obbligatorio") e l'intestazione di `src/plugins/venn.mjs` (sintassi di `::venn`).
5. Nel Precorso esiste già `src/content/teoria/precorso/logica.md` (logica per l'università): non copiarlo; il pubblico qui è diverso e il taglio è quello dei quiz.

## Cosa produrre (materia = `logica-concorsi`, argomento = il tuo slug)
- `src/content/teoria/logica-concorsi/<slug>.md`: frontmatter `titolo` (quello indicato sotto) e `sommario` (una frase). Da 6 a 9 sezioni `##`, circa 2000–3000 parole; l'ultima sezione è "Metodi rapidi per i quiz".
- `src/content/svolti/logica-concorsi/<slug>/1.md … 8.md`: 8 schede per tipologia, ciascuna con **3 quiz svolti** `## Esercizio k` in difficoltà crescente. `gratis: true` per 1 e 2; niente campo `gratis` per 3–8. Le schede 1–2 sono l'anteprima gratuita: tipologie di base e rappresentative. Frontmatter come nel modello: `titolo`, eventuale `gratis`, `teoria: [ancore]`, `parole: [...]`.
- `src/content/dafare/logica-concorsi/<slug>/1.md … 14.md`: 14 quiz, ciascuno con `:::soluzione` contenente solo `Risposta X: <valore o frase>.` come nel modello.
- Il campo `teoria:` di svolti e tracce cita SOLO ancore (`#id`) che esistono davvero nel tuo file di teoria.

## Formato dei quiz (svolti e tracce)
- Testo nello stile dei bandi: "Se è vera l'affermazione …, quale delle seguenti è necessariamente vera?", "Qual è la negazione di …?", "Quale conclusione segue dalle premesse?", "Chi …?", "Che giorno della settimana …?". Poi l'elenco `- A) …` … `- E) …`, sempre **cinque opzioni**.
- Le opzioni sbagliate nascono da **errori tipici** (negare "tutti" con "nessuno", scambiare condizione necessaria e sufficiente, invertire l'implicazione, affermare il conseguente, contare due volte gli elementi dell'intersezione, sbagliare di un giorno nei calendari), più una o due plausibili. Nessuna opzione assurda.
- **Una sola opzione corretta** e nessuna opzione equivalente a quella corretta detta con altre parole (per esempio "Se non B allora non A" e "Non A oppure B" dicono la stessa cosa di "Se A allora B": non possono comparire come opzione sbagliata quando una di esse è la risposta).
- **Lettere corrette distribuite**: nell'argomento ogni lettera A, B, C, D, E è corretta da 3 a 7 volte sui 24 svolti e da 2 a 4 volte sulle 14 tracce. Controlla il conteggio prima di consegnare.
- Negli svolti: subito sotto le opzioni lo schema del ragionamento (tavola di verità o tabella in Markdown, diagramma `::venn`, griglia di deduzione, oppure il calcolo in formule display). Sotto, `<div class="spiegazione">` (righe vuote prima e dopo il contenuto) con la spiegazione a parole: premessa, connettivo, conclusione; quale regola si applica, in **grassetto** il suo nome; dove serve, perché un'opzione sbagliata attira chi commette un certo errore. L'ultima frase è sempre `La risposta corretta è la **X**.`
- Ogni scheda ha almeno un quiz ambientato in un contesto concreto (uffici, turni, colleghi, viaggi, negozi, regolamenti).

## Blocchi della teoria
- `:::definizione`, `:::teorema` (anche regole e proprietà, con la riga che spiega perché valgono), `::::teorema` con `:::dimostrazione` solo se la giustificazione è di due o tre righe elementari.
- `:::esempio`, `:::osservazione`, `:::attenzione` (rare negazioni, con un controesempio; utili per gli errori tipici dei candidati).
- Dopo ogni definizione o regola: a che cosa serve, con un piccolo esempio nel blocco stesso o in un esempio subito sotto.
- Elenchi puntati ammessi dentro i blocchi per casi paralleli, con frasi complete. Tabelle Markdown ammesse (tavole di verità, griglie di deduzione).

## Notazioni comuni a tutta la materia
- Proposizioni indicate con lettere maiuscole $A$, $B$, $C$ (oppure $p$, $q$ solo nel capitolo sui connettivi, se serve distinguerle dagli insiemi: scegli una convenzione e tienila). Valori di verità **V** e **F** nelle tavole.
- Connettivi: si usano prima le parole ("non", "e", "o", "se … allora", "se e solo se"); i simboli $\lnot$, $\land$, $\lor$, $\Rightarrow$, $\Leftrightarrow$ si introducono nel capitolo sui connettivi e negli altri capitoli compaiono solo nelle tabelle. La "o" è *inclusiva* salvo dove il testo dice "o … o …, ma non entrambi".
- Insiemi: $A \cup B$, $A \cap B$, $A \setminus B$, complementare $\overline{A}$, numero di elementi $|A|$; diagrammi con `::venn`.
- Numeri: virgola decimale `{,}`; frazioni sempre in colonna (`\dfrac` nel testo); orari scritti "le 15:40" in testo normale; angoli in gradi.
- Calendario: dichiarare nel testo dei quiz l'anno o se è bisestile quando conta; giorni della settimana in minuscolo.
- KaTeX: niente pacchetti esterni; ammessi `cases`, `aligned`, `array`, `\overline`, `\operatorname`, `\text`.
- Rimandi agli altri argomenti con il loro nome ("si rimanda all'argomento sulle condizioni necessarie e sufficienti"), mai alla struttura della pagina. Mai "la parentesi": si nomina l'espressione.

## Programma (rispetta i confini; ciò che appartiene ad altri argomenti si richiama in breve)
1. `insiemi-e-venn`: "Insiemi e diagrammi di Venn". Insieme, elemento, appartenenza; rappresentazione per elencazione e per proprietà; sottoinsieme, insieme vuoto, insieme universo; unione, intersezione, differenza, complementare, con un diagramma `::venn` per ciascuna; relazioni tra categorie (inclusione, intersezione, disgiunzione: "medici, uomini, italiani"; quiz in cui si sceglie il diagramma che descrive tre categorie, con le opzioni descritte a parole o con diagrammi `::venn` numerati nel testo); problemi di conteggio con due insiemi ($|A \cup B| = |A| + |B| - |A \cap B|$, "quanti non praticano nessuno dei due sport") e con tre insiemi (riempimento del diagramma dal centro verso l'esterno); metodi rapidi.
2. `connettivi-e-negazioni`: "Connettivi, negazioni e implicazioni". Proposizione e valore di verità; negazione, congiunzione, disgiunzione inclusiva ed esclusiva, implicazione, doppia implicazione, con le tavole di verità; leggi di De Morgan ("non (A e B)" equivale a "non A o non B"); negazione dell'implicazione ("A e non B"); implicazione inversa, contraria e contronominale, e quale delle tre è equivalente; "se A allora B" equivale a "non A oppure B"; traduzione delle frasi italiane ("solo se", "a meno che", "né … né", "ma"); tautologie e contraddizioni con le tavole di verità; quiz "quale frase è equivalente a …". La negazione delle frasi con "tutti", "alcuni", "nessuno" appartiene all'argomento sui sillogismi e qui si richiama soltanto.
3. `condizioni-necessarie-e-sufficienti`: "Condizioni necessarie e sufficienti". Condizione sufficiente ("se A allora B", "basta che", "è sufficiente che"), condizione necessaria ("solo se", "occorre che", "è necessario che"), condizione necessaria e sufficiente ("se e solo se"); come si traduce ogni formulazione in un'implicazione con il verso giusto; deduzioni valide (modus ponens, modus tollens) e non valide (affermazione del conseguente, negazione dell'antecedente) con un controesempio; catene di implicazioni (proprietà transitiva); regolamenti e bandi ("può partecipare solo chi …"); quiz "Se è vera l'affermazione …, quale delle seguenti è necessariamente vera / non può essere vera?"; metodi rapidi.
4. `sillogismi`: "Sillogismi e quantificatori". Quantificatore universale ("tutti", "ogni", "nessuno") ed esistenziale ("alcuni", "almeno uno", "esiste"); le quattro forme ("Tutti gli A sono B", "Nessun A è B", "Alcuni A sono B", "Alcuni A non sono B"), ciascuna con il suo diagramma `::venn`; negazione delle frasi quantificate (la negazione di "tutti sono" è "almeno uno non è"); proposizioni contraddittorie, contrarie e subcontrarie (quadrato logico, in tabella); sillogismo: premesse e conclusione, sillogismi validi e non validi, verifica con i diagrammi di Venn e ricerca di un controesempio; "alcuni" nel senso logico di "almeno uno, forse tutti"; quiz "quale conclusione segue necessariamente dalle premesse"; metodi rapidi.
5. `ragionamento-numerico`: "Ragionamento numerico: orologi, calendari, ordinamenti". Orologi: angolo tra le lancette ($30°$ per ora e $0{,}5°$ per minuto per la lancetta delle ore, $6°$ per minuto per quella dei minuti), orologi che vanno avanti o indietro, fusi orari e durate a cavallo della mezzanotte; calendari: giorni dei mesi, anni bisestili (regola completa), giorno della settimana dopo $n$ giorni con il resto della divisione per $7$, ricorrenze; ordinamenti e confronti (chi è il più alto, posizioni in una fila o in una classifica, "terzo da sinistra e quinto da destra"), età relative; principio dei cassetti e caso peggiore ("quanti calzini estrarre al buio per averne due dello stesso colore"); parentele; metodi rapidi. Problemi di velocità, lavoro e miscele appartengono a "Matematica per concorsi" e qui non compaiono.
6. `problemi-di-deduzione`: "Problemi di deduzione e tabelle". Griglie di deduzione a doppia entrata (tre o quattro persone, professioni, città, colori): come si costruisce la tabella, caselle escluse e caselle certe, propagazione dei vincoli; disposizioni in fila e attorno a un tavolo; problemi di turni e calendari di lavoro con vincoli; veri e bugiardi (chi dice sempre il vero, chi mente sempre, "esattamente uno mente"): metodo per ipotesi e contraddizione; affermazioni contraddittorie ("almeno una delle due è falsa"); chi ha fatto cosa, con indizi; metodi rapidi (partire dal vincolo più forte, provare le opzioni una per una). Gli argomenti su connettivi e sillogismi si richiamano per nome.

## Figure
- Diagrammi di Venn con `::venn` (nella teoria di `insiemi-e-venn` e `sillogismi` almeno uno per ogni operazione o forma; negli svolti dove aiuta). Didascalie con formule fra dollari.
- Per gli orologi si può usare `::grafico` con `assi=0 uguale=1`, `curve` per il quadrante e `segmenti` per le lancette (vedi `brief-figure.md`); i numeri della figura coincidono con quelli del testo.
- Ogni figura `::grafico` va disegnata con `node strumenti/anteprima_figure.mjs <png> <file…>` dalla radice del repository (PNG nella tua cartella di lavoro) e guardata con Read. I diagrammi `::venn` si controllano rileggendo le zone colorate e gli elementi rispetto al testo.

## Qualità (l'errore più grave è una risposta sbagliata o due risposte corrette)
- Dati scelti in modo che il ragionamento si faccia a mano in meno di due minuti, come nei concorsi.
- Verifica OGNI quiz da capo, compresi quelli delle tracce, con Python da una cartella tua in `/tmp/lavoro-lc/<slug>/`, non dal repository:
  - connettivi e condizioni: tavole di verità con `itertools.product`, controllando per ogni opzione se è equivalente o conseguenza logica;
  - sillogismi: enumerazione di tutti i modelli (quali zone del diagramma di Venn sono vuote o piene) e controllo che la conclusione valga in *ogni* modello delle premesse, e che le opzioni sbagliate abbiano un controesempio;
  - insiemi: equazioni sulle zone del diagramma con sympy;
  - deduzione e veri/bugiardi: enumerazione di tutte le assegnazioni con `itertools.permutations`/`product`, controllando che la soluzione sia **unica**;
  - calendari e orologi: `datetime` e calcolo diretto.
- Ipotesi sempre esplicite (chi dice sempre il vero o mente sempre, "o" inclusiva o esclusiva, anno bisestile, orologio che avanza in modo costante). Un quesito che ammette due letture con risposte diverse va riscritto. Quesiti originali, non copiati da banche dati ufficiali o da libri.
- Frontmatter YAML valido: un elemento di lista che contiene `{`, `}`, `:` o `[` va fra virgolette. Controllo: `python3 strumenti/yamlcheck.py <file…>`.

## Consegna
Rapporto breve in italiano: file creati, parole della teoria, numero di figure, conteggio delle lettere corrette (svolti e tracce); conferma che (a) tutte le ancore citate esistono, (b) ogni quiz è stato verificato con Python e ha una sola risposta corretta, (c) lo script delle figure dà 0 problemi e hai guardato il PNG (se ci sono `::grafico`), (d) yamlcheck dà 0 errori.
