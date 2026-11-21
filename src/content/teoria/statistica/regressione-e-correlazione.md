---
titolo: "Regressione lineare e correlazione"
sommario: "Dai dati appaiati alla retta dei minimi quadrati, con residui, correlazione e intervalli per la pendenza, la risposta media e una nuova osservazione."
---

In un'officina si registrano, per cinque pezzi, lo spessore del materiale in millimetri e il tempo impiegato per tagliarlo in secondi. Da questi dati si vuole ricavare di quanti secondi aumenta in media il tempo di taglio per ogni millimetro di spessore in più, e quale tempo aspettarsi per un pezzo di spessore assegnato. Questo capitolo calcola la retta che passa più vicino ai punti (spessore, tempo). Con i cinque pezzi dell'esempio che accompagna il capitolo la retta è $\hat y=1{,}3+0{,}9x$, quindi ogni millimetro in più aggiunge in media $0{,}9$ secondi. Si calcolano poi due numeri che dicono quanto i punti sono vicini a quella retta, il coefficiente di determinazione $R^2=0{,}81$ e la correlazione $r=0{,}9$.

I cinque pezzi sono un campione: altri cinque pezzi darebbero una pendenza diversa da $0{,}9$. La seconda parte del capitolo risponde perciò alle domande dell'inferenza statistica. Si costruisce un intervallo per la pendenza della popolazione, si verifica con un test se i dati bastano a concludere che il tempo dipende davvero dallo spessore e si calcola l'intervallo in cui cadrà, con probabilità assegnata, il tempo di un nuovo pezzo.

Il capitolo usa la media e la deviazione standard del capitolo 2. La pendenza calcolata sui dati corrisponde alla pendenza $\dfrac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}$ della retta di regressione per due variabili aleatorie, e la correlazione $r$ corrisponde al coefficiente $\rho$, entrambi visti nel capitolo 7. La parte di inferenza usa la legge normale del capitolo 6, le leggi chi quadrato e t di Student del capitolo 8, gli intervalli di confidenza del capitolo 10 e i test del capitolo 11. È l'ultimo capitolo del corso, e applica a una retta gli strumenti che nei capitoli dall'8 all'11 sono stati costruiti per una sola media.

## Dati appaiati e diagramma di dispersione

