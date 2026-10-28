# Giro 1, Analisi 1: integrali impropri

Riletti: teoria `src/content/teoria/analisi-1/integrali-impropri.md`, schede svolte 1-8, tracce 1-14. Valori e caratteri ricalcolati con sympy (integrali espliciti, limiti dei rapporti nei confronti asintotici): tutti corretti.

## Modifiche fatte

- **Figure**, `teoria/analisi-1/integrali-impropri.md`, esempio sulle aree sotto $y = \frac{1}{x}$ e $y = \frac{1}{x^2}$ (due grafici). Con `xmin=1` l'asse $y$ era disegnato in $x = 1$ e l'origine "O" compariva sovrapposta alla tacca $1$; l'asintoto $y = 0$ era una linea tratteggiata rossa sopra l'asse $x$; mancava l'area colorata di cui parla il testo. Adesso il riquadro parte da $x = -0.5$, l'area su $[1, 10]$ è colorata e il punto $(1, 1)$ è segnato. Stessa modifica nel file inglese.
- **Editoriali**, stesso esempio. Il titolo del blocco era "Le aree sottese da y = 1/x e da y = 1/x²", con frazioni in linea (i titoli dei blocchi non passano da KaTeX). Adesso "Un'area finita e un'area infinita". Stessa modifica nel file inglese.
- **Matematica**, blocco `:::attenzione` della sezione "Più punti critici". C'era "la formula fondamentale si applica quando l'integranda è integrabile su tutto l'intervallo", ma la formula fondamentale nel capitolo sugli integrali è enunciata per funzioni continue su $[a, b]$. Adesso "continua su tutto l'intervallo chiuso". Stessa modifica nel file inglese.
- **Lingua**, blocco `#convergenza-assoluta`. "converge e vale" seguito da una disuguaglianza si leggeva come "e il suo valore è". Adesso "converge e vale la disuguaglianza".
- **Editoriali**, `svolti/analisi-1/integrali-impropri/4.md`, esercizio 3 (tre occorrenze). L'esponente $e^{1/x}$ era scritto con la barra; adesso $e^{\frac{1}{x}}$. Stessa modifica nel file inglese.
- **Editoriali**, `dafare/analisi-1/integrali-impropri/14.md`, soluzione. "converge assolutamente: $|\dots| \leq \dots$" affidava il passaggio logico ai due punti; adesso "converge assolutamente, dato che …".
- **Editoriali**, `dafare/analisi-1/integrali-impropri/9.md`, soluzione. "Spezzato in $1$: vicino a $0$ …" adesso "Si spezza in $1$; vicino a $0$ …".

## Modifiche da fare

- **Schede svolte, tipologia mancante: parametro con due punti critici.** All'esame è frequente "per quali $\alpha$ converge $\int_0^{+\infty} \frac{dx}{x^{\alpha}(1 + x^2)}$", dove le condizioni in $0$ e all'infinito vanno messe a sistema ($\alpha < 1$ e $\alpha > -1$). Le schede 5 e 6 hanno il parametro con un solo punto critico, la 7 due punti critici senza parametro. Proposta: un esercizio 4 nella scheda 7 con parametro, risultato $-1 < \alpha < 1$ scritto come sistema.
- **Schede svolte, calcolo esplicito con fratti semplici o per parti.** Le schede 1 e 2 usano solo primitive immediate. Mancano integrali come $\int_1^{+\infty} \frac{dx}{x(x + 1)} = \ln 2$ (dove il limite di $\ln \frac{t}{t+1}$ richiede attenzione) o $\int_0^{+\infty} x e^{-x}\, dx = 1$. Proposta: un esercizio 4 nella scheda 1 con i fratti semplici e una traccia con l'integrazione per parti.
- **Teoria, blocco `#ordine-di-infinitesimo`.** È un blocco definizione che contiene anche il criterio di convergenza (converge se $p > 1$ …), cioè un risultato. Lo studente che cerca "il criterio dell'ordine" non lo trova tra i teoremi. Proposta: separarlo in una definizione (ordine di infinitesimo e di infinito) e un teorema "Criterio dell'ordine" con il quadro dei casi.
- **Teoria, campione logaritmico vicino a un punto al finito.** Il campione è enunciato solo per $\int_2^{+\infty} \frac{dx}{x (\ln x)^{\beta}}$; la traccia 6 usa $\int_0^{\frac{1}{2}} \frac{dx}{x \ln^2 x}$ e negli esercizi d'esame compare anche $\int_0^{\frac{1}{2}} \frac{dx}{x |\ln x|^{\beta}}$ (converge se e solo se $\beta > 1$). Proposta: aggiungere la variante in $0^{+}$ allo stesso blocco, con la sostituzione $u = -\ln x$.
- **Teoria, figura del primo blocco.** Nell'esempio iniziale l'etichetta $t$ del punto in $x = 4$ tocca la curva. Proposta: spostare il punto o usare `etichette` per mettere la $t$ sotto l'asse.
