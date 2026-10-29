---
titolo: Massimi, minimi, flessi e studio di funzione
sommario: Come si trovano i massimi e i minimi di una funzione con la derivata prima, come si studiano concavità e flessi con la derivata seconda, come si traccia il grafico con lo schema completo dello studio di funzione e come si usano le derivate nei problemi di massimo e di minimo, nella discussione grafica di equazioni con un parametro e nella risoluzione approssimata di equazioni.
---

## Massimi e minimi

:::definizione{#massimi-minimi-assoluti titolo="Massimo e minimo assoluti"}
Sia $f$ una funzione di dominio $D$ e sia $x_0$ un punto di $D$. Il numero $f(x_0)$ è il **massimo assoluto** di $f$ se
$$
f(x) \leq f(x_0) \qquad \text{per ogni } x \in D ,
$$
e allora $x_0$ si chiama punto di massimo assoluto. Con la disuguaglianza $f(x) \geq f(x_0)$ si definiscono il **minimo assoluto** e il punto di minimo assoluto. Il massimo, se esiste, è un solo numero, mentre i punti in cui la funzione lo assume possono essere più di uno. Per esempio $f(x) = \sin x$ ha massimo assoluto $1$, assunto in tutti i punti $x = \dfrac{\pi}{2} + 2k\pi$, e minimo assoluto $-1$. La funzione $f(x) = x^2$ ha minimo assoluto $0$, assunto in $x = 0$, e non ha massimo, perché assume valori grandi quanto si vuole.
:::

:::definizione{#massimi-minimi-relativi titolo="Massimo e minimo relativi"}
Un massimo relativo confronta il valore in $x_0$ solo con i valori nei punti vicini a $x_0$. Il punto $x_0$ di $D$ è un **punto di massimo relativo** di $f$ se esiste un intorno $I(x_0)$ tale che
$$
f(x) \leq f(x_0) \qquad \text{per ogni } x \in I(x_0) \cap D .
$$
Allo stesso modo, con la disuguaglianza $f(x) \geq f(x_0)$, si definisce il **punto di minimo relativo**. I massimi e i minimi si chiamano insieme **estremi**. Ogni massimo assoluto è anche relativo, mentre un massimo relativo può non essere assoluto. La funzione $f(x) = x^3 - 6x^2 + 9x$ ha un massimo relativo in $x = 1$, con $f(1) = 4$, perché vicino a $1$ assume valori minori di $4$. Questo massimo non è assoluto, perché per esempio $f(5) = 20$.

::grafico{f="x^3-6*x^2+9*x" punti="1,4,pieno;3,0,pieno;5,20,pieno" segmenti="1,0,1,4;5,0,5,20" xmin=-1 xmax=6 ymin=-3 ymax=21 titolo="La funzione $f(x) = x^3 - 6x^2 + 9x$ ha un massimo relativo in $(1, 4)$ e un minimo relativo in $(3, 0)$; nessuno dei due è assoluto, perché per esempio $f(5) = 20 > 4$"}

:::

:::richiamo{titolo="Teorema di Fermat"}
Sia $f$ definita in un intervallo $I$ e sia $x_0$ un punto interno a $I$ di massimo o di minimo relativo. Se $f$ è derivabile in $x_0$, allora $f'(x_0) = 0$.
:::

:::osservazione{#punti-stazionari titolo="Punti stazionari e punti in cui cercare gli estremi"}
Un punto $x_0$ in cui $f'(x_0) = 0$ si chiama **punto stazionario**, perché in quel punto la tangente al grafico è orizzontale. Per il teorema di Fermat, in un punto interno in cui $f$ è derivabile un estremo è possibile *solo se* la derivata si annulla. Gli estremi di una funzione definita in un intervallo si cercano quindi tra

- i punti stazionari interni all'intervallo;
- i punti interni in cui $f$ non è derivabile;
- gli estremi dell'intervallo che appartengono al dominio.

I tre casi si presentano tutti. Per $f(x) = x^3 - 6x^2 + 9x$ si ha $f'(x) = 3x^2 - 12x + 9 = 3\,(x - 1)(x - 3)$, quindi i punti stazionari sono $x = 1$ e $x = 3$. La funzione $|x|$ ha minimo in $0$, dove non è derivabile. La funzione $f(x) = x$ sull'intervallo $[0, 2]$ ha massimo nell'estremo $x = 2$, dove la derivata vale $1$. I punti dell'elenco sono soltanto candidati, e i criteri che seguono permettono di decidere se sono estremi.
:::

## Ricerca degli estremi con la derivata prima

:::richiamo{titolo="Criterio di monotonia"}
Sia $f$ continua in un intervallo $I$ e derivabile nei punti interni a $I$. Se $f'(x) > 0$ in ogni punto interno, allora $f$ è strettamente crescente in $I$; se $f'(x) < 0$ in ogni punto interno, allora $f$ è strettamente decrescente in $I$.
:::

:::teorema{#criterio-derivata-prima titolo="Criterio della derivata prima"}
Sia $f$ continua in un intervallo $(a, b)$ che contiene $x_0$ e derivabile in $(a, b)$, escluso al più il punto $x_0$.

- Se $f'(x) > 0$ in $(a, x_0)$ e $f'(x) < 0$ in $(x_0, b)$, allora $x_0$ è un punto di **massimo relativo**.
- Se $f'(x) < 0$ in $(a, x_0)$ e $f'(x) > 0$ in $(x_0, b)$, allora $x_0$ è un punto di **minimo relativo**.
- Se $f'$ ha lo stesso segno in $(a, x_0)$ e in $(x_0, b)$, allora $x_0$ *non* è un estremo.

Nel primo caso, per il criterio di monotonia, $f$ è crescente in $(a, x_0]$ e decrescente in $[x_0, b)$, quindi $f(x) < f(x_0)$ per ogni $x \neq x_0$ dell'intervallo; gli altri casi sono analoghi. Il criterio si usa con la tabella dei segni della derivata. Per $f(x) = x^3 - 6x^2 + 9x$ si ha $f'(x) = 3\,(x - 1)(x - 3)$, e

| | $x < 1$ | $1 < x < 3$ | $x > 3$ |
| --- | --- | --- | --- |
| $f'(x)$ | $+$ | $-$ | $+$ |
| $f$ | crescente | decrescente | crescente |

Quindi $x = 1$ è un punto di massimo relativo, con $f(1) = 4$, e $x = 3$ è un punto di minimo relativo, con $f(3) = 0$.
:::

:::esempio{titolo="Un minimo in un punto di non derivabilità"}
La funzione $f(x) = \sqrt[3]{x^2}$ è continua su $\mathbb{R}$ e per $x \neq 0$ ha derivata
$$
f'(x) = \frac{2}{3\sqrt[3]{x}} .
$$
La derivata è negativa per $x < 0$ e positiva per $x > 0$. Per il criterio della derivata prima $x = 0$ è quindi un punto di **minimo relativo**, con $f(0) = 0$, anche se in $0$ la funzione non è derivabile. Nell'argomento sulle derivate si è visto che l'origine è una cuspide del grafico.
:::

:::attenzione
Un punto stazionario può non essere un estremo. La funzione $f(x) = x^3$ ha $f'(0) = 0$, ma $f'(x) = 3x^2$ è positiva sia a sinistra sia a destra di $0$. Per il criterio della derivata prima il punto $x = 0$ *non* è un estremo, e infatti $x^3$ è crescente su tutto $\mathbb{R}$.
:::

## Massimi e minimi assoluti

:::richiamo{titolo="Teorema di Weierstrass"}
Sia $f$ continua nell'intervallo chiuso e limitato $[a, b]$. Allora $f$ ha in $[a, b]$ un massimo assoluto e un minimo assoluto.
:::

:::teorema{#estremi-intervallo-chiuso titolo="Massimo e minimo assoluti in un intervallo chiuso"}
Sia $f$ continua in $[a, b]$ e derivabile in $(a, b)$, esclusi al più alcuni punti. Il massimo e il minimo assoluti di $f$ in $[a, b]$ esistono, per il teorema di Weierstrass, e sono assunti in punti dell'insieme formato da

- gli estremi $a$ e $b$;
- i punti stazionari di $f$ in $(a, b)$;
- i punti di $(a, b)$ in cui $f$ non è derivabile.

Infatti un estremo assoluto assunto in un punto interno in cui $f$ è derivabile è anche un estremo relativo, e per il teorema di Fermat quel punto è stazionario. Per trovare massimo e minimo si calcola quindi $f$ in ciascuno di questi punti e si confrontano i valori. Per $f(x) = x^3 - 6x^2 + 9x$ in $[-1, 4]$ i punti stazionari sono $1$ e $3$, e
$$
f(-1) = -16 ,
\qquad
f(1) = 4 ,
\qquad
f(3) = 0 ,
\qquad
f(4) = 4 .
$$
Il massimo assoluto è perciò $4$, assunto in $x = 1$ e in $x = 4$, e il minimo assoluto è $-16$, assunto in $x = -1$.

::grafico{f="x^3-6*x^2+9*x+0*sqrt((x+1)*(4-x))" punti="-1,-16,pieno;1,4,pieno;3,0,pieno;4,4,pieno" segmenti="-1,0,-1,-16;4,0,4,4" xmin=-2 xmax=5 ymin=-18 ymax=6 titolo="In $[-1, 4]$ la funzione $x^3 - 6x^2 + 9x$ ha massimo $4$, assunto in $x = 1$ e nell'estremo $x = 4$, e minimo $-16$, assunto nell'estremo $x = -1$"}

:::

:::teorema{#unico-punto-stazionario titolo="Estremi assoluti in un intervallo qualsiasi"}
Sia $f$ derivabile in un intervallo $I$, anche aperto o illimitato, e sia $x_0$ un punto interno a $I$ tale che $f'(x) < 0$ per $x < x_0$ e $f'(x) > 0$ per $x > x_0$, con $x$ in $I$. Allora $x_0$ è il punto di **minimo assoluto** di $f$ in $I$. Con i segni scambiati $x_0$ è il punto di massimo assoluto.

Per il criterio di monotonia $f$ decresce in tutta la parte di $I$ a sinistra di $x_0$ e cresce in tutta la parte a destra, quindi nessun valore è minore di $f(x_0)$. Il teorema serve quando l'intervallo non è chiuso e il teorema di Weierstrass non si può applicare. Per $f(x) = x^2 + \dfrac{16}{x}$ in $(0, +\infty)$ si ha
$$
f'(x) = 2x - \frac{16}{x^2} = \frac{2\,(x^3 - 8)}{x^2} ,
$$
che è negativa per $0 < x < 2$ e positiva per $x > 2$. Il minimo assoluto è quindi $f(2) = 4 + 8 = 12$.
:::

## Concavità e flessi

:::definizione{#concavita titolo="Concavità verso l'alto e verso il basso"}
Il grafico di $x^2$ sta sopra ciascuna delle sue rette tangenti, quello di $-x^2$ sta sotto. Sia $f$ derivabile in un intervallo $I$. Il grafico di $f$ ha la **concavità verso l'alto** in $I$ se in ogni punto di $I$ il grafico sta sopra la retta tangente in quel punto, cioè se per ogni $x_0$ di $I$
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{per ogni } x \in I .
$$
Il grafico ha la **concavità verso il basso** se vale la disuguaglianza $\leq$. Una funzione con la concavità verso l'alto si dice anche **convessa**, una con la concavità verso il basso **concava**. Per $f(x) = x^2$ la differenza tra la funzione e la tangente in $x_0$ è
$$
x^2 - \big( x_0^2 + 2x_0\,(x - x_0) \big) = x^2 - 2x_0 x + x_0^2 = (x - x_0)^2 \geq 0 ,
$$
quindi il grafico di $x^2$ ha la concavità verso l'alto su tutto $\mathbb{R}$.
:::

:::teorema{#concavita-derivata-seconda titolo="Segno della derivata seconda e concavità"}
Sia $f$ derivabile due volte in un intervallo $I$.

- Se $f''(x) > 0$ per ogni $x$ interno a $I$, allora il grafico di $f$ ha la **concavità verso l'alto** in $I$.
- Se $f''(x) < 0$ per ogni $x$ interno a $I$, allora il grafico di $f$ ha la **concavità verso il basso** in $I$.

La derivata seconda è la derivata di $f'$, cioè del coefficiente angolare della tangente. Se è positiva, il coefficiente angolare della tangente cresce al crescere di $x$. Con questo teorema la concavità si studia come la monotonia, con la tabella dei segni di $f''$. Per esempio $e^{x}$ ha la concavità verso l'alto su $\mathbb{R}$, perché $\left( e^{x} \right)'' = e^{x} > 0$, e $\ln x$ ha la concavità verso il basso in $(0, +\infty)$, perché $(\ln x)'' = -\dfrac{1}{x^2} < 0$. La dimostrazione si studia all'università.
:::

:::definizione{#punto-di-flesso titolo="Punto di flesso"}
Sia $f$ continua in un intorno di $x_0$. Il punto $x_0$ è un **punto di flesso** se il grafico ha la concavità verso l'alto da una parte di $x_0$ e verso il basso dall'altra, e se nel punto $\big( x_0, f(x_0) \big)$ esiste la retta tangente. Nel flesso il grafico attraversa la retta tangente, che si chiama **tangente inflessionale**. Il flesso si dice

- **orizzontale** se la tangente è orizzontale, cioè se $f'(x_0) = 0$, come quello di $x^3$ nell'origine;
- **obliquo** se $f'(x_0)$ è un numero diverso da $0$;
- **verticale** se la tangente è verticale, come quello di $\sqrt[3]{x}$ nell'origine, visto nell'argomento sulle derivate.
:::

:::teorema{#condizioni-flesso titolo="Derivata seconda e flessi"}
Sia $f$ derivabile due volte in un intorno di $x_0$.

- Condizione *necessaria*: se $x_0$ è un punto di flesso, allora $f''(x_0) = 0$.
- Condizione *sufficiente*: se $f''(x_0) = 0$ e $f''$ ha un segno a sinistra di $x_0$ e il segno opposto a destra, allora $x_0$ è un punto di flesso.

La seconda condizione segue dal teorema sul segno della derivata seconda. I flessi si cercano quindi tra gli zeri di $f''$, e per ciascuno si controlla il cambio di segno. Per $f(x) = x^3 - 6x^2 + 9x$ si ha $f''(x) = 6x - 12$, che è negativa per $x < 2$ e positiva per $x > 2$. Perciò $x = 2$ è un **flesso obliquo**, con $f(2) = 2$ e $f'(2) = -3$, e la tangente inflessionale è
$$
y - 2 = -3\,(x - 2) ,
\qquad
\text{cioè}
\qquad
y = -3x + 8 .
$$

::grafico{f="x^3-6*x^2+9*x;-3*x+8" punti="2,2,pieno" xmin=-1 xmax=5 ymin=-4 ymax=8 legenda="y = x^3 - 6x^2 + 9x;y = -3x + 8" titolo="Nel flesso $(2, 2)$ il grafico di $x^3 - 6x^2 + 9x$ passa dalla concavità verso il basso alla concavità verso l'alto e attraversa la tangente inflessionale $y = -3x + 8$"}

:::

:::attenzione
L'annullarsi della derivata seconda non basta per avere un flesso. La funzione $f(x) = x^4$ ha $f''(0) = 0$, ma $f''(x) = 12x^2$ è positiva sia a sinistra sia a destra di $0$, quindi il grafico ha la concavità verso l'alto su tutto $\mathbb{R}$. In $x = 0$ la funzione ha un minimo, e *non* un flesso.
:::

:::teorema{#criterio-derivata-seconda titolo="Criterio della derivata seconda per gli estremi"}
Sia $f$ derivabile due volte in un intorno di $x_0$, con $f''$ continua, e sia $f'(x_0) = 0$.

- Se $f''(x_0) > 0$, allora $x_0$ è un punto di **minimo relativo**.
- Se $f''(x_0) < 0$, allora $x_0$ è un punto di **massimo relativo**.

Se $f''(x_0) > 0$, per il teorema della permanenza del segno $f''$ è positiva in un intorno di $x_0$. In quell'intorno il grafico ha la concavità verso l'alto e sta sopra la tangente orizzontale $y = f(x_0)$, quindi $x_0$ è un punto di minimo. Con questo criterio un punto stazionario si classifica con un solo calcolo. Per $f(x) = x^3 - 6x^2 + 9x$ si ha $f''(1) = -6 < 0$ e $f''(3) = 6 > 0$, quindi $x = 1$ è di massimo e $x = 3$ è di minimo, come con la tabella dei segni di $f'$. Se $f''(x_0) = 0$ il criterio non permette di concludere. Le funzioni $x^4$, $-x^4$ e $x^3$ hanno derivata prima e derivata seconda nulle in $0$, e in $0$ hanno rispettivamente un minimo, un massimo e un flesso orizzontale; in questi casi si torna al segno di $f'$.
:::

## Schema dello studio di funzione

:::osservazione{#schema-studio-di-funzione titolo="Schema dello studio di funzione"}
Per tracciare il grafico di una funzione si raccolgono le informazioni in quest'ordine.

1. **Dominio**, con le condizioni viste nell'argomento sulle funzioni.
2. **Simmetrie e periodicità**: si controlla se $f$ è pari, dispari o periodica.
3. **Intersezioni con gli assi e segno**: si risolvono $f(x) = 0$ e $f(x) > 0$, e si calcola $f(0)$ se $0$ appartiene al dominio.
4. **Limiti e asintoti**: si calcolano i limiti agli estremi del dominio e si cercano gli asintoti verticali, orizzontali e obliqui, come nell'argomento sulla continuità e gli asintoti.
5. **Derivata prima**: si cercano i punti di non derivabilità e, dal segno di $f'$, gli intervalli di crescenza e di decrescenza e i massimi e i minimi relativi.
6. **Derivata seconda**: dal segno di $f''$ si ricavano la concavità e i flessi, e per ogni flesso si scrive la tangente inflessionale quando è richiesta.
7. **Grafico**: si riportano nel piano gli asintoti e i punti trovati e si traccia la curva in accordo con tutte le informazioni.

Le informazioni si controllano a vicenda. Se per esempio la tabella di $f'$ indica un massimo in un punto dove il segno di $f$ e i limiti impongono un minimo, nei calcoli c'è un errore.
:::

:::esempio{titolo="Studio di una funzione razionale fratta"}
Si studia $f(x) = \dfrac{x^2}{x - 1}$.

1. Il denominatore si annulla per $x = 1$, quindi $D = (-\infty, 1) \cup (1, +\infty)$.
2. Il dominio contiene $-1$ e non contiene $1$, quindi non è simmetrico rispetto a $0$, e $f$ non è né pari né dispari.
3. Il numeratore è positivo per $x \neq 0$, quindi il segno di $f$ è quello di $x - 1$. La funzione è negativa per $x < 1$, con $x \neq 0$, e positiva per $x > 1$. Il grafico passa per l'origine.
4. Per $x \to 1^-$ il numeratore tende a $1$ e il denominatore a $0^-$, quindi $f(x) \to -\infty$; per $x \to 1^+$ si ha $f(x) \to +\infty$. La retta $x = 1$ è perciò un asintoto verticale. Il numeratore ha grado superiore di uno al denominatore, quindi si cerca un asintoto obliquo:
$$
m = \lim_{x \to \pm\infty} \frac{f(x)}{x} = \lim_{x \to \pm\infty} \frac{x^2}{x^2 - x} = 1 ,
\qquad
q = \lim_{x \to \pm\infty} \left( \frac{x^2}{x - 1} - x \right) = \lim_{x \to \pm\infty} \frac{x}{x - 1} = 1 .
$$
La retta $y = x + 1$ è l'asintoto obliquo, sia per $x \to +\infty$ sia per $x \to -\infty$.
5. Per la regola del quoziente
$$
f'(x) = \frac{2x\,(x - 1) - x^2}{(x - 1)^2} = \frac{x\,(x - 2)}{(x - 1)^2} .
$$
Il denominatore è positivo, quindi $f'$ è positiva per $x < 0$ e per $x > 2$, negativa per $0 < x < 1$ e per $1 < x < 2$. Per il criterio della derivata prima $x = 0$ è un punto di massimo relativo, con $f(0) = 0$, e $x = 2$ è un punto di minimo relativo, con $f(2) = 4$.
6. Derivando ancora si ottiene $f''(x) = \dfrac{2}{(x - 1)^3}$, che è negativa per $x < 1$ e positiva per $x > 1$. Il grafico ha la concavità verso il basso in $(-\infty, 1)$ e verso l'alto in $(1, +\infty)$. Il punto $x = 1$ non appartiene al dominio, quindi la funzione non ha flessi.

::grafico{f="x^2/(x-1);x+1" punti="0,0,pieno;2,4,pieno" asintoti="x=1" xmin=-4 xmax=6 ymin=-6 ymax=10 legenda="y = \dfrac{x^2}{x - 1};y = x + 1" titolo="Grafico di $f(x) = \dfrac{x^2}{x - 1}$, con l'asintoto verticale $x = 1$, l'asintoto obliquo $y = x + 1$, il massimo relativo $(0, 0)$ e il minimo relativo $(2, 4)$"}

Il valore del massimo relativo, $0$, è minore del valore del minimo relativo, $4$. Questo è possibile perché i due punti stanno in intervalli diversi del dominio, separati dall'asintoto verticale.
:::

## Funzioni trascendenti e con valore assoluto

:::esempio{titolo="Studio di una funzione esponenziale"}
Si studia $f(x) = \dfrac{e^{x}}{x}$, definita per $x \neq 0$. La funzione non è né pari né dispari, perché $f(-1) = -\dfrac{1}{e}$ e $f(1) = e$. Il numeratore è sempre positivo, quindi $f$ ha il segno di $x$ e il grafico non incontra gli assi.

Per $x \to 0^-$ si ha $f(x) \to -\infty$ e per $x \to 0^+$ si ha $f(x) \to +\infty$, quindi $x = 0$ è un asintoto verticale. Per $x \to -\infty$ il numeratore tende a $0$ e il denominatore a $-\infty$, perciò $f(x) \to 0$ e $y = 0$ è un asintoto orizzontale a sinistra. Per $x \to +\infty$ l'esponenziale è un infinito di ordine superiore a $x$, quindi $f(x) \to +\infty$; anche $\dfrac{f(x)}{x} = \dfrac{e^{x}}{x^2}$ tende a $+\infty$, perciò non c'è asintoto obliquo.

La derivata prima e la derivata seconda sono
$$
f'(x) = \frac{e^{x}\,(x - 1)}{x^2} ,
\qquad
f''(x) = \frac{e^{x}\,\left( x^2 - 2x + 2 \right)}{x^3} .
$$
La derivata prima è negativa per $x < 1$, con $x \neq 0$, e positiva per $x > 1$, quindi $x = 1$ è un punto di minimo relativo, con $f(1) = e$. Il trinomio $x^2 - 2x + 2$ ha discriminante negativo ed è sempre positivo, perciò $f''$ ha il segno di $x^3$. Il grafico ha la concavità verso il basso per $x < 0$ e verso l'alto per $x > 0$, e non ci sono flessi.

::grafico{f="exp(x)/x" punti="1,2.718,pieno" asintoti="x=0;y=0" xmin=-4 xmax=4 ymin=-6 ymax=10 titolo="Grafico di $f(x) = \dfrac{e^{x}}{x}$, con gli asintoti $x = 0$ e $y = 0$ e il minimo relativo $(1, e)$"}

:::

:::osservazione{#funzioni-valore-assoluto titolo="Funzioni con il valore assoluto"}
Per studiare una funzione che contiene un valore assoluto si scrive la funzione a tratti, togliendo il valore assoluto in ciascun intervallo secondo il segno del suo argomento. Il grafico di $y = |g(x)|$ coincide con quello di $g$ dove $g(x) \geq 0$ ed è il suo simmetrico rispetto all'asse $x$ dove $g(x) < 0$. Nei punti in cui $g(x_0) = 0$ e $g'(x_0) \neq 0$ la funzione $|g|$ ha derivata destra e derivata sinistra opposte, quindi il grafico ha un **punto angoloso**. Per $g(x) = x^3 - 6x^2 + 9x = x\,(x - 3)^2$ si ha $g(x) < 0$ solo per $x < 0$, e $g'(0) = 9$. Perciò $|g|$ ha in $x = 0$ un punto angoloso, con derivata sinistra $-9$ e derivata destra $9$, e in quel punto ha un minimo relativo.
:::

:::osservazione{#funzioni-goniometriche titolo="Funzioni goniometriche"}
Se $f$ è periodica di periodo $T$, il suo grafico si ripete in ogni intervallo di ampiezza $T$, quindi basta studiarla in un solo periodo, per esempio $[0, T]$. Per $f(x) = \sin^2 x$ si ha $\sin^2 (x + \pi) = (-\sin x)^2 = \sin^2 x$, quindi il periodo è $\pi$. Le derivate sono
$$
f'(x) = 2 \sin x \cos x = \sin (2x) ,
\qquad
f''(x) = 2 \cos (2x) .
$$
In $[0, \pi]$ la derivata prima è positiva per $0 < x < \dfrac{\pi}{2}$ e negativa per $\dfrac{\pi}{2} < x < \pi$, perciò $x = \dfrac{\pi}{2}$ è un punto di massimo, con $f\left( \dfrac{\pi}{2} \right) = 1$, mentre in $0$ e in $\pi$ la funzione ha minimo $0$. La derivata seconda cambia segno in $x = \dfrac{\pi}{4}$ e in $x = \dfrac{3\pi}{4}$, che sono flessi con ordinata $\dfrac{1}{2}$.
:::

## Problemi di massimo e di minimo

:::osservazione{#problemi-massimo-minimo titolo="Impostazione di un problema di massimo o di minimo"}
In un problema di massimo o di minimo si cerca il valore di una grandezza che rende massima o minima un'altra grandezza, per esempio un'area, un volume, un tempo o una potenza. Si procede per passi.

1. Si sceglie la variabile $x$ e se ne indica il significato, con l'unità di misura.
2. Si scrive la grandezza da rendere massima o minima come funzione della sola $x$, usando i dati del problema per eliminare le altre variabili.
3. Si determina l'intervallo dei valori accettabili di $x$, dal significato geometrico o fisico del problema.
4. Si trova il massimo o il minimo assoluto in quell'intervallo, con il metodo dell'intervallo chiuso oppure con il teorema sugli estremi assoluti in un intervallo qualsiasi.
5. Si risponde alla domanda, calcolando tutte le grandezze richieste.

Un punto stazionario che non appartiene all'intervallo accettabile non è una soluzione del problema, perciò l'intervallo si determina prima di cercare gli estremi.
:::

:::esempio{titolo="Rettangolo inscritto in un segmento di parabola"}
Si cerca il rettangolo di area massima con la base sull'asse $x$ e i due vertici superiori sulla parabola $y = 12 - x^2$. Sia $x$ l'ascissa del vertice superiore destro, con $x > 0$. Il rettangolo è simmetrico rispetto all'asse $y$, quindi la base misura $2x$ e l'altezza misura $12 - x^2$. L'altezza è positiva per $x < \sqrt{12}$, perciò l'area è
$$
A(x) = 2x\,\left( 12 - x^2 \right) = 24x - 2x^3 ,
\qquad
0 \leq x \leq \sqrt{12} ,
$$
dove agli estremi corrispondono rettangoli degeneri di area nulla. La derivata $A'(x) = 24 - 6x^2$ si annulla in $(0, \sqrt{12})$ solo per $x = 2$. Con il metodo dell'intervallo chiuso si confrontano $A(0) = 0$, $A(\sqrt{12}) = 0$ e $A(2) = 4 \cdot 8 = 32$. L'area massima è quindi $32$, con base $4$ e altezza $8$.

::grafico{f="12-x^2" poligoni="-2,0 -2,8 2,8 2,0" punti="2,8,pieno,P" xmin=-4 xmax=4 ymin=-2 ymax=14 titolo="Il rettangolo di area massima inscritto sotto la parabola $y = 12 - x^2$ ha il vertice $P(2, 8)$, base $4$ e altezza $8$"}

:::

:::esempio{titolo="Potenza massima erogata da un generatore"}
Un generatore con forza elettromotrice $12\,\mathrm{V}$ e resistenza interna $r = 2\,\Omega$ alimenta un resistore di resistenza $R$. Per la legge di Ohm generalizzata la corrente è $i = \dfrac{12}{R + 2}$, quindi la potenza dissipata nel resistore è
$$
P(R) = R\,i^2 = \frac{144\,R}{(R + 2)^2} ,
\qquad
R > 0 .
$$
Per la regola del quoziente
$$
P'(R) = \frac{144\,(R + 2)^2 - 144\,R \cdot 2\,(R + 2)}{(R + 2)^4} = \frac{144\,(2 - R)}{(R + 2)^3} .
$$
La derivata è positiva per $0 < R < 2$ e negativa per $R > 2$, quindi per il teorema sugli estremi assoluti in un intervallo qualsiasi la potenza è **massima** per $R = 2\,\Omega$, cioè quando la resistenza esterna è uguale alla resistenza interna. La potenza massima vale $P(2) = \dfrac{288}{16} = 18\,\mathrm{W}$.
:::

## Dal grafico di una funzione a quello della derivata

:::osservazione{#grafico-derivata titolo="Corrispondenze tra il grafico di f e il grafico di f'"}
Il valore $f'(x)$ è il coefficiente angolare della tangente al grafico di $f$ nel punto di ascissa $x$. Dal grafico di $f$ si ricavano quindi le proprietà del grafico di $f'$, e viceversa.

- Dove $f$ è crescente, il grafico di $f'$ sta sopra l'asse $x$; dove $f$ è decrescente, sta sotto.
- Nei massimi e nei minimi relativi di $f$ in cui $f$ è derivabile, il grafico di $f'$ attraversa l'asse $x$.
- Dove il grafico di $f$ ha la concavità verso l'alto, $f'$ è crescente; dove ha la concavità verso il basso, $f'$ è decrescente.
- Nei flessi di $f$ la derivata $f'$ ha un massimo o un minimo relativo.

Per $f(x) = x^3 - 6x^2 + 9x$ la derivata $f'(x) = 3x^2 - 12x + 9$ ha per grafico una parabola. La parabola incontra l'asse $x$ nelle ascisse $1$ e $3$ del massimo e del minimo di $f$, ed è negativa tra le due, dove $f$ decresce. Il suo vertice ha ascissa $2$, che è l'ascissa del flesso di $f$, e ordinata $f'(2) = -3$, che è il coefficiente angolare della tangente inflessionale.

::grafico{f="x^3-6*x^2+9*x;3*x^2-12*x+9" punti="1,0,pieno;3,0,pieno;2,-3,pieno" segmenti="1,0,1,4;2,-3,2,2" xmin=-1 xmax=5 ymin=-6 ymax=10 legenda="y = f(x);y = f'(x)" titolo="Il grafico di $f'(x) = 3x^2 - 12x + 9$ incontra l'asse $x$ nelle ascisse del massimo e del minimo di $f(x) = x^3 - 6x^2 + 9x$ e ha il vertice nell'ascissa $2$ del flesso"}

:::

## Discussione grafica di equazioni con un parametro

:::osservazione{#discussione-grafica titolo="Discussione grafica di un'equazione"}
Un'equazione con un parametro $k$ che si può scrivere nella forma $f(x) = k$ si discute con il grafico di $f$. Le soluzioni dell'equazione sono le ascisse dei punti comuni al grafico di $y = f(x)$ e alla retta orizzontale $y = k$. Il numero delle soluzioni cambia quando la retta passa per un massimo o un minimo relativo di $f$ o raggiunge il valore di un asintoto orizzontale. Questi valori di $k$ si leggono nello studio di funzione.
:::

:::esempio{titolo="Numero delle soluzioni di un'equazione di terzo grado"}
Si determina, al variare di $k$, il numero delle soluzioni reali dell'equazione $x^3 - 6x^2 + 9x = k$. La funzione $f(x) = x^3 - 6x^2 + 9x$ ha massimo relativo $4$ in $x = 1$ e minimo relativo $0$ in $x = 3$, ed è crescente, decrescente e crescente nei tre intervalli $(-\infty, 1]$, $[1, 3]$ e $[3, +\infty)$. Inoltre $f(x) \to -\infty$ per $x \to -\infty$ e $f(x) \to +\infty$ per $x \to +\infty$. La retta $y = k$ incontra quindi il grafico

- in un punto se $k < 0$ oppure $k > 4$;
- in due punti se $k = 0$ oppure $k = 4$, e in questi casi una delle soluzioni è l'ascissa del minimo o del massimo;
- in tre punti se $0 < k < 4$.

::grafico{f="x^3-6*x^2+9*x;2" segmenti="-1,4,5,4" punti="1,4,pieno;3,0,pieno" xmin=-1 xmax=5 ymin=-4 ymax=8 legenda="y = x^3 - 6x^2 + 9x;y = 2" titolo="Per $0 < k < 4$ la retta $y = k$, qui $y = 2$, incontra il grafico in tre punti; per $k = 0$ e per $k = 4$ i punti diventano due"}

:::

## Risoluzione approssimata di equazioni

:::richiamo{titolo="Teorema di esistenza degli zeri"}
Sia $f$ continua nell'intervallo chiuso $[a, b]$, con $f(a)$ e $f(b)$ di segno opposto. Allora esiste almeno un punto $c$ di $(a, b)$ tale che $f(c) = 0$.
:::

:::teorema{#unicita-zero titolo="Unicità dello zero"}
Sia $f$ continua in $[a, b]$, con $f(a)$ e $f(b)$ di segno opposto, e sia $f'(x) > 0$ per ogni $x$ di $(a, b)$, oppure $f'(x) < 0$ per ogni $x$ di $(a, b)$. Allora l'equazione $f(x) = 0$ ha in $(a, b)$ **una e una sola** soluzione.

L'esistenza segue dal teorema degli zeri. Per il criterio di monotonia $f$ è strettamente monotona in $[a, b]$, quindi assume ogni valore al più una volta, e lo zero è unico. Per $f(x) = x^3 + x - 1$ si ha $f(0) = -1$, $f(1) = 1$ e $f'(x) = 3x^2 + 1 > 0$, perciò l'equazione $x^3 + x - 1 = 0$ ha una sola soluzione $\alpha$, compresa tra $0$ e $1$. Il teorema serve a **separare** le soluzioni, cioè a trovare intervalli che contengono una soluzione ciascuno, prima di approssimarle.
:::

:::esempio{#metodo-bisezione titolo="Approssimazione con il metodo di bisezione"}
Il metodo di bisezione è descritto nell'argomento sulla continuità e gli asintoti. Per $f(x) = x^3 + x - 1$ in $[0, 1]$ i punti medi successivi danno $f(0{,}5) < 0$, $f(0{,}75) > 0$, $f(0{,}625) < 0$ e $f(0{,}6875) > 0$. Dopo quattro passi la soluzione sta quindi nell'intervallo $[0{,}625;\ 0{,}6875]$, di ampiezza $\dfrac{1}{16}$. Il valore della soluzione, con quattro cifre decimali, è $\alpha \approx 0{,}6823$.
:::

:::osservazione{#metodo-tangenti titolo="Metodo delle tangenti"}
Nel **metodo delle tangenti**, detto anche metodo di Newton, si sostituisce il grafico di $f$ con una sua retta tangente. Si parte da un valore $x_0$ vicino alla soluzione e si traccia la tangente al grafico nel punto $\big( x_0, f(x_0) \big)$, di equazione $y = f(x_0) + f'(x_0)\,(x - x_0)$. Con $f'(x_0) \neq 0$ la tangente incontra l'asse $x$ nel punto di ascissa
$$
x_1 = x_0 - \frac{f(x_0)}{f'(x_0)} ,
$$
che si prende come nuova approssimazione. Ripetendo il passaggio si ottengono $x_2$, $x_3$ e così via. Se $f'$ e $f''$ non si annullano in $[a, b]$, si sceglie come $x_0$ l'estremo in cui $f$ e $f''$ hanno lo stesso segno, e allora le approssimazioni si avvicinano alla soluzione. Per $f(x) = x^3 + x - 1$ nell'intervallo $[0{,}5;\ 1]$, che contiene la soluzione, si ha $f'(x) = 3x^2 + 1 > 0$, $f''(x) = 6x > 0$ e $f(1) = 1 > 0$, perciò si parte da $x_0 = 1$:
$$
x_1 = 1 - \frac{f(1)}{f'(1)} = 1 - \frac{1}{4} = 0{,}75 ,
\qquad
x_2 = 0{,}75 - \frac{f(0{,}75)}{f'(0{,}75)} = 0{,}75 - \frac{0{,}171875}{2{,}6875} \approx 0{,}6860 .
$$
Con due soli passi l'errore è minore di $0{,}004$, mentre con la bisezione servono più passi per la stessa precisione.

::grafico{f="x^3+x-1;4*x-3" punti="1,1,pieno;0.75,0,pieno;0.682,0,vuoto" segmenti="1,0,1,1" etichette="1.05,-0.35,x₀;0.7,-0.35,x₁" xmin=-1 xmax=2 ymin=-2 ymax=4 legenda="y = x^3 + x - 1;y = 4x - 3" titolo="La tangente al grafico di $x^3 + x - 1$ nel punto di ascissa $x_0 = 1$ incontra l'asse $x$ in $x_1 = 0{,}75$, più vicino alla soluzione $\alpha \approx 0{,}68$ (punto vuoto)"}

:::
