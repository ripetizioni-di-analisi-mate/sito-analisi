---
titolo: Temperatura, calore e termodinamica
sommario: Stati e gas ideali, calorimetria, trasferimento di calore, lavoro, trasformazioni reversibili e irreversibili, macchine di Carnot ed entropia.
---

## Sistemi, equilibrio e temperatura

:::definizione{#stato-termico titolo="Sistema e variabili di stato"}
La termodinamica studia gli scambi di energia di un corpo con ciò che lo circonda. Il corpo che si studia, per esempio un gas chiuso in un cilindro, si chiama **sistema**. Tutto il resto è l'**ambiente**. Un sistema è di tre tipi, secondo ciò che scambia con l'ambiente.

- Un sistema **aperto** scambia materia ed energia. Un organismo vivente è un sistema aperto.
- Un sistema **chiuso** scambia energia e non materia. Ne è un esempio un gas in un cilindro chiuso da un pistone.
- Un sistema **isolato** non scambia né materia né energia. Ne è un esempio, in modo approssimato, il contenuto di un thermos.

Una parete che non lascia passare il calore si dice **adiabatica**.

Lo **stato** di un sistema è descritto da poche grandezze misurabili, dette **variabili di stato**: la pressione $p$, il volume $V$, la temperatura $T$ e la quantità di sostanza $n$, misurata in moli. Queste grandezze hanno un valore definito solo se il sistema è in **equilibrio**, cioè se pressione e temperatura sono le stesse in tutti i suoi punti e non cambiano nel tempo.

Una **funzione di stato** è una grandezza il cui valore dipende solo dallo stato in cui il sistema si trova, e non dal modo in cui ci è arrivato. L'energia interna $U$ e l'entropia $S$ sono funzioni di stato. Il calore e il lavoro non lo sono: sono quantità di energia scambiate durante una trasformazione, e il loro valore dipende da come la trasformazione avviene.
:::

:::osservazione{titolo="Scale di temperatura e termometro"}
Due corpi a contatto si scambiano energia finché raggiungono la stessa temperatura. A quel punto sono in **equilibrio termico**. Il **principio zero** della termodinamica afferma che, se due corpi sono ciascuno in equilibrio termico con un terzo corpo, sono in equilibrio termico fra loro. Su questo si basa il termometro, che è il terzo corpo. La temperatura si misura in gradi Celsius oppure in kelvin, l'unità del Sistema Internazionale. La temperatura in kelvin si chiama anche temperatura assoluta. La conversione è:
$$
T\,(\mathrm K)=t\,({}^\circ\mathrm C)+273{,}15.
$$
Una temperatura di $15\,{}^\circ\mathrm C$ corrisponde a $288{,}15\,\mathrm K$. Le due scale hanno gradi della stessa ampiezza, quindi una differenza di temperatura ha lo stesso valore nelle due unità: un aumento di $15\,{}^\circ\mathrm C$ è un aumento di $15\,\mathrm K$. Nelle formule che contengono una differenza $\Delta T$ si usano indifferentemente le due scale. Nelle formule che contengono la temperatura $T$ da sola, come le leggi dei gas, o un rapporto fra temperature, si usano sempre i kelvin.
:::

## Gas ideali e capacità termiche

:::teorema{#gas-ideale titolo="Equazione di stato del gas ideale"}
Un **gas ideale** è un modello in cui le molecole sono punti senza volume, che non si attraggono e interagiscono solo urtandosi. I gas reali si comportano così quando sono poco densi e lontani dalla temperatura a cui diventano liquidi. L'aria a temperatura ambiente è con buona approssimazione un gas ideale. Pressione, volume e temperatura di $n$ moli di gas ideale sono legati dall'**equazione di stato**:
$$
pV=nRT,\qquad R\simeq8{,}314\,\mathrm{J\,mol^{-1}K^{-1}}.
$$
La costante $R$ è la stessa per tutti i gas. Nella formula la pressione è quella assoluta, in pascal, il volume è in metri cubi e la temperatura in kelvin. Una mole di gas a $0\,{}^\circ\mathrm C$ ($273{,}15\,\mathrm K$) e a pressione atmosferica ($1{,}013\cdot10^5\,\mathrm{Pa}$) occupa $V=\dfrac{nRT}{p}=\dfrac{1\cdot8{,}314\cdot273{,}15}{1{,}013\cdot10^5}\simeq0{,}0224\,\mathrm{m^3}=22{,}4\,\mathrm L$.

Se la quantità di gas resta la stessa, fra due stati vale $\dfrac{p_1V_1}{T_1}=\dfrac{p_2V_2}{T_2}$. Ne seguono tre leggi, una per ogni grandezza tenuta costante.

- A temperatura costante la pressione è inversamente proporzionale al volume (**legge di Boyle**). Se il volume si dimezza, la pressione raddoppia.
- A pressione costante il volume è proporzionale alla temperatura assoluta (**prima legge di Gay-Lussac**, o di Charles).
- A volume costante la pressione è proporzionale alla temperatura assoluta (**seconda legge di Gay-Lussac**).
:::

:::definizione{titolo="Energia interna e gradi di libertà"}
L'**energia interna** $U$ di un sistema è la somma delle energie di tutte le sue molecole, cioè dell'energia cinetica del loro moto disordinato e dell'energia potenziale delle loro interazioni. In un gas ideale le molecole non interagiscono, quindi l'energia interna è solo energia cinetica e dipende soltanto dalla temperatura. Se la temperatura passa da $T_i$ a $T_f$, l'energia interna varia di:
$$
\Delta U=nC_V(T_f-T_i)
$$
La grandezza $C_V$ è il **calore specifico molare a volume costante**, cioè l'energia necessaria per aumentare di un kelvin la temperatura di una mole di gas tenuta a volume fisso. Il suo valore dipende dal tipo di molecola. Per un gas **monoatomico**, come l'elio, $C_V=\dfrac32R$. Per un gas **biatomico**, come l'azoto e l'ossigeno, $C_V=\dfrac52R$, perché le molecole oltre a spostarsi ruotano.

Se il gas viene scaldato a pressione costante si espande e compie lavoro sull'ambiente. Serve quindi più energia per ottenere lo stesso aumento di temperatura. Il **calore specifico molare a pressione costante** $C_p$ è perciò maggiore di $C_V$, e per un gas ideale $C_p=C_V+R$ (relazione di Mayer). Il rapporto $\gamma=\dfrac{C_p}{C_V}$ vale $\dfrac53$ per un gas monoatomico e $\dfrac75$ per un gas biatomico.
:::

## Calore e bilanci calorimetrici

:::definizione{#calorimetria titolo="Capacità termica e calore specifico"}
Il **calore** $Q$ è l'energia che passa da un corpo più caldo a uno più freddo per effetto della differenza di temperatura. Si misura in joule. Per convenzione è positivo quando entra nel sistema e negativo quando ne esce. Calore e temperatura sono grandezze diverse: la temperatura descrive lo stato di un corpo, il calore è energia in transito.

Il calore necessario per variare di $\Delta T$ la temperatura di un corpo di massa $m$, senza che cambi stato, è:
$$
Q=mc\Delta T=C\Delta T.
$$
Il **calore specifico** $c$ è l'energia necessaria per aumentare di un kelvin la temperatura di un chilogrammo di sostanza. Si misura in $\mathrm{J\,kg^{-1}K^{-1}}$. L'acqua ha un calore specifico molto alto, $4186\,\mathrm{J\,kg^{-1}K^{-1}}$, quindi si scalda e si raffredda lentamente. La **capacità termica** $C=mc$ è la stessa grandezza riferita all'intero corpo. Per scaldare $2\,\mathrm{kg}$ d'acqua da $20\,{}^\circ\mathrm C$ a $50\,{}^\circ\mathrm C$ servono $Q=2\cdot4186\cdot30\simeq2{,}5\cdot10^5\,\mathrm J$.

Quando più corpi a temperature diverse sono messi a contatto in un recipiente isolato, detto **calorimetro**, il calore ceduto dai corpi caldi è uguale a quello assorbito dai corpi freddi. La somma dei calori scambiati, ciascuno con il proprio segno, è quindi nulla: $\sum_i m_ic_i(T_f-T_i)=0$. Tutti i corpi arrivano alla stessa temperatura finale $T_f$, che è l'incognita. Per un corpo caldo $T_f-T_i$ è negativo e per un corpo freddo è positivo.
:::

:::esempio{titolo="La temperatura finale è una media pesata"}
Si mescolano $0{,}20\,\mathrm{kg}$ d'acqua a $60\,{}^\circ\mathrm C$ e $0{,}30\,\mathrm{kg}$ d'acqua a $20\,{}^\circ\mathrm C$ in un recipiente isolato. La somma dei calori scambiati è nulla, e il calore specifico $c$ è lo stesso per le due masse:
$$
0{,}20c(t_f-60)+0{,}30c(t_f-20)=0,
$$
$$
t_f=\dfrac{0{,}20\cdot60+0{,}30\cdot20}{0{,}50}=36\,{}^\circ\mathrm C.
$$
Si divide per $c$ e si isola $t_f$. La temperatura finale, $36\,{}^\circ\mathrm C$, è più vicina a quella della massa maggiore. Non è la media delle due temperature, che sarebbe $40\,{}^\circ\mathrm C$. Se le due sostanze sono diverse, ogni temperatura va pesata con il prodotto $mc$ del corpo corrispondente.
:::

## Cambiamenti di stato ed evaporazione

:::definizione{#calore-latente titolo="Energia durante la coesistenza delle fasi"}
Una sostanza passa da solido a liquido (fusione) e da liquido a gas (vaporizzazione) assorbendo calore. Durante il passaggio la temperatura resta costante: tutta l'energia assorbita serve a separare le molecole, e non ad aumentarne la velocità. Il ghiaccio che fonde resta a $0\,{}^\circ\mathrm C$ finché è tutto fuso. Il calore necessario per far cambiare stato a una massa $m$ è:
$$
Q=m\ell
$$
La grandezza $\ell$ è il **calore latente**, cioè l'energia necessaria per far cambiare stato a un chilogrammo di sostanza. Per l'acqua il calore latente di fusione è $3{,}34\cdot10^5\,\mathrm{J/kg}$ e quello di vaporizzazione è $2{,}26\cdot10^6\,\mathrm{J/kg}$. Nei passaggi inversi, solidificazione e condensazione, la sostanza cede la stessa quantità di calore.

Per portare del ghiaccio a $-30\,{}^\circ\mathrm C$ fino ad acqua a $40\,{}^\circ\mathrm C$ servono tre quantità di calore, che si sommano.

1. Il calore per scaldare il ghiaccio da $-30\,{}^\circ\mathrm C$ a $0\,{}^\circ\mathrm C$, $mc_{\mathrm{ghiaccio}}\Delta T$.
2. Il calore per fondere il ghiaccio a $0\,{}^\circ\mathrm C$, $m\ell_f$.
3. Il calore per scaldare l'acqua da $0\,{}^\circ\mathrm C$ a $40\,{}^\circ\mathrm C$, $mc_{\mathrm{acqua}}\Delta T$.

Nel grafico della temperatura in funzione del calore fornito, le fasi 1 e 3 sono tratti inclinati e la fase 2 è un tratto orizzontale.

![Curva di riscaldamento per 0,200 kg di ghiaccio da meno 30 gradi a acqua a 40 gradi, con plateau di fusione](/figure/fisica-semestre-filtro/termodinamica/riscaldamento-it.svg)

Quando si mette del ghiaccio in acqua tiepida, prima di scrivere il bilancio si confrontano due energie: quella che l'acqua cede raffreddandosi fino a $0\,{}^\circ\mathrm C$ e quella necessaria per fondere tutto il ghiaccio. Se la prima è maggiore, tutto il ghiaccio fonde e la temperatura finale è superiore a $0\,{}^\circ\mathrm C$. Se è minore, fonde solo una parte del ghiaccio e la miscela resta a $0\,{}^\circ\mathrm C$.
:::

:::osservazione{titolo="Evaporazione e bilancio del corpo"}
L'**evaporazione** è il passaggio da liquido a gas che avviene alla superficie del liquido, a qualunque temperatura. L'**ebollizione** avviene in tutto il liquido, con formazione di bolle, a una temperatura precisa. L'evaporazione sottrae calore al liquido che resta e alla superficie su cui si trova. Il corpo umano si raffredda in questo modo con il sudore. A temperatura corporea il calore latente di vaporizzazione dell'acqua è circa $2{,}4\,\mathrm{kJ/g}$, quindi l'evaporazione di $10\,\mathrm g$ di sudore sottrae al corpo $10\cdot2{,}4=24\,\mathrm{kJ}$. Conta solo il sudore che evapora. Quello che cola non raffredda. Con aria molto umida il sudore evapora lentamente, e per questo motivo il caldo umido si sopporta peggio.
:::

## Trasferimento del calore

:::definizione{#trasmissione-calore titolo="Conduzione, convezione e irraggiamento"}
Il calore si trasmette in tre modi: conduzione, convezione e irraggiamento.

Nella **conduzione** il calore passa attraverso un materiale senza che il materiale si sposti. Le molecole della parte calda, più veloci, urtano le vicine e cedono loro energia. È il modo tipico dei solidi. La potenza $P$ che attraversa una lastra di area $A$ e spessore $L$, con le due facce a temperature $T_h$ e $T_c$, è data dalla **legge di Fourier**:
$$
P=\kappa A\dfrac{T_h-T_c}{L}.
$$
La potenza è il calore che passa in un secondo, in watt, quindi in un tempo $\Delta t$ passa il calore $Q=P\,\Delta t$. La costante $\kappa$ è la **conducibilità termica** del materiale. È alta nei metalli, che sono buoni conduttori, e bassa nell'aria, nel legno e nel grasso, che sono isolanti. Il calore che passa aumenta con l'area e con la differenza di temperatura e diminuisce con lo spessore. Attraverso un vetro di area $1{,}0\,\mathrm{m^2}$ e spessore $5{,}0\,\mathrm{mm}$, con $\kappa=0{,}80\,\mathrm{W\,m^{-1}K^{-1}}$ e una differenza di $10\,\mathrm K$ fra le facce, passano $0{,}80\cdot1{,}0\cdot\dfrac{10}{0{,}0050}=1600\,\mathrm W$.

La legge si scrive anche come $P=\dfrac{T_h-T_c}{R_{\mathrm{th}}}$, dove $R_{\mathrm{th}}=\dfrac{L}{\kappa A}$ è la **resistenza termica** della lastra. Se il calore attraversa più strati uno dopo l'altro, come un muro con un pannello isolante, le resistenze termiche si sommano. La differenza di temperatura maggiore si trova ai capi dello strato con resistenza maggiore, cioè dello strato più isolante.

![Profilo stazionario della temperatura attraverso due strati in serie, con maggiore caduta nello strato più resistente](/figure/fisica-semestre-filtro/termodinamica/conduzione-it.svg)

Nella **convezione** il calore è trasportato da un fluido che si muove. L'aria a contatto con un termosifone si scalda, diventa meno densa e sale, e al suo posto arriva aria fredda. Il movimento è spontaneo, come in questo caso, oppure forzato da una pompa o da un ventilatore. Il sangue trasporta il calore dall'interno del corpo alla pelle per convezione forzata. La potenza scambiata fra una superficie a temperatura $T_s$ e un fluido a temperatura $T_f$ è $P=hA(T_s-T_f)$. Il coefficiente $h$ dipende dal fluido e dalla sua velocità, ed è per questo che il vento raffredda.
:::

:::teorema{titolo="Scambio radiativo netto"}
Nell'**irraggiamento** il calore è trasportato da onde elettromagnetiche, che si propagano anche nel vuoto. È il modo in cui il calore del Sole raggiunge la Terra. Ogni corpo emette radiazione, in misura tanto maggiore quanto più è caldo, e assorbe quella emessa dai corpi che lo circondano. Un corpo di area $A$ a temperatura $T$, in un ambiente a temperatura $T_a$, perde per irraggiamento la potenza netta data dalla **legge di Stefan-Boltzmann**:
$$
P_{\mathrm{net}}=\varepsilon\sigma A(T^4-T_a^4),
$$
Nella formula $\sigma\simeq5{,}67\cdot10^{-8}\,\mathrm{W\,m^{-2}K^{-4}}$ è una costante universale e le temperature sono in kelvin. L'**emissività** $\varepsilon$ è un numero fra 0 e 1 che dipende dalla superficie. Vale quasi 1 per una superficie scura e opaca, e anche per la pelle umana, e quasi 0 per una superficie lucida. Il termine $T^4$ è la radiazione emessa e il termine $T_a^4$ è quella assorbita. Se il corpo è più caldo dell'ambiente la potenza netta è positiva e il corpo perde energia. Se ha la stessa temperatura la potenza netta è nulla.

![Potenza radiativa netta di una superficie di un metro quadrato ed emissività 0,90 in un ambiente a 293,15 kelvin](/figure/fisica-semestre-filtro/termodinamica/irraggiamento-it.svg)

La potenza emessa dipende dalla quarta potenza della temperatura assoluta. A temperatura assoluta doppia è $2^4=16$ volte maggiore. Una persona a riposo, in una stanza, cede calore all'ambiente in tutti i modi insieme: irraggiamento, convezione, conduzione ed evaporazione del sudore. In un bilancio ogni contributo si calcola separatamente.
:::

## Lavoro, percorsi e primo principio

:::teorema{#primo-principio titolo="Convenzione dei segni e bilancio energetico"}
Un sistema scambia energia con l'ambiente in due modi, come calore $Q$ e come lavoro $W$. Il **primo principio della termodinamica** è la conservazione dell'energia: la variazione dell'energia interna è uguale all'energia entrata meno quella uscita. Con la convenzione usata qui, $Q$ è positivo se il calore entra nel sistema e $W$ è positivo se il lavoro è compiuto dal sistema sull'ambiente. Allora:
$$
\Delta U=Q-W.
$$
Un gas che assorbe $500\,\mathrm J$ di calore e compie $200\,\mathrm J$ di lavoro espandendosi aumenta la propria energia interna di $500-200=300\,\mathrm J$. Un gas che viene compresso senza scambiare calore riceve lavoro, quindi $W$ è negativo. Con $Q=0$ e $W=-200\,\mathrm J$ si ha $\Delta U=0-(-200)=+200\,\mathrm J$: il gas si scalda. Alcuni testi usano la convenzione opposta per il lavoro e scrivono $\Delta U=Q+W$, con $W$ positivo se ricevuto dal sistema.

Un gas compie lavoro quando cambia volume. Se si espande spinge il pistone e il lavoro è positivo, se viene compresso il lavoro è negativo. A pressione costante $W=p\,\Delta V$. Se la pressione cambia, il lavoro è l'integrale:
$$
W=\int_{V_i}^{V_f}p_{\mathrm{ext}}\,dV.
$$
Se la trasformazione è lenta, la pressione esterna è in ogni istante uguale a quella del gas. In un grafico con il volume in ascissa e la pressione in ordinata, detto piano $p$-$V$, il lavoro è l'area sotto la curva che rappresenta la trasformazione. Con la pressione in kPa e il volume in litri il prodotto dà direttamente joule, perché $1\,\mathrm{kPa}\cdot1\,\mathrm L=10^3\,\mathrm{Pa}\cdot10^{-3}\,\mathrm{m^3}=1\,\mathrm J$.

![Due percorsi meccanicamente reversibili fra gli stessi stati: espansione a pressione alta o bassa e aree di lavoro differenti](/figure/fisica-semestre-filtro/termodinamica/lavoro-it.svg)

La figura mostra che il lavoro dipende dal percorso. Il gas passa dallo stato A allo stato B, con un aumento di volume di $2\,\mathrm L$, in due modi. Se si espande alla pressione di $300\,\mathrm{kPa}$ compie $300\cdot2=600\,\mathrm J$. Se si espande a $100\,\mathrm{kPa}$ compie $100\cdot2=200\,\mathrm J$. L'energia interna è una funzione di stato, quindi $\Delta U$ è la stessa nei due casi. Per il primo principio, $Q=\Delta U+W$, anche il calore è diverso nei due percorsi, di $400\,\mathrm J$.
:::

## Trasformazioni canoniche e reversibilità

:::definizione{titolo="Quasistatico e reversibile"}
Una trasformazione è **reversibile** se avviene così lentamente che il sistema resta in ogni istante in equilibrio, senza attriti, e si può ripercorrere all'indietro riportando sistema e ambiente esattamente allo stato iniziale. È un caso limite ideale. Le trasformazioni reali sono **irreversibili**: avvengono in un tempo finito, con attriti o con passaggi di calore fra corpi a temperature diverse. Solo una trasformazione reversibile si rappresenta con una curva nel piano $p$-$V$, perché solo in essa pressione e volume sono definiti in ogni istante.

L'**espansione libera** è un esempio di trasformazione irreversibile. Un gas ideale occupa metà di un recipiente isolato, e l'altra metà è vuota. Si toglie la parete di separazione e il gas occupa tutto il recipiente. Il gas non spinge nulla, quindi $W=0$. Il recipiente è isolato, quindi $Q=0$. Per il primo principio $\Delta U=0$, e in un gas ideale ciò significa che la temperatura non cambia. Il gas non torna da solo nella metà iniziale.
:::

:::osservazione{#trasformazioni titolo="Quattro trasformazioni del gas ideale"}
Le trasformazioni più semplici di un gas ideale sono quattro. In ciascuna una grandezza resta costante, oppure non c'è scambio di calore. Il nome indica che cosa resta costante: il volume nell'**isocora**, la pressione nell'**isobara**, la temperatura nell'**isoterma**. Nell'**adiabatica** il calore scambiato è nullo.

| Processo | Vincolo | Bilancio e relazione |
| --- | --- | --- |
| isocoro | volume costante | $W=0$, $Q=\Delta U=nC_V\Delta T$ |
| isobaro meccanicamente reversibile | pressione costante | $W=p\Delta V=nR\Delta T$, $Q=nC_p\Delta T$ |
| isotermo reversibile | temperatura costante | $\Delta U=0$, $W=Q=nRT\ln\dfrac{V_f}{V_i}$ |
| adiabatico | calore nullo | $Q=0$, $\Delta U=-W$ |

La tabella si legge riga per riga con il primo principio.

- Nell'isocora il volume non cambia, quindi il lavoro è nullo e tutto il calore assorbito aumenta l'energia interna.
- Nell'isobara il gas scambia sia lavoro sia calore.
- Nell'isoterma la temperatura non cambia, quindi $\Delta U=0$ e tutto il calore assorbito diventa lavoro. Il logaritmo viene dall'integrale di $p=\dfrac{nRT}{V}$.
- Nell'adiabatica non c'è calore, quindi il lavoro è compiuto a spese dell'energia interna. Un gas che si espande in modo adiabatico si raffredda, e uno che viene compresso si scalda.

Per un'adiabatica reversibile valgono inoltre le relazioni seguenti, in cui compare il rapporto $\gamma=\dfrac{C_p}{C_V}$:
$$
TV^{\gamma-1}=\text{costante},\qquad pV^\gamma=\text{costante}.
$$
Il lavoro in un'adiabatica reversibile è $W=\dfrac{p_iV_i-p_fV_f}{\gamma-1}$. Nel piano $p$-$V$ l'adiabatica scende più ripida dell'isoterma che parte dallo stesso punto. In un'espansione adiabatica, infatti, oltre al volume che aumenta c'è la temperatura che diminuisce, e la pressione cala per entrambi i motivi. Queste formule valgono per le adiabatiche reversibili. Non valgono per l'espansione libera, che è adiabatica e irreversibile.

![Isobara, isoterma e adiabatica reversibile monoatomica passanti per lo stesso stato iniziale](/figure/fisica-semestre-filtro/termodinamica/trasformazioni-it.svg)
:::

## Secondo principio, cicli e macchine

:::teorema{#secondo-principio titolo="Direzione dei processi e macchine cicliche"}
Il primo principio dice che l'energia si conserva. Non dice in quale verso avvengono le trasformazioni. Un caffè caldo in una stanza si raffredda e non si scalda da solo, anche se in entrambi i casi l'energia si conserverebbe. Il **secondo principio della termodinamica** stabilisce il verso. Ha due enunciati equivalenti.

- **Enunciato di Clausius.** Il calore non passa spontaneamente da un corpo freddo a uno caldo. Per farlo passare serve lavoro, ed è ciò che fa un frigorifero.
- **Enunciato di Kelvin-Planck.** Nessuna macchina che lavora in modo ciclico trasforma in lavoro tutto il calore che preleva da una sola sorgente. Una parte del calore viene sempre ceduta a una sorgente più fredda.

Una **macchina termica** è un dispositivo che trasforma calore in lavoro ripetendo un **ciclo**, cioè una serie di trasformazioni che riporta il sistema allo stato iniziale. Un motore a scoppio è una macchina termica. Alla fine di ogni ciclo l'energia interna è tornata al valore iniziale, quindi $\Delta U=0$ e il lavoro compiuto è uguale al calore netto assorbito. Nel piano $p$-$V$ un ciclo è una curva chiusa e il lavoro è l'area racchiusa, positiva se il ciclo è percorso in senso orario.

In ogni ciclo la macchina assorbe il calore $Q_h$ da una sorgente calda, ne trasforma una parte in lavoro $W$ e cede il resto, $Q_c$, a una sorgente fredda. Il **rendimento** $\eta$ è la frazione del calore assorbito che diventa lavoro:
$$
W=Q_h-Q_c,\qquad \eta=\dfrac{W}{Q_h}=1-\dfrac{Q_c}{Q_h}.
$$
Nelle formule $Q_h$ e $Q_c$ sono presi entrambi come numeri positivi. Una macchina che in ogni ciclo assorbe $1000\,\mathrm J$ e ne cede $700\,\mathrm J$ compie un lavoro di $300\,\mathrm J$ e ha rendimento $\dfrac{300}{1000}=0{,}30$, cioè il 30%. Per il secondo principio $Q_c$ non è mai nullo, quindi il rendimento è sempre minore di 1.
:::

:::teorema{titolo="Carnot e prestazioni dei frigoriferi"}
Il **ciclo di Carnot** è il ciclo ideale che dà il rendimento massimo possibile fra due sorgenti a temperature $T_h$ e $T_c$. È formato da quattro trasformazioni reversibili di un gas.

1. Un'espansione isoterma alla temperatura $T_h$, in cui il gas assorbe il calore $Q_h$.
2. Un'espansione adiabatica, in cui il gas si raffredda da $T_h$ a $T_c$.
3. Una compressione isoterma alla temperatura $T_c$, in cui il gas cede il calore $Q_c$.
4. Una compressione adiabatica, in cui il gas si scalda da $T_c$ a $T_h$ e torna allo stato iniziale.

![Ciclo di Carnot di un gas monoatomico con due isoterme a temperature nel rapporto due a uno e due adiabatiche reversibili](/figure/fisica-semestre-filtro/termodinamica/carnot-it.svg)

In questo ciclo i calori scambiati stanno fra loro come le temperature assolute delle sorgenti, $\dfrac{Q_c}{Q_h}=\dfrac{T_c}{T_h}$. Il rendimento è quindi:
$$
\eta_C=1-\dfrac{T_c}{T_h}.
$$
Le temperature sono in kelvin. Il **teorema di Carnot** afferma che nessuna macchina che lavora fra le stesse due temperature ha un rendimento maggiore. Fra una sorgente a $500\,\mathrm K$ e una a $300\,\mathrm K$ il rendimento massimo è $1-\dfrac{300}{500}=0{,}40$. Una macchina reale fra le stesse temperature rende meno, a causa degli attriti e delle altre irreversibilità. Il rendimento massimo aumenta se la differenza fra le due temperature aumenta.

Un **frigorifero** è una macchina termica che funziona al contrario. Riceve il lavoro $W_{\mathrm{in}}$, toglie il calore $Q_c$ alla sorgente fredda, cioè all'interno del frigorifero, e cede il calore $Q_h=Q_c+W_{\mathrm{in}}$ alla sorgente calda, cioè alla stanza. La sua efficacia si misura con il **coefficiente di prestazione**, $\mathrm{COP}_R=\dfrac{Q_c}{W_{\mathrm{in}}}$, che è il calore tolto per ogni joule di lavoro speso. Una **pompa di calore** è la stessa macchina usata per scaldare, e il suo coefficiente è $\mathrm{COP}_H=\dfrac{Q_h}{W_{\mathrm{in}}}=\mathrm{COP}_R+1$. Questi coefficienti sono in genere maggiori di 1, perché la macchina sposta calore che esiste già e non lo produce. Il valore massimo per un frigorifero, raggiunto con un ciclo di Carnot, è $\dfrac{T_c}{T_h-T_c}$.
:::

## Entropia e irreversibilità

:::definizione{#entropia titolo="Variazione di entropia tra due stati"}
L'**entropia** $S$ è la grandezza che permette di esprimere il secondo principio con un numero. È una funzione di stato e si misura in $\mathrm{J\,K^{-1}}$. Quando un sistema a temperatura $T$ assorbe una piccola quantità di calore in modo reversibile, la sua entropia aumenta di quel calore diviso per la temperatura. Per una trasformazione fra due stati la variazione è:
$$
\Delta S=\int_i^f\dfrac{\delta Q_{\mathrm{rev}}}{T}.
$$
L'entropia è una funzione di stato, quindi la sua variazione dipende solo dagli stati iniziale e finale. Per una trasformazione irreversibile la si calcola lungo una trasformazione reversibile qualsiasi fra gli stessi due stati. I casi più frequenti sono quattro.

- **Scambio di calore a temperatura costante.** Un corpo che assorbe il calore $Q$ restando alla temperatura $T$ ha $\Delta S=\dfrac{Q}{T}$. Se cede calore, $Q$ è negativo e l'entropia diminuisce.
- **Cambiamento di stato.** La temperatura è costante, quindi per la fusione $\Delta S=\dfrac{m\ell_f}{T_0}$. Un chilogrammo di ghiaccio che fonde a $273\,\mathrm K$ aumenta la propria entropia di $\dfrac{3{,}34\cdot10^5}{273}\simeq1220\,\mathrm{J\,K^{-1}}$.
- **Riscaldamento di un corpo.** La temperatura cambia durante lo scambio, quindi si integra $\dfrac{mc\,dT}{T}$ e si ottiene $\Delta S=mc\ln\left(\dfrac{T_f}{T_i}\right)$.
- **Gas ideale.** L'entropia cambia sia con la temperatura sia con il volume:
$$
\Delta S=nC_V\ln\dfrac{T_f}{T_i}+nR\ln\dfrac{V_f}{V_i}.
$$
In tutte le formule le temperature sono in kelvin. Nell'espansione libera di un gas ideale la temperatura non cambia e il volume aumenta, quindi $\Delta S=nR\ln\left(\dfrac{V_f}{V_i}\right)>0$. L'entropia del gas aumenta anche se il gas non ha scambiato calore, perché la trasformazione è irreversibile.
:::

:::teorema{titolo="Entropia totale e interpretazione statistica"}
Il secondo principio si enuncia con l'entropia nel modo seguente. In ogni trasformazione l'entropia totale, cioè la somma dell'entropia del sistema e di quella dell'ambiente, non diminuisce:
$$
\Delta S_{\mathrm{tot}}=\Delta S_{\mathrm{sist}}+\Delta S_{\mathrm{amb}}\ge0.
$$
L'entropia totale resta costante nelle trasformazioni reversibili e aumenta in quelle irreversibili, cioè in tutte le trasformazioni reali. L'entropia di una singola parte può diminuire, purché quella del resto aumenti di più. L'acqua che gela in un congelatore perde entropia, e la stanza, che riceve calore dal congelatore, ne acquista di più.

Un esempio mostra il legame con l'enunciato di Clausius. Un calore di $2000\,\mathrm J$ passa da un corpo a $400\,\mathrm K$ a un corpo a $250\,\mathrm K$. Il corpo caldo perde entropia, $\Delta S_h=\dfrac{-2000}{400}=-5\,\mathrm{J\,K^{-1}}$. Il corpo freddo ne acquista, $\Delta S_c=\dfrac{+2000}{250}=+8\,\mathrm{J\,K^{-1}}$. Il totale è $+3\,\mathrm{J\,K^{-1}}$, positivo, quindi il passaggio avviene spontaneamente. Il passaggio opposto, dal corpo freddo a quello caldo, darebbe $-3\,\mathrm{J\,K^{-1}}$ e non avviene da solo.

![Variazioni di entropia dei serbatoi caldo e freddo e aumento totale per 2000 joule trasferiti da 400 a 250 kelvin](/figure/fisica-semestre-filtro/termodinamica/entropia-it.svg)

L'entropia ha anche un significato microscopico. Uno stesso stato del gas, con una data pressione e una data temperatura, corrisponde a moltissime disposizioni diverse delle singole molecole, dette **microstati**. La **formula di Boltzmann** lega l'entropia al numero $\Omega$ di microstati: $S=k_B\ln\Omega$, con $k_B=1{,}38\cdot10^{-23}\,\mathrm{J\,K^{-1}}$. Uno stato con più microstati è più probabile e ha entropia maggiore. Un gas libero di occupare tutto un recipiente ha molti più modi di disporsi di un gas raccolto in una metà, e per questo motivo si espande e non si raccoglie da solo. L'aumento dell'entropia è quindi il passaggio verso gli stati più probabili.
:::
