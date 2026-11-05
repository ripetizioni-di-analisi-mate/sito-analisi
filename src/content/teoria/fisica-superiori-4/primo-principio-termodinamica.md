---
titolo: Primo principio e trasformazioni termodinamiche
sommario: Segni di calore e lavoro, energia interna, trasformazioni dei gas ideali, diagrammi pressione-volume e bilanci nei cicli.
---

## Sistema e convenzioni di segno

:::definizione{#sistema titolo="Sistema chiuso e scambi di energia"}
Il **sistema** è la porzione di materia scelta per lo studio; tutto il resto è l'ambiente. Un sistema chiuso scambia energia senza scambiare materia. Il gas contenuto in un cilindro chiuso da un pistone può assorbire calore e spostare il pistone, quindi compiere lavoro sull'ambiente. Si considera qui un sistema chiuso fermo nel suo insieme, trascurando le variazioni macroscopiche di energia cinetica e potenziale.

Il calore $Q$ è positivo quando entra nel gas. Il lavoro $W$ è positivo quando il gas lo compie sull'ambiente. Un'espansione contro una pressione esterna positiva ha quindi lavoro positivo; una compressione ha lavoro negativo. Se il gas assorbe $800\,\mathrm J$ e compie un lavoro di $300\,\mathrm J$, una parte dell'energia entrata viene trasferita all'ambiente attraverso il lavoro. Questi segni saranno mantenuti in tutti i bilanci del capitolo.
:::

## Primo principio

:::teorema{#primo-principio titolo="Conservazione dell'energia"}
Il **primo principio della termodinamica** esprime la conservazione dell'energia per il sistema chiuso nelle ipotesi indicate,
$$
\Delta U=Q-W.
$$
$\Delta U=U_f-U_i$ è la variazione di energia interna, cioè dell'energia microscopica del sistema. Nell'esempio con $Q=800\,\mathrm J$ e $W=300\,\mathrm J$ si ottiene $\Delta U=500\,\mathrm J$. Se invece il gas cede $200\,\mathrm J$ mentre l'ambiente lo comprime compiendo su di esso $500\,\mathrm J$, i dati sono $Q=-200\,\mathrm J$ e $W=-500\,\mathrm J$. Quindi $\Delta U=300\,\mathrm J$.

L'energia interna è una **funzione di stato**, perché la sua variazione dipende soltanto dagli stati iniziale e finale. Calore e lavoro dipendono anche dal cammino seguito. Le espressioni inverse del bilancio sono $Q=\Delta U+W$ e $W=Q-\Delta U$. Il primo principio è una legge fisica generale; la formula dell'energia interna va invece scelta in base al sistema studiato.
:::

:::attenzione
Il calore assorbito non coincide sempre con l'aumento di energia interna. In un'espansione isoterma di un gas ideale $\Delta U=0$, mentre $Q=W>0$. L'energia entra attraverso il calore e viene trasferita all'ambiente attraverso il lavoro.
:::

## Lavoro nel diagramma pressione-volume

:::teorema{#lavoro-volume titolo="Lavoro di espansione e compressione"}
Se il gas si espande lentamente contro una pressione esterna costante $p$, il pistone di area $A$ si sposta di $\Delta x$ e il volume aumenta di $\Delta V=A\Delta x$. La forza esercitata è $F=pA$, quindi
$$
W=F\Delta x=pA\Delta x=p\Delta V.
$$
Con $p=1{,}5\cdot10^5\,\mathrm{Pa}$ e $\Delta V=2{,}0\cdot10^{-3}\,\mathrm{m^3}$ il gas compie $300\,\mathrm J$. Il prodotto $\mathrm{Pa}\cdot\mathrm{m^3}$ equivale a joule. Una compressione di uguale ampiezza alla stessa pressione dà $W=-300\,\mathrm J$.

Se la pressione varia lungo una trasformazione quasi statica, il lavoro è l'area con segno sotto la curva nel diagramma $p,V$. Si può suddividere il processo in piccoli tratti e sommare i prodotti $p\Delta V$. Per un tratto rettilineo tra due pressioni il risultato è l'area del trapezio, $W=\dfrac{p_i+p_f}{2}(V_f-V_i)$. Per una trasformazione rapida, la pressione interna potrebbe non essere uniforme; il lavoro di frontiera si riferisce alla pressione esterna, quando il modello del pistone è applicabile.
:::

::grafico{f="3" area="3;0;1;4" xmin=0 xmax=5 ymin=0 ymax=4 nomi="V,p" titolo="Espansione isobara da $V=1$ a $V=4$ in unità normalizzate: l'area del rettangolo rappresenta il lavoro positivo"}

## Energia interna e calori molari

:::definizione{#calori-molari titolo="Calori molari a volume e a pressione costanti"}
Per un gas ideale l'energia interna dipende soltanto dalla temperatura. In un intervallo in cui il calore molare $C_V$ è costante,
$$
\Delta U=nC_V\Delta T.
$$
$C_V$ è il calore necessario per aumentare di un kelvin la temperatura di una mole a volume costante. Per il gas ideale monoatomico classico $C_V=\dfrac32R$; per il biatomico, con rotazioni attive e vibrazioni trascurabili, $C_V\simeq\dfrac52R$. I valori hanno unità $\mathrm{J/(mol\,K)}$.

A pressione costante una parte del calore produce lavoro di espansione, quindi il calore molare $C_p$ è maggiore di $C_V$. Dall'equazione di stato si ottiene $p\Delta V=nR\Delta T$ e dal primo principio $nC_p\Delta T=nC_V\Delta T+nR\Delta T$. Pertanto
$$
C_p-C_V=R.
$$
Una mole di gas monoatomico riscaldata di $20\,\mathrm K$ aumenta la propria energia interna di circa $249\,\mathrm J$ lungo qualsiasi cammino fra quelle temperature. Il calore assorbito coincide con questo valore solo quando il lavoro totale è nullo.
:::

## Isocore e isobare

:::teorema{#isocora-isobara titolo="Due trasformazioni con un vincolo costante"}
In una **isocora** il volume resta costante. Se l'unico lavoro possibile è quello di volume, $W=0$ e
$$
Q=\Delta U=nC_V(T_f-T_i).
$$
Per una mole di gas monoatomico che passa da $300$ a $400\,\mathrm K$, $Q\simeq1247\,\mathrm J$. La pressione cresce in proporzione alla temperatura assoluta. Nel diagramma $p,V$ il tratto è verticale e l'area associata al lavoro è nulla.

In una **isobara** quasi statica la pressione resta costante. Si hanno
$$
W=nR\Delta T,\qquad Q=nC_p\Delta T.
$$
La stessa mole, riscaldata da $300$ a $400\,\mathrm K$ a pressione costante, compie circa $831\,\mathrm J$ e assorbe circa $2079\,\mathrm J$. La variazione di energia interna resta circa $1247\,\mathrm J$. In un raffreddamento isobaro tutti e tre i valori cambiano segno, perché $\Delta T<0$.
:::

::grafico{linee="2,1 2,3;2,3 5,3" punti="2,1,pieno,A;2,3,pieno,B;5,3,pieno,C" xmin=0 xmax=6 ymin=0 ymax=4 nomi="V,p" titolo="Il tratto $AB$ è isocoro e non produce lavoro di volume; il tratto $BC$ è un'espansione isobara"}

## Isoterme e adiabatiche

:::teorema{#isoterma titolo="Isoterma reversibile del gas ideale"}
In un'isoterma la temperatura rimane costante. Per un gas ideale $\Delta U=0$, quindi $Q=W$. Se la trasformazione è reversibile,
$$
W=nRT\ln\frac{V_f}{V_i}.
$$
Il logaritmo è naturale e il suo argomento è un rapporto senza unità. La formula esprime l'area sotto l'iperbole $p=\dfrac{nRT}{V}$; non richiede che la pressione sia costante. Per una mole a $300\,\mathrm K$ che raddoppia il volume si ottiene $W\simeq1729\,\mathrm J$ e il gas assorbe lo stesso calore. Se il volume si dimezza, il logaritmo è negativo e il gas cede calore.
:::

:::teorema{#adiabatica titolo="Trasformazione adiabatica"}
Una trasformazione è **adiabatica** quando il sistema non scambia calore, quindi $Q=0$ e $\Delta U=-W$. Un gas ideale che si espande compiendo lavoro diminuisce la propria energia interna e si raffredda. Il valore nullo del calore non implica temperatura costante.

Per un'adiabatica *reversibile* di gas ideale con calori molari costanti valgono anche
$$
pV^\gamma=\text{costante},\qquad TV^{\gamma-1}=\text{costante},
\qquad\gamma=\frac{C_p}{C_V}.
$$
Per un gas monoatomico $\gamma=\dfrac53$. Se la temperatura di una mole scende da $400$ a $300\,\mathrm K$, il lavoro è circa $1247\,\mathrm J$. Le relazioni con le potenze richiedono la reversibilità; il bilancio $\Delta U=-W$ vale più in generale per il sistema chiuso adiabatico nelle ipotesi del capitolo.
:::

::grafico{f="4/x;4/(x^1.667)" xmin=1 xmax=4 ymin=0 ymax=5 nomi="V,p" legenda="isoterma;adiabatica" titolo="Dal medesimo stato iniziale, l'adiabatica reversibile scende più rapidamente dell'isoterma perché durante l'espansione il gas si raffredda"}

## Cicli e dipendenza dal cammino

:::definizione{#ciclo titolo="Bilancio in un ciclo"}
Un **ciclo** è un insieme di trasformazioni che riporta il sistema allo stato iniziale. Le funzioni di stato ritornano ai valori iniziali, quindi $\Delta U_{\mathrm{ciclo}}=0$ e
$$
Q_{\mathrm{tot}}=W_{\mathrm{tot}}.
$$
Nel diagramma $p,V$, un ciclo rettangolare ha lavoro netto pari a $(p_h-p_l)(V_h-V_l)$ quando viene percorso in senso orario. L'espansione avviene infatti alla pressione maggiore e la compressione a quella minore. In senso antiorario il lavoro è negativo e serve un apporto netto di lavoro dall'ambiente. I tratti verticali non contribuiscono al lavoro di volume.

Con pressioni $3{,}0\cdot10^5$ e $1{,}0\cdot10^5\,\mathrm{Pa}$ e volumi $1{,}0$ e $3{,}0\,\mathrm L$, il lavoro orario è $400\,\mathrm J$. Il calore netto è anch'esso $400\,\mathrm J$, mentre il calore assorbito durante i singoli tratti può essere maggiore. Questa distinzione permette di definire il rendimento delle macchine termiche nel capitolo sul secondo principio.
:::

## Trasformazioni reali e controlli del bilancio

:::osservazione{#controlli titolo="Espansione libera e controllo dei segni"}
Nell'espansione libera di un gas ideale in un recipiente rigido isolato, il gas occupa uno spazio inizialmente vuoto. Non sposta una parete contro una pressione esterna, quindi $W=0$; il recipiente è isolato, quindi $Q=0$. Dal primo principio segue $\Delta U=0$ e, per il gas ideale, $\Delta T=0$. Il processo è adiabatico ma irreversibile, perciò non si applica la relazione $pV^\gamma=\text{costante}$.

Per controllare un risultato si ricostruisce il bilancio $Q=\Delta U+W$. Un gas che si raffredda ha $\Delta U<0$ nel modello ideale; un gas che subisce una compressione ha lavoro di volume negativo. Il segno del calore segue allora dal bilancio e non dal solo verso del movimento del pistone. Quando il testo fornisce un lavoro compiuto *sul* gas, quel numero entra con segno negativo nella convenzione $W$ adottata qui.
:::
