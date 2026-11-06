---
titolo: "Gravitazione e orbite"
sommario: "Legge di Newton, campo gravitazionale, energia potenziale, orbite circolari, leggi di Keplero e velocità di fuga."
---

## La legge di gravitazione

:::teorema{#legge-gravitazione titolo="Attrazione fra masse"}
Due masse puntiformi $m_1,m_2$ a distanza $r$ si attraggono con forza di modulo
$$
F=G\frac{m_1m_2}{r^2},\qquad G=6{,}67\cdot10^{-11}\,\mathrm{N\cdot m^2/kg^2}.
$$
Le forze sono dirette lungo la congiungente e formano una coppia di azione e reazione. La legge è sperimentale. Per corpi sferici con distribuzione di massa sfericamente simmetrica, esterni l'uno all'altro, si usa la distanza fra i centri e la massa totale di ciascuno.

Raddoppiando una massa la forza raddoppia; raddoppiando la distanza si riduce a un quarto. L'altezza $h$ sopra un pianeta di raggio $R$ corrisponde a distanza dal centro $r=R+h$. La sola quota non va inserita al posto di $r$.
:::

## Campo e peso

:::definizione{#campo-gravitazionale titolo="Accelerazione prodotta da una massa"}
Il campo gravitazionale è la forza per unità di massa di prova. All'esterno di una massa sferica $M$,
$$
g(r)=\frac{GM}{r^2}.
$$
È diretto verso il centro e si misura in $\mathrm{N/kg}$, equivalenti a $\mathrm{m/s^2}$. Il peso di un corpo di massa $m$ è $P=mg(r)$. Vicino alla superficie terrestre si usa $g\simeq9{,}81\,\mathrm{m/s^2}$; su grandi variazioni di quota si considera la dipendenza da $r$.

A distanza $2R$ dal centro di un pianeta il campo è un quarto del valore superficiale. Questo punto si trova a quota $R$, non a quota $2R$. Il campo generato da più masse è la somma vettoriale dei campi; lungo una retta i segni dipendono dalla posizione rispetto alle masse.
:::

::grafico{f="4/x^2" xmin=1 xmax=6 ymin=0 ymax=5 nomi="r,g" titolo="Il campo esterno diminuisce con il quadrato della distanza dal centro"}

## Energia gravitazionale

:::teorema{#energia-gravitazionale titolo="Zero dell’energia all’infinito"}
Ponendo zero l'energia potenziale quando le masse sono infinitamente lontane,
$$
U(r)=-\frac{GMm}{r}.
$$
Il segno negativo indica che occorre fornire energia per separare le masse fino all'infinito. Nel passaggio da $r_i$ a $r_f$, il lavoro della gravità è $W_g=GMm\left(\dfrac1{r_f}-\dfrac1{r_i}\right)$. Per uno spostamento verso l'esterno il lavoro è negativo.

Per una piccola salita $h\ll R$, la variazione è $\Delta U=GMm\left(\dfrac1R-\dfrac1{R+h}\right)\simeq\dfrac{GM}{R^2}mh=mgh$. Quindi la formula vicina alla superficie è l'approssimazione locale della relazione generale; i rispettivi zeri possono differire di una costante.
:::

::grafico{f="-4/x" xmin=1 xmax=6 ymin=-5 ymax=1 nomi="r,U" titolo="L’energia potenziale gravitazionale si avvicina a zero per distanze crescenti"}

## Orbite circolari

:::teorema{#orbite titolo="Gravità come risultante centripeta"}
Per un satellite di massa trascurabile rispetto al pianeta, in un'orbita circolare di raggio $r$, la gravità fornisce la forza centripeta,
$$
\frac{GMm}{r^2}=\frac{mv^2}{r}.
$$
Semplificando la massa del satellite si ottiene $v=\sqrt{\dfrac{GM}{r}}$ e quindi $T=\dfrac{2\pi r}{v}=2\pi\sqrt{\dfrac{r^3}{GM}}$. Un'orbita più ampia ha velocità minore e periodo maggiore.

Per un modello terrestre con $GM=3{,}99\cdot10^{14}\,\mathrm{m^3/s^2}$ e $r=7{,}00\cdot10^6\,\mathrm m$, si trovano $v\simeq7{,}55\cdot10^3\,\mathrm{m/s}$ e $T\simeq5{,}83\cdot10^3\,\mathrm s$. Gli astronauti in orbita sono in caduta libera continua; la gravità a quella quota è ancora apprezzabile.
:::

## Le leggi di Keplero

:::teorema{#keplero titolo="Forma, aree e periodi delle orbite"}
Nel modello di due corpi con il Sole molto più massivo del pianeta, le orbite legate sono ellissi con il Sole in un fuoco. Il segmento che unisce Sole e pianeta spazza aree uguali in tempi uguali: il pianeta è più veloce vicino al perielio e più lento all'afelio. Questa legge delle aree è collegata alla conservazione del momento angolare, perché la forza gravitazionale è centrale.

La terza legge afferma $\dfrac{T^2}{a^3}=\dfrac{4\pi^2}{GM}$, dove $a$ è il semiasse maggiore. Per due pianeti attorno alla stessa massa centrale, $\dfrac{T_2}{T_1}=\left(\dfrac{a_2}{a_1}\right)^{\frac32}$. Se il semiasse maggiore quadruplica, il periodo diventa otto volte maggiore. Per un cerchio il semiasse maggiore coincide con il raggio.
:::

::grafico{curve="3*cos(t),2*sin(t),0,6.283185" punti="2.236,0,pieno,Sole" xmin=-4 xmax=4 ymin=-3 ymax=3 uguale=1 titolo="In un’orbita ellittica la massa centrale occupa un fuoco, distinto dal centro dell’ellisse"}

## Energia orbitale e fuga

:::teorema{#fuga titolo="Sistemi legati e velocità minima di fuga"}
In un'orbita circolare $K=\dfrac{GMm}{2r}$ e $U=-\dfrac{GMm}{r}$, quindi l'energia meccanica totale è $E=-\dfrac{GMm}{2r}$. Il valore negativo corrisponde a un sistema gravitazionalmente legato.

La velocità minima di fuga da distanza $r$, in assenza di atmosfera e di propulsione successiva, si trova imponendo energia finale nulla all'infinito: $\dfrac12mv_f^2-\dfrac{GMm}{r}=0$. Risulta $v_f=\sqrt{\dfrac{2GM}{r}}$, cioè $\sqrt2$ volte la velocità circolare alla stessa distanza. La massa del corpo in fuga si semplifica. Un satellite geostazionario deve avere orbita circolare equatoriale, stesso verso della rotazione terrestre e periodo di un giorno siderale; l'uguaglianza del solo periodo non basta a renderlo fermo rispetto al suolo.
:::
