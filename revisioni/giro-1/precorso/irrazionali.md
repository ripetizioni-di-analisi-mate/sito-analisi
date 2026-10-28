# Equazioni e disequazioni irrazionali: primo giro dello studente puntiglioso

## Modifiche fatte

- `teoria/precorso/irrazionali.md`, grafico nel blocco *attenzione* sulle soluzioni estranee: l'etichetta "y = √x" stava sopra la retta tratteggiata $y = x - 2$ e sembrava riferita a essa. Ora è spostata sopra la curva, lontano dalla retta. (figure)
- `teoria/precorso/irrazionali.md`, grafico nell'esempio sulle radici cubiche: la didascalia diceva che $y = \sqrt{x - 3}$ "resta sopra l'asse $x$", ma in $x = 3$ lo tocca. Ora: "non scende mai sotto l'asse $x$". (figure)
- `svolti/precorso/irrazionali/1.md`, esercizio 3: la spiegazione usava "condizione di accettabilità", termine che la teoria non definisce. Ora: "La condizione sul secondo membro, $B \geq 0$ nel sistema risolutivo di $\sqrt{A} = B$, è $2x \geq 0$". (didattica)
- `svolti/precorso/irrazionali/3.md`, esercizio 2: "La disuguaglianza è larga, quindi il secondo membro deve soddisfare $x \geq 0$" attribuiva alla disuguaglianza larga la condizione sul segno, che c'è anche con la stretta; cambia solo il tipo di disuguaglianza. Ora: "quindi la condizione sul secondo membro è quella larga $x \geq 0$ e anche il confronto tra radicando e quadrato è largo". (didattica)
- `svolti/precorso/irrazionali/5.md`, esercizio 1: "il caso del secondo membro negativo, che per la radice quadrata chiude l'esercizio senza soluzioni, qui non crea alcun ostacolo" usava verbi figurati. Ora: "un secondo membro negativo, che con la radice quadrata renderebbe l'equazione priva di soluzioni, qui è ammesso". (lingua)

Tutti i risultati di teoria, schede e tracce sono stati ricalcolati con sympy e sono corretti.

## Modifiche da fare

- Teoria e svolti: mancano le disequazioni con due radici quadrate, $\sqrt{A} < \sqrt{B}$ e $\sqrt{A} \geq \sqrt{B}$, che all'esame sono frequenti quanto le equazioni con due radici. Lo studente non sa quali condizioni di esistenza tenere. Proposta: un blocco teorema con il sistema $\sqrt{A} < \sqrt{B} \iff \begin{cases} A \geq 0 \\ A < B \end{cases}$, un esercizio in più nella scheda 2 e una traccia in `dafare`.
- Svolti, scheda 2, esercizio 3 ($\sqrt{x + 5} = 1 + \sqrt{x}$): il metodo "si isola una radice e si eleva al quadrato, poi si ripete" non è enunciato nella teoria, e lo studente non sa che cosa fare quando, dopo il primo elevamento, la radice rimasta è uguale a un'espressione che può essere negativa. Proposta: un blocco nella teoria sulle equazioni con due radici e un termine noto, con un esempio in cui il secondo elevamento richiede la condizione sul segno (per esempio $\sqrt{x + 7} - \sqrt{x} = 1$ oppure $\sqrt{2x + 3} - \sqrt{x + 1} = 1$).
- Tracce: nessuna traccia chiede una disequazione $\sqrt{A} < B$ in cui $B$ è negativo su tutto il dominio, oppure una disequazione $\sqrt{A} > B$ con soluzione ridotta al solo primo sistema. Sono i casi in cui lo studente sbaglia più spesso il sistema. Proposta: una traccia del tipo $\sqrt{x^2 + 1} < x - 5$ (impossibile) e una del tipo $\sqrt{1 - x} > x + 3$.
- Teoria, blocco *Equazione della forma √A = B*: lo studente vede nelle schede il "controllo per sostituzione" usato a ogni esercizio, ma la teoria non dice che con il sistema risolutivo il controllo è facoltativo, mentre è necessario quando si eleva al quadrato senza condizioni. Proposta: una riga nell'avviso sulle soluzioni estranee che lo dica, così il controllo negli esercizi appare come verifica e non come passaggio obbligatorio.
