---
titolo: Immunizzazione finanziaria e gestione del rischio di tasso
sommario: Valori attuali, duration e convexity per coprire impegni futuri e misurare l'effetto di uno spostamento dei tassi.
---

## Attività e passività

:::definizione{#valore-netto titolo="Valori attuali e surplus"}
Un portafoglio destinato a finanziare impegni futuri comprende **attività**, cioè incassi da ricevere, e **passività**, cioè importi da pagare. Si valutano i due insiemi di flussi alla stessa data e con la stessa legge finanziaria. Nel modello di questo capitolo gli importi sono certi e le scadenze, misurate in anni dalla data di valutazione, sono fissate. Il fattore di sconto per la data $t$ è $e^{-\delta t}$, dove $\delta$ è la forza annua, comune a tutte le scadenze.

Se $a_k>0$ è un incasso al tempo $t_k$ e $\ell_j>0$ un pagamento al tempo $u_j$, i valori attuali sono
$$
\begin{aligned}
A(\delta)&=\sum_k a_k e^{-\delta t_k},\\[6pt]
L(\delta)&=\sum_j \ell_j e^{-\delta u_j}.
\end{aligned}
$$

Il **surplus** è $S(\delta)=A(\delta)-L(\delta)$. Un surplus positivo indica un'eccedenza in valore attuale alla forza considerata. Se $\delta_0$ è la forza di riferimento e $S(\delta_0)=0$, il portafoglio copre esattamente il valore attuale degli impegni a quella forza. Il valore di $S$ a una forza diversa permette di valutare quanto regga la copertura al variare dei tassi.
:::

:::esempio{titolo="Valori uguali a una stessa data"}
Una passività richiede $1210\,\mathrm{euro}$ al tempo $2$. La forza annua è $\delta_0=\log(1{,}1)$, quindi l'effettivo annuo è il $10\%$. Il valore attuale è $1210(1{,}1)^{-2}=1000\,\mathrm{euro}$. Un titolo che paga $1100\,\mathrm{euro}$ al tempo $1$ vale anch'esso $1000\,\mathrm{euro}$. La copertura è esatta a $\delta_0$ e l'incasso precede la scadenza del debito. Per pagare al tempo $2$ occorre capitalizzare il ricavo del titolo per un anno.
:::

:::osservazione
La **forza** $\delta$ e il **tasso effettivo annuo** $i$ sono legati da $1+i=e^\delta$. Se la variazione riguarda $\delta$, il nuovo sconto per la scadenza $t$ si ottiene moltiplicando il vecchio per $e^{-ht}$, dove $h$ è la variazione della forza. Se la variazione riguarda $i$, si usa invece il rapporto $\left(\dfrac{1+i_0}{1+i_0+\Delta i}\right)^t$, dove $i_0$ è il tasso iniziale e $\Delta i$ è la sua variazione. I due rapporti coincidono quando $\Delta i=(1+i_0)(e^h-1)$. La scelta del parametro determina quindi il significato della derivata e l'unità in cui si misura lo shock.
:::

## Corrispondenza delle duration

::::teorema{#duration-matching titolo="Annullamento della sensibilità del surplus"}
Si considerino flussi certi positivi su entrambe le parti del bilancio. A una forza comune $\delta$, la **duration di Macaulay** è la media delle scadenze pesata con i valori attuali. Per le attività si ha
$$
D_A(\delta)=\frac{\sum_k t_k a_k e^{-\delta t_k}}{A(\delta)}.
$$
La duration $D_L$ delle passività si ottiene con le date $u_j$ e gli importi $\ell_j$. Rispetto alla forza, le derivate dei valori attuali soddisfano
$$
S'(\delta)=-A(\delta)D_A(\delta)+L(\delta)D_L(\delta).
$$
Se $A(\delta_0)=L(\delta_0)>0$, allora $S'(\delta_0)=0$ se e solo se $D_A(\delta_0)=D_L(\delta_0)$. Le due uguaglianze fissano il valore iniziale e annullano il termine lineare dello sviluppo del surplus.

:::dimostrazione
Il tasso varia insieme per tutte le scadenze, quindi si può derivare ciascun termine della somma rispetto alla stessa variabile. La derivata di $a_k e^{-\delta t_k}$ è $-t_k a_k e^{-\delta t_k}$. Sommando e raccogliendo $A$ si ottiene $A'=-AD_A$. Per lo stesso motivo $L'=-LD_L$, quindi si ricava l'espressione per $S'$. Quando i due valori attuali coincidono, si ha $S'=L(D_L-D_A)$. Poiché $L>0$, il prodotto si annulla esattamente quando le duration coincidono.
:::
::::

:::esempio{titolo="Stessa spesa iniziale e sensibilità diverse"}
Alla forza iniziale un'attività vale $1000\,\mathrm{euro}$ e ha duration di un anno. Un impegno di pari valore ha duration di due anni. La derivata del surplus rispetto alla forza è
$$
-1000\cdot1+1000\cdot2=1000.
$$
Per un aumento di forza di $0{,}001\,\mathrm{anno}^{-1}$, il termine lineare è $1\,\mathrm{euro}$. Il valore di entrambe le parti scende. A primo ordine scende di più il valore della passività, perché i suoi incassi equivalenti sono collocati più lontano nel tempo.
:::

:::osservazione
Se il parametro comune è il tasso effettivo $i>-1$, il valore $A(i)$ si calcola con i fattori $(1+i)^{-t_k}$. La regola di derivazione dà $A'(i)=-A(i)D_A(i)(1+i)^{-1}$. Si chiama **duration modificata** rispetto a $i$ il rapporto $\dfrac{D_A(i)}{1+i}$. Per confrontare le derivate si usano duration calcolate allo stesso tasso comune. Se $i$ è assegnato per semestre, le scadenze si misurano in semestri e la derivata è rispetto alla variazione del tasso semestrale.
:::

## Portafoglio di due zero coupon

::::teorema{#portafoglio-due-titoli titolo="Valori da investire nei due titoli"}
Un titolo **zero coupon** paga un solo rimborso alla scadenza, quindi la sua duration è la scadenza stessa. Siano $T_1<T_2$ le scadenze dei due titoli disponibili e $X_1,X_2$ i capitali investiti oggi. Si desidera coprire una passività di valore attuale $L_0>0$ e duration $D_L$ alla forza iniziale. Le condizioni di valore e duration formano il sistema
$$
\begin{cases}
X_1+X_2=L_0,\\
T_1X_1+T_2X_2=D_LL_0.
\end{cases}
$$
Esiste un'unica soluzione. Ponendo $w_r=\dfrac{X_r}{L_0}$ per $r=1,2$, si ha
$$
w_1=\frac{T_2-D_L}{T_2-T_1},\qquad
w_2=\frac{D_L-T_1}{T_2-T_1}.
$$
Entrambe le quote sono non negative esattamente quando $T_1\leq D_L\leq T_2$. In caso di uguaglianza con un estremo, tutto il capitale viene investito nel titolo che scade a quell'estremo.

:::dimostrazione
Si moltiplica la prima equazione per $T_1$ e la si sottrae alla seconda. Si ricava $(T_2-T_1)X_2=(D_L-T_1)L_0$. Poiché $T_2-T_1>0$, si ottiene un solo valore di $X_2$ e dunque un solo valore di $X_1=L_0-X_2$. Dividendo per $L_0$ si ricavano le quote. I segni delle quote dipendono dai numeratori, perché i denominatori sono entrambi positivi.
:::
::::

:::esempio{titolo="Dai capitali investiti ai rimborsi"}
Un impegno ha valore attuale $1200\,\mathrm{euro}$ e duration di $3$ anni. I titoli disponibili scadono tra $2$ e $6$ anni. La quota del titolo lungo vale $\dfrac{3-2}{6-2}=\dfrac14$. I due capitali investiti sono quindi $900\,\mathrm{euro}$ e $300\,\mathrm{euro}$. Se l'effettivo annuo è il $10\%$, il rimborso del primo titolo è $900(1{,}1)^2=1089\,\mathrm{euro}$. Il rimborso del secondo è $300(1{,}1)^6\,\mathrm{euro}$. Per tornare ai capitali investiti si sconta ogni rimborso per la propria durata. Il sistema delle duration usa questi capitali, cioè valori alla stessa data.
:::

:::osservazione
Con $T_1=2$, $T_2=6$ e $D_L=7$ si trova $w_1=-\dfrac14$ e $w_2=\dfrac54$. La soluzione algebrica prevede una posizione corta nel titolo breve e l'investimento del ricavato nel titolo lungo. La fattibilità di tale soluzione dipende dalle operazioni ammesse. Se il problema consente soltanto acquisti, una duration di sette anni è fuori dall'intervallo raggiungibile con quei due titoli.
:::

## Convexity e dispersione delle scadenze

:::definizione{#convexity-matching titolo="Sensibilità di secondo ordine"}
La **convexity** rispetto alla forza $\delta$ è il rapporto fra la derivata seconda del valore e il valore stesso. Per le attività, derivando una seconda volta i flussi attualizzati, si ottiene
$$
C_A(\delta)=\frac{A''(\delta)}{A(\delta)}
           =\frac{\sum_k t_k^2a_ke^{-\delta t_k}}{A(\delta)}.
$$
È la media pesata dei quadrati delle scadenze e si misura in anni quadrati. Il rapporto $C_L(\delta)=\dfrac{L''(\delta)}{L(\delta)}$ si calcola allo stesso modo. Dall'uguaglianza dei valori attuali alla forza iniziale segue
$$
S''(\delta_0)=L_0(C_A(\delta_0)-C_L(\delta_0)).
$$
Il secondo ordine dipende quindi dalla **differenza di convexity** fra le due parti, pesata per il valore comune.
:::

:::esempio{titolo="Portafogli con la stessa scadenza media"}
Una passività è concentrata al tempo $3$ e ha valore attuale di $1000\,\mathrm{euro}$. Un portafoglio investe $500\,\mathrm{euro}$ al tempo zero in ciascuno di due titoli zero coupon che scadono ai tempi $1$ e $5$. La duration delle attività è $\dfrac{1+5}{2}=3$ anni. Le convexity sono
$$
C_A=\frac{1^2+5^2}{2}=13\,\mathrm{anni}^2,\qquad
C_L=3^2=9\,\mathrm{anni}^2.
$$
Il surplus ha derivata seconda pari a $1000(13-9)=4000$ rispetto alla forza. La passività ha un'unica data, quindi la sua varianza delle scadenze è zero. Per le attività la varianza è $13-3^2=4\,\mathrm{anni}^2$. In generale la convexity è la somma della varianza e della duration al quadrato, perciò a duration uguali il confronto riguarda la dispersione delle date.
:::

:::osservazione
Se si deriva rispetto a $i$ invece che a $\delta$, la derivata seconda di un fattore $(1+i)^{-t}$ è $t(t+1)(1+i)^{-t-2}$. La convexity rispetto a $i$ è quindi $\dfrac{C+D}{(1+i)^2}$, dove $C$ e $D$ sono calcolati con i pesi di valore allo stesso tasso. Se i valori e le duration delle due parti coincidono, il confronto fra le convexity rispetto a $i$ ha lo stesso segno di quello rispetto a $\delta$. Il termine lineare aggiuntivo in $D$ si cancella nella differenza.
:::

## Condizioni di Redington

::::teorema{#redington titolo="Minimo locale del surplus"}
Sia $S$ due volte continuamente derivabile in un intorno della forza di riferimento $\delta_0$. Se valgono simultaneamente le condizioni
$$
\begin{cases}
S(\delta_0)=0,\\
S'(\delta_0)=0,\\
S''(\delta_0)>0,
\end{cases}
$$
allora $\delta_0$ è un minimo locale stretto di $S$. Esiste quindi un intervallo attorno a $\delta_0$ nel quale il surplus è positivo per ogni spostamento parallelo della forza diverso da zero. A partire dai flussi, si controllano nell'ordine il valore iniziale, la duration e la convexity. Con valori e duration uguali, la condizione stretta equivale a $C_A>C_L$.

:::dimostrazione
Si applica lo sviluppo di Taylor intorno a $\delta_0$ per isolare il primo termine che può stabilire il segno del surplus. Se $h$ è lo spostamento della forza, allora
$$
S(\delta_0+h)=\frac12 S''(\delta_0)h^2+o(h^2).
$$
Il rapporto fra il resto e $h^2$ tende a zero. Poiché $S''(\delta_0)>0$, esiste un intorno in cui il valore assoluto del resto è inferiore a $\dfrac14 S''(\delta_0)h^2$. Per $h\ne0$ in quell'intorno segue $S(\delta_0+h)>0$.
:::
::::

:::esempio{titolo="Il surplus per due shock opposti"}
Si riprenda il portafoglio con valori attuali $500\,\mathrm{euro}$ ai tempi $1$ e $5$ e debito di valore attuale $1000\,\mathrm{euro}$ al tempo $3$. Per uno spostamento $h$ dalla forza iniziale, ciascun valore attuale viene moltiplicato per il nuovo fattore relativo, quindi
$$
S(\delta_0+h)=500e^{-h}+500e^{-5h}-1000e^{-3h}.
$$
Il termine quadratico è $2000h^2$. Uno spostamento di $0{,}01\,\mathrm{anno}^{-1}$ in qualunque dei due versi dà una stima di $0{,}20\,\mathrm{euro}$. In questo caso il segno esatto si ricava raccogliendo $500e^{-3h}$ e applicando la disuguaglianza $e^{2h}+e^{-2h}\geq2$. La positività per qualunque $h\ne0$ segue dalla forma particolare dei flussi.
:::

::grafico{f="500*exp(-x)+500*exp(-5*x)-1000*exp(-3*x);2000*x^2" xmin=-0.12 xmax=0.12 ymin=-6 ymax=49 nomi="h,euro" etichette="-0.111,-4.2,−0,1;0.093,-4.2,0,1" segmenti="-0.1,-0.7,-0.1,0.7;0.1,-0.7,0.1,0.7" legenda="S(\delta_0+h);2000h^2" punti="0,0,pieno" titolo="Surplus esatto e approssimazione quadratica per uno spostamento parallelo della forza"}

:::attenzione
L'uguaglianza delle convexity lascia il segno da studiare. Si considerino, alla forza iniziale, attività con valori $3$ euro al tempo $1$ e $1$ euro al tempo $3$, e passività con valori $1$ euro al tempo $0$ e $3$ euro al tempo $2$. Entrambi i valori totali sono $4$ euro, entrambe le somme pesate delle date sono $6$ e quelle dei quadrati sono $12$. Il surplus è però $(e^{-h}-1)^3$, quindi cambia segno attraversando $h=0$. Le prime due derivate nulle lasciano un termine cubico.
:::

## Prezzo e reinvestimento all'orizzonte

::::teorema{#rischio-reinvestimento titolo="Sensibilità del valore alla data obiettivo"}
Siano $c_k>0$ gli importi di un portafoglio di flussi certi con scadenze $t_k$. Si considera l'orizzonte $H$ e si assume che lo shock avvenga subito, porti la forza al livello piatto $\delta$ e la lasci a quel livello per tutti i trasferimenti. Il valore alla data obiettivo è
$$
W_H(\delta)=\sum_k c_ke^{\delta(H-t_k)}.
$$
I flussi precedenti a $H$ vengono reinvestiti fino all'orizzonte, quelli successivi si valutano a $H$. Un flusso esattamente al tempo $H$ entra per l'importo nominale. Se $D$ è la duration dei flussi alla data iniziale, si ha $W_H'=(H-D)W_H$. Alla forza iniziale, la sensibilità di primo ordine è nulla esattamente quando $D=H$.

:::dimostrazione
Per una scadenza precedente a $H$ l'esponente $\delta(H-t_k)$ descrive un montante. Per una scadenza successiva descrive uno sconto. Raccogliendo $e^{\delta H}$ nella somma si ha $W_H=e^{\delta H}V$, dove $V$ è il valore attuale dei flussi. Derivando il prodotto e usando $V'=-VD$ si ottiene $W_H'=e^{\delta H}(HV-VD)=(H-D)W_H$. Poiché $W_H>0$, il segno dipende da $H-D$.
:::
::::

:::esempio{titolo="Due flussi ai lati dell'orizzonte"}
Con forza iniziale nulla, un portafoglio paga $400\,\mathrm{euro}$ tra un anno e $400\,\mathrm{euro}$ tra tre anni. Per $H=2$ si ha $W_2(\delta)=400e^\delta+400e^{-\delta}$. Il primo termine cresce con la forza, poiché descrive il reinvestimento del primo rimborso. Il secondo diminuisce, perché al tempo $2$ si sconta il rimborso del tempo $3$. Alla forza iniziale i due contributi alla derivata sono $400$ e $-400$, quindi la sensibilità lineare si annulla.
:::

:::osservazione
Il valore all'orizzonte descrive il ricavo di una strategia che può reinvestire gli incassi e liquidare i titoli residui secondo la stessa curva piatta. Se i tassi di reinvestimento effettivi variano durante il percorso, si devono specificare anche quelli. Un importo già disponibile a $H$ resta invariato rispetto alla forza usata per trasferire flussi tra date diverse.
:::

## Riequilibrio a una nuova data

:::definizione{#riequilibrio titolo="Nuovi valori e scadenze residue"}
Si rivaluti il portafoglio a una data $s>0$. I pagamenti già regolati escono dal calcolo. Gli incassi già ricevuti contano nella misura in cui sono ancora presenti, per esempio come cassa al tempo $s$. I flussi futuri alle date originarie $t_k>s$ si attualizzano usando le scadenze residue $t_k-s$ e la curva osservata a $s$. Il **riequilibrio** consiste nel modificare le quantità detenute per raggiungere alla nuova data i valori e le sensibilità assegnati. In pratica si aggiornano prima i valori delle posizioni esistenti, poi i valori obiettivo e infine la differenza da acquistare o vendere.
:::

:::esempio{titolo="Controllo del costo di un riequilibrio"}
Al tempo $1$ si devono coprire impegni residui di valore attuale $840\,\mathrm{euro}$ e duration di $3$ anni. Le scadenze residue dei titoli disponibili sono $1$ e $5$ anni. Per uguagliare la duration occorrono quote uguali, quindi i valori obiettivo sono $420\,\mathrm{euro}$ per titolo. Le posizioni esistenti valgono $350\,\mathrm{euro}$ e $460\,\mathrm{euro}$. Si comprano $70\,\mathrm{euro}$ del titolo breve e si vendono $40\,\mathrm{euro}$ del lungo. In assenza di cassa o altri ricavi, la differenza di $30\,\mathrm{euro}$ è il nuovo capitale da apportare. Una compravendita può redistribuire la duration, mentre per cambiare il totale investito serve un trasferimento di risorse.
:::

:::osservazione
Se tra due valutazioni la forza rimane costante, nessun flusso scade e nessuna posizione cambia, ogni valore attuale residuo è il vecchio valore moltiplicato per $e^{\delta s}$. I pesi restano invariati e tutte le duration scendono di $s$ anni. In questa situazione l'uguaglianza di valori e duration è preservata. Dopo il pagamento di un flusso oppure una variazione della curva, bisogna ricalcolare i pesi con le nuove posizioni. Anche la scadenza della passività si misura dalla nuova data, perché il confronto deve usare la stessa origine temporale.
:::

## Copertura dei flussi e shock di curva

:::definizione{#limiti-immunizzazione titolo="Corrispondenza dei flussi per scadenza"}
Si ha **corrispondenza dei flussi** quando, a ogni data, gli incassi del portafoglio sono uguali ai pagamenti dovuti in quella data. Se i flussi sono certi e i fattori di sconto sono comuni alle due parti, i termini del surplus si cancellano data per data per qualunque curva. Questa uguaglianza fornisce anche la liquidità alle scadenze pattuite. Per un unico impegno, un titolo zero coupon con pari importo e identica scadenza realizza la corrispondenza nel modello.
:::

:::esempio{titolo="Una variazione limitata a una scadenza"}
Alla forza di riferimento, il portafoglio abbia $500\,\mathrm{euro}$ di valore al tempo zero su ciascuno dei rimborsi ai tempi $1$ e $5$. Il debito sia al tempo $3$ e valga $1000\,\mathrm{euro}$ alla stessa data di valutazione. Se il fattore di sconto della scadenza a un anno scende del $2\%$ in termini relativi e gli altri rimangono invariati, il primo incasso vale $490\,\mathrm{euro}$. Il nuovo surplus è $490+500-1000=-10\,\mathrm{euro}$. La variazione riguarda una sola scadenza, quindi la conclusione di Redington per shock paralleli della forza resta distinta dal calcolo per nodi.
:::

:::osservazione
Un modo per descrivere gli spostamenti non paralleli è introdurre una forza a pronti distinta $\delta_t$ per ogni scadenza $t$. Il valore attuale del flusso netto $N_t$ alla data $t$ è $N_te^{-\delta_t t}$. Se cambia soltanto $\delta_t$, la derivata del surplus rispetto a quella forza è $-tN_te^{-\delta_t t}$. Se $N_t=0$ per tutte le date, ciascuna sensibilità è nulla. Se si impone soltanto la corrispondenza delle duration, la somma delle sensibilità per uno spostamento comune può essere nulla anche quando quelle associate alle singole scadenze sono diverse da zero.
:::

:::attenzione
La portata della copertura dipende dai flussi e dal modello di variazione dei tassi. La positività locale del surplus riguarda shock sufficientemente piccoli. Se viene assegnato uno shock finito, il segno si verifica attualizzando gli importi con la curva effettivamente assegnata. Un portafoglio di titoli con rimborso incerto richiede anche ipotesi sui flussi, perché il calcolo di duration e convexity descritto qui assume pagamenti fissati.
:::
