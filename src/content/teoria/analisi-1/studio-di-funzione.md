---
titolo: Studio di funzione
sommario: Lo schema completo dello studio, i criteri per massimi, minimi e flessi, la convessità e la costruzione del grafico qualitativo.
---

## Lo schema dello studio

:::definizione{#schema-dello-studio titolo="Schema dello studio di funzione"}
Studiare una funzione significa ricavare dalla sua espressione le proprietà che ne determinano il grafico. Ogni passo è fondato su un risultato della teoria:

- dominio: condizioni di esistenza dell'espressione (denominatori non nulli, argomenti dei logaritmi positivi, radicandi delle radici di indice pari non negativi), da imporre in sistema quando sono più di una;
- simmetrie e periodicità: $f(-x) = f(x)$ per una funzione pari (grafico simmetrico rispetto all'asse $y$), $f(-x) = -f(x)$ per una dispari (grafico simmetrico rispetto all'origine), $f(x + T) = f(x)$ per una periodica, che si studia su un solo periodo;
- segno e intersezioni con gli assi: la disequazione $f(x) > 0$ e l'equazione $f(x) = 0$; quando l'equazione non si risolve per via algebrica, gli zeri si localizzano con il teorema degli zeri;
- limiti agli estremi del dominio e asintoti: definizioni di limite e di asintoto del capitolo sui limiti;
- continuità: teorema di continuità delle funzioni elementari e delle operazioni tra funzioni continue;
- derivabilità e derivata prima: regole di derivazione del capitolo sulle derivate; nei punti di raccordo, limite del rapporto incrementale oppure limiti laterali di $f'$;
- monotonia e punti stazionari: test di monotonia;
- massimi e minimi relativi e assoluti: teorema di Fermat, criterio della derivata prima, criterio della derivata seconda, teorema di Weierstrass;
- concavità, convessità e punti di flesso: caratterizzazione della convessità con la derivata seconda;
- grafico qualitativo: sintesi di tutte le informazioni in un disegno coerente.
:::

:::osservazione
I passi si controllano a vicenda. Se dal segno risulta $f(x) > 0$ su un intervallo e dal calcolo dei limiti risulta $f(x) \to -\infty$ in un suo estremo, almeno uno dei due risultati è sbagliato; se la funzione è pari, massimi, minimi e flessi compaiono in coppie simmetriche. Un controllo di coerenza tra i passi individua gli errori di calcolo prima del disegno del grafico.
:::

## Monotonia e punti stazionari

:::teorema{#test-di-monotonia titolo="Test di monotonia"}
Sia $f$ continua su un intervallo $I$ e derivabile nei punti interni di $I$.

- Se $f'(x) > 0$ in ogni punto interno, $f$ è strettamente crescente su $I$.
- Se $f'(x) < 0$ in ogni punto interno, $f$ è strettamente decrescente su $I$.
- Se $f'(x) = 0$ in ogni punto interno, $f$ è costante su $I$.

Il teorema segue dal teorema di Lagrange e la dimostrazione si trova nel capitolo sulle derivate. Nello studio di funzione si risolve la disequazione $f'(x) > 0$ e si riporta il risultato nella tabella dei segni: su ogni intervallo in cui $f'$ ha segno costante la monotonia è determinata.
:::

:::definizione{#punti-stazionari titolo="Punto stazionario"}
Un punto $x_0$ interno al dominio, con $f$ derivabile in $x_0$ e $f'(x_0) = 0$, si dice stazionario: la retta tangente in $(x_0, f(x_0))$ è orizzontale. I punti stazionari sono i candidati naturali per massimi e minimi relativi interni, e la loro natura si stabilisce con i criteri della derivata prima e della derivata seconda.
:::

:::attenzione
Il test di monotonia vale su un intervallo, non su un'unione di intervalli. Per $f(x) = \dfrac{1}{x}$ si ha $f'(x) = -\dfrac{1}{x^2} < 0$ in ogni punto del dominio, quindi $f$ è decrescente su $(-\infty, 0)$ e su $(0, +\infty)$ separatamente; sull'unione non lo è, perché $f(-1) = -1 < 1 = f(1)$.
:::

## Massimi e minimi relativi

:::definizione{#massimi-minimi-relativi titolo="Massimo e minimo relativo"}
$f : A \to \mathbb{R}$. Un punto $x_0 \in A$ è di massimo relativo se esiste un intorno $U$ di $x_0$ tale che $f(x) \leq f(x_0)$ per ogni $x \in U \cap A$; è di minimo relativo se nelle stesse condizioni $f(x) \geq f(x_0)$. Il valore $f(x_0)$ si chiama massimo (o minimo) relativo, il punto $x_0$ punto di massimo (o di minimo). La ricerca di questi punti si fonda sul teorema di Fermat, dimostrato nel capitolo sulle derivate.
:::

:::richiamo{titolo="Teorema di Fermat"}
Se $x_0$ è interno al dominio, $f$ è derivabile in $x_0$ e $x_0$ è di massimo o di minimo relativo, allora $f'(x_0) = 0$.
:::

:::osservazione
Il teorema di Fermat riduce la ricerca dei massimi e dei minimi relativi a tre famiglie di candidati: i punti stazionari, i punti in cui $f$ non è derivabile, gli estremi del dominio, dove il teorema non si applica perché il punto non è interno. Il teorema non si inverte: $f(x) = x^3$ ha $f'(0) = 0$, ma $0$ non è né di massimo né di minimo, perché la funzione è strettamente crescente.
:::

## Criteri per la natura dei punti stazionari

:::teorema{#criterio-derivata-prima titolo="Criterio della derivata prima"}
Sia $f$ continua in $x_0$ e derivabile in un intorno di $x_0$, tranne al più $x_0$ stesso.

- Se $f'(x) > 0$ a sinistra di $x_0$ e $f'(x) < 0$ a destra, $x_0$ è di massimo relativo.
- Se $f'(x) < 0$ a sinistra e $f'(x) > 0$ a destra, $x_0$ è di minimo relativo.
- Se $f'$ ha lo stesso segno dai due lati, $x_0$ non è né di massimo né di minimo.

Il criterio segue dal test di monotonia applicato ai due lati di $x_0$. Non richiede la derivabilità in $x_0$, quindi classifica anche i punti angolosi e le cuspidi; in pratica coincide con la lettura della riga di $f'$ nella tabella dei segni.
:::

:::teorema{#criterio-derivata-seconda titolo="Criterio della derivata seconda"}
Sia $f$ derivabile due volte in $x_0$ con $f'(x_0) = 0$.

- Se $f''(x_0) > 0$, $x_0$ è di minimo relativo.
- Se $f''(x_0) < 0$, $x_0$ è di massimo relativo.
- Se $f''(x_0) = 0$, il criterio non decide: $x^4$, $-x^4$ e $x^3$ hanno derivata prima e seconda nulle in $0$, che è rispettivamente punto di minimo, punto di massimo, né l'uno né l'altro.

Il criterio è comodo quando lo studio del segno di $f'$ è laborioso e il valore $f''(x_0)$ si calcola in fretta.
:::

:::teorema{#criterio-derivate-successive titolo="Criterio delle derivate successive"}
Sia $f$ derivabile $n$ volte in $x_0$ con
$$
f'(x_0) = f''(x_0) = \dots = f^{(n-1)}(x_0) = 0, \qquad f^{(n)}(x_0) \neq 0 .
$$
Dalla formula di Taylor (capitolo sulle derivate) segue
$$
f(x) - f(x_0) = \frac{f^{(n)}(x_0)}{n!}\,(x - x_0)^n + o\bigl((x - x_0)^n\bigr) ,
$$
quindi vicino a $x_0$ la differenza $f(x) - f(x_0)$ ha il segno del termine di Taylor.

- Se $n$ è pari e $f^{(n)}(x_0) > 0$, $x_0$ è di minimo relativo; se $f^{(n)}(x_0) < 0$, di massimo relativo.
- Se $n$ è dispari, $x_0$ non è né di massimo né di minimo; è un punto di flesso a tangente orizzontale.

Per $f(x) = x^4$ in $0$ le prime tre derivate sono nulle e $f^{(4)}(0) = 24 > 0$, con $n = 4$ pari, quindi $0$ è punto di minimo.
:::

:::esempio{titolo="I tre criteri sulla stessa funzione"}
$f(x) = x^4 - 4x^3$, $f'(x) = 4x^3 - 12x^2 = 4x^2(x - 3)$, punti stazionari $0$ e $3$. Dalla derivata seconda $f''(x) = 12x^2 - 24x$ si ha $f''(3) = 36 > 0$, quindi $3$ è punto di minimo relativo, con $f(3) = -27$. Poiché $f''(0) = 0$, in $0$ il criterio della derivata seconda non decide; la derivata prima è negativa sia a sinistra sia a destra di $0$, perché il fattore $4x^2$ è positivo e $x - 3 < 0$, quindi $0$ non è né di massimo né di minimo. In alternativa $f'''(0) = -24 \neq 0$ con $n = 3$ dispari, perciò $0$ è un flesso a tangente orizzontale.

::grafico{f="x^4-4*x^3" xmin=-2 xmax=5 ymin=-30 ymax=15 titolo="y = x^4 - 4x^3: minimo in x = 3, flesso a tangente orizzontale in x = 0"}
:::

## Massimi e minimi assoluti

:::definizione{#massimi-minimi-assoluti titolo="Massimo e minimo assoluto"}
$x_0 \in A$ è di massimo assoluto per $f : A \to \mathbb{R}$ se $f(x) \leq f(x_0)$ per ogni $x \in A$; è di minimo assoluto se $f(x) \geq f(x_0)$ per ogni $x \in A$. Se $f$ è continua su un intervallo chiuso e limitato $[a, b]$, il teorema di Weierstrass (capitolo sui limiti) garantisce che massimo e minimo assoluti esistono; per il teorema di Fermat vanno cercati tra i punti stazionari interni, i punti interni di non derivabilità e gli estremi $a$ e $b$. Il massimo assoluto è il più grande tra i valori di $f$ in questi punti, il minimo assoluto il più piccolo.
:::

:::esempio{titolo="Massimo e minimo su un intervallo chiuso"}
$f(x) = x^3 - 3x$ su $[0, 2]$. La funzione è ovunque derivabile e $f'(x) = 3x^2 - 3$ si annulla in $x = 1$; il punto $x = -1$ non appartiene all'intervallo. I candidati sono $0$, $1$ e $2$, con
$$
f(0) = 0, \qquad f(1) = -2, \qquad f(2) = 2 ,
$$
quindi il minimo assoluto è $-2$, assunto in $x = 1$, e il massimo assoluto è $2$, assunto in $x = 2$.
:::

:::osservazione
Su un dominio non chiuso o non limitato l'esistenza di massimo e minimo assoluti non è garantita e si decide con i limiti. Se $f(x) \to +\infty$ in un estremo del dominio, il massimo assoluto non esiste; se $f$ è limitata ma l'estremo superiore non è un valore assunto, il massimo non esiste e la funzione ha soltanto estremo superiore.
:::

## Funzioni convesse e concave

:::definizione{#convessita titolo="Funzione convessa e funzione concava"}
$f$ è convessa su un intervallo $I$ se per ogni $x_1, x_2 \in I$ e ogni $t \in [0, 1]$ vale
$$
f\bigl((1 - t)\,x_1 + t\,x_2\bigr) \leq (1 - t)\,f(x_1) + t\,f(x_2) ,
$$
cioè se ogni segmento che congiunge due punti del grafico non scende sotto il grafico. $f$ è concava se vale la disuguaglianza opposta, cioè se $-f$ è convessa. Con le disuguaglianze strette, per $x_1 \neq x_2$ e $0 < t < 1$, si parla di convessità e concavità stretta. La definizione non richiede la derivabilità; per le funzioni derivabili due volte il controllo pratico passa dalla derivata seconda.
:::

:::teorema{#convessita-derivata-seconda titolo="Convessità e derivata seconda"}
Sia $f$ derivabile due volte su un intervallo $I$. $f$ è convessa su $I$ se e solo se $f''(x) \geq 0$ per ogni $x \in I$; se $f''(x) > 0$ nei punti interni, $f$ è strettamente convessa. Analogamente $f$ è concava su $I$ se e solo se $f''(x) \leq 0$. La convessità equivale alla crescenza di $f'$, quindi il risultato segue dal test di monotonia applicato a $f'$; la dimostrazione si rimanda al capitolo sulle derivate. Nello studio di funzione la concavità si ricava dalla disequazione $f''(x) > 0$, riportata nella tabella dei segni.
:::

:::teorema{#convessita-e-tangente titolo="Posizione rispetto alla tangente"}
Sia $f$ derivabile su un intervallo $I$. $f$ è convessa su $I$ se e solo se per ogni $x_0 \in I$ il grafico sta sopra la retta tangente in $x_0$, cioè
$$
f(x) \geq f(x_0) + f'(x_0)\,(x - x_0) \qquad \text{per ogni } x \in I ;
$$
per una funzione concava il grafico sta sotto ogni tangente. Dal teorema si ricavano disuguaglianze: $e^x$ è convessa su $\mathbb{R}$ perché la sua derivata seconda $e^x$ è positiva, e la tangente in $0$ è la retta $y = 1 + x$, quindi $e^x \geq 1 + x$ per ogni $x \in \mathbb{R}$.
:::

:::esempio
$f(x) = e^x$ e la tangente in $0$. Il grafico tocca la retta $y = 1 + x$ solo nel punto $(0, 1)$ e sta sopra di essa in ogni altro punto, come accade a ogni funzione strettamente convessa con ciascuna delle sue tangenti.

::grafico{f="exp(x)" xmin=-3 xmax=2.5 ymin=-2 ymax=8 titolo="y = e^x, convessa: il grafico sta sopra la tangente y = 1 + x"}
:::

## Punti di flesso

:::definizione{#punti-di-flesso titolo="Punto di flesso"}
Un punto $x_0$ interno al dominio è di flesso se $f$ è continua in $x_0$, il grafico ammette retta tangente in $(x_0, f(x_0))$, eventualmente verticale, ed esiste un intorno di $x_0$ in cui $f$ è convessa da una parte e concava dall'altra. Nel punto di flesso il grafico attraversa la propria tangente. Il flesso si dice a tangente orizzontale se $f'(x_0) = 0$, a tangente obliqua se $f'(x_0) \neq 0$, a tangente verticale se il rapporto incrementale tende a $+\infty$ o a $-\infty$.
:::

:::teorema{#flessi-derivata-seconda titolo="Condizione necessaria per il flesso"}
Se $x_0$ è un punto di flesso e $f$ è derivabile due volte in $x_0$, allora $f''(x_0) = 0$. I candidati sono quindi gli zeri di $f''$ e i punti in cui $f''$ non esiste; il candidato è un flesso quando $f''$ cambia segno attraversandolo, per la caratterizzazione della convessità con la derivata seconda.
:::

:::attenzione
L'annullarsi della derivata seconda è una condizione necessaria ma non sufficiente. $f(x) = x^4$ ha $f''(x) = 12x^2$, nulla in $0$ ma senza cambio di segno, quindi $0$ non è un flesso; è un punto di minimo.
:::

## Tabella dei segni e grafico qualitativo

:::definizione{#tabella-dei-segni titolo="Tabella dei segni di f' e f''"}
La tabella dei segni raccoglie su righe parallele il segno di $f'$ e quello di $f''$, con una colonna per ogni intervallo delimitato dai punti notevoli: zeri delle derivate, punti di non derivabilità, punti esclusi dal dominio. Dalla riga di $f'$ si legge la monotonia, per il test di monotonia; dalla riga di $f''$ la concavità, per la caratterizzazione della convessità. La riga finale combina le due informazioni nella forma del grafico su ciascun intervallo.
:::

:::esempio{titolo="Tabella dei segni per y = x^3 - 3x"}
$f(x) = x^3 - 3x$, $f'(x) = 3x^2 - 3$, $f''(x) = 6x$. La derivata prima si annulla in $\pm 1$ ed è positiva per $|x| > 1$; la derivata seconda si annulla in $0$ ed è positiva per $x > 0$.
$$
\begin{array}{c|ccccccc}
 & x < -1 & -1 & -1 < x < 0 & 0 & 0 < x < 1 & 1 & x > 1 \\ \hline
f' & + & 0 & - & - & - & 0 & + \\
f'' & - & - & - & 0 & + & + & + \\
f & \nearrow\ \cap & \text{max} & \searrow\ \cap & \text{flesso} & \searrow\ \cup & \text{min} & \nearrow\ \cup
\end{array}
$$
La tabella dà il massimo relativo in $-1$ con $f(-1) = 2$, il minimo relativo in $1$ con $f(1) = -2$ e il flesso in $0$, con tangente $y = -3x$ perché $f'(0) = -3$.
:::

:::definizione{#grafico-qualitativo titolo="Grafico qualitativo"}
Il grafico qualitativo è un disegno che riporta correttamente le proprietà ricavate dallo studio, senza pretesa di precisione metrica. Deve mostrare il dominio con gli eventuali punti esclusi, gli zeri e il segno, gli asintoti con il verso di avvicinamento, i punti di massimo, di minimo e di flesso con le loro coordinate, la monotonia e la concavità su ogni intervallo. Un grafico coerente con la tabella dei segni conclude lo studio e permette di rispondere a domande ulteriori, come il numero di soluzioni dell'equazione $f(x) = k$ al variare di $k \in \mathbb{R}$.
:::

:::esempio{titolo="Grafico di y = x^3 - 3x"}
La funzione è dispari, si annulla in $0$ e in $\pm\sqrt{3}$, tende a $\pm\infty$ per $x \to \pm\infty$ senza asintoti perché $\dfrac{f(x)}{x} = x^2 - 3 \to +\infty$, ha massimo relativo $2$ in $-1$, minimo relativo $-2$ in $1$ e flesso nell'origine.

::grafico{f="x^3-3*x" xmin=-3 xmax=3 ymin=-4.5 ymax=4.5 titolo="y = x^3 - 3x: massimo in (-1, 2), minimo in (1, -2), flesso in (0, 0)"}
:::
