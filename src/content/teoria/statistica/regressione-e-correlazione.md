---
titolo: "Regressione lineare e correlazione"
sommario: "Dai dati appaiati alla retta dei minimi quadrati, con residui, correlazione e intervalli per la pendenza, la risposta media e una nuova osservazione."
---

## Dati appaiati e diagramma di dispersione

:::definizione{#dati titolo="Dati appaiati"}
Si parla di **dati appaiati** quando ogni unità fornisce due misure. Si indica con $(x_i,y_i)$ la coppia osservata sull'unità $i$, con $i=1,\ldots,n$. Nella regressione di $y$ su $x$, la variabile $x$ è il predittore e la variabile $y$ è la risposta. Per esempio, per ogni pezzo di un'officina si possono registrare lo spessore del materiale e il tempo impiegato per il taglio. La coppia collega le due misure dello stesso pezzo.

Nel **diagramma di dispersione** ogni coppia è rappresentata da un punto del piano. Se, scorrendo i punti da sinistra a destra, le ordinate tendono a crescere, il diagramma suggerisce un'associazione crescente. La forma della nuvola indica se una retta può descrivere la relazione media. La larghezza verticale della nuvola a diverse ascisse aiuta a capire se la dispersione è approssimativamente costante.
:::

:::esempio{titolo="Lettura di cinque osservazioni"}
Per le coppie $(1,2)$, $(2,3)$, $(3,5)$, $(4,4)$ e $(5,6)$, l'ultima ordinata è più alta della prima. Tra $x=3$ e $x=4$ si osserva una diminuzione locale, quindi la crescita complessiva convive con scostamenti dei singoli punti. Una retta descrive la tendenza media e lascia una distanza verticale da ciascun dato.

::grafico{xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" titolo="Diagramma di dispersione delle cinque coppie osservate"}
:::

:::attenzione
Se si ordinano separatamente le due colonne, in generale si associano misure di unità diverse. Per esempio, le coppie $(1,5)$, $(2,3)$ e $(3,1)$ descrivono una relazione decrescente. Ordinando soltanto le ordinate si ottengono $(1,1)$, $(2,3)$ e $(3,5)$ e l'associazione diventa crescente. Le medie e le varianze delle singole colonne sono rimaste uguali, perché ciascuna colonna contiene gli stessi numeri. La differenza riguarda il modo in cui quei numeri sono appaiati.
:::

:::definizione{#somme-centrate titolo="Somme centrate"}
Si indicano con $\bar x$ e $\bar y$ le medie delle ascisse e delle ordinate. Gli scarti centrati sono $x_i-\bar x$ e $y_i-\bar y$. Si definiscono le **somme centrate**
$$
\begin{aligned}
S_{xx}&=\sum_{i=1}^n(x_i-\bar x)^2,\\[6pt]
S_{yy}&=\sum_{i=1}^n(y_i-\bar y)^2,\\[6pt]
S_{xy}&=\sum_{i=1}^n(x_i-\bar x)(y_i-\bar y).
\end{aligned}
$$
Le prime due descrivono la dispersione delle singole variabili. Nella terza, una coppia di scarti dello stesso segno dà un contributo positivo, mentre una coppia di segni opposti dà un contributo negativo. Il segno della somma indica quale tipo di contributo prevale. Nei cinque dati dell'esempio le medie sono $\bar x=3$ e $\bar y=4$. Le somme dei quadrati valgono entrambe $10$ e la somma dei prodotti è $4+1+0+0+4=9$.

::grafico{xmin=-2.7 xmax=2.7 ymin=-2.7 ymax=2.7 nomi="u,v" punti="-2,-2;-1,-1;0,1;1,0;2,2" titolo="Diagramma degli scarti centrati u e v. I tre punti fuori dagli assi hanno scarti dello stesso segno e contribuiscono con 4, 1 e 4."}
:::

:::osservazione
Quando sono disponibili i totali $\sum_i x_i$, $\sum_i y_i$ e $\sum_i x_i y_i$, si può calcolare $S_{xy}$ come
$$
S_{xy}=\sum_{i=1}^n x_i y_i-n\bar x\bar y.
$$
Sviluppando il prodotto centrato e usando $\sum_i x_i=n\bar x$ e $\sum_i y_i=n\bar y$, i tre termini che contengono le medie si riducono a $-n\bar x\bar y$. Ponendo $y_i=x_i$ si ottiene $S_{xx}=\sum_i x_i^2-n\bar x^2$. Queste identità permettono di lavorare con una tabella di totali. Con misure molto grandi e tra loro vicine, il calcolo direttamente sugli scarti riduce la perdita di precisione dovuta alla sottrazione di due numeri quasi uguali.
:::

## Retta dei minimi quadrati

:::definizione{#criterio-minimi-quadrati titolo="Criterio dei minimi quadrati"}
Per la retta $a+bx$ si indica con $a$ l'intercetta e con $b$ la pendenza. Alla $i$-esima ascissa la retta assegna il valore $a+bx_i$, quindi lo scarto verticale dal dato è $y_i-a-bx_i$. Il criterio dei **minimi quadrati** sceglie $a$ e $b$ per rendere minima la somma
$$
Q(a,b)=\sum_{i=1}^n(y_i-a-bx_i)^2.
$$
Elevando al quadrato, scarti di segno opposto contribuiscono entrambi in modo positivo. Per esempio, due scarti $-2$ e $2$ contribuiscono per $8$ al criterio. Poiché lo scarto è verticale, scambiare il predittore con la risposta cambia il problema di minimo.
:::

::::teorema{#retta titolo="Retta dei minimi quadrati con intercetta"}
Siano date $n\ge 2$ coppie con $S_{xx}>0$. Il minimo di $Q(a,b)$ è unico e si ottiene per
$$
b=\frac{S_{xy}}{S_{xx}},
\qquad
a=\bar y-b\bar x.
$$
Si scrive $\hat y(x)=a+bx$ per il valore adattato alla generica ascissa $x$. La retta passa per $(\bar x,\bar y)$, perché sostituendo $\bar x$ si ottiene $\hat y(\bar x)=\bar y$.

:::dimostrazione
Per determinare il minimo si trova prima la miglior intercetta a pendenza fissata. Le condizioni di stazionarietà, ottenute derivando $Q$ rispetto ad $a$ e a $b$, sono le **equazioni normali**
$$
\begin{cases}
\sum_i(y_i-a-bx_i)=0,\\
\sum_i x_i(y_i-a-bx_i)=0.
\end{cases}
$$
La prima equazione è $n(\bar y-a-b\bar x)=0$, quindi $a=\bar y-b\bar x$. Con questo valore, lo scarto diventa $(y_i-\bar y)-b(x_i-\bar x)$. La sua somma è zero. Nella seconda equazione si può allora sostituire $x_i$ con $x_i-\bar x$, perché il contributo della costante $\bar x$ è nullo. Si ottiene $S_{xy}-bS_{xx}=0$.

Per verificare che il punto trovato sia il minimo, si scompone la funzione obiettivo come
$$
Q(a,b)=n(\bar y-a-b\bar x)^2+S_{yy}-2bS_{xy}+b^2 S_{xx}.
$$
La scomposizione segue espandendo il quadrato dopo aver scritto ogni scarto come somma di uno scarto centrato e del termine costante $\bar y-a-b\bar x$. Fissato $b$, il primo termine è minimo per l'unica intercetta che lo annulla. Il termine rimanente è un quadratico in $b$ con coefficiente $S_{xx}>0$, quindi ha un unico minimo per la pendenza trovata.
:::
::::

:::esempio{titolo="Pendenza, intercetta e unità di misura"}
Nei cinque dati con $\bar x=3$, $\bar y=4$, $S_{xx}=10$ e $S_{xy}=9$ si ottiene
$$
\begin{aligned}
b&=\frac{9}{10}=0{,}9,\\[6pt]
a&=4-0{,}9\cdot3=1{,}3,\\[6pt]
\hat y(x)&=1{,}3+0{,}9x.
\end{aligned}
$$
Se $x$ è misurato in millimetri e $y$ in secondi, un millimetro in più corrisponde a un incremento stimato di $0{,}9\,\mathrm{s}$ nella risposta. L'intercetta ha unità di secondi e rappresenta il valore adattato a $x=0$. Poiché qui si osservano ascisse da $1$ a $5$, attribuire un significato sperimentale all'intercetta richiede che il modello resti plausibile fino a $0$.
:::

:::osservazione
Nella regressione di $x$ su $y$ il predittore diventa $y$, quindi la pendenza è $\dfrac{S_{xy}}{S_{yy}}$ se $S_{yy}>0$. Per esempio, se $S_{xx}=20$, $S_{yy}=45$ e $S_{xy}=18$, le pendenze delle due regressioni sono $0{,}9$ e $0{,}4$. Risolvere la prima equazione rispetto a $x$ darebbe invece una pendenza pari a $\dfrac{1}{0{,}9}$. La differenza deriva dalla scelta degli scarti da minimizzare. Nella prima regressione si misura lo scarto nell'ordinata $y$ a $x$ fissato. Nell'altra si misura lo scarto in $x$ a $y$ fissato.
:::

## Residui e qualità dell'adattamento

:::definizione{#residui titolo="Valori adattati e residui"}
Il **valore adattato** alla $i$-esima ascissa è $\hat y_i=a+bx_i$. Il **residuo** è $e_i=y_i-\hat y_i$. Il segno è positivo quando il punto osservato sta sopra la retta e negativo quando sta sotto. Le equazioni normali della regressione con intercetta danno $\sum_i e_i=0$ e $\sum_i x_i e_i=0$. Il primo vincolo fa sì che la media dei valori adattati coincida con la media delle ordinate osservate.
:::

:::esempio{titolo="Scarto verticale dalla retta"}
Per la retta $\hat y(x)=1{,}3+0{,}9x$, all'ascissa $4$ il valore adattato è $4{,}9$. Il dato osservato è $4$, quindi il residuo è $-0{,}9$. All'ascissa $3$ il valore adattato è $4$ e l'ordinata osservata è $5$, perciò il residuo vale $1$. In figura i segmenti tratteggiati rappresentano queste due differenze verticali.

::grafico{f="1.3+0.9*x" xmin=-0.4 xmax=6 ymin=-0.5 ymax=7.5 punti="1,2;2,3;3,5;4,4;5,6" segmenti="3,4,3,5;4,4,4,4.9" legenda="\hat y=1{,}3+0{,}9x" titolo="Retta adattata e scarti verticali alle ascisse 3 e 4"}
:::

::::teorema{#scomposizione-regressione titolo="Scomposizione della variabilità"}
Per una retta dei minimi quadrati con intercetta e $S_{xx}>0$, si chiamano $SST=\sum_i(y_i-\bar y)^2$ la somma totale dei quadrati, $SSR=\sum_i(\hat y_i-\bar y)^2$ la parte attribuita alla regressione e $SSE=\sum_i e_i^2$ la somma dei quadrati dei residui. Vale
$$
SST=SSR+SSE.
$$
L'identità confronta la retta con il modello che assegna a ogni unità la sola media $\bar y$.

:::dimostrazione
Ogni scarto dalla media si scrive come $(\hat y_i-\bar y)+e_i$. Sviluppando il quadrato si ottiene la somma delle due parti quadratiche e del termine misto $2\sum_i(\hat y_i-\bar y)e_i$. Poiché $\hat y_i-\bar y=b(x_i-\bar x)$, il termine misto è
$$
2b\left(\sum_i x_i e_i-\bar x\sum_i e_i\right)=0.
$$
Entrambe le somme si annullano per le equazioni normali. Sommando i quadrati rimangono quindi $SSR$ e $SSE$.
:::
::::

:::definizione{#coefficiente-determinazione titolo="Coefficiente di determinazione"}
Se $SST>0$, il **coefficiente di determinazione** è
$$
R^2=\frac{SSR}{SST}=1-\frac{SSE}{SST}.
$$
Con l'intercetta e il criterio dei minimi quadrati, $R^2$ appartiene a $[0,1]$ perché le due parti della scomposizione sono non negative. Esprime la quota della variabilità osservata della risposta attribuita alla retta. Per esempio, nei cinque dati la variabilità totale vale $10$ e $SSR=b^2S_{xx}=8{,}1$. Di conseguenza $SSE=1{,}9$ e $R^2=0{,}81$.
:::

:::attenzione
Il valore $0{,}81$ riguarda una quota di somma dei quadrati. La percentuale di previsioni entro una tolleranza, per esempio entro mezzo secondo, richiederebbe di contare gli scarti che rispettano quella soglia. Sono due misure diverse. Se tutte le ordinate sono uguali, $SST=0$ e la definizione di $R^2$ presenta un denominatore nullo, anche quando la retta riproduce esattamente tutti i dati.
:::

## Correlazione di Pearson

:::definizione{#pearson titolo="Coefficiente di correlazione di Pearson"}
Quando $S_{xx}>0$ e $S_{yy}>0$, la **correlazione campionaria di Pearson** è
$$
r=\frac{S_{xy}}{\sqrt{S_{xx}S_{yy}}}.
$$
Il denominatore rende il rapporto adimensionale. Il suo segno è quello di $S_{xy}$ e coincide con quello della pendenza della retta di $y$ su $x$. Mentre la regressione assegna ruoli distinti a risposta e predittore, il calcolo di $r$ è simmetrico. Nei cinque dati si ha $r=\dfrac{9}{\sqrt{10\cdot 10}}=0{,}9$.
:::

::::teorema{#pearson-determinazione titolo="Correlazione e determinazione"}
Per dati con $S_{xx}>0$ e $S_{yy}>0$, nella regressione lineare semplice con intercetta vale $R^2=r^2$. Il segno di $r$ permette di distinguere il verso dell'associazione anche quando due rette hanno lo stesso $R^2$.

:::dimostrazione
Poiché la retta passa per il punto delle medie, si ha $\hat y_i-\bar y=b(x_i-\bar x)$. Quindi $SSR=b^2S_{xx}$. Sostituendo $b=\dfrac{S_{xy}}{S_{xx}}$ nella formula di $R^2$ si ottiene
$$
R^2=\frac{b^2S_{xx}}{S_{yy}}
=\frac{S_{xy}^2}{S_{xx}S_{yy}}
=r^2.
$$
Da $R^2\le 1$ segue $|r|\le 1$. Se $|r|=1$, allora $SSE=0$, quindi tutti i punti stanno esattamente sulla retta. Il segno è positivo per una pendenza crescente e negativo per una pendenza decrescente.
:::
::::

:::osservazione
Traslando le ascisse di una costante, gli scarti dalla loro media restano uguali, quindi $r$ resta uguale. Moltiplicando le ascisse per una costante positiva $c$, gli scarti e $S_{xy}$ si moltiplicano per $c$, mentre $S_{xx}$ si moltiplica per $c^2$. Il fattore si semplifica nel rapporto. Per $c<0$ il denominatore si moltiplica per $|c|$ e il numeratore per $c$, quindi il segno di $r$ si inverte. Passare da metri a centimetri lascia invariato $r$ e divide per $100$ la pendenza espressa per unità di ascissa.
:::

:::osservazione
Standardizzando ciascuna variabile con la propria deviazione standard campionaria, si ottengono due colonne di media zero e somma dei quadrati $n-1$. Nella regressione tra le colonne standardizzate l'intercetta è quindi zero e il denominatore della pendenza vale $n-1$. Lo stesso numero compare al denominatore di Pearson, perché è la radice del prodotto delle due somme dei quadrati. La pendenza standardizzata coincide perciò con $r$. Se $r=0{,}6$, una deviazione standard in più nel predittore corrisponde a $0{,}6$ deviazioni standard in più nella risposta adattata.
:::

:::attenzione
I tre punti $(-1,1)$, $(0,0)$ e $(1,1)$ hanno $S_{xy}=0$ per simmetria, quindi $r=0$. Le ordinate sono comunque determinate dalle ascisse attraverso $y=x^2$. Un coefficiente nullo indica assenza di associazione lineare nel senso di Pearson. La forma del diagramma resta necessaria per riconoscere relazioni curve.
:::

## Modello lineare e inferenza sulla pendenza

:::definizione{#modello-lineare titolo="Modello lineare con errori indipendenti"}
Nel **modello lineare semplice** a predittori fissati, la risposta $Y_i$ è aleatoria e soddisfa
$$
Y_i=\alpha+\beta x_i+\varepsilon_i.
$$
I coefficienti $\alpha$ e $\beta$ sono parametri della retta media. Gli errori $\varepsilon_i$ hanno media zero, quindi $E[Y_i]=\alpha+\beta x_i$. L'inferenza classica assume inoltre indipendenza e varianza comune $\sigma^2>0$. L'errore $\varepsilon_i$ è lo scarto dalla vera retta media, che dipende da parametri incogniti. Il residuo $e_i$ è calcolabile dopo aver adattato una retta al campione. La normalità degli errori, aggiunta alle ipotesi precedenti, permette di usare la distribuzione esatta di Student.
:::

:::teorema{#inferenza titolo="Errore standard e test sulla pendenza"}
Nel modello a predittori fissati con errori indipendenti $N(0,\sigma^2)$, $n>2$ e $S_{xx}>0$, si stima la varianza degli errori con la **varianza residua**
$$
s_e^2=\frac{SSE}{n-2}.
$$
Si stimano due coefficienti, perciò restano $n-2$ gradi di libertà per stimare la dispersione. L'errore standard stimato della pendenza è
$$
SE(b)=\frac{s_e}{\sqrt{S_{xx}}}.
$$
Sotto $H_0\colon\beta=\beta_0$, la statistica $T=\dfrac{b-\beta_0}{SE(b)}$ ha legge $t_{n-2}$. Indicando con $t_{\nu,p}$ il quantile di ordine $p$ della distribuzione di Student con $\nu$ gradi di libertà, un intervallo di livello $1-\gamma$ per $\beta$ è
$$
b\pm t_{n-2,1-\frac{\gamma}{2}}SE(b).
$$
Il livello $\gamma$ è distinto dall'intercetta $\alpha$. Un errore standard più piccolo rende più precisa la stima a parità di livello di confidenza.
:::

:::osservazione
Indicando con $B$ lo stimatore aleatorio della pendenza, si ha
$$
B=\beta+\frac{\sum_i (x_i-\bar x)\varepsilon_i}{S_{xx}}.
$$
L'espressione si ottiene sostituendo il modello nella somma dei prodotti centrati. Il contributo dell'intercetta è nullo perché $\sum_i(x_i-\bar x)=0$. L'indipendenza degli errori dà varianza $\sigma^2 S_{xx}$ al numeratore aleatorio, perciò la varianza della pendenza è $\dfrac{\sigma^2}{S_{xx}}$. Con errori normali la pendenza è normale. La somma dei quadrati residui divisa per $\sigma^2$ ha legge chi quadrato con $n-2$ gradi di libertà ed è indipendente dalla pendenza, perché la proiezione degli errori sullo spazio delle rette e la proiezione sul suo complemento ortogonale sono indipendenti per un vettore normale con covarianza $\sigma^2 I$. Dividere la normale standardizzata per la radice del chi quadrato normalizzato dà la legge di Student.
:::

:::esempio{titolo="Verifica di una pendenza ipotizzata"}
Con $n=11$, $b=1{,}8$ e $SE(b)=0{,}3$, si consideri $H_0\colon\beta=1{,}2$ contro un'alternativa bilaterale al $5\%$. La statistica osservata vale
$$
T=\frac{1{,}8-1{,}2}{0{,}3}=2.
$$
Poiché $|T|=2<2{,}262=t_{9,0{,}975}$, il test non rifiuta $H_0$. L'intervallo al $95\%$ è $[1{,}1214;\,2{,}4786]$ usando il quantile fornito. Il valore $1{,}2$ appartiene all'intervallo, in accordo con il test bilaterale dello stesso livello.
:::

:::osservazione
Per un'alternativa unilaterale sinistra si confronta $T$ con il quantile inferiore $t_{n-2,\gamma}$. Per un'alternativa unilaterale destra si usa il quantile superiore $t_{n-2,1-\gamma}$. Nell'esempio con $T=2$ il valore $p$ bilaterale è circa $0{,}077$, mentre quello per l'alternativa destra è circa $0{,}038$. Le decisioni possono differire perché il test bilaterale considera anche deviazioni della stessa ampiezza nella direzione opposta. La direzione dell'alternativa fa parte dell'ipotesi da esaminare e si specifica prima di osservare il segno della stima.
:::

## Risposta media e previsione individuale

:::teorema{#previsione titolo="Intervalli per risposta media e nuova osservazione"}
Si assuma il modello normale con errori indipendenti, varianza comune, $n>2$ e $S_{xx}>0$. Per una nuova ascissa fissata $x_0$, il valore adattato è $\hat y_0=a+bx_0$. Indicando con $h_0$ il termine
$$
h_0=\frac1n+\frac{(x_0-\bar x)^2}{S_{xx}},
$$
l'intervallo per la **risposta media** $\alpha+\beta x_0$ è
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{h_0}.
$$
Per prevedere una nuova osservazione indipendente, con la stessa varianza degli errori, l'**intervallo di previsione** è
$$
\hat y_0\pm t_{n-2,1-\frac{\gamma}{2}}s_e\sqrt{1+h_0}.
$$
Il centro è lo stesso perché il nuovo errore ha media zero. La previsione individuale ha un margine più ampio perché deve tenere conto anche della variabilità di quella specifica osservazione.
:::

:::osservazione
La stima della risposta media si riscrive come $\bar y+b(x_0-\bar x)$. Nel modello la media campionaria e la pendenza sono incorrelate, perché il loro prodotto di coefficienti sugli errori ha somma proporzionale a $\sum_i(x_i-\bar x)=0$. Le due varianze si sommano e danno $\sigma^2h_0$. Per la nuova risposta, l'errore aggiuntivo ha varianza $\sigma^2$ ed è indipendente dal campione. Questo produce il termine $1+h_0$. Il margine per la media è minimo a $x_0=\bar x$, dove il contributo della pendenza si annulla.
:::

:::esempio{titolo="Due margini allo stesso valore di x"}
Siano $n=16$, $s_e=2$ e $\hat y(\bar x)=20$. Per $x_0=\bar x$ si ha $h_0=\dfrac1{16}$. Gli errori standard stimati sono quindi
$$
\begin{aligned}
SE_{\mathrm{media}}&=2\sqrt{\frac1{16}}=\frac12,\\[6pt]
SE_{\mathrm{pred}}&=2\sqrt{1+\frac1{16}}=\frac{\sqrt{17}}2.
\end{aligned}
$$
Al $95\%$ si moltiplicano entrambi per $t_{14,0{,}975}\approx2{,}145$. Il primo margine è circa $1{,}073$ e il secondo circa $4{,}422$. Una stima precisa della media può quindi accompagnarsi a un intervallo ampio per una risposta individuale.

::grafico{assi=0 xmin=14 xmax=26 ymin=0 ymax=3 linee="18.927,2 21.073,2;15.578,1 24.422,1" punti="18.927,2;21.073,2;15.578,1;24.422,1;20,2;20,1" segmenti="20,0.7,20,2.3" etichette="18.4,2.3,M;15.3,1.3,P;20.1,2.5,20" titolo="Intervalli al 95% alla stessa ascissa. M riguarda la risposta media, P la previsione individuale. La verticale tratteggiata indica il centro comune 20."}
:::

:::attenzione
Il livello di confidenza descrive la frequenza di copertura della procedura se si ripete il campionamento nelle stesse condizioni. Per la risposta media, il valore da coprire è un parametro fissato. Per la previsione, in ogni ripetizione si aggiunge una nuova risposta aleatoria indipendente. Usare l'intervallo della media per coprire una risposta individuale lascia fuori la variabilità del nuovo errore e non garantisce il livello di previsione dichiarato.
:::

## Diagnostica e limiti del modello

:::definizione{#diagnostica titolo="Diagramma dei residui"}
Nel **diagramma dei residui** si mette in ordinata $e_i$ e in ascissa $x_i$ oppure $\hat y_i$. Una struttura curva suggerisce che la media lineare lascia una variazione sistematica. Un allargamento della fascia verticale suggerisce una varianza crescente. Se le osservazioni hanno un ordine temporale, anche il grafico dei residui rispetto all'ordine è informativo. Lunghe sequenze dello stesso segno possono indicare dipendenza nel tempo.
:::

:::esempio{titolo="La somma dei residui può essere zero con una struttura curva"}
Alle ascisse $1,2,3,4,5$ si osservano i residui $2,-1,-2,-1,2$. La somma è zero e anche la somma pesata per le ascisse è zero. Le equazioni normali sono quindi soddisfatte. Il diagramma mostra comunque residui positivi agli estremi e negativi al centro. Questo andamento è coerente con una risposta media convessa che la retta approssima solo in parte.

::grafico{f="0" xmin=-0.4 xmax=6 ymin=-2.8 ymax=2.8 nomi="x,e" punti="1,2;2,-1;3,-2;4,-1;5,2" legenda="e=0" titolo="Residui sopra zero agli estremi e sotto zero al centro"}
:::

:::definizione{#leva titolo="Leva e influenza"}
Nel modello con intercetta la **leva** dell'osservazione $i$ è $h_i=\dfrac1n+\dfrac{(x_i-\bar x)^2}{S_{xx}}$. Dipende dalla distanza orizzontale dell'ascissa dal centro dei dati. Un'osservazione è influente se la sua rimozione modifica in modo apprezzabile il modello adattato. Una leva elevata permette una forte influenza, soprattutto quando la posizione del punto è in disaccordo con la tendenza degli altri dati. Se il punto estremo giace esattamente sulla retta determinata dagli altri punti, aggiungerlo lascia invariato l'adattamento.
:::

:::osservazione
La somma delle leve vale $2$. Infatti i termini costanti $\dfrac1n$ sommano a $1$ e i quadrati degli scarti al numeratore sommano a $S_{xx}$. Il valore medio delle leve è quindi $\dfrac2n$. La leva misura anche quanto cambia il valore adattato all'osservazione $i$ quando si cambia soltanto la sua ordinata. Infatti, dalla forma $\hat y_i=\bar y+b(x_i-\bar x)$, una variazione $\Delta$ di $y_i$ aumenta $\bar y$ di $\dfrac{\Delta}{n}$ e modifica $b$ di $\dfrac{(x_i-\bar x)\Delta}{S_{xx}}$. La variazione complessiva di $\hat y_i$ è perciò $h_i\Delta$.
:::

:::attenzione
Un valore elevato di $R^2$ nel campione descrive l'adattamento. L'estrapolazione richiede anche che la forma lineare resti plausibile fuori dall'intervallo delle ascisse osservate. Per esempio, una retta adatta alla domanda di un servizio tra prezzi di $10$ e $20$ euro può dare una domanda negativa a $100$ euro. L'intervallo standard quantifica l'incertezza sotto il modello lineare e presuppone che quel modello valga anche all'ascissa nuova.

Anche l'interpretazione causale richiede informazioni ulteriori. In dati osservativi, la durata del viaggio e il consumo di carburante possono crescere insieme perché entrambi dipendono dalla distanza percorsa. La sola correlazione tra durata e consumo lascia aperto il ruolo di quella terza variabile.
:::

## Correlazione sui ranghi

:::definizione{#spearman titolo="Coefficiente di Spearman"}
Il **coefficiente di Spearman** è la correlazione di Pearson calcolata sui ranghi delle due variabili, mantenendo ciascuna coppia. Quando più valori sono uguali, a ciascuno si assegna la media delle posizioni che occupano nell'ordinamento. Il coefficiente è definito quando entrambi gli insiemi di ranghi hanno varianza positiva. Descrive la concordanza nell'ordinamento ed è utile anche per dati ordinali.
:::

:::esempio{titolo="Ranghi con un pari merito"}
Per $x=(10,20,20,40)$, i ranghi sono $(1,2{,}5,2{,}5,4)$ perché i due valori centrali si dividono il secondo e il terzo posto. Per $y=(8,4,6,2)$, i ranghi sono $(4,2,3,1)$. Le medie dei ranghi sono entrambe $2{,}5$. Le somme centrate dei quadrati valgono $4{,}5$ e $5$ e la somma dei prodotti centrati è $-4{,}5$. Perciò
$$
r_S=\frac{-4{,}5}{\sqrt{4{,}5\cdot 5}}=-\sqrt{0{,}9}.
$$
Il valore è vicino a $-1$ perché a ranghi di $x$ crescenti corrispondono per lo più ranghi di $y$ decrescenti. Se tutte le ascisse e le ordinate sono distinte e il loro ordine è sempre lo stesso, i due vettori di ranghi coincidono e il coefficiente vale $1$ anche quando la relazione tra i valori originali è curva.
:::

:::osservazione
Una trasformazione strettamente crescente conserva l'ordine e gli eventuali pari merito, quindi lascia uguali i ranghi. Questo vale, per esempio, passando da tempi positivi ai loro logaritmi. La correlazione di Pearson sui tempi può cambiare, perché cambiano le distanze tra i valori. Spearman resta uguale perché usa le posizioni nell'ordinamento. Una trasformazione strettamente decrescente inverte le posizioni, quindi cambia il segno del coefficiente quando è applicata a una sola delle due variabili.
:::
