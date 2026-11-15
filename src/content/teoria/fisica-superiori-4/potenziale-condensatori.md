---
titolo: Potenziale elettrico e condensatori
sommario: Lavoro della forza elettrica, energia potenziale, tensione, equipotenziali, capacità e bilanci energetici nei condensatori.
---

## Energia potenziale e lavoro

:::definizione{#energia-potenziale titolo="Energia elettrica di due cariche"}
La forza elettrostatica è conservativa, quindi il lavoro fra due punti dipende soltanto dagli estremi. Per due cariche puntiformi $Q$ e $q$ nel vuoto, con energia nulla a separazione infinita, l'energia potenziale è
$$
U=k_e\frac{Qq}{r}.
$$
Qui $r$ è la distanza e $k_e\simeq8{,}99\cdot10^9\,\mathrm{N\,m^2/C^2}$. Nel prodotto $Qq$ compaiono entrambi i segni. Perciò cariche dello stesso segno hanno $U>0$, mentre cariche opposte hanno $U<0$. Con $Q=+2{,}0\,\mathrm{nC}$, $q=-1{,}0\,\mathrm{nC}$ e $r=0{,}10\,\mathrm{m}$ si trova $U\simeq-1{,}80\cdot10^{-7}\,\mathrm{J}$.

Il **lavoro della forza elettrica** è $W_{A\to B}=U_A-U_B=-\Delta U$. Se agisce soltanto la forza elettrica, l'energia meccanica $K+U$ si conserva, quindi ogni diminuzione di $U$ accompagna un aumento uguale di $K$. Se invece un agente esterno sposta lentamente la carica, con variazione trascurabile di energia cinetica, il lavoro esterno è $W_{\mathrm{est}}=\Delta U$. Per separare le due cariche dell'esempio occorre portare $U$ da un valore negativo a zero, quindi l'agente esterno deve fornire energia.
:::

## Potenziale e differenza di potenziale

:::definizione{#potenziale titolo="Energia potenziale per unità di carica"}
Il **potenziale elettrico** $V$ in un punto è l'energia potenziale elettrica per unità di carica di prova, $V=\dfrac{U}{q}$, con $q\ne0$. Per una sorgente puntiforme $Q$ e potenziale nullo all'infinito,
$$
V=k_e\frac{Q}{r}.
$$
Il potenziale dipende dalla sorgente e dalla posizione. Quando si introduce una carica di prova, la sua energia potenziale è $U=qV$ e dipende anche dal suo segno. A $0{,}10\,\mathrm{m}$ da $Q=+1{,}0\,\mathrm{nC}$ il potenziale vale $89{,}9\,\mathrm{V}$. Nel medesimo punto, due cariche di prova $+2{,}0\,\mathrm{nC}$ e $-2{,}0\,\mathrm{nC}$ hanno energie opposte. In volt si misura il potenziale, con $1\,\mathrm{V}=1\,\mathrm{J/C}$, mentre in joule si misura $U$.

Fra due punti si pone $\Delta V=V_B-V_A$. Pertanto
$$
\Delta U=q(V_B-V_A),\qquad W_{A\to B}=-q(V_B-V_A).
$$
Spostare il riferimento di zero equivale ad aggiungere lo stesso numero a $V_A$ e $V_B$. Il numero si cancella nella differenza, quindi il lavoro è indipendente dal riferimento.
:::

:::esempio{titolo="Potenziale nullo con campo diverso da zero"}
I potenziali dovuti a più sorgenti **si sommano algebricamente**. Nel punto medio tra $+Q$ e $-Q$, le distanze sono uguali e i due contributi si cancellano. I due vettori campo, invece, puntano entrambi verso la carica negativa. Il loro modulo si somma. In questo esempio il valore del potenziale è nullo rispetto all'infinito, mentre il campo produce una forza su una carica di prova.
:::

:::esempio{titolo="Potenziale di una singola sorgente"}
Le curve rappresentano due casi distinti, con sorgente $+1{,}0\,\mathrm{nC}$ o $-1{,}0\,\mathrm{nC}$. A distanze maggiori, il modulo del potenziale diminuisce come $\dfrac1r$ e il potenziale si avvicina a zero da lati opposti.

::grafico{f="899/x;-899/x" xmin=0 xmax=60 ymin=-130 ymax=130 punti="10,89.9,pieno,A;10,-89.9,pieno,B" nomi="r,V" legenda="Q=+1\,\mathrm{nC};Q=-1\,\mathrm{nC}" titolo="Distanza in centimetri e potenziale in volt. I punti A e B sono a $r=10\,\mathrm{cm}$."}
:::

## Campo uniforme ed equipotenziali

::::teorema{#campo-potenziale titolo="Differenza di potenziale in un campo uniforme"}
Sia uniforme il campo $\vec E$ di modulo $E$. Se lo spostamento da $A$ a $B$ forma un angolo $\theta$ con il campo, risulta
$$
V_B-V_A=-E\,d\cos\theta,
$$
dove $d$ è il modulo dello spostamento. Il potenziale diminuisce lungo il campo e rimane costante quando lo spostamento è perpendicolare al campo.

:::dimostrazione
La forza sulla carica di prova è $q\vec E$. Il suo lavoro lungo uno spostamento $\vec d$ vale $q\vec E\cdot\vec d=qEd\cos\theta$. Uguagliando a $-q(V_B-V_A)$ e dividendo per $q\ne0$ si ottiene la formula. È sufficiente la proiezione dello spostamento sul campo, perché la componente perpendicolare dà prodotto scalare nullo.
:::
::::

:::definizione{#equipotenziali titolo="Superfici a potenziale costante"}
Una superficie **equipotenziale** contiene punti con lo stesso potenziale. Fra due di questi punti la differenza di potenziale è zero, quindi il lavoro elettrico è zero lungo qualunque percorso. Nei punti in cui il campo è diverso da zero, esso è perpendicolare alla superficie. Se avesse una componente tangente, produrrebbe lavoro anche per un piccolo spostamento sulla superficie.

Per una sorgente puntiforme le equipotenziali sono sfere concentriche. Fra due armature parallele ideali sono piani paralleli alle armature. Un conduttore in equilibrio elettrostatico è equipotenziale in tutto il materiale e sulla superficie, perché il campo all'interno del conduttore è nullo. Il potenziale del conduttore può avere un valore qualsiasi rispetto al riferimento scelto.
:::

:::esempio{titolo="Spostamento obliquo fra armature"}
Due armature distano $4{,}0\,\mathrm{cm}$ e i loro potenziali sono $120\,\mathrm{V}$ e $0\,\mathrm{V}$. Lontano dai bordi $E=\dfrac{120\,\mathrm{V}}{0{,}040\,\mathrm{m}}=3000\,\mathrm{V/m}$. Un punto a metà distanza ha $V=60\,\mathrm{V}$. Tutti i punti sullo stesso piano parallelo alle armature hanno quel potenziale. Perciò il lavoro per arrivare da $A$ a $B$ dipende dallo spostamento orizzontale, uguale a metà della distanza fra le lastre.

::grafico{linee="1,1 1,5;3,1 3,5;5,1 5,5" vettori="1.25,2,2.75,2,E;3.25,2,4.75,2,E" punti="1,3.15,pieno,A;3,4.1,pieno,B" segmenti="1,3.15,3,4.1" etichette="1,5.35,120 V;3,5.35,60 V;5,5.35,0 V" xmin=0 xmax=6 ymin=0 ymax=6 assi=0 titolo="Il campo punta verso l'armatura a potenziale minore. La linea tratteggiata indica lo spostamento da A a B."}
:::

## Accelerazione mediante una tensione

:::teorema{#accelerazione-tensione titolo="Energia cinetica acquistata"}
Se agisce soltanto la forza elettrica, vale $K_f-K_i=q(V_i-V_f)$. Se la particella parte da ferma,
$$
K_f=q(V_i-V_f)=\frac12mv^2.
$$
Per acquistare energia cinetica, una carica positiva si sposta verso potenziali più bassi. Un elettrone, che ha $q=-e$, aumenta invece la propria energia cinetica quando si sposta verso potenziali più alti. La formula della velocità è classica e si usa quando $v$ è molto minore della velocità della luce.

L'**elettronvolt** è l'energia acquistata da una particella di carica di modulo $e$ accelerata attraverso una differenza di potenziale di modulo $1\,\mathrm V$. Vale $1\,\mathrm{eV}\simeq1{,}60\cdot10^{-19}\,\mathrm{J}$. Un elettrone accelerato attraverso $100\,\mathrm{V}$ guadagna $100\,\mathrm{eV}$, ossia $1{,}60\cdot10^{-17}\,\mathrm{J}$. Con $m_e=9{,}11\cdot10^{-31}\,\mathrm{kg}$, la velocità classica è $\sqrt{\dfrac{2K_f}{m_e}}\simeq5{,}93\cdot10^6\,\mathrm{m/s}$.
:::

## Capacità elettrica

:::definizione{#capacita titolo="Condensatore e capacità"}
Un **condensatore** è formato da due conduttori separati da un isolante, con cariche opposte $+Q$ e $-Q$. Qui $Q>0$ è il modulo della carica di una singola armatura e $\Delta V=V_+-V_->0$ è la tensione fra le armature. La capacità è
$$
C=\frac{Q}{\Delta V},
$$
e si misura in farad, con $1\,\mathrm{F}=1\,\mathrm{C/V}$. Un condensatore da $2{,}0\,\mathrm{\mu F}$ a $12\,\mathrm{V}$ ha cariche $+24\,\mathrm{\mu C}$ e $-24\,\mathrm{\mu C}$. La carica complessiva delle due armature è zero, mentre nella definizione compare la carica in modulo di una sola.

In un condensatore piano ideale di area $A$ e distanza $d$, riempito da un dielettrico lineare omogeneo di permittività $\varepsilon=\varepsilon_r\varepsilon_0$, il campo interno lontano dai bordi è $E=\dfrac{Q}{\varepsilon A}$. Poiché $\Delta V=Ed$, segue
$$
C=\varepsilon\frac Ad.
$$
Più area permette di accumulare più carica alla stessa tensione. Una distanza maggiore richiede più tensione per mantenere lo stesso campo e la stessa carica. Nel vuoto, con $A=0{,}010\,\mathrm{m^2}$ e $d=1{,}0\,\mathrm{mm}$, la capacità vale $88{,}5\,\mathrm{pF}$.
:::

## Condensatori in parallelo e in serie

::::teorema{#associazioni titolo="Capacità equivalente"}
Due condensatori collegati agli stessi nodi sono in **parallelo**. Hanno la stessa tensione e le cariche delle armature connesse a uno stesso nodo si sommano. Due condensatori collegati in **serie** condividono un nodo intermedio. Se quel nodo è isolato dagli altri rami e inizialmente neutro, le sue due armature portano cariche uguali in modulo e opposte in segno. Quindi le tensioni si sommano in serie e le cariche si sommano in parallelo. Per due condensatori si ottiene
$$
C_{\mathrm{eq,par}}=C_1+C_2,\qquad
\frac1{C_{\mathrm{eq,ser}}}=\frac1{C_1}+\frac1{C_2}.
$$

:::dimostrazione
In parallelo $Q_{\mathrm{tot}}=C_1\Delta V+C_2\Delta V$, quindi il rapporto con la tensione comune è $C_1+C_2$. In serie $Q$ è il modulo comune della carica e $\Delta V_{\mathrm{tot}}=\dfrac Q{C_1}+\dfrac Q{C_2}$. Dividendo per $Q$ si ottiene il reciproco di $C_{\mathrm{eq,ser}}$. In una rete si possono ridurre a un solo condensatore i gruppi che rispettano i criteri dei nodi.
:::
::::

:::esempio{titolo="Come si ripartisce una tensione di 10 volt"}
Due condensatori da $2$ e $3\,\mathrm{\mu F}$ collegati in serie hanno capacità equivalente $1{,}2\,\mathrm{\mu F}$. A $10\,\mathrm V$, la carica in serie è $12\,\mathrm{\mu C}$ e le tensioni sono $\dfrac{12}{2}\,\mathrm V=6\,\mathrm V$ e $\dfrac{12}{3}\,\mathrm V=4\,\mathrm V$. A parità di carica, la caduta è maggiore sul condensatore di capacità minore. Se gli stessi condensatori sono in parallelo, ciascuno ha la tensione del generatore e le cariche sono rispettivamente $20$ e $30\,\mathrm{\mu C}$. La capacità equivalente vale allora $5\,\mathrm{\mu F}$.
:::

## Energia immagazzinata

:::teorema{#energia-condensatore titolo="Energia del campo elettrico"}
Durante la carica di un condensatore ideale, la tensione cresce come $\Delta V=\dfrac QC$. Per una piccola carica aggiuntiva $dQ$, trasferita quasi staticamente, il lavoro di carica è $\Delta V\,dQ$. L'energia finale è l'area del triangolo sotto la retta nel grafico tensione-carica e vale
$$
U_C=\frac12Q\Delta V=\frac12C(\Delta V)^2=\frac{Q^2}{2C}.
$$

::grafico{f="0.5*x" area="0.5*x;0;0;24" punti="24,12,pieno,A" xmin=0 xmax=30 ymin=0 ymax=16 nomi="Q,ΔV" legenda="C=2\,\mathrm{\mu F}" titolo="Carica in microcoulomb e tensione in volt. L'area del triangolo vale $144\,\mathrm{\mu J}$."}

Il fattore $\dfrac12$ compare perché durante la carica la tensione parte da zero e sale fino al valore finale. Per un condensatore piano nel vuoto, sostituendo $C=\dfrac{\varepsilon_0 A}{d}$ e $\Delta V=Ed$, si ottiene $U_C=\dfrac12\varepsilon_0E^2Ad$. Dividendo per il volume $Ad$ si trova la densità di energia $u_E=\dfrac12\varepsilon_0E^2$ nella regione fra le armature, dove il campo è uniforme.
:::

## Inserimento di un dielettrico

:::osservazione{#dielettrico titolo="Condensatore isolato o collegato al generatore"}
Se nel vano c'è inizialmente il vuoto e la geometria resta fissa, riempirlo con un dielettrico lineare omogeneo moltiplica la capacità per $\varepsilon_r$. Se il condensatore è **isolato**, la carica resta costante, quindi tensione ed energia diminuiscono come $\dfrac1C$. Se resta collegato a un **generatore ideale**, la tensione resta costante, quindi carica ed energia immagazzinata aumentano in proporzione a $C$.
:::

:::esempio{titolo="Lo stesso dielettrico in due circuiti"}
Un condensatore da $2\,\mathrm{\mu F}$ è inizialmente a $12\,\mathrm V$, quindi ha $Q=24\,\mathrm{\mu C}$ e $U_C=144\,\mathrm{\mu J}$. Un dielettrico con $\varepsilon_r=3$ porta la capacità a $6\,\mathrm{\mu F}$.

- Se il condensatore è scollegato prima dell'inserimento, $Q=24\,\mathrm{\mu C}$. La tensione scende a $4\,\mathrm V$ e l'energia scende a $\dfrac12\cdot24\cdot4\,\mathrm{\mu J}=48\,\mathrm{\mu J}$. La differenza di $96\,\mathrm{\mu J}$ può fornire lavoro meccanico o essere dissipata.
- Se il generatore rimane collegato, $\Delta V=12\,\mathrm V$. La carica sale a $72\,\mathrm{\mu C}$ e l'energia sale a $432\,\mathrm{\mu J}$. Il generatore sposta $48\,\mathrm{\mu C}$ di carica attraverso $12\,\mathrm V$, fornendo $576\,\mathrm{\mu J}$. Di questi, $288\,\mathrm{\mu J}$ aumentano l'energia del condensatore. I restanti $288\,\mathrm{\mu J}$ possono essere trasferiti come lavoro meccanico o dissipati, secondo il modo in cui il dielettrico viene inserito.
:::
