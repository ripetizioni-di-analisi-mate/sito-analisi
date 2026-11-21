# Fisica 3° anno · Cinematica rettilinea: revisione di chiarezza

## Parole
- Italiano: 2551 → 4007 (×1,57)
- Inglese: 2493 → 4135 (×1,66)
- Controllo `controlla_capitolo.py`: nessun ERRORE, nessun AVVISO. Titoli `##`, ancore, titoli dei blocchi, 11 righe delle figure e numeri degli esempi invariati.

## Che cosa è cambiato
1. Definiti alla prima comparsa: punto materiale, origine, verso positivo, sistema di riferimento, $\Delta$ e i pedici $i$, $f$, distanza percorsa, pendenza, secante, tangente, modulo e rapidità, modello, campionamento, incertezza, interpolazione, compatibile, errore di azzeramento, estrapolazione, scarto, legge oraria, intercetta, unità SI, ramo, m/s², velocità continua, decelerazione, moto uniformemente accelerato, tempo di reazione, $g$.
2. Passaggi di calcolo aggiunti dove mancavano: sviluppo di $\dfrac{2(1+h)^2-2}{h}$, soluzione dell'incontro $4+3t=22-t$, verifica delle due leggi, tre rami del carrello con la sosta, accelerazione media $\dfrac{-6}{3}$, ricostruzione di $v_0$ e verifica di $x(1)$, $x(2)$, $x(3)$, tempo e spazio di frenata, divisione per $-5$ dell'equazione della pallina, aree dei triangoli, $t=\sqrt{2h/g}$.
3. Derivazioni del teorema del moto uniformemente accelerato scritte un passo per riga (velocità media, sostituzione, prodotto somma per differenza).
4. Liste al posto di frasi con più oggetti simili (elementi del riferimento, $\Delta x$ e $\Delta t$, tre pendenze del campionamento, rami, segni di $v$ e $a$, triangoli).
5. Testo attorno alle figure che dice che cosa mostrano (assi del grafico posizione-tempo, le tre rette dei sensori, secante e tangente, spezzata della sosta, barra d'incertezza, P, Q, A).
6. Il motivo per cui l'area sotto $v(t)$ è lo spostamento (rettangolo $v\,\Delta t$).
7. Riferimento all'«apparato da laboratorio» reso concreto: l'incertezza è spiegata come intervallo ($12{,}2$–$12{,}6\,\mathrm m$; $38{,}6$–$38{,}8\,\mathrm m$).

## Com'era / Com'è ora
Com'era (moto uniforme):
> Se $x_A(t)=4+3t$ e $x_B(t)=22-t$, si ottiene $4t=18$ e quindi $t=4{,}5\,\mathrm s$. Sostituire questo istante in entrambe le equazioni restituisce $17{,}5\,\mathrm m$.

Com'è ora:
> Le leggi $x_A(t)=4+3t$ e $x_B(t)=22-t$ sono scritte in **unità SI**, cioè nelle unità del Sistema Internazionale: $x$ in metri e $t$ in secondi.
> $$4+3t=22-t\ \Longrightarrow\ 4t=18\ \Longrightarrow\ t=\frac{18}{4}\,\mathrm s=4{,}5\,\mathrm s.$$
> Sostituendo questo istante in entrambe le equazioni si ottiene $x_A=4+3\cdot4{,}5=17{,}5\,\mathrm m$ e $x_B=22-4{,}5=17{,}5\,\mathrm m$. […] Lo stesso istante si trova dalla distanza fra i due punti. All'inizio essa vale $22-4=18\,\mathrm m$ e, poiché i punti si vengono incontro, diminuisce ogni secondo di $3+1=4\,\mathrm m$, cioè della somma delle due rapidità.

## Errori trovati nell'originale
Nessun errore numerico: tutti i numeri ricalcolati (Python) tornano. Nell'esempio del campionamento la scrittura $(9-4)\,\mathrm{m/s}$ ometteva la divisione per $1\,\mathrm s$: ora è $\dfrac{9-4}{3-2}\,\mathrm{m/s}$.

## Termini e procedimenti degli esercizi aggiunti in teoria
- **Decelerazione** di modulo $d$ con $a=-d$ (#accelerazione): usata in svolti 6, tracce 6, domande 6, 14, 62-69.
- **Rapidità di avvicinamento** = somma delle rapidità per due punti che si vengono incontro (#uniforme): svolti 8, traccia 8, domande 8, 85, 86, 88.
- **Quota massima a metà fra due passaggi alla stessa quota**, con $v=0$ all'apice (esempio della pallina in #uniformemente-accelerato): traccia 13, domande 13, 75, 77.
- **Intercetta diversa da $x_0$** con il caso $9+2(t-3)=3+2t$ (#uniforme): svolti 1, esercizio 2; domanda 21.
- **Legge di un tratto con $t-t_1$** con numeri (#moto-a-tratti) e il termine **ramo**: domanda 89.
- **Indipendenza dalla massa** nella caduta libera (#grafici-caduta): domanda 73.
- Tempo di caduta con numeri ($h=20\,\mathrm m$, $t=2\,\mathrm s$): svolti 7.

## Possibili errori negli esercizi e nelle domande (non corretti)
- Svolti 8, esercizio 2: «un'altra muove verso di lei» manca «si» («si muove»).
- Svolti 2, esercizio 1: $\dfrac{28}{8}=3{,}5$ esatto, ma scritto con «$\simeq$».
- Domanda 8: $\dfrac{90}{5{,}9}=15{,}25\ldots$ s, arrotondato a $15{,}3$ (corretto), ma le opzioni sono molto distanti: nessun problema di ambiguità.
- Domanda 36: la frase finale «Il valore intermedio mostra la variazione della pendenza» è poco chiara.

## Dubbi
- In inglese «equation of motion» traduce «legge oraria», come nel file esistente.
- La frase sul cerchio vuoto della figura con la barra d'incertezza descrive `punti="3,39,vuoto"`: da confermare all'anteprima.
