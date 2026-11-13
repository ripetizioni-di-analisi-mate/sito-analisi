---
titolo: "Integrazione numerica"
sommario: "Stimare un integrale da una formula o da campioni con rettangoli, trapezi e Simpson, confrontando le stime e i loro errori."
---

## Intervalli, nodi e passo

:::definizione{#partizione titolo="Griglia uniforme"}
Una portata può variare durante il riempimento di un recipiente. Per stimare il volume entrato si divide il tempo in tratti e si calcola un contributo per tratto. Quando i tratti hanno tutti la stessa durata, i loro estremi formano una **griglia uniforme**. Siano $a<b$ gli estremi e $n$ un intero positivo che conta gli intervalli. La larghezza di ciascun intervallo, chiamata **passo**, è
$$
h=\frac{b-a}{n}.
$$
I nodi sono i punti $x_i=a+ih$ per $i=0,\ldots,n$. L’indice $i$ conta quanti passi separano il nodo dall’estremo sinistro. Il primo nodo è $x_0=a$ e l’ultimo è $x_n=b$. Ci sono $n+1$ nodi perché ogni intervallo aggiunge un estremo destro al nodo iniziale.
:::

:::esempio{titolo="Una griglia che comincia da 2"}
Su $[2,8]$ con quattro intervalli, l’ampiezza totale è $8-2=6$. Il passo vale quindi $\dfrac{6}{4}=1{,}5$. Partendo da $2$ e aggiungendo il passo quattro volte si ottengono i cinque nodi
$$
2,\qquad 3{,}5,\qquad 5,\qquad 6{,}5,\qquad 8.
$$
Gli intervalli consecutivi condividono un estremo. Per esempio $3{,}5$ è il bordo destro del primo tratto e il bordo sinistro del secondo. Se una tabella riporta cinque nodi distinti in ordine, le differenze consecutive sono quattro. La loro uguaglianza permette di riconoscere una griglia uniforme anche quando il passo è assente dalla traccia.
:::

:::osservazione
Una formula per $f$ permette di valutare la funzione in punti nuovi. Un elenco di campioni misurati, invece, fornisce valori solo ai tempi registrati. Per usare un metodo che richiede altri campioni occorre misurarli oppure dichiarare un modello che li stimi. Se un sensore registra i dati ai tempi $0$, $2$ e $4\,\mathrm{s}$, si possono usare subito due trapezi. Per il metodo dei punti medi servono le misure a $1$ e $3\,\mathrm{s}$.
:::

## Rettangoli sinistri e destri

:::definizione{#rettangoli titolo="Rettangoli sinistri e destri"}
Si considera una funzione continua $f$ su $[a,b]$ e una griglia uniforme di passo $h$. Si può approssimare $f$ su ogni tratto con un’altezza costante. Usando l’altezza del bordo sinistro si ottiene la somma dei **rettangoli sinistri**, indicata con $L_n$. Scegliendo il bordo destro si ottiene $R_n$.
$$
\begin{aligned}
L_n &= h\sum_{i=0}^{n-1}f(x_i),\\[6pt]
R_n &= h\sum_{i=1}^{n}f(x_i).
\end{aligned}
$$
Il fattore $h$ è la base di ciascun rettangolo. Gli estremi delle due somme specificano quali valori entrano nel calcolo. Con $n=3$ si usano $x_0,x_1,x_2$ a sinistra e $x_1,x_2,x_3$ a destra. Un’altezza negativa fornisce un contributo con segno negativo.
:::

:::esempio{titolo="Stime dai due bordi"}
Per $f(x)=x^2$ su $[0,2]$ con due intervalli il passo è $1$. Le altezze ai nodi $0$, $1$ e $2$ sono rispettivamente $0$, $1$ e $4$. Il primo rettangolo sinistro ha altezza zero. I due risultati sono
$$
\begin{aligned}
L_2 &= 1(0+1)=1,\\[4pt]
R_2 &= 1(1+4)=5.
\end{aligned}
$$
La funzione cresce su $[0,2]$, quindi in ogni tratto il bordo sinistro fornisce l’altezza minima e quello destro la massima. L’integrale vale $\dfrac{8}{3}$ e appartiene all’intervallo fra $1$ e $5$.

::grafico{f="x^2" poligoni="1,0 1,1 2,1 2,0" segmenti="0,1,1,1;1,0,1,4;1,4,2,4;2,0,2,4" punti="0,0,pieno;1,1,pieno;2,4,pieno" xmin=-0.5 xmax=2.7 ymin=-0.6 ymax=4.9 legenda="f(x)=x^2" titolo="Il rettangolo sinistro di altezza positiva è evidenziato. I bordi tratteggiati mostrano le altezze dei rettangoli destri."}
:::

:::osservazione{#monotonia-rettangoli titolo="Limiti ottenuti dalla monotonia"}
Per una funzione crescente si ha $L_n\le I\le R_n$, dove $I$ è l’integrale esatto. Per una funzione decrescente vale $R_n\le I\le L_n$. Queste disuguaglianze restano valide quando i valori sono negativi. Per esempio, se in un tratto una funzione crescente parte da $-5$ e arriva a $-1$, ogni valore è maggiore o uguale a $-5$. Il prodotto per la larghezza positiva conserva l’ordine.

Sottraendo le due somme, i valori nei nodi interni si elidono. Rimane
$$
R_n-L_n=h\bigl(f(b)-f(a)\bigr).
$$
Per una funzione monotona, questo permette di misurare l’ampiezza dell’intervallo che contiene l’integrale a partire dalle due sole altezze agli estremi. Per una funzione generica servono informazioni sul suo andamento. Se $f(0)=f(2)=0$ ma $f(1)=1$ e il grafico unisce i tre punti con segmenti, con un solo intervallo le due somme coincidono a zero. L’integrale è l’area del triangolo, pari a $1$.
:::

## Rettangoli con altezza al centro

:::definizione{#punti-medi titolo="Metodo dei punti medi"}
Il **metodo dei punti medi** usa, per ogni tratto, il valore della funzione a metà della base. Sulla griglia uniforme il centro dell’intervallo $[x_i,x_{i+1}]$ è $m_i=x_i+\dfrac{h}{2}$. La somma dei rettangoli, indicata con $M_n$, vale
$$
M_n=h\sum_{i=0}^{n-1}f(m_i).
$$
Per una funzione affine, l’altezza al centro è la media delle due altezze agli estremi del tratto. Il suo prodotto per la base coincide con l’integrale sul tratto, anche se la retta attraversa l’asse orizzontale.
:::

:::esempio{titolo="Campionare una parabola a metà del passo"}
Su $[0,2]$ con due intervalli si ha $h=1$, quindi i punti medi sono $0{,}5$ e $1{,}5$. Per $f(x)=x^2$ le altezze diventano $0{,}25$ e $2{,}25$. Si ottiene
$$
M_2=1(0{,}25+2{,}25)=2{,}5.
$$
La stima si può confrontare con $\dfrac{8}{3}$, ottenuto dalla primitiva. L’errore assoluto vale $\dfrac{8}{3}-\dfrac{5}{2}=\dfrac{1}{6}$. Una valutazione ai nodi $0$, $1$, $2$ darebbe informazioni diverse, perché nessuno di questi è il centro di un tratto.
:::

:::osservazione
Se $f$ è convessa, per ogni coppia di punti simmetrici rispetto al centro, la media delle loro altezze è almeno l’altezza al centro. Integrando questa disuguaglianza sulle coppie si ottiene $M_n\le I$. La disuguaglianza si inverte per una funzione concava. La sola monotonia di $f$ permette di ordinare le stime dai bordi, mentre per ordinare la stima al centro con l’integrale occorre un’ipotesi sulla curvatura.
:::

## Unire i campioni con segmenti

:::definizione{#trapezi titolo="Metodo composto dei trapezi"}
Quando sono noti i valori agli estremi di un tratto, il **metodo dei trapezi** approssima la funzione con il segmento che unisce i due punti del grafico. L’integrale del segmento è la larghezza per la media delle due altezze. Per una griglia uniforme, sommando i contributi si ottiene
$$
T_n=\frac{h}{2}
\left[f(x_0)+2\sum_{i=1}^{n-1}f(x_i)+f(x_n)\right].
$$
Il peso di un nodo interno è $2$ nella somma perché la sua altezza compare nel trapezio alla sua sinistra e in quello alla sua destra. Ciascun estremo della griglia compare una volta. Per $n=1$ ci sono solo i due estremi e la somma dei termini interni è vuota.
:::

:::esempio{titolo="La retta e la parabola"}
Per $f(x)=2x+1$ su $[0,3]$ il tratto di grafico coincide con il segmento che unisce i valori $1$ e $7$. Il singolo trapezio dà $3\cdot\dfrac{1+7}{2}=12$, che è il valore esatto. Per $f(x)=x^2$ su $[0,2]$ e due intervalli, le altezze sono $0$, $1$ e $4$, quindi $T_2=\dfrac{0+2\cdot1+4}{2}=3$. La parabola è convessa, perciò i segmenti sono sopra il suo grafico e la stima è maggiore dell’integrale.

::grafico{f="x^2" poligoni="0,0 1,1 2,4 2,0" segmenti="0,0,1,1;1,1,2,4;1,0,1,1;2,0,2,4" punti="1,1,pieno;2,4,pieno" xmin=-0.5 xmax=2.7 ymin=-0.6 ymax=4.9 legenda="f(x)=x^2" titolo="Due trapezi approssimano l’integrale della parabola. Ogni segmento unisce due nodi consecutivi."}
:::

:::osservazione
Sulla stessa griglia $T_n=\dfrac{L_n+R_n}{2}$. Per ogni tratto, la media dei contributi dei due rettangoli è $h$ per la media delle altezze. Questa identità permette di controllare un calcolo sui bordi senza ricalcolare la stima trapezoidale. Se si conoscono $L_n=5$ e $R_n=9$, per esempio, il valore di $T_n$ è $7$.
:::

## Approssimare con parabole

:::definizione{#simpson titolo="Metodo composto di Simpson"}
Il **metodo di Simpson** approssima il grafico con una parabola ogni due intervalli di uguale ampiezza $h$. Tre nodi consecutivi determinano la parabola, i cui valori nei tre nodi coincidono con quelli di $f$. Una coppia di intervalli costituisce un **pannello**. Il contributo di un pannello che comincia in $x_{2j}$ è
$$
\frac{h}{3}
\bigl[f(x_{2j})+4f(x_{2j+1})+f(x_{2j+2})\bigr].
$$
La formula composta richiede $n$ pari e positivo. Il numero di pannelli è quindi $\dfrac{n}{2}$. Gli estremi globali hanno peso $1$. I nodi con indice dispari hanno peso $4$ perché sono centri di pannello. I nodi interni con indice pari hanno peso $2$ perché sono estremi di due pannelli. Con quattro intervalli la successione è $1,4,2,4,1$.
:::

:::esempio{titolo="Calcolare un pannello"}
Con $f(x)=x^2$ su $[0,2]$ e due intervalli, $h=1$. Le tre altezze sono $0$, $1$ e $4$. La formula fornisce
$$
S_2=\frac{1}{3}(0+4\cdot1+4)=\frac{8}{3}.
$$
La parabola che interpola le altezze coincide con $f$, quindi la stima è esatta. Il peso $4$ moltiplica l’altezza a $x=1$, che è un nodo della griglia e il centro del pannello $[0,2]$.
:::

:::osservazione{#esattezza-simpson titolo="Perché vale anche per il grado tre"}
La formula è esatta anche per i polinomi di grado tre. Per capirlo si prende il centro del pannello come origine locale e si indica con $u$ la distanza con segno da quel centro. La parte cubica $cu^3$ è dispari, perciò il suo integrale su $[-h,h]$ è zero. Anche il suo contributo alla formula è zero perché i valori ai bordi si elidono e il valore al centro è nullo. I termini rimanenti hanno grado al più due, quindi coincidono con la loro interpolante quadratica. Per esempio per $u^3+u^2$ su $[-1,1]$, l’integrale è $\dfrac{2}{3}$, che è il risultato di Simpson.
:::

:::esempio{titolo="Un integrando di quarto grado"}
Per $f(x)=x^4$ su $[0,2]$ e due intervalli, il pannello usa le altezze $0$, $1$ e $16$. Ne risulta $S_2=\dfrac{0+4+16}{3}=\dfrac{20}{3}$. L’integrale esatto è $\dfrac{32}{5}$ perché una primitiva è $\dfrac{x^5}{5}$. La stima supera il valore esatto di $\dfrac{4}{15}$. La griglia rispetta le ipotesi della formula e il calcolo è corretto. La differenza dipende dall’approssimazione della funzione con la parabola interpolante.
:::

## Misure irregolari, segno e unità

:::definizione{#dati-irregolari titolo="Trapezi con passi diversi"}
Per campioni misurati a nodi $x_0<x_1<\cdots<x_n$, si calcola separatamente la larghezza $x_{i+1}-x_i$ di ciascun tratto. Il trapezio corrispondente vale
$$
(x_{i+1}-x_i)\frac{f(x_i)+f(x_{i+1})}{2}.
$$
Si sommano quindi tutti i contributi. Se le larghezze sono diverse, la stessa misura interna può avere un peso diverso da quello di un altro nodo interno. Per esempio, ai tempi $0$, $1$ e $3\,\mathrm{s}$ si misurano portate di $2$, $4$ e $8\,\mathrm{L/s}$. Il primo tratto fornisce $1\cdot3=3\,\mathrm{L}$ e il secondo $2\cdot6=12\,\mathrm{L}$. Il totale stimato è $15\,\mathrm{L}$.
:::

:::osservazione
Se si stima un volume di $18\,\mathrm{L}$ in $6\,\mathrm{s}$, la portata costante che darebbe lo stesso volume è $3\,\mathrm{L/s}$. Si trova dividendo l’integrale stimato per la durata. Quando i campioni sono irregolari, la media aritmetica delle sole altezze perde l’informazione sulle durate. Calcolare prima i contributi separati conserva il peso temporale di ciascun tratto.
:::

:::attenzione
Per applicare il singolo pannello di Simpson a tre misure, i due intervalli devono avere la stessa ampiezza. I tempi $0$, $1$ e $3\,\mathrm{s}$ danno passi di $1$ e $2\,\mathrm{s}$, quindi i pesi $1,4,1$ con un passo comune non si applicano. Il metodo dei trapezi sui due tratti resta disponibile, così come un’interpolazione con ipotesi dichiarate e pesi ricavati per quella griglia.
:::

:::esempio{#segno-unita titolo="Spostamento e distanza"}
Una velocità negativa descrive un moto nel verso opposto a quello positivo. L’integrale di $v$ è lo **spostamento** nel modello. L’integrale di $|v|$ è la **distanza percorsa** nel modello. Per un profilo lineare con velocità iniziale $2\,\mathrm{m/s}$, velocità finale $-2\,\mathrm{m/s}$ e durata $4\,\mathrm{s}$, il cambio di verso avviene a $2\,\mathrm{s}$. I triangoli sopra e sotto l’asse dei tempi hanno entrambi area di $2\cdot\dfrac{2}{2}=2\,\mathrm m$. Si sottraggono per ottenere lo spostamento di $0\,\mathrm m$ e si sommano per ottenere la distanza di $4\,\mathrm m$. Se i dati descrivono solo gli estremi, questi valori valgono per il modello lineare fra i campioni.

::grafico{f="2-x" area="2-x;0;0;4" punti="0,2,pieno;2,0,pieno;4,-2,pieno" etichette="1,0.45,+;3,-0.5,−" xmin=-0.7 xmax=4.8 ymin=-2.7 ymax=2.7 nomi="t,v" legenda="v=2-t" titolo="I due triangoli hanno area uguale. L’integrale della velocità li conta con segni opposti."}
:::

## Raffinare e controllare la stima

:::definizione{#raffinamento titolo="Raffinamento e differenza tra stime"}
Su un intervallo fisso, raddoppiare il numero di tratti dimezza $h$. Se $Q_n$ e $Q_{2n}$ sono i risultati dello stesso metodo sulle due griglie, $|Q_{2n}-Q_n|$ misura quanto è cambiata la stima. L’**errore assoluto** di $Q_{2n}$ è invece $|I-Q_{2n}|$. Il primo valore si può calcolare usando le due stime. Il secondo richiede il valore esatto $I$, oppure informazioni sufficienti per stimarlo o limitarlo.
:::

:::esempio{titolo="Due trapezi e quattro trapezi"}
Per $x^2$ su $[0,2]$, l’integrale esatto è $\dfrac{8}{3}$. Con due e quattro trapezi si ottengono $3$ e $\dfrac{11}{4}$. La variazione fra le stime è $3-\dfrac{11}{4}=\dfrac{1}{4}$. L’errore assoluto di quattro trapezi è $\dfrac{11}{4}-\dfrac{8}{3}=\dfrac{1}{12}$. Per questo integrando il dimezzamento del passo riduce l’errore a un quarto. Il valore $\dfrac{1}{4}$ calcolato fra le due stime e il rapporto fra gli errori sono quantità diverse, anche se qui coincidono numericamente.
:::

:::attenzione
Due griglie possono saltare entrambe una variazione stretta. Per esempio su $[0,2]$ i trapezi con $n=2$ campionano ai nodi $0$, $1$, $2$, mentre quelli con $n=4$ aggiungono $0{,}5$ e $1{,}5$. Una funzione continua può valere zero in tutti questi punti e avere un picco triangolare tra $0$ e $0{,}5$. Entrambe le stime danno zero, mentre l’integrale è positivo. Quando è disponibile una garanzia, come il limite ricavato dai due rettangoli per una funzione monotona, è possibile confrontarla direttamente con la tolleranza richiesta.
:::

:::esempio{titolo="Un numero di intervalli per la tolleranza"}
Sia $f$ continua e crescente su $[0,4]$, con $f(0)=1$ e $f(4)=9$. Si vuole un intervallo di ampiezza al più $0{,}5$ che contenga l’integrale. Il passo vale $\dfrac{4}{n}$ e la distanza fra le stime dai due bordi è
$$
R_n-L_n=\frac{4}{n}(9-1)=\frac{32}{n}.
$$
La richiesta $\dfrac{32}{n}\le 0{,}5$ equivale a $n\ge64$. Con $64$ intervalli la differenza fra le stime è esattamente $0{,}5$. La loro media dista al massimo $0{,}25$ dall’integrale perché l’integrale è compreso fra i due valori. In una tabella di sole misure, per applicare questo limite occorre sapere che la funzione è monotona anche fra i campioni.
:::

:::osservazione
Il raffinamento riguarda la discretizzazione. Se un sensore registra ogni portata con uno scarto costante di $1\,\mathrm{L/s}$, tutti i trapezi aggiungono alla stima l’integrale di quella costante. Su $5\,\mathrm{s}$ lo scarto vale $5\,\mathrm L$, indipendentemente dal numero di intervalli. Per distinguere l’effetto del sensore da quello del passo si confrontano le griglie sullo stesso profilo e si controlla a parte l’accuratezza delle misure.
:::

## Laboratorio Python

:::esempio{#laboratorio-integrazione titolo="Nodi, pesi e confronto nel codice"}
Le due funzioni ricevono un integrando valutabile, due estremi crescenti e un numero intero positivo di intervalli. In Python, `range(1, n)` visita gli indici interni da `1` a `n-1`. Gli estremi si aggiungono una volta sola. Simpson distingue i nodi interni pari e dispari. Le funzioni restituiscono la stima, che si può usare in un calcolo successivo.

```python
def passo(a, b, n):
    if type(n) is not int or n <= 0 or not a < b:
        raise ValueError("Serve a < b e un intero n positivo")
    return (b - a) / n


def trapezi(f, a, b, n):
    h = passo(a, b, n)
    interni = sum(f(a + i * h) for i in range(1, n))
    return h * ((f(a) + f(b)) / 2 + interni)


def simpson(f, a, b, n):
    h = passo(a, b, n)
    if n % 2:
        raise ValueError("Simpson richiede un n pari")
    totale = f(a) + f(b)
    for i in range(1, n):
        peso = 4 if i % 2 else 2
        totale += peso * f(a + i * h)
    return h * totale / 3


def quadrato(x):
    return x * x


assert trapezi(quadrato, 0, 2, 2) == 3
assert trapezi(quadrato, 0, 2, 4) == 2.75
assert trapezi(quadrato, 0, 2, 8) == 2.6875
assert abs(simpson(quadrato, 0, 2, 2) - 8 / 3) < 1e-12
```

I risultati trapezoidali sono $3$, $2{,}75$ e $2{,}6875$. In questo esempio i valori intermedi dei trapezi hanno rappresentazione esatta in virgola mobile binaria. Per Simpson si confronta il valore restituito con $\dfrac{8}{3}$ entro una tolleranza perché la divisione per $3$ può introdurre un arrotondamento. Il controllo con una funzione dall’integrale noto permette di individuare errori di indice o di peso prima di usare il codice su nuovi dati.
:::
