---
titolo: "Analisi complessa: funzioni olomorfe e logaritmo"
sommario: "Derivata complessa, condizioni di Cauchy-Riemann, funzioni armoniche, esponenziale, logaritmo e trasformazioni conformi."
---

## Funzioni e limiti nel piano complesso

:::definizione{#dominio-complesso titolo="Funzione di variabile complessa"}
Una funzione $f:\Omega\subseteq\mathbb C\to\mathbb C$ si scrive $f(z)=u(x,y)+iv(x,y)$, con $z=x+iy$. Le funzioni $u,v$ sono le componenti reale e immaginaria. Sia $z_0$ un punto di accumulazione di $\Omega$. La funzione ha limite $L$ in $z_0$ se, per ogni $\varepsilon>0$, esiste $\delta>0$ tale che $|f(z)-L|<\varepsilon$ per tutti i punti $z$ del dominio con $0<|z-z_0|<\delta$. Il modulo esprime la distanza nel piano, quindi lo stesso intorno deve funzionare per qualunque direzione di avvicinamento. Poiché $|a+ib|^2=a^2+b^2$, ciò equivale alla convergenza delle due componenti reali.

Per $f(z)=z^2$ si ha $u=x^2-y^2$, $v=2xy$. Il dominio è $\mathbb C$ e la funzione è continua, perché le componenti sono polinomi.
:::

:::esempio{titolo="Un limite che dipende dal cammino"}
Si consideri $f(z)=\dfrac{\overline z}{z}$ per $z\ne0$. Per $z=re^{i\theta}$ si ottiene $f(z)=e^{-2i\theta}$. Sul semiasse reale positivo il quoziente vale $1$. Sul semiasse immaginario positivo l'argomento di $z$ vale $\dfrac{\pi}{2}$, quindi il quoziente vale $-1$. Entrambi i cammini arrivano all'origine ma producono valori diversi, dunque il limite non esiste. Su ogni raggio il limite esiste e il modulo di $f$ vale sempre uno. Per concludere occorre confrontare anche l'argomento, cioè la posizione del valore sul cerchio unitario.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.5 xmax=3 ymin=-1.4 ymax=3 vettori="2.4,0,0.5,0;0,2.4,0,0.5" punti="0,0,vuoto" etichette="1.6,-0.45,f = 1;0.65,1.8,f = −1" titolo="Due direzioni verso l'origine in cui il rapporto tra coniugato e numero complesso assume valori diversi"}
:::

:::osservazione
Per dimostrare che un limite esiste, confrontare un numero finito di cammini è insufficiente. Si può invece maggiorare il modulo della differenza con una quantità che tende a zero e dipende soltanto dalla distanza. Per esempio, se $g(z)=\dfrac{x^2y}{x^2+y^2}$ per $z\ne0$, allora $|g(z)|\le |y|\le |z|$, perché il rapporto tra $x^2$ e $x^2+y^2$ è al più uno. La stima vale lungo qualsiasi avvicinamento e il limite è zero.
:::

:::esempio{titolo="Il prolungamento continuo di un quoziente"}
Si consideri $f(z)=\dfrac{z^3-1}{z-1}$ per $z\ne1$. La scomposizione del numeratore dà $f(z)=z^2+z+1$ nel dominio, perciò il limite in $1$ vale $3$. La stima si può scrivere anche direttamente. Infatti $f(z)-3=(z-1)(z+2)$ e, nel disco di centro $1$ e raggio uno, si ha $|z+2|\le |z-1|+3<4$. Quindi $|f(z)-3|<4|z-1|$ e si può prendere $\delta=\min\left(1,\dfrac{\varepsilon}{4}\right)$. Il valore $f(1)=3$ è l'unico che renda continua la funzione, perché la continuità richiede che il valore nel punto coincida con il limite.
:::

:::attenzione
Anche verificare il limite lungo *tutte* le rette può lasciare aperta la questione. Sia $F(x+iy)=\dfrac{x^2y}{x^4+y^2}$ fuori dall'origine. Sulla retta verticale vale zero. Lungo $y=mx$ con $m\ne0$ si ottiene $\dfrac{mx}{x^2+m^2}$, che tende a zero. Per $m=0$ il numeratore è nullo. Lungo la parabola $y=x^2$, invece, il quoziente vale $\dfrac12$ per ogni $x\ne0$. La scelta della parabola mette a confronto due termini del denominatore della stessa grandezza, poiché $y^2=x^4$. Il limite complessivo dunque non esiste.
:::

## Derivata complessa e olomorfia

:::definizione{#derivata-complessa titolo="Derivata e funzione olomorfa"}
Per $\Omega$ aperto e $z_0\in\Omega$, la **derivata complessa** è
$$
f'(z_0)=\lim_{h\to0,\ h\in\mathbb C}\frac{f(z_0+h)-f(z_0)}h.
$$
Il rapporto deve avere lo stesso limite per incrementi reali, immaginari e di ogni altra direzione. La funzione è **olomorfa** su $\Omega$ se è derivabile in ogni suo punto; è intera se è olomorfa su $\mathbb C$. Per $z^2$ il rapporto è $2z_0+h$, quindi $f'(z_0)=2z_0$. Somma e prodotto si derivano con le regole usuali nei punti in cui entrambe le funzioni sono derivabili. Per il quoziente il denominatore deve inoltre essere diverso da zero. Per la composizione si richiede la derivabilità della funzione interna nel punto e di quella esterna nel punto immagine.
:::

:::attenzione
Per $f(z)=\overline z$ il rapporto è $\dfrac{\overline h}h$. Vale $1$ sugli incrementi reali e $-1$ su quelli immaginari puri. Quindi la coniugazione, pur essendo continua, non è derivabile in alcun punto.
:::

:::osservazione
Quando la derivata esiste, per ogni incremento piccolo si può scrivere $f(z_0+h)-f(z_0)=f'(z_0)h+o(|h|)$. La parte lineare è quindi la moltiplicazione per uno stesso numero complesso, qualunque sia la direzione di $h$. Per $f(z)=z^2$ nel punto $z_0=1+i$ il fattore è $2+2i$. Un incremento reale positivo produce al primo ordine un vettore diretto verso nord-est. Un incremento immaginario positivo produce invece un vettore diretto verso nord-ovest. Il secondo vettore è il primo ruotato di un angolo retto, come accade già per gli incrementi di partenza.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.5 xmax=3.5 ymin=-1.2 ymax=3.5 vettori="0,0,2,2;0,0,-2,2" etichette="2.4,2.25,Df(1);-2.4,2.5,Df(i)" titolo="Il differenziale di $z^2$ in $1+i$ manda le due direzioni coordinate in due vettori ortogonali della stessa lunghezza"}
:::

:::osservazione
Un differenziale reale è una mappa lineare sui vettori del piano. Se la si indica con $T$, allora $T(1)$ e $T(i)$ sono le immagini dei due vettori della base. Qualsiasi incremento $h=x+iy$ può essere scritto mediante $h$ e il suo coniugato, poiché $x=\dfrac{h+\overline h}{2}$ e $y=\dfrac{h-\overline h}{2i}$. Ne segue
$$
T(h)=Ah+B\overline h,\qquad
A=\frac{T(1)-iT(i)}2,\qquad
B=\frac{T(1)+iT(i)}2.
$$
Il rapporto tra la parte lineare dell'incremento e $h$ contiene il termine $B\dfrac{\overline h}{h}$. Sull'asse reale questo termine vale $B$ e sull'asse immaginario vale $-B$. Perciò, quando il differenziale reale esiste, la derivata complessa esiste esattamente se $B=0$, nel qual caso vale $A$. Questa caratterizzazione distingue la linearità rispetto ai numeri reali dalla moltiplicazione per un numero complesso.
:::

:::esempio{titolo="Dilatazioni diverse sugli assi"}
Per $f(x+iy)=x+2iy$ il differenziale reale è la funzione stessa. Si ottengono $T(1)=1$ e $T(i)=2i$, quindi $A=\dfrac32$ e $B=-\dfrac12$. Il rapporto incrementale vale $1$ lungo la direzione reale e $2$ lungo quella immaginaria. La funzione è dunque differenziabile come mappa reale in ogni punto, mentre la derivata complessa non esiste in alcun punto.
:::

## Condizioni di Cauchy-Riemann

::::teorema{#cauchy-riemann titolo="Condizioni di Cauchy-Riemann"}
Se $f=u+iv$ è derivabile in $z_0$, le derivate parziali soddisfano
$$
u_x=v_y,\qquad u_y=-v_x.
$$
Viceversa, se $u,v$ sono differenziabili come funzioni reali in $z_0$ e soddisfano queste equazioni, $f$ è derivabile e $f'(z_0)=u_x(z_0)+iv_x(z_0)$. In particolare, componenti $C^1$ che verificano le equazioni su un aperto definiscono una funzione olomorfa.

:::dimostrazione
Con incrementi reali il rapporto tende a $u_x+iv_x$; con incrementi immaginari tende a $v_y-iu_y$. L'uguaglianza dà le equazioni. Viceversa, la differenziabilità reale e le equazioni danno
$$
f(z_0+h)-f(z_0)=(u_x+iv_x)h+o(|h|).
$$
Dividendo per $h$, il resto tende a zero.
:::
::::

:::esempio{titolo="Derivabilità soltanto nell'origine"}
Per $f(z)=|z|^2$ si ha $u=x^2+y^2$, $v=0$. Le equazioni richiedono $x=y=0$. Nell'origine $\dfrac{|h|^2}h=\overline h\to0$. Quindi $f'(0)=0$, ma $f$ non è olomorfa su alcun aperto non vuoto.
:::

:::esempio{titolo="Verifica su un quoziente complesso"}
Per $f(z)=\dfrac1z$ con $z\ne0$, si pone $r^2=x^2+y^2$. Allora $u=\dfrac{x}{r^2}$ e $v=-\dfrac{y}{r^2}$. Le componenti sono di classe $C^1$ sull'aperto in cui il denominatore è positivo. La regola del quoziente dà
$$
\begin{aligned}
u_x&=\frac{y^2-x^2}{r^4}=v_y,\\
u_y&=-\frac{2xy}{r^4}=-v_x .
\end{aligned}
$$
La verifica è valida in tutto il piano bucato. Per calcolare la derivata, si può usare la regola del quoziente, ottenendo $f'(z)=-\dfrac1{z^2}$. Infatti il numeratore di $u_x+iv_x$ è $y^2-x^2+2ixy$, cioè $-\overline z^2$. La stessa semplificazione emerge riscrivendo $-\dfrac1{z^2}$ mediante il coniugato.
:::

:::attenzione
L'esistenza delle derivate parziali e le due uguaglianze in un punto richiedono il controllo della differenziabilità reale. Si definisca $f(0)=0$ e, fuori dall'origine, $f(z)=\dfrac{x^2y}{x^2+y^2}$. Sui due assi la funzione è nulla, quindi tutte le parziali delle due componenti in zero sono nulle. Per $z=t(1+i)$, con $t\ne0$, vale invece $f(z)=\dfrac t2$ e il rapporto incrementale è $\dfrac1{2(1+i)}$. I rapporti sugli assi valgono zero, perciò la derivata complessa in zero non esiste. La stima $|f(z)|\le |z|$ mostra che la funzione è comunque continua in quel punto.
:::

:::esempio{titolo="Una derivata che esiste in un punto solo"}
Sia $f(z)=z+\overline z^2$. Poiché le componenti sono polinomi reali, la differenziabilità reale vale in tutto il piano. Nel punto $z_0$ si sottrae il valore della funzione e si sviluppa il quadrato del coniugato. Si ottiene
$$
\frac{f(z_0+h)-f(z_0)}h
=1+2\overline{z_0}\frac{\overline h}{h}
+\frac{\overline h^2}{h}.
$$
L'ultimo termine ha modulo $|h|$ e tende a zero. Il termine intermedio dà limiti opposti lungo gli assi, a meno che $z_0=0$. La derivata esiste quindi soltanto nell'origine e vale $1$. In quel punto la parte lineare dell'incremento è proprio $h$, perché il termine con il coniugato è di secondo ordine. Il valore della derivata in un singolo punto, anche se diverso da zero, non basta dunque a concludere che la funzione sia olomorfa in un intorno.
:::

## Esponenziale e funzioni trigonometriche

:::definizione{#esponenziale-complesso titolo="Esponenziale complesso"}
La serie $e^z=\sum_{n=0}^{\infty}\dfrac{z^n}{n!}$ converge su tutto $\mathbb C$ e si deriva termine a termine. Vale
$$
e^{x+iy}=e^x(\cos y+i\sin y),\qquad (e^z)'=e^z.
$$
Quindi l'esponenziale è intero, non si annulla e ha periodo $2\pi i$. Le definizioni
$$
\sin z=\frac{e^{iz}-e^{-iz}}{2i},\qquad
\cos z=\frac{e^{iz}+e^{-iz}}2
$$
danno funzioni intere con le usuali formule di derivazione. Per $w\ne0$, tutte le soluzioni di $e^z=w$ sono $\log|w|+i(\theta+2k\pi)$, dove $\theta$ è un argomento di $w$ e $k\in\mathbb Z$.
:::

:::osservazione
Sulla retta $x=c$, il modulo di $e^{c+iy}$ resta uguale a $e^c$ e l'angolo al centro cresce come $y$. L'immagine è quindi una circonferenza percorsa in senso antiorario, con un giro per ogni intervallo di lunghezza $2\pi$. Sulla retta $y=c$ resta invece fisso l'argomento. Al crescere di $x$, il punto immagine percorre verso l'esterno il raggio di angolo $c$. Queste due immagini spiegano perché conoscere il modulo dell'esponenziale determina la parte reale dell'esponente, mentre l'argomento determina la parte immaginaria a meno di un giro intero.

::grafico{uguale=1 nomi="Re,Im" xmin=-3 xmax=3.5 ymin=-3 ymax=3.5 curve="2*cos(t),2*sin(t),0,6.283185307179586" vettori="0,0,2.45,2.45" punti="2,0,pieno,2;0,2,pieno,2i" titolo="La retta $\operatorname{Re}z=\log 2$ ha per immagine il cerchio di raggio $2$, mentre la retta $\operatorname{Im}z=\dfrac{\pi}{4}$ ha per immagine una semiretta"}
:::

:::esempio{titolo="Gli zeri del seno complesso"}
L'equazione $\sin z=0$ equivale a $e^{iz}=e^{-iz}$ e dunque a $e^{2iz}=1$. Scrivendo $z=x+iy$, si ha $|e^{2iz}|=e^{-2y}$. Il modulo è uno soltanto per $y=0$. Rimane quindi l'equazione reale $2x=2k\pi$, che dà $z=k\pi$ con $k\in\mathbb Z$. Lo stesso passaggio si usa per $e^{2iz}=w$, con $w\ne0$ e $|w|\ne1$. In quel caso si determina prima $y$ dal modulo, poi $x$ dall'argomento.
:::

:::esempio{titolo="Un valore del coseno fuori dall'intervallo reale"}
Si risolva $\cos z=2$. Posto $w=e^{iz}$, si ha $w\ne0$ e l'equazione diventa $w+w^{-1}=4$. Moltiplicando per $w$ si ottiene $w^2-4w+1=0$. Le radici sono $2+\sqrt3$ e $2-\sqrt3$, entrambe positive, e il loro prodotto vale uno. Per $z=x+iy$ il numero $e^{iz}=e^{-y}e^{ix}$ è reale positivo soltanto se $x=2k\pi$, con $k$ intero. Il modulo fornisce $e^{-y}=2+\sqrt3$ oppure $e^{-y}=2-\sqrt3$. Poiché i due valori sono reciproci, i corrispondenti valori di $y$ sono opposti. Si ottiene
$$
z=2k\pi\pm i\log(2+\sqrt3),\qquad k\in\mathbb Z.
$$
Il termine immaginario permette al coseno di assumere il valore richiesto. Infatti, se $a=\log(2+\sqrt3)$, la formula esponenziale dà $\cos(ia)=\dfrac{e^a+e^{-a}}2=2$.
:::

## Logaritmo e potenze complesse

:::definizione{#logaritmo titolo="Ramo del logaritmo"}
Un ramo olomorfo del logaritmo su un aperto $\Omega$ che esclude zero è una funzione $L$ olomorfa con $e^{L(z)}=z$. La determinazione principale è
$$
\operatorname{Log}z=\log|z|+i\operatorname{Arg}z,\qquad -\pi<\operatorname{Arg}z<\pi,
$$
sul dominio $\mathbb C\setminus(-\infty,0]$, e ha derivata $\dfrac1z$. Su un dominio semplicemente connesso che esclude zero esiste un ramo; su tutto $\mathbb C\setminus\{0\}$ un ramo olomorfo globale non esiste. Fissato $L$, si definisce $z^\alpha=e^{\alpha L(z)}$, con derivata $\alpha e^{(\alpha-1)L(z)}$.

La radice principale di $i$ è $e^{\frac{i\pi}{4}}$; le due soluzioni di $w^2=i$ sono $e^{\frac{i\pi}{4}}$ e $-e^{\frac{i\pi}{4}}$.
:::

:::attenzione
Per $z=w=e^{\frac{3\pi i}{4}}$, la somma dei logaritmi principali è $\dfrac{3\pi i}2$, mentre il logaritmo principale del prodotto è $-\dfrac{\pi i}2$. La formula per il logaritmo di un prodotto richiede compatibilità degli argomenti.
:::

:::osservazione
Il taglio del logaritmo principale rimuove i punti in cui si incontrerebbero i valori limite dell'argomento provenienti dai due lati. Per esempio, per $z\to-2$ dall'alto l'argomento tende a $\pi$. Dall'altro lato tende a $-\pi$. La parte reale tende in entrambi i casi a $\log 2$, quindi il salto tra i due valori limite del logaritmo è $2\pi i$. Un taglio diverso produce un altro ramo. Per la determinazione con $0<\arg z<2\pi$ si esclude invece il semiasse reale non negativo.

::grafico{uguale=1 nomi="Re,Im" xmin=-4 xmax=2.5 ymin=-2.2 ymax=2.2 linee="-4,0 0,0" punti="0,0,vuoto;-2,0,vuoto" vettori="-2,1.7,-2,0.32;-2,-1.7,-2,-0.32" etichette="-1.35,1.4,Arg → π;-1.3,-1.4,Arg → −π" titolo="I due avvicinamenti a $-2$ producono argomenti limite diversi ai lati del taglio principale"}
:::

:::esempio{titolo="Il ramo principale della radice"}
Per $z=re^{i\theta}$ con $-\pi<\theta<\pi$, la radice principale è $\sqrt r e^{\frac{i\theta}{2}}$. L'argomento della radice è compreso strettamente tra $-\dfrac{\pi}{2}$ e $\dfrac{\pi}{2}$. Quindi la sua parte reale è positiva. Se $w$ appartiene al semipiano destro, allora $w^2$ appartiene al dominio del ramo principale e la radice principale dimezza l'argomento di $w^2$ restituendo proprio quello di $w$. Il quadrato ristretto al semipiano destro e la radice principale sono dunque inverse l'uno dell'altra.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=2.5 curve="2*cos(t),2*sin(t),-1.5707963267948966,1.5707963267948966" punti="0,2,vuoto;0,-2,vuoto;2,0,pieno" titolo="Le radici principali dei punti di modulo $4$ percorrono il semicerchio destro di raggio $2$, con i due estremi esclusi"}
:::

:::osservazione
Il motivo dell'ostacolo a un logaritmo globale si vede percorrendo la circonferenza unitaria. Se $L$ fosse un ramo su tutto il piano bucato, allora $\operatorname{Im}L(e^{it})-t$ sarebbe un multiplo intero di $2\pi$. Dipenderebbe in modo continuo da $t$, dunque sarebbe costante su $[0,2\pi]$. Ma il punto $e^{it}$ è lo stesso ai due estremi e i valori di $\operatorname{Im}L(e^{it})$ dovrebbero coincidere. La costanza impone invece una differenza di $2\pi$.
:::

:::esempio{titolo="Un ramo locale attorno a un punto del taglio"}
Nel disco $|z+2|<1$ si può costruire un logaritmo anche attorno al punto $-2$, che è escluso dal dominio del ramo principale. Infatti $\dfrac z{-2}$ appartiene al disco di centro $1$ e raggio $\dfrac12$, contenuto nel semipiano destro. Si definisce quindi
$$
L(z)=\log 2+i\pi+\operatorname{Log}\left(\frac z{-2}\right).
$$
Poiché $e^{\log 2+i\pi}=-2$ ed $e^{\operatorname{Log}(\dfrac z{-2})}=\dfrac z{-2}$, il prodotto vale $z$. La funzione $L$ è dunque un ramo olomorfo nel disco. Nel punto $-2$ vale $\log 2+i\pi$. Per confrontarlo con il ramo principale si possono scegliere i punti $-2+\dfrac i2$ e $-2-\dfrac i2$. Nel primo, l'argomento di $\dfrac z{-2}$ vale $-\arctan\left(\dfrac14\right)$ e l'angolo risultante è già principale. Nel secondo vale $\arctan\left(\dfrac14\right)$, quindi l'angolo risultante supera $\pi$. Per ottenere il valore principale in quel punto si sottrae $2\pi i$. Il confronto spiega perché il ramo locale può attraversare il taglio della determinazione principale.
:::

:::osservazione
Per ogni ramo olomorfo $L$ si può derivare l'identità $e^{L(z)}=z$. Si ottiene $e^{L(z)}L'(z)=1$, quindi $L'(z)=\dfrac1z$. Su un aperto connesso, due rami $L_1$ e $L_2$ differiscono per una costante, perché la derivata della differenza è zero. L'esponenziale di tale costante vale uno, perciò la differenza è un multiplo intero di $2\pi i$. Il valore del ramo in un punto fissa quindi la scelta in tutto il dominio connesso.

La stessa scelta ha effetti diversi sulle potenze. Se il ramo aumenta di $2\pi i$, la potenza di esponente $\alpha$ è moltiplicata per $e^{2\pi i\alpha}$. Per un esponente intero il fattore è uno. Per $\alpha=\dfrac13$, i rami $L$, $L+2\pi i$ e $L+4\pi i$ danno le tre radici cubiche distinte.
:::

## Funzioni armoniche e coniugate

:::teorema{#armoniche titolo="Coniugate armoniche"}
L'espansione locale in serie di Taylor, che si deduce dalla formula integrale di Cauchy, rende lisce le componenti di una funzione olomorfa. Si possono quindi derivare le equazioni di Cauchy-Riemann e scambiare le derivate miste. Per esempio $u_{xx}=v_{yx}$ e $u_{yy}=-v_{xy}$, perciò $\Delta u=u_{xx}+u_{yy}=0$. Allo stesso modo $\Delta v=0$. Le due componenti sono dunque armoniche. Se $u\in C^2(\Omega)$ è armonica e $\Omega$ è semplicemente connesso, esiste una coniugata $v$, unica a meno di una costante reale, con $u+iv$ olomorfa.

Per $u=x^2-y^2$, da $v_y=u_x=2x$ segue $v=2xy+C(x)$. L'altra equazione dà $v_x=-u_y=2y$, quindi $C'=0$ e $v=2xy+C$.
:::

:::osservazione
La ricerca della coniugata può essere formulata come un problema di primitive reali. Dalle equazioni di Cauchy-Riemann si ricava $dv=-u_y\,dx+u_x\,dy$. Le derivate incrociate dei due coefficienti coincidono quando $u_{xx}+u_{yy}=0$. La semplice connessione garantisce allora che l'integrale di questa forma fra due punti dipenda soltanto dagli estremi. Questo spiega il ruolo dell'ipotesi topologica. Per $u(z)=\log|z|$ sul piano bucato si può calcolare una coniugata su ogni disco che evita zero. Una coniugata globale produrrebbe invece un argomento globale, incompatibile con un giro attorno all'origine.
:::

:::esempio{titolo="Dalla componente reale a un polinomio complesso"}
Sia $u(x,y)=x^3-3xy^2+2y$ sul piano. Si ha $u_{xx}=6x$ e $u_{yy}=-6x$, quindi $u$ è armonica. La condizione $v_y=u_x=3x^2-3y^2$ dà, integrando rispetto a $y$,
$$
v(x,y)=3x^2y-y^3+C(x).
$$
Il termine $C(x)$ può dipendere da $x$ perché l'integrazione si svolge con $x$ fissato. La seconda equazione impone $v_x=-u_y=6xy-2$. Poiché $v_x=6xy+C'(x)$, ne segue $C'(x)=-2$. Con la normalizzazione $v(0,0)=0$ si ottiene $C(x)=-2x$.

Le due componenti così trovate coincidono con quelle di $z^3-2iz$. Infatti il cubo contribuisce con parte reale $x^3-3xy^2$ e parte immaginaria $3x^2y-y^3$, mentre $-2iz$ aggiunge $2y$ alla prima e $-2x$ alla seconda. Si può quindi leggere la derivata complessa direttamente dalla forma polinomiale. In questo caso vale $3z^2-2i$.
:::

:::esempio{titolo="Curve di livello delle due componenti"}
Per $z^2=u+iv$ le curve $u=0$ sono le diagonali $y=x$ e $y=-x$. Le curve $v=0$ sono i due assi. Le due famiglie a livello zero si incontrano nell'origine, dove le due componenti hanno gradiente nullo e anche la derivata complessa è nulla. Nei punti in cui $f'\ne0$, dalle equazioni di Cauchy-Riemann segue invece che i due gradienti sono perpendicolari. In quei punti anche le tangenti alle curve di livello sono perpendicolari. Per esempio, in $(1,1)$ la curva $u=0$ ha tangente di pendenza $1$ e la curva $v=2$ ha tangente di pendenza $-1$.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=3.1 ymin=-2.7 ymax=3.1 f="x;-x" curve="t,1/t,0.35,2.9" punti="1,1,pieno,P" titolo="Le diagonali sono il livello $u=0$ di $z^2$, mentre l'arco nel primo quadrante è un ramo del livello $v=2$. In $P=(1,1)$ le due curve sono ortogonali"}
:::

## Trasformazioni conformi

:::teorema{#conformi titolo="Conformità locale e trasformazioni di Möbius"}
Se $f$ è olomorfa e $f'(z_0)\ne0$, il differenziale è una rotazione di angolo $\arg f'(z_0)$ e una dilatazione di fattore $|f'(z_0)|$. La funzione conserva localmente gli angoli orientati ed è localmente invertibile.

Una trasformazione di Möbius $f(z)=\dfrac{az+b}{cz+d}$, con $ad-bc\ne0$, ha derivata $\dfrac{ad-bc}{(cz+d)^2}$ ed è conforme dove è definita. Per $f(z)=\dfrac{z-i}{z+i}$ si ha $|f(z)|<1$ esattamente quando $\operatorname{Im}z>0$, perché $|z-i|<|z+i|$ equivale a $y>0$.
:::

:::osservazione
L'angolo orientato si può calcolare dalle tangenti a due curve. Siano $\gamma_1$ e $\gamma_2$ due curve differenziabili che passano per $z_0$ al parametro zero e hanno velocità non nulle. L'angolo dalla prima tangente alla seconda è l'argomento di $\dfrac{\gamma_2'(0)}{\gamma_1'(0)}$, considerato a meno di un giro intero. Dopo la trasformazione le velocità diventano $f'(z_0)\gamma_1'(0)$ e $f'(z_0)\gamma_2'(0)$. Poiché $f'(z_0)$ è diverso da zero, si semplifica nel rapporto. Le tangenti possono dunque cambiare direzione e lunghezza, mentre l'angolo orientato fra loro resta lo stesso. Questo calcolo chiarisce l'ipotesi sulla derivata nel criterio di conformità.
:::

:::esempio{titolo="Dal semipiano superiore al disco unitario"}
La mappa $w=\dfrac{z-i}{z+i}$ manda $i$ nell'origine e il punto $-i$ è escluso dal dominio. L'asse reale è l'insieme dei punti equidistanti da $i$ e $-i$. Per questo i suoi punti sono mandati sulla circonferenza unitaria. Sopra l'asse la distanza da $i$ è minore della distanza da $-i$, quindi il modulo dell'immagine è minore di uno. Per vedere che si ottiene tutto il disco, si risolve rispetto a $z$ e si trova $z=i\dfrac{1+w}{1-w}$. Per $|w|<1$ questa espressione ha parte immaginaria $\dfrac{1-|w|^2}{|1-w|^2}>0$, dunque il punto di partenza appartiene al semipiano richiesto.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=3.4 ymin=-2.6 ymax=3.2 punti="0,1,pieno,i;0,-1,vuoto,−i;2,0,pieno,A;1,1.7,pieno,B" segmenti="0,1,2,0;0,-1,2,0;0,1,1,1.7;0,-1,1,1.7" titolo="Il punto reale $A$ è equidistante da $i$ e $-i$. Il punto $B$ del semipiano superiore è più vicino a $i$"}
:::

:::attenzione
La condizione $f'(z_0)\ne0$ è indispensabile per applicare il criterio di conformità locale. In zero, $z^2$ manda una semiretta di angolo $\theta$ in una semiretta di angolo $2\theta$. Per esempio, l'angolo tra il semiasse reale positivo e la semiretta di argomento $\dfrac{\pi}{4}$ passa da $\dfrac{\pi}{4}$ a $\dfrac{\pi}{2}$. Inoltre $z$ e $-z$ hanno la stessa immagine, quindi nessun disco intorno all'origine è un dominio di iniettività per il quadrato.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.1 xmax=3.1 ymin=-1.1 ymax=3.1 vettori="0,0,2.5,0;0,0,1.75,1.75;0,0,0,2.5" etichette="1.7,2.2,π/4;0.55,2.5,π/2" titolo="In zero il quadrato lascia fisso il semiasse reale positivo e trasforma la direzione di angolo $\dfrac{\pi}{4}$ in quella verticale"}
:::

::::teorema{#jacobiano-complesso titolo="Jacobiano e scala locale delle aree"}
Se $f$ è olomorfa e $f'(z_0)=a+ib$, il determinante della matrice jacobiana reale di $f$ in $z_0$ è $a^2+b^2=|f'(z_0)|^2$. Se è positivo, l'inversa locale è olomorfa e ha derivata $\dfrac{1}{f'(z_0)}$ nel punto immagine.

:::dimostrazione
Dalle equazioni di Cauchy-Riemann le due colonne del differenziale sono $(a,b)$ e $(-b,a)$. Il determinante è quindi $a^2+b^2$. Quando questo numero è positivo il teorema reale della funzione inversa dà un'inversa differenziabile tra due intorni. Il differenziale dell'inversa è l'inverso della moltiplicazione per $a+ib$, quindi è la moltiplicazione per il numero complesso reciproco. La stessa proprietà vale in un intorno più piccolo, perché $f'$ è continua e resta diversa da zero. Perciò l'inversa è olomorfa in quell'intorno.
:::
::::

:::esempio{titolo="Area di un quadrato dopo una rotazione e una dilatazione"}
Per $f(z)=iz+z$ il differenziale è la funzione stessa. Il quadrato con vertici $0,1,1+i,i$ ha area uno. Le immagini dei vertici sono $0,1+i,2i,-1+i$. Il quadrato immagine ha diagonali di lunghezza due, perciò la sua area è due. Il numero coincide con $|1+i|^2$. Per una funzione non lineare, lo stesso calcolo con il differenziale descrive il termine principale della variazione di area vicino a un punto in cui la derivata è diversa da zero.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.65 xmax=1.65 ymin=-0.65 ymax=2.45 poligoni="0,0 1,1 0,2 -1,1" linee="0,0 1,0 1,1 0,1 0,0" punti="0,0,pieno;1,1,pieno;0,2,pieno;-1,1,pieno" titolo="Il quadrato di lato uno, disegnato con il solo contorno, è trasformato nel quadrato colorato di area due"}
:::

:::esempio{titolo="L'inversione trasforma una retta in una circonferenza"}
Si consideri $w=\dfrac1z$ e si scriva $w=p+iq$, con $p,q$ reali. L'inversa è $z=\dfrac1w$. Poiché la parte reale di $\dfrac1w$ è $\dfrac{p}{p^2+q^2}$, la retta $\operatorname{Re}z=2$ ha per immagine i punti $w\ne0$ che soddisfano $p=2(p^2+q^2)$. Completando il quadrato si ottiene
$$
\left(p-\frac14\right)^2+q^2=\frac1{16}.
$$
La figura è una circonferenza di centro $\dfrac14$ sull'asse reale e raggio $\dfrac14$, privata dell'origine. Infatti $w=0$ soddisfa l'equazione ottenuta dopo la moltiplicazione per $p^2+q^2$, ma l'inversa è definita solo per $w\ne0$. Il punto $z=2$ appartiene alla retta e ha immagine $w=\dfrac12$, che è l'estremo destro della circonferenza.

Lo stesso calcolo determina l'immagine del semipiano $\operatorname{Re}z>2$. La disuguaglianza diventa $p>2(p^2+q^2)$, quindi il membro sinistro dell'equazione della circonferenza è minore di $\dfrac1{16}$. Il disco aperto così ottenuto esclude già l'origine, che giace sul bordo. Ogni suo punto ammette dunque un'inversa nel semipiano richiesto.
:::
