---
titolo: "Numeri reali e radicali"
sommario: "Radici reali, domini, estrazione di fattori, razionalizzazione ed esponenti razionali con verifiche esatte e confronti di segno."
---

## Numeri razionali e irrazionali

:::definizione{#reali titolo="Razionali e irrazionali"}
Un numero è **razionale** se si può scrivere come $\dfrac pq$, con $p$ e $q$ interi e $q\ne0$. La sua scrittura decimale è finita oppure periodica. I reali che non sono razionali si chiamano **irrazionali**. La loro scrittura decimale è infinita e non periodica. Per esempio $\dfrac38=0{,}375$ è razionale.

La diagonale di un quadrato di lato uno ha lunghezza $\sqrt2$, poiché il quadrato della lunghezza è $1^2+1^2=2$. La misura esatta è data dal radicale. I numeri $1{,}41$ e $1{,}42$ forniscono due limiti per questa misura. Infatti i loro quadrati sono rispettivamente $1{,}9881$ e $2{,}0164$. Tra numeri non negativi il quadrato conserva l'ordine, come si verifica nell'ultima sezione.

::struttura{linee="0,0 2,0 2,2 0,2 0,0;0,0 2,2" riferimento=0 etichette="1,-0.33,1;-0.32,1,1;1.07,1.42,√2" titolo="La diagonale di un quadrato unitario ha lunghezza $\sqrt2$"}
:::

::::teorema{titolo="Radici quadrate di interi"}
Per un intero $m\ge0$, la radice $\sqrt m$ è razionale se e solo se $m$ è un quadrato perfetto.
:::dimostrazione
Se $\sqrt m$ è razionale, si scrive $\sqrt m=\dfrac pq$ in minimi termini, con $q>0$. Elevando al quadrato si ottiene $p^2=mq^2$, dunque $q^2$ divide $p^2$. Poiché $p$ e $q$ sono coprimi, anche i loro quadrati sono coprimi. Ne segue $q=1$, quindi $m=p^2$. In senso inverso, se $m=p^2$ per qualche intero $p$, allora $\sqrt m=|p|$, che è un intero.
:::
::::

:::esempio{titolo="Come cambia la razionalità nei calcoli"}
La radice $\sqrt2$ è irrazionale perché $2$ non è un quadrato perfetto. Anche $3\sqrt2$ è irrazionale. Se fosse razionale, dividendo per il numero razionale $3$ si otterrebbe la razionalità di $\sqrt2$. Due irrazionali possono però avere prodotto razionale. Per esempio $\sqrt8=2\sqrt2$ e $\sqrt2\cdot\sqrt8=4$. Anche una somma può dare un razionale. Infatti $\sqrt2+(5-\sqrt2)=5$. Il secondo addendo è irrazionale, perché se fosse razionale, sottraendolo da $5$ si otterrebbe il numero razionale $\sqrt2$, in contraddizione con la dimostrazione precedente.
:::

## Radici di indice pari e dispari

:::definizione{#definizione titolo="Il valore del radicale reale"}
L'indice di una radice è un intero $n\ge2$. Se $n$ è pari, per $a\ge0$ il simbolo $\sqrt[n]{a}$ indica l'unico numero non negativo $r$ che soddisfa $r^n=a$. Per $a<0$ la radice pari non è reale, perché la potenza pari di un reale è sempre non negativa.

Se $n$ è dispari, $\sqrt[n]{a}$ è definita per ogni reale $a$. Il risultato ha lo stesso segno di $a$, perché una potenza dispari conserva il segno. Per esempio $\sqrt[3]{-8}=-2$ perché $(-2)^3=-8$. La radice di zero vale zero con entrambi i tipi di indice.
:::

:::esempio{titolo="Una radice e le soluzioni di un'equazione"}
L'equazione $u^2=4$ ha le soluzioni $-2$ e $2$. Nel grafico di $y=x^2$ sono le ascisse dei punti $A$ e $B$, che hanno entrambi ordinata $4$. Il grafico della radice $y=\sqrt x$ contiene invece il punto $C=(4,2)$. La radice usa il ramo $x\ge0$ della potenza per individuare un solo valore. Scambiando le coordinate di $B$ si ottiene $C$, come mostra la simmetria rispetto alla retta $y=x$.

::grafico{f="x^2;sqrt(x);x" xmin=-2.6 xmax=4.8 ymin=-0.65 ymax=5.3 punti="-2,4,pieno,A;2,4,pieno,B;4,2,pieno,C" legenda="y=x^2;y=\sqrt{x};y=x" titolo="Al valore $4$ corrisponde la radice quadrata $2$"}
:::

## Condizioni di esistenza

:::osservazione{#dominio titolo="Quali espressioni devono essere definite"}
Per un radicale pari si richiede che il radicando sia definito e non negativo. Se l'intero denominatore è quel radicale, si richiede anche che il suo valore sia diverso da zero. Poiché una radice pari si annulla solo per radicando zero, la condizione diventa strettamente positiva. Un radicale dispari non richiede un segno particolare del radicando, ma il radicando deve comunque essere definito.

La radice $\sqrt{2x-6}$ esiste per $x\ge3$ e vale zero per $x=3$. Il reciproco $\dfrac1{\sqrt{2x-6}}$ esiste per $x>3$. Nella figura $A$ appartiene al grafico della radice. La linea verticale tratteggiata indica l'ascissa esclusa dal reciproco. Il punto $B$ appartiene a entrambi i grafici, perché per $x=\dfrac72$ il radicando vale uno.

::grafico{f="sqrt(2*x-6);1/sqrt(2*x-6)" xmin=-0.6 xmax=7.4 ymin=-0.6 ymax=3.6 punti="3,0,pieno,A;3.5,1,pieno,B" asintoti="x=3" legenda="y=\sqrt{2x-6};y=\dfrac1{\sqrt{2x-6}}" titolo="La radice ammette $x=3$, il suo reciproco esclude quel valore"}
:::

:::esempio{titolo="Un quoziente sotto il radicale"}
Per $\sqrt{\dfrac{x-1}{x+2}}$ occorre che il quoziente sia definito e valga almeno zero. Il fattore $x+2$ esclude $-2$. Il fattore $x-1$ si annulla in $1$, dove il denominatore è positivo. Nei tre intervalli si confrontano i segni dei due fattori.

| Intervallo | $x-1$ | $x+2$ | Quoziente |
| --- | --- | --- | --- |
| $x<-2$ | $-$ | $-$ | $+$ |
| $-2<x<1$ | $-$ | $+$ | $-$ |
| $x>1$ | $+$ | $+$ | $+$ |

Il dominio è $(-\infty,-2)\cup[1,+\infty)$. Il valore $-2$ resta escluso e $1$ è ammesso. Per esempio, nel ramo a sinistra si può scegliere $x=-3$, dove il quoziente vale $4$ e la radice vale $2$.

::grafico{f="sqrt((x-1)/(x+2))" xmin=-7 xmax=7 ymin=-0.5 ymax=3.2 punti="-3,2;1,0,pieno,A" asintoti="x=-2;y=1" legenda="y=\sqrt{\dfrac{x-1}{x+2}}" titolo="La radice è definita a sinistra di $-2$ e da $1$ in poi"}
:::

:::esempio{titolo="Vincoli di due radici sovrapposte"}
Nell'espressione $\sqrt{2-\sqrt x}$ la radice interna richiede $x\ge0$. Quella esterna richiede $2-\sqrt x\ge0$. Su $x\ge0$, i due membri di $\sqrt x\le2$ sono non negativi, quindi l'ultima condizione equivale a $x\le4$. Entrambe devono valere e il dominio è $[0,4]$. In $4$ la radice interna vale $2$ e quella esterna vale zero.
:::

:::osservazione{titolo="Il denominatore può contenere più termini"}
Quando il denominatore è una somma o una differenza, si verifica prima l'esistenza di ogni radicale e poi il non annullamento dell'intero denominatore. Per $\dfrac1{\sqrt x+1}$ il valore $x=0$ è ammesso, perché il denominatore vale uno. Per $\dfrac1{\sqrt x-1}$ lo stesso controllo esclude $x=1$, dove la radice esiste ma la differenza si annulla.

Per il reciproco $\dfrac1{\sqrt[3]{x-2}}$ basta invece escludere $x=2$. Per esempio, in $x=1$ la radice al denominatore è $-1$, quindi il valore del reciproco è $-1$.
:::

## Estrazione di fattori e riduzione dell'indice

::::teorema{#semplificazione titolo="Fattori quadrati e valore assoluto"}
Per $a\ge0$ e $k\in\mathbb R$ vale
$$
\sqrt{k^2a}=|k|\sqrt a.
$$
In particolare $\sqrt{x^2}=|x|$ per ogni reale $x$.
:::dimostrazione
Il prodotto $|k|\sqrt a$ è non negativo. Il suo quadrato è $|k|^2(\sqrt a)^2=k^2a$. Quindi ha entrambe le proprietà che identificano la radice quadrata di $k^2a$ e coincide con essa.
:::
::::

:::esempio{titolo="Estrazione con coefficienti e indici diversi"}
Poiché $72=6^2\cdot2$, si ha $\sqrt{72}=6\sqrt2$. Se il fattore dipende dalla lettera, come in $\sqrt{18x^2}=\sqrt{(3x)^2\cdot2}$, si ottiene $3|x|\sqrt2$. Per $x=-2$ questo vale $6\sqrt2$. L'ordine delle operazioni comporta condizioni diverse. In $(\sqrt x)^2$ si calcola prima la radice, quindi ci si limita a $x\ge0$ e si ottiene $x$. L'espressione $\sqrt{x^2}$, che parte dal quadrato, è definita anche per $x=-2$ e in quel punto vale $2$.

Un cambiamento d'indice va controllato con la definizione. La radice $\sqrt[3]{|x|}$ è non negativa e la sua sesta potenza è $|x|^2=x^2$. Perciò $\sqrt[6]{x^2}=\sqrt[3]{|x|}$ per ogni reale $x$. Nel punto $x=-8$ il risultato è $2$, mentre $\sqrt[3]{x}$ vale $-2$.

::grafico{f="cbrt(abs(x));cbrt(x)" xmin=-10 xmax=10 ymin=-2.8 ymax=2.8 punti="-8,2,pieno,A;-8,-2,pieno,B;8,2" legenda="y=\sqrt[6]{x^2};y=\sqrt[3]{x}" titolo="La radice sesta di $x^2$ rimane non negativa anche per $x<0$"}
:::

:::attenzione{titolo="Un fattore nullo può lasciare un punto isolato"}
Il radicando $x^2(x-1)$ è non negativo per $x\ge1$ e anche per $x=0$. In zero si annulla infatti il fattore $x^2$, mentre $x-1=-1$. La forma $|x|\sqrt{x-1}$ è definita solo per $x\ge1$. Coincide con il radicale iniziale in quell'intervallo, ma la formula iniziale ammette anche lo zero isolato $A$ della figura.

::grafico{f="sqrt(x*x*(x-1))" xmin=-1.5 xmax=4.0 ymin=-0.65 ymax=7.5 punti="0,0,pieno,A;1,0,pieno,B;2,2" legenda="y=\sqrt{x^2(x-1)}" titolo="Nel dominio compare anche $0$, benché $x-1$ sia negativo in quel punto"}
:::

## Operazioni con radicali

::::teorema{#operazioni titolo="Prodotti e quozienti di radicali dello stesso indice"}
Con indice pari $n$ si assumono $a,b\ge0$. Con indice dispari si ammettono tutti i reali $a,b$. Allora
$$
\sqrt[n]{a}\sqrt[n]{b}=\sqrt[n]{ab}.
$$
Se inoltre $b\ne0$, vale $\dfrac{\sqrt[n]a}{\sqrt[n]b}=\sqrt[n]{\dfrac ab}$.
:::dimostrazione
La potenza di esponente $n$ del prodotto a sinistra è $ab$. Nel caso pari i due fattori sono non negativi, dunque anche il prodotto ha il segno richiesto dalla radice principale. Nel caso dispari si usa l'unicità della radice reale. Per il quoziente si procede allo stesso modo, elevando alla potenza $n$ dopo aver controllato che il denominatore sia diverso da zero.
:::
::::

:::esempio{titolo="Raggruppare dopo l'estrazione"}
Due radicali sono **simili** quando hanno lo stesso indice e lo stesso radicando. Dopo l'estrazione si raccolgono i fattori comuni.
$$
\begin{aligned}
\sqrt{48}-\sqrt{12}+\sqrt8
&=4\sqrt3-2\sqrt3+2\sqrt2\\[6pt]
&=2\sqrt3+2\sqrt2.
\end{aligned}
$$
I termini in $\sqrt3$ hanno coefficienti $4$ e $-2$, mentre quello in $\sqrt2$ costituisce un altro gruppo. La radice di una somma segue una regola diversa. Per esempio $\sqrt{9+16}=5$, mentre $\sqrt9+\sqrt{16}=7$.
:::

:::attenzione{titolo="Il prodotto sotto una radice può avere un dominio più ampio"}
Il prodotto $\sqrt{x-1}\sqrt{x+2}$ richiede $x\ge1$, perché devono esistere entrambi i fattori. Il radicale $\sqrt{(x-1)(x+2)}$ si può usare anche per $x\le-2$. Infatti in questo intervallo il prodotto dei due fattori è non negativo. Per esempio in $x=-3$ la radice del prodotto vale $2$, mentre le due radici separate non sono reali.
:::

:::esempio{titolo="Il dominio di un quoziente dopo la semplificazione"}
Nel quoziente $\dfrac{\sqrt{x^2-1}}{\sqrt{x-1}}$ il denominatore impone $x>1$. Quella condizione rende positivo anche $(x-1)(x+1)$, quindi basta per il numeratore. Nei punti ammessi si ha
$$
\begin{aligned}
\frac{\sqrt{x^2-1}}{\sqrt{x-1}}
&=\sqrt{\frac{(x-1)(x+1)}{x-1}}\\[6pt]
&=\sqrt{x+1}.
\end{aligned}
$$
La radice finale sarebbe definita a partire da $-1$. Nel quoziente iniziale, provare $x=1$ annullerebbe il denominatore. Si possono usare i valori della forma finale soltanto conservando il vincolo $x>1$.
:::

## Razionalizzare un singolo radicale

:::definizione{#razionalizzazione titolo="Un fattore che completa la potenza"}
**Razionalizzare** una frazione significa eliminare i radicali dal denominatore. Con un denominatore numerico si cerca una frazione equivalente con denominatore razionale. Si moltiplicano numeratore e denominatore per uno stesso fattore non nullo, così il valore del quoziente si conserva.

Con indice $n$, un denominatore $\sqrt[n]{b^r}$ composto da una potenza di un numero razionale positivo $b$ si può moltiplicare per $\sqrt[n]{b^{n-r}}$, se $1\le r<n$. La somma degli esponenti sotto radice diventa $n$, quindi il nuovo denominatore è $b$.
:::

:::esempio{titolo="Razionalizzazione con una radice cubica"}
Nel denominatore $\sqrt[3]9=\sqrt[3]{3^2}$ manca una copia del fattore $3$ per ottenere la terza potenza. La radice $\sqrt[3]3$ è positiva, quindi si possono moltiplicare numeratore e denominatore per quel fattore.
$$
\begin{aligned}
\frac{5}{\sqrt[3]9}
&=\frac{5\sqrt[3]3}{\sqrt[3]{9\cdot3}}\\[6pt]
&=\frac{5\sqrt[3]3}{3}.
\end{aligned}
$$
Con un denominatore che dipende da $x$, si verifica che il fattore scelto sia definito e diverso da zero per i valori che si vogliono conservare. Ad esempio $\dfrac1{\sqrt x}$ si riscrive $\dfrac{\sqrt x}{x}$ sul dominio iniziale $x>0$.
:::

:::esempio{titolo="Il segno di un denominatore dispari"}
Per il denominatore $\sqrt[3]{-2}$ si sceglie il fattore $\sqrt[3]4$, perché $(-2)\cdot4=-8$. Il nuovo denominatore è la radice cubica di $-8$, cioè $-2$.
$$
\frac1{\sqrt[3]{-2}}
=\frac{\sqrt[3]4}{-2}
=-\frac{\sqrt[3]4}{2}.
$$
Il fattore scelto è positivo e il risultato è negativo, come il quoziente iniziale. L'indice dispari permette di usare il cubo di un numero negativo per ottenere il denominatore razionale.
:::

## Il coniugato

::::teorema{#coniugato titolo="Prodotto di una somma per la sua differenza"}
Siano $u$ e $v$ due espressioni reali. La somma $u+v$ e la differenza $u-v$ si chiamano **coniugate** nella razionalizzazione di un denominatore. Il loro prodotto è $u^2-v^2$.
:::dimostrazione
Per la proprietà distributiva i contributi misti sono $uv$ e $-vu$ e si annullano. Restano $u^2$ e $-v^2$. Se $u=\sqrt a$ e $v=\sqrt b$, con $a,b\ge0$, il risultato è $a-b$.
:::
::::

:::esempio{titolo="Una differenza di radici al denominatore"}
Per $\dfrac1{\sqrt5-\sqrt2}$ il coniugato è $\sqrt5+\sqrt2$, che è positivo. Il prodotto al denominatore è $5-2=3$, quindi si ottiene $\dfrac{\sqrt5+\sqrt2}{3}$. Più in generale, quando la differenza $\sqrt a-\sqrt b$ è diversa da zero, almeno uno dei due radicali è positivo. La loro somma è allora un fattore non nullo per tutti i valori del dominio della frazione.
:::

:::attenzione{titolo="Il coniugato di una somma può annullarsi"}
La frazione $\dfrac1{\sqrt x+2}$ è definita per $x\ge0$. Il coniugato $\sqrt x-2$ si annulla in $x=4$, dove la frazione iniziale vale $\dfrac14$. Per $x\ge0$ e $x\ne4$ vale
$$
\frac1{\sqrt x+2}
=\frac{\sqrt x-2}{x-4}.
$$
La forma con denominatore $x-4$ va quindi accompagnata dal valore $\dfrac14$ in $x=4$ per rappresentare tutta la funzione iniziale. Il punto vuoto $A$ indica quel valore mancante nella sola formula trasformata.

::grafico{f="1/(sqrt(x)+2)" xmin=-1.25 xmax=11 ymin=-0.09 ymax=0.65 punti="4,0.25,vuoto,A;0,0.5,pieno,B" legenda="y=\dfrac{\sqrt{x}-2}{x-4}\quad(x\ge0,\ x\ne4)" titolo="Il quoziente con denominatore $x-4$ perde il punto $(4,\dfrac14)$"}
:::

## Potenze razionali

::::teorema{#potenze titolo="Una potenza per ogni esponente razionale"}
Per $a>0$, $p$ intero e $q$ intero positivo, si definisce
$$
a^{\frac pq}=\sqrt[q]{a^p}=(\sqrt[q]a)^p.
$$
Per $q=1$ si intende la consueta potenza intera. Il valore dipende dall'esponente razionale, indipendentemente dalla frazione che lo rappresenta.
:::dimostrazione
I due membri che contengono la radice sono positivi e, elevati all'esponente $q$, danno entrambi $a^p$. L'unicità della radice positiva mostra che le due forme coincidono. Se $\dfrac pq=\dfrac rs$ con $s>0$, anche $a^{\frac rs}$ è positivo. Elevando le due potenze a $qs$, la prima dà $a^{ps}$ e la seconda $a^{rq}$. Poiché $ps=rq$, esse coincidono.
:::
::::

:::esempio{titolo="Esponente negativo e scelta della base"}
Il calcolo di $27^{-\frac23}$ usa prima la radice cubica $3$, poi il reciproco del suo quadrato. Il risultato è $\dfrac19$. La definizione si può estendere alla base zero per esponenti positivi, ponendo $0^{\frac pq}=0$ quando $p>0$ e $q>0$. Un esponente negativo con base zero richiederebbe un reciproco indefinito.

La prova per base positiva motiva quella restrizione. Usando comunque $\sqrt[q]{a^p}$ con $a=-8$, le frazioni equivalenti $\dfrac13$ e $\dfrac26$ darebbero valori diversi. Infatti $\sqrt[3]{-8}=-2$, mentre $\sqrt[6]{(-8)^2}=2$.
:::

:::esempio{titolo="Confrontare due potenze della stessa base"}
Per $x>0$ si ha $x^{\frac32}=x\sqrt x$. Se $0<x<1$, il prodotto per $x$ diminuisce il valore positivo $\sqrt x$. Per $x>1$ lo aumenta. A $x=1$ le due potenze valgono uno e nel grafico si incontrano in $A$. L'origine appartiene ai grafici con l'estensione a zero per gli esponenti positivi.

::grafico{f="sqrt(x);x*sqrt(x)" xmin=-0.35 xmax=2.85 ymin=-0.3 ymax=4.75 punti="0,0,pieno;1,1,pieno,A;2.25,1.5,pieno;2.25,3.375,pieno" legenda="y=x^{\frac12};y=x^{\frac32}" titolo="In $x=1$ le due potenze coincidono e si inverte il loro ordine"}
:::

:::osservazione{titolo="Una potenza di una potenza razionale"}
Sia $a>0$. Per esponenti $\dfrac pq$ e $\dfrac rs$, con $q,s>0$, i due numeri positivi $(a^{\frac pq})^{\frac rs}$ e $a^{\frac{pr}{qs}}$ danno entrambi $a^{pr}$ se elevati alla potenza $qs$. Nel primo caso si può elevare prima alla potenza $s$, ottenendo $(a^{\frac pq})^r$. La successiva potenza $q$ dà $(a^p)^r=a^{pr}$. Per l'unicità della radice positiva di indice $qs$, le espressioni iniziali coincidono. Per esempio $8^{\frac23}=4$ e $(8^{\frac23})^{\frac12}=2$. Moltiplicando gli esponenti si ottiene direttamente $8^{\frac13}=2$.
:::

## Ordinamento e confronti esatti

:::osservazione{#confronti titolo="Confrontare quadrati dopo aver controllato il segno"}
Se $0\le u<v$, allora $v^2-u^2=(v-u)(v+u)>0$, perché entrambi i fattori sono positivi. Tra numeri non negativi il confronto fra i quadrati dà dunque lo stesso ordine. In senso inverso, se $u^2<v^2$ per due numeri non negativi, il confronto $u\ge v$ è impossibile perché darebbe $u^2\ge v^2$. Per esempio $2\sqrt3<3\sqrt2$, perché i quadrati sono $12$ e $18$. Per ordinare $-2\sqrt3$ e $-3\sqrt2$ si parte dal confronto fra i loro opposti positivi. Moltiplicando per $-1$ si inverte l'ordine e si ottiene $-2\sqrt3>-3\sqrt2$.
:::

:::osservazione{titolo="Confrontare mediante i cubi"}
Per $0\le u<v$, il prodotto $(v-u)(v^2+uv+u^2)$ è positivo e vale $v^3-u^3$. Anche tra due numeri negativi il cubo conserva l'ordine. Infatti si passa agli opposti positivi, si confrontano i loro cubi e si cambia nuovamente segno. Se i numeri sono da parti opposte di zero, il confronto segue dal segno dei cubi. Per esempio $\sqrt[3]{-9}<-2$, perché $-9<(-2)^3=-8$.
:::

:::esempio{titolo="Stimare una somma di due radici"}
Si può localizzare $\sqrt7+\sqrt2$ fra $4$ e $5$ senza arrotondare. Poiché $\sqrt7<3$ e $\sqrt2<2$, la somma è minore di $5$. Per il limite inferiore si calcola il quadrato della somma, che vale $9+2\sqrt{14}$. Ora $2\sqrt{14}>7$, perché i quadrati sono $56$ e $49$. Il quadrato della somma è quindi maggiore di $16$, da cui $\sqrt7+\sqrt2>4$.
:::

:::esempio{titolo="Confrontare differenze di radici"}
La differenza fra due radici vicine si può studiare attraverso il coniugato. Per $x\ge0$ la somma $\sqrt{x+1}+\sqrt x$ è positiva e
$$
\begin{aligned}
\sqrt{x+1}-\sqrt x
&=\frac{(x+1)-x}{\sqrt{x+1}+\sqrt x}\\[6pt]
&=\frac1{\sqrt{x+1}+\sqrt x}.
\end{aligned}
$$
Aumentando $x$ crescono entrambe le radici al denominatore. Il reciproco quindi diminuisce. Per esempio $\sqrt5-\sqrt4$ è maggiore di $\sqrt{50}-\sqrt{49}$, poiché risponde al valore più piccolo $x=4$ rispetto a $x=49$. Il punto $A$ del grafico corrisponde a $x=0$, dove la differenza vale $1$.

::grafico{f="sqrt(x+1)-sqrt(x)" xmin=-0.7 xmax=12 ymin=-0.25 ymax=1.23 punti="0,1,pieno,A" legenda="y=\sqrt{x+1}-\sqrt{x}" titolo="La differenza è positiva e diminuisce perché cresce la somma al denominatore della forma equivalente"}
:::
