---
titolo: Elettricità, circuiti e magnetismo
sommario: Dal segno delle cariche ai bilanci di energia, dai circuiti ai condensatori, fino alla forza magnetica e all’induzione.
---

## Carica e interazione: scegliere il sistema

:::osservazione
Strofinando due materiali si possono trasferire elettroni: uno acquista carica negativa e l’altro perde la stessa quantità di carica negativa. Non si crea carica dal nulla. Un corpo neutro contiene cariche di entrambi i segni con somma nulla; non è privo di particelle cariche. La conservazione riguarda la **somma algebrica** delle cariche del sistema isolato, anche quando cambia la distribuzione al suo interno.
:::

:::definizione{#coulomb titolo="Carica e legge di Coulomb"}
La carica si misura in coulomb, $1\,\mathrm C=1\,\mathrm{A\,s}$. Nei corpi ordinari la carica netta è un multiplo intero della carica elementare $e\simeq1{,}602\cdot10^{-19}\,\mathrm C$: il protone ha carica $+e$, l’elettrone $-e$. Fra due cariche puntiformi ferme nel vuoto, separate da $r$, il modulo della forza è
$$
F=k_e\dfrac{|q_1q_2|}{r^2},\qquad k_e=\dfrac{1}{4\pi\varepsilon_0}\simeq8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}.
$$
La forza è lungo la congiungente: repulsiva per segni uguali, attrattiva per segni opposti.
:::

:::osservazione
Prima si convertono distanze e cariche, poi si calcola il modulo, infine si assegna il verso. Il segno negativo di una componente indica il verso rispetto all’asse scelto: non esiste un modulo negativo. Le forze reciproche hanno uguale modulo anche con cariche differenti. Raddoppiare soltanto una carica raddoppia la forza; raddoppiare la distanza la riduce a un quarto.

![Due cariche opposte e forze di attrazione uguali; confronto della forza a distanza r e 2r.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/coulomb-it.svg)

Il modello puntiforme richiede dimensioni piccole rispetto alla distanza, oppure una simmetria che giustifichi la riduzione. Due sfere conduttrici molto vicine ridistribuiscono la carica: usare automaticamente la distanza fra i centri può fallire. Per più sorgenti si sommano **vettori forza**, non tutti i moduli. Con tre cariche allineate basta un asse con segno; in un piano si sommano separatamente le componenti. Se due sferette conduttrici identiche vengono collegate, lontano da altre sorgenti, la simmetria e l’equipotenzialità portano alla ripartizione uguale della carica totale. L’uguaglianza non deriva dalla sola conservazione e non vale automaticamente per conduttori diversi.
:::

## Campo elettrico: una proprietà dello spazio

:::osservazione
Una sorgente modifica il comportamento di altre cariche anche senza contatto. Per descrivere questa influenza separatamente dalla particella usata per misurarla, si introduce il campo. La carica di prova deve essere abbastanza piccola da non alterare sensibilmente la distribuzione delle sorgenti.
:::

