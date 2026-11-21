# Fisica 1° anno · Equilibrio del punto materiale

Controllo (`strumenti/controlla_capitolo.py fisica-superiori-1 equilibrio-punto`): **a posto**, nessun ERRORE e nessun AVVISO.

## Parole

- Italiano: 2600 → 4975 (×1,91).
- Inglese: 2576 → 5148 (×2,00).

L'aumento è sopra l'intervallo atteso (1,2-1,7) e sotto la soglia di avviso. Viene quasi tutto dai sei blocchi con ancora, dove mancavano le definizioni (`#condizioni` ×3,4; `#piano` ×3,0; `#molla` e `#attrito-equilibrio` ×2,5). Gli esempi già chiari sono cresciuti di 1,3-1,7. Ho già tolto le descrizioni lunghe dei grafici e alcune frasi mie di troppo; per scendere ancora andrebbero tolte definizioni o passaggi di calcolo.

## Che cosa è cambiato

1. Ogni termine è definito alla prima comparsa: forza, newton, punto materiale, riferimento inerziale, risultante, vettore nullo, componente, proiezione, diagramma di corpo libero, peso, tensione, equilibrante, tirante, testa-coda, corda ideale, lunghezza naturale, allungamento, forza elastica, tratto lineare, costante elastica, reazione normale, vincolo, piano inclinato, seno, coseno, tangente, liscio, attrito statico, coefficiente di attrito, senza adesione, tangenziale.
2. Simboli e lettere letti a parole: $\sum$, $\vec R$, $\leq$, $\geq$, $\Longleftrightarrow$, $\alpha$, $\mu_s$, $\ell$, $P_\parallel$, $P_\perp$, $T_\mathrm s$ e $T_\mathrm d$, la scrittura $(6;8)\,\mathrm N$. Segnalata la differenza fra $N$ in corsivo (normale) e $\mathrm N$ diritta (newton).
3. Seno e coseno erano usati senza definizione (il capitolo sui vettori non li introduce): ora sono definiti sul triangolo della rampa 3-4-5 prima delle formule $P\sin\alpha$ e $P\cos\alpha$.
4. Calcoli con tutti i passaggi: da dove vengono $\frac45T$ e $\frac35T$, il bilancio che dà $T=20\,\mathrm N$, il sistema delle corde ad angoli diversi svolto riga per riga, la divisione per $P\cos\alpha$ che porta a $\tan\alpha\leq\mu_s$, la spinta minima sulla parete.
5. Le dimostrazioni restano nei loro blocchi, con ogni passo motivato (rotazione di un angolo retto, cateto opposto e adiacente).
6. Tolto il punto di vista da laboratorio («nel modello», «il vincolo non è disponibile», «il bilancio cambia quando cambia il vincolo attivo» senza dire che cos'è un vincolo). I due casi della molla con arresto sono in elenco.
7. Sotto ogni grafico dentro un blocco, una frase dice che cosa c'è sugli assi e quali sono i punti segnati.
8. Titoli, ancore, titoli dei blocchi, righe delle figure e dati numerici degli esempi sono invariati. Nessun blocco aggiunto.

## Com'era / Com'è ora

Esempio «Un tirante di direzione assegnata». Lo studente non aveva modo di capire da dove venissero $\frac45$ e $\frac35$, né il conto che dà $20\,\mathrm N$.

**Com'era**

> Si può aggiungere una fune orientata a sinistra verso l'alto lungo una direzione con rapporto salita su spostamento orizzontale di tre quarti. I moduli delle componenti di una tensione $T$ sono quindi $\dfrac45 T$ in orizzontale e $\dfrac35 T$ in verticale. Il bilancio orizzontale fissa $T=20\,\mathrm N$.

**Com'è ora**

> Si aggiunge una fune orientata a sinistra e verso l'alto, che sale di $3$ unità ogni $4$ unità di spostamento orizzontale. Il rapporto fra salita e spostamento orizzontale è quindi di tre quarti.
>
> Un tratto di fune che avanza di $4$ in orizzontale e sale di $3$ è lungo $\sqrt{4^2+3^2}=\sqrt{25}=5$, per il teorema di Pitagora. La tensione $T$ è diretta lungo la fune, quindi le sue componenti stanno a $T$ come i lati $4$ e $3$ stanno alla lunghezza $5$. I moduli delle componenti sono $\dfrac45 T$ in orizzontale e $\dfrac35 T$ in verticale.
>
> Il bilancio orizzontale, con il verso positivo a destra, è
> $$16\,\mathrm N-\frac45T=0\quad\Longrightarrow\quad T=16\,\mathrm N\cdot\frac54=20\,\mathrm N.$$

## Errori nell'originale

Nessuno. Tutti i numeri sono stati ricalcolati e coincidono.

## Aggiunte per coprire gli esercizi

- `#corde`: $P=mg$ con $g$ in $\mathrm{N/kg}$ (circa $9{,}8$, arrotondato a $10$ negli esercizi); lo usano tracce e domande con la massa in kg.
- `#componenti`: il nome «equilibrante» e il teorema di Pitagora per il modulo.
- `#molla`: conversione in centimetri, molla compressa, due molle affiancate con lo stesso allungamento (scheda svolta 3, esercizio 3, stessi numeri).
- `#attrito-equilibrio`: intervallo di tensioni per cui la quiete è ammissibile (scheda svolta 5, esercizio 2), scritto senza valore assoluto.
- `#contatto`: esempio numerico $N=60-25=35\,\mathrm N$ (gli stessi numeri del capitolo Forze).

## Dubbi rimasti

- Lunghezza: vedi sopra. Se va riportata entro 1,7, i tagli meno dannosi sono le frasi sui grafici e le aggiunte del punto precedente.
- «Riferimento inerziale» è spiegato in una riga e il pavimento dell'aula è dichiarato inerziale per il capitolo; è un'approssimazione, detta come convenzione.
- Il valore assoluto che compare nella scheda 5 ($\lvert18-T\rvert\leq7$) non è spiegato in teoria: ho preferito i due estremi calcolati.
- `CLAUDE.md` del repository riporta che una riscrittura estesa di Limiti fu bocciata; questo lavoro segue il brief del 21/11, ma il confronto «prima e dopo» merita una lettura del titolare prima della pubblicazione.
- Le anteprime delle figure non sono state riguardate: le righe `::grafico` sono identiche all'originale.
