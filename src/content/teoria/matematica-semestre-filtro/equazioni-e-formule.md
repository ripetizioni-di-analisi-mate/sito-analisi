---
titolo: "Equazioni e formule inverse"
sommario: "Risolvere equazioni e sistemi, isolare le grandezze nelle formule di Fisica e Chimica e verificare che i risultati rispettino le condizioni del problema."
---

## Uguaglianze e operazioni equivalenti

:::definizione{#equivalenza titolo="Equazione e insieme delle soluzioni"}
Un'**equazione** uguaglia due espressioni, dette *membri*, che dipendono da una grandezza da determinare. La lettera $x$ indica l'**incognita**. Una soluzione è un valore ammesso per $x$ che, sostituito nei due membri, li rende uguali. Due equazioni sono equivalenti in uno stesso dominio quando hanno lo stesso insieme di soluzioni in quel dominio. L'equivalenza permette di sostituire un'equazione con un'altra più comoda per il calcolo.
:::

::::teorema{#trasformazioni-equivalenti titolo="Operazioni invertibili sui due membri"}
Su un dominio in cui tutte le espressioni sono definite, aggiungere o sottrarre la stessa espressione da entrambi i membri produce un'equazione equivalente. Lo stesso vale se si moltiplicano o si dividono i due membri per un'espressione che in quel dominio è sempre diversa da zero. La prima proprietà permette di riunire i termini con l'incognita in un membro. La seconda permette di isolare l'incognita o di eliminare i denominatori.

:::dimostrazione
Per stabilire l'equivalenza si applica l'operazione inversa. Se $L$ e $R$ indicano i due membri e $u$ è definita nel dominio, da $L=R$ segue $L+u=R+u$. Sottraendo $u$ dalla seconda uguaglianza si torna alla prima. Se $k\ne0$ in tutto il dominio, da $L=R$ segue $kL=kR$. Dividendo per $k$ si torna all'uguaglianza iniziale. Per la sottrazione e la divisione si applica lo stesso ragionamento invertendo l'ordine delle operazioni.
:::
::::

:::esempio{titolo="Due espressioni con lo stesso valore"}
Si risolve $4x+2=2x+8$ sottraendo prima $2x$ da entrambi i membri. Il termine con l'incognita rimane nel primo membro. Si sottrae poi $2$ da entrambi i membri e si divide per il coefficiente rimasto.
$$
\begin{aligned}
4x+2&=2x+8 \\[6pt]
2x+2&=8 \\[6pt]
2x&=6 \\[6pt]
x&=3 .
\end{aligned}
$$
Per $x=3$, entrambi i membri valgono $14$. Nel piano cartesiano i due membri sono rappresentati da rette. Il punto di intersezione ha ascissa $3$ e ordinata $14$, quindi la soluzione dell'equazione è l'ascissa del punto.

::grafico{f="4*x+2;2*x+8" xmin=-1 xmax=4 ymin=-2 ymax=18 punti="3,14,pieno" segmenti="3,0,3,14;0,14,3,14" titolo="I due membri valgono entrambi $14$ per $x=3$"}

:::

:::attenzione{titolo="Moltiplicazione per un fattore che può annullarsi"}
Da $x=2$ segue $x(x-1)=2(x-1)$. La seconda equazione è soddisfatta anche per $x=1$, perché entrambi i membri diventano zero. Perciò la moltiplicazione per $x-1$ conserva l'equivalenza soltanto sul dominio $x\ne1$.
:::

:::osservazione{titolo="Scarto tra i membri"}
Per valutare un candidato si può calcolare lo **scarto** $L-R$, cioè la differenza tra il primo e il secondo membro. Nell'equazione $4x+2=2x+8$ lo scarto vale $2x-6$. Per $x=2$ si ottiene $-2$, quindi il primo membro è minore del secondo. Per $x=4$ si ottiene $2$, quindi è maggiore. Per $x=3$ lo scarto è zero. Scrivere un'equazione nella forma $L-R=0$ permette di cercare gli zeri di una sola espressione. Nelle applicazioni, i due membri e lo scarto si esprimono nella stessa unità.
:::

## Equazioni di primo grado

:::definizione{#equazioni-lineari titolo="Coefficiente dell'incognita e termine noto"}
Dopo aver sviluppato i prodotti e riunito i termini simili, un'equazione lineare in $x$ si scrive $ax=b$. Il numero $a$ è il coefficiente di $x$ e $b$ è il termine noto. Quando $a\ne0$ l'equazione è di primo grado. Il valore di $a$ decide se è possibile dividere per il coefficiente.

- Se $a\ne0$, si divide per $a$ e si ottiene l'unica soluzione $x=\dfrac{b}{a}$.
- Se $a=0$ e $b=0$, l'uguaglianza vale per ogni $x$ del dominio. In quel dominio è un'identità.
- Se $a=0$ e $b\ne0$, l'uguaglianza è falsa per ogni $x$. L'insieme delle soluzioni è vuoto.

I tre casi si applicano anche quando i coefficienti dipendono da un parametro, cioè da un dato il cui valore varia tra un problema e l'altro.
:::

:::esempio{titolo="Incognita in entrambi i membri"}
Per risolvere $3(2x-1)=4x+9$ si sviluppa il prodotto del primo membro. Il fattore $3$ moltiplica sia $2x$ sia $-1$. Si sottrae quindi $4x$ da entrambi i membri e si aggiunge $3$.
$$
\begin{aligned}
6x-3&=4x+9 \\[6pt]
2x-3&=9 \\[6pt]
2x&=12 \\[6pt]
x&=6 .
\end{aligned}
$$
Il coefficiente rimasto è $2$, quindi la divisione determina un solo valore. Per $x=6$, il primo membro vale $3\cdot11=33$ e il secondo vale $24+9=33$.
:::

:::esempio{titolo="Equazione con un dato variabile"}
Si considera $k(x+1)=3x+k$, dove $k$ è un numero reale fissato. Si sviluppa il prodotto e si sottrae $k$ da entrambi i membri. Poi si riuniscono i termini in $x$.
$$
\begin{aligned}
kx+k&=3x+k \\[6pt]
(k-3)x&=0 .
\end{aligned}
$$
Per $k\ne3$ il coefficiente è diverso da zero, perciò l'unica soluzione è $x=0$. Per $k=3$ entrambi i membri della seconda equazione valgono zero per ogni $x$. La formula $x=\dfrac{0}{k-3}$ è applicabile soltanto nel primo caso.
:::

:::esempio{titolo="Deformazione di una molla con carico iniziale"}
In un modello lineare, la forza misurata è $F=F_0+kx$. Il dato $F_0=5\,\mathrm{N}$ è la forza a deformazione nulla e $k=40\,\mathrm{N/m}$ è la costante elastica. Per una forza misurata di $25\,\mathrm{N}$ si cerca la deformazione $x$. Sottraendo prima la forza iniziale si trova la parte proporzionale a $x$.
$$
\begin{aligned}
kx&=F-F_0=20\,\mathrm{N} \\[6pt]
x&=\frac{20\,\mathrm{N}}{40\,\mathrm{N/m}}
  =0{,}5\,\mathrm{m}.
\end{aligned}
$$
Il termine $F_0$ è espresso in newton, quindi si può sottrarre da $F$. La sostituzione di $x$ nella formula restituisce $5+40\cdot0{,}5=25$ newton.
:::

## Formule inverse e unità di misura

:::definizione{#inverse titolo="Una grandezza espressa in funzione delle altre"}
Una **formula inversa** esprime una delle grandezze presenti in una relazione mediante le altre. La grandezza richiesta assume il ruolo dell'incognita e le altre sono dati. Per esempio, la relazione $\rho=\dfrac{m}{V}$ definisce la densità $\rho$ di un campione di massa $m$ e volume $V>0$. Moltiplicando per $V$ si trova la massa $m=\rho V$. Se $\rho>0$, dividendo quest'ultima uguaglianza per $\rho$ si ottiene $V=\dfrac{m}{\rho}$. La stessa relazione permette quindi di calcolare tre grandezze diverse, a seconda di quali due sono note.
:::

:::esempio{titolo="Volume di un campione"}
Un campione ha massa $20\,\mathrm{g}$ e densità $4\,\mathrm{g/cm^3}$. Si cerca il suo volume. Poiché la densità è positiva, si può usare la formula inversa per $V$.
$$
\begin{aligned}
V&=\frac{m}{\rho} \\[6pt]
&=\frac{20\,\mathrm{g}}{4\,\mathrm{g/cm^3}} \\[6pt]
&=5\,\mathrm{cm^3}.
\end{aligned}
$$
Nel quoziente le unità di massa si semplificano e rimane l'unità di volume. Per verificare il risultato si ricalcola la massa mediante $m=\rho V$ e si ritrovano $20\,\mathrm{g}$.

::grafico{f="4*x;20" xmin=0 xmax=8 ymin=0 ymax=31 nomi="V,m" legenda="m=4V;m=20" punti="5,20,pieno" segmenti="5,0,5,20" titolo="Con $V$ in $\mathrm{cm^3}$ e $m$ in $\mathrm{g}$, il livello di $20\,\mathrm{g}$ individua il volume $5\,\mathrm{cm^3}$"}

:::

:::esempio{titolo="Pressione e forza su una superficie"}
Una pressione uniforme $p=8\,\mathrm{kPa}$ è esercitata da una forza normale di modulo $F$ su una superficie piana di area $A=250\,\mathrm{cm^2}$. Dato che $p=\dfrac{F}{A}$ e $A>0$, moltiplicando per l'area si ottiene $F=pA$. Per esprimere il risultato in newton si converte la pressione in pascal e l'area in metri quadrati.
$$
\begin{aligned}
p&=8\,000\,\mathrm{Pa} \\[6pt]
A&=250\cdot10^{-4}\,\mathrm{m^2}
   =0{,}025\,\mathrm{m^2} \\[6pt]
F&=8\,000\,\mathrm{Pa}\cdot0{,}025\,\mathrm{m^2}
   =200\,\mathrm{N}.
\end{aligned}
$$
La conversione dell'area usa $10^{-4}$ perché il rapporto tra centimetro e metro va elevato al quadrato. Il prodotto tra pascal e metri quadrati si misura in newton, come previsto per una forza.
:::

:::osservazione{titolo="Controllo dimensionale della formula inversa"}
Le due espressioni $V=\dfrac{m}{\rho}$ e $V=m\rho$ conducono a unità diverse. Se $m$ è in grammi e $\rho$ è in grammi al centimetro cubo, il prodotto ha unità $\mathrm{g^2/cm^3}$, quindi è incompatibile con un volume. Il quoziente ha invece unità $\mathrm{cm^3}$. Il controllo dimensionale individua così lo scambio tra prodotto e quoziente. La sostituzione dei valori nella relazione di partenza controlla anche i fattori numerici, che possono cambiare lasciando intatte le unità.
:::

:::esempio{titolo="Quantità di sostanza dalla legge dei gas"}
Per un gas ideale la relazione $pV=nRT$ collega la pressione $p$, il volume $V$, la quantità di sostanza $n$ e la temperatura assoluta $T$. La costante dei gas è approssimata con $R=8{,}31\,\mathrm{J/(mol\,K)}$. Se si cerca $n$ e $T>0$, il prodotto $RT$ è positivo e si può dividere per esso. Con $p=83{,}1\,\mathrm{kPa}$, $V=0{,}030\,\mathrm{m^3}$ e $T=300\,\mathrm{K}$ si ottiene
$$
\begin{aligned}
n&=\frac{pV}{RT} \\[6pt]
&=\frac{83\,100\cdot0{,}030\,\mathrm{J}}
        {8{,}31\cdot300\,\mathrm{J/mol}} \\[6pt]
&=1{,}0\,\mathrm{mol}.
\end{aligned}
$$
Il prodotto $pV$ ha unità di energia, poiché un pascal per metro cubo equivale a un joule. Il prodotto $RT$ si misura in joule per mole. Il loro rapporto ha dunque l'unità richiesta.
:::

## Prodotti e denominatori

:::osservazione{#parentesi titolo="Distribuzione e denominatore comune"}
Per sviluppare un prodotto si applica la proprietà distributiva a tutti i termini della somma. Per esempio, $-3(x-2)=-3x+6$, perché $-3$ moltiplica anche $-2$. Nelle equazioni con frazioni, si determina prima il dominio e poi si moltiplicano entrambi i membri per un denominatore comune. Il fattore scelto moltiplica anche i termini scritti senza frazione. Se i denominatori dipendono da $x$, i valori esclusi dal dominio restano tali dopo le semplificazioni.
:::

:::esempio{titolo="Frazioni con denominatori numerici"}
Nell'equazione $\dfrac{x-2}{4}+\dfrac{x+1}{6}=3$ il numero $12$ è un multiplo comune di $4$ e $6$. Moltiplicando entrambi i membri per $12$ si ottiene un'equazione senza denominatori.
$$
\begin{aligned}
3(x-2)+2(x+1)&=36 \\[6pt]
3x-6+2x+2&=36 \\[6pt]
5x-4&=36 \\[6pt]
x&=8 .
\end{aligned}
$$
Per $x=8$ i due addendi valgono entrambi $\dfrac{3}{2}$, quindi la somma è $3$. Il denominatore comune è un numero diverso da zero e l'equazione è definita per ogni $x$ reale.
:::

:::esempio{titolo="Fattore comune e valore escluso"}
Nell'equazione $\dfrac{x^2-1}{x+1}=x-1$ il primo membro è definito per $x\ne-1$. Per questi valori si scompone il numeratore e si semplifica il fattore $x+1$.
$$
\frac{(x-1)(x+1)}{x+1}=x-1 .
$$
L'equazione è dunque soddisfatta per tutti i reali diversi da $-1$. Il secondo membro in $x=-1$ vale $-2$, mentre il primo è indefinito. Il punto vuoto distingue il grafico del rapporto dalla retta che rappresenta la sua espressione semplificata.

::grafico{f="(x^2-1)/(x+1)" xmin=-4 xmax=4 ymin=-6 ymax=5 punti="-1,-2,vuoto" titolo="Il rapporto coincide con $x-1$ dove è definito. Il punto $(-1,-2)$ è escluso"}

:::

:::attenzione{titolo="Equazione ridotta e dominio iniziale"}
Per risolvere $\dfrac{x+2}{x-1}=\dfrac{3}{x-1}$ si impone $x\ne1$ e si moltiplica per $x-1$. La nuova equazione dà $x+2=3$, quindi l'unico candidato è $x=1$. Poiché il denominatore iniziale si annulla in quel punto, l'equazione **non ha soluzioni**. Il calcolo dopo la moltiplicazione si interpreta nel dominio iniziale.
:::

:::esempio{titolo="Due fattori nel denominatore comune"}
Nell'equazione
$$
\frac{2}{x-1}+\frac{3}{x+1}=\frac{x+4}{x^2-1}
$$
il dominio esclude $x=1$ e $x=-1$. Poiché $x^2-1=(x-1)(x+1)$, si può usare $x^2-1$ come denominatore comune per i tre termini.
$$
\begin{aligned}
2(x+1)+3(x-1)&=x+4 \\[6pt]
5x-1&=x+4 \\[6pt]
4x&=5 .
\end{aligned}
$$
La soluzione è $x=\dfrac54$, un valore compreso nel dominio. Il fattore che rimane nel primo addendo è $x+1$, poiché il denominatore del primo addendo conteneva già $x-1$. Per il secondo addendo rimane invece $x-1$. Il termine a destra aveva già l'intero denominatore comune, quindi resta soltanto il numeratore.
:::

## Formule con differenze e segni

:::definizione{#variazioni titolo="Valore iniziale, valore finale e variazione"}
La variazione di una grandezza si ottiene sottraendo il valore iniziale da quello finale. Nella relazione calorimetrica $Q=mc(T_f-T_i)$, $T_f$ e $T_i$ sono le temperature finale e iniziale, $m$ è la massa, $c$ è il calore specifico e $Q$ è il calore scambiato dal campione. Si assume $m>0$ e $c>0$ costante nell'intervallo, in assenza di cambiamenti di stato. Nel modello $Q$ è positivo quando il campione assorbe calore e negativo quando lo cede. Poiché $mc>0$, il segno di $Q$ coincide con quello della variazione di temperatura.
:::

:::esempio{titolo="Temperatura finale durante un raffreddamento"}
Un campione a $22\,^\circ\mathrm{C}$ cede $360\,\mathrm{J}$ e ha capacità termica $mc=120\,\mathrm{J/K}$. Si divide prima per $mc$, così si ricava la variazione. Si aggiunge poi la temperatura iniziale.
$$
\begin{aligned}
T_f-T_i&=\frac{Q}{mc} \\[6pt]
&=\frac{-360\,\mathrm{J}}{120\,\mathrm{J/K}}
=-3\,\mathrm{K}.
\end{aligned}
$$
Una variazione di $-3\,\mathrm{K}$ corrisponde a una variazione di $-3\,^\circ\mathrm{C}$. La temperatura finale è perciò $19\,^\circ\mathrm{C}$. Nel grafico $d$ indica il valore numerico della differenza $T_f-T_i$ in kelvin. Per $d<0$ anche il calore scambiato $Q$ è negativo.

::grafico{f="120*x" xmin=-4 xmax=4 ymin=-450 ymax=450 nomi="d,Q" legenda="Q=120d" punti="-3,-360,pieno" titolo="La variazione $d=-3$ in $\mathrm{K}$ corrisponde a $Q=-360\,\mathrm{J}$"}

:::

:::esempio{titolo="Temperatura iniziale a partire da quella finale"}
Con capacità termica $mc=120\,\mathrm{J/K}$ si osserva una temperatura finale di $27\,^\circ\mathrm{C}$ dopo un assorbimento di $600\,\mathrm{J}$. Dalla relazione $T_f-T_i=\dfrac{Q}{mc}$ si isola $T_i$ e si ottiene
$$
T_i=T_f-\frac{Q}{mc}.
$$
Il quoziente vale $5\,\mathrm{K}$, perciò la temperatura iniziale è $22\,^\circ\mathrm{C}$. Se $Q$ è positivo, la temperatura finale supera quella iniziale. Questo confronto controlla il segno della sottrazione nella formula inversa.
:::

:::osservazione{titolo="Condizioni per ricavare la massa"}
Se la massa $m$ è l'incognita, nella formula calorimetrica si può dividere per $c(T_f-T_i)$ soltanto quando il prodotto è diverso da zero. Per esempio, un campione cede $900\,\mathrm{J}$ e la sua temperatura scende di $5\,\mathrm{K}$. Se $c=600\,\mathrm{J/(kg\,K)}$, la massa vale
$$
m=\frac{-900\,\mathrm{J}}{600\,\mathrm{J/(kg\,K)}\cdot(-5\,\mathrm{K})}
 =0{,}3\,\mathrm{kg}.
$$
Il rapporto è positivo perché calore e variazione hanno lo stesso segno. Se la variazione è nulla, la formula dà $Q=0$ per ogni massa positiva. In quel caso l'uguaglianza è compatibile con tutte le masse ammesse quando $Q=0$. Se si misura $Q\ne0$, nessuna massa soddisfa il modello con quei dati.
:::

## Equazioni di secondo grado e radici

::::teorema{#quadratiche titolo="Discriminante e formula risolutiva"}
Siano $a$, $b$ e $c$ numeri reali con $a\ne0$. Per l'equazione $ax^2+bx+c=0$ si definisce il discriminante $\Delta=b^2-4ac$. Se $\Delta$ è non negativo, le soluzioni reali si calcolano con
$$
x=\frac{-b\pm\sqrt{\Delta}}{2a}.
$$
Per $\Delta>0$ si ottengono due radici distinte. Per $\Delta=0$ le due espressioni coincidono e si ha un'unica soluzione, detta radice doppia. Per $\Delta<0$ l'insieme delle soluzioni reali è vuoto. Il discriminante permette quindi di conoscere il numero delle soluzioni prima di calcolarle.

:::dimostrazione
Si trasforma l'equazione in un'uguaglianza che ha un quadrato nel primo membro. Moltiplicando per $4a$ e riordinando i termini si ottiene
$$
4a^2x^2+4abx=-4ac.
$$
Aggiungendo $b^2$ a entrambi i membri si trova $(2ax+b)^2=b^2-4ac=\Delta$. Un quadrato reale è non negativo. Per $\Delta\ge0$ si ha $2ax+b=\pm\sqrt{\Delta}$ e si può dividere per $2a$, perché $a\ne0$.
:::
::::

:::esempio{titolo="Due radici della stessa parabola"}
Per $x^2-5x+6=0$ si ha $\Delta=(-5)^2-4\cdot1\cdot6=1$. La formula fornisce
$$
x_1=\frac{5-1}{2}=2,\qquad x_2=\frac{5+1}{2}=3 .
$$
Poiché $(x-2)(x-3)=x^2-5x+6$, gli stessi valori si ottengono annullando un fattore alla volta. Sul grafico le due radici sono le ascisse dei punti in cui la parabola incontra l'asse $x$.

::grafico{f="x^2-5*x+6" xmin=0 xmax=5 ymin=-1 ymax=5 punti="2,0,pieno;3,0,pieno" titolo="La parabola ha due zeri, in $x=2$ e in $x=3$"}

:::

:::attenzione{titolo="Radice quadrata e soluzioni di un quadrato"}
Il simbolo $\sqrt{9}$ indica $3$. L'equazione $u^2=9$ ammette invece $u=3$ e $u=-3$, poiché entrambi hanno quadrato $9$. Nella formula $E_c=\dfrac12mv^2$, se $m>0$, $E_c\ge0$ e $v$ rappresenta il *modulo* della velocità, si usa $v=\sqrt{\dfrac{2E_c}{m}}$. Con $m=2\,\mathrm{kg}$ ed $E_c=16\,\mathrm{J}$, il modulo è $4\,\mathrm{m/s}$. La stessa energia si avrebbe con una componente di velocità di $-4\,\mathrm{m/s}$ se il moto fosse rettilineo lungo un asse orientato.
:::

:::esempio{titolo="Radice doppia e assenza di zeri reali"}
Il trinomio $x^2-4x+4$ è il quadrato $(x-2)^2$. Si annulla soltanto per $x=2$ e infatti il suo discriminante è $16-16=0$. Se si aggiunge $1$ al termine noto, l'equazione diventa
$$
(x-2)^2+1=0 .
$$
Per ogni $x$ reale il primo membro è almeno $1$, perciò l'equazione ha insieme delle soluzioni vuoto. Il discriminante del trinomio $x^2-4x+5$ è $16-20=-4$, in accordo con questo risultato. Nei due esempi il minimo è raggiunto per lo stesso valore $x=2$. A cambiare è la sua ordinata, che passa da zero a uno.
:::

## Sistemi di due equazioni

:::definizione{#sistemi titolo="Condizioni da soddisfare insieme"}
Una soluzione di un **sistema** di due equazioni in $x$ e $y$ è una coppia ordinata $(x,y)$ che soddisfa entrambe. Nella sostituzione si esprime una delle due incognite mediante l'altra in una delle equazioni e si usa quell'espressione nella seconda. Nel metodo di eliminazione si combinano le equazioni per annullare il coefficiente di una delle incognite. Se si sostituisce la seconda equazione con la seconda meno un multiplo della prima e si conserva la prima, la trasformazione è invertibile. Si recupera infatti l'equazione di partenza aggiungendo di nuovo lo stesso multiplo.
:::

:::esempio{titolo="Eliminazione e intersezione di rette"}
Si risolve il sistema
$$
\begin{cases}
x+y=7,\\
2x+y=10.
\end{cases}
$$
Si conserva la prima equazione e si sottrae il suo membro sinistro dal membro sinistro della seconda. Si sottraggono anche i membri destri. Si ottiene $x=10-7=3$, quindi $y=7-3=4$. La coppia soddisfa le uguaglianze $3+4=7$ e $2\cdot3+4=10$. In figura ciascuna retta contiene le coppie che soddisfano la sua equazione. Il punto $(3,4)$ è comune alle due rette.

::grafico{f="7-x;10-2*x" xmin=-1 xmax=7 ymin=-2 ymax=12 punti="3,4,pieno" segmenti="3,0,3,4;0,4,3,4" titolo="L'intersezione delle rette individua la coppia $(3,4)$"}

:::

:::esempio{titolo="Bilancio del volume e del soluto"}
Si mescolano due soluzioni che contengono lo stesso soluto, a concentrazioni di $3\,\mathrm{g/L}$ e $9\,\mathrm{g/L}$. Si assumono volumi additivi e assenza di perdite di soluto. Il volume finale è $0{,}8\,\mathrm{L}$ e la concentrazione finale è $6\,\mathrm{g/L}$, quindi la massa finale del soluto è $4{,}8\,\mathrm{g}$. Indicando con $x$ e $y$ i valori numerici dei due volumi in litri, si hanno due bilanci.
$$
\begin{cases}
x+y=0{,}8,\\
3x+9y=4{,}8.
\end{cases}
$$
Sottraendo dalla seconda equazione tre volte la prima si ottiene $6y=4{,}8-2{,}4=2{,}4$. Pertanto $y=0{,}4$ e $x=0{,}8-0{,}4=0{,}4$. I due volumi risultano positivi e la massa di soluto è $3\cdot0{,}4+9\cdot0{,}4=4{,}8$ grammi.
:::

:::osservazione{titolo="Dati compatibili e rette parallele"}
Se due equazioni rappresentano rette, rette incidenti danno una sola coppia. Rette coincidenti danno tutte le coppie di una stessa retta. Rette parallele e distinte danno un insieme vuoto. Per esempio, $x+y=5$ e $2x+2y=10$ esprimono lo stesso vincolo, perché la seconda è il doppio della prima. Se il secondo membro della seconda equazione vale $12$, dividendo per $2$ si ottiene $x+y=6$. Nessuna coppia può avere contemporaneamente somma $5$ e somma $6$.
:::

:::osservazione{titolo="Concentrazioni possibili in una miscela"}
Siano $C_1<C_2$ le concentrazioni delle due soluzioni iniziali, $V_1$ e $V_2$ i loro volumi non negativi, e $V=V_1+V_2>0$ il volume finale. Se il soluto si conserva, la concentrazione finale $C$ soddisfa $C_1V_1+C_2V_2=CV$. Sostituendo $V_1=V-V_2$ si ottiene
$$
V_2=\frac{C-C_1}{C_2-C_1}\,V .
$$
Poiché $V_2$ è compreso tra zero e $V$, il rapporto che lo moltiplica è compreso tra zero e uno. Perciò $C$ deve essere compresa tra $C_1$ e $C_2$. Se i due volumi sono entrambi positivi, la concentrazione finale è strettamente intermedia. Se invece le concentrazioni iniziali coincidono, il bilancio del soluto ripete quello del volume moltiplicato per la concentrazione comune. In questo caso i due bilanci determinano il totale e lasciano indeterminati i singoli volumi, purché la concentrazione finale abbia lo stesso valore.
:::

:::esempio{titolo="Calibrazione da due letture"}
La tensione $U$ letta da un sensore in un certo intervallo di temperatura è descritta dal modello $U=aT+b$. Qui $T$ e $U$ indicano i valori numerici rispettivamente in gradi Celsius e in volt. A $20\,^\circ\mathrm{C}$ si leggono $0{,}7\,\mathrm{V}$ e a $30\,^\circ\mathrm{C}$ si leggono $0{,}9\,\mathrm{V}$. I due dati impongono
$$
\begin{cases}
20a+b=0{,}7,\\
30a+b=0{,}9 .
\end{cases}
$$
Sottraendo la prima equazione dalla seconda si ottiene $10a=0{,}2$, quindi $a=0{,}02$. La prima equazione dà $b=0{,}3$. Nell'intervallo di calibrazione, per $T=23$ il modello fornisce $U=0{,}02\cdot23+0{,}3=0{,}76$, cioè $0{,}76\,\mathrm{V}$. Il secondo dato permette di distinguere il coefficiente $a$ dal termine costante $b$.
:::

## Dominio e soluzioni fisicamente ammissibili

:::attenzione{#condizioni titolo="Condizioni matematiche e condizioni del modello"}
Il dominio matematico raccoglie i valori per cui le espressioni hanno significato. Un denominatore deve essere diverso da zero. Un radicando di radice quadrata reale deve essere non negativo. Il modello può imporre ulteriori condizioni. Per esempio, un volume di liquido può essere limitato dalla capacità del recipiente e un tempo trascorso è maggiore o uguale a zero. Risolvere l'equazione e imporre questi vincoli sono due passaggi distinti.

Un'operazione non invertibile può aggiungere candidati. Per esempio, elevando al quadrato i membri di $\sqrt{x+5}=x-1$ si ricava $x^2-3x-4=0$, quindi $x=4$ oppure $x=-1$. Per $x=-1$ il primo membro vale $2$ e il secondo vale $-2$, perciò il valore è escluso. Per $x=4$ entrambi valgono $3$. In questo caso la condizione $x-1\ge0$ avrebbe escluso $-1$ prima del calcolo.
:::

:::esempio{titolo="Tempo di arrivo al suolo"}
In un modello di moto verticale l'altezza in metri ha valore numerico $h(t)=8+6t-2t^2$, con $t$ valore numerico del tempo trascorso in secondi. Il modello descrive il moto dal lancio fino al primo contatto con il suolo, quindi si cerca un valore $t\ge0$ con $h(t)=0$. Dividendo l'equazione per $-2$ e scomponendo il polinomio si ottiene
$$
\begin{aligned}
t^2-3t-4&=0 \\[6pt]
(t-4)(t+1)&=0.
\end{aligned}
$$
Le radici algebriche sono $4$ e $-1$. Soltanto $4$ soddisfa il vincolo sul tempo trascorso. Il contatto avviene quindi a $4\,\mathrm{s}$ dall'istante iniziale. L'altra intersezione corrisponde a un prolungamento algebrico del grafico.

::grafico{f="8+6*x-2*x^2" xmin=-2 xmax=5 ymin=-6 ymax=14 nomi="t,h" legenda="h=8+6t-2t^2" punti="-1,0,vuoto;4,0,pieno" titolo="Con $t$ in $\mathrm{s}$ e $h$ in $\mathrm{m}$, lo zero ammesso è $t=4$"}

:::

:::osservazione{titolo="Controllo della risposta nel problema iniziale"}
Dopo aver individuato un risultato si può sostituirlo nella formula di partenza. Nel modello dell'altezza, $h(4)=8+24-32=0$, quindi il tempo trovato soddisfa la condizione di arrivo al suolo. Nella formula della densità, la sostituzione verifica anche la coerenza delle unità. In un sistema di bilanci, invece, la verifica richiede di ritrovare sia il volume totale sia la massa di soluto. La verifica ha quindi la stessa struttura del problema iniziale e riguarda tutte le condizioni che definiscono una soluzione.
:::

:::esempio{titolo="Volume calcolato e capacità del recipiente"}
Per sciogliere $0{,}04\,\mathrm{mol}$ di soluto e ottenere una concentrazione di $0{,}08\,\mathrm{mol/L}$, la relazione $c=\dfrac{n}{V}$ richiede il volume finale
$$
V=\frac{0{,}04\,\mathrm{mol}}{0{,}08\,\mathrm{mol/L}}
 =0{,}50\,\mathrm{L}.
$$
Il volume è positivo e soddisfa la relazione matematica. Un recipiente con capacità di $0{,}35\,\mathrm{L}$ impone però $V\le0{,}35\,\mathrm{L}$. Poiché il volume calcolato supera questo limite, il recipiente è insufficiente per preparare la soluzione con i dati assegnati. La sostituzione nella formula verifica la concentrazione, mentre il confronto con la capacità decide se il risultato si può realizzare nel problema.
:::
