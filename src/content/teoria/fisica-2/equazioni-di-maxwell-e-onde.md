---
titolo: Equazioni di Maxwell e onde elettromagnetiche
sommario: Come la corrente di spostamento completa la legge di Ampère, quali sono le quattro equazioni di Maxwell, perché da esse seguono onde che si propagano alla velocità della luce, e quanta energia e quantità di moto queste onde trasportano.
---

## Corrente di spostamento

In tutto l'argomento i campi sono nel vuoto, salvo dove è detto esplicitamente, e le intensità di corrente si indicano con la lettera minuscola $i$, perché la lettera $I$ indica l'intensità di un'onda.

:::richiamo{titolo="Legge di Ampère"}
In regime stazionario, per ogni linea chiusa orientata $\gamma$ vale $\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, i_{\text{conc}}$, dove $i_{\text{conc}}$ è la corrente concatenata con $\gamma$, cioè la corrente che attraversa una superficie qualsiasi che ha $\gamma$ come bordo, con il verso positivo fissato dalla regola della mano destra. Si rimanda all'argomento sulle sorgenti del campo magnetico.
:::

:::osservazione{#incoerenza-legge-ampere titolo="Legge di Ampère e condensatore in carica"}
Si consideri un condensatore piano che si carica attraverso un filo percorso dalla corrente $i$, e una linea chiusa $\gamma$ che circonda il filo. La corrente concatenata con $\gamma$ si può calcolare su una superficie qualsiasi che abbia $\gamma$ come bordo. La superficie piana $S_1$ è attraversata dal filo, quindi la corrente che la attraversa vale $i$. La superficie $S_2$, che ha lo stesso bordo, passa tra le armature, dove non ci sono cariche in moto, quindi la corrente che la attraversa è nulla. La legge di Ampère darebbe perciò due valori diversi per la stessa circuitazione $\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l}$, e nella forma del richiamo vale solo per correnti stazionarie.

Tra le armature c'è però un campo elettrico che cresce mentre il condensatore si carica, e il suo flusso attraverso $S_2$ varia nel tempo. Maxwell aggiunse alla legge di Ampère un termine proporzionale alla rapidità di variazione di quel flusso, scelto in modo che le due superfici diano lo stesso risultato.

::grafico{assi=0 uguale=1 linee="0,0 4,0;5,0 9,0;4,-1.6 4,1.6;5,-1.6 5,1.6" curve="2.5+0.25*cos(t),1.0*sin(t),0,6.29" segmenti="2.5,1,2.9,1.6;2.9,1.6,3.5,2.05;3.5,2.05,4.1,2.1;4.1,2.1,4.5,1.85;4.5,1.85,4.5,-1.85;4.5,-1.85,4.1,-2.1;4.1,-2.1,3.5,-2.05;3.5,-2.05,2.9,-1.6;2.9,-1.6,2.5,-1" vettori="0.6,0,1.6,0,i;6.8,0,7.8,0,i" etichette="2.0,1.2,γ;1.85,-0.65,S₁;3.3,2.35,S₂;3.35,-1.25,+q;5.15,-1.25,−q" xmin=-0.2 xmax=9.2 ymin=-2.6 ymax=2.7 titolo="Condensatore in carica: la superficie piana $S_1$ è attraversata dalla corrente $i$, la superficie $S_2$ con lo stesso bordo $\gamma$ passa tra le armature, dove scorre solo la corrente di spostamento"}

:::

