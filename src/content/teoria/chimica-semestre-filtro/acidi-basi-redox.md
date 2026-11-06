---
titolo: "Acidi, basi, tamponi e reazioni di ossidoriduzione"
sommario: "Equilibri acido-base, calcolo del pH, tamponi biologici, bilanciamento redox e potenziali elettrochimici."
---

## Le definizioni di acido e di base

:::definizione{#acidi-basi titolo="Arrhenius e Brønsted-Lowry"}
In acqua, un **acido di Arrhenius** aumenta la concentrazione degli ioni idronio $\mathrm{H_3O^+}$ e una base aumenta quella degli ioni idrossido $\mathrm{OH^-}$. Per esempio, l'acido cloridrico trasferisce un protone all'acqua, mentre l'idrossido di sodio disciolto libera ioni idrossido.

Nella teoria di **Brønsted-Lowry** un acido cede un protone e una base lo acquista. La reazione coinvolge quindi due coppie acido-base coniugate:
$$
\mathrm{HA+B\rightleftharpoons A^-+BH^+}.
$$
$\mathrm{HA}$ e $\mathrm{A^-}$ differiscono per un protone; lo stesso vale per $\mathrm{BH^+}$ e $\mathrm B$. Nella reazione $\mathrm{NH_3+H_2O\rightleftharpoons NH_4^++OH^-}$, l'ammoniaca è la base e l'acqua è l'acido.
:::

:::definizione{#lewis-anfoliti titolo="Lewis e specie anfiprotiche"}
Un **acido di Lewis** accetta una coppia di elettroni per formare un legame; una base di Lewis mette a disposizione la coppia. In $\mathrm{BF_3+NH_3\rightarrow F_3B\!\leftarrow\!NH_3}$, il boro accetta la coppia libera dell'azoto. Questa definizione comprende reazioni senza trasferimento di protoni.

Una specie **anfiprotica** può sia cedere sia acquistare un protone. Lo ione $\mathrm{H_2PO_4^-}$ può diventare $\mathrm{HPO_4^{2-}}$ cedendo un protone, oppure $\mathrm{H_3PO_4}$ acquistandolo. L'acqua presenta entrambe le possibilità.
:::

## Autoprotolisi dell'acqua e pH

:::definizione{#kw-ph titolo="Prodotto ionico dell'acqua e scala del pH"}
Due molecole d'acqua possono scambiarsi un protone:
$$
\mathrm{2H_2O\rightleftharpoons H_3O^++OH^-}.
$$
Il prodotto ionico è $K_w=a_{\mathrm{H_3O^+}}a_{\mathrm{OH^-}}$, dove $a$ indica l'attività, una grandezza adimensionale che descrive la concentrazione efficace. Nelle soluzioni diluite si approssima $a_i$ con $\dfrac{[i]}{c^\circ}$, dove $c^\circ=1\,\mathrm{mol\,L^{-1}}$.

Il **pH** è $-\log_{10}a_{\mathrm{H_3O^+}}$; il pOH si definisce allo stesso modo per $\mathrm{OH^-}$. Quindi
$$
\mathrm{pH+pOH}=pK_w.
$$
A $25\,^\circ\mathrm C$, $K_w\simeq10^{-14}$ e $pK_w\simeq14$. Una soluzione neutra ha uguali attività di idronio e idrossido, perciò il suo pH è $\dfrac{pK_w}{2}$. Il valore $7$ per la neutralità si riferisce a questa temperatura. Una concentrazione di idronio di $10^{-3}\,\mathrm{mol\,L^{-1}}$ dà, nell'approssimazione diluita, $\mathrm{pH}=3$.
:::

:::osservazione{#indicatori titolo="Indicatori acido-base"}
Un indicatore è una coppia coniugata le cui due forme hanno colori diversi. Per $\mathrm{HIn\rightleftharpoons H^++In^-}$, il rapporto tra le forme dipende dal pH e dal $pK_a$ dell'indicatore. Il cambiamento di colore è normalmente distribuito su un intervallo di circa due unità di pH centrato sul $pK_a$. L'indicatore usato in una titolazione deve cambiare colore nel tratto ripido della curva vicino all'equivalenza.
:::

## Acidi e basi forti o deboli

:::definizione{#ka-kb titolo="Costanti di dissociazione e forza acido-base"}
Per un acido monoprotico $\mathrm{HA}$ in acqua si scrive
$$
\mathrm{HA+H_2O\rightleftharpoons H_3O^++A^-},
\qquad K_a=\frac{a_{\mathrm{H_3O^+}}a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}.
$$
Per una base $\mathrm B$, $K_b=\dfrac{a_{\mathrm{BH^+}}a_{\mathrm{OH^-}}}{a_{\mathrm B}}$. Si definiscono $pK_a=-\log_{10}K_a$ e $pK_b=-\log_{10}K_b$. A parità di condizioni, un $K_a$ maggiore corrisponde a una dissociazione acida più estesa. Per una coppia coniugata vale $K_aK_b=K_w$, quindi $pK_a+pK_b=pK_w$.

Un acido forte, come HCl in una soluzione acquosa diluita, reagisce praticamente del tutto con l'acqua. Un acido debole, come l'acido acetico, raggiunge un equilibrio con una frazione ancora indissociata. La forza riguarda l'equilibrio; la concentrazione riguarda quanta sostanza è presente per unità di volume.
:::

:::osservazione{#calcolo-ph titolo="Calcolo del pH e controllo delle approssimazioni"}
Per un acido forte monoprotico di concentrazione analitica $C$ sufficientemente maggiore di $10^{-7}\,\mathrm{mol\,L^{-1}}$, a $25\,^\circ\mathrm C$ si usa $[\mathrm{H_3O^+}]\simeq C$. Per una base forte si conta il numero di idrossidi liberati per formula; per esempio $\mathrm{Ca(OH)_2}$ fornisce due ioni $\mathrm{OH^-}$.

Per un acido debole monoprotico, trascurando l'autoprotolisi e approssimando le attività con le concentrazioni ridotte, si pone $x=[\mathrm{H_3O^+}]$ e si ottiene, usando le concentrazioni in $\mathrm{mol\,L^{-1}}$,
$$
K_a=\frac{x^2}{C-x},
\qquad x=\frac{-K_a+\sqrt{K_a^2+4K_aC}}{2}.
$$
Qui la consueta scrittura numerica sottintende la concentrazione standard. Se $x$ è piccolo rispetto a $C$, si può usare $x\simeq\sqrt{K_aC}$. Per $C=0{,}010$ e $K_a=1{,}8\cdot10^{-5}$, l'equazione dà $x=4{,}15\cdot10^{-4}$ e $\mathrm{pH}=3{,}38$. Per una base debole si applica la stessa equazione a $x=[\mathrm{OH^-}]$, poi si ricava il pH dal pOH.

Se la concentrazione dell'acido forte è confrontabile con quella dell'idronio dell'acqua, l'autoprotolisi va inclusa. Per esempio un acido forte monoprotico a concentrazione $C$ soddisfa $h=C+\dfrac{K_w}{h}$ nel modello ideale, dove $h$ è la concentrazione numerica dell'idronio.
:::

## Acidi poliprotici, neutralizzazione e sali

:::definizione{#poliprotici titolo="Dissociazioni successive e specie anfiprotiche"}
Un **acido poliprotico** può cedere più protoni in stadi distinti. Per un acido diprotico,
$$
\mathrm{H_2A\rightleftharpoons H^++HA^-},\qquad
\mathrm{HA^-\rightleftharpoons H^++A^{2-}},
$$
con costanti $K_{a1}$ e $K_{a2}$. Gli stadi hanno costanti diverse e vanno considerati separatamente. Se $K_{a1}\gg K_{a2}$, in una soluzione del solo acido il primo stadio può dominare il calcolo del pH; la piccola concentrazione prevista per il secondo stadio controlla questa ipotesi. Le basi poliprotiche acquistano invece protoni in più stadi; $\mathrm{CO_3^{2-}}$ può formare $\mathrm{HCO_3^-}$ e poi $\mathrm{H_2CO_3}$.

Per un sale della specie anfiprotica $\mathrm{HA^-}$, quando la concentrazione è abbastanza elevata da rendere trascurabile l'acqua e gli stadi adiacenti sono ben separati, vale
$$
\mathrm{pH}\simeq\frac{pK_{a1}+pK_{a2}}{2}.
$$
Per bicarbonato con $pK_{a1}=6{,}37$ e $pK_{a2}=10{,}33$ si stima quindi $\mathrm{pH}\simeq8{,}35$.
:::

:::osservazione{#neutralizzazione-sali titolo="Neutralizzazione, equivalenza e idrolisi"}
Nella neutralizzazione, $\mathrm{H_3O^++OH^-\rightarrow2H_2O}$. Prima si confrontano le moli reagenti, poi si calcola la concentrazione dell'eventuale eccesso nel volume totale. L'equivalenza corrisponde al rapporto stechiometrico tra acido e base.

I sali liberano ioni che possono reagire con l'acqua. L'acetato, base coniugata di un acido debole, dà $\mathrm{CH_3COO^-+H_2O\rightleftharpoons CH_3COOH+OH^-}$; la sua costante basica è $K_w/K_a$. Lo ione ammonio è invece un acido con $K_a=K_w/K_b(\mathrm{NH_3})$. Perciò una soluzione di acetato di sodio è basica e una di cloruro di ammonio è acida. NaCl è pressoché neutro nel modello diluito perché gli ioni hanno idrolisi trascurabile.

All'equivalenza di un acido debole titolato con una base forte rimane il sale della base coniugata; il pH è quindi basico a $25\,^\circ\mathrm C$. Se entrambi gli ioni del sale reagiscono con l'acqua, l'esito dipende dalle costanti dei due equilibri.
:::

## Tamponi e capacità tamponante

:::definizione{#tamponi titolo="Coppia tampone e Henderson-Hasselbalch"}
Una **soluzione tampone** contiene quantità apprezzabili di un acido debole e della sua base coniugata, oppure di una base debole e del suo acido coniugato. La base coniugata consuma una piccola aggiunta di acido forte; l'acido debole consuma una piccola aggiunta di base forte.

Dalla definizione di $K_a$ si ricava
$$
\mathrm{pH}=pK_a+\log_{10}\frac{a_{\mathrm{A^-}}}{a_{\mathrm{HA}}}
\simeq pK_a+\log_{10}\frac{[\mathrm{A^-}]}{[\mathrm{HA}]}.
$$
La forma con le concentrazioni richiede attività approssimabili e quantità delle due componenti poco modificate dalla dissociazione. Per componenti nella stessa soluzione si può usare il rapporto tra le moli dopo l'eventuale reazione con l'acido o la base aggiunti. Con $0{,}030\,\mathrm{mol}$ di acetato e $0{,}020\,\mathrm{mol}$ di acido acetico, assumendo $pK_a=4{,}76$, si ottiene $\mathrm{pH}=4{,}94$.
:::

:::osservazione{#capacita-tampone titolo="Efficienza del tampone"}
Il rapporto tra base e acido determina il pH, mentre la loro quantità totale determina quanta aggiunta può essere assorbita. La **capacità tamponante** misura le moli di acido o base forte, per litro, necessarie per una variazione unitaria di pH nelle condizioni considerate.

Per una coppia monoprotica chiusa, a concentrazione totale fissata, la capacità dovuta alla coppia è massima vicino a $\mathrm{pH}=pK_a$. L'intervallo $pK_a\pm1$ corrisponde a un rapporto base/acido tra $0{,}1$ e $10$. Due tamponi con identico rapporto ma concentrazioni totali $0{,}10$ e $0{,}010\,\mathrm{mol\,L^{-1}}$ hanno circa lo stesso pH; quello più concentrato sopporta una maggiore aggiunta prima di subire una grande variazione.
:::

## I sistemi tampone nei fluidi biologici

:::osservazione{#tamponi-biologici titolo="Bicarbonato, fosfati e proteine"}
Nel sistema bicarbonato, gli equilibri collegano $\mathrm{CO_2}$ disciolta, $\mathrm{H_2CO_3}$ e $\mathrm{HCO_3^-}$. Il sangue è un sistema aperto, poiché scambia $\mathrm{CO_2}$ con i polmoni e il bilancio di bicarbonato e protoni coinvolge i reni. Un modello a $37\,^\circ\mathrm C$ usa
$$
\mathrm{pH}\simeq6{,}1+\log_{10}
\frac{[\mathrm{HCO_3^-}]}{\alpha p_{\mathrm{CO_2}}},
\qquad \alpha\simeq0{,}030\,\frac{\mathrm{mmol}}{\mathrm{L\,mmHg}}.
$$
La concentrazione di bicarbonato è espressa in $\mathrm{mmol\,L^{-1}}$ e la pressione in $\mathrm{mmHg}$. Il $pK$ apparente comprende l'equilibrio con la $\mathrm{CO_2}$ disciolta. Con $24\,\mathrm{mmol\,L^{-1}}$ e $40\,\mathrm{mmHg}$, il modello restituisce $\mathrm{pH}\simeq7{,}40$.

La coppia fosfato $\mathrm{H_2PO_4^-/HPO_4^{2-}}$ scambia un protone ed è presente soprattutto nei compartimenti intracellulari e nelle urine. Le proteine contengono gruppi ionizzabili, compresi i gruppi delle catene laterali; l'emoglobina contribuisce al tamponamento del sangue. L'effetto tampone è una reazione chimica distinta dai processi fisiologici che ripristinano le quantità delle componenti.

L'acidosi descrive un processo che tende ad abbassare il pH; l'alcalosi descrive un processo che tende ad aumentarlo. La direzione di questi processi si interpreta con gli equilibri e con gli scambi del sistema.
:::

## Solubilità ed equilibrio acido-base

:::osservazione{#solubilita-ph titolo="Protonazione e dissoluzione dei sali"}
La dissoluzione di un sale poco solubile e la protonazione dei suoi anioni sono equilibri accoppiati. Per l'ossalato di calcio,
$$
\mathrm{CaC_2O_4(s)\rightleftharpoons Ca^{2+}+C_2O_4^{2-}},
\qquad K_{ps}=a_{\mathrm{Ca^{2+}}}a_{\mathrm{C_2O_4^{2-}}}.
$$
Aggiungere acido favorisce $\mathrm{C_2O_4^{2-}+H^+\rightleftharpoons HC_2O_4^-}$. Poiché diminuisce l'attività dell'ossalato libero, altra fase solida può dissolversi. Anche i fosfati di calcio sono sensibili alla protonazione del fosfato.

Nel sistema acido urico/urato, diminuire il pH aumenta la frazione di acido urico neutro; la bassa solubilità di questa forma può favorirne la precipitazione. Il comportamento dell'urato di sodio dipende inoltre da temperatura, attività ioniche e composizione della soluzione. Perciò il solo nome del sale non permette di stabilire l'andamento della solubilità al variare del pH. Questi equilibri sono esempi della chimica dei depositi e dei calcoli.
:::

## Ossidazione, riduzione e bilanciamento

:::definizione{#redox titolo="Trasferimento di elettroni e agenti redox"}
L'**ossidazione** corrisponde a una perdita di elettroni e a un aumento del numero di ossidazione; la riduzione corrisponde all'acquisto di elettroni. Il riducente cede elettroni e si ossida; l'ossidante li acquista e si riduce.
$$
\mathrm{Zn\rightarrow Zn^{2+}+2e^-},\qquad
\mathrm{Cu^{2+}+2e^-\rightarrow Cu}.
$$
Nella reazione tra zinco e rame(II), quindi, lo zinco è il riducente e lo ione rame(II) è l'ossidante. Il numero totale di elettroni ceduti coincide con quello acquistato.
:::

:::osservazione{#bilanciamento-redox titolo="Metodo delle semireazioni"}
In ambiente acido si bilanciano gli atomi diversi da idrogeno e ossigeno, poi l'ossigeno con acqua, l'idrogeno con protoni e la carica con elettroni. Si moltiplicano le semireazioni fino a ottenere lo stesso numero di elettroni e si sommano. Per il permanganato e il ferro(II),
$$
\begin{aligned}
\mathrm{MnO_4^-+8H^++5e^-}&\mathrm{\rightarrow Mn^{2+}+4H_2O},\\
\mathrm{5Fe^{2+}}&\mathrm{\rightarrow5Fe^{3+}+5e^-},\\
\mathrm{MnO_4^-+8H^++5Fe^{2+}}&\mathrm{\rightarrow Mn^{2+}+4H_2O+5Fe^{3+}}.
\end{aligned}
$$
La carica totale vale $+17$ da entrambi i lati. In ambiente basico si può completare il bilanciamento acido, poi aggiungere a entrambi i membri tanti idrossidi quanti sono i protoni. I protoni e gli idrossidi diventano acqua, che si semplifica quando compare nei due membri.
:::

## Celle elettrochimiche, energia e potenziale

:::definizione{#celle-potenziali titolo="Anodo, catodo e potenziali standard"}
Una **cella galvanica** realizza una reazione redox spontanea separando le due semireazioni in compartimenti collegati da un circuito esterno e da un contatto ionico. All'anodo avviene l'ossidazione; al catodo avviene la riduzione. In una cella galvanica l'anodo è negativo e il catodo positivo. Gli elettroni scorrono esternamente dall'anodo al catodo, mentre il ponte salino mantiene l'elettroneutralità.

I potenziali tabulati sono scritti come potenziali di riduzione rispetto a un elettrodo di riferimento. Il potenziale standard $E^\circ$ si riferisce ad attività unitarie, gas alla pressione standard e temperatura dichiarata; per un solido puro l'attività è unitaria. Per la reazione completa,
$$
E^\circ_{\mathrm{cella}}=E^\circ_{\mathrm{catodo}}-E^\circ_{\mathrm{anodo}}.
$$
Per $E^\circ(\mathrm{Cu^{2+}/Cu})=0{,}34\,\mathrm V$ ed $E^\circ(\mathrm{Zn^{2+}/Zn})=-0{,}76\,\mathrm V$, si ottiene $1{,}10\,\mathrm V$. Moltiplicare una semireazione per bilanciare gli elettroni lascia invariato il suo potenziale.
:::

:::osservazione{#nernst-gibbs titolo="Equazione di Nernst e lavoro elettrico"}
Nelle condizioni effettive, il potenziale dipende dal quoziente di reazione adimensionale $Q$:
$$
E=E^\circ-\frac{RT}{nF}\ln Q.
$$
$R$ è la costante dei gas, $T$ la temperatura assoluta, $n$ il numero di elettroni trasferiti per reazione e $F\simeq96485\,\mathrm{C\,mol^{-1}}$ la costante di Faraday. A $25\,^\circ\mathrm C$,
$$
E=E^\circ-\frac{0{,}05916\,\mathrm V}{n}\log_{10}Q.
$$
Per $\mathrm{Zn+Cu^{2+}\rightarrow Zn^{2+}+Cu}$, $Q=\dfrac{a_{\mathrm{Zn^{2+}}}}{a_{\mathrm{Cu^{2+}}}}$. Se $Q=100$, il potenziale vale $1{,}041\,\mathrm V$.

La variazione di energia libera per la reazione è $\Delta_rG=-nFE$, e in condizioni standard $\Delta_rG^\circ=-nFE^\circ$. Quindi $E>0$ corrisponde a una reazione spontanea nel verso scritto. Il massimo lavoro elettrico erogabile reversibilmente è $-\Delta_rG$. All'equilibrio $E=0$ e $Q=K$, perciò $\ln K=\dfrac{nFE^\circ}{RT}$. Un potenziale biochimico standard trasformato, indicato spesso con un apice primo, si riferisce a condizioni specificate, per esempio pH fissato a $7$; va distinto dal potenziale standard chimico con attività protonica unitaria.
:::

## Ossigeno, respirazione e specie radicaliche

:::osservazione{#ossigeno-respirazione titolo="Ossigeno come accettore di elettroni"}
Nella respirazione cellulare, l'ossigeno accetta elettroni alla fine della catena di trasporto e viene ridotto ad acqua. La semireazione scritta in ambiente acido è
$$
\mathrm{O_2+4H^++4e^-\rightarrow2H_2O}.
$$
Il bilancio complessivo idealizzato dell'ossidazione del glucosio è $\mathrm{C_6H_{12}O_6+6O_2\rightarrow6CO_2+6H_2O}$. Il carbonio viene ossidato e l'ossigeno viene ridotto. L'energia libera resa disponibile è in parte conservata mediante accoppiamento alla sintesi di ATP; la quota dipende dalle condizioni e dai processi accoppiati.

Il potenziale della coppia ossigeno/acqua dipende anche dal pH. Se si usa $E^\circ=1{,}229\,\mathrm V$ a $25\,^\circ\mathrm C$, attività dell'acqua unitaria e pressione dell'ossigeno pari a quella standard, Nernst fornisce $E=1{,}229-0{,}05916\,\mathrm{pH}$ in volt. A pH $7$ risulta quindi circa $0{,}815\,\mathrm V$.
:::

:::osservazione{#fenton-haber-weiss titolo="Fenton e bilancio di Haber-Weiss"}
La riduzione parziale dell'ossigeno può produrre superossido $\mathrm{O_2^{\bullet-}}$ e perossido di idrogeno $\mathrm{H_2O_2}$. Nel modello radicalico della reazione di Fenton,
$$
\mathrm{Fe^{2+}+H_2O_2\rightarrow Fe^{3+}+OH^-+{}^\bullet OH}.
$$
Il ferro(II) si ossida e il perossido partecipa alla formazione del radicale ossidrile, una specie molto reattiva. Il superossido può ridurre ferro(III) a ferro(II):
$$
\mathrm{Fe^{3+}+O_2^{\bullet-}\rightarrow Fe^{2+}+O_2}.
$$
La somma delle due reazioni dà il bilancio usualmente chiamato **Haber-Weiss**,
$$
\mathrm{O_2^{\bullet-}+H_2O_2\rightarrow O_2+OH^-+{}^\bullet OH}.
$$
Questo bilancio descrive un ciclo mediato dal metallo; la reazione diretta tra superossido e perossido è lenta. La speciazione del ferro e l'ambiente chimico influenzano gli intermedi e la velocità. Il modello spiega perché una trasformazione globalmente possibile richieda anche un percorso cineticamente accessibile.
:::
