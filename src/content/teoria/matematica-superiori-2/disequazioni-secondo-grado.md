---
titolo: Disequazioni di secondo grado e fratte
sommario: Segno di trinomi e rapporti, intervalli con punti esclusi, sistemi e domini con radicali.
---

Le disequazioni lineari hanno una sola soglia quando il coefficiente dell’incognita è diverso da zero. Con i trinomi si possono trovare due soglie, una sola oppure nessuna. Le radici delle equazioni di secondo grado individuano i punti in cui un trinomio può cambiare segno. Per le frazioni occorre controllare anche i punti in cui il denominatore si annulla.

## Dominio, segno e rappresentazione

:::definizione{#intervalli titolo="Il confronto con zero nel dominio assegnato"}
Risolvere una **disequazione** significa trovare tutti i valori del dominio per cui il confronto è vero. Per confrontare $A(x)$ e $B(x)$, si studia il segno di $A(x)-B(x)$, nei punti in cui entrambe le espressioni sono definite. La disuguaglianza $A(x)\le B(x)$ richiede che quella differenza sia minore o uguale a zero. Un’uguaglianza è ammessa solo se il simbolo la comprende e il punto appartiene al dominio.
:::

:::esempio{titolo="Leggere dove una curva sta sotto l’altra"}
La disequazione $x^2\le3x+4$ chiede in quali punti la parabola $y=x^2$ sta sotto la retta $y=3x+4$ o la incontra. La differenza è $x^2-3x-4=(x+1)(x-4)$. I due grafici si incontrano a $x=-1$ e $x=4$. Per $x=0$ la parabola vale $0$ e la retta vale $4$. Questo conferma che almeno l’origine appartiene alla soluzione. Per determinare tutto l’intervallo, occorre studiare il segno dei due fattori fra le intersezioni e fuori da esse.

::grafico{f="x^2;3*x+4" xmin=-2.2 xmax=5.3 ymin=-2.3 ymax=26.6 nomi="x,y" legenda="y=x^2;y=3x+4" punti="-1,1,pieno;4,16,pieno;0,0,pieno;0,4,pieno" segmenti="-1,0,-1,1;4,0,4,16" titolo="Le ascisse dei punti d’intersezione sono le soglie della disequazione"}
:::

## Due radici reali distinte

::::teorema{#segno titolo="Come il segno cambia ai due zeri"}
Sia $P(x)=ax^2+bx+c$, con $a\ne0$, e siano $r_1<r_2$ le sue due radici reali. Il trinomio ha il segno di $a$ fuori dall’intervallo fra le radici e il segno opposto al suo interno. In $r_1$ e $r_2$ vale zero.

:::dimostrazione
La fattorizzazione è $P(x)=a(x-r_1)(x-r_2)$. Se $x<r_1$, entrambi i fattori lineari sono negativi. Se $r_1<x<r_2$, il primo è positivo e il secondo negativo. Se $x>r_2$, entrambi sono positivi. Moltiplicando i segni si ottiene un prodotto positivo nei due intervalli esterni e negativo in quello centrale, prima di moltiplicare per $a$. Se $a<0$, l’ultimo fattore inverte i tre segni.
:::

| Intervallo | $x<r_1$ | $r_1<x<r_2$ | $x>r_2$ |
| --- | --- | --- | --- |
| $x-r_1$ | $-$ | $+$ | $+$ |
| $x-r_2$ | $-$ | $-$ | $+$ |
| $(x-r_1)(x-r_2)$ | $+$ | $-$ | $+$ |
::::

:::esempio{titolo="Lo stesso paio di radici con coefficienti opposti"}
Il trinomio $P(x)=(x-2)(x-3)$ è negativo tra le radici, dunque $P(x)\le0$ ha soluzione $[2,3]$. La disequazione $-P(x)<0$ richiede invece $P(x)>0$. Si ottiene $(-\infty,2)\cup(3,+\infty)$. I confini si escludono in quest’ultimo confronto perché il valore zero non è strettamente negativo.

::grafico{f="(x-2)*(x-3);-(x-2)*(x-3)" xmin=0.2 xmax=4.8 ymin=-5.2 ymax=5.2 nomi="x,y" legenda="P(x);-P(x)" punti="2,0,pieno;3,0,pieno;2.5,-0.25,pieno;2.5,0.25,pieno" titolo="Le due parabole hanno zeri comuni e segni opposti nei tre intervalli"}
:::

:::esempio{titolo="Una superficie minima tra due valori di confine"}
Un rettangolo ha lati $x$ e $12-x$, in metri, con $0<x<12$. Per raggiungere almeno $35\,\mathrm{m}^2$ si richiede $x(12-x)\ge35$. La differenza vale $-x^2+12x-35=-(x-5)(x-7)$. Fra le radici il prodotto dei due fattori lineari è negativo e il segno meno lo rende positivo. L’area raggiunge la soglia esatta ai due estremi, quindi sono ammessi i valori $[5,7]$, già nel dominio geometrico. Per $x=6$ l’area vale $36\,\mathrm{m}^2$. Per $x=8$ vale $32\,\mathrm{m}^2$, inferiore al minimo.
:::

## Radice doppia e assenza di radici

::::teorema{#discriminante titolo="Il segno nei casi di discriminante nullo o negativo"}
Per $a\ne0$ si pone $\Delta=b^2-4ac$. Se $\Delta=0$, esiste una radice doppia $r=-\dfrac{b}{2a}$ e il trinomio si annulla solo in $r$. Altrove ha il segno di $a$. Se $\Delta<0$, il trinomio ha il segno di $a$ per ogni $x$ reale.

:::dimostrazione
Raccogliendo $a$ e completando il quadrato si ottiene

$$
ax^2+bx+c
=a\left[\left(x+\frac{b}{2a}\right)^2-\frac{\Delta}{4a^2}\right].
$$

Si verifica l’identità sviluppando il quadrato, perché la parte costante dentro la parentesi è $\dfrac{b^2-\Delta}{4a^2}=\dfrac ca$. Se $\Delta=0$, dentro la parentesi rimane un quadrato che si annulla solo quando $x=-\dfrac b{2a}$. Se $\Delta<0$, al quadrato si aggiunge $\dfrac{-\Delta}{4a^2}>0$. L’espressione fra parentesi risulta sempre positiva, quindi il segno del trinomio è quello di $a$.
:::
::::

:::esempio{titolo="Lo zero isolato nel confronto con un quadrato"}
Per $(x-2)^2>0$ ogni reale diverso da $2$ è soluzione. In $2$ il quadrato vale zero e va escluso. Se il confronto è $(x-2)^2\le0$, il solo valore ammesso è $2$. La radice doppia è un punto di tangenza. Il segno resta positivo sia a sinistra sia a destra.

::grafico{f="(x-2)^2" xmin=-0.7 xmax=4.7 ymin=-0.8 ymax=7 nomi="x,y" punti="2,0,pieno" titolo="La parabola tocca l’asse in $2$ e rimane sopra l’asse negli altri punti"}
:::

:::esempio{titolo="Un estremo che non coincide con lo zero"}
Il trinomio $-x^2+4x-5$ vale $-(x-2)^2-1$. Il suo massimo è $-1$, raggiunto in $x=2$, perché un quadrato è sempre maggiore o uguale a zero. Perciò la disequazione $-x^2+4x-5\ge0$ ha insieme soluzione vuoto, mentre il confronto stretto $-x^2+4x-5<0$ vale per ogni reale. Anche il discriminante $4^2-4(-1)(-5)=-4$ dà lo stesso esito.

::grafico{f="-(x-2)^2-1" xmin=-0.5 xmax=4.5 ymin=-7.6 ymax=1.2 nomi="x,y" punti="2,-1,pieno" segmenti="2,0,2,-1" titolo="Il punto più alto è $(2,-1)$ e resta sotto l’asse delle ascisse"}
:::

## Dalla forma iniziale alla soluzione

:::esempio{#procedimento titolo="Portare i termini a zero e controllare gli estremi"}
Per risolvere $4-2x^2\ge0$, si ricava $2x^2\le4$ aggiungendo $2x^2$. Dividendo per $2$, si ottiene $x^2\le2$. L’espressione $2-x^2$ si fattorizza come $(\sqrt2-x)(\sqrt2+x)$. Entrambi i fattori sono non negativi fra $-\sqrt2$ e $\sqrt2$. Fuori dall’intervallo un fattore è negativo e l’altro positivo. Si ottiene quindi $[-\sqrt2,\sqrt2]$.

Per controllare la soluzione si può usare l’espressione iniziale. Nell’origine vale $4$, ammesso. Nei due estremi vale $0$, ammesso da $\ge$. Per $x=2$ vale $-4$, escluso. Un punto di prova è utile per verificare il segno assegnato a un intervallo dopo aver individuato tutti gli zeri e accertato che il segno resti costante tra due zeri consecutivi.
:::

:::osservazione
Il grado si legge nella differenza ridotta. Per esempio $2x^2+3x\ge 2x^2+5$ contiene due termini quadratici uguali. Sottraendo $2x^2$ a entrambi i membri, resta $3x\ge5$ e si trova la sola soglia $\dfrac53$. Se anche i termini lineari fossero uguali, resterebbe un confronto numerico, valido per tutto il dominio oppure impossibile. La riduzione iniziale decide se occorre cercare due radici o risolvere un confronto di grado inferiore.
:::

## Frazioni e punti esclusi

::::teorema{#fratte titolo="Studiare il segno del quoziente nel suo dominio"}
Per un quoziente $\dfrac{P(x)}{Q(x)}$ si impone prima $Q(x)\ne0$. Il suo segno è positivo quando numeratore e denominatore hanno lo stesso segno e negativo quando hanno segni opposti. Il quoziente vale zero soltanto negli zeri del numeratore che appartengono al dominio.

:::dimostrazione
Nel dominio la quantità $Q(x)^2$ è strettamente positiva. Moltiplicando per questa quantità il confronto conserva il verso e $\dfrac{P(x)}{Q(x)}$ diventa $P(x)Q(x)$. Il prodotto mostra come si combinano i segni. Anche se si usa direttamente il prodotto, la condizione $Q(x)\ne0$ resta necessaria.
:::
::::

:::esempio{titolo="Distinguere uno zero da un denominatore nullo"}
Per $\dfrac{x+2}{x-1}\le0$ i punti critici sono $-2$, dove il rapporto vale zero, e $1$, dove il rapporto è indefinito. Il primo è candidato all’inclusione perché il confronto ammette l’uguaglianza. Il secondo è escluso qualunque sia il simbolo del confronto.

| Intervallo | $(-\infty,-2)$ | $(-2,1)$ | $(1,+\infty)$ |
| --- | --- | --- | --- |
| Numeratore | $-$ | $+$ | $+$ |
| Denominatore | $-$ | $-$ | $+$ |
| Rapporto | $+$ | $-$ | $+$ |

Si ottiene $[-2,1)$. Il segno del quoziente cambia in $1$, ma il grafico non ha un punto con quell’ascissa. Un valore di prova nell’intervallo è $0$, per il quale il rapporto vale $-2$.

::grafico{f="(x+2)/(x-1)" asintoti="x=1;y=1" xmin=-5 xmax=5 ymin=-7 ymax=7 punti="-2,0,pieno" titolo="Il rapporto è non positivo tra $-2$ incluso e $1$ escluso"}
:::

:::attenzione{#buco titolo="Una semplificazione conserva il dominio iniziale"}
Nella frazione $\dfrac{(x-1)(x+3)}{x-1}$ si esclude $x=1$. Nei punti ammessi si può cancellare il fattore $x-1$ e rimane $x+3$. Il confronto con zero, con il simbolo $\ge$, dà $x\ge-3$ e $x\ne1$. La soluzione è $[-3,1)\cup(1,+\infty)$. In $1$ la retta semplificata avrebbe ordinata $4$, ma il valore della frazione resta indefinito.

::grafico{f="x+3" xmin=-4.6 xmax=3.1 ymin=-1.75 ymax=6.6 punti="-3,0,pieno;1,4,vuoto" titolo="Il punto vuoto in $(1,4)$ indica il valore escluso dopo la semplificazione"}

Se il confronto iniziale ha un secondo membro diverso da zero, si porta tutto a sinistra e si usa un denominatore comune. Per esempio $\dfrac{2}{x-1}\le1$ equivale a $\dfrac{3-x}{x-1}\le0$ con $x\ne1$. Lo studio dei segni dà $(-\infty,1)\cup[3,+\infty)$. In $3$ il rapporto iniziale è $1$, come richiesto dal confronto non stretto.
:::

:::esempio{titolo="Un denominatore positivo con un punto escluso"}
Nella disequazione $\dfrac{x+1}{(x-2)^2}\ge0$ il denominatore è strettamente positivo per tutti gli $x$ ammessi. Si può quindi moltiplicare per quel denominatore e ottenere $x+1\ge0$ conservando il verso. La condizione dà $x\ge-1$, da cui si toglie $2$. Il risultato è $[-1,2)\cup(2,+\infty)$. Il fattore quadratico al denominatore ha lo stesso segno sui due lati dello zero. Il punto $2$ separa comunque due intervalli, perché la frazione non è definita in quel punto.
:::

## Prodotti e molteplicità

:::teorema{#prodotti titolo="La parità dell’esponente indica se il segno cambia"}
Se il fattore $x-r$ compare esattamente $m$ volte, il polinomio si scrive $(x-r)^mG(x)$ con $G(r)\ne0$. Il valore $G(r)$ è diverso da zero e, per continuità del polinomio, il segno di $G$ resta costante vicino a $r$. Quando $m$ è dispari, $x-r$ e $(x-r)^m$ hanno lo stesso segno. Quando $m$ è pari, $(x-r)^m$ è positivo su entrambi i lati. La radice di molteplicità pari può quindi spezzare l’insieme soluzione di un confronto stretto senza cambiare il segno.
:::

:::esempio{titolo="Uno zero semplice e uno doppio nello stesso prodotto"}
In $(x-1)^2(x+2)>0$ il fattore quadratico è positivo per $x\ne1$. Il segno dipende dunque da $x+2$. Nei punti a destra di $-2$ il prodotto è positivo, tranne che in $1$ dove si annulla. La soluzione è $(-2,1)\cup(1,+\infty)$. Con il confronto $\ge0$, anche i due zeri sarebbero ammessi e si avrebbe $[-2,+\infty)$.
:::

## Sistemi e intersezione

:::definizione{#sistemi titolo="Ogni valore deve verificare tutte le condizioni"}
Un **sistema di disequazioni** impone contemporaneamente tutte le condizioni. Si prendono le soluzioni comuni, includendo un estremo solo se soddisfa ciascun vincolo. Per condizioni alternative si usa invece l’unione, perché è sufficiente appartenere ad almeno uno degli insiemi.
:::

:::esempio{titolo="Un intervallo e un punto isolato"}
Si risolve $x^2-4x+3\ge0$ con il vincolo $0\le x\le3$. Poiché il trinomio vale $(x-1)(x-3)$, il primo insieme è $(-\infty,1]\cup[3,+\infty)$. Intersecando con $[0,3]$ si ottengono $[0,1]$ e il solo punto $3$. Il valore $3$ soddisfa entrambe le condizioni come uguaglianza e va incluso.

::grafico{assi=0 xmin=-1.8 xmax=4.9 ymin=-0.25 ymax=3.28 vettori="-1.47,2.66,4.53,2.66;-1.47,1.64,4.53,1.64;-1.47,0.59,4.53,0.59" area="2.74;2.58;-1.4;1|2.74;2.58;3;4.38|1.72;1.56;0;3|0.67;0.51;0;1" punti="1,2.66,pieno;3,2.66,pieno;0,1.64,pieno;3,1.64,pieno;0,0.59,pieno;1,0.59,pieno;3,0.59,pieno" etichette="0,0.15,0;1,0.15,1;3,0.15,3" titolo="Il sistema conserva l’intervallo $[0,1]$ e il punto isolato $3$"}
:::

:::esempio{titolo="Intersecare una frazione con un limite lineare"}
Le due condizioni $\dfrac{x-1}{x+1}>0$ e $x\le0$ vanno risolte insieme. La prima dà $(-\infty,-1)\cup(1,+\infty)$, perché il numeratore e il denominatore sono entrambi negativi prima di $-1$ ed entrambi positivi dopo $1$. Intersecando con $(-\infty,0]$ resta solo $(-\infty,-1)$. L’estremo $-1$ rimane escluso, dato che il nuovo vincolo riguarda soltanto il valore di $x$ e la frazione continua a non esistere in quel punto. Anche lo zero soddisfa il limite lineare, ma il rapporto in zero vale $-1$.
:::

## Radici quadrate e vincoli del problema

:::osservazione{#domini titolo="Intersecare le condizioni di esistenza"}
Per la radice quadrata $\sqrt{A(x)}$ serve $A(x)\ge0$. Se la radice è l’intero denominatore o un suo fattore, il denominatore è diverso da zero solo quando anche la radice lo è, quindi serve $A(x)>0$. Per esempio $\sqrt{x^2-4}$ è definita anche negli zeri $-2$ e $2$. Per $\dfrac{1}{\sqrt{x^2-4}}$ quei due valori sono esclusi, e si ottiene $(-\infty,-2)\cup(2,+\infty)$.

Se la radice è un addendo del denominatore, si controlla il valore dell’intera somma. Per $\dfrac{1}{\sqrt{x}+1}$ basta $x\ge0$, perché nel dominio della radice il denominatore è sempre almeno uno. Il valore $x=0$ è ammesso e la frazione vale $1$.

Per $\dfrac{\sqrt{(x-1)(4-x)}}{x-2}$ il radicando non negativo ammette $[1,4]$, mentre il denominatore esclude $2$. Quindi $D=[1,2)\cup(2,4]$. In $1$ e in $4$ la radice al numeratore vale zero e il denominatore resta diverso da zero.

::grafico{assi=0 xmin=-0.5 xmax=5.5 ymin=-0.85 ymax=0.9 vettori="-0.15,0,5.18,0" area="0.075;-0.075;1;2|0.075;-0.075;2;4" punti="1,0,pieno;2,0,vuoto;4,0,pieno" etichette="1,-0.35,1;2,-0.35,2;4,-0.35,4;5.01,-0.35,x" titolo="Gli zeri del radicando ai bordi sono ammessi. Il denominatore toglie il punto interno $2$"}
:::

:::esempio{titolo="Valore assoluto e condizione di esistenza"}
La radice $\sqrt{(x-1)^2}$ è definita per ogni reale e vale $|x-1|$, perché restituisce la quantità non negativa che, al quadrato, dà il radicando. Nella frazione $\dfrac{\sqrt{(x-1)^2}}{x-1}$ occorre però escludere $1$. Per $x>1$ il numeratore vale $x-1$, quindi il rapporto vale $1$. Per $x<1$ il numeratore vale $1-x$, quindi il rapporto vale $-1$. Il punto dove cambiano le due formule è proprio quello escluso.
:::

:::esempio{titolo="Un confine algebrico e una lunghezza positiva"}
Un rettangolo ha lati $x$ e $x+3$ metri e area al massimo $40\,\mathrm{m}^2$. Occorre $x>0$ e $x(x+3)\le40$. Portando tutto a sinistra si ottiene $(x+8)(x-5)\le0$, con soluzione $[-8,5]$. Intersecando con $x>0$ rimane $(0,5]$. Cinque metri sono ammessi perché l’area è $40\,\mathrm{m}^2$. Se il lato minore deve misurare un numero intero di metri, sono possibili soltanto le misure da uno a cinque.
:::

## Una famiglia di parabole con parametro

:::esempio{#parametri titolo="Controllare il valore massimo prima di calcolare gli zeri"}
Si considera $k-(x-1)^2\ge0$, con $k$ reale fissato. Per ogni $x$ il quadrato è non negativo, quindi il valore più alto del membro a sinistra è $k$, raggiunto a $x=1$.

- Per $k<0$, neppure il massimo soddisfa il confronto e l’insieme soluzione è vuoto.
- Per $k=0$, il solo valore ammesso è $x=1$, che rende il quadrato nullo.
- Per $k>0$, la condizione $(x-1)^2\le k$ dà $[1-\sqrt{k},1+\sqrt{k}]$.

Nell’ultimo caso i due estremi sono entrambi inclusi. Se si adotta il simbolo $>$, si escludono quei due punti e con $k=0$ non resta alcuna soluzione. Il parametro separa quindi tre configurazioni e il simbolo stabilisce come leggere le intersezioni con l’asse.

::grafico{f="-1-(x-1)^2;-(x-1)^2;1-(x-1)^2" xmin=-1.34 xmax=3.34 ymin=-4.8 ymax=1.55 nomi="x,y" legenda="k=-1;k=0;k=1" punti="1,-1,pieno;1,0,pieno;1,1,pieno;0,0,pieno;2,0,pieno" titolo="Il vertice sale con $k$. Le tre parabole hanno rispettivamente zero, uno o due punti sull’asse"}
:::

:::esempio{titolo="Quando il parametro rende il trinomio sempre non negativo"}
Si cercano i valori di $k$ per cui $(k-1)x^2-2x+1\ge0$ vale per tutti i reali. In $x=1$ il primo membro vale $k-2$, dunque è necessario $k\ge2$. Con questa condizione si riscrive il trinomio come $(x-1)^2+(k-2)x^2$. I due addendi sono non negativi per ogni $x$, perciò la condizione è anche sufficiente. Per $k=2$ rimane un quadrato che si annulla in $1$. Per $k=1$ il coefficiente quadratico è zero e si ha la disequazione lineare $-2x+1\ge0$, che è vera solo per $x\le\dfrac12$.
:::
