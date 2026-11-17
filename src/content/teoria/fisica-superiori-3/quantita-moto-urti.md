---
titolo: Quantità di moto e urti
sommario: Impulso, centro di massa e conservazioni negli urti elastici e anelastici.
---

## Quantità di moto

:::definizione{#quantita-moto titolo="Vettore quantità di moto"}
In un riferimento inerziale, un corpo di massa $m$ e velocità $\vec v$ ha **quantità di moto** $\vec p=m\vec v$. La massa è positiva, quindi $\vec p$ ha lo stesso verso di $\vec v$. L’unità è $\mathrm{kg\cdot m/s}$. In una dimensione si sceglie un asse positivo e si usa la componente con segno $p_x=mv_x$. Con uno stesso asse per tutti i corpi, le componenti opposte si sottraggono quando si calcola il totale.

La quantità di moto di un sistema è la somma vettoriale $\vec P=\sum_jm_j\vec v_j$. Due corpi possono avere $\vec P=0$ e muoversi entrambi; basta che le loro quantità di moto siano opposte. In quel caso le energie cinetiche sono entrambe positive e la loro somma resta positiva. Le due grandezze danno dunque informazioni diverse: la quantità di moto descrive anche il verso dei moti, l’energia cinetica è una somma di contributi scalari non negativi.

La quantità di moto dipende dal riferimento perché dipende dalla velocità misurata. Per confrontare i dati di tutti i corpi si usa un unico riferimento, di solito solidale al laboratorio. Anche quando due osservatori inerziali attribuiscono valori diversi a $\vec P$, per un sistema chiuso entrambi osservano la stessa variazione di $\vec P$ fra i due istanti.
:::

:::esempio{titolo="Sfere su assi perpendicolari"}
Una sfera di $2\,\mathrm{kg}$ avanza verso est a $3\,\mathrm{m/s}$ e una di $1\,\mathrm{kg}$ avanza verso nord a $8\,\mathrm{m/s}$. Le componenti della quantità di moto totale sono $(6,8)\,\mathrm{kg\cdot m/s}$. Essendo gli assi perpendicolari, il modulo del totale è $\sqrt{6^2+8^2}\,\mathrm{kg\cdot m/s}=10\,\mathrm{kg\cdot m/s}$. La somma dei moduli sarebbe $14\,\mathrm{kg\cdot m/s}$, valore pertinente a due contributi paralleli e concordi.

::grafico{uguale=1 vettori="0,0,6,0,p_1;6,0,6,8,p_2;0,0,6,8,P" xmin=-2 xmax=9 ymin=-2 ymax=10 nomi="p_x,p_y" titolo="Il vettore nord si aggiunge alla punta del vettore est"}
:::

## Impulso

:::teorema{#impulso titolo="Impulso e variazione di quantità di moto"}
Per un corpo di massa costante, l’**impulso** della risultante fra due istanti uguaglia la variazione di quantità di moto. Se la forza è costante, per la legge di Newton si ha
$$
\vec J=\vec F_{\mathrm{tot}}\Delta t
      =m\vec a\,\Delta t=m(\vec v_f-\vec v_i).
$$
Per una forza che varia, si sommano contributi su intervalli brevi. In una dimensione il risultato è l’area con segno sotto il grafico $F_x(t)$. Le aree sopra e sotto l’asse dei tempi contribuiscono con segni opposti. L’unità è $\mathrm{N\cdot s}$ e coincide con $\mathrm{kg\cdot m/s}$. In un impulso misurato tramite $\Delta\vec p$, è inclusa la risultante di tutte le forze, quindi serviranno dati ulteriori per isolare il contributo di una forza particolare.

La forza media vettoriale è $\vec F_m=\dfrac{\Delta\vec p}{\Delta t}$. A parità di variazione di quantità di moto, allungare il tempo riduce il modulo della risultante media. Questo spiega l’uso di ammortizzatori e superfici deformabili. Il valore medio dipende dagli estremi e dalla durata, mentre il picco dipende dall’andamento istantaneo della forza.
:::

:::esempio{titolo="Rimbalzo e arresto"}
Si prenda positivo il verso di arrivo. Una palla da $0{,}20\,\mathrm{kg}$ arriva a $5\,\mathrm{m/s}$ e rimbalza a $3\,\mathrm{m/s}$ in verso opposto. La componente finale è $v_f=-3\,\mathrm{m/s}$. Perciò $J_x=0{,}20\cdot(-3-5)\,\mathrm{N\cdot s}=-1{,}6\,\mathrm{N\cdot s}$. Se la palla si fosse limitata a fermarsi, la componente finale sarebbe stata zero e l’impulso $-1\,\mathrm{N\cdot s}$. Il rimbalzo richiede un cambiamento più grande, perché porta la velocità oltre lo zero nella direzione negativa.

::grafico{assi=0 vettori="0,1,5,1,v_i;0,0,-3,0,v_f" xmin=-4 xmax=6 ymin=-.8 ymax=2 titolo="Il verso positivo è verso destra. Le lunghezze rappresentano i moduli delle due velocità"}
:::

## Sistemi isolati

:::teorema{#conservazione-moto titolo="Bilancio della quantità di moto totale"}
Per un sistema chiuso si scelgono i corpi da includere e si distinguono forze interne ed esterne. Le forze interne fra i corpi sono a coppie uguali e opposte. I loro impulsi totali si cancellano nella somma delle equazioni individuali, perciò
$$
\vec P_f-\vec P_i=\vec J_{\mathrm{est}} .
$$
Se l’impulso esterno complessivo è nullo, si conserva la quantità di moto totale. Si può applicare lo stesso principio a una sola componente. In un laboratorio con binario orizzontale l’impulso del peso e quello della normale sono generalmente verticali. Lungo il binario, trascurando l’attrito, la componente si conserva anche se sui carrelli agiscono forze verticali.

Negli urti molto brevi si può spesso trascurare l’impulso delle forze esterne rispetto allo scambio interno. Il controllo riguarda il prodotto forza-tempo, non il solo modulo della forza. Durante il contatto le quantità di moto dei singoli corpi cambiano. La conservazione vale per la loro somma, una volta inclusi tutti i corpi che interagiscono e fissate le componenti per cui l’impulso esterno è trascurabile.
:::

:::esempio{titolo="Controllo dell’ipotesi di isolamento"}
Durante un urto di $0{,}010\,\mathrm s$ un carrello riceve da un altro un impulso di modulo $3\,\mathrm{N\cdot s}$. Se la resistenza esterna totale vale al più $2\,\mathrm N$, il modulo del suo impulso sul sistema è al più $0{,}020\,\mathrm{N\cdot s}$. Il limite è meno dell’un per cento dell’impulso interno. Per un confronto con precisione dell’ordine del per cento è ragionevole trattare il momento totale come conservato. Su un intervallo molto più lungo il limite cresce e va rivalutato.
:::

## Centro di massa

:::definizione{#centro-massa titolo="Coordinate e moto medio pesato"}
Per un sistema di massa totale $M=\sum_jm_j$, si definisce **centro di massa** la posizione $\vec r_{CM}=\dfrac{\sum_jm_j\vec r_j}{M}$. Le masse sono i pesi statistici della media. In una dimensione la coordinata è compresa fra la coordinata minima e quella massima. Con due corpi si trova più vicino a quello più massiccio.

Calcolando la variazione della posizione del centro di massa fra due istanti si trova $\vec v_{CM}=\dfrac{\sum_jm_j\vec v_j}{M}=\dfrac{\vec P}{M}$. Perciò, se la massa complessiva è costante e l’impulso esterno è nullo, si conserva la velocità del centro di massa. Anche quando le singole velocità cambiano in seguito a un urto, il centro di massa continua con la stessa velocità. Nel suo riferimento la quantità di moto totale è zero, fatto utile per descrivere gli urti elastici.
:::

:::esempio{titolo="Una media che tiene conto delle masse"}
Una massa di $2\,\mathrm{kg}$ si trova a $x=0$, e una massa di $6\,\mathrm{kg}$ a $x=4\,\mathrm m$. La coordinata del centro di massa è $(2\cdot0+6\cdot4)/8\,\mathrm m=3\,\mathrm m$, un metro dalla massa maggiore. Se si sposta l’origine tre metri a destra, le due coordinate diventano $-3\,\mathrm m$ e $1\,\mathrm m$. Il centro di massa ha ora coordinata zero. Il punto fisico è lo stesso: cambiano soltanto le coordinate.

::grafico{linee="0,0 4,0" punti="0,0,pieno,m_1;3,0,pieno,CM;4,0,pieno,m_2" xmin=-1 xmax=5 ymin=-1 ymax=1 nomi="x (m)," titolo="Il centro di massa è più vicino alla massa maggiore"}
:::

## Urto completamente anelastico e rinculo

:::teorema{#anelastico titolo="Corpi agganciati e separazione"}
Se due corpi restano uniti in un urto, condividono la velocità finale $\vec v_f$. Il loro urto è **completamente anelastico**. Trascurando l’impulso esterno durante l’urto,
$$
\vec v_f=\frac{m_1\vec v_{1i}+m_2\vec v_{2i}}{m_1+m_2}.
$$
La velocità finale coincide con la velocità iniziale del centro di massa. L’energia cinetica iniziale include anche il moto relativo dei due corpi; la parte del moto relativo scompare quando si agganciano. La differenza si ritrova in deformazioni, riscaldamento e altro trasferimento di energia. Conservare l’energia cinetica, oltre alla quantità di moto, sarebbe lecito soltanto se la velocità relativa iniziale fosse nulla e dunque non vi fosse urto nel modello.

Nella separazione di due corpi inizialmente fermi, con impulso esterno nullo, il totale deve rimanere zero. Si ha $m_1\vec v_1=-m_2\vec v_2$. Il corpo più leggero acquista la velocità di modulo maggiore. La cinetica finale può essere positiva perché si converte energia interna, per esempio quando fra i corpi si libera una molla prima compressa.
:::

:::esempio{titolo="Aggancio con moti opposti"}
Un carrello da $3\,\mathrm{kg}$ si muove verso destra a $4\,\mathrm{m/s}$ e uno da $2\,\mathrm{kg}$ verso sinistra a $1\,\mathrm{m/s}$. Prima dell’urto il totale è $3\cdot4-2\cdot1=10$ in $\mathrm{kg\cdot m/s}$. Dopo l’aggancio, cinque chilogrammi con quella quantità di moto si muovono verso destra a $2\,\mathrm{m/s}$. L’energia iniziale vale $24\,\mathrm J+1\,\mathrm J=25\,\mathrm J$, quella finale vale $10\,\mathrm J$. Si perdono dunque $15\,\mathrm J$ di energia cinetica, mentre il vettore quantità di moto rispetta il bilancio.
:::

## Urti elastici

:::teorema{#elastico titolo="Due conservazioni e velocità relativa"}
In un urto elastico isolato si conservano sia la quantità di moto totale sia l’energia cinetica totale. In una dimensione, indicando con $u_1,u_2$ le velocità iniziali e con $v_1,v_2$ quelle finali,
$$
m_1(u_1-v_1)=m_2(v_2-u_2),\qquad
m_1(u_1^2-v_1^2)=m_2(v_2^2-u_2^2).
$$
Per un urto effettivo con scambio di quantità di moto si divide la seconda equazione per la prima. Fattorizzando le differenze di quadrati risulta $u_1+v_1=v_2+u_2$, ovvero $v_2-v_1=u_1-u_2$. La velocità relativa cambia segno. Per il caso con il secondo corpo inizialmente fermo, la soluzione è
$$
v_1=\frac{m_1-m_2}{m_1+m_2}u_1,\qquad
v_2=\frac{2m_1}{m_1+m_2}u_1.
$$
Con $m_1=m_2$ le velocità si scambiano. Con $m_1<m_2$ il primo corpo rimbalza, perché il suo coefficiente è negativo. Nei problemi in più dimensioni si conservano le componenti della quantità di moto e il totale energetico, ma può servire un dato geometrico aggiuntivo sulla direzione di uscita.
:::

:::esempio{titolo="Rimbalzo della massa minore"}
Con $m_1=1\,\mathrm{kg}$, $m_2=3\,\mathrm{kg}$, $u_1=4\,\mathrm{m/s}$ e $u_2=0$, si ottengono $v_1=-2\,\mathrm{m/s}$ e $v_2=2\,\mathrm{m/s}$. La quantità di moto finale è $(-2+6)\,\mathrm{kg\cdot m/s}=4\,\mathrm{kg\cdot m/s}$. L’energia cinetica finale è $2\,\mathrm J+6\,\mathrm J=8\,\mathrm J$, uguale a quella iniziale. I due controlli verificano insieme l’esito elastico.
:::
