---
titolo: Gravitazione
sommario: La legge di gravitazione universale, il campo e l'energia potenziale gravitazionale, la variazione di g con la quota, le orbite circolari dei satelliti, la velocità di fuga e le leggi di Keplero ricavate dalla dinamica.
---

## Legge di gravitazione universale

:::teorema{#legge-di-gravitazione-universale titolo="Legge di gravitazione universale"}
Due punti materiali di masse $m_1$ e $m_2$, posti a distanza $r$, si attraggono con forze dirette lungo la retta che li congiunge, di modulo
$$
F = G\,\frac{m_1 m_2}{r^2} ,
$$
dove $G = 6{,}67 \cdot 10^{-11}\,\mathrm{N\cdot m^2/kg^2}$ è la **costante di gravitazione universale**. In forma vettoriale, detto $\hat{u}_r$ il versore che va da $m_1$ verso $m_2$, la forza che $m_1$ esercita su $m_2$ è
$$
\vec{F}_{12} = -\,G\,\frac{m_1 m_2}{r^2}\,\hat{u}_r ,
$$
e la forza che $m_2$ esercita su $m_1$ è $\vec{F}_{21} = -\vec{F}_{12}$, in accordo con il terzo principio della dinamica.

È una legge sperimentale, formulata da Newton e verificata in laboratorio da Cavendish con la bilancia di torsione, con la quale fu misurato per la prima volta il valore di $G$. Serve a calcolare la forza tra due corpi quando le loro dimensioni sono piccole rispetto alla distanza, e per sovrapposizione la forza tra corpi estesi. Due persone di $70\,\mathrm{kg}$ e $60\,\mathrm{kg}$ a $1{,}0\,\mathrm{m}$ di distanza si attraggono con una forza di $6{,}67 \cdot 10^{-11} \cdot \dfrac{70 \cdot 60}{1{,}0^2}\,\mathrm{N} = 2{,}8 \cdot 10^{-7}\,\mathrm{N}$, meno di un miliardesimo del peso di ciascuna; la gravitazione diventa rilevante *solo* quando almeno una delle masse è astronomica.
:::

:::osservazione{#accelerazione-della-luna titolo="Accelerazione della Luna"}
La dipendenza da $\dfrac{1}{r^2}$ si controlla con il moto della Luna. La Luna percorre attorno alla Terra un'orbita quasi circolare di raggio $d = 3{,}84 \cdot 10^8\,\mathrm{m}$ in $T = 27{,}3$ giorni, quindi la sua accelerazione centripeta è
$$
a_L = \frac{4\pi^2 d}{T^2} = 2{,}72 \cdot 10^{-3}\,\mathrm{m/s^2} .
$$
La distanza Terra-Luna è circa $60$ volte il raggio terrestre $R_T = 6{,}37 \cdot 10^6\,\mathrm{m}$; se l'attrazione terrestre decresce come $\dfrac{1}{r^2}$, alla distanza della Luna l'accelerazione di gravità vale $g_0 \left( \dfrac{R_T}{d} \right)^2 = 2{,}70 \cdot 10^{-3}\,\mathrm{m/s^2}$, dove $g_0 = 9{,}81\,\mathrm{m/s^2}$ è il valore alla superficie terrestre. I due valori differiscono di circa l'$1\%$, perciò la stessa forza che fa cadere i corpi sulla Terra mantiene la Luna in orbita.
:::

:::teorema{#principio-di-sovrapposizione titolo="Principio di sovrapposizione"}
Se un punto materiale di massa $m$ interagisce con i punti materiali $m_1, \dots, m_n$, la forza gravitazionale totale su $m$ è la somma vettoriale delle forze che ciascuna massa eserciterebbe da sola:
$$
\vec{F} = \vec{F}_1 + \vec{F}_2 + \dots + \vec{F}_n .
$$
È un fatto sperimentale: la presenza delle altre masse non modifica la forza esercitata da ciascuna. Il principio permette di calcolare la forza dovuta a più corpi e, suddividendo un corpo esteso in parti piccole, la forza dovuta a un corpo esteso. Le forze si sommano come vettori, quindi in un problema nel piano si sommano separatamente le componenti $F_x$ e $F_y$.

::grafico{vettori="0,0,1.94,0.485,F₁;0,0,0.6,1.8,F₂;0,0,2.54,2.29,F" segmenti="1.94,0.485,2.54,2.29;0.6,1.8,2.54,2.29" punti="0,0,pieno,m;4,1,pieno,m₁;1,3,pieno,m₂" xmin=-0.6 xmax=4.6 ymin=-0.6 ymax=3.4 uguale=1 titolo="La forza totale su $m$ è la somma vettoriale delle forze $\vec{F}_1$ e $\vec{F}_2$, dirette verso $m_1$ e verso $m_2$"}

:::

:::esempio{titolo="Forze che si annullano"}
Un corpo di massa $m = 1{,}0\,\mathrm{kg}$ è nell'origine di un asse $x$; una massa di $3{,}0\,\mathrm{kg}$ si trova in $x = 0{,}30\,\mathrm{m}$ e una di $12\,\mathrm{kg}$ in $x = -0{,}60\,\mathrm{m}$. Le due forze hanno moduli
$$
F_1 = G\,\frac{3{,}0 \cdot 1{,}0}{0{,}30^2}\,\mathrm{N} = 2{,}2 \cdot 10^{-9}\,\mathrm{N},
\qquad
F_2 = G\,\frac{12 \cdot 1{,}0}{0{,}60^2}\,\mathrm{N} = 2{,}2 \cdot 10^{-9}\,\mathrm{N},
$$
poiché $\dfrac{3{,}0}{0{,}09} = \dfrac{12}{0{,}36}$, e versi opposti, quindi la forza totale sul corpo è **nulla**. La massa più grande, essendo a distanza doppia, esercita la stessa forza della massa più piccola.
:::

## Campo gravitazionale

:::definizione{#campo-gravitazionale titolo="Campo gravitazionale"}
Sia $\vec{F}$ la forza gravitazionale che un sistema di masse esercita su un punto materiale di massa $m$ posto in $P$. Il **campo gravitazionale** del sistema nel punto $P$ è
$$
\vec{g}(P) = \frac{\vec{F}}{m} .
$$
Il campo non dipende da $m$, perché la forza è proporzionale a $m$; dipende solo dalle masse che lo generano e dalla posizione di $P$. Si misura in $\mathrm{N/kg}$, unità che coincide con $\mathrm{m/s^2}$. Una volta noto il campo, la forza su qualunque massa posta in $P$ è $\vec{F} = m\,\vec{g}(P)$, e se è l'unica forza agente l'accelerazione della massa è proprio $\vec{g}(P)$.
:::

:::osservazione{#campo-di-una-massa-puntiforme titolo="Campo di una massa puntiforme"}
Dalla legge di gravitazione, il campo generato da una massa puntiforme $M$ a distanza $r$ è
$$
\vec{g} = -\,\frac{GM}{r^2}\,\hat{u}_r , \qquad g = \frac{GM}{r^2} ,
$$
dove $\hat{u}_r$ è il versore che va da $M$ verso il punto considerato. Il campo è diretto verso la massa che lo genera e il suo modulo si riduce a un quarto quando la distanza raddoppia. Per il **principio di sovrapposizione** il campo di più masse è la somma vettoriale dei campi di ciascuna, $\vec{g} = \vec{g}_1 + \dots + \vec{g}_n$.

::grafico{curve="0.4*cos(t),0.4*sin(t),0,6.29" vettori="1.478,0.612,0.554,0.230;0.612,1.478,0.230,0.554;-0.612,1.478,-0.230,0.554;-1.478,0.612,-0.554,0.230;-1.478,-0.612,-0.554,-0.230;-0.612,-1.478,-0.230,-0.554;0.612,-1.478,0.230,-0.554;1.478,-0.612,0.554,-0.230;2.956,1.225,2.725,1.129;1.225,2.956,1.129,2.725;-1.225,2.956,-1.129,2.725;-2.956,1.225,-2.725,1.129;-2.956,-1.225,-2.725,-1.129;-1.225,-2.956,-1.129,-2.725;1.225,-2.956,1.129,-2.725;2.956,-1.225,2.725,-1.129" etichette="0.15,-0.75,M" xmin=-3.6 xmax=3.6 ymin=-3.6 ymax=3.6 uguale=1 titolo="Il campo di una massa $M$ punta verso $M$; a distanza doppia il modulo è $\dfrac{1}{4}$, come mostra la lunghezza delle frecce"}

:::

:::esempio{titolo="Punto di campo nullo tra Terra e Luna"}
Con $M_T = 5{,}97 \cdot 10^{24}\,\mathrm{kg}$, $M_L = 7{,}35 \cdot 10^{22}\,\mathrm{kg}$ e distanza $d = 3{,}84 \cdot 10^8\,\mathrm{m}$ tra i centri, si cerca il punto del segmento Terra-Luna, a distanza $x$ dalla Terra, in cui i due campi hanno lo stesso modulo. Poiché i due campi hanno versi opposti, il campo totale è nullo se
$$
\frac{G M_T}{x^2} = \frac{G M_L}{(d - x)^2}
\quad\Longleftrightarrow\quad
\frac{x}{d - x} = \sqrt{\frac{M_T}{M_L}} = 9{,}01 ,
$$
dove si è estratta la radice di due quantità positive. Si ottiene $x = \dfrac{9{,}01}{10{,}01}\,d = 3{,}46 \cdot 10^8\,\mathrm{m}$, cioè il punto si trova a circa il $90\%$ della distanza, vicino alla Luna.
:::

## Energia potenziale gravitazionale

:::richiamo{titolo="Forza conservativa ed energia potenziale"}
Una forza è conservativa se il suo lavoro tra due punti $A$ e $B$ dipende solo da $A$ e da $B$. In tal caso esiste una funzione $U$, l'energia potenziale, tale che $W_{A \to B} = U(A) - U(B)$, definita a meno di una costante (argomento sul lavoro e l'energia).
:::

:::richiamo{titolo="Integrale di una potenza"}
Per $0 < a < b$ vale $\displaystyle\int_a^b \frac{dx}{x^2} = \frac{1}{a} - \frac{1}{b}$, perché $-\dfrac{1}{x}$ è una primitiva di $\dfrac{1}{x^2}$ (argomento sugli integrali di Analisi 1).
:::

::::teorema{#energia-potenziale-gravitazionale titolo="Energia potenziale gravitazionale"}
Sia $M$ una massa puntiforme posta nell'origine e sia $m$ un punto materiale a distanza $r$ da essa. La forza gravitazionale di $M$ su $m$ è conservativa e la sua energia potenziale, scelta nulla a distanza infinita, è
$$
U(r) = -\,\frac{G M m}{r} .
$$
L'energia potenziale è negativa a ogni distanza finita e cresce verso $0$ all'aumentare di $r$: per allontanare $m$ occorre fornire energia. La formula vale anche quando $M$ è una sfera a simmetria sferica e $r$ è la distanza dal suo centro, come si vede con il teorema del guscio sferico. Per esempio, per portare un corpo di $1\,\mathrm{kg}$ dalla superficie terrestre a distanza infinita occorre il lavoro $\dfrac{G M_T m}{R_T} = 6{,}25 \cdot 10^7\,\mathrm{J}$.

:::dimostrazione
Si calcola il lavoro della forza lungo un cammino qualunque da un punto $A$ a distanza $r_A$ a un punto $B$ a distanza $r_B$. Uno spostamento infinitesimo $d\vec{s}$ si scompone in una parte lungo $\hat{u}_r$, di lunghezza $dr$, e in una parte perpendicolare a $\hat{u}_r$. La forza $\vec{F} = -\dfrac{GMm}{r^2}\,\hat{u}_r$ è radiale, quindi la parte perpendicolare non dà contributo e $\vec{F} \cdot d\vec{s} = -\dfrac{GMm}{r^2}\,dr$. Perciò
$$
W_{A \to B} = \int_{r_A}^{r_B} \left( -\frac{GMm}{r^2} \right) dr = G M m \left( \frac{1}{r_B} - \frac{1}{r_A} \right) .
$$
Il lavoro dipende solo da $r_A$ e $r_B$, quindi la forza è **conservativa**. Il risultato si scrive $W_{A \to B} = U(r_A) - U(r_B)$ con $U(r) = -\dfrac{GMm}{r} + c$, e la scelta $U(\infty) = 0$ impone $c = 0$.
:::
::::

:::definizione{#potenziale-gravitazionale titolo="Potenziale gravitazionale"}
Il **potenziale gravitazionale** in un punto $P$ è l'energia potenziale per unità di massa, $V(P) = \dfrac{U}{m}$; per una massa puntiforme $M$ a distanza $r$ vale
$$
V(r) = -\,\frac{GM}{r} ,
$$
e si misura in $\mathrm{J/kg}$. Il potenziale è una grandezza scalare, quindi il potenziale di più masse è la somma dei potenziali di ciascuna, senza componenti da calcolare. Per esempio, nel punto medio tra due masse uguali $M$ poste a distanza $2a$ il campo è nullo, mentre il potenziale vale $-\dfrac{2GM}{a}$.
:::

:::osservazione{#energia-di-un-sistema-di-masse titolo="Energia potenziale di un sistema di masse"}
Per un sistema di punti materiali l'energia potenziale gravitazionale è la somma dei contributi di tutte le coppie, ciascuna contata una volta:
$$
U = -\sum_{i < j} \frac{G m_i m_j}{r_{ij}} ,
$$
dove $r_{ij}$ è la distanza tra $m_i$ e $m_j$. Il numero $-U$ è il lavoro necessario per separare tutte le masse portandole a distanza infinita l'una dall'altra. Per tre masse uguali $m$ ai vertici di un triangolo equilatero di lato $\ell$ le coppie sono tre, quindi $U = -\dfrac{3Gm^2}{\ell}$.
:::

:::osservazione{#forza-ed-energia-potenziale titolo="Forza ed energia potenziale"}
La componente radiale della forza si ottiene derivando l'energia potenziale:
$$
F_r = -\,\frac{dU}{dr} = -\,\frac{d}{dr}\left( -\frac{GMm}{r} \right) = -\,\frac{GMm}{r^2} .
$$
Il segno negativo indica che la forza è diretta verso le $r$ decrescenti, cioè verso $M$. Allo stesso modo il campo si ricava dal potenziale con $g_r = -\dfrac{dV}{dr}$; per la derivata si rimanda all'argomento sulle derivate di Analisi 1. La relazione permette di passare dal potenziale, che è uno scalare, alla forza.
:::

:::osservazione{#energia-potenziale-vicino-alla-superficie titolo="Energia potenziale vicino alla superficie"}
Per un corpo che sale dalla superficie terrestre, a distanza $R_T$ dal centro, fino alla quota $h$, la variazione di energia potenziale è
$$
\Delta U = G M_T m \left( \frac{1}{R_T} - \frac{1}{R_T + h} \right) = \frac{G M_T m\,h}{R_T (R_T + h)} .
$$
Se $h$ è piccola rispetto a $R_T$, il denominatore è circa $R_T^2$, e poiché $\dfrac{G M_T}{R_T^2} = g_0$ si ottiene $\Delta U \approx m g_0 h$, l'energia potenziale del peso usata vicino al suolo. L'approssimazione sovrastima $\Delta U$ del fattore $1 + \dfrac{h}{R_T}$: l'errore è dello $0{,}016\%$ per $h = 1\,\mathrm{km}$ e del $16\%$ per $h = 1000\,\mathrm{km}$.

::grafico{f="x>=1 ? -1/x : NaN;x-2" punti="1,-1,pieno" xmin=0 xmax=6 ymin=-1.3 ymax=1.2 nomi="r,U" etichette="4.2,-0.5,U = −GMm/r;0.15,0.6,retta tangente" titolo="$U(r)$ per $r \geq R$, con $R = 1$ e $\dfrac{GMm}{R} = 1$; la retta tangente in $r = R$ ha pendenza $mg_0$ e corrisponde a $U \approx mg_0 h$"}

:::

## Corpi a simmetria sferica

::::teorema{#teorema-del-guscio-sferico titolo="Teorema del guscio sferico"}
Sia dato un guscio sferico sottile di centro $O$, raggio $R$ e massa $M$ distribuita uniformemente, e sia $P$ un punto a distanza $r$ da $O$. Allora
$$
V(r) =
\begin{cases}
-\,\dfrac{GM}{r} & \text{se } r > R \\[10pt]
-\,\dfrac{GM}{R} & \text{se } r < R
\end{cases}
\qquad
g(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{se } r > R \\[10pt]
0 & \text{se } r < R
\end{cases}
$$
All'esterno il guscio attrae come se tutta la massa fosse concentrata nel centro; all'interno il campo è nullo. Il teorema giustifica l'uso della distanza dal centro nella legge di gravitazione quando i corpi sono sfere, come i pianeti, anche se le loro dimensioni non sono piccole rispetto alla distanza.

:::dimostrazione
Si suddivide il guscio in anelli sottili con asse $OP$. L'anello individuato dall'angolo $\theta$ tra $OP$ e il raggio, di ampiezza $d\theta$, ha area $2\pi R^2 \sin\theta\,d\theta$; la superficie del guscio è $4\pi R^2$, quindi la massa dell'anello è $dM = \dfrac{M}{2} \sin\theta\,d\theta$. Tutti i punti dell'anello hanno la stessa distanza $s$ da $P$, e per il teorema del coseno
$$
s^2 = R^2 + r^2 - 2Rr\cos\theta .
$$
Il potenziale è scalare, perciò il contributo dell'anello è $dV = -\dfrac{G\,dM}{s}$. Differenziando la relazione precedente si ha $2s\,ds = 2Rr\sin\theta\,d\theta$, quindi $\sin\theta\,d\theta = \dfrac{s\,ds}{Rr}$ e
$$
dV = -\,\frac{GM}{2s} \cdot \frac{s\,ds}{Rr} = -\,\frac{GM}{2Rr}\,ds .
$$
Quando $\theta$ va da $0$ a $\pi$, la distanza $s$ va da $|r - R|$ a $r + R$. Se $r > R$, l'intervallo di integrazione ha lunghezza $(r + R) - (r - R) = 2R$, quindi $V = -\dfrac{GM}{2Rr} \cdot 2R = -\dfrac{GM}{r}$. Se $r < R$, l'intervallo va da $R - r$ a $R + r$ e ha lunghezza $2r$, quindi $V = -\dfrac{GM}{2Rr} \cdot 2r = -\dfrac{GM}{R}$, costante. Il campo è $g_r = -\dfrac{dV}{dr}$: all'esterno vale $-\dfrac{GM}{r^2}$, cioè ha modulo $\dfrac{GM}{r^2}$ ed è diretto verso $O$, mentre all'interno il potenziale è costante e il campo è nullo.
:::
::::

::::teorema{#campo-di-una-sfera-omogenea titolo="Campo di una sfera omogenea"}
Sia data una sfera piena di raggio $R$ e massa $M$ con densità uniforme, e sia $r$ la distanza dal centro. Il modulo del campo gravitazionale è
$$
g(r) =
\begin{cases}
\dfrac{GM}{r^2} & \text{se } r \geq R \\[10pt]
\dfrac{GM}{R^3}\,r & \text{se } r \leq R
\end{cases}
$$
All'esterno la sfera si comporta come una massa puntiforme posta nel centro; all'interno il campo cresce linearmente con $r$ ed è nullo nel centro. Il risultato esterno vale per ogni sfera la cui densità dipende solo dalla distanza dal centro, quindi si applica con buona approssimazione alla Terra e ai pianeti. Per esempio, nel modello omogeneo a metà strada tra la superficie e il centro della Terra il campo vale $\dfrac{g_0}{2} = 4{,}9\,\mathrm{m/s^2}$.

::grafico{f="min(x,1/x^2)" asintoti="x=1" punti="1,1,pieno" etichette="1.1,1.15,r = R" xmin=0 xmax=4 ymin=0 ymax=1.3 nomi="r,g" titolo="Modulo del campo di una sfera omogenea con $R = 1$ e $\dfrac{GM}{R^2} = 1$: cresce linearmente all'interno e decresce come $\dfrac{1}{r^2}$ all'esterno"}

:::dimostrazione
Si suddivide la sfera in gusci concentrici sottili e si applica a ciascuno il **teorema del guscio sferico**. Se $r \geq R$, il punto è esterno a tutti i gusci, e ciascuno attrae come una massa puntiforme posta nel centro; sommando, la sfera attrae come la massa $M$ posta nel centro. Se $r < R$, i gusci di raggio maggiore di $r$ danno campo nullo, mentre quelli di raggio minore di $r$ formano una sfera di raggio $r$. Poiché la densità è uniforme, la massa di questa sfera è proporzionale al volume, cioè $M(r) = M\,\dfrac{r^3}{R^3}$. Quindi
$$
g(r) = \frac{G M(r)}{r^2} = \frac{G M r^3}{R^3 r^2} = \frac{GM}{R^3}\,r .
$$
:::
::::

## Accelerazione di gravità e quota

:::definizione{#accelerazione-di-gravita-alla-superficie titolo="Accelerazione di gravità alla superficie"}
Per un pianeta sferico di massa $M$ e raggio $R$, l'**accelerazione di gravità alla superficie** è il modulo del campo sulla superficie,
$$
g_0 = \frac{GM}{R^2} .
$$
Con $M_T = 5{,}97 \cdot 10^{24}\,\mathrm{kg}$ e $R_T = 6{,}37 \cdot 10^6\,\mathrm{m}$ si ottiene $g_0 = 9{,}81\,\mathrm{m/s^2}$; il valore misurato varia leggermente con la latitudine, per la rotazione e lo schiacciamento della Terra, effetti che qui si trascurano. La relazione $GM = g_0 R^2$ permette di sostituire il prodotto $GM$ con grandezze misurabili alla superficie. Letta al contrario fornisce la massa della Terra a partire da $g_0$, $R_T$ e $G$: $M_T = \dfrac{g_0 R_T^2}{G} = 5{,}97 \cdot 10^{24}\,\mathrm{kg}$.
:::

:::richiamo{titolo="Approssimazione al primo ordine"}
Per $|x|$ piccolo vale $(1 + x)^{\alpha} \approx 1 + \alpha x$, che è la formula di Taylor al primo ordine della funzione $(1 + x)^{\alpha}$ in $x = 0$ (argomento sulle derivate di Analisi 1).
:::

::::teorema{#variazione-di-g-con-la-quota titolo="Variazione di g con la quota"}
Sia $g_0$ l'accelerazione di gravità alla superficie di un pianeta sferico di raggio $R$. Alla quota $h$ sopra la superficie l'accelerazione di gravità è
$$
g(h) = g_0\,\frac{R^2}{(R + h)^2} ,
$$
e per $h$ piccola rispetto a $R$ vale l'approssimazione
$$
g(h) \approx g_0 \left( 1 - \frac{2h}{R} \right) .
$$
La prima formula dà il valore esatto a qualunque quota; la seconda mostra che vicino alla superficie $g$ diminuisce di circa lo $0{,}03\%$ per ogni chilometro di quota, poiché $\dfrac{2}{6370} \approx 3 \cdot 10^{-4}$. Per $h = 300\,\mathrm{km}$ la formula esatta dà $g = 8{,}95\,\mathrm{m/s^2}$ e quella approssimata $8{,}89\,\mathrm{m/s^2}$; alla quota $h = R$ il campo è un quarto di quello superficiale.

:::dimostrazione
Alla quota $h$ la distanza dal centro è $R + h$, quindi per il **campo di una sfera omogenea** all'esterno, $g(h) = \dfrac{GM}{(R + h)^2}$. Sostituendo $GM = g_0 R^2$ si ottiene la prima formula. Scrivendo $\dfrac{R^2}{(R + h)^2} = \left( 1 + \dfrac{h}{R} \right)^{-2}$ e applicando l'approssimazione al primo ordine con $x = \dfrac{h}{R}$ e $\alpha = -2$ si ottiene la seconda.
:::
::::

:::osservazione{#variazione-di-g-con-la-profondita titolo="Variazione di g con la profondità"}
Nel modello di Terra omogenea, a profondità $d$ sotto la superficie la distanza dal centro è $R_T - d$, quindi per il **campo di una sfera omogenea** all'interno
$$
g(d) = \frac{G M_T}{R_T^3}\,(R_T - d) = g_0 \left( 1 - \frac{d}{R_T} \right) .
$$
Vicino alla superficie $g$ diminuisce con la profondità a un ritmo pari a metà di quello con cui diminuisce con la quota. Nella Terra reale la densità cresce verso il centro, perciò questa formula descrive l'andamento in modo qualitativo e si usa negli esercizi che dichiarano l'ipotesi di densità uniforme.
:::

## Orbite circolari e satelliti

:::richiamo{titolo="Moto circolare uniforme"}
Un punto che percorre una circonferenza di raggio $r$ con velocità di modulo costante $v$ ha accelerazione diretta verso il centro di modulo $a_c = \dfrac{v^2}{r}$, e il periodo è $T = \dfrac{2\pi r}{v}$ (argomento sul moto nel piano).
:::

::::teorema{#orbita-circolare titolo="Velocità e periodo in orbita circolare"}
Un satellite di massa $m$ percorre un'orbita circolare di raggio $r$ attorno a un corpo sferico di massa $M \gg m$, il cui centro si considera fermo, ed è soggetto alla sola forza gravitazionale. Allora il moto è uniforme e
$$
v = \sqrt{\frac{GM}{r}} , \qquad T = 2\pi\,\sqrt{\frac{r^3}{GM}} .
$$
Velocità e periodo dipendono solo dalla massa del corpo centrale e dal raggio dell'orbita, quindi satelliti di massa diversa sulla stessa orbita si muovono insieme; inoltre la velocità diminuisce all'aumentare di $r$. Per un'orbita radente la superficie terrestre, $r = R_T$, si ha $v = \sqrt{g_0 R_T} = 7{,}91\,\mathrm{km/s}$ e $T = 5{,}06 \cdot 10^3\,\mathrm{s}$, circa $84$ minuti.

::grafico{curve="3*cos(t),3*sin(t),0,6.29;0.5*cos(t),0.5*sin(t),0,6.29" vettori="2.298,1.928,1.270,3.154,v;2.298,1.928,1.379,1.157,a" segmenti="0,0,2.298,1.928" punti="2.298,1.928,pieno,m" etichette="0.1,-0.85,M;1.25,0.5,r" xmin=-4 xmax=4 ymin=-3.8 ymax=3.8 uguale=1 titolo="In orbita circolare la velocità $\vec{v}$ è tangente all'orbita e l'accelerazione $\vec{a}$, dovuta alla gravità, è diretta verso il centro"}

:::dimostrazione
L'unica forza sul satellite è l'attrazione gravitazionale, diretta verso il centro dell'orbita e di modulo costante $\dfrac{GMm}{r^2}$. Per il secondo principio della dinamica l'accelerazione è diretta verso il centro e non ha componente tangenziale, quindi il modulo della velocità è costante e il moto è circolare uniforme. L'accelerazione è allora quella centripeta $\dfrac{v^2}{r}$, e il secondo principio dà
$$
\frac{GMm}{r^2} = m\,\frac{v^2}{r}
\quad\Longrightarrow\quad
v = \sqrt{\frac{GM}{r}} .
$$
Il periodo è il tempo per percorrere la circonferenza, $T = \dfrac{2\pi r}{v} = 2\pi r \sqrt{\dfrac{r}{GM}} = 2\pi \sqrt{\dfrac{r^3}{GM}}$.
:::
::::

:::osservazione{#satellite-geostazionario titolo="Satellite geostazionario"}
Un satellite **geostazionario** percorre un'orbita circolare nel piano equatoriale, nello stesso verso della rotazione terrestre, con periodo uguale al periodo di rotazione della Terra, il giorno sidereo $T = 86\,164\,\mathrm{s}$; per questo resta sempre sopra lo stesso punto dell'equatore. Dalla formula del periodo
$$
r = \sqrt[3]{\frac{G M_T T^2}{4\pi^2}} = 4{,}22 \cdot 10^7\,\mathrm{m} ,
$$
cioè circa $36\,000\,\mathrm{km}$ di quota. Le antenne dirette verso questi satelliti restano fisse, ed è il motivo per cui sono usati per le telecomunicazioni.
:::

:::osservazione{#assenza-di-peso-in-orbita titolo="Assenza di peso in orbita"}
Alla quota della Stazione spaziale internazionale, circa $400\,\mathrm{km}$, la **variazione di g con la quota** dà $g = 8{,}69\,\mathrm{m/s^2}$, circa l'$89\%$ del valore al suolo. Gli astronauti galleggiano perché la stazione e il loro corpo hanno la stessa accelerazione $\vec{g}$: sono in caduta libera insieme, quindi il pavimento non esercita alcuna reazione vincolare. Quella che si percepisce come peso è la reazione del vincolo, perciò in caduta libera il peso apparente è nullo anche se la forza gravitazionale è presente.
:::

::::teorema{#energia-di-un-satellite titolo="Energia di un satellite in orbita circolare"}
Nelle ipotesi della **velocità e periodo in orbita circolare**, il satellite ha energia cinetica, energia potenziale ed energia meccanica
$$
K = \frac{GMm}{2r}, \qquad U = -\,\frac{GMm}{r}, \qquad E = K + U = -\,\frac{GMm}{2r} .
$$
Vale quindi $E = -K$ e $U = 2E$. L'energia meccanica è negativa e aumenta, avvicinandosi a $0$, all'aumentare di $r$: per portare un satellite su un'orbita più alta occorre fornire il lavoro $E_2 - E_1 > 0$, anche se nella nuova orbita la sua energia cinetica è *minore*. Un satellite di $1000\,\mathrm{kg}$ in orbita circolare a distanza $2R_T$ dal centro della Terra ha $E = -\dfrac{G M_T \cdot 1000}{4R_T} = -1{,}56 \cdot 10^{10}\,\mathrm{J}$.

:::dimostrazione
Dalla velocità orbitale $v^2 = \dfrac{GM}{r}$ segue $K = \dfrac{1}{2} m v^2 = \dfrac{GMm}{2r}$. L'energia potenziale è quella dell'**energia potenziale gravitazionale**, $U = -\dfrac{GMm}{r}$. Sommando si ha $E = \dfrac{GMm}{2r} - \dfrac{GMm}{r} = -\dfrac{GMm}{2r}$, che è l'opposto di $K$.
:::
::::

## Velocità di fuga e moti non legati

:::richiamo{titolo="Conservazione dell'energia meccanica"}
Se sul sistema compiono lavoro solo forze conservative, l'energia meccanica $E = K + U$ resta costante durante il moto (argomento sul lavoro e l'energia).
:::

::::teorema{#velocita-di-fuga titolo="Velocità di fuga"}
Un corpo è lanciato verso l'esterno dalla superficie di un pianeta sferico di massa $M$ e raggio $R$, privo di atmosfera, e si trascurano la rotazione del pianeta e l'attrazione degli altri corpi. Il corpo si allontana indefinitamente, qualunque sia la direzione di lancio, se e solo se la velocità iniziale $v_0$ soddisfa $v_0 \geq v_f$, dove
$$
v_f = \sqrt{\frac{2GM}{R}} = \sqrt{2 g_0 R}
$$
è la **velocità di fuga**. Per la Terra $v_f = 11{,}2\,\mathrm{km/s}$, per la Luna $2{,}37\,\mathrm{km/s}$. La velocità di fuga non dipende dalla massa del corpo lanciato, e a parità di distanza dal centro è $\sqrt{2}$ volte la velocità dell'orbita circolare, poiché $\sqrt{\dfrac{2GM}{r}} = \sqrt{2}\,\sqrt{\dfrac{GM}{r}}$.

:::dimostrazione
L'unica forza è la gravità, che è conservativa, quindi l'energia meccanica si conserva:
$$
E = \frac{1}{2} m v^2 - \frac{GMm}{r} = \frac{1}{2} m v_0^2 - \frac{GMm}{R} .
$$
Se $E < 0$, poiché $K \geq 0$ si ha $\dfrac{GMm}{r} = K - E \geq |E|$, cioè $r \leq \dfrac{GMm}{|E|}$, e il corpo non supera questa distanza. Se $E \geq 0$, per ogni $r$ vale $\dfrac{1}{2} m v^2 = E + \dfrac{GMm}{r} > 0$, quindi la velocità non si annulla mai e l'energia non pone alcun limite alla distanza; nel lancio verticale il corpo sale sempre e $r$ cresce senza limite, mentre per le altre direzioni la conclusione segue dalla forma delle traiettorie descritta nei moti legati e non legati. Perciò il corpo sfugge se e solo se $E \geq 0$, cioè $\dfrac{1}{2} m v_0^2 \geq \dfrac{GMm}{R}$, che equivale a $v_0 \geq \sqrt{\dfrac{2GM}{R}}$. Con $GM = g_0 R^2$ si ottiene la seconda forma.
:::
::::

:::definizione{#moti-legati-e-non-legati titolo="Moti legati e non legati"}
Il moto di un corpo nel campo di una massa $M$ è **legato** se l'energia meccanica $E = \dfrac{1}{2} m v^2 - \dfrac{GMm}{r}$ è negativa, **non legato** se $E \geq 0$. In un moto legato la distanza dal centro non supera
$$
r_{\max} = \frac{GMm}{|E|} ,
$$
il valore in cui $U(r) = E$ e l'energia cinetica si annulla. In un moto non legato il corpo arriva a distanza infinita con energia cinetica $E$, quindi con velocità $v_{\infty} = \sqrt{\dfrac{2E}{m}}$. Si dimostra inoltre che le traiettorie sono coniche con un fuoco nel centro di $M$: ellissi (o circonferenze) per $E < 0$, parabole per $E = 0$, rami di iperbole per $E > 0$; la dimostrazione esce dal programma.

::grafico{f="x>=1 ? -1/x : NaN" segmenti="1,-0.5,2,-0.5;2,-0.5,2,0;1,0.3,6,0.3" punti="2,-0.5,pieno,r max" etichette="3.3,-0.5,E < 0 : moto legato;3.3,0.45,E > 0 : moto non legato;4.3,-0.13,U(r)" xmin=0 xmax=6 ymin=-1.2 ymax=0.8 nomi="r,U" titolo="Con $E < 0$ il corpo resta dove $U(r) \leq E$, cioè fino a $r_{\max}$; con $E > 0$ la condizione $U(r) \leq E$ vale a ogni distanza"}

:::

:::esempio{titolo="Altezza massima di un lancio verticale"}
Un corpo è lanciato verticalmente dalla superficie terrestre con $v_0 = 4{,}0\,\mathrm{km/s}$, minore della velocità di fuga, trascurando l'atmosfera. Nel punto più alto la velocità è nulla, quindi la conservazione dell'energia dà
$$
\frac{1}{2} v_0^2 - \frac{G M_T}{R_T} = -\,\frac{G M_T}{r_{\max}}
\quad\Longrightarrow\quad
\frac{1}{r_{\max}} = \frac{1}{R_T} - \frac{v_0^2}{2 G M_T} ,
$$
da cui $r_{\max} = 7{,}30 \cdot 10^6\,\mathrm{m}$ e una quota massima di $9{,}3 \cdot 10^5\,\mathrm{m}$. La formula del moto uniformemente accelerato, $\dfrac{v_0^2}{2g_0} = 8{,}2 \cdot 10^5\,\mathrm{m}$, sottostima la quota, perché non tiene conto della diminuzione di $g$ salendo.
:::

## Leggi di Keplero

:::teorema{#leggi-di-keplero titolo="Leggi di Keplero"}
Il moto dei pianeti attorno al Sole soddisfa tre leggi.

- Prima legge: ogni pianeta percorre un'ellisse, e il Sole occupa uno dei due fuochi.
- Seconda legge: il segmento che congiunge il Sole al pianeta descrive aree uguali in tempi uguali.
- Terza legge: il quadrato del periodo di rivoluzione è proporzionale al cubo del semiasse maggiore $a$ dell'orbita, $\dfrac{T^2}{a^3} = k$, con la stessa costante $k$ per tutti i pianeti.

Sono leggi sperimentali, ricavate da Keplero dalle osservazioni di Tycho Brahe e pubblicate tra il $1609$ e il $1619$. Newton le dedusse dalla legge di gravitazione e dai principi della dinamica; la seconda e la terza si ricavano nei teoremi che seguono, la terza nel caso di orbite circolari. Le stesse leggi valgono per le lune attorno a un pianeta e per i satelliti artificiali, con il pianeta al posto del Sole e una costante $k$ diversa.

::grafico{curve="4*cos(t),3*sin(t),0,6.29" area="0.926*(x-2.646);-0.926*(x-2.646);2.646;3.757|3*sqrt(1-(x/4)^2);-3*sqrt(1-(x/4)^2);3.757;4|0.03346*(2.646-x);-0.03346*(2.646-x);-3.989;2.646|3*sqrt(1-(x/4)^2);-3*sqrt(1-(x/4)^2);-4;-3.989" punti="2.646,0,pieno,S;-2.646,0,vuoto" etichette="3.6,1.6,perielio;-5,1.0,afelio" xmin=-5 xmax=5 ymin=-3.6 ymax=3.6 uguale=1 titolo="Le due regioni colorate hanno la stessa area e sono descritte nello stesso tempo: vicino al perielio il pianeta è più veloce che vicino all'afelio"}

:::

:::richiamo{titolo="Prodotto vettoriale"}
Per due vettori $\vec{u}$ e $\vec{v}$ che formano l'angolo $\theta$ vale $|\vec{u} \times \vec{v}| = |\vec{u}|\,|\vec{v}|\sin\theta$, che è l'area del parallelogramma di lati $\vec{u}$ e $\vec{v}$; se $\vec{u}$ e $\vec{v}$ sono paralleli, $\vec{u} \times \vec{v} = \vec{0}$. La derivata di un prodotto vettoriale si calcola con la regola del prodotto, mantenendo l'ordine dei fattori (argomento sui vettori di Algebra lineare).
:::

::::teorema{#seconda-legge-di-keplero titolo="Seconda legge di Keplero"}
Sia $m$ un punto materiale soggetto alla sola forza gravitazionale di una massa $M$ ferma nell'origine. Allora il **momento angolare** $\vec{L} = \vec{r} \times m\vec{v}$ rispetto all'origine è costante, il moto avviene nel piano per l'origine perpendicolare a $\vec{L}$, e l'area $A$ descritta dal raggio vettore soddisfa
$$
\frac{dA}{dt} = \frac{|\vec{L}|}{2m} = \text{costante} .
$$
La grandezza $\dfrac{dA}{dt}$ è la **velocità areolare**. Nei punti dell'orbita in cui la velocità è perpendicolare al raggio vettore, il perielio e l'afelio, si ha $|\vec{L}| = m r v$, quindi
$$
r_p v_p = r_a v_a ,
$$
e il pianeta è più veloce dove è più vicino al Sole. La Terra ha perielio $1{,}471 \cdot 10^{11}\,\mathrm{m}$ e afelio $1{,}521 \cdot 10^{11}\,\mathrm{m}$, perciò al perielio è più veloce che all'afelio del $3{,}4\%$.

:::dimostrazione
Derivando il prodotto vettoriale con la regola del prodotto si ottiene
$$
\frac{d\vec{L}}{dt} = \frac{d\vec{r}}{dt} \times m\vec{v} + \vec{r} \times m\frac{d\vec{v}}{dt} = \vec{v} \times m\vec{v} + \vec{r} \times \vec{F} .
$$
Il primo termine è nullo perché $\vec{v}$ e $m\vec{v}$ sono paralleli; il secondo è nullo perché la forza gravitazionale è diretta lungo $\vec{r}$. Quindi $\vec{L}$ è costante. Poiché $\vec{L}$ è perpendicolare sia a $\vec{r}$ sia a $\vec{v}$, la posizione resta nel piano per l'origine perpendicolare a $\vec{L}$. Nel tempo $dt$ il raggio vettore passa da $\vec{r}$ a $\vec{r} + \vec{v}\,dt$ e descrive il triangolo di lati $\vec{r}$ e $\vec{v}\,dt$, la cui area è metà del parallelogramma corrispondente:
$$
dA = \frac{1}{2}\,|\vec{r} \times \vec{v}\,dt| = \frac{|\vec{L}|}{2m}\,dt .
$$
Dividendo per $dt$ si ottiene la tesi.
:::
::::

::::teorema{#terza-legge-di-keplero titolo="Terza legge di Keplero per orbite circolari"}
Per i corpi in orbita circolare attorno alla stessa massa centrale $M$, nelle ipotesi della **velocità e periodo in orbita circolare**, vale
$$
\frac{T^2}{r^3} = \frac{4\pi^2}{GM} ,
$$
con la stessa costante per tutti i corpi. Per due orbite attorno allo stesso corpo si ha quindi $\dfrac{T_1^2}{T_2^2} = \dfrac{r_1^3}{r_2^3}$, e per le orbite ellittiche la relazione vale con il semiasse maggiore $a$ al posto di $r$. La legge permette di misurare la massa del corpo centrale dal moto di un suo satellite: dall'orbita della Terra, con $r = 1{,}50 \cdot 10^{11}\,\mathrm{m}$ e $T = 3{,}156 \cdot 10^7\,\mathrm{s}$, si ricava $M_S = \dfrac{4\pi^2 r^3}{G T^2} = 2{,}0 \cdot 10^{30}\,\mathrm{kg}$.

::grafico{f="x" punti="0.058,0.058,pieno;0.378,0.378,pieno,Venere;1,1,pieno,Terra;3.54,3.538,pieno,Marte" etichette="0.25,0.0,Mercurio" xmin=0 xmax=4 ymin=0 ymax=4 uguale=1 nomi="a³,T²" titolo="Con $a$ in unità astronomiche e $T$ in anni, i quattro pianeti interni stanno sulla retta $T^2 = a^3$"}

:::dimostrazione
Dalla formula del periodo in orbita circolare, $T = 2\pi \sqrt{\dfrac{r^3}{GM}}$, elevando al quadrato si ottiene $T^2 = \dfrac{4\pi^2}{GM}\,r^3$. Dividendo per $r^3$ si trova la tesi; la costante $\dfrac{4\pi^2}{GM}$ dipende solo dalla massa centrale. Il rapporto tra due orbite si ottiene dividendo membro a membro le relazioni $T_1^2 = \dfrac{4\pi^2}{GM}\,r_1^3$ e $T_2^2 = \dfrac{4\pi^2}{GM}\,r_2^3$.
:::
::::
