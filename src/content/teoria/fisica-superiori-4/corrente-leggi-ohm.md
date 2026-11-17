---
titolo: Corrente elettrica, leggi di Ohm ed effetto Joule
sommario: Verso e intensità della corrente, resistenza, temperatura, potenza elettrica,
  misure e consumo.
---

## Intensità e verso della corrente

:::definizione{#corrente titolo="Carica che attraversa una sezione"}
Si considera una sezione trasversale del filo e si fissa un verso positivo lungo il conduttore e si indica con $\Delta q$ il saldo algebrico della carica che attraversa la sezione nel tempo $\Delta t$. Una carica positiva nel verso fissato dà contributo positivo. Una carica negativa con la stessa direzione di moto dà contributo negativo. La **corrente media** è

$$
I_{\mathrm{media}}=\frac{\Delta q}{\Delta t},\qquad 1\,\mathrm{A}=1\,\mathrm{C/s}.
$$

L'ampere misura coulomb al secondo. Se la corrente è costante, $\Delta q=I\Delta t$. Per esempio $0{,}50\,\mathrm{A}$ per un minuto corrispondono a $30\,\mathrm{C}$. La corrente riguarda il passaggio attraverso la sezione durante una misura. La carica presente nel metallo in un singolo istante è un'altra grandezza.

Il **verso convenzionale** della corrente è il verso in cui si muoverebbero cariche positive. In un filo metallico gli elettroni hanno carica negativa, quindi la loro deriva media è opposta a quel verso. Se si inverte l'orientazione di riferimento, si inverte il segno attribuito a $I$, mentre il flusso fisico attraverso la sezione resta lo stesso.
:::

:::esempio{titolo="Corrente che cambia durante la misura"}
Una corrente vale $1{,}2\,\mathrm{A}$ per $5\,\mathrm{s}$ e $0{,}30\,\mathrm{A}$ per i $15\,\mathrm{s}$ successivi, sempre nello stesso verso. La carica totale si ricava sommando la carica che passa in ciascun tratto.

$$
\Delta q=(1{,}2\cdot 5+0{,}30\cdot 15)\,\mathrm{C}=10{,}5\,\mathrm{C},\qquad I_{\mathrm{media}}=\frac{10{,}5}{20}\,\mathrm{A}=0{,}525\,\mathrm{A}.
$$

Il secondo tratto dura tre volte il primo, quindi ha un peso maggiore nella media. Se invece la corrente del secondo tratto è opposta, al termine $4{,}5\,\mathrm{C}$ va assegnato segno negativo e il saldo diventa $1{,}5\,\mathrm{C}$. Il modulo della carica transitata nei due versi complessivamente vale ancora $10{,}5\,\mathrm{C}$.

::grafico{f="0" area="1.2;0;0;5|0.3;0;5;20" xmin=0 xmax=20 ymin=0 ymax=1.5 nomi="t,I" punti="5,1.2,pieno;20,0.3,pieno" titolo="Tempo in secondi e corrente in ampere. L'area sotto il grafico è la carica: $6{,}0\,\mathrm{C}$ nel primo tratto e $4{,}5\,\mathrm{C}$ nel secondo."}
:::

:::attenzione
Il segno di $I$ dipende dal verso positivo scelto e dal saldo di carica, e non dal segno dei portatori. Se $3{,}0\cdot10^{18}$ elettroni al secondo attraversano la sezione da destra verso sinistra, la carica negativa che va verso sinistra equivale a carica positiva che va verso destra. Con verso positivo da sinistra a destra si ha

$$
I=\frac{3{,}0\cdot10^{18}\cdot1{,}60\cdot10^{-19}\,\mathrm{C}}{1\,\mathrm{s}}=+0{,}48\,\mathrm{A}.
$$

Con il verso positivo opposto lo stesso flusso fisico darebbe $-0{,}48\,\mathrm{A}$.
:::

:::esempio{titolo="Quanti elettroni in un secondo"}
Ogni elettrone trasporta una carica di modulo $e=1{,}60\cdot10^{-19}\,\mathrm{C}$, quindi il numero di elettroni che attraversa la sezione nel tempo $\Delta t$ è $N=\dfrac{|I|\Delta t}{e}$. Per $I=1{,}0\,\mathrm{A}$ e $\Delta t=1\,\mathrm{s}$

$$
N=\frac{1{,}0\cdot1}{1{,}60\cdot10^{-19}}=6{,}25\cdot10^{18}.
$$

Un ampere corrisponde dunque al passaggio di circa $6{,}25$ miliardi di miliardi di elettroni al secondo. Poiché i portatori disponibili sono moltissimi, la deriva di ciascuno può essere molto lenta.
:::

## Portatori e velocità di deriva

:::teorema{#deriva titolo="Corrente di un tipo di portatore"}
In un tratto uniforme con un solo tipo di portatore, sia $n$ il numero di portatori per unità di volume, $q$ la carica di ciascuno, $A$ l'area della sezione e $v_d$ il modulo della velocità di deriva. Nel tempo $\Delta t$ il moto di deriva porta attraverso la sezione i portatori contenuti mediamente in un volume $Av_d\Delta t$. Moltiplicando per $n|q|$ si ottiene il modulo della carica transitata e dividendo per il tempo segue

$$
|I|=n|q|Av_d.
$$

La densità $n$ si misura in $\mathrm{m^{-3}}$ e la sezione in $\mathrm{m^2}$. Il prodotto con $v_d$ dà il numero di portatori che passano in un secondo. Il moto casuale degli elettroni contribuisce in entrambi i versi. La deriva dovuta al campo elettrico determina il saldo.
:::

:::esempio{titolo="Ordine di grandezza della deriva"}
Consideriamo $n=8{,}0\cdot10^{28}\,\mathrm{m^{-3}}$, $|q|=1{,}60\cdot10^{-19}\,\mathrm{C}$, $A=1{,}0\,\mathrm{mm^2}=1{,}0\cdot10^{-6}\,\mathrm{m^2}$ e $I=1{,}0\,\mathrm{A}$. La velocità di deriva segue isolando $v_d$.

$$
v_d=\frac{I}{n|q|A}=\frac{1{,}0}{8{,}0\cdot10^{28}\cdot1{,}60\cdot10^{-19}\cdot10^{-6}}\,\mathrm{m/s}\simeq7{,}81\cdot10^{-5}\,\mathrm{m/s}.
$$

In un secondo la deriva media è dunque circa $0{,}078\,\mathrm{mm}$. La rapida risposta del circuito alla chiusura di un interruttore dipende dalla propagazione della variazione del campo elettromagnetico nel circuito. Gli elettroni già presenti vicino al dispositivo partecipano al moto di deriva.
:::

:::esempio{titolo="Tempo per percorrere un metro"}
Con la velocità di deriva $7{,}81\cdot10^{-5}\,\mathrm{m/s}$ del filo da $1{,}0\,\mathrm{mm^2}$ percorso da $1{,}0\,\mathrm{A}$, un elettrone che avanza con velocità costante percorre $1{,}0\,\mathrm{m}$ in

$$
t=\frac{1{,}0\,\mathrm{m}}{7{,}81\cdot10^{-5}\,\mathrm{m/s}}\simeq1{,}28\cdot10^{4}\,\mathrm{s},
$$

cioè circa $3{,}6\,\mathrm{h}$. Se la corrente nello stesso filo raddoppia, $v_d$ raddoppia, perché è proporzionale a $I$ quando $n$ e $A$ sono fissati, e il tempo si dimezza.
:::

:::attenzione
La velocità di deriva è molto minore della velocità dell'agitazione termica. Nel modello classico di un gas di elettroni liberi a $300\,\mathrm K$ la velocità quadratica media vale

$$
v=\sqrt{\frac{3k_BT}{m_e}}=\sqrt{\frac{3\cdot1{,}38\cdot10^{-23}\cdot300}{9{,}11\cdot10^{-31}}}\,\mathrm{m/s}\simeq1{,}2\cdot10^{5}\,\mathrm{m/s}.
$$

La deriva di $7{,}8\cdot10^{-5}\,\mathrm{m/s}$ è circa $10^{-9}$ volte questo valore. Il moto termico ha direzioni casuali e un saldo di carica nullo attraverso la sezione, perciò solo la deriva contribuisce a $I$.
:::

## Resistenza e caratteristica tensione-corrente

:::teorema{#ohm titolo="Conduttore ohmico a condizioni fissate"}
Un componente è **ohmico** nell'intervallo di misura se la tensione ai suoi capi è proporzionale alla corrente, mantenendo costanti le condizioni, in particolare la temperatura. Scriviamo $V$ per la caduta di tensione nel verso della corrente convenzionale attraverso un resistore.

$$
V=RI,\qquad 1\,\Omega=1\,\mathrm{V/A}.
$$

Se l'asse orizzontale è $I$ e quello verticale è $V$, la pendenza della retta è $R$. Dati due punti, si divide la variazione verticale per la variazione orizzontale. Se gli assi sono scambiati, il grafico di $I$ in funzione di $V$ ha pendenza $\dfrac{1}{R}$ in $\mathrm{A/V}$. La lettura delle unità identifica quale rapporto fornisce il grafico.
:::

:::esempio{titolo="Gli stessi resistori nei due grafici"}
Per il resistore da $2\,\Omega$, a $I=1\,\mathrm{A}$ si ha $V=2\,\mathrm{V}$, mentre a $I=2\,\mathrm{A}$ si ha $V=4\,\mathrm{V}$. Nel grafico $V$ in funzione di $I$ la pendenza è quindi $\dfrac{4-2}{2-1}\,\mathrm{V/A}=2\,\Omega$. Per $R=4\,\Omega$ si ha una pendenza doppia. Nel grafico con gli assi scambiati, a $V=4\,\mathrm{V}$ il primo resistore assorbe $2\,\mathrm{A}$ e il secondo $1\,\mathrm{A}$. Ora la retta più inclinata corrisponde alla resistenza minore.

::grafico{f="2*x;4*x" xmin=0 xmax=3 ymin=0 ymax=13 nomi="I,V" legenda="R=2\,\Omega; R=4\,\Omega" punti="1,2,pieno;2,4,pieno" titolo="Tensione in volt e corrente in ampere. La pendenza misura la resistenza."}

::grafico{f="x/2;x/4" xmin=0 xmax=8 ymin=0 ymax=5 nomi="V,I" legenda="R=2\,\Omega; R=4\,\Omega" punti="4,2,pieno;4,1,pieno" titolo="Corrente in ampere e tensione in volt. La pendenza è il reciproco della resistenza."}
:::

:::attenzione
Il rapporto $\dfrac{V}{I}$ in un solo punto si può misurare per qualsiasi caratteristica con $I\neq0$. Per verificare la legge di Ohm occorre controllare che resti costante nell'intervallo. Un componente che assorbe $0{,}10\,\mathrm{A}$ a $2\,\mathrm{V}$ e $0{,}15\,\mathrm{A}$ a $4\,\mathrm{V}$ dà rapporti di $20\,\Omega$ e circa $26{,}7\,\Omega$. Se le condizioni di misura sono le stesse, una sola resistenza costante non descrive i due dati. Un filamento che si scalda può dare proprio una caratteristica che cambia pendenza.
:::

:::osservazione
Un componente è ohmico se la caratteristica con $I$ in ordinata e $V$ in ascissa è una retta per l'origine. La caratteristica del componente dell'avvertenza precedente è una curva la cui pendenza diminuisce al crescere di $V$. La retta per l'origine e per il primo punto darebbe $0{,}20\,\mathrm{A}$ a $4\,\mathrm{V}$, contro i $0{,}15\,\mathrm{A}$ misurati.

::grafico{f="100*(x/2)^0.585;50*x" xmin=0 xmax=6 ymin=0 ymax=400 nomi="V,I (mA)" legenda="\mathrm{componente\ non\ ohmico};R=20\,\Omega" punti="2,100,pieno;4,150,pieno" titolo="Tensione in volt e corrente in milliampere. La curva si scosta dalla retta di un resistore da $20\,\Omega$ a partire dal punto in comune."}
:::

## Resistività, lunghezza e sezione

:::teorema{#resistivita titolo="Seconda legge di Ohm"}
A temperatura fissata, per un filo omogeneo e uniforme, di lunghezza $L$ e area della sezione $A$, si ha

$$
R=\rho\frac{L}{A}.
$$

La **resistività** $\rho$ descrive il materiale e ha unità $\Omega\,\mathrm{m}$. Raddoppiando la lunghezza allo stesso materiale e alla stessa sezione si ottiene resistenza doppia. Raddoppiando il diametro circolare, invece, $A=\dfrac{\pi d^2}{4}$ quadruplica e la resistenza diventa un quarto.

Se il filo si allunga a volume costante $\mathcal V=LA$ e la resistività rimane la stessa, la sezione diminuisce. Sostituendo $A=\dfrac{\mathcal V}{L}$ si trova $R=\rho\dfrac{L^2}{\mathcal V}$. In queste ipotesi lunghezza doppia significa resistenza quadrupla, perché cambiano sia il numeratore sia il denominatore della legge originale.
:::

::::teorema{#filo-tratti titolo="Resistenza e dimensioni del filo"}
Si considera un filo omogeneo di lunghezza $L=NL_1$ e sezione $A=MA_1$, con $N$ e $M$ interi, a temperatura fissata. Ogni filo di lunghezza $L_1$ e sezione $A_1$ dello stesso materiale ha la stessa resistenza $R_1$ e obbedisce alla legge di Ohm. Allora la resistenza del filo grande è

$$
R=\frac{N}{M}R_1=\rho\frac{L}{A},\qquad \rho=\frac{R_1A_1}{L_1}.
$$

La costante $\rho$ è la stessa per tutti i fili del materiale, perché $R_1$, $A_1$ e $L_1$ si riferiscono a un filo qualsiasi di quel materiale. Con questa relazione si prevede la resistenza di un filo di dimensioni diverse da quelle misurate. Spezzoni da $10\,\mathrm{m}$ e $1{,}0\,\mathrm{mm^2}$ con $R_1=0{,}17\,\Omega$ danno, per $L=30\,\mathrm{m}$ e $A=2{,}0\,\mathrm{mm^2}$, $N=3$, $M=2$ e $R=\dfrac{3}{2}\cdot0{,}17\,\Omega=0{,}255\,\Omega$. Per rapporti non interi $\dfrac{L}{L_1}$ e $\dfrac{A}{A_1}$ la formula è confermata dalle misure.

:::dimostrazione
Si costruisce il filo grande con fili uguali a quello di riferimento, prima uno dopo l'altro per la lunghezza e poi affiancati per la sezione.

Per la lunghezza si dispongono $N$ spezzoni in fila. La carica non si accumula nei punti di contatto, quindi in ogni spezzone passa la stessa corrente $I$. La tensione ai capi del filo è la somma delle tensioni dei singoli spezzoni, perché la differenza di potenziale fra gli estremi è la somma delle differenze di potenziale fra punti consecutivi. Ogni spezzone ha tensione $R_1I$, quindi $V=NR_1I$ e la resistenza della fila è $\dfrac{V}{I}=NR_1$.

Per la sezione si affiancano $M$ file uguali, ciascuna di resistenza $NR_1$, con gli estremi collegati insieme. Le $M$ file hanno gli stessi estremi, quindi la stessa tensione $V$ e in ciascuna passa la corrente $\dfrac{V}{NR_1}$. Nei punti di collegamento la carica si conserva, perciò la corrente totale è la somma

$$
I=M\frac{V}{NR_1},\qquad R=\frac{V}{I}=\frac{N}{M}R_1.
$$

Sostituendo $N=\dfrac{L}{L_1}$ e $M=\dfrac{A}{A_1}$ si ottiene

$$
R=\frac{R_1A_1}{L_1}\cdot\frac{L}{A}=\rho\frac{L}{A}.
$$
:::
::::

:::esempio{titolo="Dal diametro alla resistenza"}
Un filo di rame con $\rho=1{,}7\cdot10^{-8}\,\Omega\,\mathrm{m}$ è lungo $5{,}0\,\mathrm{m}$ e ha diametro $1{,}0\,\mathrm{mm}$. L'area della sezione circolare è $A=\dfrac{\pi d^2}{4}=\pi\,(0{,}50\cdot10^{-3}\,\mathrm{m})^2=7{,}85\cdot10^{-7}\,\mathrm{m^2}$, quindi

$$
R=\rho\frac{L}{A}=\frac{1{,}7\cdot10^{-8}\cdot5{,}0}{7{,}85\cdot10^{-7}}\,\Omega=0{,}108\,\Omega.
$$

Con diametro $2{,}0\,\mathrm{mm}$ l'area diventa quadrupla e $R=0{,}027\,\Omega$. Un filo di alluminio con $\rho=2{,}8\cdot10^{-8}\,\Omega\,\mathrm{m}$, lungo $10\,\mathrm{m}$ e con sezione $1{,}0\,\mathrm{mm^2}=1{,}0\cdot10^{-6}\,\mathrm{m^2}$, ha $R=0{,}28\,\Omega$, contro $0{,}17\,\Omega$ del rame con le stesse dimensioni.

::grafico{f="21.65*x;5.411*x" xmin=0 xmax=10 ymin=0 ymax=250 nomi="L,R (mΩ)" legenda="d=1{,}0\,\mathrm{mm};d=2{,}0\,\mathrm{mm}" punti="5,108.2,pieno;5,27.1,pieno" titolo="Lunghezza in metri e resistenza in milliohm per due fili di rame. A parità di lunghezza la resistenza è inversamente proporzionale al quadrato del diametro."}
:::

:::osservazione
Le resistività a $20\,{}^\circ\mathrm{C}$ di alcuni conduttori sono:

- rame $1{,}7\cdot10^{-8}\,\Omega\,\mathrm{m}$;
- alluminio $2{,}8\cdot10^{-8}\,\Omega\,\mathrm{m}$;
- tungsteno $5{,}6\cdot10^{-8}\,\Omega\,\mathrm{m}$;
- nichel-cromo (lega) $1{,}1\cdot10^{-6}\,\Omega\,\mathrm{m}$.

Un filo di nichel-cromo ha resistenza circa $65$ volte quella di un filo di rame con le stesse dimensioni, perché $\dfrac{1{,}1\cdot10^{-6}}{1{,}7\cdot10^{-8}}\simeq65$. Per questo le leghe di questo tipo si usano negli elementi riscaldanti. Per ottenere $30\,\Omega$ con sezione $0{,}50\,\mathrm{mm^2}$ bastano circa $14\,\mathrm{m}$ di nichel-cromo, mentre servirebbero circa $880\,\mathrm{m}$ di rame.
:::

:::attenzione
Resistenza e resistività sono grandezze diverse, con unità diverse. La resistività è una proprietà del materiale a una data temperatura, la resistenza dipende anche dalla forma. Due fili di rame da $1{,}0\,\mathrm{mm^2}$, lunghi $1{,}0\,\mathrm{m}$ e $10\,\mathrm{m}$, hanno la stessa $\rho=1{,}7\cdot10^{-8}\,\Omega\,\mathrm{m}$ e resistenze $0{,}017\,\Omega$ e $0{,}17\,\Omega$.
:::

:::esempio{titolo="Conversione della sezione di un filo"}
Un filo di resistività $1{,}7\cdot10^{-8}\,\Omega\,\mathrm{m}$ è lungo $10\,\mathrm{m}$ e ha sezione $1{,}0\,\mathrm{mm^2}$. Poiché $1\,\mathrm{mm}=10^{-3}\,\mathrm{m}$, il fattore di conversione si eleva al quadrato per ottenere $1\,\mathrm{mm^2}=10^{-6}\,\mathrm{m^2}$.

$$
R=\frac{1{,}7\cdot10^{-8}\cdot10}{1{,}0\cdot10^{-6}}\,\Omega=0{,}17\,\Omega.
$$

Se si deve progettare un filo della stessa sezione con $R=0{,}34\,\Omega$, si isola $L$ e si trova $20\,\mathrm{m}$. Questo controllo è coerente con il raddoppio della resistenza a materiale e sezione fissati.
:::

## Resistenza e temperatura

:::teorema{#temperatura-resistenza titolo="Modello lineare attorno a una temperatura"}
Per molti metalli, in un intervallo limitato intorno a una temperatura di riferimento $T_0$, la resistenza si può approssimare con

$$
R(T)=R_0[1+\alpha(T-T_0)].
$$

$R_0$ è la resistenza misurata a $T_0$ e $\alpha$ è il coefficiente termico riferito a quel valore. Il prodotto $\alpha(T-T_0)$ è la variazione relativa di resistenza, senza unità. Una differenza di $50\,{}^\circ\mathrm{C}$ è anche $50\,\mathrm{K}$. La costante $273{,}15$ delle scale assoluta e Celsius si elimina quando si sottraggono due temperature.

Per $R_0=10\,\Omega$ a $20\,{}^\circ\mathrm{C}$, $\alpha=4{,}0\cdot10^{-3}\,\mathrm{K^{-1}}$ e temperatura finale di $70\,{}^\circ\mathrm{C}$, il fattore di variazione è $1+0{,}004\cdot50=1{,}20$ e $R=12\,\Omega$. A tensione fissa, la corrente si riduce al rapporto $\dfrac{10}{12}$ del valore iniziale. Il calo della corrente è circa il $17\%$, mentre la crescita della resistenza è il $20\%$, perché la corrente è inversamente proporzionale alla resistenza.

::grafico{f="10*(1+0.004*(x-20))" xmin=0 xmax=100 ymin=0 ymax=14 nomi="T,R (Ω)" punti="20,10,pieno;70,12,pieno" titolo="Temperatura in gradi Celsius. La retta descrive l'intervallo per cui vale il modello."}
:::

:::attenzione
Il modello lineare vale dove $\alpha$ rimane circa costante. Con $R_0=10\,\Omega$ a $20\,{}^\circ\mathrm{C}$ e $\alpha=4{,}0\cdot10^{-3}\,\mathrm{K^{-1}}$, la legge darebbe $R=0$ a $T=20-\dfrac{1}{4{,}0\cdot10^{-3}}=-230\,{}^\circ\mathrm{C}$ e valori negativi al di sotto. Una resistenza negativa non ha significato per un filo passivo, quindi a quelle temperature il modello non è applicabile. Alcuni materiali, come i semiconduttori, hanno inoltre una resistenza che diminuisce al crescere della temperatura.
:::

:::esempio{titolo="Termometro a resistenza"}
Un termometro a resistenza di platino ha $R_0=100\,\Omega$ a $T_0=0\,{}^\circ\mathrm{C}$ e $\alpha=3{,}85\cdot10^{-3}\,\mathrm{K^{-1}}$ riferito a $T_0$. A $100\,{}^\circ\mathrm{C}$ la resistenza vale $R=100\,(1+3{,}85\cdot10^{-3}\cdot100)\,\Omega=138{,}5\,\Omega$. Se la misura dà $R=118\,\Omega$, si isola la temperatura nella legge lineare:

$$
T=T_0+\frac{1}{\alpha}\left(\frac{R}{R_0}-1\right)=\frac{1}{3{,}85\cdot10^{-3}}\cdot0{,}18\,{}^\circ\mathrm{C}\simeq46{,}8\,{}^\circ\mathrm{C}.
$$

:::

## Potenza elettrica ed effetto Joule

:::teorema{#joule titolo="Potenza assorbita da un resistore"}
Nel verso della corrente attraverso il resistore, ciascun coulomb attraversa una caduta di potenziale $V$ e trasferisce $V$ joule per coulomb. In un tempo $\Delta t$ passa la carica $\Delta q$. Poiché l'energia trasferita è $V\Delta q$, la potenza è

$$
P=\frac{V\Delta q}{\Delta t}=VI.
$$

Per un resistore ohmico si possono sostituire $V=RI$ o $I=\dfrac{V}{R}$, ottenendo

$$
P=RI^2=\frac{V^2}{R}.
$$

La potenza è energia trasferita per unità di tempo, in watt. Nel resistore l'energia elettrica si trasforma in energia interna e viene in parte o interamente ceduta come calore, a seconda delle condizioni.
:::

:::esempio{titolo="Una sostituzione sotto due condizioni diverse"}
Un resistore da $12\,\Omega$ a $6\,\mathrm{V}$ assorbe $0{,}50\,\mathrm{A}$ e dissipa $3\,\mathrm{W}$. Si aumenta la resistenza a $24\,\Omega$. Se un generatore ideale mantiene $6\,\mathrm{V}$, la corrente scende a $0{,}25\,\mathrm{A}$ e la potenza diventa $1{,}5\,\mathrm{W}$. Se invece una sorgente mantiene $0{,}50\,\mathrm{A}$, la caduta di tensione sale a $12\,\mathrm{V}$ e la potenza diventa $6\,\mathrm{W}$. Perciò il significato del confronto dipende dalla grandezza mantenuta costante.

::grafico{f="36/x;0.25*x" xmin=0 xmax=30 ymin=0 ymax=9 nomi="R,P (W)" legenda="V=6\,\mathrm{V};I=0{,}50\,\mathrm{A}" punti="12,3,pieno;24,1.5,pieno;24,6,pieno" titolo="Resistenza in ohm. In $R=12\,\Omega$ le curve si incontrano. In $R=24\,\Omega$ danno potenze diverse."}
:::

:::esempio{titolo="Resistenza di una lampadina accesa"}
Una lampadina porta le indicazioni $60\,\mathrm{W}$ e $230\,\mathrm{V}$. Nelle condizioni nominali, dalla relazione $P=VI$ e da $P=\dfrac{V^2}{R}$ si ricavano

$$
I=\frac{P}{V}=\frac{60}{230}\,\mathrm{A}=0{,}261\,\mathrm{A},\qquad R=\frac{V^2}{P}=\frac{230^2}{60}\,\Omega\simeq882\,\Omega.
$$

Questa è la resistenza del filamento acceso. A freddo il filamento ha una resistenza molto minore, perché la resistenza di un metallo cresce con la temperatura.
:::

:::esempio{titolo="Calore dissipato nei cavi"}
Un filo di rame lungo $10\,\mathrm{m}$ con sezione $1{,}0\,\mathrm{mm^2}$ ha $R=0{,}17\,\Omega$. Percorso da $10\,\mathrm{A}$ dissipa

$$
P=RI^2=0{,}17\cdot10^2\,\mathrm{W}=17\,\mathrm{W}.
$$

Con sezione $2{,}5\,\mathrm{mm^2}$ la resistenza è $R=\dfrac{1{,}7\cdot10^{-8}\cdot10}{2{,}5\cdot10^{-6}}\,\Omega=0{,}068\,\Omega$ e la potenza dissipata scende a $6{,}8\,\mathrm{W}$. A parità di corrente la potenza è proporzionale a $R$. I cavi destinati a correnti maggiori hanno perciò sezione maggiore.

::grafico{f="0.17*x^2;0.068*x^2" xmin=0 xmax=16 ymin=0 ymax=45 nomi="I,P (W)" legenda="A=1{,}0\,\mathrm{mm^2};A=2{,}5\,\mathrm{mm^2}" punti="10,17,pieno;10,6.8,pieno" titolo="Corrente in ampere. La potenza dissipata cresce con il quadrato della corrente."}
:::

## Energia, kilowattora e rendimento

:::definizione{#energia-consumo titolo="Energia trasferita in un intervallo"}
Se la potenza è costante, l'energia trasferita nell'intervallo $\Delta t$ è $E=P\Delta t$. Per un apparecchio che cambia potenza durante l'uso si sommano le energie dei singoli intervalli o si moltiplica la potenza media per il tempo totale.

$$
1\,\mathrm{kWh}=1000\,\mathrm{W}\cdot3600\,\mathrm{s}=3{,}6\cdot10^6\,\mathrm{J}.
$$

Un dispositivo da $1{,}5\,\mathrm{kW}$ acceso per $2\,\mathrm{h}$ assorbe $3\,\mathrm{kWh}$, pari a $1{,}08\cdot10^7\,\mathrm{J}$. Il kilowatt indica quanto rapidamente si trasferisce energia, mentre il kilowattora indica quanta energia è stata trasferita. Con un costo unitario in euro per kilowattora, si moltiplicano il costo unitario e l'energia in $\mathrm{kWh}$.
:::

:::esempio{titolo="Calore utile durante il riscaldamento"}
Un riscaldatore da $1000\,\mathrm{W}$ trasferisce all'acqua la frazione $\eta=0{,}80$ dell'energia elettrica assorbita. Si devono scaldare $1{,}0\,\mathrm{kg}$ d'acqua di $20\,\mathrm{K}$, con calore specifico $4180\,\mathrm{J/(kg\,K)}$. La potenza utile è $\eta P=800\,\mathrm{W}$, perciò si divide il calore richiesto per $800\,\mathrm{J/s}$.

$$
\Delta t=\frac{mc\Delta T}{\eta P}=\frac{1{,}0\cdot4180\cdot20}{0{,}80\cdot1000}\,\mathrm{s}\simeq105\,\mathrm{s}.
$$

Usare $1000\,\mathrm{J/s}$ al denominatore darebbe circa $84\,\mathrm{s}$ e presupporrebbe il trasferimento integrale dell'energia elettrica all'acqua. Con lo stesso obiettivo termico, la presenza di perdite aumenta il tempo richiesto.
:::

:::esempio{titolo="Costo dell'energia di un forno"}
Con un costo ipotizzato di $0{,}25\,€/\mathrm{kWh}$, un forno da $2{,}0\,\mathrm{kW}$ acceso per $90\,\mathrm{min}$, cioè $1{,}5\,\mathrm{h}$, assorbe

$$
E=2{,}0\cdot1{,}5\,\mathrm{kWh}=3{,}0\,\mathrm{kWh},
$$

e il costo è $3{,}0\cdot0{,}25\,€=0{,}75\,€$.
:::

:::attenzione
Un apparecchio da $2\,\mathrm{kW}$ acceso per $30\,\mathrm{min}$ e uno da $1\,\mathrm{kW}$ acceso per $1\,\mathrm{h}$ assorbono la stessa energia, $1\,\mathrm{kWh}$, anche se le potenze sono diverse.
:::

## Generatori e strumenti di misura

:::definizione{#misure titolo="Amperometro, voltmetro e generatore ideale"}
Una sorgente di tensione ideale mantiene la differenza di potenziale assegnata ai morsetti nel modello. La corrente dipende dal carico. Un resistore da $12\,\Omega$ collegato a una sorgente da $6\,\mathrm{V}$ assorbe $0{,}50\,\mathrm{A}$, mentre un resistore da $24\,\Omega$ ne assorbe $0{,}25\,\mathrm{A}$. Il generatore trasferisce energia al circuito. In regime stazionario la stessa carica che entra in un resistore ne esce nel tempo considerato.

L'**amperometro** interrompe il percorso del ramo e si inserisce in serie, così la carica che passa nel ramo passa anche nello strumento. La resistenza ideale dello strumento è nulla, perciò la caduta di tensione ai suoi capi è nulla. Il **voltmetro** si collega ai due nodi che definiscono la tensione, quindi è in parallelo al componente. La sua resistenza ideale è infinita, così nel ramo di misura non passa corrente.

Se il voltmetro reale ha resistenza comparabile a quella del carico, introduce un ramo attraversato da una corrente apprezzabile. Per ridurre la perturbazione si usa una resistenza d'ingresso molto maggiore di quella del carico. Le associazioni e le leggi di Kirchhoff consentono di analizzare quantitativamente queste situazioni nel capitolo sui circuiti.
:::

:::esempio{titolo="Amperometro con resistenza interna"}
Un generatore ideale da $6{,}0\,\mathrm{V}$ alimenta un resistore da $12\,\Omega$. Senza strumenti la corrente è $\dfrac{6{,}0}{12}\,\mathrm{A}=0{,}50\,\mathrm{A}$. Un amperometro reale con resistenza interna $r_A=0{,}50\,\Omega$, inserito in serie, aggiunge la sua resistenza a quella del resistore, come per i tratti di filo in serie:

$$
I=\frac{6{,}0}{12+0{,}50}\,\mathrm{A}=0{,}48\,\mathrm{A}.
$$

Lo strumento segna $0{,}48\,\mathrm{A}$ invece di $0{,}50\,\mathrm{A}$, con errore relativo $\dfrac{0{,}50-0{,}48}{0{,}50}=4\%$. Il voltmetro in parallelo al resistore legge $V=0{,}48\cdot12\,\mathrm{V}=5{,}76\,\mathrm{V}$. Se la sua resistenza interna è $1{,}0\,\mathrm{M\Omega}$, nel suo ramo passano $\dfrac{5{,}76}{1{,}0\cdot10^{6}}\,\mathrm{A}=5{,}8\,\mu\mathrm{A}$, trascurabili rispetto a $0{,}48\,\mathrm{A}$.

::schema{riferimento=0 linee="0,1.48 0,3 1.4,3;2.6,3 7,3 7,2.12;7,0.88 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;1.4,2.64 2.6,2.64 2.6,3.36 1.4,3.36 1.4,2.64;6.73,0.88 7.27,0.88 7.27,2.12 6.73,2.12 6.73,0.88;4.5,3 4.5,2.12;4.5,0.88 4.5,0;3.9,0.88 5.1,0.88 5.1,2.12 3.9,2.12 3.9,0.88" punti="4.5,3,,pieno;4.5,0,,pieno" etichette="0.9,1.32,6 V;2,3,A;4.5,1.5,V;7.9,1.5,12 Ω" titolo="L'amperometro è in serie con il resistore, il voltmetro è collegato ai suoi stessi nodi"}
:::

## Densità di corrente e forma locale della legge di Ohm

:::definizione{#densita-corrente titolo="Densità di corrente"}
In un filo di sezione $A$ percorso da una corrente $I$ uniforme e perpendicolare alla sezione, la **densità di corrente** è

$$
J=\frac{I}{A},\qquad [J]=\mathrm{A/m^2}.
$$

Misura quanta corrente passa per unità di area. A parità di $I$ è minore nel filo di sezione maggiore. In un filo da $1{,}0\,\mathrm{mm^2}$ con $1{,}0\,\mathrm{A}$ vale $J=\dfrac{1{,}0}{1{,}0\cdot10^{-6}}\,\mathrm{A/m^2}=1{,}0\cdot10^{6}\,\mathrm{A/m^2}$. Dalla relazione $|I|=n|q|Av_d$ si ottiene $J=n|q|v_d$.
:::

:::richiamo{titolo="Differenza di potenziale in un campo uniforme"}
Ipotesi: il campo elettrico è uniforme, di modulo $E$, e due punti distano $L$ lungo la direzione del campo. Tesi: la tensione fra i due punti è $V=EL$.
:::

::::teorema{#ohm-locale titolo="Legge di Ohm in forma locale"}
In un tratto rettilineo di filo omogeneo, con sezione costante e resistività $\rho$, a temperatura costante e percorso da corrente stazionaria, il campo elettrico è uniforme e ha modulo

$$
E=\rho J,\qquad v_d=\frac{E}{\rho\, n|q|}.
$$

Il campo è la grandezza che agisce su ogni portatore, mentre $V=RI$ riguarda l'intero filo. Nel filo di rame da $1{,}0\,\mathrm{mm^2}$ con $1{,}0\,\mathrm{A}$ si ha $J=1{,}0\cdot10^{6}\,\mathrm{A/m^2}$ e $E=1{,}7\cdot10^{-8}\cdot1{,}0\cdot10^{6}\,\mathrm{V/m}=1{,}7\cdot10^{-2}\,\mathrm{V/m}$. In $10\,\mathrm{m}$ la tensione è $EL=0{,}17\,\mathrm{V}$, uguale a $RI=0{,}17\,\Omega\cdot1{,}0\,\mathrm{A}$. Con $n=8{,}0\cdot10^{28}\,\mathrm{m^{-3}}$ la formula di $v_d$ dà $7{,}8\cdot10^{-5}\,\mathrm{m/s}$, il valore dell'esempio sulla deriva.

:::dimostrazione
Si scrive la tensione ai capi del filo in due modi e si uguagliano. Il filo ha lunghezza $L$ e sezione $A$.

Per il richiamo, la tensione è $V=EL$. Per la legge di Ohm e per la seconda legge di Ohm è anche

$$
V=RI=\rho\frac{L}{A}I.
$$

Uguagliando le due espressioni si ottiene $EL=\rho\dfrac{L}{A}I$. Si divide per $L\neq0$ e si usa $\dfrac{I}{A}=J$:

$$
E=\rho\frac{I}{A}=\rho J.
$$

Poiché $J=n|q|v_d$, vale $E=\rho\, n|q|v_d$ e, isolando $v_d$, si trova $v_d=\dfrac{E}{\rho\, n|q|}$.
:::
::::

:::richiamo{titolo="Potenza assorbita da un resistore"}
Ipotesi: un resistore ohmico di resistenza $R$ è percorso dalla corrente $I$. Tesi: la potenza assorbita è $P=RI^2$.
:::

::::teorema{#joule-locale titolo="Potenza dissipata per unità di volume"}
In un filo omogeneo di resistività $\rho$, con densità di corrente $J$ uniforme, la potenza dissipata per unità di volume vale

$$
p=\rho J^2=EJ.
$$

La formula permette di confrontare il riscaldamento di fili di dimensioni diverse con la sola densità di corrente. Per il filo di rame con $I=10\,\mathrm{A}$ e $A=1{,}0\,\mathrm{mm^2}$, $J=1{,}0\cdot10^{7}\,\mathrm{A/m^2}$ e $p=1{,}7\cdot10^{-8}\cdot(1{,}0\cdot10^{7})^2\,\mathrm{W/m^3}=1{,}7\cdot10^{6}\,\mathrm{W/m^3}$. Il volume di $10\,\mathrm{m}$ di filo è $1{,}0\cdot10^{-5}\,\mathrm{m^3}$, quindi la potenza totale è $17\,\mathrm{W}$, come nel calcolo con $RI^2$.

:::dimostrazione
Il filo ha lunghezza $L$ e sezione $A$, quindi volume $\mathcal V=AL$. Per il richiamo e per la seconda legge di Ohm la potenza totale è

$$
P=RI^2=\rho\frac{L}{A}I^2.
$$

Si sostituisce $I=JA$:

$$
P=\rho\frac{L}{A}J^2A^2=\rho J^2\,AL=\rho J^2\,\mathcal V.
$$

Dividendo per il volume si ottiene $p=\dfrac{P}{\mathcal V}=\rho J^2$. Dalla legge in forma locale, $\rho J=E$, segue anche $p=EJ$.
:::
::::

:::esempio{titolo="Densità di corrente nei cavi"}
Nel cavo da $1{,}0\,\mathrm{mm^2}$ con $10\,\mathrm{A}$ si ha $J=1{,}0\cdot10^{7}\,\mathrm{A/m^2}$. Nel cavo da $2{,}5\,\mathrm{mm^2}$ con la stessa corrente $J=\dfrac{10}{2{,}5\cdot10^{-6}}\,\mathrm{A/m^2}=4{,}0\cdot10^{6}\,\mathrm{A/m^2}$ e $p=1{,}7\cdot10^{-8}\cdot(4{,}0\cdot10^{6})^2\,\mathrm{W/m^3}=2{,}7\cdot10^{5}\,\mathrm{W/m^3}$. La potenza per unità di volume scende a meno di un sesto, perché dipende dal quadrato di $J$.
:::
