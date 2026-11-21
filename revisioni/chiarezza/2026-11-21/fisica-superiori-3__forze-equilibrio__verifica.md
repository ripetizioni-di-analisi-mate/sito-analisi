# Verifica · Fisica 3° anno · Forze ed equilibrio

## Esito

`python3 strumenti/controlla_capitolo.py fisica-superiori-3 forze-equilibrio`: nessun ERRORE. Resta l'AVVISO su «OH», che è il nome del segmento nel titolo della figura del braccio e non una sigla.

Parole (originale IT 2472, EN 2359):
- IT: 4199 prima del mio intervento, 4199 dopo (×1,70). Ho tolto tante parole quante ne ho aggiunte, quindi il limite di 1,70 è rispettato.
- EN: 4244 prima, 4240 dopo (×1,80).

## Conti rifatti

Ho rifatto con Python 24 conti: normale di 70 N, allungamenti 0,040 e 0,060 m, molle in serie e in parallelo (0,20 m e 0,05 m; 50 e 200 N/m), taratura (200 N/m, ℓ₀ = 12 cm), limite statico di 20 N e risultante di −8 N, trazione obliqua (23,08 N, normale 46,15 N, punto A della figura a 18,46 N), due pattini (9, 25 e 34 N), distacco (30 N e 12 N), tensioni P, P/2 e (√3/2)P, portata delle funi (64 N e 41,57 N), momenti (4, 8, 1,6, 6 e 3 N·m), tabella degli appoggi e titolo della figura (Q = 10 N, 10 N e 60 N), braccio OH = 2 nella figura. Ho trovato **un** valore scritto in modo incoerente:
- trazione obliqua: era «$60\,\mathrm N-23{,}1\cdot0{,}60\,\mathrm N\simeq46{,}2\,\mathrm N$», ma con 23,1 si ottiene 46,14. Ora è «$60\,\mathrm N-0{,}60\,F\simeq46{,}2\,\mathrm N$», con il valore esatto di F (IT ed EN).

## Contenuti dell'originale rimessi

- `#attrito`: ho rimesso la descrizione del grafico dell'attrito. Con la stessa normale di 50 N l'attrito statico segue la trazione fino a 20 N, e in scorrimento l'attrito vale 15 N, quindi $\mu_d=\dfrac{15}{50}=0{,}30$. Nota: l'originale dava il valore di 0,30 solo implicitamente, con il titolo della figura «In scorrimento, qui vale 15 N». Ho scritto il valore per esteso perché altrimenti il 15 N della figura resta senza spiegazione.
- Ho confrontato blocco per blocco tutti i 15 blocchi con ancora. Non manca nessun'altra regola, caso o precisazione dell'originale e nulla è stato spostato. I dati degli esempi sono invariati.

## Copertura degli esercizi

Ho letto tutte le 90 domande, le 8 schede svolte e i 14 esercizi da fare. Ho aggiunto due voci:
- i simboli $P_\parallel$ e $P_\perp$ nell'elenco di `#piano-inclinato`, con «proiezione» come sinonimo di componente. Li usano le domande 5, 56, 60 e 61, l'esercizio da fare 5 e la scheda 5.
- il termine **equilibrio rotazionale** (momento totale nullo) in `#momento-equilibrio`. Lo usano le domande 8 e 86 e l'esercizio da fare 8.

Il resto è coperto dalla teoria: molle in serie e in parallelo, nastro, salita, Pitagora sulle componenti, coppia, cerniera, baricentro e appoggio semplice. La domanda 79 usa le dimensioni $MLT^{-2}$ e $ML^2T^{-2}$, che la teoria non richiama. Le ho lasciate fuori, perché sono un argomento degli anni precedenti e il capitolo è al limite di lunghezza.

## Ripetizioni tolte per fare spazio (IT ed EN)

- `#hooke`: «Quindi il richiamo è 4 N», che ripeteva il peso appena calcolato.
- `#calibrazione-molla`: l'esempio numerico 4/0,14 ≈ 28,6 N/m aggiunto dall'autore. Resta il motivo per cui la divisione è sbagliata.
- `#attrito`: «Il verso dell'attrito dipende dallo scorrimento rispetto alla superficie», già detto due frasi prima.
- `#trazione-obliqua`: «quindi una trazione orizzontale di 23,1 N lascerebbe la cassa ferma», una verifica doppia.
- `#attriti-piu-contatti`: ho fuso in una frase due frasi che ripetevano la conclusione originale sui momenti.

## Voce e inglese

- EN `#hooke`: c'erano due due punti di seguito («linear model: … deformation: doubling»). Ora è «linear model, that is, …».
- L'inglese corrisponde al testo italiano finale frase per frase. Ho applicato le stesse modifiche nelle due lingue. La grafia è britannica (*metre*, *centre*, *anticlockwise*), come nel file esistente.
- Non ho trovato tono prescrittivo né frasi a effetto. «Supponiamo» viene dall'originale.

## Dubbi rimasti

- Le domande e le schede non sono state ricalcolate una per una. Le ho lette tutte per la copertura e non ho notato errori.
