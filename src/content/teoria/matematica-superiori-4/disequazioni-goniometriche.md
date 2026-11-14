---
titolo: Disequazioni goniometriche
sommario: Come si risolvono le disequazioni goniometriche elementari sulla circonferenza goniometrica e sul grafico, come si scrivono le soluzioni su un periodo e su tutto l'asse reale, e come si trattano le disequazioni riconducibili, lineari, omogenee, fratte, i sistemi e i domini di funzioni goniometriche.
---

## Disequazioni goniometriche e periodicità

:::definizione{#disequazione-goniometrica titolo="Disequazione goniometrica"}
Una **disequazione goniometrica** è una disequazione in cui l'incognita $x$ compare nell'argomento di almeno una funzione goniometrica, per esempio
$$
2\sin x - 1 > 0 ,
\qquad
\cos^2 x \leq \frac{1}{4} ,
\qquad
\frac{\tan x - 1}{\cos x} \geq 0 .
$$
Risolverla significa trovare tutti i numeri reali $x$, cioè tutti gli angoli misurati in radianti, che rendono vera la disuguaglianza. L'insieme di questi numeri si chiama **insieme delle soluzioni**. Per esempio $x = \dfrac{\pi}{2}$ è soluzione della prima disequazione, perché $2\sin\dfrac{\pi}{2} - 1 = 1 > 0$, mentre $x = 0$ non lo è, perché $2\sin 0 - 1 = -1 < 0$.
:::

:::richiamo{titolo="Equazioni goniometriche elementari"}
Sia $-1 \leq m \leq 1$. Allora, con $k \in \mathbb{Z}$,
$$
\sin x = m \iff x = \arcsin m + 2k\pi \quad \text{oppure} \quad x = \pi - \arcsin m + 2k\pi ,
$$
$$
\cos x = m \iff x = \pm \arccos m + 2k\pi .
$$
Per ogni $m$ reale si ha $\tan x = m \iff x = \arctan m + k\pi$.
:::

::::teorema{#periodicita-soluzioni titolo="Periodicità dell'insieme delle soluzioni"}
Se tutte le funzioni che compaiono in una disequazione sono periodiche di periodo $T$, allora un numero $x$ è soluzione se e solo se $x + T$ è soluzione. Quindi basta risolvere la disequazione in un intervallo di ampiezza $T$ e poi aggiungere $kT$, con $k \in \mathbb{Z}$, agli estremi degli intervalli trovati.

Per esempio $\sin x$ è positivo per $0 < x < \pi$, nell'intervallo $[0, 2\pi)$. Il seno ha periodo $2\pi$, perciò l'insieme delle soluzioni di $\sin x > 0$ su $\mathbb{R}$ è
$$
2k\pi < x < \pi + 2k\pi , \qquad k \in \mathbb{Z} .
$$
Con $k = 1$ si ottiene l'intervallo $(2\pi, 3\pi)$, con $k = -1$ l'intervallo $(-2\pi, -\pi)$.

:::dimostrazione
L'idea è che i due membri della disequazione assumono gli stessi valori in $x$ e in $x + T$. Sia $f(x) > 0$ la disequazione, dove $f$ è costruita con funzioni di periodo $T$. Allora $f(x + T) = f(x)$ per ogni $x$ in cui $f$ è definita. Se $x$ è soluzione si ha $f(x) > 0$, quindi anche $f(x + T) > 0$, e $x + T$ è soluzione. Ripetendo il ragionamento con $x - T$ al posto di $x$ si ottiene l'implicazione opposta.
:::
::::

:::osservazione{#intervallo-base titolo="Scelta del periodo di partenza"}
Il periodo su cui si risolve la disequazione si può scegliere liberamente, purché abbia ampiezza $T$. Di solito si usa $[0, 2\pi)$, ma quando le soluzioni stanno vicino a $x = 0$ l'intervallo $[-\pi, \pi)$ dà una scrittura più compatta. Per esempio la disequazione $\cos x > \dfrac{1}{2}$ in $[0, 2\pi)$ ha soluzioni
$$
0 \leq x < \frac{\pi}{3} \quad \text{oppure} \quad \frac{5\pi}{3} < x < 2\pi ,
$$
cioè due intervalli. In $[-\pi, \pi)$ le stesse soluzioni formano un solo intervallo, $-\dfrac{\pi}{3} < x < \dfrac{\pi}{3}$, e su $\mathbb{R}$ si scrivono $-\dfrac{\pi}{3} + 2k\pi < x < \dfrac{\pi}{3} + 2k\pi$.
:::

## Disequazioni elementari in seno

:::teorema{#disequazioni-seno titolo="Disequazioni elementari in seno"}
Sulla circonferenza goniometrica il seno di $x$ è l'ordinata del punto associato all'angolo $x$. La disequazione $\sin x > m$ chiede quindi gli angoli i cui punti stanno *sopra* la retta orizzontale $y = m$. Sia $-1 < m < 1$ e sia $\alpha = \arcsin m$, con $-\dfrac{\pi}{2} < \alpha < \dfrac{\pi}{2}$. La retta $y = m$ taglia la circonferenza nei punti associati ad $\alpha$ e a $\pi - \alpha$, e per $k \in \mathbb{Z}$ si ha
$$
\sin x > m \iff \alpha + 2k\pi < x < \pi - \alpha + 2k\pi ,
$$
$$
\sin x < m \iff \pi - \alpha + 2k\pi < x < 2\pi + \alpha + 2k\pi .
$$
Con $\geq$ o $\leq$ gli estremi sono compresi. Quando $m$ è fuori dall'intervallo $(-1, 1)$ si confronta $m$ con l'immagine $[-1, 1]$ del seno.

- Se $m \geq 1$, la disequazione $\sin x > m$ non ha soluzioni, $\sin x \geq 1$ ha le soluzioni $x = \dfrac{\pi}{2} + 2k\pi$, e $\sin x < m$ vale per ogni $x$ reale se $m > 1$.
- Se $m \leq -1$, la disequazione $\sin x < m$ non ha soluzioni, e $\sin x > -1$ vale per ogni $x \neq \dfrac{3\pi}{2} + 2k\pi$.

Per $m = \dfrac{1}{2}$ si ha $\alpha = \dfrac{\pi}{6}$ e $\pi - \alpha = \dfrac{5\pi}{6}$, quindi
$$
\sin x > \frac{1}{2} \iff \frac{\pi}{6} + 2k\pi < x < \frac{5\pi}{6} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),0.5236,2.618;cos(t),sin(t),2.618,6.8068;t,0.5,-1.4,1.4" vettori="0,0,0.866,0.5;0,0,-0.866,0.5" unicolore=1 punti="0.866,0.5,vuoto,π/6;-0.866,0.5,vuoto,5π/6" etichette="1.2,0.35,y = 1/2" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="I punti della circonferenza con ordinata maggiore di $\dfrac{1}{2}$ formano l'arco a tratto pieno, che va da $\dfrac{\pi}{6}$ a $\dfrac{5\pi}{6}$: sono le soluzioni di $\sin x > \dfrac{1}{2}$"}

:::

:::esempio{titolo="Una disequazione in seno letta sul grafico"}
Si risolve $\sin x \leq -\dfrac{\sqrt{2}}{2}$. Nell'intervallo $[0, 2\pi)$ l'equazione $\sin x = -\dfrac{\sqrt{2}}{2}$ ha le soluzioni $\dfrac{5\pi}{4}$ e $\dfrac{7\pi}{4}$, perché gli angoli associati stanno nel terzo e nel quarto quadrante e hanno come angolo di riferimento $\dfrac{\pi}{4}$. Il grafico di $y = \sin x$ sta sotto la retta $y = -\dfrac{\sqrt{2}}{2}$ tra questi due valori, e la tocca negli estremi. Quindi
$$
\frac{5\pi}{4} + 2k\pi \leq x \leq \frac{7\pi}{4} + 2k\pi , \qquad k \in \mathbb{Z} .
$$

::grafico{f="sin(x);-0.7071" area="-0.7071;sin(x);3.927;5.4978" punti="3.927,-0.7071,pieno;5.4978,-0.7071,pieno" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \sin x;y = -\dfrac{\sqrt{2}}{2}" titolo="Nell'intervallo $[0, 2\pi)$ il grafico del seno sta sotto la retta $y = -\dfrac{\sqrt{2}}{2}$ per $\dfrac{5\pi}{4} \leq x \leq \dfrac{7\pi}{4}$"}

:::

:::attenzione
Nella scrittura $a + 2k\pi < x < b + 2k\pi$ l'estremo sinistro $a$ deve essere minore dell'estremo destro $b$. Per $\sin x < \dfrac{1}{2}$ i punti della circonferenza vanno da $\dfrac{5\pi}{6}$ a $\dfrac{\pi}{6}$ passando per $\dfrac{3\pi}{2}$, e la scrittura $\dfrac{5\pi}{6} + 2k\pi < x < \dfrac{\pi}{6} + 2k\pi$ descrive un insieme vuoto, perché $\dfrac{5\pi}{6} > \dfrac{\pi}{6}$. Si aggiunge allora un giro all'estremo destro:
$$
\frac{5\pi}{6} + 2k\pi < x < \frac{13\pi}{6} + 2k\pi .
$$
In $[0, 2\pi)$ le stesse soluzioni si scrivono $0 \leq x < \dfrac{\pi}{6}$ oppure $\dfrac{5\pi}{6} < x < 2\pi$.
:::

## Disequazioni elementari in coseno e tangente

:::teorema{#disequazioni-coseno titolo="Disequazioni elementari in coseno"}
Il coseno di $x$ è l'ascissa del punto associato a $x$ sulla circonferenza goniometrica, quindi $\cos x > m$ chiede i punti che stanno *a destra* della retta verticale $x = m$. Sia $-1 < m < 1$ e sia $\beta = \arccos m$, con $0 < \beta < \pi$. Per $k \in \mathbb{Z}$ si ha
$$
\cos x > m \iff -\beta + 2k\pi < x < \beta + 2k\pi ,
$$
$$
\cos x < m \iff \beta + 2k\pi < x < 2\pi - \beta + 2k\pi .
$$
Con $\geq$ o $\leq$ gli estremi sono compresi. I casi $m \geq 1$ e $m \leq -1$ si trattano come per il seno; per esempio $\cos x \geq 1$ ha le sole soluzioni $x = 2k\pi$.

Per $m = -\dfrac{1}{2}$ si ha $\beta = \dfrac{2\pi}{3}$ e $2\pi - \beta = \dfrac{4\pi}{3}$, perciò
$$
\cos x < -\frac{1}{2} \iff \frac{2\pi}{3} + 2k\pi < x < \frac{4\pi}{3} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),2.0944,4.1888;cos(t),sin(t),4.1888,8.3776;-0.5,t,-1.35,1.35" vettori="0,0,-0.5,0.866;0,0,-0.5,-0.866" unicolore=1 punti="-0.5,0.866,vuoto,2π/3;-0.5,-0.866,vuoto,4π/3" etichette="-0.45,1.3,x = −1/2" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="I punti con ascissa minore di $-\dfrac{1}{2}$ formano l'arco a tratto pieno da $\dfrac{2\pi}{3}$ a $\dfrac{4\pi}{3}$: sono le soluzioni di $\cos x < -\dfrac{1}{2}$"}

:::

:::esempio{titolo="Una disequazione in coseno con le soluzioni attorno a zero"}
Si risolve $2\cos x - \sqrt{3} \geq 0$, cioè $\cos x \geq \dfrac{\sqrt{3}}{2}$. Poiché $\arccos \dfrac{\sqrt{3}}{2} = \dfrac{\pi}{6}$, i punti con ascissa maggiore o uguale a $\dfrac{\sqrt{3}}{2}$ formano l'arco che va da $-\dfrac{\pi}{6}$ a $\dfrac{\pi}{6}$ passando per il punto $(1, 0)$. Quindi
$$
-\frac{\pi}{6} + 2k\pi \leq x \leq \frac{\pi}{6} + 2k\pi , \qquad k \in \mathbb{Z} .
$$
Nell'intervallo $[0, 2\pi]$ si prendono $k = 0$ e $k = 1$, e le soluzioni sono $0 \leq x \leq \dfrac{\pi}{6}$ oppure $\dfrac{11\pi}{6} \leq x \leq 2\pi$.
:::

:::teorema{#disequazioni-tangente titolo="Disequazioni elementari in tangente"}
La tangente ha periodo $\pi$, è definita per $x \neq \dfrac{\pi}{2} + k\pi$ ed è **crescente** in ogni intervallo $\left( -\dfrac{\pi}{2} + k\pi, \dfrac{\pi}{2} + k\pi \right)$, dove assume una e una sola volta ogni valore reale. Perciò, per ogni $m$ reale e per $k \in \mathbb{Z}$,
$$
\tan x > m \iff \arctan m + k\pi < x < \frac{\pi}{2} + k\pi ,
$$
$$
\tan x < m \iff -\frac{\pi}{2} + k\pi < x < \arctan m + k\pi .
$$
L'estremo $\pm\dfrac{\pi}{2} + k\pi$ è sempre escluso, perché la tangente non vi è definita; l'estremo $\arctan m + k\pi$ è compreso con $\geq$ o $\leq$. Per esempio, poiché $\arctan 1 = \dfrac{\pi}{4}$,
$$
\tan x \geq 1 \iff \frac{\pi}{4} + k\pi \leq x < \frac{\pi}{2} + k\pi .
$$

::grafico{f="tan(x);1" punti="0.7854,1,pieno;3.927,1,pieno" asintoti="x=1.5708;x=4.7124" xmin=-1.6 xmax=4.8 ymin=-4 ymax=4 legenda="y = \tan x;y = 1" titolo="Il grafico della tangente sta sopra la retta $y = 1$ da $\dfrac{\pi}{4}$ all'asintoto $x = \dfrac{\pi}{2}$, e lo stesso accade dopo ogni periodo $\pi$"}

:::

:::osservazione{#disequazioni-cotangente titolo="Disequazioni in cotangente"}
La cotangente ha periodo $\pi$, è definita per $x \neq k\pi$ ed è **decrescente** in ogni intervallo $(k\pi, \pi + k\pi)$. Sia $\gamma$ l'angolo di $(0, \pi)$ con $\cot \gamma = m$. Allora $\cot x > m$ vale per $k\pi < x < \gamma + k\pi$, e $\cot x < m$ vale per $\gamma + k\pi < x < \pi + k\pi$. Per esempio $\cot \dfrac{\pi}{4} = 1$, quindi $\cot x > 1$ ha le soluzioni $k\pi < x < \dfrac{\pi}{4} + k\pi$.
:::

## Argomento trasformato e soluzioni in un intervallo

:::teorema{#argomento-trasformato titolo="Disequazioni con argomento trasformato"}
Una disequazione come $\sin(ax + b) > m$, con $a \neq 0$, si risolve in due passi. Si pone $t = ax + b$ e si risolve la disequazione elementare $\sin t > m$; poi si sostituisce $ax + b$ al posto di $t$ e si ricava $x$ dalle disuguaglianze ottenute. Il periodo rispetto a $x$ diventa $\dfrac{2\pi}{|a|}$ per seno e coseno e $\dfrac{\pi}{|a|}$ per la tangente.

Per esempio, per $\cos\left( 2x - \dfrac{\pi}{3} \right) \leq \dfrac{1}{2}$ si pone $t = 2x - \dfrac{\pi}{3}$. La disequazione $\cos t \leq \dfrac{1}{2}$ ha le soluzioni $\dfrac{\pi}{3} + 2k\pi \leq t \leq \dfrac{5\pi}{3} + 2k\pi$, quindi
$$
\begin{aligned}
\frac{\pi}{3} + 2k\pi \leq 2x - \frac{\pi}{3} \leq \frac{5\pi}{3} + 2k\pi
&\iff \frac{2\pi}{3} + 2k\pi \leq 2x \leq 2\pi + 2k\pi \\[6pt]
&\iff \frac{\pi}{3} + k\pi \leq x \leq \pi + k\pi .
\end{aligned}
$$
Nel primo passaggio si è aggiunto $\dfrac{\pi}{3}$ a tutti i membri, nel secondo si è diviso per $2$. Anche il periodo $2k\pi$ si divide per $2$, e diventa $k\pi$.
:::

:::attenzione
Quando il coefficiente di $x$ è negativo, il verso delle disuguaglianze cambia nel momento in cui si moltiplica per un numero negativo. Per $\sin\left( \dfrac{\pi}{3} - x \right) \geq 0$ si ha
$$
\begin{aligned}
2k\pi \leq \frac{\pi}{3} - x \leq \pi + 2k\pi
&\iff -\frac{\pi}{3} + 2k\pi \leq -x \leq \frac{2\pi}{3} + 2k\pi \\[6pt]
&\iff -\frac{2\pi}{3} - 2k\pi \leq x \leq \frac{\pi}{3} - 2k\pi .
\end{aligned}
$$
Poiché $k$ varia in tutto $\mathbb{Z}$, anche $-k$ varia in tutto $\mathbb{Z}$, e le soluzioni si scrivono $-\dfrac{2\pi}{3} + 2k\pi \leq x \leq \dfrac{\pi}{3} + 2k\pi$. Per $x = 0$ si ottiene $\sin\dfrac{\pi}{3} > 0$, e infatti $0$ appartiene all'intervallo con $k = 0$.
:::

:::teorema{#soluzioni-intervallo titolo="Soluzioni in un intervallo assegnato"}
Quando la richiesta riguarda un intervallo $[p, q]$, si scrivono prima le soluzioni su $\mathbb{R}$ e poi si assegnano a $k$ i valori interi per cui gli intervalli ottenuti hanno punti in comune con $[p, q]$. Le soluzioni sono le intersezioni di questi intervalli con $[p, q]$.

Per la disequazione $\cos\left( 2x - \dfrac{\pi}{3} \right) \leq \dfrac{1}{2}$ nell'intervallo $[0, 2\pi]$ servono tre valori di $k$:

- per $k = -1$ si ottiene $\left[ -\dfrac{2\pi}{3}, 0 \right]$, che ha in comune con $[0, 2\pi]$ il solo punto $0$;
- per $k = 0$ si ottiene $\left[ \dfrac{\pi}{3}, \pi \right]$;
- per $k = 1$ si ottiene $\left[ \dfrac{4\pi}{3}, 2\pi \right]$.

Le soluzioni in $[0, 2\pi]$ sono quindi $x = 0$, $\dfrac{\pi}{3} \leq x \leq \pi$ e $\dfrac{4\pi}{3} \leq x \leq 2\pi$. Il punto $x = 0$ è soluzione perché $\cos\left( -\dfrac{\pi}{3} \right) = \dfrac{1}{2}$.

::grafico{f="cos(2*x-pi/3);0.5" area="0.5;cos(2*x-pi/3);1.0472;3.1416|0.5;cos(2*x-pi/3);4.1888;6.2832" punti="0,0.5,pieno;1.0472,0.5,pieno;3.1416,0.5,pieno;4.1888,0.5,pieno;6.2832,0.5,pieno" xmin=-0.5 xmax=7 ymin=-1.5 ymax=1.5 legenda="y = \cos\left( 2x - \dfrac{\pi}{3} \right);y = \dfrac{1}{2}" titolo="In $[0, 2\pi]$ il grafico di $\cos\left( 2x - \dfrac{\pi}{3} \right)$ sta sotto la retta $y = \dfrac{1}{2}$ o la tocca in $x = 0$, per $\dfrac{\pi}{3} \leq x \leq \pi$ e per $\dfrac{4\pi}{3} \leq x \leq 2\pi$"}

:::

## Disequazioni riconducibili a elementari

:::teorema{#disequazioni-sostituzione titolo="Disequazioni con una sola funzione goniometrica"}
Se in una disequazione compare una sola funzione goniometrica dello stesso argomento, per esempio solo $\sin x$, si pone $t = \sin x$ e si ottiene una disequazione algebrica nella variabile $t$. Si risolve questa disequazione, poi si torna alla variabile $x$ con le disequazioni elementari e si uniscono le soluzioni trovate. Con $t = \sin x$ o $t = \cos x$ i valori utili di $t$ sono solo quelli di $[-1, 1]$; con $t = \tan x$ tutti i valori reali sono possibili.

Per esempio $2\cos^2 x - \cos x - 1 \leq 0$ diventa, con $t = \cos x$,
$$
2t^2 - t - 1 \leq 0 \iff (2t + 1)(t - 1) \leq 0 \iff -\frac{1}{2} \leq t \leq 1 .
$$
La condizione $\cos x \leq 1$ vale per ogni $x$, quindi resta $\cos x \geq -\dfrac{1}{2}$, cioè
$$
-\frac{2\pi}{3} + 2k\pi \leq x \leq \frac{2\pi}{3} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),-2.0944,2.0944;cos(t),sin(t),2.0944,4.1888;-0.5,t,-1.35,1.35" punti="-0.5,0.866,pieno,2π/3;-0.5,-0.866,pieno,−2π/3" etichette="-0.45,1.3,x = −1/2" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="Le soluzioni di $2\cos^2 x - \cos x - 1 \leq 0$ sono i punti con ascissa $\cos x \geq -\dfrac{1}{2}$, cioè l'arco a tratto pieno da $-\dfrac{2\pi}{3}$ a $\dfrac{2\pi}{3}$"}

:::

:::esempio{titolo="Una disequazione da trasformare con le formule di duplicazione"}
Si risolve $\cos 2x + 3\cos x + 2 \geq 0$. La disequazione contiene due argomenti diversi, $2x$ e $x$. Con la formula di duplicazione $\cos 2x = 2\cos^2 x - 1$, ricavata nell'argomento sulle formule goniometriche, si ottiene una disequazione nella sola $\cos x$:
$$
2\cos^2 x + 3\cos x + 1 \geq 0 .
$$
Con $t = \cos x$ il trinomio $2t^2 + 3t + 1 = (2t + 1)(t + 1)$ ha radici $-1$ e $-\dfrac{1}{2}$ e la concavità verso l'alto, quindi è maggiore o uguale a $0$ per $t \leq -1$ oppure $t \geq -\dfrac{1}{2}$. Poiché $\cos x \geq -1$ per ogni $x$, la condizione $\cos x \leq -1$ equivale a $\cos x = -1$, cioè a $x = \pi + 2k\pi$. La condizione $\cos x \geq -\dfrac{1}{2}$ dà $-\dfrac{2\pi}{3} + 2k\pi \leq x \leq \dfrac{2\pi}{3} + 2k\pi$. Le soluzioni sono quindi
$$
-\frac{2\pi}{3} + 2k\pi \leq x \leq \frac{2\pi}{3} + 2k\pi \quad \text{oppure} \quad x = \pi + 2k\pi .
$$
Per $x = \pi$ il primo membro vale $1 - 3 + 2 = 0$, quindi i punti $x = \pi + 2k\pi$ sono soluzioni. Poiché vicino a questi punti non ci sono altre soluzioni, essi si chiamano **soluzioni isolate**.
:::

:::attenzione
Dividere i due membri per un'espressione che contiene $x$ cambia l'insieme delle soluzioni, perché quell'espressione può essere negativa o nulla. Per esempio $\sin^2 x > \sin x$, dopo una divisione per $\sin x$, diventerebbe $\sin x > 1$, che non ha soluzioni. Invece la disequazione ha soluzioni, perché per $x = \dfrac{3\pi}{2}$ si ha $\sin^2 x = 1 > -1 = \sin x$. Si porta tutto al primo membro e si scompone:
$$
\sin x\,(\sin x - 1) > 0 .
$$
Il fattore $\sin x - 1$ è negativo per $x \neq \dfrac{\pi}{2} + 2k\pi$, quindi il prodotto è positivo quando $\sin x < 0$, cioè per $\pi + 2k\pi < x < 2\pi + 2k\pi$.
:::

## Disequazioni lineari in seno e coseno

:::definizione{#disequazioni-lineari titolo="Disequazione lineare in seno e coseno"}
Una **disequazione lineare** in seno e coseno ha la forma
$$
a\sin x + b\cos x + c > 0 ,
$$
oppure la stessa forma con $<$, $\geq$ o $\leq$, dove $a$, $b$, $c$ sono numeri reali con $a \neq 0$ e $b \neq 0$. Il nome dipende dal fatto che $\sin x$ e $\cos x$ compaiono al primo grado. Per esempio $\sin x + \sqrt{3}\cos x > 1$ è lineare con $a = 1$, $b = \sqrt{3}$ e $c = -1$. Le disequazioni lineari si risolvono con il metodo dell'angolo aggiunto, con il metodo grafico oppure con le formule parametriche.
:::

:::richiamo{titolo="Formula dell'angolo aggiunto"}
Siano $a$ e $b$ numeri reali non entrambi nulli e sia $r = \sqrt{a^2 + b^2}$. Allora esiste un angolo $\varphi$ con $\cos\varphi = \dfrac{a}{r}$ e $\sin\varphi = \dfrac{b}{r}$, e per ogni $x$ reale
$$
a\sin x + b\cos x = r\sin(x + \varphi) .
$$
:::

:::teorema{#metodo-angolo-aggiunto titolo="Metodo dell'angolo aggiunto"}
Con la formula dell'angolo aggiunto la disequazione $a\sin x + b\cos x + c > 0$ diventa $r\sin(x + \varphi) > -c$. Poiché $r > 0$, dividendo per $r$ il verso si conserva, e si ottiene la disequazione elementare con argomento trasformato
$$
\sin(x + \varphi) > -\frac{c}{r} .
$$
Per $\sin x + \sqrt{3}\cos x > 1$ si ha $r = \sqrt{1 + 3} = 2$, $\cos\varphi = \dfrac{1}{2}$ e $\sin\varphi = \dfrac{\sqrt{3}}{2}$, quindi $\varphi = \dfrac{\pi}{3}$ e
$$
2\sin\left( x + \frac{\pi}{3} \right) > 1 \iff \sin\left( x + \frac{\pi}{3} \right) > \frac{1}{2} .
$$
L'argomento $x + \dfrac{\pi}{3}$ deve stare tra $\dfrac{\pi}{6} + 2k\pi$ e $\dfrac{5\pi}{6} + 2k\pi$; sottraendo $\dfrac{\pi}{3}$ si ottiene
$$
-\frac{\pi}{6} + 2k\pi < x < \frac{\pi}{2} + 2k\pi .
$$
:::

:::teorema{#metodo-grafico-lineari titolo="Metodo grafico"}
Si pongono $X = \cos x$ e $Y = \sin x$. Il punto $(X, Y)$ è il punto della circonferenza goniometrica associato all'angolo $x$, quindi soddisfa $X^2 + Y^2 = 1$. La disequazione $a\sin x + b\cos x + c > 0$ diventa $aY + bX + c > 0$, che nel piano $XY$ descrive un semipiano delimitato dalla retta $aY + bX + c = 0$. Le soluzioni sono gli angoli i cui punti stanno sulla circonferenza *e* nel semipiano:
$$
\begin{cases}
aY + bX + c > 0 \\[4pt]
X^2 + Y^2 = 1
\end{cases}
$$
Per $\sin x + \sqrt{3}\cos x > 1$ la retta è $Y = 1 - \sqrt{3}X$. Sostituendo nell'equazione della circonferenza si ottiene $X^2 + \left( 1 - \sqrt{3}X \right)^2 = 1$, cioè $4X^2 - 2\sqrt{3}X = 0$, che ha le soluzioni $X = 0$ e $X = \dfrac{\sqrt{3}}{2}$. La retta taglia quindi la circonferenza nei punti $(0, 1)$ e $\left( \dfrac{\sqrt{3}}{2}, -\dfrac{1}{2} \right)$, associati agli angoli $\dfrac{\pi}{2}$ e $-\dfrac{\pi}{6}$. L'origine non soddisfa $Y + \sqrt{3}X > 1$, perciò il semipiano è quello che *non* contiene l'origine, e l'arco soluzione è quello da $-\dfrac{\pi}{6}$ a $\dfrac{\pi}{2}$ che passa per $(1, 0)$. Il risultato coincide con quello del metodo dell'angolo aggiunto.

::grafico{curve="cos(t),sin(t),-0.5236,1.5708;cos(t),sin(t),1.5708,5.7596;t,1-1.7321*t,-0.25,1.3" punti="0,1,vuoto,π/2;0.866,-0.5,vuoto,−π/6" etichette="0.75,0.35,Y = 1 − √3 X" nomi="X,Y" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.5 uguale=1 legenda=0 titolo="La retta $Y = 1 - \sqrt{3}X$ taglia la circonferenza negli angoli $-\dfrac{\pi}{6}$ e $\dfrac{\pi}{2}$; l'arco a tratto pieno sta nel semipiano $Y + \sqrt{3}X > 1$"}

:::

:::osservazione{#metodo-parametriche titolo="Metodo delle formule parametriche"}
Per $x \neq \pi + 2k\pi$ si può porre $t = \tan\dfrac{x}{2}$ e usare le formule parametriche
$$
\sin x = \frac{2t}{1 + t^2} ,
\qquad
\cos x = \frac{1 - t^2}{1 + t^2} .
$$
La disequazione diventa razionale in $t$. I valori $x = \pi + 2k\pi$, esclusi dalla sostituzione, si controllano a parte nella disequazione di partenza. Per $\sin x + \cos x > 1$ si moltiplicano i due membri per $1 + t^2$, che è positivo, e si ottiene
$$
2t + 1 - t^2 > 1 + t^2 \iff 2t\,(1 - t) > 0 \iff 0 < t < 1 .
$$
La condizione $0 < \tan\dfrac{x}{2} < 1$ dà $k\pi < \dfrac{x}{2} < \dfrac{\pi}{4} + k\pi$, cioè $2k\pi < x < \dfrac{\pi}{2} + 2k\pi$. Per $x = \pi$ si ha $\sin\pi + \cos\pi = -1$, che non è maggiore di $1$, quindi i valori esclusi non sono soluzioni.
:::

## Disequazioni omogenee

:::definizione{#disequazioni-omogenee titolo="Disequazione omogenea di secondo grado"}
Una disequazione **omogenea di secondo grado** in seno e coseno ha la forma
$$
a\sin^2 x + b\sin x\cos x + c\cos^2 x > 0 ,
$$
oppure la stessa forma con $<$, $\geq$ o $\leq$. Ogni termine ha grado $2$ complessivo in $\sin x$ e $\cos x$. Per esempio $\sin^2 x - (1 + \sqrt{3})\sin x\cos x + \sqrt{3}\cos^2 x < 0$ è omogenea con $a = 1$, $b = -(1 + \sqrt{3})$ e $c = \sqrt{3}$.
:::

::::teorema{#risoluzione-omogenee titolo="Risoluzione delle disequazioni omogenee"}
Per gli $x$ con $\cos x \neq 0$ la disequazione $a\sin^2 x + b\sin x\cos x + c\cos^2 x > 0$ è equivalente a
$$
a\tan^2 x + b\tan x + c > 0 .
$$
Per gli $x$ con $\cos x = 0$, cioè per $x = \dfrac{\pi}{2} + k\pi$, il primo membro vale $a$, quindi questi valori sono soluzioni se e solo se $a > 0$.

Per l'esempio $\sin^2 x - (1 + \sqrt{3})\sin x\cos x + \sqrt{3}\cos^2 x < 0$ si ottiene, con $t = \tan x$,
$$
t^2 - (1 + \sqrt{3})\,t + \sqrt{3} < 0 \iff (t - 1)(t - \sqrt{3}) < 0 \iff 1 < t < \sqrt{3} .
$$
Quindi $\dfrac{\pi}{4} + k\pi < x < \dfrac{\pi}{3} + k\pi$. Per $x = \dfrac{\pi}{2} + k\pi$ il primo membro vale $a = 1$, che non è negativo, perciò questi valori non si aggiungono.

:::dimostrazione
L'idea è dividere per $\cos^2 x$, che è positivo quando $\cos x \neq 0$. Sia $\cos x \neq 0$. Allora $\cos^2 x > 0$, e dividendo i due membri per un numero positivo il verso della disuguaglianza si conserva. Poiché $\dfrac{\sin^2 x}{\cos^2 x} = \tan^2 x$ e $\dfrac{\sin x\cos x}{\cos^2 x} = \tan x$, si ottiene $a\tan^2 x + b\tan x + c > 0$. Sia invece $\cos x = 0$. Allora $\sin^2 x = 1 - \cos^2 x = 1$, e il primo membro si riduce a $a \cdot 1 + b \cdot 0 + c \cdot 0 = a$.
:::
::::

:::esempio{titolo="Una disequazione omogenea con un coefficiente nullo"}
Si risolve $\sin x\cos x + \cos^2 x \leq 0$, che è omogenea con $a = 0$. Per $\cos x \neq 0$ si divide per $\cos^2 x > 0$ e si ottiene $\tan x + 1 \leq 0$, cioè $\tan x \leq -1$, che dà $-\dfrac{\pi}{2} + k\pi < x \leq -\dfrac{\pi}{4} + k\pi$. Per $\cos x = 0$ il primo membro vale $a = 0$, e $0 \leq 0$ è vera, quindi anche i valori $x = -\dfrac{\pi}{2} + k\pi$ sono soluzioni. Unendo le due parti si ottiene
$$
-\frac{\pi}{2} + k\pi \leq x \leq -\frac{\pi}{4} + k\pi .
$$
Lo stesso risultato segue dalla scomposizione $\cos x\,(\sin x + \cos x) \leq 0$.
:::

:::teorema{#riconducibili-omogenee titolo="Disequazioni riconducibili a omogenee"}
Una disequazione del tipo $a\sin^2 x + b\sin x\cos x + c\cos^2 x > d$, con $d \neq 0$, diventa omogenea se si scrive il termine noto come $d = d\,(\sin^2 x + \cos^2 x)$, per la relazione fondamentale della goniometria. Per esempio
$$
\sin^2 x + 2\sin x\cos x + 3\cos^2 x > 2
$$
diventa $\sin^2 x + 2\sin x\cos x + 3\cos^2 x - 2\sin^2 x - 2\cos^2 x > 0$, cioè
$$
-\sin^2 x + 2\sin x\cos x + \cos^2 x > 0 .
$$
Per $\cos x \neq 0$ si ottiene $-t^2 + 2t + 1 > 0$ con $t = \tan x$, cioè $t^2 - 2t - 1 < 0$, che vale per $1 - \sqrt{2} < t < 1 + \sqrt{2}$. Poiché $\tan\dfrac{\pi}{8} = \sqrt{2} - 1$ e $\tan\dfrac{3\pi}{8} = \sqrt{2} + 1$, valori ricavati con le formule di bisezione, si ha
$$
-\frac{\pi}{8} + k\pi < x < \frac{3\pi}{8} + k\pi .
$$
Per $\cos x = 0$ il primo membro della forma omogenea vale $a = -1$, che non è positivo, quindi non si aggiungono altre soluzioni.
:::

:::osservazione
Una disequazione omogenea si può risolvere anche con le formule di duplicazione, che la trasformano in una disequazione lineare nell'angolo $2x$. Poiché $\cos^2 x - \sin^2 x = \cos 2x$ e $2\sin x\cos x = \sin 2x$, la disequazione dell'esempio precedente diventa $\cos 2x + \sin 2x > 0$, cioè $\sqrt{2}\sin\left( 2x + \dfrac{\pi}{4} \right) > 0$ con il metodo dell'angolo aggiunto. Le soluzioni $0 + 2k\pi < 2x + \dfrac{\pi}{4} < \pi + 2k\pi$ danno di nuovo $-\dfrac{\pi}{8} + k\pi < x < \dfrac{3\pi}{8} + k\pi$.
:::

## Disequazioni prodotto e fratte

:::teorema{#segno-prodotto-quoziente titolo="Studio del segno di un prodotto o di un quoziente"}
Una disequazione **prodotto** ha la forma $f_1(x) \cdot f_2(x) \cdots f_n(x) > 0$, una disequazione **fratta** ha la forma $\dfrac{N(x)}{D(x)} > 0$, oppure le stesse forme con $<$, $\geq$ o $\leq$. Il segno di un prodotto o di un quoziente dipende dai segni dei fattori, per la regola dei segni. Il metodo è il seguente.

- Si sceglie un intervallo di ampiezza uguale a un periodo comune a tutti i fattori, di solito $[0, 2\pi)$.
- Si studia il segno di ogni fattore in quell'intervallo, risolvendo la disequazione elementare $f_i(x) > 0$, e si segnano gli zeri.
- Si riportano i segni in una **tabella dei segni** e si ricava il segno del prodotto o del quoziente in ogni intervallo.
- Si scelgono gli intervalli richiesti e si aggiunge il periodo. Gli zeri del denominatore sono sempre esclusi.

Per $\cos x\,\big( 2\sin x - \sqrt{3} \big) > 0$ il periodo comune è $2\pi$. Il fattore $2\sin x - \sqrt{3}$ è positivo per $\dfrac{\pi}{3} < x < \dfrac{2\pi}{3}$, il fattore $\cos x$ per $0 \leq x < \dfrac{\pi}{2}$ e per $\dfrac{3\pi}{2} < x < 2\pi$. La tabella dei segni in $[0, 2\pi)$ è

| | $\left( 0, \dfrac{\pi}{3} \right)$ | $\left( \dfrac{\pi}{3}, \dfrac{\pi}{2} \right)$ | $\left( \dfrac{\pi}{2}, \dfrac{2\pi}{3} \right)$ | $\left( \dfrac{2\pi}{3}, \dfrac{3\pi}{2} \right)$ | $\left( \dfrac{3\pi}{2}, 2\pi \right)$ |
| --- | --- | --- | --- | --- | --- |
| $2\sin x - \sqrt{3}$ | $-$ | $+$ | $+$ | $-$ | $-$ |
| $\cos x$ | $+$ | $+$ | $-$ | $-$ | $+$ |
| prodotto | $-$ | $+$ | $-$ | $+$ | $-$ |

Il prodotto è positivo nel secondo e nel quarto intervallo, quindi le soluzioni sono
$$
\frac{\pi}{3} + 2k\pi < x < \frac{\pi}{2} + 2k\pi \quad \text{oppure} \quad \frac{2\pi}{3} + 2k\pi < x < \frac{3\pi}{2} + 2k\pi .
$$

::grafico{assi=0 uguale=1 linee="1.0472,2 2.0944,2;0,1 1.5708,1;4.7124,1 6.2832,1;1.0472,0 1.5708,0;2.0944,0 4.7124,0" segmenti="0,2,1.0472,2;2.0944,2,6.2832,2;1.5708,1,4.7124,1;0,0,1.0472,0;1.5708,0,2.0944,0;4.7124,0,6.2832,0" punti="1.0472,2,pieno;2.0944,2,pieno;1.5708,1,pieno;4.7124,1,pieno;1.0472,0,vuoto;1.5708,0,vuoto;2.0944,0,vuoto;4.7124,0,vuoto" etichette="-1.6,2,2 sin x − √3;-1.6,1,cos x;-1.6,0,prodotto;0,2.6,0;1.0472,2.6,π/3;1.5708,2.6,π/2;2.0944,2.6,2π/3;4.7124,2.6,3π/2;6.2832,2.6,2π;1.5708,2.25,+;0.52,0.25,−;1.31,0.25,+;1.83,0.25,−;3.4,0.25,+;5.5,0.25,−" xmin=-3 xmax=6.6 ymin=-0.5 ymax=2.9 titolo="Schema dei segni di $\cos x\,\big( 2\sin x - \sqrt{3} \big)$ in $[0, 2\pi)$: la linea continua indica il segno positivo, la linea tratteggiata il segno negativo"}

:::

:::esempio{titolo="Una disequazione fratta"}
Si risolve $\dfrac{1 - 2\sin x}{\sin x} \geq 0$ in $[0, 2\pi)$. Il numeratore è positivo per $\sin x < \dfrac{1}{2}$, cioè per $0 \leq x < \dfrac{\pi}{6}$ e per $\dfrac{5\pi}{6} < x < 2\pi$, e si annulla in $\dfrac{\pi}{6}$ e in $\dfrac{5\pi}{6}$. Il denominatore è positivo per $0 < x < \pi$ e si annulla in $0$ e in $\pi$, che sono quindi esclusi. Il quoziente ha segno

- positivo in $\left( 0, \dfrac{\pi}{6} \right)$ e in $\left( \dfrac{5\pi}{6}, \pi \right)$, dove i due termini sono positivi;
- negativo in $\left( \dfrac{\pi}{6}, \dfrac{5\pi}{6} \right)$, dove il numeratore è negativo e il denominatore positivo;
- negativo in $(\pi, 2\pi)$, dove il numeratore è positivo e il denominatore negativo.

Gli zeri del numeratore $\dfrac{\pi}{6}$ e $\dfrac{5\pi}{6}$ rendono il quoziente uguale a $0$ e sono compresi. Le soluzioni sono quindi $0 < x \leq \dfrac{\pi}{6}$ oppure $\dfrac{5\pi}{6} \leq x < \pi$, e su $\mathbb{R}$ si aggiunge $2k\pi$.
:::

:::attenzione
Moltiplicare i due membri di una disequazione fratta per il denominatore cambia l'insieme delle soluzioni quando il denominatore può essere negativo. Per esempio, da $\dfrac{1 - 2\sin x}{\sin x} \geq 0$ moltiplicando per $\sin x$ si otterrebbe $1 - 2\sin x \geq 0$, che vale per $x = \dfrac{3\pi}{2}$. Invece per $x = \dfrac{3\pi}{2}$ il quoziente vale $\dfrac{1 + 2}{-1} = -3$, quindi $\dfrac{3\pi}{2}$ *non* è soluzione.
:::

:::osservazione{#fattori-segno-costante titolo="Fattori di segno costante"}
Un fattore che ha sempre lo stesso segno si può togliere dallo studio del segno, conservando le condizioni che esso impone. Per esempio $2 + \cos x \geq 1$ per ogni $x$, quindi $\dfrac{\sin x}{2 + \cos x} > 0$ equivale a $\sin x > 0$. Il fattore $1 - \sin x$ è positivo per $x \neq \dfrac{\pi}{2} + 2k\pi$ e nullo per $x = \dfrac{\pi}{2} + 2k\pi$; perciò $\dfrac{2\cos x + 1}{1 - \sin x} \geq 0$ equivale al sistema
$$
\begin{cases}
2\cos x + 1 \geq 0 \\[4pt]
x \neq \dfrac{\pi}{2} + 2k\pi
\end{cases}
$$
che ha le soluzioni $-\dfrac{2\pi}{3} + 2k\pi \leq x \leq \dfrac{2\pi}{3} + 2k\pi$ con $x \neq \dfrac{\pi}{2} + 2k\pi$.
:::

## Sistemi di disequazioni goniometriche

:::definizione{#sistemi-disequazioni titolo="Sistema di disequazioni goniometriche"}
Un **sistema** di disequazioni goniometriche chiede gli $x$ che soddisfano *tutte* le disequazioni insieme. L'insieme delle soluzioni è quindi l'**intersezione** degli insiemi delle soluzioni delle singole disequazioni. Si risolve ogni disequazione nello stesso intervallo di ampiezza uguale a un periodo comune, si intersecano gli intervalli e infine si aggiunge il periodo.

Per esempio si considera il sistema
$$
\begin{cases}
2\sin x - 1 > 0 \\[4pt]
\tan x < 1
\end{cases}
$$
Il seno ha periodo $2\pi$ e la tangente ha periodo $\pi$, quindi un periodo comune è $2\pi$ e si lavora in $[0, 2\pi)$. La prima disequazione ha le soluzioni $\dfrac{\pi}{6} < x < \dfrac{5\pi}{6}$. La seconda, ripetuta nei due rami della tangente contenuti in $[0, 2\pi)$, ha le soluzioni
$$
0 \leq x < \frac{\pi}{4} , \qquad \frac{\pi}{2} < x < \frac{5\pi}{4} , \qquad \frac{3\pi}{2} < x < 2\pi .
$$
I punti comuni sono quelli di $\left( \dfrac{\pi}{6}, \dfrac{\pi}{4} \right)$ e di $\left( \dfrac{\pi}{2}, \dfrac{5\pi}{6} \right)$. Le soluzioni del sistema sono quindi
$$
\frac{\pi}{6} + 2k\pi < x < \frac{\pi}{4} + 2k\pi \quad \text{oppure} \quad \frac{\pi}{2} + 2k\pi < x < \frac{5\pi}{6} + 2k\pi .
$$

::grafico{curve="cos(t),sin(t),0.5236,0.7854;cos(t),sin(t),0.7854,1.5708;t,0.5,-1.4,1.4;cos(t),sin(t),1.5708,2.618;cos(t),sin(t),2.618,6.8068;t,t,-1.1,1.1" punti="0.866,0.5,vuoto,π/6;0.7071,0.7071,vuoto,π/4;0,1,vuoto,π/2;-0.866,0.5,vuoto,5π/6" xmin=-1.6 xmax=1.6 ymin=-1.4 ymax=1.4 uguale=1 legenda=0 titolo="La retta $y = \dfrac{1}{2}$ separa i punti con $\sin x > \dfrac{1}{2}$, la retta $y = x$ passa per i punti in cui $\tan x = 1$; gli archi a tratto pieno, da $\dfrac{\pi}{6}$ a $\dfrac{\pi}{4}$ e da $\dfrac{\pi}{2}$ a $\dfrac{5\pi}{6}$, sono le soluzioni del sistema"}

:::

:::osservazione
Per controllare le soluzioni di un sistema si sostituisce un valore interno a ogni intervallo trovato. Nel sistema precedente $x = \dfrac{2\pi}{3}$ dà $2\sin x - 1 = \sqrt{3} - 1 > 0$ e $\tan x = -\sqrt{3} < 1$, quindi è soluzione. Il valore $x = \dfrac{\pi}{3}$ dà $\tan x = \sqrt{3}$, che non è minore di $1$, quindi non è soluzione, anche se soddisfa la prima disequazione.
:::

## Dominio di funzioni goniometriche

:::teorema{#dominio-funzioni-goniometriche titolo="Dominio di una funzione goniometrica"}
Il **dominio** di una funzione $y = f(x)$ è l'insieme dei valori di $x$ per cui l'espressione $f(x)$ ha significato. Per le funzioni costruite con le funzioni goniometriche le condizioni sono le seguenti.

- Un denominatore deve essere diverso da $0$.
- Il radicando di una radice di indice pari deve essere maggiore o uguale a $0$.
- L'argomento di un logaritmo deve essere maggiore di $0$.
- L'argomento della tangente deve essere diverso da $\dfrac{\pi}{2} + k\pi$, quello della cotangente diverso da $k\pi$.
- L'argomento di $\arcsin$ e di $\arccos$ deve stare in $[-1, 1]$.

Le condizioni devono essere soddisfatte tutte insieme, quindi si scrivono in un sistema e il dominio è l'insieme delle soluzioni del sistema. Per esempio la funzione $f(x) = \sqrt{2\sin x - 1}$ esiste quando $2\sin x - 1 \geq 0$, cioè $\sin x \geq \dfrac{1}{2}$, quindi il suo dominio è
$$
\frac{\pi}{6} + 2k\pi \leq x \leq \frac{5\pi}{6} + 2k\pi .
$$

::grafico{f="sqrt(2*sin(x)-1);sin(x)" punti="0.5236,0,pieno;2.618,0,pieno" segmenti="0.5236,0,0.5236,0.5;2.618,0,2.618,0.5" xmin=-0.5 xmax=6.6 ymin=-1.5 ymax=1.5 legenda="y = \sqrt{2\sin x - 1};y = \sin x" titolo="In $[0, 2\pi]$ la funzione $\sqrt{2\sin x - 1}$ esiste solo dove $\sin x \geq \dfrac{1}{2}$, cioè per $\dfrac{\pi}{6} \leq x \leq \dfrac{5\pi}{6}$"}

:::

:::esempio{titolo="Domini con logaritmi e frazioni"}
La funzione $g(x) = \ln(\tan x)$ esiste quando la tangente è definita e positiva. Il sistema
$$
\begin{cases}
x \neq \dfrac{\pi}{2} + k\pi \\[4pt]
\tan x > 0
\end{cases}
$$
ha le soluzioni $k\pi < x < \dfrac{\pi}{2} + k\pi$, perché in ogni ramo la tangente è positiva tra il suo zero $k\pi$ e l'asintoto $\dfrac{\pi}{2} + k\pi$.

La funzione $h(x) = \dfrac{\sqrt{\cos x}}{2\sin x - 1}$ richiede il radicando non negativo e il denominatore non nullo:
$$
\begin{cases}
\cos x \geq 0 \\[4pt]
2\sin x - 1 \neq 0
\end{cases}
$$
Nell'intervallo $\left[ -\dfrac{\pi}{2}, \dfrac{3\pi}{2} \right)$ la prima condizione dà $-\dfrac{\pi}{2} \leq x \leq \dfrac{\pi}{2}$. La seconda esclude $\dfrac{\pi}{6}$ e $\dfrac{5\pi}{6}$, e di questi due valori solo $\dfrac{\pi}{6}$ sta nell'intervallo trovato. Il dominio è quindi
$$
-\frac{\pi}{2} + 2k\pi \leq x < \frac{\pi}{6} + 2k\pi \quad \text{oppure} \quad \frac{\pi}{6} + 2k\pi < x \leq \frac{\pi}{2} + 2k\pi .
$$
:::
