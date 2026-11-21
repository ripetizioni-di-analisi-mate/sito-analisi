---
titolo: Successioni numeriche
sommario: Che cosa significa che una successione ha limite, quali teoremi permettono di calcolarlo, come si confrontano gli infiniti e che cosa garantisce il teorema di Bolzano-Weierstrass.
---

## Successioni e limite

Una successione è un elenco ordinato e infinito di numeri reali. Il limite descrive il valore a cui i termini si avvicinano quando l'indice cresce.

:::definizione{#successione titolo="Successione"}
Una **successione** di numeri reali è una funzione $a : \mathbb{N} \to \mathbb{R}$. Il valore in $n$ si scrive $a_n$ e si chiama **termine** di indice $n$; la successione si indica con $(a_n)$. Una successione può essere definita anche solo per $n \geq n_0$, come $a_n = \dfrac{1}{n}$ per $n \geq 1$.

- $a_n = \dfrac{1}{n}$ ha termini $1, \dfrac{1}{2}, \dfrac{1}{3}, \dots$
- $a_n = (-1)^n$ ha termini $1, -1, 1, -1, \dots$ per $n \geq 0$.
- $a_n = n^2$ ha termini $0, 1, 4, 9, \dots$

Una proprietà vale **definitivamente** se esiste $N \in \mathbb{N}$ tale che la proprietà vale per ogni $n > N$. Per esempio $n^2 > 100$ vale definitivamente, perché vale per ogni $n > 10$. Il limite dipende *soltanto* da ciò che accade definitivamente: modificare un numero finito di termini non lo cambia.
:::

:::definizione{#limite-finito titolo="Limite finito"}
Si scrive $\displaystyle\lim_{n \to +\infty} a_n = L$, con $L \in \mathbb{R}$, se per ogni $\varepsilon > 0$ esiste $N \in \mathbb{N}$ tale che
$$
|a_n - L| < \varepsilon \qquad \text{per ogni } n > N .
$$
Il numero $\varepsilon$ è la distanza massima ammessa da $L$, mentre $N$ è l'indice oltre il quale *tutti* i termini rispettano quella distanza. In altre parole, comunque si scelga una striscia $(L - \varepsilon, L + \varepsilon)$, i termini della successione vi appartengono definitivamente. In genere $N$ dipende da $\varepsilon$: a una striscia più stretta corrisponde un indice $N$ più grande.

::grafico{punti="1,0.0000,pieno;2,1.5000,pieno;3,0.6667,pieno;4,1.2500,pieno;5,0.8000,pieno;6,1.1667,pieno;7,0.8571,pieno;8,1.1250,pieno;9,0.8889,pieno;10,1.1000,pieno;11,0.9091,pieno;12,1.0833,pieno;13,0.9231,pieno;14,1.0714,pieno;15,0.9333,pieno;16,1.0625,pieno" asintoti="y=1.2;y=0.8" xmin=-1 xmax=17 ymin=-0.3 ymax=1.8 nomi="n,a" titolo="$a_n = 1 + \dfrac{(-1)^n}{n}$ ha limite $1$: con $\varepsilon = 0{,}2$ i termini stanno tra le rette $y = 0{,}8$ e $y = 1{,}2$ per ogni $n > 5$"}

:::

:::esempio{titolo="Verifica con la definizione"}
Si verifica che $\displaystyle\lim_{n \to +\infty} \frac{2n + 1}{n} = 2$. Fissato $\varepsilon > 0$, si ha
$$
\left| \frac{2n + 1}{n} - 2 \right| = \frac{1}{n} < \varepsilon
\quad\Longleftrightarrow\quad n > \frac{1}{\varepsilon} .
$$
Quindi la disuguaglianza vale per ogni $n > N$, scegliendo come $N$ un numero naturale maggiore o uguale a $\dfrac{1}{\varepsilon}$. Con $\varepsilon = \dfrac{1}{100}$ basta $N = 100$.
:::

:::definizione{#limite-infinito titolo="Limite infinito"}
Si scrive $\displaystyle\lim_{n \to +\infty} a_n = +\infty$ se per ogni $M > 0$ esiste $N \in \mathbb{N}$ tale che $a_n > M$ per ogni $n > N$. Si scrive $\displaystyle\lim_{n \to +\infty} a_n = -\infty$ se per ogni $M > 0$ esiste $N$ tale che $a_n < -M$ per ogni $n > N$. Il numero $M$ è una soglia arbitraria: i termini la superano definitivamente, comunque sia stata scelta.

Per $a_n = n^2$ e $M > 0$ si ha $n^2 > M$ per ogni $n > \sqrt{M}$, quindi $n^2 \to +\infty$.
:::

:::definizione{#carattere titolo="Successioni convergenti, divergenti, indeterminate"}
Una successione è **convergente** se ha limite finito, **divergente** se ha limite $+\infty$ oppure $-\infty$, **indeterminata** (o irregolare) se non ha limite. Una successione convergente a $0$ si dice **infinitesima**. Stabilire il **carattere** di una successione significa dire in quale dei tre casi ricade.

- $a_n = \dfrac{1}{n}$ è convergente, con limite $0$.
- $a_n = n^2$ è divergente a $+\infty$.
- $a_n = (-1)^n$ è indeterminata, perché i termini di indice pari valgono $1$ e quelli di indice dispari valgono $-1$, e quindi nessuna striscia di ampiezza minore di $2$ li contiene tutti definitivamente.
:::

## Unicità del limite e successioni limitate

I due teoremi di questa sezione sono le prime conseguenze della definizione. Il secondo fornisce una condizione *necessaria* per la convergenza.

::::teorema{#unicita-del-limite titolo="Unicità del limite"}
Se una successione ha limite, il limite è **unico**. Per questo si scrive $\lim a_n = L$ con il segno di uguale.

:::dimostrazione
Si ragiona per assurdo, scegliendo due strisce disgiunte attorno ai due limiti. Siano $L_1 \neq L_2$ due limiti finiti di $(a_n)$ e $\varepsilon = \dfrac{|L_1 - L_2|}{2} > 0$. Esistono $N_1$ e $N_2$ tali che $|a_n - L_1| < \varepsilon$ per $n > N_1$ e $|a_n - L_2| < \varepsilon$ per $n > N_2$. Per $n > \max\{N_1, N_2\}$ valgono entrambe le disuguaglianze, quindi per la disuguaglianza triangolare
$$
|L_1 - L_2| \leq |L_1 - a_n| + |a_n - L_2| < 2\varepsilon = |L_1 - L_2| ,
$$
che è **assurdo**. Se uno dei due limiti è infinito si ragiona allo stesso modo: i termini non possono essere definitivamente maggiori di $M$ e, nello stesso tempo, definitivamente compresi in una striscia limitata.
:::
::::

:::definizione{#successione-limitata titolo="Successione limitata"}
$(a_n)$ è **limitata superiormente** se esiste $M \in \mathbb{R}$ con $a_n \leq M$ per ogni $n$, **limitata inferiormente** se esiste $m$ con $a_n \geq m$ per ogni $n$. È **limitata** se lo è sia superiormente sia inferiormente, cioè se esiste $K > 0$ tale che $|a_n| \leq K$ per ogni $n$.

- $a_n = (-1)^n$ è limitata, con $|a_n| \leq 1$.
- $a_n = n^2$ è limitata inferiormente da $0$ e *non* è limitata superiormente.
- $a_n = \dfrac{n}{n + 1}$ è limitata, perché $0 \leq a_n < 1$.
:::

::::teorema{#convergente-limitata titolo="Ogni successione convergente è limitata"}
Se $(a_n)$ è convergente, allora è **limitata**. Di conseguenza una successione *non* limitata non può convergere: $a_n = n^2$ e $a_n = (-1)^n n$ non sono convergenti.

:::dimostrazione
Oltre un certo indice i termini stanno in una striscia attorno al limite; i termini precedenti sono in numero finito. Sia $a_n \to L$. Con $\varepsilon = 1$ esiste $N$ tale che $|a_n - L| < 1$ per ogni $n > N$, quindi per questi indici
$$
|a_n| \leq |a_n - L| + |L| < 1 + |L| .
$$
I termini $a_1, \dots, a_N$ sono in numero finito, perciò il numero
$$
K = \max\{ |a_1|, \dots, |a_N|, 1 + |L| \}
$$
esiste e soddisfa $|a_n| \leq K$ per **ogni** $n$.
:::
::::

:::attenzione
Il teorema non si inverte: una successione limitata può non avere limite. La successione $a_n = (-1)^n$ è limitata e indeterminata. La limitatezza è una condizione *necessaria* per la convergenza e non *sufficiente*.
:::

## Operazioni con i limiti e forme indeterminate

La definizione con $\varepsilon$ e $N$ è scomoda per calcolare. I teoremi che seguono riconducono il limite di una espressione ai limiti delle successioni che la compongono.

:::teorema{#algebra-dei-limiti titolo="Limiti di somma, prodotto e quoziente"}
Se $a_n \to a$ e $b_n \to b$, con $a, b \in \mathbb{R}$, allora
$$
a_n + b_n \to a + b, \qquad a_n\, b_n \to a\, b, \qquad \frac{a_n}{b_n} \to \frac{a}{b} \quad (b \neq 0) .
$$
Inoltre $|a_n| \to |a|$ e, se $a_n \geq 0$, $\sqrt{a_n} \to \sqrt{a}$. Le dimostrazioni seguono dalla definizione e dalla disuguaglianza triangolare e si omettono. Le regole si estendono ai limiti infiniti, con $a \in \mathbb{R}$:
$$
\begin{gathered}
a + (+\infty) = +\infty, \qquad (+\infty) + (+\infty) = +\infty, \qquad \frac{a}{\pm\infty} = 0, \\[6pt]
a \cdot (+\infty) = +\infty \ \text{ se } a > 0, \qquad a \cdot (+\infty) = -\infty \ \text{ se } a < 0 .
\end{gathered}
$$
Se $a_n \to 0$ e $a_n > 0$ definitivamente, allora $\dfrac{1}{a_n} \to +\infty$.
:::

:::definizione{#forme-indeterminate titolo="Forme indeterminate"}
Le regole precedenti non assegnano un valore alle combinazioni
$$
+\infty - \infty, \qquad 0 \cdot \infty, \qquad \frac{\infty}{\infty}, \qquad \frac{0}{0}, \qquad 1^{\infty}, \qquad 0^{0}, \qquad \infty^{0} .
$$
In una **forma indeterminata** il limite dipende dalle successioni coinvolte e si calcola dopo aver trasformato l'espressione. Per esempio $a_n = n$ e $b_n = n^2$ divergono entrambe, e i rapporti $\dfrac{a_n}{b_n}$, $\dfrac{b_n}{a_n}$, $\dfrac{2a_n}{a_n}$ tendono rispettivamente a $0$, a $+\infty$ e a $2$.
:::

:::esempio{titolo="Rapporto di polinomi in n"}
$$
\lim_{n \to +\infty} \frac{3n^2 - n}{2n^2 + 5}
= \lim_{n \to +\infty} \frac{n^2 \left( 3 - \dfrac{1}{n} \right)}{n^2 \left( 2 + \dfrac{5}{n^2} \right)}
= \frac{3 - 0}{2 + 0} = \frac{3}{2}
$$
Il rapporto è nella forma $\dfrac{\infty}{\infty}$. Si raccoglie al numeratore e al denominatore la **potenza di grado massimo**; i termini $\dfrac{1}{n}$ e $\dfrac{5}{n^2}$ sono infinitesimi, quindi il limite è il rapporto dei coefficienti di grado massimo.
:::

:::esempio{titolo="Differenza di infiniti con una radice"}
$$
\begin{aligned}
\sqrt{n^2 + n} - n
&= \frac{\left( \sqrt{n^2 + n} - n \right)\left( \sqrt{n^2 + n} + n \right)}{\sqrt{n^2 + n} + n} \\[6pt]
&= \frac{n}{\sqrt{n^2 + n} + n}
= \frac{1}{\sqrt{1 + \dfrac{1}{n}} + 1} \to \frac{1}{2}
\end{aligned}
$$
La differenza è nella forma $+\infty - \infty$. Moltiplicando e dividendo per la somma $\sqrt{n^2 + n} + n$ il numeratore diventa $(n^2 + n) - n^2 = n$; poi si divide numeratore e denominatore per $n$.
:::

## Teoremi di confronto

Questi teoremi ricavano informazioni su una successione confrontandola con altre di cui il limite è noto. Servono quando l'espressione di $a_n$ non si presta al calcolo diretto.

::::teorema{#permanenza-del-segno titolo="Permanenza del segno"}
Se $a_n \to L$ con $L > 0$ oppure $L = +\infty$, allora $a_n > 0$ **definitivamente**. Analogamente, se $L < 0$ oppure $L = -\infty$, allora $a_n < 0$ definitivamente.

:::dimostrazione
Si sceglie una striscia attorno a $L$ che non contiene lo $0$. Per $L$ finito e positivo si applica la definizione con $\varepsilon = \dfrac{L}{2} > 0$: esiste $N$ tale che $|a_n - L| < \dfrac{L}{2}$ per ogni $n > N$, quindi
$$
a_n > L - \frac{L}{2} = \frac{L}{2} > 0 \qquad \text{per ogni } n > N .
$$
Per $L = +\infty$ si applica la definizione con $M = 1$.
:::
::::

:::osservazione
Dal teorema segue che, se $a_n \geq 0$ definitivamente e $a_n \to L$, allora $L \geq 0$: se fosse $L < 0$, i termini sarebbero definitivamente negativi. Applicando questo fatto a $b_n - a_n$ si ottiene che da $a_n \leq b_n$ definitivamente, $a_n \to a$ e $b_n \to b$ segue $a \leq b$. La disuguaglianza stretta *non* si conserva al limite: $\dfrac{1}{n} > 0$ per ogni $n$ e il limite è $0$.
:::

::::teorema{#teorema-dei-carabinieri titolo="Teorema dei carabinieri"}
Siano $(a_n)$, $(b_n)$, $(c_n)$ tre successioni tali che
$$
\begin{cases}
a_n \leq b_n \leq c_n \quad \text{definitivamente} \\[4pt]
a_n \to L \ \text{ e } \ c_n \to L, \quad L \in \mathbb{R}
\end{cases}
$$
Allora $b_n \to L$. Il teorema calcola il limite di $b_n$ senza usarne l'espressione: bastano due successioni con lo *stesso* limite che la racchiudono.

:::dimostrazione
Le due successioni esterne stanno definitivamente nella striscia $(L - \varepsilon, L + \varepsilon)$, quindi vi sta anche quella compresa tra esse. Fissato $\varepsilon > 0$, esistono $N_1$ e $N_2$ tali che $a_n > L - \varepsilon$ per $n > N_1$ e $c_n < L + \varepsilon$ per $n > N_2$; sia $N_3$ un indice oltre il quale vale $a_n \leq b_n \leq c_n$. Per $n > \max\{N_1, N_2, N_3\}$ si ha
$$
L - \varepsilon < a_n \leq b_n \leq c_n < L + \varepsilon ,
$$
cioè $|b_n - L| < \varepsilon$.
:::
::::

:::teorema{#confronto-divergenti titolo="Confronto per le successioni divergenti"}
Se $a_n \leq b_n$ definitivamente e $a_n \to +\infty$, allora $b_n \to +\infty$. Se $a_n \leq b_n$ definitivamente e $b_n \to -\infty$, allora $a_n \to -\infty$. Con i limiti infiniti basta *una* disuguaglianza: fissato $M > 0$, da $a_n > M$ definitivamente segue $b_n \geq a_n > M$ definitivamente.

Per esempio $n + \sin n \geq n - 1$ per ogni $n$ e $n - 1 \to +\infty$, quindi $n + \sin n \to +\infty$.
:::

::::teorema{#limitata-per-infinitesima titolo="Prodotto di una successione limitata per una infinitesima"}
Se $(a_n)$ è limitata e $b_n \to 0$, allora $a_n\, b_n \to 0$. Il teorema si applica anche quando $(a_n)$ non ha limite, e quindi il teorema sul limite del prodotto non si può usare.

:::dimostrazione
Il fattore limitato si maggiora con una costante, che non impedisce al prodotto di diventare piccolo. Sia $K > 0$ tale che $|a_n| \leq K$ per ogni $n$. Fissato $\varepsilon > 0$, poiché $b_n \to 0$ esiste $N$ tale che $|b_n| < \dfrac{\varepsilon}{K}$ per ogni $n > N$. Quindi per $n > N$
$$
|a_n\, b_n| = |a_n| \cdot |b_n| < K \cdot \frac{\varepsilon}{K} = \varepsilon .
$$
:::
::::

:::esempio
$$
\lim_{n \to +\infty} \frac{\sin n}{n} = 0
$$
La successione $\sin n$ è limitata, perché $|\sin n| \leq 1$, e $\dfrac{1}{n} \to 0$. Per il teorema il prodotto $\sin n \cdot \dfrac{1}{n}$ è **infinitesimo**, anche se $\sin n$ non ha limite.

::grafico{f="1/x+0*sqrt(x-1);-1/x+0*sqrt(x-1)" punti="1,0.8415,pieno;2,0.4546,pieno;3,0.0470,pieno;4,-0.1892,pieno;5,-0.1918,pieno;6,-0.0466,pieno;7,0.0939,pieno;8,0.1237,pieno;9,0.0458,pieno;10,-0.0544,pieno;11,-0.0909,pieno;12,-0.0447,pieno;13,0.0323,pieno;14,0.0708,pieno;15,0.0434,pieno;16,-0.0180,pieno;17,-0.0566,pieno;18,-0.0417,pieno;19,0.0079,pieno;20,0.0456,pieno" xmin=-1 xmax=21 ymin=-1.1 ymax=1.1 nomi="n,a" legenda="a = \dfrac{1}{n};a = -\dfrac{1}{n}" titolo="I termini $\dfrac{\sin n}{n}$ sono compresi tra $-\dfrac{1}{n}$ e $\dfrac{1}{n}$, che tendono entrambe a $0$"}

:::

## Successioni monotone

Per una successione qualsiasi l'esistenza del limite non è garantita. Per le successioni monotone lo è sempre, e questo permette di dimostrare che un limite esiste anche quando non si sa calcolarlo.

:::definizione{#successione-monotona titolo="Successione monotona"}
$(a_n)$ è **crescente** se $a_n \leq a_{n+1}$ per ogni $n$, **strettamente crescente** se $a_n < a_{n+1}$ per ogni $n$. È **decrescente** se $a_n \geq a_{n+1}$ per ogni $n$, strettamente decrescente con la disuguaglianza stretta. Una successione crescente o decrescente si dice **monotona**. La monotonia si verifica studiando il segno di $a_{n+1} - a_n$ oppure, se i termini sono positivi, confrontando il rapporto $\dfrac{a_{n+1}}{a_n}$ con $1$.

Per $a_n = \dfrac{n}{n + 1}$ si ha
$$
a_{n+1} - a_n = \frac{n + 1}{n + 2} - \frac{n}{n + 1} = \frac{1}{(n + 1)(n + 2)} > 0 ,
$$
quindi la successione è strettamente crescente.
:::

::::teorema{#successioni-monotone titolo="Teorema sulle successioni monotone"}
Ogni successione monotona **ha limite**. Più precisamente, se $(a_n)$ è crescente,
$$
\lim_{n \to +\infty} a_n = \sup \{ a_n : n \in \mathbb{N} \} ,
$$
quindi $(a_n)$ converge se è limitata superiormente e diverge a $+\infty$ se non lo è. Se $(a_n)$ è decrescente, il limite è l'estremo inferiore dei termini. In particolare una successione monotona e limitata è **convergente**.

:::dimostrazione
I termini si avvicinano al loro estremo superiore e, per la monotonia, non se ne allontanano più. Sia $(a_n)$ crescente e limitata superiormente e sia $L = \sup \{ a_n \}$, che esiste finito per la **completezza** di $\mathbb{R}$. Fissato $\varepsilon > 0$, il numero $L - \varepsilon$ non è un maggiorante, quindi esiste un indice $N$ con $a_N > L - \varepsilon$. Per $n > N$ la monotonia dà $a_n \geq a_N$, e $L$ è un maggiorante, perciò
$$
L - \varepsilon < a_N \leq a_n \leq L < L + \varepsilon ,
$$
cioè $|a_n - L| < \varepsilon$. Se $(a_n)$ non è limitata superiormente, fissato $M > 0$ esiste $N$ con $a_N > M$, quindi $a_n \geq a_N > M$ per ogni $n > N$ e $a_n \to +\infty$. Il caso decrescente si ottiene applicando il risultato a $(-a_n)$.
:::
::::

:::richiamo{titolo="Caratterizzazione dell'estremo superiore"}
$L = \sup A$ se e solo se $L$ è un maggiorante di $A$ e per ogni $\varepsilon > 0$ esiste $x \in A$ con $x > L - \varepsilon$.
:::

:::esempio{titolo="Una successione definita per ricorrenza"}
Sia $a_1 = 1$ e $a_{n+1} = \sqrt{2 + a_n}$. Per induzione si verifica che $0 < a_n < 2$: vale per $a_1$ e, se $a_n < 2$, allora $a_{n+1} = \sqrt{2 + a_n} < \sqrt{4} = 2$. La successione è crescente, perché
$$
a_{n+1} > a_n \iff 2 + a_n > a_n^2 \iff (a_n - 2)(a_n + 1) < 0 ,
$$
e l'ultima disuguaglianza vale per $0 < a_n < 2$. Per il **teorema sulle successioni monotone** esiste il limite $L$, finito. Passando al limite nella relazione $a_{n+1}^2 = 2 + a_n$ si ottiene $L^2 = 2 + L$, cioè $L = 2$ oppure $L = -1$; poiché $a_n > 0$, il limite è $L = 2$.
:::

## Il numero e

Il teorema sulle successioni monotone permette di definire il numero $e$ come limite di una successione di cui non si conosce a priori il valore limite.

::::teorema{#numero-e titolo="Il numero di Nepero"}
La successione
$$
a_n = \left( 1 + \frac{1}{n} \right)^{n}, \qquad n \geq 1,
$$
è strettamente crescente e limitata, con $2 \leq a_n < 4$, quindi è **convergente**. Il suo limite si indica con $e$ e si chiama **numero di Nepero**:
$$
e = \lim_{n \to +\infty} \left( 1 + \frac{1}{n} \right)^{n} .
$$
Il numero $e$ è irrazionale e vale $2{,}71828\ldots$ È la base dei logaritmi naturali e della funzione esponenziale $e^x$.

::grafico{punti="1,2.0000,pieno;2,2.2500,pieno;3,2.3704,pieno;4,2.4414,pieno;5,2.4883,pieno;6,2.5216,pieno;7,2.5465,pieno;8,2.5658,pieno;9,2.5812,pieno;10,2.5937,pieno;11,2.6042,pieno;12,2.6130,pieno;13,2.6206,pieno;14,2.6272,pieno" asintoti="y=2.7183" xmin=-1 xmax=15 ymin=-0.3 ymax=3.3 nomi="n,a" titolo="I termini $\left(1 + \dfrac{1}{n}\right)^{n}$ crescono e restano al di sotto della retta $y = e$"}

:::dimostrazione
Si confrontano due termini consecutivi con la **disuguaglianza di Bernoulli**. Per $n \geq 2$
$$
\begin{aligned}
\frac{a_n}{a_{n-1}}
&= \left( \frac{n + 1}{n} \right)^{n} \left( \frac{n - 1}{n} \right)^{n-1}
= \left( \frac{n^2 - 1}{n^2} \right)^{n} \cdot \frac{n}{n - 1} \\[6pt]
&= \left( 1 - \frac{1}{n^2} \right)^{n} \cdot \frac{n}{n - 1}
\geq \left( 1 - \frac{1}{n} \right) \cdot \frac{n}{n - 1} = 1 .
\end{aligned}
$$
La disuguaglianza di Bernoulli con $x = -\dfrac{1}{n^2}$ è stretta per $n \geq 2$, quindi $a_n > a_{n-1}$ e la successione è strettamente crescente; in particolare $a_n \geq a_1 = 2$. Per la limitatezza si considera $b_n = \left( 1 + \dfrac{1}{n} \right)^{n+1}$, che soddisfa $a_n < b_n$. Per $n \geq 2$
$$
\begin{aligned}
\frac{b_{n-1}}{b_n}
&= \left( \frac{n}{n - 1} \right)^{n} \left( \frac{n}{n + 1} \right)^{n+1}
= \left( 1 + \frac{1}{n^2 - 1} \right)^{n} \cdot \frac{n}{n + 1} \\[6pt]
&\geq \left( 1 + \frac{n}{n^2 - 1} \right) \cdot \frac{n}{n + 1}
> \left( 1 + \frac{1}{n} \right) \cdot \frac{n}{n + 1} = 1 ,
\end{aligned}
$$
perché $\dfrac{n}{n^2 - 1} > \dfrac{1}{n}$. Quindi $(b_n)$ è decrescente e $a_n < b_n \leq b_1 = 4$. La successione $(a_n)$ è crescente e limitata superiormente, perciò converge per il **teorema sulle successioni monotone**.
:::
::::

:::richiamo{titolo="Disuguaglianza di Bernoulli"}
Per ogni $x \geq -1$ e ogni $n \in \mathbb{N}$ vale $(1 + x)^n \geq 1 + nx$; per $n \geq 2$ e $x \neq 0$ la disuguaglianza è stretta.
:::

:::teorema{#limiti-con-e titolo="Limiti che si riconducono al numero e"}
Se $a_n \to +\infty$ oppure $a_n \to -\infty$, allora
$$
\lim_{n \to +\infty} \left( 1 + \frac{1}{a_n} \right)^{a_n} = e .
$$
Di conseguenza, per ogni $x \in \mathbb{R}$,
$$
\lim_{n \to +\infty} \left( 1 + \frac{x}{n} \right)^{n} = e^{x} .
$$
La dimostrazione del primo limite si omette. Il secondo, per $x \neq 0$, segue dal primo con $a_n = \dfrac{n}{x}$, scrivendo $\left( 1 + \dfrac{x}{n} \right)^{n} = \left[ \left( 1 + \dfrac{1}{a_n} \right)^{a_n} \right]^{x}$. Questi limiti risolvono la forma indeterminata $1^{\infty}$.
:::

:::esempio
$$
\lim_{n \to +\infty} \left( \frac{n + 3}{n} \right)^{2n}
= \lim_{n \to +\infty} \left[ \left( 1 + \frac{3}{n} \right)^{n} \right]^{2}
= \left( e^{3} \right)^{2} = e^{6}
$$
La base tende a $1$ e l'esponente a $+\infty$, quindi si ha la forma $1^{\infty}$. Si scrive la base come $1 + \dfrac{3}{n}$ e si isola l'esponente $n$, in modo da riconoscere il limite $\left( 1 + \dfrac{x}{n} \right)^{n} \to e^{x}$ con $x = 3$.
:::

## Limiti notevoli

I limiti di questa sezione ricorrono nei calcoli e si usano come risultati acquisiti. Insieme ai limiti con il numero $e$ costituiscono i limiti notevoli delle successioni.

::::teorema{#successione-geometrica titolo="Successione geometrica"}
Per $q \in \mathbb{R}$ la successione $q^n$ ha il seguente carattere:
$$
\lim_{n \to +\infty} q^{n} =
\begin{cases}
+\infty & \text{se } q > 1 \\
1 & \text{se } q = 1 \\
0 & \text{se } -1 < q < 1
\end{cases}
$$
mentre per $q \leq -1$ il limite **non esiste**. Il numero $q$ si chiama **ragione**. Questo limite è alla base della serie geometrica, trattata nel capitolo sulle serie.

:::dimostrazione
Il caso $q > 1$ segue dalla disuguaglianza di Bernoulli e gli altri si riconducono a esso. Se $q > 1$ si scrive $q = 1 + h$ con $h > 0$, quindi $q^n = (1 + h)^n \geq 1 + nh$. Poiché $1 + nh \to +\infty$, per il **confronto** $q^n \to +\infty$. Se $0 < |q| < 1$, allora $\dfrac{1}{|q|} > 1$ e $\dfrac{1}{|q|^n} \to +\infty$, perciò $|q^n| = |q|^n \to 0$ e quindi $q^n \to 0$; per $q = 0$ la successione è nulla. Se $q = -1$ i termini valgono alternativamente $1$ e $-1$. Se $q < -1$ i termini di indice pari tendono a $+\infty$ e quelli di indice dispari a $-\infty$, quindi il limite non esiste.
:::
::::

::::teorema{#radice-n-esima titolo="Radici n-esime"}
$$
\lim_{n \to +\infty} \sqrt[n]{a} = 1 \quad (a > 0), \qquad \lim_{n \to +\infty} \sqrt[n]{n} = 1 .
$$
Questi limiti risolvono la forma $\infty^{0}$ e servono ogni volta che un esponente $\dfrac{1}{n}$ è applicato a una costante o a una potenza di $n$: per esempio $\sqrt[n]{3n^2} = \sqrt[n]{3} \cdot \left( \sqrt[n]{n} \right)^{2} \to 1$.

:::dimostrazione
In entrambi i casi si scrive la radice come $1 + h_n$ e si dimostra che $h_n \to 0$. Sia $a > 1$ e $\sqrt[n]{a} = 1 + h_n$, con $h_n > 0$. Per la disuguaglianza di Bernoulli $a = (1 + h_n)^n \geq 1 + n h_n$, quindi
$$
0 < h_n \leq \frac{a - 1}{n} ,
$$
e per il **teorema dei carabinieri** $h_n \to 0$. Se $0 < a < 1$ si applica il risultato a $\dfrac{1}{a} > 1$, dato che $\sqrt[n]{a} = \dfrac{1}{\sqrt[n]{\frac{1}{a}}}$; per $a = 1$ la successione è costante. Per il secondo limite sia $\sqrt[n]{n} = 1 + h_n$ con $h_n > 0$ e $n \geq 2$. Nello sviluppo del binomio di Newton tutti i termini sono positivi, quindi
$$
n = (1 + h_n)^n \geq \binom{n}{2} h_n^2 = \frac{n(n - 1)}{2}\, h_n^2 ,
\qquad\text{da cui}\qquad
0 < h_n \leq \sqrt{\frac{2}{n - 1}} .
$$
Per il teorema dei carabinieri $h_n \to 0$.
:::
::::

## Criterio del rapporto e gerarchia degli infiniti

Quando $a_n$ contiene fattoriali o potenze con esponente $n$, il rapporto tra due termini consecutivi ha un'espressione semplice. Il criterio seguente ricava il limite di $a_n$ dal limite di quel rapporto.

::::teorema{#criterio-del-rapporto titolo="Criterio del rapporto"}
Sia $(a_n)$ una successione a termini positivi e si supponga che esista
$$
\ell = \lim_{n \to +\infty} \frac{a_{n+1}}{a_n} , \qquad \ell \in [0, +\infty] .
$$
- Se $\ell < 1$, allora $a_n \to 0$.
- Se $\ell > 1$ oppure $\ell = +\infty$, allora $a_n \to +\infty$.

Per $\ell = 1$ il criterio non dà informazioni.

:::dimostrazione
Per $\ell < 1$ la successione è definitivamente maggiorata da una successione geometrica di ragione minore di $1$. Si sceglie $q$ con $\ell < q < 1$. Poiché il rapporto tende a $\ell$, esiste $N$ tale che $\dfrac{a_{n+1}}{a_n} < q$ per ogni $n \geq N$, cioè $a_{n+1} < q\, a_n$. Applicando la disuguaglianza $n - N$ volte si ottiene
$$
0 < a_n \leq a_N\, q^{\,n - N} \qquad \text{per ogni } n \geq N .
$$
Il secondo membro tende a $0$, perché $0 < q < 1$, quindi $a_n \to 0$ per il **teorema dei carabinieri**. Se $\ell > 1$ oppure $\ell = +\infty$, la successione $b_n = \dfrac{1}{a_n}$ ha rapporto $\dfrac{b_{n+1}}{b_n} = \dfrac{a_n}{a_{n+1}}$, che tende a un limite minore di $1$; perciò $b_n \to 0$ con $b_n > 0$, e quindi $a_n \to +\infty$.
:::
::::

:::attenzione
Con $\ell = 1$ si presentano tutti i casi. Le successioni $a_n = \dfrac{1}{n}$, $a_n = n$ e $a_n = \dfrac{n + 1}{n}$ hanno tutte rapporto $\dfrac{a_{n+1}}{a_n} \to 1$, e tendono rispettivamente a $0$, a $+\infty$ e a $1$.
:::

:::teorema{#gerarchia-degli-infiniti titolo="Infiniti di ordine crescente"}
Per $\alpha > 0$ e $a > 1$ valgono i limiti
$$
\lim_{n \to +\infty} \frac{\ln n}{n^{\alpha}} = 0, \qquad
\lim_{n \to +\infty} \frac{n^{\alpha}}{a^{n}} = 0, \qquad
\lim_{n \to +\infty} \frac{a^{n}}{n!} = 0, \qquad
\lim_{n \to +\infty} \frac{n!}{n^{n}} = 0 .
$$
Le successioni $\ln n$, $n^{\alpha}$, $a^{n}$, $n!$, $n^{n}$ divergono tutte a $+\infty$ e sono scritte in ordine di **infinito crescente**: il rapporto tra una di esse e una qualsiasi delle successive tende a $0$. Gli ultimi tre limiti seguono dal **criterio del rapporto**:
$$
\frac{(n + 1)^{\alpha}}{a^{n+1}} \cdot \frac{a^{n}}{n^{\alpha}} = \frac{1}{a} \left( 1 + \frac{1}{n} \right)^{\alpha} \to \frac{1}{a} < 1,
\qquad
\frac{a^{n+1}}{(n + 1)!} \cdot \frac{n!}{a^{n}} = \frac{a}{n + 1} \to 0 ,
$$
$$
\frac{(n + 1)!}{(n + 1)^{n+1}} \cdot \frac{n^{n}}{n!} = \left( \frac{n}{n + 1} \right)^{n} = \frac{1}{\left( 1 + \dfrac{1}{n} \right)^{n}} \to \frac{1}{e} < 1 .
$$
Il primo limite segue dal limite corrispondente per le funzioni, trattato nel capitolo sui limiti.
:::

:::esempio
$$
\lim_{n \to +\infty} \frac{2^{n} + n^{5}}{n! + 3^{n}}
= \lim_{n \to +\infty} \frac{2^{n} \left( 1 + \dfrac{n^{5}}{2^{n}} \right)}{n! \left( 1 + \dfrac{3^{n}}{n!} \right)}
= \lim_{n \to +\infty} \frac{2^{n}}{n!} \cdot \frac{1 + 0}{1 + 0} = 0
$$
Al numeratore e al denominatore si raccoglie l'infinito di ordine maggiore secondo la **gerarchia**: $2^n$ al numeratore, $n!$ al denominatore. I rapporti $\dfrac{n^5}{2^n}$ e $\dfrac{3^n}{n!}$ sono infinitesimi, e il rapporto $\dfrac{2^n}{n!}$ tende a $0$.
:::

## Successioni estratte e teorema di Bolzano-Weierstrass

Da una successione se ne ottengono altre scegliendo solo una parte dei termini. Il loro comportamento dà informazioni sulla successione di partenza, anche quando questa non ha limite.

:::definizione{#successione-estratta titolo="Successione estratta"}
Sia $(a_n)$ una successione e sia $n_1 < n_2 < n_3 < \dots$ una successione strettamente crescente di indici. La successione $(a_{n_k})$, con $k = 1, 2, 3, \dots$, si chiama **successione estratta** (o sottosuccessione) di $(a_n)$. Si ottiene da $(a_n)$ eliminando alcuni termini e conservando l'ordine dei rimanenti. Poiché gli indici sono strettamente crescenti, $n_k \geq k$ per ogni $k$.

- Con $n_k = 2k$ si ottiene l'estratta dei termini di indice pari, $(a_{2k})$.
- Con $n_k = 2k + 1$ si ottiene l'estratta dei termini di indice dispari, $(a_{2k+1})$.
:::

::::teorema{#limite-delle-estratte titolo="Limite delle successioni estratte"}
Se $a_n \to L$, con $L \in \mathbb{R}$ oppure $L = \pm\infty$, allora **ogni** successione estratta di $(a_n)$ tende a $L$. Il teorema si usa soprattutto per dimostrare che un limite *non* esiste: basta trovare due estratte con limiti diversi.

:::dimostrazione
Gli indici dell'estratta superano qualsiasi soglia, quindi i suoi termini rispettano la stessa disuguaglianza della successione. Sia $L$ finito e sia $\varepsilon > 0$. Esiste $N$ tale che $|a_n - L| < \varepsilon$ per ogni $n > N$. Per $k > N$ si ha $n_k \geq k > N$, quindi $|a_{n_k} - L| < \varepsilon$. Con $L = \pm\infty$ il ragionamento è lo stesso.
:::
::::

:::esempio{titolo="Due estratte con limiti diversi"}
Sia $a_n = (-1)^n \left( 1 + \dfrac{1}{n} \right)$. L'estratta di indice pari è $a_{2k} = 1 + \dfrac{1}{2k} \to 1$, quella di indice dispari è $a_{2k+1} = -\left( 1 + \dfrac{1}{2k + 1} \right) \to -1$. Se la successione avesse limite $L$, entrambe le estratte tenderebbero a $L$; poiché i due limiti sono diversi, il limite di $(a_n)$ **non esiste**.

::grafico{punti="1,-2.0000,pieno;2,1.5000,pieno;3,-1.3333,pieno;4,1.2500,pieno;5,-1.2000,pieno;6,1.1667,pieno;7,-1.1429,pieno;8,1.1250,pieno;9,-1.1111,pieno;10,1.1000,pieno;11,-1.0909,pieno;12,1.0833,pieno;13,-1.0769,pieno;14,1.0714,pieno" asintoti="y=1;y=-1" xmin=-1 xmax=15 ymin=-2.3 ymax=2.3 nomi="n,a" titolo="I termini di indice pari si avvicinano a $1$, quelli di indice dispari a $-1$"}

:::

::::teorema{#bolzano-weierstrass titolo="Teorema di Bolzano-Weierstrass"}
Ogni successione **limitata** ammette una successione estratta **convergente**. Il teorema assicura un limite per una estratta anche quando la successione è indeterminata: $(-1)^n$ non ha limite, e l'estratta di indice pari converge a $1$. Su di esso si basa la dimostrazione del teorema di Weierstrass, nel capitolo sui limiti e la continuità.

:::dimostrazione
Si dimezza ripetutamente un intervallo che contiene la successione, conservando ogni volta una metà in cui cadono infiniti termini. Sia $\alpha \leq a_n \leq \beta$ per ogni $n$ e sia $I_0 = [\alpha, \beta]$. Si divide $I_0$ in due metà con il punto medio. Almeno una delle due contiene $a_n$ per infiniti indici $n$, altrimenti gli indici sarebbero in numero finito; si chiama $I_1 = [\alpha_1, \beta_1]$ una metà con questa proprietà. Ripetendo il procedimento si ottengono intervalli $I_k = [\alpha_k, \beta_k]$, ciascuno contenuto nel precedente, tali che
$$
\begin{cases}
I_k \text{ contiene } a_n \text{ per infiniti indici } n \\[4pt]
\beta_k - \alpha_k = \dfrac{\beta - \alpha}{2^k}
\end{cases}
$$
La successione $(\alpha_k)$ è crescente e limitata, $(\beta_k)$ è decrescente e limitata, quindi per il **teorema sulle successioni monotone** convergono entrambe. Poiché $\beta_k - \alpha_k \to 0$, hanno lo stesso limite $L$. Si costruisce ora l'estratta: si sceglie $n_1$ con $a_{n_1} \in I_1$, poi $n_2 > n_1$ con $a_{n_2} \in I_2$, e così via; la scelta è sempre possibile perché ogni $I_k$ contiene termini con infiniti indici. Risulta
$$
\alpha_k \leq a_{n_k} \leq \beta_k \qquad \text{per ogni } k ,
$$
e per il **teorema dei carabinieri** $a_{n_k} \to L$.
:::
::::

:::attenzione
Senza l'ipotesi di limitatezza la conclusione può non valere: la successione $a_n = n$ non ha estratte convergenti, perché ogni sua estratta diverge a $+\infty$.
:::

## Limiti di successioni e limiti di funzioni

Il teorema seguente collega il limite di una funzione ai limiti delle successioni costruite con i suoi valori. Permette di trasferire alle successioni i limiti notevoli delle funzioni, e di dimostrare che il limite di una funzione non esiste.

::::teorema{#teorema-ponte titolo="Legame tra limiti di funzioni e limiti di successioni"}
Siano $f : A \to \mathbb{R}$, $x_0$ un punto di accumulazione per $A$ (anche $x_0 = \pm\infty$) e $L \in \mathbb{R}$ oppure $L = \pm\infty$. Allora
$$
\lim_{x \to x_0} f(x) = L
$$
se e solo se, per **ogni** successione $(x_n)$ di punti di $A$ diversi da $x_0$ con $x_n \to x_0$, si ha $f(x_n) \to L$. Il risultato è noto come **teorema ponte**.

:::dimostrazione
Si considera il caso di $x_0$ e $L$ finiti; gli altri sono analoghi. Sia $f(x) \to L$ e sia $(x_n)$ una successione di punti di $A$ diversi da $x_0$ con $x_n \to x_0$. Fissato $\varepsilon > 0$, esiste $\delta > 0$ tale che $|f(x) - L| < \varepsilon$ per ogni $x \in A$ con $0 < |x - x_0| < \delta$. Poiché $x_n \to x_0$ e $x_n \neq x_0$, esiste $N$ tale che $0 < |x_n - x_0| < \delta$ per $n > N$, quindi $|f(x_n) - L| < \varepsilon$ per $n > N$. Viceversa, si supponga per assurdo che $f(x)$ non tenda a $L$. Allora esiste $\varepsilon > 0$ tale che, per ogni $n \geq 1$, scegliendo $\delta = \dfrac{1}{n}$ si trova un punto $x_n \in A$ con
$$
0 < |x_n - x_0| < \frac{1}{n} \qquad \text{e} \qquad |f(x_n) - L| \geq \varepsilon .
$$
La successione $(x_n)$ tende a $x_0$ con $x_n \neq x_0$, mentre $f(x_n)$ non tende a $L$: questo contraddice l'ipotesi.
:::
::::

:::teorema{#limiti-notevoli-successioni titolo="Limiti notevoli trasferiti alle successioni"}
Sia $(\varepsilon_n)$ una successione infinitesima con $\varepsilon_n \neq 0$. Dai limiti notevoli delle funzioni, per il **teorema ponte**, seguono
$$
\begin{gathered}
\frac{\sin \varepsilon_n}{\varepsilon_n} \to 1, \qquad
\frac{1 - \cos \varepsilon_n}{\varepsilon_n^{2}} \to \frac{1}{2}, \qquad
\frac{e^{\varepsilon_n} - 1}{\varepsilon_n} \to 1, \\[8pt]
\frac{\ln(1 + \varepsilon_n)}{\varepsilon_n} \to 1, \qquad
\frac{(1 + \varepsilon_n)^{\alpha} - 1}{\varepsilon_n} \to \alpha \quad (\alpha \in \mathbb{R}) .
\end{gathered}
$$
I limiti notevoli delle funzioni sono trattati nel capitolo sui limiti. Con $\varepsilon_n = \dfrac{1}{n}$ il primo dà
$$
\lim_{n \to +\infty} n \sin \frac{1}{n} = \lim_{n \to +\infty} \frac{\sin \dfrac{1}{n}}{\dfrac{1}{n}} = 1 .
$$
:::

:::esempio{titolo="Un limite di funzione che non esiste"}
Il limite $\displaystyle\lim_{x \to +\infty} \sin x$ non esiste. Le successioni $x_n = n\pi$ e $y_n = \dfrac{\pi}{2} + 2n\pi$ tendono entrambe a $+\infty$, e
$$
\sin(x_n) = 0 \to 0, \qquad \sin(y_n) = 1 \to 1 .
$$
Se il limite esistesse e valesse $L$, per il **teorema ponte** entrambe le successioni dei valori tenderebbero a $L$; poiché i due limiti sono diversi, il limite **non esiste**.
:::
