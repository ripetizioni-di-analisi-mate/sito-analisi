---
titolo: "Temperatura e dilatazione termica"
sommario: "Equilibrio termico, scale di temperatura, dilatazione lineare, superficiale e volumica, e lettura di un termometro."
---

## Equilibrio termico

:::definizione{#equilibrio titolo="Confrontare lo stato termico"}
La **temperatura** di un corpo è la grandezza che indica quanto il corpo è caldo o freddo, e si misura con il termometro. Il **calore** è l'energia che passa da un corpo a un altro perché i due hanno temperature diverse. Si misura in joule ($\mathrm J$).

Due corpi si scambiano calore quando sono a contatto, oppure quando sono separati da una parete che lascia passare il calore, come una lastra di metallo. Una parete che non lascia passare il calore si chiama **isolante**. Un sistema è **isolato** quando non scambia energia con l'esterno. Se in un sistema isolato due corpi partono da temperature diverse, il calore passa da solo, cioè **spontaneamente**, dal corpo a temperatura maggiore a quello a temperatura minore. I due corpi sono in **equilibrio termico** quando lo scambio netto di calore cessa e le loro temperature coincidono. Fra due corpi separati da una parete isolante il calore non passa anche se le temperature sono diverse, quindi in quel caso l'assenza di scambio non indica temperature uguali.

Il **principio zero della termodinamica** afferma che, se due corpi sono ciascuno in equilibrio termico con uno stesso terzo corpo, allora sono in equilibrio termico tra loro. Nella pratica il terzo corpo è un termometro. Se un termometro indica $36\,{}^\circ\mathrm C$ prima in una tazza e poi in una bottiglia, la tazza e la bottiglia hanno perciò la stessa temperatura, anche senza metterle a contatto.

Il corpo di cui si misura la temperatura si chiama **campione**. La lettura del termometro è la temperatura del campione quando sono vere due condizioni. Il termometro ha raggiunto l'equilibrio con il campione. Inoltre il termometro scambia così poco calore da lasciare quasi invariata la temperatura del campione. Ciò accade se la **capacità termica** del termometro, cioè l'energia che serve per scaldarlo di un grado, è piccola rispetto a quella del campione. Un **sensore**, cioè un termometro elettronico, molto pesante e più freddo, immerso in una goccia piccola, sottrae alla goccia una quantità apprezzabile di calore. Perciò la raffredda e legge la temperatura finale di goccia e sensore insieme.
:::

:::esempio{titolo="Stabilizzazione della lettura"}
Un sensore inizialmente a $20\,{}^\circ\mathrm C$ viene immerso in una vasca mantenuta a $40\,{}^\circ\mathrm C$. Dopo alcuni secondi legge $35\,{}^\circ\mathrm C$. La differenza fra la temperatura della vasca e quella del sensore è ancora di $5$ gradi, cioè di $5\,\mathrm K$ (il kelvin, $\mathrm K$, è l'unità di temperatura del Sistema Internazionale, e un grado Celsius di differenza vale un kelvin). Il sensore è più freddo della vasca, quindi sta ancora ricevendo energia e la sua lettura continua a salire. Se la vasca mantiene la temperatura, la lettura ideale si avvicina sempre più a $40\,{}^\circ\mathrm C$.

Nel grafico la lettura parte da $20\,{}^\circ\mathrm C$, sale sempre più lentamente e si avvicina alla retta dei $40\,{}^\circ\mathrm C$. Il valore della vasca si registra quando la lettura smette di cambiare.

::grafico{f="40-20*exp(-x/4)" punti="0,20,pieno" xmin=0 xmax=24 ymin=15 ymax=45 nomi="t (s),T (°C)" asintoti="y=40" titolo="Un possibile andamento della lettura. La retta a 40 °C indica la temperatura della vasca."}
:::

:::osservazione
La temperatura descrive lo stato termico di un corpo e si misura in kelvin. Il calore descrive uno scambio di energia e si misura in joule. Un piccolo pezzo di metallo caldo cede calore a una pentola d'acqua tiepida anche se contiene molta meno materia, perché il verso dello scambio dipende soltanto dalle temperature.

L'**energia interna** di un corpo è l'energia complessiva delle particelle che lo formano. Dipende dalla temperatura, ma anche dalla massa e dal materiale. Una vasca e una tazza d'acqua a $40\,{}^\circ\mathrm C$ sono in equilibrio termico, eppure la vasca ha un'energia interna molto maggiore, perché contiene molte più particelle. Per calcolare quanta energia viene scambiata occorrono quindi altre informazioni, come le masse e le capacità termiche.
:::

## Celsius e kelvin

:::definizione{#scale titolo="La temperatura assoluta"}
Nella **scala Celsius** lo zero è la temperatura del ghiaccio che fonde e $100\,{}^\circ\mathrm C$ è circa la temperatura dell'acqua che bolle, a pressione atmosferica. Nella **scala assoluta**, o scala Kelvin, l'unità è il **kelvin** ($\mathrm K$) e lo zero è lo **zero assoluto**, cioè la temperatura più bassa possibile. Nessun corpo ha una temperatura inferiore, quindi una temperatura in kelvin non è mai negativa.

Indichiamo con $t_C$ il valore numerico della temperatura sulla scala Celsius, espresso in gradi Celsius, e con $T$ il valore sulla scala assoluta, espresso in kelvin. La lettera $C$ scritta in basso, detta **pedice**, ricorda la scala Celsius. La conversione tra valori numerici è
$$
T=t_C+273{,}15,\qquad t_C=T-273{,}15.
$$
Il termine $273{,}15$ è la distanza fra i due zeri. Per esempio, $0\,{}^\circ\mathrm C$ corrisponde a $273{,}15\,\mathrm K$, mentre $0\,\mathrm K$ corrisponde a $-273{,}15\,{}^\circ\mathrm C$. Per scrivere una temperatura assoluta si usa il simbolo $\mathrm K$ senza il segno di grado, come in $300\,\mathrm K$.
:::

::::teorema{#intervalli titolo="Equivalenza degli intervalli"}
La **variazione di temperatura** è la temperatura finale meno quella iniziale, $\Delta T=T_f-T_i$. La lettera greca $\Delta$ (*delta* maiuscola) indica una variazione, e i pedici $i$ e $f$ stanno per iniziale e finale. Se $\Delta T>0$ il corpo si scalda, se $\Delta T<0$ si raffredda.

Un aumento di un grado Celsius è un aumento di un kelvin. Per calcolare $\Delta T$ si possono quindi sottrarre i due valori in gradi Celsius oppure i due valori in kelvin, purché entrambi siano sulla stessa scala. Per esempio, il passaggio da $-8\,{}^\circ\mathrm C$ a $12\,{}^\circ\mathrm C$ vale $12-(-8)=20\,\mathrm K$.

Nel grafico di $T$ in funzione di $t_C$ i punti segnati distano $20$ in orizzontale e $20$ in verticale. La retta ha quindi **pendenza** $1$ (la pendenza è l'aumento verticale diviso per l'aumento orizzontale) e incontra l'asse verticale a $273{,}15\,\mathrm K$.

:::dimostrazione
Si scrivono le due temperature in kelvin con la formula di conversione e si sottraggono:
$$
\begin{aligned}
\Delta T&=(t_{C,f}+273{,}15)-(t_{C,i}+273{,}15)\\[6pt]
        &=t_{C,f}-t_{C,i}.
\end{aligned}
$$
Il numero $273{,}15$ compare una volta con il segno più e una volta con il segno meno, quindi i termini costanti si annullano. L'equivalenza riguarda perciò gli intervalli, mentre i valori di una stessa temperatura differiscono di $273{,}15$.
:::
::::

::grafico{f="x+273.15" punti="-20,253.15,pieno;0,273.15,pieno;20,293.15,pieno" xmin=-30 xmax=30 ymin=240 ymax=308 nomi="t_C (°C),T (K)" titolo="I punti segnati sono distanziati di 20 lungo entrambi gli assi. L'intercetta verticale è 273,15 K."}

:::attenzione
Un rapporto fra temperature ha significato fisico solo se si usano i valori assoluti. Il passaggio da $10\,{}^\circ\mathrm C$ a $20\,{}^\circ\mathrm C$ aumenta la temperatura di $10\,\mathrm K$. Il rapporto $\dfrac{20}{10}=2$ farebbe pensare a una temperatura raddoppiata. In kelvin le due temperature sono $283{,}15\,\mathrm K$ e $293{,}15\,\mathrm K$, e il rapporto fra i due valori assoluti è $\dfrac{293{,}15}{283{,}15}\simeq1{,}035$ (il simbolo $\simeq$ si legge «circa uguale a»). La temperatura assoluta aumenta quindi di circa il $3{,}5\%$.
:::

:::esempio{#taratura-termometro titolo="Tarare un sensore con due riferimenti"}
**Tarare** uno strumento significa associare a ogni sua lettura il valore vero, usando campioni di cui si conosce la temperatura. Un sensore restituisce un numero $r$ in **divisioni**, cioè in tacche della sua scala. Fra due temperature di riferimento si assume che la lettura sia descritta dalla relazione affine $r=at_C+b$. Una relazione **affine** ha per grafico una retta, in cui $a$ è la pendenza, cioè le divisioni in più per ogni grado, e $b$ è il termine noto, cioè la lettura a $0\,{}^\circ\mathrm C$. Per trovare $a$ e $b$ si attende che il sensore vada in equilibrio in ciascun bagno, quindi si registra la coppia temperatura-lettura.

| Bagno o campione | Temperatura (°C) | Lettura (div.) |
| --- | ---: | ---: |
| Riferimento freddo | 0 | 6 |
| Riferimento caldo | 100 | 86 |
| Campione | da ricavare | 46 |

Il riferimento freddo è a $0\,{}^\circ\mathrm C$. Sostituendo $t_C=0$ nella relazione si ottiene $r=b$, quindi $b=6$. Fra i due riferimenti la lettura sale di $86-6=80$ divisioni mentre la temperatura sale di $100$ gradi, quindi $a=\dfrac{80}{100}=0{,}80$ divisioni per grado. Per ricavare la temperatura del campione si sottrae prima il termine costante dalla sua lettura e si divide poi per la pendenza.
$$
t_C=\dfrac{46-6}{0{,}80}=50.
$$
Il campione è a $50\,{}^\circ\mathrm C$. Il valore di $r$ è a metà fra $6$ e $86$, quindi il punto corrispondente è a metà fra le due temperature di riferimento. Una terza misura a temperatura nota, presa all'interno dell'intervallo, serve a verificare se lo strumento segue davvero una retta.

In una differenza fra letture si elimina $b$, mentre resta il fattore $a$. Perciò una variazione di $\Delta r$ divisioni corrisponde a $\Delta T=\dfrac{\Delta r}{a}$. Per lo stesso motivo un **errore dello zero**, che sposta tutte le letture della stessa quantità, non cambia le differenze. Se un termometro indica sempre $2\,{}^\circ\mathrm C$ in più del vero, le letture $14\,{}^\circ\mathrm C$ e $23\,{}^\circ\mathrm C$ corrispondono comunque a un aumento reale di $9\,\mathrm K$. Per correggere una singola lettura si toglie invece l'errore, quindi la temperatura vera è $14-2=12\,{}^\circ\mathrm C$.
::grafico{f="0.8*x+6" xmin=-7 xmax=108 ymin=0 ymax=95 punti="0,6,pieno;50,46,pieno;100,86,pieno" segmenti="0,46,50,46;50,0,50,46" nomi="t_C (°C),r (div.)" titolo="La lettura 46 si trova a metà fra i due riferimenti e corrisponde a 50 °C"}
:::

## Dilatazione lineare

:::teorema{#lineare titolo="La variazione di lunghezza"}
Quando un corpo si scalda, di solito le sue dimensioni aumentano. Il fenomeno si chiama **dilatazione termica**. Consideriamo una barra **libera**, cioè con le estremità non bloccate, **uniforme**, cioè dello stesso materiale in ogni punto, e alla stessa temperatura in tutti i suoi punti. Indichiamo con $L_0$ la lunghezza iniziale (il pedice $0$ indica il valore iniziale) e con $\Delta T$ la variazione di temperatura. Per piccole deformazioni, cioè quando la barra cambia lunghezza di una piccola frazione, e per un coefficiente di dilatazione $\alpha$ circa costante nell'intervallo, la variazione di lunghezza $\Delta L=L-L_0$ è
$$
\Delta L\simeq\alpha L_0\Delta T,\qquad L\simeq L_0(1+\alpha\Delta T).
$$
La lettera greca $\alpha$ (*alfa*) è il **coefficiente di dilatazione lineare** del materiale. L'allungamento è quindi **direttamente proporzionale** sia a $L_0$ sia a $\Delta T$, cioè raddoppia se raddoppia $L_0$ oppure se raddoppia $\Delta T$.

La **variazione relativa** $\dfrac{\Delta L}{L_0}$ è la variazione divisa per la lunghezza iniziale. Dividendo la formula per $L_0$ si ottiene $\dfrac{\Delta L}{L_0}\simeq\alpha\Delta T$, quindi il coefficiente $\alpha$ rappresenta la variazione relativa di lunghezza per kelvin. La variazione relativa è priva di unità, perché è un rapporto fra due lunghezze. Perciò l'unità di $\alpha$ è $\mathrm{K^{-1}}$, che si legge «kelvin alla meno uno» e significa «per kelvin».

Per $\alpha>0$, che è il caso più comune, il raffreddamento dà $\Delta T<0$ e produce una contrazione, ossia $\Delta L<0$. Alcuni materiali hanno, in certi intervalli di temperatura, $\alpha<0$, e in quegli intervalli un riscaldamento li accorcia. Se le estremità sono bloccate, il **vincolo**, cioè ciò che impedisce il movimento, ostacola la dilatazione e nella barra nascono forze interne. La formula determina allora la variazione che avrebbe la barra libera alla stessa temperatura.
:::

:::esempio{titolo="Ricavare il coefficiente da due misure"}
A $20\,{}^\circ\mathrm C$ una barra misura $1{,}0000\,\mathrm m$. A $70\,{}^\circ\mathrm C$ misura $1{,}0006\,\mathrm m$. Pertanto $\Delta T=70-20=50\,\mathrm K$ e $\Delta L=1{,}0006-1{,}0000=0{,}0006\,\mathrm m$. Dividendo l'allungamento relativo per l'intervallo di temperatura, si trova
$$
\alpha\simeq \frac{0{,}0006\,\mathrm m}{1{,}0000\,\mathrm m\cdot50\,\mathrm K}
=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}.
$$
Nel grafico $\Delta L$ è in millimetri. La retta passa per l'origine e per il punto $A$, che ha coordinate $50\,\mathrm K$ e $0{,}6\,\mathrm{mm}$, quindi la sua pendenza è $\dfrac{0{,}6}{50}=0{,}012\,\mathrm{mm}$ per kelvin. Questa pendenza vale $\alpha L_0$, perciò $\alpha$ si ottiene dividendo la pendenza per la lunghezza iniziale espressa in millimetri, $\dfrac{0{,}012}{1000}=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$.

Se lo strumento risolve soltanto il millimetro intero, cioè ha divisioni da un millimetro, le due lunghezze distano meno di una divisione di scala e lo strumento non le distingue. Per stimare il coefficiente con precisione si può usare una barra più lunga, che si allunga di più, o uno strumento che risolva variazioni più piccole.

::grafico{f="0.012*x" punti="50,0.6,pieno,A" xmin=-14 xmax=56 ymin=-0.2 ymax=0.9 nomi="ΔT (K),ΔL (mm)" titolo="La pendenza è 0,012 mm per kelvin. Per ottenere il coefficiente si divide la pendenza per la lunghezza iniziale, espressa in millimetri."}
:::

:::esempio{#tratti-temperature titolo="Una barra con due zone termiche"}
Una barra libera è composta da due tratti dello stesso materiale, con $\alpha=2\cdot10^{-5}\,\mathrm{K^{-1}}$, posti **in serie**, cioè uno dopo l'altro sulla stessa linea. Il primo tratto è lungo $0{,}60\,\mathrm m$ e si scalda uniformemente di $40\,\mathrm K$. Il secondo è lungo $1{,}40\,\mathrm m$ e si scalda di $10\,\mathrm K$. In questo modello si trascura la zona di transizione fra i due tratti. La lunghezza totale è la somma delle lunghezze dei tratti, quindi l'allungamento totale è la somma dei rispettivi allungamenti. Raccogliendo il fattore comune $\alpha$ si ha
$$
\begin{aligned}
\Delta L
&\simeq \alpha\big[(0{,}60\,\mathrm m)(40\,\mathrm K)
                 +(1{,}40\,\mathrm m)(10\,\mathrm K)\big]\\[6pt]
&=0{,}00076\,\mathrm m=0{,}76\,\mathrm{mm}.
\end{aligned}
$$
La somma $(0{,}60)(40)+(1{,}40)(10)$ vale $24+14=38\,\mathrm{m\,K}$. Divisa per la lunghezza totale di $2{,}00\,\mathrm m$, dà una variazione media di $19\,\mathrm K$ pesata sulle lunghezze, cioè una media in cui ogni tratto conta in proporzione alla sua lunghezza. I due tratti hanno lunghezze diverse, perciò la media semplice fra $40$ e $10\,\mathrm K$, che vale $25\,\mathrm K$, darebbe a entrambi lo stesso peso e sovrastimerebbe l'allungamento, portandolo a $1{,}00\,\mathrm{mm}$.
::grafico{linee="0,40 0.6,40;0.6,10 2,10" segmenti="0.6,0,0.6,40" punti="0,40,pieno;2,10,pieno" xmin=0 xmax=2.2 ymin=0 ymax=47 nomi="x (m),ΔT (K)" etichette="0.06,43,Tratto 1;0.95,14,Tratto 2;0.56,2.5,0,60 m" titolo="Il tratto più caldo è anche quello più corto. La media tiene conto della lunghezza di ciascun tratto"}
:::

:::esempio{#coefficiente-intervallo titolo="Confrontare due intervalli sullo stesso materiale"}
Una barra libera lunga $2{,}00\,\mathrm m$ a $20\,{}^\circ\mathrm C$ si allunga di $0{,}40\,\mathrm{mm}$ fra $20$ e $40\,{}^\circ\mathrm C$. Fra $40$ e $80\,{}^\circ\mathrm C$ aumenta di altri $0{,}96\,\mathrm{mm}$. La **pendenza media** in un intervallo è l'allungamento diviso per l'aumento di temperatura. Riferendo entrambe le variazioni alla stessa lunghezza iniziale, per il primo intervallo la pendenza media è $\dfrac{0{,}40}{20}=0{,}020\,\mathrm{mm/K}$ e per il secondo è $\dfrac{0{,}96}{40}=0{,}024\,\mathrm{mm/K}$. Dividendo per $2000\,\mathrm{mm}$ si stimano coefficienti medi di $1{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$ e $1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$.

La somma dei due incrementi dà $1{,}36\,\mathrm{mm}$. Se si prolungasse la prima pendenza per tutti i $60\,\mathrm K$, si otterrebbe $0{,}020\cdot60=1{,}20\,\mathrm{mm}$. La differenza di $0{,}16\,\mathrm{mm}$ va confrontata con l'**incertezza** delle misure, cioè con l'errore massimo che lo strumento può commettere. Se lo scarto è apprezzabile rispetto a tale incertezza, i dati richiedono pendenze diverse nei due intervalli. Allo stesso modo, se i punti misurati di $\Delta L$ in funzione di $\Delta T$ formano una curva, un solo coefficiente descrive bene soltanto intervalli stretti. Una pendenza media stimata da due punti descrive l'intervallo fra quei punti. Per usarla altrove occorre verificare che il materiale mantenga un andamento simile. Se il sensore dello spostamento ha un errore dello zero, l'allungamento è la lettura finale meno quella iniziale.
:::

:::osservazione{#variazione-relativa titolo="Dalla variazione relativa alla misura"}
Se due barre libere dello stesso materiale cambiano temperatura nello stesso modo, condividono la stessa variazione relativa $\alpha\Delta T$. Il prodotto con la lunghezza iniziale riporta la frazione alla misura effettiva. Per esempio, una variazione relativa dello $0{,}1\%$, cioè $0{,}001$, su $0{,}50\,\mathrm m$ dà $0{,}001\cdot0{,}50\,\mathrm m=0{,}50\,\mathrm{mm}$, mentre su $2{,}00\,\mathrm m$ dà $2{,}00\,\mathrm{mm}$. Il rapporto fra gli allungamenti vale $\dfrac{2{,}00}{0{,}50}=4$ e coincide con il rapporto fra le lunghezze. La percentuale dipende quindi soltanto dal materiale e da $\Delta T$, e non dalle dimensioni del campione.
:::

## Un esempio di dilatazione

:::esempio{#esempio titolo="Una barra metallica"}
Una barra libera lunga $2{,}00\,\mathrm m$ ha $\alpha=12\cdot10^{-6}\,\mathrm{K^{-1}}$ e viene riscaldata di $50\,\mathrm K$. Poiché la lunghezza iniziale è in metri, dalla moltiplicazione si ottiene una variazione in metri. Per confrontarla con la larghezza di un **giunto**, cioè dello spazio lasciato libero fra la barra e un ostacolo, la si esprime anche in millimetri, moltiplicando per $1000$.
$$
\begin{aligned}
\Delta L&\simeq(12\cdot10^{-6})\cdot2{,}00\cdot50\,\mathrm m\\[6pt]
        &=0{,}0012\,\mathrm m=1{,}2\,\mathrm{mm},\\[6pt]
L&\simeq2{,}0012\,\mathrm m.
\end{aligned}
$$
La retta del grafico ha pendenza $\alpha L_0=12\cdot10^{-6}\cdot2000\,\mathrm{mm}=0{,}024\,\mathrm{mm}$ per kelvin. Il punto a destra ha ascissa $50\,\mathrm K$ e ordinata $1{,}2\,\mathrm{mm}$. Prolungando la retta fino a $\Delta T=-25\,\mathrm K$, cioè a un raffreddamento di $25\,\mathrm K$, si legge $\Delta L=-0{,}6\,\mathrm{mm}$, che è una contrazione di $0{,}6\,\mathrm{mm}$. I punti sopra l'asse orizzontale indicano un allungamento, quelli sotto una contrazione. La stima vale finché il materiale resta nello stesso intervallo in cui $\alpha$ è approssimativamente costante.

::grafico{f="0.024*x" punti="50,1.2,pieno; -25,-0.6,pieno" xmin=-40 xmax=65 ymin=-1 ymax=2 nomi="ΔT (K),ΔL (mm)" titolo="Per la barra dell'esempio, lo spostamento relativo all'origine indica allungamento o contrazione."}
:::

:::esempio{titolo="Il confronto con lo spazio libero"}
Se la stessa barra ha davanti a un'estremità un giunto largo $0{,}96\,\mathrm{mm}$ e l'altra estremità rimane ferma, il giunto si chiude quando l'allungamento è uguale alla sua larghezza, cioè quando $\Delta L=0{,}96\,\mathrm{mm}$. La pendenza del grafico è $0{,}024\,\mathrm{mm/K}$. Il giunto si chiude quindi per $\Delta T\simeq \dfrac{0{,}96}{0{,}024}\,\mathrm K=40\,\mathrm K$. Oltre questa variazione la barra tocca l'ostacolo e non è più libera, perciò il modello di barra libera cessa di valere.
:::

:::esempio{#giunto-due-barre titolo="Un giunto che si restringe dai due lati"}
Due barre **collineari**, cioè allineate sulla stessa retta, sono fissate soltanto alle estremità esterne. Fra le estremità interne rimane un giunto di $1{,}60\,\mathrm{mm}$. La barra sinistra è lunga $1{,}50\,\mathrm m$ e ha $\alpha_s=2{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$. Quella destra è lunga $1{,}00\,\mathrm m$ e ha $\alpha_d=1{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$. Se entrambe si scaldano di $\Delta T$, finché il giunto è aperto ciascuna si allunga verso l'altra. Per ogni kelvin la barra sinistra avanza di $2{,}0\cdot10^{-5}\cdot1500\,\mathrm{mm}=0{,}030\,\mathrm{mm}$ e quella destra di $1{,}0\cdot10^{-5}\cdot1000\,\mathrm{mm}=0{,}010\,\mathrm{mm}$. La somma dei due spostamenti vale quindi $0{,}040\,\mathrm{mm}$ per kelvin, ed è di quanto si restringe il giunto per ogni kelvin. Il primo contatto si ha quando il restringimento è uguale alla larghezza iniziale, cioè per
$$
\Delta T\simeq\dfrac{1{,}60\,\mathrm{mm}}{0{,}040\,\mathrm{mm/K}}=40\,\mathrm K.
$$
A quella temperatura la barra sinistra avanza di $0{,}030\cdot40=1{,}20\,\mathrm{mm}$ e quella destra di $0{,}010\cdot40=0{,}40\,\mathrm{mm}$. Il contatto avviene quindi più vicino al lato destro del varco iniziale. Nel grafico la larghezza del giunto scende in linea retta fino a zero, che raggiunge a $40\,\mathrm K$. Dopo il contatto il modello descrive solo le tendenze di dilatazione libera. Per trovare le forze occorrono dati sulle barre e sui vincoli.
::grafico{linee="0,1.6 40,0" xmin=0 xmax=45 ymin=0 ymax=2 punti="0,1.6,pieno;40,0,pieno" segmenti="20,0,20,0.8" nomi="ΔT (K),varco (mm)" titolo="Il tratto disegnato termina al primo contatto fra le due estremità"}
:::

## Superfici, volumi e fori

::::teorema{#volume titolo="Dilatazione di un solido isotropo"}
Un solido è **isotropo** quando si dilata nello stesso rapporto in tutte le direzioni. Posto $\varepsilon=\alpha\Delta T$ (la lettera greca $\varepsilon$ si legge *epsilon*), $\varepsilon$ è la variazione relativa di ogni lunghezza, e ogni lunghezza viene moltiplicata per un fattore circa $1+\varepsilon$. L'area iniziale $A_0$ e il volume iniziale $V_0$ cambiano in prima approssimazione secondo
$$
\Delta A\simeq2\alpha A_0\Delta T,\qquad
\Delta V\simeq3\alpha V_0\Delta T.
$$
Il numero $2\alpha$ si chiama coefficiente di dilatazione superficiale. Il numero $3\alpha$ si chiama **coefficiente di dilatazione volumica** e si indica con $\beta$ (*beta*), quindi per un solido isotropo $\beta\simeq3\alpha$ e $\alpha\simeq\dfrac{\beta}{3}$. Per $\alpha=2{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$ il coefficiente superficiale vale $4{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$ e $\beta\simeq6{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$.

Queste formule richiedono $|\varepsilon|\ll1$, cioè che il **modulo** di $\varepsilon$, il suo valore senza segno, sia molto più piccolo di $1$. Nel grafico delle variazioni relative in funzione di $\varepsilon$ la retta del volume ha pendenza $3$ e sale più in fretta di quella dell'area, che ha pendenza $2$.

:::dimostrazione
Si considera un rettangolo di area $A_0$. I due lati del rettangolo sono entrambi moltiplicati per $1+\varepsilon$, quindi l'area viene moltiplicata per $(1+\varepsilon)^2$. L'area relativa varia perciò di
$$
(1+\varepsilon)^2-1=1+2\varepsilon+\varepsilon^2-1=2\varepsilon+\varepsilon^2.
$$
Il prodotto delle tre dimensioni di un parallelepipedo viene moltiplicato per $(1+\varepsilon)^3=1+3\varepsilon+3\varepsilon^2+\varepsilon^3$, quindi varia invece di $(1+\varepsilon)^3-1=3\varepsilon+3\varepsilon^2+\varepsilon^3$. Per piccole deformazioni i termini quadratici e cubici sono trascurabili rispetto a quelli lineari. Per esempio, con $\varepsilon=0{,}001$ si ha $\varepsilon^2=0{,}000001$. Tenendo solo i termini con $\varepsilon$ alla prima potenza, cioè **al primo ordine**, restano $2\varepsilon$ e $3\varepsilon$. I fattori $2$ e $3$ corrispondono al numero di direzioni che contribuiscono al prodotto, due per l'area e tre per il volume.
:::
::::

::grafico{f="2*x;3*x" xmin=0 xmax=0.006 ymin=0 ymax=0.021 nomi="ε,ΔA/A₀ o ΔV/V₀" legenda="\Delta A/A_0 = 2\varepsilon;\Delta V/V_0 = 3\varepsilon" titolo="Nel modello di piccola deformazione, la variazione relativa di volume cresce più rapidamente di quella di area."}

:::esempio{#foro titolo="L'allargamento di un foro"}
Un foro circolare ha diametro $20\,\mathrm{mm}$ in una piastra isolata di alluminio, cioè libera da vincoli. Con $\alpha=2{,}4\cdot10^{-5}\,\mathrm{K^{-1}}$ e $\Delta T=50\,\mathrm K$ il diametro cresce di $2{,}4\cdot10^{-5}\cdot20\cdot50\,\mathrm{mm}=0{,}024\,\mathrm{mm}$. Tutte le distanze fra punti del bordo vengono moltiplicate per lo stesso rapporto $1+\varepsilon$, quindi la distanza fra due punti diametralmente opposti aumenta e il foro si allarga. Si può immaginare di riempire il foro con un disco dello stesso materiale e applicare al disco il modello di dilatazione libera, perché il bordo del disco coincide con il bordo del foro.

Per lo stesso motivo il foro conserva la forma. Un foro a forma di ellisse resta un'ellisse con le stesse proporzioni. Scaldando la piastra, un perno che entrava a fatica nel foro passa quindi più facilmente.
:::

:::osservazione{#direzioni-distinte titolo="Quando le due direzioni cambiano in modo diverso"}
Il fattore $2$ della dilatazione superficiale vale quando le due direzioni hanno la stessa variazione relativa. In un **cristallo** gli atomi sono disposti in file regolari, e in alcuni cristalli la dilatazione è diversa lungo direzioni diverse. Se un rettangolo allineato con due direzioni di un cristallo aumenta il primo lato di una frazione $\varepsilon_x$ e il secondo di $\varepsilon_y$, l'area evolve secondo
$$
\dfrac{\Delta A}{A_0}=(1+\varepsilon_x)(1+\varepsilon_y)-1
=\varepsilon_x+\varepsilon_y+\varepsilon_x\varepsilon_y .
$$
Per $\varepsilon_x=0{,}002$ e $\varepsilon_y=0{,}001$ il risultato è $1{,}002\cdot1{,}001-1=0{,}003002$. Al primo ordine si ottiene $\varepsilon_x+\varepsilon_y=0{,}003$, ossia $0{,}3\%$. La differenza fra i due risultati è il prodotto dei due piccoli allungamenti relativi, $0{,}002\cdot0{,}001=0{,}000002$.

Se una direzione fosse vincolata e restasse di lunghezza fissa, il suo contributo sarebbe zero. Per esempio, un parallelepipedo che si allunga della frazione $\varepsilon$ in una sola direzione, con le altre due bloccate, cambia volume della frazione $\varepsilon$. Perciò si usano le deformazioni ammesse dai vincoli e, quando le direzioni sono diverse, si considera ciascun lato separatamente.
:::

## Liquidi e dilatazione apparente

:::osservazione{#apparente titolo="Anche il recipiente si dilata"}
Un liquido prende la forma del recipiente, quindi per un liquido si studia solo la variazione di volume e si usa il coefficiente volumico $\beta$. A pressione costante e in un intervallo in cui $\beta$ vale approssimativamente la stessa quantità, il modello è $\Delta V\simeq\beta V_0\Delta T$. La **pressione** è la forza che il liquido subisce per ogni unità di superficie, e qui resta quella atmosferica.

Il recipiente porta una **tacca**, cioè un segno sulla parete, e la **capacità fino alla tacca** è il volume interno sotto quel segno. Supponiamo che all'inizio il liquido occupi il volume $V_0$ fino alla tacca e che recipiente e liquido subiscano lo stesso intervallo termico. Il liquido aumenta di $\beta_{\mathrm{liq}}V_0\Delta T$. Anche il recipiente si dilata, quindi anche la capacità fino alla tacca cambia, di $\beta_{\mathrm{rec}}V_0\Delta T$. I pedici «liq» e «rec» stanno per liquido e recipiente. Se il recipiente è libero, la differenza fra il volume del liquido e la capacità fino alla tacca, espressa in volume al primo ordine, si chiama **dilatazione apparente**:
$$
\Delta V_{\mathrm{app}}\simeq
(\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}})V_0\Delta T.
$$
Le due variazioni vanno sottratte perché il livello di riferimento del recipiente si sposta. La differenza $\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}}$ si chiama coefficiente apparente $\beta_{\mathrm{app}}$. Per un recipiente isotropo di coefficiente lineare $\alpha_{\mathrm{rec}}$ si ha $\beta_{\mathrm{rec}}\simeq3\alpha_{\mathrm{rec}}$.

Se i coefficienti coincidono, il livello letto rimane lo stesso benché i volumi siano cambiati. Se $\beta_{\mathrm{rec}}$ è maggiore di $\beta_{\mathrm{liq}}$, il livello del liquido scende sotto la tacca. In un termometro a liquido $\beta_{\mathrm{liq}}$ è maggiore di $\beta_{\mathrm{rec}}$, quindi la dilatazione apparente è positiva e la colonna sale quando il termometro si scalda.
:::

:::esempio{titolo="Un liquido in un recipiente graduato"}
Per $V_0=200\,\mathrm{mL}$, $\Delta T=40\,\mathrm K$, $\beta_{\mathrm{liq}}=7\cdot10^{-4}\,\mathrm{K^{-1}}$ e $\beta_{\mathrm{rec}}=3\cdot10^{-5}\,\mathrm{K^{-1}}$ si calcolano le due variazioni e la loro differenza.
$$
\begin{aligned}
\Delta V_{\mathrm{liq}}&\simeq(7\cdot10^{-4})\cdot200\cdot40\,\mathrm{mL}=5{,}6\,\mathrm{mL}\\[6pt]
\Delta V_{\mathrm{rec}}&\simeq(3\cdot10^{-5})\cdot200\cdot40\,\mathrm{mL}=0{,}24\,\mathrm{mL}\\[6pt]
\Delta V_{\mathrm{app}}&\simeq(5{,}6-0{,}24)\,\mathrm{mL}=5{,}36\,\mathrm{mL}.
\end{aligned}
$$
Il liquido si espande di $5{,}6\,\mathrm{mL}$. Il recipiente si espande di $0{,}24\,\mathrm{mL}$ fino al segno originario. La differenza osservata è quindi $5{,}36\,\mathrm{mL}$. Il grafico mostra la variazione vera del liquido, la variazione del recipiente e quella apparente come tre rette passanti per l'origine con pendenze diverse. A $40\,\mathrm K$ il segmento verticale fra il punto del liquido e quello del recipiente misura la dilatazione apparente.

::grafico{f="0.14*x;0.006*x;0.134*x" punti="40,5.6,pieno;40,0.24,pieno" segmenti="40,0.24,40,5.6" xmin=0 xmax=48 ymin=-1.05 ymax=7 nomi=",ΔV (mL)" etichette="42,-.85,ΔT (K)" legenda="\mathrm{liquido};\mathrm{recipiente};\mathrm{apparente}" titolo="A 40 K le variazioni sono 5,6 mL per il liquido e 0,24 mL per il recipiente. La curva apparente dà la differenza."}
:::

:::esempio{#trabocco titolo="Quando il liquido raggiunge l'orlo"}
Un recipiente ha capacità iniziale di $102\,\mathrm{mL}$ fino all'**orlo**, cioè fino al bordo superiore, e contiene $100\,\mathrm{mL}$ di liquido. Restano quindi $2\,\mathrm{mL}$ di spazio libero. Dopo un riscaldamento di $40\,\mathrm K$ la capacità cresce di $0{,}40\,\mathrm{mL}$ e diventa $102{,}40\,\mathrm{mL}$. Il liquido crescerebbe di $3{,}60\,\mathrm{mL}$, quindi a quella temperatura occuperebbe $103{,}60\,\mathrm{mL}$ se rimanesse tutto nel recipiente. Il volume che **trabocca**, cioè che esce dal bordo, riferito alla temperatura finale, vale perciò $103{,}60-102{,}40=1{,}20\,\mathrm{mL}$.

Si confrontano direttamente i due volumi a caldo perché all'inizio la capacità fino all'orlo e il volume del liquido sono diversi. Lo stesso conto parte dallo spazio libero iniziale di $2\,\mathrm{mL}$. Per raggiungere l'orlo il liquido deve occupare quello spazio e altri $0{,}40\,\mathrm{mL}$ prodotti dalla dilatazione del recipiente, cioè $2{,}40\,\mathrm{mL}$ in tutto. Dei $3{,}60\,\mathrm{mL}$ di crescita libera del liquido ne restano $3{,}60-2{,}40=1{,}20\,\mathrm{mL}$ oltre il bordo. Le rette del grafico salgono di $0{,}09$ e di $0{,}01\,\mathrm{mL}$ per kelvin, quindi si incontrano dopo $\dfrac{2}{0{,}09-0{,}01}=25\,\mathrm K$, a $102{,}25\,\mathrm{mL}$, e da lì in poi il liquido trabocca.
::grafico{f="100+0.09*x;102+0.01*x" xmin=0 xmax=46 ymin=99 ymax=105 punti="25,102.25,pieno;40,103.6,pieno;40,102.4,pieno" segmenti="40,102.4,40,103.6" nomi="ΔT (K),V (mL)" legenda="\text{liquido senza perdite};\text{capacità fino all'orlo}" titolo="Al primo incrocio il liquido raggiunge l'orlo. A 40 K la differenza verticale vale 1,20 mL"}
:::

:::attenzione{#acqua-anomala titolo="L'intervallo tra 0 e 4 °C"}
A pressione atmosferica l'acqua liquida si contrae quando viene riscaldata da $0\,{}^\circ\mathrm C$ a circa $4\,{}^\circ\mathrm C$, cioè il suo volume diminuisce. La **densità** è la massa divisa per il volume, $\rho=\dfrac mV$ (la lettera greca $\rho$ si legge *rho*). Poiché la massa rimane costante e il volume diminuisce, la densità aumenta. Sopra $4\,{}^\circ\mathrm C$ l'acqua si dilata e la densità torna a diminuire al crescere della temperatura. A circa $4\,{}^\circ\mathrm C$ il volume di una massa fissa d'acqua è quindi minimo e la densità è massima. Un solo coefficiente positivo e costante non può descrivere entrambi gli intervalli.
:::

:::osservazione{#modello-acqua titolo="Scegliere l'intervallo per un coefficiente"}
Per l'acqua liquida a pressione atmosferica il volume diminuisce da $1$ a $3\,{}^\circ\mathrm C$, quindi un coefficiente stimato in quell'intervallo è negativo. Fra $5$ e $8\,{}^\circ\mathrm C$ il volume aumenta e il coefficiente stimato è positivo. Una misura ai soli estremi di un intervallo che attraversa $4\,{}^\circ\mathrm C$ dà il cambiamento totale. Per esempio, il volume a $2\,{}^\circ\mathrm C$ e quello a $6\,{}^\circ\mathrm C$ risultano quasi uguali, anche se fra le due temperature il volume prima scende e poi risale. Un punto intermedio vicino a $4\,{}^\circ\mathrm C$ permette invece di riconoscere l'inversione. Nel grafico l'ordinata non ha scala numerica. La curva scende fino al minimo a $4\,{}^\circ\mathrm C$ e poi risale, e le due pendenze mostrano solo come cambia il segno della variazione di volume.
::grafico{assi=0 unicolore=1 curve="t,(t-4)^2/5+1.1,0,8" xmin=-1 xmax=9 ymin=0 ymax=6 vettori="0,0.6,8.7,0.6,;0,0.6,0,5.4," punti="4,1.1,pieno" segmenti="4,.6,4,1.1" etichette="4.1,.34,4 °C;5.35,.33,temperatura;0.17,5.2,volume" titolo="Andamento qualitativo del volume di una massa fissa di acqua liquida a pressione atmosferica"}
:::
