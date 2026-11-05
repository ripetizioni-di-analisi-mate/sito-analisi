---
titolo: Leggi del moto ed equilibrio
sommario: Come le forze determinano l'accelerazione, quando un corpo rimane in equilibrio e come si calcolano reazioni, tensioni e attriti con le leggi di Newton.
---

## Il corpo studiato e le forze esterne

:::definizione{#punto-materiale titolo="Il modello di punto materiale"}
Per studiare il movimento di un corpo si possono trascurare le sue dimensioni quando la sua rotazione e la sua forma hanno un'influenza trascurabile sul problema. Il corpo viene allora rappresentato da un **punto materiale**, che ha la massa del corpo.

Un carrello che avanza lungo un binario rettilineo può essere descritto mediante la posizione del suo centro. Questo modello permette di calcolare la sua accelerazione senza studiare come ruotano le ruote. Se interessa il ribaltamento del carrello, occorre invece considerare anche le dimensioni e i punti di applicazione delle forze.

Le **forze esterne** sono le forze esercitate sul corpo studiato dagli altri corpi. Su un libro appoggiato su un tavolo agiscono la forza peso esercitata dalla Terra e la forza di sostegno esercitata dal tavolo. L'elenco dipende quindi da quale corpo si sta studiando.
:::

:::definizione{#risultante titolo="Risultante delle forze"}
La **risultante** $\vec R$ delle forze applicate a un corpo è la loro somma vettoriale. Per due forze si scrive
$$
\vec R=\vec F_1+\vec F_2.
$$
Lungo un asse si sommano le componenti con il loro segno. Se una forza vale $8\,\mathrm{N}$ verso destra e un'altra $3\,\mathrm{N}$ verso sinistra, scegliendo positivo verso destra si ha $R_x=8-3=5\,\mathrm{N}$. Il verso della risultante è dunque verso destra.

Il disegno delle sole forze che agiscono sul corpo studiato si chiama **diagramma delle forze**. Ogni freccia indica un'azione sullo stesso corpo; la freccia della risultante rappresenta la loro somma e non un'ulteriore interazione.

::grafico{assi=0 uguale=1 poligoni="-0.5,-0.4 0.5,-0.4 0.5,0.4 -0.5,0.4" vettori="0,0,4,0,F₁ = 8 N;0,0,-1.5,0,F₂ = 3 N" xmin=-2.5 xmax=5 ymin=-1.5 ymax=1.5 titolo="Sul corpo agiscono due forze opposte: la risultante ha modulo $5\,\mathrm{N}$ e verso a destra; un'unità del disegno corrisponde a $2\,\mathrm{N}$"}
:::

## Il primo principio

:::definizione{#riferimento-inerziale titolo="Sistema di riferimento inerziale"}
Un **sistema di riferimento inerziale** è un riferimento nel quale un corpo con risultante delle forze nulla mantiene velocità costante. Può quindi rimanere fermo oppure muoversi lungo una retta senza cambiare velocità.

Per i moti di breve durata e su distanze limitate considerati qui, il riferimento solidale con il suolo viene trattato come inerziale. Anche un riferimento che si sposta con velocità costante, senza ruotare, rispetto a un riferimento inerziale è inerziale. Un autobus che sta frenando è invece un riferimento accelerato, e le leggi scritte rispetto al suolo non si trasferiscono a esso nella stessa forma senza ulteriori termini.
:::

:::teorema{#primo-principio titolo="Primo principio della dinamica"}
Esistono riferimenti inerziali. In un riferimento inerziale, se la risultante delle forze su un corpo è nulla, la sua velocità rimane costante. Questo enunciato è il **principio d'inerzia**, una legge sperimentale della meccanica.

Per esempio, un carrello che si muove a $2\,\mathrm{m/s}$ su un binario orizzontale e subisce una risultante nulla continua a muoversi a $2\,\mathrm{m/s}$. Nello stesso intervallo un carrello inizialmente fermo, sempre con risultante nulla, rimane fermo. La differenza fra i due moti dipende dalla velocità iniziale.

Un oggetto che scivola sul pavimento normalmente rallenta perché il pavimento e l'aria esercitano forze resistenti. La diminuzione della velocità indica quindi la presenza di una risultante opposta al moto.
:::

## Il secondo principio

:::teorema{#secondo-principio titolo="Forza risultante e accelerazione"}
In un riferimento inerziale, per un corpo di massa costante $m$, la risultante delle forze è uguale al prodotto della massa per l'accelerazione,
$$
\vec R=m\vec a.
$$
È il **secondo principio della dinamica**, una legge sperimentale. L'accelerazione ha la stessa direzione e lo stesso verso della risultante, perché la massa è positiva. Lungo un asse la relazione diventa $R_x=ma_x$.

La massa misura quanto cambia la velocità sotto l'azione di una forza assegnata. Con la stessa risultante, una massa maggiore produce un'accelerazione minore. Infatti
$$
a_x=\frac{R_x}{m}.
$$
Per una risultante orizzontale di $12\,\mathrm{N}$, una massa di $3\,\mathrm{kg}$ ha accelerazione $4\,\mathrm{m/s^2}$, mentre una massa di $6\,\mathrm{kg}$ ha accelerazione $2\,\mathrm{m/s^2}$. L'unità di forza soddisfa la relazione $1\,\mathrm{N}=1\,\mathrm{kg\cdot m/s^2}$.
:::

:::esempio{titolo="Due forze opposte su un carrello"}
Un carrello di massa $2\,\mathrm{kg}$ riceve una forza di $10\,\mathrm{N}$ verso destra e una forza di $4\,\mathrm{N}$ verso sinistra. Il binario è orizzontale e le forze verticali si compensano. Orientando l'asse verso destra si ottiene
$$
\begin{aligned}
R_x&=10\,\mathrm{N}-4\,\mathrm{N}=6\,\mathrm{N},\\[6pt]
a_x&=\frac{6\,\mathrm{N}}{2\,\mathrm{kg}}=3\,\mathrm{m/s^2}.
\end{aligned}
$$
Se il carrello parte da fermo e le forze restano costanti per $2\,\mathrm{s}$, la legge $v=v_0+at$ dà $v=6\,\mathrm{m/s}$. Si usa quindi la dinamica per trovare l'accelerazione e la legge del moto accelerato per trovare la velocità.
:::


:::osservazione{titolo="Dalla situazione fisica all'equazione del moto"}
Per scrivere l'equazione di un corpo si individuano prima gli oggetti con cui esso interagisce. La Terra esercita il peso, una superficie di appoggio può esercitare una reazione normale e un attrito, un filo teso esercita una tensione. Ogni forza nel diagramma corrisponde quindi a un'interazione fisica riconosciuta.

Si sceglie poi un asse e si attribuisce il segno a ciascuna componente. Il modulo della forza resta positivo; la componente può essere negativa se la forza è nel verso opposto all'asse. Per il carrello dell'esempio, scegliendo invece positivo verso sinistra si avrebbe $R_x=-6\,\mathrm{N}$ e $a_x=-3\,\mathrm{m/s^2}$. Entrambe le descrizioni indicano una risultante e un'accelerazione verso destra.

La velocità iniziale completa la descrizione del moto. Lo stesso carrello, se inizialmente si muovesse verso sinistra, rallenterebbe finché la sua velocità si annulla; se la risultante rimanesse poi verso destra, il moto proseguirebbe verso destra. La direzione dell'accelerazione deriva dalle forze, mentre la direzione del movimento dipende anche da come il corpo si muoveva all'inizio.
:::

## Il terzo principio

:::teorema{#terzo-principio titolo="Le forze di un'interazione"}
Se un corpo $A$ esercita una forza su un corpo $B$, il corpo $B$ esercita contemporaneamente su $A$ una forza di uguale modulo, stessa direzione e verso opposto. Indicando esplicitamente chi esercita e chi riceve ciascuna forza, si scrive
$$
\vec F_{A\to B}=-\vec F_{B\to A}.
$$
È il **terzo principio della dinamica**, una legge sperimentale. Le due forze agiscono su corpi diversi.

Se una mano spinge una parete con una forza di $20\,\mathrm{N}$, la parete esercita sulla mano una forza di $20\,\mathrm{N}$ nel verso opposto. Nel diagramma delle forze della mano compare la forza della parete sulla mano; nel diagramma della parete compare quella della mano sulla parete.
:::

:::attenzione{titolo="Forze uguali e opposte su corpi diversi"}
Le due forze di un'interazione non si annullano nel diagramma di un solo corpo. Due carrelli di massa $2\,\mathrm{kg}$ e $4\,\mathrm{kg}$, su un binario senza attrito, interagiscono tramite una molla che esercita $8\,\mathrm{N}$ su ciascuno. I moduli delle accelerazioni sono $4\,\mathrm{m/s^2}$ e $2\,\mathrm{m/s^2}$, in versi opposti. Le forze hanno lo stesso modulo, ma le masse diverse producono accelerazioni diverse.
:::

## Equilibrio e reazione del piano

:::teorema{#equilibrio titolo="Equilibrio del punto materiale"}
La **condizione di equilibrio** del punto materiale è che la risultante delle forze sia nulla. La sua accelerazione è allora nulla. Se è inizialmente fermo, rimane in **equilibrio statico**. Se ha una velocità iniziale non nulla, mantiene quella velocità e si parla di equilibrio dinamico.

Per un problema nel piano le componenti devono annullarsi entrambe,
$$
\begin{cases}
R_x=0,\\[4pt]
R_y=0.
\end{cases}
$$
Per esempio, se un corpo riceve $7\,\mathrm{N}$ verso destra e deve rimanere fermo, una seconda forza orizzontale deve avere componente $-7\,\mathrm{N}$. Questa condizione riguarda il punto materiale; per un corpo esteso di cui si studia anche la rotazione servono ulteriori condizioni sui momenti delle forze.
:::

:::definizione{#reazione-normale titolo="Reazione normale"}
Un piano che sostiene un corpo esercita su di esso una forza perpendicolare alla superficie, chiamata **reazione normale**. Il suo modulo si indica con $N$. La parola normale significa perpendicolare.

Un libro in quiete su un piano orizzontale è soggetto al peso $P=mg$ verso il basso e alla reazione $N$ verso l'alto. Scegliendo positivo verso l'alto, l'equilibrio dà
$$
N-mg=0,
\qquad N=mg.
$$
Per un libro di massa $1\,\mathrm{kg}$, con $g=9{,}81\,\mathrm{m/s^2}$, la reazione vale $9{,}81\,\mathrm{N}$. Il peso e la reazione agiscono sullo stesso libro, quindi si compensano. La forza opposta al peso secondo il terzo principio è invece l'attrazione esercitata dal libro sulla Terra.

::grafico{assi=0 uguale=1 linee="-3,-0.5 3,-0.5" poligoni="-0.8,-0.5 0.8,-0.5 0.8,0.5 -0.8,0.5" vettori="0,0,0,2.2,N;0,0,0,-2.2,P" xmin=-3.5 xmax=3.5 ymin=-3 ymax=3 titolo="Diagramma delle forze di un corpo in quiete su un piano orizzontale: reazione normale e peso hanno uguale modulo e versi opposti"}
:::

:::osservazione{titolo="La reazione dipende dalle altre forze"}
Se sul libro si esercita anche una forza verticale $F$ verso il basso, l'equilibrio dà $N-mg-F=0$, quindi $N=mg+F$. Per esempio, con massa $1\,\mathrm{kg}$ e $F=3\,\mathrm{N}$, si ottiene $N=12{,}81\,\mathrm{N}$. Nel caso con il solo peso e la reazione lungo la verticale, la relazione $N=mg$ segue dall’accelerazione verticale nulla. In generale la reazione si ricava dall’equazione del moto includendo tutte le forze verticali. Un contatto ordinario può spingere il corpo; un valore negativo di $N$ segnalerebbe che l'ipotesi di contatto va riesaminata.
:::

## La tensione di un filo

:::definizione{#tensione titolo="Tensione"}
Un filo teso esercita una forza lungo la propria direzione, rivolta verso il filo. Il suo modulo si chiama **tensione** e si indica con $T$. Nel modello di filo ideale si trascurano la massa e l'allungamento del filo; se il filo passa su una carrucola ideale, si trascurano anche la massa e l'attrito della carrucola.

Per una massa appesa a un solo filo verticale, le forze sono la tensione verso l'alto e il peso verso il basso. Quando il corpo è fermo o si muove a velocità costante, si ha $T=mg$. Se accelera verticalmente, scegliendo positivo verso l'alto si ha invece
$$
T-mg=ma,
\qquad T=m(g+a).
$$
Per una massa di $2\,\mathrm{kg}$ che accelera verso l'alto a $1\,\mathrm{m/s^2}$, con $g=9{,}81\,\mathrm{m/s^2}$, la tensione è $21{,}62\,\mathrm{N}$. Il valore maggiore del peso produce la risultante verso l'alto.

::grafico{assi=0 uguale=1 linee="-2,2.8 2,2.8;0,2.8 0,0.5" poligoni="-0.5,-0.5 0.5,-0.5 0.5,0.5 -0.5,0.5" vettori="0,0,0,2,T;0,0,0,-1.5,P" xmin=-2.5 xmax=2.5 ymin=-2.5 ymax=3.2 titolo="Una massa appesa accelera verso l'alto quando la tensione supera il peso; le frecce indicano le sole forze sulla massa"}
:::

## L'attrito statico

:::definizione{#attrito-statico titolo="Attrito fra superfici ferme l'una rispetto all'altra"}
L'**attrito statico** è una forza tangente alla superficie di contatto che può impedire l'inizio dello scorrimento. Il suo modulo si adatta alla forza necessaria per mantenere l'assenza di scorrimento, fino a un valore massimo. Nel modello usato qui,
$$
0\leq F_s\leq\mu_sN.
$$
Il numero $\mu_s$ è il **coefficiente di attrito statico**; dipende dalle superfici e non ha unità di misura. Il massimo attrito statico è $F_{s,\max}=\mu_sN$.

Una cassa su un piano orizzontale, tirata orizzontalmente con $5\,\mathrm{N}$ e ancora ferma, riceve un attrito di $5\,\mathrm{N}$ nel verso opposto. Se $\mu_sN=12\,\mathrm{N}$, questo equilibrio è possibile perché $5\leq12$. Il valore $12\,\mathrm{N}$ è il limite disponibile; l'attrito effettivo nella situazione descritta è $5\,\mathrm{N}$.

Quando la forza richiesta per mantenere la quiete supera il limite, la cassa comincia a scorrere. L'uguaglianza corrisponde alla condizione limite del modello statico.
:::

## Attrito dinamico e accelerazione

:::definizione{#attrito-dinamico titolo="Attrito durante lo scorrimento"}
Quando le superfici scorrono l'una rispetto all'altra, il modello di **attrito dinamico** assegna alla forza di attrito il modulo
$$
F_d=\mu_dN,
$$
dove $\mu_d$ è il coefficiente di attrito dinamico. La forza è opposta allo scorrimento relativo. La formula descrive un modello approssimato, adatto ai problemi in cui i coefficienti vengono considerati costanti.

Su un piano orizzontale, con una forza di traino orizzontale $F$, senza altre forze verticali e con accelerazione verticale nulla, si ha $N=mg$. Se il corpo scivola verso destra e $F$ è diretta verso destra, scegliendo positivo verso destra il secondo principio dà
$$
F-\mu_dmg=ma.
$$
Per una cassa di $5\,\mathrm{kg}$, con $\mu_d=0{,}20$, forza $F=20\,\mathrm{N}$ e usando qui $g=10\,\mathrm{m/s^2}$, l'attrito vale $10\,\mathrm{N}$. La risultante è quindi $10\,\mathrm{N}$ e l'accelerazione è $2\,\mathrm{m/s^2}$.

::grafico{assi=0 uguale=1 linee="-3,-0.5 3,-0.5" poligoni="-0.6,-0.5 0.6,-0.5 0.6,0.5 -0.6,0.5" vettori="0,0,2,0,F;0,0,-1,0,Fd;0,0,0,5,N;0,0,0,-5,P" xmin=-3.5 xmax=3.5 ymin=-6 ymax=6 titolo="Corpo che scivola verso destra su un piano: l'attrito dinamico è verso sinistra, mentre peso e reazione si compensano"}
:::

:::osservazione{titolo="Frenata per solo attrito"}
Se il traino viene tolto mentre il corpo scivola verso destra, la risultante orizzontale è $-\mu_dmg$. Dividendo per la massa si ricava $a=-\mu_dg$, finché lo scorrimento continua. Con $\mu_d=0{,}20$ e $g=10\,\mathrm{m/s^2}$, l'accelerazione è $-2\,\mathrm{m/s^2}$. Dopo l'arresto si considera nuovamente la situazione statica; il modello della frenata non descrive un successivo moto spontaneo all'indietro.
:::
