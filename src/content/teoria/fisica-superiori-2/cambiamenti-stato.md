---
titolo: "Cambiamenti di stato"
sommario: "Calore latente, curve di riscaldamento e bilanci con fusione, vaporizzazione o condensazione."
---

## Stati della materia

:::definizione{#stati titolo="Solido, liquido e aeriforme"}
Una **fase** è una parte del sistema con proprietà fisiche uniformi. Il ghiaccio e l’acqua liquida costituiscono due fasi della stessa sostanza. In un solido le particelle oscillano senza scambiarsi di continuo la posizione. In un liquido possono scorrere le une rispetto alle altre. In un gas sono più distanti e il campione occupa il volume disponibile.
:::

:::osservazione{#coexist titolo="Coesistenza e pressione fissata"}
Una sostanza pura può avere due fasi in equilibrio alla temperatura di trasformazione corrispondente alla pressione applicata. Per esempio, a pressione atmosferica normale si possono avere insieme acqua liquida e ghiaccio intorno a $0\,{}^\circ\mathrm C$. Se entra energia e aumenta la frazione liquida, la temperatura resta approssimativamente fissata finché entrambe le fasi sono presenti. La stessa descrizione richiede una pressione diversa se cambiano le condizioni esterne.
:::

## I passaggi tra le fasi

:::definizione{#transizioni titolo="Nomi dei passaggi"}
La fusione trasforma il solido in liquido e la solidificazione compie il passaggio inverso. La vaporizzazione trasforma il liquido in gas e la condensazione trasforma il gas in liquido. Quando si passa direttamente da solido a gas si parla di sublimazione. La deposizione è il processo inverso. Le trasformazioni dirette sono osservabili, ad esempio, nella scomparsa del ghiaccio secco e nella formazione di brina.
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

::grafico{linee="0,0 33.4,0.1 41,0.1" punti="20.04,0.06,pieno;33.4,0.1,pieno" xmin=0 xmax=43 ymin=0 ymax=0.12 nomi="Q (kJ),m (kg)" titolo="La massa fusa cresce fino alla quantità di ghiaccio disponibile."}
:::

## Curve di riscaldamento

:::osservazione{#curva titolo="Tratti inclinati e tratti orizzontali"}
Nel grafico della temperatura in funzione dell’energia ricevuta, un tratto in una sola fase ha pendenza $1/(mc)$ quando si trattano $m$ e $c$ come costanti. Durante un cambiamento di fase alla temperatura di equilibrio il tratto è orizzontale. La lunghezza del tratto orizzontale sull’asse dell’energia è $mL$ per una trasformazione completa. Se l’asse orizzontale misura il tempo al posto dell’energia e la potenza utile è costante, si sostituisce $Q=P t$.
:::

:::esempio{titolo="Dal ghiaccio a meno dieci gradi all’acqua tiepida"}
Per $0{,}20\,\mathrm{kg}$ di ghiaccio a $-10\,{}^\circ\mathrm C$ servono $0{,}20\cdot2100\cdot10=4200$ joule per raggiungere zero. Occorrono poi $66\,800$ joule per fondere il ghiaccio. A quel punto l’ascissa è $71\,000$ joule. Portare l’acqua a $20\,{}^\circ\mathrm C$ aggiunge $0{,}20\cdot4200\cdot20=16\,800$ joule.

::grafico{linee="0,-10 4.2,0 71,0 87.8,20" punti="4.2,0,pieno;71,0,pieno;87.8,20,pieno" xmin=0 xmax=93 ymin=-13 ymax=25 nomi="Q (kJ),T (°C)" titolo="Il tratto orizzontale va da 4,2 a 71 kJ. Il cambio di pendenza distingue ghiaccio e acqua."}
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

## Ghiaccio in acqua

:::osservazione{#miscela titolo="Stabilire se tutto il ghiaccio fonde"}
In un recipiente isolato con capacità termica trascurabile, si mettono acqua a $T_a>0\,{}^\circ\mathrm C$ e ghiaccio a $0\,{}^\circ\mathrm C$. Il massimo calore che l’acqua può cedere raffreddandosi fino a zero vale $Q_{\mathrm{disp}}=m_a c_a (T_a-0)$. La soglia per fondere tutto il ghiaccio è $Q_{\mathrm{fus}}=m_gL_f$. Il confronto determina quale bilancio usare.

- Se $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, fondono $Q_{\mathrm{disp}}/L_f$ chilogrammi e restano entrambe le fasi a zero.
- Se $Q_{\mathrm{disp}}=Q_{\mathrm{fus}}$, l’ultimo ghiaccio fonde e si ottiene acqua a zero.
- Se $Q_{\mathrm{disp}}>Q_{\mathrm{fus}}$, l’energia rimanente scalda tutta l’acqua. La massa dopo la fusione comprende anche il ghiaccio fuso.
:::

:::esempio{titolo="Confrontare le soglie prima di calcolare"}
Si mescolano $0{,}4\,\mathrm{kg}$ d’acqua a $20\,{}^\circ\mathrm C$ e $0{,}2\,\mathrm{kg}$ di ghiaccio a zero. Il primo valore è $33\,600\,\mathrm J$ e il secondo $66\,800\,\mathrm J$. Finché rimane ghiaccio la temperatura finale è zero. Fonde $33\,600\,\mathrm J/L_f\simeq0{,}101\,\mathrm{kg}$ e ne rimangono circa $0{,}099\,\mathrm{kg}$.

::grafico{f="1.68*x;66.8" punti="20,33.6,pieno;39.7619,66.8,pieno" xmin=0 xmax=48 ymin=0 ymax=85 nomi="T_i (°C),Q (kJ)" legenda="\mathrm{disponibile};\mathrm{soglia}" titolo="La temperatura iniziale assegnata cade prima dell’incrocio."}
:::

## Evaporazione, ebollizione e pressione

:::definizione{#pressione titolo="Le condizioni del passaggio di stato"}
Nell’**evaporazione** alcune molecole lasciano la superficie libera di un liquido anche sotto la temperatura di ebollizione. Nell’**ebollizione** si formano bolle di vapore nel volume del liquido. Il punto di ebollizione dipende dalla pressione. L’acqua bolle vicino a $100\,{}^\circ\mathrm C$ alla pressione atmosferica normale. Quando la pressione esterna è più bassa, la temperatura di ebollizione è minore.
:::

:::attenzione{titolo="Interpretare un tratto piatto"}
Una curva sperimentale può avere un tratto quasi orizzontale anche quando un termostato mantiene la temperatura o quando le perdite bilanciano l’ingresso. Per attribuirlo a fusione o ebollizione si controlla che coesistano due fasi alla pressione dichiarata. Impurezze e pressione variabile possono rendere il tratto meno piatto del modello ideale.
:::
