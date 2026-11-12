---
titolo: "Esponenziali, logaritmi e applicazioni"
sommario: "Funzioni esponenziali e logaritmiche, equazioni e applicazioni a pH, intensità sonora e tempo di dimezzamento."
---

## Crescita e decrescita esponenziale

:::definizione{#esponenziale titolo="Funzione esponenziale"}
Sia $a$ un numero reale positivo diverso da uno. La **funzione esponenziale** di base $a$ associa a ogni esponente reale $x$ il valore $a^x$. La base resta fissa mentre varia l'esponente. Il dominio è $\mathbb R$ e l'insieme dei valori assunti è $(0,+\infty)$. Poiché $a^0=1$, il grafico passa per $(0,1)$.

Un aumento unitario di $x$ moltiplica il valore per $a$, poiché $a^{x+1}=a^x\cdot a$. Se $a>1$ la funzione è strettamente crescente. Se $0<a<1$ è strettamente decrescente. In entrambi i casi l'asse delle ascisse è un asintoto orizzontale. La curva tende a zero per $x\to-\infty$ nel primo caso e per $x\to+\infty$ nel secondo.
:::

:::esempio{titolo="Potenze di due e di un mezzo"}
Per $x=-1,0,1,2$, la funzione $y=2^x$ assume rispettivamente i valori $\dfrac12,1,2,4$. Con gli stessi esponenti la funzione $y=\left(\dfrac12\right)^x$ assume i valori $2,1,\dfrac12,\dfrac14$. La seconda curva è la riflessione della prima rispetto all'asse verticale, poiché $\left(\dfrac12\right)^x=2^{-x}$. Un esponente negativo porta quindi al reciproco della potenza corrispondente. Per esempio, il punto $(1,2)$ della prima curva corrisponde al punto $(-1,2)$ della seconda.

::grafico{f="2^x;2^(-x)" xmin=-3 xmax=3 ymin=-1 ymax=6 punti="-1,2;0,1;1,2" legenda="y=2^x;y=\left(\dfrac12\right)^x" titolo="Le due curve si riflettono rispetto all'asse verticale."}

:::

:::definizione{#fattore titolo="Fattore di variazione per intervallo"}
Una successione di misure positive ha **fattore costante** $q>0$ quando il rapporto fra la misura successiva e la precedente vale sempre $q$ su intervalli di uguale durata. Se la misura iniziale è $Q_0$, dopo $n$ intervalli si ha $Q_n=Q_0q^n$. Il fattore $q$ è un numero privo di unità, poiché è il rapporto tra due quantità della stessa grandezza. Un aumento del $12\%$ in ogni intervallo corrisponde a $q=1{,}12$. Una diminuzione del $12\%$ corrisponde a $q=0{,}88$.
:::

:::esempio{titolo="Variazioni riferite a basi diverse"}
Un sensore perde il $20\%$ della sensibilità a ogni intervallo di funzionamento in un modello a fattore costante. Dopo il primo intervallo rimane l'$80\%$ della sensibilità iniziale. La perdita del secondo intervallo è il $20\%$ della sensibilità già ridotta. La frazione residua dopo due intervalli vale quindi
$$
\frac{Q_2}{Q_0}
=\left(\frac45\right)^2
=\frac{16}{25}
=0{,}64.
$$
La perdita complessiva è il $36\%$. Per stabilire il fattore su due intervalli si moltiplicano i due fattori, poiché il secondo intervallo inizia dal valore ottenuto alla fine del primo.
:::

:::osservazione{titolo="Interpolazione tra due intervalli"}
Il fattore costante su intervalli interi determina la successione delle misure a quelle scadenze. Per usarlo a un tempo intermedio occorre assumere che il modello esponenziale valga anche per i tempi non interi. Sia $\Delta t>0$ la durata di un intervallo. In questo caso si scrive $Q(t)=Q_0q^{\frac{t}{\Delta t}}$. Il rapporto $\dfrac{t}{\Delta t}$ conta quanti intervalli sono trascorsi e perciò è privo di unità. Se $Q_0=50$ e la quantità quadruplica ogni due ore, il fattore su un'ora è $\sqrt4=2$. Il modello continuo prevede dunque $100$ dopo un'ora e $200$ dopo due ore. I soli dati di partenza e arrivo, senza un'ipotesi sulla legge fra le due misure, sono compatibili anche con un andamento lineare.
:::

## Logaritmi, dominio e funzione inversa

:::definizione{#logaritmo titolo="Logaritmo in base a"}
Per $a>0$, $a\ne1$ e $x>0$, il **logaritmo** $\log_a x$ è l'unico esponente $u$ tale che $a^u=x$. La condizione $x>0$ deriva dai valori assunti dall'esponenziale. La base $a$ indica quale famiglia di potenze si usa. L'argomento $x$ indica il numero da ottenere. Il risultato $u$ è l'esponente.

Per esempio, $\log_{10}1000=3$ poiché $10^3=1000$. Invece $\log_{10}(0{,}01)=-2$ poiché $10^{-2}=0{,}01$. La scrittura $\ln x$ indica il logaritmo in base $e$, dove $e\approx2{,}718$. Con le basi dieci ed $e$ si incontrano entrambe le notazioni nelle applicazioni. La base dieci è comoda per le scale decimali. La base $e$ compare quando il modello è scritto con l'esponenziale naturale.
:::

:::esempio{titolo="Ricostruzione dell'esponente"}
Per calcolare $\log_4\left(\dfrac18\right)$ conviene esprimere base e argomento come potenze di due. Ponendo $u$ uguale al risultato, si ottiene
$$
\begin{aligned}
4^u &= \frac18,\\[6pt]
2^{2u} &= 2^{-3},\\[6pt]
u &= -\frac32.
\end{aligned}
$$
La base due è maggiore di uno, quindi l'uguaglianza fra le potenze richiede l'uguaglianza degli esponenti. Il risultato negativo è coerente con un argomento minore di uno e una base maggiore di uno.
:::

:::osservazione{#inverse titolo="Grafici di funzioni inverse"}
Nel passaggio da $y=a^x$ a $x=\log_a y$ si scambiano il dato e l'incognita. Sul grafico, un punto $(x,y)$ dell'esponenziale corrisponde quindi al punto $(y,x)$ del logaritmo. I due grafici sono simmetrici rispetto alla retta $y=x$. Il punto $(0,1)$ dell'esponenziale corrisponde al punto $(1,0)$ del logaritmo. L'asintoto orizzontale dell'esponenziale corrisponde all'asintoto verticale $x=0$ del logaritmo.

::grafico{f="2^x;log(x)/log(2);x" xmin=-2 xmax=5 ymin=-2 ymax=5 uguale=1 punti="0,1;1,0;1,2;2,1" legenda="y=2^x;y=\log_2 x;y=x" titolo="La riflessione rispetto alla bisettrice scambia le coordinate dei punti."}

Per $a>1$ il logaritmo cresce. Assume valori negativi per $0<x<1$, vale zero per $x=1$ ed è positivo per $x>1$. Per $0<a<1$ il logaritmo decresce, quindi il segno è positivo per $0<x<1$ e negativo per $x>1$. Per esempio, $\log_{\frac12}4=-2$ poiché $\left(\dfrac12\right)^{-2}=4$. Il segno va quindi dedotto tenendo conto sia dell'argomento sia della base.
:::

:::attenzione{titolo="Argomenti nulli o negativi"}
Nell'insieme dei reali il logaritmo di zero e quello di un numero negativo non sono definiti. Per esempio, $\log_2(3-x)$ richiede $3-x>0$, quindi $x<3$. Per $x=4$, l'argomento vale $-1$. Nessuna potenza reale di due ha quel valore.
:::

:::esempio{titolo="Ordine degli argomenti con una base minore di uno"}
Consideriamo la disequazione $\log_{\frac12} x>2$. Prima si impone $x>0$. Poiché $\left(\dfrac12\right)^2=\dfrac14$, il secondo membro è $\log_{\frac12}\left(\dfrac14\right)$. La funzione logaritmica di base un mezzo è strettamente decrescente. Il suo valore è dunque maggiore di due quando l'argomento è minore di un quarto. Le due condizioni simultanee sono
$$
\begin{cases}
x>0,\\
x<\frac14.
\end{cases}
$$
L'argomento $\dfrac18$ appartiene all'intervallo trovato e dà logaritmo tre. Il valore $\dfrac12$ è fuori dall'intervallo e dà logaritmo uno. Se la base fosse maggiore di uno, il confronto tra gli argomenti avrebbe lo stesso verso del confronto tra i logaritmi.
:::

## Proprietà e cambio di base

::::teorema{#proprieta titolo="Logaritmi di prodotti, quozienti e potenze"}
Per $a>0$, $a\ne1$, $x>0$, $y>0$ e $r\in\mathbb R$ valgono
$$
\begin{aligned}
\log_a(xy)&=\log_a x+\log_a y,\\[6pt]
\log_a\left(\frac{x}{y}\right)&=\log_a x-\log_a y,\\[6pt]
\log_a(x^r)&=r\log_a x.
\end{aligned}
$$
Le tre identità trasformano operazioni fra quantità positive in operazioni fra esponenti. Per esempio, consentono di separare il contributo di un coefficiente da quello di una potenza di dieci nella notazione scientifica.

:::dimostrazione
Si esprimono i due argomenti come potenze della stessa base. Siano $u=\log_a x$ e $v=\log_a y$. Per definizione $x=a^u$ e $y=a^v$. Le proprietà delle potenze danno
$$
xy=a^{u+v},\qquad \frac{x}{y}=a^{u-v},\qquad x^r=a^{ur}.
$$
Per ciascun argomento positivo il logaritmo in base $a$ restituisce l'esponente di $a$ nella corrispondente uguaglianza. Si ottengono quindi, nell'ordine, $u+v$, $u-v$ e $ur$.
:::
::::

:::esempio{titolo="Separare il coefficiente dall'ordine di grandezza"}
Sia $w=2\cdot10^{-3}$. Il coefficiente $2$ è compreso fra $1$ e $10$. Poiché il logaritmo decimale è crescente, $\log_{10}2$ è compreso fra $0$ e $1$. Ne segue che $\log_{10}w$ è compreso fra $-3$ e $-2$. Per un calcolo numerico, dato $\log_{10}2\approx0{,}301$, si ottiene
$$
\begin{aligned}
\log_{10}w
&=\log_{10}2+\log_{10}(10^{-3})\\[6pt]
&\approx 0{,}301-3=-2{,}699.
\end{aligned}
$$
Il valore stimato appartiene all'intervallo previsto. Questa stima permette di accorgersi di un eventuale errore di segno prima di usare il risultato in un calcolo successivo.
:::

:::osservazione{#cambio-base titolo="Cambio di base"}
Siano $a$ e $b$ due basi positive diverse da uno e sia $x>0$. Ponendo $u=\log_a x$ si ha $a^u=x$. Si applica il logaritmo in base $b$ ai due membri e si usa la proprietà della potenza. Risulta
$$
u\log_b a=\log_b x,\qquad
\log_a x=\frac{\log_b x}{\log_b a}.
$$
Poiché $a\ne1$, il denominatore è diverso da zero. Per esempio,
$\log_8 4=\dfrac{\ln 4}{\ln 8}=\dfrac{2\ln 2}{3\ln 2}=\dfrac23$. Il cambio di base permette anche di passare alla base disponibile sulla calcolatrice, mantenendo la stessa base al numeratore e al denominatore.
:::

:::attenzione{titolo="Somme all'interno del logaritmo"}
La proprietà del prodotto non vale per una somma di argomenti. Per esempio, $\log_{10}(1+9)=1$, mentre $\log_{10}1+\log_{10}9=\log_{10}9<1$. La prima espressione richiede il logaritmo di dieci. La seconda è il logaritmo del prodotto fra uno e nove.
:::

:::esempio{titolo="Logaritmo di un rapporto di misure"}
Due campioni hanno masse $m_1=12\,\mathrm g$ e $m_2=3\,\mathrm g$. Si vuole il logaritmo in base due del loro rapporto. Poiché le unità sono uguali, il rapporto è il numero quattro e il logaritmo vale due. La stessa operazione con la seconda massa espressa in milligrammi richiede prima di riscrivere la prima massa come $12000\,\mathrm{mg}$. Il risultato resta due. In generale il logaritmo di una grandezza misurata si formula come logaritmo del rapporto rispetto a un riferimento della stessa grandezza. In questo modo il suo valore è indipendente dalla scelta dell'unità, purché si convertano entrambe le quantità.
:::

## Equazioni esponenziali e logaritmiche

:::osservazione{#equazioni titolo="Isolare la potenza"}
Con $a>0$, $a\ne1$ e $b>0$, l'equazione $a^x=b$ ha la soluzione $x=\log_a b$. Se $b$ è una potenza riconoscibile di $a$, si possono uguagliare gli esponenti. Negli altri casi il logaritmo esprime comunque una soluzione esatta. Prima di applicare il logaritmo si isola la potenza, perché l'argomento deve essere il rapporto o la quantità positiva che coincide con quella potenza.
:::

:::esempio{titolo="Incognita nell'esponente"}
Per risolvere $3\cdot2^{x-1}=15$, si divide per tre e si applica il logaritmo in base due. Si ha
$$
\begin{aligned}
2^{x-1}&=5,\\[6pt]
x-1&=\log_2 5,\\[6pt]
x&=1+\log_2 5.
\end{aligned}
$$
Poiché $2^2<5<2^3$, si ottiene $3<x<4$. Questo intervallo è coerente con il problema iniziale, perché il primo membro vale dodici per $x=3$ e ventiquattro per $x=4$.

::grafico{f="3*2^(x-1);15" xmin=0 xmax=5 ymin=0 ymax=26 punti="3.321928,15" segmenti="3.321928,0,3.321928,15" legenda="y=3\cdot2^{x-1};y=15" titolo="L'ascissa dell'intersezione è la soluzione dell'equazione."}

:::

:::esempio{titolo="Condizioni simultanee sugli argomenti"}
Per risolvere $\log_2(x-2)+\log_2(x-4)=3$, entrambi gli argomenti devono essere positivi. Si richiedono quindi simultaneamente $x>2$ e $x>4$, per cui il dominio è $(4,+\infty)$. In tale dominio la somma dei logaritmi si può scrivere come logaritmo del prodotto. Ne segue
$$
\begin{aligned}
\log_2((x-2)(x-4))&=3,\\[6pt]
(x-2)(x-4)&=8,\\[6pt]
x^2-6x&=0,\\[6pt]
x(x-6)&=0.
\end{aligned}
$$
Le radici algebriche sono zero e sei. Solo sei appartiene al dominio. Infatti per $x=6$ gli argomenti sono quattro e due, quindi i logaritmi valgono rispettivamente due e uno. Per $x=0$ il prodotto è positivo, ma ciascuno dei fattori è negativo. Per questo la condizione sul prodotto da sola non descrive il dominio dell'equazione iniziale.
:::

:::esempio{titolo="Valore iniziale e livello di equilibrio"}
Per $t\ge0$, una quantità misurata in unità arbitrarie segue il modello $Q(t)=10+32e^{-kt}$, con $k>0$. Se $Q(t)=18$, sottraendo il livello di equilibrio dieci e dividendo per trentadue si ricava $e^{-kt}=\dfrac14$. Quindi $t=\dfrac{\ln 4}{k}$. La parte che decresce esponenzialmente è l'eccesso rispetto al livello di equilibrio, cioè $Q(t)-10$. Poiché l'esponenziale è positiva per ogni tempo finito, il modello descrive valori superiori a dieci. Una soglia esattamente uguale a dieci viene avvicinata al crescere del tempo. Questa informazione si può ottenere prima di tentare un calcolo con i logaritmi.
:::

## pH e concentrazione

:::definizione{#ph titolo="pH e attività degli ioni idrogeno"}
Il **pH** è l'opposto del logaritmo decimale dell'attività degli ioni idrogeno. L'attività $a_{\mathrm{H^+}}>0$ è adimensionale. Negli esercizi su soluzioni acquose sufficientemente diluite e approssimativamente ideali, si usa il rapporto fra la concentrazione molare $c=[\mathrm{H_3O^+}]$ e la concentrazione di riferimento $c^\circ=1\,\mathrm{mol/L}$. Si ha
$$
\mathrm{pH}=-\log_{10}a_{\mathrm{H^+}}
\approx -\log_{10}\left(\frac{c}{c^\circ}\right).
$$
La concentrazione porta un'unità, mentre il rapporto $\dfrac{c}{c^\circ}$ è un numero. Per esempio, se $c=10^{-3}\,\mathrm{mol/L}$ il rapporto vale $10^{-3}$ e il pH è circa tre. Il segno meno trasforma l'esponente negativo della potenza di dieci in un valore positivo sulla scala del pH.
:::

:::esempio{titolo="Stima della concentrazione a partire dal pH"}
In una soluzione ideale diluita di pH $5{,}30$, il logaritmo decimale di $\dfrac{c}{c^\circ}$ è circa $-5{,}30$. Assumendo $\log_{10}2\approx0{,}30$, si può scrivere
$$
\begin{aligned}
c &\approx 10^{-5{,}30}c^\circ\\[6pt]
&\approx \frac{10^{-5}}{2}c^\circ\\[6pt]
&=5\cdot10^{-6}\,\mathrm{mol/L}.
\end{aligned}
$$
La potenza decimale si separa nel prodotto di $10^{-5}$ e $10^{-0{,}30}$. Il secondo fattore è circa un mezzo. Si ottiene quindi una concentrazione compresa fra $10^{-6}$ e $10^{-5}\,\mathrm{mol/L}$, come suggerisce il pH compreso fra cinque e sei.
:::

:::osservazione{#confronto-ph titolo="Variazione del pH e rapporto di attività"}
Siano $a_1,a_2>0$ le attività in due soluzioni. Sottraendo i due pH e usando il logaritmo del quoziente si ottiene
$$
\begin{aligned}
\mathrm{pH}_2-\mathrm{pH}_1
&=-\log_{10}\left(\frac{a_2}{a_1}\right),\\[6pt]
\frac{a_2}{a_1}
&=10^{-(\mathrm{pH}_2-\mathrm{pH}_1)}.
\end{aligned}
$$
Se il pH passa da quattro a sei, l'attività finale è un centesimo di quella iniziale. Nell'approssimazione ideale diluita, il medesimo rapporto vale approssimativamente per le concentrazioni di idronio. Nel grafico la coordinata orizzontale è $z=\log_{10}\left(\dfrac{c}{c^\circ}\right)$. Perciò ogni passo orizzontale unitario corrisponde a un fattore dieci nella concentrazione.

::grafico{f="-x" xmin=-8 xmax=0.8 ymin=0 ymax=8.7 nomi="z,pH" punti="-6,6;-4,4;-2,2" segmenti="-6,0,-6,6;-4,0,-4,4;-2,0,-2,2" legenda="\mathrm{pH}=-\log_{10}\left(\dfrac{c}{c^\circ}\right)" titolo="L'asse orizzontale mostra il logaritmo della concentrazione relativa."}

:::

:::attenzione{titolo="Media di valori di pH"}
La media aritmetica dei pH non è il pH della media aritmetica delle attività. Per esempio, i pH tre e cinque corrispondono alle attività $10^{-3}$ e $10^{-5}$. La loro media aritmetica è $5{,}05\cdot10^{-4}$, che è diversa dall'attività $10^{-4}$ corrispondente a pH quattro. Per calcolare il pH di una miscela servono anche le informazioni chimiche che determinano la concentrazione o l'attività dopo il mescolamento.
:::

:::esempio{titolo="Diluizione con quantità di soluto costante"}
In un esercizio ideale, una soluzione diluita di acido forte monoprotico è diluita da $20$ a $200\,\mathrm{mL}$ mantenendo costante la quantità di soluto. Supponiamo dissociazione completa e contributo dell'acqua trascurabile anche dopo la diluizione. Poiché il volume finale è dieci volte quello iniziale, la concentrazione di idronio si riduce a un decimo. Se il pH iniziale vale tre, si ottiene
$$
\mathrm{pH}_{\mathrm f}\approx 3-\log_{10}\left(\frac1{10}\right)=4.
$$
L'ipotesi sulla dissociazione e quella sull'acqua permettono qui di ricavare il fattore della concentrazione di idronio direttamente dal fattore di diluizione. In altri esercizi il nuovo pH dipende anche da equilibri chimici, quindi il fattore del volume da solo è insufficiente.
:::

## Intensità sonora e decibel

:::definizione{#decibel titolo="Livello di intensità sonora"}
Siano $I>0$ l'intensità sonora e $I_0>0$ l'intensità di riferimento, espresse nella stessa unità. Il **livello di intensità sonora** è
$$
L=10\log_{10}\left(\frac{I}{I_0}\right)\,\mathrm{dB}.
$$
Quando $I$ si misura in $\mathrm{W/m^2}$, un riferimento convenzionale è $I_0=10^{-12}\,\mathrm{W/m^2}$. Il rapporto è privo di dimensioni. Se $I=I_0$, il rapporto vale uno e il livello vale zero decibel. Se $I$ è minore del riferimento, il livello è negativo anche se l'intensità è positiva. Per esempio, $I=\dfrac{I_0}{10}$ corrisponde a $-10\,\mathrm{dB}$.
:::

:::esempio{titolo="Livelli relativi allo stesso riferimento"}
Siano $I_1$ e $I_2$ due intensità e siano $L_1=40\,\mathrm{dB}$ e $L_2=70\,\mathrm{dB}$ i livelli misurati rispetto allo stesso $I_0$. Nella differenza dei logaritmi il riferimento si semplifica. Si ottiene
$$
\begin{aligned}
L_2-L_1
&=10\log_{10}\left(\frac{I_2}{I_1}\right)\,\mathrm{dB},\\[6pt]
30\,\mathrm{dB}
&=10\log_{10}\left(\frac{I_2}{I_1}\right)\,\mathrm{dB},\\[6pt]
\frac{I_2}{I_1}&=10^3.
\end{aligned}
$$
L'aumento di trenta decibel corrisponde quindi a un'intensità mille volte maggiore. Se i livelli fossero scambiati, la differenza sarebbe negativa e il fattore finale rispetto all'iniziale sarebbe un millesimo.
:::

:::osservazione{#scala-sonora titolo="Una scala per i rapporti di intensità"}
Ponendo $z=\log_{10}\left(\dfrac{I}{I_0}\right)$, la misura in decibel vale $10z$. Perciò due intensità che differiscono per lo stesso fattore producono lo stesso scarto di livello, a prescindere dai valori di partenza. Passare da $I_0$ a $10I_0$ aumenta il livello di dieci decibel. Anche il passaggio da $100I_0$ a $1000I_0$ produce un aumento di dieci decibel.

::grafico{f="10*x" xmin=-0.6 xmax=4.8 ymin=0 ymax=49 nomi="z,L (dB)" punti="0,0;1,10;2,20;3,30;4,40" segmenti="1,0,1,10;2,0,2,20;3,0,3,30;4,0,4,40" legenda="L=10z\,\mathrm{dB}" titolo="Ogni unità di z corrisponde a un fattore dieci per l'intensità."}

:::

:::esempio{titolo="Intensità che si sommano"}
Supponiamo che al punto di misura due sorgenti incoerenti producano ciascuna un livello di $60\,\mathrm{dB}$ rispetto allo stesso riferimento. In questo modello le intensità si sommano. Ognuna vale $I_0\,10^6$, quindi l'intensità totale vale $2I_0\,10^6$. Dato $\log_{10}2\approx0{,}301$, si ricava
$$
\begin{aligned}
L_{\mathrm{tot}}
&=10\log_{10}(2\cdot10^6)\,\mathrm{dB}\\[6pt]
&\approx 10(0{,}301+6)\,\mathrm{dB}\\[6pt]
&=63{,}01\,\mathrm{dB}.
\end{aligned}
$$
Il contributo della seconda sorgente raddoppia l'intensità iniziale e aggiunge circa tre decibel. La somma delle intensità vale sotto l'ipotesi di incoerenza indicata nel problema.
:::

:::esempio{titolo="Distanza e livello di intensità sonora"}
In un modello senza assorbimento o riflessioni, una sorgente puntiforme emette uniformemente in tutte le direzioni. L'intensità alla distanza $r>0$ è proporzionale a $\dfrac{1}{r^2}$. Se il punto di misura passa da $r_1$ a $r_2=2r_1$, il rapporto delle intensità vale
$$
\begin{aligned}
\frac{I_2}{I_1}&=\left(\frac{r_1}{r_2}\right)^2=\frac14,\\[6pt]
\Delta L&=10\log_{10}\left(\frac14\right)\,\mathrm{dB}
=-20\log_{10}2\,\mathrm{dB}.
\end{aligned}
$$
Poiché $\log_{10}2\approx0{,}301$, la riduzione è di circa $6{,}02\,\mathrm{dB}$. Il coefficiente venti in questa espressione deriva dal quadrato della distanza. La formula di partenza per il rapporto fra le intensità mantiene il coefficiente dieci.
:::

## Decadimento e tempo di dimezzamento

:::definizione{#dimezzamento titolo="Tempo di dimezzamento in un decadimento esponenziale"}
Siano $N_0>0$ la quantità iniziale, $t\ge0$ il tempo trascorso e $k>0$ la costante di decadimento. Il modello è $N(t)=N_0e^{-kt}$. La costante $k$ ha unità di tempo inverso, così il prodotto $kt$ è adimensionale. Il **tempo di dimezzamento** $T_{\frac12}$ è la durata in cui la quantità si riduce alla metà. Applicando il logaritmo naturale al rapporto $\dfrac{N(T_{\frac12})}{N_0}$, si ottiene
$$
e^{-kT_{\frac12}}=\frac12,\qquad
T_{\frac12}=\frac{\ln 2}{k}.
$$
Il rapporto $\dfrac{N(t+T_{\frac12})}{N(t)}=e^{-kT_{\frac12}}=\dfrac12$ vale per ogni $t\ge0$. Dunque il tempo di dimezzamento è lo stesso anche se il conteggio parte dopo l'istante iniziale.
:::

:::esempio{titolo="Quantità dopo intervalli uguali"}
Con quantità iniziale $80\,\mathrm{mg}$ e tempo di dimezzamento di $3\,\mathrm{h}$, agli istanti $0$, $3$, $6$ e $9\,\mathrm{h}$ corrispondono rispettivamente $80$, $40$, $20$ e $10\,\mathrm{mg}$. La quantità che scompare durante ciascun intervallo è la metà di quella presente al suo inizio. Perciò la perdita assoluta è di $40\,\mathrm{mg}$ nel primo intervallo, $20\,\mathrm{mg}$ nel secondo e $10\,\mathrm{mg}$ nel terzo. Intervalli uguali danno rapporti uguali.

::grafico{curve="t,80*2^(-t/3),0,9.5" xmin=-0.4 xmax=9.5 ymin=0 ymax=94 nomi="t,N (mg)" punti="0,80;3,40;6,20;9,10" segmenti="3,0,3,40;6,0,6,20;9,0,9,10" legenda="N(t)=80\cdot2^{-\frac{t}{3\,\mathrm{h}}}\,\mathrm{mg}" titolo="Il tempo t è espresso in ore. Ogni tre ore la quantità residua si dimezza."}

:::

:::esempio{titolo="Tempo per raggiungere una frazione assegnata"}
Con $T_{\frac12}=6\,\mathrm{h}$, il tempo necessario per scendere a un quinto della quantità iniziale si ricava da
$$
\begin{aligned}
\left(\frac12\right)^{\frac{t}{6\,\mathrm{h}}}&=\frac15,\\[6pt]
-\frac{t}{6\,\mathrm{h}}\ln 2&=-\ln 5,\\[6pt]
t&=\frac{\ln 5}{\ln 2}\cdot6\,\mathrm{h}\approx13{,}93\,\mathrm{h}.
\end{aligned}
$$
Dopo due dimezzamenti rimane un quarto della quantità iniziale. Dopo tre ne rimane un ottavo. Poiché un quinto è compreso fra un ottavo e un quarto, il tempo trovato deve cadere fra dodici e diciotto ore.
:::

:::esempio{titolo="Ricavare la costante da due misure"}
Siano $N(2\,\mathrm{h})=90\,\mathrm{mg}$ e $N(6\,\mathrm{h})=30\,\mathrm{mg}$, con decadimento esponenziale. Dividendo la seconda misura per la prima si elimina l'incognita $N_0$. Il tempo da inserire nel rapporto è l'intervallo tra le misure, che vale quattro ore. Si ha
$$
\begin{aligned}
e^{-k\cdot4\,\mathrm{h}}&=\frac{30}{90}=\frac13,\\[6pt]
k&=\frac{\ln 3}{4}\,\mathrm{h}^{-1},\\[6pt]
T_{\frac12}&=\frac{4\ln 2}{\ln 3}\,\mathrm{h}\approx2{,}52\,\mathrm{h}.
\end{aligned}
$$
La quantità si riduce a un terzo in quattro ore, quindi il dimezzamento deve avvenire prima. Dopo due dimezzamenti resterebbe un quarto. Poiché un terzo è maggiore di un quarto, due tempi di dimezzamento devono durare complessivamente più di quattro ore.
:::

## Riconoscere il modello da una tabella

:::osservazione{#linearizzazione titolo="Rapporti costanti e grafico logaritmico"}
Se le misure $Q(t)>0$ seguono $Q(t)=Q_0e^{\lambda t}$ con $\lambda$ costante, allora
$$
\ln\left(\frac{Q(t)}{Q_0}\right)=\lambda t.
$$
Su un grafico con il tempo in ascissa e il logaritmo del rapporto in ordinata, il modello corrisponde quindi a una retta passante per l'origine. La pendenza $\lambda$ ha unità di tempo inverso. Ha segno positivo quando la quantità cresce e negativo quando diminuisce. Misure allineate entro l'incertezza sperimentale sono compatibili con questa legge nell'intervallo osservato.

Il valore numerico della pendenza dipende dall'unità del tempo. Per esempio, una pendenza di $-0{,}6\,\mathrm{h}^{-1}$ equivale a $-0{,}01\,\mathrm{min}^{-1}$, poiché un'ora contiene sessanta minuti. Dopo due ore il logaritmo del rapporto vale $-0{,}6\cdot2=-1{,}2$. Si ottiene lo stesso valore moltiplicando $-0{,}01$ per centoventi minuti.
:::

:::esempio{titolo="Distinguere differenze e rapporti"}
In un modello A i valori ai tempi $0$, $1$ e $2$ sono $81$, $54$ e $36$. Le differenze successive sono $-27$ e $-18$, mentre i rapporti valgono entrambi $\dfrac23$. Un modello a fattore costante compatibile con questi tre dati prevede $24$ al tempo $3$. In un modello B i valori ai medesimi istanti sono $81$, $66$ e $51$. Le differenze valgono entrambe $-15$, mentre i rapporti sono diversi. Un modello a differenza costante prevede dunque $36$ al tempo $3$.

::grafico{f="81*(2/3)^x;81-15*x" xmin=-0.4 xmax=3.6 ymin=0 ymax=95 punti="0,81;1,54;2,36;3,24;1,66;2,51;3,36" legenda="y=81\left(\dfrac23\right)^x;y=81-15x" titolo="La curva mostra rapporti costanti tra misure equidistanti e la retta differenze costanti."}

I due modelli partono dallo stesso valore e descrivono entrambi una diminuzione nell'intervallo considerato. Il valore iniziale e il verso della variazione sono quindi insufficienti a distinguere le due leggi. Il confronto fra i rapporti e fra le differenze usa anche l'informazione sulla distanza temporale fra i dati.
:::

:::esempio{titolo="Pendenza tra misure a distanza diversa"}
Tre misure positive di una quantità sono $4$, $12$ e $108$, ai tempi rispettivi di zero, un'ora e tre ore. Gli intervalli temporali sono uno e due ore, quindi i rapporti consecutivi non devono necessariamente coincidere. Per confrontarli si calcola la variazione logaritmica per unità di tempo.
$$
\begin{aligned}
\lambda_1&=\frac{\ln\left(\frac{12}{4}\right)}{1\,\mathrm h}=\ln 3\,\mathrm h^{-1},\\[6pt]
\lambda_2&=\frac{\ln\left(\frac{108}{12}\right)}{2\,\mathrm h}=\frac{\ln 9}{2}\,\mathrm h^{-1}=\ln 3\,\mathrm h^{-1}.
\end{aligned}
$$
Le pendenze sono uguali. Le misure risultano compatibili con un modello in cui, ogni ora, la quantità triplica. Nel secondo intervallo trascorrono due ore e il fattore è dunque nove. Se i rapporti venissero confrontati direttamente, la diversa durata degli intervalli verrebbe attribuita per errore a una variazione del tasso.
:::

:::osservazione{titolo="Confronto con una misura successiva"}
Una pendenza stimata da due punti dà un modello che passa per entrambi. Una terza misura permette di controllare la previsione. Nel modello dell'esempio la misura prevista al tempo di due ore è $36$. Se la misura osservata fosse $27$ con un'incertezza di un'unità, la differenza sarebbe troppo grande per attribuirla a quell'incertezza. La retta nel grafico dei logaritmi è perciò un modo per confrontare più misure con un unico tasso.
:::
