# Verifica · matematica-superiori-2 / piano-cartesiano-e-retta

Controllo finale (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

## Parole

| | Originale | Dopo l'autore | Dopo la verifica |
|---|---|---|---|
| Italiano | 2189 | 3719 (×1,70) | 3720 (×1,699) |
| Inglese | 2235 | 3857 (×1,73) | 3863 (×1,73) |

Entro i limiti (1,7 IT, 1,8 EN). Le aggiunte sono state compensate con un taglio (vedi sotto).

## Conti rifatti

Circa 30 conti rifatti con sympy: $AB=5$, $M(\frac52;4)$, $B(4;1)$, $x=2$ e $8$, $m=2$, $m=-\frac12$ (anche da $B$), $y=-\frac23x+2$ e intersezioni $(3;0)$, $(0;2)$, $y=-x+5$, $6(x-2)=0$, $y=3x+2$, $(2;5)$, $d=2$, $t$ della dimostrazione, $H(1{,}2;1{,}6)$, distanza fra parallele $2$, aree $12$ e $11$, $4x-3y+3=0$, $\frac{22}{5}$, tariffe $14/14$, $n=\frac72$, $14/15$, $17/16$. **Nessun errore.**

## Completezza rispetto all'originale

Confronto blocco per blocco: ogni regola, caso ed esempio dell'originale è presente nello stesso blocco con ancora, con gli stessi numeri. La correzione dell'autore «cambia soltanto il segno dell'ascissa» (prima «cambia soltanto l'ascissa») è giusta. Righe delle 9 figure identiche; il testo attorno descrive ciò che mostrano.

## Correzioni fatte (IT ed EN insieme)

- `#pendenza`: «primo membro» non era spiegato → «primo membro, cioè a sinistra dell'uguale».
- `#pendenza-costante`: «la quota da cui la retta parte» (figurato, e «quota» non ancora definita) → «fissa la quota, cioè l'ordinata, del punto della retta sull'asse verticale». Nell'osservazione successiva tolto il «cioè all'ordinata» ora ripetuto.
- `#distanza-retta`, dimostrazione: «Sostituendo il valore di $t$ e semplificando si ottiene la formula» saltava il passaggio → aggiunta la riga $PH=\frac{|ax_0+by_0+c|}{a^2+b^2}\sqrt{a^2+b^2}=\frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$ con il motivo ($a^2+b^2=(\sqrt{a^2+b^2})^2$).
- `#coordinate`: aggiunto «equidistante» (usato dalla domanda «Quale punto della retta $x=2$ è equidistante da…»), definito sul punto medio.
- `#intersezioni`: «sistema lineare» → «sistema» (aggettivo mai spiegato e superfluo).
- Taglio per la lunghezza: tolta in `#distanza-retta` la frase che ripeteva a parole la formula della distanza («Il numeratore si ottiene sostituendo…», 20 parole).

## Inglese

Traduzione completa e fedele del testo italiano finale (stessi blocchi, elenchi, formule, numeri con il punto decimale). Le correzioni sopra sono riportate identiche. Grafia americana come nel file inglese originale (*counterclockwise*, *traveled*); l'autore l'ha mantenuta, e io anche.

## Dubbi rimasti

- Le segnalazioni dell'autore su schede e domande (ripetizione «Quelli quelli» nella scheda 3, coordinate con la virgola in alcune domande, «vettore dei coefficienti» nella domanda 8) restano da correggere fuori da questo capitolo di teoria.
- Lunghezza al limite: ogni altra aggiunta richiederebbe tagli equivalenti.
