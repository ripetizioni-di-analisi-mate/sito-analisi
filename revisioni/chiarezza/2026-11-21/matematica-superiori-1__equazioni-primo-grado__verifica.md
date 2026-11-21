# Verifica · matematica-superiori-1 / equazioni-primo-grado

Controllo finale (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

## Conti

46 conti rifatti con sympy (tutti gli esempi, le verifiche, i valori nei grafici, i casi con parametro, i problemi, le formule inverse; script `/tmp/conti_eq.py`). **Nessun errore**, né nell'originale né nella revisione.

## Completezza e struttura

Confronto blocco per blocco con l'originale: ogni regola, caso ed esempio è ancora nel blocco con ancora in cui stava; dati numerici invariati; 9 righe di figura identiche; testo attorno alle figure coerente con gli attributi. Unico blocco nuovo (senza ancora): l'esempio sulla media, giustificato dalla scheda 4.

## Correzioni

- Definito **numeratore** (usato 18 volte in schede, esercizi e domande, mai definito; compariva in teoria solo nei prodotti incrociati): blocco `#frazioni`, con il caso $\dfrac{x-1}{4}$.
- Definito **opposto** alla prima comparsa (`#equivalenza`, «l'opposto di $3$ è $-3$»).
- Introdotto il simbolo $\iff$ («se e solo se»), usato 8 volte nelle schede: una riga in `#equivalenza` con $2x+3=11\iff2x=8$.
- Voce: «descrive il risultato di quella moltiplicazione: il numeratore…» → «…, nella quale il numeratore…»; «l'ordine si scambia: per $x=3$» → «…, e per $x=3$» (due punti al posto di un connettivo).

## Alleggerimento (italiano e inglese insieme)

Tolti: secondo controllo di non-soluzione ($5$ in $2x+3=11$); verifica ripetuta di $x=0$ in $x(x-2)=0$; ripetizione a parole della riga $(\alpha-\gamma)x=\delta-\beta$; ripetizione dei conti della riga «$16=8x$»; verifica doppia di $x=8$ (resta il confronto con lo sviluppo); «che sono diventati $-2x$ e $-4$» (già nella riga di calcolo); motivo superfluo nella dimostrazione di `#frazioni`; frase doppia sull'unicità di $x=2$ con $m=3$; «e non è la risposta al problema»; due frasi sui grafici di $3x-2$ e $x+4$ unite in una.

Parole:
- Italiano: originale 2240; consegna dell'autore 4181 (×1,87); dopo la verifica **4133 (×1,85)**.
- Inglese: originale 2283; consegna dell'autore 4315 (×1,89); dopo la verifica **4260 (×1,87)**.

Le aggiunte necessarie (numeratore, opposto, $\iff$) pesano circa 50 parole. Per scendere a ×1,80 bisognerebbe togliere definizioni alla prima comparsa (ascissa, pendenza, proprietà distributiva, mcm, parametro, modello, portata…) o passaggi di calcolo scritti uno per riga: mi sono fermato qui.

## Inglese

Traduzione completa e allineata al testo italiano finale: stessi blocchi, stessi numeri, punto decimale, grafia britannica (*litres*, *centimetres*). Tutte le modifiche sono state applicate nelle due lingue.

## Dubbi rimasti

- «Impossibile» è definito due volte: alla prima comparsa (attenzione in `#frazioni`) e nel blocco `#classificazione`, che è il suo posto e a cui puntano le schede. Le ho lasciate entrambe.
