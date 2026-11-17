---
titolo: "Densità"
sommario: "Densità dei materiali, misure per immersione, corpi cavi, miscele e grafici massa-volume."
---

Massa e volume descrivono due proprietà diverse di un campione. Il loro rapporto permette di confrontare campioni di dimensioni diverse e di ricavare misure che lo strumento non fornisce direttamente.

## Densità di un materiale

:::definizione{#definizione titolo="Massa per unità di volume"}
Per un campione di massa $m$ e volume $V>0$, la **densità media** è il rapporto
$$
\rho=\frac{m}{V}.
$$
La lettera greca $\rho$ si legge *rho*. Il rapporto indica quanta massa corrisponde a una unità di volume. Un blocco omogeneo di massa $180\,\mathrm g$ e volume $60\,\mathrm{cm}^3$ ha densità $3\,\mathrm{g/cm^3}$. Ogni centimetro cubo del blocco contiene tre grammi di materiale.
:::

:::osservazione{#omogeneita titolo="Quanto conta la dimensione del campione"}
In un materiale omogeneo, a temperatura e pressione fissate, porzioni diverse dello stesso materiale hanno la stessa densità. Tagliare a metà il blocco da $180\,\mathrm g$ riduce la massa a $90\,\mathrm g$ e il volume a $30\,\mathrm{cm}^3$. Il rapporto resta $3\,\mathrm{g/cm^3}$ perché entrambi i termini vengono moltiplicati per un mezzo. Se all'interno del campione si alternano materiali diversi, $m/V$ descrive il campione nel suo insieme. Per ricavare la densità di un singolo materiale serve il suo volume e la sua massa.
:::

::grafico{f="3*x" xmin=0 xmax=70 ymin=0 ymax=215 punti="30,90,pieno,P;60,180,pieno,Q" nomi="V (cm³),m (g)" titolo="La porzione P e il campione Q hanno entrambi massa pari a tre volte il volume"}

## Problemi inversi

:::teorema{#inverse titolo="Ricavare massa o volume"}
Da $\rho=m/V$, con $V>0$, si ottiene $m=\rho V$ moltiplicando per $V$. Se $\rho>0$, si ricava $V=m/\rho$ dividendo la massa per la densità. Per un campione di densità $2{,}5\,\mathrm{g/cm^3}$ e volume $40\,\mathrm{cm}^3$, la massa vale $2{,}5\cdot40=100\,\mathrm g$. Viceversa $100\,\mathrm g$ di quel materiale occupano $\dfrac{100}{2{,}5}=40\,\mathrm{cm}^3$. Nella prima relazione le unità di volume si cancellano; nella seconda il grammo si cancella con il grammo contenuto nella densità al denominatore.
:::

:::esempio{titolo="Una differenza di volumi a densità costante"}
Un materiale da $4\,\mathrm{g/cm^3}$ perde un frammento da $3\,\mathrm{cm}^3$. La massa diminuisce di $4\cdot3=12\,\mathrm g$. Si applica la relazione al frammento perché è costituito dallo stesso materiale omogeneo. Il fatto che il nuovo volume sia minore giustifica la diminuzione della massa. La densità del materiale rimasto conserva il valore iniziale.
:::

## Unità della densità

::::teorema{#unita titolo="Chilogrammi al metro cubo e grammi al centimetro cubo"}
L'unità SI di densità è $\mathrm{kg/m^3}$. Una densità di $1\,\mathrm{g/cm^3}$ equivale a $1000\,\mathrm{kg/m^3}$. Per il passaggio inverso si divide il valore SI per mille.

:::dimostrazione
Nel rapporto $1\,\mathrm g$ per $1\,\mathrm{cm}^3$, il numeratore diventa $10^{-3}\,\mathrm{kg}$ e il denominatore diventa $10^{-6}\,\mathrm m^3$. Il rapporto dei fattori è $10^{-3}/10^{-6}=10^3$. Lo stesso fattore trasforma qualsiasi valore numerico espresso in grammi al centimetro cubo.
:::
::::

:::esempio{titolo="Quali fattori si cancellano"}
Un liquido di massa $600\,\mathrm g$ occupa $0{,}80\,\mathrm L$. Per la densità in $\mathrm{kg/L}$ è sufficiente convertire la massa a $0{,}600\,\mathrm{kg}$. Il rapporto è $0{,}75\,\mathrm{kg/L}$. Per il valore SI si ricorda che $1\,\mathrm L=10^{-3}\,\mathrm m^3$. La stessa massa per litro diventa $750\,\mathrm{kg/m^3}$. Poiché un litro contiene mille centimetri cubi, il valore in $\mathrm{g/cm^3}$ è anch'esso $0{,}75$.
:::

::grafico{f="1000*x" xmin=0 xmax=3 ymin=0 ymax=3000 punti="0.75,750,pieno,P" nomi="ρ (g/cm³),ρ (kg/m³)" titolo="Per la stessa densità il valore in kg/m³ è mille volte il valore in g/cm³"}

## Misurare un volume irregolare

:::osservazione{#spostamento titolo="Immersione e tara"}
In un cilindro graduato, registriamo la lettura iniziale $V_i$ e quella finale $V_f$. Se un solido non poroso viene immerso interamente, senza bolle, senza perdite di liquido e senza assorbimento, il suo volume è
$$
V=V_f-V_i.
$$
Le due letture comprendono entrambe il liquido iniziale, che si elimina con la differenza. Un aumento da $28$ a $40\,\mathrm{mL}$ corrisponde a $12\,\mathrm{cm}^3$ di solido, perché $1\,\mathrm{mL}=1\,\mathrm{cm}^3$. Per una massa di $36\,\mathrm g$, la densità vale $3\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=7 linee="0,6 0,0 2,0 2,6;5,6 5,0 7,0 7,6" poligoni="0,0 2,0 2,2.8 0,2.8;5,0 7,0 7,4 5,4;5.65,0.65 6.45,0.65 6.45,2.4 5.65,2.4" etichette="1,3.12,28 mL;6,4.35,40 mL" titolo="Prima e dopo l'immersione: il solido sposta 12 mL di liquido"}

:::attenzione{#condizioni-immersione titolo="Che cosa include il volume spostato"}
Un corpo immerso solo in parte sposta il volume della parte sott'acqua. Una bolla aderente sposta liquido insieme al corpo, facendo apparire il suo volume maggiore. Una perdita di liquido altera la lettura finale in senso opposto. Prima di applicare la differenza si controlla quindi la configurazione. Se un supporto entra nel liquido, anche il suo contributo deve essere incluso nella lettura di riferimento oppure sottratto separatamente.
:::

:::esempio{#tara titolo="La massa del liquido per differenza"}
Un recipiente asciutto pesa sulla bilancia $38\,\mathrm g$. Con $18\,\mathrm{cm}^3$ di liquido la lettura è $74\,\mathrm g$. Sottraiamo la **tara**, cioè la massa del recipiente. Il risultato è $74-38=36\,\mathrm g$. Ora il rapporto $\dfrac{36}{18}$ confronta la massa e il volume della stessa quantità di liquido. Usare la massa complessiva produrrebbe una densità più alta.
:::

## Solidi regolari e lastre

:::osservazione{#geometria titolo="Il volume prima della massa"}
Per un solido regolare si può ricavare il volume dalle misure geometriche. In un parallelepipedo rettangolo si moltiplicano area di base e altezza, cioè $V=Ah$. Le unità devono essere coerenti. Una lastra con area $120\,\mathrm{cm}^2$ e spessore $2\,\mathrm{mm}$ ha spessore $0{,}2\,\mathrm{cm}$ e volume $24\,\mathrm{cm}^3$. Se la densità è $2{,}5\,\mathrm{g/cm^3}$, la massa è $60\,\mathrm g$. La forma regolare permette di evitare una misura per immersione.
:::

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=7 ymin=-0.5 ymax=4.5 poligoni="0.5,1 5,1 6.3,2.3 1.8,2.3;0.5,1 0.5,0.65 5,0.65 5,1;5,1 5,0.65 6.3,1.95 6.3,2.3" etichette="3.4,1.72,A = 120 cm²;3.0,0.23,h = 2 mm" titolo="Area della base e spessore determinano il volume della lastra. Schema non in scala"}

## Corpi cavi e densità media

:::definizione{#cavita titolo="Volume esterno e volume del materiale"}
Un corpo cavo ha **volume esterno** $V_e$ che comprende il volume della parete $V_m$ e quello della cavità $V_c$. Vale $V_m=V_e-V_c$. Se la massa dell'aria è trascurabile, la massa del corpo è $m=\rho_m V_m$, dove $\rho_m$ è la densità del materiale. La densità media rispetto al volume esterno è invece $m/V_e$. Per $V_e=50\,\mathrm{cm}^3$, $V_c=30\,\mathrm{cm}^3$ e $\rho_m=4\,\mathrm{g/cm^3}$, si ottengono $m=80\,\mathrm g$ e densità media $1{,}6\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=6 poligoni="0,0 7,0 7,5 0,5" linee="1.5,1.1 5.5,1.1 5.5,3.9 1.5,3.9 1.5,1.1" etichette="3.5,2.5,cavità;0.7,4.5,parete" titolo="Il volume esterno include la cavità e la parete"}

:::esempio{titolo="Dalla massa alla frazione vuota"}
Un guscio da $80\,\mathrm g$ è fatto di materiale a $4\,\mathrm{g/cm^3}$ e ha volume esterno $50\,\mathrm{cm}^3$. La parete occupa $\dfrac{80}{4}=20\,\mathrm{cm}^3$. La cavità vale $50-20=30\,\mathrm{cm}^3$ e occupa il $60\%$ del volume esterno. Il calcolo presuppone che la massa della cavità sia trascurabile. Un liquido all'interno aggiungerebbe massa, da considerare separatamente.
:::

## Confrontare campioni

:::teorema{#confronti titolo="Stesso volume, stessa massa o stesso materiale"}
A volume uguale, $m=\rho V$ indica che la massa maggiore corrisponde alla densità maggiore. A massa uguale, $V=m/\rho$ indica che la densità maggiore corrisponde al volume minore. Se masse e volumi differiscono, occorre confrontare i due rapporti. Un campione da $90\,\mathrm g$ e $30\,\mathrm{cm}^3$ ha densità $3\,\mathrm{g/cm^3}$. Un secondo campione da $120\,\mathrm g$ e $60\,\mathrm{cm}^3$ è più massiccio, ma ha densità $2\,\mathrm{g/cm^3}$. Ha più massa perché occupa il doppio del volume.
:::

## Miscele

:::osservazione{#miscele titolo="Somma delle masse e ipotesi sui volumi"}
In assenza di perdite la massa della miscela è la somma delle masse. Se i volumi sono **additivi**, il volume finale è la somma dei volumi iniziali. Per due componenti si ottiene
$$
\rho_{\mathrm{mix}}=\frac{\rho_1V_1+\rho_2V_2}{V_1+V_2}.
$$
Ogni valore di densità è pesato dal volume del componente. Volumi uguali portano alla media aritmetica delle due densità. Con volumi diversi, la densità finale è più vicina a quella del componente con volume maggiore.
:::

:::esempio{#volume-finale titolo="Quando il volume finale è misurato"}
Si mescolano $40\,\mathrm{cm}^3$ di un liquido da $1\,\mathrm{g/cm^3}$ e $30\,\mathrm{cm}^3$ di un secondo da $2\,\mathrm{g/cm^3}$. Se la massa si conserva, il totale è $40+60=100\,\mathrm g$. Se dopo la miscelazione si misurano $65\,\mathrm{cm}^3$, la densità è $\dfrac{100}{65}\,\mathrm{g/cm^3}$. Si usa il volume finale misurato, poiché il valore $40+30$ presupporrebbe una ipotesi di additività non soddisfatta.
:::

## Grafico massa-volume

:::osservazione{#grafico titolo="La densità come pendenza"}
Per più porzioni dello stesso materiale omogeneo, la legge $m=\rho V$ descrive una retta che passa per l'origine. Con volume sull'asse orizzontale e massa su quello verticale, la pendenza è $\Delta m/\Delta V$. In grammi e centimetri cubi ha unità $\mathrm{g/cm^3}$. Sul grafico una retta più ripida rappresenta più massa aggiunta per lo stesso volume. Lo scambio degli assi scambia il rapporto: con massa in ascissa si misura $\Delta V/\Delta m$, che vale $1/\rho$.
:::

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V (cm³),m (g)" legenda="ρ = 2 g/cm³;ρ = 3 g/cm³" punti="4,8,pieno,A;4,12,pieno,B" titolo="A parità di volume la retta più ripida dà la massa maggiore"}

:::esempio{#intercetta titolo="Separare la tara dalla pendenza"}
Un recipiente riempito a volumi diversi dà le coppie $(10;70)$ e $(30;110)$, con volume in centimetri cubi e massa totale in grammi. La pendenza è $\dfrac{110-70}{30-10}=2\,\mathrm{g/cm^3}$. La massa a volume zero è $70-2\cdot10=50\,\mathrm g$, cioè la tara. Dividere la massa totale per il volume di una singola misura includerebbe la tara e sovrastimerebbe la densità del liquido.
:::
