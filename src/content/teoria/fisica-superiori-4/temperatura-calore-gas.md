---
titolo: Temperatura, calore e gas ideali
sommario: Equilibrio termico, dilatazione, bilanci con e senza passaggi di stato, trasferimento del calore e leggi dei gas ideali.
---

## Temperatura ed equilibrio termico

:::definizione{#temperatura titolo="Temperatura ed equilibrio termico"}
Due corpi sono in **equilibrio termico** quando, messi in contatto attraverso una parete che permette lo scambio di calore, mantengono la stessa temperatura. Il principio zero della termodinamica afferma che se due corpi sono in equilibrio termico con un terzo, allora sono in equilibrio termico tra loro. Per misurare la temperatura di un corpo si attende che il termometro raggiunga l'equilibrio con esso. La misura rappresenta bene lo stato iniziale del corpo se il termometro assorbe o cede una quantità di energia trascurabile.

Sia $t$ il valore della temperatura in gradi Celsius e sia $T$ il suo valore in kelvin. Le due scale hanno incrementi della stessa ampiezza, perciò
$$
T=t+273{,}15,
\qquad
T_2-T_1=t_2-t_1
$$
come uguaglianze fra valori numerici. Per esempio $20\,{}^\circ\mathrm C$ corrispondono a $293{,}15\,\mathrm K$ e un aumento di $20\,{}^\circ\mathrm C$ corrisponde a un aumento di $20\,\mathrm K$. Alla pressione atmosferica normale l'acqua pura fonde a circa $0\,{}^\circ\mathrm C$ e bolle a circa $100\,{}^\circ\mathrm C$.
:::

:::attenzione
In un rapporto di temperature delle leggi dei gas si usano i kelvin. Se un gas ideale in un recipiente rigido chiuso passa da $20$ a $40\,{}^\circ\mathrm C$, il rapporto fra la pressione finale e quella iniziale è
$$
\frac{p_2}{p_1}=\frac{313{,}15}{293{,}15}\simeq1{,}068.
$$
La pressione cresce di circa il $6{,}8\%$. Il rapporto $\dfrac{40}{20}$ darebbe un raddoppio perché usa una scala il cui zero non corrisponde allo zero assoluto.
:::

## Dilatazione dei corpi

:::teorema{#dilatazione titolo="Dilatazione lineare e volumica"}
Siano $L_0$ la lunghezza iniziale di una sbarra libera e $\Delta T$ la variazione di temperatura, uniforme lungo la sbarra. Il **coefficiente di dilatazione lineare** $\alpha$, misurato in $\mathrm{K^{-1}}$, esprime la variazione relativa di lunghezza per kelvin. Se $\alpha$ è circa costante nell'intervallo considerato e il prodotto $|\alpha\Delta T|$ è piccolo rispetto a $1$, valgono le approssimazioni
$$
\Delta L=\alpha L_0\Delta T,
\qquad L=L_0(1+\alpha\Delta T).
$$
Per $\alpha>0$ il segno di $\Delta L$ coincide con quello di $\Delta T$. Il modello descrive la sbarra libera di allungarsi o di accorciarsi. Se le estremità sono bloccate, il vincolo impedisce la dilatazione libera e può produrre sollecitazioni nella sbarra.

Per una variazione di volume si scrive $\Delta V=\beta V_0\Delta T$, con $\beta$ coefficiente di dilatazione volumica. In un solido isotropo le tre dimensioni cambiano nello stesso rapporto. Un cubo di spigolo $L_0$ passa quindi dal volume $L_0^3$ al volume $L_0^3(1+\alpha\Delta T)^3$. Sviluppando il cubo,
$$
\frac{\Delta V}{V_0}
=3\alpha\Delta T+3(\alpha\Delta T)^2+(\alpha\Delta T)^3
\simeq3\alpha\Delta T.
$$
Gli ultimi due termini sono trascurabili nel modello lineare, perciò $\beta\simeq3\alpha$. Per un liquido si usa il suo coefficiente volumico. Tra $0$ e $4\,{}^\circ\mathrm C$ il volume dell'acqua diminuisce quando la temperatura aumenta.
:::

:::esempio{titolo="Allungamento e lettura della pendenza"}
Una sbarra di acciaio lunga $2{,}0\,\mathrm m$ ha $\alpha=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$. Per un aumento di temperatura di $50\,\mathrm K$ il suo allungamento è
$$
\Delta L=(1{,}2\cdot10^{-5})\cdot2{,}0\cdot50\,\mathrm m
=1{,}2\cdot10^{-3}\,\mathrm m
=1{,}2\,\mathrm{mm}.
$$
La pendenza $\alpha L_0$ della retta indica di quanto si allunga la sbarra per un aumento di un kelvin. Per una sbarra dello stesso materiale lunga il doppio la pendenza sarebbe doppia.

::grafico{f="0.024*x" punti="50,1.2,pieno" xmin=-5 xmax=65 ymin=-0.2 ymax=2 nomi="ΔT,ΔL (mm)" titolo="Per la sbarra del problema la pendenza è 0,024 mm per kelvin"}
:::

## Calore e capacità termica

:::definizione{#calorimetria titolo="Calore specifico e capacità termica"}
Il **calore** è energia trasferita a causa di una differenza di temperatura e si misura in joule. Si attribuisce segno positivo al calore assorbito dal corpo e segno negativo al calore ceduto. L'energia interna, a differenza del calore, è una proprietà dello stato del corpo.

Per una sostanza di massa $m$ che rimane nella stessa fase, con calore specifico $c$ circa costante e nelle condizioni in cui quel valore di $c$ è applicabile, si scrive
$$
Q=mc(T_f-T_i),\qquad C=mc.
$$
Il **calore specifico** $c$ è l'energia necessaria per aumentare di un kelvin la temperatura di un chilogrammo di sostanza, nelle condizioni considerate. La **capacità termica** $C$ si riferisce all'intero corpo. Le unità corrispondenti sono $\mathrm{J/(kg\,K)}$ e $\mathrm{J/K}$. A parità di calore assorbito, dalla relazione $\Delta T=\dfrac QC$ segue che si scalda di più il corpo con capacità termica minore.
:::

:::esempio{titolo="Energia assorbita e tempo di riscaldamento"}
Si scaldano $0{,}50\,\mathrm{kg}$ di acqua di $10\,\mathrm K$, con $c=4180\,\mathrm{J/(kg\,K)}$. Occorrono $Q=0{,}50\cdot4180\cdot10\,\mathrm J=20\,900\,\mathrm J$. Se l'acqua riceve energia a un ritmo costante di $1000\,\mathrm{J/s}$, il tempo richiesto è
$$
\Delta t=\frac QP=\frac{20\,900}{1000}\,\mathrm s=20{,}9\,\mathrm s.
$$
Si utilizza la potenza trasferita all'acqua. Se una parte dell'energia scalda il recipiente o si disperde nell'ambiente, conoscere la sola potenza elettrica del riscaldatore non basta per ricavare il tempo con questo calcolo.
:::

:::teorema{#equilibrio-calorimetrico titolo="Bilancio calorimetrico"}
Siano $C_h$ e $C_c$ le capacità termiche dei due corpi e $t_h>t_c$ le loro temperature iniziali. Se l'insieme è isolato, gli scambi si limitano al calore e nessun corpo cambia fase, l'energia ceduta dal corpo caldo è assorbita dal corpo freddo. Alla temperatura finale comune $t_f$ si ha
$$
C_h(t_f-t_h)+C_c(t_f-t_c)=0.
$$
Raccogliendo $t_f$ si ottiene
$$
t_f=\frac{C_ht_h+C_ct_c}{C_h+C_c}.
$$
È una media pesata con pesi positivi, quindi $t_c<t_f<t_h$. Se si mescolano $0{,}20\,\mathrm{kg}$ di acqua a $60\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ a $20\,{}^\circ\mathrm C$, il calore specifico è lo stesso per le due masse e si semplifica. Il risultato è $t_f=\dfrac{0{,}20\cdot60+0{,}30\cdot20}{0{,}20+0{,}30}\,{}^\circ\mathrm C=36\,{}^\circ\mathrm C$.

Se il recipiente ha una capacità termica apprezzabile $C_r$ ed è inizialmente a $t_r$, si aggiunge al bilancio $C_r(t_f-t_r)$. La temperatura finale si avvicina a $t_r$ rispetto al valore calcolato senza recipiente, perché nella media entra anche il peso $C_r$.
:::

## Cambiamenti di stato

:::definizione{#calore-latente titolo="Calore latente e curva di riscaldamento"}
Alla pressione di equilibrio una sostanza pura fonde a temperatura fissata. Finché coesistono solido e liquido, l'energia assorbita trasforma una parte del solido in liquido. Il **calore latente specifico di fusione** $\ell_f$ è l'energia per unità di massa trasformata, perciò $Q=m_{\mathrm{fusa}}\ell_f$. Per la solidificazione di quella stessa massa, il calore ceduto ha uguale modulo. La relazione si applica al tratto di cambiamento di stato. I tratti in cui una singola fase si riscalda si calcolano separatamente con $Q=mc\Delta T$.

Per portare $0{,}10\,\mathrm{kg}$ di ghiaccio a $0\,{}^\circ\mathrm C$ ad acqua a $20\,{}^\circ\mathrm C$ occorrono
$$
\begin{aligned}
Q_{\mathrm{fus}}&=0{,}10\cdot334\,000\,\mathrm J=33\,400\,\mathrm J,\\
Q_{\mathrm{liq}}&=0{,}10\cdot4180\cdot20\,\mathrm J=8360\,\mathrm J,\\
Q&=41\,760\,\mathrm J.
\end{aligned}
$$
Il calore latente interviene anche nell'ebollizione e nella condensazione. L'evaporazione dalla superficie, invece, può avvenire anche al di sotto della temperatura di ebollizione.
:::

:::esempio{titolo="Riscaldamento del ghiaccio, fusione e riscaldamento dell'acqua"}
Per $1\,\mathrm{kg}$ di ghiaccio inizialmente a $-20\,{}^\circ\mathrm C$, con $c_s=2100\,\mathrm{J/(kg\,K)}$, si raggiungono $0\,{}^\circ\mathrm C$ dopo aver fornito $42\,\mathrm{kJ}$. Per fondere tutto il ghiaccio occorrono altri $334\,\mathrm{kJ}$, quindi il tratto orizzontale termina quando il calore totale raggiunge $376\,\mathrm{kJ}$. Dopo la fusione la pendenza è $\dfrac{1}{mc}$, con $c=4180\,\mathrm{J/(kg\,K)}$. Per raggiungere $20\,{}^\circ\mathrm C$ occorrono altri $83{,}6\,\mathrm{kJ}$.

::grafico{linee="0,-20 42,0 376,0 459.6,20" punti="42,0,pieno,42 kJ;376,0,pieno,376 kJ" xmin=-30 xmax=500 ymin=-25 ymax=25 nomi="Q,t (°C)" titolo="La fusione avviene tra 42 kJ e 376 kJ a 0 °C"}
:::

:::esempio{titolo="Fusione parziale in un recipiente isolato"}
Si mescolano $0{,}20\,\mathrm{kg}$ di ghiaccio a $0\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ di acqua a $40\,{}^\circ\mathrm C$. Il recipiente è isolato e la sua capacità termica è trascurabile. Prima di impostare il bilancio si confrontano il calore che l'acqua può cedere raffreddandosi fino a $0\,{}^\circ\mathrm C$ e quello necessario per fondere tutto il ghiaccio:
$$
Q_{\mathrm{disp}}=0{,}30\cdot4180\cdot40\,\mathrm J=50\,160\,\mathrm J,
\quad
Q_{\mathrm{fus}}=0{,}20\cdot334\,000\,\mathrm J=66\,800\,\mathrm J.
$$
Poiché $Q_{\mathrm{disp}}<Q_{\mathrm{fus}}$, all'equilibrio restano entrambe le fasi a $0\,{}^\circ\mathrm C$. La massa di ghiaccio che fonde è $\dfrac{Q_{\mathrm{disp}}}{\ell_f}\simeq0{,}150\,\mathrm{kg}$, perciò rimangono circa $0{,}050\,\mathrm{kg}$ di ghiaccio. Se le due energie fossero uguali, fonderebbe tutto il ghiaccio e l'acqua finale sarebbe ancora a $0\,{}^\circ\mathrm C$. Solo con energia in eccesso si può ottenere acqua a temperatura maggiore.
:::

## Trasferimento del calore

:::teorema{#trasmissione titolo="Conduzione, convezione e irraggiamento"}
Nella **conduzione** l'energia si trasferisce attraverso la materia senza trasporto macroscopico di materia. Sia $\kappa$ la conducibilità di una parete piana omogenea di area $A$ e spessore $d$. In regime stazionario, se le temperature delle due facce sono $T_h>T_c$, la potenza termica dal lato caldo al lato freddo è
$$
P=\kappa A\frac{T_h-T_c}{d}.
$$
Il regime stazionario implica che la parete non accumula energia. Se due strati sono a contatto perfetto e le perdite laterali sono trascurabili, la potenza che attraversa il primo è uguale alla potenza che attraversa il secondo. Per ciascuno vale $\Delta T_i=P\dfrac{d_i}{\kappa_i A}$. Sommando le cadute di temperatura si trova
$$
P=\frac{T_h-T_c}{\dfrac{d_1}{\kappa_1 A}+\dfrac{d_2}{\kappa_2 A}}.
$$
Il termine $\dfrac d{\kappa A}$ è la resistenza termica dello strato, espressa in $\mathrm{K/W}$. Due strati identici hanno resistenza complessiva doppia rispetto a uno solo, quindi a parità di temperature esterne trasferiscono metà della potenza.

Nella **convezione** il movimento di un fluido trasporta energia. Nell'**irraggiamento** l'energia si propaga come radiazione elettromagnetica, anche nel vuoto. Per una superficie grigia di area $A$ ed emissività $\varepsilon$, immersa in un grande ambiente isotermo a $T_a$, la potenza netta uscente è
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
\qquad
\sigma=5{,}67\cdot10^{-8}\,\mathrm{W/(m^2\,K^4)}.
$$
Le temperature sono assolute. Se la superficie è più fredda dell'ambiente, $P_{\mathrm{net}}<0$ e per irraggiamento entra più energia di quella che esce.
:::

## Stato di un gas ideale

:::teorema{#gas-ideale titolo="Equazione di stato dei gas ideali"}
Il **gas ideale** è un modello nel quale le particelle hanno volume trascurabile e, tra urti elastici, si muovono senza interagire. Il modello approssima molti gas diluiti e lontani dalla condensazione. In equilibrio,
$$
pV=nRT,
\qquad R=8{,}314\,\mathrm{J/(mol\,K)}.
$$
Qui $p$ è la pressione assoluta, $V$ il volume, $n$ la quantità di sostanza in moli e $T$ la temperatura assoluta. Se la massa è $m$ e la massa molare è $M$, si ha $n=\dfrac mM$, con unità di massa coerenti. Con $R$ espresso nelle unità indicate si usano pascal, metri cubi e kelvin. Per esempio $25\,\mathrm L=0{,}025\,\mathrm{m^3}$ e a $300\,\mathrm K$ una mole in quel volume esercita $p=\dfrac{8{,}314\cdot300}{0{,}025}\,\mathrm{Pa}\simeq9{,}98\cdot10^4\,\mathrm{Pa}$.

Se la quantità di gas è la stessa in entrambi gli stati, $nR$ è costante e
$$
\frac{p_1V_1}{T_1}=\frac{p_2V_2}{T_2}.
$$
A temperatura costante $pV$ è costante, quindi dimezzare il volume raddoppia la pressione. A pressione costante $V$ è proporzionale a $T$. A volume costante $p$ è proporzionale a $T$. Queste proporzioni si riferiscono a una quantità fissa di gas. Se un recipiente viene aperto e cambia la quantità di sostanza, si applica $pV=nRT$ con il valore di $n$ di ciascuno stato.
:::

:::esempio{titolo="Da pressione manometrica a pressione assoluta"}
Un manometro indica $50\,\mathrm{kPa}$ in un recipiente posto dove la pressione atmosferica è $100\,\mathrm{kPa}$. Il valore indicato è $p_{\mathrm{man}}=p-p_{\mathrm{atm}}$, perciò nell'equazione di stato si usa $p=150\,\mathrm{kPa}$. Se a temperatura costante il volume del gas chiuso raddoppia, la pressione assoluta scende a $75\,\mathrm{kPa}$. Nello stesso ambiente la nuova pressione manometrica è quindi $-25\,\mathrm{kPa}$. Il segno negativo indica che la pressione interna è inferiore a quella atmosferica.
:::

:::esempio{titolo="Confronto di stati lungo un'isoterma"}
A temperatura e quantità di sostanza costanti, si consideri uno stato con $p=200\,\mathrm{kPa}$ e $V=6\,\mathrm L$. Si ha $pV=1200\,\mathrm{kPa\,L}=1200\,\mathrm J$. A $12\,\mathrm L$ la pressione è $100\,\mathrm{kPa}$. Nel grafico i due punti appartengono allo stesso ramo di iperbole. La pendenza si riduce in valore assoluto al crescere di $V$, quindi uguali incrementi di volume causano diminuzioni di pressione sempre più piccole.

::grafico{f="1200/x" punti="6,200,pieno,A;12,100,pieno,B" xmin=4 xmax=16 ymin=0 ymax=320 nomi="V,p (kPa)" titolo="Lungo l'isoterma il prodotto pV vale 1200 kPa L"}
:::

## Modello microscopico

:::definizione{#modello-cinetico titolo="Agitazione termica ed energia interna"}
Le particelle del gas urtano le pareti e cambiano la loro quantità di moto. Gli impulsi ripetuti producono una forza media sulla parete, dalla quale deriva la pressione. Nel modello classico, all'equilibrio la temperatura determina l'energia cinetica traslazionale media per particella:
$$
\langle K_{\mathrm{trasl}}\rangle=\frac32 k_BT,
\qquad k_B=1{,}381\cdot10^{-23}\,\mathrm{J/K}.
$$
Particelle a velocità diverse contribuiscono alla stessa media. Per una particella di massa $m_0$, $\langle K_{\mathrm{trasl}}\rangle=\frac12 m_0\langle v^2\rangle$. Due gas alla stessa temperatura hanno quindi la stessa energia traslazionale media per particella. Le particelle più leggere hanno velocità quadratica media maggiore secondo $v_{\mathrm{rms}}=\sqrt{\dfrac{3k_BT}{m_0}}$.

Per un gas ideale monoatomico l'energia interna è la somma delle energie traslazionali. Poiché il numero di particelle è $N=nN_A$ e $N_Ak_B=R$, si ottiene
$$
U=N\langle K_{\mathrm{trasl}}\rangle=\frac32nRT,
\qquad
\Delta U=\frac32nR(T_f-T_i).
$$
A $300\,\mathrm K$ una mole ha $U\simeq3741\,\mathrm J$ nel riferimento del modello. Se il gas ideale monoatomico cambia volume ma torna alla stessa temperatura e conserva il numero di moli, la variazione di energia interna è nulla. Nelle molecole composte anche rotazioni e vibrazioni possono contribuire all'energia interna, perciò il valore $\dfrac32 R$ della capacità termica molare a volume costante riguarda il modello monoatomico classico.
:::

## Lettura degli stati e delle trasformazioni

:::osservazione{#lettura-grafici titolo="Stati e trasformazioni nel piano pressione-volume"}
Un punto del diagramma $p$-$V$ rappresenta uno stato di equilibrio. Una linea rappresenta una successione di stati quando il processo è abbastanza lento da poter attribuire al gas una pressione e una temperatura uniformi. Un tratto orizzontale è un'isobara. Un tratto verticale è un'isocora. Un'isoterma del gas ideale è un ramo di iperbole.

Fra due stati con $p_1V_1=p_2V_2$ e lo stesso numero di moli, l'equazione di stato dà $T_1=T_2$. Per esempio, partendo da $100\,\mathrm{kPa}$ e $6\,\mathrm L$, si può prima raddoppiare la pressione a volume costante e poi dimezzare il volume a pressione costante. Nei due tratti intermedi $pV$ prima sale a $1200\,\mathrm J$ e poi scende a $600\,\mathrm J$. Le temperature agli estremi coincidono, mentre durante il processo la temperatura cambia.

L'equazione di stato permette di confrontare gli estremi. Per calcolare il lavoro e il calore scambiati occorre specificare come si passa da un estremo all'altro. Nel capitolo sul primo principio si usa questa distinzione per collegare il bilancio energetico ai diversi tratti di un diagramma.
:::
