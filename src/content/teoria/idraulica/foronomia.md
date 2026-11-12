---
titolo: "Foronomia: efflusso da luci e stramazzi"
sommario: Efflusso da una luce a battente in parete sottile, vena contratta e coefficienti di efflusso, luci di grandi dimensioni, efflusso sotto una paratoia, luci rigurgitate, svuotamento di un serbatoio a livello variabile, stramazzi in parete sottile e in parete grossa, ugelli e potenza di un getto.
---

## Luci e vena contratta

La foronomia studia l'efflusso di un liquido da un'apertura praticata nella parete di un serbatoio o di un canale, con il carico di monte come unico dato idraulico del problema.

:::definizione{#luce titolo="Luce"}
Una **luce** è un'apertura praticata nella parete o nel fondo di un recipiente, attraverso la quale il liquido esce nell'atmosfera o in un altro recipiente. La luce si dice *a battente* quando il suo contorno è interamente sotto il pelo libero del liquido di monte, e *a stramazzo* quando il pelo libero taglia la luce, perciò il liquido esce con la superficie libera a contatto con l'atmosfera. La parete si dice *sottile* quando il suo spessore è minore di circa metà della dimensione minima della luce, dato che in questo caso il liquido tocca la parete soltanto lungo lo spigolo interno; si dice *grossa* quando lo spessore è maggiore, poiché allora la vena si riattacca alla parete. Una luce a battente è *libera* se scarica in atmosfera e *rigurgitata* se scarica sotto il pelo libero di un secondo recipiente.
:::

:::definizione{#vena-contratta titolo="Vena contratta"}
Le traiettorie che raggiungono la luce provengono da tutte le direzioni e non sono parallele all'asse della luce, quindi la vena continua a restringersi anche dopo essere uscita dalla parete. La sezione in cui il restringimento termina e le traiettorie diventano parallele si chiama **sezione contratta**. Le misure la collocano a una distanza dalla parete pari a circa metà della dimensione minima della luce. In quella sezione le traiettorie sono rettilinee e parallele, perciò la distribuzione delle pressioni sulla sezione è idrostatica; poiché il getto è circondato dall'atmosfera, la pressione relativa è nulla in ogni punto della sezione contratta. Su questi due fatti si basa il calcolo della portata.

::schema{solidi="-0.3,-0.4 5.3,-0.4 5.3,0 -0.3,0;-0.3,0 0,0 0,4.2 -0.3,4.2;5,0 5.3,0 5.3,1.15 5,1.15;5,1.65 5.3,1.65 5.3,4.2 5,4.2" acqua="0,0 5,0 5,3.8 0,3.8;5,1.15 5.6,1.24 7,1.2 7,1.5 5.6,1.56 5,1.65" pelo="0,5,3.8,pelo libero" tratteggi="5.6,0.9 5.6,1.9" frecce="6.1,1.37,6.9,1.37,v_c" quote="5 1.4,5 3.8,h,-0.7" etichette="6.5,2.1,sezione contratta" titolo="Luce a battente in parete sottile: la vena si contrae e raggiunge la sezione minima a circa mezza dimensione della luce dalla parete, dove la pressione relativa è nulla"}
:::

:::definizione{#coefficienti-di-efflusso titolo="Coefficienti di contrazione, di velocità e di portata"}
Siano $A$ l'area della luce, $A_c$ l'area della sezione contratta, $v_c$ la velocità media nella sezione contratta e $h$ il carico sul baricentro della luce, cioè la distanza del baricentro dal pelo libero di monte. Si definiscono il **coefficiente di contrazione**, il **coefficiente di velocità** e il **coefficiente di portata**
$$
C_c = \frac{A_c}{A} ,
\qquad
C_v = \frac{v_c}{\sqrt{2 g h}} ,
\qquad
\mu = C_c\,C_v .
$$
Il primo misura il restringimento della vena, il secondo la riduzione di velocità dovuta alla dissipazione nell'imbocco e il terzo riunisce i due effetti. Tutti e tre sono minori di $1$ e si ricavano da misure di laboratorio. I tre coefficienti sono legati dalla relazione $\mu = C_c C_v$, perciò noti due di essi il terzo segue, e una prova in cui si misurano la portata e il diametro della vena contratta determina anche $C_v$.
:::

## Portata di una luce di piccole dimensioni

:::richiamo{titolo="Teorema di Bernoulli per un fluido reale"}
Per una corrente in moto permanente di un fluido incomprimibile, fra due sezioni in cui le traiettorie sono rettilinee e parallele, con coefficiente di ragguaglio $\alpha = 1$, vale
$$
z_1 + \frac{p_1}{\gamma} + \frac{v_1^2}{2g} = z_2 + \frac{p_2}{\gamma} + \frac{v_2^2}{2g} + \Delta H ,
$$
dove $\Delta H \geq 0$ è la perdita di carico fra la sezione di monte e quella di valle. Si rimanda all'argomento sul teorema di Bernoulli e il carico totale.
:::

::::teorema{#portata-di-una-luce titolo="Portata di una luce a battente di piccole dimensioni"}
Sia una luce a battente di area $A$, praticata in una parete sottile verticale di un serbatoio a livello costante, che scarica in atmosfera; sia $h$ il carico sul baricentro della luce e si supponga la dimensione verticale della luce piccola rispetto ad $h$. Allora la portata effluente vale
$$
Q = \mu\,A\,\sqrt{2 g h} .
$$
La formula si usa nei due versi: con $\mu$ assunto da tabella dà la portata di una luce assegnata, e con la portata misurata dà il coefficiente della luce in prova. Per una luce circolare di diametro $D = 50\,\mathrm{mm}$ con $h = 1{,}80\,\mathrm{m}$ e $\mu = 0{,}61$ risultano $A = 1{,}96 \cdot 10^{-3}\,\mathrm{m^2}$, $\sqrt{2gh} = 5{,}94\,\mathrm{m/s}$ e $Q = 7{,}12\,\mathrm{L/s}$.

:::dimostrazione
L'idea è di scrivere il teorema di Bernoulli fra il pelo libero e la sezione contratta, dove la pressione relativa è nulla, e poi di passare dalla velocità alla portata attraverso i due coefficienti.

Si prenda come piano di riferimento delle quote il piano orizzontale passante per il baricentro della luce, e si considerino la sezione $1$ sul pelo libero del serbatoio e la sezione $2$ coincidente con la sezione contratta. Sulla sezione $1$ risulta $z_1 = h$, inoltre $p_1 = 0$ perché il pelo libero è a contatto con l'atmosfera e $v_1 = 0$ perché il livello è costante e l'area del serbatoio è molto maggiore di quella della luce; perciò il carico totale di monte vale $H_1 = h$. Nella sezione contratta la pressione relativa è nulla, come si è visto, e la luce è di piccole dimensioni, quindi si assume $z_2 = 0$ in tutti i suoi punti e la velocità uguale al valore medio $v_c$; ne segue $H_2 = \dfrac{v_c^2}{2g}$.

Il teorema di Bernoulli fra le due sezioni dà quindi
$$
h = \frac{v_c^2}{2g} + \Delta H .
$$
La perdita si esprime come frazione del carico ponendo $\Delta H = \left(1 - C_v^2\right) h$, con $0 < C_v < 1$, dato che $0 \leq \Delta H < h$. Sostituendo si ottiene $\dfrac{v_c^2}{2g} = C_v^2\,h$, cioè
$$
v_c = C_v\sqrt{2 g h} ,
$$
che è la definizione del coefficiente di velocità. Nella sezione contratta la velocità è normale alla sezione e uniforme su di essa, perciò la portata è il prodotto dell'area per la velocità:
$$
Q = A_c\,v_c = C_c A \cdot C_v \sqrt{2 g h} = \mu\,A\,\sqrt{2 g h} .
$$
:::
::::

:::osservazione{#valori-dei-coefficienti titolo="Valori sperimentali dei coefficienti"}
I tre coefficienti si ricavano da misure di laboratorio e dipendono dalla forma della luce, dal rapporto fra il carico e la dimensione della luce e dal numero di Reynolds. Per una luce circolare in parete sottile con spigolo vivo, e carico pari ad alcuni diametri, le misure danno $C_c$ fra $0{,}61$ e $0{,}64$, $C_v$ fra $0{,}96$ e $0{,}99$ e quindi $\mu$ fra $0{,}59$ e $0{,}63$; nei calcoli si assume $\mu = 0{,}61$ salvo indicazione diversa. Un imbocco raccordato sopprime la contrazione, perciò vale $C_c = 1$ e $\mu = C_v \approx 0{,}97$; un tubo additizionale sporgente all'interno del serbatoio accentua la contrazione e porta $\mu$ intorno a $0{,}50$. I valori si mantengono costanti finché il moto nella vena è turbolento, cioè per numeri di Reynolds nella sezione contratta superiori a circa $10^4$.
:::

:::osservazione{#traiettoria-del-getto titolo="Traiettoria del getto e misura del coefficiente di velocità"}
Oltre la sezione contratta il getto è soggetto al solo peso, quindi, trascurando la resistenza dell'aria, le sue particelle descrivono traiettorie paraboliche. Con l'origine nel centro della sezione contratta, l'asse $x$ orizzontale e l'asse $y$ diretto verso il basso, il moto è quello di un grave lanciato orizzontalmente con velocità $v_c$:
$$
\begin{cases}
x = v_c\,t \\[4pt]
y = \dfrac{1}{2}\,g\,t^2
\end{cases}
$$
Eliminando il tempo si ottiene $y = \dfrac{g\,x^2}{2\,v_c^2}$, quindi
$$
v_c = x\,\sqrt{\frac{g}{2\,y}} .
$$
Misurando le coordinate di un punto del getto si ricava perciò $v_c$ e, noto il carico, il coefficiente di velocità $C_v = \dfrac{v_c}{\sqrt{2gh}}$. Questa è la via più semplice per determinare $C_v$ in laboratorio, poiché non richiede di misurare il diametro della vena contratta.
:::

## Luci di grandi dimensioni

Quando l'altezza della luce è confrontabile con il carico, la velocità teorica $\sqrt{2gy}$ cambia in modo sensibile dal bordo superiore a quello inferiore, perciò la portata si ottiene integrando sull'altezza della luce.

::::teorema{#luce-di-grandi-dimensioni titolo="Portata di una luce rettangolare di grandi dimensioni"}
Sia una luce rettangolare a battente in parete sottile verticale, di larghezza $b$, con il bordo superiore alla profondità $h_1$ e quello inferiore alla profondità $h_2$ sotto il pelo libero di monte, e sia $\mu$ il suo coefficiente di portata. Allora
$$
Q = \frac{2}{3}\,\mu\,b\,\sqrt{2g}\,\left(h_2^{3/2} - h_1^{3/2}\right) .
$$
La formula si applica alle paratoie di fondo e alle luci alte degli sbarramenti, dove la formula per le luci piccole non è abbastanza accurata. Per $b = 1{,}00\,\mathrm{m}$, $h_1 = 0{,}50\,\mathrm{m}$, $h_2 = 1{,}50\,\mathrm{m}$ e $\mu = 0{,}62$ risulta $Q = 2{,}72\,\mathrm{m^3/s}$, contro i $2{,}75\,\mathrm{m^3/s}$ della formula per le luci piccole.

::schema{solidi="-3.3,-0.4 0.3,-0.4 0.3,0 -3.3,0;-3.3,0 -3,0 -3,4.4 -3.3,4.4;0,0 0.3,0 0.3,1 0,1;0,3 0.3,3 0.3,4.4 0,4.4" acqua="-3,0 0,0 0,4 -3,4" pelo="-3,0,4,pelo libero" frecce="0,3,0.6,3,;0,2.5,0.74,2.5,;0,2,0.85,2,;0,1.5,0.95,1.5,;0,1,1.04,1,√(2gy)" quote="0 3,0 4,h_1,-0.5;0 1,0 4,h_2,-1.4" titolo="Luce di grandi dimensioni: la velocità teorica $\sqrt{2 g y}$ cresce con la profondità $y$, perciò la portata si ottiene sommando i contributi delle strisce orizzontali"}

:::dimostrazione
L'idea è di sommare i contributi di tante strisce orizzontali, ciascuna così sottile da potersi trattare come una luce di piccole dimensioni.

Si consideri la striscia compresa fra le profondità $y$ e $y + dy$: la sua area è $b\,dy$ e il carico sul suo baricentro vale $y$ a meno di infinitesimi, quindi la portata che la attraversa è
$$
dQ = \mu\,b\,\sqrt{2 g y}\;dy .
$$
Il coefficiente $\mu$ si assume uguale per tutte le strisce, poiché la contrazione dipende dalla forma dello spigolo e non dalla profondità. Integrando fra le profondità dei due bordi si ottiene
$$
Q = \int_{h_1}^{h_2} \mu\,b\,\sqrt{2 g y}\;dy
= \mu\,b\,\sqrt{2g}\,\left[\frac{2}{3}\,y^{3/2}\right]_{h_1}^{h_2}
= \frac{2}{3}\,\mu\,b\,\sqrt{2g}\,\left(h_2^{3/2} - h_1^{3/2}\right) .
$$
:::
::::

:::osservazione{#errore-luce-piccola titolo="Quando una luce si può dire di piccole dimensioni"}
Siano $a = h_2 - h_1$ l'altezza della luce, $h_G = \dfrac{h_1 + h_2}{2}$ il carico sul baricentro e $\varepsilon = \dfrac{a}{2\,h_G}$. Il rapporto fra la portata esatta e quella data dalla formula per le luci piccole vale
$$
\frac{Q}{\mu\,b\,a\,\sqrt{2 g h_G}}
= \frac{(1 + \varepsilon)^{3/2} - (1 - \varepsilon)^{3/2}}{3\,\varepsilon}
= 1 - \frac{\varepsilon^2}{24} - \frac{\varepsilon^4}{128} - \dots
$$
perciò la formula per le luci piccole sovrastima la portata di circa $\dfrac{\varepsilon^2}{24}$. Per una luce alta metà del carico sul baricentro risulta $\varepsilon = 0{,}25$ e lo scarto è lo $0{,}26\%$; per una luce alta una volta e mezza il carico risulta $\varepsilon = 0{,}75$ e lo scarto supera il $2\%$. Finché l'altezza della luce resta minore del carico sul baricentro lo scarto si mantiene sotto l'uno per cento, e in questo campo si usa la formula più semplice.
:::

## Efflusso sotto una paratoia e luci rigurgitate

:::definizione{#efflusso-sotto-paratoia titolo="Efflusso a battente sotto una paratoia piana"}
Una paratoia piana verticale sollevata di $a$ sul fondo di un canale rettangolare largo $b$ lascia una luce di area $A = b\,a$. Quando a valle il pelo libero resta sotto il bordo inferiore della paratoia l'efflusso si dice **libero**, e la portata si scrive
$$
Q = \mu\,b\,a\,\sqrt{2 g h} ,
$$
dove $h$ è l'altezza d'acqua di monte misurata dal fondo e $\mu$ è il coefficiente di portata della paratoia, compreso fra $0{,}55$ e $0{,}60$ per $\dfrac{a}{h}$ minore di $\dfrac{1}{3}$. A valle della paratoia la vena si contrae in verticale e raggiunge l'altezza $h_c = C_c\,a$, con $C_c$ intorno a $0{,}61$: in quella sezione il numero di Froude è maggiore di uno, quindi la corrente è veloce, e il raccordo con la corrente di valle avviene attraverso un risalto idraulico. Si rimanda all'argomento sui profili di moto permanente e il risalto idraulico.

::schema{solidi="0,-0.35 6,-0.35 6,0 0,0;2.9,0.5 3.1,0.5 3.1,2.9 2.9,2.9" acqua="0,0 2.9,0 2.9,2.2 0,2.2;2.9,0 3.1,0.5 3.5,0.33 6,0.28 6,0 3.1,0" pelo="0,2.9,2.2,;3.9,5.1,0.28," tratteggi="3.5,0 3.5,0.75" frecce="3.9,0.14,4.8,0.14,v_c" etichette="5.3,0.6,h_c" quote="3 0,3 0.5,a,-0.45;0 0,0 2.2,h,-0.5" titolo="Efflusso libero sotto una paratoia piana: la vena si contrae fino all'altezza $h_c = C_c\,a$"}
:::

::::teorema{#luce-rigurgitata titolo="Portata di una luce rigurgitata"}
Sia una luce di area $A$ e coefficiente di portata $\mu$, praticata nella parete che separa due recipienti e interamente sommersa da entrambi i lati, e sia $\Delta h$ il dislivello fra i due peli liberi. Allora
$$
Q = \mu\,A\,\sqrt{2 g\,\Delta h} .
$$
La formula ha la stessa struttura di quella della luce libera, con il dislivello fra i peli liberi al posto del carico sul baricentro. Si applica alle luci di collegamento fra vasche, alle paratoie annegate e ai fori di comunicazione fra bacini.

::schema{solidi="-0.35,-0.4 9.35,-0.4 9.35,0 -0.35,0;-0.35,0 0,0 0,3.6 -0.35,3.6;9,0 9.35,0 9.35,3.6 9,3.6;4.4,0 4.6,0 4.6,0.8 4.4,0.8;4.4,1.2 4.6,1.2 4.6,3.6 4.4,3.6" acqua="0,0 4.4,0 4.4,3 0,3;4.6,0 9,0 9,1.8 4.6,1.8;4.4,0.8 4.6,0.8 4.6,1.2 4.4,1.2" pelo="0,4.4,3,;4.6,9,1.8," tratteggi="4.6,3 7.6,3" frecce="4.1,1,5.2,1,v_c" quote="7 1.8,7 3,Δh,0.6" titolo="Luce rigurgitata: la portata dipende dal dislivello $\Delta h$ fra i due peli liberi"}

:::dimostrazione
Si scriva il teorema di Bernoulli fra un punto $1$ del pelo libero di monte e la sezione contratta $2$ della vena, presa poco oltre la luce, con il piano di riferimento passante per il baricentro della luce.

Nella sezione contratta le traiettorie sono rettilinee e parallele, perciò la distribuzione delle pressioni su quella sezione è idrostatica. La vena è immersa nel liquido di valle, che nell'intorno della luce è praticamente in quiete, quindi la pressione nella sezione contratta è quella idrostatica del recipiente di valle: indicato con $h_v$ il carico del pelo libero di valle sul baricentro della luce, risulta $\dfrac{p_2}{\gamma} = h_v$ e $z_2 = 0$. Indicando con $h_m$ il carico del pelo libero di monte, e procedendo come per la luce libera, il teorema di Bernoulli dà
$$
h_m = h_v + \frac{v_c^2}{2g} + \Delta H .
$$
Posto $\Delta h = h_m - h_v$ ed espressa la perdita come $\Delta H = \left(1 - C_v^2\right)\Delta h$, segue $v_c = C_v\sqrt{2 g\,\Delta h}$, quindi
$$
Q = A_c\,v_c = \mu\,A\,\sqrt{2 g\,\Delta h} .
$$
:::
::::

:::attenzione
Nella formula di una luce rigurgitata il carico è il *dislivello* fra i due peli liberi, non la profondità della luce sotto il pelo libero di monte.

Per due vasche con peli liberi a $4{,}00\,\mathrm{m}$ e a $2{,}50\,\mathrm{m}$ sopra il baricentro di una luce di area $A = 0{,}0314\,\mathrm{m^2}$ e coefficiente $\mu = 0{,}60$ risultano $\Delta h = 1{,}50\,\mathrm{m}$ e $Q = 102\,\mathrm{L/s}$. Usando $4{,}00\,\mathrm{m}$ si otterrebbe $167\,\mathrm{L/s}$, che è la portata della stessa luce se scaricasse in atmosfera.
:::

## Svuotamento di un serbatoio a livello variabile

:::richiamo{titolo="Equazioni differenziali a variabili separabili"}
Sia $\dfrac{dh}{dt} = f(h)$ con $f$ continua e diversa da zero nell'intervallo considerato. Separando le variabili e integrando fra l'istante iniziale, in cui il livello vale $h_0$, e l'istante $t$, in cui vale $h$, si ottiene
$$
t = \int_{h_0}^{h} \frac{ds}{f(s)} .
$$
Si rimanda all'argomento sulle equazioni differenziali di Analisi 1.
:::

::::teorema{#svuotamento titolo="Tempo di svuotamento di un serbatoio prismatico"}
Sia un serbatoio prismatico di area in pianta $\Omega$ costante, non alimentato, con una luce di area $A$ e coefficiente di portata $\mu$ praticata sul fondo o in parete, e sia $h$ il carico sul baricentro della luce. Se il carico passa da $h_0$ a $h_1$, con $0 \leq h_1 < h_0$, il tempo necessario vale
$$
t = \frac{2\,\Omega\left(\sqrt{h_0} - \sqrt{h_1}\right)}{\mu\,A\,\sqrt{2g}} .
$$
Il tempo cresce in proporzione all'area in pianta del serbatoio e in proporzione inversa all'area della luce. Lo svuotamento completo si ottiene con $h_1 = 0$, e in tal caso $t = \dfrac{2\,\Omega\sqrt{h_0}}{\mu A \sqrt{2g}}$.

::schema{solidi="-0.3,0 0,0 0,4 -0.3,4;3,0 3.3,0 3.3,4 3,4;-0.3,-0.3 1.3,-0.3 1.3,0 -0.3,0;1.7,-0.3 3.3,-0.3 3.3,0 1.7,0" acqua="0,0 3,0 3,2.6 0,2.6;1.3,0 1.7,0 1.64,-1.4 1.36,-1.4" pelo="0,3,2.6," tratteggi="0,3.4 3,3.4" quote="3 0,3 2.6,h(t),0.6" etichette="1.5,3.6,h_0;1.5,-1.75,Q = μA√(2gh)" titolo="Svuotamento a livello variabile: il carico sulla luce diminuisce nel tempo e con esso la portata effluente"}

:::dimostrazione
L'idea è di trattare il moto come permanente in ogni istante, perché il livello scende lentamente, e di scrivere il bilancio del volume contenuto nel serbatoio.

Il moto si dice *gradualmente variato*: a ogni istante la portata effluente si calcola con la formula della luce al carico $h$ di quell'istante, cioè $Q = \mu A \sqrt{2 g h}$. L'ipotesi è soddisfatta quando l'area della luce è molto minore dell'area in pianta del serbatoio, poiché allora la velocità con cui scende il pelo libero è trascurabile rispetto a quella nella luce, e il termine cinetico di monte resta nullo come nel caso del livello costante.

Nell'intervallo $dt$ esce dalla luce il volume $Q\,dt$ e il livello scende di $-dh$, con $dh < 0$. Il volume uscito è uguale a quello perduto dal serbatoio, perciò
$$
\Omega\,(-dh) = \mu\,A\,\sqrt{2 g h}\;dt .
$$
Si separano le variabili e si integra fra i due carichi:
$$
t = \frac{\Omega}{\mu A \sqrt{2g}}\int_{h_1}^{h_0} \frac{dh}{\sqrt{h}}
= \frac{\Omega}{\mu A \sqrt{2g}}\Big[\,2\sqrt{h}\,\Big]_{h_1}^{h_0}
= \frac{2\,\Omega\left(\sqrt{h_0} - \sqrt{h_1}\right)}{\mu A \sqrt{2g}} .
$$
:::
::::

:::osservazione{#portata-media-svuotamento titolo="Portata media durante lo svuotamento"}
Dal teorema segue che la portata media nell'intervallo di svuotamento è la media aritmetica delle portate iniziale e finale:
$$
Q_m = \frac{\Omega\left(h_0 - h_1\right)}{t}
= \frac{\mu A \sqrt{2g}\left(h_0 - h_1\right)}{2\left(\sqrt{h_0} - \sqrt{h_1}\right)}
= \frac{\mu A \sqrt{2g}\left(\sqrt{h_0} + \sqrt{h_1}\right)}{2}
= \frac{Q_0 + Q_1}{2} ,
$$
dove si è usato $h_0 - h_1 = \left(\sqrt{h_0} - \sqrt{h_1}\right)\left(\sqrt{h_0} + \sqrt{h_1}\right)$. Per lo svuotamento completo risulta $Q_m = \dfrac{Q_0}{2}$, quindi il tempo è il doppio di quello che occorrerebbe se la portata si mantenesse al valore iniziale. La relazione serve come controllo di un calcolo di svuotamento, poiché il volume uscito diviso per il tempo deve dare la media delle due portate.
:::

:::esempio{titolo="Svuotamento di una vasca"}
Una vasca prismatica di area in pianta $\Omega = 10{,}0\,\mathrm{m^2}$ ha una luce di fondo circolare di diametro $D = 100\,\mathrm{mm}$ con $\mu = 0{,}60$, e il livello iniziale è $h_0 = 2{,}50\,\mathrm{m}$ sul baricentro della luce. Risultano $A = 7{,}85 \cdot 10^{-3}\,\mathrm{m^2}$ e $\mu A \sqrt{2g} = 0{,}0209\,\mathrm{m^{5/2}/s}$, quindi
$$
t = \frac{2 \cdot 10{,}0 \cdot \sqrt{2{,}50}}{0{,}0209}\,\mathrm{s} = 1515\,\mathrm{s} \approx 25\,\mathrm{min} .
$$
La portata iniziale è $Q_0 = 0{,}0209 \cdot \sqrt{2{,}50} = 33{,}0\,\mathrm{L/s}$ e la portata media è $16{,}5\,\mathrm{L/s}$, che coincide con il volume $25{,}0\,\mathrm{m^3}$ diviso per $1515\,\mathrm{s}$.
:::

:::osservazione{#travaso titolo="Travaso fra due serbatoi"}
Siano due serbatoi prismatici di aree in pianta $\Omega_1$ e $\Omega_2$, collegati da una luce sommersa di area $A$ e coefficiente $\mu$. Il dislivello $\Delta$ fra i peli liberi diminuisce perché il primo serbatoio si abbassa e il secondo si alza, quindi nell'intervallo $dt$
$$
-d\Delta = \frac{Q\,dt}{\Omega_1} + \frac{Q\,dt}{\Omega_2} ,
\qquad
Q = \mu A \sqrt{2 g\,\Delta} .
$$
Separando le variabili e integrando si ottiene
$$
t = \frac{2\left(\sqrt{\Delta_0} - \sqrt{\Delta_1}\right)}{\mu A \sqrt{2g}\left(\dfrac{1}{\Omega_1} + \dfrac{1}{\Omega_2}\right)} ,
$$
che si riduce alla formula di svuotamento quando il secondo serbatoio è tanto grande da mantenere il livello costante, cioè per $\Omega_2 \to \infty$. Il volume travasato perché il dislivello passi da $\Delta_0$ a $\Delta_1$ vale $V = \dfrac{\Omega_1\,\Omega_2}{\Omega_1 + \Omega_2}\left(\Delta_0 - \Delta_1\right)$: il primo serbatoio si abbassa di $\dfrac{V}{\Omega_1}$, il secondo si alza di $\dfrac{V}{\Omega_2}$ e la somma dei due spostamenti è la riduzione del dislivello.
:::

## Stramazzi in parete sottile

:::definizione{#stramazzo titolo="Stramazzo"}
Uno **stramazzo** è una luce il cui contorno superiore è aperto, cioè una soglia che il liquido supera con la superficie libera a contatto con l'atmosfera. Il bordo superiore della soglia si chiama *ciglio* e la vena che lo supera si chiama *lama stramazzante*. Il **carico sullo stramazzo** $h$ è l'altezza del pelo libero sopra il ciglio, misurata a monte, a una distanza di qualche carico dalla soglia, dove il pelo libero non è ancora abbassato dal richiamo della corrente. Lo stramazzo si dice *in parete sottile* quando la lama tocca la soglia soltanto lungo il ciglio; in questo caso la portata dipende dal solo carico, perciò lo stramazzo in parete sottile si impiega come misuratore di portata nei canali e nei laboratori.
:::

::::teorema{#stramazzo-rettangolare titolo="Portata di uno stramazzo rettangolare in parete sottile"}
Sia uno stramazzo rettangolare in parete sottile verticale, con ciglio orizzontale di larghezza $b$, carico $h$ e lama aerata, cioè con l'aria libera di entrare sotto la lama. Allora
$$
Q = \mu\,b\,h\,\sqrt{2 g h} ,
$$
con $\mu$ coefficiente di portata dello stramazzo, dell'ordine di $0{,}42$. Questa è la **formula di Bazin**, che si usa per calcolare la portata di una soglia assegnata e, nei laboratori, per misurare una portata leggendo il solo carico. Per $b = 1{,}00\,\mathrm{m}$, $h = 0{,}20\,\mathrm{m}$ e $\mu = 0{,}42$ risulta $Q = 0{,}166\,\mathrm{m^3/s}$.

::schema{solidi="0,-0.35 6,-0.35 6,0 0,0;2.9,0 3.1,0 3.1,1.5 2.9,1.5" acqua="0,0 2.9,0 2.9,2.1 0,2.1;2.9,2.1 3.3,2.0 3.7,1.6 3.95,1.05 4.1,0.35 4.15,0 3.65,0 3.6,0.55 3.4,1.1 3.2,1.42 3.1,1.5" pelo="0,2.9,2.1," tratteggi="2.0,2.1 4.6,2.1;2.0,1.5 4.6,1.5" quote="3 1.5,3 2.1,h,-0.55;3 0,3 1.5,p,-1.15" etichette="5.1,1.2,lama stramazzante" titolo="Stramazzo rettangolare in parete sottile: il carico $h$ si misura a monte del richiamo, sopra il ciglio della soglia di altezza $p$"}

:::dimostrazione
Si ripete il procedimento delle luci di grandi dimensioni, con il bordo superiore della luce sul pelo libero, cioè con $h_1 = 0$ e $h_2 = h$.

La striscia compresa fra le profondità $y$ e $y + dy$ sotto il pelo libero dà $dQ = \mu'\,b\,\sqrt{2 g y}\;dy$, quindi
$$
Q = \mu'\,b\,\sqrt{2g}\int_0^{h} \sqrt{y}\;dy
= \frac{2}{3}\,\mu'\,b\,\sqrt{2g}\;h^{3/2}
= \frac{2}{3}\,\mu'\,b\,h\,\sqrt{2 g h} ,
$$
e ponendo $\mu = \dfrac{2}{3}\,\mu'$ si ottiene la formula dell'enunciato. Il calcolo giustifica la struttura della formula, cioè la dipendenza dalla potenza $\dfrac{3}{2}$ del carico, mentre il valore di $\mu$ si ricava dalle misure, poiché nella lama le traiettorie sono curve e la distribuzione delle pressioni non è idrostatica.
:::
::::

:::osservazione{#coefficiente-bazin titolo="Coefficiente di portata degli stramazzi rettangolari"}
Il coefficiente $\mu$ si ricava da misure di laboratorio. Bazin ha espresso i risultati delle sue misure con
$$
\mu = 0{,}405 + \frac{0{,}003}{h} ,
$$
valida con $h$ in metri per carichi fra $0{,}05$ e $0{,}60\,\mathrm{m}$ e soglia alta rispetto al carico, e con una seconda correzione che tiene conto dell'altezza $p$ della soglia sul fondo del canale. Per $h = 0{,}20\,\mathrm{m}$ la formula dà $\mu = 0{,}420$. Quando lo stramazzo non occupa tutta la larghezza del canale la lama si contrae anche lateralmente, perciò nel calcolo si usa la larghezza ridotta $b - 0{,}2\,h$ secondo Francis, oppure un coefficiente minore ricavato dalle tabelle.
:::

::::teorema{#stramazzo-triangolare titolo="Portata di uno stramazzo triangolare"}
Sia uno stramazzo triangolare in parete sottile, con il vertice in basso, asse verticale, angolo al vertice $\theta$ e carico $h$ misurato dal vertice. Allora
$$
Q = \frac{8}{15}\,\mu\,\tan\frac{\theta}{2}\,\sqrt{2g}\;h^{5/2} .
$$
Questa è la **formula di Thomson**. Per $\theta = 90^\circ$, cioè $\tan\dfrac{\theta}{2} = 1$, e $\mu = 0{,}60$ si ottiene la forma di uso corrente $Q = 1{,}42\,h^{5/2}$, con $Q$ in $\mathrm{m^3/s}$ e $h$ in metri; per $h = 0{,}15\,\mathrm{m}$ risulta $Q = 12{,}4\,\mathrm{L/s}$.

::schema{solidi="0,0 3,0 3,0.6 0.6,3 0,3;3,0 6,0 6,3 5.4,3 3,0.6" acqua="3,0.6 4.8,2.4 1.2,2.4" pelo="1.2,4.8,2.4," tratteggi="-0.5,0.6 3,0.6;-0.5,2.4 1.2,2.4" quote="0 0.6,0 2.4,h,-0.55" etichette="3,1.05,θ" titolo="Stramazzo triangolare di Thomson, visto da valle: il carico $h$ si misura dal vertice del triangolo e la larghezza della luce cresce con la quota"}

:::dimostrazione
Alla profondità $y$ sotto il pelo libero la larghezza della luce vale $2\,(h - y)\tan\dfrac{\theta}{2}$, poiché i lati del triangolo partono dal vertice, che si trova alla profondità $h$. La striscia fra $y$ e $y + dy$ dà quindi
$$
dQ = 2\,\mu\,(h - y)\,\tan\frac{\theta}{2}\,\sqrt{2 g y}\;dy ,
$$
e integrando fra $0$ e $h$, con $\displaystyle\int_0^h (h - y)\sqrt{y}\;dy = \frac{2}{3}h^{5/2} - \frac{2}{5}h^{5/2} = \frac{4}{15}h^{5/2}$, si ottiene
$$
Q = 2\,\mu\,\tan\frac{\theta}{2}\,\sqrt{2g}\cdot\frac{4}{15}h^{5/2}
= \frac{8}{15}\,\mu\,\tan\frac{\theta}{2}\,\sqrt{2g}\;h^{5/2} .
$$
:::
::::

## Gli stramazzi come misuratori di portata

:::osservazione{#sensibilita-stramazzi titolo="Scelta dello stramazzo e sensibilità della misura"}
Le due formule hanno la forma $Q = k\,h^{n}$, con $n = \dfrac{3}{2}$ per lo stramazzo rettangolare e $n = \dfrac{5}{2}$ per quello triangolare. Differenziando si ottiene
$$
\frac{dQ}{Q} = n\,\frac{dh}{h} ,
$$
quindi un errore $dh$ nella lettura del carico produce un errore relativo sulla portata tanto minore quanto maggiore è il carico. A parità di portata lo stramazzo triangolare lavora con un carico maggiore, e questo compensa il suo esponente più alto. Per $Q = 85\,\mathrm{L/s}$ uno stramazzo Bazin con $b = 0{,}80\,\mathrm{m}$ e $\mu = 0{,}42$ richiede $h = 0{,}148\,\mathrm{m}$, mentre uno stramazzo Thomson con $\theta = 90^\circ$ richiede $h = 0{,}324\,\mathrm{m}$; con un errore di lettura di $1\,\mathrm{mm}$ l'errore sulla portata è dell'$1{,}0\%$ nel primo caso e dello $0{,}77\%$ nel secondo. Per questo lo stramazzo triangolare si preferisce alle portate piccole.

::grafico{f="1.860368*x^1.5;0.01417423*x^2.5" xmin=0 xmax=42 ymin=0 ymax=500 nomi="h (cm),Q (L/s)" punti="30,305.7,pieno;30,69.9,pieno" titolo="Scale di deflusso di uno stramazzo rettangolare con $b = 1{,}00\,\mathrm{m}$ e $\mu = 0{,}42$ (in colore) e di uno stramazzo triangolare con $\theta = 90^\circ$ e $\mu = 0{,}60$ (tratteggiato): con $h = 30\,\mathrm{cm}$ le portate sono $306\,\mathrm{L/s}$ e $69{,}9\,\mathrm{L/s}$"}
:::

:::attenzione
Il carico si misura a monte, a una distanza dal ciglio di almeno quattro volte il carico stesso. Sopra la soglia il pelo libero è già abbassato dal richiamo della corrente, perciò una lettura fatta troppo vicino alla soglia dà un carico minore del vero.

Per uno stramazzo Bazin con $b = 1{,}00\,\mathrm{m}$ e carico vero $0{,}20\,\mathrm{m}$ la portata è $0{,}166\,\mathrm{m^3/s}$, mentre una lettura di $0{,}17\,\mathrm{m}$ porterebbe a $0{,}130\,\mathrm{m^3/s}$, con un errore del $22\%$.
:::

## Stramazzi in parete grossa e soglie

:::richiamo{titolo="Altezza critica"}
In un canale rettangolare largo $b$ che convoglia la portata $Q$, l'energia specifica $E = h + \dfrac{Q^2}{2 g b^2 h^2}$ è minima per l'altezza critica
$$
h_c = \sqrt[3]{\frac{Q^2}{g\,b^2}} ,
$$
alla quale il numero di Froude vale $1$, la velocità vale $\sqrt{g\,h_c}$ e risulta $E_{\min} = \dfrac{3}{2}\,h_c$. Si rimanda all'argomento sulle correnti a pelo libero e l'energia specifica.
:::

::::teorema{#stramazzo-parete-grossa titolo="Portata di uno stramazzo in parete grossa"}
Sia una soglia orizzontale di larghezza $b$ e spessore maggiore di circa tre volte il carico, con il pelo libero di monte alla quota $H$ sopra la soglia e velocità di monte trascurabile. Se le perdite si trascurano e sulla soglia la corrente raggiunge lo stato critico, la portata vale
$$
Q = \left(\frac{2}{3}\right)^{3/2} b\,\sqrt{g}\;H^{3/2} = 0{,}385\,b\,H\,\sqrt{2 g H} .
$$
Il coefficiente $0{,}385$ coincide con quello misurato sulle soglie a spigoli vivi, perciò il risultato si usa anche nella forma sperimentale $Q = \mu\,b\,H\sqrt{2 g H}$, con $\mu$ fra $0{,}35$ e $0{,}40$ secondo la forma del ciglio. Per $b = 1{,}50\,\mathrm{m}$ e $H = 0{,}40\,\mathrm{m}$ risultano $Q = 0{,}647\,\mathrm{m^3/s}$ e $h_c = 0{,}267\,\mathrm{m}$.

:::dimostrazione
Sulla soglia la lama si riattacca alla parete, quindi le traiettorie sono rettilinee e parallele e la corrente ha sezione rettangolare di larghezza $b$ e altezza $h$. Poiché le perdite e l'altezza cinetica di monte si trascurano, l'energia specifica misurata rispetto alla soglia si conserva e vale $E = H$.

La corrente passa da lenta a veloce superando la soglia, perciò nella sezione di sbocco si realizza lo stato critico, nel quale l'energia specifica è minima. Da $E_{\min} = \dfrac{3}{2}h_c$ e $E = H$ segue allora $h_c = \dfrac{2}{3}H$. Nello stato critico la velocità vale $\sqrt{g\,h_c}$, quindi
$$
Q = b\,h_c\sqrt{g\,h_c} = b\,\sqrt{g}\left(\frac{2}{3}H\right)^{3/2} .
$$
Il confronto con la forma $\mu\,b\,H\sqrt{2 g H}$ dà infine $\mu = \dfrac{1}{\sqrt{2}}\left(\dfrac{2}{3}\right)^{3/2} = 0{,}385$.
:::
::::

:::osservazione{#soglie titolo="Soglie e traverse"}
Una soglia in parete grossa che occupa tutta la larghezza di un canale impone la portata in funzione del solo livello di monte, finché il livello di valle resta abbastanza basso da non annegare la soglia; per questo le soglie si impiegano come sezioni di controllo nei canali e come organi di misura negli impianti. La forma del ciglio cambia il coefficiente: una soglia a spigoli vivi dà $\mu \approx 0{,}385$, un ciglio arrotondato riduce la dissipazione all'imbocco e porta $\mu$ verso $0{,}40$, mentre i profili sagomati delle traverse fluviali raggiungono valori più alti. Quando il livello di valle sale sopra il ciglio la soglia si dice *annegata* e la portata dipende anche dal livello di valle, perciò la soglia non è più una sezione di controllo.
:::

## Ugelli e potenza del getto

::::teorema{#potenza-del-getto titolo="Potenza di un getto"}
Sia un getto di portata $Q$, con velocità $v$ uniforme sulla sezione e pressione relativa nulla, e sia il piano di riferimento delle quote quello dell'asse del getto. Allora la potenza della corrente, cioè l'energia che attraversa la sezione nell'unità di tempo, vale
$$
P = \gamma\,Q\,\frac{v^2}{2g} = \frac{1}{2}\,\rho\,Q\,v^2 .
$$
La potenza del getto è quella che una turbina ad azione o una macchina idraulica può al più ricevere dal getto, e serve a dimensionare le lance e gli ugelli degli impianti.

:::dimostrazione
Nell'intervallo $dt$ attraversa la sezione il volume $Q\,dt$, di peso $\gamma\,Q\,dt$. Ogni unità di peso porta con sé un'energia pari al carico totale, che per il getto vale
$$
H = 0 + 0 + \frac{v^2}{2g} ,
$$
poiché la quota è nulla sul piano di riferimento scelto e la pressione relativa è nulla in tutti i punti della sezione. L'energia che attraversa la sezione nell'intervallo $dt$ è quindi $\gamma\,Q\,dt\,\dfrac{v^2}{2g}$, e dividendo per $dt$ si ottiene la potenza. L'uguaglianza con $\dfrac{1}{2}\rho\,Q\,v^2$ segue da $\gamma = \rho\,g$.
:::
::::

:::definizione{#ugello titolo="Ugello"}
Un **ugello** è un raccordo convergente applicato all'estremità di una condotta, sagomato in modo che la vena aderisca alla parete fino alla sezione di uscita. La contrazione è soppressa, perciò vale $C_c = 1$ e il coefficiente di portata coincide con il coefficiente di velocità, $\mu = C_v$, compreso fra $0{,}96$ e $0{,}98$. Detto $H$ il carico totale della corrente immediatamente a monte dell'ugello, misurato rispetto al piano dell'asse di uscita, la velocità e la portata del getto valgono
$$
v = C_v\sqrt{2 g H} ,
\qquad
Q = C_v\,A\,\sqrt{2 g H} ,
$$
con $A$ area della sezione di uscita. Il rapporto fra la potenza del getto e la potenza disponibile $\gamma Q H$ vale $C_v^2$, quindi un ugello con $C_v = 0{,}97$ restituisce il $94\%$ della potenza della corrente. Un getto diretto verso l'alto sale, trascurando la resistenza dell'aria, fino all'altezza $\dfrac{v^2}{2g} = C_v^2\,H$.

::schema{nodi="A,0,1.5;B,4,1.5" condotte="A-B,0.6,D" acqua="4.7,1.37 8,1.37 8,1.63 4.7,1.63" linee="4,1.8 4.7,1.63;4,1.2 4.7,1.37" energia="0,3.2 4,3.2 4.7,3.05 8,3.05" frecce="5.3,1.5,6.5,1.5,v" quote="4 1.5,4 3.2,H,-0.5" tratteggi="7.4,1.5 7.4,3.05" etichette="2,3.45,linea dei carichi totali;6.0,2.45,altezza cinetica" riferimento=0 titolo="Ugello all'estremità di una condotta: il carico totale $H$ si trasforma in altezza cinetica del getto, a meno della perdita nell'ugello"}
:::

:::esempio{titolo="Potenza di un getto"}
Un ugello con sezione di uscita di diametro $d = 30\,\mathrm{mm}$ e $C_v = 0{,}97$ riceve una corrente con carico totale $H = 25{,}0\,\mathrm{m}$ rispetto al suo asse. Risultano
$$
v = 0{,}97\,\sqrt{2 \cdot 9{,}81 \cdot 25{,}0} = 21{,}5\,\mathrm{m/s} ,
\qquad
A = 7{,}07 \cdot 10^{-4}\,\mathrm{m^2} ,
\qquad
Q = 15{,}2\,\mathrm{L/s} ,
$$
e la potenza del getto vale
$$
P = \gamma\,Q\,\frac{v^2}{2g} = 9810 \cdot 0{,}0152 \cdot 23{,}5\,\mathrm{W} = 3{,}50\,\mathrm{kW} ,
$$
contro i $3{,}72\,\mathrm{kW}$ della potenza disponibile $\gamma Q H$.
:::

:::osservazione{#ugello-su-condotta titolo="Ugello a valle di una condotta con perdite"}
Quando l'ugello è all'estremità di una condotta lunga, il carico totale $H$ immediatamente a monte dell'ugello non è il dislivello geodetico $H_0$ fra il serbatoio e l'ugello, perché una parte di quel dislivello è spesa nelle perdite della condotta. Indicate con $v_t$ la velocità nella condotta di diametro $D$ e lunghezza $L$, le due incognite $Q$ e $H$ soddisfano
$$
\begin{cases}
H = H_0 - \lambda\,\dfrac{L}{D}\,\dfrac{v_t^2}{2g} \\[8pt]
Q = C_v\,A\,\sqrt{2 g H}
\end{cases}
$$
con $v_t = \dfrac{Q}{A_t}$ e $A_t$ area della condotta. Sostituendo la prima nella seconda si ottiene un'equazione nella sola $Q$, che si risolve esplicitamente perché entrambe le perdite sono proporzionali al quadrato della portata. Riducendo il diametro dell'ugello la velocità del getto aumenta e la portata diminuisce, perciò esiste un diametro che rende massima la potenza del getto.
:::
