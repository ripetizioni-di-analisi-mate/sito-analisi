---
titolo: "Campionamento, legge dei grandi numeri e teorema centrale del limite"
sommario: "Distribuzioni campionarie, errori standard, disuguaglianze, convergenza e approssimazioni normali."
---

## Campione casuale e statistiche

:::definizione{#campione titolo="Campione indipendente e identicamente distribuito"}
Un campione casuale $X_1,\dots,X_n$ è qui formato da variabili **indipendenti e identicamente distribuite**, abbreviato i.i.d. Una statistica, come $\bar X$, è una funzione del campione che non dipende da parametri ignoti. Prima dell'osservazione è aleatoria; dopo, assume il valore calcolato sui dati.

Le proprietà delle statistiche si studiano immaginando di ripetere il campionamento nelle stesse condizioni. Il campionamento senza reinserimento da una popolazione finita richiede una correzione della varianza e non coincide esattamente con il modello i.i.d.
:::

## Media campionaria ed errore standard

:::teorema{#media-campionaria titolo="Distribuzione della media"}
Per un campione i.i.d. con media $\mu$ e varianza finita $\sigma^2$,
$$
E[\bar X]=\mu,\qquad\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},\qquad SE(\bar X)=\frac{\sigma}{\sqrt n}.
$$
Il simbolo $SE$ indica l'errore standard, cioè la deviazione standard della statistica. Se $\sigma$ è ignota, si stima con $S/\sqrt n$. Per dimezzare l'errore standard occorre quadruplicare $n$, mantenendo la stessa variabilità della popolazione.
:::

## Disuguaglianze di Markov e Chebyshev

:::teorema{#chebyshev titolo="Controlli di probabilità senza normalità"}
Per $Y\ge0$ con attesa finita e $a>0$, $P(Y\ge a)\le E[Y]/a$. Applicando questa disuguaglianza a $(X-\mu)^2$, con varianza finita, si ottiene
$$
P(|X-\mu|\ge\varepsilon)\le\frac{\sigma^2}{\varepsilon^2}\quad(\varepsilon>0).
$$
Un limite superiore maggiore di 1 può essere sostituito con 1. Per la media campionaria il numeratore diventa $\sigma^2/n$. Questi limiti valgono senza assumere una particolare distribuzione, ma possono essere poco precisi.
:::

## Legge dei grandi numeri

::::teorema{#legge-grandi-numeri titolo="Convergenza della media"}
Per un campione i.i.d. con media $\mu$ e varianza finita, $\bar X_n$ converge in probabilità a $\mu$:
$$
P(|\bar X_n-\mu|>\varepsilon)\longrightarrow0
\quad\text{per ogni }\varepsilon>0.
$$
:::dimostrazione
Chebyshev fornisce $P(|\bar X_n-\mu|>\varepsilon)\le\sigma^2/(n\varepsilon^2)$. Per $n\to\infty$ il membro destro tende a zero, quindi anche la probabilità a sinistra tende a zero.
:::
::::

## Teorema centrale del limite

:::teorema{#tcl titolo="Approssimazione normale della media"}
Per variabili i.i.d. con media $\mu$ e varianza $0<\sigma^2<\infty$,
$$
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}\xrightarrow{d}N(0,1).
$$
Per $n$ sufficientemente grande si approssima $\bar X_n$ con $N(\mu,\sigma^2/n)$. La velocità di approssimazione dipende dalla distribuzione: non esiste una soglia universale che renda adeguata ogni popolazione. Se la popolazione è normale, la distribuzione normale della media è esatta per ogni $n$.
:::

## Proporzioni e correzione di continuità

:::osservazione{#proporzioni titolo="Dalla binomiale alla normale"}
Se $K\sim\operatorname{Bin}(n,p)$, la proporzione $\hat p=K/n$ ha media $p$ e varianza $p(1-p)/n$. La normale approssima la binomiale quando $np$ e $n(1-p)$ sono abbastanza grandi; una regola pratica prudente richiede entrambi almeno 10.

Per approssimare $P(K\le k)$ si usa il bordo $k+0{,}5$; per $P(a\le K\le b)$ si usano $a-0{,}5$ e $b+0{,}5$. La correzione rappresenta mediante intervalli di larghezza uno le masse poste sugli interi.
:::

## Campioni normali e popolazioni finite

:::teorema{#normale-campione titolo="Risultati esatti e correzione finita"}
In un campione i.i.d. normale, $\bar X$ e $S^2$ sono indipendenti, $(n-1)S^2/\sigma^2\sim\chi^2_{n-1}$ e $(\bar X-\mu)/(S/\sqrt n)\sim t_{n-1}$.

Per un campione casuale semplice senza reinserimento di $n$ unità su $N$, definendo la varianza della popolazione con divisore $N$, si ha $\operatorname{Var}(\bar X)=\sigma^2(N-n)/(n(N-1))$. Quando $n=N$, la media è osservata esattamente e la varianza campionaria della media è zero.
:::