:::definizione{#campo-elettrico titolo="Campo, sovrapposizione e accelerazione"}
Il campo elettrico è $\vec E=\dfrac{\vec F}{q}$, con $q$ considerata con il proprio segno; il suo verso è quello della forza su una carica positiva. Per una sorgente puntiforme $Q$ nel vuoto:
$$
\vec E=k_e\dfrac{Q}{r^2}\hat r,\qquad \vec E_{\mathrm{tot}}=\sum_i\vec E_i,\qquad \vec a=\dfrac{q\vec E}{m}.
$$
Il versore $\hat r$ punta dalla sorgente al punto di osservazione. Le unità sono $\mathrm{N/C}$, equivalenti a $\mathrm{V/m}$; l’ultima relazione suppone trascurabili le altre forze.
:::

:::osservazione
Le linee sono tangenti al campo, escono dalle cariche positive ed entrano nelle negative; dove sono più fitte il campo è qualitativamente più intenso. Non si intersecano dove il campo ha direzione definita. **Non sono traiettorie generali**: la forza determina l’accelerazione, mentre la velocità dipende anche dalle condizioni iniziali. Una carica negativa accelera contro il campo, ma può inizialmente muoversi nel suo verso e rallentare.

In un campo uniforme diretto lungo $+y$, una particella entra con velocità $v_0$ lungo $+x$. Senza altre forze e nel regime non relativistico,
$$
x=v_0t,\qquad y=\dfrac{qE}{2m}t^2,\qquad y=\dfrac{qE}{2mv_0^2}x^2.
$$
La traiettoria è parabolica finché la particella resta nella zona uniforme; fuori dalle armature questa approssimazione non descrive i campi di bordo. Il tempo di attraversamento di una zona lunga $L$ è $\dfrac{L}{v_0}$, non la lunghezza della curva divisa per una velocità costante.

![Campo uniforme verso l’alto; una carica positiva entra verso destra e segue una parabola, distinta dalle linee verticali.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/campo-moto-it.svg)

Al centro fra due cariche uguali positive i campi si annullano. Fra due cariche opposte di uguale modulo, invece, entrambi puntano dalla positiva alla negativa e si sommano. Disegnare prima i singoli contributi evita di confondere la somma vettoriale del campo con quella scalare del potenziale.
:::

## Potenziale ed energia: mantenere il segno

:::osservazione
Un voltmetro confronta due punti: il valore assoluto assegnato al potenziale dipende da uno zero scelto, mentre la differenza misurabile non cambia aggiungendo la stessa costante ovunque. Il potenziale descrive le sorgenti; l’energia potenziale riguarda anche la carica che viene collocata nel campo.
:::

:::teorema{#potenziale titolo="Lavoro elettrostatico"}
Con sorgenti ferme, $\Delta U=q\Delta V$ e il lavoro elettrico da A a B è
$$
W_e=q(V_A-V_B)=-\Delta U,\qquad \Delta K=-q\Delta V+W_{\mathrm{ext}}.
$$
Per cariche puntiformi nel vuoto con zero all’infinito:
$$
V(P)=k_e\sum_i\dfrac{Q_i}{r_i},\qquad U_{\mathrm{sys}}=k_e\sum_{i<j}\dfrac{q_iq_j}{r_{ij}}.
$$
Nell’energia della distribuzione ogni coppia si conta una volta; sono escluse le energie proprie delle cariche puntiformi.
:::

:::osservazione
Per una sola coppia $U=\dfrac{k_eQq}{r}$. Il potenziale non include la carica di prova: raddoppiare questa carica raddoppia $U$ e la forza, non $V$ o $\vec E$. Il volt è $\mathrm{J/C}$; l’elettronvolt è invece energia, $1\,\mathrm{eV}=e\cdot1\,\mathrm V\simeq1{,}602\cdot10^{-19}\,\mathrm J$.

In un campo uniforme $\Delta V=-\vec E\cdot\Delta\vec r$. Lungo il campo il potenziale diminuisce; lungo una direzione perpendicolare non cambia. In una dimensione $E_x=-\dfrac{dV}{dx}$: conta la **pendenza**, non l’altezza del grafico. Un punto a potenziale zero può avere campo non nullo. Su una superficie equipotenziale il lavoro elettrostatico tra due punti è nullo, anche se il percorso non è rettilineo.

![Grafico del potenziale lineare decrescente e campo costante positivo; un cambio dello zero non cambia la pendenza.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/potenziale-it.svg)

Se un elettrone attraversa spontaneamente una differenza $\Delta V>0$, il prodotto $q\Delta V$ è negativo: perde energia potenziale e, in assenza di altro lavoro, guadagna energia cinetica. La frase «le cariche vanno verso potenziali minori» vale per la tendenza iniziale di una carica positiva libera, non per ogni moto. Per ricavare una rapidità si usa $K=\dfrac{mv^2}{2}$ solo se il risultato è molto minore della velocità della luce. Se $K_i-q\Delta V$ diventasse negativo, la particella non potrebbe raggiungere quel punto con le sole forze considerate.
:::

## Conduttori e dielettrici: due risposte differenti

:::osservazione
Avvicinando una bacchetta positiva a un conduttore neutro isolato, gli elettroni mobili si spostano verso il lato vicino. Il lato lontano presenta un deficit di elettroni. La carica netta resta zero, ma la distribuzione è cambiata; l’attrazione può prevalere perché le cariche opposte sono più vicine.
:::

:::definizione{#materiali titolo="Equilibrio e polarizzazione"}
In equilibrio elettrostatico il campo all’interno del **materiale conduttore** è nullo e il conduttore è equipotenziale. L’induzione elettrostatica ridistribuisce le cariche libere. In un dielettrico, invece, gli spostamenti di cariche legate e l’orientamento dei dipoli producono **polarizzazione** senza una libera migrazione attraverso tutto il materiale.
:::

:::osservazione
Se nel metallo persistesse un campo, le cariche mobili accelererebbero e non vi sarebbe equilibrio. La conclusione non si applica a un filo resistivo attraversato da corrente stazionaria: nel suo interno serve un campo non nullo. Né «campo nullo» significa «potenziale nullo»: un conduttore carico può essere equipotenziale a un valore diverso da zero.

![Conduttore neutro con cariche separate e dielettrico con dipoli orientati nel campo esterno.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/materiali-it.svg)

La messa a terra permette scambio di carica con un grande serbatoio. Nella carica per induzione occorre specificare l’ordine: con la bacchetta positiva vicina, collegare a terra consente l’ingresso di elettroni; scollegare prima la terra e poi allontanare la bacchetta lascia il corpo negativo. Se la terra resta collegata durante l’allontanamento, il risultato può essere diverso. Perciò «induzione» non significa sempre acquisizione di carica netta.

Un involucro conduttore chiuso in equilibrio scherma il campo elettrostatico esterno in una cavità vuota priva di cariche. Le condizioni sulla cavità sono essenziali. Per un dielettrico lineare omogeneo isotropo si scrive $\varepsilon=\varepsilon_r\varepsilon_0$. A parità di cariche libere sulle armature, la polarizzazione riduce il campo nel condensatore completamente riempito. A tensione imposta, invece, interviene il generatore fornendo ulteriore carica. Nei materiali reali possono comparire perdite e rottura dielettrica: il modello lineare non vale per campi arbitrariamente intensi.
:::

## Corrente e resistenza: leggere una misura

:::osservazione
Per descrivere una corrente si sceglie una sezione del filo e si conta la carica che la attraversa. Il verso convenzionale è quello del trasporto di carica positiva; nei metalli la deriva elettronica è opposta. In una soluzione, cationi e anioni che si muovono in versi opposti possono contribuire alla stessa corrente convenzionale. La corrente non è la velocità dei portatori né viene consumata da un resistore.
:::

:::definizione{#ohm titolo="Corrente e leggi di Ohm"}
Per corrente costante $I=\dfrac{\Delta q}{\Delta t}$, mentre in generale $I=\dfrac{dq}{dt}$. Un resistore ohmico a condizioni fisiche fissate obbedisce a
$$
\Delta V=RI,\qquad R=\rho_e\dfrac{L}{A}.
$$
La seconda relazione riguarda un conduttore uniforme di lunghezza $L$ e sezione $A$. La resistenza ha unità $\Omega=\mathrm{V/A}$ e la resistività $\rho_e$ ha unità $\Omega\,\mathrm m$.
:::

:::osservazione
La resistività caratterizza il materiale nelle condizioni considerate; la resistenza dipende anche dalla geometria. Raddoppiare il raggio di un filo cilindrico quadruplica l’area, quindi divide $R$ per quattro. Riscaldare il filo può modificare $\rho_e$: verificare l’ohmicità richiede controllare la temperatura, non soltanto misurare due grandezze.

![Grafico tensione-corrente di due resistori ohmici; la pendenza della retta V in funzione di I è la resistenza.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/ohm-it.svg)

Su un grafico di $\Delta V$ in funzione di $I$, la pendenza è $R$. Se gli assi vengono scambiati, la pendenza diventa $\dfrac{1}{R}$. Una curva non lineare permette ancora di calcolare il rapporto $\dfrac{\Delta V}{I}$ in un punto, ma non autorizza a trattarlo come resistenza costante a tutte le tensioni.

Un generatore ideale di tensione mantiene la differenza di potenziale assegnata, non una corrente prefissata. La corrente dipende dal circuito collegato; l’energia erogata proviene dal processo interno al generatore. Nei circuiti ideali i fili hanno resistenza trascurabile e i punti connessi direttamente appartengono allo stesso nodo. Un amperometro ideale va in serie e ha resistenza nulla; un voltmetro ideale va in parallelo e ha resistenza infinita, così non altera la corrente del ramo misurato. Sono limiti utili per interpretare una misura reale.
:::

## Resistori, nodi e dissipazione

:::osservazione
Due componenti sono in serie quando condividono la stessa corrente senza una diramazione intermedia. Sono in parallelo se i loro estremi sono connessi agli stessi due nodi. La posizione sul foglio non decide il collegamento: si segue la continuità elettrica dei fili.
:::

:::teorema{#circuiti titolo="Reti resistive ed effetto Joule"}
In regime stazionario la conservazione della carica impone che la somma delle correnti entranti in un nodo uguagli quella delle uscenti. Per resistori ideali:
$$
R_s=\sum_iR_i,\qquad \dfrac{1}{R_p}=\sum_i\dfrac{1}{R_i}.
$$
La potenza assorbita da un resistore ohmico è
$$
P=I\Delta V=RI^2=\dfrac{(\Delta V)^2}{R},\qquad E_{\mathrm{diss}}=Pt
$$
con l’ultima formula valida a potenza costante.
:::

:::osservazione
In serie si sommano le cadute di tensione e $R_{\mathrm{eq}}$ supera ciascun termine. In parallelo si sommano le correnti e $R_{\mathrm{eq}}$ è minore del ramo meno resistivo. Questi controlli individuano subito un’inversione delle regole. In una rete mista si riducono prima i gruppi realmente in serie o parallelo, poi si torna ai singoli rami per trovare correnti e tensioni.

![Circuito da 12 volt: resistore da 2 ohm in serie al parallelo da 6 e 3 ohm, con nodi e correnti.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/circuito-it.svg)

Nel circuito illustrato il parallelo vale $2\,\Omega$, la resistenza totale $4\,\Omega$ e la corrente totale $3\,\mathrm A$. Sul resistore iniziale cadono $6\,\mathrm V$; anche il parallelo ha $6\,\mathrm V$, con correnti $1\,\mathrm A$ e $2\,\mathrm A$. Il generatore eroga $36\,\mathrm W$, uguali alla somma $18+6+12\,\mathrm W$ dissipata nei tre resistori.

L’effetto Joule trasferisce energia elettrica all’energia interna del materiale. A corrente imposta, un resistore più grande dissipa di più; a tensione imposta dissipa di meno. Non sono affermazioni contraddittorie: cambiano i vincoli. Un circuito aperto può avere tensione ai suoi estremi con corrente nulla. Un cortocircuito ideale su un generatore ideale di tensione non nulla produce un modello incompatibile con una corrente finita; nei dispositivi reali le resistenze interne e dei collegamenti diventano indispensabili.
:::

## Condensatori: geometria, carica ed energia

:::osservazione
Un condensatore separa cariche uguali e opposte sulle armature. La carica totale della coppia può essere zero mentre esistono campo ed energia. Nella relazione di capacità $q$ indica il **modulo della carica su un’armatura**, e $\Delta V$ il modulo della tensione fra le armature.
:::

:::definizione{#condensatori titolo="Capacità e accumulo"}
La capacità $C=\dfrac{q}{\Delta V}$ si misura in farad, $\mathrm F=\mathrm{C/V}$. Per armature piane, con distanza $d$ molto minore delle dimensioni laterali e spazio completamente riempito da un dielettrico lineare omogeneo isotropo:
$$
C=\dfrac{\varepsilon A}{d},\qquad U_C=\dfrac12q\Delta V=\dfrac12C(\Delta V)^2=\dfrac{q^2}{2C}.
$$
Si trascurano gli effetti ai bordi e le perdite.
:::

:::osservazione
L’energia non è $q\Delta V$ perché durante la carica la tensione cresce da zero al valore finale. Il lavoro necessario per trasferire una piccola carica aumenta man mano: l’area sotto la retta tensione-carica è un triangolo. A geometria e materiale invariati, raddoppiare la tensione raddoppia la carica e quadruplica l’energia, lasciando invariata la capacità.

![Condensatore piano e confronto fra inserimento del dielettrico a carica costante e a tensione costante.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/condensatore-it.svg)

Inserire completamente un dielettrico di costante relativa $\varepsilon_r$ moltiplica $C$ per $\varepsilon_r$. Se il condensatore è scollegato e non perde carica, $q$ resta costante: tensione ed energia scendono al precedente valore diviso per $\varepsilon_r$. Se resta connesso al generatore ideale, $\Delta V$ è costante: carica ed energia immagazzinata aumentano dello stesso fattore. Il confronto energetico deve includere anche il lavoro meccanico e lo scambio con il generatore; non si può dedurre l’energia dell’intero sistema guardando soltanto $U_C$.

Una membrana lipidica separa soluzioni conduttrici e offre un’analogia con il dielettrico fra armature. Una capacità di membrana descrive l’accumulo di carica, mentre canali e trasportatori introducono altre correnti: il condensatore da solo non rappresenta tutta la membrana. Una piccola separazione di carica può generare una tensione senza richiedere una grande alterazione delle concentrazioni nei volumi circostanti.
:::

## Reti di condensatori: ricostruire i vincoli

:::osservazione
Le formule sembrano le regole dei resistori scambiate, ma si ottengono ragionando su grandezze diverse. In parallelo ogni condensatore ha la tensione del generatore; il generatore deve fornire la somma delle cariche positive accumulate.
:::

:::teorema{#reti-condensatori titolo="Collegamenti ideali"}
Per condensatori in parallelo:
$$
q_{\mathrm{tot}}=\sum_i C_i\Delta V,\qquad C_{\mathrm{eq}}=\sum_iC_i.
$$
Per una serie ideale con nodi intermedi isolati e inizialmente neutri, tutte le armature hanno lo stesso modulo di carica $q$ e
$$
\Delta V_{\mathrm{tot}}=\sum_i\dfrac{q}{C_i},\qquad \dfrac1{C_{\mathrm{eq}}}=\sum_i\dfrac1{C_i}.
$$
:::

:::osservazione
La neutralità iniziale dei nodi intermedi spiega le cariche opposte sulle due armature connesse: se un nodo possedesse una carica iniziale non nulla, non si potrebbe imporre automaticamente lo stesso modulo a tutti i condensatori. In serie il condensatore più piccolo riceve la tensione maggiore, perché $\Delta V_i=\dfrac{q}{C_i}$. La tensione non si divide in parti uguali salvo capacità uguali.

![Condensatori da 3 e 6 microfarad: confronto tra serie con uguale carica e parallelo con uguale tensione.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/reti-capacita-it.svg)

Con $3\,\mu\mathrm F$ e $6\,\mu\mathrm F$ in serie su $12\,\mathrm V$, si ha $C_{\mathrm{eq}}=2\,\mu\mathrm F$ e $q=24\,\mu\mathrm C$; le tensioni sono $8\,\mathrm V$ e $4\,\mathrm V$. In parallelo la capacità è $9\,\mu\mathrm F$ e le cariche sono $36\,\mu\mathrm C$ e $72\,\mu\mathrm C$. La stessa coppia di componenti può dunque accumulare energie differenti a seconda del collegamento.

In un circuito alimentato in continua, dopo il transitorio un condensatore ideale completamente carico non lascia passare corrente di conduzione attraverso il dielettrico. Durante la carica, invece, corrente scorre nei fili mentre cambia la carica delle armature. Se due condensatori vengono poi collegati fra loro senza generatore, si conserva la carica dei nodi isolati, non necessariamente la somma delle energie elettrostatiche iniziali: durante la redistribuzione intervengono dissipazione e, in un modello più completo, radiazione. Il semplice stato finale non descrive il transitorio.
:::

## Campo magnetico: direzione senza lavoro sulla carica

:::osservazione
Nell’esperimento di Oersted una corrente in un filo devia l’ago di una bussola; invertire la corrente inverte il verso del campo prodotto. Attorno a un filo rettilineo lungo, le linee magnetiche sono circonferenze: il pollice della mano destra segue la corrente convenzionale e le dita indicano il campo. Le linee magnetiche non partono da cariche elettriche e non vanno confuse con quelle del campo elettrico.
:::

:::definizione{#lorentz titolo="Forza magnetica e moto"}
Il campo magnetico si misura in tesla, $\mathrm T=\mathrm{N/(A\,m)}$. La forza elettromagnetica completa è $\vec F=q(\vec E+\vec v\times\vec B)$. La parte magnetica vale
$$
\vec F_B=q\vec v\times\vec B,\qquad F_B=|q|vB\sin\theta.
$$
Per un filo rettilineo in campo uniforme $\vec F=I\vec\ell\times\vec B$, dove $\vec\ell$ segue la corrente convenzionale.
:::

:::osservazione
La mano destra dà $\vec v\times\vec B$; per una carica negativa si inverte il risultato. Il simbolo $\odot$ indica un vettore uscente dal foglio e $\otimes$ uno entrante. Una carica ferma o con velocità parallela al campo non subisce forza magnetica, anche se $B$ è grande.

![Carica positiva con velocità verso destra in un campo entrante: forza verso l’alto e traiettoria circolare.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/lorentz-it.svg)

Poiché $\vec F_B$ è perpendicolare a $\vec v$, la potenza sulla singola particella è $\vec F_B\cdot\vec v=0$. In un campo magnetico statico da solo la rapidità e l’energia cinetica restano costanti. Nel modello classico, non relativistico e senza altre forze, una velocità iniziale perpendicolare a un campo uniforme produce moto circolare:
$$
|q|vB=\dfrac{mv^2}{r},\qquad r=\dfrac{mv}{|q|B},\qquad T=\dfrac{2\pi m}{|q|B}.
$$
Se esiste anche una componente parallela, questa resta costante e la traiettoria diventa elicoidale; il raggio dipende dalla componente perpendicolare. Le linee di campo non sono nemmeno qui la traiettoria. Un filo può subire una forza e compiere lavoro meccanico come parte di un circuito: il bilancio comprende il generatore e i campi elettrici. Questo non contraddice il lavoro magnetico nullo sulla singola carica.
:::

## Induzione: opporsi alla variazione del flusso

:::osservazione
Una bobina può mostrare una tensione senza batteria quando cambia il campo che la attraversa. Conta la variazione del **flusso concatenato**, non la semplice presenza di un magnete. Anche modificare l’area della spira o ruotarla in un campo costante può produrre induzione.
:::

:::teorema{#induzione titolo="Faraday-Neumann-Lenz"}
Per una spira piana in campo uniforme, $\Phi_B=BA\cos\theta$, dove $\theta$ è l’angolo fra campo e normale orientata alla superficie. Il flusso si misura in weber, $\mathrm{Wb}=\mathrm{T\,m^2}$. Per $N$ spire con lo stesso flusso per spira:
$$
\mathcal E=-N\dfrac{d\Phi_B}{dt},\qquad \mathcal E_{\mathrm m}=-N\dfrac{\Delta\Phi_B}{\Delta t}.
$$
Il secondo valore è una media. Se il flusso cambia linearmente, la forza elettromotrice è costante e coincide con questa media in tutto l’intervallo; per un flusso non lineare i due valori possono comunque coincidere in alcuni istanti.
:::

:::osservazione
Si sceglie una normale e si associa il verso positivo lungo la spira con la mano destra. Il segno meno esprime la legge di Lenz: il campo della corrente indotta si oppone alla **variazione** del flusso esterno. Se un campo entrante aumenta, la corrente genera un campo uscente ed è antioraria per chi guarda il foglio. Se lo stesso campo entrante diminuisce, la corrente è oraria, cercando di sostenere il flusso entrante che si sta perdendo.

![Spira in campo entrante crescente: corrente antioraria e campo indotto uscente; il grafico del flusso distingue pendenza e valore.](/figure/fisica-semestre-filtro/elettricita-e-magnetismo/induzione-it.svg)

In un circuito chiuso prevalentemente resistivo e con autoinduttanza trascurabile si usa $|I|=\dfrac{|\mathcal E|}{R}$. In circuito aperto può esserci forza elettromotrice senza corrente sostenuta. Il nome «forza elettromotrice» indica energia trasferita per unità di carica, quindi si misura in volt, non in newton. Per un conduttore che si muove nel campo, le forze sulle cariche contribuiscono alla separazione di carica; una spira ferma in un campo variabile è invece attraversata da un campo elettrico indotto non conservativo. Non si può estendere a questo caso il potenziale elettrostatico come descrizione globale del campo.

L’opposizione di Lenz esprime un bilancio energetico: se si spinge un magnete verso una spira resistiva, la forza di reazione richiede lavoro meccanico, che alimenta anche la dissipazione Joule. Per leggere un grafico del flusso si guarda la pendenza: flusso grande ma costante significa forza elettromotrice nulla; flusso che passa per zero con pendenza non nulla può dare una forza elettromotrice intensa.
:::
