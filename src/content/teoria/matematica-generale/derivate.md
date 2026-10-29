---
titolo: Derivate, funzioni marginali ed elasticità
sommario: Che cos'è la derivata e come si calcola con le regole di derivazione, che cosa misurano il costo, il ricavo e il profitto marginali e l'elasticità della domanda, e che cosa dicono i teoremi di Fermat, Rolle e Lagrange e la regola di de l'Hôpital.
---

## Rapporto incrementale e derivata

:::definizione{#derivata titolo="Derivata in un punto"}
Sia $f$ definita in un intervallo aperto che contiene $x_0$. Il **rapporto incrementale** di $f$ tra $x_0$ e $x_0 + h$, con $h \neq 0$, è
$$
\frac{f(x_0 + h) - f(x_0)}{h} ,
$$
cioè la variazione di $f$ divisa per la variazione della variabile; nel grafico è la pendenza della retta secante per i punti di ascisse $x_0$ e $x_0 + h$. La funzione è **derivabile** in $x_0$ se esiste finito il limite
$$
f'(x_0) = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h} ,
$$
che si chiama **derivata** di $f$ in $x_0$ e si indica anche con $\dfrac{df}{dx}(x_0)$. Per $f(x) = x^2$ e $x_0 = 3$ il rapporto incrementale è $\dfrac{(3 + h)^2 - 9}{h} = \dfrac{6h + h^2}{h} = 6 + h$, che tende a $6$; quindi $f'(3) = 6$. La funzione $x \mapsto f'(x)$, definita dove $f$ è derivabile, si chiama **funzione derivata**.
:::

:::teorema{#retta-tangente titolo="Retta tangente"}
Se $f$ è derivabile in $x_0$, la **retta tangente** al grafico nel punto $(x_0, f(x_0))$ è
$$
y = f(x_0) + f'(x_0)\,(x - x_0) .
$$
Quando $h$ tende a $0$ il secondo punto della secante si avvicina al primo, e la secante tende alla retta per $(x_0, f(x_0))$ con pendenza $f'(x_0)$; la formula è quella della retta per un punto con pendenza assegnata. Per $f(x) = x^2$ in $x_0 = 3$ la tangente è $y = 9 + 6\,(x - 3) = 6x - 9$.

::grafico{f="x^2;6*x-9;5*x-6" punti="3,9,pieno;2,4,pieno" xmin=-1 xmax=5 ymin=-2 ymax=18 legenda="y = x^2;y = 6x - 9;y = 5x - 6" titolo="La secante per i punti di ascisse $2$ e $3$ ha pendenza $5$; avvicinando il secondo punto a $3$ la secante tende alla tangente $y = 6x - 9$, di pendenza $f'(3) = 6$"}

:::

::::teorema{#derivabile-continua titolo="Derivabilità e continuità"}
Se $f$ è derivabile in $x_0$, allora $f$ è continua in $x_0$.

Il viceversa è falso: $f(x) = |x|$ è continua in $0$, ma il rapporto incrementale $\dfrac{|h|}{h}$ vale $1$ per $h > 0$ e $-1$ per $h < 0$, quindi non ha limite e la funzione non è derivabile in $0$. Nel grafico il punto $(0, 0)$ è un **punto angoloso**, in cui le pendenze da destra e da sinistra sono diverse.

:::dimostrazione
Si scrive la differenza $f(x_0 + h) - f(x_0)$ come prodotto del rapporto incrementale per $h$:
$$
f(x_0 + h) - f(x_0) = \frac{f(x_0 + h) - f(x_0)}{h} \cdot h \to f'(x_0) \cdot 0 = 0 ,
$$
perché il primo fattore tende al numero finito $f'(x_0)$ e il secondo a $0$. Quindi $f(x_0 + h) \to f(x_0)$, cioè $f$ è continua in $x_0$.
:::
::::

## Derivate delle funzioni elementari

:::teorema{#derivate-elementari titolo="Derivate delle funzioni elementari"}
Nei punti del loro dominio in cui sono derivabili valgono

| $f(x)$ | $f'(x)$ |
| --- | --- |
| $k$ (costante) | $0$ |
| $x^{a}$, con $a$ reale | $a\,x^{a-1}$ |
| $e^{x}$ | $e^{x}$ |
| $a^{x}$, con $a > 0$ | $a^{x} \ln a$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |

Le formule si ricavano dalla definizione con i limiti notevoli. Per l'esponenziale
$$
\frac{e^{x + h} - e^{x}}{h} = e^{x} \cdot \frac{e^{h} - 1}{h} \to e^{x} ,
$$
e per il logaritmo, con $x > 0$,
$$
\frac{\ln(x + h) - \ln x}{h} = \frac{1}{x} \cdot \frac{\ln\left( 1 + \dfrac{h}{x} \right)}{\dfrac{h}{x}} \to \frac{1}{x} .
$$
La formula delle potenze comprende le radici e i reciproci: $\left( \sqrt{x} \right)' = \left( x^{\frac{1}{2}} \right)' = \dfrac{1}{2\sqrt{x}}$ e $\left( \dfrac{1}{x} \right)' = \left( x^{-1} \right)' = -\dfrac{1}{x^2}$. La funzione $\sqrt{x}$ non è derivabile in $0$, dove la formula perde significato.
:::

## Regole di derivazione

::::teorema{#regole-di-derivazione titolo="Regole di derivazione"}
Siano $f$ e $g$ derivabili in $x$ e $k$ un numero reale. Allora

- $(k f)' = k f'$ e $(f + g)' = f' + g'$;
- **regola del prodotto**: $(f g)' = f' g + f g'$;
- **regola del quoziente**: $\left( \dfrac{f}{g} \right)' = \dfrac{f' g - f g'}{g^2}$, dove $g(x) \neq 0$;
- **regola della funzione composta**: se $f$ è derivabile in $g(x)$, allora $\big( f(g(x)) \big)' = f'(g(x)) \cdot g'(x)$.

La regola della composta dice che si deriva la funzione esterna, calcolata nella funzione interna, e si moltiplica per la derivata della funzione interna. Per esempio
$$
\left( x^2 e^{x} \right)' = 2x\,e^{x} + x^2 e^{x},
\qquad
\left( \frac{x}{x + 1} \right)' = \frac{(x + 1) - x}{(x + 1)^2} = \frac{1}{(x + 1)^2},
\qquad
\left( e^{-x^2} \right)' = -2x\,e^{-x^2} .
$$

:::dimostrazione
Le prime due regole seguono dalle regole dei limiti. Per il prodotto, l'idea è aggiungere e togliere $f(x + h)\,g(x)$ al numeratore del rapporto incrementale:
$$
\begin{aligned}
\frac{f(x + h)\,g(x + h) - f(x)\,g(x)}{h}
&= f(x + h)\,\frac{g(x + h) - g(x)}{h} + g(x)\,\frac{f(x + h) - f(x)}{h} \\[6pt]
&\to f(x)\,g'(x) + g(x)\,f'(x) ,
\end{aligned}
$$
dove $f(x + h) \to f(x)$ perché $f$, essendo derivabile, è continua. La regola del quoziente segue applicando quella del prodotto a $f \cdot \dfrac{1}{g}$, con $\left( \dfrac{1}{g} \right)' = -\dfrac{g'}{g^2}$ per la regola della composta. Per la regola della composta si rimanda all'argomento sul calcolo differenziale di Analisi 1.
:::
::::

:::definizione{#derivate-successive titolo="Derivate successive"}
Se la funzione derivata $f'$ è a sua volta derivabile, la sua derivata si chiama **derivata seconda** e si indica con $f''$; allo stesso modo si definiscono la derivata terza $f'''$ e le successive. La derivata seconda misura come cambia la pendenza: per $f(x) = x^3$ si ha $f'(x) = 3x^2$ e $f''(x) = 6x$. Il segno della derivata seconda determina la concavità del grafico, come si vede nell'argomento sullo studio di funzione e l'ottimizzazione.
:::

## Funzioni marginali

:::definizione{#funzioni-marginali titolo="Costo, ricavo e profitto marginali"}
Siano $C(q)$, $R(q)$ e $\pi(q) = R(q) - C(q)$ il costo, il ricavo e il profitto per la quantità $q$, derivabili. Le loro derivate si chiamano **costo marginale** $C'(q)$, **ricavo marginale** $R'(q)$ e **profitto marginale** $\pi'(q) = R'(q) - C'(q)$. Il costo marginale è il tasso a cui cresce il costo quando cresce la produzione, e per un aumento piccolo $\Delta q$ vale l'approssimazione
$$
C(q + \Delta q) - C(q) \approx C'(q)\,\Delta q ;
$$
con $\Delta q = 1$ il costo marginale è circa il costo di produrre un'unità in più. Per $C(q) = 1000 + 20q + 0{,}01\,q^2$ si ha $C'(q) = 20 + 0{,}02\,q$, quindi $C'(100) = 22$ euro, mentre il costo effettivo della centunesima unità è $C(101) - C(100) = 22{,}01$ euro. Con la domanda inversa $p = 100 - 0{,}5\,q$ il ricavo è $R(q) = 100q - 0{,}5\,q^2$ e il ricavo marginale è $R'(q) = 100 - q$: a $q = 60$ un'unità in più porta circa $40$ euro, meno del prezzo $70$, perché per venderla si deve abbassare il prezzo di tutte le unità.
:::

:::osservazione{#marginale-e-medio titolo="Costo marginale e costo medio"}
Il costo medio $\bar{C}(q) = \dfrac{C(q)}{q}$ e il costo marginale sono grandezze diverse: il primo è il costo per unità di tutta la produzione, il secondo il costo dell'unità aggiuntiva. Per la regola del quoziente
$$
\bar{C}'(q) = \frac{C'(q)\,q - C(q)}{q^2} = \frac{1}{q} \left( C'(q) - \bar{C}(q) \right) ,
$$
quindi il costo medio cresce dove il costo marginale supera il costo medio, e decresce dove il costo marginale è minore. Un'unità che costa più della media alza la media, una che costa meno la abbassa; nel punto di costo medio minimo, se esiste, i due costi sono uguali. Il ragionamento si completa nell'argomento sullo studio di funzione e l'ottimizzazione.
:::

## Elasticità

:::definizione{#elasticita titolo="Elasticità"}
Sia $f$ derivabile con $f(x) \neq 0$. L'**elasticità** di $f$ nel punto $x$ è
$$
\varepsilon_f(x) = \frac{x}{f(x)}\,f'(x) .
$$
Per una variazione piccola $\Delta x$ della variabile, $\dfrac{\Delta f}{f} \approx \varepsilon_f(x)\,\dfrac{\Delta x}{x}$, perché $\Delta f \approx f'(x)\,\Delta x$: l'elasticità è circa la variazione percentuale di $f$ provocata da una variazione dell'$1\%$ della variabile, ed è un numero puro, che non dipende dalle unità di misura. Per una funzione di domanda $q(p)$ l'**elasticità della domanda** rispetto al prezzo, $\varepsilon(p) = \dfrac{p}{q(p)}\,q'(p)$, è di norma negativa, e si dice che la domanda è

- **rigida** (anelastica) se $|\varepsilon| < 1$: la quantità varia in percentuale meno del prezzo;
- **elastica** se $|\varepsilon| > 1$: la quantità varia in percentuale più del prezzo;
- **a elasticità unitaria** se $|\varepsilon| = 1$.

Per la domanda $q(p) = 200 - 4p$ si ha $\varepsilon(p) = \dfrac{-4p}{200 - 4p}$: al prezzo $20$ vale $-\dfrac{2}{3}$ e la domanda è rigida, al prezzo $30$ vale $-\dfrac{3}{2}$ e la domanda è elastica, al prezzo $25$ l'elasticità è unitaria.
:::

::::teorema{#elasticita-e-ricavo titolo="Elasticità e ricavo"}
Sia $q(p)$ una domanda derivabile e $R(p) = p\,q(p)$ il ricavo in funzione del prezzo. Allora
$$
R'(p) = q(p)\,\big( 1 + \varepsilon(p) \big) .
$$
Quindi, poiché $q > 0$, un aumento di prezzo fa crescere il ricavo se la domanda è rigida ($-1 < \varepsilon < 0$) e lo fa diminuire se è elastica ($\varepsilon < -1$); il ricavo è stazionario dove l'elasticità è unitaria. Per la domanda $q(p) = 200 - 4p$ il ricavo $R(p) = 200p - 4p^2$ è massimo in $p = 25$, proprio dove $\varepsilon = -1$.

:::dimostrazione
Per la regola del prodotto $R'(p) = q(p) + p\,q'(p)$. Raccogliendo $q(p)$ si ottiene
$$
R'(p) = q(p) \left( 1 + \frac{p}{q(p)}\,q'(p) \right) = q(p)\,\big( 1 + \varepsilon(p) \big) ,
$$
perché il rapporto $\dfrac{p}{q(p)}\,q'(p)$ è l'elasticità della domanda.
:::
::::

## Teoremi di Fermat, Rolle e Lagrange

::::teorema{#teorema-di-fermat titolo="Teorema di Fermat"}
Sia $f$ definita in un intervallo $I$ e sia $x_0$ un punto interno a $I$ in cui $f$ ha un massimo o un minimo locale, cioè $f(x_0) \geq f(x)$, oppure $f(x_0) \leq f(x)$, per ogni $x$ vicino a $x_0$. Se $f$ è derivabile in $x_0$, allora
$$
f'(x_0) = 0 .
$$
I punti in cui la derivata si annulla si chiamano **punti stazionari**: nei punti interni i massimi e i minimi di una funzione derivabile vanno cercati tra di essi. La condizione è *necessaria* ma *non sufficiente*: $f(x) = x^3$ ha $f'(0) = 0$, ma in $0$ non ha né massimo né minimo.

:::dimostrazione
Si suppone che $x_0$ sia un punto di massimo locale; il caso del minimo è analogo. Per $h$ piccolo si ha $f(x_0 + h) - f(x_0) \leq 0$. Per $h > 0$ il rapporto incrementale è quindi $\leq 0$, e il suo limite destro, che è $f'(x_0)$, è $\leq 0$. Per $h < 0$ il rapporto incrementale è $\geq 0$, perché numeratore e denominatore sono entrambi non positivi, e il suo limite sinistro, ancora $f'(x_0)$, è $\geq 0$. Le due disuguaglianze insieme danno $f'(x_0) = 0$.
:::
::::

:::teorema{#teorema-di-lagrange titolo="Teoremi di Rolle e di Lagrange"}
Sia $f$ continua su $[a, b]$ e derivabile in $(a, b)$.

- **Teorema di Lagrange**: esiste $c \in (a, b)$ tale che $f'(c) = \dfrac{f(b) - f(a)}{b - a}$.
- **Teorema di Rolle**: se inoltre $f(a) = f(b)$, esiste $c \in (a, b)$ tale che $f'(c) = 0$.

Il teorema di Lagrange dice che in almeno un punto la pendenza della tangente è uguale alla pendenza media sull'intervallo, cioè a quella della secante per gli estremi; il teorema di Rolle è il caso in cui la secante è orizzontale. Rolle segue da Weierstrass e Fermat: la funzione ha massimo e minimo su $[a, b]$, e se non sono entrambi agli estremi uno dei due è in un punto interno, dove la derivata si annulla; se sono entrambi agli estremi, la funzione è costante. Per $f(x) = x^3$ su $[0, 2]$ la pendenza media è $\dfrac{8 - 0}{2} = 4$, e $3c^2 = 4$ dà $c = \dfrac{2}{\sqrt{3}} \approx 1{,}15$.
:::

:::teorema{#monotonia-e-derivata titolo="Segno della derivata e monotonia"}
Sia $f$ derivabile in un intervallo $I$.

- Se $f'(x) > 0$ per ogni $x \in I$, allora $f$ è crescente su $I$.
- Se $f'(x) < 0$ per ogni $x \in I$, allora $f$ è decrescente su $I$.
- Se $f'(x) = 0$ per ogni $x \in I$, allora $f$ è costante su $I$.

Per due punti $x_1 < x_2$ di $I$, il teorema di Lagrange applicato a $[x_1, x_2]$ dà un punto $c$ con $f(x_2) - f(x_1) = f'(c)\,(x_2 - x_1)$; il segno della differenza è quindi il segno di $f'(c)$. È il criterio con cui nello studio di funzione si trovano gli intervalli di crescita e decrescita. L'ipotesi che $I$ sia un intervallo serve: $\dfrac{1}{x}$ ha derivata negativa sul suo dominio, ma non è decrescente su tutto il dominio, perché $\dfrac{1}{-1} < \dfrac{1}{1}$.
:::

## Regola di de l'Hôpital

:::teorema{#de-l-hopital titolo="Regola di de l'Hôpital"}
Siano $f$ e $g$ derivabili vicino a $x_0$, escluso al più $x_0$, con $g'(x) \neq 0$, e sia $\displaystyle\lim_{x \to x_0} \frac{f(x)}{g(x)}$ nella forma $\dfrac{0}{0}$ oppure $\dfrac{\infty}{\infty}$. Se esiste il limite del quoziente delle derivate, allora
$$
\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)} .
$$
La regola vale anche per $x_0 = \pm\infty$ e per i limiti destro e sinistro. Si deriva il numeratore e il denominatore *separatamente*, non il quoziente. Si può applicare più volte, controllando ogni volta che la forma sia ancora indeterminata:
$$
\lim_{x \to 0} \frac{e^{x} - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^{x} - 1}{2x} = \lim_{x \to 0} \frac{e^{x}}{2} = \frac{1}{2},
\qquad
\lim_{x \to +\infty} \frac{\ln x}{x} = \lim_{x \to +\infty} \frac{\dfrac{1}{x}}{1} = 0 .
$$
Il secondo esempio conferma il confronto tra infiniti visto nell'argomento sui limiti. La dimostrazione si basa su una variante del teorema di Lagrange e si rimanda all'argomento sul calcolo differenziale di Analisi 1.
:::

## Approssimazione lineare

:::teorema{#approssimazione-lineare titolo="Approssimazione lineare"}
Sia $f$ derivabile in $x_0$. Per $h$ piccolo
$$
f(x_0 + h) \approx f(x_0) + f'(x_0)\,h ,
$$
e l'errore commesso, diviso per $h$, tende a $0$ quando $h \to 0$. L'approssimazione sostituisce la funzione con la sua retta tangente vicino a $x_0$. Il termine $f'(x_0)\,h$ si chiama **differenziale** di $f$ in $x_0$. Per esempio $\sqrt{4{,}1} \approx \sqrt{4} + \dfrac{1}{2\sqrt{4}} \cdot 0{,}1 = 2{,}025$, contro il valore $2{,}0248\ldots$; per il costo $C(q) = 1000 + 20q + 0{,}01\,q^2$ si ha $C(102) \approx C(100) + C'(100) \cdot 2 = 3100 + 44 = 3144$ euro, contro il valore esatto $3144{,}04$. L'errore è il termine che l'approssimazione trascura: per $C$ vale $0{,}01 \cdot 2^2 = 0{,}04$.
:::
