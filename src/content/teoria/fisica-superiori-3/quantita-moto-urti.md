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

::grafico{uguale=1 vettori="0,0,6,0,p_1;6,0,6,8,p_2;0,0,6,8,P" xmin=-2 xmax=9 ymin=-2 ymax=10 nomi="pₓ (kg·m/s),pᵧ (kg·m/s)" titolo="Il vettore nord si aggiunge alla punta del vettore est"}
:::

:::esempio{titolo="Impulso quando varia solo la direzione"}
Una biglia di $0{,}50\,\mathrm{kg}$ entra in una curva con velocità di $6\,\mathrm{m/s}$ verso est e ne esce con la stessa rapidità verso nord. Prendendo positivi est e nord, si ha
$$
\vec p_i=(3,0)\,\mathrm{kg\cdot m/s},\qquad
\vec p_f=(0,3)\,\mathrm{kg\cdot m/s}.
$$
La variazione è $(-3,3)\,\mathrm{kg\cdot m/s}$ e punta verso nord-ovest. Il modulo vale $3\sqrt 2\,\mathrm{kg\cdot m/s}$. La cinetica vale $9\,\mathrm J$ a entrambi gli estremi. Il confronto mostra perché, per ricavare la variazione di quantità di moto, occorre sottrarre le componenti dei vettori anziché confrontare soltanto i moduli.

::grafico{vettori="0,0,3,0,p_i;0,0,0,3,p_f;3,0,0,3,J" uguale=1 xmin=-1 xmax=4 ymin=-1 ymax=4 nomi="pₓ,pᵧ" titolo="L’impulso congiunge la punta della quantità di moto iniziale a quella della quantità di moto finale. Unità in kg·m/s."}
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

:::esempio{titolo="Separare l’impulso di contatto dall’impulso del peso"}
Sul piano verticale una palla di massa $0{,}20\,\mathrm{kg}$ arriva sul pavimento con $v_i=-4\,\mathrm{m/s}$ e riparte con $v_f=+3\,\mathrm{m/s}$. L'asse è positivo verso l'alto. Il contatto dura $0{,}020\,\mathrm s$, l'aria è trascurabile e $g=10\,\mathrm{m/s^2}$. Il cambiamento di quantità di moto vale $1{,}4\,\mathrm{N\cdot s}$. Per ricavare l'impulso del pavimento si sottrae dall'impulso totale il contributo del peso.
$$
J_{\mathrm{pav}}=\Delta p-(-mg\,\Delta t)
                 =1{,}4+0{,}04=1{,}44\,\mathrm{N\cdot s}.
$$
Il peso è sempre diretto verso il basso. Il pavimento deve quindi dare un impulso positivo leggermente superiore alla variazione misurata.
:::

:::esempio{titolo="Impulso da quattro campioni di un sensore"}
Un sensore registra la componente della risultante lungo un binario. Approssimiamo la forza fra due letture con il segmento che le unisce. La durata complessiva è $0{,}20\,\mathrm s$.

| $t$ (s) | $F_x$ (N) | Intervallo successivo |
| ---: | ---: | :--- |
| 0 | 0 | salita |
| 0,05 | 24 | discesa fino a zero |
| 0,15 | 0 | correzione negativa |
| 0,20 | −8 | fine della misura |

::grafico{linee="0,0 50,24 150,0 200,-8" area=".48*x;0;0;50|36-.24*x;0;50;150|0;24-.16*x;150;200" punti="50,24,pieno;150,0,pieno;200,-8,pieno" xmin=0 xmax=250 ymin=-12 ymax=28 nomi="t (ms),Fₓ (N)" titolo="Il grafico usa i millisecondi. Il tratto negativo inizia a 150 ms."}

Le prime due aree valgono $0{,}60$ e $1{,}20\,\mathrm{N\cdot s}$, mentre l'ultima contribuisce per $-0{,}20\,\mathrm{N\cdot s}$. Il totale vale $1{,}60\,\mathrm{N\cdot s}$. La forza media nel modello è $8\,\mathrm N$, inferiore alla lettura massima di $24\,\mathrm N$. Un picco fra due campioni potrebbe cambiare la stima. Per misurarlo servirebbero letture più ravvicinate.
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
Durante un urto di $0{,}010\,\mathrm s$ un carrello riceve da un altro un impulso di modulo $3\,\mathrm{N\cdot s}$. Se la resistenza esterna totale vale al più $2\,\mathrm N$, il modulo del suo impulso sul sistema è al più $0{,}020\,\mathrm{N\cdot s}$. L’errore nel porre uguali le quantità di moto totali è quindi inferiore all’un per cento se riferito allo scambio fra i carrelli. Se il totale è vicino a zero, la percentuale rispetto al totale può essere molto più grande. Se si vuole la stessa precisione anche con un urto di durata diversa ma con scambio interno di $3\,\mathrm{N\cdot s}$, occorre che la resistenza accumuli al massimo $0{,}03\,\mathrm{N\cdot s}$. Con il limite di $2\,\mathrm N$ ciò permette di arrivare a $15\,\mathrm{ms}$.

