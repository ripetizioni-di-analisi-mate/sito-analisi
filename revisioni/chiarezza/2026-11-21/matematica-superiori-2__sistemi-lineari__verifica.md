# Verifica · Matematica 2° anno · Sistemi lineari

**Esito del controllo** (`strumenti/controlla_capitolo.py`): a posto, nessun ERRORE né AVVISO.

**Parole**: italiano originale 2314; prima del mio intervento 3720 (×1,61), dopo 3735 (×1,61). Inglese originale 2326; prima 3907 (×1,68), dopo 3921 (×1,69). Il capitolo era già entro i limiti (1,7 IT, 1,8 EN) e ci resta: non ho tolto testo, ho aggiunto solo due definizioni brevi.

## Conti rifatti
Ventidue risultati ricalcolati con sympy (tutti i sistemi degli esempi, i tre determinanti dei due esempi di Cramer, le due identità della dimostrazione di Cramer sviluppate simbolicamente, i due sistemi con parametro, il sistema con il dominio ristretto, i due sistemi in tre incognite, il problema dei biglietti, le due coppie di tariffe con i costi a $n=2$, $n=3$ e il punto di parità $(2{,}25;20)$ della figura). Nessun errore.

## Completezza
Confronto blocco per blocco con l'originale: ogni regola, caso e precisazione è ancora nel suo blocco con ancora; i dati numerici degli esempi sono invariati; righe delle figure identiche. Le frasi dell'originale riformulate (per esempio «La soluzione del sistema lineare semplificato si trova esattamente nel punto mancante», «Si può dunque distinguere quale piano costa meno ai due interi vicini») sono ancora presenti nel contenuto, ora nella descrizione della figura o in elenco.

## Correzioni fatte (IT ed EN insieme)
- `#riduzione`: «multiplo dell'altra» non era spiegato; aggiunto «cioè l'altra equazione moltiplicata per un numero».
- Esempio «Usare multipli piccoli»: «riga» compariva prima di essere spiegato (la definizione arriva in `#cramer`); aggiunto «cioè la prima equazione».
- `#soluzione`: tolta la ripetizione «devono essere vere contemporaneamente», già detta due righe sotto dalla frase originale sulla graffa.
- Osservazione sul determinante nullo: due due punti che facevano da connettivo («indica l'inclinazione: qui vale…», «taglia l'asse $y$: qui vale…») sostituiti da frasi con punto e virgola o congiunzione.

## Inglese
Traduzione completa e allineata al testo italiano finale (stessi blocchi, stessi numeri, punto decimale). Grafia resa uniforme all'americano del file originale: *analysed* → *analyzed*, *centimetres* → *centimeters*, *round brackets* → *parentheses*. Nessun'altra forma britannica trovata (ricerca su -our, -ise, -yse, -tre, -lled).

## Dubbi rimasti
- Nell'osservazione `Il determinante nullo…` il paragrafo sulle rette parallele (coefficiente angolare, intercetta) sta fra la descrizione della figura della retta comune e la figura stessa; è nello stesso blocco come prescritto, ma la lettura sarebbe più lineare con la figura subito dopo la sua descrizione. Non spostato per non cambiare la posizione della riga della figura.
- Il simbolo $\Longrightarrow$ (dall'originale) non è spiegato; il significato «quindi» è evidente dal contesto.
- Restano valide le segnalazioni dell'autore su schede e domande (non toccate).
