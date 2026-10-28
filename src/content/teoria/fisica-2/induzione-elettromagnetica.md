---
titolo: Induzione elettromagnetica
sommario: Come la variazione del flusso magnetico concatenato con un circuito genera una forza elettromotrice, come si calcolano la f.e.m. di una sbarretta in moto e di una spira rotante, che cosa sono l'induttanza e il circuito RL, e dove si trova l'energia del campo magnetico.
---

## Flusso concatenato e legge di Faraday-Neumann-Lenz

In tutto l'argomento i circuiti si trovano nel vuoto (o in aria), e le correnti variano abbastanza lentamente da poter applicare in ogni istante le leggi dei circuiti in corrente continua (regime quasi stazionario).

:::richiamo{titolo="Flusso di un campo vettoriale"}
Il flusso di un campo $\vec{F}$ attraverso una superficie orientata $S$ con versore normale $\hat{n}$ è $\displaystyle\iint_S \vec{F} \cdot \hat{n}\,dS$. Se il campo è uniforme e la superficie è piana di area $A$, il flusso vale $F A\cos\theta$, dove $\theta$ è l'angolo tra $\vec{F}$ e $\hat{n}$. Si rimanda all'argomento su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::definizione{#flusso-concatenato titolo="Flusso magnetico concatenato"}
Sia $\gamma$ un circuito chiuso orientato e sia $S$ una superficie che ha $\gamma$ come bordo, con la normale $\hat{n}$ legata al verso di $\gamma$ dalla regola della mano destra. Il **flusso magnetico concatenato** con $\gamma$ è
$$
\Phi_B = \iint_S \vec{B} \cdot \hat{n}\,dS .
$$
Il flusso di $\vec{B}$ attraverso una superficie chiusa è nullo, per la legge di Gauss per il magnetismo (si rimanda all'argomento sulle sorgenti del campo magnetico); perciò $\Phi_B$ è lo stesso per tutte le superfici che hanno $\gamma$ come bordo e dipende solo dal circuito. L'unità di misura è il **weber**, $1\,\mathrm{Wb} = 1\,\mathrm{T \cdot m^2}$. Per una bobina di $N$ spire uguali il flusso concatenato è $N$ volte il flusso attraverso una spira; in un campo uniforme, con spire piane di area $A$, vale $\Phi_B = N B A\cos\theta$.

::grafico{assi=0 vettori="-0.5,1.2,-0.5,3.2,B;3,2,2.3,3.21" linee="0.6,0 0.6,4.2;1.5,0 1.5,4.2;2.4,0 2.4,4.2;3.6,0 3.6,4.2;4.5,0 4.5,4.2;5.4,0 5.4,4.2;1.79,1.3 4.21,2.7" segmenti="3,2,3,3.4" punti="3,2,pieno" etichette="2.84,2.72,θ;1.95,3.3,n̂" xmin=-1.0 xmax=6.2 ymin=-0.3 ymax=4.5 uguale=1 titolo="Spira piana vista di taglio in un campo uniforme $\vec{B}$: il flusso concatenato è $B A\cos\theta$, dove $\theta$ è l'angolo tra $\vec{B}$ e la normale $\hat{n}$"}

:::

:::teorema{#legge-faraday titolo="Legge di Faraday-Neumann-Lenz"}
È una legge sperimentale. Quando il flusso magnetico concatenato con un circuito varia nel tempo, nel circuito si genera una **forza elettromotrice indotta**
$$
\mathcal{E} = -\frac{d\Phi_B}{dt} ,
$$
dove $\mathcal{E}$ è positiva se agisce nel verso del circuito associato alla normale $\hat{n}$ dalla regola della mano destra. La f.e.m. è determinata dalla rapidità con cui il flusso cambia, qualunque sia il valore del flusso; il segno meno esprime la legge di Lenz sul verso della corrente indotta. Se il flusso varia in modo uniforme nell'intervallo $\Delta t$, la f.e.m. vale $-\dfrac{\Delta\Phi_B}{\Delta t}$; in generale questo rapporto è la **f.e.m. media**.

Per esempio, se il campo perpendicolare a una bobina di $100$ spire di area $20\,\mathrm{cm^2}$ cresce in modo uniforme da $0$ a $0{,}60\,\mathrm{T}$ in $0{,}15\,\mathrm{s}$, il flusso concatenato aumenta di $100 \cdot 20 \cdot 10^{-4} \cdot 0{,}60\,\mathrm{Wb} = 0{,}12\,\mathrm{Wb}$ e il modulo della f.e.m. è $\dfrac{0{,}12}{0{,}15}\,\mathrm{V} = 0{,}80\,\mathrm{V}$.
:::

:::osservazione{#modi-di-variare-il-flusso titolo="Modi di far variare il flusso"}
Per una spira piana in un campo uniforme $\Phi_B = B A\cos\theta$, quindi il flusso varia se cambia almeno uno dei tre fattori.

- Varia il modulo del campo, per esempio perché varia la corrente che lo genera o perché un magnete si avvicina; la spira è ferma.
- Varia l'area della spira, come quando una sbarretta scorre su due binari conduttori; si parla allora di f.e.m. *mozionale*.
- Varia l'angolo $\theta$, come in una spira che ruota nel campo; è il principio dell'alternatore.

La legge di Faraday-Neumann-Lenz descrive con la stessa formula tutti e tre i casi. Nel primo caso la f.e.m. è dovuta a un campo elettrico indotto, negli altri due alla forza di Lorentz sulle cariche del conduttore in moto.
:::

## Corrente indotta e legge di Lenz

:::definizione{#corrente-indotta titolo="Corrente indotta"}
Se il circuito in cui si genera la f.e.m. indotta $\mathcal{E}$ è chiuso e ha resistenza complessiva $R$, e se l'autoinduzione del circuito è trascurabile, in esso circola la **corrente indotta**
$$
i = \frac{\mathcal{E}}{R} = -\frac{1}{R}\,\frac{d\Phi_B}{dt} .
$$
La corrente indotta esiste solo finché il flusso varia. Se il circuito è aperto, ai capi dell'interruzione si misura una differenza di potenziale uguale in modulo a $\mathcal{E}$, mentre la corrente è nulla.
:::

::::teorema{#carica-indotta titolo="Carica indotta (legge di Felici)"}
Si consideri un circuito di resistenza $R$, con autoinduzione trascurabile, il cui flusso concatenato passa dal valore $\Phi_1$ all'istante $t_1$ al valore $\Phi_2$ all'istante $t_2$. La carica che attraversa una sezione del circuito nell'intervallo $[t_1, t_2]$ è
$$
q = \int_{t_1}^{t_2} i\,dt = -\frac{\Phi_2 - \Phi_1}{R} .
$$
La carica dipende solo dalla variazione del flusso, qualunque sia la rapidità con cui avviene, e per questo una misura di carica permette di misurare un campo magnetico. Se una spira circolare di raggio $5{,}0\,\mathrm{cm}$ e resistenza $0{,}20\,\mathrm{\Omega}$ viene estratta da un campo perpendicolare di $0{,}40\,\mathrm{T}$, la carica che la attraversa ha modulo $\dfrac{0{,}40 \cdot \pi \cdot 0{,}050^2}{0{,}20}\,\mathrm{C} \approx 16\,\mathrm{mC}$, sia che l'estrazione sia lenta sia che sia rapida.

:::dimostrazione
Per la definizione di corrente indotta $i = -\dfrac{1}{R}\,\dfrac{d\Phi_B}{dt}$, e $R$ è costante. Integrando tra $t_1$ e $t_2$, per il teorema fondamentale del calcolo integrale si ottiene
$$
q = -\frac{1}{R} \int_{t_1}^{t_2} \frac{d\Phi_B}{dt}\,dt = -\frac{\Phi_2 - \Phi_1}{R} .
$$
:::
::::

:::osservazione{#legge-di-lenz titolo="Verso della corrente indotta (legge di Lenz)"}
Per il segno meno nella legge di Faraday-Neumann-Lenz, la corrente indotta circola nel verso in cui il campo magnetico che essa stessa genera si oppone alla **variazione** del flusso che l'ha prodotta. In pratica si procede in tre passi: si stabilisce se il flusso attraverso il circuito aumenta o diminuisce; si deduce il verso del campo indotto all'interno del circuito, opposto al campo esterno se il flusso aumenta e concorde se diminuisce; con la regola della mano destra si ricava il verso della corrente.

La legge di Lenz è una conseguenza della conservazione dell'energia. Se la corrente indotta rinforzasse la variazione di flusso, la variazione crescerebbe da sola e il circuito produrrebbe energia elettrica senza ricevere lavoro dall'esterno.

::grafico{assi=0 curve="2*cos(t),2*sin(t),0,6.29" vettori="-0.7,2,0.7,2,i;0.7,-2,-0.7,-2" etichette="-1.1,1.0,⊙;1.1,1.0,⊙;-1.1,-1.0,⊙;1.1,-1.0,⊙;-2.9,1.6,⊙;2.9,1.6,⊙;-2.9,-1.6,⊙;2.9,-1.6,⊙;0,-0.05,⊗ B′;2.75,0.3,B ⊙" xmin=-3.4 xmax=3.4 ymin=-2.6 ymax=2.6 uguale=1 titolo="Il campo esterno $\vec{B}$, uscente dal foglio, aumenta: la corrente indotta circola in verso orario e genera all'interno della spira il campo entrante $\vec{B}\,'$, che si oppone all'aumento del flusso"}

:::

:::attenzione{#lenz-variazione}
Il campo indotto è opposto alla *variazione* del flusso, e quindi è concorde con il campo esterno quando questo diminuisce. Se il campo uscente della figura diminuisse, il flusso uscente diminuirebbe; la corrente indotta circolerebbe in verso antiorario e genererebbe un campo uscente, concorde con $\vec{B}$, che compensa in parte la diminuzione.
:::

## Forza elettromotrice mozionale

:::richiamo{titolo="Forza di Lorentz"}
Su una carica $q$ che si muove con velocità $\vec{v}$ in un campo magnetico $\vec{B}$ agisce la forza $\vec{F} = q\,\vec{v} \times \vec{B}$; su un filo rettilineo di lunghezza $\ell$ percorso dalla corrente $I$ in un campo uniforme agisce la forza $\vec{F} = I\,\vec{\ell} \times \vec{B}$, con $\vec{\ell}$ orientato come la corrente. Si rimanda all'argomento sul campo magnetico e la forza di Lorentz.
:::

::::teorema{#fem-mozionale titolo="F.e.m. di una sbarretta in moto"}
Una sbarretta conduttrice rettilinea di lunghezza $\ell$ trasla con velocità $\vec{v}$ costante in un campo magnetico uniforme $\vec{B}$, con $\vec{v}$, $\vec{B}$ e la sbarretta perpendicolari a due a due. Allora tra gli estremi della sbarretta si genera la forza elettromotrice
$$
\mathcal{E} = B \ell v .
$$
Se la sbarretta chiude un circuito scorrendo su due binari conduttori, la stessa f.e.m. si ottiene dalla legge di Faraday-Neumann-Lenz, perché l'area del circuito cambia. Una sbarretta lunga $20\,\mathrm{cm}$ che si muove a $3{,}0\,\mathrm{m/s}$ in un campo di $0{,}50\,\mathrm{T}$ ha ai capi la f.e.m. $0{,}50 \cdot 0{,}20 \cdot 3{,}0\,\mathrm{V} = 0{,}30\,\mathrm{V}$.

::grafico{assi=0 linee="0,2 7,2;0,0 7,0;0,2 0,1.6 0.3,1.5 -0.3,1.3 0.3,1.1 -0.3,0.9 0.3,0.7 -0.3,0.5 0,0.4 0,0" poligoni="4.42,-0.3 4.58,-0.3 4.58,2.3 4.42,2.3" vettori="4.7,1.3,5.9,1.3,v;4.3,0.7,3.1,0.7,F;3.0,2.3,1.8,2.3,i" etichette="-0.75,1.0,R;1.4,1.4,⊗;2.6,1.4,⊗;1.4,0.6,⊗;2.6,0.6,⊗;5.6,0.5,⊗;6.6,1.5,⊗;6.6,0.5,⊗;4.85,-0.35,ℓ;6.8,2.4,B ⊗" xmin=-1.2 xmax=7.2 ymin=-0.7 ymax=2.8 uguale=1 titolo="Sbarretta su due binari in un campo $\vec{B}$ entrante nel foglio: la sbarretta si sposta verso destra, la corrente indotta circola in verso antiorario e la forza magnetica $\vec{F}$ sulla sbarretta si oppone al moto"}

:::dimostrazione
Sulle cariche libere della sbarretta, che si muovono con essa, agisce la **forza di Lorentz** $q\,\vec{v} \times \vec{B}$. Poiché $\vec{v}$ e $\vec{B}$ sono perpendicolari, la forza ha modulo $q v B$ ed è diretta lungo la sbarretta. La f.e.m. è il lavoro per unità di carica compiuto lungo la sbarretta da questa forza, quindi
$$
\mathcal{E} = \frac{q v B\,\ell}{q} = B \ell v .
$$
Nel circuito chiuso dai binari sia $x$ la distanza della sbarretta dal lato fisso; l'area del circuito è $\ell x$, e con la normale parallela a $\vec{B}$ il flusso è $\Phi_B = B \ell x$. Per la **legge di Faraday-Neumann-Lenz** il modulo della f.e.m. è $\left| \dfrac{d\Phi_B}{dt} \right| = B \ell \dfrac{dx}{dt} = B \ell v$, in accordo con il calcolo precedente.
:::
::::

:::osservazione{#fem-mozionale-generale titolo="F.e.m. mozionale in generale"}
Se un circuito, o un suo tratto, si muove in un campo magnetico statico, la f.e.m. è la circuitazione della forza di Lorentz per unità di carica:
$$
\mathcal{E} = \oint_\gamma \left( \vec{v} \times \vec{B} \right) \cdot d\vec{\ell} ,
$$
dove $\vec{v}$ è la velocità del tratto $d\vec{\ell}$. Solo i tratti in moto danno contributo. Per una sbarra di lunghezza $\ell$ che ruota con velocità angolare $\omega$ attorno a un estremo, in un piano perpendicolare a un campo uniforme, il tratto a distanza $s$ dall'asse ha velocità $\omega s$, perciò
$$
\mathcal{E} = \int_0^\ell B\,\omega s\,ds = \frac{1}{2} B \omega \ell^2 .
$$
Per $B = 0{,}40\,\mathrm{T}$, $\ell = 0{,}50\,\mathrm{m}$ e $\omega = 20\,\mathrm{rad/s}$ si ottiene $\mathcal{E} = 1{,}0\,\mathrm{V}$. Lo stesso risultato vale per il disco di Faraday, un disco conduttore di raggio $\ell$ che ruota attorno al proprio asse, tra il centro e il bordo.
:::

## Sbarretta su binari: forze e bilancio energetico

:::richiamo{titolo="Equazioni differenziali lineari del primo ordine"}
L'equazione $y' + a\,y = b$, con $a \neq 0$ e $b$ costanti, con la condizione iniziale $y(0) = y_0$, ha l'unica soluzione
$$
y(t) = \frac{b}{a} + \left( y_0 - \frac{b}{a} \right) e^{-a t} .
$$
Se $a > 0$, la soluzione tende al valore $\dfrac{b}{a}$ per $t \to +\infty$. Si rimanda all'argomento di Analisi 1 sulle equazioni differenziali.
:::

::::teorema{#sbarretta-su-binari titolo="Sbarretta lanciata su binari"}
Due binari conduttori orizzontali paralleli, a distanza $\ell$, sono chiusi da un resistore $R$ e immersi in un campo uniforme $\vec{B}$ perpendicolare al loro piano. Una sbarretta conduttrice di massa $m$ scorre senza attrito sui binari, perpendicolare a essi, e all'istante $t = 0$ ha velocità $v_0$. Le resistenze di binari e sbarretta e l'autoinduzione sono trascurabili. Allora sulla sbarretta agisce la forza magnetica frenante di modulo
$$
F = \frac{B^2 \ell^2 v}{R} ,
$$
e la velocità decresce secondo la legge
$$
v(t) = v_0\,e^{-\frac{t}{\tau}} , \qquad \tau = \frac{m R}{B^2 \ell^2} .
$$
La sbarretta si ferma solo asintoticamente, dopo aver percorso lo spazio $v_0 \tau$. Con $m = 0{,}10\,\mathrm{kg}$, $R = 0{,}50\,\mathrm{\Omega}$, $B = 0{,}50\,\mathrm{T}$, $\ell = 0{,}40\,\mathrm{m}$ e $v_0 = 2{,}0\,\mathrm{m/s}$ si ha $\tau = 1{,}25\,\mathrm{s}$, e lo spazio percorso è $2{,}5\,\mathrm{m}$.

::grafico{f="exp(-x)+0*sqrt(x)" segmenti="0,1,1,0" punti="0,1,pieno;1,0.368,pieno" xmin=-0.3 xmax=4.6 ymin=-0.2 ymax=1.3 nomi="t,v" legenda="v(t) = v_0\,e^{-\frac{t}{\tau}}" titolo="Velocità della sbarretta, in unità di $v_0$, con il tempo in unità di $\tau$: la tangente nell'origine incontra l'asse dei tempi in $t = \tau$, dove $v = \dfrac{v_0}{e} \approx 0{,}37\,v_0$"}

:::dimostrazione
Per il teorema sulla f.e.m. di una sbarretta in moto, nel circuito agisce la f.e.m. $B \ell v$, quindi circola la corrente $I = \dfrac{B \ell v}{R}$. Sulla sbarretta percorsa da corrente agisce la forza $I\,\vec{\ell} \times \vec{B}$, di modulo $I \ell B = \dfrac{B^2 \ell^2 v}{R}$; per la legge di Lenz la forza si oppone al moto, perché la corrente indotta si oppone all'aumento dell'area del circuito. Il peso e la reazione dei binari sono perpendicolari al moto, perciò il **secondo principio della dinamica** lungo i binari dà
$$
m\,\frac{dv}{dt} = -\frac{B^2 \ell^2}{R}\,v
\quad\Longrightarrow\quad
\frac{dv}{dt} + \frac{1}{\tau}\,v = 0 .
$$
È un'equazione lineare del primo ordine con $a = \dfrac{1}{\tau}$ e $b = 0$, quindi con $v(0) = v_0$ la soluzione è $v(t) = v_0\,e^{-\frac{t}{\tau}}$. Lo spazio percorso è $\displaystyle\int_0^{+\infty} v_0\,e^{-\frac{t}{\tau}}\,dt = v_0 \tau$.
:::
::::

:::osservazione{#bilancio-energetico-sbarretta titolo="Bilancio energetico"}
La potenza della forza magnetica frenante è $-F v = -\dfrac{B^2 \ell^2 v^2}{R}$, e la potenza dissipata nel resistore per effetto Joule è $R I^2 = \dfrac{B^2 \ell^2 v^2}{R}$. Le due potenze sono uguali in modulo, quindi l'energia cinetica persa dalla sbarretta si trasforma tutta in calore nel resistore; per la sbarretta lanciata il calore totale è $\dfrac{1}{2} m v_0^2$. Se invece una forza esterna mantiene la sbarretta a velocità costante, essa deve equilibrare la forza frenante, e la sua potenza $F v$ è uguale alla potenza elettrica $\mathcal{E} I$ erogata nel circuito.

Su binari verticali, con la sbarretta che cade, il peso $mg$ è costante e la forza frenante cresce con la velocità; la sbarretta raggiunge la **velocità limite** per cui le due forze si equilibrano, $v_{\text{lim}} = \dfrac{m g R}{B^2 \ell^2}$.
:::

## Spira rotante e alternatore

::::teorema{#spira-rotante titolo="F.e.m. in una spira rotante"}
Una bobina di $N$ spire piane di area $A$ ruota con velocità angolare costante $\omega$ attorno a un asse perpendicolare a un campo magnetico uniforme $\vec{B}$, e all'istante $t = 0$ la normale alle spire è parallela a $\vec{B}$. Allora la f.e.m. indotta nella bobina è
$$
\mathcal{E}(t) = N B A \omega \sin(\omega t) .
$$
La f.e.m. è **alternata**, con valore massimo $\mathcal{E}_{\max} = N B A \omega$ e frequenza uguale alla frequenza di rotazione $f = \dfrac{\omega}{2\pi}$. Il valore massimo si ha quando il piano delle spire è parallelo a $\vec{B}$, cioè quando il flusso è nullo e varia più rapidamente. Per una bobina di $100$ spire di area $0{,}010\,\mathrm{m^2}$ che ruota a $50$ giri al secondo in un campo di $0{,}20\,\mathrm{T}$ si ha $\omega = 2\pi \cdot 50\,\mathrm{rad/s}$ e $\mathcal{E}_{\max} \approx 63\,\mathrm{V}$.

::grafico{f="cos(x);sin(x)" xmin=-0.4 xmax=13.2 ymin=-1.5 ymax=1.7 nomi="ωt,y" legenda="\dfrac{\Phi_B}{NBA};\dfrac{\mathcal{E}}{NBA\omega}" titolo="Flusso concatenato e f.e.m. nella spira rotante, divisi per i rispettivi valori massimi: la f.e.m. è massima in modulo dove il flusso si annulla"}

:::dimostrazione
All'istante $t$ l'angolo tra la normale e il campo è $\theta = \omega t$, quindi il flusso concatenato è $\Phi_B(t) = N B A\cos(\omega t)$. Per la **legge di Faraday-Neumann-Lenz**
$$
\mathcal{E}(t) = -\frac{d\Phi_B}{dt} = N B A \omega \sin(\omega t) .
$$
:::
::::

:::osservazione{#alternatore titolo="Alternatore"}
Un **alternatore** è una bobina fatta ruotare in un campo magnetico da una turbina o da un motore, con i capi collegati al circuito esterno attraverso contatti striscianti. Se il circuito esterno è un resistore $R$ e la resistenza della bobina è trascurabile, la potenza istantanea è $\dfrac{\mathcal{E}^2}{R} = \dfrac{\mathcal{E}_{\max}^2}{R}\sin^2(\omega t)$; poiché il valore medio di $\sin^2(\omega t)$ su un periodo è $\dfrac{1}{2}$, la potenza media vale
$$
P_m = \frac{\mathcal{E}_{\max}^2}{2 R} .
$$
Per la legge di Lenz le forze magnetiche sulla bobina percorsa da corrente si oppongono alla rotazione; il motore deve quindi fornire un momento, e la potenza meccanica che spende è uguale alla potenza elettrica erogata. Per i valori efficaci e i circuiti in corrente alternata si rimanda all'argomento sulle oscillazioni elettriche e i circuiti in corrente alternata.
:::

## Campo elettrico indotto

:::richiamo{titolo="Circuitazione e teorema di Stokes"}
La circuitazione di un campo $\vec{F}$ lungo una curva chiusa $\gamma$ è l'integrale di linea $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{\ell}$. Per il teorema di Stokes, se $S$ è una superficie con bordo $\gamma$ orientata in modo coerente, $\displaystyle\oint_\gamma \vec{F} \cdot d\vec{\ell} = \iint_S (\nabla \times \vec{F}) \cdot \hat{n}\,dS$. Si rimanda agli argomenti su curve e integrali di linea e su superfici, flussi e teoremi di Gauss e Stokes di Analisi 2.
:::

:::teorema{#faraday-forma-integrale titolo="Legge di Faraday in forma integrale"}
È un postulato dell'elettromagnetismo, che estende la legge di Faraday-Neumann-Lenz a una linea chiusa qualsiasi, anche in assenza di conduttori. Per ogni curva chiusa orientata $\gamma$ ferma, bordo di una superficie $S$,
$$
\oint_\gamma \vec{E} \cdot d\vec{\ell} = -\frac{d}{dt} \iint_S \vec{B} \cdot \hat{n}\,dS .
$$
Un campo magnetico variabile genera quindi un **campo elettrico indotto**, che esiste anche dove non ci sono cariche né conduttori; un conduttore posto lungo $\gamma$ ne rivela la presenza con una corrente. Per il teorema di Stokes la legge equivale alla forma locale $\nabla \times \vec{E} = -\dfrac{\partial \vec{B}}{\partial t}$, che è una delle equazioni di Maxwell; si rimanda all'argomento sulle equazioni di Maxwell e le onde elettromagnetiche.
:::

:::attenzione{#campo-indotto-non-conservativo}
Il campo elettrico indotto *non* è conservativo, e per esso il potenziale elettrico non è definito. Lungo la circonferenza di raggio $r$ coassiale a un solenoide in cui il campo varia, la circuitazione di $\vec{E}$ è diversa da zero; perciò il lavoro del campo su una carica che va da un punto $P$ a un punto $Q$ della circonferenza dipende dall'arco percorso, e non esiste una funzione $V$ con $\vec{E} = -\nabla V$. Il campo elettrostatico prodotto da cariche ferme ha invece circuitazione nulla, come si è visto nell'argomento sul potenziale elettrico.
:::

::::teorema{#campo-indotto-solenoide titolo="Campo elettrico indotto da un solenoide"}
Un solenoide rettilineo indefinito di raggio $a$ contiene un campo magnetico uniforme $B(t)$, parallelo all'asse, che varia nel tempo; all'esterno il campo magnetico è nullo. Allora le linee del campo elettrico indotto sono circonferenze coassiali al solenoide e, alla distanza $r$ dall'asse, il modulo del campo è
$$
E(r) =
\begin{cases}
\dfrac{r}{2} \left| \dfrac{dB}{dt} \right| & \text{se } r \leq a \\[10pt]
\dfrac{a^2}{2 r} \left| \dfrac{dB}{dt} \right| & \text{se } r \geq a
\end{cases}
$$
Il campo cresce linearmente all'interno, è massimo sulla superficie del solenoide e decresce come $\dfrac{1}{r}$ all'esterno, dove il campo magnetico è nullo. Con $a = 2{,}0\,\mathrm{cm}$ e $\left| \dfrac{dB}{dt} \right| = 0{,}50\,\mathrm{T/s}$, il campo vale $2{,}5\,\mathrm{mV/m}$ sia a $1{,}0\,\mathrm{cm}$ sia a $4{,}0\,\mathrm{cm}$ dall'asse, e $5{,}0\,\mathrm{mV/m}$ sulla superficie.

::grafico{f="min(x,1/x)" segmenti="1,0,1,1" xmin=-0.3 xmax=4.6 ymin=-0.2 ymax=1.3 nomi="r,E" legenda=0 titolo="Modulo del campo elettrico indotto in funzione della distanza $r$ dall'asse, con $r$ in unità del raggio $a$ e $E$ in unità di $\dfrac{a}{2} \left| \dfrac{dB}{dt} \right|$"}

:::dimostrazione
Il sistema è invariante per rotazioni attorno all'asse e per traslazioni lungo l'asse, quindi le linee del campo indotto sono circonferenze coassiali e il modulo $E$ dipende solo da $r$. Si applica la **legge di Faraday in forma integrale** alla circonferenza di raggio $r$, orientata in modo che la normale al cerchio sia concorde con $\vec{B}$. Il campo $\vec{E}$ è tangente e ha modulo costante lungo la circonferenza, perciò la circuitazione vale $2\pi r\,E$, a meno del segno. Il flusso magnetico è $\pi r^2 B$ se $r \leq a$, e $\pi a^2 B$ se $r \geq a$, poiché fuori dal solenoide il campo è nullo. Uguagliando i moduli si ottiene
$$
2\pi r\,E = \pi r^2 \left| \frac{dB}{dt} \right|
\quad \text{oppure} \quad
2\pi r\,E = \pi a^2 \left| \frac{dB}{dt} \right| ,
$$
da cui seguono le due espressioni di $E(r)$.
:::
::::

:::osservazione{#correnti-parassite titolo="Correnti parassite"}
In un blocco conduttore che si muove in un campo magnetico, o che si trova in un campo variabile, il campo elettrico indotto fa circolare correnti chiuse all'interno del materiale, dette **correnti parassite** o di Foucault. Per la legge di Lenz esse si oppongono alla causa che le genera, quindi frenano il moto del conduttore, e dissipano energia per effetto Joule. Il primo effetto si sfrutta nei freni elettromagnetici, il secondo nelle piastre a induzione. Nei nuclei dei trasformatori le correnti parassite sono un difetto, e si riducono costruendo il nucleo con lamierini isolati tra loro.
:::

## Autoinduzione e induttanza

:::definizione{#induttanza titolo="Induttanza"}
Un circuito percorso dalla corrente $i$ genera un campo magnetico che, per la legge di Biot-Savart, è proporzionale a $i$ in ogni punto; perciò anche il flusso del proprio campo concatenato con il circuito è proporzionale a $i$. L'**induttanza** (o coefficiente di autoinduzione) del circuito è la costante
$$
L = \frac{\Phi_B}{i} ,
$$
dove $\Phi_B$ è il flusso autoconcatenato. Nel vuoto $L$ dipende solo dalla forma e dalle dimensioni del circuito. L'unità di misura è l'**henry**, $1\,\mathrm{H} = 1\,\mathrm{Wb/A} = 1\,\mathrm{V \cdot s/A}$. Un componente progettato per avere un'induttanza apprezzabile, di solito una bobina, si chiama induttore.
:::

::::teorema{#fem-autoindotta titolo="F.e.m. autoindotta"}
Se la corrente in un circuito rigido di induttanza $L$ varia nel tempo, nel circuito si genera la f.e.m. autoindotta
$$
\mathcal{E}_L = -L\,\frac{di}{dt} .
$$
Per la legge di Lenz la f.e.m. autoindotta si oppone alla variazione della corrente; l'induttanza è quindi l'analogo elettrico della massa, che si oppone alla variazione della velocità. Se la corrente in una bobina con $L = 0{,}20\,\mathrm{H}$ cresce di $50\,\mathrm{A}$ al secondo, ai suoi capi si genera una f.e.m. di modulo $0{,}20 \cdot 50\,\mathrm{V} = 10\,\mathrm{V}$, diretta in verso opposto alla corrente.

:::dimostrazione
Il flusso autoconcatenato è $\Phi_B = L i$, e $L$ è costante perché il circuito è rigido. Per la **legge di Faraday-Neumann-Lenz**
$$
\mathcal{E}_L = -\frac{d\Phi_B}{dt} = -\frac{d(L i)}{dt} = -L\,\frac{di}{dt} .
$$
:::
::::

:::richiamo{titolo="Campo magnetico di un solenoide"}
All'interno di un solenoide rettilineo indefinito con $n$ spire per unità di lunghezza, percorso dalla corrente $i$, il campo magnetico è uniforme, parallelo all'asse e di modulo $B = \mu_0 n i$; all'esterno è nullo. Si rimanda all'argomento sulle sorgenti del campo magnetico.
:::

::::teorema{#induttanza-solenoide titolo="Induttanza di un solenoide"}
Un solenoide di lunghezza $\ell$, con $N$ spire di area $A$, lungo rispetto al raggio delle spire in modo che gli effetti di bordo siano trascurabili, ha induttanza
$$
L = \frac{\mu_0 N^2 A}{\ell} = \mu_0 n^2 A \ell , \qquad n = \frac{N}{\ell} .
$$
L'induttanza cresce con il quadrato del numero di spire, perché raddoppiando $N$ raddoppiano sia il campo sia il numero di spire attraversate dal flusso. Un solenoide con $N = 400$, $\ell = 20\,\mathrm{cm}$ e spire di raggio $1{,}0\,\mathrm{cm}$ ha $L = \dfrac{4\pi \cdot 10^{-7} \cdot 400^2 \cdot \pi \cdot 0{,}010^2}{0{,}20}\,\mathrm{H} \approx 0{,}32\,\mathrm{mH}$.

:::dimostrazione
Con $n = \dfrac{N}{\ell}$ e corrente $i$, all'interno il campo è uniforme e vale $B = \mu_0 \dfrac{N}{\ell}\,i$. Il flusso attraverso una spira è $B A$, quindi il flusso concatenato con le $N$ spire è
$$
\Phi_B = N B A = \frac{\mu_0 N^2 A}{\ell}\,i .
$$
Per la definizione di induttanza $L = \dfrac{\Phi_B}{i} = \dfrac{\mu_0 N^2 A}{\ell}$.
:::
::::

## Circuito RL

:::osservazione{#maglia-con-induttore titolo="Legge delle maglie con un induttore"}
In un circuito con un induttore ideale, privo di resistenza, la legge delle maglie si applica considerando la f.e.m. autoindotta come un generatore, cioè uguagliando la somma delle f.e.m. lungo la maglia alla somma delle cadute di tensione $R i$. Per una maglia con un generatore ideale $\mathcal{E}$, un resistore $R$ e un induttore $L$ in serie si ha quindi
$$
\mathcal{E} - L\,\frac{di}{dt} = R\,i .
$$
Equivalentemente, ai capi dell'induttore c'è la differenza di potenziale $L\,\dfrac{di}{dt}$, e una bobina reale si rappresenta come un induttore ideale in serie con la sua resistenza. Per le leggi di Kirchhoff si rimanda all'argomento sulla corrente elettrica e i circuiti in corrente continua.

::grafico{assi=0 curve="4+0.35*abs(sin(t)),2.2-0.35*t/pi,0,12.566" linee="0,0 0,1.4;-0.22,1.4 0.22,1.4;-0.45,1.6 0.45,1.6;0,1.6 0,3 1.2,3;1.2,3 1.9,3.4;2.0,3 2.4,3 2.5,3.2 2.7,2.8 2.9,3.2 3.1,2.8 3.3,3.2 3.5,2.8 3.6,3 4,3 4,2.2;4,0.8 4,0 0,0" punti="1.2,3,pieno;2.0,3,pieno" vettori="2.6,-0.3,1.4,-0.3,i" etichette="0.65,1.45,ℰ;-0.75,1.75,+;-0.75,1.2,−;3.0,3.55,R;4.85,1.5,L;1.55,3.7,T" xmin=-1.2 xmax=5.4 ymin=-0.7 ymax=4 uguale=1 titolo="Circuito RL: alla chiusura dell'interruttore $T$ la corrente cresce gradualmente fino al valore $\dfrac{\mathcal{E}}{R}$"}

:::

::::teorema{#circuito-rl-chiusura titolo="Chiusura di un circuito RL"}
In un circuito formato da un generatore ideale di f.e.m. $\mathcal{E}$ costante, un resistore $R$ e un induttore $L$ in serie, l'interruttore viene chiuso all'istante $t = 0$, quando la corrente è nulla. Allora per $t \geq 0$
$$
i(t) = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) , \qquad \tau = \frac{L}{R} .
$$
La grandezza $\tau$ è la **costante di tempo** del circuito. All'istante della chiusura la corrente è nulla e la sua derivata vale $\dfrac{\mathcal{E}}{L}$, perché tutta la f.e.m. del generatore è bilanciata dalla f.e.m. autoindotta; per $t \to +\infty$ la corrente tende a $\dfrac{\mathcal{E}}{R}$, come in un circuito senza induttore. Con $\mathcal{E} = 6{,}0\,\mathrm{V}$, $R = 3{,}0\,\mathrm{\Omega}$ e $L = 0{,}12\,\mathrm{H}$ si ha $\tau = 40\,\mathrm{ms}$, la corrente di regime è $2{,}0\,\mathrm{A}$ e dopo un tempo $\tau$ la corrente vale $2{,}0 \cdot (1 - e^{-1})\,\mathrm{A} \approx 1{,}3\,\mathrm{A}$.

::grafico{f="1-exp(-x)+0*sqrt(x);exp(-x)+0*sqrt(x)" asintoti="y=1" segmenti="1,0,1,0.632;0,0.632,1,0.632" punti="1,0.632,pieno;1,0.368,pieno" xmin=-0.3 xmax=5.2 ymin=-0.2 ymax=1.35 nomi="t,i" legenda="\text{chiusura: } 1 - e^{-\frac{t}{\tau}};\text{apertura: } e^{-\frac{t}{\tau}}" titolo="Corrente nel circuito RL, in unità del valore di regime, con il tempo in unità di $\tau$: dopo un tempo $\tau$ la corrente ha raggiunto il $63\,\%$ del valore finale alla chiusura e si è ridotta al $37\,\%$ all'apertura"}

:::dimostrazione
Per la legge delle maglie con un induttore
$$
\mathcal{E} - L\,\frac{di}{dt} = R\,i
\quad\Longrightarrow\quad
\frac{di}{dt} + \frac{R}{L}\,i = \frac{\mathcal{E}}{L} .
$$
È un'equazione lineare del primo ordine con $a = \dfrac{R}{L}$ e $b = \dfrac{\mathcal{E}}{L}$, quindi $\dfrac{b}{a} = \dfrac{\mathcal{E}}{R}$. Con la condizione iniziale $i(0) = 0$ la soluzione è
$$
i(t) = \frac{\mathcal{E}}{R} + \left( 0 - \frac{\mathcal{E}}{R} \right) e^{-\frac{R}{L} t} = \frac{\mathcal{E}}{R} \left( 1 - e^{-\frac{t}{\tau}} \right) .
$$
:::
::::

::::teorema{#circuito-rl-apertura titolo="Apertura di un circuito RL"}
In un circuito RL percorso dalla corrente di regime $I_0$, all'istante $t = 0$ il generatore viene escluso con un deviatore, e l'induttore resta chiuso sul resistore $R$. Allora per $t \geq 0$
$$
i(t) = I_0\,e^{-\frac{t}{\tau}} , \qquad \tau = \frac{L}{R} .
$$
La corrente decresce gradualmente, perché l'induttore si oppone alla variazione di corrente; il tempo in cui la corrente si dimezza è $\tau \ln 2$. Con $L = 0{,}12\,\mathrm{H}$ e $R = 3{,}0\,\mathrm{\Omega}$ la corrente si dimezza in $40 \cdot 0{,}693\,\mathrm{ms} \approx 28\,\mathrm{ms}$.

:::dimostrazione
Nella maglia formata dall'induttore e dal resistore l'unica f.e.m. è quella autoindotta, quindi
$$
-L\,\frac{di}{dt} = R\,i
\quad\Longrightarrow\quad
\frac{di}{dt} + \frac{1}{\tau}\,i = 0 .
$$
Per la formula risolutiva delle equazioni lineari del primo ordine, con $b = 0$ e $i(0) = I_0$, la soluzione è $i(t) = I_0\,e^{-\frac{t}{\tau}}$.
:::
::::

:::osservazione{#costante-di-tempo-rl titolo="Significato della costante di tempo"}
La costante di tempo $\tau = \dfrac{L}{R}$ si misura in secondi, poiché $1\,\mathrm{H/\Omega} = 1\,\mathrm{V \cdot s/A} \cdot 1\,\mathrm{A/V} = 1\,\mathrm{s}$. Dopo un tempo $\tau$ la corrente di chiusura ha raggiunto il $63\,\%$ del valore di regime, poiché $1 - e^{-1} \approx 0{,}632$, e dopo $5\tau$ ne ha raggiunto più del $99\,\%$; per questo, dopo alcune costanti di tempo, il circuito si considera a regime. Se si apre bruscamente un circuito con un induttore senza offrire alla corrente un percorso alternativo, la corrente cala in un tempo brevissimo e la f.e.m. autoindotta $-L\,\dfrac{di}{dt}$ diventa molto grande; questo fenomeno è l'origine della scintilla che si osserva ai contatti di un interruttore.
:::

## Energia del campo magnetico

::::teorema{#energia-induttore titolo="Energia immagazzinata in un induttore"}
Un induttore di induttanza $L$ percorso dalla corrente $I$ immagazzina l'energia
$$
U = \frac{1}{2} L I^2 .
$$
L'energia è il lavoro, indicato con $W$ perché $L$ è l'induttanza, che il generatore compie contro la f.e.m. autoindotta per portare la corrente da $0$ a $I$; quando la corrente si annulla, l'induttore restituisce la stessa energia, che nell'apertura del circuito RL si dissipa nel resistore. Con $L = 0{,}12\,\mathrm{H}$ e $I = 2{,}0\,\mathrm{A}$ si ha $U = \dfrac{1}{2} \cdot 0{,}12 \cdot 2{,}0^2\,\mathrm{J} = 0{,}24\,\mathrm{J}$.

:::dimostrazione
Si moltiplicano per $i$ i due membri della legge delle maglie del circuito RL, $\mathcal{E} = R\,i + L\,\dfrac{di}{dt}$, e si ottiene
$$
\mathcal{E}\,i = R\,i^2 + L\,i\,\frac{di}{dt} = R\,i^2 + \frac{d}{dt} \left( \frac{1}{2} L i^2 \right) .
$$
La potenza $\mathcal{E}\,i$ erogata dal generatore è quindi la somma della potenza dissipata per effetto Joule e della rapidità con cui cresce la grandezza $\dfrac{1}{2} L i^2$. Il lavoro compiuto contro la f.e.m. autoindotta mentre la corrente passa da $0$ a $I$ è
$$
W = \int L\,i\,\frac{di}{dt}\,dt = \int_0^I L\,i\,di = \frac{1}{2} L I^2 ,
$$
e questo lavoro è l'energia immagazzinata nell'induttore.
:::
::::

::::teorema{#densita-energia-magnetica titolo="Densità di energia del campo magnetico"}
In una regione in cui il campo magnetico ha modulo $B$, nel vuoto, l'energia magnetica per unità di volume è
$$
u_B = \frac{B^2}{2 \mu_0} .
$$
L'energia dell'induttore si trova quindi nel campo magnetico, distribuita nello spazio con densità $u_B$; la formula, ricavata per il solenoide, vale per qualunque campo magnetico, e l'energia contenuta in un volume si ottiene integrando $u_B$. Un campo di $1{,}0\,\mathrm{T}$ ha densità di energia $\dfrac{1}{2 \cdot 4\pi \cdot 10^{-7}}\,\mathrm{J/m^3} \approx 4{,}0 \cdot 10^5\,\mathrm{J/m^3}$. L'analoga formula per il campo elettrico, $u_E = \dfrac{1}{2} \varepsilon_0 E^2$, si trova nell'argomento su conduttori, condensatori e dielettrici.

:::dimostrazione
Si consideri un solenoide di lunghezza $\ell$, con $N$ spire di area $A$, percorso dalla corrente $I$. Per il teorema sull'**induttanza di un solenoide** l'energia vale
$$
U = \frac{1}{2} \frac{\mu_0 N^2 A}{\ell}\,I^2 = \frac{1}{2 \mu_0} \left( \mu_0 \frac{N}{\ell}\,I \right)^2 A \ell = \frac{B^2}{2 \mu_0}\,A \ell ,
$$
dove si è usato $B = \mu_0 \dfrac{N}{\ell}\,I$. Il campo è uniforme all'interno, nel volume $A \ell$, ed è nullo all'esterno, perciò l'energia per unità di volume è $\dfrac{U}{A \ell} = \dfrac{B^2}{2 \mu_0}$.
:::
::::

## Mutua induzione

:::definizione{#mutua-induttanza titolo="Mutua induttanza"}
Siano dati due circuiti rigidi e fermi. Il flusso $\Phi_{21}$ del campo generato dalla corrente $i_1$ del primo circuito, concatenato con il secondo, è proporzionale a $i_1$, e la costante di proporzionalità $M$ è la **mutua induttanza** dei due circuiti:
$$
\Phi_{21} = M\,i_1 , \qquad \mathcal{E}_2 = -M\,\frac{di_1}{dt} .
$$
La seconda formula segue dalla legge di Faraday-Neumann-Lenz e dice che una corrente variabile in un circuito induce una f.e.m. nell'altro. Vale la proprietà di reciprocità, che qui si assume senza dimostrazione, secondo cui il flusso concatenato con il primo circuito dovuto alla corrente $i_2$ del secondo è $M\,i_2$, con la *stessa* costante $M$. La mutua induttanza si misura in henry e dipende dalla forma dei circuiti e dalla loro posizione reciproca. Su questo principio funziona il trasformatore, per il quale si rimanda all'argomento sulle oscillazioni elettriche e i circuiti in corrente alternata.
:::

::::teorema{#mutua-induttanza-solenoidi titolo="Mutua induttanza di due solenoidi coassiali"}
Un solenoide lungo, con $n_1$ spire per unità di lunghezza, contiene al suo interno, lontano dalle estremità, una bobina coassiale di $N_2$ spire di area $A_2$. La mutua induttanza è
$$
M = \mu_0\,n_1 N_2 A_2 .
$$
Con $n_1 = 2000$ spire al metro, $N_2 = 50$ e spire interne di raggio $1{,}0\,\mathrm{cm}$ si ha $M = 4\pi \cdot 10^{-7} \cdot 2000 \cdot 50 \cdot \pi \cdot 0{,}010^2\,\mathrm{H} \approx 3{,}9 \cdot 10^{-5}\,\mathrm{H}$; se la corrente nel solenoide esterno varia di $100\,\mathrm{A}$ al secondo, nella bobina interna si induce una f.e.m. di circa $3{,}9\,\mathrm{mV}$.

:::dimostrazione
La corrente $i_1$ genera all'interno del solenoide esterno il campo uniforme $B_1 = \mu_0 n_1 i_1$, parallelo all'asse. Il flusso attraverso ciascuna spira della bobina interna è $B_1 A_2$, quindi il flusso concatenato con la bobina è
$$
\Phi_{21} = N_2 B_1 A_2 = \mu_0 n_1 N_2 A_2\,i_1 ,
$$
e per la definizione di mutua induttanza $M = \mu_0 n_1 N_2 A_2$.
:::
::::
