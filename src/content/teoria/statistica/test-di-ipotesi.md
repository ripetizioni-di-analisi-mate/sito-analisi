---
titolo: "Test di ipotesi, potenza e chi quadrato"
sommario: "Dalle ipotesi alla decisione statistica, con potenza, test per medie, proporzioni e varianze, e analisi dei conteggi."
---

Un'azienda dichiara che i suoi componenti durano in media almeno $100$ ore. Su $16$ componenti provati la durata media risulta $96$ ore, con deviazione standard campionaria $8$ ore. La differenza di $4$ ore può indicare che la dichiarazione è falsa, ma può anche dipendere soltanto dai componenti capitati nel campione, perché un altro campione darebbe un'altra media. Un test di ipotesi è una regola, fissata prima di guardare i dati, che decide se i dati contraddicono la dichiarazione. La regola si costruisce in modo che la probabilità di respingere una dichiarazione vera sia piccola, per esempio $0{,}05$. Con questi dati la dichiarazione viene respinta, come si calcola nella sezione sul test per una media.

In questo capitolo si calcolano la soglia della regola, per esempio «si respinge la dichiarazione se la media campionaria è al più $96{,}49$ ore», le probabilità che la regola sbagli e il valore p, cioè la probabilità di un risultato almeno così lontano dalla dichiarazione quando questa è vera. Le regole riguardano una media, una proporzione, come la quota di pezzi difettosi, il confronto di due gruppi, una varianza e le tabelle di conteggi.

Il capitolo fa parte dell'inferenza statistica (capitoli 8-12). Usa la distribuzione della media campionaria del capitolo 8, le leggi normale, chi quadrato e t di Student del capitolo 6 e le statistiche degli intervalli di confidenza del capitolo 10; l'ultima sezione mostra che un intervallo di confidenza è l'insieme dei valori che un test non respinge. Nel capitolo 12 lo stesso procedimento decide se la pendenza di una retta di regressione è diversa da zero.

## Ipotesi e regola di decisione

