---
titolo: "Rifrazione e lenti"
sommario: "Indice di rifrazione, legge di Snell, riflessione totale, immagini di lenti sottili e potere diottrico."
---

## Indice di rifrazione

:::definizione{#indice titolo="La velocità della luce in un mezzo"}
Un **mezzo** è il materiale in cui viaggia la luce: aria, acqua, vetro. È **trasparente** se la luce lo attraversa. Nel vuoto la luce viaggia a $c=3{,}0\cdot10^8\,\mathrm{m/s}$, cioè trecento milioni di metri al secondo; in un mezzo trasparente viaggia a una velocità $v$ minore.

L’**indice di rifrazione** $n$ di un mezzo è il rapporto fra la velocità della luce nel vuoto $c$ e la velocità $v$ con cui la luce avanza nel mezzo (detta anche velocità di fase). Il rapporto si calcola per una luce di frequenza fissata.

$$
n=\frac{c}{v},\qquad v=\frac{c}{n}.
$$

La seconda formula si ottiene dalla prima moltiplicando i due membri per $v$ e dividendoli per $n$. L’indice è **adimensionale**, cioè è un numero puro, perché $c$ e $v$ sono entrambi in metri al secondo e nel rapporto l’unità si semplifica. Nei materiali trasparenti comuni trattati qui vale $n>1$, quindi la luce viaggia più lentamente che nel vuoto. Per esempio, $n=2$ significa che la luce nel mezzo va a metà della velocità che ha nel vuoto.

La **frequenza** $\nu$ (lettera greca *nu*) è il numero di oscillazioni dell’onda in un secondo e si misura in hertz ($1\,\mathrm{Hz}$ è un’oscillazione al secondo). La **lunghezza d’onda** $\lambda$ (lettera greca *lambda*) è lo spazio percorso dall’onda durante una sola oscillazione, quindi $\lambda=\dfrac{v}{\nu}$. Per la luce si misura in nanometri: $1\,\mathrm{nm}=10^{-9}\,\mathrm m$, un miliardesimo di metro.

Quando la luce attraversa una superficie ferma che separa due mezzi, la frequenza $\nu$ resta la stessa. Il motivo è che l’onda che arriva e l’onda che prosegue oscillano insieme nei punti della superficie, quindi compiono lo stesso numero di oscillazioni al secondo. La lunghezza d’onda invece cambia. Se nel vuoto vale $\lambda_0=\dfrac{c}{\nu}$ (il pedice $0$ indica il vuoto), nel mezzo vale

$$
\lambda=\frac{v}{\nu}=\frac{c}{n\,\nu}=\frac{\lambda_0}{n}.
$$

Una luce di una sola frequenza, cioè di un solo colore, si dice **monocromatica**. L’indice di un materiale può dipendere dalla frequenza: per esempio lo stesso vetro ha un indice per la luce rossa e un altro, poco più grande, per la luce violetta. Un materiale con questa proprietà si dice **dispersivo**. Per questo un indice fornito vale per la luce indicata nel testo. Quando un esercizio non dà un valore per l’aria, si usa $n=1$, perché la luce nell’aria è più lenta che nel vuoto soltanto di tre parti su diecimila.
:::

:::esempio{titolo="Dalla velocità alla lunghezza d’onda"}
In un vetro con $n=1{,}50$ e con $c=3{,}0\cdot10^8\,\mathrm{m/s}$ si ha

$$
v=\frac{3{,}0\cdot10^8}{1{,}50}\,\mathrm{m/s}=2{,}0\cdot10^8\,\mathrm{m/s}.
$$

Una lunghezza d’onda nel vuoto di $600\,\mathrm{nm}$ diventa $\dfrac{600}{1{,}50}\,\mathrm{nm}=400\,\mathrm{nm}$. Il rapporto fra le lunghezze d’onda è lo stesso rapporto fra le velocità, perché il numero di oscillazioni al secondo resta invariato. Il grafico mostra $\lambda=\dfrac{600}{n}$ in nanometri: per $n=1$ (il vuoto) si legge $600$, per $n=1{,}5$ si legge $400$, per $n=2$ si legge $300$.

::grafico{f="600/x" punti="1,600,pieno;1.5,400,pieno;2,300,pieno" xmin=0.9 xmax=2.35 ymin=0 ymax=695 nomi="n,λ (nm)" titolo="Per una data frequenza, a indice maggiore corrisponde minore lunghezza d’onda."}
:::

:::esempio{#tempo-in-piu-mezzi titolo="Luce in due materiali successivi"}
Si considera la stessa luce di lunghezza d’onda nel vuoto $600\,\mathrm{nm}$. In ciascun mezzo si divide la velocità nel vuoto per $n$ e si ricava la velocità nel mezzo. Poiché la frequenza resta uguale, anche la lunghezza d’onda si divide per lo stesso numero. Le due grandezze sono quindi ordinate nello stesso modo, e nel mezzo in cui la velocità è minore anche la lunghezza d’onda è minore.

| Mezzo | Velocità ($10^8\,\mathrm{m/s}$) | Lunghezza d’onda (nm) |
| --- | --- | --- |
| Vuoto | $3{,}0$ | $600$ |
| A, $n=1{,}20$ | $2{,}5$ | $500$ |
| B, $n=1{,}50$ | $2{,}0$ | $400$ |

Un **impulso** è un breve lampo di luce. Un impulso percorre $30\,\mathrm{cm}$ nel materiale A e poi $30\,\mathrm{cm}$ nel materiale B, entrando **normalmente**, cioè perpendicolarmente alle superfici. Se i mezzi sono poco dispersivi, si usa $\dfrac{c}{n}$ anche come velocità dell’impulso. Il tempo di ogni tratto è la lunghezza divisa per la velocità:

$$
t_A=\frac{0{,}30\,\mathrm m}{2{,}5\cdot10^8\,\mathrm{m/s}}=1{,}2\cdot10^{-9}\,\mathrm s=1{,}2\,\mathrm{ns},\qquad
t_B=\frac{0{,}30\,\mathrm m}{2{,}0\cdot10^8\,\mathrm{m/s}}=1{,}5\,\mathrm{ns}.
$$

Un nanosecondo ($\mathrm{ns}$) è un miliardesimo di secondo. Il tempo totale è quindi $1{,}2+1{,}5=2{,}7\,\mathrm{ns}$. Nel vuoto, per la stessa lunghezza complessiva di $0{,}60\,\mathrm m$ servirebbero $\dfrac{0{,}60}{3{,}0\cdot10^8}\,\mathrm s=2{,}0\,\mathrm{ns}$. Il ritardo di $0{,}7\,\mathrm{ns}$ è la somma dei ritardi dei due tratti, $0{,}2\,\mathrm{ns}$ in A e $0{,}5\,\mathrm{ns}$ in B. La velocità media si ottiene dividendo il cammino totale per il tempo totale, cioè $\dfrac{0{,}60\,\mathrm m}{2{,}7\cdot10^{-9}\,\mathrm s}\simeq2{,}2\cdot10^8\,\mathrm{m/s}$. Il risultato è diverso dalla media delle due velocità, perché la luce passa più tempo nel tratto più lento.

::grafico{linee="0,0 30,1.2 60,2.7" segmenti="0,0,60,2" punti="30,1.2,pieno,A;60,2.7,pieno,B" xmin=0 xmax=65 ymin=0 ymax=3.6 nomi="cammino (cm),tempo (ns)" titolo="Il tratto nel mezzo B è più ripido. La linea tratteggiata indica il tempo sullo stesso cammino nel vuoto."}
:::

## Legge di Snell

:::teorema{#snell titolo="Gli angoli della rifrazione"}
La **rifrazione** è il cambio di direzione di un raggio di luce quando passa da un mezzo all’altro. Un mezzo è **omogeneo** se ha le stesse proprietà in ogni punto. La superficie che separa due mezzi si chiama **interfaccia**. La **normale** è la retta perpendicolare all’interfaccia nel punto in cui arriva il raggio.

Gli angoli si misurano dalla normale. Si indica con $\theta_1$ (lettera greca *theta*) l’angolo fra il raggio che arriva, detto raggio incidente, e la normale nel primo mezzo; con $\theta_2$ l’angolo fra il raggio che prosegue, detto raggio rifratto o trasmesso, e la normale nel secondo mezzo. Quando esiste un raggio trasmesso che si propaga nel secondo mezzo, vale la **legge di Snell**

$$
n_1\sin\theta_1=n_2\sin\theta_2.
$$

Per trovare $\theta_2$ si dividono i due membri per $n_2$, quindi $\sin\theta_2=\dfrac{n_1}{n_2}\sin\theta_1$. Poi si cerca l’angolo fra $0^\circ$ e $90^\circ$ che ha quel seno. Questo angolo si chiama **arcoseno** del numero e sulla calcolatrice si ottiene con il tasto $\sin^{-1}$, impostata in gradi.

Fra $0^\circ$ e $90^\circ$ il seno cresce insieme all’angolo. Se $n_2>n_1$, la frazione $\dfrac{n_1}{n_2}$ è minore di uno, quindi $\sin\theta_2<\sin\theta_1$ e $\theta_2<\theta_1$, perciò il raggio si avvicina alla normale. Se l’incidenza è normale, cioè $\theta_1=0^\circ$, si ha $\sin\theta_2=0$ e $\theta_2=0^\circ$. Il raggio prosegue quindi sulla normale anche se velocità e lunghezza d’onda cambiano.
:::

:::esempio{titolo="Dall’aria al vetro"}
Per $n_1=1{,}00$, $n_2=1{,}50$ e $\theta_1=30^\circ$ si ha $\sin30^\circ=0{,}50$, quindi

$$
\sin\theta_2=\frac{1{,}00}{1{,}50}\cdot0{,}50=\frac{1}{3}.
$$

L’arcoseno di $\dfrac{1}{3}$ vale circa $19{,}5^\circ$. L’angolo è minore di $30^\circ$ come previsto, perché il vetro ha indice maggiore dell’aria. Il raggio devia di $30^\circ-19{,}5^\circ=10{,}5^\circ$ rispetto alla direzione con cui arrivava. Se si scambiassero i due mezzi invertendo il verso del raggio, la stessa uguaglianza letta da destra a sinistra darebbe di nuovo $30^\circ$, quindi si ritroverebbe il raggio iniziale. Nella figura la retta orizzontale è l’interfaccia, quella verticale è la normale, l’aria ($n_1$) sta sopra e il vetro ($n_2$) sotto.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-1.4,2.424871,0,0;0,0,0.933333,-2.639865" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="Il raggio in aria forma 30° dalla normale. Nel vetro forma circa 19,5°."}
:::

:::esempio{#angolo-dalla-superficie titolo="Quale angolo entra nella legge"}
Il **goniometro** è lo strumento che misura gli angoli. Sul banco ottico il goniometro può essere appoggiato lungo la superficie. In quel caso la lettura è l’angolo $\varphi$ (lettera greca *fi*) fra il raggio e la superficie. Poiché la normale è perpendicolare alla superficie, i due angoli insieme fanno $90^\circ$, quindi prima di applicare la legge di Snell si calcola $\theta_1=90^\circ-\varphi$. Se $\varphi=30^\circ$, l’angolo da usare nella legge vale $60^\circ$.

Si prende per l’aria $n_1=1{,}00$ e per il vetro $n_2=1{,}50$. Dato che $\sin60^\circ=\dfrac{\sqrt3}{2}$, la legge dà

$$
\sin\theta_2=\frac{1{,}00}{1{,}50}\cdot\frac{\sqrt3}{2}=\frac{\sqrt3}{3}\simeq0{,}577,
$$

quindi $\theta_2\simeq35{,}3^\circ$.

Usando per errore i $30^\circ$ letti sul goniometro si ricaverebbero circa $19{,}5^\circ$. Entrambi i risultati sono minori dell’angolo inserito nella legge, quindi il controllo «verso il vetro il raggio si avvicina alla normale» non rivela l’errore. L’errore si evita stabilendo, prima del calcolo, se l’angolo letto è misurato dalla superficie o dalla normale. Nella figura l’arco di $60^\circ$ è misurato dalla normale, quello di $30^\circ$ dalla superficie.

::grafico{assi=0 uguale=1 linee="-3.5,0 3.5,0" segmenti="0,-3.05,0,3.05" curve="0.85*cos(t),0.85*sin(t),1.5707963,2.6179939;1.25*cos(t),1.25*sin(t),2.6179939,3.1415927" vettori="-2.424871,1.4,0,0;0,0,1.616581,-2.28619" etichette="-0.93,1.14,60°;-1.76,0.32,30°;1.86,-1.18,35,3°" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 titolo="L’incidenza è 60° dalla normale e 30° dalla superficie. In vetro la rifrazione è circa 35,3° dalla normale."}
:::

:::osservazione{#lastra titolo="Entrata e uscita da una lastra"}
Una **lastra a facce parallele** è un blocco trasparente, per esempio di vetro, con le due facce parallele. Le due facce hanno quindi normali parallele, e l’angolo del raggio interno con la normale è lo stesso sulle due facce. Se fuori da entrambe c’è lo stesso mezzo, per esempio aria con indice $n$, e la lastra ha indice $n_L$, la legge di Snell scritta sulle due facce dà

$$
n\sin\theta_1=n_L\sin\theta_2,\qquad n_L\sin\theta_2=n\sin\theta_3.
$$

Quindi $n\sin\theta_1=n\sin\theta_3$, cioè l’angolo di uscita $\theta_3$ è uguale all’angolo di entrata $\theta_1$. Il raggio emergente è parallelo a quello incidente. Può però essere spostato di lato, perché dentro la lastra ha seguito una direzione diversa.
:::

:::esempio{#scarto-lastra titolo="Lo spostamento laterale nella lastra"}
Una lastra spessa $e$ è immersa in aria. Il raggio entra con angolo $\theta_1$ dalla normale e dentro la lastra forma l’angolo $\theta_2$ con la normale. Il segmento interno, lungo $L$, è l’ipotenusa di un triangolo rettangolo che ha lo spessore $e$ come cateto adiacente all’angolo $\theta_2$, quindi $e=L\cos\theta_2$ e

$$
L=\frac{e}{\cos\theta_2}.
$$

Alla seconda faccia il raggio esce con lo stesso angolo iniziale, perché dall’indice della lastra si torna a quello dell’aria. Lo **scarto** è la distanza, misurata perpendicolarmente, fra il raggio emergente e il prolungamento del raggio iniziale. Il segmento interno forma con la direzione iniziale l’angolo $\theta_1-\theta_2$ e lo scarto è il cateto opposto a quest’angolo nel triangolo rettangolo che ha $L$ come ipotenusa. Perciò, quando $\theta_1>\theta_2$, lo scarto vale $L\sin(\theta_1-\theta_2)$.

Per $e=4{,}0\,\mathrm{cm}$, indice della lastra $\sqrt2$ e $\theta_1=45^\circ$, la legge di Snell dà $\sin\theta_2=\dfrac{\sin45^\circ}{\sqrt2}=\dfrac{1}{2}$, quindi $\theta_2=30^\circ$. Lo scarto vale allora

$$
\frac{4{,}0\cdot\sin(45^\circ-30^\circ)}{\cos30^\circ}\,\mathrm{cm}=\frac{4{,}0\cdot\sin15^\circ}{\cos30^\circ}\,\mathrm{cm}\simeq\frac{4{,}0\cdot0{,}259}{0{,}866}\,\mathrm{cm}\simeq1{,}2\,\mathrm{cm}.
$$

Raddoppiando lo spessore raddoppia lo scarto, mentre l’angolo di uscita resta invariato. All’incidenza normale la differenza fra gli angoli è zero, quindi lo scarto è zero e le due rette coincidono.

::grafico{assi=0 uguale=1 linee="-3.6,0 7,0;-3.6,-4 7,-4" segmenti="0,0,0,2.4;2.309401,-6.4,2.309401,-2.5;0,0,5.9,-5.9;2.309401,-4,3.154701,-3.154701" vettori="-2.3,2.3,0,0;0,0,2.309401,-4;2.309401,-4,4.509401,-6.2" etichette="4.1,-2.8,lastra;2.65,-3.35,scarto" xmin=-4 xmax=7.4 ymin=-7 ymax=2.8 titolo="Le direzioni prima della lastra e dopo l’uscita sono parallele. Lo scarto è misurato perpendicolarmente alla retta tratteggiata."}
:::

## Riflessione totale

:::teorema{#totale titolo="L’angolo limite"}
Quando un raggio arriva su un’interfaccia, una parte della luce viene sempre **riflessa**, cioè rimandata nel primo mezzo. Il raggio riflesso forma con la normale lo stesso angolo del raggio incidente, dall’altra parte della normale. Si ha **riflessione totale** quando non esiste un raggio trasmesso e tutta la luce viene riflessa.

La riflessione totale può avvenire solo quando il raggio parte dal mezzo con indice maggiore, cioè $n_1>n_2$. In questo caso $\dfrac{n_1}{n_2}>1$, quindi $\sin\theta_2>\sin\theta_1$ e il raggio trasmesso si allontana dalla normale. L’**angolo limite** $\theta_c$ è il valore di $\theta_1$ per cui la legge di Snell dà $\theta_2=90^\circ$. Sostituendo $\sin90^\circ=1$ si ha $n_1\sin\theta_c=n_2$, quindi

$$
\theta_c=\arcsin\frac{n_2}{n_1}.
$$

Per $\theta_1<\theta_c$ esiste un raggio trasmesso nel secondo mezzo. Al limite, $\theta_1=\theta_c$, il raggio trasmesso è **radente**, cioè parallelo alla superficie. Per $\theta_1>\theta_c$ la legge richiederebbe un seno maggiore di uno. Poiché il seno di un angolo non supera mai uno, non esiste un raggio trasmesso che si propaga nel secondo mezzo. Su un’interfaccia ideale, che non assorbe luce, tutta la luce viene allora riflessa nel primo mezzo.
:::

:::esempio{titolo="Al di sopra dell’angolo limite"}
Dal vetro di indice $1{,}50$ all’aria di indice $1{,}00$ si ha

$$
\theta_c=\arcsin\frac{1{,}00}{1{,}50}=\arcsin\frac{2}{3}\simeq41{,}8^\circ.
$$

Un raggio che arriva dal vetro con incidenza $55^\circ$ supera l’angolo limite, quindi viene riflesso totalmente. Il raggio riflesso forma ancora $55^\circ$ con la normale, dentro il vetro. Se la luce andasse invece dall’aria verso il vetro, la riflessione totale non ci sarebbe, perché l’indice di partenza è il minore. Nella figura il vetro ($n_1$) sta sopra, l’aria ($n_2$) sotto, e il raggio riflesso torna verso l’alto.

::grafico{assi=0 uguale=1 linee="-3.4,0 3.4,0" segmenti="0,-3.05,0,3.05" vettori="-2.293626,1.606014,0,0;0,0,2.293626,1.606014" xmin=-3.8 xmax=3.8 ymin=-3.2 ymax=3.2 etichette="-2.4,2.6,n₁;2.4,-2.6,n₂" titolo="Da vetro ad aria con incidenza 55° rimane il raggio riflesso nel vetro."}
:::

:::osservazione{#soglia-snell titolo="Verificare prima che esista un raggio rifratto"}
Nel passaggio dal vetro all’aria il valore $\dfrac{n_1}{n_2}\sin\theta_1$, richiesto per $\sin\theta_2$, si calcola prima dell’arcoseno. Con indice del vetro $1{,}50$:

- a incidenza di $30^\circ$ si ottiene $1{,}50\cdot0{,}50=0{,}75$, minore di uno, quindi esce un raggio;
- a incidenza di $60^\circ$ si ottiene $1{,}50\cdot0{,}866\simeq1{,}30$, maggiore di uno, che è il valore massimo di un seno. Non esiste quindi alcun angolo trasmesso.

Il punto in cui il valore raggiunge uno separa i due casi. Se si sostituisce l’aria con acqua di indice $1{,}33$, nella formula si divide per $1{,}33$ invece che per $1$. L’angolo limite diventa

$$
\theta_c=\arcsin\frac{1{,}33}{1{,}50}\simeq62{,}5^\circ.
$$

Perciò la stessa incidenza di $60^\circ$, che dà riflessione totale verso l’aria, lascia passare un raggio verso l’acqua. Il grafico riporta in orizzontale l’angolo di incidenza e in verticale il valore $1{,}50\sin\theta_1$; il punto C, a $41{,}8^\circ$, è quello in cui la curva incontra la retta di valore $1$.

::grafico{f="1.5*sin(x*pi/180);1" punti="30,0.75,pieno;41.810315,1,pieno,C;60,1.299038,pieno" xmin=0 xmax=85 ymin=0 ymax=1.65 nomi="incidenza (°),seno richiesto" legenda="1{,}50\sin\theta_1;1" titolo="La soglia C è a 41,8°. A destra di C il valore richiesto supera uno."}
:::

## Lenti convergenti e divergenti

:::definizione{#lenti titolo="I fuochi di una lente sottile"}
Una **lente** è un pezzo di vetro o di plastica trasparente con le facce curve, che devia i raggi di luce. L’**asse ottico** è la retta perpendicolare alla lente che passa per il suo centro, detto **centro ottico**. Una **lente sottile** è una lente il cui spessore è trascurabile, cioè molto piccolo rispetto alle distanze dell’oggetto, dell’immagine e dei fuochi; nei disegni si rappresenta con un segmento.

I raggi **parassiali** sono i raggi vicini all’asse e poco inclinati rispetto a esso. Per questi raggi valgono tre regole:

- il raggio che attraversa il centro ottico prosegue senza essere deviato;
- per una lente **convergente**, un raggio che arriva parallelo all’asse, dopo la lente, passa per il **fuoco** dal lato di uscita, un punto dell’asse;
- per una lente **divergente**, un raggio che arriva parallelo all’asse, dopo la lente, si allontana dall’asse; prolungato all’indietro, sembra provenire dal fuoco che sta dal lato dell’oggetto.

La **distanza focale** $f$ è la distanza del fuoco dal centro della lente. Si usa $f>0$ per la lente convergente e $f<0$ per la divergente. Il piano perpendicolare all’asse che passa per un fuoco si chiama **piano focale**. La costruzione assume lo stesso mezzo, di solito aria, sui due lati della lente. Per lenti molto spesse o per raggi lontani dall’asse, queste regole non descrivono bene il percorso della luce.
:::

:::osservazione{#controllo-raggi titolo="Controllare la costruzione con un terzo raggio"}
Due rette non parallele si incontrano in un punto. Per trovare l’immagine di un punto dell’oggetto fuori dall’asse bastano quindi due raggi con direzioni diverse. Nella costruzione per la lente convergente si tracciano di solito il raggio che passa per il centro e quello che arriva parallelo all’asse. Come controllo se ne traccia un terzo: un raggio che passa per il fuoco sul lato dell’oggetto esce dalla lente parallelo all’asse. Questa regola si ottiene percorrendo all’indietro il cammino di un raggio parallelo che la lente manda nel fuoco.

Dopo aver trovato il punto d’incontro dei primi due raggi, si verifica che anche il terzo raggio, o il suo prolungamento, passi per lo stesso punto. Un’immagine è **reale** quando i raggi usciti dalla lente si incontrano davvero; un’immagine è **virtuale** quando si incontrano soltanto i **prolungamenti** dei raggi uscenti, cioè le loro rette continuate all’indietro verso il lato dell’oggetto. Nel disegno i prolungamenti si tracciano tratteggiati. Il tratteggio distingue le rette usate per trovare l’immagine dai percorsi seguiti davvero dalla luce.
:::

## Equazione delle lenti sottili

::::teorema{#equazione titolo="Posizione e dimensione dell’immagine"}
Si indicano con $p$ la distanza dell’oggetto dalla lente e con $q$ la distanza dell’immagine dalla lente, con queste regole sul segno:

- un oggetto reale, posto prima della lente, ha $p>0$;
- un’immagine reale, dopo la lente dal lato di uscita, ha $q>0$;
- un’immagine virtuale, dove si incontrano solo i prolungamenti verso il lato dell’oggetto, ha $q<0$.

Si indicano con $h_o$ l’altezza dell’oggetto e con $h_i$ l’altezza dell’immagine, positiva se l’immagine sta sopra l’asse e negativa se sta sotto. Per i raggi parassiali valgono

$$
\frac1f=\frac1p+\frac1q,\qquad q=\frac{fp}{p-f},\qquad M=\frac{h_i}{h_o}=-\frac qp.
$$

La seconda formula si ottiene dalla prima: $\dfrac1q=\dfrac1f-\dfrac1p=\dfrac{p-f}{fp}$, e si prende il reciproco.

L’**ingrandimento trasversale** $M$ è il rapporto fra le altezze. Ha segno negativo per un’immagine **capovolta** e positivo per un’immagine **diritta**. Il suo **modulo**, cioè il valore senza segno, dice quante volte l’immagine è più alta o più bassa dell’oggetto. Quando $p=f>0$, il denominatore $p-f$ vale zero. In questo caso i raggi che partono dallo stesso punto dell’oggetto escono paralleli tra loro, quindi non c’è un’immagine a distanza finita.

:::dimostrazione
Si mette la lente in $x=0$ sull’asse $x$, che coincide con l’asse ottico, e l’oggetto alto $h_o$ in $x=-p$. La sommità dell’oggetto è il punto $(-p;\,h_o)$.

1. Il raggio che passa per il centro va dalla sommità all’origine senza deviare. La sua retta passa per $(0;\,0)$ e per $(-p;\,h_o)$, quindi è $y=-\dfrac{h_o}{p}\,x$.
2. Il raggio che arriva parallelo all’asse incontra la lente all’altezza $h_o$ e poi passa per il fuoco $(f;\,0)$. La sua retta dopo la lente è $y=h_o\left(1-\dfrac{x}{f}\right)$, che vale $h_o$ per $x=0$ e $0$ per $x=f$.
3. L’immagine della sommità è il punto d’incontro delle due rette, in $x=q$. Uguagliando le due quote e dividendo per $h_o$ si ottiene
$$
-\frac{q}{p}=1-\frac{q}{f}.
$$
4. Dividendo i due membri per $q$ si ha $-\dfrac{1}{p}=\dfrac{1}{q}-\dfrac{1}{f}$, cioè $\dfrac1f=\dfrac1p+\dfrac1q$.
5. L’altezza dell’immagine è la quota del primo raggio in $x=q$, cioè $h_i=-\dfrac{h_o}{p}\,q$. Dividendo per $h_o$ si trova $M=\dfrac{h_i}{h_o}=-\dfrac{q}{p}$.

Per un’immagine virtuale si usano i prolungamenti delle stesse rette e il conto è identico.
:::
::::

:::esempio{titolo="Quando si può usare uno schermo"}
Uno **schermo** è un foglio bianco su cui si raccoglie l’immagine. Con $f=10\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$,

$$
q=\frac{10\cdot30}{30-10}\,\mathrm{cm}=15\,\mathrm{cm},\qquad M=-\frac{15}{30}=-0{,}50.
$$

Poiché $q$ è positivo, la lente produce un’immagine reale dal lato opposto all’oggetto. Poiché $M$ è negativo e ha modulo $0{,}50$, l’immagine è capovolta e alta la metà dell’oggetto. Se si cambia solo la lente, con $f=-10\,\mathrm{cm}$, si ottengono

$$
q=\frac{(-10)\cdot30}{30-(-10)}\,\mathrm{cm}=-7{,}5\,\mathrm{cm},\qquad M=-\frac{-7{,}5}{30}=0{,}25.
$$

Uno schermo posto in quel punto non raccoglie l’immagine, poiché lì si incontrano soltanto i prolungamenti dei raggi. Nella figura O è la sommità dell’oggetto, F e F′ sono i fuochi e I è l’immagine reale prodotta dalla lente convergente.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-5.2 0,5.2" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,-2;0,0,15,-2;15,0,15,-2" punti="10,0,pieno,F;-10,0,pieno,F′;15,-2,pieno,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-5.72 ymax=5.72 titolo="La lente convergente produce l’immagine reale I a 15 cm dal centro."}
:::

:::osservazione{#regimi titolo="Leggere il segno e il modulo"}
Per una lente convergente con oggetto reale si hanno questi casi:

- $p>2f$: immagine reale, capovolta e ridotta;
- $p=2f$: immagine reale, capovolta e della stessa altezza in modulo ($q=2f$, $M=-1$);
- $f<p<2f$: immagine reale, capovolta e ingrandita;
- $0<p<f$: immagine virtuale, diritta e ingrandita.

Per una lente divergente con oggetto reale vale sempre $q<0$ e $0<M<1$, quindi l’immagine è virtuale, diritta e ridotta. Il motivo è che con $f<0$ si ha $q=\dfrac{fp}{p-f}=-\dfrac{|f|\,p}{p+|f|}$, dove $|f|$ è il modulo di $f$; questa frazione è negativa e, poiché $|f|<p+|f|$, il suo modulo è minore di $p$. Quindi $M=-\dfrac{q}{p}$ è positivo e minore di $1$. Nella figura, per la lente divergente, i prolungamenti tratteggiati si incrociano in I, dalla stessa parte di O.

::grafico{assi=0 linee="-33.461538,0 18.461538,0;0,-13 0,13" vettori="-30,0,-30,4;-30,4,0,4;-30,4,0,0;0,4,15,10;0,0,15,-2" segmenti="0,4,-7.5,1;0,0,-7.5,1;-7.5,0,-7.5,1" punti="-10,0,pieno,F;10,0,pieno,F′;-7.5,1,vuoto,I;-30,4,pieno,O" xmin=-36.923077 xmax=21.923077 ymin=-14.3 ymax=14.3 titolo="Con una lente divergente, I è sullo stesso lato di O dove si incrociano i prolungamenti."}
:::

:::esempio{#ingrandimento-virtuale titolo="Lente convergente usata come lente di ingrandimento"}
Una lente convergente con focale $12\,\mathrm{cm}$ si usa per osservare un oggetto reale posto a $6\,\mathrm{cm}$. Il denominatore $p-f=6-12=-6\,\mathrm{cm}$ è negativo, quindi

$$
q=\frac{12\cdot6}{-6}\,\mathrm{cm}=-12\,\mathrm{cm}.
$$

Il segno meno indica che l’immagine è dal lato dell’oggetto. Poiché $M=-\dfrac{-12}{6}=+2$, l’immagine è diritta e alta il doppio dell’oggetto. I raggi usciti dalla lente si allontanano tra loro e i loro prolungamenti si incontrano nel punto dell’immagine virtuale. È così che funziona una lente di ingrandimento.

Le immagini diritte prodotte da un oggetto reale sono quindi di due tipi. Per una convergente con l’oggetto più vicino del fuoco l’immagine virtuale ha ingrandimento di modulo maggiore di uno. Per una divergente l’immagine virtuale è invece più piccola dell’oggetto. Il segno di $q$ stabilisce da quale lato della lente si disegna l’immagine. Per sapere se è ridotta o ingrandita serve anche il modulo di $M$.

::grafico{assi=0 uguale=1 linee="-16,0 19,0;0,-7 0,7" vettori="-6,0,-6,2;-6,2,0,2;-6,2,0,0;0,2,18,-1;0,0,18,-6" segmenti="0,2,-12,4;0,0,-12,4;-12,0,-12,4" punti="-12,0,pieno,F′;12,0,pieno,F;-12,4,vuoto,I;-6,2,pieno,O" xmin=-17.5 xmax=20 ymin=-7.5 ymax=7.5 titolo="L’oggetto è entro il fuoco. I prolungamenti verso sinistra si incontrano nell’immagine virtuale I."}
:::

:::osservazione{#grafico-distanza-immagine titolo="Leggere come si muove il piano immagine"}
Per una lente convergente di focale $10\,\mathrm{cm}$ si ha $q=\dfrac{10\,p}{p-10}$, con $p$ e $q$ in centimetri. Il grafico di $q$ in funzione di $p$ ha due rami, separati dalla retta verticale $p=10\,\mathrm{cm}$, dove il denominatore vale zero.

| $p$ (cm) | $5$ | $11$ | $12$ | $15$ |
| --- | --- | --- | --- | --- |
| $q$ (cm) | $-10$ | $110$ | $60$ | $30$ |

Con l’oggetto a $5\,\mathrm{cm}$ si ha $q=\dfrac{50}{-5}\,\mathrm{cm}=-10\,\mathrm{cm}$, un’immagine virtuale. Con l’oggetto a $15\,\mathrm{cm}$ si ha $q=\dfrac{150}{5}\,\mathrm{cm}=30\,\mathrm{cm}$ e l’immagine si raccoglie su uno schermo. Avvicinando l’oggetto al fuoco da fuori, lo schermo va allontanato: con $p=12\,\mathrm{cm}$ serve $q=60\,\mathrm{cm}$ e con $p=11\,\mathrm{cm}$ serve $q=110\,\mathrm{cm}$. Vicino al fuoco, quindi, uno spostamento dell’oggetto di un centimetro può richiedere decine di centimetri di spostamento dello schermo per riavere un’immagine nitida.

Quando $p$ diventa molto grande, $\dfrac1p$ diventa quasi zero, quindi $\dfrac1q$ si avvicina a $\dfrac1f$ e $q$ si avvicina a $f$ dal lato di uscita. Quando invece $p=f$, il grafico non dà un valore finito. Il ramo di sinistra ha $q<0$ e rappresenta immagini virtuali, quindi le sue quote negative non sono posizioni in cui uno schermo possa raccogliere un’immagine.

::grafico{f="10*x/(x-10)" asintoti="x=10;y=10" punti="5,-10,pieno;15,30,pieno;20,20,pieno;30,15,pieno" xmin=0 xmax=36 ymin=-34 ymax=41 nomi="p (cm),q (cm)" titolo="La verticale a p = 10 cm separa i rami. La linea orizzontale indica il limite q = 10 cm per oggetti lontani."}
:::

## Potere diottrico e applicazioni

:::definizione{#diottrie titolo="L’inverso della distanza focale"}
Il **potere diottrico** $D$ di una lente sottile è il reciproco della distanza focale, presa con il suo segno ed espressa in metri. Si misura in **diottrie**: una diottria è uguale a $1\,\mathrm{m^{-1}}$, che si legge «metro alla meno uno» e significa $\dfrac{1}{\mathrm m}$. Una distanza focale data in centimetri si converte in metri prima di calcolare $D$.

$$
D=\frac{1}{f}.
$$

Per una lente convergente con $f=25\,\mathrm{cm}=0{,}25\,\mathrm m$ si ha $D=\dfrac{1}{0{,}25\,\mathrm m}=+4\,\mathrm{m^{-1}}$. Per una divergente con $f=-0{,}50\,\mathrm m$ si ha $D=\dfrac{1}{-0{,}50\,\mathrm m}=-2\,\mathrm{m^{-1}}$. Più la focale è corta, più il potere è grande in modulo, quindi la lente devia di più i raggi. Il segno di $D$ è lo stesso di $f$: positivo per le convergenti, negativo per le divergenti.

Per lenti sottili **a contatto** (appoggiate l’una all’altra) in aria, con buona approssimazione i poteri si sommano con il loro segno: $D=D_1+D_2$. Per lenti separate da una distanza non trascurabile serve invece un calcolo che tiene conto di quella distanza.
:::

:::esempio{#banco-ottico titolo="Dalla focale alla posizione sul banco"}
Un **banco ottico** è una guida con un righello su cui si fissano oggetto, lente e schermo. Su questo banco la luce va da sinistra a destra. L’oggetto è alla tacca $20\,\mathrm{cm}$ e la lente alla tacca $50\,\mathrm{cm}$, quindi la distanza dell’oggetto da usare nella legge è $p=(50-20)\,\mathrm{cm}=30\,\mathrm{cm}$. La lente è formata da due lenti sottili a contatto con poteri $+8$ e $-3\,\mathrm{m^{-1}}$. Il potere complessivo è $(8-3)\,\mathrm{m^{-1}}=+5\,\mathrm{m^{-1}}$, quindi la focale equivalente vale $\dfrac{1}{5}\,\mathrm m=0{,}20\,\mathrm m=20\,\mathrm{cm}$.

Il calcolo con $f=20\,\mathrm{cm}$ e $p=30\,\mathrm{cm}$ dà

$$
q=\frac{20\cdot30}{30-20}\,\mathrm{cm}=60\,\mathrm{cm}.
$$

La distanza $q$ si misura dalla lente verso il lato di uscita, quindi lo schermo va portato alla tacca $(50+60)\,\mathrm{cm}=110\,\mathrm{cm}$. Se il banco termina a $100\,\mathrm{cm}$, con questa disposizione l’immagine nitida cade fuori dal banco. Per riportarla sul banco si cambia la posizione dell’oggetto oppure la focale.
:::

:::osservazione{#due-posizioni-lente titolo="Due posizioni nitide con oggetto e schermo fissi"}
Oggetto e schermo stanno fermi a distanza $L$ e la lente convergente si sposta fra loro. Poiché la lente è fra i due, $p+q=L$. Scrivendo la somma dei reciproci con il denominatore comune, la legge delle lenti diventa

$$
\frac{1}{f}=\frac{1}{p}+\frac{1}{q}=\frac{p+q}{pq}=\frac{L}{pq},
$$

quindi $pq=fL$. Le due condizioni $p+q=L$ e $pq=fL$ non cambiano se si scambiano $p$ e $q$. Perciò, se una coppia $(p;\,q)$ è una soluzione, anche la coppia scambiata $(q;\,p)$ lo è, e la lente ha due posizioni che danno un’immagine nitida.

Con una lente di focale $10\,\mathrm{cm}$ e distanza fra oggetto e schermo di $45\,\mathrm{cm}$ servono due numeri con somma $45$ e prodotto $10\cdot45=450$: sono $15$ e $30$, perché $15+30=45$ e $15\cdot30=450$.

- Lente a $15\,\mathrm{cm}$ dall’oggetto: $p=15\,\mathrm{cm}$, $q=30\,\mathrm{cm}$, $M=-\dfrac{30}{15}=-2$. L’immagine è capovolta e alta il doppio dell’oggetto.
- Lente a $30\,\mathrm{cm}$ dall’oggetto: $p=30\,\mathrm{cm}$, $q=15\,\mathrm{cm}$, $M=-\dfrac{15}{30}=-0{,}5$. L’immagine è capovolta e alta la metà dell’oggetto.

Fra tutte le coppie di distanze positive con somma $L$, il prodotto più grande si ha quando le due distanze sono uguali e vale $\dfrac{L}{2}\cdot\dfrac{L}{2}=\dfrac{L^2}{4}$. Per esempio, con somma $45$ si ha $20\cdot25=500$ e $22{,}5\cdot22{,}5=506{,}25$. Il prodotto $pq=fL$ non può quindi superare $\dfrac{L^2}{4}$, cioè $fL\leq\dfrac{L^2}{4}$. Dividendo per $\dfrac{L}{4}$ si ottiene che serve $L\geq4f$ per trovare almeno una posizione nitida. Quando $L=4f$ c’è una sola posizione, a metà fra oggetto e schermo, con $p=q=2f$.
:::
