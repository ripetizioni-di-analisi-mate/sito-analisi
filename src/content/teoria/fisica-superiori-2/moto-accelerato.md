---
titolo: Moto rettilineo uniformemente accelerato
sommario: Accelerazione, grafici, legge oraria, arresto di un veicolo e moto verticale sotto l'azione della gravità.
---

## L'accelerazione

:::definizione{#accelerazione titolo="La variazione della velocità"}
L'**accelerazione media** lungo l'asse è il rapporto tra la variazione della velocità e il tempo trascorso. Si indicano con $v_i$ e $v_f$ le velocità con segno ai due estremi e con $\Delta t=t_f-t_i>0$ la durata.
$$
a_m=\frac{v_f-v_i}{\Delta t}.
$$
La sua unità SI è $\mathrm{(m/s)/s}=\mathrm{m/s^2}$. Per esempio, un valore di $2\,\mathrm{m/s^2}$ significa che la velocità aumenta di $2\,\mathrm{m/s}$ ogni secondo, se l'accelerazione resta costante. Il segno riguarda la variazione di velocità. Un ciclista può muoversi nel verso negativo mentre la sua velocità passa da $-8$ a $-2\,\mathrm{m/s}$. In questo caso l'accelerazione media è positiva e il modulo della velocità diminuisce.
:::

:::esempio{titolo="Il segno dell'accelerazione si legge dalla pendenza"}
La velocità passa da $-8\,\mathrm{m/s}$ a $-2\,\mathrm{m/s}$ in $3\,\mathrm{s}$. La variazione è $-2-(-8)=6\,\mathrm{m/s}$, dunque $a_m=2\,\mathrm{m/s^2}$. In tutto il tratto la velocità è negativa se l'accelerazione è costante. Il corpo procede quindi nel verso negativo rallentando.

::grafico{f="-8+2*x" xmin=0 xmax=3 ymin=-9 ymax=2 punti="0,-8,pieno,A;3,-2,pieno,B" nomi="t (s),v (m/s)" titolo="Pendenza positiva e velocità negativa per tutto il tratto."}
:::

:::attenzione
Le due velocità agli estremi determinano la media. Per usare quella media in ogni istante occorre l'ipotesi di accelerazione costante. Un'automobile può avere accelerazione media nulla in un viaggio durante il quale è partita da ferma, si è mossa ed è tornata ferma.
:::

:::esempio{#letture-irregolari titolo="Intervalli di misura di durata diversa"}
Un sensore registra queste coppie di tempo e velocità. I tempi sono misurati a partire dall'accensione del sensore, che precede la prima lettura.

| Tempo (s) | Velocità (m/s) |
| ---: | ---: |
| 2 | −2 |
| 3 | 0 |
| 5 | 4 |
| 8 | 10 |

Gli aumenti di velocità nei tre intervalli valgono $2$, $4$ e $6\,\mathrm{m/s}$. Le rispettive durate valgono $1$, $2$ e $3\,\mathrm{s}$. Dividendo ciascun aumento per la propria durata si ottiene sempre $2\,\mathrm{m/s^2}$. I punti sono quindi compatibili con un modello a pendenza costante. Tra due letture il sensore lascia un intervallo privo di dati, nel quale potrebbero esserci variazioni più brevi.
:::

:::osservazione{#stessi-estremi titolo="Due profili con la stessa accelerazione media"}
Due moti partono da $4\,\mathrm{m/s}$ e arrivano a $8\,\mathrm{m/s}$ in $4\,\mathrm s$. Nel primo la velocità sale di $1\,\mathrm{m/s}$ ogni secondo. Nel secondo rimane costante per $2\,\mathrm s$, poi sale di $2\,\mathrm{m/s}$ ogni secondo per altri $2\,\mathrm s$. La variazione totale e la durata totale coincidono, quindi l'accelerazione media vale $1\,\mathrm{m/s^2}$ in entrambi. Alla metà dell'intervallo il primo corpo va però a $6\,\mathrm{m/s}$ e il secondo a $4\,\mathrm{m/s}$.

::grafico{f="4+x+0*sqrt(4-x);4+max(0,2*x-4)+0*sqrt(4-x)" xmin=0 xmax=4.3 ymin=0 ymax=9 punti="0,4,pieno;2,4,pieno;2,6,pieno;4,8,pieno" nomi="t (s),v (m/s)" legenda="\text{Primo moto};\text{Secondo moto}" titolo="Gli estremi coincidono. Le pendenze nei tratti interni sono diverse."}
:::

:::esempio{#conversione-accelerazione titolo="Velocità in chilometri orari e tempo in secondi"}
Una bicicletta passa da $18$ a $36\,\mathrm{km/h}$ in $4\,\mathrm s$. Poiché $1\,\mathrm{km}=1000\,\mathrm m$ e $1\,\mathrm h=3600\,\mathrm s$, le due letture diventano $5$ e $10\,\mathrm{m/s}$. L'aumento è quindi $5\,\mathrm{m/s}$ e l'accelerazione media vale $\dfrac54=1{,}25\,\mathrm{m/s^2}$. Si ottiene lo stesso risultato convertendo soltanto la differenza di $18\,\mathrm{km/h}$. La conversione moltiplica entrambe le velocità per lo stesso fattore, perciò la sottrazione può precederla.
:::

:::osservazione{#tolleranza-pendenza titolo="Verificare la compatibilità di una terza lettura"}
Le velocità registrate a $t=0$ e a $t=2\,\mathrm s$ valgono $4$ e $8\,\mathrm{m/s}$. Se queste due letture sono esatte, fissano una pendenza di $2\,\mathrm{m/s^2}$. Prolungando lo stesso modello fino a $t=5\,\mathrm s$ si prevede $4+2\cdot5=14\,\mathrm{m/s}$.

La terza lettura risulta $13{,}5\,\mathrm{m/s}$ con incertezza assoluta $0{,}6\,\mathrm{m/s}$. I valori compatibili vanno da $12{,}9$ a $14{,}1\,\mathrm{m/s}$ e includono la previsione. Con incertezza di $0{,}2\,\mathrm{m/s}$ l'intervallo andrebbe da $13{,}3$ a $13{,}7\,\mathrm{m/s}$ e diventerebbe incompatibile. Il confronto usa l'intervallo di misura, che in questo esempio decide se la differenza sia sufficiente a escludere il modello.
:::

## La legge della velocità

:::teorema{#velocita titolo="Velocità con accelerazione costante"}
Con accelerazione $a$ costante, il suo valore coincide con quello medio in ogni intervallo. Se $v_0$ è la velocità all'inizio e $t$ il tempo trascorso da quell'istante, moltiplicando per $t$ si ricava
$$
v(t)=v_0+at.
$$
Il grafico velocità-tempo è quindi una retta. La pendenza è $a$ e il valore a $t=0$ è $v_0$. Con $a=0$ la retta è orizzontale e si ritrova il moto uniforme. Quando $v$ e $a$ hanno lo stesso segno, il modulo della velocità cresce. Quando hanno segno opposto, diminuisce finché il corpo raggiunge eventualmente $v=0$.
:::

:::esempio{titolo="Una velocità che cambia segno"}
Per un carrello con $v_0=6\,\mathrm{m/s}$ e $a=-2\,\mathrm{m/s^2}$ si ha $v=6-2t$, in unità SI. In tre secondi raggiunge velocità nulla. Se l'accelerazione resta attiva dopo quell'istante, il carrello procede nel verso negativo. A $t=5\,\mathrm{s}$ la velocità è $-4\,\mathrm{m/s}$. In questo secondo tratto il modulo aumenta perché velocità e accelerazione sono entrambe negative.

::grafico{f="6-2*x" xmin=0 xmax=5 ymin=-5 ymax=7 punti="0,6,pieno,A;3,0,pieno,B;5,-4,pieno,C" nomi="t (s),v (m/s)" titolo="B è l'inversione. Prima di B la rapidità diminuisce; dopo B aumenta."}
:::

:::esempio{#origine-tempi titolo="La durata si calcola dall'istante della prima lettura"}
Un cronometro è già in funzione quando, a $t_i=2\,\mathrm s$, si misura $v_i=-6\,\mathrm{m/s}$. Da quel momento l'accelerazione resta $3\,\mathrm{m/s^2}$. All'istante $t=5\,\mathrm s$ sono trascorsi $3\,\mathrm s$ dalla lettura. In unità SI la legge è $v=-6+3(t-2)$, quindi la velocità richiesta vale $3\,\mathrm{m/s}$. Il valore $0$ si raggiunge dopo $2\,\mathrm s$ dalla lettura, cioè quando il cronometro indica $4\,\mathrm s$.

::grafico{f="-6+3*(x-2)" xmin=2 xmax=5.2 ymin=-7 ymax=4 punti="2,-6,pieno,I;4,0,pieno;5,3,pieno,F" nomi="t (s),v (m/s)" legenda="v=-6+3(t-2)" titolo="L'intervallo tra I e F dura 3 s. Il cronometro indica 5 s in F."}

Scrivere $v=-6+3t$ attribuirebbe la velocità di $-6\,\mathrm{m/s}$ all'istante zero. Sostituendo $t=2\,\mathrm s$ in quella legge si otterrebbe già una velocità nulla, in disaccordo con la misura.
:::

:::osservazione{#orologio-sfasato titolo="Due orologi possono misurare la stessa accelerazione"}
Un sensore registra $3\,\mathrm{m/s}$ a $7\,\mathrm s$ e $9\,\mathrm{m/s}$ a $9\,\mathrm s$. Si scopre che segna sempre quattro secondi in più rispetto all'orologio del laboratorio. Le letture appartengono quindi agli istanti $3$ e $5\,\mathrm s$ del laboratorio. La durata fra le due misure resta $2\,\mathrm s$, perciò entrambe le coppie danno $3\,\mathrm{m/s^2}$ per l'accelerazione media. La correzione trasla i punti del grafico orizzontalmente e lascia invariata la pendenza. Serve però prima di confrontare la velocità con un evento registrato dall'altro orologio.
:::

:::osservazione{#area-accelerazione titolo="Come si sommano le variazioni di velocità"}
Due intervalli consecutivi hanno accelerazioni costanti diverse. Si calcola $\Delta v$ su ognuno moltiplicando la durata per la relativa accelerazione con segno. Per esempio, $a=4\,\mathrm{m/s^2}$ per $1\,\mathrm s$ e $a=-1\,\mathrm{m/s^2}$ per $3\,\mathrm s$ producono gli incrementi $4$ e $-3\,\mathrm{m/s}$. La velocità finale supera quella iniziale di $1\,\mathrm{m/s}$. Su un grafico accelerazione-tempo questi incrementi sono le aree con segno di due rettangoli. L'accelerazione media sull'intero intervallo vale $\dfrac14\,\mathrm{m/s^2}$.
:::

## La legge oraria

::::teorema{#posizione titolo="Posizione con accelerazione costante"}
La posizione iniziale è $x_0$. Nell'intervallo di accelerazione costante, la posizione al tempo $t$ è
$$
x(t)=x_0+v_0t+\frac12at^2.
$$

:::dimostrazione
Nel grafico velocità-tempo lo spostamento è l'area con segno rispetto all'asse del tempo. La retta $v=v_0+at$ si può leggere come la somma della retta orizzontale $v_0$ e della variazione lineare $at$. Il primo contributo è il rettangolo di area $v_0t$ e il secondo è un triangolo di area con segno $\dfrac12t(at)$. La loro somma è $\Delta x$. Aggiungendo $x_0$ si ottiene la formula. Il ragionamento vale anche quando il grafico attraversa l'asse, perché le aree si sommano con segno.
:::
::::

:::esempio{titolo="Partenza da fermo"}
Un pattinatore parte da fermo con $a=2\,\mathrm{m/s^2}$. Dopo $2\,\mathrm{s}$ la velocità è $4\,\mathrm{m/s}$ e lo spostamento è l'area del triangolo, $\dfrac12\cdot2\cdot4\,\mathrm m=4\,\mathrm m$. Dopo $4\,\mathrm{s}$ la velocità è $8\,\mathrm{m/s}$ e lo spostamento è $16\,\mathrm m$. Raddoppiare la durata raddoppia la velocità raggiunta e quadruplica la distanza da fermo, perché nel grafico raddoppiano sia base sia altezza.

::grafico{f="2*x" area="2*x;0;0;4" xmin=0 xmax=4.5 ymin=0 ymax=9 punti="2,4,pieno,A;4,8,pieno,B" nomi="t (s),v (m/s)" titolo="L'area del triangolo in quattro secondi è 16 m."}
:::

:::osservazione{#area-velocita titolo="Media delle velocità agli estremi"}
Con accelerazione costante la velocità media è $\dfrac{v_0+v_f}{2}$. Infatti si può calcolare lo spostamento come area di un trapezio con basi orientate $v_0$ e $v_f$, oppure sostituire $at=v_f-v_0$ nella legge oraria. Se il corpo torna indietro nell'intervallo, questa media contiene contributi di segno opposto. Per la distanza occorre trovare l'istante di inversione a $v=0$ e sommare i moduli dei due spostamenti.
:::

:::esempio{#distanza-inversione titolo="Spostamento e distanza in presenza di una svolta"}
Un carrello parte dalla posizione $5\,\mathrm m$ con $v_0=6\,\mathrm{m/s}$ e mantiene $a=-2\,\mathrm{m/s^2}$ fino a $5\,\mathrm s$. La velocità si annulla a $3\,\mathrm s$, quando la posizione vale $5+6\cdot3-3^2=14\,\mathrm m$. A $5\,\mathrm s$ la posizione è $5+6\cdot5-5^2=10\,\mathrm m$.

::grafico{f="5+6*x-x^2+0*sqrt(5-x)" xmin=0 xmax=5.2 ymin=0 ymax=16 punti="0,5,pieno,I;3,14,pieno,M;5,10,pieno,F" nomi="t (s),x (m)" legenda="x=5+6t-t^2" titolo="La pendenza del grafico posizione-tempo si annulla in M e diventa negativa dopo M."}

Lo spostamento confronta le sole posizioni iniziale e finale e vale $10-5=5\,\mathrm m$. La distanza comprende i $9\,\mathrm m$ dell'andata e i $4\,\mathrm m$ del ritorno, per un totale di $13\,\mathrm m$. La posizione è ancora positiva nel tratto di ritorno. Il verso si ricava dalla pendenza, che in quel tratto è negativa.
:::

:::esempio{#spostamenti-consecutivi titolo="Ricavare l'accelerazione da due spostamenti consecutivi"}
Un carrello si sposta di $10\,\mathrm m$ nei primi $2\,\mathrm s$ e di $18\,\mathrm m$ nei successivi $2\,\mathrm s$. Supponiamo costante l'accelerazione. Per due intervalli consecutivi della stessa durata $T$, il termine $\dfrac12aT^2$ è uguale nei due spostamenti. La velocità iniziale del secondo intervallo supera quella del primo di $aT$. La differenza fra gli spostamenti è quindi $(aT)T=aT^2$.

In questo caso $a=\dfrac{18-10}{2^2}=2\,\mathrm{m/s^2}$. Sostituendo nella legge del primo intervallo si ottiene $10=2v_0+4$ e quindi $v_0=3\,\mathrm{m/s}$. All'inizio del secondo intervallo la velocità è $7\,\mathrm{m/s}$. Lo spostamento calcolato su quell'intervallo vale $7\cdot2+4=18\,\mathrm m$ e conferma la seconda lettura.
:::

## Una relazione senza il tempo

:::teorema{#senza-tempo titolo="Velocità e spostamento"}
Quando è noto lo spostamento ma manca il tempo, si possono combinare le due leggi con accelerazione costante. Si ottiene
$$
v_f^2-v_0^2=(v_f-v_0)(v_f+v_0)=at(v_f+v_0)=2a\Delta x.
$$
Il quadrato dà accesso al modulo della velocità, mentre per scegliere il segno serve conoscere il verso del moto in quell'istante. Una posizione può essere raggiunta sia all'andata sia al ritorno. Nei due passaggi la stessa relazione assegna lo stesso modulo.
:::

:::esempio{titolo="Frenata con spazio noto"}
Un veicolo va a $12\,\mathrm{m/s}$ e rallenta di $2\,\mathrm{m/s}$ ogni secondo. Dopo uno spostamento di $20\,\mathrm{m}$, durante la frenata, si ha $v^2=12^2+2(-2)\cdot20=64$, in unità SI. Poiché il veicolo procede ancora nel verso positivo, la velocità vale $8\,\mathrm{m/s}$. Sostituendo nella legge della velocità si trova $t=2\,\mathrm{s}$ e la legge oraria restituisce lo spostamento assegnato.
:::

:::attenzione{#posizione-accessibile titolo="Un quadrato consente di verificare se il punto è raggiungibile"}
Consideriamo ancora $v_0=12\,\mathrm{m/s}$ e $a=-2\,\mathrm{m/s^2}$. Per uno spostamento positivo di $40\,\mathrm m$ la relazione darebbe $v^2=144-4\cdot 40=-16$, in unità SI. Un quadrato di velocità è sempre maggiore o uguale a zero. Il valore ottenuto indica quindi che il punto resta oltre la massima posizione del carrello durante questo moto. Il punto estremo verso il quale si muove il carrello corrisponde a $v=0$ e vale $\Delta x=36\,\mathrm m$.

::grafico{f="144-4*x+0*sqrt(36-x)" xmin=0 xmax=41 ymin=0 ymax=155 punti="0,144,pieno;20,64,pieno;36,0,pieno" nomi="Δx (m),v² (m²/s²)" legenda="v^2=144-4\Delta x" titolo="La parte fisicamente accessibile nel verso iniziale arriva fino a Δx = 36 m."}

La pendenza di un grafico di $v^2$ contro $\Delta x$ vale $2a$. Si può dunque risalire ad $a$ da due misure di figura. Fra gli spostamenti $0$ e $20\,\mathrm m$, per esempio, il quadrato cala di $80\,\mathrm{m^2/s^2}$. Dividendo per $20\,\mathrm m$ si ottiene $-4\,\mathrm{m/s^2}$ e dividendo ancora per due si ritrova $a=-2\,\mathrm{m/s^2}$.
:::

## Frenata e tempo di reazione

:::osservazione{#frenata titolo="Il tratto fino all'arresto"}
Si sceglie positivo il verso iniziale del veicolo e si indica con $b>0$ il modulo della decelerazione. Se la frenata avviene con $a=-b$ costante fino alla sosta, ponendo $v=0$ si trova $t_a=\dfrac{v_0}{b}$. Nello stesso tratto la relazione senza tempo dà lo spazio di frenata $s_f=\dfrac{v_0^2}{2b}$. Il modello di frenata termina alla sosta, salvo che un'altra forza faccia poi invertire il moto. L'estensione della stessa retta velocità-tempo dopo l'arresto descriverebbe una retromarcia artificiale.

Prima dell'azione dei freni, il conducente ha un tempo di reazione $t_r$. Nel modello a due fasi il veicolo mantiene $v_0$ durante la reazione e percorre $s_r=v_0t_r$. La distanza totale è $s_r+s_f$. Raddoppiando $v_0$ a parità di $b$ e $t_r$, lo spazio di reazione raddoppia, mentre quello di frenata quadruplica.
:::

:::esempio{titolo="Un rettangolo e un triangolo nella distanza totale"}
Con $v_0=20\,\mathrm{m/s}$, $t_r=1\,\mathrm{s}$ e $b=5\,\mathrm{m/s^2}$, lo spazio di reazione è $20\,\mathrm m$. La frenata dura $4\,\mathrm s$ e lo spazio è $\dfrac12\cdot4\cdot20\,\mathrm m=40\,\mathrm m$. Il veicolo si ferma dopo $5\,\mathrm s$ dall'osservazione del pericolo e percorre $60\,\mathrm m$ in totale.

::grafico{f="20-5*max(0,x-1)+0*sqrt(5-x)" area="20;0;0;1|25-5*x;0;1;5" xmin=0 xmax=5.5 ymin=0 ymax=23 punti="1,20,pieno,R;5,0,pieno" etichette="4.87,3,F" nomi="t (s),v (m/s)" titolo="Prima di R agisce il tempo di reazione. Da R a F avviene la frenata."}
:::

:::esempio{#reazione-inversa titolo="Risalire alla durata di una fase da una distanza totale"}
In una prova ideale un veicolo va a $16\,\mathrm{m/s}$ e frena con modulo di accelerazione $4\,\mathrm{m/s^2}$. La sola frenata occupa $\dfrac{16^2}{2\cdot4}=32\,\mathrm m$. Se la distanza misurata dalla segnalazione alla sosta è $48\,\mathrm m$, durante la reazione sono stati percorsi $48-32=16\,\mathrm m$. A velocità costante di $16\,\mathrm{m/s}$ questi metri corrispondono a $1\,\mathrm s$.

::grafico{f="32+16*x" xmin=0 xmax=2.2 ymin=0 ymax=70 punti="0,32,pieno;1,48,pieno;2,64,pieno" nomi="tᵣ (s),s (m)" legenda="s=32+16t_r" titolo="L'intercetta corrisponde alla sola frenata. La pendenza è la velocità nella fase di reazione."}

Una distanza totale inferiore a $32\,\mathrm m$ darebbe un tempo di reazione negativo. Una delle altre ipotesi del modello, per esempio il modulo costante della decelerazione, andrebbe quindi verificata con una misura indipendente.
:::

## Caduta e lancio verticale

:::teorema{#caduta titolo="Moto verticale vicino alla Terra"}
Trascurando l'aria e la variazione di gravità con la quota, l'accelerazione è verticale verso il basso. Se l'alto è positivo, $a=-g$. Si usa $g\simeq9{,}81\,\mathrm{m/s^2}$ vicino al suolo, oppure il valore indicato nel problema. Indicando con $y_0$ la quota iniziale e con $v_0$ la velocità iniziale con segno, le leggi sono
$$
v(t)=v_0-gt,\qquad y(t)=y_0+v_0t-\frac12gt^2.
$$
Per un corpo lasciato andare da fermo da altezza $h$ rispetto al suolo, $v_0=0$ e si cerca $y=0$. L'unica durata positiva è $t=\sqrt{\dfrac{2h}{g}}$. Per il lancio verso l'alto, nel punto più alto $v=0$. L'accelerazione in quell'istante rimane $-g$ e il corpo inizia a scendere. La durata per raggiungere il punto più alto è $\dfrac{v_0}{g}$ e il guadagno di quota è $\dfrac{v_0^2}{2g}$.
:::

:::esempio{titolo="Quote uguali a tempi diversi"}
Una pallina parte da $y_0=0$ con $v_0=20\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ si ha $y=20t-5t^2$, in metri. La quota $15\,\mathrm m$ si raggiunge risolvendo $20t-5t^2=15$, cioè $t^2-4t+3=0$. Le soluzioni sono $t=1\,\mathrm s$ e $t=3\,\mathrm s$. La velocità nei due istanti vale rispettivamente $+10$ e $-10\,\mathrm{m/s}$. Il punto più alto è a $t=2\,\mathrm s$ e $y=20\,\mathrm m$.

::grafico{f="20*x-5*x^2+0*sqrt(4-x)" xmin=0 xmax=4.5 ymin=0 ymax=22 punti="1,15,pieno,A;2,20,pieno,M;3,15,pieno,B" nomi="t (s),y (m)" titolo="A e B hanno la stessa quota. La pendenza cambia segno tra i due punti."}
:::

:::attenzione
La legge del moto verticale vale fino al contatto con il suolo. Proseguire la parabola al di sotto del suolo moltiplicherebbe i valori matematici del modello senza descrivere il corpo dopo l'urto. Nei problemi si verificano quindi l'istante richiesto e il dominio fisico prima di interpretare una soluzione dell'equazione.
:::

:::esempio{#radici-dominio titolo="Scegliere la radice che appartiene al moto osservato"}
Si lancia un oggetto verso l'alto da quota $15\,\mathrm m$ con velocità $10\,\mathrm{m/s}$. Con $g=10\,\mathrm{m/s^2}$ e aria trascurabile, la quota in metri vale $15+10t-5t^2$. Al suolo la quota è nulla. Dividendo l'equazione per $-5$ si ottiene $t^2-2t-3=0$, ossia $(t+1)(t-3)=0$.

La radice $t=-1\,\mathrm s$ precede il lancio e sta fuori dall'intervallo del modello. L'impatto avviene dopo $3\,\mathrm s$, con velocità $v=10-10\cdot3=-20\,\mathrm{m/s}$. Il segno indica la discesa e la rapidità è $20\,\mathrm{m/s}$. Il culmine si trova a $1\,\mathrm s$, fra lancio e impatto, dove la velocità si annulla ma la sua pendenza resta $-g$.

::grafico{f="10-10*x+0*sqrt(3-x)" xmin=0 xmax=3.2 ymin=-24 ymax=12 punti="0,10,pieno;1,0,pieno,M;3,-20,pieno" nomi="t (s),v (m/s)" legenda="v=10-10t" titolo="Il moto fisico comincia a t = 0 e termina al suolo a t = 3 s. Il punto M è il culmine."}
:::

:::osservazione{#asse-verticale titolo="L'orientamento dell'asse cambia i segni"}
Un oggetto è lanciato verso l'alto a $6\,\mathrm{m/s}$. Se l'asse è positivo verso il basso e $g=10\,\mathrm{m/s^2}$, si scrive $v_0=-6\,\mathrm{m/s}$ e $a=+10\,\mathrm{m/s^2}$. La velocità vale $v=-6+10t$ e si annulla per $t=0{,}6\,\mathrm s$. Orientando l'asse verso l'alto si avrebbe $v=6-10t$. I segni delle due espressioni sono opposti e lo zero si raggiunge nello stesso istante.
:::
