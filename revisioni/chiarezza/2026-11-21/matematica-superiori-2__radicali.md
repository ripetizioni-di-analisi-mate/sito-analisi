# Revisione di chiarezza · Matematica 2° anno · Numeri reali e radicali

Esito del controllo (`strumenti/controlla_capitolo.py matematica-superiori-2 radicali`): **a posto**, nessun errore e nessun avviso.

Parole (conteggio dello script): italiano 2587 → 4307 (×1,66); inglese 2593 → 4439 (×1,71).
Titoli `##`, ancore, titoli dei blocchi con ancora, righe delle figure, frontmatter e numeri degli esempi sono invariati. Non è stato tolto nessun contenuto.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa** che prima mancavano: radicale, radicando, radice quadrata, numeri reali, scrittura periodica, quadrato perfetto, «se e solo se», minimi termini, coprimi, addendo, indice, radice principale, ascissa e ordinata, dominio e condizioni di esistenza, valore assoluto (anche come distanza sulla retta) e modulo, estrazione di un fattore, punto isolato, coefficiente, coniugato.
2. **Simboli spiegati**: ≥, ⟺, notazione degli intervalli ([ e ( per estremo compreso o escluso, +∞), unione ∪, ∈ e ℝ.
3. **Passaggi di calcolo aggiunti** dove mancavano: risoluzione di 2x−6≥0 riga per riga; quoziente in x=−3; estrazioni √48, √12, √8 con il radicando scomposto; prodotto per il coniugato scritto con il denominatore intermedio; ∛27 nella razionalizzazione; 27^(−2/3) passo per passo; quadrato del binomio (√7+√2)²; moltiplicazione per il coniugato nella differenza √(x+1)−√x; i due conti della dimostrazione delle potenze razionali.
4. **Dimostrazioni a passi brevi** (radici di interi, estrazione, prodotto di radicali, coniugato, potenze razionali), con la proprietà usata nominata (proprietà distributiva, (xy)ⁿ=xⁿyⁿ, unicità della radice positiva).
5. **Elenchi al posto di frasi con più casi**: condizioni di esistenza, casi della razionalità, radici annidate, denominatori con due termini, ordine delle operazioni in (√x)² e √(x²), punto isolato, casi del confronto fra cubi e fra potenze.
6. **Condizioni da soddisfare insieme scritte come sistema** (radici annidate, prodotto √(x−1)√(x+2)).
7. **Figure descritte con i loro punti** (A, B, C con coordinate, linee tratteggiate x=3, x=−2, y=1).
8. Inglese: traduzione integrale del nuovo testo, grafia americana come il file esistente e le schede (*rationalize*, *nonnegative*).

## Com'era / Com'è ora

Blocco «Fattori quadrati e valore assoluto» (#semplificazione): lo studente trovava $|k|$ senza sapere che cosa fosse, e la dimostrazione era in tre frasi compresse.

**Com'era**
> Per $a\ge0$ e $k\in\mathbb R$ vale $\sqrt{k^2a}=|k|\sqrt a$. In particolare $\sqrt{x^2}=|x|$ per ogni reale $x$.
> Dimostrazione. Il prodotto $|k|\sqrt a$ è non negativo. Il suo quadrato è $|k|^2(\sqrt a)^2=k^2a$. Quindi ha entrambe le proprietà che identificano la radice quadrata di $k^2a$ e coincide con essa.

**Com'è ora**
> Il **valore assoluto** (o **modulo**) $|k|$ di un numero $k$ è il numero stesso senza il suo segno: $|k|=k$ se $k\ge0$ e $|k|=-k$ se $k<0$. Per esempio $|5|=5$ e $|-5|=5$. Sulla retta dei numeri $|k|$ è la distanza di $k$ da $0$, e $|x-3|$ è la distanza di $x$ da $3$.
> Per $a\ge0$ e $k$ reale qualsiasi (in simboli $k\in\mathbb R$, dove $\mathbb R$ indica l'insieme dei numeri reali) vale $\sqrt{k^2a}=|k|\sqrt a$. Portare fuori dalla radice un fattore in questo modo si chiama **estrazione** del fattore. In particolare, con $a=1$, si ha $\sqrt{x^2}=|x|$ per ogni reale $x$. Per esempio $\sqrt{(-3)^2}=\sqrt9=3=|-3|$.
> Dimostrazione. Per la definizione, $\sqrt{k^2a}$ è l'unico numero non negativo il cui quadrato è $k^2a$. Si verificano quindi due fatti sul numero $|k|\sqrt a$.
> - È non negativo, perché è il prodotto di due numeri non negativi.
> - Il suo quadrato è $(|k|\sqrt a)^2=|k|^2(\sqrt a)^2=k^2a$, perché $|k|^2=k^2$ e $(\sqrt a)^2=a$.

## Errori trovati nell'originale

Nessun errore matematico. Tutti i numeri ricalcolati con Python/sympy (1,41² e 1,42², √72, √48−√12+√8, 1/(√5−√2), 27^(−2/3), (√7+√2)², √5−2 e √50−7, 2,25^(3/2), limite del quoziente (x−1)/(x+2)).

## Termini e procedimenti degli esercizi aggiunti in teoria

- **Riduzione dell'indice con radicando numerico** (domande 25 e 64: ⁶√(2⁸), ⁴√9=√3): il titolo della sezione la nominava ma la teoria aveva solo il caso ⁶√(x²). Aggiunto ⁴√9=√3 nell'esempio di #semplificazione.
- **Valore assoluto come distanza** (domande 31 e 78: |x−4|=2, |x+1|+|x−1|=2; scheda 7) e il sinonimo **modulo** (domanda 47): in #semplificazione.
- **Radice principale** (usata in molte domande e schede): in #definizione.
- **Quadrato di un binomio** (domande 52 e 70, e usato senza passaggi nella stima di √7+√2): formula richiamata nell'esempio della stima.
- **Quadrato perfetto, minimi termini, coprimi** (domande 18, 19, 23 e scheda 1): nel teorema sulle radici di interi.
- **Regola del quoziente con esempio numerico** √75/√3 (domanda 56): nel teorema #operazioni.

## Dubbi e segnalazioni (non corretti)

- Domanda 18: «Quale dei seguenti numeri è irrazionale per il dato $u=2$?» con spiegazione «Il quadrato di $u$ è un quadrato perfetto, mentre il successivo non lo è»: il riferimento a $u$ e al «successivo» è poco chiaro (le opzioni non contengono $u$).
- Domanda 23: la spiegazione si interrompe a metà frase («si ricostruisce anche») nel file letto.
- Domanda 5: nella formula della spiegazione compare $(8)-7$ con una parentesi inutile.
- Domanda 66: la risposta è scritta $-\sqrt2+\sqrt3$ (ordine poco naturale, corretta).
- Scheda 7, esercizio 1: «Anche $-5$ ha quadrato $25$, ma appartiene all'insieme delle soluzioni dell'equazione $u^2=25$» è formulata in modo ambiguo.
- La resa conta 72 blocchi in italiano e 69 in inglese: la differenza c'era già nell'originale (stessi blocchi nel sorgente, il controllo di parità passa).
