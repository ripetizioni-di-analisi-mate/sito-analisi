---
titolo: "Variabili aleatorie e distribuzioni discrete"
sommario: "Dalla funzione di massa alla scelta tra Bernoulli, binomiale, geometrica, Poisson e ipergeometrica."
---

Nei capitoli 3 e 4 si è calcolata la probabilità di eventi, come «il pezzo è difettoso». In molti problemi interessa invece un numero che dipende dall'esito, come il numero di pezzi difettosi in un campione o il numero di telefonate che arrivano a un centralino in un'ora. Un numero di questo tipo si chiama variabile aleatoria. Il capitolo tratta le variabili che assumono valori isolati, come i conteggi $0,1,2,\ldots$, e per ciascuna calcola la probabilità di ogni valore, il valore medio e la dispersione intorno a quel valore.

Per esempio, ogni pezzo prodotto da una macchina è difettoso con probabilità $0{,}02$, indipendentemente dagli altri, e in un controllo si esaminano 100 pezzi. La probabilità di trovarne più di 4 difettosi si ottiene dalla legge binomiale e vale circa $0{,}05$; il numero medio di difettosi è $100\cdot0{,}02=2$.

Il valore atteso e la varianza sono la media e la varianza dei dati del capitolo 2, con le probabilità al posto delle frequenze relative. Il capitolo 6 tratta le variabili che assumono tutti i valori di un intervallo, come una durata; il capitolo 7 calcola le probabilità che riguardano due o più variabili insieme e dimostra le regole per le somme enunciate qui. La legge binomiale torna nel capitolo 8, perché la quota di successi in un campione è un conteggio binomiale diviso per la numerosità del campione, e da lì nelle stime e nei test dei capitoli 9-11.

## Valori possibili e funzione di massa

