# Funzioni implicite: primo giro

Riletti la teoria, le 5 schede svolte e le 12 tracce; derivate prime e seconde delle funzioni implicite, piani tangenti e sistema con lo jacobiano ricalcolati con sympy (nessun errore), figure ridisegnate.

## Modifiche fatte

- `teoria/analisi-2/funzioni-implicite.md`, figura dell'esempio *La circonferenza non è un grafico, ma lo è localmente* (italiano e inglese): senza la stessa scala sui due assi il ramo di circonferenza appariva schiacciato come un'ellisse, il punto $\left(\dfrac{3}{5}, \dfrac{4}{5}\right)$ non aveva stile e mancava la riga vuota prima della chiusura del blocco. Ora `uguale=1`, punto pieno, riga vuota. Figure.
- `svolti/.../3.md`, esercizio 2, figura (italiano e inglese): la legenda automatica mostrava l'intera formula di Cardano su due righe, mai introdotta nel testo e illeggibile al telefono; ora la legenda è $y = \varphi(x)$, coerente con la didascalia. Figure.

## Modifiche da fare

- Schede svolte: sono 5 invece di 10 e le tracce 12 invece di 14. Tipologie da aggiungere: (a) *Dini per sistemi*, che ha un blocco di teoria e una sola traccia ma nessun esercizio svolto; (b) studio di una curva implicita nel suo insieme (punti a tangente orizzontale e verticale, punti singolari, massimi e minimi della funzione implicita), oggi presente solo nella traccia 5; (c) derivate seconde $g_{xx}$, $g_{xy}$ della funzione implicita di due variabili.
- Teoria, osservazione *Il gradiente è ortogonale alle curve di livello*: dice che la proprietà "fonda il metodo dei moltiplicatori di Lagrange", ma nel capitolo sui massimi e minimi la dimostrazione del teorema di Lagrange usa Dini e Fermat, e l'ortogonalità ne dà solo la lettura geometrica. Proposta: "ne dà l'interpretazione geometrica".
- Teoria, *Derivata seconda della funzione implicita*: la formula con $F_y^3$ al denominatore è enunciata senza il calcolo; lo studente si chiede da dove esca il $2F_{xy}F_xF_y$. Proposta: una dimostrazione apribile di poche righe (derivazione di $-\dfrac{F_x}{F_y}$ con la regola della catena), oppure il rimando esplicito al metodo pratico dell'esempio seguente come via consigliata.
- Teoria, figura della dimostrazione del teorema di Dini: il rettangolo $R$ è disegnato, ma il segmento che lo studente deve immaginare (per ogni $x$ fissato, lo zero unico su un segmento verticale) non c'è. Proposta: aggiungere un segmento verticale tratteggiato a un'ascissa fissata, con il punto di intersezione.
