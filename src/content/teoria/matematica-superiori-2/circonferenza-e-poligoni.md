---
titolo: "Circonferenza, cerchio e poligoni"
sommario: "Corde, angoli, tangenti, poligoni regolari, archi e aree con dimostrazioni e problemi inversi."
---

## Circonferenza e cerchio

:::definizione{#definizione titolo="Il ruolo della distanza dal centro"}

Fissati un centro $O$ e un raggio $r>0$, la **circonferenza** è l'insieme dei punti $P$ per cui $OP=r$. Il **cerchio** comprende anche l'interno, quindi è l'insieme dei punti per cui $OP\le r$. I punti con $OP<r$ sono interni e quelli con $OP>r$ sono esterni. In questo capitolo si misura la lunghezza della circonferenza e l'area del cerchio.

Un **raggio** congiunge il centro a un punto della circonferenza. Una **corda** congiunge due punti distinti della circonferenza. Quando la corda passa per il centro è un **diametro** e misura $2r$, perché il centro è fra i due estremi e ciascuna metà misura $r$. Gli estremi di una corda separano due archi, ossia due tratti della circonferenza. Il diametro li divide in due semicirconferenze.

::grafico{assi=0 uguale=1 xmin=-4.1 xmax=4.5 ymin=-3.75 ymax=3.75 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;0,0 0,-3" punti="0,0;-3,0;3,0;0,-3;1,1.2;3.55,1.4" etichette="-0.28,0.36,O;-3.32,-0.25,A;3.34,-0.26,B;0,-3.43,P;1.25,1.5,Q;3.76,1.7,S" titolo="$P$ è sulla circonferenza, $Q$ è interno e $S$ esterno"}

:::

## Corde e distanze

::::teorema{#corde titolo="La perpendicolare dal centro"}

Se $H$ è il piede della perpendicolare da $O$ alla retta di una corda $AB$, allora $H$ è il punto medio della corda. Per $0\le d=OH<r$ la sua lunghezza è

$$
AB=2\sqrt{r^2-d^2}.
$$

:::dimostrazione

Se la corda passa per $O$, si ha $H=O$ e $AB=2r$, come richiesto. Negli altri casi, Pitagora dà $AH^2=OA^2-OH^2$ e $BH^2=OB^2-OH^2$. I due raggi hanno la stessa lunghezza, quindi $AH=BH$. Poiché $H$ si trova sulla retta $AB$, l'uguaglianza lo colloca a metà del segmento. Dunque $AB=2AH$.

Viceversa, se $H$ è il punto medio di una corda che non passa per $O$, i triangoli $OHA$ e $OHB$ hanno tre coppie di lati congruenti. Gli angoli adiacenti in $H$ sono uguali. Siccome sommano $180^\circ$, sono retti e $OH$ è perpendicolare alla corda.

:::

::grafico{assi=0 uguale=1 xmin=-5.7 xmax=5.7 ymin=-5.5 ymax=5.7 curve="5*cos(t),5*sin(t),0.000000000000,6.283185307180" linee="-4,3 4,3;0,0 0,3;0,0 4,3;0,2.7 0.3,2.7 0.3,3" punti="0,0;-4,3;4,3;0,3" etichette="-0.42,-0.32,O;-4.24,3.42,A;4.25,3.42,B;0,3.43,H;2.16,1.35,5;-0.38,1.44,3;2.05,3.4,4" titolo="Il raggio, la distanza $OH$ e la mezza corda formano un triangolo rettangolo"}

::::

:::esempio{titolo="Leggere la formula anche al contrario"}

Nella stessa circonferenza due corde di uguale lunghezza hanno la stessa distanza dal centro. Con $r$ fissato, una distanza maggiore lascia un valore minore sotto la radice, dunque dà una corda più corta. La più lunga è il diametro, che corrisponde a $d=0$. Con $d=r$ la retta avrebbe un solo punto di contatto e gli estremi della corda coinciderebbero.

Con una corda lunga $16$ cm in una circonferenza di raggio $10$ cm, il cateto lungo la corda misura $8$ cm. La distanza si ricava come $\sqrt{10^2-8^2}=6$ cm. Usare $16$ come cateto porterebbe a un radicando negativo, perché l'intera corda non è un lato del triangolo rettangolo usato.

:::

## Angoli che insistono su un arco

::::teorema{#angoli titolo="Angolo al centro e alla circonferenza"}

Un **angolo al centro** ha vertice in $O$ e lati lungo due raggi. Il suo settore individua un arco, anche maggiore di una semicirconferenza. Un **angolo alla circonferenza** ha vertice $C$ sulla circonferenza e i suoi lati incontrano di nuovo la circonferenza in due punti distinti $A,B$. L'angolo insiste sull'arco fra $A$ e $B$ che non contiene $C$.

La misura di $\widehat{ACB}$ è metà dell'ampiezza dell'angolo al centro associato a quell'arco. Per esempio, all'arco da $100^\circ$ corrisponde un angolo alla circonferenza di $50^\circ$. La stessa corda può determinare due ampiezze diverse, perché ciascuno dei due archi ha la propria ampiezza.

:::dimostrazione

Si traccia il diametro $CD$. Se uno dei lati dell'angolo coincide con $CD$, si può chiamare $A$ l'altro estremo. Il triangolo $OCA$ ha $OC=OA$. L'angolo $\widehat{AOD}$ è esterno a quel triangolo e vale $\widehat{OCA}+\widehat{CAO}=2\widehat{ACD}$. Questo dimostra il caso con un lato lungo il diametro.

Quando $CD$ è interno a $\widehat{ACB}$, separa l'angolo in $\widehat{ACD}$ e $\widehat{DCB}$. Anche l'arco intercettato si divide in due archi in $D$. Le loro ampiezze sono i doppi delle misure appena trovate, quindi la somma è il doppio di $\widehat{ACB}$. Quando $CD$ è esterno, l'angolo richiesto si ottiene per differenza fra $\widehat{ACD}$ e $\widehat{BCD}$, prendendo l'ampiezza maggiore meno la minore. Anche i rispettivi archi che non contengono $C$ sono l'uno parte dell'altro. La loro differenza conserva il fattore due.

:::

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 3,0;-3,0 1.5,2.598076 0,0" punti="-3,0;0,0;3,0;1.5,2.598076" etichette="-3.35,-0.28,C;0,-0.39,O;3.32,-0.28,D;1.67,2.89,A" titolo="Con un lato sul diametro si usa l’angolo esterno in $O$"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.8 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076; -3,0 0,-3;0,0 1.5,2.598076;0,0 0,-3" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;0,-3" etichette="-3.36,-0.22,C;0.29,-0.28,O;3.35,-0.24,D;1.71,2.91,A;0,-3.39,B" titolo="Il diametro è interno all’angolo e divide in due l’arco intercettato"}

::grafico{assi=0 uguale=1 xmin=-3.8 xmax=3.8 ymin=-3.6 ymax=3.6 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-3,0 1.5,2.598076;-3,0 -1.5,2.598076;1.5,2.598076 0,0 -1.5,2.598076" segmenti="-3,0,3,0" punti="-3,0;0,0;3,0;1.5,2.598076;-1.5,2.598076" etichette="-3.34,-0.27,C;0,-0.4,O;3.3,-0.25,D;1.63,2.93,A;-1.65,2.93,B" titolo="Il diametro è esterno all’angolo e si sottraggono due ampiezze"}

::::

:::esempio{titolo="La stessa corda da lati diversi"}

Se una corda $AB$ separa un arco di $90^\circ$ e uno di $270^\circ$, un punto $C$ sull'arco maggiore determina $\widehat{ACB}=45^\circ$. Un punto $D$ sull'arco minore determina invece $\widehat{ADB}=135^\circ$. L'arco da dimezzare è quello che evita il vertice. Spostando il vertice lungo il medesimo arco, l'ampiezza dell'angolo alla circonferenza resta invariata.

::grafico{assi=0 uguale=1 xmin=-4.7 xmax=4.7 ymin=-4.45 ymax=4.82 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4,0 0,4;-4,0 0,4;-4,0 4,0;4,0 2.828427,2.828427 0,4" punti="4,0;0,4;-4,0;2.828427,2.828427" etichette="4.31,-0.28,A;0,4.46,B;-4.32,-0.29,C;3.12,3.12,D" titolo="$C$ e $D$ vedono archi diversi della corda $AB$"}

:::

## Diametri e quadrilateri inscritti

:::teorema{#semicirconferenza titolo="Il diametro determina un angolo retto"}

Se $AB$ è un diametro e $C$ è un altro punto della circonferenza, $\widehat{ACB}$ insiste su una semicirconferenza e misura $90^\circ$. Vale anche il reciproco. Se $\widehat{ACB}$ misura $90^\circ$, l'arco senza $C$ misura $180^\circ$. I raggi $OA$ e $OB$ sono opposti, perciò $AB$ è un diametro. La condizione che tutti e tre i punti appartengano alla circonferenza serve in entrambe le direzioni.

:::

::::teorema{#inscritti titolo="Gli angoli opposti di un quadrilatero inscritto"}

Se i quattro vertici distinti di un quadrilatero convesso appartengono alla stessa circonferenza, gli angoli opposti sono supplementari.

:::dimostrazione

Gli angoli $\widehat{ABC}$ e $\widehat{ADC}$ insistono sui due archi fra $A$ e $C$. Il primo intercetta l'arco che passa per $D$ e il secondo quello che passa per $B$. I due archi sommano $360^\circ$. La somma delle due ampiezze alla circonferenza è quindi $180^\circ$. Applicando il ragionamento alla corda $BD$ si ottiene la stessa proprietà per gli angoli in $A$ e $C$.

:::

::grafico{assi=0 uguale=1 xmin=-4.65 xmax=4.65 ymin=-4.7 ymax=4.7 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -3.064178,2.571150 -1.368081,-3.758770 4.000000,0.000000" segmenti="4.000000,0.000000,-3.064178,2.571150" punti="4.000000,0.000000;2.000000,3.464102;-3.064178,2.571150;-1.368081,-3.758770" etichette="4.29,-0.25,A;2.32,3.71,B;-3.37,2.81,C;-1.52,-4.13,D" titolo="Gli angoli in $B$ e $D$ insistono sui due archi della corda $AC$"}

::::

:::esempio{titolo="Verificare se i dati possono appartenere a un inscritto"}

Se $\widehat{ABC}=112^\circ$ e $\widehat{ADC}=71^\circ$, la somma è $183^\circ$. Una relazione necessaria fallisce e i quattro vertici non possono stare tutti sulla stessa circonferenza. In un rettangolo i quattro angoli sono retti e si può individuare anche il centro della circonferenza circoscritta. Le diagonali sono congruenti e si bisecano, dunque il loro punto di intersezione dista metà della diagonale da ciascun vertice.

:::

## Tangenti e punto di contatto

::::teorema{#tangenti titolo="Distanza della retta e perpendicolarità"}

Una retta è tangente a una circonferenza se ha esattamente un punto comune con essa. Questo accade quando la distanza della retta dal centro è $r$. Il piede della perpendicolare dal centro è allora il punto di tangenza $T$ e il raggio $OT$ è perpendicolare alla retta.

:::dimostrazione

Sia $H$ il piede della perpendicolare. Per un punto $Q$ della retta vale $OQ^2=OH^2+HQ^2$. Un'intersezione con la circonferenza richiede quindi $HQ^2=r^2-OH^2$. Se $OH<r$, ci sono due punti, ai due lati di $H$. Se $OH=r$, l'unica soluzione è $Q=H$. Se $OH>r$, il secondo membro è negativo e la retta resta esterna. Il criterio vale anche per una retta che passa per il centro, dove $OH=0$.

:::

::grafico{assi=0 uguale=1 xmin=-4.5 xmax=4.5 ymin=-3.6 ymax=5.03 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="-4.1,1 4.1,1;-4.1,3 4.1,3;-4.1,4.22 4.1,4.22;0,2.76 0.24,2.76 0.24,3" segmenti="0,0,0,4.22" punti="0,0;-2.828427,1;2.828427,1;0,3" etichette="-0.34,-0.36,O;-3.88,1.32,s;-3.88,3.35,t;-3.88,4.55,e;0,3.37,T" titolo="$s$ ha due intersezioni, $t$ è tangente ed $e$ è esterna"}

::::

:::esempio{titolo="Le due tangenti da uno stesso punto"}

Per $P$ esterno, i punti di contatto $S,T$ si possono trovare intersecando la circonferenza data con quella di diametro $OP$. L'angolo in ciascun punto comune è retto, quindi il raggio è perpendicolare alla retta passante per $P$. Si ottengono due punti distinti, speculari rispetto alla retta $OP$. Da un punto sulla circonferenza si traccia invece una sola tangente, la perpendicolare al raggio. Da un punto interno non se ne traccia alcuna.

I triangoli $OSP$ e $OTP$ sono rettangoli con la stessa ipotenusa $OP$ e raggi uguali. Pitagora dà $PS=PT=\sqrt{OP^2-r^2}$. Con $OP=5$ e $r=3$ ciascun segmento tangente misura $4$. Nei triangoli la lunghezza $OP$ collega due punti distinti e va usata come ipotenusa.

La lunghezza del segmento tangente è anche un dato da cui si può risalire al raggio. Se $PT=12$ cm e $OP=13$ cm, si usa $OT^2=13^2-12^2=25$, quindi $r=5$ cm. La perpendicolarità necessaria riguarda $OT$ e $PT$, che si incontrano nel punto di contatto. La retta $OP$ attraversa il centro ed è distinta da entrambe le tangenti.

::grafico{assi=0 uguale=1 xmin=-3.6 xmax=5.8 ymin=-3.5 ymax=3.65 curve="3*cos(t),3*sin(t),0.000000000000,6.283185307180" linee="0,0 1.8,2.4 5,0 1.8,-2.4 0,0" segmenti="0,0,5,0" punti="0,0;5,0;1.8,2.4;1.8,-2.4" etichette="-0.34,-0.33,O;5.3,-0.32,P;1.96,2.73,T;1.93,-2.83,S" titolo="I due punti di tangenza sono speculari rispetto alla retta $OP$"}

:::

## Poligoni regolari e apotema

::::teorema{#poligoni titolo="Angoli, raggi e area di un regolare"}

Un poligono regolare convesso ha tutti i lati congruenti e tutti gli angoli interni congruenti. I vertici stanno sulla circonferenza circoscritta e i lati sono tangenti a quella inscritta. I due centri coincidono. L'**apotema** $a$ è il segmento perpendicolare dal centro al lato, lungo quanto il raggio della circonferenza inscritta. Il raggio $R$ della circonferenza circoscritta arriva invece a un vertice.

Con $n\ge3$ lati, l'angolo al centro fra due vertici consecutivi vale $\dfrac{360^\circ}{n}$ e l'angolo interno vale $180^\circ-\dfrac{360^\circ}{n}$. Con perimetro $p$, l'area è $\dfrac{pa}{2}$.

:::dimostrazione

Un movimento diretto sovrappone un lato orientato del poligono a quello successivo. Poiché i lati hanno tutti la stessa lunghezza e ad ogni vertice si svolta dello stesso angolo, il movimento porta anche ogni altro lato nel successivo. La direzione dei lati cambia, quindi il movimento è una rotazione con centro $O$.

Il punto $O$ è fisso sotto la rotazione. Le distanze dai vertici sono quindi uguali fra loro, come le distanze dalle rette dei lati. Congiungendo il centro ai vertici si ottengono $n$ triangoli isosceli congruenti. I loro angoli al centro dividono $360^\circ$ in $n$ parti uguali. In ogni vertice del poligono si incontrano due angoli alla base di quei triangoli. Le loro ampiezze sommano $180^\circ-\dfrac{360^\circ}{n}$, pari all'angolo interno del poligono.

L'area di ciascun triangolo è metà del prodotto fra il lato su cui è costruito e l'apotema. La somma delle basi è il perimetro, quindi la somma delle aree è $\dfrac{pa}{2}$.

:::

::grafico{assi=0 uguale=1 xmin=-4.6 xmax=4.65 ymin=-4.55 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,6.283185307180;3.464101615*cos(t),3.464101615*sin(t),0.000000000000,6.283185307180" linee="4.000000,0.000000 2.000000,3.464102 -2.000000,3.464102 -4.000000,0.000000 -2.000000,-3.464102 2.000000,-3.464102 4.000000,0.000000;0,0 4,0;0,0 2,3.464102;0,0 3,1.732051" punti="0,0;4,0;2,3.464102;3,1.732051" etichette="-0.27,-0.35,O;4.32,-0.24,A;2.17,3.79,B;3.22,1.98,H;1.76,-0.31,R;1.33,1.03,a" titolo="$OA$ è un raggio della circoscritta, $OH$ è l’apotema"}

::::

:::esempio{titolo="Esagono e ottagono"}

Per un esagono regolare, l'angolo al centro è $60^\circ$. Ognuno dei triangoli isosceli centrali ha quindi tre angoli di $60^\circ$ ed è equilatero. Il lato dell'esagono è lungo quanto il raggio circoscritto. Con lato $8$ cm il perimetro è $48$ cm e l'apotema è $\sqrt{8^2-4^2}=4\sqrt3$ cm.

In un ottagono regolare l'angolo al centro misura $45^\circ$ e quello interno $135^\circ$. L'esterno adiacente all'interno vale $45^\circ$. Il valore è uguale a quello dell'angolo al centro, ma i due angoli hanno vertici diversi e descrivono costruzioni diverse.

:::

## Poligoni inscritti e circoscritti

:::osservazione{#circoscritti titolo="Vertici sulla circonferenza e lati tangenti"}

Il poligono è **inscritto** rispetto a una circonferenza se vi appartengono tutti i vertici. È **circoscritto** rispetto a una circonferenza se tutti i lati sono tangenti e la circonferenza sta all'interno del poligono. Nel regolare le due descrizioni si riferiscono a circonferenze diverse. Si può avere anche un quadrilatero circoscritto con lati di lunghezze differenti.

In un quadrilatero circoscritto $ABCD$, le somme $AB+CD$ e $BC+DA$ sono uguali. Se i segmenti di tangenza a partire da $A,B,C,D$ misurano rispettivamente $u,v,w,z$, ciascun lato è la somma dei contributi dei due estremi. Entrambe le somme opposte valgono $u+v+w+z$. Per esempio, se $AB=8$, $BC=6$ e $CD=5$, allora $DA=8+5-6=7$.

::grafico{assi=0 uguale=1 xmin=-3.08 xmax=2.8 ymin=-2.66 ymax=3.72 curve="2*cos(t),2*sin(t),0.000000000000,6.283185307180" linee="2,-2 2,1.400415 -2.571150,3.064178 -1.678199,-2 2,-2" punti="2,-2;2,1.400415;-2.571150,3.064178;-1.678199,-2;2,0;0.684040,1.879385;-1.969616,-0.347296;0,-2" etichette="2.15,-2.36,A;2.31,1.58,B;-2.78,3.4,C;-1.8,-2.35,D" titolo="Ogni lato è diviso dal contatto nei segmenti provenienti dai due vertici"}

:::

## Lunghezze di circonferenze e archi

:::teorema{#lunghezze titolo="La frazione del giro"}

La lunghezza della circonferenza è $C=2\pi r$. Per un arco corrispondente a un angolo al centro di ampiezza $\alpha$, con $0<\alpha<360^\circ$, vale

$$
\ell=\dfrac{\alpha}{360^\circ}\,2\pi r.
$$

Archi di uguale ampiezza nella stessa circonferenza hanno la stessa lunghezza per rotazione. Una frazione del giro individua quindi la stessa frazione della lunghezza totale. Con $\alpha=60^\circ$ e $r=6$ cm l'arco misura $2\pi$ cm. Se si conosce l'angolo alla circonferenza, prima si raddoppia la sua ampiezza per trovare quella dell'arco.

La relazione si può usare per risalire all'angolo. Un arco di $5\pi$ cm in una circonferenza di raggio $10$ cm è lungo un quarto dei $20\pi$ cm complessivi. Il suo angolo al centro misura quindi $90^\circ$. La frazione è un rapporto fra due lunghezze espresse nella stessa unità. Nei risultati esatti si conserva $\pi$.

:::

## Aree di cerchi, settori e corone

:::teorema{#aree titolo="Superficie e bordo del settore"}

L'area del cerchio è $\pi r^2$. Un settore di ampiezza al centro $\alpha$ occupa la frazione $\dfrac{\alpha}{360^\circ}$ del cerchio. Per $0<\alpha<360^\circ$, area e perimetro sono

$$
\begin{aligned}
A_{\mathrm{s}}&=\dfrac{\alpha}{360^\circ}\,\pi r^2,\\[6pt]
P_{\mathrm{s}}&=\ell+2r .
\end{aligned}
$$

Il perimetro percorre l'arco e i due raggi. Per un quarto di cerchio con $r=4$ cm, l'arco è lungo $2\pi$ cm, il perimetro del settore è $2\pi+8$ cm e l'area è $4\pi$ cm$^2$. I tre risultati descrivono l'arco, tutto il bordo e la superficie. Eliminando la frazione di giro comune, si ottiene anche $A_{\mathrm{s}}=\dfrac{r\ell}{2}$. Per un arco lungo $9$ cm e raggio $6$ cm si calcola l'area di $27$ cm$^2$ senza ricavare l'angolo.

::grafico{assi=0 uguale=1 xmin=-0.8 xmax=4.65 ymin=-0.74 ymax=4.65 curve="4*cos(t),4*sin(t),0.000000000000,1.570796326795" poligoni="0,0 4.000000,0.000000 3.984779,0.348623 3.939231,0.694593 3.863703,1.035276 3.758770,1.368081 3.625231,1.690473 3.464102,2.000000 3.276608,2.294306 3.064178,2.571150 2.828427,2.828427 2.571150,3.064178 2.294306,3.276608 2.000000,3.464102 1.690473,3.625231 1.368081,3.758770 1.035276,3.863703 0.694593,3.939231 0.348623,3.984779 0.000000,4.000000" linee="4,0 0,0 0,4" punti="0,0;4,0;0,4" etichette="-0.19,-0.37,O;4.16,-0.37,A;-0.18,4.32,B;2,-0.37,4;-0.3,2,4" titolo="Per il settore il bordo comprende i due raggi e l’arco $AB$"}

:::

:::esempio{titolo="Una corona e una sua parte"}

Una corona circolare fra raggi concentrici $R>r$ ha area $\pi(R^2-r^2)$, ottenuta sottraendo le aree dei due cerchi. Per una parte di corona delimitata da due raggi, si applica la stessa frazione di giro a entrambi i cerchi. Con $R=8$ cm, $r=5$ cm e $\alpha=120^\circ$ l'area vale $\dfrac13\pi(64-25)=13\pi$ cm$^2$. Il bordo di quella parte comprende due archi e due tratti rettilinei lunghi $R-r$ ciascuno.

:::
