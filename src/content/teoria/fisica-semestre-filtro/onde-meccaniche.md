---
titolo: Onde meccaniche e acustica
sommario: Oscillazioni, propagazione delle onde, sovrapposizione e interferenza, intensità, suono, decibel ed effetto Doppler.
---

:::percorso
Le forze elastiche e l'energia della meccanica permettono di descrivere un oscillatore. Collegando oscillazioni in punti diversi si studia come una perturbazione trasporta energia. Frequenza, lunghezza d'onda e intensità saranno usate anche per le radiazioni elettromagnetiche.
:::

## Oscillazioni e moto armonico

:::definizione{#armonico titolo="Oscillazione armonica"}
Un moto periodico si ripete dopo un **periodo** $T$. La **frequenza** $f=\dfrac1T$ conta le oscillazioni per unità di tempo e si misura in hertz, $\mathrm{Hz}=\mathrm{s^{-1}}$. La pulsazione è $\omega=2\pi f$.
$$
x(t)=A\cos(\omega t+\varphi),\qquad
a(t)=-\omega^2x(t).
$$
$A$ è l'ampiezza, cioè il massimo scostamento dall'equilibrio; $\varphi$ è la fase iniziale. La forza risultante è diretta verso l'equilibrio e proporzionale allo spostamento. Per una massa $m$ collegata a una molla ideale di costante $k$,
$$
\omega=\sqrt{\frac{k}{m}},\qquad
T=2\pi\sqrt{\frac{m}{k}},\qquad E=\frac12kA^2.
$$
Queste relazioni richiedono attriti trascurabili e comportamento elastico lineare. L'energia passa continuamente dalla forma cinetica a quella potenziale.
:::

## Propagazione di una perturbazione

:::definizione{#onda titolo="Onde meccaniche"}
Un'**onda meccanica** è una perturbazione che si propaga in un mezzo materiale trasportando energia. Le particelle del mezzo oscillano attorno alle posizioni di equilibrio; nel modello di piccole oscillazioni il loro moto non coincide con il trasferimento della perturbazione.

In un'onda trasversale lo spostamento delle particelle è perpendicolare alla direzione di propagazione, come su una corda. In un'onda longitudinale è parallelo, come nelle compressioni e rarefazioni del suono in un fluido. Nel vuoto le onde meccaniche non si propagano, perché manca il mezzo.
:::

## Lunghezza d'onda, frequenza e velocità

:::teorema{#parametri-onda titolo="Relazione fra i parametri ondulatori"}
La **lunghezza d'onda** $\lambda$ è la distanza fra due punti successivi nella stessa fase, per esempio due creste. Durante un periodo la perturbazione avanza di una lunghezza d'onda, quindi
$$
v=\frac{\lambda}{T}=\lambda f.
$$
La velocità $v$ dipende dalle proprietà del mezzo e dal tipo di onda. Su una corda ideale tesa, $v=\sqrt{\dfrac{F_T}{\mu_\ell}}$, con $F_T$ tensione e $\mu_\ell$ massa per unità di lunghezza. Quando un'onda attraversa un'interfaccia fissa fra mezzi lineari, la frequenza resta imposta dalla sorgente; velocità e lunghezza d'onda possono cambiare.
:::

:::esempio{titolo="Un ultrasuono nei tessuti"}
Nel modello omogeneo con $v=1540\,\mathrm{m/s}$ e $f=2{,}0\,\mathrm{MHz}$,
$$
\lambda=\frac{1540}{2{,}0\cdot10^6}\,\mathrm{m}
=7{,}7\cdot10^{-4}\,\mathrm{m}=0{,}77\,\mathrm{mm}.
$$
Il valore della velocità è un dato del modello del mezzo, non una costante universale del suono.
:::

## Equazione di un'onda armonica

:::definizione{#equazione-onda titolo="Onda progressiva"}
Un'onda armonica che si propaga verso $+x$ si può scrivere
$$
y(x,t)=A\cos(kx-\omega t+\varphi),\qquad
k=\frac{2\pi}{\lambda},\qquad v=\frac{\omega}{k}.
$$
$y$ è lo spostamento del mezzo, $x$ la posizione e $k$ il numero d'onda. A posizione fissata la formula descrive un'oscillazione nel tempo; a tempo fissato descrive il profilo spaziale. Con $kx+\omega t$ la propagazione è verso $-x$, assumendo $k,\omega>0$.

::grafico{f="cos(2*pi*x)" xmin=0 xmax=3 ymin=-1.4 ymax=1.4 nomi="x (m),y (mm)" legenda=0 titolo="Profilo a un istante fissato: l'ampiezza è 1 mm e due creste successive distano 1 m."}
:::

## Sovrapposizione e interferenza

:::teorema{#interferenza titolo="Somma delle perturbazioni"}
In un mezzo lineare lo spostamento risultante è la somma degli spostamenti prodotti separatamente. Per due onde coerenti della stessa frequenza, con ampiezze $A_1$, $A_2$ e differenza di fase $\Delta\varphi$, l'ampiezza risultante soddisfa
$$
A_R^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi.
$$
Per ampiezze uguali e onde in fase, $A_R=2A$; in opposizione di fase, $A_R=0$. Per sorgenti in fase, una differenza di cammino $m\lambda$ produce interferenza costruttiva, mentre $\left(m+\dfrac12\right)\lambda$ produce interferenza distruttiva, con $m$ intero. L'annullamento dell'onda in alcuni punti è compatibile con la conservazione dell'energia, che si redistribuisce nello spazio.
:::

## Energia, potenza e intensità

:::definizione{#intensita titolo="Energia trasportata da un'onda"}
La **potenza media** è l'energia trasferita per unità di tempo. L'**intensità media** è la potenza che attraversa un'area unitaria perpendicolare alla propagazione:
$$
P=\frac{\Delta E}{\Delta t},\qquad I=\frac{P}{S}.
$$
Si misura in $\mathrm{W/m^2}$. Per onde armoniche nello stesso mezzo lineare, a frequenza fissata, $I$ è proporzionale ad $A^2$. Per una corda ideale $P_{\mathrm m}=\dfrac12\mu_\ell\omega^2A^2v$. Raddoppiare l'ampiezza quadruplica la potenza, nelle stesse condizioni.
:::

:::teorema{#inverso-quadrato titolo="Sorgente puntiforme isotropa"}
Se una sorgente emette la stessa potenza in tutte le direzioni, in un mezzo senza assorbimento e senza ostacoli, l'energia attraversa sfere di area $4\pi r^2$:
$$
I(r)=\frac{P}{4\pi r^2},\qquad
\frac{I_2}{I_1}=\left(\frac{r_1}{r_2}\right)^2.
$$
Raddoppiando la distanza l'intensità diventa un quarto. La relazione descrive la propagazione sferica nelle ipotesi date; non vale automaticamente per un fascio collimato.
:::

## Suono e velocità nei mezzi

:::definizione{#suono titolo="Onde acustiche"}
Il **suono** in un fluido è una variazione di pressione e densità che si propaga come onda longitudinale. La velocità dipende da elasticità, densità e temperatura del mezzo. In aria a circa $20\,{}^\circ\mathrm C$ è circa $343\,\mathrm{m/s}$; nei tessuti molli si usa spesso il valore di modello $1540\,\mathrm{m/s}$.

La frequenza è associata all'altezza percepita; l'intensità contribuisce alla sensazione di volume, che dipende anche dalla frequenza e dall'orecchio. Con la convenzione usuale gli ultrasuoni hanno frequenza superiore a circa $20\,\mathrm{kHz}$. Per un'eco, se $\Delta t$ comprende andata e ritorno, la distanza dal riflettore è $d=\dfrac{v\Delta t}{2}$.
:::

## Livello di intensità sonora

:::definizione{#decibel titolo="Scala dei decibel"}
Il **livello di intensità sonora** è
$$
L_I=10\log_{10}\left(\frac{I}{I_0}\right),\qquad
I_0=10^{-12}\,\mathrm{W/m^2}.
$$
Il livello si esprime in decibel. Una differenza $\Delta L$ corrisponde al rapporto $\dfrac{I_2}{I_1}=10^{\Delta L/10}$. Un aumento di $10\,\mathrm{dB}$ moltiplica l'intensità per $10$; un raddoppio dell'intensità aumenta il livello di circa $3\,\mathrm{dB}$.

Le intensità di sorgenti indipendenti e incoerenti si sommano prima di calcolare il logaritmo. Due sorgenti da $60\,\mathrm{dB}$ ciascuna producono circa $63\,\mathrm{dB}$ nel punto in cui forniscono la stessa intensità, nelle condizioni indicate.
:::

## Effetto Doppler

:::osservazione{#doppler titolo="Frequenza osservata e moto relativo"}
Nell'**effetto Doppler** la frequenza osservata cambia quando sorgente e ricevitore si muovono rispetto al mezzo. Se si avvicinano, le creste arrivano più frequentemente; se si allontanano, meno frequentemente. Con sorgente ferma e osservatore che si muove lungo la direzione di propagazione verso la sorgente a velocità $u$,
$$
f_{\mathrm{oss}}=f\frac{v+u}{v}.
$$
Questo è un caso semplice con mezzo fermo e velocità inferiori a quella dell'onda. Nell'ecografia Doppler si osserva lo spostamento di frequenza dell'onda riflessa da strutture in moto; il risultato dipende anche dall'angolo fra fascio e velocità. Il syllabus richiede una comprensione qualitativa del fenomeno.
:::
