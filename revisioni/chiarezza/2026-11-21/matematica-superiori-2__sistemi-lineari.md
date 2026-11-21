# Matematica 2° anno · Sistemi lineari (revisione di chiarezza)

**Parole**: italiano 2314 → 3720 (×1,61); inglese 2326 → 3907 (×1,68). Controllo `controlla_capitolo.py`: ESITO a posto, nessun ERRORE né AVVISO.

## Che cosa è cambiato
1. **Definizioni alla prima comparsa** (nel blocco `#soluzione`): equazione lineare, incognita, coefficiente, termine noto, primo e secondo membro, sistema e graffa, notazione $(4;3)$, ascissa e ordinata; rette incidenti, parallele distinte, coincidenti in elenco, ciascuna con il numero di soluzioni.
2. **Metodi scritti come passi numerati** (sostituzione, tre incognite, traduzione dei problemi) e calcoli prima impliciti scritti riga per riga: $x-(7-x)=1$, la riduzione di $2x+3y=13$, la sottrazione $(10x+12y)-(9x+12y)$, il problema dei biglietti ($i=9$, $r=5$, prima solo il risultato), le due sottrazioni del sistema in tre incognite.
3. **Cramer**: spiegati matrice, riga, colonna, colonna dei termini noti, diagonale principale; $D$, $D_x$, $D_y$ descritti come «colonna sostituita» (è la frase usata da schede e domande); calcolo esplicito dei tre determinanti dell'esempio; derivazione di $Dx=D_x$ in tre righe; nella dimostrazione i prodotti sviluppati termine per termine.
4. **Riduzione**: definiti sistemi equivalenti, coefficienti opposti, passaggio reversibile, modulo (valore assoluto), minimo comune multiplo.
5. **Discussione**: definiti identità, $\mathbb R$ e $t\in\mathbb R$, insieme vuoto $\varnothing$, $\mathbb R^2$, notazione $S=\{\dots\}$, primi membri proporzionali, coefficiente angolare e intercetta; discutere un sistema, caso singolare, $\mathbb R\setminus\{2\}$.
6. **Figure descritte nel testo** (che cosa è in orizzontale e in verticale, quale punto è segnato e perché il cerchio è vuoto); righe `::grafico` identiche.
7. Il caso dominio ristretto ora mostra la scomposizione $x^2-4=(x-2)(x+2)$ invece di «prima di cancellare».

## Com'era / Com'è ora
**Com'era** (`#parametri`): «Un **parametro** è una lettera il cui valore è fissato durante la risoluzione. Per $\begin{cases}kx+y=1\\2x+y=3\end{cases}$ il determinante è $k-2$. Se $k\ne2$, sottraendo segue $x=-\dfrac2{k-2}$ e poi $y=1-kx$.»

**Com'è ora**: «Un **parametro** è una lettera diversa dalle incognite, il cui valore è fissato durante la risoluzione; a ogni valore del parametro corrisponde un sistema diverso. **Discutere** un sistema significa dire, per ogni valore del parametro, quante soluzioni ha e quali sono. Per … il determinante è $D=k\cdot1-1\cdot2=k-2$. Sottraendo la seconda equazione dalla prima si elimina $y$: $(k-2)x=1-3=-2$.» seguito dai due casi in elenco ($k\ne2$ determinato; $k=2$ con primo membro $2x+y$ uguale e termini noti $1$ e $3$, impossibile).

## Errori nell'originale
Nessun errore matematico: tutti i numeri ricalcolati (Cramer, parametri, tre incognite, tariffe, dimostrazioni sviluppate simbolicamente).

## Termini degli esercizi aggiunti in teoria
Colonna e «sostituire la colonna con i termini noti», diagonale secondaria, matrice dei coefficienti (schede 4, domande 28, 39, 47, 56); modulo e minimo comune multiplo dei moduli (dafare 10, domanda 19); primi membri proporzionali (dafare 5, 6, 14); coefficiente angolare e intercetta (scheda 5, domande 57, 66); $\mathbb R^2$, $\varnothing$, $S=\{\dots\}$, terna, variabile libera (schede 5 e 8, domande 54, 55, 72); identità (domanda 54); $\mathbb R\setminus\{3\}$ (domanda 62).

## Problemi visti in schede e domande (non corretti)
- Scheda 3, es. 1: la spiegazione ripete due volte il controllo e contiene la frase senza senso «Le frazioni hanno lo stesso valore assoluto del coefficiente di $y$».
- Scheda 2, es. 3: «Il prodotto incrociato dei coefficienti di $y$ porta al modulo sei» è oscura; ripete la verifica.
- Schede 1, 2, 4, 5, 6, 7, 8: nella spiegazione paragrafi ripetuti dopo «Il risultato è …» (stessa verifica due volte); scheda 1 es. 2 e domanda 15 usano «la parentesi»; schede 2, 5, 8 e varie domande usano «tu»/imperativi («aggiungi», «scegli», «sostituisci»).
- Scheda 8, es. 1 e domanda 8: «Le ultime due equazioni hanno determinante diverso da zero, quindi sono compatibili» (il determinante non garantisce la compatibilità con la prima equazione; il risultato è comunque giusto).
- Domande 18, 30, 46, 51: coppie scritte con la virgola, $(2, 5)$, invece del punto e virgola usato nel resto del capitolo.
- Domanda 52: «La riduzione con Cramer dà…» mescola due metodi.

## Dubbi
- Grafia inglese: il file esistente era in grafia americana (*canceling*, *Analyze*, *neighboring*), mentre schede e capitoli inglesi della materia sono in maggioranza britannici (*centre* 79 volte). Ho usato la grafia britannica nelle parole nuove (*analysed*, *centimetres*); verificare quale si vuole uniformare.