:::definizione{#ipotesi titolo="Ipotesi nulla e alternativa"}

Un'azienda dichiara che la durata media dei suoi componenti è $500$ ore. La durata media di tutti i componenti prodotti è un parametro, indicato con $\mu$ (si legge mu), e la dichiarazione afferma che $\mu=500$. Prima di raccogliere i dati si scrivono due affermazioni sul parametro che si escludono a vicenda. L'**ipotesi nulla** $H_0$ è l'affermazione messa alla prova, qui $H_0:\mu=500$. L'**ipotesi alternativa** $H_1$ raccoglie i valori che interessano alla domanda di ricerca, qui $H_1:\mu\ne500$. Il test usa il campione per decidere se rifiutare $H_0$ a favore di $H_1$.

Con le lettere, sia $\theta$ (si legge theta) il parametro di un modello probabilistico. L'ipotesi nulla afferma che $\theta$ appartiene a un insieme $\Theta_0$ (theta zero maiuscolo), l'alternativa che appartiene a un insieme $\Theta_1$, e i due insiemi sono disgiunti. Nell'esempio $\Theta_0=\{500\}$.

L'ipotesi nulla si dice semplice quando determina una sola distribuzione del campione, composta quando ne ammette più di una. Con durate normali di deviazione standard nota $\sigma=40$, l'ipotesi $H_0:\mu=500$ fissa l'unica legge $N(500,40^2)$ ed è semplice. Con $\sigma$ ignota la stessa $H_0$ ammette la legge $N(500,\sigma^2)$ per ogni $\sigma>0$ ed è composta. Anche $H_0:\mu\le500$ è composta.

Dato un valore di riferimento $\mu_0$, le coppie di ipotesi per una media sono tre.

- Per uno scostamento in entrambe le direzioni, $H_0:\mu=\mu_0$ e $H_1:\mu\ne\mu_0$.
- Per stabilire un aumento, $H_0:\mu\le\mu_0$ e $H_1:\mu>\mu_0$.
- Per stabilire un calo, $H_0:\mu\ge\mu_0$ e $H_1:\mu<\mu_0$.

La prima alternativa contiene valori da entrambe le parti di $\mu_0$ e si dice **bilatera**; le altre due si dicono unilatere. Il test corrispondente si chiama bilatero, unilatero superiore se $H_1:\mu>\mu_0$, unilatero inferiore se $H_1:\mu<\mu_0$. La coppia scelta decide da quale parte stanno i risultati che portano al rifiuto.

Quando $H_0$ contiene più valori, come $H_0:\mu\le\mu_0$, la probabilità di rifiutare per errore va calcolata per ciascuno. Il valore nullo più vicino all'alternativa, $\mu=\mu_0$, si chiama confine dell'ipotesi nulla; nel blocco sul livello si vede che nei test unilateri per una media basta il calcolo al confine.

:::

:::definizione{#regione-critica titolo="Statistica test e regione critica"}

Per verificare $H_0:\mu\le50$ contro $H_1:\mu>50$ con $25$ osservazioni, una regola è calcolare la media campionaria $\bar X$ e rifiutare $H_0$ se $\bar X\ge53{,}29$; il numero $53{,}29$ si ricava nella sezione seguente. Qui $\bar X$ è la statistica test e i valori da $53{,}29$ in su formano la regione critica.

Una **statistica test** $T$ è una funzione del campione. Il valore $t_{\mathrm{oss}}$ (oss sta per osservato) si ottiene inserendo nella funzione i dati raccolti. La **regione critica**, o regione di rifiuto, è l'insieme $C$ dei valori di $T$ per i quali la regola rifiuta $H_0$. Si costruisce con la distribuzione di $T$ sotto $H_0$, cioè quando $H_0$ è vera, mettendo in $C$ i valori che diventano più probabili quando è vera $H_1$.

- Se valori grandi di $T$ indicano $H_1$, come $\bar X$ per un aumento della media, si sceglie una soglia $c$ e si rifiuta per $T\ge c$.
- Se valori piccoli di $T$ indicano $H_1$, come $\bar X$ per un calo della media, si rifiuta per $T\le c$.
- Se $T$ ha sotto $H_0$ una distribuzione simmetrica attorno a zero e l'alternativa è bilatera, si rifiuta per $|T|\ge c$, cioè per $T\le-c$ oppure $T\ge c$.

Nei primi due casi la regione critica è una coda della distribuzione, nel terzo è formata da due code. Calcolato $t_{\mathrm{oss}}$, la decisione consiste nel controllare se appartiene a $C$.

:::

:::esempio{titolo="Direzione fissata dalla domanda"}

Una durata media di almeno $500$ ore soddisfa il requisito di progetto. Se l'indagine cerca evidenza che il requisito sia violato, le ipotesi sono $H_0:\mu\ge500$ e $H_1:\mu<500$, e si rifiuta per medie campionarie piccole. Una media campionaria di $510$ ore è dalla parte opposta a quella che porterebbe al rifiuto, quindi la regola non rifiuta $H_0$.

La scelta dell'alternativa deriva dal requisito ed è fissata prima del campionamento. Se ciascuna coda ha probabilità $0{,}05$ quando $H_0$ è vera, chi sceglie la coda dopo aver visto il segno del risultato rifiuta ogni volta che il risultato cade in una delle due code. Rifiuta perciò un'ipotesi vera con probabilità $0{,}05+0{,}05=0{,}10$, il doppio di quella dichiarata.

:::

## Errori e potenza

:::definizione{#errori titolo="Livello, errore di secondo tipo e potenza"}

La regola del blocco precedente rifiuta $H_0:\mu\le50$ se $\bar X\ge53{,}29$. Poiché la decisione si prende su un campione, può essere sbagliata in due modi.

- Se $\mu=50$, cioè $H_0$ è vera, un campione può dare $\bar X\ge53{,}29$ e la regola rifiuta. Rifiutare un'ipotesi nulla vera è un **errore di primo tipo**.
- Se $\mu=54$, cioè $H_1$ è vera, un campione può dare $\bar X<53{,}29$ e la regola non rifiuta. Non rifiutare un'ipotesi nulla falsa è un errore di secondo tipo.

Per ogni valore $\theta$, la **funzione di potenza** $\pi(\theta)=P_\theta(T\in C)$ (si legge pi di theta) è la probabilità che la regola rifiuti $H_0$ quando il parametro vale $\theta$. Il pedice di $P_\theta$ indica la distribuzione con cui si calcola la probabilità. Per $\theta\in\Theta_0$, $\pi(\theta)$ è la probabilità di un errore di primo tipo. Per $\theta\in\Theta_1$ il rifiuto è la decisione giusta e l'errore di secondo tipo ha probabilità $\beta(\theta)=1-\pi(\theta)$ (beta di theta). Con $\sigma=10$ il teorema seguente dà $\pi(50)=0{,}05$, $\pi(54)\approx0{,}639$ e quindi $\beta(54)\approx0{,}361$.

Un test ha **livello** $\alpha$ (si legge alfa) se la probabilità di errore di primo tipo non supera $\alpha$ per nessun valore di $H_0$:
$$
\sup_{\theta\in\Theta_0}\pi(\theta)\le\alpha.
$$
Il simbolo $\sup$, estremo superiore, è il più piccolo numero che nessun $\pi(\theta)$ con $\theta\in\Theta_0$ supera; quando c'è un massimo coincide con esso. Il livello, detto anche livello di significatività, si fissa prima di raccogliere i dati; negli esercizi si usano di solito $0{,}05$ e $0{,}01$. Se la probabilità massima di errore di primo tipo è strettamente minore di $\alpha$, il test si dice conservativo, come il test sul conteggio alla fine di questa sezione, che al livello $0{,}05$ ha probabilità massima $0{,}03125$.

Se $H_0:\mu\le50$ contiene più valori, il livello va controllato su tutti. Nel test sulla media la probabilità di rifiuto cresce con $\mu$, come dimostra il teorema seguente. Per $\mu=48$, per esempio, vale circa $0{,}004$, meno di $\pi(50)=0{,}05$. Il massimo su $H_0$ si ha perciò nel confine $\mu=50$, e basta calcolare lì la probabilità di rifiuto.

La probabilità $\beta(\theta)$ dipende dal valore $\theta$ dell'alternativa. Si ha $\pi(52)\approx0{,}259$, quindi per una media vera di $52$, vicina al confine, la regola non rifiuta in circa $74$ campioni su $100$; per una media vera di $58$ si ha $\pi(58)\approx0{,}991$. Allo stesso modo, se sotto un certo valore alternativo una procedura rifiuta in $84$ campioni su $100$ nel lungo periodo, la sua potenza in quel valore è $0{,}84$ e $\beta$ vale $0{,}16$. La potenza in un valore dell'alternativa è perciò la probabilità di rifiutare $H_0$ quando la media vera è quel valore; nell'osservazione sulla numerosità si sceglie $n$ in modo che raggiunga un valore assegnato.

:::

::::teorema{#potenza-z titolo="Potenza del test z unilatero superiore"}

Sia $\bar X$ la media di $n$ osservazioni indipendenti con legge normale di media $\mu$ e deviazione standard nota $\sigma>0$. Sia $z_p$ il quantile di ordine $p$ della normale standard, cioè il numero che lascia alla sua sinistra probabilità $p$ (capitolo 6), e sia $\Phi$ (fi maiuscolo) la funzione di ripartizione della normale standard. Per verificare $H_0:\mu\le\mu_0$ contro $H_1:\mu>\mu_0$ al livello $\alpha$, il test rifiuta $H_0$ se $\bar X\ge c$, con $c$ scelto in modo che $P_{\mu_0}(\bar X\ge c)=\alpha$. La regola equivale a rifiutare se $Z=\dfrac{(\bar X-\mu_0)\sqrt n}{\sigma}\ge z_{1-\alpha}$, e il test con questa statistica si chiama **test z**. La soglia sulla media e la potenza sono
$$
\begin{aligned}
c&=\mu_0+z_{1-\alpha}\frac{\sigma}{\sqrt n},\\[6pt]
\pi(\mu)&=1-\Phi\!\left(z_{1-\alpha}-
          \frac{(\mu-\mu_0)\sqrt n}{\sigma}\right).
\end{aligned}
$$

:::dimostrazione

Se $\mu=\mu_0$, la media $\bar X$ è normale di media $\mu_0$ e varianza $\dfrac{\sigma^2}{n}$ (capitolo 8), quindi standardizzando si ha $P_{\mu_0}(\bar X\ge c)=1-\Phi\!\left(\dfrac{(c-\mu_0)\sqrt n}{\sigma}\right)$. Questa probabilità vale $\alpha$ quando $\dfrac{(c-\mu_0)\sqrt n}{\sigma}=z_{1-\alpha}$, e ricavando $c$ si ottiene la soglia. Sottraendo $\mu_0$ in $\bar X\ge c$ e moltiplicando per il numero positivo $\dfrac{\sqrt n}{\sigma}$, la disuguaglianza diventa $Z\ge z_{1-\alpha}$.

Per la potenza si mantiene la soglia $c$ e si usa la distribuzione di $\bar X$ quando la media è $\mu$. Poiché $\dfrac{(\bar X-\mu)\sqrt n}{\sigma}$ ha legge normale standard,
$$
P_\mu(\bar X\ge c)=1-\Phi\!\left(\frac{(c-\mu)\sqrt n}{\sigma}\right).
$$
Sostituendo $c$ si ha $\dfrac{(c-\mu)\sqrt n}{\sigma}=z_{1-\alpha}-\dfrac{(\mu-\mu_0)\sqrt n}{\sigma}$, cioè la formula. Al crescere di $\mu$ l'argomento di $\Phi$ diminuisce e $\Phi$ è crescente, perciò la potenza cresce con $\mu$. Il massimo di $\pi(\mu)$ per $\mu\le\mu_0$ è quindi $\pi(\mu_0)=\alpha$.

:::

Il teorema dà la soglia a partire dal livello scelto e la probabilità di rifiuto per ogni valore della media; i due blocchi seguenti la calcolano con i numeri.

::::

:::esempio{titolo="Una soglia, due distribuzioni campionarie"}

Con $\mu_0=50$, $\sigma=10$, $n=25$ e $\alpha=0{,}05$ si ha $\dfrac{\sigma}{\sqrt n}=2$. Poiché $z_{0{,}95}\approx1{,}645$, la soglia sulla media è $c\approx50+1{,}645\cdot2=53{,}29$. Se $\mu=54$, la soglia standardizzata rispetto a $54$ è $\dfrac{53{,}29-54}{2}\approx-0{,}355$. La probabilità di rifiuto è quindi $1-\Phi(-0{,}355)\approx0{,}639$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI);exp(-(x-2)^2/2)/sqrt(2*PI)" area="exp(-(x-2)^2/2)/sqrt(2*PI);0;1.645;5.5" segmenti="1.645,0,1.645,0.375" etichette="1.645,-0.072,c" xmin=-4 xmax=5.5 ymin=-0.095 ymax=0.48 nomi="z,y" legenda="\mu=50;\mu=54" titolo="Soglia sulla scala di Z e area di rifiuto sotto l'alternativa."}

Sulla scala di $Z$ le due distribuzioni hanno centri $0$ e $\dfrac{54-50}{2}=2$, e la soglia è la stessa nei due casi. Riducendo $\alpha$ a $0{,}01$ con $n=25$, la soglia diventa $50+2{,}326\cdot2\approx54{,}65$ e la potenza in $\mu=54$ scende a circa $0{,}372$. A parità di livello, aumentare $n$ riduce l'errore standard $\dfrac{\sigma}{\sqrt n}$, cioè la deviazione standard della media campionaria, e le due distribuzioni si sovrappongono di meno.

:::

:::osservazione{titolo="Numerosità per una potenza assegnata"}

Si vuole che il test z superiore rilevi un aumento $\delta=\mu-\mu_0>0$ (si legge delta) con potenza almeno $1-\beta_\star$. Per il teorema questo accade se $1-\Phi\!\left(z_{1-\alpha}-\dfrac{\delta\sqrt n}{\sigma}\right)\ge1-\beta_\star$, cioè se $\Phi\!\left(z_{1-\alpha}-\dfrac{\delta\sqrt n}{\sigma}\right)\le\beta_\star$. Poiché $\Phi$ è crescente, la condizione equivale a $z_{1-\alpha}-\dfrac{\delta\sqrt n}{\sigma}\le z_{\beta_\star}$. Per la simmetria della normale $z_{\beta_\star}=-z_{1-\beta_\star}$, quindi
$$
\frac{\delta\sqrt n}{\sigma}\ge z_{1-\alpha}+z_{1-\beta_\star}.
$$
Si isola $\sqrt n$; se $\alpha$ e $\beta_\star$ sono minori di $0{,}5$ i due quantili sono positivi, perciò si elevano al quadrato i due membri e si arrotonda all'intero superiore.

Per esempio, con $\delta=4$, $\sigma=10$, $\alpha=0{,}05$ e potenza minima $0{,}80$, si ha $z_{0{,}95}\approx1{,}645$ e $z_{0{,}80}\approx0{,}842$, con somma $2{,}487$. Quindi $\sqrt n\ge2{,}487\cdot\dfrac{10}{4}$ e $n\ge(2{,}487\cdot 2{,}5)^2\approx38{,}66$, perciò servono almeno $39$ osservazioni. La soglia su $n$ è proporzionale a $\dfrac{1}{\delta^2}$, quindi se la differenza da rilevare si dimezza e gli altri dati restano fissi, la soglia teorica su $n$ quadruplica.

Con $n=39$ la potenza in $\mu=54$ è $1-\Phi\!\left(1{,}645-\dfrac{4\sqrt{39}}{10}\right)=1-\Phi(-0{,}853)\approx0{,}803$, mentre con $n=25$ è circa $0{,}639$. Le due funzioni di potenza valgono entrambe $0{,}05$ in $\mu=50$, perché la soglia è fissata dal livello.

::grafico{f="1/(1+exp(1.5976*(1.6449-(x-50)/2)*(1+0.04417*(1.6449-(x-50)/2)^2)));1/(1+exp(1.5976*(1.6449-(x-50)*0.6245)*(1+0.04417*(1.6449-(x-50)*0.6245)^2)))" punti="50,0.05,pieno;54,0.639,pieno;54,0.803,pieno" segmenti="54,0,54,0.803;44,0.8,54,0.8" etichette="54.5,0.58,0,639;51.7,0.87,0,803" xmin=43.3 xmax=62 ymin=-0.1 ymax=1.12 nomi="μ,π" legenda="n=25;n=39" titolo="Funzioni di potenza del test con $\mu_0=50$, $\sigma=10$ e $\alpha=0{,}05$. In $\mu=54$ la potenza passa da $0{,}639$ con $n=25$ a $0{,}803$ con $n=39$."}

:::

:::esempio{titolo="Livello effettivo con un conteggio discreto"}

Sia $X$ il numero di successi in cinque prove indipendenti. Per $H_0:p=\dfrac12$ contro $H_1:p>\dfrac12$ il test superiore rifiuta se $X=5$. Sotto $H_0$ la probabilità di rifiuto è $\left(\dfrac12\right)^5=\dfrac1{32}$, cioè $0{,}03125$. Estendendo il rifiuto a quattro successi si aggiungerebbero le cinque sequenze con un solo insuccesso, ciascuna di probabilità $\dfrac1{32}$, e la probabilità salirebbe a $\dfrac6{32}=0{,}1875$. Fra le due regioni considerate, soltanto la prima ha livello al più $0{,}05$.

La probabilità di rifiuto sotto $H_0$ della regola scelta, $0{,}03125$, si chiama livello effettivo. Con un conteggio la regione critica si allarga di un valore alla volta, quindi il livello effettivo cambia a salti e qui non vale esattamente $0{,}05$; il test è conservativo. Sotto l'alternativa $p=\dfrac34$, la stessa regione ha potenza $\left(\dfrac34\right)^5\approx0{,}2373$. In entrambi i calcoli si sommano le probabilità della stessa regione critica con la legge binomiale (capitolo 5) del valore di $p$ indicato.

::grafico{xmin=-0.7 xmax=5.8 ymin=-0.045 ymax=0.45 nomi="x,P" poligoni="4.62,0 4.62,0.03125 4.98,0.03125 4.98,0;5.02,0 5.02,0.2373 5.38,0.2373 5.38,0" linee="-0.38,0 -0.38,0.03125 -0.02,0.03125 -0.02,0;0.62,0 0.62,0.15625 0.98,0.15625 0.98,0;1.62,0 1.62,0.3125 1.98,0.3125 1.98,0;2.62,0 2.62,0.3125 2.98,0.3125 2.98,0;3.62,0 3.62,0.15625 3.98,0.15625 3.98,0;4.62,0 4.62,0.03125 4.98,0.03125 4.98,0;0.02,0 0.02,0.00098 0.38,0.00098 0.38,0;1.02,0 1.02,0.01465 1.38,0.01465 1.38,0;2.02,0 2.02,0.08789 2.38,0.08789 2.38,0;3.02,0 3.02,0.26367 3.38,0.26367 3.38,0;4.02,0 4.02,0.39551 4.38,0.39551 4.38,0;5.02,0 5.02,0.2373 5.38,0.2373 5.38,0" etichette="4.5,0.065,0,031;4.95,0.27,0,237" titolo="Per ogni valore di $X$, a sinistra la probabilità con $p=\dfrac{1}{2}$ e a destra quella con $p=\dfrac{3}{4}$. Le barre colorate formano la regione critica $X=5$, con probabilità $0{,}031$ sotto $H_0$ e $0{,}237$ sotto l'alternativa."}

:::

## Valore p e significatività

:::definizione{#p-value titolo="Valore p e ordinamento dei risultati"}

Nel test di $H_0:\mu\le50$ con errore standard $2$ si osserva $\bar x=54{,}5$, quindi $z_{\mathrm{oss}}=\dfrac{54{,}5-50}{2}=2{,}25$. Se fosse $\mu=50$, la probabilità di un valore di $Z$ almeno pari a $2{,}25$ sarebbe $1-\Phi(2{,}25)\approx0{,}012$, cioè circa $1$ campione su $100$.

Il **valore p** è la probabilità, calcolata supponendo vera l'ipotesi nulla, di un risultato almeno tanto sfavorevole a $H_0$ quanto quello osservato $t_{\mathrm{oss}}$. Quali risultati siano almeno tanto sfavorevoli dipende dall'alternativa, cioè dall'ordinamento dei risultati scelto per il test: per l'alternativa superiore i valori $T\ge t_{\mathrm{oss}}$, per l'inferiore i valori $T\le t_{\mathrm{oss}}$, per la bilatera con $T$ simmetrica i valori $|T|\ge|t_{\mathrm{oss}}|$. Se l'ipotesi nulla ammette più distribuzioni, si prende il massimo, o l'estremo superiore, di questa probabilità sui valori nulli; nei test unilateri per una media il massimo è al confine, come per il livello.

Per una statistica normale standard sotto $H_0$ e un valore osservato $z_{\mathrm{oss}}$, valgono le formule
- $p=1-\Phi(z_{\mathrm{oss}})$ per l'alternativa superiore.
- $p=\Phi(z_{\mathrm{oss}})$ per l'alternativa inferiore.
- $p=2[1-\Phi(|z_{\mathrm{oss}}|)]$ per il test bilatero simmetrico.

Si rifiuta $H_0$ se $p\le\alpha$, e in questo caso il risultato si dice **significativo** al livello $\alpha$. Nell'esempio $p\approx0{,}012$, quindi il risultato è significativo al livello $0{,}05$ e non al livello $0{,}01$. Per i test continui trattati qui, il valore p è il più piccolo livello al quale il risultato osservato porta al rifiuto, perciò dal valore p si ricava la decisione per qualunque livello.

Se si conoscono soltanto alcuni quantili, il confronto colloca il valore p fra due livelli. Per esempio, $z_{\mathrm{oss}}=2{,}2$ supera $z_{0{,}975}\approx1{,}96$ ed è minore di $z_{0{,}995}\approx2{,}576$, quindi il test bilatero rifiuta al livello $0{,}05$ e non al livello $0{,}01$. Il valore p bilatero è perciò compreso fra $0{,}01$ e $0{,}05$; il calcolo dà circa $0{,}028$.

:::

:::esempio{titolo="Una coda e due code per la stessa osservazione"}

Si osserva $z_{\mathrm{oss}}=-2$. Poiché $\Phi(-2)\approx0{,}02275$, il valore p è circa $0{,}02275$ per l'alternativa inferiore, $0{,}97725$ per la superiore e $0{,}04550$ per quella bilatera. Nel caso bilatero i risultati almeno altrettanto estremi sono quelli a sinistra di $-2$ e a destra di $2$. Poiché la normale standard è simmetrica, le due aree sono uguali e il valore p è il doppio di una di esse. Nella figura $\varphi(z)$ (si legge fi) è la densità della normale standard.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-4.5;-2|exp(-x^2/2)/sqrt(2*PI);0;2;4.5" segmenti="-2,0,-2,0.054;2,0,2,0.054" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="Le due code colorate contribuiscono al valore p bilatero per z osservato uguale a −2."}

:::

:::attenzione{titolo="Il valore p dipende dal modello nullo"}

Un valore p pari a $0{,}04$ non assegna all'ipotesi nulla una probabilità del $4\%$. Il calcolo suppone vera la distribuzione nulla e dà la probabilità di un insieme di risultati campionari.

Inoltre un valore p piccolo non indica da solo una differenza grande. Una differenza osservata di $1$ grammo con errore standard $1$ dà $z_{\mathrm{oss}}=1$ e valore p bilatero circa $0{,}317$; con errore standard $0{,}25$, cioè con un campione $16$ volte più grande, dà $z_{\mathrm{oss}}=4$ e valore p circa $0{,}00006$. Per valutare la rilevanza pratica di $1$ grammo si considerano la stima, la sua incertezza e l'unità di misura.

Se il test dà $p=0{,}18$ al livello $0{,}05$, il mancato rifiuto non dimostra che $H_0$ sia vera, perché con un campione piccolo la potenza contro differenze piccole è bassa, e la regola non rifiuta in molti campioni anche quando la differenza esiste.

:::

## Test per una media

::::teorema{#media titolo="Distribuzioni nulle dei test z e t per una media"}

Siano $X_1,\ldots,X_n$ osservazioni indipendenti con legge $N(\mu,\sigma^2)$, $\sigma>0$. Sotto $H_0:\mu=\mu_0$, se $\sigma$ è nota, la statistica
$$
Z=\frac{(\bar X-\mu_0)\sqrt n}{\sigma}
$$
ha distribuzione normale standard. Se $\sigma$ è ignota e $n\ge2$, si usa la deviazione standard campionaria corretta $S$, cioè la radice della varianza campionaria con divisore $n-1$. Allora
$$
T=\frac{(\bar X-\mu_0)\sqrt n}{S}\sim t_{n-1},
$$
dove $t_{n-1}$ è la legge t di Student con $n-1$ gradi di libertà (capitolo 6). Il test che usa $T$ si chiama test t. Il teorema dà quindi la legge di riferimento per una media: la normale quando $\sigma$ è nota, la t quando $\sigma$ si stima dai dati.

:::dimostrazione

Sotto $H_0$, la media campionaria è normale di media $\mu_0$ e varianza $\dfrac{\sigma^2}{n}$, e la standardizzazione dà la legge di $Z$. Per un campione normale, inoltre, $\bar X$ è indipendente da $S^2$ e $U=\dfrac{(n-1)S^2}{\sigma^2}$ ha legge chi quadrato con $n-1$ gradi di libertà (capitolo 8). Dividendo numeratore e denominatore di $T$ per $\sigma$ si ottiene $T=\dfrac{Z}{\sqrt{\dfrac{U}{n-1}}}$. Per definizione, il rapporto fra una normale standard e la radice di una chi quadrato indipendente divisa per i suoi gradi di libertà ha legge t di Student con gli stessi gradi di libertà.

:::

::::

:::osservazione

Si indica con $t_{\nu,p}$ il quantile di ordine $p$ della t di Student con $\nu$ (si legge nu) gradi di libertà. Per il test bilatero si rifiuta se $|t_{\mathrm{oss}}|\ge t_{\nu,1-\frac{\alpha}{2}}$, per l'alternativa superiore se $t_{\mathrm{oss}}\ge t_{\nu,1-\alpha}$ e per quella inferiore se $t_{\mathrm{oss}}\le t_{\nu,\alpha}$. Le stesse regole valgono con i quantili $z_p$ per il test z. Le soglie t sono più grandi, perché tengono conto della variabilità aggiuntiva dovuta alla stima di $\sigma$. Per esempio, con $15$ gradi di libertà si ha $t_{15,0{,}975}\approx2{,}131$ contro $z_{0{,}975}\approx1{,}96$.

Se le osservazioni non sono normali ma sono indipendenti e identicamente distribuite, con varianza positiva e finita, per $n$ grande $T$ ha sotto $H_0$ legge approssimativamente normale standard. Lo garantiscono il teorema centrale del limite (capitolo 8) e la consistenza di $S$, cioè il fatto che $S$ si avvicina a $\sigma$ al crescere di $n$ (capitolo 9). Quanto deve essere grande $n$ dipende dalla forma della distribuzione, e una distribuzione molto asimmetrica richiede più osservazioni di una quasi simmetrica.

:::

:::esempio{titolo="Una media osservata sotto il riferimento"}

Su $16$ osservazioni normali si hanno $\bar x=96$, $s=8$ e si verifica $H_0:\mu\ge100$ contro $H_1:\mu<100$. L'errore standard stimato vale $\dfrac{8}{\sqrt{16}}=2$, quindi $t_{\mathrm{oss}}=\dfrac{96-100}{2}=-2$. Al livello $0{,}05$ la soglia inferiore è $t_{15,0{,}05}\approx-1{,}753$. Poiché $-2<-1{,}753$, si rifiuta $H_0$. Con un'alternativa bilatera allo stesso livello il confronto sarebbe fra $|t_{\mathrm{oss}}|=2$ e $t_{15,0{,}975}\approx2{,}131$, e il risultato sarebbe di mancato rifiuto.

::grafico{f="0.39235316*(1+x^2/15)^(-8)" area="0.39235316*(1+x^2/15)^(-8);0;-4.4;-1.753" segmenti="-1.753,0,-1.753,0.08834" punti="-2,0,pieno" xmin=-4.4 xmax=4.4 ymin=-0.06 ymax=0.45 nomi="t,f" legenda="t_{15}" titolo="Il punto osservato vale −2. Si trova a sinistra della soglia −1,753, nella regione di rifiuto del test unilatero."}

:::

## Proporzioni e confronto di campioni

:::definizione{#proporzioni titolo="Test score per una o due proporzioni"}

Una moneta lanciata $100$ volte dà $60$ teste. Se la moneta è equilibrata, la proporzione di teste $\widehat p$ ha media $0{,}5$ e deviazione standard $\sqrt{\dfrac{0{,}5\cdot0{,}5}{100}}=0{,}05$, quindi lo scostamento $0{,}10$ vale $2$ deviazioni standard e il valore p bilatero è $2[1-\Phi(2)]\approx0{,}046$.

Per $n$ prove di Bernoulli indipendenti con probabilità di successo $p$, sia $X$ il numero di successi e sia $\widehat p=\dfrac{X}{n}$. Sotto $H_0:p=p_0$, con $0<p_0<1$, la varianza di $\widehat p$ è $\dfrac{p_0(1-p_0)}{n}$. Il **test score** standardizza lo scostamento usando questa varianza, calcolata con il valore nullo $p_0$:
$$
Z=\frac{\widehat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}.
$$
Per il teorema centrale del limite la distribuzione nulla di $Z$ si approssima con la normale standard se i conteggi attesi $np_0$ e $n(1-p_0)$ sono abbastanza grandi; negli esercizi si richiede che siano entrambi almeno $5$. Con $p_0=0{,}04$, per esempio, servono almeno $125$ prove, perché $0{,}04\cdot125=5$.

Quando una delle due condizioni non è soddisfatta, il valore p si calcola esattamente con la legge $X\sim\operatorname{Bin}(n,p_0)$ (capitolo 5). Per il test binomiale bilatero due criteri comuni danno in alcuni casi valori p diversi. Con $n=10$, $p_0=0{,}3$ e $X=0$ si ha $P(X=0)=0{,}7^{10}\approx0{,}0282$.

- Raddoppiando la coda più piccola si ottiene $p\approx0{,}0565$.
- Sommando le probabilità dei risultati con probabilità non maggiore di quella osservata, cioè $X=0$ e $X\ge7$, si ottiene $p\approx0{,}0282+0{,}0106=0{,}0388$.

Al livello $0{,}05$ il primo criterio non rifiuta e il secondo rifiuta, perciò il criterio va specificato.

Con due campioni di Bernoulli indipendenti, di numerosità $n_1,n_2$ e con conteggi $x_1,x_2$, l'ipotesi $H_0:p_1=p_2$ afferma che le proporzioni sono uguali senza dire quanto valgono. Se $H_0$ è vera tutte le $n_1+n_2$ prove hanno la stessa probabilità di successo, quindi la si stima con la proporzione combinata $\widehat p_{\mathrm c}=\dfrac{x_1+x_2}{n_1+n_2}$, in cui ogni osservazione ha lo stesso peso. Se $\widehat p_{\mathrm c}$ appartiene a $(0,1)$ e i conteggi attesi sono adeguati, si usa
$$
Z=\frac{\widehat p_1-\widehat p_2}
{\sqrt{\widehat p_{\mathrm c}(1-\widehat p_{\mathrm c})
       \left(\frac1{n_1}+\frac1{n_2}\right)}}.
$$
Per esempio, con $60$ successi su $100$ e $20$ su $50$, la stima comune è $\dfrac{80}{150}\approx0{,}533$. Il denominatore vale $\sqrt{0{,}533\cdot0{,}467\cdot\left(\dfrac1{100}+\dfrac1{50}\right)}\approx0{,}0864$, quindi $Z\approx\dfrac{0{,}60-0{,}40}{0{,}0864}\approx2{,}31$.

:::

:::definizione{#confronto-medie titolo="Test di Welch e test t appaiato"}

Si confrontano le medie $\mu_1,\mu_2$ di due popolazioni con varianze ignote, per esempio i punteggi di due classi, usando due campioni indipendenti con $n_1,n_2\ge2$ osservazioni, medie campionarie $\bar X_1,\bar X_2$ e varianze campionarie corrette $S_1^2,S_2^2$. L'ipotesi nulla è $H_0:\mu_1-\mu_2=\Delta_0$ (delta zero), di solito con $\Delta_0=0$. La quantità $V_i=\dfrac{S_i^2}{n_i}$, per $i=1,2$, è la varianza stimata della media del gruppo $i$, e per l'indipendenza dei gruppi la varianza della differenza delle medie è $V_1+V_2$. La **statistica di Welch** e i suoi gradi di libertà approssimati sono
$$
T_W=\frac{\bar X_1-\bar X_2-\Delta_0}{\sqrt{V_1+V_2}},
\qquad
\nu=\frac{(V_1+V_2)^2}{\frac{V_1^2}{n_1-1}+\frac{V_2^2}{n_2-1}}.
$$
Il test usa come riferimento la t di Student con il valore osservato di $\nu$, che non è necessariamente intero. Per campioni normali questa approssimazione è accurata anche con varianze diverse; con dati non normali si usa per campioni grandi, in base al teorema centrale del limite.

Se le due misure appartengono alla stessa unità, i due gruppi non sono indipendenti, perché un pezzo più spesso degli altri prima di un trattamento resta più spesso degli altri anche dopo. Si formano allora le differenze $D_i=X_{1i}-X_{2i}$, con il segno scelto in base alla domanda. Si indicano con $\mu_D$ (mu con D) la media delle differenze nella popolazione, con $\bar D$ la loro media campionaria e con $S_D$ la loro deviazione standard campionaria corretta. Per $H_0:\mu_D=\Delta_0$ il **test t appaiato** usa
$$
T=\frac{(\bar D-\Delta_0)\sqrt n}{S_D},
$$
con $n$ numero di coppie. Se le differenze sono indipendenti tra le coppie e normali con varianza positiva, $T$ ha sotto $H_0$ legge t con $n-1$ gradi di libertà esattamente. La varianza usata è quella delle differenze, che si calcola dalle differenze stesse e quindi tiene già conto del legame fra le due misure sulla stessa unità.

:::

:::esempio{titolo="Due misure sulla stessa unità"}

Su nove pezzi si misura lo spessore prima e dopo un trattamento. Definendo $D$ come spessore dopo meno spessore prima, si ottengono $\bar d=0{,}6$ e $s_D=0{,}9$ nella stessa unità. Si verifica $H_0:\mu_D\le0$ contro $H_1:\mu_D>0$. L'errore standard stimato delle differenze è $\dfrac{0{,}9}{\sqrt9}=0{,}3$ e la statistica osservata vale $\dfrac{0{,}6}{0{,}3}=2$. Sotto normalità delle differenze, con coppie indipendenti, il riferimento è $t_8$. Il quantile $t_{8,0{,}95}\approx1{,}860$ è minore di $2$, quindi il test rifiuta al livello $0{,}05$. L'unità campionaria è il pezzo e la numerosità è nove, anche se le misure sono diciotto.

:::

:::esempio{titolo="Gradi di libertà nel confronto di Welch"}

Due gruppi indipendenti di nove osservazioni normali danno medie campionarie $31$ e $26$ e deviazioni standard corrette $6$ e $3$. Si verifica l'uguaglianza delle medie con alternativa bilatera. Le varianze stimate delle medie sono $\dfrac{36}{9}=4$ e $\dfrac{9}{9}=1$, quindi $t_W=\dfrac{5}{\sqrt5}\approx2{,}236$. La formula per $\nu$ dà
$$
\nu=\frac{(4+1)^2}{\frac{4^2}{8}+\frac{1^2}{8}}
=\frac{200}{17}\approx11{,}765.
$$
Il quantile di ordine $0{,}975$ del riferimento t è circa $2{,}184$. Poiché $2{,}236\ge2{,}184$, il valore osservato conduce al rifiuto al livello $0{,}05$. I gradi di libertà sono inferiori a $9+9-2=16$, i gradi di libertà del test con varianza combinata (capitolo 10), perché la maggiore incertezza della prima media pesa nel calcolo di $\nu$.

::grafico{f="0.3905641*(1+x^2/11.7647)^(-6.382353)" area="0.3905641*(1+x^2/11.7647)^(-6.382353);0;-4.5;-2.184|0.3905641*(1+x^2/11.7647)^(-6.382353);0;2.184;4.5" segmenti="-2.184,0,-2.184,0.0445;2.184,0,2.184,0.0445" punti="2.236,0,pieno" etichette="2.5,0.09,2,236" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.45 nomi="t,f" legenda="t_{11{,}765}" titolo="Densità t con $\nu\approx11{,}765$ gradi di libertà. Le code oltre $-2{,}184$ e $2{,}184$ hanno area $0{,}025$ ciascuna e il valore osservato $2{,}236$ si trova nella coda destra."}

:::

## Adattamento e indipendenza

:::definizione{#chi-quadrato titolo="Statistica di Pearson e frequenze attese"}

In $90$ prove indipendenti ogni esito cade in una di tre categorie, a cui l'ipotesi nulla assegna probabilità $\dfrac12$, $\dfrac13$ e $\dfrac16$. Sotto $H_0$ ci si attendono quindi $45$, $30$ e $15$ esiti, mentre se ne osservano $50$, $25$ e $15$. Gli scarti $5$, $-5$ e $0$ si riassumono in un solo numero.

Si indicano con $O_j$ le frequenze osservate e con $E_j>0$ le frequenze attese sotto l'ipotesi nulla. La **statistica chi quadrato di Pearson** è
$$
Q=\sum_j\frac{(O_j-E_j)^2}{E_j}.
$$
Ogni addendo è il quadrato dello scarto di un conteggio dal suo atteso, diviso per l'atteso. Nell'esempio $Q=\dfrac{25}{45}+\dfrac{25}{30}+0\approx1{,}39$. La somma cresce quando gli scarti crescono, in qualunque direzione, quindi il test usa la coda destra.

Nel **test di adattamento** si confronta la distribuzione delle osservazioni in $k$ categorie con probabilità teoriche $p_1,\ldots,p_k$. Per $n$ unità indipendenti e categorie mutuamente esclusive ed esaustive, cioè tali che ogni unità cada in una e una sola, si pone $E_j=np_j$. Con probabilità fissate e positive, per $n$ grande la legge di $Q$ sotto $H_0$ è approssimativamente chi quadrato con $k-1$ gradi di libertà (capitolo 6). Il vincolo $\sum_jO_j=n$ toglie un grado di libertà, perché noti $k-1$ conteggi l'ultimo si ricava per differenza, come $90-50-25=15$. Se le $p_j$ dipendono da $d$ parametri stimati dagli stessi conteggi con la massima verosimiglianza (capitolo 9), ogni stima toglie un altro grado di libertà e se ne usano $k-1-d$. Per esempio, per verificare una legge di Poisson con media stimata dai dati su $5$ categorie si usano $5-1-1=3$ gradi di libertà.

Nell'esempio i gradi di libertà sono $3-1=2$. Indicato con $\chi^2_{\nu,p}$ il quantile di ordine $p$ della chi quadrato con $\nu$ gradi di libertà, si ha $\chi^2_{2,0{,}95}\approx5{,}991$. Poiché $1{,}39<5{,}991$, al livello $0{,}05$ non si rifiuta $H_0$.

:::

:::definizione{#indipendenza titolo="Test di indipendenza in una tabella"}

Due gruppi di $40$ unità hanno rispettivamente $30$ e $10$ successi, e si vuole sapere se la quota di successi dipende dal gruppo; i dati formano una tabella a doppia entrata (capitolo 1) e il calcolo è nell'esempio che segue. In una tabella con $r$ righe e $c$ colonne si denota con $n_{i\cdot}$ il totale della riga $i$, con $n_{\cdot j}$ il totale della colonna $j$ e con $n$ la numerosità complessiva. Sotto l'indipendenza la probabilità di una cella è il prodotto delle probabilità della sua riga e della sua colonna (capitolo 4). Stimando queste probabilità con le proporzioni marginali $\dfrac{n_{i\cdot}}{n}$ e $\dfrac{n_{\cdot j}}{n}$ e moltiplicando per $n$ si ricava
$$
E_{ij}=n\frac{n_{i\cdot}}n\frac{n_{\cdot j}}n
=\frac{n_{i\cdot}n_{\cdot j}}n.
$$
La statistica di Pearson si ottiene sommando gli addendi su tutte le celle. Le condizioni sono unità indipendenti, totali di riga e di colonna positivi, attesi adeguati e nessuno zero strutturale, cioè nessuna cella vuota per costruzione, come «iscritto al primo anno» e «ha sostenuto un esame del terzo anno». Con queste condizioni il riferimento è approssimativamente chi quadrato con $(r-1)(c-1)$ gradi di libertà. I gradi di libertà sono $(r-1)(c-1)$ perché, fissati i totali, bastano le celle delle prime $r-1$ righe e delle prime $c-1$ colonne per ricostruire la tabella; le altre si ricavano per differenza.

:::

:::esempio{titolo="Indipendenza in una tabella due per due"}

Per due gruppi di $40$ unità si osservano rispettivamente $30$ e $10$ successi. La colonna dei successi totalizza $40$ su $80$, quindi l'atteso dei successi in ciascuna riga è $\dfrac{40\cdot40}{80}=20$. Anche l'atteso dei mancati successi vale $20$ in ciascuna riga. Tutti e quattro gli scostamenti assoluti sono $10$, perciò $Q=4\cdot\dfrac{100}{20}=20$. I gradi di libertà sono $(2-1)(2-1)=1$. Poiché $\chi^2_{1,0{,}95}\approx3{,}841$ e $20>3{,}841$, si rifiuta l'indipendenza al livello $0{,}05$.

::grafico{f="exp(-x/2)/sqrt(2*PI*x)" area="exp(-x/2)/sqrt(2*PI*x);0;3.841;22" segmenti="3.841,0,3.841,0.0298" punti="20,0,pieno" etichette="3.2,0.1,3,841;19.2,0.06,Q = 20" xmin=-0.6 xmax=22 ymin=-0.06 ymax=0.62 nomi="q,f" legenda="\chi^2_{1}" titolo="Densità chi quadrato con un grado di libertà. La regione di rifiuto comincia a $3{,}841$ e ha area $0{,}05$. Il valore osservato $Q=20$ si trova molto oltre la soglia."}

:::

:::attenzione{titolo="Frequenze piccole e unità ripetute"}

Negli esercizi, avere almeno cinque attesi in ogni cella è una condizione pratica per usare l'approssimazione di Pearson. Il controllo si esegue sugli attesi e non sugli osservati, perché un atteso piccolo dipende dai margini o dalle probabilità nulle. Se due categorie hanno attesi piccoli, si uniscono in una categoria che abbia senso per il problema, sommando sia gli osservati sia gli attesi.

In una tabella $2\times2$ con pochi dati si usa il test esatto di Fisher, che considera le tabelle con gli stessi totali di riga e di colonna di quella osservata, cioè condiziona ai margini, e ne calcola le probabilità esatte con la legge ipergeometrica (capitolo 5).

Se $50$ persone rispondono sì o no prima e dopo un corso, la tabella contiene $100$ risposte ma soltanto $50$ persone. Le due risposte della stessa persona non sono indipendenti, quindi trattarle come unità indipendenti altera la distribuzione nulla. Si usa invece una procedura per dati appaiati, che confronta le persone passate da no a sì con quelle passate da sì a no.

:::

:::osservazione{titolo="Scostamenti globali e celle che contribuiscono"}

Un rifiuto nel test di adattamento significa che gli scostamenti complessivi sono grandi rispetto al modello nullo. Per individuare quali categorie contribuiscono di più si calcolano separatamente i rapporti $\dfrac{O_j-E_j}{\sqrt{E_j}}$. Il loro quadrato è il contributo alla statistica, mentre il segno distingue un eccesso da un difetto di osservazioni. Per esempio, con due celle attese rispettivamente pari a $10$ e $40$, uno scostamento di $4$ contribuisce $\dfrac{16}{10}=1{,}6$ nella prima e $\dfrac{16}{40}=0{,}4$ nella seconda. Lo stesso scostamento assoluto pesa quindi di più dove l'atteso è piccolo. Il test globale dice se le frequenze, nel loro insieme, si scostano dal modello; una verifica separata su una cella dice se si scosta quella sola categoria, ed è una domanda diversa.

:::

## Varianza, confronti multipli e intervalli

:::teorema{#varianza-test titolo="Test chi quadrato per la varianza"}

Un costruttore dichiara che il volume versato da una macchina ha varianza $4\,\mathrm{ml}^2$, e su $10$ bottiglie la varianza campionaria corretta è $8\,\mathrm{ml}^2$. Il teorema dà la legge di riferimento per decidere se il rapporto fra le due varianze si spiega con la sola variabilità del campione.

Sia $S^2$ la varianza campionaria corretta di $n\ge2$ osservazioni indipendenti da una popolazione normale. Sotto $H_0:\sigma^2=\sigma_0^2$, con $\sigma_0^2>0$, la statistica $Q_\sigma=\dfrac{(n-1)S^2}{\sigma_0^2}$ ha legge $\chi^2_{n-1}$, perché è la quantità $\dfrac{(n-1)S^2}{\sigma^2}$ del capitolo 8 calcolata con il valore nullo. Si indica con $\chi^2_{\nu,p}$ il quantile di ordine $p$ per $\nu$ gradi di libertà. Per il test bilatero a code uguali si rifiuta se $Q_\sigma\ge\chi^2_{n-1,1-\frac{\alpha}{2}}$ oppure se $Q_\sigma\le\chi^2_{n-1,\frac{\alpha}{2}}$. Per l'alternativa superiore si usa la sola coda destra, con soglia $\chi^2_{n-1,1-\alpha}$, e per quella inferiore la sola coda sinistra, con soglia $\chi^2_{n-1,\alpha}$.

Poiché la legge chi quadrato è asimmetrica, due code di uguale probabilità hanno estremi a distanze diverse dal centro. Per esempio, con $\nu=9$ e $\alpha=0{,}05$ gli estremi dell'intervallo centrale sono circa $2{,}700$ e $19{,}023$, mentre la media della legge è $9$. Per le bottiglie $Q_\sigma=\dfrac{9\cdot8}{4}=18$, che sta fra le due soglie, quindi il test bilatero al livello $0{,}05$ non rifiuta $H_0$.

::grafico{f="0.00379945*max(0,x)^3.5*exp(-x/2)" area="0.00379945*max(0,x)^3.5*exp(-x/2);0;0;2.7|0.00379945*max(0,x)^3.5*exp(-x/2);0;19.023;31.6" segmenti="2.7,0,2.7,0.03186;19.023,0,19.023,0.00844" xmin=-0.4 xmax=31.6 ymin=-0.013 ymax=0.128 nomi="q,f" legenda="\chi^2_{9}" titolo="Sotto la legge chi quadrato a nove gradi di libertà, ciascuna zona colorata ha probabilità 0,025. Le soglie sono 2,700 e 19,023."}

Il valore p del test bilatero a code uguali è il doppio della più piccola fra la probabilità a sinistra e quella a destra del valore osservato. Per $Q_\sigma=18$ con $9$ gradi di libertà la probabilità a destra è circa $0{,}035$ e quella a sinistra circa $0{,}965$, quindi il valore p è circa $2\cdot0{,}035=0{,}070$, maggiore di $0{,}05$.

:::

::::teorema{#multipli titolo="Controllo dell'errore familiare con Bonferroni"}

Con $5$ test indipendenti al livello $0{,}05$ su ipotesi nulle tutte vere, la probabilità che nessun test rifiuti è $0{,}95^5$. La probabilità di almeno un rifiuto errato è quindi $1-0{,}95^5\approx0{,}226$. Questa probabilità, riferita a tutte le decisioni insieme, si chiama **rischio familiare** o errore familiare.

Si eseguano $m\ge1$ test e si voglia che il rischio familiare sia al più $\alpha$. Se ogni test è eseguito a livello $\dfrac{\alpha}{m}$, il rischio familiare è al più $\alpha$, anche in presenza di dipendenza fra le statistiche test.

:::dimostrazione

Per ogni ipotesi nulla vera, sia $A_j$ l'evento del suo rifiuto. L'evento che si commetta almeno un errore è l'unione degli $A_j$. Per due eventi $P(A\cup B)=P(A)+P(B)-P(A\cap B)$ (capitolo 3), e poiché $P(A\cap B)\ge0$ si ha $P(A\cup B)\le P(A)+P(B)$. Aggiungendo un evento alla volta, la probabilità dell'unione di più eventi è al più la somma delle loro probabilità, anche per eventi dipendenti. Poiché ogni addendo vale al più $\dfrac{\alpha}{m}$ e gli addendi sono al più $m$, la somma è al più $\alpha$.

:::

Per esempio, con cinque test e rischio familiare $0{,}05$, ogni decisione si prende a livello $0{,}01$; con test indipendenti il rischio familiare diventa $1-0{,}99^5\approx0{,}049$. Si ottiene lo stesso confronto moltiplicando ciascun valore p per cinque, sostituendo con $1$ i risultati maggiori di $1$, e confrontando con $0{,}05$.

::::

:::osservazione{#dualita titolo="Inversione di un test bilatero"}

Con $\bar x=96$, $s=8$ e $n=16$ l'errore standard stimato è $2$, e il test t bilatero al livello $0{,}05$ confronta $|t_{\mathrm{oss}}|$ con $t_{15,0{,}975}\approx2{,}131$. Per $\mu_0=100$ si ha $|t_{\mathrm{oss}}|=2$ e il test non rifiuta; per $\mu_0=101$ si ha $|t_{\mathrm{oss}}|=2{,}5$ e il test rifiuta. I valori $\mu_0$ non rifiutati formano un intervallo.

Si consideri una famiglia di test di livello $\alpha$, uno per ogni valore $\theta_0$ del parametro. L'insieme dei valori $\theta_0$ che il test non rifiuta è un insieme di confidenza di livello almeno $1-\alpha$, cioè contiene il vero valore del parametro con probabilità almeno $1-\alpha$ (capitolo 10). Infatti, se il parametro vale $\theta$, la probabilità che $\theta$ appartenga all'insieme coincide con la probabilità di mancato rifiuto dell'ipotesi vera $\theta_0=\theta$, che è almeno $1-\alpha$.

Nel caso della media normale con varianza ignota, la condizione $|t_{\mathrm{oss}}|<t_{n-1,1-\frac{\alpha}{2}}$ equivale a richiedere che $\mu_0$ sia tra i due estremi $\bar x\pm t_{n-1,1-\frac{\alpha}{2}}\dfrac{s}{\sqrt n}$, cioè nell'intervallo t del capitolo 10. Negli estremi $|t_{\mathrm{oss}}|$ è uguale alla soglia e la regola rifiuta. Un singolo valore ha però probabilità nulla in un modello continuo, perciò includere o escludere gli estremi non cambia il livello, e si scrive l'intervallo chiuso come nel capitolo 10. La corrispondenza vale per intervallo e test costruiti con lo stesso modello e la stessa statistica.

Nell'esempio l'intervallo al $95\%$ è $96\pm2{,}131\cdot2=96\pm4{,}262$, cioè $[91{,}738;\ 100{,}262]$. Il valore $\mu_0=100$ è interno all'intervallo, perciò il test bilatero al livello $0{,}05$ non rifiuta $H_0:\mu=100$.

::grafico{f="abs(96-x)/2;2.131" segmenti="91.738,0,91.738,2.131;100.262,0,100.262,2.131" linee="91.738,0 100.262,0" punti="91.738,0,pieno;100.262,0,pieno;100,2,pieno" etichette="100.4,1.6,μ₀ = 100" xmin=86.3 xmax=105 ymin=-0.5 ymax=4.6 nomi="μ₀,|t|" legenda="|t_{\mathrm{oss}}(\mu_0)|;t_{15,0{,}975}" titolo="Valore assoluto della statistica t in funzione del valore nullo $\mu_0$, con $\bar x=96$, $s=8$ e $n=16$. I valori di $\mu_0$ non rifiutati formano l'intervallo $[91{,}738;\ 100{,}262]$."}

Per l'alternativa inferiore il test rifiuta se $\dfrac{(\bar x-\mu_0)\sqrt n}{s}\le-t_{n-1,1-\alpha}$, cioè se $\mu_0\ge\bar x+t_{n-1,1-\alpha}\dfrac{s}{\sqrt n}$. Invertire il test dà quindi un insieme illimitato inferiormente, con estremo superiore $\bar x+t_{n-1,1-\alpha}\dfrac{s}{\sqrt n}$. Un valore nullo sopra l'estremo è rifiutato perché la media osservata è molto minore di quel valore. Si usa il quantile di ordine $1-\alpha$ perché tutta la probabilità di rifiuto al confine nullo sta in una sola coda. Nell'esempio l'estremo è $96+1{,}753\cdot2\approx99{,}51$, quindi il test inferiore rifiuta $H_0:\mu\ge100$, come nell'esempio del test t.

:::
