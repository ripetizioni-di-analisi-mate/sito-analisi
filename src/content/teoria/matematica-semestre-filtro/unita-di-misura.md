---
titolo: "Unità di misura e conversioni"
sommario: "Leggere le unità, convertire misure semplici e composte e controllare le formule di Fisica e Chimica."
---

## Grandezze, misure e unità

:::definizione{#grandezze titolo="Grandezza, valore numerico e unità"}
La **grandezza** è la proprietà che si vuole esprimere con una misura, come la lunghezza di una provetta o la massa di un campione. L’**unità** è il riferimento con cui si confronta quella proprietà. Nella scrittura $\ell=2\,\mathrm{m}$, $\ell$ indica la lunghezza, $2$ è il valore numerico e $\mathrm{m}$ è il simbolo del metro. La stessa lunghezza si può scrivere $200\,\mathrm{cm}$. Un centimetro è un centesimo di metro, quindi servono cento volte più centimetri per rappresentare la stessa lunghezza.

Il **Sistema Internazionale di unità** (SI) fissa riferimenti comuni. Per gli esercizi di questo capitolo useremo il metro per la lunghezza, il chilogrammo per la massa, il secondo per il tempo e la mole per la quantità di sostanza. Da queste unità se ne costruiscono altre. Il metro al secondo esprime una lunghezza divisa per un tempo. Il metro cubo esprime il prodotto di tre lunghezze.
:::

:::esempio{titolo="Somma di segmenti misurati con unità diverse"}
Due tratti consecutivi di un tubo misurano $1{,}8\,\mathrm{m}$ e $45\,\mathrm{cm}$. Si vuole la lunghezza complessiva in metri. Poiché un centimetro vale un centesimo di metro, il secondo tratto misura $0{,}45\,\mathrm{m}$.
$$
\begin{aligned}
45\,\mathrm{cm}&=45\cdot10^{-2}\,\mathrm{m}\\[6pt]
&=0{,}45\,\mathrm{m}\\[6pt]
\ell_{\mathrm{tot}}&=1{,}8\,\mathrm{m}+0{,}45\,\mathrm{m}\\[6pt]
&=2{,}25\,\mathrm{m}.
\end{aligned}
$$
La somma si può eseguire anche in centimetri. Il primo tratto misura $180\,\mathrm{cm}$, quindi il totale è $225\,\mathrm{cm}$. I due risultati sono equivalenti. La possibilità di passare da una scrittura all’altra permette di verificare la conversione.
:::

:::osservazione{titolo="Scelta dell’unità nel calcolo"}
Prima di impostare un problema si individua l’unità richiesta per il risultato. Per una distanza percorsa a velocità espressa in metri al secondo, usare il tempo in secondi consente di ottenere direttamente metri. In un calcolo di concentrazione in moli al litro conviene invece esprimere il volume in litri. In ciascun caso l’unità del risultato deriva dalle operazioni che si compiono sulle unità dei dati.

La notazione distingue maiuscole e minuscole. Il simbolo $\mathrm{m}$ indica il metro quando compare come unità e il prefisso milli quando precede un’unità come in $\mathrm{mL}$. Il simbolo $\mathrm{L}$ indica il litro. In una formula, la lettera corsiva $m$ può invece rappresentare la massa. Il contesto e la scrittura in tondo distinguono il simbolo della grandezza dal simbolo dell’unità.
:::

:::esempio{titolo="Distanze uguali con precisioni diverse"}
Una riga graduata al centimetro restituisce $\ell=2{,}00\,\mathrm{m}$, cioè una misura espressa fino al centimetro. Una seconda osservazione espressa come $2{,}0\,\mathrm{m}$ arriva invece al decimetro. I valori centrali coincidono e hanno precisioni diverse. Per riportare entrambi in centimetri senza perdere questa distinzione, si può scrivere rispettivamente $2{,}00\cdot10^2\,\mathrm{cm}$ e $2{,}0\cdot10^2\,\mathrm{cm}$. Le potenze di dieci rendono chiaro il cambio di unità e le cifre davanti alla potenza conservano l’informazione sulla misura. Nei problemi con dati ideali, quando la precisione sperimentale è fuori tema, si può trattare il valore numerico come esatto.
:::

## Prefissi e fattori di conversione

:::definizione{#prefissi titolo="Prefissi decimali"}
Un **prefisso** moltiplica per una potenza di dieci l’unità a cui è legato. Il prefisso kilo, simbolo $\mathrm{k}$, indica $10^3$. I prefissi deci e centi, simboli $\mathrm{d}$ e $\mathrm{c}$, indicano rispettivamente $10^{-1}$ e $10^{-2}$. Milli, micro e nano, simboli $\mathrm{m}$, $\mu$ e $\mathrm{n}$, indicano $10^{-3}$, $10^{-6}$ e $10^{-9}$. Per esempio, $1\,\mu\mathrm{m}$ vale $10^{-6}\,\mathrm{m}$ e $1\,\mathrm{nm}$ vale $10^{-9}\,\mathrm{m}$. Sulla scala seguente ogni intervallo di tre esponenti corrisponde a un fattore mille.

::grafico{assi=0 uguale=1 xmin=-10.5 xmax=4.7 ymin=-1.6 ymax=1.6 vettori="-10,0,4,0" linee="-9,-0.2 -9,0.2;-6,-0.2 -6,0.2;-3,-0.2 -3,0.2;0,-0.2 0,0.2;3,-0.2 3,0.2" etichette="-9,0.7,nm;-6,0.7,µm;-3,0.7,mm;0,0.7,m;3,0.7,km;-9,-0.65,−9;-6,-0.65,−6;-3,-0.65,−3;0,-0.65,0;3,-0.65,3" titolo="L’asse orizzontale indica l’esponente della potenza di dieci rispetto al metro."}
:::

:::definizione{#fattori-conversione titolo="Rapporto tra misure equivalenti"}
Un **fattore di conversione** è il rapporto tra due scritture equivalenti della stessa grandezza. Poiché $1\,\mathrm{m}=100\,\mathrm{cm}$, valgono entrambi i rapporti
$$
\frac{1\,\mathrm{m}}{100\,\mathrm{cm}}=1,
\qquad
\frac{100\,\mathrm{cm}}{1\,\mathrm{m}}=1.
$$
Moltiplicare una misura per uno di questi rapporti ne conserva il valore fisico. L’orientamento del rapporto dipende dall’unità di partenza. Per convertire una lunghezza espressa in centimetri, il centimetro compare al denominatore del rapporto, così si semplifica con il centimetro della misura. Il metro rimane al numeratore ed è l’unità del risultato.
:::

:::esempio{titolo="Da micrometri a nanometri"}
Una fibra ha diametro $2{,}4\,\mu\mathrm{m}$. Poiché i due prefissi corrispondono a $10^{-6}$ e $10^{-9}$, un micrometro equivale a $10^3$ nanometri.
$$
\begin{aligned}
d&=2{,}4\,\mu\mathrm{m}\cdot
\frac{10^3\,\mathrm{nm}}{1\,\mu\mathrm{m}}\\[6pt]
&=2400\,\mathrm{nm}.
\end{aligned}
$$
Il nanometro è l’unità più piccola, quindi il diametro richiede un numero maggiore di nanometri. Questo confronto fornisce un controllo rapido sul verso della conversione. Riportando $2400\,\mathrm{nm}$ in metri si ottiene $2{,}4\cdot10^{-6}\,\mathrm{m}$, lo stesso valore in metri della misura iniziale.
:::

:::attenzione
I fattori dei prefissi sono esatti. La precisione di una misura resta quella determinata dallo strumento. Una lunghezza misurata come $2{,}4\,\mu\mathrm{m}$ conserva due cifre significative anche dopo la conversione. La scrittura $2{,}4\cdot10^3\,\mathrm{nm}$ rende esplicita questa informazione. La scrittura $2400\,\mathrm{nm}$ esprime lo stesso valore, ma gli zeri finali da soli lasciano ambigua la precisione.
:::

:::osservazione{titolo="Conversioni con uno spostamento dell’origine"}
I fattori moltiplicativi si applicano alle unità che differiscono per una scala. Tra il valore numerico della temperatura in gradi Celsius e quello in kelvin cambia anche la posizione dello zero. Se $t_{\mathrm{C}}$ indica il valore in gradi Celsius e $T_{\mathrm{K}}$ quello in kelvin, vale $T_{\mathrm{K}}=t_{\mathrm{C}}+273{,}15$. Per esempio, $20\,{}^\circ\mathrm{C}$ corrispondono a $293{,}15\,\mathrm{K}$. Per una differenza di temperature, invece, il termine fisso si elide sottraendo i due valori. Un passaggio da $20$ a $35\,{}^\circ\mathrm{C}$ corrisponde a una variazione di $15\,\mathrm{K}$. I problemi sui gas usano la temperatura assoluta, quindi il valore da sostituire in quei calcoli è quello in kelvin.
:::

## Aree, volumi e capacità

:::osservazione{#aree-volumi titolo="Quadrato e cubo del fattore lineare"}
L’area di un rettangolo è il prodotto delle lunghezze di base e altezza. Se entrambe sono espresse in centimetri, il risultato è in centimetri quadrati. Per passare a metri quadrati, ciascuna lunghezza introduce un fattore $10^{-2}$. Il fattore complessivo è quindi $10^{-4}$. Nel volume di un parallelepipedo le lunghezze sono tre e il fattore complessivo è $10^{-6}$.
$$
\begin{aligned}
1\,\mathrm{cm^2}&=(10^{-2}\,\mathrm{m})^2
=10^{-4}\,\mathrm{m^2}\\[6pt]
1\,\mathrm{cm^3}&=(10^{-2}\,\mathrm{m})^3
=10^{-6}\,\mathrm{m^3}.
\end{aligned}
$$
Il quadrato della figura ha lato $1\,\mathrm{dm}$. Ogni lato comprende dieci intervalli da un centimetro, quindi la griglia contiene $10\cdot10$ quadratini. In un cubo dello stesso lato si sovrappongono dieci strati di questo tipo, ciascuno spesso un centimetro. Il cubo contiene dunque mille cubetti da un centimetro cubo.

::grafico{uguale=1 xmin=-1 xmax=12.5 ymin=-1 ymax=12.5 nomi="x,y (cm)" linee="0,0 10,0 10,10 0,10 0,0" segmenti="1,0,1,10;2,0,2,10;3,0,3,10;4,0,4,10;5,0,5,10;6,0,6,10;7,0,7,10;8,0,8,10;9,0,9,10;0,1,10,1;0,2,10,2;0,3,10,3;0,4,10,4;0,5,10,5;0,6,10,6;0,7,10,7;0,8,10,8;0,9,10,9" poligoni="0,0 1,0 1,1 0,1" titolo="Le distanze sui due assi sono in centimetri. Il quadrato da $1\,\mathrm{dm^2}$ contiene cento quadratini da $1\,\mathrm{cm^2}$."}

::grafico{assi=0 uguale=1 xmin=-0.9 xmax=6.6 ymin=-0.7 ymax=5.3 linee="0,0 4,0 4,4 0,4 0,0;4,0 5.2,0.8 5.2,4.8 1.2,4.8 0,4;4,4 5.2,4.8;0,0.4 4,0.4 5.2,1.2" poligoni="0,0 4,0 4,0.4 0,0.4;4,0 5.2,0.8 5.2,1.2 4,0.4" etichette="2,-0.35,10 cm;5.65,2.85,10 cm" titolo="La fascia evidenzia schematicamente uno strato del cubo. Lo strato ha base $100\,\mathrm{cm^2}$ e spessore $1\,\mathrm{cm}$."}
:::

:::definizione{#litri titolo="Litro, millilitro e unità cubiche"}
Un **litro** equivale a un decimetro cubo. Poiché un decimetro vale $10^{-1}\,\mathrm{m}$, un litro vale $10^{-3}\,\mathrm{m^3}$. Un millilitro è un millesimo di litro e vale $10^{-6}\,\mathrm{m^3}$. Questo valore coincide con un centimetro cubo.
$$
1\,\mathrm{L}=1\,\mathrm{dm^3}=10^{-3}\,\mathrm{m^3},
\qquad
1\,\mathrm{mL}=1\,\mathrm{cm^3}.
$$
Il litro è ammesso per l’uso con il SI. È pratico in laboratorio e nei problemi di soluzione. Il metro cubo è comodo nelle formule in cui le lunghezze sono espresse in metri.
:::

:::esempio{titolo="Volume di un contenitore in millilitri"}
Un contenitore rettangolare ha dimensioni interne $8\,\mathrm{cm}$, $5\,\mathrm{cm}$ e $3\,\mathrm{cm}$. Il volume interno è
$$
V=8\cdot5\cdot3\,\mathrm{cm^3}=120\,\mathrm{cm^3}.
$$
Ogni centimetro cubo corrisponde a un millilitro, quindi la capacità è $120\,\mathrm{mL}$. In metri cubi lo stesso volume è $1{,}20\cdot10^{-4}\,\mathrm{m^3}$. Le dimensioni sono interne perché la capacità riguarda lo spazio disponibile al liquido. Eventuali spessori delle pareti restano fuori dal calcolo.
:::

:::esempio{titolo="Superficie con lati in unità differenti"}
Una piastra rettangolare ha base $0{,}4\,\mathrm{m}$ e altezza $50\,\mathrm{cm}$. Per calcolare l’area in metri quadrati si esprimono entrambi i lati in metri. Si ha $50\,\mathrm{cm}=0{,}50\,\mathrm{m}$, quindi l’area è $0{,}20\,\mathrm{m^2}$. Si può anche convertire il primo lato in centimetri. I lati diventano $40\,\mathrm{cm}$ e $50\,\mathrm{cm}$ e l’area vale $2000\,\mathrm{cm^2}$. Poiché un metro quadrato contiene diecimila centimetri quadrati, $2000\,\mathrm{cm^2}$ sono ancora $0{,}20\,\mathrm{m^2}$. I due percorsi rendono esplicita la differenza tra convertire ciascuna lunghezza e convertire un’area già calcolata.
:::

## Velocità, densità e portata

:::osservazione{#composte titolo="Conversione di un quoziente di unità"}
La velocità media su un tratto percorso in un solo verso si calcola dividendo lo spostamento lungo quel verso per il tempo trascorso. La densità media è la massa divisa per il volume occupato. La portata volumetrica media è il volume che attraversa una sezione diviso per l’intervallo di tempo. In tutti e tre i casi l’unità è composta da un numeratore e un denominatore.

Quando si cambia l’unità al denominatore, il fattore si applica con l’orientamento che consente di cancellare il denominatore iniziale. Per la velocità in chilometri all’ora, si moltiplica per $1000\,\mathrm{m}$ diviso $1\,\mathrm{km}$ e per $1\,\mathrm{h}$ diviso $3600\,\mathrm{s}$. Così i chilometri e le ore si semplificano.
$$
\begin{aligned}
36\,\mathrm{km/h}
&=36\,\frac{\mathrm{km}}{\mathrm{h}}\cdot
\frac{1000\,\mathrm{m}}{1\,\mathrm{km}}\cdot
\frac{1\,\mathrm{h}}{3600\,\mathrm{s}}\\[6pt]
&=10\,\mathrm{m/s}.
\end{aligned}
$$
A parità di velocità, nell’intervallo di un’ora si percorre una distanza maggiore che in un secondo. I metri sono però più piccoli dei chilometri. Il valore numerico finale dipende da entrambi i fattori, quindi il confronto tra le sole unità di tempo è insufficiente.
:::

:::esempio{titolo="Densità con massa in grammi e volume in millilitri"}
Un campione omogeneo di volume $30\,\mathrm{mL}$ ha massa $24\,\mathrm{g}$. Si calcola prima la densità in grammi al centimetro cubo, poiché $30\,\mathrm{mL}=30\,\mathrm{cm^3}$.
$$
\begin{aligned}
\rho&=\frac{24\,\mathrm{g}}{30\,\mathrm{cm^3}}\\[6pt]
&=0{,}8\,\mathrm{g/cm^3}\\[6pt]
&=0{,}8\cdot\frac{10^{-3}\,\mathrm{kg}}{10^{-6}\,\mathrm{m^3}}
=800\,\mathrm{kg/m^3}.
\end{aligned}
$$
Il rapporto conserva lo stesso significato se entrambe le misure sono espresse fin dall’inizio in chilogrammi e metri cubi. Per campioni della stessa sostanza omogenea nelle stesse condizioni, massa e volume sono direttamente proporzionali. Nella figura la pendenza è il rapporto tra la massa in grammi e il volume in millilitri.

::grafico{f="0.8*x" xmin=0 xmax=51 ymin=0 ymax=46 nomi=",m (g)" punti="30,24" segmenti="0,24,30,24;30,0,30,24" etichette="48.9,-3.7,V;32,22,24 g" titolo="Il volume $V$ è in millilitri. Il punto con $V=30\,\mathrm{mL}$ ha massa $24\,\mathrm{g}$. La pendenza esprime la densità."}
:::

:::esempio{titolo="Portata media da una misura di raccolta"}
In $20\,\mathrm{s}$ un recipiente raccoglie $500\,\mathrm{mL}$ di liquido. La portata media si calcola sullo stesso intervallo della raccolta.
$$
\begin{aligned}
Q&=\frac{500\cdot10^{-6}\,\mathrm{m^3}}{20\,\mathrm{s}}\\[6pt]
&=2{,}5\cdot10^{-5}\,\mathrm{m^3/s}.
\end{aligned}
$$
Una misura di volume complessivo e durata basta a trovare la media. Per stabilire se la portata è rimasta costante serve invece conoscere quanto liquido è passato nei singoli sottointervalli. La conversione delle unità mantiene il significato della media e si applica anche se il flusso varia.
:::

:::osservazione{titolo="Quozienti con unità di tempo diverse"}
Un valore espresso in metri al minuto può essere convertito in centimetri al secondo moltiplicando per cento e dividendo per sessanta. Per esempio, un moto a $3\,\mathrm{m/min}$ corrisponde a $300\,\mathrm{cm}$ al minuto, cioè a $5\,\mathrm{cm/s}$. Lo stesso meccanismo vale per una portata espressa in litri al minuto. Un flusso di $6\,\mathrm{L/min}$ equivale a $0{,}1\,\mathrm{L/s}$, ossia a $10^{-4}\,\mathrm{m^3/s}$. Conservare un passaggio intermedio in litri al secondo aiuta a distinguere la conversione del tempo dalla conversione del volume.
:::

## Concentrazione massica e molare

:::definizione{#concentrazione titolo="Soluto per volume finale di soluzione"}
Una soluzione contiene uno o più soluti dispersi nel solvente. La **concentrazione massica** di un soluto è il rapporto tra la sua massa $m_{\mathrm{s}}$ e il volume finale $V$ della soluzione. La **concentrazione molare** è il rapporto tra la quantità di sostanza $n$ del soluto e lo stesso volume. In questi esercizi indichiamo le due grandezze con $c_m$ e $c$.
$$
c_m=\frac{m_{\mathrm{s}}}{V},
\qquad
c=\frac{n}{V}.
$$
Con massa in grammi, quantità di sostanza in moli e volume in litri si ottengono rispettivamente grammi al litro e moli al litro. Il volume riguarda l’intera soluzione dopo la preparazione. Il volume iniziale di solvente è un dato diverso e di per sé non determina il volume finale.
:::

:::esempio{titolo="Da grammi di soluto a moli al litro"}
Una soluzione contiene $6\,\mathrm{g}$ di un soluto con massa molare $\mathcal{M}=60\,\mathrm{g/mol}$ e ha volume finale $500\,\mathrm{mL}$. La massa molare esprime la massa di una mole di sostanza. Dividendo la massa per $\mathcal{M}$ si ricava $n$. Il volume va espresso in litri per ottenere la concentrazione nelle unità richieste.
$$
\begin{aligned}
n&=\frac{6\,\mathrm{g}}{60\,\mathrm{g/mol}}=0{,}10\,\mathrm{mol}\\[6pt]
V&=500\,\mathrm{mL}=0{,}50\,\mathrm{L}\\[6pt]
c&=\frac{0{,}10\,\mathrm{mol}}{0{,}50\,\mathrm{L}}
=0{,}20\,\mathrm{mol/L}\\[6pt]
c_m&=\frac{6\,\mathrm{g}}{0{,}50\,\mathrm{L}}=12\,\mathrm{g/L}.
\end{aligned}
$$
Il calcolo conferma la relazione $c_m=\mathcal{M}c$. Il prodotto delle unità $\mathrm{g/mol}$ e $\mathrm{mol/L}$ lascia $\mathrm{g/L}$. A parità di concentrazione massica, la concentrazione molare dipende quindi dalla massa molare del soluto.
:::

:::osservazione{titolo="Concentrazione massica e densità della soluzione"}
La concentrazione massica e la densità possono essere entrambe espresse in grammi al litro. Il numeratore della prima contiene solo la massa del soluto considerato. Il numeratore della seconda contiene la massa complessiva della soluzione. Per esempio, se un litro di soluzione ha massa $1020\,\mathrm{g}$ e contiene $25\,\mathrm{g}$ di soluto, la sua densità è $1020\,\mathrm{g/L}$ e la concentrazione massica è $25\,\mathrm{g/L}$. Leggere l’unità consente di capire che entrambe sono rapporti di massa e volume. Per distinguere le due grandezze bisogna identificare quale massa è stata misurata.
:::

## Diluizioni e conservazione del soluto

:::osservazione{#diluizione titolo="Quantità di soluto prima e dopo la diluizione"}
Durante una diluizione si aggiunge solvente a un campione. Se il soluto considerato rimane interamente in soluzione e la sua quantità di sostanza si conserva, la quantità iniziale $n_1=c_1V_1$ uguaglia quella finale $n_2=c_2V_2$. I simboli $c_1$ e $V_1$ indicano la concentrazione e il volume del campione iniziale. $c_2$ e $V_2$ si riferiscono alla soluzione finale.
$$
c_1V_1=c_2V_2,
\qquad
c_2=c_1\frac{V_1}{V_2}.
$$
Il rapporto dei volumi è un numero senza unità quando i due volumi sono espressi nella stessa unità. Se la concentrazione iniziale è data in moli al litro, questo rapporto si può calcolare anche con entrambi i volumi in millilitri. Per trovare la quantità di sostanza moltiplicando concentrazione e volume occorre invece convertire il volume in litri.

La figura rappresenta un soluto di quantità fissa $n=0{,}040\,\mathrm{mol}$ a volumi differenti. Passare da $0{,}10$ a $0{,}20\,\mathrm{L}$ dimezza la concentrazione, perché il volume raddoppia.

::grafico{curve="t,0.04/t,0.05,0.47" xmin=0 xmax=0.52 ymin=-0.07 ymax=0.9 nomi="V,c (mol/L)" punti="0.1,0.4;0.2,0.2" segmenti="0.1,0,0.1,0.4;0,0.4,0.1,0.4;0.2,0,0.2,0.2;0,0.2,0.2,0.2" etichette="0.075,-0.055,0,10;0.175,-0.055,0,20;0.108,0.437,0,40;0.211,0.233,0,20" titolo="Il volume $V$ è in litri. A parità di quantità di soluto, il prodotto $cV$ resta uguale a $0{,}040\,\mathrm{mol}$."}
:::

:::esempio{titolo="Due diluizioni in successione"}
Si prelevano $20\,\mathrm{mL}$ a $0{,}80\,\mathrm{mol/L}$ e si diluisce fino a $80\,\mathrm{mL}$. Si prelevano quindi $15\,\mathrm{mL}$ della soluzione ottenuta e si diluisce questo secondo campione fino a $60\,\mathrm{mL}$. In ogni passaggio il soluto contenuto nel campione prelevato si conserva.
$$
\begin{aligned}
c_2&=0{,}80\,\mathrm{mol/L}\cdot\frac{20}{80}
=0{,}20\,\mathrm{mol/L}\\[6pt]
c_3&=0{,}20\,\mathrm{mol/L}\cdot\frac{15}{60}
=0{,}050\,\mathrm{mol/L}.
\end{aligned}
$$
Entrambe le diluizioni riducono la concentrazione a un quarto. Il prodotto dei due fattori è un sedicesimo, quindi la concentrazione finale è un sedicesimo di quella di partenza. Il secondo calcolo usa come volume iniziale i $15\,\mathrm{mL}$ effettivamente prelevati. Gli $80\,\mathrm{mL}$ servono solo a trovare la concentrazione della prima soluzione.
:::

:::attenzione
La frase «fino a $100\,\mathrm{mL}$» indica il volume finale della soluzione. Un campione da $20\,\mathrm{mL}$ diluito fino a $100\,\mathrm{mL}$ ha concentrazione pari a un quinto di quella iniziale. Se invece si aggiungono $100\,\mathrm{mL}$ di solvente e si assume l’additività dei volumi, il volume finale è $120\,\mathrm{mL}$ e il rapporto diventa un sesto. L’additività deve essere un’ipotesi del modello quando si sommano volumi di liquidi.
:::

## Analisi dimensionale delle formule

:::osservazione{#dimensioni titolo="Prodotti, quozienti e somme di dimensioni"}
La dimensione indica la natura di una grandezza indipendentemente dall’unità scelta. Scriviamo $M$ per la dimensione della massa, $L$ per la lunghezza e $T$ per il tempo. Il simbolo $[X]$ indica la dimensione della grandezza $X$. Se $v$ è una velocità e $a$ un’accelerazione, il rapporto tra lunghezza e tempo dà $[v]=LT^{-1}$. Il rapporto tra variazione di velocità e intervallo di tempo dà $[a]=LT^{-2}$.

In un prodotto si moltiplicano le dimensioni dei fattori. In un quoziente si dividono le dimensioni. Per sommare grandezze i termini devono avere la stessa dimensione. Prima della somma numerica occorre inoltre esprimerli in unità compatibili. Per esempio, uno spostamento di un metro può essere sommato a uno spostamento di cinquanta centimetri dopo averli scritti nella stessa unità.
:::

:::esempio{titolo="Controllo della formula dello spostamento"}
Nel moto lungo una retta ad accelerazione costante, lo spostamento $s$ durante un intervallo $t$ è $s=v_0t+\dfrac12at^2$, dove $v_0$ è la velocità iniziale. Il numero $\dfrac12$ è adimensionale. Si controllano i termini separatamente.
$$
\begin{aligned}
[v_0t]&=LT^{-1}\cdot T=L\\[6pt]
\left[\frac12at^2\right]&=LT^{-2}\cdot T^2=L.
\end{aligned}
$$
Entrambi i termini sono lunghezze. Per vedere il ruolo del quadrato, si consideri un corpo con $v_0=0$ e $a=2\,\mathrm{m/s^2}$. A $t=3\,\mathrm{s}$ lo spostamento è $9\,\mathrm{m}$. La relazione quadratica implica che, raddoppiando il tempo a parità di accelerazione, lo spostamento quadruplica.

::grafico{f="x^2" xmin=0 xmax=4.7 ymin=0 ymax=21 nomi="t,s (m)" punti="1,1;2,4;3,9;4,16" segmenti="2,0,2,4;4,0,4,16" titolo="Il tempo $t$ è in secondi. Con partenza da fermo e accelerazione $2\,\mathrm{m/s^2}$, passare da due a quattro secondi quadruplica lo spostamento."}
:::

:::attenzione
L’omogeneità dimensionale è una condizione necessaria. Due formule con coefficienti numerici differenti possono superare lo stesso controllo. Per esempio, $s=at^2$ e $s=\dfrac12at^2$ hanno entrambe dimensione $L$ al secondo membro. Nel moto ad accelerazione costante con partenza da fermo vale il coefficiente $\dfrac12$. Questo coefficiente si ricava dalla legge del moto e resta indeterminato dal solo controllo dimensionale.
:::

:::esempio{titolo="Dimensione di una costante elastica"}
Nel modello lineare di una molla, il modulo della forza elastica $F$ e il modulo dell’allungamento $\ell$ soddisfano $F=k\ell$. La grandezza $k$ indica la costante elastica. La forza ha dimensione $MLT^{-2}$, perché è il prodotto di una massa per un’accelerazione. Dall’equazione si ricava
$$
[k]=\frac{[F]}{[\ell]}=\frac{MLT^{-2}}{L}=MT^{-2}.
$$
Un’unità di $k$ è il newton al metro. Poiché $1\,\mathrm{N}=1\,\mathrm{kg\,m/s^2}$, dividere un newton per un metro dà un chilogrammo al secondo quadrato. Il calcolo con le unità del SI conferma il risultato dimensionale.
:::

:::esempio{titolo="Pressione e forza per unità di superficie"}
Una forza di modulo $F$ agisce perpendicolarmente a una superficie di area $A$. La pressione media vale $p=\dfrac{F}{A}$. Poiché $[F]=MLT^{-2}$ e $[A]=L^2$, segue $[p]=ML^{-1}T^{-2}$. Il pascal è quindi il newton al metro quadrato. Per esempio, una forza di $12\,\mathrm{N}$ su $6\,\mathrm{cm^2}$ esercita una pressione media di $20\,000\,\mathrm{Pa}$. Il valore si ottiene dividendo $12$ per $6\cdot10^{-4}$, perché il fattore per l’area va applicato prima del quoziente. La dimensione della pressione si ottiene anche da $\rho gh$, con densità $\rho$, accelerazione $g$ e dislivello $h$. Infatti $ML^{-3}\cdot LT^{-2}\cdot L=ML^{-1}T^{-2}$. Questa uguaglianza spiega perché si possono sommare una pressione iniziale e un incremento idrostatico.
:::

## Grandezze intensive ed estensive

:::definizione{#intensive-estensive titolo="Effetto della quantità di materiale"}
Una grandezza è **estensiva** se è additiva rispetto a sottosistemi disgiunti. Quando si mettono insieme due porzioni dello stesso materiale, la massa totale è la somma delle masse. La quantità di sostanza di uno stesso soluto è additiva se la miscelazione conserva il soluto. Una grandezza è **intensiva** se il suo valore resta invariato quando si considera una porzione della stessa sostanza omogenea nelle stesse condizioni. La densità di un campione omogeneo, in equilibrio e a temperatura fissata, è un esempio.

Per un campione omogeneo di massa $m$ e volume $V$, una porzione che occupa la frazione $f$ del volume ha massa $fm$. La densità della porzione è
$$
\rho_{\mathrm{porzione}}=\frac{fm}{fV}=\frac{m}{V}=\rho,
\qquad 0<f\leq 1.
$$
La massa e il volume della porzione cambiano nello stesso rapporto. Il loro quoziente conserva il valore. Una concentrazione si comporta allo stesso modo quando si preleva una porzione di una soluzione omogenea.
:::

:::esempio{titolo="Prelievo e confronto delle concentrazioni"}
Una soluzione omogenea di $300\,\mathrm{mL}$ contiene $0{,}12\,\mathrm{mol}$ di soluto. Un prelievo da $75\,\mathrm{mL}$ rappresenta un quarto del volume. Poiché il soluto è distribuito uniformemente, il prelievo contiene un quarto della quantità iniziale, pari a $0{,}030\,\mathrm{mol}$.
$$
\begin{aligned}
c_{\mathrm{soluzione}}
&=\frac{0{,}12\,\mathrm{mol}}{0{,}300\,\mathrm{L}}
=0{,}40\,\mathrm{mol/L}\\[6pt]
c_{\mathrm{prelievo}}
&=\frac{0{,}030\,\mathrm{mol}}{0{,}075\,\mathrm{L}}
=0{,}40\,\mathrm{mol/L}.
\end{aligned}
$$
I punti della figura appartengono alla stessa retta. Il rapporto tra le ordinate e le ascisse è la pendenza e rappresenta la concentrazione in entrambe le porzioni.

::grafico{f="0.4*x" xmin=0 xmax=0.4 ymin=-0.014 ymax=0.17 nomi="V,n (mol)" punti="0.075,0.03;0.3,0.12" segmenti="0.075,0,0.075,0.03;0.3,0,0.3,0.12" etichette="0.052,-0.011,0,075;0.281,-0.011,0,300;0.083,0.023,0,030;0.307,0.109,0,120" titolo="Il volume $V$ è in litri. Nel prelievo omogeneo volume e quantità di soluto diminuiscono nello stesso rapporto."}
:::

:::osservazione{titolo="Miscelazione e pesi dei volumi"}
Se si mescolano due soluzioni dello stesso soluto e si conosce il volume finale, la concentrazione finale si trova dividendo la quantità complessiva di soluto per quel volume. Se i volumi sono additivi e il soluto si conserva, la formula è
$$
c_{\mathrm{finale}}=\frac{c_1V_1+c_2V_2}{V_1+V_2}.
$$
È una media ponderata delle due concentrazioni. Perciò una porzione più grande pesa di più nel risultato. Mescolando $100\,\mathrm{mL}$ a $0{,}20\,\mathrm{mol/L}$ con $300\,\mathrm{mL}$ a $0{,}60\,\mathrm{mol/L}$, si ottengono $0{,}020\,\mathrm{mol}+0{,}180\,\mathrm{mol}=0{,}200\,\mathrm{mol}$. Il volume finale è $0{,}400\,\mathrm{L}$ e la concentrazione è $0{,}50\,\mathrm{mol/L}$. Il valore è compreso tra quelli iniziali ed è più vicino alla concentrazione della porzione di volume maggiore.
:::
