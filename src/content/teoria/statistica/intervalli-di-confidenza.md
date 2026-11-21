---
titolo: "Intervalli di confidenza e numerosità campionaria"
sommario: "Intervalli per medie, proporzioni e varianze, confronto di campioni e pianificazione della precisione."
---

Nel capitolo 9 la media di un campione è stata usata come stima della media della popolazione. Se si pesano 36 pezzi di una produzione e la loro media è $70\,\mathrm{g}$, la stima della massa media $\mu$ di tutti i pezzi è $70\,\mathrm{g}$. Un altro gruppo di 36 pezzi darebbe però un'altra media, quindi la stima coincide con $\mu$ soltanto per caso. Un intervallo di confidenza aggiunge alla stima un margine. Se la deviazione standard delle masse è $6\,\mathrm{g}$, dai 36 pezzi si ricava l'intervallo $[68{,}04,71{,}96]\,\mathrm{g}$. La regola che lo produce, applicata a molti campioni diversi, dà un intervallo che contiene $\mu$ in 95 casi su 100.

In questo capitolo si calcolano intervalli di questo tipo per la media di una popolazione, per una proporzione, per una varianza e per la differenza fra due medie. Rispondono a domande come «fra quali valori sta la percentuale di studenti che usa l'autobus?». Se 64 studenti su 200 intervistati usano l'autobus, la stima è $0{,}32$ e l'intervallo al $95\,\%$ va circa da $0{,}26$ a $0{,}38$. L'ultima sezione calcola quanti dati raccogliere perché il margine non superi un valore fissato prima dell'indagine, per esempio $0{,}03$.

I conti usano i risultati dei capitoli precedenti. Le leggi normale, chi quadrato e t di Student e i loro quantili sono nel capitolo 6. La legge della media campionaria, l'errore standard e il teorema centrale del limite sono nel capitolo 8. Il capitolo 11 usa gli stessi conti per decidere fra due ipotesi su un parametro, e il capitolo 12 costruisce intervalli per la pendenza di una retta di regressione e per una nuova osservazione.

## Copertura e intervallo osservato

