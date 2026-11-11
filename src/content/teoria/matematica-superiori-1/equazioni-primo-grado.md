---
titolo: "Equazioni di primo grado"
sommario: "Principi di equivalenza, soluzioni, equazioni con frazioni e traduzione dei problemi."
---

:::percorso
Il calcolo con polinomi permette di trasformare espressioni mantenendo il loro valore. Nelle equazioni si cerca invece quali valori rendono vera un’uguaglianza. Il metodo richiede di conservare le soluzioni a ogni passaggio e di controllare il risultato nel testo iniziale.
:::

## Equazioni e principi di equivalenza

:::teorema{#equivalenza titolo="Trasformazioni che conservano le soluzioni"}
Un’**equazione** è un’uguaglianza contenente una o più incognite. Una **soluzione** è un valore che rende l’uguaglianza vera e per cui tutte le espressioni sono definite. Due equazioni sono equivalenti se hanno lo stesso insieme di soluzioni.

Aggiungere o sottrarre la stessa quantità a entrambi i membri conserva l’uguaglianza. Moltiplicare o dividere entrambi i membri per lo stesso numero non nullo conserva le soluzioni. Per esempio $3x+2=11$ equivale a $3x=9$ e quindi a $x=3$.

Dividere per un’espressione contenente l’incognita richiede di verificare che sia non nulla. Senza tale controllo si possono perdere soluzioni.
:::

## Forma normale e soluzione

:::teorema{#lineari titolo="L’equazione ax uguale a b"}
Dopo la riduzione, un’equazione di primo grado si presenta come $ax=b$, con $a\ne0$. La soluzione è

$$
x=\frac ba.
$$

Per esempio $5x-4=2x+8$ diventa $3x=12$, quindi $x=4$.

Il trasporto di un termine è una forma abbreviata dell’aggiunta del suo opposto a entrambi i membri. Il segno cambia perché si esegue quella stessa operazione sui due membri. La verifica sostituisce la soluzione nell’equazione iniziale: per $x=4$, entrambi i membri dell’esempio valgono $16$.
:::

## Equazioni con raggruppamenti

:::esempio{#parentesi titolo="Sviluppare e raccogliere i termini simili"}
Nell’equazione $2(x-3)+4=3x-5$ si applica prima la distributiva:

$$
\begin{aligned}
2x-6+4&=3x-5\\
2x-2&=3x-5\\
3&=x.
\end{aligned}
$$

Nell’ultimo passaggio si è sottratto $2x$ e aggiunto $5$ a entrambi i membri. La verifica dà $2(3-3)+4=4$ e $3\cdot3-5=4$.

Un segno meno davanti a un raggruppamento cambia il segno di tutti i suoi termini. Per questo motivo è utile completare lo sviluppo prima di riunire i termini numerici.
:::

## Denominatori numerici e denominatori letterali

:::teorema{#frazioni titolo="Eliminare i denominatori nel dominio ammesso"}
Con soli denominatori numerici non nulli, si può moltiplicare ogni termine dei due membri per il loro minimo comune multiplo. Da $\dfrac x2-\dfrac x3=4$ si ottiene $3x-2x=24$, quindi $x=24$.

Con denominatori letterali si scrivono prima le condizioni di esistenza. Per

$$
\frac{x-3}{x+1}=\frac13,\qquad x\ne-1,
$$

moltiplicando per $3(x+1)$ si ottiene $3x-9=x+1$. La soluzione è $x=5$, che rispetta la condizione iniziale. Un candidato che annullasse un denominatore andrebbe escluso, anche se ottenuto da un’equazione trasformata.
:::

## Equazioni impossibili e identità

:::osservazione{#classificazione titolo="Quando l’incognita scompare"}
Dopo la riduzione può comparire $0x=b$. Se $b\ne0$, l’equazione è **impossibile**, perché nessun numero moltiplicato per zero restituisce un numero non nullo. Per esempio $2(x+1)=2x+3$ porta a $2=3$.

Se si ottiene $0x=0$, l’uguaglianza è un’**identità** nel dominio iniziale. Per esempio $3(x-2)=3x-6$ vale per ogni reale. In un’equazione con frazioni algebriche, un’identità vale soltanto per i valori che non erano esclusi dai denominatori.

Un’equazione determinata ha invece una soluzione unica; per la forma $ax=b$ questo accade quando $a\ne0$.
:::

## Problemi e formule inverse

:::esempio{#problemi titolo="Scegliere l’incognita e controllare il contesto"}
Un servizio costa $5$ euro fissi più $3$ euro per attività. Un totale di $26$ euro è descritto da $5+3x=26$, dove x è il numero di attività. Si ottiene $x=7$. Il risultato è un intero non negativo, come richiede il problema.

Se la somma di due interi consecutivi è $19$, indicando il minore con x, il successivo è $x+1$. L’equazione $x+(x+1)=19$ dà $x=9$, quindi i numeri sono $9$ e $10$.

Isolare una lettera in una formula segue lo stesso metodo. Da $s=3t+2$ si ricava $t=\dfrac{s-2}{3}$ sottraendo due e dividendo per tre.
:::
