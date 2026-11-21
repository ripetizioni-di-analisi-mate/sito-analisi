---
titolo: Quantità di moto e urti
sommario: Impulso, centro di massa e conservazioni negli urti elastici e anelastici.
---

## Quantità di moto

:::definizione{#quantita-moto titolo="Vettore quantità di moto"}
Un **riferimento inerziale** è un sistema di riferimento in cui vale il primo principio della dinamica: un corpo su cui non agiscono forze sta fermo oppure si muove di moto rettilineo uniforme. Il pavimento di un laboratorio è, con ottima approssimazione, un riferimento inerziale.

In un riferimento inerziale, un corpo di massa $m$ e velocità $\vec v$ ha **quantità di moto**
$$
\vec p=m\vec v.
$$
La quantità di moto è un vettore, cioè una grandezza con un modulo (un valore positivo), una direzione e un verso. La massa è positiva, quindi $\vec p$ ha la stessa direzione e lo stesso verso di $\vec v$, e il suo modulo è $p=mv$. L’unità di misura è il chilogrammo per metro al secondo, $\mathrm{kg\cdot m/s}$.

In una dimensione, cioè per moti lungo una retta, si sceglie un asse con un verso positivo. La **componente** $v_x$ della velocità vale $+v$ se il corpo si muove nel verso positivo e $-v$ se si muove nel verso opposto. La componente della quantità di moto è $p_x=mv_x$ e ha lo stesso segno di $v_x$. Con uno stesso asse per tutti i corpi, le componenti di segno opposto si sottraggono quando si calcola il totale.

La quantità di moto di un sistema, cioè di un insieme di corpi, è la somma vettoriale delle quantità di moto dei singoli corpi:
$$
\vec P=\sum_jm_j\vec v_j=m_1\vec v_1+m_2\vec v_2+\dots
$$
Il simbolo $\sum$ (sigma maiuscola) indica una somma, e l’indice $j$ numera i corpi. Due corpi possono avere $\vec P=0$ e muoversi entrambi, se le loro quantità di moto hanno lo stesso modulo e versi opposti. In quel caso le energie cinetiche $K=\dfrac12mv^2$ sono entrambe positive, perché contengono il quadrato della velocità, e la loro somma resta positiva. Le due grandezze danno dunque informazioni diverse. La quantità di moto è un vettore e tiene conto del verso dei moti. L’energia cinetica è uno **scalare**, cioè un numero senza direzione, ed è una somma di termini mai negativi.

La quantità di moto dipende dal riferimento, perché la velocità di un corpo dipende da chi la misura. Se un osservatore si muove con velocità $\vec u$ rispetto al pavimento, la velocità del corpo misurata da lui è $\vec v\,'=\vec v-\vec u$. Per esempio, un ciclista a $10\,\mathrm{m/s}$, visto da un osservatore che va nello stesso verso a $4\,\mathrm{m/s}$, ha velocità $6\,\mathrm{m/s}$. Per confrontare i dati di tutti i corpi si usa quindi un unico riferimento, di solito il pavimento del laboratorio.

Un sistema è **chiuso** se nessun corpo entra o esce, quindi la sua massa totale $M$ resta costante. Due osservatori inerziali attribuiscono a $\vec P$ valori diversi, perché ogni velocità cambia di $\vec u$ e quindi $\vec P\,'=\vec P-M\vec u$. Per un sistema chiuso il termine $M\vec u$ è lo stesso in ogni istante, perciò entrambi gli osservatori misurano la stessa variazione di $\vec P$ fra due istanti.
:::

:::esempio{titolo="Sfere su assi perpendicolari"}
Una sfera di $2\,\mathrm{kg}$ avanza verso est a $3\,\mathrm{m/s}$ e una di $1\,\mathrm{kg}$ avanza verso nord a $8\,\mathrm{m/s}$. Si prende l’asse $x$ positivo verso est e l’asse $y$ positivo verso nord.
- La prima sfera ha $\vec p_1=(2\cdot3,\;0)\,\mathrm{kg\cdot m/s}=(6,0)\,\mathrm{kg\cdot m/s}$.
- La seconda sfera ha $\vec p_2=(0,\;1\cdot8)\,\mathrm{kg\cdot m/s}=(0,8)\,\mathrm{kg\cdot m/s}$.

Il totale si ottiene sommando componente per componente, quindi $\vec P=(6,8)\,\mathrm{kg\cdot m/s}$. Gli assi sono perpendicolari, perciò per il teorema di Pitagora il modulo del totale è $\sqrt{6^2+8^2}\,\mathrm{kg\cdot m/s}=\sqrt{100}\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}$. La somma dei moduli, $14\,\mathrm{kg\cdot m/s}$, sarebbe il modulo del totale soltanto per due vettori paralleli e con lo stesso verso.

::grafico{uguale=1 vettori="0,0,6,0,p_1;6,0,6,8,p_2;0,0,6,8,P" xmin=-2 xmax=9 ymin=-2 ymax=10 nomi="pₓ (kg·m/s),pᵧ (kg·m/s)" titolo="Il vettore nord si aggiunge alla punta del vettore est"}
:::