::grafico{linee="0,0 25,50;0,30 25,30" punti="10,20,pieno,A;15,30,pieno,B" xmin=0 xmax=30 ymin=0 ymax=55 nomi="t (ms),J (mN·s)" titolo="La retta crescente è il limite esterno. La soglia di 30 mN·s, pari a 0,03 N·s, è raggiunta a 15 ms."}
:::

:::esempio{titolo="Una parete cambia lato del contorno"}
Un carrello di $2\,\mathrm{kg}$ arriva a $3\,\mathrm{m/s}$ verso una parete e rimbalza a $2\,\mathrm{m/s}$ in verso opposto. Se il sistema comprende solo il carrello, il contatto con la parete è esterno. Scegliendo positivo verso la parete si trova $\Delta p=2(-2-3)\,\mathrm{kg\cdot m/s}=-10\,\mathrm{N\cdot s}$. Se il sistema include anche la parete e la Terra a cui è fissata, lo stesso impulso di contatto diventa interno. L'insieme parete-Terra riceve in direzione opposta $+10\,\mathrm{N\cdot s}$. A causa della sua grande massa l'aumento di velocità è minuscolo, anche se la variazione di quantità di moto compensa quella del carrello.

::grafico{assi=0 vettori="0,1,-3,1,J₁;0,0,3,0,J₂" linee="0,-.5 0,1.5" xmin=-5 xmax=5 ymin=-.8 ymax=1.8 titolo="Interazione carrello-parete. I due impulsi di contatto hanno lo stesso modulo e versi opposti."}
:::

## Centro di massa

