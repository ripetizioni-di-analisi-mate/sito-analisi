---
titolo: Prodotto scalare, ortogonalità e teorema spettrale
sommario: Il prodotto scalare standard, la norma e gli angoli, le basi ortonormali, le proiezioni ortogonali con il procedimento di Gram-Schmidt, le matrici ortogonali e la diagonalizzazione ortogonale delle matrici simmetriche.
---

## Prodotto scalare standard e norma

:::definizione{#prodotto-scalare-standard titolo="Prodotto scalare standard"}
Dati $u = (u_1, \dots, u_n)$ e $v = (v_1, \dots, v_n)$ in $\mathbb{R}^n$, il **prodotto scalare standard** di $u$ e $v$ è il numero reale
$$
\langle u, v \rangle = u_1 v_1 + u_2 v_2 + \dots + u_n v_n ,
$$
indicato anche con $u \cdot v$. Scrivendo i vettori in colonna risulta $\langle u, v \rangle = u^T v$, cioè il prodotto righe per colonne della riga $u^T$ per la colonna $v$; questa forma è quella che si usa nei calcoli con le matrici. Per $u = (1, 2, -1)$ e $v = (3, 0, 1)$ si ottiene $\langle u, v \rangle = 3 + 0 - 1 = 2$. In $\mathbb{R}^2$ e in $\mathbb{R}^3$ la definizione coincide con il prodotto scalare dei vettori geometrici, per il quale si rimanda all'argomento sui vettori nel piano e nello spazio.
:::

:::teorema{#proprieta-prodotto-scalare titolo="Proprietà del prodotto scalare"}
Per ogni $u, v, w \in \mathbb{R}^n$ e ogni $\alpha, \beta \in \mathbb{R}$ valgono:

- **simmetria**: $\langle u, v \rangle = \langle v, u \rangle$;
- **bilinearità**: $\langle \alpha u + \beta w, v \rangle = \alpha \langle u, v \rangle + \beta \langle w, v \rangle$, e lo stesso nel secondo argomento;
- **definita positività**: $\langle v, v \rangle = v_1^2 + \dots + v_n^2 \geq 0$, con uguaglianza *solo se* $v = 0$.

Le tre proprietà seguono direttamente dalla definizione, perché il prodotto scalare è una somma di prodotti di componenti. La bilinearità permette di sviluppare i prodotti come in algebra: per esempio $\langle u + v, u + v \rangle = \langle u, u \rangle + 2\langle u, v \rangle + \langle v, v \rangle$.
:::

:::osservazione{#prodotto-scalare-generale titolo="Prodotti scalari su uno spazio vettoriale"}
Su un qualunque spazio vettoriale reale $V$ si chiama **prodotto scalare** ogni funzione $\langle \cdot, \cdot \rangle : V \times V \to \mathbb{R}$ simmetrica, bilineare e definita positiva. Un esempio su $M_n(\mathbb{R})$ è $\langle A, B \rangle = \operatorname{tr}(A^T B)$, che è la somma dei prodotti degli elementi di posto uguale. Le definizioni e i teoremi di questo argomento usano soltanto le tre proprietà, quindi valgono per ogni prodotto scalare; negli esercizi d'esame il prodotto scalare è quasi sempre quello standard di $\mathbb{R}^n$.
:::

:::definizione{#norma titolo="Norma e distanza"}
La **norma** di $v \in \mathbb{R}^n$ è il numero
$$
\|v\| = \sqrt{\langle v, v \rangle} = \sqrt{v_1^2 + \dots + v_n^2} ,
$$
e la **distanza** fra $u$ e $v$ è $d(u, v) = \|u - v\|$. Per la definita positività la norma è nulla *solo* per il vettore nullo; dalla bilinearità segue $\|\alpha v\| = |\alpha|\, \|v\|$. Un vettore di norma $1$ si chiama **versore**: se $v \neq 0$, il vettore $\dfrac{v}{\|v\|}$ è un versore con la stessa direzione e lo stesso verso di $v$, e il passaggio da $v$ al suo versore si chiama *normalizzazione*. Per $v = (1, 2, -1)$ si ha $\|v\| = \sqrt{6}$, quindi il versore è $\dfrac{1}{\sqrt{6}}\,(1, 2, -1)$.
:::

## Disuguaglianza di Cauchy-Schwarz e angolo tra vettori

::::teorema{#cauchy-schwarz titolo="Disuguaglianza di Cauchy-Schwarz"}
Per ogni $u, v \in \mathbb{R}^n$ vale
$$
|\langle u, v \rangle| \leq \|u\|\, \|v\| ,
$$
e l'uguaglianza vale *se e solo se* $u$ e $v$ sono linearmente dipendenti. La disuguaglianza garantisce che, per $u$ e $v$ non nulli, il quoziente $\dfrac{\langle u, v \rangle}{\|u\|\, \|v\|}$ sta in $[-1, 1]$, e su questo fatto si basa la definizione di angolo in $\mathbb{R}^n$.

:::dimostrazione
Se $v = 0$ entrambi i membri sono nulli e i vettori sono dipendenti. Sia $v \neq 0$. Per ogni $t \in \mathbb{R}$ la definita positività e la bilinearità danno
$$
0 \leq \|u - t v\|^2 = \|v\|^2\, t^2 - 2 \langle u, v \rangle\, t + \|u\|^2 .
$$
Il secondo membro è un polinomio di secondo grado in $t$ con coefficiente direttore positivo che non assume valori negativi, quindi il suo discriminante è minore o uguale a zero:
$$
4 \langle u, v \rangle^2 - 4 \|u\|^2 \|v\|^2 \leq 0 ,
$$
cioè $\langle u, v \rangle^2 \leq \|u\|^2 \|v\|^2$, da cui la tesi estraendo la radice. Il discriminante è nullo se e solo se il polinomio ha una radice $t_0$, cioè se e solo se $\|u - t_0 v\| = 0$; per la definita positività questo equivale a $u = t_0 v$, cioè alla dipendenza lineare di $u$ e $v$.
:::
::::

::::teorema{#disuguaglianza-triangolare titolo="Disuguaglianza triangolare"}
Per ogni $u, v \in \mathbb{R}^n$ vale $\|u + v\| \leq \|u\| + \|v\|$. In termini di distanze, $d(u, w) \leq d(u, v) + d(v, w)$ per ogni $u, v, w$: in un triangolo ogni lato è minore o uguale alla somma degli altri due.

:::dimostrazione
Sviluppando con la bilinearità e applicando la **disuguaglianza di Cauchy-Schwarz** si ottiene
$$
\|u + v\|^2 = \|u\|^2 + 2 \langle u, v \rangle + \|v\|^2 \leq \|u\|^2 + 2 \|u\|\,\|v\| + \|v\|^2 = \left( \|u\| + \|v\| \right)^2 ,
$$
e la tesi segue estraendo la radice, poiché entrambi i membri sono non negativi.
:::
::::

:::definizione{#angolo-tra-vettori titolo="Angolo tra due vettori"}
Siano $u, v \in \mathbb{R}^n$ non nulli. L'**angolo** fra $u$ e $v$ è l'unico $\theta \in [0, \pi]$ tale che
$$
\cos \theta = \frac{\langle u, v \rangle}{\|u\|\, \|v\|} .
$$
La definizione ha senso per ogni $n$ grazie alla disuguaglianza di Cauchy-Schwarz, e in $\mathbb{R}^2$ e $\mathbb{R}^3$ restituisce l'angolo geometrico. Il segno del prodotto scalare dà il tipo di angolo: $\theta$ è acuto se $\langle u, v \rangle > 0$, retto se $\langle u, v \rangle = 0$, ottuso se $\langle u, v \rangle < 0$. Per $u = (3, 1)$ e $v = (1, 2)$ risulta $\langle u, v \rangle = 5$, $\|u\| = \sqrt{10}$, $\|v\| = \sqrt{5}$, quindi $\cos\theta = \dfrac{5}{\sqrt{50}} = \dfrac{1}{\sqrt{2}}$ e $\theta = \dfrac{\pi}{4}$.

::grafico{vettori="0,0,3,1,u;0,0,1,2,v" curve="0.9*cos(t),0.9*sin(t),0.3218,1.1071" etichette="1.05,0.75,θ" xmin=-0.6 xmax=3.6 ymin=-0.6 ymax=2.6 uguale=1 titolo="I vettori $u = (3, 1)$ e $v = (1, 2)$ formano l'angolo $\theta = \dfrac{\pi}{4}$, poiché $\cos\theta = \dfrac{1}{\sqrt{2}}$"}

:::

## Ortogonalità e basi ortonormali

:::definizione{#vettori-ortogonali titolo="Vettori ortogonali"}
Due vettori $u, v \in \mathbb{R}^n$ sono **ortogonali**, e si scrive $u \perp v$, se $\langle u, v \rangle = 0$. Un insieme di vettori $\{ v_1, \dots, v_k \}$ si dice **ortogonale** se i suoi vettori sono a due a due ortogonali, e **ortonormale** se in più ogni $v_i$ è un versore, cioè se
$$
\langle v_i, v_j \rangle =
\begin{cases}
1 & \text{se } i = j \\[4pt]
0 & \text{se } i \neq j
\end{cases}
$$
Il vettore nullo è ortogonale a ogni vettore. In $\mathbb{R}^4$ i vettori $(1, 1, 2, -1)$ e $(2, 1, -1, 1)$ sono ortogonali, perché $2 + 1 - 2 - 1 = 0$.
:::

:::teorema{#teorema-di-pitagora titolo="Teorema di Pitagora"}
Se $u, v \in \mathbb{R}^n$ sono ortogonali, allora $\|u + v\|^2 = \|u\|^2 + \|v\|^2$. Segue dallo sviluppo $\|u + v\|^2 = \|u\|^2 + 2\langle u, v \rangle + \|v\|^2$, in cui il termine centrale è nullo per ipotesi. Per induzione la formula si estende a un numero qualunque di vettori a due a due ortogonali. Il teorema servirà a dimostrare che la proiezione ortogonale realizza la distanza minima da un sottospazio.
:::

::::teorema{#ortogonali-indipendenti titolo="Indipendenza dei vettori ortogonali"}
Se $v_1, \dots, v_k \in \mathbb{R}^n$ sono non nulli e a due a due ortogonali, allora sono **linearmente indipendenti**. Di conseguenza un insieme ortogonale di $n$ vettori non nulli di $\mathbb{R}^n$ è una base, senza bisogno di calcolare un rango o un determinante.

:::dimostrazione
Sia $\alpha_1 v_1 + \dots + \alpha_k v_k = 0$. Fissato un indice $j$, si moltiplica scalarmente per $v_j$; per la bilinearità e poiché $\langle v_i, v_j \rangle = 0$ per $i \neq j$, si ottiene
$$
0 = \langle \alpha_1 v_1 + \dots + \alpha_k v_k, v_j \rangle = \alpha_j \langle v_j, v_j \rangle = \alpha_j \|v_j\|^2 .
$$
Poiché $v_j \neq 0$, si ha $\|v_j\|^2 > 0$, quindi $\alpha_j = 0$. L'indice $j$ è arbitrario, perciò tutti i coefficienti sono nulli e i vettori sono indipendenti.
:::
::::

:::definizione{#base-ortonormale titolo="Base ortonormale"}
Una base di un sottospazio $W \subseteq \mathbb{R}^n$ si dice **ortogonale** se i suoi vettori sono a due a due ortogonali, **ortonormale** se in più sono versori. La base canonica $e_1, \dots, e_n$ è ortonormale. Da una base ortogonale si ottiene una base ortonormale dividendo ogni vettore per la sua norma: i vettori $(1, 1)$ e $(1, -1)$ sono ortogonali, quindi $\dfrac{1}{\sqrt{2}}\,(1, 1)$ e $\dfrac{1}{\sqrt{2}}\,(1, -1)$ formano una base ortonormale di $\mathbb{R}^2$. Le basi ortonormali sono quelle in cui le coordinate si calcolano con un prodotto scalare, come stabilisce il teorema seguente.
:::

::::teorema{#coordinate-base-ortonormale titolo="Coordinate rispetto a una base ortonormale"}
Sia $\{ e_1, \dots, e_k \}$ una base ortonormale del sottospazio $W$. Allora per ogni $w \in W$ vale
$$
w = \langle w, e_1 \rangle\, e_1 + \dots + \langle w, e_k \rangle\, e_k ,
$$
cioè la coordinata $i$-esima di $w$ è il prodotto scalare $\langle w, e_i \rangle$. Se la base è soltanto ortogonale, con vettori $w_1, \dots, w_k$, la coordinata $i$-esima è $\dfrac{\langle w, w_i \rangle}{\langle w_i, w_i \rangle}$. In entrambi i casi si evita la risoluzione di un sistema lineare.

:::dimostrazione
Poiché $\{ e_1, \dots, e_k \}$ è una base di $W$, esistono $\alpha_1, \dots, \alpha_k$ con $w = \alpha_1 e_1 + \dots + \alpha_k e_k$. Moltiplicando scalarmente per $e_j$ e usando $\langle e_i, e_j \rangle = 0$ per $i \neq j$ e $\langle e_j, e_j \rangle = 1$, si ottiene $\langle w, e_j \rangle = \alpha_j$. Per una base ortogonale lo stesso calcolo dà $\langle w, w_j \rangle = \alpha_j \langle w_j, w_j \rangle$, da cui la seconda formula.
:::
::::

:::esempio{titolo="Coordinate in una base ortonormale del piano"}
Rispetto alla base ortonormale $e_1 = \dfrac{1}{\sqrt{2}}\,(1, 1)$, $e_2 = \dfrac{1}{\sqrt{2}}\,(1, -1)$, il vettore $v = (3, 1)$ ha coordinate
$$
\langle v, e_1 \rangle = \frac{4}{\sqrt{2}} = 2\sqrt{2},
\qquad
\langle v, e_2 \rangle = \frac{2}{\sqrt{2}} = \sqrt{2} .
$$
La verifica conferma il risultato: $2\sqrt{2}\, e_1 + \sqrt{2}\, e_2 = (2, 2) + (1, -1) = (3, 1)$.
:::

## Proiezione ortogonale

:::definizione{#proiezione-su-un-vettore titolo="Proiezione ortogonale su un vettore"}
Siano $u, v \in \mathbb{R}^n$ con $u \neq 0$. La **proiezione ortogonale** di $v$ su $u$ è il vettore
$$
\operatorname{pr}_u(v) = \frac{\langle v, u \rangle}{\langle u, u \rangle}\, u .
$$
È l'unico multiplo di $u$ tale che la differenza $v - \operatorname{pr}_u(v)$ sia ortogonale a $u$: infatti $\langle v - t u, u \rangle = \langle v, u \rangle - t \langle u, u \rangle$ si annulla soltanto per $t = \dfrac{\langle v, u \rangle}{\langle u, u \rangle}$. Così $v$ si scrive come somma di un vettore parallelo a $u$ e di uno ortogonale a $u$. Per $u = (2, 1)$ e $v = (3, 4)$ si ha $\langle v, u \rangle = 10$ e $\langle u, u \rangle = 5$, quindi $\operatorname{pr}_u(v) = 2u = (4, 2)$ e $v - \operatorname{pr}_u(v) = (-1, 2)$, che è ortogonale a $u$.

::grafico{vettori="0,0,2,1,u;0,0,3,4,v;0,0,4,2,p;4,2,3,4,v − p" segmenti="-1,-0.5,5,2.5" xmin=-1 xmax=5 ymin=-0.8 ymax=4.5 uguale=1 titolo="La proiezione $p = \operatorname{pr}_u(v) = (4, 2)$ di $v = (3, 4)$ sulla retta generata da $u = (2, 1)$ (tratteggiata): la differenza $v - p = (-1, 2)$ è ortogonale alla retta"}

:::

::::teorema{#proiezione-su-sottospazio titolo="Proiezione ortogonale su un sottospazio"}
Sia $W \subseteq \mathbb{R}^n$ un sottospazio con base ortogonale $\{ w_1, \dots, w_k \}$ e sia $v \in \mathbb{R}^n$. Il vettore
$$
P_W(v) = \frac{\langle v, w_1 \rangle}{\langle w_1, w_1 \rangle}\, w_1 + \dots + \frac{\langle v, w_k \rangle}{\langle w_k, w_k \rangle}\, w_k
$$
appartiene a $W$, e la differenza $v - P_W(v)$ è ortogonale a *ogni* vettore di $W$. Inoltre $P_W(v)$ è l'unico vettore di $W$ con questa proprietà, e si chiama **proiezione ortogonale** di $v$ su $W$. La formula è la somma delle proiezioni di $v$ sui vettori della base, e vale *solo* per una base ortogonale; se la base di $W$ non è ortogonale, la si rende tale con il procedimento di Gram-Schmidt.

:::dimostrazione
Il vettore $P_W(v)$ è combinazione lineare di $w_1, \dots, w_k$, quindi appartiene a $W$. Per ogni indice $j$, poiché $\langle w_i, w_j \rangle = 0$ per $i \neq j$, si ha
$$
\langle P_W(v), w_j \rangle = \frac{\langle v, w_j \rangle}{\langle w_j, w_j \rangle}\, \langle w_j, w_j \rangle = \langle v, w_j \rangle ,
$$
perciò $\langle v - P_W(v), w_j \rangle = 0$. Ogni vettore di $W$ è combinazione lineare dei $w_j$, quindi per la bilinearità $v - P_W(v)$ è ortogonale a tutto $W$. Per l'unicità, siano $p, p' \in W$ con $v - p$ e $v - p'$ entrambi ortogonali a $W$. Allora $p - p' = (v - p') - (v - p)$ è ortogonale a $W$ e appartiene a $W$, quindi è ortogonale a sé stesso: $\|p - p'\|^2 = 0$, cioè $p = p'$.
:::
::::

::::teorema{#distanza-da-sottospazio titolo="Distanza da un sottospazio"}
Sia $W \subseteq \mathbb{R}^n$ un sottospazio e sia $v \in \mathbb{R}^n$. Per ogni $w \in W$ vale
$$
\|v - P_W(v)\| \leq \|v - w\| ,
$$
con uguaglianza *solo se* $w = P_W(v)$. La proiezione ortogonale è quindi il punto di $W$ **più vicino** a $v$, e la **distanza** di $v$ da $W$ è $d(v, W) = \|v - P_W(v)\|$.

:::dimostrazione
Per ogni $w \in W$ si scrive $v - w = \left( v - P_W(v) \right) + \left( P_W(v) - w \right)$. Il primo addendo è ortogonale a $W$ e il secondo appartiene a $W$, quindi i due addendi sono ortogonali e per il **teorema di Pitagora**
$$
\|v - w\|^2 = \|v - P_W(v)\|^2 + \|P_W(v) - w\|^2 \geq \|v - P_W(v)\|^2 ,
$$
con uguaglianza se e solo se $\|P_W(v) - w\| = 0$, cioè $w = P_W(v)$.
:::
::::

:::esempio{titolo="Proiezione su un piano dello spazio"}
Sia $W = \langle (1, 0, 1), (1, 1, -1) \rangle$ e sia $v = (2, 3, 2)$. I due generatori sono ortogonali, poiché $1 + 0 - 1 = 0$, quindi la formula si applica direttamente:
$$
P_W(v) = \frac{4}{2}\,(1, 0, 1) + \frac{3}{3}\,(1, 1, -1) = (3, 1, 1) .
$$
La differenza $v - P_W(v) = (-1, 2, 1)$ è ortogonale a entrambi i generatori, come prevede il teorema, e la distanza di $v$ da $W$ è $\|(-1, 2, 1)\| = \sqrt{6}$.
:::

## Il procedimento di Gram-Schmidt

::::teorema{#gram-schmidt titolo="Procedimento di Gram-Schmidt"}
Siano $v_1, \dots, v_k \in \mathbb{R}^n$ linearmente indipendenti. I vettori definiti da
$$
\begin{aligned}
u_1 &= v_1 \\[6pt]
u_2 &= v_2 - \frac{\langle v_2, u_1 \rangle}{\langle u_1, u_1 \rangle}\, u_1 \\[6pt]
u_3 &= v_3 - \frac{\langle v_3, u_1 \rangle}{\langle u_1, u_1 \rangle}\, u_1 - \frac{\langle v_3, u_2 \rangle}{\langle u_2, u_2 \rangle}\, u_2
\end{aligned}
$$
e così via, sottraendo a ogni $v_j$ le sue proiezioni sugli $u_i$ già costruiti, sono non nulli, a due a due ortogonali, e per ogni $j$ vale $\langle u_1, \dots, u_j \rangle = \langle v_1, \dots, v_j \rangle$. Dividendo ogni $u_j$ per la sua norma si ottiene una **base ortonormale** di $\langle v_1, \dots, v_k \rangle$. Il procedimento serve a costruire basi ortonormali di un sottospazio assegnato, a calcolare proiezioni ortogonali e, nella diagonalizzazione ortogonale, a rendere ortonormale una base di un autospazio.

:::dimostrazione
Si procede per induzione su $j$. Per $j = 1$ si ha $u_1 = v_1 \neq 0$. Si supponga che $u_1, \dots, u_{j-1}$ siano non nulli, a due a due ortogonali, e generino $W_{j-1} = \langle v_1, \dots, v_{j-1} \rangle$. La somma che si sottrae a $v_j$ è la proiezione ortogonale $P_{W_{j-1}}(v_j)$, quindi $u_j = v_j - P_{W_{j-1}}(v_j)$ è ortogonale a $W_{j-1}$ per il **teorema della proiezione ortogonale su un sottospazio**, e in particolare a $u_1, \dots, u_{j-1}$. Il vettore $u_j$ è non nullo, perché altrimenti $v_j = P_{W_{j-1}}(v_j)$ apparterrebbe a $W_{j-1}$, contro l'indipendenza di $v_1, \dots, v_j$. Infine $u_j$ è combinazione di $v_j$ e di vettori di $W_{j-1}$, e viceversa $v_j = u_j + P_{W_{j-1}}(v_j)$, quindi i due insiemi $\{ u_1, \dots, u_j \}$ e $\{ v_1, \dots, v_j \}$ generano lo stesso sottospazio.
:::
::::

:::esempio{titolo="Gram-Schmidt nel piano e nello spazio"}
In $\mathbb{R}^2$, con $v_1 = (3, 1)$ e $v_2 = (2, 4)$, si ha $\langle v_2, v_1 \rangle = 10$ e $\langle v_1, v_1 \rangle = 10$, quindi $u_2 = (2, 4) - (3, 1) = (-1, 3)$. In $\mathbb{R}^3$, con $v_1 = (1, 1, 0)$ e $v_2 = (1, 0, 1)$, si ottiene
$$
u_2 = (1, 0, 1) - \frac{1}{2}\,(1, 1, 0) = \left( \frac{1}{2}, -\frac{1}{2}, 1 \right) ,
$$
e la base ortonormale di $\langle v_1, v_2 \rangle$ è formata da $\dfrac{1}{\sqrt{2}}\,(1, 1, 0)$ e $\dfrac{1}{\sqrt{6}}\,(1, -1, 2)$.

::grafico{vettori="0,0,3,1,v₁;0,0,2,4,v₂;0,0,-1,3,u₂" segmenti="3,1,2,4" xmin=-1.8 xmax=3.8 ymin=-0.6 ymax=4.4 uguale=1 titolo="Gram-Schmidt in $\mathbb{R}^2$: a $v_2 = (2, 4)$ si toglie la sua proiezione su $v_1$, che è $v_1$ stesso, e resta $u_2 = (-1, 3)$, ortogonale a $v_1$"}

:::

:::osservazione{#gram-schmidt-nei-calcoli titolo="Gram-Schmidt nei calcoli"}
Le proiezioni non cambiano se un vettore $u_i$ viene sostituito da un suo multiplo non nullo, perché il vettore $\dfrac{\langle v, u_i \rangle}{\langle u_i, u_i \rangle}\, u_i$ resta lo stesso. Perciò, a ogni passo, si può moltiplicare $u_i$ per un numero che elimina i denominatori: nell'esempio in $\mathbb{R}^3$ si usa $u_2 = (1, -1, 2)$ al posto di $\left( \dfrac{1}{2}, -\dfrac{1}{2}, 1 \right)$. La normalizzazione si esegue alla fine, una volta per tutte. Se durante il procedimento si ottiene $u_j = 0$, il vettore $v_j$ è combinazione lineare dei precedenti, e il procedimento applicato a vettori dipendenti segnala così la dipendenza.
:::

## Complemento ortogonale

:::definizione{#complemento-ortogonale titolo="Complemento ortogonale"}
Sia $W \subseteq \mathbb{R}^n$ un sottospazio. Il **complemento ortogonale** di $W$ è l'insieme
$$
W^\perp = \{ v \in \mathbb{R}^n : \langle v, w \rangle = 0 \ \text{ per ogni } w \in W \} .
$$
È un sottospazio di $\mathbb{R}^n$, per la bilinearità del prodotto scalare. Se $W = \langle w_1, \dots, w_k \rangle$, un vettore è ortogonale a tutto $W$ se e solo se è ortogonale ai generatori, quindi $W^\perp$ è l'insieme delle soluzioni del sistema omogeneo $\langle v, w_1 \rangle = 0, \dots, \langle v, w_k \rangle = 0$, che ha per matrice dei coefficienti la matrice con i generatori in riga. Per $W = \langle (1, 1, 0) \rangle$ in $\mathbb{R}^3$ si ha $W^\perp = \{ x + y = 0 \} = \langle (1, -1, 0), (0, 0, 1) \rangle$.
:::

::::teorema{#dimensione-complemento titolo="Dimensione del complemento ortogonale"}
Sia $W \subseteq \mathbb{R}^n$ un sottospazio. Allora

- $\dim W^\perp = n - \dim W$;
- $\mathbb{R}^n = W \oplus W^\perp$, cioè ogni $v \in \mathbb{R}^n$ si scrive in modo unico come $v = w + w'$ con $w \in W$ e $w' \in W^\perp$, e la componente in $W$ è $w = P_W(v)$;
- $(W^\perp)^\perp = W$.

La seconda proprietà dà due modi equivalenti di calcolare una proiezione: $P_W(v)$ direttamente, oppure $P_W(v) = v - P_{W^\perp}(v)$, conveniente quando $W^\perp$ ha dimensione minore. Per un piano di $\mathbb{R}^3$, per esempio, $W^\perp$ è la retta generata da un vettore normale $n$, e $P_W(v) = v - \operatorname{pr}_n(v)$.

:::dimostrazione
Sia $\{ w_1, \dots, w_k \}$ una base di $W$ e sia $A$ la matrice $k \times n$ che ha in riga i vettori $w_1, \dots, w_k$. Poiché $W^\perp$ è l'insieme delle soluzioni del sistema omogeneo $Ax = 0$ e $\operatorname{rk} A = k$, il numero di parametri liberi è $n - k$, quindi $\dim W^\perp = n - \dim W$. Per ogni $v$, il teorema della proiezione ortogonale dà $v = P_W(v) + \left( v - P_W(v) \right)$ con il primo addendo in $W$ e il secondo in $W^\perp$; inoltre $W \cap W^\perp = \{ 0 \}$, perché un vettore ortogonale a sé stesso è nullo. Perciò la somma è diretta. Infine ogni vettore di $W$ è ortogonale a tutti i vettori di $W^\perp$, quindi $W \subseteq (W^\perp)^\perp$; per la prima proprietà applicata due volte $\dim (W^\perp)^\perp = n - (n - k) = k = \dim W$, e un sottospazio contenuto in un altro della stessa dimensione coincide con esso.
:::
::::

:::richiamo{titolo="Soluzioni di un sistema omogeneo"}
Se $A \in M_{k,n}(\mathbb{R})$, l'insieme delle soluzioni del sistema $Ax = 0$ è un sottospazio di $\mathbb{R}^n$ di dimensione $n - \operatorname{rk} A$.
:::

:::osservazione{#complemento-forma-cartesiana titolo="Complemento di un sottospazio in forma cartesiana"}
Se $W$ è assegnato in forma cartesiana, cioè come insieme delle soluzioni di $Ax = 0$, ogni equazione dice che $x$ è ortogonale a una riga di $A$. Perciò $W$ è il complemento ortogonale del sottospazio generato dalle righe di $A$ e, per la proprietà $(W^\perp)^\perp = W$,
$$
W^\perp = \langle \text{righe di } A \rangle ,
$$
di dimensione $\operatorname{rk} A$. I due passaggi da forma parametrica a cartesiana e viceversa diventano così un calcolo di complementi: il piano $W = \{ x + y - z = 0 \}$ di $\mathbb{R}^3$ ha complemento $W^\perp = \langle (1, 1, -1) \rangle$, e il vettore $(1, 1, -1)$ è il vettore normale al piano.

::grafico{f="x/2;-2*x" vettori="0,0,2,1,w;0,0,-1,2,n" etichette="2.3,1.55,W;-0.7,2.7,W⊥" xmin=-3 xmax=3 ymin=-3 ymax=3 uguale=1 titolo="In $\mathbb{R}^2$ il complemento ortogonale della retta $W = \langle (2, 1) \rangle$ è la retta $W^\perp = \langle (-1, 2) \rangle$, di equazione $2x + y = 0$"}

:::

## Matrici ortogonali

:::definizione{#matrice-ortogonale titolo="Matrice ortogonale"}
Una matrice $Q \in M_n(\mathbb{R})$ si dice **ortogonale** se
$$
Q^T Q = I_n ,
$$
cioè se $Q$ è invertibile con $Q^{-1} = Q^T$. L'elemento di posto $(i, j)$ di $Q^T Q$ è il prodotto scalare fra la colonna $i$ e la colonna $j$ di $Q$, quindi la condizione equivale a dire che le **colonne** di $Q$ formano una base ortonormale di $\mathbb{R}^n$; poiché anche $Q Q^T = I_n$, lo stesso vale per le righe. Il controllo di ortogonalità richiede quindi soltanto prodotti scalari fra colonne, e l'inversa si ottiene trasponendo.
:::

::::teorema{#proprieta-matrici-ortogonali titolo="Proprietà delle matrici ortogonali"}
Sia $Q \in M_n(\mathbb{R})$ ortogonale. Allora:

- $\langle Qu, Qv \rangle = \langle u, v \rangle$ per ogni $u, v \in \mathbb{R}^n$, quindi $Q$ conserva norme, distanze e angoli;
- $\det Q = 1$ oppure $\det Q = -1$;
- ogni autovalore reale di $Q$ è $1$ oppure $-1$;
- il prodotto di due matrici ortogonali e l'inversa di una matrice ortogonale sono ortogonali.

Le matrici ortogonali sono le matrici dei cambiamenti di base fra basi ortonormali e descrivono le trasformazioni rigide che fissano l'origine: rotazioni, se $\det Q = 1$, e composizioni di rotazioni con una simmetria, se $\det Q = -1$.

:::dimostrazione
Per la prima proprietà, $\langle Qu, Qv \rangle = (Qu)^T (Qv) = u^T Q^T Q\, v = u^T v = \langle u, v \rangle$. Per la seconda, dal **teorema di Binet** e da $\det Q^T = \det Q$ segue $(\det Q)^2 = \det(Q^T Q) = \det I_n = 1$. Per la terza, se $Qv = \lambda v$ con $v \neq 0$, la prima proprietà dà $\|v\| = \|Qv\| = |\lambda|\, \|v\|$, quindi $|\lambda| = 1$. Per la quarta, se $Q$ e $R$ sono ortogonali, allora $(QR)^T (QR) = R^T Q^T Q R = R^T R = I_n$, e $(Q^{-1})^T Q^{-1} = Q Q^T = I_n$.
:::
::::

:::richiamo{titolo="Teorema di Binet"}
Se $A, B \in M_n(\mathbb{R})$, allora $\det(AB) = \det A \cdot \det B$.
:::

:::esempio{titolo="Rotazioni e simmetrie del piano"}
Le matrici ortogonali di ordine $2$ sono, al variare di $\theta \in [0, 2\pi)$,
$$
R_\theta =
\begin{pmatrix}
\cos\theta & -\sin\theta \\
\sin\theta & \cos\theta
\end{pmatrix},
\qquad
S_\theta =
\begin{pmatrix}
\cos\theta & \sin\theta \\
\sin\theta & -\cos\theta
\end{pmatrix} .
$$
La matrice $R_\theta$ ha determinante $1$ ed è la **rotazione** di angolo $\theta$ attorno all'origine; la matrice $S_\theta$ ha determinante $-1$ ed è la **simmetria** rispetto alla retta per l'origine che forma l'angolo $\dfrac{\theta}{2}$ con l'asse $x$. Le colonne di $R_\theta$ sono le immagini dei vettori $e_1$ e $e_2$ della base canonica, e restano due versori ortogonali.

::grafico{curve="cos(t),sin(t),0,6.29" vettori="0,0,1,0,e₁;0,0,0,1,e₂;0,0,0.866,0.5,Re₁;0,0,-0.5,0.866,Re₂" xmin=-1.4 xmax=1.5 ymin=-1.3 ymax=1.4 uguale=1 titolo="La rotazione $R_\theta$ con $\theta = \dfrac{\pi}{6}$ porta la base canonica nella base ortonormale formata dalle colonne $\left( \dfrac{\sqrt{3}}{2}, \dfrac{1}{2} \right)$ e $\left( -\dfrac{1}{2}, \dfrac{\sqrt{3}}{2} \right)$"}

:::

## Il teorema spettrale

::::teorema{#matrici-simmetriche titolo="Autovalori e autovettori di una matrice simmetrica"}
Sia $A \in M_n(\mathbb{R})$ simmetrica, cioè $A^T = A$. Allora:

- $\langle Au, v \rangle = \langle u, Av \rangle$ per ogni $u, v \in \mathbb{R}^n$;
- tutte le radici del polinomio caratteristico $p_A(\lambda)$ sono **reali**;
- autovettori relativi ad autovalori distinti sono **ortogonali**.

La seconda proprietà assicura che il polinomio caratteristico di una matrice simmetrica si scompone sempre in fattori di primo grado reali; la terza dice che gli autospazi sono a due a due ortogonali.

:::dimostrazione
Per la prima proprietà, $\langle Au, v \rangle = (Au)^T v = u^T A^T v = u^T A v = \langle u, Av \rangle$. Per la seconda, sia $\lambda \in \mathbb{C}$ una radice di $p_A$ e sia $z \in \mathbb{C}^n$ non nullo con $Az = \lambda z$. Coniugando, poiché $A$ è reale, si ha $A \bar{z} = \bar{\lambda} \bar{z}$. Calcolando il numero $\bar{z}^T A z$ in due modi si ottiene
$$
\lambda\, \bar{z}^T z = \bar{z}^T A z = (A^T \bar{z})^T z = (A \bar{z})^T z = \bar{\lambda}\, \bar{z}^T z ,
$$
e poiché $\bar{z}^T z = |z_1|^2 + \dots + |z_n|^2 > 0$, risulta $\lambda = \bar{\lambda}$, cioè $\lambda \in \mathbb{R}$. Per la terza, siano $Au = \lambda u$ e $Av = \mu v$ con $\lambda \neq \mu$. Per la prima proprietà
$$
\lambda \langle u, v \rangle = \langle Au, v \rangle = \langle u, Av \rangle = \mu \langle u, v \rangle ,
$$
quindi $(\lambda - \mu) \langle u, v \rangle = 0$ e, poiché $\lambda \neq \mu$, si ha $\langle u, v \rangle = 0$.
:::
::::

::::teorema{#teorema-spettrale titolo="Teorema spettrale reale"}
Sia $A \in M_n(\mathbb{R})$. Le seguenti condizioni sono equivalenti:

- $A$ è simmetrica;
- esiste una base ortonormale di $\mathbb{R}^n$ formata da autovettori di $A$;
- esiste una matrice ortogonale $P$ tale che $P^T A P = D$ sia diagonale.

In particolare **ogni matrice simmetrica reale è diagonalizzabile**, e la matrice diagonalizzante si può scegliere ortogonale, così che $P^{-1} = P^T$. Per una matrice simmetrica non serve quindi confrontare molteplicità algebriche e geometriche: la diagonalizzabilità è garantita in partenza, e il lavoro consiste nel costruire $P$.

:::dimostrazione
La seconda e la terza condizione sono equivalenti, perché le colonne di $P$ sono gli autovettori della base e una matrice è ortogonale se e solo se le sue colonne sono ortonormali. Se vale la terza, allora $A = P D P^T$ e $A^T = P D^T P^T = P D P^T = A$, quindi $A$ è simmetrica.

Resta da dimostrare che una matrice simmetrica soddisfa la terza condizione, e si procede per induzione su $n$; per $n = 1$ non c'è nulla da dimostrare. Sia $n \geq 2$. Per il teorema sulle matrici simmetriche $A$ ha un autovalore reale $\lambda_1$; sia $q_1$ un autovettore di norma $1$. Si completa $q_1$ a una base ortonormale $q_1, \dots, q_n$ di $\mathbb{R}^n$, per esempio con il procedimento di Gram-Schmidt, e sia $Q$ la matrice ortogonale con queste colonne. La matrice $B = Q^T A Q$ è simmetrica, e la sua prima colonna è $Q^T A q_1 = \lambda_1 Q^T q_1 = \lambda_1 e_1$; per simmetria anche la prima riga è $(\lambda_1, 0, \dots, 0)$, quindi
$$
Q^T A Q =
\begin{pmatrix}
\lambda_1 & 0 \\
0 & A_1
\end{pmatrix}
$$
con $A_1 \in M_{n-1}(\mathbb{R})$ simmetrica. Per l'ipotesi induttiva esiste $P_1$ ortogonale di ordine $n - 1$ con $P_1^T A_1 P_1 = D_1$ diagonale. La matrice $P = Q \begin{pmatrix} 1 & 0 \\ 0 & P_1 \end{pmatrix}$ è ortogonale, come prodotto di matrici ortogonali, e $P^T A P = \begin{pmatrix} \lambda_1 & 0 \\ 0 & D_1 \end{pmatrix}$ è diagonale.
:::
::::

:::osservazione{#autospazi-ortogonali titolo="Conseguenze sugli autospazi"}
Per una matrice simmetrica $A$ con autovalori distinti $\lambda_1, \dots, \lambda_r$, il teorema spettrale e la terza proprietà delle matrici simmetriche danno
$$
\mathbb{R}^n = V_{\lambda_1} \oplus \dots \oplus V_{\lambda_r},
\qquad
V_{\lambda_i} \perp V_{\lambda_j} \ \text{ per } i \neq j ,
$$
e $m_a(\lambda_i) = m_g(\lambda_i)$ per ogni $i$. Quando gli autovalori distinti sono due, l'uno è il complemento ortogonale dell'altro: $V_{\lambda_2} = V_{\lambda_1}^\perp$. Basta quindi calcolare l'autospazio più piccolo e ricavare l'altro come complemento ortogonale, senza un secondo sistema. Per la matrice $\begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$, con autovalori $4$ e $1$, risulta $V_4 = \langle (1, 1, 1) \rangle$ e quindi $V_1 = \{ x + y + z = 0 \}$.
:::

:::osservazione{#interpretazione-geometrica-spettrale titolo="Interpretazione geometrica"}
Una matrice simmetrica agisce su $\mathbb{R}^n$ come una dilatazione di fattore $\lambda_i$ lungo ciascuna delle direzioni, a due a due ortogonali, della base di autovettori. In $\mathbb{R}^2$, se $A$ è invertibile, cioè se nessun autovalore è nullo, la circonferenza unitaria viene trasformata in un'ellisse che ha gli assi lungo gli autovettori e i semiassi uguali ai valori assoluti degli autovalori. Per $A = \begin{pmatrix} 3 & 1 \\ 1 & 3 \end{pmatrix}$ gli autovalori sono $4$, con autovettore $(1, 1)$, e $2$, con autovettore $(1, -1)$.

::grafico{curve="cos(t),sin(t),0,6.29;3*cos(t)+sin(t),cos(t)+3*sin(t),0,6.29" vettori="0,0,2.828,2.828,Ae₁;0,0,1.414,-1.414,Ae₂" xmin=-3.8 xmax=3.8 ymin=-3.5 ymax=3.5 uguale=1 titolo="La matrice $A$ con righe $(3, 1)$ e $(1, 3)$ trasforma la circonferenza unitaria in un'ellisse con semiassi $4$ e $2$ lungo gli autovettori ortogonali $e_1 = \dfrac{1}{\sqrt{2}}\,(1, 1)$ e $e_2 = \dfrac{1}{\sqrt{2}}\,(1, -1)$"}

:::

## Diagonalizzazione ortogonale

:::osservazione{#metodo-diagonalizzazione-ortogonale titolo="Il metodo della diagonalizzazione ortogonale"}
Data $A \in M_n(\mathbb{R})$ simmetrica, la matrice ortogonale $P$ e la matrice diagonale $D$ con $P^T A P = D$ si costruiscono così.

- Si calcolano gli autovalori come radici di $p_A(\lambda) = \det(A - \lambda I)$, che per il teorema spettrale sono tutte reali.
- Per ogni autovalore si calcola una base dell'autospazio $V_\lambda$, risolvendo il sistema omogeneo $(A - \lambda I) x = 0$.
- Se $\dim V_\lambda \geq 2$, si rende ortogonale la base di $V_\lambda$ con il **procedimento di Gram-Schmidt**; autovettori di autospazi diversi sono già ortogonali.
- Si normalizzano tutti i vettori e li si dispone come colonne di $P$; nella diagonale di $D$ si scrivono gli autovalori nello stesso ordine delle colonne.

Poiché $P$ è ortogonale, la verifica $P^T A P = D$ non richiede il calcolo di un'inversa, e per il controllo basta verificare $A p = \lambda p$ su ogni colonna.
:::

:::esempio{titolo="Una matrice di ordine 2"}
Sia $A = \begin{pmatrix} 2 & 2 \\ 2 & 5 \end{pmatrix}$. Il polinomio caratteristico è $\lambda^2 - 7\lambda + 6 = (\lambda - 1)(\lambda - 6)$, quindi gli autovalori sono $1$ e $6$. Il sistema $(A - I)x = 0$ si riduce all'equazione $x + 2y = 0$ e dà $V_1 = \langle (2, -1) \rangle$; il sistema $(A - 6I)x = 0$ si riduce a $2x - y = 0$ e dà $V_6 = \langle (1, 2) \rangle$. I due autovettori sono ortogonali, come previsto, e dopo la normalizzazione
$$
P = \frac{1}{\sqrt{5}}
\begin{pmatrix}
2 & 1 \\
-1 & 2
\end{pmatrix},
\qquad
P^T A P =
\begin{pmatrix}
1 & 0 \\
0 & 6
\end{pmatrix} .
$$
:::

:::esempio{titolo="Una matrice di ordine 3 con autovalore doppio"}
Sia $A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$. Il polinomio caratteristico è $p_A(\lambda) = -(\lambda - 1)^2 (\lambda - 4)$. L'autospazio $V_4$ è generato da $(1, 1, 1)$, e $V_1$ è il piano $x + y + z = 0$, con base $(1, -1, 0)$, $(1, 0, -1)$. Questi due vettori *non* sono ortogonali, quindi si applica il procedimento di Gram-Schmidt dentro $V_1$:
$$
(1, 0, -1) - \frac{1}{2}\,(1, -1, 0) = \left( \frac{1}{2}, \frac{1}{2}, -1 \right) ,
$$
che si sostituisce con il multiplo $(1, 1, -2)$. Normalizzando si ottiene
$$
P =
\begin{pmatrix}
\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \\[10pt]
-\dfrac{1}{\sqrt{2}} & \dfrac{1}{\sqrt{6}} & \dfrac{1}{\sqrt{3}} \\[10pt]
0 & -\dfrac{2}{\sqrt{6}} & \dfrac{1}{\sqrt{3}}
\end{pmatrix},
\qquad
P^T A P =
\begin{pmatrix}
1 & 0 & 0 \\
0 & 1 & 0 \\
0 & 0 & 4
\end{pmatrix} .
$$
:::

:::attenzione
Una matrice con colonne ortogonali ma *non* normalizzate non è ortogonale. Nell'esempio di ordine $2$, la matrice $M = \begin{pmatrix} 2 & 1 \\ -1 & 2 \end{pmatrix}$ ha colonne ortogonali, ma $M^T M = 5 I_2$, quindi $M^T \neq M^{-1}$ e $M^T A M = \begin{pmatrix} 5 & 0 \\ 0 & 30 \end{pmatrix}$ non è la matrice degli autovalori. La normalizzazione è il passaggio che rende $P^T$ uguale a $P^{-1}$.
:::

:::osservazione{#decomposizione-spettrale titolo="Decomposizione spettrale e segno di una matrice simmetrica"}
Se $e_1, \dots, e_n$ sono le colonne di $P$, con $A e_i = \lambda_i e_i$, l'uguaglianza $A = P D P^T$ si scrive
$$
A = \lambda_1\, e_1 e_1^T + \dots + \lambda_n\, e_n e_n^T ,
$$
dove $e_i e_i^T$ è la matrice della proiezione ortogonale sulla retta $\langle e_i \rangle$. La formula permette di ricostruire una matrice simmetrica conoscendone autovalori e autovettori. Con il cambio di variabili $y = P^T x$ si ottiene inoltre
$$
x^T A x = \lambda_1 y_1^2 + \dots + \lambda_n y_n^2 ,
$$
quindi $x^T A x > 0$ per ogni $x \neq 0$ se e solo se tutti gli autovalori sono positivi. Su questo fatto si basano la classificazione dei punti critici con la matrice Hessiana e la riduzione a forma canonica, per la quale si rimanda all'argomento sulle coniche e quadriche.
:::
