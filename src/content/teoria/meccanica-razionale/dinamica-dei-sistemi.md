---
titolo: "Dinamica dei sistemi: equazioni cardinali ed energia"
sommario: Le due equazioni cardinali della dinamica per un sistema di punti materiali, il teorema di König per il momento angolare e per l'energia cinetica, il teorema dell'energia cinetica e gli integrali primi che ne seguono.
---

## Forze interne e forze esterne

Un sistema meccanico è formato da più punti materiali, e le forze che agiscono su di essi si distinguono in due classi secondo il corpo che le esercita.

:::definizione{#forze-interne-ed-esterne titolo="Forze interne e forze esterne"}
Sia $S$ un sistema di $N$ punti materiali $P_1, \dots, P_N$ di masse $m_1, \dots, m_N$. La forza $\vec{F}_i$ applicata al punto $P_i$ si decompone nella somma
$$
\vec{F}_i = \vec{F}_i^{(e)} + \vec{F}_i^{(i)} ,
\qquad
\vec{F}_i^{(i)} = \sum_{j \neq i} \vec{F}_{ij} ,
$$
dove $\vec{F}_{ij}$ è la forza che il punto $P_j$ del sistema esercita su $P_i$. Le forze $\vec{F}_i^{(i)}$ sono le **forze interne**, esercitate dai punti del sistema gli uni sugli altri; la forza $\vec{F}_i^{(e)}$ è la **forza esterna** applicata a $P_i$, esercitata da corpi che non appartengono a $S$.

La distinzione dipende dal sistema che si considera. Per due aste incernierate fra loro, la reazione che ciascuna asta esercita sull'altra nella cerniera interna è una forza interna al sistema delle due aste e una forza esterna per la singola asta presa da sola. Da questa scelta dipende quali incognite compaiono nelle equazioni che si scrivono.
:::

::::teorema{#risultante-delle-forze-interne titolo="Risultante e momento risultante delle forze interne"}
Si assume che le forze interne soddisfino il principio di azione e reazione nella forma forte: per ogni coppia di indici $i \neq j$ vale $\vec{F}_{ij} = -\,\vec{F}_{ji}$ e il vettore $\vec{F}_{ij}$ è parallelo a $P_i - P_j$. Allora la risultante e il momento risultante delle forze interne sono nulli:
$$
\vec{R}^{(i)} = \sum_{i=1}^{N} \vec{F}_i^{(i)} = \vec{0} ,
\qquad
\vec{M}_O^{(i)} = \sum_{i=1}^{N} (P_i - O) \wedge \vec{F}_i^{(i)} = \vec{0}
$$
per ogni polo $O$. Il teorema è la ragione per cui le equazioni cardinali si possono scrivere anche quando le forze interne sono incognite: le tensioni dei fili, le reazioni delle cerniere interne e le azioni che tengono insieme un corpo rigido non vi compaiono.

::struttura{punti="0,0,P_i,pieno;4,1.5,P_j,pieno" tratteggi="-1.5,-0.56 5.5,2.06" forze="0 0,1.25,0.47,F_ij;4 1.5,-1.25,-0.47,F_ji" titolo="Le due forze interne di una coppia hanno la stessa retta d'azione, moduli uguali e versi opposti, quindi la loro somma e il loro momento rispetto a ogni polo sono nulli"}

:::dimostrazione
Le forze interne si sommano a coppie. Per ogni coppia $\{i, j\}$ la somma dei due termini è $\vec{F}_{ij} + \vec{F}_{ji} = \vec{0}$, perciò la somma estesa a tutte le coppie è nulla e $\vec{R}^{(i)} = \vec{0}$.

Per i momenti si sommano ancora i termini a coppie:
$$
(P_i - O) \wedge \vec{F}_{ij} + (P_j - O) \wedge \vec{F}_{ji}
= \big( (P_i - O) - (P_j - O) \big) \wedge \vec{F}_{ij}
= (P_i - P_j) \wedge \vec{F}_{ij} .
$$
Il vettore $\vec{F}_{ij}$ è parallelo a $P_i - P_j$ per ipotesi, quindi il prodotto vettoriale è nullo. Ogni coppia dà contributo nullo, perciò $\vec{M}_O^{(i)} = \vec{0}$.
:::
::::

## Quantità di moto e moto del centro di massa

:::definizione{#quantita-di-moto titolo="Quantità di moto di un sistema"}
La **quantità di moto** del sistema $S$ è la somma delle quantità di moto dei suoi punti:
$$
\vec{Q} = \sum_{i=1}^{N} m_i\,\vec{v}_i .
$$
Per un sistema continuo di massa $M$ la somma diventa l'integrale $\vec{Q} = \displaystyle\int_S \vec{v}\,dm$. La quantità di moto si misura in $\mathrm{kg\,m/s}$ ed è la grandezza su cui si legge la prima equazione cardinale.
:::

::::teorema{#quantita-di-moto-e-centro-di-massa titolo="Quantità di moto e velocità del centro di massa"}
Sia $M = \sum_i m_i$ la massa totale e sia $G$ il centro di massa del sistema. Allora
$$
\vec{Q} = M\,\vec{v}_G .
$$
La quantità di moto di un sistema qualunque coincide quindi con quella di un unico punto materiale di massa $M$ che si muove come $G$. Per un'asta omogenea di massa $m$ e lunghezza $\ell$ che ruota attorno a un suo estremo con velocità angolare $\dot{\vartheta}$ si ha $v_G = \dfrac{\ell\,\dot{\vartheta}}{2}$, perciò $Q = \dfrac{m\,\ell\,\dot{\vartheta}}{2}$.

::struttura{punti="0,0,m,pieno;4,0,2m,pieno;1,3,m,pieno;2.25,0.75,G,baricentro" tratteggi="0,0 4,0;4,0 1,3;1,3 0,0" titolo="Il centro di massa $G$ di tre punti di masse $m$, $2m$ e $m$: la quantità di moto del sistema è $\vec{Q} = 4m\,\vec{v}_G$"}

:::dimostrazione
Il centro di massa è definito dalla relazione $M\,(G - O) = \sum_i m_i\,(P_i - O)$, con $O$ punto fisso. Le masse sono costanti, quindi la derivata rispetto al tempo del primo membro è $M\,\vec{v}_G$ e quella del secondo è $\sum_i m_i\,\vec{v}_i = \vec{Q}$. Dall'uguaglianza delle due derivate segue la tesi.
:::
::::

::::teorema{#prima-equazione-cardinale titolo="Prima equazione cardinale della dinamica"}
Per ogni sistema di punti materiali vale
$$
\dot{\vec{Q}} = \vec{R}^{(e)} ,
$$
dove $\vec{R}^{(e)}$ è la risultante delle sole forze esterne. Nel piano l'equazione dà le due equazioni scalari sulle componenti $x$ e $y$. Si usa per ricavare le reazioni dei vincoli esterni quando il moto del centro di massa è noto, e per ricavare il moto di $G$ quando le forze esterne sono note.

:::dimostrazione
Si scrive l'equazione di Newton per ciascun punto, $m_i\,\vec{a}_i = \vec{F}_i^{(e)} + \vec{F}_i^{(i)}$, e si somma su $i$:
$$
\sum_i m_i\,\vec{a}_i = \vec{R}^{(e)} + \vec{R}^{(i)} .
$$
Il primo membro è la derivata di $\vec{Q} = \sum_i m_i \vec{v}_i$, poiché le masse sono costanti. Per il teorema sulla risultante delle forze interne si ha $\vec{R}^{(i)} = \vec{0}$, perciò $\dot{\vec{Q}} = \vec{R}^{(e)}$.
:::
::::

:::teorema{#teorema-del-centro-di-massa titolo="Teorema del moto del centro di massa"}
Il centro di massa di un sistema si muove come un punto materiale di massa $M$ sul quale agisce la risultante delle forze esterne:
$$
M\,\vec{a}_G = \vec{R}^{(e)} .
$$
Il risultato segue dalla prima equazione cardinale e dall'uguaglianza $\vec{Q} = M \vec{v}_G$, derivata una volta rispetto al tempo. Un corpo lanciato nel vuoto, che ruoti in qualunque modo, ha il centro di massa che descrive una parabola, perché la sola forza esterna è il peso $-Mg\,\hat{\jmath}$ e quindi $\vec{a}_G = -g\,\hat{\jmath}$.
:::

::::teorema{#conservazione-della-quantita-di-moto titolo="Conservazione della quantità di moto"}
Se $\vec{R}^{(e)} = \vec{0}$ durante il moto, allora $\vec{Q}$ è costante e il centro di massa si muove di moto rettilineo uniforme. Se è nulla soltanto la componente di $\vec{R}^{(e)}$ secondo una direzione fissa $\vec{u}$, allora resta costante la sola componente $\vec{Q} \cdot \vec{u}$.

::struttura{poligoni="0,0 1.2,0 1.2,0.9 0,0.9;3.4,0 5.2,0 5.2,0.9 3.4,0.9" linee="-0.6,0 6,0;1.2,0.45 1.47,0.72 1.92,0.18 2.37,0.72 2.82,0.18 3.13,0.45 3.4,0.45" etichette="0.6,0.45,m;4.3,0.45,3m;2.3,1.15,k" titolo="Due corpi spinti da una molla su un piano orizzontale liscio: la componente orizzontale di $\vec{R}^{(e)}$ è nulla, quindi $Q_x$ resta costante"}

:::dimostrazione
Dalla prima equazione cardinale, $\vec{R}^{(e)} = \vec{0}$ dà $\dot{\vec{Q}} = \vec{0}$, quindi $\vec{Q}$ è costante; dall'uguaglianza $\vec{Q} = M \vec{v}_G$ segue che $\vec{v}_G$ è costante. Nel secondo caso si proietta la prima equazione cardinale su $\vec{u}$, che è un versore fisso, e si ottiene $\dfrac{d}{dt}\big( \vec{Q} \cdot \vec{u} \big) = \vec{R}^{(e)} \cdot \vec{u} = 0$.
:::
::::

:::esempio{titolo="Due corpi e una molla su un piano liscio"}
Due corpi di massa $m$ e $3m$ sono appoggiati su un piano orizzontale liscio e premono su una molla compressa; il sistema parte da fermo. Le forze esterne verticali, peso e reazioni del piano, si equilibrano, e in direzione orizzontale non agiscono forze esterne, quindi $Q_x$ resta nulla. Quando la molla raggiunge la lunghezza di riposo e i corpi si separano, le due velocità $v$ e $u$ soddisfano $m v - 3 m u = 0$, perciò $u = \dfrac{v}{3}$ e il corpo di massa maggiore si allontana con velocità tre volte minore.
:::

## Momento angolare e seconda equazione cardinale

:::definizione{#momento-angolare titolo="Momento angolare rispetto a un polo"}
Il **momento angolare** (o momento della quantità di moto) del sistema $S$ rispetto al polo $O$ è
$$
\vec{K}_O = \sum_{i=1}^{N} (P_i - O) \wedge m_i\,\vec{v}_i ,
$$
e per un sistema continuo $\vec{K}_O = \displaystyle\int_S (P - O) \wedge \vec{v}\,dm$. Per un sistema piano nel piano $Oxy$ il vettore $\vec{K}_O$ è parallelo a $\hat{k}$, e la sua componente è positiva quando il sistema gira attorno a $O$ in verso antiorario. Il momento angolare si misura in $\mathrm{kg\,m^2/s}$.

::struttura{punti="0,0,O,pieno;3,2,P_i,pieno" frecce="0,0,2.9,1.93;3,2,5.1,2.85" etichette="1.75,0.8,P_i − O;4.5,2.0,m_i v_i" titolo="Il momento angolare somma i momenti dei vettori $m_i \vec{v}_i$ rispetto al polo $O$"}
:::

::::teorema{#seconda-equazione-cardinale titolo="Seconda equazione cardinale della dinamica"}
Sia $O$ un punto **fisso** nel riferimento in cui si studia il moto. Allora
$$
\dot{\vec{K}}_O = \vec{M}_O^{(e)} ,
$$
dove $\vec{M}_O^{(e)}$ è il momento risultante delle sole forze esterne rispetto a $O$. L'equazione serve a scrivere una relazione in cui non compaiono le reazioni vincolari la cui retta d'azione passa per $O$. Scegliendo il polo nella cerniera fissa di un'asta si ottiene un'equazione nella sola incognita del moto.

:::dimostrazione
Si deriva la definizione di $\vec{K}_O$ rispetto al tempo, ricordando che $O$ è fisso e quindi $\dfrac{d}{dt}(P_i - O) = \vec{v}_i$:
$$
\dot{\vec{K}}_O = \sum_i \vec{v}_i \wedge m_i\,\vec{v}_i + \sum_i (P_i - O) \wedge m_i\,\vec{a}_i .
$$
Il primo addendo è nullo, poiché ogni prodotto vettoriale ha i due fattori paralleli. Nel secondo si sostituisce $m_i \vec{a}_i = \vec{F}_i^{(e)} + \vec{F}_i^{(i)}$, ottenendo $\vec{M}_O^{(e)} + \vec{M}_O^{(i)}$; per il teorema sul momento risultante delle forze interne si ha $\vec{M}_O^{(i)} = \vec{0}$, perciò $\dot{\vec{K}}_O = \vec{M}_O^{(e)}$.
:::
::::

::::teorema{#polo-mobile titolo="Seconda equazione cardinale con polo mobile"}
Sia $O$ un punto che si muove con velocità $\vec{v}_O$. Allora
$$
\dot{\vec{K}}_O + \vec{v}_O \wedge M\,\vec{v}_G = \vec{M}_O^{(e)} .
$$
La forma con il solo termine $\dot{\vec{K}}_O$ si ritrova quindi in tre casi: $\vec{v}_O = \vec{0}$, cioè polo fisso; $O \equiv G$, perché $\vec{v}_G \wedge \vec{v}_G = \vec{0}$; $\vec{v}_O$ parallela a $\vec{v}_G$. Il caso $O \equiv G$ è quello che si usa quando il sistema non ha punti fissi, per esempio per un corpo che rotola.

:::dimostrazione
Nella derivata di $\vec{K}_O$ compare ora anche la velocità del polo, perché $\dfrac{d}{dt}(P_i - O) = \vec{v}_i - \vec{v}_O$:
$$
\dot{\vec{K}}_O = \sum_i (\vec{v}_i - \vec{v}_O) \wedge m_i\,\vec{v}_i + \sum_i (P_i - O) \wedge m_i\,\vec{a}_i .
$$
I termini $\vec{v}_i \wedge m_i \vec{v}_i$ sono nulli, quindi la prima somma vale
$$
-\,\vec{v}_O \wedge \sum_i m_i\,\vec{v}_i = -\,\vec{v}_O \wedge \vec{Q} = -\,\vec{v}_O \wedge M\,\vec{v}_G .
$$
La seconda somma vale $\vec{M}_O^{(e)}$, come nella dimostrazione con polo fisso. Portando il primo addendo a primo membro si ottiene la tesi.
:::
::::

:::teorema{#conservazione-del-momento-angolare titolo="Conservazione del momento angolare"}
Sia $O$ un polo fisso. Se $\vec{M}_O^{(e)} = \vec{0}$ durante il moto, allora $\vec{K}_O$ è costante. Se è nulla soltanto la componente di $\vec{M}_O^{(e)}$ secondo un asse fisso di versore $\vec{u}$ passante per $O$, allora resta costante la sola componente $\vec{K}_O \cdot \vec{u}$, detta momento angolare assiale. Il risultato segue dalla seconda equazione cardinale, proiettata su $\vec{u}$ quando l'asse è fissato. Su una piattaforma che gira attorno a un asse verticale liscio, il peso e la reazione dell'asse hanno momento assiale nullo, perciò $K_z$ si conserva anche quando le masse si spostano sulla piattaforma.
:::

:::attenzione
Le due equazioni cardinali sono condizioni *necessarie* per il moto di un sistema qualunque, e in generale non sono sufficienti a determinarlo. Due punti materiali collegati da una molla, liberi nel piano e non soggetti a forze esterne, hanno quattro coordinate incognite, mentre le equazioni cardinali danno tre equazioni scalari, nelle quali la distanza fra i due punti non compare; il moto di oscillazione lungo la congiungente resta perciò indeterminato, e per ricavarlo servono le equazioni di Newton dei singoli punti oppure le equazioni di Lagrange. Le equazioni cardinali bastano a determinare il moto quando il sistema è un unico corpo rigido, perché allora le configurazioni dipendono da tre parametri nel piano e da sei nello spazio, tanti quante sono le equazioni scalari.
:::

## Il teorema di König

Il teorema di König riferisce il momento angolare e l'energia cinetica al moto del centro di massa, separando il contributo della traslazione da quello del moto visto da $G$.

::::teorema{#koenig-momento-angolare titolo="Teorema di König per il momento angolare"}
Sia $O$ un polo fisso e sia $G$ il centro di massa. Allora
$$
\vec{K}_O = \vec{K}_G + (G - O) \wedge M\,\vec{v}_G ,
$$
dove $\vec{K}_G$ è il momento angolare rispetto a $G$. Il momento angolare rispetto a un polo qualunque si ottiene quindi da quello rispetto a $G$ aggiungendo il momento della quantità di moto totale pensata applicata in $G$. Per un'asta omogenea di massa $m$ e lunghezza $\ell$ incernierata nell'estremo $A$ si ha $K_G = \dfrac{1}{12}\,m\,\ell^2\,\dot{\vartheta}$ e il secondo termine vale $m\,\dfrac{\ell}{2} \cdot \dfrac{\ell\,\dot{\vartheta}}{2}$, perciò $K_A = \dfrac{1}{3}\,m\,\ell^2\,\dot{\vartheta}$.

::struttura{punti="0,0,O,pieno;3,2,G,baricentro;4.3,3,P_i,pieno" frecce="3,2,5,2,ξ;3,2,3,3.8,η" tratteggi="0,0 3,2;3,2 4.3,3" etichette="1.75,0.8,G − O" titolo="Il riferimento del centro di massa trasla con $G$: il teorema di König separa il moto di $G$ dal moto relativo a $G$"}

:::dimostrazione
Si scrive $P_i - O = (P_i - G) + (G - O)$ e si decompone la velocità come $\vec{v}_i = \vec{v}_G + \vec{v}_i'$, dove $\vec{v}_i'$ è la velocità di $P_i$ nel riferimento che trasla con $G$. Sostituendo nella definizione si ottengono quattro somme:
$$
\vec{K}_O = \sum_i (P_i - G) \wedge m_i \vec{v}_i' + \Big( \sum_i m_i (P_i - G) \Big) \wedge \vec{v}_G + (G - O) \wedge \sum_i m_i \vec{v}_i' + (G - O) \wedge M \vec{v}_G .
$$
Per la definizione di centro di massa vale $\sum_i m_i\,(P_i - G) = \vec{0}$, quindi la seconda somma è nulla; derivando questa stessa identità si ottiene $\sum_i m_i \vec{v}_i' = \vec{0}$, quindi la terza somma è nulla. La prima somma è il momento angolare rispetto a $G$ calcolato con le velocità relative, e coincide con $\vec{K}_G$ perché
$$
\sum_i (P_i - G) \wedge m_i\,\vec{v}_i = \sum_i (P_i - G) \wedge m_i\,\vec{v}_i' + \Big( \sum_i m_i (P_i - G) \Big) \wedge \vec{v}_G = \sum_i (P_i - G) \wedge m_i\,\vec{v}_i' .
$$
Resta $\vec{K}_O = \vec{K}_G + (G - O) \wedge M \vec{v}_G$.
:::
::::

::::teorema{#koenig-energia-cinetica titolo="Teorema di König per l'energia cinetica"}
L'energia cinetica del sistema, $T = \dfrac{1}{2}\displaystyle\sum_i m_i\,v_i^2$, soddisfa
$$
T = \frac{1}{2}\,M\,v_G^2 + T' ,
$$
dove $T'$ è l'energia cinetica calcolata nel riferimento che trasla con $G$. Il primo addendo è l'energia cinetica di traslazione dell'intera massa, il secondo quella del moto visto da $G$. Il teorema si usa in ogni esercizio in cui si scrive $T$ di un sistema: si calcolano separatamente $v_G$ e il moto relativo a $G$, che per un corpo rigido è una rotazione.

:::dimostrazione
Si sostituisce $\vec{v}_i = \vec{v}_G + \vec{v}_i'$ nella definizione di energia cinetica e si sviluppa il quadrato del modulo:
$$
T = \frac{1}{2} \sum_i m_i \,\big( v_G^2 + 2\,\vec{v}_G \cdot \vec{v}_i' + v_i'^2 \big)
= \frac{1}{2}\,M\,v_G^2 + \vec{v}_G \cdot \sum_i m_i \vec{v}_i' + \frac{1}{2} \sum_i m_i\,v_i'^2 .
$$
Il termine intermedio è nullo, poiché $\sum_i m_i \vec{v}_i' = \vec{0}$, e l'ultimo è $T'$.
:::
::::

## Energia cinetica di un corpo rigido

:::richiamo{titolo="Tensore d'inerzia"}
Il tensore d'inerzia relativo al polo $G$ è la matrice simmetrica $\mathbb{I}_G$ con elementi diagonali $I_{xx} = \displaystyle\int (y^2 + z^2)\,dm$, e analoghi, e con $-I_{xy}$, $-I_{xz}$, $-I_{yz}$ fuori dalla diagonale, dove $I_{xy} = \displaystyle\int xy\,dm$ sono i prodotti d'inerzia. Il momento d'inerzia rispetto all'asse per $G$ di versore $\vec{u}$ vale $I_u = \vec{u} \cdot \mathbb{I}_G\,\vec{u}$. Si rimanda all'argomento sulla geometria delle masse.
:::

::::teorema{#energia-cinetica-del-rigido titolo="Energia cinetica di un corpo rigido"}
Sia $C$ un corpo rigido di massa $m$, con centro di massa $G$ e velocità angolare $\vec{\omega}$. Allora
$$
T = \frac{1}{2}\,m\,v_G^2 + \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_G\,\vec{\omega} .
$$
Nel moto rigido piano, con $\vec{\omega} = \dot{\vartheta}\,\hat{k}$ e $I_G$ momento d'inerzia rispetto all'asse per $G$ ortogonale al piano, la formula diventa
$$
T = \frac{1}{2}\,m\,v_G^2 + \frac{1}{2}\,I_G\,\dot{\vartheta}^2 .
$$
Questa è la formula con cui si scrive l'energia cinetica di tutti i sistemi di aste e dischi degli esercizi, sommando il contributo di ogni corpo rigido.

:::dimostrazione
Per il teorema di König vale $T = \dfrac{1}{2} m v_G^2 + T'$, dove $T'$ è l'energia cinetica nel riferimento che trasla con $G$. In quel riferimento il moto del rigido è una rotazione attorno a $G$, quindi $\vec{v}_i' = \vec{\omega} \wedge (P_i - G)$. Posto $\vec{r}_i = P_i - G$, si usa l'identità $|\vec{\omega} \wedge \vec{r}_i|^2 = \omega^2 r_i^2 - (\vec{\omega} \cdot \vec{r}_i)^2$ e si ottiene
$$
T' = \frac{1}{2} \sum_i m_i \big( \omega^2 r_i^2 - (\vec{\omega} \cdot \vec{r}_i)^2 \big) = \frac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_G\,\vec{\omega} ,
$$
poiché l'ultima espressione è la forma quadratica associata al tensore d'inerzia, scritta per componenti. Nel caso piano $\vec{\omega} = \dot{\vartheta} \hat{k}$ è ortogonale a tutti i vettori $\vec{r}_i$, quindi $\vec{\omega} \cdot \mathbb{I}_G \vec{\omega} = I_G\,\dot{\vartheta}^2$.
:::
::::

:::teorema{#energia-cinetica-atto-rotatorio titolo="Energia cinetica nell'atto di moto rotatorio"}
Se il rigido ha un punto $A$ di velocità nulla, allora
$$
T = \frac{1}{2}\,I_a\,\dot{\vartheta}^2 ,
$$
dove $I_a$ è il momento d'inerzia rispetto all'asse di istantanea rotazione per $A$. Il risultato segue dal teorema precedente e dal teorema di Huygens-Steiner, poiché $v_G = \dot{\vartheta}\,|G - A|$ dà $T = \dfrac{1}{2}\big(I_G + m\,|G - A|^2\big)\dot{\vartheta}^2$. La formula abbrevia i conti per un'asta incernierata in un estremo e per un disco che rotola senza strisciare, nel quale il punto di contatto ha velocità nulla.
:::

:::esempio{titolo="Disco che rotola senza strisciare"}
Un disco omogeneo di massa $m$ e raggio $R$ rotola senza strisciare su una guida orizzontale. La condizione di puro rotolamento dà $v_G = R\,|\dot{\vartheta}|$, e il momento d'inerzia del disco rispetto all'asse per $G$ ortogonale al piano vale $I_G = \dfrac{1}{2}\,m\,R^2$. Dalla formula dell'energia cinetica di un rigido segue
$$
T = \frac{1}{2}\,m\,R^2\,\dot{\vartheta}^2 + \frac{1}{2} \cdot \frac{1}{2}\,m\,R^2\,\dot{\vartheta}^2 = \frac{3}{4}\,m\,R^2\,\dot{\vartheta}^2 .
$$
Lo stesso valore si ottiene dall'atto di moto rotatorio attorno al punto di contatto $C$, perché $I_C = \dfrac{1}{2}mR^2 + mR^2 = \dfrac{3}{2}mR^2$.

::struttura{cerchi="3,1.5,1.5" linee="0,0 7,0" punti="3,1.5,G,baricentro;3,0,C,centro" frecce="3,1.5,5.1,1.5,v_G" coppie="3 2.45,-1,ω" titolo="Disco che rotola senza strisciare: il punto di contatto $C$ ha velocità nulla, quindi $T = \dfrac{1}{2}\,I_C\,\dot{\vartheta}^2$"}
:::

## Lavoro, potenza e teorema dell'energia cinetica

:::definizione{#lavoro-e-potenza titolo="Lavoro e potenza di un sistema di forze"}
La **potenza** del sistema di forze applicate ai punti di $S$ è
$$
\Pi = \sum_{i=1}^{N} \vec{F}_i \cdot \vec{v}_i ,
$$
e il **lavoro** compiuto fra gli istanti $t_1$ e $t_2$ è $L = \displaystyle\int_{t_1}^{t_2} \Pi\,dt$. La potenza si separa nel contributo delle forze esterne e in quello delle forze interne, $\Pi = \Pi^{(e)} + \Pi^{(i)}$. Il lavoro si misura in $\mathrm{J}$ e la potenza in $\mathrm{W}$.
:::

::::teorema{#teorema-dell-energia-cinetica titolo="Teorema dell'energia cinetica"}
Per ogni sistema di punti materiali vale
$$
\dot{T} = \Pi^{(e)} + \Pi^{(i)} ,
$$
e in forma integrata $T(t_2) - T(t_1) = L^{(e)} + L^{(i)}$: la variazione dell'energia cinetica è uguale al lavoro di tutte le forze, esterne e interne. Il teorema fornisce un'equazione scalare che non contiene le reazioni dei vincoli ideali, le quali hanno potenza nulla, e si usa per ricavare la velocità di un sistema a un grado di libertà in funzione della configurazione.

:::dimostrazione
Si moltiplica scalarmente l'equazione di Newton di ciascun punto per $\vec{v}_i$ e si somma:
$$
\sum_i m_i\,\vec{a}_i \cdot \vec{v}_i = \sum_i \vec{F}_i \cdot \vec{v}_i = \Pi^{(e)} + \Pi^{(i)} .
$$
Il primo membro è la derivata di $T$, poiché $\dfrac{d}{dt}\Big( \dfrac{1}{2} m_i\,\vec{v}_i \cdot \vec{v}_i \Big) = m_i\,\vec{a}_i \cdot \vec{v}_i$. Integrando fra $t_1$ e $t_2$ si ottiene la forma integrata.
:::
::::

::::teorema{#lavoro-delle-forze-interne-di-un-rigido titolo="Lavoro delle forze interne di un corpo rigido"}
Le forze interne di un corpo rigido hanno potenza nulla in ogni atto di moto, quindi $\Pi^{(i)} = 0$ e il teorema dell'energia cinetica si riduce a $\dot{T} = \Pi^{(e)}$. Lo stesso vale per un sistema di corpi rigidi collegati da vincoli ideali, perché anche le reazioni interne dei vincoli ideali hanno potenza nulla. Per questo negli esercizi di dinamica dei sistemi rigidi il teorema dell'energia cinetica contiene solo il lavoro delle forze attive esterne, cioè del peso e delle molle.

:::dimostrazione
Si sommano i contributi a coppie. Per la coppia $\{i, j\}$, usando $\vec{F}_{ji} = -\vec{F}_{ij}$,
$$
\vec{F}_{ij} \cdot \vec{v}_i + \vec{F}_{ji} \cdot \vec{v}_j = \vec{F}_{ij} \cdot (\vec{v}_i - \vec{v}_j) .
$$
Per la formula fondamentale della cinematica rigida vale $\vec{v}_i - \vec{v}_j = \vec{\omega} \wedge (P_i - P_j)$, vettore ortogonale a $P_i - P_j$. Il vettore $\vec{F}_{ij}$ è parallelo a $P_i - P_j$, quindi il prodotto scalare è nullo. Ogni coppia dà contributo nullo, perciò $\Pi^{(i)} = 0$.
:::
::::

:::osservazione{#rotolamento-senza-lavoro titolo="Il vincolo di puro rotolamento non compie lavoro"}
Nel rotolamento senza strisciamento la reazione del piano, comprese la componente normale e la componente di attrito, è applicata nel punto di contatto $C$, che ha velocità nulla. La potenza di quella reazione è perciò $\vec{\Phi} \cdot \vec{v}_C = 0$. Il risultato giustifica l'uso della conservazione dell'energia per un disco o una sfera che rotolano su un piano inclinato, dove l'attrito è presente e non dissipa energia.
:::

## Conservazione dell'energia meccanica

:::richiamo{titolo="Potenziale ed energia potenziale"}
Un sistema di forze è conservativo se esiste una funzione $U$ delle sole coordinate, il **potenziale**, tale che $\vec{F} = \operatorname{grad} U$ per ciascuna forza; l'energia potenziale è $V = -U$ e il lavoro vale $L = U(2) - U(1) = V(1) - V(2)$. Per il peso di un corpo di massa $m$ si ha $U = -m\,g\,y_G$ e per una molla di costante $k$, lunghezza $\ell$ e lunghezza a riposo $\ell_0$ si ha $U = -\dfrac{1}{2}\,k\,(\ell - \ell_0)^2$. Si rimanda all'argomento sui lavori virtuali, il potenziale e l'equilibrio.
:::

::::teorema{#conservazione-dell-energia-meccanica titolo="Conservazione dell'energia meccanica"}
Si consideri un sistema a vincoli fissi e ideali, nel quale tutte le forze che compiono lavoro sono conservative con potenziale $U$. Allora l'**energia meccanica**
$$
E = T + V = T - U
$$
è costante durante il moto. L'uguaglianza $T + V = E$ è un integrale primo, che per un sistema a un grado di libertà fornisce la velocità in funzione della configurazione senza integrare l'equazione del moto, e con il dato iniziale determina le posizioni raggiungibili.

:::dimostrazione
Per il teorema dell'energia cinetica e per l'ipotesi sui vincoli vale $\dot{T} = \Pi$, dove $\Pi$ è la potenza delle sole forze conservative. Il potenziale dipende dalle sole coordinate, quindi la sua derivata rispetto al tempo lungo il moto è
$$
\dot{U} = \sum_i \operatorname{grad}_i U \cdot \vec{v}_i = \sum_i \vec{F}_i \cdot \vec{v}_i = \Pi .
$$
Perciò $\dot{T} = \dot{U}$, cioè $\dfrac{d}{dt}(T - U) = 0$, e $T - U$ è costante.
:::
::::

:::esempio{titolo="Asta incernierata lasciata cadere dalla posizione orizzontale"}
Un'asta omogenea $AB$ di massa $m$ e lunghezza $\ell$ è incernierata nell'estremo $A$ in un piano verticale, con cerniera liscia, e viene lasciata ferma nella posizione orizzontale. La cerniera è un vincolo fisso e ideale, quindi la sua reazione non compie lavoro e la sola forza che compie lavoro è il peso. Detto $\vartheta$ l'angolo di cui l'asta è scesa sotto l'orizzontale, il centro di massa si abbassa di $\dfrac{\ell}{2}\sin\vartheta$ e l'atto di moto è rotatorio attorno ad $A$, perciò
$$
\frac{1}{2} \cdot \frac{1}{3}\,m\,\ell^2\,\dot{\vartheta}^2 = m\,g\,\frac{\ell}{2}\,\sin\vartheta ,
\qquad
\dot{\vartheta}^2 = \frac{3\,g\,\sin\vartheta}{\ell} .
$$
Nella posizione verticale, $\vartheta = \dfrac{\pi}{2}$, risulta $\dot{\vartheta} = \sqrt{\dfrac{3g}{\ell}}$ e l'estremo $B$ ha velocità $\sqrt{3g\ell}$.

::struttura{nodi="A,0,0;B,2.6,-1.5" aste="A-B" vincoli="A,cerniera,90" tratteggi="0,0 3,0" punti="1.3,-0.75,G,baricentro" forze="1.3 -0.75,0,-0.9,mg" etichette="0.85,-0.22,ϑ" titolo="L'asta scende dalla posizione orizzontale tratteggiata: il peso compie lavoro, la reazione della cerniera no"}
:::

## Urti

In un urto le forze in gioco hanno intensità molto grande per un intervallo di tempo molto breve, e conviene scrivere le equazioni cardinali in forma integrata.

:::definizione{#impulso titolo="Impulso e forze impulsive"}
L'**impulso** di una forza $\vec{F}$ nell'intervallo $[t_1, t_2]$ è
$$
\vec{J} = \int_{t_1}^{t_2} \vec{F}\,dt .
$$
Una forza si dice **impulsiva** quando agisce per un tempo $\tau$ molto breve con intensità tale che l'impulso resta finito al tendere di $\tau$ a zero. Nel modello dell'urto istantaneo le posizioni dei punti non cambiano durante l'urto e le forze ordinarie, come il peso, danno impulso trascurabile; le velocità invece cambiano di una quantità finita.
:::

:::teorema{#conservazione-negli-urti titolo="Quantità di moto e momento angolare in un urto"}
Si indicano con $\vec{Q}^-$, $\vec{K}_O^-$ i valori prima dell'urto e con $\vec{Q}^+$, $\vec{K}_O^+$ quelli dopo. Integrando le due equazioni cardinali sulla durata dell'urto si ottiene
$$
\begin{cases}
\vec{Q}^+ - \vec{Q}^- = \vec{J}^{(e)} \\[4pt]
\vec{K}_O^+ - \vec{K}_O^- = \vec{N}_O^{(e)}
\end{cases}
$$
dove $\vec{J}^{(e)}$ è l'impulso delle forze esterne impulsive e $\vec{N}_O^{(e)}$ il suo momento rispetto al polo fisso $O$. Se non agiscono forze esterne impulsive, la quantità di moto si conserva nell'urto; se l'unica forza esterna impulsiva è la reazione di una cerniera fissa in $A$, si conserva il momento angolare rispetto ad $A$, perché il momento di quella reazione rispetto ad $A$ è nullo.
:::

:::teorema{#urti-elastici-e-anelastici titolo="Urti elastici e anelastici"}
Un urto si dice **elastico** quando l'energia cinetica immediatamente prima e immediatamente dopo l'urto sono uguali, e **perfettamente anelastico** quando i due corpi, dopo l'urto, hanno la stessa velocità nel punto di contatto. Per due punti materiali di masse $m_1$ e $m_2$ che si urtano lungo la congiungente, con il secondo inizialmente fermo, la conservazione della quantità di moto e dell'energia cinetica danno
$$
v_1^+ = \frac{m_1 - m_2}{m_1 + m_2}\,v_1^- ,
\qquad
v_2^+ = \frac{2\,m_1}{m_1 + m_2}\,v_1^- ,
$$
mentre nell'urto perfettamente anelastico la velocità comune è $\dfrac{m_1\,v_1^-}{m_1 + m_2}$ e l'energia cinetica perduta vale $\dfrac{m_1\,m_2}{2\,(m_1 + m_2)}\,(v_1^-)^2$.
:::

:::esempio{titolo="Punto che si attacca a un'asta incernierata"}
Un punto materiale di massa $m$, che si muove orizzontalmente con velocità $v_0$, urta l'estremo $B$ di un'asta omogenea $AB$ di massa $3m$ e lunghezza $\ell$, incernierata in $A$ e ferma in posizione verticale, e vi resta attaccato. L'unica forza esterna impulsiva è la reazione della cerniera, il cui momento rispetto ad $A$ è nullo, perciò si conserva $K_A$. Prima dell'urto $K_A^- = m\,v_0\,\ell$; dopo l'urto il sistema ruota attorno ad $A$ con velocità angolare $\omega$ e momento d'inerzia $I_A = \dfrac{1}{3}\,(3m)\,\ell^2 + m\,\ell^2 = 2\,m\,\ell^2$, quindi $K_A^+ = 2\,m\,\ell^2\,\omega$. Dall'uguaglianza segue $\omega = \dfrac{v_0}{2\,\ell}$.

::struttura{nodi="A,0,3;B,0,0" aste="A-B" vincoli="A,cerniera,90" punti="-1.8,0,P,pieno;0,1.5,G,baricentro" frecce="-1.8,0,-0.35,0,v_0" titolo="Il punto $P$ si attacca all'estremo $B$: nell'urto si conserva il momento angolare rispetto alla cerniera $A$"}
:::
