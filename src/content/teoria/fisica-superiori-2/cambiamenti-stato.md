---
titolo: "Cambiamenti di stato"
sommario: "Calore latente, curve di riscaldamento e bilanci con fusione, vaporizzazione o condensazione."
---

## Stati della materia

:::definizione{#stati titolo="Solido, liquido e aeriforme"}
Una **fase** è una parte del sistema con proprietà fisiche uniformi. Il ghiaccio e l’acqua liquida costituiscono due fasi della stessa sostanza. In un solido le particelle oscillano senza scambiarsi di continuo la posizione. In un liquido possono scorrere le une rispetto alle altre. In un gas sono più distanti e il campione occupa il volume disponibile.
:::

:::osservazione{#coexist titolo="Coesistenza e pressione fissata"}
Una sostanza pura può avere due fasi in equilibrio alla temperatura di trasformazione corrispondente alla pressione applicata. Per esempio, a pressione atmosferica normale si possono avere insieme acqua liquida e ghiaccio intorno a $0\,{}^\circ\mathrm C$. Se entra energia e aumenta la frazione liquida, la temperatura resta approssimativamente fissata finché entrambe le fasi sono presenti. Se cambia la pressione, si individua nuovamente la temperatura di transizione.
:::

:::esempio{#frazioni titolo="Stessa temperatura, quantità di liquido diverse"}
Due recipienti contengono rispettivamente $0{,}100$ e $0{,}200\,\mathrm{kg}$ di ghiaccio a $0\,{}^\circ\mathrm C$. La pressione è quella atmosferica normale. In ciascun recipiente entrano $16{,}7\,\mathrm{kJ}$ utili e la temperatura resta a zero. Con $L_f=334\,\mathrm{kJ/kg}$, in ciascun recipiente fondono $0{,}050\,\mathrm{kg}$. Nel primo questa massa costituisce metà del campione. Nel secondo costituisce un quarto.

Una misura di temperatura da sola permette di riconoscere le condizioni della fusione, ma non quanta parte sia già liquida. Per distinguere i campioni serve una misura della massa fusa o dell’energia trasferita durante la transizione. Se la quantità di ghiaccio è maggiore, occorre più energia per raggiungere la stessa frazione fusa. La frazione vale uno soltanto al termine del passaggio.

::grafico{linee="0,0 33.4,100;0,0 66.8,100" punti="16.7,50,pieno;16.7,25,pieno" segmenti="16.7,0,16.7,50" etichette="19,45,50%;19,18,25%" xmin=0 xmax=72 ymin=0 ymax=112 nomi="Q (kJ),Fuso (%)" titolo="A parità di energia ricevuta fonde la stessa massa. La percentuale fusa è maggiore nel campione da 0,100 kg."}
:::

## I passaggi tra le fasi

:::definizione{#transizioni titolo="Nomi dei passaggi"}
La fusione trasforma il solido in liquido e la solidificazione compie il passaggio inverso. La vaporizzazione trasforma il liquido in gas e la condensazione trasforma il gas in liquido. Quando si passa direttamente da solido a gas si parla di sublimazione. La deposizione è il processo inverso. Le trasformazioni dirette sono osservabili, ad esempio, nella scomparsa del ghiaccio secco e nella formazione di brina.
:::

:::osservazione{titolo="Segno del calore riferito al campione"}
Il segno si stabilisce prima di inserire i dati. Qui $Q$ è positivo se entra nel campione e negativo se esce. La tabella vale per i passaggi alla temperatura e alla pressione di equilibrio e per $L>0$.

| Fasi iniziale e finale | Passaggio | Segno di $Q$ |
| --- | --- | ---: |
| Solido → liquido | Fusione | $+$ |
| Liquido → solido | Solidificazione | $-$ |
| Liquido → gas | Vaporizzazione | $+$ |
| Gas → liquido | Condensazione | $-$ |
| Solido → gas | Sublimazione | $+$ |
| Gas → solido | Deposizione | $-$ |

Se si sceglie come sistema l’ambiente che riceve l’energia, il segno si inverte rispetto a quello del campione. Per un passaggio e il suo inverso, svolti sulla stessa massa alle stesse condizioni, i due calori hanno lo stesso modulo. Le durate possono differire se cambiano le potenze.
:::

:::esempio{#ciclo titolo="Fusione e solidificazione con potenze diverse"}
Un campione di acqua di $0{,}10\,\mathrm{kg}$ parte come ghiaccio a zero. Con $L_f=334\,\mathrm{kJ/kg}$ assorbe $33{,}4\,\mathrm{kJ}$ per fondere. A una potenza utile di $334\,\mathrm W$ la fusione dura $100\,\mathrm s$. Subito dopo un refrigeratore gli sottrae $167\,\mathrm W$. Per solidificare occorre cedere di nuovo $33{,}4\,\mathrm{kJ}$, che a questa potenza richiedono $200\,\mathrm s$.

Il grafico accumula le entrate con segno positivo e le uscite con segno negativo. Alla fine il totale algebrico è zero. Le energie trasferite nei due intervalli hanno entrambe modulo $33{,}4\,\mathrm{kJ}$, come si legge dalla variazione di ordinata di ciascun tratto.

::grafico{linee="0,0 100,33.4 300,0" punti="100,33.4,pieno;300,0,pieno" xmin=0 xmax=320 ymin=0 ymax=40 nomi="t (s),Q (kJ)" titolo="In 100 s entrano 33,4 kJ. Nei 200 s successivi la stessa energia esce dal campione."}
:::

## Calore latente

:::teorema{#latente titolo="Energia necessaria al passaggio di stato"}
Sia $m_{\mathrm{tr}}$ la massa che cambia fase alla temperatura di transizione e $L$ il corrispondente **calore latente specifico**, espresso in $\mathrm{J/kg}$. La trasformazione completa di un chilogrammo richiede in modulo $L$ joule. A pressione e temperatura di transizione fissate, il calore cambia in proporzione alla massa trasformata.

$$
|Q|=m_{\mathrm{tr}}L.
$$

Nel bilancio del campione la fusione e la vaporizzazione hanno $Q>0$, solidificazione e condensazione hanno $Q<0$. Il valore di $L$ è una grandezza positiva. A pressione atmosferica, per l’acqua si possono usare $L_f=334\,000\,\mathrm{J/kg}$ e $L_v=2{,}26\cdot10^6\,\mathrm{J/kg}$.
:::

:::esempio{titolo="Usare la massa effettivamente trasformata"}
Si forniscono $20{,}04\,\mathrm{kJ}$ a $0{,}10\,\mathrm{kg}$ di ghiaccio alla temperatura di fusione. La massa fusa è $\dfrac{20040}{334000}\,\mathrm{kg}=0{,}060\,\mathrm{kg}$. Rimangono $0{,}040\,\mathrm{kg}$ di ghiaccio. Per fondere tutta la massa occorrerebbero $33{,}4\,\mathrm{kJ}$, quindi la temperatura del sistema misto rimane quella di fusione.

::grafico{linee="0,0 33.4,100 41,100" punti="20.04,60,pieno;33.4,100,pieno" etichette="18,67,60 g;34,105,100 g" xmin=0 xmax=43 ymin=0 ymax=120 nomi="Q (kJ),m (g)" titolo="La massa fusa cresce fino alla quantità di ghiaccio disponibile."}
:::

:::esempio{#calibrazione-latente titolo="Calore latente ricavato da un intervallo"}
Un calorimetro mostra l’energia totale entrata dall’avvio. Il grafico di $0{,}10\,\mathrm{kg}$ di una sostanza pura, mantenuta a pressione costante, entra in fusione quando il display indica $4{,}5\,\mathrm{kJ}$ e la completa alla lettura di $29{,}5\,\mathrm{kJ}$. L’energia che riguarda la transizione è la differenza fra le due letture. I primi $4{,}5\,\mathrm{kJ}$ appartengono al riscaldamento del solido.

$$
Q_{\mathrm{fus}}=(29{,}5-4{,}5)\,\mathrm{kJ}=25\,\mathrm{kJ},
\qquad
L_f=\frac{25\,\mathrm{kJ}}{0{,}10\,\mathrm{kg}}=250\,\mathrm{kJ/kg}.
$$

Usare l’ordinata del termometro attribuirebbe al passaggio una variazione di temperatura, invece di una quantità di energia. Usare la sola lettura finale del calorimetro includerebbe anche il riscaldamento iniziale. Il calcolo presuppone che le letture misurino l’energia trasferita al campione. Se parte dell’energia scalda l’apparecchio, si correggono le letture prima di sottrarle.

Si può ripetere l’esperimento con una massa doppia alla stessa pressione. Se le letture energetiche sono corrette, la differenza fra le letture di fine e inizio fusione raddoppia. Un aumento costante diverso da zero, uguale per entrambe le prove e aggiunto a tutte le letture, si cancella nel calcolo della differenza. Una perdita di energia durante la misura richiede invece una correzione distinta.
:::

## Curve di riscaldamento

:::osservazione{#curva titolo="Tratti inclinati e tratti orizzontali"}
Nel grafico della temperatura in funzione dell’energia ricevuta, un tratto in una sola fase ha pendenza $\dfrac{1}{mc}$ quando si trattano $m$ e $c$ come costanti. Durante un cambiamento di fase alla temperatura di equilibrio il tratto è orizzontale. La lunghezza del tratto orizzontale sull’asse dell’energia è $mL$ per una trasformazione completa. Se l’asse orizzontale misura il tempo al posto dell’energia e la potenza utile è costante, si sostituisce $Q=P t$.
:::

:::esempio{titolo="Dal ghiaccio a meno dieci gradi all’acqua tiepida"}
Per $0{,}20\,\mathrm{kg}$ di ghiaccio a $-10\,{}^\circ\mathrm C$ servono $0{,}20\cdot2100\cdot10=4200$ joule per raggiungere zero. Occorrono poi $66\,800$ joule per fondere il ghiaccio. A quel punto l’ascissa è $71\,000$ joule. Portare l’acqua a $20\,{}^\circ\mathrm C$ aggiunge $0{,}20\cdot4200\cdot20=16\,800$ joule.

::grafico{linee="0,-10 4.2,0 71,0 87.8,20" punti="4.2,0,pieno;71,0,pieno;87.8,20,pieno" xmin=0 xmax=93 ymin=-12 ymax=24 nomi="Q (kJ),T (°C)" titolo="Il tratto orizzontale va da 4,2 a 71 kJ. Il cambio di pendenza distingue ghiaccio e acqua."}
:::

:::esempio{#raffreddamento titolo="Raffreddare e solidificare un campione"}
Partendo da $0{,}20\,\mathrm{kg}$ d’acqua a $20\,{}^\circ\mathrm C$, si possono invertire i passaggi dell’esempio di riscaldamento. Con gli stessi valori di $c_g$, $c_a$ e $L_f$, si estraggono prima $16{,}8\,\mathrm{kJ}$ per arrivare a zero, poi $66{,}8\,\mathrm{kJ}$ per la solidificazione. Alla fine del tratto orizzontale l’energia cumulata estratta vale $83{,}6\,\mathrm{kJ}$. Per arrivare a ghiaccio a $-10\,{}^\circ\mathrm C$ restano da estrarre $4{,}2\,\mathrm{kJ}$, arrivando a $87{,}8\,\mathrm{kJ}$ complessivi.

L’asse orizzontale conta l’energia estratta come grandezza positiva. Nel bilancio del campione il calore è invece negativo su tutti e tre i tratti. A $40\,\mathrm{kJ}$ estratti siamo nel tratto orizzontale. Di questi, solo $23{,}2\,\mathrm{kJ}$ riguardano la solidificazione. Il grafico permette di individuare sia la temperatura sia il contributo dedicato al cambio di fase.

::grafico{linee="0,20 16.8,0 83.6,0 87.8,-10" punti="16.8,0,pieno;40,0,pieno;83.6,0,pieno;87.8,-10,pieno" segmenti="40,-12,40,0" xmin=0 xmax=94 ymin=-12 ymax=24 nomi="E (kJ),T (°C)" titolo="E è l’energia estratta. A 40 kJ la temperatura è ancora a zero e coesistono acqua e ghiaccio."}
:::

## Riscaldamenti in più fasi

:::teorema{#fasi titolo="Sommare i contributi di energia"}
Il modello termico si sceglie separatamente in ciascun tratto. Se si parte da ghiaccio a $T_i<0\,{}^\circ\mathrm C$ e si arriva ad acqua liquida a $T_f>0\,{}^\circ\mathrm C$, alla pressione di riferimento si ha

$$
Q=m c_g(0-T_i)+mL_f+mc_a(T_f-0).
$$

Il primo termine scalda la fase solida, il secondo cambia fase, il terzo scalda la fase liquida. All’interno di ciascuna fase il calore specifico si assume costante. Il passaggio completo richiede tutti e tre i termini. Per il percorso inverso gli stessi contributi cambiano segno.
:::

:::esempio{#durata titolo="Due potenze e una soglia"}
Servono $66{,}8\,\mathrm{kJ}$ per fondere $0{,}20\,\mathrm{kg}$ di ghiaccio a zero. Una sorgente eroga prima $200\,\mathrm W$ utili per $100\,\mathrm s$, cioè $20\,\mathrm{kJ}$. Restano $46{,}8\,\mathrm{kJ}$. Se la seconda potenza è $400\,\mathrm W$, il resto richiede $117\,\mathrm s$, quindi il tempo totale è $217\,\mathrm s$. Il bilancio ora va fatto su due intervalli di potenza diversa.

::grafico{linee="0,0 100,20 217,66.8" punti="100,20,pieno;217,66.8,pieno" xmin=0 xmax=235 ymin=0 ymax=72 nomi="t (s),Q (kJ)" titolo="La seconda pendenza è doppia. A 217 s l’energia arriva alla soglia di fusione completa."}
:::

:::esempio{#dispersioni titolo="Distinguere potenza elettrica e potenza utile"}
Un riscaldatore assorbe $275\,\mathrm W$. Durante la fusione di $0{,}10\,\mathrm{kg}$ di ghiaccio già a zero, $75\,\mathrm W$ sono trasferiti all’ambiente. Supponiamo costanti entrambe le potenze e trascurabile l’energia immagazzinata dall’apparecchio. Al campione arrivano $200\,\mathrm J$ ogni secondo. La soglia di fusione è $33{,}4\,\mathrm{kJ}$, quindi si completa la fusione dopo $167\,\mathrm s$.

In quell’intervallo l’energia elettrica è circa $45{,}9\,\mathrm{kJ}$. La differenza di circa $12{,}5\,\mathrm{kJ}$ è la quantità trasferita all’ambiente. Dividendo la soglia di fusione per la potenza elettrica si otterrebbe un tempo minore, perché si attribuirebbe al ghiaccio anche l’energia dispersa. Se la dispersione cambiasse da un tratto all’altro, andrebbe stimata la potenza utile di ogni intervallo.

::grafico{f="0.275*x;0.2*x" legenda="\text{Energia elettrica};\text{Energia al campione}" punti="167,45.925,pieno;167,33.4,pieno" segmenti="167,0,167,45.925" xmin=0 xmax=190 ymin=0 ymax=55 nomi="t (s),E (kJ)" titolo="A 167 s la curva dell’energia utile raggiunge 33,4 kJ. Il consumo elettrico è maggiore."}
:::

:::esempio{#recipiente titolo="Calore assorbito dal recipiente"}
Un calorimetro è inizialmente a $0\,{}^\circ\mathrm C$ e contiene $0{,}10\,\mathrm{kg}$ di ghiaccio alla stessa temperatura. Dopo aver fornito $43800\,\mathrm J$ si trova solo acqua liquida a $20\,{}^\circ\mathrm C$ e il recipiente è alla medesima temperatura. Si trascurano dispersioni e altri scambi. Con $L_f=334000\,\mathrm{J/kg}$ e $c_a=4200\,\mathrm{J/(kg\,K)}$ si può individuare quanta energia ha assorbito il recipiente.

Il ghiaccio richiede $33400\,\mathrm J$ per fondere. L’acqua formata richiede poi $8400\,\mathrm J$ per scaldarsi. Il bilancio lascia $2000\,\mathrm J$ al recipiente. La sua capacità termica è quindi $\dfrac{2000\,\mathrm J}{20\,\mathrm K}=100\,\mathrm{J/K}$. Questa capacità riguarda l’intero recipiente, mentre $c_a$ si riferisce a un chilogrammo d’acqua. Se fosse presente una perdita sconosciuta verso l’esterno, i $2000\,\mathrm J$ comprenderebbero anche quella perdita e il dato da solo non darebbe la capacità del recipiente.
:::

## Ghiaccio in acqua

:::osservazione{#miscela titolo="Stabilire se tutto il ghiaccio fonde"}
In un recipiente isolato con capacità termica trascurabile, si mettono acqua a $T_a>0\,{}^\circ\mathrm C$ e ghiaccio a $0\,{}^\circ\mathrm C$. Il massimo calore che l’acqua può cedere raffreddandosi fino a zero vale $Q_{\mathrm{disp}}=m_a c_a (T_a-0)$. La soglia per fondere tutto il ghiaccio è $Q_{\mathrm{fus}}=m_gL_f$. Il confronto determina quale bilancio usare.

- Se $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, fondono $\dfrac{Q_{\mathrm{disp}}}{L_f}$ chilogrammi e restano entrambe le fasi a $0\,{}^\circ\mathrm C$.
- Se $Q_{\mathrm{disp}}=Q_{\mathrm{fus}}$, l’ultimo ghiaccio fonde e si ottiene acqua a $0\,{}^\circ\mathrm C$.
- Se $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, l’energia rimanente scalda tutta l’acqua. La massa dopo la fusione comprende anche il ghiaccio fuso.
:::

:::esempio{titolo="Confrontare le soglie prima di calcolare"}
Si mescolano $0{,}4\,\mathrm{kg}$ d’acqua a $20\,{}^\circ\mathrm C$ e $0{,}2\,\mathrm{kg}$ di ghiaccio a zero. Il primo valore è $33\,600\,\mathrm J$ e il secondo $66\,800\,\mathrm J$. Finché rimane ghiaccio la temperatura finale è zero. Fonde $\dfrac{33\,600\,\mathrm J}{L_f}\simeq0{,}101\,\mathrm{kg}$ e ne rimangono circa $0{,}099\,\mathrm{kg}$.

::grafico{f="1.68*x;66.8" punti="20,33.6,pieno;39.7619,66.8,pieno" xmin=0 xmax=48 ymin=0 ymax=85 nomi="T_i (°C),Q (kJ)" legenda="\mathrm{disponibile};\mathrm{soglia}" titolo="La temperatura iniziale assegnata cade prima dell’incrocio."}
:::

:::esempio{#miscela-completa titolo="Bilancio dopo la fusione completa"}
In un recipiente isolato di capacità termica trascurabile si mescolano $0{,}50\,\mathrm{kg}$ d’acqua a $30\,{}^\circ\mathrm C$ e $0{,}10\,\mathrm{kg}$ di ghiaccio a zero. Con $c_a=4200\,\mathrm{J/(kg\,K)}$, l’acqua potrebbe cedere $63\,\mathrm{kJ}$ prima di arrivare a zero. Fondere tutto il ghiaccio richiede $33{,}4\,\mathrm{kJ}$, perciò restano $29{,}6\,\mathrm{kJ}$ per il riscaldamento della massa ormai liquida.

$$
T_f=\frac{29{,}6\cdot1000}{(0{,}50+0{,}10)\cdot4200}\,{}^\circ\mathrm C
  \simeq 11{,}7\,{}^\circ\mathrm C.
$$

Dividere per la sola massa d’acqua iniziale darebbe una temperatura finale troppo alta. Anche il ghiaccio appena fuso si riscalda. La soglia di separazione si trova quando l’acqua può cedere esattamente $33{,}4\,\mathrm{kJ}$, cioè con temperatura iniziale di circa $15{,}9\,{}^\circ\mathrm C$. Prima della soglia convivono acqua e ghiaccio. Dopo la soglia l’aumento della temperatura iniziale si traduce in un aumento della temperatura finale.

::grafico{linee="0,0 15.9048,0 44,23.4127" punti="15.9048,0,pieno;30,11.746,pieno" xmin=0 xmax=47 ymin=-3 ymax=26 nomi="T iniz. (°C),T fin. (°C)" titolo="Per le masse indicate la separazione è a circa 15,9 °C iniziali. Sopra questa soglia tutto il ghiaccio fonde."}
:::

:::osservazione{#ghiaccio-freddo titolo="Quando il ghiaccio parte sotto zero"}
Se il ghiaccio parte sotto zero, parte dell’energia dell’acqua serve ad alzare la temperatura del solido prima che possa fondere. Confrontare soltanto il calore cedibile dall’acqua con $m_gL_f$ sovrastimerebbe la fusione. Prima si controlla se l’acqua può portare il solido alla temperatura di equilibrio senza solidificarsi.

Per esempio, $0{,}20\,\mathrm{kg}$ d’acqua a $4\,{}^\circ\mathrm C$ cedono $3{,}36\,\mathrm{kJ}$ raffreddandosi a zero. Per portare $0{,}30\,\mathrm{kg}$ di ghiaccio da $-10$ a $0\,{}^\circ\mathrm C$ occorrono $6{,}30\,\mathrm{kJ}$ con $c_g=2100\,\mathrm{J/(kg\,K)}$. Il calore mancante è $2{,}94\,\mathrm{kJ}$. Può arrivare dalla solidificazione di circa $0{,}0088\,\mathrm{kg}$ dell’acqua iniziale. La massa disponibile è sufficiente, quindi l’equilibrio ha ancora due fasi alla temperatura di fusione.
:::

## Evaporazione, ebollizione e pressione

:::definizione{#pressione titolo="Le condizioni del passaggio di stato"}
Nell’**evaporazione** alcune molecole lasciano la superficie libera di un liquido anche sotto la temperatura di ebollizione. Nell’**ebollizione** si formano bolle di vapore nel volume del liquido. Il punto di ebollizione dipende dalla pressione. L’acqua bolle vicino a $100\,{}^\circ\mathrm C$ alla pressione atmosferica normale. Quando la pressione esterna è più bassa, la temperatura di ebollizione è minore.
:::

:::attenzione{titolo="Interpretare un tratto piatto"}
Una curva sperimentale può avere un tratto quasi orizzontale anche quando un termostato mantiene la temperatura o quando le perdite bilanciano l’ingresso. Per attribuirlo a fusione o ebollizione si controlla che coesistano due fasi alla pressione dichiarata. Impurezze e pressione variabile possono rendere il tratto meno piatto del modello ideale.
:::

:::osservazione{#saturazione titolo="Pressione di vapore e inizio dell’ebollizione"}
L’acqua in un recipiente chiuso può raggiungere un equilibrio tra la superficie liquida e il vapore sopra di essa. A temperatura fissata, la pressione parziale del vapore in quell’equilibrio è la **pressione di vapore saturo**. Aumenta con la temperatura. Per prevedere l’inizio dell’ebollizione, trascurando piccole differenze di pressione entro il liquido e gli effetti legati alla formazione delle prime bolle, si confronta quel valore con la pressione esterna.

Per l’acqua, a $90\,{}^\circ\mathrm C$ la pressione di vapore saturo è circa $70\,\mathrm{kPa}$, mentre a $100\,{}^\circ\mathrm C$ è circa $101\,\mathrm{kPa}$. In un recipiente a $70\,\mathrm{kPa}$ l’ebollizione inizia dunque vicino a $90\,{}^\circ\mathrm C$. Se la pressione viene modificata durante la prova, va determinata una nuova temperatura di transizione. L’energia già trasferita al liquido non stabilisce da sola la temperatura di ebollizione.

::grafico{linee="80,47 90,70 100,101" punti="90,70,pieno;100,101,pieno" segmenti="80,70,90,70;90,44,90,70;80,101,100,101" xmin=80 xmax=103 ymin=44 ymax=112 nomi="T (°C),p sat. (kPa)" titolo="Valori approssimati della pressione di vapore saturo dell’acqua. Le linee tratteggiate indicano due possibili pressioni esterne."}
:::

:::esempio{#condensa-liquido titolo="Dal vapore saturo all’acqua tiepida"}
A pressione atmosferica normale si raffreddano $0{,}020\,\mathrm{kg}$ di vapore saturo a $100\,{}^\circ\mathrm C$ fino ad acqua a $75\,{}^\circ\mathrm C$. La condensazione cede $0{,}020\cdot2260\,\mathrm{kJ}=45{,}2\,\mathrm{kJ}$. Durante il raffreddamento successivo l’acqua liquida cede $0{,}020\cdot4200\cdot25\,\mathrm J=2{,}1\,\mathrm{kJ}$. In totale all’esterno arrivano $47{,}3\,\mathrm{kJ}$.

I primi $45{,}2\,\mathrm{kJ}$ vengono trasferiti a temperatura costante mentre la massa di vapore diminuisce. Solo dopo la completa condensazione la temperatura scende sotto $100\,{}^\circ\mathrm C$, nel modello a pressione fissata. Se si dovesse sottrarre meno dell’energia di condensazione completa, alla fine rimarrebbe ancora vapore.

::grafico{linee="0,100 45.2,100 47.3,75" punti="45.2,100,pieno;47.3,75,pieno" xmin=0 xmax=51 ymin=69 ymax=106 nomi="E (kJ),T (°C)" titolo="E misura l’energia estratta. La temperatura scende dopo che tutto il vapore è condensato."}
:::
