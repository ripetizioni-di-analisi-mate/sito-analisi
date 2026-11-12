---
titolo: "Distribuzioni congiunte, covarianza e trasformazioni"
sommario: "La legge di una coppia permette di calcolare marginali, condizionate, covarianze e distribuzioni di somme, estremi e altre trasformazioni."
---

## Legge congiunta di una coppia

:::definizione{#congiunta titolo="Legge congiunta e funzione di ripartizione"}
La **legge congiunta** di due variabili aleatorie $X$ e $Y$ assegna una probabilità alle regioni in cui può cadere il punto $(X,Y)$. La **funzione di ripartizione congiunta** assegna a ogni coppia di soglie $(x,y)$ la probabilità di trovarsi a sinistra della prima soglia e sotto la seconda.
$$
F_{X,Y}(x,y)=P(X\le x,\ Y\le y).
$$
Le ripartizioni marginali si ottengono facendo tendere all'infinito la soglia relativa alla variabile che si vuole lasciare libera. Per esempio, $F_X(x)=\lim_{y\to+\infty}F_{X,Y}(x,y)$.

Per $a<b$ e $c<d$, la probabilità del rettangolo $(a,b]\times(c,d]$ è
$$
\begin{aligned}
P(a<X\le b,\ c<Y\le d)
&=F_{X,Y}(b,d)-F_{X,Y}(a,d)\\[6pt]
&\quad-F_{X,Y}(b,c)+F_{X,Y}(a,c).
\end{aligned}
$$
Le due sottrazioni eliminano le regioni $X\le a$ e $Y\le c$. La loro intersezione è stata sottratta due volte, quindi si aggiunge il valore $F_{X,Y}(a,c)$.

::grafico{assi=0 xmin=-0.45 xmax=4.35 ymin=-0.65 ymax=4.8 poligoni="1,2 3,2 3,4 1,4" segmenti="1,0,1,4;3,0,3,4;0,2,3,2;0,4,3,4" unicolore=1 vettori="-0.12,0,4.2,0;0,-0.35,0,4.65" etichette="4.23,-0.27,x;0.06,4.65,y;0.95,-0.34,a;2.97,-0.34,b;-0.25,1.97,c;-0.25,3.97,d;1.25,3.53,R" titolo="Il rettangolo evidenziato R si ottiene dalle quattro soglie a, b, c, d della ripartizione congiunta."}
:::

:::definizione{#masse-congiunte titolo="Massa congiunta e masse marginali"}
Se $X$ e $Y$ sono discrete, la **massa congiunta** della coppia $(x,y)$ è $p_{X,Y}(x,y)=P(X=x,Y=y)$. Tutte le masse sono non negative e la loro somma su tutte le coppie vale uno. Le coppie con massa positiva costituiscono il supporto discreto. Per ogni regione di interesse, la probabilità si ottiene sommando le masse delle coppie che appartengono alla regione.

Per trovare $P(X=x)$ si tiene fisso il valore di $X$ e si includono tutti i valori di $Y$. Il procedimento simmetrico dà la marginale di $Y$.
$$
p_X(x)=\sum_y p_{X,Y}(x,y),\qquad
p_Y(y)=\sum_x p_{X,Y}(x,y).
$$
In una tabella con $X$ sulle righe e $Y$ sulle colonne, i totali di riga danno $p_X$ e i totali di colonna danno $p_Y$.
:::

:::esempio{titolo="Due controlli sulla stessa unità"}
Su un'unità si svolgono due controlli. Sia $X$ l'indicatore di esito positivo al primo controllo e sia $Y$ l'indicatore di esito positivo al secondo. Un indicatore vale $1$ quando l'evento si verifica e $0$ negli altri casi.

| $X$ | $Y=0$ | $Y=1$ | Totale |
| ---: | ---: | ---: | ---: |
| $0$ | $0{,}10$ | $0{,}20$ | $0{,}30$ |
| $1$ | $0{,}30$ | $0{,}40$ | $0{,}70$ |
| Totale | $0{,}40$ | $0{,}60$ | $1$ |

La probabilità di due esiti positivi è $0{,}40$, perché l'evento corrisponde a una singola cella. La probabilità di un esito positivo al primo controllo è $0{,}70$, perché si sommano entrambe le celle della seconda riga. La probabilità di un solo esito positivo è $0{,}20+0{,}30=0{,}50$, perché si sommano le due celle in cui gli indicatori assumono valori diversi.
:::

## Densità congiunte e dominio di integrazione

:::definizione{#densita-congiunta titolo="Densità congiunta e densità marginali"}
Una coppia ha **densità congiunta** $f_{X,Y}$ se la probabilità di ogni regione misurabile $A$ si ottiene integrando $f_{X,Y}$ su $A$. Una densità è non negativa e il suo integrale su tutto il piano vale uno. La regione in cui è positiva individua i limiti utili per i calcoli.
$$
P((X,Y)\in A)=\iint_A f_{X,Y}(x,y)\,dx\,dy.
$$
Per ottenere la **densità marginale** di $X$ in $x$, si fissa $x$ e si integra lungo la retta verticale. Per la marginale di $Y$ si usano le rette orizzontali.
$$
\begin{aligned}
f_X(x)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dy,\\[6pt]
f_Y(y)&=\int_{\mathbb R}f_{X,Y}(x,y)\,dx.
\end{aligned}
$$
Nell'integrale per una probabilità si usa l'intersezione della regione richiesta con quella in cui la densità è positiva. Gli eventuali punti di contatto sui bordi delle regioni, che hanno area nulla, danno contributo nullo.
:::

:::esempio{titolo="Sezioni di un supporto triangolare"}
La densità vale $2$ sul triangolo $0<y<x<1$ e zero altrove. Il triangolo ha area $\dfrac12$, quindi l'integrale della densità vale uno. Per $0<x<1$, una sezione verticale va da $y=0$ a $y=x$. Per $0<y<1$, una sezione orizzontale va da $x=y$ a $x=1$. Si ricavano così due marginali diverse, entrambe nulle fuori da $(0,1)$.
$$
f_X(x)=\int_0^x 2\,dy=2x,\qquad
f_Y(y)=\int_y^1 2\,dx=2(1-y).
$$

::grafico{xmin=-0.13 xmax=1.24 ymin=-0.12 ymax=1.22 poligoni="0,0 1,0 1,1" linee="0,0 1,1 1,0" segmenti="0.55,0,0.55,0.55;0.32,0.32,1,0.32" etichette="0.73,0.16,D;0.31,0.6,y=x" titolo="Supporto triangolare D con una sezione verticale e una sezione orizzontale"}

Per esempio, per trovare $P(Y>\dfrac12)$ conviene partire dalle sezioni orizzontali. Si integra $2(1-y)$ fra $\dfrac12$ e $1$, ottenendo $\dfrac14$. Il valore è inferiore a $\dfrac12$ perché, al crescere di $y$, le sezioni disponibili si accorciano.
:::

:::attenzione{titolo="Due marginali con densità"}
Sia $X$ uniforme su $(0,1)$ e sia $Y=X$. Le due marginali sono uniformi. La coppia giace con probabilità uno sulla diagonale $y=x$, che ha area nulla. Una densità congiunta assegnerebbe probabilità zero a quella retta, quindi in questo esempio la coppia è priva di densità congiunta.
:::

## Condizionamento e indipendenza

:::definizione{#condizionamento titolo="Distribuzioni condizionate"}
Quando $X$ è discreta e $p_X(x)>0$, conoscere $X=x$ restringe l'attenzione alle coppie con quella prima coordinata. Le masse di tale riga sommano a $p_X(x)$, quindi si dividono per quel totale per ottenere una nuova legge.
$$
p_{Y\mid X}(y\mid x)=\frac{p_{X,Y}(x,y)}{p_X(x)}.
$$
Per una coppia con densità, quando $0<f_X(x)<\infty$, una **densità condizionata** è
$$
f_{Y\mid X}(y\mid x)=\frac{f_{X,Y}(x,y)}{f_X(x)}.
$$
La divisione normalizza la sezione verticale a integrale uno. Questa formula definisce una versione della legge condizionata per quasi ogni valore di $X$. Il denominatore è una densità marginale, poiché l'evento singolo $X=x$ ha probabilità zero nel caso continuo.
:::

:::esempio{titolo="Normalizzazione di una sezione"}
Se la densità vale $2$ per $0<y<x<1$, allora $f_X(x)=2x$ per $0<x<1$. A $X=x$ fissato, la densità condizionata vale $\dfrac1x$ su $(0,x)$. La lunghezza dell'intervallo è $x$, quindi si tratta di un'uniforme su $(0,x)$. In particolare, $P(Y\le\dfrac{x}{2}\mid X=x)=\dfrac12$. La soglia è a metà della sezione disponibile per quel valore di $x$.
:::

::::teorema{#indipendenza-congiunta titolo="Fattorizzazione e indipendenza"}
Le variabili $X$ e $Y$ sono indipendenti se $P(X\in A,Y\in B)=P(X\in A)P(Y\in B)$ per tutti gli insiemi misurabili $A$ e $B$. Se la coppia è discreta, ciò equivale a $p_{X,Y}(x,y)=p_X(x)p_Y(y)$ per ogni $(x,y)$. Se la coppia ha densità congiunta, equivale a $f_{X,Y}(x,y)=f_X(x)f_Y(y)$ quasi ovunque nel piano.

:::dimostrazione
Nel caso discreto, l'indipendenza applicata agli eventi $X=x$ e $Y=y$ dà il prodotto per ogni coppia. Viceversa, sommando le masse fattorizzate su $A\times B$, la somma in $x$ si separa da quella in $y$ e si ottiene il prodotto delle probabilità marginali.

Nel caso con densità, il prodotto $f_Xf_Y$ assegna a ogni rettangolo il prodotto delle probabilità marginali. Sotto l'ipotesi di indipendenza, la densità congiunta assegna ai rettangoli gli stessi valori. Le due leggi coincidono perché i rettangoli determinano la ripartizione congiunta. Ne segue che le densità coincidono quasi ovunque.
:::
::::

:::attenzione{titolo="Fattori e forma del supporto"}
Una densità costante sul triangolo $0<y<x<1$ appare come un prodotto di costanti all'interno della regione. Per esempio, però, vicino a $(\dfrac14,\dfrac34)$ le due marginali sono positive e la densità congiunta è zero. L'uguaglianza tra prodotto e congiunta deve valere anche fuori dalla regione in cui la congiunta è positiva.
:::

:::osservazione
Per variabili discrete con un numero finito di valori, si può controllare l'indipendenza confrontando tutte le leggi condizionate con la marginale. Per esempio, nella tabella dei due controlli la probabilità di un esito positivo al secondo, sapendo che il primo è positivo, vale $\dfrac{0{,}40}{0{,}70}=\dfrac47$. La probabilità marginale di un esito positivo al secondo vale $0{,}60$. Poiché i due valori differiscono, le variabili sono dipendenti.

In una tabella di due indicatori, la cella relativa a due successi e le due marginali determinano le altre tre celle. Per questo caso particolare, se la probabilità dei due successi è il prodotto delle marginali, anche le altre celle soddisfano la fattorizzazione.
:::

## Attese di funzioni e covarianza

:::definizione{#attesa-congiunta titolo="Attesa di una funzione della coppia"}
Se $g(X,Y)$ è integrabile, il suo **valore atteso** è la media dei valori di $g$ pesata con la legge della coppia. Nel caso discreto si somma il prodotto tra valore e massa. Nel caso continuo si integra il prodotto tra valore e densità.
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
Se $g$ dipende solo da una coordinata, si può usare la corrispondente marginale. Per $g(x,y)=xy$, in generale occorre la congiunta perché il prodotto dipende da entrambe le coordinate.
:::

:::definizione{#covarianza titolo="Covarianza e trasformazioni affini"}
Siano $X$ e $Y$ con secondi momenti finiti e indichiamo con $\mu_X=E[X]$ e $\mu_Y=E[Y]$ le loro medie. La **covarianza** è il valore atteso del prodotto degli scarti dalle rispettive medie.
$$
\begin{aligned}
\operatorname{Cov}(X,Y)
&=E[(X-\mu_X)(Y-\mu_Y)]\\[6pt]
&=E[XY]-\mu_X\mu_Y.
\end{aligned}
$$
Il prodotto degli scarti è positivo quando entrambi sono dello stesso segno. Se prevalgono questi contributi nella media pesata, la covarianza è positiva. La covarianza ha come unità il prodotto delle unità di $X$ e $Y$. Sostituendo $X$ con $a+bX$ lo scarto dalla propria media diventa $b(X-\mu_X)$. Si ottiene così $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$. La stessa definizione mostra che la covarianza è lineare in ciascuna variabile, perché lo scarto di una combinazione lineare è la combinazione degli scarti. Per esempio, $\operatorname{Cov}(X,X-2Y)=\operatorname{Var}(X)-2\operatorname{Cov}(X,Y)$.
:::

:::esempio{titolo="Covarianza di due indicatori"}
Per la tabella dei due controlli, $E[X]=0{,}70$ ed $E[Y]=0{,}60$. Il prodotto $XY$ vale uno soltanto se entrambi gli indicatori valgono uno. Si ha perciò $E[XY]=0{,}40$ e
$$
\operatorname{Cov}(X,Y)=0{,}40-(0{,}70)(0{,}60)=-0{,}02.
$$
Il segno negativo è coerente con il fatto che la probabilità di due esiti positivi è lievemente inferiore a quella che si avrebbe con le stesse marginali sotto indipendenza.
:::

:::esempio{titolo="Marginali uguali e covarianze diverse"}
Due indicatori hanno entrambi probabilità di successo $\dfrac12$. Se i controlli sono indipendenti, la massa della coppia $(1,1)$ è $\dfrac14$ e la covarianza è zero. Se entrambi i controlli danno sempre lo stesso esito, la massa in $(1,1)$ è $\dfrac12$ e la covarianza è $\dfrac14$. Se un solo controllo alla volta dà esito positivo, la massa in $(1,1)$ è zero e la covarianza è $-\dfrac14$. Le leggi marginali sono identiche nei tre casi. Cambiando la distribuzione della coppia, cambia la media di $XY$ e quindi cambia la covarianza.
:::

## Correlazione lineare e dipendenza

:::definizione{#correlazione titolo="Coefficiente di correlazione"}
Se $X$ e $Y$ hanno secondi momenti finiti e varianze positive, si indicano con $\sigma_X$ e $\sigma_Y$ le loro deviazioni standard. Il **coefficiente di correlazione** è
$$
\rho=\operatorname{Corr}(X,Y)
=\frac{\operatorname{Cov}(X,Y)}{\sigma_X\sigma_Y}.
$$
Il denominatore elimina le unità e conserva il segno della covarianza. Se si passa da una misura in metri a una misura in centimetri, la covarianza è moltiplicata per $100$ e lo stesso avviene alla deviazione standard di quella misura. La correlazione perciò resta invariata.
:::

::::teorema{#limiti-correlazione titolo="Valori estremi della correlazione"}
Valgano le ipotesi della definizione. Allora $|\rho|\le1$. Si ha $|\rho|=1$ esattamente quando $Y=a+bX$ quasi certamente per qualche $a$ reale e $b\neq0$. In questo caso $\rho$ ha il segno di $b$.

:::dimostrazione
Si usano le variabili centrate e standardizzate $U=\dfrac{X-\mu_X}{\sigma_X}$ e $V=\dfrac{Y-\mu_Y}{\sigma_Y}$. Entrambe hanno secondo momento uno e $E[UV]=\rho$. Pertanto
$$
E[(V-\rho U)^2]=1-2\rho^2+\rho^2=1-\rho^2.
$$
Poiché il membro sinistro è non negativo, si ottiene $|\rho|\le1$. L'uguaglianza si verifica quando il quadrato è nullo quasi certamente, cioè $V=\rho U$ quasi certamente. Tornando alle variabili iniziali si ottiene la relazione affine con pendenza $\rho\dfrac{\sigma_Y}{\sigma_X}$.
:::
::::

:::attenzione{titolo="Correlazione nulla con dipendenza"}
L'indipendenza implica $E[XY]=E[X]E[Y]$ quando esistono i secondi momenti e quindi implica covarianza zero. L'implicazione inversa è falsa. Se $X$ è uniforme su $\{-1,0,1\}$ e $Y=X^2$, allora $E[X]=E[X^3]=0$ per simmetria. La covarianza vale zero. Tuttavia $P(Y=0\mid X=0)=1$, mentre $P(Y=0)=\dfrac13$. Per una coppia normale congiunta, la covarianza zero è sufficiente per l'indipendenza. L'ipotesi riguarda la legge della coppia.
:::

## Combinazioni lineari e convoluzione

::::teorema{#somme titolo="Attesa e varianza di una combinazione lineare"}
Per variabili con secondi momenti finiti e coefficienti reali $a,b$, si ha
$$
\begin{aligned}
E[aX+bY]&=aE[X]+bE[Y],\\[6pt]
\operatorname{Var}(aX+bY)
&=a^2\sigma_X^2+b^2\sigma_Y^2\\[6pt]
&\quad+2ab\operatorname{Cov}(X,Y).
\end{aligned}
$$
Il termine di covarianza è nullo se le variabili sono indipendenti oppure incorrelate. In particolare, la varianza di una differenza di due misure con covarianza positiva è inferiore alla somma delle varianze individuali.

:::dimostrazione
Per la prima identità si applica la linearità dell'attesa. Lo scarto della combinazione dalla sua media è $a(X-\mu_X)+b(Y-\mu_Y)$. Si eleva al quadrato e si prende l'attesa. I quadrati degli scarti danno le due varianze, mentre il termine misto dà il doppio prodotto dei coefficienti per la covarianza.
:::
::::

:::teorema{#convoluzione titolo="Legge della somma di variabili indipendenti"}
Siano $X$ e $Y$ indipendenti e sia $S=X+Y$. Per variabili discrete vale
$$
p_S(s)=\sum_x p_X(x)p_Y(s-x).
$$
Per variabili con densità vale
$$
f_S(s)=\int_{\mathbb R}f_X(x)f_Y(s-x)\,dx.
$$
Nel caso discreto la somma considera tutte le coppie $(x,s-x)$ e assegna a ciascuna il prodotto delle masse. Nel caso continuo si usa il cambio $(x,y)\mapsto(x,x+y)$, il cui jacobiano inverso vale uno in valore assoluto. Integrando la densità congiunta di $(X,S)$ rispetto a $x$ si ottiene la formula.
:::

:::esempio{titolo="Somma di due uniformi"}
Siano $X$ e $Y$ uniformi indipendenti su $(0,1)$. Il prodotto delle due densità vale uno se $0<x<1$ e $0<s-x<1$. L'integrale è perciò la lunghezza dell'intersezione $(0,1)\cap(s-1,s)$.
- Se $0<s<1$, allora $f_S(s)=s$.
- Se $1\le s<2$, allora $f_S(s)=2-s$.
- Fuori da $(0,2)$ la densità è nulla.
Per $0<s<1$ l'intersezione è $(0,s)$. Per $1<s<2$ è $(s-1,1)$. I due tratti hanno area $\dfrac12$ ciascuno, quindi la densità ha integrale uno.

::grafico{xmin=-0.3 xmax=2.32 ymin=-0.15 ymax=1.23 nomi="s,f_S(s)" poligoni="0,0 1,1 2,0" linee="-0.2,0 0,0 1,1 2,0 2.22,0" titolo="Densità della somma di due uniformi indipendenti su (0, 1)"}
:::

## Estremi e trasformazioni della coppia

:::teorema{#estremi titolo="Massimo e minimo di variabili indipendenti"}
Siano $X_1,\ldots,X_n$ indipendenti, con funzioni di ripartizione $F_i$. Indichiamo con $M$ il massimo e con $m$ il minimo. Per ogni soglia $t$ vale
$$
F_M(t)=\prod_{i=1}^n F_i(t),\qquad
P(m>t)=\prod_{i=1}^n(1-F_i(t)).
$$
Il massimo è al più $t$ quando tutte le variabili sono al più $t$. Il minimo supera $t$ quando tutte superano $t$. L'indipendenza permette di moltiplicare. Se le variabili hanno la stessa ripartizione $F$, i prodotti diventano $F(t)^n$ e $(1-F(t))^n$. Per tre uniformi indipendenti su $(0,1)$, per esempio, $P(M\le\dfrac12)=\dfrac18$.
:::

:::teorema{#jacobiano-congiunto titolo="Cambio di variabili per una densità congiunta"}
Sia $(X,Y)$ una coppia con densità concentrata in una regione aperta $D$. Sia $T$ una trasformazione biunivoca di classe $C^1$ da $D$ alla sua immagine aperta, con inversa di classe $C^1$. Posto $(U,V)=T(X,Y)$, per $(u,v)\in T(D)$ si ha
$$
f_{U,V}(u,v)=f_{X,Y}(T^{-1}(u,v))
\left|\det D T^{-1}(u,v)\right|.
$$
La densità vale zero fuori da $T(D)$. Il simbolo $D T^{-1}$ indica la matrice delle derivate parziali dell'inversa. Il valore assoluto del determinante converte l'area nella nuova coppia di coordinate in area nel piano di partenza.
:::

:::esempio{titolo="Somma e differenza come nuove coordinate"}
Se $X,Y$ sono uniformi indipendenti su $(0,1)$, poniamo $U=X+Y$ e $V=X-Y$. L'inversa è $x=\dfrac{u+v}{2}$ e $y=\dfrac{u-v}{2}$. Il suo determinante vale $-\dfrac12$. Il quadrato di partenza è descritto da $0<u+v<2$ e $0<u-v<2$ nelle nuove coordinate. Perciò la densità congiunta vale $\dfrac12$ nella regione individuata da entrambe le condizioni e zero altrove.

Per $0<u<1$, la sezione verticale soddisfa $-u<v<u$. L'integrale rispetto a $v$ vale allora $\dfrac12\cdot 2u=u$. È lo stesso valore della densità della somma ricavato con la convoluzione.

::grafico{xmin=-0.18 xmax=2.35 ymin=-1.3 ymax=1.28 nomi="u,v" poligoni="0,0 1,1 2,0 1,-1" segmenti="0.6,-0.6,0.6,0.6" punti="0,0,vuoto;1,1,vuoto;2,0,vuoto;1,-1,vuoto" titolo="Regione di densità positiva di (U,V). A sinistra di u=1, la sezione tratteggiata va da −u a u."}
:::

:::osservazione
Alcuni cambi sono biunivoci soltanto dopo aver diviso il dominio in parti. Se $U=X^2$ e $V=Y$ con $(X,Y)$ concentrata su $(-1,1)^2$, una coppia $(u,v)$ con $0<u<1$ ha le due preimmagini $(\sqrt u,v)$ e $(-\sqrt u,v)$. Le parti $x>0$ e $x<0$ sono disgiunte, quindi ciascuna contribuisce con la propria densità trasformata e i due contributi si sommano. La linea $x=0$ ha probabilità zero per una coppia con densità.
:::

## Attesa e varianza totali

::::teorema{#totale titolo="Leggi dell'attesa e della varianza totali"}
Se $Y$ è integrabile, vale $E[Y]=E[E[Y\mid X]]$. L'attesa condizionata $E[Y\mid X]$ è una variabile aleatoria perché il valore della media condizionata dipende dal gruppo $X$. Se $E[Y^2]<\infty$, si ha anche
$$
\begin{aligned}
\operatorname{Var}(Y)
&=E[\operatorname{Var}(Y\mid X)]\\[6pt]
&\quad+\operatorname{Var}(E[Y\mid X]).
\end{aligned}
$$
Il primo termine è la media delle varianze interne ai gruppi. Il secondo misura quanto variano le medie dei gruppi.

:::dimostrazione
Nel caso discreto, moltiplicando la media condizionata a $X=x$ per $p_X(x)$, il denominatore nella massa condizionata si semplifica. Sommando su $x$ si ottiene la media pesata con tutte le masse congiunte. Per una coppia con densità si applica lo stesso procedimento agli integrali. Per la varianza si prende l'attesa dell'identità $\operatorname{Var}(Y\mid X)=E[Y^2\mid X]-E[Y\mid X]^2$. L'attesa del primo termine è $E[Y^2]$. Aggiungendo la varianza di $E[Y\mid X]$ si elimina $E[E[Y\mid X]^2]$ e resta $E[Y^2]-E[Y]^2$.
:::
::::

:::esempio{titolo="Variabilità interna e differenze tra gruppi"}
Un impianto usa con uguale probabilità due modalità di produzione. Il numero di pezzi ottenuti ha medie condizionate $10$ e $14$ e varianze condizionate $4$ e $8$. La media complessiva vale $12$. Le due medie condizionate distano entrambe $2$ dalla media complessiva, quindi la loro varianza vale $4$. La media delle varianze condizionate vale $6$. Si ottiene così una varianza complessiva di $10$. Il solo valore $6$ descrive la dispersione media attorno alle medie di gruppo.
:::
