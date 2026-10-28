---
titolo: Conduttori, condensatori e dielettrici
sommario: Perché in un conduttore in equilibrio il campo interno è nullo e la carica sta in superficie, come si calcola la capacità dei condensatori piano, sferico e cilindrico e dei loro collegamenti, quanta energia immagazzina il campo elettrico e come un dielettrico modifica capacità, campo ed energia.
---

## Conduttori in equilibrio elettrostatico

In tutto l'argomento le cariche sono in quiete, i conduttori sono omogenei e lo spazio che li circonda è vuoto, salvo dove si introducono i dielettrici. Il lavoro si indica con $W$.

:::definizione{#conduttore-in-equilibrio titolo="Conduttore in equilibrio elettrostatico"}
Un **conduttore** è un materiale che contiene cariche libere di muoversi al suo interno, come gli elettroni di conduzione di un metallo. Un conduttore è in **equilibrio elettrostatico** quando nessuna carica al suo interno o sulla sua superficie è in moto macroscopico. Quando si carica un conduttore o lo si porta in un campo esterno, le cariche libere si spostano e l'equilibrio si raggiunge in un tempo brevissimo, che nei problemi di elettrostatica si trascura. Tutte le proprietà che seguono valgono per conduttori in equilibrio, e servono a determinare dove si trova la carica e quanto vale il campo senza conoscere il moto delle cariche durante la ridistribuzione.
:::

::::teorema{#campo-interno-nullo titolo="Campo elettrico all'interno di un conduttore"}
In ogni punto interno al materiale di un conduttore in equilibrio elettrostatico il campo elettrico è nullo:
$$
\vec{E} = \vec{0} .
$$
Il campo interno è nullo anche quando il conduttore si trova in un campo esterno $\vec{E}_0$. In questo caso le cariche libere si ridistribuiscono sulla superficie, con la carica negativa sulla parte da cui provengono le linee di $\vec{E}_0$ e la carica positiva sulla parte opposta, e il campo prodotto da queste cariche, dette **cariche indotte**, annulla $\vec{E}_0$ all'interno del materiale. Il fenomeno si chiama induzione elettrostatica, e la carica totale di un conduttore isolato e neutro resta nulla.

:::dimostrazione
Si supponga che in un punto interno $P$ il campo sia $\vec{E} \neq \vec{0}$. Una carica libera $q$ in $P$ subisce la forza $q\vec{E} \neq \vec{0}$, quindi si mette in moto. Questo contraddice l'ipotesi che il conduttore sia in equilibrio, perciò $\vec{E} = \vec{0}$ in ogni punto interno.
:::
::::

:::richiamo{titolo="Legge di Gauss"}
Il flusso del campo elettrico attraverso una superficie chiusa $S$ è uguale alla carica $Q_{\text{int}}$ racchiusa da $S$ divisa per $\varepsilon_0$: $\Phi_E = \displaystyle\oint_S \vec{E} \cdot \hat{n}\,dA = \dfrac{Q_{\text{int}}}{\varepsilon_0}$. Si rimanda all'argomento sulla legge di Gauss e, per gli integrali di superficie, all'argomento su superfici e flussi di Analisi 2.
:::

::::teorema{#carica-sulla-superficie titolo="Carica sulla superficie di un conduttore"}
In un conduttore in equilibrio elettrostatico la densità volumica di carica è nulla in ogni punto interno, e l'eventuale carica netta del conduttore si distribuisce sulla sua superficie con densità superficiale $\sigma$.

Il risultato dice che per descrivere un conduttore carico basta conoscere $\sigma$ sulla superficie. La distribuzione di $\sigma$ dipende dalla forma del conduttore e dalle cariche vicine; su una sfera isolata, per simmetria, è uniforme, e una sfera di raggio $R$ con carica $Q$ ha $\sigma = \dfrac{Q}{4\pi R^2}$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="1.300,0.000 1.293,0.136 1.272,0.270 1.236,0.402 1.188,0.529 1.126,0.650 1.052,0.764 0.966,0.870 0.870,0.966 0.764,1.052 0.650,1.126 0.529,1.188 0.402,1.236 0.270,1.272 0.136,1.293 0.000,1.300 -0.136,1.293 -0.270,1.272 -0.402,1.236 -0.529,1.188 -0.650,1.126 -0.764,1.052 -0.870,0.966 -0.966,0.870 -1.052,0.764 -1.126,0.650 -1.188,0.529 -1.236,0.402 -1.272,0.270 -1.293,0.136 -1.300,0.000 -1.293,-0.136 -1.272,-0.270 -1.236,-0.402 -1.188,-0.529 -1.126,-0.650 -1.052,-0.764 -0.966,-0.870 -0.870,-0.966 -0.764,-1.052 -0.650,-1.126 -0.529,-1.188 -0.402,-1.236 -0.270,-1.272 -0.136,-1.293 -0.000,-1.300 0.136,-1.293 0.270,-1.272 0.402,-1.236 0.529,-1.188 0.650,-1.126 0.764,-1.052 0.870,-0.966 0.966,-0.870 1.052,-0.764 1.126,-0.650 1.188,-0.529 1.236,-0.402 1.272,-0.270 1.293,-0.136 1.300,-0.000" vettori="1.65,0.0,2.45,0.0,E;1.167,1.167,1.732,1.732;0.0,1.65,0.0,2.45;-1.167,1.167,-1.732,1.732;-1.65,0.0,-2.45,0.0;-1.167,-1.167,-1.732,-1.732;-0.0,-1.65,-0.0,-2.45;1.167,-1.167,1.732,-1.732" etichette="1.33,0.30,+;0.96,0.95,+;0.31,1.32,+;-0.45,1.32,+;-1.10,0.95,+;-1.47,0.30,+;-1.47,-0.46,+;-1.10,-1.11,+;-0.45,-1.48,+;0.31,-1.48,+;0.96,-1.11,+;1.33,-0.46,+;-0.4,-0.1,E = 0" xmin=-4 xmax=4 ymin=-2.6 ymax=2.6 titolo="Sfera conduttrice carica in equilibrio: la carica sta sulla superficie, il campo interno è nullo e il campo esterno è perpendicolare alla superficie"}

:::dimostrazione
Sia $P$ un punto interno al materiale e sia $S$ una superficie chiusa che racchiude $P$ e giace tutta all'interno del materiale. Per il teorema sul campo all'interno di un conduttore $\vec{E} = \vec{0}$ in ogni punto di $S$, quindi il flusso attraverso $S$ è nullo. Per la **legge di Gauss** la carica racchiusa da $S$ è allora nulla. Poiché $S$ si può scegliere piccola a piacere attorno a $P$, la densità volumica di carica in $P$ è nulla. Perciò la carica netta, che si conserva, può trovarsi solo sulla superficie.
:::
::::

:::richiamo{titolo="Differenza di potenziale e campo elettrico"}
Il campo elettrostatico è conservativo, e per due punti $A$ e $B$ vale $V_A - V_B = \displaystyle\int_A^B \vec{E} \cdot d\vec{\ell}$ lungo *qualunque* percorso da $A$ a $B$. Si rimanda all'argomento sul potenziale elettrico e, per gli integrali di linea, all'argomento sulle curve e gli integrali di linea di Analisi 2.
:::

::::teorema{#conduttore-equipotenziale titolo="Conduttore equipotenziale"}
Tutti i punti di un conduttore in equilibrio elettrostatico, interni e sulla superficie, hanno lo stesso potenziale. La superficie del conduttore è quindi una superficie equipotenziale, e il campo nei punti immediatamente esterni è **perpendicolare alla superficie**.

Al conduttore si assegna perciò un solo valore del potenziale, il potenziale del conduttore, e due conduttori collegati da un filo conduttore formano un unico conduttore, quindi si portano allo stesso potenziale. Questa proprietà permette di calcolare come si ripartisce la carica fra conduttori collegati.

:::dimostrazione
Siano $A$ e $B$ due punti del conduttore, collegati da un percorso che passa all'interno del materiale. Lungo il percorso $\vec{E} = \vec{0}$, quindi $V_A - V_B = \displaystyle\int_A^B \vec{E} \cdot d\vec{\ell} = 0$. Se il campo appena fuori dalla superficie avesse una componente tangente alla superficie, le cariche libere della superficie si muoverebbero lungo di essa, contro l'ipotesi di equilibrio; perciò il campo esterno è perpendicolare alla superficie, in accordo con il fatto che il campo è perpendicolare alle superfici equipotenziali.
:::
::::

:::osservazione{#cavita-nel-conduttore titolo="Cavità in un conduttore e schermo elettrostatico"}
Si consideri un conduttore con una cavità al suo interno.

- Se la cavità *non* contiene cariche, il campo nella cavità è nullo e sulla parete della cavità non c'è carica. Infatti una linea di campo nella cavità andrebbe da una carica positiva a una negativa della parete, e l'integrale del campo lungo quella linea sarebbe positivo, mentre la parete è equipotenziale. Un involucro conduttore chiuso isola quindi l'interno dai campi esterni, e si chiama **schermo elettrostatico** o gabbia di Faraday.
- Se la cavità contiene una carica $q$, sulla parete della cavità si induce la carica $-q$. Infatti una superficie chiusa contenuta nel materiale e che circonda la cavità ha flusso nullo, quindi racchiude carica totale nulla. Se il conduttore ha carica netta $Q$, sulla superficie esterna si trova la carica $Q + q$.

Per esempio, un guscio sferico conduttore neutro che contiene una carica $q = 5{,}0\,\mathrm{nC}$ porta $-5{,}0\,\mathrm{nC}$ sulla superficie interna e $+5{,}0\,\mathrm{nC}$ su quella esterna, e all'esterno il campo è quello di una carica $q$ posta nel centro del guscio, qualunque sia la posizione di $q$ nella cavità.
:::

## Campo sulla superficie e potere delle punte

::::teorema{#teorema-di-coulomb titolo="Teorema di Coulomb"}
Sia $\sigma$ la densità superficiale di carica in un punto della superficie di un conduttore in equilibrio, e sia $\hat{n}$ il versore normale alla superficie rivolto verso l'esterno. Nei punti immediatamente esterni il campo elettrico è
$$
\vec{E} = \frac{\sigma}{\varepsilon_0}\,\hat{n} .
$$
Il teorema dà il campo vicino a un conduttore a partire dalla densità di carica locale, e viceversa; il campo è uscente dove $\sigma > 0$ ed entrante dove $\sigma < 0$. Per esempio, dove $\sigma = 1{,}0\,\mu\mathrm{C/m^2}$ il campo vale $E = \dfrac{1{,}0 \cdot 10^{-6}}{8{,}85 \cdot 10^{-12}}\,\mathrm{V/m} \approx 1{,}1 \cdot 10^{5}\,\mathrm{V/m}$.

::grafico{assi=0 uguale=1 poligoni="0,0 6,0 6,2 0,2" linee="0,2 6,2;2.4,1.4 3.6,1.4 3.6,2.6 2.4,2.6 2.4,1.4" vettori="3,2.6,3,3.8,E" etichette="0.33,2.10,+;0.93,2.10,+;1.53,2.10,+;2.13,2.10,+;2.68,2.10,+;3.18,2.10,+;3.73,2.10,+;4.33,2.10,+;4.93,2.10,+;5.53,2.10,+;3.75,2.75,ΔA;0.5,0.8,E = 0;4.3,0.8,conduttore" xmin=-0.2 xmax=6.2 ymin=-0.2 ymax=4.1 titolo="Il cilindretto con le basi di area $\Delta A$ a cavallo della superficie racchiude la carica $\sigma\,\Delta A$; il flusso esce solo dalla base esterna"}

:::dimostrazione
Si consideri un piccolo cilindro con le basi di area $\Delta A$ parallele alla superficie, una appena fuori e una appena dentro il conduttore, e altezza trascurabile. L'area di base è così piccola che su di essa $\sigma$ e il campo esterno si possono considerare costanti. Sulla base interna il campo è nullo; sulla superficie laterale, di area trascurabile, il flusso è trascurabile; sulla base esterna il campo è perpendicolare alla superficie, per il teorema sul conduttore equipotenziale, quindi il flusso è $E_n\,\Delta A$, dove $E_n$ è la componente di $\vec{E}$ lungo $\hat{n}$. Il cilindro racchiude la carica $\sigma\,\Delta A$, perciò la **legge di Gauss** dà
$$
E_n\,\Delta A = \frac{\sigma\,\Delta A}{\varepsilon_0}
\quad\Longrightarrow\quad
E_n = \frac{\sigma}{\varepsilon_0} .
$$
:::
::::

:::osservazione{#confronto-piano-carico titolo="Confronto con il piano carico"}
Un piano infinito isolato con densità $\sigma$ produce da ciascun lato il campo $\dfrac{\sigma}{2\varepsilon_0}$, come si vede nell'argomento sulla legge di Gauss. Vicino a un conduttore il campo è doppio, $\dfrac{\sigma}{\varepsilon_0}$, perché al campo della carica locale si somma quello di tutte le altre cariche del conduttore; queste cariche si dispongono in modo che dentro il conduttore i due contributi si annullino e fuori si sommino. Il fattore $2$ si ritrova nella forza tra le armature di un condensatore.
:::

::::teorema{#potere-delle-punte titolo="Potere delle punte"}
Si considerino due sfere conduttrici di raggi $R_1$ e $R_2$, a una distanza molto maggiore dei raggi e collegate da un filo conduttore sottile, sul quale la carica è trascurabile. All'equilibrio le densità superficiali di carica sono inversamente proporzionali ai raggi:
$$
\frac{\sigma_1}{\sigma_2} = \frac{R_2}{R_1} .
$$
Per il teorema di Coulomb anche i campi sulle superfici stanno nello stesso rapporto. Il risultato si estende in modo qualitativo a un conduttore di forma qualsiasi, sul quale la densità di carica e il campo sono più intensi dove il raggio di curvatura della superficie è minore, cioè vicino alle punte e agli spigoli. Se il campo vicino a una punta supera la rigidità dielettrica dell'aria, l'aria diventa conduttrice e la punta si scarica; su questo principio funziona il parafulmine. Con $R_1 = 1\,\mathrm{cm}$ e $R_2 = 10\,\mathrm{cm}$ si ha $\sigma_1 = 10\,\sigma_2$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="0.662,1.346 0.551,1.395 0.436,1.435 0.318,1.466 0.198,1.487 0.077,1.498 -0.045,1.499 -0.166,1.491 -0.286,1.472 -0.405,1.444 -0.520,1.407 -0.632,1.360 -0.741,1.304 -0.844,1.240 -0.942,1.168 -1.033,1.088 -1.118,1.000 -1.195,0.906 -1.265,0.807 -1.326,0.702 -1.378,0.592 -1.422,0.478 -1.456,0.361 -1.480,0.242 -1.495,0.122 -1.500,0.000 -1.495,-0.122 -1.480,-0.242 -1.456,-0.361 -1.422,-0.478 -1.378,-0.592 -1.326,-0.702 -1.265,-0.807 -1.195,-0.906 -1.118,-1.000 -1.033,-1.088 -0.942,-1.168 -0.844,-1.240 -0.741,-1.304 -0.632,-1.360 -0.520,-1.407 -0.405,-1.444 -0.286,-1.472 -0.166,-1.491 -0.045,-1.499 0.077,-1.498 0.198,-1.487 0.318,-1.466 0.436,-1.435 0.551,-1.395 0.662,-1.346 3.4,0" vettori="0.0,1.6,0.0,2.25;-1.131,1.131,-1.591,1.591;-1.6,0.0,-2.25,0.0;-1.131,-1.131,-1.591,-1.591;-0.0,-1.6,-0.0,-2.25;2.075,0.763,2.472,1.57;2.075,-0.763,2.472,-1.57;3.5,0,5.2,0,E" etichette="-0.64,1.50,+;-1.65,0.49,+;-1.65,-0.65,+;-0.64,-1.66,+;2.17,0.68,+;2.17,-0.84,+;2.72,0.41,+;2.72,-0.57,+;3.13,0.21,+;3.13,-0.37,+;3.41,0.14,+" xmin=-2.6 xmax=5.6 ymin=-2.5 ymax=2.5 titolo="Su un conduttore appuntito la densità di carica e il campo sono più intensi dove il raggio di curvatura è minore, cioè vicino alla punta"}

:::dimostrazione
Le due sfere e il filo formano un unico conduttore, quindi per il teorema sul conduttore equipotenziale hanno lo stesso potenziale. Poiché le sfere sono lontane, il potenziale di ciascuna è quello di una sfera isolata con la propria carica, perciò
$$
\frac{k Q_1}{R_1} = \frac{k Q_2}{R_2}
\quad\Longrightarrow\quad
\frac{Q_1}{Q_2} = \frac{R_1}{R_2} .
$$
Le densità sono $\sigma_i = \dfrac{Q_i}{4\pi R_i^2}$, quindi $\dfrac{\sigma_1}{\sigma_2} = \dfrac{Q_1}{Q_2} \cdot \dfrac{R_2^2}{R_1^2} = \dfrac{R_2}{R_1}$.
:::
::::

## Capacità di un conduttore e condensatori

:::definizione{#capacita titolo="Capacità di un conduttore isolato"}
Si consideri un conduttore isolato, lontano da altri corpi, con carica $Q$ e potenziale $V$, con il riferimento del potenziale all'infinito. La **capacità** del conduttore è
$$
C = \frac{Q}{V} .
$$
Il rapporto non dipende da $Q$. Infatti, moltiplicando la carica per un numero, la densità $\sigma$ in ogni punto, il campo e il potenziale risultano moltiplicati per lo stesso numero, perché la legge di Coulomb è lineare nelle cariche; quindi $C$ dipende solo dalla forma e dalle dimensioni del conduttore. L'unità di misura è il **farad**, $1\,\mathrm{F} = 1\,\mathrm{C/V}$, e nella pratica si usano i sottomultipli $1\,\mu\mathrm{F} = 10^{-6}\,\mathrm{F}$, $1\,\mathrm{nF} = 10^{-9}\,\mathrm{F}$, $1\,\mathrm{pF} = 10^{-12}\,\mathrm{F}$. La capacità misura quanta carica occorre per portare il conduttore a un dato potenziale.
:::

::::teorema{#capacita-sfera titolo="Capacità di una sfera conduttrice"}
Una sfera conduttrice isolata di raggio $R$ ha capacità
$$
C = 4\pi\varepsilon_0 R = \frac{R}{k} .
$$
Una sfera di raggio $10\,\mathrm{cm}$ ha $C = \dfrac{0{,}10}{8{,}99 \cdot 10^{9}}\,\mathrm{F} \approx 11\,\mathrm{pF}$, e la Terra, con $R \approx 6{,}37 \cdot 10^{6}\,\mathrm{m}$, ha $C \approx 7{,}1 \cdot 10^{-4}\,\mathrm{F}$. Il farad è quindi un'unità molto grande per i conduttori isolati.

:::dimostrazione
La carica $Q$ è distribuita uniformemente sulla superficie, quindi per la legge di Gauss all'esterno il campo è quello di una carica puntiforme $Q$ posta nel centro. Il potenziale sulla superficie, con riferimento all'infinito, è perciò $V = \dfrac{kQ}{R}$, e $C = \dfrac{Q}{V} = \dfrac{R}{k} = 4\pi\varepsilon_0 R$.
:::
::::

:::definizione{#condensatore titolo="Condensatore"}
Un **condensatore** è un sistema di due conduttori, detti **armature**, in induzione completa, cioè disposti in modo che tutte le linee di campo che partono da un'armatura terminino sull'altra. In queste condizioni le armature portano cariche opposte $+Q$ e $-Q$, e la capacità del condensatore è
$$
C = \frac{Q}{\Delta V} ,
$$
dove $\Delta V = V_+ - V_- > 0$ è la differenza di potenziale tra l'armatura positiva e quella negativa e $Q > 0$ è la carica dell'armatura positiva. Come per il conduttore isolato, $C$ dipende solo dalla geometria delle armature e dal materiale interposto. Un condensatore collegato a un generatore che mantiene la differenza di potenziale $\Delta V$ si carica con $Q = C\,\Delta V$; i condensatori servono a immagazzinare carica ed energia nei circuiti, e per la carica e la scarica attraverso un resistore si rimanda all'argomento sulla corrente elettrica e i circuiti in corrente continua. Nei circuiti il condensatore si disegna con due segmenti paralleli.
:::

:::osservazione{#calcolo-capacita titolo="Come si calcola una capacità"}
La capacità di un condensatore si ricava in quattro passi.

1. Si assegnano le cariche $+Q$ e $-Q$ alle armature.
2. Si calcola il campo tra le armature, di solito con la legge di Gauss sfruttando la simmetria.
3. Si calcola $\Delta V = \displaystyle\int_{+}^{-} \vec{E} \cdot d\vec{\ell}$ lungo un percorso dall'armatura positiva a quella negativa.
4. Si calcola $C = \dfrac{Q}{\Delta V}$; la carica $Q$ si semplifica, come previsto dalla definizione.

Il procedimento si applica nei tre casi che seguono, e si ripete per qualunque geometria abbastanza simmetrica.
:::

## Condensatore piano, sferico e cilindrico

::::teorema{#condensatore-piano titolo="Condensatore piano"}
Si considerino due armature piane e parallele di area $A$, a distanza $d$ molto minore delle loro dimensioni, nel vuoto, e si trascurino gli effetti di bordo. La capacità è
$$
C = \frac{\varepsilon_0 A}{d} ,
$$
e tra le armature il campo è uniforme, perpendicolare alle armature, di modulo
$$
E = \frac{\sigma}{\varepsilon_0} = \frac{\Delta V}{d} , \qquad \sigma = \frac{Q}{A} .
$$
La capacità cresce con l'area e diminuisce con la distanza. Con $A = 1{,}0\,\mathrm{m^2}$ e $d = 1{,}0\,\mathrm{mm}$ si ottiene $C = \dfrac{8{,}85 \cdot 10^{-12} \cdot 1{,}0}{1{,}0 \cdot 10^{-3}}\,\mathrm{F} = 8{,}85\,\mathrm{nF}$; per ottenere capacità dell'ordine del microfarad servono quindi aree grandi, distanze piccole e un dielettrico tra le armature.

::grafico{unicolore=1 assi=0 uguale=1 linee="1,0 1,3;5,0 5,3" vettori="1.4,0.6,4.6,0.6;1.4,1.2,4.6,1.2;1.4,1.8,4.6,1.8;1.4,2.4,4.6,2.4,E" segmenti="1,-0.35,5,-0.35" etichette="1.08,0.22,+;1.08,0.82,+;1.08,1.42,+;1.08,2.02,+;1.08,2.62,+;4.75,0.22,−;4.75,0.82,−;4.75,1.42,−;4.75,2.02,−;4.75,2.62,−;2.95,-0.75,d;0.6,3.25,+Q;4.75,3.25,−Q" xmin=-0.5 xmax=6.5 ymin=-1 ymax=3.5 titolo="Condensatore piano: le cariche $+Q$ e $-Q$ stanno sulle facce affacciate delle armature e fra le armature il campo è uniforme, $E = \dfrac{\sigma}{\varepsilon_0}$"}

:::dimostrazione
Le cariche $\pm Q$ si dispongono sulle facce affacciate delle armature con densità uniformi $\pm\sigma$, e ciascuna faccia, trattata come un piano infinito, produce un campo di modulo $\dfrac{\sigma}{2\varepsilon_0}$, diretto in verso uscente dalla faccia positiva ed entrante nella faccia negativa. Tra le armature i due campi hanno lo stesso verso e si sommano, all'esterno hanno versi opposti e si annullano, quindi tra le armature $E = \dfrac{\sigma}{\varepsilon_0}$, in accordo con il **teorema di Coulomb**. Il campo è uniforme, perciò lungo un segmento perpendicolare alle armature
$$
\Delta V = \int_{+}^{-} \vec{E} \cdot d\vec{\ell} = E\,d = \frac{Q\,d}{\varepsilon_0 A}
\quad\Longrightarrow\quad
C = \frac{Q}{\Delta V} = \frac{\varepsilon_0 A}{d} .
$$
:::
::::

::::teorema{#condensatore-sferico titolo="Condensatore sferico"}
Si considerino due armature sferiche concentriche, una sfera conduttrice di raggio $R_1$ e un guscio conduttore di raggio interno $R_2 > R_1$, con il vuoto in mezzo. La capacità è
$$
C = 4\pi\varepsilon_0\,\frac{R_1 R_2}{R_2 - R_1} .
$$
Per $R_2 \to +\infty$ si ritrova la capacità della sfera isolata, $4\pi\varepsilon_0 R_1$. Se invece la distanza $d = R_2 - R_1$ è molto minore di $R_1$, si ha $R_1 R_2 \approx R_1^2$ e $C \approx \dfrac{\varepsilon_0 \cdot 4\pi R_1^2}{d}$, cioè la formula del condensatore piano con l'area della sfera. Con $R_1 = 10\,\mathrm{cm}$ e $R_2 = 11\,\mathrm{cm}$ si ottiene $C \approx 1{,}2 \cdot 10^{-10}\,\mathrm{F} = 120\,\mathrm{pF}$.

::grafico{f="4/x^2+0*sqrt((x-1)*(2.5-x))" punti="1,4,pieno;2.5,0.64,pieno;1,0,vuoto;2.5,0,vuoto" segmenti="1,0,1,4;2.5,0,2.5,0.64" xmin=0 xmax=3.6 ymin=-0.4 ymax=4.8 nomi="r,E" legenda="E(r)" titolo="Campo di un condensatore sferico con $R_1 = 1$ e $R_2 = 2{,}5$: $E = \dfrac{Q}{4\pi\varepsilon_0 r^2}$ fra le armature, nullo per $r < R_1$ e per $r > R_2$"}

:::dimostrazione
Si assegnano le cariche $+Q$ alla sfera interna e $-Q$ al guscio. Per $R_1 < r < R_2$ la superficie sferica di raggio $r$ racchiude la carica $Q$, quindi per la **legge di Gauss** e per la simmetria sferica il campo è radiale con modulo $E(r) = \dfrac{Q}{4\pi\varepsilon_0 r^2}$. Integrando lungo un raggio,
$$
\Delta V = \int_{R_1}^{R_2} \frac{Q}{4\pi\varepsilon_0 r^2}\,dr = \frac{Q}{4\pi\varepsilon_0} \left( \frac{1}{R_1} - \frac{1}{R_2} \right) = \frac{Q}{4\pi\varepsilon_0}\,\frac{R_2 - R_1}{R_1 R_2} ,
$$
quindi $C = \dfrac{Q}{\Delta V} = 4\pi\varepsilon_0\,\dfrac{R_1 R_2}{R_2 - R_1}$.
:::
::::

::::teorema{#condensatore-cilindrico titolo="Condensatore cilindrico"}
Si considerino due armature cilindriche coassiali di lunghezza $\ell$, un cilindro conduttore di raggio $a$ e un guscio cilindrico di raggio interno $b > a$, con il vuoto in mezzo e $\ell$ molto maggiore di $b$, così che gli effetti di bordo siano trascurabili. La capacità è
$$
C = \frac{2\pi\varepsilon_0\,\ell}{\ln \dfrac{b}{a}} .
$$
La capacità è proporzionale alla lunghezza, e la **capacità per unità di lunghezza** $\dfrac{C}{\ell}$ dipende solo dal rapporto $\dfrac{b}{a}$. Il modello descrive il cavo coassiale; con $b = 2a$ si ottiene $\dfrac{C}{\ell} = \dfrac{2\pi \cdot 8{,}85 \cdot 10^{-12}}{\ln 2}\,\mathrm{F/m} \approx 80\,\mathrm{pF/m}$.

:::dimostrazione
Si assegnano le cariche $+Q$ al cilindro interno e $-Q$ al guscio, con densità lineare $\lambda = \dfrac{Q}{\ell}$. Per $a < r < b$ si applica la **legge di Gauss** a un cilindro coassiale di raggio $r$ e lunghezza $h$. Per simmetria il campo è radiale e il flusso attraversa solo la superficie laterale, quindi $E \cdot 2\pi r h = \dfrac{\lambda h}{\varepsilon_0}$ ed $E(r) = \dfrac{\lambda}{2\pi\varepsilon_0 r}$. Integrando lungo un raggio,
$$
\Delta V = \int_a^b \frac{\lambda}{2\pi\varepsilon_0 r}\,dr = \frac{\lambda}{2\pi\varepsilon_0} \ln\frac{b}{a} = \frac{Q}{2\pi\varepsilon_0\,\ell} \ln\frac{b}{a} ,
$$
quindi $C = \dfrac{Q}{\Delta V} = \dfrac{2\pi\varepsilon_0\,\ell}{\ln \dfrac{b}{a}}$.
:::
::::

## Condensatori in serie e in parallelo

::::teorema{#condensatori-in-parallelo titolo="Condensatori in parallelo"}
Si considerino $n$ condensatori di capacità $C_1, \dots, C_n$ collegati in **parallelo**, cioè con le armature di un lato collegate a uno stesso filo e quelle dell'altro lato a un secondo filo. Il sistema equivale a un unico condensatore di capacità
$$
C_{\text{eq}} = C_1 + C_2 + \dots + C_n .
$$
Tutti i condensatori hanno la stessa differenza di potenziale $\Delta V$, e la carica si ripartisce in proporzione alle capacità, $Q_i = C_i\,\Delta V$. La capacità equivalente è maggiore della capacità di ciascun condensatore; due condensatori da $2{,}0\,\mu\mathrm{F}$ e da $3{,}0\,\mu\mathrm{F}$ in parallelo equivalgono a $5{,}0\,\mu\mathrm{F}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.35;-0.2,1.35 0.2,1.35;-0.4,1.65 0.4,1.65;0,1.65 0,3 6,3 6,1.65;5.6,1.65 6.4,1.65;5.6,1.35 6.4,1.35;6,1.35 6,0 0,0;3,3 3,1.65;2.6,1.65 3.4,1.65;2.6,1.35 3.4,1.35;3,1.35 3,0" punti="3,3,pieno;3,0,pieno" etichette="0.5,1.75,+;0.35,1.05,−;-1.05,1.4,ΔV;3.55,1.4,C₁;6.55,1.4,C₂" xmin=-1.4 xmax=7.4 ymin=-0.5 ymax=3.5 titolo="Condensatori in parallelo: le armature collegate allo stesso filo sono allo stesso potenziale, quindi tutti i condensatori hanno la stessa $\Delta V$"}

:::dimostrazione
Le armature collegate a uno stesso filo formano un unico conduttore, quindi per il teorema sul conduttore equipotenziale sono allo stesso potenziale; perciò ogni condensatore ha la stessa $\Delta V$ e la carica $Q_i = C_i\,\Delta V$. La carica totale portata dal generatore è
$$
Q = Q_1 + \dots + Q_n = (C_1 + \dots + C_n)\,\Delta V ,
$$
e il rapporto $\dfrac{Q}{\Delta V}$ è la somma delle capacità.
:::
::::

::::teorema{#condensatori-in-serie titolo="Condensatori in serie"}
Si considerino $n$ condensatori, inizialmente scarichi, di capacità $C_1, \dots, C_n$ collegati in **serie**, cioè uno dopo l'altro, con l'armatura negativa di ciascuno collegata all'armatura positiva del successivo. Il sistema equivale a un unico condensatore di capacità $C_{\text{eq}}$ con
$$
\frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \dots + \frac{1}{C_n} .
$$
Tutti i condensatori hanno la stessa carica $Q$, e la differenza di potenziale si ripartisce in proporzione inversa alle capacità, $\Delta V_i = \dfrac{Q}{C_i}$, quindi il condensatore con capacità minore ha la tensione maggiore. La capacità equivalente è minore della più piccola delle capacità; per due condensatori $C_{\text{eq}} = \dfrac{C_1 C_2}{C_1 + C_2}$, e da $2{,}0\,\mu\mathrm{F}$ e $3{,}0\,\mu\mathrm{F}$ si ottiene $1{,}2\,\mu\mathrm{F}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.35;-0.2,1.35 0.2,1.35;-0.4,1.65 0.4,1.65;0,1.65 0,3 2.35,3;2.35,2.6 2.35,3.4;2.65,2.6 2.65,3.4;2.65,3 4.35,3;4.35,2.6 4.35,3.4;4.65,2.6 4.65,3.4;4.65,3 6,3 6,0 0,0" etichette="0.5,1.75,+;0.35,1.05,−;-1.05,1.4,ΔV;2.25,3.65,C₁;4.25,3.65,C₂;2.0,3.1,+;2.85,3.1,−;4.0,3.1,+;4.85,3.1,−" xmin=-1.4 xmax=7 ymin=-0.5 ymax=4.1 titolo="Condensatori in serie: le armature interne, collegate fra loro e isolate, formano un conduttore neutro, quindi tutti i condensatori hanno la stessa carica $Q$"}

:::dimostrazione
L'armatura negativa di un condensatore e l'armatura positiva del successivo, con il filo che le collega, formano un conduttore isolato, scarico all'inizio, quindi con carica totale nulla per la conservazione della carica. Se l'armatura positiva del primo condensatore riceve la carica $Q$, per induzione completa la sua armatura negativa porta $-Q$, quindi l'armatura positiva del secondo porta $+Q$, e così via; perciò ogni condensatore ha carica $Q$. Le differenze di potenziale si sommano lungo la serie,
$$
\Delta V = \Delta V_1 + \dots + \Delta V_n = Q \left( \frac{1}{C_1} + \dots + \frac{1}{C_n} \right) ,
$$
e $\dfrac{\Delta V}{Q} = \dfrac{1}{C_{\text{eq}}}$ dà la tesi.
:::
::::

:::esempio{titolo="Riduzione di una rete di condensatori"}
Un condensatore $C_1 = 3{,}0\,\mu\mathrm{F}$ è collegato in serie al parallelo di $C_2 = 2{,}0\,\mu\mathrm{F}$ e $C_3 = 4{,}0\,\mu\mathrm{F}$, e ai capi della rete è applicata la differenza di potenziale $\Delta V = 12\,\mathrm{V}$. Si sostituisce prima il parallelo con $C_{23} = C_2 + C_3 = 6{,}0\,\mu\mathrm{F}$, poi la serie con
$$
C_{\text{eq}} = \frac{C_1 C_{23}}{C_1 + C_{23}} = \frac{3{,}0 \cdot 6{,}0}{9{,}0}\,\mu\mathrm{F} = 2{,}0\,\mu\mathrm{F} .
$$
La carica fornita dal generatore è $Q = C_{\text{eq}}\,\Delta V = 24\,\mu\mathrm{C}$, ed è anche la carica di $C_1$ e del parallelo. Quindi $\Delta V_1 = \dfrac{24}{3{,}0}\,\mathrm{V} = 8{,}0\,\mathrm{V}$ e il parallelo ha $\Delta V_{23} = 4{,}0\,\mathrm{V}$, da cui $Q_2 = 8{,}0\,\mu\mathrm{C}$ e $Q_3 = 16\,\mu\mathrm{C}$. Si ripercorre cioè la rete a ritroso, dal condensatore equivalente ai singoli condensatori.
:::

## Energia del condensatore e del campo elettrico

::::teorema{#energia-condensatore titolo="Energia di un condensatore carico"}
Un condensatore di capacità $C$ con carica $Q$ e differenza di potenziale $\Delta V$ immagazzina l'energia potenziale elettrica
$$
U = \frac{Q^2}{2C} = \frac{1}{2} C\,\Delta V^2 = \frac{1}{2} Q\,\Delta V .
$$
L'energia è uguale al lavoro necessario per caricare il condensatore, e viene restituita quando il condensatore si scarica, per esempio nel flash di una macchina fotografica. Delle tre forme conviene quella che contiene la grandezza che resta costante nel problema: $\dfrac{Q^2}{2C}$ per un condensatore isolato, $\dfrac{1}{2} C\,\Delta V^2$ per un condensatore collegato a un generatore. Un condensatore da $100\,\mu\mathrm{F}$ a $50\,\mathrm{V}$ immagazzina $U = \dfrac{1}{2} \cdot 100 \cdot 10^{-6} \cdot 50^2\,\mathrm{J} = 0{,}125\,\mathrm{J}$.

::grafico{f="2*x+0*sqrt(x*(3-x))" area="2*x;0;0;3" segmenti="3,0,3,6;0,6,3,6" punti="3,6,pieno" etichette="1.9,1.4,U" xmin=-0.4 xmax=4 ymin=-0.6 ymax=7.4 nomi="q,ΔV" legenda="\Delta V(q)" titolo="Durante la carica $\Delta V = \dfrac{q}{C}$ cresce linearmente con $q$; il lavoro per portare la carica da $0$ a $Q$ è l'area del triangolo, $\dfrac{1}{2} Q\,\Delta V$"}

:::dimostrazione
Si carica il condensatore trasportando la carica a piccole quantità $dq$ dall'armatura negativa a quella positiva. Quando la carica dell'armatura positiva è $q$, la differenza di potenziale è $\dfrac{q}{C}$, quindi il lavoro per trasportare $dq$ contro la forza elettrica è $dW = \dfrac{q}{C}\,dq$. Il lavoro totale per passare da $q = 0$ a $q = Q$ è
$$
W = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C} ,
$$
e questo lavoro resta immagazzinato come energia potenziale $U$. Le altre due forme seguono sostituendo $Q = C\,\Delta V$.
:::
::::

::::teorema{#densita-energia titolo="Densità di energia del campo elettrico"}
In una regione di spazio vuoto in cui c'è il campo elettrico $\vec{E}$, l'energia per unità di volume è
$$
u = \frac{1}{2} \varepsilon_0 E^2 ,
$$
che si misura in $\mathrm{J/m^3}$. L'energia di un sistema di cariche si può quindi pensare distribuita nello spazio in cui c'è il campo, con densità $u$, e si ottiene integrando $u$ sul volume. La formula si ricava per il condensatore piano e vale per qualunque campo elettrostatico nel vuoto. Dove $E = 1{,}0 \cdot 10^{6}\,\mathrm{V/m}$ si ha $u = \dfrac{1}{2} \cdot 8{,}85 \cdot 10^{-12} \cdot 10^{12}\,\mathrm{J/m^3} \approx 4{,}4\,\mathrm{J/m^3}$.

:::dimostrazione
In un condensatore piano il campo è uniforme ed è confinato nel volume $A\,d$ tra le armature. Poiché $C = \dfrac{\varepsilon_0 A}{d}$ e $\Delta V = E\,d$, l'energia del condensatore è
$$
U = \frac{1}{2} \frac{\varepsilon_0 A}{d}\,(E\,d)^2 = \frac{1}{2} \varepsilon_0 E^2 \cdot A\,d ,
$$
quindi l'energia per unità di volume è $u = \dfrac{U}{A\,d} = \dfrac{1}{2} \varepsilon_0 E^2$.
:::
::::

::::teorema{#forza-tra-armature titolo="Forza tra le armature di un condensatore piano"}
Le armature di un condensatore piano con carica $Q$ si attraggono con una forza di modulo
$$
F = \frac{Q^2}{2\varepsilon_0 A} = \frac{1}{2} \varepsilon_0 E^2 A .
$$
La forza è uguale alla densità di energia per l'area, e corrisponde al campo $\dfrac{\sigma}{2\varepsilon_0}$ prodotto da un'armatura sola, che agisce sulla carica $Q$ dell'altra; infatti il campo totale $\dfrac{\sigma}{\varepsilon_0}$ comprende anche il contributo dell'armatura su cui la forza agisce, e un'armatura non esercita forza su sé stessa. Con $A = 0{,}010\,\mathrm{m^2}$ e $Q = 0{,}10\,\mu\mathrm{C}$ si ottiene $F = \dfrac{(1{,}0 \cdot 10^{-7})^2}{2 \cdot 8{,}85 \cdot 10^{-12} \cdot 0{,}010}\,\mathrm{N} \approx 0{,}056\,\mathrm{N}$.

:::dimostrazione
Si consideri il condensatore isolato, quindi con $Q$ costante, e si allontani lentamente un'armatura di $dx$ con una forza esterna che equilibra l'attrazione. L'energia con le armature a distanza $x$ è $U(x) = \dfrac{Q^2}{2C} = \dfrac{Q^2\,x}{2\varepsilon_0 A}$. Il lavoro della forza esterna, $F\,dx$, è uguale all'aumento di energia $dU$, perché nessun'altra forza compie lavoro; perciò
$$
F = \frac{dU}{dx} = \frac{Q^2}{2\varepsilon_0 A} ,
$$
e con $Q = \sigma A = \varepsilon_0 E A$ si ottiene $F = \dfrac{1}{2} \varepsilon_0 E^2 A$.
:::
::::

## Dielettrici

:::teorema{#condensatore-con-dielettrico titolo="Condensatore con dielettrico"}
È una legge sperimentale. Se lo spazio tra le armature di un condensatore di capacità $C_0$ nel vuoto viene riempito *completamente* da un isolante omogeneo e isotropo, detto **dielettrico**, la capacità diventa
$$
C = \varepsilon_r\,C_0 , \qquad \varepsilon_r \geq 1 ,
$$
dove $\varepsilon_r$ è un numero che dipende solo dal materiale, qualunque sia la forma del condensatore. La legge permette di ottenere capacità maggiori a parità di dimensioni, e per questo i condensatori reali contengono un dielettrico. Per esempio, un condensatore da $10\,\mathrm{pF}$ nel vuoto riempito di teflon, con $\varepsilon_r \approx 2{,}1$, ha capacità $21\,\mathrm{pF}$.
:::

:::definizione{#costante-dielettrica-relativa titolo="Costante dielettrica relativa"}
Il numero adimensionale $\varepsilon_r$ della legge del condensatore con dielettrico si chiama **costante dielettrica relativa** del materiale, e il prodotto $\varepsilon = \varepsilon_0\,\varepsilon_r$ si chiama costante dielettrica assoluta. Il vuoto ha $\varepsilon_r = 1$, l'aria $\varepsilon_r \approx 1{,}0006$, il polietilene $\varepsilon_r \approx 2{,}3$, il vetro valori compresi circa tra $4$ e $10$ e l'acqua $\varepsilon_r \approx 80$. Poiché $\varepsilon_r$ dell'aria differisce da $1$ meno di un millesimo, nei problemi l'aria si tratta come il vuoto. Le capacità di un condensatore riempito di dielettrico si ottengono sostituendo $\varepsilon_0$ con $\varepsilon$; per esempio, un condensatore piano riempito ha $C = \dfrac{\varepsilon_0 \varepsilon_r A}{d}$.
:::

:::osservazione{#polarizzazione titolo="Polarizzazione del dielettrico"}
In un dielettrico le cariche *non* sono libere di muoversi su distanze macroscopiche. In un campo elettrico, però, ogni molecola si deforma o si orienta e diventa un piccolo dipolo allineato al campo; il dielettrico si dice **polarizzato**. All'interno di un dielettrico omogeneo le cariche dei dipoli vicini si compensano, mentre sulle facce affacciate alle armature resta uno strato di **cariche di polarizzazione**, negativo vicino all'armatura positiva e positivo vicino a quella negativa. Il campo di queste cariche è opposto a quello delle cariche libere delle armature, e lo riduce. Per il dipolo in un campo elettrico si rimanda all'argomento sul campo elettrico.
:::

::::teorema{#campo-nel-dielettrico titolo="Campo e cariche di polarizzazione"}
Si consideri un condensatore piano con densità di carica libera $\sigma$ sulle armature, completamente riempito da un dielettrico di costante $\varepsilon_r$, e sia $E_0 = \dfrac{\sigma}{\varepsilon_0}$ il campo che si avrebbe nel vuoto con la stessa carica. Nel dielettrico il campo e la densità delle cariche di polarizzazione sono
$$
E = \frac{E_0}{\varepsilon_r} = \frac{\sigma}{\varepsilon_0 \varepsilon_r} ,
\qquad
\sigma_p = \sigma \left( 1 - \frac{1}{\varepsilon_r} \right) .
$$
La densità $\sigma_p$ è minore di $\sigma$, quindi il campo si riduce senza annullarsi; nel limite $\varepsilon_r \to +\infty$ si avrebbe $\sigma_p = \sigma$ e campo nullo, come in un conduttore. Per lo stesso motivo due cariche puntiformi immerse in un dielettrico si attraggono o si respingono con una forza $\varepsilon_r$ volte minore che nel vuoto, e la densità di energia nel dielettrico è $u = \dfrac{1}{2} \varepsilon_0 \varepsilon_r E^2$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="1,0 5,0 5,3 1,3" linee="1,0 1,3;5,0 5,3" vettori="1.85,0.3,4.15,0.3;1.85,1.5,4.15,1.5,E;1.85,2.7,4.15,2.7" etichette="1.08,0.22,+;1.08,0.82,+;1.08,1.42,+;1.08,2.02,+;1.08,2.62,+;4.75,0.22,−;4.75,0.82,−;4.75,1.42,−;4.75,2.02,−;4.75,2.62,−;1.43,0.52,−;1.43,1.12,−;1.43,1.72,−;1.43,2.32,−;4.41,0.52,+;4.41,1.12,+;4.41,1.72,+;4.41,2.32,+;0.7,3.3,σ;1.25,3.3,−σₚ;4.25,3.3,+σₚ;4.85,3.3,−σ" xmin=-0.5 xmax=6.5 ymin=-0.3 ymax=3.7 titolo="Dielettrico polarizzato: le cariche di polarizzazione $\mp\sigma_p$ sulle facce affacciate alle armature riducono il campo a $E = \dfrac{E_0}{\varepsilon_r}$"}

:::dimostrazione
A parità di carica $Q$, per la legge del condensatore con dielettrico la differenza di potenziale è $\Delta V = \dfrac{Q}{\varepsilon_r C_0} = \dfrac{\Delta V_0}{\varepsilon_r}$. Il campo è uniforme, quindi $E = \dfrac{\Delta V}{d} = \dfrac{E_0}{\varepsilon_r}$. Si applica poi la **legge di Gauss** a un cilindretto con una base dentro l'armatura positiva e l'altra nel dielettrico. La carica racchiusa per unità di area è quella libera dell'armatura, $\sigma$, più quella di polarizzazione della faccia del dielettrico, $-\sigma_p$, perciò
$$
E = \frac{\sigma - \sigma_p}{\varepsilon_0}
\quad\Longrightarrow\quad
\sigma_p = \sigma - \varepsilon_0 E = \sigma - \frac{\sigma}{\varepsilon_r} = \sigma \left( 1 - \frac{1}{\varepsilon_r} \right) .
$$
:::
::::

:::osservazione{#inserimento-del-dielettrico titolo="Inserimento di un dielettrico a carica costante e a tensione costante"}
Quando un dielettrico viene inserito fino a riempire un condensatore carico, l'effetto dipende da quale grandezza resta costante.

- Condensatore isolato: la carica $Q$ resta costante, quindi $\Delta V$ ed $E$ diventano $\varepsilon_r$ volte minori e l'energia $U = \dfrac{Q^2}{2C}$ diventa $\dfrac{U_0}{\varepsilon_r}$. L'energia diminuisce perché il campo attira il dielettrico all'interno e compie un lavoro positivo su di esso.
- Condensatore collegato a un generatore: la differenza di potenziale $\Delta V$ resta costante, quindi il campo $E = \dfrac{\Delta V}{d}$ resta invariato, la carica diventa $\varepsilon_r Q_0$ e l'energia $U = \dfrac{1}{2} C\,\Delta V^2$ diventa $\varepsilon_r U_0$. Il generatore sposta la carica $(\varepsilon_r - 1)\,Q_0$ e compie il lavoro $W_{\text{gen}} = \Delta V\,(\varepsilon_r - 1)\,Q_0$, che è il doppio dell'aumento di energia; metà del lavoro va al campo e metà è il lavoro compiuto dal campo sul dielettrico che entra.
:::

:::definizione{#rigidita-dielettrica titolo="Rigidità dielettrica"}
La **rigidità dielettrica** di un isolante è il modulo massimo $E_{\max}$ del campo elettrico che il materiale sopporta senza diventare conduttore. Oltre questo valore nel materiale si produce una scarica, e il condensatore si danneggia o si scarica. Per l'aria in condizioni ordinarie $E_{\max} \approx 3 \cdot 10^{6}\,\mathrm{V/m}$. In un condensatore piano la massima differenza di potenziale applicabile è $\Delta V_{\max} = E_{\max}\,d$; con $1{,}0\,\mathrm{mm}$ di aria si ottiene circa $3\,\mathrm{kV}$. I dielettrici solidi usati nei condensatori hanno di solito rigidità maggiore dell'aria, e quindi aumentano sia la capacità sia la tensione di lavoro.
:::

## Condensatori con dielettrico parziale

::::teorema{#condensatore-parzialmente-riempito titolo="Lastra di dielettrico parallela alle armature"}
In un condensatore piano di area $A$ e distanza $d$, con gli effetti di bordo trascurabili, si inserisca una lastra di dielettrico di costante $\varepsilon_r$, spessore $s < d$ e area $A$, parallela alle armature. La capacità diventa
$$
C = \frac{\varepsilon_0 A}{d - s + \dfrac{s}{\varepsilon_r}} .
$$
La capacità dipende solo dallo spessore della lastra, e la sua posizione tra le armature è indifferente. Il condensatore equivale a due condensatori in serie, uno di spessore $d - s$ nel vuoto e uno di spessore $s$ riempito di dielettrico. Con $s = \dfrac{d}{2}$ ed $\varepsilon_r = 3$ si ottiene $C = \dfrac{\varepsilon_0 A}{\dfrac{d}{2} + \dfrac{d}{6}} = \dfrac{3}{2}\,C_0$.

::grafico{unicolore=1 assi=0 uguale=1 poligoni="3,0 5,0 5,3 3,3" linee="1,0 1,3;5,0 5,3" vettori="1.15,0.4,2.85,0.4;1.15,1.1,2.85,1.1;1.15,1.8,2.85,1.8;1.15,2.5,2.85,2.5,E₀;3.15,0.75,4.85,0.75;3.15,2.15,4.85,2.15,E" segmenti="1,-0.35,3,-0.35;3,-0.35,5,-0.35" etichette="1.75,-0.75,d − s;3.95,-0.75,s;3.9,1.35,εᵣ" xmin=-0.5 xmax=6.5 ymin=-1 ymax=3.4 titolo="Lastra di dielettrico di spessore $s$ parallela alle armature: il campo vale $E_0$ nel vuoto ed $E = \dfrac{E_0}{\varepsilon_r}$ nella lastra"}

:::dimostrazione
La carica libera $\pm Q$ delle armature ha densità $\sigma = \dfrac{Q}{A}$. Nel vuoto il campo è $E_0 = \dfrac{\sigma}{\varepsilon_0}$, e nella lastra, per il teorema su campo e cariche di polarizzazione, è $\dfrac{E_0}{\varepsilon_r}$. Sommando i contributi dei tratti nel vuoto, di spessore complessivo $d - s$, e del tratto nella lastra,
$$
\Delta V = E_0\,(d - s) + \frac{E_0}{\varepsilon_r}\,s = \frac{Q}{\varepsilon_0 A} \left( d - s + \frac{s}{\varepsilon_r} \right) ,
$$
e $C = \dfrac{Q}{\Delta V}$ dà la tesi. La posizione della lastra cambia solo come si divide il tratto nel vuoto, e non la sua lunghezza totale $d - s$.
:::
::::

::::teorema{#dielettrico-affiancato titolo="Dielettrico che occupa una parte dell'area"}
In un condensatore piano di area $A$ e distanza $d$, un dielettrico di costante $\varepsilon_r$ riempie tutto lo spessore su una parte $A_1$ dell'area, mentre la parte restante $A_2 = A - A_1$ è vuota. La capacità è
$$
C = \frac{\varepsilon_0 \left( A_2 + \varepsilon_r A_1 \right)}{d} .
$$
Il condensatore equivale a due condensatori in parallelo. Nelle due parti il campo è lo stesso, $E = \dfrac{\Delta V}{d}$, mentre la densità di carica libera sulle armature è $\varepsilon_0 E$ nella parte vuota ed $\varepsilon_r \varepsilon_0 E$ nella parte con il dielettrico. Se il dielettrico occupa metà dell'area, $C = \dfrac{1 + \varepsilon_r}{2}\,C_0$.

:::dimostrazione
Le due parti hanno in comune le armature, quindi la stessa differenza di potenziale $\Delta V$; perciò sono due condensatori in parallelo, di capacità $\dfrac{\varepsilon_0 \varepsilon_r A_1}{d}$ e $\dfrac{\varepsilon_0 A_2}{d}$. Per il teorema sui **condensatori in parallelo** la capacità è la somma delle due.
:::
::::

:::osservazione{#lastra-conduttrice titolo="Lastra conduttrice tra le armature"}
Se tra le armature di un condensatore piano si inserisce una lastra *conduttrice* scarica di spessore $s$ e area $A$, parallela alle armature, nella lastra il campo è nullo e sulle sue facce si inducono le cariche $-Q$ e $+Q$. Il condensatore equivale a due condensatori nel vuoto in serie, con spessori che sommati danno $d - s$, quindi
$$
C = \frac{\varepsilon_0 A}{d - s} ,
$$
qualunque sia la posizione della lastra. Lo stesso risultato si ottiene dalla formula della lastra di dielettrico nel limite $\varepsilon_r \to +\infty$, in accordo con il fatto che un conduttore annulla completamente il campo al suo interno.
:::
