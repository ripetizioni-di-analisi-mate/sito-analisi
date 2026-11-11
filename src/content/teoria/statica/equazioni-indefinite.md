---
titolo: Equazioni indefinite di equilibrio della trave
sommario: Come l'equilibrio di un tratto infinitesimo di trave lega sforzo normale, taglio e momento flettente ai carichi distribuiti, e come queste relazioni servono a ricavare, disegnare e controllare i diagrammi.
---

## Carichi distribuiti e concio di trave

Nell'argomento sulle caratteristiche della sollecitazione $N$, $T$ e $M$ si ricavano sezione per sezione con l'equilibrio di una delle due parti della trave. Qui si scrive l'equilibrio di un tratto di lunghezza infinitesima, e se ne ottengono equazioni differenziali che legano le caratteristiche ai carichi.

:::richiamo{titolo="Convenzione di segno per N, T e M"}
Su una trave orizzontale, con l'asse $x$ verso destra, lo sforzo normale $N$ è positivo se di trazione, il taglio $T$ è positivo quando tende a far ruotare il concio in verso orario, il momento flettente $M$ è positivo quando tende le fibre inferiori. Sulla faccia di destra di un tratto di trave le caratteristiche positive sono quindi $N$ verso destra, $T$ verso il basso e $M$ antiorario; sulla faccia di sinistra hanno verso opposto. Si rimanda all'argomento sulle caratteristiche della sollecitazione.
:::

