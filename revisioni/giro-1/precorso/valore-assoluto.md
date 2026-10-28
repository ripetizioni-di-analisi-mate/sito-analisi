# Giro 1 · precorso · valore-assoluto

Rilette: teoria, 5 schede svolte, 12 tracce. Tutti i risultati (teoria, svolti, tracce) ricalcolati con sympy: nessun errore numerico.

## Modifiche fatte

1. **Matematica** · `src/content/teoria/precorso/valore-assoluto.md`, blocco `#proprieta-valore-assoluto` (disuguaglianza triangolare). C'era "l'uguaglianza vale quando $a$ e $b$ hanno lo stesso segno"; ora "l'uguaglianza vale se e solo se $ab \geq 0$". Con $a = 0$ o $b = 0$ il segno non è definito ma l'uguaglianza vale: la condizione corretta è $ab \geq 0$. Stessa correzione nel file inglese.
2. **Didattica** · stesso file, blocco `#equazioni-con-modulo`. C'era "I soli numeri con valore assoluto $k > 0$ sono $k$ e $-k$, quindi i casi sono tre": il "quindi" non regge, perché i tre casi nascono dal segno di $k$. Ora: "I casi da distinguere dipendono dal segno di $k$" e la motivazione ($k$ e $-k$ sono i soli numeri con valore assoluto $k$) è spostata nel caso $k > 0$, dove serve. Stessa correzione nel file inglese.
3. **Figure / editoriale** · stesso file, figura di $y = |x|$ nel blocco `#definizione-valore-assoluto`. La didascalia era in testo semplice ("y = |x|: per x ≥ 0 coincide…", con i due punti al posto del connettivo) e si vedeva in un carattere diverso da tutte le altre; ora "$y = |x|$ coincide con $y = x$ per $x \geq 0$ e con $y = -x$ per $x < 0$" con le formule in KaTeX. Stessa modifica nel file inglese; figura ridisegnata e controllata.

## Modifiche da fare

1. **Teoria, sezione "Due valori assoluti: lo studio per zone"** · Lo studente incontra spesso all'esame un *solo* modulo non isolato, per esempio $x\,|x - 1| > 2$ oppure $|x - 2| + x = 4$, e la teoria presenta lo studio per casi solo "quando compaiono due o più valori assoluti". Proposta: generalizzare l'enunciato del blocco `#due-valori-assoluti` a "uno o più moduli non isolati" e aggiungere un esempio con un solo modulo (due zone).
2. **Svolti, nuova scheda** · Manca la tipologia delle equazioni/disequazioni in cui il modulo compare come incognita ausiliaria, per esempio $x^2 - 3|x| + 2 = 0$ (sostituzione $t = |x|$, oppure uso della parità). È frequente nei test e la teoria non la nomina. Proposta: scheda 6 "Equazioni con la sostituzione $t = |x|$", con 2-3 esercizi, e un esempio breve in teoria.
3. **Svolti/tracce, disequazioni fratte con modulo** · Nessun esercizio tratta un modulo dentro una frazione o un prodotto, per esempio $\dfrac{|x| - 2}{x - 1} \geq 0$, dove lo studente deve studiare il segno del numeratore con il modulo. Proposta: un esercizio nella scheda 5 o una traccia 13.
4. **Tracce** · Il confronto di due moduli per elevamento al quadrato ($|A| > |B|$) è svolto nella scheda 5 ma non ha una traccia corrispondente. Proposta: traccia 13 "Disequazione tra due valori assoluti", per esempio $|x - 3| \leq |2x + 1|$ (soluzione $x \leq -4 \ \vee \ x \geq \dfrac{2}{3}$).
5. **Teoria, esempio "Modulo maggiore di un'espressione"** · È l'unico esempio della teoria senza figura, ed è quello in cui l'unione delle due semirette $x < 3$ e $x < -1$ si capisce peggio a parole. Proposta: figura con $y = |x + 3|$, la retta $y = 2x$ tratteggiata e il punto vuoto in $(3, 6)$.
6. **Versione inglese** · Il file inglese ha 1 figura contro le 15 dell'italiano (teoria e schede). Proposta: decidere se riportare le figure anche in inglese (le didascalie andrebbero tradotte).
