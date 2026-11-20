---
titolo: "Metodi della fisica, grandezze e vettori"
sommario: "Dalle unità ai grafici: conversioni, stime, controlli dimensionali, trigonometria e operazioni vettoriali per costruire e verificare un ragionamento fisico."
---
:::osservazione{#programma titolo="Programma di riferimento"}
Il capitolo sviluppa l’unità 1 del [programma MUR di Fisica 2026/2027](https://www.mur.gov.it/sites/default/files/2026-06/Syllabus_FISICA_%20finale%202026.pdf). Un risultato fisico richiede un numero, un’unità e un significato: gli strumenti seguenti servono a conservarli durante ogni passaggio.
:::
## 1. Misurare una grandezza e scegliere un’unità

:::esempio{titolo="Numero, unità e grandezza"}
Misurare una lunghezza significa confrontarla con una lunghezza scelta come riferimento, detta unità. Il numero «2,4» da solo non descrive lo spessore di un campione, perché non dice se si tratta di millimetri o di centimetri. La scrittura $\ell=2{,}4\,\mathrm{cm}$ contiene tre informazioni: la grandezza misurata, $\ell$, il valore numerico, $2{,}4$, e l’unità, il centimetro. La stessa lunghezza espressa in metri è $0{,}024\,\mathrm{m}$. Il campione è lo stesso. È cambiata l’unità, quindi è cambiato il numero.
:::

:::definizione{#grandezze titolo="Grandezze fisiche e Sistema Internazionale"}
Una **grandezza fisica** è una proprietà di un oggetto o di un fenomeno che si può misurare, cioè esprimere con un numero e un’unità. Lunghezza, massa e tempo sono grandezze fisiche. Il **Sistema Internazionale** (SI) è l’insieme di unità usato in tutto il mondo. Ha sette unità di base.

| Grandezza di base | Unità | Simbolo |
| --- | --- | --- |
| Lunghezza | metro | $\mathrm{m}$ |
| Massa | chilogrammo | $\mathrm{kg}$ |
| Tempo | secondo | $\mathrm{s}$ |
| Corrente elettrica | ampere | $\mathrm{A}$ |
| Temperatura termodinamica | kelvin | $\mathrm{K}$ |
| Quantità di sostanza | mole | $\mathrm{mol}$ |
| Intensità luminosa | candela | $\mathrm{cd}$ |

Tutte le altre unità si ottengono moltiplicando e dividendo le unità di base, e si chiamano **unità derivate**. La velocità è una lunghezza divisa per un tempo, quindi si misura in $\mathrm{m/s}$. Alcune unità derivate hanno un nome proprio: il newton per la forza, $\mathrm{N}=\mathrm{kg\,m/s^2}$, il joule per l’energia, $\mathrm{J}=\mathrm{N\,m}$, e il pascal per la pressione, $\mathrm{Pa}=\mathrm{N/m^2}$.
:::

:::osservazione{titolo="Definizione, misura e significato dei simboli"}
Ogni misura ha un'**incertezza**, che dipende dallo strumento. Un cronometro che mostra i millesimi di secondo, azionato a mano, non misura con la precisione di un millesimo, perché il tempo di reazione di chi lo aziona è di circa due decimi di secondo. Il numero di cifre mostrate e la qualità della misura sono quindi due cose diverse.

Tre precisazioni sui simboli e sulle grandezze.

- Maiuscole e minuscole hanno significati diversi. Il simbolo $\mathrm{m}$ indica il metro e anche il prefisso milli, mentre $\mathrm{M}$ indica il prefisso mega.
- L’unità di base della massa è il chilogrammo e non il grammo.
- La massa e il peso sono grandezze diverse. La massa è la quantità di materia di un corpo e si misura in chilogrammi. Il peso è la forza con cui la Terra attira il corpo e si misura in newton.
:::

## 2. Conversioni, notazione scientifica e stime
:::definizione{#conversioni titolo="Cambiare unità senza cambiare grandezza"}
Per cambiare unità si moltiplica la grandezza per un **fattore di conversione**, cioè una frazione che ha al numeratore e al denominatore la stessa quantità scritta in due unità diverse. La frazione $\dfrac{1000\,\mathrm{m}}{1\,\mathrm{km}}$ vale 1, perché 1000 metri e 1 chilometro sono la stessa lunghezza. Moltiplicare per 1 non cambia la grandezza. Per convertire $108\,\mathrm{km/h}$ in metri al secondo servono due fattori, uno per la lunghezza e uno per il tempo.
$$
108\,\dfrac{\mathrm{km}}{\mathrm{h}}
\dfrac{1000\,\mathrm{m}}{1\,\mathrm{km}}
\dfrac{1\,\mathrm{h}}{3600\,\mathrm{s}}
=30\,\mathrm{m/s}.
$$
Il fattore si scrive in modo che l’unità da eliminare si semplifichi. I chilometri stanno al numeratore nel dato, quindi nel fattore stanno al denominatore. Le ore stanno al denominatore nel dato, quindi nel fattore stanno al numeratore. Restano i metri sopra e i secondi sotto, e il conto è $\dfrac{108\cdot1000}{3600}=30$.
:::

:::esempio{titolo="Prefissi, potenze e portate"}
Un **prefisso** davanti a un’unità la moltiplica per una potenza di dieci. I più comuni sono kilo (k, $10^3$), centi (c, $10^{-2}$), milli (m, $10^{-3}$), micro (μ, $10^{-6}$) e nano (n, $10^{-9}$). Quando un’unità con prefisso è elevata a potenza, anche il prefisso è elevato a potenza. Un centimetro quadrato è l’area di un quadrato di lato $1\,\mathrm{cm}=10^{-2}\,\mathrm{m}$, quindi:
$$
1\,\mathrm{cm^2}=(10^{-2}\,\mathrm{m})^2=10^{-4}\,\mathrm{m^2},\qquad
1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}.
$$
Per i volumi dei liquidi si usa il litro. Un litro è un decimetro cubo, cioè $10^{-3}\,\mathrm{m^3}$, e un millilitro è un centimetro cubo. Una **portata** è un volume diviso per un tempo, quindi richiede due conversioni. Per $4{,}8\,\mathrm{L/min}$ si sostituisce $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$ e $1\,\mathrm{min}=60\,\mathrm{s}$, e si ottiene $\dfrac{4{,}8\cdot10^{-3}\,\mathrm{m^3}}{60\,\mathrm{s}}=8{,}0\cdot10^{-5}\,\mathrm{m^3/s}$.
:::

![Un centimetro lungo ogni spigolo produce un fattore dieci alla meno sei nel volume in metri cubi.](/figure/fisica-semestre-filtro/metodi-della-fisica/volume-it.svg)

:::osservazione{titolo="Convertire una densità"}
La **densità** è la massa divisa per il volume, quindi si convertono entrambe le unità. Per $1{,}05\,\mathrm{g/cm^3}$ si sostituisce $1\,\mathrm{g}=10^{-3}\,\mathrm{kg}$ e $1\,\mathrm{cm^3}=10^{-6}\,\mathrm{m^3}$. Si ottiene $1{,}05\cdot\dfrac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}}=1{,}05\cdot10^{3}\,\mathrm{kg/m^3}=1050\,\mathrm{kg/m^3}$. Il numero aumenta di mille volte, perché un metro cubo contiene un milione di centimetri cubi e un chilogrammo contiene mille grammi.
:::

:::definizione{#notazione titolo="Notazione scientifica e ordine di grandezza"}
La **notazione scientifica** scrive un numero come prodotto $a\cdot10^n$, dove $a$ è compreso fra 1 e 10 ($1\le a<10$) e $n$ è un numero intero. Il numero $0{,}00012$, per esempio, si scrive $1{,}2\cdot10^{-4}$. Serve a scrivere in poco spazio numeri molto grandi o molto piccoli e a fare i conti più in fretta. In un prodotto si moltiplicano i numeri $a$ e si sommano gli esponenti. In una somma si portano prima i due termini alla stessa potenza di dieci.
$$
(3\cdot10^{-6})(4\cdot10^3)=1{,}2\cdot10^{-2},\qquad
3\cdot10^{-6}+4\cdot10^{-5}=4{,}3\cdot10^{-5}.
$$
Nel secondo conto $3\cdot10^{-6}$ è stato riscritto come $0{,}3\cdot10^{-5}$, e $0{,}3+4=4{,}3$.

L'**ordine di grandezza** di un numero è la potenza di dieci più vicina a esso. Per trovarlo si scrive il numero come $a\cdot10^n$. Se $a$ è minore di $\sqrt{10}\simeq3{,}16$ l’ordine di grandezza è $10^n$, altrimenti è $10^{n+1}$. La soglia è $\sqrt{10}$ perché è il numero che sta a metà strada fra 1 e 10 quando si procede per moltiplicazioni: $1\cdot\sqrt{10}=\sqrt{10}$ e $\sqrt{10}\cdot\sqrt{10}=10$. Alcuni testi usano come soglia 5, quindi negli esercizi il criterio viene indicato.
:::
![La soglia fra due ordini di grandezza è la loro media geometrica, non la media aritmetica.](/figure/fisica-semestre-filtro/metodi-della-fisica/orders-it.svg)

:::osservazione{titolo="Stime e cifre significative"}
La lunghezza $6\cdot10^{-6}\,\mathrm{m}$ ha ordine di grandezza $10^{-5}\,\mathrm{m}$, perché $6>3{,}16$. La lunghezza $2\cdot10^{-6}\,\mathrm{m}$ ha ordine di grandezza $10^{-6}\,\mathrm{m}$, perché $2<3{,}16$. Stimare l’ordine di grandezza di un risultato prima del calcolo permette di accorgersi di un errore di un fattore mille, come una conversione dimenticata.

Le **cifre significative** di un dato sono le cifre note con sicurezza più la prima incerta. Il dato $2{,}40\,\mathrm{g}$ ne ha tre, il dato $0{,}050\,\mathrm{g}$ ne ha due, perché gli zeri iniziali indicano solo la posizione della virgola. Il risultato di una moltiplicazione o di una divisione si scrive con tante cifre significative quante ne ha il dato che ne ha meno. Nei passaggi intermedi si tiene una cifra in più e si arrotonda solo alla fine.
:::

:::esempio{titolo="Un cambio di unità non migliora la misura"}
Una bilancia dà $m=(2{,}40\pm0{,}05)\,\mathrm{g}$. Il numero dopo il segno $\pm$ è l'**incertezza assoluta**, e la scrittura significa che la massa è compresa fra $2{,}35\,\mathrm{g}$ e $2{,}45\,\mathrm{g}$. Per passare ai chilogrammi si moltiplicano per $10^{-3}$ sia il valore sia l’incertezza.
$$
m=(2{,}40\cdot10^{-3}\pm5\cdot10^{-5})\,\mathrm{kg}.
$$
L'**incertezza relativa** è il rapporto fra l’incertezza e il valore, $\dfrac{0{,}05}{2{,}40}\simeq0{,}021$, cioè circa il 2%. È la stessa nelle due unità, perché numeratore e denominatore sono stati moltiplicati per lo stesso fattore. Cambiare unità non rende quindi una misura più precisa. Per confrontare due misure espresse in unità diverse si portano alla stessa unità sia i valori sia le incertezze.
:::

## 3. Dimensioni: controllare una formula prima dei numeri

:::osservazione{titolo="Dimensione e unità non coincidono"}
La **dimensione** di una grandezza indica di che tipo è la grandezza, indipendentemente dall’unità scelta. Una distanza in metri e una in chilometri hanno unità diverse e la stessa dimensione, la lunghezza. Le dimensioni di base della meccanica sono tre e si indicano con le lettere $M$ (massa), $L$ (lunghezza) e $T$ (tempo). La dimensione di una grandezza si scrive mettendo il suo simbolo fra parentesi quadre. Una velocità è una lunghezza divisa per un tempo, quindi $[v]=LT^{-1}$.
:::

:::osservazione{#dimensioni titolo="Omogeneità dimensionale"}
Una formula fisica è corretta solo se è **omogenea**, cioè se soddisfa due condizioni: i due membri dell’uguaglianza hanno la stessa dimensione, e tutti i termini di una somma hanno la stessa dimensione. Non ha senso sommare una lunghezza e un tempo. Il controllo si fa sostituendo a ogni grandezza la sua dimensione. La densità $\rho$ è una massa divisa per un volume, quindi $[\rho]=ML^{-3}$, e la pressione $p$ è una forza divisa per un’area, quindi $[p]=ML^{-1}T^{-2}$. Il prodotto $\rho v^2$ ha la dimensione di una pressione:
$$
[v]=LT^{-1},\qquad [a]=LT^{-2},\qquad
[\rho v^2]=(ML^{-3})(L^2T^{-2})=ML^{-1}T^{-2}=[p].
$$
Il controllo rivela gli errori. Nella formula $x=v_0t+at$ il termine $v_0t$ ha dimensione $LT^{-1}\cdot T=L$, cioè è una lunghezza. Il termine $at$ ha dimensione $LT^{-2}\cdot T=LT^{-1}$, cioè è una velocità. I due termini hanno dimensioni diverse, quindi la formula è sbagliata. Con $at^2$ al posto di $at$ il secondo termine ha dimensione $LT^{-2}\cdot T^2=L$ e la formula è omogenea.
:::

:::osservazione{titolo="Limiti del controllo dimensionale"}
Una formula omogenea non è necessariamente corretta, perché le dimensioni non vedono i coefficienti numerici. Le formule $x=v_0t+at^2$ e $x=v_0t+\dfrac{at^2}{2}$ sono entrambe omogenee, e solo la seconda descrive il moto con accelerazione costante. Il controllo dimensionale permette quindi di scartare una formula sbagliata e non di dimostrare che una formula è giusta.

Lo stesso metodo dà l’unità di una costante. Se una forza è proporzionale alla velocità, $F=bv$, si isola la costante, $b=\dfrac Fv$, e si ottiene $[b]=\dfrac{MLT^{-2}}{LT^{-1}}=MT^{-1}$. L’unità di $b$ è quindi $\mathrm{kg/s}$.

L’argomento di un esponenziale, di un logaritmo o di una funzione trigonometrica è sempre un numero puro, cioè senza dimensione. Nella funzione $\exp\!\left(-\dfrac{t}{\tau}\right)$ il tempo $t$ è diviso per un altro tempo $\tau$, e il rapporto è un numero puro. Nel seno e nel coseno l’argomento è un angolo, e bisogna sapere se la formula lo richiede in gradi o in radianti.
:::

:::esempio{titolo="Ricavare esponenti senza inventare un coefficiente"}
Le dimensioni permettono anche di trovare la forma di una formula. Si vuole sapere come il tempo di oscillazione $t_c$ di un pendolo dipende dalla sua lunghezza $\ell$ e dall’accelerazione di gravità $g$. Si suppone $t_c=C\,\ell^\alpha g^\beta$, con $C$ numero puro e $\alpha$, $\beta$ esponenti da trovare. La dimensione di $\ell^\alpha g^\beta$ è $L^\alpha\cdot(LT^{-2})^\beta=L^{\alpha+\beta}T^{-2\beta}$. Deve essere uguale a quella di un tempo, $T$, cioè $L^0T^1$. Uguagliando gli esponenti di $L$ e di $T$ si ottiene:
$$
\alpha+\beta=0,\qquad-2\beta=1,
\qquad\alpha=\dfrac12,\quad\beta=-\dfrac12.
$$
La formula è quindi $t_c=C\sqrt{\dfrac\ell g}$. Un pendolo quattro volte più lungo ha un tempo di oscillazione doppio, perché $\sqrt4=2$. Il valore di $C$ non si ricava dalle dimensioni. Si ricava dalle leggi della meccanica, che per le piccole oscillazioni danno $C=2\pi$, oppure da una misura. Il risultato vale inoltre solo se il tempo dipende davvero soltanto da $\ell$ e da $g$.
:::

## 4. Parti di un sistema: estensive e intensive
:::definizione{#estensive-intensive titolo="Come cambia la grandezza dividendo un campione"}
Le grandezze che descrivono un campione di materia si dividono in due tipi, secondo ciò che accade quando si considera una quantità maggiore dello stesso materiale.

- Una grandezza **estensiva** dipende dalla quantità di materia. Se si uniscono due campioni, i loro valori si sommano. Massa, volume ed energia sono estensive.
- Una grandezza **intensiva** non dipende dalla quantità di materia. Temperatura, pressione e densità sono intensive. Un bicchiere d’acqua e una piscina alla stessa temperatura hanno masse diverse e la stessa temperatura.
:::

:::esempio{titolo="Dividere un campione omogeneo"}
Un blocco omogeneo di massa $m$ e volume $V$ viene tagliato in quattro parti uguali. Ogni parte ha massa $\dfrac m4$ e volume $\dfrac V4$, quindi massa e volume sono estensivi. La densità di ogni parte è $\rho=\dfrac{\dfrac m4}{\dfrac V4}=\dfrac mV$, uguale a quella del blocco intero, quindi la densità è intensiva. Il fattore 4 compare al numeratore e al denominatore e si semplifica. Per lo stesso motivo il rapporto fra due grandezze estensive è sempre una grandezza intensiva.
:::

![Per uno stesso materiale omogeneo massa e volume aumentano insieme, mantenendo la stessa pendenza uguale alla densità.](/figure/fisica-semestre-filtro/metodi-della-fisica/density-it.svg)

:::osservazione{titolo="Stato del materiale e mescolamento"}
Quando si uniscono due campioni uguali, alla stessa temperatura, la massa raddoppia e la temperatura resta la stessa. Quando si uniscono due campioni a temperature diverse, la temperatura finale è intermedia e si calcola con un bilancio dell’energia, descritto nell’unità sulla termodinamica. Una grandezza intensiva è quindi una grandezza che non dipende dalla quantità, e il suo valore cambia comunque se cambia lo stato del sistema.

La densità di una miscela si calcola dividendo la massa totale per il volume totale. Si mescolano, per esempio, $100\,\mathrm{g}$ di un liquido con volume $100\,\mathrm{cm^3}$ e $80\,\mathrm{g}$ di un altro liquido con volume $100\,\mathrm{cm^3}$. Se i volumi si sommano, la densità della miscela è $\dfrac{180\,\mathrm{g}}{200\,\mathrm{cm^3}}=0{,}90\,\mathrm{g/cm^3}$. In questo caso coincide con la media delle due densità solo perché i due volumi sono uguali. Per alcune coppie di liquidi, come acqua e alcol, il volume della miscela è un poco minore della somma dei volumi. Negli esercizi si assume che i volumi si sommino, e questa ipotesi viene dichiarata.
:::

## 5. Formule inverse, pendenze e aree
:::osservazione{#grafici titolo="Una relazione fisica deve conservare le unità"}
Una **formula inversa** si ottiene isolando un’altra grandezza della stessa formula. Dalla densità $\rho=\dfrac mV$ si ricava la massa moltiplicando i due membri per $V$, cioè $m=\rho V$, e poi il volume dividendo per $\rho$, cioè $V=\dfrac m\rho$. Si isola prima la grandezza con le lettere e si sostituiscono i numeri solo alla fine, con unità coerenti fra loro.

Molte leggi fisiche hanno la forma $y=kx+b$, il cui grafico è una retta. Il numero $k$ è la **pendenza** e indica di quanto cambia $y$ quando $x$ aumenta di una unità. Si calcola da due punti della retta con $k=\dfrac{\Delta y}{\Delta x}$, dove il simbolo $\Delta$ indica una differenza fra valore finale e valore iniziale. Il numero $b$ è l'**intercetta**, cioè il valore di $y$ quando $x=0$.
:::

:::esempio{titolo="Equazioni fra grandezze e valori numerici"}
Un punto si muove secondo la legge $x(t)=(2\,\mathrm{m/s})\,t+1\,\mathrm{m}$. La pendenza è $2\,\mathrm{m/s}$ ed è la velocità. L’intercetta è $1\,\mathrm{m}$ ed è la posizione all’istante $t=0$. Dopo $1\,\mathrm{s}$ la posizione è $3\,\mathrm{m}$ e dopo $2\,\mathrm{s}$ è $5\,\mathrm{m}$. Il tempo è raddoppiato e la posizione no, quindi $x$ e $t$ non sono direttamente proporzionali. Due grandezze sono **direttamente proporzionali** solo se la retta passa per l’origine, cioè se $b=0$. I coefficienti della legge hanno un’unità, che va scritta: la forma $x=2t+1$ senza unità non dice se i tempi sono in secondi o in minuti.
:::

![Due punti della retta posizione-tempo determinano una variazione di sei metri in tre secondi; l’intercetta è un metro.](/figure/fisica-semestre-filtro/metodi-della-fisica/position-it.svg)

:::osservazione{titolo="Distinguere pendenza e area"}
Da un grafico si leggono due informazioni diverse, la pendenza e l’area.

La **pendenza** si calcola con le differenze fra due punti, $\dfrac{\Delta y}{\Delta x}$, e non con il rapporto $\dfrac yx$ delle coordinate di un solo punto. Nella figura precedente i punti $(0\,\mathrm{s};1\,\mathrm{m})$ e $(3\,\mathrm{s};7\,\mathrm{m})$ danno $\dfrac{7-1}{3-0}=2\,\mathrm{m/s}$. Se il grafico è una curva, il rapporto fra le differenze dà la pendenza media nell’intervallo, e la pendenza in un punto è quella della retta tangente in quel punto.

L'**area** compresa fra il grafico e l’asse orizzontale ha come unità il prodotto delle unità dei due assi. In un grafico velocità-tempo la pendenza ha unità $\dfrac{\mathrm{m/s}}{\mathrm{s}}=\mathrm{m/s^2}$ ed è l’accelerazione. L’area ha unità $\mathrm{m/s}\cdot\mathrm{s}=\mathrm{m}$ ed è lo spostamento. Si calcola con rettangoli dove la velocità è costante e con triangoli o trapezi dove varia in modo lineare. Un’area che sta sotto l’asse del tempo corrisponde a una velocità negativa e si conta con il segno meno.
:::

![Una velocità positiva per due secondi e negativa nei due successivi dà aree con segno opposto.](/figure/fisica-semestre-filtro/metodi-della-fisica/signed-area-it.svg)

:::esempio{titolo="Spostamento, distanza e durata"}
Un punto si muove a $3\,\mathrm{m/s}$ per $2\,\mathrm{s}$ e poi a $-1\,\mathrm{m/s}$ per altri $2\,\mathrm{s}$, cioè torna indietro. Le due aree sono $3\cdot2=6\,\mathrm{m}$ e $-1\cdot2=-2\,\mathrm{m}$. Lo **spostamento** è la somma con i segni, $6\,\mathrm{m}-2\,\mathrm{m}=4\,\mathrm{m}$, e indica di quanto il punto si trova lontano dalla partenza. La **distanza percorsa** è la somma senza i segni, $6\,\mathrm{m}+2\,\mathrm{m}=8\,\mathrm{m}$. La velocità media è lo spostamento diviso per il tempo totale, $\dfrac{4\,\mathrm{m}}{4\,\mathrm{s}}=1\,\mathrm{m/s}$.
:::

:::esempio{titolo="Invertire una potenza conserva il significato geometrico"}
Il volume di una sfera di raggio $r$ è $V=\dfrac43\pi r^3$. Per ricavare il raggio dal volume si isola prima $r^3$, moltiplicando i due membri per 3 e dividendo per $4\pi$, e poi si estrae la radice cubica.
$$
r^3=\dfrac{3V}{4\pi},\qquad r=\sqrt[3]{\dfrac{3V}{4\pi}}.
$$
Il controllo dimensionale conferma il risultato, perché la radice cubica di un volume, $L^3$, è una lunghezza, $L$. Poiché il volume dipende dal cubo del raggio, se il raggio raddoppia il volume diventa $2^3=8$ volte maggiore, e se il raggio si dimezza il volume diventa un ottavo. Un aumento del raggio del 10% fa quindi aumentare il volume di circa il 33%, perché $1{,}1^3\simeq1{,}33$.
:::

## 6. Angoli e funzioni trigonometriche
:::definizione{#trigonometria titolo="Seno, coseno, tangente e radianti"}
In un triangolo rettangolo si considera uno dei due angoli acuti, $\theta$. Il lato di fronte all’angolo retto è l’ipotenusa. Degli altri due lati, uno sta di fronte a $\theta$ (cateto opposto) e l’altro è un lato di $\theta$ (cateto adiacente). Si definiscono tre rapporti.

- Il **seno** è il cateto opposto diviso per l’ipotenusa.
- Il **coseno** è il cateto adiacente diviso per l’ipotenusa.
- La **tangente** è il cateto opposto diviso per il cateto adiacente.

Per gli angoli maggiori di $90^\circ$ si usa la **circonferenza unitaria**, cioè la circonferenza di raggio 1 con centro nell’origine. L’angolo $\theta$ si misura dal semiasse positivo delle $x$, in verso antiorario. Il punto della circonferenza che corrisponde a $\theta$ ha come ascissa $\cos\theta$ e come ordinata $\sin\theta$. Valgono due relazioni.
$$
\sin^2\theta+\cos^2\theta=1,\qquad
\tan\theta=\dfrac{\sin\theta}{\cos\theta}\quad(\cos\theta\ne0).
$$
Gli angoli si misurano in gradi oppure in **radianti**. La misura in radianti è la lunghezza $s$ dell’arco diviso per il raggio $r$, cioè $\theta=\dfrac sr$. L’intera circonferenza è lunga $2\pi r$, quindi un giro completo vale $\dfrac{2\pi r}{r}=2\pi\,\mathrm{rad}$, che corrisponde a $360^\circ$.
:::
![Circonferenza unitaria con un angolo di centoventi gradi: coseno negativo e seno positivo.](/figure/fisica-semestre-filtro/metodi-della-fisica/circle-it.svg)

:::osservazione{titolo="Convertire angoli e controllare i segni"}
Poiché $360^\circ=2\pi\,\mathrm{rad}$, per passare dai gradi ai radianti si moltiplica per $\dfrac{\pi}{180}$, e per il passaggio inverso si moltiplica per $\dfrac{180}{\pi}$. Per esempio $60^\circ=60\cdot\dfrac{\pi}{180}=\dfrac{\pi}{3}\,\mathrm{rad}$. Il radiante è un rapporto fra due lunghezze, quindi è un numero puro. La calcolatrice ha due modalità, gradi e radianti, e quella impostata deve corrispondere al dato inserito.

I valori da ricordare sono i seguenti.

| Angolo | Seno | Coseno |
| --- | --- | --- |
| $30^\circ$ | $\dfrac12$ | $\dfrac{\sqrt3}{2}$ |
| $45^\circ$ | $\dfrac{\sqrt2}{2}$ | $\dfrac{\sqrt2}{2}$ |
| $60^\circ$ | $\dfrac{\sqrt3}{2}$ | $\dfrac12$ |

Il segno di seno e coseno dipende dal quadrante in cui cade l’angolo, perché sono le coordinate di un punto. Fra $90^\circ$ e $180^\circ$ il punto ha ascissa negativa e ordinata positiva, quindi il coseno è negativo e il seno positivo, come nella figura. Fra $180^\circ$ e $270^\circ$ sono entrambi negativi. La tangente ha lo stesso valore per due angoli che differiscono di $180^\circ$. Quando si ricava un angolo dalla sua tangente si controlla quindi, dai segni di seno e coseno, in quale quadrante si trova.
:::

## 7. Vettori, componenti e somma
:::definizione{#componenti titolo="Uno scalare e un vettore descrivono informazioni diverse"}
Le grandezze fisiche sono di due tipi.

- Uno **scalare** è descritto completamente da un numero con la sua unità. Massa, tempo e temperatura sono scalari.
- Un **vettore** è descritto da tre informazioni: il **modulo**, cioè l’intensità, la **direzione**, cioè la retta lungo cui agisce, e il **verso**, cioè uno dei due sensi lungo quella retta. Spostamento, velocità e forza sono vettori. Si disegna come una freccia e si indica con una lettera sormontata da una freccia, $\vec a$. Il suo modulo si indica con $a$.

Dire che su un corpo agisce una forza di $10\,\mathrm{N}$ non basta, perché l’effetto dipende da dove la forza è diretta.

Per fare i conti un vettore si scompone in **componenti** lungo due assi perpendicolari, $x$ e $y$. La componente $a_x$ è la proiezione del vettore sull’asse $x$ e la componente $a_y$ è la proiezione sull’asse $y$. Se $\theta$ è l’angolo fra il vettore e il semiasse positivo delle $x$, misurato in verso antiorario, il vettore è l’ipotenusa di un triangolo rettangolo che ha per cateti le due componenti. Quindi:
$$
a_x=a\cos\theta,\qquad a_y=a\sin\theta,\qquad
a=\sqrt{a_x^2+a_y^2}.
$$
La terza formula è il teorema di Pitagora. Un vettore di modulo $10\,\mathrm{N}$ con $\theta=30^\circ$, per esempio, ha componenti $a_x=10\cdot\dfrac{\sqrt3}{2}\simeq8{,}7\,\mathrm{N}$ e $a_y=10\cdot\dfrac12=5{,}0\,\mathrm{N}$. Le componenti hanno la stessa unità del vettore. Una componente è negativa quando il vettore punta nel verso negativo di quell’asse. Il modulo è sempre positivo o nullo.
:::

:::osservazione{titolo="La scelta degli assi"}
Le formule con coseno per $x$ e seno per $y$ valgono quando l’angolo è misurato dall’asse $x$. Se il problema dà l’angolo rispetto all’asse $y$, i ruoli si scambiano: la componente $y$ è il cateto adiacente all’angolo e si ottiene con il coseno, la componente $x$ è il cateto opposto e si ottiene con il seno. Un disegno mostra quale dei due casi si presenta. Se si ruotano gli assi le componenti cambiano, mentre il vettore e il suo modulo restano gli stessi.
:::

:::definizione{#operazioni-vettori titolo="Somma, differenza e moltiplicazione per uno scalare"}
Due vettori della stessa grandezza, per esempio due forze, si sommano sommando le componenti lungo lo stesso asse. La differenza si calcola allo stesso modo, con il segno meno.
$$
(\vec{a}\pm\vec{b})_x=a_x\pm b_x,\qquad
(\vec{a}\pm\vec{b})_y=a_y\pm b_y.
$$
Sul disegno la somma si costruisce con il metodo **punta-coda**. Si disegna il primo vettore, poi si fa partire il secondo dalla punta del primo. Il vettore somma, detto **risultante**, va dalla coda del primo alla punta del secondo. La differenza $\vec{a}-\vec{b}$ è la somma di $\vec{a}$ con il vettore opposto a $\vec{b}$, che ha lo stesso modulo e la stessa direzione di $\vec b$ e verso contrario.
:::
![Somma punta-coda di due spostamenti e vettore risultante, con coordinate e scale comuni.](/figure/fisica-semestre-filtro/metodi-della-fisica/addition-it.svg)

:::esempio{titolo="Moduli, versi e operazioni ammissibili"}
Dati $\vec{a}=(3;2)\,\mathrm{m}$ e $\vec{b}=(-1;4)\,\mathrm{m}$, la somma ha componenti $3+(-1)=2$ e $2+4=6$, cioè $\vec a+\vec b=(2;6)\,\mathrm{m}$. Il suo modulo è $\sqrt{2^2+6^2}=\sqrt{40}\simeq6{,}3\,\mathrm{m}$. I moduli dei due vettori sono $\sqrt{13}\simeq3{,}6\,\mathrm{m}$ e $\sqrt{17}\simeq4{,}1\,\mathrm{m}$, e la loro somma è $7{,}7\,\mathrm{m}$, che è diverso da $6{,}3\,\mathrm{m}$. Il modulo della somma è uguale alla somma dei moduli solo se i due vettori hanno la stessa direzione e lo stesso verso. Se hanno versi opposti è uguale alla differenza dei moduli, e negli altri casi ha un valore intermedio. Se i due vettori sono perpendicolari, il modulo della somma si calcola con il teorema di Pitagora applicato ai due moduli.

Moltiplicare un vettore per un numero $c$ significa moltiplicare per $c$ tutte le sue componenti. Il modulo viene moltiplicato per il valore assoluto di $c$, la direzione resta la stessa e il verso si inverte se $c$ è negativo. Se il fattore è una grandezza con unità, cambia anche l’unità del risultato. La massa moltiplicata per l’accelerazione, per esempio, dà una forza. La somma di due vettori ha senso solo fra grandezze dello stesso tipo, quindi una forza non si somma a uno spostamento.
:::

## 8. Due prodotti con significati diversi
:::definizione{#prodotti-vettori titolo="Prodotto scalare e prodotto vettoriale"}
Due vettori si moltiplicano fra loro in due modi diversi, che danno risultati di tipo diverso.

Il **prodotto scalare** dà come risultato un numero. Si indica con un punto e si calcola moltiplicando i due moduli per il coseno dell’angolo $\theta$ compreso fra i vettori. Il fattore $b\cos\theta$ è la proiezione di $\vec b$ lungo $\vec a$, quindi il prodotto scalare misura quanto un vettore è diretto lungo l’altro. Con le componenti si calcola sommando i prodotti delle componenti corrispondenti.
$$
\vec{a}\cdot\vec{b}=ab\cos\theta=a_xb_x+a_yb_y+a_zb_z.
$$
Il **prodotto vettoriale** dà come risultato un vettore. Si indica con il simbolo $\times$ e ha le seguenti proprietà.

- Il suo modulo è $ab\sin\theta$, uguale all’area del parallelogramma che ha per lati i due vettori.
- La sua direzione è perpendicolare al piano che contiene i due vettori.
- Il suo verso è dato dalla **regola della mano destra**. Si punta il pollice lungo $\vec a$ e le altre dita lungo $\vec b$. Il prodotto $\vec a\times\vec b$ esce dal palmo.

Con le componenti si calcola così:
$$
\vec{a}\times\vec{b}=(a_yb_z-a_zb_y;\ a_zb_x-a_xb_z;\ a_xb_y-a_yb_x).
$$
:::
![Il prodotto scalare misura una proiezione; il prodotto vettoriale ha modulo pari all’area del parallelogramma.](/figure/fisica-semestre-filtro/metodi-della-fisica/products-it.svg)

:::osservazione{titolo="Segni, lavoro e momento"}
Il segno del prodotto scalare dipende dal coseno. È positivo se l’angolo fra i vettori è minore di $90^\circ$, nullo se i vettori sono perpendicolari e negativo se l’angolo è maggiore di $90^\circ$. L’applicazione principale è il **lavoro** di una forza costante, $W=\vec{F}\cdot\Delta\vec{r}=F\,\Delta r\cos\theta$, dove $\Delta\vec r$ è lo spostamento. Una forza perpendicolare allo spostamento compie lavoro nullo, perché $\cos90^\circ=0$. Dal prodotto scalare si ricava anche l’angolo fra due vettori, con $\cos\theta=\dfrac{\vec{a}\cdot\vec{b}}{ab}$.

Il prodotto vettoriale è nullo se i vettori sono paralleli, perché $\sin0^\circ=0$, ed è massimo se sono perpendicolari. L’ordine dei fattori conta: scambiandoli il verso si inverte, $\vec{b}\times\vec{a}=-\vec{a}\times\vec{b}$. Nel prodotto scalare l’ordine è indifferente. Per due vettori nel piano $xy$ il prodotto vettoriale è diretto lungo l’asse $z$ e vale $a_xb_y-a_yb_x$. Se questo numero è positivo il vettore esce dal foglio verso chi guarda, con $x$ verso destra e $y$ verso l’alto.

L’applicazione principale è il **momento di una forza**, $\vec\tau=\vec{r}\times\vec{F}$, che misura la capacità della forza di far ruotare un corpo intorno a un punto. Il vettore $\vec r$ va dal punto di rotazione al punto in cui la forza è applicata. Il modulo è $rF\sin\theta=Fb$, dove $b$ è il **braccio**, cioè la distanza fra il punto di rotazione e la retta lungo cui agisce la forza. Per aprire una porta si spinge lontano dai cardini, perché con un braccio maggiore la stessa forza produce un momento maggiore.

Lavoro e momento sono entrambi il prodotto di una forza per una lunghezza e sono grandezze diverse. Il lavoro è uno scalare e si misura in joule. Il momento è un vettore e si misura in $\mathrm{N\,m}$.
:::
