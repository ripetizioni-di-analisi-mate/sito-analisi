---
titolo: Campo elettrico
sommario: Come si definisce il campo elettrico, come si calcola per cariche puntiformi, per il dipolo e per distribuzioni continue come il filo, l'anello, il disco e il piano, come lo descrivono le linee di campo e come si muove una carica in un campo uniforme.
---

## Definizione del campo elettrico

In tutto l'argomento le cariche che producono il campo sono ferme nel vuoto, in un sistema di riferimento inerziale.

:::richiamo{titolo="Legge di Coulomb"}
Due cariche puntiformi $q_1$ e $q_2$ poste a distanza $r$ nel vuoto si esercitano forze di modulo $F = k\,\dfrac{|q_1 q_2|}{r^2}$, con $k = \dfrac{1}{4\pi\varepsilon_0} = 8{,}99 \cdot 10^{9}\,\mathrm{N\cdot m^2/C^2}$, dirette lungo la congiungente, repulsive tra cariche dello stesso segno e attrattive tra cariche di segno opposto. La forza dovuta a più cariche è la somma vettoriale delle singole forze. Si rimanda all'argomento sulla carica elettrica e la legge di Coulomb.
:::

:::definizione{#campo-elettrico titolo="Campo elettrico"}
Si consideri un insieme di cariche ferme, dette **cariche sorgenti**, e si ponga nel punto $P$ una carica puntiforme $q_0$, detta *carica di prova*, abbastanza piccola da non spostare le cariche sorgenti. Se $\vec{F}$ è la forza che le cariche sorgenti esercitano su $q_0$, il **campo elettrico** in $P$ è
$$
\vec{E}(P) = \frac{\vec{F}}{q_0} .
$$
Per la legge di Coulomb la forza è proporzionale a $q_0$, quindi il rapporto non dipende dalla carica di prova e descrive una proprietà del punto $P$. Il campo elettrico associa un vettore a ogni punto dello spazio, cioè è un campo vettoriale, per il quale si rimanda all'argomento sui campi vettoriali di Analisi 2. Si misura in $\mathrm{N/C}$, unità che coincide con il $\mathrm{V/m}$, come si vedrà nell'argomento sul potenziale elettrico.

Per esempio, se una carica di prova $q_0 = 2{,}0\,\mathrm{nC}$ subisce in $P$ una forza di modulo $6{,}0 \cdot 10^{-5}\,\mathrm{N}$, il campo in $P$ ha modulo $E = \dfrac{6{,}0 \cdot 10^{-5}}{2{,}0 \cdot 10^{-9}}\,\mathrm{N/C} = 3{,}0 \cdot 10^{4}\,\mathrm{N/C}$ e ha la direzione e il verso della forza.
:::

:::osservazione{#forza-in-un-campo titolo="Forza su una carica posta nel campo"}
Noto il campo $\vec{E}$ in un punto, la forza su una carica puntiforme $q$ posta in quel punto è
$$
\vec{F} = q\,\vec{E} .
$$
Se $q > 0$ la forza ha lo stesso verso del campo, se $q < 0$ ha verso opposto. Il campo divide quindi il problema in due parti: prima si calcola il campo prodotto dalle sorgenti, poi la forza su qualunque carica posta nel campo. Un elettrone in un campo di $3{,}0 \cdot 10^{4}\,\mathrm{N/C}$ subisce la forza di modulo $eE = 1{,}60 \cdot 10^{-19} \cdot 3{,}0 \cdot 10^{4}\,\mathrm{N} = 4{,}8 \cdot 10^{-15}\,\mathrm{N}$, opposta al campo.
:::

## Campo di cariche puntiformi

::::teorema{#campo-carica-puntiforme titolo="Campo di una carica puntiforme"}
Il campo prodotto da una carica puntiforme $q$ ferma nel vuoto, in un punto $P$ a distanza $r$ dalla carica, è
$$
\vec{E} = k\,\frac{q}{r^2}\,\hat{r} = \frac{1}{4\pi\varepsilon_0}\,\frac{q}{r^2}\,\hat{r} ,
$$
dove $\hat{r}$ è il versore diretto dalla carica verso $P$. Il campo ha modulo $E = k\,\dfrac{|q|}{r^2}$ ed è radiale, uscente dalla carica se $q > 0$ ed entrante se $q < 0$. Poiché il modulo è inversamente proporzionale al quadrato della distanza, raddoppiando la distanza il campo diventa quattro volte più debole. A $10\,\mathrm{cm}$ da una carica di $5{,}0\,\mathrm{nC}$ si ha $E = \dfrac{8{,}99 \cdot 10^{9} \cdot 5{,}0 \cdot 10^{-9}}{0{,}10^2}\,\mathrm{N/C} \approx 4{,}5 \cdot 10^{3}\,\mathrm{N/C}$.

::grafico{assi=0 uguale=1 linee="0.7,0 1.9,0;1.75,0.1 1.9,0 1.75,-0.1;1.29,0.54 1.57,0.65;1.43,0.68 1.57,0.65 1.49,0.53;0.49,0.49 1.34,1.34;1.17,1.31 1.34,1.34 1.31,1.17;0.54,1.29 0.65,1.57;0.53,1.49 0.65,1.57 0.68,1.43;0,0.7 0,1.9;-0.1,1.75 0,1.9 0.1,1.75;-0.54,1.29 -0.65,1.57;-0.68,1.43 -0.65,1.57 -0.53,1.49;-0.49,0.49 -1.34,1.34;-1.31,1.17 -1.34,1.34 -1.17,1.31;-1.29,0.54 -1.57,0.65;-1.49,0.53 -1.57,0.65 -1.43,0.68;-0.7,0 -1.9,0;-1.75,-0.1 -1.9,0 -1.75,0.1;-1.29,-0.54 -1.57,-0.65;-1.43,-0.68 -1.57,-0.65 -1.49,-0.53;-0.49,-0.49 -1.34,-1.34;-1.17,-1.31 -1.34,-1.34 -1.31,-1.17;-0.54,-1.29 -0.65,-1.57;-0.53,-1.49 -0.65,-1.57 -0.68,-1.43;0,-0.7 0,-1.9;0.1,-1.75 0,-1.9 -0.1,-1.75;0.54,-1.29 0.65,-1.57;0.68,-1.43 0.65,-1.57 0.53,-1.49;0.49,-0.49 1.34,-1.34;1.31,-1.17 1.34,-1.34 1.17,-1.31;1.29,-0.54 1.57,-0.65;1.49,-0.53 1.57,-0.65 1.43,-0.68" punti="0,0,pieno,+q" xmin=-2.2 xmax=2.2 ymin=-2.2 ymax=2.2 titolo="Campo di una carica puntiforme positiva: i vettori sono uscenti e, alla distanza doppia, la loro lunghezza diventa un quarto"}

:::dimostrazione
Si pone in $P$ una carica di prova $q_0$. Per la **legge di Coulomb** la forza che $q$ esercita su $q_0$ è $\vec{F} = k\,\dfrac{q\,q_0}{r^2}\,\hat{r}$, con $\hat{r}$ diretto da $q$ verso $q_0$; il verso è corretto per ogni combinazione di segni, perché il prodotto $q\,q_0$ è positivo tra cariche concordi, che si respingono, e negativo tra cariche discordi, che si attraggono. Dividendo per $q_0$, per la definizione di campo elettrico si ottiene la tesi.
:::
::::

:::teorema{#sovrapposizione-campi titolo="Principio di sovrapposizione per il campo elettrico"}
Il campo prodotto in un punto $P$ dalle cariche puntiformi $q_1, \dots, q_n$ è la somma vettoriale dei campi che ciascuna carica produrrebbe da sola:
$$
\vec{E}(P) = \sum_{i=1}^{n} k\,\frac{q_i}{r_i^2}\,\hat{r}_i ,
$$
dove $r_i$ è la distanza di $P$ da $q_i$ e $\hat{r}_i$ il versore diretto da $q_i$ verso $P$. Il principio segue dal principio di sovrapposizione delle forze elettriche, che è una legge sperimentale, dividendo la forza totale sulla carica di prova per $q_0$. Nei calcoli si scrive ogni campo in componenti cartesiane, si sommano le componenti e solo alla fine si ricavano il modulo e la direzione del campo risultante.
:::

:::esempio{titolo="Campo di due cariche opposte"}
Una carica $q = 4{,}0\,\mathrm{nC}$ si trova in $A = (-3{,}0\,\mathrm{cm},\, 0)$ e una carica $-q$ in $B = (3{,}0\,\mathrm{cm},\, 0)$. Il punto $P = (0,\, 4{,}0\,\mathrm{cm})$ dista $5{,}0\,\mathrm{cm}$ da entrambe, quindi i due campi hanno lo stesso modulo
$$
E_1 = E_2 = \frac{8{,}99 \cdot 10^{9} \cdot 4{,}0 \cdot 10^{-9}}{0{,}050^2}\,\mathrm{N/C} \approx 1{,}44 \cdot 10^{4}\,\mathrm{N/C} .
$$
Il campo $\vec{E}_1$ è uscente da $A$ e ha la direzione del versore $\left( \dfrac{3}{5}, \dfrac{4}{5} \right)$; il campo $\vec{E}_2$ è diretto verso $B$, con versore $\left( \dfrac{3}{5}, -\dfrac{4}{5} \right)$. Le componenti $y$ si annullano e le componenti $x$ si sommano, perciò
$$
\vec{E} = 2 E_1 \cdot \frac{3}{5}\,\hat{\imath} \approx 1{,}7 \cdot 10^{4}\,\mathrm{N/C}\;\hat{\imath} ,
$$
cioè il campo in $P$ è parallelo alla congiungente $AB$ e rivolto verso la carica negativa.

::grafico{assi=0 uguale=1 punti="-3,0,pieno,+q;3,0,pieno,−q;0,4,pieno,P" segmenti="-3,0,0,4;3,0,0,4;1.08,5.44,2.16,4;1.08,2.56,2.16,4" vettori="0,4,2.16,4,E;0,4,1.08,5.44,E₁;0,4,1.08,2.56,E₂" xmin=-3.8 xmax=3.8 ymin=-0.8 ymax=6 titolo="Il campo $\vec{E}_1$ della carica positiva è uscente, il campo $\vec{E}_2$ della carica negativa è entrante; la somma $\vec{E}$ è parallela alla congiungente delle cariche"}

:::

:::attenzione{#somma-vettoriale-dei-campi}
I moduli dei campi in generale *non* si sommano. Nell'esempio precedente $E_1 + E_2 \approx 2{,}9 \cdot 10^{4}\,\mathrm{N/C}$, mentre il campo risultante ha modulo $1{,}7 \cdot 10^{4}\,\mathrm{N/C}$, perché i due vettori formano un angolo e le loro componenti $y$ si cancellano. La somma dei moduli dà il modulo del campo risultante solo quando i campi sono paralleli e concordi.
:::

## Linee di campo

:::definizione{#linee-di-campo titolo="Linee di campo"}
Una **linea di campo** è una curva orientata che in ogni suo punto è tangente al campo elettrico e ha il verso del campo. Le linee si tracciano in modo che il loro numero per unità di area, su una superficie perpendicolare, sia proporzionale al modulo del campo; perciò le linee sono più fitte dove il campo è più intenso. Per una carica puntiforme positiva le linee sono semirette uscenti dalla carica, e attraverso una sfera di raggio $r$ centrata nella carica passa sempre lo stesso numero di linee, distribuito su un'area $4\pi r^2$; la densità delle linee decresce quindi come $\dfrac{1}{r^2}$, come il modulo del campo.
:::

:::osservazione{#proprieta-linee-di-campo titolo="Proprietà delle linee di campo"}
Per un campo prodotto da cariche ferme valgono le proprietà seguenti.

- Le linee escono dalle cariche positive ed entrano nelle cariche negative, oppure provengono dall'infinito o vi si dirigono; il numero di linee che escono da una carica è proporzionale alla carica.
- Due linee di campo *non* si intersecano nei punti in cui $\vec{E} \neq \vec{0}$, perché in ogni punto il campo ha una sola direzione.
- Nei punti in cui il campo è nullo non passa alcuna linea con una direzione definita.

Nel dipolo, formato da due cariche opposte, tutte le linee che escono dalla carica positiva entrano nella carica negativa, salvo quelle che si allontanano all'infinito; tra due cariche positive uguali le linee si respingono e nel punto medio il campo è nullo.

::grafico{assi=0 uguale=1 linee="1.12,0.03 1.23,0.06 1.35,0.09 1.47,0.13 1.58,0.16 1.7,0.19 1.82,0.23 1.93,0.27 2.05,0.3 2.17,0.34 2.29,0.38 2.4,0.42 2.52,0.46 2.64,0.5 2.75,0.54 2.86,0.58 2.98,0.62 3.09,0.66 3.2,0.71 3.3,0.75;-1.12,0.03 -1.23,0.06 -1.35,0.09 -1.47,0.13 -1.58,0.16 -1.7,0.19 -1.82,0.23 -1.93,0.27 -2.05,0.3 -2.17,0.34 -2.29,0.38 -2.4,0.42 -2.52,0.46 -2.64,0.5 -2.75,0.54 -2.86,0.58 -2.98,0.62 -3.09,0.66 -3.2,0.71 -3.3,0.75;1.08,0.08 1.17,0.17 1.25,0.26 1.33,0.34 1.42,0.43 1.49,0.52 1.57,0.62 1.65,0.71 1.72,0.81 1.79,0.9 1.86,1 1.93,1.11 2,1.21 2.06,1.31 2.12,1.42 2.18,1.53 2.23,1.64 2.28,1.75 2.33,1.86 2.37,1.97 2.41,2.08 2.45,2.2 2.49,2.3;-1.08,0.08 -1.17,0.17 -1.25,0.26 -1.33,0.34 -1.42,0.43 -1.49,0.52 -1.57,0.62 -1.65,0.71 -1.72,0.81 -1.79,0.9 -1.86,1 -1.93,1.11 -2,1.21 -2.06,1.31 -2.12,1.42 -2.18,1.53 -2.23,1.64 -2.28,1.75 -2.33,1.86 -2.37,1.97 -2.41,2.08 -2.45,2.2 -2.49,2.3;1.03,0.12 1.06,0.24 1.09,0.36 1.12,0.48 1.14,0.6 1.15,0.72 1.16,0.83 1.17,0.95 1.17,1.08 1.16,1.2 1.15,1.32 1.13,1.44 1.1,1.56 1.06,1.67 1.01,1.79 0.96,1.9 0.9,2 0.82,2.1 0.74,2.19 0.65,2.27 0.62,2.3;-1.03,0.12 -1.06,0.24 -1.09,0.36 -1.12,0.48 -1.14,0.6 -1.15,0.72 -1.16,0.83 -1.17,0.95 -1.17,1.08 -1.16,1.2 -1.15,1.32 -1.13,1.44 -1.1,1.56 -1.06,1.67 -1.01,1.79 -0.96,1.9 -0.9,2 -0.82,2.1 -0.74,2.19 -0.65,2.27 -0.62,2.3;0.97,0.12 0.94,0.24 0.9,0.35 0.86,0.47 0.82,0.58 0.76,0.69 0.7,0.79 0.63,0.9 0.55,0.99 0.46,1.07 0.36,1.14 0.25,1.19 0.14,1.22 0.02,1.24 -0.1,1.23 -0.22,1.2 -0.33,1.15 -0.43,1.09 -0.53,1.01 -0.61,0.92 -0.68,0.82 -0.75,0.72 -0.8,0.61 -0.85,0.5 -0.89,0.38 -0.93,0.26 -0.96,0.15 -0.97,0.11;0.92,0.08 0.83,0.17 0.74,0.25 0.65,0.34 0.55,0.41 0.45,0.48 0.34,0.53 0.23,0.58 0.1,0.6 -0.01,0.61 -0.13,0.6 -0.25,0.57 -0.36,0.52 -0.47,0.46 -0.57,0.4 -0.66,0.32 -0.75,0.24 -0.84,0.16 -0.92,0.08;0.88,0.03 0.77,0.06 0.65,0.09 0.53,0.12 0.41,0.15 0.29,0.17 0.16,0.18 0.04,0.19 -0.08,0.19 -0.2,0.18 -0.32,0.16 -0.44,0.14 -0.56,0.11 -0.68,0.08 -0.8,0.05 -0.89,0.03;0.88,-0.03 0.77,-0.06 0.65,-0.09 0.53,-0.12 0.41,-0.14 0.3,-0.16 0.18,-0.18 0.05,-0.19 -0.07,-0.19 -0.19,-0.18 -0.31,-0.16 -0.43,-0.14 -0.55,-0.11 -0.67,-0.09 -0.79,-0.06 -0.89,-0.03;0.92,-0.08 0.83,-0.17 0.74,-0.25 0.65,-0.34 0.55,-0.41 0.45,-0.48 0.34,-0.53 0.23,-0.58 0.1,-0.6 -0.01,-0.61 -0.13,-0.6 -0.25,-0.57 -0.36,-0.52 -0.47,-0.46 -0.57,-0.4 -0.66,-0.32 -0.75,-0.24 -0.84,-0.16 -0.92,-0.08;0.97,-0.12 0.94,-0.24 0.9,-0.35 0.86,-0.47 0.82,-0.58 0.76,-0.69 0.7,-0.79 0.63,-0.9 0.55,-0.99 0.46,-1.07 0.36,-1.14 0.25,-1.19 0.14,-1.22 0.02,-1.24 -0.1,-1.23 -0.22,-1.2 -0.33,-1.15 -0.43,-1.09 -0.53,-1.01 -0.61,-0.92 -0.68,-0.82 -0.75,-0.72 -0.8,-0.61 -0.85,-0.5 -0.89,-0.38 -0.93,-0.26 -0.96,-0.15 -0.97,-0.11;1.03,-0.12 1.06,-0.24 1.09,-0.36 1.12,-0.48 1.14,-0.6 1.15,-0.72 1.16,-0.83 1.17,-0.95 1.17,-1.08 1.16,-1.2 1.15,-1.32 1.13,-1.44 1.1,-1.56 1.06,-1.67 1.01,-1.79 0.96,-1.9 0.9,-2 0.82,-2.1 0.74,-2.19 0.65,-2.27 0.62,-2.3;-1.03,-0.12 -1.06,-0.24 -1.09,-0.36 -1.12,-0.48 -1.14,-0.6 -1.15,-0.72 -1.16,-0.83 -1.17,-0.95 -1.17,-1.08 -1.16,-1.2 -1.15,-1.32 -1.13,-1.44 -1.1,-1.56 -1.06,-1.67 -1.01,-1.79 -0.96,-1.9 -0.9,-2 -0.82,-2.1 -0.74,-2.19 -0.65,-2.27 -0.62,-2.3;1.08,-0.08 1.17,-0.17 1.25,-0.26 1.33,-0.34 1.42,-0.44 1.5,-0.53 1.58,-0.62 1.65,-0.72 1.73,-0.81 1.8,-0.91 1.87,-1.01 1.94,-1.12 2,-1.22 2.06,-1.32 2.12,-1.43 2.18,-1.54 2.23,-1.65 2.28,-1.76 2.33,-1.87 2.38,-1.98 2.42,-2.09 2.46,-2.21 2.49,-2.3;-1.08,-0.08 -1.17,-0.17 -1.25,-0.26 -1.33,-0.34 -1.42,-0.44 -1.5,-0.53 -1.58,-0.62 -1.65,-0.72 -1.73,-0.81 -1.8,-0.91 -1.87,-1.01 -1.94,-1.12 -2,-1.22 -2.06,-1.32 -2.12,-1.43 -2.18,-1.54 -2.23,-1.65 -2.28,-1.76 -2.33,-1.87 -2.38,-1.98 -2.42,-2.09 -2.46,-2.21 -2.49,-2.3;1.12,-0.03 1.23,-0.06 1.35,-0.09 1.47,-0.13 1.58,-0.16 1.7,-0.19 1.82,-0.23 1.93,-0.27 2.05,-0.3 2.17,-0.34 2.29,-0.38 2.4,-0.42 2.52,-0.46 2.64,-0.5 2.75,-0.54 2.86,-0.58 2.98,-0.62 3.09,-0.66 3.2,-0.71 3.3,-0.75;-1.12,-0.03 -1.23,-0.06 -1.35,-0.09 -1.47,-0.13 -1.58,-0.16 -1.7,-0.19 -1.82,-0.23 -1.93,-0.27 -2.05,-0.3 -2.17,-0.34 -2.29,-0.38 -2.4,-0.42 -2.52,-0.46 -2.64,-0.5 -2.75,-0.54 -2.86,-0.58 -2.98,-0.62 -3.09,-0.66 -3.2,-0.71 -3.3,-0.75;1.12,0 -1.12,0;1.12,0 3.3,0;-3.3,0 -1.12,0;2.1,0.43 2.29,0.38 2.17,0.23;-2.4,0.53 -2.29,0.38 -2.47,0.33;1.76,1.03 1.93,1.11 1.93,0.92;-1.93,1.3 -1.93,1.11 -2.1,1.18;1.07,1.14 1.15,1.32 1.28,1.17;-1.02,1.46 -1.15,1.32 -1.23,1.49;0.07,1.15 -0.1,1.23 0.04,1.36;0.15,0.51 -0.01,0.61 0.14,0.72;0.09,0.09 -0.08,0.19 0.08,0.3;0.09,-0.3 -0.07,-0.19 0.1,-0.09;0.14,-0.72 -0.01,-0.61 0.15,-0.51;0.04,-1.36 -0.1,-1.23 0.07,-1.15;1.28,-1.17 1.15,-1.32 1.07,-1.14;-1.23,-1.49 -1.15,-1.32 -1.02,-1.46;1.94,-0.93 1.94,-1.12 1.76,-1.04;-2.11,-1.19 -1.94,-1.12 -1.93,-1.31;2.17,-0.23 2.29,-0.38 2.1,-0.43;-2.47,-0.33 -2.29,-0.38 -2.4,-0.53;0.16,-0.1 0,0 0.16,0.1;2.24,0.1 2.4,0 2.24,-0.1;-2.56,0.1 -2.4,0 -2.56,-0.1" punti="1,0,pieno,+q;-1,0,pieno,−q" xmin=-3.3 xmax=3.3 ymin=-2.3 ymax=2.3 titolo="Linee di campo di due cariche opposte $+q$ e $-q$: escono dalla carica positiva ed entrano nella carica negativa"}

::grafico{assi=0 uguale=1 linee="1.12,0 1.24,0 1.36,0 1.48,0 1.6,0 1.72,0 1.84,0 1.96,0 2.08,0 2.2,0 2.32,0 2.44,0 2.56,0 2.68,0 2.8,0 2.92,0 3.04,0 3.16,0 3.28,0 3.3,0;-1.12,0 -1.24,0 -1.36,0 -1.48,0 -1.6,0 -1.72,0 -1.84,0 -1.96,0 -2.08,0 -2.2,0 -2.32,0 -2.44,0 -2.56,0 -2.68,0 -2.8,0 -2.92,0 -3.04,0 -3.16,0 -3.28,0 -3.3,0;1.1,0.06 1.21,0.12 1.32,0.18 1.42,0.24 1.53,0.3 1.64,0.35 1.75,0.41 1.86,0.47 1.97,0.52 2.08,0.58 2.19,0.63 2.3,0.68 2.41,0.73 2.53,0.78 2.63,0.83 2.75,0.88 2.86,0.93 2.97,0.98 3.08,1.03 3.19,1.08 3.3,1.13;-1.1,0.06 -1.21,0.12 -1.32,0.18 -1.42,0.24 -1.53,0.3 -1.64,0.35 -1.75,0.41 -1.86,0.47 -1.97,0.52 -2.08,0.58 -2.19,0.63 -2.3,0.68 -2.41,0.73 -2.53,0.78 -2.63,0.83 -2.75,0.88 -2.86,0.93 -2.97,0.98 -3.08,1.03 -3.19,1.08 -3.3,1.13;1.06,0.1 1.12,0.21 1.19,0.32 1.25,0.42 1.32,0.52 1.39,0.62 1.46,0.71 1.53,0.81 1.6,0.91 1.68,1 1.76,1.09 1.83,1.18 1.92,1.28 2,1.37 2.08,1.46 2.16,1.54 2.24,1.63 2.32,1.72 2.41,1.8 2.49,1.89 2.58,1.98 2.66,2.06 2.75,2.15 2.84,2.24 2.9,2.3;-1.06,0.1 -1.12,0.21 -1.19,0.32 -1.25,0.42 -1.32,0.52 -1.39,0.62 -1.46,0.71 -1.53,0.81 -1.6,0.91 -1.68,1 -1.76,1.09 -1.83,1.18 -1.92,1.28 -2,1.37 -2.08,1.46 -2.16,1.54 -2.24,1.63 -2.32,1.72 -2.41,1.8 -2.49,1.89 -2.58,1.98 -2.66,2.06 -2.75,2.15 -2.84,2.24 -2.9,2.3;1,0.12 1,0.24 1.01,0.36 1.01,0.48 1.02,0.6 1.04,0.72 1.06,0.84 1.09,0.96 1.12,1.08 1.15,1.2 1.19,1.31 1.23,1.43 1.27,1.54 1.31,1.66 1.36,1.77 1.41,1.88 1.45,1.99 1.5,2.11 1.55,2.21 1.59,2.3;-1,0.12 -1,0.24 -1.01,0.36 -1.01,0.48 -1.02,0.6 -1.04,0.72 -1.06,0.84 -1.09,0.96 -1.12,1.08 -1.15,1.2 -1.19,1.31 -1.23,1.43 -1.27,1.54 -1.31,1.66 -1.36,1.77 -1.41,1.88 -1.45,1.99 -1.5,2.11 -1.55,2.21 -1.59,2.3;0.94,0.1 0.88,0.21 0.82,0.32 0.77,0.43 0.72,0.54 0.69,0.65 0.65,0.77 0.63,0.89 0.62,1.01 0.62,1.13 0.62,1.25 0.62,1.38 0.63,1.5 0.65,1.62 0.66,1.75 0.68,1.86 0.7,1.98 0.72,2.1 0.74,2.22 0.75,2.3;-0.94,0.1 -0.88,0.21 -0.82,0.32 -0.77,0.43 -0.72,0.54 -0.69,0.65 -0.65,0.77 -0.63,0.89 -0.62,1.01 -0.62,1.13 -0.62,1.25 -0.62,1.38 -0.63,1.5 -0.65,1.62 -0.66,1.75 -0.68,1.86 -0.7,1.98 -0.72,2.1 -0.74,2.22 -0.75,2.3;0.9,0.06 0.79,0.12 0.69,0.18 0.59,0.25 0.49,0.32 0.4,0.41 0.33,0.5 0.27,0.61 0.23,0.73 0.2,0.85 0.19,0.97 0.18,1.09 0.18,1.21 0.17,1.33 0.17,1.45 0.17,1.57 0.18,1.69 0.18,1.81 0.18,1.93 0.19,2.05 0.19,2.18 0.2,2.3 0.2,2.3;-0.9,0.06 -0.79,0.12 -0.69,0.18 -0.59,0.25 -0.49,0.32 -0.4,0.41 -0.33,0.5 -0.27,0.61 -0.23,0.73 -0.2,0.85 -0.19,0.97 -0.18,1.09 -0.18,1.21 -0.17,1.33 -0.17,1.45 -0.17,1.57 -0.18,1.69 -0.18,1.81 -0.18,1.93 -0.19,2.05 -0.19,2.18 -0.2,2.3 -0.2,2.3;0.9,-0.06 0.79,-0.12 0.69,-0.18 0.59,-0.25 0.49,-0.32 0.41,-0.4 0.33,-0.5 0.27,-0.6 0.23,-0.71 0.21,-0.84 0.19,-0.95 0.18,-1.07 0.18,-1.19 0.17,-1.31 0.17,-1.44 0.17,-1.56 0.18,-1.68 0.18,-1.8 0.18,-1.93 0.19,-2.05 0.19,-2.17 0.2,-2.29 0.2,-2.3;-0.9,-0.06 -0.79,-0.12 -0.69,-0.18 -0.59,-0.25 -0.49,-0.32 -0.41,-0.4 -0.33,-0.5 -0.27,-0.6 -0.23,-0.71 -0.21,-0.84 -0.19,-0.95 -0.18,-1.07 -0.18,-1.19 -0.17,-1.31 -0.17,-1.44 -0.17,-1.56 -0.18,-1.68 -0.18,-1.8 -0.18,-1.93 -0.19,-2.05 -0.19,-2.17 -0.2,-2.29 -0.2,-2.3;0.94,-0.1 0.88,-0.21 0.82,-0.32 0.77,-0.43 0.72,-0.54 0.69,-0.65 0.66,-0.77 0.63,-0.89 0.62,-1.01 0.62,-1.13 0.62,-1.25 0.62,-1.37 0.63,-1.5 0.65,-1.62 0.66,-1.74 0.68,-1.86 0.7,-1.98 0.72,-2.1 0.74,-2.22 0.75,-2.3;-0.94,-0.1 -0.88,-0.21 -0.82,-0.32 -0.77,-0.43 -0.72,-0.54 -0.69,-0.65 -0.66,-0.77 -0.63,-0.89 -0.62,-1.01 -0.62,-1.13 -0.62,-1.25 -0.62,-1.37 -0.63,-1.5 -0.65,-1.62 -0.66,-1.74 -0.68,-1.86 -0.7,-1.98 -0.72,-2.1 -0.74,-2.22 -0.75,-2.3;1,-0.12 1,-0.24 1.01,-0.36 1.01,-0.48 1.02,-0.6 1.04,-0.72 1.06,-0.84 1.09,-0.96 1.12,-1.08 1.15,-1.2 1.19,-1.31 1.23,-1.43 1.27,-1.54 1.31,-1.66 1.36,-1.77 1.41,-1.88 1.45,-1.99 1.5,-2.11 1.55,-2.21 1.59,-2.3;-1,-0.12 -1,-0.24 -1.01,-0.36 -1.01,-0.48 -1.02,-0.6 -1.04,-0.72 -1.06,-0.84 -1.09,-0.96 -1.12,-1.08 -1.15,-1.2 -1.19,-1.31 -1.23,-1.43 -1.27,-1.54 -1.31,-1.66 -1.36,-1.77 -1.41,-1.88 -1.45,-1.99 -1.5,-2.11 -1.55,-2.21 -1.59,-2.3;1.06,-0.1 1.12,-0.21 1.19,-0.32 1.25,-0.42 1.32,-0.52 1.39,-0.62 1.46,-0.71 1.53,-0.81 1.6,-0.91 1.68,-1 1.76,-1.09 1.83,-1.18 1.92,-1.28 2,-1.37 2.08,-1.46 2.16,-1.54 2.24,-1.63 2.32,-1.72 2.41,-1.8 2.49,-1.89 2.58,-1.98 2.66,-2.06 2.75,-2.15 2.84,-2.24 2.9,-2.3;-1.06,-0.1 -1.12,-0.21 -1.19,-0.32 -1.25,-0.42 -1.32,-0.52 -1.39,-0.62 -1.46,-0.71 -1.53,-0.81 -1.6,-0.91 -1.68,-1 -1.76,-1.09 -1.83,-1.18 -1.92,-1.28 -2,-1.37 -2.08,-1.46 -2.16,-1.54 -2.24,-1.63 -2.32,-1.72 -2.41,-1.8 -2.49,-1.89 -2.58,-1.98 -2.66,-2.06 -2.75,-2.15 -2.84,-2.24 -2.9,-2.3;1.1,-0.06 1.21,-0.12 1.32,-0.18 1.43,-0.24 1.53,-0.3 1.64,-0.36 1.75,-0.41 1.86,-0.47 1.97,-0.52 2.08,-0.58 2.2,-0.63 2.31,-0.68 2.42,-0.74 2.53,-0.79 2.65,-0.84 2.76,-0.89 2.87,-0.94 2.98,-0.99 3.1,-1.04 3.21,-1.09 3.3,-1.13;-1.1,-0.06 -1.21,-0.12 -1.32,-0.18 -1.43,-0.24 -1.53,-0.3 -1.64,-0.36 -1.75,-0.41 -1.86,-0.47 -1.97,-0.52 -2.08,-0.58 -2.2,-0.63 -2.31,-0.68 -2.42,-0.74 -2.53,-0.79 -2.65,-0.84 -2.76,-0.89 -2.87,-0.94 -2.98,-0.99 -3.1,-1.04 -3.21,-1.09 -3.3,-1.13;-0.88,0 -0.08,0;0.08,0 0.88,0;2.04,0.1 2.2,0 2.04,-0.1;-2.04,-0.1 -2.2,0 -2.04,0.1;1.89,0.6 2.08,0.58 1.98,0.41;-1.98,0.41 -2.08,0.58 -1.89,0.6;1.5,0.94 1.68,1 1.66,0.81;-1.66,0.81 -1.68,1 -1.5,0.94;1,1.07 1.15,1.2 1.2,1.01;-1.2,1.01 -1.15,1.2 -1,1.07;0.52,0.97 0.62,1.13 0.72,0.97;-0.72,0.97 -0.62,1.13 -0.52,0.97;0.13,0.67 0.2,0.85 0.33,0.71;-0.33,0.71 -0.2,0.85 -0.13,0.67;0.34,-0.69 0.21,-0.84 0.13,-0.66;-0.13,-0.66 -0.21,-0.84 -0.34,-0.69;0.72,-0.97 0.62,-1.13 0.52,-0.97;-0.52,-0.97 -0.62,-1.13 -0.72,-0.97;1.2,-1.01 1.15,-1.2 1,-1.07;-1,-1.07 -1.15,-1.2 -1.2,-1.01;1.66,-0.81 1.68,-1 1.5,-0.94;-1.5,-0.94 -1.68,-1 -1.66,-0.81;1.98,-0.41 2.08,-0.58 1.89,-0.6;-1.89,-0.6 -2.08,-0.58 -1.98,-0.41;-0.56,0.1 -0.4,0 -0.56,-0.1;0.56,-0.1 0.4,0 0.56,0.1" punti="1,0,pieno,+q;-1,0,pieno,+q" xmin=-3.3 xmax=3.3 ymin=-2.3 ymax=2.3 titolo="Linee di campo di due cariche positive uguali: nel punto medio il campo è nullo e le linee si allontanano tutte verso l'infinito"}

:::

:::attenzione{#linee-e-traiettorie}
Una linea di campo in generale *non* è la traiettoria di una carica lasciata nel campo. La forza dà l'accelerazione della carica, che è tangente alla linea, mentre la velocità può avere un'altra direzione: un elettrone lanciato perpendicolarmente a un campo uniforme, le cui linee sono rette parallele, descrive un arco di parabola. Linea di campo e traiettoria coincidono solo in casi particolari, per esempio per una carica che parte da ferma in un campo uniforme.
:::

## Dipolo elettrico

:::definizione{#dipolo-elettrico titolo="Dipolo elettrico e momento di dipolo"}
Un **dipolo elettrico** è un sistema di due cariche puntiformi $+q$ e $-q$, con $q > 0$, poste a distanza $d$. Il **momento di dipolo** è il vettore
$$
\vec{p} = q\,\vec{d} ,
$$
dove $\vec{d}$ è il vettore che va dalla carica negativa alla carica positiva; il suo modulo è $p = q\,d$ e si misura in $\mathrm{C\cdot m}$. La retta che passa per le due cariche si chiama *asse* del dipolo. Molte molecole, come quella dell'acqua, hanno i baricentri delle cariche positive e negative separati, e a grande distanza si comportano come dipoli. Due cariche di $2{,}0\,\mathrm{nC}$ a distanza $4{,}0\,\mathrm{mm}$ formano un dipolo con $p = 2{,}0 \cdot 10^{-9} \cdot 4{,}0 \cdot 10^{-3}\,\mathrm{C\cdot m} = 8{,}0 \cdot 10^{-12}\,\mathrm{C\cdot m}$.
:::

:::richiamo{titolo="Principio di sovrapposizione per il campo elettrico"}
Il campo prodotto da più cariche puntiformi è la somma vettoriale dei campi prodotti da ciascuna carica, $\vec{E} = \displaystyle\sum_i k\,\frac{q_i}{r_i^2}\,\hat{r}_i$.
:::

::::teorema{#campo-dipolo-asse titolo="Campo del dipolo sull'asse"}
Si consideri un dipolo con le cariche in $x = \pm\dfrac{d}{2}$ sull'asse $x$, con $\vec{p} = p\,\hat{\imath}$, e un punto $P$ dell'asse a distanza $r > \dfrac{d}{2}$ dal centro del dipolo. Il campo in $P$ è parallelo a $\vec{p}$, con lo stesso verso, e ha modulo
$$
E = \frac{2 k\,p\,r}{\left( r^2 - \dfrac{d^2}{4} \right)^2} .
$$
Per $r \gg d$ si ottiene l'approssimazione
$$
\vec{E} \approx \frac{2 k\,\vec{p}}{r^3} .
$$
Il campo del dipolo a grande distanza decresce come $\dfrac{1}{r^3}$, più rapidamente del campo di una carica, perché i campi delle due cariche opposte quasi si compensano; inoltre dipende dalle cariche e dalla distanza solo attraverso il prodotto $p = q\,d$. Per il dipolo con $p = 8{,}0 \cdot 10^{-12}\,\mathrm{C\cdot m}$ e $d = 4{,}0\,\mathrm{mm}$, a $r = 10\,\mathrm{cm}$ la formula approssimata dà $E = \dfrac{2 \cdot 8{,}99 \cdot 10^{9} \cdot 8{,}0 \cdot 10^{-12}}{0{,}10^3}\,\mathrm{N/C} \approx 1{,}4 \cdot 10^{2}\,\mathrm{N/C}$, con uno scarto dello $0{,}08\,\%$ dal valore esatto.

:::dimostrazione
Si consideri $P$ dalla parte della carica positiva, in $x = r$. La carica $+q$ dista $r - \dfrac{d}{2}$ da $P$ e produce un campo uscente, diretto come $\hat{\imath}$; la carica $-q$ dista $r + \dfrac{d}{2}$ e produce un campo diretto verso di sé, cioè come $-\hat{\imath}$. Per il **principio di sovrapposizione**
$$
\begin{aligned}
E_x &= k q \left[ \frac{1}{\left( r - \dfrac{d}{2} \right)^2} - \frac{1}{\left( r + \dfrac{d}{2} \right)^2} \right] \\[6pt]
&= k q\,\frac{\left( r + \dfrac{d}{2} \right)^2 - \left( r - \dfrac{d}{2} \right)^2}{\left( r^2 - \dfrac{d^2}{4} \right)^2} = \frac{2 k\,q\,d\,r}{\left( r^2 - \dfrac{d^2}{4} \right)^2} ,
\end{aligned}
$$
che è positiva; poiché $q\,d = p$, si ottiene la tesi. Dalla parte della carica negativa, in $x = -r$, la carica $-q$ è la più vicina e produce un campo diretto verso di sé, cioè come $\hat{\imath}$, e prevale sul campo di $+q$, diretto come $-\hat{\imath}$; lo stesso calcolo dà lo stesso modulo e lo stesso verso. Se $r \gg d$, il termine $\dfrac{d^2}{4}$ è trascurabile rispetto a $r^2$, quindi il denominatore è circa $r^4$ e $E \approx \dfrac{2kp}{r^3}$.
:::
::::

::::teorema{#campo-dipolo-asse-mediano titolo="Campo del dipolo sull'asse mediano"}
Nelle stesse ipotesi, sia $P$ un punto dell'asse del segmento che unisce le cariche, cioè della retta perpendicolare all'asse del dipolo passante per il suo centro, a distanza $r$ dal centro. Il campo in $P$ è opposto a $\vec{p}$ e ha modulo
$$
E = \frac{k\,p}{\left( r^2 + \dfrac{d^2}{4} \right)^{\frac{3}{2}}} ,
\qquad
\vec{E} \approx -\frac{k\,\vec{p}}{r^3} \quad \text{per } r \gg d .
$$
A parità di distanza il campo sull'asse mediano è circa la metà del campo sull'asse del dipolo. Per il dipolo con $p = 8{,}0 \cdot 10^{-12}\,\mathrm{C\cdot m}$, a $10\,\mathrm{cm}$ dal centro sull'asse mediano si ha $E \approx 72\,\mathrm{N/C}$.

:::dimostrazione
Le due cariche distano entrambe $s = \sqrt{r^2 + \dfrac{d^2}{4}}$ da $P$, quindi i due campi hanno lo stesso modulo $k\,\dfrac{q}{s^2}$. Il campo di $+q$ è uscente da $+q$ e quello di $-q$ è diretto verso $-q$; le loro componenti perpendicolari all'asse del dipolo sono opposte e si annullano, mentre le componenti parallele all'asse sono entrambe opposte a $\vec{p}$ e valgono ciascuna $k\,\dfrac{q}{s^2} \cdot \dfrac{d}{2s}$, dove $\dfrac{d}{2s}$ è il coseno dell'angolo tra ciascun campo e l'asse. Sommando si ottiene
$$
E = 2\,k\,\frac{q}{s^2} \cdot \frac{d}{2 s} = \frac{k\,q\,d}{s^3} = \frac{k\,p}{\left( r^2 + \dfrac{d^2}{4} \right)^{\frac{3}{2}}} .
$$
:::
::::

::::teorema{#momento-dipolo-campo-uniforme titolo="Dipolo in un campo uniforme"}
Si consideri un dipolo rigido di momento $\vec{p}$ in un campo elettrico uniforme $\vec{E}$, e sia $\theta$ l'angolo tra $\vec{p}$ e $\vec{E}$. La risultante delle forze sul dipolo è nulla, e il momento delle forze rispetto a qualunque punto è
$$
\vec{\tau} = \vec{p} \times \vec{E} , \qquad \tau = p\,E \sin\theta .
$$
Il momento tende a ruotare il dipolo fino ad allineare $\vec{p}$ con $\vec{E}$. Le posizioni di equilibrio sono $\theta = 0$, che è stabile, e $\theta = \pi$, che è instabile; il momento è massimo per $\theta = \dfrac{\pi}{2}$. Per il dipolo con $p = 8{,}0 \cdot 10^{-12}\,\mathrm{C\cdot m}$ in un campo di $5{,}0 \cdot 10^{4}\,\mathrm{N/C}$, con $\theta = 30^\circ$, si ha $\tau = 8{,}0 \cdot 10^{-12} \cdot 5{,}0 \cdot 10^{4} \cdot 0{,}50\,\mathrm{N\cdot m} = 2{,}0 \cdot 10^{-7}\,\mathrm{N\cdot m}$.

::grafico{assi=0 uguale=1 linee="-2.5,-1.75 2.5,-1.75;-1.76,-1.65 -1.6,-1.75 -1.76,-1.85;1.44,-1.65 1.6,-1.75 1.44,-1.85;-2.5,1.75 2.5,1.75;-1.76,1.85 -1.6,1.75 -1.76,1.65;1.44,1.85 1.6,1.75 1.44,1.65" punti="0.82,0.57,pieno,+q;-0.82,-0.57,pieno,−q" segmenti="0,0,1.4,0" vettori="-0.82,-0.57,0.82,0.57,p;0.82,0.57,1.92,0.57,F₊;-0.82,-0.57,-1.92,-0.57,F₋" etichette="0.5,0.08,θ;2.15,1.95,E" xmin=-2.6 xmax=2.6 ymin=-2.2 ymax=2.2 titolo="In un campo uniforme le forze $\vec{F}_{+} = q\vec{E}$ e $\vec{F}_{-} = -q\vec{E}$ hanno risultante nulla e momento $\vec{p} \times \vec{E}$, che tende ad allineare $\vec{p}$ al campo"}

:::dimostrazione
Sulla carica $+q$ agisce la forza $q\vec{E}$ e sulla carica $-q$ la forza $-q\vec{E}$, perciò la risultante è nulla. Siano $\vec{r}_{+}$ e $\vec{r}_{-}$ le posizioni delle due cariche rispetto a un punto $O$. Il momento totale rispetto a $O$ è
$$
\vec{\tau} = \vec{r}_{+} \times q\vec{E} + \vec{r}_{-} \times \left( -q\vec{E} \right) = q\left( \vec{r}_{+} - \vec{r}_{-} \right) \times \vec{E} = q\,\vec{d} \times \vec{E} = \vec{p} \times \vec{E} ,
$$
poiché $\vec{r}_{+} - \vec{r}_{-} = \vec{d}$ è il vettore che va da $-q$ a $+q$. Il risultato non dipende da $O$, come accade per ogni sistema di forze con risultante nulla. Il modulo del prodotto vettoriale è $p\,E\sin\theta$.
:::
::::

:::osservazione{#energia-dipolo titolo="Lavoro sul dipolo ed energia potenziale"}
In elettromagnetismo il lavoro si indica con $W$, perché la lettera $L$ è riservata all'induttanza. Quando il dipolo ruota da $\theta_1$ a $\theta_2$, il momento delle forze elettriche, che vale $-p\,E\sin\theta$ con il segno riferito al verso in cui $\theta$ cresce, compie il lavoro
$$
W = \int_{\theta_1}^{\theta_2} \left( -p\,E\sin\theta \right) d\theta = p\,E \left( \cos\theta_2 - \cos\theta_1 \right) .
$$
Il lavoro dipende solo dalle posizioni iniziale e finale, quindi al dipolo si associa l'energia potenziale $U(\theta) = -p\,E\cos\theta = -\vec{p} \cdot \vec{E}$, minima nella posizione di equilibrio stabile. Per il dipolo dell'esempio precedente, che si allinea al campo partendo da $\theta = 30^\circ$, il campo compie il lavoro $W = 4{,}0 \cdot 10^{-7} \cdot \left( 1 - \cos 30^\circ \right)\,\mathrm{J} \approx 5{,}4 \cdot 10^{-8}\,\mathrm{J}$. Per l'energia potenziale elettrica si rimanda all'argomento sul potenziale elettrico e l'energia elettrostatica.
:::

## Distribuzioni continue di carica

:::definizione{#densita-di-carica titolo="Densità di carica"}
Quando la carica è distribuita su un corpo esteso si descrive con una densità, definita come rapporto tra la carica $dq$ di un elemento piccolo e la sua misura:

- la **densità lineare** $\lambda = \dfrac{dq}{d\ell}$, in $\mathrm{C/m}$, per un filo o una sbarretta sottile;
- la **densità superficiale** $\sigma = \dfrac{dq}{dA}$, in $\mathrm{C/m^2}$, per una lastra o una superficie;
- la *densità volumica* $\rho = \dfrac{dq}{dV}$, in $\mathrm{C/m^3}$, per un corpo tridimensionale.

Se la distribuzione è uniforme, la densità è il rapporto tra la carica totale e la lunghezza, l'area o il volume; una sbarretta lunga $20\,\mathrm{cm}$ con carica $4{,}0\,\mathrm{nC}$ uniforme ha $\lambda = \dfrac{4{,}0 \cdot 10^{-9}}{0{,}20}\,\mathrm{C/m} = 2{,}0 \cdot 10^{-8}\,\mathrm{C/m}$.
:::

:::richiamo{titolo="Integrali di linea e integrali doppi"}
L'integrale di una funzione lungo una curva si calcola parametrizzando la curva e riducendolo a un integrale in una variabile; l'integrale su una regione piana si calcola come integrale doppio, per esempio in coordinate polari, dove l'elemento d'area è $dA = s\,ds\,d\varphi$. L'integrale di un vettore si calcola componente per componente. Si rimanda agli argomenti su curve e integrali di linea e su integrali doppi e tripli di Analisi 2.
:::

:::teorema{#campo-distribuzione-continua titolo="Campo di una distribuzione continua"}
Il campo prodotto in $P$ da una carica distribuita con continuità è
$$
\vec{E}(P) = \int k\,\frac{dq}{r^2}\,\hat{r} ,
$$
dove $r$ è la distanza dell'elemento $dq$ da $P$ e $\hat{r}$ il versore diretto dall'elemento verso $P$, e l'integrale è esteso a tutta la distribuzione. La formula segue dal **principio di sovrapposizione**, dividendo la distribuzione in elementi così piccoli da poterli trattare come cariche puntiformi e passando al limite della somma. Il calcolo segue uno schema fisso:

- si sceglie l'elemento $dq$ e lo si scrive con la densità, $dq = \lambda\,d\ell$, $dq = \sigma\,dA$ oppure $dq = \rho\,dV$;
- si scrivono la distanza $r$ e il campo $d\vec{E}$ dell'elemento;
- si usano le simmetrie per stabilire quali componenti di $\vec{E}$ si annullano;
- si integra la sola componente che resta.
:::

## Anello e filo carichi

::::teorema{#campo-anello titolo="Campo sull'asse di un anello carico"}
Si consideri un anello sottile di raggio $R$ con carica $Q$ distribuita uniformemente, e sia $z$ la coordinata lungo l'asse dell'anello, con origine nel centro. Nel punto dell'asse di coordinata $z$ il campo è diretto lungo l'asse e vale
$$
E_z = \frac{k\,Q\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}} .
$$
Nel centro il campo è nullo, perché i contributi di elementi opposti si compensano; per $|z| \gg R$ si ha $E_z \approx \dfrac{kQ}{z^2}$, cioè l'anello si comporta come una carica puntiforme. Il modulo del campo è massimo per $|z| = \dfrac{R}{\sqrt{2}}$, dove la derivata di $E_z$ rispetto a $z$ si annulla. Per $R = 3{,}0\,\mathrm{cm}$ e $Q = 1{,}0\,\mathrm{nC}$ il massimo si trova a $2{,}1\,\mathrm{cm}$ dal centro e vale circa $3{,}8 \cdot 10^{3}\,\mathrm{N/C}$.

::grafico{assi=0 uguale=1 curve="0.6*cos(t),2*sin(t),0,6.29" linee="-1.2,0 6.8,0" punti="0,0,pieno,O;4,0,pieno,P;0,2,pieno,dq;0,-2,pieno,dq′" segmenti="0,2,4,0;0,-2,4,0;0,0,0,2" vettori="4,0,5.16,-0.58;4,0,5.16,0.58" etichette="0.12,0.95,R;2,-0.45,z;5.3,-0.9,dE;5.3,0.75,dE′" legenda=0 xmin=-1.4 xmax=7 ymin=-2.6 ymax=2.6 titolo="Elementi opposti $dq$ e $dq'$ dell'anello producono in $P$ campi le cui componenti perpendicolari all'asse si annullano"}

::grafico{f="89.9*x/(x^2+9)^1.5" punti="2.12,3.84,pieno;-2.12,-3.84,pieno" segmenti="2.12,0,2.12,3.84;-2.12,0,-2.12,-3.84" nomi="z,E" legenda="E_z" xmin=-12 xmax=12 ymin=-4.6 ymax=4.6 titolo="Campo sull'asse di un anello con $R = 3{,}0\,\mathrm{cm}$ e $Q = 1{,}0\,\mathrm{nC}$, con $z$ in centimetri ed $E_z$ in $\mathrm{kN/C}$: il modulo è massimo per $|z| = \dfrac{R}{\sqrt{2}}$"}

:::dimostrazione
Si divide l'anello in elementi di carica $dq$. Ogni elemento dista $r = \sqrt{z^2 + R^2}$ dal punto $P$ e produce un campo di modulo $dE = k\,\dfrac{dq}{z^2 + R^2}$, che forma con l'asse l'angolo $\alpha$ tale che $\cos\alpha = \dfrac{z}{\sqrt{z^2 + R^2}}$. L'elemento diametralmente opposto produce un campo con la stessa componente lungo l'asse e con componente perpendicolare opposta, quindi per simmetria il campo totale è diretto lungo l'asse. Sommando le componenti lungo l'asse, nelle quali $z$ e $R$ sono costanti, si ottiene
$$
E_z = \int k\,\frac{dq}{z^2 + R^2} \cdot \frac{z}{\sqrt{z^2 + R^2}} = \frac{k\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}} \int dq = \frac{k\,Q\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}} .
$$
:::
::::

::::teorema{#campo-filo titolo="Campo di un filo rettilineo"}
Si consideri un filo rettilineo di lunghezza $2\ell$ con densità lineare $\lambda$ uniforme, e un punto $P$ a distanza $r$ dal filo sull'asse del filo stesso, cioè sulla perpendicolare passante per il punto medio. Il campo in $P$ è perpendicolare al filo e vale
$$
E = \frac{2 k\,\lambda\,\ell}{r\sqrt{r^2 + \ell^2}} .
$$
Per un **filo infinito**, cioè nel limite $\ell \to +\infty$, il campo è radiale rispetto al filo e vale in ogni punto a distanza $r$
$$
E = \frac{2 k\,\lambda}{r} = \frac{\lambda}{2\pi\varepsilon_0\, r} .
$$
Il campo del filo infinito decresce come $\dfrac{1}{r}$, più lentamente del campo di una carica puntiforme. L'approssimazione di filo infinito è adeguata quando $r$ è piccolo rispetto alla lunghezza del filo e il punto è lontano dagli estremi. A $5{,}0\,\mathrm{cm}$ da un filo lungo con $\lambda = 2{,}0\,\mathrm{nC/m}$ si ha $E = \dfrac{2 \cdot 8{,}99 \cdot 10^{9} \cdot 2{,}0 \cdot 10^{-9}}{0{,}050}\,\mathrm{N/C} \approx 7{,}2 \cdot 10^{2}\,\mathrm{N/C}$. Lo stesso risultato si ottiene con la legge di Gauss, per la quale si rimanda all'argomento sul flusso del campo elettrico e la legge di Gauss.

::grafico{assi=0 uguale=1 linee="-3,0 3,0" punti="1.6,0,pieno,dq;-1.6,0,pieno,dq′;0,2.2,pieno,P" segmenti="1.6,0,0,2.2;-1.6,0,0,2.2;0,0,0,2.2" vettori="0,2.2,-0.71,3.17,dE;0,2.2,0.71,3.17,dE′" etichette="0.12,1,r;0.7,-0.45,x;-3.25,-0.45,−ℓ;2.9,-0.45,ℓ" xmin=-3.6 xmax=3.6 ymin=-0.9 ymax=3.6 titolo="Gli elementi $dq$ e $dq'$, simmetrici rispetto al punto medio del filo, producono in $P$ campi con componenti parallele al filo opposte: resta solo la componente perpendicolare"}

:::dimostrazione
Si pone il filo sull'asse $x$, da $-\ell$ a $\ell$, e $P = (0, r)$. L'elemento di filo tra $x$ e $x + dx$ ha carica $dq = \lambda\,dx$ e dista $\sqrt{x^2 + r^2}$ da $P$. Per simmetria rispetto all'asse $y$ le componenti $x$ dei campi degli elementi in $x$ e in $-x$ si annullano, quindi resta la componente $y$, nella quale il coseno dell'angolo con l'asse $y$ è $\dfrac{r}{\sqrt{x^2 + r^2}}$:
$$
E_y = \int_{-\ell}^{\ell} k\,\frac{\lambda\,dx}{x^2 + r^2} \cdot \frac{r}{\sqrt{x^2 + r^2}} = k\,\lambda\,r \int_{-\ell}^{\ell} \frac{dx}{\left( x^2 + r^2 \right)^{\frac{3}{2}}} .
$$
Una primitiva della funzione integranda è $\dfrac{x}{r^2\sqrt{x^2 + r^2}}$, come si verifica derivando, quindi
$$
E_y = k\,\lambda\,r \left[ \frac{x}{r^2\sqrt{x^2 + r^2}} \right]_{-\ell}^{\ell} = \frac{2 k\,\lambda\,\ell}{r\sqrt{r^2 + \ell^2}} .
$$
Per $\ell \to +\infty$ si ha $\dfrac{\ell}{\sqrt{r^2 + \ell^2}} \to 1$, perciò $E \to \dfrac{2k\lambda}{r}$; infine $2k = \dfrac{1}{2\pi\varepsilon_0}$.
:::
::::

## Disco e piano infinito

:::richiamo{titolo="Campo sull'asse di un anello carico"}
Un anello sottile di raggio $R$ con carica $Q$ uniforme produce nel punto dell'asse di coordinata $z$ il campo $E_z = \dfrac{k\,Q\,z}{\left( z^2 + R^2 \right)^{\frac{3}{2}}}$, diretto lungo l'asse.
:::

::::teorema{#campo-disco titolo="Campo sull'asse di un disco carico"}
Si consideri un disco sottile di raggio $R$ con densità superficiale $\sigma$ uniforme. Nel punto dell'asse a distanza $z > 0$ dal centro, dalla parte di $z$ positivo, il campo è diretto lungo l'asse e vale
$$
E_z = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^2}} \right) .
$$
Dalla parte opposta il campo ha lo stesso modulo e verso opposto. Il campo vale circa $\dfrac{\sigma}{2\varepsilon_0}$ vicino al disco, cioè per $z \ll R$, e decresce allontanandosi; per $z \gg R$ il disco si comporta come una carica puntiforme. Per $\sigma = 3{,}0 \cdot 10^{-6}\,\mathrm{C/m^2}$ e $R = 10\,\mathrm{cm}$, a $z = 5{,}0\,\mathrm{cm}$ si ha $E_z \approx 1{,}69 \cdot 10^{5} \cdot 0{,}553\,\mathrm{N/C} \approx 9{,}4 \cdot 10^{4}\,\mathrm{N/C}$.

:::dimostrazione
Si divide il disco in anelli concentrici di raggio $s$ e larghezza $ds$, con $0 \leq s \leq R$. L'anello ha area $2\pi s\,ds$ e carica $dq = \sigma\,2\pi s\,ds$, quindi per il campo sull'asse di un anello carico produce il campo
$$
dE_z = \frac{k\,z\,\sigma\,2\pi s\,ds}{\left( z^2 + s^2 \right)^{\frac{3}{2}}} .
$$
Tutti i contributi sono diretti lungo l'asse, perciò si sommano:
$$
\begin{aligned}
E_z &= 2\pi k\,\sigma\,z \int_0^R \frac{s\,ds}{\left( z^2 + s^2 \right)^{\frac{3}{2}}} = 2\pi k\,\sigma\,z \left[ -\frac{1}{\sqrt{z^2 + s^2}} \right]_0^R \\[6pt]
&= 2\pi k\,\sigma\,z \left( \frac{1}{z} - \frac{1}{\sqrt{z^2 + R^2}} \right) = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^2}} \right) ,
\end{aligned}
$$
dove nell'ultimo passaggio si è usato $2\pi k = \dfrac{1}{2\varepsilon_0}$.
:::
::::

::::teorema{#campo-piano-infinito titolo="Campo di un piano infinito carico"}
Un piano infinito con densità superficiale $\sigma$ uniforme produce un campo **uniforme**, perpendicolare al piano, di modulo
$$
E = \frac{\sigma}{2\varepsilon_0} ,
$$
uscente dal piano se $\sigma > 0$ ed entrante se $\sigma < 0$, da entrambe le parti. Il campo non dipende dalla distanza dal piano. Il modello descrive una lastra carica finita nei punti la cui distanza dalla lastra è piccola rispetto alle dimensioni della lastra e che sono lontani dai bordi. Per $\sigma = 8{,}85\,\mathrm{nC/m^2}$ si ottiene $E = \dfrac{8{,}85 \cdot 10^{-9}}{2 \cdot 8{,}85 \cdot 10^{-12}}\,\mathrm{N/C} = 500\,\mathrm{N/C}$.

::grafico{f="1-x/sqrt(x^2+1)+0*sqrt(x);1+0*sqrt(x)" nomi="z,E" legenda="E_{\text{disco}};E_{\text{piano}}" xmin=-0.4 xmax=4.5 ymin=-0.2 ymax=1.3 titolo="Campo sull'asse di un disco e campo del piano infinito con la stessa $\sigma$, con $z$ in unità di $R$ ed $E$ in unità di $\dfrac{\sigma}{2\varepsilon_0}$: vicino al disco i due campi coincidono"}

:::dimostrazione
Ogni punto è sull'asse di un disco di raggio $R$ centrato nella sua proiezione sul piano. Per il campo sull'asse di un disco carico, a distanza $z > 0$,
$$
E_z = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{z^2 + R^2}} \right) ,
$$
e per $R \to +\infty$ la frazione $\dfrac{z}{\sqrt{z^2 + R^2}}$ tende a $0$, quindi $E_z \to \dfrac{\sigma}{2\varepsilon_0}$. Il limite non dipende né da $z$ né dal punto scelto sul piano.
:::
::::

:::osservazione{#piani-paralleli titolo="Due piani paralleli con cariche opposte"}
Si considerino due piani infiniti paralleli con densità $+\sigma$ e $-\sigma$. Ciascun piano produce un campo di modulo $\dfrac{\sigma}{2\varepsilon_0}$; il campo del piano positivo è uscente e quello del piano negativo è entrante. Tra i piani i due campi hanno lo stesso verso, dal piano positivo al piano negativo, e per il principio di sovrapposizione si sommano; all'esterno hanno versi opposti e si annullano. Quindi
$$
E =
\begin{cases}
\dfrac{\sigma}{\varepsilon_0} & \text{tra i piani} \\[8pt]
0 & \text{all'esterno}
\end{cases}
$$
e tra i piani il campo è uniforme. Con $\sigma = 8{,}85\,\mathrm{nC/m^2}$ il campo tra i piani vale $1{,}00 \cdot 10^{3}\,\mathrm{N/C}$. È la configurazione del condensatore piano, per il quale si rimanda all'argomento su conduttori, condensatori e dielettrici.
:::

## Moto di una carica in un campo uniforme

:::richiamo{titolo="Moto uniformemente accelerato"}
Un punto materiale con accelerazione costante $\vec{a}$, posizione iniziale $\vec{r}_0$ e velocità iniziale $\vec{v}_0$ ha $\vec{v}(t) = \vec{v}_0 + \vec{a}\,t$ e $\vec{r}(t) = \vec{r}_0 + \vec{v}_0\,t + \dfrac{1}{2}\vec{a}\,t^2$; lungo una retta parallela ad $\vec{a}$ vale anche $v^2 = v_0^2 + 2a\,\Delta x$. Si rimanda agli argomenti sulla cinematica in una dimensione e sul moto nel piano.
:::

::::teorema{#moto-campo-uniforme titolo="Accelerazione di una carica in un campo uniforme"}
Si consideri una particella di massa $m$ e carica $q$ in un campo elettrico uniforme $\vec{E}$, soggetta alla sola forza elettrica. Allora la particella ha accelerazione costante
$$
\vec{a} = \frac{q\,\vec{E}}{m} ,
$$
e il suo moto è uniformemente accelerato: rettilineo se la velocità iniziale è nulla o parallela al campo, parabolico negli altri casi. Per elettroni e protoni il peso è trascurabile; per un elettrone in un campo di $1{,}0 \cdot 10^{3}\,\mathrm{N/C}$ il rapporto tra la forza elettrica e il peso è $\dfrac{eE}{m_e g} \approx 1{,}8 \cdot 10^{13}$. A parità di campo l'accelerazione è inversamente proporzionale alla massa, perciò un elettrone accelera circa $1800$ volte più di un protone.

:::dimostrazione
Sulla particella agisce solo la forza $q\vec{E}$, quindi per il **secondo principio della dinamica** $m\vec{a} = q\vec{E}$. Poiché $q$, $m$ ed $\vec{E}$ sono costanti, l'accelerazione è costante, e il moto è quello di un punto con accelerazione costante, rettilineo se $\vec{v}_0$ è nulla o parallela ad $\vec{a}$ e parabolico altrimenti, come il moto di un proiettile.
:::
::::

:::esempio{titolo="Elettrone accelerato da fermo"}
Un elettrone parte da fermo in un campo uniforme di modulo $E = 2{,}0 \cdot 10^{3}\,\mathrm{N/C}$ e si muove in verso opposto al campo, perché ha carica negativa. L'accelerazione ha modulo
$$
a = \frac{eE}{m_e} = \frac{1{,}60 \cdot 10^{-19} \cdot 2{,}0 \cdot 10^{3}}{9{,}11 \cdot 10^{-31}}\,\mathrm{m/s^2} \approx 3{,}5 \cdot 10^{14}\,\mathrm{m/s^2} .
$$
Dopo un tratto $\Delta x = 1{,}0\,\mathrm{cm}$, per $v^2 = 2a\,\Delta x$ la velocità è $v = \sqrt{2 \cdot 3{,}51 \cdot 10^{14} \cdot 0{,}010}\,\mathrm{m/s} \approx 2{,}7 \cdot 10^{6}\,\mathrm{m/s}$, raggiunta in circa $7{,}5\,\mathrm{ns}$.
:::

::::teorema{#moto-perpendicolare-al-campo titolo="Deflessione di una carica in un campo uniforme"}
Una particella di massa $m$ e carica $q$ entra con velocità $\vec{v}_0$ perpendicolare al campo in una regione di lunghezza $\ell$, misurata nella direzione di $\vec{v}_0$, dove c'è un campo uniforme $\vec{E}$, per esempio tra due armature piane cariche. Con l'asse $x$ lungo $\vec{v}_0$ e l'asse $y$ lungo la forza, la traiettoria nella regione è l'arco di parabola
$$
y = \frac{|q|\,E}{2 m v_0^2}\,x^2 .
$$
All'uscita la particella è deviata dello spostamento $y_u$ e la sua velocità forma con la direzione iniziale l'angolo $\alpha$, dove
$$
y_u = \frac{|q|\,E\,\ell^2}{2 m v_0^2} , \qquad \tan\alpha = \frac{|q|\,E\,\ell}{m v_0^2} .
$$
Oltre la regione del campo la particella prosegue in linea retta. Su questo principio funzionavano gli oscilloscopi a raggi catodici, nei quali il fascio di elettroni veniva deviato da armature a tensione variabile. Un elettrone con $v_0 = 2{,}0 \cdot 10^{7}\,\mathrm{m/s}$ che attraversa per $\ell = 4{,}0\,\mathrm{cm}$ un campo di $5{,}0 \cdot 10^{3}\,\mathrm{N/C}$ viene deviato di $y_u \approx 1{,}8\,\mathrm{mm}$ ed esce con $\alpha \approx 5{,}0^\circ$.

::grafico{assi=0 uguale=1 linee="0,1 6,1;0,-1 6,-1;1.2,0.9 1.2,-0.9;2.4,0.9 2.4,-0.9;3.6,0.9 3.6,-0.9;4.8,0.9 4.8,-0.9;1.28,-0.17 1.2,-0.3 1.12,-0.17;2.48,-0.17 2.4,-0.3 2.32,-0.17;3.68,-0.17 3.6,-0.3 3.52,-0.17;4.88,-0.17 4.8,-0.3 4.72,-0.17;-0.8,0 0,0;6,0.6 8.5,1.1" curve="t,0.6*(t/6)^2,0,6" segmenti="0,0,6.4,0;6.4,0,6.4,0.6;0,-1.7,6,-1.7" vettori="-2,0,-0.8,0,v₀;3,0.15,3,0.85,F" etichette="0.3,1.2,+  +  +  +  +  +  +  +;0.3,-1.45,−  −  −  −  −  −  −  −;5.05,-0.6,E;6.55,0.15,y;2.9,-2.1,ℓ" legenda=0 xmin=-2.3 xmax=8.8 ymin=-2.4 ymax=1.7 titolo="Un elettrone entra tra le armature con velocità $\vec{v}_0$ perpendicolare al campo: la forza $\vec{F} = -e\vec{E}$ lo devia verso l'armatura positiva lungo un arco di parabola, poi prosegue in linea retta"}

:::dimostrazione
Per il teorema precedente l'accelerazione è costante, di modulo $a = \dfrac{|q|\,E}{m}$, diretta lungo $y$. Lungo $x$ non ci sono forze, quindi il moto è uniforme; lungo $y$ la velocità iniziale è nulla e il moto è uniformemente accelerato:
$$
\begin{cases}
x = v_0\,t \\[4pt]
y = \dfrac{1}{2}\,a\,t^2
\end{cases}
$$
Ricavando $t = \dfrac{x}{v_0}$ dalla prima equazione e sostituendo nella seconda si ottiene $y = \dfrac{a}{2 v_0^2}\,x^2$, che è la traiettoria. La particella esce dalla regione all'istante $t_u = \dfrac{\ell}{v_0}$, quando $y_u = \dfrac{a\,\ell^2}{2 v_0^2}$; in quell'istante le componenti della velocità sono $v_x = v_0$ e $v_y = a\,t_u = \dfrac{a\,\ell}{v_0}$, quindi $\tan\alpha = \dfrac{v_y}{v_x} = \dfrac{a\,\ell}{v_0^2}$. Sostituendo $a = \dfrac{|q|\,E}{m}$ si ottiene la tesi.
:::
::::
