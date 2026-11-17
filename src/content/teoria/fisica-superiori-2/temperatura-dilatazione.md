---
titolo: "Temperatura e dilatazione termica"
sommario: "Equilibrio termico, scale di temperatura, dilatazione lineare, superficiale e volumica, e lettura di un termometro."
---

## Equilibrio termico

:::definizione{#equilibrio titolo="Confrontare lo stato termico"}
Due corpi possono scambiarsi energia quando sono posti a contatto mediante una parete che lascia passare calore. Sono in **equilibrio termico** quando lo scambio netto di calore cessa e le loro temperature coincidono. Se il sistema è isolato verso l'esterno e i due corpi partono da temperature diverse, il calore passa spontaneamente dal corpo a temperatura maggiore a quello a temperatura minore.

Il **principio zero della termodinamica** dice che, se due corpi sono ciascuno in equilibrio termico con uno stesso terzo corpo, sono in equilibrio termico tra loro. Questa proprietà permette di confrontare due oggetti attraverso la misura di un termometro. La lettura ha senso quando lo strumento ha raggiunto l'equilibrio col campione e la sua presenza altera in modo trascurabile la temperatura del campione. Un sensore molto pesante posto in una goccia piccola può raffreddarla apprezzabilmente e leggere la temperatura finale dell'insieme.
:::

:::esempio{titolo="Stabilizzazione della lettura"}
Un sensore inizialmente a $20\,{}^\circ\mathrm C$ viene immerso in una vasca mantenuta a $40\,{}^\circ\mathrm C$. Dopo alcuni secondi legge $35\,{}^\circ\mathrm C$. Il dislivello di temperatura è ancora di $5\,\mathrm K$, quindi il sensore sta ricevendo energia. Se la vasca mantiene la temperatura, la lettura ideale si avvicina a $40\,{}^\circ\mathrm C$.

::grafico{f="40-20*exp(-x/4)" punti="0,20,pieno" xmin=0 xmax=24 ymin=15 ymax=45 nomi="t (s),T (°C)" asintoti="y=40" titolo="Un possibile andamento della lettura. La retta a 40 °C indica la temperatura della vasca."}
:::

:::osservazione
La temperatura descrive lo stato termico e si misura in kelvin. Il calore descrive uno scambio di energia e si misura in joule. Un recipiente a temperatura maggiore può cedere calore a uno a temperatura minore anche quando contiene molta meno materia. Per calcolare quanta energia viene scambiata occorrono altre informazioni, come le masse e le capacità termiche.
:::

## Celsius e kelvin

:::definizione{#scale titolo="La temperatura assoluta"}
Indichiamo con $t_C$ il valore numerico della temperatura sulla scala Celsius, espresso in gradi Celsius, e con $T$ il valore sulla scala assoluta, espresso in kelvin. La conversione tra valori numerici è
$$
T=t_C+273{,}15,\qquad t_C=T-273{,}15.
$$
Il termine $273{,}15$ fissa la differenza tra le due origini. Per esempio, $0\,{}^\circ\mathrm C$ corrisponde a $273{,}15\,\mathrm K$, mentre $0\,\mathrm K$ corrisponde a $-273{,}15\,{}^\circ\mathrm C$. Per scrivere una temperatura assoluta si usa il simbolo $\mathrm K$ senza il segno di grado.
:::

::::teorema{#intervalli titolo="Equivalenza degli intervalli"}
Un aumento di un grado Celsius è un aumento di un kelvin. Per calcolare $\Delta T=T_f-T_i$, si possono quindi sottrarre i due valori sulla stessa scala. Per esempio, il passaggio da $-8\,{}^\circ\mathrm C$ a $12\,{}^\circ\mathrm C$ vale $20\,\mathrm K$.

:::dimostrazione
Sostituendo le espressioni dei valori assoluti si ha
$$
\begin{aligned}
\Delta T&=(t_{C,f}+273{,}15)-(t_{C,i}+273{,}15)\\[6pt]
        &=t_{C,f}-t_{C,i}.
\end{aligned}
$$
I termini costanti si annullano. L'equivalenza riguarda gli intervalli, mentre i valori di una stessa temperatura differiscono di $273{,}15$.
:::
::::

::grafico{f="x+273.15" punti="-20,253.15,pieno;0,273.15,pieno;20,293.15,pieno" xmin=-30 xmax=30 ymin=240 ymax=308 nomi="t_C (°C),T (K)" titolo="I punti segnati sono distanziati di 20 lungo entrambi gli assi. L'intercetta verticale è 273,15 K."}

:::attenzione
Un rapporto di temperature può avere un significato fisico se si usano valori assoluti. Il passaggio da $10\,{}^\circ\mathrm C$ a $20\,{}^\circ\mathrm C$ aumenta la temperatura di $10\,\mathrm K$. Il rapporto fra i due valori assoluti è $\dfrac{293{,}15}{283{,}15}\simeq1{,}035$, quindi la temperatura assoluta aumenta di circa il $3{,}5\%$.
:::

:::esempio{#taratura-termometro titolo="Tarare un sensore con due riferimenti"}
Un sensore restituisce un numero $r$ in divisioni. Fra due temperature di riferimento si assume che la lettura sia descritta dalla relazione affine $r=at_C+b$. Per trovare $a$ e $b$ si attende che il sensore vada in equilibrio in ciascun bagno, quindi si registra la coppia temperatura-lettura.

| Bagno o campione | Temperatura (°C) | Lettura (div.) |
| --- | ---: | ---: |
| Riferimento freddo | 0 | 6 |
| Riferimento caldo | 100 | 86 |
| Campione | da ricavare | 46 |

Il riferimento freddo fissa $b=6$. La differenza fra le letture di riferimento è $86-6=80$ divisioni per $100$ gradi, quindi $a=0{,}80$ divisioni per grado. Per ricavare la temperatura del campione si sottrae prima il termine costante dalla sua lettura e si divide poi per la pendenza.
$$
t_C=\dfrac{46-6}{0{,}80}=50.
$$
Il campione è a $50\,{}^\circ\mathrm C$. Il valore di $r$ è a metà fra $6$ e $86$, quindi il punto corrispondente è a metà fra le due temperature di riferimento. Una terza misura nota, presa all'interno dell'intervallo, permette di verificare se l'ipotesi di andamento affine è adatta allo strumento. In una differenza fra letture si elimina $b$, mentre resta il fattore $a$.
::grafico{f="0.8*x+6" xmin=-7 xmax=108 ymin=0 ymax=95 punti="0,6,pieno;50,46,pieno;100,86,pieno" segmenti="0,46,50,46;50,0,50,46" nomi="t_C (°C),r (div.)" titolo="La lettura 46 si trova a metà fra i due riferimenti e corrisponde a 50 °C"}
:::

## Dilatazione lineare

:::teorema{#lineare titolo="La variazione di lunghezza"}
Consideriamo una barra libera, uniforme e a temperatura uguale in tutti i suoi punti. Indichiamo con $L_0$ la lunghezza iniziale e con $\Delta T$ la variazione di temperatura. Per piccole deformazioni e un coefficiente di dilatazione $\alpha$ circa costante nell'intervallo, la variazione di lunghezza è
$$
\Delta L\simeq\alpha L_0\Delta T,\qquad L\simeq L_0(1+\alpha\Delta T).
$$
Il coefficiente $\alpha$ rappresenta la variazione relativa di lunghezza per kelvin. La sua unità è $\mathrm{K^{-1}}$, poiché $\dfrac{\Delta L}{L_0}$ è priva di unità. Per $\alpha>0$ il raffreddamento dà $\Delta T<0$ e produce una contrazione, ossia $\Delta L<0$. Se le estremità sono bloccate, il vincolo può sviluppare forze interne. La formula determina la variazione che avrebbe la barra libera alla stessa temperatura.
:::

:::esempio{titolo="Ricavare il coefficiente da due misure"}
A $20\,{}^\circ\mathrm C$ una barra misura $1{,}0000\,\mathrm m$. A $70\,{}^\circ\mathrm C$ misura $1{,}0006\,\mathrm m$. Pertanto $\Delta T=50\,\mathrm K$ e $\Delta L=0{,}0006\,\mathrm m$. Dividendo l'allungamento relativo per l'intervallo di temperatura, si trova
$$
\alpha\simeq \frac{0{,}0006\,\mathrm m}{1{,}0000\,\mathrm m\cdot50\,\mathrm K}
=1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}.
$$
Se lo strumento risolve soltanto il millimetro intero, le due lunghezze distano meno di una divisione di scala. Per stimare il coefficiente con precisione si può usare una barra più lunga o uno strumento che risolva variazioni più piccole.

::grafico{f="0.012*x" punti="50,0.6,pieno,A" xmin=-14 xmax=56 ymin=-0.2 ymax=0.9 nomi="ΔT (K),ΔL (mm)" titolo="La pendenza è 0,012 mm per kelvin. Per ottenere il coefficiente si divide la pendenza per la lunghezza iniziale, espressa in millimetri."}
:::

:::esempio{#tratti-temperature titolo="Una barra con due zone termiche"}
Una barra libera è composta da due tratti dello stesso materiale, con $\alpha=2\cdot10^{-5}\,\mathrm{K^{-1}}$. Il primo tratto è lungo $0{,}60\,\mathrm m$ e si scalda uniformemente di $40\,\mathrm K$. Il secondo è lungo $1{,}40\,\mathrm m$ e si scalda di $10\,\mathrm K$. In questo modello si trascura la zona di transizione fra i due tratti. Le lunghezze si sommano in serie, quindi si sommano i rispettivi allungamenti.
$$
\begin{aligned}
\Delta L
&\simeq \alpha\big[(0{,}60\,\mathrm m)(40\,\mathrm K)
                 +(1{,}40\,\mathrm m)(10\,\mathrm K)\big]\\[6pt]
&=0{,}00076\,\mathrm m=0{,}76\,\mathrm{mm}.
\end{aligned}
$$
Il prodotto nella parentesi vale $38\,\mathrm{m\,K}$. Diviso per la lunghezza totale di $2{,}00\,\mathrm m$, dà una variazione media di $19\,\mathrm K$ pesata sulle lunghezze. I due tratti hanno lunghezze diverse, perciò la media semplice fra $40$ e $10\,\mathrm K$ darebbe a entrambi lo stesso peso e sovrastimerebbe l'allungamento.
::grafico{linee="0,40 0.6,40;0.6,10 2,10" segmenti="0.6,0,0.6,40" punti="0,40,pieno;2,10,pieno" xmin=0 xmax=2.2 ymin=0 ymax=47 nomi="x (m),ΔT (K)" etichette="0.06,43,Tratto 1;0.95,14,Tratto 2;0.56,2.5,0,60 m" titolo="Il tratto più caldo è anche quello più corto. La media tiene conto della lunghezza di ciascun tratto"}
:::

:::esempio{#coefficiente-intervallo titolo="Confrontare due intervalli sullo stesso materiale"}
Una barra libera lunga $2{,}00\,\mathrm m$ a $20\,{}^\circ\mathrm C$ si allunga di $0{,}40\,\mathrm{mm}$ fra $20$ e $40\,{}^\circ\mathrm C$. Fra $40$ e $80\,{}^\circ\mathrm C$ aumenta di altri $0{,}96\,\mathrm{mm}$. Riferendo entrambe le variazioni alla stessa lunghezza iniziale, per il primo intervallo la pendenza media è $0{,}020\,\mathrm{mm/K}$ e per il secondo è $0{,}024\,\mathrm{mm/K}$. Dividendo per $2000\,\mathrm{mm}$ si stimano coefficienti medi di $1{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$ e $1{,}2\cdot10^{-5}\,\mathrm{K^{-1}}$.

La somma dei due incrementi dà $1{,}36\,\mathrm{mm}$. Se si prolungasse la prima pendenza per tutti i $60\,\mathrm K$, si otterrebbe $1{,}20\,\mathrm{mm}$. La differenza di $0{,}16\,\mathrm{mm}$ va confrontata con l'incertezza delle misure. Se lo scarto è apprezzabile rispetto a tale incertezza, i dati richiedono pendenze diverse nei due intervalli. Una pendenza media stimata da due punti descrive l'intervallo fra quei punti. Per usarla altrove occorre verificare che il materiale mantenga un andamento simile.
:::

:::osservazione{#variazione-relativa titolo="Dalla variazione relativa alla misura"}
Se due barre libere dello stesso materiale cambiano temperatura nello stesso modo, condividono la stessa variazione relativa $\alpha\Delta T$. Il prodotto con la lunghezza iniziale riporta la frazione alla misura effettiva. Per esempio, una variazione relativa dello $0{,}1\%$ su $0{,}50\,\mathrm m$ dà $0{,}50\,\mathrm{mm}$, mentre su $2{,}00\,\mathrm m$ dà $2{,}00\,\mathrm{mm}$. Il rapporto fra gli allungamenti vale quattro e coincide con il rapporto fra le lunghezze. La percentuale isola la risposta del materiale dalle dimensioni del campione.
:::

## Un esempio di dilatazione

:::esempio{#esempio titolo="Una barra metallica"}
Una barra libera lunga $2{,}00\,\mathrm m$ ha $\alpha=12\cdot10^{-6}\,\mathrm{K^{-1}}$ e viene riscaldata di $50\,\mathrm K$. Poiché la lunghezza iniziale è in metri, dalla moltiplicazione si ottiene una variazione in metri. Per confrontarla con la larghezza di un giunto, la si esprime anche in millimetri.
$$
\begin{aligned}
\Delta L&\simeq(12\cdot10^{-6})\cdot2{,}00\cdot50\,\mathrm m\\[6pt]
        &=0{,}0012\,\mathrm m=1{,}2\,\mathrm{mm},\\[6pt]
L&\simeq2{,}0012\,\mathrm m.
\end{aligned}
$$
Il punto segnato nel grafico ha ascissa $50\,\mathrm K$ e ordinata $1{,}2\,\mathrm{mm}$. Prolungando la retta fino a $\Delta T=-25\,\mathrm K$ si legge una contrazione di $0{,}6\,\mathrm{mm}$. La stima vale finché il materiale resta nello stesso intervallo in cui $\alpha$ è approssimativamente costante.

::grafico{f="0.024*x" punti="50,1.2,pieno; -25,-0.6,pieno" xmin=-40 xmax=65 ymin=-1 ymax=2 nomi="ΔT (K),ΔL (mm)" titolo="Per la barra dell'esempio, lo spostamento relativo all'origine indica allungamento o contrazione."}
:::

:::esempio{titolo="Il confronto con lo spazio libero"}
Se la stessa barra ha davanti a un'estremità un giunto largo $0{,}96\,\mathrm{mm}$ e l'altra estremità rimane ferma, il giunto si chiude quando $\Delta L=0{,}96\,\mathrm{mm}$. La pendenza del grafico è $0{,}024\,\mathrm{mm/K}$, quindi il giunto si chiude per $\Delta T\simeq \dfrac{0{,}96}{0{,}024}\,\mathrm K=40\,\mathrm K$. Oltre questa variazione il corpo incontra un vincolo e il modello di barra libera cessa di valere.
:::

:::esempio{#giunto-due-barre titolo="Un giunto che si restringe dai due lati"}
Due barre collineari sono fissate soltanto alle estremità esterne. Fra le estremità interne rimane un giunto di $1{,}60\,\mathrm{mm}$. La barra sinistra è lunga $1{,}50\,\mathrm m$ e ha $\alpha_s=2{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$. Quella destra è lunga $1{,}00\,\mathrm m$ e ha $\alpha_d=1{,}0\cdot10^{-5}\,\mathrm{K^{-1}}$. Se entrambe si scaldano di $\Delta T$, finché il giunto è aperto i due spostamenti puntano l'uno verso l'altro. La loro somma vale $0{,}040\,\mathrm{mm}$ per kelvin. Si sottrae questa somma dalla larghezza iniziale. Il primo contatto si ha per
$$
\Delta T\simeq\dfrac{1{,}60\,\mathrm{mm}}{0{,}040\,\mathrm{mm/K}}=40\,\mathrm K.
$$
A quella temperatura la barra sinistra avanza di $1{,}20\,\mathrm{mm}$ e quella destra di $0{,}40\,\mathrm{mm}$. Il contatto avviene quindi più vicino al lato destro del varco iniziale. Dopo il contatto il modello descrive solo le tendenze di dilatazione libera. Per trovare le forze occorrono dati sulle barre e sui vincoli.
::grafico{linee="0,1.6 40,0" xmin=0 xmax=45 ymin=0 ymax=2 punti="0,1.6,pieno;40,0,pieno" segmenti="20,0,20,0.8" nomi="ΔT (K),varco (mm)" titolo="Il tratto disegnato termina al primo contatto fra le due estremità"}
:::

## Superfici, volumi e fori

::::teorema{#volume titolo="Dilatazione di un solido isotropo"}
Un solido isotropo si dilata nello stesso rapporto in tutte le direzioni. Posto $\varepsilon=\alpha\Delta T$, ogni lunghezza viene moltiplicata per un fattore circa $1+\varepsilon$. L'area iniziale $A_0$ e il volume iniziale $V_0$ cambiano in prima approssimazione secondo
$$
\Delta A\simeq2\alpha A_0\Delta T,\qquad
\Delta V\simeq3\alpha V_0\Delta T.
$$
Queste formule richiedono $|\varepsilon|\ll1$.

:::dimostrazione
I due lati di un rettangolo sono entrambi moltiplicati per $1+\varepsilon$. L'area relativa varia di $(1+\varepsilon)^2-1=2\varepsilon+\varepsilon^2$. Il prodotto delle tre dimensioni di un parallelepipedo varia invece di $(1+\varepsilon)^3-1=3\varepsilon+3\varepsilon^2+\varepsilon^3$. Per piccole deformazioni i termini quadratici e cubici sono trascurabili rispetto a quelli lineari. I fattori $2$ e $3$ riflettono il numero di direzioni che contribuiscono al prodotto.
:::
::::

::grafico{f="2*x;3*x" xmin=0 xmax=0.006 ymin=0 ymax=0.021 nomi="ε,ΔA/A₀ o ΔV/V₀" legenda="\Delta A/A_0 = 2\varepsilon;\Delta V/V_0 = 3\varepsilon" titolo="Nel modello di piccola deformazione, la variazione relativa di volume cresce più rapidamente di quella di area."}

:::esempio{#foro titolo="L'allargamento di un foro"}
Un foro circolare ha diametro $20\,\mathrm{mm}$ in una piastra isolata di alluminio. Con $\alpha=2{,}4\cdot10^{-5}\,\mathrm{K^{-1}}$ e $\Delta T=50\,\mathrm K$ il diametro cresce di $0{,}024\,\mathrm{mm}$. Tutte le distanze fra punti del bordo vengono moltiplicate per lo stesso rapporto, quindi la distanza fra due punti diametralmente opposti aumenta. Si può immaginare di riempire il foro con un disco dello stesso materiale e applicare al disco il modello di dilatazione libera.
:::

:::osservazione{#direzioni-distinte titolo="Quando le due direzioni cambiano in modo diverso"}
Il fattore $2$ della dilatazione superficiale vale quando le due direzioni hanno la stessa variazione relativa. Se un rettangolo allineato con due direzioni di un cristallo aumenta il primo lato di una frazione $\varepsilon_x$ e il secondo di $\varepsilon_y$, l'area evolve secondo
$$
\dfrac{\Delta A}{A_0}=(1+\varepsilon_x)(1+\varepsilon_y)-1
=\varepsilon_x+\varepsilon_y+\varepsilon_x\varepsilon_y .
$$
Per $\varepsilon_x=0{,}002$ e $\varepsilon_y=0{,}001$ il risultato è $0{,}003002$. Al primo ordine si ottiene $0{,}003$, ossia $0{,}3\%$. La differenza fra i due risultati è il prodotto dei due piccoli allungamenti relativi. Se una direzione fosse vincolata e restasse di lunghezza fissa, il suo contributo sarebbe zero. Perciò occorre usare le deformazioni ammesse dai vincoli e, quando le direzioni sono diverse, considerare ciascun lato separatamente.
:::

## Liquidi e dilatazione apparente

:::osservazione{#apparente titolo="Anche il recipiente si dilata"}
Per un liquido si usa il coefficiente volumico $\beta$. A pressione costante e in un intervallo in cui $\beta$ vale approssimativamente la stessa quantità, il modello è $\Delta V\simeq\beta V_0\Delta T$. Supponiamo che all'inizio il liquido occupi il volume $V_0$ fino alla tacca e che recipiente e liquido subiscano lo stesso intervallo termico. Anche la capacità fino alla tacca cambia. Se il recipiente è libero, la differenza fra il volume del liquido e la capacità fino alla tacca, espressa in volume al primo ordine, è
$$
\Delta V_{\mathrm{app}}\simeq
(\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}})V_0\Delta T.
$$
Le due variazioni vanno sottratte perché il livello di riferimento del recipiente si sposta. Se i coefficienti coincidono, il livello letto rimane lo stesso benché i volumi siano cambiati.
:::

:::esempio{titolo="Un liquido in un recipiente graduato"}
Per $V_0=200\,\mathrm{mL}$, $\Delta T=40\,\mathrm K$, $\beta_{\mathrm{liq}}=7\cdot10^{-4}\,\mathrm{K^{-1}}$ e $\beta_{\mathrm{rec}}=3\cdot10^{-5}\,\mathrm{K^{-1}}$, il liquido si espande di $5{,}6\,\mathrm{mL}$. Il recipiente si espande di $0{,}24\,\mathrm{mL}$ fino al segno originario. La differenza osservata è quindi $5{,}36\,\mathrm{mL}$. Il grafico mostra il valore fisico, la variazione del recipiente e quella apparente come tre rette con pendenze diverse.

::grafico{f="0.14*x;0.006*x;0.134*x" punti="40,5.6,pieno;40,0.24,pieno" segmenti="40,0.24,40,5.6" xmin=0 xmax=48 ymin=-1.05 ymax=7 nomi=",ΔV (mL)" etichette="42,-.85,ΔT (K)" legenda="\mathrm{liquido};\mathrm{recipiente};\mathrm{apparente}" titolo="A 40 K le variazioni sono 5,6 mL per il liquido e 0,24 mL per il recipiente. La curva apparente dà la differenza."}
:::

:::esempio{#trabocco titolo="Quando il liquido raggiunge l'orlo"}
Un recipiente ha capacità iniziale di $102\,\mathrm{mL}$ e contiene $100\,\mathrm{mL}$ di liquido. Dopo un riscaldamento di $40\,\mathrm K$ la capacità cresce di $0{,}40\,\mathrm{mL}$. A quella temperatura il liquido iniziale occuperebbe $103{,}60\,\mathrm{mL}$ se rimanesse tutto nel recipiente. La capacità a caldo è $102{,}40\,\mathrm{mL}$, quindi il volume che trabocca, riferito alla temperatura finale, vale $1{,}20\,\mathrm{mL}$.

Si confrontano direttamente i due volumi a caldo perché all'inizio la capacità fino all'orlo e il volume del liquido sono diversi. Lo stesso conto parte dallo spazio libero iniziale di $2\,\mathrm{mL}$. Per raggiungere l'orlo bisogna occupare quello spazio e altri $0{,}40\,\mathrm{mL}$ prodotti dalla dilatazione del recipiente. Dei $3{,}60\,\mathrm{mL}$ di crescita libera del liquido ne restano $1{,}20\,\mathrm{mL}$ oltre il bordo.
::grafico{f="100+0.09*x;102+0.01*x" xmin=0 xmax=46 ymin=99 ymax=105 punti="25,102.25,pieno;40,103.6,pieno;40,102.4,pieno" segmenti="40,102.4,40,103.6" nomi="ΔT (K),V (mL)" legenda="\text{liquido senza perdite};\text{capacità fino all'orlo}" titolo="Al primo incrocio il liquido raggiunge l'orlo. A 40 K la differenza verticale vale 1,20 mL"}
:::

:::attenzione{#acqua-anomala titolo="L'intervallo tra 0 e 4 °C"}
A pressione atmosferica l'acqua liquida si contrae quando viene riscaldata da $0\,{}^\circ\mathrm C$ a circa $4\,{}^\circ\mathrm C$. Poiché la massa rimane costante, la densità $\rho=\dfrac mV$ aumenta. Sopra $4\,{}^\circ\mathrm C$ la densità torna a diminuire al crescere della temperatura. Un solo coefficiente positivo e costante non può descrivere entrambi gli intervalli.
:::

:::osservazione{#modello-acqua titolo="Scegliere l'intervallo per un coefficiente"}
Per l'acqua liquida a pressione atmosferica, un coefficiente stimato da $1$ a $3\,{}^\circ\mathrm C$ è negativo. Fra $5$ e $8\,{}^\circ\mathrm C$ il coefficiente stimato è positivo. Una misura ai soli estremi di un intervallo che attraversa $4\,{}^\circ\mathrm C$ dà il cambiamento totale, mentre un punto intermedio vicino a $4\,{}^\circ\mathrm C$ permette di riconoscere l'inversione. Nel grafico l'ordinata non ha scala numerica. Le due pendenze mostrano solo come cambia il segno della variazione di volume.
::grafico{assi=0 unicolore=1 curve="t,(t-4)^2/5+1.1,0,8" xmin=-1 xmax=9 ymin=0 ymax=6 vettori="0,0.6,8.7,0.6,;0,0.6,0,5.4," punti="4,1.1,pieno" segmenti="4,.6,4,1.1" etichette="4.1,.34,4 °C;5.35,.33,temperatura;0.17,5.2,volume" titolo="Andamento qualitativo del volume di una massa fissa di acqua liquida a pressione atmosferica"}
:::
