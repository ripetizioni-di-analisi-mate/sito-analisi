---
titolo: Leggi di Newton e forze
sommario: I tre principi della dinamica, le forze che compaiono nei problemi di meccanica (peso, reazione vincolare, tensione, attrito, forza elastica) e il metodo per scrivere e risolvere l'equazione del moto di un corpo o di un sistema di corpi, anche nei moti circolari e nei sistemi di riferimento non inerziali.
---

## Forze e primo principio della dinamica

:::definizione{#forza titolo="Forza"}
Una **forza** è una grandezza vettoriale che descrive l'azione di un corpo su un altro, capace di modificarne lo stato di moto o di deformarlo. È individuata da modulo, direzione, verso e punto di applicazione. Nel Sistema Internazionale il modulo si misura in newton, con $1\,\mathrm{N} = 1\,\mathrm{kg\cdot m/s^2}$.

In questo argomento i corpi sono trattati come **punti materiali**, cioè se ne trascurano dimensioni e rotazioni e tutte le forze si considerano applicate nello stesso punto; il caso in cui conta il punto di applicazione si tratta nell'argomento sulla dinamica del corpo rigido.
:::

:::teorema{#principio-di-sovrapposizione titolo="Principio di sovrapposizione delle forze"}
Se su un punto materiale agiscono contemporaneamente le forze $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$, l'effetto sul moto è lo stesso che produrrebbe la sola forza
$$
\vec{R} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n ,
$$
detta **risultante**. È un principio sperimentale, e afferma che le forze si comportano come vettori e si sommano con la regola del parallelogramma. In componenti $R_x = \sum_i F_{ix}$ e $R_y = \sum_i F_{iy}$. Per esempio una forza di $3{,}0\,\mathrm{N}$ lungo $x$ e una di $4{,}0\,\mathrm{N}$ lungo $y$ hanno risultante di modulo $\sqrt{3{,}0^2 + 4{,}0^2}\,\mathrm{N} = 5{,}0\,\mathrm{N}$, che forma con l'asse $x$ l'angolo $\arctan \dfrac{4}{3} \approx 53^\circ$.

::grafico{vettori="0,0,3,0,F₁;0,0,0,4,F₂;0,0,3,4,R" segmenti="3,0,3,4;0,4,3,4" xmin=-0.8 xmax=4.6 ymin=-0.6 ymax=4.6 uguale=1 titolo="Le forze $\vec{F}_1$ di $3\,\mathrm{N}$ e $\vec{F}_2$ di $4\,\mathrm{N}$ hanno risultante $\vec{R}$ di modulo $5\,\mathrm{N}$, diagonale del parallelogramma"}

:::

:::definizione{#sistema-inerziale titolo="Sistema di riferimento inerziale"}
Un punto materiale si dice **isolato** se la risultante delle forze che agiscono su di esso è nulla. Un sistema di riferimento si dice **inerziale** se in esso ogni punto materiale isolato ha velocità costante, cioè resta in quiete oppure si muove di moto rettilineo uniforme.

Un sistema che trasla con velocità costante rispetto a un sistema inerziale è anch'esso inerziale, perché per le trasformazioni di Galileo le accelerazioni nei due sistemi coincidono. Un sistema solidale con il suolo è inerziale con buona approssimazione, poiché l'accelerazione dovuta alla rotazione terrestre è al massimo $0{,}034\,\mathrm{m/s^2}$, lo $0{,}3\%$ di $g$.
:::

:::teorema{#primo-principio titolo="Primo principio della dinamica"}
Esistono sistemi di riferimento inerziali. In un sistema inerziale un punto materiale soggetto a una risultante nulla resta in quiete, se era in quiete, oppure si muove di moto rettilineo uniforme.

È il **principio d'inerzia**, un principio della meccanica, cioè un'affermazione assunta come vera perché tutte le sue conseguenze sono confermate dagli esperimenti. Afferma che una forza serve a *cambiare* la velocità di un corpo, mentre per mantenerla costante basta che la risultante sia nulla; infatti un disco da hockey sul ghiaccio rallenta tanto meno quanto più l'attrito è piccolo. Il primo principio individua anche i sistemi in cui valgono il secondo e il terzo principio.
:::

## Secondo principio, massa e peso

:::teorema{#secondo-principio titolo="Secondo principio della dinamica"}
In un sistema di riferimento inerziale, un punto materiale di massa $m$ soggetto alla risultante $\vec{R}$ ha accelerazione $\vec{a}$ tale che
$$
\vec{R} = m\,\vec{a} .
$$
È un principio della meccanica, confermato dagli esperimenti. La **massa inerziale** $m$, che si misura in chilogrammi, esprime la resistenza del corpo a cambiare velocità, e infatti a parità di forza l'accelerazione è inversamente proporzionale alla massa. L'equazione vettoriale equivale a un'equazione per ogni componente, da soddisfare insieme:
$$
\begin{cases}
R_x = m\,a_x \\[4pt]
R_y = m\,a_y
\end{cases}
$$
Per esempio una cassa di $3{,}0\,\mathrm{kg}$ su un pavimento liscio, spinta da una forza orizzontale di $12\,\mathrm{N}$, ha accelerazione $a = \dfrac{12\,\mathrm{N}}{3{,}0\,\mathrm{kg}} = 4{,}0\,\mathrm{m/s^2}$ nella direzione e nel verso della forza.
:::

:::richiamo{titolo="Derivata e integrale nel moto"}
L'accelerazione è la derivata della velocità e la velocità è la derivata della posizione: $\vec{a} = \dfrac{d\vec{v}}{dt}$, $\vec{v} = \dfrac{d\vec{r}}{dt}$. Perciò il secondo principio è un'equazione differenziale per la legge oraria. Se la forza è costante, integrando due volte rispetto al tempo si ottiene il moto uniformemente accelerato, $x(t) = x_0 + v_0 t + \dfrac{1}{2} a t^2$. Per derivate e integrali si rimanda agli argomenti di Analisi 1 sulle derivate e sugli integrali, per il moto uniformemente accelerato all'argomento sulla cinematica in una dimensione.
:::

:::definizione{#peso titolo="Forza peso"}
In prossimità della superficie terrestre ogni corpo di massa $m$ è soggetto alla **forza peso**
$$
\vec{P} = m\,\vec{g} ,
$$
diretta verticalmente verso il basso, con $g = 9{,}81\,\mathrm{m/s^2}$. La massa è uno scalare e non dipende dal luogo; il peso è un vettore e dipende dal valore locale di $g$. Una persona di $70\,\mathrm{kg}$ pesa $687\,\mathrm{N}$ sulla Terra e $113\,\mathrm{N}$ sulla Luna, dove $g = 1{,}62\,\mathrm{m/s^2}$. Poiché il peso è proporzionale alla massa, in assenza di attrito dell'aria *tutti* i corpi cadono con la stessa accelerazione $\vec{g}$; l'origine del peso è oggetto dell'argomento sulla gravitazione.
:::

:::teorema{#equilibrio-del-punto titolo="Equilibrio del punto materiale"}
Un punto materiale in quiete in un sistema inerziale ha accelerazione nulla, quindi per il secondo principio la risultante delle forze è nulla. In componenti la condizione di equilibrio è
$$
\begin{cases}
R_x = 0 \\[4pt]
R_y = 0
\end{cases}
$$
Le due equazioni permettono di ricavare forze incognite, come tensioni e reazioni vincolari. Un corpo di $2{,}0\,\mathrm{kg}$ appeso in quiete a un filo verticale è soggetto al peso e alla tensione $T$ del filo, quindi l'equilibrio lungo la verticale dà $T - mg = 0$, cioè $T = 19{,}6\,\mathrm{N}$.
:::

## Terzo principio e reazioni vincolari

:::teorema{#terzo-principio titolo="Terzo principio della dinamica"}
Se un corpo $A$ esercita su un corpo $B$ la forza $\vec{F}_{AB}$, allora $B$ esercita su $A$ la forza
$$
\vec{F}_{BA} = -\,\vec{F}_{AB} ,
$$
con la stessa retta d'azione. È il **principio di azione e reazione**, un principio della meccanica confermato dagli esperimenti. Le due forze della coppia agiscono su corpi *diversi*, perciò nell'equazione del moto di un singolo corpo ne compare una sola. Una mela di $0{,}10\,\mathrm{kg}$ attira la Terra con una forza di $0{,}98\,\mathrm{N}$, uguale e opposta al suo peso; data la massa della Terra, $5{,}97 \cdot 10^{24}\,\mathrm{kg}$, l'accelerazione che ne risulta per la Terra è dell'ordine di $10^{-25}\,\mathrm{m/s^2}$.
:::

:::definizione{#reazione-vincolare titolo="Reazione vincolare"}
Un **vincolo** è un corpo che limita i movimenti possibili di un altro corpo, come un piano d'appoggio o una guida. La forza che il vincolo esercita è la **reazione vincolare**; il suo modulo è quello necessario a impedire i movimenti vietati e si ricava dalle equazioni del moto.

Un piano **liscio** esercita una reazione perpendicolare alla superficie, detta reazione normale e indicata con $\vec{N}$. Un piano d'appoggio può solo spingere, quindi $N \geq 0$; la condizione $N = 0$ indica il distacco del corpo dalla superficie. Per un libro fermo su un tavolo orizzontale l'equilibrio dà $N = mg$.
:::

:::attenzione
Il peso di un libro appoggiato sul tavolo e la reazione normale del tavolo *non* formano una coppia di azione e reazione, perché agiscono sullo stesso corpo. La reazione al peso del libro è la forza con cui il libro attira la Terra; la reazione a $\vec{N}$ è la forza con cui il libro preme sul tavolo. In un ascensore che accelera verso l'alto la reazione normale supera il peso, mentre le due forze di una coppia del terzo principio hanno sempre lo stesso modulo.
:::

:::definizione{#diagramma-di-corpo-libero titolo="Diagramma di corpo libero"}
Il **diagramma di corpo libero** è il disegno di un solo corpo, rappresentato come un punto, con tutte e sole le forze che *agiscono su di esso*. Le forze che il corpo esercita su altri corpi non compaiono.

Un carrello di $2{,}0\,\mathrm{kg}$ su un pavimento orizzontale liscio è spinto con una forza di $10\,\mathrm{N}$ inclinata di $30^\circ$ verso il basso. Lungo la verticale l'accelerazione è nulla, quindi $N - mg - F \sin 30^\circ = 0$ e $N = 19{,}6\,\mathrm{N} + 5{,}0\,\mathrm{N} = 24{,}6\,\mathrm{N}$; lungo l'orizzontale $F \cos 30^\circ = m a$, da cui $a = 4{,}33\,\mathrm{m/s^2}$.

::grafico{vettori="0,0,0,-1.96,P;-0.866,0.5,0,0,F;0,0,0,2.46,N" xmin=-3 xmax=3 ymin=-2.4 ymax=2.9 uguale=1 titolo="Diagramma di corpo libero del carrello: $N = mg + F \sin 30^\circ$, quindi la reazione normale supera il peso"}

:::

:::osservazione{#metodo-equazione-del-moto titolo="Come si imposta un problema di dinamica"}
La risoluzione di un problema di dinamica segue sempre gli stessi passi.

1. Si sceglie il corpo da studiare e un sistema di riferimento inerziale.
2. Si disegna il diagramma di corpo libero con tutte le forze che agiscono sul corpo.
3. Si scelgono gli assi, con un asse lungo la direzione dell'accelerazione quando questa è nota (lungo il piano d'appoggio, verso il centro di una traiettoria circolare).
4. Si scrive il secondo principio per componenti, con un'equazione per ogni asse.
5. Si risolve il sistema nelle incognite, prima in forma simbolica e poi con i valori numerici.

Con questi assi una componente dell'accelerazione è nulla, e la relativa equazione fornisce la reazione vincolare.
:::

## Fili ideali e carrucole

:::definizione{#tensione titolo="Tensione di un filo"}
Un filo teso esercita su ciascuno dei corpi a cui è attaccato una forza diretta lungo il filo, con verso che va dal corpo verso il filo, perché un filo può solo tirare. Il modulo di questa forza è la **tensione** $T$. Un **filo ideale** è inestensibile e di massa trascurabile. Poiché è inestensibile, due corpi collegati da un filo teso percorrono lungo il filo spazi uguali, quindi hanno velocità e accelerazioni di uguale modulo.
:::

::::teorema{#tensione-filo-ideale titolo="Tensione lungo un filo ideale"}
In un filo ideale teso la tensione ha lo stesso valore in ogni punto. In particolare i due estremi del filo esercitano sui corpi collegati forze di uguale modulo, anche quando il sistema accelera.

Grazie a questo risultato in un problema con un filo ideale compare una sola incognita $T$ per tutto il filo.

:::dimostrazione
Si considera un tratto di filo rettilineo di massa $m_f$, che accelera con accelerazione $a$ lungo il filo. Sul tratto agiscono le forze esercitate dal resto del sistema ai due estremi, di moduli $T_1$ e $T_2$ e versi opposti, quindi il secondo principio lungo il filo dà
$$
T_2 - T_1 = m_f\,a .
$$
Per un filo ideale $m_f = 0$, perciò $T_2 - T_1 = 0$ qualunque sia $a$. Poiché il tratto è arbitrario, la tensione è la **stessa** in ogni punto del filo.
:::
::::

:::definizione{#carrucola-ideale titolo="Carrucola ideale"}
Una **carrucola ideale** ha massa trascurabile e ruota senza attrito attorno al proprio asse. Un filo ideale che passa su una carrucola ideale cambia direzione e conserva il modulo della tensione; la giustificazione usa la seconda equazione cardinale, per la quale si rimanda all'argomento sulla dinamica del corpo rigido.

Una carrucola fissa cambia quindi la direzione della forza e ne lascia invariato il modulo. Con una carrucola mobile, a cui il corpo è appeso, la carrucola è sostenuta da *due* tratti dello stesso filo, quindi all'equilibrio $2T = mg$ e la forza necessaria si dimezza, $T = \dfrac{mg}{2}$.
:::

:::esempio{titolo="Corpo appeso a due fili"}
Un corpo di $4{,}0\,\mathrm{kg}$ è appeso in quiete a due fili ideali che formano entrambi un angolo di $30^\circ$ con l'orizzontale. Per simmetria i due fili hanno la stessa tensione $T$, le componenti orizzontali si annullano e lungo la verticale l'equilibrio dà
$$
2\,T \sin 30^\circ - mg = 0
\quad\Longrightarrow\quad
T = \frac{mg}{2 \sin 30^\circ} = mg = 39{,}2\,\mathrm{N} .
$$
Quanto più i fili sono vicini all'orizzontale, tanto più piccolo è il seno dell'angolo che formano con l'orizzontale e tanto più grande è la tensione.

::grafico{vettori="0,0,-3.4,1.96,T;0,0,3.4,1.96,T;0,0,0,-3.92,P" segmenti="-3.4,1.96,-4,2.31;3.4,1.96,4,2.31" etichette="-1.6,0.25,30°;1.1,0.25,30°" xmin=-4.4 xmax=4.4 ymin=-4.6 ymax=2.9 uguale=1 titolo="Le due tensioni hanno componenti verticali $T \sin 30^\circ$ che insieme equilibrano il peso"}

:::

## Attrito radente

:::definizione{#attrito-radente titolo="Forza di attrito radente"}
Quando due superfici scabre sono a contatto, ciascuna esercita sull'altra, oltre alla reazione normale $\vec{N}$, una forza parallela alla superficie di contatto: la **forza di attrito radente**. Si distinguono due situazioni.

- **Attrito statico**: le superfici non scorrono l'una sull'altra. La forza di attrito $\vec{f}_s$ si oppone allo scorrimento che le altre forze tenderebbero a produrre, e il suo modulo assume il valore necessario a mantenere il corpo fermo rispetto alla superficie.
- **Attrito dinamico**: le superfici scorrono. La forza di attrito $\vec{f}_d$ ha verso opposto alla velocità del corpo rispetto alla superficie.
:::

:::teorema{#leggi-dell-attrito titolo="Leggi dell'attrito radente"}
Il modulo della forza di attrito soddisfa le relazioni
$$
f_s \leq \mu_s\,N ,
\qquad
f_d = \mu_d\,N ,
$$
dove $\mu_s$ e $\mu_d$ sono i **coefficienti di attrito statico e dinamico**, numeri puri che dipendono dai materiali e dallo stato delle superfici, con in genere $\mu_d < \mu_s$. Sono leggi sperimentali approssimate; con buona precisione l'attrito non dipende dall'area di contatto né, per l'attrito dinamico, dalla velocità.

Le leggi permettono di stabilire se un corpo si muove. Se l'attrito statico necessario all'equilibrio non supera $\mu_s N$ il corpo resta fermo, altrimenti scivola e l'attrito vale $\mu_d N$. Una cassa di $5{,}0\,\mathrm{kg}$ su un pavimento orizzontale con $\mu_s = 0{,}40$ e $\mu_d = 0{,}30$ ha $N = mg = 49{,}1\,\mathrm{N}$, quindi l'attrito statico può arrivare a $\mu_s N = 19{,}6\,\mathrm{N}$. Una spinta orizzontale di $15\,\mathrm{N}$ non la sposta, e l'attrito statico vale $15\,\mathrm{N}$; una spinta di $25\,\mathrm{N}$ la mette in moto, l'attrito diventa $\mu_d N = 14{,}7\,\mathrm{N}$ e l'accelerazione è $\dfrac{25\,\mathrm{N} - 14{,}7\,\mathrm{N}}{5{,}0\,\mathrm{kg}} = 2{,}06\,\mathrm{m/s^2}$.

::grafico{f="x<=19.62?x:(x>19.7?14.715:NaN)" punti="19.62,19.62,pieno;19.62,14.715,vuoto" segmenti="19.62,0,19.62,14.715" etichette="20.2,20.6,μs·N;23,16.4,μd·N" nomi="F,f" xmin=0 xmax=30 ymin=0 ymax=24 titolo="Forza di attrito $f$ in funzione della spinta orizzontale $F$, in newton, per la cassa con $\mu_s N = 19{,}6\,\mathrm{N}$ e $\mu_d N = 14{,}7\,\mathrm{N}$"}

:::

:::osservazione{#attrito-come-forza-motrice titolo="L'attrito statico come forza motrice"}
L'attrito si oppone allo scorrimento *relativo* delle superfici, e per questo può avere il verso del moto. Una cassa appoggiata sul pianale di un camion che accelera viene trascinata in avanti dall'attrito statico del pianale; un'automobile accelera perché il suolo esercita sugli pneumatici, che spingono all'indietro sull'asfalto, una forza di attrito statico in avanti.
:::

## Piano inclinato

::::teorema{#piano-inclinato titolo="Corpo su un piano inclinato liscio"}
Un punto materiale di massa $m$ appoggiato su un piano inclinato liscio, di inclinazione $\alpha$ rispetto all'orizzontale, è soggetto soltanto al peso e alla reazione normale. Allora
$$
N = m g \cos\alpha ,
\qquad
a = g \sin\alpha ,
$$
con l'accelerazione diretta lungo il piano verso il basso. L'accelerazione non dipende dalla massa e varia fra $0$ (piano orizzontale) e $g$ (piano verticale, caduta libera). Su un piano liscio inclinato di $30^\circ$ ogni corpo scende con $a = 9{,}81 \cdot \dfrac{1}{2}\,\mathrm{m/s^2} = 4{,}91\,\mathrm{m/s^2}$.

::grafico{f="x>=0&&x<=6?3.4641-0.57735*x:NaN" vettori="2,2.309,2,0.309,P;2,2.309,2.866,3.809,N" segmenti="2,2.309,2.866,1.809;2,2.309,1.134,0.809;2,0.309,2.866,1.809;2,0.309,1.134,0.809" etichette="3.1,1.15,mg sin α;0.1,0.4,mg cos α;5.05,0.15,α" xmin=-0.6 xmax=6.6 ymin=-0.6 ymax=4.4 uguale=1 titolo="Il peso si scompone in $mg\sin\alpha$ lungo il piano e $mg\cos\alpha$ perpendicolare al piano, che la reazione normale equilibra"}

:::dimostrazione
Si sceglie l'asse $x$ lungo il piano, con verso positivo verso il basso, e l'asse $y$ perpendicolare al piano, con verso uscente. L'angolo tra il peso e la direzione perpendicolare al piano è uguale a $\alpha$, perché i due angoli hanno i lati rispettivamente perpendicolari; perciò le componenti del peso sono $P_x = mg\sin\alpha$ e $P_y = -mg\cos\alpha$. La reazione normale ha solo la componente $N_y = N$. Il corpo resta sul piano, quindi $a_y = 0$, e il secondo principio per componenti dà
$$
\begin{cases}
m g \sin\alpha = m\,a \\[4pt]
N - m g \cos\alpha = 0
\end{cases}
$$
da cui seguono le due formule.
:::
::::

::::teorema{#piano-inclinato-con-attrito titolo="Piano inclinato con attrito"}
Un punto materiale scivola lungo un piano inclinato di $\alpha$, con coefficiente di attrito dinamico $\mu_d$. Allora l'accelerazione lungo il piano ha modulo
$$
a_{\text{discesa}} = g\,(\sin\alpha - \mu_d \cos\alpha)
$$
se il corpo scende, ed è diretta verso il basso; ha modulo
$$
a_{\text{salita}} = g\,(\sin\alpha + \mu_d \cos\alpha)
$$
se il corpo sale, ed è anche in questo caso diretta verso il basso, quindi il corpo rallenta. Su un piano di $30^\circ$ con $\mu_d = 0{,}20$ un corpo scende con $a = 9{,}81\,(0{,}500 - 0{,}173)\,\mathrm{m/s^2} = 3{,}21\,\mathrm{m/s^2}$.

:::dimostrazione
Con gli assi del piano inclinato liscio, l'equazione lungo $y$ è la stessa e dà $N = mg\cos\alpha$, quindi l'attrito dinamico ha modulo $f_d = \mu_d N = \mu_d m g \cos\alpha$ ed è diretto lungo il piano, in verso opposto alla velocità. Se il corpo scende, l'attrito punta verso l'alto e l'equazione lungo l'asse $x$, orientato verso il basso, è $mg\sin\alpha - \mu_d mg\cos\alpha = m a$. Se il corpo sale, l'attrito punta verso il basso come la componente del peso, e la componente dell'accelerazione verso il basso soddisfa $mg\sin\alpha + \mu_d mg\cos\alpha = m a$. Dividendo per $m$ si ottengono le due formule.
:::
::::

::::teorema{#angolo-limite titolo="Angolo limite di attrito"}
Un corpo fermo su un piano inclinato di $\alpha$, con coefficiente di attrito statico $\mu_s$, resta in quiete se e solo se
$$
\tan\alpha \leq \mu_s .
$$
L'angolo $\alpha_{\lim} = \arctan \mu_s$ non dipende dalla massa e permette di misurare $\mu_s$, inclinando gradualmente il piano fino a quando il corpo comincia a muoversi. Se lo scivolamento inizia a $22^\circ$, allora $\mu_s = \tan 22^\circ = 0{,}40$.

:::dimostrazione
All'equilibrio l'accelerazione è nulla. Lungo la perpendicolare al piano si ha $N = mg\cos\alpha$; lungo il piano l'attrito statico deve equilibrare la componente del peso, quindi $f_s = mg\sin\alpha$. Per la legge dell'attrito statico l'equilibrio è possibile se e solo se $f_s \leq \mu_s N$, cioè $mg\sin\alpha \leq \mu_s\,mg\cos\alpha$. Poiché $\cos\alpha > 0$ per $0 \leq \alpha < 90^\circ$, dividendo per $mg\cos\alpha$ si ottiene $\tan\alpha \leq \mu_s$.
:::
::::

## Forza elastica

:::teorema{#legge-di-hooke titolo="Legge di Hooke"}
Una molla ideale, di massa trascurabile, allungata o compressa di $x$ rispetto alla lunghezza a riposo, esercita sul corpo attaccato al suo estremo la forza
$$
F_x = -k\,x ,
$$
dove l'asse $x$ è lungo la molla, con l'origine nella posizione dell'estremo a riposo. La costante $k > 0$ è la **costante elastica** e si misura in $\mathrm{N/m}$. È una legge sperimentale, valida finché la deformazione resta entro il limite di elasticità del materiale.

Il segno meno indica che la forza è di richiamo, perché la molla allungata tira verso la posizione di riposo e quella compressa spinge verso di essa. La legge è alla base del **dinamometro** e del moto armonico, per il quale si rimanda all'argomento sulle oscillazioni. Un corpo di $0{,}50\,\mathrm{kg}$ appeso a una molla con $k = 200\,\mathrm{N/m}$ è in equilibrio quando $kx = mg$, cioè con un allungamento $x = \dfrac{mg}{k} = 2{,}45\,\mathrm{cm}$.

::grafico{f="-2*x" nomi="x,F" etichette="0.15,-4.4,molla allungata: F < 0;-2.45,1.2,molla compressa: F > 0" xmin=-2.5 xmax=2.5 ymin=-5.2 ymax=5.2 titolo="La forza elastica $F_x = -kx$ è proporzionale alla deformazione e di verso opposto"}

:::

::::teorema{#molle-in-serie-e-parallelo titolo="Molle in serie e in parallelo"}
Due molle ideali di costanti $k_1$ e $k_2$ equivalgono a una sola molla di costante
$$
k_{\text{par}} = k_1 + k_2
$$
se sono collegate in parallelo, cioè affiancate e con lo stesso allungamento, e di costante $k_{\text{ser}}$ tale che
$$
\frac{1}{k_{\text{ser}}} = \frac{1}{k_1} + \frac{1}{k_2}
$$
se sono collegate in serie, cioè una dopo l'altra. Due molle uguali di costante $k$ in parallelo equivalgono a una molla di costante $2k$, in serie a una molla di costante $\dfrac{k}{2}$.

:::dimostrazione
In parallelo le due molle hanno lo stesso allungamento $x$ e la forza totale sul corpo è la somma delle due forze elastiche, $k_1 x + k_2 x = (k_1 + k_2)\,x$. In serie, poiché le molle hanno massa trascurabile, il ragionamento della tensione lungo un filo ideale mostra che entrambe sono tese dalla stessa forza $F$; quindi gli allungamenti sono $x_1 = \dfrac{F}{k_1}$ e $x_2 = \dfrac{F}{k_2}$, e l'allungamento totale è
$$
x = x_1 + x_2 = F \left( \frac{1}{k_1} + \frac{1}{k_2} \right) ,
$$
che è quello di una molla di costante $k_{\text{ser}}$.
:::
::::

## Dinamica del moto circolare

::::teorema{#forza-centripeta titolo="Forza centripeta"}
Un punto materiale di massa $m$ in moto circolare uniforme, su una circonferenza di raggio $r$ con velocità di modulo $v$ e velocità angolare $\omega$, è soggetto a una risultante diretta verso il centro, di modulo
$$
F_c = m\,\frac{v^2}{r} = m\,\omega^2 r .
$$
Nel moto circolare non uniforme la componente radiale della risultante ha ancora modulo $m\dfrac{v^2}{r}$, e in più la componente tangenziale vale $m\,a_t$.

Il nome **forza centripeta** indica la componente radiale della risultante, che è sempre fornita da forze già note: la tensione di un filo, l'attrito, la reazione vincolare, il peso. Un sasso di $0{,}20\,\mathrm{kg}$ che ruota su un tavolo liscio, legato a un filo di $0{,}80\,\mathrm{m}$, con velocità $10\,\mathrm{m/s}$, richiede una tensione $T = 0{,}20 \cdot \dfrac{10^2}{0{,}80}\,\mathrm{N} = 25\,\mathrm{N}$.

:::dimostrazione
Per la cinematica del moto circolare uniforme l'accelerazione è diretta verso il centro e ha modulo $a_c = \dfrac{v^2}{r} = \omega^2 r$. Il secondo principio $\vec{R} = m\,\vec{a}$ dice che la risultante ha la direzione e il verso dell'accelerazione, quindi punta verso il centro, e ha modulo $m\,a_c$. Nel moto non uniforme lo stesso ragionamento si applica componente per componente.
:::
::::

:::richiamo{titolo="Accelerazione centripeta"}
Nel moto circolare uniforme di raggio $r$ l'accelerazione è diretta verso il centro e ha modulo $a_c = \dfrac{v^2}{r} = \omega^2 r$, con $v = \omega r$. La dimostrazione si trova nell'argomento sul moto nel piano.
:::

::::teorema{#curva-piana titolo="Curva su strada orizzontale"}
Un'automobile percorre a velocità costante una curva circolare di raggio $r$ su una strada orizzontale, con coefficiente di attrito statico $\mu_s$ tra pneumatici e asfalto. La curva si percorre senza slittare se e solo se
$$
v \leq v_{\max} = \sqrt{\mu_s\,g\,r} .
$$
La velocità massima non dipende dalla massa dell'auto e cresce con il raggio e con l'aderenza. Con $r = 50\,\mathrm{m}$ e $\mu_s = 0{,}80$ (asfalto asciutto) si ottiene $v_{\max} = \sqrt{0{,}80 \cdot 9{,}81 \cdot 50}\,\mathrm{m/s} = 19{,}8\,\mathrm{m/s}$, circa $71\,\mathrm{km/h}$.

:::dimostrazione
Le forze sull'auto sono il peso, la reazione normale e l'attrito statico. Gli pneumatici non slittano lateralmente, quindi l'attrito è statico; poiché è l'unica forza orizzontale, è l'attrito a fornire la forza centripeta. Il secondo principio lungo la verticale e lungo la direzione radiale dà
$$
\begin{cases}
N - m g = 0 \\[4pt]
f_s = m\,\dfrac{v^2}{r}
\end{cases}
$$
La legge dell'attrito statico richiede $f_s \leq \mu_s N$, cioè $m\dfrac{v^2}{r} \leq \mu_s m g$, che equivale a $v^2 \leq \mu_s g r$.
:::
::::

::::teorema{#curva-sopraelevata titolo="Curva sopraelevata"}
Una curva circolare di raggio $r$ ha la carreggiata inclinata di un angolo $\alpha$ verso il centro. In assenza di attrito un veicolo la percorre senza scivolare verso l'interno o verso l'esterno se e solo se la sua velocità è
$$
v = \sqrt{g\,r \tan\alpha} .
$$
È la velocità di progetto della curva; a velocità diverse l'attrito fornisce la differenza. Con $r = 100\,\mathrm{m}$ e una velocità di progetto di $20\,\mathrm{m/s}$ serve $\tan\alpha = \dfrac{v^2}{g r} = 0{,}408$, cioè $\alpha = 22^\circ$.

::grafico{f="x>=-2.4&&x<=2?0.57735*x:NaN" vettori="0,0,0,-2,P;0,0,-1.155,2,N;0,0,-1.155,0,R" segmenti="-1.155,2,-1.155,0" etichette="-3.1,-0.45,verso il centro;1.2,0.25,α" xmin=-3.4 xmax=2.4 ymin=-2.6 ymax=2.6 uguale=1 titolo="Sulla curva sopraelevata la risultante di $\vec{P}$ e $\vec{N}$ è orizzontale e diretta verso il centro"}

:::dimostrazione
Le sole forze sono il peso e la reazione normale, che è perpendicolare alla carreggiata e quindi forma l'angolo $\alpha$ con la verticale. L'accelerazione è centripeta e orizzontale, quindi lungo la verticale la risultante è nulla e lungo l'orizzontale vale $m\dfrac{v^2}{r}$:
$$
\begin{cases}
N \cos\alpha = m g \\[4pt]
N \sin\alpha = m\,\dfrac{v^2}{r}
\end{cases}
$$
Dividendo la seconda equazione per la prima si ottiene $\tan\alpha = \dfrac{v^2}{g r}$, da cui la formula.
:::
::::

::::teorema{#giro-della-morte titolo="Giro della morte"}
Un punto materiale percorre l'interno di una guida circolare verticale di raggio $r$. Nel punto più alto della guida il corpo resta a contatto con la guida se e solo se
$$
v \geq \sqrt{g\,r} .
$$
Nel punto più basso la reazione della guida è $N = m g + m\dfrac{v^2}{r}$, maggiore del peso. Lo stesso risultato vale per un corpo che ruota in un piano verticale legato a un filo, con la tensione al posto della reazione normale. In un giro della morte di raggio $4{,}0\,\mathrm{m}$ la velocità nel punto più alto deve essere almeno $\sqrt{9{,}81 \cdot 4{,}0}\,\mathrm{m/s} = 6{,}26\,\mathrm{m/s}$. Il legame tra le velocità in basso e in alto si ricava nell'argomento sul lavoro e l'energia.

::grafico{curve="2*cos(t),2*sin(t),0,6.29" vettori="-0.3,2,-0.3,1,P;0.3,2,0.3,1.2,N;-0.3,-2,-0.3,-3,P;0.3,-2,0.3,-0.2,N" punti="0,0,pieno,C" xmin=-3.2 xmax=3.2 ymin=-3.3 ymax=2.6 uguale=1 titolo="Nel punto più alto $\vec{P}$ e $\vec{N}$ puntano entrambe verso il centro $C$; nel punto più basso $\vec{N}$ supera il peso"}

:::dimostrazione
Nel punto più alto il peso e la reazione della guida sono entrambi diretti verso il basso, cioè verso il centro. La loro somma fornisce la forza centripeta:
$$
N + m g = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
N = m\,\frac{v^2}{r} - m g .
$$
La guida può solo spingere, quindi il contatto c'è se e solo se $N \geq 0$, cioè $v^2 \geq g r$. Nel punto più basso il centro è in alto, quindi la componente verso il centro della risultante è $N - mg = m\dfrac{v^2}{r}$.
:::
::::

## Sistemi di corpi collegati

:::osservazione{#corpi-collegati titolo="Corpi collegati da un filo"}
Quando più corpi sono collegati da fili ideali, si scrive il secondo principio per *ogni* corpo separatamente, ciascuno lungo la propria direzione di moto. Le equazioni sono legate da due condizioni.

- Il filo è inestensibile, quindi tutti i corpi hanno accelerazione di uguale modulo $a$; conviene scegliere su ogni corpo il verso positivo concorde con il verso in cui il filo si muove.
- Il filo e le carrucole sono ideali, quindi la tensione $T$ è la stessa lungo tutto il filo.

Si ottiene un sistema con tante equazioni quante sono le incognite, di solito $a$ e $T$. Quando c'è attrito, il verso del moto va stabilito prima di scrivere le equazioni, perché da esso dipende il verso dell'attrito.
:::

:::osservazione{#blocchi-a-contatto titolo="Sistema trattato come un unico corpo"}
Se più corpi si muovono insieme con la stessa accelerazione, le forze che si scambiano sono forze interne e per il terzo principio si annullano a coppie nella somma. L'accelerazione comune è allora
$$
a = \frac{F_{\text{est}}}{m_{\text{tot}}} ,
$$
dove $F_{\text{est}}$ è la risultante delle sole forze esterne lungo la direzione del moto. Le forze interne si trovano poi applicando il secondo principio a un singolo corpo. Due blocchi a contatto su un piano liscio, di $2{,}0\,\mathrm{kg}$ e $1{,}0\,\mathrm{kg}$, spinti da una forza di $12\,\mathrm{N}$ applicata al primo, accelerano con $a = 4{,}0\,\mathrm{m/s^2}$; il secondo blocco è accelerato solo dalla spinta del primo, che vale quindi $1{,}0\,\mathrm{kg} \cdot 4{,}0\,\mathrm{m/s^2} = 4{,}0\,\mathrm{N}$.
:::

::::teorema{#macchina-di-atwood titolo="Macchina di Atwood"}
Due corpi di masse $m_1 > m_2$ sono appesi ai due estremi di un filo ideale che passa su una carrucola ideale fissa. Allora il corpo di massa $m_1$ scende e il sistema si muove con
$$
a = \frac{m_1 - m_2}{m_1 + m_2}\,g ,
\qquad
T = \frac{2\,m_1 m_2}{m_1 + m_2}\,g .
$$
I casi limite confermano le formule: con $m_1 = m_2$ si ha $a = 0$ e $T = m g$, cioè equilibrio; con $m_2 = 0$ si ha $a = g$ e $T = 0$, cioè caduta libera. Con $m_1 = 3{,}0\,\mathrm{kg}$ e $m_2 = 2{,}0\,\mathrm{kg}$ si ottiene $a = \dfrac{1}{5}\,g = 1{,}96\,\mathrm{m/s^2}$ e $T = 23{,}5\,\mathrm{N}$, un valore compreso tra i due pesi $19{,}6\,\mathrm{N}$ e $29{,}4\,\mathrm{N}$.

:::dimostrazione
Si orienta il moto nel verso in cui $m_1$ scende e $m_2$ sale. Su ciascun corpo agiscono il peso e la tensione, quindi
$$
\begin{cases}
m_1 g - T = m_1 a \\[4pt]
T - m_2 g = m_2 a
\end{cases}
$$
Sommando le due equazioni la tensione si elimina e si ottiene $(m_1 - m_2)\,g = (m_1 + m_2)\,a$, da cui $a$. Sostituendo nella seconda equazione,
$$
T = m_2\,(g + a) = m_2\,g\,\frac{(m_1 + m_2) + (m_1 - m_2)}{m_1 + m_2} = \frac{2\,m_1 m_2}{m_1 + m_2}\,g .
$$
:::
::::

::::teorema{#corpo-trainato-da-massa-appesa titolo="Corpo su un piano trainato da un corpo appeso"}
Un corpo di massa $m_1$ su un piano orizzontale, con coefficiente di attrito dinamico $\mu_d$, è collegato da un filo ideale, che passa su una carrucola ideale fissata al bordo del piano, a un corpo di massa $m_2$ appeso. Se il sistema è in moto, con $m_2$ che scende, allora
$$
a = \frac{m_2 - \mu_d\,m_1}{m_1 + m_2}\,g ,
\qquad
T = \frac{(1 + \mu_d)\,m_1 m_2}{m_1 + m_2}\,g .
$$
Partendo da fermo, il sistema si mette in moto se e solo se il peso appeso supera l'attrito statico massimo, cioè $m_2 > \mu_s m_1$. Con $m_1 = 4{,}0\,\mathrm{kg}$, $m_2 = 1{,}0\,\mathrm{kg}$ e $\mu_d = 0{,}10$ si ha $a = \dfrac{1{,}0 - 0{,}40}{5{,}0} \cdot 9{,}81\,\mathrm{m/s^2} = 1{,}18\,\mathrm{m/s^2}$ e $T = 8{,}63\,\mathrm{N}$.

::grafico{f="x>=0.4&&x<=5?3:NaN" curve="5.3+0.3*cos(t),2.7+0.3*sin(t),0,6.29" segmenti="2.5,3,5.3,3;5.6,2.7,5.6,1.3" punti="2.5,3,pieno;5.6,1.3,pieno,m₂" etichette="2.3,3.55,m₁" vettori="2.5,3,3.6,3,T;2.5,3,2,3,f;5.6,1.3,5.6,2.27,T;5.6,1.3,5.6,0.2,P₂" xmin=-0.4 xmax=6.6 ymin=-0.4 ymax=4 uguale=1 titolo="Lungo il filo sul corpo appoggiato agiscono la tensione e l'attrito, sul corpo appeso la tensione e il peso"}

:::dimostrazione
Lungo la verticale il corpo appoggiato ha accelerazione nulla, quindi $N_1 = m_1 g$ e l'attrito dinamico vale $\mu_d m_1 g$, diretto in verso opposto al moto. Si orienta il moto nel verso in cui $m_2$ scende; il secondo principio lungo il filo per i due corpi dà
$$
\begin{cases}
T - \mu_d\,m_1 g = m_1 a \\[4pt]
m_2 g - T = m_2 a
\end{cases}
$$
Sommando si ottiene $(m_2 - \mu_d m_1)\,g = (m_1 + m_2)\,a$, da cui $a$; dalla seconda equazione $T = m_2\,(g - a)$, che semplificata dà la formula della tensione.
:::
::::

## Sistemi non inerziali e forze apparenti

:::definizione{#forze-apparenti titolo="Forze apparenti"}
In un sistema di riferimento che accelera rispetto a un sistema inerziale il secondo principio, scritto con le sole forze dovute ad altri corpi, non è soddisfatto. Per un sistema che trasla con accelerazione $\vec{A}$ rispetto a un sistema inerziale, l'accelerazione $\vec{a}'$ misurata nel sistema accelerato soddisfa
$$
\vec{R} + \vec{F}_{\text{app}} = m\,\vec{a}' ,
\qquad
\vec{F}_{\text{app}} = -\,m\,\vec{A} .
$$
La **forza apparente** $\vec{F}_{\text{app}}$ non è esercitata da alcun corpo e quindi non ha una reazione secondo il terzo principio. La relazione segue dalle trasformazioni di Galileo, $\vec{a} = \vec{a}' + \vec{A}$, sostituite nel secondo principio $\vec{R} = m\,\vec{a}$.

Un pendolo appeso al soffitto di un vagone che accelera con $A = 2{,}0\,\mathrm{m/s^2}$ resta in quiete rispetto al vagone inclinato all'indietro. Nel vagone la tensione equilibra il peso e la forza apparente $mA$, quindi il filo forma con la verticale l'angolo $\theta$ con $\tan\theta = \dfrac{A}{g} = 0{,}20$, cioè $\theta = 11{,}3^\circ$.
:::

::::teorema{#peso-apparente titolo="Peso apparente in ascensore"}
Una persona di massa $m$ sta su una bilancia in un ascensore che ha accelerazione verticale $a$, positiva verso l'alto. Allora la bilancia segna
$$
N = m\,(g + a) .
$$
La lettura della bilancia è il **peso apparente**. I casi possibili sono i seguenti.

- $a > 0$ (ascensore che parte verso l'alto o frena in discesa): il peso apparente supera il peso.
- $a = 0$ (ascensore fermo o in moto uniforme): il peso apparente coincide con il peso.
- $a < 0$ (ascensore che parte verso il basso o frena in salita): il peso apparente è minore del peso, e per $a = -g$, in caduta libera, si annulla.

Una persona di $60\,\mathrm{kg}$ in un ascensore che accelera verso l'alto con $a = 1{,}5\,\mathrm{m/s^2}$ legge $N = 60 \cdot 11{,}31\,\mathrm{N} = 679\,\mathrm{N}$; una bilancia tarata in chilogrammi indicherebbe $69\,\mathrm{kg}$.

:::dimostrazione
Nel sistema inerziale del palazzo le forze sulla persona sono il peso e la reazione $N$ della bilancia, che per il terzo principio è uguale in modulo alla forza con cui la persona preme sulla bilancia, cioè alla lettura. Il secondo principio lungo la verticale dà $N - m g = m a$, da cui la tesi. Nel sistema dell'ascensore la persona è in quiete, e l'equilibrio tra $\vec{N}$, il peso e la forza apparente $-m\,a$ porta alla stessa equazione $N - mg - ma = 0$.
:::
::::

:::definizione{#forza-centrifuga titolo="Forza centrifuga"}
In un sistema di riferimento che ruota con velocità angolare costante $\omega$ rispetto a un sistema inerziale, su un corpo di massa $m$ in quiete rispetto al sistema rotante, a distanza $r$ dall'asse, agisce la forza apparente
$$
F_{\text{cf}} = m\,\omega^2 r ,
$$
diretta radialmente verso l'esterno, detta **forza centrifuga**. Per un corpo in moto rispetto al sistema rotante compare un'ulteriore forza apparente, la forza di Coriolis, che qui si omette.

Un oggetto appoggiato su una piattaforma che ruota con $\omega = 2{,}0\,\mathrm{rad/s}$, con $\mu_s = 0{,}50$, resta fermo rispetto alla piattaforma finché l'attrito statico equilibra la forza centrifuga, cioè finché $m\,\omega^2 r \leq \mu_s m g$, quindi per $r \leq \dfrac{\mu_s g}{\omega^2} = 1{,}23\,\mathrm{m}$.
:::