:::definizione{#confidenza titolo="Procedura di confidenza"}
Una popolazione normale ha deviazione standard $\sigma=6\,\mathrm{g}$ e media $\mu$ ignota. Si pesano 36 pezzi, si calcola la media campionaria $\bar X$ e si prende l'intervallo da $\bar X-1{,}96$ a $\bar X+1{,}96$. Prima della pesata $\bar X$ è una variabile aleatoria, perciò anche i due estremi sono aleatori e cambiano da un campione all'altro. Il teorema sull'intervallo normale per la media mostra che l'intervallo così costruito contiene $\mu$ con probabilità $0{,}95$, qualunque sia il valore di $\mu$. Dopo la pesata, con media osservata $\bar x=70\,\mathrm{g}$, gli estremi diventano i numeri $68{,}04$ e $71{,}96$.

Nel caso generale il parametro ignoto si indica con $\theta$, che si legge teta; può essere, per esempio, una media $\mu$ o una proporzione $p$. Da un campione casuale si ricavano due statistiche $L$ e $U$, chiamate estremo inferiore ed estremo superiore. La probabilità che l'intervallo aleatorio $[L,U]$ contenga $\theta$ è la **probabilità di copertura** in $\theta$. Una procedura ha livello $1-\alpha$, dove $\alpha$, che si legge alfa, è un numero con $0<\alpha<1$, se garantisce
$$
P_\theta(L\leq\theta\leq U)\geq 1-\alpha
\qquad\text{per ogni }\theta.
$$
Il pedice in $P_\theta$ indica che la probabilità si calcola supponendo che il parametro valga $\theta$. Nell'esempio delle pesate $\alpha=0{,}05$ e il livello è $0{,}95$, cioè il $95\,\%$. L'intervallo prodotto da una procedura di livello $1-\alpha$ si chiama **intervallo di confidenza** al livello $1-\alpha$.

Se la probabilità di copertura è uguale a $1-\alpha$ per ogni $\theta$, la procedura ha copertura esatta pari al livello. Per altre procedure la copertura supera il livello per alcuni valori di $\theta$, come accade per l'intervallo binomiale esatto della sezione sulle proporzioni.

Per un singolo intervallo si definisce l'**indicatore di copertura**, che vale $1$ se l'intervallo contiene $\theta$ e $0$ altrimenti. Con $\theta=5$, l'intervallo $[4,6]$ ha indicatore $1$ e l'intervallo $[5{,}5,7]$ ha indicatore $0$. Prima della raccolta dei dati l'indicatore è una variabile di Bernoulli, come nel capitolo 5, e la sua attesa è la probabilità di copertura. Se si ripete il campionamento molte volte con la stessa regola, la frazione di intervalli con indicatore $1$ si avvicina alla probabilità di copertura, per la legge dei grandi numeri del capitolo 8. Per una procedura con copertura esatta, il livello $1-\alpha$ è quindi il valore a cui si avvicina la frazione di intervalli che contengono il parametro, quando la stessa regola si applica a molti campioni.
:::

:::esempio{titolo="Copertura su campioni ripetuti"}
Un laboratorio misura la concentrazione di una stessa soluzione in condizioni controllate e ripete $200$ serie di misure. In ogni serie calcola un intervallo per la concentrazione media con la stessa procedura al $95\,\%$. Il numero di intervalli che contengono la concentrazione media è la somma dei $200$ indicatori di copertura. Se le ipotesi della procedura sono soddisfatte e la copertura è esatta, ogni indicatore ha attesa $0{,}95$, quindi per la linearità dell'attesa il numero atteso di intervalli che contengono la concentrazione media è $200\cdot0{,}95=190$. In una particolare sequenza di $200$ serie il conteggio osservato può essere diverso, per esempio $187$, perché $190$ è il valore medio del conteggio su molte ripetizioni dell'intera sequenza. La copertura è quindi una proprietà della procedura, calcolata sotto le sue ipotesi.
:::

:::esempio{titolo="Dieci intervalli dalla stessa procedura"}
Una popolazione normale ha $\mu=70\,\mathrm{g}$ e $\sigma=6\,\mathrm{g}$, e da essa si estraggono dieci campioni indipendenti di $36$ unità. L'errore standard della media, cioè la deviazione standard di $\bar X$ vista nel capitolo 8, è $\dfrac{6}{\sqrt{36}}=1\,\mathrm{g}$. Ogni intervallo al $95\,\%$ ha quindi semiampiezza, cioè distanza fra il centro e ciascun estremo, pari a $1{,}96\cdot1=1{,}96\,\mathrm{g}$. Le dieci medie osservate sono $69{,}2$, $70{,}8$, $71{,}1$, $68{,}6$, $70{,}3$, $72{,}3$, $69{,}7$, $70{,}5$, $68{,}9$ e $70{,}1\,\mathrm{g}$. Il sesto intervallo è $[70{,}34,74{,}26]\,\mathrm{g}$ e lascia fuori $\mu$, perché $72{,}3-1{,}96=70{,}34>70$. Gli altri nove intervalli contengono $\mu$, quindi nove indicatori di copertura su dieci valgono $1$. I centri cambiano da un campione all'altro, mentre la semiampiezza resta uguale, perché dipende soltanto da $\sigma$, da $n$ e dal livello.

::grafico{assi=0 xmin=65.4 xmax=75.4 ymin=-1.3 ymax=11.6 linee="65.9,0 74.9,0;66,-0.15 66,0.15;68,-0.15 68,0.15;72,-0.15 72,0.15;74,-0.15 74,0.15;70,0 70,10.8;67.24,1 71.16,1;68.84,2 72.76,2;69.14,3 73.06,3;66.64,4 70.56,4;68.34,5 72.26,5;67.74,7 71.66,7;68.54,8 72.46,8;66.94,9 70.86,9;68.14,10 72.06,10" poligoni="70.34,5.82 74.26,5.82 74.26,6.18 70.34,6.18" punti="69.2,1;70.8,2;71.1,3;68.6,4;70.3,5;72.3,6;69.7,7;70.5,8;68.9,9;70.1,10" etichette="65.75,-0.7,66;67.75,-0.7,68;69.75,-0.7,70;71.75,-0.7,72;73.75,-0.7,74;70.25,11.2,μ = 70;72.6,6.75,esclude μ;74.5,-0.7,g" titolo="Ogni segmento orizzontale è l'intervallo di un campione, con la media osservata al centro. Il segmento colorato del sesto campione è l'unico che non contiene $\mu=70$."}
:::

:::attenzione{titolo="Interpretazione di un intervallo osservato"}
Si supponga che un intervallo osservato al $95\,\%$ sia $[8,12]$ e che il parametro della popolazione valga $13$. Gli estremi sono ormai numeri fissati e l'evento $8\leq 13\leq 12$ è falso, quindi ha probabilità $0$. Dopo l'osservazione l'intervallo $[8,12]$ contiene il parametro oppure non lo contiene, perciò l'affermazione «il parametro sta in $[8,12]$ con probabilità $0{,}95$» è sbagliata.

La probabilità $0{,}95$ riguarda gli estremi aleatori $L$ e $U$ prima della raccolta dei dati. Dell'intervallo $[8,12]$ si può affermare che è stato prodotto da una regola che dà un intervallo contenente il parametro nel $95\,\%$ dei campioni.

::grafico{assi=0 xmin=6.8 xmax=14.5 ymin=-0.88 ymax=0.9 linee="7.2,0 14.0,0;8,-0.16 8,0.15;12,-0.16 12,0.15" poligoni="8,-0.13 12,-0.13 12,0.13 8,0.13" punti="13,0" etichette="7.93,-0.42,8;11.87,-0.42,12;12.87,-0.42,13;8.8,0.46,intervallo osservato;12.63,0.46,θ" titolo="Il segmento colorato va da 8 a 12. Il punto θ = 13 rappresenta il parametro fisso e rimane fuori dal segmento."}
:::

:::definizione{#pivot titolo="Quantità pivot e quantili inferiori"}
Nell'esempio delle pesate, con $\sigma=6\,\mathrm{g}$ e $n=36$, si considera la quantità
$$
Z=\frac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}=\frac{\bar X-\mu}{1}.
$$
$Z$ contiene i dati, attraverso $\bar X$, e il parametro ignoto $\mu$. Per il teorema «Media e varianza in un campione normale» del capitolo 8, $Z$ ha legge normale standard qualunque sia $\mu$. La probabilità $P(-1{,}96\leq Z\leq1{,}96)\approx0{,}95$ si calcola quindi senza conoscere $\mu$. Risolvendo le due disuguaglianze rispetto a $\mu$ si ottiene $\bar X-1{,}96\leq\mu\leq\bar X+1{,}96$, che è la regola delle pesate.

Una **quantità pivot** è una funzione del campione e del parametro cercato, come $Z$, la cui legge è nota e non dipende da parametri ignoti.

Le probabilità sul pivot si esprimono con i quantili, definiti nel capitolo 6. Per una legge continua con funzione di ripartizione crescente, il quantile di ordine $p$ è il valore che lascia probabilità $p$ alla propria sinistra. Per la normale standard, per esempio, il quantile di ordine $0{,}975$ è circa $1{,}96$, perché $P(Z\leq1{,}96)\approx0{,}975$. Si indicano con $z_p$, $t_{\nu,p}$ e $\chi^2_{\nu,p}$ i quantili di ordine $p$ rispettivamente della normale standard, della t di Student e della chi quadrato, le tre leggi definite nel capitolo 6. Il simbolo $\nu$, che si legge nu, indica i gradi di libertà delle ultime due leggi. Questi quantili si chiamano **quantili inferiori**, perché $p$ è la probabilità a sinistra.

Un intervallo bilatero ha un estremo da ciascun lato della stima. Per costruirlo a code uguali si prendono i quantili di ordine $\dfrac{\alpha}{2}$ e $1-\dfrac{\alpha}{2}$, che lasciano fuori probabilità $\dfrac{\alpha}{2}$ a sinistra e $\dfrac{\alpha}{2}$ a destra. Al $95\,\%$ si ha $\alpha=0{,}05$, e gli ordini sono $0{,}025$ e $0{,}975$. Il pivot cade fra i due quantili con probabilità $1-\alpha$. Le probabilità si leggono sulla legge del pivot; risolvendo le due disuguaglianze rispetto al parametro si trovano gli estremi dell'intervallo. L'ordine degli estremi dipende dalla forma del pivot. Nell'intervallo per la varianza, per esempio, il quantile più grande dà l'estremo inferiore.
:::

:::osservazione
Un intervallo di confidenza per la media riguarda un numero fisso, la media $\mu$ della popolazione. Un **intervallo di previsione** è invece un intervallo che contiene, con probabilità fissata, una nuova osservazione della popolazione, per esempio la massa del prossimo pezzo pesato. Si costruisce nel capitolo 12, sulla regressione.

Con deviazione standard nota $6\,\mathrm{g}$ e $36$ misure indipendenti, la media campionaria ha deviazione standard $1\,\mathrm{g}$, e l'intervallo per $\mu$ al $95\,\%$ ha semiampiezza $1{,}96\,\mathrm{g}$. Una nuova pesata della stessa popolazione ha invece deviazione standard $6\,\mathrm{g}$. Anche conoscendo esattamente $\mu=70\,\mathrm{g}$, il $95\,\%$ delle nuove pesate cade fra $70-1{,}96\cdot6=58{,}24\,\mathrm{g}$ e $70+1{,}96\cdot6=81{,}76\,\mathrm{g}$, cioè in un intervallo di semiampiezza $11{,}76\,\mathrm{g}$. Gli estremi di previsione sono quindi più lontani dal centro degli estremi di confidenza per la media, perché la variabilità di una singola osservazione resta anche quando $\mu$ è nota.
:::

## Media con deviazione standard nota

::::teorema{#media-nota titolo="Intervallo normale per la media"}
Siano $X_1,\ldots,X_n$ osservazioni indipendenti con legge $N(\mu,\sigma^2)$, dove $n\geq1$ e la deviazione standard $\sigma>0$ è nota. La media campionaria è $\bar X=\dfrac{1}{n}\sum_{i=1}^n X_i$. Posto $z=z_{1-\frac{\alpha}{2}}$, l'intervallo
$$
\left[\bar X-z\frac{\sigma}{\sqrt n},\ \bar X+z\frac{\sigma}{\sqrt n}\right]
$$
ha copertura esatta $1-\alpha$ per $\mu$. La quantità $\dfrac{\sigma}{\sqrt n}$ è l'**errore standard** della media. Il prodotto $z\dfrac{\sigma}{\sqrt n}$ è la **semiampiezza** dell'intervallo, chiamata anche **margine**; la larghezza dell'intervallo è il doppio del margine.

Il teorema si applica quando la deviazione standard della popolazione è nota, per esempio dalle specifiche di uno strumento di misura usato da molto tempo. Quando $\sigma$ è ignota si usa l'intervallo t della sezione successiva.

:::dimostrazione
Per il teorema «Media e varianza in un campione normale» del capitolo 8, la media di osservazioni normali indipendenti ha legge normale con media $\mu$ e varianza $\dfrac{\sigma^2}{n}$. Il pivot $Z=\dfrac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}$ ha quindi legge normale standard. Poiché la normale standard è simmetrica rispetto a $0$, il quantile di ordine $\dfrac{\alpha}{2}$ è $-z$, e
$$
P\!\left(-z\leq\frac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}\leq z\right)=1-\alpha.
$$
Il denominatore $\dfrac{\sigma}{\sqrt n}$ è positivo, quindi moltiplicando le due disuguaglianze per $\dfrac{\sigma}{\sqrt n}$ i versi restano gli stessi e si ottiene
$$
-z\frac{\sigma}{\sqrt n}\leq\bar X-\mu\leq z\frac{\sigma}{\sqrt n}.
$$
Sottraendo $\bar X$ a tutti i membri si ha $-\bar X-z\dfrac{\sigma}{\sqrt n}\leq-\mu\leq-\bar X+z\dfrac{\sigma}{\sqrt n}$. Moltiplicando per $-1$ i versi si invertono, perciò
$$
\bar X-z\frac{\sigma}{\sqrt n}\leq\mu\leq\bar X+z\frac{\sigma}{\sqrt n}.
$$
Questo evento è equivalente a quello sul pivot, quindi ha la stessa probabilità $1-\alpha$. Le altre dimostrazioni del capitolo risolvono le disuguaglianze nello stesso modo.
:::
::::

