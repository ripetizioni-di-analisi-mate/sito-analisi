---
titolo: Metodi della fisica, grandezze e vettori
sommario: Unità e conversioni, ordini di grandezza, lettura di formule e grafici, trigonometria e operazioni tra vettori per impostare i problemi di fisica.
---

:::percorso
Si parte dal calcolo con le potenze e dalle equazioni di primo grado. Si impara a tradurre i dati in grandezze fisiche, a controllare le unità e a rappresentare spostamenti e forze. Questi strumenti saranno usati in meccanica, nei fluidi e nei campi elettrici e magnetici.
:::

:::osservazione{#programma titolo="Programma di riferimento"}
Gli argomenti del corso prendono come riferimento il [programma di Fisica per il semestre filtro pubblicato dal MUR per il 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf).
:::

## Grandezze e Sistema Internazionale

:::definizione{#grandezze titolo="Grandezze fisiche e unità"}
Una **grandezza fisica** è una proprietà misurabile. Scrivere $\ell=2{,}4\,\mathrm{cm}$ significa confrontare una lunghezza con l'unità centimetro. La stessa lunghezza vale $0{,}024\,\mathrm{m}$; cambia il numero, mentre la grandezza resta la stessa.

| Grandezza di base | Unità SI | Simbolo |
| --- | --- | --- |
| lunghezza | metro | $\mathrm{m}$ |
| massa | chilogrammo | $\mathrm{kg}$ |
| tempo | secondo | $\mathrm{s}$ |
| corrente elettrica | ampere | $\mathrm{A}$ |
| temperatura | kelvin | $\mathrm{K}$ |
| quantità di sostanza | mole | $\mathrm{mol}$ |
| intensità luminosa | candela | $\mathrm{cd}$ |

Le grandezze derivate si costruiscono da quelle di base. Per esempio $v=\dfrac{\Delta x}{\Delta t}$ ha unità $\mathrm{m/s}$, la forza ha unità $\mathrm{N}=\mathrm{kg\,m/s^2}$, l'energia $\mathrm{J}=\mathrm{N\,m}$ e la pressione $\mathrm{Pa}=\mathrm{N/m^2}$.
:::

## Conversioni e potenze di dieci

:::definizione{#conversioni titolo="Conversioni di unità"}
Un prefisso rappresenta un fattore numerico: kilo vale $10^3$, centi $10^{-2}$, milli $10^{-3}$, micro $10^{-6}$ e nano $10^{-9}$. Per convertire si sostituisce il valore dell'unità e si eseguono le operazioni.
$$
1\,\mathrm{mL}=1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3},\qquad
1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}.
$$
L'esponente si applica anche al prefisso: $1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2}$. Una densità di $1{,}05\,\mathrm{g/cm^3}$ vale quindi $1050\,\mathrm{kg/m^3}$.
:::

:::esempio{titolo="Una portata in unità SI"}
Per convertire $4{,}8\,\mathrm{L/min}$ si convertono separatamente volume e tempo:
$$
Q=\frac{4{,}8\cdot10^{-3}\,\mathrm{m^3}}{60\,\mathrm{s}}
=8{,}0\cdot10^{-5}\,\mathrm{m^3/s}.
$$
Questa conversione servirà nell'equazione di continuità e nella legge di Poiseuille.
:::

:::definizione{#notazione titolo="Notazione scientifica e ordine di grandezza"}
Un numero positivo si scrive $a\cdot10^n$, con $1\le a<10$ e $n$ intero. Nei prodotti si moltiplicano i coefficienti e si sommano gli esponenti; nei quozienti si dividono i coefficienti e si sottraggono gli esponenti.

Per una stima esplicita si può arrotondare alla potenza di dieci più vicina su scala logaritmica: se $a<\sqrt{10}$ si usa $10^n$, se $a\ge\sqrt{10}$ si usa $10^{n+1}$. Per esempio $6\cdot10^{-6}\,\mathrm{m}$ ha ordine di grandezza $10^{-5}\,\mathrm{m}$. Dichiarare il criterio evita ambiguità nelle stime.
:::

## Dimensioni e controllo delle formule

:::osservazione{#dimensioni titolo="Analisi dimensionale"}
Le **dimensioni** esprimono la dipendenza dalle grandezze di base. Indicando con $M$, $L$ e $T$ massa, lunghezza e tempo, si ha $[v]=LT^{-1}$, $[a]=LT^{-2}$ e $[F]=MLT^{-2}$. Si possono sommare solo termini con la stessa dimensione.
$$
[\rho v^2]=\frac{M}{L^3}\frac{L^2}{T^2}
=ML^{-1}T^{-2}=[p].
$$
Quindi $\rho v^2$ può rappresentare una pressione. L'analisi dimensionale controlla la coerenza, ma da sola non determina fattori numerici come $\dfrac12$.
:::

## Grandezze estensive e intensive

:::definizione{#estensive-intensive titolo="Dipendenza dalla quantità di materia"}
Una grandezza **estensiva** è additiva per parti del sistema nelle condizioni considerate, come massa, volume ed energia interna. Una grandezza **intensiva**, come temperatura, pressione e densità, non raddoppia unendo due porzioni identiche nello stesso stato. Se due campioni di acqua alla stessa temperatura vengono uniti senza scambi di energia, la massa raddoppia e la temperatura resta uguale.
:::

## Formule inverse e grafici

:::osservazione{#grafici titolo="Leggere una relazione fisica"}
Da $\rho=\dfrac{m}{V}$ si ricavano $m=\rho V$ e $V=\dfrac{m}{\rho}$. L'operazione va applicata a entrambi i membri prima di sostituire i numeri.

Nel grafico $y=kx+b$, $k=\dfrac{\Delta y}{\Delta x}$ è la pendenza e $b$ è l'intercetta. Le unità di $k$ sono le unità di $y$ divise per quelle di $x$. In un grafico posizione-tempo la pendenza è una velocità; in un grafico velocità-tempo l'area con segno è uno spostamento.

::grafico{f="2*x+1" xmin=0 xmax=4 ymin=0 ymax=10 nomi="t (s),x (m)" legenda=0 punti="0,1;3,7" segmenti="0,1,3,1;3,1,3,7" titolo="La posizione passa da 1 m a 7 m in 3 s: la pendenza vale 2 m/s."}
:::

## Trigonometria e componenti

:::definizione{#trigonometria titolo="Seno, coseno e tangente"}
In un triangolo rettangolo il seno di un angolo è il rapporto tra cateto opposto e ipotenusa, il coseno tra cateto adiacente e ipotenusa, la tangente tra cateto opposto e adiacente. Gli angoli si possono esprimere in radianti: $180^\circ=\pi\,\mathrm{rad}$.
$$
\sin^2\theta+\cos^2\theta=1,\qquad
\tan\theta=\frac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).
$$
Per $30^\circ$ si ha $\sin\theta=\dfrac12$ e $\cos\theta=\dfrac{\sqrt3}{2}$; per $45^\circ$ entrambi valgono $\dfrac{\sqrt2}{2}$.
:::

:::definizione{#componenti titolo="Scalari e vettori"}
Uno **scalare** è descritto da un valore con unità; un **vettore** richiede anche direzione e verso. Massa e temperatura sono scalari; spostamento e forza sono vettori. Nel piano, per un vettore di modulo $a$ inclinato di $\theta$ rispetto all'asse positivo $x$,
$$
a_x=a\cos\theta,\qquad a_y=a\sin\theta,\qquad
a=\sqrt{a_x^2+a_y^2}.
$$
Il segno delle componenti dipende dal verso rispetto agli assi.

::grafico{vettori="0,0,3,2,a" segmenti="0,2,3,2;3,0,3,2" punti="3,0,pieno,aₓ;0,2,pieno,aᵧ" xmin=-0.5 xmax=4 ymin=-0.5 ymax=3 uguale=1 titolo="Le componenti sono le proiezioni del vettore sugli assi cartesiani."}
:::

## Operazioni tra vettori

:::definizione{#operazioni-vettori titolo="Somma, differenza e prodotto per uno scalare"}
Somma e differenza si calcolano per componenti:
$$
(\vec a\pm\vec b)_x=a_x\pm b_x,\qquad
(\vec a\pm\vec b)_y=a_y\pm b_y.
$$
Moltiplicare un vettore per uno scalare $k$ moltiplica ciascuna componente per $k$; se $k<0$ si inverte il verso. Con $\vec a=(3,2)$ e $\vec b=(-1,4)$ si ottiene $\vec a+\vec b=(2,6)$, di modulo $\sqrt{40}$.
:::

:::definizione{#prodotti-vettori titolo="Prodotto scalare e prodotto vettoriale"}
Il **prodotto scalare** restituisce uno scalare:
$$
\vec a\cdot\vec b=ab\cos\theta
=a_xb_x+a_yb_y+a_zb_z.
$$
È nullo per vettori perpendicolari. Il lavoro di una forza costante sarà $W=\vec F\cdot\Delta\vec r$.

Il **prodotto vettoriale** è perpendicolare al piano dei due vettori, ha modulo $ab\sin\theta$ e verso dato dalla regola della mano destra. In particolare $(\vec a\times\vec b)_z=a_xb_y-a_yb_x$. Il momento di una forza sarà $\vec\tau=\vec r\times\vec F$.
:::
