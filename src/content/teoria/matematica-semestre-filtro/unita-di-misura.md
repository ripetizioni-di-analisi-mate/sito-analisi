---
titolo: "Unità di misura e conversioni"
sommario: "Conversioni di lunghezze, aree, volumi, velocità, densità e concentrazioni, con controllo delle dimensioni."
---

## Grandezze e unità

:::definizione{#grandezze titolo="Valore numerico e unità"}
Una misura associa un numero a un'unità. La scrittura $\ell=2\,\mathrm{m}$ descrive la stessa lunghezza di $\ell=200\,\mathrm{cm}$. La conversione cambia il valore numerico, mentre conserva la grandezza.

Per sommare due misure occorre esprimerle nella stessa unità. Per esempio $1\,\mathrm{m}+25\,\mathrm{cm}=1{,}25\,\mathrm{m}$.
:::

## Prefissi e lunghezze

:::definizione{#prefissi titolo="Multipli e sottomultipli"}
I prefissi rappresentano fattori esatti: kilo $10^3$, centi $10^{-2}$, milli $10^{-3}$, micro $10^{-6}$ e nano $10^{-9}$. Per esempio $7\,\mathrm{mm}=7\cdot10^{-3}\,\mathrm{m}$.

Un fattore di conversione è un rapporto uguale a uno. Il prodotto $250\,\mathrm{cm}\cdot\dfrac{1\,\mathrm{m}}{100\,\mathrm{cm}}=2{,}5\,\mathrm{m}$ mostra quali unità si semplificano.
:::

## Aree e volumi

:::osservazione{#aree-volumi titolo="Esponente del fattore di conversione"}
Il fattore si eleva alla stessa potenza dell'unità:
$$
1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}.
$$
Un litro vale $10^{-3}\,\mathrm{m^3}$; un millilitro vale $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$. Perciò $200\,\mathrm{mL}=0{,}2\,\mathrm{L}=2\cdot10^{-4}\,\mathrm{m^3}$. Il volume servirà nel calcolo di densità, portata e concentrazione.
:::

## Velocità e densità

:::osservazione{#composte titolo="Unità al numeratore e al denominatore"}
Nelle grandezze composte si convertono separatamente numeratore e denominatore. Poiché un'ora vale $3600\,\mathrm{s}$,
$$
36\,\frac{\mathrm{km}}{\mathrm{h}}=36\cdot\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}=10\,\mathrm{m/s}.
$$
Per la densità vale $1\,\mathrm{g/cm^3}=10^3\,\mathrm{kg/m^3}$, poiché $\dfrac{10^{-3}}{10^{-6}}=10^3$. Si ottiene così una formula con unità coerenti prima della sostituzione numerica.
:::

## Concentrazione e diluizione

:::definizione{#concentrazione titolo="Quantità di soluto per volume di soluzione"}
La concentrazione massica è $c_m=\dfrac{m_{\mathrm{soluto}}}{V_{\mathrm{soluzione}}}$; una sua unità è $\mathrm{g/L}$. La concentrazione molare è $c=\dfrac{n}{V}$, dove $n$ è la quantità di sostanza in moli e $V$ è il volume della soluzione in litri.

In una diluizione senza perdita né reazione del soluto, $n=c_1V_1=c_2V_2$. Quindi una soluzione portata da $100\,\mathrm{mL}$ a $500\,\mathrm{mL}$ ha concentrazione finale pari a un quinto di quella iniziale. Il volume finale comprende anche quello iniziale.
:::

## Analisi dimensionale

:::osservazione{#dimensioni titolo="Coerenza di una formula"}
Indicando con $M$, $L$, $T$ le dimensioni di massa, lunghezza e tempo, si ha $[v]=LT^{-1}$ e $[a]=LT^{-2}$. I termini sommati e i due membri di un'uguaglianza devono avere le stesse dimensioni.

In $s=v_0t+\dfrac12at^2$ entrambi i termini hanno dimensione $L$. Una scrittura come $s=v_0+t$ somma invece una velocità e un tempo, quindi è dimensionalmente incoerente. Il controllo delle dimensioni individua alcuni errori; una formula dimensionalmente coerente richiede comunque una giustificazione fisica.
:::