:::esempio{titolo="Il quantile e le due code"}
Per la confidenza al $95\,\%$ si ha $\alpha=0{,}05$, e ciascuna coda ha area $\dfrac{\alpha}{2}=0{,}025$. Il quantile positivo è $z_{0{,}975}\approx1{,}96$. Con $n=36$, $\bar x=70\,\mathrm{g}$ e $\sigma=6\,\mathrm{g}$, l'errore standard è $\dfrac{6}{\sqrt{36}}=1\,\mathrm{g}$ e il margine è $1{,}96\,\mathrm{g}$, quindi l'intervallo è circa $[68{,}04,71{,}96]\,\mathrm{g}$. Nella figura $\varphi(z)$, che si legge fi di zeta, è la densità della normale standard, indicata con $f_Z$ nel capitolo 6. Il $95\,\%$ centrale della figura riguarda il pivot, che è un numero senza unità di misura. Gli estremi dell'intervallo hanno invece l'unità della media, i grammi.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-1.96;1.96" segmenti="-1.96,0,-1.96,0.05844;1.96,0,1.96,0.05844" etichette="-2.55,0.13,−1,96;2.06,0.108,1,96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.48 nomi="z,y" legenda="\varphi(z)" titolo="L'area colorata è circa il 95%. Restano due code del 2,5% ciascuna."}

:::

:::osservazione
Si considerino osservazioni indipendenti e identicamente distribuite, con varianza finita e nota, da una popolazione non normale. In questo caso la stessa formula ha copertura asintotica $1-\alpha$, cioè la sua probabilità di copertura si avvicina a $1-\alpha$ quando $n$ cresce. Il motivo è il **teorema centrale del limite** del capitolo 8, per cui la legge di $Z$ si avvicina alla normale standard al crescere di $n$. Per un $n$ fissato la copertura non è garantita, e la sua distanza dal livello dipende dalla forma della popolazione. Con una popolazione molto asimmetrica, come quella dei tempi di attesa, o con valori molto lontani dalla media che hanno probabilità non trascurabile, un campione di pochi dati dà una copertura lontana dal livello.
:::

:::esempio{titolo="Effetto della numerosità sul margine"}
Con $\sigma=10\,\mathrm{g}$, $z=1{,}96$ e $n=25$, l'errore standard è $\dfrac{10}{5}=2\,\mathrm{g}$ e la semiampiezza è $1{,}96\cdot2=3{,}92\,\mathrm{g}$. Con $n=100$ l'errore standard è $\dfrac{10}{10}=1\,\mathrm{g}$ e la semiampiezza diventa $1{,}96\,\mathrm{g}$. Quadruplicare $n$ ha dimezzato la semiampiezza, perché ha raddoppiato $\sqrt n$. Due campioni diversi danno medie osservate diverse, quindi i due intervalli hanno centri diversi; la relazione con $\sqrt n$ riguarda soltanto la larghezza, a livello e deviazione standard fissati.

Sullo stesso campione di $25$ dati, invece, il centro resta la media osservata e cambia soltanto il quantile. Passando dal $90\,\%$ al $95\,\%$ il quantile sale da $1{,}645$ a $1{,}96$, la semiampiezza da $1{,}645\cdot2=3{,}29\,\mathrm{g}$ a $3{,}92\,\mathrm{g}$, e l'intervallo si allarga intorno alla stessa media.
:::

## Media con deviazione standard ignota

::::teorema{#student titolo="Intervallo t per la media"}
Quando $\sigma$ è ignota, nel pivot si sostituisce $\sigma$ con una sua stima calcolata dai dati. Si consideri un campione di $n>1$ osservazioni indipendenti e identicamente distribuite secondo una legge normale con varianza positiva ignota. La varianza campionaria corretta è
$$
S^2=\frac{1}{n-1}\sum_{i=1}^{n}(X_i-\bar X)^2,
$$
e la sua radice $S$ stima la deviazione standard della popolazione. Posti $\nu=n-1$ e $q=t_{\nu,1-\frac{\alpha}{2}}$, quantile della t di Student, l'intervallo $\left[\bar X-q\dfrac{S}{\sqrt n},\,\bar X+q\dfrac{S}{\sqrt n}\right]$ ha copertura esatta $1-\alpha$ per $\mu$. La quantità $\dfrac{S}{\sqrt n}$ è l'errore standard stimato della media.

:::dimostrazione
Si scrive la media standardizzata con $S$ al denominatore come rapporto fra due quantità di legge nota. Sotto normalità, $Z=\dfrac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}$ è normale standard. Per il teorema «Statistica t e varianza campionaria» del capitolo 8, $V=\dfrac{(n-1)S^2}{\sigma^2}$ ha legge chi quadrato con $\nu$ gradi di libertà ed è indipendente da $\bar X$, quindi da $Z$. Nel capitolo 6 la legge t di Student con $\nu$ gradi di libertà è definita come la legge di $\dfrac{Z}{\sqrt{\frac{V}{\nu}}}$ con $Z$ e $V$ indipendenti. Semplificando $\sigma$ si ottiene
$$
T=\frac{Z}{\sqrt{\frac{V}{\nu}}}
 =\frac{\bar X-\mu}{\frac{S}{\sqrt n}},
