"""Contenuti originali del modulo propedeutico: teoria, svolti, esercizi e quiz.

Eseguire dalla radice del repository. Le due serie hanno dati diversi:
la prima alimenta le schede svolte, la seconda gli esercizi e le domande.
"""
from pathlib import Path
from fractions import Fraction
import json

MATERIA = 'matematica-semestre-filtro'

CAPITOLI = [
 ('calcolo-e-proporzioni', 'Calcolo, proporzioni e percentuali', 'Calcolo e proporzioni', 'Frazioni, rapporti, proporzioni e variazioni percentuali per confrontare quantità e concentrazioni.'),
 ('potenze-e-notazione-scientifica', 'Potenze, radici e notazione scientifica', 'Potenze e notazione', 'Operazioni con potenze di dieci, radici e numeri molto grandi o molto piccoli.'),
 ('unita-di-misura', 'Unità di misura e conversioni', 'Unità di misura', 'Conversioni di lunghezze, aree, volumi, velocità, densità e concentrazioni, con controllo delle dimensioni.'),
 ('equazioni-e-formule', 'Equazioni e formule inverse', 'Equazioni e formule', 'Isolare una grandezza, risolvere equazioni e scegliere le soluzioni compatibili con il problema.'),
 ('funzioni-e-grafici', 'Funzioni, proporzionalità e grafici', 'Funzioni e grafici', 'Leggere gli assi, riconoscere una proporzionalità e interpretare pendenza e area nei grafici del moto.'),
 ('esponenziali-e-logaritmi', 'Esponenziali, logaritmi e applicazioni', 'Esponenziali e logaritmi', 'Proprietà dei logaritmi, modelli esponenziali, pH di soluzioni ideali e livelli sonori.'),
 ('trigonometria', 'Trigonometria e triangoli rettangoli', 'Trigonometria', 'Gradi, radianti, seno, coseno e tangente per calcolare lunghezze e proiezioni.'),
 ('vettori-e-componenti', 'Vettori, componenti e prodotti', 'Vettori', 'Somma di vettori, modulo, componenti e prodotti scalare e vettoriale negli esercizi di Fisica.'),
]

