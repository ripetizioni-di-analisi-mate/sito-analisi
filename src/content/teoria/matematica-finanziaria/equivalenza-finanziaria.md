---
titolo: Equivalenza finanziaria e valutazione dei flussi
sommario: Valore di un'operazione a una data comune, sostituzione di pagamenti, scadenza comune, scadenza media e tassi variabili.
---

## Valore a una data

:::definizione{#valore-finanziario titolo="Valore finanziario di un flusso"}
Un flusso certo è un insieme di importi $C_k$ alle scadenze $t_k$. Gli importi positivi sono entrate per il soggetto che valuta l'operazione, quelli negativi sono uscite. Nel regime composto al tasso periodale costante $i>-1$, il valore alla data $\tau$ è
$$V(\tau)=\sum_{k=1}^n C_k(1+i)^{\tau-t_k}.$$
Un importo successivo a $\tau$ si attualizza; uno precedente si capitalizza. Per valutare al tempo $2$ i flussi $100$ al tempo $1$ e $121$ al tempo $3$, con $i=10\%$, si calcola $100\cdot1{,}1+121\cdot1{,}1^{-1}=220$. Sommare direttamente importi riferiti a date diverse non determina il valore a una data comune.
:::

## Operazioni equivalenti

::::teorema{#equivalenza titolo="Equivalenza nel regime composto"}
Due flussi sono **equivalenti** al tasso $i$ se hanno lo stesso valore a una data. Nel regime composto a tasso costante l'equivalenza vale allora a ogni data.

:::dimostrazione
Per ogni flusso vale $V(\tau)=V(0)(1+i)^\tau$. Se $V_A(0)=V_B(0)$, moltiplicando per lo stesso fattore si ottiene $V_A(\tau)=V_B(\tau)$. Viceversa si divide l'uguaglianza a $\tau$ per $(1+i)^\tau>0$.
:::
::::

:::esempio
Pagare $1000$ euro oggi o $1210$ euro fra due anni è equivalente al $10\%$ composto. I due valori attuali sono entrambi $1000$ euro. Questa uguaglianza permette di sostituire pagamenti mantenendo lo stesso valore finanziario.
:::

## Capitale unico e pagamento incognito

:::definizione{#capitale-unico titolo="Sostituzione con un pagamento unico"}
Per sostituire importi positivi $C_k$ con un capitale $X$ alla scadenza $T$, si impone
$$X(1+i)^{-T}=\sum_k C_k(1+i)^{-t_k}.$$
Quindi $X=\sum_k C_k(1+i)^{T-t_k}$. Con tasso del $5\%$, debiti di $1000$ e $2000$ euro ai tempi $1$ e $2$ si sostituiscono al tempo $2$ con $1000\cdot1{,}05+2000=3050$ euro. Se uno degli importi è incognito, l'equazione resta lineare rispetto a quell'importo.
:::

## Scadenza comune

:::definizione{#scadenza-comune titolo="Scadenza di un capitale assegnato"}
Se il capitale unico $X>0$ è assegnato e il suo valore attuale deve essere $V>0$, allora
$$X(1+i)^{-T}=V,\qquad T=\frac{\log(X/V)}{\log(1+i)},\qquad i\ne0.$$
Per $i>0$ una scadenza futura richiede $X\geq V$. Se $V=1000$, $X=1210$ e $i=10\%$, la scadenza è $T=2$. Al tasso zero il valore è indipendente dalla data, quindi l'equazione richiede $X=V$ e non determina una scadenza unica.
:::

## Scadenza media

:::definizione{#scadenza-media titolo="Scadenza media finanziaria e aritmetica"}
Se il capitale sostitutivo è la somma nominale $S=\sum_k C_k$, la sua scadenza equivalente in regime composto è
$$T=\frac{\log\left(S\big/\sum_k C_k(1+i)^{-t_k}\right)}{\log(1+i)}.$$
Con importi positivi e tasso positivo, $T$ è compresa tra la prima e l'ultima scadenza. La media aritmetica ponderata $\bar t=\dfrac{\sum_k C_k t_k}{\sum_k C_k}$ coincide con la scadenza equivalente nel regime di sconto commerciale, per una valutazione a oggi e fattori tutti positivi. Nel regime composto rappresenta anche il limite della scadenza equivalente quando il tasso tende a zero. Le due formule rispondono a leggi finanziarie diverse.
:::

## Tassi diversi nei singoli periodi

:::definizione{#tassi-variabili titolo="Prodotto dei fattori periodali"}
Se il tasso del periodo $h$ è $i_h>-1$, il fattore tra il tempo $0$ e il tempo $n$ è
$$r(0,n)=\prod_{h=1}^n(1+i_h),\qquad v(0,n)=\frac1{\prod_{h=1}^n(1+i_h)}.$$
Un capitale di $1000$ euro con tassi del $2\%$, $3\%$ e $4\%$ nei tre anni diventa $1000\cdot1{,}02\cdot1{,}03\cdot1{,}04=1092{,}624$. Il tasso annuo costante equivalente è la radice di ordine tre del prodotto, meno uno. La media aritmetica dei tassi non ricostruisce in generale lo stesso montante.
:::

## Leggi a due variabili

:::definizione{#leggi-due-variabili titolo="Fattore tra due date"}
Un fattore $r(s,t)>0$ descrive il montante al tempo $t$ di un euro disponibile al tempo $s$, con $s\leq t$. La coerenza dei trasferimenti richiede
$$r(s,u)=r(s,t)r(t,u),\qquad r(t,t)=1.$$
Se esiste una funzione positiva $a(t)$ tale che $r(s,t)=\dfrac{a(t)}{a(s)}$, la proprietà è soddisfatta. Con intensità deterministica $\delta(u)$ si usa $a(t)=\exp\left(\int_0^t\delta(u)\,du\right)$. Il valore a $\tau$ di un pagamento $C$ a $t>\tau$ è $\dfrac{C}{r(\tau,t)}$.
:::

## Confronto di alternative

:::definizione{#confronto-operazioni titolo="Confronto a parità di data e convenzioni"}
Per confrontare due piani di pagamento si calcola il loro valore alla stessa data, con la stessa legge e con lo stesso punto di vista. Per il debitore, fra due flussi di soli pagamenti è meno oneroso quello con valore attuale minore. Fra pagare $1000$ euro oggi oppure $520$ fra uno e due anni, al $5\%$, il secondo piano vale
$$\frac{520}{1{,}05}+\frac{520}{1{,}05^2}\approx966{,}89.$$
Il confronto riguarda la valutazione matematica alle condizioni indicate. Costi ulteriori modificano i flussi da inserire nell'equazione; scadenze diverse richiedono comunque la medesima data di valutazione.
:::
