---
titolo: "Geometria delle masse: baricentri e tensore d'inerzia"
sommario: Come si individua il centro di massa di un sistema materiale e come si costruisce il tensore d'inerzia, con il teorema di Huygens-Steiner, gli assi principali e i momenti d'inerzia dei corpi omogenei notevoli.
---

## Sistemi materiali e densità

:::definizione{#sistema-materiale titolo="Sistema materiale e densità"}
Un **sistema materiale** è un insieme di punti dotati di massa. Si distinguono due modelli.

Un **sistema discreto** è formato da $N$ punti $P_1, \dots, P_N$ di masse $m_1, \dots, m_N$; la massa totale è
$$
M = \sum_{i=1}^{N} m_i .
$$
Un **sistema continuo** occupa una regione $\mathcal{C}$ dello spazio, di una superficie o di una curva, e la sua massa è distribuita con una **densità**: la densità lineare $\lambda$ per un'asta o un filo, la densità superficiale $\sigma$ per una lamina, la densità di volume $\rho$ per un corpo tridimensionale. L'elemento di massa si scrive allora $dm = \lambda\,ds$, $dm = \sigma\,dA$ oppure $dm = \rho\,dV$, e la massa totale è
$$
M = \int_{\mathcal{C}} dm .
$$
Il sistema è **omogeneo** quando la densità è costante, e in quel caso la densità si ricava dalla massa e dalla misura della regione occupata: per una lamina di area $A$ si ha $\sigma = \dfrac{M}{A}$.

Tutte le somme scritte per i sistemi discreti si trasformano negli integrali corrispondenti sostituendo $m_i$ con $dm$ e il simbolo di somma con il simbolo di integrale, perciò nel seguito ogni grandezza viene definita nelle due forme.
:::

## Centro di massa

:::definizione{#centro-di-massa titolo="Centro di massa"}
Il **centro di massa**, detto anche **baricentro**, è il punto $G$ definito da
$$
G - O = \frac{1}{M} \sum_{i=1}^{N} m_i\,(P_i - O)
\qquad \text{oppure} \qquad
G - O = \frac{1}{M} \int_{\mathcal{C}} (P - O)\,dm ,
$$
dove $O$ è un punto scelto come origine. La posizione di $G$ non dipende da $O$: scelto un altro punto $O'$, dalla relazione $P_i - O' = (P_i - O) + (O - O')$ segue
$$
\frac{1}{M} \sum_i m_i\,(P_i - O') = (G - O) + (O - O') = G - O' ,
$$
quindi la definizione individua lo stesso punto $G$. Nel riferimento $(O; x, y, z)$ le coordinate di $G$ sono
$$
x_G = \frac{1}{M} \sum_i m_i\,x_i ,
\qquad
y_G = \frac{1}{M} \sum_i m_i\,y_i ,
\qquad
z_G = \frac{1}{M} \sum_i m_i\,z_i .
$$
Il centro di massa è il punto in cui si pensa concentrata la massa quando si studia il moto traslatorio del sistema, perché la prima equazione cardinale della dinamica lega la risultante delle forze esterne alla sua accelerazione. Tre punti di masse $m$, $m$ e $2m$ posti in $(0, 0)$, $(4\ell, 0)$ e $(2\ell, 3\ell)$ hanno massa totale $4m$ e baricentro
$$
x_G = \frac{m \cdot 0 + m \cdot 4\ell + 2m \cdot 2\ell}{4m} = 2\ell ,
\qquad
y_G = \frac{2m \cdot 3\ell}{4m} = \frac{3}{2}\,\ell .
$$

::struttura{punti="0,0,P_1;4,0,P_2;2,3,P_3;2,1.5,G,baricentro" etichette="-0.55,0.35,m;4.3,0.35,m;1.65,3.4,2m" tratteggi="0,0 4,0;4,0 2,3;2,3 0,0" frecce="-1,0,5.2,0,x;0,-0.8,0,4,y" riferimento=0 titolo="Tre punti materiali di masse $m$, $m$ e $2m$ e il loro centro di massa $G = \left(2\ell,\ \dfrac{3}{2}\ell\right)$"}

:::

::::teorema{#additivita titolo="Baricentro di un sistema composto"}
Sia il sistema diviso in due parti disgiunte, di masse $M_1$ e $M_2$ e baricentri $G_1$ e $G_2$. Allora il baricentro dell'insieme soddisfa
$$
G - O = \frac{M_1\,(G_1 - O) + M_2\,(G_2 - O)}{M_1 + M_2} ,
$$
cioè si ottiene trattando le due parti come due punti materiali collocati nei rispettivi baricentri. In particolare $G$ appartiene al segmento $G_1 G_2$ e lo divide in parti inversamente proporzionali alle masse. La proprietà si estende a un numero finito qualunque di parti, perciò il baricentro di una squadra di aste, di una lamina composta o di un corpo con un foro si calcola senza integrare, una volta noti i baricentri dei pezzi elementari. Due aste omogenee saldate ad angolo retto, la prima da $O$ ad $A = (2\ell, 0)$ di massa $2m$ e la seconda da $A$ a $B = (2\ell, \ell)$ di massa $m$, hanno baricentri parziali $G_1 = (\ell, 0)$ e $G_2 = \left(2\ell, \dfrac{\ell}{2}\right)$, quindi
$$
x_G = \frac{2m \cdot \ell + m \cdot 2\ell}{3m} = \frac{4}{3}\,\ell ,
\qquad
y_G = \frac{m \cdot \dfrac{\ell}{2}}{3m} = \frac{\ell}{6} .
$$

::struttura{nodi="O,0,0;A,2,0;B,2,1" aste="O-A;A-B" punti="1,0,G_1;2,0.5,G_2;1.333,0.167,G,baricentro" tratteggi="1,0 2,0.5" quote="O,A,2ℓ,-0.6;A,B,ℓ,0.75" riferimento=0 titolo="Il baricentro della squadra sta sul segmento $G_1 G_2$, più vicino a $G_1$ perché l'asta $OA$ ha massa maggiore"}

:::dimostrazione
Siano $\mathcal{C}_1$ e $\mathcal{C}_2$ le due parti. Poiché le parti sono disgiunte, la somma sull'intero sistema si spezza nella somma sulla prima parte più la somma sulla seconda:
$$
\begin{aligned}
(M_1 + M_2)\,(G - O) &= \sum_{P_i \in \mathcal{C}_1} m_i\,(P_i - O) + \sum_{P_i \in \mathcal{C}_2} m_i\,(P_i - O) \\[6pt]
&= M_1\,(G_1 - O) + M_2\,(G_2 - O) ,
\end{aligned}
$$
dove l'ultimo passaggio applica la definizione di centro di massa a ciascuna parte. Dividendo per $M_1 + M_2$ si ottiene la formula. Scegliendo poi $O = G_1$ si ricava $G - G_1 = \dfrac{M_2}{M_1 + M_2}\,(G_2 - G_1)$, quindi $G$ sta sul segmento $G_1 G_2$ e la sua distanza da $G_1$ sta alla lunghezza del segmento come $M_2$ sta alla massa totale.
:::
::::

::::teorema{#simmetria-materiale titolo="Simmetria materiale e centro di massa"}
Un piano $\pi$ è un **piano di simmetria materiale** del sistema quando la riflessione rispetto a $\pi$ manda il sistema in sé conservando le masse, cioè quando a ogni punto di massa $m$ corrisponde il punto riflesso con la stessa massa e, nel caso continuo, la densità assume valori uguali in punti riflessi. Se $\pi$ è un piano di simmetria materiale, allora $G \in \pi$. Di conseguenza, se il sistema ammette due piani di simmetria materiale, $G$ sta sulla loro retta d'intersezione, e se ne ammette tre non appartenenti a uno stesso fascio, $G$ è il loro punto comune. La simmetria è lo strumento più rapido per individuare il baricentro dei corpi notevoli: il centro di massa di una lamina rettangolare omogenea è il centro del rettangolo, quello di un disco o di una sfera omogenei è il centro geometrico.

:::dimostrazione
Si scelga il riferimento con l'origine $O$ su $\pi$ e con il piano $\pi$ coincidente con il piano $Oxy$, cosicché la riflessione cambia il segno della terza coordinata. I punti del sistema si raggruppano a coppie riflesse $(x_i, y_i, z_i)$ e $(x_i, y_i, -z_i)$ di massa uguale, mentre i punti eventualmente appartenenti a $\pi$ hanno $z_i = 0$. Nella somma $\sum_i m_i z_i$ i due termini di ogni coppia sono opposti e i termini dei punti di $\pi$ sono nulli, quindi $\sum_i m_i z_i = 0$ e perciò $z_G = 0$, cioè $G \in \pi$.
:::
::::

## Baricentri di aste, lamine, archi e solidi di rotazione

Le simmetrie bastano per i corpi più regolari; per il triangolo, il semidisco, il settore circolare e i solidi di rotazione il baricentro si calcola integrando.

:::richiamo{titolo="Integrali doppi e tripli"}
Per una funzione continua $f$ su una regione misurabile $D$ del piano, l'integrale doppio $\displaystyle\int_D f\,dA$ si calcola per strisce con le formule di riduzione, e in coordinate polari con $dA = r\,dr\,d\vartheta$. Per una regione $E$ dello spazio l'integrale triplo si calcola per fette o in coordinate cilindriche e sferiche, con $dV = r\,dr\,d\vartheta\,dz$ e $dV = r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi$. Si rimanda agli argomenti sugli integrali multipli di Analisi 2.
:::

::::teorema{#baricentri-lamine titolo="Baricentri di lamine e archi notevoli"}
Per i corpi omogenei valgono i risultati seguenti.

- Asta di lunghezza $\ell$: il baricentro è il punto medio.
- Lamina triangolare: il baricentro è l'intersezione delle mediane, che dista da ogni lato un terzo della relativa altezza. Per il triangolo di vertici $(0,0)$, $(b, 0)$ e $(0, h)$ risulta $G = \left(\dfrac{b}{3},\ \dfrac{h}{3}\right)$.
- Settore circolare di raggio $R$ e semiapertura $\alpha$, con la bisettrice sull'asse $x$ e il vertice nell'origine: $x_G = \dfrac{2R\sin\alpha}{3\alpha}$. Per $\alpha = \dfrac{\pi}{2}$ si ottiene il semidisco, con $x_G = \dfrac{4R}{3\pi}$.
- Arco di circonferenza di raggio $R$ e semiapertura $\alpha$, nella stessa posizione: $x_G = \dfrac{R\sin\alpha}{\alpha}$. Per la semicirconferenza $x_G = \dfrac{2R}{\pi}$.

I quattro risultati sono i mattoni con cui si trattano, per additività, le lamine composte e i telai di aste che compaiono negli esercizi.

::struttura{poligoni="0,0 3,0 0,4.5" punti="1,1.5,G,baricentro" linee="0,3 1,3" tratteggi="0,1.5 3.6,1.5" etichette="1.3,3.15,b(y);3.75,1.75,y_G" quote="0 0,3 0,b,0.75;0 4.5,0 0,h,0.9" frecce="-0.8,0,4.4,0,x;0,-0.8,0,5.4,y" riferimento=0 titolo="La striscia alla quota $y$ ha larghezza $b(y) = b\left(1 - \dfrac{y}{h}\right)$, quindi il baricentro del triangolo dista $\dfrac{h}{3}$ dalla base"}

:::dimostrazione
Per l'asta la simmetria materiale rispetto al piano ortogonale all'asta nel suo punto medio dà subito il risultato.

Per il triangolo di vertici $(0,0)$, $(b,0)$ e $(0,h)$ si integra per strisce orizzontali. La striscia alla quota $y$ ha larghezza $b(y) = b\left(1 - \dfrac{y}{h}\right)$ e area $b(y)\,dy$, e il suo baricentro ha ordinata $y$, quindi, con $A = \dfrac{bh}{2}$ e densità $\sigma$ costante,
$$
y_G = \frac{1}{A} \int_0^h y\,b\left(1 - \frac{y}{h}\right) dy = \frac{2}{bh} \cdot b\left(\frac{h^2}{2} - \frac{h^2}{3}\right) = \frac{h}{3} .
$$
Scambiando il ruolo degli assi si ottiene $x_G = \dfrac{b}{3}$. Poiché le due distanze dai cateti sono un terzo delle rispettive altezze, $G$ è il punto d'incontro delle mediane, e questa descrizione non dipende dal riferimento scelto.

Per il settore circolare si usano le coordinate polari. L'area è $A = \alpha R^2$ e
$$
x_G = \frac{1}{\alpha R^2} \int_{-\alpha}^{\alpha} \int_0^R r\cos\vartheta \cdot r\,dr\,d\vartheta = \frac{1}{\alpha R^2} \cdot \frac{R^3}{3} \cdot 2\sin\alpha = \frac{2R\sin\alpha}{3\alpha} .
$$
L'ordinata è nulla perché la bisettrice è asse di simmetria materiale.

Per l'arco di circonferenza la lunghezza è $L = 2\alpha R$ e l'elemento di linea è $ds = R\,d\vartheta$, quindi
$$
x_G = \frac{1}{2\alpha R} \int_{-\alpha}^{\alpha} R\cos\vartheta \cdot R\,d\vartheta = \frac{R\sin\alpha}{\alpha} .
$$
:::
::::

::::teorema{#baricentri-solidi titolo="Baricentri di solidi di rotazione"}
Per i corpi omogenei di rotazione il baricentro sta sull'asse di rotazione, perché ogni piano contenente l'asse è un piano di simmetria materiale. Rispetto alla base, e con l'asse di rotazione come asse $z$, valgono i valori seguenti.

- Cono circolare retto pieno di altezza $h$: $z_G = \dfrac{h}{4}$ dalla base, sul segmento che unisce il centro della base al vertice.
- Semisfera piena di raggio $R$: $z_G = \dfrac{3R}{8}$ dal centro del cerchio di base.
- Semisuperficie sferica di raggio $R$: $z_G = \dfrac{R}{2}$.

:::dimostrazione
Per il cono con la base nel piano $z = 0$ e il vertice in $z = h$, la fetta alla quota $z$ è un disco di raggio $R\left(1 - \dfrac{z}{h}\right)$, quindi, con $V = \dfrac{\pi R^2 h}{3}$,
$$
z_G = \frac{3}{\pi R^2 h} \int_0^h \pi R^2 \left(1 - \frac{z}{h}\right)^2 z\,dz = \frac{3}{h} \cdot \frac{h^2}{12} = \frac{h}{4} .
$$
Per la semisfera piena $z \ge 0$ si usano le coordinate sferiche, con $V = \dfrac{2\pi R^3}{3}$:
$$
z_G = \frac{3}{2\pi R^3} \int_0^{2\pi} \int_0^{\frac{\pi}{2}} \int_0^R r\cos\vartheta \cdot r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi = \frac{3}{2\pi R^3} \cdot 2\pi \cdot \frac{R^4}{4} \cdot \frac{1}{2} = \frac{3R}{8} .
$$
Per la semisuperficie sferica l'elemento di area è $dA = R^2 \sin\vartheta\,d\vartheta\,d\varphi$ e l'area totale è $2\pi R^2$, quindi un calcolo analogo dà $z_G = \dfrac{R}{2}$.
:::
::::

## Momenti d'inerzia, raggio d'inerzia e prodotti d'inerzia

Il baricentro esaurisce la descrizione del sistema finché il moto è traslatorio. Appena il sistema ruota conta anche *come* la massa è distribuita attorno all'asse di rotazione, e la grandezza che lo misura è il momento d'inerzia.

:::definizione{#momento-di-inerzia titolo="Momento d'inerzia rispetto a un asse e raggio d'inerzia"}
Sia $a$ una retta dello spazio e sia $d_i$ la distanza del punto $P_i$ da $a$. Il **momento d'inerzia** del sistema rispetto all'asse $a$ è
$$
I_a = \sum_{i=1}^{N} m_i\,d_i^2
\qquad \text{oppure} \qquad
I_a = \int_{\mathcal{C}} d^2\,dm ,
$$
e si misura in $\mathrm{kg\,m^2}$. Il **raggio d'inerzia** rispetto ad $a$ è la lunghezza $\rho_a$ definita da
$$
I_a = M\,\rho_a^2 ,
\qquad\text{cioè}\qquad
\rho_a = \sqrt{\frac{I_a}{M}} ,
$$
e rappresenta la distanza dall'asse alla quale si dovrebbe porre tutta la massa per avere lo stesso momento d'inerzia. Si scrive con il pedice dell'asse per distinguerlo dalla densità di volume.

Il momento d'inerzia compare nell'energia cinetica e nel momento angolare di un corpo che ruota, perciò due corpi di massa uguale ma con massa distribuita diversamente rispondono in modo diverso allo stesso momento applicato. Un anello omogeneo di massa $m$ e raggio $R$ ha tutti i punti a distanza $R$ dall'asse ortogonale al suo piano per il centro, quindi $I = mR^2$ e $\rho = R$; un disco omogeneo di uguale massa e raggio ha invece $I = \dfrac{1}{2}\,mR^2$, perché parte della massa sta più vicina all'asse.

::struttura{poligoni="1.2,0.4 4.4,0.2 5.2,2.6 3.4,4.2 1.5,3.4" punti="3.4,2.1,P,pieno;3.4,0,H" frecce="0,0,6,0,a" tratteggi="3.4,2.1 3.4,0" etichette="3.6,1.05,d" riferimento=0 titolo="Nel momento d'inerzia rispetto all'asse $a$ ogni elemento di massa pesa con il quadrato della sua distanza $d$ da $a$, misurata sulla perpendicolare $PH$"}

:::

:::definizione{#prodotti-di-inerzia titolo="Prodotti d'inerzia e momento d'inerzia rispetto a un punto"}
Nel riferimento $(O; x, y, z)$ i tre **momenti d'inerzia assiali** rispetto agli assi coordinati sono
$$
I_{xx} = \int (y^2 + z^2)\,dm ,
\qquad
I_{yy} = \int (x^2 + z^2)\,dm ,
\qquad
I_{zz} = \int (x^2 + y^2)\,dm ,
$$
perché la distanza di un punto dall'asse $x$ è $\sqrt{y^2 + z^2}$, e analogamente per gli altri due assi. I tre **prodotti d'inerzia** sono
$$
I_{xy} = \int xy\,dm ,
\qquad
I_{xz} = \int xz\,dm ,
\qquad
I_{yz} = \int yz\,dm .
$$
Questa è la convenzione adottata in tutta la materia, e con essa i prodotti d'inerzia compaiono nel tensore con il segno meno. I prodotti d'inerzia possono essere positivi, negativi o nulli, a differenza dei momenti assiali, che sono sempre positivi per un sistema non interamente contenuto nell'asse.

Il **momento d'inerzia rispetto al punto** $O$, detto anche momento d'inerzia polare, è
$$
I_O = \int |P - O|^2\,dm = \int (x^2 + y^2 + z^2)\,dm ,
$$
e sommando le tre espressioni dei momenti assiali si ottiene $I_{xx} + I_{yy} + I_{zz} = 2\,I_O$. L'uguaglianza serve da controllo rapido sui conti, perché lega fra loro tre quantità calcolate separatamente.
:::

## Il tensore d'inerzia

:::definizione{#tensore-di-inerzia titolo="Tensore d'inerzia"}
Il **tensore d'inerzia** relativo al polo $O$ è l'operatore lineare $\mathbb{I}_O$ che nella base $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ ha matrice
$$
\mathbb{I}_O =
\begin{pmatrix}
I_{xx} & -I_{xy} & -I_{xz} \\
-I_{xy} & I_{yy} & -I_{yz} \\
-I_{xz} & -I_{yz} & I_{zz}
\end{pmatrix}
=
\begin{pmatrix}
\displaystyle\int (y^2 + z^2)\,dm & -\displaystyle\int xy\,dm & -\displaystyle\int xz\,dm \\[8pt]
-\displaystyle\int xy\,dm & \displaystyle\int (x^2 + z^2)\,dm & -\displaystyle\int yz\,dm \\[8pt]
-\displaystyle\int xz\,dm & -\displaystyle\int yz\,dm & \displaystyle\int (x^2 + y^2)\,dm
\end{pmatrix} .
$$
La matrice è simmetrica e dipende dal polo $O$ e dalla terna scelta; la sua diagonale raccoglie i momenti d'inerzia rispetto ai tre assi coordinati e le posizioni fuori diagonale raccolgono i prodotti d'inerzia cambiati di segno.

Il tensore d'inerzia riassume in nove numeri, sei dei quali indipendenti, tutta l'informazione sulla distribuzione della massa che serve alla dinamica del corpo rigido: il momento angolare di un rigido con un punto fisso in $O$ è $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ e la sua energia cinetica è $T = \dfrac{1}{2}\,\vec{\omega} \cdot \mathbb{I}_O\,\vec{\omega}$, come si vedrà negli argomenti sulla dinamica dei sistemi e del corpo rigido. Per il sistema di tre punti di massa $m$ posti in $(\ell, \ell, 0)$, $(0, \ell, \ell)$ e $(\ell, 0, \ell)$ si ottiene
$$
\mathbb{I}_O = m\ell^2
\begin{pmatrix}
4 & -1 & -1 \\
-1 & 4 & -1 \\
-1 & -1 & 4
\end{pmatrix} .
$$
:::

::::teorema{#momento-rispetto-a-un-asse titolo="Momento d'inerzia rispetto a un asse per il polo"}
Sia $a$ la retta per $O$ di versore $\vec{u} = u_x\,\hat{\imath} + u_y\,\hat{\jmath} + u_z\,\hat{k}$. Allora
$$
I_a = \vec{u} \cdot \mathbb{I}_O\,\vec{u}
= I_{xx}u_x^2 + I_{yy}u_y^2 + I_{zz}u_z^2 - 2\,I_{xy}u_xu_y - 2\,I_{xz}u_xu_z - 2\,I_{yz}u_yu_z .
$$
Noto il tensore rispetto a un polo, il momento d'inerzia rispetto a ogni asse passante per quel polo si ottiene quindi con una moltiplicazione, senza ricalcolare alcun integrale. La forma quadratica $\vec{u} \mapsto \vec{u} \cdot \mathbb{I}_O\,\vec{u}$ è definita positiva, tranne nel caso in cui tutta la massa stia su una retta per $O$, perché assume il valore $I_a \ge 0$ e si annulla solo se tutti i punti hanno distanza nulla dall'asse di versore $\vec{u}$.

:::dimostrazione
La distanza di un punto $P$ dalla retta per $O$ di versore $\vec{u}$ è il modulo della componente di $P - O$ ortogonale a $\vec{u}$, quindi, posto $\vec{r} = P - O$,
$$
d^2 = |\vec{r}|^2 - (\vec{r} \cdot \vec{u})^2 .
$$
Poiché $|\vec{u}| = 1$, si può scrivere $|\vec{r}|^2 = |\vec{r}|^2 (u_x^2 + u_y^2 + u_z^2)$, e sviluppando anche il secondo addendo si ottiene
$$
\begin{aligned}
d^2 &= (x^2 + y^2 + z^2)(u_x^2 + u_y^2 + u_z^2) - (x u_x + y u_y + z u_z)^2 \\[6pt]
&= (y^2 + z^2)u_x^2 + (x^2 + z^2)u_y^2 + (x^2 + y^2)u_z^2 - 2xy\,u_xu_y - 2xz\,u_xu_z - 2yz\,u_yu_z .
\end{aligned}
$$
Moltiplicando per $dm$ e integrando su $\mathcal{C}$, i sei integrali che compaiono sono per definizione $I_{xx}$, $I_{yy}$, $I_{zz}$, $I_{xy}$, $I_{xz}$ e $I_{yz}$, perciò si ottiene l'espressione dell'enunciato, che è esattamente il prodotto $\vec{u} \cdot \mathbb{I}_O\,\vec{u}$ scritto in componenti.
:::
::::

:::osservazione{#sistemi-piani titolo="Sistemi piani"}
Se tutta la massa sta nel piano $Oxy$, allora $z = 0$ per ogni punto, quindi $I_{xz} = I_{yz} = 0$ e
$$
I_{zz} = I_{xx} + I_{yy} .
$$
Il tensore è perciò a blocchi: l'asse $z$ è automaticamente un asse principale e il problema si riduce alla matrice $2 \times 2$ dei momenti e del prodotto d'inerzia nel piano. Questa è la situazione di quasi tutti gli esercizi di esame, nei quali il sistema è formato da aste, lamine e dischi complanari. La relazione $I_{zz} = I_{xx} + I_{yy}$ si usa anche come verifica: per una lamina rettangolare omogenea di lati $a$ e $b$ e massa $m$, dai valori $I_{xx} = \dfrac{mb^2}{12}$ e $I_{yy} = \dfrac{ma^2}{12}$ rispetto agli assi baricentrici paralleli ai lati segue $I_{zz} = \dfrac{m(a^2 + b^2)}{12}$.
:::

:::esempio{titolo="Tensore d'inerzia di una lamina rettangolare in un vertice"}
Sia la lamina omogenea di massa $m$ il rettangolo $[0, a] \times [0, b]$ del piano $Oxy$, con densità $\sigma = \dfrac{m}{ab}$. Allora
$$
I_{xx} = \sigma \int_0^a \int_0^b y^2\,dy\,dx = \frac{m}{ab} \cdot a \cdot \frac{b^3}{3} = \frac{mb^2}{3} ,
\qquad
I_{yy} = \frac{ma^2}{3} ,
$$
$$
I_{xy} = \sigma \int_0^a \int_0^b xy\,dy\,dx = \frac{m}{ab} \cdot \frac{a^2}{2} \cdot \frac{b^2}{2} = \frac{mab}{4} ,
$$
quindi, poiché $I_{zz} = I_{xx} + I_{yy}$,
$$
\mathbb{I}_O = \frac{m}{12}
\begin{pmatrix}
4b^2 & -3ab & 0 \\
-3ab & 4a^2 & 0 \\
0 & 0 & 4(a^2 + b^2)
\end{pmatrix} .
$$
Il prodotto d'inerzia è positivo perché la lamina sta nel primo quadrante, dove $xy > 0$.
:::

## Il teorema di Huygens-Steiner

::::teorema{#huygens-steiner titolo="Teorema di Huygens-Steiner"}
Siano $a$ una retta e $a_G$ la retta parallela ad $a$ passante per il baricentro $G$, e sia $d$ la distanza fra le due rette. Allora
$$
I_a = I_{a_G} + M\,d^2 .
$$
Fra tutte le rette di una direzione assegnata, quella baricentrica dà perciò il momento d'inerzia minimo, e il momento d'inerzia rispetto a una retta qualunque si ottiene da quello baricentrico aggiungendo il termine di trasporto $Md^2$. Il teorema è lo strumento con cui si passa dai valori tabulati, sempre riferiti ad assi baricentrici, agli assi che compaiono nel problema: un'asta omogenea di massa $m$ e lunghezza $\ell$ ha $I_{a_G} = \dfrac{m\ell^2}{12}$ rispetto all'asse ortogonale per il punto medio, quindi rispetto all'asse parallelo per un estremo, che dista $d = \dfrac{\ell}{2}$, risulta
$$
I = \frac{m\ell^2}{12} + m\,\frac{\ell^2}{4} = \frac{m\ell^2}{3} .
$$

::struttura{poligoni="1.3,0.5 4.6,0.3 5.4,2.8 3.5,4.3 1.6,3.5" punti="3.3,2.2,G,baricentro" frecce="0,0,6.2,0,a" tratteggi="0,2.2 6.2,2.2;3.3,2.2 3.3,0" etichette="6.1,2.6,a_G;3.5,1.05,d" riferimento=0 titolo="Le rette $a$ e $a_G$ sono parallele e distano $d$, quindi $I_a = I_{a_G} + M d^2$"}

:::dimostrazione
Si scelga il riferimento con l'origine in $G$, con l'asse $z$ parallelo alle due rette e con l'asse $x$ diretto da $G$ verso la retta $a$, cosicché $a$ è la retta di equazioni $x = d$, $y = 0$. La distanza di un punto $P = (x, y, z)$ dalla retta $a$ soddisfa
$$
d_a^2 = (x - d)^2 + y^2 = (x^2 + y^2) - 2dx + d^2 ,
$$
mentre la sua distanza dall'asse $z$, cioè da $a_G$, soddisfa $d_{a_G}^2 = x^2 + y^2$. Moltiplicando per $dm$ e integrando si ottiene
$$
I_a = I_{a_G} - 2d \int x\,dm + M d^2 .
$$
L'origine è il baricentro, quindi $\displaystyle\int x\,dm = M x_G = 0$ e il termine intermedio è nullo. Ne segue $I_a = I_{a_G} + M d^2$.
:::
::::

:::teorema{#steiner-prodotti titolo="Trasporto dei prodotti d'inerzia"}
Siano $(G; x, y, z)$ e $(O; x, y, z)$ due riferimenti con gli assi paralleli e con l'origine rispettivamente nel baricentro e in un punto $O$, e siano $x_G$, $y_G$, $z_G$ le coordinate di $G$ nel riferimento di polo $O$. Allora
$$
I_{xy}^{(O)} = I_{xy}^{(G)} + M\,x_G\,y_G ,
$$
e analogamente per $I_{xz}$ e $I_{yz}$. La formula segue dallo sviluppo $x^{(O)} = x^{(G)} + x_G$ e dall'annullarsi degli integrali $\displaystyle\int x^{(G)}\,dm$ e $\displaystyle\int y^{(G)}\,dm$, con lo stesso passaggio della dimostrazione precedente. Insieme al teorema di Huygens-Steiner essa permette di trasportare l'intero tensore d'inerzia dal baricentro a qualunque altro polo. Per la lamina rettangolare $[0,a] \times [0,b]$ si verifica così il valore già calcolato: dagli assi baricentrici, dove $I_{xy}^{(G)} = 0$ per simmetria, segue $I_{xy}^{(O)} = m \cdot \dfrac{a}{2} \cdot \dfrac{b}{2} = \dfrac{mab}{4}$.
:::

:::attenzione
Il teorema di Huygens-Steiner confronta una retta con la retta parallela **baricentrica**, e non due rette parallele qualunque. Per un'asta omogenea di massa $m$ e lunghezza $\ell$ il momento d'inerzia rispetto all'asse ortogonale per un estremo è $\dfrac{m\ell^2}{3}$; l'asse parallelo per l'altro estremo dista $\ell$ dal primo, ma sommando $m\ell^2$ si otterrebbe $\dfrac{4m\ell^2}{3}$, mentre il valore vero è ancora $\dfrac{m\ell^2}{3}$ per simmetria. Il trasporto si esegue perciò in due passi, prima dall'asse dato a quello baricentrico e poi da quello baricentrico all'asse cercato.
:::

## Assi e momenti principali d'inerzia

:::definizione{#assi-principali titolo="Assi e momenti principali d'inerzia"}
Una retta per $O$ di versore $\vec{u}$ è un **asse principale d'inerzia** relativo al polo $O$ quando $\vec{u}$ è autovettore del tensore, cioè quando
$$
\mathbb{I}_O\,\vec{u} = I\,\vec{u}
$$
per un numero $I$, che si chiama **momento principale d'inerzia** e coincide con $I_a = \vec{u} \cdot \mathbb{I}_O\,\vec{u}$. Una terna ortogonale di assi principali relativi a $O$ si dice **terna principale d'inerzia**; se $O = G$ si parla di **terna centrale d'inerzia**. Nella terna principale $\xi$, $\eta$, $\zeta$ i prodotti d'inerzia sono nulli e la matrice è diagonale,
$$
\mathbb{I}_O =
\begin{pmatrix}
A & 0 & 0 \\
0 & B & 0 \\
0 & 0 & C
\end{pmatrix} ,
$$
con $A$, $B$, $C$ momenti principali. In una terna principale il momento angolare $\vec{K}_O = \mathbb{I}_O\,\vec{\omega}$ ha componenti $A\omega_\xi$, $B\omega_\eta$, $C\omega_\zeta$ e l'energia cinetica di rotazione diventa una somma di tre termini, perciò le equazioni di Eulero della dinamica del rigido si scrivono in questa terna.
:::

:::richiamo{titolo="Teorema spettrale"}
Una matrice reale simmetrica $n \times n$ ammette $n$ autovalori reali, contati con la molteplicità, ed esiste una base ortonormale di $\mathbb{R}^n$ formata da suoi autovettori; autovettori relativi ad autovalori distinti sono ortogonali. Si rimanda all'argomento sulla diagonalizzazione di Algebra lineare.
:::

::::teorema{#esistenza-terna-principale titolo="Esistenza della terna principale d'inerzia"}
Per ogni polo $O$ esiste una terna ortogonale di assi principali d'inerzia relativi a $O$, e i tre momenti principali sono reali e non negativi. Di conseguenza, per ogni sistema materiale e per ogni polo si può scegliere una terna in cui il tensore è diagonale, e in essa il momento d'inerzia rispetto all'asse di versore $\vec{u} = (u_\xi, u_\eta, u_\zeta)$ si riduce a
$$
I_a = A\,u_\xi^2 + B\,u_\eta^2 + C\,u_\zeta^2 .
$$

:::dimostrazione
La matrice di $\mathbb{I}_O$ è reale e simmetrica, poiché $I_{xy} = I_{yx}$ e analogamente per gli altri prodotti d'inerzia. Per il teorema spettrale esiste allora una base ortonormale $\vec{e}_1$, $\vec{e}_2$, $\vec{e}_3$ di autovettori, e le tre rette per $O$ di quelle direzioni sono assi principali per definizione. Ciascun autovalore vale $I_j = \vec{e}_j \cdot \mathbb{I}_O\,\vec{e}_j$, che è il momento d'inerzia rispetto al corrispondente asse, quindi è reale e non negativo.
:::
::::

::::teorema{#assi-principali-per-simmetria titolo="Assi principali per simmetria materiale"}
Sia $\pi$ un piano di simmetria materiale del sistema e sia $O \in \pi$. Allora la retta per $O$ ortogonale a $\pi$ è un asse principale d'inerzia relativo a $O$. In particolare, se il sistema ammette un asse di simmetria materiale, quella retta è principale rispetto a ciascuno dei suoi punti, e per un sistema piano contenuto in $Oxy$ ogni retta del piano che sia asse di simmetria materiale è principale rispetto a ogni suo punto.

Il teorema fa risparmiare l'intero calcolo degli autovettori: per la lamina rettangolare omogenea gli assi baricentrici paralleli ai lati sono principali, perché i due piani ortogonali alla lamina che li contengono sono piani di simmetria materiale, e per un disco omogeneo ogni diametro è principale rispetto al centro.

::struttura{poligoni="-2.4,-1.6 2.4,-1.6 2.4,1.6 -2.4,1.6" punti="1.2,0.8,P;-1.2,0.8,P′" tratteggi="-1.2,0.8 1.2,0.8" frecce="-3.2,0,3.4,0,x;0,-2.3,0,2.5,y" riferimento=0 titolo="A ogni punto $P = (x, y)$ corrisponde il punto riflesso $P' = (-x, y)$ con la stessa massa, quindi $I_{xy} = 0$ e gli assi $x$ e $y$ sono principali"}

:::dimostrazione
Si scelga il riferimento con l'origine in $O$ e con $\pi$ coincidente con il piano $Oxy$, cosicché l'asse $z$ è ortogonale a $\pi$ e la riflessione rispetto a $\pi$ manda $(x, y, z)$ in $(x, y, -z)$. Per l'ipotesi di simmetria materiale i punti si raggruppano in coppie riflesse di massa uguale, e i termini $xz$ e $yz$ delle due masse di ogni coppia sono opposti, mentre si annullano per i punti con $z = 0$. Ne segue
$$
I_{xz} = \int xz\,dm = 0 ,
\qquad
I_{yz} = \int yz\,dm = 0 ,
$$
quindi la terza colonna della matrice è $(0, 0, I_{zz})$ e perciò $\mathbb{I}_O\,\hat{k} = I_{zz}\,\hat{k}$. Il versore $\hat{k}$ è allora autovettore e la retta per $O$ ortogonale a $\pi$ è un asse principale.
:::
::::

:::osservazione{#ellissoide-di-inerzia titolo="Ellissoide d'inerzia"}
Il luogo dei punti $P$ tali che, posto $\vec{r} = P - O$, risulti $\vec{r} \cdot \mathbb{I}_O\,\vec{r} = 1$ è una quadrica detta **ellissoide d'inerzia** relativo al polo $O$. Poiché la forma quadratica è definita positiva per un sistema non contenuto in una retta per $O$, la quadrica è un ellissoide, e dal teorema sull'esistenza della terna principale segue che i suoi assi di simmetria sono gli assi principali d'inerzia, con semiassi $\dfrac{1}{\sqrt{A}}$, $\dfrac{1}{\sqrt{B}}$, $\dfrac{1}{\sqrt{C}}$. La distanza del centro $O$ dal punto dell'ellissoide nella direzione $\vec{u}$ vale $\dfrac{1}{\sqrt{I_a}}$, quindi l'ellissoide rappresenta la distribuzione dei momenti d'inerzia attorno a $O$: è schiacciato nelle direzioni di momento d'inerzia grande e allungato in quelle di momento d'inerzia piccolo.
:::

## Momenti d'inerzia dei corpi omogenei notevoli

::::teorema{#momenti-notevoli titolo="Momenti d'inerzia di corpi omogenei"}
Per i corpi omogenei di massa $m$ valgono i valori seguenti, tutti riferiti ad assi baricentrici.

- Asta di lunghezza $\ell$, asse ortogonale all'asta: $I = \dfrac{m\ell^2}{12}$; rispetto all'asse ortogonale per un estremo, $I = \dfrac{m\ell^2}{3}$.
- Anello, cioè circonferenza materiale, di raggio $R$: $I = mR^2$ rispetto all'asse ortogonale al piano per il centro, $I = \dfrac{mR^2}{2}$ rispetto a un diametro.
- Disco di raggio $R$: $I = \dfrac{mR^2}{2}$ rispetto all'asse ortogonale al piano per il centro, $I = \dfrac{mR^2}{4}$ rispetto a un diametro.
- Lamina rettangolare di lati $a$ e $b$: $I = \dfrac{mb^2}{12}$ rispetto all'asse parallelo al lato $a$, $I = \dfrac{m(a^2 + b^2)}{12}$ rispetto all'asse ortogonale alla lamina.
- Sfera piena di raggio $R$: $I = \dfrac{2mR^2}{5}$ rispetto a un diametro. Superficie sferica di raggio $R$: $I = \dfrac{2mR^2}{3}$.
- Cilindro pieno di raggio $R$ e altezza $h$: $I = \dfrac{mR^2}{2}$ rispetto al proprio asse, $I = \dfrac{m(3R^2 + h^2)}{12}$ rispetto all'asse baricentrico ortogonale a quello.

Questi valori, uniti al teorema di Huygens-Steiner e all'additività, coprono tutti i sistemi degli esercizi.

::struttura{poligoni="8.8,-0.12 11.2,-0.12 11.2,1.68 8.8,1.68" cerchi="3.4,0.8,1.2;6.6,0.8,1.2;6.6,0.8,0.95,foro;14.2,0.8,1.1" linee="-0.6,0.8 1.6,0.8" punti="0.5,0.8,G,baricentro;3.4,0.8,G,baricentro;6.6,0.8,G,baricentro;10,0.78,G,baricentro;14.2,0.8,G,baricentro" frecce="0.5,-0.9,0.5,2.5,z;3.4,-0.9,3.4,2.5,z;6.6,-0.9,6.6,2.5,z;10,-0.9,10,2.5,z;14.2,-0.9,14.2,2.5,z" etichette="0.3,-2.2,asta;3.2,-2.2,disco;6.4,-2.2,anello;9.8,-2.2,lamina;14.1,-2.2,sfera" quote="-0.6 0.8,1.6 0.8,ℓ,0.75;3.4 0.8,4.6 0.8,R,1.65;8.8 -0.12,11.2 -0.12,a,0.6;11.2 -0.12,11.2 1.68,b,0.6" riferimento=0 titolo="I corpi notevoli con l'asse baricentrico $z$ ortogonale al foglio per l'asta, il disco, l'anello e la lamina, e con un diametro per la sfera"}

:::dimostrazione
Per l'asta di densità $\lambda = \dfrac{m}{\ell}$ disposta sull'asse $x$ fra $-\dfrac{\ell}{2}$ e $\dfrac{\ell}{2}$, il momento rispetto all'asse $z$ per il punto medio è
$$
I = \int_{-\frac{\ell}{2}}^{\frac{\ell}{2}} \frac{m}{\ell}\,x^2\,dx = \frac{m}{\ell} \cdot \frac{\ell^3}{12} = \frac{m\ell^2}{12} ,
$$
e il valore per l'asse per un estremo segue dal teorema di Huygens-Steiner con $d = \dfrac{\ell}{2}$.

Per il disco di densità $\sigma = \dfrac{m}{\pi R^2}$, in coordinate polari,
$$
I_{zz} = \int_0^{2\pi} \int_0^R \sigma\,r^2 \cdot r\,dr\,d\vartheta = \frac{m}{\pi R^2} \cdot 2\pi \cdot \frac{R^4}{4} = \frac{mR^2}{2} .
$$
Il disco è un sistema piano con due diametri ortogonali che sono assi di simmetria materiale, quindi $I_{xx} = I_{yy}$; poiché $I_{zz} = I_{xx} + I_{yy}$, ciascun momento rispetto a un diametro vale $\dfrac{mR^2}{4}$. Per l'anello tutti i punti distano $R$ dall'asse $z$, perciò $I_{zz} = mR^2$ e con lo stesso argomento il momento rispetto a un diametro vale $\dfrac{mR^2}{2}$.

Per la sfera piena di densità $\rho = \dfrac{3m}{4\pi R^3}$, in coordinate sferiche la distanza dall'asse $z$ è $r\sin\vartheta$, quindi
$$
I_{zz} = \int_0^{2\pi} \int_0^{\pi} \int_0^R \rho\,(r\sin\vartheta)^2\,r^2 \sin\vartheta\,dr\,d\vartheta\,d\varphi = \frac{3m}{4\pi R^3} \cdot 2\pi \cdot \frac{R^5}{5} \cdot \frac{4}{3} = \frac{2mR^2}{5} .
$$
I valori della lamina rettangolare, del cilindro e della superficie sferica si ottengono con integrali analoghi.
:::
::::

## Sistemi composti e corpi con fori

:::osservazione{#corpi-con-fori titolo="Corpi composti e corpi forati"}
Il momento d'inerzia è additivo, perché è una somma o un integrale esteso al sistema: il momento d'inerzia di un sistema formato da più parti, rispetto a uno stesso asse, è la somma dei momenti d'inerzia delle parti rispetto a quell'asse. Lo stesso vale per i prodotti d'inerzia e quindi per il tensore, purché tutte le parti siano riferite allo stesso polo e alla stessa terna.

Un corpo omogeneo con un foro si tratta come differenza di due corpi pieni: il corpo pieno che occupa tutta la regione esterna, e il corpo che occupa il foro, entrambi con la densità del corpo dato. Le masse dei due corpi fittizi si ricavano dalla densità, e non dalla massa $m$ del corpo forato, perciò il primo passo è sempre il calcolo di $\sigma$ oppure $\rho$. Per un disco omogeneo di raggio $R$ e massa $m$ con un foro circolare di raggio $\dfrac{R}{2}$ centrato a distanza $\dfrac{R}{2}$ dal centro $O$ risulta
$$
\sigma = \frac{m}{\pi R^2 - \pi \dfrac{R^2}{4}} = \frac{4m}{3\pi R^2} ,
\qquad
m_1 = \sigma\,\pi R^2 = \frac{4m}{3} ,
\qquad
m_2 = \sigma\,\pi \frac{R^2}{4} = \frac{m}{3} ,
$$
e il momento d'inerzia rispetto all'asse ortogonale al piano per $O$ vale
$$
I_O = \frac{1}{2}\,m_1 R^2 - \left( \frac{1}{2}\,m_2 \frac{R^2}{4} + m_2 \frac{R^2}{4} \right) = \frac{2mR^2}{3} - \frac{mR^2}{8} = \frac{13\,mR^2}{24} ,
$$
dove il momento del disco mancante è stato trasportato dal suo centro a $O$ con il teorema di Huygens-Steiner.

::struttura{cerchi="0,0,2.2;1.1,0,1.1,foro" punti="0,0,O;1.1,0,C_2;-0.367,0,G,baricentro" quote="0 0,1.1 0,d,-1.4;0 0,2.2 0,R,-2.2" riferimento=0 titolo="Disco forato: il foro ha raggio $\dfrac{R}{2}$ e centro $C_2$ a distanza $d = \dfrac{R}{2}$ da $O$, quindi il baricentro $G$ si sposta dalla parte opposta al foro"}

:::
