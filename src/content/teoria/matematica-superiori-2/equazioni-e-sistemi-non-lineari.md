---
titolo: "Equazioni e sistemi non lineari"
sommario: "Scomposizioni, biquadratiche, equazioni con radici o valore assoluto, sistemi e verifica delle soluzioni."
---

## Scomporre un’equazione in fattori

::::teorema{#fattorizzazione titolo="Annullamento di un prodotto"}
Se due o più fattori sono definiti nel dominio considerato, il loro prodotto è zero esattamente quando almeno un fattore è zero.
:::dimostrazione
Se un fattore vale zero, il prodotto vale zero. Se tutti i fattori sono diversi da zero, si può dividere per il loro prodotto. L’ipotesi che questo prodotto valga zero condurrebbe a $1=0$. Quindi almeno uno dei fattori deve annullarsi.
:::
::::

:::esempio{titolo="Ciascun fattore dà un caso"}
In $x^3-9x=0$ si raccoglie $x$ e si applica la differenza di quadrati: $x(x-3)(x+3)=0$. Ogni fattore dà una radice, quindi l’insieme delle soluzioni è $\{-3,0,3\}$. Dividere subito per $x$ darebbe $x^2=9$ e perderebbe la radice zero. Si può dividere dopo aver verificato separatamente il caso $x=0$.

::grafico{f="x^3-9*x" xmin=-3.8 xmax=3.8 ymin=-14 ymax=14 punti="-3,0,pieno;0,0,pieno;3,0,pieno" titolo="I tre fattori lineari individuano tre incontri con l’asse"}
:::

:::osservazione{titolo="Zeri distinti e molteplicità"}
In $x^2(x-2)^3=0$ le radici distinte sono due. Lo zero compare due volte come fattore e $2$ tre volte. Vicino a zero, $x^2$ è positivo ai due lati mentre $(x-2)^3$ è negativo. Il grafico tocca l’asse e resta sotto. Attraversando $2$, il fattore cubico cambia segno mentre $x^2$ resta positivo, e il grafico attraversa l’asse. Contare i fattori distingue la molteplicità dal numero di radici.
:::

## Equazioni biquadratiche

::::teorema{#biquadratiche titolo="Dall’incognita al suo quadrato e ritorno"}
Per $a\ne0$, l’equazione $ax^4+bx^2+c=0$ si risolve con $t=x^2$. Si risolve $at^2+bt+c=0$, si trattengono le radici $t\ge0$ e si ritorna a $x$.
:::dimostrazione
Ogni $x$ reale dà un $t$ non negativo e trasforma $x^4$ in $t^2$. Viceversa, ogni $t>0$ trovato produce $x=-\sqrt t$ e $x=\sqrt t$, che hanno entrambi quadrato $t$. Il valore $t=0$ produce solo $x=0$. Nessun $t<0$ è il quadrato di un reale. Questi casi esauriscono la corrispondenza.
:::
::::

:::esempio{titolo="Quattro radici, oppure soltanto tre"}
In $x^4-5x^2+4=0$, i due valori di $t$ sono $1$ e $4$. Poiché sono distinti e positivi, si trovano $x=\pm1$ e $x=\pm2$. In $x^4-4x^2=0$, invece, l’equazione $t(t-4)=0$ dà $t=0$ e $t=4$. Si ottengono $-2$, $0$ e $2$. Nel secondo grafico il termine $x^2$ fa toccare l’asse in zero senza cambiare segno.

::grafico{f="x^4-4*x^2" xmin=-2.65 xmax=2.65 ymin=-5 ymax=10 punti="-2,0,pieno;0,0,pieno;2,0,pieno" titolo="t = 0 dà una sola ascissa, mentre t = 4 ne dà due"}
:::

:::esempio{titolo="Una soluzione ausiliaria che non torna a x"}
Per $x^4+x^2-2=0$ si ottiene $(t+2)(t-1)=0$. Il valore $-2$ va escluso prima di estrarre qualunque radice, perché un quadrato non può essere negativo. Da $t=1$ si ottengono $-1$ e $1$. Se invece l’equazione ausiliaria fosse $(t-3)^2=0$, l’unico valore $t=3$ darebbe comunque due reali distinti, $-\sqrt3$ e $\sqrt3$. La distinzione fra i valori di $t$ e quelli di $x$ serve anche in presenza di una radice doppia.
:::

:::osservazione{titolo="Riconoscere in anticipo il caso con tre radici"}
Una biquadratica ha esattamente tre radici reali distinte quando nell’equazione ausiliaria compaiono lo zero e una radice strettamente positiva. Lo zero è radice di $at^2+bt+c=0$ se e solo se $c=0$. Con quel termine noto, si può raccogliere $t$ e l’altra radice è $-\dfrac ba$. Il criterio è dunque $c=0$ e $-\dfrac ba>0$. Se l’altra radice è negativa o coincide con zero, rimane soltanto $x=0$. In nessun caso un singolo valore positivo di $t$ produce una sola ascissa reale.
:::

## Equazioni con una radice quadrata

::::teorema{#irrazionali titolo="Quando elevare al quadrato è reversibile"}
Dove $A(x)$ e $B(x)$ sono definite, la relazione $\sqrt{A(x)}=B(x)$ equivale a

$$
\begin{cases}
A(x)\ge0,\\
B(x)\ge0,\\
A(x)=B(x)^2.
\end{cases}
$$

:::dimostrazione
Una radice quadrata reale esiste per radicando non negativo e il suo valore è non negativo. Se i due membri sono uguali, hanno uguali quadrati. Viceversa, se $A(x)=B(x)^2$ e $B(x)\ge0$, allora $B(x)$ è proprio il numero non negativo con quadrato $A(x)$, quindi coincide con la radice principale.
:::
::::

:::esempio{titolo="Un candidato ha il segno sbagliato"}
In $\sqrt{x+6}=x$ il radicando impone $x\ge-6$ e il membro destro impone $x\ge0$. Dopo il quadrato si trova $(x-3)(x+2)=0$. Il candidato $-2$ rispetta il solo dominio della radice, ma $\sqrt4=2$ e non vale $-2$. Il candidato $3$ verifica $\sqrt9=3$. Nel grafico c’è una sola intersezione fra le due curve originali.

::grafico{f="sqrt(x+6);x" legenda="y=\sqrt{x+6};y=x" xmin=-6.7 xmax=5.5 ymin=-3 ymax=5.7 punti="3,3,pieno,P" titolo="Solo x = 3 rende uguali i membri originali"}
:::

:::osservazione{titolo="Stesso quadrato, segni diversi"}
L’equazione $\sqrt{x^2}=x$ ha dominio $\mathbb R$. Se si uguagliassero soltanto i quadrati si otterrebbe $x^2=x^2$. La relazione iniziale richiede però $x\ge0$, perché il membro sinistro è $|x|$. Il caso mostra che un’equazione trasformata può perfino essere un’identità mentre l’uguaglianza originale vale soltanto su una parte del dominio.
:::

:::osservazione{titolo="Radici di indice dispari"}
La radice cubica reale è l’inversa del cubo su tutta la retta. Può quindi essere negativa e il cubo conserva l’equivalenza senza imporre un segno ai membri. Per esempio, $\sqrt[3]{x-2}=-3$ equivale a $x-2=-27$, da cui $x=-25$. Se il secondo membro contiene l’incognita, si applica lo stesso principio. Da $\sqrt[3]x=-x$ segue $x=-x^3$, cioè $x(x^2+1)=0$. Il fattore $x^2+1$ è sempre positivo, quindi resta la sola soluzione $0$, che verifica anche la relazione iniziale.
:::

## Equazioni con due radicali

:::esempio{#due-radicali titolo="Isolare e conservare il vincolo di segno"}
In $\sqrt{x+1}+\sqrt x=3$ occorre $x\ge0$. Si isola la prima radice: $\sqrt{x+1}=3-\sqrt x$. Il secondo membro è non negativo soltanto per $x\le9$. Nel dominio $0\le x\le9$ si può quindi elevare al quadrato.

$$
\begin{aligned}
x+1&=9-6\sqrt x+x\\[6pt]
\sqrt x&=\frac43\\[6pt]
x&=\frac{16}{9}.
\end{aligned}
$$

Il valore appartiene all’intervallo ammesso. Le due radici originali sono $\dfrac53$ e $\dfrac43$, con somma $3$. Si è dovuto sviluppare il quadrato del binomio per conservare il termine misto, che è proprio quello da cui si ricava $\sqrt x$.

::grafico{f="sqrt(x+1);3-sqrt(x)" legenda="y=\sqrt{x+1};y=3-\sqrt x" xmin=-0.7 xmax=10.6 ymin=-0.6 ymax=4.3 punti="1.777777778,1.666666667,pieno,P;9,0,pieno" segmenti="9,0,9,3.4" titolo="Il membro con 3 − √x deve stare sull’asse o sopra di esso"}
:::

:::attenzione{titolo="Una verifica di segno può chiudere il calcolo"}
In $\sqrt{x+4}+\sqrt x=1$, il dominio è $x\ge0$. Il primo radicale vale almeno $2$, mentre l’altro è non negativo. Quindi la somma non può valere $1$. Se si isola la prima radice e si eleva al quadrato senza controllare il caso, si arriva a $\sqrt x=-\dfrac32$. Un altro quadrato farebbe comparire il candidato $\dfrac94$, ma la radice principale non può essere negativa. Fermarsi alla prima condizione impossibile evita il candidato estraneo.
:::

:::esempio{titolo="Una differenza di radicali e un valore di confine"}
In $\sqrt{x+4}-\sqrt x=k$, si cerchino soluzioni per $k>0$. Dopo aver isolato la prima radice, il secondo membro $k+\sqrt x$ è positivo sul dominio. Il quadrato dà $4=k^2+2k\sqrt x$. Dividere per $2k$ è lecito e il risultato deve essere non negativo. Occorre quindi $k^2\le4$. Per $k=2$ l’unica soluzione è $x=0$. Per $k=1$ si ha $\sqrt x=\dfrac32$ e $x=\dfrac94$. La sostituzione restituisce $\dfrac52-\dfrac32=1$. Con $k>2$ non si deve elevare una seconda volta al quadrato, perché la condizione di segno è già fallita.
:::

## Valore assoluto e suddivisione in casi

::::teorema{#assoluto titolo="Il segno determina il ramo da usare"}
Perché $|A(x)|=B(x)$ possa valere occorre $B(x)\ge0$. Nei punti in cui $A(x)\ge0$ si risolve $A(x)=B(x)$, negli altri si risolve $-A(x)=B(x)$. Ogni soluzione deve appartenere all’intervallo del proprio ramo.
:::dimostrazione
Questo segue dalla definizione del valore assoluto, che restituisce $A(x)$ nel primo caso e il suo opposto nel secondo. I due casi coprono tutti i punti del dominio. Se $A(x)=0$, entrambe le espressioni coincidono. Quel punto verifica l’equazione solo quando anche $B(x)=0$.
:::
::::

:::esempio{titolo="Controllare a quale ramo appartiene ogni soluzione"}
Per $|2x-1|=x+2$ occorre $x\ge-2$. Nel ramo $x\ge\dfrac12$ si risolve $2x-1=x+2$, che dà $x=3$. Nel ramo $-2\le x<\dfrac12$ si risolve $1-2x=x+2$ e si trova $x=-\dfrac13$. Entrambe le soluzioni appartengono al proprio intervallo. Le ordinate corrispondenti, $5$ e $\dfrac53$, sono i valori comuni dei due membri, non le soluzioni in $x$.

::grafico{f="abs(2*x-1);x+2" legenda="y=|2x-1|;y=x+2" xmin=-2.5 xmax=4.15 ymin=-0.7 ymax=7.25 punti="-0.333333333,1.666666667,pieno;3,5,pieno;0.5,0,pieno" titolo="Ogni soluzione appartiene al ramo usato per trovarla"}
:::

:::osservazione{titolo="Distanza e insieme delle soluzioni"}
La relazione $|x-2|=3$ cerca le ascisse a distanza $3$ da $2$, quindi dà $-1$ e $5$. Se si sostituisce $3$ con zero resta il solo $x=2$. Con il membro destro variabile il numero di soluzioni può cambiare ancora. In $|x-1|=x-1$ tutti i valori $x\ge1$ verificano l’identità, mentre per $x<1$ il membro destro è negativo. L’insieme delle soluzioni è quindi l’intervallo $[1,+\infty)$.
:::

:::esempio{titolo="Due valori assoluti permettono un altro passaggio"}
In $|x-5|=|2x-1|$ entrambi i membri sono non negativi. Uguagliare i quadrati è quindi reversibile e dà $(x-5)^2=(2x-1)^2$. Scomponendo la differenza dei quadrati si ottiene $(-x-4)(3x-6)=0$. I candidati sono $-4$ e $2$. Al primo valore i due argomenti valgono entrambi $-9$. Al secondo sono $-3$ e $3$. Si vede così che due valori assoluti possono essere uguali perché gli argomenti coincidono o perché sono opposti.
:::

## Sistemi tra una relazione lineare e una non lineare

::::teorema{#sistemi titolo="Sostituire e ricostruire la coppia"}
In un sistema con $y=g(x)$ e $F(x,y)=0$, si può risolvere $F(x,g(x))=0$ nei punti in cui le espressioni sono definite. A ogni valore ammesso di $x$ si associa la coppia $(x,g(x))$.
:::dimostrazione
Una coppia del sistema verifica la prima equazione, quindi sostituire $g(x)$ a $y$ nella seconda conserva l’uguaglianza. Viceversa, se l’equazione dopo la sostituzione è verificata e la coppia ricostruita è ammessa, allora la stessa coppia verifica entrambe le equazioni del sistema. Si deve usare il valore di $y$ associato a ciascun $x$.
:::
::::

:::esempio{titolo="La retta incontra la parabola in due punti"}
Per $y=x^2$ e $y=2x+3$, l’uguaglianza delle quote dà $x^2-2x-3=(x-3)(x+1)=0$. Con $x=-1$ la retta dà $y=1$. Con $x=3$ dà $y=9$. Si trovano $(-1,1)$ e $(3,9)$: incrociare le ordinate ottenute formerebbe coppie che non verificano il sistema. La verifica consiste nel calcolare l’ordinata tramite entrambe le relazioni.

::grafico{f="x^2;2*x+3" legenda="y=x^2;y=2x+3" xmin=-2 xmax=3.8 ymin=-1.4 ymax=11.8 punti="-1,1,pieno;3,9,pieno" segmenti="-1,0,-1,1;3,0,3,9" titolo="Ogni punto d’intersezione ha l’ordinata imposta da entrambe le curve"}
:::

:::esempio{titolo="Passare da nessuna intersezione alla tangenza"}
Con $y=x^2$ e $y=2x+m$, la sostituzione conduce a $(x-1)^2=m+1$. Per $m<-1$ non si può uguagliare il secondo membro con un quadrato reale. Per $m=-1$ si ottiene la sola coppia $(1,1)$: la retta è tangente. Per $m>-1$ i due segni della radice danno due ascisse distinte e quindi due coppie. Se la retta fosse verticale, come $x=2$, si sostituirebbe invece il valore di $x$ nella parabola, ottenendo $(2,4)$.

::grafico{f="x^2;2*x-1;2*x-2" legenda="y=x^2;y=2x-1;y=2x-2" xmin=-1.25 xmax=3.15 ymin=-2.65 ymax=6.8 punti="1,1,pieno" titolo="Una retta è tangente, l’altra resta sotto la parabola"}
:::

## Sistemi simmetrici

::::teorema{#somma-prodotto titolo="Ricavare le incognite da somma e prodotto"}
Nel sistema $x+y=s$, $xy=p$, le incognite sono le radici di $t^2-st+p=0$. Due radici reali distinte danno due coppie ordinate, una radice doppia ne dà una. Se le radici non sono reali, non ci sono coppie reali.
:::dimostrazione
Per ogni coppia del sistema, $(t-x)(t-y)=t^2-(x+y)t+xy=t^2-st+p$. Viceversa, le due radici reali del polinomio hanno somma $s$ e prodotto $p$ per le relazioni di Viète. Scambiarle preserva le due equazioni. Lo scambio produce una seconda coppia solo se le radici sono diverse.
:::
::::

:::esempio{titolo="Usare la somma dei quadrati per ricavare il prodotto"}
Supponiamo che $x+y=5$ e $x^2+y^2=13$. Sviluppando il quadrato della somma si ottiene $25=13+2xy$, dunque $xy=6$. L’equazione $t^2-5t+6=0$ dà $2$ e $3$. Il sistema ammette $(2,3)$ e $(3,2)$, che hanno somma $5$ e somma dei quadrati $4+9=13$. Nel grafico la prima condizione è una retta e la seconda una circonferenza. Se si aggiunge $x\le y$, sopravvive solo $(2,3)$.

::grafico{f="5-x" curve="sqrt(13)*cos(t),sqrt(13)*sin(t),0,6.283185307" legenda="y=5-x;x^2+y^2=13" xmin=-3.95 xmax=5.2 ymin=-3.95 ymax=5.2 uguale=1 punti="2,3,pieno,P;3,2,pieno,Q" titolo="Lo scambio delle coordinate lascia valide entrambe le relazioni"}
:::

:::osservazione{titolo="Un vincolo prima ancora della formula"}
Da $(x-y)^2=(x+y)^2-4xy\ge0$ segue $p\le\dfrac{s^2}{4}$. Se si chiedono somma $2$ e prodotto $3$, la condizione non è rispettata, perché il prodotto massimo è $1$. Con somma $2$ e prodotto $1$, la differenza deve essere zero e la sola coppia è $(1,1)$. Questa condizione coincide con il segno del discriminante dell’equazione ausiliaria.
:::

:::esempio{titolo="Una circonferenza di raggio insufficiente"}
Nel sistema $x+y=4$, $x^2+y^2=q$, si ha $(x-y)^2=2q-16$. Quindi occorre $q\ge8$. A $q=8$ le incognite sono uguali e la sola coppia è $(2,2)$. Per $q>8$ le differenze possibili sono opposte e distinte. Ciascuna, unita alla somma $4$, determina una coppia. Per esempio, con $q=10$ le differenze valgono $2$ e $-2$, dando $(3,1)$ e $(1,3)$. Quando $0\le q<8$, la circonferenza è troppo piccola per raggiungere la retta. Aumentare il raggio fino alla soglia produce la tangenza.
:::

## Dominio e condizioni applicative

:::esempio{#dominio titolo="Cancellare un fattore senza reinserire il suo zero"}
In $\dfrac{x(x-2)(x+2)}{x-2}=0$ il denominatore impone $x\ne2$. Cancellare il fattore comune dà $x(x+2)=0$ sul dominio. Restano $x=0$ e $x=-2$, che annullano il numeratore senza annullare il denominatore. La forma semplificata avrebbe valore $8$ in $x=2$, ma il grafico della frazione non contiene quel punto. La condizione di esistenza va conservata anche quando cambia la forma dell’espressione.

::grafico{f="x*(x+2)" xmin=-3.3 xmax=2.9 ymin=-2 ymax=10 punti="-2,0,pieno;0,0,pieno;2,8,vuoto" titolo="Il grafico ha due zeri ammessi e un punto mancante in (2, 8)"}
:::

:::esempio{titolo="Il problema può imporre un ordine"}
Due lati adiacenti di un rettangolo misurano $x$ e $y$ centimetri, con $x+y=7$ e $xy=12$. Le radici ausiliarie sono $3$ e $4$, entrambe positive. Come coppie ordinate si trovano $(3,4)$ e $(4,3)$. Se $x$ indica specificamente il lato più corto, serve $x<y$ e si tiene solo $(3,4)$. La scelta conserva l’area $12\,\mathrm{cm}^2$ e il perimetro $14\,\mathrm{cm}$. Il vincolo proviene dalla descrizione delle misure, mentre le due equazioni da sole sono simmetriche.
:::

:::esempio{titolo="Un radicale che compare anche al denominatore"}
Per $\sqrt{x-4}=\dfrac1{x-4}$ il dominio richiede $x>4$, combinando il radicando non negativo con il denominatore non nullo. Con $u=\sqrt{x-4}$ si ha $u>0$ e $x-4=u^2$. L’equazione diventa $u=\dfrac1{u^2}$, quindi $u^3=1$. Si trova $u=1$ e $x=5$. La condizione $u>0$ rende reversibile il passaggio in cui si moltiplica per $u^2$. In $x=5$ entrambi i membri originali valgono $1$.
:::
