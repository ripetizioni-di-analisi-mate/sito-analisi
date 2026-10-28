# Serie di potenze e serie di Taylor: primo giro

Riletti la teoria, le 8 schede svolte e le 14 tracce; raggi, comportamenti agli estremi, sviluppi e somme ricalcolati con sympy (nessun errore matematico trovato).

## Modifiche fatte

- `teoria/analisi-2/serie-di-potenze.md`, riferimenti alla struttura della pagina (vietati dalla guida), sostituiti con il nome del risultato citato o tolti. Editoriale, 8 punti:
  - esempio *La serie geometrica come serie di potenze*: "Il teorema seguente" → "Il **teorema del raggio di convergenza**";
  - *Convergenza totale sui compatti interni*: "le proprietà della somma enunciate sotto" → "le proprietà della somma";
  - *Continuità della somma*: "per il teorema richiamato sotto" → "per il teorema di continuità della somma del capitolo sulle successioni e serie di funzioni";
  - *Integrazione termine a termine*: "come mostrano gli esempi della sezione sugli sviluppi" → "come gli sviluppi di $\ln(1 + x)$ e di $\arctan x$";
  - *Serie di Taylor e di MacLaurin*: "è la questione trattata nei blocchi seguenti" → "va verificato caso per caso, per esempio con il criterio di sviluppabilità";
  - *Funzione analitica*: "gli sviluppi della sezione seguente" → "gli sviluppi notevoli";
  - *Criterio di sviluppabilità*: "i tre sviluppi della sezione seguente" → "gli sviluppi notevoli di $e^x$, $\sin x$ e $\cos x$";
  - *Sviluppi notevoli*: tolto "come mostrato nella sezione seguente".
- `svolti/analisi-2/serie-di-potenze/4.md`, esercizio 2: "per $|t| < 1$ il raggio è $1$" (frase che mescola condizione e raggio) → "il suo raggio è $1$"; "Nel nostro caso" → "In questo esercizio", "diviso $4$" → "diviso per $4$". Lingua.
- Teoria, figura della funzione $e^{-1/x^2}$ (italiano e inglese): la legenda automatica scriveva l'esponente come frazione impilata $e^{\frac{-1}{x^2}}$, illeggibile; ora la legenda è $y = e^{-1/x^2}$. Figure.
- `svolti/.../7.md`, esercizio 2, figura (italiano e inglese): la legenda automatica mostrava le formule chiuse $\dfrac{1 - \left(-\frac{x-1}{3}\right)^{4}}{x + 2}$ e simili, mai introdotte nel testo e su due righe al telefono; tolta la legenda, poiché la didascalia descrive già le tre curve (continua, tratteggiata, rossa). Figure.

## Modifiche da fare

- Schede 1-2: nessun esercizio svolto mostra un caso in cui il criterio del rapporto sui coefficienti *non* si applica perché il limite non esiste (lo fa solo la traccia 4, con $5^{\,n + (-1)^n}$). Lo studente che trova il rapporto oscillante non sa cosa fare. Proposta: aggiungere alla scheda 2 un esercizio di questo tipo, che mostri il passaggio al criterio della radice.
- Scheda 8 (somme di serie numeriche): tutte le somme usano sviluppi noti o la sola derivazione. Mancano le tipologie d'esame con integrazione termine a termine o con due derivazioni, per esempio $\sum \dfrac{1}{n(n+1)2^n}$, $\sum \dfrac{n^2}{3^n}$ o $\sum \dfrac{x^n}{n+1}$. Proposta: un esercizio 5 con integrazione termine a termine.
- Manca la tipologia "serie riconducibile a una serie di potenze con un cambio di variabile non lineare", frequente all'esame (per esempio $\sum \dfrac{1}{n}\left(\dfrac{x - 1}{x + 1}\right)^n$ oppure $\sum \dfrac{e^{nx}}{n^2}$), in cui l'insieme di convergenza in $t$ va trasformato in un insieme in $x$ risolvendo disequazioni. Proposta: una scheda nuova o un esercizio in fondo alla scheda 4.
- Teoria, esempio *Serie binomiale con esponente un mezzo*: i coefficienti sono calcolati solo fino al secondo ("e così via"), mentre lo sviluppo scritto arriva a $\dfrac{x^3}{16}$; lo studente si chiede da dove esca il $16$. Proposta: aggiungere il calcolo di $\dbinom{1/2}{3} = \dfrac{1}{16}$.
- Teoria, figura della serie geometrica: la legenda automatica mostra $y = \dfrac{1 - x^7}{1 - x}$ per la somma parziale fino a $x^6$, formula non spiegata nel blocco. Proposta: aggiungere mezza riga sulla formula della somma parziale geometrica, oppure una legenda esplicita $y = s_2(x)$, $y = s_6(x)$.
