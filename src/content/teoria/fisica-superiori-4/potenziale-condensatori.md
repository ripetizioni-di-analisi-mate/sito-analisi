---
titolo: Potenziale elettrico e condensatori
sommario: Lavoro della forza elettrica, energia potenziale, differenza di potenziale, superfici equipotenziali, capacità e associazioni di condensatori.
---

## Energia potenziale e lavoro

:::definizione{#energia-potenziale titolo="Energia elettrica di due cariche"}
La forza elettrostatica è conservativa, quindi il suo lavoro fra due punti dipende soltanto dagli estremi. Per due cariche puntiformi nel vuoto, ponendo energia nulla a separazione infinita,
$$
U=k_e\frac{Qq}{r},\qquad W_{A\to B}=U_A-U_B=-\Delta U.
$$
Nel prodotto $Qq$ si conservano i segni. Cariche dello stesso segno hanno energia positiva nel riferimento scelto; cariche opposte hanno energia negativa. Con $Q=+2{,}0\,\mathrm{nC}$, $q=-1{,}0\,\mathrm{nC}$ e $r=0{,}10\,\mathrm m$, si ottiene $U=-1{,}80\cdot10^{-7}\,\mathrm J$.

Se la forza elettrica è l'unica a compiere lavoro, l'energia meccanica $K+U$ si conserva. Una diminuzione di energia potenziale corrisponde a un aumento uguale di energia cinetica. Se un agente esterno sposta lentamente una carica senza variazione di energia cinetica, il suo lavoro è invece $W_{\mathrm{est}}=\Delta U$.
:::

## Potenziale e differenza di potenziale

:::definizione{#potenziale titolo="Energia potenziale per unità di carica"}
Il **potenziale elettrico** è $V=\dfrac Uq$. Si misura in volt, con $1\,\mathrm V=1\,\mathrm{J/C}$. Per una carica puntiforme sorgente $Q$, con riferimento all'infinito,
$$
V=k_e\frac Qr.
$$
Il potenziale è scalare e conserva il segno della carica sorgente. Per $Q=+1{,}0\,\mathrm{nC}$ a $r=0{,}10\,\mathrm m$, $V=89{,}9\,\mathrm V$. Una carica di prova $q=-2{,}0\,\mathrm{nC}$ in quel punto ha $U=qV=-1{,}80\cdot10^{-7}\,\mathrm J$.

La differenza di potenziale fra due punti è $\Delta V=V_B-V_A$. Il lavoro della forza elettrica è
$$
W_{A\to B}=q(V_A-V_B)=-q\Delta V.
$$
Per più cariche sorgenti i potenziali si sommano algebricamente. Nel punto medio fra due cariche opposte uguali il potenziale è zero con il riferimento comune all'infinito, mentre il campo è diverso da zero. Campo e potenziale descrivono aspetti diversi della stessa interazione.
:::

::grafico{f="1/x" xmin=1 xmax=5 ymin=0 ymax=2 nomi="r,V" titolo="Potenziale normalizzato di una carica positiva con riferimento all'infinito: decresce come l'inverso della distanza"}

## Campo uniforme ed equipotenziali

::::teorema{#campo-potenziale titolo="Potenziale lungo un campo uniforme"}
In un campo uniforme, se $B$ si trova a distanza $d$ da $A$ nel verso del campo,
$$
V_B-V_A=-Ed.
$$
Il potenziale diminuisce quindi lungo il verso del campo. Fra armature piane parallele distanti $d$, trascurando gli effetti di bordo, il modulo del campo è $E=\dfrac{|\Delta V|}{d}$. Con $|\Delta V|=120\,\mathrm V$ e $d=0{,}020\,\mathrm m$, $E=6000\,\mathrm{V/m}$, equivalente a $6000\,\mathrm{N/C}$.

:::dimostrazione
Su una carica $q$ il campo uniforme esercita la forza $q\vec E$. Per uno spostamento di lunghezza $d$ parallelo al campo il lavoro è $W=qEd$. Dalla definizione di differenza di potenziale $W=-q(V_B-V_A)$. Dividendo per $q\neq0$ si ottiene la relazione.
:::
::::

:::definizione{#equipotenziali titolo="Superfici a potenziale costante"}
Una superficie **equipotenziale** contiene punti con lo stesso potenziale. Spostare una carica lungo di essa comporta lavoro elettrico nullo. Le linee del campo sono perpendicolari alle superfici equipotenziali nei punti in cui il campo è diverso da zero. Per una carica puntiforme le equipotenziali sono sfere concentriche. Un conduttore in equilibrio è equipotenziale in tutto il materiale e sulla superficie; un potenziale costante può essere diverso da zero.
:::

## Accelerazione mediante una tensione

:::teorema{#accelerazione-tensione titolo="Energia cinetica acquistata"}
Se una particella parte da ferma e viene accelerata dalla sola forza elettrica,
$$
K_f=q(V_i-V_f)=\frac12mv^2.
$$
Il segno del prodotto deve essere positivo per il processo descritto. Per un elettrone che acquista energia attraversando una differenza di potenziale di modulo $100\,\mathrm V$, il guadagno è $100\,\mathrm{eV}=1{,}60\cdot10^{-17}\,\mathrm J$. Con $m_e=9{,}11\cdot10^{-31}\,\mathrm{kg}$ si trova $v\simeq5{,}93\cdot10^6\,\mathrm{m/s}$, molto minore di $c$ e compatibile con il calcolo classico.

Un **elettronvolt** è un'unità di energia, $1\,\mathrm{eV}=1{,}60\cdot10^{-19}\,\mathrm J$. Il nome non indica che soltanto gli elettroni possano avere energie espresse in questa unità. Una particella con carica $2e$ accelerata attraverso la stessa tensione acquista energia doppia, mentre la velocità dipende anche dalla massa.
:::

## Capacità elettrica

:::definizione{#capacita titolo="Condensatore e capacità"}
Un **condensatore** è formato da due conduttori separati da un isolante, con cariche opposte $+Q$ e $-Q$. La capacità è
$$
C=\frac{Q}{\Delta V},
$$
dove $Q>0$ è il modulo della carica di un'armatura e $\Delta V>0$ il potenziale dell'armatura positiva meno quello della negativa. Si misura in farad, $1\,\mathrm F=1\,\mathrm{C/V}$. Un condensatore da $2{,}0\,\mathrm{\mu F}$ a $12\,\mathrm V$ ha $24\,\mathrm{\mu C}$ su ciascuna armatura, con segni opposti.

Per un condensatore piano ideale di area $A$ e distanza $d$ fra le armature, riempito da un dielettrico lineare omogeneo di permittività $\varepsilon$,
$$
C=\varepsilon\frac Ad,\qquad \varepsilon=\varepsilon_r\varepsilon_0.
$$
La formula segue da $E=\dfrac{\sigma_q}{\varepsilon}$, $\Delta V=Ed$ e $Q=\sigma_qA$. Aumentare l'area aumenta la capacità; aumentare la distanza la diminuisce. Nel vuoto, con $A=0{,}010\,\mathrm{m^2}$ e $d=1{,}0\,\mathrm{mm}$, $C=88{,}5\,\mathrm{pF}$.
:::

::grafico{f="2*x" xmin=0 xmax=10 ymin=0 ymax=22 nomi="V,Q" titolo="Condensatore da $2{,}0\,\mathrm{\mu F}$: la carica in microcoulomb cresce linearmente con la tensione in volt"}

## Condensatori in parallelo e in serie

::::teorema{#associazioni titolo="Capacità equivalente"}
In parallelo i condensatori sono collegati agli stessi due nodi e hanno la stessa tensione. Le cariche si sommano, quindi
$$
C_{\mathrm{eq}}=C_1+C_2+\cdots.
$$
In serie, se i conduttori intermedi sono inizialmente neutri e isolati dal resto, i condensatori hanno cariche di uguale modulo. Le tensioni si sommano, perciò
$$
\frac1{C_{\mathrm{eq}}}=\frac1{C_1}+\frac1{C_2}+\cdots.
$$
Due capacità da $2{,}0$ e $3{,}0\,\mathrm{\mu F}$ danno $5{,}0\,\mathrm{\mu F}$ in parallelo e $1{,}2\,\mathrm{\mu F}$ in serie. In serie la capacità equivalente è minore di entrambe; in parallelo è maggiore di ciascuna.

:::dimostrazione
In parallelo $Q_{\mathrm{tot}}=C_1\Delta V+C_2\Delta V$, quindi dividendo per la tensione comune si ottiene la somma delle capacità. In serie $\Delta V_{\mathrm{tot}}=\dfrac Q{C_1}+\dfrac Q{C_2}$. Poiché $\Delta V_{\mathrm{tot}}=\dfrac Q{C_{\mathrm{eq}}}$, dividendo per la carica si ricava la somma dei reciproci.
:::
::::

## Energia immagazzinata

:::teorema{#energia-condensatore titolo="Energia del campo elettrico"}
Per caricare un condensatore ideale occorre lavoro, perché la tensione cresce durante la carica. L'energia immagazzinata è
$$
U_C=\frac12C(\Delta V)^2=\frac{Q^2}{2C}=\frac12Q\Delta V.
$$
Nel grafico tensione-carica la tensione aumenta linearmente da zero al valore finale, quindi il lavoro è l'area del triangolo sotto la retta. Un condensatore da $100\,\mathrm{\mu F}$ a $20\,\mathrm V$ immagazzina $0{,}020\,\mathrm J$. Raddoppiare la tensione quadruplica l'energia se la capacità resta costante.

Per il condensatore piano nel vuoto, usando $C=\dfrac{\varepsilon_0A}{d}$ e $\Delta V=Ed$, si ottiene $U_C=\dfrac12\varepsilon_0E^2Ad$. Il volume fra le armature è $Ad$, quindi la densità di energia è $u_E=\dfrac12\varepsilon_0E^2$. Questa descrizione attribuisce l'energia al campo elettrico nella regione fra le armature.
:::

## Inserimento di un dielettrico

:::osservazione{#dielettrico titolo="Condensatore isolato o collegato al generatore"}
Se un dielettrico riempie completamente lo spazio fra le armature nel modello lineare, la capacità viene moltiplicata per $\varepsilon_r$. L'effetto sulle altre grandezze dipende dal collegamento.

Se il condensatore è isolato, la carica rimane costante. La tensione $\Delta V=\dfrac QC$ diminuisce di un fattore $\varepsilon_r$, e anche l'energia $\dfrac{Q^2}{2C}$ diminuisce dello stesso fattore. La differenza di energia può essere trasferita in lavoro meccanico o dissipata durante l'inserimento.

Se resta collegato a un generatore ideale, la tensione è costante. La carica $Q=C\Delta V$ e l'energia del condensatore $\dfrac12C(\Delta V)^2$ aumentano di un fattore $\varepsilon_r$. Il generatore scambia energia e carica con il sistema, quindi per il bilancio completo si considera anche il suo contributo. Prima di applicare una formula energetica si identifica perciò quale grandezza resta fissata.
:::
