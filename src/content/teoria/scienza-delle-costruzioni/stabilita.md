---
titolo: "Stabilità elastica e carico critico"
sommario: "Come calcolare il carico critico di Eulero, scegliere il piano di instabilità e usare il quoziente di Rayleigh."
---

:::percorso
La legge della linea elastica descrive la flessione della trave. In un’asta compressa la forza assiale genera un momento quando l’asse si sposta lateralmente. Si cercano i valori della forza per cui una forma inflessa può esistere in equilibrio anche in assenza di carichi trasversali.
:::

## Asta compressa ideale

:::definizione{#instabilita titolo="Instabilità per carico di punta"}
Si considera un’asta inizialmente rettilinea, elastica, soggetta a una forza assiale di compressione centrata di modulo $P$. La forza, agendo a distanza dall’asse deformato, produce un momento flettente. Il **carico critico** è il primo valore di $P$ per il quale il modello ammette una forma inflessa non banale arbitrariamente vicina a quella rettilinea.
:::

## Carico critico di Eulero

:::teorema{#eulero titolo="Formula di Eulero"}
Per un’asta prismatica di lunghezza $L$, rigidezza flessionale costante $EI$ e cerniere alle estremità, l’equilibrio linearizzato fornisce $EI v''+Pv=0$. Le condizioni $v(0)=v(L)=0$ ammettono la prima forma $v(x)=C\sin\!\left(\dfrac{\pi x}{L}\right)$ per
$$
P_{\mathrm{cr}}=\frac{\pi^2 EI}{L^2}.
$$
Il calcolo riguarda un’asta snella con comportamento elastico nel piano di inflessione considerato.
:::

## Lunghezza libera d’inflessione

:::teorema{#lunghezza-efficace titolo="Lunghezza efficace per vincoli ideali"}
Negli schemi classici si sostituisce $L$ nella formula di Eulero con $L_{\mathrm{eff}}=KL$.

- Cerniera e cerniera: $K=1$.
- Incastro ed estremo libero: $K=2$.
- Incastro e cerniera: $K\simeq0{,}699$.
- Incastro e incastro: $K=\dfrac12$.

In questi schemi i vincoli si intendono ideali e le traslazioni trasversali agli estremi vincolati sono impedite. In un telaio la lunghezza efficace dipende anche dalla rigidezza e dalla possibilità di spostamento dei nodi.
:::

## Scelta del piano di inflessione

:::osservazione{#asse-debole titolo="Confronto tra i piani principali"}
Si calcola $P_{\mathrm{cr}}$ in ciascun piano usando il momento d’inerzia attorno al relativo asse di flessione e la lunghezza efficace di quel piano. Governa il minore dei carichi critici. Se i vincoli sono identici, prevale il piano associato al minore momento principale d’inerzia.
:::

## Raggio d’inerzia e snellezza

:::definizione{#snellezza titolo="Snellezza geometrica"}
Per l’asse in esame il raggio d’inerzia è $i=\sqrt{\dfrac{I}{A}}$ e la snellezza è $\lambda=\dfrac{L_{\mathrm{eff}}}{i}$. La tensione normale media corrispondente al carico critico vale
$$
\sigma_{\mathrm{cr}}=\frac{P_{\mathrm{cr}}}{A}=\frac{\pi^2E}{\lambda^2}.
$$
La formula presuppone elasticità lineare fino al carico critico. Quando la tensione prevista supera il campo elastico, occorre un modello che tenga conto del comportamento del materiale.
:::

## Stima energetica con rigidezza variabile

:::teorema{#rayleigh titolo="Quoziente di Rayleigh"}
Per un’asta con rigidezza $EI(x)$ e forza assiale costante, si sceglie una funzione di prova $\varphi(x)$ che rispetti le condizioni cinematiche dei vincoli, con $\varphi'$ non identicamente nulla. L’equilibrio energetico dà la stima
$$
P_{\mathrm R}=
\frac{\displaystyle\int_0^L EI(x)\,[\varphi''(x)]^2\,dx}
{\displaystyle\int_0^L [\varphi'(x)]^2\,dx}.
$$
Il valore è un limite superiore al primo carico critico del modello. Per un’asta incernierata alle estremità si può scegliere $\varphi(x)=\sin\!\left(\dfrac{\pi x}{L}\right)$. Se $EI$ è costante questa forma è quella esatta, mentre se $EI$ varia resta una stima.
:::
