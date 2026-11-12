---
titolo: "Test di ipotesi, potenza e chi quadrato"
sommario: "Dalle ipotesi alla decisione statistica, con potenza, test per medie, proporzioni e varianze, e analisi dei conteggi."
---

## Ipotesi e regola di decisione

:::definizione{#ipotesi titolo="Ipotesi nulla e alternativa"}

Sia $\theta$ il parametro di un modello probabilistico, per esempio la media $\mu$ della durata di un componente. L'**ipotesi nulla** $H_0$ specifica l'insieme $\Theta_0$ dei valori da sottoporre a verifica. L'**alternativa** $H_1$ specifica l'insieme $\Theta_1$ dei valori ai quali la domanda di ricerca si riferisce. I due insiemi sono disgiunti. L'ipotesi nulla è semplice quando specifica una sola distribuzione del campione. È composta quando ne ammette più di una, per esempio quando stabilisce un valore per la media e lascia ignota la varianza.

Per studiare uno scostamento da un valore di riferimento $\mu_0$, si considera $H_0:\mu=\mu_0$ con $H_1:\mu\ne\mu_0$. Se interessa stabilire che la media è maggiore di $\mu_0$, si usa $H_0:\mu\le\mu_0$ con $H_1:\mu>\mu_0$. Per un calo si usano $H_0:\mu\ge\mu_0$ e $H_1:\mu<\mu_0$. Nei test unilateri per una media, la probabilità di rifiuto sotto $H_0$ è spesso massima al confine $\mu=\mu_0$. In questo caso il calcolo si esegue al confine e controlla anche i valori interni dell'ipotesi nulla.

:::

:::definizione{#regione-critica titolo="Statistica test e regione critica"}

Una **statistica test** $T$ è una funzione del campione. Il valore $t_{\mathrm{oss}}$ si ottiene inserendo nella funzione i dati osservati. La **regione critica** $C$ è l'insieme dei valori della statistica per i quali la regola prescrive il rifiuto di $H_0$. Si costruisce conoscendo la distribuzione di $T$ sotto $H_0$ e stabilendo quali risultati costituiscono evidenza a favore di $H_1$.

Se valori grandi di $T$ favoriscono l'alternativa, si sceglie una soglia $c$ e si rifiuta per $T\ge c$. In un test di diminuzione, con la stessa statistica crescente rispetto alla media, la regione critica è invece a sinistra. Per una statistica simmetrica attorno a zero e un'alternativa bilatera, una regola usuale è rifiutare per $|T|\ge c$.

:::

:::esempio{titolo="Direzione fissata dalla domanda"}

Una durata media di almeno $500$ ore soddisfa il requisito di progetto. Se l'indagine cerca evidenza che il requisito sia violato, le ipotesi sono $H_0:\mu\ge500$ e $H_1:\mu<500$. Una media campionaria di $510$ ore è dalla parte opposta a quella che motiverebbe il rifiuto. La scelta dell'alternativa deriva dal requisito ed è fissata prima del campionamento. Scegliere la coda in base al segno osservato includerebbe, di fatto, entrambe le code e modificherebbe la probabilità di errore della regola.

:::

## Errori e potenza

:::definizione{#errori titolo="Livello, errore di secondo tipo e potenza"}

Per ogni valore $\theta$, la **funzione di potenza** $\pi(\theta)=P_\theta(T\in C)$ è la probabilità di rifiutare l'ipotesi nulla se il parametro vale $\theta$. Il pedice di $P_\theta$ indica la distribuzione con cui si calcola la probabilità. Per $\theta\in\Theta_0$ il rifiuto è un **errore di primo tipo**. Un test ha livello $\alpha$ se
$$
\sup_{\theta\in\Theta_0}\pi(\theta)\le\alpha.
$$
Per $\theta\in\Theta_1$ il mancato rifiuto è un errore di secondo tipo, con probabilità $\beta(\theta)=1-\pi(\theta)$. La probabilità $\beta(\theta)$ dipende quindi dal particolare effetto che si vuole rilevare.

Se, sotto un certo valore alternativo, una procedura rifiuta in $84$ campioni su $100$ nel lungo periodo, la sua potenza in quel valore è $0{,}84$ e $\beta$ vale $0{,}16$. La potenza può essere più bassa per un valore alternativo più vicino al confine dell'ipotesi nulla.

:::

::::teorema{#potenza-z titolo="Potenza del test z unilatero superiore"}

Sia $\bar X$ la media di $n$ osservazioni indipendenti con legge normale di media $\mu$ e deviazione standard nota $\sigma>0$. Sia $z_p$ il quantile di ordine $p$ della normale standard e sia $\Phi$ la sua funzione di ripartizione. Per il test di $H_0:\mu\le\mu_0$ contro $H_1:\mu>\mu_0$, la soglia sulla media e la potenza sono
$$
\begin{aligned}
c&=\mu_0+z_{1-\alpha}\frac{\sigma}{\sqrt n},\\[6pt]
\pi(\mu)&=1-\Phi\!\left(z_{1-\alpha}-
          \frac{(\mu-\mu_0)\sqrt n}{\sigma}\right).
\end{aligned}
$$

:::dimostrazione

La soglia si ricava dalla coda superiore della distribuzione della media al confine $\mu_0$. Per calcolare la potenza si mantiene questa soglia e si usa la distribuzione di $\bar X$ quando la media è $\mu$. Infatti $\dfrac{(\bar X-\mu)\sqrt n}{\sigma}$ ha legge normale standard, quindi
$$
P_\mu(\bar X\ge c)=1-\Phi\!\left(\frac{(c-\mu)\sqrt n}{\sigma}\right).
$$
Sostituendo $c$ si ottiene la formula. La potenza cresce con $\mu$, perciò il massimo di $\pi(\mu)$ per $\mu\le\mu_0$ è $\pi(\mu_0)=\alpha$.

:::

::::

:::esempio{titolo="Una soglia, due distribuzioni campionarie"}

Con $\mu_0=50$, $\sigma=10$, $n=25$ e $\alpha=0{,}05$ si ha $\dfrac{\sigma}{\sqrt n}=2$. Poiché $z_{0{,}95}\approx1{,}645$, la soglia sulla media è $c\approx53{,}29$. Se $\mu=54$, il valore standardizzato della soglia è circa $-0{,}355$. La probabilità di rifiuto è quindi $1-\Phi(-0{,}355)\approx0{,}639$.

::grafico{f="exp(-x^2/2)/sqrt(2*PI);exp(-(x-2)^2/2)/sqrt(2*PI)" area="exp(-(x-2)^2/2)/sqrt(2*PI);0;1.645;5.5" segmenti="1.645,0,1.645,0.375" etichette="1.645,-0.072,c" xmin=-4 xmax=5.5 ymin=-0.095 ymax=0.48 nomi="z,y" legenda="\mu=50;\mu=54" titolo="Soglia sulla scala di Z e area di rifiuto sotto l'alternativa."}

Sulla scala standardizzata rispetto a $\mu_0$, le due distribuzioni hanno centri $0$ e $2$. La soglia è la stessa in entrambi i casi. Se si riduce $\alpha$ mantenendo fisso $n$, la soglia si sposta verso destra e la potenza per $\mu=54$ diminuisce. A parità di livello, aumentare $n$ riduce l'errore standard e rende più distinguibili le due distribuzioni della media.

:::

:::osservazione{titolo="Numerosità per una potenza assegnata"}

Per pianificare la rilevazione di un aumento $\delta=\mu-\mu_0>0$, si fissa una potenza minima $1-\beta_\star$. Nel modello normale con varianza nota e alternativa superiore, la condizione di potenza equivale a
$$
\frac{\delta\sqrt n}{\sigma}\ge z_{1-\alpha}+z_{1-\beta_\star}.
$$
La formula segue isolando la soglia standardizzata nella formula di $\pi(\mu_0+\delta)$ e usando la simmetria della normale. Quando il membro destro è positivo, si eleva al quadrato dopo aver isolato $\sqrt n$ e si arrotonda all'intero superiore. Per esempio, con $\delta=4$, $\sigma=10$, $\alpha=0{,}05$ e potenza minima $0{,}80$, si ottiene $n\ge(2{,}487\cdot 2{,}5)^2\approx38{,}66$, quindi servono almeno $39$ osservazioni. Se la differenza da rilevare si dimezza e gli altri dati restano fissi, la soglia teorica su $n$ quadruplica.

:::

:::esempio{titolo="Livello effettivo con un conteggio discreto"}

Sia $X$ il numero di successi in cinque prove indipendenti. Sotto $H_0:p=\dfrac12$ il test superiore rifiuta se $X=5$. Il rischio di rifiuto sotto $H_0$ è $\dfrac1{32}$, cioè $0{,}03125$. Estendendo il rifiuto a quattro successi, il rischio salirebbe a $\dfrac6{32}=0{,}1875$, perché si aggiungerebbero le cinque sequenze con un solo insuccesso. Fra le due regioni considerate, soltanto la prima ha livello al più $0{,}05$. Sotto l'alternativa $p=\dfrac34$, la stessa regione ha potenza $\left(\dfrac34\right)^5\approx0{,}2373$. In entrambi i calcoli si sommano le probabilità della stessa regione critica usando la legge del conteggio per il parametro indicato.

:::

## Valore p e significatività

:::definizione{#p-value titolo="Valore p e ordinamento dei risultati"}

Sia $t_{\mathrm{oss}}$ il valore osservato di una statistica test. Il **valore p** è la probabilità, sotto l'ipotesi nulla, di osservare un risultato almeno tanto sfavorevole a $H_0$ quanto quello osservato, secondo la direzione o la regola del test. Se l'ipotesi nulla ammette più distribuzioni, si può prendere il massimo, o il supremo, di tale probabilità sui valori nulli. Nei casi in cui il massimo si raggiunge al confine, basta usare la distribuzione al confine.

Per una statistica normale standard sotto $H_0$ e un valore osservato $z_{\mathrm{oss}}$, valgono le formule
- $p=1-\Phi(z_{\mathrm{oss}})$ per l'alternativa superiore.
- $p=\Phi(z_{\mathrm{oss}})$ per l'alternativa inferiore.
- $p=2[1-\Phi(|z_{\mathrm{oss}}|)]$ per il test bilatero simmetrico.

Si rifiuta $H_0$ se $p\le\alpha$. Per i test continui trattati qui, il valore p è la soglia di livello a partire dalla quale il risultato osservato porta al rifiuto.

:::

:::esempio{titolo="Una coda e due code per la stessa osservazione"}

Si osserva $z_{\mathrm{oss}}=-2$. Poiché $\Phi(-2)\approx0{,}02275$, il valore p è circa $0{,}02275$ per l'alternativa inferiore, $0{,}97725$ per la superiore e $0{,}04550$ per quella bilatera. Nel caso bilatero i risultati almeno altrettanto estremi sono quelli a sinistra di $-2$ e a destra di $2$. Poiché la normale standard è simmetrica, si sommano due aree uguali.

::grafico{f="exp(-x^2/2)/sqrt(2*PI)" area="exp(-x^2/2)/sqrt(2*PI);0;-4.5;-2|exp(-x^2/2)/sqrt(2*PI);0;2;4.5" segmenti="-2,0,-2,0.054;2,0,2,0.054" xmin=-4.5 xmax=4.5 ymin=-0.06 ymax=0.46 nomi="z,y" legenda="\varphi(z)" titolo="Le due code colorate contribuiscono al valore p bilatero per z osservato uguale a −2."}

:::

:::attenzione{titolo="Il valore p dipende dal modello nullo"}

Un valore p pari a $0{,}04$ non assegna all'ipotesi nulla una probabilità del $4\%$. La probabilità è calcolata assumendo la distribuzione nulla e riguarda un insieme di risultati campionari. Inoltre, a parità di differenza osservata, un errore standard più piccolo può produrre un valore p minore. Per valutare la rilevanza pratica di una differenza si considerano la stima, la sua incertezza e l'unità di misura. Se il test dà $p=0{,}18$ al livello $0{,}05$, il mancato rifiuto lascia aperta anche la possibilità che il campione sia poco informativo su effetti piccoli.

:::

## Test per una media

::::teorema{#media titolo="Distribuzioni nulle dei test z e t per una media"}

Siano $X_1,\ldots,X_n$ osservazioni indipendenti con legge $N(\mu,\sigma^2)$, $\sigma>0$. Sotto $H_0:\mu=\mu_0$, se $\sigma$ è nota, la statistica
$$
Z=\frac{(\bar X-\mu_0)\sqrt n}{\sigma}
$$
ha distribuzione normale standard. Se $\sigma$ è ignota e $n\ge2$, si usa la deviazione standard campionaria corretta $S$, ottenuta come radice della varianza con divisore $n-1$. Allora
$$
T=\frac{(\bar X-\mu_0)\sqrt n}{S}\sim t_{n-1}.
$$

:::dimostrazione

Sotto $H_0$, la media campionaria è normale di media $\mu_0$ e varianza $\dfrac{\sigma^2}{n}$. La standardizzazione dà la legge di $Z$. Inoltre, per un campione normale, $\bar X$ è indipendente da $S^2$ e $U=\dfrac{(n-1)S^2}{\sigma^2}$ ha legge chi quadrato con $n-1$ gradi di libertà. Quindi $T=\dfrac{Z}{\sqrt{\dfrac{U}{n-1}}}$. Per definizione, il rapporto di una normale standard e della radice di una chi quadrato indipendente divisa per i suoi gradi di libertà ha legge t di Student con gli stessi gradi di libertà.

:::

::::

:::osservazione

Si indica con $t_{\nu,p}$ il quantile di ordine $p$ della t di Student con $\nu$ gradi di libertà. Per il test bilatero si confronta $|t_{\mathrm{oss}}|$ con $t_{\nu,1-\frac{\alpha}{2}}$. Per l'alternativa superiore si usa $t_{\nu,1-\alpha}$ e per quella inferiore $t_{\nu,\alpha}$. Le stesse regole valgono con i quantili $z_p$ per il test z. Le soglie t tengono conto della variabilità aggiuntiva dovuta alla stima di $\sigma$. Quando le osservazioni sono indipendenti e identicamente distribuite, con varianza positiva e finita, il teorema centrale del limite e la consistenza di $S$ giustificano un'approssimazione per grandi campioni anche senza normalità. La qualità dell'approssimazione dipende dalla forma della distribuzione.

:::

:::esempio{titolo="Una media osservata sotto il riferimento"}

Su $16$ osservazioni normali si hanno $\bar x=96$, $s=8$ e si verifica $H_0:\mu\ge100$ contro $H_1:\mu<100$. L'errore standard stimato vale $\dfrac{8}{\sqrt{16}}=2$, quindi $t_{\mathrm{oss}}=-2$. Al livello $0{,}05$ la soglia inferiore è $t_{15,0{,}05}\approx-1{,}753$. Poiché $-2<-1{,}753$, si rifiuta $H_0$. Con un'alternativa bilatera allo stesso livello, il confronto sarebbe con $t_{15,0{,}975}\approx2{,}131$ e il risultato sarebbe di mancato rifiuto.

:::

## Proporzioni e confronto di campioni

:::definizione{#proporzioni titolo="Test score per una o due proporzioni"}

Per $n$ prove di Bernoulli indipendenti con probabilità di successo $p$, sia $X$ il numero di successi e sia $\widehat p=\dfrac{X}{n}$. Sotto $H_0:p=p_0$, con $0<p_0<1$, la varianza di $\widehat p$ è $\dfrac{p_0(1-p_0)}{n}$. Il **test score** standardizza lo scostamento usando questa varianza:
$$
Z=\frac{\widehat p-p_0}{\sqrt{\dfrac{p_0(1-p_0)}{n}}}.
$$
La distribuzione nulla di $Z$ si approssima con la normale standard se i conteggi attesi $np_0$ e $n(1-p_0)$ sono sufficientemente grandi. Quando l'approssimazione è inadeguata, si può calcolare una coda esatta di $X\sim\operatorname{Bin}(n,p_0)$. Per il test binomiale bilatero va specificato il criterio di ordinamento, perché diverse convenzioni possono dare valori p diversi.

Con due campioni di Bernoulli indipendenti, di numerosità $n_1,n_2$ e con conteggi $x_1,x_2$, l'ipotesi $H_0:p_1=p_2$ ammette una proporzione comune ignota. La si stima con $\widehat p_{\mathrm c}=\dfrac{x_1+x_2}{n_1+n_2}$. Se la proporzione combinata appartiene a $(0,1)$ e i conteggi attesi sono adeguati, si usa
$$
Z=\frac{\widehat p_1-\widehat p_2}
{\sqrt{\widehat p_{\mathrm c}(1-\widehat p_{\mathrm c})
       \left(\frac1{n_1}+\frac1{n_2}\right)}}.
$$
Per esempio, con $60$ successi su $100$ e $20$ su $50$, la stima comune è $\dfrac{80}{150}$, perché sotto l'ipotesi nulla ogni osservazione contribuisce con lo stesso peso alla stima di $p$.

:::

:::definizione{#confronto-medie titolo="Test di Welch e test t appaiato"}

Per due campioni indipendenti, con $n_1,n_2\ge2$, varianze ignote e $H_0:\mu_1-\mu_2=\Delta_0$, si pone $V_i=\dfrac{S_i^2}{n_i}$, per $i=1,2$. La statistica di Welch e i suoi gradi di libertà approssimati sono
$$
T_W=\frac{\bar X_1-\bar X_2-\Delta_0}{\sqrt{V_1+V_2}},
\qquad
\nu=\frac{(V_1+V_2)^2}{\frac{V_1^2}{n_1-1}+\frac{V_2^2}{n_2-1}}.
$$
Il test usa come riferimento la t di Student con il valore osservato di $\nu$. L'approssimazione è usuale per campioni normali con varianze positive anche diverse. Con dati non normali si valuta l'adeguatezza dell'approssimazione campionaria.

Se le due misure appartengono alla stessa unità, si formano le differenze $D_i=X_{1i}-X_{2i}$ con segno coerente con la domanda. Si usa la statistica $T=\dfrac{(\bar D-\Delta_0)\sqrt n}{S_D}$, con $n$ numero di coppie. La legge t con $n-1$ gradi di libertà è esatta sotto $H_0$ per differenze indipendenti tra le coppie, normalmente distribuite e di varianza positiva. La varianza da usare è quella delle differenze, che incorpora la dipendenza delle due misure sulla stessa unità.

:::

:::esempio{titolo="Due misure sulla stessa unità"}

Su nove pezzi si misura lo spessore prima e dopo un trattamento. Definendo $D$ come spessore dopo meno spessore prima, si ottengono $\bar d=0{,}6$ e $s_D=0{,}9$ nella stessa unità. Si verifica $H_0:\mu_D\le0$ contro $H_1:\mu_D>0$. L'errore standard stimato delle differenze è $\dfrac{0{,}9}{\sqrt9}=0{,}3$ e la statistica osservata vale $2$. Sotto normalità delle differenze, con coppie indipendenti, il riferimento è $t_8$. Il quantile $t_{8,0{,}95}\approx1{,}860$ è minore di $2$, quindi il test rifiuta al livello $0{,}05$. L'unità campionaria è il pezzo e la numerosità è nove.

:::

:::esempio{titolo="Gradi di libertà nel confronto di Welch"}

Due gruppi indipendenti di nove osservazioni normali danno medie campionarie $31$ e $26$ e deviazioni standard corrette $6$ e $3$. Si verifica l'uguaglianza delle medie con alternativa bilatera. Le varianze stimate delle medie sono $4$ e $1$, quindi $t_W=\dfrac{5}{\sqrt5}\approx2{,}236$. La formula per $\nu$ dà
$$
\nu=\frac{(4+1)^2}{\frac{4^2}{8}+\frac{1^2}{8}}
=\frac{200}{17}\approx11{,}765.
$$
Il quantile di ordine $0{,}975$ del riferimento t è circa $2{,}184$, quindi il valore osservato conduce al rifiuto al livello $0{,}05$. La maggiore incertezza della prima media pesa anche nel calcolo dei gradi di libertà, che qui sono inferiori a $9+9-2=16$.

:::

## Adattamento e indipendenza

:::definizione{#chi-quadrato titolo="Statistica di Pearson e frequenze attese"}

Si indicano con $O_j$ le frequenze osservate e con $E_j>0$ le frequenze attese sotto l'ipotesi nulla. La **statistica chi quadrato di Pearson** è
$$
Q=\sum_j\frac{(O_j-E_j)^2}{E_j}.
$$
Ogni addendo misura lo scostamento quadratico di un conteggio rispetto al suo valore atteso. La somma cresce se aumentano gli scostamenti, quindi il test usa la coda destra.

Nel **test di adattamento** si confronta la distribuzione delle osservazioni in $k$ categorie con probabilità teoriche $p_1,\ldots,p_k$. Per $n$ unità indipendenti e classi mutuamente esclusive ed esaustive, si pone $E_j=np_j$. Con probabilità fissate e positive, la legge nulla asintotica di $Q$ è chi quadrato con $k-1$ gradi di libertà. Il vincolo $\sum_jO_j=n$ elimina un grado di libertà. Nel caso regolare in cui si stimano $d$ parametri dai conteggi con massima verosimiglianza multinomiale, i gradi di libertà diventano $k-1-d$.

:::

:::definizione{#indipendenza titolo="Test di indipendenza in una tabella"}

In una tabella con $r$ righe e $c$ colonne si denota con $n_{i\cdot}$ il totale della riga $i$, con $n_{\cdot j}$ il totale della colonna $j$ e con $n$ la numerosità complessiva. Sotto l'indipendenza la probabilità di cella è il prodotto delle probabilità marginali. Sostituendo le proporzioni marginali campionarie si ricava
$$
E_{ij}=n\frac{n_{i\cdot}}n\frac{n_{\cdot j}}n
=\frac{n_{i\cdot}n_{\cdot j}}n.
$$
La statistica di Pearson si ottiene sommando gli addendi su tutte le celle. Con unità indipendenti, margini positivi, nessuno zero strutturale e conteggi attesi adeguati, la distribuzione di riferimento è approssimativamente chi quadrato con $(r-1)(c-1)$ gradi di libertà. Fissati i margini, è sufficiente specificare le celle delle prime $r-1$ righe e delle prime $c-1$ colonne per ricostruire la tabella.

:::

:::esempio{titolo="Indipendenza in una tabella due per due"}

Per due gruppi di $40$ unità si osservano rispettivamente $30$ e $10$ successi. La colonna dei successi totalizza $40$ su $80$, quindi l'atteso dei successi in ciascuna riga è $\dfrac{40\cdot40}{80}=20$. Anche l'atteso dei mancati successi vale $20$ in ciascuna riga. Tutti e quattro gli scostamenti assoluti sono $10$, perciò $Q=4\cdot\dfrac{100}{20}=20$. I gradi di libertà sono $(2-1)(2-1)=1$. Poiché il quantile di ordine $0{,}95$ è circa $3{,}841$, si rifiuta l'indipendenza al livello $0{,}05$.

:::

:::attenzione{titolo="Frequenze piccole e unità ripetute"}

Negli esercizi, avere almeno cinque attesi in ogni cella è una condizione pratica per usare l'approssimazione di Pearson. Un atteso piccolo dipende dai margini o dalle probabilità nulle, quindi il controllo si esegue sugli attesi. In una tabella $2\times2$ con pochi dati si può usare un test esatto di Fisher, condizionando ai margini. Una tabella che riporta due misure sulle stesse persone richiede invece una procedura per dati appaiati, perché trattare le due misure come unità indipendenti altera la distribuzione nulla.

:::

:::osservazione{titolo="Scostamenti globali e celle che contribuiscono"}

Un rifiuto nel test di adattamento significa che gli scostamenti complessivi sono grandi rispetto al modello nullo. Per individuare quali categorie contribuiscono di più si possono calcolare separatamente i rapporti $\dfrac{O_j-E_j}{\sqrt{E_j}}$. Il loro quadrato è il contributo alla statistica, mentre il segno distingue un eccesso da un difetto di osservazioni. Per esempio, con due celle attese rispettivamente pari a $10$ e $40$, uno scostamento di $4$ contribuisce $1{,}6$ nella prima e $0{,}4$ nella seconda. Gli stessi scostamenti assoluti hanno quindi pesi diversi. La significatività del test globale e un'eventuale verifica separata sulle celle rispondono a domande diverse.

:::

## Varianza, confronti multipli e intervalli

:::teorema{#varianza-test titolo="Test chi quadrato per la varianza"}

Sia $S^2$ la varianza campionaria corretta di $n\ge2$ osservazioni indipendenti da una popolazione normale. Sotto $H_0:\sigma^2=\sigma_0^2$, con $\sigma_0^2>0$, la statistica $Q_\sigma=\dfrac{(n-1)S^2}{\sigma_0^2}$ ha legge $\chi^2_{n-1}$. Si indica con $\chi^2_{\nu,p}$ il quantile di ordine $p$ per $\nu$ gradi di libertà. Per il test bilatero a code uguali, si rifiuta se $Q_\sigma$ raggiunge o supera $\chi^2_{n-1,1-\frac{\alpha}{2}}$ oppure è al più $\chi^2_{n-1,\frac{\alpha}{2}}$. Per l'alternativa superiore si usa la sola coda destra e per quella inferiore la sola coda sinistra.

Poiché la legge chi quadrato è asimmetrica, due code di uguale probabilità hanno estremi a distanze diverse dal centro. Per esempio, con $\nu=9$ e $\alpha=0{,}05$ gli estremi dell'intervallo centrale sono circa $2{,}700$ e $19{,}023$.

:::

::::teorema{#multipli titolo="Controllo dell'errore familiare con Bonferroni"}

Si eseguano $m\ge1$ test e si voglia controllare al livello $\alpha$ la probabilità di almeno un rifiuto erroneo tra tutte le decisioni. Se ogni test è eseguito a livello $\dfrac{\alpha}{m}$, il rischio familiare è al più $\alpha$, anche in presenza di dipendenza fra le statistiche test.

:::dimostrazione

Per ogni ipotesi nulla vera, sia $A_j$ l'evento del suo rifiuto. L'evento che si commetta almeno un errore è l'unione degli $A_j$. La probabilità dell'unione è al più la somma delle probabilità. Poiché ogni addendo vale al più $\dfrac{\alpha}{m}$ e gli addendi sono al più $m$, la somma è al più $\alpha$.

:::

Per esempio, con cinque test e rischio familiare $0{,}05$, ogni decisione si prende a livello $0{,}01$. Si ottiene lo stesso confronto moltiplicando ciascun valore p per cinque, troncando a uno, e confrontando con $0{,}05$.

::::

:::osservazione{#dualita titolo="Inversione di un test bilatero"}

Si consideri una famiglia di test di livello $\alpha$ per ogni valore $\theta_0$ del parametro. L'insieme dei valori $\theta_0$ che il test non rifiuta è un insieme di confidenza di livello almeno $1-\alpha$. Infatti, se il parametro vale $\theta$, la probabilità che $\theta$ appartenga all'insieme coincide con la probabilità di mancato rifiuto sotto l'ipotesi vera, che è almeno $1-\alpha$.

Nel caso della media normale con varianza ignota, la condizione $|t_{\mathrm{oss}}|<t_{n-1,1-\frac{\alpha}{2}}$ equivale a richiedere che $\mu_0$ sia tra i due estremi $\bar x\pm t_{n-1,1-\frac{\alpha}{2}}\dfrac{s}{\sqrt n}$. Per la regola $p\le\alpha$, i valori esattamente agli estremi sono rifiutati. La convenzione di includerli nell'intervallo chiuso ha lo stesso livello di copertura nel modello continuo. La corrispondenza si usa con intervallo e test costruiti dallo stesso modello e dalla stessa statistica.

Per l'alternativa inferiore, invertire il test t dà invece un insieme illimitato inferiormente. Il suo estremo superiore è $\bar x+t_{n-1,1-\alpha}\dfrac{s}{\sqrt n}$. Un valore nullo sopra l'estremo è rifiutato perché la media osservata si trova troppo a sinistra. Si usa qui il quantile di ordine $1-\alpha$, perché tutta la probabilità di rifiuto al confine nullo è assegnata a una sola coda.

:::