TEORIE = [r'''
## Frazioni e operazioni

:::definizione{#frazioni titolo="Frazioni e rapporti"}
Per $b\ne0$, la frazione $\dfrac{a}{b}$ esprime il rapporto tra $a$ e $b$. Due frazioni sono equivalenti se rappresentano lo stesso numero. Moltiplicando numeratore e denominatore per uno stesso numero diverso da zero il rapporto resta invariato.
$$
\frac{2}{3}=\frac{4}{6},\qquad
\frac{a}{b}+\frac{c}{d}=\frac{ad+bc}{bd}\quad(bd\ne0).
$$
Per esempio, $\dfrac{1}{2}+\dfrac{1}{3}=\dfrac{3+2}{6}=\dfrac{5}{6}$. Il denominatore comune permette di sommare quantità espresse nella stessa suddivisione dell'unità.
:::

## Prodotti e quozienti

:::osservazione{#operazioni titolo="Moltiplicazione e divisione tra frazioni"}
Nel prodotto si moltiplicano i numeratori tra loro e i denominatori tra loro. Dividere per una frazione diversa da zero equivale a moltiplicare per la sua reciproca.
$$
\frac{a}{b}\cdot\frac{c}{d}=\frac{ac}{bd},\qquad
\frac{a}{b}:\frac{c}{d}=\frac{ad}{bc}\quad(bcd\ne0).
$$
Per esempio, $\dfrac{3}{4}:\dfrac{1}{2}=\dfrac{3}{2}$. Questo calcolo permette di stabilire quante porzioni da mezzo litro sono contenute in tre quarti di litro.
:::

## Proporzioni

:::definizione{#proporzioni titolo="Uguaglianza di due rapporti"}
Una **proporzione** è un'uguaglianza $\dfrac{a}{b}=\dfrac{c}{d}$, con $b,d\ne0$. Moltiplicando entrambi i membri per $bd$ si ottiene $ad=bc$.

Se $4\,\mathrm{g}$ di un soluto sono contenuti in $200\,\mathrm{mL}$ di una soluzione omogenea, in un campione di $50\,\mathrm{mL}$ della stessa soluzione sono contenuti
$$
m=4\,\mathrm{g}\cdot\frac{50\,\mathrm{mL}}{200\,\mathrm{mL}}=1\,\mathrm{g}.
$$
Il rapporto tra i volumi è privo di unità, poiché le unità uguali si semplificano.
:::

## Percentuali

:::definizione{#percentuali titolo="Percentuale di una quantità"}
La percentuale $p\%$ rappresenta la frazione $\dfrac{p}{100}$. Il $12\%$ di $250\,\mathrm{g}$ è quindi $\dfrac{12}{100}\cdot250\,\mathrm{g}=30\,\mathrm{g}$.

La percentuale in massa di un componente è
$$
p=\frac{m_{\mathrm{componente}}}{m_{\mathrm{miscela}}}\cdot100.
$$
Per esempio, $5\,\mathrm{g}$ di soluto in $100\,\mathrm{g}$ di soluzione corrispondono al $5\%$ in massa. La massa al denominatore è quella dell'intera soluzione.
:::

## Variazioni e fattori moltiplicativi

:::osservazione{#variazioni titolo="Aumenti e diminuzioni percentuali"}
Se una quantità iniziale $x_0>0$ aumenta del $p\%$, il valore finale è $x_1=x_0\left(1+\dfrac{p}{100}\right)$. Per una diminuzione si usa $x_1=x_0\left(1-\dfrac{p}{100}\right)$.

Una variazione da $40$ a $50$ corrisponde a $\dfrac{50-40}{40}\cdot100=25\%$. Due variazioni successive richiedono il prodotto dei fattori. Un aumento del $20\%$ seguito da una diminuzione del $20\%$ dà $1{,}2\cdot0{,}8=0{,}96$, quindi il valore finale è il $96\%$ di quello iniziale.
:::

## Medie e mescolamenti

:::definizione{#media titolo="Media ponderata"}
Per valori $x_1,x_2$ con pesi positivi $w_1,w_2$, la **media ponderata** è
$$
\overline{x}=\frac{w_1x_1+w_2x_2}{w_1+w_2}.
$$
In un mescolamento senza reazioni, se i volumi sono additivi, la concentrazione finale si calcola dividendo la quantità totale di soluto per il volume totale. Mescolando $100\,\mathrm{mL}$ a $2\,\mathrm{g/L}$ e $300\,\mathrm{mL}$ a $6\,\mathrm{g/L}$ si ottiene $\dfrac{100\cdot2+300\cdot6}{400}=5\,\mathrm{g/L}$. I pesi sono i volumi, espressi nella stessa unità.
:::
''', r'''
## Potenze intere

:::definizione{#potenze titolo="Potenze con esponente intero"}
Per $a\ne0$ e $n$ intero positivo, $a^n$ è il prodotto di $n$ fattori uguali ad $a$, $a^0=1$ e $a^{-n}=\dfrac{1}{a^n}$. Per esempio $10^{-3}=0{,}001$.

L'esponente negativo descrive il reciproco di una potenza. Perciò $10^{-3}$ è positivo, mentre $-10^3=-1000$ è negativo.
:::

## Proprietà delle potenze

:::teorema{#proprieta titolo="Prodotti, quozienti e potenze di potenze"}
Per $a\ne0$ e $m,n$ interi valgono
$$
a^ma^n=a^{m+n},\qquad \frac{a^m}{a^n}=a^{m-n},\qquad (a^m)^n=a^{mn}.
$$
Le prime due uguaglianze seguono dal conteggio e dalla semplificazione dei fattori. Per esempio, $10^{-3}\cdot10^5=10^2$ e $\dfrac{10^{-3}}{10^5}=10^{-8}$. Nei quozienti si sottrae l'intero esponente del denominatore, compreso il suo segno.
:::

## Notazione scientifica

:::definizione{#scientifica titolo="Coefficiente ed esponente"}
Un numero positivo è scritto in **notazione scientifica** se ha la forma $a\cdot10^n$, con $1\le a<10$ e $n$ intero. Così $0{,}00072=7{,}2\cdot10^{-4}$ e $540000=5{,}4\cdot10^5$.

Il coefficiente indica le cifre del numero; l'esponente ne fissa la scala. Spostando la virgola di un posto verso sinistra, l'esponente aumenta di uno affinché il valore resti uguale.
:::

## Operazioni in notazione scientifica

:::osservazione{#operazioni titolo="Calcolo con coefficienti ed esponenti"}
Nel prodotto si moltiplicano i coefficienti e si sommano gli esponenti. Nel quoziente si dividono i coefficienti e si sottraggono gli esponenti. Per sommare o sottrarre si esprimono prima i termini con la stessa potenza di dieci.
$$
(3\cdot10^4)(4\cdot10^{-2})=12\cdot10^2=1{,}2\cdot10^3,
$$
$$
2\cdot10^{-3}+5\cdot10^{-4}=20\cdot10^{-4}+5\cdot10^{-4}=2{,}5\cdot10^{-3}.
$$
Questi calcoli permettono di usare nello stesso problema dimensioni molecolari e quantità macroscopiche.
:::

## Radici e potenze frazionarie

:::definizione{#radici titolo="Radice quadrata"}
Per $x\ge0$, $\sqrt{x}$ è l'unico numero non negativo il cui quadrato vale $x$. Per esempio $\sqrt{36}=6$. Per ogni $a$ reale vale $\sqrt{a^2}=|a|$.

Per $x>0$, $x^{\frac{1}{2}}=\sqrt{x}$ e $x^{-\frac{1}{2}}=\dfrac{1}{\sqrt{x}}$. In particolare,
$$
\sqrt{9\cdot10^{-6}}=3\cdot10^{-3}.
$$
La radice quadrata compare quando si ricava una velocità dall'energia cinetica o una lunghezza dall'area.
:::

## Stime e arrotondamenti

:::osservazione{#stime titolo="Controllo della scala del risultato"}
Una stima consiste nel sostituire i dati con valori vicini per controllare la dimensione numerica del risultato. Per esempio $\dfrac{5{,}9\cdot10^6}{2{,}1\cdot10^3}$ è vicino a $3\cdot10^3$.

Le cifre significative iniziano dalla prima cifra diversa da zero. Il numero $0{,}00450$ ha tre cifre significative. Nei prodotti e nei quozienti il risultato si arrotonda, in genere, al numero di cifre significative del dato meno preciso. I fattori di conversione esatti non limitano la precisione; i passaggi intermedi si conservano con qualche cifra in più.
:::
''', r'''
## Grandezze e unità

:::definizione{#grandezze titolo="Valore numerico e unità"}
Una misura associa un numero a un'unità. La scrittura $\ell=2\,\mathrm{m}$ descrive la stessa lunghezza di $\ell=200\,\mathrm{cm}$. La conversione cambia il valore numerico, mentre conserva la grandezza.

Per sommare due misure occorre esprimerle nella stessa unità. Per esempio $1\,\mathrm{m}+25\,\mathrm{cm}=1{,}25\,\mathrm{m}$.
:::

## Prefissi e lunghezze

:::definizione{#prefissi titolo="Multipli e sottomultipli"}
I prefissi rappresentano fattori esatti: kilo $10^3$, centi $10^{-2}$, milli $10^{-3}$, micro $10^{-6}$ e nano $10^{-9}$. Per esempio $7\,\mathrm{mm}=7\cdot10^{-3}\,\mathrm{m}$.

Un fattore di conversione è un rapporto uguale a uno. Il prodotto $250\,\mathrm{cm}\cdot\dfrac{1\,\mathrm{m}}{100\,\mathrm{cm}}=2{,}5\,\mathrm{m}$ mostra quali unità si semplificano.
:::

## Aree e volumi

:::osservazione{#aree-volumi titolo="Esponente del fattore di conversione"}
Il fattore si eleva alla stessa potenza dell'unità:
$$
1\,\mathrm{cm^2}=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}.
$$
Un litro vale $10^{-3}\,\mathrm{m^3}$; un millilitro vale $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$. Perciò $200\,\mathrm{mL}=0{,}2\,\mathrm{L}=2\cdot10^{-4}\,\mathrm{m^3}$. Il volume servirà nel calcolo di densità, portata e concentrazione.
:::

## Velocità e densità

:::osservazione{#composte titolo="Unità al numeratore e al denominatore"}
Nelle grandezze composte si convertono separatamente numeratore e denominatore. Poiché un'ora vale $3600\,\mathrm{s}$,
$$
36\,\frac{\mathrm{km}}{\mathrm{h}}=36\cdot\frac{1000\,\mathrm{m}}{3600\,\mathrm{s}}=10\,\mathrm{m/s}.
$$
Per la densità vale $1\,\mathrm{g/cm^3}=10^3\,\mathrm{kg/m^3}$, poiché $\dfrac{10^{-3}}{10^{-6}}=10^3$. Si ottiene così una formula con unità coerenti prima della sostituzione numerica.
:::

## Concentrazione e diluizione

:::definizione{#concentrazione titolo="Quantità di soluto per volume di soluzione"}
La concentrazione massica è $c_m=\dfrac{m_{\mathrm{soluto}}}{V_{\mathrm{soluzione}}}$; una sua unità è $\mathrm{g/L}$. La concentrazione molare è $c=\dfrac{n}{V}$, dove $n$ è la quantità di sostanza in moli e $V$ è il volume della soluzione in litri.

In una diluizione senza perdita né reazione del soluto, $n=c_1V_1=c_2V_2$. Quindi una soluzione portata da $100\,\mathrm{mL}$ a $500\,\mathrm{mL}$ ha concentrazione finale pari a un quinto di quella iniziale. Il volume finale comprende anche quello iniziale.
:::

## Analisi dimensionale

:::osservazione{#dimensioni titolo="Coerenza di una formula"}
Indicando con $M$, $L$, $T$ le dimensioni di massa, lunghezza e tempo, si ha $[v]=LT^{-1}$ e $[a]=LT^{-2}$. I termini sommati e i due membri di un'uguaglianza devono avere le stesse dimensioni.

In $s=v_0t+\dfrac12at^2$ entrambi i termini hanno dimensione $L$. Una scrittura come $s=v_0+t$ somma invece una velocità e un tempo, quindi è dimensionalmente incoerente. Il controllo delle dimensioni individua alcuni errori; una formula dimensionalmente coerente richiede comunque una giustificazione fisica.
:::
''', r'''
## Uguaglianze ed equivalenza

:::definizione{#equivalenza titolo="Operazioni sui due membri"}
Un'**equazione** è un'uguaglianza contenente un'incognita. Sommare la stessa quantità ai due membri conserva l'uguaglianza. Moltiplicare o dividere per uno stesso numero diverso da zero conserva le soluzioni.

Da $3x+5=20$, sottraendo $5$ e dividendo per $3$, si ottiene $x=5$. La sostituzione $3\cdot5+5=20$ verifica il risultato.
:::

## Formule inverse

:::osservazione{#inverse titolo="Isolare una grandezza"}
Una formula inversa esprime una grandezza in funzione delle altre. Da $\rho=\dfrac{m}{V}$, con $V>0$, si ricava $m=\rho V$ e, per $\rho>0$, $V=\dfrac{m}{\rho}$.

Le operazioni si eseguono prima sui simboli. Solo dopo si sostituiscono valori con unità coerenti. Per esempio, con $m=120\,\mathrm{g}$ e $\rho=3\,\mathrm{g/cm^3}$ si ottiene $V=40\,\mathrm{cm^3}$.
:::

## Parentesi e frazioni

:::osservazione{#parentesi titolo="Distribuzione e denominatori"}
La proprietà distributiva dà $a(x+b)=ax+ab$. Per eliminare un denominatore si moltiplica l'intero membro per quel denominatore, dopo averne imposto la non nullità.

Da $\dfrac{x+2}{3}=4$ si ottiene $x+2=12$, quindi $x=10$. Nel caso $Q=mc(T_f-T_i)$, con $mc\ne0$, si ricava $T_f=T_i+\dfrac{Q}{mc}$. La differenza di temperatura resta un unico fattore finché non si divide per $mc$.
:::

## Incognite al quadrato

:::definizione{#quadratiche titolo="Soluzioni di un'equazione quadratica"}
Per $a\ne0$, l'equazione $ax^2+bx+c=0$ ha discriminante $\Delta=b^2-4ac$. Se $\Delta\ge0$, le soluzioni reali sono
$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}.
$$
Per esempio $x^2-5x+6=0$ ha soluzioni $x=2$ e $x=3$. In una formula come $E_c=\dfrac12mv^2$, con $m>0$ ed $E_c\ge0$, il modulo della velocità è $v=\sqrt{\dfrac{2E_c}{m}}$.
:::

## Sistemi di due equazioni

:::osservazione{#sistemi titolo="Determinare due incognite"}
Un sistema richiede che le sue equazioni valgano contemporaneamente. Nel sistema
$$
\begin{cases}
x+y=10,\\
2x+y=14
\end{cases}
$$
sottraendo la prima equazione dalla seconda si ottiene $x=4$. Sostituendo nella prima si trova $y=6$. Questo metodo compare nei bilanci di quantità e nella scomposizione di una miscela.
:::

## Condizioni e significato della soluzione

:::attenzione{#condizioni titolo="Dominio e vincoli fisici"}
Ogni denominatore deve essere diverso da zero e ogni radicando di radice quadrata deve essere non negativo. Una soluzione algebrica va confrontata con queste condizioni e con i vincoli del modello.

L'equazione $t^2=9\,\mathrm{s^2}$ ha due soluzioni algebriche, $t=3\,\mathrm{s}$ e $t=-3\,\mathrm{s}$. Se $t$ rappresenta il tempo trascorso dall'inizio dell'esperimento, il vincolo $t\ge0$ seleziona $t=3\,\mathrm{s}$.
:::
''', r'''
## Variabili e grafici

:::definizione{#grafico titolo="Rappresentazione di una funzione"}
Una funzione associa a ogni valore ammesso di $x$ un unico valore $y=f(x)$. Il grafico è l'insieme dei punti $(x,f(x))$. Gli assi indicano la grandezza e la sua unità; la scala stabilisce il valore corrispondente a ogni intervallo.

Se $s(t)=2t+1$, con $t$ in secondi e $s$ in metri, al tempo $t=3\,\mathrm{s}$ corrisponde $s=7\,\mathrm{m}$. Il punto del grafico ha coordinate $(3,7)$.
:::

## Retta e pendenza

:::definizione{#retta titolo="Coefficiente angolare e intercetta"}
Nella relazione $y=mx+q$, $q$ è il valore di $y$ per $x=0$ e $m=\dfrac{\Delta y}{\Delta x}$ è la **pendenza**. Il rapporto ha le unità di $y$ divise per quelle di $x$.

Per $s(t)=2t+1$, la pendenza è $2\,\mathrm{m/s}$ e la posizione iniziale è $1\,\mathrm{m}$.

::grafico{f="2*x+1" xmin=0 xmax=4 ymin=0 ymax=10 nomi="t (s),s (m)" punti="0,1;3,7" segmenti="0,1,3,1;3,1,3,7" titolo="Una variazione di posizione di 6 m in 3 s corrisponde alla pendenza di 2 m/s."}
:::

## Proporzionalità diretta

:::definizione{#diretta titolo="Rapporto costante"}
Due quantità sono direttamente proporzionali se $y=kx$. Per $x\ne0$, il rapporto $\dfrac{y}{x}=k$ è costante e il grafico passa per l'origine. Moltiplicando $x$ per un fattore, anche $y$ viene moltiplicata per quel fattore.

A densità costante, $m=\rho V$: raddoppiando il volume raddoppia la massa. La relazione $y=2x+1$ è affine, ma non è una proporzionalità diretta poiché $y(0)=1$.
:::

## Proporzionalità inversa e quadratica

:::definizione{#inversa-quadratica titolo="Prodotto costante e dipendenza dal quadrato"}
Per $y=\dfrac{k}{x}$, con $x\ne0$, il prodotto $xy=k$ è costante. Se $x$ raddoppia, $y$ si dimezza. È il caso della pressione di un gas ideale a temperatura e quantità di sostanza fissate, per cui $pV$ è costante.

Per $y=kx^2$, raddoppiare $x$ moltiplica $y$ per quattro. L'energia cinetica $E_c=\dfrac12mv^2$, a massa fissata, ha questa dipendenza dal modulo della velocità.
:::

## Pendenza nei grafici del moto

:::osservazione{#moto titolo="Posizione, velocità e accelerazione"}
La velocità media in un intervallo è $v_m=\dfrac{s_2-s_1}{t_2-t_1}$. È la pendenza della retta che unisce i due punti del grafico posizione-tempo.

Nel grafico velocità-tempo la pendenza media è $a_m=\dfrac{v_2-v_1}{t_2-t_1}$. Per esempio, un passaggio da $2$ a $10\,\mathrm{m/s}$ in $4\,\mathrm{s}$ dà $a_m=2\,\mathrm{m/s^2}$. La pendenza di una retta coincide con quella di ogni suo tratto.
:::

## Area nel grafico velocità-tempo

:::osservazione{#area titolo="Spostamento e area con segno"}
L'area con segno sotto il grafico velocità-tempo rappresenta lo spostamento. Per velocità costante $v$ e durata $\Delta t$, il rettangolo ha area $v\Delta t$.

Se la velocità cresce linearmente da zero a $6\,\mathrm{m/s}$ in $4\,\mathrm{s}$, l'area triangolare è $\dfrac12\cdot4\cdot6=12\,\mathrm{m}$. Le parti sotto l'asse dei tempi contribuiscono con segno negativo. La distanza percorsa si ottiene invece sommando i valori assoluti delle aree.
:::
''', r'''
## Esponenziali

:::definizione{#esponenziale titolo="La variabile all'esponente"}
Per $a>0$, $a\ne1$, la funzione $y=a^x$ è un'esponenziale. Ha valori positivi e passa per $(0,1)$. È crescente per $a>1$ e decrescente per $0<a<1$.

Nell'equazione $2^x=8$ si scrive $8=2^3$, quindi $x=3$. Il modello $N(t)=N_0e^{-kt}$, con $k>0$, descrive una diminuzione esponenziale; il prodotto $kt$ è privo di dimensioni.
:::

## Logaritmi e dominio

:::definizione{#logaritmo titolo="Esponente corrispondente a un numero"}
Per $a>0$, $a\ne1$ e $x>0$, $\log_a x$ è l'esponente $y$ tale che $a^y=x$. Per esempio $\log_{10}1000=3$ e $\log_{10}0{,}01=-2$. Si usa $\ln x$ per il logaritmo in base $e$.

Nei modelli fisici l'argomento del logaritmo è un rapporto privo di dimensioni. La condizione $x>0$ si verifica prima di applicare le proprietà.
:::

## Proprietà e cambio di base

:::teorema{#proprieta titolo="Logaritmi di prodotti, quozienti e potenze"}
Per $x,y>0$ e $r$ reale valgono
$$
\log_a(xy)=\log_a x+\log_a y,\qquad
\log_a\frac{x}{y}=\log_a x-\log_a y,
$$
$$
\log_a(x^r)=r\log_a x,\qquad
\log_a x=\frac{\ln x}{\ln a}.
$$
Queste identità seguono dalle proprietà delle potenze. Per esempio $\log_{10}(2\cdot10^{-3})=\log_{10}2-3\approx-2{,}699$. L'uguaglianza permette di distinguere l'effetto del coefficiente da quello della potenza di dieci.
:::

## pH e concentrazione

:::osservazione{#ph titolo="Applicazione ai logaritmi decimali"}
Il pH è definito attraverso l'attività degli ioni idrogeno. Negli esercizi su soluzioni acquose sufficientemente diluite e ideali si usa l'approssimazione
$$
\mathrm{pH}\approx-\log_{10}\left(\frac{[\mathrm{H_3O^+}]}{1\,\mathrm{mol/L}}\right).
$$
Se la concentrazione vale $10^{-3}\,\mathrm{mol/L}$, il pH è circa $3$. Viceversa, dato il pH, $[\mathrm{H_3O^+}]\approx10^{-\mathrm{pH}}\,\mathrm{mol/L}$. Una concentrazione dieci volte maggiore abbassa il pH di una unità in questa approssimazione.
:::

## Livelli sonori

:::definizione{#decibel titolo="Logaritmo di un rapporto di intensità"}
Il livello di intensità sonora è $L=10\log_{10}\left(\dfrac{I}{I_0}\right)\,\mathrm{dB}$, dove $I>0$ e $I_0>0$ è l'intensità di riferimento. Se $\dfrac{I}{I_0}=10^4$, allora $L=40\,\mathrm{dB}$.

Per due intensità la differenza dei livelli è $\Delta L=10\log_{10}\left(\dfrac{I_2}{I_1}\right)\,\mathrm{dB}$. Un'intensità cento volte maggiore dà quindi un aumento di $20\,\mathrm{dB}$.
:::

## Tempo di dimezzamento

:::osservazione{#dimezzamento titolo="Ricavare il tempo in un modello esponenziale"}
Nel modello $N=N_0e^{-kt}$, il rapporto $\dfrac{N}{N_0}=e^{-kt}$ permette di applicare il logaritmo naturale. Si ricava
$$
t=\frac{\ln(N_0/N)}{k},\qquad T_{\frac12}=\frac{\ln2}{k}.
$$
Dopo due tempi di dimezzamento resta $\dfrac14$ della quantità iniziale; dopo tre resta $\dfrac18$. Per esempio, con $T_{\frac12}=4\,\mathrm{h}$, dopo $12\,\mathrm{h}$ resta il $12{,}5\%$ iniziale.
:::
''', r'''
## Triangoli rettangoli

:::definizione{#pitagora titolo="Cateti e ipotenusa"}
In un triangolo rettangolo, l'ipotenusa $c$ è il lato opposto all'angolo retto. Se $a$ e $b$ sono i cateti, vale $c^2=a^2+b^2$. Quindi $c=\sqrt{a^2+b^2}$.

Con cateti di $3\,\mathrm{m}$ e $4\,\mathrm{m}$ si ottiene $c=5\,\mathrm{m}$. La stessa relazione servirà a calcolare il modulo di un vettore dalle sue componenti perpendicolari.
:::

## Gradi e radianti

:::definizione{#radianti titolo="Due unità per gli angoli"}
Un angolo giro misura $360^\circ$ oppure $2\pi$ radianti. In una circonferenza di raggio $r>0$, un angolo di $\theta$ radianti individua un arco di lunghezza $s=r\theta$.
$$
\theta_{\mathrm{rad}}=\theta_{\mathrm{gradi}}\frac{\pi}{180},\qquad
\theta_{\mathrm{gradi}}=\theta_{\mathrm{rad}}\frac{180}{\pi}.
$$
Per esempio $60^\circ=\dfrac{\pi}{3}$ radianti. Il valore numerico passato a una calcolatrice dipende dall'unità selezionata.
:::

## Seno, coseno e tangente

:::definizione{#rapporti titolo="Rapporti tra i lati"}
Per un angolo acuto $\theta$ di un triangolo rettangolo,
$$
\sin\theta=\frac{\text{cateto opposto}}{\text{ipotenusa}},\qquad
\cos\theta=\frac{\text{cateto adiacente}}{\text{ipotenusa}},\qquad
\tan\theta=\frac{\sin\theta}{\cos\theta}.
$$
Lato opposto e lato adiacente si individuano rispetto all'angolo scelto. Se l'ipotenusa misura $10\,\mathrm{m}$ e l'angolo è $30^\circ$, il cateto opposto vale $10\sin30^\circ=5\,\mathrm{m}$.
:::

## Valori e identità

:::osservazione{#identita titolo="Angoli notevoli"}
Il teorema di Pitagora applicato a un triangolo di ipotenusa unitaria dà $\sin^2\theta+\cos^2\theta=1$.

| Angolo | Seno | Coseno | Tangente |
| --- | --- | --- | --- |
| $30^\circ$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ | $\dfrac{1}{\sqrt3}$ |
| $45^\circ$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ | $1$ |
| $60^\circ$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ | $\sqrt3$ |

I valori permettono di mantenere i risultati esatti, per esempio $10\cos30^\circ=5\sqrt3$, prima di arrotondare.
:::

## Proiezioni e componenti

:::osservazione{#proiezioni titolo="Scomposizione lungo due assi"}
Un segmento orientato di modulo $A$ e angolo $\theta$ misurato dal semiasse positivo $x$ ha componenti $A_x=A\cos\theta$ e $A_y=A\sin\theta$. Il segno dipende dal verso della proiezione.

Per $\theta=120^\circ$, il coseno vale $-\dfrac12$ e il seno vale $\dfrac{\sqrt3}{2}$: la componente orizzontale è negativa e quella verticale positiva. Sul piano inclinato di angolo $\alpha$, il peso ha modulo $mg\sin\alpha$ lungo la discesa e $mg\cos\alpha$ perpendicolarmente al piano.
:::

## Ricavare un angolo

:::osservazione{#inverse titolo="Funzioni trigonometriche inverse"}
In un triangolo rettangolo, se il rapporto tra cateto opposto e adiacente vale $r>0$, l'angolo acuto è $\theta=\arctan r$. Per cateti uguali il rapporto vale uno, quindi $\theta=45^\circ$.

Per un vettore nel piano occorrono anche i segni delle componenti per individuare il quadrante. Il solo rapporto $\dfrac{A_y}{A_x}$ è uguale per vettori opposti, per esempio $(1,1)$ e $(-1,-1)$, che hanno direzioni angolari rispettivamente di $45^\circ$ e $225^\circ$.
:::
''', r'''
## Grandezze scalari e vettoriali

:::definiz{#scalari titolo="Numero oppure modulo, direzione e verso"}
Una grandezza scalare, come la massa, è descritta da un valore con unità. Un **vettore**, come lo spostamento o la forza, ha modulo, direzione e verso. Nel piano si rappresenta con due componenti $\vec A=(A_x,A_y)$.

Lo spostamento $(3,4)\,\mathrm{m}$ indica $3\,\mathrm{m}$ lungo l'asse $x$ e $4\,\mathrm{m}$ lungo l'asse $y$. Le due componenti hanno la stessa unità.
:::

## Modulo e componenti

:::definizione{#modulo titolo="Lunghezza del vettore"}
Il modulo di $\vec A=(A_x,A_y)$ è $|\vec A|=\sqrt{A_x^2+A_y^2}$. Per $\vec A=(3,4)\,\mathrm{m}$ si ottiene $|\vec A|=5\,\mathrm{m}$.

Se l'angolo $\theta$ è misurato dal semiasse positivo $x$, allora $A_x=|\vec A|\cos\theta$ e $A_y=|\vec A|\sin\theta$. La somma dei quadrati delle componenti restituisce il quadrato del modulo, poiché $\cos^2\theta+\sin^2\theta=1$.
:::

## Somma e differenza

:::osservazione{#somma titolo="Operazioni componente per componente"}
Per $\vec A=(A_x,A_y)$ e $\vec B=(B_x,B_y)$ valgono
$$
\vec A+\vec B=(A_x+B_x,A_y+B_y),\qquad
\vec A-\vec B=(A_x-B_x,A_y-B_y).
$$
Per esempio $(3,1)+(2,-4)=(5,-3)$. Sottrarre $\vec B$ equivale a sommare $-\vec B$, che ha lo stesso modulo e verso opposto. Le forze agenti su un corpo si sommano così per ottenere la risultante.
:::

## Multipli e versori

:::definizione{#versori titolo="Fattore scalare e vettore unitario"}
Per un numero reale $k$, $k\vec A=(kA_x,kA_y)$ e $|k\vec A|=|k||\vec A|$. Un fattore negativo inverte il verso.

Per $\vec A\ne\vec0$, il versore associato è $\widehat A=\dfrac{\vec A}{|\vec A|}$ e ha modulo uno. Per $(3,4)$ il versore è $\left(\dfrac35,\dfrac45\right)$. I versori cartesiani $\hat\imath$ e $\hat\jmath$ permettono di scrivere $\vec A=A_x\hat\imath+A_y\hat\jmath$.
:::

## Prodotto scalare e lavoro

:::definizione{#scalare titolo="Uno scalare ottenuto da due vettori"}
Il prodotto scalare è $\vec A\cdot\vec B=A_xB_x+A_yB_y=|\vec A||\vec B|\cos\theta$, dove $\theta$ è l'angolo tra i vettori. Per vettori non nulli, il prodotto è zero se sono perpendicolari.

Il lavoro di una forza costante lungo uno spostamento è $W=\vec F\cdot\vec s$. Una forza di $10\,\mathrm{N}$ che forma $60^\circ$ con uno spostamento di $2\,\mathrm{m}$ compie $W=10\cdot2\cos60^\circ=10\,\mathrm{J}$. Il segno dipende dal coseno dell'angolo.
:::

## Prodotto vettoriale

:::definizione{#vettoriale titolo="Modulo, direzione e verso del prodotto"}
Nello spazio, $\vec A\times\vec B$ è perpendicolare a entrambi i vettori e ha modulo $|\vec A||\vec B|\sin\theta$. Il verso segue la regola della mano destra: le dita ruotano dal primo vettore al secondo attraverso l'angolo minore, il pollice indica il prodotto.

Per due vettori nel piano $xy$, la componente lungo $z$ è $A_xB_y-A_yB_x$. Per $(2,0,0)$ e $(0,3,0)$ il prodotto è $(0,0,6)$; invertendo l'ordine si ottiene $(0,0,-6)$. Il prodotto vettoriale si usa nel momento di una forza e nella forza magnetica.
:::
'''.replace(':::definiz{', ':::definizione{')]

