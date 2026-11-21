# Revisione di chiarezza · matematica-superiori-2 / equazioni-secondo-grado

Controllo (`strumenti/controlla_capitolo.py`): **ESITO: a posto**, nessun ERRORE e nessun AVVISO.

## Parole (conteggio dello script)

- Italiano: 2193 → 3584 (×1,63, entro il limite di 1,7)
- Inglese: 2210 → 3685 (×1,67, entro il limite di 1,8)

## Che cosa è cambiato

1. `#forma` dice che cos'è un'equazione di secondo grado e definisce alla prima comparsa forma normale, coefficienti (principale, lineare, termine noto, in elenco), perché $a\ne0$, polinomio e trinomio, primo membro, radice, insieme delle soluzioni $S$, $\varnothing$, equazioni equivalenti e il simbolo $\iff$, dominio. Il caso «i termini quadratici si cancellano» ha ora un esempio con i numeri ($(x+1)^2=x^2+3$).
2. Primo esempio: richiamo di ascissa, ordinata e parabola, con la descrizione della figura (punti d'incontro di ascissa $-4$ e $3$).
3. `#incomplete`: pura e spuria spiegate a parole («manca il termine con $x$», «manca il termine noto»), casi della dimostrazione in elenco, definizione di $\sqrt u$ e di $\pm$, legge di annullamento del prodotto nominata. Nell'esempio di $3x^2=18$ definiti numeri opposti e valore assoluto, con $\sqrt{x^2}=|x|$ (usato in scheda 1 e domanda 25).
4. `#formula`: $\Delta$ letto «delta», formula scritta con $x_1$ e $x_2$; dimostrazione con il passo iniziale $ax^2+bx=-c$ che mancava, il richiamo del quadrato di binomio e il motivo per cui $4a^2x^2+4abx+b^2=(2ax+b)^2$. Negli esempi scritti i passaggi mancanti ($\dfrac{2\pm2\sqrt7}{6}$, $\Delta=64-48$ nella formula ridotta, $d$ = metà di $b$).
5. `#discriminante`: definiti radice doppia, molteplicità, radice semplice, vertice, asse di simmetria, verso della parabola; verificata per esteso l'identità del quadrato completato; aggiunta una riga sull'asse a metà fra le radici. Nell'osservazione sulla parabola verso il basso c'è il completamento del quadrato e la sottrazione delle due radici scritta in formula; in «Cambiare scala» il passaggio $\lambda^2b^2-4\lambda^2ac$ e il motivo per cui le radici non cambiano.
6. `#viete`: lettura dei pedici, origine del nome, e nella dimostrazione il passo che mancava (un polinomio $mx+q$ nullo in due punti distinti è nullo: $m(x_1-x_2)=0$). Negli esempi: definizione di monico, motivo per cui somma e prodotto sono radici di $t^2-st+p$, derivazione di $x_1^2+x_2^2=s^2-2p$.
7. `#fratte`: definiti equazione fratta, condizioni di esistenza, $\mathbb R\setminus\{\ldots\}$, candidati; calcolo di $(x+1)^2=18$ una riga per passaggio con $\sqrt{18}=3\sqrt2$.
8. `#parametri` e problemi: definiti parametro, identità, punto di tangenza, intervallo aperto $(0,9)$, semiperimetro, modello; le due condizioni per radici positive in sistema (condizioni insieme), i tre casi del parametro in elenco; caso $k=\dfrac34$ calcolato. Tolte le forme «può aiutare», «si può calcolare», «Supponiamo che».

Frontmatter, titoli `##`, ancore, titoli dei blocchi e le 9 righe delle figure sono identici; nessun contenuto tolto; numeri degli esempi invariati. Inglese tradotto per intero con la grafia britannica del file esistente (*factorisation*, *centimetres*, *metres*); la parola «spuria» resta resa come nel file inglese originale (*no constant term*).

## Com'era / Com'è ora (dimostrazione di `#viete`)

**Com'era**

> Per due radici distinte, la differenza tra $ax^2+bx+c$ e $a(x-x_1)(x-x_2)$ ha grado al più uno, perché i termini quadratici si cancellano. La differenza è nulla in entrambe le radici, dunque vale zero per ogni $x$.

**Com'è ora**

> Caso di due radici distinte. Si considera la differenza fra $ax^2+bx+c$ e $a(x-x_1)(x-x_2)$. I termini con $x^2$ valgono $ax^2$ in entrambi e si cancellano, quindi la differenza è della forma $mx+q$. Essa vale zero in $x_1$ e in $x_2$, perché lì si annullano entrambi i polinomi. Da $mx_1+q=0$ e $mx_2+q=0$, sottraendo, si ha $m(x_1-x_2)=0$. Poiché $x_1\ne x_2$, segue $m=0$ e quindi anche $q=0$. La differenza vale perciò zero per ogni $x$, e i due polinomi coincidono.

## Errori trovati nell'originale

Nessuno. Tutti i numeri ricalcolati con sympy (radici di tutti gli esempi, discriminanti, $-1\pm3\sqrt2$, radice doppia $2$ per $k=\dfrac34$, lati $6$ e $8$, fattorizzazione $-(t-7)(t+1)$). Ricontrollate anche le 14 tracce e le risposte corrette delle 90 domande lette: corrette.

## Aggiunte per coprire gli esercizi

- $S=\{\ldots\}$, $\varnothing$, $\iff$, $\mathbb R\setminus\{\ldots\}$ (schede 1-8, domande 14, 44, 51): in `#forma` e `#fratte`.
- Valore assoluto e $\sqrt{x^2}=|x|$ (scheda 1, domanda 25): esempio dopo `#incomplete`.
- Monico, molteplicità, radice semplice, quadrato di binomio (schede 3, 4; domande 12, 19, 20).
- Asse di simmetria a metà fra le radici (scheda 3; domande 34, 39).
- Quadrato perfetto e radici irrazionali (domanda 89).
- Intervallo aperto $(0,9)$ (scheda 8, domande 17, 90), semiperimetro (scheda 7, domanda 82), condizioni di esistenza (domanda 44).

## Dubbi e segnalazioni (non corretti, fuori dai miei file)

- Scheda 2, esercizio 3: «Se si indica la parentesi con $u=x-1$» e «Dividere per la parentesi»: uso di «la parentesi» vietato dalla guida.
- Scheda 4, esercizio 3: «bisogna dividere per $2a=8$, non per due soltanto» (tono prescrittivo). Scheda 5, esercizio 1 e 3: «Il calcolo del vertice stabilisce…», «A somma fissata, il prodotto è massimo…» detto senza giustificazione.
- Domanda 48: «la parentesi comune». Domande 30 e 39 rimandano a `#problemi` ma riguardano zeri e asse (più adatte a `#discriminante`).
- Nessun errore matematico trovato in schede, tracce e domande.
