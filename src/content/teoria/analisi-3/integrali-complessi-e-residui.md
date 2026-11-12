---
titolo: "Analisi complessa: Cauchy, Laurent e residui"
sommario: "Cammini orientati, teorema e formula di Cauchy, serie di Laurent, singolarità, residui e calcolo di integrali reali."
---

## Integrale su un cammino

:::definizione{#integrale-complesso titolo="Integrale complesso e orientazione"}
Per un cammino $\gamma:[a,b]\to\mathbb C$, $C^1$ a tratti, e $f$ continua sulla sua immagine, si definisce
$$
\int_\gamma f(z)\,dz=\int_a^b f(\gamma(t))\gamma'(t)\,dt.
$$
Quando si scambiano gli estremi della parametrizzazione, l'integrale cambia segno. Vale la stima $\left|\int_\gamma f\,dz\right|\le L(\gamma)\max_\gamma|f|$. Per $\gamma(t)=a+re^{it}$, $0\le t\le2\pi$, si ha $dz=ire^{it}dt$ e $\int_\gamma\dfrac{dz}{z-a}=2\pi i$. Il verso è antiorario.
:::

:::esempio{titolo="Il segmento e il semicerchio con gli stessi estremi"}
Per $f(z)=\overline z$, si confrontino il segmento orientato da $-1$ a $1$ e il semicerchio superiore con lo stesso verso. Sul segmento $\overline z=z=x$, quindi l'integrale è $\int_{-1}^1 x\,dx=0$. Sul semicerchio si parametrizza con $z=e^{it}$, facendo decrescere $t$ da $\pi$ a zero. Qui $\overline z=e^{-it}$ e $dz=ie^{it}\,dt$, dunque il prodotto è $i\,dt$ e l'integrale vale $-i\pi$. Il confronto mostra che la conoscenza degli estremi non basta per funzioni prive di primitiva sul dominio che contiene entrambi i cammini.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.6 xmax=1.6 ymin=-0.8 ymax=1.5 curve="cos(t),sin(t),0,3.141592653589793" linee="-1,0 1,0" vettori="-0.6,0,0.45,0;-0.22,0.98,0.23,0.98" punti="-1,0,pieno;1,0,pieno" titolo="Segmento e arco superiore orientati da $-1$ a $1$. Sul secondo cammino l'angolo decresce"}
:::

:::osservazione
Nella stima in funzione della lunghezza, il massimo è cercato lungo il cammino. Sulla circonferenza $|z|=R$ con $R>1$ si ha $|z-1|\ge R-1$ per la disuguaglianza triangolare inversa. Pertanto l'integrale di $\dfrac1{(z-1)^2}$ ha modulo al più $\dfrac{2\pi R}{(R-1)^2}$. La stima tende a zero per $R$ crescente, benché cresca anche la lunghezza della curva. Questo è il bilancio da controllare quando si chiude un segmento reale mediante un arco.
:::

:::esempio{titolo="La stessa circonferenza percorsa più volte"}
Sia $\gamma(t)=1+2e^{3it}$ con $0\le t\le2\pi$. La sua immagine è la circonferenza di centro uno e raggio due. L'argomento di $\gamma(t)-1$ aumenta di $6\pi$, quindi il cammino compie tre giri in senso antiorario. Nell'integrale di $\dfrac1{z-1}$ il fattore esponenziale di $\gamma'(t)$ si semplifica con quello del denominatore. Si ottiene
$$
\int_\gamma \frac{dz}{z-1}
=\int_0^{2\pi} \frac{6i e^{3it}}{2e^{3it}}\,dt
=6\pi i .
$$
La stessa circonferenza percorsa una volta dà $2\pi i$. In questo esempio l'integrale dipende quindi sia dal verso sia dal numero di percorrenze.
:::

## Primitive e teorema di Cauchy