$$
che ha quindi legge t di Student con $\nu$ gradi di libertà e non contiene $\sigma$. Per la simmetria della legge t, $P(-q\leq T\leq q)=1-\alpha$. Le disuguaglianze si risolvono rispetto a $\mu$ come nella dimostrazione dell'intervallo normale, con $S$ al posto di $\sigma$ e $q$ al posto di $z$. Il caso $S=0$ ha probabilità nulla sotto il modello normale con varianza positiva.
:::
::::

:::esempio{titolo="Effetto della stima della variabilità"}
Un campione normale di $9$ tempi di lavorazione ha media $\bar x=18\,\mathrm{min}$ e deviazione standard campionaria corretta $s=3\,\mathrm{min}$. L'errore standard stimato vale $\dfrac{3}{\sqrt9}=1\,\mathrm{min}$ e $\nu=9-1=8$. Al $95\,\%$, $t_{8,0{,}975}\approx2{,}306$, quindi il margine è $2{,}306\,\mathrm{min}$ e l'intervallo è circa $[15{,}694,20{,}306]\,\mathrm{min}$. Con lo stesso errore standard, il quantile normale $1{,}96$ darebbe l'intervallo più stretto $[16{,}04,19{,}96]\,\mathrm{min}$. Il quantile t è più grande perché tiene conto della variabilità aggiunta dalla stima di $\sigma$ con $s$.

::grafico{f="0.38669*(1+x*x/8)^(-4.5);exp(-x*x/2)/sqrt(2*PI)" area="0.38669*(1+x*x/8)^(-4.5);0;-2.306;2.306" segmenti="-2.306,0,-2.306,0.039;2.306,0,2.306,0.039;-1.96,0,-1.96,0.0584;1.96,0,1.96,0.0584" etichette="2.38,0.085,2,306;0.95,0.03,1,96" xmin=-4 xmax=4 ymin=-0.04 ymax=0.46 nomi="t,y" legenda="f_{t_8}(t);\varphi(t)" titolo="L'area colorata sotto la densità t con $8$ gradi di libertà vale $0{,}95$ ed è compresa fra $-2{,}306$ e $2{,}306$. La densità normale standard, tratteggiata, ha code più sottili e racchiude il $95\,\%$ fra $-1{,}96$ e $1{,}96$."}
:::

:::osservazione
Gli $n$ scarti $X_i-\bar X$ dalla media campionaria hanno somma zero, quindi, noti $n-1$ scarti, l'ultimo è determinato. Con $n=3$, per esempio, se i primi due scarti sono $-2$ e $1$, il terzo è $1$. Nella somma dei quadrati degli scarti restano perciò $n-1$ valori liberi, e i gradi di libertà sono $n-1$.

Al crescere di $\nu$ i quantili della t si avvicinano a quelli della normale standard. Per esempio $t_{8,0{,}975}\approx2{,}306$, $t_{30,0{,}975}\approx2{,}042$ e $z_{0{,}975}\approx1{,}96$.

Se la popolazione non è normale, la legge t esatta del pivot non vale più. Con osservazioni indipendenti e identicamente distribuite e varianza finita e positiva, però, $S$ si avvicina a $\sigma$ al crescere di $n$, e la legge della media standardizzata con $S$ si avvicina alla normale standard. La formula t dà allora una procedura approssimata, con copertura vicina al livello per $n$ grande.
:::

:::osservazione
La lettera $s$ indica il valore osservato di $S$. Se si conosce soltanto la somma degli scarti quadratici, si ottiene $s$ dividendo prima la somma per $n-1$ e poi prendendo la radice. Per esempio, per $n=10$ e somma $90\,\mathrm{mm}^2$ si ha $s^2=\dfrac{90}{9}=10\,\mathrm{mm}^2$ e $s=\sqrt{10}\,\mathrm{mm}$. L'errore standard stimato è quindi $\dfrac{\sqrt{10}}{\sqrt{10}}=1\,\mathrm{mm}$. Nel conto compaiono due divisori diversi. Il divisore $n-1=9$ serve a stimare la varianza della popolazione, mentre la divisione per $\sqrt n=\sqrt{10}$ passa dalla deviazione standard di una singola osservazione a quella della media di $n$ osservazioni.
:::

## Proporzioni binomiali

