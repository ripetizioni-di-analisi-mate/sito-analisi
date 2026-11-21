# Fisica 2° anno · Rifrazione e lenti — revisione di chiarezza

**Controllo** (`python3 strumenti/controlla_capitolo.py fisica-superiori-2 rifrazione-lenti`): `ESITO: a posto`, nessun ERRORE e nessun AVVISO.

**Parole** (conteggio dello script): italiano 2490 → 4107 (×1,65); inglese 2474 → 4264 (×1,72). Entro i limiti (1,7 e 1,8). Blocchi 22, esempi 9, figure 11, come prima. Frontmatter, titoli `##`, ancore, titoli dei blocchi e righe delle figure identici; nessun blocco nuovo, nessun contenuto tolto, dati numerici degli esempi invariati.

## Che cosa è cambiato

1. **Termini definiti alla prima comparsa**: mezzo, trasparente, adimensionale, frequenza (Hz), lunghezza d'onda, nanometro, nanosecondo, impulso, incidenza normale, monocromatica, dispersivo, rifrazione, omogeneo, interfaccia, normale, raggio incidente e trasmesso, arcoseno (con il tasto $\sin^{-1}$), goniometro, lastra a facce parallele, scarto, riflessione, riflessione totale, radente, lente, asse ottico, centro ottico, raggi parassiali, fuoco, distanza focale, piano focale, immagine reale e virtuale, prolungamento, ingrandimento trasversale, modulo, capovolta/diritta, schermo, diottria e $\mathrm{m^{-1}}$, lenti a contatto, banco ottico. Lettere greche $\nu$, $\lambda$, $\theta$, $\varphi$ con il nome; pedice $0$ di $\lambda_0$.
2. **Passaggi di calcolo aggiunti**: $v=\dfrac{c}{n}$ ricavata da $n=\dfrac{c}{v}$; $\lambda=\dfrac{\lambda_0}{n}$ in una riga; i tempi $t_A$, $t_B$ dei due tratti; isolamento di $\sin\theta_2$; $\theta_c$ ricavato da $\sin90^\circ=1$; Snell scritta sulle due facce della lastra; $q=\dfrac{fp}{p-f}$ ricavata dall'equazione delle lenti; $q$ e $M$ calcolati con i numeri in ogni esempio; $pq=fL$ con il denominatore comune.
3. **Motivi dei «quindi»**: perché il raggio si avvicina alla normale ($\dfrac{n_1}{n_2}<1$ e il seno cresce con l'angolo); perché $L=\dfrac{e}{\cos\theta_2}$ e lo scarto è $L\sin(\theta_1-\theta_2)$ (triangolo rettangolo, cateti nominati); perché la divergente dà sempre $0<M<1$; perché $q\to f$ per oggetti lontani; perché $L\geq4f$ (prodotto massimo a somma fissata, con un caso numerico).
4. **Dimostrazione dell'equazione delle lenti** in cinque passi numerati: rette dei due raggi con i punti per cui passano, intersezione, divisione per $q$ fino a $\dfrac1f=\dfrac1p+\dfrac1q$, e in più la deduzione di $M=-\dfrac{q}{p}$, che prima mancava.
5. **Casi in elenco**, uno per riga: tre regole dei raggi, segni di $p$ e $q$, quattro regimi della convergente, i due esiti a $30^\circ$ e $60^\circ$ nel blocco della soglia, le due posizioni della lente.
6. **Tolto il tono prescrittivo e da laboratorio** («conviene calcolare», «bisogna dividere», «Occorre identificare il riferimento», «nell'approssimazione qui adottata», «in questo modello»): ora sono fatti in forma impersonale.
7. **Figure**: aggiunta una frase che dice che cosa rappresentano rette, lettere e punti (interfaccia e normale, O, F, F′, I, punto C, archi di $60^\circ$ e $30^\circ$); una tabella $p$–$q$ nel blocco del grafico, con i valori già presenti nel testo.

## Com'era / Com'è ora (dimostrazione dell'equazione delle lenti)

**Com'era**

> Prendiamo la lente in $x=0$ e l'oggetto alto $h_o$ in $x=-p$. Il raggio centrale ha retta $y=-\dfrac{h_ox}{p}$. Il raggio che arriva parallelo all'asse incontra la lente a quota $h_o$ e dopo la lente segue $y=h_o(1-\dfrac{x}{f})$. All'intersezione in $x=q$, si uguagliano i due valori e si ottiene $-\dfrac{q}{p}=1-\dfrac{q}{f}$. Per un'immagine virtuale si usano le estensioni di queste stesse rette.

**Com'è ora** (estratto)

> 1. Il raggio che passa per il centro va dalla sommità all'origine senza deviare. La sua retta passa per $(0;\,0)$ e per $(-p;\,h_o)$, quindi è $y=-\dfrac{h_o}{p}\,x$.
> 2. Il raggio che arriva parallelo all'asse incontra la lente all'altezza $h_o$ e poi passa per il fuoco $(f;\,0)$. La sua retta dopo la lente è $y=h_o\left(1-\dfrac{x}{f}\right)$, che vale $h_o$ per $x=0$ e $0$ per $x=f$.
> 3. […] Uguagliando le due quote e dividendo per $h_o$ si ottiene $-\dfrac{q}{p}=1-\dfrac{q}{f}$.
> 4. Dividendo i due membri per $q$ si ha $-\dfrac{1}{p}=\dfrac{1}{q}-\dfrac{1}{f}$, cioè $\dfrac1f=\dfrac1p+\dfrac1q$.
> 5. L'altezza dell'immagine è la quota del primo raggio in $x=q$ […], quindi $M=-\dfrac{q}{p}$.

Lo studente si perdeva perché la dimostrazione si fermava a $-\dfrac{q}{p}=1-\dfrac{q}{f}$, che non è ancora la formula enunciata, e non diceva da dove venissero le due rette né perché $M=-\dfrac{q}{p}$.

## Errori nell'originale

Nessuno. Ricalcolati con Python: 600/1,5; tempi 1,2 e 1,5 ns e 2,0 ns nel vuoto; arcsin(1/3) = 19,47°; 35,26°; scarto 1,195 cm; 41,81°; 1,299; 62,46°; tutte le $q$ e $M$ degli esempi (15, −7,5, −12, −10, 30, 60, 110, 60 cm); 15 e 30 cm con somma 45 e prodotto 450.

## Aggiunte per coprire gli esercizi

- **Legge della riflessione** (angolo riflesso uguale all'incidente; domande 23, 32): nel blocco `#totale`.
- **Monocromatica** e **dispersivo** (tracce 10, 12, 9; domande 52, 83, 88): nel blocco `#indice`.
- **Velocità media** con il numero ($\simeq2{,}2\cdot10^8\,\mathrm{m/s}$; traccia 9): nell'esempio `#tempo-in-piu-mezzi`.
- **Deviazione** dalla direzione incidente ($30^\circ-19{,}5^\circ=10{,}5^\circ$; domanda 84): nell'esempio «Dall'aria al vetro».
- **Radente** (scheda 4): nel blocco `#totale`. **Piano focale** (domanda 70): nel blocco `#lenti`.
- **Lenti a contatto** con la formula $D=D_1+D_2$ scritta (schede 8, domande 46-48, 80-81, 87).

## Segnalazioni su schede e domande (non corrette)

- Domanda 16: la formula $\dfrac{\dfrac{c}{n}_1}{\dfrac{c}{n}_2}$ ha i pedici fuori posto (dovrebbe essere $\dfrac{c/n_1}{c/n_2}$ in colonna).
- Domande 72, 73, 84: frazioni in linea con la barra ($f/(p-f)$, $M=f/(f-p)$, $\sin\theta_2=1/2$).
- Schede 3, 4 (esercizio 1) e domande 3, 4: formula in stile sympy con $\dfrac{180\arcsin(\ldots)}{\pi}$ e una $\alpha$ mai definita al posto di $\theta_1$; poco leggibile per uno studente del secondo anno.

## Dubbi rimasti

- Dato reale aggiunto: la luce nell'aria è più lenta che nel vuoto di circa tre parti su diecimila ($n_{\mathrm{aria}}\simeq1{,}0003$): vero.
- Nella teoria il segno di $h_i$ (positivo sopra l'asse) è dichiarato ora esplicitamente, come lo usano schede e domande.
- Inglese: grafia britannica (metre, centre, dioptre, colour), come il file esistente; «omogeneo» reso con *uniform* come nell'originale inglese. Non ho fatto la build né guardato le figure rese; lo script ha reso entrambi i file senza errori (324 formule, 29 figure/svg ciascuno).
