---
titolo: Grandezze fisiche, unità di misura e vettori
sommario: Come si misura una grandezza fisica nel Sistema Internazionale, come si controllano formule e risultati con l'analisi dimensionale e le cifre significative, e come si opera con i vettori che descrivono spostamenti, forze, lavoro e momenti.
---

## Grandezze fisiche e misura

:::definizione{#grandezza-fisica titolo="Grandezza fisica"}
Una **grandezza fisica** è una proprietà di un corpo o di un fenomeno che si può misurare, cioè confrontare con un campione della stessa specie scelto come **unità di misura**. La misura è il numero che esprime quante volte l'unità è contenuta nella grandezza, e il valore della grandezza si scrive come prodotto di quel numero per l'unità:
$$
\ell = 2{,}5\,\mathrm{m}
\quad\text{significa}\quad
\ell = 2{,}5 \cdot (1\,\mathrm{m}) .
$$
Il numero dipende dall'unità scelta, perché la stessa lunghezza vale $2{,}5$ in metri e $250$ in centimetri. Per questo un risultato numerico in fisica è completo *solo* quando è accompagnato dall'unità di misura.
:::

:::definizione{#grandezze-fondamentali-e-derivate titolo="Grandezze fondamentali e derivate"}
Le **grandezze fondamentali** (o di base) sono un piccolo insieme di grandezze scelte come indipendenti, ciascuna con una propria unità definita in modo autonomo. Le **grandezze derivate** si definiscono a partire da quelle fondamentali mediante una relazione matematica, e la loro unità si ricava dalla stessa relazione. La velocità media è il rapporto tra uno spostamento e un intervallo di tempo, $v = \dfrac{\Delta x}{\Delta t}$, quindi si misura in metri al secondo, $\mathrm{m/s}$; l'area di un rettangolo è il prodotto di due lunghezze, quindi si misura in $\mathrm{m^2}$.
:::

## Il Sistema Internazionale

:::definizione{#sistema-internazionale titolo="Sistema Internazionale di unità"}
Il **Sistema Internazionale** (SI) fissa sette grandezze fondamentali e le relative unità.

| Grandezza | Unità | Simbolo |
|---|---|---|
| lunghezza | metro | $\mathrm{m}$ |
| massa | chilogrammo | $\mathrm{kg}$ |
| tempo | secondo | $\mathrm{s}$ |
| intensità di corrente elettrica | ampere | $\mathrm{A}$ |
| temperatura termodinamica | kelvin | $\mathrm{K}$ |
| quantità di sostanza | mole | $\mathrm{mol}$ |
| intensità luminosa | candela | $\mathrm{cd}$ |

Dal 2019 ogni unità di base è definita fissando il valore esatto di una costante di natura: il secondo dalla frequenza di una transizione dell'atomo di cesio 133, il metro dalla velocità della luce nel vuoto, $c = 299\,792\,458\,\mathrm{m/s}$, il chilogrammo dalla costante di Planck. In meccanica bastano metro, chilogrammo e secondo; il kelvin e la mole compaiono in termodinamica.

Alcune unità derivate hanno un nome proprio: il newton per la forza, $1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2}$, il joule per il lavoro e l'energia, $1\,\mathrm{J} = 1\,\mathrm{N\cdot m}$, il watt per la potenza, $1\,\mathrm{W} = 1\,\mathrm{J/s}$, e il pascal per la pressione, $1\,\mathrm{Pa} = 1\,\mathrm{N/m^2}$. Ciascuna si può sempre riscrivere in termini di unità di base; per esempio $1\,\mathrm{J} = 1\,\mathrm{kg\cdot m^2/s^2}$.
:::

:::definizione{#multipli-e-sottomultipli titolo="Multipli e sottomultipli"}
Per esprimere valori molto grandi o molto piccoli si antepone al simbolo dell'unità un **prefisso**, che moltiplica l'unità per una potenza di dieci.

| Prefisso | Simbolo | Fattore |
|---|---|---|
| tera | $\mathrm{T}$ | $10^{12}$ |
| giga | $\mathrm{G}$ | $10^{9}$ |
| mega | $\mathrm{M}$ | $10^{6}$ |
| kilo | $\mathrm{k}$ | $10^{3}$ |
| centi | $\mathrm{c}$ | $10^{-2}$ |
| milli | $\mathrm{m}$ | $10^{-3}$ |
| micro | $\mu$ | $10^{-6}$ |
| nano | $\mathrm{n}$ | $10^{-9}$ |
| pico | $\mathrm{p}$ | $10^{-12}$ |

Il prefisso forma un tutt'uno con il simbolo, quindi un esponente si applica anche al prefisso: $1\,\mathrm{cm^2} = (10^{-2}\,\mathrm{m})^2 = 10^{-4}\,\mathrm{m^2}$ e $1\,\mathrm{cm^3} = 10^{-6}\,\mathrm{m^3}$. Per la massa i prefissi si applicano al grammo, poiché il chilogrammo contiene già il prefisso kilo: $1\,\mathrm{mg} = 10^{-3}\,\mathrm{g} = 10^{-6}\,\mathrm{kg}$.
:::

:::osservazione{#conversione-di-unita titolo="Conversione di unità"}
Per cambiare unità si sostituisce a ogni unità il suo valore nella nuova unità e si semplifica come in un prodotto di numeri. Per una velocità di $90\,\mathrm{km/h}$, poiché $1\,\mathrm{km} = 1000\,\mathrm{m}$ e $1\,\mathrm{h} = 3600\,\mathrm{s}$, si ottiene
$$
90\,\frac{\mathrm{km}}{\mathrm{h}} = 90 \cdot \frac{1000\,\mathrm{m}}{3600\,\mathrm{s}} = 25\,\mathrm{m/s} .
$$
Il rapporto $\dfrac{3600}{1000}$ vale $3{,}6$, perciò da $\mathrm{km/h}$ a $\mathrm{m/s}$ si passa dividendo per $3{,}6$, e nel verso opposto moltiplicando per $3{,}6$. Quando un'unità compare elevata a potenza, il fattore di conversione va elevato alla stessa potenza; una densità di $1\,\mathrm{g/cm^3}$ vale quindi
$$
1\,\frac{\mathrm{g}}{\mathrm{cm^3}} = \frac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}} = 10^{3}\,\mathrm{kg/m^3} .
$$
:::

## Analisi dimensionale

:::definizione{#dimensioni titolo="Dimensioni di una grandezza"}
Le **dimensioni** di una grandezza indicano come essa dipende dalle grandezze fondamentali, indipendentemente dalle unità scelte. In meccanica si indicano con $[L]$ la lunghezza, con $[M]$ la massa e con $[T]$ il tempo, e le dimensioni di una grandezza $G$ si scrivono $[G] = [L^{a} M^{b} T^{c}]$, con esponenti ricavati dalla definizione di $G$. Per esempio
$$
[v] = \frac{[L]}{[T]} = [L\,T^{-1}],
\qquad
[a] = [L\,T^{-2}],
\qquad
[F] = [m]\,[a] = [M\,L\,T^{-2}] .
$$
Una grandezza con tutti gli esponenti nulli si dice **adimensionale**, e si scrive $[1]$. Sono adimensionali i numeri puri, come $2$ o $\pi$, e gli angoli in radianti, perché un angolo in radianti è il rapporto tra la lunghezza di un arco e il raggio.
:::

:::teorema{#omogeneita-dimensionale titolo="Principio di omogeneità dimensionale"}
È il principio a cui deve soddisfare ogni relazione fisica corretta:

- i due membri di un'uguaglianza hanno le stesse dimensioni;
- si sommano o si sottraggono solo termini con le stesse dimensioni;
- l'argomento di funzioni come $\sin$, $\cos$, $\exp$ e $\ln$ è adimensionale.

Il principio segue dalla definizione di misura, perché un'uguaglianza tra grandezze resta vera cambiando le unità *solo se* ogni termine si trasforma con lo stesso fattore. L'argomento di $\exp$ deve essere adimensionale perché $e^{x} = 1 + x + \dfrac{x^2}{2} + \dots$ somma potenze diverse di $x$. Il principio serve a controllare una formula prima di usarla. Una formula non omogenea è certamente errata, mentre una formula omogenea può ancora contenere un coefficiente numerico sbagliato. Nella legge oraria $x = x_0 + v_0 t + \dfrac{1}{2} a t^2$ ogni termine ha dimensione $[L]$, poiché $[v_0 t] = [L\,T^{-1}]\,[T] = [L]$ e $[a t^2] = [L\,T^{-2}]\,[T^2] = [L]$.
:::

:::esempio{titolo="Periodo del pendolo dall'analisi dimensionale"}
Si suppone che il periodo $T$ delle piccole oscillazioni di un pendolo dipenda solo dalla lunghezza $\ell$ del filo, dalla massa $m$ e da $g$, nella forma $T = k\,\ell^{\alpha} m^{\beta} g^{\gamma}$ con $k$ adimensionale. Le dimensioni dei due membri sono
$$
[T] = [L]^{\alpha}\,[M]^{\beta}\,[L\,T^{-2}]^{\gamma} = [L^{\alpha + \gamma}\, M^{\beta}\, T^{-2\gamma}] ,
$$
e uguagliando gli esponenti di $[L]$, $[M]$ e $[T]$ si ottiene il sistema
$$
\begin{cases}
\alpha + \gamma = 0 \\[4pt]
\beta = 0 \\[4pt]
-2\gamma = 1
\end{cases}
$$
quindi $\gamma = -\dfrac{1}{2}$, $\alpha = \dfrac{1}{2}$, $\beta = 0$ e
$$
T = k\,\sqrt{\frac{\ell}{g}} .
$$
Il periodo **non dipende dalla massa**. L'analisi dimensionale non fornisce la costante $k$, che vale $2\pi$ come si ricava nell'argomento sulle oscillazioni e il moto armonico.
:::

## Notazione scientifica e cifre significative

:::definizione{#notazione-scientifica titolo="Notazione scientifica"}
Un numero è scritto in **notazione scientifica** quando ha la forma $a \cdot 10^{n}$, con $1 \leq |a| < 10$ e $n$ intero. La massa della Terra è circa $5{,}97 \cdot 10^{24}\,\mathrm{kg}$, il raggio dell'atomo di idrogeno nel modello di Bohr circa $5{,}3 \cdot 10^{-11}\,\mathrm{m}$. In questa forma prodotti e quozienti si calcolano separando i coefficienti dalle potenze di dieci:
$$
(3{,}0 \cdot 10^{8}) \cdot (2{,}0 \cdot 10^{-3}) = 6{,}0 \cdot 10^{5},
\qquad
\frac{6{,}0 \cdot 10^{5}}{1{,}5 \cdot 10^{2}} = 4{,}0 \cdot 10^{3} .
$$
:::

:::definizione{#cifre-significative titolo="Cifre significative"}
Ogni misura ha un'incertezza, e il numero di cifre con cui si scrive un valore ne dichiara la precisione. Le **cifre significative** di un numero sono tutte le cifre a partire dalla prima diversa da zero da sinistra; gli zeri iniziali indicano solo la posizione della virgola. Quindi $0{,}00470$ ha tre cifre significative, cioè $4$, $7$ e lo zero finale, e $2{,}50\,\mathrm{kg}$ dichiara una precisione al centesimo di chilogrammo, mentre $2{,}5\,\mathrm{kg}$ al decimo. La notazione scientifica toglie l'ambiguità degli zeri finali nei numeri interi: $1{,}20 \cdot 10^{3}\,\mathrm{m}$ ha tre cifre significative, $1{,}2 \cdot 10^{3}\,\mathrm{m}$ ne ha due.
:::

:::osservazione{#cifre-nei-calcoli titolo="Cifre significative nei calcoli"}
Un risultato calcolato ha al più la precisione dei dati, e per arrotondarlo si usano due regole pratiche.

- In prodotti e quozienti il risultato ha tante cifre significative quante il dato che ne ha di meno.
- In somme e differenze il risultato ha tanti decimali quanti il dato che ne ha di meno.

Se un'auto percorre $125\,\mathrm{m}$ in $4{,}8\,\mathrm{s}$, la velocità media è $\dfrac{125\,\mathrm{m}}{4{,}8\,\mathrm{s}} = 26{,}04\ldots\,\mathrm{m/s}$, e poiché $4{,}8$ ha due cifre significative il risultato si scrive $26\,\mathrm{m/s}$. Nei passaggi intermedi si conserva almeno una cifra in più e si arrotonda solo il risultato finale, così gli arrotondamenti non si accumulano.
:::

:::definizione{#ordine-di-grandezza titolo="Ordine di grandezza"}
L'**ordine di grandezza** di un numero positivo è la potenza di dieci più vicina al numero sulla scala logaritmica. Scritto il numero come $a \cdot 10^{n}$ con $1 \leq a < 10$, l'ordine di grandezza è $10^{n}$ se $a < \sqrt{10} \approx 3{,}16$ e $10^{n+1}$ se $a \geq \sqrt{10}$. Un giorno dura $24 \cdot 3600\,\mathrm{s} = 8{,}64 \cdot 10^{4}\,\mathrm{s}$, e poiché $8{,}64 > 3{,}16$ l'ordine di grandezza è $10^{5}\,\mathrm{s}$. Le stime per ordini di grandezza servono a controllare i risultati, perché un valore che differisce dalla stima di più ordini di grandezza segnala un errore di calcolo o di unità.
:::

## Grandezze scalari e vettoriali

:::definizione{#scalari-e-vettori titolo="Grandezze scalari e vettoriali"}
Una grandezza **scalare** è individuata da un numero con la sua unità, come la massa, il tempo, la temperatura e l'energia. Una grandezza **vettoriale** richiede anche una direzione e un verso, ed è rappresentata da un vettore, cioè da una freccia la cui lunghezza, in una scala fissata, è l'intensità della grandezza. Sono vettoriali lo spostamento, la velocità, l'accelerazione e la forza. Si scrive $\vec{F}$ per il vettore e $F$ oppure $|\vec{F}|$ per il suo **modulo**, che è un numero non negativo con l'unità della grandezza. Per alcune grandezze conta anche il punto di applicazione: una forza applicata a un corpo esteso ha effetti di rotazione diversi a seconda del punto, e questi effetti sono descritti dal momento della forza. Per la teoria geometrica dei vettori si rimanda all'argomento sui vettori nel piano e nello spazio di Algebra lineare.
:::

:::definizione{#somma-di-vettori titolo="Somma di vettori"}
La **somma** $\vec{A} + \vec{B}$ si costruisce con la regola punta-coda: si disegna $\vec{B}$ con la coda nella punta di $\vec{A}$, e la somma va dalla coda di $\vec{A}$ alla punta di $\vec{B}$. Se i due vettori sono applicati nello stesso punto, la somma è la diagonale del parallelogramma che li ha come lati. In fisica la somma ha un significato diretto: due spostamenti successivi equivalgono al loro spostamento somma, e più forze applicate allo stesso punto materiale equivalgono alla loro **risultante**, che è la loro somma vettoriale. Il modulo della somma soddisfa $|\vec{A} + \vec{B}| \leq A + B$, con l'uguaglianza *solo* per vettori con la stessa direzione e lo stesso verso; due forze da $3\,\mathrm{N}$ e $4\,\mathrm{N}$ perpendicolari hanno risultante di $5\,\mathrm{N}$.

::grafico{vettori="0,0,4,1,A;4,1,5,4,B;0,0,5,4,A + B;0,0,1,3,B" segmenti="1,3,5,4" xmin=-0.6 xmax=5.8 ymin=-0.6 ymax=4.6 uguale=1 titolo="Lo spostamento $\vec{A}$ seguito da $\vec{B}$ equivale a $\vec{A} + \vec{B}$, che è anche la diagonale del parallelogramma di lati $\vec{A}$ e $\vec{B}$"}

:::

:::definizione{#differenza-di-vettori titolo="Prodotto per uno scalare e differenza"}
Il prodotto di un numero $k$ per un vettore $\vec{A}$ è il vettore $k\vec{A}$ di modulo $|k|\,A$, con la direzione di $\vec{A}$, lo stesso verso se $k > 0$ e verso opposto se $k < 0$. Quando $k$ è una grandezza fisica il prodotto cambia anche l'unità; la quantità di moto $m\vec{v}$ ha la direzione e il verso della velocità e si misura in $\mathrm{kg\cdot m/s}$. La **differenza** è $\vec{A} - \vec{B} = \vec{A} + (-\vec{B})$, e applicati i due vettori nello stesso punto $\vec{A} - \vec{B}$ va dalla punta di $\vec{B}$ alla punta di $\vec{A}$. Per questo lo spostamento tra le posizioni $\vec{r}_1$ e $\vec{r}_2$ è $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$. Allo stesso modo la variazione di velocità $\Delta\vec{v} = \vec{v}_2 - \vec{v}_1$ è diversa da zero ogni volta che la velocità cambia direzione, *anche* se il suo modulo resta lo stesso.

::grafico{vettori="0,0,1,3,r₁;0,0,4,1,r₂;1,3,4,1,Δr" punti="1,3,pieno;4,1,pieno" xmin=-0.6 xmax=4.8 ymin=-0.6 ymax=3.6 uguale=1 titolo="Lo spostamento $\Delta\vec{r} = \vec{r}_2 - \vec{r}_1$ va dalla posizione iniziale alla posizione finale"}

:::

## Componenti cartesiane e polari

:::definizione{#componenti-cartesiane titolo="Componenti cartesiane"}
Si fissa un riferimento cartesiano ortogonale $Oxyz$ e si indicano con $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$ i **versori** degli assi, cioè i vettori adimensionali di modulo $1$ orientati come gli assi. Ogni vettore si scrive in un solo modo come
$$
\vec{A} = A_x\,\hat{\imath} + A_y\,\hat{\jmath} + A_z\,\hat{k} ,
$$
e i numeri $A_x$, $A_y$, $A_z$, che hanno l'unità di $\vec{A}$, sono le sue **componenti cartesiane**; si scrive anche $\vec{A} = (A_x, A_y, A_z)$. La componente $A_x$ è la proiezione di $\vec{A}$ sull'asse $x$, con segno positivo se la proiezione è concorde con l'asse e negativo se è discorde. Per il teorema di Pitagora il modulo è
$$
A = \sqrt{A_x^2 + A_y^2 + A_z^2} .
$$
Il versore di un vettore non nullo è $\hat{u}_A = \dfrac{\vec{A}}{A}$, che ha modulo $1$, la direzione e il verso di $\vec{A}$, e permette di scrivere $\vec{A} = A\,\hat{u}_A$ separando l'intensità dalla direzione.
:::

:::teorema{#componenti-polari titolo="Componenti cartesiane e coordinate polari"}
Sia $\vec{A}$ un vettore del piano $xy$ di modulo $A$, e sia $\theta$ l'angolo che forma con il semiasse positivo delle $x$, misurato in verso antiorario. Allora
$$
A_x = A\cos\theta,
\qquad
A_y = A\sin\theta ,
$$
e viceversa
$$
A = \sqrt{A_x^2 + A_y^2},
\qquad
\tan\theta = \frac{A_y}{A_x} \quad (A_x \neq 0) .
$$
Le prime due formule seguono dalla definizione di seno e coseno sulla circonferenza goniometrica, poiché la punta di $\vec{A}$ applicato nell'origine sta sulla circonferenza di raggio $A$; valgono quindi per ogni $\theta$, anche non acuto. La coppia $(A, \theta)$ è la descrizione **polare** del vettore, comoda quando i dati sono un'intensità e un angolo; le componenti cartesiane sono comode per sommare. Per $A = 5$ e $\cos\theta = \dfrac{4}{5}$, $\sin\theta = \dfrac{3}{5}$ si ottiene $\vec{A} = (4, 3)$.

::grafico{vettori="0,0,4,3,A" segmenti="4,0,4,3;0,3,4,3" etichette="0.9,0.25,θ;1.5,-0.5,A cos θ;4.1,1.5,A sin θ" xmin=-0.6 xmax=5.4 ymin=-0.8 ymax=3.6 uguale=1 titolo="$\vec{A}$ ha modulo $5$ e forma con l'asse $x$ l'angolo $\theta$ con $\cos\theta = \dfrac{4}{5}$, quindi $A_x = 4$ e $A_y = 3$"}

:::

:::attenzione
La funzione $\arctan$ restituisce angoli compresi tra $-90^\circ$ e $90^\circ$, quindi fornisce l'angolo di $\vec{A}$ *solo* quando $A_x > 0$. Per $\vec{A} = (-3, 4)$ si ottiene $\arctan\left(-\dfrac{4}{3}\right) \approx -53{,}1^\circ$, che è l'angolo del vettore opposto $(3, -4)$. Poiché $\vec{A}$ sta nel secondo quadrante, il suo angolo si ottiene aggiungendo $180^\circ$, cioè $\theta \approx 126{,}9^\circ$.

::grafico{vettori="0,0,-3,4,A;0,0,3,-4,−A" segmenti="-3,0,-3,4" xmin=-4 xmax=4 ymin=-4.6 ymax=4.6 uguale=1 titolo="$\vec{A} = (-3, 4)$ forma con l'asse $x$ l'angolo $126{,}9^\circ$; l'angolo $-53{,}1^\circ$ dato dall'arcotangente è quello di $-\vec{A}$"}

:::

:::teorema{#operazioni-in-componenti titolo="Operazioni in componenti"}
Siano $\vec{A} = (A_x, A_y, A_z)$, $\vec{B} = (B_x, B_y, B_z)$ e $k$ un numero reale. Allora
$$
\vec{A} + \vec{B} = (A_x + B_x,\ A_y + B_y,\ A_z + B_z),
\qquad
k\vec{A} = (kA_x,\ kA_y,\ kA_z) .
$$
Le formule seguono scrivendo i vettori con i versori e raccogliendo $\hat{\imath}$, $\hat{\jmath}$, $\hat{k}$. Due vettori sono uguali se e solo se hanno le stesse componenti, quindi un'uguaglianza tra vettori del piano equivale a due uguaglianze tra numeri, una per asse. Su questo si basa il calcolo della risultante di più forze: si scompone ogni forza, si sommano separatamente le componenti $x$ e le componenti $y$, e dalle componenti della somma si ricavano modulo e direzione.
:::

:::esempio{titolo="Risultante di due forze"}
Su un punto agiscono $\vec{F}_1$ di modulo $10\,\mathrm{N}$ a $30^\circ$ e $\vec{F}_2$ di modulo $6{,}0\,\mathrm{N}$ a $120^\circ$. Le componenti sono $\vec{F}_1 = (8{,}66;\ 5{,}00)\,\mathrm{N}$ e $\vec{F}_2 = (-3{,}00;\ 5{,}20)\,\mathrm{N}$, quindi
$$
\vec{R} = \vec{F}_1 + \vec{F}_2 = (5{,}66;\ 10{,}20)\,\mathrm{N},
\qquad
R = \sqrt{5{,}66^2 + 10{,}20^2}\,\mathrm{N} \approx 11{,}7\,\mathrm{N} .
$$
Poiché $R_x > 0$, l'angolo è $\theta = \arctan\dfrac{10{,}20}{5{,}66} \approx 61{,}0^\circ$. Le due forze sono perpendicolari, e infatti $R = \sqrt{10^2 + 6{,}0^2}\,\mathrm{N}$.

::grafico{vettori="0,0,8.66,5,F₁;0,0,-3,5.196,F₂;0,0,5.66,10.196,R" segmenti="8.66,5,5.66,10.196;-3,5.196,5.66,10.196" xmin=-4 xmax=10 ymin=-1 ymax=11 uguale=1 titolo="La risultante $\vec{R}$ di $\vec{F}_1$ e $\vec{F}_2$ è la diagonale del parallelogramma costruito sulle due forze"}

:::

## Prodotto scalare e lavoro

:::definizione{#prodotto-scalare titolo="Prodotto scalare"}
Il **prodotto scalare** di due vettori $\vec{A}$ e $\vec{B}$ è il numero
$$
\vec{A} \cdot \vec{B} = A B \cos\theta ,
$$
dove $\theta \in [0^\circ, 180^\circ]$ è l'angolo tra i due vettori applicati nello stesso punto. In componenti vale
$$
\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z ,
$$
formula che segue dal teorema del coseno e per la cui dimostrazione si rimanda all'argomento sui vettori nel piano e nello spazio di Algebra lineare. Il prodotto scalare è positivo per angoli acuti, nullo per vettori perpendicolari e negativo per angoli ottusi; inoltre $\vec{A} \cdot \vec{A} = A^2$. Confrontando le due espressioni si ricava l'angolo tra due vettori dati in componenti, $\cos\theta = \dfrac{\vec{A} \cdot \vec{B}}{A B}$. L'unità del prodotto è il prodotto delle unità, quindi il prodotto scalare di una forza in $\mathrm{N}$ e di uno spostamento in $\mathrm{m}$ si misura in $\mathrm{N\cdot m} = \mathrm{J}$.
:::

:::osservazione{#componente-lungo-una-direzione titolo="Componente lungo una direzione"}
Se $\hat{u}$ è un versore e $\theta$ è l'angolo tra $\vec{A}$ e $\hat{u}$, il numero $\vec{A} \cdot \hat{u} = A\cos\theta$ è la **componente** di $\vec{A}$ lungo la direzione e il verso di $\hat{u}$; in particolare $A_x = \vec{A} \cdot \hat{\imath}$. Gli assi su cui scomporre un vettore si possono scegliere liberamente, purché perpendicolari, e la scelta adatta al problema semplifica i calcoli. Su un piano inclinato di un angolo $\alpha$ conviene un asse parallelo al piano e uno perpendicolare; il peso di modulo $mg$ ha allora componente $mg\sin\alpha$ parallela al piano, diretta verso il basso, e componente $mg\cos\alpha$ perpendicolare al piano. L'uso di questa scomposizione nella dinamica è trattato nell'argomento sulle leggi di Newton.

::grafico{curve="t,0.57735*t,0,6.5" vettori="3,2.5,3,0.1,P;3,2.5,1.961,1.9;3,2.5,4.039,0.7,P⊥" segmenti="0,0,6.5,0;1.961,1.9,3,0.1;4.039,0.7,3,0.1" etichette="1.1,0.2,α;1.55,2.2,P∥" xmin=-0.5 xmax=6.8 ymin=-0.6 ymax=4.2 uguale=1 titolo="Sul piano inclinato di $\alpha = 30^\circ$ il peso $\vec{P}$ si scompone in $P_{\parallel} = mg\sin\alpha$ lungo il piano e $P_{\perp} = mg\cos\alpha$ perpendicolare al piano"}

:::

:::definizione{#lavoro-di-una-forza-costante titolo="Lavoro di una forza costante"}
Se un corpo compie uno spostamento rettilineo $\vec{s}$ mentre su di esso agisce una forza costante $\vec{F}$, il **lavoro** della forza è
$$
L = \vec{F} \cdot \vec{s} = F s \cos\theta .
$$
Il lavoro dipende solo dalla componente della forza lungo lo spostamento, $F\cos\theta$, mentre la componente perpendicolare allo spostamento compie lavoro nullo. Il lavoro è positivo (motore) per $\theta < 90^\circ$, nullo per $\theta = 90^\circ$, negativo (resistente) per $\theta > 90^\circ$. Per questo la forza normale del pavimento su una cassa che scivola in orizzontale compie lavoro nullo. Se la cassa viene trascinata per $5{,}0\,\mathrm{m}$ con una forza di $40\,\mathrm{N}$ inclinata di $60^\circ$ sull'orizzontale, la forza compie il lavoro $L = 40 \cdot 5{,}0 \cdot \cos 60^\circ\,\mathrm{J} = 1{,}0 \cdot 10^{2}\,\mathrm{J}$. Il lavoro delle forze variabili e il legame con l'energia sono trattati nell'argomento sul lavoro e l'energia.

::grafico{vettori="0,0,5,0,s;0,0,2,3.464,F" segmenti="2,3.464,2,0" etichette="0.35,0.3,θ;1.2,-0.45,F cos θ" xmin=-0.6 xmax=5.8 ymin=-0.8 ymax=4 uguale=1 titolo="Solo la componente $F\cos\theta$ della forza, parallela allo spostamento $\vec{s}$, compie lavoro"}

:::

## Prodotto vettoriale e momento di una forza

:::definizione{#prodotto-vettoriale titolo="Prodotto vettoriale"}
Il **prodotto vettoriale** $\vec{A} \times \vec{B}$ di due vettori dello spazio è il vettore che ha:

- modulo $A B \sin\theta$, con $\theta \in [0^\circ, 180^\circ]$ angolo tra i due vettori, uguale all'area del parallelogramma di lati $\vec{A}$ e $\vec{B}$;
- direzione perpendicolare al piano che contiene $\vec{A}$ e $\vec{B}$;
- verso dato dalla **regola della mano destra**: con il pollice lungo $\vec{A}$ e l'indice lungo $\vec{B}$, il medio indica $\vec{A} \times \vec{B}$.

In componenti il prodotto si calcola come determinante simbolico:
$$
\begin{aligned}
\vec{A} \times \vec{B}
&= \begin{vmatrix} \hat{\imath} & \hat{\jmath} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix} \\[6pt]
&= (A_y B_z - A_z B_y)\,\hat{\imath} + (A_z B_x - A_x B_z)\,\hat{\jmath} + (A_x B_y - A_y B_x)\,\hat{k} .
\end{aligned}
$$
Dalla formula seguono le proprietà $\vec{B} \times \vec{A} = -\,\vec{A} \times \vec{B}$, $\vec{A} \times \vec{A} = \vec{0}$ e $\hat{\imath} \times \hat{\jmath} = \hat{k}$, $\hat{\jmath} \times \hat{k} = \hat{\imath}$, $\hat{k} \times \hat{\imath} = \hat{\jmath}$; per l'equivalenza tra la formula e la descrizione geometrica si rimanda all'argomento sui vettori nel piano e nello spazio di Algebra lineare. L'ordine dei fattori conta, perché scambiandoli il prodotto cambia verso. Il prodotto è nullo per vettori paralleli e ha modulo massimo, $AB$, per vettori perpendicolari.
:::

:::definizione{#momento-di-una-forza titolo="Momento di una forza"}
Sia $\vec{F}$ una forza applicata nel punto $P$ e sia $O$ un punto fissato, detto **polo**. Il **momento** di $\vec{F}$ rispetto a $O$ è il vettore
$$
\vec{\tau} = \vec{r} \times \vec{F},
\qquad
\vec{r} = \overrightarrow{OP} .
$$
Il suo modulo è $\tau = r F \sin\theta = F\,b$, dove $b = r\sin\theta$ è il braccio, cioè la distanza di $O$ dalla retta d'azione della forza. Il momento misura l'effetto di rotazione della forza attorno a un asse per $O$ perpendicolare al piano di $\vec{r}$ e $\vec{F}$. Poiché $\tau = F\,b$, una forza la cui retta d'azione passa per $O$ ha momento nullo, e a parità di forza l'effetto cresce con il braccio, come si sperimenta aprendo una porta spingendo vicino ai cardini o lontano da essi. Il momento si misura in $\mathrm{N\cdot m}$; l'unità coincide con quella del lavoro, ma per il momento si evita il nome joule, perché il momento è un vettore e il lavoro uno scalare. La dinamica delle rotazioni è trattata nell'argomento sulla dinamica del corpo rigido.

::grafico{vettori="0,0,4,0,r;4,0,5.5,2.598,F" segmenti="2.2,-3.118,5.8,3.118;0,0,3,-1.732" punti="0,0,pieno;4,0,pieno,P" etichette="1.1,-1.3,b;4.35,0.25,θ" xmin=-0.6 xmax=6.2 ymin=-3.4 ymax=3.4 uguale=1 titolo="Il braccio $b$ è la distanza del polo $O$ dalla retta d'azione di $\vec{F}$, quindi $\tau = F\,b = r F \sin\theta$"}

:::

:::esempio{titolo="Momento in componenti"}
Una forza $\vec{F} = (2{,}0\,\hat{\imath} + 3{,}0\,\hat{\jmath})\,\mathrm{N}$ è applicata nel punto di posizione $\vec{r} = (0{,}50\,\hat{\imath} - 0{,}20\,\hat{\jmath})\,\mathrm{m}$ rispetto al polo. I due vettori stanno nel piano $xy$, quindi il prodotto vettoriale ha solo la componente $z$:
$$
\tau_z = x F_y - y F_x = 0{,}50 \cdot 3{,}0 - (-0{,}20) \cdot 2{,}0 = 1{,}9\,\mathrm{N\cdot m} .
$$
Perciò $\vec{\tau} = 1{,}9\,\hat{k}\,\mathrm{N\cdot m}$. Il segno positivo indica che la forza tende a far ruotare il corpo in verso antiorario, visto dal semiasse positivo delle $z$.
:::

## Derivata di un vettore

:::richiamo{titolo="Derivata"}
La derivata di una funzione $f$ nell'istante $t$ è il limite del rapporto incrementale, $\dfrac{df}{dt} = \displaystyle\lim_{\Delta t \to 0} \frac{f(t + \Delta t) - f(t)}{\Delta t}$, quando esiste finito. Per le regole di derivazione si rimanda all'argomento sulle derivate di Analisi 1.
:::

:::definizione{#derivata-di-un-vettore titolo="Derivata di un vettore"}
Sia $\vec{A}(t) = A_x(t)\,\hat{\imath} + A_y(t)\,\hat{\jmath} + A_z(t)\,\hat{k}$ un vettore che dipende dal tempo. La **derivata** di $\vec{A}$ è
$$
\frac{d\vec{A}}{dt}
= \lim_{\Delta t \to 0} \frac{\vec{A}(t + \Delta t) - \vec{A}(t)}{\Delta t}
= \frac{dA_x}{dt}\,\hat{\imath} + \frac{dA_y}{dt}\,\hat{\jmath} + \frac{dA_z}{dt}\,\hat{k} .
$$
La seconda uguaglianza vale perché i versori di un riferimento fisso sono costanti, quindi il limite si calcola componente per componente. La derivata ha l'unità di $\vec{A}$ divisa per il secondo. L'applicazione principale è la cinematica: se $\vec{r}(t)$ è la posizione di un punto, la velocità è $\vec{v} = \dfrac{d\vec{r}}{dt}$ e l'accelerazione è $\vec{a} = \dfrac{d\vec{v}}{dt}$, come si vede negli argomenti sulla cinematica in una dimensione e sul moto nel piano. Il vettore $\Delta\vec{r} = \vec{r}(t + \Delta t) - \vec{r}(t)$ è una corda della traiettoria, e al tendere di $\Delta t$ a zero la sua direzione tende a quella della retta tangente. Perciò la velocità è **tangente alla traiettoria**.

::grafico{f="2*x - x^2/4" vettori="0,0,2,3,r(t);2,3,4,4,Δr;2,3,4,5,v" punti="2,3,pieno;4,4,pieno" xmin=-0.6 xmax=8.6 ymin=-0.6 ymax=5.6 uguale=1 titolo="La corda $\Delta\vec{r}$ tra le posizioni agli istanti $t$ e $t + \Delta t$ tende alla direzione della tangente, quindi $\vec{v}$ è tangente alla traiettoria"}

:::

::::teorema{#regole-di-derivazione-vettori titolo="Regole di derivazione per i vettori"}
Siano $\vec{A}(t)$ e $\vec{B}(t)$ vettori e $f(t)$ una funzione scalare, tutti derivabili. Allora

- $\dfrac{d}{dt}\big(\vec{A} + \vec{B}\big) = \dfrac{d\vec{A}}{dt} + \dfrac{d\vec{B}}{dt}$;
- $\dfrac{d}{dt}\big(f\vec{A}\big) = \dfrac{df}{dt}\,\vec{A} + f\,\dfrac{d\vec{A}}{dt}$;
- $\dfrac{d}{dt}\big(\vec{A} \cdot \vec{B}\big) = \dfrac{d\vec{A}}{dt} \cdot \vec{B} + \vec{A} \cdot \dfrac{d\vec{B}}{dt}$;
- $\dfrac{d}{dt}\big(\vec{A} \times \vec{B}\big) = \dfrac{d\vec{A}}{dt} \times \vec{B} + \vec{A} \times \dfrac{d\vec{B}}{dt}$, conservando l'ordine dei fattori.

Sono le analoghe della regola di derivazione del prodotto. Servono a derivare grandezze definite come prodotti: la quantità di moto $m\vec{v}$, l'energia cinetica $\dfrac{1}{2} m\,\vec{v} \cdot \vec{v}$, il momento angolare $\vec{r} \times m\vec{v}$. Per esempio, a massa costante, $\dfrac{d}{dt}\left(\dfrac{1}{2} m\,\vec{v} \cdot \vec{v}\right) = m\,\vec{v} \cdot \vec{a}$.

:::dimostrazione
Le prime due regole seguono applicando a ogni componente le regole della somma e del prodotto delle funzioni scalari. Per il prodotto scalare, $\vec{A} \cdot \vec{B} = A_x B_x + A_y B_y + A_z B_z$, e derivando ogni termine con la regola del prodotto si ottiene
$$
\begin{aligned}
\frac{d}{dt}\big(\vec{A} \cdot \vec{B}\big)
&= \frac{dA_x}{dt} B_x + \frac{dA_y}{dt} B_y + \frac{dA_z}{dt} B_z + A_x \frac{dB_x}{dt} + A_y \frac{dB_y}{dt} + A_z \frac{dB_z}{dt} \\[6pt]
&= \frac{d\vec{A}}{dt} \cdot \vec{B} + \vec{A} \cdot \frac{d\vec{B}}{dt} .
\end{aligned}
$$
Per il prodotto vettoriale il ragionamento è lo stesso: ogni componente, per esempio $A_y B_z - A_z B_y$, è una differenza di prodotti, e derivandola si ottiene la componente corrispondente di $\dfrac{d\vec{A}}{dt} \times \vec{B} + \vec{A} \times \dfrac{d\vec{B}}{dt}$.
:::
::::

::::teorema{#vettore-di-modulo-costante titolo="Derivata di un vettore di modulo costante"}
Sia $\vec{A}(t)$ un vettore derivabile di modulo costante. Allora in ogni istante
$$
\vec{A} \cdot \frac{d\vec{A}}{dt} = 0 ,
$$
cioè la derivata è perpendicolare a $\vec{A}$ oppure nulla. Un vettore di modulo costante può cambiare solo direzione, e la sua variazione istantanea è perpendicolare a esso. Per il versore $\hat{u}(\theta) = \cos\theta\,\hat{\imath} + \sin\theta\,\hat{\jmath}$ si ha $\dfrac{d\hat{u}}{d\theta} = -\sin\theta\,\hat{\imath} + \cos\theta\,\hat{\jmath}$, che è perpendicolare a $\hat{u}$. Nel moto su una circonferenza il vettore posizione rispetto al centro ha modulo costante, quindi la velocità è perpendicolare al raggio; nel moto circolare uniforme anche la velocità ha modulo costante, quindi l'accelerazione è perpendicolare alla velocità, come si vede nell'argomento sul moto nel piano.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="0,0,1.732,1,r;1.732,1,0.982,2.299,v" punti="0,0,pieno" xmin=-2.6 xmax=2.6 ymin=-2.6 ymax=2.6 uguale=1 titolo="Sulla circonferenza il vettore posizione $\vec{r}$ ha modulo costante, quindi $\vec{v} = \dfrac{d\vec{r}}{dt}$ è perpendicolare a $\vec{r}$"}

:::dimostrazione
Poiché il modulo è costante, $\vec{A} \cdot \vec{A} = A^2$ è costante e la sua derivata è nulla. Per la regola di derivazione del prodotto scalare
$$
0 = \frac{d}{dt}\big(\vec{A} \cdot \vec{A}\big) = \frac{d\vec{A}}{dt} \cdot \vec{A} + \vec{A} \cdot \frac{d\vec{A}}{dt} = 2\,\vec{A} \cdot \frac{d\vec{A}}{dt} ,
$$
quindi $\vec{A} \cdot \dfrac{d\vec{A}}{dt} = 0$.
:::
::::
