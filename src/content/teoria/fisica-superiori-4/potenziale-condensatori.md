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

:::esempio{titolo="Energia di tre cariche"}
Tre cariche $+2{,}0\,\mathrm{nC}$, $-2{,}0\,\mathrm{nC}$ e $+2{,}0\,\mathrm{nC}$ occupano i vertici di un triangolo equilatero di lato $0{,}10\,\mathrm m$. L'energia del sistema è la somma delle energie delle tre coppie, tutte alla distanza $r=0{,}10\,\mathrm m$:
$$
U=k_e\frac{q^2}{r}\,(-1+1-1)\simeq-3{,}60\cdot10^{-7}\,\mathrm J.
$$
Questo valore è il lavoro che un agente esterno compie per portare lentamente le tre cariche dall'infinito ai vertici. È negativo perché le due coppie di segno opposto pesano più della coppia di segno uguale.
:::

:::esempio{titolo="Energia in funzione della distanza"}
Con $k_e\simeq9\cdot10^9\,\mathrm{N\,m^2/C^2}$, due cariche di modulo $4\,\mathrm{nC}$ e $2\,\mathrm{nC}$ hanno $|U|=\dfrac{k_e|Qq|}{r}=\dfrac{72\,\mathrm{nJ\,m}}{r}$, cioè $720\,\mathrm{nJ}$ a $10\,\mathrm{cm}$. Per $Qq>0$ (cariche dello stesso segno) $U$ è positiva e diminuisce verso zero al crescere di $r$. Per $Qq<0$ (cariche opposte) $U$ è negativa e aumenta verso zero.

::grafico{f="7200/x;-7200/x" xmin=0 xmax=60 ymin=-1000 ymax=1000 punti="10,720,pieno,A;10,-720,pieno,B" nomi="r,U" legenda="Qq>0;Qq<0" titolo="Distanza in centimetri ed energia in nanojoule. I punti A e B sono a $r=10\,\mathrm{cm}$."}
:::

:::attenzione
Il segno di $U$ non coincide con il segno del lavoro elettrico. Due cariche $+4\,\mathrm{nC}$ e $-2\,\mathrm{nC}$ si avvicinano da $0{,}20\,\mathrm m$ a $0{,}10\,\mathrm m$. L'energia passa da $-360\,\mathrm{nJ}$ a $-720\,\mathrm{nJ}$ e resta negativa, mentre il lavoro elettrico $W=U_i-U_f=+360\,\mathrm{nJ}$ è positivo, perché la forza attrattiva ha lo stesso verso dello spostamento.
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
I potenziali di più sorgenti **si sommano algebricamente**, i campi si sommano come vettori. Le cariche sono $+2{,}0\,\mathrm{nC}$ e $-2{,}0\,\mathrm{nC}$ a distanza $0{,}20\,\mathrm m$. Il punto medio $P$ dista $0{,}10\,\mathrm m$ da ciascuna. Ogni carica dà un campo di modulo $k_e\dfrac{Q}{r^2}\simeq1{,}80\cdot10^3\,\mathrm{N/C}$ e i due campi hanno lo stesso verso, quindi $E_P\simeq3{,}60\cdot10^3\,\mathrm{N/C}$. Il potenziale vale $k_e\dfrac{Q}{r}-k_e\dfrac{Q}{r}=0$, anche se il campo non è nullo. Una carica di prova $+1{,}0\,\mathrm{nC}$ in $P$ subisce la forza $3{,}6\,\mathrm{\mu N}$ e ha energia potenziale nulla.

::grafico{assi=0 uguale=1 segmenti="1,2,5,2" vettori="3,2,4.4,2,E" punti="1,2,pieno,+Q;5,2,pieno,−Q;3,2,pieno,P" xmin=0 xmax=6 ymin=0.5 ymax=3.5 titolo="Nel punto medio $P$ il campo è diretto verso la carica negativa e il potenziale è nullo."}
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

:::osservazione{titolo="Il campo come variazione del potenziale"}
Per uno spostamento lungo il campo la formula dà $E=\dfrac{|\Delta V|}{d}$, quindi il campo si misura anche in $\mathrm{V/m}$ e $1\,\mathrm{V/m}=1\,\mathrm{N/C}$, poiché $\dfrac{\mathrm V}{\mathrm m}=\dfrac{\mathrm J}{\mathrm C\,\mathrm m}=\dfrac{\mathrm N}{\mathrm C}$. In un campo uniforme il potenziale è una funzione lineare della posizione lungo il campo, con coefficiente angolare $-E$.
:::

