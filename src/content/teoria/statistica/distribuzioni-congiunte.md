---
titolo: "Distribuzioni congiunte, covarianza e trasformazioni"
sommario: "La legge di una coppia permette di calcolare marginali, condizionate, covarianze e distribuzioni di somme, estremi e altre trasformazioni."
---

Nei capitoli 5 e 6 si è studiata una variabile aleatoria alla volta. Molte indagini rilevano però due grandezze sulla stessa unità: su un pezzo prodotto si eseguono due controlli, di uno studente si registrano le ore di studio e il voto. Si calcola, per esempio, la probabilità che un pezzo superi tutti e due i controlli, che nella prima sezione vale $0{,}40$, e si stabilisce se il primo esito cambia le probabilità del secondo. Nello stesso esempio la probabilità di superare il secondo controllo è $0{,}60$ e scende a $\dfrac47\approx0{,}571$ quando si sa che il primo è stato superato.

Il legame fra due variabili si riassume con la covarianza e con la correlazione, che vale $\pm1$ quando una variabile è funzione lineare dell'altra. Si ricava poi la legge di grandezze costruite dalla coppia: la somma $X+Y$, come il tempo totale di due fasi di lavoro, il massimo di più tempi, come l'istante in cui consegna l'ultimo di tre studenti, e nuove coordinate ottenute con una trasformazione. L'ultima sezione divide la varianza del numero di pezzi prodotti con due modalità in una parte interna a ciascuna modalità e in una parte dovuta alla differenza fra le medie.

Il capitolo chiude la parte sulla probabilità (capitoli 3-7) e usa l'indipendenza di eventi del capitolo 4. Nel capitolo 8 la media campionaria è la somma di $n$ variabili indipendenti divisa per $n$, e la sua varianza si calcola con la formula della varianza di una somma di questo capitolo. Nel capitolo 12 covarianza e correlazione si calcolano sui dati.

## Legge congiunta di una coppia

