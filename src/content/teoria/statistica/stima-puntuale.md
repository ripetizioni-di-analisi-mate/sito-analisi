---
titolo: "Stima puntuale e massima verosimiglianza"
sommario: "Stimatori, distorsione, MSE, metodo dei momenti, massima verosimiglianza e consistenza."
---

## Stimatore e stima osservata

:::definizione{#stimatore titolo="Stimatori di un parametro"}
Uno **stimatore** $T=T(X_1,\dots,X_n)$ è una statistica usata per approssimare un parametro $\theta$. La stima è il valore numerico ottenuto su un campione. Per stimare una media si può usare $\bar X$; per una proporzione, la frequenza campionaria $\hat p$.

Il parametro è fissato dal modello, mentre lo stimatore cambia al cambiare del campione. La scelta si valuta attraverso la sua distribuzione campionaria, non soltanto confrontando il valore ottenuto in una singola rilevazione.
:::

## Distorsione ed errore quadratico medio

:::definizione{#eqm titolo="Bias ed errore quadratico medio"}
La distorsione è $b_\theta(T)=E_\theta[T]-\theta$. Uno stimatore è corretto se la distorsione è zero per ogni parametro ammissibile. Quando i secondi momenti esistono,
$$
MSE_\theta(T)=E_\theta[(T-\theta)^2]
=\operatorname{Var}_\theta(T)+b_\theta(T)^2.
$$
La scomposizione deriva dall'espansione dello scarto attorno a $E[T]$; il termine misto ha attesa zero. Uno stimatore distorto può avere MSE inferiore a uno corretto, se la riduzione della varianza compensa il quadrato della distorsione.
:::

## Stima di media e varianza

:::teorema{#varianza-corretta titolo="Correzione della varianza campionaria"}
Per un campione i.i.d. con secondo momento finito, $\bar X$ è corretta per $\mu$ e
$$
E\!\left[\frac1n\sum_i(X_i-\bar X)^2\right]=\frac{n-1}{n}\sigma^2.
$$
Quindi $S^2=\sum_i(X_i-\bar X)^2/(n-1)$ è corretta per $\sigma^2$ quando $n>1$. La radice $S$ non è in generale corretta per $\sigma$. La stima della varianza e quella della deviazione standard hanno proprietà di distorsione diverse.
:::

## Metodo dei momenti

:::definizione{#momenti titolo="Equazioni dei momenti"}
Il metodo dei momenti uguaglia momenti teorici e momenti campionari. Per un modello a un parametro si può risolvere $E_\theta[X]=\bar x$; con più parametri possono servire anche $E_\theta[X^2]=\sum_i x_i^2/n$ e momenti successivi.

Per una Poisson, $E[X]=\lambda$, quindi $\hat\lambda=\bar x$. Per un'esponenziale con tasso $\lambda$, $E[X]=1/\lambda$, quindi $\hat\lambda=1/\bar x$. Si controlla sempre che la soluzione appartenga allo spazio dei parametri.
:::

## Massima verosimiglianza

:::definizione{#verosimiglianza titolo="Funzione di verosimiglianza"}
Fissati i dati osservati, $L(\theta)=\prod_i f_\theta(x_i)$ per un campione indipendente, usando masse nel caso discreto. Si cerca il parametro che massimizza questa funzione; spesso è più comodo massimizzare $\ell(\theta)=\log L(\theta)$.

Per $k$ successi Bernoulli su $n$, $\ell(p)=k\log p+(n-k)\log(1-p)$ e la soluzione è $\hat p=k/n$, includendo i casi di bordo $k=0,n$. La verosimiglianza è una funzione del parametro con dati fissati, non una densità di probabilità del parametro.
:::

## Supporto dipendente dal parametro

:::esempio{#uniforme titolo="Stima dell'estremo di un'uniforme"}
Per un campione da $U(0,\theta)$, con $\theta>0$, la verosimiglianza è proporzionale a $\theta^{-n}$ per $\theta\ge M$, dove $M=\max_i x_i$, ed è zero altrimenti. Quindi lo stimatore di massima verosimiglianza è $M$.

Poiché $E[M]=n\theta/(n+1)$, lo stimatore $(n+1)M/n$ è corretto. Il metodo dei momenti dà invece $2\bar X$. Ignorare il vincolo $\theta\ge M$ farebbe perdere la soluzione, che si trova sul bordo del supporto ammissibile.
:::

## Consistenza ed efficienza

:::definizione{#consistenza titolo="Proprietà al crescere del campione"}
$T_n$ è consistente per $\theta$ se converge in probabilità a $\theta$. Se $MSE(T_n)\to0$, Chebyshev applicata allo scarto quadratico implica la consistenza. Per stimatori corretti dello stesso parametro, una varianza minore indica maggiore precisione nel confronto considerato.

In modelli regolari, il limite di Cramér-Rao per stimatori corretti è $1/I_n(\theta)$, dove $I_n$ è l'informazione di Fisher del campione; richiede ipotesi di regolarità, tra cui la legittimità dello scambio tra derivata e integrale. I modelli uniformi con supporto dipendente dal parametro non soddisfano automaticamente queste ipotesi.
:::
