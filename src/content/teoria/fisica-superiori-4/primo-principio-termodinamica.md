---
titolo: Primo principio e trasformazioni termodinamiche
sommario: Segni di calore e lavoro, energia interna, trasformazioni dei gas ideali, diagrammi pressione-volume e bilanci nei cicli.
---

## Sistema e convenzioni di segno

:::definizione{#sistema titolo="Sistema chiuso e scambi di energia"}
Il **sistema** è la porzione di materia scelta per lo studio. Tutto il resto è l'ambiente. Un sistema chiuso scambia energia senza scambiare materia. Il gas in un cilindro chiuso da un pistone può ricevere energia dalla parete calda e trasferirne una parte spostando il pistone. La parete mobile appartiene al confine attraverso cui avviene lo scambio.

Il calore $Q$ è positivo quando entra nel sistema. Il lavoro $W$ è positivo quando il sistema lo compie sull'ambiente. Un'espansione contro una pressione esterna positiva ha quindi $W>0$. Durante una compressione, l'ambiente esercita la forza nel verso dello spostamento del pistone e cede energia al sistema, perciò il lavoro **del gas** è negativo. Nel capitolo si considerano sistemi chiusi fermi nel loro insieme, con variazioni macroscopiche di energia cinetica e potenziale trascurabili.
:::

:::esempio{titolo="La scelta del confine"}
In un recipiente rigido e isolato, una resistenza elettrica scalda il gas. Se il sistema comprende gas e resistenza, l'energia entra attraverso i fili per lavoro elettrico. Se il sistema è il solo gas, la resistenza calda si trova all'esterno del confine scelto e può trasferire energia al gas per calore. Il bilancio si scrive dopo aver stabilito quali corpi appartengono al sistema.
:::

:::osservazione{titolo="Cilindro con pistone"}
Nello schema il gas occupa la parte del cilindro sotto il pistone. La freccia del calore diretta verso il gas indica $Q>0$ e la freccia del lavoro diretta verso l'esterno indica $W>0$. Quando il pistone sale, il volume aumenta e il gas compie lavoro. Quando il pistone scende, la freccia del lavoro si inverte e $W<0$.

::grafico{linee="2,1 2,4.6;5,1 5,4.6;2,1 5,1;2,3 5,3" vettori="3.5,0.1,3.5,0.9,Q;3.5,3.1,3.5,4.4,W" etichette="3.5,2,Gas" xmin=0 xmax=7 ymin=0 ymax=5.5 assi=0 titolo="Il calore $Q$ entra nel gas dalla base del cilindro. Il lavoro $W$ è compiuto dal gas sul pistone."}
:::

:::attenzione
Alcuni testi indicano con $W$ il lavoro compiuto *sul* gas e scrivono $\Delta U=Q+W$. Con quella convenzione una compressione ha lavoro positivo. Un gas che riceve $500\,\mathrm{J}$ per calore e $300\,\mathrm{J}$ per lavoro dal pistone ha $\Delta U=800\,\mathrm{J}$ in entrambe le convenzioni. In questo capitolo $W$ è il lavoro compiuto dal gas, quindi $W=-300\,\mathrm{J}$ e
$$
\Delta U=500\,\mathrm{J}-(-300\,\mathrm{J})=800\,\mathrm{J}.
$$
:::

## Primo principio

:::teorema{#primo-principio titolo="Conservazione dell'energia"}
Nelle ipotesi indicate, la conservazione dell'energia per un sistema chiuso si scrive
$$
\Delta U=Q-W,
$$
dove $\Delta U=U_f-U_i$ è la variazione di energia interna, ossia dell'energia microscopica del sistema. Quando il gas assorbe $800\,\mathrm{J}$ e compie $300\,\mathrm{J}$ di lavoro, entrano $800\,\mathrm{J}$ ed escono $300\,\mathrm{J}$. L'energia interna aumenta quindi di $500\,\mathrm{J}$.

L'energia interna è una **funzione di stato**, perché la sua variazione dipende soltanto dagli stati iniziale e finale. Per calcolare calore e lavoro occorre anche conoscere il processo che li collega. Da due misure indipendenti si può trovare la terza grandezza usando $Q=\Delta U+W$ oppure $W=Q-\Delta U$.
:::

:::esempio{titolo="Compressione con cessione di calore"}
Un gas cede $200\,\mathrm{J}$ e riceve $500\,\mathrm{J}$ di lavoro dal pistone. Nella convenzione adottata $Q=-200\,\mathrm{J}$ e $W=-500\,\mathrm{J}$. Si ha quindi
$$
\Delta U=-200\,\mathrm{J}-(-500\,\mathrm{J})=300\,\mathrm{J}.
$$
Il gas perde energia attraverso la parete, mentre il pistone gliene trasferisce una quantità maggiore. Il bilancio è positivo e l'energia interna aumenta.
:::

:::esempio{titolo="Combinazioni di segno"}
Il bilancio $\Delta U=Q-W$ dà risultati diversi a seconda dei segni degli scambi.
- Con $Q=+600\,\mathrm{J}$ e $W=+200\,\mathrm{J}$ si ha $\Delta U=+400\,\mathrm{J}$.
- Con $Q=+200\,\mathrm{J}$ e $W=+600\,\mathrm{J}$ si ha $\Delta U=-400\,\mathrm{J}$. Il gas compie più lavoro del calore che riceve e la differenza proviene dalla sua energia interna.
- Con $Q=0$ e $W=+300\,\mathrm{J}$ si ha $\Delta U=-300\,\mathrm{J}$.
- Con $Q=-300\,\mathrm{J}$ e $W=0$ si ha $\Delta U=-300\,\mathrm{J}$.

Gli ultimi due casi hanno la stessa variazione di energia interna. Nel terzo il gas perde energia compiendo lavoro, nel quarto la perde cedendo calore.
:::

:::attenzione
Il calore assorbito coincide con l'aumento di energia interna solo se il lavoro totale è nullo. In un'espansione isoterma reversibile di un gas ideale $\Delta U=0$ e $Q=W>0$. L'energia ricevuta per calore viene interamente trasferita all'ambiente per lavoro.
:::

## Lavoro nel diagramma pressione-volume

::::teorema{#lavoro-volume titolo="Lavoro di espansione e compressione"}
Si consideri un gas in un cilindro con pistone ideale, di massa e attrito trascurabili. La pressione esterna $p_{\mathrm{est}}$ è costante e l'unico lavoro è quello di volume. Il lavoro di volume compiuto dal gas è $W=p_{\mathrm{est}}(V_f-V_i)$. Se il processo è quasi statico, si può usare la pressione del gas $p$ nel diagramma $p$-$V$. Il lavoro è l'area con segno sotto il percorso, positiva in espansione e negativa in compressione.

:::dimostrazione
Il pistone ha area $A$ e lo spostamento $\Delta x$ è positivo verso l'esterno. La forza resistente esercitata sul pistone ha modulo $p_{\mathrm{est}}A$ e la variazione di volume è $\Delta V=A\Delta x$. Perciò il lavoro scambiato è $W=p_{\mathrm{est}}A\Delta x=p_{\mathrm{est}}\Delta V$. Se la pressione varia quasi staticamente, il percorso si può dividere in tratti sempre più piccoli, su ciascuno dei quali il prodotto $p\Delta V$ approssima il lavoro. La somma di questi prodotti è l'area con segno sotto la curva nel limite di una suddivisione sempre più fine. Per un tratto rettilineo l'area è quella di un trapezio e vale
$$
W=\frac{p_i+p_f}{2}(V_f-V_i).
$$
:::
::::

:::esempio{titolo="Lavoro di un'espansione isobara"}
A $150\,\mathrm{kPa}$ il volume passa da $1$ a $3\,\mathrm{L}$. Poiché $1\,\mathrm{kPa}\cdot\mathrm{L}=10^3\,\mathrm{Pa}\cdot10^{-3}\,\mathrm{m^3}=1\,\mathrm{J}$, il rettangolo di altezza $150\,\mathrm{kPa}$ e base $2\,\mathrm{L}$ dà direttamente $W=300\,\mathrm{J}$. Percorrere lo stesso tratto in compressione cambia il segno del lavoro, perché $\Delta V=-2\,\mathrm{L}$.

::grafico{linee="1,150 3,150" area="150;0;1;3" punti="1,150,pieno,A;3,150,pieno,B" vettori="1.5,150,2.55,150" xmin=0 xmax=4 ymin=0 ymax=200 nomi="V,p (kPa)" titolo="Il tratto da A a B è percorso verso volumi maggiori. L'area colorata vale $300\,\mathrm{J}$. Il volume è espresso in litri."}
:::

:::esempio{titolo="Lavoro lungo un tratto rettilineo"}
Un gas passa quasi staticamente da $A=(2\,\mathrm{L},240\,\mathrm{kPa})$ a $B=(6\,\mathrm{L},120\,\mathrm{kPa})$ lungo un segmento. L'area sotto il segmento è quella di un trapezio con basi $240\,\mathrm{kPa}$ e $120\,\mathrm{kPa}$ e altezza $4\,\mathrm{L}$. Perciò
$$
W=\frac{240+120}{2}\cdot4\,\mathrm{J}=720\,\mathrm{J}.
$$
Il volume aumenta, quindi il lavoro è positivo. La pressione media lungo il segmento è $180\,\mathrm{kPa}$, valore intermedio fra quelli agli estremi, e moltiplicata per $\Delta V=4\,\mathrm{L}$ dà gli stessi $720\,\mathrm{J}$.

::grafico{linee="2,240 6,120" area="300-30*x;0;2;6" punti="2,240,pieno,A;6,120,pieno,B" vettori="3.5,195,4.5,165" xmin=0 xmax=7 ymin=0 ymax=300 nomi="V,p (kPa)" titolo="Il trapezio sotto il segmento $AB$ ha area $720\,\mathrm{J}$. Il volume è espresso in litri."}
:::

:::osservazione{titolo="Pressione in atmosfere"}
Se la pressione è data in atmosfere e il volume in litri, il prodotto $1\,\mathrm{atm}\cdot\mathrm{L}$ vale circa $101{,}3\,\mathrm{J}$, perché $1\,\mathrm{atm}\simeq1{,}013\cdot10^{5}\,\mathrm{Pa}$ e $1\,\mathrm{L}=10^{-3}\,\mathrm{m^3}$. Un gas che si espande di $3\,\mathrm{L}$ alla pressione costante di $2\,\mathrm{atm}$ compie $6\,\mathrm{atm\cdot L}\simeq608\,\mathrm{J}$.
:::

:::attenzione
In un processo rapido la pressione interna può variare da un punto all'altro del gas. In questo caso la curva tracciata fra gli stati di equilibrio iniziale e finale è insufficiente per trovare il lavoro. Nel modello del pistone ideale serve la pressione esterna durante lo spostamento.
:::

## Energia interna e calori molari

:::definizione{#calori-molari titolo="Calori molari a volume e a pressione costanti"}
Per un gas ideale l'energia interna dipende soltanto dalla temperatura. Se il calore molare a volume costante $C_V$ è circa costante nell'intervallo di temperatura considerato, allora $\Delta U=nC_V\Delta T$, dove $n$ è il numero di moli e $\Delta T=T_f-T_i$. $C_V$ misura quanta energia, per mole e per kelvin, occorre fornire per calore mantenendo il volume costante. Il gas ideale monoatomico classico ha $C_V=\dfrac{3}{2}R$. Un gas ideale biatomico con rotazioni attive e vibrazioni trascurabili ha $C_V\simeq\dfrac{5}{2}R$. Questi calori molari si misurano in $\mathrm{J/(mol\,K)}$.

Per una mole di gas monoatomico riscaldata di $20\,\mathrm{K}$, con $R=8{,}314\,\mathrm{J/(mol\,K)}$, si ottiene $\Delta U=1\cdot\dfrac{3}{2}\cdot8{,}314\cdot20\,\mathrm{J}\simeq249\,\mathrm{J}$. Il calore coincide con questo valore quando il gas è chiuso in un recipiente rigido e può compiere solo lavoro di volume. Un cilindro con pistone permette anche uno scambio di lavoro.
:::

:::esempio{titolo="Gas biatomico"}
Due moli di gas ideale biatomico, con $C_V=\dfrac{5}{2}R$, si riscaldano di $30\,\mathrm{K}$. La variazione di energia interna è
$$
\Delta U=2\cdot\frac{5}{2}\cdot8{,}314\cdot30\,\mathrm{J}\simeq1247\,\mathrm{J}.
$$
Con le stesse moli e lo stesso aumento di temperatura, un gas monoatomico avrebbe $\Delta U=2\cdot\dfrac{3}{2}\cdot8{,}314\cdot30\,\mathrm{J}\simeq748\,\mathrm{J}$. Le molecole biatomiche immagazzinano energia anche nella rotazione, quindi per lo stesso $\Delta T$ richiedono più energia.
:::

:::attenzione
La formula $\Delta U=nC_V\Delta T$ vale per qualunque trasformazione di un gas ideale, non soltanto a volume costante. Per una mole di gas monoatomico riscaldata di $100\,\mathrm{K}$ a pressione costante si ha $\Delta U=\dfrac{3}{2}R\cdot100\,\mathrm{K}\simeq1247\,\mathrm{J}$. Il prodotto $nC_p\Delta T\simeq2079\,\mathrm{J}$ è il calore assorbito e supera $\Delta U$ perché comprende anche il lavoro di circa $831\,\mathrm{J}$.
:::

:::richiamo{titolo="Equazione di stato del gas ideale"}
Per $n$ moli di gas ideale con pressione $p$, volume $V$ e temperatura assoluta $T$ vale $pV=nRT$, con $R=8{,}314\,\mathrm{J/(mol\,K)}$. Se la pressione è costante, $p\,\Delta V=nR\,\Delta T$. Si rimanda al capitolo su temperatura, calore e gas ideali.
:::

::::teorema{#relazione-mayer titolo="Relazione di Mayer"}
Per un gas ideale il calore molare a pressione costante $C_p$ e quello a volume costante soddisfano $C_p-C_V=R$. A parità di aumento di temperatura, mantenere la pressione costante richiede più calore, perché il gas si espande e compie lavoro.

:::dimostrazione
In un riscaldamento isobaro quasi statico, l'equazione di stato dà $p\Delta V=nR\Delta T$. Poiché entrano $nC_p\Delta T$ per calore e il gas compie $nR\Delta T$ di lavoro, il primo principio dà
$$
nC_V\Delta T=nC_p\Delta T-nR\Delta T.
$$
Dividendo per $n\Delta T$ per una variazione non nulla si ottiene $C_V=C_p-R$.
:::
::::

## Isocore e isobare

::::teorema{#isocora-isobara titolo="Due trasformazioni con un vincolo costante"}
In un'**isocora** il volume è costante. Se l'unico lavoro possibile è quello di volume, risulta $W=0$ e $Q=nC_V\Delta T$. Nel diagramma il segmento è verticale e ha area nulla. A volume e numero di moli costanti, $p\propto T$, quindi la variazione della pressione permette di trovare quella della temperatura.

In un'**isobara** quasi statica la pressione è costante. Per un gas ideale si hanno $W=nR\Delta T$ e $Q=nC_p\Delta T$. In un raffreddamento isobaro $\Delta T<0$, quindi il gas si contrae, compie lavoro negativo e cede calore. Per una mole di gas monoatomico riscaldata da $300$ a $400\,\mathrm{K}$, $\Delta U\simeq1247\,\mathrm{J}$ in entrambi i processi. Nell'isocora questo è anche il calore assorbito. Nell'isobara il lavoro vale circa $831\,\mathrm{J}$ e il calore risulta circa $2079\,\mathrm{J}$, calcolato prima di arrotondare i contributi.

:::dimostrazione
Nell'isocora $\Delta V=0$, quindi $W=p\,\Delta V=0$ e il primo principio dà $Q=\Delta U$. Per un gas ideale $\Delta U=nC_V\Delta T$, perciò $Q=nC_V\Delta T$. Nell'isobara quasi statica l'equazione di stato dà $W=p\,\Delta V=nR\,\Delta T$. L'energia interna varia ancora di $\Delta U=nC_V\Delta T$, perché dipende solo dalla temperatura. Il primo principio dà allora
$$
Q=\Delta U+W=n(C_V+R)\Delta T.
$$
La relazione di Mayer dà $C_V+R=C_p$, quindi $Q=nC_p\Delta T$.
:::
::::

:::esempio{titolo="Riscaldamento a volume costante"}
Un gas in un recipiente rigido passa da $300$ a $450\,\mathrm{K}$ partendo da $100\,\mathrm{kPa}$. Con volume e numero di moli costanti, $\dfrac{p_f}{p_i}=\dfrac{T_f}{T_i}=\dfrac{450}{300}=\dfrac{3}{2}$, quindi $p_f=150\,\mathrm{kPa}$. Se il gas è formato da $0{,}5\,\mathrm{mol}$ monoatomiche, il calore assorbito è
$$
Q=\Delta U=0{,}5\cdot\frac{3}{2}\cdot8{,}314\cdot150\,\mathrm{J}\simeq935\,\mathrm{J}.
$$
:::

:::esempio{titolo="Isocora e isobara con la stessa variazione di temperatura"}
Un gas ideale monoatomico parte dallo stato $A=(2\,\mathrm{L},100\,\mathrm{kPa})$. Un'isocora lo porta in $B=(2\,\mathrm{L},150\,\mathrm{kPa})$ e un'isobara lo porta in $C=(3\,\mathrm{L},100\,\mathrm{kPa})$. Poiché $p_BV_B=300\,\mathrm{J}=p_CV_C$, gli stati $B$ e $C$ hanno la stessa temperatura e in entrambi i processi
$$
nR\Delta T=(300-200)\,\mathrm{J}=100\,\mathrm{J},
\qquad
\Delta U=\frac{3}{2}\cdot100\,\mathrm{J}=150\,\mathrm{J}.
$$
Nell'isocora $Q_{AB}=150\,\mathrm{J}$. Nell'isobara il lavoro è $W=100\cdot1\,\mathrm{J}=100\,\mathrm{J}$, quindi $Q_{AC}=(150+100)\,\mathrm{J}=250\,\mathrm{J}$. Il calore in più rispetto all'isocora coincide con il lavoro.

::grafico{f="300/x" punti="2,100,pieno,A;2,150,pieno,B;3,100,pieno,C" linee="2,100 2,150;2,100 3,100" vettori="2,115,2,140;2.3,100,2.75,100" xmin=0 xmax=4 ymin=0 ymax=250 nomi="V,p (kPa)" legenda="\text{isoterma }pV=300\,\mathrm{J}" titolo="Gli stati $B$ e $C$ sono sulla stessa isoterma e hanno la stessa temperatura. Il volume è espresso in litri."}
:::

:::esempio{#cammini titolo="Stessi stati, due lavori diversi"}
Un gas ideale monoatomico passa da $A=(2\,\mathrm{L},100\,\mathrm{kPa})$ a $C=(4\,\mathrm{L},200\,\mathrm{kPa})$. Anche senza conoscere $n$ si può trovare la variazione di energia interna, perché $nR\Delta T=\Delta(pV)$. Pertanto
$$
\Delta U=\frac32\left(p_CV_C-p_AV_A\right)
=\frac32(800-200)\,\mathrm{J}=900\,\mathrm{J}.
$$

::grafico{linee="2,100 2,200 4,200;2,100 4,100 4,200" punti="2,100,pieno,A;2,200,pieno,B;4,200,pieno,C;4,100,pieno,D" vettori="2,123,2,173;2.5,200,3.5,200;2.5,100,3.5,100;4,123,4,173" xmin=0 xmax=5 ymin=0 ymax=250 nomi="V,p (kPa)" titolo="I percorsi A-B-C e A-D-C hanno gli stessi estremi. Il tratto orizzontale superiore corrisponde al lavoro maggiore. Il volume è espresso in litri."}

Nell'isocora $AB$ il lavoro è nullo. Nell'isobara $BC$ la pressione è $200\,\mathrm{kPa}$, quindi $W_{ABC}=200\cdot2\,\mathrm{J}=400\,\mathrm{J}$. Sul percorso $ADC$ l'espansione avviene a soli $100\,\mathrm{kPa}$, quindi $W_{ADC}=100\cdot2\,\mathrm{J}=200\,\mathrm{J}$. In entrambi i casi il gas deve guadagnare gli stessi $900\,\mathrm{J}$ di energia interna. Applicando $Q=\Delta U+W$ si trovano $1300\,\mathrm{J}$ lungo $ABC$ e $1100\,\mathrm{J}$ lungo $ADC$.
:::

## Isoterme e adiabatiche

::::teorema{#isoterma titolo="Isoterma reversibile del gas ideale"}
In un'**isoterma** la temperatura rimane costante. Per un gas ideale $\Delta U=0$, quindi $Q=W$. Se la trasformazione è reversibile, il lavoro è l'area con segno sotto l'iperbole $p=\dfrac{nRT}{V}$ e vale
$$
W=nRT\ln\frac{V_f}{V_i}.
$$
Il rapporto tra i volumi è senza unità e il logaritmo è naturale. A $300\,\mathrm{K}$ una mole di gas che raddoppia il proprio volume compie $W\simeq1729\,\mathrm{J}$ e assorbe altrettanto calore. Se si percorre l'isoterma al contrario, il rapporto dei volumi si inverte, il logaritmo cambia segno e il gas cede lo stesso calore.

:::dimostrazione
In ogni stato dell'isoterma la legge dei gas dà $p=\dfrac{nRT}{V}$, con $nRT$ costante. Il lavoro è l'area con segno sotto questa curva fra $V_i$ e $V_f$, quindi è $nRT$ volte l'area sotto la curva $\dfrac{1}{V}$ nello stesso intervallo. Poiché la derivata di $\ln V$ è $\dfrac1V$, quell'area vale $\ln V_f-\ln V_i=\ln\dfrac{V_f}{V_i}$. Ne segue
$$
W=nRT\ln\frac{V_f}{V_i}.
$$
Poiché $nRT=p_iV_i$, il lavoro si scrive anche $W=p_iV_i\ln\dfrac{V_f}{V_i}$, e per un gas ideale $\Delta U=0$ dà $Q=W$.
:::
::::

:::esempio{titolo="Isoterma da 1 a 3 litri"}
Un gas ideale con $nRT=600\,\mathrm{J}$ si espande reversibilmente a temperatura costante da $1$ a $3\,\mathrm{L}$. La pressione scende da $600$ a $200\,\mathrm{kPa}$ e il lavoro è
$$
W=600\ln3\,\mathrm{J}\simeq659\,\mathrm{J}.
$$
Il valore è compreso fra $200\cdot2\,\mathrm{J}=400\,\mathrm{J}$ e $600\cdot2\,\mathrm{J}=1200\,\mathrm{J}$, cioè fra i lavori di due isobare alla pressione minima e alla pressione massima dello stesso intervallo di volumi.

::grafico{f="600/x" area="600/x;0;1;3" punti="1,600,pieno,A;3,200,pieno,B" xmin=0 xmax=4 ymin=0 ymax=800 nomi="V,p (kPa)" legenda="p=\dfrac{600}{V}" titolo="L'area sotto l'iperbole fra $1$ e $3\,\mathrm{L}$ vale $600\ln3\,\mathrm{J}\simeq659\,\mathrm{J}$. Il volume è espresso in litri."}
:::

:::richiamo{titolo="Relazione di Mayer"}
Per un gas ideale con $C_V$ costante, il calore molare a pressione costante soddisfa $C_p-C_V=R$. Il rapporto $\gamma=\dfrac{C_p}{C_V}$ vale quindi $1+\dfrac{R}{C_V}$, cioè $\dfrac{5}{3}$ per un gas monoatomico.
:::

::::teorema{#adiabatica titolo="Trasformazione adiabatica"}
Una trasformazione è **adiabatica** quando $Q=0$. Il primo principio dà $\Delta U=-W$. Un gas ideale che si espande compiendo lavoro diminuisce quindi la propria energia interna e si raffredda. Per una mole di gas monoatomico che passa da $400$ a $300\,\mathrm{K}$ durante un'espansione adiabatica, $\Delta U=\dfrac32 R\cdot(-100\,\mathrm{K})\simeq-1247\,\mathrm{J}$, dunque $W\simeq1247\,\mathrm{J}$.

Per un'adiabatica *reversibile* di un gas ideale con calori molari costanti,
$$
pV^\gamma=\text{costante},
\qquad TV^{\gamma-1}=\text{costante},
\qquad \gamma=\frac{C_p}{C_V}.
$$
La seconda relazione segue dalla prima perché $p=\dfrac{nRT}{V}$. Per un gas monoatomico $\gamma=\dfrac53$. Se il volume raddoppia reversibilmente, il rapporto tra temperatura finale e iniziale è $2^{-\frac23}\simeq0{,}63$. Per un gas inizialmente a $400\,\mathrm{K}$, la temperatura scende quindi a circa $252\,\mathrm{K}$. Le relazioni tra pressione, volume e temperatura richiedono la reversibilità, mentre il bilancio $\Delta U=-W$ vale per qualsiasi adiabatica nelle ipotesi del capitolo.


:::dimostrazione
In un piccolo passo reversibile il gas compie un lavoro $p\,dV$. Poiché $Q=0$, la diminuzione di energia interna soddisfa $nC_V\,dT=-p\,dV$. Sostituendo $p=\dfrac{nRT}{V}$ e dividendo per $nT$ si ottiene
$$
C_V\frac{dT}{T}=-R\frac{dV}{V}.
$$
Sommando i piccoli passi, il termine $\dfrac{dT}{T}$ dà il logaritmo del rapporto delle temperature, perché la derivata di $\ln T$ è $\dfrac1T$. Lo stesso vale per i volumi. Dunque
$$
\ln\frac{T_f}{T_i}=-\frac{R}{C_V}\ln\frac{V_f}{V_i}.
$$
La relazione di Mayer dà $\dfrac{R}{C_V}=\gamma-1$. Passando dal logaritmo al suo argomento si ottiene $T_fV_f^{\gamma-1}=T_iV_i^{\gamma-1}$. Poiché $T=\dfrac{pV}{nR}$ con $n$ costante, sostituendo nella relazione precedente si ottiene anche $p_fV_f^\gamma=p_iV_i^\gamma$.
:::

::grafico{f="400/x;400/x^(5/3)" punti="1,400,pieno,A;2,200,pieno,B;2,125.992,pieno,C" xmin=0 xmax=3.1 ymin=0 ymax=500 nomi="V,p (kPa)" legenda="\text{isoterma};\text{adiabatica}" titolo="Dallo stato A, con $V=1\,\mathrm{L}$ e $p=400\,\mathrm{kPa}$, l'espansione fino a $2\,\mathrm{L}$ porta a una pressione minore lungo l'adiabatica reversibile, perché il gas si raffredda. Il volume è espresso in litri."}
::::

:::esempio{titolo="Compressione adiabatica reversibile"}
Un gas ideale monoatomico a $300\,\mathrm{K}$ viene compresso reversibilmente, senza scambio di calore, fino a metà del volume iniziale. Dalla relazione $TV^{\gamma-1}=\text{costante}$ con $\gamma=\dfrac{5}{3}$ si ottiene
$$
\frac{T_f}{T_i}=\left(\frac{V_i}{V_f}\right)^{\frac{2}{3}}=2^{\frac{2}{3}}\simeq1{,}59,
$$
quindi $T_f\simeq476\,\mathrm{K}$. La pressione finale è $2^{\frac{5}{3}}\simeq3{,}17$ volte quella iniziale, perché $p_fV_f^\gamma=p_iV_i^\gamma$. Il gas si scalda, poiché il lavoro ricevuto aumenta interamente l'energia interna.
:::

:::esempio{titolo="Lavoro adiabatico dai dati di stato"}
Un gas ideale monoatomico si espande in modo adiabatico reversibile da $V_i=1\,\mathrm{L}$ e $p_i=400\,\mathrm{kPa}$ fino a $V_f=2\,\mathrm{L}$. La pressione finale è $p_f=400\cdot2^{-\frac{5}{3}}\,\mathrm{kPa}\simeq126\,\mathrm{kPa}$. Poiché $nR\Delta T=\Delta(pV)$ e $\Delta U=\dfrac{3}{2}nR\Delta T$, il lavoro è
$$
W=-\Delta U=\frac{3}{2}\left(p_iV_i-p_fV_f\right)\simeq\frac{3}{2}(400-252)\,\mathrm{J}\simeq222\,\mathrm{J}.
$$
L'isoterma reversibile fra gli stessi volumi darebbe $400\ln2\,\mathrm{J}\simeq277\,\mathrm{J}$. L'adiabatica compie meno lavoro, perché la pressione diminuisce più rapidamente.
:::

## Cicli e dipendenza dal cammino

:::definizione{#ciclo titolo="Bilancio in un ciclo"}
Un **ciclo** riporta il sistema allo stato iniziale. L'energia interna torna quindi al valore di partenza e
$$
\Delta U_{\mathrm{ciclo}}=0,\qquad Q_{\mathrm{tot}}=W_{\mathrm{tot}}.
$$
In un ciclo rettangolare percorso in senso orario, il gas si espande alla pressione $p_h$ e si comprime alla pressione $p_l<p_h$. Indicando con $V_h$ e $V_l$ il volume maggiore e minore, rispettivamente, i tratti orizzontali danno $p_h(V_h-V_l)$ e $-p_l(V_h-V_l)$. Sui lati verticali il lavoro è nullo. Il lavoro totale è dunque l'area racchiusa dal ciclo, $(p_h-p_l)(V_h-V_l)$. In senso antiorario i singoli tratti sono percorsi al contrario e il lavoro totale cambia segno.
:::

:::esempio{titolo="Espansione e compressione in un ciclo orario"}
Con pressioni $300$ e $100\,\mathrm{kPa}$ e volumi $1$ e $3\,\mathrm{L}$, l'espansione dà $W_{\mathrm{esp}}=600\,\mathrm{J}$ e la compressione dà $W_{\mathrm{comp}}=-200\,\mathrm{J}$. Si ottengono $W_{\mathrm{tot}}=400\,\mathrm{J}$ e $Q_{\mathrm{tot}}=400\,\mathrm{J}$. Il calore netto è la somma con segno di tutti gli scambi. Per il rendimento di una macchina termica si distingue questo valore dal calore complessivamente assorbito nei soli tratti con $Q>0$.

::grafico{linee="1,100 1,300 3,300 3,100 1,100" area="300;100;1;3" vettori="1,145,1,240;1.45,300,2.55,300;3,250,3,155;2.55,100,1.45,100" xmin=0 xmax=4 ymin=0 ymax=350 nomi="V,p (kPa)" titolo="Nel ciclo orario l'area del rettangolo è il lavoro netto di $400\,\mathrm{J}$. Il volume è espresso in litri."}
:::

:::esempio{titolo="Ciclo triangolare di un gas monoatomico"}
Un gas ideale monoatomico percorre in senso orario il ciclo $A\to C\to B\to A$, con $A=(1\,\mathrm{L},100\,\mathrm{kPa})$, $C=(3\,\mathrm{L},300\,\mathrm{kPa})$ e $B=(3\,\mathrm{L},100\,\mathrm{kPa})$. I prodotti $pV$ valgono $100\,\mathrm{J}$ in $A$, $900\,\mathrm{J}$ in $C$ e $300\,\mathrm{J}$ in $B$.
- Nel segmento $AC$ si ha $W=\dfrac{100+300}{2}\cdot2\,\mathrm{J}=400\,\mathrm{J}$ e $\Delta U=\dfrac{3}{2}(900-100)\,\mathrm{J}=1200\,\mathrm{J}$, quindi $Q=1600\,\mathrm{J}$.
- Nell'isocora $CB$ si ha $W=0$ e $\Delta U=\dfrac{3}{2}(300-900)\,\mathrm{J}=-900\,\mathrm{J}$, quindi $Q=-900\,\mathrm{J}$.
- Nell'isobara $BA$ si ha $W=100\cdot(-2)\,\mathrm{J}=-200\,\mathrm{J}$ e $\Delta U=\dfrac{3}{2}(100-300)\,\mathrm{J}=-300\,\mathrm{J}$, quindi $Q=-500\,\mathrm{J}$.

Le tre variazioni di energia interna hanno somma nulla. Il lavoro netto è $W_{\mathrm{tot}}=(400-200)\,\mathrm{J}=200\,\mathrm{J}$, uguale al calore netto $(1600-900-500)\,\mathrm{J}$ e all'area del triangolo, $\dfrac{1}{2}\cdot2\,\mathrm{L}\cdot200\,\mathrm{kPa}$. Lungo $AC$ il prodotto $pV$ cresce e il volume aumenta, quindi in ogni tratto sia $\Delta U$ sia $W$ sono positivi e il calore entra per tutto il segmento. Il calore assorbito è dunque $1600\,\mathrm{J}$ e il lavoro netto ne è la frazione $\dfrac{200}{1600}=\dfrac{1}{8}$.

::grafico{linee="1,100 3,300 3,100 1,100" area="100*x;100;1;3" punti="1,100,pieno,A;3,300,pieno,C;3,100,pieno,B" vettori="1.7,170,2.3,230;3,230,3,170;2.5,100,1.5,100" xmin=0 xmax=4 ymin=0 ymax=350 nomi="V,p (kPa)" titolo="Il ciclo $A\to C\to B\to A$ è percorso in senso orario. L'area del triangolo è il lavoro netto di $200\,\mathrm{J}$. Il volume è espresso in litri."}
:::

## Trasformazioni reali e controlli del bilancio

:::osservazione{#controlli titolo="Espansione libera e controllo dei segni"}
In un recipiente rigido e isolato, un gas occupa una camera separata da una seconda camera vuota. Quando si toglie il separatore, il gas si espande nel vuoto e il sistema resta isolato. Poiché l'espansione avviene contro pressione esterna nulla, $W=0$, e poiché l'isolamento impedisce lo scambio di calore, $Q=0$. Il primo principio dà $\Delta U=0$. Per un gas ideale segue anche $\Delta T=0$.

L'espansione libera è adiabatica e irreversibile. Perciò si può usare $\Delta U=-W$, mentre la legge $pV^\gamma=\text{costante}$ descrive un'altra classe di processi. Se il volume finale è doppio, con temperatura invariata la legge dei gas dà $p_f=\dfrac12p_i$. Un'espansione adiabatica *reversibile* fra gli stessi volumi darebbe una pressione finale minore, perché in quel caso il gas si raffredda compiendo lavoro.
:::

:::esempio{titolo="Espansione libera e isoterma fra gli stessi due stati"}
Un gas ideale parte da $V_i=2\,\mathrm{L}$ e $p_i=200\,\mathrm{kPa}$. In un'espansione libera isolata di volume finale $4\,\mathrm{L}$, l'energia interna e la temperatura restano costanti. Il gas arriva quindi a $p_f=100\,\mathrm{kPa}$ con $Q=W=0$. I medesimi stati possono essere collegati anche da un'isoterma reversibile. In tal caso il lavoro è
$$
W=p_iV_i\ln\frac{V_f}{V_i}=400\ln2\,\mathrm{J}\simeq277\,\mathrm{J}.
$$
Lungo l'isoterma entrano $277\,\mathrm{J}$ per calore ed esce altrettanta energia per lavoro. Per entrambi i processi la variazione di energia interna è nulla, come segue dalle temperature uguali agli estremi.
:::

:::esempio{titolo="Isoterma contro pressione esterna costante"}
Un gas ideale, a contatto con un serbatoio che mantiene la temperatura costante, passa da $V_i=2\,\mathrm{L}$ e $p_i=200\,\mathrm{kPa}$ a $V_f=4\,\mathrm{L}$ e $p_f=100\,\mathrm{kPa}$. Il pistone si sposta contro una pressione esterna costante di $100\,\mathrm{kPa}$. Il lavoro è
$$
W=p_{\mathrm{est}}(V_f-V_i)=100\cdot2\,\mathrm{J}=200\,\mathrm{J},
$$
e poiché $\Delta U=0$ il calore assorbito è $Q=W=200\,\mathrm{J}$. Gli stati iniziale e finale sono gli stessi dell'isoterma reversibile, che richiede $277\,\mathrm{J}$. La variazione di energia interna è uguale nei due processi, mentre lavoro e calore dipendono dal processo seguito.
:::
