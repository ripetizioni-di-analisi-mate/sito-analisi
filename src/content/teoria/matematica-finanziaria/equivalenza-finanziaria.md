---
titolo: Equivalenza finanziaria e valutazione dei flussi
sommario: Valutare flussi datati, sostituire debiti e confrontare piani di pagamento con una legge finanziaria assegnata.
---

## Importi, scadenze e data focale

:::definizione{#valore-finanziario titolo="Valore finanziario di un flusso"}
Un pagamento è individuato dal suo importo e dalla data in cui avviene. Un **flusso certo** è una lista di coppie $(t_k,C_k)$, con $t_k$ data del pagamento e $C_k$ importo. Le date si misurano nella stessa unità, a partire da un'origine dichiarata. Dal punto di vista di chi valuta, $C_k>0$ indica un incasso e $C_k<0$ un esborso. Cambiando soggetto, da debitore a creditore, cambiano di segno tutti i trasferimenti che avvengono fra i due.

Sia $i>-1$ il tasso effettivo per unità di tempo, costante, e siano $q=1+i$ il fattore di montante di un periodo e $v=q^{-1}$ il corrispondente fattore di sconto. La **data focale** $\tau$ è la data alla quale si esprimono tutti gli importi. Il valore del flusso in quella data è

$$
V(\tau)=\sum_{k=1}^{n} C_k q^{\tau-t_k}.
$$

L'esponente $\tau-t_k$ è lo spostamento di data, con segno. Per $t_k<\tau$ il termine si capitalizza, per $t_k>\tau$ si attualizza e per $t_k=\tau$ rimane invariato. Gli importi trasformati si possono sommare perché sono tutti riferiti alla stessa data.
:::

:::esempio{titolo="Una data focale tra un incasso e un pagamento"}
Un'impresa incassa $100$ euro dopo un anno e paga $121$ euro dopo tre anni. La data focale è il secondo anno e il tasso effettivo annuo è il $10\%$. Dal punto di vista dell'impresa si ottiene

$$
\begin{aligned}
V(2)&=100q^{2-1}-121q^{2-3}\\[6pt]
    &=100\cdot1{,}1-\frac{121}{1{,}1}=0.
\end{aligned}
$$

::grafico{xmin=0 xmax=4 ymin=-175 ymax=175 nomi="t,C" vettori="1,0,1,100,100;3,0,3,-121,−121" punti="2,0,pieno" titolo="Il flusso originario ha un incasso di 100 euro al tempo 1 e un esborso di 121 euro al tempo 3. Il punto sull’asse indica la data focale."}

Il valore nullo significa che l'incasso al tempo $1$, lasciato investito fino al tempo $3$, è sufficiente a pagare l'esborso. Fra i due eventi trascorrono due anni, quindi il montante finale è $100q^2=121$ euro.
:::

:::osservazione
La valutazione è lineare negli importi. Se a una stessa data maturano un credito di $250$ euro e una fattura da $40$ euro, il saldo in quella data è $210$ euro. I due importi possono essere accorpati prima del trasporto perché hanno lo stesso esponente. Se invece il credito precede la fattura, i due fattori sono diversi e i singoli importi vanno valutati separatamente.
:::

## Equivalenza e cambio di data

::::teorema{#equivalenza titolo="Equivalenza nel regime composto"}
Due piani sono **finanziariamente equivalenti** rispetto a una legge assegnata e a una data se i loro valori in quella data coincidono. Nel regime composto con tasso costante $i>-1$, due piani equivalenti a una data $\tau$ sono equivalenti a ogni data $\sigma$. Anche l'ordine dei loro valori si conserva.

:::dimostrazione
Ogni pagamento del piano, trasportato da $\tau$ a $\sigma$, si moltiplica per lo stesso fattore positivo $q^{\sigma-\tau}$. Infatti

$$
C_k q^{\sigma-t_k}=q^{\sigma-\tau}C_kq^{\tau-t_k}.
$$

Sommando per $k$ si ha $V(\sigma)=q^{\sigma-\tau}V(\tau)$. Per la differenza fra due piani $A$ e $B$ vale quindi

$$
V_A(\sigma)-V_B(\sigma)=q^{\sigma-\tau}\bigl(V_A(\tau)-V_B(\tau)\bigr).
$$

Il fattore è positivo. La differenza ha perciò lo stesso segno in entrambe le date e, in particolare, si annulla in entrambe se si annulla in una.
:::
::::

:::esempio{titolo="Scelta di una data che riduce il calcolo"}
Si confrontano un pagamento di $1000$ euro oggi e un pagamento di $1210$ euro fra due anni, al $10\%$ composto annuo. Prendendo come data focale il secondo anno, il primo piano vale $1000q^2=1210$ euro e il secondo vale direttamente $1210$ euro. Alla data intermedia i due piani varrebbero $1100$ euro ciascuno. La data focale si può scegliere fra le scadenze già presenti, così almeno un importo compare senza trasformazioni.
:::

:::attenzione
L'indipendenza dalla data richiede una legge scindibile. Si consideri l'interesse semplice al $10\%$ annuo con fattore $1+i(t-s)$ fra le date $s$ e $t$. Un pagamento di $100$ euro oggi e uno di $120$ euro fra due anni hanno entrambi valore $120$ euro al tempo $2$. Al tempo $1$ il primo vale $110$ euro, mentre il secondo vale $\dfrac{120}{1{,}1}\approx109{,}09$ euro. I due risultati differiscono perché $1{,}1^2=1{,}21$ mentre il fattore semplice di due anni è $1{,}2$.
:::

:::osservazione
Dall'equivalenza a un tasso fissato non segue l'equivalenza a un altro tasso. Il pagamento di $1210$ euro dopo due anni e quello di $1000$ euro oggi hanno lo stesso valore al $10\%$. Al $5\%$ il valore attuale del primo è $\dfrac{1210}{1{,}05^2}\approx1097{,}51$ euro. Quello del secondo rimane $1000$ euro perché la scadenza coincide con la data di valutazione. Nel cambio di data a tasso fissato tutti i termini ricevono lo stesso fattore. Nel cambio di tasso, invece, ogni termine cambia in misura diversa secondo la sua scadenza.
:::

## Sostituzione dei debiti e importi incogniti

:::definizione{#capitale-unico titolo="Pagamento unico equivalente"}
Un piano di debiti è rappresentato qui con importi positivi, intesi come valori delle somme dovute. Se si preferisce il flusso con segno del debitore, tutti gli importi hanno segno opposto, compreso il pagamento sostitutivo. In regime composto a tasso costante $i>-1$, il pagamento unico $X$ alla data assegnata $T$ è equivalente ai debiti $(t_k,C_k)$ se

$$
X=\sum_{k=1}^{n}C_k q^{T-t_k}.
$$

L'equazione è scritta direttamente alla data $T$. Se una quota viene pagata a una data precedente, la sua somma va portata a $T$ e sottratta dal valore dei debiti a quella data.
:::

:::esempio{titolo="Saldo dopo un acconto"}
Un debito di $1210$ euro scade dopo due anni. Il debitore versa $500$ euro dopo un anno e rinvia il saldo $X$ al terzo anno. Con tasso composto annuo del $10\%$, alla scadenza originaria si ottiene

$$
\begin{aligned}
1210&=500q+Xq^{-1}\\[6pt]
X&=q(1210-500q)\\[6pt]
 &=1{,}1(1210-550)=726.
\end{aligned}
$$

Al secondo anno l'acconto rappresenta $550$ euro, quindi il residuo in quella data è $660$ euro. Un anno dopo questo residuo vale $726$ euro. Alla data iniziale il valore del piano originario è $1210q^{-2}=1000$ euro. Il nuovo piano ha lo stesso valore perché $500q^{-1}+726q^{-3}=1000$ euro.
:::

:::osservazione
Se i pagamenti sostitutivi sono $a_1X,\ldots,a_mX$ alle date $s_1,\ldots,s_m$, con coefficienti $a_j>0$ assegnati, l'incognita $X$ si raccoglie. Scrivendo $V_{\mathrm{debiti}}(0)$ per il valore attuale del piano originario, si ottiene

$$
X=\frac{V_{\mathrm{debiti}}(0)}
{\sum_{j=1}^{m} a_j q^{-s_j}}.
$$

Con due pagamenti uguali i coefficienti sono entrambi $1$. Se il secondo deve valere il doppio del primo, i coefficienti sono rispettivamente $1$ e $2$. Questa condizione è necessaria per determinare separatamente i due importi con una sola equazione di equivalenza.
:::

:::esempio{titolo="Valutazione di un piano con quote proporzionali"}
Un debito di $310$ euro al tempo $1$ è sostituito da due versamenti. Il primo, al tempo $0$, è $X$ e il secondo, al tempo $2$, è $2X$. Al $10\%$ composto annuo l'equazione al tempo $1$ è $310=qX+2q^{-1}X$. Il coefficiente di $X$ è $\dfrac{321}{110}$, quindi il primo pagamento è $\dfrac{34100}{321}\approx106{,}23$ euro e il secondo è il doppio di tale valore esatto. Nei contratti con importi ai centesimi l'eventuale differenza di arrotondamento si gestisce nel saldo.
:::

## Determinazione della scadenza comune

:::definizione{#scadenza-comune titolo="Scadenza equivalente per un capitale assegnato"}
Siano $X>0$ il capitale sostitutivo assegnato e $V>0$ il valore attuale del piano da sostituire. In regime composto con tasso costante $i>-1$, la **scadenza comune** è un tempo $T$ per il quale vale $Xq^{-T}=V$. Se $i\ne0$, applicando il logaritmo a $q^T=\dfrac{X}{V}$ si ricava

$$
T=\frac{\log\!\left(\frac{X}{V}\right)}{\log q}.
$$

Poiché $\log q\ne0$, la soluzione reale è unica. Per $i>0$ la condizione $T\ge0$ equivale a $X\ge V$. Per $-1<i<0$ la condizione diventa $X\le V$ perché $\log q$ è negativo. Per $i=0$ ogni scadenza è equivalente se $X=V$, mentre se $X\ne V$ non esiste una scadenza equivalente.
:::

:::esempio{titolo="Una scadenza ricavata da potenze note"}
Il valore attuale di un piano è $400$ euro. Il capitale concordato è $576$ euro e il tasso composto annuo è il $20\%$. Poiché $\dfrac{576}{400}=1{,}44=1{,}2^2$, il pagamento di $576$ euro è equivalente al secondo anno. Il rapporto fra importo concordato e valore attuale è il fattore di montante richiesto. Se il contratto ammette soltanto scadenze annuali intere, una soluzione fra due anniversari è incompatibile con quella restrizione e si può ricalcolare il pagamento a una data ammessa.
:::

## Scadenza media finanziaria

:::definizione{#scadenza-media titolo="Scadenza della somma nominale"}
Siano $C_k>0$ gli importi e $t_k\ge0$ le scadenze di un piano. La **scadenza media finanziaria** è la scadenza equivalente quando si sceglie come capitale sostitutivo la somma nominale $S=\sum_k C_k$. In regime composto al tasso costante $i>-1$, con $i\ne0$, si ha

$$
q^{-T}=\sum_{k=1}^{n}w_k q^{-t_k},
\qquad w_k=\frac{C_k}{S}.
$$

I pesi $w_k$ sono positivi e sommano a uno. Si calcola quindi una media dei fattori di sconto e si cerca la data che ha quel fattore.
:::

::::teorema{titolo="Posizione della scadenza media"}
Se gli importi sono tutti positivi e $i\ne0$, la scadenza media composta appartiene all'intervallo tra la prima e l'ultima scadenza. Se almeno due scadenze sono distinte, il tempo equivalente è interno all'intervallo.

:::dimostrazione
Il fattore $q^{-T}$ è una media ponderata dei fattori $q^{-t_k}$, quindi è compreso fra il loro minimo e il loro massimo. Se le scadenze sono distinte, la positività di tutti i pesi rende entrambe le disuguaglianze strette. La funzione $t\mapsto q^{-t}$ è strettamente monotona poiché $q\ne1$, quindi associa ai fattori intermedi esattamente le date intermedie.
:::
::::

:::esempio{titolo="Differenza rispetto alla media aritmetica"}
Si sostituiscono $100$ euro oggi e $100$ euro fra due anni con $200$ euro alla scadenza media. Al $10\%$ composto si ha $q^{-T}=\dfrac{1+q^{-2}}{2}=\dfrac{221}{242}$. Ne segue $T=\dfrac{\log\!\left(\frac{242}{221}\right)}{\log(1{,}1)}\approx0{,}9524$ anni. In sconto commerciale al $10\%$, il valore attuale è invece $100+100(1-0{,}1\cdot2)=180$ euro. L'equazione $200(1-0{,}1T)=180$ dà $T=1$ anno.
:::

:::osservazione
Nel regime di sconto commerciale, con un tasso $d\ne0$ e fattori positivi dalla data zero, il valore al tempo zero di un capitale $S$ esigibile alla data $T$ è $S(1-dT)$. Uguagliandolo a $\sum_k C_k(1-dt_k)$, si semplificano i termini nominali e il fattore $d$. Si trova quindi la media aritmetica ponderata $\bar t=\sum_k w_k t_k$. In regime composto la stessa media si ottiene come limite per $i\to0$. Per verificarlo, si pone $z=\log q$ e si osserva che la funzione $-\log\!\left(\sum_k w_k e^{-zt_k}\right)$ è nulla in $z=0$ e ha derivata $\bar t$ in quel punto. Il rapporto fra quella funzione e $z$ tende dunque a $\bar t$.
:::

:::osservazione
Nel regime composto con tasso positivo, se almeno due scadenze differiscono, la scadenza finanziaria precede la media aritmetica ponderata. La funzione $t\mapsto q^{-t}$ è strettamente convessa perché la sua derivata seconda è $(\log q)^2q^{-t}>0$. Per la disuguaglianza di Jensen si ha $q^{-\bar t}<\sum_k w_kq^{-t_k}=q^{-T}$. Poiché il fattore di sconto è decrescente, segue $T<\bar t$. Il risultato giustifica la direzione della differenza nell'esempio dei due pagamenti da $100$ euro. La media aritmetica ponderata rimane una buona approssimazione quando il tasso è vicino a zero.
:::

:::attenzione
L'intervallo delle scadenze limita la scadenza media soltanto con pesi positivi. Si considerino un incasso di $200$ euro oggi e un esborso di $100$ euro fra un anno. La somma algebrica è $100$ euro. Al $10\%$ il valore attuale del piano è $200-\dfrac{100}{1{,}1}\approx109{,}09$ euro. Un pagamento unico di $100$ euro con valore attuale superiore a $100$ deve precedere il tempo zero. Il peso dell'esborso è negativo, quindi la media dei fattori può uscire dall'intervallo dei fattori originari.
:::

## Tassi effettivi diversi nei singoli periodi

:::definizione{#tassi-variabili titolo="Prodotto dei fattori periodali"}
Si consideri una successione di date intere. Sia $i_h>-1$ il tasso effettivo del periodo da $h-1$ a $h$, e sia $q_h=1+i_h$ il suo fattore di montante. Tra le date intere $s<t$, il fattore complessivo è

$$
r(s,t)=\prod_{h=s+1}^{t}q_h.
$$

Il primo fattore è $q_{s+1}$ perché il capitale è disponibile alla fine del periodo $s$. Per riportare un importo da $t$ a $s$ si divide per lo stesso prodotto. Un versamento intermedio partecipa soltanto alla capitalizzazione dei periodi che seguono la sua data.
:::

:::esempio{titolo="Versamento intermedio in un conto"}
Un conto parte con $1000$ euro. Alla fine del primo anno si aggiungono $200$ euro. I tassi effettivi dei primi due anni sono rispettivamente il $5\%$ e il $10\%$. Prima del versamento il saldo è $1050$ euro, quindi il saldo dopo il versamento è $1250$ euro. Al secondo anno vale $1250\cdot1{,}1=1375$ euro. Lo stesso calcolo si può svolgere per origine degli importi. Il capitale iniziale produce $1000\cdot1{,}05\cdot1{,}1=1155$ euro, mentre il versamento al tempo $1$ produce $200\cdot1{,}1=220$ euro.
:::

:::osservazione
Senza versamenti intermedi, scambiare l'ordine dei fattori lascia invariato il loro prodotto. Nell'esempio del conto, lo scambio porta il versamento a capitalizzare al $5\%$ e il suo valore finale diventa $210$ euro. Il capitale iniziale produce ancora $1155$ euro, quindi il saldo finale scende a $1365$ euro. Il tasso annuo costante equivalente a un prodotto di $n$ fattori si ottiene elevando il prodotto alla potenza $\dfrac{1}{n}$ e sottraendo uno.
:::

## Fattori di trasporto tra due date

:::definizione{#leggi-due-variabili titolo="Legge finanziaria a due variabili"}
Il **fattore di montante** $r(s,t)>0$ è il valore alla data $t$ di un euro disponibile alla data $s\le t$. Si assume $r(t,t)=1$. La legge è scindibile se, per ogni $s\le t\le u$,

$$
r(s,u)=r(s,t)r(t,u).
$$

Questa relazione esprime l'uguaglianza fra il trasporto diretto da $s$ a $u$ e il trasporto in due tratti. A differenza del fattore $q^{t-s}$ di un regime composto costante, una legge a due variabili può assegnare fattori diversi a intervalli della stessa durata.
:::

::::teorema{titolo="Rappresentazione mediante un conto unitario"}
Sia $r$ una legge positiva con $r(t,t)=1$ su date $t\ge0$. La legge è scindibile se e solo se esiste una funzione positiva $a(t)$ con $a(0)=1$ tale che $r(s,t)=\dfrac{a(t)}{a(s)}$ per $s\le t$.

:::dimostrazione
Se la legge è scindibile si definisce $a(t)=r(0,t)$. La relazione di scindibilità dà $a(t)=a(s)r(s,t)$. Poiché $a(s)>0$, si divide per $a(s)$ e si ottiene il rapporto richiesto. Viceversa, se vale la rappresentazione, il prodotto $r(s,t)r(t,u)$ è $\dfrac{a(t)}{a(s)}\dfrac{a(u)}{a(t)}=\dfrac{a(u)}{a(s)}=r(s,u)$.
:::
::::

:::esempio{titolo="Valutazione con una legge variabile"}
Siano $a(1)=1{,}05$, $a(2)=1{,}155$ e $a(3)=1{,}21275$. Il valore alla data $2$ di $210$ euro al tempo $1$ e $315$ euro al tempo $3$ è

$$
210\frac{a(2)}{a(1)}+315\frac{a(2)}{a(3)}
=210\cdot1{,}1+\frac{315}{1{,}05}=531.
$$

Per un importo $C$ al tempo $t$, il fattore $a(\tau)$ è comune a ogni termine. Di conseguenza il valore del piano è $V(\tau)=a(\tau)\sum_k\dfrac{C_k}{a(t_k)}$ e le equivalenze si conservano al cambio di data anche con tassi variabili, purché la legge sia scindibile.
:::

:::richiamo{titolo="Forza di interesse deterministica"}
Se $\delta(t)$ è la forza di interesse, integrabile sugli intervalli considerati, il fattore da $s$ a $t$ vale $r(s,t)=\exp\!\left(\int_s^t\delta(u)\,\mathrm du\right)$. L'additività dell'integrale sui tratti consecutivi implica la scindibilità. Se la forza vale $\delta_1$ per un anno e $\delta_2$ per l'anno successivo, il fattore dei due anni è $e^{\delta_1+\delta_2}$.
:::

:::osservazione
Se si conoscono i fattori di sconto $v(0,s)=a(s)^{-1}$ e $v(0,t)=a(t)^{-1}$ dalla data zero, il valore in $s$ di un euro disponibile in $t$ è $\dfrac{v(0,t)}{v(0,s)}$. Per esempio, se $v(0,1)=0{,}96$ e $v(0,3)=0{,}864$, un euro alla data $3$ vale $0{,}9$ euro alla data $1$. Infatti $0{,}9$ euro alla data $1$ e un euro alla data $3$ valgono entrambi $0{,}864$ euro oggi. Il capitolo sulla struttura a termine usa questi rapporti per calcolare i fattori forward.
:::

## Confronto tra piani di pagamento

:::definizione{#confronto-operazioni titolo="Confronto alla stessa data"}
Per confrontare due piani si fissa lo stesso soggetto, si usa la stessa legge finanziaria e si valutano entrambi alla stessa data. Per un debitore che deve scegliere fra flussi di soli pagamenti, si possono rappresentare i due costi con importi positivi. Il piano con costo attuale minore è meno oneroso. Se invece si usano i flussi con segno del debitore, il piano meno oneroso è quello con valore algebrico maggiore, perché gli esborsi hanno segno negativo.
:::

:::esempio{titolo="Soglia di indifferenza tra due pagamenti"}
Un fornitore chiede $500$ euro oggi oppure $550$ euro fra un anno. Al tasso composto annuo del $10\%$ il pagamento differito vale oggi $550q^{-1}=500$ euro, quindi i due piani sono equivalenti. Al $5\%$ il pagamento differito vale circa $523{,}81$ euro e quello immediato costa meno. Al $15\%$ il pagamento differito vale circa $478{,}26$ euro e costa meno di quello immediato. La soglia dipende dal rapporto fra i due importi, mentre il costo attuale del pagamento differito diminuisce al crescere del tasso.
:::

:::osservazione
Se un piano prevede una commissione immediata o una spesa a una scadenza successiva, il costo entra nella somma alla data in cui si verifica. Nell'esempio del fornitore, aggiungere $20$ euro di commissione immediata al pagamento differito porta il costo attuale da $500$ a $520$ euro al tasso del $10\%$. Il confronto dei costi include quindi i flussi aggiuntivi nella data in cui si verificano. Il capitolo sulla valutazione degli investimenti applica lo stesso trasporto ai progetti con uscite e incassi.
:::
