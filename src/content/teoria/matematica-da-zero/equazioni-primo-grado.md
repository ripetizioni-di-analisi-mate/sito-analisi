---
titolo: Equazioni di primo grado e problemi
sommario: Che cos'è un'equazione e come si controlla una soluzione, come si risolvono con i principi di equivalenza le equazioni di primo grado intere, con le frazioni e fratte, quando un'equazione è impossibile o indeterminata, come si ricavano le formule inverse e come si risolve un problema con un'equazione.
---

## Uguaglianze ed equazioni

:::definizione{#uguaglianza-e-identita titolo="Uguaglianza e identità"}
Un'**uguaglianza** è una scrittura formata da due espressioni separate dal segno $=$. L'espressione a sinistra del segno si chiama **primo membro**, quella a destra si chiama secondo membro. Un'uguaglianza tra numeri può essere vera o falsa. Per esempio $3 + 4 = 7$ è vera, mentre $2 \cdot 5 = 12$ è falsa, perché $2 \cdot 5 = 10$.

Un'uguaglianza tra espressioni con le lettere che è vera per *ogni* valore delle lettere si chiama **identità**. In parole semplici, un'identità resta vera qualunque numero si metta al posto delle lettere. Per esempio $2\,(x + 1) = 2x + 2$ è un'identità, per la proprietà distributiva. Con $x = 5$ i due membri valgono entrambi $12$, e con $x = -3$ valgono entrambi $-4$.
:::

:::definizione{#equazione titolo="Equazione"}
Un'**equazione** è un'uguaglianza tra due espressioni in cui compare un numero sconosciuto. Il numero sconosciuto si chiama **incognita** e si indica di solito con la lettera $x$. In parole semplici, un'equazione è un'uguaglianza in cui si cerca quale numero mettere al posto di $x$ perché l'uguaglianza sia vera.

Nell'equazione $2x + 3 = 9$ il primo membro è $2x + 3$ e il secondo membro è $9$. Con $x = 1$ il primo membro vale $2 \cdot 1 + 3 = 5$, quindi l'uguaglianza $5 = 9$ è falsa. Con $x = 3$ il primo membro vale $2 \cdot 3 + 3 = 9$, quindi l'uguaglianza $9 = 9$ è vera.
:::

:::definizione{#soluzione-e-verifica titolo="Soluzione e verifica"}
Una **soluzione** di un'equazione è un numero che, messo al posto dell'incognita, rende vera l'uguaglianza. **Risolvere** un'equazione vuol dire trovare tutte le sue soluzioni. Il controllo di una soluzione si chiama **verifica**. Si sostituisce il numero in entrambi i membri, si calcolano i due valori e si controlla che siano uguali.

Per l'equazione $2x + 3 = 9$ il numero $3$ è una soluzione, perché $2 \cdot 3 + 3 = 9$. Il numero $4$ non è una soluzione, perché $2 \cdot 4 + 3 = 11$ e $11$ è diverso da $9$. La verifica serve a controllare il risultato alla fine di ogni esercizio.
:::

:::esempio{titolo="Verifica con l'incognita in entrambi i membri"}
Si controlla se $x = 3$ è soluzione dell'equazione $5x - 4 = 3x + 2$. Il primo membro vale $5 \cdot 3 - 4 = 15 - 4 = 11$. Il secondo membro vale $3 \cdot 3 + 2 = 9 + 2 = 11$. I due valori sono uguali, quindi $x = 3$ è una soluzione.

Con $x = 2$ il primo membro vale $10 - 4 = 6$ e il secondo vale $6 + 2 = 8$. I due valori sono diversi, perciò $x = 2$ non è una soluzione.
:::

## Principi di equivalenza

:::definizione{#equazioni-equivalenti titolo="Equazioni equivalenti"}
Due equazioni sono **equivalenti** se hanno le stesse soluzioni. Per esempio $2x + 3 = 9$ e $x = 3$ sono equivalenti, perché entrambe hanno come unica soluzione il numero $3$.

Per risolvere un'equazione la si trasforma in equazioni equivalenti sempre più semplici. Si arriva così a una scrittura come $x = 3$, in cui la soluzione si legge subito. Le trasformazioni permesse sono descritte dai due principi di equivalenza.
:::

:::osservazione{#bilancia titolo="L'immagine della bilancia"}
Un'equazione si può pensare come una bilancia a due piatti in equilibrio. Sul piatto di sinistra c'è il primo membro, su quello di destra c'è il secondo, e l'equilibrio corrisponde al segno $=$. Nell'equazione $2x + 3 = 9$ ogni scatola pesa $x$ chilogrammi e ogni quadratino pesa $1$ kg.

::grafico{assi=0 uguale=1 poligoni="-0.6,0 0.6,0 0,2;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5" linee="-2,0 2,0;-5,2 5,2;-4.5,2 -4.5,2.5;4.5,2 4.5,2.5;-6.8,2.5 -2.2,2.5;2.2,2.5 6.8,2.5;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5 -6.6,2.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5 -5.45,2.5;-4.3,2.5 -3.7,2.5 -3.7,3.1 -4.3,3.1 -4.3,2.5;-3.6,2.5 -3,2.5 -3,3.1 -3.6,3.1 -3.6,2.5;-2.9,2.5 -2.3,2.5 -2.3,3.1 -2.9,3.1 -2.9,2.5;2.76,2.5 3.36,2.5 3.36,3.1 2.76,3.1 2.76,2.5;3.48,2.5 4.08,2.5 4.08,3.1 3.48,3.1 3.48,2.5;4.2,2.5 4.8,2.5 4.8,3.1 4.2,3.1 4.2,2.5;4.92,2.5 5.52,2.5 5.52,3.1 4.92,3.1 4.92,2.5;5.64,2.5 6.24,2.5 6.24,3.1 5.64,3.1 5.64,2.5;3.12,3.1 3.72,3.1 3.72,3.7 3.12,3.7 3.12,3.1;3.84,3.1 4.44,3.1 4.44,3.7 3.84,3.7 3.84,3.1;4.56,3.1 5.16,3.1 5.16,3.7 4.56,3.7 4.56,3.1;5.28,3.1 5.88,3.1 5.88,3.7 5.28,3.7 5.28,3.1" etichette="-6.22,2.82,x;-5.07,2.82,x" xmin=-7.5 xmax=7.5 ymin=-0.5 ymax=4.3 titolo="La bilancia in equilibrio rappresenta l'equazione $2x + 3 = 9$. Sul piatto di sinistra ci sono $2$ scatole di peso $x$ e $3$ pesi da $1$ kg, su quello di destra $9$ pesi da $1$ kg"}

La bilancia resta in equilibrio se si fa la stessa cosa su entrambi i piatti. Si possono togliere $3$ pesi da $1$ kg a sinistra e $3$ a destra. Sul piatto di sinistra restano le due scatole e su quello di destra restano $6$ kg, quindi l'equazione diventa $2x = 6$.

::grafico{assi=0 uguale=1 poligoni="-0.6,0 0.6,0 0,2;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5" linee="-2,0 2,0;-5,2 5,2;-4.5,2 -4.5,2.5;4.5,2 4.5,2.5;-6.8,2.5 -2.2,2.5;2.2,2.5 6.8,2.5;-6.6,2.5 -5.6,2.5 -5.6,3.5 -6.6,3.5 -6.6,2.5;-5.45,2.5 -4.45,2.5 -4.45,3.5 -5.45,3.5 -5.45,2.5;2.76,2.5 3.36,2.5 3.36,3.1 2.76,3.1 2.76,2.5;3.48,2.5 4.08,2.5 4.08,3.1 3.48,3.1 3.48,2.5;4.2,2.5 4.8,2.5 4.8,3.1 4.2,3.1 4.2,2.5;4.92,2.5 5.52,2.5 5.52,3.1 4.92,3.1 4.92,2.5;5.64,2.5 6.24,2.5 6.24,3.1 5.64,3.1 5.64,2.5;4.2,3.1 4.8,3.1 4.8,3.7 4.2,3.7 4.2,3.1" etichette="-6.22,2.82,x;-5.07,2.82,x" xmin=-7.5 xmax=7.5 ymin=-0.5 ymax=4.3 titolo="Dopo aver tolto $3$ pesi da $1$ kg da entrambi i piatti la bilancia resta in equilibrio, e rappresenta l'equazione $2x = 6$"}

Ora si può dimezzare il contenuto di entrambi i piatti. A sinistra resta una scatola e a destra restano $3$ kg, perciò ogni scatola pesa $3$ kg e la soluzione è $x = 3$.
:::

::::teorema{#primo-principio titolo="Primo principio di equivalenza"}
Se si aggiunge o si toglie lo stesso numero, oppure la stessa espressione con la $x$, a entrambi i membri di un'equazione, si ottiene un'equazione equivalente.

Il principio serve a far sparire un numero da un membro. Nell'equazione $x - 5 = 2$ si aggiunge $5$ a entrambi i membri, e si ottiene $x - 5 + 5 = 2 + 5$, cioè $x = 7$.

:::dimostrazione
Si ragiona sull'equazione $x - 5 = 2$ e sulla sua soluzione $x = 7$. Con $x = 7$ i due membri sono lo stesso numero, perché $7 - 5 = 2$. Aggiungendo $5$ a due numeri uguali si ottengono ancora due numeri uguali, quindi $7$ è anche soluzione di $x - 5 + 5 = 2 + 5$. Il ragionamento vale per qualunque soluzione e per qualunque numero aggiunto.

Si può anche tornare indietro, perché togliendo $5$ dai due membri della nuova equazione si ritrova quella di partenza. Perciò anche ogni soluzione della nuova equazione è soluzione di quella di partenza, e le due equazioni sono equivalenti.
:::
::::

:::teorema{#regola-del-trasporto titolo="Regola del trasporto"}
In un'equazione un termine si può spostare da un membro all'altro cambiandogli il segno. In parole semplici, un termine che passa dall'altra parte del segno $=$ cambia segno.

La regola viene dal primo principio. Nell'equazione $5x - 4 = 3x + 2$ si aggiunge $4$ a entrambi i membri e si toglie $3x$ a entrambi i membri:
$$
\begin{aligned}
5x - 4 + 4 - 3x &= 3x + 2 + 4 - 3x \\[6pt]
5x - 3x &= 2 + 4 \\[6pt]
2x &= 6 .
\end{aligned}
$$
Il termine $-4$ è sparito dal primo membro ed è comparso come $+4$ nel secondo. Il termine $3x$ è sparito dal secondo membro ed è comparso come $-3x$ nel primo. Con la regola si scrive subito la seconda riga, senza passare dalla prima.
:::

:::teorema{#secondo-principio titolo="Secondo principio di equivalenza"}
Se si moltiplicano o si dividono entrambi i membri di un'equazione per lo stesso numero *diverso da zero*, si ottiene un'equazione equivalente.

Il principio vale perché due numeri uguali, moltiplicati per lo stesso numero, danno ancora due numeri uguali; dividendo poi per quel numero si torna all'equazione di partenza. Serve a eliminare il numero che moltiplica la $x$. Dall'equazione $2x = 6$, dividendo entrambi i membri per $2$, si ottiene $x = 3$.
:::

:::esempio{titolo="Quattro equazioni risolte con i principi"}
- Nell'equazione $x + 7 = 12$ si toglie $7$ da entrambi i membri, quindi $x = 12 - 7 = 5$.
- Nell'equazione $4x = 20$ si dividono entrambi i membri per $4$, quindi $x = \dfrac{20}{4} = 5$.
- Nell'equazione $\dfrac{x}{2} = 6$ si moltiplicano entrambi i membri per $2$, quindi $x = 12$.
- Nell'equazione $-3x = 12$ si dividono entrambi i membri per $-3$, quindi $x = \dfrac{12}{-3} = -4$. La verifica dà $-3 \cdot (-4) = 12$, per la regola dei segni.
:::

:::attenzione
Moltiplicare entrambi i membri per zero non dà un'equazione equivalente. L'equazione $x = 3$ ha come unica soluzione il numero $3$. Moltiplicando per $0$ si ottiene $0 \cdot x = 0 \cdot 3$, cioè $0 = 0$, che è vera per ogni $x$. Per esempio $x = 5$ è soluzione della nuova equazione e non di quella di partenza.
:::

## Equazioni intere di primo grado

:::definizione{#equazione-primo-grado titolo="Equazione intera di primo grado"}
Un'equazione si dice **intera** se l'incognita non compare in nessun denominatore. Un'equazione intera è **di primo grado** se, svolti i calcoli, si può scrivere nella forma
$$
a\,x = b ,
$$
dove $a$ e $b$ sono numeri. In parole semplici, dopo i calcoli la $x$ compare solo con esponente $1$.

Per esempio $5\,(x - 2) = 2\,(x + 4) + 3$ è un'equazione intera di primo grado. L'equazione $(x + 3)^2 = x^2 + 21$ contiene $x^2$, ma è anch'essa di primo grado, perché il termine $x^2$ compare in entrambi i membri e con il primo principio si toglie. L'equazione $\dfrac{3}{x} = 1$ invece non è intera, perché la $x$ sta al denominatore.
:::

:::teorema{#risoluzione-equazione-intera titolo="Risoluzione di un'equazione intera"}
Un'equazione intera di primo grado si risolve in quattro passaggi.

1. Si svolgono i prodotti, con la proprietà distributiva e i prodotti notevoli.
2. Con la regola del trasporto si portano i termini con la $x$ al primo membro e i numeri al secondo.
3. Si sommano i termini simili e si arriva alla forma $a\,x = b$.
4. Se $a \neq 0$, si dividono entrambi i membri per $a$ con il secondo principio, e si ottiene $x = \dfrac{b}{a}$.

Per esempio, per l'equazione $7x - 5 = 4x + 10$ si ha
$$
\begin{aligned}
7x - 4x &= 10 + 5 \\[6pt]
3x &= 15 \\[6pt]
x &= 5 .
\end{aligned}
$$
La verifica dà $7 \cdot 5 - 5 = 30$ e $4 \cdot 5 + 10 = 30$, quindi l'equazione ha soluzione $x = 5$.
:::

:::esempio{titolo="Equazione con i prodotti"}
Si risolve $5\,(x - 2) = 2\,(x + 4) + 3$. Con la proprietà distributiva si svolgono i prodotti, poi si trasportano i termini:
$$
\begin{aligned}
5x - 10 &= 2x + 8 + 3 \\[6pt]
5x - 2x &= 11 + 10 \\[6pt]
3x &= 21 \\[6pt]
x &= 7 .
\end{aligned}
$$
La verifica dà $5 \cdot (7 - 2) = 25$ al primo membro e $2 \cdot (7 + 4) + 3 = 22 + 3 = 25$ al secondo, quindi l'equazione ha soluzione $x = 7$.
:::

:::esempio{titolo="Equazione con un prodotto notevole"}
Si risolve $(x + 3)^2 = x^2 + 21$. Il quadrato di un binomio è $(x + 3)^2 = x^2 + 6x + 9$, come si è visto nell'argomento sui monomi e polinomi. Quindi
$$
\begin{aligned}
x^2 + 6x + 9 &= x^2 + 21 \\[6pt]
6x &= 21 - 9 \\[6pt]
6x &= 12 \\[6pt]
x &= 2 .
\end{aligned}
$$
Nel secondo passaggio il termine $x^2$ è stato tolto da entrambi i membri con il primo principio. La verifica dà $(2 + 3)^2 = 25$ e $4 + 21 = 25$.
:::

:::esempio{titolo="Soluzione negativa o frazionaria"}
La soluzione può essere un numero negativo o una frazione. Si risolve $2x + 9 = 5x + 7$:
$$
\begin{aligned}
2x - 5x &= 7 - 9 \\[6pt]
-3x &= -2 \\[6pt]
x &= \frac{-2}{-3} = \frac{2}{3} .
\end{aligned}
$$
Il quoziente di due numeri negativi è positivo, per la regola dei segni. La verifica dà $2 \cdot \dfrac{2}{3} + 9 = \dfrac{4}{3} + \dfrac{27}{3} = \dfrac{31}{3}$ e $5 \cdot \dfrac{2}{3} + 7 = \dfrac{10}{3} + \dfrac{21}{3} = \dfrac{31}{3}$.
:::

:::attenzione
Un segno meno davanti a un'espressione cambia il segno di *ogni* termine dell'espressione. Nell'equazione $12 - (x - 3) = 2x$ si ha $-(x - 3) = -x + 3$, quindi $12 - x + 3 = 2x$, cioè $15 = 3x$ e $x = 5$. Chi scrive $12 - x - 3 = 2x$ trova $x = 3$, che non supera la verifica, perché $12 - (3 - 3) = 12$ mentre $2 \cdot 3 = 6$.
:::

:::osservazione{#lettura-grafica titolo="Le soluzioni viste su un grafico"}
Ogni membro di un'equazione di primo grado, come $5x - 4$ oppure $3x + 2$, si può disegnare come una retta, nel modo descritto nell'argomento sul piano cartesiano e la retta. La soluzione è il valore di $x$ in cui le due rette si incontrano, perché in quel punto i due membri hanno lo stesso valore.

::grafico{f="5*x-4;3*x+2" punti="3,11,pieno" segmenti="3,0,3,11" xmin=-1 xmax=6 ymin=-8 ymax=24 legenda="y = 5x - 4;y = 3x + 2" titolo="Le rette $y = 5x - 4$ e $y = 3x + 2$ si incontrano nel punto $(3, 11)$, quindi l'equazione $5x - 4 = 3x + 2$ ha soluzione $x = 3$"}

:::

## Equazioni con le frazioni

:::teorema{#equazioni-con-denominatori titolo="Eliminazione dei denominatori"}
Se in un'equazione intera compaiono frazioni con denominatori numerici, si moltiplicano *tutti* i termini di entrambi i membri per il minimo comune multiplo dei denominatori. Il minimo comune multiplo è diverso da zero, quindi per il secondo principio l'equazione ottenuta è equivalente a quella di partenza, e non contiene più frazioni.

Per esempio, nell'equazione
$$
\frac{x}{2} + \frac{x}{3} = 5
$$
il minimo comune multiplo dei denominatori è $\operatorname{mcm}(2, 3) = 6$. Poiché $6 \cdot \dfrac{x}{2} = 3x$ e $6 \cdot \dfrac{x}{3} = 2x$, si ottiene
$$
\begin{aligned}
3x + 2x &= 30 \\[6pt]
5x &= 30 \\[6pt]
x &= 6 .
\end{aligned}
$$
La verifica dà $\dfrac{6}{2} + \dfrac{6}{3} = 3 + 2 = 5$.
:::

:::esempio{titolo="Numeratori con più termini"}
Si risolve
$$
\frac{x + 4}{3} - \frac{x - 1}{2} = 1 .
$$
Il minimo comune multiplo dei denominatori è $6$. Moltiplicando per $6$, il primo termine diventa $2\,(x + 4)$ e il secondo diventa $3\,(x - 1)$. Il $3$ moltiplica entrambi i termini del numeratore $x - 1$. Il segno meno davanti alla frazione cambia poi il segno di entrambi i termini:
$$
\begin{aligned}
2\,(x + 4) - 3\,(x - 1) &= 6 \\[6pt]
2x + 8 - 3x + 3 &= 6 \\[6pt]
-x &= 6 - 11 \\[6pt]
-x &= -5 \\[6pt]
x &= 5 .
\end{aligned}
$$
L'ultimo passaggio si ottiene moltiplicando entrambi i membri per $-1$. La verifica dà $\dfrac{9}{3} - \dfrac{4}{2} = 3 - 2 = 1$.
:::

:::attenzione
Il minimo comune multiplo moltiplica anche i termini senza denominatore. Nell'equazione $\dfrac{x}{2} + \dfrac{x}{3} = 5$ chi scrive $3x + 2x = 5$ trova $x = 1$. La verifica mostra l'errore, perché $\dfrac{1}{2} + \dfrac{1}{3} = \dfrac{5}{6}$, che è diverso da $5$.
:::

## Equazioni determinate, impossibili e indeterminate

:::teorema{#tre-casi titolo="Equazioni determinate, impossibili e indeterminate"}
Svolti i calcoli, un'equazione di primo grado assume la forma $a\,x = b$. Si presentano tre casi.

- Se $a \neq 0$, l'equazione è **determinata**. Ha una sola soluzione, $x = \dfrac{b}{a}$.
- Se $a = 0$ e $b \neq 0$, l'equazione è **impossibile**. Si ha $0 \cdot x = b$, e il primo membro vale $0$ per ogni $x$, quindi non è mai uguale a $b$. L'equazione non ha soluzioni.
- Se $a = 0$ e $b = 0$, l'equazione è **indeterminata**. Si ha $0 \cdot x = 0$, che è vera per ogni $x$, quindi ogni numero è soluzione. In questo caso l'equazione di partenza è un'identità.

Per esempio $4x = 8$ è determinata e ha soluzione $x = 2$, l'equazione $0 \cdot x = 7$ è impossibile e l'equazione $0 \cdot x = 0$ è indeterminata.
:::

:::esempio{titolo="Un'equazione impossibile"}
Si risolve $3\,(x + 2) - x = 2x + 1$:
$$
\begin{aligned}
3x + 6 - x &= 2x + 1 \\[6pt]
2x + 6 &= 2x + 1 \\[6pt]
2x - 2x &= 1 - 6 \\[6pt]
0 \cdot x &= -5 .
\end{aligned}
$$
L'equazione è **impossibile**. Con $x = 0$ il primo membro vale $6$ e il secondo vale $1$; con $x = 10$ valgono $26$ e $21$. Il primo membro supera sempre il secondo di $5$.

::grafico{f="2*x+6;2*x+1" xmin=-4 xmax=4 ymin=-6 ymax=14 legenda="y = 2x + 6;y = 2x + 1" titolo="Le rette $y = 2x + 6$ e $y = 2x + 1$ sono parallele e non hanno punti in comune, quindi l'equazione $2x + 6 = 2x + 1$ è impossibile"}

:::

:::esempio{titolo="Un'equazione indeterminata"}
Si risolve $4\,(x - 1) + 6 = 2\,(2x + 1)$:
$$
\begin{aligned}
4x - 4 + 6 &= 4x + 2 \\[6pt]
4x + 2 &= 4x + 2 \\[6pt]
0 \cdot x &= 0 .
\end{aligned}
$$
L'equazione è **indeterminata**, e ogni numero è soluzione. Con $x = 1$ i due membri valgono entrambi $6$, e con $x = -2$ valgono entrambi $-6$.
:::

:::attenzione
Un'equazione con soluzione $x = 0$ è determinata. Nell'equazione $3x + 4 = x + 4$ si ottiene $2x = 0$, quindi $x = \dfrac{0}{2} = 0$. La verifica dà $4 = 4$. L'equazione ha la soluzione $0$, mentre un'equazione impossibile non ha alcuna soluzione.
:::

## Equazioni fratte

:::definizione{#equazione-fratta titolo="Equazione fratta"}
Un'equazione si dice **fratta** se l'incognita compare in almeno un denominatore. Per esempio
$$
\frac{3}{x} = \frac{1}{x - 2}
$$
è un'equazione fratta. Una frazione con lo zero al denominatore non ha significato. Perciò, come si è visto nell'argomento sulla scomposizione in fattori, si scrivono le **condizioni di esistenza**, cioè le condizioni che rendono diversi da zero tutti i denominatori. In parole semplici, le condizioni di esistenza dicono quali numeri si possono mettere al posto di $x$.
:::

:::teorema{#risoluzione-equazione-fratta titolo="Risoluzione di un'equazione fratta"}
Un'equazione fratta si risolve in quattro passaggi.

1. Si scrivono le condizioni di esistenza.
2. Si moltiplicano entrambi i membri per il minimo comune multiplo dei denominatori, che con le condizioni di esistenza è diverso da zero. Si ottiene un'equazione intera.
3. Si risolve l'equazione intera.
4. Si confronta la soluzione con le condizioni di esistenza. Una soluzione che rende nullo un denominatore si **scarta**, cioè non è accettabile.

Per l'equazione $\dfrac{3}{x} = \dfrac{1}{x - 2}$ i denominatori sono $x$ e $x - 2$, e devono essere diversi da zero insieme:
$$
\begin{cases}
x \neq 0 \\
x \neq 2
\end{cases}
$$
Moltiplicando entrambi i membri per $x\,(x - 2)$ si ottiene
$$
\begin{aligned}
3\,(x - 2) &= x \\[6pt]
3x - 6 &= x \\[6pt]
2x &= 6 \\[6pt]
x &= 3 .
\end{aligned}
$$
Il numero $3$ è diverso da $0$ e da $2$, quindi è accettabile. La verifica dà $\dfrac{3}{3} = 1$ e $\dfrac{1}{3 - 2} = 1$.

::grafico{assi=0 uguale=1 linee="-1.5,0 5.5,0;5.3,0.1 5.5,0 5.3,-0.1;-1,-0.08 -1,0.08;0,-0.08 0,0.08;1,-0.08 1,0.08;2,-0.08 2,0.08;3,-0.08 3,0.08;4,-0.08 4,0.08;5,-0.08 5,0.08" punti="0,0,vuoto;2,0,vuoto;3,0,pieno" etichette="-1.12,-0.4,−1;-0.05,-0.4,0;0.95,-0.4,1;1.95,-0.4,2;2.95,-0.4,3;3.95,-0.4,4;4.95,-0.4,5;5.45,0.25,x" xmin=-1.8 xmax=5.9 ymin=-0.7 ymax=0.5 titolo="Per l'equazione $\dfrac{3}{x} = \dfrac{1}{x - 2}$ sono esclusi $x = 0$ e $x = 2$ (cerchi vuoti); la soluzione $x = 3$ (punto pieno) è diversa dai valori esclusi ed è quindi accettabile"}

:::

:::attenzione
La soluzione dell'equazione intera può essere un valore escluso. Nell'equazione $\dfrac{x}{x - 2} = \dfrac{2}{x - 2}$ la condizione di esistenza è $x \neq 2$. Moltiplicando per $x - 2$ si ottiene $x = 2$, che è proprio il valore escluso. Messo nell'equazione di partenza, il numero $2$ dà $\dfrac{2}{0}$, che non ha significato. Perciò la soluzione si scarta e l'equazione fratta è **impossibile**.
:::

:::richiamo{titolo="Differenza di quadrati"}
Per ogni valore di $a$ e di $b$ vale $a^2 - b^2 = (a + b)(a - b)$.
:::

:::esempio{titolo="Un denominatore da scomporre"}
Si risolve
$$
\frac{1}{x - 1} + \frac{1}{x + 1} = \frac{6}{x^2 - 1} .
$$
Per la differenza di quadrati $x^2 - 1 = (x - 1)(x + 1)$, quindi il minimo comune multiplo dei denominatori è $(x - 1)(x + 1)$. Questo prodotto vale zero se vale zero uno dei due fattori, perciò le condizioni di esistenza sono
$$
\begin{cases}
x \neq 1 \\
x \neq -1
\end{cases}
$$
Moltiplicando entrambi i membri per $(x - 1)(x + 1)$, il primo termine diventa $x + 1$, il secondo diventa $x - 1$ e il secondo membro diventa $6$:
$$
\begin{aligned}
(x + 1) + (x - 1) &= 6 \\[6pt]
2x &= 6 \\[6pt]
x &= 3 .
\end{aligned}
$$
Il numero $3$ soddisfa le condizioni di esistenza, quindi è accettabile. La verifica dà $\dfrac{1}{2} + \dfrac{1}{4} = \dfrac{3}{4}$ e $\dfrac{6}{8} = \dfrac{3}{4}$.
:::

## Formule inverse

:::definizione{#formule-inverse titolo="Formula inversa"}
Una formula è un'uguaglianza che lega tra loro alcune grandezze. Per esempio la velocità media $v$ di un viaggio è lo spazio percorso $s$ diviso per il tempo impiegato $t$:
$$
v = \frac{s}{t} .
$$
Quando si conoscono tutte le grandezze tranne una, quella sconosciuta si tratta come un'incognita e si ricava con i principi di equivalenza. La formula che si ottiene si chiama **formula inversa**. In parole semplici, una formula inversa dà direttamente la grandezza cercata.

Si moltiplicano entrambi i membri per $t$, che è diverso da zero, e si ottiene $s = v \cdot t$. Poi si dividono entrambi i membri per $v$, con $v \neq 0$, e si ottiene
$$
t = \frac{s}{v} .
$$
Un treno percorre $300$ km alla velocità media di $120$ km/h. Il tempo impiegato è $t = \dfrac{300}{120} = \dfrac{5}{2}$ ore, cioè $2$ ore e $30$ minuti.
:::

:::esempio{titolo="Altezza di un rettangolo"}
L'area di un rettangolo di base $b$ e altezza $h$ è $A = b \cdot h$. Dividendo entrambi i membri per $b$, che è diverso da zero, si ottiene la formula inversa $h = \dfrac{A}{b}$. Un rettangolo con area $24$ cm² e base $6$ cm ha quindi altezza $h = \dfrac{24}{6} = 4$ cm.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,4 0,4" linee="0,0 6,0 6,4 0,4 0,0" etichette="2.2,-0.7,b = 6 cm;6.3,1.9,h;2,1.9,A = 24 cm²" xmin=-1 xmax=8 ymin=-1.3 ymax=4.6 titolo="Il rettangolo ha area $A = 24$ cm² e base $b = 6$ cm, quindi la sua altezza è $h = \dfrac{24}{6} = 4$ cm"}

:::

:::esempio{titolo="Una formula con una quota fissa"}
Un taxi costa $3$ euro alla partenza più $2$ euro per ogni chilometro. Il costo di una corsa di $k$ chilometri è $C = 3 + 2k$. Per ricavare $k$ si toglie $3$ da entrambi i membri e si ottiene $C - 3 = 2k$. Poi si dividono entrambi i membri per $2$:
$$
k = \frac{C - 3}{2} .
$$
Una corsa pagata $19$ euro è quindi lunga $k = \dfrac{19 - 3}{2} = \dfrac{16}{2} = 8$ km. La verifica dà $3 + 2 \cdot 8 = 19$.
:::

## Dal testo all'equazione

:::osservazione{#impostare-un-problema titolo="Come si imposta un problema"}
Molti problemi della vita quotidiana si risolvono con un'equazione di primo grado. Il procedimento ha cinque passaggi.

1. Si sceglie l'incognita. Di solito $x$ è la quantità richiesta, oppure una quantità da cui le altre si ricavano subito. Si scrive che cosa indica $x$ e con quale unità di misura.
2. Si scrivono le altre quantità del testo usando $x$.
3. Si traduce in un'equazione la frase che lega le quantità.
4. Si risolve l'equazione.
5. Si controlla che la soluzione abbia senso nel problema e si scrive la risposta con una frase. Un numero di persone o di oggetti è un numero naturale, un'età è positiva, un prezzo e una lunghezza sono positivi.

Per esempio, se il triplo di un numero aumentato di $8$ dà $35$, si indica con $x$ il numero e si scrive $3x + 8 = 35$. Quindi $3x = 27$ e $x = 9$. La verifica dà $3 \cdot 9 + 8 = 35$.
:::

:::esempio{#traduzione-del-testo titolo="Dalle parole ai simboli"}
Alcune espressioni ricorrono spesso nei testi dei problemi.

- Il doppio, il triplo e la metà di un numero $x$ sono $2x$, $3x$ e $\dfrac{x}{2}$.
- Un numero aumentato di $5$ è $x + 5$, un numero diminuito di $4$ è $x - 4$.
- La frase "Anna ha $7$ anni più di Bruno" diventa $A = B + 7$, e la frase "Anna ha il triplo degli anni di Bruno" diventa $A = 3B$.
- Il $30\%$ di un numero $x$ è $\dfrac{30}{100}\,x$, come si è visto nell'argomento sui decimali e le percentuali.
:::

:::esempio{#numeri-consecutivi titolo="Numeri consecutivi"}
Due numeri naturali si dicono **consecutivi** se il secondo è il primo aumentato di $1$, come $15$ e $16$. Tre numeri consecutivi si scrivono quindi $x$, $x + 1$ e $x + 2$.

Si cercano tre numeri consecutivi con somma $48$. L'equazione è
$$
\begin{aligned}
x + (x + 1) + (x + 2) &= 48 \\[6pt]
3x + 3 &= 48 \\[6pt]
3x &= 45 \\[6pt]
x &= 15 .
\end{aligned}
$$
I numeri sono $15$, $16$ e $17$, e infatti $15 + 16 + 17 = 48$. Con somma $50$ si otterrebbe $3x = 47$, quindi $x = \dfrac{47}{3}$, che non è un numero naturale. Perciò nessuna terna di numeri naturali consecutivi ha somma $50$.
:::

## Problemi di età, prezzi e percorsi

:::esempio{#problemi-eta titolo="Problemi sulle età"}
Un padre ha $30$ anni e il figlio ne ha $6$. Si cerca fra quanti anni il padre avrà il triplo dell'età del figlio. Si indica con $x$ il numero di anni. Fra $x$ anni il padre avrà $30 + x$ anni e il figlio $6 + x$, perché le due età aumentano dello stesso numero. L'equazione è
$$
\begin{aligned}
30 + x &= 3\,(6 + x) \\[6pt]
30 + x &= 18 + 3x \\[6pt]
30 - 18 &= 3x - x \\[6pt]
12 &= 2x \\[6pt]
x &= 6 .
\end{aligned}
$$
Fra $6$ anni il padre avrà $36$ anni e il figlio $12$, e infatti $36 = 3 \cdot 12$.
:::

:::esempio{#problemi-prezzi titolo="Problemi con i prezzi"}
Un gruppo compra $12$ biglietti per il cinema e spende $81$ euro. Un biglietto intero costa $8$ euro e un biglietto ridotto costa $5$ euro. Si indica con $x$ il numero dei biglietti interi, quindi i ridotti sono $12 - x$. La spesa per ogni tipo di biglietto è il numero dei biglietti per il prezzo di uno, perciò
$$
\begin{aligned}
8x + 5\,(12 - x) &= 81 \\[6pt]
8x + 60 - 5x &= 81 \\[6pt]
3x &= 21 \\[6pt]
x &= 7 .
\end{aligned}
$$
Il numero $7$ è un numero naturale compreso tra $0$ e $12$, quindi la soluzione ha senso. I biglietti interi sono $7$ e i ridotti sono $5$; infatti $56 + 25 = 81$. Scegliendo come incognita il numero dei ridotti si ottiene un'equazione diversa con la stessa risposta.

Con lo stesso metodo si risolvono i problemi sugli sconti. Un paio di scarpe scontato del $30\%$ costa $56$ euro. Se $x$ è il prezzo di partenza, lo sconto è $\dfrac{30}{100}\,x$ e il prezzo scontato è $x - \dfrac{30}{100}\,x = \dfrac{70}{100}\,x$. Dall'equazione $\dfrac{70}{100}\,x = 56$ si ottiene $x = 56 \cdot \dfrac{100}{70} = 80$ euro.
:::

:::esempio{#problemi-percorsi titolo="Problemi sui percorsi"}
Due paesi A e B distano $15$ km. Anna parte a piedi da A verso B a $4$ km/h e, nello stesso momento, Bruno parte in bicicletta da B verso A a $16$ km/h. Si cerca dopo quanto tempo si incontrano. Si indica con $x$ il tempo in ore. Per la formula $s = v \cdot t$, in $x$ ore Anna percorre $4x$ km e Bruno $16x$ km. Quando si incontrano, la somma dei due tratti percorsi è uguale alla distanza tra i paesi, quindi
$$
\begin{aligned}
4x + 16x &= 15 \\[6pt]
20x &= 15 \\[6pt]
x &= \frac{15}{20} = \frac{3}{4} .
\end{aligned}
$$
Si incontrano dopo $\dfrac{3}{4}$ di ora, cioè dopo $45$ minuti. Anna ha percorso $4 \cdot \dfrac{3}{4} = 3$ km e Bruno $16 \cdot \dfrac{3}{4} = 12$ km, e infatti $3 + 12 = 15$.

::grafico{assi=0 uguale=1 linee="0,0 15,0;0,-0.25 0,0.25;15,-0.25 15,0.25;3,-0.15 3,0.15" punti="0,0,pieno;15,0,pieno;3,0,pieno" vettori="0.3,1.3,2.6,1.3;14.7,1.3,4,1.3" etichette="-0.9,0.55,paese A;13.6,0.55,paese B;1.9,0.55,incontro;0.9,-0.7,3 km;8.0,-0.7,12 km;0.4,1.65,4 km/h;10.2,1.65,16 km/h" xmin=-1.5 xmax=16.5 ymin=-1.3 ymax=2.2 titolo="Anna parte da A a $4$ km/h e Bruno da B a $16$ km/h; dopo $\dfrac{3}{4}$ di ora Anna ha percorso $3$ km e Bruno $12$ km, e i due si incontrano"}

:::
