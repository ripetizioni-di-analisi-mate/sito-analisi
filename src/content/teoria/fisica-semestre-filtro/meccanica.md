---
titolo: "Meccanica del punto e dei sistemi"
sommario: "Posizione e moto, forze e vincoli, lavoro ed energia, impulsi e urti, centro di massa e leve: modelli, ipotesi e controlli."
---

:::osservazione
La meccanica collega tre domande: dove si trova un corpo, quali interazioni ne cambiano il moto e quali grandezze permettono di confrontare due stati. Prima del calcolo si sceglie il **sistema**: una pallina, un carrello oppure più corpi insieme. La stessa interazione può essere esterna al primo sistema e interna al secondo. Si dichiarano poi riferimento, assi, intervallo di tempo e idealizzazioni; una formula corretta fuori dal proprio dominio può dare una risposta fisicamente impossibile.
:::

## Posizione, velocità e accelerazione

:::definizione{#cinematica titolo="Descrivere il moto"}
Un **punto materiale** rappresenta un corpo quando dimensioni e rotazione non sono rilevanti per la domanda. Non significa che il corpo sia realmente privo di estensione. Fissati origine, assi e orologio, la legge oraria $\vec r(t)$ assegna una posizione a ogni istante; la traiettoria è l'insieme delle posizioni attraversate, senza l'informazione sui tempi.

Lo spostamento è $\Delta\vec r=\vec r_f-\vec r_i$. La distanza percorsa $s$ è invece la lunghezza del cammino: è non negativa e non diminuisce tornando indietro. Compiere un giro completo riporta al punto iniziale, quindi dà spostamento nullo ma distanza positiva.

$$
\vec v_{\mathrm m}=\dfrac{\Delta\vec r}{\Delta t},\qquad
\vec v=\dfrac{d\vec r}{dt},\qquad
\vec a_{\mathrm m}=\dfrac{\Delta\vec v}{\Delta t},\qquad
\vec a=\dfrac{d\vec v}{dt}.
$$

La **rapidità** istantanea è $|\vec v|$; quella media è $\dfrac{s}{\Delta t}$. Non coincide in generale con il modulo della velocità media. Su una retta $v_x>0$ significa moto nel verso positivo, mentre $a_x<0$ indica che la velocità algebrica diminuisce: il corpo rallenta solo se velocità e accelerazione hanno segni opposti. Se hanno lo stesso segno, aumenta la rapidità. In più dimensioni un'accelerazione può cambiare anche solo la direzione della velocità.
:::

:::osservazione
Nel grafico posizione-tempo la pendenza della secante dà la velocità media; quella della tangente dà la velocità istantanea. Un'intersezione tra due leggi orarie indica un incontro, non necessariamente uguali velocità. Nel grafico velocità-tempo la pendenza dà l'accelerazione e l'area **con segno** dà lo spostamento. Per ottenere la distanza si sommano invece i valori assoluti delle aree. Nel grafico accelerazione-tempo l'area dà la variazione di velocità, non la velocità finale senza conoscere quella iniziale.

![Retta velocità-tempo da 4 a −2 m/s: aree +4 m e −1 m.](/figure/fisica-semestre-filtro/meccanica/grafici-moto-it.svg)

*Per $v_x=4-2t$ in unità SI, fra $0$ e $3\,\mathrm{s}$ lo spostamento è $3\,\mathrm{m}$ e la distanza è $5\,\mathrm{m}$. Il cambio di verso avviene a $2\,\mathrm{s}$.*
:::

## Moti rettilinei e caduta libera

:::teorema{#moti-rettilinei titolo="Accelerazione costante e dominio del modello"}
Nel moto rettilineo uniforme $a_x=0$: la velocità è costante e $x=x_0+v_0t$. Con accelerazione costante e $t=0$ nell'istante iniziale, l'area rettangolare sotto $a_x(t)$ dà $v-v_0=at$. L'area trapezoidale sotto $v(t)$ dà lo spostamento:

$$
v=v_0+at,\qquad
x=x_0+v_0t+\dfrac12at^2.
$$
$$
x-x_0=\dfrac{v_0+v}{2}\,t,\qquad
v^2=v_0^2+2a(x-x_0).
$$

L'ultima relazione elimina il tempo, ma il quadrato nasconde il verso della velocità: la radice positiva dà una rapidità, non automaticamente una componente positiva. La media $\dfrac{v_0+v}{2}$ vale qui perché la velocità varia linearmente; non è una regola generale per qualunque moto.
:::

:::osservazione
Durante una frenata con $v_0=12\,\mathrm{m/s}$ e $a=-3\,\mathrm{m/s^2}$ si ottengono $t=4\,\mathrm{s}$ e $s=24\,\mathrm{m}$. Prolungare $v=12-3t$ oltre l'arresto descriverebbe una ripartenza all'indietro: non rappresenta più una frenata che termina a corpo fermo. Se prima di frenare passa un tempo di reazione $t_r$, percorso a velocità costante, si aggiunge $v_0t_r$. Il tempo di reazione non va inserito nel tratto a decelerazione costante.

La **caduta libera** è il moto sotto la sola gravità; può includere una fase ascendente. Vicino alla superficie terrestre, per dislivelli piccoli rispetto al raggio terrestre, si può assumere $g$ uniforme e trascurare l'aria. Con asse verticale positivo verso l'alto si pone $a_y=-g$, anche durante la salita. Al punto più alto di un lancio verticale $v_y=0$ per un istante, ma $a_y=-g$ continua a cambiare la velocità. La massa non compare nelle leggi orarie del modello. Oggetti di forme diverse nell'aria possono invece cadere diversamente perché interviene la resistenza del fluido.
:::

## Moti nel piano e moto circolare

:::teorema{#moti-nel-piano titolo="Componenti indipendenti, tempo comune"}
In un lancio obliquo senza resistenza dell'aria, con gravità verticale uniforme, si fissano $x$ orizzontale e $y$ verso l'alto. La componente orizzontale della velocità resta costante; quella verticale segue il moto uniformemente accelerato. Le due componenti appartengono allo stesso corpo e vanno valutate allo **stesso istante**.

$$
\begin{cases}
x=x_0+v_0\cos\theta\,t,\\
y=y_0+v_0\sin\theta\,t-\dfrac12gt^2,
\end{cases}
\qquad
\begin{cases}
v_x=v_0\cos\theta,\\
v_y=v_0\sin\theta-gt.
\end{cases}
$$

Eliminando $t$ si ottiene una parabola se $v_x\ne0$. Al vertice è nulla solo $v_y$: la velocità è ancora orizzontale. Se arrivo e partenza sono alla stessa quota, con lancio sopra l'orizzontale, il tempo di volo e la gittata sono:

$$
T=\dfrac{2v_0\sin\theta}{g},\qquad
R=\dfrac{v_0^2\sin(2\theta)}{g}.
$$

La massima gittata a $45^\circ$ e l'uguaglianza delle gittate per angoli complementari valgono sotto queste ipotesi. Per un lancio da un balcone si risolve invece l'equazione verticale alla quota di arrivo e si sceglie il tempo fisicamente ammissibile.
:::

:::osservazione
Nel moto circolare uniforme la rapidità è costante, ma il vettore velocità ruota ed è tangente alla circonferenza. Il periodo $T$ è il tempo di un giro, mentre $\omega=\dfrac{2\pi}{T}$ è la velocità angolare, misurata in radianti al secondo.

$$
v=\dfrac{2\pi r}{T}=\omega r,\qquad
a_c=\dfrac{v^2}{r}=\omega^2r.
$$

L'accelerazione è diretta verso il centro. A raggio fissato raddoppiare la rapidità quadruplica $a_c$. La dicitura **forza centripeta** indica la risultante radiale richiesta, $\dfrac{mv^2}{r}$: va identificata nelle forze reali, per esempio tensione o attrito. Non si aggiunge come ulteriore forza al diagramma del corpo. Se la rapidità cambia, compare anche un'accelerazione tangenziale.

![Parabola di un lancio a 20 m/s e 30 gradi, vertice a 5,10 m e gittata 35,31 m.](/figure/fisica-semestre-filtro/meccanica/proiettile-it.svg)

*La figura usa $g=9{,}81\,\mathrm{m/s^2}$ e quote iniziale e finale uguali. Al vertice $v_x$ resta diverso da zero.*

![Velocità tangente e accelerazione radiale su un cerchio di raggio 0,80 m.](/figure/fisica-semestre-filtro/meccanica/circolare-it.svg)

*Con $v=4\,\mathrm{m/s}$ e $r=0{,}80\,\mathrm{m}$, $a_c=20\,\mathrm{m/s^2}$. Le frecce di velocità e accelerazione hanno unità diverse: le loro lunghezze non si confrontano numericamente.*
:::

## Le leggi della dinamica

:::teorema{#newton titolo="Newton e scelta del corpo"}
Un riferimento **inerziale** è un riferimento nel quale un corpo libero da interazioni risultanti conserva la velocità. Un laboratorio terrestre è spesso approssimabile come inerziale per esperimenti brevi su piccole distanze; un ascensore accelerato non lo è. Le tre leggi di Newton si usano qui in un riferimento inerziale.

Il primo principio afferma che una risultante nulla mantiene la velocità costante: non occorre una forza per mantenere un moto rettilineo uniforme. Il secondo lega la risultante all'accelerazione di una massa costante:

$$
\sum\vec F=m\vec a,\qquad
\sum F_x=ma_x,\qquad \sum F_y=ma_y.
$$

Il terzo principio associa a ogni forza di $A$ su $B$ una forza uguale e opposta di $B$ su $A$. Le forze della coppia agiscono su **corpi diversi**: non si cancellano nell'equazione di uno solo di essi. Il peso di un libro e la normale del tavolo sul libro possono equilibrarsi, ma non costituiscono una coppia azione-reazione. La reazione al peso è l'attrazione gravitazionale del libro sulla Terra; la reazione alla normale è la forza del libro sul tavolo.
:::

:::osservazione
Un diagramma di corpo libero contiene tutte e sole le forze applicate al corpo scelto. Una componente non è una forza ulteriore: disegnare sia $\vec F$ sia le sue componenti serve a proiettare, ma non autorizza a contarle due volte. Gli assi possono essere scelti lungo un piano inclinato per semplificare le equazioni, senza cambiare la fisica.

Un corpo con risultante nulla è in equilibrio traslazionale; resta fermo soltanto se la velocità iniziale è nulla. Per un oggetto esteso questo non basta a escludere la rotazione. Inoltre un istante con $v=0$ non implica equilibrio: la pallina al culmine di un lancio conserva peso e accelerazione. In un sistema di più corpi si possono sommare le equazioni per eliminare forze interne, ma per ricavare una tensione interna occorre tornare a un sottosistema.

![Forze su un blocco tirato a 30 gradi: trazione 24 N, peso 39,24 N, normale 27,24 N.](/figure/fisica-semestre-filtro/meccanica/corpo-libero-it.svg)

*Il blocco da $4\,\mathrm{kg}$ resta sul pavimento privo di attrito: $N+F\sin30^\circ-mg=0$. La normale non uguaglia il peso. Frecce proporzionali alle forze.*
:::

## Forze di uso comune

:::definizione{#forze titolo="Identificare le interazioni"}
La gravità attrae due masse puntiformi secondo $F=\dfrac{Gm_1m_2}{r^2}$, con $G\simeq6{,}67\cdot10^{-11}\,\mathrm{N\,m^2/kg^2}$. La stessa relazione vale esternamente a distribuzioni sfericamente simmetriche, usando la distanza fra i centri. Raddoppiare $r$ riduce la forza a un quarto. Vicino alla Terra si riassume il campo locale nel vettore $\vec g$ e il peso vale $\vec P=m\vec g$. La massa, in chilogrammi, non è il peso, in newton: spostarsi su un altro pianeta cambia il secondo, non la prima.

La **normale** è la forza di contatto perpendicolare alla superficie. Un appoggio non adesivo può spingere ma non tirare: deve risultare $N\ge0$. Se un calcolo con contatto imposto dà $N<0$, il vincolo non è realizzabile e il corpo si separa. La **tensione** di un filo flessibile teso tira lungo il filo. La stessa tensione ai due estremi richiede un filo di massa trascurabile; attraverso una carrucola si assumono inoltre massa e attrito trascurabili.

$$
|F_s|\le\mu_sN,\qquad |F_d|=\mu_dN,\qquad F_{\mathrm{el},x}=-kx.
$$

L'**attrito statico** assume il valore necessario a impedire lo scorrimento relativo, finché non supera il limite $\mu_sN$. Non vale sempre il massimo: con una spinta orizzontale di $5\,\mathrm{N}$ e soglia $12\,\mathrm{N}$, vale $5\,\mathrm{N}$. L'uguaglianza al limite è ancora compatibile con l'equilibrio ideale; superarlo rende impossibile la quiete. Durante lo scorrimento il modello di **attrito dinamico** usa il modulo $\mu_dN$, opposto alla velocità relativa delle superfici. I coefficienti sono adimensionali e il modello è un'approssimazione, non una legge valida per ogni contatto.

Per una molla ideale $x$ è l'allungamento algebrico rispetto alla lunghezza di riposo, non la lunghezza totale. La forza elastica è di richiamo e $k$ si misura in $\mathrm{N/m}$. La legge di Hooke vale nel regime elastico lineare. Due molle ideali in serie portano la stessa forza e sommano gli allungamenti: $\dfrac{1}{k_{\mathrm{eq}}}=\dfrac1{k_1}+\dfrac1{k_2}$. In parallelo hanno lo stesso allungamento e sommano le forze: $k_{\mathrm{eq}}=k_1+k_2$.
:::

:::osservazione
Su un piano fermo inclinato di $\theta$, senza altre forze normali al piano, $N=mg\cos\theta$ e la componente del peso lungo la discesa è $mg\sin\theta$. La quiete è possibile se $mg\sin\theta\le\mu_smg\cos\theta$, cioè $\tan\theta\le\mu_s$ per $0\le\theta<90^\circ$. In scorrimento verso il basso l'accelerazione è $g(\sin\theta-\mu_d\cos\theta)$: può essere negativa se il corpo sta scendendo ma rallenta.

![Blocco su piano inclinato con peso verticale, normale perpendicolare e attrito verso la salita.](/figure/fisica-semestre-filtro/meccanica/piano-inclinato-it.svg)

*L'attrito mostrato contrasta la discesa o la tendenza a scendere. Se lo scorrimento fosse verso la salita, il verso dell'attrito dinamico si invertirebbe. Schema delle direzioni, non dei moduli.*
:::

## Lavoro, potenza ed energia cinetica

:::teorema{#lavoro-energia titolo="Dalle forze alla variazione di energia cinetica"}
Il lavoro misura il trasferimento di energia associato a una forza durante uno spostamento del suo punto di applicazione. Per il punto materiale con forza costante, $W=F\Delta r\cos\theta$: il lavoro è positivo se la forza favorisce lo spostamento, negativo se lo ostacola e nullo se è perpendicolare. Per una forza variabile si sommano contributi infinitesimi:

$$
W=\int_i^f\vec F\cdot d\vec r,\qquad
K=\dfrac12mv^2,\qquad W_{\mathrm{tot}}=K_f-K_i.
$$

Su una retta il lavoro è l'area con segno sotto $F_x(x)$, non sotto $F_x(t)$: quest'ultima fornisce un impulso. Il **teorema dell'energia cinetica** usa il lavoro totale di tutte le forze sul corpo. Infatti $F_{\mathrm{tot},x}=ma_x$ e $a_x\,dx=v_x\,dv_x$ danno, integrando, $W_{\mathrm{tot}}=\dfrac{m(v_f^2-v_i^2)}2$. L'energia cinetica è scalare e non negativa; dipende dal riferimento perché dipende dalla velocità.
:::

:::osservazione
Con $F_x=(4\,\mathrm{N/m})x$ tra $0$ e $3\,\mathrm{m}$ il lavoro vale l'area del triangolo, $18\,\mathrm{J}$. Usare la sola forza finale per tutta la distanza darebbe $36\,\mathrm{J}$ e sovrastimerebbe il trasferimento. Un joule è il prodotto di un newton per un metro, $1\,\mathrm{J}=1\,\mathrm{N\,m}$. Un risultato energetico negativo può essere un lavoro o una variazione di energia, ma non un valore di $K$.

La **potenza** misura quanto rapidamente avviene il trasferimento:

$$
P_{\mathrm m}=\dfrac{W}{\Delta t},\qquad P=\vec F\cdot\vec v,\qquad
1\,\mathrm{W}=1\,\mathrm{J/s}.
$$

La potenza media non determina il picco istantaneo. Una forza costante su un corpo che accelera può erogare potenza crescente. Tenere fermo un peso comporta lavoro meccanico nullo sul peso, perché il suo punto di applicazione non si sposta; non significa consumo metabolico nullo dei muscoli. Il rendimento $\eta=\dfrac{E_{\mathrm{utile}}}{E_{\mathrm{in}}}$ confronta energie omogenee e permette di risalire al fabbisogno in ingresso senza confondere potenza ed energia.

![Grafico forza-posizione crescente da zero a 12 N su 3 m; area triangolare 18 J.](/figure/fisica-semestre-filtro/meccanica/lavoro-it.svg)

*L'area va calcolata usando la componente della forza lungo lo spostamento. Qui la forza cresce linearmente, quindi il suo valore medio spaziale è $6\,\mathrm{N}$.*
:::

## Energia potenziale e conservazione

:::teorema{#energia-meccanica titolo="Il lavoro conservativo e il bilancio del sistema"}
Una forza è **conservativa** se il lavoro tra due posizioni non dipende dal percorso, equivalentemente se il lavoro su ogni cammino chiuso è nullo. Si può allora introdurre un'energia potenziale tale che $W_c=-\Delta U$. Il potenziale non è il lavoro: una discesa gravitazionale fa diminuire $U$ e dà lavoro positivo del peso. Lo zero di $U$ è arbitrario; contano le differenze.

$$
U_g=mgy,\qquad U_e=\dfrac12kx^2,\qquad
E_{\mathrm{mecc}}=K+U.
$$
$$
\Delta(K+U)=W_{\mathrm{non\,cons}}.
$$

La prima espressione usa gravità uniforme e quota $y$ rispetto a un livello scelto. La seconda usa una molla lineare con zero energetico alla lunghezza naturale; compressione e allungamento della stessa entità immagazzinano la stessa energia. L'energia potenziale gravitazionale appartiene all'interazione corpo-Terra, quella elastica al sistema con la molla. Le scritture abbreviate attribuite al corpo sottintendono questi sistemi.

Il bilancio segue da $\Delta K=W_c+W_{\mathrm{non\,cons}}$ sostituendo $W_c=-\Delta U$. Se il lavoro non conservativo è nullo, l'energia meccanica si conserva. Non serve che tutte le forze siano nulle: peso e forza elastica possono scambiare energia potenziale e cinetica; la normale di una guida fissa ideale non compie lavoro se è perpendicolare al moto.
:::

:::osservazione
Per attrito dinamico costante su una superficie **ferma**, $W_d=-\mu_dNs$, con $s$ lunghezza del tratto percorso. Con un nastro trasportatore in moto l'attrito può invece compiere lavoro positivo sul corpo: il verso dipende dallo scorrimento relativo, il lavoro dallo spostamento del corpo nel riferimento scelto. Non si applica automaticamente il segno meno a ogni problema con attrito.

In una discesa con $30\,\mathrm{J}$ di energia potenziale iniziale, partenza da fermo e $10\,\mathrm{J}$ dissipati, al fondo restano $20\,\mathrm{J}$ cinetici. L'energia meccanica diminuisce, ma includendo l'energia interna di corpo e piano il bilancio totale resta rispettato. Un metodo energetico può dare la rapidità a una quota senza conoscere l'intero moto; non dà da solo tempo di volo, verso della velocità o validità di un contatto. Questi richiedono ulteriori equazioni e controlli.

![Bilancio di 30 J: energia potenziale iniziale trasformata in 20 J cinetici e 10 J interni.](/figure/fisica-semestre-filtro/meccanica/energie-it.svg)

*Al fondo si sceglie $U_g=0$. Le altezze delle barre sono proporzionali alle energie; il sistema completo comprende corpo, Terra e piano.*
:::

## Impulso e quantità di moto

:::teorema{#quantita-di-moto titolo="Forze nel tempo e urti"}
La quantità di moto $\vec p=m\vec v$ è vettoriale e si misura in $\mathrm{kg\,m/s}$. Il segno di una componente non si elimina facendo un bilancio. Integrando la seconda legge di Newton nel tempo si ottiene il teorema dell'impulso:

$$
\vec J_{\mathrm{ext}}=\int_{t_i}^{t_f}\vec F_{\mathrm{ext}}\,dt
=\Delta\vec p,\qquad
\vec F_{\mathrm m}=\dfrac{\vec J}{\Delta t}.
$$

L'area sotto il grafico forza-tempo dà l'impulso anche se la forza non è costante; $1\,\mathrm{N\,s}=1\,\mathrm{kg\,m/s}$. La forza media è quella che, agendo per tutto l'intervallo, produce lo stesso impulso: non coincide in generale con la forza massima. A parità di variazione di quantità di moto, un tempo maggiore riduce il modulo della forza risultante media. Se si chiede la forza di contatto durante un urto verticale, va considerato anche l'impulso del peso: l'impulso del contatto non è automaticamente quello risultante.

Per un sistema di corpi le forze interne si elidono nella somma grazie al terzo principio. La quantità di moto totale si conserva se l'impulso esterno è nullo, o si conserva approssimativamente quando esso è trascurabile durante l'intervallo studiato. Può conservarsi una sola componente se è nullo solo l'impulso esterno lungo quell'asse.
:::

:::osservazione
In un urto **elastico** si conserva anche l'energia cinetica totale; in un urto anelastico una parte può trasformarsi in altre forme. In un urto completamente anelastico i corpi restano uniti e hanno la stessa velocità finale:

$$
v_f=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}.
$$

Questa formula deriva dalla conservazione della quantità di moto, non da quella dell'energia cinetica. Nel pendolo balistico si separano due fasi: durante il breve urto si conserva approssimativamente la quantità di moto orizzontale del sistema proiettile-blocco; nella successiva salita senza dissipazione si conserva l'energia meccanica. Usare un unico bilancio di energia meccanica dall'istante prima dell'urto alla quota massima ignorerebbe la dissipazione nell'incastro.

![Impulso triangolare della forza risultante: base 0,10 s, altezza 100 N e area 5 N s.](/figure/fisica-semestre-filtro/meccanica/impulso-it.svg)

*La forza media è $50\,\mathrm{N}$, metà del massimo per questo specifico profilo triangolare. L'area determina $\Delta p$, non direttamente $\Delta v$ senza conoscere la massa.*
:::

## Centro di massa e sistemi di corpi

:::definizione{#centro-di-massa titolo="Una posizione media pesata per descrivere il sistema"}
Per masse costanti il centro di massa è la media delle posizioni pesata con le masse. Non coincide necessariamente con il centro geometrico e può trovarsi dove non c'è materia, come nel centro di un anello uniforme.

$$
\vec r_{\mathrm{CM}}=\dfrac{\sum_i m_i\vec r_i}{M},\qquad
M=\sum_i m_i.
$$
$$
\vec p_{\mathrm{tot}}=M\vec v_{\mathrm{CM}},\qquad
M\vec a_{\mathrm{CM}}=\sum\vec F_{\mathrm{ext}}.
$$

Derivando la posizione si ottiene la relazione con la quantità di moto totale; derivando ancora e sommando le equazioni di Newton si ottiene la legge per l'accelerazione. Le forze interne possono modificare distanze e velocità relative, ma non accelerano da sole il centro di massa di un sistema chiuso di massa costante. Il moto complessivo si può quindi studiare come quello di una massa $M$ soggetta alla risultante esterna, senza pretendere che ogni parte segua la stessa traiettoria.
:::

:::osservazione
Con $2\,\mathrm{kg}$ in $x=0$ e $1\,\mathrm{kg}$ in $x=3\,\mathrm{m}$ si trova $x_{\mathrm{CM}}=1\,\mathrm{m}$: il punto è più vicino alla massa maggiore. Un valore esterno all'intervallo fra due masse positive segnalerebbe un errore. Il punto medio $1{,}5\,\mathrm{m}$ sarebbe corretto soltanto per masse uguali.

Se la risultante esterna è nulla il centro di massa ha velocità costante, ma non è necessariamente fermo. Rimane nella stessa posizione solo se la quantità di moto iniziale è nulla. Per una persona che cammina su un carrello libero, persona e carrello si spostano in versi opposti, mantenendo fisso il centro di massa orizzontale quando il sistema parte da fermo e le forze esterne orizzontali sono trascurabili. Il carrello non resta fermo nel riferimento del suolo: il cammino della persona rispetto al carrello non coincide con il suo spostamento rispetto al suolo.

La conservazione della quantità di moto non impone la conservazione dell'energia cinetica: una molla interna può separare due carrelli inizialmente fermi producendo velocità opposte e trasformando energia elastica in cinetica.

![Due masse di 2 kg e 1 kg a 0 e 3 m; centro di massa a 1 m.](/figure/fisica-semestre-filtro/meccanica/centro-massa-it.svg)

*Le distanze dal centro di massa sono $1\,\mathrm{m}$ e $2\,\mathrm{m}$: i prodotti massa per distanza risultano uguali.*
:::

## Equilibrio rotazionale e leve

:::teorema{#leve titolo="Forze, momenti e corpo rigido"}
Un **corpo rigido** mantiene costanti le distanze tra i suoi punti; può comunque traslare e ruotare. Il modello trascura deformazioni ed è utile per studiare leve e travi. Il momento di una forza rispetto a un polo $O$ è $\vec\tau=\vec r\times\vec F$, dove $\vec r$ va dal polo al punto di applicazione. Il modulo è $Fb$, con $b=r\sin\theta$ distanza perpendicolare dalla retta d'azione al polo. Il braccio non coincide sempre con la distanza dal punto di applicazione: una forza diretta verso il polo ha momento nullo anche se applicata lontano.

Nel piano si adotta, per esempio, momento antiorario positivo e orario negativo. Il momento si misura in $\mathrm{N\,m}$; pur avendo le stesse dimensioni dell'energia, descrive un effetto rotazionale e non si interpreta come lavoro. Per l'equilibrio statico di un corpo inizialmente fermo occorrono entrambe le condizioni:

$$
\sum\vec F=0,\qquad \sum\vec\tau_O=0.
$$

Due forze uguali e opposte su rette parallele diverse hanno risultante nulla ma possono formare una coppia con momento non nullo. Per contro, momento totale nullo non garantisce equilibrio traslazionale. Scegliere il polo in una cerniera elimina il momento della sua reazione, non la reazione stessa: essa resta nell'equazione delle forze.
:::

:::osservazione
Per una leva ideale con due momenti opposti, $F_1b_1=F_2b_2$. Nel modello dell'avambraccio orizzontale con peso proprio trascurato, un carico di $40\,\mathrm{N}$ a $0{,}30\,\mathrm{m}$ dal gomito e una forza muscolare verticale a $0{,}05\,\mathrm{m}$ richiedono $F_m=240\,\mathrm{N}$. La forza muscolare supera il carico perché ha braccio minore. Dall'equilibrio verticale si trova poi $R_y=40-240=-200\,\mathrm{N}$: la reazione articolare sul segmento è rivolta verso il basso.

Se il muscolo è inclinato, nel momento si usa la componente perpendicolare oppure il braccio perpendicolare, senza applicare due volte il fattore seno. Se si include il peso dell'avambraccio, esso agisce nel suo centro di massa e aggiunge un momento. Queste sono idealizzazioni di un segmento rigido con forze assegnate: non quantificano da sole carichi clinici, contrazioni di più muscoli o deformazioni dei tessuti. Il controllo finale richiede sia somma delle forze sia somma dei momenti nulla e verifica dei versi delle reazioni ammesse dai vincoli.

![Leva orizzontale: gomito a zero, muscolo a 5 cm e carico a 30 cm; reazione articolare verso il basso.](/figure/fisica-semestre-filtro/meccanica/leva-it.svg)

*Posizioni in scala lungo l'avambraccio; frecce schematiche. Il muscolo e il carico producono momenti opposti rispetto al gomito.*
:::