:::esempio{titolo="Potenziale fra due armature in funzione della posizione"}
Due armature distano $5{,}0\,\mathrm{cm}$ e hanno potenziali $100\,\mathrm V$ e $0\,\mathrm V$. Il campo vale $E=\dfrac{100\,\mathrm V}{0{,}050\,\mathrm m}=2000\,\mathrm{V/m}$. A distanza $x$ dalla prima armatura il potenziale è $V(x)=100\,\mathrm V-\left(20\,\mathrm{V/cm}\right)x$. A $x=3{,}0\,\mathrm{cm}$ si ha $V=40\,\mathrm V$.

::grafico{f="100-20*x" xmin=0 xmax=5 ymin=0 ymax=120 punti="3,40,pieno,P" nomi="x,V" titolo="Distanza dalla prima armatura in centimetri e potenziale in volt. La pendenza vale $-20\,\mathrm{V/cm}=-2000\,\mathrm{V/m}$."}
:::

:::attenzione
Nel teorema compare la proiezione dello spostamento sul campo, non la distanza fra i punti. In un campo di $600\,\mathrm{V/m}$ uno spostamento di $3{,}0\,\mathrm{cm}$ lungo il campo e di $4{,}0\,\mathrm{cm}$ perpendicolare ad esso porta i due punti a distanza $5{,}0\,\mathrm{cm}$. La differenza di potenziale è $-600\cdot0{,}030\,\mathrm V=-18\,\mathrm V$. Usare i $5{,}0\,\mathrm{cm}$ darebbe $-30\,\mathrm V$.
:::

