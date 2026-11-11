---
titolo: "Il problema di De Saint Venant"
sommario: "Tensioni da sforzo normale, flessione, taglio e torsione. Come combinare le sollecitazioni e riconoscere le formule applicabili."
---

:::percorso
Le proprietà geometriche della sezione e le componenti di tensione sono ora note. A partire da $N$, $M$, $T$ e dal momento torcente, qui si calcolano le tensioni nei punti della sezione. La relazione tra momento flettente e curvatura servirà poi a calcolare gli spostamenti.
:::

## Modello della trave prismatica

:::osservazione{#principio-saint-venant titolo="Principio di De Saint Venant"}
In una trave prismatica, due distribuzioni di carico staticamente equivalenti producono differenze di tensione che si attenuano allontanandosi dalla zona di applicazione del carico. Le formule che seguono riguardano il campo di tensioni lontano dalle zone di applicazione e dai dettagli locali del vincolo. Si assume comportamento elastico lineare e materiale omogeneo.
:::

## Sforzo normale e flessione retta

:::teorema{#navier titolo="Formula di Navier"}
Si assume che $x$ sia l’asse della trave e che $y$ e $z$ siano assi principali baricentrici della sezione. Lo sforzo normale $N$ è positivo a trazione. Il momento $M_z$ è positivo quando comprime le fibre con $y>0$. Per flessione intorno all’asse $z$ si ha
$$
\sigma_x(y)=\frac{N}{A}-\frac{M_z y}{I_z}.
$$
Se $N=0$, l’asse neutro passa per il baricentro. Per individuare i valori estremi si valutano le tensioni ai lembi, rispettando il segno di $y$.
:::

## Flessione deviata e carico eccentrico

:::teorema{#flessione-deviata titolo="Flessione rispetto a due assi principali"}
Con la convenzione dei momenti sul piano della sezione di normale positiva $x$, $M_y$ comprime le fibre con $z<0$ se positivo. Per la sovrapposizione degli effetti
$$
\sigma_x(y,z)=\frac{N}{A}-\frac{M_z y}{I_z}+\frac{M_y z}{I_y}.
$$
La retta neutra si trova imponendo $\sigma_x(y,z)=0$. Un carico assiale eccentrico va riportato al baricentro, conservando il momento prodotto dalla sua eccentricità.
:::

:::esempio{#nocciolo titolo="Compressione eccentrica in una sezione rettangolare"}
Si consideri un rettangolo alto $h$ con una forza di compressione di modulo $P$ eccentrica di $e$ verso il lembo superiore. Al lembo inferiore vale $\sigma_x=-\dfrac{P}{A}+\dfrac{Pe}{W_z}$. Poiché $W_z=\dfrac{Ah}{6}$, la condizione di assenza di trazione è $e\leq\dfrac{h}{6}$.
:::

## Taglio e formula di Jourawski

:::teorema{#jourawski titolo="Formula di Jourawski"}
Per una trave con sezione simmetrica rispetto all’asse verticale e soggetta a taglio verticale $V_y$, si consideri la striscia orizzontale di larghezza $b(y)$ alla quota $y$. Se $S_z(y)$ è il momento statico rispetto all’asse neutro della parte di sezione sopra la striscia, il modulo della tensione tangenziale media sulla striscia vale
$$
|\tau(y)|=\frac{|V_y S_z(y)|}{I_z b(y)}.
$$
In una sezione rettangolare di area $A$ la distribuzione lungo l’altezza è parabolica, si annulla ai lembi e raggiunge $\dfrac{3|V_y|}{2A}$ al baricentro. In una sezione a I, all’attacco dell’ala si usa la larghezza locale del tratto in cui si valuta la tensione.
:::

## Torsione di sezioni circolari

:::teorema{#torsione-circolare titolo="Torsione di una sezione circolare"}
Per una sezione circolare piena o anulare di raggi $R$ e $r$, il momento polare è $J=\dfrac{\pi}{2}(R^4-r^4)$. Un momento torcente $M_t$ produce una tensione tangenziale di modulo $\dfrac{|M_t|\rho}{J}$ a distanza $\rho$ dall’asse, massima al raggio esterno. L’angolo di torsione su una lunghezza $L$ con $M_t$, $G$ e $J$ costanti è $\varphi=\dfrac{M_t L}{GJ}$.
La formula della tensione proporzionale a $\rho$ vale per la sezione circolare. Per sezioni non circolari occorre tener conto dell’ingobbamento e usare la rigidezza torsionale appropriata.
:::

## Torsione di sezioni sottili chiuse

:::teorema{#bredt titolo="Formula di Bredt per una cella chiusa"}
Per una sezione a parete sottile, chiusa e a una sola cella, si chiami $A_m$ l’area racchiusa dalla linea media della parete. In torsione pura il flusso di taglio $q_t$ è costante lungo il contorno e vale
$$
q_t=\frac{M_t}{2A_m},\qquad
\tau_t(s)=\frac{q_t}{t(s)},
$$
dove $t(s)$ è lo spessore locale. A parità di flusso, la tensione tangenziale ha modulo maggiore nel tratto più sottile.
:::

## Combinazione delle tensioni nella sezione

:::teorema{#von-mises-flessione-torsione titolo="Von Mises per tensione assiale e taglio"}
Se in un punto della sezione agiscono la tensione normale $\sigma_x$ e una sola componente tangenziale $\tau$, la tensione equivalente di von Mises vale
$$
\sigma_{\mathrm{eq}}=\sqrt{\sigma_x^2+3\tau^2}.
$$
In un albero circolare la formula si applica, per esempio, usando la tensione assiale e il taglio da torsione valutati nello stesso punto.
:::

:::esempio{titolo="Tensione equivalente in un punto"}
Se in un punto della trave le uniche componenti sono $\sigma_x=60\,\mathrm{MPa}$ e $\tau_{xy}=30\,\mathrm{MPa}$, si applica il criterio di von Mises con $\sigma_y=0$. Risulta $\sigma_{\mathrm{eq}}=\sqrt{60^2+3\cdot30^2}\,\mathrm{MPa}=30\sqrt{7}\,\mathrm{MPa}\simeq79{,}4\,\mathrm{MPa}$. Per cercare il massimo equivalente sulla sezione occorre valutare le componenti nello stesso punto, poiché il massimo di ciascuna può trovarsi a una quota diversa.
:::
