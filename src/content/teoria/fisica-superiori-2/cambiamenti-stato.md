---
titolo: "Cambiamenti di stato e calore latente"
sommario: "Fusione, vaporizzazione, calore latente, curve di riscaldamento ed equilibrio con il ghiaccio."
---

## Stati della materia

:::definizione{#stati titolo="Solido, liquido e aeriforme"}
Un solido conserva forma e volume propri; un liquido conserva approssimativamente il volume e assume la forma del recipiente; un aeriforme occupa il volume disponibile. Il modello particellare descrive particelle che interagiscono e sono in agitazione termica. Un cambiamento di stato modifica la loro organizzazione e le distanze medie.

La fusione porta dal solido al liquido; la solidificazione avviene nel verso opposto. La vaporizzazione porta dal liquido all'aeriforme; la condensazione avviene nel verso opposto. La sublimazione avviene dal solido all'aeriforme e il brinamento dall'aeriforme al solido.
:::

## Calore latente

:::teorema{#latente titolo="Energia necessaria al passaggio di stato"}
Per una sostanza pura, durante un passaggio di stato a pressione costante e nelle condizioni di coesistenza delle due fasi, la temperatura resta costante. Il calore scambiato ha modulo
$$|Q|=mL,$$
dove $L$ è il **calore latente specifico** in $\mathrm{J/kg}$. Fusione e vaporizzazione assorbono calore; solidificazione e condensazione lo cedono. L'energia trasferita modifica l'energia interna associata alla struttura e alle interazioni tra particelle.

Per gli esercizi si assumono $L_f=334000\,\mathrm{J/kg}$ per il ghiaccio e $L_v=2260000\,\mathrm{J/kg}$ per l'acqua alla temperatura di ebollizione a pressione atmosferica normale.
:::

## Curve di riscaldamento

:::osservazione{#curva titolo="Tratti inclinati e tratti orizzontali"}
Con potenza assorbita costante, in una singola fase la temperatura varia secondo $Q=mc\Delta T$. Nel grafico temperatura-calore il tratto è inclinato. Durante il passaggio di stato il calore cresce e la temperatura resta costante, quindi compare un tratto orizzontale. La sua lunghezza sull'asse del calore è $mL$.

::grafico{linee="0,-10 20,0 60,0 100,20" xmin=0 xmax=100 ymin=-10 ymax=30 nomi="Q,T" titolo="Schema di fusione: il tratto orizzontale a $0\,\mathrm{^{\circ}C}$ rappresenta il calore assorbito dal ghiaccio durante la fusione"}
:::

## Riscaldamenti in più fasi

:::teorema{#fasi titolo="Sommare i contributi di energia"}
Per portare una massa di ghiaccio da una temperatura $T_i<0\,\mathrm{^{\circ}C}$ a una temperatura finale dell'acqua $T_f>0\,\mathrm{^{\circ}C}$, a pressione atmosferica normale e senza vaporizzazione,
$$Q=mc_g(0-T_i)+mL_f+mc_a(T_f-0).$$
$c_g$ e $c_a$ sono i calori specifici del ghiaccio e dell'acqua. Ciascun termine descrive una fase distinta. Per gli esercizi si assumono $c_g=2100\,\mathrm{J/(kg\,K)}$ e $c_a=4200\,\mathrm{J/(kg\,K)}$, salvo diversa indicazione. Per arrivare al vapore a $100\,\mathrm{^{\circ}C}$ si aggiungono il riscaldamento dell'acqua fino a $100\,\mathrm{^{\circ}C}$ e la vaporizzazione.
:::

## Ghiaccio in acqua

:::osservazione{#miscela titolo="Stabilire se tutto il ghiaccio fonde"}
In un sistema isolato con ghiaccio inizialmente a $0\,\mathrm{^{\circ}C}$ e acqua più calda, si confronta il calore che l'acqua può cedere raffreddandosi a zero con il calore necessario a fondere tutto il ghiaccio. Se $m_ac_aT_a<m_gL_f$, rimane ghiaccio e la temperatura finale è $0\,\mathrm{^{\circ}C}$. La massa fusa è $\dfrac{m_ac_aT_a}{L_f}$.

Se il calore disponibile è maggiore, tutto il ghiaccio fonde e l'energia residua riscalda l'intera massa d'acqua. Si scrive quindi $m_ac_a(T_a-T_e)=m_gL_f+m_gc_aT_e$. Questa relazione si usa dopo avere verificato che $T_e>0\,\mathrm{^{\circ}C}$.
:::

## Evaporazione, ebollizione e pressione

:::definizione{#pressione titolo="Le condizioni del passaggio di stato"}
L'**evaporazione** avviene dalla superficie di un liquido anche sotto la temperatura di ebollizione. Le particelle che si allontanano sottraggono energia al liquido; in assenza di compensazione questo favorisce il raffreddamento. L'**ebollizione** interessa tutto il liquido e avviene quando la pressione del vapore uguaglia la pressione esterna.

La temperatura di ebollizione dell'acqua è circa $100\,\mathrm{^{\circ}C}$ alla pressione di $1\,\mathrm{atm}$. Riducendo la pressione esterna, l'acqua bolle a temperatura inferiore. In una pentola a pressione la temperatura di ebollizione è maggiore. La dipendenza dalla pressione va considerata quando si confrontano esperienze svolte in condizioni diverse.
:::
