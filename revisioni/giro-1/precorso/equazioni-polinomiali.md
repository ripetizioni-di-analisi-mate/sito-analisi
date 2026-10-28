# Equazioni e disequazioni polinomiali e fratte: primo giro dello studente puntiglioso

## Modifiche fatte

- `teoria/precorso/equazioni-polinomiali.md`, blocco *Disequazione di primo grado*: mancava l'ipotesi $a \neq 0$, senza la quale la frase "le soluzioni formano una semiretta" è falsa ($0 \cdot x + 1 > 0$ ha per soluzioni tutti i reali). Ora: "con $a \neq 0$". Corretto anche in `content-en`. (matematica)
- `teoria/precorso/equazioni-polinomiali.md`, blocco *Somma e prodotto delle radici*: la scomposizione $ax^2 + bx + c = a\,(x - x_1)(x - x_2)$ era affermata senza dire da dove segue. Ora la spiegazione aggiunge che si verifica sviluppando $a\,(x - x_1)(x - x_2) = ax^2 - a\,(x_1 + x_2)\,x + a\,x_1 x_2$ e sostituendo somma e prodotto. (didattica)
- `teoria/precorso/equazioni-polinomiali.md`, grafico nel blocco *Segno del trinomio di secondo grado*: la didascalia era in testo semplice ("y = x² − 2x − 3", "x < −1"), diversa da tutte le altre, e le radici non erano segnate. Ora la didascalia usa le formule e i punti $-1$ e $3$ sono segnati sull'asse. (figure)
- `svolti/precorso/equazioni-polinomiali/4.md`, esercizio 2: "zeri … $1$, con molteplicità due" usava un termine mai definito nel sito. Ora: "$1$, che compare due volte per il fattore $(x - 1)^2$". Corretto anche in `content-en`. (didattica)
- `svolti/precorso/equazioni-polinomiali/3.md`, esercizio 2: l'etichetta "x₀" copriva la parabola accanto al punto di tangenza. Ora è sotto l'asse $x$, in corrispondenza di $\frac{1}{2}$. (figure)

Tutti i risultati di teoria, schede e tracce sono stati ricalcolati con sympy e sono corretti.

## Modifiche da fare

- Teoria e svolti: il titolo dell'argomento promette le equazioni "fratte", ma il sito tratta solo le *disequazioni* fratte. Lo studente non trova un'equazione con l'incognita al denominatore, con le condizioni di esistenza e lo scarto delle soluzioni che annullano il denominatore (per esempio $\frac{x}{x - 1} = \frac{1}{x - 1}$, che ha la soluzione apparente $x = 1$). Proposta: un blocco *Equazioni fratte* nella sezione delle disequazioni fratte e una scheda svolta con tre esercizi, di cui uno con soluzione da scartare.
- Teoria, blocco *Risoluzione per fattorizzazione*: "Un polinomio di grado $n$ ha al più $n$ radici reali" è affermato senza una riga di giustificazione. Proposta: aggiungere che segue dal teorema di Ruffini, perché ogni radice produce un fattore di primo grado e i gradi dei fattori si sommano.
- Svolti, scheda 4 o 5: in nessuna tabella dei segni compare un fattore di secondo grado con $\Delta < 0$ (sempre positivo), caso frequentissimo negli esercizi d'esame (per esempio $\frac{x^2 + 1}{x - 2} > 0$ o $(x^2 + x + 1)(x - 3) \leq 0$). Lo studente non sa come compilarne la riga. Proposta: un quarto esercizio nella scheda 4 con un fattore di questo tipo.
- Svolti, scheda 6 (*Sistemi di disequazioni*): la spiegazione dice che l'intersezione "si legge sulla retta reale", ma la retta non è disegnata. Proposta: uno schema grafico delle soluzioni delle singole disequazioni su rette parallele (il classico schema a linee continue e tratteggiate) almeno per l'esercizio 3, se il plugin `::grafico` può disegnarlo con `segmenti` e `punti`.
- Teoria: manca la definizione di *molteplicità* di una radice, usata implicitamente nei grafici ("soluzione doppia", "soluzione semplice") e nelle tabelle dei segni. Stessa proposta fatta per l'argomento dei polinomi: una definizione breve con l'osservazione sul grafico che attraversa o tocca l'asse.
