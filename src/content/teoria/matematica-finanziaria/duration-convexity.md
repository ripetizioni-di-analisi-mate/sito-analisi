---
titolo: Duration, convexity e sensibilità dei prezzi
sommario: Durata media finanziaria, duration modificata, convexity e approssimazioni della variazione di prezzo.
---

## Durata media finanziaria

:::definizione{#duration-macaulay titolo="Duration di Macaulay"}
Per flussi positivi $C_k$ ai tempi $t_k$ e prezzo $P(y)=\sum_kC_k(1+y)^{-t_k}$, la **duration** è
$$D(y)=\frac{\sum_kt_kC_k(1+y)^{-t_k}}{P(y)}.$$
I pesi $w_k=\dfrac{C_k(1+y)^{-t_k}}{P(y)}$ sono positivi e sommano uno, quindi la duration è una media delle scadenze. È compresa tra la prima e l'ultima data. Si misura nella stessa unità di $t_k$. Due pagamenti attualizzati di $40$ e $60$ ai tempi $1$ e $3$ danno $D=\dfrac{40+180}{100}=2{,}2$ anni.
:::

## Duration modificata

::::teorema{#duration-modificata titolo="Sensibilità relativa al rendimento composto"}
Con rendimento annuo effettivo $y$ e tempi in anni, la duration modificata è
$$D_{\mathrm{mod}}(y)=\frac{D(y)}{1+y}=-\frac{P'(y)}{P(y)}.$$
Per una piccola variazione $\Delta y$, il primo ordine dà $\dfrac{\Delta P}{P}\approx-D_{\mathrm{mod}}\Delta y$. Una variazione di cento punti base corrisponde a $\Delta y=0{,}01$. Con $D_{\mathrm{mod}}=4$, il primo ordine di una crescita di cinquanta punti base è una diminuzione del prezzo del $2\%$.

:::dimostrazione
Derivando ogni termine della somma si ottiene $P'(y)=-\sum_kt_kC_k(1+y)^{-t_k-1}$. Dividendo per il prezzo e raccogliendo $\dfrac1{1+y}$ si ricava la formula.
:::
::::

## Convexity

:::definizione{#convexity titolo="Seconda derivata normalizzata"}
La convexity rispetto al rendimento annuo composto è
$$\mathcal C(y)=\frac{P''(y)}{P(y)}
=\frac{\sum_kt_k(t_k+1)C_k(1+y)^{-t_k-2}}{P(y)}.$$
Per flussi positivi e date future è positiva, quindi il prezzo è una funzione convessa del rendimento. Il fattore $t_k(t_k+1)$ appartiene alla convenzione composta. Con forza di interesse continua $\delta$, invece, le derivate di $e^{-\delta t_k}$ danno $t_k$ e $t_k^2$. Confondere queste convenzioni modifica i coefficienti dell'approssimazione.
:::

## Variazione lineare di prezzo

:::definizione{#sensibilita-prezzo titolo="Variazione in euro e valore di un punto base"}
La variazione approssimata in euro è $\Delta P\approx-PD_{\mathrm{mod}}\Delta y$. Il valore assoluto della variazione per un punto base è il DV01 al primo ordine:
$$\operatorname{DV01}\approx PD_{\mathrm{mod}}\,10^{-4}.$$
Con prezzo $1000$ e duration modificata $3{,}5$ si ottiene circa $0{,}35$ euro per punto base. Il segno della variazione è negativo per un aumento del rendimento e positivo per una diminuzione. L'approssimazione richiede che i flussi restino fissati durante lo spostamento del tasso.
:::

## Secondo ordine

:::teorema{#taylor-prezzo titolo="Approssimazione con duration e convexity"}
Lo sviluppo di Taylor al secondo ordine dà
$$\frac{P(y+\Delta y)-P(y)}{P(y)}
\approx-D_{\mathrm{mod}}(y)\Delta y+\frac12\mathcal C(y)(\Delta y)^2.$$
Per prezzi tre volte derivabili in un intorno del rendimento iniziale, il termine trascurato è dell'ordine di $(\Delta y)^3$. La correzione quadratica è positiva per flussi positivi. Con $D_{\mathrm{mod}}=4$, $\mathcal C=20$ e $\Delta y=0{,}01$, il primo ordine dà $-4\%$ e il secondo dà $-3{,}9\%$. Per verificare l'errore si ricalcola il prezzo esatto al nuovo tasso.
:::

## Portafogli

:::teorema{#duration-portafoglio titolo="Pesi di valore di mercato"}
Se tutti i titoli sono valutati rispetto allo stesso parametro $y$ e $P=\sum_jx_jP_j>0$, la duration modificata e la convexity del portafoglio sono
$$D_{\mathrm{mod},P}=\sum_j\omega_jD_{\mathrm{mod},j},\qquad
\mathcal C_P=\sum_j\omega_j\mathcal C_j,\qquad \omega_j=\frac{x_jP_j}P.$$
La relazione segue dall'additività delle prime e seconde derivate. Con quote di valore $40\%$ e $60\%$ e duration di Macaulay $2$ e $5$, riferite allo stesso rendimento, la duration di Macaulay del portafoglio è $3{,}8$. Se i rendimenti dei singoli titoli sono parametri diversi, occorre prima definire come varia insieme l'intera curva.
:::

## ZCB e rendite

:::teorema{#duration-zcb titolo="Duration dei flussi a scadenza unica"}
Uno ZCB con scadenza $T$ ha un solo pagamento, quindi
$$D=T,\quad D_{\mathrm{mod}}=\frac T{1+y},\quad
\mathcal C=\frac{T(T+1)}{(1+y)^2}.$$
Un titolo con cedole positive prima della scadenza ha invece duration strettamente minore della scadenza finale. Per una rendita perpetua posticipata al tasso $y>0$, $P=\dfrac Ry$ e la duration modificata è $\dfrac1y$; quindi quella di Macaulay è $\dfrac{1+y}y$. Queste identità danno controlli immediati sui risultati numerici.
:::

## Controlli mediante le derivate

:::definizione{#derivate-prezzo titolo="Confronto con differenze finite"}
Per verificare un calcolo si può approssimare la derivata con un incremento piccolo $h$:
$$P'(y)\approx\frac{P(y+h)-P(y-h)}{2h},\qquad
P''(y)\approx\frac{P(y+h)-2P(y)+P(y-h)}{h^2}.$$
Il passo deve essere abbastanza piccolo da rappresentare una variazione locale e abbastanza grande da limitare gli errori di cancellazione numerica. Il segno di $P'$ è negativo e quello di $P''$ è positivo per flussi futuri positivi. Questi controlli verificano sia la convenzione del rendimento sia l'unità temporale usata nelle formule.
:::
