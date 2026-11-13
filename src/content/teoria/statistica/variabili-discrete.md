---
titolo: "Variabili aleatorie e distribuzioni discrete"
sommario: "Dalla funzione di massa alla scelta tra Bernoulli, binomiale, geometrica, Poisson e ipergeometrica."
---

## Valori possibili e funzione di massa

:::definizione{#variabile-discreta titolo="Variabile aleatoria discreta"}
Sia $\Omega$ lo spazio degli esiti di un esperimento. Una **variabile aleatoria discreta** $X$ assegna un numero a ciascun esito e assume, con probabilità complessiva $1$, valori in un insieme finito o numerabile. Il **supporto** discreto è l'insieme $S_X$ dei valori che hanno probabilità strettamente positiva. L'evento $\{X=x\}$ comprende tutti gli esiti ai quali $X$ assegna lo stesso valore $x$.

Se si lanciano due monete, gli esiti testa-croce e croce-testa sono distinti. Quando $X$ conta le teste, entrambi appartengono a $\{X=1\}$. La variabile conserva il conteggio e consente di trattare insieme gli esiti che producono lo stesso risultato.
:::

:::definizione{#massa titolo="Funzione di massa"}
La **funzione di massa** di $X$ assegna a ogni numero reale $x$ la probabilità $p_X(x)=P(X=x)$. Le masse sono non negative e la loro somma sul supporto è $1$. Per un insieme $A$ di valori, si ha
$$
P(X\in A)=\sum_{x\in S_X\cap A}p_X(x).
$$
Gli eventi $\{X=x\}$ relativi a valori distinti sono disgiunti. Perciò la probabilità che $X$ appartenga ad $A$ si trova sommando una volta sola la massa di ciascun valore compreso in $A$.
:::

:::esempio{titolo="Normalizzazione di una legge"}
Un contatore assegna ai valori $0$, $1$ e $3$ le masse $c$, $3c$ e $4c$. Poiché questi sono tutti i valori possibili, la somma delle tre masse è $1$. Si ottiene
$$
c+3c+4c=1,\qquad c=\frac18.
$$
La costante è positiva, quindi tutte le masse sono ammissibili. Nell'intervallo $(0,3]$ cadono $1$ e $3$, perciò $P(0<X\le 3)=\dfrac38+\dfrac48=\dfrac78$. L'estremo aperto esclude la massa in $0$, mentre l'estremo chiuso include la massa in $3$.

::grafico{xmin=-0.7 xmax=3.8 ymin=-0.09 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.125;1,0 1,0.375;3,0 3,0.5" punti="0,0.125,pieno;1,0.375,pieno;3,0.5,pieno" etichette="0.16,0.17,⅛;1.16,0.42,⅜;3.13,0.545,½" titolo="Le masse in 1 e 3 contribuiscono alla probabilità dell’intervallo, mentre la massa in 0 è esclusa."}
:::

:::attenzione
La normalizzazione da sola è insufficiente per stabilire se una tabella è una funzione di massa. I numeri $-\dfrac14$, $\dfrac12$ e $\dfrac34$ sommano a $1$, ma il primo è negativo. Se le masse dipendono da un parametro, la sua ammissibilità si controlla anche imponendo che ogni singola massa sia non negativa.
:::

## Funzione di ripartizione e salti

:::definizione{#ripartizione-discreta titolo="Funzione di ripartizione"}
La **funzione di ripartizione** di $X$ è $F_X(t)=P(X\le t)$, dove $t$ è una soglia reale. Per ogni $a<b$,
$$
F_X(t)=\sum_{\substack{x\in S_X\\x\le t}}p_X(x),
\qquad P(a<X\le b)=F_X(b)-F_X(a).
$$
La differenza sottrae tutti i valori fino ad $a$ incluso. La funzione è non decrescente perché, al crescere di $t$, si includono altri valori con massa non negativa. Indicando con $F_X(t^-)$ il limite da sinistra, si ha $p_X(t)=F_X(t)-F_X(t^-)$. La differenza misura il salto nel punto e permette di ricostruire le masse dalla ripartizione.
:::

:::esempio{titolo="Lettura di una ripartizione"}
Sia $X$ il numero di richieste in una breve osservazione, con masse $\dfrac14$, $\dfrac12$ e $\dfrac14$ in $0$, $1$ e $2$. La ripartizione vale $0$ prima di $0$, $\dfrac14$ tra $0$ incluso e $1$ escluso, $\dfrac34$ tra $1$ incluso e $2$ escluso e $1$ da $2$ in poi. In particolare, $F_X(1)=\dfrac34$ perché al valore $1$ è già stata aggiunta la sua massa. Invece $F_X(1^-)=\dfrac14$. Il salto tra i due livelli è $\dfrac12$, che coincide con $P(X=1)$.

::grafico{linee="-1,0 0,0;0,0.25 1,0.25;1,0.75 2,0.75;2,1 3.2,1" punti="0,0,vuoto;0,0.25,pieno;1,0.25,vuoto;1,0.75,pieno;2,0.75,vuoto;2,1,pieno" xmin=-1 xmax=3.2 ymin=-0.15 ymax=1.2 nomi="t,F_X(t)" etichette="-0.25,0.25,¼;0.7,0.75,¾" legenda=0 titolo="Ripartizione con salti nei valori 0, 1 e 2"}

La probabilità $P(1<X\le 2)$ è $F_X(2)-F_X(1)=1-\dfrac34=\dfrac14$. Se si include l'estremo inferiore, si ottiene invece $P(1\le X\le 2)=F_X(2)-F_X(1^-)=\dfrac34$. La differenza tra le due risposte è la massa in $1$.
:::

## Valore atteso, varianza e trasformazioni

:::definizione{#momenti titolo="Momenti di una variabile discreta"}
Il **valore atteso** $E[X]$ è la media dei valori pesata con le loro probabilità. Se $\sum_{x\in S_X}|x|p_X(x)<\infty$, vale
$$
E[X]=\sum_{x\in S_X}x\,p_X(x).
$$
Se $E[X^2]<\infty$, si indica con $\mu=E[X]$ la media e si definisce la **varianza**
$$
\operatorname{Var}(X)=E[(X-\mu)^2]=E[X^2]-\mu^2.
$$
La prima espressione è la media dei quadrati degli scarti da $\mu$. La seconda si ottiene sviluppando il quadrato e usando $E[X]=\mu$. La radice della varianza è la deviazione standard e ha le stesse unità di $X$.

Per una funzione $g$, si ottiene $E[g(X)]=\sum_{x\in S_X}g(x)p_X(x)$ quando la somma converge assolutamente. Si può quindi calcolare il secondo momento usando la tabella di $X$ e sostituendo ogni valore $x$ con $x^2$.
:::

:::esempio{titolo="Valore atteso di un premio"}
Un premio $X$ vale $0\,\mathrm{EUR}$ con probabilità $\dfrac12$, $4\,\mathrm{EUR}$ con probabilità $\dfrac14$ e $8\,\mathrm{EUR}$ con probabilità $\dfrac14$. Misurando gli importi in euro, si ottiene
$$
\begin{aligned}
E[X]&=0\cdot\frac12+4\cdot\frac14+8\cdot\frac14=3,\\[6pt]
E[X^2]&=0^2\cdot\frac12+4^2\cdot\frac14+8^2\cdot\frac14=20,\\[6pt]
\operatorname{Var}(X)&=20-3^2=11.
\end{aligned}
$$
La media vale $3\,\mathrm{EUR}$, anche se il premio effettivo assume soltanto i tre importi indicati. La varianza vale $11\,\mathrm{EUR}^2$. Con un biglietto da $3\,\mathrm{EUR}$ il guadagno netto atteso è zero, mentre il guadagno effettivo dipende dall'esito.
:::

::::teorema{#momenti-affini titolo="Momenti di una trasformazione affine"}
Sia $Y=a+bX$, con $a,b\in\mathbb R$. Se $X$ ha media finita, $E[Y]=a+bE[X]$. Se ha anche secondo momento finito, $\operatorname{Var}(Y)=b^2\operatorname{Var}(X)$.

:::dimostrazione
La formula per la media segue dalla linearità dell'attesa. Di conseguenza lo scarto di $Y$ dalla propria media è
$$
Y-E[Y]=a+bX-a-bE[X]=b(X-E[X]).
$$
Elevando al quadrato e prendendo l'attesa si ottiene la formula per la varianza.
:::

Se tutti i premi sono raddoppiati, la loro deviazione standard raddoppia. Se a tutti i premi si aggiunge lo stesso importo, ciascuno si sposta quanto la media e la dispersione resta la stessa.
::::

## Bernoulli e conteggio binomiale

:::definizione{#bernoulli titolo="Indicatore e legge di Bernoulli"}
Per un evento $A$ di probabilità $p$, l'indicatore $I_A$ vale $1$ quando $A$ si verifica e $0$ altrimenti. Si dice che $I_A$ ha legge di **Bernoulli** di parametro $p$, con $0\le p\le 1$. Poiché $I_A^2=I_A$, si ha
$$
E[I_A]=p,\qquad
\operatorname{Var}(I_A)=p-p^2=p(1-p).
$$
L'indicatore consente di scrivere un conteggio come somma. Se $A_i$ è l'evento che l'unità $i$ supera un controllo, il numero di unità promosse è la somma dei rispettivi indicatori.
:::

::::teorema{#binomiale titolo="Legge binomiale"}
Si eseguano $n\ge 1$ prove indipendenti, ciascuna con probabilità di successo $p$ costante. Il numero $X$ di successi ha legge **binomiale** $\operatorname{Bin}(n,p)$. Per $0<p<1$,
$$
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,\ldots,n.
$$
La media è $np$ e la varianza è $np(1-p)$. Quando $p=0$ o $p=1$, il conteggio è costante, rispettivamente $0$ o $n$, e le formule per media e varianza restano valide.

:::dimostrazione
Si fissino le $k$ posizioni delle prove riuscite. Per indipendenza, la sequenza che riesce in quelle posizioni e fallisce nelle altre ha probabilità $p^k(1-p)^{n-k}$. Esistono $\binom nk$ scelte disgiunte di posizioni, quindi la massa è il loro numero per la probabilità di ciascuna. Scrivendo $X$ come somma di $n$ indicatori di Bernoulli, la linearità dell'attesa dà $np$. Gli indicatori sono indipendenti, quindi le loro varianze si sommano e si ottiene $np(1-p)$.
:::
::::

:::esempio{titolo="Da una soglia al suo complementare"}
Si lanciano quattro dadi indipendenti e si conta quante volte compare il $6$. Ogni prova riesce con probabilità $\dfrac16$. L'evento «compare almeno un $6$» è complementare all'evento «tutte le prove falliscono», perciò
$$
P(X\ge 1)=1-P(X=0)=1-\left(\frac56\right)^4.
$$
Per calcolare $P(X\ge2)$ conviene sottrarre invece le due masse $P(X=0)$ e $P(X=1)$. Il valore di soglia determina quali conteggi appartengono al complementare.
:::

:::attenzione
La legge binomiale richiede la stessa probabilità di successo in ogni prova. Se due prove indipendenti hanno probabilità $\dfrac14$ e $\dfrac34$, la probabilità di due successi è $\dfrac{3}{16}$. Una $\operatorname{Bin}(2,\dfrac12)$ avrebbe la stessa media, pari a $1$, ma probabilità $\dfrac14$ di due successi. La media comune, dunque, è insufficiente per identificare la legge.
:::

## Geometrica e attesa di più successi

:::definizione{#geometrica titolo="Legge geometrica"}
Si ripetano prove indipendenti con probabilità di successo $p$ costante, con $0<p<1$. Sia $T$ il numero della prova in cui si ottiene il primo successo, inclusa nel conteggio. Ponendo $q=1-p$, si ha
$$
P(T=k)=q^{k-1}p,\quad k=1,2,\ldots,
\qquad P(T>m)=q^m,\quad m=0,1,\ldots.
$$
L'evento $T=k$ richiede $k-1$ fallimenti seguiti da un successo. L'evento $T>m$ richiede invece che le prime $m$ prove siano tutte fallite. La media è $E[T]=\dfrac1p$ e la varianza è $\operatorname{Var}(T)=\dfrac{1-p}{p^2}$. Per $p=1$ si ha $T=1$ con certezza, quindi valgono ancora le formule dei momenti. La variabile $T-1$ conta soltanto i fallimenti e parte da $0$.
:::

:::osservazione
Per ogni intero positivo $T$, una realizzazione pari a $k$ contribuisce una volta a ciascuno degli eventi $T>0,\ldots,T>k-1$. Sommando le probabilità delle code si ottiene quindi il valore atteso. Per una geometrica di parametro $p$,
$$
E[T]=\sum_{m=0}^{\infty}P(T>m)=\sum_{m=0}^{\infty}q^m=\frac{1}{1-q}=\frac1p.
$$
Il passaggio dalla somma per valori alla somma per soglie è lecito perché i termini sono non negativi. Lo stesso ragionamento con $k(k-1)=2\sum_{m=0}^{k-1}m$ dà $E[T(T-1)]=2\sum_{m\ge0}m q^m=\dfrac{2q}{p^2}$. Il secondo momento si ottiene aggiungendo $E[T]$, quindi sottraendo il quadrato della media si trova la varianza $\dfrac q{p^2}$.
:::

:::esempio{titolo="Probabilità puntuale e probabilità di coda"}
Sia $p=\dfrac14$. La probabilità che il primo successo cada alla quarta prova è $\left(\dfrac34\right)^3\dfrac14$. La probabilità che cada dopo la quarta prova è $\left(\dfrac34\right)^4$. Nel primo calcolo la quarta prova riesce, mentre nel secondo fallisce. Se il successo deve arrivare entro la quarta prova, il complementare fornisce $1-\left(\dfrac34\right)^4$.
:::

::::teorema{#geometrica-memoria titolo="Assenza di memoria"}
Sia $T$ geometrica con $0<p<1$. Per interi $m,k\ge 0$ si ha $P(T>m+k\mid T>m)=P(T>k)$. La probabilità di attendere ancora oltre $k$ prove, sapendo che le prime $m$ sono fallite, è la stessa che si aveva prima di iniziare.

:::dimostrazione
Poiché $\{T>m+k\}$ è contenuto in $\{T>m\}$ e $q^m>0$, si ottiene
$$
P(T>m+k\mid T>m)
=\frac{P(T>m+k)}{P(T>m)}
=\frac{q^{m+k}}{q^m}=q^k.
$$
:::
::::

:::definizione{#binomiale-negativa titolo="Attesa dell'r-esimo successo"}
Sia $T_r$ il numero della prova che conclude una sequenza con $r$ successi, dove $r\ge1$ è fissato. Nelle stesse condizioni della legge geometrica, $T_r$ ha legge **binomiale negativa**. Per $k\ge r$,
$$
P(T_r=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r}.
$$
Nelle prime $k-1$ prove devono comparire esattamente $r-1$ successi e l'ultima deve riuscire. La durata è la somma delle attese tra successi consecutivi, ciascuna con media $\dfrac1p$, quindi $E[T_r]=\dfrac rp$. Per $r=1$ si recupera la legge geometrica.
:::

## Distribuzione di Poisson

:::definizione{#poisson titolo="Legge di Poisson"}
La **legge di Poisson** di parametro $\lambda>0$ assegna ai conteggi $k=0,1,2,\ldots$ le masse
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.
$$
Poiché la serie di $e^\lambda$ è $\sum_{k\ge 0}\dfrac{\lambda^k}{k!}$, le masse sommano a $1$. Si ha $E[X]=\operatorname{Var}(X)=\lambda$. Il parametro $\lambda$ indica il numero medio di eventi nell'intervallo considerato. Se è dato un processo di Poisson omogeneo di intensità $r$ per unità di tempo, in una durata $t$ il conteggio ha parametro $rt$, con $r$ e $t$ espressi in unità coerenti.
:::

:::esempio{titolo="Cambio della durata di osservazione"}
Un processo omogeneo registra in media $6$ arrivi ogni ora. In $20\,\mathrm{min}$, cioè $\dfrac13\,\mathrm{h}$, il parametro è $2$. Se $X$ è il conteggio in questi venti minuti,
$$
P(X\le 1)=P(X=0)+P(X=1)=e^{-2}+2e^{-2}=3e^{-2}.
$$
Il conteggio almeno pari a due è l'evento complementare e ha probabilità $1-3e^{-2}$. Il tasso orario, da solo, è insufficiente a giustificare la legge. Nell'esempio il processo di Poisson omogeneo è un'ipotesi esplicita.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.37 nomi="k,p_X(k)" legenda=0 linee="0,0 0,0.135335;1,0 1,0.270671;2,0 2,0.270671;3,0 3,0.180447;4,0 4,0.090224;5,0 5,0.036089" punti="0,0.135335,pieno;1,0.270671,pieno;2,0.270671,pieno;3,0.180447,pieno;4,0.090224,pieno;5,0.036089,pieno" segmenti="1.5,0,1.5,0.3" etichette="0.67,0.327,fino a 1;3.5,0.327,da 2 in poi" titolo="Primi sei valori della massa di Poisson con parametro 2. La linea separa le due masse della somma dalle masse del complementare."}
:::

:::osservazione
La probabilità di due conteggi consecutivi è legata dalla relazione $P(X=k+1)=\dfrac{\lambda}{k+1}P(X=k)$. Questa relazione deriva dal rapporto delle due masse, perché $(k+1)!=(k+1)k!$. Se $\lambda=3$, allora $P(X=2)=P(X=3)$ e ciascuna delle due masse è massima. La ricorrenza consente di costruire le masse partendo da $P(X=0)=e^{-\lambda}$.
:::

:::osservazione
Se $X$ è binomiale con molte prove indipendenti e probabilità di successo piccola, una Poisson di parametro $np$ può approssimare la sua legge. In particolare, fissato $\lambda>0$, per $n\to\infty$ con $p_n=\dfrac{\lambda}{n}$ la massa binomiale in ogni $k$ fissato converge alla massa di Poisson. I due fattori determinanti sono
$$
\binom nk\left(\frac{\lambda}{n}\right)^k\longrightarrow\frac{\lambda^k}{k!},
\qquad
\left(1-\frac{\lambda}{n}\right)^{n-k}\longrightarrow e^{-\lambda}.
$$
Per $n=100$ e $p=0{,}02$ la probabilità esatta di zero successi è $0{,}98^{100}$, mentre l'approssimazione è $e^{-2}$. La prima legge assegna massa zero ai conteggi maggiori di $100$. Questo limite di supporto distingue le due leggi anche quando le masse per i conteggi piccoli sono vicine.
:::

::::teorema{#momenti-poisson titolo="Calcolo dei momenti di Poisson"}
Sia $X$ di Poisson con parametro $\lambda>0$. Il primo momento è $\lambda$ e l'attesa del prodotto $X(X-1)$ è $\lambda^2$. Questo prodotto conta le coppie ordinate di eventi distinti in un'osservazione e rende immediato il calcolo del secondo momento.

:::dimostrazione
Nel calcolo di $E[X]$ il termine con $k=0$ è nullo. Per $k\ge1$, il fattore $k$ semplifica il fattoriale e si può cambiare indice con $j=k-1$. Si ottiene
$$
E[X]=e^{-\lambda}\sum_{k=1}^{\infty}\frac{k\lambda^k}{k!}
=\lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}
=\lambda.
$$
Nel calcolo di $E[X(X-1)]$ i termini con $k=0$ e $k=1$ sono nulli. Per $k\ge2$ i due fattori $k$ e $k-1$ lasciano al denominatore $(k-2)!$, quindi la stessa serie moltiplicata per $\lambda^2 e^{-\lambda}$ dà $\lambda^2$. Poiché $X^2=X(X-1)+X$, si conclude che $E[X^2]=\lambda^2+\lambda$ e che $\operatorname{Var}(X)=\lambda$.
:::

Per un conteggio di Poisson con media $4$, la varianza è quindi $4$ e la deviazione standard è $2$. La dispersione si esprime nella scala del conteggio tramite la deviazione standard.
::::

## Campionamento senza reinserimento

:::definizione{#ipergeometrica titolo="Legge ipergeometrica"}
Una popolazione di $N\ge1$ unità contiene $R$ unità di interesse, con $0\le R\le N$. Se si sceglie uniformemente un sottoinsieme di $n$ unità, con $1\le n\le N$, il conteggio $X$ delle unità di interesse ha legge **ipergeometrica**. Per
$$
\max(0,n-(N-R))\le k\le\min(n,R)
$$
si ha
$$
P(X=k)=\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn}.
$$
Si scelgono $k$ unità di interesse tra le $R$ disponibili e $n-k$ tra le altre $N-R$. Il denominatore conta tutti i campioni equiprobabili. Gli estremi del supporto esprimono la disponibilità dei due gruppi.
:::

:::esempio{titolo="Estremi del supporto e probabilità esatta"}
Un lotto contiene $7$ pezzi conformi e $3$ difettosi. Si estraggono $8$ pezzi uniformemente e senza reinserimento. Poiché sono disponibili soltanto $7$ conformi, almeno un estratto è difettoso. Poiché i difettosi sono $3$ in tutto, il supporto di $X$ è $\{1,2,3\}$. La probabilità di estrarne esattamente uno vale
$$
P(X=1)=\frac{\binom31\binom77}{\binom{10}8}
=\frac{3}{45}=\frac1{15}.
$$
L'evento richiede tutti e sette i conformi, quindi i tre campioni favorevoli differiscono soltanto per il pezzo difettoso estratto.
:::

:::osservazione
Ponendo $p=\dfrac RN$, si ha $E[X]=np$. Infatti, ciascuna delle $n$ posizioni di un'estrazione ordinata uniforme ha probabilità $p$ di contenere un'unità di interesse. La linearità dell'attesa dà la formula anche se gli indicatori sono dipendenti. Per $N>1$,
$$
\operatorname{Var}(X)=np(1-p)\frac{N-n}{N-1}.
$$
Il fattore $\dfrac{N-n}{N-1}$ è la correzione per popolazione finita. Se $n=N$, il conteggio vale sempre $R$, quindi la varianza è zero. Quando si estrae con reinserimento e le prove sono indipendenti, il conteggio è invece binomiale e la varianza è $np(1-p)$.
:::

::::teorema{#dipendenza-campionamento titolo="Dipendenza nel campionamento finito"}
Sia $X$ il numero di unità di interesse in un campione uniforme senza reinserimento, con $N>1$. Indichiamo con $I_i$ l'indicatore che la posizione $i$ contenga un'unità di interesse. Per due posizioni distinte la probabilità che entrambi gli indicatori valgano $1$ è
$$
E[I_i I_j]=\frac{R(R-1)}{N(N-1)}.
$$
Poiché ciascun indicatore ha media $p=\dfrac RN$, la differenza tra questa probabilità congiunta e $p^2$ è $-\dfrac{p(1-p)}{N-1}$.

:::dimostrazione
Per simmetria delle posizioni si possono considerare le prime due estrazioni. La prima appartiene al gruppo di interesse con probabilità $\dfrac RN$. Se la prima appartiene al gruppo e $R>0$, la seconda vi appartiene con probabilità $\dfrac{R-1}{N-1}$, perché rimangono un'unità di interesse e un'unità totale in meno. Moltiplicando le due probabilità si trova la formula, valida anche per $R=0$ perché in quel caso entrambi gli indicatori sono sempre nulli.

Nello sviluppo del quadrato della somma degli scarti $I_i-p$, ci sono $n$ termini individuali e $n(n-1)$ prodotti tra posizioni distinte, contati con il loro ordine. La media del primo gruppo è $np(1-p)$. La media del secondo è $-\dfrac{n(n-1)p(1-p)}{N-1}$. Sommando si ottiene la varianza ipergeometrica.
:::

Quando $0<R<N$, la dipendenza è negativa. Dopo un'estrazione di interesse la probabilità di un'altra diminuisce, mentre dopo un'estrazione dall'altro gruppo aumenta. Queste variazioni mantengono la stessa probabilità marginale in ciascuna posizione, ma rendono meno probabili i conteggi estremi rispetto a estrazioni indipendenti con lo stesso $p$, quando gli estremi $0$ e $n$ sono confrontabili. Se una delle categorie non ha abbastanza unità per un conteggio estremo, quel conteggio è impossibile senza reinserimento.
::::

## Somme di conteggi e scelta della legge

::::teorema{#somme titolo="Somme di conteggi indipendenti"}
Se $X$ e $Y$ sono binomiali indipendenti con lo stesso parametro di successo $p$ e numeri di prove $n$ e $m$, la somma ha legge $\operatorname{Bin}(n+m,p)$. Se sono Poisson indipendenti con parametri $\lambda$ e $\mu$, la somma ha legge $\operatorname{Pois}(\lambda+\mu)$.

:::dimostrazione
Per la prima affermazione si può rappresentare la legge congiunta di $X$ e $Y$ tramite due gruppi disgiunti di prove tutte indipendenti con lo stesso $p$. La somma è quindi il conteggio dei successi nelle $n+m$ prove. Per la seconda si distinguono i casi $X=j$ e $Y=k-j$. Per indipendenza,
$$
\begin{aligned}
P(X+Y=k)
&=e^{-(\lambda+\mu)}\sum_{j=0}^k\frac{\lambda^j\mu^{k-j}}{j!(k-j)!}\\[6pt]
&=\frac{e^{-(\lambda+\mu)}}{k!}
\sum_{j=0}^k\binom kj\lambda^j\mu^{k-j}\\[6pt]
&=e^{-(\lambda+\mu)}\frac{(\lambda+\mu)^k}{k!}.
\end{aligned}
$$
L'ultima uguaglianza è lo sviluppo di Newton.
:::

Se due flussi indipendenti producono in media due e tre eventi nella stessa ora e i conteggi sono Poisson, il totale orario è Poisson di parametro $5$. La probabilità che l'ora trascorra senza eventi è quindi $e^{-5}$.
::::

:::osservazione
La linearità $E[X+Y]=E[X]+E[Y]$ vale per variabili con valore atteso finito anche in presenza di dipendenza. Per variabili indipendenti con varianza finita vale inoltre $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$. Se c'è dipendenza, il calcolo della varianza include in generale il termine $2\operatorname{Cov}(X,Y)$, trattato nel capitolo sulle distribuzioni congiunte.
:::

:::esempio{titolo="Quattro domande sullo stesso controllo"}
Un responsabile verifica dispositivi e chiama successo il superamento del controllo. Il numero di dispositivi promossi tra $10$ verifiche indipendenti con probabilità costante segue una binomiale. Il numero di verifiche fino al primo promosso, nelle stesse condizioni, segue una geometrica. Se il responsabile sceglie $10$ dispositivi da un lotto con un numero noto di conformi senza reinserimento, il conteggio dei conformi ha legge ipergeometrica. Se invece registra segnalazioni in un'ora e gli arrivi seguono un processo di Poisson omogeneo, il conteggio ha legge di Poisson. In ogni caso la variabile è un conteggio, mentre il supporto e la procedura con cui si raccolgono i dati determinano la legge.
:::
