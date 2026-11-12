---
titolo: Rendite variabili, flussi continui e costituzione di capitale
sommario: Valutazione di rate irregolari, progressioni aritmetiche e geometriche, flussi continui e piani di accumulo.
---

## Valutazione di rate irregolari

:::definizione{#rendita-generica titolo="Valore di una rendita variabile"}
Una **rendita variabile** è una successione di pagamenti i cui importi possono cambiare da una scadenza all'altra. Indichiamo con $R_k$ l'importo della rata numero $k$ e con $t_k$ la sua scadenza misurata a partire da oggi. Se $i>-1$ è il tasso effettivo per l'unità di tempo scelta, poniamo $q=1+i$ e $v=q^{-1}$. Il **valore attuale** $V_0$ e il **montante** $M_T$ a una data $T\geq t_n$ sono
$$
V_0=\sum_{k=1}^n R_kv^{t_k},
\qquad
M_T=\sum_{k=1}^n R_kq^{T-t_k}.
$$
Per ciascun addendo il tempo di sconto è la distanza fra oggi e la scadenza della rata. Il tempo di capitalizzazione è invece la distanza fra la scadenza e la data finale. Poiché $q^{T-t_k}=q^Tv^{t_k}$, il montante è anche $M_T=q^TV_0$. Questa relazione permette di controllare il risultato ottenuto portando le rate direttamente alla data finale.
:::

:::esempio{titolo="Tre incassi a scadenze diverse"}
Un contratto paga $220$ euro fra un anno, $363$ euro fra due anni e $1331$ euro fra tre anni. Al tasso effettivo annuo del $10\%$ i tre valori attuali sono rispettivamente $200$, $300$ e $1000$ euro. Pertanto
$$
V_0=\frac{220}{1{,}1}+\frac{363}{1{,}1^2}
+\frac{1331}{1{,}1^3}=1500\,\mathrm{euro}.
$$
Al tempo $3$ l'ultima rata è già alla data di valutazione e quindi entra nel montante con il suo importo nominale. Le altre due rate maturano interessi rispettivamente per due anni e un anno. Si trova $M_3=220\cdot1{,}1^2+363\cdot1{,}1+1331=1996{,}50\,\mathrm{euro}$, lo stesso importo che si ottiene da $1500\cdot1{,}1^3$.
:::

:::attenzione
Il numero d'ordine di una rata coincide con la sua scadenza solo per una rendita immediata posticipata con rate distanti un periodo. Se gli incassi di $100$ e $110$ euro scadono oggi e fra un anno, al $10\%$ valgono oggi $100+100=200$ euro. Valutarli come rate ai tempi $1$ e $2$ anticiperebbe la data di valutazione di un intero anno e darebbe $\dfrac{200}{1{,}1}$ euro.
:::

## Rate in progressione aritmetica

::::teorema{#progressione-aritmetica titolo="Rate a incremento fisso"}
Una rendita con $n\geq1$ rate posticipate è **aritmetica** se la differenza $d$ fra due rate consecutive è costante. Poiché la prima rata è $R_1$, l'importo della rata numero $k$ è $R_k=R_1+(k-1)d$. Il valore attuale si può scrivere come
$$
V_0=R_1a_{\overline n|i}+dG_n(v),
\qquad
a_{\overline n|i}=\sum_{k=1}^n v^k,
\qquad
G_n(v)=\sum_{k=1}^n(k-1)v^k.
$$
Per $v\ne1$ vale
$$
G_n(v)=\frac{v^2-nv^{n+1}+(n-1)v^{n+2}}{(1-v)^2}.
$$
Per $i=0$ si ha $v=1$, quindi $G_n(1)=\dfrac{n(n-1)}{2}$ e $a_{\overline n|0}=n$. La scomposizione mostra quanto del valore attuale proviene dalla base comune $R_1$ e quanto dagli incrementi che si accumulano a partire dalla seconda rata.

:::dimostrazione
La linearità della somma permette di raccogliere $R_1$ nei termini costanti e $d$ nei termini che dipendono da $k$. Per ricavare la formula di $G_n(v)$ si parte dalla somma geometrica finita $S_n(v)=\sum_{j=0}^{n-1}v^j=\dfrac{1-v^n}{1-v}$. Derivando termine per termine e moltiplicando per $v^2$ si ottiene
$$
\begin{aligned}
v^2 S_n'(v)
&=\sum_{j=1}^{n-1}jv^{j+1}=G_n(v)\\[6pt]
&=\frac{v^2(1-v^n)-nv^{n+1}(1-v)}{(1-v)^2}.
\end{aligned}
$$
Lo sviluppo del numeratore dà l'espressione richiesta. Quando $v=1$ la somma che definisce $G_n(v)$ contiene gli interi da $0$ a $n-1$, quindi si applica la formula della somma aritmetica.
:::
::::

:::esempio{titolo="Rata iniziale a partire dal valore attuale"}
Tre rate annue valgono oggi $650$ euro al tasso nullo. Ciascuna rata dopo la prima è maggiore di $50$ euro rispetto alla precedente. Al tasso nullo il valore attuale coincide con la somma degli importi, quindi
$$
650=R_1+(R_1+50)+(R_1+100)=3R_1+150.
$$
La prima rata è $\dfrac{500}{3}\,\mathrm{euro}$ e l'ultima è $\dfrac{800}{3}\,\mathrm{euro}$. Al tasso positivo la stessa incognita si troverebbe raccogliendo $R_1$ con coefficiente $a_{\overline 3|i}$, poiché ciascuna rata contiene una volta l'importo di base.
:::

:::osservazione
Se $d<0$, le rate diminuiscono. Perché rappresentino tutte incassi non negativi basta verificare $R_1+(n-1)d\geq0$, poiché l'ultima rata è la più piccola. La condizione è utile anche nella ricerca di $n$. Per esempio, a partire da $240$ euro con decremento di $70$ euro, la quarta rata è $30$ euro e la quinta sarebbe $-40$ euro. Un piano di soli incassi con questi parametri si può quindi prolungare al massimo per quattro scadenze.
:::

:::esempio{titolo="Valore di un incremento dal secondo anno"}
Il prezzo di una rendita biennale dipende da due rate. La prima è di $200$ euro, la seconda è di $260$ euro. Al tasso annuo del $10\%$ si può scomporre il contratto in una rendita di due rate da $200$ euro e in un incasso aggiuntivo di $60$ euro al tempo $2$. Pertanto
$$
V_0=200(v+v^2)+60v^2.
$$
La differenza $d=60$ compare solo al tempo $2$, perché la prima rata è già l'importo di riferimento. Se il secondo incasso diminuisse a $140$ euro, nella stessa formula si sostituirebbe $d=-60$. Il valore diminuirebbe di $120v^2$ euro, cioè del valore attuale della sola variazione alla seconda scadenza.
:::

## Rate in progressione geometrica

::::teorema{#progressione-geometrica titolo="Rate a crescita percentuale costante"}
Supponiamo che $n\geq1$ rate posticipate, di prima rata $R_1$, seguano la legge $R_k=R_1(1+g)^{k-1}$ con $g>-1$. Il parametro $g$ è la variazione effettiva della rata per periodo e $i>-1$ è il tasso finanziario effettivo per lo stesso periodo. I valori attuali consecutivi hanno rapporto $\rho=(1+g)v$. Pertanto valgono le seguenti formule.

- Per $i\ne g$ vale $V_0=\dfrac{R_1}{i-g}\left(1-\rho^n\right)$.
- Per $i=g$ vale $V_0=\dfrac{nR_1}{1+i}$.

L'importo al numeratore è quello della *prima rata effettivamente pagata*. Se il contratto indica un importo base oggi e prevede il primo adeguamento prima del pagamento, il primo importo da scontare è la base moltiplicata per $1+g$.

:::dimostrazione
Poiché la rata $k$ ha già subìto $k-1$ adeguamenti e scade fra $k$ periodi, il suo valore attuale è
$$
R_1(1+g)^{k-1}v^k=R_1v\,\rho^{k-1}.
$$
Se $\rho\ne1$, la somma degli $n$ termini vale $R_1v\dfrac{1-\rho^n}{1-\rho}$. Poiché $1-\rho=(i-g)v$, si ottiene la prima formula. Se $\rho=1$, ciascun addendo vale $R_1v$ e la somma dà la seconda formula.
:::
::::

:::esempio{titolo="Importi attualizzati uguali"}
Un abbonamento prevede quattro incassi annuali e il primo incasso è $110$ euro fra un anno. Gli importi aumentano del $10\%$ annuo e il tasso di valutazione è anch'esso del $10\%$. I primi due valori attuali sono $\dfrac{110}{1{,}1}=100$ euro e $\dfrac{121}{1{,}1^2}=100$ euro. Il rapporto $\rho$ è uguale a $1$, quindi anche le altre due rate contribuiscono con $100$ euro ciascuna e il valore attuale totale è $400$ euro.
:::

:::osservazione
Se $i>g$, i valori attuali diminuiscono perché $\rho<1$, anche quando gli importi nominali aumentano. Se $i<g$, i valori attuali aumentano perché $\rho>1$. Per una rendita finita di rate positive il valore resta positivo in entrambi i casi. Quando $i<g$, il denominatore $i-g$ e il fattore $1-\rho^n$ sono entrambi negativi, quindi il loro rapporto è positivo.
:::

:::esempio{titolo="Valutazione di una rendita differita"}
Una rendita di tre rate ha primo incasso di $121$ euro al tempo $2$. Le rate aumentano del $10\%$ e il tasso di valutazione è del $10\%$. Al tempo $1$ i tre valori attuali sono uguali e la loro somma vale $3\cdot\dfrac{121}{1{,}1}=330\,\mathrm{euro}$. Dal tempo $1$ a oggi trascorre un anno, quindi il valore attuale è $\dfrac{330}{1{,}1}=300\,\mathrm{euro}$. Il differimento è di un periodo rispetto alle scadenze $1,2,3$, perciò il fattore di sconto aggiuntivo è $v$.
:::

## Perpetuità crescenti e differimento

::::teorema{#perpetuita-crescente titolo="Valore di una perpetuità crescente"}
Una perpetuità ha prima rata $R_1>0$ alla data $1$ e rate che variano al tasso periodale $g>-1$. Al tasso finanziario $i>-1$ il valore attuale è finito se e solo se $i>g$. Quando questa condizione è soddisfatta si ha
$$
V_0=\frac{R_1}{i-g}.
$$
La formula dà il valore un periodo prima della prima rata. Se il pagamento iniziale è al tempo $m+1$, dove $m\geq0$ è un numero intero di periodi, il valore al tempo $m$ è $\dfrac{R_1}{i-g}$ e quello al tempo $0$ è $\dfrac{R_1v^m}{i-g}$.

:::dimostrazione
Il valore attuale delle prime $n$ rate è la somma dei primi $n$ termini di una progressione geometrica con rapporto $\rho=(1+g)v>0$. Se $i>g$, si ha $0<\rho<1$ e $\rho^n$ tende a zero. La formula finita converge quindi a $\dfrac{R_1}{i-g}$. Se $i=g$, tutti i termini attualizzati valgono $R_1v>0$ e le somme parziali crescono senza limite. Se $i<g$, i termini attualizzati crescono e anche in questo caso le somme parziali divergono.
:::
::::

:::esempio{titolo="Valore oggi e residuo dopo una rata"}
Una rendita perpetua paga $120$ euro fra un anno e aumenta del $2\%$ a ogni scadenza. Al tasso del $6\%$ vale oggi $\dfrac{120}{0{,}06-0{,}02}=3000\,\mathrm{euro}$. Subito dopo il primo incasso la prossima rata è $122{,}40$ euro. Il residuo alla data $1$ è quindi $\dfrac{122{,}40}{0{,}04}=3060\,\mathrm{euro}$. Infatti capitalizzando il valore iniziale per un anno si ottengono $3180$ euro, da cui si sottraggono i $120$ euro già pagati.
:::

:::attenzione
La condizione $i>g$ riguarda la perpetuità, poiché si deve sommare un numero infinito di valori attuali. Se $i=g=5\%$ e la prima rata è $105$ euro, dieci rate valgono $1000$ euro. In una perpetuità con gli stessi dati le somme parziali valgono $100n$ euro e crescono senza limite.
:::

## Densità di pagamento e forza costante

:::definizione{#flussi-continui titolo="Densità e valore di un flusso continuo"}
Una **densità di pagamento** $c(t)$ esprime l'incasso per unità di tempo, per esempio in euro all'anno. Durante un intervallo breve di durata $\Delta t$, il pagamento è approssimato da $c(t)\Delta t$. Per una densità integrabile su $[0,T]$ e una forza di interesse costante $\delta$ riferita alla stessa unità di tempo, si ha
$$
V_0=\int_0^T c(t)e^{-\delta t}\,dt,
\qquad
M_T=\int_0^T c(t)e^{\delta(T-t)}\,dt.
$$
Il limite delle somme sui piccoli intervalli dà l'integrale. Il fattore $e^{-\delta t}$ porta il pagamento a oggi, mentre $e^{\delta(T-t)}$ lo porta alla data finale. Poiché il secondo fattore è il primo moltiplicato per $e^{\delta T}$, vale $M_T=e^{\delta T}V_0$.
:::

:::esempio{titolo="Versamenti continui a densità costante"}
Se la densità è costante e vale $c$ euro all'anno, per $\delta\ne0$ l'integrazione dà
$$
V_0=\frac{c(1-e^{-\delta T})}{\delta},
\qquad
M_T=\frac{c(e^{\delta T}-1)}{\delta}.
$$
Per $\delta=0$ l'importo complessivo è $cT$ a entrambe le date, poiché i fattori finanziari sono uguali a $1$. Con $c=600\,\mathrm{euro/anno}$ e $T=2$ anni l'importo senza interessi è $1200$ euro. Se $\delta>0$, il valore attuale è minore di $1200$ euro perché ogni euro futuro è scontato, mentre il montante è maggiore perché i versamenti precedenti a $T$ maturano interesse.
:::

:::osservazione
Una densità di $1200\,\mathrm{euro/anno}$ distribuisce $1200$ euro su un intero anno. Una rata di $1200$ euro a fine anno concentra lo stesso importo in un solo istante. A parità di forza positiva il flusso continuo ha valore attuale maggiore, poiché gli importi incassati prima della fine dell'anno vengono scontati per meno tempo. Se il dato del problema è il tasso annuo effettivo $i$, la forza costante da usare nell'integrale è $\delta=\log(1+i)$.
:::

:::esempio{titolo="Flusso continuo che inizia fra un anno"}
Un flusso di densità costante $c$ inizia al tempo $1$ e termina al tempo $3$. Con forza costante $\delta>0$ il valore al tempo $1$ è $c\dfrac{1-e^{-2\delta}}{\delta}$, perché il flusso dura due anni. Il valore attuale è
$$
V_0=e^{-\delta}\frac{c(1-e^{-2\delta})}{\delta}.
$$
Il fattore $e^{-\delta}$ riporta a oggi l'intero valore calcolato al tempo $1$. Integrando direttamente $ce^{-\delta t}$ tra $1$ e $3$ si ottiene infatti $\dfrac{c}{\delta}(e^{-\delta}-e^{-3\delta})$.
:::

## Densità a crescita esponenziale

::::teorema{#flussi-crescenti titolo="Valutazione di una densità esponenziale"}
Siano $c(t)=c_0e^{\gamma t}$ con $c_0>0$ e forza costante $\delta$. La densità iniziale $c_0$ è un importo per unità di tempo e $\gamma$ è il tasso istantaneo di variazione della densità nella medesima unità. Se $T$ è finito, la formula dipende dal rapporto fra crescita e forza.

- Per $\delta\ne\gamma$ vale $V_0=c_0\dfrac{1-e^{-(\delta-\gamma)T}}{\delta-\gamma}$.
- Per $\delta=\gamma$ vale $V_0=c_0T$.

Su un orizzonte infinito il valore attuale è finito esattamente quando $\delta>\gamma$. In questo caso vale $\dfrac{c_0}{\delta-\gamma}$.

:::dimostrazione
Il prodotto della densità per il fattore di sconto è $c_0e^{(\gamma-\delta)t}$. Se $\gamma\ne\delta$, la primitiva è $\dfrac{c_0}{\gamma-\delta}e^{(\gamma-\delta)t}$ e la differenza fra i valori agli estremi dà la formula. Se $\gamma=\delta$, si integra la costante $c_0$. Per $T\to+\infty$, quando $\delta>\gamma$ l'esponenziale tende a zero e la formula ha limite finito. Quando $\delta\leq\gamma$ l'integrando è sempre almeno $c_0>0$, quindi l'integrale cresce senza limite.
:::
::::

:::esempio{titolo="Densità effettiva e densità attualizzata"}
Con $c_0=100\,\mathrm{euro/anno}$, $\gamma=0{,}04\,\mathrm{anno}^{-1}$ e $\delta=0{,}08\,\mathrm{anno}^{-1}$, la densità effettiva è $100e^{0{,}04t}$ e la densità attualizzata è $100e^{-0{,}04t}$. La prima cresce mentre la seconda decresce, perché la forza di interesse supera la crescita. Su un orizzonte infinito il valore attuale è $\dfrac{100}{0{,}04}=2500\,\mathrm{euro}$.

::grafico{f="100*exp(0.04*x);100*exp(-0.04*x)" xmin=0 xmax=10 ymin=0 ymax=160 nomi="t,euro/anno" legenda="100e^{0{,}04t};100e^{-0{,}04t}" titolo="Densità effettiva e densità attualizzata al tempo zero con forza annua 0,08"}

:::

## Forza di interesse variabile

:::definizione{#intensita-variabile titolo="Fattore di sconto fra due date"}
Se la forza $\delta(u)$ è integrabile sull'intervallo tra le date $s\leq t$, la capitalizzazione fra le due date ha fattore $\exp\!\left(\int_s^t\delta(u)\,du\right)$. Il **fattore di sconto** dalla data $t$ alla data $s$ è il reciproco
$$
v(s,t)=\exp\left(-\int_s^t\delta(u)\,du\right).
$$
L'importo $C$ esigibile al tempo $t$ vale $Cv(s,t)$ al tempo $s$. Per pagamenti continui da $s$ a $T$, ciascun contributo $c(t)\,dt$ è pesato da $v(s,t)$, quindi il valore è $\int_s^T c(t)v(s,t)\,dt$. Quando la valutazione parte da una data intermedia, l'integrale della forza parte dalla stessa data.
:::

:::esempio{titolo="Due livelli successivi della forza"}
Una forza vale $0{,}03\,\mathrm{anno}^{-1}$ fino al tempo $2$ e $0{,}05\,\mathrm{anno}^{-1}$ dal tempo $2$ al tempo $5$. Un incasso di $1000$ euro al tempo $5$ vale al tempo $1$
$$
1000\exp\bigl(-0{,}03\cdot1-0{,}05\cdot3\bigr)
=1000e^{-0{,}18}\,\mathrm{euro}.
$$
Fra il tempo $1$ e il tempo $2$ trascorre un solo anno con la prima forza. Fra il tempo $2$ e il tempo $5$ trascorrono tre anni con la seconda. Gli integrali si sommano, quindi il fattore complessivo è il prodotto dei fattori relativi ai due intervalli.
:::

:::osservazione
Se $\delta(u)=a+bu$ con il tempo $u$ misurato in anni, $a$ si misura in $\mathrm{anno}^{-1}$ e $b$ in $\mathrm{anno}^{-2}$. L'integrale fra $0$ e $T$ vale $aT+\dfrac{bT^2}{2}$. È un numero puro, come richiede l'esponente. Su un intervallo $[s,t]$ lo stesso integrale vale $a(t-s)+\dfrac{b(t^2-s^2)}{2}$, poiché la forza al tempo $s$ vale già $a+bs$.
:::

:::esempio{titolo="Sconto di una rendita continua con forza a tratti"}
Una densità di $100\,\mathrm{euro/anno}$ è attiva per due anni. La forza è nulla nel primo anno e vale $\delta>0$ nel secondo. Il primo tratto contribuisce con $100$ euro. Un incasso al tempo $t\in[1,2]$ è scontato soltanto per il tratto compreso fra $1$ e $t$, quindi il suo fattore è $e^{-\delta(t-1)}$. Il secondo tratto contribuisce con $100\dfrac{1-e^{-\delta}}{\delta}$ euro. Valutare separatamente i due intervalli permette di usare l'esponenziale corretto in ciascuno.
:::

## Costituzione di capitale

:::definizione{#costituzione-capitale titolo="Equazione del piano di accumulo"}
Un **piano di costituzione di capitale** stabilisce quali depositi permettono di raggiungere un obiettivo $K$ a una data futura $n$. Indichiamo con $C_0$ il capitale depositato oggi e con $R_k$ gli importi versati ai tempi $t_k\leq n$. Per un tasso costante effettivo $i>-1$ la condizione è
$$
K=C_0q^n+\sum_k R_kq^{n-t_k}.
$$
Ciascun addendo è valutato al tempo $n$, quindi il deposito fatto proprio alla data dell'obiettivo compare con fattore $1$. Per $n$ versamenti annui posticipati uguali a $R$ si ricava
$$
R=\frac{K-C_0q^n}{s_{\overline n|i}},
\qquad
s_{\overline n|i}=\sum_{j=0}^{n-1}q^j.
$$
La differenza al numeratore è la parte dell'obiettivo da coprire con i nuovi versamenti. Se è uguale a zero, il deposito iniziale raggiunge da solo l'obiettivo. Se è negativa, per raggiungere esattamente $K$ occorre un prelievo oppure si deve ridurre il capitale iniziale, perché aggiungere versamenti positivi aumenterebbe il montante.
:::

:::esempio{titolo="Deposito finale a integrazione"}
Un conto rende il $10\%$ annuo. Si versano $1000$ euro oggi e $500$ euro fra un anno. L'obiettivo è $2000$ euro alla fine del secondo anno. A quella data i depositi già previsti valgono $1000\cdot1{,}1^2+500\cdot1{,}1=1760\,\mathrm{euro}$. Occorre quindi versare $240$ euro alla scadenza. Se si decidesse di versare l'integrazione un anno prima, l'importo diventerebbe $\dfrac{240}{1{,}1}\,\mathrm{euro}$, perché deve maturare un anno di interesse prima di coprire la stessa differenza finale.
:::

:::osservazione
Il montante si può controllare con una ricorrenza. Se $B_k$ è il saldo subito dopo il versamento al tempo $k$, si ha $B_k=qB_{k-1}+R_k$ con $B_0=C_0$. Si applica prima l'interesse al saldo che è rimasto investito durante il periodo e poi si aggiunge il deposito. Nel capitolo sugli ammortamenti il pagamento alla scadenza ha invece segno negativo nella ricorrenza del debito, poiché riduce il capitale da restituire.
:::
