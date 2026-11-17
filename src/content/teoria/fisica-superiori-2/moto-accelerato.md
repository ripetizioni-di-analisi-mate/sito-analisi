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

## La legge della velocità

:::teorema{#velocita titolo="Velocità con accelerazione costante"}
Con accelerazione $a$ costante, $a$ coincide con il valore medio in ogni intervallo. Se $v_0$ è la velocità all'inizio e $t$ il tempo trascorso da quell'istante, moltiplicando per $t$ si ricava
$$
v(t)=v_0+at.
$$
Il grafico velocità-tempo è quindi una retta. La pendenza è $a$ e il valore a $t=0$ è $v_0$. Con $a=0$ la retta è orizzontale e si ritrova il moto uniforme. Quando $v$ e $a$ hanno lo stesso segno, il modulo della velocità cresce. Quando hanno segno opposto, diminuisce finché il corpo raggiunge eventualmente $v=0$.
:::

:::esempio{titolo="Una velocità che cambia segno"}
Per un carrello con $v_0=6\,\mathrm{m/s}$ e $a=-2\,\mathrm{m/s^2}$ si ha $v=6-2t$, in unità SI. In tre secondi raggiunge velocità nulla. Se l'accelerazione resta attiva dopo quell'istante, il carrello procede nel verso negativo. A $t=5\,\mathrm{s}$ la velocità è $-4\,\mathrm{m/s}$. In questo secondo tratto il modulo aumenta perché velocità e accelerazione sono entrambe negative.

::grafico{f="6-2*x" xmin=0 xmax=5 ymin=-5 ymax=7 punti="0,6,pieno,A;3,0,pieno,B;5,-4,pieno,C" nomi="t (s),v (m/s)" titolo="B è l'inversione. Prima di B la rapidità diminuisce; dopo B aumenta."}
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

## Frenata e tempo di reazione

:::osservazione{#frenata titolo="Il tratto fino all'arresto"}
Si sceglie positivo il verso iniziale del veicolo e si indica con $b>0$ il modulo della decelerazione. Se la frenata avviene con $a=-b$ costante fino alla sosta, ponendo $v=0$ si trova $t_a=\dfrac{v_0}{b}$. Nello stesso tratto la relazione senza tempo dà lo spazio di frenata $s_f=\dfrac{v_0^2}{2b}$. Il modello di frenata termina alla sosta, salvo che un'altra forza faccia poi invertire il moto. L'estensione della stessa retta velocità-tempo dopo l'arresto descriverebbe una retromarcia artificiale.

Prima dell'azione dei freni, il conducente ha un tempo di reazione $t_r$. Nel modello a due fasi il veicolo mantiene $v_0$ durante la reazione e percorre $s_r=v_0t_r$. La distanza totale è $s_r+s_f$. Raddoppiando $v_0$ a parità di $b$ e $t_r$, lo spazio di reazione raddoppia, mentre quello di frenata quadruplica.
:::

:::esempio{titolo="Un rettangolo e un triangolo nella distanza totale"}
Con $v_0=20\,\mathrm{m/s}$, $t_r=1\,\mathrm{s}$ e $b=5\,\mathrm{m/s^2}$, lo spazio di reazione è $20\,\mathrm m$. La frenata dura $4\,\mathrm s$ e lo spazio è $\dfrac12\cdot4\cdot20\,\mathrm m=40\,\mathrm m$. Il veicolo si ferma dopo $5\,\mathrm s$ dall'osservazione del pericolo e percorre $60\,\mathrm m$ in totale.

::grafico{f="20-5*max(0,x-1)" area="20;0;0;1|25-5*x;0;1;5" xmin=0 xmax=5 ymin=0 ymax=23 punti="1,20,pieno,R;5,0,pieno,F" nomi="t (s),v (m/s)" titolo="Prima di R agisce il tempo di reazione. Da R a F avviene la frenata."}
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

::grafico{f="20*x-5*x^2" xmin=0 xmax=4 ymin=0 ymax=22 punti="1,15,pieno,A;2,20,pieno,M;3,15,pieno,B" nomi="t (s),y (m)" titolo="A e B hanno la stessa quota. La pendenza cambia segno tra i due punti."}
:::

:::attenzione
La legge del moto verticale vale fino al contatto con il suolo. Proseguire la parabola al di sotto del suolo moltiplicherebbe i valori matematici del modello senza descrivere il corpo dopo l'urto. Nei problemi si verificano quindi l'istante richiesto e il dominio fisico prima di interpretare una soluzione dell'equazione.
:::
