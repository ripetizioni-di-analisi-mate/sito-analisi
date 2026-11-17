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

::grafico{f="0.012*x" punti="50,0.6,pieno,A" xmin=-10 xmax=65 ymin=-0.2 ymax=0.9 nomi="ΔT (K),ΔL (mm)" titolo="La pendenza è 0,012 mm per kelvin. Per ottenere il coefficiente si divide la pendenza per la lunghezza iniziale, espressa in millimetri."}
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

## Liquidi e dilatazione apparente

:::osservazione{#apparente titolo="Anche il recipiente si dilata"}
Per un liquido si usa il coefficiente volumico $\beta$. A pressione costante e in un intervallo in cui $\beta$ vale approssimativamente la stessa quantità, il modello è $\Delta V\simeq\beta V_0\Delta T$. Se il recipiente è tarato alla temperatura iniziale, il volume corrispondente al suo segno di riferimento varia con la temperatura. Nello stesso intervallo, la variazione del volume del liquido rispetto a quel segno è
$$
\Delta V_{\mathrm{app}}\simeq
(\beta_{\mathrm{liq}}-\beta_{\mathrm{rec}})V_0\Delta T.
$$
Le due variazioni vanno sottratte perché il livello di riferimento del recipiente si sposta. Se i coefficienti coincidono, il livello letto rimane lo stesso benché i volumi siano cambiati.
:::

:::esempio{titolo="Un liquido in un recipiente graduato"}
Per $V_0=200\,\mathrm{mL}$, $\Delta T=40\,\mathrm K$, $\beta_{\mathrm{liq}}=7\cdot10^{-4}\,\mathrm{K^{-1}}$ e $\beta_{\mathrm{rec}}=3\cdot10^{-5}\,\mathrm{K^{-1}}$, il liquido si espande di $5{,}6\,\mathrm{mL}$. Il recipiente si espande di $0{,}24\,\mathrm{mL}$ fino al segno originario. La differenza osservata è quindi $5{,}36\,\mathrm{mL}$. Il grafico mostra il valore fisico, la variazione del recipiente e quella apparente come tre rette con pendenze diverse.

::grafico{f="0.14*x;0.006*x;0.134*x" punti="40,5.6,pieno,L;40,0.24,pieno,R;40,5.36,pieno,A" xmin=0 xmax=48 ymin=0 ymax=7 nomi="ΔT (K),ΔV (mL)" legenda="\mathrm{liquido};\mathrm{recipiente};\mathrm{apparente}" titolo="A 40 K la differenza fra le ordinate L e R coincide con l'ordinata apparente A."}
:::

:::attenzione{#acqua-anomala titolo="L'intervallo tra 0 e 4 °C"}
A pressione atmosferica l'acqua liquida si contrae quando viene riscaldata da $0\,{}^\circ\mathrm C$ a circa $4\,{}^\circ\mathrm C$. Poiché la massa rimane costante, la densità $\rho=\dfrac mV$ aumenta. Sopra $4\,{}^\circ\mathrm C$ la densità torna a diminuire al crescere della temperatura. Un solo coefficiente positivo e costante non può descrivere entrambi gli intervalli.
:::