:::definizione{#congiunta titolo="Legge congiunta e funzione di ripartizione"}
Si lanciano due dadi; sia $X$ il risultato del primo e $Y$ quello del secondo. I $36$ esiti sono equiprobabili. L'evento «il primo dado dà al più $2$ e il secondo al più $3$» contiene $2\cdot3=6$ esiti, quindi ha probabilità $\dfrac{6}{36}=\dfrac16$.

L'assegnazione delle probabilità a tutti gli eventi che riguardano il punto $(X,Y)$ del piano si chiama **legge congiunta** di $X$ e $Y$. La **funzione di ripartizione congiunta** associa a ogni coppia di soglie $(x,y)$ la probabilità che $X$ sia al più $x$ e, insieme, $Y$ sia al più $y$:
$$
F_{X,Y}(x,y)=P(X\le x,\ Y\le y).
$$
Nell'esempio dei dadi $F_{X,Y}(2,3)=\dfrac16$. Per una sola variabile si ritrova la funzione di ripartizione $F_X(x)=P(X\le x)$ dei capitoli 5 e 6.

La legge della sola $X$ si chiama legge marginale di $X$, e $F_X$ si chiama ripartizione marginale. Al crescere di $y$, l'evento $\{X\le x,\ Y\le y\}$ comprende sempre più esiti e tende a $\{X\le x\}$. Perciò
$$
F_X(x)=\lim_{y\to+\infty}F_{X,Y}(x,y),\qquad
F_Y(y)=\lim_{x\to+\infty}F_{X,Y}(x,y).
$$
Dalla ripartizione congiunta si ricava la probabilità di ogni rettangolo. Per $a<b$ e $c<d$, la probabilità del rettangolo $(a,b]\times(c,d]$ è
$$
\begin{aligned}
P(a<X\le b,\ c<Y\le d)
&=F_{X,Y}(b,d)-F_{X,Y}(a,d)\\[6pt]
&\quad-F_{X,Y}(b,c)+F_{X,Y}(a,c).
\end{aligned}
$$
Il termine $F_{X,Y}(b,d)$ comprende tutti i punti con $X\le b$ e $Y\le d$. La prima sottrazione toglie la regione $\{X\le a,\ Y\le d\}$, a sinistra del rettangolo. La seconda toglie la regione $\{X\le b,\ Y\le c\}$, sotto il rettangolo. I punti con $X\le a$ e $Y\le c$ appartengono a entrambe le regioni e sono stati tolti due volte, quindi si aggiunge una volta $F_{X,Y}(a,c)$.

Con i dadi, per $a=2$, $b=4$, $c=1$, $d=3$ la formula dà $\dfrac{12-6-4+2}{36}=\dfrac19$, e infatti il rettangolo contiene i $4$ esiti con $X\in\{3,4\}$ e $Y\in\{2,3\}$.

::grafico{assi=0 xmin=-0.45 xmax=4.35 ymin=-0.65 ymax=4.8 poligoni="1,2 3,2 3,4 1,4" segmenti="1,0,1,4;3,0,3,4;0,2,3,2;0,4,3,4" unicolore=1 vettori="-0.12,0,4.2,0;0,-0.35,0,4.65" etichette="4.23,-0.27,x;0.06,4.65,y;0.95,-0.34,a;2.97,-0.34,b;-0.25,1.97,c;-0.25,3.97,d;1.25,3.53,R" titolo="Il rettangolo evidenziato R si ottiene dalle quattro soglie a, b, c, d della ripartizione congiunta."}
:::

:::definizione{#masse-congiunte titolo="Massa congiunta e masse marginali"}
Si lancia due volte una moneta equa; sia $X$ il numero di teste al primo lancio e $Y$ il numero di teste nei due lanci. I quattro esiti TT, TC, CT, CC (T testa, C croce) hanno probabilità $\dfrac14$ e danno le coppie $(1,2)$, $(1,1)$, $(0,1)$, $(0,0)$. Le probabilità si scrivono in una tabella con $X$ sulle righe e $Y$ sulle colonne.

| $X$ | $Y=0$ | $Y=1$ | $Y=2$ | Totale |
| ---: | ---: | ---: | ---: | ---: |
| $0$ | $\dfrac14$ | $\dfrac14$ | $0$ | $\dfrac12$ |
| $1$ | $0$ | $\dfrac14$ | $\dfrac14$ | $\dfrac12$ |
| Totale | $\dfrac14$ | $\dfrac12$ | $\dfrac14$ | $1$ |

Se $X$ e $Y$ sono discrete, la **massa congiunta** della coppia $(x,y)$ è
$$
p_{X,Y}(x,y)=P(X=x,\ Y=y).
$$
Nella tabella $p_{X,Y}(0,1)=\dfrac14$ e $p_{X,Y}(0,2)=0$. Le masse sono non negative e sommano a $1$; le coppie con massa positiva formano il supporto. La probabilità di una regione è la somma delle masse delle coppie che le appartengono, per esempio $P(Y>X)=p_{X,Y}(0,1)+p_{X,Y}(1,2)=\dfrac12$.

La probabilità $P(X=x)$ è la somma della riga di $x$, e $P(Y=y)$ è la somma della colonna di $y$. Queste leggi si chiamano **masse marginali**, perché nella tabella compaiono nei margini, come totali di riga e di colonna:
$$
p_X(x)=\sum_y p_{X,Y}(x,y),\qquad
p_Y(y)=\sum_x p_{X,Y}(x,y).
$$
Quando $X$ e $Y$ valgono soltanto $0$ o $1$, si scrive in breve $p_{ij}=P(X=i,\ Y=j)$. Per esempio $p_{10}=P(X=1,\ Y=0)$.
:::

:::esempio{titolo="Due controlli sulla stessa unità"}
Su un'unità si svolgono due controlli. Sia $X$ l'indicatore di esito positivo al primo controllo e sia $Y$ l'indicatore di esito positivo al secondo. Un indicatore vale $1$ quando l'evento si verifica e $0$ negli altri casi.

| $X$ | $Y=0$ | $Y=1$ | Totale |
| ---: | ---: | ---: | ---: |
| $0$ | $0{,}10$ | $0{,}20$ | $0{,}30$ |
| $1$ | $0{,}30$ | $0{,}40$ | $0{,}70$ |
| Totale | $0{,}40$ | $0{,}60$ | $1$ |

La probabilità di due esiti positivi è $p_{11}=0{,}40$, perché l'evento corrisponde a una sola cella. La probabilità di un esito positivo al primo controllo è $0{,}70$, perché si sommano le due celle della seconda riga. La probabilità di esattamente un esito positivo è $p_{01}+p_{10}=0{,}20+0{,}30=0{,}50$, perché si sommano le due celle in cui gli indicatori hanno valori diversi.
:::

## Densità congiunte e dominio di integrazione

:::definizione{#densita-congiunta titolo="Densità congiunta e densità marginali"}
Si sceglie un punto a caso nel quadrato $(0,1)\times(0,1)$, in modo che la probabilità di cadere in una regione del quadrato sia uguale all'area della regione. Siano $X$ e $Y$ le coordinate del punto. La probabilità che il punto cada sotto la retta $x+y=1$ è l'area del triangolo di vertici $(0,0)$, $(1,0)$, $(0,1)$, cioè $\dfrac12$. La stessa probabilità si scrive come integrale doppio della funzione che vale $1$ sul quadrato e $0$ fuori:
$$
P(X+Y<1)=\iint_{\{x+y<1\}}1\,dx\,dy=\frac12.
$$

Una coppia ha **densità congiunta** $f_{X,Y}$ se la probabilità di ogni regione $A$ del piano (un rettangolo, un triangolo, un disco) si ottiene integrando $f_{X,Y}$ su $A$:
$$
P((X,Y)\in A)=\iint_A f_{X,Y}(x,y)\,dx\,dy.
$$
Una densità congiunta è non negativa e ha integrale $1$ su tutto il piano. Poiché è nulla fuori dalla regione in cui cade $(X,Y)$, per una probabilità si integra sull'intersezione di $A$ con la regione in cui la densità è positiva. I punti di contatto sui bordi delle regioni, come un segmento o un vertice, hanno area nulla e danno contributo nullo all'integrale.

La densità della sola $X$ si chiama **densità marginale** di $X$. Si ottiene fissando $x$ e integrando la densità congiunta lungo la retta verticale per $x$; per la marginale di $Y$ si usano le rette orizzontali:
$$
\begin{aligned}
f_X(x)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dy,\\[6pt]
f_Y(y)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dx.
\end{aligned}
$$
Nel quadrato, per $0<x<1$ si ha $f_X(x)=\displaystyle\int_0^1 1\,dy=1$, quindi $X$ è uniforme su $(0,1)$.
:::

:::esempio{titolo="Sezioni di un supporto triangolare"}
La densità vale $2$ sul triangolo $0<y<x<1$ e zero altrove. Il triangolo ha area $\dfrac12$, quindi l'integrale della densità vale $2\cdot\dfrac12=1$. Per $0<x<1$, la sezione verticale del triangolo va da $y=0$ a $y=x$. Per $0<y<1$, la sezione orizzontale va da $x=y$ a $x=1$. Integrando sulle sezioni si ricavano due marginali diverse, entrambe nulle fuori da $(0,1)$:
$$
f_X(x)=\int_0^x 2\,dy=2x,\qquad
f_Y(y)=\int_y^1 2\,dx=2(1-y).
$$

::grafico{xmin=-0.13 xmax=1.24 ymin=-0.12 ymax=1.22 poligoni="0,0 1,0 1,1" linee="0,0 1,1 1,0" segmenti="0.55,0,0.55,0.55;0.32,0.32,1,0.32" etichette="0.73,0.16,D;0.31,0.6,y=x" titolo="Supporto triangolare D con una sezione verticale e una sezione orizzontale"}

Una probabilità che riguarda solo $Y$ si calcola con la marginale di $Y$. Per esempio
$$
P\left(Y>\frac12\right)=\int_{1/2}^1 2(1-y)\,dy=\Big[2y-y^2\Big]_{1/2}^1=1-\frac34=\frac14.
$$
Il valore è minore di $\dfrac12$ perché, al crescere di $y$, le sezioni orizzontali del triangolo si accorciano e la densità marginale diminuisce.

::grafico{xmin=-0.15 xmax=1.3 ymin=-0.18 ymax=2.3 nomi="y,f" linee="-0.12,0 0,0 0,2 1,0 1.2,0" poligoni="0.5,0 0.5,1 1,0" segmenti="0.5,0,0.5,1" titolo="Densità marginale $f_Y(y)=2(1-y)$ su $(0,1)$. L'area colorata è il triangolo di base $\dfrac{1}{2}$ e altezza $1$, che vale $P\left(Y>\dfrac{1}{2}\right)=\dfrac{1}{4}$."}
:::

:::attenzione{titolo="Due marginali con densità"}
Sia $X$ uniforme su $(0,1)$ e sia $Y=X$. Le due marginali sono uniformi su $(0,1)$. Il punto $(X,Y)$ cade con probabilità $1$ sulla diagonale $y=x$, che ha area nulla. Una densità congiunta darebbe a quella retta probabilità $0$, perché l'integrale su un insieme di area nulla vale zero. Perciò questa coppia ha entrambe le marginali con densità, ma non ha densità congiunta.
:::

## Condizionamento e indipendenza

:::definizione{#condizionamento titolo="Distribuzioni condizionate"}
Nella tabella dei due controlli si supponga di sapere che il primo controllo è positivo, cioè $X=1$. Restano possibili le due celle della riga $X=1$, con masse $0{,}30$ e $0{,}40$ e totale $0{,}70$. Dividendo per il totale si ottengono le probabilità $\dfrac37$ per $Y=0$ e $\dfrac47$ per $Y=1$. Il conto è la probabilità condizionata del capitolo 4, $P(B\mid A)=\dfrac{P(A\cap B)}{P(A)}$, applicata agli eventi $\{X=x\}$ e $\{Y=y\}$.

Con le lettere, quando $X$ è discreta e $p_X(x)>0$, la legge condizionata di $Y$ dato $X=x$ ha masse
$$
p_{Y\mid X}(y\mid x)=\frac{p_{X,Y}(x,y)}{p_X(x)}.
$$

Per una coppia con densità l'evento $\{X=x\}$ ha probabilità zero, come ogni singolo valore di una variabile con densità (capitolo 6), perciò non si può dividere per $P(X=x)$. Al suo posto si usa la densità marginale $f_X(x)$. Quando $0<f_X(x)<\infty$, la **densità condizionata** di $Y$ dato $X=x$ è
$$
f_{Y\mid X}(y\mid x)=\frac{f_{X,Y}(x,y)}{f_X(x)}.
$$
Il numeratore, come funzione di $y$, è la sezione verticale della densità congiunta in $x$, e $f_X(x)$ è l'integrale di quella sezione. Quindi il rapporto ha integrale $1$ ed è una densità in $y$.

L'**attesa condizionata** $E[Y\mid X=x]$ è la media di $Y$ calcolata con la legge condizionata di $Y$ dato $X=x$:
$$
E[Y\mid X=x]=\sum_y y\,p_{Y\mid X}(y\mid x)
\quad\text{oppure}\quad
E[Y\mid X=x]=\int_{\mathbb R} y\,f_{Y\mid X}(y\mid x)\,dy.
$$
La **varianza condizionata** $\operatorname{Var}(Y\mid X=x)$ è la varianza della stessa legge, cioè $E[Y^2\mid X=x]-E[Y\mid X=x]^2$, dove $E[Y^2\mid X=x]$ è la media di $Y^2$ con quella legge. Nei due controlli, dato $X=1$, l'indicatore $Y$ vale $1$ con probabilità $\dfrac47$, quindi $E[Y\mid X=1]=\dfrac47$ e $\operatorname{Var}(Y\mid X=1)=\dfrac47\cdot\dfrac37=\dfrac{12}{49}$. Dato $X=0$ si ha invece $E[Y\mid X=0]=\dfrac{0{,}20}{0{,}30}=\dfrac23$.

L'attesa condizionata dipende dal valore $x$. Sostituendo $x$ con la variabile $X$ si ottiene la variabile aleatoria $E[Y\mid X]$, che vale $E[Y\mid X=x]$ quando $X=x$. Nei due controlli $E[Y\mid X]$ vale $\dfrac23$ con probabilità $0{,}30$ e $\dfrac47$ con probabilità $0{,}70$. Allo stesso modo $\operatorname{Var}(Y\mid X)$ vale $\operatorname{Var}(Y\mid X=x)$ quando $X=x$.
:::

:::esempio{titolo="Normalizzazione di una sezione"}
Se la densità vale $2$ per $0<y<x<1$, allora $f_X(x)=2x$ per $0<x<1$. Fissato $X=x$, la densità condizionata vale $\dfrac{2}{2x}=\dfrac1x$ su $(0,x)$ e zero altrove. È costante su un intervallo di lunghezza $x$, quindi è la densità uniforme su $(0,x)$. In particolare $P\left(Y\le\dfrac{x}{2}\ \middle|\ X=x\right)=\dfrac1x\cdot\dfrac x2=\dfrac12$.

Per $x=\dfrac12$ la densità condizionata vale $2$ su $\left(0,\dfrac12\right)$, per $x=1$ vale $1$ su $(0,1)$. In entrambi i casi il rettangolo sotto il grafico ha area $1$.

::grafico{xmin=-0.12 xmax=1.3 ymin=-0.18 ymax=2.4 nomi="y,f" linee="-0.1,0 0,0 0,2 0.5,2 0.5,0 1.2,0;0,1 1,1 1,0" poligoni="0,0 0.25,0 0.25,2 0,2" segmenti="0.25,0,0.25,2" etichette="0.55,2.1,X = 0,5;1.04,1.12,X = 1" titolo="Densità condizionate di $Y$ dato $X=\dfrac{1}{2}$ e dato $X=1$. L'area colorata vale $P\left(Y\le\dfrac{1}{4}\ \middle|\ X=\dfrac{1}{2}\right)=\dfrac{1}{2}$."}

La media della legge uniforme su $(0,x)$ è il punto medio $\dfrac x2$ e la sua varianza è $\dfrac{x^2}{12}$ (capitolo 6). Perciò $E[Y\mid X=x]=\dfrac x2$, $\operatorname{Var}(Y\mid X=x)=\dfrac{x^2}{12}$ ed $E[Y\mid X]=\dfrac X2$.
:::

::::teorema{#indipendenza-congiunta titolo="Fattorizzazione e indipendenza"}
Con due dadi lanciati separatamente, $P(X\le2,\ Y\ge5)=\dfrac{2\cdot2}{36}=\dfrac19$, e lo stesso numero si ottiene come prodotto $P(X\le2)\,P(Y\ge5)=\dfrac13\cdot\dfrac13=\dfrac19$. Nel capitolo 4 due eventi $A$ e $B$ si sono detti indipendenti se $P(A\cap B)=P(A)P(B)$; per due variabili si chiede questa uguaglianza per tutti gli eventi costruiti con $X$ e con $Y$.

Le variabili $X$ e $Y$ sono **indipendenti** se
$$
P(X\in A,\ Y\in B)=P(X\in A)\,P(Y\in B)
$$
per tutti gli insiemi di numeri reali $A$ e $B$ (intervalli, unioni di intervalli, singoli punti).

- Se la coppia è discreta, l'indipendenza equivale a $p_{X,Y}(x,y)=p_X(x)\,p_Y(y)$ per ogni coppia $(x,y)$.
- Se la coppia ha densità congiunta, l'indipendenza equivale a $f_{X,Y}(x,y)=f_X(x)\,f_Y(y)$ quasi ovunque nel piano.

«Quasi ovunque» significa in tutti i punti tranne al più quelli di un insieme di area nulla, come una retta. Cambiare una densità su un insieme di area nulla non cambia nessuna probabilità, perché l'integrale su quell'insieme vale zero.

:::dimostrazione
Caso discreto. Se $X$ e $Y$ sono indipendenti, l'uguaglianza applicata agli insiemi $A=\{x\}$ e $B=\{y\}$ dà $p_{X,Y}(x,y)=p_X(x)p_Y(y)$. Viceversa, se le masse si fattorizzano, la somma delle masse su $A\times B$ si separa in due somme:
$$
P(X\in A,\ Y\in B)=\sum_{x\in A}\sum_{y\in B}p_X(x)p_Y(y)
=\sum_{x\in A}p_X(x)\sum_{y\in B}p_Y(y)=P(X\in A)\,P(Y\in B).
$$

Caso con densità. Se $f_{X,Y}=f_Xf_Y$, lo stesso conto con gli integrali al posto delle somme dà
$$
P(X\in A,\ Y\in B)=\int_A f_X(x)\,dx\int_B f_Y(y)\,dy=P(X\in A)\,P(Y\in B).
$$
Viceversa, se $X$ e $Y$ sono indipendenti, per ogni coppia di soglie si ha
$$
F_{X,Y}(x,y)=F_X(x)F_Y(y)=\int_{-\infty}^x\!\!\int_{-\infty}^y f_X(s)f_Y(t)\,dt\,ds.
$$
Quindi $f_Xf_Y$ e $f_{X,Y}$ danno la stessa ripartizione congiunta e, per la formula del rettangolo, la stessa probabilità a ogni rettangolo. Ogni regione del piano si approssima con unioni di rettangoli, perciò le due funzioni danno la stessa probabilità a ogni regione e differiscono al più su un insieme di area nulla.
:::
::::

:::attenzione{titolo="Fattori e forma del supporto"}
Se la densità congiunta è positiva su una regione che non è un rettangolo con i lati paralleli agli assi, $X$ e $Y$ sono dipendenti. Infatti, se le due marginali sono positive su due intervalli, il prodotto $f_X(x)f_Y(y)$ è positivo in tutti i punti con $f_X(x)>0$ e $f_Y(y)>0$, che formano un rettangolo; questo rettangolo contiene punti fuori dalla regione, dove la congiunta vale zero.

Con la densità $2$ sul triangolo $0<y<x<1$, le marginali sono $f_X(x)=2x$ e $f_Y(y)=2(1-y)$, entrambe positive su $(0,1)$. Nel punto $\left(\dfrac14,\dfrac34\right)$ il loro prodotto vale $2\cdot\dfrac14\cdot2\left(1-\dfrac34\right)=\dfrac12\cdot\dfrac12=\dfrac14$, mentre la congiunta vale zero, perché il punto ha $y>x$. Lo stesso accade in tutto il triangolo $0<x<y<1$, di area $\dfrac12$, quindi $X$ e $Y$ sono dipendenti.

::grafico{xmin=-0.12 xmax=1.25 ymin=-0.12 ymax=1.2 uguale=1 poligoni="0,0 1,0 1,1" linee="0,1 1,1 1,0" segmenti="0,0,1,1" punti="0.25,0.75,pieno,P" etichette="0.68,0.2,f = 2;0.12,0.9,f = 0" titolo="La congiunta è positiva solo nel triangolo colorato, il prodotto delle marginali su tutto il quadrato $(0,1)^2$. Nel punto $P=\left(\dfrac{1}{4},\dfrac{3}{4}\right)$ i due valori differiscono."}
:::

:::osservazione
Per variabili discrete con un numero finito di valori, l'indipendenza si controlla anche confrontando le leggi condizionate con la marginale. Nella tabella dei due controlli la probabilità di esito positivo al secondo controllo, sapendo che il primo è positivo, vale $\dfrac{0{,}40}{0{,}70}=\dfrac47\approx0{,}571$. La probabilità marginale di esito positivo al secondo controllo vale $0{,}60$. Poiché i due valori differiscono, le variabili sono dipendenti.

In una tabella di due indicatori, la cella $p_{11}$ e le due marginali determinano le altre tre celle:
$$
p_{10}=p_X(1)-p_{11},\qquad
p_{01}=p_Y(1)-p_{11},\qquad
p_{00}=1-p_X(1)-p_Y(1)+p_{11}.
$$
Se $p_{11}=p_X(1)\,p_Y(1)$, la prima formula dà $p_{10}=p_X(1)\big(1-p_Y(1)\big)=p_X(1)\,p_Y(0)$, e le altre due si fattorizzano allo stesso modo. Perciò, per due indicatori, basta controllare la sola cella $p_{11}$.
:::

## Attese di funzioni e covarianza

:::definizione{#attesa-congiunta titolo="Attesa di una funzione della coppia"}
Nella tabella dei due controlli il numero di esiti positivi è $X+Y$. Il suo valore atteso è la somma dei valori di $x+y$ nelle quattro celle, moltiplicati per le masse delle celle:
$$
E[X+Y]=0\cdot0{,}10+1\cdot0{,}20+1\cdot0{,}30+2\cdot0{,}40=1{,}30.
$$

Sia $g(x,y)$ una funzione di due variabili. Il **valore atteso** di $g(X,Y)$ è la media dei valori di $g$ pesata con la massa o con la densità della coppia:
$$
\begin{aligned}
E[g(X,Y)]
&=\sum_{x,y}g(x,y)p_{X,Y}(x,y)
&&\text{nel caso discreto},\\[6pt]
E[g(X,Y)]
&=\iint_{\mathbb R^2}g(x,y)f_{X,Y}(x,y)\,dx\,dy
&&\text{nel caso con densità}.
\end{aligned}
$$
Le formule si usano quando $g(X,Y)$ è integrabile, cioè quando la stessa somma o lo stesso integrale con $|g|$ al posto di $g$ è finito.

Se $g$ dipende da una sola coordinata basta la marginale; per $g(x,y)=xy$ serve la legge congiunta.

Se $X$ e $Y$ sono indipendenti, la massa congiunta è il prodotto delle marginali e la somma si separa:
$$
E[XY]=\sum_{x,y}xy\,p_X(x)p_Y(y)=\sum_x x\,p_X(x)\sum_y y\,p_Y(y)=E[X]\,E[Y].
$$
Con le densità vale lo stesso conto con gli integrali.
:::

:::definizione{#covarianza titolo="Covarianza e trasformazioni affini"}
Una coppia assume i valori $(1,2)$ e $(3,6)$, ciascuno con probabilità $\dfrac12$, quindi ha medie $\mu_X=2$ e $\mu_Y=4$ ($\mu$ si legge mu). Gli scarti dalle medie sono $-1$ e $-2$ nel primo esito, $1$ e $2$ nel secondo. In entrambi gli esiti le due variabili stanno dalla stessa parte delle rispettive medie, perciò il prodotto degli scarti è positivo e vale $2$, e anche la sua media vale $2$.

Siano $X$ e $Y$ con secondi momenti finiti, cioè con $E[X^2]$ ed $E[Y^2]$ finiti, e siano $\mu_X=E[X]$ e $\mu_Y=E[Y]$. La **covarianza** di $X$ e $Y$ è il valore atteso del prodotto degli scarti dalle rispettive medie:
$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=E[(X-\mu_X)(Y-\mu_Y)]\\[6pt]
&=E[XY]-\mu_X\mu_Y.
\end{aligned}
$$
La seconda forma si ricava sviluppando il prodotto,
$$
(X-\mu_X)(Y-\mu_Y)=XY-\mu_YX-\mu_XY+\mu_X\mu_Y.
$$
Per la linearità dell'attesa, il secondo e il terzo termine hanno attesa $-\mu_Y\mu_X$ e $-\mu_X\mu_Y$, e l'ultimo, che è costante, ha attesa $\mu_X\mu_Y$. Resta quindi $E[XY]-\mu_X\mu_Y$. Nell'esempio $E[XY]=\dfrac{1\cdot2+3\cdot6}{2}=10$ e $10-2\cdot4=2$.

La covarianza è positiva quando nella media pesata prevalgono i prodotti positivi, cioè gli esiti in cui i due scarti hanno lo stesso segno, e negativa quando prevalgono quelli con segni opposti. La sua unità è il prodotto delle unità di $X$ e $Y$, per esempio metri per chilogrammi.

Dalla definizione seguono tre regole di calcolo.

- Se $Y=X$, i due scarti coincidono, perciò $\operatorname{Cov}(X,X)=E[(X-\mu_X)^2]=\operatorname{Var}(X)$.
- Sostituendo $X$ con $a+bX$, la media diventa $a+b\mu_X$ e lo scarto diventa $b(X-\mu_X)$; allo stesso modo lo scarto di $c+dY$ è $d(Y-\mu_Y)$. Quindi $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$.
- La covarianza è lineare in ciascuna variabile, perché lo scarto di una combinazione lineare è la stessa combinazione degli scarti. Per esempio $\operatorname{Cov}(X,X-2Y)=\operatorname{Cov}(X,X)-2\operatorname{Cov}(X,Y)=\operatorname{Var}(X)-2\operatorname{Cov}(X,Y)$.
:::

:::esempio{titolo="Covarianza di due indicatori"}
Per la tabella dei due controlli, $E[X]=0{,}70$ ed $E[Y]=0{,}60$. Il prodotto $XY$ vale $1$ soltanto se entrambi gli indicatori valgono $1$, quindi $E[XY]=p_{11}=0{,}40$ e
$$
\operatorname{Cov}(X,Y)=0{,}40-(0{,}70)(0{,}60)=-0{,}02.
$$
Il segno è negativo perché la probabilità di due esiti positivi, $0{,}40$, è un poco minore del valore $0{,}42$ che avrebbero due controlli indipendenti con le stesse marginali.
:::

:::esempio{titolo="Marginali uguali e covarianze diverse"}
Due indicatori hanno entrambi probabilità di successo $\dfrac12$, quindi $E[X]E[Y]=\dfrac14$ e $\operatorname{Cov}(X,Y)=p_{11}-\dfrac14$. Si confrontano tre leggi della coppia.

- Se i controlli sono indipendenti, $p_{11}=\dfrac12\cdot\dfrac12=\dfrac14$ e la covarianza è $0$.
- Se i due controlli danno sempre lo stesso esito, $p_{11}=P(X=1)=\dfrac12$ e la covarianza è $\dfrac12-\dfrac14=\dfrac14$.
- Se esattamente uno dei due controlli dà esito positivo, $p_{11}=0$ e la covarianza è $-\dfrac14$.

Le marginali sono identiche nei tre casi; cambia la legge della coppia, quindi cambiano $E[XY]$ e la covarianza.
:::

## Correlazione lineare e dipendenza

:::definizione{#correlazione titolo="Coefficiente di correlazione"}
Si misurano altezza $X$ e peso $Y$ delle stesse persone. Se l'altezza passa dai metri ai centimetri, per la regola $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$ la covarianza è moltiplicata per $100$. Dividendo per le deviazioni standard, che cambiano con lo stesso fattore, si ottiene un numero che non dipende dalle unità.

Siano $X$ e $Y$ con secondi momenti finiti e varianze positive, e siano $\sigma_X$ e $\sigma_Y$ le loro deviazioni standard ($\sigma$ si legge sigma; la deviazione standard è la radice quadrata della varianza, capitolo 5). Il **coefficiente di correlazione** è
$$
\rho=\operatorname{Corr}(X,Y)
=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y},
$$
dove $\rho$ si legge rho. Il denominatore è positivo, quindi $\rho$ ha il segno della covarianza.

Un indicatore con probabilità di successo $p$ ha varianza $p(1-p)$ (capitolo 5), quindi nei due controlli $\sigma_X=\sqrt{0{,}21}$ e $\sigma_Y=\sqrt{0{,}24}$. Perciò
$$
\rho=\frac{-0{,}02}{\sqrt{0{,}21\cdot0{,}24}}\approx-0{,}089.
$$
Poiché $\rho$ è sempre compreso fra $-1$ e $1$ (teorema seguente), un valore così vicino a zero indica un legame lineare molto debole.
:::

::::teorema{#limiti-correlazione titolo="Valori estremi della correlazione"}
Se $Y=3-2X$, ogni scarto di $Y$ è $-2$ volte lo scarto di $X$, quindi $\operatorname{Cov}(X,Y)=-2\operatorname{Var}(X)$, $\sigma_Y=2\sigma_X$ e $\rho=\dfrac{-2\sigma_X^2}{\sigma_X\cdot2\sigma_X}=-1$.

Valgano le ipotesi della definizione. Allora $|\rho|\le1$. Inoltre $|\rho|=1$ se e solo se $Y=a+bX$ quasi certamente, per qualche $a$ reale e $b\neq0$. In questo caso $\rho$ ha il segno di $b$.

«Quasi certamente» significa «con probabilità $1$».

:::dimostrazione
Si usano le variabili standardizzate $U=\dfrac{X-\mu_X}{\sigma_X}$ e $V=\dfrac{Y-\mu_Y}{\sigma_Y}$. Entrambe hanno media $0$ e $E[U^2]=E[V^2]=1$, perché $E[(X-\mu_X)^2]=\sigma_X^2$. Inoltre $E[UV]=\dfrac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}=\rho$. Sviluppando il quadrato e usando la linearità dell'attesa si ottiene
$$
E[(V-\rho U)^2]=E[V^2]-2\rho E[UV]+\rho^2E[U^2]=1-2\rho^2+\rho^2=1-\rho^2.
$$
Il membro sinistro è l'attesa di un quadrato, quindi è non negativo. Perciò $1-\rho^2\ge0$, cioè $|\rho|\le1$.

Se $|\rho|=1$, si ha $E[(V-\rho U)^2]=0$. Una variabile non negativa con media zero vale zero con probabilità $1$, quindi $V=\rho U$ quasi certamente. Tornando a $X$ e $Y$,
$$
Y=\mu_Y+\rho\frac{\sigma_Y}{\sigma_X}(X-\mu_X),
$$
che è della forma $a+bX$ con $b=\rho\dfrac{\sigma_Y}{\sigma_X}$. Poiché $\dfrac{\sigma_Y}{\sigma_X}>0$, $b$ ha il segno di $\rho$.

Viceversa, se $Y=a+bX$ con $b\neq0$, le regole della covarianza danno $\operatorname{Cov}(X,Y)=b\operatorname{Var}(X)=b\,\sigma_X^2$ e $\sigma_Y=|b|\,\sigma_X$. Quindi $\rho=\dfrac{b\,\sigma_X^2}{\sigma_X\cdot|b|\,\sigma_X}=\dfrac{b}{|b|}$, che vale $1$ se $b>0$ e $-1$ se $b<0$.
:::
::::

:::attenzione{titolo="Correlazione nulla con dipendenza"}
Se $X$ e $Y$ sono indipendenti, $E[XY]=E[X]E[Y]$ (definizione dell'attesa di una funzione della coppia), quindi la covarianza è zero. L'implicazione inversa è falsa, come mostra il caso seguente.

Sia $X$ uniforme su $\{-1,0,1\}$ e sia $Y=X^2$. I valori di $X$ sono simmetrici rispetto a $0$, quindi $E[X]=0$ ed $E[X^3]=\dfrac{-1+0+1}{3}=0$. Inoltre $E[X^2]=\dfrac23$. Poiché $XY=X^3$, si ha
$$
\operatorname{Cov}(X,Y)=E[X^3]-E[X]\,E[X^2]=0-0\cdot\frac23=0.
$$
Tuttavia $Y$ è una funzione di $X$. Per esempio $P(Y=0\mid X=0)=1$, mentre $P(Y=0)=\dfrac13$. Le variabili sono quindi dipendenti. Gli scarti di $X$ sono $-1$, $0$, $1$ e quelli di $Y$ sono $\dfrac13$, $-\dfrac23$, $\dfrac13$; i prodotti $-\dfrac13$, $0$, $\dfrac13$ si compensano, perché i tre punti stanno su una parabola simmetrica rispetto all'asse $y$.

La retta di regressione di $Y$ su $X$ è la retta $y=a+bx$ che rende minimo $E[(Y-a-bX)^2]$; la sua pendenza è $b=\dfrac{\operatorname{Cov}(X,Y)}{\operatorname{Var}(X)}$ (capitolo 12). Qui $b=0$, quindi la retta è orizzontale, $y=E[Y]=\dfrac23$, sebbene $Y$ sia una funzione di $X$.

::grafico{f="x^2;2/3" xmin=-1.7 xmax=1.7 ymin=-0.45 ymax=1.75 uguale=1 legenda="y=x^2;y=\dfrac{2}{3}" punti="-1,1,pieno;0,0,pieno;1,1,pieno" titolo="I tre valori equiprobabili della coppia $(X,X^2)$ stanno sulla parabola. La retta di regressione è orizzontale perché la covarianza è zero."}
:::

:::osservazione
Per le coppie normali la covarianza zero basta per l'indipendenza. Una coppia ha legge normale congiunta, con medie $\mu_X$, $\mu_Y$, deviazioni standard $\sigma_X$, $\sigma_Y$ e correlazione $\rho$ con $|\rho|<1$, se ha densità
$$
f_{X,Y}(x,y)=\frac{1}{2\pi\sigma_X\sigma_Y\sqrt{1-\rho^2}}
\exp\left(-\frac{z_x^2-2\rho z_xz_y+z_y^2}{2(1-\rho^2)}\right),
$$
dove $z_x=\dfrac{x-\mu_X}{\sigma_X}$ e $z_y=\dfrac{y-\mu_Y}{\sigma_Y}$. Le marginali sono le normali $N(\mu_X,\sigma_X^2)$ e $N(\mu_Y,\sigma_Y^2)$ del capitolo 6. Con covarianza zero si ha $\rho=0$ e la densità diventa
$$
f_{X,Y}(x,y)=\frac{1}{\sigma_X\sqrt{2\pi}}e^{-\frac{z_x^2}{2}}\cdot\frac{1}{\sigma_Y\sqrt{2\pi}}e^{-\frac{z_y^2}{2}},
$$
cioè il prodotto delle due densità marginali. Per il teorema di fattorizzazione $X$ e $Y$ sono indipendenti. La conclusione richiede che la densità congiunta abbia questa forma, e non solo le marginali.
:::

## Combinazioni lineari e convoluzione

::::teorema{#somme titolo="Attesa e varianza di una combinazione lineare"}
Nei due controlli $\operatorname{Var}(X)=0{,}21$, $\operatorname{Var}(Y)=0{,}24$ e $\operatorname{Cov}(X,Y)=-0{,}02$. La somma $X+Y$ vale $0$, $1$, $2$ con probabilità $0{,}10$, $0{,}50$, $0{,}40$, quindi ha media $1{,}30$ e varianza $0{,}50+4\cdot0{,}40-1{,}30^2=0{,}41$, mentre la somma delle due varianze è $0{,}45$. La differenza $0{,}04$ è il doppio della covarianza cambiato di segno.

Per variabili con secondi momenti finiti e coefficienti reali $a$, $b$ si ha
$$
\begin{aligned}
E[aX+bY]&=aE[X]+bE[Y],\\[6pt]
\operatorname{Var}(aX+bY)
&=a^2\sigma_X^2+b^2\sigma_Y^2\\[6pt]
&\quad+2ab\operatorname{Cov}(X,Y).
\end{aligned}
$$

Due variabili con covarianza zero si dicono **incorrelate**; per esse il termine di covarianza è nullo e la varianza della combinazione è $a^2\sigma_X^2+b^2\sigma_Y^2$. Due variabili indipendenti sono incorrelate.

Con $a=1$ e $b=-1$ la formula dà $\operatorname{Var}(X-Y)=\sigma_X^2+\sigma_Y^2-2\operatorname{Cov}(X,Y)$. Se la covarianza è positiva, la varianza della differenza è minore della somma delle varianze.

:::dimostrazione
La prima identità è la linearità dell'attesa. Per la seconda, lo scarto della combinazione dalla sua media è
$$
aX+bY-(a\mu_X+b\mu_Y)=a(X-\mu_X)+b(Y-\mu_Y).
$$
Elevando al quadrato si ottiene
$$
a^2(X-\mu_X)^2+b^2(Y-\mu_Y)^2+2ab(X-\mu_X)(Y-\mu_Y).
$$
Prendendo l'attesa termine per termine, i primi due addendi danno $a^2\sigma_X^2$ e $b^2\sigma_Y^2$ e il terzo dà $2ab\operatorname{Cov}(X,Y)$, per la definizione di covarianza.
:::
::::

:::teorema{#convoluzione titolo="Legge della somma di variabili indipendenti"}
Si lanciano due dadi e sia $S=X+Y$ la somma dei risultati. Si ha $S=4$ quando il primo dado dà $x$ e il secondo $4-x$, con $x=1,2,3$. Per l'indipendenza ogni coppia ha probabilità $\dfrac16\cdot\dfrac16$, quindi
$$
P(S=4)=\sum_{x=1}^{3}p_X(x)\,p_Y(4-x)=3\cdot\frac{1}{36}=\frac{1}{12}.
$$

Siano $X$ e $Y$ indipendenti e sia $S=X+Y$. Per variabili discrete vale
$$
p_S(s)=\sum_x p_X(x)p_Y(s-x).
$$
Per variabili con densità vale
$$
f_S(s)=\int_{\mathbb R}f_X(x)f_Y(s-x)\,dx.
$$
L'integrale si chiama **convoluzione** delle densità $f_X$ e $f_Y$.

Nel caso discreto la somma considera le coppie $(x,s-x)$, cioè quelle con somma $s$, ciascuna con massa $p_X(x)p_Y(s-x)$ per l'indipendenza. Nel caso con densità la densità congiunta è $f_X(x)f_Y(y)$ e l'evento $\{S\le s\}$ è la regione $y\le s-x$, quindi
$$
F_S(s)=\int_{\mathbb R}f_X(x)\left(\int_{-\infty}^{s-x}f_Y(y)\,dy\right)dx=\int_{\mathbb R}f_X(x)F_Y(s-x)\,dx.
$$
Derivando rispetto a $s$ sotto il segno di integrale, $F_Y(s-x)$ diventa $f_Y(s-x)$ e si ottiene la formula. Alla stessa formula si arriva con il teorema sul cambio di variabili, più avanti, applicato a $(x,y)\mapsto(x,x+y)$, la cui inversa ha determinante jacobiano $1$, integrando poi rispetto a $x$ la densità di $(X,S)$.
:::

:::esempio{titolo="Somma di due uniformi"}
Siano $X$ e $Y$ uniformi indipendenti su $(0,1)$. Il prodotto $f_X(x)f_Y(s-x)$ vale $1$ se $0<x<1$ e $0<s-x<1$, cioè se $x$ appartiene a $(0,1)\cap(s-1,s)$, e vale $0$ altrimenti. L'integrale di convoluzione è perciò la lunghezza di questa intersezione.

Per $0<s<1$ l'intersezione è $(0,s)$, di lunghezza $s$. Per $1\le s<2$ è $(s-1,1)$, di lunghezza $1-(s-1)=2-s$. Fuori da $(0,2)$ l'intersezione è vuota. Si ottiene

- $f_S(s)=s$ se $0<s<1$;
- $f_S(s)=2-s$ se $1\le s<2$;
- $f_S(s)=0$ fuori da $(0,2)$.

Il grafico è un triangolo formato da due tratti di area $\dfrac12$ ciascuno, quindi la densità ha integrale $1$.

::grafico{xmin=-0.3 xmax=2.32 ymin=-0.15 ymax=1.23 nomi="s,f_S(s)" poligoni="0,0 1,1 2,0" linee="-0.2,0 0,0 1,1 2,0 2.22,0" titolo="Densità della somma di due uniformi indipendenti su (0, 1)"}
:::

## Estremi e trasformazioni della coppia

:::teorema{#estremi titolo="Massimo e minimo di variabili indipendenti"}
Tre studenti consegnano un compito in tempi indipendenti, ciascuno uniforme su $(0,1)$ ore. L'aula si libera quando consegna l'ultimo, cioè al tempo $M$, il massimo dei tre tempi. L'aula è libera entro mezz'ora se tutti e tre hanno consegnato entro mezz'ora, quindi $P\left(M\le\dfrac12\right)=\left(\dfrac12\right)^3=\dfrac18$.

Siano $X_1,\ldots,X_n$ indipendenti, con funzioni di ripartizione $F_1,\ldots,F_n$. Si indicano con $M$ il massimo e con $m$ il minimo delle $n$ variabili. Per ogni soglia $t$ vale
$$
F_M(t)=\prod_{i=1}^n F_i(t),\qquad
P(m>t)=\prod_{i=1}^n(1-F_i(t)).
$$
Il massimo è al più $t$ quando tutte le variabili sono al più $t$, e il minimo supera $t$ quando tutte superano $t$. Poiché le variabili sono indipendenti, la probabilità che tutte soddisfino la condizione è il prodotto delle singole probabilità.

Se le variabili hanno la stessa ripartizione $F$, i prodotti diventano $F(t)^n$ e $(1-F(t))^n$. Per i tre tempi uniformi su $(0,1)$ si ha $F(t)=t$, quindi $F_M(t)=t^3$ e $P(m>t)=(1-t)^3$. In particolare $P\left(m>\dfrac12\right)=\left(1-\dfrac12\right)^3=\dfrac18$. Le due curve del grafico si incontrano nel punto $\left(\dfrac12,\dfrac18\right)$, perché in $t=\dfrac12$ si ha $1-t=t$.

::grafico{curve="t,t^3,0,1;t,(1-t)^3,0,1" xmin=-0.12 xmax=1.25 ymin=-0.12 ymax=1.18 nomi="t,p" legenda="F_M(t)=t^3;P(m>t)=(1-t)^3" punti="0.5,0.125,pieno" segmenti="0.5,0,0.5,0.125" titolo="Ripartizione del massimo e probabilità che il minimo superi $t$, per tre uniformi indipendenti su $(0,1)$."}
:::

:::teorema{#jacobiano-congiunto titolo="Cambio di variabili per una densità congiunta"}
Sia $(X,Y)$ uniforme sul quadrato $(0,1)\times(0,1)$ e siano $U=2X$, $V=Y$. La trasformazione raddoppia le ascisse, quindi raddoppia l'area di ogni regione, e $(U,V)$ è uniforme sul rettangolo $(0,2)\times(0,1)$ con densità $\dfrac12$.

Sia $(X,Y)$ con densità nulla fuori da una regione aperta $G$ (cioè senza i punti del suo bordo), e sia $T$ una trasformazione da $G$ alla sua immagine $T(G)$ con tre proprietà:

- è biunivoca, cioè ogni punto $(u,v)$ di $T(G)$ proviene da un solo punto $(x,y)$ di $G$;
- l'immagine $T(G)$ è una regione aperta;
- $T$ e la sua inversa $T^{-1}$ hanno derivate parziali continue (si dicono di classe $C^1$).

Posto $(U,V)=T(X,Y)$, per $(u,v)\in T(G)$ si ha
$$
f_{U,V}(u,v)=f_{X,Y}(T^{-1}(u,v))
\left|\det J_{T^{-1}}(u,v)\right|,
$$
e la densità vale zero fuori da $T(G)$.

Qui $J_{T^{-1}}(u,v)$ è la **matrice jacobiana** dell'inversa: se l'inversa è $x=x(u,v)$, $y=y(u,v)$, la matrice ha nella prima riga le derivate di $x$ rispetto a $u$ e a $v$, nella seconda quelle di $y$. Il suo determinante si chiama determinante jacobiano, e il suo valore assoluto è il fattore per cui si moltiplicano le aree piccole passando dal piano $(u,v)$ al piano $(x,y)$. Nell'esempio iniziale l'inversa è $x=\dfrac u2$, $y=v$, la sua matrice ha righe $\left(\dfrac12,0\right)$ e $(0,1)$, quindi il determinante vale $\dfrac12$ e $f_{U,V}=1\cdot\dfrac12=\dfrac12$.

Il determinante jacobiano dell'inversa è il reciproco di quello della trasformazione diretta. Per $u=3x+y$, $v=y$ la matrice diretta ha righe $(3,1)$ e $(0,1)$ e determinante $3$, quindi l'inversa ha determinante $\dfrac13$.
:::

:::esempio{titolo="Somma e differenza come nuove coordinate"}
Siano $X$ e $Y$ uniformi indipendenti su $(0,1)$, quindi con densità congiunta $1$ sul quadrato, e siano $U=X+Y$ e $V=X-Y$. Sommando e sottraendo le due equazioni si trova l'inversa $x=\dfrac{u+v}{2}$, $y=\dfrac{u-v}{2}$. La sua matrice jacobiana ha righe $\left(\dfrac12,\dfrac12\right)$ e $\left(\dfrac12,-\dfrac12\right)$, quindi il determinante vale $\dfrac12\cdot\left(-\dfrac12\right)-\dfrac12\cdot\dfrac12=-\dfrac12$. Le condizioni $0<x<1$ e $0<y<1$ diventano $0<u+v<2$ e $0<u-v<2$. Perciò la densità congiunta di $(U,V)$ vale $1\cdot\left|-\dfrac12\right|=\dfrac12$ nella regione in cui valgono entrambe le condizioni e zero altrove.

Per $0<u<1$, la sezione verticale della regione è $-u<v<u$, di lunghezza $2u$. Integrando rispetto a $v$ si ottiene la densità marginale di $U$, cioè $\dfrac12\cdot2u=u$. È lo stesso valore della densità della somma ricavato con la convoluzione.

::grafico{xmin=-0.18 xmax=2.35 ymin=-1.3 ymax=1.28 nomi="u,v" poligoni="0,0 1,1 2,0 1,-1" segmenti="0.6,-0.6,0.6,0.6" punti="0,0,vuoto;1,1,vuoto;2,0,vuoto;1,-1,vuoto" titolo="Regione di densità positiva di (U,V). A sinistra di u=1, la sezione tratteggiata va da −u a u."}
:::

:::osservazione
Alcune trasformazioni sono biunivoche soltanto dopo aver diviso la regione in parti. Sia $(X,Y)$ con densità nulla fuori da $(-1,1)^2$, e siano $U=X^2$ e $V=Y$. Un punto $(u,v)$ con $0<u<1$ proviene da due punti, $(\sqrt u,v)$ con $x>0$ e $(-\sqrt u,v)$ con $x<0$. Su ciascuna delle due parti la trasformazione è biunivoca, e il determinante jacobiano dell'inversa $x=\pm\sqrt u$, $y=v$ vale $\pm\dfrac{1}{2\sqrt u}$. Le due parti sono disgiunte, quindi i due contributi si sommano:
$$
f_{U,V}(u,v)=\frac{1}{2\sqrt u}\Big(f_{X,Y}(\sqrt u,v)+f_{X,Y}(-\sqrt u,v)\Big).
$$
La retta $x=0$ ha area nulla, perciò ha probabilità zero e si può trascurare.
:::

## Attesa e varianza totali

::::teorema{#totale titolo="Leggi dell'attesa e della varianza totali"}
Nei due controlli l'attesa condizionata $E[Y\mid X]$ vale $\dfrac23$ con probabilità $0{,}30$ e $\dfrac47$ con probabilità $0{,}70$. La sua media è
$$
0{,}30\cdot\frac23+0{,}70\cdot\frac47=0{,}20+0{,}40=0{,}60,
$$
che è proprio $E[Y]$. I valori di $X$ dividono le unità in gruppi, e $E[Y\mid X]$ è la media del gruppo a cui appartiene l'unità.

Sia $Y$ integrabile, cioè con $E[|Y|]$ finito. Allora
$$
E[Y]=E\big[E[Y\mid X]\big].
$$
Se inoltre $E[Y^2]$ è finito,
$$
\begin{aligned}
\operatorname{Var}(Y)
&=E[\operatorname{Var}(Y\mid X)]\\[6pt]
&\quad+\operatorname{Var}(E[Y\mid X]).
\end{aligned}
$$
Il primo termine è la media delle varianze interne ai gruppi. Il secondo è la varianza delle medie dei gruppi.

:::dimostrazione
Nel caso discreto, per la definizione di attesa condizionata,
$$
E\big[E[Y\mid X]\big]=\sum_x E[Y\mid X=x]\,p_X(x)
=\sum_x\sum_y y\,\frac{p_{X,Y}(x,y)}{p_X(x)}\,p_X(x)
=\sum_{x,y}y\,p_{X,Y}(x,y)=E[Y].
$$
Il denominatore $p_X(x)$ si semplifica con il peso $p_X(x)$. Per una coppia con densità il conto è lo stesso con gli integrali.

Per la varianza si parte dall'identità $\operatorname{Var}(Y\mid X)=E[Y^2\mid X]-E[Y\mid X]^2$. Prendendo l'attesa e applicando la prima legge a $Y^2$, si ottiene
$$
E[\operatorname{Var}(Y\mid X)]=E[Y^2]-E\big[E[Y\mid X]^2\big].
$$
La varianza della variabile $E[Y\mid X]$, che per la prima legge ha media $E[Y]$, è
$$
\operatorname{Var}(E[Y\mid X])=E\big[E[Y\mid X]^2\big]-E[Y]^2.
$$
Sommando le due uguaglianze il termine $E\big[E[Y\mid X]^2\big]$ si cancella e resta $E[Y^2]-E[Y]^2=\operatorname{Var}(Y)$.
:::
::::

:::esempio{titolo="Variabilità interna e differenze tra gruppi"}
Un impianto usa con uguale probabilità due modalità di produzione. Sia $X$ la modalità usata e sia $Y$ il numero di pezzi ottenuti. Nella prima modalità $Y$ ha media $10$ e varianza $4$, nella seconda media $14$ e varianza $8$.

- La media complessiva è $E[Y]=\dfrac12\cdot10+\dfrac12\cdot14=12$.
- La media delle varianze condizionate è $E[\operatorname{Var}(Y\mid X)]=\dfrac12\cdot4+\dfrac12\cdot8=6$.
- Le due medie condizionate distano entrambe $2$ dalla media complessiva, quindi $\operatorname{Var}(E[Y\mid X])=\dfrac12\cdot2^2+\dfrac12\cdot2^2=4$.

Per la legge della varianza totale si ottiene $\operatorname{Var}(Y)=6+4=10$. La parte $6$ viene dalla dispersione dei pezzi attorno alla media della propria modalità, la parte $4$ dalla distanza fra le medie $10$ e $14$.
:::
