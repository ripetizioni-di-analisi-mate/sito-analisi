# Verifica · Matematica 2° anno · Equazioni e sistemi non lineari

Esito del controllo (`strumenti/controlla_capitolo.py`): **a posto**, nessun ERRORE, nessun AVVISO.

| | Originale | Dopo l'autore | Dopo la verifica |
|---|---:|---:|---:|
| Italiano (parole) | 2196 | 3719 (×1,69) | 3732 (×1,70) |
| Inglese (parole) | 2157 | 3778 (×1,75) | 3790 (×1,76) |

Entrambi entro i limiti (1,7 IT, 1,8 EN). Le righe aggiunte sono state pagate con tagli di ripetizioni.

## Conti rifatti
Circa 30 risultati ricalcolati con sympy (scomposizioni, biquadratiche, irrazionali con uno e due radicali, caso con il parametro $k$, valori assoluti, sistemi retta-parabola, simmetrici, dominio, $\sqrt{x-4}=\frac1{x-4}$, più i conti delle righe nuove). Nessun errore.

## Dimostrazione dell'annullamento del prodotto
Corretta: da $ab=0$ e $a\ne0$ si moltiplica per $\frac1a$ e si ottiene $b=0$; con più fattori si raggruppa il prodotto dei primi in un solo fattore. La versione originale divideva per un prodotto supposto nullo; ora non più.

## Completezza
Confronto blocco per blocco con l'originale: regole, casi e numeri degli esempi presenti nello stesso blocco. Una sola precisazione dell'originale mancava ed è stata rimessa: le ordinate $5$ e $\frac53$ non sono le soluzioni («le soluzioni sono le ascisse»).

## Termini usati dagli esercizi aggiunti (una riga ciascuno)
- Coefficiente principale e polinomio **monico**, con $x(x+1)(x-2)=x^3-x^2-2x$ (osservazione sulla molteplicità; domanda 52).
- Funzione **crescente/decrescente** e perché $\sqrt x=2-x$ ha al massimo una soluzione, $x=1$ (esempio dopo `#irrazionali`; domanda 38).
- **Punto medio** e simmetria delle soluzioni di $|x-c|=k$; $|x-3|=|x+1|$ dà $x=1$ (osservazione «Distanza…»; domande 37, 69, scheda 5).
- Sostituzione **$t=|x|$** con $\bigl||x|-2\bigr|=1$, soluzioni $\pm1$, $\pm3$ (stessa osservazione; domande 70, 84).
- Identità $x^3+y^3=(x+y)^3-3xy(x+y)$ con il passaggio dal cubo della somma, $125-90=35$ (esempio dopo `#somma-prodotto`; domanda 77).
- Non aggiunta la curva $y=\frac9x$ (scheda 6, esercizio 3): non indispensabile per seguire l'esercizio.

## Tagli (IT e EN insieme)
Divisione per $x$ in x³−9x accorciata; tolti: il valore $(-2)^3=-8$ fra parentesi, «fra i valori di $t$ e quelli di $x$», l'attraversamento in $\pm2$ (si vede nel grafico), «$t=x^2$ è un quadrato», due frasi sul segno di $B(x)$ già dette dalla dimostrazione e dall'osservazione «Stesso quadrato», l'esempio di dominio fra parentesi, «ed è sempre positivo», la coppia incrociata $(-1,9)$ e la seconda verifica con la parabola, la verifica dei valori del denominatore, la ripetizione $x^2-2x-3$; frase finale sul discriminante resa con $\Delta\ge0$; chiusura dell'esempio con due valori assoluti accorciata.

## Voce e inglese
Voce conforme (forma impersonale, connettivi espliciti, frazioni in colonna). Inglese: allineato al testo italiano finale; corretti due scarti dell'autore («squaring is therefore reversible» → «allowed», come «si può elevare»; «solve» imperativo → «we can solve»). Grafia britannica mantenuta.

## Dubbi rimasti
Nessuno sul contenuto. Restano valide le due frasi poco chiare segnalate dall'autore in scheda 3 e domanda 12 (non toccate).
