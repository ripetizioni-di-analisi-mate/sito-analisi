---
titolo: Funzioni reali e modelli economici
sommario: Che cos'è una funzione reale, come se ne trovano dominio, grafico, inversa e composta, come si comportano le funzioni lineari, quadratiche, esponenziali e logaritmiche, e come descrivono domanda, offerta, costi, ricavi e profitti.
---

:::percorso
Si usano gli strumenti del Precorso: le disequazioni per trovare i domini, la retta e la parabola della geometria analitica, le proprietà di potenze, esponenziali e logaritmi. Qui si introduce il linguaggio delle funzioni reali e lo si applica ai primi modelli economici: domanda e offerta, equilibrio di mercato, costo, ricavo, profitto e punto di pareggio. La pendenza della retta diventerà la derivata, e con essa i costi e i ricavi marginali; il vertice della parabola è il primo problema di ottimizzazione, ripreso nello studio di funzione; l'esponenziale valutato negli anni interi è la capitalizzazione composta della matematica finanziaria.
:::

## Insiemi e intervalli

:::definizione{#insiemi titolo="Insiemi e operazioni"}
Un **insieme** è una collezione di oggetti, detti elementi; $x \in A$ significa che $x$ è un elemento di $A$, e $A \subseteq B$ significa che ogni elemento di $A$ appartiene anche a $B$. Per due insiemi $A$ e $B$:

- l'**unione** $A \cup B$ è formata dagli elementi che stanno in $A$ oppure in $B$;
- l'**intersezione** $A \cap B$ è formata dagli elementi che stanno sia in $A$ sia in $B$;
- la **differenza** $A \setminus B$ è formata dagli elementi di $A$ che non stanno in $B$.

Gli insiemi numerici usati nel corso sono $\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R}$, cioè i naturali, gli interi, i razionali e i reali. Le soluzioni di un sistema di disequazioni formano l'*intersezione* delle soluzioni delle singole disequazioni, perché devono soddisfarle tutte insieme. Per la teoria completa degli insiemi si rimanda all'argomento sugli insiemi di Analisi 1.
:::

