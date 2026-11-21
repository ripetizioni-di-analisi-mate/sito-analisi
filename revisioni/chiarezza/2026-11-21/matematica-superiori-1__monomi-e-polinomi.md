# Matematica 1° anno · Monomi e polinomi · revisione di chiarezza

**Esito del controllo** (`python3 strumenti/controlla_capitolo.py matematica-superiori-1 monomi-e-polinomi`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO. Resa corretta in italiano e in inglese.

**Parole**: italiano 2435 → 4700 (×1,93); inglese 2494 → 4918 (×1,97).
L'aumento è sopra la fascia attesa (1,2–1,7) e sotto la soglia di avviso (2,0). Una prima stesura era a ×2,10: ho tolto verifiche doppie ed esempi ripetuti in due passate. Quello che resta in più sono definizioni di termini mai spiegati (circa trenta) e passaggi di calcolo che l'originale saltava. Scendere ancora significherebbe togliere definizioni.

## Che cosa è cambiato

1. **Lessico di base definito alla prima comparsa**: prodotto, fattore, potenza, base, esponente, coefficiente, numero reale, intero non negativo, parte letterale, opposto, ascissa, ordinata, costante, quoziente, denominatore, termine, binomio, trinomio, termine noto, termine dominante, variabile, addendo, proprietà distributiva, raccogliere, sviluppare, condizioni di esistenza, perimetro, area, fattore di scala, membro, dominio, controesempio, espressione lineare. Spiegati anche i simboli $\ne$, $>$, $\ge$, $x^{-1}$ e le scritture $P(x)$, $P(1)$, $P(x,y)$, $R(-1,2)$.
2. **Prima i numeri, poi le lettere**: somma di monomi simili, prodotto, quoziente, potenza e grado del prodotto si aprono con un caso numerico; l'enunciato con $a,b,L$, $m,n$, $k$ viene dopo.
3. **Enunciati spezzati in elenco**: le tre regole del prodotto, le due condizioni sul denominatore, le tre trasformazioni della potenza, i tre contributi di $P(-2)$, le due sostituzioni per le espressioni lineari.
4. **Passaggi di calcolo aggiunti**: riga intermedia nella differenza di polinomi, sviluppo di $c(x+1)+2(x-1)$, i due contributi di $R(-1,2)$ e il calcolo di $R(2,-1)$, $\dfrac{x^5}{x^2}$ scritto con i fattori, perimetro $2(4x+2)$, le due aree dei cartoncini.
5. **Figure descritte nel testo**: che cosa sono i due assi, quali punti sono segnati, con quale valore di $x$ sono disegnati i rettangoli (sempre $x=2$) e la verifica numerica corrispondente.
6. **Dimostrazioni** rimaste nei loro blocchi, con la proprietà usata nominata (distributiva, scambio dei fattori, somma degli esponenti) e il motivo di ogni passo.
7. **Voce**: tolti «assegnazione delle lettere», «misura rappresentativa», «l'uguaglianza fallisce», «il confronto isola l'effetto», «lasciano aperta la possibilità»; forma impersonale, connettivi espliciti, frazioni in colonna.
8. Una riga-ponte sotto «Modelli di area e perimetro» che dice che cos'è un modello (la parola compariva solo nel titolo).

Invariati: frontmatter, i 9 titoli `##`, le 7 ancore con i loro titoli, i titoli di tutti gli altri blocchi, le 9 righe delle figure, tutti i dati numerici degli esempi.

## Com'era / Com'è ora

Blocco «Semplificare un quoziente di monomi», dimostrazione.

**Com'era**

> Si separano i coefficienti dai fattori letterali e si cancellano le copie comuni di ciascuna lettera che vale un numero non nullo. Per $x\ne0$ e $a\ge b$, l'uguaglianza $x^a=x^b x^{a-b}$ mostra che $\dfrac{x^a}{x^b}=x^{a-b}$. Se $a<b$, si scrive $x^b=x^a x^{b-a}$. La cancellazione lascia $\dfrac1{x^{b-a}}$.

**Com'è ora**

> Si separano i coefficienti dai fattori letterali. Ogni lettera diversa da zero si semplifica come in una frazione numerica, cioè dividendo numeratore e denominatore per lo stesso fattore. Per $x\ne0$ si ha
>
> $$\frac{x^5}{x^2}=\frac{x\cdot x\cdot x\cdot x\cdot x}{x\cdot x}=x\cdot x\cdot x=x^3.$$
>
> I due fattori $x$ del denominatore si semplificano con due dei cinque fattori del numeratore, e ne restano $5-2=3$.
>
> Con due esponenti qualsiasi $a$ e $b$ il ragionamento è lo stesso. Sia $x\ne0$ e sia $a\ge b$, cioè $a$ maggiore o uguale a $b$. Vale l'uguaglianza $x^a=x^b x^{a-b}$, perché in un prodotto gli esponenti si sommano e $b+(a-b)=a$. Dividendo entrambi i membri per $x^b$ si ottiene $\dfrac{x^a}{x^b}=x^{a-b}$. Se $a<b$, si scrive $x^b=x^a x^{b-a}$. La semplificazione del fattore $x^a$ lascia $\dfrac{x^a}{x^b}=\dfrac1{x^{b-a}}$.

**Che cosa migliora**

- Il caso con i numeri ($5$ e $2$) viene prima delle lettere $a$ e $b$, e si vedono i fattori che si semplificano.
- «Le copie comuni di ciascuna lettera che vale un numero non nullo» diventa il gesto che lo studente conosce dalle frazioni numeriche.
- È scritto perché vale $x^a=x^b x^{a-b}$ (prima era dato per noto) e che cosa si fa per passare alla frazione.
- Il simbolo $\ge$ è letto a parole.
- L'ultimo passo dice di quale frazione $\dfrac1{x^{b-a}}$ è il risultato.

## Errori trovati nell'originale

Nessun errore di calcolo: tutti i numeri sono stati ricalcolati con sympy e coincidono.
Una imprecisione corretta: l'originale lasciava intendere senza dirlo che $\dfrac3x$ non è un monomio; ora è scritto, con il motivo (esponente $-1$).

## Aggiunte per coprire schede, esercizi e domande

- «termine lineare / quadratico / cubico» e «contributo» di un termine (usati decine di volte negli esercizi, mai definiti in teoria);
- «binomio» e «trinomio»; «polinomio nullo»; «sviluppare»; «membri» di un'uguaglianza;
- «condizioni di esistenza» (scheda 8: la teoria parlava solo di «valori ammessi»);
- potenza con coefficiente frazionario, $\left(-\dfrac23x\right)^3=-\dfrac{8}{27}x^3$ (scheda 3).

## Dubbi rimasti

- La scheda 4 (esercizio 3) discute il grado «al variare di $k$ reale»: il parametro non è spiegato in teoria. Non l'ho aggiunto per non allungare ancora; la scheda lo svolge per esteso.
- In inglese ho tenuto la grafia del file esistente (*centimeters*) e i termini delle schede (*like terms*, *simplified form*, *constant term*, *restrictions*, *left-hand side*).
- Lunghezza ×1,93: se si preferisce restare entro 1,7 i candidati al taglio sono le verifiche numeriche sulle figure ($x=2$) e gli esempi numerici in testa ai teoremi.