def q(n):
    n=Fraction(n)
    if n.denominator==1: return str(n.numerator)
    return (('-' if n<0 else '')+r'\frac{'+str(abs(n.numerator))+'}{'+str(n.denominator)+'}')

def d(n):
    return f'{float(n):.10f}'.rstrip('0').rstrip('.').replace('.', '{,}')

def e(titolo, traccia, passaggi, risposta, spiegazione, errate, ancora):
    assert len(errate)==3 and len(set([risposta,*errate]))==4, (titolo, risposta, errate)
    return dict(titolo=titolo, traccia=traccia, passaggi=passaggi, risposta=risposta, spiegazione=spiegazione, errate=errate, ancora=ancora)

def esercizi(p):
    """p=0: esempi svolti; p=1: esercizi diversi con soluzioni e quiz."""
    out=[]
    # I. Calcolo e proporzioni: otto applicazioni con risultati esatti.
    z=[]; a,b,c,h=(2,3,1,6) if p==0 else (3,4,1,8); r=Fraction(a,b)+Fraction(c,h)
    z.append(e('Somme di frazioni',fr'Calcolare $\dfrac{{{a}}}{{{b}}}+\dfrac{{{c}}}{{{h}}}$.',fr'\frac{{{a}}}{{{b}}}+\frac{{{c}}}{{{h}}}=\frac{{{a*h+c*b}}}{{{b*h}}}={q(r)}',q(r),'Si esprimono i due addendi con un denominatore comune. La somma dei numeratori rappresenta quindi il numero totale di parti; alla fine si semplifica la frazione.',[q(r+1),q(r-Fraction(1,2)),q(r*2)],'frazioni'))
    a,b,c,h=(3,4,1,2) if p==0 else (5,6,1,3); r=Fraction(a,b)/Fraction(c,h)
    z.append(e('Quozienti di frazioni',fr'Calcolare $\dfrac{{{a}}}{{{b}}}:\dfrac{{{c}}}{{{h}}}$.',fr'\frac{{{a}}}{{{b}}}:\frac{{{c}}}{{{h}}}=\frac{{{a}}}{{{b}}}\cdot\frac{{{h}}}{{{c}}}={q(r)}',q(r),'Il divisore è diverso da zero, quindi si moltiplica per la frazione reciproca. Il prodotto si semplifica dividendo numeratore e denominatore per i fattori comuni.',[q(r/2),q(r+1),q(-r)],'operazioni'))
    m,V,v=(6,300,50) if p==0 else (8,400,150); r=Fraction(m*v,V)
    z.append(e('Campioni di una soluzione',fr'Una soluzione omogenea contiene ${m}\,\mathrm{{g}}$ di soluto in ${V}\,\mathrm{{mL}}$. Quanti grammi di soluto contiene un campione di ${v}\,\mathrm{{mL}}$?',fr'm={m}\cdot\frac{{{v}}}{{{V}}}\,\mathrm{{g}}={q(r)}\,\mathrm{{g}}',q(r)+r'\,\mathrm{g}','Il campione ha la stessa concentrazione della soluzione. La massa di soluto è quindi direttamente proporzionale al volume prelevato; il rapporto tra i volumi è privo di unità.',[q(r*2)+r'\,\mathrm{g}',q(Fraction(m*V,v))+r'\,\mathrm{g}',q(r/10)+r'\,\mathrm{g}'],'proporzioni'))
    perc,m=(12,250) if p==0 else (8,350); r=Fraction(perc*m,100)
    z.append(e('Percentuali di una massa',fr'Una miscela di massa ${m}\,\mathrm{{g}}$ contiene un componente al ${perc}\%$ in massa. Calcolare la massa del componente.',fr'm_c=\frac{{{perc}}}{{100}}\cdot{m}\,\mathrm{{g}}={q(r)}\,\mathrm{{g}}',q(r)+r'\,\mathrm{g}','La percentuale in massa usa come riferimento la massa totale della miscela. Si moltiplica quindi la massa totale per la frazione indicata dalla percentuale.',[q(r*10)+r'\,\mathrm{g}',q(m-r)+r'\,\mathrm{g}',q(r/10)+r'\,\mathrm{g}'],'percentuali'))
    x,y=(40,50) if p==0 else (80,100); r=Fraction((y-x)*100,x)
    z.append(e('Variazioni relative',fr'Una grandezza passa da ${x}$ a ${y}$ nelle stesse unità. Qual è il suo aumento percentuale?',fr'p=\frac{{{y}-{x}}}{{{x}}}\cdot100={q(r)}\%',q(r)+r'\%','La differenza tra valore finale e valore iniziale si divide per il valore iniziale. Il rapporto misura la variazione rispetto alla quantità di partenza; moltiplicandolo per cento si ottiene la percentuale.',[r'20\%',r'125\%',r'5\%'],'variazioni'))
    x=(100 if p==0 else 200); r=Fraction(x*120*80,10000)
    z.append(e('Variazioni successive',fr'Una quantità iniziale di ${x}$ aumenta del $20\%$ e poi diminuisce del $20\%$. Calcolare il valore finale.',fr'x_f={x}\cdot1{{,}}2\cdot0{{,}}8={q(r)}',q(r),'La diminuzione si applica al valore già aumentato. I due fattori si moltiplicano e danno 0,96; il risultato finale è quindi il 96% del valore iniziale.',[q(x),q(Fraction(x*104,100)),q(Fraction(x*80,100))],'variazioni'))
    v1,v2,c1,c2=(100,300,2,6) if p==0 else (200,100,3,9); r=Fraction(v1*c1+v2*c2,v1+v2)
    z.append(e('Medie ponderate di concentrazioni',fr'Si mescolano ${v1}\,\mathrm{{mL}}$ di soluzione a ${c1}\,\mathrm{{g/L}}$ e ${v2}\,\mathrm{{mL}}$ a ${c2}\,\mathrm{{g/L}}$. I volumi sono additivi e il soluto non reagisce. Calcolare la concentrazione finale.',fr'c_f=\frac{{{v1}\cdot{c1}+{v2}\cdot{c2}}}{{{v1}+{v2}}}={q(r)}\,\mathrm{{g/L}}',q(r)+r'\,\mathrm{g/L}','La quantità di soluto si somma. Dividendo per il volume totale si ottiene una media ponderata, in cui i pesi sono i volumi espressi nella stessa unità.',[q(r+1)+r'\,\mathrm{g/L}',q(r-1)+r'\,\mathrm{g/L}',q(r*2)+r'\,\mathrm{g/L}'],'media'))
    m,tot=(9,150) if p==0 else (12,300); r=Fraction(m*100,tot)
    z.append(e('Percentuali dalla composizione',fr'Una soluzione ha massa totale ${tot}\,\mathrm{{g}}$ e contiene ${m}\,\mathrm{{g}}$ di soluto. Calcolare la percentuale in massa del soluto.',fr'p=\frac{{{m}}}{{{tot}}}\cdot100={q(r)}\%',q(r)+r'\%','Il denominatore è la massa totale della soluzione. Il rapporto tra massa del soluto e massa della soluzione è la frazione massica; il suo valore moltiplicato per cento è la percentuale.',[q(r/10)+r'\%',q(r*10)+r'\%',q(100-r)+r'\%'],'percentuali')); out.append(z)
    # II. Potenze e notazione scientifica.
    z=[]; a,b=(-3,5) if p==0 else (-4,7); n=a+b
    z.append(e('Prodotti di potenze',fr'Calcolare $10^{{{a}}}\cdot10^{{{b}}}$.',fr'10^{{{a}}}\cdot10^{{{b}}}=10^{{{a}+({b})}}=10^{{{n}}}',fr'10^{{{n}}}','Le due potenze hanno la stessa base. Nel prodotto si sommano gli esponenti, mantenendo il segno di ciascuno; il coefficiente di entrambe le potenze è uno.',[fr'10^{{{a-b}}}',fr'10^{{{a*b}}}',fr'10^{{{-n}}}'],'proprieta'))
    a,b=(-3,-5) if p==0 else (-2,-6); n=a-b
    z.append(e('Quozienti di potenze',fr'Calcolare $\dfrac{{10^{{{a}}}}}{{10^{{{b}}}}}$.',fr'\frac{{10^{{{a}}}}}{{10^{{{b}}}}}=10^{{{a}-({b})}}=10^{{{n}}}',fr'10^{{{n}}}','Nel quoziente si sottrae l’esponente del denominatore. Poiché tale esponente è negativo, la sottrazione equivale in questo caso ad aggiungere il suo valore assoluto.',[fr'10^{{{a+b}}}',fr'10^{{{-n}}}',fr'10^{{{n+1}}}'],'proprieta'))
    c,n=(72,-5) if p==0 else (45,-6); val=c*10.0**n; ans=fr'{d(c/10)}\cdot10^{{{n+1}}}'
    z.append(e('Scritture in notazione scientifica',fr'Scrivere ${d(val)}$ in notazione scientifica.',fr'{d(val)}={c}\cdot10^{{{n}}}={ans}',ans,'Il coefficiente deve essere almeno uno e minore di dieci. Si sposta quindi la virgola fino a ottenere un coefficiente con una sola cifra intera e si compensa lo spostamento con la potenza di dieci.',[fr'{d(c/10)}\cdot10^{{{n-1}}}',fr'{d(c/10)}\cdot10^{{{-n-1}}}',fr'{d(c/10)}\cdot10^{{{n}}}'],'scientifica'))
    a,b=(3,4) if p==0 else (4,5); c=Fraction(a*b,10); ans=fr'{d(c)}\cdot10^3'
    z.append(e('Prodotti in notazione scientifica',fr'Calcolare $({a}\cdot10^4)({b}\cdot10^{{-2}})$ e dare il risultato in notazione scientifica.',fr'({a}\cdot10^4)({b}\cdot10^{{-2}})={a*b}\cdot10^2={ans}',ans,'Si moltiplicano i coefficienti e si sommano gli esponenti. Il coefficiente del prodotto supera dieci, quindi si divide per dieci e si aumenta l’esponente di una unità.',[fr'{d(c)}\cdot10^2',fr'{d(c)}\cdot10^6',fr'{d(c)}\cdot10^{{-3}}'],'operazioni'))
    a,b=(2,5) if p==0 else (3,7); c=Fraction(a*10+b,10); ans=fr'{d(c)}\cdot10^{{-3}}'
    z.append(e('Somme con scale diverse',fr'Calcolare ${a}\cdot10^{{-3}}+{b}\cdot10^{{-4}}$.',fr'{a}\cdot10^{{-3}}+{b}\cdot10^{{-4}}=({a*10}+{b})\cdot10^{{-4}}={ans}',ans,'Per sommare si esprimono i termini con la stessa potenza di dieci. Si sommano poi i coefficienti e si riporta il risultato alla notazione scientifica.',[fr'{a+b}\cdot10^{{-7}}',fr'{a+b}\cdot10^{{-3}}',fr'{d(c)}\cdot10^{{-4}}'],'operazioni'))
    a=(3 if p==0 else 4); ans=fr'{a}\cdot10^{{-3}}'
    z.append(e('Radici di numeri in notazione scientifica',fr'Calcolare $\sqrt{{{a*a}\cdot10^{{-6}}}}$.',fr'\sqrt{{{a*a}\cdot10^{{-6}}}}=\sqrt{{{a*a}}}\,\sqrt{{10^{{-6}}}}={ans}',ans,'Il radicando è positivo. La radice del coefficiente è nota e la radice di una potenza di dieci con esponente pari si ottiene dimezzando l’esponente.',[fr'{a}\cdot10^{{-6}}',fr'{a*a}\cdot10^{{-3}}',fr'-{a}\cdot10^{{-3}}'],'radici'))
    a=(5 if p==0 else 7); ans=q(a)
    z.append(e('Radici e valore assoluto',fr'Calcolare $\sqrt{{(-{a})^2}}$.',fr'\sqrt{{(-{a})^2}}=|-{a}|={a}',ans,'La radice quadrata indica per definizione il valore non negativo. Il quadrato elimina il segno del numero di partenza, quindi il risultato coincide con il suo valore assoluto.',[q(-a),q(a*a),q(-a*a)],'radici'))
    value,ans=('0{,}00450','3') if p==0 else ('0{,}007200','4')
    z.append(e('Conteggio delle cifre significative',fr'Quante cifre significative ha il numero ${value}$?',fr'{value}='+(r'4{,}50\cdot10^{-3}' if p==0 else r'7{,}200\cdot10^{-3}'),ans,'Gli zeri che precedono la prima cifra diversa da zero individuano soltanto la posizione della virgola. Gli zeri finali scritti dopo le cifre decimali significative dichiarano invece la precisione del dato e si contano.',(['2','4','5'] if p==0 else ['2','3','6']),'stime')); out.append(z)
    # III. Conversioni.
    z=[]; x=(75 if p==0 else 125); r=Fraction(x,1000)
    z.append(e('Conversioni di lunghezze',fr'Esprimere ${x}\,\mathrm{{mm}}$ in metri.',fr'{x}\,\mathrm{{mm}}={x}\cdot10^{{-3}}\,\mathrm{{m}}={d(r)}\,\mathrm{{m}}',d(r)+r'\,\mathrm{m}','Il prefisso milli indica un millesimo dell’unità. Si moltiplica quindi il numero di millimetri per dieci alla meno tre per ottenere la lunghezza in metri.',[d(r*10)+r'\,\mathrm{m}',d(r*100)+r'\,\mathrm{m}',d(r/10)+r'\,\mathrm{m}'],'prefissi'))
    x=(25 if p==0 else 60); r=Fraction(x,10000)
    z.append(e('Conversioni di aree',fr'Esprimere ${x}\,\mathrm{{cm^2}}$ in metri quadrati.',fr'{x}\,\mathrm{{cm^2}}={x}(10^{{-2}}\,\mathrm{{m}})^2={d(r)}\,\mathrm{{m^2}}',d(r)+r'\,\mathrm{m^2}','La conversione riguarda un’area, quindi il fattore tra centimetri e metri viene elevato al quadrato. Il fattore complessivo è dieci alla meno quattro.',[d(r*100)+r'\,\mathrm{m^2}',d(r*10)+r'\,\mathrm{m^2}',d(r/100)+r'\,\mathrm{m^2}'],'aree-volumi'))
    x=(250 if p==0 else 400); r=Fraction(x,1000000)
    z.append(e('Conversioni di volumi',fr'Esprimere ${x}\,\mathrm{{mL}}$ in metri cubi.',fr'{x}\,\mathrm{{mL}}={x}\cdot10^{{-6}}\,\mathrm{{m^3}}={d(r)}\,\mathrm{{m^3}}',d(r)+r'\,\mathrm{m^3}','Un millilitro coincide con un centimetro cubo. Il fattore di conversione del centimetro si eleva al cubo, quindi un millilitro vale dieci alla meno sei metri cubi.',[d(r*1000)+r'\,\mathrm{m^3}',d(r*10)+r'\,\mathrm{m^3}',d(r/100)+r'\,\mathrm{m^3}'],'aree-volumi'))
    x=(72 if p==0 else 90); r=Fraction(x*10,36)
    z.append(e('Conversioni di velocità',fr'Esprimere ${x}\,\mathrm{{km/h}}$ in metri al secondo.',fr'v={x}\cdot\frac{{1000}}{{3600}}\,\mathrm{{m/s}}={q(r)}\,\mathrm{{m/s}}',q(r)+r'\,\mathrm{m/s}','Si convertono i chilometri in metri e le ore in secondi. Il rapporto tra i due fattori equivale a dividere per 3,6; le unità risultanti sono metri al secondo.',[q(x*Fraction(36,10))+r'\,\mathrm{m/s}',q(r/10)+r'\,\mathrm{m/s}',q(r*10)+r'\,\mathrm{m/s}'],'composte'))
    rho=(Fraction(12,10) if p==0 else Fraction(27,10)); r=rho*1000
    z.append(e('Conversioni di densità',fr'Esprimere ${d(rho)}\,\mathrm{{g/cm^3}}$ in chilogrammi al metro cubo.',fr'\rho={d(rho)}\frac{{10^{{-3}}\,\mathrm{{kg}}}}{{10^{{-6}}\,\mathrm{{m^3}}}}={q(r)}\,\mathrm{{kg/m^3}}',q(r)+r'\,\mathrm{kg/m^3}','Il grammo vale un millesimo di chilogrammo e il centimetro cubo un milionesimo di metro cubo. Dividendo i fattori si ottiene mille, quindi il valore numerico aumenta di un fattore mille.',[d(rho)+r'\,\mathrm{kg/m^3}',d(rho/1000)+r'\,\mathrm{kg/m^3}',q(r*10)+r'\,\mathrm{kg/m^3}'],'composte'))
    n,V=(Fraction(1,10),250) if p==0 else (Fraction(3,10),500); r=n/Fraction(V,1000)
    z.append(e('Concentrazioni molari',fr'Una soluzione contiene ${d(n)}\,\mathrm{{mol}}$ in un volume finale di ${V}\,\mathrm{{mL}}$. Calcolare la concentrazione in $\mathrm{{mol/L}}$.',fr'V={d(Fraction(V,1000))}\,\mathrm{{L}},\qquad c=\frac{{{d(n)}}}{{{d(Fraction(V,1000))}}}={d(r)}\,\mathrm{{mol/L}}',d(r)+r'\,\mathrm{mol/L}','La concentrazione molare è la quantità di sostanza divisa per il volume finale della soluzione. Per ottenere moli al litro, il volume espresso in millilitri viene prima convertito in litri.',[d(r/1000)+r'\,\mathrm{mol/L}',d(r*10)+r'\,\mathrm{mol/L}',d(1/r)+r'\,\mathrm{mol/L}'],'concentrazione'))
    c,V1,V2=(Fraction(2,1),50,500) if p==0 else (Fraction(3,2),100,500); r=c*V1/V2
    z.append(e('Diluizioni senza reazione',fr'Un campione di ${V1}\,\mathrm{{mL}}$ a ${d(c)}\,\mathrm{{mol/L}}$ viene diluito fino al volume finale di ${V2}\,\mathrm{{mL}}$. Il soluto si conserva. Calcolare la concentrazione finale.',fr'c_2=c_1\frac{{V_1}}{{V_2}}={d(c)}\cdot\frac{{{V1}}}{{{V2}}}={d(r)}\,\mathrm{{mol/L}}',d(r)+r'\,\mathrm{mol/L}','La quantità di soluto iniziale e finale è la stessa, quindi vale il prodotto concentrazione per volume. Nel rapporto tra i due volumi le unità uguali si semplificano.',[d(c*V2/V1)+r'\,\mathrm{mol/L}',d(r/10)+r'\,\mathrm{mol/L}',d(c)+r'\,\mathrm{mol/L}'],'concentrazione'))
    expr,ans=(r'\dfrac{\text{lunghezza}}{\text{tempo}^2}',r'LT^{-2}') if p==0 else (r'\text{massa}\cdot\dfrac{\text{lunghezza}}{\text{tempo}^2}',r'MLT^{-2}')
    z.append(e('Dimensioni delle grandezze',fr'Indicando massa, lunghezza e tempo con $M,L,T$, qual è la dimensione di ${expr}$?',(r'a=\dfrac{\Delta v}{\Delta t},\qquad[a]=\dfrac{LT^{-1}}{T}=LT^{-2}' if p==0 else r'F=ma,\qquad[F]=M\cdot LT^{-2}=MLT^{-2}'),ans,'Le dimensioni si trattano come prodotti e quozienti di simboli. Il tempo al denominatore con esponente due produce il fattore T alla meno due; gli altri fattori restano al numeratore.',([r'LT^{-1}',r'L^2T^{-2}',r'LT^2'] if p==0 else [r'MLT^{-1}',r'ML^2T^{-2}',r'ML^{-1}T^{-2}']),'dimensioni')); out.append(z)
    # IV. Equazioni e formule inverse.
    z=[]; a,b,c=(3,5,20) if p==0 else (4,7,35); r=Fraction(c-b,a)
    z.append(e('Equazioni di primo grado',fr'Risolvere ${a}x+{b}={c}$.',fr'{a}x={c}-{b}={c-b},\qquad x=\frac{{{c-b}}}{{{a}}}={q(r)}',q(r),'Si sottrae lo stesso termine ai due membri per isolare il termine con l’incognita. Poiché il suo coefficiente è diverso da zero, si divide poi per quel coefficiente.',[q(r+1),q(Fraction(c+b,a)),q(-r)],'equivalenza'))
    m,rho=(120,3) if p==0 else (200,4); r=Fraction(m,rho)
    z.append(e('Volumi da massa e densità',fr'La massa di un corpo è ${m}\,\mathrm{{g}}$ e la sua densità è ${rho}\,\mathrm{{g/cm^3}}$. Da $\rho=\dfrac{{m}}{{V}}$ ricavare il volume.',fr'\rho V=m,\qquad V=\frac{{m}}{{\rho}}=\frac{{{m}}}{{{rho}}}\,\mathrm{{cm^3}}={q(r)}\,\mathrm{{cm^3}}',q(r)+r'\,\mathrm{cm^3}','Si moltiplicano entrambi i membri per il volume e si divide per la densità positiva. Il rapporto tra grammi e grammi al centimetro cubo ha unità centimetri cubi.',[q(m*rho)+r'\,\mathrm{cm^3}',q(r/10)+r'\,\mathrm{cm^3}',q(1/r)+r'\,\mathrm{cm^3}'],'inverse'))
    b,h=(2,4) if p==0 else (3,5); r=h*3-b
    z.append(e('Equazioni con denominatori',fr'Risolvere $\dfrac{{x+{b}}}{{3}}={h}$.',fr'x+{b}=3\cdot{h}={h*3},\qquad x={h*3}-{b}={r}',q(r),'Il denominatore è il numero tre, quindi è diverso da zero. Moltiplicando i due membri per tre si elimina la divisione; sottraendo il termine noto si isola l’incognita.',[q(h-b),q(h*3+b),q(-r)],'parentesi'))
    Q,mc,Ti=(600,200,20) if p==0 else (1000,250,18); r=Fraction(Q,mc)+Ti
    z.append(e('Temperature da una formula',fr'Nel modello $Q=mc(T_f-T_i)$ sono dati $Q={Q}\,\mathrm{{J}}$, $mc={mc}\,\mathrm{{J/K}}$ e $T_i={Ti}\,^\circ\mathrm{{C}}$. Calcolare $T_f$.',fr'T_f=T_i+\frac{{Q}}{{mc}}={Ti}+\frac{{{Q}}}{{{mc}}}={q(r)}\,^\circ\mathrm{{C}}',q(r)+r'\,^\circ\mathrm{C}','Dividendo per il prodotto mc si ottiene la variazione di temperatura. Una differenza di un kelvin ha lo stesso valore numerico di una differenza di un grado Celsius, quindi si somma tale variazione alla temperatura iniziale.',[q(Fraction(Q,mc))+r'\,^\circ\mathrm{C}',q(Ti-Fraction(Q,mc))+r'\,^\circ\mathrm{C}',q(r+10)+r'\,^\circ\mathrm{C}'],'parentesi'))
    E,m,v=(18,4,3) if p==0 else (50,4,5)
    z.append(e('Velocità dall’energia cinetica',fr'Un corpo di massa ${m}\,\mathrm{{kg}}$ ha energia cinetica ${E}\,\mathrm{{J}}$. Da $E_c=\dfrac12mv^2$ ricavare il modulo della velocità.',fr'v^2=\frac{{2E_c}}{{m}}=\frac{{{2*E}}}{{{m}}}={v*v}\,\mathrm{{m^2/s^2}},\qquad v={v}\,\mathrm{{m/s}}',q(v)+r'\,\mathrm{m/s}','Si moltiplica l’energia per due e si divide per la massa. Si applica poi la radice quadrata; poiché si cerca il modulo della velocità, si seleziona il valore non negativo.',[q(v*v)+r'\,\mathrm{m/s}',q(-v)+r'\,\mathrm{m/s}',q(Fraction(v,2))+r'\,\mathrm{m/s}'],'quadratiche'))
    a,b=(2,3) if p==0 else (3,4); su=a+b; pr=a*b; ans=fr'x={a}\ \text{{oppure}}\ x={b}'
    z.append(e('Equazioni di secondo grado',fr'Risolvere $x^2-{su}x+{pr}=0$.',fr'x^2-{su}x+{pr}=(x-{a})(x-{b})=0,\qquad {ans}',ans,'Si cercano due numeri la cui somma sia il coefficiente del termine lineare cambiato di segno e il cui prodotto sia il termine noto. Il prodotto dei due fattori è zero se almeno uno dei fattori è zero.',[fr'x=-{a}\ \text{{oppure}}\ x=-{b}',fr'x=0\ \text{{oppure}}\ x={su}',fr'x={pr}'],'quadratiche'))
    x,y=(4,6) if p==0 else (5,7); s=x+y; t=2*x+y; ans=fr'x={x},\ y={y}'
    z.append(e('Sistemi lineari',fr'Risolvere il sistema $x+y={s}$ e $2x+y={t}$.',fr'x={t}-{s}={x},\qquad y={s}-{x}={y}',ans,'Le due equazioni devono valere contemporaneamente. Sottraendo la prima dalla seconda si elimina y e si trova x; la sostituzione nella prima permette poi di ottenere y.',[fr'x={y},\ y={x}',fr'x={s},\ y={t}',fr'x={x},\ y=-{y}'],'sistemi'))
    a=(3 if p==0 else 4); ans=fr'{a}\,\mathrm{{s}}'
    z.append(e('Scelta della soluzione fisica',fr'Un tempo trascorso $t\ge0$ soddisfa $t^2={a*a}\,\mathrm{{s^2}}$. Qual è il valore ammesso di $t$?',fr't=\pm{a}\,\mathrm{{s}},\qquad t\ge0\ \Longrightarrow\ t={a}\,\mathrm{{s}}',ans,'L’equazione algebrica ammette due valori opposti. Il dato specifica che si tratta di un tempo trascorso non negativo, quindi resta soltanto la soluzione positiva.',[fr'-{a}\,\mathrm{{s}}',fr'{a*a}\,\mathrm{{s}}',r'0\,\mathrm{s}'],'condizioni')); out.append(z)
    # V. Funzioni e grafici.
    z=[]; m,b,x=(2,1,3) if p==0 else (3,2,4); r=m*x+b
    z.append(e('Valori di una funzione affine',fr'Data $y={m}x+{b}$, calcolare $y$ per $x={x}$.',fr'y={m}\cdot{x}+{b}={r}',q(r),'La funzione assegna un valore di y al valore scelto di x. Si sostituisce il dato e si esegue prima il prodotto, poi la somma con l’intercetta.',[q(m*x),q(r+1),q(r-b*2)],'grafico'))
    t1,t2,s1,s2=(1,4,3,12) if p==0 else (2,6,5,21); r=Fraction(s2-s1,t2-t1)
    z.append(e('Pendenze tra due punti',fr'Una posizione passa da ${s1}\,\mathrm{{m}}$ al tempo ${t1}\,\mathrm{{s}}$ a ${s2}\,\mathrm{{m}}$ al tempo ${t2}\,\mathrm{{s}}$. Calcolare la velocità media.',fr'v_m=\frac{{{s2}-{s1}}}{{{t2}-{t1}}}\,\mathrm{{m/s}}={q(r)}\,\mathrm{{m/s}}',q(r)+r'\,\mathrm{m/s}','La velocità media usa la variazione della posizione divisa per la durata dell’intervallo. Si sottraggono quindi i valori delle coordinate con lo stesso ordine al numeratore e al denominatore.',[q(Fraction(s2,t2-t1))+r'\,\mathrm{m/s}',q(1/r)+r'\,\mathrm{m/s}',q(-r)+r'\,\mathrm{m/s}'],'moto'))
    m,q0=(2,5) if p==0 else (4,7)
    z.append(e('Lettura delle intercette',fr'La posizione è $s(t)=({m}\,\mathrm{{m/s}})t+{q0}\,\mathrm{{m}}$. Qual è la posizione iniziale?',fr's(0)={m}\cdot0+{q0}={q0}\,\mathrm{{m}}',q(q0)+r'\,\mathrm{m}','La posizione iniziale è il valore della funzione al tempo zero. Il termine proporzionale al tempo si annulla, quindi resta l’intercetta del grafico posizione-tempo.',[q(m)+r'\,\mathrm{m}',q(q0+m)+r'\,\mathrm{m}',r'0\,\mathrm{m}'],'retta'))
    f=(2 if p==0 else 3); r=f
    z.append(e('Proporzionalità diretta',fr'A densità costante, il volume di un corpo viene moltiplicato per ${f}$. Per quale fattore cambia la sua massa?',fr'm=\rho V,\qquad m_2=\rho({f}V_1)={f}m_1',q(r),'La densità resta fissata, quindi la massa è direttamente proporzionale al volume. Il rapporto tra massa finale e massa iniziale coincide con il rapporto tra i volumi.',[q(Fraction(1,f)),q(f*f),q(1)],'diretta'))
    f=(2 if p==0 else 4); r=Fraction(1,f)
    z.append(e('Proporzionalità inversa',fr'Per un gas ideale a temperatura e quantità di sostanza fissate vale $pV=k$. Il volume viene moltiplicato per ${f}$. Quanto vale il rapporto $\dfrac{{p_2}}{{p_1}}$?',fr'p_2=\frac{{k}}{{{f}V_1}}=\frac{{p_1}}{{{f}}},\qquad\frac{{p_2}}{{p_1}}={q(r)}',q(r),'Il prodotto tra pressione e volume resta costante. Aumentando il volume di un fattore dato, la pressione viene divisa per lo stesso fattore.',[q(f),q(f*f),q(1)],'inversa-quadratica'))
    f=(2 if p==0 else 3); r=f*f
    z.append(e('Dipendenze quadratiche',fr'A massa costante, il modulo della velocità viene moltiplicato per ${f}$. Per quale fattore cambia l’energia cinetica?',fr'\frac{{E_2}}{{E_1}}=\frac{{\frac12m({f}v_1)^2}}{{\frac12mv_1^2}}={f}^2={r}',q(r),'A massa fissata l’energia cinetica è proporzionale al quadrato del modulo della velocità. Il fattore applicato alla velocità viene quindi elevato al quadrato.',[q(f),q(Fraction(1,f)),q(Fraction(1,r))],'inversa-quadratica'))
    v,t=(4,5) if p==0 else (6,4); r=v*t
    z.append(e('Aree rettangolari nel grafico del moto',fr'Un corpo mantiene velocità ${v}\,\mathrm{{m/s}}$ per ${t}\,\mathrm{{s}}$. Calcolare lo spostamento come area nel grafico velocità-tempo.',fr'\Delta s=v\Delta t={v}\cdot{t}\,\mathrm{{m}}={r}\,\mathrm{{m}}',q(r)+r'\,\mathrm{m}','Nel grafico velocità-tempo il tratto è orizzontale e l’area è un rettangolo. Il prodotto della base, misurata in secondi, per l’altezza, misurata in metri al secondo, restituisce metri.',[q(Fraction(v,t))+r'\,\mathrm{m}',q(Fraction(r,2))+r'\,\mathrm{m}',q(v+t)+r'\,\mathrm{m}'],'area'))
    v,t=(6,4) if p==0 else (8,5); r=Fraction(v*t,2)
    z.append(e('Aree triangolari nel grafico del moto',fr'La velocità cresce linearmente da zero a ${v}\,\mathrm{{m/s}}$ in ${t}\,\mathrm{{s}}$. Calcolare lo spostamento.',fr'\Delta s=\frac12\Delta t\,v_f=\frac12\cdot{t}\cdot{v}\,\mathrm{{m}}={q(r)}\,\mathrm{{m}}',q(r)+r'\,\mathrm{m}','L’area sotto il grafico è un triangolo con base uguale alla durata e altezza uguale alla velocità finale. Lo spostamento è quindi metà del prodotto tra base e altezza.',[q(r*2)+r'\,\mathrm{m}',q(r/2)+r'\,\mathrm{m}',q(Fraction(v,t))+r'\,\mathrm{m}'],'area')); out.append(z)
    # VI. Logaritmi ed esponenziali.
    z=[]; n=(3 if p==0 else 4)
    z.append(e('Equazioni esponenziali',fr'Risolvere $2^x={2**n}$.',fr'2^x=2^{n},\qquad x={n}',q(n),'Si riscrive il secondo membro come potenza della stessa base del primo. L’esponenziale di base due è strettamente crescente, quindi potenze uguali hanno esponenti uguali.',[q(2**n),q(n+1),q(-n)],'esponenziale'))
    n=(-3 if p==0 else -5)
    z.append(e('Logaritmi di potenze di dieci',fr'Calcolare $\log_{{10}}(10^{{{n}}})$.',fr'\log_{{10}}(10^{{{n}}})={n}',q(n),'Il logaritmo in base dieci restituisce l’esponente della potenza di dieci che forma il suo argomento. L’argomento è positivo anche quando l’esponente è negativo.',[q(-n),q(Fraction(1,n)),q(n-1)],'logaritmo'))
    n,m=(2,3) if p==0 else (3,4); ans=q(n+m)
    z.append(e('Logaritmi di prodotti',fr'Calcolare $\log_{{10}}(10^{n}\cdot10^{m})$.',fr'\log_{{10}}(10^{n}\cdot10^{m})=\log_{{10}}10^{n}+\log_{{10}}10^{m}={n+m}',ans,'Il logaritmo di un prodotto di numeri positivi è la somma dei logaritmi. Si applica poi la definizione a ciascuna potenza di dieci.',[q(n*m),q(n-m),q(n+m+2)],'proprieta'))
    n=(3 if p==0 else 4)
    z.append(e('pH da una concentrazione',fr'In una soluzione acquosa ideale diluita, $[\mathrm{{H_3O^+}}]=10^{{-{n}}}\,\mathrm{{mol/L}}$. Calcolare il pH con l’approssimazione basata sulla concentrazione.',fr'\mathrm{{pH}}\approx-\log_{{10}}(10^{{-{n}}})={n}',q(n),'Nell’approssimazione indicata il pH è il logaritmo decimale della concentrazione relativa all’unità, cambiato di segno. Il logaritmo della potenza di dieci è il suo esponente; il segno meno esterno lo cambia.',[q(-n),q(14-n),q(n+1)],'ph'))
    n=(5 if p==0 else 6); ans=fr'10^{{-{n}}}\,\mathrm{{mol/L}}'
    z.append(e('Concentrazioni dal pH',fr'Una soluzione acquosa ideale diluita ha $\mathrm{{pH}}={n}$. Stimare $[\mathrm{{H_3O^+}}]$ in $\mathrm{{mol/L}}$.',fr'[\mathrm{{H_3O^+}}]\approx10^{{-\mathrm{{pH}}}}\,\mathrm{{mol/L}}={ans}',ans,'Si applica l’inversa del logaritmo in base dieci. Poiché il logaritmo della concentrazione relativa è l’opposto del pH, la concentrazione si ottiene dalla potenza di dieci con esponente negativo.',[fr'10^{n}\,\mathrm{{mol/L}}',fr'10^{{-{n+1}}}\,\mathrm{{mol/L}}',fr'{n}\,\mathrm{{mol/L}}'],'ph'))
    n=(4 if p==0 else 5); r=10*n
    z.append(e('Livelli di intensità sonora',fr'Il rapporto tra intensità sonora e intensità di riferimento è $\dfrac{{I}}{{I_0}}=10^{n}$. Calcolare $L=10\log_{{10}}\left(\dfrac{{I}}{{I_0}}\right)\,\mathrm{{dB}}$.',fr'L=10\log_{{10}}(10^{n})\,\mathrm{{dB}}=10\cdot{n}\,\mathrm{{dB}}={r}\,\mathrm{{dB}}',q(r)+r'\,\mathrm{dB}','Il rapporto tra le intensità è privo di dimensioni e positivo. Il suo logaritmo è l’esponente della potenza di dieci; moltiplicando per dieci si trova il livello in decibel.',[q(n)+r'\,\mathrm{dB}',q(r*2)+r'\,\mathrm{dB}',q(10**n)+r'\,\mathrm{dB}'],'decibel'))
    ratio=(100 if p==0 else 1000); n=(2 if p==0 else 3); r=10*n
    z.append(e('Differenze di livelli sonori',fr'L’intensità sonora finale è ${ratio}$ volte quella iniziale. Di quanti decibel aumenta il livello di intensità sonora?',fr'\Delta L=10\log_{{10}}({ratio})\,\mathrm{{dB}}={r}\,\mathrm{{dB}}',q(r)+r'\,\mathrm{dB}','La differenza tra i livelli dipende dal logaritmo del rapporto tra intensità finale e iniziale. Il rapporto è una potenza di dieci, quindi il logaritmo coincide con il suo esponente.',[q(n)+r'\,\mathrm{dB}',q(ratio)+r'\,\mathrm{dB}',q(r*2)+r'\,\mathrm{dB}'],'decibel'))
    T,t=(4,12) if p==0 else (5,10); n=t//T; r=Fraction(100,2**n)
    z.append(e('Dimezzamenti successivi',fr'Una quantità si dimezza ogni ${T}\,\mathrm{{h}}$. Quale percentuale di quella iniziale resta dopo ${t}\,\mathrm{{h}}$?',fr'n=\frac{{{t}}}{{{T}}}={n},\qquad\frac{{N}}{{N_0}}=\left(\frac12\right)^{{{n}}}=\frac{{1}}{{{2**n}}},\qquad p={d(r)}\%',d(r)+r'\%','Il tempo trascorso contiene un numero intero di tempi di dimezzamento. A ogni intervallo si moltiplica per un mezzo, quindi la frazione residua è una potenza di un mezzo; la percentuale è cento volte tale frazione.',[d(r*2)+r'\%',d(100-r)+r'\%',d(r/2)+r'\%'],'dimezzamento')); out.append(z)
    # VII. Trigonometria.
    z=[]; a,b,c=(3,4,5) if p==0 else (5,12,13)
    z.append(e('Ipotenuse dai cateti',fr'Un triangolo rettangolo ha cateti di ${a}\,\mathrm{{cm}}$ e ${b}\,\mathrm{{cm}}$. Calcolare l’ipotenusa.',fr'c=\sqrt{{{a}^2+{b}^2}}=\sqrt{{{a*a+b*b}}}={c}\,\mathrm{{cm}}',q(c)+r'\,\mathrm{cm}','Per il teorema di Pitagora il quadrato dell’ipotenusa è la somma dei quadrati dei cateti. La radice quadrata positiva restituisce la lunghezza cercata.',[q(a+b)+r'\,\mathrm{cm}',q(c*c)+r'\,\mathrm{cm}',q(b-a)+r'\,\mathrm{cm}'],'pitagora'))
    deg,n=(60,3) if p==0 else (45,4); ans=fr'\frac{{\pi}}{{{n}}}\,\mathrm{{rad}}'
    z.append(e('Conversioni in radianti',fr'Esprimere ${deg}^\circ$ in radianti.',fr'\theta={deg}\frac{{\pi}}{{180}}={ans}',ans,'Mezzo giro corrisponde sia a 180 gradi sia a pi greco radianti. Si moltiplica quindi il numero di gradi per pi greco diviso 180 e si semplifica la frazione.',[fr'\frac{{\pi}}{{{n*2}}}\,\mathrm{{rad}}',fr'{n}\pi\,\mathrm{{rad}}',fr'\frac{{{n}}}{{\pi}}\,\mathrm{{rad}}'],'radianti'))
    n,deg=(6,30) if p==0 else (3,60)
    z.append(e('Conversioni in gradi',fr'Esprimere $\dfrac{{\pi}}{{{n}}}$ radianti in gradi.',fr'\theta=\frac{{\pi}}{{{n}}}\cdot\frac{{180}}{{\pi}}={deg}^\circ',fr'{deg}^\circ','Per passare dai radianti ai gradi si moltiplica per 180 diviso pi greco. Il fattore pi greco si semplifica e resta un quoziente tra numeri interi.',[fr'{deg*2}^\circ',fr'{deg/2:g}^\circ',fr'{180+deg}^\circ'],'radianti'))
    h=(10 if p==0 else 14); ans=q(Fraction(h,2))+r'\,\mathrm{m}'
    z.append(e('Cateti opposti da un angolo',fr'Un triangolo rettangolo ha ipotenusa di ${h}\,\mathrm{{m}}$ e un angolo di $30^\circ$. Calcolare il cateto opposto a tale angolo.',fr'a={h}\sin30^\circ={h}\cdot\frac12={ans}',ans,'Il seno è il rapporto tra cateto opposto e ipotenusa. Moltiplicando il seno dell’angolo per l’ipotenusa si ottiene quindi il cateto richiesto; il seno di 30 gradi vale un mezzo.',[q(h)+r'\,\mathrm{m}',q(h*2)+r'\,\mathrm{m}',fr'{h//2}\sqrt3\,\mathrm{{m}}'],'rapporti'))
    h=(12 if p==0 else 18); ans=q(Fraction(h,2))+r'\,\mathrm{m}'
    z.append(e('Cateti adiacenti da un angolo',fr'Un triangolo rettangolo ha ipotenusa di ${h}\,\mathrm{{m}}$ e un angolo di $60^\circ$. Calcolare il cateto adiacente a tale angolo.',fr'b={h}\cos60^\circ={h}\cdot\frac12={ans}',ans,'Il coseno è il rapporto tra cateto adiacente e ipotenusa. Il coseno di 60 gradi vale un mezzo, quindi il cateto adiacente è metà dell’ipotenusa.',[q(h)+r'\,\mathrm{m}',q(h*2)+r'\,\mathrm{m}',fr'{h//2}\sqrt3\,\mathrm{{m}}'],'rapporti'))
    x=(5 if p==0 else 8)
    z.append(e('Angoli dai cateti',fr'Rispetto a un angolo acuto $\theta$, i cateti opposto e adiacente misurano entrambi ${x}\,\mathrm{{cm}}$. Calcolare $\theta$.',fr'\tan\theta=\frac{{{x}}}{{{x}}}=1,\qquad\theta=45^\circ',r'45^\circ','La tangente dell’angolo è il rapporto tra cateto opposto e cateto adiacente. Poiché i cateti sono uguali, il rapporto è uno e l’angolo acuto corrispondente misura 45 gradi.',[r'30^\circ',r'60^\circ',r'90^\circ'],'inverse'))
    A=(10 if p==0 else 16); ans=fr'-{A//2}\,\mathrm{{N}}'
    z.append(e('Segni delle proiezioni',fr'Una forza di modulo ${A}\,\mathrm{{N}}$ forma un angolo di $120^\circ$ con il semiasse positivo $x$. Calcolare la componente $F_x$.',fr'F_x={A}\cos120^\circ={A}\left(-\frac12\right)={ans}',ans,'L’angolo è misurato dal semiasse positivo x. Nel secondo quadrante il coseno è negativo, quindi la componente orizzontale è opposta al verso positivo dell’asse e vale meno metà del modulo.',[fr'{A//2}\,\mathrm{{N}}',fr'{A}\,\mathrm{{N}}',fr'-{A}\,\mathrm{{N}}'],'proiezioni'))
    r=(2 if p==0 else 3); ans=fr'\frac{{{r}\pi}}{{3}}\,\mathrm{{m}}' if r!=3 else r'\pi\,\mathrm{m}'
    z.append(e('Lunghezze di archi',fr'Una circonferenza ha raggio ${r}\,\mathrm{{m}}$. Calcolare la lunghezza dell’arco corrispondente a $60^\circ$.',fr'\theta=\frac{{\pi}}{{3}},\qquad s=r\theta={r}\cdot\frac{{\pi}}{{3}}\,\mathrm{{m}}={ans}',ans,'La formula della lunghezza dell’arco usa l’angolo in radianti. Si convertono quindi i 60 gradi in pi greco diviso tre e si moltiplica per il raggio della circonferenza.',[fr'{r*60}\,\mathrm{{m}}',fr'{r*2}\pi\,\mathrm{{m}}',fr'\frac{{{r}\pi}}{{6}}\,\mathrm{{m}}'],'radianti')); out.append(z)
    # VIII. Vettori.
    z=[]; a,b,c=(3,4,5) if p==0 else (6,8,10)
    z.append(e('Moduli dalle componenti',fr'Un vettore ha componenti $({a},{b})\,\mathrm{{m}}$. Calcolare il suo modulo.',fr'|\vec A|=\sqrt{{{a}^2+{b}^2}}={c}\,\mathrm{{m}}',q(c)+r'\,\mathrm{m}','Le componenti cartesiane sono perpendicolari. Il teorema di Pitagora permette quindi di ottenere il modulo come radice della somma dei loro quadrati.',[q(a+b)+r'\,\mathrm{m}',q(c*c)+r'\,\mathrm{m}',q(b-a)+r'\,\mathrm{m}'],'modulo'))
    a,b,c,h=(3,1,2,-4) if p==0 else (4,-2,-1,5); ans=fr'({a+c},{b+h})'
    z.append(e('Somme di vettori',fr'Dati $\vec A=({a},{b})$ e $\vec B=({c},{h})$, calcolare $\vec A+\vec B$.',fr'\vec A+\vec B=({a}+({c}),{b}+({h}))={ans}',ans,'La somma si esegue componente per componente. I segni di ciascuna componente indicano il verso rispetto al relativo asse e si conservano nel calcolo.',[fr'({a-c},{b-h})',fr'({a+c},{b-h})',fr'({a*c},{b*h})'],'somma'))
    a,b,c,h=(5,2,1,4) if p==0 else (2,6,5,1); ans=fr'({a-c},{b-h})'
    z.append(e('Differenze di vettori',fr'Dati $\vec A=({a},{b})$ e $\vec B=({c},{h})$, calcolare $\vec A-\vec B$.',fr'\vec A-\vec B=({a}-({c}),{b}-({h}))={ans}',ans,'La differenza si ottiene sottraendo a ciascuna componente del primo vettore la corrispondente componente del secondo. Equivale a sommare il vettore opposto al secondo.',[fr'({a+c},{b+h})',fr'({c-a},{h-b})',fr'({a-c},{b+h})'],'somma'))
    a,b,k=(2,-3,-2) if p==0 else (-1,4,-3); ans=fr'({a*k},{b*k})'
    z.append(e('Prodotti per uno scalare',fr'Dato $\vec A=({a},{b})$, calcolare ${k}\vec A$.',fr'{k}\vec A=({k}\cdot({a}),{k}\cdot({b}))={ans}',ans,'Il fattore scalare moltiplica ogni componente. Poiché è negativo, il vettore risultante ha verso opposto rispetto a quello di partenza e modulo moltiplicato per il valore assoluto del fattore.',[fr'({-a*k},{-b*k})',fr'({a*k},{b})',fr'({a},{b*k})'],'versori'))
    a,b,c,h=(2,3,4,-1) if p==0 else (3,-2,2,4); r=a*c+b*h
    z.append(e('Prodotti scalari dalle componenti',fr'Dati $\vec A=({a},{b})$ e $\vec B=({c},{h})$, calcolare $\vec A\cdot\vec B$.',fr'\vec A\cdot\vec B={a}\cdot({c})+{b}\cdot({h})={r}',q(r),'Si moltiplicano le componenti corrispondenti e si sommano i due prodotti. Il risultato è uno scalare e il suo segno dipende dai valori delle componenti.',[q(a*c-b*h),q(a*h-b*c),q(-r)],'scalare'))
    F,s=(10,2) if p==0 else (12,3); r=Fraction(F*s,2)
    z.append(e('Lavori di forze inclinate',fr'Una forza costante di modulo ${F}\,\mathrm{{N}}$ forma $60^\circ$ con uno spostamento di ${s}\,\mathrm{{m}}$. Calcolare il lavoro della forza.',fr'W=Fs\cos60^\circ={F}\cdot{s}\cdot\frac12\,\mathrm{{J}}={q(r)}\,\mathrm{{J}}',q(r)+r'\,\mathrm{J}','Il lavoro è il prodotto scalare della forza per lo spostamento. Il coseno dell’angolo seleziona la componente della forza lungo lo spostamento; per 60 gradi tale fattore vale un mezzo.',[q(F*s)+r'\,\mathrm{J}',q(-r)+r'\,\mathrm{J}',q(r/2)+r'\,\mathrm{J}'],'scalare'))
    a,b=(2,3) if p==0 else (3,4); ans=fr'(0,0,{a*b})'
    z.append(e('Prodotti vettoriali orientati',fr'Dati $\vec A=({a},0,0)$ e $\vec B=(0,{b},0)$, calcolare $\vec A\times\vec B$.',fr'(\vec A\times\vec B)_z=A_xB_y-A_yB_x={a}\cdot{b}-0={a*b},\qquad\vec A\times\vec B={ans}',ans,'Il primo vettore è diretto lungo il semiasse positivo x e il secondo lungo il semiasse positivo y. La regola della mano destra dà il verso positivo z; il modulo è il prodotto dei moduli poiché i vettori sono perpendicolari.',[fr'(0,0,-{a*b})',fr'({a*b},0,0)',fr'(0,{a*b},0)'],'vettoriale'))
    a,b,c=(3,4,5) if p==0 else (5,12,13); ans=fr'\left(\frac{{{a}}}{{{c}}},\frac{{{b}}}{{{c}}}\right)'
    z.append(e('Versori dalle componenti',fr'Dato $\vec A=({a},{b})$, calcolare il versore con la stessa direzione e lo stesso verso.',fr'|\vec A|=\sqrt{{{a*a}+{b*b}}}={c},\qquad\widehat A=\frac{{\vec A}}{{|\vec A|}}={ans}',ans,'Il vettore è diverso da zero, quindi si può dividere per il suo modulo. La divisione di entrambe le componenti per lo stesso numero positivo conserva direzione e verso e rende il modulo uguale a uno.',[fr'\left(\frac{{{b}}}{{{c}}},\frac{{{a}}}{{{c}}}\right)',fr'({a},{b})',fr'\left(-\frac{{{a}}}{{{c}}},-\frac{{{b}}}{{{c}}}\right)'],'versori')); out.append(z)
    assert len(out)==8 and all(len(x)==8 for x in out)
    return out

