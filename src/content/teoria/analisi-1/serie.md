---
titolo: Serie numeriche
sommario: Che cosa significa sommare infiniti termini, con quali criteri si stabilisce il carattere di una serie, e come si studia una serie di potenze.
---

## Richiamo sulle successioni

Due risultati sulle successioni che vengono usati in tutto il capitolo.

:::definizione{#successione titolo="Limite di una successione"}
Una successione è una funzione $a : \mathbb{N} \to \mathbb{R}$; il valore in $n$ si scrive $a_n$. Si scrive $\displaystyle\lim_{n \to +\infty} a_n = L$, con $L \in \mathbb{R}$, se per ogni $\varepsilon > 0$ esiste $N$ tale che $|a_n - L| < \varepsilon$ per ogni $n > N$; si scrive $\displaystyle\lim_{n \to +\infty} a_n = +\infty$ se per ogni $M > 0$ esiste $N$ tale che $a_n > M$ per ogni $n > N$, e analogamente per $-\infty$. Una successione con limite finito si dice convergente, una con limite infinito divergente, una senza limite indeterminata. Per i limiti di successione valgono i teoremi del capitolo sui limiti: unicità, permanenza del segno, confronto, algebra dei limiti, limiti notevoli e gerarchia degli infiniti.

- $a_n = \dfrac{1}{n}$ converge a $0$.
- $a_n = n^2$ diverge a $+\infty$.
- $a_n = (-1)^n$ è indeterminata, perché i valori oscillano tra $-1$ e $1$.
:::

:::teorema{#successioni-monotone titolo="Successioni monotone limitate"}
Una successione crescente e limitata superiormente converge, e il limite è l'estremo superiore dei suoi valori; una successione crescente e illimitata superiormente diverge a $+\infty$. Per le successioni decrescenti valgono gli enunciati simmetrici. Quindi una successione monotona ammette sempre limite, finito oppure infinito. La dimostrazione usa le proprietà dell'estremo superiore e si omette. Il teorema regge l'intera sezione sulle serie a termini non negativi, perché le loro somme parziali sono crescenti.
:::

## Serie, somme parziali e carattere

:::definizione{#serie titolo="Serie, convergenza, somma"}
Data una successione $(a_n)$, la serie di termine generale $a_n$ è la successione delle somme parziali
$$
s_N = \sum_{n=1}^{N} a_n = a_1 + a_2 + \cdots + a_N .
$$
In base al limite delle somme parziali, la serie $\displaystyle\sum_{n=1}^{\infty} a_n$

- converge, con somma $s \in \mathbb{R}$, se $s_N \to s$; in questo caso si scrive $\displaystyle\sum_{n=1}^{\infty} a_n = s$;
- diverge a $+\infty$ oppure a $-\infty$, se $s_N \to +\infty$ oppure $s_N \to -\infty$;
- è indeterminata, se $s_N$ non ammette limite.

Studiare il carattere di una serie significa stabilire in quale dei tre casi si trova. Per esempio $\displaystyle\sum_{n=1}^{\infty} (-1)^n$ ha somme parziali $-1, 0, -1, 0, \dots$, che non ammettono limite, quindi la serie è indeterminata.
:::

:::osservazione
Il carattere di una serie non dipende dai primi termini: se si modifica un numero finito di termini, da un certo indice in poi le somme parziali cambiano di una costante, quindi convergenza, divergenza e indeterminazione si conservano, mentre la somma in generale cambia. Per questo nei criteri le ipotesi sono richieste definitivamente, cioè da un certo indice in poi, e l'indice iniziale della serie si sceglie dove il termine generale è definito.
:::

## Serie di riferimento

Tre serie di cui si conoscono carattere e, nei primi due casi, la somma.

::::teorema{#serie-geometrica titolo="Serie geometrica"}
Per $q \in \mathbb{R}$, la serie $\displaystyle\sum_{n=0}^{\infty} q^n$

- converge se $|q| < 1$, con somma $\dfrac{1}{1 - q}$;
- diverge a $+\infty$ se $q \geq 1$;
- è indeterminata se $q \leq -1$.

Per $|q| < 1$ e indice iniziale qualunque vale $\displaystyle\sum_{n=n_0}^{\infty} q^n = \dfrac{q^{n_0}}{1 - q}$: la somma è il primo termine diviso $1 - q$. È una delle poche serie di cui si conosce la somma, e serve da termine di confronto nei criteri del rapporto e della radice.

:::dimostrazione
Per $q \neq 1$, dall'identità $(1 - q)(1 + q + \cdots + q^N) = 1 - q^{N+1}$ segue
$$
s_N = \sum_{n=0}^{N} q^n = \frac{1 - q^{N+1}}{1 - q} .
$$
Se $|q| < 1$, allora $q^{N+1} \to 0$, quindi $s_N \to \dfrac{1}{1 - q}$. Se $q > 1$, allora $q^{N+1} \to +\infty$, quindi $s_N = \dfrac{q^{N+1} - 1}{q - 1} \to +\infty$. Se $q = 1$, allora $s_N = N + 1 \to +\infty$. Se $q \leq -1$, la successione $q^{N+1}$ cambia segno a ogni passo senza tendere a $0$, quindi non ammette limite, e perciò nemmeno $s_N$ lo ammette: la serie è indeterminata.
:::
::::

:::esempio{titolo="Somma di una serie geometrica"}
$$
\sum_{n=1}^{\infty} \frac{1}{2^n} = \frac{\dfrac{1}{2}}{1 - \dfrac{1}{2}} = 1
$$
La ragione è $q = \dfrac{1}{2}$, con $|q| < 1$, e il primo termine è $\dfrac{1}{2}$, quindi la somma è il primo termine diviso $1 - q$.
:::

:::definizione{#serie-telescopica titolo="Serie telescopica"}
Una serie è telescopica se il termine generale si scrive $a_n = b_n - b_{n+1}$ per una successione $(b_n)$. In tal caso i termini intermedi si cancellano e
$$
s_N = \sum_{n=1}^{N} (b_n - b_{n+1}) = b_1 - b_{N+1} ,
$$
quindi la serie converge se e solo se $(b_n)$ converge, e la somma è $b_1 - \displaystyle\lim_{n \to +\infty} b_n$. È il secondo caso in cui la somma si calcola esattamente; la scrittura $a_n = b_n - b_{n+1}$ si ottiene in genere con la decomposizione in fratti semplici.
:::

:::esempio{titolo="Serie di Mengoli"}
$$
\sum_{n=1}^{\infty} \frac{1}{n(n+1)} = 1
$$
Poiché $\dfrac{1}{n(n+1)} = \dfrac{1}{n} - \dfrac{1}{n+1}$, la serie è telescopica con $b_n = \dfrac{1}{n}$, quindi $s_N = 1 - \dfrac{1}{N+1} \to 1$.
:::

::::teorema{#serie-armonica titolo="Serie armonica"}
La serie armonica
$$
\sum_{n=1}^{\infty} \frac{1}{n}
$$
diverge a $+\infty$, anche se il termine generale tende a $0$. È il termine di confronto per molte serie divergenti ed è il controesempio che mostra la non sufficienza della condizione necessaria.

:::dimostrazione
Si raggruppano i termini in blocchi: per ogni $k \geq 1$, il blocco dei termini di indice da $2^{k-1} + 1$ a $2^k$ contiene $2^{k-1}$ termini, ciascuno maggiore o uguale a $\dfrac{1}{2^k}$, quindi
$$
\frac{1}{2^{k-1} + 1} + \cdots + \frac{1}{2^k} \geq 2^{k-1} \cdot \frac{1}{2^k} = \frac{1}{2} .
$$
Sommando i primi $K$ blocchi si ottiene $s_{2^K} \geq 1 + \dfrac{K}{2}$, quindi la sottosuccessione $s_{2^K}$ tende a $+\infty$. Le somme parziali sono crescenti, perché i termini sono positivi, perciò anche $s_N \to +\infty$.
:::
::::

:::teorema{#serie-armonica-generalizzata titolo="Serie armonica generalizzata"}
Per $\alpha \in \mathbb{R}$, la serie $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^{\alpha}}$

- converge se $\alpha > 1$;
- diverge a $+\infty$ se $\alpha \leq 1$.

È la scala di riferimento del confronto asintotico: il carattere di molte serie si decide confrontando il termine generale con $\dfrac{1}{n^{\alpha}}$. La dimostrazione segue dal criterio dell'integrale con $f(x) = \dfrac{1}{x^{\alpha}}$ e si rimanda al capitolo sugli integrali impropri.
:::

## La condizione necessaria

::::teorema{#condizione-necessaria titolo="Condizione necessaria di convergenza"}
Se $\displaystyle\sum_{n=1}^{\infty} a_n$ converge, allora $a_n \to 0$. In forma equivalente: se il termine generale non tende a $0$, la serie non converge. È il primo controllo da fare su ogni serie, perché esclude subito la convergenza quando il termine generale non è infinitesimo.
$$
\sum_{n=1}^{\infty} \frac{n}{n+1} \quad\text{non converge, perché } \frac{n}{n+1} \to 1 \neq 0 ;
$$
i termini sono positivi, quindi le somme parziali crescono e la serie diverge a $+\infty$.

:::dimostrazione
Sia $s$ la somma della serie. Poiché $a_N = s_N - s_{N-1}$ e le due successioni $s_N$ e $s_{N-1}$ tendono entrambe a $s$, per l'algebra dei limiti $a_N \to s - s = 0$.
:::
::::

:::attenzione
La condizione è necessaria e non sufficiente: da $a_n \to 0$ non segue la convergenza. La serie armonica $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ ha termine generale infinitesimo e diverge a $+\infty$.
:::

## Serie a termini non negativi

:::teorema{#termini-non-negativi titolo="Carattere delle serie a termini non negativi"}
Se $a_n \geq 0$ definitivamente, la serie converge oppure diverge a $+\infty$: il caso indeterminato non si presenta. Infatti le somme parziali sono definitivamente crescenti, quindi per il teorema sulle successioni monotone ammettono limite, finito oppure $+\infty$; la serie converge se e solo se le somme parziali sono limitate. Su questo fatto si basano tutti i criteri di questa sezione.
:::

::::teorema{#criterio-del-confronto titolo="Criterio del confronto"}
Se $0 \leq a_n \leq b_n$ definitivamente, allora

- se $\displaystyle\sum_{n=1}^{\infty} b_n$ converge, anche $\displaystyle\sum_{n=1}^{\infty} a_n$ converge;
- se $\displaystyle\sum_{n=1}^{\infty} a_n$ diverge, anche $\displaystyle\sum_{n=1}^{\infty} b_n$ diverge.

Si usa confrontando la serie data con una serie geometrica o con un'armonica generalizzata, di carattere noto.

:::dimostrazione
Sia $0 \leq a_n \leq b_n$ per ogni $n$; il caso in cui la disuguaglianza vale solo definitivamente segue, perché il carattere non dipende dai primi termini. Dette $s_N$ e $t_N$ le somme parziali delle due serie, sommando le disuguaglianze termine a termine si ottiene $s_N \leq t_N$ per ogni $N$, ed entrambe le successioni sono crescenti. Se $\sum b_n$ converge, allora $t_N$ è limitata, quindi anche $s_N$ è limitata, e poiché è crescente converge. Se $\sum a_n$ diverge, allora $s_N \to +\infty$, quindi per il confronto tra limiti $t_N \to +\infty$.
:::
::::

:::esempio
$\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + n + 1}$ converge, perché $\dfrac{1}{n^2 + n + 1} \leq \dfrac{1}{n^2}$ per ogni $n \geq 1$ e $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$ converge (armonica generalizzata con $\alpha = 2$).
:::

::::teorema{#confronto-asintotico titolo="Criterio del confronto asintotico"}
Siano $a_n \geq 0$ e $b_n > 0$ definitivamente, con
$$
\lim_{n \to +\infty} \frac{a_n}{b_n} = \ell .
$$

- Se $\ell \in (0, +\infty)$, le due serie hanno lo stesso carattere; in particolare questo accade se $a_n \sim b_n$.
- Se $\ell = 0$ e $\sum b_n$ converge, allora $\sum a_n$ converge.
- Se $\ell = +\infty$ e $\sum b_n$ diverge, allora $\sum a_n$ diverge.

Il criterio porta i limiti notevoli dentro le serie: il termine generale si sostituisce con un termine asintotico più semplice, in genere della forma $\dfrac{1}{n^{\alpha}}$.

:::dimostrazione
Sia $\ell \in (0, +\infty)$. Per la definizione di limite con $\varepsilon = \dfrac{\ell}{2}$, definitivamente vale $\dfrac{\ell}{2} < \dfrac{a_n}{b_n} < \dfrac{3\ell}{2}$, cioè
$$
\frac{\ell}{2}\, b_n < a_n < \frac{3\ell}{2}\, b_n .
$$
Se $\sum b_n$ converge, converge anche $\sum \dfrac{3\ell}{2} b_n$, quindi per il criterio del confronto converge $\sum a_n$; se $\sum b_n$ diverge, diverge anche $\sum \dfrac{\ell}{2} b_n$, quindi per il criterio del confronto diverge $\sum a_n$. Se $\ell = 0$, definitivamente $a_n < b_n$ (definizione di limite con $\varepsilon = 1$) e si applica il confronto; se $\ell = +\infty$, definitivamente $a_n > b_n$ e si applica di nuovo il confronto.
:::
::::

:::richiamo{titolo="Criterio del confronto"}
Se $0 \leq a_n \leq b_n$ definitivamente: la convergenza di $\sum b_n$ implica quella di $\sum a_n$; la divergenza di $\sum a_n$ implica quella di $\sum b_n$.
:::

:::esempio{titolo="Limiti notevoli nel confronto asintotico"}
$\displaystyle\sum_{n=1}^{\infty} \sin \frac{1}{n}$ diverge: poiché $\dfrac{1}{n} \to 0$, per il limite notevole del seno $\sin \dfrac{1}{n} \sim \dfrac{1}{n}$, e la serie armonica diverge. $\displaystyle\sum_{n=1}^{\infty} \left( 1 - \cos \frac{1}{n} \right)$ converge: $1 - \cos \dfrac{1}{n} \sim \dfrac{1}{2n^2}$ e $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2}$ converge.
:::

:::teorema{#criterio-del-rapporto titolo="Criterio del rapporto"}
Sia $a_n > 0$ definitivamente ed esista $\displaystyle\lim_{n \to +\infty} \frac{a_{n+1}}{a_n} = \ell$, finito oppure $+\infty$.

- Se $\ell < 1$, la serie converge.
- Se $\ell > 1$ (anche $\ell = +\infty$), la serie diverge a $+\infty$.
- Se $\ell = 1$, il criterio non dà informazioni: per $\sum \dfrac{1}{n}$ e per $\sum \dfrac{1}{n^2}$ il limite vale $1$, la prima diverge e la seconda converge.

È il criterio adatto ai termini con fattoriali e potenze $n$-esime, perché nel rapporto questi fattori si semplificano. Per esempio $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$ converge, perché $\dfrac{a_{n+1}}{a_n} = \dfrac{2}{n+1} \to 0 < 1$. La dimostrazione confronta la serie con una geometrica di ragione compresa tra $\ell$ e $1$ e si omette.
:::

:::teorema{#criterio-della-radice titolo="Criterio della radice"}
Sia $a_n \geq 0$ definitivamente ed esista $\displaystyle\lim_{n \to +\infty} \sqrt[n]{a_n} = \ell$, finito oppure $+\infty$.

- Se $\ell < 1$, la serie converge.
- Se $\ell > 1$ (anche $\ell = +\infty$), la serie diverge a $+\infty$.
- Se $\ell = 1$, il criterio non dà informazioni, con gli stessi esempi del rapporto: per $\sum \dfrac{1}{n}$ e $\sum \dfrac{1}{n^2}$ si ha $\sqrt[n]{a_n} \to 1$.

È il criterio adatto quando il termine generale è una potenza $n$-esima. Per esempio $\displaystyle\sum_{n=1}^{\infty} \left( \frac{n}{3n+1} \right)^{\! n}$ converge, perché $\sqrt[n]{a_n} = \dfrac{n}{3n+1} \to \dfrac{1}{3} < 1$. La dimostrazione confronta la serie con una geometrica, come per il rapporto, e si omette.
:::

:::teorema{#criterio-dell-integrale titolo="Criterio dell'integrale"}
Sia $f : [n_0, +\infty) \to \mathbb{R}$ non negativa e decrescente, con $a_n = f(n)$. Allora
$$
\sum_{n=n_0}^{\infty} a_n \ \text{converge} \iff \int_{n_0}^{+\infty} f(x)\, dx \ \text{converge} .
$$
Il criterio collega le serie agli integrali impropri, per i quali si rimanda al capitolo corrispondente; con $f(x) = \dfrac{1}{x^{\alpha}}$ fornisce la serie armonica generalizzata. Per esempio $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n \ln n}$ diverge, perché l'integrale di $\dfrac{1}{x \ln x}$ su $[2, +\infty)$ vale $\displaystyle\lim_{t \to +\infty} \bigl( \ln \ln t - \ln \ln 2 \bigr) = +\infty$.
:::

## Serie a segno variabile

:::teorema{#convergenza-assoluta titolo="Convergenza assoluta"}
La serie $\sum a_n$ converge assolutamente se converge la serie dei moduli $\sum |a_n|$. La convergenza assoluta implica la convergenza, e vale
$$
\left| \sum_{n=1}^{\infty} a_n \right| \leq \sum_{n=1}^{\infty} |a_n| .
$$
Una serie convergente ma non assolutamente convergente si dice semplicemente convergente. Il teorema riconduce una serie di segno qualunque a una serie a termini non negativi, alla quale si applicano i criteri della sezione precedente. La dimostrazione applica il criterio del confronto alle disuguaglianze $0 \leq a_n + |a_n| \leq 2|a_n|$ e si omette.
:::

:::teorema{#criterio-di-leibniz titolo="Criterio di Leibniz"}
Sia $(b_n)$ una successione con

$$
\begin{cases}
b_n \geq 0 \ \text{per ogni } n \\[4pt]
b_{n+1} \leq b_n \ \text{per ogni } n \\[4pt]
b_n \to 0
\end{cases}
$$

Allora la serie a segni alterni $\displaystyle\sum_{n=1}^{\infty} (-1)^n\, b_n$ converge e, detta $s$ la somma, per ogni $N$ vale la stima dell'errore
$$
|s - s_N| \leq b_{N+1} :
$$
l'errore commesso fermandosi alla somma parziale $s_N$ non supera il primo termine trascurato. Il criterio decide la convergenza delle serie a segni alterni quando la convergenza assoluta non c'è. Per esempio $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ converge, perché $\dfrac{1}{n}$ è decrescente e infinitesima; la convergenza è semplice, poiché la serie dei moduli è l'armonica, che diverge. La dimostrazione usa la monotonia delle somme parziali di indice pari e di indice dispari e si omette.
:::

## Operazioni sulle serie

:::teorema{#operazioni-sulle-serie titolo="Linearità della somma"}
Se $\sum a_n$ e $\sum b_n$ convergono con somme $s$ e $t$, allora per ogni $c \in \mathbb{R}$
$$
\sum_{n=1}^{\infty} (a_n + b_n) = s + t, \qquad
\sum_{n=1}^{\infty} c\, a_n = c\, s .
$$
Se $\sum a_n$ converge e $\sum b_n$ non converge, la serie $\sum (a_n + b_n)$ non converge; se nessuna delle due converge, sul carattere della somma nulla si può concludere, come mostrano $a_n = \dfrac{1}{n}$ e $b_n = -\dfrac{1}{n}$. La linearità permette di spezzare una serie in serie di somma nota:
$$
\sum_{n=1}^{\infty} \left( \frac{1}{2^n} + \frac{1}{3^n} \right)
= 1 + \frac{1}{2} = \frac{3}{2} ,
$$
poiché le due serie geometriche hanno somme $1$ e $\dfrac{1}{2}$.
:::

## Serie di potenze

:::definizione{#serie-di-potenze titolo="Serie di potenze"}
Una serie di potenze di centro $x_0$ e coefficienti $c_n$ è
$$
\sum_{n=0}^{\infty} c_n (x - x_0)^n ,
$$
con la convenzione $(x - x_0)^0 = 1$ anche per $x = x_0$. Per ogni $x$ fissato è una serie numerica; l'insieme di convergenza è l'insieme degli $x$ per cui la serie converge. In $x = x_0$ la serie converge sempre, con somma $c_0$. Le serie di potenze rappresentano funzioni come somme di infiniti monomi; le somme parziali sono polinomi.
:::

:::teorema{#raggio-di-convergenza titolo="Raggio di convergenza"}
Per ogni serie di potenze esiste $R \in [0, +\infty]$, detto raggio di convergenza, tale che la serie

- converge assolutamente per ogni $x$ con $|x - x_0| < R$;
- non converge per ogni $x$ con $|x - x_0| > R$.

Nei due estremi $x = x_0 - R$ e $x = x_0 + R$ il comportamento dipende dalla serie e si studia sostituendo il valore, con i criteri delle serie numeriche. L'insieme di convergenza è quindi un intervallo di centro $x_0$, con gli estremi inclusi oppure esclusi secondo lo studio. La dimostrazione usa il confronto con serie geometriche e si omette.
:::

:::teorema{#calcolo-del-raggio titolo="Rapporto e radice per il raggio"}
Se i coefficienti sono definitivamente non nulli ed esiste
$$
\lim_{n \to +\infty} \frac{|c_{n+1}|}{|c_n|} = \ell
\qquad\text{oppure}\qquad
\lim_{n \to +\infty} \sqrt[n]{|c_n|} = \ell ,
$$
finito oppure $+\infty$, allora $R = \dfrac{1}{\ell}$, con le convenzioni $R = +\infty$ per $\ell = 0$ e $R = 0$ per $\ell = +\infty$. L'enunciato segue applicando il criterio del rapporto o della radice alla serie dei moduli. Per esempio $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$ ha $\dfrac{|c_{n+1}|}{|c_n|} = \dfrac{1}{n+1} \to 0$, quindi $R = +\infty$: la serie converge per ogni $x \in \mathbb{R}$.
:::

:::esempio{titolo="Studio degli estremi"}
$\displaystyle\sum_{n=1}^{\infty} \frac{x^n}{n}$: poiché $\dfrac{|c_{n+1}|}{|c_n|} = \dfrac{n}{n+1} \to 1$, il raggio è $R = 1$ e la serie converge assolutamente in $(-1, 1)$. In $x = 1$ la serie è l'armonica, che diverge; in $x = -1$ la serie è $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$, che converge per il criterio di Leibniz. L'insieme di convergenza è $[-1, 1)$.
:::

:::teorema{#serie-di-taylor titolo="Serie di Taylor elementari"}
Per ogni $x \in \mathbb{R}$:
$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \qquad
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n\, x^{2n+1}}{(2n+1)!}, \qquad
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n\, x^{2n}}{(2n)!} .
$$
Per $|x| < 1$:
$$
\frac{1}{1 - x} = \sum_{n=0}^{\infty} x^n , \qquad
\ln(1 + x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}\, x^n}{n} \quad (\text{valida anche in } x = 1).
$$
Queste uguaglianze seguono dalla formula di Taylor con resto, trattata nel capitolo sulle derivate, e qui si assumono. Permettono di calcolare somme esatte di serie numeriche per sostituzione: con $x = 1$ nella prima si ottiene $\displaystyle\sum_{n=0}^{\infty} \frac{1}{n!} = e$; con $x = 1$ nell'ultima, $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n} = \ln 2$.
:::