:::teorema{#cauchy titolo="Primitive e teorema di Cauchy"}
Se $F'=f$ su un aperto contenente il cammino, la regola della catena e il teorema fondamentale reale danno
$$
\int_\gamma f\,dz=F(\gamma(b))-F(\gamma(a)).
$$
Quindi su un cammino chiuso l'integrale è nullo. Se $f$ è olomorfa su un aperto semplicemente connesso $\Omega$, il **teorema di Cauchy** assicura integrale nullo su ogni cammino chiuso contenuto in $\Omega$. Ne segue l'esistenza di una primitiva: si fissa $z_*$ e si definisce $F(z)$ come integrale da $z_*$ a $z$; la nullità degli integrali chiusi rende il valore indipendente dal cammino. Il risultato locale da cui si deduce il teorema è il lemma di Goursat sugli integrali triangolari.

Per $f(z)=z^2$, la primitiva è $\dfrac{z^3}3$. Per $\dfrac1z$ sul piano bucato, l'integrale sulla circonferenza unitaria vale $2\pi i$: il dominio non è semplicemente connesso.
:::

::::teorema{#lemma-goursat titolo="Lemma di Goursat sul triangolo"}
Sia $T$ un triangolo chiuso contenuto in un aperto sul quale $f$ è olomorfa. Sul bordo orientato positivamente vale $\displaystyle\int_{\partial T}f(z)\,dz=0$. Il lemma permette di annullare integrali su bordi poligonali che delimitano regioni triangolabili nell'aperto, perché i lati interni hanno orientazioni opposte nelle due integrazioni.

:::dimostrazione
L'idea è confrontare l'integrale sul bordo con quelli di triangoli via via più piccoli e sfruttare la derivabilità nel loro punto comune. Congiungendo i punti medi dei lati si divide $T$ in quattro triangoli. Gli integrali sui lati interni si cancellano e la somma dei quattro integrali di bordo è l'integrale iniziale. Almeno uno dei quattro ha quindi un integrale di modulo maggiore o uguale a un quarto di quello iniziale. Ripetendo la scelta si ottiene una successione di triangoli chiusi annidati $T_n$ con diametro pari a $2^{-n}$ volte quello iniziale. I triangoli hanno in comune un punto $z_*$ e il loro perimetro è anch'esso ridotto del fattore $2^{-n}$.

Vicino a $z_*$ la differenza tra $f$ e la sua approssimazione affine ha modulo al più $\varepsilon|z-z_*|$ per ogni $\varepsilon>0$, purché il punto sia abbastanza vicino. La parte affine ha una primitiva polinomiale e quindi il suo integrale su un bordo chiuso è nullo. Posti $D$ e $L$ rispettivamente il diametro e il perimetro di $T$, per $n$ sufficientemente grande la stima di lunghezza dà
$$
4^{-n}\left|\int_{\partial T}f(z)\,dz\right|
\le \left|\int_{\partial T_n}f(z)\,dz\right|
\le \varepsilon DL\,4^{-n}.
$$
Dopo aver semplificato il fattore comune si può far tendere $\varepsilon$ a zero. L'integrale iniziale è quindi nullo.
:::
::::

:::osservazione
Una curva chiusa può essere contenuta interamente in un dominio senza che il suo interno vi appartenga. Sul piano bucato, si confrontino la circonferenza $|z|=1$ e quella di raggio $\dfrac12$ centrata in $2$. La prima racchiude l'origine e l'integrale di $\dfrac1z$ vale $2\pi i$. La seconda racchiude un disco su cui l'integranda è olomorfa e l'integrale vale zero. La differenza fra i due risultati si legge dalla posizione del punto escluso, anche se la funzione è olomorfa in prossimità di entrambe le curve.

::grafico{uguale=1 nomi="Re,Im" xmin=-1.6 xmax=3 ymin=-1.5 ymax=1.5 curve="cos(t),sin(t),0,6.283185307179586;2+0.5*cos(t),0.5*sin(t),0,6.283185307179586" punti="0,0,vuoto,0;2,0,pieno,2" titolo="Nel piano bucato, la curva a sinistra racchiude il punto escluso e quella a destra racchiude un disco contenuto nel dominio"}
:::

## Formula di Cauchy e conseguenze

::::teorema{#formula-cauchy titolo="Formula integrale di Cauchy"}
Sia $\gamma$ semplice, chiusa, positiva e $C^1$ a tratti. Se $f$ è olomorfa su un aperto contenente la curva e il suo interno, per ogni $a$ interno e intero $n\ge0$ vale
$$
\int_\gamma\frac{f(z)}{(z-a)^{n+1}}\,dz=\frac{2\pi i}{n!}f^{(n)}(a).
$$
Il caso $n=0$ si ottiene sottraendo il valore $f(a)$ e usando il teorema di Cauchy; derivando rispetto ad $a$ si ottengono gli altri casi. Per $f(z)=e^{2z}$ su $|z|=1$, l'integrale di $\dfrac{e^{2z}}{z^3}$ vale $4\pi i$.

Per un disco chiuso di centro $a$ e raggio $R>0$ contenuto nel dominio di olomorfia, le **stime di Cauchy** danno $|f^{(n)}(a)|\le\dfrac{n!M_R}{R^n}$, dove $M_R=\max_{|z-a|=R}|f(z)|$. Una funzione intera limitata è costante, perché per $n=1$ la stima tende a zero quando $R\to\infty$. Questa è la conclusione del teorema di Liouville.

:::dimostrazione
Per $n=0$, si scrive $f(z)=f(a)+(z-a)g(z)$. La definizione di derivata rende $g$ limitata vicino ad $a$. Poiché $g$ è olomorfa fuori da $a$, si può deformare il contorno in una circonferenza piccola centrata in $a$. Un taglio collega le due frontiere e permette di applicare il teorema di Cauchy alla regione tagliata. I due lati del taglio hanno contributi opposti e si cancellano. Il modulo dell'integrale di $g$ è al più il prodotto della lunghezza di questa circonferenza per un limite superiore uniforme di $|g|$, quindi l'integrale è nullo. Il termine che resta è $f(a)$ moltiplicato per l'integrale di $\dfrac1{z-a}$, che vale $2\pi i$ su ogni contorno semplice positivo che racchiude $a$. Il valore si ricava deformando il contorno in una piccola circonferenza centrata in $a$. Per derivare rispetto ad $a$ basta confinare $a$ in un disco interno alla curva. La distanza positiva dal contorno rende uniformemente controllate le derivate del nucleo lungo il percorso.
:::
::::

:::teorema{#identita-massimo titolo="Principio d'identità e principio del massimo"}
Su un dominio connesso, due funzioni olomorfe che coincidono su un insieme con punto di accumulazione interno coincidono ovunque. Una funzione olomorfa e non costante su un dominio connesso non ha massimi locali del modulo. Questi risultati seguono dall'espansione locale di Taylor e dalla formula di Cauchy.

Per una funzione olomorfa su un intorno di un disco chiuso, il massimo del modulo si cerca quindi sul bordo. La condizione di accumulazione interna è necessaria nel principio d'identità: accumulare zeri soltanto su un punto del bordo non basta.
:::

:::esempio{titolo="Una formula che cambia quando si sposta il punto"}
Sulla circonferenza positiva $|z|=2$ si voglia integrare $\dfrac{z^2+1}{z-a}$. Per $a=1$, il numeratore è olomorfo su tutto il disco e il punto è interno, quindi la formula di Cauchy dà $2\pi i(1^2+1)=4\pi i$. Per $a=3$, anche il quoziente è olomorfo nel disco, quindi l'integrale vale zero. Per $a=2$ la formula è inapplicabile perché il denominatore si annulla sul cammino. Questi tre casi si decidono confrontando la distanza del punto dal centro con il raggio, prima di valutare il numeratore.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.6 xmax=3.7 ymin=-2.6 ymax=2.6 curve="2*cos(t),2*sin(t),0,6.283185307179586" punti="1,0,pieno,1;2,0,vuoto,2;3,0,pieno,3" titolo="I punti $1$, $2$ e $3$ sono rispettivamente interno, sul bordo ed esterno a $|z|=2$"}
:::


:::esempio{titolo="Stime di Cauchy e crescita lineare"}
Sia $f$ intera e supponiamo che valga $|f(z)|\le A+B|z|$ per ogni $z$, con $A,B\ge0$. Su una circonferenza di centro $a$ e raggio $R$ si ha $|z|\le |a|+R$, quindi le stime di Cauchy danno
$$
|f''(a)|\le \frac{2\big(A+B|a|+BR\big)}{R^2}.
$$
Il centro $a$ resta fisso e il raggio può crescere senza limite perché la funzione è intera. Il secondo membro tende a zero, perciò $f''(a)=0$ in ogni punto. Ne segue che $f'$ è costante e $f(z)=c_0+c_1z$. In questo caso la stima si applica alla derivata seconda perché il massimo sul cerchio può crescere linearmente con il raggio.
:::

:::esempio{titolo="Massimo del modulo e livelli di una potenza"}
Per $f(z)=z^2$ si ha $|f(z)|=|z|^2$. I punti di modulo fissato hanno quindi lo stesso modulo dell'immagine. Nel disco $|z|\le2$ il valore massimo è $4$ e si raggiunge su tutta la circonferenza, mentre all'interno il modulo è minore. Il principio del massimo afferma che anche per una funzione olomorfa non costante con livelli di forma diversa un massimo interno è impossibile. Il valore massimo sul disco si può quindi cercare lungo il solo bordo.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=2.7 ymin=-2.7 ymax=2.7 curve="2*cos(t),2*sin(t),0,6.283185307179586;cos(t),sin(t),0,6.283185307179586" etichette="1.05,1.85,|f| = 4;0.45,0.86,|f| = 1" titolo="I livelli del modulo di $z^2$ a raggio uno e due mostrano come cambia il modulo al variare della distanza dall'origine"}
:::

## Sviluppi di Taylor e Laurent

::::teorema{#laurent titolo="Serie di Laurent"}
Se $f$ è olomorfa nell'anello $r<|z-a|<R$, ammette l'unico sviluppo
$$
f(z)=\sum_{n=-\infty}^{\infty}c_n(z-a)^n,\qquad
c_n=\frac1{2\pi i}\int_{|\zeta-a|=\rho}\frac{f(\zeta)}{(\zeta-a)^{n+1}}\,d\zeta,
$$
con $r<\rho<R$ e circonferenza positiva. Le due parti della serie convergono uniformemente sui compatti dell'anello. Nel disco di olomorfia i coefficienti negativi sono nulli e $c_n=\dfrac{f^{(n)}(a)}{n!}$: si ottiene Taylor.

Per $0<|z|<2$,
$$
\frac1{z(z-2)}=-\frac1{2z}\frac1{1-\frac z2}
=-\sum_{n=0}^{\infty}\frac{z^{n-1}}{2^{n+1}}.
$$
Per $|z|>2$ si espande invece in potenze di $\dfrac2z$. Ogni sviluppo deve riportare il proprio anello di convergenza.

:::dimostrazione
L'idea è applicare la formula di Cauchy tra due circonferenze e sviluppare il nucleo in modo diverso su ciascuna. Fissato un punto $z$ dell'anello, si scelgono due raggi $\rho_-$ e $\rho_+$ con $r<\rho_-<|z-a|<\rho_+<R$. Si indicano con $\gamma_-$ e $\gamma_+$ le due circonferenze di centro $a$, entrambe percorse in senso antiorario. Il punto $z$ sta nella regione compresa fra i due cerchi. Si esclude un piccolo disco di centro $z$. Si collegano le due frontiere interne a quella esterna con due tagli disgiunti, così il teorema di Cauchy si applica alla regione tagliata. I contributi sui due lati di ciascun taglio si cancellano. Sul piccolo cerchio centrato in $z$ si applica la formula di Cauchy. Si ottiene
$$
f(z)=\frac1{2\pi i}\int_{\gamma_+}\frac{f(\zeta)}{\zeta-z}\,d\zeta
-\frac1{2\pi i}\int_{\gamma_-}\frac{f(\zeta)}{\zeta-z}\,d\zeta.
$$
Il segno davanti al secondo integrale corrisponde al verso orario della frontiera interna della regione. Sul bordo esterno il rapporto $\dfrac{z-a}{\zeta-a}$ ha modulo minore di uno. La serie geometrica del nucleo produce quindi potenze non negative di $z-a$. Sul bordo interno il rapporto di modulo minore di uno è invece $\dfrac{\zeta-a}{z-a}$. In quel caso il nucleo si sviluppa come
$$
\frac1{\zeta-z}
=-\sum_{k=0}^{\infty}\frac{(\zeta-a)^k}{(z-a)^{k+1}},
$$
dove il segno meno si semplifica con quello del contributo interno. Si ottengono così le potenze negative di $z-a$. Scegliendo i due raggi ai lati di un intero sottoanello compatto, entrambi i rapporti restano uniformemente minori di uno in modulo. Questo giustifica l'integrazione termine a termine e la convergenza uniforme della serie sui compatti.

Gli integrali che determinano i coefficienti hanno lo stesso valore su tutte le circonferenze intermedie, per il teorema di Cauchy applicato alla regione fra due di esse. Per verificare l'unicità si può partire da un qualunque sviluppo convergente sui compatti. Moltiplicandolo per $(z-a)^{-n-1}$ e integrando su una circonferenza intermedia si isolano i termini di grado $n$, perché l'integrale di ogni altra potenza è nullo. Si ricava perciò la stessa formula per $c_n$.
:::
::::

:::osservazione
Per lo sviluppo di Laurent il centro e le singolarità determinano i raggi utili. Nella funzione $\dfrac1{z(z-2)}$ il centro zero è un polo, mentre il secondo polo si trova a distanza due. Per $0<|z|<2$ la serie usa il rapporto $\dfrac z2$, il cui modulo è minore di uno. Per $|z|>2$ si riscrive la funzione come $z^{-2}\big(1-\dfrac2z\big)^{-1}$. La serie risultante parte dal termine $z^{-2}$ e contiene soltanto potenze negative. Il coefficiente di $z^{-1}$ vale dunque zero nello sviluppo esterno, mentre nello sviluppo locale intorno al primo polo vale $-\dfrac12$. Per ricavare un residuo si usa lo sviluppo nel disco bucato in cui la singolarità al centro è l'unica esclusa.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.5 xmax=3.8 ymin=-3.4 ymax=3.4 curve="2*cos(t),2*sin(t),0,6.283185307179586;cos(t),sin(t),0,6.283185307179586;3*cos(t),3*sin(t),0,6.283185307179586" punti="0,0,vuoto,0;2,0,vuoto,2" titolo="Le circonferenze di raggio uno e tre appartengono ai due anelli distinti dal polo $z=2$"}
:::

## Singolarità e residui

:::definizione{#singolarita titolo="Singolarità isolate e residui"}
Per $f$ olomorfa in un disco bucato intorno ad $a$, la serie di Laurent classifica la singolarità.

- Tutti i coefficienti negativi nulli: singolarità eliminabile.
- Un numero finito di termini negativi, con potenza minima $-m$: polo d'ordine $m$.
- Infinite potenze negative: singolarità essenziale.

Il **residuo** è $c_{-1}$. Per un polo semplice di $\dfrac gh$, con $g,h$ olomorfe, $h(a)=0$, $h'(a)\ne0$ e $g(a)\ne0$, vale $\operatorname{Res}(\dfrac gh,a)=\dfrac{g(a)}{h'(a)}$. Per un polo d'ordine $m$,
$$
\operatorname{Res}(f,a)=\frac1{(m-1)!}
\left[\frac{d^{m-1}}{dz^{m-1}}\big((z-a)^mf(z)\big)\right]_{z=a}.
$$
In zero, $\dfrac{\sin z}z$ è eliminabile, $\dfrac1{z^3}$ ha un polo triplo con residuo zero, ed $e^{\frac1z}$ è essenziale con residuo $1$. Per $e^{\frac az}$ la serie $\sum_{n=0}^\infty\dfrac{a^n}{n!z^n}$ mostra che, per $a\ne0$, la singolarità è essenziale e il residuo è $a$.
:::

:::esempio{titolo="Una singolarità isolata e un punto di accumulazione"}
Lo zero è una singolarità essenziale isolata per $e^{\frac1z}$, che è olomorfa in ogni disco bucato centrato in zero. Per $\dfrac1{\sin\bigl(\dfrac1z\bigr)}$, invece, oltre a zero sono esclusi tutti i punti $z_k=\dfrac1{k\pi}$ con $k\ne0$. Ciascuno di questi punti è un polo semplice. Infatti la derivata del denominatore è $-\dfrac{\cos\bigl(\dfrac1z\bigr)}{z^2}$ e vale un numero diverso da zero in $z_k$. Siccome i poli si accumulano nell'origine, nessun disco bucato intorno a zero è un dominio di olomorfia. La classificazione con la serie di Laurent nel disco bucato si applica ai singoli poli, mentre in zero manca l'ipotesi di isolamento.

::grafico{uguale=1 nomi="Re,Im" xmin=-0.55 xmax=0.55 ymin=-0.24 ymax=0.24 punti="-0.31831,0,vuoto;-0.15915,0,vuoto;-0.10610,0,vuoto;-0.07958,0,vuoto;0,0,vuoto;0.07958,0,vuoto;0.10610,0,vuoto;0.15915,0,vuoto;0.31831,0,vuoto" titolo="I primi poli di $\dfrac{1}{\sin\bigl(\dfrac1z\bigr)}$, di ascissa $\dfrac1{k\pi}$, si avvicinano all'origine da entrambi i lati"}
:::

:::attenzione
Un residuo nullo fornisce informazione su un solo coefficiente. Per esempio, nello sviluppo
$$
e^{\frac1{z^2}}=\sum_{k=0}^{\infty}\frac{z^{-2k}}{k!}
$$
compaiono infinite potenze negative pari, quindi zero è una singolarità essenziale. La potenza $z^{-1}$ è assente e il residuo vale zero. L'integrale su una circonferenza centrata in zero è dunque nullo, anche se l'integranda ha una singolarità essenziale al suo interno.
:::

## Teorema dei residui e integrali reali

::::teorema{#residui titolo="Teorema dei residui"}
Sia $\gamma$ semplice, chiusa, positiva e $C^1$ a tratti. Se $f$ è olomorfa su un intorno della curva e del suo interno, salvo un numero finito di singolarità isolate interne $a_j$, allora
$$
\int_\gamma f(z)\,dz=2\pi i\sum_j\operatorname{Res}(f,a_j).
$$
Le singolarità devono essere disgiunte dal cammino. Con orientazione negativa cambia il segno. La formula sostituisce l'integrazione lungo il contorno con calcoli locali nei punti singolari. Per esempio, per $f(z)=z^{-1}$ sul cerchio unitario positivo basta il residuo $1$ in zero.

:::dimostrazione
Si eliminano piccoli dischi disgiunti attorno alle singolarità. Si uniscono i piccoli cerchi al bordo esterno mediante tagli e si applica Cauchy alla regione tagliata. Ogni taglio è percorso due volte in versi opposti e il suo contributo si annulla. L'integrale esterno coincide così con la somma degli integrali sulle piccole circonferenze positive. Nelle serie di Laurent, l'unico monomio con integrale non nullo è $(z-a_j)^{-1}$, che dà $2\pi i$. Restano quindi i residui.
:::
::::

:::esempio{titolo="Un integrale razionale sulla retta"}
Per $a>0$ e $R>a$ si integra $\dfrac1{z^2+a^2}$ sul segmento percorso da $-R$ a $R$ e sul semicerchio superiore percorso in senso antiorario. Il polo interno $ia$ ha residuo $\dfrac1{2ia}$. L'integrale sull'arco ha modulo al più $\dfrac{\pi R}{R^2-a^2}$, che tende a zero. Quindi
$$
\int_{-\infty}^{\infty}\frac{dx}{x^2+a^2}=\frac\pi a.
$$
Per un fattore $e^{ibz}$, il segno di $b$ determina il semipiano in cui l'esponenziale resta limitato. L'eliminazione dell'arco richiede una stima, per esempio il lemma di Jordan nelle sue ipotesi. Un polo sul cammino impedisce l'applicazione diretta del teorema. Per un integrale reale si può studiare il valore principale, quando esiste.
:::

:::osservazione
Nel teorema dei residui la frontiera della regione privata dei dischi ha il contorno esterno positivo e i piccoli cerchi orientati in senso orario. Perciò l'integrale esterno meno la somma degli integrali interni positivi è zero. Ogni singolarità fuori dalla curva è irrilevante per quel contorno. Per esempio, per $f(z)=\dfrac1{(z-1)(z+1)(z-4)}$ sulla curva positiva $|z|=2$ si considerano soltanto i poli $1$ e $-1$. I rispettivi residui sono $-\dfrac16$ e $\dfrac1{10}$. La loro somma è $-\dfrac1{15}$, dunque l'integrale è $-\dfrac{2\pi i}{15}$.

::grafico{uguale=1 nomi="Re,Im" xmin=-2.7 xmax=4.8 ymin=-2.5 ymax=2.5 curve="2*cos(t),2*sin(t),0,6.283185307179586;-1+0.28*cos(t),0.28*sin(t),0,6.283185307179586;1+0.28*cos(t),0.28*sin(t),0,6.283185307179586" punti="-1,0,vuoto,−1;1,0,vuoto,1;4,0,vuoto,4" titolo="I piccoli dischi isolano i poli interni. Il polo $4$ è esterno alla regione di integrazione"}
:::

:::esempio{titolo="Scelta del semipiano per un integrale oscillante"}
Per $\dfrac{e^{iz}}{z^2+1}$ si chiude il segmento reale nel semipiano superiore, perché $|e^{iz}|=e^{-\operatorname{Im}z}\le1$ quando $\operatorname{Im}z\ge0$. Sull'arco di raggio $R>1$ il modulo del denominatore è almeno $R^2-1$. La stima dell'integrale sull'arco è allora $\dfrac{\pi R}{R^2-1}$, che tende a zero. Il polo $i$ è l'unico interno e il suo residuo è $\dfrac{e^{-1}}{2i}$. Per parità, il contributo del seno sulla retta è nullo, quindi l'integrale reale di $\dfrac{\cos x}{x^2+1}$ su $\mathbb R$ vale $\pi e^{-1}$. Con $e^{-iz}$ si userebbe il semipiano inferiore, controllando anche il cambio del verso.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.4 xmax=3.4 ymin=-1.6 ymax=3.4 curve="3*cos(t),3*sin(t),0,3.141592653589793" linee="-3,0 3,0" vettori="-0.65,0,0.65,0;0.45,2.96,-0.45,2.96" punti="0,1,vuoto,i;0,-1,vuoto,−i" titolo="Il contorno positivo nel semipiano superiore include il polo $i$ ed esclude il polo $-i$"}
:::

## Conteggio degli zeri

::::teorema{#argomento-rouche titolo="Principio dell'argomento e Rouché"}
Sia $\gamma$ una curva semplice, chiusa, positiva e $C^1$ a tratti. Se $f$ è meromorfa su un intorno della curva e del suo interno, senza zeri o poli sulla curva, vale
$$
\frac1{2\pi i}\int_\gamma\frac{f'}f\,dz=N-P,
$$
dove zeri e poli sono contati con molteplicità. Se $f,g$ sono olomorfe su un intorno della curva e del suo interno e $|g|<|f|$ sulla curva, il teorema di **Rouché** dà lo stesso numero di zeri per $f$ e $f+g$ all'interno.

Su $|z|=2$, $|z+1|\le3<8=|z^3|$. Quindi $z^3+z+1$ ha tre zeri nel disco, senza bisogno di calcolare le radici.

:::dimostrazione
Per dimostrare Rouché si applica il principio dell'argomento a $F_t=f+tg$, con $0\le t\le1$. Sul contorno vale $|F_t|\ge |f|-|g|$, e la differenza ha un minimo positivo perché è continua sulla curva compatta. Dunque tutte le funzioni $F_t$ restano diverse da zero sul contorno. Il quoziente $\dfrac{F_t'}{F_t}$ è continuo lungo il cammino e dipende con continuità da $t$, anche in prossimità degli estremi dell'intervallo. Il suo integrale diviso per $2\pi i$ è quindi una funzione continua di $t$. Poiché $F_t$ è olomorfa, il principio dell'argomento identifica questo valore con il numero dei suoi zeri interni, contati con molteplicità. Una funzione continua a valori interi su un intervallo è costante. I valori per $t=0$ e $t=1$ coincidono e contano rispettivamente gli zeri di $f$ e quelli di $f+g$.
:::
::::


:::osservazione
Nel principio dell'argomento, uno zero d'ordine $m$ si scrive localmente $f(z)=(z-a)^m h(z)$, dove $h(a)\ne0$. Da questa fattorizzazione si ricava $\dfrac{f'}f=\dfrac{m}{z-a}+\dfrac{h'}h$. Il secondo termine è olomorfo vicino ad $a$, mentre il primo ha residuo $m$. Per un polo d'ordine $m$ l'esponente è $-m$, quindi il residuo è $-m$. La formula che conta zeri e poli segue così dal teorema dei residui. Nella versione geometrica, l'immagine di $\gamma$ sotto $f$ compie $N-P$ giri orientati intorno a zero.
:::

:::esempio{titolo="Rouché come confronto lungo il contorno"}
Per il polinomio $z^3+z+1$, fissato un punto $z$ con $|z|=2$, il valore $z^3$ ha modulo $8$ e la perturbazione $z+1$ ha modulo al più $3$. Durante il passaggio da $z^3$ a $z^3+z+1$, il segmento descritto da $z^3+t(z+1)$ per $0\le t\le1$ resta lontano dall'origine. Questo vale uniformemente su tutta la circonferenza. Perciò il numero di giri della curva immagine non cambia durante la deformazione. La curva $z^3$ percorre tre volte il suo cerchio e il polinomio ha dunque tre zeri interni, contati con molteplicità.

::grafico{uguale=1 nomi="Re,Im" xmin=-3.4 xmax=12.3 ymin=-4.7 ymax=4.7 curve="8+3*cos(t),3*sin(t),0,6.283185307179586" punti="0,0,pieno,0;8,0,pieno,8;11,0,pieno,11" vettori="8,0,10.7,0" titolo="Nel piano dei valori, per il punto del contorno $z=2$ la perturbazione sposta $z^3=8$ entro il disco di raggio $3$, che esclude l'origine"}
:::

::::teorema{#media-sul-cerchio titolo="Proprietà della media sul cerchio"}
Se $f$ è olomorfa in un intorno del disco chiuso di centro $a$ e raggio $r$, il valore $f(a)$ è la media dei valori di $f$ sulla circonferenza. Questa identità fornisce una prova del principio del massimo locale. Per $f(z)=z^2$ e $a=0$, la media è zero perché il valore sulla circonferenza compie due giri completi attorno a zero.

:::dimostrazione
Si parametrizza la formula di Cauchy per $n=0$ con $z=a+re^{it}$. Il fattore $re^{it}$ compare sia in $dz$ sia nel denominatore e si semplifica. Si ottiene
$$
f(a)=\frac1{2\pi}\int_0^{2\pi} f(a+re^{it})\,dt .
$$
Supponiamo che $|f|$ abbia un massimo locale in $a$ e che $f(a)\ne0$. Moltiplicando $f$ per un numero complesso di modulo uno si può rendere $f(a)$ reale e positivo. Per ogni circonferenza abbastanza piccola la parte reale dei valori sul bordo è al più $f(a)$, ma la sua media è esattamente $f(a)$. Per continuità deve essere uguale a $f(a)$ in ogni punto della circonferenza. Anche il modulo è al più $f(a)$, quindi la parte immaginaria è nulla. Applicando l'argomento a tutti i raggi piccoli si ottiene che $f$ è costante in un intorno. Se $f(a)=0$, il massimo locale impone già che $f$ sia nulla in un intorno.
:::
::::
