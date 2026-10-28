---
titolo: Secondo principio, macchine termiche ed entropia
sommario: Come il secondo principio limita la trasformazione di calore in lavoro, perché il ciclo di Carnot fissa il rendimento massimo tra due temperature e come l'entropia misura l'irreversibilità delle trasformazioni.
---

## Trasformazioni reversibili e irreversibili

:::definizione{#serbatoio-termico titolo="Serbatoio termico"}
Un **serbatoio termico** (o sorgente di calore) è un sistema con capacità termica così grande che il calore scambiato con altri corpi non ne modifica la temperatura in modo apprezzabile. Un serbatoio è quindi descritto da una sola grandezza, la sua temperatura $T$, che resta costante. L'atmosfera, un lago, la caldaia di una centrale mantenuta a temperatura fissa sono buone approssimazioni di serbatoi. Le macchine termiche si descrivono indicando con quali serbatoi scambiano calore.
:::

:::definizione{#trasformazione-reversibile titolo="Trasformazione reversibile"}
Una trasformazione di un sistema è **reversibile** se può essere percorsa in verso opposto riportando allo stato iniziale sia il sistema sia l'ambiente con cui ha interagito. Una trasformazione reversibile è quasistatica, cioè formata da stati di equilibrio, e priva di effetti dissipativi. Inoltre il calore vi viene scambiato solo tra corpi a temperature che differiscono di una quantità infinitesima.

Le trasformazioni reali sono **irreversibili**. Le cause tipiche sono l'attrito, gli scambi di calore tra corpi a temperature diverse, l'espansione libera di un gas nel vuoto e il mescolamento di sostanze diverse. Una trasformazione reversibile è quindi un modello ideale; serve come termine di confronto, perché, come mostra il teorema di Carnot, fornisce il massimo lavoro ottenibile tra due stati assegnati.
:::

:::richiamo{titolo="Primo principio della termodinamica"}
Per un sistema chiuso che passa da uno stato $A$ a uno stato $B$ vale $\Delta U = Q - L$, dove $Q$ è il calore assorbito dal sistema e $L$ il lavoro fatto dal sistema. In un ciclo lo stato finale coincide con quello iniziale, quindi $\Delta U = 0$ e $L = Q$. Si rimanda all'argomento sul primo principio della termodinamica.
:::

## Macchine termiche e rendimento

:::definizione{#macchina-termica titolo="Macchina termica"}
Una **macchina termica** è un sistema che compie una trasformazione ciclica, assorbe calore da uno o più serbatoi, ne cede una parte ad altri serbatoi e produce un lavoro positivo. Si indica con $Q_{ass} > 0$ la somma dei calori assorbiti in un ciclo e con $Q_{ced} > 0$ la somma dei valori assoluti dei calori ceduti. Poiché in un ciclo $L = Q$, il lavoro prodotto in un ciclo è
$$
L = Q_{ass} - Q_{ced} .
$$
Nel caso più semplice la macchina lavora tra due serbatoi a temperature $T_1 > T_2$; si indicano allora con $Q_1$ e $Q_2$ i calori scambiati con il serbatoio caldo e con quello freddo, presi con il segno della convenzione del primo principio. Per un motore si ha $Q_1 > 0$, $Q_2 < 0$ e $L = Q_1 + Q_2 > 0$. Se il fluido della macchina percorre un ciclo quasistatico, il lavoro è l'area racchiusa dal ciclo nel piano $pV$, positiva quando il ciclo è percorso in verso orario.

::grafico{curve="3+2*cos(t),3+1.5*sin(t),0,6.29" area="3+1.5*sqrt(1-((x-3)/2)^2);3-1.5*sqrt(1-((x-3)/2)^2);1;5" vettori="2.6,4.47,3.4,4.47;3.4,1.53,2.6,1.53" etichette="2.2,3.1,L = area" xmin=-0.5 xmax=6 ymin=-0.5 ymax=5.5 nomi="V,p" titolo="Un ciclo percorso in verso orario nel piano $pV$: il lavoro fatto dal fluido in un ciclo è positivo ed è uguale all'area racchiusa"}

:::

:::definizione{#rendimento titolo="Rendimento"}
Il **rendimento** di una macchina termica è il rapporto tra il lavoro prodotto in un ciclo e il calore assorbito nello stesso ciclo:
$$
\eta = \frac{L}{Q_{ass}} = 1 - \frac{Q_{ced}}{Q_{ass}} .
$$
Per una macchina tra due serbatoi la formula diventa $\eta = 1 + \dfrac{Q_2}{Q_1} = 1 - \dfrac{|Q_2|}{Q_1}$. Il rendimento è un numero puro e misura quale frazione del calore assorbito diventa lavoro. Dalla formula segue $\eta < 1$ ogni volta che la macchina cede calore; il secondo principio afferma che questa cessione è inevitabile. Per esempio una macchina che in ogni ciclo assorbe $2000\,\mathrm{J}$ e ne cede $1500\,\mathrm{J}$ produce $L = 500\,\mathrm{J}$ e ha rendimento $\eta = 0{,}25$.
:::

## Macchine frigorifere e pompe di calore

:::definizione{#macchina-frigorifera titolo="Macchina frigorifera"}
Una **macchina frigorifera** è una macchina che percorre un ciclo in cui assorbe calore da un serbatoio freddo a temperatura $T_2$ e cede calore a un serbatoio caldo a temperatura $T_1 > T_2$, ricevendo lavoro dall'esterno. Con la convenzione dei segni si ha $Q_2 > 0$, $Q_1 < 0$ e $L < 0$, e il bilancio del ciclo $L = Q_1 + Q_2$ dà
$$
|Q_1| = Q_2 + |L| ,
$$
cioè il serbatoio caldo riceve sia il calore sottratto al serbatoio freddo sia l'equivalente del lavoro speso. Nel piano $pV$ il ciclo di un frigorifero è percorso in verso antiorario, e l'area racchiusa è il lavoro ricevuto. Un frigorifero domestico sottrae calore all'interno e lo cede alla cucina; una **pompa di calore** è la stessa macchina usata per scaldare un ambiente con il calore prelevato dall'esterno più freddo.
:::

:::definizione{#efficienza titolo="Efficienza di frigoriferi e pompe di calore"}
L'**efficienza** (o coefficiente di prestazione) di una macchina frigorifera è il rapporto tra il calore sottratto al serbatoio freddo e il lavoro speso:
$$
\varepsilon = \frac{Q_2}{|L|} .
$$
Per una pompa di calore l'effetto utile è il calore ceduto al serbatoio caldo, quindi la sua efficienza è
$$
\varepsilon_{pc} = \frac{|Q_1|}{|L|} = \frac{Q_2 + |L|}{|L|} = \varepsilon + 1 .
$$
Le efficienze possono superare $1$, poiché il lavoro speso serve solo a trasferire calore da un serbatoio all'altro. Per esempio un frigorifero che sottrae $300\,\mathrm{J}$ all'interno spendendo un lavoro di $100\,\mathrm{J}$ ha $\varepsilon = 3$ e cede alla cucina $400\,\mathrm{J}$; la stessa macchina usata come pompa di calore ha $\varepsilon_{pc} = 4$.
:::

## Enunciati del secondo principio

:::teorema{#enunciato-di-kelvin-planck titolo="Secondo principio: enunciato di Kelvin-Planck"}
È impossibile realizzare una trasformazione il cui *unico* risultato sia l'assorbimento di calore da un solo serbatoio e la sua trasformazione integrale in lavoro.

È un principio, cioè una legge ricavata dall'esperienza e non dimostrabile a partire da altre leggi. La parola *unico* ha un ruolo preciso. In un'espansione isoterma un gas perfetto trasforma in lavoro tutto il calore assorbito da un serbatoio, ma il suo volume aumenta, quindi il risultato non è unico. Per una macchina ciclica l'enunciato dice che non esiste un motore che lavora con un solo serbatoio; quindi ogni motore deve cedere calore a un serbatoio più freddo, e perciò ha rendimento $\eta < 1$.
:::

:::teorema{#enunciato-di-clausius titolo="Secondo principio: enunciato di Clausius"}
È impossibile realizzare una trasformazione il cui *unico* risultato sia il passaggio di calore da un corpo a temperatura più bassa a un corpo a temperatura più alta.

Anche questo è un principio ricavato dall'esperienza, secondo la quale il calore passa spontaneamente solo dal corpo più caldo al più freddo. Un frigorifero trasferisce calore dall'interno freddo alla cucina, ma per farlo riceve lavoro dall'esterno; in termini di efficienza, l'enunciato dice che ogni frigorifero ha $|L| > 0$, cioè $\varepsilon$ finita.
:::

::::teorema{#equivalenza-degli-enunciati titolo="Equivalenza degli enunciati"}
L'enunciato di Kelvin-Planck e l'enunciato di Clausius sono equivalenti, cioè se uno dei due fosse falso sarebbe falso anche l'altro.

L'equivalenza permette di usare, in ogni ragionamento, l'enunciato più comodo. Le dimostrazioni del teorema di Carnot e della disuguaglianza di Clausius si basano sull'enunciato di Kelvin-Planck.

:::dimostrazione
Siano dati due serbatoi a temperature $T_1 > T_2$.

Si supponga falso l'enunciato di Kelvin-Planck. Allora esiste una macchina $M$ che in un ciclo assorbe $Q$ dal serbatoio caldo e produce il lavoro $L = Q$. Questo lavoro si usa per azionare un frigorifero $F$ che assorbe $Q_2' > 0$ dal serbatoio freddo e cede $Q_2' + L$ al serbatoio caldo. La macchina composta da $M$ e $F$ non scambia lavoro con l'esterno; il serbatoio caldo riceve in totale $Q_2' + L - Q = Q_2'$ e il serbatoio freddo cede $Q_2'$. Quindi l'unico risultato è il passaggio di $Q_2'$ dal corpo freddo al corpo caldo, e l'enunciato di Clausius è falso.

Si supponga falso l'enunciato di Clausius. Allora esiste un dispositivo $D$ che trasferisce un calore $Q$ dal serbatoio freddo al caldo senza altri effetti. Si fa lavorare tra i due serbatoi un motore che assorbe $Q_1$ dal serbatoio caldo, produce $L > 0$ e cede $Q$ al serbatoio freddo, e si usa $D$ per riportare $Q$ al serbatoio caldo. Il serbatoio freddo non subisce variazioni, e il serbatoio caldo cede in totale $Q_1 - Q = L$. Perciò l'unico risultato è la trasformazione integrale in lavoro di calore preso da un solo serbatoio, e l'enunciato di Kelvin-Planck è falso.
:::
::::

## Ciclo di Carnot

:::definizione{#ciclo-di-carnot titolo="Ciclo di Carnot"}
Il **ciclo di Carnot** è un ciclo reversibile che scambia calore con due soli serbatoi, a temperature $T_1 > T_2$. È formato da quattro trasformazioni quasistatiche:

- $A \to B$: espansione isoterma alla temperatura $T_1$, in cui il fluido assorbe $Q_1 > 0$;
- $B \to C$: espansione adiabatica, in cui la temperatura scende da $T_1$ a $T_2$;
- $C \to D$: compressione isoterma alla temperatura $T_2$, in cui il fluido cede calore, $Q_2 < 0$;
- $D \to A$: compressione adiabatica, in cui la temperatura risale da $T_2$ a $T_1$.

Gli scambi di calore avvengono solo lungo le isoterme, alla stessa temperatura del serbatoio con cui il fluido è in contatto, e per questo il ciclo è reversibile. Percorso in verso opposto, $A \to D \to C \to B \to A$, il ciclo di Carnot è un frigorifero.

::grafico{curve="t<1?(1+(1.5)*(t-0)):(t<2?(2.5+(2.5)*(t-1)):(t<3?(5+(-3)*(t-2)):((2+(-1)*(t-3))))),t<1?8/(1+(1.5)*(t-0)):(t<2?14.74/(2.5+(2.5)*(t-1))^1.6667:(t<3?5.04/(5+(-3)*(t-2)):(8/(2+(-1)*(t-3))^1.6667))),0,4" vettori="1.6,5,1.9,4.21;3.5,1.83,4,1.46;3.8,1.33,3.2,1.57;1.6,3.65,1.4,4.57" punti="1,8,pieno,A;2.5,3.2,pieno,B;5,1.01,pieno,C;2,2.52,pieno,D" etichette="1.95,5.3,T₁;3.3,2.1,T₂" xmin=-0.3 xmax=6 ymin=-0.5 ymax=9 nomi="V,p" titolo="Ciclo di Carnot di un gas perfetto monoatomico: isoterme $AB$ e $CD$, adiabatiche $BC$ e $DA$, più ripide delle isoterme"}

:::

:::richiamo{titolo="Adiabatica reversibile del gas perfetto"}
In una trasformazione adiabatica reversibile di un gas perfetto vale $T V^{\gamma - 1} = \text{costante}$, con $\gamma = \dfrac{c_p}{c_V}$. Si rimanda all'argomento sul primo principio della termodinamica.
:::

::::teorema{#rendimento-di-carnot titolo="Rendimento del ciclo di Carnot"}
Sia un gas perfetto che percorre un ciclo di Carnot tra i serbatoi a temperature $T_1 > T_2$. Allora
$$
\frac{Q_2}{Q_1} = -\frac{T_2}{T_1}
\qquad\text{e}\qquad
\eta_C = 1 - \frac{T_2}{T_1} .
$$
Il rendimento dipende solo dalle temperature dei due serbatoi, espresse in kelvin. Per una macchina di Carnot tra $T_1 = 800\,\mathrm{K}$ e $T_2 = 300\,\mathrm{K}$ si ottiene $\eta_C = 1 - \dfrac{3}{8} = 0{,}625$. La prima relazione si può scrivere $\dfrac{Q_1}{T_1} + \dfrac{Q_2}{T_2} = 0$, e da questa forma nascono la disuguaglianza di Clausius e l'entropia.

:::dimostrazione
Lungo l'isoterma $A \to B$ l'energia interna del gas perfetto non cambia, perché dipende solo dalla temperatura. Quindi, per il primo principio, il calore assorbito è uguale al lavoro fatto dal gas:
$$
Q_1 = L_{AB} = \int_{V_A}^{V_B} \frac{nRT_1}{V}\, dV = nRT_1 \ln\frac{V_B}{V_A} > 0 .
$$
Allo stesso modo lungo l'isoterma $C \to D$ si ha
$$
Q_2 = nRT_2 \ln\frac{V_D}{V_C} = -\,nRT_2 \ln\frac{V_C}{V_D} < 0 .
$$
Le trasformazioni $B \to C$ e $D \to A$ sono adiabatiche reversibili, perciò
$$
\begin{cases}
T_1 V_B^{\gamma - 1} = T_2 V_C^{\gamma - 1} \\[4pt]
T_1 V_A^{\gamma - 1} = T_2 V_D^{\gamma - 1}
\end{cases}
$$
Dividendo membro a membro la prima equazione per la seconda si ottiene $\left(\dfrac{V_B}{V_A}\right)^{\gamma - 1} = \left(\dfrac{V_C}{V_D}\right)^{\gamma - 1}$, quindi $\dfrac{V_B}{V_A} = \dfrac{V_C}{V_D}$. Allora i due logaritmi coincidono e
$$
\frac{Q_2}{Q_1} = -\frac{nRT_2 \ln\dfrac{V_C}{V_D}}{nRT_1 \ln\dfrac{V_B}{V_A}} = -\frac{T_2}{T_1} .
$$
Infine $\eta_C = 1 + \dfrac{Q_2}{Q_1} = 1 - \dfrac{T_2}{T_1}$.
:::
::::

:::osservazione{#efficienza-di-carnot titolo="Frigorifero e pompa di calore di Carnot"}
Il ciclo di Carnot percorso in verso inverso scambia gli stessi calori cambiati di segno, quindi vale ancora $\dfrac{|Q_1|}{Q_2} = \dfrac{T_1}{T_2}$. Dalle definizioni di efficienza segue
$$
\varepsilon_C = \frac{Q_2}{|Q_1| - Q_2} = \frac{T_2}{T_1 - T_2} ,
\qquad
\varepsilon_{pc,C} = \frac{|Q_1|}{|Q_1| - Q_2} = \frac{T_1}{T_1 - T_2} .
$$
Le efficienze crescono quando le due temperature sono vicine. Un frigorifero di Carnot tra $T_2 = 260\,\mathrm{K}$ e $T_1 = 300\,\mathrm{K}$ ha $\varepsilon_C = \dfrac{260}{40} = 6{,}5$; una pompa di calore di Carnot che scalda una casa a $300\,\mathrm{K}$ prelevando calore dall'esterno a $270\,\mathrm{K}$ ha $\varepsilon_{pc,C} = \dfrac{300}{30} = 10$.
:::

## Teorema di Carnot e temperatura termodinamica

::::teorema{#teorema-di-carnot titolo="Teorema di Carnot"}
Siano dati due serbatoi a temperature $T_1 > T_2$. Allora:

- tutte le macchine reversibili che lavorano tra i due serbatoi hanno lo stesso rendimento;
- ogni macchina che lavora tra i due serbatoi ha rendimento minore o uguale a quello di una macchina reversibile.

Poiché il ciclo di Carnot di un gas perfetto è una macchina reversibile, il rendimento comune delle macchine reversibili è $\eta_C = 1 - \dfrac{T_2}{T_1}$, qualunque sia il fluido. Ogni macchina tra $T_1$ e $T_2$ soddisfa quindi $\eta \leq 1 - \dfrac{T_2}{T_1}$, e il teorema fissa il rendimento massimo di un motore tra due temperature assegnate.

:::dimostrazione
Siano $R$ una macchina reversibile e $M$ una macchina qualsiasi tra i due serbatoi. Si fa lavorare $M$ in modo che in un ciclo assorba $Q_1 > 0$ dal serbatoio caldo; produce allora il lavoro $L_M = \eta_M Q_1$. Poiché $R$ è reversibile, la si fa funzionare in verso inverso, come frigorifero, regolata in modo che ceda al serbatoio caldo lo stesso calore $Q_1$; in questo modo $R$ riceve il lavoro $L_R = \eta_R Q_1$ e sottrae al serbatoio freddo il calore $Q_1 - L_R$.

La macchina composta da $M$ e da $R$ non scambia calore con il serbatoio caldo. Con il serbatoio freddo scambia in totale
$$
(Q_1 - L_R) - (Q_1 - L_M) = L_M - L_R ,
$$
calore che viene assorbito, e produce il lavoro netto $L_M - L_R$. Se fosse $L_M - L_R > 0$, la macchina composta trasformerebbe integralmente in lavoro calore preso da un solo serbatoio, contro l'**enunciato di Kelvin-Planck**. Quindi $L_M \leq L_R$, cioè $\eta_M \leq \eta_R$. Se anche $M$ è reversibile, si ripete il ragionamento scambiando i ruoli delle due macchine e si ottiene $\eta_R \leq \eta_M$, perciò $\eta_M = \eta_R$.
:::
::::

:::osservazione{#bilancio-di-una-macchina titolo="Bilancio di una macchina tra due serbatoi"}
Per una macchina qualsiasi tra $T_1$ e $T_2$ con $Q_1 > 0$, il teorema di Carnot dà $1 + \dfrac{Q_2}{Q_1} \leq 1 - \dfrac{T_2}{T_1}$; moltiplicando per $\dfrac{Q_1}{T_2} > 0$ si ottiene
$$
\frac{Q_1}{T_1} + \frac{Q_2}{T_2} \leq 0 ,
$$
con il segno di uguaglianza *solo* per le macchine reversibili. Questa relazione è il criterio pratico per decidere se una macchina dichiarata è possibile. Un motore tra $400\,\mathrm{K}$ e $300\,\mathrm{K}$ che assorbe $5000\,\mathrm{J}$ e produce $1500\,\mathrm{J}$ cederebbe $3500\,\mathrm{J}$, e $\dfrac{5000}{400} - \dfrac{3500}{300} \approx 0{,}83\,\mathrm{J/K} > 0$; quindi un motore con queste prestazioni **non esiste**. Il suo rendimento dichiarato, $0{,}30$, supera infatti $\eta_C = 0{,}25$.
:::

:::definizione{#temperatura-termodinamica titolo="Temperatura termodinamica"}
Per il teorema di Carnot il rapporto $\dfrac{|Q_2|}{Q_1}$ è lo stesso per tutte le macchine reversibili tra due serbatoi, e dipende quindi solo dai serbatoi e da nessuna proprietà del fluido. La **temperatura termodinamica** è la scala definita dalla relazione
$$
\frac{T_2}{T_1} = \frac{|Q_2|}{Q_1} \qquad \text{(macchina reversibile tra } T_1 \text{ e } T_2\text{)} ,
$$
con l'unità fissata assegnando $T = 273{,}16\,\mathrm{K}$ al punto triplo dell'acqua. La scala non dipende da alcuna sostanza termometrica. Il **rendimento del ciclo di Carnot** calcolato per il gas perfetto mostra che il rapporto tra i calori coincide con il rapporto tra le temperature del gas perfetto, perciò le due scale coincidono e il kelvin del termometro a gas è il kelvin termodinamico.
:::

## Disuguaglianza di Clausius

::::teorema{#disuguaglianza-di-clausius titolo="Disuguaglianza di Clausius"}
Sia un sistema che compie un ciclo scambiando i calori $Q_1, Q_2, \dots, Q_n$ con $n$ serbatoi alle temperature $T_1, T_2, \dots, T_n$, dove $Q_i$ è il calore assorbito dal sistema dal serbatoio $i$. Allora
$$
\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0 ,
$$
e il segno di uguaglianza vale se il ciclo è reversibile. Quando gli scambi sono continui, la somma diventa l'integrale lungo il ciclo
$$
\oint \frac{\delta Q}{T} \leq 0 ,
$$
dove $\delta Q$ è il calore infinitesimo assorbito e $T$ è la temperatura del serbatoio che lo fornisce. Il simbolo $\delta Q$ ricorda che il calore dipende dalla trasformazione e non è il differenziale di una funzione dello stato. Per due serbatoi la disuguaglianza è il bilancio $\dfrac{Q_1}{T_1} + \dfrac{Q_2}{T_2} \leq 0$ ottenuto dal teorema di Carnot; da questa disuguaglianza nasce la definizione di entropia.

:::dimostrazione
Si introduce un serbatoio ausiliario a temperatura $T_0$ e, per ogni $i$, una macchina di Carnot $C_i$ tra $T_0$ e $T_i$, regolata in modo che in un ciclo ceda al serbatoio $i$ proprio il calore $Q_i$ che il sistema gli sottrae (se $Q_i < 0$, la macchina $C_i$ sottrae al serbatoio il calore $|Q_i|$). Poiché $C_i$ è reversibile, il calore $Q_{0,i}$ che scambia con il serbatoio ausiliario soddisfa $\dfrac{Q_{0,i}}{T_0} + \dfrac{-Q_i}{T_i} = 0$, cioè
$$
Q_{0,i} = T_0\, \frac{Q_i}{T_i} .
$$
Si considera la macchina composta dal sistema e dalle $n$ macchine di Carnot. Al termine di un ciclo ogni serbatoio $i$ è tornato nel suo stato, e la macchina composta ha scambiato calore solo con il serbatoio ausiliario, assorbendo in totale
$$
Q_0 = \sum_{i=1}^{n} Q_{0,i} = T_0 \sum_{i=1}^{n} \frac{Q_i}{T_i} .
$$
Per il primo principio applicato al ciclo, la macchina composta ha prodotto il lavoro $L = Q_0$. Per l'**enunciato di Kelvin-Planck** non è possibile che $Q_0 > 0$, perché la macchina trasformerebbe integralmente in lavoro calore preso da un solo serbatoio. Quindi $Q_0 \leq 0$, e poiché $T_0 > 0$ si ha $\displaystyle\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0$.

Se il ciclo del sistema è reversibile, lo si percorre in verso opposto insieme alle macchine di Carnot; in questo modo tutti i calori cambiano segno, e lo stesso ragionamento dà $-\displaystyle\sum_{i=1}^{n} \frac{Q_i}{T_i} \leq 0$. Le due disuguaglianze insieme danno l'uguaglianza.
:::
::::

## Entropia

::::teorema{#indipendenza-dal-cammino titolo="Integrale di Clausius sulle trasformazioni reversibili"}
Siano $A$ e $B$ due stati di equilibrio di un sistema. Allora l'integrale
$$
\int_A^B \frac{\delta Q}{T}
$$
calcolato lungo una trasformazione reversibile da $A$ a $B$ ha lo stesso valore per *ogni* trasformazione reversibile che collega i due stati.

Il teorema dice che, sulle trasformazioni reversibili, $\dfrac{\delta Q}{T}$ si comporta come il differenziale di una funzione dello stato, mentre $\delta Q$ da solo dipende dal cammino. In una trasformazione reversibile la temperatura del sistema è uguale a quella del serbatoio con cui scambia calore, quindi $T$ è anche la temperatura del sistema.

:::dimostrazione
Siano $\gamma_1$ e $\gamma_2$ due trasformazioni reversibili da $A$ a $B$. Percorrendo $\gamma_1$ da $A$ a $B$ e poi $\gamma_2$ in verso opposto da $B$ ad $A$ si ottiene un ciclo reversibile. Nella trasformazione inversa ogni calore scambiato cambia segno, quindi la **disuguaglianza di Clausius** con il segno di uguaglianza dà
$$
\int_{\gamma_1} \frac{\delta Q}{T} - \int_{\gamma_2} \frac{\delta Q}{T} = 0 ,
$$
cioè i due integrali sono uguali.
:::
::::

:::definizione{#entropia titolo="Entropia"}
L'**entropia** è la funzione di stato $S$ definita, a meno di una costante additiva, dalla relazione
$$
S(B) - S(A) = \int_A^B \left( \frac{\delta Q}{T} \right)_{rev} ,
$$
dove l'integrale è calcolato lungo una qualsiasi trasformazione reversibile da $A$ a $B$. L'unità di misura è il $\mathrm{J/K}$. Poiché $S$ è una funzione di stato, la variazione $\Delta S$ dipende solo dagli stati iniziale e finale; per una trasformazione irreversibile si calcola quindi lungo una trasformazione reversibile scelta con comodo tra gli stessi stati. In una trasformazione reversibile si ha $dS = \dfrac{\delta Q}{T}$, quindi $\delta Q = T\, dS$; una trasformazione adiabatica reversibile ha $\Delta S = 0$ e si dice **isoentropica**. Per esempio un sistema che assorbe reversibilmente $1200\,\mathrm{J}$ alla temperatura costante di $300\,\mathrm{K}$ ha $\Delta S = \dfrac{1200}{300} = 4{,}0\,\mathrm{J/K}$.
:::

:::osservazione{#diagramma-ts titolo="Il piano TS"}
Lungo una trasformazione reversibile rappresentata nel piano $TS$ si ha $Q = \displaystyle\int_{S_A}^{S_B} T\, dS$, quindi il calore assorbito è l'area sotto la curva, positiva quando l'entropia cresce.

::grafico{f="250+150*(x-1)-25*(x-1)^2" area="250+150*(x-1)-25*(x-1)^2;0;1.5;4" punti="1.5,318.75,pieno,A;4,475,pieno,B" segmenti="1.5,0,1.5,318.75;4,0,4,475" xmin=-0.3 xmax=5 ymin=0 ymax=1000 nomi="S,T" titolo="In una trasformazione reversibile da $A$ a $B$ il calore assorbito è $Q = \displaystyle\int_{S_A}^{S_B} T\, dS$, area sotto la curva nel piano $TS$"}

Per un ciclo reversibile l'area racchiusa è il calore netto assorbito, cioè il lavoro. Il ciclo di Carnot nel piano $TS$ è un rettangolo, perché le isoterme sono segmenti orizzontali e le adiabatiche reversibili segmenti verticali. Il calore assorbito è $Q_1 = T_1 \Delta S$, il lavoro è $(T_1 - T_2)\,\Delta S$, e il loro rapporto è di nuovo $\eta_C = 1 - \dfrac{T_2}{T_1}$.

::grafico{vettori="1,800,4,800,Q₁;4,800,4,300;4,300,1,300,Q₂;1,300,1,800" area="800;300;1;4" etichette="2.3,550,L" xmin=-0.3 xmax=5 ymin=0 ymax=1000 nomi="S,T" titolo="Ciclo di Carnot tra $T_1 = 800\,\mathrm{K}$ e $T_2 = 300\,\mathrm{K}$ nel piano $TS$: l'area del rettangolo è il lavoro $L = (T_1 - T_2)\,\Delta S$"}

:::

::::teorema{#entropia-e-irreversibilita titolo="Entropia nelle trasformazioni irreversibili"}
Sia un sistema che passa dallo stato di equilibrio $A$ allo stato di equilibrio $B$ con una trasformazione qualsiasi, scambiando calore con serbatoi le cui temperature sono indicate con $T$. Allora
$$
S(B) - S(A) \geq \int_A^B \frac{\delta Q}{T} ,
$$
con il segno di uguaglianza se la trasformazione è reversibile. In una trasformazione irreversibile la variazione di entropia supera quindi l'integrale di Clausius; la differenza è l'entropia prodotta dall'irreversibilità.

:::dimostrazione
Sia $\gamma$ la trasformazione da $A$ a $B$ e sia $\rho$ una trasformazione reversibile da $B$ ad $A$. Il ciclo formato da $\gamma$ e $\rho$ soddisfa la **disuguaglianza di Clausius**:
$$
\int_{\gamma} \frac{\delta Q}{T} + \int_{\rho} \frac{\delta Q}{T} \leq 0 .
$$
Poiché $\rho$ è reversibile, per la definizione di entropia $\displaystyle\int_{\rho} \frac{\delta Q}{T} = S(A) - S(B)$. Sostituendo si ottiene $\displaystyle\int_{\gamma} \frac{\delta Q}{T} \leq S(B) - S(A)$, cioè la tesi.
:::
::::

## Entropia del gas perfetto

:::richiamo{titolo="Integrale del reciproco"}
Per $0 < a < b$ vale $\displaystyle\int_a^b \frac{dx}{x} = \ln b - \ln a = \ln\frac{b}{a}$. Si rimanda all'argomento sugli integrali di Analisi 1.
:::

::::teorema{#entropia-del-gas-perfetto titolo="Variazione di entropia del gas perfetto"}
Siano $n$ moli di gas perfetto con calore molare a volume costante $c_V$, che passano dallo stato $(T_A, V_A)$ allo stato $(T_B, V_B)$ con una trasformazione qualsiasi. Allora
$$
\Delta S = n c_V \ln\frac{T_B}{T_A} + nR \ln\frac{V_B}{V_A} = n c_p \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A} .
$$
La formula vale anche per trasformazioni irreversibili, perché $S$ è una funzione di stato e conta solo la coppia di stati. Per esempio $2{,}0$ moli di gas monoatomico, con $c_V = \dfrac{3}{2}R$, scaldate a volume costante da $300\,\mathrm{K}$ a $450\,\mathrm{K}$ hanno $\Delta S = 2{,}0 \cdot \dfrac{3}{2} \cdot 8{,}314 \cdot \ln 1{,}5 \approx 10{,}1\,\mathrm{J/K}$.

:::dimostrazione
Si calcola $\Delta S$ lungo una trasformazione reversibile da $A$ a $B$. In un tratto infinitesimo il primo principio dà $\delta Q = dU + p\, dV$, con $dU = n c_V\, dT$ per il gas perfetto e $p = \dfrac{nRT}{V}$ per l'equazione di stato. Quindi
$$
dS = \frac{\delta Q}{T} = n c_V \frac{dT}{T} + nR \frac{dV}{V} ,
$$
e integrando ciascun termine si ottiene la prima formula. Per la seconda si usa $\dfrac{V_B}{V_A} = \dfrac{T_B}{T_A} \cdot \dfrac{p_A}{p_B}$, che segue dall'equazione di stato, e la **relazione di Mayer** $c_p = c_V + R$:
$$
\begin{aligned}
\Delta S &= n c_V \ln\frac{T_B}{T_A} + nR \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A} \\[6pt]
&= n c_p \ln\frac{T_B}{T_A} - nR \ln\frac{p_B}{p_A} .
\end{aligned}
$$
:::
::::

:::osservazione{#trasformazioni-del-gas-perfetto titolo="Casi particolari"}
Dalla formula generale seguono le variazioni di entropia nelle trasformazioni elementari:

- isoterma: $\Delta S = nR \ln\dfrac{V_B}{V_A} = \dfrac{Q}{T}$, positiva nelle espansioni;
- isocora: $\Delta S = n c_V \ln\dfrac{T_B}{T_A}$;
- isobara: $\Delta S = n c_p \ln\dfrac{T_B}{T_A}$;
- adiabatica reversibile: $\Delta S = 0$, poiché $T V^{\gamma - 1}$ è costante e i due logaritmi si compensano.

A parità di aumento di temperatura l'isobara ha variazione di entropia maggiore dell'isocora, poiché $c_p > c_V$. A pressione costante il gas assorbe più calore, perché ne restituisce una parte come lavoro di espansione.

::grafico{curve="t,300*exp((t-1)/3),1,4.3;t,300*exp((t-1)/5),1,4.3" punti="1,300,pieno,A" etichette="2.3,640,isocora;3.5,420,isobara" xmin=-0.3 xmax=5 ymin=0 ymax=1000 nomi="S,T" titolo="Nel piano $TS$ l'isocora $T = T_A \exp\left(\dfrac{S - S_A}{n c_V}\right)$ è più ripida dell'isobara $T = T_A \exp\left(\dfrac{S - S_A}{n c_p}\right)$ uscente dallo stesso stato $A$"}

:::

:::esempio{titolo="Espansione libera"}
Un gas perfetto è chiuso in metà di un recipiente con pareti rigide e isolanti; l'altra metà è vuota. Quando si rompe il setto il gas occupa tutto il recipiente senza scambiare calore né lavoro, quindi $\Delta U = 0$ e la temperatura finale è uguale a quella iniziale. La trasformazione è irreversibile e ha $Q = 0$, ma la variazione di entropia si calcola lungo un'isoterma reversibile tra gli stessi stati:
$$
\Delta S = nR \ln\frac{V_B}{V_A} = nR \ln 2 .
$$
Per una mole $\Delta S = 8{,}314 \cdot \ln 2 \approx 5{,}76\,\mathrm{J/K} > 0 = \displaystyle\int \frac{\delta Q}{T}$, in accordo con il teorema sull'entropia nelle trasformazioni irreversibili.
:::

## Entropia di corpi e serbatoi

:::teorema{#entropia-di-corpi-e-serbatoi titolo="Entropia di serbatoi, corpi e cambiamenti di stato"}
Valgono le formule seguenti, dove $Q$ è il calore assorbito.

- Un serbatoio a temperatura $T$ che assorbe il calore $Q$ ha $\Delta S = \dfrac{Q}{T}$.
- Un corpo di massa $m$ e calore specifico $c$ costante, scaldato o raffreddato da $T_A$ a $T_B$, ha $\Delta S = m c \ln\dfrac{T_B}{T_A}$.
- Una massa $m$ che cambia stato alla temperatura $T$ con calore latente $\lambda$ ha $\Delta S = \pm\dfrac{m \lambda}{T}$, con il segno positivo per fusione ed evaporazione.

Il serbatoio scambia calore a temperatura costante, e lo scambio si può pensare reversibile per il serbatoio, quindi $\Delta S = \dfrac{Q}{T}$ anche quando il corpo con cui è in contatto ha un'altra temperatura. Per il corpo si immagina di scaldarlo con una successione di serbatoi a temperature via via crescenti, in modo che ogni scambio sia reversibile; allora $\delta Q = m c\, dT$ e $\Delta S = \displaystyle\int_{T_A}^{T_B} \frac{m c\, dT}{T}$. Nel cambiamento di stato la temperatura resta costante, quindi si divide il calore $m\lambda$ per $T$. Per esempio $1{,}0\,\mathrm{kg}$ d'acqua scaldato da $293\,\mathrm{K}$ a $353\,\mathrm{K}$, con $c = 4186\,\mathrm{J/(kg\cdot K)}$, ha $\Delta S = 4186 \ln\dfrac{353}{293} \approx 780\,\mathrm{J/K}$, e $1{,}0\,\mathrm{kg}$ di ghiaccio che fonde a $273\,\mathrm{K}$, con $\lambda = 3{,}33 \cdot 10^5\,\mathrm{J/kg}$, ha $\Delta S \approx 1{,}22 \cdot 10^3\,\mathrm{J/K}$.
:::

## Principio di aumento dell'entropia

::::teorema{#aumento-dell-entropia titolo="Principio di aumento dell'entropia"}
Sia un sistema isolato, cioè che non scambia né calore né lavoro con l'esterno, che passa dallo stato $A$ allo stato $B$. Allora
$$
\Delta S = S(B) - S(A) \geq 0 ,
$$
con il segno di uguaglianza solo se la trasformazione è reversibile. Il sistema formato da un corpo e da tutti i serbatoi e i corpi con cui interagisce si chiama **universo** ed è isolato, perciò in ogni trasformazione reale $\Delta S_{universo} > 0$. Il principio stabilisce il verso dei processi spontanei, poiché esclude ogni processo che diminuirebbe l'entropia di un sistema isolato.

:::dimostrazione
Il sistema è isolato, quindi in ogni tratto della trasformazione $\delta Q = 0$ e l'integrale di Clausius è nullo. Per l'**entropia nelle trasformazioni irreversibili** si ha allora $S(B) - S(A) \geq 0$, con l'uguaglianza solo nel caso reversibile.
:::
::::

:::esempio{titolo="Passaggio di calore tra due serbatoi"}
Un calore $Q = 1000\,\mathrm{J}$ passa per conduzione da un serbatoio a $500\,\mathrm{K}$ a un serbatoio a $250\,\mathrm{K}$. Il serbatoio caldo assorbe $-1000\,\mathrm{J}$ e quello freddo $+1000\,\mathrm{J}$, quindi
$$
\Delta S_{universo} = -\frac{1000}{500} + \frac{1000}{250} = -2{,}0 + 4{,}0 = 2{,}0\,\mathrm{J/K} > 0 .
$$
Il passaggio inverso darebbe $\Delta S_{universo} = -2{,}0\,\mathrm{J/K}$, e il principio lo esclude; si ritrova così l'**enunciato di Clausius**.
:::

:::osservazione{#equilibrio-e-massimo-di-entropia titolo="Equilibrio e massimo dell'entropia"}
Due corpi con capacità termica $C = 50\,\mathrm{J/K}$ alle temperature $400\,\mathrm{K}$ e $200\,\mathrm{K}$ formano un sistema isolato. Se il primo cede al secondo il calore $Q$, le temperature diventano $400 - \dfrac{Q}{C}$ e $200 + \dfrac{Q}{C}$, e l'entropia del sistema varia di
$$
\Delta S(Q) = C \ln\frac{400 - \dfrac{Q}{C}}{400} + C \ln\frac{200 + \dfrac{Q}{C}}{200} .
$$
La funzione cresce finché il corpo caldo è più caldo dell'altro e ha il massimo per $Q = 5\,\mathrm{kJ}$, quando entrambe le temperature valgono $300\,\mathrm{K}$; lì $\Delta S \approx 5{,}9\,\mathrm{J/K}$. Lo stato di equilibrio di un sistema isolato è quindi lo stato di **massima entropia** compatibile con i vincoli.

::grafico{f="50*(log(1-x*20/400)+log(1+x*20/200))" punti="5,5.89,pieno" segmenti="5,0,5,5.89" xmin=-0.5 xmax=10.5 ymin=-0.5 ymax=7 nomi="Q,ΔS" titolo="Variazione di entropia (in $\mathrm{J/K}$) in funzione del calore trasferito $Q$ (in $\mathrm{kJ}$): il massimo corrisponde all'equilibrio termico a $300\,\mathrm{K}$"}

:::

:::osservazione{#lavoro-perso titolo="Entropia e lavoro perso"}
Sia un motore che lavora tra i serbatoi $T_1 > T_2$, assorbe $Q_1$ e produce $L = Q_1 + Q_2$. In un ciclo l'entropia del fluido non cambia, quindi l'entropia dell'universo è la somma di quelle dei serbatoi, $\Delta S_{universo} = -\dfrac{Q_1}{T_1} - \dfrac{Q_2}{T_2}$. Una macchina reversibile che assorbe lo stesso $Q_1$ produrrebbe $L_{rev} = Q_1\left(1 - \dfrac{T_2}{T_1}\right)$, e la differenza vale
$$
L_{rev} - L = -\,Q_2 - \frac{T_2}{T_1}\, Q_1 = T_2\, \Delta S_{universo} .
$$
Il lavoro perso a causa delle irreversibilità è quindi proporzionale all'entropia prodotta. Per esempio un motore tra $500\,\mathrm{K}$ e $300\,\mathrm{K}$ che assorbe $1000\,\mathrm{J}$ e produce $250\,\mathrm{J}$ genera $\Delta S_{universo} = -2{,}0 + 2{,}5 = 0{,}5\,\mathrm{J/K}$ e perde $300 \cdot 0{,}5 = 150\,\mathrm{J}$ rispetto ai $400\,\mathrm{J}$ della macchina reversibile.
:::
