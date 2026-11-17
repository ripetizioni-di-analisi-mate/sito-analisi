---
titolo: Secondo principio, macchine termiche ed entropia
sommario: Il verso dei processi spontanei, il rendimento delle macchine termiche, il ciclo di Carnot e il bilancio di entropia.
---

## Trasformazioni reversibili e irreversibili

:::definizione{#reversibilita titolo="Reversibilità"}
Una trasformazione è **reversibile** se si può invertire riportando allo stato iniziale sia il sistema sia l'ambiente. Per ottenere questo risultato si devono poter invertire gli scambi con variazioni infinitesime delle condizioni esterne, in assenza di attrito e di altre dissipazioni.

Un gas sotto un pistone senza attrito fornisce un esempio. Se la pressione esterna supera di pochissimo quella del gas, il pistone comprime il gas lentamente. Una diminuzione infinitesima della pressione esterna permette di ottenere una lenta espansione. Nel modello reversibile il gas attraversa, in ordine opposto, gli stessi stati intermedi. Un contatto termico reversibile richiede, allo stesso modo, che la differenza di temperatura sia infinitesima.
:::

:::osservazione
La lentezza mantiene il sistema vicino all'equilibrio, quindi la trasformazione è quasi statica. Se il pistone sfrega, però, si dissipa energia in entrambi i versi di moto. Al termine di un'andata e ritorno il gas può trovarsi nello stato iniziale, mentre l'ambiente ha ricevuto energia che prima aveva un'altra forma. Perciò la trasformazione è **irreversibile** anche se è lenta.

Il passaggio spontaneo di calore fra due corpi a temperature diverse è un altro processo irreversibile. Se il corpo caldo cede $100\,\mathrm{J}$, il corpo freddo riceve $100\,\mathrm{J}$. Lo scambio nel verso opposto soddisferebbe a sua volta la conservazione dell'energia. Il primo principio stabilisce la quantità di energia trasferita, mentre il secondo principio permette di determinare il verso spontaneo dello scambio.
:::

:::esempio{titolo="Energia dissipata dall'attrito in un'andata e ritorno"}
Un pistone compie una corsa di compressione di $0{,}20\,\mathrm{m}$ e una corsa di espansione di $0{,}20\,\mathrm{m}$, con una forza di attrito costante di $15\,\mathrm{N}$. Lo spostamento complessivo è $0{,}40\,\mathrm{m}$, perciò l'attrito dissipa $15\,\mathrm{N}\cdot0{,}40\,\mathrm{m}=6{,}0\,\mathrm{J}$. Questa energia passa alle pareti e all'ambiente sotto forma di calore e non viene restituita dal moto inverso. Il gas ritorna allo stato iniziale, mentre l'ambiente ha acquistato $6{,}0\,\mathrm{J}$ di energia termica, quindi la trasformazione è irreversibile.
:::

## Enunciati del secondo principio

:::teorema{#secondo-principio titolo="Enunciati di Clausius e Kelvin-Planck"}
L'enunciato di **Clausius** esclude un processo il cui unico risultato sia il trasferimento di calore da un corpo freddo a uno caldo. In un frigorifero avviene un trasferimento di questo tipo e il compressore riceve anche lavoro dall'esterno.

L'enunciato di **Kelvin-Planck** esclude una macchina ciclica il cui unico risultato sia il prelievo di calore da una sola sorgente e la sua conversione integrale in lavoro. In una macchina che scambia calore con due sole sorgenti, una parte del calore assorbito dalla sorgente calda deve quindi essere ceduta alla sorgente fredda.
:::

::::teorema{#equivalenza-enunciati titolo="Equivalenza dei due enunciati"}
Una violazione dell'enunciato di Clausius permetterebbe di violare quello di Kelvin-Planck, e viceversa.

:::dimostrazione
Un motore ordinario assorbe $Q_h$ dalla sorgente calda e cede $Q_c$ alla fredda. Supponiamo che un dispositivo possa riportare esattamente $Q_c$ dalla sorgente fredda a quella calda senza ricevere lavoro. La sorgente fredda ritrova la sua energia iniziale. Il sistema combinato preleva $Q_h-Q_c$ dalla sola sorgente calda e compie un lavoro di pari energia. Questo contraddice Kelvin-Planck.

Supponiamo ora che una macchina possa produrre lavoro $W$ convertendo integralmente un prelievo di calore $W$ dalla sorgente calda. Con quel lavoro si aziona un frigorifero che sottrae $Q_c$ alla sorgente fredda e cede $Q_c+W$ alla calda. Il lavoro viene prodotto e consumato all'interno del sistema combinato. La sorgente calda riceve in totale $Q_c$, quindi l'unico risultato è il trasferimento di calore dalla sorgente fredda a quella calda. Questo contraddice Clausius.
:::
::::

:::attenzione
In una singola espansione isoterma reversibile di un gas ideale l'energia interna resta costante. Il calore assorbito coincide quindi con il lavoro compiuto. Il gas termina a volume maggiore, perciò l'espansione da sola non costituisce un ciclo. Per tornare allo stato iniziale servono altre trasformazioni.
:::

:::esempio{titolo="Una macchina con una sola sorgente"}
Si dichiara una macchina ciclica che assorbe $500\,\mathrm{J}$ per ciclo dall'acqua di un lago a $290\,\mathrm{K}$ e produce $500\,\mathrm{J}$ di lavoro, senza cedere calore ad altre sorgenti. Il primo principio è soddisfatto, perché $Q_h-W=(500-500)\,\mathrm{J}=0=\Delta U$. Il rendimento dichiarato è $\eta=\dfrac{500\,\mathrm{J}}{500\,\mathrm{J}}=1$, con $Q_c=0$. L'unico risultato del ciclo sarebbe la conversione integrale di calore in lavoro con una sola sorgente, quindi la macchina viola l'enunciato di Kelvin-Planck e non può esistere.
:::

## Macchine termiche e rendimento

:::definizione{#rendimento titolo="Bilancio di una macchina termica"}
Un motore termico ciclico assorbe una quantità di calore $Q_h>0$ dalla sorgente calda, cede una quantità $Q_c>0$ a quella fredda e compie lavoro netto $W>0$. Le lettere $h$ e $c$ indicano rispettivamente la sorgente calda e quella fredda. Le due quantità $Q_h$ e $Q_c$ sono moduli. Con il segno del calore riferito al fluido, il calore netto assorbito è invece $Q_h-Q_c$.

Poiché il fluido torna allo stato iniziale, si ha $\Delta U=0$. Applicando il primo principio a tutto il ciclo si ottiene
$$
0=Q_h-Q_c-W,\qquad W=Q_h-Q_c.
$$
Il **rendimento** è la frazione del calore assorbito che la macchina fornisce come lavoro utile,
$$
\eta=\frac{W}{Q_h}=1-\frac{Q_c}{Q_h}.
$$
Il rapporto è privo di unità perché numeratore e denominatore sono energie. Il calore netto coincide con $W$, perciò al denominatore si usa il calore assorbito $Q_h$.
:::

:::esempio{titolo="Energia per ciclo e potenza"}
Una macchina assorbe $2000\,\mathrm{J}$ per ciclo e ne cede $1400\,\mathrm{J}$. Il bilancio fornisce
$$
\begin{aligned}
W &= (2000-1400)\,\mathrm{J}=600\,\mathrm{J},\\[6pt]
\eta &= \frac{600\,\mathrm{J}}{2000\,\mathrm{J}}=0{,}30.
\end{aligned}
$$
Il rendimento è quindi del $30\%$. Con una frequenza di $5\,\mathrm{Hz}$ la macchina ripete il ciclo cinque volte in un secondo. La potenza media resa è $P=fW=(5\cdot600)\,\mathrm{W}=3000\,\mathrm{W}$. Alla sorgente fredda vengono ceduti $7000\,\mathrm{W}$, quindi la somma delle due potenze in uscita è pari ai $10000\,\mathrm{W}$ assorbiti.

::grafico{assi=0 uguale=1 linee="-2,2 2,2 2,3 -2,3 -2,2;-1,-0.65 1,-0.65 1,0.65 -1,0.65 -1,-0.65;-2,-3 2,-3 2,-2 -2,-2 -2,-3" vettori="0,1.95,0,0.7,Q_h;0,-0.7,0,-1.95,Q_c;1.05,0,2.85,0,W" etichette="-1.37,2.5,Sorgente calda;-0.61,0.03,Motore;-1.38,-2.5,Sorgente fredda" xmin=-3 xmax=4 ymin=-3.6 ymax=3.6 titolo="Bilancio per ciclo. Entrano $Q_h=2000\,\mathrm{J}$ ed escono $Q_c=1400\,\mathrm{J}$ e $W=600\,\mathrm{J}$."}

:::

## Ciclo e teorema di Carnot

:::definizione{#ciclo-carnot titolo="Le quattro trasformazioni del ciclo"}
Il ciclo di Carnot si svolge tra due sorgenti a temperature assolute $T_h>T_c>0$. Nel funzionamento come motore il fluido si espande in contatto con la sorgente calda e assorbe calore a temperatura $T_h$. Prosegue poi in espansione adiabatica reversibile fino a $T_c$. Alla temperatura $T_c$ viene compresso e cede calore alla sorgente fredda. Una compressione adiabatica reversibile lo riporta infine alla temperatura e allo stato iniziali.

Nel piano temperatura-entropia le isoterme hanno temperatura costante. Nelle adiabatiche reversibili vale $\Delta S=0$, quindi l'entropia è costante. Se $\Delta S_*>0$ è l'aumento di entropia lungo l'isoterma calda, allora $Q_h=T_h\Delta S_*$. Poiché il ciclo si chiude, lungo l'isoterma fredda la diminuzione ha lo stesso modulo $\Delta S_*$ e vale $Q_c=T_c\Delta S_*$.

::grafico{linee="2,600 4,600 4,300 2,300 2,600" punti="2,600,pieno;4,600,pieno;4,300,pieno;2,300,pieno" vettori="2.55,600,3.45,600;4,515,4,385;3.45,300,2.55,300;2,385,2,515" etichette="1.78,644,A;4.05,644,B;4.05,262,C;1.78,262,D" xmin=0 xmax=5 ymin=0 ymax=750 nomi="S,T (K)" titolo="Ciclo reversibile nel piano $T$–$S$. Il calore assorbito su $AB$ è $600\cdot2\,\mathrm{J}$ e su $CD$ vengono ceduti $300\cdot2\,\mathrm{J}$. Sui tratti verticali $S$ è costante."}

:::

:::osservazione
Nel piano $T$–$S$ il ciclo è un rettangolo di base $\Delta S_*$ e altezza $T_h-T_c$. La sua area $(T_h-T_c)\,\Delta S_*$ è uguale a $Q_h-Q_c$, cioè al lavoro $W$ del ciclo. Con i valori della figura l'area è $(600-300)\,\mathrm{K}\cdot2\,\mathrm{J/K}=600\,\mathrm{J}$. Il rendimento è $\eta=\dfrac{(T_h-T_c)\,\Delta S_*}{T_h\,\Delta S_*}=1-\dfrac{T_c}{T_h}=0{,}50$.
:::

:::esempio{titolo="Il ciclo di Carnot nel piano pressione-volume"}
Una mole di gas ideale monoatomico, con $\gamma=\dfrac{5}{3}$, percorre il ciclo fra $T_h=600\,\mathrm{K}$ e $T_c=300\,\mathrm{K}$. Parte dallo stato $A$ con $V_A=10\,\mathrm{L}$ e si espande in isoterma fino a $V_B=20\,\mathrm{L}$. Nelle adiabatiche reversibili vale $TV^{\gamma-1}=\mathrm{costante}$, quindi
$$
\begin{aligned}
V_C&=V_B\left(\frac{T_h}{T_c}\right)^{\frac{3}{2}}=20\,\mathrm{L}\cdot2^{\frac{3}{2}}\simeq56{,}6\,\mathrm{L},\\[6pt]
V_D&=V_A\left(\frac{T_h}{T_c}\right)^{\frac{3}{2}}=10\,\mathrm{L}\cdot2^{\frac{3}{2}}\simeq28{,}3\,\mathrm{L}.
\end{aligned}
$$
Il calore assorbito è $Q_h=nRT_h\ln2\simeq3456\,\mathrm{J}$ e quello ceduto è $Q_c=nRT_c\ln2\simeq1728\,\mathrm{J}$. Il lavoro netto è $W=Q_h-Q_c=1728\,\mathrm{J}$ e il rendimento è $\eta=\dfrac{1728}{3456}=0{,}50$.

::grafico{curve="t,4986/t,10,20;t,249.3*(20/t)^(5/3),20,56.57;t,2493/t,28.28,56.57;t,88.14*(28.28/t)^(5/3),10,28.28" punti="10,498.6,pieno,A;20,249.3,pieno,B;56.57,44.07,pieno,C;28.28,88.14,pieno,D" etichette="14,420,600 K;48,95,300 K" legenda=0 xmin=0 xmax=65 ymin=0 ymax=560 nomi="V,p (kPa)" titolo="Ciclo di Carnot di una mole di gas ideale monoatomico, con $V$ in litri. $AB$ e $CD$ sono isoterme a $600\,\mathrm{K}$ e $300\,\mathrm{K}$, $BC$ e $DA$ sono adiabatiche reversibili."}

:::

::::teorema{#carnot titolo="Rendimento massimo fra due sorgenti"}
Qualunque motore ciclico che scambi calore soltanto con due sorgenti alle temperature $T_h>T_c>0$ ha rendimento
$$
\eta\leq\eta_C=1-\frac{T_c}{T_h}.
$$
L'uguaglianza vale per funzionamento reversibile. In presenza di irreversibilità il rendimento è inferiore.

:::dimostrazione
La variazione di entropia del fluido in un ciclo è zero. Le due sorgenti variano la loro entropia di $-\dfrac{Q_h}{T_h}$ e $\dfrac{Q_c}{T_c}$. La variazione di entropia totale deve essere non negativa, quindi
$$
\frac{Q_c}{T_c}-\frac{Q_h}{T_h}\geq0
\quad\Longrightarrow\quad
\frac{Q_c}{Q_h}\geq\frac{T_c}{T_h}.
$$
Sostituendo nella relazione $\eta=1-\dfrac{Q_c}{Q_h}$ si ottiene il limite. Se il processo è reversibile la variazione totale di entropia è nulla e il limite è raggiunto.
:::
::::

:::esempio{titolo="Rendimento misurato e limite teorico"}
Fra $600\,\mathrm{K}$ e $300\,\mathrm{K}$ il limite vale $\eta_C=1-\dfrac{300}{600}=0{,}50$. A parità di $Q_h=1000\,\mathrm{J}$, un motore reversibile produrrebbe $500\,\mathrm{J}$ e ne cederebbe $500\,\mathrm{J}$.

Un motore che nel ciclo produce $400\,\mathrm{J}$ cede $600\,\mathrm{J}$ e ha rendimento $0{,}40$. I dati rispettano il bilancio energetico e il secondo principio. Una produzione dichiarata di $600\,\mathrm{J}$ sarebbe possibile nel solo bilancio energetico, ma corrisponderebbe a $\eta=0{,}60$ e violerebbe il limite di Carnot.

::grafico{f="100*(1-300/x)" xmin=300 xmax=900 ymin=0 ymax=80 punti="600,50,pieno" nomi="Tₕ,η_C (%)" titolo="Limite di Carnot al variare di $T_h$ con $T_c=300\,\mathrm{K}$, in percentuale. Il punto evidenziato rappresenta il limite a $T_h=600\,\mathrm{K}$, cioè il $50\%$."}

:::

:::esempio{titolo="Confronto fra un motore reale e il limite"}
Una centrale lavora fra $T_h=800\,\mathrm{K}$ e $T_c=300\,\mathrm{K}$ con rendimento effettivo $\eta=0{,}35$. Il limite è $\eta_C=1-\dfrac{300}{800}=0{,}625$. Per $Q_h=1000\,\mathrm{J}$ assorbiti, la centrale produce $350\,\mathrm{J}$ e cede $650\,\mathrm{J}$, mentre un motore reversibile produrrebbe $625\,\mathrm{J}$ e cederebbe $375\,\mathrm{J}$. Le sorgenti aumentano la loro entropia di
$$
\Delta S_{\mathrm{tot}}=\left(\frac{650}{300}-\frac{1000}{800}\right)\mathrm{J/K}\simeq0{,}917\,\mathrm{J/K}.
$$
Il prodotto $T_c\,\Delta S_{\mathrm{tot}}=275\,\mathrm{J}$ è uguale a $625\,\mathrm{J}-350\,\mathrm{J}$, cioè al lavoro che la centrale non produce rispetto al caso reversibile.
:::

:::osservazione
Il limite $\eta_C=1-\dfrac{T_c}{T_h}$ è uguale a uno solo se $T_c=0$ oppure se $T_h$ è infinita. Con $T_c=300\,\mathrm{K}$, per avere $\eta_C=0{,}90$ serve $T_h=\dfrac{T_c}{1-\eta_C}=\dfrac{300\,\mathrm{K}}{0{,}10}=3000\,\mathrm{K}$. Il limite cresce più lentamente al crescere di $T_h$: da $400$ a $500\,\mathrm{K}$ passa da $0{,}25$ a $0{,}40$, mentre da $800$ a $900\,\mathrm{K}$ passa da $0{,}625$ a $0{,}667$.
:::

:::attenzione
Nel rapporto di Carnot si usano temperature assolute. Per sorgenti a $27\,{}^\circ\mathrm{C}$ e $327\,{}^\circ\mathrm{C}$ le temperature sono circa $300$ e $600\,\mathrm{K}$, quindi $\eta_C\simeq0{,}50$. Il rapporto dei valori in gradi Celsius darebbe un limite differente perché lo zero Celsius è traslato rispetto allo zero assoluto.
:::

## Frigoriferi e pompe di calore

:::definizione{#frigorifero titolo="Coefficienti di prestazione"}
Un frigorifero sottrae calore $Q_c>0$ alla sorgente fredda e riceve lavoro $W_{\mathrm{in}}>0$. Il lavoro compiuto dal fluido, con la convenzione usata nel primo principio, è $-W_{\mathrm{in}}$. Poiché la sua energia interna torna al valore iniziale,
$$
Q_h=Q_c+W_{\mathrm{in}}.
$$

Nel funzionamento come frigorifero l'effetto desiderato è sottrarre $Q_c$, quindi $\mathrm{COP}_f=\dfrac{Q_c}{W_{\mathrm{in}}}$. Nel funzionamento come pompa di calore l'effetto desiderato è fornire $Q_h$, quindi $\mathrm{COP}_p=\dfrac{Q_h}{W_{\mathrm{in}}}=\mathrm{COP}_f+1$. I coefficienti possono superare uno perché il lavoro permette di trasferire energia dalla sorgente fredda. Se $Q_c=600\,\mathrm{J}$ e $W_{\mathrm{in}}=200\,\mathrm{J}$, allora $Q_h=800\,\mathrm{J}$ e i due coefficienti valgono $3$ e $4$.
:::

:::teorema{#cop-carnot titolo="Prestazioni reversibili"}
Se il ciclo è reversibile, le due sorgenti si scambiano entropia di uguale modulo, perciò $\dfrac{Q_h}{T_h}=\dfrac{Q_c}{T_c}$. Sostituendo $Q_h=Q_c\dfrac{T_h}{T_c}$ in $W_{\mathrm{in}}=Q_h-Q_c$ si trova
$$
W_{\mathrm{in}}=Q_c\frac{T_h-T_c}{T_c}.
$$
Ne seguono i coefficienti massimi fra due sorgenti a temperature costanti,
$$
\mathrm{COP}_{f,C}=\frac{T_c}{T_h-T_c},\qquad
\mathrm{COP}_{p,C}=\frac{T_h}{T_h-T_c}.
$$
Fra $270$ e $300\,\mathrm{K}$ il frigorifero reversibile ha $\mathrm{COP}_{f,C}=9$. Per togliere $360\,\mathrm{J}$ dalla cella servono quindi almeno $40\,\mathrm{J}$ di lavoro. A parità di calore sottratto, un ciclo irreversibile richiede più lavoro.

::grafico{assi=0 uguale=1 linee="-2,2 2,2 2,3 -2,3 -2,2;-1.45,-0.65 1.45,-0.65 1.45,0.65 -1.45,0.65 -1.45,-0.65;-2,-3 2,-3 2,-2 -2,-2 -2,-3" vettori="0,0.7,0,1.95,Q_h;0,-1.95,0,-0.7,Q_c;3.15,0,1.5,0,W_in" etichette="-1.37,2.5,Sorgente calda;-1.06,0.03,Frigorifero;-1.38,-2.5,Sorgente fredda" xmin=-3 xmax=4 ymin=-3.6 ymax=3.6 titolo="Flussi nel funzionamento inverso. La cella cede $Q_c$ al frigorifero, che riceve anche lavoro e cede $Q_h$ all'ambiente."}

:::

:::esempio{titolo="Pompa di calore per una casa"}
L'aria esterna è a $273\,\mathrm{K}$ e la casa a $293\,\mathrm{K}$. Il coefficiente massimo è $\mathrm{COP}_{p,C}=\dfrac{293}{293-273}=14{,}65$. Per cedere alla casa $Q_h=3{,}6\,\mathrm{MJ}$, pari a $1\,\mathrm{kWh}$, il lavoro minimo è
$$
W_{\mathrm{in}}=\frac{Q_h}{\mathrm{COP}_{p,C}}=\frac{3{,}6\,\mathrm{MJ}}{14{,}65}\simeq0{,}246\,\mathrm{MJ},
$$
cioè circa $0{,}068\,\mathrm{kWh}$. Il resto, $3{,}35\,\mathrm{MJ}$, viene sottratto all'aria esterna.
:::

:::attenzione
Anche nei coefficienti di prestazione le temperature sono assolute. Per una cella a $0\,{}^\circ\mathrm{C}$ in un ambiente a $27\,{}^\circ\mathrm{C}$ si ha $T_c=273\,\mathrm{K}$ e $T_h=300\,\mathrm{K}$, quindi $\mathrm{COP}_{f,C}=\dfrac{273}{27}\simeq10{,}1$. Con i valori in gradi Celsius si otterrebbe $\dfrac{0}{27}=0$, un frigorifero incapace di sottrarre calore.
:::

## Entropia del sistema

:::definizione{#entropia titolo="Variazione di entropia"}
L'**entropia** $S$ è una funzione di stato. La differenza fra l'entropia finale e quella iniziale si può quindi calcolare lungo qualunque cammino reversibile che congiunga gli stessi stati, anche quando il processo effettivo è irreversibile.

In uno scambio reversibile a temperatura costante $T$, con calore $Q_{\mathrm{rev}}$ positivo se assorbito, vale
$$
\Delta S=\frac{Q_{\mathrm{rev}}}{T}.
$$
L'unità è il joule al kelvin, $\mathrm{J/K}$. Una sorgente ideale a $400\,\mathrm{K}$ mantiene costante la propria temperatura quando cede $800\,\mathrm{J}$. Per la sorgente, il calore è negativo e la variazione di entropia vale $-\dfrac{800\,\mathrm{J}}{400\,\mathrm{K}}=-2\,\mathrm{J/K}$.

Quando varia la temperatura si sommano i rapporti fra i piccoli calori reversibili e le rispettive temperature. Nel linguaggio degli integrali, $\Delta S=\int_i^f\dfrac{\delta Q_{\mathrm{rev}}}{T}$. I calori di un processo irreversibile e un unico valore arbitrario di temperatura non danno questa somma.
:::

:::teorema{#formule-entropia titolo="Riscaldamento, cambiamenti di fase e gas ideali"}
Per un corpo con capacità termica $C$ costante, senza passaggi di fase, il calore per un piccolo aumento di temperatura è $C\,\mathrm{d}T$. La somma dei contributi $\dfrac{C\,\mathrm{d}T}{T}$ dà
$$
\Delta S=C\ln\frac{T_f}{T_i}.
$$
Con $C=100\,\mathrm{J/K}$ e temperature da $300$ a $600\,\mathrm{K}$ si ha $\Delta S=100\ln 2\,\mathrm{J/K}\simeq69{,}3\,\mathrm{J/K}$. Invertendo gli stati, il rapporto diventa $\dfrac12$ e l'entropia diminuisce della stessa quantità.

In una fusione reversibile alla temperatura di equilibrio $T_{\mathrm{fus}}$, la temperatura è costante e il calore assorbito è $m\ell_f$. Si ottiene quindi $\Delta S=\dfrac{m\ell_f}{T_{\mathrm{fus}}}$. Alla stessa temperatura e per la stessa massa, la solidificazione ha variazione opposta.

Per un gas ideale di quantità $n$ e capacità termica molare $C_V$ costante si può scegliere un cammino reversibile in due tratti. Il primo cambia la temperatura a volume fisso e contribuisce con $nC_V\ln\dfrac{T_f}{T_i}$. Il secondo cambia il volume a temperatura $T_f$ costante. Su quel tratto $\delta Q_{\mathrm{rev}}=p\,\mathrm{d}V$ e $p=\dfrac{nRT_f}{V}$, perciò il contributo è $nR\ln\dfrac{V_f}{V_i}$. La somma è
$$
\Delta S=nC_V\ln\frac{T_f}{T_i}+nR\ln\frac{V_f}{V_i}.
$$

::grafico{f="100*log(x/300)" punti="300,0,pieno;600,69.3,pieno" xmin=200 xmax=700 ymin=-30 ymax=90 nomi="T,ΔS (J/K)" titolo="Variazione di entropia di un corpo con $C=100\,\mathrm{J/K}$ rispetto allo stato a $300\,\mathrm{K}$, con $T$ in kelvin. Il punto a $600\,\mathrm{K}$ corrisponde a $100\ln2\,\mathrm{J/K}$."}

:::

:::esempio{titolo="Fusione del ghiaccio"}
Il calore latente di fusione del ghiaccio è $\ell_f=3{,}34\cdot10^{5}\,\mathrm{J/kg}$. Per fondere $0{,}50\,\mathrm{kg}$ di ghiaccio a $273\,\mathrm{K}$ occorre $Q=m\ell_f=1{,}67\cdot10^{5}\,\mathrm{J}$. La temperatura resta costante durante la fusione, quindi
$$
\Delta S=\frac{1{,}67\cdot10^{5}\,\mathrm{J}}{273\,\mathrm{K}}\simeq612\,\mathrm{J/K}.
$$
:::

:::esempio{titolo="Espansione libera e cammino reversibile"}
Una mole di gas ideale si espande nel vuoto dentro un contenitore isolato. Il gas non scambia calore e non compie lavoro contro l'esterno, quindi $\Delta U=0$. L'energia interna del gas ideale dipende solo dalla temperatura e si ha $T_f=T_i$. Se il volume raddoppia, la formula per la variazione fra i due stati dà
$$
\Delta S=R\ln2\simeq5{,}76\,\mathrm{J/K}.
$$
Il calore effettivo è zero, mentre l'entropia aumenta. Il calore che compare nella definizione di $\Delta S$ appartiene all'isoterma reversibile immaginata fra gli stessi stati.

::grafico{f="2493/x" punti="10,249.3,pieno,A;20,124.65,pieno,B" xmin=0 xmax=30 ymin=0 ymax=320 nomi="V,p (kPa)" titolo="Stati iniziale $A$ e finale $B$ (volume in litri) di una mole a $300\,\mathrm{K}$ con volume da $10\,\mathrm{L}$ a $20\,\mathrm{L}$. Stanno sulla stessa isoterma. Durante l'espansione libera il gas non attraversa stati di equilibrio e la curva non rappresenta il processo effettivo."}

:::



:::richiamo{titolo="Area sotto il grafico dell'inverso"}
Per $0<a<b$, l'area compresa fra il grafico di $y=\dfrac{1}{x}$, l'asse $x$ e le rette $x=a$ e $x=b$ vale $\ln\dfrac{b}{a}$. Il risultato si ricava con gli integrali e si rimanda all'argomento relativo di Matematica 5° anno.
:::

::::teorema{#lavoro-isoterma titolo="Lavoro, calore ed entropia in un'espansione isoterma"}
Una quantità $n$ di gas ideale si espande in modo reversibile a temperatura costante $T$, dal volume $V_i$ al volume $V_f>V_i$. Il lavoro compiuto dal gas e il calore assorbito sono
$$
W=Q=nRT\ln\frac{V_f}{V_i},
$$
e l'entropia del gas varia di $\Delta S=nR\ln\dfrac{V_f}{V_i}$.

:::dimostrazione
Il lavoro compiuto dal gas in una trasformazione reversibile è l'area sotto il grafico di $p$ in funzione di $V$. Per l'equazione di stato, a temperatura costante, $p=\dfrac{nRT}{V}$. Il grafico è quindi quello di $\dfrac{1}{V}$ moltiplicato per la costante $nRT$, e un fattore costante moltiplica l'area. Per il richiamo, $W=nRT\ln\dfrac{V_f}{V_i}$.

L'energia interna di un gas ideale dipende solo dalla temperatura, quindi $\Delta U=0$. Il primo principio $\Delta U=Q-W$ dà allora $Q=W$. L'isoterma è un cammino reversibile a temperatura costante, perciò $\Delta S=\dfrac{Q}{T}=nR\ln\dfrac{V_f}{V_i}$.
:::
::::

:::esempio{titolo="Raddoppio del volume a 300 K"}
Due moli di gas ideale a $300\,\mathrm{K}$ raddoppiano il volume da $10\,\mathrm{L}$ a $20\,\mathrm{L}$. Con $R=8{,}31\,\mathrm{J/(mol\cdot K)}$ si ha
$$
\begin{aligned}
W=Q&=2\cdot8{,}31\cdot300\cdot\ln2\,\mathrm{J}\simeq3456\,\mathrm{J},\\[6pt]
\Delta S&=\frac{3456\,\mathrm{J}}{300\,\mathrm{K}}\simeq11{,}5\,\mathrm{J/K}.
\end{aligned}
$$
Il lavoro è l'area sotto l'isoterma nella figura. Dalla stessa formula $\Delta S=2R\ln2\simeq11{,}5\,\mathrm{J/K}$.

::grafico{f="4986/x" area="4986/x;0;10;20" punti="10,498.6,pieno,A;20,249.3,pieno,B" xmin=5 xmax=25 ymin=0 ymax=600 nomi="V,p (kPa)" titolo="Isoterma di due moli a $300\,\mathrm{K}$, con $V$ in litri. L'area colorata fra $10\,\mathrm{L}$ e $20\,\mathrm{L}$ vale $3456\,\mathrm{J}$."}

:::

## Entropia totale e processi spontanei

:::teorema{#entropia-totale titolo="Bilancio entropico per un insieme isolato"}
Per un insieme isolato che comprende il sistema e tutti gli ambienti che interagiscono con esso, il secondo principio assume la forma
$$
\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{sist}}+\Delta S_{\mathrm{amb}}\geq0.
$$
Un processo reversibile dà uguaglianza e un processo irreversibile dà una variazione positiva. L'entropia di una parte può diminuire se la somma delle variazioni soddisfa il bilancio.
:::

:::esempio{titolo="Trasferimento fra due sorgenti in isolamento"}
Due sorgenti a $600$ e $300\,\mathrm{K}$ scambiano $600\,\mathrm{J}$. Per valutare il trasferimento dalla calda alla fredda si assegna segno negativo al calore della prima e positivo al calore della seconda. Poiché le temperature restano costanti,
$$
\begin{aligned}
\Delta S_h &= -\frac{600}{600}\,\mathrm{J/K}=-1\,\mathrm{J/K},\\[6pt]
\Delta S_c &= \frac{600}{300}\,\mathrm{J/K}=2\,\mathrm{J/K},\\[6pt]
\Delta S_{\mathrm{tot}} &= 1\,\mathrm{J/K}.
\end{aligned}
$$
La sorgente fredda riceve la stessa energia che perde la calda. Il suo aumento di entropia è maggiore in modulo perché la temperatura al denominatore è minore. Invertendo il flusso si otterrebbe $\Delta S_{\mathrm{tot}}=-1\,\mathrm{J/K}$, incompatibile con un trasferimento diretto in isolamento.

::grafico{assi=0 uguale=1 linee="-3,-0.65 -1,-0.65 -1,0.65 -3,0.65 -3,-0.65;1,-0.65 3,-0.65 3,0.65 1,0.65 1,-0.65" vettori="-0.95,0,0.95,0,600 J" etichette="-2.73,0,600 K;1.3,0,300 K" xmin=-3.5 xmax=3.5 ymin=-1.35 ymax=1.45 titolo="Passaggio diretto di $600\,\mathrm{J}$. Variano di $-1\,\mathrm{J/K}$ l'entropia della sorgente calda e di $+2\,\mathrm{J/K}$ quella della fredda."}

:::

::::teorema{#passaggio-diretto titolo="Segno dell'entropia nel passaggio diretto di calore"}
Una sorgente a temperatura $T_h$ cede direttamente il calore $Q>0$ a una sorgente a temperatura $T_c<T_h$ (in kelvin). La variazione totale di entropia è
$$
\Delta S_{\mathrm{tot}}=Q\,\frac{T_h-T_c}{T_hT_c}>0.
$$
Per $T_h=600\,\mathrm{K}$, $T_c=300\,\mathrm{K}$ e $Q=600\,\mathrm{J}$ si ottiene $600\cdot\dfrac{300}{180000}\,\mathrm{J/K}=1\,\mathrm{J/K}$.

:::dimostrazione
La sorgente calda perde il calore $Q$ a temperatura costante, quindi $\Delta S_h=-\dfrac{Q}{T_h}$. La sorgente fredda lo riceve a temperatura costante, quindi $\Delta S_c=\dfrac{Q}{T_c}$. La somma è $\Delta S_{\mathrm{tot}}=Q\left(\dfrac{1}{T_c}-\dfrac{1}{T_h}\right)=Q\,\dfrac{T_h-T_c}{T_hT_c}$. Poiché $Q>0$, $T_h>T_c>0$ e quindi $T_h-T_c>0$, il valore è positivo. Il passaggio nel verso opposto cambia il segno di $Q$ e darebbe $\Delta S_{\mathrm{tot}}<0$, perciò non può avvenire come unico effetto.
:::
::::

:::attenzione
Una trasformazione adiabatica ha $Q=0$ ma non sempre $\Delta S=0$. L'entropia di un sistema in un'adiabatica resta costante solo se la trasformazione è reversibile. Nell'espansione libera di una mole che raddoppia il volume, $Q=0$ e $\Delta S=R\ln2\simeq5{,}76\,\mathrm{J/K}>0$.
:::

:::richiamo{titolo="Entropia con capacità termica costante"}
Un corpo con capacità termica $C$ costante, che passa dalla temperatura $T_i$ alla temperatura $T_f$ senza cambiamenti di fase, ha $\Delta S=C\ln\dfrac{T_f}{T_i}$.
:::

::::teorema{#miscelazione titolo="Miscelazione di due masse uguali"}
Due corpi con la stessa massa $m$ e lo stesso calore specifico $c$, a temperature $T_1\neq T_2$ (in kelvin), sono messi in contatto in un recipiente isolato e raggiungono l'equilibrio senza cambiamenti di fase. La temperatura finale è $T_f=\dfrac{T_1+T_2}{2}$ e la variazione totale di entropia è
$$
\Delta S_{\mathrm{tot}}=mc\ln\frac{(T_1+T_2)^2}{4T_1T_2}>0.
$$

:::dimostrazione
Il recipiente è isolato, quindi la somma dei calori scambiati è nulla: $mc(T_f-T_1)+mc(T_f-T_2)=0$. Ne segue $T_f=\dfrac{T_1+T_2}{2}$. Per il richiamo, le variazioni di entropia dei due corpi sono $mc\ln\dfrac{T_f}{T_1}$ e $mc\ln\dfrac{T_f}{T_2}$, e la loro somma è $mc\ln\dfrac{T_f^2}{T_1T_2}$. Sostituendo $T_f$ si ha $T_f^2=\dfrac{(T_1+T_2)^2}{4}$.

Vale $(T_1+T_2)^2-4T_1T_2=(T_1-T_2)^2>0$ perché $T_1\neq T_2$. Quindi $T_f^2>T_1T_2$ e l'argomento del logaritmo è maggiore di uno. Il logaritmo è perciò positivo e $\Delta S_{\mathrm{tot}}>0$.
:::
::::

:::esempio{titolo="Acqua calda e acqua fredda"}
Si mescolano $1{,}0\,\mathrm{kg}$ di acqua a $300\,\mathrm{K}$ e $1{,}0\,\mathrm{kg}$ di acqua a $360\,\mathrm{K}$, con $c=4{,}19\cdot10^{3}\,\mathrm{J/(kg\cdot K)}$. La temperatura finale è $T_f=330\,\mathrm{K}$. Le variazioni di entropia sono
$$
\begin{aligned}
\Delta S_1&=4190\ln\frac{330}{300}\,\mathrm{J/K}\simeq399{,}3\,\mathrm{J/K},\\[6pt]
\Delta S_2&=4190\ln\frac{330}{360}\,\mathrm{J/K}\simeq-364{,}6\,\mathrm{J/K},\\[6pt]
\Delta S_{\mathrm{tot}}&\simeq34{,}8\,\mathrm{J/K}.
\end{aligned}
$$
L'acqua fredda guadagna più entropia di quanta ne perda quella calda, perché il calore scambiato, $4190\cdot30\,\mathrm{J}\simeq1{,}26\cdot10^{5}\,\mathrm{J}$, viene diviso per temperature mediamente più basse.
:::


:::osservazione
Nel ciclo di una macchina il fluido torna allo stato iniziale, quindi la sua variazione di entropia è nulla. Per il motore reale da $400\,\mathrm{J}$, con $Q_h=1000\,\mathrm{J}$ a $600\,\mathrm{K}$ e $Q_c=600\,\mathrm{J}$ a $300\,\mathrm{K}$, la crescita di entropia delle sorgenti vale
$$
\Delta S_{\mathrm{tot}}=\left(-\frac{1000}{600}+\frac{600}{300}\right)\,\mathrm{J/K}
=\frac13\,\mathrm{J/K}.
$$
Il bilancio individua un ciclo irreversibile. Lo stesso calcolo per il motore reversibile, che cede $500\,\mathrm{J}$ alla sorgente fredda, dà zero.
:::

## Interpretazione microscopica

:::osservazione{#interpretazione titolo="Macrostati e microstati"}
Un **macrostato** descrive il sistema mediante grandezze medie come pressione, volume e temperatura. Un **microstato** specifica una configurazione microscopica compatibile con il macrostato. Se i microstati compatibili sono equiprobabili, la formula di Boltzmann è $S=k_B\ln\Omega$, dove $\Omega$ è il loro numero e $k_B$ è la costante di Boltzmann.

Per un gas ideale che occupa un volume doppio alla stessa temperatura, il volume disponibile per la posizione di ciascuna particella raddoppia. Per $N$ particelle, il numero di configurazioni delle posizioni cresce di un fattore $2^N$. La variazione statistica è allora $k_B\ln(2^N)=Nk_B\ln2=nR\ln2$, che coincide con quella ottenuta dal cammino reversibile.

Dopo l'espansione, la probabilità di trovare tutte le particelle nella metà iniziale è $2^{-N}$ nel modello di particelle indipendenti. Per un campione macroscopico questo valore è trascurabile. Il calcolo quantifica perché l'espansione spontanea è osservabile, mentre il ritorno spontaneo alla configurazione iniziale è estremamente improbabile.
:::

:::esempio{titolo="Probabilità della configurazione iniziale"}
Con $N=10$ particelle indipendenti, la probabilità di trovarle tutte nella metà iniziale del recipiente è $2^{-10}=\dfrac{1}{1024}\simeq9{,}8\cdot10^{-4}$. Con $N=100$ diventa $2^{-100}\simeq7{,}9\cdot10^{-31}$. Ogni particella in più dimezza la probabilità, quindi per una mole, con $N\simeq6{,}02\cdot10^{23}$, l'esponente di $2$ è $-6{,}02\cdot10^{23}$.
:::