:::definizione{#centro-massa titolo="Coordinate e moto medio pesato"}
Per un sistema di massa totale $M=\sum_jm_j$, si definisce **centro di massa** la posizione $\vec r_{CM}=\dfrac{\sum_jm_j\vec r_j}{M}$. Le masse sono i pesi statistici della media. In una dimensione la coordinata è compresa fra la coordinata minima e quella massima. Con due corpi si trova più vicino a quello più massiccio.

Calcolando la variazione della posizione del centro di massa fra due istanti si trova $\vec v_{CM}=\dfrac{\sum_jm_j\vec v_j}{M}=\dfrac{\vec P}{M}$. Perciò, se la massa complessiva è costante e l’impulso esterno è nullo, si conserva la velocità del centro di massa. Anche quando le singole velocità cambiano in seguito a un urto, il centro di massa continua con la stessa velocità. Nel suo riferimento la quantità di moto totale è zero, fatto utile per descrivere gli urti elastici.
:::

:::esempio{titolo="Una media che tiene conto delle masse"}
Una massa di $2\,\mathrm{kg}$ si trova a $x=0$, e una massa di $6\,\mathrm{kg}$ a $x=4\,\mathrm m$. La coordinata del centro di massa è $(2\cdot0+6\cdot4)/8\,\mathrm m=3\,\mathrm m$, un metro dalla massa maggiore. Se si sposta l’origine tre metri a destra, le due coordinate diventano $-3\,\mathrm m$ e $1\,\mathrm m$. Il centro di massa ha ora coordinata zero. Il punto fisico è lo stesso: cambiano soltanto le coordinate.

::grafico{assi=0 linee="-0.4,0 4.58,0;0,-.14 0,.14;3,-.14 3,.14;4,-.14 4,.14" vettori="4.58,0,4.99,0" punti="0,0,pieno;3,0,pieno;4,0,pieno" etichette="-.08,.42,m₁;2.86,.42,CM;3.91,.42,m₂;-.03,-.38,0;2.95,-.38,3;3.95,-.38,4;4.5,.42,x (m)" xmin=-.65 xmax=5.25 ymin=-.65 ymax=.77 titolo="Il centro di massa è più vicino alla massa maggiore"}
:::

:::esempio{titolo="Spostamento interno su una pedana libera"}
Una persona di $60\,\mathrm{kg}$ e una pedana di $40\,\mathrm{kg}$ sono inizialmente ferme. Il pavimento è liscio e la persona cammina per $2\,\mathrm m$ rispetto alla pedana. Sia $d$ lo spostamento con segno della pedana rispetto al pavimento. La persona rispetto al pavimento percorre $d+2\,\mathrm m$, intendendo $d$ in metri. In assenza di forze orizzontali esterne, la posizione del centro di massa rimane costante.
$$
60(d+2)+40d=0,\qquad d=-1{,}2\,\mathrm m.
$$
La pedana arretra e lo spostamento della persona rispetto al pavimento vale $+0{,}8\,\mathrm m$. I due spostamenti, pesati per le masse, si compensano esattamente.

::grafico{assi=0 linee="-1.55,-.33 1.34,-.33;-1.2,-.42 -1.2,-.24;0,-.42 0,-.24;.8,-.42 .8,-.24;-1.2,0 0,0;0,.9 .8,.9" vettori="0,.25,-1.2,.25,d;0,1.15,.8,1.15,Δx;1.34,-.33,1.6,-.33" etichette="-1.35,-.65,−1,2;-.03,-.65,0;.71,-.65,0,8;1.16,-.66,x (m)" xmin=-1.75 xmax=1.85 ymin=-.92 ymax=1.67 titolo="Gli spostamenti rispetto al pavimento sono −1,2 m per la pedana e +0,8 m per la persona."}
:::

:::osservazione{titolo="Usare il centro di massa di un corpo esteso"}
Per sommare una sbarra uniforme e un carico puntiforme, raggruppa tutta la massa della sbarra nella sua coordinata media, cioè il punto medio geometrico. Questa sostituzione mantiene il numeratore della media pesata. Se la sbarra è lunga $4\,\mathrm m$ e va da zero a quattro metri, inserisci la sua massa a $x=2\,\mathrm m$. Per una sbarra più densa a un’estremità si dovrebbe prima conoscere o misurare la posizione del suo centro di massa.
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

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-1,1,u₂;0,0,2,0,v" xmin=-2 xmax=5 ymin=-.7 ymax=2.1 titolo="Prima dell’aggancio i moti sono opposti. Sopra le velocità iniziali, sotto quella comune."}
:::

:::osservazione{titolo="Quanta energia cinetica può sparire in un aggancio"}
Siano $u_1$ e $u_2$ le velocità con segno prima dell'urto e $V$ la velocità del centro di massa. Riscrivendo ogni velocità come $u_j=V+(u_j-V)$ e sviluppando i quadrati, si ottiene
$$
K_i=\frac{1}{2}(m_1+m_2)V^2+
    \frac{1}{2}m_1(u_1-V)^2+\frac{1}{2}m_2(u_2-V)^2.
$$
I termini misti si annullano, poiché $m_1(u_1-V)+m_2(u_2-V)=0$. Se il sistema è isolato, $V$ si conserva. I due termini quadratici relativi scompaiono quando le masse si agganciano. La quota di energia cinetica che sopravvive è quella del moto comune. Per esempio, se entrambi i corpi avevano già la stessa velocità, i termini relativi erano nulli anche prima del contatto.

Per due corpi, usando $M=m_1+m_2$, le velocità relative al centro di massa sono $m_2(u_1-u_2)/M$ e $-m_1(u_1-u_2)/M$. La perdita in un aggancio è quindi $\Delta K_{\mathrm{persa}}=\tfrac12\tfrac{m_1m_2}{M}(u_1-u_2)^2$. Nell'esempio con i due carrelli il prefattore vale $0{,}60\,\mathrm{kg}$ e la velocità di avvicinamento vale $5\,\mathrm{m/s}$.

::grafico{f="0.6*x^2" legenda=0 xmin=0 xmax=6 ymin=0 ymax=24 punti="0,0,pieno;5,15,pieno,A" nomi="Δv (m/s),ΔK (J)" titolo="Nel caso esteso a diverse velocità relative, i 15 J dell’esempio sono il punto A."}
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

:::esempio{titolo="Urto elastico visto dal centro di massa"}
Su una retta, una massa di $1\,\mathrm{kg}$ viaggia a $6\,\mathrm{m/s}$ e urta elasticamente una massa ferma di $2\,\mathrm{kg}$. La velocità del centro di massa è $2\,\mathrm{m/s}$. Nel suo riferimento le velocità iniziali sono $+4$ e $-2\,\mathrm{m/s}$. Durante un urto elastico unidimensionale con scambio non nullo, i due corpi invertono le proprie velocità in questo riferimento. Si ottengono così $-4$ e $+2\,\mathrm{m/s}$. Sommando di nuovo $2\,\mathrm{m/s}$ si ritrovano in laboratorio $-2$ e $+4\,\mathrm{m/s}$. Prima e dopo l'urto la quantità di moto vale $6\,\mathrm{kg\cdot m/s}$ e la cinetica vale $18\,\mathrm J$.

::grafico{assi=0 vettori="0,1.5,4,1.5,u₁;0,1,-2,1,u₂;0,0,-4,0,v₁;0,-.5,2,-.5,v₂" linee="0,-1 0,2" xmin=-5.2 xmax=5.2 ymin=-1.2 ymax=2.2 titolo="Sopra, le velocità di avvicinamento nel riferimento del centro di massa. Sotto, l’inversione dopo l’urto."}
:::

:::osservazione{titolo="Direzioni finali di due masse uguali nel piano"}
Due dischetti di massa uguale collidono elasticamente su un piano con impulso esterno trascurabile. Uno è inizialmente fermo. Chiamando $\vec u$ l’unica velocità iniziale e $\vec v_1,\vec v_2$ le due finali, i bilanci si riducono a $\vec u=\vec v_1+\vec v_2$ e $u^2=v_1^2+v_2^2$. Sviluppa il quadrato della prima uguaglianza e confrontalo con la seconda. Rimane $2\vec v_1\cdot\vec v_2=0$. Se entrambi si muovono dopo il contatto, le due direzioni di uscita sono perpendicolari. Se uno si ferma, il prodotto è nullo anche senza un angolo definito.
:::
