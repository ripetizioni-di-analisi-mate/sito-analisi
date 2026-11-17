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
La lettera greca $\rho$ si legge *rho*. Il rapporto indica quanta massa corrisponde a una unità di volume. Un blocco omogeneo di massa $180\,\mathrm{g}$ e volume $60\,\mathrm{cm}^3$ ha densità $3\,\mathrm{g/cm^3}$. Ogni centimetro cubo del blocco contiene tre grammi di materiale.
:::

:::osservazione{#omogeneita titolo="Quanto conta la dimensione del campione"}
In un materiale omogeneo, a temperatura e pressione fissate, porzioni diverse dello stesso materiale hanno la stessa densità. Tagliare a metà il blocco da $180\,\mathrm{g}$ riduce la massa a $90\,\mathrm{g}$ e il volume a $30\,\mathrm{cm}^3$. Il rapporto resta $3\,\mathrm{g/cm^3}$ perché entrambi i termini vengono moltiplicati per un mezzo. Se all'interno del campione si alternano materiali diversi, $\dfrac{m}{V}$ descrive il campione nel suo insieme. Per ricavare la densità di un singolo materiale serve il suo volume e la sua massa.
:::

::grafico{f="3*x" xmin=0 xmax=70 ymin=0 ymax=215 punti="30,90,pieno,P;60,180,pieno,Q" nomi="V (cm³),m (g)" legenda="m=3V" titolo="Per P e Q il valore della massa in grammi è tre volte quello del volume in centimetri cubi"}

## Problemi inversi

:::teorema{#inverse titolo="Ricavare massa o volume"}
L'uguaglianza $\rho=\dfrac{m}{V}$ è definita per $V>0$. Moltiplicando entrambi i membri per $V$ si ricava $m=\rho V$. Se $\rho>0$, si ricava $V=\dfrac{m}{\rho}$ dividendo la massa per la densità. Per un campione di densità $2{,}5\,\mathrm{g/cm^3}$ e volume $40\,\mathrm{cm}^3$, la massa vale $2{,}5\cdot40=100\,\mathrm{g}$. Viceversa $100\,\mathrm{g}$ di quel materiale occupano $\dfrac{100}{2{,}5}=40\,\mathrm{cm}^3$. Nella prima relazione le unità di volume si cancellano. Nella seconda il grammo si cancella con il grammo contenuto nella densità al denominatore.
:::

:::esempio{titolo="Una differenza di volumi a densità costante"}
Un materiale da $4\,\mathrm{g/cm^3}$ perde un frammento da $3\,\mathrm{cm}^3$. La massa diminuisce di $4\cdot3=12\,\mathrm{g}$. Si applica la relazione al frammento perché è costituito dallo stesso materiale omogeneo. Il fatto che il nuovo volume sia minore giustifica la diminuzione della massa. La densità del materiale rimasto conserva il valore iniziale.
:::

:::esempio{#variazione-volume titolo="Il volume cambia a massa fissata"}
Un campione chiuso conserva una massa di $250\,\mathrm{g}$. Il suo volume passa da $100$ a $110\,\mathrm{cm^3}$. Nel rapporto massa-volume cambia soltanto il denominatore. Si ricavano
$$
\rho_i=\frac{250}{100}\,\mathrm{g/cm^3}=2{,}50\,\mathrm{g/cm^3},
\qquad
\rho_f=\frac{250}{110}\,\mathrm{g/cm^3}\simeq2{,}27\,\mathrm{g/cm^3}.
$$
Per misurare il calo relativo si confrontano le due densità a partire dal valore iniziale. Il rapporto $\dfrac{\rho_f}{\rho_i}=\dfrac{100}{110}=\dfrac{10}{11}$ mostra che il calo vale $\dfrac{1}{11}$, cioè circa il $9{,}1\%$. Il volume è cresciuto del $10\%$. Le due percentuali sono diverse perché la relazione fra densità e volume a massa fissata è inversa. Il caso del frammento rimosso segue una relazione diversa, poiché lì massa e volume variano insieme.
:::

## Unità della densità

::::teorema{#unita titolo="Chilogrammi al metro cubo e grammi al centimetro cubo"}
L'unità SI di densità è $\mathrm{kg/m^3}$. Una densità di $1\,\mathrm{g/cm^3}$ equivale a $1000\,\mathrm{kg/m^3}$. Per il passaggio inverso si divide il valore SI per mille.

:::dimostrazione
Nel rapporto $1\,\mathrm{g}$ per $1\,\mathrm{cm}^3$, il numeratore diventa $10^{-3}\,\mathrm{kg}$ e il denominatore diventa $10^{-6}\,\mathrm{m}^3$. Il rapporto dei fattori è $\dfrac{10^{-3}}{10^{-6}}=10^3$. Lo stesso fattore trasforma qualsiasi valore numerico espresso in grammi al centimetro cubo.
:::
::::

:::esempio{titolo="Quali fattori si cancellano"}
Un liquido di massa $600\,\mathrm{g}$ occupa $0{,}80\,\mathrm{L}$. Per la densità in $\mathrm{kg/L}$ è sufficiente convertire la massa a $0{,}600\,\mathrm{kg}$. Il rapporto è $0{,}75\,\mathrm{kg/L}$. Per il valore SI si ricorda che $1\,\mathrm{L}=10^{-3}\,\mathrm{m}^3$. La stessa massa per litro diventa $750\,\mathrm{kg/m^3}$. Poiché un litro contiene mille centimetri cubi, il valore in $\mathrm{g/cm^3}$ è anch'esso $0{,}75$.
:::

::grafico{f="1000*x" xmin=0 xmax=3 ymin=0 ymax=3000 punti="0.75,750,pieno,P" nomi="ρ (g/cm³),ρ (kg/m³)" legenda="\rho_{\mathrm{kg/m^3}}=1000\rho_{\mathrm{g/cm^3}}" titolo="Per la stessa densità il valore in kg/m³ è mille volte il valore in g/cm³"}

## Misurare un volume irregolare

:::osservazione{#spostamento titolo="Immersione e tara"}
In un cilindro graduato, registriamo la lettura iniziale $V_i$ e quella finale $V_f$. Se un solido non poroso viene immerso interamente, senza bolle, senza perdite di liquido e senza assorbimento, il suo volume è
$$
V=V_f-V_i.
$$
Le due letture comprendono entrambe il liquido iniziale, che si elimina con la differenza. Un aumento da $28$ a $40\,\mathrm{mL}$ corrisponde a $12\,\mathrm{cm}^3$ di solido, perché $1\,\mathrm{mL}=1\,\mathrm{cm}^3$. Per una massa di $36\,\mathrm{g}$, la densità vale $3\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=9 ymin=-1 ymax=7 linee="0,6 0,0 2,0 2,6;5,6 5,0 7,0 7,6" poligoni="0,0 2,0 2,2.8 0,2.8;5,0 7,0 7,4 5,4;5.4,0.8 6.6,0.8 6.6,2.8 5.4,2.8" etichette="1,3.12,28 mL;6,4.35,40 mL" titolo="Prima e dopo l'immersione: il solido sposta 12 mL di liquido"}

:::attenzione{#condizioni-immersione titolo="Che cosa include il volume spostato"}
Un corpo immerso solo in parte sposta il volume della parte sott'acqua. Una bolla aderente sposta liquido insieme al corpo, facendo apparire il suo volume maggiore. Una perdita di liquido altera la lettura finale in senso opposto. Prima di applicare la differenza si controlla quindi la configurazione. Se un supporto entra nel liquido, anche il suo contributo deve essere incluso nella lettura di riferimento oppure sottratto separatamente.
:::

:::esempio{#tara titolo="La massa del liquido per differenza"}
Un recipiente asciutto pesa sulla bilancia $38\,\mathrm{g}$. Con $18\,\mathrm{cm}^3$ di liquido la lettura è $74\,\mathrm{g}$. Sottraiamo la **tara**, cioè la massa del recipiente. Il risultato è $74-38=36\,\mathrm{g}$. Ora il rapporto $\dfrac{36}{18}$ confronta la massa e il volume della stessa quantità di liquido. Usare la massa complessiva produrrebbe una densità più alta.
:::

:::esempio{#tara-del-sostegno titolo="Misura con un sostegno immerso"}
Per tenere un oggetto irregolare di $42\,\mathrm{g}$ del tutto immerso senza toccare il fondo del cilindro si usa un supporto rigido. Si registrano queste letture.

| Configurazione | Lettura (mL) |
| --- | ---: |
| Solo liquido | 22 |
| Liquido e sostegno | 24 |
| Liquido, sostegno e oggetto | 39 |

La seconda riga è il riferimento per isolare il volume dell'oggetto. Sottraendo $24\,\mathrm{mL}$ da $39\,\mathrm{mL}$ si ottengono $15\,\mathrm{cm^3}$. Perciò $\rho=\dfrac{42}{15}\,\mathrm{g/cm^3}=2{,}8\,\mathrm{g/cm^3}$.

Anche la prima riga consente di controllare il risultato. L'aumento complessivo è $17\,\mathrm{mL}$, dei quali $2\,\mathrm{mL}$ sono dovuti al sostegno. Se si usassero tutti i $17\,\mathrm{mL}$, il denominatore sarebbe più grande del volume dell'oggetto e la densità risulterebbe troppo bassa. La correzione richiede che il sostegno sposti la stessa quantità di liquido nelle ultime due letture.
:::

## Solidi regolari e lastre

:::osservazione{#geometria titolo="Il volume prima della massa"}
Per un solido regolare si può ricavare il volume dalle misure geometriche. In un parallelepipedo rettangolo si moltiplicano area di base e altezza, cioè $V=Ah$. Le unità devono essere coerenti. Una lastra con area $120\,\mathrm{cm}^2$ e spessore $2\,\mathrm{mm}$ ha spessore $0{,}2\,\mathrm{cm}$ e volume $24\,\mathrm{cm}^3$. Se la densità è $2{,}5\,\mathrm{g/cm^3}$, la massa è $60\,\mathrm{g}$. La forma regolare permette di evitare una misura per immersione.
:::

::grafico{assi=0 uguale=1 xmin=-0.5 xmax=7 ymin=-0.5 ymax=4.5 poligoni="0.5,1 5,1 6.3,2.3 1.8,2.3;0.5,1 0.5,0.65 5,0.65 5,1;5,1 5,0.65 6.3,1.95 6.3,2.3" etichette="3.4,1.72,A = 120 cm²;3.0,0.23,h = 2 mm" titolo="Area della base e spessore determinano il volume della lastra. Schema non in scala"}

:::esempio{#lastra-forata titolo="Sottrarre il volume del foro"}
Da una lastra rettangolare di $15\,\mathrm{cm}$ per $10\,\mathrm{cm}$ si ricava un foro quadrato di lato $5\,\mathrm{cm}$ che attraversa tutto lo spessore di $4\,\mathrm{mm}$. L'area del materiale rimasto è $150-25=125\,\mathrm{cm^2}$. Poiché lo spessore è uniforme, si moltiplica quest'area per $0{,}4\,\mathrm{cm}$ e si ottiene $V=50\,\mathrm{cm^3}$.

::grafico{assi=0 uguale=1 xmin=-2 xmax=18 ymin=-2 ymax=12 linee="0,0 15,0 15,10 0,10 0,0;5,2.5 10,2.5 10,7.5 5,7.5 5,2.5" segmenti="0,-0.8,15,-0.8;15.8,0,15.8,10" etichette="7.5,-1.35,15 cm;17,5,10 cm;7.5,5,5 cm" titolo="Pianta della lastra. L'area del quadrato interno viene sottratta da quella del rettangolo."}

Con $\rho=2{,}7\,\mathrm{g/cm^3}$ la massa rimasta è $135\,\mathrm{g}$. Una verifica separa il pezzo tolto dalla lastra piena. Il foro ha volume $25\cdot0{,}4=10\,\mathrm{cm^3}$, quindi sono stati rimossi $27\,\mathrm{g}$. La lastra piena aveva volume $60\,\mathrm{cm^3}$ e massa $162\,\mathrm{g}$. La differenza $162-27$ restituisce la massa misurabile della lastra forata.
:::

:::esempio{#due-misure-volume titolo="Confrontare due misure dello stesso volume"}
Si misura un parallelepipedo con lati di $120$, $20$ e $5\,\mathrm{mm}$. Il volume geometrico è $12\,000\,\mathrm{mm^3}=12\,\mathrm{cm^3}$. In un cilindro graduato si legge prima $28{,}0\,\mathrm{mL}$ e poi $39{,}5\,\mathrm{mL}$ dopo l'immersione completa. La differenza centrale vale $11{,}5\,\mathrm{cm^3}$.

Supponiamo che ogni lettura abbia un'incertezza assoluta di $0{,}5\,\mathrm{mL}$. Il minimo si ottiene sottraendo alla lettura finale più bassa quella iniziale più alta. Il massimo si ottiene con gli estremi opposti.
$$
V_{\min}=(39{,}0-28{,}5)\,\mathrm{cm^3}=10{,}5\,\mathrm{cm^3},
\qquad
V_{\max}=(40{,}0-27{,}5)\,\mathrm{cm^3}=12{,}5\,\mathrm{cm^3}.
$$
Il valore geometrico di $12\,\mathrm{cm^3}$ appartiene all'intervallo. Entro la precisione del cilindro, le due misure sono compatibili. Se il solido ha massa $32{,}4\,\mathrm{g}$, la densità ricavata con il volume geometrico è $2{,}7\,\mathrm{g/cm^3}$. È utile riportare quale misura del volume è stata usata, perché è il dato da cui dipende la precisione del rapporto insieme alla massa.
:::

## Corpi cavi e densità media

:::definizione{#cavita titolo="Volume esterno e volume del materiale"}
Un corpo cavo ha **volume esterno** $V_e$ che comprende il volume della parete $V_m$ e quello della cavità $V_c$. Vale $V_m=V_e-V_c$. Se la massa dell'aria è trascurabile, la massa del corpo è $m=\rho_m V_m$, dove $\rho_m$ è la densità del materiale. La densità media rispetto al volume esterno è invece $\dfrac{m}{V_e}$. Per $V_e=50\,\mathrm{cm}^3$, $V_c=30\,\mathrm{cm}^3$ e $\rho_m=4\,\mathrm{g/cm^3}$, si ottengono $m=80\,\mathrm{g}$ e densità media $1{,}6\,\mathrm{g/cm^3}$.
:::

::grafico{assi=0 uguale=1 xmin=-1 xmax=8 ymin=-1 ymax=6 poligoni="0,0 7,0 7,5 0,5" linee="1.5,1.1 5.5,1.1 5.5,3.9 1.5,3.9 1.5,1.1" etichette="3.5,2.5,cavità;0.7,4.5,parete" titolo="Il volume esterno include la cavità e la parete"}

:::esempio{titolo="Dalla massa alla frazione vuota"}
Un guscio da $80\,\mathrm{g}$ è fatto di materiale a $4\,\mathrm{g/cm^3}$ e ha volume esterno $50\,\mathrm{cm}^3$. La parete occupa $\dfrac{80}{4}=20\,\mathrm{cm}^3$. La cavità vale $50-20=30\,\mathrm{cm}^3$ e occupa il $60\%$ del volume esterno. Il calcolo presuppone che la massa della cavità sia trascurabile. Un liquido all'interno aggiungerebbe massa, da considerare separatamente.
:::

:::esempio{#cavita-riempita titolo="Volume interno ricavato dalla massa aggiunta"}
Un contenitore rigido ha volume esterno $50\,\mathrm{cm^3}$ e massa a vuoto $90\,\mathrm{g}$. Dopo aver riempito tutta la cavità con un liquido di densità $1{,}25\,\mathrm{g/cm^3}$ si leggono $130\,\mathrm{g}$. Supponiamo trascurabile la massa dell'aria sostituita. Poiché l'involucro è lo stesso nelle due pesate, la differenza di $40\,\mathrm{g}$ è la massa del liquido. Il suo volume è $\dfrac{40}{1{,}25}=32\,\mathrm{cm^3}$ e coincide con quello della cavità.

::grafico{f="90+1.25*x" xmin=0 xmax=32 ymin=85 ymax=135 punti="0,90,pieno;32,130,pieno" nomi="V (cm³),m (g)" titolo="La massa cresce durante il riempimento, fino a 130 g. La pendenza è la densità del liquido."}

Il materiale della parete occupa $50-32=18\,\mathrm{cm^3}$. La densità del materiale è allora $\dfrac{90}{18}=5\,\mathrm{g/cm^3}$. Si usano la massa e il volume della sola parete. Il rapporto $\dfrac{130}{50}=2{,}6\,\mathrm{g/cm^3}$ descrive invece l'oggetto pieno riferito al suo volume esterno.
:::

## Confrontare campioni

:::teorema{#confronti titolo="Stesso volume, stessa massa o stesso materiale"}
A volume uguale, $m=\rho V$ indica che la massa maggiore corrisponde alla densità maggiore. A massa uguale, $V=\dfrac{m}{\rho}$ indica che la densità maggiore corrisponde al volume minore. Se masse e volumi differiscono, occorre confrontare i due rapporti. Un campione da $90\,\mathrm{g}$ e $30\,\mathrm{cm}^3$ ha densità $3\,\mathrm{g/cm^3}$. Un secondo campione da $120\,\mathrm{g}$ e $60\,\mathrm{cm}^3$ è più massiccio, ma ha densità $2\,\mathrm{g/cm^3}$. Ha più massa perché occupa il doppio del volume.
:::

:::osservazione{#intervallo-densita titolo="Le incertezze possono cambiare il confronto"}
La massa di un campione è compresa fra $117$ e $119\,\mathrm{g}$ e il volume fra $39$ e $41\,\mathrm{cm^3}$. Se non si hanno altre informazioni, il rapporto più basso si ottiene con la massa minore e il volume maggiore. Il più alto si ottiene accoppiando gli altri estremi.

$$
\frac{117}{41}\,\mathrm{g/cm^3}\leq\rho\leq\frac{119}{39}\,\mathrm{g/cm^3}.
$$

L'intervallo va da circa $2{,}85$ a $3{,}05\,\mathrm{g/cm^3}$. Il valore centrale $\dfrac{118}{40}=2{,}95$ è inferiore a $3$, ma una densità di $3\,\mathrm{g/cm^3}$ è ancora compatibile con le misure. Un volume di $39{,}5\,\mathrm{cm^3}$ e una massa di $118{,}5\,\mathrm{g}$ producono proprio quel valore. Se il confronto deve distinguere due materiali vicini, occorre misurare massa o volume con un'incertezza minore.

::grafico{f="117000/x;119000/x" xmin=39 xmax=41 ymin=2800 ymax=3090 punti="40,2950,pieno;39.5,3000,pieno" nomi="V (cm³),ρ (kg/m³)" legenda="m=117\,\mathrm{g};m=119\,\mathrm{g}" titolo="Per ogni volume ammesso, le due curve delimitano le densità compatibili con le masse misurate."}
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
Si mescolano $40\,\mathrm{cm}^3$ di un liquido da $1\,\mathrm{g/cm^3}$ e $30\,\mathrm{cm}^3$ di un secondo da $2\,\mathrm{g/cm^3}$. Se la massa si conserva, il totale è $40+60=100\,\mathrm{g}$. Se dopo la miscelazione si misurano $65\,\mathrm{cm}^3$, la densità è $\dfrac{100}{65}\,\mathrm{g/cm^3}$. Si usa il volume finale misurato, poiché il valore $40+30$ presupporrebbe una ipotesi di additività non soddisfatta.
:::

:::esempio{#masse-uguali titolo="Una composizione con masse uguali"}
Due componenti da $120\,\mathrm{g}$ ciascuno hanno densità $2$ e $6\,\mathrm{g/cm^3}$. I volumi iniziali sono $60$ e $20\,\mathrm{cm^3}$. Se il volume totale è la somma dei due, si ha $V=80\,\mathrm{cm^3}$, quindi $\rho_{\mathrm{mix}}=\dfrac{240}{80}=3\,\mathrm{g/cm^3}$. Il componente meno denso occupa tre quarti del volume, pur contribuendo a metà della massa.

La media aritmetica delle densità, $4\,\mathrm{g/cm^3}$, si otterrebbe se i due volumi fossero uguali. Infatti, se $f$ è la frazione di volume del componente più denso, vale
$$
\rho_{\mathrm{mix}}=2(1-f)+6f=2+4f
\qquad\text{in }\mathrm{g/cm^3}.
$$
Nell'esempio $f=\dfrac{20}{80}=\dfrac14$. Se si vuole raggiungere $4\,\mathrm{g/cm^3}$, occorre invece $f=\dfrac12$. Il grafico permette di passare dalla composizione alla densità e di ricavare la composizione per una densità assegnata.

::grafico{f="2+0.04*x" xmin=0 xmax=100 ymin=1.5 ymax=6.5 punti="25,3,pieno,A;50,4,pieno,B" nomi="Quota in volume (%),ρ (g/cm³)" titolo="A corrisponde alle masse uguali. In B il componente più denso occupa metà del volume."}
:::

## Grafico massa-volume

:::osservazione{#grafico titolo="La densità come pendenza"}
Per più porzioni dello stesso materiale omogeneo, la legge $m=\rho V$ descrive una retta che passa per l'origine. Con volume sull'asse orizzontale e massa su quello verticale, la pendenza è $\dfrac{\Delta m}{\Delta V}$. In grammi e centimetri cubi ha unità $\mathrm{g/cm^3}$. Sul grafico una retta più ripida rappresenta più massa aggiunta per lo stesso volume. Lo scambio degli assi scambia il rapporto: con massa in ascissa si misura $\dfrac{\Delta V}{\Delta m}$, che vale $\dfrac{1}{\rho}$.
:::

::grafico{f="2*x;3*x" xmin=0 xmax=5 ymin=0 ymax=16 nomi="V (cm³),m (g)" legenda="ρ = 2 g/cm³;ρ = 3 g/cm³" punti="4,8,pieno,A;4,12,pieno,B" titolo="A parità di volume la retta più ripida dà la massa maggiore"}

:::esempio{#intercetta titolo="Separare la tara dalla pendenza"}
Un recipiente riempito a volumi diversi dà le coppie $(10;70)$ e $(30;110)$, con volume in centimetri cubi e massa totale in grammi. La pendenza è $\dfrac{110-70}{30-10}=2\,\mathrm{g/cm^3}$. La massa a volume zero è $70-2\cdot10=50\,\mathrm{g}$, cioè la tara. Dividere la massa totale per il volume di una singola misura includerebbe la tara e sovrastimerebbe la densità del liquido.
:::

:::esempio{#grafici-con-tara titolo="Due recipienti con la stessa lettura"}
Nei recipienti $A$ e $B$ si versano due liquidi. Le rette misurate sono $m_A=42+1{,}2V$ e $m_B=18+2{,}4V$, con il volume espresso in centimetri cubi e la massa totale in grammi. A vuoto ha massa maggiore $A$, che ha tara di $42\,\mathrm{g}$. Il liquido di $B$ è più denso, poiché la sua massa cresce di $2{,}4\,\mathrm{g}$ per ogni centimetro cubo, il doppio dell'altro liquido.

Per trovare il volume al quale la bilancia dà la stessa lettura, si uguagliano le due ordinate. Si ottiene $24=1{,}2V$, da cui $V=20\,\mathrm{cm^3}$. La lettura comune è $66\,\mathrm{g}$. La massa del liquido è $24\,\mathrm{g}$ in $A$ e $48\,\mathrm{g}$ in $B$. Le due pesate coincidono perché la maggiore massa del liquido in $B$ bilancia la maggiore tara in $A$.

::grafico{f="42+1.2*x;18+2.4*x" xmin=0 xmax=35 ymin=0 ymax=110 punti="20,66,pieno,E" nomi="V (cm³),m (g)" legenda="\mathrm{A};\mathrm{B}" titolo="L'intersezione E indica una stessa massa totale, con tare e densità diverse."}
:::

:::attenzione{#controllo-terza-misura titolo="Verificare la pendenza con un'altra lettura"}
Per un recipiente si misurano $52\,\mathrm{g}$ a vuoto e $72\,\mathrm{g}$ dopo aver aggiunto $10\,\mathrm{cm^3}$ di un liquido. Queste due letture fissano la tara e la pendenza $\dfrac{72-52}{10}=2\,\mathrm{g/cm^3}$. Se lo stesso modello è valido fino a $30\,\mathrm{cm^3}$, si prevede una massa totale di $52+2\cdot30=112\,\mathrm{g}$.

Una terza lettura di $116\,\mathrm{g}$ supera la previsione di $4\,\mathrm{g}$. Se i dati sono esatti, le tre coppie non appartengono alla stessa retta. Tra la seconda e la terza misura l'incremento è infatti di $44\,\mathrm{g}$ su $20\,\mathrm{cm^3}$, cioè $2{,}2\,\mathrm{g/cm^3}$. Il confronto segnala che occorre verificare il modello o le misure. Da questo scarto da solo non si può identificare se sia cambiato il liquido, se la bilancia fosse alterata o se la lettura di volume sia imprecisa.
:::
