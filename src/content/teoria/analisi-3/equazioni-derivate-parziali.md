---
titolo: "Equazioni alle derivate parziali"
sommario: "Classificazione, caratteristiche, separazione delle variabili, calore, onde, Laplace e formulazione debole."
---

## Equazioni e dati

:::definizione{#classificazione titolo="Equazione alle derivate parziali"}
Un'equazione alle derivate parziali lega una funzione di più variabili e le sue derivate. È lineare se il membro che contiene l'incognita è una combinazione lineare della funzione e delle sue derivate, con coefficienti assegnati in funzione delle variabili indipendenti. In due variabili, la parte principale
$$
A u_{xx}+2B u_{xy}+C u_{yy}
$$
è ellittica se $B^2-AC<0$, parabolica se è zero e la matrice principale ha rango uno, e iperbolica se è positiva. La classificazione si effettua punto per punto. Dove $A=B=C=0$ vengono meno tutti i termini di secondo ordine. Laplace è ellittica, il calore è parabolica e le onde sono iperboliche.

Il tipo dipende dalla parte principale, cioè dai coefficienti delle derivate di ordine più alto. Per formulare un problema si specificano anche il dominio e le condizioni. Sul segmento, l'equazione delle onde con estremi fissi richiede posizione e velocità iniziali. L'equazione del calore con temperature assegnate agli estremi richiede una distribuzione iniziale. I due problemi hanno infatti ordini diversi rispetto al tempo.
:::

:::esempio{titolo="Classificare quando è presente una derivata mista"}
Per $u_{xx}+4u_{xy}+u_{yy}=0$, il coefficiente della derivata mista è $2B$, quindi $B=2$. Ne segue $B^2-AC=4-1=3>0$ e l'equazione è iperbolica. La matrice simmetrica della parte principale è
$$
M=\begin{pmatrix}1&2\\2&1\end{pmatrix}.
$$
I vettori $(1,1)$ e $(1,-1)$ sono autovettori con autovalori $3$ e $-1$. La direzione di ciascun autovettore fornisce un nuovo asse. Il cambio di assi è ortogonale e conserva le lunghezze. Si scrivano le nuove coordinate $\xi=\dfrac{x+y}{\sqrt2}$ e $\eta=\dfrac{x-y}{\sqrt2}$ e si indichi la funzione in queste coordinate con $v$. Applicando la regola della catena si ottiene
$$
u_{xx}+4u_{xy}+u_{yy}=3v_{\xi\xi}-v_{\eta\eta}.
$$
Nell'equazione trasformata compare una derivata seconda con coefficiente positivo e una con coefficiente negativo. Il criterio del discriminante registra lo stesso segno opposto, perché $\det M=AC-B^2$ è il prodotto degli autovalori.

::grafico{uguale=1 nomi="x,y" xmin=-2.4 xmax=2.4 ymin=-2.4 ymax=2.4 vettori="0,0,1.6,1.6,λ=3;0,0,1.6,-1.6,λ=−1" titolo="Nell'esempio con derivata mista, gli assi principali sono le diagonali. Lungo la prima la forma ha segno positivo, lungo la seconda ha segno negativo."}

:::

:::osservazione
La classificazione è locale quando i coefficienti dipendono dal punto. Per $u_{xx}+x u_{yy}=0$, il discriminante è $-x$. L'equazione è ellittica per $x>0$, iperbolica per $x<0$ e parabolica in senso locale sulla retta $x=0$, dove la parte principale ha rango uno e l'equazione cambia tipo. Per il calore, la derivata prima nel tempo è indispensabile anche se non compare nella matrice delle derivate seconde. Essa determina l'evoluzione a partire dal dato iniziale.
:::

:::esempio{titolo="Un operatore in forma di evoluzione"}
Per il calore, con le variabili $x$ e $t$, la parte principale di $u_t-\kappa u_{xx}=0$ contiene solo la derivata seconda spaziale. Il suo discriminante è zero e il rango è uno. Il termine $u_t$ determina come la funzione varia nel tempo. Per esempio, sul segmento $(0,\pi)$ il profilo $\sin x$ ha derivata seconda uguale a $-\sin x$. Se la soluzione è il prodotto di quel profilo per una funzione del tempo, la derivata di tale funzione è proporzionale al suo valore. Il dato iniziale fissa la costante di integrazione dell'equazione del primo ordine così ottenuta. Per le onde lo stesso procedimento dà un'equazione del secondo ordine, quindi fissa due costanti tramite i due dati iniziali.
:::

## Caratteristiche e trasporto

::::teorema{#trasporto titolo="Equazione del trasporto"}
Sulla retta, per $u_t+c u_x=0$ con velocità costante $c\in\mathbb R$ e dato iniziale $u(0,x)=f(x)$, con $f\in C^1(\mathbb R)$, vale
$$
u(t,x)=f(x-ct).
$$
Lungo la retta che collega $(0,x-ct)$ a $(t,x)$ si può calcolare il valore finale a partire dal dato iniziale.

::grafico{nomi="x,t" xmin=-3 xmax=6 ymin=0 ymax=3.2 linee="-2,0 4,3;0,0 6,3;2,0 6,2" punti="0,0,pieno;4,2,pieno" segmenti="4,0,4,2" titolo="Le caratteristiche per $c=2$ sono rette parallele. Per conoscere $u(2,4)$ si segue la retta fino a $t=0$, dove si legge il dato in $x_0=0$."}

Se la sorgente $g$ e la derivata $\partial_x g$ sono continue, per l'equazione $u_t+cu_x=g(t,x)$ si ha la soluzione classica
$$
u(t,x)=f(x-ct)+\int_0^t g(s,x-c(t-s))\,ds.
$$
Per dimostrare le due formule si integra l'equazione lungo la stessa retta, tenendo conto del valore della sorgente a ogni punto.

:::dimostrazione
Si fissi il punto di arrivo $(t,x)$ e si indichi con $s$ il tempo che varia lungo il cammino. L'ascissa del cammino è $x(s)=x-c(t-s)$, quindi $x'(s)=c$. La regola della catena trasforma la derivata di $s\mapsto u(s,x(s))$ nel membro sinistro dell'equazione. Senza sorgente la derivata vale zero e il valore è costante. Con sorgente, la derivata vale $g(s,x(s))$. Integrando fra $0$ e $t$ si ottiene la formula e si riconosce il dato iniziale nel punto di ascissa $x-ct$.

La stessa formula vale per ogni soluzione classica, quindi dimostra anche l'unicità. Per l'esistenza, l'integrale ha derivate prime continue per le ipotesi su $g$ e $\partial_x g$. La derivata temporale produce il termine all'estremo superiore $g(t,x)$ e un integrale con fattore $-c$ davanti a $\partial_x g$. Il termine $cu_x$ contiene lo stesso integrale con fattore opposto. La somma restituisce la sorgente e il valore in $t=0$ coincide con $f$.
:::
::::

:::esempio{titolo="Contributo della sorgente lungo una caratteristica"}
Sia $u_t+2u_x=x$ e sia $u(0,x)=0$. Per calcolare $u(t,x)$ si segue all'indietro la caratteristica che arriva al punto assegnato. Al tempo $s$ la sua ascissa è $x-2(t-s)$, perciò la sorgente assume il valore $x-2t+2s$ lungo il percorso. Integrando si trova
$$
u(t,x)=\int_0^t(x-2t+2s)\,ds=tx-t^2.
$$
Infatti $u_t=x-2t$ e $2u_x=2t$, quindi la loro somma è $x$. Sostituire nell'integrale il solo valore finale della sorgente darebbe $tx$, che non soddisfa l'equazione.
:::

:::esempio{titolo="Traslazione del dato gaussiano"}
Per velocità $c=2$ e dato iniziale $f(x)=e^{-x^2}$, la soluzione senza sorgente è $e^{-(x-2t)^2}$. Il profilo ha sempre valore massimo uno, raggiunto nel punto in cui $x-2t=0$. Nei punti $x=2t\pm d$ a distanza $d$ dal massimo, il valore è $e^{-d^2}$ per ogni tempo. Il profilo cambia quindi posizione conservando altezza e larghezza.

::grafico{f="exp(-x^2);exp(-(x-2)^2);exp(-(x-4)^2)" nomi="x,u" xmin=-2 xmax=6 ymin=0 ymax=1.17 punti="0,1,pieno;2,1,pieno;4,1,pieno" legenda="u(0,x);u(1,x);u(2,x)" titolo="Per il trasporto senza sorgente a velocità $2$, il massimo del dato gaussiano si trova in $x=0$, $x=2$ e $x=4$ ai tempi $0$, $1$ e $2$. Il profilo conserva la forma."}

:::

:::osservazione
Sul semiasse $x>0$ con velocità $c>0$, una caratteristica percorsa all'indietro raggiunge $t=0$ solo quando $x\ge ct$. Altrimenti arriva a $x=0$ al tempo $t-\dfrac xc$. Nel secondo caso si legge quindi il valore assegnato al bordo di ingresso. Se il dato iniziale è $f$ e quello di ingresso è $h$, la soluzione dei due rami è rispettivamente $f(x-ct)$ e $h(t-\dfrac xc)$. La continuità sulla retta $x=ct$ richiede $f(0)=h(0)$. Per avere derivate prime continue sul raccordo serve anche $h'(0)=-c f'(0)$, perché le derivate temporali dei due rami sul raccordo sono $-c f'(0)$ e $h'(0)$. Un dato iniziale e uno al bordo compatibili nel valore possono dunque produrre una soluzione continua con derivate discontinue. Il punto in cui si impone il dato dipende dalla direzione delle caratteristiche.
:::

:::attenzione
Un dato all'uscita richiederebbe una condizione aggiuntiva sui valori che provengono dall'interno. Sul semiasse positivo, per velocità $c=-1$, la caratteristica che termina in $(t,x)$ proviene dal punto di ascissa $x+t$. Il dato iniziale determina quindi $u(t,x)=f(x+t)$ fino al bordo. La traccia in $x=0$ vale $f(t)$ e ogni valore assegnato al bordo deve coincidere con questo. Per esempio, con dato iniziale $f(x)=x$ la traccia è $t$, anche se il profilo iniziale vale zero in corrispondenza del bordo.
:::

## Separazione delle variabili

:::definizione{#separazione titolo="Autofunzioni e condizioni al bordo"}
Per cercare soluzioni di un'equazione lineare omogenea si pone $u(t,x)=T(t)X(x)$. Sul segmento $(0,L)$ con condizioni di Dirichlet omogenee, il problema spaziale è
$$
-X''=\lambda X,\qquad X(0)=X(L)=0.
$$
Le soluzioni non nulle corrispondono a $\lambda_n=\left(\dfrac{n\pi}L\right)^2$ e $X_n(x)=\sin\left(\dfrac{n\pi x}L\right)$, con $n\ge1$. Per $\lambda\le0$ le condizioni impongono la soluzione nulla; per $\lambda>0$ impongono $\sqrt\lambda L=n\pi$.

Il dato iniziale si espande in questa base, con coefficienti $b_n=\dfrac2L\int_0^L f(x)\sin\left(\dfrac{n\pi x}L\right)\,dx$. Per un dato in $L^2$ lo sviluppo converge in quella norma. La derivazione termine a termine richiede ulteriori stime sui coefficienti.
:::

:::osservazione
Moltiplicando $-X''=\lambda X$ per $\overline X$ e integrando da $0$ a $L$, il termine al bordo sparisce perché $X$ è nullo agli estremi. Resta
$$
\int_0^L |X'|^2\,dx=\lambda\int_0^L |X|^2\,dx.
$$
Se $X$ è non nulla, l'integrale di $|X'|^2$ è positivo, perché una soluzione costante compatibile con i due vincoli sarebbe nulla. Quindi $\lambda>0$. Si risolve allora l'equazione con seni e coseni. La condizione in zero elimina il coseno. La condizione in $L$ seleziona le frequenze per le quali il seno torna a zero.

::grafico{f="sin(pi*x)+0*sqrt(x*(1-x));sin(2*pi*x)+0*sqrt(x*(1-x));sin(3*pi*x)+0*sqrt(x*(1-x))" nomi="x,X" xmin=0 xmax=1 ymin=-1.22 ymax=1.22 punti="0,0,pieno;1,0,pieno" legenda="\sin(\pi x);\sin(2\pi x);\sin(3\pi x)" titolo="Su $[0,1]$ le prime tre autofunzioni di Dirichlet sono nulle a entrambi gli estremi. Hanno rispettivamente zero, uno e due nodi interni."}

:::

:::esempio{titolo="Dati al bordo non omogenei"}
Per il calore su $(0,L)$ con temperature fisse $A$ a sinistra e $B$ a destra si pone $w=u-p$, dove $p(x)=A+(B-A)\dfrac{x}{L}$. Il profilo $p$ ha derivata seconda nulla e soddisfa i due dati al bordo. Quindi $w$ soddisfa la stessa equazione con vincoli omogenei e dato iniziale $f-p$. Dopo aver sviluppato $f-p$ in seni, si somma di nuovo $p$. La separazione va applicata al dato corretto, perché ciascun seno è nullo ai bordi e una somma di modi regolari del calore conserva quel valore.
:::

:::esempio{titolo="Autofunzioni con derivata nulla ai bordi"}
Se gli estremi del segmento sono isolati, le condizioni omogenee sono $X'(0)=X'(L)=0$. Per $\lambda>0$, scrivendo $X$ come somma di seno e coseno, la condizione in zero elimina il seno. La derivata del coseno deve poi annullarsi in $L$, quindi le frequenze positive restano $\dfrac{n\pi}{L}$ con $n\ge1$. Compare anche $\lambda=0$. Infatti in quel caso $X''=0$ e i vincoli impongono pendenza nulla, lasciando le funzioni costanti. Per $\lambda<0$ l'identità integrale, ottenuta integrando per parti con il termine al bordo nullo per $X'=0$, esclude soluzioni non nulle. Il modo costante ha fattore temporale costante nell'equazione del calore. Questo modo rappresenta la media iniziale, che si conserva perché il flusso attraverso entrambi gli estremi è nullo.
:::

## Equazione del calore

::::teorema{#calore titolo="Calore su un segmento"}
Per $u_t=\kappa u_{xx}$, con $\kappa>0$, $0<x<L$, $u(t,0)=u(t,L)=0$ e $u(0,x)=f(x)$, la soluzione per $f\in L^2(0,L)$ è
$$
u(t,x)=\sum_{n=1}^{\infty}b_n
e^{-\kappa\left(\frac{n\pi}L\right)^2t}
\sin\left(\frac{n\pi x}L\right).
$$
La serie converge al dato in $L^2$ quando $t\downarrow0$ ed è regolare per $t>0$. Ogni modo soddisfa $T_n'=-\kappa\lambda_nT_n$ e quindi decade esponenzialmente. Per $L=\pi$ e $f=\sin(2x)$ si ottiene $e^{-4\kappa t}\sin(2x)$.

Per una soluzione classica reale, sufficientemente regolare fino agli estremi, integrando per parti si ha
$$
\frac d{dt}\frac12\int_0^L u^2\,dx
=-\kappa\int_0^L u_x^2\,dx.
$$
L'energia decresce. Applicando l'identità alla differenza di due soluzioni con gli stessi dati si ottiene unicità nella classe in cui vale il bilancio e la soluzione raggiunge il dato iniziale in norma.

:::dimostrazione
La separazione delle variabili trasforma l'equazione in una successione di problemi scalari. L'ortogonalità dei seni determina il coefficiente iniziale di ogni problema. Per ogni tempo strettamente positivo, l'esponenziale moltiplica i coefficienti di Fourier per un fattore che decresce più rapidamente di qualsiasi potenza inversa dell'indice. I coefficienti del dato sono limitati perché formano una successione a quadrato sommabile. Ogni derivata spaziale o temporale introduce al più una potenza dell'indice. Per tempi limitati inferiormente da una costante positiva, la serie risultante è quindi uniformemente convergente e si può verificare l'equazione termine a termine.

Per il dato iniziale, la norma quadrata della differenza tra soluzione e dato è la somma dei quadrati dei coefficienti della differenza, moltiplicata per $\dfrac L2$. Ogni coefficiente tende a zero e il suo modulo è maggiorato da quello del coefficiente iniziale. La somma dei quadrati iniziali converge, quindi la norma della differenza tende a zero. Per il bilancio dell'energia si moltiplica l'equazione per $u$ e si integra per parti nello spazio. Il termine al bordo vale zero perché $u$ ha valore nullo ai due estremi.
:::
::::

:::esempio{titolo="Due modi e selezione delle frequenze"}
Su $(0,\pi)$ con $\kappa=1$ e dato $f(x)=\sin x+\sin(3x)$, i coefficienti sono $b_1=b_3=1$. La soluzione è $e^{-t}\sin x+e^{-9t}\sin(3x)$. Dopo un tempo $t=\dfrac14$, il primo coefficiente vale $e^{-\dfrac14}$ e il terzo vale $e^{-\dfrac94}$. Il rapporto tra le due ampiezze è $e^{-2}$. Questa differenza spiega perché le oscillazioni spaziali più fitte si attenuano prima. Nel punto $x=\dfrac\pi2$ i due modi hanno valori iniziali opposti. La somma in quel punto al tempo zero vale quindi zero. Per $t>0$ vale $e^{-t}-e^{-9t}>0$ perché il terzo modo ha ampiezza minore del primo. Il valore al centro cambia per il diverso decadimento. Gli zeri di ciascuna componente, presa singolarmente, restano fissi.

::grafico{f="sin(x)+sin(3*x);exp(-0.25)*sin(x)+exp(-2.25)*sin(3*x);exp(-1)*sin(x)+exp(-9)*sin(3*x)" xmin=0 xmax=3.14159265 ymin=-0.45 ymax=2 nomi="x,u" legenda="u(0,x);u(\frac14,x);u(1,x)" titolo="Per il dato $\sin x+\sin(3x)$, i profili al tempo $0$, $\dfrac14$ e $1$ mostrano la rapida perdita del terzo modo."}

:::

:::osservazione
L'energia usata nella stima è la norma al quadrato della soluzione, divisa per due. Il flusso al bordo non contribuisce alla derivata dell'energia perché $u$ si annulla agli estremi. Per il singolo modo di frequenza $n$, l'energia vale $\dfrac L4 b_n^2 e^{-2\kappa\lambda_n t}$. Il tasso di decadimento dell'energia è doppio rispetto a quello del coefficiente del modo.
:::

:::osservazione
Il decadimento dell'intera soluzione con estremi nulli si può stimare conoscendo il solo autovalore più piccolo. Per ogni modo si ha $e^{-\kappa\lambda_nt}\le e^{-\kappa\lambda_1t}$. Per Parseval segue
$$
\|u(t,\cdot)\|_{L^2(0,L)}\le e^{-\kappa\lambda_1t}\|f\|_{L^2(0,L)}.
$$
Se il primo coefficiente è zero si può usare l'autovalore del primo modo effettivamente presente. Per esempio, con dato $\sin(2x)$ su $(0,\pi)$ il tasso nella stima è $4\kappa$. Con estremi isolati il modo costante ha autovalore zero, quindi la stima con decadimento esponenziale si applica alla differenza tra la soluzione e la sua media.
:::

## Equazione delle onde

::::teorema{#onde titolo="Formula di d'Alembert e modi su un segmento"}
Sulla retta, per $u_{tt}=c^2u_{xx}$ con $c>0$, $u(0,x)=f(x)$ e $u_t(0,x)=g(x)$, con $f\in C^2$ e $g\in C^1$,
$$
u(t,x)=\frac{f(x-ct)+f(x+ct)}2+
\frac1{2c}\int_{x-ct}^{x+ct}g(s)\,ds.
$$
La formula distingue la posizione iniziale, valutata in due punti, dalla velocità iniziale, integrata fra i due punti.

::grafico{nomi="x,t" uguale=1 xmin=-4 xmax=4 ymin=0 ymax=3.6 poligoni="-3,0 3,0 0,3" linee="-3,0 0,3 3,0" punti="-3,0,pieno;3,0,pieno;0,3,pieno" titolo="Per $c=1$, il punto $(x,t)=(0,3)$ dipende da $f$ nei due estremi $-3$ e $3$ e da $g$ sull'intero intervallo $[-3,3]$."}

Sul segmento con estremi fissi,
$$
u(t,x)=\sum_{n=1}^{\infty}
\left[a_n\cos(\omega_nt)+\frac{g_n}{\omega_n}\sin(\omega_nt)\right]
\sin\left(\frac{n\pi x}L\right),
\quad \omega_n=\frac{cn\pi}L,
$$
dove $a_n,g_n$ sono i coefficienti di Fourier di posizione e velocità. Per somme finite la formula dà una soluzione classica. Se la posizione iniziale appartiene a $H_0^1(0,L)$ e la velocità a $L^2(0,L)$, la serie dà una soluzione di energia. Le somme parziali convergono in $H_0^1$ e le loro derivate temporali convergono in $L^2$, uniformemente su ogni intervallo compatto di tempi. Infatti l'energia di una coda modale si stima con la somma delle energie iniziali dei modi di quella coda, che tende a zero per Parseval. L'equazione si legge in senso debole come limite delle equazioni delle somme parziali.

L'energia $\dfrac12\int_0^L(u_t^2+c^2u_x^2)\,dx$ è costante per soluzioni classiche reali con estremi fissi.

:::dimostrazione
Sulla retta si usano le coordinate caratteristiche $\xi=x-ct$ e $\eta=x+ct$. La regola della catena dà $u_{tt}-c^2u_{xx}=-4c^2v_{\xi\eta}$, dove $v$ è la soluzione espressa nelle nuove coordinate. Poiché $v_{\xi\eta}=0$, la derivata rispetto a $\xi$ dipende solo da $\xi$. Integrando si ottiene la somma $F(\xi)+G(\eta)$. La posizione iniziale impone $F+G=f$. La velocità iniziale impone $-cF'+cG'=g$. Sommando e sottraendo le due relazioni per le derivate si ricavano $F'=\dfrac12 f'-\dfrac1{2c}g$ e $G'=\dfrac12 f'+\dfrac1{2c}g$. Si fanno partire le due primitive di $g$ dallo stesso punto. Le costanti residue hanno somma zero perché $F+G=f$. Resta l'integrale di $g$ fra i due estremi caratteristici.

Sul segmento, per ciascun modo spaziale di autovalore $\lambda_n$ il coefficiente temporale soddisfa l'equazione dell'oscillatore con pulsazione $c\sqrt{\lambda_n}$. Valutare il coefficiente e la sua derivata in zero fissa rispettivamente il fattore del coseno e quello del seno. Il bilancio dell'energia sul segmento si ottiene usando l'equazione e integrando per parti nello spazio.
:::
::::

:::esempio{titolo="Il contributo di una velocità iniziale non nulla"}
Con $f=0$, $g(x)=x$ e velocità di propagazione $c>0$, la formula di d'Alembert restituisce
$$
u(t,x)=\frac{(x+ct)^2-(x-ct)^2}{4c}=xt.
$$
Il risultato verifica $u_{tt}=c^2u_{xx}$ perché entrambe le derivate seconde sono nulle. Inoltre $u(0,x)=0$ e $u_t(0,x)=x$. Nell'espressione iniziale la divisione per $2c$ compensa la larghezza $2ct$ dell'intervallo. Più precisamente, l'integrale della velocità iniziale è la larghezza dell'intervallo moltiplicata per la sua media, qui uguale a $x$.
:::

:::esempio{titolo="Due profili che si propagano in versi opposti"}
Per $c=1$, il dato di posizione $f(x)=e^{-x^2}$ e velocità iniziale nulla, d'Alembert dà la media di $e^{-(x-t)^2}$ ed $e^{-(x+t)^2}$. La prima gaussiana è centrata in $t$ e la seconda in $-t$. Al crescere del tempo i centri delle due componenti si allontanano e ciascuna mantiene il proprio profilo. Nell'origine la somma pesata vale $e^{-t^2}$ e diminuisce per $t>0$.

::grafico{f="exp(-x^2);0.5*(exp(-(x-2)^2)+exp(-(x+2)^2))" xmin=-5 xmax=5 ymin=0 ymax=1.16 nomi="x,u" legenda="u(0,x);u(2,x)" titolo="Per le onde con $c=1$, posizione iniziale gaussiana e velocità iniziale nulla, al tempo $2$ il profilo è la semisomma di due gaussiane traslate in direzioni opposte."}

:::

:::osservazione
Sul segmento con estremi fissi, l'identità di conservazione dell'energia si ottiene derivando rispetto al tempo e integrando il termine $c^2\int u_xu_{xt}\,dx$ per parti in $x$. Il termine al bordo è zero perché $u_t=0$ nei punti in cui $u$ è fissata a zero per tutti i tempi. L'integrale restante cancella $\int u_tu_{tt}\,dx$ grazie all'equazione. Anche quando il modo attraversa la configurazione $u=0$, l'energia si conserva, perché in quell'istante è tutta nel termine che contiene $u_t$.
:::

:::esempio{titolo="Propagazione da un intervallo limitato"}
Se la posizione e la velocità iniziali sono nulle fuori da $[-a,a]$, la soluzione è nulla per $|x|>a+ct$ al tempo $t\ge0$. Infatti l'intero intervallo $[x-ct,x+ct]$ rimane a destra di $a$ quando $x>a+ct$ e a sinistra di $-a$ quando $x<-a-ct$. Nelle due regioni sia i valori di posizione agli estremi sia il contributo della velocità sono quindi nulli. Quando invece un intervallo intercetta il supporto di $g$ senza che i due estremi tocchino il supporto di $f$, la velocità può generare una soluzione diversa da zero anche se il contributo diretto della posizione è nullo.
:::

## Laplace e problemi di Dirichlet

::::teorema{#laplace-edp titolo="Equazione di Laplace e unicità"}
Una funzione $C^2$ è armonica se $\Delta u=0$. Su un dominio limitato, una funzione armonica reale, continua fino al bordo, ha massimo e minimo sulla chiusura pari al massimo e al minimo al bordo. Questo principio dà unicità per il problema di Dirichlet nella classe di tali funzioni.

Nel rettangolo $0<x<\pi$, $0<y<H$, con dato $\sin(nx)$ sul bordo superiore e zero sugli altri bordi, si fissi un intero $n\ge1$. La soluzione è
$$
u(x,y)=\frac{\sinh(ny)}{\sinh(nH)}\sin(nx).
$$
Infatti $u_{xx}=-n^2u$, $u_{yy}=n^2u$ e i valori al bordo coincidono con quelli prescritti. Nel disco unitario, il dato $\cos(n\theta)$, con $n$ intero positivo, dà $u(r,\theta)=r^n\cos(n\theta)$.

:::dimostrazione
Per il massimo si aggiunge a $u$ una piccola funzione quadratica che rende il laplaciano strettamente positivo. In dimensione $d$, il laplaciano di $u(x)+\varepsilon|x|^2$ vale $2d\varepsilon$. In un punto di massimo interno, le derivate seconde pure sarebbero tutte minori o uguali a zero, quindi anche la loro somma sarebbe minore o uguale a zero. Il massimo della funzione perturbata si trova dunque al bordo. Poiché il dominio è limitato, la perturbazione tende uniformemente a zero per $\varepsilon\downarrow0$. Si ottiene così il principio del massimo. Lo si applica a $-u$ per il minimo. La differenza di due soluzioni con gli stessi dati ha bordo nullo, quindi il massimo e il minimo della differenza valgono zero e le soluzioni coincidono.
:::
::::

:::esempio{titolo="Propagazione di un dato sinusoidale dal bordo"}
Nel rettangolo, le condizioni omogenee sui lati selezionano i modi sinusoidali. Il dato assegnato in alto seleziona il modo $X(x)=\sin(nx)$. L'equazione ellittica dà $Y''=n^2Y$. Il valore nullo sul lato inferiore seleziona $\sinh(ny)$; il valore assegnato in alto determina il fattore $\dfrac1{\sinh(nH)}$. Per due modi assegnati sul bordo superiore, ciascuno riceve il proprio fattore e le soluzioni si sommano per linearità. Fissato $0<y<H$, il rapporto $\dfrac{\sinh(ny)}{\sinh(nH)}$ decade esponenzialmente in $n$. Quindi le oscillazioni ad alta frequenza imposte al bordo superiore si avvertono soprattutto nelle sue vicinanze.

::grafico{f="sinh(x)/sinh(1);sinh(3*x)/sinh(3)" xmin=0 xmax=1 ymin=0 ymax=1.15 nomi="y,Y" punti="0,0,pieno;1,1,pieno" legenda="\dfrac{\sinh y}{\sinh 1};\dfrac{\sinh(3y)}{\sinh 3}" titolo="Nel rettangolo alto $1$, i fattori verticali del primo e del terzo modo valgono entrambi $1$ al bordo superiore. Il terzo si attenua più rapidamente scendendo verso l'interno."}

:::

:::esempio{titolo="Un dato al bordo del disco con due frequenze"}
Si assegni sul cerchio il dato $1+2\cos\theta-\sin(3\theta)$. Il termine costante si prolunga come funzione costante. In coordinate polari, per un modo non costante, il laplaciano contiene la derivata seconda radiale, il termine con la derivata radiale divisa per il raggio e la derivata seconda angolare divisa per il quadrato del raggio. Per un modo di ordine $n$, i tre termini si cancellano per il fattore radiale $r^n$. Nel caso assegnato si ottiene
$$
u(r,\theta)=1+2r\cos\theta-r^3\sin(3\theta).
$$
Il terzo modo è regolare anche all'origine, perché $r^3\sin(3\theta)$ è la parte immaginaria di $(x+iy)^3$, cioè $3x^2y-y^3$. La funzione risultante è armonica nel disco intero e assume il dato sul cerchio.
:::

## Equazione di Poisson e soluzioni deboli

:::definizione{#debole titolo="Derivata debole e spazio H¹"}
Siano $\Omega$ un aperto di $\mathbb R^d$ e $u\in L^1_{\mathrm{loc}}(\Omega)$. Una funzione $v\in L^1_{\mathrm{loc}}(\Omega)$ è la derivata debole $\partial_j u$ se
$$
\int_\Omega u\,\partial_j\varphi\,dx=-\int_\Omega v\varphi\,dx
\qquad\text{per ogni }\varphi\in C_c^\infty(\Omega).
$$
Lo spazio $H^1(\Omega)$ contiene funzioni $L^2$ con tutte le derivate prime deboli in $L^2$; la norma al quadrato è $\int(|u|^2+|\nabla u|^2)$. Lo spazio $H_0^1$ è la chiusura delle funzioni lisce a supporto compatto in questa norma. Per $-\,\Delta u=f$ con $f\in L^2(\Omega)$ e dato nullo al bordo, la formulazione debole cerca $u\in H_0^1(\Omega)$ tale che
$$
\int_\Omega\nabla u\cdot\nabla v\,dx=\int_\Omega fv\,dx
\qquad \text{per ogni }v\in H_0^1(\Omega).
$$
Si ottiene moltiplicando l'equazione per una funzione test e integrando per parti. In questa formulazione entrano soltanto le derivate prime di $u$ e della funzione test.
:::

:::esempio{titolo="Una funzione con derivata debole ma con uno spigolo"}
Per $u(x)=|x|$ su $(-1,1)$ si separa l'integrale in due tratti e si integra per parti su ciascuno. I termini esterni sono nulli per il supporto della funzione test. I termini in zero si annullano perché i valori laterali di $u$ coincidono. La derivata debole vale $-1$ a sinistra e $1$ a destra e appartiene a $L^2(-1,1)$. La funzione è dunque in $H^1(-1,1)$. Ripetendo il procedimento sulla derivata si ottiene un contributo concentrato in zero pari a due volte la valutazione della funzione test in zero, che non è rappresentabile da una funzione $L^2$. Di conseguenza $u$ non è in $H^2(-1,1)$.

::grafico{f="abs(x)" nomi="x,u" xmin=-1 xmax=1 ymin=0 ymax=1.16 punti="0,0,pieno" vettori="-0.85,0.85,-0.45,0.45,−1;0.45,0.45,0.85,0.85,+1" titolo="La pendenza debole di $|x|$ vale $-1$ a sinistra e $1$ a destra. Il singolo punto in cui manca la derivata classica non impedisce l'appartenenza a $H^1$."}

:::

:::attenzione
Un salto dei valori laterali produce un termine in più quando si integra per parti. Si consideri su $(-1,1)$ la funzione indicatrice dell'intervallo $(0,1)$. La sua derivata classica è zero sui due intervalli aperti separati da zero. Però, per una funzione test, si ottiene
$$
-\int_{-1}^{1}\mathbf1_{(0,1)}(x)\varphi'(x)\,dx=\varphi(0).
$$
Questa valutazione non può essere l'integrale del prodotto di $\varphi$ con una funzione in $L^2(-1,1)$. Infatti si possono scegliere funzioni test uguali a uno in zero, limitate da uno e con supporto che si restringe verso zero. La loro norma in $L^2$ tende a zero, quindi qualsiasi integrale contro una funzione di $L^2$ tenderebbe a zero per Cauchy-Schwarz. La valutazione in zero resta invece uno. L'indicatrice appartiene a $L^2$. Il termine di valutazione esclude che appartenga anche a $H^1$. Lo stesso argomento esclude una derivata seconda in $L^2$ per il valore assoluto, perché la sua derivata prima ha un salto di ampiezza due.
:::

## Esistenza e metodo dell'energia

::::teorema{#lax-milgram titolo="Lax-Milgram per Poisson"}
Su un Hilbert reale $H$, se una forma bilineare $a$ è continua e coerciva, cioè $|a(u,v)|\le C\|u\|\|v\|$ e $a(u,u)\ge\alpha\|u\|^2$ con $C,\alpha>0$ e per ogni $u,v\in H$, allora per ogni funzionale lineare continuo $\ell$ su $H$ esiste un unico $u\in H$ con $a(u,v)=\ell(v)$ per ogni $v\in H$.

Su un dominio limitato Lipschitz, la disuguaglianza di Poincaré rende $\|\nabla u\|_2$ una norma equivalente alla norma di $H^1$ su $H_0^1$. Per $f\in L^2$, la forma $a(u,v)=\int\nabla u\cdot\nabla v$ e il funzionale $\ell(v)=\int fv$ soddisfano le ipotesi. Quindi il problema debole di Poisson ha un'unica soluzione, che minimizza l'energia $\dfrac{1}{2}\int|\nabla u|^2-\int fu$.

:::dimostrazione
La rappresentazione di Riesz trasforma la forma bilineare in un operatore su $H$. Per ogni $w\in H$, il funzionale $v\mapsto a(w,v)$ è continuo, quindi esiste un unico $Tw\in H$ con $(Tw,v)_H=a(w,v)$ per ogni $v$. Per unicità del rappresentante, $T$ è lineare. La continuità della forma dà $\|Tw\|\le C\|w\|$, mentre la coercività e Cauchy-Schwarz danno
$$
\alpha\|w\|^2\le (Tw,w)_H\le\|Tw\|\|w\|.
$$
Di conseguenza $\|Tw\|\ge\alpha\|w\|$. La stima implica che $T$ è iniettivo e ha immagine chiusa. Infatti, se $Tw_n$ converge, allora $w_n$ è di Cauchy e converge in $H$. Per continuità di $T$, il limite di $Tw_n$ appartiene all'immagine.

Se $z$ è ortogonale all'immagine, allora $(Tw,z)_H=0$ per ogni $w$. Scegliendo $w=z$ si ottiene $a(z,z)=0$, quindi $z=0$ per coercività. L'immagine è chiusa e il suo ortogonale è nullo, perciò coincide con $H$. Sia $g$ il rappresentante di Riesz di $\ell$. La suriettività e l'iniettività di $T$ danno un unico $u$ con $Tu=g$, cioè con $a(u,v)=\ell(v)$ per ogni $v\in H$.

Per Poisson si applica il risultato a $H_0^1$, che è completo, con la forma simmetrica del gradiente. Cauchy-Schwarz e Poincaré danno la continuità di $a$ e $\ell$ e la coercività di $a$. Per ogni $w\in H_0^1$, sviluppando $J(u+w)-J(u)$ si ottiene
$$
\begin{aligned}
J(u+w)-J(u)&=a(u,w)-\ell(w)+\frac{1}{2}a(w,w), \\
&=\frac{1}{2}a(w,w).
\end{aligned}
$$
L'uguaglianza si ottiene usando il problema debole con funzione test $w$. Il membro destro è positivo per $w\ne0$, quindi $u$ è l'unico minimizzatore.
:::
::::

:::esempio{titolo="Unicità e interpretazione del minimo di energia"}
Se $u_1$ e $u_2$ risolvono lo stesso problema debole, la loro differenza $w$ soddisfa $\int_\Omega \nabla w\cdot\nabla v=0$ per ogni $v\in H_0^1(\Omega)$. La scelta $v=w$ dà $\|\nabla w\|_2=0$. Poincaré implica quindi $\|w\|_2=0$, ossia le due soluzioni coincidono quasi ovunque. Per capire il minimo di energia, indichiamo con $J$ il funzionale e confrontiamo $u$ con $u+w$. Sviluppando il quadrato si trova
$$
J(u+w)-J(u)=\frac12\int_\Omega|\nabla w|^2\,dx,
$$
perché il termine lineare si annulla grazie all'equazione debole con $v=w$. Il minimo è stretto per ogni perturbazione non nulla in $H_0^1$. In una dimensione, per $f=2$ su $(0,1)$, la soluzione $u=x(1-x)$ annulla i valori ai bordi e soddisfa $-u''=2$. Per il profilo di prova $\alpha u$, l'energia è $\dfrac{\alpha^2}{6}-\dfrac\alpha3$. Il minimo si ha per $\alpha=1$, in accordo con il calcolo generale.

::grafico{f="x^2/6-x/3" nomi="α,J" xmin=-0.55 xmax=2.55 ymin=-0.23 ymax=0.28 punti="1,-0.166667,pieno" segmenti="1,-0.166667,1,0" titolo="Tra i profili $\alpha x(1-x)$ per Poisson con sorgente $2$, il funzionale ha minimo in $\alpha=1$, dove il suo valore è $-\dfrac16$."}

:::

:::osservazione
Su $(0,1)$ la coercività si può verificare direttamente. Per una funzione liscia a traccia nulla, il teorema fondamentale del calcolo dà $v(x)=\int_0^x v'(s)\,ds$. Per Cauchy-Schwarz, $|v(x)|^2\le x\int_0^1|v'|^2$. Integrando rispetto a $x$ si ottiene $\|v\|_2^2\le\dfrac12\|v'\|_2^2$. La disuguaglianza si estende a $H_0^1(0,1)$ per densità. Ne segue che la forma $\int u'v'$ controlla la norma completa, inclusa la parte che misura i valori della funzione. Se si eliminasse il vincolo di traccia nulla, le costanti non nulle avrebbero derivata zero. È quindi il vincolo al bordo a permettere l'uso della norma della sola derivata in questo problema.
:::

:::esempio{titolo="Un dato al bordo affine e la formulazione debole"}
Su $(0,1)$ si consideri $-u''=1$ con $u(0)=1$ e $u(1)=2$. Si sottrae la funzione affine $p(x)=1+x$, che assume i due valori assegnati. La differenza $w=u-p$ ha traccia nulla e soddisfa la stessa equazione perché $p''=0$. Nella formulazione debole, il termine $\int_0^1p'v'\,dx$ vale $v(1)-v(0)=0$ per le funzioni test di $H_0^1(0,1)$. Si può quindi applicare il risultato di esistenza e unicità alla differenza $w$. Risolvendo l'equazione del secondo ordine si trova $w=\dfrac12x(1-x)$ e si somma $p$ per recuperare $u$. Il ruolo della funzione affine è ridurre il problema alla classe delle funzioni a traccia nulla, che è uno spazio lineare adatto alla formulazione variazionale.
:::

:::esempio{titolo="Salto della sorgente e raccordo della soluzione"}
Si consideri una sorgente $f$ costante a tratti con un salto in $x=a$. Una soluzione debole di $-u''=f$ si può cercare integrando due volte su ciascun intervallo. Il raccordo di $u$ impedisce un salto nella funzione, mentre il raccordo di $u'$ elimina i contributi interni nell'integrazione per parti. Infatti i termini valutati nei due tratti hanno segni opposti e danno un coefficiente proporzionale alla differenza dei valori laterali di $u'$. Se questa differenza fosse diversa da zero, si otterrebbe una sorgente concentrata in $a$, oltre alla funzione a tratti assegnata. Il salto in $f$ permette quindi un salto della curvatura, mentre il profilo e la tangente restano continui.
:::