:::definizione{#variabile-discreta titolo="Variabile aleatoria discreta"}
Si lanciano due monete. I quattro esiti testa-testa, testa-croce, croce-testa e croce-croce hanno probabilità $\dfrac14$ ciascuno, e contando le teste a ogni esito corrisponde un numero: $2$, $1$, $1$ e $0$.

Sia $\Omega$ lo spazio campionario di un esperimento, cioè l'insieme dei suoi esiti (capitolo 3). Una **variabile aleatoria** $X$ è una regola che assegna un numero reale a ciascun esito di $\Omega$. La variabile è **discreta** quando i valori che assume con probabilità positiva formano un insieme finito o numerabile e le loro probabilità sommano a $1$. Un insieme numerabile è un insieme infinito i cui elementi si possono elencare uno dopo l'altro, come i numeri naturali $0,1,2,\ldots$ (capitolo 1).

Il **supporto** discreto è l'insieme $S_X$ dei valori che hanno probabilità strettamente positiva. Per il numero di teste $S_X=\{0,1,2\}$.

Per un numero $x$ si scrive $\{X=x\}$ per l'evento formato da tutti gli esiti ai quali $X$ assegna il valore $x$. Nell'esempio $\{X=1\}$ contiene testa-croce e croce-testa, quindi $P(X=1)=\dfrac14+\dfrac14=\dfrac12$.
:::

:::definizione{#massa titolo="Funzione di massa"}
Per il numero $X$ di teste in due lanci si ha $P(X=0)=\dfrac14$, $P(X=1)=\dfrac12$ e $P(X=2)=\dfrac14$. Da queste tre probabilità si ricava ogni altra probabilità su $X$; per esempio, la probabilità di almeno una testa è $P(X=1)+P(X=2)=\dfrac34$.

La **funzione di massa** di $X$ assegna a ogni numero reale $x$ la probabilità $p_X(x)=P(X=x)$. I valori $p_X(x)$ si chiamano masse. Fuori dal supporto la massa è zero; nell'esempio $p_X(1{,}5)=0$. Le masse sono non negative e la loro somma sul supporto è $1$.

Per un insieme $A$ di valori, la probabilità che $X$ cada in $A$ è la somma delle masse dei valori di $A$:
$$
P(X\in A)=\sum_{x\in S_X\cap A}p_X(x).
$$
La formula vale perché gli eventi $\{X=x\}$ relativi a valori distinti sono disgiunti, quindi le loro probabilità si sommano.

Il modo in cui la probabilità totale $1$ si ripartisce fra i valori di $X$ si chiama **legge** (o distribuzione) di $X$; per una variabile discreta la legge è data dalla funzione di massa. Le leggi più usate hanno un nome, e la scrittura $X\sim\ldots$, che si legge «$X$ ha legge…», indica la legge di $X$.
:::

:::esempio{titolo="Normalizzazione di una legge"}
Il numero $X$ di guasti segnalati da un contatore assume i valori $0$, $1$ e $3$ con masse $c$, $3c$ e $4c$. Poiché questi sono tutti i valori possibili, la somma delle tre masse è $1$. Si ottiene
$$
c+3c+4c=1,\qquad c=\frac18.
$$
La costante è positiva, quindi tutte le masse sono non negative e la tabella è una funzione di massa. Nell'intervallo $(0,3]$ cadono $1$ e $3$, perciò $P(0<X\le 3)=\dfrac38+\dfrac48=\dfrac78$. L'estremo aperto esclude la massa in $0$, mentre l'estremo chiuso include la massa in $3$.

::grafico{xmin=-0.7 xmax=3.8 ymin=-0.09 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.125;1,0 1,0.375;3,0 3,0.5" punti="0,0.125,pieno;1,0.375,pieno;3,0.5,pieno" etichette="0.16,0.17,⅛;1.16,0.42,⅜;3.13,0.545,½" titolo="Le masse in 1 e 3 contribuiscono alla probabilità dell’intervallo, mentre la massa in 0 è esclusa."}
:::

:::attenzione
Una tabella di numeri che sommano a $1$ è una funzione di massa solo se ogni numero è non negativo. I numeri $-\dfrac14$, $\dfrac12$ e $\dfrac34$ sommano a $1$, ma il primo è negativo e quindi non è una probabilità.

Se le masse dipendono da un parametro, si controlla anche il segno di ogni singola massa. Le masse $\dfrac{1+c}{2}$ e $\dfrac{1-c}{2}$ sommano a $1$ per ogni $c$, ma sono entrambe non negative solo per $-1\le c\le1$.
:::

## Funzione di ripartizione e salti

:::definizione{#ripartizione-discreta titolo="Funzione di ripartizione"}
Per il numero $X$ di teste in due lanci, la probabilità di al più una testa è $P(X\le1)=\dfrac14+\dfrac12=\dfrac34$. Anche $P(X\le1{,}5)=\dfrac34$, perché fra $1$ e $1{,}5$ non ci sono valori possibili.

La **funzione di ripartizione** di $X$ è $F_X(t)=P(X\le t)$, dove $t$ è una soglia reale qualsiasi. Si ottiene sommando le masse dei valori che non superano la soglia. Inoltre, per ogni $a<b$, l'evento $\{X\le b\}$ è l'unione dei due eventi disgiunti $\{X\le a\}$ e $\{a<X\le b\}$, quindi la probabilità di un intervallo è la differenza di due valori della ripartizione:
$$
F_X(t)=\sum_{\substack{x\in S_X\\x\le t}}p_X(x),
\qquad P(a<X\le b)=F_X(b)-F_X(a).
$$

La funzione è non decrescente perché, al crescere di $t$, si aggiungono valori con massa non negativa. Il valore che la ripartizione assume subito prima di $t$, cioè il suo limite da sinistra, si indica con $F_X(t^-)$ ed è la probabilità $P(X<t)$ dei valori strettamente minori di $t$. Allora
$$
p_X(t)=F_X(t)-F_X(t^-),
$$
cioè la massa in $t$ è l'altezza del salto della ripartizione in $t$. Dalla ripartizione si ricavano quindi tutte le masse; le tavole delle leggi più usate riportano infatti i valori di $F_X$.
:::

:::esempio{titolo="Lettura di una ripartizione"}
Sia $X$ il numero di richieste in una breve osservazione, con masse $\dfrac14$, $\dfrac12$ e $\dfrac14$ in $0$, $1$ e $2$. La ripartizione vale $0$ prima di $0$, $\dfrac14$ tra $0$ incluso e $1$ escluso, $\dfrac34$ tra $1$ incluso e $2$ escluso e $1$ da $2$ in poi. In particolare, $F_X(1)=\dfrac34$ perché al valore $1$ è già stata aggiunta la sua massa. Invece $F_X(1^-)=\dfrac14$. Il salto tra i due livelli è $\dfrac34-\dfrac14=\dfrac12$, che coincide con $P(X=1)$.

::grafico{linee="-1,0 0,0;0,0.25 1,0.25;1,0.75 2,0.75;2,1 3.2,1" punti="0,0,vuoto;0,0.25,pieno;1,0.25,vuoto;1,0.75,pieno;2,0.75,vuoto;2,1,pieno" xmin=-1 xmax=3.2 ymin=-0.15 ymax=1.2 nomi="t,F_X(t)" etichette="-0.25,0.25,¼;0.7,0.75,¾" legenda=0 titolo="Ripartizione con salti nei valori 0, 1 e 2"}

La probabilità $P(1<X\le 2)$ è $F_X(2)-F_X(1)=1-\dfrac34=\dfrac14$. Se si include l'estremo inferiore, si ottiene invece $P(1\le X\le 2)=F_X(2)-F_X(1^-)=1-\dfrac14=\dfrac34$. La differenza tra le due risposte è la massa in $1$.
:::

## Valore atteso, varianza e trasformazioni

:::definizione{#momenti titolo="Momenti di una variabile discreta"}
Per il numero $X$ di teste in due lanci, la media dei valori $0$, $1$, $2$ pesata con le loro probabilità è
$$
0\cdot\frac14+1\cdot\frac12+2\cdot\frac14=1.
$$
È la media ponderata del capitolo 2, con le probabilità al posto delle frequenze relative.

Il **valore atteso** $E[X]$, detto anche media di $X$, è questa media pesata:
$$
E[X]=\sum_{x\in S_X}x\,p_X(x).
$$
Quando il supporto è infinito la somma è una serie, e il valore atteso si definisce solo se la serie converge assolutamente, cioè se $\sum_{x\in S_X}|x|p_X(x)<\infty$. Se $X$ non assume valori negativi e la serie diverge, si pone $E[X]=+\infty$.

Per una funzione $g$, il valore atteso di $g(X)$ si calcola dalla tabella di $X$ sostituendo ogni valore $x$ con $g(x)$:
$$
E[g(X)]=\sum_{x\in S_X}g(x)\,p_X(x),
$$
quando la somma converge assolutamente. Con $g(x)=x^2$ si ottiene $E[X^2]$; per le due monete $E[X^2]=0^2\cdot\dfrac14+1^2\cdot\dfrac12+2^2\cdot\dfrac14=\dfrac32$, diverso da $(E[X])^2=1$. Il numero $E[X^k]$ si chiama momento di ordine $k$; $E[X]$ è il primo momento ed $E[X^2]$ il secondo.

Con $g(x)=a+bx$ la formula precedente dà $E[a+bX]=a\sum_{x}p_X(x)+b\sum_{x}x\,p_X(x)=a+bE[X]$, perché le masse sommano a $1$. Inoltre, per due variabili $X$ e $Y$ con valore atteso finito,
$$
E[X+Y]=E[X]+E[Y],
$$
anche quando $X$ e $Y$ dipendono l'una dall'altra; il risultato si dimostra nel capitolo 7. Per la somma dei risultati di due dadi, per esempio, $E[X+Y]=3{,}5+3{,}5=7$, perché ogni dado ha media $\dfrac{1+2+\cdots+6}{6}=3{,}5$. Questa proprietà si chiama **linearità** del valore atteso.

Sia $\mu=E[X]$; la lettera greca $\mu$ si legge mu. Gli scarti di $X$ dalla media sono $X-\mu$. Se $E[X^2]<\infty$, la **varianza** di $X$ è la media dei quadrati degli scarti:
$$
\operatorname{Var}(X)=E[(X-\mu)^2]=E[X^2]-\mu^2.
$$
La seconda espressione si ottiene sviluppando il quadrato, $(X-\mu)^2=X^2-2\mu X+\mu^2$, e applicando la linearità: $E[X^2]-2\mu E[X]+\mu^2=E[X^2]-\mu^2$. Per le due monete gli scarti valgono $-1$, $0$, $1$, quindi $\operatorname{Var}(X)=1\cdot\dfrac14+0\cdot\dfrac12+1\cdot\dfrac14=\dfrac12$, e con la seconda formula $\dfrac32-1=\dfrac12$. La radice della varianza si chiama deviazione standard e ha le stesse unità di $X$; indica di quanto i valori di $X$ si scostano tipicamente dalla media.

Due variabili $X$ e $Y$ sono indipendenti quando, per ogni coppia di valori $x$ e $y$, gli eventi $\{X=x\}$ e $\{Y=y\}$ sono indipendenti nel senso del capitolo 4, cioè $P(X=x,\,Y=y)=P(X=x)\,P(Y=y)$, dove la virgola indica che i due eventi si verificano insieme. I risultati di due dadi distinti sono indipendenti. Più variabili $X_1,\ldots,X_n$ sono indipendenti quando, per ogni scelta dei valori $x_1,\ldots,x_n$, gli eventi $\{X_1=x_1\},\ldots,\{X_n=x_n\}$ sono mutuamente indipendenti (capitolo 4). Per variabili indipendenti con varianza finita la varianza della somma è la somma delle varianze, $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$; anche questo si dimostra nel capitolo 7.
:::

:::esempio{titolo="Valore atteso di un premio"}
Un premio $X$ vale $0\,\mathrm{EUR}$ con probabilità $\dfrac12$, $4\,\mathrm{EUR}$ con probabilità $\dfrac14$ e $8\,\mathrm{EUR}$ con probabilità $\dfrac14$. In euro si ottiene
$$
\begin{aligned}
E[X]&=0\cdot\frac12+4\cdot\frac14+8\cdot\frac14=3,\\[6pt]
E[X^2]&=0^2\cdot\frac12+4^2\cdot\frac14+8^2\cdot\frac14=20,\\[6pt]
\operatorname{Var}(X)&=20-3^2=11.
\end{aligned}
$$
La media vale $3\,\mathrm{EUR}$, anche se il premio effettivo assume soltanto i tre importi indicati. La varianza vale $11\,\mathrm{EUR}^2$ e la deviazione standard $\sqrt{11}\approx3{,}32\,\mathrm{EUR}$. Con un biglietto da $3\,\mathrm{EUR}$ il guadagno netto è $X-3$, e per la linearità il guadagno netto atteso è $E[X]-3=0$. Il guadagno di una singola giocata vale invece $-3$, $1$ oppure $5\,\mathrm{EUR}$, secondo l'esito.

::grafico{xmin=-0.8 xmax=9.3 ymin=-0.07 ymax=0.66 nomi="x,p_X(x)" legenda=0 linee="0,0 0,0.5;4,0 4,0.25;8,0 8,0.25" punti="0,0.5,pieno;4,0.25,pieno;8,0.25,pieno" segmenti="3,0,3,0.56" etichette="3,0.61,E[X] = 3;0.35,0.54,½;4.35,0.29,¼;8.35,0.29,¼" titolo="Masse del premio in euro. La media $E[X]=3$ cade fra i valori possibili $0$ e $4$ e non è un valore assunto da $X$."}
:::

::::teorema{#momenti-affini titolo="Momenti di una trasformazione affine"}
Se si raddoppiano i premi dell'esempio precedente e si aggiunge $1\,\mathrm{EUR}$, il nuovo premio $Y=1+2X$ vale $1$, $9$ e $17\,\mathrm{EUR}$ con probabilità $\dfrac12$, $\dfrac14$ e $\dfrac14$. Il calcolo diretto dà $E[Y]=7=1+2\cdot3$ ed $E[Y^2]=93$, quindi $\operatorname{Var}(Y)=93-49=44=2^2\cdot11$. La costante aggiunta non cambia la varianza, mentre il fattore $2$ la moltiplica per $4$.

Con le lettere, sia $Y=a+bX$, con $a,b\in\mathbb R$. Se $X$ ha media finita, $E[Y]=a+bE[X]$. Se ha anche secondo momento finito, $\operatorname{Var}(Y)=b^2\operatorname{Var}(X)$.

:::dimostrazione
La formula per la media è la linearità del valore atteso. Di conseguenza lo scarto di $Y$ dalla propria media è
$$
Y-E[Y]=a+bX-a-bE[X]=b(X-E[X]).
$$
Elevando al quadrato si ottiene $(Y-E[Y])^2=b^2(X-E[X])^2$. Prendendo il valore atteso e portando fuori la costante $b^2$ per la linearità, si ottiene $\operatorname{Var}(Y)=b^2\operatorname{Var}(X)$.
:::

Raddoppiando i premi raddoppia quindi la deviazione standard, che è la radice della varianza. Con $a=0$ e $b=-1$ si ottiene $\operatorname{Var}(-X)=\operatorname{Var}(X)$. Perciò, se $X$ e $Y$ sono indipendenti, anche $X$ e $-Y$ lo sono e $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$; con varianze $1$ e $4$ la differenza ha varianza $5$.
::::

## Bernoulli e conteggio binomiale

:::definizione{#bernoulli titolo="Indicatore e legge di Bernoulli"}
Nel lancio di un dado, la variabile che vale $1$ se esce $6$ e $0$ altrimenti assume il valore $1$ con probabilità $\dfrac16$ e il valore $0$ con probabilità $\dfrac56$.

Per un evento $A$ di probabilità $p$, l'**indicatore** $I_A$ è la variabile che vale $1$ quando $A$ si verifica e $0$ altrimenti; è lo stesso indicatore usato per contare i dati nel capitolo 1. Si dice che $I_A$ ha legge di **Bernoulli** di parametro $p$, con $0\le p\le 1$, e si scrive $I_A\sim\operatorname{Bernoulli}(p)$. Il valore atteso è $E[I_A]=1\cdot p+0\cdot(1-p)=p$. Poiché $0^2=0$ e $1^2=1$, si ha $I_A^2=I_A$, quindi $E[I_A^2]=p$ e
$$
E[I_A]=p,\qquad
\operatorname{Var}(I_A)=p-p^2=p(1-p).
$$
Per il $6$ del dado, $E[I_A]=\dfrac16$ e $\operatorname{Var}(I_A)=\dfrac5{36}$.

Con gli indicatori un conteggio si scrive come somma. Se $A_i$ è l'evento che l'unità $i$ supera un controllo, il numero di unità promosse è $I_{A_1}+\cdots+I_{A_n}$: con tre unità ed esiti promossa, bocciata, promossa la somma vale $1+0+1=2$. Per la linearità, il numero atteso di promosse è $P(A_1)+\cdots+P(A_n)$; con questo calcolo si trova la media delle leggi binomiale e ipergeometrica.
:::

::::teorema{#binomiale titolo="Legge binomiale"}
Si lancia tre volte un dado e si conta il numero di $6$. Esattamente un $6$ si ottiene con tre sequenze, a seconda che il $6$ esca al primo, al secondo o al terzo lancio. Per l'indipendenza dei lanci ciascuna sequenza ha probabilità $\dfrac16\left(\dfrac56\right)^2=\dfrac{25}{216}$, quindi la probabilità di esattamente un $6$ è $3\cdot\dfrac{25}{216}=\dfrac{25}{72}$.

Si chiama prova ciascuna ripetizione dell'esperimento e successo l'esito che si conta (qui il $6$). Con le lettere, si eseguano $n\ge 1$ prove indipendenti, cioè con esiti mutuamente indipendenti nel senso del capitolo 4, ciascuna con probabilità di successo $p$ costante. Il numero $X$ di successi ha legge **binomiale** di parametri $n$ e $p$, e si scrive $X\sim\operatorname{Bin}(n,p)$. Per $0<p<1$,
$$
P(X=k)=\binom nk p^k(1-p)^{n-k},
\qquad k=0,\ldots,n,
$$
dove $\binom nk$ è il coefficiente binomiale del capitolo 3, cioè il numero di modi di scegliere $k$ oggetti fra $n$. La media è $np$ e la varianza è $np(1-p)$. Quando $p=0$ o $p=1$, il conteggio è costante, rispettivamente $0$ o $n$, e le formule per media e varianza restano valide. Nei tre lanci del dado la media è $3\cdot\dfrac16=\dfrac12$.

:::dimostrazione
Si fissino le $k$ posizioni delle prove riuscite. Per l'indipendenza, la sequenza che riesce in quelle posizioni e fallisce nelle altre ha probabilità $p^k(1-p)^{n-k}$. Le scelte di posizioni sono $\binom nk$ e danno sequenze diverse, cioè eventi disgiunti, quindi la massa è il loro numero per la probabilità di ciascuna.

Sia $I_i$ l'indicatore del successo nella prova $i$, per $i=1,\ldots,n$. Allora $X=I_1+\cdots+I_n$, e ogni $I_i$ è di Bernoulli di parametro $p$. Per la linearità del valore atteso, $E[X]=p+\cdots+p=np$. Gli indicatori sono indipendenti perché le prove lo sono; per variabili indipendenti la varianza della somma è la somma delle varianze, quindi $\operatorname{Var}(X)=n\,p(1-p)$.
:::

Nel capitolo 8 la quota di successi $\dfrac Xn$ servirà a stimare $p$ quando non è nota.
::::

:::esempio{titolo="Da una soglia al suo complementare"}
Si lanciano quattro dadi indipendenti e sia $X$ il numero di $6$ ottenuti. Ogni prova riesce con probabilità $\dfrac16$, quindi $X\sim\operatorname{Bin}\left(4,\dfrac16\right)$. L'evento «compare almeno un $6$» è complementare all'evento «tutte le prove falliscono», perciò
$$
P(X\ge 1)=1-P(X=0)=1-\left(\frac56\right)^4.
$$
Numericamente $P(X=0)=\dfrac{625}{1296}$, quindi $P(X\ge1)=\dfrac{671}{1296}\approx0{,}518$.

Per l'evento $X\ge2$ il complementare è $X\le1$, che comprende i due valori $0$ e $1$. Si sottraggono quindi da $1$ le due masse $P(X=0)$ e $P(X=1)=4\cdot\dfrac16\left(\dfrac56\right)^3=\dfrac{500}{1296}$, e si ottiene $P(X\ge2)=\dfrac{171}{1296}\approx0{,}132$.

::grafico{xmin=-0.7 xmax=4.8 ymin=-0.06 ymax=0.6 nomi="k,P(X = k)" legenda=0 linee="0,0 0,0.482253;1,0 1,0.385802;2,0 2,0.115741;3,0 3,0.015432;4,0 4,0.000772" punti="0,0.482253,pieno;1,0.385802,pieno;2,0.115741,pieno;3,0.015432,pieno;4,0.000772,pieno" segmenti="0.5,0,0.5,0.52" etichette="2.4,0.47,X ≥ 1" titolo="Masse di $\operatorname{Bin}\left(4,\dfrac16\right)$. A destra della linea stanno i conteggi dell'evento «almeno un $6$», a sinistra il suo complementare."}
:::

:::attenzione
La formula binomiale vale solo se ogni prova ha la stessa probabilità di successo. Se due prove indipendenti hanno probabilità $\dfrac14$ e $\dfrac34$, la probabilità di due successi è $\dfrac14\cdot\dfrac34=\dfrac{3}{16}$ e il numero medio di successi è $\dfrac14+\dfrac34=1$. Una $\operatorname{Bin}\left(2,\dfrac12\right)$ ha la stessa media, pari a $1$, ma probabilità $\dfrac14$ di due successi. Due conteggi con la stessa media hanno quindi, in questo caso, leggi diverse.
:::

## Geometrica e attesa di più successi

:::definizione{#geometrica titolo="Legge geometrica"}
Si lancia un dado finché esce $6$. Il primo $6$ arriva al terzo lancio con probabilità $\left(\dfrac56\right)^2\dfrac16=\dfrac{25}{216}$, perché i primi due lanci falliscono e il terzo riesce. Arriva dopo il secondo lancio con probabilità $\left(\dfrac56\right)^2=\dfrac{25}{36}$, perché basta che i primi due lanci falliscano.

Con le lettere, si ripetano prove indipendenti con probabilità di successo $p$ costante, con $0<p<1$. Sia $T$ il numero della prova in cui si ottiene il primo successo, inclusa nel conteggio; $T$ si dice tempo di attesa del primo successo e ha legge **geometrica** di parametro $p$. Ponendo $q=1-p$, si ha
$$
P(T=k)=q^{k-1}p,\quad k=1,2,\ldots,
\qquad P(T>m)=q^m,\quad m=0,1,\ldots.
$$
L'evento $T=k$ richiede $k-1$ fallimenti seguiti da un successo. L'evento $T>m$ richiede invece che le prime $m$ prove siano tutte fallite. La probabilità $P(T>m)$ si chiama **coda** della legge oltre $m$, perché è la somma delle masse di tutti i valori maggiori di $m$.

La media è $E[T]=\dfrac1p$ e la varianza è $\operatorname{Var}(T)=\dfrac{1-p}{p^2}$; per il dado il primo $6$ arriva in media al sesto lancio. Nel caso $p=1$, escluso dall'ipotesi, ogni prova riesce, quindi $T=1$ con certezza, e le formule danno ancora $E[T]=1$ e $\operatorname{Var}(T)=0$. La variabile $T-1$ conta soltanto i fallimenti prima del primo successo e parte da $0$.
:::

:::osservazione
Le formule della media e della varianza della geometrica si ottengono dalle code. Se $T$ vale $k$, gli eventi $\{T>m\}$ che si verificano sono quelli con $m=0,1,\ldots,k-1$, cioè esattamente $k$. Perciò $T$ è la somma degli indicatori degli eventi $\{T>m\}$, per $m=0,1,2,\ldots$, e il suo valore atteso è la somma delle code:
$$
E[T]=\sum_{m=0}^{\infty}P(T>m)=\sum_{m=0}^{\infty}q^m=\frac{1}{1-q}=\frac1p.
$$
La somma ha infiniti termini; scambiare valore atteso e somma è lecito perché i termini sono non negativi.

Per la varianza si usa la stessa idea con $T(T-1)$. Se $T=k$, si ha $k(k-1)=2\,(0+1+\cdots+(k-1))=2\sum_{m=0}^{k-1}m$, quindi $T(T-1)$ è la somma dei numeri $2m$ per i quali $T>m$, e
$$
E[T(T-1)]=2\sum_{m\ge0}m\,P(T>m)=2\sum_{m\ge0}m\,q^m.
$$
Sia $S=\sum_{m\ge0}m\,q^m$. Moltiplicando per $q$ si ha $qS=\sum_{m\ge0}m\,q^{m+1}=\sum_{m\ge1}(m-1)q^m$, quindi $S-qS=\sum_{m\ge1}q^m=\dfrac{q}{1-q}$. Poiché $1-q=p$, si ricava $S=\dfrac{q}{p^2}$ ed $E[T(T-1)]=\dfrac{2q}{p^2}$. Allora
$$
E[T^2]=E[T(T-1)]+E[T]=\frac{2q}{p^2}+\frac1p,
\qquad
\operatorname{Var}(T)=\frac{2q}{p^2}+\frac1p-\frac1{p^2}=\frac{2q+p-1}{p^2}=\frac{q}{p^2},
$$
perché $p-1=-q$.
:::

:::esempio{titolo="Probabilità puntuale e probabilità di coda"}
Sia $T$ il numero della prova del primo successo, con $p=\dfrac14$. La probabilità che il primo successo cada alla quarta prova è $\left(\dfrac34\right)^3\dfrac14=\dfrac{27}{256}\approx0{,}105$. La probabilità che cada dopo la quarta prova è la coda $\left(\dfrac34\right)^4=\dfrac{81}{256}\approx0{,}316$. Nel primo calcolo la quarta prova riesce, mentre nel secondo fallisce. Se il successo deve arrivare entro la quarta prova, il complementare fornisce $1-\left(\dfrac34\right)^4=\dfrac{175}{256}$.

::grafico{xmin=-0.6 xmax=9.5 ymin=-0.035 ymax=0.31 nomi="k,P(T = k)" legenda=0 linee="1,0 1,0.25;2,0 2,0.1875;3,0 3,0.140625;4,0 4,0.105469;5,0 5,0.079102;6,0 6,0.059326;7,0 7,0.044495;8,0 8,0.033371" punti="1,0.25,pieno;2,0.1875,pieno;3,0.140625,pieno;4,0.105469,pieno;5,0.079102,pieno;6,0.059326,pieno;7,0.044495,pieno;8,0.033371,pieno" segmenti="4.5,0,4.5,0.27" etichette="2.5,0.29,T ≤ 4;6.7,0.29,T > 4" titolo="Prime otto masse della geometrica con $p=\dfrac14$. Le masse a destra della linea, prolungate all'infinito, sommano a $\left(\dfrac34\right)^4$."}
:::

::::teorema{#geometrica-memoria titolo="Assenza di memoria"}
Si lancia un dado finché esce $6$, e i primi tre lanci non hanno dato $6$. Poiché i lanci sono indipendenti, la probabilità che nemmeno i due lanci successivi diano $6$ è $\left(\dfrac56\right)^2$, la stessa che si aveva all'inizio per i primi due lanci.

Con le lettere, sia $T$ geometrica con $0<p<1$. Per interi $m,k\ge 0$ si ha $P(T>m+k\mid T>m)=P(T>k)$. La probabilità di attendere ancora oltre $k$ prove, sapendo che le prime $m$ sono fallite, è la stessa che si aveva prima di iniziare.

:::dimostrazione
Per la definizione di probabilità condizionata (capitolo 4), $P(T>m+k\mid T>m)=\dfrac{P(\{T>m+k\}\cap\{T>m\})}{P(T>m)}$, con $P(T>m)=q^m>0$. Se le prime $m+k$ prove sono fallite, sono fallite anche le prime $m$, quindi $\{T>m+k\}$ è contenuto in $\{T>m\}$ e l'intersezione è $\{T>m+k\}$. Si ottiene
$$
P(T>m+k\mid T>m)
=\frac{P(T>m+k)}{P(T>m)}
=\frac{q^{m+k}}{q^m}=q^k.
$$
:::

La legge esponenziale del capitolo 6 ha la stessa proprietà per i tempi di attesa misurati in modo continuo.
::::

:::definizione{#binomiale-negativa titolo="Attesa dell'r-esimo successo"}
Si lancia un dado finché escono due $6$. Il secondo $6$ arriva al quarto lancio quando nei primi tre lanci c'è esattamente un $6$, in una delle $\binom31=3$ posizioni, e il quarto dà $6$; la probabilità è $3\left(\dfrac16\right)^2\left(\dfrac56\right)^2=\dfrac{25}{432}$.

Con le lettere, sia $T_r$ il numero della prova in cui si ottiene l'$r$-esimo successo, dove $r\ge1$ è fissato. Nelle stesse condizioni della legge geometrica, $T_r$ ha legge **binomiale negativa**. Per $k\ge r$,
$$
P(T_r=k)=\binom{k-1}{r-1}p^r(1-p)^{k-r}.
$$
Nelle prime $k-1$ prove devono comparire esattamente $r-1$ successi e l'ultima deve riuscire.

Il numero di prove $T_r$ è la somma di $r$ tempi di attesa: le prove fino al primo successo, poi quelle dal primo al secondo successo, e così via. Le prove sono indipendenti e hanno la stessa probabilità $p$, quindi ogni tempo di attesa è geometrico di parametro $p$, con media $\dfrac1p$. Per la linearità del valore atteso, $E[T_r]=\dfrac rp$; per due $6$ con il dado servono in media $12$ lanci. Per $r=1$ si recupera la legge geometrica.
:::

## Distribuzione di Poisson

:::definizione{#poisson titolo="Legge di Poisson"}
Le telefonate a un centralino arrivano una alla volta, e il loro numero in un'ora non ha un massimo fissato. Per conteggi di questo tipo si usa la legge di Poisson.

La **legge di Poisson** di parametro $\lambda>0$ (la lettera greca $\lambda$ si legge lambda) assegna ai conteggi $k=0,1,2,\ldots$ le masse
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!}.
$$
Si scrive $X\sim\operatorname{Pois}(\lambda)$. Poiché la serie esponenziale vale $\sum_{k\ge 0}\dfrac{\lambda^k}{k!}=e^\lambda$, le masse sommano a $e^{-\lambda}e^{\lambda}=1$. Si ha $E[X]=\operatorname{Var}(X)=\lambda$, quindi il parametro $\lambda$ è il numero medio di arrivi nell'intervallo considerato. Con $\lambda=2$, per esempio, la probabilità di nessun arrivo è $e^{-2}\approx0{,}135$.

Il rapporto fra due masse consecutive è $\dfrac{P(X=k+1)}{P(X=k)}=\dfrac{\lambda}{k+1}$, quindi le masse crescono finché $k+1<\lambda$ e poi decrescono; se $\lambda$ è intero, i valori $\lambda-1$ e $\lambda$ hanno la stessa massa, che è la massima. La Poisson di parametro $np$ approssima la binomiale $\operatorname{Bin}(n,p)$ quando le prove sono molte e $p$ è piccolo, per esempio $n=100$ e $p=0{,}02$; solo la Poisson, però, assegna massa positiva ai conteggi maggiori di $n$.

Un **processo di Poisson omogeneo** di intensità $r$ è un modello di arrivi che avvengono uno alla volta nel tempo, con due proprietà.

- Il numero di arrivi in un intervallo di durata $t$ ha legge di Poisson di parametro $rt$.
- I numeri di arrivi in intervalli disgiunti, cioè senza tratti in comune, sono indipendenti.

L'intensità $r$ è quindi il numero medio di arrivi per unità di tempo, e $r$ e $t$ vanno espressi nella stessa unità di tempo. Per la seconda proprietà, sapere quanti arrivi ci sono stati in un'ora non cambia la legge del numero di arrivi nell'ora successiva.
:::

:::esempio{titolo="Cambio della durata di osservazione"}
Le richieste a un server arrivano secondo un processo di Poisson omogeneo con intensità $6$ arrivi all'ora. In $20\,\mathrm{min}$, cioè $\dfrac13\,\mathrm{h}$, il parametro è $6\cdot\dfrac13=2$. Se $X$ è il conteggio in questi venti minuti,
$$
P(X\le 1)=P(X=0)+P(X=1)=e^{-2}+2e^{-2}=3e^{-2}\approx0{,}406.
$$
Il conteggio almeno pari a due è l'evento complementare e ha probabilità $1-3e^{-2}\approx0{,}594$.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.37 nomi="k,p_X(k)" legenda=0 linee="0,0 0,0.135335;1,0 1,0.270671;2,0 2,0.270671;3,0 3,0.180447;4,0 4,0.090224;5,0 5,0.036089" punti="0,0.135335,pieno;1,0.270671,pieno;2,0.270671,pieno;3,0.180447,pieno;4,0.090224,pieno;5,0.036089,pieno" segmenti="1.5,0,1.5,0.3" etichette="0.67,0.327,fino a 1;3.5,0.327,da 2 in poi" titolo="Primi sei valori della massa di Poisson con parametro 2. La linea separa le due masse della somma dalle masse del complementare."}
:::

:::osservazione
La relazione $P(X=k+1)=\dfrac{\lambda}{k+1}P(X=k)$ segue dal rapporto delle due masse, perché $\lambda^{k+1}=\lambda\cdot\lambda^k$ e $(k+1)!=(k+1)\,k!$. Partendo da $P(X=0)=e^{-\lambda}$ e moltiplicando ogni volta per $\dfrac{\lambda}{k+1}$ si costruiscono tutte le masse.

Se $\lambda=3$, il rapporto vale $3$ per $k=0$ e $\dfrac32$ per $k=1$, quindi le masse crescono da $0$ a $2$. Per $k=2$ il rapporto vale $1$, quindi $P(X=2)=P(X=3)=\dfrac92e^{-3}\approx0{,}224$. Per $k\ge3$ il rapporto è minore di $1$ e le masse decrescono. Perciò $P(X=2)$ e $P(X=3)$ sono le due masse massime.
:::

:::osservazione
Per $n=100$ e $p=0{,}02$ la probabilità esatta di zero successi è $0{,}98^{100}\approx0{,}1326$, mentre la Poisson di parametro $np=2$ dà $e^{-2}\approx0{,}1353$.

Si fissi $\lambda>0$ e si ponga $p_n=\dfrac{\lambda}{n}$, in modo che la media $np_n=\lambda$ resti la stessa al crescere di $n$. Per ogni $k$ fissato, la massa binomiale in $k$ converge alla massa di Poisson per $n\to\infty$, perché i suoi due fattori hanno questi limiti:
$$
\binom nk\left(\frac{\lambda}{n}\right)^k=\frac{n(n-1)\cdots(n-k+1)}{n^k}\cdot\frac{\lambda^k}{k!}\longrightarrow\frac{\lambda^k}{k!},
\qquad
\left(1-\frac{\lambda}{n}\right)^{n-k}\longrightarrow e^{-\lambda}.
$$
Il primo limite vale perché ciascuno dei $k$ rapporti $\dfrac nn,\dfrac{n-1}n,\ldots$ tende a $1$; il secondo è il limite notevole dell'esponenziale.

Per i conteggi da $0$ a $5$ le masse delle due leggi differiscono di meno di $0{,}003$, ma i supporti restano diversi, perché la binomiale con $n=100$ ha supporto $\{0,1,\ldots,100\}$, mentre la Poisson ha come supporto tutti i numeri naturali.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.035 ymax=0.33 nomi="k,massa" legenda=0 linee="-0.1,0 -0.1,0.13262;0.9,0 0.9,0.270652;1.9,0 1.9,0.273414;2.9,0 2.9,0.182276;3.9,0 3.9,0.090208;4.9,0 4.9,0.035347" punti="-0.1,0.13262,pieno;0.9,0.270652,pieno;1.9,0.273414,pieno;2.9,0.182276,pieno;3.9,0.090208,pieno;4.9,0.035347,pieno;0.1,0.135335,vuoto;1.1,0.270671,vuoto;2.1,0.270671,vuoto;3.1,0.180447,vuoto;4.1,0.090224,vuoto;5.1,0.036089,vuoto" segmenti="0.1,0,0.1,0.135335;1.1,0,1.1,0.270671;2.1,0,2.1,0.270671;3.1,0,3.1,0.180447;4.1,0,4.1,0.090224;5.1,0,5.1,0.036089" titolo="Masse di $\operatorname{Bin}(100;\,0{,}02)$ a tratto pieno e di Poisson con $\lambda=2$ tratteggiate, per $k$ da $0$ a $5$. Le differenze sono minori di $0{,}003$."}
:::

::::teorema{#momenti-poisson titolo="Calcolo dei momenti di Poisson"}
Sia $X$ di Poisson con parametro $\lambda>0$. Il primo momento è $E[X]=\lambda$ e il valore atteso del prodotto $X(X-1)$ è $\lambda^2$. Il prodotto $X(X-1)$ conta le coppie ordinate di arrivi distinti in un'osservazione: con $3$ arrivi le coppie sono $3\cdot2=6$. Dal suo valore atteso si ricava il secondo momento, e quindi la varianza.

:::dimostrazione
Nel calcolo di $E[X]$ il termine con $k=0$ è nullo. Per $k\ge1$ vale $\dfrac{k}{k!}=\dfrac{1}{(k-1)!}$; si raccoglie $\lambda$ e si cambia indice con $j=k-1$. Si ottiene
$$
E[X]=e^{-\lambda}\sum_{k=1}^{\infty}\frac{k\lambda^k}{k!}
=\lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!}
=\lambda e^{-\lambda}e^{\lambda}=\lambda.
$$
Nel calcolo di $E[X(X-1)]$ i termini con $k=0$ e $k=1$ sono nulli. Per $k\ge2$ vale $\dfrac{k(k-1)}{k!}=\dfrac{1}{(k-2)!}$; si raccoglie $\lambda^2$ e si cambia indice con $j=k-2$, quindi la stessa serie moltiplicata per $\lambda^2 e^{-\lambda}$ dà $\lambda^2$. Poiché $X^2=X(X-1)+X$, per la linearità $E[X^2]=\lambda^2+\lambda$, e infine $\operatorname{Var}(X)=E[X^2]-(E[X])^2=\lambda^2+\lambda-\lambda^2=\lambda$.
:::

Per un conteggio di Poisson con media $4$, la varianza è quindi $4$ e la deviazione standard è $\sqrt4=2$. La deviazione standard è espressa nella stessa unità del conteggio, cioè in numero di arrivi.
::::

## Campionamento senza reinserimento

:::definizione{#ipergeometrica titolo="Legge ipergeometrica"}
Da un lotto di $10$ pezzi con $3$ difettosi si estraggono $2$ pezzi senza reinserimento, con tutte le coppie ugualmente probabili. Le coppie sono $\binom{10}2=45$; quelle con esattamente un difettoso sono $\binom31\binom71=21$, perché il difettoso si sceglie fra $3$ e l'altro pezzo fra $7$. La probabilità di esattamente un difettoso è quindi $\dfrac{21}{45}=\dfrac7{15}$, come nelle estrazioni senza reinserimento del capitolo 3.

Con le lettere, una popolazione di $N\ge1$ unità contiene $R$ unità di interesse, con $0\le R\le N$. Si sceglie uniformemente un sottoinsieme di $n$ unità, con $1\le n\le N$, cioè in modo che tutti i $\binom Nn$ sottoinsiemi di $n$ unità abbiano la stessa probabilità. Il conteggio $X$ delle unità di interesse nel campione ha legge **ipergeometrica**. Per
$$
\max(0,n-(N-R))\le k\le\min(n,R)
$$
si ha
$$
P(X=k)=\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn}.
$$
Si scelgono $k$ unità di interesse tra le $R$ disponibili e $n-k$ tra le altre $N-R$. Il denominatore conta tutti i campioni equiprobabili.

Gli estremi del supporto vengono dalla composizione della popolazione. Si ha $k\le n$ e $k\le R$, quindi $k\le\min(n,R)$. Le altre $n-k$ unità del campione sono al più le $N-R$ disponibili, quindi $k\ge n-(N-R)$, e inoltre $k\ge0$.
:::

:::esempio{titolo="Estremi del supporto e probabilità esatta"}
Un lotto contiene $7$ pezzi conformi e $3$ difettosi. Si estraggono $8$ pezzi uniformemente e senza reinserimento, e sia $X$ il numero di difettosi estratti. Poiché sono disponibili soltanto $7$ conformi, almeno un estratto è difettoso. Poiché i difettosi sono $3$ in tutto, il supporto di $X$ è $\{1,2,3\}$. La probabilità di estrarne esattamente uno vale
$$
P(X=1)=\frac{\binom31\binom77}{\binom{10}8}
=\frac{3}{45}=\frac1{15}.
$$
L'evento richiede tutti e sette i conformi, quindi i tre campioni favorevoli differiscono soltanto per il pezzo difettoso estratto. Con lo stesso conteggio si trova $P(X=2)=P(X=3)=\dfrac{21}{45}=\dfrac7{15}$, perché $\binom32\binom76=\binom33\binom75=21$.

::grafico{xmin=-0.6 xmax=4.3 ymin=-0.06 ymax=0.6 nomi="k,P(X = k)" legenda=0 linee="1,0 1,0.066667;2,0 2,0.466667;3,0 3,0.466667" punti="1,0.066667,pieno;2,0.466667,pieno;3,0.466667,pieno" etichette="1.3,0.11,1⁄15;2.3,0.51,7⁄15;3.3,0.51,7⁄15" titolo="Numero di difettosi fra $8$ pezzi estratti da $7$ conformi e $3$ difettosi. Il valore $0$ ha massa nulla perché i conformi sono soltanto $7$."}
:::

:::osservazione
Sia $p=\dfrac RN$ la quota di unità di interesse nella popolazione; allora $E[X]=np$. Infatti, se le $n$ unità si estraggono una alla volta, l'unità nella posizione $i$ ha la stessa probabilità di essere ciascuna delle $N$ unità, quindi è di interesse con probabilità $p$. Il conteggio è la somma degli $n$ indicatori delle posizioni, e per la linearità del valore atteso $E[X]=np$, anche se gli indicatori sono dipendenti. Per $N>1$,
$$
\operatorname{Var}(X)=np(1-p)\frac{N-n}{N-1}.
$$
Il fattore $\dfrac{N-n}{N-1}$ si chiama correzione per popolazione finita. Se $n=N$, il conteggio vale sempre $R$, e infatti il fattore vale zero e la varianza è zero. Quando si estrae con reinserimento le prove sono indipendenti, quindi il conteggio è binomiale e la varianza è $np(1-p)$. Con $N=10$, $R=3$ e $n=2$ la varianza vale $0{,}42\cdot\dfrac89=\dfrac{28}{75}\approx0{,}373$ senza reinserimento e $0{,}42$ con reinserimento.
:::

::::teorema{#dipendenza-campionamento titolo="Dipendenza nel campionamento finito"}
Da un lotto di $10$ pezzi con $3$ difettosi si estraggono due pezzi senza reinserimento. Il primo è difettoso con probabilità $\dfrac3{10}$; se lo è, restano $2$ difettosi su $9$ pezzi, quindi entrambi sono difettosi con probabilità $\dfrac3{10}\cdot\dfrac29=\dfrac1{15}\approx0{,}067$. Con estrazioni indipendenti la stessa probabilità sarebbe $\left(\dfrac3{10}\right)^2=0{,}09$.

Con le lettere, sia $X$ il numero di unità di interesse in un campione uniforme senza reinserimento, con $N>1$. Si indichi con $I_i$ l'indicatore che la posizione $i$ contenga un'unità di interesse. Per due posizioni distinte la probabilità che entrambi gli indicatori valgano $1$ è
$$
E[I_i I_j]=\frac{R(R-1)}{N(N-1)}.
$$
Poiché ciascun indicatore ha media $p=\dfrac RN$, la differenza tra questa probabilità congiunta e $p^2$ è $-\dfrac{p(1-p)}{N-1}$. Da questa differenza si ricava la varianza ipergeometrica $np(1-p)\dfrac{N-n}{N-1}$.

:::dimostrazione
Per simmetria delle posizioni si possono considerare le prime due estrazioni. La prima appartiene al gruppo di interesse con probabilità $\dfrac RN$. Se la prima appartiene al gruppo e $R>0$, la seconda vi appartiene con probabilità $\dfrac{R-1}{N-1}$, perché rimangono un'unità di interesse e un'unità totale in meno. Moltiplicando le due probabilità si trova la formula, valida anche per $R=0$ perché in quel caso entrambi gli indicatori sono sempre nulli. La differenza con $p^2$ è
$$
\frac RN\cdot\frac{R-1}{N-1}-\frac RN\cdot\frac RN
=\frac RN\cdot\frac{N(R-1)-R(N-1)}{N(N-1)}
=\frac RN\cdot\frac{R-N}{N(N-1)}
=-\frac{p(1-p)}{N-1},
$$
perché $\dfrac{R-N}{N}=-(1-p)$.

Per la varianza, $X-np$ è la somma degli scarti $I_i-p$, per $i=1,\ldots,n$, e $\operatorname{Var}(X)=E[(X-np)^2]$. Nello sviluppo del quadrato della somma ci sono $n$ termini individuali $(I_i-p)^2$ e $n(n-1)$ prodotti $(I_i-p)(I_j-p)$ tra posizioni distinte, contati con il loro ordine. Ogni termine individuale ha media $E[(I_i-p)^2]=\operatorname{Var}(I_i)=p(1-p)$. Ogni prodotto ha media
$$
E[(I_i-p)(I_j-p)]=E[I_iI_j]-p\,E[I_j]-p\,E[I_i]+p^2=E[I_iI_j]-p^2=-\frac{p(1-p)}{N-1}.
$$
Sommando,
$$
\operatorname{Var}(X)=np(1-p)-\frac{n(n-1)p(1-p)}{N-1}=np(1-p)\left(1-\frac{n-1}{N-1}\right)=np(1-p)\frac{N-n}{N-1}.
$$
:::

Quando $0<R<N$, la dipendenza è negativa. Dopo un'estrazione di interesse la probabilità di un'altra diminuisce (da $\dfrac3{10}$ a $\dfrac29$ nell'esempio), mentre dopo un'estrazione dall'altro gruppo aumenta (a $\dfrac39$). Queste variazioni mantengono la stessa probabilità $p$ in ciascuna posizione, ma rendono meno probabili i conteggi estremi rispetto a estrazioni indipendenti con lo stesso $p$. Nell'esempio, oltre a due difettosi, è meno probabile anche nessun difettoso: $\dfrac7{10}\cdot\dfrac69=\dfrac7{15}\approx0{,}467$ contro $0{,}7^2=0{,}49$. Se una delle categorie non ha abbastanza unità per un conteggio estremo, quel conteggio è impossibile senza reinserimento, come zero difettosi fra $8$ pezzi estratti da $7$ conformi e $3$ difettosi.
::::

## Somme di conteggi e scelta della legge

::::teorema{#somme titolo="Somme di conteggi indipendenti"}
Il numero di teste in tre lanci di una moneta è $\operatorname{Bin}\left(3,\dfrac12\right)$, quello in altri cinque lanci è $\operatorname{Bin}\left(5,\dfrac12\right)$, e il totale è il numero di teste in otto lanci, cioè $\operatorname{Bin}\left(8,\dfrac12\right)$.

Con le lettere, se $X$ e $Y$ sono binomiali indipendenti con lo stesso parametro di successo $p$ e numeri di prove $n$ e $m$, la somma ha legge $\operatorname{Bin}(n+m,p)$. Se sono Poisson indipendenti con parametri $\lambda_1$ e $\lambda_2$, la somma ha legge $\operatorname{Pois}(\lambda_1+\lambda_2)$.

:::dimostrazione
Per la prima affermazione, poiché $X$ e $Y$ sono indipendenti, la probabilità di ogni coppia di valori $X=j$, $Y=i$ è il prodotto delle due masse (la legge della coppia, detta legge congiunta, è l'argomento del capitolo 7). Le stesse probabilità si ottengono contando i successi in due gruppi disgiunti di $n$ e di $m$ prove, tutte indipendenti con lo stesso $p$, quindi $X+Y$ ha la legge del numero di successi in $n+m$ prove.

Per la seconda, l'evento $\{X+Y=k\}$ è l'unione degli eventi disgiunti $\{X=j,\,Y=k-j\}$, per $j=0,\ldots,k$. Per l'indipendenza ciascuno ha probabilità $P(X=j)\,P(Y=k-j)$, quindi
$$
\begin{aligned}
P(X+Y=k)
&=\sum_{j=0}^k e^{-\lambda_1}\frac{\lambda_1^j}{j!}\,e^{-\lambda_2}\frac{\lambda_2^{k-j}}{(k-j)!}\\[6pt]
&=e^{-(\lambda_1+\lambda_2)}\sum_{j=0}^k\frac{\lambda_1^j\lambda_2^{k-j}}{j!(k-j)!}\\[6pt]
&=\frac{e^{-(\lambda_1+\lambda_2)}}{k!}
\sum_{j=0}^k\binom kj\lambda_1^j\lambda_2^{k-j}\\[6pt]
&=e^{-(\lambda_1+\lambda_2)}\frac{(\lambda_1+\lambda_2)^k}{k!}.
\end{aligned}
$$
Nel terzo passaggio si è moltiplicato e diviso per $k!$, usando $\dfrac{k!}{j!(k-j)!}=\binom kj$. L'ultima uguaglianza è lo sviluppo di Newton della potenza di un binomio, $(a+b)^k=\sum_{j=0}^k\binom kj a^j b^{k-j}$, con $a=\lambda_1$ e $b=\lambda_2$.
:::

Se due flussi indipendenti producono in media due e tre arrivi nella stessa ora e i conteggi sono di Poisson, il totale orario è di Poisson di parametro $2+3=5$. La probabilità che l'ora trascorra senza arrivi è quindi $e^{-5}\approx0{,}0067$.
::::

:::osservazione
La linearità $E[X+Y]=E[X]+E[Y]$ vale anche per variabili dipendenti, mentre la regola $\operatorname{Var}(X+Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)$ richiede l'indipendenza. Se c'è dipendenza, alla somma delle varianze si aggiunge il termine $2\operatorname{Cov}(X,Y)$, dove $\operatorname{Cov}$ è la covarianza del capitolo 7. Nel caso estremo $Y=X$ la somma è $2X$ e, per la regola delle trasformazioni affini, $\operatorname{Var}(2X)=4\operatorname{Var}(X)$, il doppio di $\operatorname{Var}(X)+\operatorname{Var}(X)$.
:::

:::esempio{titolo="Quattro domande sullo stesso controllo"}
Un responsabile verifica dispositivi e chiama successo il superamento del controllo.

- Il numero di dispositivi promossi in $10$ verifiche indipendenti, con la stessa probabilità di superare il controllo, ha legge binomiale.
- Il numero di verifiche fino al primo promosso, nelle stesse condizioni, ha legge geometrica.
- Il numero di conformi fra $10$ dispositivi scelti senza reinserimento da un lotto con un numero noto di conformi ha legge ipergeometrica.
- Il numero di segnalazioni registrate in un'ora, se gli arrivi formano un processo di Poisson omogeneo, ha legge di Poisson.

In tutti e quattro i casi la variabile è un conteggio, mentre il supporto e la procedura con cui si raccolgono i dati determinano la legge.
:::
