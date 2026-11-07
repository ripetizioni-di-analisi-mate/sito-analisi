"""Testi originali del corso universitario di Statistica e probabilità."""
TEORIE = {
'dati-e-frequenze': r'''
## Popolazione, campione e unità statistiche

:::definizione{#popolazione titolo="Popolazione e campione"}
La **popolazione** è l'insieme delle unità su cui verte l'indagine; il **campione** è il sottoinsieme osservato. Una rilevazione censuaria osserva tutta la popolazione. Un parametro descrive la popolazione, mentre una statistica è una funzione dei dati campionari.

Per conoscere il tempo medio di viaggio degli iscritti a un ateneo, la popolazione comprende tutti gli iscritti e l'unità statistica è il singolo studente. La media calcolata su 80 intervistati è una statistica. L'errore campionario dipende dalla selezione delle unità; aumentare il numero di interviste non corregge automaticamente un campione distorto.
:::

## Caratteri e scale di misura

:::definizione{#caratteri titolo="Tipi di variabili"}
Un carattere è **qualitativo nominale** se le modalità non hanno un ordine, come il corso di laurea; è **qualitativo ordinale** se esiste un ordine, come un giudizio di soddisfazione. Un carattere quantitativo è discreto se assume valori in un insieme finito o numerabile, come il numero di esami, e continuo se il modello ammette tutti i valori di un intervallo, come una durata.

La codifica numerica di un corso di laurea non rende quantitativo il carattere. Per una scala a intervalli sono significative le differenze; per una scala a rapporti è significativo anche lo zero assoluto. Il rapporto tra temperature Celsius non misura un rapporto di energia termica.
:::

## Frequenze assolute e relative

:::definizione{#frequenze titolo="Distribuzione di frequenza"}
Se $n_i$ osservazioni assumono la modalità $x_i$, la frequenza assoluta è $n_i$ e quella relativa è $f_i=n_i/n$, dove $n$ è il numero totale di osservazioni. Quindi
$$
\sum_i n_i=n,\qquad f_i=\frac{n_i}{n},\qquad \sum_i f_i=1.
$$
La percentuale è $100f_i$. Se 18 studenti su 60 arrivano in treno, la frequenza relativa è $0{,}3$ e quella percentuale è $30\%$. Le frequenze relative consentono confronti tra campioni di ampiezza diversa.
:::

## Frequenze cumulate e funzione empirica

:::definizione{#cumulate titolo="Frequenze cumulate"}
Per modalità ordinate, la frequenza assoluta cumulata $N_i=\sum_{j\le i}n_j$ conta le osservazioni minori o uguali a $x_i$. La cumulata relativa è $F_i=N_i/n$. La **funzione di ripartizione empirica** è
$$
F_n(x)=\frac{1}{n}\sum_{j=1}^n\mathbf{1}_{\{x_j\le x\}}.
$$
È non decrescente e continua da destra. Per i dati $1,1,3,5$, $F_n(3)=3/4$; la proporzione strettamente maggiore di 3 è $1-F_n(3)=1/4$. La cumulazione richiede un ordine tra le modalità, quindi non è definita in modo naturale per colori o nazionalità.
:::

## Dati raggruppati in classi

:::definizione{#classi titolo="Classi e punti medi"}
Le classi sono intervalli disgiunti che comprendono tutte le osservazioni. Per la classe $[a_i,b_i)$, l'ampiezza è $h_i=b_i-a_i$ e il punto medio è $c_i=(a_i+b_i)/2$. Le convenzioni sugli estremi evitano di assegnare uno stesso dato a due classi.

Sostituire ogni osservazione con il punto medio della sua classe permette di stimare medie e varianze quando sono disponibili solo frequenze raggruppate; il risultato è generalmente un'approssimazione. Una classe aperta superiormente non ha un punto medio determinato senza un'ipotesi aggiuntiva.
:::

## Grafici e densità di frequenza

:::definizione{#istogramma titolo="Istogramma"}
Nell'istogramma l'area del rettangolo rappresenta la frequenza. Con frequenze relative l'altezza è
$$
d_i=\frac{f_i}{h_i},\qquad d_i h_i=f_i.
$$
Se una classe ha frequenza relativa $0{,}2$ e ampiezza 5, l'altezza vale $0{,}04$. Con ampiezze diverse, confrontare soltanto le altezze confonde densità e frequenza. Il diagramma a barre serve invece a confrontare modalità discrete o qualitative, con barre separate.
:::

## Tabelle a doppia entrata

:::definizione{#tabelle titolo="Frequenze congiunte e marginali"}
Una tabella a doppia entrata riporta $n_{ij}$, numero di unità con modalità $i$ del primo carattere e $j$ del secondo. Le somme $n_{i\cdot}=\sum_jn_{ij}$ e $n_{\cdot j}=\sum_i n_{ij}$ sono le frequenze marginali.

La frequenza relativa congiunta è $n_{ij}/n$. La proporzione della modalità $j$ all'interno della riga $i$ è invece $n_{ij}/n_{i\cdot}$, se $n_{i\cdot}>0$. Il denominatore identifica il gruppo a cui si riferisce la percentuale.
:::

## Selezione del campione e dati mancanti

:::attenzione{#campionamento titolo="Rappresentatività e selezione"}
Un campione casuale semplice senza reinserimento assegna la stessa probabilità a ogni sottoinsieme di ampiezza fissata. Le estrazioni sono dipendenti; l'approssimazione con osservazioni indipendenti può essere ragionevole se la frazione campionaria è piccola. Un campione stratificato seleziona unità entro gruppi definiti prima dell'estrazione.

Se rispondono soltanto gli studenti che frequentano una lezione mattutina, le frequenze descrivono i rispondenti. Estenderle a tutti gli iscritti richiede ipotesi sulla selezione. Per i dati mancanti si dichiara sempre il numero di osservazioni effettivamente usate nel denominatore.
:::
''',
'indici-descrittivi': r'''
## Media aritmetica e media ponderata

:::definizione{#media titolo="Media aritmetica"}
La **media** ripartisce in parti uguali la somma dei valori osservati. Per $n$ dati reali è
$$
\bar x=\frac{1}{n}\sum_{i=1}^n x_i.
$$
Con frequenze $n_j$ si usa $\bar x=\sum_j n_jx_j/n$. Con pesi positivi $w_j$ la media ponderata è $\sum_jw_jx_j/\sum_jw_j$. Se le medie di due gruppi sono 24 e 28 e i gruppi hanno 10 e 30 unità, la media complessiva è 27. La media semplice delle due medie sarebbe appropriata solo per gruppi della stessa ampiezza.
:::

## Mediana, moda e quantili

:::definizione{#quantili titolo="Mediana e quantili empirici"}
Ordinati i dati come $x_{(1)}\le\dots\le x_{(n)}$, la **mediana** è il valore centrale per $n$ dispari e la media dei due centrali per $n$ pari. Una moda è una modalità di frequenza massima; possono esserci più mode.

Per gli altri quantili empirici, in questo corso si usa, salvo diversa indicazione, $q_p=x_{(\lceil np\rceil)}$, con $0<p<1$. Per $q_{0{,}5}$ si mantiene la convenzione della mediana appena definita. Software e manuali possono usare interpolazioni diverse: gli esercizi sui quartili dichiarano la convenzione. Il primo e il terzo quartile corrispondono a $p=0{,}25$ e $p=0{,}75$.
:::

## Varianza descrittiva e varianza campionaria

:::definizione{#varianza titolo="Varianza e deviazione standard"}
La dispersione attorno alla media si misura attraverso gli scarti quadratici. La varianza descrittiva e la varianza campionaria corretta sono rispettivamente
$$
v=\frac{\sum_i(x_i-\bar x)^2}{n},\qquad
s^2=\frac{\sum_i(x_i-\bar x)^2}{n-1}\quad(n>1).
$$
Le radici quadrate sono le rispettive deviazioni standard. Per $1,3,5$, la media è 3, la somma degli scarti quadratici è 8, quindi $v=8/3$ e $s^2=4$. La varianza ha unità di misura al quadrato; la deviazione standard ha le unità dei dati.
:::

## Formule di calcolo e trasformazioni

::::teorema{#trasformazioni titolo="Scarti e trasformazioni affini"}
Per qualunque insieme di dati,
$$
\sum_i(x_i-\bar x)=0,\qquad
v=\frac{\sum_i x_i^2}{n}-\bar x^2.
$$
Se $y_i=a+bx_i$, allora $\bar y=a+b\bar x$, $v_y=b^2v_x$ e $s_y=|b|s_x$.

:::dimostrazione
Si espande $\sum_i(x_i-\bar x)^2=\sum_ix_i^2-2\bar x\sum_ix_i+n\bar x^2$ e si sostituisce $\sum_ix_i=n\bar x$. Per la trasformazione affine lo scarto è $y_i-\bar y=b(x_i-\bar x)$; elevando al quadrato si ottiene il fattore $b^2$.
:::
::::

## Confronti di dispersione

:::definizione{#dispersione titolo="Campo di variazione, IQR e coefficiente di variazione"}
Il campo di variazione è $\max x_i-\min x_i$. La distanza interquartile è $IQR=Q_3-Q_1$ e descrive l'ampiezza della metà centrale dei dati. Per misure su scala a rapporti con media positiva, il coefficiente di variazione è $CV=s/\bar x$, eventualmente espresso in percentuale.

Il CV confronta dispersioni relative quando le unità o le medie sono diverse; perde significato per scale con zero arbitrario o per medie vicine a zero. L'IQR e la mediana risentono meno di pochi valori estremi rispetto a media e deviazione standard.
:::

## Box plot e valori anomali

:::definizione{#boxplot titolo="Regola delle barriere"}
Un box plot rappresenta mediana e quartili. La regola di Tukey segnala come potenzialmente anomali i valori inferiori a $Q_1-1{,}5IQR$ o superiori a $Q_3+1{,}5IQR$. I baffi raggiungono le osservazioni più estreme comprese nelle barriere.

Una segnalazione richiede un controllo del dato e del contesto; non giustifica da sola la cancellazione dell'osservazione. La convenzione usata per i quartili può cambiare le barriere nei campioni piccoli.
:::

## Standardizzazione e asimmetria

:::definizione{#standardizzazione titolo="Punteggi standardizzati"}
Se $s>0$, il valore standardizzato di un'osservazione è $z_i=(x_i-\bar x)/s$. Esprime lo scarto dalla media in unità di deviazione standard. Per media 50 e deviazione standard 10, un valore 65 ha $z=1{,}5$.

Una coda lunga a destra può portare la media sopra la mediana; la sola differenza tra questi due indici non descrive completamente la forma. Standardizzare i dati non li rende normali. Per valutare la forma si usano anche istogramma, quantili e contesto della rilevazione.
:::
''',
'probabilita-e-combinatoria': r'''
## Spazio campionario ed eventi

:::definizione{#eventi titolo="Esperimento aleatorio"}
Lo **spazio campionario** $\Omega$ contiene tutti gli esiti del modello. Un evento è un insieme di esiti. $A\cap B$ significa che accadono entrambi, $A\cup B$ che accade almeno uno, $A^c$ che non accade $A$. Due eventi sono incompatibili se $A\cap B=\varnothing$.

Nel lancio di un dado, $\Omega=\{1,2,3,4,5,6\}$. Se $A=\{2,4,6\}$ e $B=\{4,5,6\}$, allora $A\cap B=\{4,6\}$. Il diagramma evidenzia l'intersezione.

::venn{zone="ab" titolo="Esiti comuni ad A e B"}
:::

## Assiomi e conseguenze

:::teorema{#assiomi titolo="Probabilità e additività"}
Una probabilità assegna agli eventi numeri non negativi, con $P(\Omega)=1$ e additività numerabile su eventi a due a due incompatibili. Ne seguono
$$
P(A^c)=1-P(A),\qquad
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$
Inoltre $A\subseteq B$ implica $P(A)\le P(B)$. Se $P(A)=0{,}4$, $P(B)=0{,}5$ e $P(A\cap B)=0{,}2$, la probabilità dell'unione è $0{,}7$. L'intersezione viene sottratta perché è stata contata due volte.
:::

## Modello equiprobabile

:::definizione{#equiprobabilita titolo="Probabilità classica"}
Se $\Omega$ è finito e ogni esito ha la stessa probabilità,
$$
P(A)=\frac{|A|}{|\Omega|}.
$$
Il conteggio richiede esiti elementari equiprobabili. Con due dadi regolari le 36 coppie ordinate sono equiprobabili, mentre le somme da 2 a 12 non lo sono: la somma 7 si realizza con 6 coppie e ha probabilità $1/6$.
:::

## Principio del prodotto e permutazioni

:::definizione{#permutazioni titolo="Conteggi ordinati"}
Se una scelta si svolge in stadi con $a_1,\dots,a_k$ possibilità per ciascuno stadio, indipendentemente dalle scelte precedenti in termini di numero di opzioni, il numero totale è $a_1\cdots a_k$. Le permutazioni di $n$ oggetti distinti sono $n!$.

Se tra $n$ oggetti vi sono gruppi indistinguibili di numerosità $n_1,\dots,n_r$, con somma $n$, gli ordinamenti distinti sono $n!/(n_1!\cdots n_r!)$. Le lettere di ANNA si ordinano in $4!/(2!2!)=6$ modi.
:::

## Disposizioni e combinazioni

:::definizione{#combinazioni titolo="Ordine e ripetizione"}
Le disposizioni senza ripetizione di $k$ oggetti tra $n$ sono $n!/(n-k)!$, con $0\le k\le n$. Con ripetizione si hanno $n^k$ sequenze. Se l'ordine non conta e non si ammettono ripetizioni, il numero di scelte è
$$
\binom nk=\frac{n!}{k!(n-k)!}.
$$
Scegliere una commissione di 3 persone tra 8 dà $\binom83=56$ possibilità. Assegnare presidente, segretario e relatore agli stessi candidati dà $8\cdot7\cdot6=336$ possibilità, perché i ruoli rendono significativo l'ordine.
:::

## Estrazioni senza reinserimento

:::esempio{#estrazioni titolo="Conteggio dei campioni"}
Un'urna contiene $R$ oggetti rossi e $N-R$ di altro colore. Estraendo $n$ oggetti senza reinserimento, ogni sottoinsieme di $n$ oggetti è equiprobabile se l'estrazione è uniforme. La probabilità di esattamente $k$ rossi è
$$
\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn},
$$
per $\max(0,n-N+R)\le k\le\min(n,R)$. Nel denominatore si contano tutti i campioni; nel numeratore si scelgono separatamente i rossi e gli altri oggetti. Le probabilità dei colori cambiano dopo ciascuna estrazione.
:::

## Complementare e almeno un successo

:::osservazione{#complementare titolo="Eventi complementari nei conteggi"}
Per calcolare la probabilità di almeno un successo può essere più breve contare l'assenza di successi. In $n$ prove indipendenti con probabilità di successo $p$,
$$
P(\text{almeno un successo})=1-(1-p)^n.
$$
Con quattro lanci indipendenti di una moneta regolare la probabilità di almeno una testa è $15/16$. La potenza $(1-p)^n$ richiede l'indipendenza e la stessa probabilità di successo nelle prove.
:::
''',
'probabilita-condizionata': r'''
## Il gruppo di riferimento

:::definizione{#condizionata titolo="Probabilità condizionata"}
Sapere che è accaduto $B$ restringe l'insieme dei casi possibili. Se $P(B)>0$,
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$
Il denominatore è la probabilità dell'informazione disponibile. Se 20 studenti su 50 pendolari viaggiano in treno, la proporzione è $20/50$, anche se gli studenti del campione complessivo sono 200. $P(A\mid B)$ e $P(B\mid A)$ hanno denominatori diversi e possono differire molto.
:::

## Regola del prodotto e alberi

:::teorema{#prodotto titolo="Probabilità di percorsi successivi"}
Dalla definizione segue $P(A\cap B)=P(B)P(A\mid B)$. Per tre eventi, se i denominatori sono positivi,
$$
P(A\cap B\cap C)=P(A)P(B\mid A)P(C\mid A\cap B).
$$
In un albero si moltiplicano le probabilità lungo un percorso e si sommano le probabilità di percorsi incompatibili. Estraendo due palline senza reinserimento da un'urna con 3 rosse su 5, la probabilità di due rosse è $(3/5)(2/4)=3/10$.
:::

## Indipendenza di due eventi

:::definizione{#indipendenza titolo="Eventi indipendenti"}
$A$ e $B$ sono **indipendenti** se $P(A\cap B)=P(A)P(B)$. Quando $P(B)>0$, questo equivale a $P(A\mid B)=P(A)$. L'indipendenza si dimostra dal modello o dai valori delle probabilità.

Due eventi incompatibili di probabilità positiva sono dipendenti, perché la loro intersezione ha probabilità zero e il prodotto è positivo. L'indipendenza di $A$ e $B$ implica anche quella delle coppie ottenute sostituendo uno o entrambi con il complementare.
:::

## Partizioni e probabilità totale

:::teorema{#totale titolo="Formula della probabilità totale"}
Se $B_1,\dots,B_r$ formano una partizione di $\Omega$ e hanno probabilità positiva, allora
$$
P(A)=\sum_{i=1}^rP(A\mid B_i)P(B_i).
$$
Ogni esito di $A$ appartiene a uno solo dei gruppi $B_i$. Se due impianti forniscono il 60% e il 40% dei pezzi, con quote di difettosità del 2% e del 5%, la probabilità di un pezzo difettoso è $0{,}6\cdot0{,}02+0{,}4\cdot0{,}05=0{,}032$.
:::

## Inversione del condizionamento

:::teorema{#bayes titolo="Formula di Bayes"}
Nelle ipotesi della probabilità totale, se $P(A)>0$,
$$
P(B_j\mid A)=\frac{P(A\mid B_j)P(B_j)}{\sum_iP(A\mid B_i)P(B_i)}.
$$
Il numeratore misura i casi del gruppo $B_j$ in cui si verifica $A$; il denominatore comprende tutti i casi di $A$. Nell'esempio dei due impianti, la probabilità che un pezzo difettoso provenga dal secondo è $0{,}02/0{,}032=0{,}625$.
:::

## Classificatori e probabilità di base

:::esempio{#classificatori titolo="Sensibilità e falsi positivi"}
Un controllo individua il 90% dei pezzi difettosi e segnala erroneamente il 5% di quelli regolari. Se il 2% dei pezzi è difettoso, la probabilità di una segnalazione è $0{,}9\cdot0{,}02+0{,}05\cdot0{,}98=0{,}067$. Quindi la probabilità di difetto dopo una segnalazione è $0{,}018/0{,}067\approx0{,}269$.

La sensibilità condiziona sul difetto; il valore predittivo condiziona sulla segnalazione. Il secondo dipende anche dalla quota iniziale di difetti. Tutti i valori dell'esempio sono ipotesi del modello, non dati empirici su un dispositivo reale.
:::

## Più eventi e indipendenza mutua

:::attenzione{#mutua titolo="Indipendenza a coppie e mutua"}
Per tre eventi l'indipendenza mutua richiede sia le tre fattorizzazioni a coppie sia $P(A\cap B\cap C)=P(A)P(B)P(C)$. Con due monete regolari, gli eventi «prima testa», «seconda testa» e «risultati uguali» sono indipendenti a coppie; la loro intersezione ha probabilità $1/4$, mentre il prodotto è $1/8$.

Per sistemi di componenti indipendenti, l'affidabilità in serie è il prodotto delle affidabilità. In parallelo, quando basta un componente funzionante, è uno meno il prodotto delle probabilità di guasto.
:::
''',
'variabili-discrete': r'''
## Legge di una variabile aleatoria

:::definizione{#massa titolo="Funzione di massa e ripartizione"}
Una **variabile aleatoria discreta** associa un numero agli esiti e assume valori in un insieme finito o numerabile. La funzione di massa è $p_X(x)=P(X=x)$, con $p_X(x)\ge0$ e $\sum_xp_X(x)=1$. La ripartizione è $F_X(t)=\sum_{x\le t}p_X(x)$.

Le probabilità di intervalli si ottengono sommando le masse comprese nell'intervallo. Se $X$ assume $0,1,2$ con probabilità $0{,}2$, $0{,}5$, $0{,}3$, allora $P(X>0)=0{,}8$ e $F_X(1)=0{,}7$.
:::

## Valore atteso e varianza

:::definizione{#momenti titolo="Momenti di una variabile discreta"}
Se la somma converge assolutamente, il valore atteso è $E[X]=\sum_x xp_X(x)$. Se $E[X^2]<\infty$,
$$
\operatorname{Var}(X)=E[(X-E[X])^2]=E[X^2]-E[X]^2.
$$
Per una funzione $g$, $E[g(X)]=\sum_xg(x)p_X(x)$ quando l'attesa è definita. Inoltre $E[a+bX]=a+bE[X]$ e $\operatorname{Var}(a+bX)=b^2\operatorname{Var}(X)$. Il valore atteso può non essere un valore assunto dalla variabile: il dado regolare ha media $3{,}5$.
:::

## Bernoulli e binomiale

:::definizione{#binomiale titolo="Conteggio dei successi indipendenti"}
Una Bernoulli di parametro $p$ vale 1 con probabilità $p$ e 0 altrimenti; ha media $p$ e varianza $p(1-p)$. Se $X$ conta i successi in $n$ prove indipendenti con lo stesso $p$, allora
$$
X\sim\operatorname{Bin}(n,p),\qquad P(X=k)=\binom nkp^k(1-p)^{n-k}.
$$
La media è $np$ e la varianza $np(1-p)$. Il coefficiente conta le posizioni dei successi. Estrazioni senza reinserimento da una popolazione finita non soddisfano esattamente il modello binomiale.
:::

## Geometrica e binomiale negativa

:::definizione{#geometrica titolo="Attesa del primo successo"}
In prove indipendenti con probabilità di successo $0<p\le1$, il numero $T$ della prova del primo successo ha
$$
P(T=k)=(1-p)^{k-1}p\quad(k=1,2,\dots),\qquad
E[T]=\frac1p,\quad\operatorname{Var}(T)=\frac{1-p}{p^2}.
$$
Qui si conta anche la prova del successo. Se si contano i fallimenti, la variabile è $T-1$. Il numero della prova in cui si ottiene l'$r$-esimo successo ha legge binomiale negativa, con massa $\binom{k-1}{r-1}p^r(1-p)^{k-r}$ per $k\ge r$ e media $r/p$.
:::

## Distribuzione di Poisson

:::definizione{#poisson titolo="Conteggi su un intervallo"}
La distribuzione di Poisson di parametro $\lambda>0$ ha
$$
P(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\qquad E[X]=\operatorname{Var}(X)=\lambda.
$$
In un processo di Poisson omogeneo di intensità $r$, il numero di eventi in una durata $t$ ha parametro $rt$. L'omogeneità del tasso e l'indipendenza degli incrementi sono ipotesi del processo. Per $n$ grande e $p$ piccolo, una binomiale si può approssimare con una Poisson di parametro $np$; l'accuratezza dipende dai valori concreti.
:::

## Distribuzione ipergeometrica

:::definizione{#ipergeometrica titolo="Campionamento senza reinserimento"}
Da una popolazione di $N$ unità, con $R$ successi, si estrae uniformemente un campione di $n$ unità senza reinserimento. Il numero $X$ di successi ha massa
$$
P(X=k)=\frac{\binom Rk\binom{N-R}{n-k}}{\binom Nn}.
$$
Ponendo $p=R/N$, si ha $E[X]=np$ e, per $N>1$, $\operatorname{Var}(X)=np(1-p)(N-n)/(N-1)$. Il fattore finale tiene conto della dipendenza introdotta dall'estrazione senza reinserimento.
:::

## Scelta del modello e somme

:::teorema{#somme titolo="Somme di variabili indipendenti"}
La somma di binomiali indipendenti con lo stesso parametro $p$ è binomiale con numero di prove pari alla somma. La somma di Poisson indipendenti è Poisson con parametro pari alla somma. Per variabili indipendenti con varianza finita, la varianza della somma è la somma delle varianze.

La linearità dell'attesa $E[X+Y]=E[X]+E[Y]$ richiede solo l'esistenza delle attese. Per la varianza, in generale si deve aggiungere $2\operatorname{Cov}(X,Y)$. La distinzione sarà usata nello studio delle distribuzioni congiunte.
:::
''',
'variabili-continue': r'''
## Densità e probabilità di intervalli

:::definizione{#densita titolo="Variabili assolutamente continue"}
Una variabile ammette densità $f$ se $f(x)\ge0$, $\int_{\mathbb R}f(x)\,dx=1$ e
$$
P(a<X\le b)=\int_a^b f(x)\,dx.
$$
La probabilità è un'area; l'altezza $f(x)$ può superare 1. Per una variabile con densità, $P(X=x)=0$, quindi includere o escludere un singolo estremo non cambia la probabilità. Una variabile può anche avere una legge mista, con masse puntuali e una parte continua.
:::

## Ripartizione, quantili e momenti

:::definizione{#ripartizione titolo="Funzione di ripartizione"}
La ripartizione è $F(x)=P(X\le x)=\int_{-\infty}^x f(t)\,dt$. Dove la derivata esiste, $F'=f$ quasi ovunque. Un quantile di ordine $p$ è $q_p=\inf\{x:F(x)\ge p\}$. Se $F$ è continua e strettamente crescente, si risolve $F(q_p)=p$.

Quando gli integrali esistono, $E[X]=\int xf(x)\,dx$ ed $E[X^2]=\int x^2f(x)\,dx$. La varianza è $E[X^2]-E[X]^2$. Il supporto della densità determina gli estremi effettivi degli integrali.
:::

## Distribuzione uniforme

:::definizione{#uniforme titolo="Uniforme su un intervallo"}
Per $a<b$, $X\sim U(a,b)$ ha densità $1/(b-a)$ per $a<x<b$ e zero altrove. Quindi
$$
E[X]=\frac{a+b}{2},\qquad \operatorname{Var}(X)=\frac{(b-a)^2}{12},\qquad q_p=a+p(b-a).
$$
La probabilità di un sottointervallo è il rapporto tra la sua lunghezza e $b-a$. Per $U(2,8)$, $P(3<X<5)=2/6=1/3$. La formula del quantile segue dalla ripartizione lineare nell'intervallo.
:::

## Distribuzione esponenziale

:::definizione{#esponenziale titolo="Tempo di attesa esponenziale"}
Con tasso $\lambda>0$, la densità è $\lambda e^{-\lambda x}$ per $x\ge0$. Per $t\ge0$,
$$
P(X>t)=e^{-\lambda t},\qquad E[X]=\frac1\lambda,\qquad
\operatorname{Var}(X)=\frac1{\lambda^2}.
$$
Il quantile è $q_p=-\log(1-p)/\lambda$. La proprietà di assenza di memoria è $P(X>s+t\mid X>s)=P(X>t)$ per $s,t\ge0$. Il tasso ha unità inverse rispetto al tempo; il parametro di scala è il suo reciproco.
:::

## Normale e standardizzazione

:::definizione{#normale titolo="Distribuzione normale"}
$X\sim N(\mu,\sigma^2)$, con $\sigma>0$, ha densità
$$
f(x)=\frac1{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}.
$$
La media è $\mu$ e la varianza $\sigma^2$. La variabile $Z=(X-\mu)/\sigma$ è normale standard. Indicando con $\Phi$ la sua ripartizione,
$$
P(a<X<b)=\Phi\!\left(\frac{b-\mu}{\sigma}\right)-\Phi\!\left(\frac{a-\mu}{\sigma}\right).
$$
Per simmetria, $\Phi(-z)=1-\Phi(z)$. Il quantile è $\mu+\sigma z_p$, dove $\Phi(z_p)=p$.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" xmin=-4 xmax=4 ymin=0 ymax=0.45 titolo="Densità della normale standard"}
:::

## Gamma, chi quadrato, Student e Fisher

:::definizione{#famiglie titolo="Distribuzioni per l'inferenza"}
La gamma con forma $k>0$ e tasso $\lambda>0$ ha densità $\lambda^kx^{k-1}e^{-\lambda x}/\Gamma(k)$ per $x>0$, media $k/\lambda$ e varianza $k/\lambda^2$. La legge $\chi^2_\nu$ è una gamma con forma $\nu/2$ e tasso $1/2$.

Se $Z\sim N(0,1)$ e $U\sim\chi^2_\nu$ sono indipendenti, $Z/\sqrt{U/\nu}$ ha legge $t_\nu$ di Student. Se $U\sim\chi^2_r$ e $V\sim\chi^2_s$ sono indipendenti, $(U/r)/(V/s)$ ha legge $F_{r,s}$. I quantili di queste leggi si ricavano da tavole o software e saranno forniti negli esercizi che li richiedono.
:::

## Trasformazioni monotone

:::teorema{#trasformazioni titolo="Cambio di variabile in una densità"}
Se $Y=g(X)$ e $g$ è strettamente monotona, invertibile e derivabile con inversa derivabile sul supporto,
$$
f_Y(y)=f_X(g^{-1}(y))\left|\frac{d}{dy}g^{-1}(y)\right|.
$$
Prima si determina il supporto trasformato. Per $X\sim U(0,1)$ e $Y=2X+1$, il supporto è $(1,3)$ e la densità vale $1/2$. Per trasformazioni non iniettive si sommano i contributi delle diverse inverse, oppure si parte dalla ripartizione.
:::
''',
'distribuzioni-congiunte': r'''
## Leggi congiunte e marginali

:::definizione{#congiunta titolo="Distribuzione di una coppia"}
Per variabili discrete, $p_{X,Y}(x,y)=P(X=x,Y=y)$ è non negativa e la somma su tutte le coppie vale 1. Le marginali si ottengono sommando lungo righe o colonne:
$$
p_X(x)=\sum_y p_{X,Y}(x,y),\qquad p_Y(y)=\sum_xp_{X,Y}(x,y).
$$
Nel caso con densità congiunta, le somme si sostituiscono con integrali. Il dominio di integrazione deve rispettare il supporto: se $0<y<x<1$, per un dato $x$ la variabile $y$ va da 0 a $x$.
:::

## Condizionamento e indipendenza

:::definizione{#condizionamento titolo="Leggi condizionate"}
Nel caso discreto, $p_{Y\mid X}(y\mid x)=p_{X,Y}(x,y)/p_X(x)$ per $p_X(x)>0$. Nel caso continuo si usa $f_{Y\mid X}(y\mid x)=f_{X,Y}(x,y)/f_X(x)$ dove $f_X(x)>0$; questa è una densità condizionata, pur essendo $P(X=x)=0$.

$X$ e $Y$ sono indipendenti se la legge congiunta fattorizza nel prodotto delle marginali: per masse o densità, rispettivamente $p_{X,Y}=p_Xp_Y$ oppure $f_{X,Y}=f_Xf_Y$ quasi ovunque. La fattorizzazione va verificata sull'intero supporto.
:::

## Attese di funzioni e covarianza

:::definizione{#covarianza titolo="Covarianza"}
Per variabili con secondo momento finito,
$$
E[g(X,Y)]=\sum_{x,y}g(x,y)p_{X,Y}(x,y),\qquad
\operatorname{Cov}(X,Y)=E[XY]-E[X]E[Y].
$$
Per densità si usa l'integrale doppio. La covarianza misura la variazione lineare congiunta e dipende dalle unità di misura. Vale $\operatorname{Cov}(a+bX,c+dY)=bd\operatorname{Cov}(X,Y)$.
:::

## Correlazione e dipendenza

:::definizione{#correlazione titolo="Coefficiente di correlazione"}
Se entrambe le varianze sono positive, $\rho=\operatorname{Cov}(X,Y)/(\sigma_X\sigma_Y)$ e $-1\le\rho\le1$. Il valore assoluto è 1 esattamente quando esiste una relazione affine quasi certa tra le variabili.

L'indipendenza implica covarianza zero quando i secondi momenti esistono. L'implicazione inversa è falsa: per $X$ uniforme su $\{-1,0,1\}$ e $Y=X^2$, $E[XY]=E[X^3]=0$ e $E[X]=0$, quindi la covarianza è zero; tuttavia $Y$ è determinata da $X$. Per una coppia con legge normale congiunta, covarianza zero implica indipendenza.
:::

## Somme e combinazioni lineari

:::teorema{#somme titolo="Varianza delle combinazioni lineari"}
Per secondi momenti finiti,
$$
\operatorname{Var}(aX+bY)=a^2\sigma_X^2+b^2\sigma_Y^2+2ab\operatorname{Cov}(X,Y).
$$
La linearità dell'attesa non richiede indipendenza. Per $S=X+Y$ con variabili discrete indipendenti, $p_S(s)=\sum_xp_X(x)p_Y(s-x)$; per densità, $f_S(s)=\int f_X(x)f_Y(s-x)\,dx$. Queste formule di convoluzione sommano i modi di ottenere lo stesso valore della somma.
:::

## Massimi, minimi e trasformazioni

:::teorema{#estremi titolo="Estremi di variabili indipendenti"}
Se $X_1,\dots,X_n$ sono indipendenti con la stessa ripartizione $F$, per $M=\max_iX_i$ e $m=\min_iX_i$,
$$
P(M\le t)=F(t)^n,\qquad P(m>t)=(1-F(t))^n.
$$
Il massimo è minore o uguale a $t$ quando lo sono tutte le osservazioni. Il minimo supera $t$ quando tutte la superano. Per trasformare due variabili con un cambio biunivoco si moltiplica la densità congiunta per il valore assoluto del determinante jacobiano dell'inversa, dopo aver trasformato il supporto.
:::

## Attesa e varianza condizionate

:::teorema{#totale titolo="Scomposizione dell'attesa e della varianza"}
Se $E[|Y|]<\infty$, $E[Y]=E[E[Y\mid X]]$. Se $E[Y^2]<\infty$,
$$
\operatorname{Var}(Y)=E[\operatorname{Var}(Y\mid X)]+\operatorname{Var}(E[Y\mid X]).
$$
La prima componente descrive la variabilità interna ai gruppi definiti da $X$; la seconda descrive la variabilità tra le loro medie. La formula comprende sia modelli discreti a gruppi sia condizionamenti continui.
:::
''',
'campionamento-e-teoremi-limite': r'''
## Campione casuale e statistiche

:::definizione{#campione titolo="Campione indipendente e identicamente distribuito"}
Un campione casuale $X_1,\dots,X_n$ è qui formato da variabili **indipendenti e identicamente distribuite**, abbreviato i.i.d. Una statistica, come $\bar X$, è una funzione del campione che non dipende da parametri ignoti. Prima dell'osservazione è aleatoria; dopo, assume il valore calcolato sui dati.

Le proprietà delle statistiche si studiano immaginando di ripetere il campionamento nelle stesse condizioni. Il campionamento senza reinserimento da una popolazione finita richiede una correzione della varianza e non coincide esattamente con il modello i.i.d.
:::

## Media campionaria ed errore standard

:::teorema{#media-campionaria titolo="Distribuzione della media"}
Per un campione i.i.d. con media $\mu$ e varianza finita $\sigma^2$,
$$
E[\bar X]=\mu,\qquad\operatorname{Var}(\bar X)=\frac{\sigma^2}{n},\qquad SE(\bar X)=\frac{\sigma}{\sqrt n}.
$$
Il simbolo $SE$ indica l'errore standard, cioè la deviazione standard della statistica. Se $\sigma$ è ignota, si stima con $S/\sqrt n$. Per dimezzare l'errore standard occorre quadruplicare $n$, mantenendo la stessa variabilità della popolazione.
:::

## Disuguaglianze di Markov e Chebyshev

:::teorema{#chebyshev titolo="Controlli di probabilità senza normalità"}
Per $Y\ge0$ con attesa finita e $a>0$, $P(Y\ge a)\le E[Y]/a$. Applicando questa disuguaglianza a $(X-\mu)^2$, con varianza finita, si ottiene
$$
P(|X-\mu|\ge\varepsilon)\le\frac{\sigma^2}{\varepsilon^2}\quad(\varepsilon>0).
$$
Un limite superiore maggiore di 1 può essere sostituito con 1. Per la media campionaria il numeratore diventa $\sigma^2/n$. Questi limiti valgono senza assumere una particolare distribuzione, ma possono essere poco precisi.
:::

## Legge dei grandi numeri

::::teorema{#legge-grandi-numeri titolo="Convergenza della media"}
Per un campione i.i.d. con media $\mu$ e varianza finita, $\bar X_n$ converge in probabilità a $\mu$:
$$
P(|\bar X_n-\mu|>\varepsilon)\longrightarrow0
\quad\text{per ogni }\varepsilon>0.
$$
:::dimostrazione
Chebyshev fornisce $P(|\bar X_n-\mu|>\varepsilon)\le\sigma^2/(n\varepsilon^2)$. Per $n\to\infty$ il membro destro tende a zero, quindi anche la probabilità a sinistra tende a zero.
:::
::::

## Teorema centrale del limite

:::teorema{#tcl titolo="Approssimazione normale della media"}
Per variabili i.i.d. con media $\mu$ e varianza $0<\sigma^2<\infty$,
$$
\frac{\sqrt n(\bar X_n-\mu)}{\sigma}\xrightarrow{d}N(0,1).
$$
Per $n$ sufficientemente grande si approssima $\bar X_n$ con $N(\mu,\sigma^2/n)$. La velocità di approssimazione dipende dalla distribuzione: non esiste una soglia universale che renda adeguata ogni popolazione. Se la popolazione è normale, la distribuzione normale della media è esatta per ogni $n$.
:::

## Proporzioni e correzione di continuità

:::osservazione{#proporzioni titolo="Dalla binomiale alla normale"}
Se $K\sim\operatorname{Bin}(n,p)$, la proporzione $\hat p=K/n$ ha media $p$ e varianza $p(1-p)/n$. La normale approssima la binomiale quando $np$ e $n(1-p)$ sono abbastanza grandi; una regola pratica prudente richiede entrambi almeno 10.

Per approssimare $P(K\le k)$ si usa il bordo $k+0{,}5$; per $P(a\le K\le b)$ si usano $a-0{,}5$ e $b+0{,}5$. La correzione rappresenta mediante intervalli di larghezza uno le masse poste sugli interi.
:::

## Campioni normali e popolazioni finite

:::teorema{#normale-campione titolo="Risultati esatti e correzione finita"}
In un campione i.i.d. normale, $\bar X$ e $S^2$ sono indipendenti, $(n-1)S^2/\sigma^2\sim\chi^2_{n-1}$ e $(\bar X-\mu)/(S/\sqrt n)\sim t_{n-1}$.

Per un campione casuale semplice senza reinserimento di $n$ unità su $N$, definendo la varianza della popolazione con divisore $N$, si ha $\operatorname{Var}(\bar X)=\sigma^2(N-n)/(n(N-1))$. Quando $n=N$, la media è osservata esattamente e la varianza campionaria della media è zero.
:::
''',
'stima-puntuale': r'''
## Stimatore e stima osservata

:::definizione{#stimatore titolo="Stimatori di un parametro"}
Uno **stimatore** $T=T(X_1,\dots,X_n)$ è una statistica usata per approssimare un parametro $\theta$. La stima è il valore numerico ottenuto su un campione. Per stimare una media si può usare $\bar X$; per una proporzione, la frequenza campionaria $\hat p$.

Il parametro è fissato dal modello, mentre lo stimatore cambia al cambiare del campione. La scelta si valuta attraverso la sua distribuzione campionaria, non soltanto confrontando il valore ottenuto in una singola rilevazione.
:::

## Distorsione ed errore quadratico medio

:::definizione{#eqm titolo="Bias ed errore quadratico medio"}
La distorsione è $b_\theta(T)=E_\theta[T]-\theta$. Uno stimatore è corretto se la distorsione è zero per ogni parametro ammissibile. Quando i secondi momenti esistono,
$$
MSE_\theta(T)=E_\theta[(T-\theta)^2]
=\operatorname{Var}_\theta(T)+b_\theta(T)^2.
$$
La scomposizione deriva dall'espansione dello scarto attorno a $E[T]$; il termine misto ha attesa zero. Uno stimatore distorto può avere MSE inferiore a uno corretto, se la riduzione della varianza compensa il quadrato della distorsione.
:::

## Stima di media e varianza

:::teorema{#varianza-corretta titolo="Correzione della varianza campionaria"}
Per un campione i.i.d. con secondo momento finito, $\bar X$ è corretta per $\mu$ e
$$
E\!\left[\frac1n\sum_i(X_i-\bar X)^2\right]=\frac{n-1}{n}\sigma^2.
$$
Quindi $S^2=\sum_i(X_i-\bar X)^2/(n-1)$ è corretta per $\sigma^2$ quando $n>1$. La radice $S$ non è in generale corretta per $\sigma$. La stima della varianza e quella della deviazione standard hanno proprietà di distorsione diverse.
:::

## Metodo dei momenti

:::definizione{#momenti titolo="Equazioni dei momenti"}
Il metodo dei momenti uguaglia momenti teorici e momenti campionari. Per un modello a un parametro si può risolvere $E_\theta[X]=\bar x$; con più parametri possono servire anche $E_\theta[X^2]=\sum_i x_i^2/n$ e momenti successivi.

Per una Poisson, $E[X]=\lambda$, quindi $\hat\lambda=\bar x$. Per un'esponenziale con tasso $\lambda$, $E[X]=1/\lambda$, quindi $\hat\lambda=1/\bar x$. Si controlla sempre che la soluzione appartenga allo spazio dei parametri.
:::

## Massima verosimiglianza

:::definizione{#verosimiglianza titolo="Funzione di verosimiglianza"}
Fissati i dati osservati, $L(\theta)=\prod_i f_\theta(x_i)$ per un campione indipendente, usando masse nel caso discreto. Si cerca il parametro che massimizza questa funzione; spesso è più comodo massimizzare $\ell(\theta)=\log L(\theta)$.

Per $k$ successi Bernoulli su $n$, $\ell(p)=k\log p+(n-k)\log(1-p)$ e la soluzione è $\hat p=k/n$, includendo i casi di bordo $k=0,n$. La verosimiglianza è una funzione del parametro con dati fissati, non una densità di probabilità del parametro.
:::

## Supporto dipendente dal parametro

:::esempio{#uniforme titolo="Stima dell'estremo di un'uniforme"}
Per un campione da $U(0,\theta)$, con $\theta>0$, la verosimiglianza è proporzionale a $\theta^{-n}$ per $\theta\ge M$, dove $M=\max_i x_i$, ed è zero altrimenti. Quindi lo stimatore di massima verosimiglianza è $M$.

Poiché $E[M]=n\theta/(n+1)$, lo stimatore $(n+1)M/n$ è corretto. Il metodo dei momenti dà invece $2\bar X$. Ignorare il vincolo $\theta\ge M$ farebbe perdere la soluzione, che si trova sul bordo del supporto ammissibile.
:::

## Consistenza ed efficienza

:::definizione{#consistenza titolo="Proprietà al crescere del campione"}
$T_n$ è consistente per $\theta$ se converge in probabilità a $\theta$. Se $MSE(T_n)\to0$, Chebyshev applicata allo scarto quadratico implica la consistenza. Per stimatori corretti dello stesso parametro, una varianza minore indica maggiore precisione nel confronto considerato.

In modelli regolari, il limite di Cramér-Rao per stimatori corretti è $1/I_n(\theta)$, dove $I_n$ è l'informazione di Fisher del campione; richiede ipotesi di regolarità, tra cui la legittimità dello scambio tra derivata e integrale. I modelli uniformi con supporto dipendente dal parametro non soddisfano automaticamente queste ipotesi.
:::
''',
'intervalli-di-confidenza': r'''
## Significato del livello di confidenza

:::definizione{#confidenza titolo="Procedura di confidenza"}
Un intervallo casuale $[L(X),U(X)]$ ha livello $1-\alpha$ se contiene il parametro con probabilità $1-\alpha$ nel modello, oppure almeno tale probabilità per una procedura conservativa. Dopo l'osservazione gli estremi sono numeri fissati.

La copertura del 95% riguarda la ripetizione del metodo su campioni nuovi. Nel modello frequentista il parametro è fisso: l'intervallo osservato lo contiene oppure no. La precisione dipende dall'ampiezza; aumentando la confidenza, a parità di altre condizioni, l'intervallo si allarga.
:::

## Media con varianza nota

:::teorema{#media-nota titolo="Intervallo normale per la media"}
Per un campione i.i.d. normale con deviazione standard nota $\sigma>0$,
$$
\bar X\pm z_{1-\alpha/2}\frac{\sigma}{\sqrt n}
$$
è un intervallo bilatero esatto di livello $1-\alpha$. $z_p$ è il quantile di ordine $p$ della normale standard. Al 95%, $z_{0{,}975}\approx1{,}96$. Per popolazioni non normali l'intervallo può essere usato come approssimazione tramite il teorema centrale del limite, quando giustificato.
:::

## Media con varianza ignota

:::teorema{#student titolo="Intervallo di Student"}
Per un campione i.i.d. normale di numerosità $n>1$, con deviazione standard ignota,
$$
\bar X\pm t_{1-\alpha/2,n-1}\frac{S}{\sqrt n}.
$$
La distribuzione di Student tiene conto della stima della variabilità; i gradi di libertà sono $n-1$. Con dati fortemente asimmetrici e campione piccolo, la formula non offre copertura esatta. Negli esercizi si dichiarano il modello normale oppure il carattere approssimato della procedura.
:::

## Proporzione e intervallo di Wilson

:::definizione{#proporzione titolo="Intervalli per una proporzione"}
Con $K\sim\operatorname{Bin}(n,p)$ e $\hat p=K/n$, l'intervallo di Wald è $\hat p\pm z\sqrt{\hat p(1-\hat p)/n}$. È un'approssimazione e può avere copertura inadeguata vicino a 0 e 1 o con pochi successi e insuccessi.

L'intervallo di Wilson si ottiene dall'inversione del test score. Posto $z=z_{1-\alpha/2}$, ha centro e semiampiezza
$$
c=\frac{\hat p+z^2/(2n)}{1+z^2/n},\qquad
h=\frac{z\sqrt{\hat p(1-\hat p)/n+z^2/(4n^2)}}{1+z^2/n}.
$$
L'intervallo è $[c-h,c+h]$. Per campioni piccoli si possono usare procedure binomiali esatte, generalmente conservative.
:::

## Varianza di una popolazione normale

:::teorema{#varianza titolo="Intervallo chi quadrato"}
Per un campione i.i.d. normale con $n>1$, un intervallo di livello $1-\alpha$ per $\sigma^2$ è
$$
\left[\frac{(n-1)S^2}{\chi^2_{1-\alpha/2,n-1}},
\frac{(n-1)S^2}{\chi^2_{\alpha/2,n-1}}\right].
$$
La notazione $\chi^2_{p,\nu}$ indica il quantile inferiore di ordine $p$. Il quantile maggiore compare al denominatore dell'estremo inferiore. Per ottenere un intervallo per $\sigma$ si prendono le radici degli estremi, perché la radice è crescente sui valori positivi.
:::

## Differenza tra due medie

:::teorema{#due-medie titolo="Campioni indipendenti"}
Con campioni normali indipendenti e varianze note, l'errore standard di $\bar X-\bar Y$ è $\sqrt{\sigma_X^2/n_X+\sigma_Y^2/n_Y}$. Con varianze ignote si usa comunemente l'intervallo di Welch, sostituendo le varianze campionarie e usando il quantile di Student con gradi di libertà
$$
\nu\approx\frac{(S_X^2/n_X+S_Y^2/n_Y)^2}
{(S_X^2/n_X)^2/(n_X-1)+(S_Y^2/n_Y)^2/(n_Y-1)}.
$$
Per dati appaiati si analizzano invece le differenze entro ciascuna coppia con un intervallo a un campione. Il modello con varianza comune richiede un'ipotesi aggiuntiva sulle due popolazioni.
:::

## Numerosità e intervalli unilateri

:::definizione{#numerosita titolo="Margine di errore prefissato"}
Con $\sigma$ nota, per ottenere semiampiezza al più $E>0$ si sceglie $n\ge(z\sigma/E)^2$, arrotondando all'intero superiore. Per una proporzione, la pianificazione normale prudente usa $p(1-p)\le1/4$, quindi $n\ge z^2/(4E^2)$.

Un limite superiore unilatero per la media normale con $\sigma$ nota è $\bar X+z_{1-\alpha}\sigma/\sqrt n$; l'intervallo è $(-\infty,U]$. Il quantile usa $1-\alpha$, perché tutta la probabilità esclusa è in una sola coda.
:::
''',
'test-di-ipotesi': r'''
## Ipotesi e regola di decisione

:::definizione{#ipotesi titolo="Ipotesi nulla e alternativa"}
Un test confronta un'ipotesi nulla $H_0$ con un'alternativa $H_1$. La statistica test misura quanto i dati si discostano da $H_0$; la regione critica determina i risultati per cui si rifiuta $H_0$. La direzione dell'alternativa si stabilisce prima di osservare il risultato.

Per una media si distinguono $H_1:\mu\ne\mu_0$, $H_1:\mu>\mu_0$ e $H_1:\mu<\mu_0$. Una decisione di non rifiuto significa che il test non ha fornito sufficiente evidenza contro $H_0$ al livello scelto; non dimostra l'uguaglianza del parametro al valore ipotizzato.
:::

## Errori e potenza

:::definizione{#errori titolo="Errori di primo e secondo tipo"}
L'errore di primo tipo è rifiutare $H_0$ quando è vera; il livello $\alpha$ ne controlla la probabilità massima sotto $H_0$. L'errore di secondo tipo è non rifiutare $H_0$ per un'alternativa specifica. La sua probabilità è $\beta(\theta)$ e la potenza è $1-\beta(\theta)$.

La potenza dipende dall'effetto reale, dalla variabilità, dalla numerosità e dal livello. Ridurre $\alpha$, lasciando tutto il resto fissato, restringe la regione critica e può aumentare l'errore di secondo tipo.
:::

## Valore p e significatività

:::definizione{#p-value titolo="Valore p"}
Il **valore p** è, sotto $H_0$, la probabilità di un risultato almeno altrettanto incompatibile con essa secondo l'ordinamento del test. Si rifiuta $H_0$ se $p\le\alpha$.

Per un test normale bilatero, $p=2[1-\Phi(|z_{\mathrm{oss}}|)]$; per l'alternativa superiore è $1-\Phi(z_{\mathrm{oss}})$. Il valore p non è la probabilità che $H_0$ sia vera e non misura da solo l'importanza pratica dell'effetto. Una stima dell'effetto con il suo intervallo di confidenza completa la decisione.
:::

## Test per una media

:::teorema{#media titolo="Test z e test t"}
Per osservazioni i.i.d. normali, con deviazione standard nota, $Z=(\bar X-\mu_0)/(\sigma/\sqrt n)$ è normale standard sotto $H_0$. Se la deviazione standard è ignota e $n>1$, $T=(\bar X-\mu_0)/(S/\sqrt n)$ ha legge $t_{n-1}$ sotto $H_0$.

Nel test bilatero si rifiuta quando il valore assoluto supera il quantile $1-\alpha/2$. Nel test superiore si confronta con il quantile $1-\alpha$. Per medie di popolazioni non normali i test possono avere validità approssimata con campioni adeguati; le ipotesi non si ricavano dalla sola numerosità.
:::

## Proporzioni e confronto di campioni

:::definizione{#proporzioni titolo="Test score e confronti"}
Per una proporzione, sotto $H_0:p=p_0$, il test normale score usa $Z=(\hat p-p_0)/\sqrt{p_0(1-p_0)/n}$. L'approssimazione richiede conteggi attesi adeguati; per campioni piccoli si usa un test binomiale esatto.

Per due medie indipendenti con varianze ignote si usa normalmente Welch. Per dati appaiati, il test t si applica alle differenze. Per due proporzioni sotto l'ipotesi di uguaglianza, l'errore standard del test usa la proporzione combinata dei due campioni.
:::

## Adattamento e indipendenza

:::definizione{#chi-quadrato titolo="Test chi quadrato"}
Per conteggi osservati $O_i$ e attesi $E_i>0$, la statistica è $\sum_i(O_i-E_i)^2/E_i$. Nel test di adattamento a $k$ categorie, i gradi di libertà sono $k-1-r$, dove $r$ è il numero di parametri stimati, nelle condizioni di regolarità del modello.

In una tabella $r\times c$ per il test di indipendenza, $E_{ij}=n_{i\cdot}n_{\cdot j}/n$ e i gradi di libertà sono $(r-1)(c-1)$. L'approssimazione richiede conteggi attesi sufficienti: negli esercizi si usa almeno 5 in ogni cella. Le unità devono essere indipendenti. Per tabelle piccole si può ricorrere a test esatti.
:::

## Varianza, confronti multipli e intervalli

:::osservazione{#multipli titolo="Decisioni collegate"}
Per una popolazione normale, il test di una varianza usa $(n-1)S^2/\sigma_0^2\sim\chi^2_{n-1}$ sotto $H_0$. Un test bilatero di livello $\alpha$ rifiuta i valori esterni all'intervallo centrale dei quantili chi quadrato.

Il test bilatero per un parametro e l'intervallo ottenuto invertendo lo stesso test sono coerenti: si rifiuta il valore nullo quando esso è escluso dall'intervallo corrispondente. Eseguire molti test aumenta il rischio di falsi rifiuti complessivi; Bonferroni assegna a ciascuno di $m$ test il livello $\alpha/m$ per controllare l'errore familiare al più a $\alpha$.
:::
''',
'regressione-e-correlazione': r'''
## Dati appaiati e diagramma di dispersione

:::definizione{#dati titolo="Relazione tra due caratteri"}
I dati sono coppie $(x_i,y_i)$ osservate sulle stesse unità. Il diagramma di dispersione mostra forma, direzione, dispersione e punti influenti della relazione. Prima di adattare una retta si controlla se una relazione lineare è plausibile nell'intervallo osservato.

Con $\bar x$ e $\bar y$ medie campionarie, si definiscono $S_{xx}=\sum_i(x_i-\bar x)^2$, $S_{yy}=\sum_i(y_i-\bar y)^2$ e $S_{xy}=\sum_i(x_i-\bar x)(y_i-\bar y)$. Per una regressione identificabile con intercetta occorre $S_{xx}>0$.
:::

## Retta dei minimi quadrati

::::teorema{#retta titolo="Stima di intercetta e pendenza"}
La retta $\hat y=a+bx$ che minimizza $\sum_i(y_i-a-bx_i)^2$ ha
$$
b=\frac{S_{xy}}{S_{xx}},\qquad a=\bar y-b\bar x.
$$
Passa per $(\bar x,\bar y)$. La pendenza misura la variazione prevista di $y$ per un incremento unitario di $x$ e ha unità di $y$ divise per quelle di $x$.

:::dimostrazione
Derivando la somma dei quadrati rispetto ad $a$ e $b$ si ottengono $\sum_i(y_i-a-bx_i)=0$ e $\sum_ix_i(y_i-a-bx_i)=0$. La prima dà $a=\bar y-b\bar x$; sostituendola nella seconda si ottiene $bS_{xx}=S_{xy}$. La funzione obiettivo è strettamente convessa quando $S_{xx}>0$, quindi il punto è il minimo unico.
:::
::::

## Residui e qualità dell'adattamento

:::definizione{#residui titolo="Scomposizione della variabilità"}
I residui sono $e_i=y_i-\hat y_i$. Con intercetta, $\sum_ie_i=0$ e la somma totale dei quadrati si scompone come $SST=SSR+SSE$, con $SST=S_{yy}$, $SSE=\sum_ie_i^2$ e $SSR=\sum_i(\hat y_i-\bar y)^2$.

Se $SST>0$, $R^2=1-SSE/SST$. È la quota di variabilità di $y$ spiegata dalla retta nel campione. Un valore elevato non dimostra causalità e non garantisce che il modello sia adatto a previsioni fuori dall'intervallo osservato.
:::

## Correlazione di Pearson

:::definizione{#pearson titolo="Correlazione campionaria"}
Se $S_{xx}>0$ e $S_{yy}>0$, $r=S_{xy}/\sqrt{S_{xx}S_{yy}}$. Il segno coincide con quello della pendenza. Nella regressione lineare semplice con intercetta, $R^2=r^2$.

Traslare una variabile non cambia $r$; moltiplicarla per una costante positiva non lo cambia, mentre una costante negativa ne inverte il segno. La correlazione misura una relazione lineare; una relazione curva può avere correlazione nulla. Associazione statistica e relazione causale richiedono analisi diverse del disegno dello studio.
:::

## Modello lineare e inferenza sulla pendenza

:::teorema{#inferenza titolo="Errori del modello e test sulla pendenza"}
Il modello è $Y_i=\alpha+\beta x_i+\varepsilon_i$, con $x_i$ fissati, errori indipendenti di media zero e varianza comune $\sigma^2$. Per l'inferenza esatta si assume anche la normalità degli errori. Per $n>2$,
$$
s_e^2=\frac{SSE}{n-2},\qquad SE(b)=\frac{s_e}{\sqrt{S_{xx}}},\qquad
\frac{b-\beta_0}{SE(b)}\sim t_{n-2}\quad(H_0:\beta=\beta_0).
$$
L'intervallo per $\beta$ è $b\pm t_{1-\alpha/2,n-2}SE(b)$. Il denominatore $n-2$ tiene conto dei due coefficienti stimati.
:::

## Risposta media e previsione individuale

:::teorema{#previsione titolo="Incertezza della previsione"}
Nel modello normale, per $x_0$ fissato la stima della risposta media è $\hat y_0=a+bx_0$. Il suo errore standard è
$$
s_e\sqrt{\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}}}.
$$
Per una nuova osservazione indipendente si aggiunge 1 sotto radice. Moltiplicando per il quantile di Student si ottengono rispettivamente un intervallo per la risposta media e un intervallo di previsione. Il secondo è più ampio perché comprende anche la variabilità della nuova osservazione.
:::

## Diagnostica e limiti del modello

:::attenzione{#diagnostica titolo="Controlli sui residui"}
Un andamento curvo dei residui rispetto ai valori adattati suggerisce una media non lineare; una dispersione crescente suggerisce varianza non costante; dipendenze nel tempo richiedono un modello degli errori adeguato. Un punto con $x$ estremo ha leva elevata e può influenzare molto la pendenza.

Le inferenze classiche richiedono le ipotesi dichiarate. L'estrapolazione usa la retta fuori dalla regione dei dati e aggiunge incertezza sul modello che gli intervalli standard non rappresentano. Per relazioni monotone o dati ordinali si può usare la correlazione di Spearman, calcolando Pearson sui ranghi e usando ranghi medi in presenza di pari merito.
:::
''',
}
