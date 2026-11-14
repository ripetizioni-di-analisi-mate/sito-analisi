---
titolo: Angoli e funzioni goniometriche
sommario: Come si misurano gli angoli in gradi e in radianti, come si definiscono seno, coseno, tangente e cotangente sulla circonferenza goniometrica, quali relazioni li legano, quanto valgono negli angoli notevoli e negli archi associati, come sono fatti i grafici di seno, coseno, tangente e delle sinusoidi, come si descrive il moto armonico e come si definiscono arcoseno, arcocoseno e arcotangente.
---

## Angoli orientati, gradi e radianti

:::definizione{#angolo-orientato titolo="Angolo orientato"}
Un angolo si può pensare come la rotazione che porta una semiretta in un'altra attorno alla loro origine comune $O$. La semiretta di partenza si chiama **lato origine** e quella di arrivo **lato termine**. L'angolo si dice **orientato** quando si stabilisce anche il verso della rotazione. Per convenzione il verso *antiorario* è positivo e il verso orario è negativo.

Con gli angoli orientati si possono descrivere anche rotazioni di più di un giro. Una rotazione di un giro e mezzo in verso antiorario misura $360^\circ + 180^\circ = 540^\circ$, e una rotazione di un quarto di giro in verso orario misura $-90^\circ$. Due angoli che differiscono di un numero intero di giri hanno lo stesso lato termine. Per esempio $30^\circ$, $390^\circ$ e $-330^\circ$ portano il lato origine nella stessa posizione, perché $390^\circ = 30^\circ + 360^\circ$ e $-330^\circ = 30^\circ - 360^\circ$.
:::

:::definizione{#radiante titolo="Radiante"}
La misura in gradi divide il giro in $360$ parti uguali, e il numero $360$ è una scelta convenzionale. La misura in radianti usa invece la lunghezza dell'arco. Si disegna una circonferenza di raggio $r > 0$ con centro nel vertice dell'angolo; l'angolo al centro stacca sulla circonferenza un arco di lunghezza $s$. La **misura in radianti** dell'angolo è il rapporto
$$
\alpha = \frac{s}{r} .
$$
Il rapporto non dipende dal raggio scelto, perché raddoppiando il raggio raddoppia anche la lunghezza dell'arco. L'angolo che stacca un arco lungo quanto il raggio misura $1$ radiante.

La circonferenza intera è lunga $2\pi r$, quindi l'angolo giro misura $\dfrac{2\pi r}{r} = 2\pi$ radianti. Di conseguenza l'angolo piatto misura $\pi$ e l'angolo retto misura $\dfrac{\pi}{2}$. Un radiante corrisponde a circa $57{,}3^\circ$. Quando la misura di un angolo è scritta senza il simbolo dei gradi, si intende in radianti.

::grafico{curve="2*cos(t),2*sin(t),0,6.29;2*cos(t),2*sin(t),0,1" vettori="0,0,2,0;0,0,1.081,1.683" etichette="0.9,-0.35,r;1.85,1.25,s = r;0.35,0.15,1 rad" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 legenda=0 titolo="L'angolo di $1$ radiante stacca su una circonferenza di raggio $r$ un arco di lunghezza $s = r$"}

:::

:::teorema{#conversione-gradi-radianti titolo="Conversione tra gradi e radianti"}
Siano $\alpha^\circ$ la misura di un angolo in gradi e $\alpha$ la sua misura in radianti. Le due misure sono proporzionali, e l'angolo piatto misura $180^\circ$ e $\pi$ radianti, perciò vale la proporzione $\alpha^\circ : 180 = \alpha : \pi$. Ne seguono le formule
$$
\alpha = \frac{\pi}{180}\,\alpha^\circ ,
\qquad
\alpha^\circ = \frac{180}{\pi}\,\alpha .
$$
Per esempio $45^\circ$ corrisponde a $\dfrac{\pi}{180} \cdot 45 = \dfrac{\pi}{4}$, e $\dfrac{5\pi}{6}$ radianti corrispondono a $\dfrac{180}{\pi} \cdot \dfrac{5\pi}{6} = 150^\circ$. Le funzioni goniometriche di questo argomento hanno come variabile un numero reale, e per questo motivo da qui in poi gli angoli si misurano in radianti.
:::

:::esempio{titolo="Angoli più usati in gradi e in radianti"}
Con la formula di conversione si ottiene la tabella seguente.

| gradi | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ | $270^\circ$ | $360^\circ$ |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| radianti | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ | $\dfrac{2\pi}{3}$ | $\dfrac{3\pi}{4}$ | $\dfrac{5\pi}{6}$ | $\pi$ | $\dfrac{3\pi}{2}$ | $2\pi$ |

Ogni valore si ricava dai primi tre. Per esempio $120^\circ = 4 \cdot 30^\circ$, quindi $120^\circ$ corrisponde a $4 \cdot \dfrac{\pi}{6} = \dfrac{2\pi}{3}$.
:::

:::teorema{#arco-settore titolo="Lunghezza dell'arco e area del settore circolare"}
Sia $\alpha$ la misura in radianti di un angolo al centro di una circonferenza di raggio $r$, con $0 < \alpha \leq 2\pi$. L'arco staccato dall'angolo e il settore circolare corrispondente hanno lunghezza e area
$$
s = r\,\alpha ,
\qquad
A = \frac{1}{2}\,r^2 \alpha .
$$
La prima formula si ottiene dalla definizione di radiante, moltiplicando per $r$ i due membri di $\alpha = \dfrac{s}{r}$. Per la seconda, l'area del settore è proporzionale all'angolo, e l'angolo giro $2\pi$ corrisponde al cerchio intero di area $\pi r^2$; quindi $A = \pi r^2 \cdot \dfrac{\alpha}{2\pi} = \dfrac{1}{2}\,r^2 \alpha$.

Per esempio, in una circonferenza di raggio $6\ \text{cm}$ l'angolo $\dfrac{\pi}{3}$ stacca un arco di lunghezza $6 \cdot \dfrac{\pi}{3} = 2\pi\ \text{cm}$, e il settore ha area $\dfrac{1}{2} \cdot 36 \cdot \dfrac{\pi}{3} = 6\pi\ \text{cm}^2$.
:::

## Circonferenza goniometrica, seno e coseno

:::definizione{#circonferenza-goniometrica titolo="Circonferenza goniometrica"}
Nel piano cartesiano si chiama **circonferenza goniometrica** la circonferenza con centro nell'origine $O$ e raggio $1$, di equazione $x^2 + y^2 = 1$. Si fissa come lato origine degli angoli il semiasse positivo delle $x$, quindi il punto di partenza è $A(1, 0)$.

A ogni numero reale $\alpha$ si associa il punto $P$ in cui il lato termine dell'angolo orientato di misura $\alpha$ incontra la circonferenza. Poiché il raggio vale $1$, la misura in radianti dell'angolo coincide con la lunghezza dell'arco $AP$ percorso. Per esempio all'angolo $\dfrac{\pi}{2}$ corrisponde il punto $B(0, 1)$, all'angolo $\pi$ il punto $(-1, 0)$ e all'angolo $-\dfrac{\pi}{2}$ il punto $(0, -1)$.
:::

:::definizione{#seno-coseno titolo="Seno e coseno"}
Sia $\alpha$ un numero reale e sia $P$ il punto della circonferenza goniometrica associato all'angolo $\alpha$. Il **coseno** di $\alpha$ è l'ascissa di $P$ e il **seno** di $\alpha$ è l'ordinata di $P$:
$$
P = (\cos\alpha, \sin\alpha) .
$$
In altre parole, il coseno misura quanto il punto $P$ si sposta in orizzontale rispetto a $O$, e il seno quanto si sposta in verticale. Il punto $P$ sta sulla circonferenza di raggio $1$, quindi le sue coordinate sono comprese tra $-1$ e $1$:
$$
-1 \leq \sin\alpha \leq 1 ,
\qquad
-1 \leq \cos\alpha \leq 1 .
$$
Dai punti già visti si leggono i valori $\cos 0 = 1$, $\sin 0 = 0$, $\cos\dfrac{\pi}{2} = 0$, $\sin\dfrac{\pi}{2} = 1$, $\cos\pi = -1$ e $\sin\pi = 0$. Le funzioni $\alpha \mapsto \sin\alpha$ e $\alpha \mapsto \cos\alpha$ si chiamano **funzioni goniometriche**, e sono definite per ogni numero reale.

::grafico{curve="cos(t),sin(t),0,6.29;0.3*cos(t),0.3*sin(t),0,0.927" vettori="0,0,0.6,0.8" segmenti="0.6,0,0.6,0.8;0,0.8,0.6,0.8" punti="0.6,0.8,pieno,P;1,0,pieno,A" etichette="0.32,-0.15,cos α;-0.55,0.85,sin α;0.33,0.22,α" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="Il punto $P$ associato all'angolo $\alpha$ ha ascissa $\cos\alpha$ e ordinata $\sin\alpha$; qui $\cos\alpha = \dfrac{3}{5}$ e $\sin\alpha = \dfrac{4}{5}$"}

:::

:::osservazione{#segni-quadranti titolo="Segno di seno e coseno nei quattro quadranti"}
Il segno del seno e del coseno è il segno delle coordinate di $P$, quindi dipende dal quadrante in cui cade $P$.

| quadrante | angolo | $\sin\alpha$ | $\cos\alpha$ |
| --- | --- | --- | --- |
| primo | $0 < \alpha < \dfrac{\pi}{2}$ | $+$ | $+$ |
| secondo | $\dfrac{\pi}{2} < \alpha < \pi$ | $+$ | $-$ |
| terzo | $\pi < \alpha < \dfrac{3\pi}{2}$ | $-$ | $-$ |
| quarto | $\dfrac{3\pi}{2} < \alpha < 2\pi$ | $-$ | $+$ |

Per esempio $\alpha = \dfrac{4\pi}{3}$ è compreso tra $\pi$ e $\dfrac{3\pi}{2}$, perché $\dfrac{4\pi}{3} \approx 4{,}19$; quindi $P$ sta nel terzo quadrante e $\sin\dfrac{4\pi}{3}$ e $\cos\dfrac{4\pi}{3}$ sono entrambi negativi.
:::

:::teorema{#periodicita-seno-coseno titolo="Angoli che differiscono di un multiplo di 2π"}
Per ogni numero reale $\alpha$ e per ogni intero $k$ valgono
$$
\sin(\alpha + 2k\pi) = \sin\alpha ,
\qquad
\cos(\alpha + 2k\pi) = \cos\alpha .
$$
Infatti gli angoli $\alpha$ e $\alpha + 2k\pi$ differiscono di $k$ giri completi, quindi hanno lo stesso lato termine e individuano lo stesso punto $P$ sulla circonferenza. Queste uguaglianze permettono di ricondurre ogni angolo a un angolo compreso tra $0$ e $2\pi$. Per esempio $\dfrac{13\pi}{2} = \dfrac{\pi}{2} + 3 \cdot 2\pi$, quindi $\sin\dfrac{13\pi}{2} = \sin\dfrac{\pi}{2} = 1$.
:::

## Tangente e cotangente

:::definizione{#tangente titolo="Tangente"}
Sia $\alpha$ un numero reale con $\cos\alpha \neq 0$. La **tangente** di $\alpha$ è il rapporto tra il seno e il coseno:
$$
\tan\alpha = \frac{\sin\alpha}{\cos\alpha} .
$$
Il coseno si annulla quando $P$ è nel punto $(0, 1)$ o nel punto $(0, -1)$, cioè per $\alpha = \dfrac{\pi}{2} + k\pi$ con $k \in \mathbb{Z}$. La tangente è quindi definita per
$$
\alpha \neq \frac{\pi}{2} + k\pi , \qquad k \in \mathbb{Z} .
$$
La tangente è positiva quando seno e coseno hanno lo stesso segno, cioè nel primo e nel terzo quadrante, ed è negativa nel secondo e nel quarto. Per esempio, se $P = \left( \dfrac{3}{5}, \dfrac{4}{5} \right)$, allora $\tan\alpha = \dfrac{4}{5} \cdot \dfrac{5}{3} = \dfrac{4}{3}$.
:::

::::teorema{#significato-tangente titolo="Significato geometrico della tangente"}
Sia $\alpha$ un angolo con $\cos\alpha \neq 0$, e sia $T$ il punto in cui la retta $OP$ incontra la retta $x = 1$, tangente alla circonferenza goniometrica nel punto $A(1, 0)$. Allora
$$
T = (1, \tan\alpha) ,
$$
cioè $\tan\alpha$ è l'ordinata del punto $T$. Inoltre $\tan\alpha$ è il coefficiente angolare della retta $OP$, che ha equazione $y = x\tan\alpha$.

Questa lettura spiega il nome della funzione e dà subito il segno e la grandezza della tangente. Per esempio, per un angolo vicino a $\dfrac{\pi}{2}$ la retta $OP$ è quasi verticale e incontra la retta $x = 1$ molto in alto, quindi la tangente assume valori molto grandi.

::grafico{curve="cos(t),sin(t),0,6.29" linee="1,-2 1,2;0,0 1,1.5" segmenti="0.555,0,0.555,0.832" punti="0.555,0.832,pieno,P;1,1.5,pieno,T;1,0,pieno,A" etichette="1.1,0.7,tan α;0.3,-0.2,cos α" xmin=-1.5 xmax=2 ymin=-1.5 ymax=2 uguale=1 legenda=0 titolo="La retta $OP$ incontra la tangente $x = 1$ nel punto $T$, la cui ordinata è $\tan\alpha$; qui $\tan\alpha = \dfrac{3}{2}$"}

:::dimostrazione
L'idea è che la retta $OP$ passa per l'origine, quindi la sua equazione è determinata dal coefficiente angolare. La retta passa per $O(0, 0)$ e per $P(\cos\alpha, \sin\alpha)$, con $\cos\alpha \neq 0$, quindi ha coefficiente angolare
$$
m = \frac{\sin\alpha - 0}{\cos\alpha - 0} = \tan\alpha
$$
ed equazione $y = x\tan\alpha$. Il punto $T$ sta sulla retta $x = 1$, perciò si trova sostituendo $x = 1$ nell'equazione della retta $OP$. Si ottiene $y = \tan\alpha$, quindi $T = (1, \tan\alpha)$.
:::
::::

:::definizione{#cotangente titolo="Cotangente"}
Sia $\alpha$ un numero reale con $\sin\alpha \neq 0$. La **cotangente** di $\alpha$ è il rapporto
$$
\cot\alpha = \frac{\cos\alpha}{\sin\alpha} .
$$
Il seno si annulla per $\alpha = k\pi$, quindi la cotangente è definita per $\alpha \neq k\pi$, con $k \in \mathbb{Z}$. Quando sono definite sia la tangente sia la cotangente, cioè per $\alpha \neq k\,\dfrac{\pi}{2}$, ciascuna è il reciproco dell'altra:
$$
\cot\alpha = \frac{1}{\tan\alpha} .
$$
La cotangente ha lo stesso segno della tangente in ogni quadrante, e come la tangente ha periodo $\pi$. Per esempio, se $\tan\alpha = \dfrac{4}{3}$, allora $\cot\alpha = \dfrac{3}{4}$. Per $\alpha = \dfrac{\pi}{2}$ la tangente non è definita, mentre la cotangente vale $\dfrac{\cos\frac{\pi}{2}}{\sin\frac{\pi}{2}} = \dfrac{0}{1} = 0$.
:::

## Relazioni fondamentali

::::teorema{#relazione-fondamentale titolo="Prima relazione fondamentale"}
Per ogni numero reale $\alpha$ vale
$$
\sin^2\alpha + \cos^2\alpha = 1 .
$$
Il simbolo $\sin^2\alpha$ indica il quadrato del seno, $(\sin\alpha)^2$. La relazione permette di calcolare il coseno quando si conosce il seno, e viceversa, a meno del segno:
$$
\cos\alpha = \pm\sqrt{1 - \sin^2\alpha} ,
\qquad
\sin\alpha = \pm\sqrt{1 - \cos^2\alpha} .
$$
Il segno si sceglie in base al quadrante in cui cade l'angolo. Per esempio, se $\sin\alpha = \dfrac{5}{13}$ e $\alpha$ è nel secondo quadrante, allora $\cos^2\alpha = 1 - \dfrac{25}{169} = \dfrac{144}{169}$; il coseno è negativo nel secondo quadrante, quindi $\cos\alpha = -\dfrac{12}{13}$.

:::dimostrazione
L'idea è applicare il teorema di Pitagora al triangolo che ha per ipotenusa il raggio $OP$. Sia $P = (\cos\alpha, \sin\alpha)$ il punto associato ad $\alpha$ e sia $H = (\cos\alpha, 0)$ la sua proiezione sull'asse $x$. Se $P$ non sta su un asse, il triangolo $OHP$ è rettangolo in $H$, i suoi cateti misurano $|\cos\alpha|$ e $|\sin\alpha|$ e l'ipotenusa $OP$ misura $1$, perché è un raggio della circonferenza goniometrica. Per il teorema di Pitagora
$$
|\cos\alpha|^2 + |\sin\alpha|^2 = 1 ,
$$
e poiché il quadrato di un numero è uguale al quadrato del suo valore assoluto, si ottiene $\cos^2\alpha + \sin^2\alpha = 1$.

Se $P$ sta su un asse, una coordinata è $0$ e l'altra è $1$ oppure $-1$, quindi la somma dei quadrati vale ancora $1$. In modo equivalente, la relazione dice che le coordinate di $P$ soddisfano l'equazione $x^2 + y^2 = 1$ della circonferenza goniometrica.
:::
::::

::::teorema{#seconda-relazione titolo="Seconda relazione fondamentale"}
Per ogni numero reale $\alpha$ con $\cos\alpha \neq 0$, cioè $\alpha \neq \dfrac{\pi}{2} + k\pi$, vale
$$
1 + \tan^2\alpha = \frac{1}{\cos^2\alpha} .
$$
La relazione permette di calcolare il coseno quando si conosce la tangente, sempre a meno del segno:
$$
\cos\alpha = \pm\frac{1}{\sqrt{1 + \tan^2\alpha}} .
$$
Per esempio, se $\tan\alpha = 2$ e $\alpha$ è nel primo quadrante, allora $\cos^2\alpha = \dfrac{1}{1 + 4} = \dfrac{1}{5}$, quindi $\cos\alpha = \dfrac{1}{\sqrt{5}} = \dfrac{\sqrt{5}}{5}$; infine $\sin\alpha = \tan\alpha \cdot \cos\alpha = \dfrac{2\sqrt{5}}{5}$.

:::dimostrazione
L'idea è dividere la prima relazione fondamentale per $\cos^2\alpha$. Per ipotesi $\cos\alpha \neq 0$, quindi si possono dividere per $\cos^2\alpha$ i due membri di $\sin^2\alpha + \cos^2\alpha = 1$:
$$
\frac{\sin^2\alpha}{\cos^2\alpha} + \frac{\cos^2\alpha}{\cos^2\alpha} = \frac{1}{\cos^2\alpha} .
$$
Il primo addendo è il quadrato di $\dfrac{\sin\alpha}{\cos\alpha} = \tan\alpha$ e il secondo vale $1$, perciò $\tan^2\alpha + 1 = \dfrac{1}{\cos^2\alpha}$.
:::
::::

:::esempio{titolo="Tutte le funzioni goniometriche a partire da una"}
Si sa che $\cos\alpha = -\dfrac{3}{5}$ e che $\pi < \alpha < \dfrac{3\pi}{2}$. Per la prima relazione fondamentale
$$
\sin^2\alpha = 1 - \frac{9}{25} = \frac{16}{25} .
$$
L'angolo è nel terzo quadrante, dove il seno è negativo, quindi $\sin\alpha = -\dfrac{4}{5}$. Dalle definizioni seguono poi
$$
\tan\alpha = \frac{-\frac{4}{5}}{-\frac{3}{5}} = \frac{4}{3} ,
\qquad
\cot\alpha = \frac{3}{4} .
$$
La tangente è positiva, in accordo con il segno della tangente nel terzo quadrante. Come controllo, $1 + \tan^2\alpha = 1 + \dfrac{16}{9} = \dfrac{25}{9}$, che è proprio $\dfrac{1}{\cos^2\alpha}$.
:::

:::attenzione
Le scritture $\sin^2\alpha$ e $\sin\left( \alpha^2 \right)$ indicano numeri diversi. La prima è il quadrato del seno, la seconda è il seno del quadrato dell'angolo. Per $\alpha = \dfrac{\pi}{2}$ si ha $\sin^2\dfrac{\pi}{2} = 1$, mentre $\sin\left( \dfrac{\pi^2}{4} \right) \approx \sin 2{,}47 \approx 0{,}62$.
:::

## Valori negli angoli notevoli

::::teorema{#valori-pi-quarti titolo="Seno e coseno di π/4"}
Valgono
$$
\sin\frac{\pi}{4} = \cos\frac{\pi}{4} = \frac{\sqrt{2}}{2} ,
\qquad
\tan\frac{\pi}{4} = 1 .
$$
L'angolo $\dfrac{\pi}{4}$ corrisponde a $45^\circ$, e il punto $P$ associato sta sulla bisettrice $y = x$ del primo quadrante. Con questi valori si calcolano espressioni come $\sin\dfrac{\pi}{4} \cdot \cos\dfrac{\pi}{4} = \dfrac{2}{4} = \dfrac{1}{2}$.

::grafico{linee="0,0 2,0 2,2 0,2 0,0;0,0 2,2" segmenti="0,0,2,2" etichette="1,-0.3,1;2.15,1,1;0.7,1.2,√2;0.5,0.15,45°" assi=0 xmin=-0.5 xmax=2.8 ymin=-0.6 ymax=2.4 uguale=1 titolo="La diagonale di un quadrato di lato $1$ misura $\sqrt{2}$ e forma con il lato un angolo di $\dfrac{\pi}{4}$"}

:::dimostrazione
L'idea è leggere seno e coseno in un triangolo rettangolo isoscele. Il punto $P = (\cos\dfrac{\pi}{4}, \sin\dfrac{\pi}{4})$ sta sulla bisettrice $y = x$, perché l'angolo $\dfrac{\pi}{4}$ è metà dell'angolo retto; quindi $\sin\dfrac{\pi}{4} = \cos\dfrac{\pi}{4}$. Indicato con $c$ questo valore comune, che è positivo perché $P$ sta nel primo quadrante, la prima relazione fondamentale dà
$$
c^2 + c^2 = 1
\quad \Longrightarrow \quad
c^2 = \frac{1}{2}
\quad \Longrightarrow \quad
c = \frac{1}{\sqrt{2}} = \frac{\sqrt{2}}{2} .
$$
La tangente è il rapporto di due numeri uguali e diversi da $0$, quindi vale $1$. Lo stesso risultato si legge nel quadrato di lato $1$ della figura, perché la diagonale misura $\sqrt{2}$ per il teorema di Pitagora, e il rapporto tra lato e diagonale è $\dfrac{1}{\sqrt{2}}$.
:::
::::

::::teorema{#valori-pi-sesti-terzi titolo="Seno e coseno di π/6 e di π/3"}
Valgono
$$
\sin\frac{\pi}{6} = \frac{1}{2} , \quad \cos\frac{\pi}{6} = \frac{\sqrt{3}}{2} ,
\qquad
\sin\frac{\pi}{3} = \frac{\sqrt{3}}{2} , \quad \cos\frac{\pi}{3} = \frac{1}{2} .
$$
Di conseguenza $\tan\dfrac{\pi}{6} = \dfrac{1}{\sqrt{3}} = \dfrac{\sqrt{3}}{3}$ e $\tan\dfrac{\pi}{3} = \sqrt{3}$. Gli angoli $\dfrac{\pi}{6}$ e $\dfrac{\pi}{3}$ corrispondono a $30^\circ$ e a $60^\circ$; il seno di uno è il coseno dell'altro, perché i due angoli sono complementari.

::grafico{linee="0,0 2,0 1,1.732 0,0" segmenti="1,0,1,1.732" etichette="0.45,-0.3,1;1.45,-0.3,1;0.1,1,2;1.1,0.8,√3;0.35,0.12,60°;0.82,1.2,30°" assi=0 xmin=-0.5 xmax=2.5 ymin=-0.6 ymax=2.1 uguale=1 titolo="L'altezza di un triangolo equilatero di lato $2$ misura $\sqrt{3}$ e divide il triangolo in due triangoli rettangoli con angoli di $\dfrac{\pi}{3}$ e $\dfrac{\pi}{6}$"}

:::dimostrazione
L'idea è dividere a metà un triangolo equilatero. Si considera un triangolo equilatero di lato $2$; i suoi angoli misurano $\dfrac{\pi}{3}$. L'altezza relativa a un lato è anche mediana e bisettrice, quindi divide il triangolo in due triangoli rettangoli uguali. Ciascuno ha ipotenusa $2$, un cateto $1$ (metà del lato) e angoli acuti $\dfrac{\pi}{3}$ e $\dfrac{\pi}{6}$. Per il teorema di Pitagora l'altro cateto, cioè l'altezza, misura
$$
h = \sqrt{2^2 - 1^2} = \sqrt{3} .
$$
In un triangolo rettangolo con ipotenusa $1$, il cateto opposto a un angolo acuto è il seno dell'angolo e il cateto adiacente è il coseno, perché il triangolo si può disporre come il triangolo $OHP$ della circonferenza goniometrica. Il triangolo trovato ha ipotenusa $2$, quindi si dividono i lati per $2$. Il cateto opposto all'angolo $\dfrac{\pi}{6}$ è il cateto di lunghezza $1$, perciò
$$
\sin\frac{\pi}{6} = \frac{1}{2} ,
\qquad
\cos\frac{\pi}{6} = \frac{\sqrt{3}}{2} .
$$
Per l'angolo $\dfrac{\pi}{3}$ i ruoli dei cateti si scambiano, e si ottengono $\sin\dfrac{\pi}{3} = \dfrac{\sqrt{3}}{2}$ e $\cos\dfrac{\pi}{3} = \dfrac{1}{2}$.
:::
::::

:::teorema{#tabella-angoli-notevoli titolo="Tabella degli angoli notevoli"}
Dai due teoremi precedenti e dai punti della circonferenza che stanno sugli assi si ottiene la tabella

| $\alpha$ | $0$ | $\dfrac{\pi}{6}$ | $\dfrac{\pi}{4}$ | $\dfrac{\pi}{3}$ | $\dfrac{\pi}{2}$ |
| --- | --- | --- | --- | --- | --- |
| $\sin\alpha$ | $0$ | $\dfrac{1}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{\sqrt{3}}{2}$ | $1$ |
| $\cos\alpha$ | $1$ | $\dfrac{\sqrt{3}}{2}$ | $\dfrac{\sqrt{2}}{2}$ | $\dfrac{1}{2}$ | $0$ |
| $\tan\alpha$ | $0$ | $\dfrac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | non definita |

Nel primo quadrante, al crescere dell'angolo il seno cresce da $0$ a $1$ e il coseno decresce da $1$ a $0$, come si vede dalla posizione dei tre punti nella figura. La tabella serve per calcolare il valore esatto di espressioni come
$$
2\sin\frac{\pi}{6} + \tan^2\frac{\pi}{3} - 4\cos^2\frac{\pi}{4} = 2 \cdot \frac{1}{2} + 3 - 4 \cdot \frac{1}{2} = 2 .
$$

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5;0,0,0.707,0.707;0,0,0.5,0.866" segmenti="0.866,0,0.866,0.5;0.707,0,0.707,0.707;0.5,0,0.5,0.866" punti="0.866,0.5,pieno;0.707,0.707,pieno;0.5,0.866,pieno" etichette="0.95,0.5,π/6;0.78,0.78,π/4;0.5,0.98,π/3" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="I punti associati a $\dfrac{\pi}{6}$, $\dfrac{\pi}{4}$ e $\dfrac{\pi}{3}$: al crescere dell'angolo l'ordinata cresce e l'ascissa diminuisce"}

:::

## Archi associati

:::teorema{#angoli-opposti titolo="Angoli opposti"}
Per ogni numero reale $\alpha$ valgono
$$
\sin(-\alpha) = -\sin\alpha ,
\qquad
\cos(-\alpha) = \cos\alpha ,
\qquad
\tan(-\alpha) = -\tan\alpha ,
$$
l'ultima per $\alpha \neq \dfrac{\pi}{2} + k\pi$. Infatti l'angolo $-\alpha$ è la stessa rotazione di $\alpha$ percorsa in verso opposto, quindi il suo punto $P''$ è il simmetrico di $P$ rispetto all'asse $x$. La simmetria rispetto all'asse $x$ conserva l'ascissa e cambia segno all'ordinata. La tangente cambia segno perché è il rapporto tra un numero che cambia segno e uno che resta uguale. Per esempio $\sin\left( -\dfrac{\pi}{6} \right) = -\dfrac{1}{2}$ e $\cos\left( -\dfrac{\pi}{6} \right) = \dfrac{\sqrt{3}}{2}$.
:::

:::teorema{#angoli-supplementari titolo="Angoli supplementari"}
Due angoli si dicono **supplementari** se la loro somma è $\pi$. Per ogni numero reale $\alpha$ valgono
$$
\sin(\pi - \alpha) = \sin\alpha ,
\qquad
\cos(\pi - \alpha) = -\cos\alpha ,
\qquad
\tan(\pi - \alpha) = -\tan\alpha ,
$$
l'ultima per $\alpha \neq \dfrac{\pi}{2} + k\pi$. L'arco che va da $(-1, 0)$ al punto $P'$ associato a $\pi - \alpha$, percorso in verso orario, misura $\alpha$, come l'arco che va da $(1, 0)$ a $P$ in verso antiorario. I due archi sono simmetrici rispetto all'asse $y$, quindi $P'$ è il simmetrico di $P$ rispetto all'asse $y$. La simmetria rispetto all'asse $y$ cambia segno all'ascissa e conserva l'ordinata. Per esempio
$$
\sin\frac{5\pi}{6} = \sin\left( \pi - \frac{\pi}{6} \right) = \frac{1}{2} ,
\qquad
\cos\frac{5\pi}{6} = -\cos\frac{\pi}{6} = -\frac{\sqrt{3}}{2} .
$$
:::

:::teorema{#angoli-differenza-pi titolo="Angoli che differiscono di π"}
Per ogni numero reale $\alpha$ valgono
$$
\sin(\pi + \alpha) = -\sin\alpha ,
\qquad
\cos(\pi + \alpha) = -\cos\alpha ,
\qquad
\tan(\pi + \alpha) = \tan\alpha ,
$$
l'ultima per $\alpha \neq \dfrac{\pi}{2} + k\pi$. Una rotazione di $\pi$ in più porta $P$ nel punto diametralmente opposto $P'''$, che è il simmetrico di $P$ rispetto all'origine; quindi entrambe le coordinate cambiano segno. Il rapporto tra due numeri che cambiano entrambi segno resta uguale, perciò la tangente non cambia. Per esempio $\cos\dfrac{4\pi}{3} = \cos\left( \pi + \dfrac{\pi}{3} \right) = -\dfrac{1}{2}$ e $\tan\dfrac{5\pi}{4} = \tan\dfrac{\pi}{4} = 1$.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5;0,0,-0.866,0.5;0,0,0.866,-0.5;0,0,-0.866,-0.5" punti="0.866,0.5,pieno,P;-0.866,0.5,pieno,P′;0.866,-0.5,pieno,P″;-0.866,-0.5,pieno,P‴" segmenti="-0.866,0.5,0.866,0.5;-0.866,-0.5,0.866,-0.5;0.866,-0.5,0.866,0.5;-0.866,-0.5,-0.866,0.5" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="I punti associati ad $\alpha$, a $\pi - \alpha$, a $-\alpha$ e a $\pi + \alpha$ sono simmetrici rispetto agli assi e all'origine; qui $\alpha = \dfrac{\pi}{6}$"}

:::

:::teorema{#angoli-complementari titolo="Angoli complementari"}
Due angoli si dicono **complementari** se la loro somma è $\dfrac{\pi}{2}$. Per ogni numero reale $\alpha$ valgono
$$
\sin\left( \frac{\pi}{2} - \alpha \right) = \cos\alpha ,
\qquad
\cos\left( \frac{\pi}{2} - \alpha \right) = \sin\alpha ,
$$
e, dove sono definite, $\tan\left( \dfrac{\pi}{2} - \alpha \right) = \cot\alpha$. Il punto associato a $\dfrac{\pi}{2} - \alpha$ è il simmetrico di $P$ rispetto alla bisettrice $y = x$, e questa simmetria scambia le due coordinate. Per esempio $\cos\dfrac{\pi}{3} = \sin\left( \dfrac{\pi}{2} - \dfrac{\pi}{3} \right) = \sin\dfrac{\pi}{6} = \dfrac{1}{2}$, che è il legame tra $\dfrac{\pi}{6}$ e $\dfrac{\pi}{3}$ visto nella tabella degli angoli notevoli.

Sostituendo $-\alpha$ al posto di $\alpha$ e usando le formule degli angoli opposti si ottengono anche
$$
\sin\left( \frac{\pi}{2} + \alpha \right) = \cos\alpha ,
\qquad
\cos\left( \frac{\pi}{2} + \alpha \right) = -\sin\alpha .
$$

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,0.866,0.5;0,0,0.5,0.866" punti="0.866,0.5,pieno,P;0.5,0.866,pieno,Q" segmenti="-1.3,-1.3,1.3,1.3;0.866,0.5,0.5,0.866" etichette="1,1.25,y = x" xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 uguale=1 legenda=0 titolo="Il punto $Q$ associato a $\dfrac{\pi}{2} - \alpha$ è il simmetrico di $P$ rispetto alla retta $y = x$, quindi le coordinate si scambiano"}

:::

:::esempio{titolo="Riduzione al primo quadrante"}
Con gli archi associati e con la periodicità si calcola il valore esatto delle funzioni goniometriche di ogni angolo che differisce da un angolo notevole di un multiplo di $\dfrac{\pi}{2}$.

- $\sin\dfrac{7\pi}{6} = \sin\left( \pi + \dfrac{\pi}{6} \right) = -\sin\dfrac{\pi}{6} = -\dfrac{1}{2}$.
- $\cos\dfrac{5\pi}{3} = \cos\left( 2\pi - \dfrac{\pi}{3} \right) = \cos\left( -\dfrac{\pi}{3} \right) = \dfrac{1}{2}$, dove si è usata prima la periodicità e poi la formula degli angoli opposti.
- $\tan\dfrac{3\pi}{4} = \tan\left( \pi - \dfrac{\pi}{4} \right) = -\tan\dfrac{\pi}{4} = -1$.
- $\cos\dfrac{17\pi}{4} = \cos\left( \dfrac{\pi}{4} + 2 \cdot 2\pi \right) = \cos\dfrac{\pi}{4} = \dfrac{\sqrt{2}}{2}$.

In ogni caso il segno del risultato coincide con il segno previsto dal quadrante dell'angolo di partenza. Per esempio $\dfrac{7\pi}{6}$ è nel terzo quadrante, dove il seno è negativo.
:::

## Grafici di seno, coseno e tangente

:::definizione{#funzione-periodica titolo="Funzione periodica"}
Una funzione $f$ con dominio $D$ si dice **periodica** se esiste un numero $T > 0$ tale che, per ogni $x$ di $D$, anche $x + T$ appartiene a $D$ e
$$
f(x + T) = f(x) .
$$
Il più piccolo numero $T > 0$ con questa proprietà si chiama **periodo** della funzione. Il grafico di una funzione periodica è formato da un tratto, di larghezza $T$, che si ripete uguale verso destra e verso sinistra. Per disegnarlo basta quindi studiare la funzione in un intervallo di lunghezza $T$. Per esempio la funzione $\sin x$ ha periodo $2\pi$, come segue dal teorema sugli angoli che differiscono di un multiplo di $2\pi$, e nessun numero positivo minore di $2\pi$ ha la stessa proprietà, perché il valore $1$ è assunto in $\left[ 0, 2\pi \right)$ solo per $x = \dfrac{\pi}{2}$.
:::

:::teorema{#grafico-seno titolo="Grafico della funzione seno"}
Indicata con $x$ la misura dell'angolo in radianti, la funzione $y = \sin x$ ha le proprietà seguenti.

- Il dominio è $\mathbb{R}$ e l'insieme immagine è $[-1, 1]$.
- La funzione è periodica di periodo $2\pi$.
- La funzione è **dispari**, cioè $\sin(-x) = -\sin x$, quindi il grafico è simmetrico rispetto all'origine.
- Gli zeri sono $x = k\pi$; il massimo $1$ è assunto per $x = \dfrac{\pi}{2} + 2k\pi$ e il minimo $-1$ per $x = \dfrac{3\pi}{2} + 2k\pi$, con $k \in \mathbb{Z}$.
- Nell'intervallo $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$ la funzione è crescente, e nell'intervallo $\left[ \dfrac{\pi}{2}, \dfrac{3\pi}{2} \right]$ è decrescente.

Le proprietà si leggono sulla circonferenza goniometrica, seguendo l'ordinata di $P$ mentre l'angolo cresce. Per esempio, quando $x$ va da $0$ a $\dfrac{\pi}{2}$, il punto $P$ sale da $(1, 0)$ a $(0, 1)$ e la sua ordinata cresce da $0$ a $1$. Il grafico si chiama **sinusoide**.

::grafico{f="sin(x)" punti="1.571,1,pieno;4.712,-1,pieno;3.1416,0,pieno;6.283,0,pieno" etichette="3.2,0.35,π;6.3,0.35,2π" xmin=-7 xmax=7 ymin=-2 ymax=2 legenda="y = \sin x" titolo="La sinusoide $y = \sin x$: zeri in $k\pi$, massimo $1$ in $\dfrac{\pi}{2}$ e minimo $-1$ in $\dfrac{3\pi}{2}$, ripetuti con periodo $2\pi$"}

:::

:::teorema{#grafico-coseno titolo="Grafico della funzione coseno"}
La funzione $y = \cos x$ ha dominio $\mathbb{R}$, insieme immagine $[-1, 1]$ e periodo $2\pi$. È **pari**, cioè $\cos(-x) = \cos x$, quindi il grafico è simmetrico rispetto all'asse $y$. Gli zeri sono $x = \dfrac{\pi}{2} + k\pi$; il massimo $1$ è assunto per $x = 2k\pi$ e il minimo $-1$ per $x = \pi + 2k\pi$, con $k \in \mathbb{Z}$. Nell'intervallo $[0, \pi]$ la funzione è decrescente, e nell'intervallo $[\pi, 2\pi]$ è crescente.

Per la formula degli angoli complementari vale $\cos x = \sin\left( x + \dfrac{\pi}{2} \right)$ per ogni $x$. Il grafico del coseno è quindi il grafico del seno traslato di $\dfrac{\pi}{2}$ verso sinistra, e per questo motivo si chiama **cosinusoide** oppure, anch'esso, sinusoide. Per esempio il massimo del seno in $\dfrac{\pi}{2}$ corrisponde al massimo del coseno in $0$.

::grafico{f="cos(x);sin(x)" punti="0,1,pieno;1.571,1,pieno;3.1416,-1,pieno" etichette="3.1,-1.4,π" xmin=-7 xmax=7 ymin=-2 ymax=2 legenda="y = \cos x;y = \sin x" titolo="Il grafico di $y = \cos x$ è quello di $y = \sin x$ traslato di $\dfrac{\pi}{2}$ verso sinistra"}

:::

:::teorema{#grafico-tangente titolo="Grafico della funzione tangente"}
La funzione $y = \tan x$ ha le proprietà seguenti.

- Il dominio è $\mathbb{R} \setminus \left\{ \dfrac{\pi}{2} + k\pi \mid k \in \mathbb{Z} \right\}$ e l'insieme immagine è $\mathbb{R}$.
- La funzione è periodica di periodo $\pi$, per la formula degli angoli che differiscono di $\pi$.
- La funzione è dispari e i suoi zeri sono $x = k\pi$.
- In ogni intervallo $\left( -\dfrac{\pi}{2} + k\pi, \dfrac{\pi}{2} + k\pi \right)$ la funzione è crescente.
- Le rette $x = \dfrac{\pi}{2} + k\pi$ sono **asintoti verticali**. Quando $x$ si avvicina a $\dfrac{\pi}{2}$ da sinistra la tangente assume valori positivi sempre più grandi, e quando $x$ si avvicina a $\dfrac{\pi}{2}$ da destra assume valori negativi sempre più grandi in valore assoluto.

Questo comportamento si legge sul significato geometrico della tangente, perché per $\alpha$ minore di $\dfrac{\pi}{2}$ e vicino a $\dfrac{\pi}{2}$ il punto $T$ sta molto in alto sulla retta $x = 1$. Per esempio $\tan 1{,}5 \approx 14{,}1$ e $\tan 1{,}56 \approx 92{,}6$.

::grafico{f="tan(x)" asintoti="x=-4.712;x=-1.571;x=1.571;x=4.712" punti="0.785,1,pieno;-0.785,-1,pieno;3.1416,0,pieno" xmin=-6 xmax=6 ymin=-4 ymax=4 legenda="y = \tan x" titolo="La funzione $y = \tan x$ ha periodo $\pi$ e asintoti verticali $x = \dfrac{\pi}{2} + k\pi$; vale $1$ in $\dfrac{\pi}{4}$"}

:::

## Sinusoidi y = A sin(ωx + φ) + b

:::definizione{#sinusoide titolo="Funzione sinusoidale"}
Molti fenomeni periodici si descrivono con funzioni che hanno la forma del grafico del seno, ma con un'altezza, una larghezza e una posizione diverse. Si chiama **funzione sinusoidale** una funzione
$$
y = A\sin(\omega x + \varphi) + b ,
$$
con $A > 0$, $\omega > 0$ e $\varphi$, $b$ numeri reali. I parametri hanno i nomi seguenti.

- $A$ è l'**ampiezza** e indica di quanto il grafico sale e scende rispetto alla retta $y = b$.
- $\omega$ è la **pulsazione** e indica quante oscillazioni complete ci sono in un intervallo di lunghezza $2\pi$.
- $\varphi$ è la **fase iniziale** e indica da quale punto dell'oscillazione si parte per $x = 0$.
- $b$ è lo spostamento verticale, e la retta $y = b$ è la linea attorno alla quale il grafico oscilla.

Per esempio la funzione $y = 3\sin(2x)$ ha ampiezza $3$, pulsazione $2$, fase $0$ e $b = 0$. La stessa forma si ottiene con il coseno, perché $A\cos(\omega x + \varphi) + b = A\sin\left( \omega x + \varphi + \dfrac{\pi}{2} \right) + b$.
:::

::::teorema{#periodo-sinusoide titolo="Periodo, immagine e sfasamento di una sinusoide"}
Sia $y = A\sin(\omega x + \varphi) + b$ con $A > 0$ e $\omega > 0$. Allora

- il periodo è $T = \dfrac{2\pi}{\omega}$;
- l'insieme immagine è $[b - A, b + A]$;
- il grafico si ottiene dal grafico di $y = A\sin(\omega x) + b$ con una traslazione orizzontale di $-\dfrac{\varphi}{\omega}$, cioè verso destra se $\varphi < 0$ e verso sinistra se $\varphi > 0$. Il numero $-\dfrac{\varphi}{\omega}$ si chiama **sfasamento**.

Per esempio $y = 5\sin\left( \dfrac{x}{2} \right)$ ha periodo $\dfrac{2\pi}{\frac{1}{2}} = 4\pi$ e immagine $[-5, 5]$. La funzione $y = \sin(3x) - 2$ ha periodo $\dfrac{2\pi}{3}$ e immagine $[-3, -1]$.

:::dimostrazione
L'idea è che l'argomento $\omega x + \varphi$ deve crescere di $2\pi$ perché il seno ripeta i suoi valori. Si pone $f(x) = A\sin(\omega x + \varphi) + b$. Per ogni $x$ si ha
$$
f\left( x + \frac{2\pi}{\omega} \right) = A\sin\left( \omega x + 2\pi + \varphi \right) + b = A\sin(\omega x + \varphi) + b = f(x) ,
$$
perché il seno ha periodo $2\pi$. Il numero $\dfrac{2\pi}{\omega}$ è il più piccolo con questa proprietà, perché l'argomento $\omega x + \varphi$ percorre un intervallo di lunghezza $\omega \cdot T$ quando $x$ percorre un intervallo di lunghezza $T$, e il seno ripete i suoi valori soltanto dopo un intervallo di lunghezza almeno $2\pi$.

Il seno assume tutti i valori di $[-1, 1]$, quindi $A\sin(\omega x + \varphi)$ assume tutti i valori di $[-A, A]$, perché $A > 0$, e aggiungendo $b$ si ottiene l'intervallo $[b - A, b + A]$.

Infine $\omega x + \varphi = \omega\left( x + \dfrac{\varphi}{\omega} \right)$, quindi $f(x) = g\left( x + \dfrac{\varphi}{\omega} \right)$ con $g(x) = A\sin(\omega x) + b$. Il grafico di $g\left( x - c \right)$ è il grafico di $g$ traslato di $c$ in orizzontale, e qui $c = -\dfrac{\varphi}{\omega}$.
:::
::::

:::esempio{titolo="Studio di una sinusoide"}
Si studia la funzione
$$
y = 2\sin\left( 2x - \frac{\pi}{3} \right) + 1 .
$$
L'ampiezza è $A = 2$, la pulsazione è $\omega = 2$, quindi il periodo è $T = \dfrac{2\pi}{2} = \pi$. L'immagine è $[1 - 2, 1 + 2] = [-1, 3]$. Lo sfasamento è $-\dfrac{\varphi}{\omega} = \dfrac{\pi}{6}$, quindi il grafico è quello di $y = 2\sin(2x) + 1$ traslato di $\dfrac{\pi}{6}$ verso destra.

Il massimo $3$ si ha quando l'argomento del seno vale $\dfrac{\pi}{2} + 2k\pi$:
$$
2x - \frac{\pi}{3} = \frac{\pi}{2} + 2k\pi
\quad \Longrightarrow \quad
2x = \frac{5\pi}{6} + 2k\pi
\quad \Longrightarrow \quad
x = \frac{5\pi}{12} + k\pi .
$$
Il grafico taglia la retta $y = 1$ quando l'argomento è un multiplo di $\pi$, cioè per $x = \dfrac{\pi}{6} + k\,\dfrac{\pi}{2}$. Il primo di questi punti con $x \geq 0$ è $\left( \dfrac{\pi}{6}, 1 \right)$, e da lì il grafico sale verso il massimo in $x = \dfrac{5\pi}{12} \approx 1{,}31$.

::grafico{f="2*sin(2*x-pi/3)+1;2*sin(2*x)+1" segmenti="-4,1,4,1" punti="1.309,3,pieno;0.524,1,pieno" xmin=-4 xmax=4 ymin=-2 ymax=4 legenda="y = 2\sin\left(2x - \frac{\pi}{3}\right) + 1;y = 2\sin(2x) + 1" titolo="La sinusoide $y = 2\sin\left( 2x - \dfrac{\pi}{3} \right) + 1$ ha periodo $\pi$, oscilla tra $-1$ e $3$ attorno alla retta $y = 1$ ed è traslata di $\dfrac{\pi}{6}$ verso destra"}

:::

:::attenzione
Le funzioni $\sin(2x)$ e $2\sin x$ sono diverse. Il coefficiente davanti alla $x$ cambia il periodo, mentre il coefficiente davanti al seno cambia l'ampiezza. Per $x = \dfrac{\pi}{2}$ si ha $\sin(2x) = \sin\pi = 0$, mentre $2\sin\dfrac{\pi}{2} = 2$. La prima funzione ha periodo $\pi$ e immagine $[-1, 1]$, la seconda ha periodo $2\pi$ e immagine $[-2, 2]$.

::grafico{f="sin(2*x);2*sin(x)" punti="1.571,0,pieno;1.571,2,pieno" xmin=-4 xmax=4 ymin=-3 ymax=3 legenda="y = \sin(2x);y = 2\sin x" titolo="In $x = \dfrac{\pi}{2}$ la funzione $\sin(2x)$ vale $0$ e la funzione $2\sin x$ vale $2$"}

:::

:::esempio{titolo="Dal grafico alla formula"}
Una sinusoide del tipo $y = A\sin(\omega x) + b$, con $A > 0$ e $\omega > 0$, ha massimo $4$, minimo $-2$ e due massimi consecutivi distanti $\dfrac{2\pi}{3}$. La retta attorno alla quale oscilla è a metà tra massimo e minimo, quindi
$$
b = \frac{4 + (-2)}{2} = 1 ,
\qquad
A = \frac{4 - (-2)}{2} = 3 .
$$
La distanza tra due massimi consecutivi è il periodo, perciò $\dfrac{2\pi}{\omega} = \dfrac{2\pi}{3}$ e $\omega = 3$. La funzione è $y = 3\sin(3x) + 1$.
:::

## Moto armonico

:::definizione{#moto-armonico titolo="Moto armonico"}
Un punto che si muove lungo una retta si dice in **moto armonico** se la sua posizione $x$ al tempo $t$ è data da
$$
x(t) = A\cos(\omega t + \varphi) ,
$$
con $A > 0$ e $\omega > 0$. Il punto oscilla tra le posizioni $-A$ e $A$ attorno al centro di oscillazione $x = 0$. Le grandezze del moto sono le seguenti.

- $A$ è l'ampiezza, misurata in metri.
- $\omega$ è la pulsazione, misurata in radianti al secondo.
- Il **periodo** $T = \dfrac{2\pi}{\omega}$ è il tempo di un'oscillazione completa, in secondi.
- La **frequenza** $f = \dfrac{1}{T} = \dfrac{\omega}{2\pi}$ è il numero di oscillazioni al secondo, in hertz ($\text{Hz}$).
- $\varphi$ è la fase iniziale e fissa la posizione al tempo $t = 0$, che è $x(0) = A\cos\varphi$.

Il moto armonico descrive, per esempio, una massa appesa a una molla che oscilla senza attriti, o il pendolo per piccole oscillazioni. Il periodo di una molla si studia nel corso di fisica.
:::

:::teorema{#moto-armonico-circolare titolo="Moto armonico e moto circolare uniforme"}
Sia $Q$ un punto che percorre una circonferenza di centro $O$ e raggio $A$ con velocità angolare costante $\omega$, partendo dalla posizione individuata dall'angolo $\varphi$. Allora la proiezione di $Q$ sull'asse $x$ si muove di moto armonico con legge $x(t) = A\cos(\omega t + \varphi)$.

Infatti al tempo $t$ il raggio $OQ$ ha descritto l'angolo $\omega t$, quindi forma con il semiasse positivo delle $x$ l'angolo $\omega t + \varphi$. Le coordinate di $Q$ sono allora quelle del punto della circonferenza goniometrica associato a $\omega t + \varphi$, moltiplicate per il raggio $A$, e la sua ascissa è $A\cos(\omega t + \varphi)$. Per questo motivo la pulsazione del moto armonico si misura in radianti al secondo, come la velocità angolare di $Q$.
:::

:::esempio{titolo="Una massa attaccata a una molla"}
Una massa oscilla attaccata a una molla con ampiezza $A = 10\ \text{cm}$ e periodo $T = 2\ \text{s}$; al tempo $t = 0$ la massa si trova nella posizione $x = 10\ \text{cm}$. La pulsazione è
$$
\omega = \frac{2\pi}{T} = \frac{2\pi}{2} = \pi\ \text{rad/s} ,
$$
e la frequenza è $f = \dfrac{1}{2}\ \text{Hz} = 0{,}5\ \text{Hz}$. Poiché $x(0) = A\cos\varphi = A$, si ha $\cos\varphi = 1$ e si può scegliere $\varphi = 0$. La legge del moto, con $x$ in centimetri e $t$ in secondi, è quindi
$$
x(t) = 10\cos(\pi t) .
$$
Al tempo $t = 0{,}5\ \text{s}$ la massa passa per il centro, perché $x(0{,}5) = 10\cos\dfrac{\pi}{2} = 0$, e al tempo $t = 1\ \text{s}$ si trova all'altro estremo, perché $x(1) = 10\cos\pi = -10$. Al tempo $t = \dfrac{1}{3}\ \text{s}$ la posizione è $x = 10\cos\dfrac{\pi}{3} = 5\ \text{cm}$.

::grafico{f="10*cos(pi*x)" punti="0,10,pieno;0.5,0,pieno;1,-10,pieno;2,10,pieno" nomi="t,x" xmin=0 xmax=4 ymin=-12 ymax=12 legenda="x(t) = 10\cos(\pi t)" titolo="La posizione $x(t) = 10\cos(\pi t)$, in centimetri, di una massa che oscilla con ampiezza $10\ \text{cm}$ e periodo $2\ \text{s}$"}

:::

## Funzioni goniometriche inverse

:::definizione{#arcoseno titolo="Arcoseno"}
La funzione seno non è iniettiva su $\mathbb{R}$, perché per esempio $\sin\dfrac{\pi}{6} = \sin\dfrac{5\pi}{6} = \dfrac{1}{2}$. Per definire un'inversa si restringe il seno all'intervallo $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$. In questo intervallo il seno è crescente, quindi iniettivo, e assume tutti i valori di $[-1, 1]$.

Per ogni $x \in [-1, 1]$ l'**arcoseno** di $x$, indicato con $\arcsin x$, è l'unico angolo $y$ tale che
$$
\begin{cases}
\sin y = x \\[4pt]
-\dfrac{\pi}{2} \leq y \leq \dfrac{\pi}{2} .
\end{cases}
$$
La funzione $y = \arcsin x$ ha quindi dominio $[-1, 1]$ e insieme immagine $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$; è crescente e dispari. Per esempio $\arcsin\dfrac{1}{2} = \dfrac{\pi}{6}$, perché $\sin\dfrac{\pi}{6} = \dfrac{1}{2}$ e $\dfrac{\pi}{6}$ appartiene all'intervallo; invece $\dfrac{5\pi}{6}$ non è l'arcoseno di $\dfrac{1}{2}$, perché è fuori dall'intervallo. Allo stesso modo $\arcsin(-1) = -\dfrac{\pi}{2}$.

Il grafico dell'arcoseno è il simmetrico, rispetto alla retta $y = x$, del grafico del seno ristretto a $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, come accade per ogni funzione inversa.

::grafico{f="asin(x)" curve="t,sin(t),-1.5708,1.5708" segmenti="-2,-2,2,2" punti="1,1.571,pieno;-1,-1.571,pieno;0.5,0.524,pieno" xmin=-2 xmax=2 ymin=-2 ymax=2 uguale=1 legenda="y = \arcsin x;y = \sin x \text{ in } \left[-\frac{\pi}{2}, \frac{\pi}{2}\right]" titolo="Il grafico di $y = \arcsin x$ è il simmetrico rispetto alla retta $y = x$ del grafico del seno ristretto a $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$"}

:::

:::definizione{#arcocoseno titolo="Arcocoseno"}
Il coseno è decrescente nell'intervallo $[0, \pi]$ e vi assume tutti i valori di $[-1, 1]$. Per ogni $x \in [-1, 1]$ l'**arcocoseno** di $x$, indicato con $\arccos x$, è l'unico angolo $y$ tale che
$$
\begin{cases}
\cos y = x \\[4pt]
0 \leq y \leq \pi .
\end{cases}
$$
La funzione $y = \arccos x$ ha dominio $[-1, 1]$ e insieme immagine $[0, \pi]$, ed è decrescente. Per esempio $\arccos 0 = \dfrac{\pi}{2}$ e $\arccos\left( -\dfrac{1}{2} \right) = \dfrac{2\pi}{3}$, perché $\cos\dfrac{2\pi}{3} = -\dfrac{1}{2}$ e $\dfrac{2\pi}{3}$ appartiene a $[0, \pi]$. L'arcocoseno non è dispari. Per la formula degli angoli supplementari vale $\arccos(-x) = \pi - \arccos x$, e infatti $\arccos\left( -\dfrac{1}{2} \right) = \pi - \dfrac{\pi}{3}$.

::grafico{f="acos(x)" punti="-1,3.1416,pieno;0,1.571,pieno;1,0,pieno;-0.5,2.094,pieno" xmin=-2 xmax=2 ymin=-1 ymax=4 uguale=1 legenda="y = \arccos x" titolo="La funzione $y = \arccos x$ è decrescente, vale $\pi$ in $-1$, $\dfrac{\pi}{2}$ in $0$ e $0$ in $1$"}

:::

:::definizione{#arcotangente titolo="Arcotangente"}
La tangente è crescente nell'intervallo $\left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$ e vi assume tutti i valori reali. Per ogni $x \in \mathbb{R}$ l'**arcotangente** di $x$, indicata con $\arctan x$, è l'unico angolo $y$ tale che
$$
\begin{cases}
\tan y = x \\[4pt]
-\dfrac{\pi}{2} < y < \dfrac{\pi}{2} .
\end{cases}
$$
La funzione $y = \arctan x$ ha dominio $\mathbb{R}$ e insieme immagine $\left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$; è crescente e dispari. Le rette $y = \dfrac{\pi}{2}$ e $y = -\dfrac{\pi}{2}$ sono **asintoti orizzontali**, perché per $x$ positivo e molto grande l'arcotangente è vicina a $\dfrac{\pi}{2}$ e per $x$ negativo e molto grande in valore assoluto è vicina a $-\dfrac{\pi}{2}$. Per esempio $\arctan 1 = \dfrac{\pi}{4}$ e $\arctan\left( -\sqrt{3} \right) = -\dfrac{\pi}{3}$.

::grafico{f="atan(x)" asintoti="y=1.571;y=-1.571" punti="1,0.785,pieno;-1,-0.785,pieno" xmin=-6 xmax=6 ymin=-2 ymax=2 legenda="y = \arctan x" titolo="La funzione $y = \arctan x$ è crescente su $\mathbb{R}$ e ha asintoti orizzontali $y = \dfrac{\pi}{2}$ e $y = -\dfrac{\pi}{2}$"}

:::

:::teorema{#composizione-inverse titolo="Composizione con le funzioni inverse"}
Valgono le uguaglianze
$$
\sin(\arcsin x) = x \quad \text{per } x \in [-1, 1] ,
\qquad
\arcsin(\sin x) = x \quad \text{per } x \in \left[ -\frac{\pi}{2}, \frac{\pi}{2} \right] ,
$$
e le analoghe per il coseno, con $x \in [0, \pi]$ nella seconda, e per la tangente, con $x \in \left( -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right)$. La prima uguaglianza segue dalla definizione, perché $\arcsin x$ è un angolo il cui seno è $x$. La seconda richiede che $x$ appartenga all'intervallo in cui il seno è stato invertito.

Con la prima relazione fondamentale si calcolano anche le altre funzioni goniometriche di un arcoseno. Per esempio, posto $y = \arcsin\dfrac{3}{5}$, si ha $\sin y = \dfrac{3}{5}$ e $y \in \left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$, dove il coseno non è negativo; quindi $\cos\left( \arcsin\dfrac{3}{5} \right) = \sqrt{1 - \dfrac{9}{25}} = \dfrac{4}{5}$.
:::

:::attenzione
Per un angolo fuori dall'intervallo $\left[ -\dfrac{\pi}{2}, \dfrac{\pi}{2} \right]$ l'arcoseno del seno è diverso dall'angolo di partenza. Per $x = \dfrac{5\pi}{6}$ si ha $\sin\dfrac{5\pi}{6} = \dfrac{1}{2}$, quindi
$$
\arcsin\left( \sin\frac{5\pi}{6} \right) = \arcsin\frac{1}{2} = \frac{\pi}{6} \neq \frac{5\pi}{6} .
$$
Allo stesso modo l'equazione $\sin x = \dfrac{1}{2}$ ha infinite soluzioni, e $\arcsin\dfrac{1}{2}$ ne fornisce soltanto una. Tutte le soluzioni si trovano nell'argomento sulle equazioni goniometriche.
:::
