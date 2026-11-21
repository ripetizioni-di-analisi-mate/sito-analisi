# Verifica · Fisica 1° anno · Equilibrio del punto materiale

Controllo finale (`strumenti/controlla_capitolo.py fisica-superiori-1 equilibrio-punto`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

## Parole (conteggio dello script)

| | Originale | Dopo l'autore | Dopo la verifica |
|---|---|---|---|
| Italiano | 2600 | 4975 (×1,91) | 4721 (×1,82) |
| Inglese | 2576 | 5148 (×2,00) | 4877 (×1,89) |

L'inglese resta un po' sopra 1,8 perché la traduzione è più lunga in parole dello stesso testo italiano. Per scendere ancora andrebbero tolte definizioni alla prima comparsa o passaggi di calcolo: mi sono fermato qui.

## Conti

62 conti rifatti con sympy (script `/tmp/verif-ep/conti.py`): tutti giusti, compresi quelli dell'originale, le scale delle figure (1 unità = 8 N; frecce delle corde ad angoli diversi lunghe 30 e 40), il grafico della molla (2 N/cm) e quello della molla con arresto (C a 4 cm). Nessun errore di contenuto trovato.

## Completezza rispetto all'originale

Confronto blocco per blocco: ogni regola, caso, eccezione e dato numerico dell'originale c'è ancora, nel blocco con ancora in cui stava. Titoli, ancore, titoli dei blocchi e righe delle figure invariati (confermato dallo script). Nulla da rimettere.

## Aggiunte

- `#piano`: $\sin30^\circ=\frac12$ e, a $45^\circ$, seno e coseno uguali (usati dalle domande 56, 70 e 86, che la teoria non copriva).
- `#componenti` (esempio del tirante): lettura del simbolo $\Longrightarrow$ («quindi»), che compariva senza spiegazione.

## Tagli per la lunghezza (italiano e inglese insieme)

- Sette frasi «Nel grafico… / Nella figura…» che ripetevano ciò che dicono già il titolo e le etichette della figura (carrello, equilibrante, due limiti, molla, molla con arresto, rampa, scala delle corde, soffitto); quella dell'attrito ridotta alla sola spiegazione del rapporto $f/N$.
- Ripetizioni: «senza tenere conto della forma e delle rotazioni» (ridetto nella frase dopo), «conserva valore, direzione e verso», «la somma è diversa da zero…», «il rapporto è di tre quarti» (già detto con 3 e 4), $\sin\alpha=\frac35$, $\cos\alpha=\frac45$ ridetti nel secondo esempio della rampa, verso delle componenti ridetto nel primo esempio della rampa, condizione di quiete scritta a parole subito prima della stessa formula, «l'arresto fornisce gli 8 N rimanenti» dopo $N=8\,\mathrm N$, «in cui il corpo sfiora il tavolo», $T\cos\alpha$ nella dimostrazione delle corde simmetriche (non serve alla tesi), «Ciascuna corda ha quindi tensione 40 N» dopo il calcolo che lo dà.

## Voce

Tolti i due punti al posto di un connettivo nel sistema delle corde ad angoli diversi («uguali in modulo: …» → «uguali in modulo e …»). Nessun «tu», nessuna lineetta, nessun tono prescrittivo; virgola decimale `{,}` in tutto l'italiano.

## Inglese

Traduzione completa e fedele del testo italiano finale (stessi blocchi, numeri, formule; punto decimale; grafia britannica, *metre*). Gli stessi tagli e le stesse aggiunte sono stati fatti in parallelo.

## Dubbi rimasti

- Il valore assoluto della scheda svolta 5 ($\lvert18-T\rvert\leq7$) resta non spiegato in teoria; la teoria dà i due estremi (scelta dell'autore, condivisa).
- «Riferimento inerziale» con il pavimento dell'aula dichiarato inerziale: approssimazione detta come convenzione, lasciata.
- Anteprime delle figure non riguardate (righe identiche all'originale).