:::esempio{titolo="Impulso quando varia solo la direzione"}
Una biglia di $0{,}50\,\mathrm{kg}$ entra in una curva con velocità di $6\,\mathrm{m/s}$ verso est e ne esce con la stessa rapidità verso nord. La **rapidità** è il modulo della velocità. Prendendo positivi est e nord, la quantità di moto ha modulo $0{,}50\cdot6\,\mathrm{kg\cdot m/s}=3\,\mathrm{kg\cdot m/s}$ all’inizio e alla fine, e si ha
$$
\vec p_i=(3,0)\,\mathrm{kg\cdot m/s},\qquad
\vec p_f=(0,3)\,\mathrm{kg\cdot m/s}.
$$
La variazione si calcola sottraendo componente per componente:
$$
\Delta\vec p=\vec p_f-\vec p_i=(0-3,\;3-0)\,\mathrm{kg\cdot m/s}=(-3,3)\,\mathrm{kg\cdot m/s}.
$$
La componente $x$ è negativa e la componente $y$ è positiva, quindi la variazione punta verso nord-ovest. Il suo modulo vale $\sqrt{3^2+3^2}\,\mathrm{kg\cdot m/s}$. L’energia cinetica vale $\dfrac12\cdot0{,}50\cdot6^2\,\mathrm J=9\,\mathrm J$ sia all’inizio sia alla fine. La differenza dei moduli vale zero, mentre $\Delta\vec p$ ha modulo $3\sqrt 2\,\mathrm{kg\cdot m/s}$. Perciò la variazione di quantità di moto si ricava sottraendo le componenti dei vettori, e non i moduli.

Nella figura la freccia $J$ va dalla punta di $\vec p_i$ alla punta di $\vec p_f$ e rappresenta la variazione $\Delta\vec p$, che prende il nome di impulso.

::grafico{vettori="0,0,3,0,p_i;0,0,0,3,p_f;3,0,0,3,J" uguale=1 xmin=-1 xmax=4 ymin=-1 ymax=4 nomi="pₓ,pᵧ" titolo="L’impulso congiunge la punta della quantità di moto iniziale a quella della quantità di moto finale. Unità in kg·m/s."}
:::

## Impulso

