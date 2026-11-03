---
titolo: "Relatività ristretta: dinamica ed energia"
sommario: Come si scrivono in relatività la quantità di moto e l'energia di una particella, perché la massa equivale a un'energia, come energia e quantità di moto si conservano negli urti, nei decadimenti e nella creazione di coppie, quanta energia si libera nella fissione e nella fusione dei nuclei e che cosa afferma il principio di equivalenza della relatività generale.
---

## Quantità di moto relativistica

:::richiamo{titolo="Fattore di Lorentz"}
Per una velocità $v$ con $0 \leq v < c$ si pongono $\beta = \dfrac{v}{c}$ e $\gamma = \dfrac{1}{\sqrt{1 - \frac{v^2}{c^2}}} = \dfrac{1}{\sqrt{1 - \beta^2}}$. Il numero $\gamma$ vale $1$ per $v = 0$, è maggiore di $1$ per $v > 0$ e tende a $+\infty$ per $v \to c$. Si rimanda all'argomento sulla relatività ristretta: spazio e tempo.
:::

:::definizione{#quantita-di-moto-relativistica titolo="Quantità di moto relativistica"}
In tutto l'argomento $m$ indica la **massa** di una particella misurata quando la particella è ferma, detta anche massa a riposo: è una proprietà della particella e ha lo stesso valore in ogni sistema di riferimento. Una particella di massa $m$ che si muove con velocità $\vec{v}$ ha **quantità di moto relativistica**
$$
\vec{p} = \gamma\, m\, \vec{v} ,
\qquad
p = \gamma\, m\, v = \frac{m v}{\sqrt{1 - \dfrac{v^2}{c^2}}} .
$$
Per velocità piccole rispetto a $c$ si ha $\gamma \approx 1$ e si ritrova la quantità di moto classica $m v$; per velocità vicine a $c$ la quantità di moto relativistica è molto maggiore di $m v$. Per esempio un elettrone con $v = 0{,}80\,c = 2{,}40 \cdot 10^{8}\,\mathrm{m/s}$ ha $\gamma \approx 1{,}67$, quindi
$$
p = 1{,}67 \cdot 9{,}11 \cdot 10^{-31} \cdot 2{,}40 \cdot 10^{8}\,\mathrm{kg\cdot m/s} \approx 3{,}64 \cdot 10^{-22}\,\mathrm{kg\cdot m/s} ,
$$
mentre $m v \approx 2{,}19 \cdot 10^{-22}\,\mathrm{kg\cdot m/s}$.

::grafico{f="x/sqrt(1-x^2);x" asintoti="x=1" xmin=0 xmax=1.2 ymin=0 ymax=6 nomi="β,p" legenda="\gamma\beta;\beta" titolo="Quantità di moto in unità di $mc$ in funzione di $\beta$: la quantità di moto relativistica $\gamma m v$ coincide con $m v$ per $\beta$ piccolo e tende a $+\infty$ per $\beta \to 1$"}

:::

:::osservazione{#perche-gamma-mv titolo="Perché la quantità di moto cambia forma"}
In meccanica classica la quantità di moto totale di un sistema isolato si conserva in ogni sistema inerziale. Se si calcolano le velocità con la composizione relativistica delle velocità, la somma delle quantità $m v$ prima e dopo un urto risulta uguale in un sistema di riferimento e diversa in un altro. La grandezza $\gamma m v$ è invece conservata in tutti i sistemi inerziali, come richiede il primo postulato di Einstein, perciò è questa la quantità di moto della relatività ristretta.
:::

:::attenzione
In alcuni libri il prodotto $\gamma m$ si chiama "massa relativistica", e si dice che la massa cresce con la velocità. In questo argomento la massa $m$ è sempre la massa a riposo, che non dipende dalla velocità. Un elettrone ha massa $9{,}11 \cdot 10^{-31}\,\mathrm{kg}$ sia fermo sia a $0{,}80\,c$; con la velocità cresce il fattore $\gamma$ che compare nella quantità di moto e nell'energia.
:::

:::osservazione{#secondo-principio-relativistico titolo="Secondo principio della dinamica in relatività"}
Il secondo principio della dinamica resta valido se si scrive con la quantità di moto relativistica: la forza media che agisce su una particella nell'intervallo $\Delta t$ è
$$
\vec{F} = \frac{\Delta \vec{p}}{\Delta t} .
$$
La forma $\vec{F} = m \vec{a}$ vale invece solo per $v \ll c$. Per esempio, se un elettrone parte da fermo e subisce per $10\,\mathrm{ns}$ una forza costante di $1{,}6 \cdot 10^{-13}\,\mathrm{N}$, la sua quantità di moto finale è $p = F\,\Delta t = 1{,}6 \cdot 10^{-21}\,\mathrm{kg\cdot m/s}$, come in meccanica classica; la velocità corrispondente si calcola con la relazione tra energia e quantità di moto.
:::

## Energia totale ed energia a riposo

:::definizione{#energia-totale titolo="Energia totale ed energia a riposo"}
L'**energia totale** di una particella di massa $m$ che si muove con velocità $v$ è
$$
E = \gamma\, m c^2 .
$$
Per $v = 0$ si ha $\gamma = 1$, e l'energia totale si riduce all'**energia a riposo**
$$
E_0 = m c^2 ,
$$
che la particella possiede anche quando è ferma. Poiché $\gamma > 1$ per $v > 0$, l'energia totale di una particella in moto è maggiore della sua energia a riposo. Per esempio un protone ha energia a riposo
$$
E_0 = 1{,}67 \cdot 10^{-27} \cdot \left( 3{,}00 \cdot 10^{8} \right)^2\,\mathrm{J} \approx 1{,}50 \cdot 10^{-10}\,\mathrm{J} ,
$$
e a $v = 0{,}60\,c$, dove $\gamma = 1{,}25$, ha energia totale $E = 1{,}25 \cdot 1{,}50 \cdot 10^{-10}\,\mathrm{J} \approx 1{,}88 \cdot 10^{-10}\,\mathrm{J}$.
:::

:::teorema{#equivalenza-massa-energia titolo="Equivalenza tra massa ed energia"}
A ogni massa $m$ corrisponde l'energia a riposo $E_0 = m c^2$, e viceversa. Se un sistema fermo cede l'energia $\Delta E$ all'esterno, per esempio sotto forma di radiazione o di calore, la sua massa diminuisce di
$$
\Delta m = \frac{\Delta E}{c^2} .
$$
È un risultato di Einstein, che qui si assume senza dimostrazione ed è confermato dalle misure di fisica nucleare e delle particelle. Il fattore $c^2 = 9{,}00 \cdot 10^{16}\,\mathrm{m^2/s^2}$ è molto grande, quindi a una massa piccola corrisponde un'energia enorme. Per esempio a $1\,\mathrm{g}$ di materia corrisponde l'energia $10^{-3} \cdot 9{,}00 \cdot 10^{16}\,\mathrm{J} = 9{,}0 \cdot 10^{13}\,\mathrm{J}$, che una centrale elettrica da $1\,\mathrm{GW}$ produce in $9{,}0 \cdot 10^{4}\,\mathrm{s}$, cioè in circa $25$ ore. Nei processi chimici e termici la variazione di massa è invece troppo piccola per essere misurata.
:::

## Energia cinetica relativistica

:::definizione{#energia-cinetica-relativistica titolo="Energia cinetica relativistica"}
L'**energia cinetica** $K$ di una particella è la differenza tra l'energia totale e l'energia a riposo:
$$
K = E - E_0 = (\gamma - 1)\, m c^2 .
$$
Si indica con $W$ il lavoro della forza risultante che agisce sulla particella. Il teorema dell'energia cinetica $W = \Delta K$ resta valido con questa espressione di $K$. Se una particella di carica $q$ parte da ferma e attraversa la differenza di potenziale $\Delta V$, il lavoro della forza elettrica è $|q|\,\Delta V$, quindi $K = |q|\,\Delta V$ e $\gamma = 1 + \dfrac{K}{m c^2}$. Per un protone a $v = 0{,}60\,c$ si ha $K = 0{,}25 \cdot 1{,}50 \cdot 10^{-10}\,\mathrm{J} \approx 3{,}8 \cdot 10^{-11}\,\mathrm{J}$, mentre la formula classica dà $\dfrac{1}{2} m v^2 = \dfrac{1}{2} \cdot 0{,}36\, m c^2 \approx 2{,}7 \cdot 10^{-11}\,\mathrm{J}$, cioè il $28\%$ in meno.
:::

:::richiamo{titolo="Approssimazione con il differenziale"}
Se $f$ è derivabile in $x_0$, allora per $h$ piccolo vale $f(x_0 + h) \approx f(x_0) + f'(x_0)\,h$, con un errore che, diviso per $h$, tende a $0$ per $h \to 0$. Si rimanda all'argomento sulle derivate di Matematica 5° anno.
:::

::::teorema{#limite-classico-energia-cinetica titolo="Limite classico dell'energia cinetica"}
Per $v \ll c$ l'energia cinetica relativistica è approssimata dall'energia cinetica classica:
$$
K = (\gamma - 1)\, m c^2 \approx \frac{1}{2} m v^2 .
$$
La meccanica classica è quindi il caso limite della relatività per velocità piccole rispetto a $c$, e le sue formule si possono usare finché $\beta$ è piccolo. Per un elettrone con $v = 0{,}10\,c$ la formula relativistica dà $K \approx 2{,}574\,\mathrm{keV}$ e quella classica $2{,}555\,\mathrm{keV}$, con una differenza inferiore all'$1\%$.

:::dimostrazione
L'idea è approssimare $\gamma$ con il differenziale. Si pone $x = \dfrac{v^2}{c^2}$, che è piccolo perché $v \ll c$, così che $\gamma = (1 - x)^{-\frac{1}{2}}$. Si considera la funzione $f(x) = (1 - x)^{-\frac{1}{2}}$. Per la regola della funzione composta la sua derivata è
$$
f'(x) = -\frac{1}{2}\,(1 - x)^{-\frac{3}{2}} \cdot (-1) = \frac{1}{2}\,(1 - x)^{-\frac{3}{2}} ,
$$
quindi $f(0) = 1$ e $f'(0) = \dfrac{1}{2}$. Per l'**approssimazione con il differenziale** in $x_0 = 0$, per $x$ piccolo vale
$$
(1 - x)^{-\frac{1}{2}} \approx 1 + \frac{x}{2} .
$$
Sostituendo $x = \dfrac{v^2}{c^2}$ si ottiene $\gamma \approx 1 + \dfrac{v^2}{2 c^2}$, perciò $\gamma - 1 \approx \dfrac{v^2}{2 c^2}$ e
$$
K = (\gamma - 1)\, m c^2 \approx \frac{v^2}{2 c^2}\, m c^2 = \frac{1}{2} m v^2 .
$$
:::
::::

::grafico{f="1/sqrt(1-x^2)-1;x^2/2" asintoti="x=1" xmin=0 xmax=1.2 ymin=0 ymax=4 nomi="β,K" legenda="\gamma - 1;\dfrac{\beta^2}{2}" titolo="Energia cinetica in unità di $mc^2$: la formula relativistica $(\gamma - 1)\,mc^2$ e quella classica $\dfrac{1}{2} m v^2$ quasi coincidono per $\beta < 0{,}3$ e si separano per velocità maggiori"}

## Unità di misura della fisica delle particelle

:::definizione{#elettronvolt-mev titolo="Elettronvolt, MeV e unità derivate"}
L'**elettronvolt** è l'energia cinetica che acquista una particella con la carica $e$ quando attraversa la differenza di potenziale di $1\,\mathrm{V}$:
$$
1\,\mathrm{eV} = 1{,}60 \cdot 10^{-19}\,\mathrm{J} ,
\qquad
1\,\mathrm{keV} = 10^{3}\,\mathrm{eV} ,
\qquad
1\,\mathrm{MeV} = 10^{6}\,\mathrm{eV} = 1{,}60 \cdot 10^{-13}\,\mathrm{J} .
$$
Un'energia divisa per $c^2$ è una massa, come mostra la relazione $E_0 = m c^2$, e un'energia divisa per $c$ è una quantità di moto, perché $\mathrm{J}/(\mathrm{m/s}) = \mathrm{kg\cdot m/s}$. Perciò si usano le unità di massa e di quantità di moto
$$
1\,\mathrm{MeV}/c^2 = \frac{1{,}60 \cdot 10^{-13}}{\left( 3{,}00 \cdot 10^{8} \right)^2}\,\mathrm{kg} \approx 1{,}78 \cdot 10^{-30}\,\mathrm{kg} ,
\qquad
1\,\mathrm{MeV}/c = \frac{1{,}60 \cdot 10^{-13}}{3{,}00 \cdot 10^{8}}\,\mathrm{kg\cdot m/s} \approx 5{,}33 \cdot 10^{-22}\,\mathrm{kg\cdot m/s} .
$$
Con queste unità le formule si usano senza convertire in joule: una particella di massa $938\,\mathrm{MeV}/c^2$ ha energia a riposo $938\,\mathrm{MeV}$. Con i valori più precisi delle costanti, l'elettrone ha $m_e c^2 = 0{,}511\,\mathrm{MeV}$ e il protone $m_p c^2 = 938\,\mathrm{MeV}$; con i valori arrotondati $m_e = 9{,}11 \cdot 10^{-31}\,\mathrm{kg}$ e $c = 3{,}00 \cdot 10^{8}\,\mathrm{m/s}$ si ottiene $0{,}512\,\mathrm{MeV}$.
:::

:::esempio{titolo="Energia di un protone in MeV"}
Un protone si muove a $v = 0{,}60\,c$, quindi $\gamma = 1{,}25$. Con $m_p c^2 = 938\,\mathrm{MeV}$ si ottiene
$$
E = 1{,}25 \cdot 938\,\mathrm{MeV} \approx 1{,}17 \cdot 10^{3}\,\mathrm{MeV} ,
\qquad
K = 0{,}25 \cdot 938\,\mathrm{MeV} \approx 235\,\mathrm{MeV} ,
$$
e la quantità di moto è $p = \gamma\, m\, v = \gamma \beta\, m c = 1{,}25 \cdot 0{,}60 \cdot 938\,\mathrm{MeV}/c \approx 704\,\mathrm{MeV}/c$. Gli stessi valori in joule sono quelli della definizione di energia totale, divisi per $1{,}60 \cdot 10^{-13}\,\mathrm{J/MeV}$.
:::

## Energia e quantità di moto

::::teorema{#relazione-energia-quantita-di-moto titolo="Relazione tra energia e quantità di moto"}
Per una particella di massa $m$, energia totale $E$ e quantità di moto di modulo $p$ vale
$$
E^2 = p^2 c^2 + m^2 c^4 .
$$
La relazione lega $E$ e $p$ senza passare per la velocità. Le tre grandezze $E$, $pc$ e $m c^2$ si misurano tutte in $\mathrm{MeV}$ e formano un triangolo rettangolo con ipotenusa $E$. Per esempio un protone con $K = 500\,\mathrm{MeV}$ ha $E = 938 + 500 = 1438\,\mathrm{MeV}$, quindi
$$
p c = \sqrt{E^2 - m^2 c^4} = \sqrt{1438^2 - 938^2}\,\mathrm{MeV} \approx 1{,}09 \cdot 10^{3}\,\mathrm{MeV} ,
$$
cioè $p \approx 1{,}09 \cdot 10^{3}\,\mathrm{MeV}/c$.

::grafico{assi=0 uguale=1 linee="0,0 3.127,0 3.127,3.633 0,0;2.927,0 2.927,0.2 3.127,0.2" etichette="1.3,-0.4,mc² = 938 MeV;3.3,1.75,pc ≈ 1090 MeV;0.55,2.15,E = 1438 MeV" xmin=-0.5 xmax=5.5 ymin=-0.8 ymax=4 legenda=0 titolo="Le grandezze $mc^2$, $pc$ ed $E$ di un protone con $K = 500\,\mathrm{MeV}$ formano un triangolo rettangolo, perché $E^2 = p^2 c^2 + m^2 c^4$"}

:::dimostrazione
Si calcola $E^2 - p^2 c^2$ con le definizioni $E = \gamma m c^2$ e $p = \gamma m v$:
$$
\begin{aligned}
E^2 - p^2 c^2 &= \gamma^2 m^2 c^4 - \gamma^2 m^2 v^2 c^2 \\[6pt]
&= \gamma^2 m^2 c^4 \left( 1 - \frac{v^2}{c^2} \right) .
\end{aligned}
$$
Per la definizione del fattore di Lorentz si ha $\gamma^2 = \dfrac{1}{1 - \frac{v^2}{c^2}}$, quindi $\gamma^2 \left( 1 - \dfrac{v^2}{c^2} \right) = 1$. Perciò $E^2 - p^2 c^2 = m^2 c^4$, e portando $p^2 c^2$ a destra si ottiene la tesi.
:::
::::

:::osservazione{#velocita-da-energia titolo="Velocità a partire da energia e quantità di moto"}
Dividendo $p = \gamma m v$ per $E = \gamma m c^2$ il fattore $\gamma m$ si semplifica, e si ottiene
$$
\frac{p}{E} = \frac{v}{c^2} ,
\qquad \text{cioè} \qquad
\beta = \frac{v}{c} = \frac{p c}{E} .
$$
La formula dà la velocità quando sono note $E$ e $pc$. Per il protone con $K = 500\,\mathrm{MeV}$ si ha $\beta = \dfrac{1090}{1438} \approx 0{,}758$. Per l'elettrone che subisce la forza costante del secondo principio relativistico, $p = 1{,}6 \cdot 10^{-21}\,\mathrm{kg\cdot m/s}$ e $m c = 2{,}73 \cdot 10^{-22}\,\mathrm{kg\cdot m/s}$, quindi $\dfrac{p}{mc} \approx 5{,}85$ e
$$
\beta = \frac{p c}{\sqrt{p^2 c^2 + m^2 c^4}} = \frac{5{,}85}{\sqrt{5{,}85^2 + 1}} \approx 0{,}986 .
$$
La formula classica $v = \dfrac{p}{m}$ darebbe $1{,}76 \cdot 10^{9}\,\mathrm{m/s}$, un valore maggiore di $c$.
:::

::::teorema{#particelle-massa-nulla titolo="Particelle di massa nulla"}
Una particella di massa nulla ha energia e quantità di moto legate da
$$
E = p c ,
$$
e si muove con velocità $c$ in ogni sistema di riferimento inerziale. La particella di massa nulla più nota è il **fotone**, il quanto di energia della luce, che si studia nell'argomento sul corpo nero, l'effetto fotoelettrico e l'effetto Compton. Per esempio un fotone di luce visibile con energia $E = 2{,}0\,\mathrm{eV}$ ha quantità di moto
$$
p = \frac{E}{c} = \frac{2{,}0 \cdot 1{,}60 \cdot 10^{-19}}{3{,}00 \cdot 10^{8}}\,\mathrm{kg\cdot m/s} \approx 1{,}1 \cdot 10^{-27}\,\mathrm{kg\cdot m/s} .
$$

:::dimostrazione
Nella relazione tra energia e quantità di moto si pone $m = 0$ e si ottiene $E^2 = p^2 c^2$. Poiché $E$ e $p$ sono positivi, $E = pc$. Per la formula della velocità a partire da energia e quantità di moto si ha allora $\beta = \dfrac{p c}{E} = 1$, cioè $v = c$.
:::
::::

## La velocità della luce come velocità limite

::::teorema{#velocita-limite titolo="La velocità della luce come velocità limite"}
Una particella di massa $m > 0$ ha velocità minore di $c$ qualunque sia l'energia che riceve. Per portarla a una velocità sempre più vicina a $c$ serve un'energia cinetica che cresce senza limite, perché
$$
\lim_{v \to c^-} (\gamma - 1)\, m c^2 = +\infty .
$$
Per esempio, per portare un protone da fermo a $0{,}90\,c$, $0{,}99\,c$ e $0{,}999\,c$ servono rispettivamente le energie cinetiche
$$
K \approx 1{,}21 \cdot 10^{3}\,\mathrm{MeV} ,
\qquad
K \approx 5{,}71 \cdot 10^{3}\,\mathrm{MeV} ,
\qquad
K \approx 2{,}00 \cdot 10^{4}\,\mathrm{MeV} ,
$$
con $\gamma \approx 2{,}29$, $7{,}09$ e $22{,}4$. Ogni cifra $9$ in più nella velocità richiede un'energia più che tripla.

:::dimostrazione
Per $v \to c^-$ il radicando $1 - \dfrac{v^2}{c^2}$ tende a $0$ restando positivo, quindi $\sqrt{1 - \dfrac{v^2}{c^2}} \to 0^+$ e $\gamma \to +\infty$. Poiché $m c^2$ è una costante positiva, anche $K = (\gamma - 1)\, m c^2$ tende a $+\infty$. Una particella che riceve un'energia finita $K$ ha quindi $\gamma = 1 + \dfrac{K}{m c^2}$ finito, e perciò $v < c$.
:::
::::

:::osservazione{#acceleratori titolo="Velocità ed energia negli acceleratori"}
Negli acceleratori di particelle i protoni e gli elettroni ricevono energie cinetiche molto maggiori della loro energia a riposo, ma la loro velocità resta minore di $c$. Un elettrone con $K = 4{,}50\,\mathrm{MeV}$ ha $\gamma = 1 + \dfrac{4{,}50}{0{,}511} \approx 9{,}81$ e $\beta = \sqrt{1 - \dfrac{1}{\gamma^2}} \approx 0{,}995$; raddoppiando l'energia la velocità cresce di meno dello $0{,}5\%$. Per questo motivo, ad alte energie, l'energia ricevuta fa crescere soprattutto $\gamma$, e quindi la quantità di moto, mentre la velocità resta quasi uguale a $c$.
:::

## Conservazione dell'energia e della quantità di moto

:::teorema{#conservazione-energia-quantita-di-moto titolo="Conservazione dell'energia totale e della quantità di moto"}
In un sistema isolato di particelle l'energia totale $\sum E = \sum \gamma m c^2$ e la quantità di moto totale $\sum \vec{p} = \sum \gamma m \vec{v}$ si conservano, in ogni sistema di riferimento inerziale. È una legge sperimentale, verificata in tutti gli urti e i decadimenti osservati, anche quando le particelle cambiano natura. Nei problemi si scrive l'uguaglianza tra l'energia totale prima e dopo il processo, e la stessa uguaglianza per ogni componente della quantità di moto. Le energie totali comprendono le energie a riposo, perciò la legge tiene conto anche della trasformazione di energia cinetica in massa e viceversa.
:::

:::attenzione
In relatività la somma delle masse delle particelle non si conserva. Se un nucleo fermo di massa $M$ si divide in due frammenti di masse $m_1$ e $m_2$ che si allontanano, la conservazione dell'energia dà $M c^2 = \gamma_1 m_1 c^2 + \gamma_2 m_2 c^2$, e poiché $\gamma_1 > 1$ e $\gamma_2 > 1$ si ottiene $m_1 + m_2 < M$. La differenza di massa è diventata energia cinetica dei frammenti.
:::

:::esempio{#urto-anelastico-relativistico titolo="Urto completamente anelastico"}
Due corpi uguali di massa $m$ si muovono uno verso l'altro sulla stessa retta, con velocità $0{,}60\,c$ e $-0{,}60\,c$, e dopo l'urto restano uniti. La quantità di moto totale è nulla, quindi il corpo finale è fermo e ha energia totale uguale alla sua energia a riposo $M c^2$. Con $\gamma = 1{,}25$ la conservazione dell'energia dà
$$
M c^2 = 2 \gamma m c^2
\qquad \Longrightarrow \qquad
M = 2 \cdot 1{,}25\, m = 2{,}5\, m .
$$
La massa finale è maggiore di $2m$. L'energia cinetica iniziale $2 (\gamma - 1)\, m c^2 = 0{,}50\, m c^2$ si è trasformata nell'aumento dell'energia a riposo, $(M - 2m)\, c^2 = 0{,}50\, m c^2$.
:::

::::teorema{#decadimento-due-corpi titolo="Decadimento di una particella ferma in due particelle"}
Una particella ferma di massa $M$ decade in due particelle di masse $m_1$ e $m_2$, con $M > m_1 + m_2$. Allora le due particelle si muovono in versi opposti con quantità di moto dello stesso modulo $p$, e l'energia totale della prima è
$$
E_1 = \frac{M^2 + m_1^2 - m_2^2}{2M}\, c^2 ,
$$
mentre per la seconda si scambiano $m_1$ e $m_2$. Le energie delle due particelle sono quindi determinate dalle sole masse. Per esempio un pione fermo, con energia a riposo $139{,}6\,\mathrm{MeV}$, decade in un muone, con $105{,}7\,\mathrm{MeV}$, e in un neutrino di massa trascurabile; il muone ha energia
$$
E_1 = \frac{139{,}6^2 + 105{,}7^2}{2 \cdot 139{,}6}\,\mathrm{MeV} \approx 109{,}8\,\mathrm{MeV} ,
$$
cioè energia cinetica $109{,}8 - 105{,}7 = 4{,}1\,\mathrm{MeV}$.

::grafico{assi=0 uguale=1 vettori="0,0,2.6,0,p₁;0,0,-2.6,0,p₂" punti="0,0,pieno" etichette="-0.25,0.35,M;2.75,0.3,m₁;-3.1,0.3,m₂" xmin=-3.6 xmax=3.6 ymin=-0.8 ymax=1 legenda=0 titolo="La particella ferma di massa $M$ decade in due particelle con quantità di moto opposte, $\vec{p}_1 = -\vec{p}_2$"}

:::dimostrazione
Prima del decadimento la quantità di moto è nulla, quindi dopo il decadimento $\vec{p}_1 + \vec{p}_2 = \vec{0}$. Le due quantità di moto sono perciò opposte e hanno lo stesso modulo $p$. L'energia totale prima del decadimento è $M c^2$, quindi
$$
E_1 + E_2 = M c^2 .
$$
Si scrive la **relazione tra energia e quantità di moto** per le due particelle, $E_1^2 = p^2 c^2 + m_1^2 c^4$ e $E_2^2 = p^2 c^2 + m_2^2 c^4$, e si sottraggono membro a membro. Il termine $p^2 c^2$ si semplifica e si ottiene
$$
E_1^2 - E_2^2 = \left( m_1^2 - m_2^2 \right) c^4 .
$$
Il primo membro è una differenza di quadrati, uguale a $(E_1 - E_2)(E_1 + E_2) = (E_1 - E_2)\, M c^2$. Dividendo per $M c^2$ si ricava $E_1 - E_2 = \dfrac{m_1^2 - m_2^2}{M}\, c^2$. Sommando questa uguaglianza con $E_1 + E_2 = M c^2$ si ottiene
$$
2 E_1 = M c^2 + \frac{m_1^2 - m_2^2}{M}\, c^2 = \frac{M^2 + m_1^2 - m_2^2}{M}\, c^2 ,
$$
e dividendo per $2$ si ottiene la tesi. La condizione $M > m_1 + m_2$ è necessaria, perché ogni particella ha energia totale maggiore o uguale alla sua energia a riposo, quindi $M c^2 = E_1 + E_2 \geq (m_1 + m_2)\, c^2$.
:::
::::

## Creazione e annichilazione di coppie

:::definizione{#antiparticella titolo="Antiparticella"}
A ogni particella corrisponde un'**antiparticella** con la stessa massa e carica elettrica opposta. L'antiparticella dell'elettrone è il **positrone**, che ha massa $m_e$ e carica $+e$. Una particella e la sua antiparticella possono nascere insieme da energia, nella creazione di coppie, oppure scomparire insieme trasformandosi in fotoni, nell'annichilazione. In entrambi i processi la carica totale si conserva, perché la coppia ha carica totale nulla, come i fotoni. Per esempio l'energia a riposo di una coppia elettrone-positrone è $2\, m_e c^2 = 1{,}022\,\mathrm{MeV}$.
:::

:::esempio{#annichilazione titolo="Annichilazione di un elettrone e di un positrone fermi"}
Un elettrone e un positrone, entrambi fermi, si annichilano. La quantità di moto iniziale è nulla e l'energia iniziale è $2\, m_e c^2 = 1{,}022\,\mathrm{MeV}$. Un solo fotone avrebbe quantità di moto $p = \dfrac{E}{c}$ diversa da zero, quindi la quantità di moto non si conserverebbe. Si producono perciò due fotoni con quantità di moto opposte, che hanno la stessa energia perché $E = pc$:
$$
E_\gamma = m_e c^2 = 0{,}511\,\mathrm{MeV} .
$$
Su questi due fotoni, emessi in versi opposti, si basa la tomografia a emissione di positroni (PET) della diagnostica medica.
:::

:::osservazione{#creazione-di-coppie titolo="Creazione di una coppia da un fotone"}
Un fotone di energia sufficiente, passando vicino a un nucleo, può trasformarsi in una coppia elettrone-positrone. Il processo è impossibile per un fotone isolato nel vuoto. Infatti per ciascuna particella della coppia vale $E_i = \sqrt{p_i^2 c^2 + m_e^2 c^4} > p_i c$, quindi la coppia ha energia totale maggiore di $(p_1 + p_2)\, c$, che a sua volta è maggiore o uguale al modulo della quantità di moto totale moltiplicato per $c$. Il fotone ha invece energia esattamente uguale a $pc$, perciò energia e quantità di moto non possono conservarsi entrambe. Il nucleo assorbe parte della quantità di moto e, essendo molto pesante, riceve un'energia cinetica trascurabile. L'energia minima del fotone è quindi l'energia a riposo della coppia, $1{,}022\,\mathrm{MeV}$; un fotone di $3{,}00\,\mathrm{MeV}$ produce una coppia con energia cinetica totale $3{,}00 - 1{,}022 \approx 1{,}98\,\mathrm{MeV}$.

::grafico{assi=0 uguale=1 curve="t,0.15*sin(6*t),-4,-0.35" vettori="0,0,2.6,1.3,e⁻;0,0,2.6,-1.1,e⁺" punti="0,0,pieno" etichette="-0.6,-0.5,nucleo;-3.6,0.45,fotone" xmin=-4.3 xmax=3.6 ymin=-1.6 ymax=1.8 legenda=0 titolo="Un fotone che passa vicino a un nucleo si trasforma in un elettrone e in un positrone; il nucleo riceve parte della quantità di moto"}

:::

## Energia di legame dei nuclei

:::definizione{#unita-di-massa-atomica titolo="Unità di massa atomica"}
Le masse dei nuclei e degli atomi si misurano in **unità di massa atomica**, pari a un dodicesimo della massa di un atomo di carbonio-12:
$$
1\,\mathrm{u} = 1{,}6605 \cdot 10^{-27}\,\mathrm{kg} .
$$
Con i valori più precisi delle costanti, l'energia a riposo corrispondente è $1\,\mathrm{u} \cdot c^2 = 931{,}5\,\mathrm{MeV}$, quindi una differenza di massa di $0{,}001\,\mathrm{u}$ equivale a $0{,}9315\,\mathrm{MeV}$. Il protone ha massa $m_p = 1{,}007276\,\mathrm{u}$ e il neutrone $m_n = 1{,}008665\,\mathrm{u}$. Un nucleo con $Z$ protoni e $N$ neutroni ha **numero di massa** $A = Z + N$; i protoni e i neutroni si chiamano insieme **nucleoni**.
:::

:::definizione{#difetto-di-massa titolo="Difetto di massa ed energia di legame"}
Il **difetto di massa** di un nucleo con $Z$ protoni, $N$ neutroni e massa $m_{\text{nucleo}}$ è
$$
\Delta m = Z\, m_p + N\, m_n - m_{\text{nucleo}} .
$$
Un nucleo ha sempre massa minore della somma delle masse dei suoi nucleoni separati, quindi $\Delta m > 0$. L'**energia di legame** è $B = \Delta m\, c^2$: è l'energia che si deve fornire al nucleo per separarlo in tutti i suoi nucleoni, e anche l'energia liberata quando il nucleo si forma dai nucleoni. Il nucleo di elio-4, con $2$ protoni, $2$ neutroni e massa $4{,}001506\,\mathrm{u}$, ha
$$
\begin{aligned}
\Delta m &= (2 \cdot 1{,}007276 + 2 \cdot 1{,}008665 - 4{,}001506)\,\mathrm{u} = 0{,}030376\,\mathrm{u} , \\[6pt]
B &= 0{,}030376 \cdot 931{,}5\,\mathrm{MeV} \approx 28{,}3\,\mathrm{MeV} .
\end{aligned}
$$
:::

:::osservazione{#masse-atomiche titolo="Calcolo con le masse degli atomi"}
Le tabelle riportano di solito le masse degli atomi neutri, che comprendono gli elettroni. Nei calcoli dell'energia di legame si usa allora la massa dell'atomo di idrogeno, $m_{\text{H}} = 1{,}007825\,\mathrm{u}$, al posto di quella del protone. In questo modo gli $Z$ elettroni compaiono una volta in $Z\, m_{\text{H}}$ e una volta nella massa dell'atomo, e la loro massa si semplifica. Lo stesso accade nelle reazioni nucleari in cui il numero totale di elettroni degli atomi è uguale prima e dopo. L'energia di legame degli elettroni, di pochi $\mathrm{eV}$ o $\mathrm{keV}$, è trascurabile rispetto alle energie nucleari.
:::

:::definizione{#energia-di-legame-per-nucleone titolo="Energia di legame per nucleone"}
L'**energia di legame per nucleone** è il rapporto $\dfrac{B}{A}$ tra l'energia di legame e il numero di massa. Più è grande, più il nucleo è stabile. Per l'elio-4 si ha $\dfrac{B}{A} = \dfrac{28{,}3}{4}\,\mathrm{MeV} \approx 7{,}07\,\mathrm{MeV}$. Al variare di $A$ il rapporto cresce rapidamente nei nuclei leggeri, raggiunge il massimo di circa $8{,}8\,\mathrm{MeV}$ vicino al ferro-56 e diminuisce lentamente nei nuclei pesanti, fino a circa $7{,}6\,\mathrm{MeV}$ per l'uranio-235. Ne segue che si libera energia sia unendo due nuclei leggeri, nella **fusione**, sia dividendo un nucleo pesante in due nuclei medi, nella **fissione**, perché in entrambi i casi i nucleoni passano in nuclei con energia di legame per nucleone maggiore.

::grafico{linee="2,1.11 4,7.07 6,5.33 12,7.68 16,7.98 20,8.03 28,8.45 40,8.55 56,8.79 62,8.79 84,8.72 120,8.51 138,8.39 208,7.87 235,7.59" punti="4,7.07,pieno;56,8.79,pieno;235,7.59,pieno" etichette="15,6.2,⁴He;50,9.3,⁵⁶Fe;220,8.15,²³⁵U" vettori="20,4,70,4,fusione;230,4,150,4,fissione" xmin=0 xmax=250 ymin=0 ymax=10 nomi="A,MeV" legenda=0 titolo="Energia di legame per nucleone $\dfrac{B}{A}$, in MeV, di alcuni nuclei in funzione del numero di massa $A$: la fusione dei nuclei leggeri e la fissione di quelli pesanti portano verso il massimo vicino al ferro"}

:::

:::esempio{#fissione-fusione titolo="Energia liberata nella fissione e nella fusione"}
Nella fissione $\,^{235}\mathrm{U} + n \to {}^{141}\mathrm{Ba} + {}^{92}\mathrm{Kr} + 3n$ la massa degli atomi e dei neutroni prima della reazione è $236{,}052595\,\mathrm{u}$, e dopo è $235{,}866562\,\mathrm{u}$. La massa diminuisce di $0{,}186033\,\mathrm{u}$, quindi l'energia liberata è
$$
Q = 0{,}186033 \cdot 931{,}5\,\mathrm{MeV} \approx 173\,\mathrm{MeV} ,
$$
circa $0{,}73\,\mathrm{MeV}$ per ciascuno dei $236$ nucleoni iniziali. Nella fusione $\,^{2}\mathrm{H} + {}^{3}\mathrm{H} \to {}^{4}\mathrm{He} + n$ la massa diminuisce di $0{,}018883\,\mathrm{u}$ e si liberano $17{,}6\,\mathrm{MeV}$, circa $3{,}5\,\mathrm{MeV}$ per nucleone. L'energia liberata compare come energia cinetica dei prodotti. Una singola fissione libera un'energia maggiore, mentre la fusione libera più energia per unità di massa del combustibile.
:::

## Cenno alla relatività generale

:::teorema{#principio-di-equivalenza titolo="Principio di equivalenza"}
In una regione abbastanza piccola dello spazio e per un tempo abbastanza breve, gli effetti di un campo gravitazionale uniforme non si distinguono da quelli di un sistema di riferimento con accelerazione costante. È il postulato da cui Einstein partì per costruire la **relatività generale**, la teoria della gravitazione che estende la relatività ristretta ai sistemi accelerati. Per esempio, in una cabina chiusa lontana da ogni massa che accelera verso l'alto con $a = 9{,}81\,\mathrm{m/s^2}$, un oggetto lasciato cadere si muove verso il pavimento esattamente come sulla Terra; in una cabina in caduta libera nel campo terrestre gli oggetti galleggiano, come lontano da ogni massa.
:::

:::osservazione{#deflessione-della-luce titolo="Deflessione della luce"}
In una cabina che accelera verso l'alto, un raggio di luce che entra orizzontalmente da una parete arriva sulla parete opposta più in basso, perché nel frattempo la cabina è salita; per un osservatore nella cabina la traiettoria del raggio è curva. Per il principio di equivalenza la luce deve curvare anche in un campo gravitazionale. La relatività generale prevede che la luce di una stella che passa radente al Sole sia deviata di $1{,}75$ secondi d'arco. Durante l'eclissi totale del 1919 si misurarono le posizioni di stelle vicine al bordo del Sole oscurato e si confrontarono con quelle delle stesse stelle fotografate di notte, lontano dal Sole; lo spostamento misurato era in accordo con la previsione della relatività generale.

::grafico{assi=0 uguale=1 poligoni="0.800,0.000 0.773,0.207 0.693,0.400 0.566,0.566 0.400,0.693 0.207,0.773 0.000,0.800 -0.207,0.773 -0.400,0.693 -0.566,0.566 -0.693,0.400 -0.773,0.207 -0.800,0.000 -0.773,-0.207 -0.693,-0.400 -0.566,-0.566 -0.400,-0.693 -0.207,-0.773 0.000,-0.800 0.207,-0.773 0.400,-0.693 0.566,-0.566 0.693,-0.400 0.773,-0.207" curve="t,1.2-0.1*(t+sqrt(t^2+1)),-6,6" segmenti="6,-0.01,-6,2.38" punti="-6,1.19,pieno;-6,2.38,vuoto;6,-0.01,pieno" etichette="-6.1,0.75,stella;-6.4,2.75,posizione apparente;5.6,-0.45,Terra;-0.3,-0.15,Sole" xmin=-7 xmax=7 ymin=-1.2 ymax=3.2 legenda=0 titolo="La luce di una stella che passa vicino al Sole viene deviata: dalla Terra la stella si vede nella direzione del raggio che arriva, spostata rispetto alla posizione vera (angolo molto ingrandito)"}

:::

:::osservazione{#dilatazione-gravitazionale titolo="Dilatazione gravitazionale dei tempi e GPS"}
La relatività generale prevede che un orologio posto più in basso in un campo gravitazionale vada più piano di un orologio uguale posto più in alto. Vicino alla superficie terrestre, per un dislivello $h$ piccolo rispetto al raggio della Terra, la frazione di cui l'orologio più alto va più veloce è $\dfrac{g h}{c^2}$; per $h = 1000\,\mathrm{m}$ vale $\dfrac{9{,}81 \cdot 1000}{9{,}00 \cdot 10^{16}} \approx 1{,}1 \cdot 10^{-13}$. Gli orologi dei satelliti GPS, a circa $20\,200\,\mathrm{km}$ di quota, per l'effetto gravitazionale vanno avanti di circa $45\,\mu\mathrm{s}$ al giorno rispetto a quelli a terra, e per la dilatazione dei tempi della relatività ristretta, dovuta alla loro velocità di circa $3{,}9\,\mathrm{km/s}$, restano indietro di circa $7\,\mu\mathrm{s}$ al giorno. Il risultato netto è un anticipo di circa $38\,\mu\mathrm{s}$ al giorno, che il sistema corregge. Senza correzione la luce percorrerebbe in quel tempo $3{,}00 \cdot 10^{8} \cdot 38 \cdot 10^{-6}\,\mathrm{m} \approx 11\,\mathrm{km}$, e le posizioni calcolate avrebbero un errore che cresce di circa $11\,\mathrm{km}$ al giorno.
:::
