---
titolo: Trigonometria, statistica e combinatoria
sommario: Angoli e triangoli, identità ed equazioni goniometriche, frequenze e indicatori statistici, conteggi con e senza ordine.
---

## Angoli, radianti e circonferenza

:::definizione{#radianti titolo="Misura di un angolo in radianti"}
Il **radiante** è un'unità di misura degli angoli, come il grado. Un **angolo al centro** ha il vertice nel centro di una circonferenza e i suoi lati tagliano su di essa un arco. La misura dell'angolo in radianti è la lunghezza dell'arco divisa per il raggio. Su una circonferenza di raggio $5\,\mathrm{cm}$, un angolo che taglia un arco lungo $10\,\mathrm{cm}$ misura $\dfrac{10}{5}=2$ radianti.

Se l'arco è lungo $s$ e il raggio è $r>0$, la misura dell'angolo, indicata con la lettera greca $\theta$ (teta), è $\theta=\dfrac sr$, con le due lunghezze espresse nella stessa unità.

Il numero $\pi$ (pi greco, circa $3{,}14$) è il rapporto fra la lunghezza di una circonferenza e il suo diametro, quindi una circonferenza di raggio $r$ è lunga $2\pi r$. L'angolo giro taglia l'intera circonferenza, perciò misura $\dfrac{2\pi r}{r}=2\pi$ radianti. L'angolo piatto è mezzo giro e misura $\pi$ radianti.

L'angolo piatto misura anche $180^\circ$, quindi $180^\circ=\pi$ radianti. Una misura in gradi si converte perciò in radianti moltiplicandola per $\dfrac{\pi}{180}$, e una in radianti si converte in gradi moltiplicandola per $\dfrac{180}{\pi}$:
$$
150^\circ=150\cdot\frac{\pi}{180}=\frac{5\pi}{6}\ \text{radianti},\qquad \frac\pi3\ \text{radianti}=\frac\pi3\cdot\frac{180^\circ}{\pi}=60^\circ.
$$
Un radiante corrisponde quindi a $\dfrac{180^\circ}{\pi}$, circa $57{,}3^\circ$. Radianti e gradi sono unità diverse per la stessa apertura.
:::

:::esempio{titolo="Arco e rotazione"}
Moltiplicando per $r$ i due membri di $\theta=\dfrac sr$ si ricava la lunghezza dell'arco, $s=r\theta$. Su una circonferenza di raggio $6\,\mathrm{cm}$, l'arco tagliato da un angolo di $\dfrac{2\pi}{3}$ radianti è lungo
$$
s=6\cdot\frac{2\pi}{3}=4\pi\,\mathrm{cm}\approx12{,}6\,\mathrm{cm}.
$$
Il simbolo $\approx$ si legge «circa uguale a».

Il **settore circolare** è la parte di cerchio compresa fra due raggi e l'arco. Un angolo $\theta$, con $0\le\theta\le2\pi$, è la frazione $\dfrac{\theta}{2\pi}$ del giro, quindi il settore occupa la stessa frazione dell'area $\pi r^2$ del cerchio: $\mathcal A=\dfrac{\theta}{2\pi}\cdot\pi r^2=\dfrac12r^2\theta$. Con i dati precedenti $\mathcal A=\dfrac12\cdot36\cdot\dfrac{2\pi}{3}=12\pi\,\mathrm{cm^2}$. L'area ha unità al quadrato, a differenza della lunghezza dell'arco.

Un **angolo orientato** è positivo se la rotazione è antioraria, negativo se è oraria. Due angoli che differiscono di un numero intero di giri, cioè di un multiplo di $2\pi$, portano alla stessa posizione finale. È il caso di $-\dfrac{5\pi}{4}$ e $\dfrac{3\pi}{4}$, perché $-\dfrac{5\pi}{4}+2\pi=\dfrac{3\pi}{4}$. La rotazione compiuta è diversa: oraria nel primo caso, antioraria nel secondo.
:::

:::attenzione
Le formule $s=r\theta$ e $\mathcal A=\dfrac12r^2\theta$ valgono con l'angolo misurato in radianti. Nell'esempio l'angolo di $\dfrac{2\pi}{3}$ radianti è di $120^\circ$. Con il numero $120$ si otterrebbe $6\cdot120=720\,\mathrm{cm}$, mentre l'intera circonferenza è lunga $12\pi\approx37{,}7\,\mathrm{cm}$.
:::

:::definizione{#circonferenza-goniometrica titolo="Coordinate sulla circonferenza unitaria"}
La **circonferenza goniometrica** ha il centro nell'origine $O$ degli assi cartesiani e raggio $1$. Un angolo $\theta$ si riporta su di essa a partire dal raggio che termina nel punto $(1,0)$, sul semiasse positivo delle ascisse. Il raggio ruota di $\theta$ attorno a $O$, in verso antiorario se $\theta$ è positivo e in verso orario se è negativo, e termina in un punto $P$ della circonferenza. Il **coseno** di $\theta$, scritto $\cos\theta$, è l'ascissa di $P$, cioè la sua coordinata orizzontale. Il **seno** di $\theta$, scritto $\sin\theta$, è l'ordinata di $P$, cioè la sua coordinata verticale. In simboli, $P=(\cos\theta,\sin\theta)$.

Nella figura l'angolo è di $60^\circ$ e i segmenti tracciati da $P$ ai due assi arrivano all'ascissa $0{,}5$ e all'ordinata $0{,}87$ circa, quindi $\cos60^\circ=0{,}5$ e $\sin60^\circ\approx0{,}87$. Seno e coseno sono sempre compresi fra $-1$ e $1$, perché $P$ dista $1$ dall'origine.

Per un angolo acuto, il raggio $OP$ e il segmento verticale da $P$ all'asse delle ascisse formano con l'asse un triangolo rettangolo. L'ipotenusa, cioè il lato di fronte all'angolo retto, è il raggio e misura $1$. Gli altri due lati sono i cateti: quello orizzontale misura $\cos\theta$ e quello verticale, di fronte all'angolo $\theta$, misura $\sin\theta$. La definizione sulla circonferenza si applica a ogni angolo, anche maggiore di $90^\circ$ o negativo.

::grafico{curve="cos(t),sin(t),0,6.2831853072" legenda=0 uguale=1 xmin=-1.5 xmax=1.5 ymin=-1.5 ymax=1.5 punti="0.5,0.8660254038,pieno,P" segmenti="0,0,0.5,0.8660254038;0.5,0,0.5,0.8660254038;0,0.8660254038,0.5,0.8660254038" titolo="Le proiezioni del punto P forniscono coseno e seno dell'angolo."}
:::

## Valori notevoli, segni e simmetrie

:::teorema{#valori-notevoli titolo="Valori degli angoli notevoli"}
Per gli angoli di $30^\circ$, $45^\circ$ e $60^\circ$ seno e coseno hanno valori esatti, che si ricavano da due triangoli rettangoli. I valori di $0$ e di $\dfrac\pi2$ si leggono sulla circonferenza goniometrica, nei punti $(1,0)$ e $(0,1)$. L'ultima colonna riporta la **tangente**, cioè il rapporto fra seno e coseno; in $\dfrac\pi2$ il coseno è $0$ e il rapporto non è definito.

| Angolo | Seno | Coseno | Tangente |
| --- | --- | --- | --- |
| $0$ | $0$ | $1$ | $0$ |
| $\dfrac\pi6=30^\circ$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt3}{3}$ |
| $\dfrac\pi4=45^\circ$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $\dfrac\pi3=60^\circ$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |
| $\dfrac\pi2=90^\circ$ | $1$ | $0$ | non definita |

*Angolo di $45^\circ$.* Un triangolo rettangolo isoscele, cioè con i cateti uguali, ha due angoli di $45^\circ$. Se i cateti misurano $1$, per il teorema di Pitagora (il quadrato dell'ipotenusa è la somma dei quadrati dei cateti) l'ipotenusa misura $\sqrt{1^2+1^2}=\sqrt2$. Dividendo i lati per $\sqrt2$ si ottiene un triangolo con gli stessi angoli e ipotenusa $1$, come quello della circonferenza goniometrica. I suoi cateti misurano $\dfrac1{\sqrt2}$, cioè $\dfrac{\sqrt2}{2}\approx0{,}71$ dopo aver moltiplicato numeratore e denominatore per $\sqrt2$. Perciò $\sin45^\circ=\cos45^\circ=\dfrac{\sqrt2}{2}$.

*Angoli di $30^\circ$ e di $60^\circ$.* Un triangolo equilatero ha tre angoli di $60^\circ$. La sua altezza divide a metà un angolo e il lato opposto, quindi forma due triangoli rettangoli con angoli acuti di $30^\circ$ e $60^\circ$. Se il lato misura $2$, l'ipotenusa misura $2$, un cateto è metà lato e misura $1$, l'altro è l'altezza e misura $\sqrt{2^2-1^2}=\sqrt3$. Dividendo i lati per $2$, l'ipotenusa diventa $1$ e i cateti diventano $\dfrac12$ e $\dfrac{\sqrt3}{2}\approx0{,}87$. Il cateto corto sta di fronte all'angolo di $30^\circ$, quindi $\sin30^\circ=\dfrac12$ e $\cos30^\circ=\dfrac{\sqrt3}{2}$. Per l'angolo di $60^\circ$ i due valori si scambiano.
:::

:::definizione{#tangente titolo="Tangente e quadranti"}
La **tangente** di un angolo $\theta$ è il rapporto fra il suo seno e il suo coseno, $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$. Dividere per $\dfrac12$ equivale a moltiplicare per $2$, quindi $\tan60^\circ=\dfrac{\sqrt3}{2}\cdot2=\sqrt3\approx1{,}73$. Allo stesso modo $\tan30^\circ=\dfrac12\cdot\dfrac2{\sqrt3}=\dfrac1{\sqrt3}=\dfrac{\sqrt3}{3}$.

Il rapporto esiste quando $\cos\theta\ne0$. Il coseno vale $0$ quando $P$ sta sull'asse delle ordinate, cioè per $\theta=\dfrac\pi2+k\pi$ con $k\in\mathbb Z$. La scrittura $k\in\mathbb Z$ si legge «$k$ appartiene all'insieme dei numeri interi»: $k$ vale $0,1,-1,2,-2$ e così via.

Gli assi dividono il piano in quattro **quadranti**, numerati in verso antiorario a partire da quello in cui ascissa e ordinata sono positive. Il coseno ha il segno dell'ascissa di $P$ e il seno quello dell'ordinata. La tangente è positiva dove i due segni sono uguali.

| Quadrante | Coseno | Seno | Tangente |
| --- | --- | --- | --- |
| primo ($0^\circ$–$90^\circ$) | $+$ | $+$ | $+$ |
| secondo ($90^\circ$–$180^\circ$) | $-$ | $+$ | $-$ |
| terzo ($180^\circ$–$270^\circ$) | $-$ | $-$ | $+$ |
| quarto ($270^\circ$–$360^\circ$) | $+$ | $-$ | $-$ |

L'**angolo di riferimento** di un angolo è l'angolo acuto fra il raggio $OP$ e l'asse delle ascisse. Seno e coseno di un angolo hanno il valore assoluto (il numero senza il segno) di quelli dell'angolo di riferimento e il segno del quadrante. L'angolo $\dfrac{5\pi}{6}=150^\circ$ sta nel secondo quadrante e ha angolo di riferimento $180^\circ-150^\circ=30^\circ$, quindi $\sin\dfrac{5\pi}{6}=\dfrac12$ e $\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}$.
:::

:::teorema{#simmetrie titolo="Angoli associati"}
Fra gli **angoli associati** a un angolo $x$ ci sono $-x$, $\pi-x$ e $\dfrac\pi2-x$. I loro punti sulla circonferenza goniometrica sono simmetrici del punto di $x$, quindi seni e coseni si ricavano da quelli di $x$. Ogni uguaglianza è un'**identità**, cioè vale per ogni $x$, ed è verificata qui con $x=\dfrac\pi6$.

- Angoli opposti, $x$ e $-x$. I due punti hanno la stessa ascissa e ordinate opposte, perciò $\cos(-x)=\cos x$ e $\sin(-x)=-\sin x$. Verifica: $\sin\left(-\dfrac\pi6\right)=-\dfrac12$.
- Angoli supplementari, $x$ e $\pi-x$ (somma $\pi$). I due punti hanno la stessa ordinata e ascisse opposte, perciò $\sin(\pi-x)=\sin x$ e $\cos(\pi-x)=-\cos x$. Verifica: $\cos\dfrac{5\pi}{6}=-\dfrac{\sqrt3}{2}=-\cos\dfrac\pi6$.
- Angoli complementari, $x$ e $\dfrac\pi2-x$ (somma $\dfrac\pi2$). Nei due punti ascissa e ordinata sono scambiate, perciò $\sin x=\cos\left(\dfrac\pi2-x\right)$. Verifica: $\sin\dfrac\pi6=\dfrac12=\cos\dfrac\pi3$.

Con queste identità un angolo si riconduce a un angolo notevole: $\cos\dfrac{2\pi}{3}=\cos\left(\pi-\dfrac\pi3\right)=-\cos\dfrac\pi3=-\dfrac12$.
:::

## Identità e formule di addizione

::::teorema{#identita-fondamentale titolo="Identità fondamentale"}
Per ogni numero reale $x$ vale
$$
\sin^2x+\cos^2x=1,
$$
dove $\sin^2x$ indica $(\sin x)^2$. Per $x=\dfrac\pi6$ si ha $\left(\dfrac12\right)^2+\left(\dfrac{\sqrt3}{2}\right)^2=\dfrac14+\dfrac34=1$.
:::dimostrazione
Il punto $P=(\cos x,\sin x)$ appartiene alla circonferenza goniometrica, quindi dista $1$ dall'origine. Per il teorema di Pitagora, il quadrato della distanza di un punto dall'origine è la somma dei quadrati delle sue coordinate. Perciò $\cos^2x+\sin^2x=1$.
:::
::::

:::esempio{titolo="Ricavare il coseno scegliendo il segno"}
Sia $\alpha$ (alfa) un angolo con $\sin\alpha=\dfrac35$. Dall'identità fondamentale si ricava
$$
\cos^2\alpha=1-\left(\frac35\right)^2=1-\frac9{25}=\frac{16}{25}.
$$
I numeri che hanno quadrato $\dfrac{16}{25}$ sono due, $\dfrac45$ e $-\dfrac45$. Si scrive $\cos\alpha=\pm\dfrac45$, dove $\pm$ si legge «più o meno». Nel secondo quadrante il coseno è negativo, quindi $\cos\alpha=-\dfrac45$. Nel primo quadrante $\cos\alpha=\dfrac45$. Senza un'informazione sul quadrante il segno resta indeterminato.

Dividendo i due membri dell'identità fondamentale per $\cos^2x$, con $\cos x\ne0$, si ottiene
$$
\frac{\sin^2x}{\cos^2x}+1=\frac1{\cos^2x},\quad\text{cioè}\quad1+\tan^2x=\frac1{\cos^2x}.
$$
Per $x=\dfrac\pi3$ il primo membro vale $1+\left(\sqrt3\right)^2=4$ e il secondo vale $\dfrac1{\left(\frac12\right)^2}=4$.
:::

:::attenzione
La condizione $\cos x\ne0$ resta anche dopo una semplificazione. L'uguaglianza $\tan x\cos x=\sin x$ vale soltanto dove la tangente è definita: per $x=\dfrac\pi2$ il secondo membro vale $1$, mentre il primo non ha valore, perché $\tan\dfrac\pi2$ non esiste.
:::

:::teorema{#addizione-duplicazione titolo="Addizione, differenza e duplicazione"}
Le **formule di addizione** esprimono seno e coseno della somma di due angoli attraverso seno e coseno dei due angoli. Per ogni coppia di angoli $a$ e $b$ valgono
$$
\sin(a+b)=\sin a\cos b+\cos a\sin b,
$$
$$
\cos(a+b)=\cos a\cos b-\sin a\sin b.
$$
Le due formule derivano dalla composizione di due rotazioni della circonferenza goniometrica, di angoli $a$ e $b$. Con $a=\dfrac\pi6$ e $b=\dfrac\pi3$, la cui somma è $\dfrac\pi2$, la prima formula dà $\dfrac12\cdot\dfrac12+\dfrac{\sqrt3}{2}\cdot\dfrac{\sqrt3}{2}=\dfrac14+\dfrac34=1$, che è $\sin\dfrac\pi2$.

Sostituendo $-b$ a $b$ e usando $\sin(-b)=-\sin b$ e $\cos(-b)=\cos b$ si ricavano le **formule della differenza**, $\sin(a-b)=\sin a\cos b-\cos a\sin b$ e $\cos(a-b)=\cos a\cos b+\sin a\sin b$. Poiché $15^\circ=45^\circ-30^\circ$, si calcola
$$
\cos15^\circ=\frac{\sqrt2}{2}\cdot\frac{\sqrt3}{2}+\frac{\sqrt2}{2}\cdot\frac12=\frac{\sqrt6+\sqrt2}{4}\approx0{,}97.
$$

Ponendo $a=b=x$ nelle formule di addizione si ottengono le **formule di duplicazione**:
$$
\sin(2x)=2\sin x\cos x,
$$
$$
\cos(2x)=\cos^2x-\sin^2x=1-2\sin^2x=2\cos^2x-1.
$$
Le ultime due forme del coseno si ottengono sostituendo $\cos^2x=1-\sin^2x$ oppure $\sin^2x=1-\cos^2x$. Per $x=\dfrac\pi6$ si ritrovano i valori di $\dfrac\pi3$: il seno è $2\cdot\dfrac12\cdot\dfrac{\sqrt3}{2}=\dfrac{\sqrt3}{2}$ e il coseno è $\dfrac34-\dfrac14=\dfrac12$.

Dalle due ultime forme si ricavano $\sin^2x=\dfrac{1-\cos2x}{2}$ e $\cos^2x=\dfrac{1+\cos2x}{2}$. Per $x=\dfrac\pi6$ la prima dà $\dfrac12\left(1-\dfrac12\right)=\dfrac14$, che è il quadrato di $\sin\dfrac\pi6$. Il segno di seno e coseno si stabilisce poi con il quadrante.
:::

:::attenzione
Il seno di una somma è diverso dalla somma dei seni. Con $a=\dfrac\pi6$ e $b=\dfrac\pi3$ si ha $\sin(a+b)=1$, mentre $\sin a+\sin b=\dfrac12+\dfrac{\sqrt3}{2}\approx1{,}37$, un numero maggiore di $1$.
:::

## Grafici, periodicità ed equazioni

:::definizione{#periodicita titolo="Periodo e ampiezza"}
Una funzione $f$ è **periodica** se i suoi valori si ripetono a intervalli uguali, cioè se esiste un numero $T>0$ tale che $f(x+T)=f(x)$ per ogni $x$ del dominio, con $x+T$ ancora nel dominio. Il dominio è l'insieme dei numeri in cui $f$ è definita. Il più piccolo $T$ con questa proprietà, quando esiste, è il **periodo fondamentale**, o semplicemente periodo.

Aggiungere $2\pi$ a un angolo significa compiere un giro in più, che riporta nello stesso punto $P$. Perciò seno e coseno hanno periodo $2\pi$: per esempio $\sin\dfrac{13\pi}{6}=\sin\left(\dfrac\pi6+2\pi\right)=\dfrac12$. La tangente ha periodo $\pi$, perché mezzo giro cambia il segno di entrambe le coordinate di $P$ e lascia invariato il loro rapporto: $\tan\dfrac{5\pi}{4}=\tan\dfrac\pi4=1$.

Per la funzione $A\sin(bx)+c$, con $A\ne0$ e $b\ne0$, si indicano con $|A|$ e $|b|$ i valori assoluti di $A$ e di $b$.

- Il periodo è $\dfrac{2\pi}{|b|}$, perché la quantità $bx$ varia di $2\pi$ quando $x$ aumenta di $\dfrac{2\pi}{|b|}$.
- L'**ampiezza** è $|A|$, perché il seno varia fra $-1$ e $1$ e quindi $A\sin(bx)$ varia fra $-|A|$ e $|A|$.
- Il numero $c$ sposta il grafico in verticale senza cambiare il periodo. La funzione oscilla attorno al livello $c$ e i suoi valori formano l'intervallo $[c-|A|,\,c+|A|]$, cioè vanno da $c-|A|$ a $c+|A|$, estremi compresi.

Per $3\sin(2x)+1$ il periodo è $\dfrac{2\pi}{2}=\pi$, l'ampiezza è $3$ e i valori vanno da $1-3=-2$ a $1+3=4$.

Nel grafico il seno vale $0$ in $x=0$, sale a $1$ in $\dfrac\pi2\approx1{,}57$, scende a $-1$ in $\dfrac{3\pi}{2}\approx4{,}71$ e torna a $0$ in $2\pi\approx6{,}28$. Il coseno vale $1$ in $x=0$, scende a $-1$ in $\pi\approx3{,}14$ e torna a $1$ in $2\pi$.

::grafico{f="sin(x);cos(x)" xmin=-1 xmax=7 ymin=-1.5 ymax=1.5 titolo="Seno e coseno oscillano fra -1 e 1 e ripetono i valori dopo un giro."}
:::

:::esempio{#equazioni-goniometriche titolo="Equazioni su un intervallo"}
Risolvere $\sin x=\dfrac12$ significa trovare gli angoli il cui punto $P$ ha ordinata $\dfrac12$. In un giro i punti sono due: quello dell'angolo $\dfrac\pi6$ e il suo simmetrico rispetto all'asse delle ordinate, che corrisponde all'angolo $\pi-\dfrac\pi6=\dfrac{5\pi}{6}$. Il seno ha periodo $2\pi$, quindi tutte le soluzioni reali sono
$$
x=\frac\pi6+2k\pi\quad\text{oppure}\quad x=\frac{5\pi}{6}+2k\pi,\qquad k\in\mathbb Z.
$$
Se il testo assegna un intervallo, si tengono le soluzioni che vi appartengono: in $[2\pi,4\pi]$ sono $\dfrac{13\pi}{6}$ e $\dfrac{17\pi}{6}$, ottenute con $k=1$.

L'intervallo $[0,\pi)$ contiene i numeri $x$ con $0\le x<\pi$: l'estremo $0$ è compreso, l'estremo $\pi$ è escluso. Per risolvere $\sin(2x)=0$ in $[0,\pi)$ si pone $t=2x$. Da $0\le x<\pi$ segue $0\le t<2\pi$. In questo intervallo $\sin t=0$ per $t=0$ e per $t=\pi$. Dividendo per $2$ si ottiene $x=0$ oppure $x=\dfrac\pi2$. Il valore $x=\pi$ annulla $\sin(2x)$ ma è escluso dall'intervallo.
:::

:::esempio{#disequazioni-goniometriche titolo="Confronti attraverso la circonferenza"}
Si cercano gli $x$ di $[0,\pi]$ tali che $\sin x\ge\dfrac{\sqrt2}{2}$, cioè gli angoli il cui punto $P$ ha ordinata almeno $\dfrac{\sqrt2}{2}\approx0{,}71$. L'uguaglianza $\sin x=\dfrac{\sqrt2}{2}$ vale in $\dfrac\pi4$ e in $\pi-\dfrac\pi4=\dfrac{3\pi}{4}$. Fra questi due angoli il punto $P$ sta più in alto, quindi la disequazione è verificata; per esempio in $\dfrac\pi2$ il seno vale $1$. Altrove il punto sta più in basso; per esempio in $\dfrac\pi6$ il seno vale $0{,}5$. Le soluzioni formano l'intervallo $\left[\dfrac\pi4,\dfrac{3\pi}{4}\right]$. Con il segno $>$ al posto di $\ge$ i due estremi sarebbero esclusi.
:::

## Triangoli e misure indirette

:::definizione{#triangolo-rettangolo titolo="Rapporti nel triangolo rettangolo"}
In un triangolo rettangolo l'**ipotenusa** è il lato di fronte all'angolo retto e i **cateti** sono gli altri due lati. Rispetto a un angolo acuto $\alpha$, il cateto opposto è quello di fronte ad $\alpha$ e il cateto adiacente è quello che forma $\alpha$ insieme all'ipotenusa. Seno, coseno e tangente di $\alpha$ sono rapporti fra i lati.

- $\sin\alpha=\dfrac{\text{cateto opposto}}{\text{ipotenusa}}$
- $\cos\alpha=\dfrac{\text{cateto adiacente}}{\text{ipotenusa}}$
- $\tan\alpha=\dfrac{\text{cateto opposto}}{\text{cateto adiacente}}$

Nel triangolo con cateti $3$ e $4$ e ipotenusa $5$, per l'angolo $\alpha$ di fronte al cateto $3$ si ha $\sin\alpha=\dfrac35=0{,}6$, $\cos\alpha=\dfrac45=0{,}8$ e $\tan\alpha=\dfrac34=0{,}75$. Per l'altro angolo acuto i due cateti si scambiano i nomi, quindi il suo seno è $\dfrac45$. Dividendo i tre lati per l'ipotenusa si ottiene un triangolo con gli stessi angoli e ipotenusa $1$, cioè quello della circonferenza goniometrica, quindi le due definizioni coincidono.

Una rampa lunga $8\,\mathrm m$ e inclinata di $30^\circ$ rispetto all'orizzontale è l'ipotenusa di un triangolo rettangolo. Il dislivello è il cateto opposto all'angolo di $30^\circ$ e misura $8\sin30^\circ=8\cdot\dfrac12=4\,\mathrm m$. La distanza orizzontale è il cateto adiacente e misura $8\cos30^\circ=8\cdot\dfrac{\sqrt3}{2}=4\sqrt3\,\mathrm m\approx6{,}93\,\mathrm m$.

::grafico{linee="0,0 6.9282032303,0 6.9282032303,4 0,0" assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=5 etichette="3.2,-0.5,orizzontale;7.3,2,4 m;2.9,2.7,8 m;1.2,0.35,30°" titolo="Rampa, distanza orizzontale e dislivello formano un triangolo rettangolo."}
:::

:::teorema{#teoremi-triangoli titolo="Teoremi dei seni e del coseno"}
In un triangolo qualsiasi si indicano con $a$, $b$, $c$ i lati e con $\alpha$, $\beta$, $\gamma$ (alfa, beta, gamma) gli angoli rispettivamente opposti. Il **teorema dei seni** afferma che il rapporto fra un lato e il seno dell'angolo opposto è lo stesso per i tre lati. Il **teorema del coseno** fornisce un lato a partire dagli altri due e dall'angolo *compreso* fra essi.
$$
\frac a{\sin\alpha}=\frac b{\sin\beta}=\frac c{\sin\gamma},
\qquad c^2=a^2+b^2-2ab\cos\gamma.
$$
Entrambi si ricavano tracciando un'altezza e applicando ai due triangoli rettangoli ottenuti i rapporti fra i lati e il teorema di Pitagora.

- Teorema dei seni. Se $\alpha=30^\circ$, $\beta=45^\circ$ e $a=4$, da $\dfrac b{\sin\beta}=\dfrac a{\sin\alpha}$ si ricava $b=\dfrac{a\sin\beta}{\sin\alpha}=4\cdot\dfrac{\sqrt2}{2}\cdot2=4\sqrt2\approx5{,}66$.
- Teorema del coseno. Se $a=5$, $b=8$ e $\gamma=60^\circ$, allora $c^2=25+64-2\cdot5\cdot8\cdot\dfrac12=49$, quindi $c=7$. Per $\gamma=90^\circ$ il coseno è $0$ e la formula diventa il teorema di Pitagora, $c^2=a^2+b^2$.

Con due lati e un angolo non compreso fra essi, il teorema dei seni fornisce il seno di un secondo angolo, e due angoli supplementari hanno lo stesso seno. Con $\alpha=30^\circ$, $a=2$ e $b=2\sqrt2$ si trova $\sin\beta=\dfrac{b\sin\alpha}{a}=\dfrac{\sqrt2}{2}$, quindi $\beta=45^\circ$ oppure $\beta=135^\circ$. La somma degli angoli di un triangolo è $180^\circ$, quindi un valore di $\beta$ si accetta se lascia un terzo angolo positivo, cioè se $\alpha+\beta<180^\circ$. Le somme sono $75^\circ$ e $165^\circ$, perciò i triangoli con questi dati sono due.

L'area del triangolo è $\dfrac12ab\sin\gamma$, perché l'altezza relativa al lato $a$ misura $b\sin\gamma$. Con $a=6\,\mathrm{cm}$, $b=8\,\mathrm{cm}$ e $\gamma=30^\circ$ l'altezza è $8\cdot\dfrac12=4\,\mathrm{cm}$ e l'area è $\dfrac12\cdot6\cdot4=12\,\mathrm{cm^2}$.
:::

## Dati, frequenze e rappresentazioni

:::definizione{#frequenze titolo="Variabili e frequenze"}
Un'indagine statistica rileva una **variabile**, cioè una caratteristica, su un gruppo di persone o di oggetti. Ogni valore rilevato è un dato; i valori diversi che la variabile assume si chiamano **modalità**. Una variabile è *qualitativa* se le modalità sono categorie, come il mezzo di trasporto usato, ed è *quantitativa* se sono numeri. Una variabile quantitativa è discreta quando nasce da un conteggio, come il numero di assenze, ed è continua quando nasce da una misura, come una durata.

La **frequenza assoluta** $n_i$ della modalità $i$ è il numero di dati uguali a quella modalità. Indicato con $N$ il numero totale dei dati, la **frequenza relativa** è $f_i=\dfrac{n_i}{N}$ e la frequenza percentuale è $100\cdot f_i$. Si supponga che, fra $80$ pezzi controllati, $12$ siano difettosi e $68$ no. La frequenza relativa dei difettosi è $\dfrac{12}{80}=0{,}15$ e la percentuale è $15\%$. Per i non difettosi si ha $\dfrac{68}{80}=0{,}85$, cioè $85\%$. Ogni pezzo appartiene a una sola delle due modalità, quindi le frequenze assolute hanno somma $N=80$ e le relative hanno somma $1$.

Il denominatore è la numerosità del gruppo considerato. Se $3$ dei $12$ pezzi difettosi hanno un difetto di colore, questi sono $\dfrac3{12}=0{,}25$, cioè il $25\%$ dei difettosi, e $\dfrac3{80}=0{,}0375$, cioè il $3{,}75\%$ di tutti i pezzi.
:::

:::definizione{#frequenze-cumulative titolo="Frequenze cumulative"}
La **frequenza cumulativa** di un valore è il numero di dati minori o uguali a quel valore. Richiede modalità ordinabili e si calcola sommando le frequenze assolute dalla prima modalità fino a quella considerata. Si supponga che le assenze di $19$ studenti in un mese siano distribuite come nella tabella.

| Assenze | Frequenza assoluta | Frequenza cumulativa |
| --- | --- | --- |
| $0$ | $4$ | $4$ |
| $1$ | $7$ | $4+7=11$ |
| $2$ | $5$ | $11+5=16$ |
| $3$ | $3$ | $16+3=19$ |

Dalla riga del valore $2$ si legge che $16$ studenti hanno al più $2$ assenze. Le cumulative crescono o restano uguali da una riga alla successiva, perché ogni riga aggiunge dati e non ne toglie; l'ultima è il totale $N$.

La differenza fra due cumulative consecutive è una frequenza assoluta. Se le cumulative fino a $2$ e fino a $3$ sono $13$ e $18$, i dati uguali a $3$ sono $18-13=5$; nella tabella delle assenze sono $19-16=3$.
:::

:::definizione{#istogrammi titolo="Diagrammi e istogrammi"}
- Nel **diagramma a torta** ogni modalità è un settore circolare di angolo $360^\circ\cdot f$, dove $f$ è la frequenza relativa. Alla modalità «difettoso», con $f=0{,}15$, corrisponde un angolo di $360^\circ\cdot0{,}15=54^\circ$.
- Nel **diagramma a barre** ogni modalità ha una barra di altezza uguale alla sua frequenza.
- L'**istogramma** rappresenta una variabile quantitativa i cui valori sono raggruppati in **classi**, cioè in intervalli. Ogni classe ha un rettangolo la cui *area* è la frequenza. La base è l'ampiezza della classe e l'altezza è la **densità**, cioè la frequenza divisa per l'ampiezza.

Con le classi $[0,10)$ e $[10,20)$ ogni dato appartiene a una sola classe: il valore $10$ è escluso dalla prima e sta nella seconda.

Nella figura l'asse verticale riporta la densità $d$. Il primo rettangolo ha base $2$ e altezza $8$, quindi la sua classe contiene $2\cdot8=16$ dati. Il secondo ha base $5$ e altezza $4$ e contiene $5\cdot4=20$ dati; il terzo ha base $4$ e altezza $3$ e ne contiene $12$. Il primo rettangolo è il più alto e contiene meno dati del secondo, perché è più stretto.

::grafico{poligoni="0,0 2,0 2,8 0,8;2,0 7,0 7,4 2,4;7,0 11,0 11,3 7,3" xmin=-1 xmax=12 ymin=-1 ymax=9 nomi="x,d" titolo="Le aree dei rettangoli sono 16, 20 e 12; le altezze sono densità."}
:::

:::esempio{titolo="Informazioni esatte e dati raggruppati"}
Una tabella riporta le classi $[0,10)$ e $[10,20)$ con frequenze $4$ e $6$. Dalla tabella si legge che $4$ dati sono minori di $10$. Il numero dei dati minori di $5$ resta sconosciuto, perché i singoli valori non sono riportati: potrebbero esserlo tutti e quattro, nessuno o soltanto alcuni.

Per lo stesso motivo la media, cioè la somma dei dati divisa per il loro numero, si calcola soltanto in modo approssimato. A ogni dato si attribuisce il valore centrale della sua classe, $5$ per la prima e $15$ per la seconda, e si ottiene $\dfrac{4\cdot5+6\cdot15}{10}=11$. Il numero $11$ è una stima, perché con quattro dati uguali a $1$ e sei uguali a $12$ la tabella sarebbe la stessa e la media sarebbe $\dfrac{4\cdot1+6\cdot12}{10}=7{,}6$.
:::

## Media, mediana e moda

:::definizione{#media titolo="Media aritmetica e media ponderata"}
La **media aritmetica** di $N$ dati $x_1,\dots,x_N$ è la loro somma divisa per $N$. Si indica con $\bar x$, che si legge «x segnato»: $\bar x=\dfrac{x_1+\cdots+x_N}{N}$. Si supponga che tre studenti abbiano risolto in una settimana $2$, $4$ e $6$ esercizi. La somma è $12$, quindi $\bar x=\dfrac{12}{3}=4$ esercizi. In generale la somma dei dati è $N\bar x$; qui $3\cdot4=12$.

Quando i dati sono raccolti in una tabella di frequenze, ogni valore $v_i$ va contato $n_i$ volte. La media è allora
$$
\bar x=\frac{\sum_i n_iv_i}{\sum_i n_i},
$$
dove il simbolo $\sum_i$, detto sommatoria, indica la somma dei termini alla sua destra, uno per ogni riga $i$ della tabella. La media si dice **ponderata** perché le frequenze fanno da pesi. Per la tabella delle assenze, con valori $0,1,2,3$ e frequenze $4,7,5,3$, si ha
$$
\bar x=\frac{4\cdot0+7\cdot1+5\cdot2+3\cdot3}{4+7+5+3}=\frac{26}{19}\approx1{,}37.
$$

Lo stesso calcolo unisce due gruppi di cui sono note le medie. Un gruppo di $20$ persone con media $24$ ha somma $20\cdot24=480$; un gruppo di $10$ persone con media $27$ ha somma $10\cdot27=270$. Le $30$ persone insieme hanno somma $750$ e media $\dfrac{750}{30}=25$.
:::

:::attenzione
La media di due gruppi riuniti è diversa dalla media delle due medie quando i gruppi hanno numerosità diverse e medie diverse. Nell'esempio $\dfrac{24+27}{2}=25{,}5$, mentre la media delle $30$ persone è $25$. Il primo gruppo ha peso doppio, perché contiene il doppio delle persone.
:::

:::definizione{#mediana-moda titolo="Mediana e moda"}
La **mediana** è il valore che occupa la posizione centrale quando i dati sono scritti in ordine crescente.

- Con un numero dispari di dati è il dato centrale: in $2,4,5,7,8$ è il terzo, cioè $5$.
- Con un numero pari è la media dei due dati centrali. I dati $4,7,2,13,6,8$, ordinati, sono $2,4,6,7,8,13$. I due centrali sono il terzo e il quarto, quindi la mediana è $\dfrac{6+7}{2}=6{,}5$.

La posizione centrale si individua nell'elenco ordinato. Nell'elenco di partenza i due dati al centro sono $2$ e $13$, che hanno media $7{,}5$.

La **moda** è il valore con la frequenza più alta. Nella tabella delle assenze la moda è $1$, che ha frequenza $7$. La serie $2,2,5,9,9$ ha due mode, $2$ e $9$.

In una tabella di frequenze la mediana si trova con le cumulative. I dati della tabella delle assenze sono $19$, quindi il dato centrale è il decimo. La cumulativa passa da $4$ a $11$ nella riga del valore $1$, quindi il decimo dato vale $1$ e la mediana è $1$.

La media dipende da tutti i dati, la mediana dal loro ordine e dai dati centrali, la moda dalle frequenze. Se nei dati $2,4,6,7,8,13$ il valore $13$ diventa $73$, la somma aumenta di $60$ e la media aumenta di $\dfrac{60}{6}=10$, mentre i dati centrali restano $6$ e $7$ e la mediana resta $6{,}5$.
:::

:::esempio{titolo="Un dato mancante o eliminato"}
Cinque misure hanno media $18$, quindi la loro somma è $5\cdot18=90$.

- Dato mancante. Se quattro delle misure sono $15$, $17$, $20$ e $22$, la loro somma è $74$ e la quinta misura è $90-74=16$.
- Dato eliminato. Se si elimina una misura uguale a $26$, restano quattro misure con somma $90-26=64$ e media $\dfrac{64}{4}=16$.
- Dato aggiunto. Aggiungendo una misura uguale a $30$ le misure diventano sei, con somma $90+30=120$ e media $\dfrac{120}{6}=20$.

Quando un dato viene eliminato o aggiunto cambiano sia la somma sia il divisore.
:::

## Dispersione e trasformazione dei dati

:::definizione{#varianza titolo="Varianza descrittiva e deviazione standard"}
La varianza misura quanto i dati sono lontani dalla loro media. Le serie $2,4,6$ e $0,4,8$ hanno la stessa media $4$, e nella seconda i dati sono più distanti da $4$.

Lo **scarto** di un dato è la differenza $x_i-\bar x$ fra il dato e la media. La **varianza descrittiva** è la media dei quadrati degli scarti:
$$
\sigma^2=\frac1N\sum_{i=1}^N(x_i-\bar x)^2.
$$
Il simbolo $\sigma$ è la lettera greca sigma; la sommatoria $\sum_{i=1}^N$ ha un termine per ogni dato, dal primo all'$N$-esimo. La radice quadrata della varianza, $\sigma=\sqrt{\sigma^2}$, è la **deviazione standard**, detta anche scarto quadratico medio.

Per i dati $2,4,6$, che hanno media $4$, gli scarti sono $-2$, $0$ e $2$, con somma $0$. I loro quadrati sono $4$, $0$ e $4$, con somma $8$. La varianza è $\sigma^2=\dfrac83\approx2{,}67$ e la deviazione standard è $\sigma=\sqrt{\dfrac83}\approx1{,}63$ esercizi.

La somma degli scarti è $0$ per qualunque serie, perché dalla somma dei dati, che è $N\bar x$, si sottrae $N$ volte la media. Per questo si sommano i quadrati, che sono positivi o nulli, e la varianza è sempre positiva o nulla. La deviazione standard ha l'unità di misura dei dati, la varianza l'unità al quadrato.

Sviluppando i quadrati e usando $\sum_i x_i=N\bar x$ si ottiene una seconda formula: la varianza è la media dei quadrati dei dati meno il quadrato della media, $\sigma^2=\dfrac{\sum_i x_i^2}{N}-\bar x^2$. Con i dati $2,4,6$ si ha $\dfrac{4+16+36}{3}-4^2=\dfrac{56}{3}-\dfrac{48}{3}=\dfrac83$.

Per $N>1$ esiste anche una varianza con divisore $N-1$, che per i dati $2,4,6$ vale $\dfrac82=4$; il testo del quesito indica quale delle due è richiesta. Il **campo di variazione** è la differenza fra il dato massimo e il dato minimo, qui $6-2=4$, e usa soltanto i due dati estremi.
:::

:::teorema{#trasformazioni-dati titolo="Effetto di una trasformazione affine"}
Una **trasformazione affine** dei dati sostituisce ogni dato $x_i$ con $y_i=ax_i+b$, dove $a$ e $b$ sono due numeri fissati. La media, la varianza e la deviazione standard dei nuovi dati sono
$$
\bar y=a\bar x+b,\qquad \sigma_y^2=a^2\sigma_x^2,\qquad \sigma_y=|a|\,\sigma_x.
$$
Infatti lo scarto di un nuovo dato è $y_i-\bar y=(ax_i+b)-(a\bar x+b)=a(x_i-\bar x)$. Il numero $b$ si cancella e ogni scarto è moltiplicato per $a$, quindi il suo quadrato è moltiplicato per $a^2$.

Con $a=2$ e $b=1$ i dati $2,4,6$ diventano $5,9,13$. La loro media è $\dfrac{27}{3}=9$, che è $2\cdot4+1$. Gli scarti sono $-4,0,4$ e i loro quadrati hanno somma $32$, quindi la varianza è $\dfrac{32}{3}$, che è $2^2\cdot\dfrac83$, e la deviazione standard è $\sqrt{\dfrac{32}{3}}=2\sqrt{\dfrac83}$.

- Aggiungere $3$ a tutti i dati ($a=1$, $b=3$) aumenta la media di $3$ e lascia invariate la varianza e la deviazione standard.
- Raddoppiare tutti i dati ($a=2$, $b=0$) raddoppia la media e la deviazione standard e moltiplica per $4$ la varianza.
- Con $a=-2$ la deviazione standard raddoppia, perché è una radice quadrata e resta positiva; per questo nella formula compare $|a|$.
- Ripetere ogni dato lo stesso numero di volte lascia invariate la media e la varianza descrittiva, perché le somme e il numero dei dati sono moltiplicati per lo stesso fattore. Scrivendo due volte i dati $2,4,6$ la media è $\dfrac{24}{6}=4$ e la varianza è $\dfrac{16}{6}=\dfrac83$, come prima.
- Una varianza nulla significa che tutti i quadrati degli scarti sono nulli, cioè che tutti i dati sono uguali alla media. I gruppi $3,3,3$ e $7,7,7$ hanno entrambi varianza $0$. Riuniti hanno media $5$ e scarti $-2$ o $2$, quindi varianza $4$. La dispersione si misura rispetto alla media dei dati riuniti.
:::

## Conteggi, ordine e ripetizioni

:::definizione{#principi-conteggio titolo="Principio del prodotto e scelta fra casi"}
Il calcolo combinatorio conta in quanti modi si compie una scelta, senza elencarli.

Il **principio del prodotto** riguarda una scelta che si compie in fasi successive: se il numero di possibilità di ogni fase è lo stesso qualunque sia l'esito delle fasi precedenti, il numero totale è il prodotto di questi numeri. Un menu offre $3$ primi, $5$ secondi e $2$ dolci. Per ciascun primo ci sono $5$ secondi, quindi le coppie primo-secondo sono $3\cdot5=15$. Per ciascuna coppia ci sono $2$ dolci, quindi i pasti completi sono $15\cdot2=30$.

Il **principio della somma** riguarda una scelta fra casi alternativi senza elementi comuni: le possibilità dei casi si sommano. Chi ordina un solo piatto, scelto fra i secondi e i dolci, ha $5+2=7$ possibilità.

Se due casi hanno elementi comuni, la somma li conta due volte, quindi il loro numero va sottratto una volta. Fra gli interi da $1$ a $20$ i multipli di $2$ sono $10$ e i multipli di $5$ sono $4$, cioè $5,10,15,20$. I numeri $10$ e $20$ sono multipli di entrambi, quindi i multipli di $2$ o di $5$ sono $10+4-2=12$.
:::

:::definizione{#permutazioni-combinazioni titolo="Disposizioni, permutazioni e combinazioni"}
Il **fattoriale** di un intero $n\ge1$, scritto $n!$, è il prodotto degli interi da $n$ a $1$, cioè $n!=n(n-1)\cdots1$. Per esempio $3!=6$, $4!=24$ e $5!=120$. Per convenzione $0!=1$. Nei conteggi seguenti $n$ e $k$ sono interi con $0\le k\le n$.

- **Permutazioni.** Gli ordinamenti di $n$ oggetti distinti sono $n!$, perché il primo posto si occupa in $n$ modi, il secondo in $n-1$ e così via. Le lettere $\mathrm A$, $\mathrm B$, $\mathrm C$ hanno $3!=6$ ordinamenti: $\mathrm{ABC}$, $\mathrm{ACB}$, $\mathrm{BAC}$, $\mathrm{BCA}$, $\mathrm{CAB}$, $\mathrm{CBA}$.
- **Disposizioni.** I modi di scegliere $k$ oggetti fra $n$, assegnando a ciascuno un posto o un ruolo diverso, senza ripetizioni, sono $n(n-1)\cdots(n-k+1)$, un prodotto di $k$ fattori. Presidente e segretario fra $5$ persone si scelgono in $5\cdot4=20$ modi.
- **Combinazioni.** Se l'ordine non conta, ogni gruppo di $k$ oggetti compare $k!$ volte fra le disposizioni, una per ogni suo ordinamento. Il numero dei gruppi è perciò quello delle disposizioni diviso per $k!$. È il coefficiente binomiale $\binom nk$, che si legge «$n$ su $k$» e vale $\binom nk=\dfrac{n!}{k!\,(n-k)!}$. Una coppia fra $5$ persone si sceglie in $\dfrac{20}{2}=10$ modi; con la formula, $\dfrac{5!}{2!\,3!}=\dfrac{120}{2\cdot6}=10$.
- Sequenze con ripetizione. Se ogni posto si riempie con uno qualsiasi di $n$ simboli, $k$ posti danno $n^k$ sequenze. I codici di $3$ cifre, ciascuna da $0$ a $9$, sono $10^3=1000$.
- Anagrammi con lettere ripetute. Il fattoriale del numero di lettere si divide per i fattoriali delle ripetizioni di ogni lettera. La parola «mamma» ha $5$ lettere, con la m ripetuta $3$ volte e la a $2$ volte, quindi ha $\dfrac{5!}{3!\,2!}=\dfrac{120}{12}=10$ anagrammi distinti.

Una richiesta del tipo «almeno uno» si conta sottraendo dal totale i casi contrari. I codici di $3$ cifre senza alcun $7$ usano $9$ cifre per posto e sono $9^3=729$, quindi i codici con almeno un $7$ sono $1000-729=271$.

Un conteggio descrive possibilità. Diventa una probabilità, come rapporto fra casi favorevoli e casi possibili, soltanto con l'ipotesi che i casi contati siano ugualmente probabili.
:::

:::esempio{titolo="Vincoli sul primo posto e su posizioni vicine"}
Con le cifre $0,1,2,3,4$ si contano i numeri di tre cifre tutte diverse. La prima cifra ha $4$ possibilità, perché un numero di tre cifre non inizia con $0$. La seconda ne ha $4$, perché esclude la prima e ammette lo $0$. La terza ne ha $3$, perché esclude le prime due. Per il principio del prodotto i numeri sono $4\cdot4\cdot3=48$.

Cinque persone si dispongono in fila e due di esse, Anna e Bruno, stanno vicine. Le due persone si considerano come un unico blocco, quindi gli elementi da ordinare sono $4$, il blocco e le altre tre persone, con $4!=24$ ordinamenti. Dentro il blocco gli ordini sono $2$, Anna-Bruno e Bruno-Anna. Le file sono perciò $2\cdot24=48$, il doppio dei $4!$ ordinamenti, perché conta anche l'ordine interno al blocco.
:::
