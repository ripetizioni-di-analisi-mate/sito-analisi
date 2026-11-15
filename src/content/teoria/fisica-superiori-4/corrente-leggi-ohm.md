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

## Resistività, lunghezza e sezione

:::teorema{#resistivita titolo="Seconda legge di Ohm"}
A temperatura fissata, per un filo omogeneo e uniforme, di lunghezza $L$ e area della sezione $A$, si ha

$$
R=\rho\frac{L}{A}.
$$

La **resistività** $\rho$ descrive il materiale e ha unità $\Omega\,\mathrm{m}$. Raddoppiando la lunghezza allo stesso materiale e alla stessa sezione si ottiene resistenza doppia. Raddoppiando il diametro circolare, invece, $A=\dfrac{\pi d^2}{4}$ quadruplica e la resistenza diventa un quarto.

Se il filo si allunga a volume costante $\mathcal V=LA$ e la resistività rimane la stessa, la sezione diminuisce. Sostituendo $A=\dfrac{\mathcal V}{L}$ si trova $R=\rho\dfrac{L^2}{\mathcal V}$. In queste ipotesi lunghezza doppia significa resistenza quadrupla, perché cambiano sia il numeratore sia il denominatore della legge originale.
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

::grafico{f="10*(1+0.004*(x-20))" xmin=20 xmax=100 ymin=9 ymax=14 nomi="T,R (Ω)" punti="20,10,pieno;70,12,pieno" titolo="Temperatura in gradi Celsius. La retta descrive l'intervallo per cui vale il modello."}
:::

:::attenzione
Il modello lineare si usa dove $\alpha$ rimane circa costante. Se una sua estrapolazione produce una resistenza negativa per un filo metallico passivo, il risultato segnala che l'estrapolazione non è fisicamente valida. Altri materiali possono anche presentare una dipendenza decrescente dalla temperatura. Il segno e l'intervallo validi si determinano dai dati del materiale e dalle condizioni di misura.
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

::grafico{f="36/x;0.25*x" xmin=6 xmax=30 ymin=0 ymax=9 nomi="R,P (W)" legenda="V=6\,\mathrm{V};I=0{,}50\,\mathrm{A}" punti="12,3,pieno;24,1.5,pieno;24,6,pieno" titolo="Resistenza in ohm. In R = 12 Ω le curve si incontrano. In R = 24 Ω danno potenze diverse."}
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

## Generatori e strumenti di misura

:::definizione{#misure titolo="Amperometro, voltmetro e generatore ideale"}
Una sorgente di tensione ideale mantiene la differenza di potenziale assegnata ai morsetti nel modello. La corrente dipende dal carico: un resistore da $12\,\Omega$ collegato a una sorgente da $6\,\mathrm{V}$ assorbe $0{,}50\,\mathrm{A}$, mentre un resistore da $24\,\Omega$ ne assorbe $0{,}25\,\mathrm{A}$. Il generatore trasferisce energia al circuito. In regime stazionario la stessa carica che entra in un resistore ne esce nel tempo considerato.

L'**amperometro** interrompe il percorso del ramo e si inserisce in serie, così la carica che passa nel ramo passa anche nello strumento. La resistenza ideale dello strumento è nulla, perciò la caduta di tensione ai suoi capi è nulla. Il **voltmetro** si collega ai due nodi che definiscono la tensione, quindi è in parallelo al componente. La sua resistenza ideale è infinita, così nel ramo di misura non passa corrente.

Se il voltmetro reale ha resistenza comparabile a quella del carico, introduce un ramo attraversato da una corrente apprezzabile. Per ridurre la perturbazione si usa una resistenza d'ingresso molto maggiore di quella del carico. Le associazioni e le leggi di Kirchhoff consentono di analizzare quantitativamente queste situazioni nel capitolo sui circuiti.
:::
