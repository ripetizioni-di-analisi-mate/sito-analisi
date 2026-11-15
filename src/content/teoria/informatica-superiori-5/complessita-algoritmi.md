---
titolo: "Ricerca, ordinamento e complessità degli algoritmi"
sommario: "Conteggi, ricerche e ordinamenti per scegliere un algoritmo in base ai dati e al lavoro richiesto."
---

## Dimensione dell’input e unità di costo

:::definizione{#costo titolo="Costo di un algoritmo"}
Per stimare il lavoro necessario a trovare un codice in un elenco occorre sapere quanti codici contiene l’elenco e che cosa si conta durante la ricerca. La **dimensione dell’input** può essere il numero $n$ di elementi. Il **costo** può essere il numero di celle esaminate. Una cella viene contata una volta quando l’algoritmo la sceglie per verificare se contiene il bersaglio.

La stessa ricerca si può misurare anche con il numero di istruzioni di confronto. Se in una cella si controlla prima `valore == bersaglio` e poi `valore < bersaglio`, un solo accesso può dare luogo a due confronti elementari. Nei tracciamenti di ricerca si conta una visita per cella esaminata. Negli ordinamenti si contano separatamente i confronti tra chiavi e gli scambi o spostamenti.
:::

:::esempio{titolo="Due input con lo stesso numero di celle"}
Si cerca il codice `8` da sinistra in `[8, 3, 1, 5]` e in `[3, 1, 5, 8]`, con arresto alla prima uguaglianza. Entrambi gli elenchi hanno $n=4$. Nel primo elenco basta la visita all’indice `0`. Nel secondo si leggono gli indici da `0` a `3`, quindi si contano quattro visite. La posizione del bersaglio influisce sul costo a parità di dimensione.

::grafico{assi=0 uguale=1 xmin=-2.6 xmax=5.6 ymin=-0.7 ymax=3.4 poligoni="0,2 1,2 1,3 0,3;0,0 4,0 4,1 0,1" linee="0,2 4,2 4,3 0,3 0,2;1,2 1,3;2,2 2,3;3,2 3,3;0,0 4,0 4,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1" etichette="0.5,2.5,8;1.5,2.5,3;2.5,2.5,1;3.5,2.5,5;0.5,0.5,3;1.5,0.5,1;2.5,0.5,5;3.5,0.5,8;-1.3,2.5,1 visita;-1.3,0.5,4 visite;0.5,-0.4,0;1.5,-0.4,1;2.5,-0.4,2;3.5,-0.4,3" titolo="Celle visitate nella ricerca di $8$, colorate: una nel primo elenco, quattro nel secondo. Sotto le celle, gli indici."}

:::

:::definizione{#casi-di-costo titolo="Caso migliore, peggiore e medio"}
Per una dimensione fissata, il **caso migliore** dà il minimo costo fra gli input ammessi. Il **caso peggiore** dà il massimo. Il **costo medio** pesa i costi dei diversi input in base alle loro probabilità.

Se il bersaglio è presente una sola volta e tutte le sue $n$ posizioni hanno la stessa probabilità, la media delle visite nella ricerca lineare è

$$
\frac{1+2+\cdots+n}{n}=\frac{n+1}{2}.
$$

Con quattro celle, i costi possibili sono $1$, $2$, $3$ e $4$. Poiché le posizioni sono equiprobabili, il costo medio è $\dfrac{10}{4}=2{,}5$. Se la ricerca può fallire, occorre conoscere anche la probabilità di assenza per includere il costo delle ricerche fallite nella media.

::grafico{xmin=-0.6 xmax=4.4 ymin=0 ymax=5 f="2.5" punti="0,1,pieno;1,2,pieno;2,3,pieno;3,4,pieno" nomi="k,V" legenda="V=\dfrac{n+1}{2}=2{,}5" titolo="Visite $V=k+1$ quando il bersaglio è all’indice $k$, con $n=4$. La retta indica il costo medio $\dfrac{n+1}{2}=2{,}5$."}

:::

## Crescita del costo

:::definizione{#crescita titolo="Ordine di crescita"}
Si scrive $T(n)=O(g(n))$ se esistono una costante $c>0$ e una soglia $n_0$ tali che $T(n)\leq c\,g(n)$ per ogni $n\geq n_0$. Questa scrittura fornisce un **limite superiore**. Se, a partire da una soglia, esiste anche un limite inferiore positivo proporzionale a $g(n)$, si scrive $T(n)=\Theta(g(n))$.

Per $n\geq 1$, $3n\leq 3n+2\leq 5n$. Quindi $3n+2$ appartiene a $\Theta(n)$. Poiché $n\leq n^2$ per $n\geq 1$, vale anche il limite superiore $O(n^2)$. La stima $\Theta(n)$ descrive più precisamente l’ordine di crescita.
:::

:::esempio{titolo="Come cambia il costo quando raddoppia l’input"}
Per il costo $C(n)=n$ si ha $C(2n)=2C(n)$. Per $C(n)=n^2$ si ha $C(2n)=4C(n)$. Se $C(n)=\log_2 n$ con $n>0$, allora $C(2n)=C(n)+1$. I tre modelli danno previsioni diverse al crescere dei dati. Nel caso logaritmico il raddoppio aggiunge un livello di dimezzamento.

::grafico{f="x;x^2;log(x)/log(2)" xmin=0 xmax=7 ymin=0 ymax=50 nomi="n,C" legenda="n;n^2;\log_2 n" punti="2,2;2,4;2,1;4,4;4,16;4,2" titolo="Modelli lineare, quadratico e logaritmico. Per il passaggio da $n=2$ a $n=4$, il costo quadratico passa da $4$ a $16$."}

:::

:::attenzione
L’ordine di crescita da solo lascia indeterminato il costo per una taglia piccola. Per esempio $C_1(n)=40n$ e $C_2(n)=n^2$ hanno costi $400$ e $100$ per $n=10$. Per $n=100$ i costi sono $4000$ e $10000$. Le due curve si incontrano dove $40n=n^2$, cioè per $n=40$, quindi $C_2$ è minore di $C_1$ per $0<n<40$ e maggiore per $n>40$.

::grafico{f="40*x;x^2+0*sqrt(x)" xmin=-10 xmax=90 ymin=0 ymax=8000 nomi="n,C" legenda="C_1=40n;C_2=n^2" punti="40,1600,pieno;10,400;10,100" segmenti="40,0,40,1600" titolo="Costi $C_1=40n$ e $C_2=n^2$: le curve si incontrano nel punto $(40,\,1600)$."}

Quando la taglia è nota e le operazioni sono confrontabili, il conteggio esplicito permette di scegliere tra i due metodi.
:::

## Conteggio nei cicli

:::definizione{#cicli titolo="Conteggio delle iterazioni"}
Per contare le esecuzioni di un’istruzione si individua il ciclo che la contiene. Se due cicli sono consecutivi, i conteggi si sommano. Se un ciclo interno completo da $m$ passi viene ripetuto per ciascuno degli $n$ passi esterni, il corpo interno viene eseguito $nm$ volte.

Se il numero di passi interni cambia, si somma il costo relativo a ogni valore dell’indice esterno. Per esempio, con indici da $0$ a $n-1$, una coppia $(i,j)$ con $i<j$ si può visitare fissando $i$ e facendo variare $j$ da $i+1$ a $n-1$. Per $i=0$ ci sono $n-1$ passi interni, per $i=1$ ce ne sono $n-2$ e per $i=n-1$ ce ne sono zero. Il totale è $\dfrac{n(n-1)}{2}$.
:::

::::teorema{#somma-interi titolo="Somma dei primi interi positivi"}
Per ogni intero $n\geq 1$ vale

$$
1+2+\cdots+n=\frac{n(n+1)}{2}.
$$

La formula dà il costo medio della ricerca lineare, il numero delle coppie $i<j$ e i confronti dell’ordinamento per selezione. Per esempio $1+2+\cdots+10=\dfrac{10\cdot 11}{2}=55$.

:::dimostrazione
Si scrive la somma $S$ due volte, la seconda in ordine inverso, e si sommano i termini che occupano la stessa posizione.

$$
\begin{aligned}
S&=1+2+\cdots+(n-1)+n\\[4pt]
S&=n+(n-1)+\cdots+2+1
\end{aligned}
$$

Nella posizione $k$ compaiono $k$ e $n+1-k$, la cui somma è $n+1$. Le posizioni sono $n$, quindi $2S=n(n+1)$ e perciò $S=\dfrac{n(n+1)}{2}$. Scrivendo $n-1$ al posto di $n$ si ottiene $1+2+\cdots+(n-1)=\dfrac{n(n-1)}{2}$, che è il numero delle coppie con $i<j$.
:::
::::

:::esempio{titolo="Una somma triangolare e un controllo finale"}
Il codice visita una volta ogni coppia di elementi distinti di `[2, 5, 8, 11]` e poi conta tutte le celle in un secondo ciclo. Si assume che ogni incremento valga un’operazione.

```python
valori = [2, 5, 8, 11]
n = len(valori)
operazioni = 0
for i in range(n):
    for j in range(i + 1, n):
        operazioni += 1
for valore in valori:
    operazioni += 1
assert operazioni == 10
```

Il ciclo interno esegue $3$, $2$, $1$ e $0$ incrementi. Il ciclo finale ne esegue $4$. Quindi il risultato è $3+2+1+0+4=10$. Le sei coppie visitate dal ciclo annidato sono i punti $(i,j)$ con $0\leq i<j\leq 3$.

::grafico{xmin=-0.5 xmax=3.7 ymin=-0.5 ymax=3.7 uguale=1 f="x" nomi="i,j" punti="0,1,pieno;0,2,pieno;0,3,pieno;1,2,pieno;1,3,pieno;2,3,pieno" legenda="j=i" titolo="Le coppie $(i,j)$ con $0\leq i<j\leq 3$ stanno sopra la retta $j=i$; per $i=0$, $1$, $2$ se ne contano $3$, $2$ e $1$."}

Per una taglia generica il conto è $\dfrac{n(n-1)}{2}+n$ e l’ordine è $\Theta(n^2)$. Gli indici sono interi e `range(inizio, fine)` include `inizio` ed esclude `fine`.
:::

:::esempio{titolo="Un indice che raddoppia"}
Un ciclo parte da `k = 1` e sostituisce `k` con `2 * k` finché `k < n`. Per $n=12$ il corpo viene eseguito con `k` uguale a `1`, `2`, `4` e `8`. Dopo il quarto aggiornamento `k` vale `16`, quindi la condizione è falsa. Dopo $t$ esecuzioni l’indice vale $2^t$. Per $n\geq 1$ il numero di esecuzioni è il più piccolo intero $t$ per cui $2^t\geq n$, ossia $\lceil\log_2 n\rceil$.
:::

## Ricerca lineare

:::definizione{#ricerca-lineare titolo="Ricerca lineare"}
La **ricerca lineare** visita gli elementi nell’ordine in cui compaiono. Per cercare la prima occorrenza, si parte dall’indice `0` e ci si ferma appena il valore coincide con il bersaglio. Se l’array viene esaurito, il bersaglio è assente. Si può applicare anche a una sequenza priva di ordinamento.

Se il bersaglio è all’indice $k$ e la ricerca termina lì per la prima volta, le celle lette sono quelle da $0$ a $k$, quindi le visite sono $k+1$. Se il bersaglio è assente da un elenco privo di ordine utilizzabile, si visitano tutte le $n$ celle. Per $n>0$ il miglior caso usa una visita e il peggior caso ne usa $n$. Una lista vuota dà subito esito di assenza con zero visite.
:::

:::esempio{titolo="Prima occorrenza e tutte le occorrenze"}
In `[7, 2, 7, 4]` il bersaglio `7` appare agli indici `0` e `2`. La ricerca della prima occorrenza restituisce `0` dopo una visita. Se il compito richiede *tutti* gli indici, una visita all’ultima cella è necessaria per escludere ulteriori occorrenze. In questo caso si eseguono quattro visite e si restituisce `[0, 2]`.

Se si raccoglie una lista con $k$ risultati, servono inoltre $k$ posizioni per l’output. Se basta il numero delle occorrenze, un contatore è sufficiente e la memoria ausiliaria è costante.
:::

## Ricerca binaria e intervallo residuo

:::definizione{#ricerca-binaria titolo="Ricerca binaria"}
La **ricerca binaria** usa un array ordinato in senso non decrescente secondo la stessa chiave usata nei confronti. Si numerano le celle da $0$ a $n-1$. L’intervallo residuo $[\ell,r]$ comprende entrambi gli estremi e contiene tutti gli indici ancora candidati. A ogni passo si visita la cella centrale $m=\left\lfloor\dfrac{\ell+r}{2}\right\rfloor$. Con due centri possibili si usa quello inferiore.

- Se il valore al centro è uguale al bersaglio, si restituisce $m$.
- Se è minore del bersaglio, tutti gli elementi con indice da $\ell$ a $m$ sono minori. Si pone $\ell=m+1$.
- Se è maggiore del bersaglio, tutti gli elementi con indice da $m$ a $r$ sono maggiori. Si pone $r=m-1$.

Dopo ogni aggiornamento l’intervallo contiene ancora tutte le posizioni possibili e la sua lunghezza diminuisce. Quando $\ell>r$ l’intervallo è vuoto e il bersaglio è assente.
:::

:::esempio{titolo="Tracciare gli estremi inclusi"}
Si cerca `17` in `[3, 8, 11, 14, 17, 20, 25, 31]`. Si parte da $[0,7]$. Il centro è `3` e contiene `14`, quindi resta $[4,7]$. Il nuovo centro è `5` e contiene `20`, quindi resta $[4,4]$. La visita all’indice `4` trova `17`. Gli indici visitati sono `3`, `5` e `4`.

::grafico{assi=0 uguale=1 xmin=-0.75 xmax=7.75 ymin=-0.65 ymax=2.7 linee="0,2 7,2;4,1 7,1" punti="0,2,pieno,0;3,2,pieno,3;7,2,pieno,7;4,1,pieno,4;5,1,pieno,5;7,1,pieno,7;4,0,pieno,4" titolo="Intervalli candidati dall’alto verso il basso. Si visitano prima il centro $3$, poi il centro $5$ e infine l’unico indice residuo $4$."}

:::

:::osservazione{#accesso-agli-indici titolo="Costo delle visite e degli accessi"}
Dopo ogni visita fallita resta al massimo la metà degli elementi, arrotondata per difetto. In particolare, se $n>0$, il peggior numero di visite è $\lfloor\log_2 n\rfloor+1$. Per $n=8$, la sequenza massima delle lunghezze prima delle visite è $8$, $4$, $2$, $1$. Si possono eseguire quattro visite. Nel miglior caso basta la prima, se il centro iniziale contiene il bersaglio.

La stima temporale $\Theta(\log n)$ nel caso peggiore presuppone accessi agli indici e confronti di costo costante. Se per raggiungere ogni centro bisogna scorrere una sequenza elemento per elemento, il numero di visite centrali da solo lascia fuori il costo di questi spostamenti.
:::

::::teorema{#visite-binaria titolo="Visite nel caso peggiore della ricerca binaria"}
Sia $n\geq 1$ il numero di elementi di un array ordinato. La ricerca binaria con estremi inclusi e centro inferiore esegue al massimo $\lfloor\log_2 n\rfloor+1$ visite. Il massimo viene raggiunto quando il bersaglio è maggiore di tutti gli elementi.

Il teorema permette di stimare il costo senza tracciare la ricerca. Per $n=100$ si ha $2^6=64\leq 100<128=2^7$, quindi $\lfloor\log_2 100\rfloor=6$ e le visite sono al massimo $7$.

:::dimostrazione
Si mostra che dopo una visita fallita resta al massimo metà dell’intervallo, arrotondata per difetto. Sia $L=r-\ell+1$ la lunghezza dell’intervallo $[\ell,r]$ e sia $m=\left\lfloor\dfrac{\ell+r}{2}\right\rfloor$ il centro. Gli indici a sinistra del centro sono

$$
m-\ell=\left\lfloor\frac{r-\ell}{2}\right\rfloor=\left\lfloor\frac{L-1}{2}\right\rfloor,
$$

mentre quelli a destra sono

$$
r-m=(L-1)-\left\lfloor\frac{L-1}{2}\right\rfloor=\left\lfloor\frac{L}{2}\right\rfloor.
$$

L’ultima uguaglianza si controlla nei due casi: per $L=2h$ entrambi i membri valgono $h$, per $L=2h+1$ valgono ancora $h$. Poiché $\left\lfloor\dfrac{L-1}{2}\right\rfloor\leq\left\lfloor\dfrac{L}{2}\right\rfloor$, dopo una visita fallita la lunghezza è al massimo $\left\lfloor\dfrac{L}{2}\right\rfloor$.

Partendo da $n$, dopo $t$ visite fallite la lunghezza è al massimo $\left\lfloor\dfrac{n}{2^t}\right\rfloor$. La visita numero $t+1$ avviene solo se l’intervallo è non vuoto, cioè se $\left\lfloor\dfrac{n}{2^t}\right\rfloor\geq 1$, ossia $2^t\leq n$. Poiché $t$ è intero, questa condizione equivale a $t\leq\lfloor\log_2 n\rfloor$, perciò le visite sono al massimo $\lfloor\log_2 n\rfloor+1$.

Se il bersaglio è maggiore di tutti gli elementi, ogni visita fallisce e resta la parte destra, che ha esattamente $\left\lfloor\dfrac{L}{2}\right\rfloor$ indici. Allora le lunghezze sono esattamente $n$, $\left\lfloor\dfrac{n}{2}\right\rfloor$, $\left\lfloor\dfrac{n}{4}\right\rfloor$, … e il numero di visite è uguale al massimo.
:::
::::

## Duplicati e test della ricerca

:::definizione{#prima-occorrenza titolo="Prima occorrenza con ricerca binaria"}
Con valori ripetuti il primo centro uguale al bersaglio può trovarsi nel mezzo del gruppo di duplicati. Per trovare l’indice più piccolo, si conserva un indice valido e si continua a cercare negli indici minori. A ogni uguaglianza si aggiorna il candidato. Se si arriva a un intervallo vuoto, il candidato conservato è il più piccolo tra quelli uguali al bersaglio.

In `[1, 4, 4, 4, 9]` il centro iniziale vale `4` all’indice `2`. Si registra `2` e si cerca in $[0,1]$. All’indice `0` si legge `1`, quindi resta $[1,1]$. All’indice `1` si legge `4` e il candidato diventa `1`.
:::

:::esempio{titolo="Misurare le celle visitate in Python"}
La funzione usa estremi inclusi e restituisce l’indice trovato insieme al numero di celle esaminate. Il valore `None` indica assenza. L’opzione `prima=True` conserva il candidato e cerca ancora a sinistra.

```python
def ricerca_binaria(valori, bersaglio, prima=False):
    sinistra = 0
    destra = len(valori) - 1
    visite = 0
    trovato = None
    while sinistra <= destra:
        centro = (sinistra + destra) // 2
        valore = valori[centro]
        visite += 1
        if valore == bersaglio:
            trovato = centro
            if not prima:
                break
            destra = centro - 1
        elif valore < bersaglio:
            sinistra = centro + 1
        else:
            destra = centro - 1
    return trovato, visite

assert ricerca_binaria([2, 4, 6, 8, 10], 8) == (3, 2)
assert ricerca_binaria([2, 4, 6, 8, 10], 7) == (None, 2)
assert ricerca_binaria([], 7) == (None, 0)
assert ricerca_binaria([1, 4, 4, 4, 9], 4, True) == (1, 3)
```

Nel caso con bersaglio `7`, i centri contengono `6` e `8`. Dopo `6` rimangono gli indici `3` e `4`. Il centro `3` contiene `8` e porta `destra` a `2`, mentre `sinistra` vale `3`. Il ciclo termina perché l’intervallo è vuoto. Nel caso dei duplicati si controlla anche che l’indice restituito sia il primo. È un requisito diverso dalla sola presenza del bersaglio.
:::

## Ordinamento per selezione

:::definizione{#ordinamento titolo="Ordinamento per selezione"}
Per ottenere un ordinamento crescente, a ogni passata si cerca il minimo della parte ancora da ordinare. Si porta quel valore nella prima cella di questa parte con uno scambio. A quel punto la cella contiene il valore che deve occupare quella posizione nell’array ordinato. All’inizio della passata successiva l’algoritmo esamina soltanto le celle ancora da ordinare.

Alla prima passata si confronta il minimo provvisorio con altri $n-1$ elementi. Alla seconda ne restano $n-2$ da confrontare. Il numero totale di confronti fra chiavi è

$$
C(n)= (n-1)+(n-2)+\cdots+1=\frac{n(n-1)}{2}.
$$

La selezione standard esegue questa scansione anche quando l’array è già ordinato, quindi il numero di confronti è lo stesso in tutti i casi di uguale taglia. Se la variante salta gli scambi fra una cella e sé stessa, gli scambi effettivi sono al massimo $n-1$ per $n\geq 1$.
:::

:::esempio{titolo="Due passate con un minimo già in sede"}
In `[9, 3, 7, 2, 6]` il minimo globale è `2` all’indice `3`. La prima passata lo scambia con `9` all’indice `0` e produce `[2, 3, 7, 9, 6]`. Nella seconda passata il minimo della parte da ordinare è `3`, già all’indice `1`. Si eseguono comunque tre confronti fra chiavi nella seconda passata. Gli scambi effettivi nelle prime due passate sono quindi uno, mentre i confronti sono $4+3=7$.

::grafico{assi=0 uguale=1 xmin=-2.8 xmax=5.4 ymin=-0.4 ymax=5.3 poligoni="0,2 1,2 1,3 0,3;0,0 2,0 2,1 0,1" linee="0,4 5,4 5,5 0,5 0,4;1,4 1,5;2,4 2,5;3,4 3,5;4,4 4,5;0,2 5,2 5,3 0,3 0,2;1,2 1,3;2,2 2,3;3,2 3,3;4,2 4,3;0,0 5,0 5,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1;4,0 4,1" etichette="0.5,4.5,9;1.5,4.5,3;2.5,4.5,7;3.5,4.5,2;4.5,4.5,6;0.5,2.5,2;1.5,2.5,3;2.5,2.5,7;3.5,2.5,9;4.5,2.5,6;0.5,0.5,2;1.5,0.5,3;2.5,0.5,7;3.5,0.5,9;4.5,0.5,6;-1.4,4.5,Inizio;-1.4,2.5,Passata 1;-1.4,0.5,Passata 2" vettori="0.5,3.95,3.4,3.05;3.5,3.95,0.6,3.05" titolo="Selezione su $[9,3,7,2,6]$. La prima passata scambia $9$ e $2$; le celle colorate formano la parte già ordinata."}

:::

## Inserzione, stabilità e memoria

:::definizione{#inserzione titolo="Ordinamento per inserzione"}
Nell’**ordinamento per inserzione** il prefisso a sinistra è già ordinato. Si conserva la nuova chiave in una variabile, si spostano di una cella a destra le chiavi del prefisso maggiori e si inserisce la chiave nello spazio liberato. La prima passata inserisce l’elemento di indice `1` nel prefisso formato dall’indice `0`.

In `[2, 6, 9, 5]`, dopo aver ordinato il prefisso `[2, 6, 9]`, si deve inserire `5`. Prima si sposta `9` all’indice `3`, poi si sposta `6` all’indice `2`. Il valore `2` precede `5`, quindi si inserisce `5` all’indice `1`. Il risultato è `[2, 5, 6, 9]`. Gli spostamenti sono due e i confronti fra chiavi sono tre, compreso quello che stabilisce l’arresto.

::grafico{assi=0 uguale=1 xmin=-0.6 xmax=4.6 ymin=-0.5 ymax=3.4 poligoni="1,0 2,0 2,1 1,1" linee="0,2 4,2 4,3 0,3 0,2;1,2 1,3;2,2 2,3;3,2 3,3;0,0 4,0 4,1 0,1 0,0;1,0 1,1;2,0 2,1;3,0 3,1" etichette="0.5,2.5,2;1.5,2.5,6;2.5,2.5,9;3.5,2.5,5;0.5,0.5,2;1.5,0.5,5;2.5,0.5,6;3.5,0.5,9" vettori="2.5,1.95,3.4,1.05;1.5,1.95,2.4,1.05;3.5,1.95,1.6,1.05" titolo="Inserzione di $5$ nel prefisso $[2,6,9]$. I valori $9$ e $6$ si spostano di una cella a destra e $5$ occupa l’indice $1$."}

:::

:::osservazione{#costo-inserzione titolo="Confronti e spostamenti nell’inserzione"}
Se l’array è già ordinato, ciascuna nuova chiave richiede un solo confronto con l’ultimo elemento del prefisso. Per $n\geq 1$ i confronti sono $n-1$ e gli spostamenti di elementi del prefisso sono zero. In un array con chiavi distinte in ordine strettamente decrescente, la chiave della passata $i$ è più piccola di tutti gli $i$ elementi del prefisso. I confronti e gli spostamenti sono quindi $1+2+\cdots+(n-1)=\dfrac{n(n-1)}{2}$ ciascuno. Il test sul limite sinistro del prefisso è un controllo di indice e resta fuori dal conteggio dei confronti fra chiavi.
:::

:::definizione{#stabilita titolo="Stabilità dell’ordinamento"}
Un ordinamento è **stabile** se due record con la stessa chiave mantengono il loro ordine relativo di ingresso. Per esempio, ordinando iscrizioni per anno, la stabilità conserva l’ordine di arrivo fra le iscrizioni dello stesso anno.

L’inserzione è stabile quando sposta solo chiavi *strettamente maggiori*. Una nuova chiave passa a sinistra delle chiavi maggiori e si ferma dopo le chiavi uguali già presenti. La selezione standard a scambi può invertire due record uguali. In `[(2,A), (2,B), (1,C)]`, il primo scambio fra `(2,A)` e `(1,C)` dà `[(1,C), (2,B), (2,A)]`. I record `A` e `B` condividono la chiave `2`, ma il loro ordine è invertito.
:::

:::definizione{#memoria-ausiliaria titolo="Memoria ausiliaria e modifica in sede"}
La **memoria ausiliaria** conta lo spazio aggiunto per lavorare, oltre alla struttura di ingresso. Selezione e inserzione nelle versioni descritte cambiano l’array originale e usano un numero costante di variabili temporanee. Questa memoria è $\Theta(1)$ rispetto al numero di record, assumendo che indici e chiavi occupino un numero costante di celle.

Se l’applicazione deve conservare l’array di partenza e ne prepara una copia con $n$ celle prima di ordinarla, il costo aggiuntivo della copia è $\Theta(n)$. Quindi una procedura che ordina in sede può far parte di un programma che occupa comunque spazio aggiuntivo lineare.
:::

## Scelta della strategia

:::esempio{#scelta-algoritmo titolo="Una ricerca oppure molte ricerche"}
Si vogliono cercare codici in $64$ record privi di ordinamento. Una ricerca lineare fallita visita $64$ celle. Per usare la ricerca binaria occorre prima disporre di un array ordinato. Se l’ordinamento scelto è la selezione standard, il suo costo in confronti fra chiavi è $\dfrac{64\cdot63}{2}=2016$. Dopo l’ordinamento ogni ricerca binaria visita al massimo $7$ celle.

Per un’unica ricerca in questo scenario, la preparazione della lista ordinata richiede già più lavoro della ricerca lineare. Per $100$ ricerche si possono invece confrontare $6400$ visite lineari nel caso peggiore con $2016$ confronti di preparazione più al massimo $700$ visite binarie. Se si attribuisce lo stesso costo alle due unità e si trascurano gli altri costi, il secondo totale è $2716$. Questo confronto vale quando si può riutilizzare l’ordinamento e le ricerche lineari richiedono tutte $64$ visite. La stima cambia se i bersagli compaiono in posizioni iniziali o se l’array viene modificato fra le richieste.

Con $q$ ricerche le due stime sono $64q$ e $2016+7q$. Esse coincidono per $57q=2016$, cioè per $q=\dfrac{2016}{57}\approx 35{,}4$. Per $q=35$ i totali sono $2240$ e $2261$, mentre per $q=36$ sono $2304$ e $2268$, quindi l’ordinamento iniziale dà il totale minore da $36$ ricerche in su.

::grafico{f="64*x;2016+7*x+0*sqrt(x)" xmin=-10 xmax=90 ymin=0 ymax=6000 nomi="q,C" legenda="C=64q;C=2016+7q" punti="35.37,2263.6,pieno" segmenti="35.37,0,35.37,2263.6" titolo="Costo di $q$ ricerche su $64$ record. Le rette si incontrano per $q=\dfrac{2016}{57}\approx 35{,}4$."}

:::

:::osservazione{titolo="La scelta dipende anche dall’output"}
Se il compito richiede il primo record registrato con una chiave ripetuta, trovare una qualunque occorrenza è insufficiente. Se i record sono in ordine di arrivo, una soluzione può ordinarli stabilmente per chiave e poi cercare l’indice più piccolo fra quelli con quella chiave. L’ordinamento stabile conserva l’ordine d’arrivo dentro ogni gruppo e la ricerca della prima occorrenza restituisce il suo primo record. Se serve il solo numero di occorrenze e i dati arrivano una volta sola, si può contare durante una scansione senza costruire un ordinamento.
:::
