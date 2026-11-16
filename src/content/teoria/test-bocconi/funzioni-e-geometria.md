---
titolo: "Funzioni, geometria e trigonometria"
sommario: "Funzioni e grafici, esponenziali e logaritmi, geometria piana e analitica, trigonometria."
---

## Dominio, valori e grafico

:::definizione{#dominio-e-grafico titolo="Funzione e dominio"}
Una **funzione** associa a ogni valore ammesso della variabile $x$ un solo valore $f(x)$. L'insieme dei valori ammessi si chiama **dominio** e si indica con $D_f$. L'insieme dei risultati effettivamente assunti da $f$ si chiama immagine. Se $f(x)=x^2+1$ su tutto $\mathbb{R}$, il dominio è $\mathbb{R}$, mentre l'immagine è $[1,+\infty)$ perché $x^2\geq 0$ e ogni valore $y\geq 1$ si ottiene con $x=\sqrt{y-1}$.
:::

:::osservazione
Quando una formula è l'unico dato, il dominio naturale comprende i reali per cui tutte le operazioni sono definite. Una divisione richiede denominatore diverso da zero. Una radice di indice pari richiede radicando maggiore o uguale a zero. Un logaritmo richiede argomento strettamente positivo. Le condizioni si applicano nello stesso momento. In un problema concreto si aggiungono le condizioni del modello. Per esempio, l'area $A(s)=s^2$ di un quadrato di lato $s$ descrive un quadrato di lato positivo, sebbene il polinomio abbia senso anche per $s\leq 0$.
:::

:::esempio{titolo="Due vincoli sulla stessa variabile"}
Per $f(x)=\dfrac{\sqrt{3-x}}{x+2}$ si deve avere $3-x\geq 0$ e insieme $x+2\neq 0$. La prima condizione equivale a $x\leq 3$. La seconda esclude $x=-2$. Il dominio è quindi $(-\infty,-2)\cup(-2,3]$. Il punto $x=3$ è ammesso e dà $f(3)=0$, perché il denominatore vale $5$.
:::

:::definizione{titolo="Lettura del grafico"}
Il **grafico** di $f$ contiene i punti di coordinate $(x,f(x))$ per $x\in D_f$. Una retta verticale individua al più un punto del grafico, perché a una stessa ascissa può corrispondere una sola ordinata. Gli zeri sono le ascisse dei punti sull'asse orizzontale, poiché hanno ordinata $0$. Quando $0\in D_f$, l'intersezione con l'asse verticale è $(0,f(0))$.
:::

:::esempio{titolo="Zeri, segno e immagine"}
Per $f(x)=x^2-4$, l'equazione $f(x)=0$ si risolve con $x^2=4$, quindi gli zeri sono $-2$ e $2$. Tra gli zeri il grafico sta sotto l'asse orizzontale perché $x^2<4$ se $|x|<2$. Il minimo vale $-4$ in $x=0$, quindi l'immagine è $[-4,+\infty)$.

::grafico{f="x^2-4" xmin=-3 xmax=3 ymin=-5 ymax=5 punti="-2,0,pieno;0,-4,pieno;2,0,pieno" titolo="Il grafico attraversa l'asse orizzontale in $x=-2$ e $x=2$ e ha minimo in $(0,-4)$."}

:::

## Composizione e funzione inversa

:::definizione{#composizione-e-inversa titolo="Composizione di due funzioni"}
La **composizione** $f\circ g$ consiste nell'applicare prima $g$ e poi $f$ al risultato. Si scrive $(f\circ g)(x)=f(g(x))$. L'ingresso $x$ deve essere ammesso da $g$ e l'uscita $g(x)$ deve essere ammessa da $f$. Quindi il dominio della composizione è
$$
D_{f\circ g}=\{x\in D_g : g(x)\in D_f\}.
$$
La sequenza delle operazioni conta, perché lo scambio di $f$ e $g$ modifica sia la formula sia, in generale, il dominio.
:::

:::esempio{titolo="Scambio dell'ordine"}
Con $f(t)=\sqrt t$ e $g(x)=x-4$ si ha $(f\circ g)(x)=\sqrt{x-4}$, definita per $x\geq 4$. Nell'altro ordine si ottiene $(g\circ f)(x)=\sqrt{x}-4$, definita per $x\geq 0$. Anche dove entrambe esistono i valori possono differire. Per esempio, in $x=4$ i due risultati sono rispettivamente $0$ e $-2$.
:::

:::definizione{titolo="Inversione su un dominio iniettivo"}
Una funzione è **iniettiva** quando ingressi diversi danno risultati diversi. Per una funzione iniettiva su $D_f$, l'**inversa** $f^{-1}$ assegna al risultato $y$ l'unico ingresso $x$ per cui $f(x)=y$. Il dominio di $f^{-1}$ è l'immagine di $f$. Dal punto di vista del grafico, il punto $(x,y)$ diventa $(y,x)$ nella riflessione rispetto alla retta $y=x$.
:::

:::esempio{titolo="Inversa di una funzione definita su una semiretta"}
Sia $f(x)=(x-2)^2$ per $x\geq 2$. Dall'equazione $y=(x-2)^2$ si ricava $x=2+\sqrt y$, perché sul dominio vale $x-2\geq 0$. L'inversa è dunque $f^{-1}(y)=2+\sqrt y$ per $y\geq 0$. Se la stessa formula per $f$ fosse definita su tutto $\mathbb R$, i valori $x=1$ e $x=3$ avrebbero la stessa immagine. La restrizione a $[2,+\infty)$ rende univoca la scelta della radice.

::grafico{f="(x-2)^2+0*sqrt(x-2);2+sqrt(x);x" xmin=-0.5 xmax=6 ymin=-0.5 ymax=6 uguale=1 punti="3,1,pieno;1,3,pieno" legenda="y=(x-2)^2,\ x\ge2;y=2+\sqrt{x};y=x" titolo="I punti $(3,1)$ e $(1,3)$ sono simmetrici rispetto a $y=x$."}

:::

:::attenzione
La scrittura $f^{-1}$ indica l'inversa. Per $f(x)=2x$ sull'intera retta si ha $f^{-1}(x)=\dfrac{x}{2}$, mentre il reciproco della funzione è $\dfrac{1}{f(x)}=\dfrac{1}{2x}$ per $x\neq 0$. I due oggetti rispondono a operazioni diverse.
:::

## Potenze, valore assoluto e trasformazioni

:::definizione{#potenze-e-valore-assoluto titolo="Grafici delle potenze"}
Per un intero positivo $n$, $x^n$ è definita su $\mathbb{R}$. Se $n$ è pari, $(-x)^n=x^n$, dunque il grafico è simmetrico rispetto all'asse verticale. Se $n$ è dispari, $(-x)^n=-x^n$, dunque il grafico è simmetrico rispetto all'origine. Con esponente intero negativo si ha $x^{-n}=\dfrac{1}{x^n}$, quindi $x=0$ è escluso. Per una radice quadrata, $x^{\frac12}=\sqrt{x}$ richiede invece $x\geq 0$.
:::

:::osservazione
::grafico{f="x^2;x^3" xmin=-2 xmax=2 ymin=-4.2 ymax=4.4 punti="-1,1,pieno;-1,-1,pieno;0,0,pieno;1,1,pieno" titolo="La curva di $x^2$ conserva l'ordinata cambiando il segno di $x$. Per $x^3$ anche l'ordinata cambia segno."}
:::

:::definizione{titolo="Valore assoluto e distanza"}
Il valore assoluto $|x|$ è la distanza di $x$ da $0$. Per $x\geq 0$ vale $|x|=x$, mentre per $x<0$ vale $|x|=-x$. Da questa descrizione segue che $|x-a|$ è la distanza di $x$ da $a$. La disequazione $|x-a|\leq r$, con $r\geq 0$, equivale perciò a $x\in[a-r,a+r]$.
:::

:::esempio{titolo="Traslazioni e riflessioni"}
Il grafico di $f(x-h)+k$ si ottiene traslando quello di $f$ di $h$ unità orizzontalmente e di $k$ verticalmente. Infatti il punto $(u,f(u))$ si sposta in $(u+h,f(u)+k)$. Il segno davanti a $f$ cambia invece l'ordinata. Il grafico di $y=1-|x-2|$ ha vertice $(2,1)$, perché il valore assoluto è minimo in $x=2$. Gli zeri si ricavano da $|x-2|=1$, cioè $x=1$ e $x=3$.

::grafico{f="abs(x);1-abs(x-2)" xmin=-3 xmax=5 ymin=-3 ymax=5 punti="2,1,pieno;1,0,pieno;3,0,pieno" titolo="La retta verticale $x=2$ è asse di simmetria della curva $y=1-|x-2|$."}

:::

:::osservazione
Il cambio di scala verticale $y=cf(x)$ moltiplica ciascuna ordinata per $c$. Per esempio, $y=3x^2$ passa per $(1,3)$ e $(2,12)$, mentre $y=x^2$ passa per $(1,1)$ e $(2,4)$. La trasformazione $y=f(cx)$ cambia la scala orizzontale. Per $c>0$, un punto di ascissa $u$ nel grafico iniziale si trova ad ascissa $\dfrac{u}{c}$ in quello trasformato, poiché $cx=u$.
:::

## Esponenziali e logaritmi

:::definizione{#esponenziali-e-logaritmi titolo="Funzioni esponenziale e logaritmica"}
Per una base $a>0$ con $a\neq 1$, l'esponenziale $a^x$ è definita per ogni $x\in\mathbb{R}$, assume solo valori positivi e passa per $(0,1)$. È crescente se $a>1$ e decrescente se $0<a<1$. La sua inversa è il **logaritmo** in base $a$. Per $b>0$ vale l'equivalenza
$$
\log_a b=c \quad\Longleftrightarrow\quad a^c=b.
$$
Il grafico di $\log_a x$ passa per $(1,0)$, è definito per $x>0$ e ha come asintoto verticale la retta $x=0$. Esponenziale e logaritmo con la stessa base hanno lo stesso verso di monotonia.
:::

:::esempio{titolo="Confronto grafico per una base frazionaria"}
Per risolvere $\left(\dfrac12\right)^x\geq \dfrac14$, si scrive $\dfrac14=\left(\dfrac12\right)^2$. Poiché la funzione $(\dfrac12)^x$ è decrescente, l'ordinata è almeno $\dfrac14$ per $x\leq 2$. La retta orizzontale $y=\dfrac14$ individua il livello da confrontare.

::grafico{f="(1/2)^x;1/4" xmin=-1.5 xmax=4 ymin=-0.15 ymax=2.5 punti="2,0.25,pieno" titolo="La parte di curva sopra o sulla retta $y=\dfrac14$ corrisponde a $x\leq 2$."}

:::

:::osservazione
Per $u,v>0$ e $r\in\mathbb R$, valgono
$$
\begin{aligned}
\log_a(uv)&=\log_a u+\log_a v,\\
\log_a\left(\frac{u}{v}\right)&=\log_a u-\log_a v,\\
\log_a(u^r)&=r\log_a u.
\end{aligned}
$$
La prima identità segue dalla legge delle potenze. Se $u=a^p$ e $v=a^q$, il prodotto è $a^{p+q}$, quindi il suo logaritmo è $p+q$. Il quoziente e la potenza si trattano con lo stesso principio. Per cambiare base in una nuova base $b>0$, $b\neq 1$, da $a^{\log_a u}=u$ si ricava $(\log_a u)\log_b a=\log_b u$, dunque $\log_a u=\dfrac{\log_b u}{\log_b a}$.
:::

:::esempio{titolo="Un'equazione con due argomenti"}
Nell'equazione $\log_2(x-1)+\log_2(x+1)=3$, gli argomenti sono positivi insieme per $x>1$. Su questo insieme la somma equivale a $\log_2(x^2-1)=3$. Riscrivendo in forma esponenziale si ottiene $x^2-1=8$, quindi $x^2=9$. La soluzione ammessa è $x=3$ perché $x=-3$ è fuori dal dominio.
:::

:::esempio{titolo="Disequazione logaritmica con base minore di uno"}
Per $\log_{\frac13}(x-2)<-1$ il dominio è $x>2$. Il livello $-1$ è il logaritmo di $3$ in base $\dfrac13$. Poiché la funzione è decrescente, $\log_{\frac13}(x-2)<\log_{\frac13}3$ equivale a $x-2>3$. Tenendo conto del dominio si ottiene $x>5$.
:::

:::esempio{titolo="Lo zero del logaritmo traslato"}
Il grafico di $y=\log_3(x+2)$ si ottiene da quello di $y=\log_3 x$ spostandolo di due unità a sinistra. L'asintoto verticale è $x=-2$ e il punto di ordinata zero ha ascissa $-1$, perché $\log_3 1=0$. A destra di $-1$ il grafico sta sopra l'asse orizzontale, dunque la disequazione $\log_3(x+2)>0$ ha soluzione $x>-1$.

::grafico{f="log(x+2)/log(3);0" xmin=-3 xmax=6 ymin=-2.5 ymax=2.3 asintoti="x=-2" punti="-1,0,pieno;1,1,pieno" legenda="y=\log_3(x+2);y=0" titolo="Per $x>-1$ la curva crescente sta sopra l'asse orizzontale."}

:::

## Geometria piana

:::definizione{#geometria-piana titolo="Perimetro, area e altezza"}
Il **perimetro** misura la lunghezza del contorno. L'**area** misura l'estensione della regione interna. In un triangolo di base $b$ e altezza $h$ l'area è $\dfrac{bh}{2}$. L'altezza è la distanza perpendicolare fra il vertice opposto e la retta della base. Due copie del triangolo accostate formano un parallelogramma di base $b$ e altezza $h$, quindi ogni copia ha metà dell'area $bh$.
:::

:::osservazione
Un rettangolo di lati $a,b$ ha perimetro $2(a+b)$ e area $ab$. Un quadrato di lato $s$ ha perimetro $4s$, area $s^2$ e diagonale $s\sqrt 2$ per il teorema di Pitagora. In un trapezio con basi parallele $B,b$ e altezza $h$ l'area è $\dfrac{(B+b)h}{2}$. Unendo due copie congruenti con basi invertite si forma un parallelogramma di base $B+b$ e altezza $h$.
:::

:::esempio{titolo="Altezza di un trapezio isoscele"}
Un trapezio isoscele ha basi $14$ e $8$ e lati obliqui di lunghezza $5$. La differenza fra le basi vale $6$. Le due proiezioni laterali sulla base maggiore hanno entrambe lunghezza $3$ perché i triangoli ai lati sono congruenti. Per Pitagora, la loro altezza è $\sqrt{5^2-3^2}=4$. L'area vale quindi $\dfrac{(14+8)\cdot 4}{2}=44$ unità quadrate.

::grafico{linee="0,0 14,0 11,4 3,4 0,0" segmenti="3,0,3,4;11,0,11,4" punti="0,0,pieno;3,4,pieno;11,4,pieno;14,0,pieno" xmin=-1 xmax=15 ymin=-1 ymax=5.5 uguale=1 assi=0 etichette="7,-0.55,14;7,4.5,8;1,2.55,5;3.9,1.9,4" titolo="Le due altezze separano dalla parte rettangolare due triangoli con cateto orizzontale $3$."}

:::

:::definizione{titolo="Cerchio, arco e settore"}
Un cerchio di raggio $r$ ha area $\pi r^2$ e la sua circonferenza ha lunghezza $2\pi r$. Un settore di angolo al centro $\alpha$ in gradi occupa la frazione $\dfrac{\alpha}{360^\circ}$ del cerchio. La stessa frazione moltiplica la lunghezza della circonferenza per ottenere l'arco. Per $r=6$ e $\alpha=120^\circ$, il settore ha area $\dfrac13\cdot 36\pi=12\pi$ e l'arco è lungo $\dfrac13\cdot 12\pi=4\pi$.
:::

:::osservazione
Tra figure simili, un rapporto $k>0$ fra lunghezze corrispondenti dà un rapporto $k^2$ fra aree, poiché sia la base sia l'altezza si moltiplicano per $k$. Se due figure hanno lati corrispondenti in rapporto $\dfrac32$, le loro aree sono in rapporto $\dfrac94$. Il rapporto fra perimetri resta $\dfrac32$.
:::

:::esempio{titolo="Il segmento fra due punti medi"}
In un triangolo $ABC$ siano $M$ e $N$ i punti medi di $AB$ e $AC$. I triangoli $AMN$ e $ABC$ condividono l'angolo in $A$ e hanno $AM=\dfrac12 AB$ e $AN=\dfrac12 AC$. Sono quindi simili per il criterio lato-angolo-lato. Ne segue che $MN$ è parallelo a $BC$ e misura la metà di $BC$. L'area di $AMN$ è un quarto dell'area di $ABC$.
:::

## Coordinate, distanze e rette

:::definizione{#rette-e-distanze titolo="Distanza fra due punti"}
Per $A=(x_A,y_A)$ e $B=(x_B,y_B)$, le differenze delle coordinate sono le componenti dello spostamento da $A$ a $B$. La distanza $d(A,B)$ è l'ipotenusa del triangolo rettangolo con cateti di lunghezza $|x_B-x_A|$ e $|y_B-y_A|$. Quindi
$$
d(A,B)=\sqrt{(x_B-x_A)^2+(y_B-y_A)^2}.
$$
Le coordinate del punto medio si ottengono facendo la media delle ascisse e delle ordinate, poiché ciascuna coordinata fa metà dello spostamento corrispondente.
:::

:::osservazione
La stessa idea del punto medio si applica a una parte qualunque del segmento. Per $0\leq t\leq 1$, le coordinate del punto che dista $t$ volte la lunghezza di $AB$ da $A$ in direzione di $B$ sono
$$
P=\bigl(x_A+t(x_B-x_A),\, y_A+t(y_B-y_A)\bigr).
$$
Per esempio, tra $A=(1,1)$ e $B=(9,5)$ con $t=\dfrac14$ si ottiene $P=(3,2)$. La distanza da $A$ è un quarto di $AB$ e quella da $B$ è tre quarti, perciò il rapporto tra le due distanze è $\dfrac13$.
:::

:::definizione{titolo="Coefficiente angolare ed equazione della retta"}
Se $x_A\neq x_B$, il **coefficiente angolare** della retta per $A$ e $B$ è
$$
m=\frac{y_B-y_A}{x_B-x_A}.
$$
L'ordinata varia di $m$ per ogni unità in più di ascissa. La retta con pendenza $m$ passante per $A$ è espressa da $y-y_A=m(x-x_A)$. Se le ascisse coincidono e i due punti sono distinti, la retta è verticale e ha equazione $x=x_A$. Una retta scritta nella forma $y=mx+q$ taglia l'asse verticale nel punto $(0,q)$.
:::

:::esempio{titolo="Pendenza e passaggio per un punto"}
La retta che passa per $A=(-1,4)$ e per $B=(3,2)$ ha pendenza
$$
m=\frac{2-4}{3-(-1)}=-\frac12.
$$
Da $y-4=-\dfrac12(x+1)$ si ricava $y=-\dfrac12x+\dfrac72$. Per trovare il punto che ha ascissa $5$, si sostituisce $x=5$ nella formula. Si ottiene $y=1$, quindi il punto cercato è $(5,1)$.
:::

:::osservazione
Due rette distinte con pendenze uguali sono parallele. Due rette non verticali sono perpendicolari se e solo se il prodotto delle pendenze è $-1$. Infatti i loro vettori direttori $(1,m_1)$ e $(1,m_2)$ hanno prodotto scalare $1+m_1m_2$, e la perpendicolarità equivale al suo annullamento. Una retta verticale è perpendicolare a una retta orizzontale. Per esempio, una retta ortogonale a $y=-\dfrac12x+\dfrac72$ ha pendenza $2$.
:::

:::esempio{titolo="Punto di intersezione"}
Per trovare il punto comune tra $y=2x+1$ e $y=-x+7$ si uguagliano le ordinate alla stessa ascissa. L'equazione $2x+1=-x+7$ dà $x=2$. Sostituendo in una delle due rette si ottiene $y=5$. Il punto $(2,5)$ appartiene a entrambe, poiché la sostituzione verifica entrambe le equazioni.

::grafico{f="2*x+1;7-x" xmin=-0.5 xmax=4.5 ymin=-0.5 ymax=8 punti="2,5,pieno,P" titolo="Il punto $P=(2,5)$ è l'unica intersezione perché le pendenze sono diverse."}

:::

## Parabole e circonferenze

:::definizione{#parabole-e-circonferenze titolo="Parabola con asse verticale"}
Sia $a\neq 0$. Nella forma $y=a(x-h)^2+k$, la parabola ha vertice $(h,k)$ e asse di simmetria $x=h$. Il vertice è il punto di minimo se $a>0$ e quello di massimo se $a<0$, perché $(x-h)^2\geq 0$. Per riportare $y=ax^2+bx+c$ a questa forma si completa il quadrato. L'ascissa del vertice è $h=-\dfrac{b}{2a}$ e la sua ordinata è $k=ah^2+bh+c$.
:::

:::esempio{titolo="Intersezione e tangenza tra retta e parabola"}
L'incontro tra $y=x^2-2x+3$ e $y=2x-1$ richiede $x^2-2x+3=2x-1$. Portando tutti i termini a sinistra si ottiene $(x-2)^2=0$. L'unica radice è doppia, quindi la retta non verticale è tangente nel punto $(2,3)$. In generale, per una retta non verticale, il numero di intersezioni dipende dal discriminante dell'equazione quadratica risultante. Una retta verticale $x=c$ incontra la parabola in un solo punto per qualunque $c$. Questo conteggio da solo non implica tangenza.

::grafico{f="x^2-2*x+3;2*x-1" xmin=-0.5 xmax=4.5 ymin=-1 ymax=8 punti="2,3,pieno" titolo="La differenza tra le due ordinate è $(x-2)^2$. La retta ha un solo punto comune con la parabola ed è tangente in $(2,3)$."}

:::

:::definizione{titolo="Circonferenza di centro e raggio dati"}
I punti a distanza $r>0$ da $C=(h,k)$ formano la circonferenza di equazione
$$
(x-h)^2+(y-k)^2=r^2.
$$
In forma espansa, si ritrovano centro e raggio completando il quadrato sia in $x$ sia in $y$. Per esempio, da $x^2+y^2-4x+2y-4=0$ si ottiene $(x-2)^2+(y+1)^2=9$, quindi il centro è $(2,-1)$ e il raggio è $3$.
:::

:::osservazione
Una retta a distanza $d$ dal centro della circonferenza è secante se $d<r$, tangente se $d=r$ ed esterna se $d>r$. Sia $H$ il piede della perpendicolare dal centro alla retta. Per qualsiasi punto $P$ sulla retta vale $CP^2=d^2+HP^2$ per Pitagora. Si impone $CP=r$ e si ottiene $HP^2=r^2-d^2$, da cui seguono i tre casi. Nella circonferenza $(x-2)^2+(y+1)^2=9$, la retta $x=5$ dista $3$ dal centro ed è tangente in $(5,-1)$.
:::

## Trigonometria e triangoli rettangoli

:::definizione{#trigonometria titolo="Angoli e circonferenza unitaria"}
Un angolo di un radiante intercetta, sulla circonferenza unitaria, un arco di lunghezza $1$. Un giro completo misura $2\pi$ radianti, quindi $180^\circ$ corrispondono a $\pi$ radianti. Le coordinate del punto della circonferenza unitaria associato all'angolo $\theta$ sono $(\cos\theta,\sin\theta)$. Ne segue $\sin^2\theta+\cos^2\theta=1$. Quando $\cos\theta\neq 0$, si definisce $\tan\theta=\dfrac{\sin\theta}{\cos\theta}$.
:::

:::osservazione
Seno e coseno hanno immagine $[-1,1]$ e periodo $2\pi$. Il seno è dispari, mentre il coseno è pari. Per esempio, $\cos(-\theta)=\cos\theta$ perché riflettere rispetto all'asse orizzontale lascia invariata l'ascissa. La tangente ha periodo $\pi$ e non è definita per $\theta=\dfrac{\pi}{2}+k\pi$ con $k\in\mathbb Z$, poiché in tali punti il coseno vale zero. Nei punti esclusi sono presenti asintoti verticali.

::grafico{f="sin(x);cos(x)" xmin=-3.4 xmax=6.6 ymin=-1.3 ymax=1.3 punti="0,0,pieno;0,1,pieno;1.5708,1,pieno;3.1416,-1,pieno" titolo="In $0$ il seno vale $0$ e il coseno $1$. Il seno raggiunge $1$ in $\dfrac{\pi}{2}$ e il coseno vale $-1$ in $\pi$."}

::grafico{f="tan(x)" xmin=-3.4 xmax=3.4 ymin=-3.2 ymax=3.2 asintoti="x=-1.5708;x=1.5708" punti="0,0,pieno" titolo="La tangente ha asintoti verticali in $\pm\dfrac{\pi}{2}$ nella finestra rappresentata."}

:::

:::definizione{titolo="Funzioni trigonometriche inverse"}
Per invertire seno, coseno e tangente si fissano gli intervalli in cui ciascuna funzione è iniettiva. $\arcsin$ ha dominio $[-1,1]$ e dà un angolo in $\left[-\dfrac{\pi}{2},\dfrac{\pi}{2}\right]$. $\arccos$ ha lo stesso dominio e dà un angolo in $[0,\pi]$. $\arctan$ ha dominio $\mathbb R$ e dà un angolo in $\left(-\dfrac{\pi}{2},\dfrac{\pi}{2}\right)$. Per esempio, $\arcsin\left(\dfrac12\right)=\dfrac{\pi}{6}$ perché in quell'intervallo il seno assume $\dfrac12$ solo a quell'angolo.
:::

:::osservazione
::grafico{f="asin(x);acos(x);atan(x)" xmin=-2.8 xmax=2.8 ymin=-1.9 ymax=3.4 punti="-1,-1.5708,pieno;-1,3.1416,pieno;0,0,pieno;0,1.5708,pieno;1,0,pieno;1,1.5708,pieno" titolo="Arcoseno e arcocoseno sono definiti per $-1\leq x\leq 1$. L'arcotangente è definita su tutta la retta reale."}
:::

:::osservazione
Nel triangolo rettangolo isoscele i cateti sono uguali e l'ipotenusa è lunga $\sqrt2$ volte un cateto. Si ricavano così il seno e il coseno di $45^\circ$. Tagliando un triangolo equilatero di lato $2$ con la sua altezza si ottiene un triangolo con cateti $1$ e $\sqrt3$ e ipotenusa $2$. I rapporti dei lati danno i valori per $30^\circ$ e $60^\circ$.

| $\theta$ | $\sin\theta$ | $\cos\theta$ | $\tan\theta$ |
| --- | --- | --- | --- |
| $30^\circ=\dfrac{\pi}{6}$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{\sqrt3}{3}$ |
| $45^\circ=\dfrac{\pi}{4}$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $60^\circ=\dfrac{\pi}{3}$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |
:::

:::esempio{titolo="Lunghezze da un angolo acuto"}
In un triangolo rettangolo una scala lunga $10\,\mathrm{m}$ forma un angolo di $60^\circ$ con il suolo orizzontale. L'altezza raggiunta è il cateto opposto all'angolo. Poiché il seno è il rapporto fra cateto opposto e ipotenusa, l'altezza vale $10\sin60^\circ=5\sqrt3\,\mathrm{m}$. La distanza orizzontale dal muro è il cateto adiacente e vale $10\cos60^\circ=5\,\mathrm{m}$. La relazione $5^2+(5\sqrt3)^2=10^2$ verifica i valori con Pitagora.
:::

:::osservazione
Per un angolo acuto in un triangolo rettangolo, la tangente è il rapporto tra cateto opposto e cateto adiacente. Se una rampa sale di $3\,\mathrm{m}$ in $4\,\mathrm{m}$ orizzontali, la sua inclinazione è $\arctan\left(\dfrac34\right)$. Se si conosce il coseno di un angolo acuto, l'identità pitagorica dà il seno scegliendo la radice positiva. Per esempio, con $\cos\theta=\dfrac45$ e $0<\theta<\dfrac{\pi}{2}$ si ottiene $\sin\theta=\sqrt{1-\dfrac{16}{25}}=\dfrac35$ e quindi $\tan\theta=\dfrac34$.
:::

:::osservazione
Dalle formule di addizione $\sin(u+v)=\sin u\cos v+\cos u\sin v$ e $\cos(u+v)=\cos u\cos v-\sin u\sin v$ si ricavano le formule per l'angolo doppio ponendo $u=v=\theta$. Per il coseno si può anche usare l'identità pitagorica, perciò
$$
\begin{aligned}
\sin(2\theta)&=2\sin\theta\cos\theta,\\
\cos(2\theta)&=\cos^2\theta-\sin^2\theta\\
&=1-2\sin^2\theta=2\cos^2\theta-1.
\end{aligned}
$$
Per esempio, se $\cos\theta=\dfrac13$, si ottiene direttamente $\cos(2\theta)=2\cdot\dfrac19-1=-\dfrac79$. La forma che contiene solo il coseno basta quando il dato è $\cos\theta$.
:::

:::osservazione
Per $A\neq 0$ e $b\neq 0$, la funzione $y=A\cos(bx)+c$ ha periodo positivo minimo $\dfrac{2\pi}{|b|}$, perché in tale intervallo l'argomento varia di un giro completo in uno dei due sensi. La stessa regola vale per il seno. Il coefficiente $A$ cambia l'ampiezza e $c$ sposta il grafico verticalmente. Per esempio la funzione $y=2\sin(4x)+1$ si ripete ogni $\dfrac{\pi}{2}$.
:::
