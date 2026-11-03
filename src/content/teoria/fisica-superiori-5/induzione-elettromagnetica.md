---
titolo: Induzione elettromagnetica
sommario: Come la variazione del flusso magnetico genera una forza elettromotrice e una corrente in un circuito, come si calcolano la f.e.m. media e istantanea con la legge di Faraday-Neumann, come si trova il verso della corrente indotta con la legge di Lenz, la f.e.m. di una sbarretta in moto con il suo bilancio energetico, le correnti di Foucault e il campo elettrico indotto.
---

## Le esperienze di Faraday

:::osservazione{#esperienza-magnete-bobina titolo="Magnete e bobina"}
Una bobina di molte spire è collegata a un galvanometro, uno strumento che rivela correnti molto deboli e ne indica il verso. Nel circuito non c'è alcun generatore. Faraday osservò i fatti seguenti.

- Quando un magnete a barra si avvicina alla bobina, l'ago del galvanometro si sposta, quindi nel circuito circola una corrente.
- Quando il magnete è fermo, anche dentro la bobina, la corrente è nulla.
- Quando il magnete si allontana, la corrente circola in verso opposto.
- Più il magnete si muove rapidamente, più la corrente è intensa.

Lo stesso accade se il magnete resta fermo e si muove la bobina. Conta quindi il moto *relativo* tra magnete e bobina, perché da esso dipende il fatto che il campo magnetico nei punti della bobina cambi nel tempo.

::grafico{assi=0 uguale=1 poligoni="0.4,-0.35 1.6,-0.35 1.6,0.35 0.4,0.35;1.6,-0.35 2.8,-0.35 2.8,0.35 1.6,0.35" linee="4.140,0.000 4.137,0.195 4.129,0.383 4.116,0.556 4.099,0.707 4.078,0.831 4.054,0.924 4.027,0.981 4.000,1.000 3.973,0.981 3.946,0.924 3.922,0.831 3.901,0.707 3.884,0.556 3.871,0.383 3.863,0.195 3.860,0.000 3.863,-0.195 3.871,-0.383 3.884,-0.556 3.901,-0.707 3.922,-0.831 3.946,-0.924 3.973,-0.981 4.000,-1.000 4.027,-0.981 4.054,-0.924 4.078,-0.831 4.099,-0.707 4.116,-0.556 4.129,-0.383 4.137,-0.195 4.140,-0.000;4.440,0.000 4.437,0.195 4.429,0.383 4.416,0.556 4.399,0.707 4.378,0.831 4.354,0.924 4.327,0.981 4.300,1.000 4.273,0.981 4.246,0.924 4.222,0.831 4.201,0.707 4.184,0.556 4.171,0.383 4.163,0.195 4.160,0.000 4.163,-0.195 4.171,-0.383 4.184,-0.556 4.201,-0.707 4.222,-0.831 4.246,-0.924 4.273,-0.981 4.300,-1.000 4.327,-0.981 4.354,-0.924 4.378,-0.831 4.399,-0.707 4.416,-0.556 4.429,-0.383 4.437,-0.195 4.440,-0.000;4.740,0.000 4.737,0.195 4.729,0.383 4.716,0.556 4.699,0.707 4.678,0.831 4.654,0.924 4.627,0.981 4.600,1.000 4.573,0.981 4.546,0.924 4.522,0.831 4.501,0.707 4.484,0.556 4.471,0.383 4.463,0.195 4.460,0.000 4.463,-0.195 4.471,-0.383 4.484,-0.556 4.501,-0.707 4.522,-0.831 4.546,-0.924 4.573,-0.981 4.600,-1.000 4.627,-0.981 4.654,-0.924 4.678,-0.831 4.699,-0.707 4.716,-0.556 4.729,-0.383 4.737,-0.195 4.740,-0.000;5.040,0.000 5.037,0.195 5.029,0.383 5.016,0.556 4.999,0.707 4.978,0.831 4.954,0.924 4.927,0.981 4.900,1.000 4.873,0.981 4.846,0.924 4.822,0.831 4.801,0.707 4.784,0.556 4.771,0.383 4.763,0.195 4.760,0.000 4.763,-0.195 4.771,-0.383 4.784,-0.556 4.801,-0.707 4.822,-0.831 4.846,-0.924 4.873,-0.981 4.900,-1.000 4.927,-0.981 4.954,-0.924 4.978,-0.831 4.999,-0.707 5.016,-0.556 5.029,-0.383 5.037,-0.195 5.040,-0.000;4.000,-1.000 4.000,-2.200 4.100,-2.200;4.800,-2.200 4.900,-2.200 4.900,-1.000;4.800,-2.200 4.793,-2.132 4.773,-2.066 4.741,-2.006 4.697,-1.953 4.644,-1.909 4.584,-1.877 4.518,-1.857 4.450,-1.850 4.382,-1.857 4.316,-1.877 4.256,-1.909 4.203,-1.953 4.159,-2.006 4.127,-2.066 4.107,-2.132 4.100,-2.200 4.107,-2.268 4.127,-2.334 4.159,-2.394 4.203,-2.447 4.256,-2.491 4.316,-2.523 4.382,-2.543 4.450,-2.550 4.518,-2.543 4.584,-2.523 4.644,-2.491 4.697,-2.447 4.741,-2.394 4.773,-2.334 4.793,-2.268 4.800,-2.200" vettori="1.6,0.8,3.0,0.8,v;4.45,-2.2,4.65,-2.0" etichette="0.85,-0.12,S;2.05,-0.12,N;4.33,-2.95,G;4.2,1.35,bobina" xmin=0 xmax=5.6 ymin=-3.2 ymax=1.7 titolo="Il magnete si avvicina alla bobina con velocità $\vec{v}$: finché il magnete è in moto, il galvanometro $G$ collegato alla bobina rivela una corrente"}

:::

:::osservazione{#esperienza-due-circuiti titolo="Due circuiti accoppiati"}
Faraday avvolse due bobine sullo stesso anello di ferro. La prima, detta **circuito primario**, era collegata a una pila attraverso un interruttore; la seconda, detta **circuito secondario**, era collegata soltanto a un galvanometro. I due circuiti non hanno contatti elettrici.

- Alla chiusura dell'interruttore il galvanometro del secondario segna una corrente breve, che poi si annulla.
- Finché nel primario circola una corrente costante, nel secondario la corrente è nulla.
- All'apertura dell'interruttore il galvanometro segna di nuovo una corrente breve, in verso opposto.

La corrente del primario produce un campo magnetico che attraversa anche il secondario. Nel secondario circola corrente solo mentre la corrente del primario, e quindi il suo campo, sta cambiando. Si conclude che in un circuito si genera una corrente ogni volta che varia il campo magnetico che lo attraversa, sia per il moto di un magnete sia per la variazione di una corrente vicina.
:::

:::definizione{#corrente-indotta titolo="Corrente indotta e f.e.m. indotta"}
Il fenomeno osservato da Faraday si chiama **induzione elettromagnetica**. La corrente che circola nel circuito senza un generatore si chiama **corrente indotta**, e la forza elettromotrice che la produce si chiama **forza elettromotrice indotta** (f.e.m. indotta), indicata con $\mathcal{E}$. Se il circuito ha resistenza complessiva $R$, per la prima legge di Ohm la corrente indotta è
$$
i = \frac{\mathcal{E}}{R} .
$$
Se il circuito è aperto, la corrente è nulla, ma ai capi dell'interruzione si misura una differenza di potenziale uguale alla f.e.m. indotta. Per esempio, una f.e.m. indotta di $0{,}60\,\mathrm{V}$ in un circuito di resistenza $3{,}0\,\mathrm{\Omega}$ produce una corrente di $\dfrac{0{,}60}{3{,}0}\,\mathrm{A} = 0{,}20\,\mathrm{A}$.
:::

## Flusso del campo magnetico concatenato

:::richiamo{titolo="Flusso del campo magnetico attraverso una superficie piana"}
Se una superficie piana di area $S$ si trova in un campo magnetico uniforme $\vec{B}$, e $\theta$ è l'angolo tra $\vec{B}$ e il versore $\hat{n}$ normale alla superficie, il flusso del campo magnetico è $\Phi(\vec{B}) = B S \cos\theta$. Si misura in weber, $1\,\mathrm{Wb} = 1\,\mathrm{T\cdot m^2}$. Si rimanda all'argomento sulle sorgenti del campo magnetico.
:::

:::definizione{#flusso-concatenato titolo="Flusso concatenato con una spira e con una bobina"}
Il **flusso concatenato** con una spira è il flusso del campo magnetico attraverso la superficie che ha la spira come contorno; si indica con $\Phi_B$. Per una spira piana di area $S$ in un campo uniforme vale
$$
\Phi_B = B S \cos\theta .
$$
Una **bobina** è formata da $N$ spire uguali, attraversate dallo stesso campo. Il flusso concatenato con la bobina è la somma dei flussi attraverso le singole spire, quindi è $N$ volte il flusso attraverso una spira:
$$
\Phi_B = N B S \cos\theta .
$$
Il flusso concatenato è la grandezza da cui dipende la f.e.m. indotta. Per una spira quadrata di lato $10\,\mathrm{cm}$ in un campo di $0{,}40\,\mathrm{T}$, con $\theta = 60^\circ$, si ha $\Phi_B = 0{,}40 \cdot 0{,}010 \cdot \cos 60^\circ\,\mathrm{Wb} = 2{,}0 \cdot 10^{-3}\,\mathrm{Wb}$. Una bobina di $250$ spire circolari di raggio $2{,}0\,\mathrm{cm}$, perpendicolari a un campo di $0{,}12\,\mathrm{T}$, ha invece $\theta = 0^\circ$ e
$$
\Phi_B = 250 \cdot 0{,}12 \cdot \pi \cdot 0{,}020^2\,\mathrm{Wb} \approx 3{,}8 \cdot 10^{-2}\,\mathrm{Wb} .
$$

::grafico{assi=0 uguale=1 unicolore=1 poligoni="1.849,2.207 4.101,0.907 4.151,0.993 1.899,2.293" vettori="-0.4,0.4,1.2,0.4;-0.4,1.4,1.2,1.4,B;-0.4,2.4,1.2,2.4;-0.4,3.4,1.2,3.4;3.0,1.6,3.7,2.812,n̂" segmenti="3.0,1.6,4.6,1.6" punti="3.0,1.6,pieno" etichette="3.75,1.75,θ;1.55,2.6,spira" xmin=-0.7 xmax=5 ymin=0 ymax=3.8 titolo="Spira vista di taglio in un campo uniforme $\vec{B}$: il flusso concatenato è $B S \cos\theta$, dove $\theta$ è l'angolo tra $\vec{B}$ e la normale $\hat{n}$; in figura $\theta = 60^\circ$"}

:::

:::attenzione{#angolo-normale}
L'angolo $\theta$ della formula è l'angolo tra il campo e la *normale* alla spira, non l'angolo tra il campo e il piano della spira. Una spira con il piano inclinato di $30^\circ$ rispetto a un campo di $0{,}50\,\mathrm{T}$ ha la normale inclinata di $60^\circ$ rispetto al campo. Con area $0{,}020\,\mathrm{m^2}$ il flusso è quindi $0{,}50 \cdot 0{,}020 \cdot \cos 60^\circ\,\mathrm{Wb} = 5{,}0 \cdot 10^{-3}\,\mathrm{Wb}$; usando per errore $\cos 30^\circ$ si otterrebbe $8{,}7 \cdot 10^{-3}\,\mathrm{Wb}$.
:::

:::osservazione{#modi-variare-flusso titolo="Modi di far variare il flusso"}
Nella formula $\Phi_B = N B S \cos\theta$ compaiono tre grandezze che possono cambiare nel tempo, e ciascuna corrisponde a un modo di produrre una corrente indotta.

- Varia il modulo $B$ del campo: un magnete si avvicina o si allontana, oppure cambia la corrente in un circuito vicino.
- Varia l'area $S$ del circuito: un lato del circuito si sposta, come la sbarretta che scorre su due binari.
- Varia l'angolo $\theta$: la spira ruota nel campo, come nell'alternatore studiato nell'argomento sulla corrente alternata.

Tutte le esperienze di Faraday rientrano in uno di questi casi, e la legge di Faraday-Neumann li descrive con un'unica formula.
:::

## Legge di Faraday-Neumann

:::teorema{#legge-faraday-neumann titolo="Legge di Faraday-Neumann"}
È una legge sperimentale. Se il flusso concatenato con un circuito varia di $\Delta\Phi_B$ nell'intervallo di tempo $\Delta t$, nel circuito si genera una f.e.m. indotta il cui valore medio è
$$
\mathcal{E}_m = -\frac{\Delta\Phi_B}{\Delta t} .
$$
La f.e.m. dipende soltanto dalla *rapidità* con cui varia il flusso, quindi un flusso grande e costante dà una f.e.m. nulla. Il significato del segno meno è dato dalla legge di Lenz. La legge serve a calcolare la f.e.m. in ogni situazione in cui si conosce il flusso. Per esempio, una bobina di $100$ spire di area $40\,\mathrm{cm^2}$ è perpendicolare a un campo che cresce da $0{,}10\,\mathrm{T}$ a $0{,}50\,\mathrm{T}$ in $0{,}20\,\mathrm{s}$. Il flusso concatenato varia di
$$
\Delta\Phi_B = 100 \cdot 40 \cdot 10^{-4} \cdot (0{,}50 - 0{,}10)\,\mathrm{Wb} = 0{,}16\,\mathrm{Wb} ,
$$
quindi la f.e.m. media ha modulo $\dfrac{0{,}16}{0{,}20}\,\mathrm{V} = 0{,}80\,\mathrm{V}$. Se la bobina è chiusa su una resistenza complessiva di $4{,}0\,\mathrm{\Omega}$, la corrente indotta media è $0{,}20\,\mathrm{A}$.
:::

:::definizione{#fem-istantanea titolo="F.e.m. indotta istantanea"}
La f.e.m. in un istante $t$ si ottiene facendo tendere a zero l'intervallo $\Delta t$. Il limite del rapporto $\dfrac{\Delta\Phi_B}{\Delta t}$ per $\Delta t \to 0$ è la derivata del flusso rispetto al tempo, come si è visto nell'argomento sulle derivate di Matematica 5° anno. La **f.e.m. istantanea** è quindi
$$
\mathcal{E}(t) = -\frac{d\Phi_B}{dt} .
$$
Se il flusso varia in modo uniforme, cioè cresce o cala della stessa quantità in tempi uguali, la f.e.m. istantanea è costante e coincide con quella media. Per esempio, se il flusso concatenato con una spira è $\Phi_B(t) = 2{,}0 \cdot 10^{-3}\,t^2$, con $\Phi_B$ in weber e $t$ in secondi, la derivata è $4{,}0 \cdot 10^{-3}\,t$, quindi
$$
\mathcal{E}(t) = -4{,}0 \cdot 10^{-3}\,t ,
\qquad
\mathcal{E}(3{,}0\,\mathrm{s}) = -1{,}2 \cdot 10^{-2}\,\mathrm{V} = -12\,\mathrm{mV} .
$$
Nello stesso esempio la f.e.m. media tra $0$ e $3{,}0\,\mathrm{s}$ è $-\dfrac{18 \cdot 10^{-3}\,\mathrm{Wb}}{3{,}0\,\mathrm{s}} = -6{,}0\,\mathrm{mV}$, diversa dal valore istantaneo, perché il flusso non varia in modo uniforme.

::grafico{f="(x>=0?1:NaN)*2*x^2;12*x-18;6*x" punti="3,18,pieno" segmenti="3,0,3,18" xmin=-0.5 xmax=4.5 ymin=-4 ymax=36 nomi="t,Φ" legenda="\Phi_B(t) = 2t^2;\text{tangente in } t = 3;\text{secante tra } 0 \text{ e } 3" titolo="Flusso $\Phi_B$ in $\mathrm{mWb}$ in funzione di $t$ in $\mathrm{s}$: la f.e.m. istantanea in $t = 3\,\mathrm{s}$ è l'opposto della pendenza della tangente, $-12\,\mathrm{mV}$; la f.e.m. media tra $0$ e $3\,\mathrm{s}$ è l'opposto della pendenza della secante, $-6\,\mathrm{mV}$"}

:::

:::esempio{#lettura-grafico-flusso titolo="F.e.m. letta dal grafico del flusso"}
Il flusso concatenato con una spira cresce in modo uniforme da $0$ a $12\,\mathrm{mWb}$ tra $t = 0$ e $t = 2\,\mathrm{s}$, resta costante fino a $t = 3\,\mathrm{s}$ e poi torna a zero in modo uniforme tra $t = 3\,\mathrm{s}$ e $t = 4\,\mathrm{s}$. In ogni tratto il grafico è un segmento, quindi la f.e.m. è costante e si calcola con la f.e.m. media:
$$
\mathcal{E} =
\begin{cases}
-\dfrac{12\,\mathrm{mWb}}{2\,\mathrm{s}} = -6\,\mathrm{mV} & \text{se } 0 < t < 2\,\mathrm{s} \\[10pt]
0 & \text{se } 2\,\mathrm{s} < t < 3\,\mathrm{s} \\[10pt]
-\dfrac{-12\,\mathrm{mWb}}{1\,\mathrm{s}} = 12\,\mathrm{mV} & \text{se } 3\,\mathrm{s} < t < 4\,\mathrm{s}
\end{cases}
$$
La f.e.m. cambia segno quando il flusso passa dalla crescita alla diminuzione, e il suo modulo è doppio nell'ultimo tratto, perché lì il flusso varia della stessa quantità in metà tempo. Dove il flusso è costante la f.e.m. è nulla, anche se il flusso vale $12\,\mathrm{mWb}$.

::grafico{f="x<0?NaN:(x<=2?6*x:(x<=3?12:(x<=4?12-12*(x-3):0)))" xmin=-0.5 xmax=5 ymin=-2 ymax=14 nomi="t,Φ" legenda="\Phi_B(t)" titolo="Flusso concatenato $\Phi_B$ in $\mathrm{mWb}$ in funzione del tempo $t$ in $\mathrm{s}$: la f.e.m. vale $-6\,\mathrm{mV}$ nel primo tratto, $0$ nel secondo e $12\,\mathrm{mV}$ nel terzo"}

:::

## Legge di Lenz

:::teorema{#legge-di-lenz titolo="Legge di Lenz"}
È una legge sperimentale. La corrente indotta circola in un verso tale che il campo magnetico da essa prodotto si oppone alla **variazione** del flusso che l'ha generata.

La legge di Lenz dà il significato del segno meno nella legge di Faraday-Neumann, che con questo segno si chiama **legge di Faraday-Neumann-Lenz**. Serve a trovare il verso della corrente indotta, in tre passi:

1. si stabilisce se il flusso concatenato aumenta o diminuisce;
2. si deduce il verso del campo indotto all'interno del circuito, opposto al campo esterno se il flusso aumenta e concorde se il flusso diminuisce;
3. con la regola della mano destra si trova il verso della corrente che produce quel campo.

Per esempio, una spira giace nel piano del foglio in un campo uscente ($\odot$) che aumenta. Il flusso uscente aumenta, quindi il campo indotto all'interno della spira è entrante ($\otimes$). Con il pollice della mano destra rivolto verso il foglio le dita piegate girano in verso orario, perciò la corrente indotta circola in verso **orario**.

Il segno della f.e.m. si legge rispetto alla normale $\hat{n}$ scelta per calcolare il flusso. Una f.e.m. positiva fa circolare la corrente nel verso che, per la regola della mano destra, genera un campo concorde con $\hat{n}$; una f.e.m. negativa la fa circolare nel verso opposto. Nell'esempio, con $\hat{n}$ uscente, il flusso cresce, quindi la f.e.m. è negativa e la corrente genera un campo entrante.
:::

:::esempio{#magnete-anello titolo="Un magnete che si avvicina a un anello"}
Il polo nord di un magnete si avvicina a un anello conduttore lungo il suo asse. Il campo del magnete esce dal polo nord, quindi attraversa l'anello allontanandosi dal magnete, e il flusso cresce perché il magnete è sempre più vicino. Per la legge di Lenz il campo indotto all'interno dell'anello è rivolto verso il magnete. Guardando l'anello dal lato del magnete, il campo indotto viene verso chi guarda, quindi per la regola della mano destra la corrente circola in verso antiorario. La faccia dell'anello rivolta verso il magnete si comporta allora come un polo nord, e respinge il magnete che si avvicina.

::grafico{assi=0 uguale=1 poligoni="0.2,-0.3 1.2,-0.3 1.2,0.3 0.2,0.3;1.2,-0.3 2.2,-0.3 2.2,0.3 1.2,0.3" linee="4.110,0.000 4.108,0.250 4.102,0.494 4.093,0.726 4.079,0.940 4.063,1.131 4.044,1.294 4.023,1.426 3.999,1.522 3.975,1.580 3.950,1.600 3.925,1.580 3.901,1.522 3.877,1.426 3.856,1.294 3.837,1.131 3.821,0.940 3.807,0.726 3.798,0.494 3.792,0.250 3.790,0.000 3.792,-0.250 3.798,-0.494 3.807,-0.726 3.821,-0.940 3.837,-1.131 3.856,-1.294 3.877,-1.426 3.901,-1.522 3.925,-1.580 3.950,-1.600 3.975,-1.580 3.999,-1.522 4.023,-1.426 4.044,-1.294 4.063,-1.131 4.079,-0.940 4.093,-0.726 4.102,-0.494 4.108,-0.250 4.110,-0.000" vettori="1.2,0.75,2.4,0.75,v;2.6,0,3.5,0,B;4.6,-0.45,3.4,-0.45,B′" etichette="0.6,-0.1,S;1.6,-0.1,N;3.2,1.5,N;4.45,1.5,S" xmin=0 xmax=5.6 ymin=-2.2 ymax=2.2 titolo="Il polo nord del magnete si avvicina all'anello: il campo $\vec{B}$ del magnete attraversa l'anello e il suo flusso cresce, quindi il campo indotto $\vec{B}\,'$ è rivolto verso il magnete e la faccia dell'anello vicina al magnete diventa un polo nord"}

:::

:::osservazione{#lenz-energia titolo="Legge di Lenz e conservazione dell'energia"}
La legge di Lenz è una conseguenza della conservazione dell'energia. Nell'esempio del magnete e dell'anello la corrente indotta respinge il magnete, quindi chi spinge il magnete compie un lavoro positivo contro questa forza, e il lavoro diventa l'energia elettrica della corrente indotta, che si trasforma in calore nell'anello. Se la corrente indotta circolasse nel verso opposto, l'anello attirerebbe il magnete; il magnete accelererebbe, la variazione del flusso diventerebbe più rapida e la corrente più intensa, e si otterrebbero energia cinetica ed energia elettrica senza alcun lavoro dall'esterno, contro il principio di conservazione dell'energia.
:::

:::attenzione{#lenz-variazione}
Il campo indotto si oppone alla *variazione* del flusso, e non al campo esterno. Quando il flusso diminuisce, il campo indotto è concorde con il campo esterno. Se il campo uscente dell'esempio della spira nel foglio diminuisce, il flusso uscente diminuisce; il campo indotto all'interno della spira è allora uscente, e la corrente circola in verso antiorario.
:::

## Corrente indotta e carica che attraversa il circuito

:::teorema{#corrente-indotta-flusso titolo="Corrente indotta e flusso"}
In un circuito di resistenza complessiva $R$, in cui il flusso concatenato varia, la corrente indotta è
$$
i = \frac{\mathcal{E}}{R} = -\frac{1}{R}\,\frac{d\Phi_B}{dt} .
$$
La relazione segue dalla prima legge di Ohm e dalla legge di Faraday-Neumann-Lenz; si suppone che il campo magnetico prodotto dalla corrente indotta sia trascurabile rispetto al campo esterno. La corrente indotta è proporzionale alla rapidità con cui varia il flusso, ed esiste solo finché il flusso varia. Se una f.e.m. indotta di $12\,\mathrm{mV}$ agisce in una spira di resistenza $0{,}040\,\mathrm{\Omega}$, la corrente indotta è $\dfrac{12 \cdot 10^{-3}}{0{,}040}\,\mathrm{A} = 0{,}30\,\mathrm{A}$.
:::

::::teorema{#carica-indotta titolo="Carica che attraversa il circuito"}
Sia $R$ la resistenza complessiva di un circuito, e sia $\Delta\Phi_B$ la variazione del suo flusso concatenato in un intervallo di tempo in cui il flusso varia sempre nello stesso senso, cioè solo crescendo o solo diminuendo. Allora la carica che attraversa una sezione del circuito in quell'intervallo ha modulo
$$
q = \frac{|\Delta\Phi_B|}{R} .
$$

La carica dipende soltanto dalla variazione del flusso e non dal tempo impiegato. Una variazione lenta produce una corrente debole per un tempo lungo, una variazione rapida una corrente intensa per un tempo breve, e il prodotto è lo stesso. Per esempio, una spira circolare di raggio $4{,}0\,\mathrm{cm}$ e resistenza $0{,}050\,\mathrm{\Omega}$ è perpendicolare a un campo di $0{,}30\,\mathrm{T}$ e viene estratta dal campo. Il flusso passa da $0{,}30 \cdot \pi \cdot 0{,}040^2\,\mathrm{Wb} \approx 1{,}51 \cdot 10^{-3}\,\mathrm{Wb}$ a zero, quindi
$$
q = \frac{1{,}51 \cdot 10^{-3}}{0{,}050}\,\mathrm{C} \approx 3{,}0 \cdot 10^{-2}\,\mathrm{C} ,
$$
qualunque sia la rapidità dell'estrazione. Misurando la carica si può quindi misurare il campo magnetico.

:::dimostrazione
L'idea è dividere l'intervallo in tanti intervalli brevi e sommare le cariche che passano in ciascuno.

Si divide l'intervallo in intervalli $\Delta t_1$, $\Delta t_2$, … così brevi che in ciascuno la corrente si può considerare costante. Nel primo intervallo il flusso varia di $\Delta\Phi_1$, quindi per la legge di Faraday-Neumann-Lenz la corrente è $i_1 = -\dfrac{\Delta\Phi_1}{R\,\Delta t_1}$. La carica che passa in quell'intervallo è il prodotto della corrente per il tempo:
$$
q_1 = i_1\,\Delta t_1 = -\frac{\Delta\Phi_1}{R\,\Delta t_1} \cdot \Delta t_1 = -\frac{\Delta\Phi_1}{R} .
$$
Lo stesso vale in ogni intervallo, perciò la carica totale è
$$
q_1 + q_2 + \ldots = -\frac{\Delta\Phi_1 + \Delta\Phi_2 + \ldots}{R} = -\frac{\Delta\Phi_B}{R} ,
$$
perché la somma delle variazioni del flusso nei singoli intervalli è la variazione totale $\Delta\Phi_B$. Il flusso varia sempre nello stesso senso, quindi tutte le cariche $q_1$, $q_2$, … hanno lo stesso segno e la carica passa sempre nello stesso verso. Il modulo della carica è perciò $\dfrac{|\Delta\Phi_B|}{R}$.
:::
::::

## Forza elettromotrice cinetica

:::richiamo{titolo="Forza di Lorentz"}
Su una carica $q$ che si muove con velocità $\vec{v}$ in un campo magnetico $\vec{B}$ agisce la forza $\vec{F} = q\,\vec{v} \times \vec{B}$, di modulo $|q|\,v B \sin\alpha$, dove $\alpha$ è l'angolo tra $\vec{v}$ e $\vec{B}$. Su un filo rettilineo di lunghezza $\ell$ percorso dalla corrente $I$ agisce la forza $\vec{F} = I\,\vec{\ell} \times \vec{B}$. Si rimanda all'argomento sul campo magnetico e la forza di Lorentz.
:::

::::teorema{#fem-cinetica titolo="F.e.m. di una sbarretta in moto"}
Una sbarretta conduttrice di lunghezza $\ell$ si muove con velocità costante $\vec{v}$ in un campo magnetico uniforme $\vec{B}$, e la sbarretta, $\vec{v}$ e $\vec{B}$ sono perpendicolari a due a due. Allora tra gli estremi della sbarretta si genera la f.e.m.
$$
\mathcal{E} = B \ell v .
$$
Si chiama **f.e.m. cinetica** (o mozionale), perché è dovuta al moto del conduttore. Se la sbarretta scorre su due binari conduttori chiusi da un resistore $R$, nel circuito circola la corrente $I = \dfrac{B \ell v}{R}$. Per esempio, una sbarretta lunga $25\,\mathrm{cm}$ che si muove a $4{,}0\,\mathrm{m/s}$ in un campo di $0{,}60\,\mathrm{T}$ ha ai capi la f.e.m. $0{,}60 \cdot 0{,}25 \cdot 4{,}0\,\mathrm{V} = 0{,}60\,\mathrm{V}$, e con $R = 1{,}5\,\mathrm{\Omega}$ la corrente è $0{,}40\,\mathrm{A}$.

::grafico{assi=0 uguale=1 linee="0,2.4 7,2.4;0,0 7,0;0,2.4 0,1.9 0.3,1.8 -0.3,1.6 0.3,1.4 -0.3,1.2 0.3,1.0 -0.3,0.8 0.3,0.6 0,0.5 0,0" poligoni="3.92,-0.3 4.08,-0.3 4.08,2.7 3.92,2.7" vettori="4.2,1.8,5.4,1.8,v;3.8,0.6,2.6,0.6,F;2.8,2.7,1.6,2.7,i;4.25,0.9,4.25,1.5" etichette="-0.8,1.2,R;1.2,1.7,⊗;2.4,1.7,⊗;1.2,0.7,⊗;5.6,0.6,⊗;6.4,1.7,⊗;6.4,0.6,⊗;4.4,1.15,i;4.15,-0.45,ℓ;6.4,2.8,B ⊗" xmin=-1.2 xmax=7.2 ymin=-0.8 ymax=3.2 titolo="Sbarretta su due binari in un campo $\vec{B}$ entrante nel foglio ($\otimes$): la sbarretta si muove verso destra, la corrente indotta sale lungo la sbarretta e circola in verso antiorario, e la forza magnetica $\vec{F}$ sulla sbarretta è rivolta verso sinistra"}

:::dimostrazione
La f.e.m. si ricava in due modi, che danno lo stesso risultato.

*Con la forza di Lorentz.* Gli elettroni di conduzione e gli ioni della sbarretta si muovono insieme alla sbarretta con velocità $\vec{v}$. Su una carica $q$ della sbarretta agisce quindi la **forza di Lorentz** $q\,\vec{v} \times \vec{B}$. Poiché $\vec{v}$ e $\vec{B}$ sono perpendicolari, la forza ha modulo $q v B$; inoltre è perpendicolare sia a $\vec{v}$ sia a $\vec{B}$, quindi è diretta lungo la sbarretta. La f.e.m. è il lavoro compiuto su una carica che percorre la sbarretta da un estremo all'altro, diviso per la carica. La forza è costante e parallela allo spostamento $\ell$, perciò il lavoro è $W = q v B\,\ell$ e
$$
\mathcal{E} = \frac{W}{q} = \frac{q v B\,\ell}{q} = B \ell v .
$$

*Con la variazione del flusso.* Si considera il circuito formato dalla sbarretta, dai binari e dal resistore. Sia $x$ la distanza della sbarretta dal resistore; l'area del circuito è $S = \ell x$, e il campo è perpendicolare al circuito, quindi il flusso concatenato è $\Phi_B = B \ell x$. Nell'intervallo $\Delta t$ la sbarretta percorre $\Delta x = v\,\Delta t$, e il flusso varia di
$$
\Delta\Phi_B = B \ell\,\Delta x = B \ell v\,\Delta t .
$$
Per la **legge di Faraday-Neumann** il modulo della f.e.m. è $\dfrac{\Delta\Phi_B}{\Delta t} = B \ell v$, in accordo con il primo calcolo.
:::
::::

:::osservazione{#verso-corrente-sbarretta titolo="Verso della corrente nella sbarretta"}
Il verso della corrente indotta si trova con la forza di Lorentz o con la legge di Lenz, e i due metodi sono coerenti. Nella figura il campo è entrante e la sbarretta si muove verso destra. Per la regola della mano destra il prodotto $\vec{v} \times \vec{B}$ è rivolto verso l'alto del foglio, quindi le cariche positive sono spinte verso l'alto e la corrente sale lungo la sbarretta. Con la legge di Lenz si ragiona così: l'area del circuito aumenta, quindi aumenta il flusso entrante; il campo indotto all'interno del circuito è uscente, e una corrente in verso antiorario produce proprio un campo uscente. In entrambi i casi la corrente sale nella sbarretta e circola in verso antiorario.
:::

## Forza frenante e bilancio energetico

::::teorema{#forza-frenante titolo="Forza frenante e bilancio energetico"}
Una sbarretta di lunghezza $\ell$ scorre con velocità costante $v$ su due binari chiusi da un resistore $R$, in un campo uniforme $\vec{B}$ perpendicolare al piano dei binari. Le resistenze della sbarretta e dei binari e gli attriti sono trascurabili. Allora sulla sbarretta agisce una forza magnetica opposta alla velocità, di modulo
$$
F = \frac{B^2 \ell^2 v}{R} ,
$$
e la potenza della forza esterna che mantiene costante la velocità è uguale alla potenza dissipata nel resistore:
$$
P_{\text{mecc}} = F v = R I^2 = P_{\text{diss}} .
$$
Il lavoro di chi trascina la sbarretta si trasforma tutto in energia elettrica, e poi in calore nel resistore per effetto Joule. Con i dati dell'esempio della f.e.m. cinetica, $B = 0{,}60\,\mathrm{T}$, $\ell = 0{,}25\,\mathrm{m}$, $v = 4{,}0\,\mathrm{m/s}$ e $R = 1{,}5\,\mathrm{\Omega}$, la corrente è $I = 0{,}40\,\mathrm{A}$ e
$$
F = I \ell B = 0{,}40 \cdot 0{,}25 \cdot 0{,}60\,\mathrm{N} = 0{,}060\,\mathrm{N} ,
\qquad
F v = 0{,}24\,\mathrm{W} ,
\qquad
R I^2 = 1{,}5 \cdot 0{,}40^2\,\mathrm{W} = 0{,}24\,\mathrm{W} .
$$

:::dimostrazione
Per il teorema sulla f.e.m. di una sbarretta in moto, nel circuito agisce la f.e.m. $B \ell v$, quindi circola la corrente
$$
I = \frac{B \ell v}{R} .
$$
La sbarretta è un filo di lunghezza $\ell$ percorso dalla corrente $I$ e perpendicolare a $\vec{B}$, perciò su di essa agisce la forza magnetica $I\,\vec{\ell} \times \vec{B}$, di modulo
$$
F = I \ell B = \frac{B \ell v}{R} \cdot \ell B = \frac{B^2 \ell^2 v}{R} .
$$
Per la legge di Lenz la forza si oppone al moto che fa aumentare il flusso, quindi il suo verso è opposto alla velocità. Nella figura della sbarretta la corrente sale e il campo è entrante, quindi $\vec{\ell} \times \vec{B}$ è rivolto verso sinistra, mentre la sbarretta si muove verso destra.

La velocità è costante, quindi per il primo principio della dinamica la forza esterna equilibra la forza magnetica e ha modulo $F$. La sua potenza è
$$
P_{\text{mecc}} = F v = \frac{B^2 \ell^2 v^2}{R} .
$$
La potenza dissipata nel resistore è
$$
P_{\text{diss}} = R I^2 = R \cdot \frac{B^2 \ell^2 v^2}{R^2} = \frac{B^2 \ell^2 v^2}{R} ,
$$
che è uguale a $P_{\text{mecc}}$.
:::
::::

:::osservazione{#sbarretta-libera titolo="Sbarretta lasciata libera e velocità limite"}
Se la forza esterna smette di agire, sulla sbarretta resta solo la forza frenante, che è opposta alla velocità; la sbarretta rallenta, e la sua energia cinetica si trasforma in calore nel resistore. Una sbarretta di $50\,\mathrm{g}$ che si muove a $2{,}0\,\mathrm{m/s}$ dissipa nel resistore, fino all'arresto, l'energia $\dfrac{1}{2} \cdot 0{,}050 \cdot 2{,}0^2\,\mathrm{J} = 0{,}10\,\mathrm{J}$.

Se invece i binari sono verticali e la sbarretta di massa $m$ cade, il peso $mg$ è costante e la forza frenante cresce con la velocità. La velocità cresce finché la forza frenante equilibra il peso, poi resta costante; questa **velocità limite** si ricava dalla condizione
$$
\frac{B^2 \ell^2 v_{\text{lim}}}{R} = m g
\qquad
\Longrightarrow
\qquad
v_{\text{lim}} = \frac{m g R}{B^2 \ell^2} .
$$
Con $m = 10\,\mathrm{g}$, $R = 0{,}50\,\mathrm{\Omega}$, $B = 0{,}50\,\mathrm{T}$ e $\ell = 20\,\mathrm{cm}$ si ottiene $v_{\text{lim}} = \dfrac{0{,}010 \cdot 9{,}81 \cdot 0{,}50}{0{,}50^2 \cdot 0{,}20^2}\,\mathrm{m/s} \approx 4{,}9\,\mathrm{m/s}$. A velocità limite l'energia cinetica non cambia, quindi la potenza del peso, $m g\,v_{\text{lim}} \approx 0{,}48\,\mathrm{W}$, viene tutta dissipata nel resistore.
:::

## Correnti di Foucault

:::definizione{#correnti-foucault titolo="Correnti di Foucault"}
Quando un blocco di metallo si muove in un campo magnetico, oppure si trova in un campo magnetico che varia, il flusso varia attraverso tutti i percorsi chiusi interni al metallo. Nel metallo circolano allora correnti indotte chiuse, dette **correnti di Foucault** o correnti parassite. Per la legge di Lenz queste correnti si oppongono alla causa che le genera, e per effetto Joule riscaldano il metallo.

Per stimarne l'intensità si considera un percorso circolare di raggio $3{,}0\,\mathrm{cm}$ dentro una lastra, perpendicolare a un campo che cresce di $2{,}0\,\mathrm{T}$ al secondo, e si suppone che quel percorso abbia resistenza $1{,}0 \cdot 10^{-3}\,\mathrm{\Omega}$. La f.e.m. lungo il percorso è
$$
\mathcal{E} = \pi \cdot 0{,}030^2 \cdot 2{,}0\,\mathrm{V} \approx 5{,}7 \cdot 10^{-3}\,\mathrm{V} ,
$$
quindi la corrente è circa $5{,}7\,\mathrm{A}$ e la potenza dissipata è circa $\dfrac{\left( 5{,}7 \cdot 10^{-3} \right)^2}{1{,}0 \cdot 10^{-3}}\,\mathrm{W} \approx 32\,\mathrm{mW}$. La resistenza di un metallo massiccio è molto piccola, perciò anche una f.e.m. piccola produce correnti intense.
:::

:::osservazione{#applicazioni-foucault titolo="Freni magnetici e piani a induzione"}
Le correnti di Foucault hanno due effetti, la forza frenante e il calore, e ciascuno ha un'applicazione.

- Nei **freni magnetici** di treni, camion e attrazioni dei luna park, un disco o una lamina di metallo collegata alle ruote passa tra i poli di un elettromagnete. Le correnti di Foucault nel metallo, per la legge di Lenz, producono una forza che si oppone al moto. La forza è proporzionale alla velocità, quindi il freno è efficace alle alte velocità. Il metallo non tocca l'elettromagnete, perciò il freno non consuma pastiglie.
- Nei **piani a induzione** una bobina sotto la piastra è percorsa da una corrente alternata e produce un campo magnetico che varia molte migliaia di volte al secondo. Il campo attraversa il fondo metallico della pentola, dove le correnti di Foucault dissipano energia per effetto Joule. Si scalda quindi la pentola, mentre la piastra resta quasi fredda.

Negli apparecchi in cui le correnti di Foucault sono uno spreco di energia, come i nuclei dei trasformatori, il ferro si divide in lamierini sottili isolati tra loro, così i percorsi chiusi sono piccoli e le correnti deboli.
:::

## Campo elettrico indotto

:::osservazione{#origine-campo-indotto titolo="Che cosa muove le cariche in una spira ferma"}
Nella sbarretta in moto la f.e.m. è dovuta alla forza di Lorentz, perché le cariche si muovono insieme alla sbarretta. In una spira *ferma* attraversata da un campo magnetico che varia le cariche sono inizialmente ferme, e su una carica ferma la forza magnetica è nulla. La corrente indotta mostra però che sulle cariche agisce una forza lungo il filo. Si conclude che il campo magnetico variabile produce un **campo elettrico**, che mette in moto le cariche della spira.
:::

:::definizione{#campo-elettrico-indotto titolo="Campo elettrico indotto"}
Un campo magnetico che varia nel tempo genera nello spazio circostante un **campo elettrico indotto**. Questo campo esiste anche senza la spira; la spira ne rivela la presenza con la corrente indotta. La f.e.m. lungo un percorso chiuso è la **circuitazione** del campo elettrico, cioè la somma dei contributi $\vec{E} \cdot \Delta\vec{\ell}$ lungo il percorso diviso in tratti brevi $\Delta\vec{\ell}$:
$$
\mathcal{E} = \Gamma(\vec{E}) = \sum \vec{E} \cdot \Delta\vec{\ell} .
$$
La legge di Faraday-Neumann-Lenz diventa allora $\Gamma(\vec{E}) = -\dfrac{d\Phi_B}{dt}$, e vale per qualunque percorso chiuso, anche senza conduttori. Le linee del campo elettrico indotto sono **linee chiuse**, che girano attorno alla regione in cui il campo magnetico varia.

Nel caso più simmetrico il campo si calcola facilmente. In una regione circolare il campo magnetico è uniforme, perpendicolare al foglio e varia con rapidità $\dfrac{dB}{dt}$. Le linee del campo elettrico indotto sono circonferenze con lo stesso centro della regione, e lungo una circonferenza di raggio $r$ interna alla regione il campo ha modulo costante ed è tangente. La circuitazione è quindi $E \cdot 2\pi r$, e il flusso attraverso il cerchio è $B\,\pi r^2$. Uguagliando i moduli si ottiene
$$
E \cdot 2\pi r = \pi r^2\,\frac{dB}{dt}
\qquad
\Longrightarrow
\qquad
E = \frac{r}{2}\,\frac{dB}{dt} .
$$
Per $r = 5{,}0\,\mathrm{cm}$ e $\dfrac{dB}{dt} = 0{,}20\,\mathrm{T/s}$ il campo indotto vale $\dfrac{0{,}050}{2} \cdot 0{,}20\,\mathrm{V/m} = 5{,}0 \cdot 10^{-3}\,\mathrm{V/m}$.

::grafico{assi=0 uguale=1 unicolore=1 linee="1.000,0.000 0.991,0.131 0.966,0.259 0.924,0.383 0.866,0.500 0.793,0.609 0.707,0.707 0.609,0.793 0.500,0.866 0.383,0.924 0.259,0.966 0.131,0.991 0.000,1.000 -0.131,0.991 -0.259,0.966 -0.383,0.924 -0.500,0.866 -0.609,0.793 -0.707,0.707 -0.793,0.609 -0.866,0.500 -0.924,0.383 -0.966,0.259 -0.991,0.131 -1.000,0.000 -0.991,-0.131 -0.966,-0.259 -0.924,-0.383 -0.866,-0.500 -0.793,-0.609 -0.707,-0.707 -0.609,-0.793 -0.500,-0.866 -0.383,-0.924 -0.259,-0.966 -0.131,-0.991 -0.000,-1.000 0.131,-0.991 0.259,-0.966 0.383,-0.924 0.500,-0.866 0.609,-0.793 0.707,-0.707 0.793,-0.609 0.866,-0.500 0.924,-0.383 0.966,-0.259 0.991,-0.131 1.000,-0.000;2.000,0.000 1.983,0.261 1.932,0.518 1.848,0.765 1.732,1.000 1.587,1.218 1.414,1.414 1.218,1.587 1.000,1.732 0.765,1.848 0.518,1.932 0.261,1.983 0.000,2.000 -0.261,1.983 -0.518,1.932 -0.765,1.848 -1.000,1.732 -1.218,1.587 -1.414,1.414 -1.587,1.218 -1.732,1.000 -1.848,0.765 -1.932,0.518 -1.983,0.261 -2.000,0.000 -1.983,-0.261 -1.932,-0.518 -1.848,-0.765 -1.732,-1.000 -1.587,-1.218 -1.414,-1.414 -1.218,-1.587 -1.000,-1.732 -0.765,-1.848 -0.518,-1.932 -0.261,-1.983 -0.000,-2.000 0.261,-1.983 0.518,-1.932 0.765,-1.848 1.000,-1.732 1.218,-1.587 1.414,-1.414 1.587,-1.218 1.732,-1.000 1.848,-0.765 1.932,-0.518 1.983,-0.261 2.000,-0.000;3.000,0.000 2.974,0.392 2.898,0.776 2.772,1.148 2.598,1.500 2.380,1.826 2.121,2.121 1.826,2.380 1.500,2.598 1.148,2.772 0.776,2.898 0.392,2.974 0.000,3.000 -0.392,2.974 -0.776,2.898 -1.148,2.772 -1.500,2.598 -1.826,2.380 -2.121,2.121 -2.380,1.826 -2.598,1.500 -2.772,1.148 -2.898,0.776 -2.974,0.392 -3.000,0.000 -2.974,-0.392 -2.898,-0.776 -2.772,-1.148 -2.598,-1.500 -2.380,-1.826 -2.121,-2.121 -1.826,-2.380 -1.500,-2.598 -1.148,-2.772 -0.776,-2.898 -0.392,-2.974 -0.000,-3.000 0.392,-2.974 0.776,-2.898 1.148,-2.772 1.500,-2.598 1.826,-2.380 2.121,-2.121 2.380,-1.826 2.598,-1.500 2.772,-1.148 2.898,-0.776 2.974,-0.392 3.000,-0.000" vettori="1,-0.25,1,0.35;-1,0.25,-1,-0.35;2,-0.4,2,0.6,E;-2,0.4,-2,-0.6;0,3,-1.4,3;0,-3,1.4,-3" etichette="0.45,1.45,⊗;-0.75,1.45,⊗;0.45,-1.6,⊗;-0.75,-1.6,⊗;1.35,2.35,⊗;-1.65,2.35,⊗;1.35,-2.5,⊗;-1.65,-2.5,⊗;-0.25,-0.1,⊗;3.1,2.5,B ⊗ cresce" xmin=-4 xmax=4.6 ymin=-3.5 ymax=3.5 titolo="Linee del campo elettrico indotto in una regione dove il campo magnetico, entrante nel foglio ($\otimes$), cresce: sono circonferenze percorse in verso antiorario, e il campo vale $E = \dfrac{r}{2}\,\dfrac{dB}{dt}$"}

:::

:::attenzione{#campo-indotto-non-conservativo}
Il campo elettrico indotto *non* è conservativo, a differenza del campo elettrostatico prodotto da cariche ferme, che ha circuitazione nulla. Nell'esempio con $r = 5{,}0\,\mathrm{cm}$ e $\dfrac{dB}{dt} = 0{,}20\,\mathrm{T/s}$ la circuitazione lungo la circonferenza è
$$
\Gamma(\vec{E}) = \pi \cdot 0{,}050^2 \cdot 0{,}20\,\mathrm{V} \approx 1{,}6 \cdot 10^{-3}\,\mathrm{V} .
$$
Un elettrone che compie un giro completo riceve quindi il lavoro $e\,\Gamma(\vec{E}) \approx 2{,}5 \cdot 10^{-22}\,\mathrm{J}$, e a ogni giro ne riceve altrettanto, anche se torna nello stesso punto. Per questo campo il potenziale elettrico non si può definire. Il campo elettrico indotto compare nelle equazioni di Maxwell, per le quali si rimanda all'argomento sulle equazioni di Maxwell e le onde elettromagnetiche.
:::
