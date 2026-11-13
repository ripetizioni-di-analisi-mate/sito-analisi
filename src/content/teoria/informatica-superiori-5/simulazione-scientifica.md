---
titolo: "Simulazioni scientifiche e confronto con i dati"
sommario: "Costruire una simulazione a passi, controllare il calcolo e confrontare le previsioni con misure sperimentali."
---

## Scegliere lo stato del modello

:::definizione{#modello titolo="Stato, parametri e condizioni iniziali"}
Per prevedere il moto di un carrello, il programma deve conservare i valori che gli permettono di ripartire all'istante successivo. Lo **stato** raccoglie queste grandezze. Nel modello di un moto rettilineo ad accelerazione costante lo stato all'istante $t$ è la coppia $(x(t),v(t))$, dove $x$ è la posizione e $v$ la velocità. Due carrelli possono occupare la stessa posizione con velocità diverse, quindi conoscere soltanto $x$ lascia indeterminata la posizione successiva.

Un **parametro** è un valore fissato per una simulazione. In questo modello l'accelerazione $a$ è un parametro, perché compare nel calcolo della nuova velocità e rimane costante per tutta la prova. La **condizione iniziale** assegna un valore a ogni componente dello stato al tempo iniziale. Se la simulazione comincia a $t=0$, i dati sono $x(0)=x_0$ e $v(0)=v_0$. Per simulare due partenze diverse con la stessa accelerazione si cambiano questi dati mantenendo $a$.
:::

:::esempio{titolo="Ipotesi di un modello termico"}
Un recipiente contiene acqua che viene mescolata. Se la temperatura è sufficientemente uniforme, il modello la rappresenta con un solo valore $T(t)$. Si misura la temperatura ambiente e si assume che resti costante, così $T_a$ è un parametro. La lettura del termometro immerso nell'acqua quando inizia il cronometro fissa $T_0$. Le letture successive vengono conservate per controllare quanto bene la previsione descrive la prova.

Se invece due sonde poste a profondità diverse rilevano temperature molto differenti, una sola temperatura dell'acqua riassume male quei dati. Per usare lo stesso modello occorre specificare quale valore si vuole prevedere, per esempio la temperatura media dopo avere mescolato. La scelta della grandezza osservata stabilisce quali misure confrontare con il calcolo.
:::

:::osservazione{titolo="Parametri e ingressi variabili"}
La temperatura ambiente può variare durante una prova. Se la sua variazione è misurata e fornita al programma a ogni istante, $T_a(t)$ è un **ingresso** del modello. Lo stato contiene ancora la temperatura dell'acqua, perché la sua evoluzione dipende dalla temperatura già raggiunta. In un modello a due corpi che si scambiano calore, invece, entrambe le temperature appartengono allo stato, poiché ciascuna evolve in funzione dell'altra.
:::

## Discretizzare il tempo

:::definizione{#griglia-temporale titolo="Istanti e aggiornamenti"}
Una simulazione a passo costante $h>0$ costruisce una successione di stati agli istanti $t_j=t_0+jh$, dove l'indice $j$ conta gli aggiornamenti già eseguiti. La riga con indice $0$ contiene la condizione iniziale. Se la durata $D=t_f-t_0$ è un multiplo esatto di $h$, gli aggiornamenti sono $N=\dfrac{D}{h}$ e gli stati registrati sono $N+1$.

Per una prova da $0$ a $6\,\mathrm{s}$ con $h=0{,}5\,\mathrm{s}$, il programma esegue $12$ aggiornamenti. Registra $13$ stati perché include quello al tempo iniziale. Se si confronta una misura raccolta a $3\,\mathrm{s}$, occorre leggere lo stato con indice $6$. L'indice di riga coincide con il tempo in secondi solo quando $t_0=0$ e $h=1\,\mathrm{s}$.
:::

:::esempio{titolo="Raggiungere un tempo finale fra due nodi"}
Con passo nominale $0{,}3\,\mathrm{s}$ e durata $1\,\mathrm{s}$, tre passi portano a $0{,}9\,\mathrm{s}$. Per terminare esattamente a $1\,\mathrm{s}$ si può eseguire un ultimo aggiornamento da $0{,}1\,\mathrm{s}$. In quell'aggiornamento si moltiplica il tasso di variazione per la lunghezza effettiva dell'ultimo intervallo. Usare ancora $0{,}3\,\mathrm{s}$ darebbe uno stato a $1{,}2\,\mathrm{s}$ e quindi una previsione riferita a un istante diverso.
:::

:::osservazione{titolo="Unità dello stato e dei tassi"}
Quando il tempo è misurato in secondi, un tasso di variazione di posizione ha unità $\mathrm{m/s}$. Il prodotto per un passo espresso in secondi ha unità $\mathrm{m}$ e può essere sommato alla posizione. Lo stesso controllo vale per la velocità, poiché il prodotto del passo per l'accelerazione ha unità $\mathrm{m/s}$. Se un parametro è espresso per minuto, prima del calcolo si converte il tempo oppure il parametro. Il prodotto deve usare la stessa unità temporale nelle due grandezze.
:::

## Aggiornare lo stato con Eulero

:::definizione{#eulero titolo="Metodo di Eulero esplicito"}
Sia $y$ una variabile di stato e sia $f(t,y)$ il tasso di variazione dato dal modello $y'=f(t,y)$. All'inizio dell'intervallo il programma conosce la stima $y_j$ e può calcolare la pendenza $f(t_j,y_j)$. Il **metodo di Eulero esplicito** usa questa pendenza per stimare l'incremento sull'intero intervallo.
$$
y_{j+1}=y_j+h f(t_j,y_j).
$$
L'aggiornamento produce la stima successiva e poi il programma ricalcola la pendenza allo stato raggiunto. Se $y_j=3$, la pendenza iniziale è $-2$ per unità di tempo e il passo vale $0{,}25$, l'incremento è $-0{,}5$. Quindi $y_{j+1}=2{,}5$.
:::

:::definizione{#aggiornamento-simultaneo titolo="Aggiornamento simultaneo dello stato"}
Per il moto rettilineo $x'=v$ e $v'=a$, le due pendenze del metodo esplicito si calcolano entrambe allo stesso istante $t_j$.
$$
\begin{aligned}
x_{j+1}&=x_j+h v_j,\\[6pt]
v_{j+1}&=v_j+h a.
\end{aligned}
$$
Prima si determinano entrambi i nuovi valori. Poi si sostituiscono quelli vecchi. Nel codice si possono usare due variabili temporanee oppure un'assegnazione simultanea di Python, nella quale si valutano prima entrambe le espressioni a destra.
:::

:::esempio{titolo="Due passi partendo da fermo"}
Con $x_0=0\,\mathrm m$, $v_0=0\,\mathrm{m/s}$, $a=2\,\mathrm{m/s^2}$ e $h=1\,\mathrm s$, il primo incremento di posizione è zero, perché la velocità all'inizio è zero. La velocità raggiunge $2\,\mathrm{m/s}$ al termine del primo passo. Il secondo incremento di posizione vale quindi $2\,\mathrm m$. Si ottiene $x_2=2\,\mathrm m$ e $v_2=4\,\mathrm{m/s}$.

Il moto esatto ha posizione $x(t)=x_0+v_0t+\dfrac{at^2}{2}$ e in questo caso dà $4\,\mathrm m$ a $t=2\,\mathrm s$. La velocità numerica è esatta ai nodi, perché la sua pendenza è costante. Per la posizione, invece, il metodo approssima la velocità variabile sull'intervallo con quella iniziale.
:::

:::attenzione
Il codice che esegue prima `v += h * a` e poi `x += h * v` usa la velocità del tempo finale per aggiornare la posizione. Per la partenza da fermo dell'esempio precedente, produce $x_1=2\,\mathrm m$, mentre Eulero esplicito dà $x_1=0\,\mathrm m$. Un test sul primo passo distingue le due implementazioni.
:::

## Simulare il raffreddamento

:::definizione{#raffreddamento titolo="Legge di raffreddamento"}
Si assume che il corpo abbia temperatura uniforme, l'ambiente abbia temperatura costante $T_a$ e il coefficiente $k>0$ resti fisso. La **legge di raffreddamento** usa il tasso $T'=-k(T-T_a)$. Se il corpo è più caldo dell'ambiente, lo scarto $T-T_a$ è positivo, quindi il tasso è negativo. Se è più freddo, lo scarto è negativo e il tasso è positivo. Se le temperature coincidono, il tasso vale zero.

Il coefficiente $k$ ha dimensione di inverso del tempo, perché moltiplica una differenza di temperatura e produce un tasso di temperatura per unità di tempo. Con $h$ in secondi si esprime quindi $k$ in $\mathrm{s}^{-1}$. Il prodotto $hk$ è un numero privo di unità.
:::

:::esempio{titolo="Scarto dall'ambiente a ogni passo"}
Il metodo di Eulero usa la legge di raffreddamento nello stato corrente.
$$
T_{j+1}=T_j-hk(T_j-T_a).
$$
Introducendo $s_j=T_j-T_a$, ossia lo scarto al passo $j$, si ottiene
$$
\begin{aligned}
s_{j+1}&=(1-hk)s_j,\\[6pt]
s_j&=(1-hk)^j s_0.
\end{aligned}
$$
Il prodotto $hk$ stabilisce la frazione di scarto che si sottrae in un passo. Con $T_0=60\,{}^\circ\mathrm C$, $T_a=20\,{}^\circ\mathrm C$ e $hk=0{,}25$, resta il $75\%$ dello scarto di $40\,{}^\circ\mathrm C$. Si ottiene uno scarto di $30\,{}^\circ\mathrm C$ e quindi $T_1=50\,{}^\circ\mathrm C$. Nel passo successivo si applica la stessa frazione a $30\,{}^\circ\mathrm C$ e si ottiene $T_2=42{,}5\,{}^\circ\mathrm C$.
:::

## Valutare il passo e la stabilità

:::definizione{#passo titolo="Raffinamento alla stessa durata"}
Per valutare l'effetto del passo si tengono fissi modello, parametri, stato iniziale e tempo finale. Se si dimezza $h$, per raggiungere la stessa durata servono il doppio degli aggiornamenti. Il confronto fra stime allo stesso istante indica la sensibilità al passo in quel punto. Per calcolare l'errore numerico esatto occorre un valore di riferimento, per esempio una soluzione esatta del modello.

Nel raffreddamento continuo lo scarto è $s(t)=s_0e^{-kt}$. Questo valore permette di separare l'errore introdotto dal metodo di Eulero dallo scarto tra il modello e una misura. La differenza fra due approssimazioni a passi diversi, presa da sola, fornisce una misura della loro distanza.
:::

:::esempio{titolo="Un passo intero e due mezzi passi"}
Si consideri il raffreddamento da $60\,{}^\circ\mathrm C$ verso un ambiente a $20\,{}^\circ\mathrm C$, con $k=0{,}25\,\mathrm{s}^{-1}$. Un aggiornamento da $1\,\mathrm s$ conserva il $75\%$ dello scarto e dà $50\,{}^\circ\mathrm C$. Con due aggiornamenti da $0{,}5\,\mathrm s$ si conserva invece il $87{,}5\%$ dello scarto a ogni aggiornamento.
$$
T(1)\approx20+40(0{,}875)^2
=50{,}625\,{}^\circ\mathrm C.
$$
La soluzione continua a $1\,\mathrm s$ vale circa $51{,}152\,{}^\circ\mathrm C$. Gli errori assoluti dei due calcoli valgono quindi circa $1{,}152$ e $0{,}527\,{}^\circ\mathrm C$. In questa prova il raffinamento riduce l'errore. La differenza tra le due stime, pari a $0{,}625\,{}^\circ\mathrm C$, è distinta da entrambi gli errori rispetto al riferimento.

::grafico{f="20+40*exp(-0.25*x)" xmin=0 xmax=4.2 ymin=0 ymax=65 punti="0,60,pieno;1,50,pieno;2,42.5,pieno;3,36.875,pieno;4,32.65625,pieno" segmenti="0,60,1,50;1,50,2,42.5;2,42.5,3,36.875;3,36.875,4,32.65625" nomi="t,T" legenda="20+40 e^{-0{,}25t}" titolo="La curva descrive il modello continuo. I punti descrivono gli aggiornamenti di Eulero da 1 s."}

:::

:::esempio{titolo="Errore sulla posizione con accelerazione costante"}
Su ogni intervallo la velocità esatta cresce di $ah$. Lo spostamento esatto sull'intervallo vale quindi $h(v_j+\dfrac{ah}{2})$, perché la velocità è una funzione affine del tempo e la sua media è la semisomma dei valori agli estremi. Eulero usa invece $hv_j$. La differenza tra i due incrementi è $\dfrac{ah^2}{2}$. La velocità ai nodi coincide con quella esatta, quindi dopo $N$ intervalli tutti questi scarti si sommano. Se $D=Nh$ è la durata, la differenza finale fra posizione esatta e stima è $\dfrac{aDh}{2}$.

Per $a=2\,\mathrm{m/s^2}$ e $D=2\,\mathrm s$, l'errore finale vale $2\,\mathrm m$ con $h=1\,\mathrm s$ e $1\,\mathrm m$ con $h=0{,}5\,\mathrm s$. Questo dimezzamento segue dal calcolo per il caso ad accelerazione costante. Il singolo scarto di un passo si riduce invece a un quarto, poiché contiene $h^2$.
:::

:::definizione{#stabilita titolo="Stabilità del raffreddamento discreto"}
Sia $s_0\neq0$ lo scarto iniziale. L'ampiezza dello scarto al passo successivo si ottiene moltiplicando quella corrente per $|1-hk|$. Il segno del fattore stabilisce da quale parte dell'equilibrio cade la nuova temperatura.

- Con $0<hk<1$ il fattore è fra $0$ e $1$, quindi l'ampiezza diminuisce e il segno resta uguale.
- Con $hk=1$ lo scarto diventa zero al primo passo e resta zero.
- Con $1<hk<2$ il fattore è negativo e il suo valore assoluto è minore di $1$, quindi lo scarto alterna segno con ampiezza decrescente.
- Con $hk=2$ il fattore vale $-1$, quindi i due scarti opposti si ripetono con la stessa ampiezza.
- Con $hk>2$ il fattore è minore di $-1$, quindi il segno alterna e l'ampiezza cresce.

Per $s_0=0$, lo scarto resta zero in tutti i casi perché ogni aggiornamento moltiplica lo zero. Un test eseguito soltanto all'equilibrio lascia quindi inosservata la crescita degli scarti quando $hk>2$.
:::

:::attenzione
Per $hk=1{,}5$, una temperatura iniziale di $40\,{}^\circ\mathrm C$ in un ambiente a $20\,{}^\circ\mathrm C$ produce $10\,{}^\circ\mathrm C$ al primo passo e $25\,{}^\circ\mathrm C$ al secondo. Il modello continuo con le stesse ipotesi conserva il segno dello scarto, perché $e^{-kt}>0$. L'attraversamento dell'equilibrio nei dati calcolati dipende quindi dal passo. La stabilità, intesa come riduzione dell'ampiezza dello scarto, da sola lascia ancora possibile questa oscillazione numerica.
:::

## Confrontare previsioni e misure

:::definizione{#residui titolo="Residuo con segno"}
All'istante $t_i$ si confrontano una misura $m_i$ e una previsione $p_i$ della stessa grandezza nella stessa unità. Il **residuo** è $r_i=m_i-p_i$. Se è positivo, la previsione è più bassa della misura. Se è negativo, la previsione è più alta. Con previsione $52\,{}^\circ\mathrm C$ e misura $53\,{}^\circ\mathrm C$, il residuo vale $+1\,{}^\circ\mathrm C$.

Se il programma registra risultati ogni $0{,}5\,\mathrm s$ e una misura è raccolta a $1{,}2\,\mathrm s$, occorre ottenere una previsione allo stesso istante. Si può scegliere una griglia compatibile oppure interpolare dichiarando l'approssimazione aggiuntiva. Il confronto con la riga a $1{,}0\,\mathrm s$ misurerebbe anche l'effetto dello sfasamento temporale.
:::

:::definizione{#mae titolo="Errore assoluto medio"}
Per $n>0$ confronti, l'**errore assoluto medio** o **MAE** è la media delle ampiezze dei residui.
$$
\mathrm{MAE}=\frac{|r_1|+\cdots+|r_n|}{n}.
$$
Il MAE ha la stessa unità delle misure. Un residuo positivo e uno negativo di uguale ampiezza si compensano nella media con segno, mentre danno due contributi uguali al MAE. Per esempio, i residui $-3$ e $3\,{}^\circ\mathrm C$ danno media con segno pari a zero e MAE pari a $3\,{}^\circ\mathrm C$.
:::

:::esempio{titolo="Lo stesso errore medio può avere segni diversi"}
Un modello produce residui $1$, $2$ e $3\,{}^\circ\mathrm C$. Il MAE vale $2\,{}^\circ\mathrm C$ e la media con segno vale $2\,{}^\circ\mathrm C$. Una seconda simulazione dà residui $-2$, $0$ e $4\,{}^\circ\mathrm C$. Anche qui il MAE vale $2\,{}^\circ\mathrm C$, mentre la media con segno vale $\dfrac{2}{3}\,{}^\circ\mathrm C$. Nella prima prova tutte le previsioni sono inferiori alle misure. Nella seconda lo scarto cambia segno. La sequenza dei residui conserva questa informazione, che un singolo valore medio perde.
:::

## Verificare il calcolo e validare il modello

:::definizione{#validazione titolo="Verifica numerica e validazione sperimentale"}
La **verifica numerica** controlla che il programma applichi le equazioni e che l'approssimazione abbia l'accuratezza richiesta per l'uso previsto. Per il moto a velocità costante, Eulero deve riprodurre $x(t)=x_0+v_0t$ ai nodi in aritmetica esatta. Il moto con accelerazione costante permette anche di controllare che la posizione usi la velocità al tempo iniziale di ogni passo.

La **validazione sperimentale** valuta se le previsioni descrivono le misure entro la precisione richiesta. Si usano dati indipendenti da quelli impiegati per stimare i parametri. Per esempio, una prova di raffreddamento può servire a stimare $k$. Si conserva il valore di $k$ e si ripete l'esperimento con una temperatura iniziale diversa. Le misure della seconda prova verificano quanto il modello con quel parametro descriva la nuova situazione.
:::

:::esempio{titolo="Una discrepanza persistente"}
Due passi diversi danno previsioni di $9{,}92\,\mathrm m$ e $9{,}94\,\mathrm m$ allo stesso istante. La misura è $12\,\mathrm m$. Il raffinamento cambia la stima di $0{,}02\,\mathrm m$ e il residuo con il passo più piccolo vale $2{,}06\,\mathrm m$. Se il confronto viene ripetuto con un altro passo e la previsione cambia ancora poco, resta da esaminare il divario rispetto alla misura. Possono contribuire le condizioni iniziali, le ipotesi del modello oppure la procedura di misura. Questi dati, da soli, quantificano le due differenze e lasciano aperta la diagnosi.
:::

## Laboratorio in Python

:::esempio{#laboratorio-simulazione titolo="Simulare la temperatura e calcolare i residui"}
La prova usa un passo di $1\,\mathrm s$, temperatura ambiente pari a $20\,{}^\circ\mathrm C$ e $k=0{,}25\,\mathrm{s}^{-1}$. Il programma riceve i valori delle misure negli istanti $1$, $2$ e $3\,\mathrm s$. La temperatura a $t=0$ viene fornita a parte. Si aggiorna prima la previsione, così a ogni misura viene sottratta la previsione dello stesso istante.

```python
def prova_termica(iniziale, ambiente, k, passo, misure):
    if passo <= 0 or k <= 0 or not misure:
        raise ValueError("Servono passo, k e misure")
    temperatura = iniziale
    previsioni = []
    residui = []
    for misura in misure:
        scarto = temperatura - ambiente
        temperatura -= passo * k * scarto
        previsioni.append(temperatura)
        residui.append(misura - temperatura)
    mae = sum(abs(r) for r in residui) / len(residui)
    return previsioni, residui, mae


dati = [51.0, 44.0, 37.0]
risultato = prova_termica(60.0, 20.0, 0.25, 1.0, dati)
previsioni, residui, mae = risultato
assert previsioni == [50.0, 42.5, 36.875]
assert residui == [1.0, 1.5, 0.125]
assert mae == 0.875
```

Nel primo giro la temperatura scende a $50\,{}^\circ\mathrm C$. La misura è $51\,{}^\circ\mathrm C$, perciò il primo residuo vale $1\,{}^\circ\mathrm C$. Il secondo giro riparte dalla previsione di $50\,{}^\circ\mathrm C$. Se ripartisse da $51\,{}^\circ\mathrm C$, il programma incorporerebbe la misura nel nuovo stato e il confronto riguarderebbe previsioni di un solo passo. Conservare separatamente previsioni e misure permette di controllare una simulazione libera sull'intera durata.
:::

:::esempio{titolo="Righe di un foglio elettronico"}
Si supponga che le celle D1, E1 e F1 contengano rispettivamente $T_a$, $k$ e $h$, mentre B2 contiene $T_0$. La cella B3 può contenere la formula seguente.

```text
=B2-$F$1*$E$1*(B2-$D$1)
```

Quando si copia la formula in B4, B2 diventa B3 perché l'aggiornamento deve ripartire dalla temperatura precedente. I simboli del dollaro nei tre riferimenti mantengono fisse le celle dei parametri. Una colonna per il tempo può partire da $0$ e aggiungere a ogni riga il valore di F1. Se si riduce $h$, quella colonna permette di trovare la riga che corrisponde allo stesso istante di misura.
:::