:::definizione{#intervalli titolo="Intervalli"}
Un **intervallo** è un insieme di numeri reali compresi tra due estremi. Per $a < b$:
$$
[a, b] = \{x \in \mathbb{R} : a \leq x \leq b\},
\qquad
(a, b) = \{x \in \mathbb{R} : a < x < b\},
$$
e allo stesso modo $[a, b)$ e $(a, b]$ comprendono uno solo dei due estremi. La parentesi quadra indica che l'estremo appartiene all'intervallo, la tonda che non vi appartiene. Gli intervalli illimitati sono le semirette, come $[a, +\infty) = \{x \in \mathbb{R} : x \geq a\}$ e $(-\infty, b) = \{x \in \mathbb{R} : x < b\}$; i simboli $\pm\infty$ non sono numeri, e accanto a essi la parentesi è sempre tonda. Le quantità prodotte o vendute non sono negative, perciò nei modelli economici le variabili stanno di solito in $[0, +\infty)$.
:::

## Funzioni, dominio e grafico

Una funzione è una regola che a ogni valore di una grandezza associa uno e un solo valore di un'altra.

:::definizione{#funzione titolo="Funzione reale di variabile reale"}
Siano $A \subseteq \mathbb{R}$ e $B \subseteq \mathbb{R}$. Una **funzione** $f : A \to B$ associa a *ogni* $x \in A$ *uno e un solo* elemento $f(x) \in B$. L'insieme $A$ è il **dominio**, $x$ è la **variabile indipendente** e $f(x)$ è l'**immagine** di $x$. L'insieme di tutte le immagini,
$$
f(A) = \{f(x) : x \in A\},
$$
è l'**immagine** della funzione, ed è contenuto in $B$. Una funzione di domanda $q(p) = 100 - 4p$, definita per $0 \leq p \leq 25$, associa a ogni prezzo $p$ la quantità $q$ che i consumatori acquistano a quel prezzo; il dominio è $[0, 25]$, perché per $p > 25$ la quantità sarebbe negativa, e l'immagine è $[0, 100]$.
:::

:::definizione{#grafico titolo="Grafico di una funzione"}
Il **grafico** di $f : A \to \mathbb{R}$ è l'insieme dei punti del piano
$$
G_f = \{(x, f(x)) : x \in A\} .
$$
Poiché a ogni $x$ corrisponde un solo valore, ogni retta verticale $x = x_0$ incontra il grafico in *al più* un punto: in un punto se $x_0 \in A$, in nessuno se $x_0 \notin A$. Per questo una circonferenza non è il grafico di una funzione $y = f(x)$, mentre la sua semicirconferenza superiore lo è. Il punto $(x_0, y_0)$ appartiene al grafico *se e solo se* $x_0 \in A$ e $y_0 = f(x_0)$; con $f(x) = x^2 - 3$, il punto $(2, 1)$ appartiene al grafico perché $2^2 - 3 = 1$, il punto $(1, 1)$ no perché $1^2 - 3 = -2$.
:::

:::osservazione{#variabili-economiche titolo="Variabili e unità nei modelli economici"}
Nei modelli economici le variabili hanno un significato e un'unità: $q$ è una quantità (pezzi, tonnellate), $p$ un prezzo in euro per unità, $C$, $R$ e $\pi$ sono costi, ricavi e profitti in euro. Il dominio di un modello è dato dal significato delle variabili, oltre che dalla formula: una formula come $q = 100 - 4p$ ha senso per ogni $p$ reale, ma come funzione di domanda si usa solo dove prezzo e quantità sono non negativi. In economia il prezzo si riporta di solito sull'asse verticale e la quantità su quello orizzontale, anche quando il prezzo è la variabile indipendente; il grafico della domanda è allora quello della funzione inversa $p = 25 - \dfrac{q}{4}$.
:::

## Monotonia, inversa e composta

:::definizione{#monotonia titolo="Funzioni crescenti e decrescenti"}
Sia $f$ definita su un intervallo $I$. La funzione è **crescente** su $I$ se per ogni $x_1, x_2 \in I$
$$
x_1 < x_2 \implies f(x_1) < f(x_2),
$$
ed è **decrescente** se $x_1 < x_2$ implica $f(x_1) > f(x_2)$. Con le disuguaglianze larghe, $f(x_1) \leq f(x_2)$ e $f(x_1) \geq f(x_2)$, si parla di funzione **non decrescente** e **non crescente**. Una funzione di domanda è di norma decrescente, perché al crescere del prezzo la quantità acquistata diminuisce; una funzione di offerta è di norma crescente.
:::

:::definizione{#iniettiva titolo="Funzione iniettiva"}
Una funzione $f : A \to \mathbb{R}$ è **iniettiva** se valori diversi della variabile hanno immagini diverse:
$$
x_1 \neq x_2 \implies f(x_1) \neq f(x_2) .
$$
Nel grafico, ogni retta orizzontale lo incontra in *al più* un punto. Una funzione crescente o decrescente su un intervallo è iniettiva, perché due valori diversi $x_1 < x_2$ hanno immagini una minore dell'altra. La funzione $f(x) = x^2$ *non* è iniettiva su $\mathbb{R}$, perché $f(-2) = f(2) = 4$, mentre è iniettiva su $[0, +\infty)$, dove è crescente.
:::

:::definizione{#funzione-inversa titolo="Funzione inversa"}
Sia $f : A \to \mathbb{R}$ iniettiva, con immagine $f(A)$. La **funzione inversa** $f^{-1} : f(A) \to A$ associa a ogni $y \in f(A)$ l'unico $x \in A$ tale che $f(x) = y$:
$$
f^{-1}(y) = x \iff f(x) = y .
$$
Per trovarla si risolve l'equazione $y = f(x)$ rispetto a $x$. L'inversa fa il percorso opposto di $f$, perciò $f^{-1}(f(x)) = x$ per ogni $x \in A$ e $f(f^{-1}(y)) = y$ per ogni $y \in f(A)$. Il grafico di $f^{-1}$, con la variabile di nuovo sull'asse orizzontale, è il simmetrico del grafico di $f$ rispetto alla retta $y = x$, perché il punto $(x, y)$ sta sul grafico di $f$ esattamente quando $(y, x)$ sta sul grafico di $f^{-1}$.
:::

:::esempio{titolo="Domanda e domanda inversa"}
La domanda $q = 100 - 4p$, per $0 \leq p \leq 25$, è decrescente e quindi iniettiva. Risolvendo rispetto a $p$ si ottiene $4p = 100 - q$, cioè
$$
p = 25 - \frac{q}{4}, \qquad 0 \leq q \leq 100 .
$$
È la **domanda inversa**: dice a quale prezzo si vende la quantità $q$. Per esempio, per vendere $60$ unità il prezzo deve essere $25 - 15 = 10$ euro. Dominio e immagine si scambiano: il dominio della domanda inversa, $[0, 100]$, è l'immagine della domanda.
:::

:::definizione{#funzione-composta titolo="Funzione composta"}
Siano $f : A \to \mathbb{R}$ e $g : B \to \mathbb{R}$, e sia $x \in A$ tale che $f(x) \in B$. La **funzione composta** $g \circ f$ applica prima $f$ e poi $g$:
$$
(g \circ f)(x) = g(f(x)) .
$$
Il suo dominio è formato dagli $x \in A$ per cui $f(x)$ sta nel dominio di $g$. L'ordine conta: con $f(x) = x + 1$ e $g(x) = x^2$ si ha $g(f(x)) = (x + 1)^2$ e $f(g(x)) = x^2 + 1$, che sono funzioni diverse. Nei modelli economici la composizione collega grandezze in catena: se la produzione dipende dalle ore di lavoro, $q = h(L)$, e il costo dipende dalla produzione, $C = C(q)$, allora il costo in funzione delle ore è $C(h(L))$.
:::

## Funzioni lineari

:::definizione{#funzione-lineare titolo="Funzione lineare e pendenza"}
Una funzione **lineare** (più precisamente affine) è una funzione della forma
$$
f(x) = m x + k, \qquad m, k \in \mathbb{R},
$$
e il suo grafico è una retta. Il numero $k = f(0)$ è l'**intercetta**, cioè l'ordinata del punto in cui la retta taglia l'asse verticale. Il numero $m$ è la **pendenza**: per due valori qualsiasi $x_1 \neq x_2$
$$
\frac{f(x_2) - f(x_1)}{x_2 - x_1} = \frac{m x_2 - m x_1}{x_2 - x_1} = m ,
$$
quindi $m$ è la variazione di $f$ per ogni aumento di un'unità della variabile, la stessa ovunque. Se $m > 0$ la funzione è crescente, se $m < 0$ è decrescente, se $m = 0$ è costante. In un costo lineare $C(q) = 200 + 12q$ l'intercetta $200$ è il **costo fisso** e la pendenza $12$ è il costo di ogni unità in più.
:::

:::teorema{#retta-per-due-punti titolo="Retta per due punti"}
Siano $(x_1, y_1)$ e $(x_2, y_2)$ due punti con $x_1 \neq x_2$. Esiste una sola funzione lineare il cui grafico passa per entrambi:
$$
f(x) = y_1 + m\,(x - x_1),
\qquad
m = \frac{y_2 - y_1}{x_2 - x_1} .
$$
La pendenza è fissata dai due punti, perché deve essere uguale al rapporto tra la variazione di $y$ e la variazione di $x$; scelta $m$, la retta per $(x_1, y_1)$ con quella pendenza è una sola. Si verifica sostituendo che $f(x_1) = y_1$ e che $f(x_2) = y_1 + (y_2 - y_1) = y_2$. Se un'impresa produce $100$ unità con un costo di $1400$ euro e $150$ unità con un costo di $2000$ euro, e il costo è lineare, allora
$$
m = \frac{2000 - 1400}{150 - 100} = 12,
\qquad
C(q) = 1400 + 12\,(q - 100) = 200 + 12q ,
$$
cioè il costo fisso è $200$ euro e ogni unità costa $12$ euro.
:::

## Funzioni quadratiche

:::teorema{#vertice-parabola titolo="Vertice della parabola"}
Sia $f(x) = a x^2 + b x + c$ con $a \neq 0$. Il grafico è una parabola con asse verticale e vertice nel punto
$$
x_V = -\frac{b}{2a},
\qquad
y_V = f(x_V) = c - \frac{b^2}{4a} .
$$

- Se $a > 0$ la parabola ha la concavità verso l'alto e $y_V$ è il **valore minimo** di $f$.
- Se $a < 0$ la parabola ha la concavità verso il basso e $y_V$ è il **valore massimo** di $f$.

Le formule seguono dal completamento del quadrato:
$$
\begin{aligned}
a x^2 + b x + c
&= a \left( x^2 + \frac{b}{a}\,x \right) + c \\[6pt]
&= a \left( x + \frac{b}{2a} \right)^2 - \frac{b^2}{4a} + c .
\end{aligned}
$$
Il quadrato $\left( x + \dfrac{b}{2a} \right)^2$ è non negativo e si annulla *solo* per $x = -\dfrac{b}{2a}$; perciò per $a > 0$ il valore $c - \dfrac{b^2}{4a}$ è il più piccolo che $f$ assume, e per $a < 0$ è il più grande. Le funzioni quadratiche descrivono ricavi e profitti quando il prezzo dipende linearmente dalla quantità, e il vertice dà la quantità che li rende massimi.

::grafico{f="40*x-2*x^2-100+0*sqrt(x*(18-x))" punti="10,100,pieno;2.929,0,pieno;17.071,0,pieno" segmenti="10,0,10,100" xmin=-2 xmax=18 ymin=-125 ymax=125 nomi="q,π" titolo="Il profitto $\pi(q) = -2q^2 + 40q - 100$ ha il vertice in $(10, 100)$: la quantità $q = 10$ dà il profitto massimo, $100$ euro"}

:::

:::esempio{titolo="Zeri e segno di una funzione quadratica"}
Gli zeri di $f(x) = a x^2 + b x + c$ sono le soluzioni dell'equazione $a x^2 + b x + c = 0$, e dipendono dal discriminante $\Delta = b^2 - 4ac$.

- Se $\Delta > 0$ ci sono due zeri $x_1 < x_2$, e $f$ ha il segno di $a$ fuori dall'intervallo $[x_1, x_2]$ e il segno opposto dentro.
- Se $\Delta = 0$ c'è un solo zero, il vertice, e altrove $f$ ha il segno di $a$.
- Se $\Delta < 0$ non ci sono zeri e $f$ ha ovunque il segno di $a$.

Per il profitto $\pi(q) = -2q^2 + 40q - 100$ si ha $\Delta = 1600 - 800 = 800 > 0$, e gli zeri sono $q = 10 \pm \sqrt{50}$, cioè circa $2{,}93$ e $17{,}07$. Poiché $a = -2 < 0$, il profitto è positivo *solo* per le quantità comprese tra i due zeri.
:::

## Potenze, esponenziali e logaritmi

:::definizione{#esponenziale titolo="Funzione esponenziale"}
Sia $a > 0$ con $a \neq 1$. La **funzione esponenziale** di base $a$ è
$$
f(x) = a^{x}, \qquad x \in \mathbb{R} .
$$
È sempre positiva e vale $1$ in $x = 0$; è crescente se $a > 1$ e decrescente se $0 < a < 1$. Le proprietà delle potenze diventano $a^{x + y} = a^{x} a^{y}$ e $(a^{x})^{y} = a^{xy}$. La proprietà che caratterizza l'esponenziale è che a intervalli uguali della variabile corrispondono *rapporti* uguali dei valori: $\dfrac{a^{x + 1}}{a^{x}} = a$ per ogni $x$. Un capitale di $1000$ euro investito al $5\%$ annuo, con gli interessi che si sommano al capitale alla fine di ogni anno, dopo $t$ anni vale $1000 \cdot 1{,}05^{t}$ euro, perché ogni anno il capitale viene moltiplicato per $1{,}05$. La base più usata in analisi è il numero $e \approx 2{,}718$, che verrà definito come limite nell'argomento sui limiti.
:::

:::definizione{#logaritmo titolo="Logaritmo"}
Siano $a > 0$ con $a \neq 1$ e $y > 0$. Il **logaritmo** in base $a$ di $y$ è l'esponente da dare ad $a$ per ottenere $y$:
$$
\log_a y = x \iff a^{x} = y .
$$
La funzione $\log_a$, definita per $y > 0$, è l'inversa dell'esponenziale di base $a$; si scrive $\ln$ per il logaritmo in base $e$. Per $x, y > 0$ valgono
$$
\log_a (xy) = \log_a x + \log_a y,
\qquad
\log_a \frac{x}{y} = \log_a x - \log_a y,
\qquad
\log_a x^{k} = k \log_a x ,
$$
e la formula del cambio di base $\log_a x = \dfrac{\ln x}{\ln a}$. Il logaritmo serve a trovare un esponente incognito: il capitale dell'esempio precedente raddoppia quando $1{,}05^{t} = 2$, e prendendo il logaritmo dei due membri si ottiene
$$
t = \frac{\ln 2}{\ln 1{,}05} \approx 14{,}2 \text{ anni} .
$$
:::

:::osservazione{#crescita-lineare-esponenziale titolo="Crescita lineare e crescita esponenziale"}
Una funzione lineare cresce di una *quantità* fissa per ogni unità della variabile, un'esponenziale di base $a > 1$ cresce di una *percentuale* fissa. Per questo l'esponenziale finisce sempre per superare qualunque funzione lineare: $1000 \cdot 1{,}05^{t}$ e $1000 + 50\,t$ partono entrambe da $1000$ e valgono $1050$ dopo un anno, ma dopo $40$ anni la prima vale circa $7040$ euro e la seconda $3000$ euro. Le due leggi sono la capitalizzazione composta e la capitalizzazione semplice, trattate nell'argomento sulla matematica finanziaria.

::grafico{f="1000*1.05^x+0*sqrt(x);1000+50*x+0*sqrt(x)" xmin=-5 xmax=45 ymin=-1000 ymax=9000 nomi="t,M" legenda="M = 1000 \cdot 1{,}05^{t};M = 1000 + 50\,t" titolo="Capitale di $1000$ euro al $5\%$ annuo: crescita esponenziale (capitalizzazione composta) e crescita lineare (capitalizzazione semplice)"}

:::

## Dominio naturale

:::definizione{#dominio-naturale titolo="Dominio naturale"}
Quando una funzione è data solo con la sua formula, il suo **dominio naturale** è l'insieme dei numeri reali $x$ per cui la formula ha senso. Le condizioni da imporre sono:

- i denominatori sono diversi da zero;
- gli argomenti delle radici di indice pari sono maggiori o uguali a zero;
- gli argomenti dei logaritmi sono strettamente positivi.

Quando le condizioni sono più di una, devono valere tutte insieme, e il dominio è l'intersezione delle loro soluzioni. Le radici di indice dispari, gli esponenziali e i polinomi non pongono condizioni. Nei modelli economici al dominio naturale si aggiungono le condizioni che vengono dal significato delle variabili, come $q \geq 0$.
:::

:::esempio{titolo="Dominio con radice e logaritmo"}
Per $f(x) = \sqrt{x - 1} + \ln(5 - x)$ la radice richiede $x - 1 \geq 0$ e il logaritmo richiede $5 - x > 0$, e le due condizioni devono valere insieme:
$$
\begin{cases}
x - 1 \geq 0 \\[4pt]
5 - x > 0
\end{cases}
\iff
\begin{cases}
x \geq 1 \\[4pt]
x < 5
\end{cases}
$$
Quindi il dominio è l'intervallo $[1, 5)$. L'estremo $1$ appartiene al dominio, perché $\sqrt{0} = 0$; l'estremo $5$ no, perché $\ln 0$ non è definito.
:::

## Domanda, offerta ed equilibrio di mercato

:::definizione{#domanda-offerta titolo="Funzioni di domanda e di offerta"}
La **funzione di domanda** $q_d(p)$ dà la quantità di un bene che i consumatori acquistano al prezzo $p$; la **funzione di offerta** $q_s(p)$ dà la quantità che i produttori mettono in vendita allo stesso prezzo. Di norma la domanda è decrescente e l'offerta è crescente. Il prezzo minimo al di sopra del quale i produttori offrono il bene è quello in cui $q_s(p) = 0$; il prezzo massimo che i consumatori sono disposti a pagare è quello in cui $q_d(p) = 0$.
:::

:::definizione{#equilibrio-di-mercato titolo="Equilibrio di mercato"}
Il mercato è in **equilibrio** al prezzo $p^*$ per cui la quantità domandata è uguale alla quantità offerta:
$$
q_d(p^*) = q_s(p^*) ,
$$
e la **quantità di equilibrio** è $q^* = q_d(p^*) = q_s(p^*)$. Nel grafico con la quantità in ascissa e il prezzo in ordinata, il punto di equilibrio $(q^*, p^*)$ è l'intersezione delle curve di domanda e di offerta. Per un prezzo maggiore di $p^*$ l'offerta supera la domanda (eccesso di offerta), per un prezzo minore la domanda supera l'offerta (eccesso di domanda).
:::

:::esempio{titolo="Equilibrio con domanda e offerta lineari"}
La domanda inversa e l'offerta inversa di un bene sono $p = 50 - 2q$ e $p = 10 + 3q$, con $q \geq 0$. In equilibrio il prezzo è lo stesso sulle due curve, quindi
$$
50 - 2q = 10 + 3q
\iff
5q = 40
\iff
q^* = 8,
\qquad
p^* = 50 - 2 \cdot 8 = 34 .
$$
Il mercato si equilibra al prezzo di $34$ euro con $8$ unità scambiate. Come controllo, sull'offerta $10 + 3 \cdot 8 = 34$. Al prezzo di $40$ euro la domanda è $q = \dfrac{50 - 40}{2} = 5$ e l'offerta è $q = \dfrac{40 - 10}{3} = 10$, quindi c'è un eccesso di offerta di $5$ unità.

::grafico{f="50-2*x+0*sqrt(x*(25-x));10+3*x+0*sqrt(x)" punti="8,34,pieno" segmenti="8,0,8,34;0,34,8,34;5,40,10,40" xmin=-2 xmax=18 ymin=-10 ymax=90 nomi="q,p" legenda="p = 50 - 2q;p = 10 + 3q" titolo="Domanda e offerta si intersecano nel punto di equilibrio $(8, 34)$; al prezzo $40$ il segmento orizzontale tra le due curve è l'eccesso di offerta, $10 - 5 = 5$ unità"}

:::

## Costo, ricavo e profitto

:::definizione{#costo-ricavo-profitto titolo="Costo, ricavo e profitto"}
Per un'impresa che produce e vende la quantità $q$:

- il **costo totale** $C(q)$ è la somma del **costo fisso** $C(0)$, che non dipende da $q$, e del **costo variabile** $C(q) - C(0)$;
- il **ricavo** è $R(q) = p\,q$, dove $p$ è il prezzo unitario, costante in concorrenza perfetta oppure dato dalla domanda inversa $p(q)$;
- il **profitto** è la differenza $\pi(q) = R(q) - C(q)$.

Con il prezzo costante $p = 20$ e il costo $C(q) = 200 + 12q$, il profitto è $\pi(q) = 20q - 200 - 12q = 8q - 200$, e ogni unità venduta porta $8$ euro di margine. Con la domanda inversa $p = 50 - 2q$ il ricavo è $R(q) = (50 - 2q)\,q = 50q - 2q^2$, una funzione quadratica.
:::

:::definizione{#punto-di-pareggio titolo="Punto di pareggio"}
Il **punto di pareggio** (*break-even point*) è la quantità $q_0$ per cui il ricavo copre esattamente il costo:
$$
R(q_0) = C(q_0), \qquad \text{cioè} \qquad \pi(q_0) = 0 .
$$
Con prezzo costante $p$ e costo lineare $C(q) = F + c\,q$, con $F$ costo fisso e $c$ costo unitario variabile, e con $p > c$, l'equazione $p\,q = F + c\,q$ dà
$$
q_0 = \frac{F}{p - c} .
$$
Il denominatore $p - c$ è il margine di ogni unità, e il pareggio si raggiunge quando la somma dei margini copre il costo fisso. Con $F = 200$, $p = 20$ e $c = 12$ si ha $q_0 = \dfrac{200}{8} = 25$: sotto le $25$ unità l'impresa è in perdita, sopra è in utile.

::grafico{f="20*x+0*sqrt(x);200+12*x+0*sqrt(x)" punti="25,500,pieno" segmenti="25,0,25,500" xmin=-5 xmax=45 ymin=-100 ymax=900 nomi="q,€" legenda="R = 20q;C = 200 + 12q" titolo="Ricavo e costo si incontrano nel punto di pareggio $q_0 = 25$, dove valgono entrambi $500$ euro"}

:::

:::definizione{#costo-medio titolo="Costo medio"}
Il **costo medio** (o unitario) è il costo totale diviso per la quantità prodotta:
$$
\bar{C}(q) = \frac{C(q)}{q}, \qquad q > 0 .
$$
Per un costo lineare $C(q) = F + c\,q$ si ha $\bar{C}(q) = \dfrac{F}{q} + c$: il costo fisso si ripartisce su più unità, e al crescere di $q$ il costo medio diminuisce e si avvicina al costo unitario variabile $c$ senza raggiungerlo. Con $C(q) = 200 + 12q$, il costo medio vale $32$ euro per $q = 10$ e $14$ euro per $q = 100$. Il comportamento per $q$ grande si descrive con i limiti, e il costo medio minimo di costi non lineari si trova con le derivate nello studio di funzione.
:::