:::definizione{#corrente-di-spostamento titolo="Corrente di spostamento"}
Sia $S$ una superficie orientata e sia $\Phi_E = \displaystyle\iint_S \vec{E} \cdot \hat{n}\, dA$ il flusso del campo elettrico attraverso di essa. La **corrente di spostamento** attraverso $S$ è
$$
i_s = \varepsilon_0 \frac{d\Phi_E}{dt} .
$$
Si misura in ampere, come una corrente di conduzione, perché il prodotto $\varepsilon_0 \Phi_E$ si misura in $\mathrm{C^2/(N\cdot m^2)} \cdot \mathrm{N\cdot m^2/C} = \mathrm{C}$. La corrente di spostamento *non* corrisponde a un moto di cariche; il nome ricorda che questo termine entra nella legge di Ampère-Maxwell accanto alla corrente di conduzione e con le stesse unità. Per esempio, se il campo uniforme tra le armature di un condensatore di area $A = 0{,}010\,\mathrm{m^2}$ cresce con rapidità $\dfrac{dE}{dt} = 1{,}0 \cdot 10^{12}\,\mathrm{V/(m\cdot s)}$, la corrente di spostamento è $i_s = \varepsilon_0 A \dfrac{dE}{dt} = 8{,}85 \cdot 10^{-12} \cdot 0{,}010 \cdot 1{,}0 \cdot 10^{12}\,\mathrm{A} \approx 0{,}089\,\mathrm{A}$.
:::

::::teorema{#corrente-spostamento-condensatore titolo="Corrente di spostamento in un condensatore piano"}
Si consideri un condensatore piano nel vuoto, con armature di area $A$, collegato a un circuito in cui scorre la corrente $i = \dfrac{dq}{dt}$, dove $q$ è la carica dell'armatura positiva, e si trascurino gli effetti di bordo. Allora la corrente di spostamento attraverso una superficie che passa tra le armature, parallela a esse, è uguale alla corrente di conduzione nei fili:
$$
i_s = i .
$$
La corrente di spostamento prosegue quindi tra le armature la corrente di conduzione, che sulle armature si interrompe. Con questo termine le superfici $S_1$ e $S_2$ che hanno lo stesso bordo $\gamma$ danno la stessa corrente concatenata, e la contraddizione della legge di Ampère scompare. Un condensatore che si carica con $i = 2{,}0\,\mathrm{A}$ è attraversato da una corrente di spostamento di $2{,}0\,\mathrm{A}$, qualunque siano l'area delle armature e la loro distanza.

:::dimostrazione
Trascurando gli effetti di bordo, tra le armature il campo è uniforme, perpendicolare alle armature, di modulo $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{q}{\varepsilon_0 A}$, mentre all'esterno è nullo. Il flusso attraverso la superficie, orientata dall'armatura positiva verso la negativa, è perciò
$$
\Phi_E = E A = \frac{q}{\varepsilon_0} .
$$
Derivando rispetto al tempo si ottiene $i_s = \varepsilon_0 \dfrac{d\Phi_E}{dt} = \dfrac{dq}{dt} = i$.
:::
::::

## Legge di Ampère-Maxwell

:::teorema{#legge-ampere-maxwell titolo="Legge di Ampère-Maxwell"}
Per ogni linea chiusa orientata $\gamma$ e per ogni superficie $S$ che ha $\gamma$ come bordo, orientata con la regola della mano destra,
$$
\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, i_{\text{conc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} = \mu_0 \left( i_{\text{conc}} + i_s \right) ,
$$
dove $i_{\text{conc}}$ è la corrente di conduzione che attraversa $S$ e $\Phi_E$ è il flusso del campo elettrico attraverso $S$. È un postulato, introdotto da Maxwell per rendere la legge di Ampère coerente con la conservazione della carica e confermato dalla scoperta sperimentale delle onde elettromagnetiche.

La legge afferma che il campo magnetico è generato sia dalle correnti sia dai campi elettrici che variano nel tempo. In regime stazionario il flusso $\Phi_E$ è costante e si ritrova la legge di Ampère. Per esempio, attorno a un condensatore che si carica con $i = 2{,}0\,\mathrm{A}$, la circuitazione di $\vec{B}$ lungo una linea che circonda il filo vale $\mu_0 i \approx 2{,}5 \cdot 10^{-6}\,\mathrm{T\cdot m}$ anche se la superficie scelta passa tra le armature.
:::

::::teorema{#campo-magnetico-nel-condensatore titolo="Campo magnetico tra le armature di un condensatore"}
Si consideri un condensatore piano nel vuoto con armature circolari di raggio $R$, che si carica con corrente $i$, e si trascurino gli effetti di bordo. Nella regione compresa tra i piani delle armature le linee del campo magnetico sono circonferenze coassiali con le armature, e alla distanza $r$ dall'asse il modulo del campo è

- $B = \dfrac{\mu_0\, i\, r}{2\pi R^2}$ per $0 \le r \le R$;
- $B = \dfrac{\mu_0\, i}{2\pi r}$ per $r \ge R$.

Il campo cresce linearmente con $r$ fino al bordo delle armature, dove raggiunge il valore massimo $\dfrac{\mu_0 i}{2\pi R}$, e all'esterno coincide con il campo di un filo rettilineo percorso dalla corrente $i$. Con $R = 5{,}0\,\mathrm{cm}$ e $i = 2{,}0\,\mathrm{A}$ il campo massimo è $\dfrac{4\pi \cdot 10^{-7} \cdot 2{,}0}{2\pi \cdot 0{,}050}\,\mathrm{T} = 8{,}0\,\mu\mathrm{T}$.

::grafico{assi=0 uguale=1 poligoni="2,0 1.879,0.684 1.532,1.286 1,1.732 0.347,1.970 -0.347,1.970 -1,1.732 -1.532,1.286 -1.879,0.684 -2,0 -1.879,-0.684 -1.532,-1.286 -1,-1.732 -0.347,-1.970 0.347,-1.970 1,-1.732 1.532,-1.286 1.879,-0.684" curve="cos(t),sin(t),0,6.29;3*cos(t),3*sin(t),0,6.29" vettori="0.45,1.0,-0.45,1.0,B;0.7,3.0,-0.7,3.0,B" segmenti="0,0,1.414,-1.414" etichette="0.75,-0.55,R;-0.12,-0.12,⊙;-1.45,0.15,⊙;1.25,0.15,⊙;-0.12,-1.45,⊙;-0.95,-1.0,⊙" xmin=-3.6 xmax=3.6 ymin=-3.4 ymax=3.6 legenda=0 titolo="Vista dall'alto: tra le armature il campo $\vec{E}$ esce dal foglio e cresce; le linee del campo magnetico sono circonferenze coassiali percorse in verso antiorario, dentro e fuori dal bordo delle armature"}

::grafico{f="min(x,1/x)+0*sqrt(x)" punti="1,1,pieno" segmenti="1,0,1,1" xmin=-0.3 xmax=4.2 ymin=-0.15 ymax=1.3 nomi="r,B" titolo="Modulo del campo magnetico in funzione della distanza dall'asse, con $r$ in unità di $R$ e $B$ in unità di $\dfrac{\mu_0 i}{2\pi R}$: retta fino al bordo delle armature, poi andamento come $\dfrac{1}{r}$"}

:::dimostrazione
Il campo elettrico tra le armature è uniforme e vale $E = \dfrac{q}{\varepsilon_0 \pi R^2}$, quindi $\dfrac{dE}{dt} = \dfrac{i}{\varepsilon_0 \pi R^2}$. Per la simmetria di rotazione attorno all'asse, il campo magnetico è tangente alle circonferenze coassiali e ha modulo costante su ciascuna di esse. Si applica la legge di Ampère-Maxwell alla circonferenza $\gamma$ di raggio $r$, in un piano parallelo alle armature e compreso tra esse, con la superficie uguale al cerchio delimitato da $\gamma$. Il cerchio non è attraversato da correnti di conduzione, quindi
$$
2\pi r\, B = \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt} .
$$
Se $r \le R$, il flusso è $\Phi_E = E\,\pi r^2$, perciò $2\pi r\, B = \mu_0 \varepsilon_0\, \pi r^2\, \dfrac{i}{\varepsilon_0 \pi R^2} = \mu_0\, i\, \dfrac{r^2}{R^2}$, da cui la prima formula. Se $r \ge R$, il campo elettrico è nullo fuori dalle armature, quindi $\Phi_E = E\,\pi R^2 = \dfrac{q}{\varepsilon_0}$ e $2\pi r\, B = \mu_0\, i$, da cui la seconda.
:::
::::

## Equazioni di Maxwell

:::richiamo{titolo="Flusso e circuitazione"}
Il flusso di un campo vettoriale $\vec{F}$ attraverso una superficie orientata $S$ con versore normale $\hat{n}$ è l'integrale di superficie $\displaystyle\iint_S \vec{F} \cdot \hat{n}\, dA$; per una superficie chiusa si scrive $\displaystyle\oint_S \vec{F} \cdot \hat{n}\, dA$, con $\hat{n}$ rivolto verso l'esterno. La circuitazione di $\vec{F}$ lungo una linea chiusa orientata $\gamma$ è l'integrale di linea $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{l}$. Si rimanda agli argomenti sulle curve e gli integrali di linea e su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::teorema{#equazioni-di-maxwell titolo="Equazioni di Maxwell in forma integrale"}
Nel vuoto, in presenza di cariche e correnti, il campo elettrico e il campo magnetico soddisfano, per ogni superficie chiusa $S$ e per ogni linea chiusa orientata $\gamma$ che è il bordo di una superficie fissa $\Sigma$, orientata con la regola della mano destra, le quattro equazioni
$$
\begin{cases}
\displaystyle\oint_S \vec{E} \cdot \hat{n}\, dA = \frac{Q_{\text{int}}}{\varepsilon_0} \\[14pt]
\displaystyle\oint_S \vec{B} \cdot \hat{n}\, dA = 0 \\[14pt]
\displaystyle\oint_\gamma \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \\[14pt]
\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0\, i_{\text{conc}} + \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}
\end{cases}
$$
dove $Q_{\text{int}}$ è la carica contenuta in $S$, $\Phi_B$ e $\Phi_E$ sono i flussi dei due campi attraverso $\Sigma$ e $i_{\text{conc}}$ è la corrente di conduzione che attraversa $\Sigma$. Sono postulati, che riuniscono la legge di Gauss, la legge di Gauss per il magnetismo, la legge di Faraday-Neumann-Lenz e la legge di Ampère-Maxwell; le loro conseguenze sono confermate dagli esperimenti finché gli effetti quantistici sono trascurabili.

Insieme alla **forza di Lorentz** $\vec{F} = q \left( \vec{E} + \vec{v} \times \vec{B} \right)$, che descrive l'azione dei campi sulle cariche, le equazioni di Maxwell contengono tutto l'elettromagnetismo classico: assegnate le cariche e le correnti, determinano i campi, e i campi determinano le forze sulle cariche.
:::

:::osservazione{#significato-equazioni-maxwell titolo="Significato delle quattro equazioni"}
- La legge di Gauss afferma che le cariche sono le sorgenti del campo elettrico, e che il flusso uscente da una superficie chiusa dipende solo dalla carica contenuta; si rimanda all'argomento sul flusso del campo elettrico e la legge di Gauss.
- La legge di Gauss per il magnetismo afferma che il flusso del campo magnetico attraverso ogni superficie chiusa è nullo, quindi non esistono cariche magnetiche isolate e le linee del campo magnetico non hanno né inizio né fine.
- La legge di Faraday-Neumann-Lenz afferma che un campo magnetico variabile genera un campo elettrico con circuitazione diversa da zero, quindi *non* conservativo; si rimanda all'argomento sull'induzione elettromagnetica.
- La legge di Ampère-Maxwell afferma che il campo magnetico è generato dalle correnti e dai campi elettrici variabili.

In elettrostatica e in magnetostatica le derivate rispetto al tempo sono nulle, e le equazioni si separano in due coppie indipendenti, una per $\vec{E}$ e una per $\vec{B}$. Quando i campi variano nel tempo, la terza e la quarta equazione legano invece $\vec{E}$ e $\vec{B}$ tra loro.
:::

:::osservazione{#maxwell-nel-vuoto titolo="Equazioni di Maxwell lontano da cariche e correnti"}
In una regione in cui non ci sono cariche né correnti si ha $Q_{\text{int}} = 0$ e $i_{\text{conc}} = 0$, e le equazioni diventano
$$
\begin{cases}
\displaystyle\oint_S \vec{E} \cdot \hat{n}\, dA = 0 \\[14pt]
\displaystyle\oint_S \vec{B} \cdot \hat{n}\, dA = 0 \\[14pt]
\displaystyle\oint_\gamma \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \\[14pt]
\displaystyle\oint_\gamma \vec{B} \cdot d\vec{l} = \mu_0 \varepsilon_0 \frac{d\Phi_E}{dt}
\end{cases}
$$
Un campo magnetico variabile genera un campo elettrico, e un campo elettrico variabile genera un campo magnetico. I due campi possono quindi sostenersi a vicenda anche lontano dalle cariche che li hanno prodotti, e propagarsi nello spazio come **onde elettromagnetiche**. Le equazioni sono quasi simmetriche rispetto allo scambio di $\vec{E}$ e $\vec{B}$; la differenza di segno tra la terza e la quarta è quella che produce la propagazione, come mostra l'equazione delle onde.
:::

## Forma locale delle equazioni di Maxwell

:::richiamo{titolo="Teoremi della divergenza e di Stokes"}
Sia $\vec{F}$ un campo vettoriale di classe $C^1$. Per una regione $V$ delimitata da una superficie chiusa $S$ con normale uscente vale $\displaystyle\oint_S \vec{F} \cdot \hat{n}\, dA = \iiint_V \nabla \cdot \vec{F}\, dV$, e per una superficie orientata $\Sigma$ con bordo $\gamma$ orientato con la regola della mano destra vale $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{l} = \iint_\Sigma \left( \nabla \times \vec{F} \right) \cdot \hat{n}\, dA$. Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

::::teorema{#forma-locale-maxwell titolo="Equazioni di Maxwell in forma locale"}
Si supponga che i campi siano di classe $C^1$ e che le cariche e le correnti siano descritte da una densità volumica di carica $\rho$ e da una densità di corrente $\vec{J}$ continue. Allora le equazioni di Maxwell in forma integrale equivalgono alle equazioni
$$
\begin{cases}
\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0} \\[10pt]
\nabla \cdot \vec{B} = 0 \\[10pt]
\nabla \times \vec{E} = -\dfrac{\partial \vec{B}}{\partial t} \\[10pt]
\nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \varepsilon_0 \dfrac{\partial \vec{E}}{\partial t}
\end{cases}
$$
in ogni punto e in ogni istante. La forma locale lega i campi in un punto alle cariche e alle correnti nello stesso punto, ed è il punto di partenza dei corsi successivi di elettromagnetismo. Il termine $\varepsilon_0 \dfrac{\partial \vec{E}}{\partial t}$ è la **densità di corrente di spostamento**, che integrata su una superficie fissa dà la corrente di spostamento.

:::dimostrazione
Si dimostra che la legge di Gauss implica la prima equazione. Sia $V$ una regione qualsiasi con bordo $S$. La carica contenuta è $Q_{\text{int}} = \displaystyle\iiint_V \rho\, dV$, e per il teorema della divergenza la legge di Gauss diventa
$$
\iiint_V \left( \nabla \cdot \vec{E} - \frac{\rho}{\varepsilon_0} \right) dV = 0 .
$$
La funzione integranda è continua. Se fosse positiva in un punto, per la permanenza del segno lo sarebbe in una piccola sfera attorno a quel punto, e l'integrale su quella sfera sarebbe positivo; lo stesso vale se fosse negativa. Poiché l'integrale è nullo su *ogni* regione, l'integranda è nulla ovunque, cioè $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$. La seconda equazione segue nello stesso modo.

Per la terza si applica il teorema di Stokes alla legge di Faraday-Neumann-Lenz su una superficie fissa $\Sigma$; poiché $\Sigma$ non dipende dal tempo, la derivata del flusso è il flusso della derivata, e
$$
\iint_\Sigma \left( \nabla \times \vec{E} + \frac{\partial \vec{B}}{\partial t} \right) \cdot \hat{n}\, dA = 0
$$
per ogni $\Sigma$. Scegliendo come $\Sigma$ un piccolo disco centrato in un punto e perpendicolare al vettore integrando in quel punto, lo stesso ragionamento mostra che il vettore integrando è nullo. La quarta si ricava allo stesso modo, scrivendo $i_{\text{conc}} = \displaystyle\iint_\Sigma \vec{J} \cdot \hat{n}\, dA$. Le implicazioni inverse si ottengono integrando le equazioni locali e applicando gli stessi teoremi.
:::
::::

:::osservazione{#conservazione-carica-maxwell titolo="Conservazione della carica"}
Per campi di classe $C^2$ la divergenza di un rotore è nulla, quindi calcolando la divergenza dei due membri della quarta equazione in forma locale si ottiene $0 = \mu_0 \nabla \cdot \vec{J} + \mu_0 \varepsilon_0 \dfrac{\partial}{\partial t} \left( \nabla \cdot \vec{E} \right)$. Sostituendo $\nabla \cdot \vec{E} = \dfrac{\rho}{\varepsilon_0}$ dalla prima equazione,
$$
\nabla \cdot \vec{J} + \frac{\partial \rho}{\partial t} = 0 ,
$$
che è l'**equazione di continuità**: integrata su una regione fissa, dice che la carica che esce dalla regione nell'unità di tempo è uguale alla diminuzione della carica contenuta. Senza il termine di Maxwell lo stesso calcolo darebbe $\nabla \cdot \vec{J} = 0$, relazione falsa dove la carica si accumula, come sulle armature di un condensatore in carica. La corrente di spostamento rende quindi le equazioni di Maxwell coerenti con la conservazione della carica.
:::

## Equazione delle onde e velocità della luce

:::definizione{#onda-piana titolo="Onda piana"}
Un'onda elettromagnetica si dice **piana** se, in ogni istante, i campi sono uguali in tutti i punti di ciascun piano perpendicolare a una direzione fissata, detta direzione di propagazione. Con l'asse $x$ orientato lungo la direzione di propagazione si considera il caso
$$
\vec{E} = E(x,t)\,\hat{\jmath} , \qquad \vec{B} = B(x,t)\,\hat{k} ,
$$
in cui il campo elettrico è diretto lungo $y$ e il campo magnetico lungo $z$. Dalle equazioni di Maxwell nel vuoto segue che le componenti dei campi lungo la direzione di propagazione sono costanti, e in un'onda si possono porre uguali a zero; per questo le onde elettromagnetiche si dicono **trasversali**. L'onda piana è un modello. L'onda emessa da una sorgente piccola ha fronti sferici, e lontano dalla sorgente, in una regione piccola rispetto alla distanza, quei fronti sono con buona approssimazione piani.
:::

:::richiamo{titolo="Teorema di Schwarz"}
Se una funzione $f(x,t)$ ha derivate parziali seconde miste continue, allora $\dfrac{\partial^2 f}{\partial x\, \partial t} = \dfrac{\partial^2 f}{\partial t\, \partial x}$. Si rimanda all'argomento sul calcolo differenziale in più variabili di Analisi 2.
:::

::::teorema{#equazione-delle-onde titolo="Equazione delle onde"}
Si consideri un'onda piana nel vuoto, in una regione senza cariche né correnti, con $\vec{E} = E(x,t)\,\hat{\jmath}$ e $\vec{B} = B(x,t)\,\hat{k}$ di classe $C^2$. Allora
$$
\frac{\partial E}{\partial x} = -\frac{\partial B}{\partial t} , \qquad \frac{\partial B}{\partial x} = -\mu_0 \varepsilon_0 \frac{\partial E}{\partial t} ,
$$
e ciascuno dei due campi soddisfa l'**equazione delle onde**
$$
\frac{\partial^2 E}{\partial x^2} = \mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2} , \qquad \frac{\partial^2 B}{\partial x^2} = \mu_0 \varepsilon_0 \frac{\partial^2 B}{\partial t^2} .
$$
Le prime due relazioni legano la variazione nello spazio di ciascun campo alla variazione nel tempo dell'altro, e servono a ricavare $B$ quando è noto $E$. L'equazione delle onde contiene la sola costante $\mu_0 \varepsilon_0$, che si misura in $\mathrm{s^2/m^2}$ ed è quindi l'inverso del quadrato di una velocità; il significato di questa velocità si ricava dalle soluzioni dell'equazione.

::grafico{assi=0 uguale=1 linee="2,0 4.4,0 4.4,3 2,3 2,0" vettori="2,0.7,2,2.1,E(x);4.4,0.5,4.4,2.7,E(x+dx);3.6,3.35,3.0,3.35" etichette="3.0,1.4,⊙ B;3.0,-0.45,dx;1.15,1.4,h" riferimento="-0.6,-0.4,0,1.1,x,y" xmin=-1 xmax=6.6 ymin=-1 ymax=3.9 titolo="Rettangolo di lati $dx$ e $h$ nel piano $xy$, percorso in verso antiorario: la circuitazione di $\vec{E}$ è $\left[ E(x+dx) - E(x) \right] h$, e il campo $\vec{B}$, perpendicolare al foglio, ne attraversa la superficie"}

:::dimostrazione
Si applica la legge di Faraday-Neumann-Lenz al rettangolo del piano $xy$ con i lati paralleli agli assi, di lati $dx$ e $h$, con il lato sinistro nel punto di ascissa $x$, percorso in verso antiorario visto dalla parte positiva dell'asse $z$, così che la normale è $\hat{k}$. Sui lati paralleli all'asse $x$ il campo elettrico, diretto lungo $y$, è perpendicolare al percorso e non contribuisce alla circuitazione. Sul lato di ascissa $x + dx$, percorso verso l'alto, il contributo è $E(x+dx,t)\,h$; sul lato di ascissa $x$, percorso verso il basso, è $-E(x,t)\,h$. Al primo ordine in $dx$ si ha $E(x+dx,t) - E(x,t) = \dfrac{\partial E}{\partial x}\, dx$, e il flusso del campo magnetico attraverso il rettangolo è $B\, h\, dx$; quindi
$$
\frac{\partial E}{\partial x}\, h\, dx = -\frac{\partial B}{\partial t}\, h\, dx
\quad\Longrightarrow\quad
\frac{\partial E}{\partial x} = -\frac{\partial B}{\partial t} .
$$
Si applica poi la legge di Ampère-Maxwell, senza correnti di conduzione, al rettangolo del piano $xz$ di lati $dx$ e $h$, orientato con la normale $\hat{\jmath}$. Con questa orientazione il lato di ascissa $x$ è percorso nel verso positivo dell'asse $z$ e quello di ascissa $x + dx$ nel verso negativo, quindi la circuitazione di $\vec{B}$ è $\left[ B(x,t) - B(x+dx,t) \right] h = -\dfrac{\partial B}{\partial x}\, h\, dx$, mentre il flusso del campo elettrico è $E\, h\, dx$. Perciò
$$
-\frac{\partial B}{\partial x}\, h\, dx = \mu_0 \varepsilon_0 \frac{\partial E}{\partial t}\, h\, dx
\quad\Longrightarrow\quad
\frac{\partial B}{\partial x} = -\mu_0 \varepsilon_0 \frac{\partial E}{\partial t} .
$$
Derivando la prima relazione rispetto a $x$ e la seconda rispetto a $t$, e scambiando l'ordine di derivazione per il **teorema di Schwarz**, si ottiene
$$
\begin{aligned}
\frac{\partial^2 E}{\partial x^2} &= -\frac{\partial^2 B}{\partial x\, \partial t} \\[6pt]
&= -\frac{\partial}{\partial t} \left( \frac{\partial B}{\partial x} \right) \\[6pt]
&= \mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2} .
\end{aligned}
$$
L'equazione per $B$ si ottiene nello stesso modo, derivando la prima relazione rispetto a $t$ e la seconda rispetto a $x$.
:::
::::

::::teorema{#soluzioni-equazione-onde titolo="Onde progressive"}
Sia $v = \dfrac{1}{\sqrt{\mu_0 \varepsilon_0}}$ e sia $f$ una funzione di una variabile di classe $C^2$. Allora
$$
E(x,t) = f(x - vt)
$$
è una soluzione dell'equazione delle onde, e lo stesso vale per $E(x,t) = g(x + vt)$ con $g$ di classe $C^2$. Nell'istante $t$ il grafico di $f(x - vt)$ è il grafico di $f$ traslato di $vt$ nel verso positivo dell'asse $x$, quindi il profilo del campo si sposta senza deformarsi con velocità $v$; la funzione $g(x + vt)$ descrive un profilo che si sposta nel verso negativo. Si dimostra inoltre che ogni soluzione dell'equazione delle onde è la somma $f(x - vt) + g(x + vt)$ di un'onda che si propaga verso le $x$ crescenti e di una che si propaga verso le $x$ decrescenti (formula di d'Alembert).

::grafico{f="exp(-(x-2)^2);exp(-(x-6.5)^2)" vettori="2,1.18,6.5,1.18,v t₁" xmin=-0.5 xmax=9.5 ymin=-0.3 ymax=1.5 nomi="x,E" legenda="t = 0;t = t_1" titolo="Un impulso $E(x,t) = f(x - vt)$ negli istanti $0$ e $t_1$: il profilo è lo stesso, traslato della distanza $v t_1$ nel verso di propagazione"}

:::dimostrazione
Posto $s = x - vt$, per la regola di derivazione della funzione composta $\dfrac{\partial E}{\partial x} = f'(s)$ e $\dfrac{\partial E}{\partial t} = -v\, f'(s)$; derivando ancora si ottiene $\dfrac{\partial^2 E}{\partial x^2} = f''(s)$ e $\dfrac{\partial^2 E}{\partial t^2} = v^2 f''(s)$. Poiché $\mu_0 \varepsilon_0 v^2 = 1$,
$$
\mu_0 \varepsilon_0 \frac{\partial^2 E}{\partial t^2} = \mu_0 \varepsilon_0\, v^2 f''(s) = f''(s) = \frac{\partial^2 E}{\partial x^2} .
$$
Per $g(x + vt)$ il calcolo è lo stesso, con $v$ al posto di $-v$ nella derivata rispetto al tempo.
:::
::::

:::teorema{#velocita-della-luce titolo="Velocità delle onde elettromagnetiche"}
Le onde elettromagnetiche si propagano nel vuoto con velocità
$$
c = \frac{1}{\sqrt{\mu_0 \varepsilon_0}} = \frac{1}{\sqrt{4\pi \cdot 10^{-7} \cdot 8{,}85 \cdot 10^{-12}}}\,\mathrm{m/s} \approx 3{,}00 \cdot 10^{8}\,\mathrm{m/s} .
$$
Il risultato segue dal teorema sulle onde progressive, e il valore calcolato dalle costanti dell'elettricità e del magnetismo coincide con la velocità della luce misurata; da questa coincidenza Maxwell concluse che la luce è un'onda elettromagnetica. La velocità non dipende né dalla frequenza né dall'ampiezza dell'onda. Per esempio la luce del Sole, che dista $1{,}50 \cdot 10^{11}\,\mathrm{m}$ dalla Terra, arriva dopo $\dfrac{1{,}50 \cdot 10^{11}}{3{,}00 \cdot 10^{8}}\,\mathrm{s} = 500\,\mathrm{s}$, cioè circa $8{,}3$ minuti.
:::

:::osservazione{#sorgenti-onde titolo="Come si producono le onde elettromagnetiche"}
Le onde elettromagnetiche sono prodotte da cariche **accelerate**. In un'antenna le cariche oscillano lungo un conduttore con la frequenza $f$ della corrente alternata che lo percorre, e l'antenna emette un'onda della stessa frequenza, che a grande distanza è con buona approssimazione piana. La corrente nell'antenna è prodotta da un circuito oscillante, per il quale si rimanda all'argomento sulle oscillazioni elettriche e i circuiti in corrente alternata. La luce visibile è emessa invece dagli atomi e dalle molecole, e la descrizione di questa emissione richiede la fisica quantistica.
:::

## Onde piane armoniche

:::definizione{#onda-armonica titolo="Onda armonica"}
Un'onda piana che si propaga nel verso positivo dell'asse $x$ si dice **armonica** se il campo elettrico ha la forma
$$
E(x,t) = E_0 \sin(kx - \omega t) ,
$$
dove $E_0 > 0$ è l'ampiezza, $k > 0$ il numero d'onda e $\omega > 0$ la pulsazione. In un punto fissato il campo oscilla con periodo $T = \dfrac{2\pi}{\omega}$ e frequenza $f = \dfrac{1}{T}$; in un istante fissato il campo è periodico nello spazio con periodo $\lambda = \dfrac{2\pi}{k}$, detto **lunghezza d'onda**. Poiché $E_0 \sin(kx - \omega t) = E_0 \sin\left( k \left( x - \dfrac{\omega}{k}\, t \right) \right)$, l'onda è progressiva con velocità $\dfrac{\omega}{k}$, che nel vuoto è uguale a $c$; perciò
$$
c = \frac{\omega}{k} = \lambda f ,
$$
cioè in un periodo una cresta dell'onda avanza di una lunghezza d'onda. Il campo $E_0 \sin(kx + \omega t)$ descrive un'onda armonica che si propaga nel verso negativo dell'asse $x$. Per esempio, un'onda radio di frequenza $f = 100\,\mathrm{MHz}$ ha $\lambda = \dfrac{3{,}00 \cdot 10^{8}}{1{,}00 \cdot 10^{8}}\,\mathrm{m} = 3{,}00\,\mathrm{m}$, $\omega = 2\pi f \approx 6{,}28 \cdot 10^{8}\,\mathrm{rad/s}$ e $k = \dfrac{2\pi}{\lambda} \approx 2{,}09\,\mathrm{rad/m}$.

::grafico{f="sin(pi*x/2)" segmenti="1,1.25,5,1.25;1,0,1,1;5,0,5,1" punti="1,1,pieno;5,1,pieno" etichette="2.85,1.38,λ;6.3,-1.25,E₀ sin(kx)" xmin=-0.5 xmax=9.2 ymin=-1.5 ymax=1.6 nomi="x,E" titolo="Campo elettrico di un'onda armonica nell'istante $t = 0$, in unità di $E_0$: due creste consecutive distano una lunghezza d'onda $\lambda$"}

:::

::::teorema{#relazione-e-cb titolo="Relazione tra campo elettrico e campo magnetico"}
In un'onda piana progressiva nel vuoto che si propaga nel verso positivo dell'asse $x$, con campo elettrico $\vec{E} = E(x,t)\,\hat{\jmath}$, il campo magnetico è $\vec{B} = B(x,t)\,\hat{k}$ con
$$
B(x,t) = \frac{E(x,t)}{c} .
$$
In ogni punto e in ogni istante i moduli soddisfano quindi $E = cB$. I due campi oscillano in fase, sono perpendicolari tra loro e alla direzione di propagazione, e il prodotto vettoriale $\vec{E} \times \vec{B}$ ha il verso di propagazione dell'onda. Per un'onda che si propaga nel verso negativo dell'asse $x$ vale invece $B = -\dfrac{E}{c}$, e $\vec{E} \times \vec{B}$ è diretto come $-\hat{\imath}$. La relazione dà il campo magnetico di un'onda noto il campo elettrico; per esempio, a $E_0 = 300\,\mathrm{V/m}$ corrisponde $B_0 = \dfrac{300}{3{,}00 \cdot 10^{8}}\,\mathrm{T} = 1{,}00\,\mu\mathrm{T}$. Su una carica con velocità $v$ le forze magnetica ed elettrica dell'onda stanno al più nel rapporto $\dfrac{vB}{E} = \dfrac{v}{c}$, perciò per cariche lente l'effetto del campo magnetico è trascurabile.

::grafico{assi=0 uguale=1 linee="0,0 10.2,0;0,0 0,2.3;0,0 -1.2,-1.2" curve="t,1.6*sin(t),0,9.42;t-0.75*sin(t),-0.75*sin(t),0,9.42" vettori="7.854,0,7.854,1.6,E;8.9,-1.4,10.3,-1.4,c;7.854,0,7.104,-0.75,B" etichette="10.35,-0.1,x;0.12,2.4,y;-1.55,-1.45,z" xmin=-1.8 xmax=10.8 ymin=-2 ymax=2.6 legenda=0 titolo="Onda piana armonica che si propaga lungo l'asse $x$: il campo elettrico oscilla lungo $y$, il campo magnetico lungo $z$, in fase, e $\vec{E} \times \vec{B}$ ha il verso di propagazione"}

:::dimostrazione
Sia $E(x,t) = f(x - ct)$ e si cerchi il campo magnetico nella forma $B(x,t) = g(x - ct)$ di un'onda che si propaga nello stesso verso. La prima relazione dell'equazione delle onde, $\dfrac{\partial E}{\partial x} = -\dfrac{\partial B}{\partial t}$, diventa
$$
f'(x - ct) = c\, g'(x - ct) ,
$$
quindi $g = \dfrac{f}{c}$ a meno di una costante additiva. La costante rappresenta un campo magnetico statico e uniforme sovrapposto all'onda, che non fa parte dell'onda e si pone uguale a zero; perciò $B = \dfrac{E}{c}$. Infine $\vec{E} \times \vec{B} = E B \left( \hat{\jmath} \times \hat{k} \right) = \dfrac{E^2}{c}\,\hat{\imath}$, che ha il verso di $\hat{\imath}$ in ogni punto in cui $E \neq 0$. Per l'onda che si propaga nel verso negativo, con $E = f(x + ct)$ e $B = g(x + ct)$, la stessa relazione dà $f' = -c\, g'$, cioè $B = -\dfrac{E}{c}$.
:::
::::

:::osservazione{#sovrapposizione-onde titolo="Sovrapposizione di onde"}
L'equazione delle onde è lineare, quindi la somma di due soluzioni è ancora una soluzione. Due onde elettromagnetiche che si incontrano si sovrappongono, il campo risultante è la somma vettoriale dei campi, e dopo l'incontro ciascuna onda prosegue invariata. Sulla sovrapposizione si basano l'interferenza e la diffrazione, per le quali si rimanda all'argomento sull'ottica geometrica e ondulatoria. Per esempio, la somma di due onde armoniche con la stessa ampiezza che si propagano in versi opposti è
$$
E_0 \sin(kx - \omega t) + E_0 \sin(kx + \omega t) = 2 E_0 \sin(kx) \cos(\omega t) ,
$$
un'**onda stazionaria**, in cui il campo elettrico è nullo in ogni istante nei punti con $\sin(kx) = 0$, distanti tra loro $\dfrac{\lambda}{2}$.
:::

## Energia e vettore di Poynting

:::richiamo{titolo="Densità di energia del campo elettrico e del campo magnetico"}
Nel vuoto il campo elettrico ha densità di energia $u_E = \dfrac{1}{2} \varepsilon_0 E^2$ e il campo magnetico ha densità di energia $u_B = \dfrac{B^2}{2\mu_0}$. Si rimanda agli argomenti su conduttori, condensatori e dielettrici e sull'induzione elettromagnetica.
:::

::::teorema{#densita-energia-onda titolo="Densità di energia di un'onda"}
In un'onda piana progressiva nel vuoto le densità di energia elettrica e magnetica sono uguali in ogni punto e in ogni istante, e la densità di energia totale è
$$
u = u_E + u_B = \varepsilon_0 E^2 = \frac{B^2}{\mu_0} .
$$
Per un'onda armonica la densità $u = \varepsilon_0 E_0^2 \sin^2(kx - \omega t)$ oscilla tra $0$ e $\varepsilon_0 E_0^2$, e il suo valore medio nel tempo è $\langle u \rangle = \dfrac{1}{2} \varepsilon_0 E_0^2$, perché il valore medio di $\sin^2$ su un periodo è $\dfrac{1}{2}$. Con $E_0 = 100\,\mathrm{V/m}$ si ha $\langle u \rangle = \dfrac{1}{2} \cdot 8{,}85 \cdot 10^{-12} \cdot 100^2\,\mathrm{J/m^3} \approx 4{,}4 \cdot 10^{-8}\,\mathrm{J/m^3}$.

:::dimostrazione
Per la relazione tra i campi $B = \dfrac{E}{c}$, e per la velocità delle onde elettromagnetiche $c^2 = \dfrac{1}{\mu_0 \varepsilon_0}$, quindi
$$
u_B = \frac{B^2}{2\mu_0} = \frac{E^2}{2\mu_0 c^2} = \frac{\mu_0 \varepsilon_0 E^2}{2\mu_0} = \frac{1}{2} \varepsilon_0 E^2 = u_E .
$$
Sommando si ottiene $u = \varepsilon_0 E^2$, e sostituendo $E = cB$ si ottiene $u = \varepsilon_0 c^2 B^2 = \dfrac{B^2}{\mu_0}$.
:::
::::

:::definizione{#vettore-di-poynting titolo="Vettore di Poynting"}
Il **vettore di Poynting** è
$$
\vec{S} = \frac{1}{\mu_0}\, \vec{E} \times \vec{B} ,
$$
e si misura in $\mathrm{W/m^2}$, perché $\dfrac{\mathrm{V/m} \cdot \mathrm{T}}{\mathrm{T \cdot m/A}} = \mathrm{V \cdot A/m^2}$. In un'onda piana progressiva $\vec{S}$ è diretto nel verso di propagazione e, poiché $\vec{E}$ e $\vec{B}$ sono perpendicolari e $B = \dfrac{E}{c}$, ha modulo
$$
S = \frac{EB}{\mu_0} = \frac{E^2}{\mu_0 c} .
$$
Il modulo di $\vec{S}$ è la potenza che attraversa una superficie di area unitaria perpendicolare alla direzione di propagazione, come afferma il teorema sul flusso di energia di un'onda piana; il vettore di Poynting indica quindi dove va l'energia e quanta ne passa. In un punto in cui $E = 300\,\mathrm{V/m}$ e $B = 1{,}00\,\mu\mathrm{T}$ si ha $S = \dfrac{300 \cdot 1{,}00 \cdot 10^{-6}}{4\pi \cdot 10^{-7}}\,\mathrm{W/m^2} \approx 239\,\mathrm{W/m^2}$.
:::

::::teorema{#poynting-e-densita titolo="Flusso di energia di un'onda piana"}
In un'onda piana progressiva nel vuoto, l'energia che nel tempo $dt$ attraversa una superficie di area $A$ perpendicolare alla direzione di propagazione è $dU = S A\, dt$, con
$$
S = u\, c .
$$
L'energia del campo viaggia quindi con l'onda alla velocità $c$, e il modulo del vettore di Poynting è la potenza per unità di area trasportata dall'onda.

::grafico{assi=0 uguale=1 linee="2,0 5,0;2,2 5,2" curve="5+0.35*cos(t),1+sin(t),0,6.29;2+0.35*cos(t),1+sin(t),0,6.29" vettori="5.4,1,7.2,1,S" segmenti="2,-0.45,5,-0.45" etichette="3.15,-0.85,c dt;4.95,0.85,A" xmin=0.8 xmax=7.8 ymin=-1.2 ymax=2.6 legenda=0 titolo="Nel tempo $dt$ attraversa la superficie $A$ l'energia contenuta nel cilindro di base $A$ e altezza $c\,dt$, cioè $u A c\,dt$"}

:::dimostrazione
L'onda avanza della distanza $c\, dt$ nel tempo $dt$, quindi attraversa la superficie l'energia contenuta nel cilindro di base $A$ e altezza $c\, dt$ che la precede. Se $dt$ è abbastanza piccolo da poter considerare costante la densità di energia nel cilindro, $dU = u A c\, dt$. Per la densità di energia di un'onda $u c = \varepsilon_0 c E^2$, e poiché $\varepsilon_0 c = \dfrac{\varepsilon_0 \mu_0 c^2}{\mu_0 c} = \dfrac{1}{\mu_0 c}$ si ottiene
$$
u\, c = \frac{E^2}{\mu_0 c} = \frac{E B}{\mu_0} = S .
$$
:::
::::

:::definizione{#intensita titolo="Intensità di un'onda"}
L'**intensità** $I$ di un'onda è il valore medio nel tempo del modulo del vettore di Poynting, cioè la potenza media per unità di area trasportata dall'onda, e si misura in $\mathrm{W/m^2}$. Per un'onda armonica di ampiezza $E_0$, poiché il valore medio di $\sin^2$ su un periodo è $\dfrac{1}{2}$,
$$
I = \langle S \rangle = \frac{E_0^2}{2\mu_0 c} = \frac{1}{2}\, c\, \varepsilon_0 E_0^2 = \frac{E_0 B_0}{2\mu_0} = c \langle u \rangle .
$$
L'intensità è proporzionale al quadrato dell'ampiezza, quindi raddoppiando l'ampiezza del campo elettrico l'intensità quadruplica. Dalla formula si ricava l'ampiezza nota l'intensità, $E_0 = \sqrt{\dfrac{2I}{c\, \varepsilon_0}}$. La radiazione solare, fuori dall'atmosfera terrestre, ha intensità $I \approx 1{,}36\,\mathrm{kW/m^2}$; un'onda armonica con la stessa intensità ha $E_0 = \sqrt{\dfrac{2 \cdot 1360}{3{,}00 \cdot 10^{8} \cdot 8{,}85 \cdot 10^{-12}}}\,\mathrm{V/m} \approx 1{,}0 \cdot 10^{3}\,\mathrm{V/m}$ e $B_0 = \dfrac{E_0}{c} \approx 3{,}4\,\mu\mathrm{T}$.
:::

:::teorema{#sorgente-isotropa titolo="Intensità di una sorgente isotropa"}
Una sorgente puntiforme che emette la potenza media $P$ in modo uniforme in tutte le direzioni, detta sorgente **isotropa**, in un mezzo che non assorbe energia produce alla distanza $r$ l'intensità
$$
I(r) = \frac{P}{4\pi r^2} .
$$
La formula segue dalla conservazione dell'energia. In regime stazionario la potenza media che attraversa ogni sfera centrata nella sorgente è $P$, e si distribuisce uniformemente sull'area $4\pi r^2$ della sfera. L'intensità diminuisce come l'inverso del quadrato della distanza e l'ampiezza del campo, proporzionale a $\sqrt{I}$, come l'inverso della distanza. Una lampada che emette la potenza luminosa $P = 10\,\mathrm{W}$ produce a $r = 2{,}0\,\mathrm{m}$ l'intensità $I = \dfrac{10}{4\pi \cdot 2{,}0^2}\,\mathrm{W/m^2} \approx 0{,}20\,\mathrm{W/m^2}$.
:::

## Quantità di moto e pressione di radiazione

:::teorema{#quantita-di-moto-radiazione titolo="Quantità di moto di un'onda elettromagnetica"}
Un'onda elettromagnetica che trasporta nel vuoto l'energia $U$ trasporta anche una quantità di moto di modulo
$$
p = \frac{U}{c} ,
$$
diretta nel verso di propagazione. È una conseguenza delle equazioni di Maxwell e della forza di Lorentz, che qui si assume senza dimostrazione, ed è confermata dalla misura della forza che la luce esercita su una superficie. Il fattore $\dfrac{1}{c}$ è molto piccolo, quindi la quantità di moto della radiazione è piccola anche per energie grandi; un impulso laser di $1{,}0\,\mathrm{J}$ trasporta $p = \dfrac{1{,}0}{3{,}00 \cdot 10^{8}}\,\mathrm{kg \cdot m/s} \approx 3{,}3 \cdot 10^{-9}\,\mathrm{kg \cdot m/s}$.
:::

:::richiamo{titolo="Teorema dell'impulso"}
Se nell'intervallo di tempo $\Delta t$ la quantità di moto di un corpo varia di $\Delta\vec{p}$, la forza media che agisce sul corpo è $\vec{F}_m = \dfrac{\Delta \vec{p}}{\Delta t}$. Si rimanda all'argomento sui sistemi di punti, la quantità di moto e gli urti.
:::

::::teorema{#pressione-di-radiazione titolo="Pressione di radiazione"}
Si consideri un'onda piana di intensità $I$ che incide perpendicolarmente su una superficie piana di area $A$. La forza media esercitata dall'onda sulla superficie è perpendicolare alla superficie, ha il verso di propagazione dell'onda, e la **pressione di radiazione** $p_{\text{rad}} = \dfrac{F}{A}$ vale

- $p_{\text{rad}} = \dfrac{I}{c}$ se la superficie assorbe tutta la radiazione;
- $p_{\text{rad}} = \dfrac{2I}{c}$ se la superficie riflette tutta la radiazione.

Con $I = 1{,}36\,\mathrm{kW/m^2}$ e una superficie assorbente si ha $p_{\text{rad}} = \dfrac{1360}{3{,}00 \cdot 10^{8}}\,\mathrm{Pa} \approx 4{,}5 \cdot 10^{-6}\,\mathrm{Pa}$, dell'ordine di $10^{-11}$ volte la pressione atmosferica. La pressione di radiazione è perciò trascurabile sugli oggetti di uso comune, e diventa importante per corpi molto leggeri con una grande superficie, come le vele solari, e per particelle di polvere molto piccole. Una vela perfettamente riflettente di $100\,\mathrm{m^2}$, perpendicolare alla luce solare alla distanza della Terra, riceve la forza $F = \dfrac{2 \cdot 1360 \cdot 100}{3{,}00 \cdot 10^{8}}\,\mathrm{N} \approx 9{,}1 \cdot 10^{-4}\,\mathrm{N}$.

:::dimostrazione
Nel tempo $\Delta t$ arriva sulla superficie l'energia $U = I A\, \Delta t$, che per il teorema sulla quantità di moto di un'onda elettromagnetica trasporta la quantità di moto $\dfrac{U}{c} = \dfrac{I A\, \Delta t}{c}$, perpendicolare alla superficie. Se la superficie assorbe la radiazione, questa quantità di moto passa alla superficie. Se la riflette, l'onda riflessa ha quantità di moto opposta a quella incidente; quindi la quantità di moto della radiazione varia di $\dfrac{2U}{c}$ in modulo, e la superficie riceve una quantità di moto uguale e opposta. Per il **teorema dell'impulso** la forza media è la quantità di moto ricevuta divisa per $\Delta t$, perciò
$$
F = \frac{I A}{c} \quad \text{(assorbimento)} , \qquad F = \frac{2 I A}{c} \quad \text{(riflessione)} ,
$$
e dividendo per $A$ si ottengono le due pressioni.
:::
::::

## Spettro elettromagnetico

:::definizione{#spettro-elettromagnetico titolo="Spettro elettromagnetico"}
Le onde elettromagnetiche hanno tutte la stessa natura e nel vuoto la stessa velocità $c$, e si distinguono per la frequenza o, in modo equivalente, per la lunghezza d'onda $\lambda = \dfrac{c}{f}$. L'insieme di tutte le frequenze possibili si dice **spettro elettromagnetico**, e si divide in bande che prendono nomi diversi per il modo in cui le onde sono prodotte e rivelate. I confini tra le bande sono convenzionali e indicativi:

- onde radio, con $\lambda$ maggiore di circa $1\,\mathrm{m}$, usate per le trasmissioni radio e televisive;
- microonde, con $\lambda$ da circa $1\,\mathrm{mm}$ a $1\,\mathrm{m}$, usate nei radar, nella telefonia mobile e nei forni a microonde;
- infrarosso, con $\lambda$ da circa $700\,\mathrm{nm}$ a $1\,\mathrm{mm}$, emesso in abbondanza dai corpi caldi;
- luce visibile, con $\lambda$ da circa $400\,\mathrm{nm}$ (violetto) a $700\,\mathrm{nm}$ (rosso);
- ultravioletto, con $\lambda$ da circa $10\,\mathrm{nm}$ a $400\,\mathrm{nm}$;
- raggi X, con $\lambda$ da circa $0{,}01\,\mathrm{nm}$ a $10\,\mathrm{nm}$;
- raggi gamma, con $\lambda$ minore di circa $0{,}01\,\mathrm{nm}$, emessi nei processi nucleari.

Le bande dei raggi X e dei raggi gamma si sovrappongono, e i due nomi indicano soprattutto l'origine della radiazione. L'occhio umano è sensibile a un intervallo molto stretto dello spettro. La luce gialla con $\lambda = 580\,\mathrm{nm}$ ha frequenza $f = \dfrac{3{,}00 \cdot 10^{8}}{5{,}80 \cdot 10^{-7}}\,\mathrm{Hz} \approx 5{,}17 \cdot 10^{14}\,\mathrm{Hz}$.

::grafico{assi=0 poligoni="-13,0 3,0 3,0.8 -13,0.8;-6.4,0 -6.15,0 -6.15,0.8 -6.4,0.8" segmenti="-11,0,-11,0.8;-8,0,-8,0.8;-6.4,0,-6.4,0.8;-6.15,0,-6.15,0.8;-3,0,-3,0.8;0,0,0,0.8" vettori="-6.27,2.0,-6.27,0.95" etichette="-12.3,0.3,γ;-9.75,0.3,X;-7.55,0.3,UV;-4.9,0.3,IR;-2.85,0.3,microonde;0.9,0.3,radio;-7.0,2.25,visibile;-12.35,-0.6,1 pm;-9.35,-0.6,1 nm;-6.35,-0.6,1 μm;-3.4,-0.6,1 mm;-0.2,-0.6,1 m;2.55,-0.6,1 km" xmin=-13.5 xmax=3.5 ymin=-1.1 ymax=2.7 uguale=1 titolo="Spettro elettromagnetico in scala logaritmica della lunghezza d'onda $\lambda$, che diminuisce verso sinistra mentre la frequenza $f = \dfrac{c}{\lambda}$ aumenta; la luce visibile occupa la stretta banda tra $400\,\mathrm{nm}$ e $700\,\mathrm{nm}$"}

:::

:::osservazione{#onde-nei-mezzi titolo="Onde elettromagnetiche nei mezzi materiali"}
In un mezzo isolante e omogeneo con costante dielettrica relativa $\varepsilon_r$ e permeabilità magnetica relativa $\mu_r$, lontano da cariche libere, le equazioni di Maxwell hanno la stessa forma con $\varepsilon_0 \varepsilon_r$ e $\mu_0 \mu_r$ al posto di $\varepsilon_0$ e $\mu_0$, e l'onda si propaga con velocità
$$
v = \frac{1}{\sqrt{\mu_0 \mu_r\, \varepsilon_0 \varepsilon_r}} = \frac{c}{\sqrt{\mu_r\, \varepsilon_r}} .
$$
Il rapporto $n = \dfrac{c}{v}$ è l'**indice di rifrazione** del mezzo, per il quale si rimanda all'argomento sull'ottica geometrica e ondulatoria. Nei mezzi trasparenti $\mu_r \approx 1$, e $\varepsilon_r$ va presa alla frequenza dell'onda, perché dipende dalla frequenza. Per esempio l'acqua ha $\varepsilon_r \approx 80$ in un campo statico, mentre per la luce visibile il suo indice di rifrazione è circa $1{,}33$, molto minore di $\sqrt{80} \approx 8{,}9$.
:::