:::definizione{#carichi-distribuiti titolo="Carichi distribuiti lungo l'asse"}
Lungo una trave ad asse rettilineo possono agire tre tipi di azioni distribuite, assegnate come funzioni dell'ascissa $x$:

- il **carico trasversale** $q(x)$, in $\mathrm{kN/m}$, perpendicolare all'asse e positivo verso il basso;
- il **carico assiale** $p(x)$, in $\mathrm{kN/m}$, diretto lungo l'asse e positivo verso destra, cioè nel verso delle $x$ crescenti;
- la **coppia distribuita** $m(x)$, in $\mathrm{kN\,m/m}$, positiva in verso antiorario.

Su un tratto di lunghezza $dx$ agiscono quindi la forza $q\,dx$ verso il basso, la forza $p\,dx$ verso destra e la coppia $m\,dx$. Il peso proprio di una trave omogenea è un carico $q$ uniforme. La coppia distribuita compare quando un carico è applicato fuori dall'asse. Per esempio, un carico assiale $p$ distribuito sul lembo superiore, a distanza $e$ dall'asse, equivale allo stesso carico applicato sull'asse più la coppia distribuita $m = -p\,e$, oraria. In molti problemi $p$ e $m$ sono nulli, e resta soltanto $q$.
:::

:::definizione{#concio titolo="Concio di trave"}
Il **concio** è il tratto di trave compreso tra le sezioni di ascissa $x$ e $x + dx$. Su di esso agiscono i carichi distribuiti del tratto e, sulle due facce, le caratteristiche della sollecitazione trasmesse dalle parti adiacenti: $N$, $T$, $M$ sulla faccia di sinistra e $N + dN$, $T + dT$, $M + dM$ sulla faccia di destra. Il concio è in equilibrio perché la trave intera lo è, e le sue equazioni di equilibrio diventano, al limite per $dx \to 0$, le equazioni indefinite.

::struttura{nodi="S,0,0,-;D,3,0,-" aste="S-D" carichi="S,D,0.55,0.55,q(x)" forze="-1 0,-0.9,0,;0 0,0,0.9,;4 0,0.9,0,;3 0,0,-0.9," coppie="0 0,-1,M;3 0,1,M+dM" etichette="-1.05,0.3,N;-0.35,-0.75,T;4.05,0.3,N+dN;3.6,0.75,T+dT" quote="S,D,dx,1.2" riferimento=0 titolo="Concio di trave tra le sezioni di ascissa $x$ e $x+dx$, con le caratteristiche della sollecitazione positive"}

:::

## Equazioni indefinite di equilibrio

Si scrivono le tre equazioni cardinali per il concio e si divide per la sua lunghezza.

::::teorema{#equazioni-indefinite titolo="Equazioni indefinite di equilibrio"}
Sia una trave ad asse rettilineo orizzontale e sia $[a, b]$ un tratto in cui non sono applicate forze né coppie concentrate e in cui i carichi distribuiti $p$, $q$, $m$ sono funzioni continue. Allora $N$, $T$ e $M$ sono derivabili in $(a, b)$ e
$$
\frac{dN}{dx} = -p ,
\qquad
\frac{dT}{dx} = -q ,
\qquad
\frac{dM}{dx} = T - m .
$$
In assenza di coppie distribuite la terza equazione diventa $\dfrac{dM}{dx} = T$. Le equazioni si chiamano *indefinite* perché valgono in ogni punto del tratto. Servono a due cose: dai carichi si ottengono $N$, $T$ e $M$ per integrazione, e da diagrammi già tracciati si controllano pendenze e curvature. Per esempio, su un tratto con $q = 4\,\mathrm{kN/m}$ il taglio diminuisce di $4\,\mathrm{kN}$ per ogni metro percorso verso destra.

:::dimostrazione
Si scrive l'equilibrio del tratto compreso tra $x$ e $x + \Delta x$ e si fa tendere $\Delta x$ a zero. Sulla faccia di sinistra agiscono $N(x)$ verso sinistra, $T(x)$ verso l'alto e $M(x)$ in verso orario; sulla faccia di destra $N(x + \Delta x)$ verso destra, $T(x + \Delta x)$ verso il basso e $M(x + \Delta x)$ in verso antiorario. Le equazioni di traslazione orizzontale, di traslazione verticale e di rotazione attorno al baricentro della faccia di destra sono
$$
\begin{cases}
N(x + \Delta x) - N(x) + \displaystyle\int_x^{x + \Delta x} p(t)\,dt = 0 \\[10pt]
T(x) - T(x + \Delta x) - \displaystyle\int_x^{x + \Delta x} q(t)\,dt = 0 \\[10pt]
M(x + \Delta x) - M(x) - T(x)\,\Delta x + \displaystyle\int_x^{x + \Delta x} q(t)\,(x + \Delta x - t)\,dt + \displaystyle\int_x^{x + \Delta x} m(t)\,dt = 0
\end{cases}
$$
Nella terza equazione $T(x)$ è verticale e ha braccio $\Delta x$ rispetto al polo, quindi il suo momento è orario; il carico $q(t)\,dt$ ha braccio $x + \Delta x - t$ e momento antiorario. Le forze della faccia di destra passano per il polo e non danno momento.

Si divide ogni equazione per $\Delta x$. Per il teorema della media integrale, poiché $p$, $q$, $m$ sono continue, $\dfrac{1}{\Delta x}\displaystyle\int_x^{x + \Delta x} q(t)\,dt$ tende a $q(x)$ per $\Delta x \to 0$, e lo stesso vale per $p$ e $m$. Il termine con il braccio è al più $\max|q| \cdot \dfrac{\Delta x^2}{2}$ in valore assoluto, quindi diviso per $\Delta x$ tende a zero. Perciò i rapporti incrementali di $N$, $T$, $M$ hanno limite, e al limite si ottiene
$$
\frac{dN}{dx} + p = 0 ,
\qquad
-\frac{dT}{dx} - q = 0 ,
\qquad
\frac{dM}{dx} - T + m = 0 ,
$$
che sono le tre equazioni dell'enunciato.
:::
::::

:::teorema{#equazione-del-momento titolo="Equazione del secondo ordine per il momento"}
Nelle ipotesi delle equazioni indefinite, se le coppie distribuite sono nulle, o costanti, vale
$$
\frac{d^2M}{dx^2} = -q .
$$
Si ottiene derivando $\dfrac{dM}{dx} = T - m$ e sostituendo $\dfrac{dT}{dx} = -q$. Il momento si ricava allora dal carico con due integrazioni, e le due costanti si determinano con due condizioni su $M$. Con $q$ costante $M(x) = -\dfrac{q\,x^2}{2} + c_1 x + c_2$, e in una trave appoggiata agli estremi le condizioni $M(0) = 0$ e $M(L) = 0$ danno $c_2 = 0$ e $c_1 = \dfrac{qL}{2}$.
:::

:::richiamo{titolo="Teorema fondamentale del calcolo integrale"}
Sia $f$ continua su $[a, b]$ e sia $G$ una funzione con $G' = f$ su $[a, b]$. Allora
$$
\int_a^b f(x)\,dx = G(b) - G(a) .
$$
Si rimanda all'argomento sugli integrali di Analisi 1.
:::

:::teorema{#forma-integrale titolo="Forma integrale delle equazioni indefinite"}
Sia $[a, b]$ un tratto di trave senza forze né coppie concentrate e senza coppie distribuite. Allora
$$
N(b) - N(a) = -\int_a^b p\,dx ,
\qquad
T(b) - T(a) = -\int_a^b q\,dx ,
\qquad
M(b) - M(a) = \int_a^b T\,dx .
$$
Le relazioni seguono dalle equazioni indefinite per il teorema fondamentale del calcolo integrale. In parole, la variazione del taglio tra due sezioni è l'opposto della risultante del carico compreso fra di esse, e la variazione del momento è l'area, con segno, del diagramma del taglio. In una trave appoggiata di luce $L$ con carico uniforme $q$ il taglio vale $\dfrac{qL}{2}$ nell'appoggio di sinistra e si annulla in mezzeria; poiché $M(0) = 0$, il momento in mezzeria è l'area del triangolo, $\dfrac{1}{2} \cdot \dfrac{L}{2} \cdot \dfrac{qL}{2} = \dfrac{qL^2}{8}$.
:::

## Forze e coppie concentrate

Una forza concentrata è il limite di un carico distribuito su un tratto sempre più corto con risultante fissata. Nel punto in cui è applicata le caratteristiche della sollecitazione possono avere una discontinuità di prima specie.

::::teorema{#salti titolo="Salti in corrispondenza di forze e coppie concentrate"}
Nella sezione di ascissa $x_0$ siano applicati una forza verticale $F$, positiva verso il basso come $q$, una forza orizzontale $F_x$, positiva verso destra, e una coppia $\mathcal{M}$, positiva in verso antiorario. Indicati con $x_0^-$ e $x_0^+$ i limiti da sinistra e da destra, valgono
$$
N(x_0^+) - N(x_0^-) = -F_x ,
\qquad
T(x_0^+) - T(x_0^-) = -F ,
\qquad
M(x_0^+) - M(x_0^-) = -\mathcal{M} .
$$
Le caratteristiche non interessate da un'azione concentrata sono continue in $x_0$. Sotto una forza verticale il momento è continuo e il taglio ha un salto, sotto una coppia il taglio è continuo e il momento ha un salto. Le reazioni vincolari sono forze e coppie concentrate e producono salti dello stesso tipo. In una trave appoggiata la reazione $V_A$ dell'appoggio di sinistra è una forza verso l'alto, cioè $F = -V_A$, quindi il taglio passa da $0$ a $T(0^+) = V_A$.

:::dimostrazione
Si scrive l'equilibrio del tratto compreso tra $x_0 - \varepsilon$ e $x_0 + \varepsilon$, come nella dimostrazione delle equazioni indefinite, aggiungendo le azioni concentrate in $x_0$. La traslazione verticale dà
$$
T(x_0 - \varepsilon) - T(x_0 + \varepsilon) - F - \int_{x_0 - \varepsilon}^{x_0 + \varepsilon} q\,dt = 0 .
$$
Per $\varepsilon \to 0$ l'integrale tende a zero, perché $q$ è limitata, e si ottiene il salto del taglio. Allo stesso modo la traslazione orizzontale dà il salto di $N$. La rotazione attorno al baricentro della faccia di destra contiene $M(x_0 + \varepsilon) - M(x_0 - \varepsilon)$, la coppia $\mathcal{M}$, il momento di $T(x_0 - \varepsilon)$ con braccio $2\varepsilon$, il momento della forza $F$ con braccio $\varepsilon$ e gli integrali dei carichi distribuiti; tutti i termini tranne i primi due tendono a zero, perciò $M(x_0^+) - M(x_0^-) + \mathcal{M} = 0$.
:::
::::

:::osservazione{#punto-angoloso titolo="Punto angoloso del momento sotto una forza"}
Sotto una forza concentrata $F$ il momento è continuo, ma la sua derivata, che è il taglio, salta di $-F$. Il diagramma di $M$ ha quindi un **punto angoloso** e, con $F$ verso il basso, la pendenza diminuisce di $F$. In una trave appoggiata di luce $5\,\mathrm{m}$ con $F = 10\,\mathrm{kN}$ a $2\,\mathrm{m}$ dall'appoggio $A$ le reazioni sono $V_A = 6\,\mathrm{kN}$ e $V_B = 4\,\mathrm{kN}$; il taglio vale $6\,\mathrm{kN}$ a sinistra della forza e $-4\,\mathrm{kN}$ a destra. Il momento cresce con pendenza $6\,\mathrm{kN}$ fino a $M = 12\,\mathrm{kN\,m}$ sotto la forza, poi decresce con pendenza $-4\,\mathrm{kN}$ fino a zero in $B$.

::struttura{nodi="A,0,0;B,5,0" aste="A-B" vincoli="A,cerniera;B,carrello" forze="2 0,0,-1.2,F" diagramma="0,0,2,0,6*s;2,0,5,0,12-4*s" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$) con $F = 10\,\mathrm{kN}$: punto angoloso sotto la forza"}

:::

## Condizioni al contorno

Integrando le equazioni indefinite su un tratto compaiono costanti arbitrarie. Le condizioni che le determinano vengono dai vincoli e dalle azioni concentrate.

:::teorema{#condizioni-al-contorno titolo="Condizioni al contorno date dai vincoli"}
Agli estremi della trave e nelle cerniere interne le caratteristiche della sollecitazione soddisfano le condizioni seguenti, ottenute dalla regola dei salti con valori nulli fuori dalla trave.

- **Estremo libero** scarico: $N = 0$, $T = 0$, $M = 0$. Se nell'estremo destro $x = L$ agiscono una forza $F$ verso il basso e una coppia $\mathcal{M}$ antioraria, allora $T(L^-) = F$ e $M(L^-) = \mathcal{M}$; nell'estremo sinistro $x = 0$ si ha $T(0^+) = -F$ e $M(0^+) = -\mathcal{M}$.
- **Appoggio** di estremità (cerniera o carrello): $M = 0$, oppure $M = \mathcal{M}$ nell'estremo destro e $M = -\mathcal{M}$ nell'estremo sinistro se vi è applicata una coppia. Il taglio nell'appoggio è incognito e coincide con la reazione: $T(0^+) = V_A$ a sinistra, $T(L^-) = -V_B$ a destra. Un carrello con reazione verticale non trasmette forze orizzontali, quindi, se nell'estremo non è applicata una forza orizzontale, vale anche $N = 0$.
- **Incastro**: nessuna condizione, perché il vincolo trasmette qualsiasi $N$, $T$ e $M$; i valori nell'incastro danno le reazioni.
- **Cerniera interna** scarica: $M = 0$, perché la cerniera non trasmette momento.

Per una trave appoggiata in $x = 0$ e in $x = L$, senza coppie negli appoggi, le condizioni sul momento sono
$$
\begin{cases}
M(0) = 0 \\
M(L) = 0
\end{cases}
$$
e bastano a determinare le due costanti di integrazione dell'equazione $\dfrac{d^2M}{dx^2} = -q$. In una mensola le due condizioni si scrivono nell'estremo libero, sul taglio e sul momento.
:::

:::osservazione{#tratti-e-costanti titolo="Integrazione per tratti"}
Quando la trave porta forze o coppie concentrate, o un carico che cambia legge, si divide la trave in **tratti** con estremi nei punti in cui cambia il carico. In ogni tratto l'integrazione di $\dfrac{dT}{dx} = -q$ e di $\dfrac{dM}{dx} = T$ introduce due costanti. Le condizioni sono quelle al contorno e quelle di raccordo tra tratti adiacenti, cioè continuità oppure salto noto di $T$ e di $M$. Per una trave isostatica il numero di condizioni è uguale al numero di costanti, e le reazioni si leggono alla fine come salti del taglio negli appoggi. Una trave appoggiata con una forza in mezzeria ha due tratti e quattro costanti; le condizioni sono $M(0) = 0$, $M(L) = 0$, la continuità di $M$ sotto la forza e il salto $-F$ del taglio.
:::

:::esempio{titolo="Trave appoggiata con carico uniforme"}
Sia una trave di luce $L = 6\,\mathrm{m}$, con una cerniera in $A$ ($x = 0$), un carrello in $B$ ($x = 6\,\mathrm{m}$) e un carico uniforme $q = 4\,\mathrm{kN/m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" carichi="A,B,0.6,0.6,q" quote="A,B,6 m,1" titolo="Trave appoggiata con carico uniforme $q = 4\,\mathrm{kN/m}$"}

Integrando $\dfrac{dT}{dx} = -4$ e $\dfrac{dM}{dx} = T$ si ottiene
$$
T(x) = c_1 - 4x ,
\qquad
M(x) = c_2 + c_1 x - 2x^2 .
$$
Le condizioni $M(0) = 0$ e $M(6) = 0$ danno $c_2 = 0$ e $6c_1 - 72 = 0$, quindi $c_1 = 12\,\mathrm{kN}$ e
$$
T(x) = 12 - 4x ,
\qquad
M(x) = 12x - 2x^2 .
$$
Le reazioni sono $V_A = T(0) = 12\,\mathrm{kN}$ e $V_B = -T(6) = 12\,\mathrm{kN}$, entrambe verso l'alto. Il taglio si annulla in $x = 3\,\mathrm{m}$, dove il momento ha il massimo $M = 18\,\mathrm{kN\,m} = \dfrac{qL^2}{8}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,12-4*s" segni=1 titolo="Diagramma del taglio $T$ ($\mathrm{kN}$): retta di pendenza $-q$"}

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,12*s-2*s^2" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$): parabola con il massimo dove $T = 0$"}

:::

## Carichi uniformi e triangolari

Quando il carico di un tratto è un polinomio, le integrazioni si eseguono a mano e il grado delle curve è noto in anticipo.

:::teorema{#grado-delle-curve titolo="Grado dei diagrammi per carichi polinomiali"}
Sia $[a, b]$ un tratto senza azioni concentrate e senza coppie distribuite, in cui $q$ è un polinomio di grado $n$. Allora in $[a, b]$ il taglio è un polinomio di grado $n + 1$ e il momento un polinomio di grado $n + 2$. Il risultato segue dalle equazioni indefinite, perché ogni integrazione di un polinomio ne aumenta il grado di uno. I casi più frequenti sono tre.

- Tratto scarico ($q = 0$): $T$ costante, $M$ lineare.
- Carico uniforme: $T$ lineare, $M$ parabolico.
- Carico triangolare: $T$ parabolico, $M$ cubico.

Il grado dei diagrammi è perciò un primo controllo dei conti. Per esempio, in un tratto scarico il taglio ottenuto risulta costante, sotto un carico uniforme il momento risulta una parabola.
:::

:::esempio{titolo="Mensola con carico triangolare"}
Una mensola di luce $L$ è incastrata in $A$ ($x = 0$) e libera in $B$ ($x = L$); il carico vale $q_0$ nell'incastro e decresce linearmente fino a zero nell'estremo libero, $q(x) = q_0\left(1 - \dfrac{x}{L}\right)$. L'estremo libero è scarico, quindi le condizioni sono $T(L) = 0$ e $M(L) = 0$. Integrando da $x$ a $L$ si ottiene
$$
T(x) = \int_x^L q(t)\,dt = \frac{q_0\,(L - x)^2}{2L} ,
\qquad
M(x) = -\int_x^L T(t)\,dt = -\frac{q_0\,(L - x)^3}{6L} .
$$
Il momento è negativo, cioè tende le fibre superiori, e il suo valore assoluto è massimo nell'incastro, $M(0) = -\dfrac{q_0 L^2}{6}$. Per $q_0 = 6\,\mathrm{kN/m}$ e $L = 3\,\mathrm{m}$ si ha $M(0) = -9\,\mathrm{kN\,m}$; le reazioni sono $V_A = T(0) = \dfrac{q_0 L}{2} = 9\,\mathrm{kN}$, verso l'alto, e il momento reattivo $M_A = 9\,\mathrm{kN\,m}$, antiorario, perché sotto la coppia $M_A$ il momento salta da $0$ a $-M_A$.

::struttura{nodi="A,0,0;B,3,0" aste="A-B" vincoli="A,incastro,180" diagramma="0,0,3,0,-(3-s)^3/3" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$) della mensola con $q_0 = 6\,\mathrm{kN/m}$: cubica disegnata dalla parte delle fibre tese, sopra"}

:::

:::esempio{titolo="Trave appoggiata con carico triangolare"}
Sia una trave appoggiata di luce $L$ con carico $q(x) = \dfrac{q_0\,x}{L}$, nullo in $A$ e uguale a $q_0$ in $B$. Integrando due volte con $M(0) = 0$ si ha
$$
T(x) = c_1 - \frac{q_0\,x^2}{2L} ,
\qquad
M(x) = c_1 x - \frac{q_0\,x^3}{6L} ,
$$
e la condizione $M(L) = 0$ dà $c_1 = \dfrac{q_0 L}{6}$. Le reazioni sono $V_A = \dfrac{q_0 L}{6}$ e $V_B = -T(L) = \dfrac{q_0 L}{3}$. La risultante $\dfrac{q_0 L}{2}$ si ripartisce con il rapporto $1 : 2$, perché è applicata a due terzi della luce. Il taglio si annulla in $x = \dfrac{L}{\sqrt{3}} \approx 0{,}577\,L$, spostato verso l'estremo più caricato. Per $q_0 = 6\,\mathrm{kN/m}$ e $L = 6\,\mathrm{m}$ si ha $T(x) = 6 - \dfrac{x^2}{2}$, che si annulla in $x = 2\sqrt{3} \approx 3{,}46\,\mathrm{m}$.

::struttura{nodi="A,0,0;B,6,0" aste="A-B" vincoli="A,cerniera;B,carrello" diagramma="0,0,6,0,6-s^2/2" segni=1 titolo="Diagramma del taglio $T$ ($\mathrm{kN}$) con carico triangolare: parabola che si annulla in $x = 2\sqrt{3}\,\mathrm{m}$"}

:::

## Carichi trapezoidali, parabolici e sinusoidali

Le equazioni indefinite sono lineari nei carichi. Perciò il taglio e il momento prodotti da una somma di carichi sono la somma di quelli prodotti dai singoli carichi.

:::esempio{titolo="Carico trapezoidale"}
Un carico trapezoidale che vale $q_A$ in $A$ e $q_B$ in $B$ ha legge
$$
q(x) = q_A + \left(q_B - q_A\right)\frac{x}{L} ,
$$
ed è la somma di un carico uniforme $q_A$ e di un carico triangolare nullo in $A$ e uguale a $q_B - q_A$ in $B$. Su una trave appoggiata le reazioni sono quindi
$$
V_A = \frac{q_A L}{2} + \frac{(q_B - q_A)\,L}{6} = \frac{(2q_A + q_B)\,L}{6} ,
\qquad
V_B = \frac{(q_A + 2q_B)\,L}{6} .
$$
Il taglio è un polinomio di secondo grado e il punto in cui si annulla è la radice dell'equazione $V_A - q_A x - \dfrac{(q_B - q_A)\,x^2}{2L} = 0$ compresa tra $0$ e $L$. Con $q_A = q_B$ si ritrova il carico uniforme.
:::

:::esempio{titolo="Carico parabolico"}
Il carico $q(x) = \dfrac{4q_0\,x\,(L - x)}{L^2}$ è nullo negli estremi e vale $q_0$ in mezzeria, con risultante $\dfrac{2}{3}\,q_0 L$. Su una trave appoggiata l'integrazione con $M(0) = 0$ e $M(L) = 0$ dà
$$
T(x) = \frac{q_0 L}{3} - \frac{2q_0\,x^2}{L} + \frac{4q_0\,x^3}{3L^2} ,
\qquad
M(x) = \frac{q_0 L\,x}{3} - \frac{2q_0\,x^3}{3L} + \frac{q_0\,x^4}{3L^2} .
$$
Il taglio è di terzo grado e il momento di quarto. Per simmetria il taglio si annulla in mezzeria, dove il momento è massimo e vale $\dfrac{5\,q_0 L^2}{48}$.
:::

:::esempio{titolo="Carico sinusoidale"}
Il carico $q(x) = q_0 \sin\dfrac{\pi x}{L}$ su una trave appoggiata si integra con le primitive di seno e coseno:
$$
T(x) = \frac{q_0 L}{\pi}\cos\frac{\pi x}{L} + c_1 ,
\qquad
M(x) = \frac{q_0 L^2}{\pi^2}\sin\frac{\pi x}{L} + c_1 x + c_2 .
$$
Le condizioni $M(0) = 0$ e $M(L) = 0$ danno $c_2 = 0$ e $c_1 L = 0$, quindi $c_1 = 0$. Il momento ha la stessa forma del carico, con il massimo $\dfrac{q_0 L^2}{\pi^2}$ in mezzeria, e le reazioni valgono $\dfrac{q_0 L}{\pi}$. Un carico qualsiasi su una trave appoggiata si può sviluppare in serie di termini $\sin\dfrac{k\pi x}{L}$, e per ciascun termine il calcolo è identico a questo.
:::

## Momento flettente massimo

Il dimensionamento di una trave richiede il valore massimo di $|M|$. Le equazioni indefinite dicono dove cercarlo.

:::teorema{#momento-massimo titolo="Posizione del momento massimo"}
Sia $[a, b]$ un tratto senza azioni concentrate e senza coppie distribuite. Nei punti interni in cui $T = 0$ il momento è stazionario; se in un tale punto $q > 0$, il momento vi ha un massimo relativo, perché $\dfrac{d^2M}{dx^2} = -q < 0$. Su tutta la trave il massimo e il minimo di $M$ si trovano quindi fra tre tipi di sezioni:

- i punti interni ai tratti in cui $T = 0$;
- le sezioni in cui il taglio cambia segno con un salto, cioè sotto le forze concentrate e negli appoggi intermedi;
- gli estremi dei tratti, compresi gli estremi della trave e i punti in cui il momento salta per una coppia.

Il risultato segue da $\dfrac{dM}{dx} = T$ e dal teorema di Weierstrass applicato a $M$ su ogni tratto. Con coppie distribuite $\dfrac{dM}{dx} = T - m$, perciò i punti stazionari sono quelli in cui $T = m$. Il valore massimo si calcola sostituendo l'ascissa trovata nell'espressione di $M$, oppure con la forma integrale, come area del diagramma del taglio tra un estremo e quel punto. Nella trave appoggiata con carico triangolare $q(x) = \dfrac{q_0\,x}{L}$ il taglio si annulla in $x = \dfrac{L}{\sqrt{3}}$, e lì
$$
M_{\max} = \frac{q_0 L}{6} \cdot \frac{L}{\sqrt{3}} - \frac{q_0}{6L} \cdot \frac{L^3}{3\sqrt{3}} = \frac{q_0 L^2}{9\sqrt{3}} \approx 0{,}064\,q_0 L^2 .
$$
:::

:::attenzione
Il punto in cui il taglio si annulla individua un massimo relativo del momento, che può essere diverso dal massimo di $|M|$ sulla trave. In una mensola di luce $L$ con carico uniforme $q$, incastrata in $x = 0$, si ha $T(x) = q\,(L - x)$, che si annulla solo nell'estremo libero, dove $M = 0$; il valore massimo di $|M|$ è $\dfrac{qL^2}{2}$ ed è nell'incastro, all'estremo del tratto. Nelle travi con sbalzi il momento negativo sull'appoggio va confrontato con il massimo positivo della campata.
:::

## Disegno e controllo dei diagrammi

Le equazioni indefinite permettono di tracciare i diagrammi conoscendo pochi valori, e di controllare quelli ottenuti con l'equilibrio delle parti.

:::osservazione{#regole-dei-diagrammi titolo="Regole per tracciare i diagrammi di T e di M"}
Senza coppie distribuite, dalle equazioni indefinite, dalla regola dei salti e dalle condizioni al contorno seguono queste proprietà.

- La pendenza del diagramma del taglio è $-q$, quindi nei tratti scarichi $T$ è costante, sotto un carico uniforme è una retta che scende verso destra.
- La pendenza del diagramma del momento è $T$, perciò dove $T > 0$ il momento cresce verso destra, dove $T < 0$ decresce, dove $T = 0$ la tangente è orizzontale.
- La concavità del momento dipende dal carico, perché $\dfrac{d^2M}{dx^2} = -q$; perciò con $q > 0$ la funzione $M$ è concava. Poiché il diagramma si disegna dalla parte delle fibre tese, con i valori positivi sotto l'asse, la curva disegnata ha la concavità rivolta verso l'alto, cioè contro il carico.
- Sotto una forza concentrata $T$ salta di $-F$ e $M$ ha un punto angoloso; sotto una coppia $\mathcal{M}$ antioraria $M$ salta di $-\mathcal{M}$ e $T$ è continuo.
- Negli estremi liberi scarichi, negli appoggi di estremità e nelle cerniere interne il momento è nullo, salvo coppie applicate in quel punto.
- La variazione di $M$ tra due sezioni è l'area del diagramma del taglio fra di esse.
:::

:::esempio{titolo="Diagrammi di una trave con sbalzo"}
Una trave ha una cerniera in $A$ ($x = 0$), un carrello in $B$ ($x = 4\,\mathrm{m}$) e uno sbalzo fino all'estremo libero $C$ ($x = 6\,\mathrm{m}$), dove agisce la forza $F = 4\,\mathrm{kN}$ verso il basso.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" forze="C,0,-1.5,F" quote="A,B,4 m,1;B,C,2 m,1" titolo="Trave con sbalzo e forza $F = 4\,\mathrm{kN}$ nell'estremo libero"}

Non ci sono carichi distribuiti, quindi in ciascuno dei tratti $AB$ e $BC$ il taglio è costante e il momento lineare. Nell'estremo libero $T(6^-) = F = 4\,\mathrm{kN}$ e $M(6) = 0$; procedendo verso sinistra con pendenza $4\,\mathrm{kN}$ il momento in $B$ vale $M(4) = 0 - 4 \cdot 2 = -8\,\mathrm{kN\,m}$. In $A$ il momento è nullo, quindi sul tratto $AB$ il momento è la retta da $0$ a $-8\,\mathrm{kN\,m}$, con pendenza $T = -2\,\mathrm{kN}$. Il salto del taglio in $B$ è $4 - (-2) = 6\,\mathrm{kN}$, perciò $V_B = 6\,\mathrm{kN}$ verso l'alto, e $V_A = T(0^+) = -2\,\mathrm{kN}$, cioè $2\,\mathrm{kN}$ verso il basso. La rotazione attorno ad $A$ conferma il risultato: $6 \cdot 4 - 4 \cdot 6 = 0$.

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,4,0,-2;4,0,6,0,4" segni=1 titolo="Diagramma del taglio $T$ ($\mathrm{kN}$): costante in ogni tratto, salto di $6\,\mathrm{kN}$ in $B$"}

::struttura{nodi="A,0,0;B,4,0;C,6,0" aste="A-C" vincoli="A,cerniera;B,carrello" diagramma="0,0,4,0,-2*s;4,0,6,0,-8+4*s" verso=-1 titolo="Diagramma del momento flettente $M$ ($\mathrm{kN\,m}$): lineare in ogni tratto, dalla parte delle fibre superiori"}

:::
