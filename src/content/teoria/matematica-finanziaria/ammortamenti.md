---
titolo: Ammortamento dei prestiti e debito residuo
sommario: Piani francese, italiano e americano, debito residuo, estinzione anticipata e valutazione delle quote capitale e interesse.
---

## Equazioni del piano

:::definizione{#piano-ammortamento titolo="Rata, quota capitale e quota interesse"}
Un prestito di importo iniziale $D_0$ viene rimborsato con rate $R_k$ ai tempi $k=1,\ldots,n$. Il debito subito dopo la rata $k$ è $D_k$. Al tasso periodale $i$, la quota interesse è $I_k=iD_{k-1}$, la quota capitale è $C_k=R_k-I_k$, e
$$D_k=D_{k-1}-C_k=D_{k-1}(1+i)-R_k.$$
Un piano completamente estinto soddisfa $D_n=0$ e $\sum_{k=1}^nC_k=D_0$. Nel calcolo si mantengono cifre sufficienti e si arrotondano gli importi esposti ai centesimi; l'ultima rata può essere corretta per eliminare gli scarti dovuti agli arrotondamenti.
:::

## Ammortamento francese

:::teorema{#francese titolo="Rata costante"}
Nel piano francese la rata posticipata è costante e vale
$$R=\frac{D_0}{a_{\overline n|i}}.$$
La quota capitale cresce in progressione geometrica di ragione $1+i$, perché $C_{k+1}=(1+i)C_k$. Per $i>0$ il debito residuo diminuisce, quindi la quota interesse diminuisce e la quota capitale aumenta. La formula della rata segue dall'equivalenza fra il capitale erogato e il valore attuale delle rate.
:::

:::esempio{titolo="Due rate annuali"}
Per $D_0=2100$, $i=10\%$ e $n=2$, la rata è $1210$. Il piano, calcolato senza arrotondamenti intermedi, è

| Rata | Debito iniziale | Interesse | Capitale | Rata pagata | Debito finale |
| --- | ---: | ---: | ---: | ---: | ---: |
| 1 | 2100 | 210 | 1000 | 1210 | 1100 |
| 2 | 1100 | 110 | 1100 | 1210 | 0 |

Le quote capitale sommano $2100$ e le quote interesse sommano $320$.
:::

## Ammortamento italiano

:::definizione{#italiano titolo="Quota capitale costante"}
Nel piano italiano $C_k=\dfrac{D_0}{n}$ per ogni rata. Pertanto
$$D_k=D_0\left(1-\frac kn\right),\quad I_k=iD_0\left(1-\frac{k-1}n\right),\quad R_k=\frac{D_0}n+I_k.$$
Per tasso positivo le rate diminuiscono di $\dfrac{iD_0}n$ a ogni periodo. L'interesse totale è $iD_0\dfrac{n+1}2$, perché i debiti iniziali dei periodi formano una progressione aritmetica. Con $D_0=2000$, due rate e $i=10\%$, si pagano $1200$ euro e poi $1100$ euro.
:::

## Ammortamento americano

:::definizione{#americano titolo="Rimborso finale e fondo di accumulo"}
Nel prestito con rimborso finale del capitale si pagano al creditore gli interessi $iD_0$ a ogni periodo e il capitale $D_0$ alla scadenza. Nel piano americano con fondo di accumulo, il debitore versa anche una quota $Q$ in un fondo che rende $j$ per periodo. Se i versamenti nel fondo sono posticipati,
$$Q=\frac{D_0}{s_{\overline n|j}}.$$
L'esborso periodico complessivo, escluso il trasferimento finale dal fondo al creditore, è $iD_0+Q$. Il capitale del fondo dopo $k$ versamenti è $Q s_{\overline k|j}$. Il tasso del prestito $i$ e quello del fondo $j$ descrivono due operazioni distinte.
:::

## Debito residuo

::::teorema{#debito-residuo titolo="Metodi prospettivo e retrospettivo"}
Subito dopo la rata $k$, il debito residuo può essere calcolato come valore delle rate future oppure come montante del capitale iniziale meno il montante delle rate già pagate:
$$D_k=\sum_{h=k+1}^nR_h(1+i)^{k-h}
=D_0(1+i)^k-\sum_{h=1}^kR_h(1+i)^{k-h}.$$
Nel piano francese il primo metodo dà $D_k=R a_{\overline{n-k}|i}$.

:::dimostrazione
L'equivalenza iniziale è $D_0=\sum_{h=1}^nR_h(1+i)^{-h}$. Moltiplicando per $(1+i)^k$ e separando le rate fino a $k$ da quelle successive si ottiene l'uguaglianza dei due metodi.
:::
::::

## Estinzione anticipata

:::definizione{#estinzione-anticipata titolo="Data di rimborso e valore delle rate residue"}
Nel modello contrattuale senza costi aggiuntivi, l'importo per estinguere subito dopo la rata $k$ è $D_k$. A una frazione $\theta$ di periodo dopo quella rata, con convenzione esponenziale, è $D_k(1+i)^\theta$. Se si valuta invece il credito al tasso di mercato $j$, il suo valore è $\sum_{h=k+1}^nR_h(1+j)^{k-h}$. Il debito contrattuale e il valore di mercato possono quindi essere diversi. Eventuali importi aggiuntivi assegnati dalla traccia si sommano alla data in cui sono dovuti.
:::

## Usufrutto e nuda proprietà

:::definizione{#usufrutto-nuda-proprieta titolo="Valutazione separata delle quote"}
Alla data iniziale, per un tasso di valutazione $j$, il valore delle quote interesse è l'usufrutto $U(j)$ e quello delle quote capitale è la nuda proprietà $N(j)$:
$$U(j)=\sum_{k=1}^nI_k(1+j)^{-k},\qquad N(j)=\sum_{k=1}^nC_k(1+j)^{-k}.$$
Il valore del prestito è $U(j)+N(j)$ perché $R_k=I_k+C_k$. Se $j=i$, questo valore è $D_0$; con un tasso diverso si ottiene il valore di mercato del piano. Nel piano italiano le quote capitale sono costanti, quindi $N(j)=\dfrac{D_0}{n}a_{\overline n|j}$.
:::

## Variazione del tasso

:::definizione{#tasso-variabile titolo="Ricalcolo della rata sul debito residuo"}
In un modello in cui il tasso viene aggiornato subito dopo una rata e il rimborso resta a rata costante fino al successivo aggiornamento, si usa il debito residuo come nuovo capitale. Se restano $m$ rate e il nuovo tasso è $j$, la rata ricalcolata è
$$R_{\mathrm{nuova}}=\frac{D_k}{a_{\overline m|j}}.$$
La prima quota interesse successiva è $jD_k$. Questa convenzione va specificata nel problema: un diverso contratto può mantenere la rata e modificare la durata, oppure stabilire regole diverse di aggiornamento.
:::
