---
titolo: Rendite costanti, differite e perpetue
sommario: Valore attuale e montante delle rendite, rate anticipate e posticipate, differimento e determinazione di rata, durata e tasso.
---

## Calendario e rendita posticipata

:::definizione{titolo="Rendita certa a rate costanti"}
Una **rendita certa a rate costanti** è una successione di pagamenti di uguale importo che avvengono a scadenze note ed equidistanti. Si indica con $R$ l'importo di ogni rata e con $n$ il numero di rate, se questo è finito. L'intervallo tra due scadenze consecutive è il periodo della rendita. Due anni di versamenti trimestrali contengono otto rate quando il primo versamento si effettua dopo tre mesi e l'ultimo dopo ventiquattro mesi.

Sia $i>-1$ il tasso effettivo composto per periodo. Il **fattore di montante** è $q=1+i$ e il **fattore di sconto** è $v=q^{-1}$. Se una rata scade al tempo $t_k$ e la si valuta al tempo $\tau$, con entrambi i tempi espressi in periodi, il suo contributo è $Rq^{\tau-t_k}$. Pertanto il valore dell'intera rendita alla stessa data è

$$
V(\tau)=\sum_{k=1}^n Rq^{\tau-t_k}.
$$

Se la rata è futura rispetto a $\tau$, l'esponente è negativo e si attualizza. Se è già scaduta, l'esponente è positivo e si capitalizza. Alla scadenza stessa l'esponente è zero e si include l'importo $R$. Questa somma permette di valutare il piano anche quando la data scelta cade fra due pagamenti.
:::

:::esempio{titolo="Valore dell'intero piano e valore delle rate future"}
Tre rate annue da $110$ euro scadono ai tempi $1,2,3$. Al tasso del $10\%$, il valore dell'intero piano al tempo $2$ è

$$
V(2)=110\cdot1{,}1+110+\frac{110}{1{,}1}=331\,\mathrm{euro}.
$$

Al tempo $2$ subito dopo la seconda riscossione, resta invece da incassare solo la rata al tempo $3$, che vale $100$ euro. La prima somma valuta il contratto completo alla data scelta, mentre il secondo valore riguarda i flussi che restano da ricevere. La distinzione ricompare nel capitolo sul debito residuo.
:::

:::osservazione
Se il tasso fornito è annuo effettivo e i pagamenti sono mensili, il periodo di calcolo è il mese. Si indica con $i_a$ il tasso annuo assegnato e si ricava il tasso mensile $i$ imponendo $(1+i)^{12}=1+i_a$. Se viene dato invece il tasso nominale annuo convertibile mensilmente $j^{(12)}$, il tasso del mese è $i=\dfrac{j^{(12)}}{12}$. Il motivo di queste due conversioni si trova nel capitolo sui regimi finanziari. Una volta ottenuto $i$, il valore di dodici rate mensili si calcola con $n=12$.
:::


