---
titolo: Studio di funzione e ottimizzazione
sommario: Come si trovano e si classificano i massimi e i minimi di una funzione con la derivata prima e la derivata seconda, come si studiano concavità e flessi, come si traccia il grafico con lo schema completo dello studio di funzione e come si risolvono i problemi di ottimizzazione, compresi quelli di profitto, costo medio e ricavo.
---

## Massimi e minimi

:::definizione{#massimi-minimi-assoluti titolo="Massimo e minimo assoluti"}
Sia $f : A \to \mathbb{R}$ e sia $x_0 \in A$. Il numero $f(x_0)$ è il **massimo assoluto** di $f$ se
$$
f(x) \leq f(x_0) \qquad \text{per ogni } x \in A ,
$$
e allora $x_0$ si chiama **punto di massimo assoluto**; con la disuguaglianza $f(x) \geq f(x_0)$ si definiscono il **minimo assoluto** e il punto di minimo assoluto. Il valore massimo, se esiste, è uno solo, mentre i punti in cui viene assunto possono essere più di uno. Per esempio $f(x) = x^2$ sull'intervallo $[-1, 2]$ ha minimo $0$, assunto in $x = 0$, e massimo $4$, assunto in $x = 2$; la funzione $\cos x$ su $\mathbb{R}$ ha massimo $1$, assunto in tutti i punti $x = 2k\pi$ con $k$ intero.
:::

:::definizione{#massimi-minimi-relativi titolo="Massimo e minimo relativi"}
Un massimo relativo confronta il valore in $x_0$ solo con i valori nei punti vicini. Il punto $x_0 \in A$ è un **punto di massimo relativo** (o locale) di $f$ se esiste $\delta > 0$ tale che
$$
f(x) \leq f(x_0) \qquad \text{per ogni } x \in A \text{ con } |x - x_0| < \delta ,
$$
e allo stesso modo, con $f(x) \geq f(x_0)$, si definisce il **punto di minimo relativo**. Massimi e minimi si chiamano insieme **estremi**. Ogni punto di massimo assoluto è anche di massimo relativo, mentre il viceversa è falso. La funzione $f(x) = x^3 - 3x$ ha in $x = -1$ un massimo relativo, $f(-1) = 2$, perché vicino a $-1$ i valori sono minori di $2$; il massimo però non è assoluto, perché per esempio $f(3) = 18$.

::grafico{f="x^3-3*x" punti="-1,2,pieno;1,-2,pieno;3,18,pieno" segmenti="-1,0,-1,2;1,0,1,-2" xmin=-4 xmax=4 ymin=-6 ymax=21 titolo="La funzione $f(x) = x^3 - 3x$ ha un massimo relativo in $x = -1$ e un minimo relativo in $x = 1$; nessuno dei due è assoluto, perché per esempio $f(3) = 18 > 2$"}

:::

:::richiamo{titolo="Teorema di Fermat"}
Sia $f$ definita in un intervallo $I$ e sia $x_0$ un punto interno a $I$ di massimo o di minimo relativo. Se $f$ è derivabile in $x_0$, allora $f'(x_0) = 0$.
:::

:::osservazione{#punti-candidati titolo="Dove si cercano gli estremi"}
Per il teorema di Fermat, in un punto interno in cui $f$ è derivabile un estremo è possibile *solo* se la derivata si annulla. Gli estremi di una funzione definita su un intervallo vanno quindi cercati tra

- i **punti stazionari** interni, dove $f'(x_0) = 0$;
- i punti interni in cui $f$ non è derivabile;
- gli estremi dell'intervallo che appartengono al dominio.

I tre casi si presentano davvero. La funzione $|x|$ ha minimo in $0$, dove non è derivabile, e la funzione $f(x) = x$ su $[0, 1]$ ha massimo in $1$, dove la derivata vale $1$ e non $0$. I punti dell'elenco sono soltanto candidati, e i criteri che seguono servono a decidere se sono estremi.
:::

## Criterio della derivata prima

:::richiamo{titolo="Teorema di Lagrange"}
Sia $f$ continua su $[a, b]$ e derivabile in $(a, b)$. Allora esiste $c \in (a, b)$ tale che $f(b) - f(a) = f'(c)\,(b - a)$.
:::

::::teorema{#criterio-derivata-prima titolo="Criterio della derivata prima"}
Sia $f$ continua in un intervallo $(a, b)$ che contiene $x_0$ e derivabile in $(a, b)$, escluso al più il punto $x_0$.

- Se $f'(x) > 0$ in $(a, x_0)$ e $f'(x) < 0$ in $(x_0, b)$, allora $x_0$ è un punto di **massimo relativo**.
- Se $f'(x) < 0$ in $(a, x_0)$ e $f'(x) > 0$ in $(x_0, b)$, allora $x_0$ è un punto di **minimo relativo**.
- Se $f'$ ha lo stesso segno in $(a, x_0)$ e in $(x_0, b)$, allora $x_0$ *non* è un estremo.

In altre parole, una funzione che cresce a sinistra di $x_0$ e decresce a destra ha in $x_0$ un massimo. Il criterio si usa con la tabella dei segni di $f'$. Per $f(x) = x^3 - 3x$ si ha $f'(x) = 3(x + 1)(x - 1)$, che è positiva per $x < -1$, negativa per $-1 < x < 1$ e positiva per $x > 1$; quindi $x = -1$ è un punto di massimo relativo e $x = 1$ un punto di minimo relativo. Il criterio vale anche nei punti in cui $f$ non è derivabile, purché sia continua.

:::dimostrazione
L'idea è confrontare $f(x_0)$ con $f(x)$ attraverso il teorema di Lagrange. Si considera il primo caso. Sia $x \in (a, x_0)$. La funzione è continua su $[x, x_0]$ e derivabile in $(x, x_0)$, quindi per il teorema di Lagrange esiste $c \in (x, x_0)$ con
$$
f(x_0) - f(x) = f'(c)\,(x_0 - x) > 0 ,
$$
perché $f'(c) > 0$ e $x_0 - x > 0$. Sia ora $x \in (x_0, b)$. Allo stesso modo esiste $c \in (x_0, x)$ con $f(x) - f(x_0) = f'(c)\,(x - x_0) < 0$, perché $f'(c) < 0$. In entrambi i casi $f(x) < f(x_0)$, quindi $x_0$ è un punto di massimo relativo. Il secondo caso è analogo. Nel terzo caso, se per esempio $f' > 0$ da entrambe le parti, gli stessi conti danno $f(x) < f(x_0)$ a sinistra e $f(x) > f(x_0)$ a destra, perciò $x_0$ non è né di massimo né di minimo.
:::
::::

:::attenzione
Un punto stazionario può non essere un estremo. La funzione $f(x) = x^3$ ha $f'(0) = 0$, ma $f'(x) = 3x^2$ è positiva sia a sinistra sia a destra di $0$; per il criterio della derivata prima $x = 0$ *non* è un estremo, e infatti $f$ è crescente su tutto $\mathbb{R}$.
:::

## Concavità e flessi

:::definizione{#convessita titolo="Funzione convessa e funzione concava"}
Il grafico di $x^2$ sta sopra ciascuna delle sue rette tangenti, quello di $-x^2$ sotto; questa proprietà distingue le due forme del grafico. Sia $f$ derivabile su un intervallo $I$. La funzione è **convessa** su $I$ (ha la concavità verso l'alto) se per ogni $x_0 \in I$
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{per ogni } x \in I ,
$$
cioè se il grafico sta sopra la retta tangente in ogni suo punto; è **concava** su $I$ (ha la concavità verso il basso) se vale la disuguaglianza $\leq$. Per $f(x) = x^2$ la differenza tra la funzione e la tangente in $x_0$ è
$$
x^2 - \big( x_0^2 + 2x_0\,(x - x_0) \big) = x^2 - 2x_0 x + x_0^2 = (x - x_0)^2 \geq 0 ,
$$
quindi $x^2$ è convessa su $\mathbb{R}$. Per le funzioni non derivabili la convessità si definisce con le corde, e si rimanda all'argomento sul calcolo differenziale di Analisi 1.

::grafico{f="x^2;2*x-1" punti="1,1,pieno" xmin=-3 xmax=3 ymin=-4 ymax=8 legenda="y = x^2;y = 2x - 1" titolo="La funzione $x^2$ è convessa, perché il suo grafico sta sopra ogni retta tangente, come la tangente $y = 2x - 1$ nel punto $(1, 1)$"}

:::

::::teorema{#convessita-derivata-seconda titolo="Segno della derivata seconda e concavità"}
Sia $f$ derivabile due volte su un intervallo $I$.

- Se $f''(x) > 0$ per ogni $x \in I$, allora $f$ è **convessa** su $I$.
- Se $f''(x) < 0$ per ogni $x \in I$, allora $f$ è **concava** su $I$.

La derivata seconda è la derivata della pendenza; se è positiva la pendenza cresce, e il grafico piega verso l'alto. Con questo criterio la concavità si studia come la monotonia, con la tabella dei segni di $f''$. Per esempio $e^{x}$ è convessa su $\mathbb{R}$, perché $\left( e^{x} \right)'' = e^{x} > 0$, e $\ln x$ è concava su $(0, +\infty)$, perché $\left( \ln x \right)'' = -\dfrac{1}{x^2} < 0$.

:::dimostrazione
Si dimostra il primo caso; l'idea è applicare il teorema di Lagrange alla differenza tra la funzione e la tangente. Si fissa $x_0 \in I$ e si pone
$$
g(x) = f(x) - f(x_0) - f'(x_0)\,(x - x_0),
\qquad
g'(x) = f'(x) - f'(x_0) .
$$
Poiché $f'' > 0$ su $I$, per il criterio sul segno della derivata e la monotonia la funzione $f'$ è crescente su $I$. Sia $x \in I$ con $x \neq x_0$. Per il teorema di Lagrange applicato a $g$ tra $x_0$ e $x$, con $g(x_0) = 0$, esiste $c$ compreso tra $x_0$ e $x$ tale che
$$
g(x) = g'(c)\,(x - x_0) = \big( f'(c) - f'(x_0) \big)\,(x - x_0) .
$$
Se $x > x_0$ si ha anche $c > x_0$, quindi $f'(c) > f'(x_0)$ e i due fattori sono positivi; se $x < x_0$ si ha $c < x_0$, quindi $f'(c) < f'(x_0)$ e i due fattori sono negativi. In entrambi i casi $g(x) > 0$, cioè il grafico sta sopra la tangente in $x_0$, e $f$ è convessa.
:::
::::

:::definizione{#punto-di-flesso titolo="Punto di flesso"}
Sia $f$ derivabile in un intervallo aperto che contiene $x_0$. Il punto $x_0$ è un **punto di flesso** se esiste $\delta > 0$ tale che $f$ è convessa in $(x_0 - \delta, x_0]$ e concava in $[x_0, x_0 + \delta)$, o viceversa. Nel flesso il grafico cambia concavità e attraversa la retta tangente. Se inoltre $f'(x_0) = 0$, la tangente è orizzontale e il flesso si dice **orizzontale**, come quello di $x^3$ in $0$; altrimenti si dice **obliquo**.
:::

:::teorema{#condizioni-flesso titolo="Derivata seconda e flessi"}
Sia $f$ derivabile due volte in un intervallo aperto che contiene $x_0$.

- Condizione *necessaria*: se $x_0$ è un punto di flesso, allora $f''(x_0) = 0$.
- Condizione *sufficiente*: se $f''$ cambia segno in $x_0$, cioè ha un segno a sinistra e il segno opposto a destra, allora $x_0$ è un punto di flesso.

La seconda condizione segue dal criterio sul segno della derivata seconda e la concavità. Per la prima si usa che una funzione derivabile è convessa su un intervallo se e solo se la sua derivata è crescente. Nel flesso $f'$ è quindi crescente da una parte e decrescente dall'altra, perciò $f'$ ha in $x_0$ un estremo e per il teorema di Fermat $f''(x_0) = 0$. I flessi si cercano quindi tra gli zeri di $f''$, controllando il cambio di segno. Per $f(x) = x^3 - 3x^2 + 4$ si ha $f''(x) = 6(x - 1)$, che è negativa per $x < 1$ e positiva per $x > 1$; perciò $x = 1$ è un flesso, con $f(1) = 2$ e $f'(1) = -3$, e la tangente di flesso è $y = -3x + 5$.

::grafico{f="x^3-3*x^2+4;-3*x+5" punti="1,2,pieno" xmin=-2 xmax=4 ymin=-4 ymax=8 legenda="y = x^3 - 3x^2 + 4;y = -3x + 5" titolo="Nel flesso $(1, 2)$ di $f(x) = x^3 - 3x^2 + 4$ il grafico passa da concavo a convesso e attraversa la tangente $y = -3x + 5$"}

:::

:::attenzione
L'annullarsi della derivata seconda non basta per avere un flesso. La funzione $f(x) = x^4$ ha $f''(0) = 0$, ma $f''(x) = 12x^2 \geq 0$ non cambia segno, e $x^4$ è convessa su tutto $\mathbb{R}$; in $x = 0$ ha un minimo, *non* un flesso.
:::

## Criterio della derivata seconda

::::teorema{#criterio-derivata-seconda titolo="Criterio della derivata seconda"}
Sia $f$ derivabile in un intervallo aperto che contiene $x_0$, con $f'(x_0) = 0$, e sia derivabile due volte in $x_0$.

- Se $f''(x_0) > 0$, allora $x_0$ è un punto di **minimo relativo**.
- Se $f''(x_0) < 0$, allora $x_0$ è un punto di **massimo relativo**.
- Se $f''(x_0) = 0$, il criterio non permette di concludere.

Il criterio classifica un punto stazionario con un solo calcolo, senza la tabella dei segni di $f'$. Per $f(x) = x^3 - 3x$ si ha $f''(x) = 6x$; poiché $f''(-1) = -6 < 0$, il punto $x = -1$ è di massimo relativo, e poiché $f''(1) = 6 > 0$, il punto $x = 1$ è di minimo relativo. Il risultato coincide con quello del criterio della derivata prima. Il criterio è il modo più rapido per verificare la condizione del secondo ordine nei problemi di ottimizzazione.

:::dimostrazione
L'idea è ricavare il segno di $f'$ vicino a $x_0$ dal segno di $f''(x_0)$. Si considera il caso $f''(x_0) > 0$. Poiché $f'(x_0) = 0$, la definizione di derivata applicata a $f'$ dà
$$
f''(x_0) = \lim_{x \to x_0} \frac{f'(x) - f'(x_0)}{x - x_0} = \lim_{x \to x_0} \frac{f'(x)}{x - x_0} > 0 .
$$
Per il teorema della permanenza del segno, il quoziente $\dfrac{f'(x)}{x - x_0}$ è positivo per $x$ vicino a $x_0$, con $x \neq x_0$. Il denominatore è negativo per $x < x_0$ e positivo per $x > x_0$, quindi $f'(x) < 0$ a sinistra di $x_0$ e $f'(x) > 0$ a destra. Per il criterio della derivata prima, $x_0$ è un punto di minimo relativo. Il caso $f''(x_0) < 0$ è analogo.
:::
::::

:::attenzione
Quando $f'(x_0) = f''(x_0) = 0$ il punto può essere di massimo, di minimo o di flesso. Le funzioni $x^4$, $-x^4$ e $x^3$ hanno tutte derivata prima e derivata seconda nulle in $0$; la prima ha in $0$ un minimo, la seconda un massimo, la terza un flesso orizzontale. In questi casi si torna al criterio della derivata prima, studiando il segno di $f'$ vicino a $x_0$.
:::

## Schema dello studio di funzione

:::definizione{#funzioni-pari-dispari titolo="Funzioni pari e dispari"}
Sia $A$ un insieme simmetrico rispetto a $0$, cioè tale che $-x \in A$ per ogni $x \in A$, e sia $f : A \to \mathbb{R}$. La funzione è

- **pari** se $f(-x) = f(x)$ per ogni $x \in A$, e il suo grafico è simmetrico rispetto all'asse $y$;
- **dispari** se $f(-x) = -f(x)$ per ogni $x \in A$, e il suo grafico è simmetrico rispetto all'origine.

La simmetria dimezza il lavoro, perché basta studiare la funzione per $x \geq 0$ e poi riflettere il grafico. Per esempio $x^2$ e $\dfrac{1}{x^2 + 1}$ sono pari, $x^3$ e $\dfrac{x}{x^2 + 1}$ sono dispari, mentre $x^2 + x$ non è né pari né dispari, perché $f(-1) = 0$ e $f(1) = 2$.
:::

:::osservazione{#schema-studio-di-funzione titolo="Schema dello studio di funzione"}
Per tracciare il grafico di una funzione si raccolgono le informazioni in quest'ordine.

1. **Dominio**, con le condizioni del dominio naturale viste nell'argomento sulle funzioni reali.
2. **Simmetrie**: si controlla se $f$ è pari o dispari.
3. **Intersezioni con gli assi e segno**: si risolvono $f(x) = 0$ e $f(x) > 0$, e si calcola $f(0)$ se $0$ appartiene al dominio.
4. **Limiti e asintoti**: si calcolano i limiti agli estremi del dominio e nei punti esclusi, e si cercano gli asintoti verticali, orizzontali e obliqui, come nell'argomento sui limiti e la continuità.
5. **Derivata prima**: dal segno di $f'$ si ricavano gli intervalli di crescita e di decrescita e i punti di massimo e di minimo relativi, di cui si calcolano i valori.
6. **Derivata seconda**: dal segno di $f''$ si ricavano gli intervalli di convessità e di concavità e i punti di flesso.
7. **Grafico**: si riportano asintoti, punti notevoli e tabelle dei segni, e si traccia la curva in modo coerente con tutte le informazioni.

Se il grafico non è coerente con uno dei punti precedenti, per esempio ha un minimo dove la tabella di $f'$ indica un massimo, nei calcoli c'è un errore.
:::

:::esempio{titolo="Studio di una funzione razionale"}
Si studia $f(x) = \dfrac{x}{x^2 + 1}$.

1. Il denominatore è sempre positivo, quindi il dominio è $\mathbb{R}$.
2. Si ha $f(-x) = \dfrac{-x}{x^2 + 1} = -f(x)$, perciò $f$ è dispari.
3. Il segno di $f$ è quello del numeratore, quindi $f(x) > 0$ per $x > 0$, $f(x) < 0$ per $x < 0$, e il grafico passa per l'origine.
4. Il denominatore ha grado maggiore del numeratore, quindi $f(x) \to 0$ per $x \to \pm\infty$, e la retta $y = 0$ è un asintoto orizzontale. Non ci sono asintoti verticali, perché il dominio è tutto $\mathbb{R}$.
5. Per la regola del quoziente
$$
f'(x) = \frac{(x^2 + 1) - x \cdot 2x}{(x^2 + 1)^2} = \frac{1 - x^2}{(x^2 + 1)^2} ,
$$
che è positiva per $-1 < x < 1$ e negativa per $|x| > 1$. Quindi $f$ decresce su $(-\infty, -1]$, cresce su $[-1, 1]$ e decresce su $[1, +\infty)$; il punto $x = 1$ è di massimo con $f(1) = \dfrac{1}{2}$, il punto $x = -1$ è di minimo con $f(-1) = -\dfrac{1}{2}$. Per $x \geq 0$ la funzione cresce fino a $1$ e poi decresce, quindi $f(x) \leq f(1)$, mentre per $x < 0$ è negativa; perciò il massimo è assoluto e, poiché $f$ è dispari, lo è anche il minimo.
6. Derivando ancora si ottiene
$$
f''(x) = \frac{2x\,(x^2 - 3)}{(x^2 + 1)^3} ,
$$
che si annulla in $0$ e in $\pm\sqrt{3}$ e cambia segno in ciascuno di questi punti. La funzione è concava su $(-\infty, -\sqrt{3}]$ e su $[0, \sqrt{3}]$, convessa su $[-\sqrt{3}, 0]$ e su $[\sqrt{3}, +\infty)$, e ha tre flessi, nei punti di ascissa $-\sqrt{3}$, $0$ e $\sqrt{3}$, con $f(\pm\sqrt{3}) = \pm\dfrac{\sqrt{3}}{4}$.

::grafico{f="x/(x^2+1)" punti="1,0.5,pieno;-1,-0.5,pieno;0,0,vuoto;1.732,0.433,vuoto;-1.732,-0.433,vuoto" asintoti="y=0" xmin=-6 xmax=6 ymin=-1 ymax=1 titolo="Grafico di $f(x) = \dfrac{x}{x^2 + 1}$, con il massimo in $\left( 1, \dfrac{1}{2} \right)$, il minimo in $\left( -1, -\dfrac{1}{2} \right)$ e i flessi (punti vuoti) in $0$ e in $\pm\sqrt{3}$"}

:::

## Massimi e minimi assoluti

:::richiamo{titolo="Teorema di Weierstrass"}
Sia $f$ continua sull'intervallo chiuso e limitato $[a, b]$. Allora $f$ ha massimo e minimo su $[a, b]$.
:::

::::teorema{#estremi-intervallo-chiuso titolo="Massimo e minimo assoluti su un intervallo chiuso"}
Sia $f$ continua su $[a, b]$ e derivabile in $(a, b)$, esclusi al più un numero finito di punti. Allora il massimo e il minimo assoluti di $f$ su $[a, b]$ esistono e sono assunti in punti dell'insieme formato da

- gli estremi $a$ e $b$;
- i punti stazionari di $f$ in $(a, b)$;
- i punti di $(a, b)$ in cui $f$ non è derivabile.

Per trovarli si calcola $f$ in ciascuno di questi punti e si confrontano i valori; il più grande è il massimo e il più piccolo è il minimo. Non serve classificare i punti stazionari. Per $f(x) = x^3 - 3x$ su $[-2, 3]$ i punti stazionari sono $\pm 1$, e
$$
f(-2) = -2, \qquad f(-1) = 2, \qquad f(1) = -2, \qquad f(3) = 18 ;
$$
quindi il massimo assoluto è $18$, assunto in $x = 3$, e il minimo assoluto è $-2$, assunto sia in $x = -2$ sia in $x = 1$.

::grafico{f="x^3-3*x" punti="-2,-2,pieno;-1,2,pieno;1,-2,pieno;3,18,pieno" segmenti="-2,0,-2,-2;3,0,3,18" xmin=-4 xmax=4 ymin=-6 ymax=21 titolo="Su $[-2, 3]$ la funzione $x^3 - 3x$ ha massimo $18$ nell'estremo destro e minimo $-2$, assunto nell'estremo sinistro e nel punto stazionario $x = 1$"}

:::dimostrazione
Il teorema di Weierstrass si applica, perché $f$ è continua sull'intervallo chiuso e limitato $[a, b]$, quindi esiste un punto di minimo assoluto $x_1$. Se $x_1$ è interno e $f$ è derivabile in $x_1$, allora $x_1$ è anche di minimo relativo e per il teorema di Fermat $f'(x_1) = 0$. Altrimenti $x_1$ è un estremo dell'intervallo oppure un punto interno di non derivabilità. In ogni caso $x_1$ appartiene all'insieme indicato. Per il massimo il ragionamento è lo stesso.
:::
::::

:::teorema{#unico-punto-stazionario titolo="Funzioni con un solo punto stazionario"}
Sia $f$ derivabile su un intervallo $I$, anche aperto o illimitato, e sia $x_0$ un punto interno a $I$ tale che $f'(x) < 0$ per $x < x_0$ e $f'(x) > 0$ per $x > x_0$, con $x \in I$. Allora $x_0$ è il punto di **minimo assoluto** di $f$ su $I$; con i segni scambiati è il punto di massimo assoluto.

La dimostrazione è quella del criterio della derivata prima, con il teorema di Lagrange applicato tra $x_0$ e un punto qualsiasi di $I$. Se $f'$ è continua e si annulla soltanto in $x_0$, per il teorema degli zeri il suo segno è costante a sinistra e a destra di $x_0$, quindi basta calcolarlo in un punto per parte. Il risultato serve quando l'intervallo non è chiuso e il teorema di Weierstrass non si può applicare. Per $f(x) = x + \dfrac{4}{x}$ su $(0, +\infty)$ si ha
$$
f'(x) = 1 - \frac{4}{x^2} = \frac{(x - 2)(x + 2)}{x^2} ,
$$
negativa per $0 < x < 2$ e positiva per $x > 2$; quindi il minimo assoluto è $f(2) = 4$. La funzione invece non ha massimo, perché tende a $+\infty$ agli estremi dell'intervallo.
:::

## Problemi di ottimizzazione

:::osservazione{#metodo-ottimizzazione titolo="Impostazione di un problema di ottimizzazione"}
In un problema di ottimizzazione si cerca il valore di una grandezza che rende massima o minima un'altra grandezza. Si procede per passi.

1. Si sceglie la variabile $x$ e se ne indica il significato, con l'unità di misura.
2. Si scrive la grandezza da ottimizzare come funzione della sola $x$, usando i vincoli del problema per eliminare le altre variabili.
3. Si determina l'intervallo dei valori ammissibili di $x$, dal significato del problema (lunghezze positive, quantità non negative, capacità massime).
4. Si trova il massimo o il minimo assoluto, con il metodo dell'intervallo chiuso oppure con il teorema sulle funzioni con un solo punto stazionario.
5. Si risponde alla domanda, calcolando tutte le grandezze richieste.

Un punto stazionario che non appartiene all'intervallo ammissibile non è una soluzione del problema, perciò l'intervallo si determina prima di cercare gli estremi.
:::

:::esempio{titolo="Scatola di volume massimo"}
Da un foglio quadrato di lato $12\,\mathrm{cm}$ si tagliano ai quattro angoli quadrati uguali di lato $x$, e si ripiegano i bordi per formare una scatola senza coperchio. La base è un quadrato di lato $12 - 2x$ e l'altezza è $x$, quindi il volume è
$$
V(x) = x\,(12 - 2x)^2, \qquad 0 \leq x \leq 6 ,
$$
dove gli estremi corrispondono alle scatole degeneri di volume nullo. La derivata è
$$
\begin{aligned}
V'(x)
&= (12 - 2x)^2 - 4x\,(12 - 2x) \\[6pt]
&= (12 - 2x)(12 - 6x) ,
\end{aligned}
$$
che in $(0, 6)$ si annulla solo in $x = 2$. Con il metodo dell'intervallo chiuso si confrontano $V(0) = 0$, $V(6) = 0$ e $V(2) = 2 \cdot 8^2 = 128$. Il volume massimo è quindi $128\,\mathrm{cm^3}$, con quadrati di lato $2\,\mathrm{cm}$.

::grafico{f="x*(12-2*x)^2+0*sqrt(x*(6-x))" punti="2,128,pieno" segmenti="2,0,2,128" xmin=-1 xmax=7 ymin=-20 ymax=180 nomi="x,V" titolo="Il volume $V(x) = x\,(12 - 2x)^2$ della scatola, per $0 \leq x \leq 6$, è massimo per $x = 2$, dove vale $128$"}

:::

:::esempio{titolo="Recinto di perimetro minimo"}
Tra i rettangoli di area $400\,\mathrm{m^2}$ si cerca quello di perimetro minimo. Se $x$ è la base, l'altezza è $\dfrac{400}{x}$ e il perimetro è
$$
P(x) = 2x + \frac{800}{x}, \qquad x > 0,
\qquad
P'(x) = 2 - \frac{800}{x^2} = \frac{2\,(x - 20)(x + 20)}{x^2} .
$$
L'intervallo $(0, +\infty)$ è aperto, quindi il teorema di Weierstrass non si applica. La derivata è negativa per $0 < x < 20$ e positiva per $x > 20$, perciò per il teorema sulle funzioni con un solo punto stazionario il minimo assoluto è in $x = 20$. Il rettangolo cercato è il **quadrato** di lato $20\,\mathrm{m}$, con perimetro $80\,\mathrm{m}$.
:::

## Applicazioni economiche

::::teorema{#profitto-massimo titolo="Condizioni per il profitto massimo"}
Siano $R(q)$ e $C(q)$ il ricavo e il costo, derivabili due volte, e sia $\pi(q) = R(q) - C(q)$ il profitto. Sia $q_0 > 0$ un punto interno all'intervallo delle quantità ammissibili.

- **Condizione del primo ordine**: se $q_0$ è un punto di massimo del profitto, allora $\pi'(q_0) = 0$, cioè
$$
R'(q_0) = C'(q_0) .
$$
- **Condizione del secondo ordine**: se $R'(q_0) = C'(q_0)$ e $R''(q_0) < C''(q_0)$, allora $q_0$ è un punto di massimo relativo del profitto.

In parole, nella quantità ottima il ricavo marginale è uguale al costo marginale. Se fosse $R'(q) > C'(q)$, un'unità in più porterebbe più ricavo che costo e converrebbe produrla; se fosse $R'(q) < C'(q)$, converrebbe produrre meno. In concorrenza perfetta il prezzo $p$ è costante, $R(q) = p\,q$ e $R'(q) = p$, quindi la condizione del primo ordine diventa $p = C'(q_0)$ e quella del secondo ordine $C''(q_0) > 0$, cioè il costo marginale deve essere crescente.

:::dimostrazione
La prima condizione è il teorema di Fermat applicato a $\pi$, con $\pi'(q) = R'(q) - C'(q)$. Per la seconda, $\pi'(q_0) = 0$ e $\pi''(q_0) = R''(q_0) - C''(q_0) < 0$, quindi per il criterio della derivata seconda $q_0$ è un punto di massimo relativo di $\pi$.
:::
::::

:::esempio{titolo="Profitto in concorrenza perfetta"}
Un'impresa vende al prezzo $p = 39$ euro e ha costo $C(q) = q^3 - 12q^2 + 60q + 50$, con $q \geq 0$. La condizione del primo ordine $p = C'(q)$ è
$$
39 = 3q^2 - 24q + 60
\iff
3q^2 - 24q + 21 = 0
\iff
q^2 - 8q + 7 = 0 ,
$$
con soluzioni $q = 1$ e $q = 7$. Per la condizione del secondo ordine si calcola $C''(q) = 6q - 24$. Si ha $C''(1) = -18 < 0$, quindi $q = 1$ è un punto di *minimo* del profitto, mentre $C''(7) = 18 > 0$, quindi $q = 7$ è un punto di massimo relativo. Il profitto è
$$
\pi(q) = 39q - C(q) = -q^3 + 12q^2 - 21q - 50 ,
$$
e vale $\pi(7) = 48$ euro e $\pi(0) = -50$ euro. Il segno di $\pi'(q) = -3(q - 1)(q - 7)$ indica che $\pi$ decresce su $[0, 1]$, cresce su $[1, 7]$ e decresce su $[7, +\infty)$, quindi il massimo su $[0, +\infty)$ è il maggiore tra $\pi(0)$ e $\pi(7)$. Il profitto massimo è perciò $48$ euro, con $7$ unità.

::grafico{f="-x^3+12*x^2-21*x-50+0*sqrt(x*(10-x))" punti="1,-60,pieno;7,48,pieno;0,-50,pieno" segmenti="7,0,7,48;1,0,1,-60" xmin=-2 xmax=12 ymin=-100 ymax=100 nomi="q,π" titolo="Il profitto $\pi(q) = -q^3 + 12q^2 - 21q - 50$ ha un minimo in $q = 1$ e un massimo in $q = 7$; in entrambi i punti il prezzo è uguale al costo marginale"}

:::

:::teorema{#costo-medio-minimo titolo="Costo medio minimo"}
Sia $C$ derivabile e sia $\bar{C}(q) = \dfrac{C(q)}{q}$ il costo medio, per $q > 0$. Se $q_0$ è un punto di minimo del costo medio, allora
$$
C'(q_0) = \bar{C}(q_0) ,
$$
cioè nel punto di costo medio minimo il costo marginale è uguale al costo medio. Il risultato segue dal teorema di Fermat e dalla formula $\bar{C}'(q) = \dfrac{1}{q} \left( C'(q) - \bar{C}(q) \right)$, ricavata nell'argomento sulle derivate, le funzioni marginali e l'elasticità. Per $C(q) = q^2 + 4q + 100$ si ha
$$
\bar{C}(q) = q + 4 + \frac{100}{q},
\qquad
\bar{C}'(q) = 1 - \frac{100}{q^2} ,
$$
negativa per $0 < q < 10$ e positiva per $q > 10$. Per il teorema sulle funzioni con un solo punto stazionario il costo medio minimo è $\bar{C}(10) = 24$ euro, e infatti $C'(10) = 2 \cdot 10 + 4 = 24$.

::grafico{f="x+4+100/x+0*sqrt(x);2*x+4+0*sqrt(x)" punti="10,24,pieno" segmenti="10,0,10,24" xmin=-4 xmax=36 ymin=-10 ymax=90 nomi="q,€" legenda="\bar{C}(q) = q + 4 + \dfrac{100}{q};C'(q) = 2q + 4" titolo="Il costo marginale $C'(q) = 2q + 4$ incontra il costo medio nel suo punto di minimo, $q = 10$, dove entrambi valgono $24$ euro"}

:::

:::osservazione{#ricavo-massimo titolo="Ricavo massimo"}
Il ricavo $R(q) = p(q)\,q$ è massimo dove il ricavo marginale si annulla, $R'(q) = 0$, con la verifica del segno o della derivata seconda. Se il ricavo è scritto in funzione del prezzo, per il teorema sull'elasticità e il ricavo si ha $R'(p) = q(p)\,\big( 1 + \varepsilon(p) \big)$, quindi il prezzo che rende massimo il ricavo è quello in cui la domanda ha elasticità unitaria. Per la domanda inversa $p(q) = 60\,e^{-\frac{q}{20}}$ il ricavo e la sua derivata sono
$$
R(q) = 60\,q\,e^{-\frac{q}{20}},
\qquad
R'(q) = 60\,e^{-\frac{q}{20}} \left( 1 - \frac{q}{20} \right) .
$$
La derivata è positiva per $0 \leq q < 20$ e negativa per $q > 20$, quindi il ricavo massimo si ha con $q = 20$ unità, al prezzo $p(20) = \dfrac{60}{e} \approx 22{,}07$ euro, e vale $R(20) = \dfrac{1200}{e} \approx 441{,}46$ euro.

::grafico{f="60*x*exp(-x/20)+0*sqrt(x)" punti="20,441.46,pieno" segmenti="20,0,20,441.46" xmin=-10 xmax=90 ymin=-50 ymax=450 nomi="q,R" titolo="Il ricavo $R(q) = 60\,q\,e^{-\frac{q}{20}}$ cresce fino a $q = 20$ e poi decresce; il valore massimo è $\dfrac{1200}{e} \approx 441{,}46$ euro"}

:::
