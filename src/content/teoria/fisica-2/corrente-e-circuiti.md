---
titolo: Corrente elettrica e circuiti in corrente continua
sommario: Che cosa sono l'intensità e la densità di corrente, come la legge di Ohm e la resistività legano corrente e tensione, quanta potenza dissipa un resistore, come si risolve un circuito con generatori reali, resistori in serie e in parallelo e leggi di Kirchhoff, e come si caricano e si scaricano i condensatori in un circuito RC.
---

## Corrente elettrica e densità di corrente

In tutto l'argomento i conduttori sono metallici e omogenei e i fili di collegamento hanno resistenza trascurabile. Le correnti sono stazionarie, salvo nel circuito RC, dove variano abbastanza lentamente da poter applicare in ogni istante le leggi del regime stazionario.

:::definizione{#corrente-elettrica titolo="Intensità di corrente"}
Un moto ordinato di cariche si dice **corrente elettrica**. Se attraverso una sezione di un conduttore passa la carica $\Delta q$ nell'intervallo di tempo $\Delta t$, l'intensità di corrente media è $\dfrac{\Delta q}{\Delta t}$; l'**intensità di corrente** istantanea è
$$
i(t) = \frac{dq}{dt} ,
$$
e quando non varia nel tempo si indica con $I$. Nel Sistema Internazionale si misura in ampere, $1\,\mathrm{A} = 1\,\mathrm{C/s}$. Il verso convenzionale della corrente è quello in cui si muovono le cariche positive; nei metalli i portatori di carica sono elettroni, che si muovono nel verso opposto.

Dalla definizione segue che la carica che attraversa la sezione tra gli istanti $t_1$ e $t_2$ è $q = \displaystyle\int_{t_1}^{t_2} i(t)\,dt$, cioè l'area sotto il grafico di $i(t)$. Una corrente costante di $3{,}0\,\mathrm{A}$ trasporta in un minuto la carica $3{,}0 \cdot 60\,\mathrm{C} = 180\,\mathrm{C}$, pari a quella di $\dfrac{180}{1{,}60 \cdot 10^{-19}} \approx 1{,}1 \cdot 10^{21}$ elettroni.
:::

:::richiamo{titolo="Flusso di un campo vettoriale"}
Il flusso di un campo vettoriale $\vec{J}$ attraverso una superficie $S$ orientata dalla normale $\hat{n}$ è l'integrale di superficie $\displaystyle\iint_S \vec{J} \cdot \hat{n}\,dA$. Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::definizione{#densita-di-corrente titolo="Densità di corrente"}
La **densità di corrente** $\vec{J}$ è il vettore che in ogni punto del conduttore ha la direzione e il verso del moto delle cariche positive e come modulo la corrente per unità di area attraverso una piccola superficie perpendicolare a quella direzione. L'intensità di corrente attraverso una sezione $S$ è il flusso di $\vec{J}$:
$$
I = \iint_S \vec{J} \cdot \hat{n}\,dA .
$$
Se $\vec{J}$ è uniforme e perpendicolare alla sezione di area $A$, il flusso si riduce a $I = J A$. L'unità di misura è $\mathrm{A/m^2}$. L'intensità di corrente descrive il conduttore nel suo insieme, la densità di corrente descrive il moto delle cariche punto per punto; per esempio, una corrente di $2{,}0\,\mathrm{A}$ in un filo di sezione $1{,}0\,\mathrm{mm^2}$ ha densità $J = \dfrac{2{,}0}{1{,}0 \cdot 10^{-6}}\,\mathrm{A/m^2} = 2{,}0 \cdot 10^{6}\,\mathrm{A/m^2}$.
:::

::::teorema{#velocita-di-deriva titolo="Densità di corrente e velocità di deriva"}
Si consideri un conduttore con $n$ portatori di carica per unità di volume, ciascuno con carica $q$, che si muovono con velocità media $\vec{v}_d$, detta **velocità di deriva**. Allora
$$
\vec{J} = n q\, \vec{v}_d .
$$
Nei metalli $q = -e$, quindi $\vec{J}$ e $\vec{v}_d$ hanno versi opposti, e in un filo di sezione $A$ si ha $v_d = \dfrac{I}{n e A}$. La velocità di deriva è molto piccola: in un filo di rame, con $n = 8{,}5 \cdot 10^{28}\,\mathrm{m^{-3}}$, sezione $1{,}0\,\mathrm{mm^2}$ e corrente $2{,}0\,\mathrm{A}$, vale
$$
v_d = \frac{2{,}0}{8{,}5 \cdot 10^{28} \cdot 1{,}60 \cdot 10^{-19} \cdot 1{,}0 \cdot 10^{-6}}\,\mathrm{m/s} \approx 1{,}5 \cdot 10^{-4}\,\mathrm{m/s} .
$$
Una lampada si accende comunque appena si chiude l'interruttore, perché il campo elettrico si stabilisce lungo tutto il filo in un tempo brevissimo e mette in moto quasi insieme gli elettroni di ogni tratto del circuito.

::grafico{assi=0 uguale=1 poligoni="3,-1 4.6,-1 4.6,1 3,1" linee="0,1 7,1;0,-1 7,-1;0.35,0 0.343,0.195 0.323,0.383 0.291,0.556 0.247,0.707 0.194,0.831 0.134,0.924 0.068,0.981 0,1 -0.068,0.981 -0.134,0.924 -0.194,0.831 -0.247,0.707 -0.291,0.556 -0.323,0.383 -0.343,0.195 -0.35,0 -0.343,-0.195 -0.323,-0.383 -0.291,-0.556 -0.247,-0.707 -0.194,-0.831 -0.134,-0.924 -0.068,-0.981 0,-1 0.068,-0.981 0.134,-0.924 0.194,-0.831 0.247,-0.707 0.291,-0.556 0.323,-0.383 0.343,-0.195 0.35,0;3.35,0 3.343,0.195 3.323,0.383 3.291,0.556 3.247,0.707 3.194,0.831 3.134,0.924 3.068,0.981 3,1 2.932,0.981 2.866,0.924 2.806,0.831 2.753,0.707 2.709,0.556 2.677,0.383 2.657,0.195 2.65,0 2.657,-0.195 2.677,-0.383 2.709,-0.556 2.753,-0.707 2.806,-0.831 2.866,-0.924 2.932,-0.981 3,-1 3.068,-0.981 3.134,-0.924 3.194,-0.831 3.247,-0.707 3.291,-0.556 3.323,-0.383 3.343,-0.195 3.35,0;4.95,0 4.943,0.195 4.923,0.383 4.891,0.556 4.847,0.707 4.794,0.831 4.734,0.924 4.668,0.981 4.6,1 4.532,0.981 4.466,0.924 4.406,0.831 4.353,0.707 4.309,0.556 4.277,0.383 4.257,0.195 4.25,0 4.257,-0.195 4.277,-0.383 4.309,-0.556 4.353,-0.707 4.406,-0.831 4.466,-0.924 4.532,-0.981 4.6,-1 4.668,-0.981 4.734,-0.924 4.794,-0.831 4.847,-0.707 4.891,-0.556 4.923,-0.383 4.943,-0.195 4.95,0" punti="0.9,0.5,pieno;1.6,-0.4,pieno;2.3,0.3,pieno;3.5,-0.5,pieno;3.8,0.45,pieno;4.2,-0.1,pieno;5.3,0.55,pieno;5.9,-0.45,pieno;6.5,0.2,pieno;1.2,-0.7,pieno;2.6,-0.6,pieno" vettori="5.2,-1.6,6.8,-1.6" segmenti="3,-1.25,3,-1.75;4.6,-1.25,4.6,-1.75;3,-1.5,4.6,-1.5" etichette="2.6,1.35,dA" xmin=-0.6 xmax=7.6 ymin=-2.4 ymax=1.8 titolo="Nel tempo $dt$ attraversano la sezione $dA$ i portatori contenuti nel cilindro colorato, lungo $v_d\,dt$; la freccia indica il verso della velocità di deriva $\vec{v}_d$"}

:::dimostrazione
Si consideri un elemento di superficie $dA$ perpendicolare a $\vec{v}_d$. Nel tempo $dt$ ogni portatore avanza di $v_d\,dt$, quindi attraversano $dA$ i portatori contenuti nel cilindro di base $dA$ e altezza $v_d\,dt$. Il cilindro ha volume $v_d\,dt\,dA$ e contiene $n\,v_d\,dt\,dA$ portatori, perciò la carica che attraversa $dA$ è $dq = n q\, v_d\,dt\,dA$. Dividendo per $dt$ e per $dA$ si ottiene il modulo $|\vec{J}| = n\,|q|\,v_d$. Se $q > 0$ la corrente ha il verso di $\vec{v}_d$, se $q < 0$ ha il verso opposto; in entrambi i casi $\vec{J} = n q\, \vec{v}_d$.
:::
::::

:::osservazione{#corrente-stazionaria titolo="Corrente stazionaria e conservazione della carica"}
In regime stazionario la distribuzione delle cariche non cambia nel tempo, quindi in ogni regione del conduttore entra tanta carica quanta ne esce. Per la **conservazione della carica**, il flusso di $\vec{J}$ attraverso ogni superficie chiusa è nullo:
$$
\oiint \vec{J} \cdot \hat{n}\,dA = 0 .
$$
Ne segue che in un filo senza diramazioni la corrente è la stessa in ogni sezione, anche se la sezione cambia; dove il filo si restringe aumentano la densità di corrente e la velocità di deriva. Per il teorema della divergenza la relazione equivale alla forma locale $\nabla \cdot \vec{J} = 0$.
:::

## Legge di Ohm e resistenza

:::definizione{#resistenza titolo="Resistenza elettrica"}
Si consideri un conduttore con due estremi $A$ e $B$, percorso dalla corrente $I$ che entra in $A$ ed esce da $B$, e sia $\Delta V = V_A - V_B$. La **resistenza** del conduttore è
$$
R = \frac{\Delta V}{I} ,
$$
e si misura in ohm, $1\,\Omega = 1\,\mathrm{V/A}$. Nei conduttori la corrente va dal punto a potenziale maggiore al punto a potenziale minore, quindi $R > 0$. Un componente progettato per avere una resistenza nota si chiama **resistore**.
:::

:::teorema{#legge-di-ohm titolo="Legge di Ohm"}
È una legge sperimentale: per un conduttore metallico a temperatura costante la corrente è proporzionale alla differenza di potenziale applicata,
$$
\Delta V = R\, I ,
$$
con $R$ indipendente da $\Delta V$ e da $I$. I conduttori che soddisfano la legge si dicono **ohmici**, e la loro curva caratteristica, il grafico di $I$ in funzione di $\Delta V$, è una retta per l'origine di pendenza $\dfrac{1}{R}$. La legge permette di ricavare una delle tre grandezze note le altre due: un resistore da $20\,\Omega$ collegato a $12\,\mathrm{V}$ è percorso da $I = \dfrac{12}{20}\,\mathrm{A} = 0{,}60\,\mathrm{A}$.

::grafico{f="x/2;x/4" xmin=-0.6 xmax=10.6 ymin=-0.6 ymax=5.8 nomi="ΔV,I" legenda="R_1 = 2\,\Omega;R_2 = 4\,\Omega" titolo="Curve caratteristiche di due resistori ohmici, con $\Delta V$ in volt e $I$ in ampere: sono rette per l'origine di pendenza $\dfrac{1}{R}$, e a parità di tensione il resistore con resistenza minore è percorso da una corrente maggiore"}

:::

:::attenzione{#componenti-non-ohmici}
Il rapporto $\dfrac{\Delta V}{I}$ si può calcolare per qualunque componente, ma la legge di Ohm vale solo se il rapporto è costante. Un diodo a semiconduttore è un componente *non* ohmico: con la tensione applicata in un verso è attraversato da una corrente trascurabile, nel verso opposto la corrente cresce molto rapidamente con la tensione, e la sua curva caratteristica non è una retta.
:::

:::teorema{#legge-di-ohm-locale titolo="Legge di Ohm in forma locale"}
È una legge sperimentale: in un materiale ohmico e omogeneo la densità di corrente è proporzionale al campo elettrico,
$$
\vec{E} = \rho\, \vec{J} ,
$$
dove $\rho$ è la **resistività** del materiale; in questo argomento $\rho$ indica sempre la resistività, perché la densità volumica di carica non compare. La resistività si misura in $\Omega \cdot \mathrm{m}$, e il suo reciproco $\sigma = \dfrac{1}{\rho}$ si chiama conducibilità. La resistenza è una proprietà del singolo oggetto, la resistività una proprietà del materiale. La legge dà il campo elettrico dentro un filo percorso da corrente: nel rame, con $\rho = 1{,}7 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ e $J = 2{,}0 \cdot 10^{6}\,\mathrm{A/m^2}$, si ha $E = 0{,}034\,\mathrm{V/m}$. Il campo è diverso da zero perché il conduttore *non* è in equilibrio elettrostatico; per i conduttori in equilibrio si rimanda all'argomento su conduttori, condensatori e dielettrici.
:::

::::teorema{#resistenza-di-un-filo titolo="Resistenza di un filo"}
Si consideri un conduttore cilindrico omogeneo di lunghezza $\ell$, sezione di area $A$ e resistività $\rho$, percorso da una corrente stazionaria con densità uniforme e parallela all'asse. Allora
$$
R = \rho\, \frac{\ell}{A} .
$$
La resistenza è proporzionale alla lunghezza e inversamente proporzionale all'area della sezione. Un filo di rame lungo $10\,\mathrm{m}$ con sezione di $1{,}0\,\mathrm{mm^2}$ ha $R = 1{,}7 \cdot 10^{-8} \cdot \dfrac{10}{1{,}0 \cdot 10^{-6}}\,\Omega = 0{,}17\,\Omega$, una resistenza trascurabile rispetto a quella di quasi tutti gli apparecchi che alimenta.

:::dimostrazione
La densità di corrente è uniforme e perpendicolare alla sezione, quindi $J = \dfrac{I}{A}$. Per la **legge di Ohm in forma locale** il campo elettrico è uniforme, parallelo all'asse e di modulo $E = \rho J = \dfrac{\rho I}{A}$. La differenza di potenziale tra gli estremi è la circuitazione del campo lungo l'asse, e per un campo uniforme parallelo al percorso vale
$$
\Delta V = \int_0^{\ell} E\,dx = E\,\ell = \frac{\rho\,\ell}{A}\, I .
$$
Perciò $R = \dfrac{\Delta V}{I} = \rho\,\dfrac{\ell}{A}$.
:::
::::

## Resistività e temperatura

:::osservazione{#valori-resistivita titolo="Conduttori e isolanti"}
La resistività distingue i materiali per la loro capacità di condurre. A $20\,^\circ\mathrm{C}$ i metalli hanno resistività piccole: circa $1{,}7 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ il rame, $2{,}8 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ l'alluminio, $5{,}6 \cdot 10^{-8}\,\Omega \cdot \mathrm{m}$ il tungsteno. Le leghe come il nichel-cromo arrivano a circa $1{,}1 \cdot 10^{-6}\,\Omega \cdot \mathrm{m}$, e per questo si usano nelle resistenze dei forni e delle stufe. Gli isolanti, come il vetro, hanno resistività dell'ordine di $10^{10}$–$10^{14}\,\Omega \cdot \mathrm{m}$, mentre i semiconduttori hanno valori intermedi, che dipendono molto dalla temperatura e dalle impurità.
:::

:::teorema{#resistivita-e-temperatura titolo="Dipendenza della resistività dalla temperatura"}
È una legge empirica: in un intervallo limitato di temperature attorno a $T_0$ la resistività di un metallo cresce linearmente con la temperatura,
$$
\rho(T) = \rho_0 \left[ 1 + \alpha\,(T - T_0) \right] ,
$$
dove $\rho_0$ è la resistività a $T_0$ e $\alpha$ è il **coefficiente di temperatura**, che si misura in $\mathrm{K^{-1}}$ e per i metalli puri vale qualche millesimo. Trascurando la dilatazione termica, che cambia $\ell$ e $A$ in misura molto minore, la resistenza di un filo segue la stessa legge, $R(T) = R_0 \left[ 1 + \alpha\,(T - T_0) \right]$. Su questa proprietà si basano i termometri a resistenza. Un avvolgimento di rame, con $\alpha = 3{,}9 \cdot 10^{-3}\,\mathrm{K^{-1}}$, che a $20\,^\circ\mathrm{C}$ ha $R_0 = 10{,}0\,\Omega$, a $80\,^\circ\mathrm{C}$ ha $R = 10{,}0 \cdot (1 + 3{,}9 \cdot 10^{-3} \cdot 60)\,\Omega \approx 12{,}3\,\Omega$. Il carbonio e i semiconduttori hanno $\alpha < 0$, cioè la loro resistività diminuisce quando la temperatura aumenta.
:::

:::osservazione{#modello-microscopico titolo="Modello microscopico della conduzione"}
Nel modello di Drude gli elettroni di conduzione sono accelerati dal campo, con accelerazione di modulo $\dfrac{eE}{m_e}$, e a ogni urto con il reticolo perdono la velocità acquisita. Se $t_c$ è il tempo medio tra due urti, la velocità di deriva è $v_d = \dfrac{eE}{m_e}\,t_c$, e per la relazione tra densità di corrente e velocità di deriva
$$
J = n e\, v_d = \frac{n e^2 t_c}{m_e}\, E
\quad\Longrightarrow\quad
\rho = \frac{m_e}{n e^2 t_c} .
$$
Il modello spiega la legge di Ohm, poiché $J$ risulta proporzionale a $E$, e spiega l'aumento della resistività con la temperatura: le vibrazioni del reticolo diventano più ampie, gli urti più frequenti e $t_c$ diminuisce.
:::

## Potenza ed effetto Joule

::::teorema{#potenza-elettrica titolo="Potenza assorbita da un componente"}
Si consideri un componente con due estremi $A$ e $B$, percorso dalla corrente stazionaria $I$ che entra in $A$ ed esce da $B$, e sia $\Delta V = V_A - V_B$. La potenza che il componente riceve dal campo elettrico è
$$
P = \Delta V\, I .
$$
In questa materia il lavoro si indica con $W$, perché la lettera $L$ è riservata all'induttanza. Se $P > 0$ il componente assorbe energia, come un resistore o una batteria in carica; se $P < 0$ la cede, come un generatore che alimenta un circuito. Un motore collegato a $12\,\mathrm{V}$ e percorso da $2{,}0\,\mathrm{A}$ assorbe $24\,\mathrm{W}$.

:::dimostrazione
Nel tempo $dt$ entra in $A$ la carica $dq = I\,dt$ ed esce da $B$ una carica uguale, perché la corrente è stazionaria. Il risultato netto è il trasporto della carica $dq$ dal potenziale $V_A$ al potenziale $V_B$, durante il quale il campo elettrico compie il lavoro uguale alla diminuzione dell'energia potenziale,
$$
dW = dq\,(V_A - V_B) = \Delta V\, I\, dt .
$$
Dividendo per $dt$ si ottiene la potenza $P = \dfrac{dW}{dt} = \Delta V\, I$.
:::
::::

:::teorema{#effetto-joule titolo="Effetto Joule"}
In un resistore di resistenza $R$ percorso dalla corrente $I$ l'energia ricevuta dal campo elettrico si trasforma in energia interna del conduttore, che si scalda, e la potenza dissipata è
$$
P = R I^2 = \frac{\Delta V^2}{R} .
$$
Le due espressioni seguono dalla potenza assorbita $P = \Delta V\, I$ sostituendo $\Delta V = RI$ oppure $I = \dfrac{\Delta V}{R}$. A corrente fissata la potenza cresce con $R$, a tensione fissata decresce con $R$. Un bollitore da $2{,}0\,\mathrm{kW}$ alimentato a $230\,\mathrm{V}$ è percorso da $I = \dfrac{2000}{230}\,\mathrm{A} \approx 8{,}7\,\mathrm{A}$ e ha resistenza $R = \dfrac{230^2}{2000}\,\Omega \approx 26\,\Omega$; in tre minuti consuma $2{,}0\,\mathrm{kW} \cdot 0{,}050\,\mathrm{h} = 0{,}10\,\mathrm{kWh}$, cioè $3{,}6 \cdot 10^5\,\mathrm{J}$.
:::

## Generatori e forza elettromotrice

:::richiamo{titolo="Circuitazione del campo elettrostatico"}
Il campo elettrostatico è conservativo: lungo ogni linea chiusa $\gamma$ si ha $\displaystyle\oint_\gamma \vec{E} \cdot d\vec{\ell} = 0$, e la differenza di potenziale tra due punti non dipende dal percorso. Si rimanda all'argomento sul potenziale elettrico e l'energia elettrostatica, e per gli integrali di linea all'argomento su curve e integrali di linea di Analisi 2.
:::

:::definizione{#forza-elettromotrice titolo="Forza elettromotrice"}
Per il richiamo sulla circuitazione, il campo elettrostatico compie lavoro nullo su una carica che percorre un circuito chiuso, mentre i resistori dissipano energia. Per mantenere una corrente serve quindi un **generatore**, un dispositivo nel quale forze di natura non elettrostatica (chimiche in una pila, magnetiche in una dinamo) spingono le cariche positive dal polo negativo al polo positivo, contro il campo elettrostatico. Se queste forze compiono il lavoro $W$ su una carica $q$ che attraversa il generatore, la **forza elettromotrice** è
$$
\mathcal{E} = \frac{W}{q} ,
$$
e si misura in volt. Nonostante il nome, $\mathcal{E}$ è un lavoro per unità di carica; una pila da $1{,}5\,\mathrm{V}$ fornisce $1{,}5\,\mathrm{J}$ a ogni coulomb che la attraversa. Un generatore si dice **ideale** se la differenza di potenziale tra i suoi poli vale $\mathcal{E}$ qualunque sia la corrente erogata.
:::

::::teorema{#generatore-reale titolo="Generatore reale e resistenza interna"}
Un generatore reale si descrive come un generatore ideale di forza elettromotrice $\mathcal{E}$ in serie con una **resistenza interna** $r$. Se alimenta un resistore esterno di resistenza $R$, la corrente e la tensione ai morsetti sono
$$
I = \frac{\mathcal{E}}{R + r} ,
\qquad
\Delta V = \mathcal{E} - r I = \frac{R}{R + r}\,\mathcal{E} .
$$
La tensione ai morsetti è minore di $\mathcal{E}$ quando il generatore eroga corrente, e coincide con $\mathcal{E}$ a circuito aperto, quando $I = 0$; con i morsetti collegati da un filo di resistenza trascurabile la corrente è quella di cortocircuito, $\dfrac{\mathcal{E}}{r}$. Una batteria con $\mathcal{E} = 9{,}0\,\mathrm{V}$ e $r = 0{,}50\,\Omega$ collegata a $R = 4{,}0\,\Omega$ eroga $I = 2{,}0\,\mathrm{A}$ con $\Delta V = 8{,}0\,\mathrm{V}$ ai morsetti.

::grafico{assi=0 uguale=1 linee="0,0 0,1.41;0,1.59 0,3;-0.36,1.59 0.36,1.59;-0.19,1.41 0.19,1.41;0,3 0.5,3;0.5,3 1,3 1.083,3.17 1.25,2.83 1.417,3.17 1.583,2.83 1.75,3.17 1.917,2.83 2,3 2.5,3;2.5,3 5.5,3;5.5,3 5.5,2 5.67,1.917 5.33,1.75 5.67,1.583 5.33,1.417 5.67,1.25 5.33,1.083 5.5,1 5.5,0;5.5,0 0,0" vettori="4,3.35,5,3.35" punti="3.4,3,pieno,A;3.4,0,pieno,B" segmenti="-1.2,-0.45,2.9,-0.45;2.9,-0.45,2.9,3.8;2.9,3.8,-1.2,3.8;-1.2,3.8,-1.2,-0.45" etichette="0.45,1.69,+;0.45,1.09,−;-0.65,1.43,ℰ;1.28,3.38,r;5.8,1.43,R;4.38,3.57,I;3.55,1.4,ΔV" xmin=-1.6 xmax=6.6 ymin=-0.8 ymax=4.2 titolo="Generatore reale (nel riquadro tratteggiato): forza elettromotrice $\mathcal{E}$ in serie con la resistenza interna $r$; tra i morsetti $A$ e $B$ la tensione è $\Delta V = \mathcal{E} - rI$"}

:::dimostrazione
In regime stazionario la corrente è la stessa in tutto il circuito, che non ha diramazioni. Nel tempo $dt$ il generatore ideale compie sulla carica $I\,dt$ il lavoro $\mathcal{E} I\,dt$, mentre per l'**effetto Joule** le due resistenze dissipano l'energia $(R + r)\, I^2\,dt$. Il campo elettrostatico compie lavoro nullo lungo il circuito chiuso, e l'energia del sistema non cambia, quindi
$$
\mathcal{E} I = R I^2 + r I^2
\quad\Longrightarrow\quad
I = \frac{\mathcal{E}}{R + r} .
$$
La tensione ai morsetti è la tensione ai capi di $R$, cioè $\Delta V = R I = \mathcal{E} - r I$.
:::
::::

::::teorema{#massimo-trasferimento-di-potenza titolo="Massimo trasferimento di potenza"}
Si consideri un generatore reale con $\mathcal{E}$ e $r$ fissati, collegato a un resistore di resistenza $R$ variabile. La potenza dissipata in $R$,
$$
P(R) = \frac{\mathcal{E}^2 R}{(R + r)^2} ,
$$
è massima per $R = r$ e vale $P_{\max} = \dfrac{\mathcal{E}^2}{4 r}$. In quella condizione il rendimento, rapporto tra la potenza su $R$ e la potenza $\mathcal{E} I$ erogata dal generatore, vale $\dfrac{R}{R + r} = \dfrac{1}{2}$. La condizione $R = r$ si cerca quando conta la potenza sul carico, come tra un amplificatore e un altoparlante; nella distribuzione dell'energia conta il rendimento, e si lavora con $R$ molto maggiore di $r$. Con $\mathcal{E} = 12\,\mathrm{V}$ e $r = 2{,}0\,\Omega$ la potenza massima è $\dfrac{144}{8{,}0}\,\mathrm{W} = 18\,\mathrm{W}$.

::grafico{f="144*x/(x+2)^2" punti="2,18,pieno" segmenti="2,0,2,18" xmin=-0.9 xmax=20.5 ymin=-0.9 ymax=21 nomi="R,P" titolo="Potenza sul carico in funzione di $R$ (in ohm) per $\mathcal{E} = 12\,\mathrm{V}$ e $r = 2{,}0\,\Omega$: il massimo, $18\,\mathrm{W}$, si ha per $R = r$"}

:::dimostrazione
Per il generatore reale $I = \dfrac{\mathcal{E}}{R + r}$, quindi per l'effetto Joule $P = R I^2 = \dfrac{\mathcal{E}^2 R}{(R + r)^2}$. La derivata rispetto a $R$ è
$$
P'(R) = \mathcal{E}^2\, \frac{(R + r)^2 - 2R\,(R + r)}{(R + r)^4} = \mathcal{E}^2\, \frac{r - R}{(R + r)^3} ,
$$
positiva per $0 \leq R < r$ e negativa per $R > r$. Perciò $P$ è crescente su $[0, r]$ e decrescente su $[r, +\infty)$, e $R = r$ è il punto di massimo assoluto, con $P(r) = \dfrac{\mathcal{E}^2 r}{4 r^2} = \dfrac{\mathcal{E}^2}{4 r}$.
:::
::::

## Resistori in serie e in parallelo

::::teorema{#resistori-in-serie titolo="Resistori in serie"}
Più resistori si dicono **in serie** se sono collegati uno di seguito all'altro senza diramazioni, così che sono percorsi dalla stessa corrente. I resistori $R_1, \dots, R_n$ in serie equivalgono a un unico resistore di resistenza
$$
R_{\text{eq}} = R_1 + R_2 + \dots + R_n .
$$
La resistenza equivalente è maggiore di ciascuna delle resistenze. Tre resistori da $10\,\Omega$, $20\,\Omega$ e $30\,\Omega$ in serie, collegati a $12\,\mathrm{V}$, equivalgono a $60\,\Omega$ e sono percorsi da $0{,}20\,\mathrm{A}$; le tensioni ai loro capi sono $2{,}0\,\mathrm{V}$, $4{,}0\,\mathrm{V}$ e $6{,}0\,\mathrm{V}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.21;0,1.39 0,2.6;-0.36,1.39 0.36,1.39;-0.19,1.21 0.19,1.21;0,2.6 0.7,2.6 0.783,2.77 0.95,2.43 1.117,2.77 1.283,2.43 1.45,2.77 1.617,2.43 1.7,2.6 2.4,2.6;2.4,2.6 3.1,2.6 3.183,2.77 3.35,2.43 3.517,2.77 3.683,2.43 3.85,2.77 4.017,2.43 4.1,2.6 4.8,2.6;4.8,2.6 5.5,2.6 5.583,2.77 5.75,2.43 5.917,2.77 6.083,2.43 6.25,2.77 6.417,2.43 6.5,2.6 7.2,2.6;7.2,2.6 7.2,0 0,0" vettori="7.55,1.8,7.55,0.8" etichette="0.45,1.49,+;0.45,0.89,−;-0.65,1.23,ℰ;0.98,2.98,R₁;3.38,2.98,R₂;5.78,2.98,R₃;7.69,1.23,I" xmin=-1.4 xmax=8.4 ymin=-0.6 ymax=3.4 titolo="Resistori in serie: sono percorsi dalla stessa corrente $I$, e le tensioni ai loro capi si sommano"}

:::dimostrazione
Per la conservazione della carica in regime stazionario, la corrente $I$ è la stessa in ogni resistore. Indicati con $A$ e $B$ gli estremi della serie e con $\Delta V_k$ la tensione ai capi del resistore $k$-esimo, la differenza di potenziale $V_A - V_B$ è la somma delle differenze di potenziale tra i punti di collegamento consecutivi, e per la **legge di Ohm** $\Delta V_k = R_k I$. Quindi
$$
V_A - V_B = \Delta V_1 + \dots + \Delta V_n = (R_1 + \dots + R_n)\, I ,
$$
cioè la serie si comporta come un resistore di resistenza $R_1 + \dots + R_n$.
:::
::::

::::teorema{#resistori-in-parallelo titolo="Resistori in parallelo"}
Più resistori si dicono **in parallelo** se sono collegati tra gli stessi due nodi, così che hanno ai capi la stessa differenza di potenziale. I resistori $R_1, \dots, R_n$ in parallelo equivalgono a un unico resistore di resistenza $R_{\text{eq}}$ tale che
$$
\frac{1}{R_{\text{eq}}} = \frac{1}{R_1} + \frac{1}{R_2} + \dots + \frac{1}{R_n} .
$$
La resistenza equivalente è minore della più piccola delle resistenze; per due resistori $R_{\text{eq}} = \dfrac{R_1 R_2}{R_1 + R_2}$. Due resistori da $6{,}0\,\Omega$ e $3{,}0\,\Omega$ in parallelo equivalgono a $\dfrac{18}{9{,}0}\,\Omega = 2{,}0\,\Omega$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.41;0,1.59 0,3;-0.36,1.59 0.36,1.59;-0.19,1.41 0.19,1.41;0,3 6.5,3;0,0 6.5,0;2.5,3 2.5,2 2.67,1.917 2.33,1.75 2.67,1.583 2.33,1.417 2.67,1.25 2.33,1.083 2.5,1 2.5,0;4.5,3 4.5,2 4.67,1.917 4.33,1.75 4.67,1.583 4.33,1.417 4.67,1.25 4.33,1.083 4.5,1 4.5,0;6.5,3 6.5,2 6.67,1.917 6.33,1.75 6.67,1.583 6.33,1.417 6.67,1.25 6.33,1.083 6.5,1 6.5,0" vettori="2.1,2.7,2.1,2;4.1,2.7,4.1,2;6.1,2.7,6.1,2;0.7,3.35,1.7,3.35" punti="2.5,3,pieno;4.5,3,pieno;2.5,0,pieno;4.5,0,pieno" etichette="0.45,1.69,+;0.45,1.09,−;-0.65,1.43,ℰ;2.8,1.43,R₁;2.24,2.28,I₁;4.8,1.43,R₂;4.24,2.28,I₂;6.8,1.43,R₃;6.24,2.28,I₃;1.08,3.57,I" xmin=-1.4 xmax=7.6 ymin=-0.6 ymax=3.9 titolo="Resistori in parallelo: hanno ai capi la stessa tensione, e la corrente $I$ si divide nei rami, $I = I_1 + I_2 + I_3$"}

:::dimostrazione
I resistori hanno ai capi la stessa tensione $\Delta V$, quindi per la **legge di Ohm** il resistore $k$-esimo è percorso da $I_k = \dfrac{\Delta V}{R_k}$. La corrente $I$ che arriva al nodo si divide tra i rami e, per la conservazione della carica, è la somma delle correnti nei rami:
$$
I = I_1 + \dots + I_n = \left( \frac{1}{R_1} + \dots + \frac{1}{R_n} \right) \Delta V .
$$
Il parallelo si comporta quindi come un resistore con $\dfrac{1}{R_{\text{eq}}} = \dfrac{1}{R_1} + \dots + \dfrac{1}{R_n}$.
:::
::::

:::osservazione{#partitori titolo="Partitore di tensione e partitore di corrente"}
In una serie sottoposta alla tensione $\Delta V$ la tensione si ripartisce in proporzione alle resistenze, $\Delta V_k = \dfrac{R_k}{R_{\text{eq}}}\,\Delta V$ (**partitore di tensione**). In un parallelo di due resistori percorso dalla corrente totale $I$, la corrente si ripartisce in proporzione inversa alle resistenze, $I_1 = \dfrac{R_2}{R_1 + R_2}\, I$ e $I_2 = \dfrac{R_1}{R_1 + R_2}\, I$ (**partitore di corrente**). Le due formule seguono dalle dimostrazioni sulla serie e sul parallelo, e permettono di trovare tensioni e correnti senza riscrivere ogni volta la legge di Ohm.
:::

:::esempio{titolo="Riduzione di una rete"}
Un generatore ideale con $\mathcal{E} = 16\,\mathrm{V}$ alimenta un resistore $R_1 = 4{,}0\,\Omega$ in serie con il parallelo di $R_2 = 6{,}0\,\Omega$ e $R_3 = 12\,\Omega$. Il parallelo equivale a $\dfrac{6{,}0 \cdot 12}{18}\,\Omega = 4{,}0\,\Omega$, quindi la rete equivale a $8{,}0\,\Omega$ e la corrente erogata è $I = 2{,}0\,\mathrm{A}$. Ai capi del parallelo la tensione è $4{,}0 \cdot 2{,}0\,\mathrm{V} = 8{,}0\,\mathrm{V}$, e il partitore di corrente dà
$$
I_2 = \frac{12}{18} \cdot 2{,}0\,\mathrm{A} \approx 1{,}33\,\mathrm{A} ,
\qquad
I_3 = \frac{6{,}0}{18} \cdot 2{,}0\,\mathrm{A} \approx 0{,}67\,\mathrm{A} .
$$
:::

## Leggi di Kirchhoff

:::definizione{#nodi-rami-maglie titolo="Nodi, rami e maglie"}
In un circuito si chiama **nodo** un punto in cui si incontrano almeno tre conduttori, **ramo** un tratto di circuito compreso tra due nodi consecutivi, **maglia** un percorso chiuso formato da rami. Lungo un ramo la corrente è la stessa in ogni punto, perché non ci sono diramazioni. Un circuito con generatori su rami diversi in genere non si riduce a serie e paralleli, e si risolve con le leggi di Kirchhoff, che valgono per qualunque rete.
:::

::::teorema{#leggi-di-kirchhoff titolo="Leggi di Kirchhoff"}
Si consideri un circuito in regime stazionario formato da generatori e resistori, con le resistenze interne dei generatori trattate come resistori.

- **Legge dei nodi**: in ogni nodo la somma delle correnti entranti è uguale alla somma delle correnti uscenti.
- **Legge delle maglie**: percorrendo una maglia in un verso scelto, si ha $\sum_k \pm\,\mathcal{E}_k = \sum_k \pm\,R_k I_k$, dove $\mathcal{E}_k$ ha il segno $+$ se il generatore è attraversato dal polo negativo al polo positivo, e $R_k I_k$ ha il segno $+$ se la corrente del ramo ha il verso di percorrenza.

Le due leggi danno un sistema di equazioni lineari nelle correnti dei rami, che si risolve con i metodi dell'algebra lineare.

:::dimostrazione
Si consideri una superficie chiusa che racchiude un nodo. Per la conservazione della carica in regime stazionario, il flusso di $\vec{J}$ attraverso la superficie è nullo, e il flusso è la somma delle correnti uscenti meno la somma delle correnti entranti; ne segue la **legge dei nodi**.

Per la maglia, si percorre il cammino chiuso sommando le variazioni di potenziale. Il campo elettrostatico ha circuitazione nulla, quindi la somma delle variazioni lungo il cammino chiuso è zero. Attraversando un resistore nel verso della corrente il potenziale diminuisce di $R I$, perché la corrente va dal potenziale maggiore al minore; attraversandolo nel verso opposto aumenta di $R I$. Attraversando un generatore ideale dal polo negativo al polo positivo il potenziale aumenta di $\mathcal{E}$, nel verso opposto diminuisce di $\mathcal{E}$. Uguagliando a zero la somma si ottiene $\sum_k \pm\,\mathcal{E}_k - \sum_k \pm\,R_k I_k = 0$, cioè la **legge delle maglie**.
:::
::::

:::osservazione{#metodo-kirchhoff titolo="Risoluzione di un circuito a più maglie"}
Per un circuito con $n$ nodi e $b$ rami si assegna a ogni ramo una corrente incognita con un verso arbitrario. La legge dei nodi dà $n - 1$ equazioni indipendenti, perché l'equazione dell'ultimo nodo è la somma delle altre; le leggi delle maglie danno $b - n + 1$ equazioni indipendenti, scegliendo maglie che contengono ciascuna almeno un ramo non usato nelle precedenti. Si ottengono così $b$ equazioni nelle $b$ incognite. Una corrente con valore negativo scorre nel verso opposto a quello scelto. Il risultato si controlla con il bilancio delle potenze: la potenza erogata dai generatori è uguale alla somma delle potenze dissipate nei resistori e assorbite dai generatori in carica.
:::

:::esempio{titolo="Circuito con due generatori"}
Due generatori ideali con $\mathcal{E}_1 = 12\,\mathrm{V}$ e $\mathcal{E}_2 = 6{,}0\,\mathrm{V}$, in serie rispettivamente con $R_1 = 2{,}0\,\Omega$ e $R_2 = 3{,}0\,\Omega$, sono collegati tra i nodi $A$ e $B$ con i poli positivi verso $A$; tra gli stessi nodi è collegato $R_3 = 6{,}0\,\Omega$. Si scelgono le correnti $I_1$ e $I_2$ dirette verso $A$ nei rami dei generatori e $I_3$ diretta da $A$ verso $B$ in $R_3$. La legge del nodo $A$ e le leggi delle due maglie che contengono $R_3$ danno
$$
\begin{cases}
I_1 + I_2 = I_3 \\[4pt]
\mathcal{E}_1 = R_1 I_1 + R_3 I_3 \\[4pt]
\mathcal{E}_2 = R_2 I_2 + R_3 I_3
\end{cases}
\quad\Longrightarrow\quad
I_1 = 2{,}0\,\mathrm{A} , \quad
I_2 \approx -0{,}67\,\mathrm{A} , \quad
I_3 \approx 1{,}33\,\mathrm{A} .
$$
La corrente $I_2$ è negativa, quindi nel ramo di $\mathcal{E}_2$ la corrente scorre da $A$ verso $B$ ed entra nel generatore dal polo positivo: il generatore 2 **assorbe** la potenza $\mathcal{E}_2\,|I_2| = 4{,}0\,\mathrm{W}$, come una batteria in carica. Il generatore 1 eroga $\mathcal{E}_1 I_1 = 24\,\mathrm{W}$, e i resistori dissipano $8{,}0\,\mathrm{W} + 1{,}3\,\mathrm{W} + 10{,}7\,\mathrm{W} = 20\,\mathrm{W}$, in accordo con il bilancio delle potenze.

::grafico{assi=0 uguale=1 linee="0,0 0,0.91;0,1.09 0,2;-0.36,1.09 0.36,1.09;-0.19,0.91 0.19,0.91;0,2 0,2.5 0.17,2.583 -0.17,2.75 0.17,2.917 -0.17,3.083 0.17,3.25 -0.17,3.417 0,3.5 0,4;3.5,0 3.5,1.5 3.67,1.583 3.33,1.75 3.67,1.917 3.33,2.083 3.67,2.25 3.33,2.417 3.5,2.5 3.5,4;7,0 7,0.91;7,1.09 7,2;6.64,1.09 7.36,1.09;6.81,0.91 7.19,0.91;7,2 7,2.5 7.17,2.583 6.83,2.75 7.17,2.917 6.83,3.083 7.17,3.25 6.83,3.417 7,3.5 7,4;0,4 7,4;0,0 7,0" vettori="0.8,4.35,1.9,4.35;6.2,4.35,5.1,4.35;3.05,3.6,3.05,2.8" punti="3.5,4,pieno,A;3.5,0,pieno,B" etichette="0.45,1.19,+;0.45,0.59,−;-0.8,0.93,ℰ₁;0.3,2.93,R₁;3.8,1.93,R₃;6.38,1.19,+;6.4,0.59,−;7.5,0.93,ℰ₂;6.44,2.93,R₂;1.23,4.57,I₁;5.53,4.57,I₂;3.19,3.13,I₃" xmin=-1.5 xmax=8.6 ymin=-0.6 ymax=5.0 titolo="Circuito con due generatori: le correnti $I_1$ e $I_2$ sono scelte verso il nodo $A$, la corrente $I_3$ da $A$ verso $B$; il calcolo dà $I_2 < 0$"}

:::

:::osservazione{#amperometro-voltmetro titolo="Amperometro e voltmetro"}
L'**amperometro** misura la corrente in un ramo e si inserisce in serie; perché la sua presenza non modifichi la corrente, la sua resistenza deve essere piccola rispetto a quella del ramo, e quello ideale ha resistenza nulla. Il **voltmetro** misura la tensione tra due punti e si collega in parallelo; la sua resistenza deve essere grande rispetto a quella del tratto su cui si misura, e quello ideale ha resistenza infinita. Un voltmetro da $10\,\mathrm{M\Omega}$ collegato ai capi di un resistore da $10\,\mathrm{k\Omega}$ forma un parallelo da $9{,}99\,\mathrm{k\Omega}$, e la misura cambia la resistenza del tratto di circa un millesimo.
:::

## Circuito RC: carica e scarica del condensatore

Quando nel circuito c'è un condensatore la corrente varia nel tempo; si assume il regime quasi stazionario, nel quale in ogni istante la corrente è la stessa in tutto un ramo e valgono le leggi di Kirchhoff.

:::richiamo{titolo="Capacità ed energia di un condensatore"}
Un condensatore di capacità $C$ con carica $q$ sulle armature ha tra le armature la tensione $\Delta V = \dfrac{q}{C}$ e immagazzina l'energia $U = \dfrac{q^2}{2C} = \dfrac{1}{2} C\, \Delta V^2$. Si rimanda all'argomento su conduttori, condensatori e dielettrici.
:::

:::richiamo{titolo="Equazioni differenziali lineari del primo ordine"}
L'equazione $y'(t) + a\,y(t) = b$, con $a \neq 0$ e $b$ costanti, ha soluzione generale $y(t) = \dfrac{b}{a} + K e^{-a t}$, con $K \in \mathbb{R}$ fissata dalla condizione iniziale. Si rimanda all'argomento sulle equazioni differenziali di Analisi 1.
:::

::::teorema{#carica-condensatore titolo="Carica di un condensatore"}
Si consideri un circuito formato da un generatore ideale di forza elettromotrice $\mathcal{E}$, un resistore $R$ e un condensatore $C$ in serie, con il condensatore scarico, e sia $t = 0$ l'istante in cui si chiude l'interruttore. Allora per $t \geq 0$
$$
q(t) = C\mathcal{E} \left( 1 - e^{-\frac{t}{\tau}} \right) ,
\qquad
i(t) = \frac{\mathcal{E}}{R}\, e^{-\frac{t}{\tau}} ,
\qquad
\tau = R C .
$$
All'istante iniziale la corrente vale $\dfrac{\mathcal{E}}{R}$, come se il condensatore fosse un filo; col passare del tempo la corrente tende a zero e la tensione sul condensatore tende a $\mathcal{E}$. Con $R = 10\,\mathrm{k\Omega}$, $C = 100\,\mathrm{\mu F}$ e $\mathcal{E} = 12\,\mathrm{V}$ si ha $\tau = 1{,}0\,\mathrm{s}$, corrente iniziale $1{,}2\,\mathrm{mA}$ e carica finale $1{,}2\,\mathrm{mC}$.

::grafico{assi=0 uguale=1 linee="0,0 0,1.41;0,1.59 0,3;-0.36,1.59 0.36,1.59;-0.19,1.41 0.19,1.41;0,3 0.8,3 1.32,3.32;1.4,3 2.2,3;2.2,3 3.3,3 3.383,3.17 3.55,2.83 3.717,3.17 3.883,2.83 4.05,3.17 4.217,2.83 4.3,3 5.4,3;5.4,3 5.6,3;5.6,3 5.6,1.6;5.6,1.4 5.6,0;5.28,1.4 5.92,1.4;5.28,1.6 5.92,1.6;5.6,0 0,0" vettori="5.95,2.7,5.95,2" punti="0.8,3,vuoto;1.4,3,vuoto" etichette="0.45,1.69,+;0.45,1.09,−;-0.65,1.43,ℰ;1,3.55,T;3.58,3.38,R;5,1.43,C;6.05,1.62,+q;6.05,1.12,−q;6.09,2.28,i" xmin=-1.4 xmax=7.0 ymin=-0.6 ymax=3.8 titolo="Circuito RC: alla chiusura dell'interruttore $T$ il generatore carica il condensatore attraverso il resistore"}

::grafico{f="12*(1-exp(-x));12*exp(-x)" asintoti="y=12" punti="1,7.585,pieno" segmenti="1,0,1,7.585" xmin=-0.4 xmax=5.6 ymin=-0.8 ymax=13.4 nomi="t,V" legenda="\Delta V_C = \mathcal{E}\,\big( 1 - e^{-\frac{t}{\tau}} \big);\Delta V_R = \mathcal{E}\, e^{-\frac{t}{\tau}}" titolo="Carica con $\mathcal{E} = 12\,\mathrm{V}$ e $\tau = 1{,}0\,\mathrm{s}$, tempo in secondi e tensioni in volt: la tensione sul condensatore sale verso $\mathcal{E}$, quella sul resistore, proporzionale alla corrente, scende a zero; per $t = \tau$ il condensatore è al $63\,\%$"}

:::dimostrazione
Nell'istante $t$ il condensatore ha carica $q$ sull'armatura collegata al resistore, e la corrente che scorre nel circuito porta carica su quell'armatura, quindi $i = \dfrac{dq}{dt}$. Percorrendo la maglia, la **legge delle maglie** dà
$$
\mathcal{E} = R\, i + \frac{q}{C}
\quad\Longrightarrow\quad
\frac{dq}{dt} + \frac{1}{RC}\, q = \frac{\mathcal{E}}{R} .
$$
È un'equazione lineare del primo ordine con $a = \dfrac{1}{RC}$ e $b = \dfrac{\mathcal{E}}{R}$, quindi $q(t) = C\mathcal{E} + K e^{-\frac{t}{RC}}$. Il condensatore è scarico per $t = 0$, perciò $K = -C\mathcal{E}$ e si ottiene $q(t)$. Derivando, $i(t) = \dfrac{dq}{dt} = \dfrac{C\mathcal{E}}{RC}\, e^{-\frac{t}{\tau}} = \dfrac{\mathcal{E}}{R}\, e^{-\frac{t}{\tau}}$.
:::
::::

:::osservazione{#costante-di-tempo titolo="Costante di tempo"}
La **costante di tempo** $\tau = RC$ ha le dimensioni di un tempo, poiché $\Omega \cdot \mathrm{F} = \dfrac{\mathrm{V}}{\mathrm{A}} \cdot \dfrac{\mathrm{C}}{\mathrm{V}} = \dfrac{\mathrm{C}}{\mathrm{A}} = \mathrm{s}$. Dopo un tempo $\tau$ la carica ha raggiunto la frazione $1 - e^{-1} \approx 0{,}63$ del valore finale, e dopo $5\tau$ differisce dal valore finale di meno dell'$1\,\%$, poiché $e^{-5} \approx 0{,}0067$. Il tempo necessario per raggiungere la frazione $f$ della carica finale si ricava da $1 - e^{-\frac{t}{\tau}} = f$, e vale $t = -\tau \ln(1 - f)$. Aumentando $R$ o $C$ il processo diventa più lento.
:::

::::teorema{#scarica-condensatore titolo="Scarica di un condensatore"}
Si consideri un condensatore di capacità $C$ con carica iniziale $Q_0$, cioè con tensione iniziale $\Delta V_0 = \dfrac{Q_0}{C}$, che all'istante $t = 0$ viene collegato ai capi di un resistore $R$. Allora per $t \geq 0$
$$
q(t) = Q_0\, e^{-\frac{t}{\tau}} ,
\qquad
i(t) = \frac{\Delta V_0}{R}\, e^{-\frac{t}{\tau}} ,
\qquad
\tau = R C ,
$$
dove $i$ è la corrente che esce dall'armatura positiva. La carica e la corrente si dimezzano ogni $\tau \ln 2 \approx 0{,}69\,\tau$; un condensatore con $\tau = 2{,}0\,\mathrm{s}$ che parte da $12\,\mathrm{V}$ è a $6{,}0\,\mathrm{V}$ dopo circa $1{,}4\,\mathrm{s}$ e a $3{,}0\,\mathrm{V}$ dopo circa $2{,}8\,\mathrm{s}$.

::grafico{f="12*exp(-x/2)" punti="1.386,6,pieno;2.773,3,pieno" segmenti="1.386,0,1.386,6;2.773,0,2.773,3" xmin=-0.5 xmax=10.5 ymin=-0.8 ymax=13.4 nomi="t,V" legenda="\Delta V_C = \Delta V_0\, e^{-\frac{t}{\tau}}" titolo="Scarica con $\Delta V_0 = 12\,\mathrm{V}$ e $\tau = 2{,}0\,\mathrm{s}$: la tensione si dimezza ogni $\tau \ln 2 \approx 1{,}4\,\mathrm{s}$"}

:::dimostrazione
La corrente che esce dall'armatura positiva ne diminuisce la carica, quindi $i = -\dfrac{dq}{dt}$. La maglia contiene solo il condensatore e il resistore, perciò la **legge delle maglie** dà
$$
\frac{q}{C} = R\, i = -R\, \frac{dq}{dt}
\quad\Longrightarrow\quad
\frac{dq}{dt} + \frac{1}{RC}\, q = 0 .
$$
Per il richiamo sulle equazioni lineari del primo ordine, con $b = 0$, si ha $q(t) = K e^{-\frac{t}{RC}}$, e la condizione $q(0) = Q_0$ dà $K = Q_0$. Derivando, $i(t) = -\dfrac{dq}{dt} = \dfrac{Q_0}{RC}\, e^{-\frac{t}{\tau}} = \dfrac{\Delta V_0}{R}\, e^{-\frac{t}{\tau}}$.
:::
::::

::::teorema{#bilancio-energetico-rc titolo="Bilancio energetico nella carica"}
Nella carica completa di un condensatore attraverso un resistore, con le ipotesi del teorema sulla carica, il generatore eroga l'energia $C\mathcal{E}^2$; metà si trova immagazzinata nel condensatore, $\dfrac{1}{2} C\mathcal{E}^2$, e l'altra metà è dissipata nel resistore per effetto Joule, qualunque sia il valore di $R$. Con $C = 100\,\mathrm{\mu F}$ e $\mathcal{E} = 12\,\mathrm{V}$ il generatore eroga $14{,}4\,\mathrm{mJ}$, e il condensatore ne immagazzina $7{,}2\,\mathrm{mJ}$.

:::dimostrazione
Il generatore porta la carica $dq = i\,dt$ attraverso la forza elettromotrice $\mathcal{E}$, e nella carica completa la carica totale è $C\mathcal{E}$; quindi l'energia erogata è
$$
W_{\text{gen}} = \int_0^{+\infty} \mathcal{E}\, i(t)\,dt = \mathcal{E} \cdot C\mathcal{E} = C\mathcal{E}^2 .
$$
L'energia dissipata nel resistore è l'integrale della potenza $R i^2$:
$$
\int_0^{+\infty} R\, \frac{\mathcal{E}^2}{R^2}\, e^{-\frac{2t}{\tau}}\,dt = \frac{\mathcal{E}^2}{R} \cdot \frac{\tau}{2} = \frac{1}{2} C\mathcal{E}^2 .
$$
Per il richiamo sull'energia del condensatore, la carica finale $C\mathcal{E}$ corrisponde all'energia immagazzinata $\dfrac{1}{2} C\mathcal{E}^2$, e la somma delle due parti è uguale a $W_{\text{gen}}$.
:::
::::

:::osservazione{#condensatore-a-regime titolo="Condensatore in un circuito a regime"}
Quando sono trascorse molte costanti di tempo, la carica del condensatore non cambia più e nel suo ramo la corrente è nulla: a regime il condensatore si comporta come un circuito aperto, e la sua tensione si trova risolvendo il resto del circuito. All'istante in cui si chiude l'interruttore, invece, un condensatore scarico ha tensione nulla e si comporta come un filo. Per esempio, un generatore con $\mathcal{E} = 12\,\mathrm{V}$ alimenta $R_1 = 2{,}0\,\mathrm{k\Omega}$ in serie con $R_2 = 6{,}0\,\mathrm{k\Omega}$, e un condensatore da $50\,\mathrm{\mu F}$ è collegato in parallelo a $R_2$. A regime la corrente attraversa solo i due resistori, $I = \dfrac{12}{8{,}0 \cdot 10^3}\,\mathrm{A} = 1{,}5\,\mathrm{mA}$, quindi il condensatore ha la tensione $R_2 I = 9{,}0\,\mathrm{V}$ e la carica $450\,\mathrm{\mu C}$.
:::