:::definizione{#dati titolo="Dati appaiati"}
In un'officina, per ogni pezzo si registrano lo spessore del materiale e il tempo impiegato per il taglio. Ogni pezzo fornisce quindi due misure, e i dati di questo tipo si chiamano **dati appaiati**. Si indica con $(x_i,y_i)$ la coppia osservata sull'unità $i$, con $i=1,\ldots,n$; per il pezzo $i$, $x_i$ è lo spessore e $y_i$ il tempo.

La **regressione** di $y$ su $x$ cerca una funzione di $x$, in questo capitolo una retta, che dia il valore medio di $y$ per ogni valore di $x$. Nell'officina la retta dà il tempo medio di taglio per ogni spessore. La variabile $x$, da cui si parte, si chiama predittore; la variabile $y$, che si vuole prevedere, si chiama risposta. Nell'esempio il predittore è lo spessore e la risposta è il tempo.

Nel **diagramma di dispersione** ogni coppia è rappresentata da un punto del piano, con $x_i$ in ascissa e $y_i$ in ordinata. Si dice che fra $x$ e $y$ c'è un'associazione crescente quando, scorrendo i punti da sinistra a destra, le ordinate tendono a crescere; c'è un'associazione decrescente quando tendono a diminuire. Il diagramma serve a tre controlli prima di ogni calcolo.

- Se i punti si dispongono attorno a una retta, una retta descrive bene come varia in media la risposta.
- Se si dispongono attorno a una curva, una retta descrive male la relazione.
- Se l'altezza della nuvola di punti è simile a tutte le ascisse, la dispersione della risposta attorno alla media è approssimativamente costante.
:::

:::esempio{titolo="Lettura di cinque osservazioni"}
Per le coppie $(1,2)$, $(2,3)$, $(3,5)$, $(4,4)$ e $(5,6)$, l'ultima ordinata è più alta della prima, perciò l'associazione è crescente. Tra $x=3$ e $x=4$ l'ordinata scende da $5$ a $4$, quindi la crescita vale per l'insieme dei punti e non per ogni coppia di punti vicini. Una retta descrive la tendenza media e lascia una distanza verticale da ciascun dato.

::grafico{xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" titolo="Diagramma di dispersione delle cinque coppie osservate"}
:::

:::attenzione
Ordinare separatamente le due colonne associa misure di unità diverse. Per esempio, le coppie $(1,5)$, $(2,3)$ e $(3,1)$ descrivono una relazione decrescente. Ordinando soltanto le ordinate si ottengono $(1,1)$, $(2,3)$ e $(3,5)$, e l'associazione diventa crescente. Le medie e le varianze delle singole colonne sono rimaste uguali, perché ciascuna colonna contiene gli stessi numeri. È cambiato soltanto il modo in cui quei numeri sono appaiati.
:::

:::definizione{#somme-centrate titolo="Somme centrate"}
Nei cinque dati dell'esempio le medie sono $\bar x=\dfrac{1+2+3+4+5}{5}=3$ e $\bar y=\dfrac{2+3+5+4+6}{5}=4$. Sottraendo le medie si ottengono gli scarti
$$
\begin{aligned}
x_i-\bar x&\colon\ -2,\ -1,\ 0,\ 1,\ 2,\\[6pt]
y_i-\bar y&\colon\ -2,\ -1,\ 1,\ 0,\ 2.
\end{aligned}
$$
La somma dei quadrati degli scarti delle ascisse è $4+1+0+1+4=10$, e lo stesso vale per le ordinate. La somma dei prodotti degli scarti, coppia per coppia, è $4+1+0+0+4=9$.

In generale si indicano con $\bar x$ e $\bar y$ le medie delle ascisse e delle ordinate, e si chiamano scarti centrati le differenze $x_i-\bar x$ e $y_i-\bar y$. Si definiscono le **somme centrate**
$$
\begin{aligned}
S_{xx}&=\sum_{i=1}^n(x_i-\bar x)^2,\\[6pt]
S_{yy}&=\sum_{i=1}^n(y_i-\bar y)^2,\\[6pt]
S_{xy}&=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y).
\end{aligned}
$$
Nei cinque dati $S_{xx}=S_{yy}=10$ e $S_{xy}=9$.

Le prime due somme misurano la dispersione di ciascuna variabile attorno alla sua media: divise per $n-1$ danno le varianze corrette del capitolo 2. Nella terza, una coppia di scarti dello stesso segno dà un contributo positivo, mentre una coppia di segni opposti dà un contributo negativo. Perciò $S_{xy}>0$ quando prevalgono le coppie con entrambe le misure sopra la media o entrambe sotto, come accade in un'associazione crescente. Divisa per $n-1$, $S_{xy}$ dà la covarianza campionaria, che nei cinque dati vale $\dfrac{9}{4}=2{,}25$. Le tre somme servono a calcolare la pendenza della retta, il coefficiente $R^2$ e la correlazione $r$ di questo capitolo.

::grafico{xmin=-2.7 xmax=2.7 ymin=-2.7 ymax=2.7 nomi="u,v" punti="-2,-2;-1,-1;0,1;1,0;2,2" titolo="Diagramma degli scarti centrati u e v. I tre punti fuori dagli assi hanno scarti dello stesso segno e contribuiscono con 4, 1 e 4."}
:::

:::osservazione
Quando sono disponibili i totali $\sum_i x_i$, $\sum_i y_i$ e $\sum_i x_i y_i$, si calcola $S_{xy}$ senza scrivere gli scarti, con la formula
$$
S_{xy}=\sum_{i=1}^n x_i y_i-n\bar x\bar y.
$$
La formula si ottiene sviluppando il prodotto e usando $\sum_i x_i=n\bar x$ e $\sum_i y_i=n\bar y$:
$$
\begin{aligned}
S_{xy}&=\sum_i x_iy_i-\bar y\sum_i x_i-\bar x\sum_i y_i+n\bar x\bar y\\[6pt]
&=\sum_i x_iy_i-n\bar x\bar y-n\bar x\bar y+n\bar x\bar y\\[6pt]
&=\sum_i x_iy_i-n\bar x\bar y.
\end{aligned}
$$
Nei cinque dati $\sum_i x_iy_i=2+6+15+16+30=69$, quindi $S_{xy}=69-5\cdot3\cdot4=9$. Ponendo $y_i=x_i$ si ottiene $S_{xx}=\sum_i x_i^2-n\bar x^2$.

Con misure molto grandi e vicine fra loro il calcolo sugli scarti è più sicuro. Per le ascisse $1\,000\,001$, $1\,000\,002$ e $1\,000\,003$ i numeri $\sum_i x_i^2=3\,000\,012\,000\,014$ e $n\bar x^2=3\,000\,012\,000\,012$ diventano uguali in una calcolatrice a dieci cifre, che dà quindi $S_{xx}=0$, mentre gli scarti $-1$, $0$, $1$ danno $S_{xx}=2$.
:::

## Retta dei minimi quadrati

:::definizione{#criterio-minimi-quadrati titolo="Criterio dei minimi quadrati"}
Si consideri la retta $y=1+x$ per i cinque dati. Alle ascisse $1,2,3,4,5$ la retta assegna i valori $2,3,4,5,6$, mentre le ordinate osservate sono $2,3,5,4,6$. Gli scarti verticali, cioè ordinata osservata meno valore della retta, sono $0$, $0$, $1$, $-1$, $0$, e la somma dei loro quadrati vale $2$. Per un'altra retta la somma è diversa, e si cerca la retta per cui è la più piccola possibile.

In generale, per la retta $a+bx$ si indica con $a$ l'intercetta e con $b$ la pendenza. Alla $i$-esima ascissa la retta assegna il valore $a+bx_i$, quindi lo scarto verticale dal dato è $y_i-a-bx_i$. Il criterio dei **minimi quadrati** sceglie $a$ e $b$ in modo da rendere minima la somma
$$
Q(a,b)=\sum_{i=1}^n(y_i-a-bx_i)^2.
$$
Elevando al quadrato, scarti di segno opposto contribuiscono entrambi in modo positivo: due scarti $-2$ e $2$ contribuiscono per $4+4=8$, mentre la loro somma senza quadrati sarebbe $0$.

Lo scarto è misurato in verticale, cioè lungo la risposta. Se si scambiano predittore e risposta, gli scarti diventano orizzontali e il problema di minimo cambia, quindi cambia anche la retta trovata.
:::

::::teorema{#retta titolo="Retta dei minimi quadrati con intercetta"}
Siano date $n\ge 2$ coppie con $S_{xx}>0$, cioè con almeno due ascisse diverse. Il minimo di $Q(a,b)$ è unico e si ottiene per
$$
b=\frac{S_{xy}}{S_{xx}},
\qquad
a=\bar y-b\bar x.
$$
Si scrive $\hat y(x)=a+bx$ (si legge «y cappello») per il **valore adattato** alla generica ascissa $x$, cioè il valore che la retta trovata assegna a quell'ascissa. La retta passa per il punto delle medie $(\bar x,\bar y)$, perché sostituendo $\bar x$ si ottiene $\hat y(\bar x)=\bar y-b\bar x+b\bar x=\bar y$.

:::dimostrazione
L'idea è scrivere $Q$ come somma di un termine che contiene l'intercetta e di un trinomio di secondo grado nella sola pendenza. Ogni scarto si scompone come
$$
y_i-a-bx_i=\big[(y_i-\bar y)-b(x_i-\bar x)\big]+(\bar y-a-b\bar x).
$$
Il primo addendo ha somma zero su $i$, perché $\sum_i(y_i-\bar y)=n\bar y-n\bar y=0$ e allo stesso modo $\sum_i(x_i-\bar x)=0$. Il secondo addendo non dipende da $i$. Sviluppando il quadrato e sommando su $i$, il doppio prodotto vale $2(\bar y-a-b\bar x)$ moltiplicato per la somma del primo addendo, quindi è nullo. Resta
$$
\begin{aligned}
Q(a,b)&=\sum_i\big[(y_i-\bar y)-b(x_i-\bar x)\big]^2+n(\bar y-a-b\bar x)^2\\[6pt]
&=S_{yy}-2bS_{xy}+b^2S_{xx}+n(\bar y-a-b\bar x)^2.
\end{aligned}
$$
Il termine $n(\bar y-a-b\bar x)^2$ è non negativo e vale zero solo per $a=\bar y-b\bar x$. Il trinomio $S_{xx}b^2-2S_{xy}b+S_{yy}$ ha coefficiente direttore $S_{xx}>0$, quindi è una parabola rivolta verso l'alto con un unico minimo nel vertice $b=\dfrac{S_{xy}}{S_{xx}}$. Perciò $Q$ è minima quando il trinomio è nel vertice e, insieme, il primo termine è zero, cioè per la coppia dell'enunciato. Per ogni altra coppia o il trinomio è maggiore del suo minimo, oppure il primo termine è positivo, quindi il minimo è unico.

Il punto di minimo soddisfa due equazioni che servono per studiare i residui. Fissata la pendenza, $Q$ è un trinomio di secondo grado nell'intercetta, e nel minimo la sua derivata rispetto ad $a$ è nulla; fissata l'intercetta, vale lo stesso per la derivata rispetto a $b$. Le derivate calcolate tenendo fissa l'altra lettera valgono $-2\sum_i(y_i-a-bx_i)$ e $-2\sum_i x_i(y_i-a-bx_i)$. Le due condizioni si chiamano **equazioni normali**:
$$
\begin{cases}
\sum_i(y_i-a-bx_i)=0,\\
\sum_i x_i(y_i-a-bx_i)=0.
\end{cases}
$$
:::
::::

:::esempio{titolo="Pendenza, intercetta e unità di misura"}
Nei cinque dati con $\bar x=3$, $\bar y=4$, $S_{xx}=10$ e $S_{xy}=9$ si ottiene
$$
\begin{aligned}
b&=\frac{9}{10}=0{,}9,\\[6pt]
a&=4-0{,}9\cdot3=1{,}3,\\[6pt]
\hat y(x)&=1{,}3+0{,}9x.
\end{aligned}
$$
Se $x$ è misurato in millimetri e $y$ in secondi, la pendenza si misura in secondi al millimetro: un millimetro in più di spessore corrisponde a un tempo stimato maggiore di $0{,}9\,\mathrm{s}$. L'intercetta si misura in secondi ed è il valore adattato a $x=0$, cioè $1{,}3\,\mathrm{s}$. I dati osservati hanno però spessori fra $1$ e $5\,\mathrm{mm}$, perciò $1{,}3\,\mathrm{s}$ è il tempo di taglio di un pezzo di spessore nullo solo se la retta resta valida fino a $x=0$, fuori dalle ascisse osservate.
:::

:::osservazione
Nella regressione di $x$ su $y$ il predittore diventa $y$, quindi la pendenza è $\dfrac{S_{xy}}{S_{yy}}$, se $S_{yy}>0$. Per esempio, con $S_{xx}=20$, $S_{yy}=45$ e $S_{xy}=18$ le due pendenze sono
$$
\frac{S_{xy}}{S_{xx}}=\frac{18}{20}=0{,}9,\qquad \frac{S_{xy}}{S_{yy}}=\frac{18}{45}=0{,}4.
$$
Ricavando $x$ dalla retta di $y$ su $x$ si otterrebbe invece una pendenza pari a $\dfrac{1}{0{,}9}\approx1{,}11$, diversa da $0{,}4$. La differenza dipende dagli scarti che si rendono minimi. Nella regressione di $y$ su $x$ si misura lo scarto in $y$ a $x$ fissato; nella regressione di $x$ su $y$ si misura lo scarto in $x$ a $y$ fissato.
:::

## Residui e qualità dell'adattamento

:::definizione{#residui titolo="Valori adattati e residui"}
Il **valore adattato** alla $i$-esima ascissa è $\hat y_i=a+bx_i$. Il **residuo** è la differenza $e_i=y_i-\hat y_i$ fra l'ordinata osservata e il valore adattato. Il residuo è positivo quando il punto osservato sta sopra la retta e negativo quando sta sotto.

La prima equazione normale è $\sum_i(y_i-a-bx_i)=0$, cioè $\sum_i e_i=0$; la seconda è $\sum_i x_i e_i=0$. Dalla prima segue $\sum_i\hat y_i=\sum_i y_i-\sum_i e_i=\sum_i y_i$, quindi la media dei valori adattati coincide con la media $\bar y$ delle ordinate osservate. Le due somme nulle sono anche un controllo dei conti: se i residui calcolati non hanno somma zero, la retta contiene un errore.
:::

:::esempio{titolo="Scarto verticale dalla retta"}
Per la retta $\hat y(x)=1{,}3+0{,}9x$, all'ascissa $4$ il valore adattato è $1{,}3+3{,}6=4{,}9$. Il dato osservato è $4$, quindi il residuo è $4-4{,}9=-0{,}9$. All'ascissa $3$ il valore adattato è $4$ e l'ordinata osservata è $5$, perciò il residuo vale $1$. In figura i segmenti tratteggiati rappresentano queste due differenze verticali.

Per tutti e cinque i dati i valori adattati sono $2{,}2$, $3{,}1$, $4$, $4{,}9$, $5{,}8$ e i residui sono $-0{,}2$, $-0{,}1$, $1$, $-0{,}9$, $0{,}2$. La loro somma è $0$, e anche $\sum_i x_ie_i=-0{,}2-0{,}2+3-3{,}6+1=0$. La somma dei quadrati dei residui vale $0{,}04+0{,}01+1+0{,}81+0{,}04=1{,}9$, meno del valore $2$ della retta $y=1+x$.

::grafico{f="1.3+0.9*x" xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" segmenti="3,4,3,5;4,4,4,4.9" legenda="\hat y=1{,}3+0{,}9x" titolo="Retta adattata e scarti verticali alle ascisse 3 e 4"}
:::

::::teorema{#scomposizione-regressione titolo="Scomposizione della variabilità"}
Nei cinque dati, la retta orizzontale $y=\bar y=4$, che assegna a ogni pezzo il tempo medio, lascia scarti con somma dei quadrati $S_{yy}=10$. La retta dei minimi quadrati lascia residui con somma dei quadrati $1{,}9$. La differenza $10-1{,}9=8{,}1$ è la parte della variabilità che la retta attribuisce al cambiamento dello spessore.

Per una retta dei minimi quadrati con intercetta e $S_{xx}>0$ si chiamano
- $SST=\sum_i(y_i-\bar y)^2=S_{yy}$ la somma totale dei quadrati (dall'inglese *total sum of squares*);
- $SSR=\sum_i(\hat y_i-\bar y)^2$ la somma dei quadrati della regressione (*regression*);
- $SSE=\sum_i e_i^2$ la somma dei quadrati dei residui (*error*).

Vale
$$
SST=SSR+SSE,\qquad SSR=b^2S_{xx}.
$$
Nei cinque dati $SSR=0{,}9^2\cdot10=8{,}1$ e $10=8{,}1+1{,}9$.

:::dimostrazione
Poiché $a=\bar y-b\bar x$, il valore adattato si scrive $\hat y_i=\bar y+b(x_i-\bar x)$, quindi $\hat y_i-\bar y=b(x_i-\bar x)$. Elevando al quadrato e sommando si ottiene $SSR=b^2S_{xx}$.

Ogni scarto dalla media si scrive come $y_i-\bar y=(\hat y_i-\bar y)+e_i$. Sviluppando il quadrato e sommando su $i$ si ottengono $SSR$, $SSE$ e il termine misto $2\sum_i(\hat y_i-\bar y)e_i$. Sostituendo $\hat y_i-\bar y=b(x_i-\bar x)$, il termine misto è
$$
2b\left(\sum_i x_i e_i-\bar x\sum_i e_i\right)=0,
$$
perché entrambe le somme si annullano per le equazioni normali. Restano quindi soltanto $SSR$ e $SSE$.
:::
::::

:::definizione{#coefficiente-determinazione titolo="Coefficiente di determinazione"}
Nei cinque dati la somma totale dei quadrati è $SST=10$, e la retta ne attribuisce allo spessore $SSR=8{,}1$, cioè una quota $\dfrac{8{,}1}{10}=0{,}81$.

Se $SST>0$, il **coefficiente di determinazione** è
$$
R^2=\frac{SSR}{SST}=1-\frac{SSE}{SST}.
$$
Con l'intercetta e il criterio dei minimi quadrati $SSR$ e $SSE$ sono non negativi e hanno somma $SST$, perciò $R^2$ appartiene a $[0,1]$. Il valore $R^2=1$ si ha quando tutti i residui sono nulli, cioè quando i punti stanno su una retta; il valore $R^2=0$ si ha quando $b=0$ e la retta dei minimi quadrati è orizzontale.

La condizione $SST>0$ esclude il caso in cui tutte le ordinate sono uguali. Se le ordinate valgono tutte $5$, si ha $SST=0$ e il rapporto ha denominatore nullo, anche se la retta orizzontale $y=5$ passa per tutti i punti.
:::

:::attenzione
Il valore $0{,}81$ è una quota di somma dei quadrati, e non dice quante previsioni cadono vicino al dato. Nei cinque dati i residui sono $-0{,}2$, $-0{,}1$, $1$, $-0{,}9$, $0{,}2$, quindi i valori adattati che distano non più di mezzo secondo dal tempo osservato sono $3$ su $5$, cioè il $60\%$. Per ottenere questa percentuale si contano i residui che rispettano la soglia; $R^2$ non la fornisce.
:::

## Correlazione di Pearson

:::definizione{#pearson titolo="Coefficiente di correlazione di Pearson"}
La somma $S_{xy}$ dipende dalle unità di misura. Nei cinque dati $S_{xy}=9$ con lo spessore in millimetri; con lo spessore in centimetri gli scarti delle ascisse si dividono per $10$ e si ottiene $S_{xy}=0{,}9$, anche se i pezzi sono gli stessi. Per avere un numero che non dipende dalle unità si divide $S_{xy}$ per $\sqrt{S_{xx}S_{yy}}$, che cambia con le unità nello stesso modo: in millimetri $\dfrac{9}{\sqrt{10\cdot10}}=0{,}9$, in centimetri $\dfrac{0{,}9}{\sqrt{0{,}1\cdot10}}=0{,}9$.

Quando $S_{xx}>0$ e $S_{yy}>0$, la **correlazione campionaria di Pearson** è
$$
r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.
$$
Il numero $r$ è un numero puro, senza unità di misura. Il suo segno è quello di $S_{xy}$, quindi coincide con il segno della pendenza della retta di $y$ su $x$. La regressione assegna ruoli diversi a risposta e predittore, mentre la formula di $r$ non cambia scambiando $x$ con $y$. Il coefficiente $r$ calcolato sui dati corrisponde al coefficiente $\rho$ definito nel capitolo 7 per due variabili aleatorie.

Il teorema seguente mostra che $-1\le r\le1$ e che $|r|=1$ quando i punti stanno su una retta. Un valore di $r$ vicino a $1$ non dice invece quale delle due variabili influisce sull'altra. Nei dati raccolti senza fissare il predittore, $x$ e $y$ crescono insieme anche quando nessuna delle due influisce sull'altra ed entrambe dipendono da una terza variabile.
:::

::::teorema{#pearson-determinazione titolo="Correlazione e determinazione"}
Per dati con $S_{xx}>0$ e $S_{yy}>0$, nella regressione lineare semplice con intercetta vale $R^2=r^2$. Ne seguono $|r|\le 1$ e
$$
|S_{xy}|\le\sqrt{S_{xx}S_{yy}}.
$$
Due insiemi di dati con $r=0{,}9$ e $r=-0{,}9$ hanno entrambi $R^2=0{,}81$, perché $R^2$ è un quadrato; solo il segno di $r$ dice se la retta sale o scende.

:::dimostrazione
Per il teorema sulla scomposizione della variabilità $SSR=b^2S_{xx}$, e inoltre $SST=S_{yy}$. Sostituendo $b=\dfrac{S_{xy}}{S_{xx}}$ nella formula di $R^2$ si ottiene
$$
R^2=\frac{b^2S_{xx}}{S_{yy}}
=\frac{S_{xy}^2}{S_{xx}^2}\cdot\frac{S_{xx}}{S_{yy}}
=\frac{S_{xy}^2}{S_{xx}S_{yy}}
=r^2.
$$
Poiché $R^2\le 1$, si ha $r^2\le1$, cioè $|r|\le 1$; moltiplicando $|r|\le1$ per $\sqrt{S_{xx}S_{yy}}>0$ si ottiene la disuguaglianza su $|S_{xy}|$. Se $|r|=1$, allora $R^2=1$ e $SSE=0$, quindi tutti i residui sono nulli e i punti stanno esattamente sulla retta.
:::
::::

:::osservazione
Traslando le ascisse di una costante, per esempio da $x$ a $x+100$, anche la media aumenta di $100$, quindi gli scarti dalla media restano uguali e $r$ resta uguale. Moltiplicando le ascisse per una costante positiva $c$, gli scarti e $S_{xy}$ si moltiplicano per $c$, mentre $S_{xx}$ si moltiplica per $c^2$. Il denominatore $\sqrt{S_{xx}S_{yy}}$ si moltiplica quindi per $c$ e il fattore si semplifica nel rapporto. Per $c<0$ il denominatore si moltiplica per $|c|=-c$ e il numeratore per $c$, quindi il segno di $r$ si inverte. Passare da metri a centimetri moltiplica le ascisse per $100$: lascia invariato $r$ e divide per $100$ la pendenza, che diventa una variazione per centimetro.
:::

:::osservazione
Standardizzare una variabile significa sottrarle la media e dividere per la deviazione standard campionaria corretta del capitolo 2, $s_x=\sqrt{\dfrac{S_{xx}}{n-1}}$. Le ascisse standardizzate $u_i=\dfrac{x_i-\bar x}{s_x}$ hanno media zero e somma dei quadrati $\dfrac{S_{xx}}{s_x^2}=n-1$; lo stesso vale per le ordinate standardizzate $v_i$. Nella regressione di $v$ su $u$ l'intercetta è quindi zero, perché le due medie sono zero, e la pendenza è
$$
\frac{\sum_i u_iv_i}{\sum_i u_i^2}=\frac{\dfrac{S_{xy}}{s_xs_y}}{n-1}.
$$
Il denominatore di Pearson calcolato sulle variabili standardizzate vale $\sqrt{(n-1)(n-1)}=n-1$, lo stesso della pendenza, perciò la pendenza standardizzata coincide con $r$. Se $r=0{,}6$, una deviazione standard in più nel predittore corrisponde a $0{,}6$ deviazioni standard in più nella risposta adattata.
:::

:::attenzione
I tre punti $(-1,1)$, $(0,0)$ e $(1,1)$ hanno $\bar x=0$ e $\bar y=\dfrac23$, quindi $S_{xy}=(-1)\cdot\dfrac13+0+1\cdot\dfrac13=0$ e $r=0$. Le ordinate sono comunque determinate dalle ascisse attraverso $y=x^2$. Un coefficiente nullo indica che non c'è associazione lineare, cioè che la retta dei minimi quadrati è orizzontale; per riconoscere una relazione curva serve il diagramma di dispersione. Poiché $b=0$, la retta dei minimi quadrati è la retta orizzontale $\hat y=\bar y=\dfrac23$.

::grafico{f="x^2;2/3" xmin=-1.8 xmax=1.8 ymin=-0.4 ymax=2.2 punti="-1,1;0,0;1,1" legenda="y=x^2;\hat y=\frac{2}{3}" titolo="I tre punti stanno sulla parabola $y=x^2$, ma la retta dei minimi quadrati è orizzontale e $r=0$."}
:::

## Modello lineare e inferenza sulla pendenza

:::definizione{#modello-lineare titolo="Modello lineare con errori indipendenti"}
Se nell'officina si tagliano tre pezzi dello stesso spessore, $3\,\mathrm{mm}$, i tempi non sono uguali: per esempio $4{,}1$, $3{,}8$ e $4{,}4$ secondi. A spessore fissato il tempo è quindi una variabile aleatoria, che varia attorno a un tempo medio; il tempo medio cambia con lo spessore. Lo spessore invece è scelto prima del taglio e non è aleatorio: si dice che i predittori sono fissati.

Nel **modello lineare semplice** a predittori fissati, i numeri $x_1,\ldots,x_n$ sono noti e la risposta $Y_i$ è una variabile aleatoria che soddisfa
$$
Y_i=\alpha+\beta x_i+\varepsilon_i.
$$
I parametri $\alpha$ e $\beta$ (si leggono alfa e beta) sono l'intercetta e la pendenza della retta media della popolazione, che non si conosce. L'errore $\varepsilon_i$ (si legge epsilon) è lo scarto di $Y_i$ da quella retta media. Gli errori hanno media zero, quindi $E[Y_i]=\alpha+\beta x_i$: la retta $\alpha+\beta x$ dà il tempo medio per ogni spessore. Le procedure di questa sezione assumono inoltre che gli errori siano indipendenti e abbiano tutti la stessa varianza $\sigma^2>0$ ($\sigma$ si legge sigma).

Fra il modello e la retta calcolata c'è la stessa relazione che nel capitolo 1 lega parametro e statistica. I parametri $\alpha$ e $\beta$ sono fissi e ignoti; $a$ e $b$ si calcolano dal campione e ne sono le stime. Allo stesso modo l'errore $\varepsilon_i$ non si conosce, perché dipende dalla retta vera, mentre il residuo $e_i$ si calcola dopo aver adattato la retta ai dati.

Se in più gli errori hanno legge normale $N(0,\sigma^2)$ del capitolo 6, le statistiche della sezione seguono esattamente la legge t di Student del capitolo 8, e gli intervalli e i test hanno esattamente il livello dichiarato.
:::

:::teorema{#inferenza titolo="Errore standard e test sulla pendenza"}
Nel modello a predittori fissati con errori indipendenti $N(0,\sigma^2)$, $n>2$ e $S_{xx}>0$, si stima la varianza degli errori con la **varianza residua**
$$
s_e^2=\frac{SSE}{n-2},
$$
e si chiama deviazione standard residua la sua radice $s_e$. Il divisore è $n-2$, e non $n$, perché i residui soddisfano le due equazioni normali $\sum_ie_i=0$ e $\sum_ix_ie_i=0$; per esempio, con cinque dati, noti tre residui gli altri due si ricavano dalle due equazioni. Restano quindi $n-2$ residui liberi, detti gradi di libertà, come gli $n-1$ scarti dalla media del capitolo 8. Nei cinque dati $s_e^2=\dfrac{1{,}9}{3}$ e $s_e\approx0{,}796$.

L'**errore standard** stimato della pendenza, cioè la stima della deviazione standard di $b$, che cambia da un campione all'altro, è
$$
SE(b)=\frac{s_e}{\sqrt{S_{xx}}}.
$$
Nei cinque dati $SE(b)=\dfrac{0{,}796}{\sqrt{10}}\approx0{,}252$. A parità di $s_e$, ascisse più distanti fra loro danno un $S_{xx}$ più grande e quindi una pendenza più precisa.

Nel teorema $b$, $s_e$ e $SE(b)$ indicano le quantità calcolate su un campione ancora da osservare, quindi variabili aleatorie. Sotto l'ipotesi nulla $H_0\colon\beta=\beta_0$ la statistica
$$
T=\frac{b-\beta_0}{SE(b)}
$$
ha legge $t_{n-2}$, la t di Student con $n-2$ gradi di libertà. Il livello di significatività si indica qui con $\gamma$ (si legge gamma), perché la lettera $\alpha$, usata per il livello nei capitoli 10 e 11, è già l'intercetta del modello. Si indica con $t_{\nu,p}$ il quantile di ordine $p$ della t di Student con $\nu$ gradi di libertà. Con alternativa bilaterale $H_1\colon\beta\ne\beta_0$ (nel capitolo 11 detta bilatera) si rifiuta $H_0$ se
$$
|T|\ge t_{n-2,1-\frac{\gamma}{2}}.
$$
Il caso più frequente è $\beta_0=0$. L'ipotesi $\beta=0$ dice che la risposta media è la stessa per ogni $x$; se la si rifiuta, i dati indicano che la risposta media cambia linearmente con $x$. Nei cinque dati $T=\dfrac{0{,}9}{0{,}252}\approx3{,}57$ e, al livello $\gamma=0{,}05$, $t_{3;0{,}975}\approx3{,}182$; poiché $3{,}57\ge3{,}182$, si rifiuta $\beta=0$.

Un intervallo di livello di confidenza $1-\gamma$ per $\beta$ è
$$
b\pm t_{n-2,1-\frac{\gamma}{2}}SE(b).
$$
Nei cinque dati, al $95\%$, $0{,}9\pm3{,}182\cdot0{,}252$ dà circa $[0{,}10;\,1{,}70]$. La semiampiezza è proporzionale a $SE(b)$, quindi, allo stesso livello di confidenza, dimezzando l'errore standard si dimezza l'intervallo.
:::

:::osservazione
Si indica con $B$ la pendenza come variabile aleatoria, cioè $B=\dfrac{\sum_i(x_i-\bar x)Y_i}{S_{xx}}$; infatti $\sum_i(x_i-\bar x)(Y_i-\bar Y)=\sum_i(x_i-\bar x)Y_i$, perché $\bar Y\sum_i(x_i-\bar x)=0$. Sostituendo il modello $Y_i=\alpha+\beta x_i+\varepsilon_i$ si hanno tre contributi.
- L'intercetta dà $\alpha\sum_i(x_i-\bar x)=0$.
- La pendenza dà $\beta\sum_i(x_i-\bar x)x_i=\beta S_{xx}$, perché $\sum_i(x_i-\bar x)x_i=\sum_i(x_i-\bar x)(x_i-\bar x)$.
- Gli errori danno $\sum_i(x_i-\bar x)\varepsilon_i$.

Perciò
$$
B=\beta+\frac{\sum_i (x_i-\bar x)\varepsilon_i}{S_{xx}}.
$$
Gli errori hanno media zero, quindi $E[B]=\beta$. Gli errori sono indipendenti con varianza $\sigma^2$, quindi, per la formula della varianza di una combinazione lineare del capitolo 7, il numeratore aleatorio ha varianza $\sigma^2\sum_i(x_i-\bar x)^2=\sigma^2S_{xx}$ e la pendenza ha varianza $\dfrac{\sigma^2S_{xx}}{S_{xx}^2}=\dfrac{\sigma^2}{S_{xx}}$. Con errori normali $B$ è normale, perché combinazione lineare di normali indipendenti, e $Z=\dfrac{B-\beta}{\dfrac{\sigma}{\sqrt{S_{xx}}}}$ è normale standard.

Si dimostra inoltre che $V=\dfrac{SSE}{\sigma^2}$ ha legge chi quadrato con $n-2$ gradi di libertà ed è indipendente da $B$. La dimostrazione usa la stessa scomposizione del vettore delle osservazioni in direzioni perpendicolari che nel capitolo 8 dà la legge della varianza campionaria; qui si usa il risultato. Per la definizione della legge di Student del capitolo 8, il rapporto
$$
\frac{Z}{\sqrt{\dfrac{V}{n-2}}}=\frac{\dfrac{B-\beta}{\dfrac{\sigma}{\sqrt{S_{xx}}}}}{\dfrac{s_e}{\sigma}}=\frac{B-\beta}{\dfrac{s_e}{\sqrt{S_{xx}}}}
$$
ha legge $t_{n-2}$, perché $\sqrt{\dfrac{V}{n-2}}=\sqrt{\dfrac{SSE}{\sigma^2(n-2)}}=\dfrac{s_e}{\sigma}$. Con $\beta=\beta_0$ il rapporto è la statistica $T$ del teorema.
:::

:::esempio{titolo="Verifica di una pendenza ipotizzata"}
Con $n=11$, $b=1{,}8$ e $SE(b)=0{,}3$, si consideri $H_0\colon\beta=1{,}2$ contro un'alternativa bilaterale al $5\%$. La statistica osservata vale
$$
T=\frac{1{,}8-1{,}2}{0{,}3}=2.
$$
I gradi di libertà sono $11-2=9$. Poiché $|T|=2<2{,}262=t_{9;0{,}975}$, il test non rifiuta $H_0$. Con lo stesso quantile l'intervallo al $95\%$ è $1{,}8\pm2{,}262\cdot0{,}3=1{,}8\pm0{,}6786$, cioè $[1{,}1214;\,2{,}4786]$. Il valore $1{,}2$ appartiene all'intervallo, in accordo con il test bilaterale dello stesso livello, come prevede il legame fra test bilaterale e intervallo di confidenza visto nel capitolo 11.

::grafico{f="0.388035*(1+x^2/9)^(-5)" area="0.388035*(1+x^2/9)^(-5);0;-4.6;-2.262|0.388035*(1+x^2/9)^(-5);0;2.262;4.6" punti="2,0.0617,pieno,T" segmenti="2,0,2,0.0617" xmin=-4.6 xmax=4.8 ymin=-0.035 ymax=0.45 nomi="t,f" legenda="t_9" titolo="Densità di Student con $9$ gradi di libertà. Le code colorate oltre $\pm 2{,}262$ formano la regione di rifiuto al $5\%$; il valore osservato $T=2$ cade fra le due soglie."}
:::

:::osservazione
Le alternative unilaterali si trattano come nel capitolo 11. Per l'alternativa unilaterale sinistra $H_1\colon\beta<\beta_0$ (alternativa inferiore) si rifiuta se $T\le t_{n-2,\gamma}$. Per l'alternativa unilaterale destra $H_1\colon\beta>\beta_0$ (alternativa superiore) si rifiuta se $T\ge t_{n-2,1-\gamma}$.

Allo stesso modo, come nel capitolo 10, il limite superiore di confidenza di livello $1-\gamma$ per $\beta$ è $b+t_{n-2,1-\gamma}SE(b)$ e il limite inferiore è $b-t_{n-2,1-\gamma}SE(b)$. Nell'esempio, con $t_{9;0{,}95}\approx1{,}833$, il limite superiore al $95\%$ è $1{,}8+1{,}833\cdot0{,}3\approx2{,}35$.

Nell'esempio con $T=2$ e $9$ gradi di libertà il valore $p$ bilaterale è circa $0{,}077$, mentre quello per l'alternativa destra è circa $0{,}038$, la metà. Al livello del $5\%$ il test unilaterale destro rifiuta quindi $H_0$, perché $0{,}038<0{,}05$, mentre il test bilaterale non la rifiuta, perché $0{,}077>0{,}05$. La differenza nasce dal fatto che il test bilaterale conta come evidenza contro $H_0$ anche gli scostamenti della stessa ampiezza nella direzione opposta. La direzione dell'alternativa fa parte della domanda e si fissa prima di vedere il segno della stima.
:::

## Risposta media e previsione individuale

:::teorema{#previsione titolo="Intervalli per risposta media e nuova osservazione"}
Nell'officina si vuole sapere, per pezzi di spessore $x_0=4\,\mathrm{mm}$, quale sia il tempo medio di taglio, e in quale intervallo cadrà il tempo del prossimo pezzo di quello spessore. Entrambe le stime partono dal valore adattato $1{,}3+0{,}9\cdot4=4{,}9$ secondi, ma il secondo intervallo è più largo, perché il tempo di un singolo pezzo varia attorno alla media.

Si assuma il modello normale con errori indipendenti, varianza comune, $n>2$ e $S_{xx}>0$. Per un'ascissa fissata $x_0$, il valore adattato è $\hat y_0=a+bx_0$. Si indica con $h_0$ il termine
$$
h_0=\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}},
$$
che è minimo, e vale $\dfrac1n$, per $x_0=\bar x$ e cresce con la distanza di $x_0$ dalla media delle ascisse. L'intervallo di livello di confidenza $1-\gamma$ per la **risposta media** $\alpha+\beta x_0$ è
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{h_0}.
$$
Per prevedere una nuova osservazione $Y_0$, indipendente dal campione e con la stessa varianza degli errori, l'**intervallo di previsione** di livello $1-\gamma$ è
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{1+h_0}.
$$
Il centro è lo stesso, perché il nuovo errore ha media zero. Il margine della previsione è più ampio, perché contiene anche la varianza dell'errore di quella singola osservazione, rappresentata dall'addendo $1$ sotto radice.

Se $x_0$ cade fuori dall'intervallo delle ascisse osservate, l'uso della retta si chiama **estrapolazione**. In quel caso i dati non dicono se la relazione resta lineare fino a $x_0$, perciò gli intervalli valgono solo se la retta resta valida fino a quel punto.
:::

:::osservazione
Poiché $a=\bar y-b\bar x$, la stima della risposta media si riscrive come $\hat y_0=\bar y+b(x_0-\bar x)$. Nel modello, con $\bar Y$ media delle risposte aleatorie, gli errori compaiono in $\bar Y$ con coefficienti $\dfrac1n$ e in $B$ con coefficienti $\dfrac{x_i-\bar x}{S_{xx}}$. La covarianza del capitolo 7 è lineare in ciascuna variabile, e due errori diversi sono indipendenti, quindi hanno covarianza nulla, mentre ogni errore ha varianza $\sigma^2$. Perciò
$$
\operatorname{Cov}(\bar Y,B)=\sigma^2\sum_i\frac1n\cdot\frac{x_i-\bar x}{S_{xx}}=\frac{\sigma^2}{nS_{xx}}\sum_i(x_i-\bar x)=0.
$$
Per la formula della varianza di una combinazione lineare, con covarianza nulla le varianze si sommano:
$$
\operatorname{Var}\big(\bar Y+B(x_0-\bar x)\big)=\frac{\sigma^2}{n}+(x_0-\bar x)^2\frac{\sigma^2}{S_{xx}}=\sigma^2h_0.
$$
Per la nuova risposta si considera la differenza $Y_0-\hat Y_0$. L'errore di $Y_0$ ha varianza $\sigma^2$ ed è indipendente dal campione, quindi la varianza della differenza è $\sigma^2+\sigma^2h_0=\sigma^2(1+h_0)$. Sostituendo $\sigma$ con $s_e$ e il quantile normale con quello di Student si ottengono i due intervalli. Il margine per la media è minimo a $x_0=\bar x$, dove il contributo della pendenza $(x_0-\bar x)^2\dfrac{\sigma^2}{S_{xx}}$ si annulla.
:::

:::esempio{titolo="Fascia per la risposta media nei cinque dati"}
Per i cinque dati con $\hat y(x)=1{,}3+0{,}9x$ si ha $SSE=1{,}9$, quindi
$$
s_e^2=\frac{1{,}9}{5-2}=\frac{19}{30},\qquad s_e\approx0{,}796.
$$
Con $t_{3;0{,}975}\approx3{,}182$, il margine al $95\%$ per la risposta media all'ascissa $x_0$ è
$$
3{,}182\cdot0{,}796\sqrt{\frac15+\frac{(x_0-3)^2}{10}}.
$$
A $x_0=3$ il termine sotto radice vale $\dfrac15$ e il margine è circa $1{,}13$. A $x_0=0$ e a $x_0=6$ il termine vale $\dfrac15+\dfrac{9}{10}=\dfrac{11}{10}$, perciò il margine sale a circa $2{,}66$. Al variare di $x_0$ gli estremi degli intervalli disegnano due rami di iperbole, più vicini fra loro al centro dei dati.

::grafico{f="1.3+0.9*x" area="1.3+0.9*x+2.5323*sqrt(0.2+(x-3)^2/10);1.3+0.9*x-2.5323*sqrt(0.2+(x-3)^2/10);0;6" punti="1,2;2,3;3,5;4,4;5,6" segmenti="3,0,3,4" xmin=-0.4 xmax=6.4 ymin=-1.8 ymax=10 legenda="\hat y=1{,}3+0{,}9x" titolo="Fascia di confidenza al $95\%$ per la risposta media. L'ampiezza è minima all'ascissa media $\bar x=3$."}
:::

:::esempio{titolo="Due margini allo stesso valore di x"}
Siano $n=16$, $s_e=2$ e $\hat y(\bar x)=20$. Per $x_0=\bar x$ si ha $h_0=\dfrac1{16}$. Gli errori standard stimati sono quindi
$$
\begin{aligned}
SE_{\mathrm{media}}&=2\sqrt{\frac1{16}}=\frac12,\\[6pt]
SE_{\mathrm{pred}}&=2\sqrt{1+\frac1{16}}=\frac{\sqrt{17}}2.
\end{aligned}
$$
Al $95\%$ si moltiplicano entrambi per $t_{14;0{,}975}\approx2{,}145$, con $16-2=14$ gradi di libertà. Il primo margine è circa $1{,}073$ e il secondo circa $4{,}422$. La media è quindi stimata con un margine di circa $1$, mentre una singola nuova risposta richiede un margine circa quattro volte più largo.

::grafico{assi=0 xmin=14 xmax=26 ymin=0 ymax=3 linee="18.927,2 21.073,2;15.578,1 24.422,1" punti="18.927,2;21.073,2;15.578,1;24.422,1;20,2;20,1" segmenti="20,0.7,20,2.3" etichette="18.4,2.3,M;15.3,1.3,P;20.1,2.5,20" titolo="Intervalli al 95% alla stessa ascissa. M riguarda la risposta media, P la previsione individuale. La verticale tratteggiata indica il centro comune 20."}
:::

:::attenzione
Il livello di confidenza è la frequenza con cui la procedura copre il valore cercato quando si ripete il campionamento nelle stesse condizioni. Per la risposta media il valore da coprire è il parametro fisso $\alpha+\beta x_0$. Per la previsione, in ogni ripetizione si aggiunge una nuova risposta aleatoria indipendente. L'intervallo della media è troppo stretto per una risposta individuale. Nell'esempio precedente, se la deviazione standard degli errori fosse proprio $2$ e la media proprio $20$, una nuova risposta cadrebbe fuori da $20\pm1{,}073$ con probabilità di circa $0{,}59$, molto più del $5\%$ dichiarato.
:::

## Diagnostica e limiti del modello

:::definizione{#diagnostica titolo="Diagramma dei residui"}
Il modello lineare assume che la risposta media sia una retta e che gli errori abbiano varianza costante e siano indipendenti. I residui servono a controllare queste ipotesi dopo aver adattato la retta. Nel **diagramma dei residui** si mette in ordinata il residuo $e_i$ e in ascissa $x_i$ oppure il valore adattato $\hat y_i$. Se le ipotesi sono soddisfatte, i punti formano una fascia orizzontale di altezza costante attorno a zero, senza un andamento. Tre andamenti indicano un problema.

- Residui positivi agli estremi e negativi al centro, o il contrario, indicano che la risposta media segue una curva: la retta lascia una variazione sistematica.
- Una fascia verticale che si allarga da sinistra a destra indica che la varianza degli errori cresce con $x$.
- Se le osservazioni hanno un ordine nel tempo, si disegnano i residui anche rispetto all'ordine. Lunghe sequenze dello stesso segno, per esempio sei residui positivi di fila e poi sei negativi, indicano che un errore grande tende a essere seguito da un errore dello stesso segno, quindi che gli errori non sono indipendenti.
:::

:::esempio{titolo="La somma dei residui può essere zero con una struttura curva"}
Alle ascisse $1,2,3,4,5$ si osservano i residui $2,-1,-2,-1,2$. La somma è $2-1-2-1+2=0$ e anche la somma pesata per le ascisse è $2-2-6-4+10=0$. Le equazioni normali sono quindi soddisfatte. Il diagramma mostra comunque residui positivi agli estremi e negativi al centro. Questo andamento indica una risposta media convessa, come una parabola rivolta verso l'alto, che la retta approssima solo in parte.

::grafico{f="0" xmin=-0.4 xmax=6 ymin=-2.8 ymax=2.8 nomi="x,e" punti="1,2;2,-1;3,-2;4,-1;5,2" legenda="e=0" titolo="Residui sopra zero agli estremi e sotto zero al centro"}
:::

:::definizione{#leva titolo="Leva e influenza"}
Nel modello con intercetta la **leva** dell'osservazione $i$ è
$$
h_i=\frac1n+\frac{(x_i-\bar x)^2}{S_{xx}}.
$$
Il valore $h_i$ coincide con il termine $h_0$ degli intervalli per la risposta media, calcolato in $x_0=x_i$, e dipende solo dalla distanza orizzontale dell'ascissa dal centro dei dati. Nei cinque dati, con $\bar x=3$ e $S_{xx}=10$, le leve sono $0{,}6$, $0{,}3$, $0{,}2$, $0{,}3$, $0{,}6$: le ascisse estreme hanno leva tripla rispetto a quella centrale.

La leva misura quanto il valore adattato in $x_i$ segue l'ordinata $y_i$. Se cambia soltanto l'ordinata $y_i$, di una quantità $\Delta$, il valore adattato $\hat y_i$ cambia di $h_i\Delta$. Con leva $0{,}6$, alzare di $1$ il dato all'ascissa $5$ alza di $0{,}6$ il suo valore adattato; con leva $0{,}2$, all'ascissa $3$, lo alza solo di $0{,}2$.

Un'osservazione è **influente** se togliendola la retta adattata cambia molto, come nell'esempio seguente. Una leva alta rende possibile una forte influenza, soprattutto quando il punto si discosta dalla tendenza degli altri dati. Se invece il punto estremo giace esattamente sulla retta determinata dagli altri punti, aggiungerlo lascia invariato l'adattamento: le coppie $(1,2)$, $(2,3)$, $(3,4)$, $(4,5)$ e $(10,11)$ stanno tutte sulla retta $y=1+x$, che resta la retta dei minimi quadrati.
:::

:::esempio{titolo="Un punto con leva alta e ordinata in disaccordo"}
Le coppie $(1,2)$, $(2,3)$, $(3,4)$ e $(4,5)$ stanno sulla retta $y=1+x$, di pendenza $1$. Si aggiunge il punto $(10,4)$, mentre la retta iniziale prevede $11$ a quell'ascissa. Con le cinque coppie si ha $\bar x=\dfrac{20}{5}=4$ e $\bar y=\dfrac{18}{5}$. Inoltre $\sum_i x_i^2=1+4+9+16+100=130$ e $\sum_i x_iy_i=2+6+12+20+40=80$, quindi le somme centrate valgono
$$
\begin{aligned}
S_{xx}&=130-5\cdot4^2=50,\\[6pt]
S_{xy}&=80-5\cdot4\cdot\frac{18}{5}=8,
\end{aligned}
$$
e la nuova pendenza è $b=\dfrac{8}{50}=0{,}16$. La leva del punto aggiunto è
$$
h=\frac15+\frac{(10-4)^2}{50}=\frac{23}{25}=0{,}92.
$$
Una variazione $\Delta$ dell'ordinata del punto aggiunto sposta perciò il suo valore adattato di $0{,}92\,\Delta$: la retta passa quasi per quel punto. Il valore adattato a $x=10$ è $2{,}96+0{,}16\cdot10=4{,}56$, a distanza $0{,}56$ dal dato. La sola presenza di questo punto riduce la pendenza da $1$ a $0{,}16$.

::grafico{f="1+x;2.96+0.16*x" xmin=-0.5 xmax=11 ymin=-0.5 ymax=12.5 punti="1,2;2,3;3,4;4,5;10,4" segmenti="10,4,10,11" legenda="y=1+x;\hat y=2{,}96+0{,}16x" titolo="Il punto $(10,4)$ ha leva $0{,}92$. La retta iniziale dista $7$ dal punto, quella ricalcolata, tratteggiata, solo $0{,}56$."}
:::

:::osservazione
La somma delle leve vale $2$. Infatti i termini costanti $\dfrac1n$ sono $n$ e sommano a $1$, mentre i numeratori $(x_i-\bar x)^2$ sommano a $S_{xx}$, quindi i secondi addendi sommano a $\dfrac{S_{xx}}{S_{xx}}=1$. Nei cinque dati $0{,}6+0{,}3+0{,}2+0{,}3+0{,}6=2$. Il valore medio delle leve è quindi $\dfrac2n$.

La proprietà $\Delta\hat y_i=h_i\Delta$ segue dalla forma $\hat y_i=\bar y+b(x_i-\bar x)$. Una variazione $\Delta$ di $y_i$ aumenta $\bar y$ di $\dfrac{\Delta}{n}$ e aumenta $S_{xy}$ di $(x_i-\bar x)\Delta$, quindi modifica $b$ di $\dfrac{(x_i-\bar x)\Delta}{S_{xx}}$. La variazione complessiva di $\hat y_i$ è perciò
$$
\frac{\Delta}{n}+\frac{(x_i-\bar x)\Delta}{S_{xx}}(x_i-\bar x)=h_i\Delta.
$$
:::

:::attenzione
Un valore elevato di $R^2$ dice che la retta è vicina ai dati osservati, e non dice nulla sulla relazione fuori dalle ascisse osservate. L'estrapolazione richiede in più che la forma lineare resti valida fuori dall'intervallo delle ascisse del campione. Per esempio, una retta $\hat y=500-6x$ che descrive bene la domanda giornaliera di un servizio per prezzi $x$ fra $10$ e $20$ euro, con valori fra $440$ e $380$, dà a $100$ euro la domanda $500-600=-100$, che è impossibile. Gli intervalli del teorema sulla risposta media misurano soltanto l'incertezza dovuta al campione, sotto l'ipotesi che il modello lineare valga anche all'ascissa nuova.

Anche l'interpretazione causale, cioè l'affermazione che cambiando $x$ cambia $y$, richiede informazioni ulteriori. Nei dati osservativi il valore di $x$ non viene fissato da chi raccoglie i dati, come lo spessore dei pezzi, ma si registra così come si presenta. Nei viaggi di un'azienda di trasporti, per esempio, la durata del viaggio e il consumo di carburante crescono insieme perché entrambi dipendono dalla distanza percorsa. La sola correlazione tra durata e consumo lascia aperto il ruolo di quella terza variabile.
:::

## Correlazione sui ranghi

:::definizione{#spearman titolo="Coefficiente di Spearman"}
Il **rango** di un valore è la sua posizione nell'ordinamento crescente dei valori della stessa variabile: per i valori $7$, $3$, $9$ i ranghi sono $2$, $1$, $3$. Quando più valori sono uguali, cioè a pari merito, a ciascuno si assegna la media delle posizioni che occupano: per $3$, $5$, $5$, $8$ i due valori $5$ occupano le posizioni $2$ e $3$ e ricevono entrambi il rango $\dfrac{2+3}{2}=2{,}5$.

Il **coefficiente di Spearman** $r_S$ è la correlazione di Pearson calcolata sui ranghi delle due variabili, mantenendo ciascuna coppia. Il coefficiente è definito quando entrambi gli insiemi di ranghi hanno varianza positiva, cioè quando né le ascisse né le ordinate sono tutte uguali. Vale $1$ quando le due variabili sono ordinate nello stesso modo, $-1$ quando l'ordine di una è l'inverso dell'ordine dell'altra. Il coefficiente misura quindi la concordanza fra i due ordinamenti, anche quando la relazione è curva: per $(1,1)$, $(2,4)$, $(3,9)$ la correlazione di Pearson vale circa $0{,}990$, mentre $r_S=1$. Poiché usa solo l'ordine, si applica anche ai dati ordinali del capitolo 1, come i giudizi insufficiente, adeguato, ottimo codificati con i ranghi $1$, $2$, $3$.
:::

:::esempio{titolo="Ranghi con un pari merito"}
Per $x=(10,20,20,40)$, i ranghi sono $(1;\,2{,}5;\,2{,}5;\,4)$ perché i due valori centrali si dividono il secondo e il terzo posto. Per $y=(8,4,6,2)$, i ranghi sono $(4,2,3,1)$. Le medie dei ranghi sono entrambe $2{,}5$. Gli scarti dei ranghi dalla media sono $(-1{,}5;\,0;\,0;\,1{,}5)$ per $x$ e $(1{,}5;\,-0{,}5;\,0{,}5;\,-1{,}5)$ per $y$. Le somme centrate dei quadrati valgono $2{,}25+0+0+2{,}25=4{,}5$ e $2{,}25+0{,}25+0{,}25+2{,}25=5$, e la somma dei prodotti centrati è $-2{,}25+0+0-2{,}25=-4{,}5$. Perciò
$$
r_S=\frac{-4{,}5}{\sqrt{4{,}5\cdot 5}}=-\sqrt{0{,}9}\approx-0{,}949.
$$
Il valore è vicino a $-1$ perché a ranghi di $x$ crescenti corrispondono per lo più ranghi di $y$ decrescenti.
:::

:::osservazione
Una trasformazione strettamente crescente, come il logaritmo di tempi positivi, conserva l'ordine e gli eventuali pari merito, quindi lascia uguali i ranghi e il coefficiente di Spearman. La correlazione di Pearson invece cambia, perché cambiano le distanze tra i valori. Per i tempi $1$, $10$, $100$ associati alle risposte $1$, $2$, $3$, la correlazione di Pearson vale circa $0{,}904$; con i logaritmi in base $10$ dei tempi, $0$, $1$, $2$, i punti stanno su una retta e vale $1$. Il coefficiente di Spearman vale $1$ in entrambi i casi. Una trasformazione strettamente decrescente applicata a una sola delle due variabili inverte le posizioni, quindi cambia il segno del coefficiente di Spearman.
:::
