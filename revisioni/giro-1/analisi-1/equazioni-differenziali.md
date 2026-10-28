# Giro 1, Analisi 1: equazioni differenziali

Riletti: teoria `src/content/teoria/analisi-1/equazioni-differenziali.md`, schede svolte 1-8, tracce 1-14. Ogni soluzione proposta (schede, tracce, esempi della teoria) è stata sostituita nell'equazione con sympy, e le condizioni iniziali dei problemi di Cauchy ricontrollate: tutto corretto.

## Modifiche fatte

- **Figure / didattica**, `teoria/analisi-1/equazioni-differenziali.md`, esempio dopo il blocco `#spazio-delle-soluzioni`. Il testo trattava $y'' - y = 0$ e $y'' + 4y = 0$, mentre la figura mostra una soluzione di $y'' + 2y' + 5y = 0$, equazione che il testo non nominava. Aggiunta al testo una frase su $y'' + 2y' + 5y = 0$ (radici $-1 \pm 2i$, integrale generale $e^{-x}\bigl(C_1 \cos(2x) + C_2 \sin(2x)\bigr)$), così la figura corrisponde all'esempio e l'esempio copre le radici complesse con parte reale non nulla. Stessa aggiunta nel file inglese.
- **Matematica (notazione)**, blocco `#cauchy-secondo-ordine`. La seconda condizione iniziale era $y'(x_0) = y_1$, ma $y_1$ e $y_2$ indicano nei blocchi precedenti e successivi le soluzioni dell'omogenea. Adesso $y'(x_0) = v_0$, coerente con "posizione e velocità" del testo. Stessa modifica nel file inglese.
- **Lingua**, blocco `#secondo-ordine-omogenea`. "Se $f \equiv 0$ l'equazione si dice omogenea; l'equazione con $f \equiv 0$ è l'omogenea associata" ripeteva due volte la stessa condizione. Adesso "l'equazione $y'' + a\, y' + b\, y = 0$ è l'omogenea associata".
- **Figure**, esempio "Un caso con risonanza". La didascalia diceva "l'ampiezza delle oscillazioni cresce nel tempo", ma la variabile è $x$ e il grafico è disegnato anche per $x < 0$. Adesso "cresce al crescere di $|x|$".

## Modifiche da fare

- **Schede svolte, variazione delle costanti.** La teoria enuncia il metodo e cita l'esempio $y'' + y = \frac{1}{\cos x}$, ma nessuna scheda e nessuna traccia lo usa. All'esame è la tipologia che separa chi ha capito il metodo da chi conosce solo la tabella. Proposta: una scheda 9 con $y'' + y = \frac{1}{\cos x}$ su $\left(-\frac{\pi}{2}, \frac{\pi}{2}\right)$ e $y'' - 2y' + y = \frac{e^x}{x}$ per $x > 0$, e una traccia.
- **Teoria, blocco `#variazione-delle-costanti`.** La formula finale è data già pronta e "si verifica per sostituzione". Molti corsi chiedono il sistema $c_1' y_1 + c_2' y_2 = 0$, $c_1' y_1' + c_2' y_2' = f$ (in graffa) da cui la formula segue con Cramer, e lo studente che lo ha visto a lezione non lo ritrova. Proposta: aggiungere il sistema e una riga che spieghi come se ne ricava la formula.
- **Scheda 7, casi del metodo di somiglianza.** Mancano il termine noto somma di due tipi diversi (per esempio $y'' - y = x + e^{2x}$, sovrapposizione), il prodotto polinomio per esponenziale ($y'' - y' = x e^{x}$) e la risonanza con radice doppia, dove il tentativo va moltiplicato per $x^2$ ($y'' - 2y' + y = e^{x}$, soluzione particolare $\frac{x^2 e^{x}}{2}$). Proposta: un esercizio 4 nella scheda 7 e due tracce.
- **Equazioni di ordine $n$.** Il blocco `#ordine-n` non ha né esercizi svolti né tracce. Proposta: una traccia come $y''' - y' = 0$ (integrale generale $C_1 + C_2 e^{x} + C_3 e^{-x}$) o $y^{(4)} - y = 0$.
- **Scheda 7, nomi dei coefficienti del tentativo.** Negli esercizi 1 e 2 il tentativo usa $a$ e $b$ ($y_p = ax + b$, $y_p = a \cos x + b \sin x$), le stesse lettere che nella teoria indicano i coefficienti dell'equazione $y'' + ay' + by = f(x)$; la tabella della teoria usa invece $a_0$, $b_0$. Proposta: uniformare con $A$, $B$ (o $a_0$, $b_0$) nella scheda 7 e nella scheda 8, esercizio 3.