def scrivi(path,testo):
    path=Path(path); path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(testo.strip()+'\n')

def genera():
    svolti,pratici=esercizi(0),esercizi(1)
    titoli_schede=[
      ['Frazioni e rapporti','Proporzioni e percentuali in soluzione','Variazioni percentuali','Medie e composizioni'],
      ['Prodotti e quozienti di potenze','Notazione scientifica e prodotti','Somme e radici','Valori assoluti e precisione'],
      ['Lunghezze e aree','Volumi e velocità','Densità e concentrazioni','Diluizioni e dimensioni'],
      ['Equazioni lineari e formule inverse','Denominatori e temperature','Radici e equazioni quadratiche','Sistemi e vincoli fisici'],
      ['Valori e pendenze','Intercette e proporzionalità diretta','Relazioni inverse e quadratiche','Aree nei grafici del moto'],
      ['Esponenziali e logaritmi','Proprietà e calcolo del pH','Concentrazioni e livelli sonori','Decibel e dimezzamenti'],
      ['Pitagora e radianti','Gradi e rapporti trigonometrici','Coseno e angoli inversi','Proiezioni e archi'],
      ['Moduli e somme','Differenze e multipli','Prodotti scalari e lavoro','Prodotti vettoriali e versori'],
    ]
    for i,(slug,titolo,breve,sommario) in enumerate(CAPITOLI):
        scrivi(f'src/content/teoria/{MATERIA}/{slug}.md',f'---\ntitolo: {json.dumps(titolo,ensure_ascii=False)}\nsommario: {json.dumps(sommario,ensure_ascii=False)}\n---\n'+TEORIE[i])
        for j in range(4):
            v=svolti[i][j*2:j*2+2]; ancore=list(dict.fromkeys(x['ancora'] for x in v))
            testo=f'---\ntitolo: {json.dumps(titoli_schede[i][j],ensure_ascii=False)}\ngratis: {str(j < 3).lower()}\nteoria: [{", ".join(ancore)}]\nparole: {json.dumps([breve,"semestre filtro","matematica preparatoria"],ensure_ascii=False)}\n---\n'
            for n,x in enumerate(v,1):
                testo+=f'\n## Esercizio {n}\n\n{x["traccia"]}\n\n$$\n{x["passaggi"]}\n$$\n\n<div class="spiegazione">\n\n{x["spiegazione"]}\n\n</div>\n'
            scrivi(f'src/content/svolti/{MATERIA}/{slug}/{j+1}.md',testo)
        for j,x in enumerate(pratici[i]):
            assert x['traccia']!=svolti[i][j]['traccia']
            front=f'---\ntitolo: {json.dumps(x["titolo"],ensure_ascii=False)}\nteoria: [{x["ancora"]}]\nparole: {json.dumps([breve,"semestre filtro"],ensure_ascii=False)}\n---\n'
            scrivi(f'src/content/dafare/{MATERIA}/{slug}/{j+1}.md',front+f'\n{x["traccia"]}\n\n:::soluzione\n${x["risposta"]}$.\n:::\n')
            pos=(i+j)%4; scelte=list(x['errate']); scelte.insert(pos,x['risposta'])
            body=f'---\ncorretta: {pos+1}\n---\n\n{x["traccia"]}\n\n'+'\n'.join(f'- ${s}$' for s in scelte)
            body+=f'\n\n## Spiegazione\n\n{x["spiegazione"]}\n\n$$\n{x["passaggi"]}\n$$\n\n[Teoria: {titolo}](/{MATERIA}/{slug}/teoria#{x["ancora"]}).\n'
            scrivi(f'src/content/domande/{MATERIA}/{slug}/{j+1}.md',body)
    print('Creati 8 capitoli, 32 schede con 64 esercizi svolti, 64 esercizi da fare e 64 domande a tempo.')

if __name__=='__main__': genera()