:::definizione{#proporzione titolo="Intervallo di Wald e controllo dei conteggi"}
Si intervistano $200$ studenti e $64$ dichiarano di usare l'autobus. Ogni intervista è una prova di Bernoulli, come nel capitolo 5, con successo «usa l'autobus». Nel caso generale si considerano $n$ prove di Bernoulli indipendenti, tutte con probabilità di successo $p$. Il numero casuale di successi $K$ ha legge binomiale, e la proporzione campionaria è $\widehat p=\dfrac{K}{n}$, che si legge p cappuccio. Nell'esempio $\widehat p=\dfrac{64}{200}=0{,}32$.

Per il capitolo 8 l'errore standard di $\widehat p$ è $\sqrt{\dfrac{p(1-p)}{n}}$, che contiene il valore ignoto $p$. La procedura di **Wald** stima l'errore standard sostituendo $p$ con $\widehat p$ e, con $z=z_{1-\frac{\alpha}{2}}$, usa l'intervallo
$$
\widehat p\ \pm\ z\sqrt{\frac{\widehat p(1-\widehat p)}{n}}.
$$
Nell'esempio l'errore standard stimato è $\sqrt{\dfrac{0{,}32\cdot0{,}68}{200}}\approx0{,}0330$ e al $95\,\%$ il margine è circa $1{,}96\cdot0{,}0330\approx0{,}0647$, quindi l'intervallo è circa $[0{,}255,0{,}385]$.

La copertura di Wald è approssimata, perché si basa sull'approssimazione normale della binomiale vista nel capitolo 8. I conteggi osservati di successi e insuccessi servono a valutare se l'approssimazione è plausibile. La regola pratica chiede almeno dieci successi e almeno dieci insuccessi, e non dà nessuna garanzia esatta sulla copertura. Nell'esempio i successi sono $64$ e gli insuccessi $136$, quindi la regola è soddisfatta.
:::

:::attenzione{titolo="Campioni con tutti esiti uguali"}
Su $12$ prove si possono osservare zero successi anche se la probabilità di successo è $0{,}10$; questo accade con probabilità $0{,}9^{12}\approx0{,}28$. Con questi dati Wald ha centro $\widehat p=0$ e semiampiezza $z\sqrt{\dfrac{0\cdot1}{12}}=0$, quindi produce $[0,0]$. La variabilità stimata nulla deriva soltanto dal valore osservato $\widehat p=0$. Sotto il modello binomiale con $p=0{,}10$ la variabilità è invece positiva, e l'intervallo $[0,0]$ esclude il valore vero $0{,}10$.
:::

::::teorema{#wilson titolo="Intervallo di Wilson"}
Wald calcola l'errore standard con $\widehat p$, e con $\widehat p=0$ lo trova nullo. L'intervallo di **Wilson** calcola invece l'errore standard con ciascun valore di $p$ che si sta valutando, e contiene i valori $p\in[0,1]$ per cui
$$
\left|\widehat p-p\right|\leq z\sqrt{\frac{p(1-p)}{n}}.
$$
Per lo stesso modello di Wald, questi valori formano l'intervallo di estremi $c-h$ e $c+h$, dove
$$
\begin{aligned}
c&=\frac{\widehat p+\frac{z^2}{2n}}{1+\frac{z^2}{n}},\\[6pt]
h&=\frac{z}{1+\frac{z^2}{n}}
\sqrt{\frac{\widehat p(1-\widehat p)}{n}+\frac{z^2}{4n^2}}.
\end{aligned}
$$
Moltiplicando numeratore e denominatore per $n$, la semiampiezza si scrive anche $h=\dfrac{z}{n+z^2}\sqrt{n\widehat p(1-\widehat p)+\dfrac{z^2}{4}}$ e il centro $c=\dfrac{n\widehat p+z^2\cdot\frac12}{n+z^2}$. Il centro è quindi la media ponderata della proporzione osservata e di $\dfrac12$, con pesi $n$ e $z^2$, e sta fra $\widehat p$ e $\dfrac12$. La copertura resta approssimata.

:::dimostrazione
L'idea è tenere i valori di $p$ dai quali la proporzione osservata dista al più $z$ errori standard, con l'errore standard calcolato con quello stesso $p$. I due membri della condizione $|\widehat p-p|\leq z\sqrt{\dfrac{p(1-p)}{n}}$ sono non negativi, quindi elevando al quadrato si ottiene una condizione equivalente. Moltiplicando poi per $n>0$ si ricava
$$
n(\widehat p-p)^2\leq z^2p(1-p).
$$
Sviluppando i due membri e raccogliendo le potenze di $p$ si ottiene
$$
(n+z^2)p^2-(2n\widehat p+z^2)p+n\widehat p^2\leq0.
$$
Il coefficiente di $p^2$ è $n+z^2>0$, quindi la disequazione è verificata fra le due radici del polinomio. La media delle radici è $\dfrac{2n\widehat p+z^2}{2(n+z^2)}$, che dividendo numeratore e denominatore per $n$ coincide con $c$. Il discriminante è $(2n\widehat p+z^2)^2-4(n+z^2)n\widehat p^2=z^4+4nz^2\widehat p(1-\widehat p)$, perciò la semidifferenza delle radici è
$$
\frac{z\sqrt{z^2+4n\widehat p(1-\widehat p)}}{2(n+z^2)}
=\frac{z}{n+z^2}\sqrt{n\widehat p(1-\widehat p)+\frac{z^2}{4}},
$$
che è $h$. La disequazione di secondo grado ha senso anche per $p=0$ e $p=1$, quindi l'insieme delle sue soluzioni dà l'intervallo anche agli estremi.
:::
::::

:::esempio{titolo="Limite superiore con zero successi"}
Con $n=12$ e $\widehat p=0$, la disequazione di Wilson diventa $(12+z^2)p^2-z^2p\leq0$, cioè $p\big((12+z^2)p-z^2\big)\leq0$. Le radici sono $0$ e $\dfrac{z^2}{12+z^2}$; con $z=1{,}96$ la seconda vale $\dfrac{3{,}8416}{15{,}8416}\approx0{,}2425$. L'intervallo bilatero di Wilson al $95\,\%$ è perciò circa $[0,0{,}2425]$, mentre Wald dava $[0,0]$.

L'**intervallo binomiale esatto** a code uguali usa direttamente la legge binomiale di $K$, senza approssimazione normale. Dati $k$ successi osservati, l'estremo superiore è il valore di $p$ per cui $P_p(K\leq k)=\dfrac{\alpha}{2}$, e l'estremo inferiore è il valore di $p$ per cui $P_p(K\geq k)=\dfrac{\alpha}{2}$; con $k=0$ l'estremo inferiore è $0$. Con zero successi su $12$ prove l'estremo superiore risolve $(1-p)^{12}=0{,}025$, quindi vale $1-0{,}025^{\frac{1}{12}}\approx0{,}2646$, e l'intervallo esatto $[0,0{,}2646]$ è più largo di quello di Wilson. La discretezza di $K$, cioè il fatto che $K$ assume soltanto valori interi, impedisce di ottenere una copertura uguale a $0{,}95$ per ogni $p$. La costruzione esatta garantisce perciò una copertura almeno pari al livello dichiarato, e per molti valori di $p$ la copertura è maggiore.

::grafico{f="15.8416*x^2-3.8416*x" area="0;15.8416*x^2-3.8416*x;0;0.2425" punti="0,0;0.2425,0" etichette="0.25,-0.09,0,2425" xmin=-0.04 xmax=0.36 ymin=-0.3 ymax=0.6 nomi="p,y" legenda="(12+z^2)p^2-z^2p" titolo="Con $z=1{,}96$ il polinomio $(12+z^2)p^2-z^2p$ è minore o uguale a zero fra le radici $0$ e $0{,}2425$ circa. I valori di $p$ della regione colorata formano l'intervallo di Wilson."}
:::

:::osservazione
L'intervallo di Wald può contenere numeri negativi o maggiori di uno. Con $n=50$ e $2$ successi, per esempio, $\widehat p=0{,}04$ e Wald al $95\,\%$ dà circa $[-0{,}014,0{,}094]$. L'intersezione con $[0,1]$ porta a $[0,0{,}094]$ ed elimina i valori inammissibili. La copertura resta la stessa per ogni $p$ ammesso, perché per un valore fissato $p\in[0,1]$ appartenere all'intervallo originario equivale ad appartenere alla sua intersezione con $[0,1]$. Per lo stesso motivo resta anche un eventuale difetto di copertura. Qui i successi sono $2$, molto meno dei dieci della regola pratica, quindi il difetto si corregge soltanto cambiando costruzione. Con gli stessi dati Wilson dà circa $[0{,}011,0{,}135]$, già tutto contenuto in $[0,1]$.
:::

## Varianza di una popolazione normale

::::teorema{#varianza titolo="Intervallo chi quadrato per la varianza"}
Per un campione di $n>1$ osservazioni indipendenti e identicamente distribuite con legge normale e varianza positiva, si indichino con $a=\chi^2_{n-1,\frac{\alpha}{2}}$ e $b=\chi^2_{n-1,1-\frac{\alpha}{2}}$ i quantili inferiori della chi quadrato con $n-1$ gradi di libertà. L'intervallo
$$
\left[\frac{(n-1)S^2}{b},\ \frac{(n-1)S^2}{a}\right]
$$
ha copertura esatta $1-\alpha$ per $\sigma^2$. La legge chi quadrato assume solo valori positivi, quindi i due quantili sono positivi e le divisioni sono possibili. L'intervallo per $\sigma$ si ottiene prendendo la radice quadrata dei due estremi, perché la funzione radice è crescente e conserva l'ordine.

:::dimostrazione
La varianza campionaria $S^2$ cambia da un campione all'altro. Per il teorema «Statistica t e varianza campionaria» del capitolo 8, sotto normalità $Q=\dfrac{(n-1)S^2}{\sigma^2}$ ha legge chi quadrato con $n-1$ gradi di libertà, che non dipende da $\sigma$; $Q$ è quindi un pivot. Perciò $P(a\leq Q\leq b)=1-\alpha$. Scrivendo $D=(n-1)S^2$ e moltiplicando per $\sigma^2>0$, le due disuguaglianze sono $a\sigma^2\leq D$ e $D\leq b\sigma^2$. Dividendo per $a>0$, la prima equivale a $\sigma^2\leq\dfrac{D}{a}$; dividendo per $b>0$, la seconda equivale a $\sigma^2\geq\dfrac{D}{b}$. Il quantile maggiore $b$ compare dunque al denominatore dell'estremo inferiore, perché dividendo $D$ per un numero più grande si ottiene un numero più piccolo.
:::
::::

:::esempio{titolo="L'ordine dei quantili"}
Con $n=7$, $s^2=4\,\mathrm{mm}^2$ e confidenza al $90\,\%$, si ha $D=(7-1)\cdot4=24\,\mathrm{mm}^2$ e $\alpha=0{,}10$. I quantili inferiori della chi quadrato a $6$ gradi di libertà sono $\chi^2_{6,0{,}05}\approx1{,}635$ e $\chi^2_{6,0{,}95}\approx12{,}592$. Usando i quantili arrotondati, l'intervallo per la varianza è circa $\left[\dfrac{24}{12{,}592},\dfrac{24}{1{,}635}\right]\approx[1{,}906,14{,}679]\,\mathrm{mm}^2$. Per la deviazione standard si prendono le radici e si ottiene circa $[1{,}38,3{,}83]\,\mathrm{mm}$. La stima $s^2=4$ non sta al centro dell'intervallo, perché la regione centrale della chi quadrato è asimmetrica, come mostra la figura.

::grafico{f="x^2*exp(-x/2)/16" area="x^2*exp(-x/2)/16;0;1.635;12.592" segmenti="1.635,0,1.635,0.0738;12.592,0,12.592,0.0183" etichette="0.47,0.112,1,635;11.65,0.043,12,592" xmin=0 xmax=18 ymin=-0.012 ymax=0.17 nomi="q,y" legenda="f_{\chi^2_6}(q)" titolo="L'area colorata è circa il 90% per la chi quadrato con sei gradi di libertà."}

:::

:::osservazione
L'intervallo chi quadrato usa la legge esatta della varianza campionaria di osservazioni normali. Il teorema centrale del limite riguarda la legge della media campionaria e non dice nulla sulla legge di $\dfrac{(n-1)S^2}{\sigma^2}$. La variabilità di $S^2$ dipende dalla forma della popolazione, in particolare da quanto sono probabili i valori lontani dalla media. Se questi valori sono più probabili che nella normale, la copertura dell'intervallo chi quadrato resta sotto il livello anche per $n$ grande. Al crescere di $n$, infatti, la copertura si avvicina a un valore minore di $1-\alpha$.
:::

:::esempio{titolo="Cambio di unità nella misura della dispersione"}
Un intervallo per la varianza espresso in $\mathrm{cm}^2$ ha estremi $0{,}04$ e $0{,}25$. Uno scarto di $1\,\mathrm{cm}$ vale $10\,\mathrm{mm}$, quindi il suo quadrato passa da $1\,\mathrm{cm}^2$ a $100\,\mathrm{mm}^2$. Per esprimere l'intervallo in $\mathrm{mm}^2$ si moltiplicano perciò entrambi gli estremi per $100$, e si ottiene $[4,25]\,\mathrm{mm}^2$. L'intervallo per la deviazione standard è quindi $[2,5]\,\mathrm{mm}$. I gradi di libertà e i quantili della chi quadrato restano invariati al cambio di unità.
:::

## Differenza fra due medie indipendenti

:::teorema{#due-medie titolo="Confronto con varianze note"}
Si osservano due campioni indipendenti di numerosità $n_X$ e $n_Y$, da popolazioni normali con medie $\mu_X,\mu_Y$ e varianze positive note $\sigma_X^2,\sigma_Y^2$. La differenza campionaria $\bar X-\bar Y$ stima $\mu_X-\mu_Y$. Per il capitolo 8, $\bar X$ ha varianza $\dfrac{\sigma_X^2}{n_X}$ e $\bar Y$ ha varianza $\dfrac{\sigma_Y^2}{n_Y}$; queste due quantità sono i **contributi** dei due gruppi alla varianza della differenza. Le due medie sono indipendenti, quindi la loro covarianza è zero e, per le proprietà della varianza del capitolo 7, la varianza della differenza è la somma dei contributi. L'errore standard della differenza è
$$
e=\sqrt{\frac{\sigma_X^2}{n_X}+\frac{\sigma_Y^2}{n_Y}}.
$$
La differenza di due normali indipendenti è normale. Standardizzando come per una sola media si ricava l'intervallo esatto $[\bar X-\bar Y-ze,\,\bar X-\bar Y+ze]$, dove $z=z_{1-\frac{\alpha}{2}}$.

Per esempio, con $\sigma_X^2=20$, $n_X=5$, $\sigma_Y^2=9$ e $n_Y=9$ i contributi sono $\dfrac{20}{5}=4$ e $\dfrac99=1$, quindi $e=\sqrt5\approx2{,}236$. Se si scambia l'ordine dei gruppi, cioè si stima $\mu_Y-\mu_X$, gli estremi cambiano segno e si scambiano di posto; l'intervallo $[1,5]$, per esempio, diventa $[-5,-1]$.
:::

:::definizione{#welch titolo="Intervallo di Welch"}
Quando le due varianze sono ignote, per campioni indipendenti da popolazioni normali si usa l'**intervallo di Welch**, che ammette varianze diverse nelle due popolazioni. Siano $n_X,n_Y>1$ e $S_X^2,S_Y^2$ le varianze campionarie corrette. Indicati con $v_X=\dfrac{S_X^2}{n_X}$ e $v_Y=\dfrac{S_Y^2}{n_Y}$ i contributi stimati alla varianza della differenza, si usano
$$
\begin{aligned}
e_W&=\sqrt{v_X+v_Y},\\[6pt]
\nu_W&=\frac{(v_X+v_Y)^2}{
\frac{v_X^2}{n_X-1}+\frac{v_Y^2}{n_Y-1}}.
\end{aligned}
$$
La differenza $\bar X-\bar Y$ è il centro e $t_{\nu_W,1-\frac{\alpha}{2}}e_W$ è la semiampiezza. La legge t con $\nu_W$ gradi di libertà approssima la legge del pivot, quindi la copertura è approssimata. Il numero $\nu_W$ di solito non è intero, mentre le tavole riportano soltanto gradi di libertà interi. Il quantile t diminuisce al crescere dei gradi di libertà, perciò si usa l'intero inferiore, che dà un quantile almeno grande quanto quello con $\nu_W$ e quindi un intervallo non più stretto. Con $\nu_W=18{,}4$, per esempio, si usa $\nu=18$, con $t_{18,0{,}975}\approx2{,}101$, al posto di $t_{19,0{,}975}\approx2{,}093$.
:::

:::esempio{titolo="Due contributi uguali alla varianza"}
Due campioni indipendenti di numerosità $10$ hanno varianze corrette $40$ e $40$. Ciascun contributo è la varianza campionaria divisa per la numerosità, quindi $v_X=v_Y=\dfrac{40}{10}=4$ e l'errore standard è $\sqrt{4+4}=\sqrt8$. La formula di Welch dà $\nu_W=\dfrac{(4+4)^2}{\frac{16}{9}+\frac{16}{9}}=\dfrac{64}{\frac{32}{9}}=18$. Se la differenza osservata vale $6$ e il quantile $t_{18,0{,}975}$ vale circa $2{,}101$, il margine è circa $2{,}101\cdot\sqrt8\approx5{,}943$. L'intervallo è quindi circa $[0{,}057,11{,}943]$.
:::

:::osservazione
Si considerino campioni indipendenti da popolazioni normali con la stessa varianza positiva ignota, e $n_X,n_Y>1$. In questo caso si sommano i quadrati degli scarti dei due gruppi, e la **varianza combinata** è la somma divisa per i gradi di libertà complessivi $n_X+n_Y-2$:
$$
S_C^2=\frac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{n_X+n_Y-2}.
$$
Per esempio, due gruppi di numerosità $5$ e $7$ con varianze campionarie $4$ e $9$ hanno varianza combinata $\dfrac{4\cdot4+6\cdot9}{10}=7$. L'errore standard stimato della differenza è $S_C\sqrt{\dfrac1{n_X}+\dfrac1{n_Y}}$, e il pivot della differenza ha legge t con $n_X+n_Y-2$ gradi di libertà. La legge è esatta perché, sotto normalità e con varianza comune $\sigma^2$, la quantità $\dfrac{(n_X-1)S_X^2+(n_Y-1)S_Y^2}{\sigma^2}$ è la somma di due chi quadrato indipendenti, con $n_X-1$ e $n_Y-1$ gradi di libertà, quindi ha legge chi quadrato con $n_X+n_Y-2$ gradi di libertà, ed è indipendente dalle due medie. Quando le varianze delle popolazioni possono essere diverse si usa invece Welch.
:::

:::osservazione
A parità di livello, quando si possono modificare le numerosità dei due gruppi, l'errore standard diminuisce di più se si aumenta il gruppo con il contributo più grande. Si considerino i contributi noti $4$ e $1$ dell'esempio del confronto con varianze note, con errore standard $\sqrt5\approx2{,}236$. Quadruplicando il primo campione, il primo contributo diventa $\dfrac44=1$ e la somma scende da $5$ a $2$, quindi l'errore standard diventa $\sqrt2\approx1{,}414$. Quadruplicando il secondo, il secondo contributo diventa $\dfrac14=0{,}25$ e la somma scende da $5$ a $4{,}25$, quindi l'errore standard diventa $\sqrt{4{,}25}\approx2{,}062$. Il confronto si fa sulla somma delle varianze e poi sulla sua radice. La sola numerosità del gruppo non basta a individuare il contributo più grande, perché al numeratore di ciascun contributo compare anche la varianza.
:::

## Differenze appaiate

:::teorema{#appaiate titolo="Intervallo t sulle differenze"}
Quando sulle stesse unità si misura due volte, per esempio prima e dopo una regolazione, le due misure di un'unità non sono indipendenti. Siano $(X_i,Y_i)$ coppie indipendenti fra loro e sia $D_i=X_i-Y_i$ la differenza nella coppia $i$. Se le $n>1$ differenze sono identicamente distribuite secondo una legge normale con varianza positiva, l'intervallo esatto per la media delle differenze è
$$
\left[\bar D-t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n},
\ \bar D+t_{n-1,1-\frac{\alpha}{2}}\frac{S_D}{\sqrt n}\right].
$$
Qui $\bar D$ è la media campionaria delle differenze e $S_D$ la loro deviazione standard corretta. Il risultato è l'intervallo t per la media applicato al campione delle differenze, perché le unità analizzate sono le $n$ differenze, una per coppia.
:::

:::esempio{titolo="Confronto prima e dopo"}
In un impianto si rilevano, sugli stessi quattro pezzi, le misure prima e dopo una regolazione. Le differenze dopo meno prima sono $1$, $2$, $3$ e $2\,\mathrm{mm}$. La media è $2\,\mathrm{mm}$, gli scarti dalla media sono $-1$, $0$, $1$ e $0\,\mathrm{mm}$, e la somma dei loro quadrati è $2\,\mathrm{mm}^2$. Quindi $s_D=\sqrt{\dfrac23}\,\mathrm{mm}$ e l'errore standard è $\dfrac{s_D}{\sqrt4}=\sqrt{\dfrac16}\,\mathrm{mm}\approx0{,}408\,\mathrm{mm}$. Assumendo la normalità delle differenze e usando $t_{3,0{,}975}\approx3{,}182$, il margine è circa $1{,}299\,\mathrm{mm}$ e l'intervallo è circa $[0{,}701,3{,}299]\,\mathrm{mm}$. Il numero di unità indipendenti è quattro, perché ciascun pezzo contribuisce con una sola differenza.
:::

:::osservazione
Due misure della stessa unità hanno di solito una covarianza positiva, perché un pezzo più spesso degli altri prima della regolazione resta più spesso anche dopo. La varianza della differenza è
$$
\operatorname{Var}(X-Y)=\operatorname{Var}(X)+\operatorname{Var}(Y)-2\operatorname{Cov}(X,Y).
$$
Con $\operatorname{Var}(X)=25$, $\operatorname{Var}(Y)=16$ e $\operatorname{Cov}(X,Y)=18$, per esempio, si ottiene $25+16-36=5$, mentre trascurando la covarianza si otterrebbe $41$. Il modello per campioni indipendenti pone a zero l'ultimo termine. Con l'appaiamento, l'errore standard calcolato sulle differenze contiene già la covarianza fra le misure della stessa unità.
:::

:::attenzione{titolo="Controllo dell'abbinamento"}
Su tre strumenti, le letture prima sono $10$, $13$ e $16$, mentre le letture dopo, nello stesso ordine, sono $12$, $14$ e $19$. Le differenze osservate sono $2$, $1$ e $3$. Se si scambiano le ultime due letture dopo, si ottengono invece $2$, $6$ e $-2$. La media delle differenze resta $2$ in entrambi i casi, perché le due somme delle letture restano uguali. Cambia però la dispersione delle differenze. Nel primo caso $s_D=1$, nel secondo gli scarti sono $0$, $4$ e $-4$, quindi $s_D^2=\dfrac{32}{2}=16$ e $s_D=4$. Con $t_{2,0{,}975}\approx4{,}303$ il margine dell'intervallo appaiato passa da circa $2{,}48$ a circa $9{,}94$.
:::

## Numerosità e limiti unilateri

:::definizione{#numerosita titolo="Numerosità per un margine assegnato"}
Prima di raccogliere i dati si sceglie il margine massimo accettato $E>0$ e si cerca il numero di osservazioni necessario. Con deviazione standard nota, la semiampiezza dell'intervallo bilatero per la media è $z\dfrac{\sigma}{\sqrt n}$, quindi si risolve $z\dfrac{\sigma}{\sqrt n}\leq E$ rispetto a $n$. La numerosità minima è
$$
n_{\min}=\left\lceil\left(\frac{z\sigma}{E}\right)^2\right\rceil,
$$
dove $\lceil\cdot\rceil$ indica l'arrotondamento all'intero superiore.

Per una proporzione con il margine di Wald si usa $n\geq\dfrac{z^2p_*(1-p_*)}{E^2}$. Il valore $p_*$, che si legge p asterisco, è la proporzione scelta in fase di progetto, per esempio la proporzione osservata in uno studio pilota, cioè in un piccolo campione preliminare. Senza dati preliminari si prende $p_*=\dfrac12$, perché $\dfrac12$ rende massimo il prodotto $p_*(1-p_*)$ e dà quindi il margine più grande; la numerosità ottenuta rispetta il margine $E$ qualunque sia la proporzione vera. Con $z=1{,}96$, $E=0{,}03$ e $p_*=\dfrac12$ si ottiene $n\geq\dfrac{1{,}96^2\cdot0{,}25}{0{,}03^2}\approx1067{,}1$, quindi servono $1068$ intervistati. Il calcolo fissa la larghezza dell'intervallo di Wald; la probabilità di copertura resta quella approssimata di Wald.

::grafico{f="x*(1-x)" punti="0.5,0.25" segmenti="0.5,0,0.5,0.25;0,0.25,0.5,0.25" etichette="0.56,0.272,massimo 0,25;0.44,-0.022,0,5" xmin=-0.12 xmax=1.18 ymin=-0.04 ymax=0.31 nomi="p*,y" legenda="p_*(1-p_*)" titolo="Il prodotto $p_*(1-p_*)$ si annulla in $0$ e in $1$ e raggiunge il valore massimo $\dfrac14$ in $p_*=\dfrac12$."}
:::

:::esempio{titolo="Il controllo dopo l'arrotondamento"}
Per $z=1{,}96$, $\sigma=5\,\mathrm{g}$ e $E=1{,}4\,\mathrm{g}$ si ha $\left(\dfrac{1{,}96\cdot5}{1{,}4}\right)^2=7^2=49$. Il margine a $n=49$ è $\dfrac{9{,}8}{7}=1{,}4\,\mathrm{g}$, esattamente il massimo assegnato. Con $48$ misure, $\sqrt{48}<7$, quindi il margine $\dfrac{9{,}8}{\sqrt{48}}$ supera il massimo.

Quando il valore teorico cade fra due interi si arrotonda all'intero superiore. Con $E=1{,}5\,\mathrm{g}$, per esempio, $\left(\dfrac{9{,}8}{1{,}5}\right)^2\approx42{,}68$, e si prende $n=43$. Il margine con $43$ misure è $\dfrac{9{,}8}{\sqrt{43}}\approx1{,}494\,\mathrm{g}$, sotto il massimo, mentre con $42$ misure sarebbe circa $1{,}512\,\mathrm{g}$, sopra il massimo.

::grafico{assi=0 xmin=5.3 xmax=93 ymin=-0.4 ymax=4.4 unicolore=1 f="9.8/sqrt(x)" legenda="h=\dfrac{9{,}8}{\sqrt{n}}" vettori="5.7,0,91,0;5.7,0,5.7,4.28" segmenti="5.7,1.4,49,1.4;49,0,49,1.4" punti="49,1.4" etichette="47,-0.24,49;88,-0.24,n;7,4.19,h;13,1.57,E = 1,4" titolo="La curva continua rappresenta il margine. La soglia si raggiunge a 49 misure e resta rispettata per numerosità intere superiori."}
:::

::::teorema{#unilateri titolo="Limite inferiore e limite superiore"}
In alcuni problemi interessa un solo lato, per esempio garantire che la media superi un valore minimo. Nello stesso modello normale per la media con $\sigma$ nota, il **limite superiore** unilatero di livello $1-\alpha$ è $U=\bar X+z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, con insieme di confidenza $(-\infty,U]$. Il **limite inferiore** è $L=\bar X-z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$, con insieme di confidenza $[L,+\infty)$. Un insieme di confidenza è un insieme di valori del parametro costruito come un intervallo di confidenza; qui è una semiretta. Il quantile ha ordine $1-\alpha$, perché tutta la probabilità $\alpha$ di esclusione sta da un solo lato. Per campioni normali con varianza ignota si usano $S$ al posto di $\sigma$ e il quantile t di ordine $1-\alpha$.

:::dimostrazione
Si considera il limite superiore. Dividendo per $\dfrac{\sigma}{\sqrt n}>0$, l'evento $\mu\leq\bar X+z_{1-\alpha}\dfrac{\sigma}{\sqrt n}$ equivale a $\dfrac{\bar X-\mu}{\frac{\sigma}{\sqrt n}}\geq-z_{1-\alpha}$, cioè a $Z\geq-z_{1-\alpha}$ per il pivot normale standard. Per la simmetria della normale standard, $P(Z\geq-z_{1-\alpha})=P(Z\leq z_{1-\alpha})=1-\alpha$. Per il limite inferiore l'evento $\mu\geq L$ equivale allo stesso modo a $Z\leq z_{1-\alpha}$, che ha probabilità $1-\alpha$.
:::
::::

:::esempio{titolo="Confronto con una soglia minima"}
Un servizio richiede che la media di una popolazione normale superi la soglia $48$. Con $\bar x=52$, errore standard $2$ e $z_{0{,}95}\approx1{,}645$, il limite inferiore al $95\,\%$ è $52-1{,}645\cdot2\approx48{,}71$. L'insieme di confidenza $[48{,}71,+\infty)$ contiene quindi soltanto valori maggiori di $48$, e al livello del $95\,\%$ si conclude che la media **supera la soglia**. Nel capitolo 11, sui test di ipotesi, lo stesso confronto diventa un test unilatero sulla media, costruito con lo stesso pivot.

::grafico{f="exp(-x*x/2)/sqrt(2*PI)" area="exp(-x*x/2)/sqrt(2*PI);0;-4;1.645" segmenti="1.645,0,1.645,0.1031" etichette="1.72,0.14,1,645;-0.9,0.17,0,95" xmin=-4 xmax=4 ymin=-0.04 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="Per il limite inferiore l'evento $\mu\geq L$ equivale a $Z\leq1{,}645$. L'area colorata vale $0{,}95$ e il $5\,\%$ escluso sta tutto nella coda destra del pivot."}
:::

:::osservazione
Si calcolano, sullo stesso campione normale con deviazione standard nota, un limite inferiore e un limite superiore, ciascuno al $95\,\%$. Con i dati dell'esempio della soglia si ottengono $L\approx48{,}71$ e $U=52+1{,}645\cdot2\approx55{,}29$. Le due affermazioni $\mu\geq L$ e $\mu\leq U$ valgono insieme quando il pivot sta fra $-z_{0{,}95}$ e $z_{0{,}95}$. L'area centrale fra questi due quantili è il $90\,\%$, perché si esclude il $5\,\%$ da ciascun lato, quindi $[48{,}71,55{,}29]$ è un intervallo bilatero al $90\,\%$. Per un intervallo bilatero al $95\,\%$ si usa invece $z_{0{,}975}\approx1{,}96$.
:::
