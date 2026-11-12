---
titolo: Regimi finanziari e tassi equivalenti
sommario: Interesse semplice e composto, sconto commerciale e razionale, conversione dei tassi e capitalizzazione continua.
---

## Capitale e interesse semplice

:::definizione{#semplice titolo="Capitalizzazione semplice"}
Un'operazione elementare scambia un capitale $C>0$ disponibile oggi con un montante $M$ disponibile dopo un tempo $t$. Il tempo si misura nell'unità a cui si riferisce il tasso $i$. L'**interesse** è $I=M-C$. Nel regime semplice gli interessi sono proporzionali al capitale iniziale e alla durata, quindi
$$M=C(1+it),\qquad I=Cit.$$
Con un tasso annuo e una durata di nove mesi si pone $t=\dfrac{9}{12}$. Un capitale di $2000$ euro al $4\%$ produce in nove mesi $60$ euro e un montante di $2060$ euro. Le frazioni d'anno dipendono dalla convenzione dichiarata nel problema; con giorni effettivi su anno civile si divide il numero di giorni per $365$, mentre con anno commerciale si usa $360$.
:::

## Interesse composto

:::definizione{#composto titolo="Capitalizzazione composta"}
Nel regime composto ogni periodo gli interessi si aggiungono al capitale. Il fattore di montante di un periodo è $1+i$, quindi dopo $n$ periodi
$$M=C(1+i)^n,\qquad C=M(1+i)^{-n},\qquad i>-1.$$
La convenzione esponenziale estende la formula a tempi reali $t\geq0$. Per ottenere un tempo o un tasso incognito si risolve la stessa equazione:
$$t=\frac{\log(M/C)}{\log(1+i)},\qquad i=\left(\frac{M}{C}\right)^{\frac{1}{t}}-1.$$
La prima formula richiede $i\ne0$ e un rapporto positivo. Per esempio $1000$ euro al $10\%$ diventano $1210$ euro in due anni. Il secondo anno produce $110$ euro di interesse, perché il capitale a inizio anno è $1100$ euro.
:::

## Sconto commerciale

:::definizione{#sconto-commerciale titolo="Sconto proporzionale al valore a scadenza"}
Per anticipare un importo $M$ esigibile dopo $t$ anni, il regime commerciale sottrae lo sconto $D=Mdt$, dove $d$ è il tasso annuo di sconto. Il valore attuale è
$$V=M(1-dt).$$
Per $d>0$ si richiede $dt<1$, così il valore attuale resta positivo. Con $M=5000$, $d=6\%$ e $t=\dfrac12$ si ottiene $D=150$ e $V=4850$ euro. Il tasso si applica all'importo futuro, perciò il suo significato differisce da quello di un tasso di interesse applicato al capitale iniziale.
:::

## Sconto razionale

:::definizione{#sconto-razionale titolo="Attualizzazione nel regime semplice"}
Il valore attuale razionale è il capitale che, investito nel regime semplice, produce l'importo futuro $M$. Dall'uguaglianza $M=V(1+it)$ segue
$$V=\frac{M}{1+it},\qquad D=M-V=\frac{Mit}{1+it},\qquad 1+it>0.$$
Per un solo periodo il tasso di interesse $i$ e il tasso di sconto commerciale equivalente $d$ soddisfano
$$d=\frac{i}{1+i},\qquad i=\frac{d}{1-d}.$$
Al tasso di interesse del $5\%$, il tasso di sconto equivalente su un periodo è circa $4{,}7619\%$. L'equivalenza si riferisce alla stessa durata; nel regime semplice una conversione effettuata per un anno non vale automaticamente per ogni frazione d'anno.
:::

## Tassi equivalenti

::::teorema{#tassi-equivalenti titolo="Equivalenza dei tassi nel regime composto"}
Due tassi sono **equivalenti** se producono lo stesso montante sullo stesso capitale durante lo stesso intervallo. Se $i$ è annuo e $i_m$ è il tasso di un sottoperiodo, con $m$ sottoperiodi uguali in un anno, allora
$$1+i=(1+i_m)^m,\qquad i_m=(1+i)^{\frac1m}-1.$$
Per un tasso annuo effettivo del $12\%$ il tasso mensile è $1{,}12^{\frac1{12}}-1$, circa $0{,}9489\%$.

:::dimostrazione
Un euro investito per un anno diventa $1+i$. Applicando il tasso del sottoperiodo $m$ volte diventa $(1+i_m)^m$. L'uguaglianza dei montanti dà la prima relazione; estraendo la radice positiva di ordine $m$ si ottiene la seconda.
:::
::::

## Tasso nominale convertibile

:::definizione{#tasso-nominale titolo="Tasso nominale e tasso effettivo"}
Il **tasso annuo nominale convertibile $m$ volte**, indicato con $j^{(m)}$, è $m$ volte il tasso del sottoperiodo. Quindi
$$i_m=\frac{j^{(m)}}m,\qquad i=\left(1+\frac{j^{(m)}}m\right)^m-1.$$
Con un nominale del $12\%$ convertibile mensilmente il tasso mensile è $1\%$ e l'effettivo annuo è circa $12{,}6825\%$. Le informazioni «nominale», «effettivo» e «convertibile mensilmente» determinano il fattore di montante e fanno parte dei dati del problema.
:::

## Intensità istantanea

:::definizione{#capitalizzazione-continua titolo="Capitalizzazione continua e forza di interesse"}
Per un fattore di montante positivo e derivabile $r(t)$, con $r(0)=1$, l'intensità istantanea è $\delta(t)=\dfrac{r'(t)}{r(t)}$. Integrando si ottiene
$$r(t)=\exp\left(\int_0^t\delta(s)\,ds\right).$$
Se l'intensità è costante, $M=Ce^{\delta t}$. Il tasso annuo effettivo equivalente è $i=e^\delta-1$, quindi $\delta=\log(1+i)$. Con $\delta=0{,}05$ il montante di $1000$ euro dopo due anni è $1000e^{0{,}1}$, circa $1105{,}17$ euro.
:::

## Scindibilità

::::teorema{#scindibilita titolo="Legge composta e scindibilità"}
Una legge omogenea è **scindibile** se $r(s+t)=r(s)r(t)$ per ogni $s,t\geq0$. Se $r$ è positiva, continua e $r(0)=1$, questa proprietà equivale a $r(t)=e^{\delta t}$ per una costante reale $\delta$. La capitalizzazione composta con convenzione esponenziale è quindi scindibile.

:::dimostrazione
Ponendo $g(t)=\log r(t)$, la proprietà diventa $g(s+t)=g(s)+g(t)$. La continuità implica $g(t)=t g(1)$, prima sui razionali e poi sui reali per passaggio al limite. Quindi $r(t)=e^{t g(1)}$.
:::
::::

:::esempio{titolo="Confronto con il regime semplice"}
Al $10\%$ semplice, investire direttamente per due anni dà il fattore $1{,}2$. Rinnovare dopo un anno, reinvestendo anche l'interesse allo stesso tasso semplice per un altro anno, dà $1{,}1^2=1{,}21$. Il prodotto contiene il termine aggiuntivo $i^2st$, quindi le due operazioni hanno montanti diversi.
:::
