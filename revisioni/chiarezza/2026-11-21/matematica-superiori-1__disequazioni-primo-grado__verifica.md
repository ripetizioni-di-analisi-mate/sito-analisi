# Verifica · matematica-superiori-1 / disequazioni-primo-grado

**Controllo** (`strumenti/controlla_capitolo.py`): ESITO «a posto», nessun ERRORE.

**Parole** (conteggio dello script): IT 4068 → 3965 (×1,84 → ×1,80); EN 4368 → 4263 (×1,96 → ×1,92). Originale IT 2208, EN 2224.

## Conti rifatti
Rifatti con Python/sympy 27 conti: soluzioni 9 e 7 di $2x+8>24$ e soglia 8; $2x+6>x+9$ (valori in 2, 3, 4); $-2x+1\le7$ (in −3 e −4); segno di $-2x+6$; frazioni ($\frac{7-3x}{6}$, $x\le\frac13$, $\frac19+\frac89=1$); $\frac{3-2x}{-4}<2$ e valore 2 in $\frac{11}{2}$; cambio di variabile ($\frac32$, $\frac72$); interi in $(8,14]$ = 6; doppia disuguaglianza $-1<x\le2$; parametro $b$ ($x=\frac4{b-3}$, caso $b=5$); tariffe (parità 23 €, 20/21, 26/25); pacco ($\frac{74}{7}$, 39 e 42,5 kg); matite (6-9; $4n\ge45$ → 12); budget ($n\le7$, 34 €); tappe (20 e 23). **Nessun errore.**

## Completezza rispetto all'originale
Confronto blocco per blocco: ogni regola, caso ed esempio dell'originale è ancora nel suo blocco con ancora, con gli stessi numeri. La frase dell'originale «Questo controllo è necessario anche quando…» (osservazione sulle intersezioni) è stata tolta dall'autore perché prescrittiva: il contenuto (controllare direttamente il valore in cui i limiti coincidono) resta. Nulla da rimettere.

## Termini e copertura degli esercizi
Termini e sigle (mcm, $\mathbb R$, $\mathbb Z$, $\iff$, $S$, $\varnothing$, $\cup$, $\cap$, $\setminus$, $\infty$, kg) definiti alla prima comparsa. Aggiunto: lettura di $x\notin\mathbb Z$ in `#intervalli` (usato nella scheda 5 e in alcune domande).

## Alleggerimento (IT ed EN insieme)
Tolte: descrizioni di figure che ripetevano il titolo della figura (rette $x\ge1$/$x<4$, tratto $(5,9]$ con i punti pieni, punto d'incontro delle rette in $(3,12)$, retta di A «più in basso»); la riga «in alto sono segnati 1 e 4»; la frase «Sulla retta i due casi differiscono soltanto per il cerchio in 1»; l'esempio aggiunto «−5 verifica la prima condizione e 2 la seconda»; verifiche doppie («e infatti $2\cdot8+8=24$», «per $x=0$ vale 6 e per $x=5$ vale −4»); la verifica della soglia $\frac13$ ridotta a una riga. Definizioni, passaggi di calcolo e aggiunte per schede ed esercizi lasciati.

## Voce e inglese
Nessuna frase prescrittiva, figurata o in «tu» trovata. L'inglese è la traduzione del testo italiano finale, con le stesse modifiche; grafia britannica (*neighbouring*) come il file esistente. Restano due piccole aggiunte dell'autore nell'inglese («the sign of the inequality is reversed», «also called a ray»), lessico delle schede inglesi.

## Dubbi rimasti
- L'inglese resta a ×1,92: il testo è la stessa traduzione dell'italiano (×1,80), più lungo per la formulazione inglese. Per scendere a 1,8 bisognerebbe togliere definizioni o passaggi, quindi mi sono fermato.
- Nelle schede compaiono $\implies$ e i pedici $n_{\min}$, $x_{\min}$, non spiegati in teoria; li ho lasciati perché il significato è chiaro dal contesto.
