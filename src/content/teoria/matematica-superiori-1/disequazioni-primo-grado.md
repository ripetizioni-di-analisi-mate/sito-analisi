---
titolo: Disequazioni di primo grado
sommario: Trasformazioni equivalenti, intervalli e vincoli di prezzo, capienza e quantità intere.
---

In una disequazione di primo grado, come $2x+8>24$, si cercano tutti i numeri $x$ per cui un’espressione è maggiore, oppure minore, di un’altra. Qui la risposta è «tutti i numeri maggiori di $8$» e si scrive con un intervallo. Si risolve con le trasformazioni già usate nelle equazioni di primo grado, e il confronto fra condizioni che valgono insieme servirà nelle disequazioni e nei sistemi del secondo anno.

## Ordine e trasformazioni equivalenti

::::teorema{#ordine titolo="Trasformazioni che conservano o invertono l’ordine"}
Una **disuguaglianza** è un confronto fra due numeri, per esempio $3<5$. I simboli $<$ («minore di») e $>$ («maggiore di») indicano un confronto **stretto**, che esclude l’uguaglianza. I simboli $\le$ («minore o uguale a») e $\ge$ («maggiore o uguale a») la comprendono. Per esempio $5<5$ è falso, mentre $5\le5$ è vero.

Una **disequazione** è una disuguaglianza in cui compare una lettera $x$, detta **incognita**, al posto di un numero che non si conosce. Un esempio è $2x+8>24$. Le due espressioni ai lati del simbolo sono i **membri**, e il **verso** è la direzione del simbolo. Una **soluzione** è un numero che, messo al posto di $x$, rende vero il confronto. Con $x=9$ si ottiene $26>24$, che è vero, quindi $9$ è una soluzione. Con $x=7$ si ottiene $22>24$, che è falso. L’insieme delle soluzioni si indica con $S$. Le soluzioni si cercano in un insieme assegnato, il **dominio**. Dove il testo non lo precisa, il dominio è l’insieme $\mathbb R$ dei **numeri reali**, cioè gli interi, le frazioni e tutti gli altri numeri decimali.

Due disequazioni sono **equivalenti** se hanno lo stesso insieme di soluzioni. Il simbolo $\iff$ fra due disequazioni si legge «equivale a». Tre trasformazioni portano da una disequazione a una equivalente.

- Aggiungere o sottrarre la stessa espressione ai due membri conserva il verso. L’espressione deve essere definita nel dominio, cioè avere un valore per ogni numero del dominio.
- Moltiplicare o dividere i due membri per una stessa costante positiva conserva il verso. Una **costante** è un numero che non dipende da $x$.
- Moltiplicare o dividere i due membri per una stessa costante negativa inverte il verso, cioè $<$ diventa $>$ e $\le$ diventa $\ge$, e viceversa.

:::dimostrazione
Si guarda la differenza fra il secondo membro e il primo. Dire che $a<b$ equivale a dire che $b-a$ è positiva.

Se si aggiunge uno stesso numero $d$ ai due membri, la nuova differenza è $(b+d)-(a+d)=b-a$. È rimasta la stessa, quindi è ancora positiva e $a+d<b+d$.

Se si moltiplicano i due membri per uno stesso numero $k$, la nuova differenza è $kb-ka=k(b-a)$, dove si è raccolto $k$. Per la regola dei segni, se $k>0$ il prodotto è positivo, quindi $ka<kb$ e il verso è conservato. Se $k<0$ il prodotto è negativo, quindi $kb<ka$ e il verso è invertito.

Se i due membri sono uguali, la differenza è zero e resta zero dopo ciascuna operazione. Per questo anche l’uguaglianza ammessa da $\le$ e $\ge$ si conserva.

Ogni trasformazione si annulla con quella inversa, cioè l’addizione di $d$ con la sottrazione di $d$ e la moltiplicazione per $k$ con la divisione per $k$, che è definita perché $k$ è diverso da zero. Dalla nuova disequazione si torna quindi a quella di partenza, e le due hanno le stesse soluzioni.
:::

::grafico{assi=0 xmin=-5.1 xmax=5.1 ymin=-1.8 ymax=1.77 vettori="-4.7,0.86,4.75,0.86;-4.7,-0.82,4.75,-0.82" punti="1,0.86,pieno;4,0.86,pieno;-1,-0.82,pieno;-4,-0.82,pieno" etichette="1,1.36,1;4,1.36,4;-1,-1.32,−1;-4,-1.32,−4;-2.9,1.36,Valori iniziali;2.9,-1.32,Valori opposti" titolo="Da $1<4$ segue $-4<-1$. Il valore maggiore diventa quello più a sinistra"}

Sulla retta dei numeri il minore fra due numeri è quello più a sinistra. In basso sono segnati gli opposti di $1$ e $4$, ottenuti moltiplicando per $-1$. Il minore è ora $-4$, quindi il verso si è invertito.
::::

:::attenzione
La moltiplicazione dei due membri per zero non è una trasformazione equivalente. Da $3<5$, che è vero, si otterrebbe $0<0$, che è falso. Da $5\le3$, che è falso, si otterrebbe $0\le0$, che è vero. Dopo la moltiplicazione per zero l’incognita scompare e il confronto ottenuto non dà più informazioni sulla condizione di partenza.
:::

## Coefficiente, soglia e verso

:::definizione{#coefficienti titolo="La soglia ottenuta isolando l’incognita"}
Una disequazione è **di primo grado**, o **lineare**, quando $x$ compare soltanto moltiplicata per un numero, senza potenze come $x^2$. Il numero che moltiplica $x$ è il suo **coefficiente**. I **termini simili** sono i termini con $x$ fra loro e i numeri fra loro, e riunirli significa sommarli.

Portando tutti i termini nel primo membro e riunendo i termini simili, una disequazione lineare diventa un confronto fra $ax+b$ e zero, con $a$ e $b$ numeri. Per esempio, sottraendo $24$ ai due membri, $2x+8>24$ diventa $2x-16>0$, con $a=2$ e $b=-16$.

Se $a\ne0$, cioè se $a$ è diverso da zero, la **soglia** è il numero $-\dfrac ba$, che rende $ax+b$ uguale a zero e quindi rende uguali i due membri. Nell’esempio la soglia è $-\dfrac{-16}{2}=8$. La soglia si chiama anche **valore di confine**, perché separa i numeri che sono soluzioni dagli altri.

Per trovare l’insieme delle soluzioni si isola $x$, cioè si trasforma la disequazione fino ad avere $x$ da sola in un membro. L’ultimo passaggio è la divisione per il coefficiente di $x$, che conserva il verso se il coefficiente è positivo e lo inverte se è negativo. Da $2x>16$, dividendo per $2$, si ottiene $x>8$.

Il simbolo di confronto stabilisce se la soglia è una soluzione. Con $<$ e $>$ la soglia è esclusa, con $\le$ e $\ge$ è inclusa.
:::

:::esempio{titolo="Confrontare due espressioni con la stessa incognita"}
Si cercano i numeri $x$ per cui $2x+6>x+9$.

$$
\begin{aligned}
2x+6&>x+9,\\[6pt]
2x+6-x-6&>x+9-x-6,\\[6pt]
x&>3.
\end{aligned}
$$

Si è sottratta l’espressione $x+6$ ai due membri, e la sottrazione conserva il verso. Per $x=3$, che è la soglia, i due membri valgono entrambi $12$. Per $x=4$ valgono $14$ e $13$, e $14>13$ è vero. Per $x=2$ valgono $10$ e $11$, e $10>11$ è falso.

::grafico{f="2*x+6;x+9" xmin=-0.4 xmax=6.3 ymin=4.9 ymax=20.2 nomi="x,y" legenda="y=2x+6;y=x+9" punti="3,12,pieno;4,14,pieno;4,13,pieno" segmenti="3,5,3,12;4,13,4,14" titolo="Le rette si incontrano per $x=3$. A destra la prima espressione è maggiore della seconda"}

Ogni retta riporta il valore di una delle due espressioni. A destra di $3$ la retta $y=2x+6$ sta sopra l’altra, e questo corrisponde a $x>3$.

Si cercano ora i numeri $x$ per cui $-2x+1\le7$.

$$
\begin{aligned}
-2x+1&\le7,\\[6pt]
-2x&\le6,\\[6pt]
x&\ge-3.
\end{aligned}
$$

Prima si è sottratto $1$ ai due membri. Poi si è diviso per $-2$, che è negativo, quindi $\le$ è diventato $\ge$. Per $x=-3$ il primo membro vale $7$, e $7\le7$ è vero, quindi la soglia è una soluzione. Per $x=-4$, che è minore di $-3$, il primo membro vale $9$, e $9\le7$ è falso.
:::

::::teorema{#segno-lineare titolo="Il segno ai due lati della soglia"}
Il **segno** di un’espressione indica se il suo valore è positivo, negativo o nullo. Sia $r=-\dfrac ba$ la soglia dell’espressione $ax+b$, con $a\ne0$.

- Se $a$ è positivo, $ax+b$ è negativa per $x<r$, cioè a sinistra della soglia, e positiva per $x>r$.
- Se $a$ è negativo, i due segni si scambiano.

Trovata la soglia, il segno è quindi noto per tutti i numeri da ciascun lato. Per esempio $-2x+6$ ha $a=-2$ e soglia $r=3$, quindi è positiva per $x<3$ e negativa per $x>3$.

:::dimostrazione
Si scrive $ax+b$ come prodotto di due fattori di cui si conosce il segno. La soglia rende nulla l’espressione, cioè $ar+b=0$, quindi $b=-ar$. Sostituendo si ottiene $ax+b=ax-ar=a(x-r)$. Il fattore $x-r$ è negativo per $x<r$ ed è positivo per $x>r$. Per la regola dei segni, se $a>0$ il prodotto $a(x-r)$ ha lo stesso segno di $x-r$, e se $a<0$ ha il segno opposto.
:::

| Segno del coefficiente | $x<r$ | $x=r$ | $x>r$ |
| --- | --- | --- | --- |
| $a>0$ | $-$ | $0$ | $+$ |
| $a<0$ | $+$ | $0$ | $-$ |
::::

## Parentesi e denominatori numerici

:::esempio{#parentesi-e-frazioni titolo="Moltiplicare per un denominatore comune positivo"}
Si risolve $\dfrac{-(2x-1)}3+\dfrac{x+5}6\ge1$. Il **minimo comune multiplo** (mcm) dei denominatori $3$ e $6$, cioè il più piccolo numero divisibile per entrambi, è $6$. Moltiplicando i due membri per $6$, che è positivo, le frazioni scompaiono e il verso si conserva. Nel primo termine $6:3=2$, quindi il numeratore $-(2x-1)$ diventa $-2(2x-1)$. Nel secondo $6:6=1$ e il numeratore resta $x+5$.

$$
\begin{aligned}
-2(2x-1)+(x+5)&\ge6,\\[6pt]
-4x+2+x+5&\ge6,\\[6pt]
-3x+7&\ge6,\\[6pt]
-3x&\ge-1,\\[6pt]
x&\le\frac13.
\end{aligned}
$$

Nella seconda riga i due termini di $2x-1$ cambiano segno perché sono moltiplicati per il numero negativo $-2$. Nella terza si sono riuniti i termini simili e nella quarta si è sottratto $7$. Nell’ultima si è diviso per $-3$, che è negativo, quindi $\ge$ è diventato $\le$.

Per $x=\dfrac13$ la somma iniziale vale $\dfrac19+\dfrac89=1$, quindi la soglia è una soluzione.

In alternativa si sommano prima le due frazioni, ottenendo $\dfrac{7-3x}{6}\ge1$. Il denominatore è positivo, quindi la frazione vale almeno $1$ quando il numeratore vale almeno $6$, cioè $7-3x\ge6$. È la terza riga del calcolo.
:::

:::osservazione
Una frazione con denominatore negativo si riscrive cambiando segno sia al numeratore sia al denominatore, perché così il suo valore resta lo stesso. Per esempio $\dfrac{3-2x}{-4}<2$ equivale a $\dfrac{2x-3}{4}<2$. Moltiplicando per $4$ si ha $2x-3<8$. Aggiungendo $3$ e dividendo per $2$ si ottiene $x<\dfrac{11}{2}$.

In alternativa si moltiplica la disequazione iniziale per $-4$. Il verso si inverte e si ottiene $3-2x>-8$. Sottraendo $3$ si ha $-2x>-11$. Dividendo per $-2$ il verso si inverte una seconda volta e si ottiene di nuovo $x<\dfrac{11}{2}$. Due inversioni riportano il verso a quello iniziale.

Per $x=\dfrac{11}{2}$ la frazione iniziale vale $\dfrac{-8}{-4}=2$. Il confronto $2<2$ è falso, quindi la soglia è esclusa.
:::

:::esempio{#cambio-di-variabile titolo="Tradurre un intervallo attraverso un cambio di variabile"}
La scrittura $3<10-2x\le7$ chiede che $10-2x$ sia maggiore di $3$ e, insieme, minore o uguale a $7$. Un **cambio di variabile** consiste nel dare un nome nuovo a un’espressione. Qui si pone $u=10-2x$ e la richiesta diventa $3<u\le7$. Da $u=10-2x$ si ricava $2x=10-u$, quindi $x=\dfrac{10-u}{2}$.

- Per $u=7$ si ha $x=\dfrac{10-7}{2}=\dfrac32$. Il valore $u=7$ è ammesso, quindi $x=\dfrac32$ è incluso.
- Per $u=3$ si ha $x=\dfrac{10-3}{2}=\dfrac72$. Il valore $u=3$ è escluso, quindi $x=\dfrac72$ è escluso.

Quando $u$ cresce da $3$ a $7$, il numeratore $10-u$ diminuisce, quindi $x$ diminuisce da $\dfrac72$ a $\dfrac32$. Per questo l’ordine si inverte. Le soluzioni sono i numeri con $\dfrac32\le x<\dfrac72$, cioè l’intervallo $\left[\dfrac32,\dfrac72\right)$, dove $[$ indica un estremo incluso e $)$ un estremo escluso.

::grafico{assi=0 xmin=-0.7 xmax=8.2 ymin=-1.88 ymax=1.75 vettori="-0.25,0.88,7.9,0.88;-0.25,-0.84,7.9,-0.84" area="0.97;0.79;3;7|-0.75;-0.93;1.5;3.5" punti="3,0.88,vuoto;7,0.88,pieno;1.5,-0.84,pieno;3.5,-0.84,vuoto" etichette="0.36,1.31,u;3,1.31,3;7,1.31,7;0.36,-1.34,x;1.5,-1.34,3⁄2;3.5,-1.34,7⁄2" titolo="L’estremo chiuso di $u$ diventa l’estremo sinistro di $x$. L’estremo aperto si sposta a destra"}

La retta in alto riporta i valori di $u$ e quella in basso i valori di $x$. Il cerchio pieno, che segna l’estremo incluso, è a destra per $u$ e a sinistra per $x$.
:::

## Intervalli sulla retta reale

:::definizione{#intervalli titolo="Estremi inclusi, esclusi e illimitati"}
Sulla **retta reale** ogni punto corrisponde a un numero reale. Un **intervallo** è l’insieme di tutti i numeri reali compresi fra due numeri $a$ e $b$, con $a<b$, detti **estremi**.

- $(a,b)$ contiene i numeri $x$ con $a<x<b$. Gli estremi sono esclusi.
- $[a,b]$ contiene i numeri $x$ con $a\le x\le b$. Gli estremi sono inclusi.
- $(a,b]$ contiene i numeri $x$ con $a<x\le b$. È incluso solo $b$. In $[a,b)$ è incluso solo $a$.

Una parentesi quadra corrisponde a un estremo incluso, una tonda a uno escluso. L’intervallo $(-1,2]$ contiene per esempio $0$ e $2$, mentre $-1$ e $3$ restano fuori.

::grafico{assi=0 xmin=-2.8 xmax=4 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-1;2" vettori="-2.45,0,3.65,0" punti="-1,0,vuoto;2,0,pieno" etichette="-1,-0.3,−1;2,-0.3,2;3.55,-0.3,x" titolo="L’intervallo $(-1,2]$ include $2$. Il cerchio vuoto esclude $-1$"}

Una **semiretta** è un intervallo che ha un solo estremo e dall’altro lato prosegue senza fine. La condizione $x\le-2$ si scrive $(-\infty,-2]$. Il simbolo $\infty$ si legge «infinito». La scrittura $-\infty$ indica che l’intervallo prosegue verso sinistra senza un primo valore. Analogamente, $+\infty$ indica che prosegue verso destra, e $x>8$ si scrive $(8,+\infty)$ oppure $(8,\infty)$. Accanto a $-\infty$ e a $+\infty$ si scrive una parentesi tonda, perché non sono numeri e non appartengono all’intervallo.

::grafico{assi=0 xmin=-6.2 xmax=1.9 ymin=-0.8 ymax=0.86 area="0.075;-0.075;-5.8;-2" vettori="-5.45,0,-5.98,0;-5.5,0,1.6,0" punti="-2,0,pieno" etichette="-2,-0.3,−2;1.5,-0.3,x" titolo="La parte evidenziata include $-2$ e continua verso sinistra"}

Un insieme formato da un solo numero si scrive fra parentesi graffe, per esempio $\{2\}$. Si ottiene quando un limite inferiore e uno superiore coincidono e sono entrambi inclusi, come in $x\ge2$ e $x\le2$. Se almeno uno dei due confronti è stretto, come in $x>2$ e $x\le2$, nessun numero li rispetta entrambi. L’insieme senza elementi si chiama **insieme vuoto** e si indica con $\varnothing$.

I **numeri interi** sono $\ldots,-2,-1,0,1,2,\ldots$ e il loro insieme si indica con $\mathbb Z$. La scrittura $x\in\mathbb Z$ si legge «$x$ appartiene a $\mathbb Z$», mentre $x\notin\mathbb Z$ si legge «$x$ non appartiene a $\mathbb Z$». Gli interi con $8<x\le14$ sono $9,10,11,12,13,14$. Sono $14-9+1=6$, perché $14-9$ conta i passi da $9$ a $14$ e si aggiunge $1$ per contare anche $9$.
:::

:::osservazione
Il **complemento** di un intervallo rispetto a $\mathbb R$ è l’insieme dei numeri reali che non appartengono all’intervallo. Il complemento di $[-1,3)$ è $(-\infty,-1)\cup[3,+\infty)$. Il simbolo $\cup$ si legge «unito» e indica l’insieme che raccoglie i numeri delle due semirette. L’estremo $-1$ appartiene all’intervallo iniziale, quindi è escluso dal complemento. L’estremo $3$ non appartiene all’intervallo iniziale, quindi è incluso nel complemento. Ogni numero reale appartiene a uno solo dei due insiemi.

Il complemento si scrive anche $\mathbb R\setminus[-1,3)$, che si legge «$\mathbb R$ meno $[-1,3)$». Per esempio $\mathbb R\setminus\{1\}$ è l’insieme dei numeri reali diversi da $1$.
:::

## Condizioni simultanee e alternative

::::teorema{#sistemi titolo="Intersezione e unione degli insiemi soluzione"}
Siano $A$ e $B$ gli insiemi dei numeri che verificano due condizioni, per esempio $A=[1,+\infty)$ per $x\ge1$ e $B=(-\infty,4)$ per $x<4$.

- L’**intersezione** $A\cap B$ è l’insieme dei numeri che appartengono sia ad $A$ sia a $B$. Contiene i numeri che verificano *entrambe* le condizioni.
- L’**unione** $A\cup B$ è l’insieme dei numeri che appartengono ad almeno uno fra $A$ e $B$. Contiene i numeri che verificano *almeno una* condizione.

Nell’esempio $2$ verifica entrambe le condizioni e appartiene all’intersezione. Il numero $5$ verifica solo la prima, quindi appartiene all’unione e non all’intersezione. Due o più disequazioni da verificare insieme formano un **sistema**, e le sue soluzioni sono l’intersezione.

:::dimostrazione
Un numero verifica entrambe le condizioni quando appartiene ad $A$ e appartiene a $B$, e questa è la definizione di appartenere ad $A\cap B$. Un numero verifica almeno una condizione quando appartiene ad almeno uno fra $A$ e $B$, e questa è la definizione di appartenere ad $A\cup B$. Lo stesso criterio si applica a ciascun estremo.
:::
::::

:::esempio{titolo="Leggere le soluzioni comuni su tre rette coordinate"}
Le condizioni $x\ge1$ e $x<4$ devono valere insieme, quindi si prende l’intersezione $[1,+\infty)\cap(-\infty,4)=[1,4)$. L’estremo $1$ verifica $x\ge1$ e anche $x<4$, quindi è incluso. L’estremo $4$ verifica $x\ge1$ e non verifica $x<4$, quindi è escluso.

::grafico{assi=0 xmin=-0.9 xmax=6.7 ymin=-0.55 ymax=3.4 vettori="-0.55,2.63,6.3,2.63;-0.55,1.57,6.3,1.57;-0.55,0.51,6.3,0.51" area="2.71;2.55;1;6.05|1.65;1.49;-0.5;4|0.59;0.43;1;4" punti="1,2.63,pieno;4,1.57,vuoto;1,0.51,pieno;4,0.51,vuoto" segmenti="1,0.51,1,2.63;4,0.51,4,1.57" etichette="1,0.07,1;4,0.07,4;2.5,0.93,Intersezione" titolo="Le prime due righe mostrano i vincoli separati. La terza evidenzia il tratto in comune"}

Una **doppia disuguaglianza** è un modo breve di scrivere due condizioni simultanee. La scrittura $0\le4-2x<6$ chiede $0\le4-2x$ e, insieme, $4-2x<6$. Ogni operazione si applica a tutti e tre i membri.

$$
\begin{aligned}
0\le4-2x&<6,\\[6pt]
-4\le-2x&<2,\\[6pt]
2\ge x&>-1.
\end{aligned}
$$

Prima si è sottratto $4$. Poi si è diviso per $-2$, quindi entrambi i simboli si sono invertiti. L’ultima riga, riordinata dal limite inferiore a quello superiore, è $-1<x\le2$. Per $x=2$ si ha $4-2x=0$, valore ammesso, quindi $2$ è incluso. Per $x=-1$ si ha $4-2x=6$, valore escluso, quindi $-1$ è escluso.
:::

:::osservazione
In un’intersezione come quella fra $x\ge1$ e $x<4$, una condizione fissa il limite inferiore e l’altra il limite superiore. Se il limite inferiore è maggiore di quello superiore, come in $x\ge5$ e $x<4$, nessun numero verifica entrambe le condizioni. Se i due limiti coincidono, si controlla direttamente quel valore.

Per esempio in $[-2,1]\cap[1,4)$ i numeri minori di $1$ sono esclusi dal secondo intervallo e i numeri maggiori di $1$ dal primo. Il numero $1$ appartiene a entrambi, quindi l’intersezione è $\{1\}$. Con $[-2,1)$ al posto di $[-2,1]$, anche $1$ è escluso e l’intersezione è $\varnothing$.
:::

:::esempio{titolo="Soluzioni ammesse da almeno una condizione"}
La parola «oppure» fra due condizioni chiede che ne valga almeno una, quindi si prende l’unione. Le condizioni $x<-3$ oppure $x\ge2$ danno $(-\infty,-3)\cup[2,+\infty)$. Il numero $0$ è escluso, perché $0<-3$ e $0\ge2$ sono entrambi falsi.

::grafico{assi=0 xmin=-6.2 xmax=5.3 ymin=-0.8 ymax=0.88 vettori="-5.42,0,-5.98,0;-5.5,0,4.95,0" area="0.075;-0.075;-5.8;-3|0.075;-0.075;2;4.72" punti="-3,0,vuoto;2,0,pieno" etichette="-3,-0.32,−3;2,-0.32,2;4.85,-0.32,x" titolo="L’unione comprende due semirette distinte. Il tratto fra $-3$ e $2$ resta escluso"}

Quando due intervalli hanno un estremo in comune, quell’estremo appartiene all’unione se almeno uno dei due lo include. In $(-\infty,1)\cup[1,4)$ il numero $1$ è incluso dal secondo intervallo, quindi l’unione è $(-\infty,4)$. In $(-\infty,1)\cup(1,+\infty)$ nessuno dei due include $1$, quindi l’unione è $\mathbb R\setminus\{1\}$.
:::

## Coefficiente nullo e parametro

:::osservazione{#casi titolo="Quando rimane un confronto fra costanti"}
In alcune disequazioni, riunendo i termini simili, i termini con $x$ si cancellano. Resta allora un confronto fra due numeri, vero oppure falso senza dipendere da $x$.

- Da $2x+1<2x+4$, sottraendo $2x$ ai due membri, resta $1<4$. Il confronto è vero, quindi ogni $x$ del dominio è una soluzione. La disequazione si dice **sempre verificata** e, se il dominio è $\mathbb R$, si scrive $S=\mathbb R$.
- Da $3x+5\le3x+2$, sottraendo $3x$, resta $5\le2$. Il confronto è falso, quindi nessun $x$ è una soluzione e $S=\varnothing$. La disequazione si dice **impossibile**.
- Se resta $0\le0$ il confronto è vero, mentre se resta $0<0$ è falso.

In questi casi il coefficiente di $x$ dopo la riduzione è $0$ e la soglia non esiste. Il dominio iniziale continua a stabilire quali numeri sono soluzioni. Se $x$ conta oggetti, le soluzioni di $2x+1<2x+4$ sono soltanto $0,1,2,\ldots$
:::

:::esempio{titolo="Un coefficiente di cui si deve determinare il segno"}
Un **parametro** è una lettera che indica un numero fissato ma non precisato, e la soluzione dipende dal suo valore. Nella disequazione $a(x-2)\le0$ l’incognita è $x$ e il parametro è $a$. Per isolare $x$ si divide per $a$, e l’effetto sul verso dipende dal segno di $a$.

- Se $a>0$, la divisione conserva il verso. Si ottiene $x-2\le0$, cioè $x\le2$.
- Se $a<0$, la divisione inverte il verso. Si ottiene $x-2\ge0$, cioè $x\ge2$.
- Se $a=0$, la divisione per $a$ non è definita. La disequazione è $0\cdot(x-2)\le0$, cioè $0\le0$, quindi ogni numero reale è una soluzione.

In tutti e tre i casi $x=2$ è una soluzione, perché $a\cdot(2-2)=0$ e $0\le0$ è vero. Con il confronto stretto $a(x-2)<0$, nel caso $a=0$ resterebbe $0<0$, che è falso, e l’insieme delle soluzioni sarebbe vuoto.
:::

:::esempio{titolo="Trovare il parametro che fa valere il vincolo per ogni reale"}
Un **vincolo** è una condizione da rispettare. Si cercano i valori del parametro $b$ per cui il vincolo $(b-3)x\le3$ è vero per *ogni* numero reale $x$.

Per $b=3$ il primo membro è $0\cdot x=0$ per ogni $x$, e $0\le3$ è vero. Il valore $b=3$ soddisfa quindi la richiesta.

Per $b\ne3$ il numero $b-3$ è diverso da zero e si sceglie $x=\dfrac4{b-3}$. Con questo $x$ il primo membro vale $(b-3)\cdot\dfrac{4}{b-3}=4$, e $4\le3$ è falso. Per esempio, con $b=5$ il vincolo è $2x\le3$ e il numero scelto è $x=2$.

Un solo numero $x$ che rende falso il confronto basta per escludere quel valore di $b$, perché la richiesta riguarda ogni $x$. L’unico valore che soddisfa la richiesta è quindi $b=3$.
:::

## Confrontare due tariffe

:::esempio{#confronto-di-tariffe titolo="Costo fisso, consumo e punto di parità"}
Per stampare $n$ copie la tariffa A chiede $5$ euro fissi più $3$ euro a copia, quindi costa $5+3n$ euro. La tariffa B chiede $11$ euro fissi più $2$ euro a copia, quindi costa $11+2n$ euro. Il numero $n$ conta le copie, perciò è un intero positivo.

La frase «A costa meno di B» si traduce in $5+3n<11+2n$. Sottraendo $5+2n$ ai due membri si trova $n<6$. Gli interi positivi minori di $6$ sono $1,2,3,4,5$, quindi A costa meno per gli ordini da una a cinque copie.

::grafico{f="5+3*x;11+2*x" xmin=-0.5 xmax=9.7 ymin=3.2 ymax=34 nomi="n,C" legenda="A;B" punti="1,8,pieno;5,20,pieno;6,23,pieno;7,25,pieno" segmenti="6,3.5,6,23" titolo="Per sei copie entrambe le tariffe costano 23 euro. Prima della parità A è più economica"}

L’asse orizzontale riporta il numero di copie $n$ e quello verticale il costo $C$ in euro.

La soglia $n=6$ è il **punto di parità**, cioè il numero di copie per cui le due tariffe hanno lo stesso costo, $5+3\cdot6=11+2\cdot6=23$ euro. Per $n=5$ A costa $20$ euro e B $21$ euro. Per $n=7$ A costa $26$ euro e B $25$ euro. La quota fissa più piccola, $5$ euro contro $11$, fa costare meno A negli ordini piccoli. Ogni copia in più costa $3$ euro con A e $2$ con B, quindi il vantaggio di A si riduce di $1$ euro a copia e oltre le sei copie costa meno B.
:::

## Soglie e quantità intere

:::esempio{#problemi titolo="Verificare massimi e minimi nel dominio intero"}
Quando l’incognita conta oggetti, la disequazione si risolve fra i numeri reali e poi si tengono soltanto le soluzioni intere. Nel testo di un problema «al massimo» corrisponde a $\le$, «almeno» a $\ge$, «più di» a $>$ e «meno di» a $<$.

Un pacco ammette al massimo $41\,\mathrm{kg}$ (chilogrammi). L’imballaggio pesa $4\,\mathrm{kg}$ e ogni pezzo pesa $3{,}5\,\mathrm{kg}$. Se $n$ è il numero di pezzi, il pacco pesa $4+3{,}5n$ chilogrammi e le condizioni sono due.

$$
\begin{cases}
n\in\{0,1,2,\ldots\}\\
4+3{,}5n\le41
\end{cases}
$$

Sottraendo $4$ si ha $3{,}5n\le37$. Dividendo per $3{,}5$ si ha $n\le\dfrac{37}{3{,}5}=\dfrac{74}{7}$. Poiché $7\cdot10=70$ e $7\cdot11=77$, questo numero è compreso fra $10$ e $11$. Si caricano dunque al massimo dieci pezzi. Con dieci pezzi il pacco pesa $39\,\mathrm{kg}$, con undici pesa $42{,}5\,\mathrm{kg}$.

Per un ordine servono più di $20$ matite e al massimo $36$ matite, in confezioni intere da $4$. Se $n$ è il numero di confezioni, il vincolo è $20<4n\le36$. Dividendo i tre membri per $4$ si ottiene $5<n\le9$. Poiché $n$ conta confezioni, le soluzioni sono esattamente $6,7,8,9$. Il minimo è $6$, perché cinque confezioni contengono proprio $20$ matite. Il massimo è $9$, perché nove confezioni ne contengono $36$.

::grafico{assi=0 xmin=3.2 xmax=10.8 ymin=-0.95 ymax=1.44 vettori="3.5,0,10.5,0" area="0.075;-0.075;5;9" punti="5,0,vuoto;6,0,pieno;7,0,pieno;8,0,pieno;9,0,pieno" etichette="5,-0.36,5;6,-0.36,6;7,-0.36,7;8,-0.36,8;9,-0.36,9;10.38,-0.36,n" titolo="L’intervallo reale dà il tratto evidenziato. I punti pieni individuano i numeri di confezioni ammessi"}

Un massimo o un minimo si verifica sostituendo l’intero trovato e l’intero vicino. Quando la soglia è già intera, il simbolo stabilisce se è ammessa. Per esempio $n<9$ ammette al massimo $8$, mentre $n\le9$ ammette anche $9$. Quando la soglia non è intera e si cerca un minimo, il primo intero ammesso è quello subito dopo. Per avere almeno $45$ matite si chiede $4n\ge45$, cioè $n\ge11{,}25$, e il minimo è $12$.
:::

:::esempio{titolo="Verificare contemporaneamente un budget e una capienza"}
Per un laboratorio serve un gruppo di almeno quattro partecipanti. Il tavolo ha sei postazioni. Il costo è di $6$ euro fissi più $4$ euro per persona e il **budget**, cioè la somma massima che si può spendere, è di $34$ euro. Se $n$ è il numero di partecipanti, le tre condizioni valgono insieme.

$$
\begin{cases}
n\ge4\\
n\le6\\
6+4n\le34
\end{cases}
$$

Nella terza condizione si sottrae $6$ e si divide per $4$, ottenendo $n\le7$. Ogni numero che rispetta $n\le6$ rispetta anche $n\le7$, quindi il limite superiore più stretto è quello della capienza. Resta $4\le n\le6$ e i gruppi ammessi sono di quattro, cinque o sei persone. Sette persone costerebbero $6+4\cdot7=34$ euro e rientrerebbero nel budget, ma richiederebbero una postazione in più.
:::

:::esempio{titolo="Contare gli incrementi dal primo termine"}
Un’attività assegna $5$ punti alla prima tappa e, a ogni tappa successiva, $3$ punti in più rispetto alla precedente. I punteggi delle prime tappe sono $5$, $8$, $11$, $14$. Un **incremento** è un aumento di $3$ punti. Alla seconda tappa c’è un incremento, alla terza ce ne sono due e alla tappa $n$ ce ne sono $n-1$, perché nella prima tappa si parte già da $5$. Il punteggio nella tappa $n$, con $n$ intero positivo, è quindi $5+3(n-1)$.

La frase «il punteggio supera $20$» si traduce in $5+3(n-1)>20$.

$$
\begin{aligned}
5+3(n-1)&>20,\\[6pt]
3(n-1)&>15,\\[6pt]
n-1&>5,\\[6pt]
n&>6.
\end{aligned}
$$

Si è sottratto $5$, poi si è diviso per $3$ e infine si è aggiunto $1$. Nella sesta tappa si ottengono $5+3\cdot5=20$ punti, che non superano $20$. Nella settima se ne ottengono $23$, quindi la settima è la prima tappa ammessa.
:::
