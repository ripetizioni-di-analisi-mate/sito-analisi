---
titolo: "Intervalli di confidenza e numerosità campionaria"
sommario: "Intervalli per medie, proporzioni e varianze, confronto di campioni e pianificazione della precisione."
---

## Copertura e intervallo osservato

:::definizione{#confidenza titolo="Procedura di confidenza"}
Da un campione casuale si ricavano due statistiche $L$ e $U$, chiamate estremo inferiore ed estremo superiore. La probabilità che l'intervallo casuale $[L,U]$ contenga il parametro fisso $\theta$ è la **probabilità di copertura** in $\theta$. Una procedura ha livello $1-\alpha$, con $0<\alpha<1$, se sotto il modello garantisce
$$
P_\theta(L\leq\theta\leq U)\geq 1-\alpha
\qquad\text{per ogni }\theta.
$$
Il pedice in $P_\theta$ indica la distribuzione del campione quando il parametro vale $\theta$. Se l'uguaglianza vale per ogni valore del parametro, la procedura ha copertura esatta pari al livello. Una procedura può avere copertura superiore al livello per alcuni valori del parametro, come accade in molte costruzioni binomiali esatte.

Dopo aver osservato il campione, $L$ e $U$ assumono valori numerici fissati. Il livello descrive la frequenza a lungo termine degli intervalli che contengono il parametro quando si ripete il campionamento con la stessa regola di costruzione.
:::

:::esempio{titolo="Copertura su campioni ripetuti"}
Un laboratorio misura la concentrazione media di una stessa soluzione in condizioni controllate. In ogni serie di misure usa la stessa procedura al $95\,\%$. Se il modello è rispettato e la copertura è esatta, il numero atteso di intervalli che contengono la concentrazione media in $200$ serie è $200\cdot0{,}95=190$. Il conteggio ottenuto in una particolare sequenza di serie può differire da $190$. La copertura è una proprietà della procedura sotto il modello.
:::

:::attenzione{titolo="Interpretazione di un intervallo osservato"}
Supponiamo che un intervallo osservato al $95\,\%$ sia $[8,12]$ e che il parametro della popolazione valga $13$. Gli estremi sono ormai fissati e l'evento $8\leq 13\leq 12$ è falso. L'interpretazione che assegna probabilità $0{,}95$ al parametro fisso dopo l'osservazione confonde l'evento osservato con quello che coinvolge gli estremi casuali $L$ e $U$.
:::

:::definizione{#pivot titolo="Quantità pivot e quantili inferiori"}
Una **quantità pivot** è una funzione del campione e del parametro cercato la cui distribuzione è nota e indipendente dai parametri ignoti. Per una legge continua con funzione di ripartizione crescente sul supporto, il quantile di ordine $p$ è il valore che lascia probabilità $p$ alla propria sinistra. Si indicano con $z_p$, $t_{\nu,p}$ e $\chi^2_{\nu,p}$ i quantili inferiori rispettivamente della normale standard, della t di Student e della chi quadrato. Il simbolo $\nu$ indica i gradi di libertà delle ultime due leggi.

Per costruire un intervallo bilatero a code uguali si prendono i quantili di ordine $\dfrac{\alpha}{2}$ e $1-\dfrac{\alpha}{2}$. Fra essi il pivot cade con probabilità $1-\alpha$. Si risolvono quindi le due disuguaglianze rispetto al parametro. La legge del pivot determina i quantili, mentre l'algebra determina l'ordine degli estremi dell'intervallo.
:::

:::osservazione
Una stessa misura ha ruoli diversi a seconda del problema. Un intervallo di confidenza per la media riguarda la posizione del centro della popolazione. Un intervallo di previsione riguarda una nuova osservazione, che continua a variare anche quando il centro è conosciuto. Per esempio, con deviazione standard nota $6\,\mathrm{g}$ e $36$ misure indipendenti, la media campionaria ha deviazione standard $1\,\mathrm{g}$. Una nuova pesata della stessa popolazione ha ancora deviazione standard $6\,\mathrm{g}$. Questa differenza spiega perché gli estremi di confidenza per la media sono in genere più vicini al centro degli estremi di previsione.
:::

## Media con deviazione standard nota

::::teorema{#media-nota titolo="Intervallo normale per la media"}
Siano $X_1,\ldots,X_n$ osservazioni indipendenti con legge $N(\mu,\sigma^2)$, dove $n\geq1$ e la deviazione standard $\sigma>0$ è nota. La media campionaria è $\bar X=\dfrac{1}{n}\sum_{i=1}^n X_i$. Posto $q=z_{1-\frac{\alpha}{2}}$, l'intervallo
$$
\left[\bar X-q\frac{\sigma}{\sqrt n},\ \bar X+q\frac{\sigma}{\sqrt n}\right]
$$
ha copertura esatta $1-\alpha$ per $\mu$. La quantità $\dfrac{\sigma}{\sqrt n}$ è l'**errore standard** della media. Il prodotto con $q$ è la semiampiezza dell'intervallo.

:::dimostrazione
Si standardizza la media campionaria perché, sotto le ipotesi, ha legge normale con media $\mu$ e varianza $\dfrac{\sigma^2}{n}$. Il pivot $Z=\dfrac{\bar X-\mu}{\dfrac{\sigma}{\sqrt n}}$ ha quindi legge normale standard. La simmetria della legge dà
$$
P\!\left(-q\leq\frac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}\leq q\right)=1-\alpha.
$$
Il denominatore è positivo. Moltiplicando per l'errore standard e isolando $\mu$, le due disuguaglianze diventano $\bar X-q\dfrac{\sigma}{\sqrt n}\leq\mu\leq\bar X+q\dfrac{\sigma}{\sqrt n}$. L'evento è equivalente a quello sul pivot e ha la stessa probabilità.
:::
::::

:::esempio{titolo="Il quantile e le due code"}
Per la confidenza al $95\,\%$, $\alpha=0{,}05$ e ciascuna coda ha area $0{,}025$. Il quantile positivo è $z_{0{,}975}\approx1{,}96$. Con $n=36$, $\bar x=70\,\mathrm{g}$ e $\sigma=6\,\mathrm{g}$, l'errore standard è $1\,\mathrm{g}$, quindi si ottiene circa $[68{,}04,71{,}96]\,\mathrm{g}$. Nella figura il $95\,\%$ centrale riguarda il pivot, che è privo di unità. Gli estremi dell'intervallo hanno invece l'unità della media.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1.96;1.96" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-2.55,0.13,−1,96;2.06,0.108,1,96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.48 nomi="z,y" legenda="\varphi(z)" titolo="L'area colorata è circa il 95%. Restano due code del 2,5% ciascuna."}

:::

:::osservazione
Per osservazioni indipendenti e identicamente distribuite, con varianza finita e nota, il **teorema centrale del limite** dà la copertura asintotica della stessa formula. La qualità dell'approssimazione a una numerosità data dipende dalla distribuzione della popolazione. Una forte asimmetria o una coda lunga può rendere inadeguata l'approssimazione per un campione piccolo. In condizioni identiche, quadruplicare $n$ dimezza l'errore standard, mentre aumentare il livello di confidenza fa crescere $q$ e allarga l'intervallo.
:::

:::esempio{titolo="Effetto della numerosità sul margine"}
Con $\sigma=10\,\mathrm{g}$, $z=1{,}96$ e $n=25$, la semiampiezza è $3{,}92\,\mathrm{g}$. Con $n=100$ diventa $1{,}96\,\mathrm{g}$. La media osservata può cambiare quando si passa da un campione all'altro, quindi gli intervalli dei due campioni possono avere centri diversi. La relazione con $\sqrt n$ riguarda la larghezza a livello e deviazione standard fissati. Sullo stesso campione, passare dal $90\,\%$ al $95\,\%$ allarga invece l'intervallo intorno alla stessa media osservata.
:::

## Media con deviazione standard ignota

::::teorema{#student titolo="Intervallo t per la media"}
Per un campione di $n>1$ osservazioni indipendenti e identicamente distribuite secondo una legge normale con varianza positiva ignota, la varianza campionaria corretta è
$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2.
$$
La sua radice $S$ stima la deviazione standard della popolazione. Posti $\nu=n-1$ e $q=t_{\nu,1-\frac{\alpha}{2}}$, l'intervallo $[\bar X-q\dfrac{S}{\sqrt n},\,\bar X+q\dfrac{S}{\sqrt n}]$ ha copertura esatta $1-\alpha$ per $\mu$.

:::dimostrazione
Si esprime la media standardizzata con $S$ al denominatore come rapporto tra due quantità di distribuzione nota. Sotto normalità, $Z=\dfrac{\bar X-\mu}{\dfrac{\sigma}{\sqrt n}}$ è normale standard e $V=\dfrac{(n-1)S^2}{\sigma^2}$ ha legge chi quadrato con $\nu$ gradi di libertà. Le due quantità sono indipendenti. Quindi
$$
T=\frac{Z}{\sqrt{\frac{V}{\nu}}}
 =\frac{\bar X-\mu}{\frac{S}{\sqrt n}}
$$
ha legge t di Student con $\nu$ gradi di libertà. Per simmetria, $P(-q\leq T\leq q)=1-\alpha$. Invertendo le disuguaglianze si ottiene l'intervallo. Il caso $S=0$ ha probabilità nulla sotto il modello normale con varianza positiva.
:::
::::

:::esempio{titolo="Effetto della stima della variabilità"}
Un campione normale di $9$ tempi di lavorazione ha media $\bar x=18\,\mathrm{min}$ e deviazione standard campionaria corretta $s=3\,\mathrm{min}$. L'errore standard stimato vale $1\,\mathrm{min}$ e $\nu=8$. Al $95\,\%$, $t_{8,0{,}975}\approx2{,}306$, quindi l'intervallo è circa $[15{,}694,20{,}306]\,\mathrm{min}$. A parità di errore standard, il quantile normale $1{,}96$ darebbe una semiampiezza minore. Il quantile t più grande tiene conto della variabilità aggiunta dalla stima di $\sigma$.
:::

:::osservazione
I gradi di libertà sono $n-1$ perché i $n$ scarti dalla media campionaria hanno somma zero. Il vincolo lascia $n-1$ direzioni indipendenti nella somma dei quadrati. Al crescere di $\nu$, i quantili della t si avvicinano a quelli della normale standard. Per una popolazione non normale la legge t esatta in generale viene meno. Con osservazioni i.i.d. e varianza finita e positiva, la standardizzazione con $S$ è asintoticamente normale, perché $S$ converge a $\sigma$. La formula t è allora una procedura approssimata.
:::

:::osservazione
La lettera $s$ indica il valore osservato di $S$. Se si conosce soltanto la somma degli scarti quadratici, si ottiene $s$ dividendo prima tale somma per $n-1$ e poi prendendo la radice. Per esempio, per $n=10$ e somma $90\,\mathrm{mm}^2$ si ha $s=\sqrt{10}\,\mathrm{mm}$. L'errore standard stimato è quindi $1\,\mathrm{mm}$. Il calcolo mostra la funzione dei due divisori. Il primo appartiene alla stima di varianza, mentre il secondo tiene conto della variabilità della media di $n$ osservazioni.
:::

## Proporzioni binomiali

:::definizione{#proporzione titolo="Intervallo di Wald e controllo dei conteggi"}
Si considerano $n$ prove di Bernoulli indipendenti, tutte con probabilità di successo $p$. Il numero casuale di successi $K$ ha legge binomiale e la proporzione campionaria è $\widehat p=\dfrac{K}{n}$. Con $z=z_{1-\frac{\alpha}{2}}$, la procedura normale di **Wald** usa
$$
\widehat p\ \pm\ z\sqrt{\frac{\widehat p(1-\widehat p)}{n}}.
$$
L'errore standard teorico è $\sqrt{\dfrac{p(1-p)}{n}}$. Wald lo stima sostituendo $p$ con la proporzione campionaria. La copertura è approssimata. I conteggi osservati di successi e insuccessi servono a valutare se l'approssimazione normale è plausibile. Avere almeno dieci osservazioni di ciascun tipo è una regola pratica, priva di garanzia esatta sulla copertura.
:::

:::attenzione{titolo="Campioni con tutti esiti uguali"}
Su $12$ prove si possono osservare zero successi anche se la probabilità di successo è $0{,}10$. Con questi dati Wald ha centro zero e semiampiezza zero, quindi produce $[0,0]$. La variabilità stimata nulla deriva dal valore osservato $\widehat p=0$. Sotto il modello binomiale con $p=0{,}10$ la variabilità è invece positiva.
:::

::::teorema{#wilson titolo="Intervallo di Wilson"}
Per lo stesso modello, l'intervallo di **Wilson** ha estremi $c-h$ e $c+h$, dove
$$
\begin{aligned}
c&=\frac{\widehat p+\frac{z^2}{2n}}{1+\frac{z^2}{n}},\\[6pt]
h&=\frac{z}{1+\frac{z^2}{n}}
\sqrt{\frac{\widehat p(1-\widehat p)}{n}+\frac{z^2}{4n^2}}.
\end{aligned}
$$
La costruzione usa la varianza binomiale calcolata sotto il valore di $p$ che si sta valutando. La copertura resta approssimata. Il centro è una media ponderata della proporzione osservata e di $\dfrac12$, con pesi $n$ e $z^2$.

:::dimostrazione
Per un valore candidato $p$ nell'intervallo $(0,1)$, l'approssimazione score accetta il candidato quando la differenza $\widehat p-p$ in valore assoluto è al più $z$ volte il suo errore standard teorico. Elevando al quadrato e moltiplicando per $n$ si ottiene
$$
n(\widehat p-p)^2\leq z^2p(1-p).
$$
Sviluppando i due membri e raccogliendo le potenze di $p$ si ricava
$$
(n+z^2)p^2-(2n\widehat p+z^2)p+n\widehat p^2\leq0.
$$
Il coefficiente di $p^2$ è positivo, quindi la disequazione è verificata fra le due radici. La loro media è $c$ e la loro semidifferenza è $h$. La formula si estende agli estremi per continuità della disuguaglianza quadratica.
:::
::::

:::esempio{titolo="Limite superiore con zero successi"}
Con $n=12$ e $\widehat p=0$, la disequazione di Wilson si riduce a $p((12+z^2)p-z^2)\leq0$. Pertanto l'intervallo bilatero al $95\,\%$ è circa $[0,0{,}2425]$. La soluzione esatta binomiale a code uguali si ricava invece invertendo le probabilità binomiali delle due code. La discrezione di $K$ fa sì che la procedura esatta garantisca almeno il livello dichiarato, con una copertura generalmente superiore.
:::

:::osservazione
L'intervallo di Wald può includere numeri negativi o maggiori di uno. L'intersezione con $[0,1]$ elimina i valori inammissibili e lascia invariata la copertura per ogni $p$ ammesso. Infatti, per un valore fissato $p\in[0,1]$, appartenere all'intervallo originario equivale ad appartenere alla sua intersezione con $[0,1]$. La stessa operazione lascia quindi invariato anche un eventuale difetto di copertura. La scelta fra Wald, Wilson e una procedura esatta riguarda il modo in cui si costruisce l'intervallo a partire dai conteggi.
:::

## Varianza di una popolazione normale

::::teorema{#varianza titolo="Intervallo chi quadrato per la varianza"}
Per un campione i.i.d. normale con varianza positiva e $n>1$, si indichino con $a=\chi^2_{n-1,\frac{\alpha}{2}}$ e $b=\chi^2_{n-1,1-\frac{\alpha}{2}}$ i quantili chi quadrato di coda inferiore. L'intervallo
$$
\left[\frac{(n-1)S^2}{b},\ \frac{(n-1)S^2}{a}\right]
$$
ha copertura esatta $1-\alpha$ per $\sigma^2$. La legge chi quadrato ha supporto positivo e i due quantili sono positivi. L'intervallo per $\sigma$ si ottiene prendendo la radice quadrata dei due estremi, perché la funzione radice è crescente.

:::dimostrazione
Sotto normalità, $Q=\dfrac{(n-1)S^2}{\sigma^2}$ ha legge chi quadrato con $n-1$ gradi di libertà. Perciò $P(a\leq Q\leq b)=1-\alpha$. Scrivendo $D=(n-1)S^2$, le disuguaglianze sono $a\sigma^2\leq D$ e $D\leq b\sigma^2$. La prima equivale a $\sigma^2\leq\dfrac{D}{a}$ e la seconda equivale a $\sigma^2\geq\dfrac{D}{b}$. Il quantile maggiore compare dunque al denominatore dell'estremo inferiore.
:::
::::

:::esempio{titolo="L'ordine dei quantili"}
Con $n=7$, $s^2=4\,\mathrm{mm}^2$ e confidenza al $90\,\%$, si ha $D=24\,\mathrm{mm}^2$. I quantili inferiori della chi quadrato a $6$ gradi di libertà sono $\chi^2_{6,0{,}05}\approx1{,}635$ e $\chi^2_{6,0{,}95}\approx12{,}592$. Usando i quantili arrotondati, l'intervallo per la varianza è circa $[1{,}906,14{,}679]\,\mathrm{mm}^2$. Per la deviazione standard si ottiene circa $[1{,}38,3{,}83]\,\mathrm{mm}$. La regione centrale della chi quadrato è asimmetrica, come mostra la figura.

::grafico{f="x^2*exp(-x/2)/16" area="x^2*exp(-x/2)/16;0;1.635;12.592" segmenti="1.635,0,1.635,0.0738;12.592,0,12.592,0.0183" etichette="0.47,0.112,1,635;11.65,0.043,12,592" xmin=0 xmax=18 ymin=-0.012 ymax=0.17 nomi="q,y" legenda="f_{\chi^2_6}(q)" titolo="L'area colorata è circa il 90% per la chi quadrato con sei gradi di libertà."}

:::

:::osservazione
L'intervallo chi quadrato sfrutta la legge esatta della varianza campionaria di osservazioni normali. Il teorema centrale del limite per la media campionaria, da solo, dà informazioni sulla distribuzione della media. Per la varianza si tratta di una statistica diversa e la forma della popolazione influisce sulla sua variabilità.
:::

:::esempio{titolo="Cambio di unità nella misura della dispersione"}
Un intervallo per la varianza espresso in $\mathrm{cm}^2$ ha estremi $0{,}04$ e $0{,}25$. Per esprimerlo in $\mathrm{mm}^2$ si moltiplicano entrambi gli estremi per $100$, perché ciascuno scarto in centimetri vale dieci volte tanto quando è espresso in millimetri. Si ottiene $[4,25]\,\mathrm{mm}^2$. L'intervallo per la deviazione standard è quindi $[2,5]\,\mathrm{mm}$. I gradi di libertà e i quantili della chi quadrato rimangono invariati al cambio di unità.
:::

## Differenza fra due medie indipendenti

:::teorema{#due-medie titolo="Confronto con varianze note"}
Si osservano due campioni indipendenti di numerosità $n_X$ e $n_Y$, da popolazioni normali con medie $\mu_X,\mu_Y$ e varianze positive note $\sigma_X^2,\sigma_Y^2$. La differenza campionaria $\bar X-\bar Y$ ha media $\mu_X-\mu_Y$ ed errore standard
$$
e=\sqrt{\frac{\sigma_X^2}{n_X}+\frac{\sigma_Y^2}{n_Y}}.
$$
La differenza è normale e l'indipendenza annulla la covarianza fra le due medie. Standardizzando si ricava l'intervallo esatto $[\bar X-\bar Y-ze,\,\bar X-\bar Y+ze]$, dove $z=z_{1-\frac{\alpha}{2}}$. Se si scambia l'ordine dei gruppi, si cambiano i segni di entrambi gli estremi e se ne inverte l'ordine.
:::

:::definizione{#welch titolo="Intervallo di Welch"}
Quando le due varianze sono ignote, per campioni indipendenti da popolazioni normali si può usare l'**intervallo di Welch**. Siano $n_X,n_Y>1$ e $S_X^2,S_Y^2$ le varianze campionarie corrette. Indicati con $v_X=\dfrac{S_X^2}{n_X}$ e $v_Y=\dfrac{S_Y^2}{n_Y}$ i contributi stimati alla varianza della differenza, si usa
$$
\begin{aligned}
e_W&=\sqrt{v_X+v_Y},\\[6pt]
\nu_W&=\frac{(v_X+v_Y)^2}{
\frac{v_X^2}{n_X-1}+\frac{v_Y^2}{n_Y-1}}.
\end{aligned}
$$
La differenza $\bar X-\bar Y$ è il centro e $t_{\nu_W,1-\frac{\alpha}{2}}e_W$ è la semiampiezza. La distribuzione di riferimento è approssimata e può avere gradi di libertà frazionari. Se si dispone solo di una tavola a gradi di libertà interi, usare l'intero inferiore dà un quantile bilatero almeno altrettanto grande. La formula di Welch ammette varianze della popolazione diverse.
:::

:::esempio{titolo="Due contributi uguali alla varianza"}
Due campioni indipendenti di numerosità $10$ hanno varianze corrette $40$ e $40$. Si ha $v_X=v_Y=4$, quindi l'errore standard è $\sqrt8$. La formula di Welch dà $\nu_W=\dfrac{64}{\frac{16}{9}+\frac{16}{9}}=18$. Se la differenza osservata vale $6$ e il quantile al $95\,\%$ vale circa $2{,}101$, il margine è circa $5{,}943$. L'intervallo è quindi circa $[0{,}057,11{,}943]$. I contributi dipendono sia dalle varianze osservate sia dalle numerosità.
:::

:::osservazione
Per campioni indipendenti da popolazioni normali con la stessa varianza positiva ignota e $n_X,n_Y>1$, si possono sommare i quadrati degli scarti dei due gruppi. La **varianza combinata** è la somma divisa per i gradi di libertà complessivi.
$$
S_C^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}.
$$
L'errore standard stimato della differenza è $S_C\sqrt{\dfrac1{n_X}+\dfrac1{n_Y}}$. Il pivot della differenza usa la t con $n_X+n_Y-2$ gradi di libertà. La legge è esatta perché, sotto normalità e varianza comune, la somma dei due contributi quadratici normalizzati ha legge chi quadrato ed è indipendente dalle medie. Per esempio, due gruppi di numerosità $5$ e $7$ con varianze campionarie $4$ e $9$ hanno varianza combinata $\dfrac{4\cdot4+6\cdot9}{10}=7$.
:::

:::osservazione
A parità di livello, quando si possono modificare le numerosità di due gruppi, conta il contributo di ciascun gruppo all'errore standard. Se i contributi noti sono $4$ e $1$, quadruplicare il primo campione porta la loro somma da $5$ a $2$. Quadruplicare il secondo porta invece la somma da $5$ a $4{,}25$. Il confronto si fa sulla somma delle varianze e poi sulla sua radice. La sola numerosità del gruppo non basta a individuare il contributo più grande, perché al numeratore compare anche la varianza.
:::

## Differenze appaiate

:::teorema{#appaiate titolo="Intervallo t sulle differenze"}
Siano $(X_i,Y_i)$ coppie indipendenti tra loro e sia $D_i=X_i-Y_i$ la differenza nella coppia $i$. Se le $n>1$ differenze sono identicamente distribuite secondo una legge normale con varianza positiva, l'intervallo esatto per la media delle differenze è
$$
\left[\bar D-t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n},
\ \bar D+t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n}\right].
$$
Qui $\bar D$ è la media campionaria delle differenze e $S_D$ la loro deviazione standard corretta. Si applica il teorema t a un campione, perché le unità analizzate sono le differenze fra misure della stessa coppia.
:::

:::esempio{titolo="Confronto prima e dopo"}
In un impianto si rilevano, sugli stessi quattro pezzi, le misure prima e dopo una regolazione. Le differenze dopo meno prima sono $1$, $2$, $3$ e $2\,\mathrm{mm}$. La media è $2\,\mathrm{mm}$ e la somma degli scarti quadratici è $2\,\mathrm{mm}^2$, quindi $s_D=\sqrt{\dfrac23}\,\mathrm{mm}$. L'errore standard è $\sqrt{\dfrac16}\,\mathrm{mm}$. Assumendo la normalità delle differenze e usando $t_{3,0{,}975}\approx3{,}182$, l'intervallo è circa $[0{,}701,3{,}299]\,\mathrm{mm}$. Il numero di unità indipendenti è quattro, perché ciascun pezzo contribuisce con una sola differenza.
:::

:::osservazione
Se una coppia ha misure fortemente correlate in senso positivo, la loro differenza può essere meno variabile delle misure prese separatamente. Infatti $\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y)$. Il modello per campioni indipendenti annulla l'ultimo termine. Con l'appaiamento, l'errore standard calcolato sulle differenze incorpora la covarianza fra misure della stessa unità.
:::

:::attenzione{titolo="Controllo dell'abbinamento"}
Su tre strumenti, le letture prima sono $10$, $13$ e $16$, mentre le letture dopo, nello stesso ordine, sono $12$, $14$ e $19$. Le differenze osservate sono $2$, $1$ e $3$. Se si scambiano le ultime due letture dopo, si ottengono invece $2$, $6$ e $-2$. La media delle differenze resta $2$ in entrambi i casi, perché le due somme delle letture restano uguali. Cambia però la dispersione delle differenze, quindi cambia il margine dell'intervallo appaiato.
:::

## Numerosità e limiti unilateri

:::definizione{#numerosita titolo="Numerosità per un margine assegnato"}
Con deviazione standard nota, la semiampiezza dell'intervallo bilatero per la media è $z\dfrac{\sigma}{\sqrt n}$. Se il margine massimo accettato è $E>0$, si risolve $z\dfrac{\sigma}{\sqrt n}\leq E$. La numerosità minima è
$$
n_{\min}=\left\lceil\left(\frac{z\sigma}{E}\right)^2\right\rceil,
$$
dove $\lceil\cdot\rceil$ indica l'arrotondamento all'intero superiore. Per pianificare una proporzione con il margine normale si usa $n\geq\dfrac{z^2p_*(1-p_*)}{E^2}$, dove $p_*$ è la proporzione scelta in fase di progetto. Il valore $p_*=\dfrac12$ massimizza $p_*(1-p_*)$, quindi dà il margine di progetto prudente entro questa approssimazione. Il criterio riguarda la precisione del margine normale e la copertura della procedura scelta resta una questione distinta.
:::

:::esempio{titolo="Il controllo dopo l'arrotondamento"}
Per $z=1{,}96$, $\sigma=5\,\mathrm{g}$ e $E=1{,}4\,\mathrm{g}$ si ha $\left(\dfrac{1{,}96\cdot5}{1{,}4}\right)^2=49$. Il margine a $n=49$ è esattamente $1{,}4\,\mathrm{g}$ con il quantile adottato. Con $48$ misure, $\sqrt{48}<7$, quindi il margine supera il massimo assegnato. L'arrotondamento all'intero superiore conserva la disuguaglianza anche quando il valore teorico è fra due interi.
:::

::::teorema{#unilateri titolo="Limite inferiore e limite superiore"}
Nello stesso modello normale per la media con $\sigma$ nota, il **limite superiore** unilatero di livello $1-\alpha$ è $U=\bar X+z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, con insieme di confidenza $(-\infty,U]$. Il **limite inferiore** è $L=\bar X-z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, con insieme $[L,+\infty)$. Per campioni normali con varianza ignota si usano $S$ e il quantile t di ordine $1-\alpha$.

:::dimostrazione
Si considera il limite superiore. L'evento $\mu\leq U$ equivale a $Z\geq-z_{1-\alpha}$ per il pivot normale standard. La simmetria dà $P(Z\geq-z_{1-\alpha})=1-\alpha$. Per il limite inferiore l'evento equivalente è $Z\leq z_{1-\alpha}$. Entrambe le costruzioni lasciano tutta la probabilità di esclusione in una sola coda.
:::
::::

:::esempio{titolo="Confronto con una soglia minima"}
Per valutare se la media di una popolazione normale supera una soglia di servizio, si usa un limite inferiore. Con $\bar x=52$, errore standard $2$ e $z_{0{,}95}\approx1{,}645$, il limite inferiore al $95\,\%$ è circa $48{,}71$. Quindi l'insieme di confidenza contiene soltanto valori almeno pari a $48{,}71$. Nel capitolo sui test di ipotesi, la stessa soglia critica corrisponde a un test unilatero sulla media costruito con il medesimo pivot.
:::

:::osservazione
Calcolare un limite inferiore e un limite superiore ciascuno al $95\,\%$ sullo stesso campione normale con deviazione standard nota dà due affermazioni unilatere distinte. Per farle valere insieme occorre che il pivot stia fra $-z_{0{,}95}$ e $z_{0{,}95}$. L'area centrale è il $90\,\%$, perché si esclude il $5\,\%$ da ciascun lato. Per ottenere invece un intervallo bilatero al $95\,\%$ si usa $z_{0{,}975}$.
:::
