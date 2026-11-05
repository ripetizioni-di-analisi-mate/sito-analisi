---
titolo: Pressione e fluidi in equilibrio
sommario: La pressione, l'equilibrio dei liquidi, il principio di Pascal, la spinta di Archimede e le condizioni di galleggiamento, con le unità e le ipotesi di ogni formula.
---

## Fluidi e densità

:::definizione{#fluidi titolo="Liquidi e gas"}
I liquidi e i gas si chiamano **fluidi** perché possono scorrere e assumere la forma del recipiente che li contiene. Un liquido mantiene approssimativamente il proprio volume; un gas occupa lo spazio a disposizione e il suo volume può cambiare sensibilmente quando cambia la pressione.

Un fluido è in **equilibrio statico** quando ogni sua parte è ferma nel sistema di riferimento considerato. In questo capitolo studiamo liquidi in quiete, con densità uniforme e praticamente costante. Queste condizioni permettono di descrivere, per esempio, l'acqua ferma in una vasca. Le formule dei liquidi in equilibrio non descrivono automaticamente l'acqua che scorre in una tubazione.
:::

:::definizione{#densita titolo="Densità"}
La **densità** di un corpo omogeneo è il rapporto tra la sua massa $m$ e il suo volume $V$,
$$
\rho=\frac{m}{V}.
$$
La lettera greca $\rho$ si legge «ro». Nel Sistema Internazionale la densità si misura in $\mathrm{kg/m^3}$. La formula consente anche di ricavare la massa da un volume noto, $m=\rho V$.

Nei problemi introduttivi si assume spesso per l'acqua $\rho=1000\,\mathrm{kg/m^3}$. Con questa approssimazione, $2\,\mathrm{L}=0{,}002\,\mathrm{m^3}$ d'acqua hanno massa $m=1000\cdot0{,}002=2\,\mathrm{kg}$. La densità reale dipende dalla temperatura e dalla composizione; negli esercizi useremo il valore dichiarato nel testo.
:::

## Forza e superficie di appoggio

:::definizione{#pressione titolo="Pressione"}
La **pressione** descrive quanto è concentrata una forza perpendicolare su una superficie. Se una forza normale di modulo $F$ è distribuita uniformemente su un'area $A$, la pressione è
$$
p=\frac{F}{A}.
$$
La parola *normale* significa perpendicolare alla superficie. L'unità è il **pascal**, con simbolo $\mathrm{Pa}$, e vale
$$
1\,\mathrm{Pa}=1\,\mathrm{N/m^2}.
$$
Se la distribuzione della forza non è uniforme, il rapporto $\dfrac{F}{A}$ fornisce la pressione media sulla superficie. Quando la pressione è uniforme, la forza si ricava da $F=pA$.

Una forza di $200\,\mathrm{N}$ su un'area di $0{,}10\,\mathrm{m^2}$ produce pressione media $2000\,\mathrm{Pa}$. Distribuita su $0{,}20\,\mathrm{m^2}$, la stessa forza produce $1000\,\mathrm{Pa}$. A parità di forza, un'area doppia dà pressione dimezzata.

::grafico{assi=0 uguale=1 linee="-0.5,0 6,0" poligoni="0,0 1,0 1,1 0,1;3,0 5,0 5,0.5 3,0.5" vettori="0.5,2,0.5,0.8,F;4,2,4,0.8,F" etichette="0.4,-0.5,A;4,-0.5,2A" xmin=-1 xmax=6 ymin=-1 ymax=2.8 titolo="La stessa forza distribuita su un'area doppia produce una pressione media dimezzata; il disegno confronta schematicamente le superfici di appoggio."}
:::

:::osservazione{titolo="Conversioni delle aree"}
Un metro contiene cento centimetri, quindi un metro quadrato contiene $100\cdot100=10000$ centimetri quadrati. Perciò
$$
1\,\mathrm{cm^2}=0{,}0001\,\mathrm{m^2}.
$$
Per esempio, un'area di $25\,\mathrm{cm^2}$ vale $0{,}0025\,\mathrm{m^2}$. La conversione dell'area è necessaria per ottenere la pressione in pascal quando la forza è espressa in newton.
:::

## Pressione in un fluido fermo

:::teorema{#pressione-fluido titolo="Forze di pressione"}
Un fluido in equilibrio esercita su una parete una forza perpendicolare alla parete stessa. In uno stesso punto la pressione ha lo stesso valore in tutte le direzioni. Si tratta di una proprietà dell'equilibrio dei fluidi.

La pressione è una grandezza scalare. Le forze che essa produce hanno invece direzioni determinate dalle superfici su cui agiscono. L'acqua in una vasca esercita una forza verso il basso sul fondo e forze orizzontali sulle pareti verticali.

Per esempio, una pressione uniforme di $3000\,\mathrm{Pa}$ su una piccola superficie piana di $0{,}002\,\mathrm{m^2}$ produce una forza di modulo $6\,\mathrm{N}$, diretta perpendicolarmente alla superficie. Se vi è un altro fluido dall'altra parte, anche la sua pressione contribuisce alla forza risultante.
:::

:::definizione{#pressione-assoluta-relativa titolo="Pressione assoluta e pressione relativa"}
La **pressione assoluta** è riferita al vuoto. La **pressione relativa** è la differenza tra la pressione assoluta $p$ e una pressione di riferimento $p_0$, che spesso è quella atmosferica,
$$
p_{\mathrm{rel}}=p-p_0.
$$
L'aria atmosferica esercita pressione anche sulla superficie libera di un liquido. Nei calcoli useremo il valore di $p_0$ indicato nel testo. Un valore approssimato comune è $100000\,\mathrm{Pa}$.

Se un recipiente ha pressione assoluta di $130000\,\mathrm{Pa}$ mentre l'atmosfera esterna è a $100000\,\mathrm{Pa}$, la pressione relativa è $30000\,\mathrm{Pa}$. Le due misure descrivono lo stesso stato rispetto a riferimenti diversi.
:::

## Pressione e profondità

::::teorema{#stevino titolo="Legge di Stevino"}
In un liquido in quiete di densità uniforme $\rho$, la pressione aumenta scendendo sotto la superficie. Se la pressione sulla superficie è $p_0$ e la profondità verticale è $h$, vale
$$
p=p_0+\rho gh.
$$
Il simbolo $g$ indica l'accelerazione di gravità, assunta costante. Il termine $\rho gh$ è l'aumento di pressione rispetto alla superficie. La profondità si misura in verticale, indipendentemente dalla forma del recipiente.

:::dimostrazione
Consideriamo idealmente una colonna verticale di liquido, di area $A$ e altezza $h$. Il suo volume è $Ah$ e la sua massa è $\rho Ah$, quindi il suo peso è $\rho Ahg$. Sulla base agisce verso l'alto la forza $pA$, mentre sulla sommità agisce verso il basso $p_0A$. L'equilibrio verticale dà
$$
pA=p_0A+\rho Ahg.
$$
Dividendo tutti i termini per l'area $A$ si ottiene $p=p_0+\rho gh$.
:::
::::

:::esempio{titolo="Due metri sotto la superficie"}
Una vasca contiene acqua con densità $1000\,\mathrm{kg/m^3}$ e superficie a $p_0=100000\,\mathrm{Pa}$. A $2\,\mathrm{m}$ di profondità, con $g=9{,}81\,\mathrm{m/s^2}$, si ha
$$
\begin{aligned}
p_{\mathrm{rel}}&=1000\cdot9{,}81\cdot2\,\mathrm{Pa}\\[6pt]
&=19620\,\mathrm{Pa},\\[6pt]
p&=100000\,\mathrm{Pa}+19620\,\mathrm{Pa}\\[6pt]
&=119620\,\mathrm{Pa}.
\end{aligned}
$$
La pressione relativa è proporzionale alla profondità. Il grafico della pressione assoluta parte invece dal valore $p_0$ quando $h=0$.

::grafico{f="9.81*x" xmin=0 xmax=4 ymin=0 ymax=40 nomi="h,p" punti="2,19.62" legenda="p_{\mathrm{rel}}=9{,}81h" titolo="Pressione relativa nell'acqua: $h$ in metri e $p_{\mathrm{rel}}$ in kilopascal, con $1\,\mathrm{kPa}=1000\,\mathrm{Pa}$."}
:::

## Livelli nei vasi comunicanti

:::teorema{#vasi-comunicanti titolo="Livelli nei vasi comunicanti"}
In recipienti collegati, contenenti lo stesso liquido in quiete e sottoposti alla stessa pressione sulle superfici libere, i livelli raggiungono la stessa quota. Si trascurano gli effetti della tensione superficiale, che possono essere rilevanti nei tubi molto sottili.

Infatti, scegliendo due punti alla stessa quota nel liquido collegato, le pressioni devono coincidere. Per la legge di Stevino, con uguali $p_0$, $\rho$ e $g$, questa uguaglianza richiede uguali profondità sotto le superfici libere.

Un recipiente largo e un tubo stretto collegati alla base raggiungono dunque lo stesso livello anche se contengono volumi diversi. Per esempio, se una superficie libera è $20\,\mathrm{cm}$ sopra il collegamento, anche l'altra si trova alla stessa quota di $20\,\mathrm{cm}$ in equilibrio.

::grafico{assi=0 uguale=1 linee="0,3.2 0,0 5,0 5,3.2;2,3.2 2,1 4,1 4,3.2" poligoni="0,0 5,0 5,2.5 4,2.5 4,1 2,1 2,2.5 0,2.5" segmenti="0,2.5,5,2.5" etichette="0.8,2.9,p₀;4.5,2.9,p₀" xmin=-0.7 xmax=5.7 ymin=-0.5 ymax=3.7 titolo="Lo stesso liquido in recipienti comunicanti: con uguale pressione sulle superfici, i livelli coincidono."}
:::

:::osservazione{titolo="Confronto tra profondità"}
Due punti nello stesso liquido in equilibrio, alla stessa profondità rispetto a una superficie sottoposta alla stessa pressione, hanno la stessa pressione. La forma della parete e la quantità totale di liquido non compaiono nella legge di Stevino.

Per esempio, a $0{,}50\,\mathrm{m}$ sotto la superficie dell'acqua l'aumento di pressione è $4905\,\mathrm{Pa}$, sia in un recipiente stretto sia in uno largo. Questo risultato riguarda la pressione; la forza sul fondo dipende anche dalla sua area.
:::

## Trasmissione della pressione

:::teorema{#pascal titolo="Principio di Pascal"}
Un aumento di pressione applicato a un liquido confinato in equilibrio si trasmette a tutte le sue parti. Questo enunciato è il **principio di Pascal**, una proprietà sperimentale dei liquidi.

In un torchio idraulico ideale, due pistoni di aree $A_1$ e $A_2$ agiscono sullo stesso liquido. Considerando i pistoni alla stessa quota, trascurando peso dei pistoni e attriti e supponendo uguale pressione atmosferica esterna, vale
$$
\frac{F_1}{A_1}=\frac{F_2}{A_2},
\qquad F_2=F_1\frac{A_2}{A_1}.
$$
Le forze $F_1$ e $F_2$ sono i moduli delle forze esterne trasmesse dai pistoni. La pressione aggiuntiva è uguale nei due punti, mentre le forze dipendono dalle aree.

Se il secondo pistone ha area cinque volte maggiore del primo, una forza di $40\,\mathrm{N}$ sul primo permette di equilibrare $200\,\mathrm{N}$ sul secondo. Nell'uso reale il pistone piccolo deve percorrere uno spostamento maggiore; l'aumento di forza è compatibile con la conservazione dell'energia.
:::

## Spinta di Archimede

::::teorema{#archimede titolo="Spinta di Archimede"}
Un corpo immerso in un fluido in quiete riceve una risultante delle forze di pressione diretta verso l'alto. Il suo modulo è uguale al peso del fluido spostato. Questa forza è la **spinta di Archimede**,
$$
F_A=\rho_f gV_{\mathrm{imm}},
$$
dove $\rho_f$ è la densità del fluido e $V_{\mathrm{imm}}$ è il volume della parte immersa del corpo. Se il corpo è completamente immerso, questo volume coincide con il volume totale. Si suppone che il fluido circondi la superficie immersa; il caso di un corpo aderente al fondo richiede un esame delle forze effettivamente presenti.

:::dimostrazione
Per un corpo a forma di parallelepipedo, di base orizzontale $A$ e altezza $H$, completamente immerso, le forze orizzontali sulle facce laterali si equilibrano. La faccia inferiore è più profonda, quindi la sua pressione supera quella superiore di $\rho_f gH$.

La risultante verticale delle forze di pressione è pertanto
$$
F_A=(p_{\mathrm{inf}}-p_{\mathrm{sup}})A
=\rho_f gHA
=\rho_f gV.
$$
La forza sulla faccia inferiore è maggiore e diretta verso l'alto, quindi anche la risultante è diretta verso l'alto. Il risultato vale inoltre per corpi di forma diversa.
:::
::::

:::esempio{titolo="Volume immerso"}
Un corpo sposta $0{,}003\,\mathrm{m^3}$ d'acqua di densità $1000\,\mathrm{kg/m^3}$. La spinta vale
$$
F_A=1000\cdot9{,}81\cdot0{,}003\,\mathrm{N}=29{,}43\,\mathrm{N}.
$$
Il dato del volume si riferisce alla parte immersa. Se solo metà di un corpo di volume $0{,}006\,\mathrm{m^3}$ è sott'acqua, il volume da usare è proprio $0{,}003\,\mathrm{m^3}$.
:::

## Galleggiamento e peso apparente

:::teorema{#galleggiamento titolo="Equilibrio di un corpo galleggiante"}
Un corpo che galleggia fermo, soggetto soltanto al peso e alla spinta del liquido, soddisfa
$$
F_A=mg,
\qquad V_{\mathrm{imm}}=\frac{m}{\rho_f}.
$$
Si trascura la spinta dell'aria. Per un corpo omogeneo di densità $\rho_c$ e volume totale $V$, la massa è $m=\rho_c V$, quindi
$$
\frac{V_{\mathrm{imm}}}{V}=\frac{\rho_c}{\rho_f}.
$$
Un corpo con densità $600\,\mathrm{kg/m^3}$ galleggia nell'acqua di densità $1000\,\mathrm{kg/m^3}$ con il $60\%$ del volume immerso. Se il corpo ha densità maggiore del liquido, il peso supera la spinta anche a immersione completa e il corpo, libero da sostegni, affonda. Con densità uguali può restare completamente immerso in equilibrio.

::grafico{assi=0 uguale=1 poligoni="0,0 4,0 4,2.2 0,2.2;1.2,1.4 2.8,1.4 2.8,2.8 1.2,2.8" linee="0,3 0,0 4,0 4,3;0,2.2 1.2,2.2;2.8,2.2 4,2.2" vettori="2,2.1,2,3.4,Fₐ;2,2.1,2,0.8,P" xmin=-0.5 xmax=4.5 ymin=-0.4 ymax=4 titolo="Corpo galleggiante in equilibrio: peso e spinta hanno uguale modulo e versi opposti; lo schema è qualitativo."}
:::

:::definizione{#peso-apparente titolo="Peso apparente"}
Un corpo più denso del liquido, appeso fermo a un dinamometro e completamente immerso senza toccare il fondo, è soggetto a tre forze. Il peso è diretto verso il basso; la tensione $T$ del sostegno e la spinta di Archimede sono dirette verso l'alto. Dall'equilibrio segue
$$
T+F_A=mg,
\qquad T=mg-F_A.
$$
La lettura del dinamometro, chiamata **peso apparente**, coincide con $T$. La massa e la forza peso restano le stesse, mentre il sostegno deve esercitare una forza minore.

Se il peso è $50\,\mathrm{N}$ e la spinta è $20\,\mathrm{N}$, il dinamometro indica $30\,\mathrm{N}$. La differenza tra la lettura in aria, trascurando la spinta dell'aria, e quella nel liquido consente di ricavare la spinta.
:::
