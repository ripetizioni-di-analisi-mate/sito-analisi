---
titolo: Temperatura, calore e gas ideali
sommario: Temperatura assoluta, dilatazione, scambi di calore e cambiamenti di stato, leggi dei gas e interpretazione microscopica della pressione.
---

## Temperatura ed equilibrio termico

:::definizione{#temperatura titolo="Temperatura ed equilibrio termico"}
Due corpi in contatto sono in **equilibrio termico** quando, dopo il tempo necessario, hanno la stessa temperatura e non c'è un trasferimento netto di energia dovuto alla differenza di temperatura. Il termometro raggiunge questo equilibrio con il corpo da misurare. Il principio zero della termodinamica afferma che due sistemi in equilibrio termico con un terzo sono in equilibrio termico tra loro.

La temperatura descrive lo stato termico. Nella scala Celsius l'acqua pura, alla pressione atmosferica normale, fonde a circa $0\,{}^\circ\mathrm C$ e bolle a circa $100\,{}^\circ\mathrm C$. La scala assoluta si misura in kelvin, con simbolo $\mathrm K$ e senza il simbolo di grado. Il legame tra i valori delle due scale è
$$
T=t+273{,}15.
$$
Per esempio $20\,{}^\circ\mathrm C$ corrispondono a $293{,}15\,\mathrm K$. Una variazione di $20\,{}^\circ\mathrm C$ corrisponde invece a una variazione di $20\,\mathrm K$, perché la costante si elimina nella differenza. Nei prodotti e nei rapporti delle leggi dei gas si usano temperature assolute.
:::

:::attenzione
Raddoppiare una temperatura Celsius non significa raddoppiare la temperatura assoluta. Un gas che passa da $20$ a $40\,{}^\circ\mathrm C$ passa da $293{,}15$ a $313{,}15\,\mathrm K$. A volume costante la pressione aumenta quindi di circa il $6{,}8\%$, perché il rapporto è $\dfrac{313{,}15}{293{,}15}$.
:::

## Dilatazione dei corpi

:::teorema{#dilatazione titolo="Dilatazione lineare e volumica"}
In un intervallo di temperatura in cui il coefficiente $\alpha$ si può considerare costante, l'aumento di lunghezza di una sbarra libera di dilatarsi è descritto dalla legge sperimentale
$$
\Delta L=\alpha L_0\Delta T,
\qquad L=L_0(1+\alpha\Delta T).
$$
$L_0$ è la lunghezza alla temperatura iniziale; $\alpha$ si misura in $\mathrm{K^{-1}}$. Una sbarra di acciaio lunga $2{,}0\,\mathrm m$, con $\alpha=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$, riscaldata di $50\,\mathrm K$, si allunga di $1{,}2\,\mathrm{mm}$. L'allungamento è piccolo rispetto alla lunghezza iniziale, come richiesto dall'approssimazione lineare.

Per il volume si scrive $\Delta V=\beta V_0\Delta T$. In un solido isotropo, che si dilata allo stesso modo in tutte le direzioni, $\beta\simeq3\alpha$ per piccole dilatazioni. Infatti il prodotto delle tre lunghezze contiene il fattore $(1+\alpha\Delta T)^3\simeq1+3\alpha\Delta T$. I liquidi hanno un proprio coefficiente volumico. L'acqua tra $0$ e $4\,{}^\circ\mathrm C$ presenta un comportamento particolare, perché il suo volume diminuisce quando la temperatura aumenta.
:::

::grafico{f="0.024*x" xmin=0 xmax=60 ymin=0 ymax=2 nomi="ΔT,ΔL" titolo="Allungamento in millimetri della sbarra di acciaio lunga $2{,}0\,\mathrm m$: per $\Delta T=50\,\mathrm K$ si ottiene $\Delta L=1{,}2\,\mathrm{mm}$"}

## Calore e capacità termica

:::definizione{#calorimetria titolo="Calore specifico e capacità termica"}
Il **calore** è energia trasferita a causa di una differenza di temperatura. Si misura in joule. L'energia interna è una proprietà del sistema; il calore descrive un trasferimento e dipende dal processo seguito.

Se non avvengono cambiamenti di stato e il calore specifico $c$ è circa costante, il calore assorbito da un corpo di massa $m$ è
$$
Q=mc(T_f-T_i),\qquad C=mc.
$$
$C$ è la **capacità termica**, misurata in $\mathrm{J/K}$; $c$ è il **calore specifico**, in $\mathrm{J/(kg\,K)}$. Con questa convenzione un corpo che si riscalda assorbe calore positivo. Per riscaldare $0{,}50\,\mathrm{kg}$ di acqua di $10\,\mathrm K$, usando $c=4180\,\mathrm{J/(kg\,K)}$, occorrono $20\,900\,\mathrm J$. Un riscaldatore che trasferisce effettivamente $1000\,\mathrm W$ all'acqua impiega $20{,}9\,\mathrm s$, perché $Q=P\Delta t$.
:::

:::teorema{#equilibrio-calorimetrico titolo="Bilancio calorimetrico"}
In un sistema termicamente isolato, se si trascurano il lavoro e gli altri trasferimenti di energia, la somma dei calori assorbiti dai componenti è nulla. Per due corpi senza cambiamenti di stato,
$$
m_1c_1(T_f-T_1)+m_2c_2(T_f-T_2)=0.
$$
Mescolando $0{,}20\,\mathrm{kg}$ di acqua a $60\,{}^\circ\mathrm C$ con $0{,}30\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$, in un recipiente con capacità termica trascurabile, si ottiene $T_f=36\,{}^\circ\mathrm C$. Il calore specifico si semplifica perché è lo stesso per entrambe le porzioni. Se il recipiente assorbe energia, nel bilancio compare anche $C_{\mathrm{rec}}(T_f-T_{\mathrm{rec},i})$. La temperatura finale resta fra quelle iniziali quando non intervengono altre sorgenti o passaggi di fase.
:::

## Cambiamenti di stato

:::definizione{#calore-latente titolo="Calore latente"}
Durante la fusione di una sostanza pura alla pressione di equilibrio, l'energia assorbita modifica la struttura della materia mentre la temperatura rimane costante finché coesistono le due fasi. Si definisce **calore latente specifico** $\ell$ l'energia per unità di massa necessaria alla trasformazione,
$$
Q=m\ell.
$$
Per il ghiaccio a $0\,{}^\circ\mathrm C$ si può usare $\ell_f=3{,}34\cdot10^5\,\mathrm{J/kg}$. Fondere $0{,}10\,\mathrm{kg}$ di ghiaccio richiede $33\,400\,\mathrm J$. Per portare poi l'acqua ottenuta a $20\,{}^\circ\mathrm C$ servono altri $8360\,\mathrm J$. L'energia totale è quindi $41\,760\,\mathrm J$.

Quando il ghiaccio parte da una temperatura negativa si aggiunge il riscaldamento del solido. Una volta raggiunti $0\,{}^\circ\mathrm C$, se il calore residuo è positivo ma non basta a fondere tutta la massa, lo stato finale contiene ghiaccio e acqua a quella temperatura, nelle ipotesi indicate. La massa fusa si trova dividendo l'energia disponibile per $\ell_f$. Anche evaporazione e condensazione coinvolgono un calore latente; l'evaporazione dalla superficie può avvenire sotto la temperatura di ebollizione.
:::

::grafico{linee="0,-20 42,0 376,0 459.6,20" xmin=0 xmax=500 ymin=-20 ymax=30 nomi="Q,t" titolo="Riscaldamento di $1\,\mathrm{kg}$ di ghiaccio da $-20$ a $20\,{}^\circ\mathrm C$, con $Q$ in kilojoule: $c_{ghiaccio}=2100\,\mathrm{J/(kg\,K)}$, $\ell_f=334\,\mathrm{kJ/kg}$ e $c_{acqua}=4180\,\mathrm{J/(kg\,K)}$. Durante la fusione la temperatura resta costante"}

## Trasferimento del calore

:::teorema{#trasmissione titolo="Conduzione, convezione e irraggiamento"}
Nella **conduzione** l'energia si trasferisce attraverso la materia senza un suo trasporto macroscopico. Per una parete piana omogenea, in regime stazionario, di area $A$ e spessore $d$, la potenza termica trasferita dal lato caldo a quello freddo è
$$
P=\kappa A\frac{T_h-T_c}{d},\qquad T_h>T_c,
$$
dove $\kappa$ è la conducibilità termica. Con $\kappa=0{,}040\,\mathrm{W/(m\,K)}$, $A=10\,\mathrm{m^2}$, $d=0{,}10\,\mathrm m$ e differenza di temperatura $20\,\mathrm K$, si ottiene $P=80\,\mathrm W$. Raddoppiare lo spessore dimezza questa potenza, a parità delle altre grandezze.

Nella **convezione** un fluido in movimento trasporta energia. Nell'**irraggiamento** il trasferimento avviene attraverso radiazione elettromagnetica e può avvenire nel vuoto. Per una superficie grigia a temperatura $T$ immersa in un grande ambiente isoterma a $T_a$, il modello di Stefan-Boltzmann dà $P_{\mathrm{netta}}=\varepsilon\sigma A(T^4-T_a^4)$. Le temperature sono assolute, $\varepsilon$ è l'emissività e $\sigma=5{,}67\cdot10^{-8}\,\mathrm{W/(m^2K^4)}$. Il risultato è positivo quando il corpo perde energia per irraggiamento.
:::

## Stato di un gas ideale

:::teorema{#gas-ideale titolo="Equazione di stato dei gas ideali"}
Il **gas ideale** è un modello nel quale le particelle hanno volume trascurabile e interagiscono attraverso urti elastici. Approssima molti gas diluiti lontani dalla condensazione. In equilibrio valgono
$$
pV=nRT,\qquad R=8{,}314\,\mathrm{J/(mol\,K)}.
$$
$p$ è la pressione assoluta, $V$ il volume, $n$ il numero di moli e $T$ la temperatura assoluta. Le moli si ricavano dalla massa divisa per la massa molare, espresse in unità coerenti. Per $n=1{,}0\,\mathrm{mol}$, $T=300\,\mathrm K$ e $V=0{,}025\,\mathrm{m^3}$, la pressione vale circa $9{,}98\cdot10^4\,\mathrm{Pa}$. Un litro corrisponde a $10^{-3}\,\mathrm{m^3}$.

Per una quantità fissa di gas, confrontando due stati,
$$
\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}.
$$
A temperatura costante il prodotto $pV$ è costante, quindi dimezzare il volume raddoppia la pressione. A pressione costante il volume è proporzionale a $T$. A volume costante la pressione è proporzionale a $T$. Un manometro può indicare la differenza rispetto alla pressione atmosferica; per l'equazione di stato si usa invece la pressione assoluta.
:::

::grafico{f="6/x" xmin=1 xmax=6 ymin=0 ymax=7 nomi="V,p" titolo="Isoterma di un gas ideale in unità normalizzate: il prodotto $pV$ resta uguale a $6$, mentre pressione e volume cambiano"}

## Modello microscopico

:::definizione{#modello-cinetico titolo="Agitazione termica ed energia interna"}
La pressione di un gas è dovuta agli urti delle particelle sulle pareti. Nel modello classico monoatomico, all'equilibrio,
$$
\langle K_{\mathrm{trasl}}\rangle=\frac32 k_B T,
\qquad k_B=1{,}381\cdot10^{-23}\,\mathrm{J/K}.
$$
La temperatura è quindi collegata all'energia cinetica traslazionale *media*. Le particelle hanno velocità diverse; la formula riguarda la media e non l'energia di ogni particella. Con $N=nN_A$ particelle e $N_Ak_B=R$, l'energia interna di un gas ideale monoatomico è
$$
U=\frac32nRT,\qquad \Delta U=\frac32nR\Delta T.
$$
A $300\,\mathrm K$ una mole ha energia interna di circa $3741\,\mathrm J$ nel riferimento del modello. Per gas con molecole composte possono contribuire anche rotazioni e vibrazioni. In particolare il valore $\dfrac32R$ del calore molare a volume costante riguarda il gas monoatomico classico.
:::

## Lettura dei dati e collegamento al primo principio

:::osservazione{#lettura-grafici titolo="Stati e trasformazioni nel piano pressione-volume"}
Un punto nel diagramma $p,V$ identifica uno stato di equilibrio. Una linea descrive una successione di stati, quando il processo è abbastanza lento da poter attribuire al gas valori uniformi di pressione e temperatura. Una linea orizzontale è un'isobara; una verticale è un'isocora. Un'isoterma del gas ideale è un ramo di iperbole.

Per confrontare due stati basta l'equazione di stato. Per sapere quanto calore entra e quanto lavoro viene compiuto occorre conoscere anche il processo. Un gas può passare fra le stesse temperature attraverso trasformazioni diverse e scambiare quantità diverse di calore. Il capitolo sul primo principio userà questa distinzione per scrivere il bilancio energetico. Nei calcoli si separano perciò i dati di stato, come $p$, $V$, $T$, dalle energie trasferite durante la trasformazione.
:::
