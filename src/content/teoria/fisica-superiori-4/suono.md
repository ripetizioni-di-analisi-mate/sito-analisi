---
titolo: Suono, risonanza ed effetto Doppler
sommario: Onde di pressione, frequenza e intensità sonora, decibel, eco, battimenti, armoniche nei tubi ed effetto Doppler classico.
---

## Propagazione del suono

:::definizione{#suono titolo="Onda sonora"}
Il **suono** in aria è un'onda meccanica longitudinale. La vibrazione della sorgente produce compressioni e rarefazioni che si propagano; le particelle del mezzo oscillano nella direzione di propagazione. La distanza fra due massimi consecutivi della pressione è la lunghezza d'onda $\lambda$.

Il suono richiede un mezzo materiale. Nel vuoto non si propaga, mentre la luce può farlo. La velocità $u$ dipende dal mezzo e dal suo stato. Nei problemi si userà il valore dichiarato dal testo, spesso $340\,\mathrm{m/s}$ per l'aria. Vale $u=\lambda f$, come per le altre onde. Un tono di $680\,\mathrm{Hz}$ con $u=340\,\mathrm{m/s}$ ha $\lambda=0{,}50\,\mathrm m$.

Quando il suono passa in un altro mezzo, la frequenza imposta dalla sorgente resta la stessa in una situazione stazionaria con interfaccia ferma. Cambiano invece velocità e lunghezza d'onda. Una velocità maggiore a frequenza costante corrisponde a una lunghezza d'onda maggiore.
:::

::grafico{f="sin(pi*x)" xmin=0 xmax=6 ymin=-2 ymax=2 nomi="x,Δp" titolo="Variazione di pressione in un istante per un suono armonico: i massimi sono compressioni rispetto alla pressione media"}

## Altezza, timbro e ampiezza

:::definizione{#caratteri-suono titolo="Caratteri di un suono"}
L'**altezza** è collegata alla frequenza: un suono con frequenza maggiore è percepito come più acuto. Il **timbro** dipende dalla composizione delle frequenze e dall'evoluzione temporale della vibrazione. Due strumenti possono emettere la stessa fondamentale e risultare distinguibili perché hanno armoniche con ampiezze diverse.

L'ampiezza dell'oscillazione di pressione è collegata all'intensità dell'onda. L'intensità fisica non coincide però con la sensazione soggettiva di volume, che dipende anche dalla frequenza e dalla risposta dell'orecchio. Un suono puro è approssimativamente sinusoidale; un suono periodico complesso può contenere una fondamentale e armoniche con frequenze multiple.

Se la fondamentale è $200\,\mathrm{Hz}$, la seconda e la terza armonica sono rispettivamente $400$ e $600\,\mathrm{Hz}$. Raddoppiare tutte le frequenze produce un suono un'ottava più alto, mentre modificare le ampiezze relative delle armoniche cambia il timbro. Nei problemi queste grandezze si distinguono dalle caratteristiche del mezzo che determinano la velocità di propagazione.
:::

## Intensità e sorgenti puntiformi

:::definizione{#intensita titolo="Potenza per unità di superficie"}
L'**intensità sonora** $I$ è la potenza media che attraversa una superficie perpendicolare alla propagazione, divisa per l'area. Si misura in $\mathrm{W/m^2}$. Per una sorgente puntiforme isotropa in spazio libero, senza assorbimento né riflessioni,
$$
I=\frac{P}{4\pi r^2}.
$$
$P$ è la potenza sonora totale e $r$ la distanza dalla sorgente. La potenza si distribuisce sulla superficie sferica di area $4\pi r^2$. Raddoppiando la distanza, l'intensità diventa un quarto. Con $P=1{,}0\,\mathrm W$ e $r=2{,}0\,\mathrm m$ si ottiene $I\simeq1{,}99\cdot10^{-2}\,\mathrm{W/m^2}$.

La legge dell'inverso del quadrato richiede il modello indicato. In una stanza, le riflessioni sulle pareti e l'assorbimento modificano il campo sonoro. Per un'onda armonica nello stesso mezzo, l'intensità è proporzionale al quadrato dell'ampiezza di pressione; raddoppiare quell'ampiezza quadruplica quindi l'intensità.
:::

::grafico{f="1/x^2" xmin=1 xmax=5 ymin=0 ymax=2 nomi="r,I" titolo="Intensità normalizzata di una sorgente puntiforme isotropa: a distanza doppia l'intensità vale un quarto"}

## Livello sonoro in decibel

:::definizione{#decibel titolo="Scala logaritmica delle intensità"}
Il **livello di intensità sonora** si definisce con
$$
\beta=10\log_{10}\frac{I}{I_0},\qquad I_0=10^{-12}\,\mathrm{W/m^2}.
$$
Si esprime in decibel, simbolo $\mathrm{dB}$. Il logaritmo è in base dieci e il suo argomento è senza unità. Per $I=10^{-6}\,\mathrm{W/m^2}$ si ha $\dfrac{I}{I_0}=10^6$, quindi $\beta=60\,\mathrm{dB}$. La relazione inversa è $I=I_0\,10^{\beta/10}$.

Il confronto fra due intensità dà $\beta_2-\beta_1=10\log_{10}\dfrac{I_2}{I_1}$. Un'intensità dieci volte maggiore aumenta il livello di $10\,\mathrm{dB}$; un'intensità doppia lo aumenta di circa $3{,}01\,\mathrm{dB}$. Per la sorgente puntiforme ideale, raddoppiare la distanza diminuisce il livello di circa $6{,}02\,\mathrm{dB}$.
:::

:::attenzione
I livelli in decibel non si sommano direttamente. Due sorgenti indipendenti di uguale intensità, ciascuna da $60\,\mathrm{dB}$ nel punto considerato, danno intensità totale doppia e livello di circa $63\,\mathrm{dB}$. Per sorgenti coerenti occorre invece considerare anche l'interferenza.
:::

## Eco e battimenti

:::teorema{#eco titolo="Tempo di andata e ritorno"}
Un impulso sonoro riflesso da una parete torna alla sorgente dopo aver percorso due volte la distanza $d$. Se la velocità è costante,
$$
\Delta t=\frac{2d}{u},\qquad d=\frac{u\Delta t}{2}.
$$
Con ritardo di $0{,}40\,\mathrm s$ e $u=340\,\mathrm{m/s}$, la parete dista $68\,\mathrm m$. Usare $u\Delta t$ darebbe la lunghezza dell'intero percorso, pari a $136\,\mathrm m$.
:::

:::definizione{#battimenti titolo="Frequenze vicine"}
Due suoni armonici di frequenze vicine e ampiezze confrontabili producono **battimenti**, cioè aumenti e diminuzioni periodici dell'ampiezza risultante. La frequenza dei battimenti è
$$
f_b=|f_1-f_2|.
$$
Con $f_1=440\,\mathrm{Hz}$ e $f_2=444\,\mathrm{Hz}$ si osservano quattro battimenti al secondo. Il tono percepito è vicino alla frequenza media, mentre il lento inviluppo dipende dalla differenza. La variazione del volume consente di confrontare due frequenze durante l'accordatura di uno strumento.
:::

::grafico{f="cos(20*x)+cos(22*x)" xmin=0 xmax=7 ymin=-3 ymax=3 nomi="t,y" titolo="Somma di due oscillazioni con pulsazioni vicine: l'ampiezza della risultante cresce e diminuisce formando un inviluppo"}

## Risonanza nei tubi sonori

:::teorema{#tubi titolo="Tubi aperti e chiusi a un'estremità"}
Nel modello ideale, l'estremo aperto di un tubo è un ventre dello spostamento dell'aria e un nodo della variazione di pressione. L'estremo chiuso è un nodo dello spostamento e un ventre della pressione. Sono grandezze diverse, quindi le due descrizioni sono compatibili.

Per un tubo aperto a entrambe le estremità di lunghezza $L$, trascurando la correzione degli estremi,
$$
f_n=\frac{nu}{2L},\qquad n=1,2,3,\ldots
$$
Per un tubo chiuso a un'estremità e aperto all'altra,
$$
f_n=\frac{(2n-1)u}{4L},\qquad n=1,2,3,\ldots
$$
Nel secondo caso compaiono solo le armoniche dispari della fondamentale. Con $L=0{,}85\,\mathrm m$ e $u=340\,\mathrm{m/s}$, il tubo aperto ha fondamentale $200\,\mathrm{Hz}$ e il tubo chiuso $100\,\mathrm{Hz}$. La prima risonanza successiva del tubo chiuso è $300\,\mathrm{Hz}$, non $200\,\mathrm{Hz}$. Le formule si riferiscono a tubi uniformi ideali e a piccole oscillazioni dell'aria.
:::

## Effetto Doppler

:::teorema{#doppler titolo="Sorgente e osservatore in moto rispetto al mezzo"}
L'**effetto Doppler** è la differenza tra frequenza emessa e frequenza ricevuta quando sorgente e osservatore si muovono rispetto al mezzo. Per moti lungo la congiungente, con velocità subsoniche, si può usare
$$
f'=f\frac{u+v_o}{u-v_s},
$$
dove $v_o$ è positivo se l'osservatore si muove verso la sorgente e $v_s$ è positivo se la sorgente si muove verso l'osservatore. Le velocità sono misurate rispetto al mezzo. Un allontanamento si inserisce con il segno opposto.

Se la sorgente emette $600\,\mathrm{Hz}$ e si avvicina a $20\,\mathrm{m/s}$ a un osservatore fermo, con $u=340\,\mathrm{m/s}$,
$$
f'=600\frac{340}{340-20}\,\mathrm{Hz}=637{,}5\,\mathrm{Hz}.
$$
La sorgente in moto comprime la distanza fra i fronti d'onda davanti a sé. Un osservatore in moto incontra invece i fronti a una frequenza diversa. Per il suono le due situazioni producono formule diverse, perché esiste un mezzo di propagazione. Questo modello classico non si applica direttamente alla luce.
:::

## Confronti e lettura di un esperimento

:::osservazione{#misure titolo="Che cosa cambia in ciascun fenomeno"}
In un esperimento di eco la frequenza della sorgente non è necessaria per ricavare la distanza; servono velocità e ritardo. Nei battimenti interessa la differenza di frequenza. Nella risonanza si confronta la frequenza della sorgente con le frequenze proprie del sistema. Nell'effetto Doppler si distinguono la frequenza emessa e quella ricevuta.

Un'onda di frequenza $500\,\mathrm{Hz}$ in aria a $340\,\mathrm{m/s}$ ha lunghezza d'onda $0{,}68\,\mathrm m$. Spostare un ricevitore fisso in un altro punto cambia il tempo di arrivo e, per una sorgente sferica, l'intensità; non modifica la frequenza emessa. Mettere in moto il ricevitore rispetto all'aria produce invece lo spostamento Doppler. La distinzione fra posizione e velocità evita di applicare la formula Doppler a un semplice cambiamento della distanza.
:::
