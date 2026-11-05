---
titolo: Lavoro, energia e potenza
sommario: Il lavoro delle forze, l'energia del movimento e della posizione, la conservazione dell'energia meccanica, la potenza e il rendimento, con esempi numerici e condizioni di applicazione.
---

## Il lavoro di una forza

:::definizione{#lavoro titolo="Lavoro di una forza costante"}
Una forza può trasferire energia a un corpo durante uno spostamento. Il **lavoro** misura questo trasferimento e si indica con $W$. Consideriamo un corpo che si sposta in linea retta e una forza costante, parallela allo spostamento. Se la forza ha lo stesso verso dello spostamento, il suo lavoro è
$$
W=Fs,
$$
dove $F$ è il modulo della forza e $s$ è la distanza percorsa. Se la forza ha verso opposto, il lavoro è $W=-Fs$.

Il lavoro si misura in **joule**, il cui simbolo è $\mathrm{J}$. Un joule è il lavoro di una forza di un newton che agisce per un metro nel verso dello spostamento, quindi
$$
1\,\mathrm{J}=1\,\mathrm{N\cdot m}.
$$
Per esempio, una forza orizzontale di $12\,\mathrm{N}$ che tira una scatola per $3\,\mathrm{m}$ nello stesso verso compie $W=12\cdot3=36\,\mathrm{J}$. Il tempo impiegato non compare in questo calcolo.

::grafico{assi=0 uguale=1 poligoni="0,0 1,0 1,1 0,1" linee="-0.5,0 5,0" vettori="1,0.5,3,0.5,F;0,-0.7,4,-0.7,s" xmin=-1 xmax=5.5 ymin=-1.5 ymax=2 titolo="La forza e lo spostamento hanno lo stesso verso, quindi il lavoro della forza è positivo."}
:::

:::osservazione{#lavoro-nullo titolo="Forze perpendicolari allo spostamento"}
Una forza perpendicolare allo spostamento compie lavoro nullo. Per esempio, mentre una scatola scorre su un piano orizzontale, il peso è verticale e il suo lavoro è $W_P=0$. Anche la forza normale esercitata dal piano compie lavoro nullo.

Se il punto di applicazione di una forza resta fermo durante tutto l'intervallo, il lavoro della forza è nullo. Una persona che tiene ferma una valigia compie su di essa lavoro meccanico nullo durante l'intervallo in cui resta ferma, anche se il suo organismo consuma energia.
:::

:::definizione{#lavoro-totale titolo="Lavoro totale"}
Il **lavoro totale**, indicato con $W_{\mathrm{tot}}$, è la somma dei lavori di tutte le forze che agiscono sul corpo. Ogni lavoro entra nella somma con il proprio segno.

Se una forza motrice compie $50\,\mathrm{J}$ e l'attrito compie $-20\,\mathrm{J}$, mentre peso e normale compiono lavoro nullo, allora
$$
W_{\mathrm{tot}}=50\,\mathrm{J}-20\,\mathrm{J}=30\,\mathrm{J}.
$$
Questa somma permette di studiare l'effetto complessivo delle forze sul movimento.
:::

## Energia del movimento

:::definizione{#energia-cinetica titolo="Energia cinetica"}
Un corpo in movimento possiede **energia cinetica**. Per un corpo di massa $m$, trattato come un punto materiale e con velocità di modulo $v$, essa è
$$
K=\frac{1}{2}mv^2.
$$
Il simbolo $v^2$ indica il prodotto $v\cdot v$. Con massa in chilogrammi e velocità in metri al secondo, l'energia si ottiene in joule. Il valore di $K$ è positivo quando il corpo si muove ed è nullo quando il corpo è fermo nel sistema di riferimento scelto.

Una massa di $2\,\mathrm{kg}$ a $3\,\mathrm{m/s}$ ha energia cinetica
$$
K=\frac{1}{2}\cdot2\cdot3^2\,\mathrm{J}=9\,\mathrm{J}.
$$
Alla velocità di $6\,\mathrm{m/s}$ la stessa massa ha $K=36\,\mathrm{J}$. Poiché la velocità è al quadrato, raddoppiarla moltiplica l'energia cinetica per quattro.

::grafico{f="x^2" xmin=0 xmax=6 ymin=0 ymax=40 nomi="v,K" punti="3,9;6,36" legenda="K=v^2" titolo="Energia cinetica di una massa di $2\,\mathrm{kg}$: $v$ in $\mathrm{m/s}$ e $K$ in joule."}
:::

## Il lavoro e la variazione di velocità

::::teorema{#teorema-energia-cinetica titolo="Teorema dell'energia cinetica"}
In un sistema di riferimento inerziale, il lavoro totale delle forze su un punto materiale di massa costante è uguale alla variazione della sua energia cinetica,
$$
W_{\mathrm{tot}}=K_f-K_i.
$$
I pedici $i$ e $f$ indicano il valore iniziale e quello finale. Un lavoro totale positivo aumenta il modulo della velocità; un lavoro totale negativo lo diminuisce. Se $W_{\mathrm{tot}}=0$, l'energia cinetica finale è uguale a quella iniziale.

:::dimostrazione
Per un moto rettilineo con forza risultante costante, si combinano il secondo principio della dinamica e la relazione del moto uniformemente accelerato. Scegliendo l'asse lungo il moto, prima di eventuali inversioni, si ha
$$
F_{\mathrm{tot}}=ma,
\qquad v_f^2-v_i^2=2as.
$$
Moltiplicando la seconda relazione per $\dfrac{m}{2}$ si ottiene
$$
\frac{1}{2}mv_f^2-\frac{1}{2}mv_i^2=mas=F_{\mathrm{tot}}s.
$$
Il prodotto a destra è il lavoro totale, quindi vale l'uguaglianza enunciata. Questa derivazione riguarda il caso rettilineo con risultante costante; il teorema vale anche in situazioni più generali.
:::
::::

:::esempio{titolo="Lavoro necessario per fermarsi"}
Un carrello di massa $4\,\mathrm{kg}$ si muove a $5\,\mathrm{m/s}$. La sua energia iniziale è $K_i=\dfrac{1}{2}\cdot4\cdot25=50\,\mathrm{J}$. Quando si ferma, $K_f=0$, perciò
$$
W_{\mathrm{tot}}=0-50\,\mathrm{J}=-50\,\mathrm{J}.
$$
Il segno negativo esprime la diminuzione di energia cinetica. Per calcolare il lavoro totale è sufficiente conoscere le velocità iniziale e finale; la durata della frenata può restare sconosciuta.
:::

## Energia potenziale gravitazionale

:::definizione{#energia-potenziale titolo="Energia potenziale gravitazionale"}
Vicino alla superficie terrestre, dove l'accelerazione di gravità $g$ si considera costante, un corpo posto a una certa altezza possiede un'energia associata alla sua posizione rispetto alla Terra. Scelto un livello al quale attribuire energia nulla, l'**energia potenziale gravitazionale** è
$$
U=mgh,
$$
dove $h$ è la quota misurata verso l'alto rispetto a quel livello. Usiamo $g=9{,}81\,\mathrm{m/s^2}$, salvo diversa indicazione. L'energia potenziale è riferita all'interazione tra corpo e Terra.

Per esempio, con livello zero sul pavimento, una massa di $2\,\mathrm{kg}$ posta a $3\,\mathrm{m}$ ha
$$
U=2\cdot9{,}81\cdot3\,\mathrm{J}=58{,}86\,\mathrm{J}.
$$
Scegliendo un altro livello zero cambia il valore di $U$, mentre la differenza di energia tra due posizioni resta la stessa. Se il corpo si trova sotto il livello scelto, la quota e l'energia potenziale sono negative.
:::

:::teorema{#lavoro-del-peso titolo="Lavoro del peso e dislivello"}
Se un corpo di massa $m$ passa dalla quota $h_i$ alla quota $h_f$, in una regione dove $g$ è costante, il lavoro del peso è
$$
W_P=mg(h_i-h_f)=U_i-U_f.
$$
In discesa $h_i>h_f$, quindi il lavoro del peso è positivo. In salita è negativo. Il risultato dipende dal dislivello tra le posizioni iniziale e finale.

Per esempio, una massa di $2\,\mathrm{kg}$ che scende da $3\,\mathrm{m}$ a $1\,\mathrm{m}$ perde $39{,}24\,\mathrm{J}$ di energia potenziale. Il peso compie perciò lavoro $+39{,}24\,\mathrm{J}$.

::grafico{assi=0 uguale=1 linee="-0.5,0 4,0;0,1 2,1;0,3 2,3" punti="1,3,pieno,A;1,1,pieno,B" vettori="2.8,3,2.8,1,P" etichette="0.3,3.4,hᵢ = 3 m;0.3,1.4,hᶠ = 1 m;2.7,0.4,h = 0" xmin=-1 xmax=4.5 ymin=-0.5 ymax=4 titolo="Il lavoro del peso durante la discesa dipende dalla differenza di quota, pari a $2\,\mathrm{m}$."}
:::

## Energia di una molla

::::teorema{#energia-elastica titolo="Energia potenziale elastica"}
Una molla ideale, usata entro il limite elastico, esercita una forza di richiamo il cui modulo è $F_e=kx$. Il simbolo $k$ indica la costante elastica, mentre $x$ è il modulo dell'allungamento o della compressione rispetto alla lunghezza a riposo. L'energia potenziale elastica, nulla nella configurazione a riposo, è
$$
U_e=\frac{1}{2}kx^2.
$$
Questa energia può essere trasferita a un corpo quando la molla si allenta. Per $k=100\,\mathrm{N/m}$ e $x=0{,}20\,\mathrm{m}$ si ottiene $U_e=2\,\mathrm{J}$.

:::dimostrazione
Durante una deformazione lenta da zero a $x$, la forza esterna che equilibra la molla cresce linearmente da zero a $kx$. Il lavoro è l'area del triangolo sotto il grafico forza-allungamento, quindi
$$
W=\frac{\text{base}\cdot\text{altezza}}{2}
=\frac{x\cdot kx}{2}
=\frac{1}{2}kx^2.
$$
In assenza di dissipazioni e con velocità trascurabile, questo lavoro aumenta l'energia potenziale elastica della molla.
:::
::::

:::esempio{titolo="Area del triangolo e lavoro"}
Per una molla con $k=2\,\mathrm{N/m}$ deformata lentamente di $3\,\mathrm{m}$ nel modello ideale, la forza finale è $6\,\mathrm{N}$. L'area del triangolo vale $\dfrac{3\cdot6}{2}=9\,\mathrm{J}$. Il valore $18\,\mathrm{J}$ si otterrebbe usando la forza finale per tutto lo spostamento, mentre la forza cresce gradualmente.

::grafico{f="2*x" area="2*x;0;0;3" xmin=0 xmax=4 ymin=0 ymax=8 nomi="x,F" punti="3,6" legenda="F=2x" titolo="Modello ideale: $x$ in metri e $F$ in newton. L'area colorata rappresenta il lavoro di $9\,\mathrm{J}$."}
:::

## Conservazione dell'energia meccanica

::::teorema{#conservazione titolo="Conservazione dell'energia meccanica"}
La somma di energia cinetica e potenziale si chiama **energia meccanica** e si indica con $E=K+U$. Quando compiono lavoro soltanto il peso e le forze elastiche ideali, l'energia meccanica si conserva,
$$
K_i+U_i=K_f+U_f.
$$
La somma $U$ comprende tutte le energie potenziali presenti nel problema. Le altre forze eventualmente presenti devono compiere lavoro nullo, come la normale di una guida fissa e liscia.

:::dimostrazione
Per le forze considerate, il lavoro totale è la diminuzione di energia potenziale, $W_{\mathrm{tot}}=U_i-U_f$. Il teorema dell'energia cinetica dà anche $W_{\mathrm{tot}}=K_f-K_i$. Uguagliando si ha
$$
K_f-K_i=U_i-U_f.
$$
Aggiungendo $K_i+U_f$ a entrambi i membri si ottiene la conservazione dell'energia meccanica.
:::
::::

:::esempio{titolo="Caduta da fermo"}
Un corpo cade da fermo per $5\,\mathrm{m}$ con resistenza dell'aria trascurabile. Poniamo il livello zero dell'energia potenziale alla quota finale e assumiamo, in questo esempio, $g=10\,\mathrm{m/s^2}$. La conservazione dà
$$
mg h=\frac{1}{2}mv_f^2,
\qquad v_f=\sqrt{2gh}=\sqrt{100}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
La massa si semplifica perché compare in entrambi i membri. La radice positiva esprime il modulo della velocità; il movimento è diretto verso il basso.
:::

## Attrito e trasformazioni di energia

:::teorema{#dissipazione titolo="Lavoro dell'attrito"}
Su un piano fisso, una forza di attrito dinamico di modulo costante $f$ è opposta allo scorrimento. Su un tratto rettilineo di lunghezza $s$ il suo lavoro è
$$
W_a=-fs.
$$
Se l'attrito è l'unica forza che compie lavoro oltre al peso e alle forze elastiche, allora
$$
E_f-E_i=W_a.
$$
Perciò l'energia meccanica diminuisce. L'energia trasferita al corpo e al piano attraverso l'attrito aumenta la loro energia interna. Considerando anche questa trasformazione, il bilancio complessivo dell'energia resta valido.

Un corpo che possiede inizialmente $40\,\mathrm{J}$ di energia meccanica e subisce un lavoro dell'attrito di $-12\,\mathrm{J}$ termina con $E_f=28\,\mathrm{J}$.
:::

## Potenza e rendimento

:::definizione{#potenza titolo="Potenza media"}
La **potenza media** misura l'energia trasferita nell'unità di tempo. Se un motore compie lavoro $W$ nell'intervallo di tempo $\Delta t$, la sua potenza meccanica media è
$$
P_m=\frac{W}{\Delta t}.
$$
L'unità è il **watt**, simbolo $\mathrm{W}$, con $1\,\mathrm{W}=1\,\mathrm{J/s}$. La lettera $W$ usata per il lavoro indica una grandezza; il simbolo $\mathrm{W}$ dopo un numero indica l'unità di potenza.

Un sollevatore che compie $600\,\mathrm{J}$ in $3\,\mathrm{s}$ sviluppa $P_m=200\,\mathrm{W}$. Se compie lo stesso lavoro in $6\,\mathrm{s}$, la potenza media è $100\,\mathrm{W}$. La quantità di energia trasferita è uguale nei due casi, mentre cambia la durata.
:::

:::definizione{#rendimento titolo="Rendimento"}
Una macchina riceve energia $E_{\mathrm{ass}}$ e ne trasferisce una parte $E_{\mathrm{utile}}$ nella forma richiesta. Il **rendimento** è
$$
\eta=\frac{E_{\mathrm{utile}}}{E_{\mathrm{ass}}}.
$$
La lettera greca $\eta$ si legge «eta». Il rapporto è privo di unità e si esprime anche in percentuale. Per una macchina senza variazioni di energia immagazzinata, $0\leq\eta\leq1$; il valore $1$ corrisponde all'assenza ideale di perdite rispetto all'effetto utile scelto.

Se una macchina assorbe $500\,\mathrm{J}$ e fornisce $350\,\mathrm{J}$ utili, il rendimento è $\eta=0{,}70=70\%$. I restanti $150\,\mathrm{J}$ sono trasferiti in altre forme. Per potenze medie riferite allo stesso intervallo vale anche $\eta=\dfrac{P_{\mathrm{utile}}}{P_{\mathrm{ass}}}$.
:::