::::teorema{#rendita-posticipata titolo="Valore attuale di rate costanti posticipate"}
Siano $n\geq1$ intero e $i>-1$. Una **rendita immediata posticipata** paga la prima rata un periodo dopo l'origine e l'ultima al tempo $n$. Al tempo zero si ottiene

$$
V(0)=R a_{\overline n|i},\qquad
 a_{\overline n|i}=\sum_{k=1}^n v^k
=\frac{1-v^n}{i}\quad(i\neq0).
$$

Il fattore $a_{\overline n|i}$ è il valore attuale di $n$ rate unitarie. Per $i=0$ ogni rata unitaria vale uno, quindi $a_{\overline n|0}=n$. Il fattore permette di sostituire la somma dei valori delle singole rate con un solo prodotto.

:::dimostrazione
L'idea è sottrarre dalla somma la stessa sequenza moltiplicata per $v$. Se $A=v+v^2+\cdots+v^n$, si ha

$$
\begin{aligned}
A-vA &= (v+v^2+\cdots+v^n)-(v^2+v^3+\cdots+v^{n+1}) \\[6pt]
&=v-v^{n+1}.
\end{aligned}
$$

Per $i\neq0$, vale $1-v=iv\neq0$. Dividendo per $1-v$ si ottiene $A=\dfrac{v(1-v^n)}{iv}=\dfrac{1-v^n}{i}$. Moltiplicando per $R$ si ritrova il valore del piano.
:::
::::

:::esempio{titolo="Due rate valutate oggi"}
Due rate da $121$ euro scadono tra uno e due anni. Con tasso annuo del $10\%$, la prima contribuisce per $121\cdot\dfrac{10}{11}=110$ euro e la seconda per $121\cdot\left(\dfrac{10}{11}\right)^2=100$ euro. Il valore attuale è quindi $210$ euro. La seconda rata ha un valore attuale più basso perché viene scontata per due periodi. Il confronto fra i singoli addendi permette di controllare gli esponenti usati nella formula.
:::

:::osservazione
Per $R>0$ e $i>0$, ciascun fattore $v^k$ è minore di uno, quindi $V(0)<nR$. Per $-1<i<0$ vale $v>1$, quindi $V(0)>nR$. Per esempio, al tasso periodale del $-20\%$ una rata di $80$ euro che scade dopo un periodo vale oggi $100$ euro. Anche quando il tasso è negativo, la somma geometrica conserva il suo significato. In questo caso numeratore e denominatore di $\dfrac{1-v^n}{i}$ sono entrambi negativi, perciò il fattore è positivo.
:::

## Rendita anticipata

:::teorema{#rendita-anticipata titolo="Valore attuale e anticipo di un periodo"}
Siano $n\geq1$ intero e $i>-1$. Una **rendita immediata anticipata** paga ai tempi $0,1,\ldots,n-1$. Il valore attuale della rendita è

$$
V(0)=R\ddot a_{\overline n|i},\qquad
\ddot a_{\overline n|i}=
\sum_{k=0}^{n-1}v^k=q a_{\overline n|i}.
$$

Ogni rata viene riscossa un periodo prima della corrispondente rata posticipata, quindi si moltiplica ciascun valore attuale per $q$. La prima rata è già disponibile al tempo zero e contribuisce per $R$. Per $i=0$ i due fattori valgono entrambi $n$.
:::

:::esempio{titolo="Prima rata compresa nel prezzo"}
Tre rate anticipate da $288$ euro hanno scadenze $0,1,2$. Al tasso del $20\%$, il valore attuale è $288+240+200=728$ euro. Immediatamente dopo il pagamento iniziale restano le rate ai tempi $1$ e $2$, che valgono insieme $440$ euro. Se le tre rate fossero ai tempi $1,2,3$, il valore sarebbe $\dfrac{728}{1{,}2}$ euro. Entrambi i confronti partono dal calendario, così la rata iniziale entra una volta sola.
:::

:::osservazione
Due calendari con la stessa rata e la stessa durata contrattuale possono differire di un periodo. Tre quote annuali pagate all'inizio dell'anno scadono alle date $0,1,2$. Pagate alla fine dell'anno scadono invece alle date $1,2,3$. Al tasso positivo il primo calendario ha valore attuale maggiore, poiché il rapporto fra i valori è $q>1$. Se il tasso è negativo, il rapporto è $q<1$ e l'ordine dei valori si inverte.
:::

## Montante alla fine del piano

::::teorema{#montante-rendita titolo="Montante di versamenti costanti"}
Siano $n\geq1$ intero e $i>-1$. Il **montante** al tempo $n$, subito dopo la rata finale di una rendita immediata posticipata, è

$$
M=R s_{\overline n|i},\qquad
s_{\overline n|i}=\sum_{k=0}^{n-1}q^k
=\frac{q^n-1}{i}\quad(i\neq0).
$$

Per $i=0$ vale $s_{\overline n|0}=n$. Il fattore $s_{\overline n|i}$ misura quanto si accumula con versamenti unitari. Per un piano anticipato valutato allo stesso tempo $n$ il fattore è $q s_{\overline n|i}$.

:::dimostrazione
Il valore al tempo zero si moltiplica per $q^n$ per trasportarlo al tempo $n$. Nella somma, il contributo della rata che scade al tempo $k$ diventa quindi $Rq^{n-k}$. Al variare di $k$ da $1$ a $n$, gli esponenti scendono da $n-1$ a zero. Ne segue

$$
s_{\overline n|i}=q^n a_{\overline n|i}=\frac{q^n-1}{i}\quad(i\neq0).
$$

In un piano anticipato ogni rata rimane investita un periodo in più rispetto alla corrispondente rata posticipata, quindi il montante si moltiplica ancora per $q$.
:::
::::

:::esempio{titolo="Data dell'ultimo versamento e fine del piano"}
Tre versamenti annui anticipati da $100$ euro scadono ai tempi $0,1,2$. Al tasso annuo del $10\%$ il montante al tempo $2$, subito dopo l'ultima rata, è $121+110+100=331$ euro. Se il capitale rimane investito fino al tempo $3$, il montante diventa $331\cdot1{,}1=364{,}10$ euro. Quest'ultimo importo è $100q s_{\overline 3|i}$. Il tempo di valutazione distingue le due risposte, poiché la data dell'ultima rata di una rendita anticipata è $n-1$.
:::

## Differimento

:::definizione{#rendita-differita titolo="Rate rinviate e data di riferimento"}
Sia $m\geq0$ intero. Una **rendita posticipata differita di $m$ periodi** ha rate alle date $m+1,\ldots,m+n$. Un periodo prima della prima rata, cioè al tempo $m$, il suo valore è $R a_{\overline n|i}$. Il valore attuale si ottiene attualizzando questa somma per $m$ periodi, quindi

$$
V(0)=v^m R a_{\overline n|i}.
$$

Una rendita anticipata differita di $m$ periodi paga invece ai tempi $m,\ldots,m+n-1$ e ha valore attuale $v^m R\ddot a_{\overline n|i}$. In entrambi i casi il fattore $v^m$ sposta alla data zero il valore della rendita misurato al tempo $m$. La formula da applicare dipende dalla posizione della prima rata rispetto a questa data.

Se le scadenze restano le stesse e si valuta al tempo $\tau$, si moltiplica il valore al tempo zero per $q^\tau$. Per esempio, un piano con rate ai tempi $4,5,6$ vale al tempo $2$ l'importo $vR a_{\overline3|i}$. Infatti il fattore posticipato dà il valore al tempo $3$ e basta attualizzare di un periodo. Il numero di periodi di differimento rispetto alla data zero descrive il calendario, mentre l'esponente del fattore di trasporto dipende anche dalla data a cui si vuole valutare il piano.
:::

:::esempio{titolo="Due rappresentazioni dello stesso calendario"}
Tre rate costanti scadono ai tempi $3,4,5$. Il piano è una rendita posticipata valutabile al tempo $2$, da cui $V(0)=v^2Ra_{\overline3|i}$. Si può anche valutare il piano al tempo $3$, includendo subito la rata iniziale, da cui $V(0)=v^3R\ddot a_{\overline3|i}$. I due risultati coincidono perché $v^3\ddot a_{\overline3|i}=v^3 q a_{\overline3|i}=v^2 a_{\overline3|i}$.

::grafico{xmin=-0.5 xmax=6 ymin=-0.15 ymax=1.55 nomi="t,rate" vettori="3,0,3,1,R;4,0,4,1,R;5,0,5,1,R" unicolore=1 punti="2,0,pieno" legenda=0 titolo="Sull’asse orizzontale si leggono le date. Le frecce di altezza unitaria rappresentano rate uguali di importo R. Il punto alla data 2 indica il riferimento per il fattore posticipato."}
:::

:::attenzione
Con prima rata al tempo $4$, una rendita posticipata è differita di tre periodi. Se si applicasse il fattore $v^4$ a una sola rata unitaria posticipata, il risultato sarebbe $v^4a_{\overline1|i}=v^5$. Si starebbe quindi valutando una rata al tempo $5$. Il primo esponente della somma deve coincidere con il numero di periodi che separano la prima rata dalla data zero.
:::

## Rendite perpetue

::::teorema{#rendita-perpetua titolo="Valore di una rendita perpetua costante"}
Sia $R>0$. Una **rendita perpetua** paga la stessa rata a intervalli regolari per un numero illimitato di periodi. Se $i>0$, il valore al tempo zero di una perpetuità con prima rata al tempo $1$ è

$$
V(0)=\sum_{k=1}^{\infty}Rv^k=\frac Ri.
$$

Se la prima rata è al tempo $0$, al valore $\dfrac Ri$ si aggiunge la rata iniziale $R$. Se la prima rata è al tempo $m+1$, il valore attuale è $v^m\dfrac Ri$. La formula $\dfrac Ri$ dà dunque il valore della perpetuità misurato un periodo prima del primo pagamento.

:::dimostrazione
Si parte dalle prime $n$ rate, che valgono $R\dfrac{1-v^n}{i}$. Dall'ipotesi $i>0$ segue $0<v<1$, quindi $v^n\to0$ per $n\to\infty$. Il limite delle somme parziali è $\dfrac Ri$. Se $i=0$, ogni termine vale $R$ e le somme parziali crescono senza limite. Se $-1<i<0$, ogni contributo vale più di $R$, quindi anche in questo caso le somme parziali divergono a $+\infty$.
:::
::::

:::esempio{titolo="Perpetuità con attesa iniziale"}
Una rendita paga $144$ euro l'anno a partire dal tempo $3$. Al tasso annuo del $20\%$, un periodo prima della prima rata il valore è $\dfrac{144}{0{,}2}=720$ euro. Si tratta del valore al tempo $2$, perciò oggi vale $720\cdot\left(\dfrac56\right)^2=500$ euro. Si può controllare l'importo seguendo il capitale. Cinquecento euro diventano $720$ in due anni e da quel momento producono ogni anno $144$ euro di interessi, lasciando intatto il capitale.
:::

:::osservazione
La perpetuità permette anche di misurare quanto valgono oggi le rate escluse da un piano finito. Dopo le prime $n$ rate di una perpetuità posticipata restano i pagamenti dal tempo $n+1$ in poi. Questi hanno valore $\dfrac Ri$ al tempo $n$, quindi oggi valgono $v^n\dfrac Ri$. La differenza fra la perpetuità completa e il piano finito è precisamente questo valore. Per esempio, se la perpetuità vale $1200$ euro e $v^n=0{,}25$, le prime $n$ rate valgono $1200-300=900$ euro. Si ritrova così la formula del valore attuale finito partendo dal calendario dei pagamenti che restano.
:::

## Rata incognita

:::definizione{#rata-incognita titolo="Rata equivalente a un capitale o a un montante"}
Se un capitale $C$ disponibile oggi è equivalente a $n$ rate costanti posticipate, l'equazione è $C=R a_{\overline n|i}$. Poiché il fattore della rendita è una somma di termini positivi, la rata è determinata univocamente da

$$
R=\frac{C}{a_{\overline n|i}}.
$$

Per costruire un capitale $M$ al tempo $n$ con versamenti posticipati, l'equazione è invece $M=R s_{\overline n|i}$, quindi $R=\dfrac{M}{s_{\overline n|i}}$. La data a cui è espresso il capitale determina quale fattore compare al denominatore. Se $i=0$, entrambi i fattori valgono $n$ e la rata è il capitale diviso per il numero di versamenti.
:::

:::esempio{titolo="Rate ordinarie e saldo finale"}
Un capitale di $310$ euro si rimborsa con due rate annue posticipate uguali e un saldo aggiuntivo di $121$ euro alla seconda scadenza. Il tasso è del $10\%$. Il saldo finale vale oggi $121\left(\dfrac{10}{11}\right)^2=100$ euro. Le due rate ordinarie devono coprire il resto, pari a $210$ euro. Poiché $a_{\overline2|i}=\dfrac{210}{121}$, ogni rata ordinaria vale $121$ euro. Alla seconda data il pagamento complessivo è $242$ euro, poiché comprende sia la rata sia il saldo aggiuntivo.
:::

:::osservazione
Se il capitale è già espresso in euro e centesimi, la rata ottenuta dividendo per il fattore può comunque avere più di due cifre decimali. Per esempio, al tasso nullo tre rate identiche teoriche rimborsano $100$ euro se ciascuna vale $\dfrac{100}{3}$ euro. Due pagamenti di $33{,}33$ euro lasciano un saldo di $33{,}34$ euro per l'ultima data. Con un tasso diverso da zero, lo scarto sulle prime rate si trasferisce alla data finale con i fattori di montante. Per questo l'equazione di equivalenza si risolve prima con dati esatti e si dichiara a parte come si arrotondano gli importi da pagare.
:::

## Durata incognita

:::teorema{#durata-incognita titolo="Durata teorica e numero di scadenze"}
Siano $C>0$, $R>0$ e $i>0$. Per rimborsare $C$ con rate costanti posticipate occorre risolvere $C=R\dfrac{1-q^{-n}}i$. La condizione per una soluzione reale positiva e finita è $C<\dfrac Ri$. Infatti, isolando $q^{-n}$ si ottiene $q^{-n}=1-\dfrac{Ci}{R}$, che deve appartenere a $(0,1)$. In queste ipotesi

$$
n=-\frac{\log\left(1-\frac{Ci}{R}\right)}{\log q}.
$$

La formula fornisce una durata teorica. Quando $n$ è intero, descrive un piano con rate tutte uguali. Quando $n$ non è intero, con scadenze periodiche si può versare la rata ordinaria alle prime $\lfloor n\rfloor$ scadenze e un saldo inferiore alla rata a quella successiva. Se $R=Ci$, la rata è pari agli interessi di un periodo e il debito rimane invariato. Se $R<Ci$, dopo la prima rata il debito supera il capitale iniziale. Al tasso zero si usa l'equazione $C=nR$.
:::

:::esempio{titolo="Saldo alla scadenza successiva"}
Si rimborsano $150$ euro con rate da $100$ euro e tasso annuo del $10\%$. Dopo un anno il debito prima del versamento vale $165$ euro, quindi dopo la prima rata restano $65$ euro. Alla seconda scadenza il saldo è $65\cdot1{,}1=71{,}50$ euro. La durata teorica è compresa fra uno e due anni, poiché il valore attuale di una rata è minore di $150$ euro e quello di due rate è maggiore di $150$ euro. Il saldo si calcola capitalizzando il residuo per un anno intero, dato che la seconda scadenza è al tempo $2$.
:::

## Tasso incognito

::::teorema{#tasso-rendita titolo="Esistenza e unicità del tasso implicito"}
Siano $n\geq1$ intero e $R>0$. Per una rendita immediata posticipata, il valore attuale come funzione del tasso è

$$
V(i)=R\sum_{k=1}^{n}(1+i)^{-k},\qquad i>-1.
$$

Per ogni prezzo $C>0$ esiste un unico tasso $i>-1$ che soddisfa $V(i)=C$. Il tasso è positivo per $C<nR$, nullo per $C=nR$ e negativo per $C>nR$. Il confronto tra prezzo e somma nominale permette di scegliere il segno del tasso prima della ricerca numerica.

:::dimostrazione
Ogni addendo è continuo e strettamente decrescente in $i$, poiché la sua derivata è $-kR(1+i)^{-k-1}<0$. Pertanto la somma ha le stesse proprietà. Se $i\to-1^+$ il fattore $(1+i)^{-1}$ diverge, quindi $V(i)\to+\infty$. Se $i\to+\infty$ ogni addendo tende a zero e così fa la somma finita. Per continuità ogni prezzo positivo è assunto almeno una volta, e per stretta monotonia è assunto una sola volta. Infine $V(0)=nR$, da cui seguono le tre condizioni sul segno.
:::
::::

:::esempio{titolo="Ricerca del tasso con due rate"}
Due rate annue posticipate da $169$ euro valgono oggi $230$ euro. Se $v$ è il fattore di sconto di un anno, l'equazione è $169(v+v^2)=230$. L'uguaglianza è soddisfatta da $v=\dfrac{10}{13}$, poiché $169v=130$ e $169v^2=100$. Il tasso è quindi $i=v^{-1}-1=30\%$. Con più rate si può applicare la bisezione alla funzione $V(i)-C$. Quando il valore al punto medio supera il prezzo, il tasso cercato è più alto del punto medio perché $V$ è decrescente. Se il valore al punto medio è inferiore al prezzo, la radice si cerca invece nella metà con tassi più bassi.
:::

:::osservazione
In una rendita anticipata con almeno due rate, l'addendo iniziale $R$ è costante e gli altri decrescono con il tasso. Il limite per $i\to+\infty$ è $R$, quindi l'equazione ha un'unica soluzione finita per ogni prezzo $C>R$. Se la rendita anticipata ha una sola rata, il suo valore coincide con $R$ per ogni tasso. In quel caso l'uguaglianza con il prezzo può essere verificata o impossibile, secondo l'importo assegnato, e il tasso rimane indeterminato quando $C=R$.
:::

:::esempio{titolo="Intervallo per il tasso cercato"}
Due rate posticipate da $100$ euro hanno prezzo $175$ euro. Al tasso del $10\%$ valgono circa $173{,}55$ euro, quindi il tasso cercato è inferiore al $10\%$. Al tasso zero valgono $200$ euro, perciò il tasso cercato appartiene all'intervallo tra zero e il $10\%$. Il punto medio è il $5\%$ e a quel tasso il valore è circa $185{,}94$ euro. Dopo una iterazione l'intervallo si riduce a quello tra il $5\%$ e il $10\%$. Una stima del tasso si può accompagnare con gli estremi dell'ultimo intervallo, così si indica anche la precisione raggiunta.
:::
