---
titolo: Potenziale elettrico ed energia elettrostatica
sommario: Perché il campo elettrostatico è conservativo, come si definiscono l'energia potenziale e il potenziale, come si calcola il potenziale di cariche puntiformi e di distribuzioni continue, come si ricava il campo dal potenziale e come la conservazione dell'energia descrive il moto delle cariche.
---

## Lavoro della forza elettrica

In tutto l'argomento le cariche sorgenti sono ferme in un sistema di riferimento inerziale, e il campo che producono si dice elettrostatico.

:::richiamo{titolo="Integrale di linea di un campo vettoriale"}
Per una curva regolare $\gamma$ da $A$ a $B$ e un campo vettoriale continuo $\vec{F}$, l'integrale di linea $\displaystyle\int_\gamma \vec{F} \cdot d\vec{\ell}$ è il limite delle somme $\sum_i \vec{F}(P_i) \cdot \Delta\vec{\ell}_i$ sui piccoli tratti in cui si divide la curva. Se la curva è chiusa l'integrale si scrive $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{\ell}$ e si chiama **circuitazione**. Si rimanda all'argomento sulle curve e gli integrali di linea di Analisi 2.
:::

:::definizione{#lavoro-forza-elettrica titolo="Lavoro della forza elettrica"}
Una carica di prova $q_0$ si muove lungo una curva $\gamma$ da $A$ a $B$ in un campo elettrostatico $\vec{E}$, e su di essa agisce la forza $\vec{F} = q_0 \vec{E}$. Il **lavoro** della forza elettrica è
$$
W_{A \to B} = \int_\gamma q_0\, \vec{E} \cdot d\vec{\ell} = q_0 \int_\gamma \vec{E} \cdot d\vec{\ell} .
$$
In questa materia il lavoro si indica con $W$, perché la lettera $L$ è riservata all'induttanza. Il lavoro è proporzionale a $q_0$, quindi il rapporto $\dfrac{W_{A \to B}}{q_0}$ dipende solo dal campo e dalla curva. In un campo uniforme e lungo un segmento $\vec{s}$ la definizione si riduce a $W = q_0\, \vec{E} \cdot \vec{s}$; per esempio, un protone che si sposta di $2{,}0\,\mathrm{cm}$ nel verso di un campo uniforme di $5{,}0 \cdot 10^3\,\mathrm{N/C}$ riceve il lavoro $1{,}60 \cdot 10^{-19} \cdot 5{,}0 \cdot 10^3 \cdot 0{,}020\,\mathrm{J} = 1{,}6 \cdot 10^{-17}\,\mathrm{J}$.
:::

::::teorema{#lavoro-campo-carica-puntiforme titolo="Lavoro nel campo di una carica puntiforme"}
Sia $Q$ una carica puntiforme ferma e sia $q_0$ una carica di prova che va da un punto $A$, a distanza $r_A$ da $Q$, a un punto $B$, a distanza $r_B$, lungo una curva qualsiasi. Il lavoro della forza elettrica è
$$
W_{A \to B} = k Q q_0 \left( \frac{1}{r_A} - \frac{1}{r_B} \right) .
$$
Il lavoro dipende solo dalle distanze iniziale e finale, quindi è lo stesso per tutte le curve che congiungono $A$ e $B$. Se le cariche sono concordi e $q_0$ si allontana da $Q$, il lavoro è positivo, perché la forza repulsiva ha la componente radiale concorde con lo spostamento. Per esempio, con $Q = 4{,}0\,\mathrm{nC}$, $q_0 = 1{,}0\,\mathrm{nC}$, $r_A = 2{,}0\,\mathrm{cm}$ e $r_B = 6{,}0\,\mathrm{cm}$ si ottiene $W = 8{,}99 \cdot 10^9 \cdot 4{,}0 \cdot 10^{-18} \cdot (50 - 16{,}7)\,\mathrm{J} \approx 1{,}2 \cdot 10^{-6}\,\mathrm{J}$.

::grafico{assi=0 uguale=1 curve="(1.5+2*t-0.5*sin(pi*t))*cos(0.2618+0.8727*t+0.5*sin(pi*t)),(1.5+2*t-0.5*sin(pi*t))*sin(0.2618+0.8727*t+0.5*sin(pi*t)),0,1;3.5*cos(t),3.5*sin(t),0.2618,1.1345" linee="1.449,0.388 3.381,0.906" punti="0,0,pieno,+Q;1.449,0.388,pieno,A;1.479,3.172,pieno,B" etichette="0.35,2.3,γ₁;3.4,2.3,γ₂" xmin=-0.6 xmax=4.4 ymin=-0.5 ymax=4.4 legenda=0 titolo="Due curve da $A$ a $B$ nel campo di $Q$: lungo $\gamma_2$ il tratto radiale dà tutto il lavoro e l'arco di circonferenza non ne dà, e lungo $\gamma_1$ si ottiene lo stesso lavoro"}

:::dimostrazione
Il campo di $Q$ è $\vec{E} = \dfrac{kQ}{r^2}\,\hat{r}$, come si vede nell'argomento sul campo elettrico. Uno spostamento infinitesimo $d\vec{\ell}$ lungo la curva si scompone in una parte lungo $\hat{r}$, di lunghezza con segno $dr$, e in una parte perpendicolare a $\hat{r}$. Il campo è radiale, quindi la parte perpendicolare non dà contributo e $\vec{E} \cdot d\vec{\ell} = \dfrac{kQ}{r^2}\,dr$. Perciò
$$
W_{A \to B} = q_0 \int_{r_A}^{r_B} \frac{kQ}{r^2}\,dr = k Q q_0 \left[ -\frac{1}{r} \right]_{r_A}^{r_B} = k Q q_0 \left( \frac{1}{r_A} - \frac{1}{r_B} \right) .
$$
Il risultato contiene solo $r_A$ e $r_B$, quindi non dipende dalla curva.
:::
::::

## Campo elettrostatico conservativo

::::teorema{#circuitazione-campo-elettrostatico titolo="Circuitazione del campo elettrostatico"}
Il campo elettrostatico $\vec{E}$ prodotto da un qualsiasi sistema di cariche ferme è **conservativo**: il lavoro della forza elettrica su una carica di prova tra due punti $A$ e $B$ è lo stesso per tutte le curve che li congiungono. In modo equivalente, la circuitazione di $\vec{E}$ lungo ogni curva chiusa $\gamma$ è nulla,
$$
\oint_\gamma \vec{E} \cdot d\vec{\ell} = 0 .
$$
Su questa proprietà si fondano l'energia potenziale elettrica e il potenziale. Una carica che percorre una curva chiusa e torna al punto di partenza riceve dal campo elettrostatico un lavoro totale nullo; per questo, per far circolare una corrente in un circuito chiuso, serve un generatore, come si vede nell'argomento sulla corrente elettrica e i circuiti in corrente continua.

:::dimostrazione
Per una sola carica puntiforme si applica il **lavoro nel campo di una carica puntiforme**. Su una curva chiusa il punto iniziale e il punto finale coincidono, quindi $r_A = r_B$ e il lavoro è nullo. Per un sistema di cariche $Q_1, \dots, Q_n$ il campo è la somma dei campi $\vec{E}_i$ delle singole cariche, per il principio di sovrapposizione, e l'integrale di linea è lineare, perciò
$$
\oint_\gamma \vec{E} \cdot d\vec{\ell} = \sum_{i=1}^{n} \oint_\gamma \vec{E}_i \cdot d\vec{\ell} = 0 .
$$
Per una distribuzione continua il ragionamento è lo stesso, con un integrale sulla carica al posto della somma. Infine, se $\gamma_1$ e $\gamma_2$ sono due curve da $A$ a $B$, la curva chiusa formata da $\gamma_1$ e da $\gamma_2$ percorsa al contrario ha circuitazione nulla; quindi gli integrali di $\vec{E}$ lungo $\gamma_1$ e lungo $\gamma_2$ sono uguali.
:::
::::

:::richiamo{titolo="Teorema di Stokes"}
Se $S$ è una superficie orientata con bordo $\partial S$ orientato in modo coerente e $\vec{F}$ è un campo di classe $C^1$, allora $\displaystyle\oint_{\partial S} \vec{F} \cdot d\vec{\ell} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n}\,dA$. Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::osservazione{#forma-locale-circuitazione titolo="Forma locale della circuitazione nulla"}
Per il teorema di Stokes la circuitazione di $\vec{E}$ lungo il bordo di una superficie è il flusso del rotore di $\vec{E}$ attraverso la superficie. La circuitazione è nulla lungo *ogni* curva chiusa, quindi il flusso del rotore è nullo attraverso ogni superficie, e perciò
$$
\nabla \times \vec{E} = \vec{0}
$$
in ogni punto. La relazione vale per i campi prodotti da cariche ferme. In presenza di campi magnetici variabili nel tempo la circuitazione del campo elettrico è diversa da zero, e si rimanda all'argomento sull'induzione elettromagnetica.
:::

## Energia potenziale elettrica

:::definizione{#energia-potenziale-elettrica titolo="Energia potenziale elettrica"}
Poiché il campo elettrostatico è conservativo, a una carica $q_0$ posta in un campo elettrostatico si associa un'**energia potenziale** $U$, funzione della posizione, tale che per ogni coppia di punti
$$
W_{A \to B} = U_A - U_B = -\Delta U .
$$
L'energia potenziale è definita a meno di una costante additiva, che si fissa scegliendo il punto in cui $U = 0$; per cariche contenute in una regione limitata si sceglie di solito $U = 0$ a distanza infinita. Si misura in joule. Quando il campo compie lavoro positivo l'energia potenziale diminuisce, come accade per il peso di un corpo che scende (argomento sul lavoro e l'energia).
:::

::::teorema{#energia-potenziale-due-cariche titolo="Energia potenziale di due cariche puntiformi"}
Due cariche puntiformi $q_1$ e $q_2$ a distanza $r$ hanno l'energia potenziale, scelta nulla a distanza infinita,
$$
U(r) = \frac{k\, q_1 q_2}{r} .
$$
Il segno di $U$ è il segno del prodotto $q_1 q_2$.

- Se le cariche sono concordi, $U > 0$ e $U$ decresce all'aumentare di $r$; per avvicinare le cariche occorre un lavoro esterno positivo.
- Se le cariche sono discordi, $U < 0$ e $U$ cresce verso $0$ all'aumentare di $r$; il sistema è legato, e per separare le cariche fino a distanza infinita occorre il lavoro esterno $\dfrac{k\,|q_1 q_2|}{r}$.

Per esempio, nell'atomo di idrogeno l'elettrone e il protone distano circa $5{,}3 \cdot 10^{-11}\,\mathrm{m}$, e l'energia potenziale vale $U = -\dfrac{8{,}99 \cdot 10^9 \cdot (1{,}60 \cdot 10^{-19})^2}{5{,}3 \cdot 10^{-11}}\,\mathrm{J} \approx -4{,}3 \cdot 10^{-18}\,\mathrm{J}$.

::grafico{f="1/x;-1/x" xmin=0 xmax=5 ymin=-3 ymax=3 nomi="r,U" legenda="q_1 q_2 > 0;q_1 q_2 < 0" titolo="Energia potenziale di due cariche in funzione della distanza: positiva e decrescente per cariche concordi, negativa e crescente verso $0$ per cariche discordi"}

:::dimostrazione
Si tiene ferma $q_1$ e si considera $q_2$ come carica di prova. Per il lavoro nel campo di una carica puntiforme, quando $q_2$ passa dalla distanza $r$ a distanza infinita il campo di $q_1$ compie il lavoro $W_{r \to \infty} = k q_1 q_2 \left( \dfrac{1}{r} - 0 \right)$. Per la definizione di energia potenziale $W_{r \to \infty} = U(r) - U(\infty) = U(r)$, quindi $U(r) = \dfrac{k q_1 q_2}{r}$.
:::
::::

## Potenziale elettrico e differenza di potenziale

:::definizione{#potenziale-elettrico titolo="Potenziale elettrico"}
Il **potenziale elettrico** in un punto $P$ è l'energia potenziale per unità di carica di una carica di prova $q_0$ posta in $P$,
$$
V(P) = \frac{U(P)}{q_0} .
$$
Il potenziale dipende solo dalle cariche sorgenti e dalla posizione di $P$, e si misura in **volt**, $1\,\mathrm{V} = 1\,\mathrm{J/C}$. La differenza di potenziale tra $B$ e $A$ è $\Delta V = V_B - V_A$, e il lavoro del campo su una carica $q$ che va da $A$ a $B$ è
$$
W_{A \to B} = -q\, \Delta V = q\,(V_A - V_B) .
$$
Una carica positiva lasciata libera si muove verso potenziali minori e una carica negativa verso potenziali maggiori; in entrambi i casi la sua energia potenziale diminuisce. Per esempio, una carica di $3{,}0\,\mathrm{\mu C}$ che passa da un punto a $120\,\mathrm{V}$ a un punto a $20\,\mathrm{V}$ riceve dal campo il lavoro $3{,}0 \cdot 10^{-6} \cdot 100\,\mathrm{J} = 3{,}0 \cdot 10^{-4}\,\mathrm{J}$.
:::

::::teorema{#differenza-di-potenziale-e-campo titolo="Differenza di potenziale e campo"}
In un campo elettrostatico $\vec{E}$, per ogni curva $\gamma$ da $A$ a $B$ vale
$$
V_B - V_A = -\int_\gamma \vec{E} \cdot d\vec{\ell} .
$$
Il potenziale si ricava quindi dal campo con un integrale di linea, calcolato lungo la curva più comoda; con il riferimento all'infinito si ha $V(P) = \displaystyle\int_P^{\infty} \vec{E} \cdot d\vec{\ell}$. La formula mostra anche che il campo si può misurare in volt al metro, e infatti $1\,\mathrm{V/m} = 1\,\mathrm{J/(C \cdot m)} = 1\,\mathrm{N/C}$.

:::dimostrazione
Per la definizione di lavoro della forza elettrica $W_{A \to B} = q_0 \displaystyle\int_\gamma \vec{E} \cdot d\vec{\ell}$, e per la definizione di potenziale $W_{A \to B} = q_0\,(V_A - V_B)$. Uguagliando le due espressioni e dividendo per $q_0$ si ottiene la tesi. Il risultato non dipende da $\gamma$, perché la circuitazione del campo elettrostatico è nulla.
:::
::::

::::teorema{#potenziale-campo-uniforme titolo="Differenza di potenziale in un campo uniforme"}
In un campo uniforme $\vec{E}$, per due punti $A$ e $B$ qualsiasi
$$
V_B - V_A = -\vec{E} \cdot \overrightarrow{AB} = -E\, d ,
$$
dove $d$ è la proiezione dello spostamento da $A$ a $B$ sulla direzione di $\vec{E}$, positiva se concorde con il campo. Il potenziale diminuisce linearmente lungo le linee di campo e resta costante nelle direzioni perpendicolari al campo. Per esempio, tra due armature piane e parallele a distanza $d = 5{,}0\,\mathrm{mm}$ con differenza di potenziale $200\,\mathrm{V}$ il campo, uniforme se gli effetti di bordo sono trascurabili, vale $E = \dfrac{\Delta V}{d} = 4{,}0 \cdot 10^4\,\mathrm{V/m}$.

::grafico{assi=0 uguale=1 linee="0,0 0,4.5;6,0 6,4.5" vettori="0.4,0.4,1.6,0.4;0.4,2.2,1.6,2.2,E;0.4,4,1.6,4;4.3,0.4,5.5,0.4;4.3,4,5.5,4" segmenti="1.5,1.2,4.5,3.4;1.5,1.2,4.5,1.2;4.5,1.2,4.5,3.4" punti="1.5,1.2,pieno,A;4.5,3.4,pieno,B" etichette="3,0.85,d;-0.35,2.25,+;6.3,2.25,−" xmin=-0.6 xmax=6.6 ymin=-0.3 ymax=4.8 titolo="Nel campo uniforme tra due armature conta solo la proiezione $d$ dello spostamento $\overrightarrow{AB}$ sulla direzione del campo, e $V_B - V_A = -E d$"}

:::dimostrazione
Si sceglie come curva il segmento da $A$ a $B$. Il campo è costante, quindi esce dall'integrale e
$$
\int_{AB} \vec{E} \cdot d\vec{\ell} = \vec{E} \cdot \int_{AB} d\vec{\ell} = \vec{E} \cdot \overrightarrow{AB} = E\, d ,
$$
perché il prodotto scalare è il modulo di $\vec{E}$ per la proiezione di $\overrightarrow{AB}$ sulla direzione del campo. Per il teorema sulla differenza di potenziale e campo segue la tesi.
:::
::::

:::definizione{#elettronvolt titolo="Elettronvolt"}
L'**elettronvolt** è il lavoro che il campo compie su una carica $e$ quando questa attraversa una differenza di potenziale di $1\,\mathrm{V}$ verso potenziali minori,
$$
1\,\mathrm{eV} = 1{,}60 \cdot 10^{-19}\,\mathrm{C} \cdot 1\,\mathrm{V} = 1{,}60 \cdot 10^{-19}\,\mathrm{J} .
$$
L'elettronvolt è un'unità di energia, mentre il volt è l'unità del potenziale. Si usa per le energie di elettroni, ioni e nuclei, che in joule sono numeri molto piccoli: un elettrone accelerato da fermo da una differenza di potenziale di $2{,}0\,\mathrm{kV}$ acquista l'energia cinetica $2{,}0\,\mathrm{keV} = 3{,}2 \cdot 10^{-16}\,\mathrm{J}$, e l'energia potenziale dell'atomo di idrogeno vale circa $-27\,\mathrm{eV}$.
:::

## Potenziale di cariche puntiformi

::::teorema{#potenziale-carica-puntiforme titolo="Potenziale di una carica puntiforme"}
Il potenziale di una carica puntiforme $Q$ a distanza $r$, con $V = 0$ a distanza infinita, è
$$
V(r) = \frac{kQ}{r} .
$$
Il potenziale ha il segno di $Q$ e il suo valore assoluto decresce come $\dfrac{1}{r}$, più lentamente del modulo del campo, che decresce come $\dfrac{1}{r^2}$. Per esempio, a $30\,\mathrm{cm}$ da una carica di $2{,}0\,\mathrm{nC}$ il potenziale è $V = \dfrac{8{,}99 \cdot 10^9 \cdot 2{,}0 \cdot 10^{-9}}{0{,}30}\,\mathrm{V} \approx 60\,\mathrm{V}$.

:::dimostrazione
Per l'energia potenziale di due cariche puntiformi, una carica di prova $q_0$ a distanza $r$ da $Q$ ha energia potenziale $U = \dfrac{kQq_0}{r}$. Per la definizione di potenziale si divide per $q_0$ e si ottiene $V = \dfrac{kQ}{r}$.
:::
::::

::::teorema{#sovrapposizione-potenziale titolo="Potenziale di un sistema di cariche"}
Il potenziale prodotto in un punto $P$ dalle cariche puntiformi $Q_1, \dots, Q_n$, a distanze $r_1, \dots, r_n$ da $P$, è la somma dei potenziali delle singole cariche,
$$
V(P) = \sum_{i=1}^{n} \frac{k Q_i}{r_i} .
$$
La somma è tra scalari, quindi non richiede di scomporre vettori in componenti, e per questo il potenziale si calcola più facilmente del campo. Nel punto medio tra due cariche $+q$ e $-q$ il potenziale è nullo, perché i due termini sono opposti, mentre il campo è diverso da zero, perché i due campi hanno lo stesso verso. Il potenziale in un punto misura il lavoro per unità di carica necessario a portarvi una carica dall'infinito, il campo misura la forza per unità di carica in quel punto.

:::dimostrazione
Per il principio di sovrapposizione il campo è $\vec{E} = \sum_i \vec{E}_i$. Per la differenza di potenziale e campo, con il riferimento all'infinito,
$$
V(P) = \int_P^{\infty} \vec{E} \cdot d\vec{\ell} = \sum_{i=1}^{n} \int_P^{\infty} \vec{E}_i \cdot d\vec{\ell} = \sum_{i=1}^{n} \frac{k Q_i}{r_i} ,
$$
dove l'ultimo passaggio usa il potenziale di una carica puntiforme per ciascun termine.
:::
::::

::::teorema{#potenziale-dipolo titolo="Potenziale di un dipolo a grande distanza"}
Un dipolo è formato dalle cariche $+q$ e $-q$ a distanza $d$, con momento di dipolo $\vec{p}$ di modulo $p = qd$, diretto dalla carica negativa alla positiva. In un punto $P$ a distanza $r$ dal centro del dipolo, con $r$ molto maggiore di $d$, e tale che il segmento dal centro a $P$ formi l'angolo $\theta$ con $\vec{p}$, il potenziale è
$$
V \approx \frac{k\, p \cos\theta}{r^2} .
$$
Il potenziale è nullo sul piano perpendicolare al dipolo che passa per il suo centro, dove $\theta = 90^\circ$, e decresce come $\dfrac{1}{r^2}$, più rapidamente di quello di una carica puntiforme, perché a grande distanza i contributi delle due cariche quasi si compensano.

::grafico{assi=0 uguale=1 linee="-1.13,-0.59 -1.23,-0.57 -1.32,-0.53 -1.40,-0.48 -1.47,-0.41 -1.53,-0.34 -1.57,-0.26 -1.61,-0.17 -1.63,-0.06 -1.63,0.06 -1.61,0.17 -1.57,0.27 -1.52,0.35 -1.46,0.42 -1.39,0.48 -1.32,0.53 -1.22,0.57 -1.12,0.59 -0.99,0.59 -0.88,0.57 -0.79,0.54 -0.71,0.49 -0.64,0.43 -0.58,0.36 -0.53,0.27 -0.49,0.18 -0.47,0.07 -0.47,-0.04 -0.49,-0.16 -0.52,-0.25 -0.57,-0.34 -0.62,-0.41 -0.69,-0.47 -0.77,-0.53 -0.86,-0.57 -0.96,-0.59 -1.09,-0.60 -1.13,-0.59;-1.24,-0.96 -1.40,-0.93 -1.55,-0.87 -1.67,-0.80 -1.78,-0.71 -1.88,-0.60 -1.96,-0.48 -2.02,-0.34 -2.06,-0.19 -2.08,-0.01 -2.07,0.17 -2.03,0.33 -1.96,0.47 -1.89,0.59 -1.79,0.70 -1.68,0.79 -1.56,0.87 -1.42,0.92 -1.25,0.96 -1.06,0.96 -0.90,0.93 -0.76,0.87 -0.64,0.79 -0.53,0.69 -0.44,0.58 -0.37,0.45 -0.32,0.31 -0.29,0.14 -0.28,-0.05 -0.30,-0.23 -0.34,-0.38 -0.41,-0.52 -0.49,-0.64 -0.58,-0.74 -0.69,-0.83 -0.83,-0.90 -0.98,-0.95 -1.16,-0.96 -1.24,-0.96;-1.47,-1.47 -1.72,-1.43 -1.94,-1.35 -2.13,-1.24 -2.30,-1.10 -2.44,-0.95 -2.56,-0.77 -2.66,-0.57 -2.73,-0.34 -2.77,-0.07 -2.75,0.22 -2.70,0.46 -2.61,0.68 -2.50,0.87 -2.37,1.03 -2.21,1.18 -2.03,1.30 -1.83,1.39 -1.59,1.46 -1.31,1.47 -1.06,1.43 -0.84,1.34 -0.66,1.23 -0.50,1.08 -0.38,0.91 -0.27,0.71 -0.20,0.48 -0.16,0.23 -0.15,-0.06 -0.17,-0.33 -0.23,-0.58 -0.31,-0.79 -0.42,-0.98 -0.56,-1.14 -0.73,-1.28 -0.92,-1.38 -1.15,-1.45 -1.43,-1.47 -1.47,-1.47;1.30,-1.47 1.58,-1.46 1.82,-1.40 2.03,-1.30 2.21,-1.18 2.36,-1.04 2.50,-0.87 2.61,-0.68 2.70,-0.47 2.75,-0.23 2.77,0.06 2.73,0.33 2.66,0.56 2.57,0.76 2.45,0.94 2.30,1.10 2.14,1.23 1.95,1.34 1.73,1.42 1.47,1.47 1.20,1.46 0.96,1.40 0.76,1.30 0.59,1.17 0.44,1.01 0.33,0.83 0.24,0.62 0.18,0.38 0.15,0.11 0.15,-0.18 0.19,-0.44 0.26,-0.67 0.36,-0.88 0.48,-1.06 0.63,-1.21 0.81,-1.33 1.02,-1.42 1.27,-1.47 1.30,-1.47;1.07,-0.96 1.26,-0.96 1.43,-0.92 1.57,-0.86 1.69,-0.78 1.80,-0.69 1.89,-0.58 1.97,-0.46 2.03,-0.32 2.07,-0.16 2.08,0.02 2.06,0.20 2.02,0.35 1.95,0.49 1.87,0.61 1.78,0.71 1.67,0.80 1.54,0.88 1.40,0.93 1.23,0.96 1.04,0.96 0.88,0.92 0.74,0.86 0.62,0.78 0.52,0.68 0.43,0.56 0.36,0.43 0.31,0.28 0.28,0.11 0.28,-0.08 0.30,-0.25 0.35,-0.40 0.42,-0.54 0.50,-0.66 0.60,-0.76 0.71,-0.84 0.85,-0.91 1.00,-0.95 1.07,-0.96;0.96,-0.59 1.09,-0.60 1.20,-0.58 1.30,-0.54 1.38,-0.49 1.45,-0.43 1.51,-0.37 1.56,-0.29 1.60,-0.20 1.63,-0.09 1.63,0.03 1.62,0.14 1.58,0.24 1.54,0.32 1.48,0.40 1.42,0.46 1.34,0.52 1.25,0.56 1.15,0.59 1.03,0.60 0.91,0.58 0.82,0.55 0.73,0.50 0.66,0.45 0.60,0.38 0.55,0.30 0.50,0.21 0.48,0.11 0.47,-0.01 0.48,-0.12 0.51,-0.22 0.55,-0.31 0.61,-0.39 0.67,-0.46 0.74,-0.51 0.83,-0.55 0.93,-0.59 0.96,-0.59" segmenti="0,-3,0,3" punti="1,0,pieno;-1,0,pieno" etichette="0.15,2.6,V = 0;0.85,0.18,+q;-1.2,0.18,−q" xmin=-4.5 xmax=4.5 ymin=-3 ymax=3 titolo="Linee equipotenziali di un dipolo nel piano che lo contiene: curve chiuse attorno a ciascuna carica, con potenziali opposti in posizioni simmetriche, e il piano di simmetria a potenziale nullo"}

:::dimostrazione
Siano $r_+$ e $r_-$ le distanze di $P$ dalle cariche $+q$ e $-q$. Per il potenziale di un sistema di cariche
$$
V = kq \left( \frac{1}{r_+} - \frac{1}{r_-} \right) = kq\, \frac{r_- - r_+}{r_+\, r_-} .
$$
Se $r$ è molto maggiore di $d$, i segmenti da $P$ alle due cariche sono quasi paralleli; la differenza $r_- - r_+$ è circa la proiezione del segmento di lunghezza $d$ sulla direzione di $P$, cioè $d\cos\theta$, e il prodotto $r_+ r_-$ è circa $r^2$. Sostituendo si ottiene $V \approx \dfrac{kqd\cos\theta}{r^2} = \dfrac{kp\cos\theta}{r^2}$.
:::
::::

## Potenziale di distribuzioni continue

:::osservazione{#potenziale-distribuzione-continua titolo="Potenziale di una distribuzione continua"}
Si divide la distribuzione in elementi di carica $dq$, ciascuno così piccolo da potersi considerare puntiforme; l'elemento a distanza $r$ da $P$ dà il contributo $\dfrac{k\,dq}{r}$, e per il potenziale di un sistema di cariche il potenziale totale è la somma dei contributi, che al limite diventa
$$
V(P) = k \int \frac{dq}{r} ,
$$
con $dq = \lambda\, d\ell$ per una distribuzione lineare, $dq = \sigma\, dA$ per una superficiale e $dq = \rho\, d\tau$ per una volumica, dove $d\tau$ è l'elemento di volume. L'integrando è uno scalare, quindi si evita il calcolo delle componenti necessario per il campo; per gli integrali multipli si rimanda all'argomento sugli integrali doppi e tripli di Analisi 2. La formula presuppone $V = 0$ all'infinito, e perciò si applica alle distribuzioni contenute in una regione limitata.
:::

::::teorema{#potenziale-anello titolo="Potenziale di un anello sull'asse"}
Un anello sottile di raggio $R$ porta la carica $Q$ distribuita uniformemente. In un punto $P$ dell'asse dell'anello a distanza $x$ dal centro il potenziale è
$$
V(x) = \frac{kQ}{\sqrt{R^2 + x^2}} .
$$
Il potenziale è massimo nel centro, dove vale $\dfrac{kQ}{R}$, e per $x$ molto maggiore di $R$ tende a $\dfrac{kQ}{|x|}$, il potenziale di una carica puntiforme. Per esempio, per $R = 5{,}0\,\mathrm{cm}$ e $Q = 10\,\mathrm{nC}$ il potenziale nel centro vale $\dfrac{8{,}99 \cdot 10^9 \cdot 1{,}0 \cdot 10^{-8}}{0{,}050}\,\mathrm{V} \approx 1{,}8\,\mathrm{kV}$.

::grafico{assi=0 uguale=1 curve="0.35*cos(t),2*sin(t),0,6.29" linee="-1,0 5.6,0" segmenti="0,2,4,0;0,0,0,2" punti="0,2,pieno,dq;4,0,pieno,P;0,0,pieno" etichette="-0.45,1,R;2,-0.35,x;2.25,1.35,r" xmin=-1.2 xmax=5.8 ymin=-2.4 ymax=2.6 titolo="Ogni elemento $dq$ dell'anello dista da $P$ la stessa lunghezza $r = \sqrt{R^2 + x^2}$, quindi il potenziale in $P$ è $\dfrac{kQ}{r}$"}

:::dimostrazione
Per il potenziale di una distribuzione continua $V = k \displaystyle\int \frac{dq}{r}$. Ogni elemento $dq$ dell'anello dista da $P$ la stessa lunghezza $r = \sqrt{R^2 + x^2}$, per il teorema di Pitagora nel triangolo rettangolo con cateti $R$ e $x$. Il denominatore è costante ed esce dall'integrale, perciò
$$
V = \frac{k}{\sqrt{R^2 + x^2}} \int dq = \frac{kQ}{\sqrt{R^2 + x^2}} .
$$
:::
::::

::::teorema{#potenziale-disco titolo="Potenziale di un disco sull'asse"}
Un disco sottile di raggio $R$ porta una carica distribuita uniformemente con densità superficiale $\sigma$. In un punto dell'asse del disco a distanza $x > 0$ dal centro il potenziale è
$$
V(x) = \frac{\sigma}{2\varepsilon_0} \left( \sqrt{R^2 + x^2} - x \right) .
$$
Nel centro del disco il potenziale vale $\dfrac{\sigma R}{2\varepsilon_0}$. Per $x$ molto maggiore di $R$ si ha $\sqrt{R^2 + x^2} - x = \dfrac{R^2}{\sqrt{R^2 + x^2} + x} \approx \dfrac{R^2}{2x}$, quindi $V \approx \dfrac{\sigma \pi R^2}{4\pi\varepsilon_0\, x} = \dfrac{kQ}{x}$, con $Q = \sigma \pi R^2$ carica del disco, come per una carica puntiforme.

:::dimostrazione
Si divide il disco in anelli concentrici di raggio $s$ e spessore $ds$; l'anello ha area $2\pi s\, ds$ e carica $dq = 2\pi\sigma s\, ds$. Per il potenziale di un anello sull'asse il suo contributo è $\dfrac{k\, dq}{\sqrt{s^2 + x^2}}$, quindi
$$
\begin{aligned}
V &= \int_0^R \frac{2\pi k \sigma\, s}{\sqrt{s^2 + x^2}}\, ds \\[6pt]
&= 2\pi k \sigma \left[ \sqrt{s^2 + x^2} \right]_0^R \\[6pt]
&= \frac{\sigma}{2\varepsilon_0} \left( \sqrt{R^2 + x^2} - x \right) ,
\end{aligned}
$$
dove si è usato $2\pi k = \dfrac{2\pi}{4\pi\varepsilon_0} = \dfrac{1}{2\varepsilon_0}$ e $\sqrt{x^2} = x$ per $x > 0$.
:::
::::

:::richiamo{titolo="Campo di una distribuzione a simmetria sferica"}
Per una carica $Q$ distribuita con simmetria sferica in una sfera di raggio $R$, il campo è radiale e, a distanza $r$ dal centro, vale $E = \dfrac{kQ}{r^2}$ per $r \geq R$. All'interno, per $r < R$, il campo è nullo se la carica sta su un guscio sferico sottile e vale $E = \dfrac{kQ\,r}{R^3}$ se la carica è distribuita uniformemente nel volume (argomento sul flusso del campo elettrico e la legge di Gauss).
:::

::::teorema{#potenziale-sfera titolo="Potenziale di una sfera carica"}
Una carica $Q$ è distribuita con simmetria sferica in una sfera di raggio $R$. All'esterno, per $r \geq R$, il potenziale è quello di una carica puntiforme posta nel centro, $V(r) = \dfrac{kQ}{r}$. All'interno:

- per un guscio sferico sottile il potenziale è costante, $V(r) = \dfrac{kQ}{R}$;
- per una sfera uniformemente carica nel volume
$$
V(r) = \frac{kQ\,(3R^2 - r^2)}{2R^3} .
$$

Nel secondo caso il potenziale nel centro è $\dfrac{3}{2}$ del potenziale sulla superficie. In entrambi i casi $V$ è continuo in $r = R$, mentre il campo del guscio è discontinuo sulla superficie.

::grafico{f="x<1 ? (3-x^2)/2 : 1/x;x<1 ? x : 1/x^2" segmenti="1,0,1,1.5" etichette="1.05,1.62,R" xmin=0 xmax=4 ymin=0 ymax=1.8 nomi="r,V  E" legenda="V(r);E(r)" titolo="Potenziale e campo di una sfera uniformemente carica, con $R = 1$ e $\dfrac{kQ}{R} = 1$ e il campo in unità di $\dfrac{kQ}{R^2}$: il potenziale ha un massimo nel centro, dove il campo è nullo"}

:::dimostrazione
Il campo è radiale, quindi si integra lungo un raggio e, per la differenza di potenziale e campo, $V(r) = \displaystyle\int_r^{\infty} E(s)\, ds$. Per $r \geq R$ si ha $V(r) = \displaystyle\int_r^{\infty} \frac{kQ}{s^2}\, ds = \frac{kQ}{r}$. Per $r < R$ si spezza l'integrale in $r = R$:
$$
V(r) = V(R) + \int_r^R E(s)\, ds = \frac{kQ}{R} + \int_r^R E(s)\, ds .
$$
Per il guscio il campo interno è nullo, quindi $V(r) = \dfrac{kQ}{R}$. Per la sfera uniformemente carica
$$
V(r) = \frac{kQ}{R} + \frac{kQ}{R^3} \cdot \frac{R^2 - r^2}{2} = \frac{kQ\,(3R^2 - r^2)}{2R^3} .
$$
:::
::::

::::teorema{#potenziale-filo-infinito titolo="Differenza di potenziale nel campo di un filo infinito"}
Un filo rettilineo infinito porta una carica distribuita uniformemente con densità lineare $\lambda$. Per due punti a distanze $r_A$ e $r_B$ dal filo
$$
V_B - V_A = \frac{\lambda}{2\pi\varepsilon_0} \ln \frac{r_A}{r_B} .
$$
Il potenziale non si può porre nullo all'infinito, perché per $r_B \to +\infty$ il logaritmo diverge; la carica del filo si estende infatti fino all'infinito. Si sceglie allora $V = 0$ a una distanza finita $r_0$, e si ottiene $V(r) = \dfrac{\lambda}{2\pi\varepsilon_0} \ln \dfrac{r_0}{r}$. Per $\lambda = 10\,\mathrm{nC/m}$ la differenza tra il potenziale a $1{,}0\,\mathrm{cm}$ e quello a $10\,\mathrm{cm}$ dal filo è $2k\lambda \ln 10 \approx 4{,}1 \cdot 10^2\,\mathrm{V}$.

:::dimostrazione
Per la legge di Gauss il campo del filo è radiale e vale $E = \dfrac{\lambda}{2\pi\varepsilon_0\, r}$ (argomento sul flusso del campo elettrico e la legge di Gauss). Integrando lungo un raggio, per la differenza di potenziale e campo
$$
V_B - V_A = -\int_{r_A}^{r_B} \frac{\lambda}{2\pi\varepsilon_0\, r}\, dr = -\frac{\lambda}{2\pi\varepsilon_0} \ln \frac{r_B}{r_A} = \frac{\lambda}{2\pi\varepsilon_0} \ln \frac{r_A}{r_B} .
$$
:::
::::

## Superfici equipotenziali

:::definizione{#superfici-equipotenziali titolo="Superfici equipotenziali"}
Una **superficie equipotenziale** è l'insieme dei punti in cui il potenziale ha un valore assegnato $V_0$, cioè la superficie di equazione $V(x, y, z) = V_0$. Per una carica puntiforme le superfici equipotenziali sono sfere concentriche alla carica, per un campo uniforme sono piani perpendicolari al campo. Il lavoro del campo su una carica che si sposta tra due punti della stessa superficie equipotenziale è nullo, perché $W = -q\,\Delta V$ e $\Delta V = 0$.

::grafico{assi=0 uguale=1 curve="cos(t),sin(t),0,6.29;1.5*cos(t),1.5*sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29" vettori="0.3,0,3.7,0;0,0.3,0,3.7;-0.3,0,-3.7,0;0,-0.3,0,-3.7;0.21,0.21,2.62,2.62,E;-0.21,0.21,-2.62,2.62;-0.21,-0.21,-2.62,-2.62;0.21,-0.21,2.62,-2.62" punti="0,0,pieno,+Q" etichette="1.08,-0.4,V₁;1.55,-0.58,V₂;2.98,-1.1,V₃" xmin=-4 xmax=4 ymin=-4 ymax=4 legenda=0 titolo="Superfici equipotenziali di una carica positiva con salti di potenziale uguali, $V_1 = 3V_3$ e $V_2 = 2V_3$: le sfere si diradano dove il campo è più debole, e le linee di campo le attraversano perpendicolarmente"}

:::

::::teorema{#campo-perpendicolare-equipotenziali titolo="Campo e superfici equipotenziali"}
In ogni punto il campo elettrostatico è perpendicolare alla superficie equipotenziale che passa per quel punto ed è diretto verso i potenziali decrescenti. Se due superfici equipotenziali vicine differiscono di $\Delta V$ e distano $\Delta s$, il modulo del campo tra di esse è circa
$$
E \approx \frac{|\Delta V|}{\Delta s} .
$$
Il campo è quindi più intenso dove le superfici equipotenziali con uguale salto di potenziale sono più fitte. Le linee di campo e le superfici equipotenziali si disegnano insieme: note le une, le altre si tracciano perpendicolari ad esse.

:::dimostrazione
Per la differenza di potenziale e campo, uno spostamento infinitesimo $d\vec{\ell}$ produce la variazione $dV = -\vec{E} \cdot d\vec{\ell}$. Se $d\vec{\ell}$ è tangente alla superficie equipotenziale, $dV = 0$ e quindi $\vec{E} \cdot d\vec{\ell} = 0$; il campo è perpendicolare a ogni direzione tangente, cioè alla superficie. Se $d\vec{\ell}$ è concorde con $\vec{E}$, $dV = -E\, d\ell < 0$, perciò il potenziale diminuisce nel verso del campo. Infine, lungo la normale le due superfici distano $\Delta s$ e $|\Delta V| \approx E\, \Delta s$, da cui segue la stima del modulo.
:::
::::

## Campo come gradiente del potenziale

:::richiamo{titolo="Gradiente"}
Il gradiente di una funzione differenziabile $f(x, y, z)$ è il vettore $\nabla f = \left( \dfrac{\partial f}{\partial x}, \dfrac{\partial f}{\partial y}, \dfrac{\partial f}{\partial z} \right)$, e il differenziale di $f$ è $df = \nabla f \cdot d\vec{r}$. Il gradiente è perpendicolare agli insiemi di livello di $f$ e diretto verso i valori crescenti. Si rimanda all'argomento sul calcolo differenziale in più variabili di Analisi 2.
:::

::::teorema{#campo-gradiente-potenziale titolo="Campo come gradiente del potenziale"}
Se il potenziale $V$ è differenziabile, il campo elettrostatico è
$$
\vec{E} = -\nabla V , \qquad \text{cioè} \qquad E_x = -\frac{\partial V}{\partial x} , \quad E_y = -\frac{\partial V}{\partial y} , \quad E_z = -\frac{\partial V}{\partial z} .
$$
Se $V$ dipende solo dalla distanza $r$ da un centro, il campo è radiale con componente $E_r = -\dfrac{dV}{dr}$. Il teorema permette di calcolare prima il potenziale, che è una somma di scalari, e poi il campo con una derivazione. Per esempio, dal potenziale di un anello sull'asse si ottiene
$$
E_x = -\frac{d}{dx}\, \frac{kQ}{\sqrt{R^2 + x^2}} = \frac{kQ\, x}{(R^2 + x^2)^{\frac{3}{2}}} ,
$$
che è il campo dell'anello ricavato per integrazione nell'argomento sul campo elettrico.

:::dimostrazione
Per la differenza di potenziale e campo, applicata a uno spostamento infinitesimo $d\vec{r}$, la variazione del potenziale è $dV = -\vec{E} \cdot d\vec{r}$. D'altra parte $V$ è differenziabile, quindi $dV = \nabla V \cdot d\vec{r}$. Uguagliando si ottiene $(\vec{E} + \nabla V) \cdot d\vec{r} = 0$ per ogni $d\vec{r}$, e un vettore che ha prodotto scalare nullo con ogni vettore è il vettore nullo; perciò $\vec{E} = -\nabla V$.
:::
::::

:::esempio{titolo="Campo da un potenziale assegnato"}
In una regione priva di cariche il potenziale è $V(x, y) = a\,(x^2 - y^2)$ con $a = 40\,\mathrm{V/m^2}$. Per il campo come gradiente del potenziale
$$
E_x = -\frac{\partial V}{\partial x} = -2ax , \qquad E_y = -\frac{\partial V}{\partial y} = 2ay .
$$
Nel punto di coordinate $(1{,}0\,\mathrm{m};\ 0{,}50\,\mathrm{m})$ si ha $\vec{E} = (-80\,\hat{\imath} + 40\,\hat{\jmath})\,\mathrm{V/m}$, di modulo $\sqrt{80^2 + 40^2}\,\mathrm{V/m} \approx 89\,\mathrm{V/m}$. Le linee equipotenziali $x^2 - y^2 = \text{costante}$ sono iperboli, e il campo è perpendicolare a esse in ogni punto.
:::

## Energia di un sistema di cariche

::::teorema{#energia-sistema-cariche titolo="Energia elettrostatica di un sistema di cariche"}
L'energia potenziale elettrostatica di un sistema di cariche puntiformi $q_1, \dots, q_n$, con $r_{ij}$ distanza tra $q_i$ e $q_j$, è la somma dei contributi di tutte le coppie, ciascuna contata una volta:
$$
U = \sum_{i < j} \frac{k\, q_i q_j}{r_{ij}} .
$$
Il numero $U$ è il lavoro esterno necessario per formare il sistema portando le cariche una alla volta dall'infinito, con velocità trascurabile; $-U$ è il lavoro esterno per separarle di nuovo fino a distanze infinite. Per esempio, per le cariche $+q$, $+q$, $-q$ ai vertici di un triangolo equilatero di lato $a$ le coppie sono tre e $U = \dfrac{kq^2}{a}(1 - 1 - 1) = -\dfrac{kq^2}{a}$; con $q = 1{,}0\,\mathrm{\mu C}$ e $a = 3{,}0\,\mathrm{cm}$ si ottiene $U \approx -0{,}30\,\mathrm{J}$.

::grafico{assi=0 uguale=1 linee="0,0 4,0 2,3.464 0,0" punti="0,0,pieno,q₁;4,0,pieno,q₂;2,3.464,pieno,q₃" etichette="1.9,-0.4,r₁₂;0.55,1.85,r₁₃;3.05,1.85,r₂₃" xmin=-0.8 xmax=4.8 ymin=-0.8 ymax=4 titolo="Tre cariche e le tre distanze $r_{12}$, $r_{13}$, $r_{23}$: l'energia del sistema ha un termine per ciascuna coppia"}

:::dimostrazione
Si porta $q_1$ dall'infinito nella sua posizione: non ci sono altre cariche, quindi non c'è campo e il lavoro esterno è nullo. Si porta poi $q_2$: la carica si muove nel campo di $q_1$, e il lavoro esterno, opposto al lavoro del campo perché l'energia cinetica resta nulla, è $q_2 V_1 = \dfrac{k q_1 q_2}{r_{12}}$, dove $V_1$ è il potenziale di $q_1$ nella posizione finale di $q_2$. La carica $q_3$ si muove nel campo di $q_1$ e $q_2$, quindi per il potenziale di un sistema di cariche il lavoro esterno è $q_3 \left( \dfrac{k q_1}{r_{13}} + \dfrac{k q_2}{r_{23}} \right)$. Proseguendo, la carica $q_j$ porta un termine per ogni carica $q_i$ con $i < j$ già presente, e la somma di tutti i lavori è la tesi.
:::
::::

:::osservazione{#energia-come-somma-potenziali titolo="Energia come somma di cariche per potenziali"}
Se $V_i$ è il potenziale nella posizione di $q_i$ prodotto da tutte le *altre* cariche, l'energia del sistema si scrive
$$
U = \frac{1}{2} \sum_{i=1}^{n} q_i V_i .
$$
Infatti la somma $\sum_i q_i V_i$ contiene ogni coppia due volte, una come $q_i \dfrac{k q_j}{r_{ij}}$ e una come $q_j \dfrac{k q_i}{r_{ij}}$, e il fattore $\dfrac{1}{2}$ la conta una volta sola. Per una distribuzione continua si forma il sistema aggiungendo carica a poco a poco. Per un guscio sferico di raggio $R$ che porta già la carica $q$, il potenziale sulla superficie è $\dfrac{kq}{R}$, e portare dall'infinito la carica $dq$ richiede il lavoro $\dfrac{kq}{R}\,dq$; perciò l'energia di un guscio con carica $Q$ è
$$
U = \int_0^Q \frac{kq}{R}\, dq = \frac{kQ^2}{2R} = \frac{1}{2} Q V .
$$
Per l'energia immagazzinata nei condensatori e nel campo elettrico si rimanda all'argomento su conduttori, condensatori e dielettrici.
:::

## Moto di cariche e conservazione dell'energia

:::richiamo{titolo="Teorema dell'energia cinetica"}
Il lavoro totale delle forze che agiscono su un punto materiale di massa $m$ che va da $A$ a $B$ è uguale alla variazione della sua energia cinetica, $W_{\text{tot}} = \dfrac{1}{2} m v_B^2 - \dfrac{1}{2} m v_A^2$ (argomento sul lavoro e l'energia).
:::

::::teorema{#conservazione-energia-cariche titolo="Conservazione dell'energia per una carica in un campo elettrostatico"}
Si consideri una particella di massa $m$ e carica $q$ soggetta solo alla forza di un campo elettrostatico, con il peso trascurabile. Allora la somma dell'energia cinetica e dell'energia potenziale elettrica si conserva: per due punti $A$ e $B$ della traiettoria
$$
\frac{1}{2} m v_A^2 + q V_A = \frac{1}{2} m v_B^2 + q V_B .
$$
Una particella che parte da ferma e attraversa una differenza di potenziale di valore assoluto $|\Delta V|$, nel verso in cui la sua energia potenziale diminuisce, raggiunge la velocità
$$
v = \sqrt{\frac{2\, |q|\, |\Delta V|}{m}} .
$$
Per esempio, un elettrone accelerato da fermo con $100\,\mathrm{V}$ raggiunge $v = \sqrt{\dfrac{2 \cdot 1{,}60 \cdot 10^{-19} \cdot 100}{9{,}11 \cdot 10^{-31}}}\,\mathrm{m/s} \approx 5{,}9 \cdot 10^6\,\mathrm{m/s}$. Il peso dell'elettrone, circa $9 \cdot 10^{-30}\,\mathrm{N}$, è trascurabile rispetto a forze elettriche come $eE \approx 1{,}6 \cdot 10^{-17}\,\mathrm{N}$ in un campo di soli $100\,\mathrm{V/m}$.

:::dimostrazione
Per il teorema dell'energia cinetica il lavoro della forza elettrica, che è l'unica forza, è uguale alla variazione dell'energia cinetica, $W_{A \to B} = \dfrac{1}{2} m v_B^2 - \dfrac{1}{2} m v_A^2$. Per la definizione di potenziale $W_{A \to B} = q\,(V_A - V_B)$. Uguagliando le due espressioni e riordinando si ottiene la tesi. Con $v_A = 0$ si ha $\dfrac{1}{2} m v_B^2 = q\,(V_A - V_B) = |q|\,|\Delta V|$, da cui segue la formula della velocità.
:::
::::

:::osservazione{#distanza-minima-avvicinamento titolo="Distanza minima di avvicinamento"}
Una particella di carica $q$ e energia cinetica $K_0$, molto lontana da una carica fissa $Q$ concorde, si muove verso $Q$ lungo la retta che le congiunge. La forza è repulsiva, quindi la particella rallenta fino a fermarsi alla **distanza minima** $r_{\min}$ e poi torna indietro. Per la conservazione dell'energia, con $V = 0$ all'infinito,
$$
K_0 = \frac{k\, q Q}{r_{\min}} \quad\Longrightarrow\quad r_{\min} = \frac{k\, q Q}{K_0} .
$$
Per una particella alfa, di carica $2e$, con $K_0 = 5{,}0\,\mathrm{MeV}$, diretta verso un nucleo d'oro di carica $79e$ considerato fermo perché molto più massivo, si ottiene $r_{\min} = \dfrac{8{,}99 \cdot 10^9 \cdot 158 \cdot (1{,}60 \cdot 10^{-19})^2}{5{,}0 \cdot 10^6 \cdot 1{,}60 \cdot 10^{-19}}\,\mathrm{m} \approx 4{,}5 \cdot 10^{-14}\,\mathrm{m}$.

::grafico{f="2/x;1" punti="2,1,pieno" segmenti="2,0,2,1" etichette="2.4,0.2,r min;5.3,1.15,K₀" xmin=0 xmax=6 ymin=0 ymax=3 nomi="r,U" legenda="U(r) = \dfrac{kqQ}{r};K_0" titolo="La particella può trovarsi solo dove $U(r) \leq K_0$: la retta di ordinata $K_0$ incontra la curva dell'energia potenziale nel punto di inversione $r_{\min}$"}

:::
