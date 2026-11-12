---
titolo: Rendite variabili, flussi continui e costituzione di capitale
sommario: Valutazione di rate irregolari, progressioni aritmetiche e geometriche, flussi continui e piani di accumulo.
---

## Rate di importo diverso

:::definizione{#rendita-generica titolo="Somma dei valori attuali"}
Per rate certe $R_k$ ai tempi $t_k$, il valore attuale al tasso composto costante $i>-1$ è
$$V=\sum_{k=1}^nR_k(1+i)^{-t_k}.$$
La formula vale anche con scadenze non equidistanti. Tre rate di $100$, $200$ e $300$ euro ai tempi $1$, $2$ e $3$, al $5\%$, hanno valore $\dfrac{100}{1{,}05}+\dfrac{200}{1{,}05^2}+\dfrac{300}{1{,}05^3}$. La forma della sequenza delle rate determina se la somma può essere espressa con una formula compatta.
:::

## Rate in progressione aritmetica

:::teorema{#progressione-aritmetica titolo="Rate che aumentano di una quantità costante"}
Per rate posticipate $R_k=R_1+(k-1)d$, dove $d$ è l'incremento in euro per periodo, si ha
$$V=R_1a_{\overline n|i}+d\sum_{k=1}^n(k-1)v^k,\qquad v=(1+i)^{-1}.$$
Per $v\ne1$ la seconda somma si calcola con
$$\sum_{k=1}^n(k-1)v^k=\frac{v^2-nv^{n+1}+(n-1)v^{n+2}}{(1-v)^2}.$$
La formula segue derivando la somma geometrica finita e sottraendo la somma senza il fattore $k$. Con tre rate $100$, $120$, $140$ si ha $R_1=100$ e $d=20$. Per un piano di soli incassi si richiede che tutte le rate considerate siano non negative; un incremento negativo può rispettare questa condizione soltanto per un numero limitato di periodi.
:::

## Rate in progressione geometrica

::::teorema{#progressione-geometrica titolo="Rate che crescono a un tasso costante"}
Se $R_k=R_1(1+g)^{k-1}$ per $k=1,\ldots,n$, con $g>-1$, il valore è
$$V=\frac{R_1}{i-g}\left[1-\left(\frac{1+g}{1+i}\right)^n\right]\quad(i\ne g).$$
Se $i=g$, ogni rata attualizzata vale $\dfrac{R_1}{1+i}$ e quindi $V=\dfrac{nR_1}{1+i}$. Una crescita del $2\%$ significa moltiplicare ogni rata precedente per $1{,}02$; differisce da un incremento costante di $2$ euro.

:::dimostrazione
Il valore della rata $k$ è $\dfrac{R_1}{1+i}\left(\dfrac{1+g}{1+i}\right)^{k-1}$. La somma è geometrica di ragione $q=\dfrac{1+g}{1+i}$. Se $q\ne1$ si usa $\dfrac{1-q^n}{1-q}$; il fattore iniziale diviso per $1-q$ è $\dfrac{R_1}{i-g}$. Se $q=1$ si sommano $n$ termini uguali.
:::
::::

## Perpetuità crescente

:::teorema{#perpetuita-crescente titolo="Convergenza della rendita crescente"}
Per $R_1>0$, $i>g>-1$, la perpetuità crescente posticipata vale
$$V=\frac{R_1}{i-g}.$$
La condizione equivale a $0<\dfrac{1+g}{1+i}<1$, quindi assicura la convergenza della serie geometrica. Se $R_1=100$, $i=5\%$ e $g=2\%$, il valore è $\dfrac{100}{0{,}03}$, circa $3333{,}33$ euro. Con $i=g$ ogni termine attualizzato è costante e positivo, quindi la serie diverge; con $g>i$ i termini crescono.
:::

## Flussi continui

:::definizione{#flussi-continui titolo="Intensità di pagamento costante"}
Una densità di pagamento $c(t)$, misurata in euro per anno, rappresenta l'importo che si riceve nell'intervallo infinitesimo $dt$ come $c(t)\,dt$. Con forza di interesse costante $\delta$ il valore attuale è
$$V=\int_0^T c(t)e^{-\delta t}\,dt.$$
Se $c(t)=c$ è costante e $\delta\ne0$, allora $V=c\dfrac{1-e^{-\delta T}}\delta$. Il montante al tempo $T$ è $M=c\dfrac{e^{\delta T}-1}\delta$. Per $\delta=0$ entrambi valgono $cT$. Il parametro $c$ è un importo per unità di tempo, mentre $R$ in una rendita discreta è l'importo di una singola rata.
:::

## Flussi continui crescenti

:::teorema{#flussi-crescenti titolo="Crescita esponenziale della densità"}
Con $c(t)=c_0e^{\gamma t}$ e forza costante $\delta$, si ottiene
$$V=c_0\int_0^T e^{-(\delta-\gamma)t}\,dt
=c_0\frac{1-e^{-(\delta-\gamma)T}}{\delta-\gamma}\quad(\delta\ne\gamma).$$
Se $\delta=\gamma$, il valore è $c_0T$. Per un orizzonte infinito e $c_0>0$ serve $\delta>\gamma$; in tal caso $V=\dfrac{c_0}{\delta-\gamma}$. La dimostrazione consiste nel moltiplicare la densità per il fattore di sconto e integrare l'esponenziale risultante.
:::

## Intensità di interesse variabile

:::definizione{#intensita-variabile titolo="Attualizzazione con intensità deterministica"}
Se la forza di interesse varia nel tempo, il fattore di sconto è
$$v(0,t)=\exp\left(-\int_0^t\delta(u)\,du\right).$$
Per un importo singolo $C$ al tempo $T$ il valore è $Cv(0,T)$; per una densità $c(t)$ si integra $c(t)v(0,t)$. Per esempio, con $\delta(t)=a+bt$ si ha $v(0,T)=e^{-aT-\frac12bT^2}$. Con intensità costanti diverse su intervalli successivi, l'integrale è la somma delle intensità moltiplicate per le rispettive durate. Ogni coefficiente deve usare la stessa unità temporale della variabile $t$.
:::

## Costituzione di capitale

:::definizione{#costituzione-capitale titolo="Piano di accumulo"}
Per costituire un capitale $K$ al tempo $n$, un deposito iniziale $C_0$ e versamenti posticipati costanti $R$ devono soddisfare
$$K=C_0(1+i)^n+R s_{\overline n|i}.$$
Quindi $R=\dfrac{K-C_0(1+i)^n}{s_{\overline n|i}}$. Il numeratore è il capitale ancora da formare al tempo finale. Con versamenti irregolari si sostituisce $R s_{\overline n|i}$ con $\sum_kR_k(1+i)^{n-t_k}$. Il piano riguarda l'accumulo dei depositi; nell'ammortamento, invece, si ricostruisce il debito residuo di un prestito dopo ciascun pagamento.
:::
