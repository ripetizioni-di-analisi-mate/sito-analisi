---
titolo: Meccanica del punto e dei sistemi
sommario: Dal moto alle forze, dal lavoro alle leggi di conservazione, fino al centro di massa e all'equilibrio delle leve nel corpo umano.
---

:::percorso
Si usano le unità, i grafici e i vettori del capitolo sui metodi della fisica. Prima si descrive il moto, poi si studiano le forze che lo modificano e i bilanci di energia e quantità di moto. Pressione nei fluidi e oscillazioni useranno questi stessi principi.
:::

## Posizione, velocità e accelerazione

:::definizione{#cinematica titolo="Descrivere il moto"}
Scelto un sistema di riferimento, il vettore posizione $\vec r(t)$ individua il punto materiale. La **traiettoria** è l'insieme dei punti attraversati; la **legge oraria** assegna la posizione a ogni istante. Lo spostamento $\Delta\vec r=\vec r_f-\vec r_i$ dipende dagli estremi e può differire dalla distanza percorsa.
$$
\vec v_{\mathrm m}=\frac{\Delta\vec r}{\Delta t},\qquad
\vec v=\frac{d\vec r}{dt},\qquad
\vec a_{\mathrm m}=\frac{\Delta\vec v}{\Delta t},\qquad
\vec a=\frac{d\vec v}{dt}.
$$
La velocità istantanea è tangente alla traiettoria. L'accelerazione può cambiare il modulo o la direzione della velocità. Su una retta il segno della velocità indica il verso rispetto all'asse scelto.
:::

## Moti rettilinei e caduta libera

:::teorema{#moti-rettilinei titolo="Leggi orarie con accelerazione costante"}
Posto $t=0$ nell'istante iniziale, nel **moto rettilineo uniforme** si ha $a=0$ e $x=x_0+v_0t$. Se l'accelerazione è costante,
$$
\begin{aligned}
v&=v_0+at,\\[4pt]
x&=x_0+v_0t+\frac12at^2,\\[4pt]
v^2&=v_0^2+2a(x-x_0).
\end{aligned}
$$
La prima relazione segue dall'area sotto il grafico accelerazione-tempo; la seconda dall'area sotto il grafico velocità-tempo. La terza si ottiene eliminando $t$.

In caduta libera vicino alla superficie terrestre, trascurando l'aria e scegliendo l'asse verso l'alto, $a=-g$ con $g\simeq9{,}81\,\mathrm{m/s^2}$. Alla quota massima di un lancio verticale la velocità è nulla e l'accelerazione vale ancora $-g$.
:::

:::esempio{titolo="Distanza di arresto"}
Con $v_0=12\,\mathrm{m/s}$ e $a=-3\,\mathrm{m/s^2}$, il tempo per fermarsi è $t=-\dfrac{v_0}{a}=4\,\mathrm{s}$. Lo spazio percorso è
$$
\Delta x=12\cdot4+\frac12(-3)4^2=24\,\mathrm{m}.
$$
L'area triangolare sotto il grafico velocità-tempo dà lo stesso risultato.
:::

## Moti nel piano e moto circolare

:::teorema{#moti-nel-piano titolo="Proiettili e moto circolare uniforme"}
Per un lancio con velocità iniziale $v_0$ inclinata di $\theta$, con aria trascurabile e gravità uniforme, le componenti evolvono secondo
$$
\begin{cases}
x=x_0+v_0\cos\theta\,t,\\
y=y_0+v_0\sin\theta\,t-\dfrac12gt^2.
\end{cases}
$$
La traiettoria è parabolica se la componente orizzontale è non nulla. Se partenza e arrivo sono alla stessa quota, la gittata è $R=\dfrac{v_0^2\sin(2\theta)}{g}$.

Su una circonferenza di raggio $r$ percorsa a velocità di modulo costante,
$$
v=\frac{2\pi r}{T}=\omega r,\qquad
a_c=\frac{v^2}{r}=\omega^2r.
$$
$T$ è il periodo e $\omega$ la velocità angolare. L'accelerazione centripeta è diretta verso il centro, perché la direzione della velocità cambia.
:::

## Le leggi della dinamica

:::teorema{#newton titolo="Tre principi di Newton"}
In un **sistema di riferimento inerziale** un corpo con risultante delle forze nulla mantiene la propria velocità costante. La variazione del moto di un punto di massa costante è descritta da
$$
\sum\vec F=m\vec a.
$$
Se un corpo $A$ esercita una forza su $B$, allora $B$ esercita su $A$ una forza uguale e opposta. Le due forze agiscono su corpi diversi; quando si studia un solo corpo, si disegnano solo le forze applicate a quel corpo.

Per impostare un problema si scelgono il corpo e gli assi, si elencano le forze esterne e si scrive un'equazione per ciascuna componente. La risultante nulla equivale all'equilibrio traslazionale; se il corpo è inizialmente fermo, resta fermo.
:::

## Forze di uso comune

:::definizione{#forze titolo="Peso, contatto, attrito, elasticità e gravità"}
Vicino alla superficie terrestre il peso è $\vec P=m\vec g$. La **reazione normale** è perpendicolare al vincolo; la **tensione** di un filo ideale agisce lungo il filo e tira il corpo. La normale vale $mg$ soltanto quando l'equazione lungo la normale lo consente.

L'attrito statico si adatta alla forza applicata fino a $|F_s|\le\mu_sN$; durante lo scorrimento il modello di attrito dinamico dà $|F_d|=\mu_dN$, in verso opposto allo scorrimento relativo. Una molla ideale lungo un asse esercita $F_x=-kx$, con $x$ allungamento rispetto alla lunghezza di riposo.

La **gravitazione universale** tra masse puntiformi, o sfere con simmetria sferica esternamente a esse, dà
$$
F=G\frac{m_1m_2}{r^2},\qquad
G\simeq6{,}67\cdot10^{-11}\,\mathrm{N\,m^2/kg^2}.
$$
La forza è attrattiva e $r$ è la distanza fra i centri.
:::

## Lavoro, potenza ed energia cinetica

:::teorema{#lavoro-energia titolo="Teorema dell'energia cinetica"}
Il **lavoro** di una forza costante su uno spostamento è $W=F\Delta r\cos\theta$; per una forza variabile si sommano i contributi infinitesimi, $W=\int\vec F\cdot d\vec r$. La **potenza media** è $P=\dfrac{W}{\Delta t}$, quella istantanea $P=\vec F\cdot\vec v$.
$$
K=\frac12mv^2,\qquad W_{\mathrm{tot}}=K_f-K_i.
$$
Il lavoro totale include tutte le forze sul corpo. Su una retta, moltiplicando $ma=F$ per lo spostamento e usando $a\,dx=v\,dv$, si ottiene $F\,dx=m v\,dv$; l'integrazione dà il teorema.
:::

## Energia potenziale e conservazione

:::teorema{#energia-meccanica titolo="Forze conservative e bilanci energetici"}
Per una **forza conservativa** il lavoro dipende solo dagli estremi e si scrive $W_c=-\Delta U$. Vicino alla Terra $U_g=mgh$; per una molla ideale $U_e=\dfrac12kx^2$, scegliendo i rispettivi zeri di riferimento.
$$
\Delta(K+U)=W_{\mathrm{non\,cons}}.
$$
Se il lavoro delle forze non conservative è nullo, l'energia meccanica $K+U$ si conserva. Con attrito radente su un percorso di lunghezza $s$, se il suo modulo è costante, il lavoro vale $-F_ds$ e l'energia meccanica diminuisce.
:::

## Impulso e quantità di moto

:::teorema{#quantita-di-moto titolo="Impulso e conservazione della quantità di moto"}
La **quantità di moto** è $\vec p=m\vec v$. L'impulso della risultante esterna è la sua variazione:
$$
\vec J=\int\vec F_{\mathrm{ext}}\,dt=\Delta\vec p.
$$
Per una forza media su un intervallo $\Delta t$, $\vec J=\vec F_{\mathrm m}\Delta t$. Per un sistema di corpi le forze interne si cancellano nella somma. Se l'impulso esterno è nullo, $\sum_i\vec p_i$ si conserva.

In un urto completamente anelastico rettilineo due masse restano unite e $v_f=\dfrac{m_1v_1+m_2v_2}{m_1+m_2}$. La quantità di moto si conserva nelle condizioni indicate; l'energia cinetica può trasformarsi in energia interna.
:::

## Centro di massa e sistemi di corpi

:::definizione{#centro-di-massa titolo="Centro di massa"}
Per punti materiali di massa costante,
$$
\vec r_{\mathrm{CM}}=\frac{\sum_i m_i\vec r_i}{\sum_i m_i},\qquad
M\vec a_{\mathrm{CM}}=\sum\vec F_{\mathrm{ext}}.
$$
$M$ è la massa totale. Il centro di massa descrive il moto traslazionale complessivo anche quando le parti si muovono diversamente. Con $2\,\mathrm{kg}$ in $x=0$ e $1\,\mathrm{kg}$ in $x=3\,\mathrm{m}$ si ottiene $x_{\mathrm{CM}}=1\,\mathrm{m}$, più vicino alla massa maggiore.
:::

## Equilibrio rotazionale e leve

:::teorema{#leve titolo="Momenti ed equilibrio di un corpo rigido"}
In un **corpo rigido** le distanze fra i punti restano costanti. Il momento di una forza rispetto a un polo è $\vec\tau=\vec r\times\vec F$, di modulo $Fb$, dove $b$ è la distanza perpendicolare del polo dalla retta d'azione. L'equilibrio statico richiede
$$
\begin{cases}
\sum\vec F=0,\\
\sum\vec\tau=0.
\end{cases}
$$
Per una leva ideale con due momenti opposti, $F_1b_1=F_2b_2$. Nel modello dell'avambraccio orizzontale il gomito è il fulcro; la forza del bicipite ha un braccio piccolo e può superare di molto il carico sostenuto. Se il carico è $30\,\mathrm{N}$ a $0{,}30\,\mathrm{m}$ e il braccio muscolare è $0{,}04\,\mathrm{m}$, trascurando il peso dell'avambraccio si trova $F_m=225\,\mathrm{N}$. La reazione al gomito si determina poi dall'equilibrio delle forze.

::grafico{assi=0 linee="0,1 4,1;0,0.4 0.4,1 0.8,0.4" vettori="1,1,1,2.7,Fₘ;4,1,4,-0.5,P" segmenti="0.4,0.2,1,0.2;1,-0.1,4,-0.1" etichette="0.4,1.3,O;0.7,0,bₘ;2.6,-0.3,bₚ" xmin=-0.3 xmax=4.7 ymin=-0.8 ymax=3 titolo="Schema di una leva muscolare: i bracci si misurano dal fulcro alle rette d'azione delle forze. Disegno non in scala."}
:::
