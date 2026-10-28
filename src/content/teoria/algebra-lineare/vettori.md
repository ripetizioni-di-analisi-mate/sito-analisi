---
titolo: Vettori nel piano e nello spazio
sommario: Che cos'è un vettore geometrico, come si opera con le componenti, come prodotto scalare, prodotto vettoriale e prodotto misto misurano angoli, aree e volumi e riconoscono ortogonalità, parallelismo e complanarità.
---

## Vettori geometrici e operazioni

:::definizione{#vettore-geometrico titolo="Vettore geometrico"}
Un segmento orientato $AB$ è un segmento con un primo estremo $A$ (la coda) e un secondo estremo $B$ (la punta). Due segmenti orientati si dicono **equipollenti** se hanno la stessa lunghezza, la stessa direzione (cioè giacciono su rette parallele) e lo stesso verso. Un **vettore geometrico** è la classe di tutti i segmenti orientati equipollenti a uno dato; il vettore individuato da $AB$ si indica con $\overrightarrow{AB}$, un vettore generico con $\vec{v}$.

Un vettore ha quindi tre attributi: lunghezza, direzione e verso. Il punto di partenza è libero, poiché dati un punto $P$ e un vettore $\vec{v}$ esiste un solo punto $Q$ tale che $\overrightarrow{PQ} = \vec{v}$; si dice allora che $\vec{v}$ è applicato in $P$. Il **vettore nullo** $\vec{0}$ è rappresentato dai segmenti con coda e punta coincidenti, $\vec{0} = \overrightarrow{AA}$; ha lunghezza zero e direzione non definita.
:::

:::definizione{#somma-di-vettori titolo="Somma di vettori"}
Siano $\vec{v}$ e $\vec{w}$ due vettori. Si applica $\vec{v}$ in un punto $A$, ottenendo $\vec{v} = \overrightarrow{AB}$, e si applica $\vec{w}$ nella punta $B$, ottenendo $\vec{w} = \overrightarrow{BC}$. La **somma** è
$$
\vec{v} + \vec{w} = \overrightarrow{AC} .
$$
È la regola punta-coda; quando $\vec{v}$ e $\vec{w}$ sono applicati nello stesso punto e non sono paralleli, $\vec{v} + \vec{w}$ è la diagonale del parallelogramma che ha i due vettori come lati (**regola del parallelogramma**). In fisica la somma di vettori descrive la composizione di spostamenti e di forze.

::grafico{vettori="0,0,3,1,u;0,0,1,2,v;0,0,4,3,u + v" segmenti="3,1,4,3;1,2,4,3" xmin=-0.6 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="Regola del parallelogramma: $\vec{u} + \vec{v}$ è la diagonale del parallelogramma di lati $\vec{u}$ e $\vec{v}$"}

:::

:::definizione{#prodotto-per-scalare titolo="Prodotto per uno scalare"}
Siano $\lambda \in \mathbb{R}$ e $\vec{v}$ un vettore. Il vettore $\lambda \vec{v}$ ha lunghezza uguale a $|\lambda|$ volte la lunghezza di $\vec{v}$, la stessa direzione di $\vec{v}$, lo stesso verso se $\lambda > 0$ e verso opposto se $\lambda < 0$; se $\lambda = 0$ oppure $\vec{v} = \vec{0}$, si pone $\lambda \vec{v} = \vec{0}$. Il vettore $(-1)\vec{v}$ si indica con $-\vec{v}$ ed è l'**opposto** di $\vec{v}$; la **differenza** è $\vec{v} - \vec{w} = \vec{v} + (-\vec{w})$. Se $\vec{v} = \overrightarrow{AB}$ e $\vec{w} = \overrightarrow{AC}$, allora $\vec{v} - \vec{w} = \overrightarrow{CB}$, cioè la differenza è il vettore che va dalla punta di $\vec{w}$ alla punta di $\vec{v}$.

::grafico{vettori="0,0,3,1,v;0,0,1,2,w;1,2,3,1,v − w" xmin=-0.6 xmax=3.8 ymin=-0.6 ymax=2.8 uguale=1 titolo="La differenza $\vec{v} - \vec{w}$ va dalla punta di $\vec{w}$ alla punta di $\vec{v}$, perché $\vec{w} + (\vec{v} - \vec{w}) = \vec{v}$"}

:::

:::osservazione{#proprieta-delle-operazioni titolo="Proprietà delle operazioni"}
Per ogni terna di vettori $\vec{u}, \vec{v}, \vec{w}$ e per ogni $\lambda, \mu \in \mathbb{R}$ valgono le proprietà seguenti.

- Commutativa e associativa della somma: $\vec{v} + \vec{w} = \vec{w} + \vec{v}$ e $(\vec{u} + \vec{v}) + \vec{w} = \vec{u} + (\vec{v} + \vec{w})$.
- Elemento neutro e opposto: $\vec{v} + \vec{0} = \vec{v}$ e $\vec{v} + (-\vec{v}) = \vec{0}$.
- Distributive: $\lambda(\vec{v} + \vec{w}) = \lambda\vec{v} + \lambda\vec{w}$ e $(\lambda + \mu)\vec{v} = \lambda\vec{v} + \mu\vec{v}$.
- Associativa mista e unità: $\lambda(\mu\vec{v}) = (\lambda\mu)\vec{v}$ e $1\,\vec{v} = \vec{v}$.

Sono le stesse proprietà che definiscono uno **spazio vettoriale**, e si rimanda all'argomento sugli spazi vettoriali per la teoria generale.
:::

## Componenti in un riferimento cartesiano

:::definizione{#componenti titolo="Componenti di un vettore"}
Si fissa nello spazio un riferimento cartesiano ortogonale $Oxyz$ e si indicano con $\vec{i}$, $\vec{j}$, $\vec{k}$ i vettori di lunghezza $1$ orientati come i tre assi. Ogni vettore $\vec{v}$, applicato nell'origine, ha la punta in un solo punto $P = (v_1, v_2, v_3)$, e risulta
$$
\vec{v} = \overrightarrow{OP} = v_1 \vec{i} + v_2 \vec{j} + v_3 \vec{k} .
$$
I numeri $v_1, v_2, v_3$ sono le **componenti** di $\vec{v}$ e si scrive $\vec{v} = (v_1, v_2, v_3)$. In questo modo i vettori dello spazio corrispondono alle terne di $\mathbb{R}^3$, e i vettori del piano, con un riferimento $Oxy$, alle coppie di $\mathbb{R}^2$. In particolare $\vec{i} = (1, 0, 0)$, $\vec{j} = (0, 1, 0)$, $\vec{k} = (0, 0, 1)$ e $\vec{0} = (0, 0, 0)$.

::grafico{vettori="0,0,3,2,v;0,0,1,0,i;0,0,0,1,j" segmenti="3,0,3,2;0,2,3,2" punti="3,2,pieno,P" xmin=-0.6 xmax=3.8 ymin=-0.6 ymax=2.8 uguale=1 titolo="Nel piano $\vec{v} = \overrightarrow{OP} = 3\,\vec{i} + 2\,\vec{j}$, quindi $\vec{v} = (3, 2)$"}

:::

:::teorema{#operazioni-in-componenti titolo="Operazioni in componenti"}
Siano $\vec{v} = (v_1, v_2, v_3)$, $\vec{w} = (w_1, w_2, w_3)$ e $\lambda \in \mathbb{R}$. Allora
$$
\vec{v} + \vec{w} = (v_1 + w_1,\ v_2 + w_2,\ v_3 + w_3),
\qquad
\lambda \vec{v} = (\lambda v_1,\ \lambda v_2,\ \lambda v_3) .
$$
La formula segue dalle proprietà delle operazioni: sommando $v_1\vec{i} + v_2\vec{j} + v_3\vec{k}$ e $w_1\vec{i} + w_2\vec{j} + w_3\vec{k}$ e raccogliendo $\vec{i}$, $\vec{j}$, $\vec{k}$ si ottengono le componenti della somma, e lo stesso vale per il prodotto per $\lambda$. Le operazioni geometriche diventano così calcoli sui numeri; per $\vec{v} = (1, 2, -1)$ e $\vec{w} = (3, 0, 2)$ si ha $2\vec{v} - \vec{w} = (2 - 3,\ 4 - 0,\ -2 - 2) = (-1, 4, -4)$.
:::

:::teorema{#vettore-tra-due-punti titolo="Vettore tra due punti e punto medio"}
Siano $A = (a_1, a_2, a_3)$ e $B = (b_1, b_2, b_3)$. Allora
$$
\overrightarrow{AB} = (b_1 - a_1,\ b_2 - a_2,\ b_3 - a_3),
$$
e il punto medio del segmento $AB$ è
$$
M = \left( \frac{a_1 + b_1}{2},\ \frac{a_2 + b_2}{2},\ \frac{a_3 + b_3}{2} \right) .
$$
Per la regola punta-coda $\overrightarrow{OA} + \overrightarrow{AB} = \overrightarrow{OB}$, quindi $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$, che in componenti è la prima formula. Il punto medio soddisfa $\overrightarrow{AM} = \dfrac{1}{2}\overrightarrow{AB}$, perciò $\overrightarrow{OM} = \overrightarrow{OA} + \dfrac{1}{2}\left(\overrightarrow{OB} - \overrightarrow{OA}\right) = \dfrac{1}{2}\left(\overrightarrow{OA} + \overrightarrow{OB}\right)$. Con lo stesso ragionamento il punto $P$ tale che $\overrightarrow{AP} = t\,\overrightarrow{AB}$ ha coordinate $A + t\,(B - A)$; per $t \in [0, 1]$ il punto $P$ descrive il segmento $AB$, per $t \in \mathbb{R}$ la retta $AB$.
:::

:::definizione{#combinazione-lineare titolo="Combinazione lineare"}
Dati i vettori $\vec{v}_1, \dots, \vec{v}_k$ e i numeri reali $\lambda_1, \dots, \lambda_k$, il vettore
$$
\lambda_1 \vec{v}_1 + \lambda_2 \vec{v}_2 + \dots + \lambda_k \vec{v}_k
$$
è una **combinazione lineare** di $\vec{v}_1, \dots, \vec{v}_k$ con coefficienti $\lambda_1, \dots, \lambda_k$. Scrivere un vettore come combinazione lineare di vettori assegnati significa trovare i coefficienti, e uguagliando le componenti si ottiene un sistema lineare. La scrittura $\vec{v} = v_1\vec{i} + v_2\vec{j} + v_3\vec{k}$ è la combinazione lineare dei tre versori degli assi con coefficienti uguali alle componenti.
:::

:::esempio{titolo="Coefficienti di una combinazione"}
Nel piano si cerca di scrivere $\vec{w} = (5, 1)$ come combinazione di $\vec{u} = (1, 1)$ e $\vec{v} = (1, -1)$. L'uguaglianza $\alpha\vec{u} + \beta\vec{v} = \vec{w}$, letta componente per componente, è il sistema
$$
\begin{cases}
\alpha + \beta = 5 \\[4pt]
\alpha - \beta = 1
\end{cases}
$$
che ha l'unica soluzione $\alpha = 3$, $\beta = 2$, quindi $\vec{w} = 3\vec{u} + 2\vec{v}$.

::grafico{vettori="0,0,1,1,u;0,0,1,-1,v;0,0,3,3,3u;3,3,5,1,2v;0,0,5,1,w" xmin=-0.6 xmax=5.8 ymin=-1.6 ymax=3.6 uguale=1 titolo="$\vec{w} = (5, 1)$ si ottiene sommando con la regola punta-coda $3\vec{u}$ e $2\vec{v}$"}

:::

## Modulo, distanza e versori

:::definizione{#modulo titolo="Modulo di un vettore"}
Il **modulo** (o norma) di $\vec{v}$ è la lunghezza di un suo rappresentante e si indica con $\|\vec{v}\|$. In componenti, per $\vec{v} = (v_1, v_2, v_3)$,
$$
\|\vec{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2} .
$$
La formula segue applicando due volte il **teorema di Pitagora**: la proiezione di $\overrightarrow{OP}$ sul piano $xy$ ha lunghezza $\sqrt{v_1^2 + v_2^2}$, e con il segmento verticale di lunghezza $|v_3|$ forma un triangolo rettangolo di ipotenusa $OP$. Nel piano il modulo è $\sqrt{v_1^2 + v_2^2}$. Valgono $\|\vec{v}\| \geq 0$, con uguaglianza *solo* per $\vec{v} = \vec{0}$, e $\|\lambda\vec{v}\| = |\lambda|\,\|\vec{v}\|$; per esempio $\|(2, -1, 2)\| = \sqrt{4 + 1 + 4} = 3$.
:::

:::definizione{#distanza-tra-punti titolo="Distanza tra due punti"}
La **distanza** tra i punti $A$ e $B$ è il modulo del vettore $\overrightarrow{AB}$:
$$
d(A, B) = \|\overrightarrow{AB}\| = \sqrt{(b_1 - a_1)^2 + (b_2 - a_2)^2 + (b_3 - a_3)^2} .
$$
Per $A = (1, 0, 2)$ e $B = (3, -1, 4)$ si ha $\overrightarrow{AB} = (2, -1, 2)$, quindi $d(A, B) = 3$.
:::

:::definizione{#versore titolo="Versore"}
Un **versore** è un vettore di modulo $1$. Se $\vec{v} \neq \vec{0}$, il versore di $\vec{v}$ è
$$
\frac{\vec{v}}{\|\vec{v}\|} ,
$$
che ha la stessa direzione e lo stesso verso di $\vec{v}$, perché $\dfrac{1}{\|\vec{v}\|} > 0$, e ha modulo $\dfrac{\|\vec{v}\|}{\|\vec{v}\|} = 1$. Il versore serve a separare la direzione e il verso dalla lunghezza: i vettori di modulo $r$ paralleli a $\vec{v}$ sono $\pm\, r\,\dfrac{\vec{v}}{\|\vec{v}\|}$. Per $\vec{v} = (2, -1, 2)$ il versore è $\left( \dfrac{2}{3}, -\dfrac{1}{3}, \dfrac{2}{3} \right)$.
:::

## Prodotto scalare e angolo tra vettori

:::definizione{#angolo-tra-vettori titolo="Angolo tra due vettori"}
Siano $\vec{u}$ e $\vec{v}$ vettori non nulli applicati nello stesso punto. L'**angolo** tra $\vec{u}$ e $\vec{v}$ è l'angolo $\theta \in [0, \pi]$ formato dalle due semirette che li contengono. Vale $\theta = 0$ quando i vettori hanno stessa direzione e stesso verso, $\theta = \pi$ quando hanno stessa direzione e verso opposto. L'angolo non dipende dalla lunghezza dei vettori, e il prodotto scalare permette di calcolarlo a partire dalle componenti.
:::

:::definizione{#prodotto-scalare titolo="Prodotto scalare"}
Siano $\vec{u}$ e $\vec{v}$ vettori non nulli e sia $\theta$ l'angolo tra di essi. Il **prodotto scalare** è il numero reale
$$
\vec{u} \cdot \vec{v} = \|\vec{u}\|\, \|\vec{v}\| \cos\theta ;
$$
se uno dei due vettori è nullo si pone $\vec{u} \cdot \vec{v} = 0$. Si usa anche la notazione $\langle \vec{u}, \vec{v} \rangle$. Il segno del prodotto scalare indica se l'angolo è acuto ($\vec{u} \cdot \vec{v} > 0$), retto ($\vec{u} \cdot \vec{v} = 0$) od ottuso ($\vec{u} \cdot \vec{v} < 0$). Per $\vec{u} = \vec{v}$ si ha $\theta = 0$, quindi $\vec{v} \cdot \vec{v} = \|\vec{v}\|^2$.
:::

::::teorema{#prodotto-scalare-in-componenti titolo="Prodotto scalare in componenti"}
Siano $\vec{u} = (u_1, u_2, u_3)$ e $\vec{v} = (v_1, v_2, v_3)$. Allora
$$
\vec{u} \cdot \vec{v} = u_1 v_1 + u_2 v_2 + u_3 v_3 .
$$
Nel piano la formula è $u_1 v_1 + u_2 v_2$. Il teorema rende calcolabile il prodotto scalare senza conoscere l'angolo, e quindi permette di ricavare l'angolo dalle componenti. Per $\vec{u} = (1, 2, 2)$ e $\vec{v} = (2, 0, -1)$ si ha $\vec{u} \cdot \vec{v} = 2 + 0 - 2 = 0$.

:::dimostrazione
Se uno dei due vettori è nullo, entrambi i membri valgono $0$. Altrimenti si applicano $\vec{u}$ e $\vec{v}$ nell'origine, con punte $U$ e $V$; il vettore $\overrightarrow{VU}$ è $\vec{u} - \vec{v}$. Il **teorema del coseno** nel triangolo $OUV$ dà
$$
\|\vec{u} - \vec{v}\|^2 = \|\vec{u}\|^2 + \|\vec{v}\|^2 - 2\,\|\vec{u}\|\,\|\vec{v}\|\cos\theta ,
$$
e l'uguaglianza vale anche quando il triangolo è degenere ($\theta = 0$ oppure $\theta = \pi$), perché in quel caso si riduce a $(a - b)^2$ oppure $(a + b)^2$ con $a = \|\vec{u}\|$, $b = \|\vec{v}\|$. In componenti il primo membro è
$$
\begin{aligned}
\|\vec{u} - \vec{v}\|^2
&= (u_1 - v_1)^2 + (u_2 - v_2)^2 + (u_3 - v_3)^2 \\[6pt]
&= \|\vec{u}\|^2 + \|\vec{v}\|^2 - 2\,(u_1 v_1 + u_2 v_2 + u_3 v_3) .
\end{aligned}
$$
Confrontando le due espressioni si ottiene $\|\vec{u}\|\,\|\vec{v}\|\cos\theta = u_1 v_1 + u_2 v_2 + u_3 v_3$, cioè la tesi.
:::
::::

:::richiamo{titolo="Teorema del coseno"}
In un triangolo con lati di lunghezza $a$, $b$, $c$, detto $\gamma$ l'angolo compreso tra i lati $a$ e $b$, vale $c^2 = a^2 + b^2 - 2ab\cos\gamma$.
:::

:::teorema{#proprieta-del-prodotto-scalare titolo="Proprietà del prodotto scalare"}
Per ogni terna di vettori $\vec{u}, \vec{v}, \vec{w}$ e per ogni $\lambda \in \mathbb{R}$ valgono:

- simmetria: $\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}$;
- linearità: $(\vec{u} + \vec{w}) \cdot \vec{v} = \vec{u} \cdot \vec{v} + \vec{w} \cdot \vec{v}$ e $(\lambda\vec{u}) \cdot \vec{v} = \lambda\,(\vec{u} \cdot \vec{v})$;
- positività: $\vec{v} \cdot \vec{v} = \|\vec{v}\|^2 \geq 0$, con uguaglianza solo per $\vec{v} = \vec{0}$.

Le tre proprietà seguono dalla formula in componenti, poiché $u_1 v_1 + u_2 v_2 + u_3 v_3$ è simmetrica e lineare in ciascun vettore. Grazie alla linearità il prodotto scalare si sviluppa come un prodotto tra binomi; per esempio $\|\vec{u} + \vec{v}\|^2 = \|\vec{u}\|^2 + 2\,\vec{u} \cdot \vec{v} + \|\vec{v}\|^2$.
:::

:::osservazione{#calcolo-dell-angolo titolo="Calcolo dell'angolo"}
Dalla definizione e dalla formula in componenti, per $\vec{u}, \vec{v}$ non nulli,
$$
\cos\theta = \frac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\,\|\vec{v}\|} = \frac{u_1 v_1 + u_2 v_2 + u_3 v_3}{\|\vec{u}\|\,\|\vec{v}\|},
\qquad \theta \in [0, \pi] ,
$$
e poiché il coseno è invertibile su $[0, \pi]$ l'angolo è $\theta = \arccos\left( \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|\,\|\vec{v}\|} \right)$. Gli angoli di un triangolo $ABC$ si calcolano allo stesso modo: l'angolo in $A$ è quello tra $\overrightarrow{AB}$ e $\overrightarrow{AC}$, con *entrambi* i vettori uscenti da $A$.
:::

:::esempio{titolo="Angolo tra due vettori"}
Per $\vec{u} = (1, 0, 1)$ e $\vec{v} = (0, 1, 1)$ si ha $\vec{u} \cdot \vec{v} = 1$ e $\|\vec{u}\| = \|\vec{v}\| = \sqrt{2}$, quindi $\cos\theta = \dfrac{1}{2}$ e $\theta = \dfrac{\pi}{3}$.
:::

## Ortogonalità e proiezione ortogonale

:::definizione{#ortogonalita titolo="Vettori ortogonali"}
Due vettori $\vec{u}$ e $\vec{v}$ si dicono **ortogonali**, e si scrive $\vec{u} \perp \vec{v}$, se $\vec{u} \cdot \vec{v} = 0$. Se i vettori sono non nulli, sono ortogonali se e solo se formano un angolo retto. Infatti $\|\vec{u}\|\,\|\vec{v}\| \neq 0$, quindi $\vec{u} \cdot \vec{v} = 0$ equivale a $\cos\theta = 0$, e l'unico angolo di $[0, \pi]$ con coseno nullo è $\theta = \dfrac{\pi}{2}$. Con questa definizione il vettore nullo è ortogonale a *ogni* vettore. In componenti la condizione è un'equazione; per $\vec{u} = (k, 1, 2)$ e $\vec{v} = (1, k, -1)$ si ha $\vec{u} \cdot \vec{v} = 2k - 2$, quindi i vettori sono ortogonali solo per $k = 1$.
:::

:::osservazione{#vettori-ortogonali-nel-piano titolo="Vettori ortogonali nel piano"}
Nel piano, se $\vec{v} = (a, b) \neq \vec{0}$, il vettore $(-b, a)$ è ortogonale a $\vec{v}$, perché $a(-b) + ba = 0$, e ha lo stesso modulo di $\vec{v}$. I vettori ortogonali a $\vec{v}$ sono *tutti e soli* i multipli $t\,(-b, a)$ con $t \in \mathbb{R}$, poiché la condizione $ax + by = 0$ è un'equazione in due incognite con coefficienti non entrambi nulli e le sue soluzioni formano la retta per l'origine di direzione $(-b, a)$.

::grafico{vettori="0,0,3,1,v;0,0,-1,3,w" f="-3*x" punti="0,0,pieno" xmin=-2.2 xmax=3.8 ymin=-1.6 ymax=3.6 uguale=1 titolo="I vettori ortogonali a $\vec{v} = (3, 1)$ sono i multipli di $\vec{w} = (-1, 3)$ e stanno sulla retta $3x + y = 0$"}

:::

::::teorema{#proiezione-ortogonale titolo="Proiezione ortogonale su un vettore"}
Siano $\vec{u} \neq \vec{0}$ e $\vec{v}$ due vettori. Esiste un'unica coppia di vettori $\vec{v}_{\parallel}$ e $\vec{v}_{\perp}$ tali che
$$
\begin{cases}
\vec{v} = \vec{v}_{\parallel} + \vec{v}_{\perp} \\[4pt]
\vec{v}_{\parallel} = \lambda\,\vec{u} \ \text{ per qualche } \lambda \in \mathbb{R} \\[4pt]
\vec{v}_{\perp} \cdot \vec{u} = 0
\end{cases}
$$
e risulta
$$
\vec{v}_{\parallel} = \operatorname{pr}_{\vec{u}}(\vec{v}) = \frac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2}\, \vec{u},
\qquad
\vec{v}_{\perp} = \vec{v} - \operatorname{pr}_{\vec{u}}(\vec{v}) .
$$
Il vettore $\operatorname{pr}_{\vec{u}}(\vec{v})$ è la **proiezione ortogonale** di $\vec{v}$ sulla direzione di $\vec{u}$, e il numero $\dfrac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|} = \|\vec{v}\|\cos\theta$ è la componente di $\vec{v}$ lungo $\vec{u}$, con segno negativo quando l'angolo è ottuso. La decomposizione serve a calcolare altezze di triangoli, piedi di perpendicolari e componenti di una forza lungo una direzione assegnata.

::grafico{vettori="0,0,2,1,u;0,0,3,4,v;0,0,4,2,pr(v);4,2,3,4,v⊥" segmenti="-1,-0.5,5,2.5" xmin=-1 xmax=5 ymin=-0.8 ymax=4.6 uguale=1 titolo="Per $\vec{v} = (3, 4)$ e $\vec{u} = (2, 1)$ si ha $\dfrac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2} = 2$, quindi $\operatorname{pr}_{\vec{u}}(\vec{v}) = (4, 2)$ e $\vec{v}_{\perp} = (-1, 2)$"}

:::dimostrazione
Si cerca $\vec{v}_{\parallel} = \lambda\vec{u}$; allora $\vec{v}_{\perp} = \vec{v} - \lambda\vec{u}$ è determinato da $\lambda$, e per la linearità del prodotto scalare la terza condizione diventa
$$
(\vec{v} - \lambda\vec{u}) \cdot \vec{u} = \vec{v} \cdot \vec{u} - \lambda\,\|\vec{u}\|^2 = 0 .
$$
Poiché $\vec{u} \neq \vec{0}$, il coefficiente $\|\vec{u}\|^2$ è diverso da zero, quindi l'equazione ha l'unica soluzione $\lambda = \dfrac{\vec{v} \cdot \vec{u}}{\|\vec{u}\|^2}$. Perciò la coppia esiste ed è unica.
:::
::::

:::esempio{titolo="Decomposizione di un vettore"}
Per $\vec{v} = (3, 1, 2)$ e $\vec{u} = (1, 1, 0)$ si ha $\vec{v} \cdot \vec{u} = 4$ e $\|\vec{u}\|^2 = 2$, quindi $\vec{v}_{\parallel} = 2\vec{u} = (2, 2, 0)$ e $\vec{v}_{\perp} = (1, -1, 2)$. Il controllo $\vec{v}_{\perp} \cdot \vec{u} = 1 - 1 + 0 = 0$ conferma il risultato.
:::

## Prodotto vettoriale

:::definizione{#prodotto-vettoriale titolo="Prodotto vettoriale"}
Siano $\vec{u} = (u_1, u_2, u_3)$ e $\vec{v} = (v_1, v_2, v_3)$ vettori dello spazio. Il **prodotto vettoriale** è il vettore
$$
\vec{u} \times \vec{v} = \left( u_2 v_3 - u_3 v_2,\ \ u_3 v_1 - u_1 v_3,\ \ u_1 v_2 - u_2 v_1 \right) .
$$
Per ricordare la formula la si scrive come determinante simbolico sviluppato lungo la prima riga:
$$
\vec{u} \times \vec{v} =
\begin{vmatrix}
\vec{i} & \vec{j} & \vec{k} \\
u_1 & u_2 & u_3 \\
v_1 & v_2 & v_3
\end{vmatrix}
= \begin{vmatrix} u_2 & u_3 \\ v_2 & v_3 \end{vmatrix} \vec{i}
- \begin{vmatrix} u_1 & u_3 \\ v_1 & v_3 \end{vmatrix} \vec{j}
+ \begin{vmatrix} u_1 & u_2 \\ v_1 & v_2 \end{vmatrix} \vec{k} ,
$$
dove $\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$; il segno meno davanti alla seconda componente fa parte della regola. Il prodotto vettoriale è definito solo per vettori dello spazio, e il risultato è un vettore, mentre il prodotto scalare è un numero.
:::

:::esempio{titolo="Calcolo di un prodotto vettoriale"}
Per $\vec{u} = (1, 0, -1)$ e $\vec{v} = (2, 2, -1)$ si ha
$$
\vec{u} \times \vec{v} = \big( 0 \cdot (-1) - (-1) \cdot 2,\ \ (-1) \cdot 2 - 1 \cdot (-1),\ \ 1 \cdot 2 - 0 \cdot 2 \big) = (2, -1, 2) .
$$
Il risultato è ortogonale a entrambi i fattori, poiché $(2, -1, 2) \cdot (1, 0, -1) = 0$ e $(2, -1, 2) \cdot (2, 2, -1) = 4 - 2 - 2 = 0$.
:::

:::teorema{#proprieta-algebriche-del-prodotto-vettoriale titolo="Proprietà algebriche del prodotto vettoriale"}
Per ogni terna di vettori $\vec{u}, \vec{v}, \vec{w}$ dello spazio e per ogni $\lambda \in \mathbb{R}$ valgono:

- anticommutatività: $\vec{v} \times \vec{u} = -\,\vec{u} \times \vec{v}$, e in particolare $\vec{u} \times \vec{u} = \vec{0}$;
- linearità: $(\vec{u} + \vec{w}) \times \vec{v} = \vec{u} \times \vec{v} + \vec{w} \times \vec{v}$ e $(\lambda\vec{u}) \times \vec{v} = \lambda\,(\vec{u} \times \vec{v})$;
- prodotti dei versori: $\vec{i} \times \vec{j} = \vec{k}$, $\vec{j} \times \vec{k} = \vec{i}$, $\vec{k} \times \vec{i} = \vec{j}$.

Tutte seguono dalla formula in componenti, perché scambiando $\vec{u}$ con $\vec{v}$ ogni componente cambia segno e ogni componente è lineare in $\vec{u}$. Per l'anticommutatività l'ordine dei fattori conta, e invertendolo il risultato cambia verso.
:::

:::attenzione
Il prodotto vettoriale *non* gode della proprietà associativa. Con i versori degli assi si ha
$$
\vec{i} \times (\vec{i} \times \vec{j}) = \vec{i} \times \vec{k} = -\vec{j},
\qquad
(\vec{i} \times \vec{i}) \times \vec{j} = \vec{0} \times \vec{j} = \vec{0} ,
$$
quindi in un prodotto di tre vettori va sempre indicato quale prodotto si esegue per primo.
:::

::::teorema{#proprieta-geometriche-del-prodotto-vettoriale titolo="Significato geometrico del prodotto vettoriale"}
Siano $\vec{u}$ e $\vec{v}$ vettori non nulli dello spazio e sia $\theta \in [0, \pi]$ l'angolo tra di essi. Allora:

- $\vec{u} \times \vec{v}$ è ortogonale sia a $\vec{u}$ sia a $\vec{v}$;
- $\|\vec{u} \times \vec{v}\| = \|\vec{u}\|\,\|\vec{v}\|\sin\theta$;
- se $\vec{u} \times \vec{v} \neq \vec{0}$, il verso di $\vec{u} \times \vec{v}$ è dato dalla regola della mano destra: con il pollice lungo $\vec{u}$ e l'indice lungo $\vec{v}$, il medio indica $\vec{u} \times \vec{v}$.

La prima proprietà fornisce un vettore ortogonale a due vettori dati con un solo calcolo. Se $\vec{u}$ e $\vec{v}$ non sono paralleli, i vettori ortogonali a entrambi sono *tutti e soli* i multipli di $\vec{u} \times \vec{v}$, poiché sono ortogonali al piano individuato da $\vec{u}$ e $\vec{v}$ e hanno quindi la direzione della retta perpendicolare a quel piano. La seconda proprietà è la base delle formule per le aree. La regola del verso si ricava dal caso $\vec{i} \times \vec{j} = \vec{k}$ e la sua giustificazione si omette.

:::dimostrazione
Per la prima proprietà si calcola
$$
\begin{aligned}
\vec{u} \cdot (\vec{u} \times \vec{v})
&= u_1 (u_2 v_3 - u_3 v_2) + u_2 (u_3 v_1 - u_1 v_3) + u_3 (u_1 v_2 - u_2 v_1) \\[6pt]
&= u_1 u_2 v_3 - u_1 u_3 v_2 + u_2 u_3 v_1 - u_1 u_2 v_3 + u_1 u_3 v_2 - u_2 u_3 v_1 \\[6pt]
&= 0 ,
\end{aligned}
$$
e analogamente $\vec{v} \cdot (\vec{u} \times \vec{v}) = 0$. Per la seconda si dimostra l'**identità di Lagrange**
$$
\|\vec{u} \times \vec{v}\|^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2 - (\vec{u} \cdot \vec{v})^2 .
$$
Sviluppando il secondo membro, i termini $u_i^2 v_i^2$ si cancellano e restano, per ogni coppia di indici $i < j$, i termini $u_i^2 v_j^2 + u_j^2 v_i^2 - 2\,u_i v_i u_j v_j = (u_i v_j - u_j v_i)^2$; la somma di questi tre quadrati è proprio $\|\vec{u} \times \vec{v}\|^2$. Poiché $\vec{u} \cdot \vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos\theta$, dall'identità segue
$$
\|\vec{u} \times \vec{v}\|^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2\,(1 - \cos^2\theta) = \|\vec{u}\|^2\,\|\vec{v}\|^2 \sin^2\theta ,
$$
e dato che $\sin\theta \geq 0$ per $\theta \in [0, \pi]$, estraendo la radice si ottiene la tesi.
:::
::::

::::teorema{#area-del-parallelogramma titolo="Area del parallelogramma e del triangolo"}
Siano $\vec{u}$ e $\vec{v}$ vettori dello spazio applicati nello stesso punto. L'area del parallelogramma che ha $\vec{u}$ e $\vec{v}$ come lati è
$$
\mathcal{A} = \|\vec{u} \times \vec{v}\| ,
$$
e l'area del triangolo di vertici $A$, $B$, $C$ è
$$
\mathcal{A}_{ABC} = \frac{1}{2}\, \left\| \overrightarrow{AB} \times \overrightarrow{AC} \right\| .
$$
Con la stessa formula, dividendo per la lunghezza di un lato, si ottiene l'altezza relativa a quel lato: $h_C = \dfrac{2\,\mathcal{A}_{ABC}}{\|\overrightarrow{AB}\|}$.

::grafico{vettori="0,0,4,0,u;0,0,1,2,v" segmenti="1,2,5,2;4,0,5,2;1,0,1,2" etichette="1.15,0.9,h;0.45,0.25,θ" xmin=-0.6 xmax=5.6 ymin=-0.6 ymax=2.8 uguale=1 titolo="Il parallelogramma di lati $\vec{u}$ e $\vec{v}$ ha base $\|\vec{u}\|$ e altezza $h = \|\vec{v}\| \sin\theta$, quindi area $\|\vec{u}\|\,\|\vec{v}\| \sin\theta = \|\vec{u} \times \vec{v}\|$"}

:::dimostrazione
Se uno dei due vettori è nullo il parallelogramma è degenere ed entrambi i membri valgono $0$. Altrimenti si prende $\vec{u}$ come base; l'altezza relativa è la distanza della punta di $\vec{v}$ dalla retta di $\vec{u}$, che vale $\|\vec{v}\|\sin\theta$. Quindi l'area è $\|\vec{u}\|\,\|\vec{v}\|\sin\theta$, che per il **significato geometrico del prodotto vettoriale** coincide con $\|\vec{u} \times \vec{v}\|$. Il triangolo $ABC$ è metà del parallelogramma di lati $\overrightarrow{AB}$ e $\overrightarrow{AC}$, da cui la seconda formula.
:::
::::

:::osservazione{#area-nel-piano titolo="Aree nel piano"}
Per due vettori del piano $\vec{u} = (u_1, u_2)$ e $\vec{v} = (v_1, v_2)$ si considerano i vettori dello spazio $(u_1, u_2, 0)$ e $(v_1, v_2, 0)$, il cui prodotto vettoriale è $(0, 0, u_1 v_2 - u_2 v_1)$. Perciò l'area del parallelogramma di lati $\vec{u}$ e $\vec{v}$ è
$$
\mathcal{A} = \left| \begin{vmatrix} u_1 & u_2 \\ v_1 & v_2 \end{vmatrix} \right| = |u_1 v_2 - u_2 v_1| ,
$$
e quella del triangolo è la metà. Per $A = (0, 0)$, $B = (4, 1)$, $C = (1, 3)$ si ottiene $\mathcal{A}_{ABC} = \dfrac{1}{2}\,|4 \cdot 3 - 1 \cdot 1| = \dfrac{11}{2}$.

::grafico{area="3*x;x/4;0;1|(11-2*x)/3;x/4;1;4" vettori="0,0,4,1;0,0,1,3" segmenti="4,1,1,3;4,1,5,4;1,3,5,4" punti="0,0,pieno,A;4,1,pieno,B;1,3,pieno,C" xmin=-0.6 xmax=5.6 ymin=-0.6 ymax=4.6 uguale=1 titolo="Il triangolo di vertici $A = (0, 0)$, $B = (4, 1)$, $C = (1, 3)$ è metà del parallelogramma di lati $\overrightarrow{AB}$ e $\overrightarrow{AC}$, che ha area $11$"}

:::

## Parallelismo e punti allineati

:::definizione{#vettori-paralleli titolo="Vettori paralleli"}
Due vettori non nulli $\vec{u}$ e $\vec{v}$ si dicono **paralleli**, e si scrive $\vec{u} \parallel \vec{v}$, se hanno la stessa direzione, cioè se esiste $\lambda \in \mathbb{R}$, necessariamente non nullo, tale che $\vec{v} = \lambda\vec{u}$. Il verso è lo stesso per $\lambda > 0$ e opposto per $\lambda < 0$. In componenti la condizione dice che le componenti di $\vec{v}$ sono proporzionali a quelle di $\vec{u}$; per esempio $(2, -4, 6) = 2\,(1, -2, 3)$, quindi i due vettori sono paralleli e concordi.
:::

::::teorema{#criterio-di-parallelismo titolo="Criterio di parallelismo"}
Siano $\vec{u}$ e $\vec{v}$ vettori non nulli dello spazio. Allora
$$
\vec{u} \parallel \vec{v}
\quad\Longleftrightarrow\quad
\vec{u} \times \vec{v} = \vec{0} .
$$
Nel piano, per $\vec{u} = (u_1, u_2)$ e $\vec{v} = (v_1, v_2)$ non nulli, la condizione diventa $u_1 v_2 - u_2 v_1 = 0$. Il criterio trasforma il parallelismo in equazioni nelle componenti e non richiede divisioni, quindi si applica anche quando qualche componente è nulla; quando i vettori dipendono da parametri, si impone che le tre componenti di $\vec{u} \times \vec{v}$ siano nulle *insieme*.

:::dimostrazione
Se $\vec{v} = \lambda\vec{u}$, per la linearità e l'anticommutatività $\vec{u} \times \vec{v} = \lambda\,(\vec{u} \times \vec{u}) = \vec{0}$. Viceversa, sia $\vec{u} \times \vec{v} = \vec{0}$. Per l'**identità di Lagrange** $(\vec{u} \cdot \vec{v})^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2$. Si decompone $\vec{v} = \vec{v}_{\parallel} + \vec{v}_{\perp}$ rispetto a $\vec{u}$, con $\vec{v}_{\parallel} = \lambda\vec{u}$ e $\lambda = \dfrac{\vec{u} \cdot \vec{v}}{\|\vec{u}\|^2}$. Poiché $\vec{v}_{\parallel} \cdot \vec{v}_{\perp} = 0$, sviluppando $\|\vec{v}\|^2 = \|\vec{v}_{\parallel} + \vec{v}_{\perp}\|^2$ si ottiene
$$
\begin{aligned}
\|\vec{v}_{\perp}\|^2 &= \|\vec{v}\|^2 - \lambda^2 \|\vec{u}\|^2 \\[6pt]
&= \|\vec{v}\|^2 - \frac{(\vec{u} \cdot \vec{v})^2}{\|\vec{u}\|^2} \\[6pt]
&= \|\vec{v}\|^2 - \|\vec{v}\|^2 = 0 ,
\end{aligned}
$$
quindi $\vec{v}_{\perp} = \vec{0}$ e $\vec{v} = \lambda\vec{u}$. Il caso del piano segue considerando i vettori dello spazio con terza componente nulla, il cui prodotto vettoriale è $(0, 0, u_1 v_2 - u_2 v_1)$.
:::
::::

:::richiamo{titolo="Identità di Lagrange"}
Per ogni coppia di vettori $\vec{u}$, $\vec{v}$ dello spazio vale $\|\vec{u} \times \vec{v}\|^2 = \|\vec{u}\|^2\,\|\vec{v}\|^2 - (\vec{u} \cdot \vec{v})^2$.
:::

:::teorema{#punti-allineati titolo="Punti allineati"}
Tre punti distinti $A$, $B$, $C$ sono **allineati** se e solo se i vettori $\overrightarrow{AB}$ e $\overrightarrow{AC}$ sono paralleli, cioè se e solo se
$$
\overrightarrow{AB} \times \overrightarrow{AC} = \vec{0} .
$$
I tre punti stanno sulla stessa retta esattamente quando i segmenti $AB$ e $AC$, che hanno l'estremo $A$ in comune, hanno la stessa direzione; la condizione segue allora dal **criterio di parallelismo**. In termini di aree, i punti sono allineati quando il triangolo $ABC$ è degenere, cioè ha area nulla. Per $A = (1, 0, 2)$, $B = (2, 1, 1)$, $C = (4, 3, -1)$ si ha $\overrightarrow{AB} = (1, 1, -1)$ e $\overrightarrow{AC} = (3, 3, -3) = 3\,\overrightarrow{AB}$, quindi i punti sono allineati.
:::

## Prodotto misto, volumi e complanarità

:::definizione{#prodotto-misto titolo="Prodotto misto"}
Siano $\vec{u}$, $\vec{v}$, $\vec{w}$ vettori dello spazio. Il **prodotto misto** è il numero reale $\vec{u} \cdot (\vec{v} \times \vec{w})$. In componenti, per la formula del prodotto vettoriale,
$$
\vec{u} \cdot (\vec{v} \times \vec{w}) =
\begin{vmatrix}
u_1 & u_2 & u_3 \\
v_1 & v_2 & v_3 \\
w_1 & w_2 & w_3
\end{vmatrix} ,
$$
cioè il determinante della matrice che ha per righe le componenti dei tre vettori, sviluppato lungo la prima riga:
$$
\begin{aligned}
\vec{u} \cdot (\vec{v} \times \vec{w})
&= u_1 (v_2 w_3 - v_3 w_2) - u_2 (v_1 w_3 - v_3 w_1) \\[6pt]
&\quad + u_3 (v_1 w_2 - v_2 w_1) .
\end{aligned}
$$
Dalle proprietà dei determinanti, per le quali si rimanda all'argomento sui determinanti, segue che il prodotto misto non cambia per permutazioni cicliche dei tre vettori e cambia segno se due di essi vengono scambiati: $\vec{u} \cdot (\vec{v} \times \vec{w}) = \vec{v} \cdot (\vec{w} \times \vec{u}) = -\,\vec{v} \cdot (\vec{u} \times \vec{w})$.
:::

:::esempio{titolo="Calcolo di un prodotto misto"}
Per $\vec{u} = (1, 0, 2)$, $\vec{v} = (0, 1, 1)$, $\vec{w} = (1, 1, 0)$ si ha $\vec{v} \times \vec{w} = (1 \cdot 0 - 1 \cdot 1,\ 1 \cdot 1 - 0 \cdot 0,\ 0 \cdot 1 - 1 \cdot 1) = (-1, 1, -1)$, quindi
$$
\vec{u} \cdot (\vec{v} \times \vec{w}) = -1 + 0 - 2 = -3 .
$$
Lo sviluppo del determinante dà lo stesso valore, $1\,(0 - 1) - 0 + 2\,(0 - 1) = -3$.
:::

::::teorema{#volume-del-parallelepipedo titolo="Volume del parallelepipedo e del tetraedro"}
Siano $\vec{u}$, $\vec{v}$, $\vec{w}$ vettori dello spazio applicati nello stesso punto. Il volume del parallelepipedo che ha i tre vettori come spigoli è
$$
V = \left| \vec{u} \cdot (\vec{v} \times \vec{w}) \right| ,
$$
e il volume del tetraedro di vertici $A$, $B$, $C$, $D$ è
$$
V_{ABCD} = \frac{1}{6}\, \left| \overrightarrow{AB} \cdot \left( \overrightarrow{AC} \times \overrightarrow{AD} \right) \right| .
$$
Il valore assoluto è necessario perché il prodotto misto può essere negativo; il suo segno indica l'orientazione della terna e non ha significato per il volume.

:::dimostrazione
Se $\vec{v} \times \vec{w} = \vec{0}$, i vettori $\vec{v}$ e $\vec{w}$ sono paralleli o uno di essi è nullo, quindi il parallelepipedo è degenere ed entrambi i membri valgono $0$. Altrimenti si prende come base il parallelogramma di lati $\vec{v}$ e $\vec{w}$, che ha area $\|\vec{v} \times \vec{w}\|$. Il vettore $\vec{n} = \vec{v} \times \vec{w}$ è ortogonale a $\vec{v}$ e a $\vec{w}$, quindi al piano della base, e l'altezza $h$ è il modulo della **proiezione ortogonale** di $\vec{u}$ sulla direzione di $\vec{n}$:
$$
h = \left\| \frac{\vec{u} \cdot \vec{n}}{\|\vec{n}\|^2}\, \vec{n} \right\| = \frac{|\vec{u} \cdot \vec{n}|}{\|\vec{n}\|} .
$$
Il volume è area di base per altezza, cioè $\|\vec{n}\| \cdot \dfrac{|\vec{u} \cdot \vec{n}|}{\|\vec{n}\|} = |\vec{u} \cdot (\vec{v} \times \vec{w})|$. Il tetraedro $ABCD$ ha come base metà della base del parallelepipedo costruito su $\overrightarrow{AB}$, $\overrightarrow{AC}$, $\overrightarrow{AD}$ e la stessa altezza; poiché il volume di una piramide è un terzo di area di base per altezza, il suo volume è $\dfrac{1}{3} \cdot \dfrac{1}{2} = \dfrac{1}{6}$ del volume del parallelepipedo.
:::
::::

:::definizione{#vettori-complanari titolo="Vettori complanari"}
Tre vettori $\vec{u}$, $\vec{v}$, $\vec{w}$ si dicono **complanari** se, applicati nello stesso punto, giacciono su uno stesso piano. Quattro punti si dicono complanari se esiste un piano che li contiene tutti. Tre vettori complanari formano un parallelepipedo degenere, schiacciato su un piano, e quindi di volume nullo; questa osservazione è alla base del criterio che segue.
:::

::::teorema{#criterio-di-complanarita titolo="Criterio di complanarità"}
Siano $\vec{u}$, $\vec{v}$, $\vec{w}$ vettori dello spazio. Allora
$$
\vec{u}, \vec{v}, \vec{w} \ \text{complanari}
\quad\Longleftrightarrow\quad
\vec{u} \cdot (\vec{v} \times \vec{w}) = 0 .
$$
Di conseguenza quattro punti $A$, $B$, $C$, $D$ sono complanari se e solo se $\overrightarrow{AB} \cdot \left( \overrightarrow{AC} \times \overrightarrow{AD} \right) = 0$. Il criterio riduce la complanarità al calcolo di un determinante; con un parametro, si ottiene un'equazione nel parametro.

:::dimostrazione
Se $\vec{v} \times \vec{w} = \vec{0}$, i vettori $\vec{v}$ e $\vec{w}$ sono paralleli o uno di essi è nullo, quindi stanno su una retta e insieme a $\vec{u}$ giacciono su un piano; anche il prodotto misto è nullo, perciò l'equivalenza vale. Se $\vec{n} = \vec{v} \times \vec{w} \neq \vec{0}$, i vettori $\vec{v}$ e $\vec{w}$ non sono paralleli e individuano un unico piano $\pi$ per il punto di applicazione; poiché $\vec{n}$ è ortogonale a $\vec{v}$ e a $\vec{w}$, il piano $\pi$ è formato dai vettori ortogonali a $\vec{n}$. Quindi $\vec{u}$ giace su $\pi$ se e solo se $\vec{u} \cdot \vec{n} = 0$, cioè se e solo se il prodotto misto è **nullo**.
:::
::::

:::esempio{titolo="Complanarità con un parametro"}
I vettori $\vec{u} = (1, 1, 0)$, $\vec{v} = (0, 1, 1)$, $\vec{w} = (1, k, 2)$ hanno prodotto misto
$$
\begin{vmatrix}
1 & 1 & 0 \\
0 & 1 & 1 \\
1 & k & 2
\end{vmatrix}
= 1\,(2 - k) - 1\,(0 - 1) + 0 = 3 - k ,
$$
quindi sono **complanari** se e solo se $k = 3$. Per $k = 3$ si verifica infatti che $\vec{w} = (1, 3, 2) = \vec{u} + 2\vec{v}$.
:::
