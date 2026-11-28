---
titolo: "Numeri reali e radicali"
sommario: "Radici reali, domini, estrazione di fattori, razionalizzazione ed esponenti razionali con verifiche esatte e confronti di segno."
---

## Numeri razionali e irrazionali

:::definizione{#reali titolo="Razionali e irrazionali"}
Un numero è **razionale** se si può scrivere come frazione $\dfrac pq$, con $p$ e $q$ numeri interi e $q\ne0$. Per esempio $\dfrac38$ è razionale e, eseguendo la divisione $3:8$, si ottiene la sua scrittura decimale $0{,}375$. La scrittura decimale di un numero razionale è finita, come $0{,}375$, oppure **periodica**, cioè con un gruppo di cifre che si ripete senza fine, come $\dfrac13=0{,}333\ldots$

I **numeri reali** sono tutti i numeri che hanno una scrittura decimale, finita o infinita. I reali che non sono razionali si chiamano **irrazionali**. La loro scrittura decimale è infinita e non periodica.

Un **radicale** è un'espressione come $\sqrt2$, formata dal segno di radice e dal numero scritto sotto di esso, che si chiama **radicando**. La **radice quadrata** $\sqrt a$ di un numero $a\ge0$ (il simbolo $\ge$ si legge «maggiore o uguale») è il numero positivo o nullo che elevato al quadrato dà $a$. Per esempio $\sqrt9=3$, perché $3\ge0$ e $3^2=9$.

La diagonale di un quadrato di lato $1$ misura $\sqrt2$. La diagonale divide infatti il quadrato in due triangoli rettangoli con cateti lunghi $1$. Per il teorema di Pitagora il quadrato della diagonale è $1^2+1^2=2$, quindi la diagonale è il numero positivo il cui quadrato è $2$. La sua misura esatta è il radicale $\sqrt2$. I numeri $1{,}41$ e $1{,}42$ ne sono un'approssimazione per difetto e una per eccesso, perché
$$
1{,}41^2=1{,}9881<2,\qquad 1{,}42^2=2{,}0164>2.
$$
Da questi quadrati segue $1{,}41<\sqrt2<1{,}42$, perché tra numeri non negativi il numero con il quadrato più piccolo è anche il più piccolo. Questa proprietà si dimostra nell'ultima sezione del capitolo.

::struttura{linee="0,0 2,0 2,2 0,2 0,0;0,0 2,2" riferimento=0 etichette="1,-0.33,1;-0.32,1,1;1.07,1.42,√2" titolo="La diagonale di un quadrato unitario ha lunghezza $\sqrt2$"}
:::

::::teorema{titolo="Radici quadrate di interi"}
Un intero è un **quadrato perfetto** se è il quadrato di un intero, come $0$, $1$, $4$, $9$, $16$, $25$.

Per un intero $m\ge0$, la radice $\sqrt m$ è razionale se e solo se $m$ è un quadrato perfetto. «Se e solo se» significa che le due affermazioni sono vere insieme oppure false insieme. Per esempio $\sqrt{25}=5$ è razionale, mentre $\sqrt2$, $\sqrt3$ e $\sqrt5$ sono irrazionali.
:::dimostrazione
Si suppone che $\sqrt m$ sia razionale. Allora si può scrivere $\sqrt m=\dfrac pq$ con $q>0$ e con la frazione ridotta ai **minimi termini**, cioè con $p$ e $q$ privi di divisori comuni maggiori di $1$. Due interi con questa proprietà si dicono **coprimi**.

Elevando al quadrato si ottiene $m=\dfrac{p^2}{q^2}$, quindi $p^2=mq^2$. Perciò $q^2$ divide $p^2$.

I fattori primi di un quadrato sono gli stessi della sua base. Poiché $p$ e $q$ non hanno fattori primi comuni, anche $p^2$ e $q^2$ non ne hanno. Un numero positivo che divide $p^2$ senza avere fattori primi comuni con $p^2$ è $1$, quindi $q^2=1$ e $q=1$. Ne segue $m=p^2$, cioè $m$ è un quadrato perfetto.

Viceversa, se $m=p^2$ per un intero $p$, allora $\sqrt m$ è il numero non negativo fra $p$ e $-p$. Questo intero è razionale.
:::
::::

:::esempio{titolo="Come cambia la razionalità nei calcoli"}
La radice $\sqrt2$ è irrazionale per il teorema precedente, perché $2$ non è un quadrato perfetto. Da questo fatto si ricavano altri casi.

- Il numero $3\sqrt2$ è irrazionale. Se fosse uguale a un razionale $r$, allora $\sqrt2=\dfrac r3$ sarebbe razionale, perché il quoziente di due razionali è razionale.
- Il prodotto di due irrazionali può essere razionale. Per esempio $\sqrt8=2\sqrt2$ è irrazionale e $\sqrt2\cdot\sqrt8=\sqrt{16}=4$.
- Anche la somma di due irrazionali può essere razionale. Infatti $\sqrt2+(5-\sqrt2)=5$. Il secondo **addendo** (termine della somma) $5-\sqrt2$ è irrazionale. Se fosse uguale a un razionale $r$, allora $\sqrt2=5-r$ sarebbe razionale, perché la differenza di due razionali è razionale, in contraddizione con la dimostrazione precedente.
:::

## Radici di indice pari e dispari

:::definizione{#definizione titolo="Il valore del radicale reale"}
L'**indice** di una radice è il numero intero $n\ge2$ scritto in piccolo sul segno di radice, come il $3$ in $\sqrt[3]8$. Con indice $2$ l'indice non si scrive, quindi $\sqrt a$ indica la radice quadrata.

Se $n$ è pari e $a\ge0$, il simbolo $\sqrt[n]{a}$ indica l'unico numero non negativo $r$ che soddisfa $r^n=a$. Si chiama anche **radice principale**. Per esempio $\sqrt[4]{16}=2$, perché $2\ge0$ e $2^4=16$; anche $(-2)^4=16$, ma la radice principale è il valore non negativo $2$. Per $a<0$ la radice di indice pari non è un numero reale, perché una potenza di esponente pari di un reale è sempre maggiore o uguale a zero, come $(-3)^2=9$.

Se $n$ è dispari, $\sqrt[n]{a}$ è l'unico numero reale $r$ con $r^n=a$, ed è definita per ogni reale $a$. Il risultato ha lo stesso segno di $a$, perché una potenza di esponente dispari conserva il segno della base. Per esempio $\sqrt[3]{-8}=-2$, perché $(-2)^3=(-2)\cdot(-2)\cdot(-2)=-8$. La radice di zero vale zero sia con indice pari sia con indice dispari.
:::

:::esempio{titolo="Una radice e le soluzioni di un'equazione"}
L'equazione $u^2=4$ ha due soluzioni, $-2$ e $2$, perché $(-2)^2=4$ e $2^2=4$. La radice $\sqrt4$ è invece un solo numero, $2$, cioè la soluzione non negativa.

Nel grafico di $y=x^2$ le due soluzioni sono le **ascisse** (coordinate $x$) dei punti $A=(-2;4)$ e $B=(2;4)$, che hanno la stessa **ordinata** (coordinata $y$) uguale a $4$. Il grafico di $y=\sqrt x$ contiene il punto $C=(4;2)$, perché $\sqrt4=2$. Scambiando le coordinate di $B$ si ottiene $C$, quindi nella figura $B$ e $C$ sono simmetrici rispetto alla retta $y=x$. Allo stesso modo il grafico della radice è il simmetrico, rispetto a quella retta, del solo ramo della parabola con $x\ge0$. Per questo la radice dà un solo valore.

::grafico{f="x^2;sqrt(x);x" xmin=-2.6 xmax=4.8 ymin=-0.65 ymax=5.3 punti="-2,4,pieno,A;2,4,pieno,B;4,2,pieno,C" legenda="y=x^2;y=\sqrt{x};y=x" titolo="Al valore $4$ corrisponde la radice quadrata $2$"}
:::

## Condizioni di esistenza

:::osservazione{#dominio titolo="Quali espressioni devono essere definite"}
Il **dominio** di un'espressione che contiene una lettera $x$ è l'insieme dei numeri reali che, sostituiti a $x$, danno un numero reale. Le condizioni che lo individuano si chiamano **condizioni di esistenza**.

- Un radicale di indice pari richiede che il radicando sia definito e maggiore o uguale a zero.
- Se quel radicale è l'intero denominatore di una frazione, il suo valore deve essere anche diverso da zero, perché la divisione per zero non è definita. Una radice pari vale zero solo quando il radicando è zero, quindi la condizione diventa radicando strettamente positivo ($>0$).
- Un radicale di indice dispari non richiede un segno particolare del radicando, ma il radicando deve comunque essere definito.

La radice $\sqrt{2x-6}$ esiste quando il radicando è non negativo:
$$
2x-6\ge0\iff 2x\ge6\iff x\ge3.
$$
Il simbolo $\iff$ si legge «equivale a». Nel secondo passaggio si somma $6$ ai due membri, nel terzo si dividono per $2$, che è positivo. In $x=3$ la radice vale $\sqrt0=0$. Il reciproco $\dfrac1{\sqrt{2x-6}}$ ha la radice al denominatore, quindi richiede $2x-6>0$, cioè $x>3$. In forma di intervallo i due domini si scrivono $[3,+\infty)$ e $(3,+\infty)$. Il simbolo $[$ indica che l'estremo $3$ è compreso, il simbolo $($ che è escluso, e $+\infty$ (più infinito) indica che l'intervallo prosegue senza fine verso destra.

Nella figura il punto $A=(3;0)$ appartiene al grafico della radice. La linea verticale tratteggiata $x=3$ indica il valore escluso dal reciproco. Il punto $B=\left(\dfrac72;1\right)$ appartiene a entrambi i grafici, perché per $x=\dfrac72$ il radicando vale $7-6=1$ e quindi la radice e il suo reciproco valgono $1$.

::grafico{f="sqrt(2*x-6);1/sqrt(2*x-6)" xmin=-0.6 xmax=7.4 ymin=-0.6 ymax=3.6 punti="3,0,pieno,A;3.5,1,pieno,B" asintoti="x=3" legenda="y=\sqrt{2x-6};y=\dfrac1{\sqrt{2x-6}}" titolo="La radice ammette $x=3$, il suo reciproco esclude quel valore"}
:::

:::esempio{titolo="Un quoziente sotto il radicale"}
Per $\sqrt{\dfrac{x-1}{x+2}}$ il quoziente deve essere definito e maggiore o uguale a zero. Il denominatore $x+2$ si annulla in $-2$, quindi $x=-2$ è escluso. Il numeratore $x-1$ si annulla in $1$, dove il denominatore vale $3$ e il quoziente vale zero. I numeri $-2$ e $1$ dividono la retta in tre intervalli. In ciascuno si legge il segno dei due fattori. Il quoziente è positivo se i fattori hanno lo stesso segno e negativo se hanno segni opposti.

| Intervallo | $x-1$ | $x+2$ | Quoziente |
| --- | --- | --- | --- |
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

Il dominio è $(-\infty,-2)\cup[1,+\infty)$. Il simbolo $-\infty$ (meno infinito) indica che il primo intervallo prosegue senza fine verso sinistra, e il simbolo $\cup$ (unione) indica che si prendono insieme i numeri dei due intervalli. Il valore $-2$ resta escluso e $1$ è ammesso. Per esempio $x=-3$ appartiene al ramo a sinistra e dà il punto $(-3;2)$ della figura:
$$
\frac{-3-1}{-3+2}=\frac{-4}{-1}=4,\qquad\sqrt4=2.
$$
La linea verticale tratteggiata indica il valore escluso $-2$. Per $x$ molto grande o molto negativo il quoziente si avvicina a $1$, e il grafico si avvicina alla linea orizzontale tratteggiata $y=1$.

::grafico{f="sqrt((x-1)/(x+2))" xmin=-7 xmax=7 ymin=-0.5 ymax=3.2 punti="-3,2;1,0,pieno,A" asintoti="x=-2;y=1" legenda="y=\sqrt{\dfrac{x-1}{x+2}}" titolo="La radice è definita a sinistra di $-2$ e da $1$ in poi"}
:::

:::esempio{titolo="Vincoli di due radici sovrapposte"}
Nell'espressione $\sqrt{2-\sqrt x}$ una radice è contenuta nell'altra.

- La radice interna $\sqrt x$ richiede $x\ge0$.
- La radice esterna richiede $2-\sqrt x\ge0$, cioè $\sqrt x\le2$.

Per $x\ge0$ i due membri di $\sqrt x\le2$ sono non negativi. Tra numeri non negativi elevare al quadrato conserva l'ordine, quindi $\sqrt x\le2$ equivale a $x\le4$. Le due condizioni devono valere insieme:
$$
\begin{cases}
x\ge0\\
x\le4
\end{cases}
$$
Perciò il dominio è l'intervallo $[0,4]$, con entrambi gli estremi compresi. In $x=4$ la radice interna vale $2$ e quella esterna vale $\sqrt{2-2}=0$.
:::

:::osservazione{titolo="Il denominatore può contenere più termini"}
Quando il denominatore è una somma o una differenza, il controllo si fa in due passi. Prima si verifica che ogni radicale esista, poi che l'intero denominatore sia diverso da zero.

- In $\dfrac1{\sqrt x+1}$ la radice richiede $x\ge0$. Il denominatore $\sqrt x+1$ è sempre maggiore o uguale a $1$, quindi non si annulla. Anche $x=0$ è ammesso, perché lì il denominatore vale $1$.
- In $\dfrac1{\sqrt x-1}$ la radice richiede ancora $x\ge0$. Il denominatore si annulla quando $\sqrt x=1$, cioè per $x=1$. Quindi si esclude $x=1$, dove la radice esiste ma la differenza vale zero.

Nel reciproco $\dfrac1{\sqrt[3]{x-2}}$ la radice ha indice dispari, quindi esiste per ogni $x$. Basta perciò escludere $x=2$, dove il denominatore vale $\sqrt[3]0=0$. Per esempio, in $x=1$ la radice al denominatore è $\sqrt[3]{-1}=-1$, quindi il valore del reciproco è $-1$.
:::

## Estrazione di fattori e riduzione dell'indice

::::teorema{#semplificazione titolo="Fattori quadrati e valore assoluto"}
Il **valore assoluto** (o **modulo**) $|k|$ di un numero $k$ è il numero stesso senza il suo segno: $|k|=k$ se $k\ge0$ e $|k|=-k$ se $k<0$. Per esempio $|5|=5$ e $|-5|=5$. Sulla retta dei numeri $|k|$ è la distanza di $k$ da $0$, e $|x-3|$ è la distanza di $x$ da $3$.

Per $a\ge0$ e $k$ reale qualsiasi (in simboli $k\in\mathbb R$, dove $\mathbb R$ indica l'insieme dei numeri reali) vale
$$
\sqrt{k^2a}=|k|\sqrt a.
$$
Portare fuori dalla radice un fattore in questo modo si chiama **estrazione** del fattore. In particolare, con $a=1$, si ha $\sqrt{x^2}=|x|$ per ogni reale $x$. Per esempio $\sqrt{(-3)^2}=\sqrt9=3=|-3|$.
:::dimostrazione
Per la definizione, $\sqrt{k^2a}$ è l'unico numero non negativo il cui quadrato è $k^2a$. Si verificano quindi due fatti sul numero $|k|\sqrt a$.

- È non negativo, perché è il prodotto di due numeri non negativi.
- Il suo quadrato è $(|k|\sqrt a)^2=|k|^2(\sqrt a)^2=k^2a$, perché $|k|^2=k^2$ e $(\sqrt a)^2=a$.

Quindi $|k|\sqrt a$ ha entrambe le proprietà che identificano la radice quadrata di $k^2a$ e coincide con essa.
:::
::::

:::esempio{titolo="Estrazione con coefficienti e indici diversi"}
Per estrarre un fattore si scrive il radicando come prodotto in cui compare un quadrato. Poiché $72=36\cdot2=6^2\cdot2$, si ha
$$
\sqrt{72}=\sqrt{6^2\cdot2}=6\sqrt2.
$$
Se il fattore dipende dalla lettera, fuori dalla radice compare il valore assoluto:
$$
\sqrt{18x^2}=\sqrt{(3x)^2\cdot2}=|3x|\sqrt2=3|x|\sqrt2.
$$
Per $x=-2$ questo vale $3\cdot2\sqrt2=6\sqrt2$.

L'ordine delle operazioni comporta condizioni diverse.

- In $(\sqrt x)^2$ si calcola prima la radice, quindi ci si limita a $x\ge0$ e si ottiene $x$.
- In $\sqrt{x^2}$ si calcola prima il quadrato, che è non negativo per ogni $x$. L'espressione è quindi definita anche per $x=-2$ e in quel punto vale $\sqrt4=2$.

**Ridurre l'indice** significa scrivere un radicale con un indice più piccolo. Con un radicando positivo si dividono l'indice e l'esponente del radicando per uno stesso numero. Per esempio $\sqrt[4]9=\sqrt[4]{3^2}=\sqrt3$, perché $\sqrt3$ è positivo e $(\sqrt3)^4=3^2=9$.

Quando il radicando contiene una lettera, il cambiamento d'indice va controllato con la definizione. La radice $\sqrt[3]{|x|}$ è non negativa e la sua sesta potenza è
$$
\left(\sqrt[3]{|x|}\right)^6=\left(\left(\sqrt[3]{|x|}\right)^3\right)^2=|x|^2=x^2.
$$
Perciò $\sqrt[6]{x^2}=\sqrt[3]{|x|}$ per ogni reale $x$. Il valore assoluto è necessario, perché nel punto $x=-8$ si ha $\sqrt[6]{(-8)^2}=\sqrt[6]{64}=2$, mentre $\sqrt[3]{-8}=-2$. Nella figura questi valori sono i punti $A=(-8;2)$ e $B=(-8;-2)$. Per $x\ge0$ i due grafici coincidono, come nel punto $(8;2)$.

::grafico{f="cbrt(abs(x));cbrt(x)" xmin=-10 xmax=10 ymin=-2.8 ymax=2.8 punti="-8,2,pieno,A;-8,-2,pieno,B;8,2" legenda="y=\sqrt[6]{x^2};y=\sqrt[3]{x}" titolo="La radice sesta di $x^2$ rimane non negativa anche per $x<0$"}
:::

:::attenzione{titolo="Un fattore nullo può lasciare un punto isolato"}
Il radicando $x^2(x-1)$ è il prodotto di $x^2$, che è sempre maggiore o uguale a zero, e di $x-1$. Il prodotto è non negativo in due casi.

- Per $x\ge1$, perché entrambi i fattori sono non negativi.
- Per $x=0$, perché il fattore $x^2$ vale zero e quindi il prodotto vale $0\cdot(-1)=0$.

Estraendo il fattore $x^2$ si ottiene la forma $|x|\sqrt{x-1}$, che è definita solo per $x\ge1$ perché contiene $\sqrt{x-1}$. Le due forme coincidono in quell'intervallo, ma la formula iniziale ammette anche $x=0$. Nella figura è il punto $A=(0;0)$, un **punto isolato**, cioè separato dal resto del grafico, che parte da $B=(1;0)$.

::grafico{f="sqrt(x*x*(x-1))" xmin=-1.5 xmax=4.0 ymin=-0.65 ymax=7.5 punti="0,0,pieno,A;1,0,pieno,B;2,2" legenda="y=\sqrt{x^2(x-1)}" titolo="Nel dominio compare anche $0$, benché $x-1$ sia negativo in quel punto"}
:::

## Operazioni con radicali

::::teorema{#operazioni titolo="Prodotti e quozienti di radicali dello stesso indice"}
Due radicali con lo stesso indice si moltiplicano moltiplicando i radicandi, come in $\sqrt3\cdot\sqrt{12}=\sqrt{36}=6$. Con indice pari $n$ si assumono $a,b\ge0$. Con indice dispari si ammettono tutti i reali $a,b$. Allora
$$
\sqrt[n]{a}\sqrt[n]{b}=\sqrt[n]{ab}.
$$
Se inoltre $b\ne0$, vale $\dfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{\dfrac ab}$. Per esempio $\dfrac{\sqrt{75}}{\sqrt3}=\sqrt{25}=5$.
:::dimostrazione
Si eleva il prodotto $\sqrt[n]a\sqrt[n]b$ alla potenza $n$. Per la regola $(xy)^n=x^ny^n$ si ottiene $(\sqrt[n]a)^n(\sqrt[n]b)^n=ab$.

- Se $n$ è pari, i due fattori sono non negativi, quindi anche il prodotto è non negativo. L'unico numero non negativo con potenza $n$-esima uguale ad $ab$ è $\sqrt[n]{ab}$, perciò il prodotto coincide con esso.
- Se $n$ è dispari, esiste un solo numero reale con potenza $n$-esima uguale ad $ab$, cioè $\sqrt[n]{ab}$, perciò il prodotto coincide con esso.

Per il quoziente si procede allo stesso modo con la regola $\left(\dfrac xy\right)^n=\dfrac{x^n}{y^n}$, dopo aver controllato che il denominatore sia diverso da zero.
:::
::::

:::esempio{titolo="Raggruppare dopo l'estrazione"}
Due radicali sono **simili** quando hanno lo stesso indice e lo stesso radicando, come $4\sqrt3$ e $-2\sqrt3$. I numeri $4$ e $-2$ che li moltiplicano si chiamano **coefficienti**. Radicali simili si sommano sommando i coefficienti, come i monomi simili. Radicali con radicandi diversi possono diventare simili dopo l'estrazione:
$$
\begin{aligned}
\sqrt{48}-\sqrt{12}+\sqrt8
&=\sqrt{16\cdot3}-\sqrt{4\cdot3}+\sqrt{4\cdot2}\\[6pt]
&=4\sqrt3-2\sqrt3+2\sqrt2\\[6pt]
&=(4-2)\sqrt3+2\sqrt2\\[6pt]
&=2\sqrt3+2\sqrt2.
\end{aligned}
$$
I termini in $\sqrt3$ hanno coefficienti $4$ e $-2$ e si raccolgono. Il termine in $\sqrt2$ ha un altro radicando, quindi costituisce un altro gruppo.

La radice di una somma è diversa dalla somma delle radici. Per esempio $\sqrt{9+16}=\sqrt{25}=5$, mentre $\sqrt9+\sqrt{16}=3+4=7$.
:::

:::attenzione{titolo="Il prodotto sotto una radice può avere un dominio più ampio"}
Il prodotto $\sqrt{x-1}\sqrt{x+2}$ richiede che esistano entrambi i fattori:
$$
\begin{cases}
x-1\ge0\\
x+2\ge0
\end{cases}
\iff
\begin{cases}
x\ge1\\
x\ge-2
\end{cases}
\iff x\ge1.
$$
Il radicale $\sqrt{(x-1)(x+2)}$ richiede soltanto che il prodotto $(x-1)(x+2)$ sia non negativo. Questo accade per $x\ge1$ e anche per $x\le-2$, perché in questo intervallo i due fattori sono entrambi negativi o nulli e il loro prodotto è non negativo. Per esempio in $x=-3$ il prodotto vale $(-4)\cdot(-1)=4$ e la sua radice vale $2$, mentre le due radici separate $\sqrt{-4}$ e $\sqrt{-1}$ non sono reali. Quindi l'uguaglianza $\sqrt{x-1}\sqrt{x+2}=\sqrt{(x-1)(x+2)}$ vale solo per $x\ge1$.
:::

:::esempio{titolo="Il dominio di un quoziente dopo la semplificazione"}
Nel quoziente $\dfrac{\sqrt{x^2-1}}{\sqrt{x-1}}$ il denominatore è una radice, quindi impone $x-1>0$, cioè $x>1$. Il numeratore si scompone come differenza di quadrati, $x^2-1=(x-1)(x+1)$. Per $x>1$ entrambi i fattori sono positivi, quindi la condizione $x>1$ basta anche per il numeratore. Nei punti ammessi si usa la regola del quoziente e si semplifica il fattore $x-1$, che è diverso da zero:
$$
\begin{aligned}
\frac{\sqrt{x^2-1}}{\sqrt{x-1}}
&=\sqrt{\frac{(x-1)(x+1)}{x-1}}\\[6pt]
&=\sqrt{x+1}.
\end{aligned}
$$
La radice finale, da sola, sarebbe definita per $x\ge-1$. Il quoziente iniziale invece non è definito per $x\le1$; per esempio in $x=1$ il denominatore $\sqrt{x-1}$ vale zero. Quindi i valori della forma finale si possono usare soltanto conservando il vincolo $x>1$.
:::

## Razionalizzare un singolo radicale

:::definizione{#razionalizzazione titolo="Un fattore che completa la potenza"}
**Razionalizzare** una frazione significa eliminare i radicali dal suo denominatore. Con un denominatore numerico si cerca una frazione equivalente, cioè con lo stesso valore, che abbia denominatore razionale. Si moltiplicano numeratore e denominatore per uno stesso fattore diverso da zero, quindi il valore del quoziente si conserva. Per esempio, moltiplicando per $\sqrt3$,
$$
\frac4{\sqrt3}=\frac{4\sqrt3}{\sqrt3\cdot\sqrt3}=\frac{4\sqrt3}{3}.
$$

Con indice $n$, si considera un denominatore $\sqrt[n]{b^r}$ formato da una potenza di un numero razionale positivo $b$, con $1\le r<n$. Lo si moltiplica per $\sqrt[n]{b^{n-r}}$. Il prodotto è
$$
\sqrt[n]{b^r}\cdot\sqrt[n]{b^{n-r}}=\sqrt[n]{b^{r+n-r}}=\sqrt[n]{b^n}=b,
$$
perché gli esponenti si sommano e la loro somma è $n$. Quindi il nuovo denominatore è il numero razionale $b$.
:::

:::esempio{titolo="Razionalizzazione con una radice cubica"}
Il denominatore è $\sqrt[3]9=\sqrt[3]{3^2}$. Sotto la radice cubica ci sono due fattori $3$, mentre per ottenere la terza potenza $3^3$ ne servono tre. Il fattore mancante è quindi $\sqrt[3]3$, che è positivo. Si moltiplicano numeratore e denominatore per quel fattore.
$$
\begin{aligned}
\frac{5}{\sqrt[3]9}
&=\frac{5\sqrt[3]3}{\sqrt[3]{9\cdot3}}\\[6pt]
&=\frac{5\sqrt[3]3}{\sqrt[3]{27}}\\[6pt]
&=\frac{5\sqrt[3]3}{3}.
\end{aligned}
$$
Se il denominatore dipende da $x$, si verifica che il fattore scelto sia definito e diverso da zero per tutti i valori del dominio, perché altrimenti la moltiplicazione cambierebbe il dominio. Ad esempio $\dfrac1{\sqrt x}$ è definita per $x>0$. Su questo dominio $\sqrt x\ne0$ e $\sqrt x\cdot\sqrt x=x$, quindi $\dfrac1{\sqrt x}$ si riscrive $\dfrac{\sqrt x}{x}$.
:::

:::esempio{titolo="Il segno di un denominatore dispari"}
Per il denominatore $\sqrt[3]{-2}$ si sceglie il fattore $\sqrt[3]4$, perché $(-2)\cdot4=-8=(-2)^3$ è un cubo. Il nuovo denominatore è la radice cubica di $-8$, cioè $-2$.
$$
\frac1{\sqrt[3]{-2}}
=\frac{\sqrt[3]4}{\sqrt[3]{-8}}
=\frac{\sqrt[3]4}{-2}
=-\frac{\sqrt[3]4}{2}.
$$
Il fattore scelto è positivo, quindi il risultato ha lo stesso segno del quoziente iniziale. Entrambi sono negativi, perché $\sqrt[3]{-2}<0$. Il procedimento usa la radice cubica del numero negativo $-8$, che esiste perché l'indice è dispari.
:::

## Il coniugato

::::teorema{#coniugato titolo="Prodotto di una somma per la sua differenza"}
Siano $u$ e $v$ due espressioni reali. La somma $u+v$ e la differenza $u-v$ si chiamano **coniugate** nella razionalizzazione di un denominatore. Per esempio $\sqrt5+\sqrt2$ e $\sqrt5-\sqrt2$ sono coniugate. Il loro prodotto è
$$
(u+v)(u-v)=u^2-v^2.
$$
Con $u$ e $v$ radici quadrate, i quadrati $u^2$ e $v^2$ non contengono più radici, quindi questo prodotto elimina i radicali da un denominatore formato da due termini.
:::dimostrazione
Per la proprietà distributiva si moltiplica ogni termine della prima espressione per ogni termine della seconda:
$$
(u+v)(u-v)=u^2-uv+vu-v^2.
$$
I contributi misti $-uv$ e $vu$ sono opposti e si annullano. Restano $u^2$ e $-v^2$. Se $u=\sqrt a$ e $v=\sqrt b$, con $a,b\ge0$, si ha $u^2=a$ e $v^2=b$, quindi il risultato è $a-b$.
:::
::::

:::esempio{titolo="Una differenza di radici al denominatore"}
Per $\dfrac1{\sqrt5-\sqrt2}$ il coniugato del denominatore è $\sqrt5+\sqrt2$, che è positivo e quindi diverso da zero. Si moltiplicano numeratore e denominatore per esso:
$$
\frac1{\sqrt5-\sqrt2}
=\frac{\sqrt5+\sqrt2}{(\sqrt5-\sqrt2)(\sqrt5+\sqrt2)}
=\frac{\sqrt5+\sqrt2}{5-2}
=\frac{\sqrt5+\sqrt2}{3}.
$$
Lo stesso procedimento vale per ogni denominatore $\sqrt a-\sqrt b$ diverso da zero. In quel caso $\sqrt a\ne\sqrt b$, quindi almeno uno dei due radicali è positivo. La loro somma è allora positiva, perciò è un fattore non nullo per tutti i valori del dominio della frazione.
:::

:::attenzione{titolo="Il coniugato di una somma può annullarsi"}
La frazione $\dfrac1{\sqrt x+2}$ è definita per $x\ge0$, perché il denominatore $\sqrt x+2$ vale almeno $2$. Il coniugato $\sqrt x-2$ invece si annulla in $x=4$, perché $\sqrt4=2$. In quel punto la frazione iniziale vale $\dfrac1{2+2}=\dfrac14$. Per $x\ge0$ e $x\ne4$ vale
$$
\frac1{\sqrt x+2}
=\frac{\sqrt x-2}{(\sqrt x+2)(\sqrt x-2)}
=\frac{\sqrt x-2}{x-4}.
$$
La nuova formula non è definita in $x=4$, dove il denominatore $x-4$ vale zero. La forma con denominatore $x-4$ va quindi accompagnata dal valore $\dfrac14$ in $x=4$ per rappresentare tutta la funzione iniziale. Nella figura il punto vuoto $A=\left(4;\dfrac14\right)$ indica il valore che manca alla sola formula trasformata. Il punto $B=\left(0;\dfrac12\right)$ è il valore in $x=0$, dove il denominatore iniziale vale $2$.

::grafico{f="1/(sqrt(x)+2)" xmin=-1.25 xmax=11 ymin=-0.09 ymax=0.65 punti="4,0.25,vuoto,A;0,0.5,pieno,B" legenda="y=\dfrac{\sqrt{x}-2}{x-4}\quad(x\ge0,\ x\ne4)" titolo="Il quoziente con denominatore $x-4$ perde il punto $(4;\dfrac14)$"}
:::

## Potenze razionali

::::teorema{#potenze titolo="Una potenza per ogni esponente razionale"}
Un esponente frazionario indica una radice. Il denominatore dell'esponente è l'indice della radice e il numeratore è l'esponente del radicando. Per $a>0$, $p$ intero e $q$ intero positivo, si definisce
$$
a^{\frac pq}=\sqrt[q]{a^p}=(\sqrt[q]a)^p.
$$
Per esempio $4^{\frac32}=(\sqrt4)^3=2^3=8$. Per $q=1$ si intende la consueta potenza intera $a^p$. Il valore dipende soltanto dal numero $\dfrac pq$, indipendentemente dalla frazione che lo rappresenta. Per esempio $8^{\frac13}=\sqrt[3]8=2$ e $8^{\frac26}=\sqrt[6]{64}=2$.
:::dimostrazione
Le due forme con la radice sono numeri positivi. Elevate alla potenza $q$, danno entrambe $a^p$:
$$
\left(\sqrt[q]{a^p}\right)^q=a^p,\qquad
\left((\sqrt[q]a)^p\right)^q=\left((\sqrt[q]a)^q\right)^p=a^p.
$$
Esiste un solo numero positivo con potenza $q$-esima uguale ad $a^p$ (unicità della radice positiva), quindi le due forme coincidono.

Se $\dfrac pq=\dfrac rs$ con $s>0$, allora $ps=rq$, e anche $a^{\frac rs}$ è positivo. Elevando le due potenze a $qs$ si ottiene
$$
\left(a^{\frac pq}\right)^{qs}=\left(\left(a^{\frac pq}\right)^q\right)^s=(a^p)^s=a^{ps},\qquad
\left(a^{\frac rs}\right)^{qs}=\left(\left(a^{\frac rs}\right)^s\right)^q=(a^r)^q=a^{rq}.
$$
Poiché $ps=rq$, i due risultati sono uguali. Per l'unicità della radice positiva di indice $qs$, anche $a^{\frac pq}$ e $a^{\frac rs}$ coincidono.
:::
::::

:::esempio{titolo="Esponente negativo e scelta della base"}
Un esponente negativo indica il reciproco, cioè $a^{-m}=\dfrac1{a^m}$. Il calcolo di $27^{-\frac23}$ usa prima il reciproco, poi la radice cubica $\sqrt[3]{27}=3$ e infine il quadrato:
$$
27^{-\frac23}=\frac1{27^{\frac23}}=\frac1{\left(\sqrt[3]{27}\right)^2}=\frac1{3^2}=\frac19.
$$
La definizione si può estendere alla base zero per esponenti positivi, ponendo $0^{\frac pq}=0$ quando $p>0$ e $q>0$. Un esponente negativo con base zero richiederebbe il reciproco di zero, che non è definito.

La dimostrazione precedente usa una base positiva, e questa restrizione è necessaria. Usando comunque $\sqrt[q]{a^p}$ con $a=-8$, le frazioni equivalenti $\dfrac13$ e $\dfrac26$ darebbero valori diversi. Infatti
$$
\sqrt[3]{-8}=-2,\qquad\sqrt[6]{(-8)^2}=\sqrt[6]{64}=2.
$$
:::

:::esempio{titolo="Confrontare due potenze della stessa base"}
Per $x>0$ si ha $x^{\frac32}=\sqrt{x^3}=\sqrt{x^2\cdot x}=x\sqrt x$. Quindi $x^{\frac32}$ si ottiene moltiplicando $\sqrt x=x^{\frac12}$ per $x$.

- Se $0<x<1$, il prodotto per $x$ diminuisce il valore positivo $\sqrt x$, perché $x$ è minore di $1$. Quindi $x^{\frac32}<x^{\frac12}$.
- Se $x>1$, il prodotto per $x$ lo aumenta. Quindi $x^{\frac32}>x^{\frac12}$.
- Per $x=1$ le due potenze valgono $1$, e nel grafico si incontrano nel punto $A=(1;1)$.

Per esempio in $x=2{,}25$ si ha $\sqrt{2{,}25}=1{,}5$ e $2{,}25\cdot1{,}5=3{,}375$; sono i due punti segnati a destra. L'origine appartiene ai due grafici, perché per esponenti positivi si pone $0^{\frac pq}=0$.

::grafico{f="sqrt(x);x*sqrt(x)" xmin=-0.35 xmax=2.85 ymin=-0.3 ymax=4.75 punti="0,0,pieno;1,1,pieno,A;2.25,1.5,pieno;2.25,3.375,pieno" legenda="y=x^{\frac12};y=x^{\frac32}" titolo="In $x=1$ le due potenze coincidono e si inverte il loro ordine"}
:::

:::osservazione{titolo="Una potenza di una potenza razionale"}
Anche con esponenti razionali la potenza di una potenza si calcola moltiplicando gli esponenti. Per esempio $8^{\frac23}=(\sqrt[3]8)^2=2^2=4$ e $\left(8^{\frac23}\right)^{\frac12}=\sqrt4=2$. Moltiplicando gli esponenti si ottiene $\dfrac23\cdot\dfrac12=\dfrac13$, quindi direttamente $8^{\frac13}=2$.

In generale, sia $a>0$ e siano $\dfrac pq$ e $\dfrac rs$ due esponenti con $q,s>0$. I due numeri positivi $(a^{\frac pq})^{\frac rs}$ e $a^{\frac{pr}{qs}}$ danno entrambi $a^{pr}$ se elevati alla potenza $qs$. Per il secondo questo segue dalla definizione. Il primo, elevato alla potenza $s$, dà $(a^{\frac pq})^r$; la successiva potenza $q$ dà $(a^p)^r=a^{pr}$. Per l'unicità della radice positiva di indice $qs$, le due espressioni coincidono.
:::

## Ordinamento e confronti esatti

:::osservazione{#confronti titolo="Confrontare quadrati dopo aver controllato il segno"}
Tra numeri non negativi elevare al quadrato conserva l'ordine. Se $0\le u<v$, allora
$$
v^2-u^2=(v-u)(v+u)>0,
$$
perché entrambi i fattori sono positivi. Infatti $v-u>0$ poiché $u<v$, e $v+u>0$ poiché $v>0$. Quindi $u^2<v^2$.

Vale anche il contrario. Se $u^2<v^2$ per due numeri non negativi, allora $u<v$. Infatti $u\ge v$ è impossibile, perché per la regola precedente darebbe $u^2\ge v^2$.

Con questa regola due radicali positivi si confrontano senza approssimarli. Per esempio $2\sqrt3<3\sqrt2$, perché i quadrati sono $(2\sqrt3)^2=4\cdot3=12$ e $(3\sqrt2)^2=9\cdot2=18$, e $12<18$.

Per ordinare i numeri negativi $-2\sqrt3$ e $-3\sqrt2$ si parte dal confronto fra i loro opposti positivi, $2\sqrt3<3\sqrt2$. Moltiplicando per $-1$ i due membri di una disuguaglianza si inverte il verso, quindi $-2\sqrt3>-3\sqrt2$.
:::

:::osservazione{titolo="Confrontare mediante i cubi"}
Elevare al cubo conserva l'ordine fra tutti i numeri reali.

- Se $0\le u<v$, il prodotto $(v-u)(v^2+uv+u^2)$ vale $v^3-u^3$. Il primo fattore è positivo e il secondo è positivo, perché $v^2>0$ e gli altri due termini sono non negativi. Quindi $u^3<v^3$.
- Tra due numeri negativi si passa agli opposti positivi, si confrontano i loro cubi e si cambia nuovamente segno, poiché $(-u)^3=-u^3$.
- Se i numeri sono da parti opposte di zero, il cubo del numero negativo è negativo e quello dell'altro è non negativo, quindi l'ordine si conserva.

Lo stesso vale per le radici cubiche, perché il cubo di $\sqrt[3]a$ è $a$. Per esempio $\sqrt[3]{-9}<-2$, perché il cubo di $\sqrt[3]{-9}$ è $-9$, il cubo di $-2$ è $-8$ e $-9<-8$.
:::

:::esempio{titolo="Stimare una somma di due radici"}
Si può localizzare $\sqrt7+\sqrt2$ fra $4$ e $5$ senza arrotondare.

- Poiché $7<9$, si ha $\sqrt7<\sqrt9=3$. Poiché $2<4$, si ha $\sqrt2<\sqrt4=2$. Sommando, $\sqrt7+\sqrt2<3+2=5$.
- Per il limite inferiore si calcola il quadrato della somma con la formula del quadrato di un binomio, $(u+v)^2=u^2+2uv+v^2$:
$$
(\sqrt7+\sqrt2)^2=7+2\sqrt7\sqrt2+2=9+2\sqrt{14}.
$$
Ora $2\sqrt{14}>7$, perché i due numeri sono positivi e i loro quadrati sono $4\cdot14=56$ e $49$. Il quadrato della somma è quindi maggiore di $9+7=16=4^2$. Poiché la somma è positiva, ne segue $\sqrt7+\sqrt2>4$.
:::

:::esempio{titolo="Confrontare differenze di radici"}
La differenza fra due radici vicine si può riscrivere con il coniugato. Per $x\ge0$ la somma $\sqrt{x+1}+\sqrt x$ è positiva, quindi si possono moltiplicare numeratore e denominatore per essa:
$$
\begin{aligned}
\sqrt{x+1}-\sqrt x
&=\frac{(\sqrt{x+1}-\sqrt x)(\sqrt{x+1}+\sqrt x)}{\sqrt{x+1}+\sqrt x}\\[6pt]
&=\frac{(x+1)-x}{\sqrt{x+1}+\sqrt x}\\[6pt]
&=\frac1{\sqrt{x+1}+\sqrt x}.
\end{aligned}
$$
Aumentando $x$ crescono entrambe le radici al denominatore, quindi cresce il denominatore e il reciproco diminuisce. Per esempio $\sqrt5-\sqrt4$ corrisponde a $x=4$ e $\sqrt{50}-\sqrt{49}$ corrisponde a $x=49$. Poiché $4<49$, si ha $\sqrt5-\sqrt4>\sqrt{50}-\sqrt{49}$. Il punto $A$ del grafico corrisponde a $x=0$, dove la differenza vale $\sqrt1-\sqrt0=1$.

::grafico{f="sqrt(x+1)-sqrt(x)" xmin=-0.7 xmax=12 ymin=-0.25 ymax=1.23 punti="0,1,pieno,A" legenda="y=\sqrt{x+1}-\sqrt{x}" titolo="La differenza è positiva e diminuisce perché cresce la somma al denominatore della forma equivalente"}
:::
