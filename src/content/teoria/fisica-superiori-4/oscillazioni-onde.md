---
titolo: Oscillazioni e onde meccaniche
sommario: Moto armonico, massa e molla, pendolo, propagazione delle onde, fase, sovrapposizione e onde stazionarie sulle corde.
---

## Periodo, frequenza e fase

:::definizione{#periodo-frequenza titolo="Grandezze di un'oscillazione"}
Un moto è **periodico** quando si ripete dopo un intervallo di tempo $T$, chiamato periodo. La frequenza $f$ è il numero di oscillazioni complete per secondo,
$$
f=\frac1T,\qquad \omega=2\pi f=\frac{2\pi}{T}.
$$
$f$ si misura in hertz, equivalenti a $\mathrm{s^{-1}}$; $\omega$ è la pulsazione, in radianti al secondo. Un oscillatore che compie $40$ oscillazioni in $20\,\mathrm s$ ha $f=2{,}0\,\mathrm{Hz}$ e $T=0{,}50\,\mathrm s$. Si contano oscillazioni complete, cioè ritorni alla stessa posizione con lo stesso verso del moto.

La **fase** indica il punto del ciclo in cui si trova il sistema. Due oscillatori con uguale frequenza sono in fase quando raggiungono insieme massimi, minimi e passaggi concordi per l'equilibrio. Uno sfasamento di $\pi$ radianti corrisponde a mezza oscillazione. Ampiezza e fase hanno ruoli diversi: la prima stabilisce lo spostamento massimo, la seconda la posizione temporale nel ciclo.
:::

## Moto armonico

:::definizione{#moto-armonico titolo="Legge oraria armonica"}
Un moto armonico attorno alla posizione di equilibrio $x=0$ si può scrivere
$$
x(t)=A\cos(\omega t+\varphi),\qquad A>0.
$$
$A$ è l'ampiezza, $\omega$ la pulsazione e $\varphi$ la fase iniziale. Con $\varphi=0$ il corpo parte dall'estremo positivo. Le leggi della velocità e dell'accelerazione sono
$$
v(t)=-\omega A\sin(\omega t+\varphi),\qquad a(t)=-\omega^2x(t).
$$
Queste espressioni si ricavano anche dalla proiezione del moto circolare uniforme su un diametro. L'accelerazione è proporzionale allo spostamento e ha verso opposto, quindi è sempre rivolta verso l'equilibrio. Il modulo della velocità è massimo al centro e nullo agli estremi; il modulo dell'accelerazione è massimo agli estremi.

Con $A=0{,}050\,\mathrm m$ e $f=2{,}0\,\mathrm{Hz}$ si hanno $\omega=4\pi\,\mathrm{rad/s}$ e $v_{\max}=\omega A\simeq0{,}628\,\mathrm{m/s}$. Dopo un quarto di periodo il corpo partito da $x=A$ passa per l'equilibrio con velocità negativa.
:::

::grafico{f="cos(pi*x/2);-sin(pi*x/2)" xmin=0 xmax=4 ymin=-2 ymax=2 nomi="t,y" legenda="x/A;v/(ωA)" titolo="Posizione e velocità normalizzate in un periodo di $4\,\mathrm s$: quando lo spostamento è massimo, la velocità è nulla"}

## Massa e molla

::::teorema{#massa-molla titolo="Periodo dell'oscillatore elastico"}
Una massa $m$ collegata a una molla ideale di costante $k$, senza attrito, compie oscillazioni armoniche attorno all'equilibrio con
$$
\omega=\sqrt{\frac{k}{m}},\qquad T=2\pi\sqrt{\frac{m}{k}}.
$$
Con $m=0{,}50\,\mathrm{kg}$ e $k=200\,\mathrm{N/m}$, il periodo è circa $0{,}314\,\mathrm s$. Raddoppiare l'ampiezza lascia invariato il periodo finché resta valida la legge elastica lineare.

:::dimostrazione
La legge di Hooke dà $F=-kx$, con $x$ misurato dall'equilibrio. Dal secondo principio della dinamica $ma=-kx$, quindi $a=-\dfrac{k}{m}x$. Nel moto armonico $a=-\omega^2x$, perciò $\omega^2=\dfrac{k}{m}$. Sostituendo questa pulsazione in $T=\dfrac{2\pi}{\omega}$ si trova la formula del periodo.
:::
::::

:::teorema{#energia-armonica titolo="Energia dell'oscillatore"}
Senza dissipazioni l'energia meccanica resta costante,
$$
E=\frac12mv^2+\frac12kx^2=\frac12kA^2.
$$
All'estremo l'energia è interamente potenziale elastica; all'equilibrio è interamente cinetica. Per $k=200\,\mathrm{N/m}$ e $A=0{,}050\,\mathrm m$, $E=0{,}25\,\mathrm J$. In una posizione intermedia,
$$
|v|=\sqrt{\frac{k}{m}(A^2-x^2)}.
$$
La formula fornisce il modulo; il segno dipende dal verso del passaggio. Se l'ampiezza raddoppia l'energia quadruplica, perché dipende dal suo quadrato.
:::

## Pendolo semplice e risonanza

:::teorema{#pendolo titolo="Piccole oscillazioni del pendolo"}
Un pendolo semplice è una massa puntiforme appesa a un filo inestensibile di lunghezza $\ell$, con massa del filo trascurabile. Per piccole oscillazioni e attriti trascurabili,
$$
T=2\pi\sqrt{\frac{\ell}{g}}.
$$
La formula deriva dall'approssimazione $\sin\theta\simeq\theta$, con l'angolo espresso in radianti. Per $\ell=1{,}0\,\mathrm m$ e $g=9{,}81\,\mathrm{m/s^2}$ si ottiene circa $2{,}01\,\mathrm s$. La massa non compare. Quadruplicare la lunghezza raddoppia il periodo. Per oscillazioni ampie il periodo dipende anche dall'ampiezza, quindi la formula delle piccole oscillazioni perde precisione.

Una forza esterna periodica può mantenere le oscillazioni contro le dissipazioni. La **risonanza** è il marcato aumento dell'ampiezza quando la frequenza della forza è vicina a quella propria del sistema. Lo smorzamento limita l'ampiezza e allarga l'intervallo di frequenze della risposta; nei sistemi reali il massimo non cresce indefinitamente.
:::

## Propagazione delle onde

:::definizione{#onda titolo="Onda meccanica e velocità di propagazione"}
Un'**onda meccanica** è una perturbazione che si propaga in un mezzo, trasferendo energia. Le particelle oscillano attorno alle loro posizioni di equilibrio, mentre la perturbazione si sposta. Su una corda l'oscillazione è trasversale alla propagazione; nel suono in un fluido è longitudinale.

La lunghezza d'onda $\lambda$ è la distanza tra punti consecutivi che oscillano in fase, per esempio due creste. In un periodo la perturbazione avanza di una lunghezza d'onda, quindi
$$
u=\lambda f=\frac{\lambda}{T}.
$$
Una corda con $u=20\,\mathrm{m/s}$ e $f=5{,}0\,\mathrm{Hz}$ ha $\lambda=4{,}0\,\mathrm m$. Il simbolo $u$ indica qui la velocità dell'onda, distinta dalla velocità istantanea di un punto della corda.
:::

::grafico{f="sin(pi*x)" xmin=0 xmax=6 ymin=-2 ymax=2 nomi="x,y" titolo="Profilo di un'onda trasversale in un istante: le creste consecutive sono separate da $\lambda=2$ unità di lunghezza"}

## Equazione di un'onda armonica

:::definizione{#equazione-onda titolo="Numero d'onda e verso di propagazione"}
Un'onda armonica che si propaga lungo il verso positivo dell'asse $x$ può essere rappresentata da
$$
y(x,t)=A\cos(kx-\omega t+\varphi),\qquad
k=\frac{2\pi}{\lambda},\qquad u=\frac{\omega}{k}.
$$
$k$ è il numero d'onda, in radianti per metro. A posizione fissata la formula descrive un'oscillazione nel tempo; a tempo fissato descrive il profilo nello spazio. La condizione di fase costante $kx-\omega t=\text{costante}$ dà $x=ut+\text{costante}$, quindi il profilo avanza verso $x$ crescente. Il segno più tra $kx$ e $\omega t$ descrive invece la propagazione nel verso opposto.

Due punti distanti $\Delta x$ hanno differenza di fase $\Delta\varphi=k\Delta x$. Se la distanza è $\dfrac{\lambda}{2}$, lo sfasamento è $\pi$ e i punti sono in opposizione. In un mezzo non dispersivo la velocità dipende dalle proprietà del mezzo. Per una corda tesa ideale,
$$
u=\sqrt{\frac{F_T}{\mu}},
$$
dove $F_T$ è la tensione e $\mu$ la massa per unità di lunghezza. Con $F_T=100\,\mathrm N$ e $\mu=0{,}010\,\mathrm{kg/m}$ si ottiene $u=100\,\mathrm{m/s}$.
:::

## Sovrapposizione e riflessione

:::teorema{#sovrapposizione titolo="Somma delle perturbazioni"}
Nel regime lineare lo spostamento prodotto da due onde è la somma degli spostamenti che ciascuna produrrebbe da sola. Due onde uguali in fase hanno ampiezza risultante $2A$. Se sono in opposizione e hanno la stessa ampiezza, lo spostamento risultante è nullo nei punti e negli istanti in cui si sovrappongono in quel modo.

Questa **interferenza** riguarda la somma algebrica degli spostamenti. L'energia dipende dal quadrato dell'ampiezza, quindi non si sommano direttamente le intensità quando le onde mantengono una relazione di fase. L'annullamento locale si accompagna a una diversa distribuzione dell'energia nello spazio.

Quando un impulso su una corda si riflette a un estremo fisso, il vincolo impone spostamento nullo all'estremo e l'impulso riflesso è invertito. A un estremo libero ideale non c'è inversione dello spostamento. L'onda incidente e quella riflessa possono sovrapporsi formando onde stazionarie. Le condizioni degli estremi determinano quali lunghezze d'onda sono compatibili con il vincolo.
:::

## Onde stazionarie su una corda

::::teorema{#onde-stazionarie titolo="Nodi, ventri e armoniche"}
Su una corda ideale lunga $L$, fissata ai due estremi, le onde stazionarie hanno
$$
\lambda_n=\frac{2L}{n},\qquad f_n=\frac{nu}{2L},\qquad n=1,2,3,\ldots
$$
I **nodi** restano fermi; i **ventri** hanno ampiezza massima. Due nodi consecutivi distano $\dfrac{\lambda}{2}$ e un nodo e il ventre vicino distano $\dfrac{\lambda}{4}$. Il modo $n=1$ è la fondamentale. Con $L=1{,}0\,\mathrm m$ e $u=100\,\mathrm{m/s}$, la fondamentale è $50\,\mathrm{Hz}$ e la terza armonica è $150\,\mathrm{Hz}$.

:::dimostrazione
Gli estremi fissi devono essere nodi. Ogni intervallo fra due nodi contiene mezza lunghezza d'onda, quindi nella lunghezza della corda entrano $n$ intervalli di lunghezza $\dfrac{\lambda_n}{2}$. Si ha $L=n\dfrac{\lambda_n}{2}$ e dunque $\lambda_n=\dfrac{2L}{n}$. Usando $u=\lambda_n f_n$ si trova la relazione delle frequenze.
:::
::::

::grafico{f="sin(pi*x);sin(2*pi*x)" xmin=0 xmax=1 ymin=-2 ymax=2 nomi="x,y" legenda="fondamentale;seconda armonica" titolo="Due profili normalizzati su una corda di lunghezza unitaria fissata agli estremi: la seconda armonica ha un nodo anche al centro"}
