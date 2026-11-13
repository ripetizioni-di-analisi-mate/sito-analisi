---
titolo: "Approssimazioni e ricerca degli zeri"
sommario: "Misurare gli errori numerici e approssimare gli zeri con bisezione e metodo di Newton."
---

## Misurare gli errori

:::definizione{#errore titolo="Errore assoluto e relativo"}
Sia $x$ il valore di riferimento e sia $\widehat x$ il valore approssimato, espresso nella stessa unità. Lo **scarto con segno** è $s=\widehat x-x$. Il suo segno indica se l'approssimazione è una sovrastima o una sottostima. L'**errore assoluto** misura la distanza tra i due valori e ha la loro stessa unità.
$$
E_{\mathrm{ass}}=|\widehat x-x|.
$$
Se $x\ne 0$, l'**errore relativo** esprime quante volte l'errore assoluto sta nel valore assoluto del riferimento.
$$
E_{\mathrm{rel}}=\frac{E_{\mathrm{ass}}}{|x|}.
$$
Il rapporto è privo di unità. Per esprimerlo in percentuale si moltiplica il suo valore numerico per $100$ e si aggiunge il simbolo di percentuale. Per esempio, un errore assoluto di $0{,}2\,\mathrm{m}$ su $10\,\mathrm{m}$ dà un errore relativo di $0{,}02$, pari al $2\%$.
:::

:::esempio{titolo="Verso e dimensione dello scarto"}
Una sonda dovrebbe leggere $80\,\mathrm{cm}$ su un riferimento da laboratorio. La lettura è $78\,\mathrm{cm}$. Lo scarto è $-2\,\mathrm{cm}$, perciò la lettura sottostima il riferimento. L'errore assoluto è $2\,\mathrm{cm}$ e l'errore relativo vale $\dfrac{2}{80}=0{,}025$. Lo stesso errore assoluto su un riferimento da $200\,\mathrm{cm}$ corrisponde all'$1\%$.
:::

:::osservazione{#riferimento-nullo titolo="Riferimento nullo e tolleranza assoluta"}
Vicino a zero anche uno scarto piccolo può produrre una percentuale alta. Se la tensione attesa è $0{,}01\,\mathrm{V}$ e la lettura è $0{,}02\,\mathrm{V}$, l'errore assoluto è $0{,}01\,\mathrm{V}$ e quello relativo è $100\%$. Quando il riferimento è esattamente zero, l'errore relativo standard è indefinito, poiché richiederebbe una divisione per zero. Un controllo di azzeramento può invece richiedere che la lettura disti da zero al più $0{,}02\,\mathrm{V}$.
:::

:::definizione{#tolleranze-miste titolo="Tolleranze assolute e relative"}
Una soglia assoluta $\tau_{\mathrm{ass}}$ e una soglia relativa $\tau_{\mathrm{rel}}$ possono entrare in uno stesso criterio. Si accetta la misura se
$$
|\widehat x-x|\leq \tau_{\mathrm{ass}}+\tau_{\mathrm{rel}}|x|.
$$
La prima soglia ha l'unità di misura di $x$. La seconda è un rapporto senza unità. La somma conserva una soglia positiva quando $x=0$ e cresce con la scala del riferimento. Per esempio, con $\tau_{\mathrm{ass}}=0{,}02\,\mathrm{V}$ e $\tau_{\mathrm{rel}}=0{,}01$, la soglia a $3\,\mathrm{V}$ è $0{,}05\,\mathrm{V}$. A zero si riduce a $0{,}02\,\mathrm{V}$.
:::

## Arrotondare e rappresentare i numeri

:::definizione{#arrotondamento titolo="Arrotondamento alla griglia più vicina"}
Arrotondare ai multipli di un passo positivo $h$ significa scegliere il multiplo di $h$ più vicino. Due multipli consecutivi distano $h$, quindi qualsiasi valore fra loro dista da quello più vicino al più $\dfrac{h}{2}$. Se il valore è esattamente a metà, una convenzione stabilisce quale dei due multipli scegliere e lo scarto resta $\dfrac{h}{2}$.

Al centesimo il passo è $0{,}01$, perciò il massimo errore dovuto a un singolo arrotondamento è $0{,}005$. Il valore $1{,}236$ si arrotonda a $1{,}24$ e l'errore effettivo è $0{,}004$. Conoscere il passo consente di stimare la perdita di precisione anche quando il valore esatto è ignoto.
:::

:::esempio{titolo="Intervallo compatibile con una lettura"}
Un display che arrotonda al decimo mostra $12{,}4\,\mathrm{cm}$. Se l'unica fonte di errore è l'arrotondamento, la lunghezza appartiene all'intervallo chiuso da $12{,}35\,\mathrm{cm}$ a $12{,}45\,\mathrm{cm}$. Gli estremi rappresentano i due casi a metà e la regola adottata dal display può escluderne uno o entrambi. Il limite di $0{,}05\,\mathrm{cm}$ resta valido anche senza conoscere quella regola.
:::

:::definizione{#virgola-mobile titolo="Rappresentazione binaria a precisione finita"}
In una rappresentazione binaria a precisione finita, la parte significativa del numero usa un numero limitato di cifre e la potenza di due fissa la scala. Le frazioni come $\dfrac{3}{8}$ ammettono una scrittura binaria finita, perché $\dfrac{3}{8}=\dfrac{1}{4}+\dfrac{1}{8}$. In base due la scrittura è `0.011`. Invece $\dfrac{1}{10}$ ha uno sviluppo binario infinito, perché il denominatore ridotto contiene il fattore $5$. Un tipo binario con un numero finito di cifre memorizza perciò un valore vicino a $\dfrac{1}{10}$.

Con i consueti `float` binari a 64 bit, l'espressione Python `0.1 + 0.2 == 0.3` restituisce `False`. La somma vale il numero rappresentato da `0.30000000000000004`. La differenza dalla rappresentazione di `0.3` è circa $5{,}55\cdot10^{-17}$. Per confrontare queste letture numeriche, un test come `abs((0.1 + 0.2) - 0.3) <= 1e-12` restituisce `True`, perché lo scarto è inferiore alla soglia impostata.
:::

:::esempio{titolo="Decimali esatti e contatori interi"}
Se i dati sono prezzi in centesimi, si possono memorizzare $10$ e $20$ come interi. La loro somma è esattamente $30$ centesimi. In Python si può anche scrivere `Decimal("0.1") + Decimal("0.2")`, dopo l'importazione di `Decimal` da `decimal`. Il risultato è `Decimal("0.3")`. Le stringhe costruiscono direttamente i valori decimali. Passare `0.1` come `float` a `Decimal` conserva invece il valore binario già approssimato.
:::

## Stimare l'errore dopo un calcolo

:::teorema{#propagazione titolo="Somme e differenze con dati approssimati"}
Siano $\widehat a$ e $\widehat b$ approssimazioni di $a$ e $b$ con errori assoluti rispettivamente al più $\varepsilon_a$ e $\varepsilon_b$. Sia la somma sia la differenza delle approssimazioni hanno un errore assoluto al più $\varepsilon_a+\varepsilon_b$, considerando soltanto l'errore sui dati. Infatti lo scarto è $(\widehat a-a)\pm(\widehat b-b)$ e il valore assoluto di questa espressione è al più la somma dei valori assoluti dei due scarti.

Se due pesate valgono rispettivamente $41{,}2\,\mathrm{g}$ e $16{,}8\,\mathrm{g}$, ciascuna con errore al più $0{,}1\,\mathrm{g}$, la differenza è $24{,}4\,\mathrm{g}$ con errore al più $0{,}2\,\mathrm{g}$. L'errore può essere più piccolo se gli scarti delle letture si compensano.
:::

:::esempio{titolo="Differenza fra dati vicini"}
Due distanze riportate al centesimo sono $2{,}31\,\mathrm{m}$ e $2{,}30\,\mathrm{m}$. La differenza calcolata è $0{,}01\,\mathrm{m}$. Ogni arrotondamento può aver introdotto uno scarto fino a $0{,}005\,\mathrm{m}$, perciò l'errore sulla differenza può raggiungere $0{,}01\,\mathrm{m}$. La differenza è quindi della stessa dimensione del limite sull'errore. Questo esempio mostra la **cancellazione** nella sottrazione di dati vicini. Le cifre comuni si eliminano nel risultato, mentre l'incertezza delle letture iniziali rimane.
:::

:::osservazione{#arrotondamenti-intermedi titolo="Arrotondamenti intermedi e finali"}
Conservare cifre supplementari durante il calcolo riduce gli arrotondamenti introdotti dalla procedura. Per esempio, i due valori $1{,}24$ e $1{,}24$ danno come somma $2{,}48$, che arrotondata ai decimi vale $2{,}5$. Arrotondando prima ciascun addendo ai decimi si sommano invece $1{,}2$ e $1{,}2$, ottenendo $2{,}4$. Il risultato richiesto alla precisione di un decimo cambia perché i due scarti intermedi hanno lo stesso segno.
:::

## Isolare uno zero

:::teorema{#cambio-segno titolo="Continuità e cambio di segno"}
Uno **zero** di $f$ è un numero $r$ per il quale $f(r)=0$. Se $f$ è continua su $[a,b]$ e $f(a)$ e $f(b)$ hanno segni strettamente opposti, allora esiste almeno uno zero in $(a,b)$. Per il teorema dei valori intermedi, una funzione continua assume tutti i valori fra $f(a)$ e $f(b)$. Poiché zero è compreso fra quei due valori, viene assunto in almeno un punto interno.

Per esempio, $f(x)=x^2-2$ è continua su $[1,2]$ e $f(1)=-1$, $f(2)=2$. La funzione è anche strettamente crescente in quell'intervallo, quindi lo zero è unico. Il cambio di segno garantisce l'esistenza e la monotonia stretta fornisce l'unicità. Se un estremo vale già zero, si può restituire quell'estremo senza avviare un metodo iterativo.
:::

:::attenzione
Il cambio di segno permette di dedurre l'esistenza di uno zero soltanto con la continuità su tutto l'intervallo. Per $f(x)=\dfrac{1}{x}$ su $[-1,1]$ si hanno valori di segno opposto agli estremi, ma la funzione è indefinita in zero e il suo valore è sempre diverso da zero nel dominio.

Il teorema fornisce una condizione sufficiente, quindi uno zero può esistere anche con estremi dello stesso segno. La funzione $f(x)=x^2$ vale $1$ in entrambi gli estremi di $[-1,1]$ e si annulla al centro.

::grafico{f="x^2" xmin=-1.4 xmax=1.4 ymin=-0.35 ymax=2 punti="-1,1;1,1;0,0" titolo="Gli estremi di $[-1,1]$ hanno segno positivo, mentre $f(0)=0$."}
:::

:::esempio{titolo="Due radici con intervalli separati"}
La funzione $f(x)=x^2-4$ vale $5$ sia in $-3$ sia in $3$, quindi gli estremi di $[-3,3]$ hanno lo stesso segno. Inserendo il punto $0$, dove $f(0)=-4$, si ottengono due intervalli con cambio di segno. Uno è $[-3,0]$, dove la funzione è strettamente decrescente, e l'altro è $[0,3]$, dove è strettamente crescente. Si può quindi cercare una radice in ciascun intervallo.
:::

## Conservare lo zero con la bisezione

:::definizione{#bisezione titolo="Passo di bisezione"}
Si parte da un intervallo $[a,b]$ su cui $f$ è continua e i valori agli estremi hanno segni strettamente opposti. Si calcola il punto medio $m=a+\dfrac{b-a}{2}$ e si valuta $f(m)$.

- Se $f(m)=0$, il punto medio è uno zero.
- Se $f(m)$ ha lo stesso segno di $f(a)$, si conserva $[m,b]$.
- Se $f(m)$ ha lo stesso segno di $f(b)$, si conserva $[a,m]$.

A ogni passo senza arresto rimane un intervallo con estremi di segno opposto. Questa proprietà è l'**invariante** del metodo. Per la continuità rimane quindi almeno uno zero nell'intervallo conservato.
:::

:::esempio{titolo="Due passi per la radice di due"}
Per $f(x)=x^2-2$ si parte da $[1,2]$. Il primo medio è $1{,}5$ e $f(1{,}5)=0{,}25>0$, quindi si sostituisce l'estremo destro e rimane $[1,1{,}5]$. Il secondo medio è $1{,}25$ e $f(1{,}25)=-0{,}4375<0$, quindi si sostituisce l'estremo sinistro. Lo zero appartiene a $[1{,}25;1{,}5]$ e la nuova stima al centro è $1{,}375$.

::grafico{f="x^2-2" xmin=-0.15 xmax=2.12 ymin=-1.35 ymax=2.3 punti="1,-1;1.5,0.25;1.25,-0.4375;2,2" segmenti="1.25,0,1.25,-0.4375;1.5,0,1.5,0.25" titolo="Dopo due passi lo zero si trova fra le ascisse $1{,}25$ e $1{,}5$."}
:::

:::osservazione{#valutazioni-bisezione titolo="Valutazioni e confronto dei segni"}
Se si memorizza $f(a)$, ogni passo richiede una sola nuova valutazione, quella del punto medio. Quando si sostituisce l'estremo sinistro, si aggiorna anche il valore memorizzato. Quando si sostituisce soltanto l'estremo destro, il valore all'estremo sinistro resta valido. Si possono confrontare direttamente i segni di $f(a)$ e $f(m)$, evitando un prodotto che in aritmetica finita potrebbe essere troppo grande o arrotondarsi a zero.
:::

## Fermarsi con un limite sull'errore

:::teorema{#tolleranza titolo="Ampiezza residua e tolleranza sul medio"}
Sia $L=b-a$ la larghezza iniziale. Dopo $k$ dimezzamenti effettivi, in assenza di una radice già trovata, il nuovo intervallo ha larghezza $\dfrac{L}{2^k}$. Il suo centro $c_k$ dista da qualsiasi punto dell'intervallo, quindi anche da almeno uno zero $r$, al più metà della larghezza.
$$
|c_k-r|\leq \frac{L}{2^{k+1}}.
$$
Per garantire un errore al più $\varepsilon>0$ è quindi sufficiente che la larghezza corrente sia al più $2\varepsilon$. Il conteggio parte da $k=0$, per il quale si prende già il centro dell'intervallo iniziale.
:::

:::esempio{titolo="Calcolare il numero di dimezzamenti"}
Se l'intervallo iniziale è largo $3$ e la tolleranza è $0{,}1$, la larghezza finale deve essere al più $0{,}2$. Dopo tre dimezzamenti è $\dfrac{3}{8}=0{,}375$, mentre dopo quattro è $\dfrac{3}{16}=0{,}1875$. Quattro è il primo numero di passi che garantisce la tolleranza con questa stima. Il vero errore di un centro specifico può essere inferiore al limite garantito.
:::

:::definizione{#residuo titolo="Residuo ed errore sulla variabile"}
Il **residuo** della stima $\widehat x$ è $|f(\widehat x)|$. Misura lo scarto da zero sul valore della funzione, quindi ha la stessa unità di $f$. L'errore sulla variabile è la distanza fra $\widehat x$ e lo zero cercato. Per esempio, se $f(x)=0{,}001(x-10)$ e $\widehat x=9$, il residuo è $0{,}001$ ma l'errore sulla variabile è $1$.

Supponiamo che $f$ sia continua sul segmento fra $\widehat x$ e lo zero $r$, derivabile al suo interno e che su quel segmento valga $|f'(x)|\geq q>0$. Il teorema del valor medio dà $f(\widehat x)-f(r)=f'(\xi)(\widehat x-r)$ per un punto intermedio $\xi$ se $\widehat x\ne r$. Poiché $f(r)=0$, si ottiene
$$
|\widehat x-r|\leq \frac{|f(\widehat x)|}{q}.
$$
Questa stima chiarisce quando un residuo piccolo si può tradurre in una garanzia sulla posizione della radice. Per esempio, con residuo $0{,}04$ e $q=2$, l'errore sulla variabile è al più $0{,}02$.
:::

:::esempio{#laboratorio-bisezione titolo="Bisezione in Python"}
La funzione riceve un intervallo con estremi finiti e ordinati e una tolleranza positiva. Chi la usa deve accertare la continuità di `f` sull'intervallo. Il programma controlla i valori calcolati agli estremi e al medio. Restituisce una stima e gli estremi del suo intervallo, così che si possa ricavare un limite sulla distanza dagli estremi. In aritmetica esatta le due distanze dal centro coincidono. L'arrotondamento del centro può renderle diverse, quindi il codice controlla la maggiore. Una valutazione intermedia con valore zero viene trattata come arresto nel modello del calcolo.

```python
from math import isfinite


def valore_finito(f, x):
    y = f(x)
    if not isfinite(y):
        raise ValueError("Valore della funzione non finito")
    return y


def bisezione(f, a, b, eps, massimo=200):
    if not (a < b and isfinite(b - a)):
        raise ValueError("Intervallo non valido")
    if not (0 < eps and isfinite(eps)):
        raise ValueError("Tolleranza non valida")
    fa = valore_finito(f, a)
    fb = valore_finito(f, b)
    if fa == 0:
        return a, (a, a)
    if fb == 0:
        return b, (b, b)
    if (fa < 0) == (fb < 0):
        raise ValueError("Gli estremi hanno lo stesso segno")

    for passo in range(massimo + 1):
        m = a + (b - a) / 2
        limite = max(m - a, b - m)
        if limite <= eps:
            return m, (a, b)
        if m == a or m == b:
            raise ArithmeticError("Il medio coincide con un estremo")
        if passo == massimo:
            break
        fm = valore_finito(f, m)
        if fm == 0:
            return m, (m, m)
        if (fa < 0) == (fm < 0):
            a, fa = m, fm
        else:
            b = m

    raise ArithmeticError("Limite di iterazioni raggiunto")
```

Per `bisezione(lambda x: x*x - 2, 1, 2, 0.001)` il risultato è $1{,}4150390625$, nell'intervallo $[1{,}4140625;1{,}416015625]$. La metà della larghezza è $0{,}0009765625$, inferiore a $0{,}001$. In aritmetica finita, segni o zeri prodotti da una valutazione arrotondata possono essere inattendibili quando il valore calcolato è molto vicino a zero. Per applicare la garanzia teorica servono valutazioni dei segni affidabili.
:::

## Usare la tangente con Newton

:::definizione{#newton titolo="Metodo di Newton"}
Dato un valore corrente $x_k$, la tangente al grafico in $(x_k,f(x_k))$ ha equazione
$$
y=f(x_k)+f'(x_k)(x-x_k).
$$
Se $f'(x_k)\ne 0$, si pone $y=0$ e si risolve rispetto a $x$. L'ascissa dell'intersezione con l'asse orizzontale è la nuova stima.
$$
x_{k+1}=x_k-\frac{f(x_k)}{f'(x_k)}.
$$
Il metodo si può arrestare subito se il valore corrente è già uno zero. Per un passo effettivo occorre che il punto corrente appartenga al dominio di $f$, che la derivata esista e che sia diversa da zero. Una derivata molto piccola può generare uno spostamento grande.
:::

:::esempio{titolo="Il primo passo per la radice di due"}
Per $f(x)=x^2-2$ si ha $f'(x)=2x$. Con $x_0=1{,}5$, il valore della funzione è $0{,}25$ e la derivata vale $3$. Pertanto
$$
x_1=\frac{3}{2}-\frac{1}{12}=\frac{17}{12}.
$$
La tangente è $y=3x-\dfrac{17}{4}$. Lo zero cercato è fra $1{,}4$ e $1{,}5$. Confrontando i residui, $|f(x_0)|=\dfrac{1}{4}$ e $|f(x_1)|=\dfrac{1}{144}$, quindi il primo passo ha ridotto il residuo.

::grafico{f="x^2-2;3*x-4.25" xmin=-0.12 xmax=1.95 ymin=-1.05 ymax=1.8 punti="1.5,0.25,pieno,P;1.4166666667,0" segmenti="1.5,0,1.5,0.25" titolo="La tangente in $x_0=1{,}5$ incontra l'asse in $x_1=\dfrac{17}{12}$."}
:::

:::attenzione
La formula di Newton descrive un passo e la convergenza dipende dal punto iniziale. Per $f(x)=x^3-2x+2$ si ha $f'(x)=3x^2-2$. Partendo da $0$, i valori $f(0)=2$ e $f'(0)=-2$ danno $x_1=1$. In $1$, i valori $f(1)=1$ e $f'(1)=1$ danno $x_2=0$. Le iterazioni successive ripetono il ciclo, benché le due derivate siano diverse da zero. La stessa funzione ha uno zero fra $-2$ e $-1$, perché è continua e $f(-2)=-2$, $f(-1)=3$.

::grafico{f="x^3-2*x+2;2-2*x;x" xmin=-2.15 xmax=1.5 ymin=-2.6 ymax=4.3 punti="0,2;1,1;1,0;0,0" segmenti="0,0,0,2;1,0,1,1" titolo="Le tangenti nei punti di ascissa $0$ e $1$ portano ogni volta alla stima precedente."}
:::

:::osservazione{#arresto-newton titolo="Controlli nel programma di Newton"}
Una funzione regolare vicino a uno zero con derivata diversa da zero permette spesso di usare Newton con poche iterazioni a partire da una buona stima iniziale. In un programma si fissa un numero massimo di passi e si controllano sia lo spostamento sia il residuo. Uno spostamento piccolo può dipendere dall'arrotondamento oppure dal rapporto fra funzione e derivata. Un residuo piccolo, senza informazioni sulla derivata, può corrispondere a una stima lontana dalla radice. La stima derivata dal teorema del valor medio o un intervallo con cambio di segno offre una garanzia esplicita.
:::

:::esempio{titolo="Newton in Python"}
Il programma riceve una funzione e la sua derivata. Le due tolleranze positive si riferiscono rispettivamente allo spostamento sulla variabile e al residuo. Usa la funzione `valore_finito` definita nel laboratorio di bisezione.

```python
def newton(f, derivata, x, eps_x, eps_f, massimo=30):
    if not (isfinite(x) and 0 < eps_x and 0 < eps_f
            and isfinite(eps_x) and isfinite(eps_f)):
        raise ValueError("Dati iniziali non validi")
    y = valore_finito(f, x)
    for _ in range(massimo):
        if y == 0:
            return x
        pendenza = valore_finito(derivata, x)
        if pendenza == 0:
            raise ArithmeticError("Derivata nulla")
        prossimo = x - y / pendenza
        if not isfinite(prossimo):
            raise ArithmeticError("Stima non finita")
        yp = valore_finito(f, prossimo)
        if yp == 0:
            return prossimo
        if prossimo == x:
            raise ArithmeticError("La stima non cambia")
        if abs(prossimo - x) <= eps_x and abs(yp) <= eps_f:
            return prossimo
        x, y = prossimo, yp

    raise ArithmeticError("Limite di iterazioni raggiunto")
```

Con `newton(lambda x: x*x - 2, lambda x: 2*x, 1.5, 1e-6, 1e-10)` si ottiene circa $1{,}4142135624$. Con la funzione cubica dell'esempio precedente e partenza da $0$, il programma raggiunge invece il limite di iterazioni.
:::

## Scegliere e combinare i metodi

:::osservazione{#scelta-metodo titolo="Dati disponibili e garanzia richiesta"}
La bisezione usa valutazioni di $f$, richiede un intervallo continuo con cambio di segno e fornisce un limite sull'errore del centro. Newton usa anche la derivata, parte da una stima e può ridurre rapidamente l'errore quando il punto iniziale è adatto. Per esempio, se un programma cerca una temperatura di equilibrio con un errore massimo dichiarato e conosce due temperature che danno valori di segno opposto, la larghezza dell'intervallo di bisezione permette di verificare la richiesta.
:::

:::esempio{#metodo-ibrido titolo="Passo di Newton entro un intervallo"}
Si può mantenere l'intervallo con cambio di segno e usare Newton per proporre un punto interno. Una regola semplice accetta il punto di Newton se cade nella metà centrale dell'intervallo. Se la proposta cade fuori da quella regione, si usa il medio. Dopo la valutazione si conserva il sottointervallo con cambio di segno, come nella bisezione. Se la proposta sta nella metà centrale, dista da ciascun estremo al più tre quarti della larghezza, quindi anche il sottointervallo conservato è largo al più $\dfrac{3}{4}$ della larghezza precedente.

Per esempio, partendo da $[1,2]$ e usando Newton dal centro $1{,}5$ per $f(x)=x^2-2$, la proposta è $\dfrac{17}{12}$, compresa fra $1{,}25$ e $1{,}75$. Poiché $f\left(\dfrac{17}{12}\right)=\dfrac{1}{144}>0$ e il valore all'estremo sinistro è negativo, si conserva $\left[1,\dfrac{17}{12}\right]$. Anche se la proposta di Newton successiva dovesse uscire dall'intervallo, un passo al centro permette di continuare.
:::