:::definizione{#equipotenziali titolo="Superfici a potenziale costante"}
Una superficie **equipotenziale** contiene punti con lo stesso potenziale. Fra due di questi punti la differenza di potenziale è zero, quindi il lavoro elettrico è zero lungo qualunque percorso. Nei punti in cui il campo è diverso da zero, esso è perpendicolare alla superficie. Se avesse una componente tangente, produrrebbe lavoro anche per un piccolo spostamento sulla superficie.

Per una sorgente puntiforme le equipotenziali sono sfere concentriche. Fra due armature parallele ideali sono piani paralleli alle armature. Un conduttore in equilibrio elettrostatico è equipotenziale in tutto il materiale e sulla superficie, perché il campo all'interno del conduttore è nullo. Il potenziale del conduttore può avere un valore qualsiasi rispetto al riferimento scelto.
:::

:::esempio{titolo="Equipotenziali di una carica puntiforme"}
Sia $Q=+1{,}0\,\mathrm{nC}$, con $k_e\simeq9\cdot10^9\,\mathrm{N\,m^2/C^2}$. Le superfici a $90$, $60$ e $30\,\mathrm V$ sono sfere di raggio $10$, $15$ e $30\,\mathrm{cm}$, perché $r=\dfrac{k_eQ}{V}$. Fra superfici successive la differenza di potenziale è la stessa, $30\,\mathrm V$, mentre le distanze sono $5{,}0\,\mathrm{cm}$ e $15\,\mathrm{cm}$. Il campo medio nei due strati vale quindi $\dfrac{30\,\mathrm V}{0{,}050\,\mathrm m}=600\,\mathrm{V/m}$ e $\dfrac{30\,\mathrm V}{0{,}15\,\mathrm m}=200\,\mathrm{V/m}$. Il campo è quindi più intenso dove le equipotenziali sono più vicine.

::grafico{assi=0 uguale=1 curve="10*cos(t),10*sin(t),0,6.29;15*cos(t),15*sin(t),0,6.29;30*cos(t),30*sin(t),0,6.29" vettori="10,0,30,0,E" punti="0,0,pieno,+Q" etichette="0,11.5,90 V;0,16.5,60 V;0,31.5,30 V" xmin=-34 xmax=34 ymin=-34 ymax=34 titolo="Sezione delle equipotenziali di $+1{,}0\,\mathrm{nC}$. Le lunghezze sono in centimetri e il campo è radiale verso l'esterno."}
:::

:::esempio{titolo="Spostamento obliquo fra armature"}
Due armature distano $4{,}0\,\mathrm{cm}$ e i loro potenziali sono $120\,\mathrm{V}$ e $0\,\mathrm{V}$. Lontano dai bordi $E=\dfrac{120\,\mathrm{V}}{0{,}040\,\mathrm{m}}=3000\,\mathrm{V/m}$. Un punto a metà distanza ha $V=60\,\mathrm{V}$. Tutti i punti sullo stesso piano parallelo alle armature hanno quel potenziale. Da $A$ a $B$ conta soltanto lo spostamento perpendicolare alle armature, uguale a metà della distanza fra le lastre, quindi $V_B-V_A=-60\,\mathrm V$ qualunque sia lo spostamento parallelo alle armature.

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

:::esempio{titolo="Protone accelerato da 2,0 kV"}
Un protone parte da fermo e attraversa una differenza di potenziale di $2{,}0\,\mathrm{kV}$ nel verso in cui la forza elettrica compie lavoro positivo. La sua energia cinetica è $2000\,\mathrm{eV}=3{,}20\cdot10^{-16}\,\mathrm J$. Con $m_p=1{,}67\cdot10^{-27}\,\mathrm{kg}$ la velocità è
$$
v=\sqrt{\frac{2K_f}{m_p}}\simeq6{,}19\cdot10^5\,\mathrm{m/s}.
$$
Con la stessa tensione un elettrone raggiungerebbe una velocità circa $43$ volte maggiore, perché a pari energia la velocità è inversamente proporzionale alla radice della massa.
:::

:::esempio{titolo="Elettrone fra due armature"}
Un elettrone parte dall'armatura a $0\,\mathrm V$ e raggiunge quella a $100\,\mathrm V$. Il campo punta verso il potenziale minore, quindi verso sinistra nella figura. L'elettrone ha carica negativa, perciò la forza $\vec F=-e\vec E$ punta verso destra e il suo lavoro è positivo. L'energia cinetica finale è $100\,\mathrm{eV}$.

::grafico{assi=0 uguale=1 linee="1,0.8 1,4.2;5,0.8 5,4.2" vettori="4.6,3.5,1.4,3.5,E;2.2,2.2,3.8,2.2,F" punti="2.2,2.2,pieno,e⁻" etichette="1,4.6,0 V;5,4.6,100 V" xmin=0 xmax=6 ymin=0 ymax=5.2 titolo="Il campo $\vec E$ è diretto verso il potenziale minore, la forza $\vec F$ sull'elettrone nel verso opposto."}
:::

:::attenzione
La formula classica richiede $v\ll c$. Un elettrone accelerato da $100\,\mathrm{kV}$ ha $K_f=1{,}60\cdot10^{-14}\,\mathrm J$ e la formula darebbe $v\simeq1{,}87\cdot10^8\,\mathrm{m/s}$, cioè il $62\%$ della velocità della luce. A questa velocità l'ipotesi non è soddisfatta e il risultato classico non è attendibile.
:::

## Capacità elettrica

:::definizione{#capacita titolo="Condensatore e capacità"}
Un **condensatore** è formato da due conduttori separati da un isolante, con cariche opposte $+Q$ e $-Q$. Qui $Q>0$ è il modulo della carica di una singola armatura e $\Delta V=V_+-V_->0$ è la tensione fra le armature. La capacità è
$$
C=\frac{Q}{\Delta V},
$$
e si misura in farad, con $1\,\mathrm{F}=1\,\mathrm{C/V}$. Un condensatore da $2{,}0\,\mathrm{\mu F}$ a $12\,\mathrm{V}$ ha cariche $+24\,\mathrm{\mu C}$ e $-24\,\mathrm{\mu C}$. La carica complessiva delle due armature è zero, mentre nella definizione compare la carica in modulo di una sola.
:::

:::osservazione{titolo="La capacità dipende dalla geometria"}
La capacità è una proprietà del condensatore. Dipende da forma, dimensioni, distanza e dielettrico, e non dalla carica. Un condensatore da $2{,}0\,\mathrm{\mu F}$ con $Q=24\,\mathrm{\mu C}$ ha $\Delta V=12\,\mathrm V$. Con $Q=48\,\mathrm{\mu C}$ ha $\Delta V=24\,\mathrm V$ e il rapporto $\dfrac{Q}{\Delta V}$ vale ancora $2{,}0\,\mathrm{\mu F}$.
:::

:::richiamo{titolo="Campo fra armature opposte"}
Ipotesi: due piani paralleli indefiniti nel vuoto hanno densità superficiali di carica $+\sigma_q$ e $-\sigma_q$. Tesi: nell'intercapedine il campo è uniforme, diretto dal piano positivo al negativo, e il suo modulo è $E=\dfrac{\sigma_q}{\varepsilon_0}$.
:::

::::teorema{#capacita-piano titolo="Capacità del condensatore piano nel vuoto"}
Un condensatore piano ideale ha armature di area $A$ a distanza $d$, molto minore delle loro dimensioni, con il vuoto fra di esse. Allora
$$
C=\varepsilon_0\frac{A}{d}.
$$
Con un dielettrico lineare omogeneo di permittività $\varepsilon=\varepsilon_r\varepsilon_0$ al posto del vuoto, $\varepsilon_0$ diventa $\varepsilon$. Con $A=0{,}010\,\mathrm{m^2}$ e $d=1{,}0\,\mathrm{mm}$ nel vuoto la capacità vale $88{,}5\,\mathrm{pF}$. Il risultato permette di progettare una capacità assegnata. Per $C=1{,}0\,\mathrm F$ con $d=1{,}0\,\mathrm{mm}$ servirebbe $A=\dfrac{Cd}{\varepsilon_0}\simeq1{,}13\cdot10^8\,\mathrm{m^2}$, un quadrato di circa $10{,}6\,\mathrm{km}$ di lato. Per questo i condensatori comuni hanno capacità di microfarad, nanofarad o picofarad.

::grafico{assi=0 uguale=1 poligoni="1,3.5 5,3.5 5,3.8 1,3.8;1,0.2 5,0.2 5,0.5 1,0.5" vettori="2,3.4,2,0.6,E;3,3.4,3,0.6,E;4,3.4,4,0.6,E" segmenti="5.4,0.5,5.9,0.5;5.4,3.5,5.9,3.5;5.65,0.5,5.65,3.5" etichette="0.3,3.65,+Q;0.3,0.35,−Q;3,4.3,A;6.2,2,d" unicolore=1 xmin=0 xmax=6.8 ymin=0 ymax=4.8 titolo="Armature di area $A$ a distanza $d$. Fra di esse il campo è uniforme e va dall'armatura positiva alla negativa."}

:::dimostrazione
Su un'armatura di carica $Q$ e area $A$ la densità superficiale è $\sigma_q=\dfrac{Q}{A}$. Per il campo fra armature opposte, $E=\dfrac{\sigma_q}{\varepsilon_0}=\dfrac{Q}{\varepsilon_0A}$. Il campo è uniforme e parallelo allo spostamento dall'armatura positiva a quella negativa, quindi la differenza di potenziale in un campo uniforme dà $\Delta V=Ed=\dfrac{Qd}{\varepsilon_0A}$. Dividendo $Q$ per $\Delta V$ si ottiene $C=\dfrac{Q}{\Delta V}=\varepsilon_0\dfrac{A}{d}$, e il fattore $Q$ si semplifica.
:::
::::

## Condensatori in parallelo e in serie

::::teorema{#associazioni titolo="Capacità equivalente"}
Due condensatori collegati agli stessi nodi sono in **parallelo**. Hanno la stessa tensione e le cariche delle armature connesse a uno stesso nodo si sommano. Due condensatori collegati in **serie** condividono un nodo intermedio. Se quel nodo è isolato dagli altri rami e inizialmente neutro, le sue due armature portano cariche uguali in modulo e opposte in segno. Quindi le tensioni si sommano in serie e le cariche si sommano in parallelo. Per due condensatori si ottiene
$$
C_{\mathrm{eq,par}}=C_1+C_2,\qquad
\frac1{C_{\mathrm{eq,ser}}}=\frac1{C_1}+\frac1{C_2}.
$$

:::dimostrazione
In parallelo $Q_{\mathrm{tot}}=C_1\Delta V+C_2\Delta V$, quindi il rapporto con la tensione comune è $C_1+C_2$. In serie $Q$ è il modulo comune della carica e $\Delta V_{\mathrm{tot}}=\dfrac Q{C_1}+\dfrac Q{C_2}$. Dividendo per $Q$ si ottiene il reciproco di $C_{\mathrm{eq,ser}}$.
:::
::::

:::esempio{titolo="Come si ripartisce una tensione di 10 volt"}
Due condensatori da $2$ e $3\,\mathrm{\mu F}$ collegati in serie hanno capacità equivalente $1{,}2\,\mathrm{\mu F}$. A $10\,\mathrm V$, la carica in serie è $12\,\mathrm{\mu C}$ e le tensioni sono $\dfrac{12}{2}\,\mathrm V=6\,\mathrm V$ e $\dfrac{12}{3}\,\mathrm V=4\,\mathrm V$. A parità di carica, la caduta è maggiore sul condensatore di capacità minore. Se gli stessi condensatori sono in parallelo, ciascuno ha la tensione del generatore e le cariche sono rispettivamente $20$ e $30\,\mathrm{\mu C}$. La capacità equivalente vale allora $5\,\mathrm{\mu F}$.

::schema{riferimento=0 linee="0,1.48 0,3 2.65,3;3.05,3 4.3,3;4.7,3 7,3 7,0 0,0 0,1.16;-0.44,1.48 0.44,1.48;-0.27,1.16 0.27,1.16;2.65,2.5 2.65,3.5;3.05,2.5 3.05,3.5;4.3,2.5 4.3,3.5;4.7,2.5 4.7,3.5" etichette="0.9,1.32,10 V;2.85,3.9,2 μF;4.5,3.9,3 μF" titolo="I due condensatori in serie sono collegati a un generatore da $10\,\mathrm V$"}
:::

:::attenzione
In serie la tensione non si divide in parti uguali. Due condensatori da $2\,\mathrm{\mu F}$ e $8\,\mathrm{\mu F}$ collegati a $10\,\mathrm V$ hanno $C_{\mathrm{eq}}=1{,}6\,\mathrm{\mu F}$ e $Q=16\,\mathrm{\mu C}$. Le tensioni sono $\dfrac{16}{2}\,\mathrm V=8\,\mathrm V$ e $\dfrac{16}{8}\,\mathrm V=2\,\mathrm V$, non $5\,\mathrm V$ ciascuno. In generale $\Delta V_1=\Delta V\,\dfrac{C_2}{C_1+C_2}$.
:::

## Energia immagazzinata

:::teorema{#energia-condensatore titolo="Energia del campo elettrico"}
Durante la carica di un condensatore ideale, la tensione cresce come $\Delta V=\dfrac QC$. Per una piccola carica aggiuntiva $\Delta Q$, trasferita quasi staticamente, il lavoro di carica è $\Delta V\,\Delta Q$. L'energia finale è l'area del triangolo sotto la retta nel grafico tensione-carica e vale
$$
U_C=\frac12Q\Delta V=\frac12C(\Delta V)^2=\frac{Q^2}{2C}.
$$

::grafico{f="0.5*x" area="0.5*x;0;0;24" punti="24,12,pieno,A" xmin=0 xmax=30 ymin=0 ymax=16 nomi="Q,ΔV" legenda="C=2\,\mathrm{\mu F}" titolo="Carica in microcoulomb e tensione in volt. L'area del triangolo vale $144\,\mathrm{\mu J}$."}

Il fattore $\dfrac12$ compare perché durante la carica la tensione parte da zero e sale fino al valore finale. Per un condensatore piano nel vuoto, sostituendo $C=\dfrac{\varepsilon_0 A}{d}$ e $\Delta V=Ed$, si ottiene $U_C=\dfrac12\varepsilon_0E^2Ad$. Dividendo per il volume $Ad$ si trova la densità di energia $u_E=\dfrac12\varepsilon_0E^2$ nella regione fra le armature, dove il campo è uniforme.
:::

:::esempio{titolo="Flash di una macchina fotografica"}
Un condensatore da $100\,\mathrm{\mu F}$ è carico a $300\,\mathrm V$. L'energia immagazzinata è
$$
U_C=\frac12\cdot100\cdot10^{-6}\cdot300^2\,\mathrm J=4{,}5\,\mathrm J.
$$
Se si scarica in $1{,}0\,\mathrm{ms}$, la potenza media è $\dfrac{4{,}5\,\mathrm J}{1{,}0\cdot10^{-3}\,\mathrm s}=4{,}5\,\mathrm{kW}$. Il condensatore accumula l'energia lentamente e la restituisce in un tempo breve, e per questo la potenza è molto maggiore di quella del generatore che lo carica.
:::

:::osservazione{titolo="Densità di energia: due valori di campo"}
Con $\varepsilon_0=8{,}85\cdot10^{-12}\,\mathrm{F/m}$, un campo di $3{,}0\cdot10^3\,\mathrm{V/m}$ ha $u_E=\dfrac12\varepsilon_0E^2\simeq4{,}0\cdot10^{-5}\,\mathrm{J/m^3}$. In aria si innesca una scarica attorno a $3\cdot10^6\,\mathrm{V/m}$, e a questo campo $u_E\simeq40\,\mathrm{J/m^3}$. Il campo è mille volte maggiore e la densità di energia un milione di volte maggiore, perché $u_E$ dipende dal quadrato di $E$.
:::

## Inserimento di un dielettrico

:::osservazione{#dielettrico titolo="Condensatore isolato o collegato al generatore"}
Se nel vano c'è inizialmente il vuoto e la geometria resta fissa, riempirlo con un dielettrico lineare omogeneo moltiplica la capacità per $\varepsilon_r$. Se il condensatore è **isolato**, la carica resta costante, quindi tensione ed energia diminuiscono come $\dfrac1C$. Se resta collegato a un **generatore ideale**, la tensione resta costante, quindi carica ed energia immagazzinata aumentano in proporzione a $C$.
:::

:::osservazione{titolo="Perché il dielettrico riduce il campo"}
Fra le armature, il campo polarizza le molecole del dielettrico. Sulla faccia vicina all'armatura positiva compare una carica di polarizzazione negativa e sulla faccia vicina all'armatura negativa una carica positiva. Queste cariche generano un campo opposto a quello delle armature. A carica $Q$ costante il campo interno diventa $E=\dfrac{E_0}{\varepsilon_r}$, dove $E_0$ è il campo nel vuoto. Con $d$ fisso anche $\Delta V=Ed$ si divide per $\varepsilon_r$, in accordo con $C'=\varepsilon_rC$. Per $\varepsilon_r=3$ la tensione passa da $12\,\mathrm V$ a $4\,\mathrm V$.

::grafico{assi=0 uguale=1 poligoni="1,0.5 5,0.5 5,3.5 1,3.5" linee="0.5,3.5 5.5,3.5;0.5,0.5 5.5,0.5" etichette="0.2,4,+Q;0.2,0,−Q;1.6,3.1,− − − −;1.6,0.75,+ + + +;3,2,E = E₀/εᵣ" xmin=0 xmax=6 ymin=-0.5 ymax=4.5 titolo="Il dielettrico fra le armature porta cariche di polarizzazione sulle facce. Il campo diminuisce di un fattore $\varepsilon_r$."}
:::

:::esempio{titolo="Lo stesso dielettrico in due circuiti"}
Un condensatore da $2\,\mathrm{\mu F}$ è inizialmente a $12\,\mathrm V$, quindi ha $Q=24\,\mathrm{\mu C}$ e $U_C=144\,\mathrm{\mu J}$. Un dielettrico con $\varepsilon_r=3$ porta la capacità a $6\,\mathrm{\mu F}$.

- Se il condensatore è scollegato prima dell'inserimento, $Q=24\,\mathrm{\mu C}$. La tensione scende a $4\,\mathrm V$ e l'energia scende a $\dfrac12\cdot24\cdot4\,\mathrm{\mu J}=48\,\mathrm{\mu J}$. La differenza di $96\,\mathrm{\mu J}$ può fornire lavoro meccanico o essere dissipata.
- Se il generatore rimane collegato, $\Delta V=12\,\mathrm V$. La carica sale a $72\,\mathrm{\mu C}$ e l'energia sale a $432\,\mathrm{\mu J}$. Il generatore sposta $48\,\mathrm{\mu C}$ di carica attraverso $12\,\mathrm V$, fornendo $576\,\mathrm{\mu J}$. Di questi, $288\,\mathrm{\mu J}$ aumentano l'energia del condensatore. I restanti $288\,\mathrm{\mu J}$ possono essere trasferiti come lavoro meccanico o dissipati, secondo il modo in cui il dielettrico viene inserito.
:::

## Conduttori sferici

:::richiamo{titolo="Campo di una sfera conduttrice carica"}
Ipotesi: una sfera conduttrice di raggio $R$ è in equilibrio elettrostatico e porta la carica totale $Q$ sulla superficie. Tesi: il campo è nullo per $r<R$ e vale $E=k_e\dfrac{Q}{r^2}$ per $r>R$, come per una carica puntiforme $Q$ nel centro.
:::

::::teorema{#sfera-conduttrice titolo="Potenziale e capacità di una sfera conduttrice"}
Per una sfera conduttrice isolata di raggio $R$ e carica $Q$, con potenziale nullo all'infinito,
$$
V=\begin{cases}k_e\dfrac{Q}{r} & r\ge R,\\[8pt] k_e\dfrac{Q}{R} & r\le R.\end{cases}
$$
La sfera ha quindi capacità $C=\dfrac{Q}{V}=4\pi\varepsilon_0R$. La capacità di un conduttore isolato si misura rispetto al riferimento all'infinito.

::grafico{f="x<10?899:8990/x" xmin=0 xmax=60 ymin=0 ymax=1000 punti="10,899,pieno,R" nomi="r,V" titolo="Distanza dal centro in centimetri e potenziale in volt per $R=10\,\mathrm{cm}$ e $Q=10\,\mathrm{nC}$. All'interno il potenziale è costante."}

:::dimostrazione
Fuori dalla sfera il campo è uguale a quello di una carica puntiforme $Q$ nel centro. Quindi sono uguali le differenze di potenziale fra due punti esterni e, con lo zero all'infinito, il potenziale è $k_e\dfrac{Q}{r}$. Sulla superficie vale $k_e\dfrac{Q}{R}$. Dentro la sfera il campo è nullo, quindi la differenza di potenziale fra due punti qualsiasi interni è zero e il potenziale è costante, uguale al valore sulla superficie. Infine, poiché $k_e=\dfrac{1}{4\pi\varepsilon_0}$, si ottiene $C=\dfrac{Q}{k_eQ/R}=4\pi\varepsilon_0R$.
:::
::::

:::esempio{titolo="La Terra come conduttore sferico"}
Con $R=6{,}37\cdot10^6\,\mathrm m$ la capacità è $C=\dfrac{R}{k_e}\simeq7{,}09\cdot10^{-4}\,\mathrm F=709\,\mathrm{\mu F}$. Una sfera conduttrice di $10\,\mathrm{cm}$ di raggio con $Q=10\,\mathrm{nC}$ ha $V=\dfrac{8{,}99\cdot10^9\cdot10\cdot10^{-9}}{0{,}10}\,\mathrm V=899\,\mathrm V$, e la sua capacità è $11{,}1\,\mathrm{pF}$.
:::

::::teorema{#sfere-collegate titolo="Sfere conduttrici collegate"}
Due sfere conduttrici di raggi $R_1$ e $R_2$, molto lontane fra loro, sono collegate da un filo conduttore sottile. Hanno lo stesso potenziale, le cariche stanno nel rapporto $\dfrac{Q_1}{Q_2}=\dfrac{R_1}{R_2}$ e le densità superficiali nel rapporto $\dfrac{\sigma_1}{\sigma_2}=\dfrac{R_2}{R_1}$.

:::dimostrazione
Il filo e le due sfere formano un solo conduttore in equilibrio, quindi i potenziali sono uguali, $k_e\dfrac{Q_1}{R_1}=k_e\dfrac{Q_2}{R_2}$. Ne segue $\dfrac{Q_1}{Q_2}=\dfrac{R_1}{R_2}$. Poiché $\sigma=\dfrac{Q}{4\pi R^2}$, il rapporto delle densità è
$$
\frac{\sigma_1}{\sigma_2}=\frac{Q_1}{Q_2}\cdot\frac{R_2^2}{R_1^2}=\frac{R_1}{R_2}\cdot\frac{R_2^2}{R_1^2}=\frac{R_2}{R_1}.
$$
:::
::::

:::esempio{titolo="Effetto delle punte"}
Due sfere di raggio $10\,\mathrm{cm}$ e $2{,}0\,\mathrm{cm}$ sono collegate e portano insieme $12\,\mathrm{nC}$. Le cariche sono nel rapporto $5$, quindi $Q_1=10\,\mathrm{nC}$ e $Q_2=2{,}0\,\mathrm{nC}$, e il potenziale comune è $899\,\mathrm V$. I campi appena fuori dalle superfici, $E=k_e\dfrac{Q}{R^2}$, valgono $8{,}99\cdot10^3\,\mathrm{V/m}$ e $4{,}5\cdot10^4\,\mathrm{V/m}$. Dove il raggio di curvatura è minore la densità di carica e il campo sono maggiori, e per questo una scarica parte più facilmente da una punta.
:::

::::teorema{#condensatore-sferico titolo="Condensatore sferico"}
Una sfera conduttrice di raggio $R_1$ con carica $+Q$ è circondata da un guscio sferico conduttore concentrico di raggio $R_2>R_1$, con carica totale $-Q$. La tensione e la capacità sono
$$
\Delta V=k_eQ\left(\frac{1}{R_1}-\frac{1}{R_2}\right),\qquad
C=4\pi\varepsilon_0\frac{R_1R_2}{R_2-R_1}.
$$

:::dimostrazione
Per $R_1\le r\le R_2$ il potenziale è la somma di due contributi. La sfera interna dà $k_e\dfrac{Q}{r}$. Il guscio, con carica $-Q$ distribuita su una superficie sferica di raggio $R_2$, dà un potenziale costante dentro di sé, uguale al valore sulla superficie, cioè $-k_e\dfrac{Q}{R_2}$. Perciò $V(r)=k_eQ\left(\dfrac{1}{r}-\dfrac{1}{R_2}\right)$. Sull'armatura esterna $V(R_2)=0$ e su quella interna $V(R_1)=k_eQ\left(\dfrac{1}{R_1}-\dfrac{1}{R_2}\right)$, che è la tensione $\Delta V$. Dividendo $Q$ per $\Delta V$ e ricordando $k_e=\dfrac{1}{4\pi\varepsilon_0}$ si trova $C=\dfrac{R_1R_2}{k_e(R_2-R_1)}$.
:::
::::

:::osservazione{titolo="Confronto con il condensatore piano"}
Con $R_1=5{,}0\,\mathrm{cm}$ e $R_2=6{,}0\,\mathrm{cm}$ si ha $C\simeq33{,}4\,\mathrm{pF}$. Se lo spazio fra le armature si riduce a $d=1{,}0\,\mathrm{mm}$, con $R_1=5{,}0\,\mathrm{cm}$ e $R_2=5{,}1\,\mathrm{cm}$, la formula dà $283{,}6\,\mathrm{pF}$. Il condensatore piano con $A=4\pi R_1^2$ e la stessa distanza dà $\varepsilon_0\dfrac{A}{d}\simeq278{,}0\,\mathrm{pF}$, con uno scarto del $2{,}0\%$. Quando $d\ll R_1$ le due formule coincidono, perché $R_1R_2\simeq R_1^2$.
:::

## Collegamento di condensatori carichi

::::teorema{#condensatori-collegati titolo="Tensione finale e perdita di energia"}
Due condensatori di capacità $C_1$ e $C_2$, con tensioni iniziali $V_1$ e $V_2$, sono scollegati dai generatori e collegati fra loro con le armature positive unite fra loro e le armature negative unite fra loro. La tensione finale comune è
$$
V=\frac{C_1V_1+C_2V_2}{C_1+C_2},
$$
e l'energia immagazzinata diminuisce di
$$
\Delta U=\frac{1}{2}\,\frac{C_1C_2}{C_1+C_2}\,(V_1-V_2)^2\ge0.
$$

:::dimostrazione
Le armature positive formano un sistema isolato, quindi la loro carica totale si conserva e vale $Q_1+Q_2=C_1V_1+C_2V_2$. Dopo il collegamento i condensatori sono in parallelo con tensione comune $V$, quindi la carica totale vale anche $(C_1+C_2)V$. Uguagliando si ottiene la formula di $V$. L'energia finale è $U_f=\dfrac{1}{2}(C_1+C_2)V^2=\dfrac{(C_1V_1+C_2V_2)^2}{2(C_1+C_2)}$ e quella iniziale è $U_i=\dfrac{1}{2}C_1V_1^2+\dfrac{1}{2}C_2V_2^2$. La differenza è
$$
\begin{aligned}
U_i-U_f&=\frac{(C_1+C_2)(C_1V_1^2+C_2V_2^2)-(C_1V_1+C_2V_2)^2}{2(C_1+C_2)} \\[6pt]
&=\frac{C_1C_2V_1^2+C_1C_2V_2^2-2C_1C_2V_1V_2}{2(C_1+C_2)} \\[6pt]
&=\frac{C_1C_2(V_1-V_2)^2}{2(C_1+C_2)}.
\end{aligned}
$$
Il numeratore è un quadrato, quindi $U_i-U_f\ge0$.
:::
::::

:::esempio{titolo="Un condensatore carico collegato a uno scarico"}
Un condensatore da $4{,}0\,\mathrm{\mu F}$ a $12\,\mathrm V$ viene collegato a uno da $2{,}0\,\mathrm{\mu F}$ scarico. La carica iniziale è $48\,\mathrm{\mu C}$, quindi $V=\dfrac{48}{6}\,\mathrm V=8{,}0\,\mathrm V$. L'energia passa da $288\,\mathrm{\mu J}$ a $\dfrac{1}{2}\cdot6\cdot8^2\,\mathrm{\mu J}=192\,\mathrm{\mu J}$. Si perdono $96\,\mathrm{\mu J}$, uguali a $\dfrac{1}{2}\cdot\dfrac{8}{6}\cdot12^2\,\mathrm{\mu J}$. L'energia mancante si trasforma in calore nei fili, in una eventuale scintilla e in radiazione.
:::

:::attenzione
Se le armature si collegano con polarità opposta, la tensione del secondo condensatore entra con il segno negativo. Con $4{,}0\,\mathrm{\mu F}$ a $12\,\mathrm V$ e $2{,}0\,\mathrm{\mu F}$ a $6{,}0\,\mathrm V$ collegati positivo con negativo si pone $V_2=-6{,}0\,\mathrm V$ e si trova $V=\dfrac{48-12}{6}\,\mathrm V=6{,}0\,\mathrm V$. Usando $+6{,}0\,\mathrm V$ si sommerebbero le cariche $48$ e $12\,\mathrm{\mu C}$ e si otterrebbe $10\,\mathrm V$. In questo caso l'energia passa da $324\,\mathrm{\mu J}$ a $108\,\mathrm{\mu J}$.
:::
