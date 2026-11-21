---
titolo: Moto rettilineo uniformemente accelerato
sommario: Accelerazione, grafici, legge oraria, arresto di un veicolo e moto verticale sotto l'azione della gravità.
---

## L'accelerazione

:::definizione{#accelerazione titolo="La variazione della velocità"}
In tutto il capitolo il corpo si muove lungo una retta, sulla quale è fissato un **asse**: un'origine e un verso scelto come positivo. La **velocità con segno** $v$ è positiva se il corpo si muove nel verso positivo e negativa se si muove nel verso opposto. Il valore senza segno è il **modulo** della velocità, detto anche **rapidità**. Per esempio, la velocità $-8\,\mathrm{m/s}$ ha modulo $8\,\mathrm{m/s}$.

L'**accelerazione media** lungo l'asse è la variazione della velocità divisa per il tempo in cui avviene. Si indicano con $v_i$ la velocità all'inizio dell'intervallo e con $v_f$ quella alla fine (i pedici $i$ e $f$ stanno per «iniziale» e «finale»). La lettera greca $\Delta$, che si legge «delta», indica la differenza fra un valore finale e uno iniziale. Quindi $\Delta t=t_f-t_i$ è la durata dell'intervallo, che è sempre positiva.
$$
a_m=\frac{v_f-v_i}{\Delta t}.
$$
L'unità di misura nel SI (Sistema Internazionale, quello del metro e del secondo) è il metro al secondo diviso per il secondo, $\dfrac{\mathrm{m/s}}{\mathrm s}=\mathrm{m/s^2}$, che si legge «metri al secondo quadrato». Per esempio, un valore di $2\,\mathrm{m/s^2}$ significa che la velocità aumenta di $2\,\mathrm{m/s}$ ogni secondo, se l'accelerazione resta costante.

Il segno dell'accelerazione è il segno della variazione $v_f-v_i$. Un ciclista può muoversi nel verso negativo mentre la sua velocità passa da $-8$ a $-2\,\mathrm{m/s}$. In questo caso la variazione è positiva, quindi l'accelerazione media è positiva. Il modulo della velocità scende da $8$ a $2\,\mathrm{m/s}$, perciò il ciclista rallenta.
:::

:::esempio{titolo="Il segno dell'accelerazione si legge dalla pendenza"}
Nel grafico velocità-tempo il tempo sta sull'asse orizzontale e la velocità su quello verticale. La **pendenza** di una retta è il rapporto fra la variazione in verticale e la variazione in orizzontale fra due suoi punti. In questo grafico la pendenza è quindi $\dfrac{v_f-v_i}{\Delta t}$, cioè l'accelerazione media.

La velocità passa da $-8\,\mathrm{m/s}$ a $-2\,\mathrm{m/s}$ in $3\,\mathrm{s}$. La variazione è
$$
-2-(-8)=-2+8=6\,\mathrm{m/s},
$$
dunque $a_m=\dfrac{6}{3}=2\,\mathrm{m/s^2}$. Se l'accelerazione è costante, la velocità sale con regolarità da $-8$ a $-2\,\mathrm{m/s}$ e resta negativa in tutto il tratto. Il corpo procede quindi nel verso negativo rallentando. Nella figura la retta da A a B sale, perché la pendenza è positiva, e resta sotto l'asse del tempo, perché la velocità è negativa.

::grafico{f="-8+2*x" xmin=0 xmax=3 ymin=-9 ymax=2 punti="0,-8,pieno,A;3,-2,pieno,B" nomi="t (s),v (m/s)" titolo="Pendenza positiva e velocità negativa per tutto il tratto."}
:::

:::attenzione
L'accelerazione media dipende soltanto dalle due velocità agli estremi dell'intervallo. È uguale all'accelerazione in ogni istante solo se l'accelerazione è costante. Per esempio, un'automobile parte da ferma, si muove e alla fine si ferma di nuovo. Allora $v_i=0$ e $v_f=0$, quindi l'accelerazione media sull'intero viaggio è nulla, anche se durante il viaggio l'automobile ha accelerato e frenato.
:::

:::esempio{#letture-irregolari titolo="Intervalli di misura di durata diversa"}
Un sensore registra queste coppie di tempo e velocità. I tempi sono misurati a partire dall'accensione del sensore, che avviene prima della prima lettura; per questo la prima lettura ha tempo $2\,\mathrm s$.

| Tempo (s) | Velocità (m/s) |
| ---: | ---: |
| 2 | −2 |
| 3 | 0 |
| 5 | 4 |
| 8 | 10 |

Per ogni intervallo fra due letture si divide l'aumento di velocità per la durata:

- da $2$ a $3\,\mathrm s$: $\dfrac{0-(-2)}{3-2}=\dfrac{2}{1}=2\,\mathrm{m/s^2}$;
- da $3$ a $5\,\mathrm s$: $\dfrac{4-0}{5-3}=\dfrac{4}{2}=2\,\mathrm{m/s^2}$;
- da $5$ a $8\,\mathrm s$: $\dfrac{10-4}{8-5}=\dfrac{6}{3}=2\,\mathrm{m/s^2}$.

I tre rapporti sono uguali, quindi i punti stanno su una retta di pendenza $2\,\mathrm{m/s^2}$. I dati sono perciò **compatibili**, cioè in accordo, con un **modello** a pendenza costante. Un modello è la descrizione semplificata del moto usata per fare i conti, qui «accelerazione sempre uguale». Fra due letture il sensore non registra dati, e in quegli intervalli la velocità potrebbe avere avuto variazioni brevi che le quattro letture non mostrano.
:::

:::osservazione{#stessi-estremi titolo="Due profili con la stessa accelerazione media"}
Due moti partono da $4\,\mathrm{m/s}$ e arrivano a $8\,\mathrm{m/s}$ in $4\,\mathrm s$.

- Nel primo la velocità sale di $1\,\mathrm{m/s}$ ogni secondo.
- Nel secondo la velocità rimane $4\,\mathrm{m/s}$ per $2\,\mathrm s$, poi sale di $2\,\mathrm{m/s}$ ogni secondo per altri $2\,\mathrm s$.

La variazione totale è $8-4=4\,\mathrm{m/s}$ e la durata totale è $4\,\mathrm s$ in entrambi i moti, quindi l'accelerazione media vale $\dfrac44=1\,\mathrm{m/s^2}$ in tutti e due. Alla metà dell'intervallo, a $t=2\,\mathrm s$, il primo corpo va però a $4+1\cdot2=6\,\mathrm{m/s}$ e il secondo ancora a $4\,\mathrm{m/s}$. Nel grafico il primo moto è una sola retta; il secondo è un tratto orizzontale seguito da un tratto più ripido.

::grafico{f="4+x+0*sqrt(4-x);4+max(0,2*x-4)+0*sqrt(4-x)" xmin=0 xmax=4.3 ymin=0 ymax=9 punti="0,4,pieno;2,4,pieno;2,6,pieno;4,8,pieno" nomi="t (s),v (m/s)" legenda="\text{Primo moto};\text{Secondo moto}" titolo="Gli estremi coincidono. Le pendenze nei tratti interni sono diverse."}
:::

:::esempio{#conversione-accelerazione titolo="Velocità in chilometri orari e tempo in secondi"}
Una bicicletta passa da $18$ a $36\,\mathrm{km/h}$ in $4\,\mathrm s$. Poiché $1\,\mathrm{km}=1000\,\mathrm m$ e $1\,\mathrm h=3600\,\mathrm s$, una velocità in chilometri orari diventa in metri al secondo dividendo per $3{,}6$:
$$
18\,\mathrm{km/h}=\frac{18\cdot1000\,\mathrm m}{3600\,\mathrm s}=\frac{18}{3{,}6}\,\mathrm{m/s}=5\,\mathrm{m/s},\qquad 36\,\mathrm{km/h}=\frac{36}{3{,}6}\,\mathrm{m/s}=10\,\mathrm{m/s}.
$$
L'aumento è quindi $10-5=5\,\mathrm{m/s}$ e l'accelerazione media vale $\dfrac54=1{,}25\,\mathrm{m/s^2}$. Si ottiene lo stesso risultato convertendo soltanto la differenza $36-18=18\,\mathrm{km/h}$, che diventa $5\,\mathrm{m/s}$. La conversione divide entrambe le velocità per lo stesso numero, perciò la sottrazione può precederla.
:::

:::osservazione{#tolleranza-pendenza titolo="Verificare la compatibilità di una terza lettura"}
Le velocità registrate a $t=0$ e a $t=2\,\mathrm s$ valgono $4$ e $8\,\mathrm{m/s}$. Se queste due letture sono esatte, fissano la pendenza $\dfrac{8-4}{2}=2\,\mathrm{m/s^2}$. Prolungando lo stesso modello fino a $t=5\,\mathrm s$ si prevede $4+2\cdot5=14\,\mathrm{m/s}$.

La terza lettura risulta $13{,}5\,\mathrm{m/s}$ con **incertezza assoluta** $0{,}6\,\mathrm{m/s}$. Questo significa che il valore vero sta fra $13{,}5-0{,}6=12{,}9$ e $13{,}5+0{,}6=14{,}1\,\mathrm{m/s}$. L'intervallo contiene la previsione $14\,\mathrm{m/s}$, quindi la misura è compatibile con il modello. Con incertezza di $0{,}2\,\mathrm{m/s}$ l'intervallo andrebbe da $13{,}3$ a $13{,}7\,\mathrm{m/s}$. La previsione resterebbe fuori e la misura sarebbe incompatibile con il modello. In entrambi i casi la differenza fra misura e previsione è $0{,}5\,\mathrm{m/s}$; la decisione dipende dall'ampiezza dell'intervallo di misura.
:::

## La legge della velocità

:::teorema{#velocita titolo="Velocità con accelerazione costante"}
L'accelerazione è **costante** quando la velocità cambia della stessa quantità in ogni secondo. In questo caso l'accelerazione $a$ coincide con l'accelerazione media in ogni intervallo. Si indicano con $v_0$ («v zero») la velocità all'istante $t=0$ e con $v(t)$ la velocità all'istante $t$. Nell'intervallo da $0$ a $t$ la definizione dà
$$
a=\frac{v(t)-v_0}{t}.
$$
Moltiplicando i due membri per $t$ si ottiene $at=v(t)-v_0$. Aggiungendo $v_0$ ai due membri si ricava
$$
v(t)=v_0+at.
$$
Il grafico velocità-tempo è quindi una retta. La pendenza è $a$ e il valore a $t=0$, dove la retta incontra l'asse verticale, è $v_0$. Con $a=0$ la retta è orizzontale, la velocità resta $v_0$ e si ritrova il moto uniforme. Quando $v$ e $a$ hanno lo stesso segno, il modulo della velocità cresce. Quando hanno segno opposto, il modulo diminuisce finché il corpo raggiunge eventualmente $v=0$.
:::

:::esempio{titolo="Una velocità che cambia segno"}
Per un carrello con $v_0=6\,\mathrm{m/s}$ e $a=-2\,\mathrm{m/s^2}$ si ha $v=6-2t$ in unità SI, cioè con $t$ in secondi e $v$ in metri al secondo. La velocità si annulla quando $6-2t=0$, cioè $2t=6$ e $t=3\,\mathrm s$. Fino a quell'istante velocità e accelerazione hanno segno opposto, quindi il carrello rallenta. Se l'accelerazione resta attiva dopo quell'istante, il carrello procede nel verso negativo. A $t=5\,\mathrm{s}$ la velocità è $6-2\cdot5=-4\,\mathrm{m/s}$. In questo secondo tratto il modulo aumenta perché velocità e accelerazione sono entrambe negative. Nella figura il punto B, dove la retta attraversa l'asse del tempo, è l'**inversione**, cioè l'istante in cui il carrello cambia verso.

::grafico{f="6-2*x" xmin=0 xmax=5 ymin=-5 ymax=7 punti="0,6,pieno,A;3,0,pieno,B;5,-4,pieno,C" nomi="t (s),v (m/s)" titolo="B è l'inversione. Prima di B la rapidità diminuisce; dopo B aumenta."}
:::

:::esempio{#origine-tempi titolo="La durata si calcola dall'istante della prima lettura"}
Un cronometro è già in funzione quando, a $t_i=2\,\mathrm s$, si misura $v_i=-6\,\mathrm{m/s}$. Da quel momento l'accelerazione resta $3\,\mathrm{m/s^2}$. Il tempo trascorso dalla lettura è $t-2$, quindi in unità SI la legge è
$$
v=-6+3(t-2).
$$
All'istante $t=5\,\mathrm s$ sono trascorsi $5-2=3\,\mathrm s$ dalla lettura, e la velocità vale $-6+3\cdot3=3\,\mathrm{m/s}$. La velocità è nulla quando $3(t-2)=6$, cioè $t-2=2$. Questo avviene $2\,\mathrm s$ dopo la lettura, quando il cronometro indica $4\,\mathrm s$.

::grafico{f="-6+3*(x-2)" xmin=2 xmax=5.2 ymin=-7 ymax=4 punti="2,-6,pieno,I;4,0,pieno;5,3,pieno,F" nomi="t (s),v (m/s)" legenda="v=-6+3(t-2)" titolo="L'intervallo tra I e F dura 3 s. Il cronometro indica 5 s in F."}

La legge $v=-6+3t$ attribuirebbe la velocità di $-6\,\mathrm{m/s}$ all'istante zero. Sostituendo $t=2\,\mathrm s$ in quella legge si otterrebbe $-6+6=0$, in disaccordo con la misura di $-6\,\mathrm{m/s}$.
:::

:::osservazione{#orologio-sfasato titolo="Due orologi possono misurare la stessa accelerazione"}
Un sensore registra $3\,\mathrm{m/s}$ a $7\,\mathrm s$ e $9\,\mathrm{m/s}$ a $9\,\mathrm s$. Si scopre che segna sempre quattro secondi in più rispetto all'orologio del laboratorio. Le letture appartengono quindi agli istanti $7-4=3$ e $9-4=5\,\mathrm s$ del laboratorio. La durata fra le due misure resta $2\,\mathrm s$, perciò entrambe le coppie danno $\dfrac{9-3}{2}=3\,\mathrm{m/s^2}$ per l'accelerazione media. La correzione sposta tutti i punti del grafico orizzontalmente della stessa quantità e lascia invariata la pendenza. Serve però prima di confrontare la velocità con un evento registrato dall'orologio del laboratorio.
:::

:::osservazione{#area-accelerazione titolo="Come si sommano le variazioni di velocità"}
Due intervalli consecutivi hanno accelerazioni costanti diverse. Dalla legge della velocità, in ciascun intervallo la variazione è $\Delta v=a\,\Delta t$, cioè la durata moltiplicata per l'accelerazione con segno. Per esempio:

- $a=4\,\mathrm{m/s^2}$ per $1\,\mathrm s$ dà $\Delta v=4\cdot1=4\,\mathrm{m/s}$;
- $a=-1\,\mathrm{m/s^2}$ per $3\,\mathrm s$ dà $\Delta v=(-1)\cdot3=-3\,\mathrm{m/s}$.

La variazione totale è $4+(-3)=1\,\mathrm{m/s}$, quindi la velocità finale supera quella iniziale di $1\,\mathrm{m/s}$. In un grafico accelerazione-tempo ogni intervallo è un rettangolo di base $\Delta t$ e altezza $a$, e la sua area è $a\,\Delta t$. Gli incrementi sono quindi le **aree con segno** dei due rettangoli. Un'area sotto l'asse del tempo si conta negativa. L'accelerazione media sull'intero intervallo vale $\dfrac{1}{1+3}=\dfrac14\,\mathrm{m/s^2}$.
:::

## La legge oraria

::::teorema{#posizione titolo="Posizione con accelerazione costante"}
La **posizione** $x$ è il numero che indica dove si trova il corpo sull'asse; $x_0$ è la posizione iniziale. La **legge oraria** è la formula che dà la posizione in ogni istante. Nell'intervallo di accelerazione costante, la posizione al tempo $t$ è
$$
x(t)=x_0+v_0t+\frac12at^2.
$$
Ogni termine è una lunghezza: nell'ultimo, per esempio, $\mathrm{m/s^2}$ moltiplicato per $\mathrm{s^2}$ dà metri. Con $a\neq0$ la formula contiene $t^2$, quindi il grafico posizione-tempo è una **parabola**, una curva ad arco simmetrico con un punto più alto o un punto più basso. La pendenza di questo grafico in ogni punto è la velocità.

:::dimostrazione
Lo **spostamento** è la variazione di posizione, $\Delta x=x-x_0$. Nel grafico velocità-tempo lo spostamento è l'area compresa fra il grafico e l'asse del tempo, come nel moto uniforme, dove l'area del rettangolo è velocità per tempo. L'area è con segno: le parti sotto l'asse, dove la velocità è negativa, si contano negative.

Fra $0$ e $t$ la figura sotto la retta $v=v_0+at$ si divide in due parti:

- un rettangolo di base $t$ e altezza $v_0$, di area $v_0t$;
- un triangolo di base $t$ e altezza $at$, che è la variazione di velocità, di area con segno $\dfrac12t(at)=\dfrac12at^2$.

La loro somma è $\Delta x=v_0t+\dfrac12at^2$. Poiché $x=x_0+\Delta x$, aggiungendo $x_0$ si ottiene la formula. Il ragionamento vale anche quando il grafico attraversa l'asse, perché le aree si sommano con il loro segno.
:::
::::

:::esempio{titolo="Partenza da fermo"}
Un pattinatore parte da fermo, quindi $v_0=0$, con $a=2\,\mathrm{m/s^2}$. Dopo $2\,\mathrm{s}$ la velocità è $2\cdot2=4\,\mathrm{m/s}$ e lo spostamento è l'area del triangolo, $\dfrac12\cdot2\cdot4\,\mathrm m=4\,\mathrm m$. Dopo $4\,\mathrm{s}$ la velocità è $8\,\mathrm{m/s}$ e lo spostamento è $\dfrac12\cdot4\cdot8\,\mathrm m=16\,\mathrm m$. Raddoppiare la durata raddoppia la velocità raggiunta e quadruplica la distanza da fermo. Il motivo è che nel grafico raddoppiano sia la base sia l'altezza del triangolo, e l'area diventa $2\cdot2=4$ volte più grande.

::grafico{f="2*x" area="2*x;0;0;4" xmin=0 xmax=4.5 ymin=0 ymax=9 punti="2,4,pieno,A;4,8,pieno,B" nomi="t (s),v (m/s)" titolo="L'area del triangolo in quattro secondi è 16 m."}
:::

:::osservazione{#area-velocita titolo="Media delle velocità agli estremi"}
La **velocità media** su un intervallo è lo spostamento diviso per la durata. Con accelerazione costante la velocità media è $\dfrac{v_0+v_f}{2}$, la media delle velocità agli estremi. Infatti lo spostamento è l'area di un trapezio con basi con segno $v_0$ e $v_f$ e altezza $t$, cioè $\dfrac{v_0+v_f}{2}\,t$. Allo stesso risultato si arriva sostituendo $at=v_f-v_0$ nella legge oraria:
$$
\Delta x=v_0t+\frac12(v_f-v_0)t=\frac{v_0+v_f}{2}\,t.
$$
Se il corpo torna indietro nell'intervallo, questa media somma contributi di segno opposto. La **distanza percorsa** è invece la lunghezza totale del cammino ed è sempre positiva. Per calcolarla si trova l'istante di inversione, in cui $v=0$, e si sommano i moduli dei due spostamenti, prima e dopo l'inversione.
:::

:::esempio{#distanza-inversione titolo="Spostamento e distanza in presenza di una svolta"}
Un carrello parte dalla posizione $5\,\mathrm m$ con $v_0=6\,\mathrm{m/s}$ e mantiene $a=-2\,\mathrm{m/s^2}$ fino a $5\,\mathrm s$. La legge oraria è $x=5+6t+\dfrac12(-2)t^2=5+6t-t^2$. La velocità $6-2t$ si annulla a $3\,\mathrm s$, quando la posizione vale $5+6\cdot3-3^2=14\,\mathrm m$. A $5\,\mathrm s$ la posizione è $5+6\cdot5-5^2=10\,\mathrm m$.

::grafico{f="5+6*x-x^2+0*sqrt(5-x)" xmin=0 xmax=5.2 ymin=0 ymax=16 punti="0,5,pieno,I;3,14,pieno,M;5,10,pieno,F" nomi="t (s),x (m)" legenda="x=5+6t-t^2" titolo="La pendenza del grafico posizione-tempo si annulla in M e diventa negativa dopo M."}

Lo spostamento confronta le sole posizioni iniziale e finale e vale $10-5=5\,\mathrm m$. La distanza comprende i $14-5=9\,\mathrm m$ dell'andata e i $14-10=4\,\mathrm m$ del ritorno, per un totale di $13\,\mathrm m$. Nel punto M, il più alto della parabola, la pendenza è nulla perché la velocità è nulla. La **tangente** alla curva in M, cioè la retta che tocca la curva in quel solo punto, è quindi orizzontale. La posizione è ancora positiva nel tratto di ritorno. Il verso si ricava dalla pendenza, che in quel tratto è negativa.
:::

:::esempio{#spostamenti-consecutivi titolo="Ricavare l'accelerazione da due spostamenti consecutivi"}
Un carrello si sposta di $10\,\mathrm m$ nei primi $2\,\mathrm s$ e di $18\,\mathrm m$ nei successivi $2\,\mathrm s$. Supponiamo costante l'accelerazione. Si indica con $T$ la durata di ciascun intervallo e con $v_0$ la velocità all'inizio del primo. Con la legge oraria i due spostamenti sono:

- primo intervallo: $\Delta x_1=v_0T+\dfrac12aT^2$;
- secondo intervallo, che comincia con velocità $v_0+aT$: $\Delta x_2=(v_0+aT)T+\dfrac12aT^2$.

Sottraendo, i termini $v_0T$ e $\dfrac12aT^2$ si eliminano. La differenza fra gli spostamenti è quindi $\Delta x_2-\Delta x_1=(aT)T=aT^2$.

In questo caso $a=\dfrac{18-10}{2^2}=\dfrac84=2\,\mathrm{m/s^2}$. Sostituendo nella legge del primo intervallo si ottiene $10=2v_0+\dfrac12\cdot2\cdot2^2=2v_0+4$, quindi $2v_0=6$ e $v_0=3\,\mathrm{m/s}$. All'inizio del secondo intervallo la velocità è $3+2\cdot2=7\,\mathrm{m/s}$. Lo spostamento calcolato su quell'intervallo vale $7\cdot2+4=18\,\mathrm m$ e conferma la seconda lettura.
:::

## Una relazione senza il tempo

:::teorema{#senza-tempo titolo="Velocità e spostamento"}
Quando è noto lo spostamento ma manca il tempo, si combinano due formule valide con accelerazione costante:

- dalla legge della velocità, $v_f-v_0=at$;
- dalla velocità media, $\Delta x=\dfrac{v_0+v_f}{2}\,t$, cioè $(v_f+v_0)\,t=2\Delta x$.

Si ottiene
$$
v_f^2-v_0^2=(v_f-v_0)(v_f+v_0)=at(v_f+v_0)=2a\Delta x.
$$
Il primo passaggio è la differenza di quadrati, $A^2-B^2=(A-B)(A+B)$; il secondo sostituisce $v_f-v_0=at$, il terzo sostituisce $(v_f+v_0)\,t=2\Delta x$. La relazione si scrive anche $v_f^2=v_0^2+2a\Delta x$. Essa dà il quadrato della velocità, e la radice quadrata ne dà il modulo. Per scegliere il segno serve conoscere il verso del moto in quell'istante. Una posizione può essere raggiunta sia all'andata sia al ritorno. Nei due passaggi la relazione dà lo stesso $v_f^2$, quindi lo stesso modulo, con segni opposti.
:::

:::esempio{titolo="Frenata con spazio noto"}
Un veicolo va a $12\,\mathrm{m/s}$ nel verso positivo e rallenta di $2\,\mathrm{m/s}$ ogni secondo, quindi $a=-2\,\mathrm{m/s^2}$. Dopo uno spostamento di $20\,\mathrm{m}$, durante la frenata, si ha in unità SI
$$
v^2=12^2+2\cdot(-2)\cdot20=144-80=64.
$$
Poiché il veicolo procede ancora nel verso positivo, la velocità vale $\sqrt{64}=8\,\mathrm{m/s}$. Sostituendo nella legge della velocità si trova $8=12-2t$, cioè $t=2\,\mathrm{s}$. La legge oraria restituisce lo spostamento assegnato, $12\cdot2-\dfrac12\cdot2\cdot2^2=24-4=20\,\mathrm m$.
:::

:::attenzione{#posizione-accessibile titolo="Un quadrato consente di verificare se il punto è raggiungibile"}
Consideriamo ancora $v_0=12\,\mathrm{m/s}$ e $a=-2\,\mathrm{m/s^2}$. Per uno spostamento positivo di $40\,\mathrm m$ la relazione darebbe $v^2=144-4\cdot 40=144-160=-16$, in unità SI. Il quadrato di un numero è sempre maggiore o uguale a zero, quindi nessuna velocità ha quadrato $-16$. Il punto a $40\,\mathrm m$ resta perciò oltre la massima posizione raggiunta dal carrello durante questo moto. La posizione più lontana corrisponde a $v=0$, cioè $0=144-4\Delta x$, da cui $\Delta x=\dfrac{144}{4}=36\,\mathrm m$.

::grafico{f="144-4*x+0*sqrt(36-x)" xmin=0 xmax=41 ymin=0 ymax=155 punti="0,144,pieno;20,64,pieno;36,0,pieno" nomi="Δx (m),v² (m²/s²)" legenda="v^2=144-4\Delta x" titolo="La parte fisicamente accessibile nel verso iniziale arriva fino a Δx = 36 m."}

Nella figura $v^2$ è sull'asse verticale e $\Delta x$ su quello orizzontale. Il grafico è la retta $v^2=v_0^2+2a\Delta x$, quindi la sua pendenza vale $2a$. Si può dunque risalire ad $a$ da due punti della figura. Fra gli spostamenti $0$ e $20\,\mathrm m$, per esempio, il quadrato cala da $144$ a $64$, cioè di $80\,\mathrm{m^2/s^2}$. Dividendo $-80$ per $20\,\mathrm m$ si ottiene $-4\,\mathrm{m/s^2}$ e dividendo ancora per due si ritrova $a=-2\,\mathrm{m/s^2}$.
:::

## Frenata e tempo di reazione

:::osservazione{#frenata titolo="Il tratto fino all'arresto"}
Si sceglie positivo il verso iniziale del veicolo. La **decelerazione** è il modulo dell'accelerazione durante una frenata; si indica con $b>0$, e l'accelerazione con segno è $a=-b$. Se la frenata avviene con $a=-b$ costante fino alla sosta, il veicolo si ferma quando $v=0$, cioè $0=v_0-bt_a$. Il **tempo di arresto** è quindi
$$
t_a=\frac{v_0}{b}.
$$
Nello stesso tratto la relazione senza tempo, con $v_f=0$ e $a=-b$, dà $0=v_0^2-2bs_f$. Lo **spazio di frenata** è quindi
$$
s_f=\frac{v_0^2}{2b}.
$$
Il modello di frenata termina alla sosta, salvo che un'altra forza faccia poi invertire il moto. Prolungando la retta $v=v_0-bt$ oltre $t_a$ la velocità diventerebbe negativa, cioè il modello descriverebbe una retromarcia che i freni non producono.

Prima dell'azione dei freni passa un **tempo di reazione** $t_r$, cioè il tempo fra l'istante in cui il conducente vede il pericolo e l'istante in cui i freni cominciano ad agire. Il modello a due fasi è questo:

- durante la reazione il veicolo mantiene la velocità $v_0$ e percorre lo **spazio di reazione** $s_r=v_0t_r$;
- poi frena e percorre lo spazio di frenata $s_f$.

La distanza totale di arresto è $s_r+s_f$. Raddoppiando $v_0$ a parità di $b$ e $t_r$, lo spazio di reazione raddoppia, perché è proporzionale a $v_0$. Lo spazio di frenata quadruplica, perché contiene $v_0^2$ e $(2v_0)^2=4v_0^2$.
:::

:::esempio{titolo="Un rettangolo e un triangolo nella distanza totale"}
Con $v_0=20\,\mathrm{m/s}$, $t_r=1\,\mathrm{s}$ e $b=5\,\mathrm{m/s^2}$, lo spazio di reazione è $20\cdot1=20\,\mathrm m$. La frenata dura $\dfrac{20}{5}=4\,\mathrm s$ e lo spazio di frenata è l'area del triangolo, $\dfrac12\cdot4\cdot20\,\mathrm m=40\,\mathrm m$. Il veicolo si ferma dopo $1+4=5\,\mathrm s$ dall'osservazione del pericolo e percorre $20+40=60\,\mathrm m$ in totale. Nella figura lo spazio di reazione è l'area del rettangolo prima di R, quello di frenata l'area del triangolo da R a F.

::grafico{f="20-5*max(0,x-1)+0*sqrt(5-x)" area="20;0;0;1|25-5*x;0;1;5" xmin=0 xmax=5.5 ymin=0 ymax=23 punti="1,20,pieno,R;5,0,pieno" etichette="4.87,3,F" nomi="t (s),v (m/s)" titolo="Prima di R agisce il tempo di reazione. Da R a F avviene la frenata."}
:::

:::esempio{#reazione-inversa titolo="Risalire alla durata di una fase da una distanza totale"}
In una prova ideale un veicolo va a $16\,\mathrm{m/s}$ e frena con modulo di accelerazione $4\,\mathrm{m/s^2}$. La sola frenata occupa $\dfrac{16^2}{2\cdot4}=\dfrac{256}{8}=32\,\mathrm m$. Se la distanza misurata dalla segnalazione alla sosta è $48\,\mathrm m$, durante la reazione sono stati percorsi $48-32=16\,\mathrm m$. A velocità costante di $16\,\mathrm{m/s}$ questi metri corrispondono a $\dfrac{16}{16}=1\,\mathrm s$.

::grafico{f="32+16*x" xmin=0 xmax=2.2 ymin=0 ymax=70 punti="0,32,pieno;1,48,pieno;2,64,pieno" nomi="tᵣ (s),s (m)" legenda="s=32+16t_r" titolo="L'intercetta corrisponde alla sola frenata. La pendenza è la velocità nella fase di reazione."}

La figura mostra la distanza totale $s=32+16t_r$ al variare del tempo di reazione. L'**intercetta**, cioè il valore per $t_r=0$, è lo spazio di sola frenata. Una distanza totale inferiore a $32\,\mathrm m$ darebbe un tempo di reazione negativo, che nessuna prova reale può avere. Una delle altre ipotesi del modello, per esempio il modulo costante della decelerazione, andrebbe quindi verificata con una misura indipendente.
:::

## Caduta e lancio verticale

:::teorema{#caduta titolo="Moto verticale vicino alla Terra"}
Si trascurano la resistenza dell'aria e la piccola variazione della gravità con la quota, cioè con l'altezza. Allora un corpo che si muove in verticale vicino alla Terra ha accelerazione costante, diretta verso il basso. Il suo modulo è l'**accelerazione di gravità** $g$, uguale per tutti i corpi qualunque sia la loro massa. Si usa $g\simeq9{,}81\,\mathrm{m/s^2}$ vicino al suolo (il simbolo $\simeq$ si legge «circa uguale a»), oppure il valore indicato nel problema. Se l'alto è positivo, $a=-g$. Indicando con $y$ la quota, con $y_0$ la quota iniziale e con $v_0$ la velocità iniziale con segno, e sostituendo $a=-g$ nelle leggi del moto, si ottiene
$$
v(t)=v_0-gt,\qquad y(t)=y_0+v_0t-\frac12gt^2.
$$
La relazione senza tempo diventa $v^2=v_0^2-2g(y-y_0)$.

Per un corpo lasciato andare da fermo da altezza $h$ rispetto al suolo, $v_0=0$, $y_0=h$ e al suolo $y=0$. Si ha quindi $0=h-\dfrac12gt^2$, cioè $t^2=\dfrac{2h}{g}$. L'unica durata positiva è $t=\sqrt{\dfrac{2h}{g}}$; l'altra soluzione, $-\sqrt{\dfrac{2h}{g}}$, precede il rilascio.

Per il lancio verso l'alto, nel punto più alto, detto **culmine**, $v=0$. L'accelerazione in quell'istante rimane $-g$, quindi subito dopo la velocità diventa negativa e il corpo inizia a scendere. Ponendo $v=0$ nella legge della velocità si ha $0=v_0-gt$, quindi la durata per raggiungere il culmine è $\dfrac{v_0}{g}$. Ponendo $v=0$ nella relazione senza tempo si ha $0=v_0^2-2g(y-y_0)$, quindi il guadagno di quota è $\dfrac{v_0^2}{2g}$.
:::

:::esempio{titolo="Quote uguali a tempi diversi"}
Una pallina parte da $y_0=0$ con $v_0=20\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ si ha $\dfrac12g=5$, quindi $y=20t-5t^2$, in metri. La quota $15\,\mathrm m$ si raggiunge risolvendo $20t-5t^2=15$. Portando tutto al primo membro e dividendo per $-5$ si ottiene $t^2-4t+3=0$, cioè $(t-1)(t-3)=0$. Le soluzioni sono $t=1\,\mathrm s$ e $t=3\,\mathrm s$. La velocità $v=20-10t$ nei due istanti vale rispettivamente $+10$ e $-10\,\mathrm{m/s}$. Quindi a $1\,\mathrm s$ la pallina sale, a $3\,\mathrm s$ scende con la stessa rapidità. Il punto più alto è a $t=\dfrac{20}{10}=2\,\mathrm s$ e $y=20\cdot2-5\cdot2^2=20\,\mathrm m$.

::grafico{f="20*x-5*x^2+0*sqrt(4-x)" xmin=0 xmax=4.5 ymin=0 ymax=22 punti="1,15,pieno,A;2,20,pieno,M;3,15,pieno,B" nomi="t (s),y (m)" titolo="A e B hanno la stessa quota. La pendenza cambia segno tra i due punti."}
:::

:::attenzione
La legge del moto verticale vale fino al contatto con il suolo. Dopo l'urto il corpo si ferma o rimbalza, mentre la parabola prolungata sotto il suolo dà quote negative e altre soluzioni matematiche che non descrivono il corpo. Nei problemi si verifica quindi che l'istante trovato stia nel **dominio fisico** del moto, cioè fra il lancio e l'impatto, prima di interpretare una soluzione dell'equazione.
:::

:::esempio{#radici-dominio titolo="Scegliere la radice che appartiene al moto osservato"}
Si lancia un oggetto verso l'alto da quota $15\,\mathrm m$ con velocità $10\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ e aria trascurabile, la quota in metri vale $15+10t-5t^2$. Al suolo la quota è nulla, quindi $15+10t-5t^2=0$. Dividendo l'equazione per $-5$ si ottiene $t^2-2t-3=0$. I due numeri con prodotto $-3$ e somma $-2$ sono $1$ e $-3$, perciò l'equazione si scrive $(t+1)(t-3)=0$. Le sue **radici**, cioè le soluzioni, sono $t=-1\,\mathrm s$ e $t=3\,\mathrm s$.

La radice $t=-1\,\mathrm s$ precede il lancio e sta fuori dall'intervallo del modello. L'impatto avviene dopo $3\,\mathrm s$, con velocità $v=10-10\cdot3=-20\,\mathrm{m/s}$. Il segno indica la discesa e la rapidità è $20\,\mathrm{m/s}$. Il culmine si trova dove $10-10t=0$, cioè a $1\,\mathrm s$, fra lancio e impatto. Lì la velocità si annulla, ma la pendenza del grafico velocità-tempo, cioè l'accelerazione, resta $-g$.

::grafico{f="10-10*x+0*sqrt(3-x)" xmin=0 xmax=3.2 ymin=-24 ymax=12 punti="0,10,pieno;1,0,pieno,M;3,-20,pieno" nomi="t (s),v (m/s)" legenda="v=10-10t" titolo="Il moto fisico comincia a t = 0 e termina al suolo a t = 3 s. Il punto M è il culmine."}
:::

:::osservazione{#asse-verticale titolo="L'orientamento dell'asse cambia i segni"}
Un oggetto è lanciato verso l'alto a $6\,\mathrm{m/s}$, con $g=10\,\mathrm{m/s^2}$. Se l'asse è positivo verso il basso, il lancio è nel verso negativo e la gravità nel verso positivo, quindi si scrive $v_0=-6\,\mathrm{m/s}$ e $a=+10\,\mathrm{m/s^2}$. La velocità vale $v=-6+10t$ e si annulla per $10t=6$, cioè $t=0{,}6\,\mathrm s$. Orientando l'asse verso l'alto si avrebbe $v=6-10t$, che si annulla per lo stesso $t=0{,}6\,\mathrm s$. I segni delle due espressioni sono opposti e lo zero si raggiunge nello stesso istante.
:::