:::teorema{#impulso titolo="Impulso e variazione di quantità di moto"}
L’**impulso** di una forza costante $\vec F$ che agisce per un intervallo di tempo $\Delta t$ (si legge «delta t») è il vettore $\vec J=\vec F\,\Delta t$, con la stessa direzione e lo stesso verso della forza. La **risultante** $\vec F_{\mathrm{tot}}$ è la somma vettoriale di tutte le forze che agiscono sul corpo.

Per un corpo di massa costante, l’impulso della risultante fra due istanti è uguale alla variazione della quantità di moto. Se la risultante è costante, l’accelerazione è costante e vale $\vec a=\dfrac{\vec v_f-\vec v_i}{\Delta t}$. Per il secondo principio della dinamica, $\vec F_{\mathrm{tot}}=m\vec a$, si ha allora
$$
\vec J=\vec F_{\mathrm{tot}}\Delta t
      =m\vec a\,\Delta t=m(\vec v_f-\vec v_i)=\vec p_f-\vec p_i.
$$
L’unità dell’impulso è il newton per secondo, $\mathrm{N\cdot s}$. Un newton vale $1\,\mathrm{kg\cdot m/s^2}$, quindi $1\,\mathrm{N\cdot s}=1\,\mathrm{kg\cdot m/s}$, l’unità della quantità di moto.

Se la forza varia nel tempo, si divide l’intervallo in tratti brevi, nei quali la forza è quasi costante, e si sommano gli impulsi dei singoli tratti. In una dimensione, sul grafico della componente $F_x$ in funzione del tempo, l’impulso di un tratto breve è l’area di un rettangolo sottile di base $\Delta t$ e altezza $F_x$. Perciò l’impulso totale è l’**area con segno** fra il grafico $F_x(t)$ e l’asse dei tempi. Le aree sopra l’asse, dove la forza è positiva, si contano con il segno più. Le aree sotto l’asse, dove la forza è negativa, si contano con il segno meno.

L’impulso ricavato da $\Delta\vec p$ è l’impulso della risultante, cioè di tutte le forze insieme. Per isolare il contributo di una sola forza servono dati ulteriori sulle altre forze.

La **forza media** è la forza costante che nello stesso intervallo darebbe lo stesso impulso:
$$
\vec F_m=\frac{\Delta\vec p}{\Delta t}.
$$
A parità di variazione di quantità di moto, un tempo più lungo dà una forza media di modulo minore. Questo spiega l’uso di ammortizzatori e superfici deformabili, che allungano la durata dell’arresto. Il valore medio dipende solo dalla variazione e dalla durata, mentre il **picco**, cioè il valore massimo della forza, dipende da come la forza cambia istante per istante.
:::

:::esempio{titolo="Rimbalzo e arresto"}
Si prende positivo il verso di arrivo. Una palla da $0{,}20\,\mathrm{kg}$ arriva a $5\,\mathrm{m/s}$, quindi $v_i=+5\,\mathrm{m/s}$, e rimbalza a $3\,\mathrm{m/s}$ in verso opposto, quindi $v_f=-3\,\mathrm{m/s}$. Perciò
$$
J_x=m(v_f-v_i)=0{,}20\cdot(-3-5)\,\mathrm{N\cdot s}=0{,}20\cdot(-8)\,\mathrm{N\cdot s}=-1{,}6\,\mathrm{N\cdot s}.
$$
Se la palla si fosse soltanto fermata, la componente finale sarebbe stata zero e l’impulso $0{,}20\cdot(0-5)\,\mathrm{N\cdot s}=-1\,\mathrm{N\cdot s}$. Il rimbalzo richiede un impulso più grande in modulo, perché la velocità passa da $+5$ a $0$ e poi da $0$ a $-3\,\mathrm{m/s}$, quindi cambia in tutto di $8\,\mathrm{m/s}$ invece che di $5\,\mathrm{m/s}$.

::grafico{assi=0 vettori="0,1,5,1,v_i;0,0,-3,0,v_f" xmin=-4 xmax=6 ymin=-.8 ymax=2 titolo="Il verso positivo è verso destra. Le lunghezze rappresentano i moduli delle due velocità"}
:::

:::esempio{titolo="Separare l’impulso di contatto dall’impulso del peso"}
Una palla di massa $0{,}20\,\mathrm{kg}$ si muove in verticale. L’asse è positivo verso l’alto. La palla arriva sul pavimento con $v_i=-4\,\mathrm{m/s}$ e riparte con $v_f=+3\,\mathrm{m/s}$. Il contatto dura $0{,}020\,\mathrm s$, l’aria è trascurabile e $g=10\,\mathrm{m/s^2}$.

La variazione di quantità di moto vale
$$
\Delta p=m(v_f-v_i)=0{,}20\cdot\big(3-(-4)\big)\,\mathrm{N\cdot s}=0{,}20\cdot7\,\mathrm{N\cdot s}=1{,}4\,\mathrm{N\cdot s}.
$$
Durante il contatto agiscono due forze, il peso e la forza del pavimento, quindi $\Delta p$ è la somma dei loro impulsi. Il peso vale $mg$ ed è diretto verso il basso, perciò il suo impulso è $-mg\,\Delta t=-0{,}20\cdot10\cdot0{,}020\,\mathrm{N\cdot s}=-0{,}04\,\mathrm{N\cdot s}$. L’impulso del pavimento si ricava sottraendo dall’impulso totale il contributo del peso:
$$
J_{\mathrm{pav}}=\Delta p-(-mg\,\Delta t)
                 =1{,}4+0{,}04=1{,}44\,\mathrm{N\cdot s}.
$$
Il peso toglie una piccola parte della quantità di moto verso l’alto, quindi il pavimento deve dare un impulso positivo leggermente superiore alla variazione misurata.
:::

:::esempio{titolo="Impulso da quattro campioni di un sensore"}
Un sensore registra la componente della risultante lungo un binario in quattro istanti. Fra due letture la forza si approssima con il segmento che le unisce. La durata complessiva è $0{,}20\,\mathrm s$.

| $t$ (s) | $F_x$ (N) | Intervallo successivo |
| ---: | ---: | :--- |
| 0 | 0 | salita |
| 0,05 | 24 | discesa fino a zero |
| 0,15 | 0 | correzione negativa |
| 0,20 | −8 | fine della misura |

::grafico{linee="0,0 50,24 150,0 200,-8" area=".48*x;0;0;50|36-.24*x;0;50;150|0;24-.16*x;150;200" punti="50,24,pieno;150,0,pieno;200,-8,pieno" xmin=0 xmax=250 ymin=-12 ymax=28 nomi="t (ms),Fₓ (N)" titolo="Il grafico usa i millisecondi. Il tratto negativo inizia a 150 ms."}

Nel grafico il tempo è in millisecondi ($1\,\mathrm{ms}=0{,}001\,\mathrm s$). Le tre aree sono triangoli, e l’area di un triangolo è metà di base per altezza.
- Da $0$ a $0{,}05\,\mathrm s$: $\dfrac12\cdot0{,}05\cdot24\,\mathrm{N\cdot s}=0{,}60\,\mathrm{N\cdot s}$.
- Da $0{,}05$ a $0{,}15\,\mathrm s$: $\dfrac12\cdot0{,}10\cdot24\,\mathrm{N\cdot s}=1{,}20\,\mathrm{N\cdot s}$.
- Da $0{,}15$ a $0{,}20\,\mathrm s$, sotto l’asse: $\dfrac12\cdot0{,}05\cdot(-8)\,\mathrm{N\cdot s}=-0{,}20\,\mathrm{N\cdot s}$.

Il totale vale $(0{,}60+1{,}20-0{,}20)\,\mathrm{N\cdot s}=1{,}60\,\mathrm{N\cdot s}$. La forza media è $\dfrac{1{,}60}{0{,}20}\,\mathrm N=8\,\mathrm N$, inferiore alla lettura massima di $24\,\mathrm N$. Il sensore registra soltanto quattro valori, quindi un picco fra due letture resterebbe fuori dal modello a segmenti e cambierebbe la stima. Con letture più ravvicinate il picco si misura.
:::

## Sistemi isolati

:::teorema{#conservazione-moto titolo="Bilancio della quantità di moto totale"}
Un sistema è l’insieme dei corpi che si sceglie di studiare insieme, per esempio due carrelli che si urtano. Per un sistema chiuso le forze si dividono in due gruppi.
- Le **forze interne** sono quelle che un corpo del sistema esercita su un altro corpo del sistema.
- Le **forze esterne** sono quelle esercitate da corpi che non fanno parte del sistema, come la Terra (il peso), il pavimento, l’aria.

Per il terzo principio della dinamica (principio di azione e reazione), le forze interne sono a coppie uguali e opposte e agiscono per lo stesso tempo, quindi i loro impulsi sono a coppie opposti. Per ogni corpo la variazione di quantità di moto è la somma dell’impulso interno e dell’impulso esterno che riceve. Sommando queste equazioni per tutti i corpi, gli impulsi interni si cancellano a coppie, perciò
$$
\vec P_f-\vec P_i=\vec J_{\mathrm{est}} .
$$
Un sistema si dice **isolato** quando l’impulso esterno complessivo è nullo. In quel caso $\vec P_f=\vec P_i$, cioè la quantità di moto totale si conserva. Lo stesso bilancio si applica a una sola componente. Se l’impulso esterno lungo un asse è nullo, la componente del totale lungo quell’asse si conserva. Su un binario orizzontale il peso e la **normale** (la forza con cui il binario sostiene il carrello, perpendicolare al binario) sono verticali, quindi i loro impulsi sono verticali. Trascurando l’attrito, lungo il binario l’impulso esterno è nullo, perciò la componente lungo il binario si conserva anche se sui carrelli agiscono forze verticali.

Un **urto** è un’interazione breve fra due corpi, durante la quale i corpi si scambiano forze interne molto intense. In un intervallo così breve l’impulso delle forze esterne è spesso piccolo rispetto all’impulso scambiato fra i corpi, e in quel caso si trascura. Il confronto riguarda gli impulsi, cioè i prodotti forza per tempo, e non le sole forze. Durante il contatto le quantità di moto dei singoli corpi cambiano. Si conserva la loro somma, purché il sistema comprenda tutti i corpi che interagiscono e si considerino le componenti lungo cui l’impulso esterno è trascurabile.
:::

:::esempio{titolo="Controllo dell’ipotesi di isolamento"}
Durante un urto di $0{,}010\,\mathrm s$ un carrello riceve da un altro un impulso di modulo $3\,\mathrm{N\cdot s}$. La resistenza esterna totale vale al più $2\,\mathrm N$, quindi il modulo del suo impulso sul sistema è al più $2\cdot0{,}010\,\mathrm{N\cdot s}=0{,}020\,\mathrm{N\cdot s}$.

Si confronta questo impulso con lo scambio fra i carrelli: $\dfrac{0{,}020}{3}\approx0{,}0067$, cioè circa lo $0{,}67\%$. Perciò l’errore che si commette ponendo uguali le quantità di moto totali prima e dopo l’urto è inferiore all’un per cento dello scambio. Se il totale è vicino a zero, lo stesso impulso esterno può essere invece una frazione molto più grande del totale.

Con lo stesso scambio interno di $3\,\mathrm{N\cdot s}$ e un urto di durata diversa, la stessa precisione dell’uno per cento richiede un impulso esterno di al più $0{,}01\cdot3\,\mathrm{N\cdot s}=0{,}03\,\mathrm{N\cdot s}$. Con una forza di $2\,\mathrm N$ questo impulso si raggiunge dopo $\dfrac{0{,}03}{2}\,\mathrm s=0{,}015\,\mathrm s=15\,\mathrm{ms}$. L’approssimazione resta quindi entro l’uno per cento per urti che durano fino a $15\,\mathrm{ms}$.

Nella figura l’impulso è in millinewton per secondo ($1\,\mathrm{mN\cdot s}=0{,}001\,\mathrm{N\cdot s}$) e il punto $A$ corrisponde all’urto di $10\,\mathrm{ms}$.

::grafico{linee="0,0 25,50;0,30 25,30" punti="10,20,pieno,A;15,30,pieno,B" xmin=0 xmax=30 ymin=0 ymax=55 nomi="t (ms),J (mN·s)" titolo="La retta crescente è il limite esterno. La soglia di 30 mN·s, pari a 0,03 N·s, è raggiunta a 15 ms."}
:::

:::esempio{titolo="Una parete cambia lato del contorno"}
Un carrello di $2\,\mathrm{kg}$ arriva a $3\,\mathrm{m/s}$ verso una parete e rimbalza a $2\,\mathrm{m/s}$ in verso opposto. Si sceglie positivo il verso che va verso la parete, quindi
$$
\Delta p=m(v_f-v_i)=2\cdot(-2-3)\,\mathrm{kg\cdot m/s}=-10\,\mathrm{N\cdot s}.
$$
- Se il sistema comprende solo il carrello, la forza della parete è esterna. L’impulso di $-10\,\mathrm{N\cdot s}$ viene dall’esterno e cambia la quantità di moto del sistema.
- Se il sistema comprende anche la parete e la Terra a cui è fissata, la stessa forza di contatto è interna. Per il terzo principio l’insieme parete-Terra riceve un impulso di $+10\,\mathrm{N\cdot s}$, che compensa la variazione del carrello.

La massa della Terra è circa $6\cdot10^{24}\,\mathrm{kg}$, quindi la variazione della sua velocità è troppo piccola per essere osservata.

Nella figura la linea verticale è la parete. La freccia $J_1$ è l’impulso sul carrello, verso sinistra, e la freccia $J_2$ è l’impulso sulla parete, verso destra.

::grafico{assi=0 vettori="0,1,-3,1,J₁;0,0,3,0,J₂" linee="0,-.5 0,1.5" xmin=-5 xmax=5 ymin=-.8 ymax=1.8 titolo="Interazione carrello-parete. I due impulsi di contatto hanno lo stesso modulo e versi opposti."}
:::

## Centro di massa

:::definizione{#centro-massa titolo="Coordinate e moto medio pesato"}
Una **media pesata** di alcuni valori si calcola moltiplicando ogni valore per il suo peso, sommando i prodotti e dividendo per la somma dei pesi. Il **centro di massa** di un sistema è il punto la cui posizione è la media delle posizioni dei corpi, pesata con le loro masse. Con $\vec r_j$ posizione del corpo $j$ e $M=\sum_jm_j$ massa totale, si ha
$$
\vec r_{CM}=\frac{\sum_jm_j\vec r_j}{M}.
$$
In una dimensione, con due corpi, la coordinata è $x_{CM}=\dfrac{m_1x_1+m_2x_2}{m_1+m_2}$. La coordinata del centro di massa è compresa fra la coordinata minima e quella massima dei corpi. Con due corpi si trova più vicino a quello di massa maggiore.

Fra due istanti ogni corpo si sposta di $\Delta\vec r_j$ e le masse non cambiano, quindi il centro di massa si sposta di $\Delta\vec r_{CM}=\dfrac{\sum_jm_j\Delta\vec r_j}{M}$. Dividendo per $\Delta t$ si ottiene la velocità del centro di massa:
$$
\vec v_{CM}=\frac{\sum_jm_j\vec v_j}{M}=\frac{\vec P}{M}.
$$
Perciò, se la massa complessiva è costante e l’impulso esterno è nullo, $\vec P$ è costante e quindi anche la velocità del centro di massa è costante. Durante un urto le singole velocità cambiano, mentre il centro di massa continua con la stessa velocità. Il **riferimento del centro di massa** è il riferimento che si muove con velocità $\vec v_{CM}$. In esso ogni velocità diminuisce di $\vec v_{CM}$, quindi la quantità di moto totale vale $\vec P-M\vec v_{CM}=0$. Questo riferimento semplifica lo studio degli urti elastici.
:::

:::esempio{titolo="Una media che tiene conto delle masse"}
Una massa di $2\,\mathrm{kg}$ si trova a $x=0$ e una massa di $6\,\mathrm{kg}$ si trova a $x=4\,\mathrm m$. La coordinata del centro di massa è
$$
x_{CM}=\frac{2\cdot0+6\cdot4}{2+6}\,\mathrm m=\frac{24}{8}\,\mathrm m=3\,\mathrm m.
$$
Il centro di massa dista $3\,\mathrm m$ dalla massa minore e $1\,\mathrm m$ dalla massa maggiore.

Se si sposta l’origine di tre metri verso destra, ogni coordinata diminuisce di $3\,\mathrm m$, quindi le due coordinate diventano $-3\,\mathrm m$ e $1\,\mathrm m$. Il centro di massa ha ora coordinata $\dfrac{2\cdot(-3)+6\cdot1}{8}\,\mathrm m=0$. Il punto fisico è lo stesso, e cambiano soltanto le coordinate.

::grafico{assi=0 linee="-0.4,0 4.58,0;0,-.14 0,.14;3,-.14 3,.14;4,-.14 4,.14" vettori="4.58,0,4.99,0" punti="0,0,pieno;3,0,pieno;4,0,pieno" etichette="-.08,.42,m₁;2.86,.42,CM;3.91,.42,m₂;-.03,-.38,0;2.95,-.38,3;3.95,-.38,4;4.5,.42,x (m)" xmin=-.65 xmax=5.25 ymin=-.65 ymax=.77 titolo="Il centro di massa è più vicino alla massa maggiore"}
:::

:::esempio{titolo="Spostamento interno su una pedana libera"}
Una persona di $60\,\mathrm{kg}$ e una pedana di $40\,\mathrm{kg}$ sono inizialmente ferme. Il pavimento è liscio, cioè senza attrito, e la persona cammina per $2\,\mathrm m$ rispetto alla pedana. Si prende positivo il verso in cui cammina la persona e si indica con $d$ lo spostamento con segno della pedana rispetto al pavimento, in metri. Rispetto al pavimento la persona si sposta del proprio passo più lo spostamento della pedana, cioè di $d+2$.

Sul sistema persona-pedana non agiscono forze orizzontali esterne e il sistema parte fermo, quindi il centro di massa resta fermo. Il suo spostamento è $\dfrac{60(d+2)+40d}{100}$, perciò il numeratore è zero:
$$
60(d+2)+40d=0,\qquad 100d+120=0,\qquad d=-1{,}2\,\mathrm m.
$$
La pedana arretra di $1{,}2\,\mathrm m$, e lo spostamento della persona rispetto al pavimento vale $(-1{,}2+2)\,\mathrm m=+0{,}8\,\mathrm m$. I due spostamenti, moltiplicati per le masse, danno $60\cdot0{,}8=48$ e $40\cdot(-1{,}2)=-48$, quindi si compensano esattamente.

::grafico{assi=0 linee="-1.55,-.33 1.34,-.33;-1.2,-.42 -1.2,-.24;0,-.42 0,-.24;.8,-.42 .8,-.24;-1.2,0 0,0;0,.9 .8,.9" vettori="0,.25,-1.2,.25,d;0,1.15,.8,1.15,Δx;1.34,-.33,1.6,-.33" etichette="-1.35,-.65,−1,2;-.03,-.65,0;.71,-.65,0,8;1.16,-.66,x (m)" xmin=-1.75 xmax=1.85 ymin=-.92 ymax=1.67 titolo="Gli spostamenti rispetto al pavimento sono −1,2 m per la pedana e +0,8 m per la persona."}
:::

:::osservazione{titolo="Usare il centro di massa di un corpo esteso"}
Una sbarra è **uniforme** se la sua massa è distribuita in modo uguale lungo tutta la lunghezza, e in quel caso il suo centro di massa è il punto medio. Un **carico puntiforme** è un corpo abbastanza piccolo da essere trattato come un punto. Per calcolare il centro di massa di una sbarra uniforme e di un carico puntiforme, si raccoglie tutta la massa della sbarra nel suo punto medio. Questa sostituzione mantiene il numeratore della media pesata, perché la somma dei contributi dei pezzetti della sbarra è uguale alla massa della sbarra per la coordinata del punto medio. Se la sbarra è lunga $4\,\mathrm m$ e va da zero a quattro metri, la sua massa si pone a $x=2\,\mathrm m$. Per esempio, con una sbarra di $3\,\mathrm{kg}$ e un carico di $1\,\mathrm{kg}$ a $x=4\,\mathrm m$ si ottiene $x_{CM}=\dfrac{3\cdot2+1\cdot4}{3+1}\,\mathrm m=2{,}5\,\mathrm m$. Per una sbarra più densa a un’estremità, il centro di massa non è il punto medio, quindi la sua posizione si deve prima conoscere o misurare.
:::

## Urto completamente anelastico e rinculo

:::teorema{#anelastico titolo="Corpi agganciati e separazione"}
Un urto è **completamente anelastico** quando i due corpi restano uniti dopo l’urto, quindi hanno la stessa velocità finale $\vec v_f$. Trascurando l’impulso esterno durante l’urto, la quantità di moto si conserva, cioè $m_1\vec v_{1i}+m_2\vec v_{2i}=(m_1+m_2)\vec v_f$. Dividendo per la massa totale si ottiene
$$
\vec v_f=\frac{m_1\vec v_{1i}+m_2\vec v_{2i}}{m_1+m_2}.
$$
Questa formula è la stessa della velocità del centro di massa, quindi la velocità finale coincide con la velocità iniziale del centro di massa.

La **velocità relativa** dei due corpi è la differenza delle loro velocità, $\vec v_{1i}-\vec v_{2i}$, cioè la velocità del primo corpo vista dal secondo. L’energia cinetica iniziale comprende l’energia del moto comune e quella del moto relativo dei due corpi. Quando i corpi si agganciano, la velocità relativa diventa zero e la parte del moto relativo scompare. La differenza si ritrova in deformazioni, riscaldamento e altri trasferimenti di energia. Conservare l’energia cinetica, oltre alla quantità di moto, sarebbe lecito soltanto se la velocità relativa iniziale fosse nulla, cioè se nel modello non ci fosse nessun urto.

Il **rinculo** è il moto all’indietro di un corpo che spinge via un altro corpo, come una barca da cui si salta. Si considerano due corpi inizialmente fermi che si separano con impulso esterno nullo. Il totale iniziale è zero e deve rimanere zero, quindi $m_1\vec v_1+m_2\vec v_2=0$, cioè $m_1\vec v_1=-m_2\vec v_2$. Le due quantità di moto hanno lo stesso modulo e versi opposti, perciò il corpo più leggero acquista la velocità di modulo maggiore. Poiché $v=\dfrac pm$, l’energia cinetica si scrive anche
$$
K=\frac12mv^2=\frac{p^2}{2m},
$$
quindi, a parità di modulo della quantità di moto, il corpo più leggero ha anche l’energia cinetica maggiore. L’energia cinetica finale è positiva anche se quella iniziale è zero, perché si converte energia interna, per esempio quando fra i corpi si libera una molla prima compressa.
:::

:::esempio{titolo="Aggancio con moti opposti"}
Un carrello da $3\,\mathrm{kg}$ si muove verso destra a $4\,\mathrm{m/s}$ e uno da $2\,\mathrm{kg}$ verso sinistra a $1\,\mathrm{m/s}$. Con l’asse positivo verso destra, prima dell’urto il totale è
$$
P=\big(3\cdot4+2\cdot(-1)\big)\,\mathrm{kg\cdot m/s}=(12-2)\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}.
$$
Dopo l’aggancio i due carrelli formano un corpo di $5\,\mathrm{kg}$ con la stessa quantità di moto, quindi si muovono verso destra a $\dfrac{10}{5}\,\mathrm{m/s}=2\,\mathrm{m/s}$.

L’energia cinetica iniziale vale $\dfrac12\cdot3\cdot4^2\,\mathrm J+\dfrac12\cdot2\cdot1^2\,\mathrm J=24\,\mathrm J+1\,\mathrm J=25\,\mathrm J$, quella finale vale $\dfrac12\cdot5\cdot2^2\,\mathrm J=10\,\mathrm J$. Si perdono dunque $15\,\mathrm J$ di energia cinetica, mentre la quantità di moto vale $10\,\mathrm{kg\cdot m/s}$ prima e dopo.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-1,1,u₂;0,0,2,0,v" xmin=-2 xmax=5 ymin=-.7 ymax=2.1 titolo="Prima dell’aggancio i moti sono opposti. Sopra le velocità iniziali, sotto quella comune."}
:::

:::osservazione{titolo="Quanta energia cinetica può sparire in un aggancio"}
Siano $u_1$ e $u_2$ le velocità con segno prima dell’urto e $V$ la velocità del centro di massa, con $M=m_1+m_2$. Ogni velocità si scrive come $u_j=V+(u_j-V)$, cioè velocità del centro di massa più velocità rispetto al centro di massa. Sviluppando il quadrato del binomio,
$$
\frac12m_ju_j^2=\frac12m_jV^2+m_jV(u_j-V)+\frac12m_j(u_j-V)^2.
$$
Sommando per i due corpi si ottiene
$$
K_i=\frac{1}{2}(m_1+m_2)V^2+
    \frac{1}{2}m_1(u_1-V)^2+\frac{1}{2}m_2(u_2-V)^2.
$$
I termini misti si annullano, poiché la loro somma è $V\big[m_1(u_1-V)+m_2(u_2-V)\big]$ e $m_1(u_1-V)+m_2(u_2-V)=m_1u_1+m_2u_2-MV=0$ per la definizione di $V$. Se il sistema è isolato, $V$ si conserva e il primo termine resta uguale. Dopo l’aggancio entrambi i corpi hanno velocità $V$, perciò i due termini del moto relativo diventano zero. L’energia cinetica che rimane è quella del moto comune, $\dfrac12MV^2$. Per esempio, se entrambi i corpi avevano già la stessa velocità, i termini relativi erano nulli anche prima del contatto e non si perde energia.

Per due corpi le velocità rispetto al centro di massa sono
$$
u_1-V=u_1-\frac{m_1u_1+m_2u_2}{M}=\frac{m_2(u_1-u_2)}{M},\qquad
u_2-V=-\frac{m_1(u_1-u_2)}{M}.
$$
Sostituendo nei due termini relativi e raccogliendo $\dfrac{m_1m_2(m_1+m_2)}{2M^2}=\dfrac{m_1m_2}{2M}$, la perdita in un aggancio è
$$
\Delta K_{\mathrm{persa}}=\frac12\,\frac{m_1m_2}{M}(u_1-u_2)^2.
$$
La perdita cresce con il quadrato della velocità relativa, quindi raddoppiando la velocità relativa la perdita diventa quattro volte più grande. Nell’esempio con i due carrelli il prefattore vale $\dfrac12\cdot\dfrac{3\cdot2}{5}\,\mathrm{kg}=0{,}60\,\mathrm{kg}$ e la velocità di avvicinamento vale $\big(4-(-1)\big)\,\mathrm{m/s}=5\,\mathrm{m/s}$, perciò $\Delta K_{\mathrm{persa}}=0{,}60\cdot5^2\,\mathrm J=15\,\mathrm J$, come nel calcolo diretto.

Nella figura la curva è $\Delta K=0{,}6\,\Delta v^2$, con $\Delta v$ velocità relativa, e il punto $A$ corrisponde all’esempio.

::grafico{f="0.6*x^2" legenda=0 xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno;5,15,pieno,A" nomi="Δv (m/s),ΔK (J)" titolo="Nel caso esteso a diverse velocità relative, i 15 J dell’esempio sono il punto A."}
:::

## Urti elastici

:::teorema{#elastico titolo="Due conservazioni e velocità relativa"}
Un urto è **elastico** quando, in un sistema isolato, si conservano sia la quantità di moto totale sia l’energia cinetica totale. In una dimensione si indicano con $u_1,u_2$ le velocità iniziali e con $v_1,v_2$ quelle finali, tutte con segno. Le due conservazioni sono $m_1u_1+m_2u_2=m_1v_1+m_2v_2$ e $\dfrac12m_1u_1^2+\dfrac12m_2u_2^2=\dfrac12m_1v_1^2+\dfrac12m_2v_2^2$. Portando a sinistra i termini del primo corpo e moltiplicando la seconda per $2$, si ottiene
$$
m_1(u_1-v_1)=m_2(v_2-u_2),\qquad
m_1(u_1^2-v_1^2)=m_2(v_2^2-u_2^2).
$$
Nella seconda equazione si usa la differenza di quadrati $a^2-b^2=(a-b)(a+b)$, quindi $m_1(u_1-v_1)(u_1+v_1)=m_2(v_2-u_2)(v_2+u_2)$. In un urto effettivo, con scambio di quantità di moto, il primo corpo cambia velocità, quindi $u_1-v_1\neq0$ e si può dividere la seconda equazione per la prima. Risulta $u_1+v_1=v_2+u_2$, ovvero
$$
v_2-v_1=u_1-u_2.
$$
La velocità relativa cambia segno e mantiene il modulo, cioè i corpi si allontanano con la stessa rapidità con cui si avvicinavano. Questa equazione e la conservazione della quantità di moto formano un sistema che dà le due velocità finali anche quando entrambi i corpi sono in moto.

Se il secondo corpo è inizialmente fermo, $u_2=0$ e quindi $v_2=u_1+v_1$. Sostituendo nella conservazione della quantità di moto si ha $m_1u_1=m_1v_1+m_2(u_1+v_1)$, da cui si ricava
$$
v_1=\frac{m_1-m_2}{m_1+m_2}u_1,\qquad
v_2=\frac{2m_1}{m_1+m_2}u_1.
$$
- Con $m_1=m_2$ si ha $v_1=0$ e $v_2=u_1$, quindi le velocità si scambiano.
- Con $m_1<m_2$ il coefficiente di $v_1$ è negativo, perciò il primo corpo rimbalza.

Nei problemi in più dimensioni si conservano le componenti della quantità di moto e l’energia cinetica totale. Nel piano le componenti finali incognite sono quattro e le equazioni sono tre, quindi può servire un dato geometrico aggiuntivo, per esempio la direzione di uscita di uno dei corpi.
:::

:::esempio{titolo="Rimbalzo della massa minore"}
Con $m_1=1\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$, $u_1=4\,\mathrm{m/s}$ e $u_2=0$ le formule danno
$$
v_1=\frac{1-3}{1+3}\cdot4\,\mathrm{m/s}=-2\,\mathrm{m/s},\qquad
v_2=\frac{2\cdot1}{1+3}\cdot4\,\mathrm{m/s}=2\,\mathrm{m/s}.
$$
La quantità di moto iniziale è $1\cdot4\,\mathrm{kg\cdot m/s}=4\,\mathrm{kg\cdot m/s}$ e quella finale è $\big(1\cdot(-2)+3\cdot2\big)\,\mathrm{kg\cdot m/s}=4\,\mathrm{kg\cdot m/s}$. L’energia cinetica iniziale è $\dfrac12\cdot1\cdot4^2\,\mathrm J=8\,\mathrm J$ e quella finale è $\dfrac12\cdot1\cdot2^2\,\mathrm J+\dfrac12\cdot3\cdot2^2\,\mathrm J=2\,\mathrm J+6\,\mathrm J=8\,\mathrm J$. Entrambe le grandezze si conservano, quindi l’esito è quello di un urto elastico.
:::

:::esempio{titolo="Urto elastico visto dal centro di massa"}
Su una retta, una massa di $1\,\mathrm{kg}$ viaggia a $6\,\mathrm{m/s}$ e urta elasticamente una massa ferma di $2\,\mathrm{kg}$. La velocità del centro di massa è
$$
V=\frac{1\cdot6+2\cdot0}{1+2}\,\mathrm{m/s}=2\,\mathrm{m/s}.
$$
Nel riferimento del centro di massa si sottrae $V$ a ogni velocità, quindi le velocità iniziali sono $6-2=+4\,\mathrm{m/s}$ e $0-2=-2\,\mathrm{m/s}$. In un urto elastico unidimensionale con scambio non nullo, in questo riferimento ciascun corpo inverte la propria velocità e ne conserva il modulo. Si ottengono così $-4$ e $+2\,\mathrm{m/s}$. Sommando di nuovo $2\,\mathrm{m/s}$ si ritrovano in laboratorio $-2$ e $+4\,\mathrm{m/s}$. In un solo passaggio la velocità finale in laboratorio è $v=2V-u$, per esempio $2\cdot2-6=-2$.

Prima e dopo l’urto la quantità di moto vale $1\cdot6=1\cdot(-2)+2\cdot4=6\,\mathrm{kg\cdot m/s}$. L’energia cinetica vale $\dfrac12\cdot1\cdot6^2\,\mathrm J=18\,\mathrm J$ prima e $\big(\dfrac12\cdot1\cdot2^2+\dfrac12\cdot2\cdot4^2\big)\,\mathrm J=(2+16)\,\mathrm J=18\,\mathrm J$ dopo.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-2,1,u₂;0,0,-4,0,v₁;0,-.5,2,-.5,v₂" linee="0,-1 0,2" xmin=-5.2 xmax=5.2 ymin=-1.2 ymax=2.2 titolo="Sopra, le velocità di avvicinamento nel riferimento del centro di massa. Sotto, l’inversione dopo l’urto."}
:::

:::osservazione{titolo="Direzioni finali di due masse uguali nel piano"}
Il **prodotto scalare** di due vettori è $\vec a\cdot\vec b=ab\cos\theta$, dove $\theta$ (si legge «teta») è l’angolo fra i due vettori. Vale zero quando i vettori sono perpendicolari, perché $\cos90^\circ=0$, e il prodotto scalare di un vettore per sé stesso è il quadrato del modulo, $\vec a\cdot\vec a=a^2$.

Due dischetti di massa uguale $m$ collidono elasticamente su un piano con impulso esterno trascurabile. Uno è inizialmente fermo. Si chiamano $\vec u$ l’unica velocità iniziale e $\vec v_1,\vec v_2$ le due finali. La conservazione della quantità di moto, divisa per $m$, dà $\vec u=\vec v_1+\vec v_2$. La conservazione dell’energia cinetica, divisa per $\dfrac12m$, dà $u^2=v_1^2+v_2^2$. Il quadrato della prima uguaglianza è
$$
u^2=(\vec v_1+\vec v_2)\cdot(\vec v_1+\vec v_2)=v_1^2+v_2^2+2\vec v_1\cdot\vec v_2.
$$
Confrontandolo con la seconda uguaglianza rimane $2\vec v_1\cdot\vec v_2=0$. Se entrambi i dischetti si muovono dopo il contatto, i moduli $v_1$ e $v_2$ sono diversi da zero, quindi $\cos\theta=0$ e le due direzioni di uscita sono perpendicolari. Se uno si ferma, il suo vettore è nullo e il prodotto è nullo anche senza un angolo definito.
:::
